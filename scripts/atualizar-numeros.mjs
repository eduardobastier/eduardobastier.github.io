// Atualiza dados/data.json com os números de TikTok, Instagram e YouTube.
// Roda todo dia pelo GitHub Actions (.github/workflows/numeros.yml).
// Cada rede é independente: se uma falhar ou não tiver acesso, mantém os números anteriores dela.
// Saída extra: se o TikTok devolver um refresh token novo, grava em $GITHUB_OUTPUT para o workflow salvar.
import { readFileSync, writeFileSync, appendFileSync } from "node:fs";

const FILE = new URL("../dados/data.json", import.meta.url);
const D = JSON.parse(readFileSync(FILE, "utf8"));
const env = process.env;
const DAY = 86400_000;
const now = new Date();
const from = new Date(now - 90 * DAY);
const ymd = (d) => d.toISOString().slice(0, 10);

const get = async (url, opt = {}) => {
  const r = await fetch(url, opt);
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.error?.code && j.error.code !== "ok") throw new Error(`${r.status} ${url.split("?")[0]}: ${JSON.stringify(j.error ?? j).slice(0, 300)}`);
  return j;
};
const post = (url, body) =>
  get(url, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(body) });
const median = (a) => {
  if (!a.length) return 0;
  const s = [...a].sort((x, y) => x - y), m = s.length >> 1;
  return Math.round(s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2);
};
const mean = (a) => (a.length ? Math.round(a.reduce((x, y) => x + y, 0) / a.length) : 0);
const r3 = (x) => Math.round(x * 1000) / 1000;
const r5 = (x) => Math.round(x * 100000) / 100000;
const sum = (a, k) => a.reduce((s, v) => s + (v[k] || 0), 0);
const out = (k, v) => env.GITHUB_OUTPUT && appendFileSync(env.GITHUB_OUTPUT, `${k}=${v}\n`);
const mask = (v) => v && console.log(`::add-mask::${v}`);

// Mantém o texto em inglês de um destaque que já existia; títulos novos usam o título original nos dois idiomas.
const topList = (net, items) =>
  items.map((v) => {
    const old = (D.top?.[net] || []).find((o) => o.url === v.url) || {};
    return { ...old, pt: old.pt || v.title, en: old.en || v.title, url: v.url, views: v.views };
  });

async function tiktok() {
  if (!env.TIKTOK_REFRESH_TOKEN) return "sem TIKTOK_REFRESH_TOKEN";
  const t = await post("https://open.tiktokapis.com/v2/oauth/token/", {
    client_key: env.TIKTOK_CLIENT_KEY, client_secret: env.TIKTOK_CLIENT_SECRET,
    grant_type: "refresh_token", refresh_token: env.TIKTOK_REFRESH_TOKEN,
  });
  mask(t.access_token); mask(t.refresh_token);
  if (t.refresh_token && t.refresh_token !== env.TIKTOK_REFRESH_TOKEN) out("tiktok_refresh", t.refresh_token);
  const H = { Authorization: `Bearer ${t.access_token}` };
  const u = (await get("https://open.tiktokapis.com/v2/user/info/?fields=follower_count,likes_count,video_count", { headers: H })).data.user;
  const vids = [];
  let cursor, more = true;
  while (more && vids.length < 1000) {
    const j = await get("https://open.tiktokapis.com/v2/video/list/?fields=id,create_time,title,share_url,view_count,like_count,comment_count,share_count", {
      method: "POST", headers: { ...H, "Content-Type": "application/json" },
      body: JSON.stringify({ max_count: 20, ...(cursor ? { cursor } : {}) }),
    });
    vids.push(...j.data.videos);
    cursor = j.data.cursor; more = j.data.has_more;
    if (j.data.videos.at(-1)?.create_time * 1000 < from) break;
  }
  const p = vids.filter((v) => v.create_time * 1000 >= from)
    .map((v) => ({ title: v.title, url: v.share_url, views: v.view_count || 0, likes: v.like_count || 0, comments: v.comment_count || 0, shares: v.share_count || 0 }));
  const views = sum(p, "views"), likes = sum(p, "likes"), comments = sum(p, "comments"), shares = sum(p, "shares");
  Object.assign(D.tiktok, {
    followers: u.follower_count, totalLikes: u.likes_count, posts: p.length, views,
    median: median(p.map((v) => v.views)), mean: mean(p.map((v) => v.views)),
    er: views ? r5((likes + comments + shares) / views) : 0,
    over100k: p.filter((v) => v.views >= 100000).length, likes, comments, shares,
  });
  // Destaques: os 4 mais vistos de todos os tempos, preservando os campos extras (publi, compartilhamentos).
  D.top.tiktok = topList("tiktok", [...vids].sort((a, b) => b.view_count - a.view_count).slice(0, 4)
    .map((v) => ({ title: v.title, url: v.share_url, views: v.view_count })));
  return "ok";
}

async function instagram() {
  if (!env.IG_TOKEN || !env.IG_USER_ID) return "sem IG_TOKEN/IG_USER_ID";
  mask(env.IG_TOKEN);
  const G = "https://graph.facebook.com/v23.0", tk = `access_token=${env.IG_TOKEN}`;
  const me = await get(`${G}/${env.IG_USER_ID}?fields=followers_count,media_count&${tk}`);
  const media = [];
  let next = `${G}/${env.IG_USER_ID}/media?fields=id,caption,permalink,timestamp,media_type,media_product_type&limit=50&${tk}`;
  while (next) {
    const j = await get(next);
    media.push(...j.data);
    next = j.data.length && new Date(j.data.at(-1).timestamp) >= from ? j.paging?.next : null;
  }
  const p = [];
  for (const m of media.filter((m) => new Date(m.timestamp) >= from)) {
    const metrics = "views,likes,comments,shares,saved";
    const ins = await get(`${G}/${m.id}/insights?metric=${metrics}&${tk}`).catch(() => ({ data: [] }));
    const v = Object.fromEntries(ins.data.map((x) => [x.name, x.values?.[0]?.value ?? x.total_value?.value ?? 0]));
    p.push({ title: (m.caption || "").split("\n")[0].slice(0, 90), url: m.permalink, views: v.views || 0, likes: v.likes || 0, comments: v.comments || 0, shares: v.shares || 0, saves: v.saved || 0 });
  }
  const views = sum(p, "views");
  const reach = await get(`${G}/${env.IG_USER_ID}/insights?metric=reach&period=day&metric_type=total_value&since=${Math.floor((now - 30 * DAY) / 1000)}&until=${Math.floor(now / 1000)}&${tk}`)
    .then((j) => j.data[0]?.total_value?.value).catch(() => null);
  Object.assign(D.instagram, {
    followers: me.followers_count, mediaCount: me.media_count, posts: p.length, views,
    median: median(p.map((v) => v.views)), mean: mean(p.map((v) => v.views)),
    er: views ? r5((sum(p, "likes") + sum(p, "comments") + sum(p, "shares") + sum(p, "saves")) / views) : 0,
    saves: sum(p, "saves"), ...(reach ? { reach30d: reach } : {}),
  });
  D.top.instagram = topList("instagram", [...p].sort((a, b) => b.views - a.views).slice(0, 4))
    .map((v) => ({ ...v, saves: p.find((x) => x.url === v.url)?.saves || undefined }));
  return "ok";
}

async function youtube() {
  if (!env.YT_REFRESH_TOKEN) return "sem YT_REFRESH_TOKEN";
  const t = await post("https://oauth2.googleapis.com/token", {
    client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET,
    grant_type: "refresh_token", refresh_token: env.YT_REFRESH_TOKEN,
  });
  mask(t.access_token);
  const H = { headers: { Authorization: `Bearer ${t.access_token}` } };
  const ch = (await get("https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails&mine=true", H)).items[0];
  const A = (q) => get(`https://youtubeanalytics.googleapis.com/v2/reports?ids=channel==MINE&startDate=${ymd(from)}&endDate=${ymd(now)}&${q}`, H);
  const tot = await A("metrics=views,estimatedMinutesWatched,subscribersGained,subscribersLost,likes,comments,shares");
  const [views, minutes, gained, lost, likes, comments, shares] = tot.rows?.[0] || [];
  // Vídeos publicados nos últimos 90 dias e as visualizações de cada um
  const ids = [];
  let page = "";
  do {
    const j = await get(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=${ch.contentDetails.relatedPlaylists.uploads}${page && `&pageToken=${page}`}`, H);
    const fresh = j.items.filter((i) => new Date(i.contentDetails.videoPublishedAt) >= from);
    ids.push(...fresh.map((i) => i.contentDetails.videoId));
    page = fresh.length === j.items.length ? j.nextPageToken : "";
  } while (page);
  const per = [];
  for (let i = 0; i < ids.length; i += 50) {
    const j = await get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${ids.slice(i, i + 50).join(",")}`, H);
    per.push(...j.items.map((v) => +v.statistics.viewCount || 0));
  }
  Object.assign(D.youtube, {
    followers: +ch.statistics.subscriberCount, netSubs90d: (gained || 0) - (lost || 0),
    videos: +ch.statistics.videoCount, views: views || 0,
    median: median(per), mean: mean(per),
    er: views ? r5(((likes || 0) + (comments || 0) + (shares || 0)) / views) : 0,
    watchHours: Math.round((minutes || 0) / 60),
  });
  const top = await A("dimensions=video&metrics=views&sort=-views&maxResults=4").catch(() => null);
  if (top?.rows?.length) {
    const j = await get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${top.rows.map((r) => r[0]).join(",")}`, H);
    const title = Object.fromEntries(j.items.map((v) => [v.id, v.snippet.title]));
    D.top.youtube = topList("youtube", top.rows.map(([id, v]) => ({ title: title[id] || id, url: `https://www.youtube.com/watch?v=${id}`, views: v })));
  }
  // Público: gênero, idade e país (últimos 90 dias)
  const demo = await A("dimensions=ageGroup,gender&metrics=viewerPercentage").catch(() => null);
  if (demo?.rows?.length) {
    const groups = ["age13-17", "age18-24", "age25-34", "age35-44", "age45-54", "age55-64"];
    const ages = groups.map(() => 0); let male = 0, a2554 = 0, total = 0;
    for (const [age, g, pct] of demo.rows) {
      total += pct;
      if (g === "male") male += pct;
      if (["age25-34", "age35-44", "age45-54"].includes(age)) a2554 += pct;
      const i = groups.indexOf(age); ages[i >= 0 ? i : 5] += pct;
    }
    if (total) {
      D.audience.male.youtube = r3(male / total);
      D.audience.age25_54.youtube = r3(a2554 / total);
      D.audience.ages.youtube = ages.map((x) => r3(x / total));
    }
  }
  const geo = await A("dimensions=country&metrics=views&sort=-views").catch(() => null);
  if (geo?.rows?.length) {
    const all = geo.rows.reduce((s, r) => s + r[1], 0);
    const br = geo.rows.find((r) => r[0] === "BR")?.[1] || 0;
    if (all) D.audience.brazil.youtube = r3(br / all);
  }
  return "ok";
}

const results = {};
for (const [net, fn] of Object.entries({ tiktok, instagram, youtube })) {
  try { results[net] = await fn(); } catch (e) { results[net] = `erro: ${e.message}`; }
  console.log(`${net}: ${results[net]}`);
}
if (!Object.values(results).includes("ok")) { console.log("Nenhuma rede atualizada; data.json fica como está."); process.exit(0); }

D.totals.followers = D.tiktok.followers + D.instagram.followers + D.youtube.followers;
D.totals.views90d = D.tiktok.views + D.instagram.views + D.youtube.views;
D.generatedAt = now.toISOString().replace(/\.\d+Z$/, "Z");
D.periodFrom = ymd(from);
D.periodTo = ymd(now);
writeFileSync(FILE, JSON.stringify(D, null, 2) + "\n");

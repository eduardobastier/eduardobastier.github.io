(function(){
var T={
pt:{locale:"pt-BR",
 why:"Por que marcas me contratam",whyNote:"Tirado dos dados dos últimos 90 dias.",
 w1t:"compartilhamentos",w1:"No TikTok, em 90 dias. Meu público manda as dicas para outras pessoas.",
 w2t:"vídeo por dia, em média",w2:"{n} vídeos no TikTok em 90 dias. Constância que mantém o algoritmo a favor.",
 w3t:"têm de 25 a 54 anos",w3:"A faixa que mais compra celular e acessórios, no TikTok.",
 w4t:"dos destaques",w4:"são sobre Samsung ou Motorola. Meu público usa Android e quer tirar mais do aparelho.",
 caseH:"Estudo de caso",caseGoal:"Objetivo",caseDel:"Entrega",caseRes:"Resultado",caseOpen:"Ver o vídeo",
 cV:"visualizações",cR:"pessoas alcançadas",cS:"compartilhamentos",cX:"a taxa média de compartilhamento do canal",
 fits:"Combina com",fitList:["Celulares","Acessórios","Apps","Operadoras","Bancos digitais","Cursos e ferramentas de IA","Lojas de eletrônicos"],
 pkH:"Formatos de parceria",pkNote:"Escolha um formato ou combine vários. Valores sob consulta.",extrasL:"Extras",from:"a partir de",onReq:"sob consulta",
 resp:"Respondo em até {n} h",deliv:"Entrega em até {n} dias após receber o produto",
 testiH:"O que dizem as marcas",
updated:"Atualizado em 2 de novembro",pdf:"Baixar em PDF",pdfBusy:"Gerando PDF…",pdfErr:"Não foi possível gerar o PDF",pdfOff:"Sem internet: tente de novo",light:"Claro",dark:"Escuro",
 role:"Tech · smartphones, apps e IA",
 pitch:"Ensino a <mark>usar melhor o celular</mark> que as pessoas já têm: funções escondidas de smartphone, dicas de aplicativos, reviews diretos e truques de IA.",
 bigL:"seguidores somados no TikTok, Instagram e YouTube, em português e a maioria no Brasil.",
 k1:"visualizações em 90 dias",k2:"engajamento no TikTok",k3:"do TikTok é do Brasil",
 perPlat:"Números por plataforma",perNote:"Últimos 90 dias. Engajamento = curtidas + comentários + compartilhamentos ÷ visualizações.",
 followers:"seguidores",subs:"inscritos",likesTotal:"curtidas no total",posts:"publicações",netSubs:"líquidos em 90 dias",
 videosPub:"Vídeos publicados",postsPub:"Publicações",videosCh:"Vídeos no canal",views:"Visualizações",
 medianV:"Mediana por vídeo",medianP:"Mediana por post",meanV:"Média por vídeo",meanP:"Média por post",er:"Engajamento",
 over100k:"Vídeos acima de 100 mil",saves:"Salvamentos",watch:"Tempo assistido",
 who:"Quem assiste",whoNote:"Seguidores no Instagram e TikTok; espectadores no YouTube.",
 men:"Homens",a2554:"Entre 25 e 54 anos",brazil:"Brasil",ofAud:"% do público",age:"Faixa etária",years:"anos",
 tops:"Conteúdos que mais rodaram",topsNote:"Toque num título para abrir o post original.",
 v:"views",saved:"salvos",shares:"compart.",publi:"PUBLI",
 themes:"Temas e parcerias",about:"Sobre o que eu falo",how:"Como podemos trabalhar",
 pillars:[["Samsung Galaxy","One UI 8.5 e 9, funções escondidas, bateria, câmera, Good Lock."],["Motorola","Moto Secure, gestos, desempenho, review do Signature."],["IA no dia a dia","ChatGPT para fotos e anúncios, bots com Codex."],["Apps e WhatsApp","Códigos de formatação, conversas ocultas, bloqueio de apps."],["Acessórios","Fones, power banks, capinhas, microfone de lapela, cabos."],["Notícias de tech","Lançamentos de iPhone e Samsung, bugs e jailbreak."]],
 formats:[["Vídeo dedicado","Um vídeo curto no TikTok, Reels e Shorts mostrando seu produto em uso."],["Review ou unboxing","Vídeo mais longo no YouTube, com opinião sincera."],["Série de dicas","Funções do seu produto ou app em vários vídeos, no formato que já funciona no canal."],["Pacote nas três plataformas","O mesmo roteiro adaptado para cada rede."]],
 proof:"<b>Com resultado comprovado.</b> A publi do TikTokIO passou de {v} views e {s} compartilhamentos no TikTok.",
 price:"Valores e disponibilidade sob consulta.",brands:"Marcas e produtos que já apareceram no canal",
 cta:"Vamos fazer algo juntos?",ctaP:"Mande o produto, o objetivo e o prazo. Eu respondo com uma proposta.",
 copy:"Copiar e-mail",copied:"E-mail copiado",selected:"Selecionado",links:"Todos os links",
 foot:"Fontes: APIs oficiais do Instagram, TikTok e YouTube."},
en:{locale:"en-US",
 why:"Why brands hire me",whyNote:"Based on data from the last 90 days.",
 w1t:"shares",w1:"On TikTok, in 90 days. My audience sends my tips to other people.",
 w2t:"video a day, on average",w2:"{n} TikTok videos in 90 days. Consistency that keeps the algorithm on my side.",
 w3t:"aged 25 to 54",w3:"The group that buys the most phones and accessories, on TikTok.",
 w4t:"of top posts",w4:"are about Samsung or Motorola. My audience uses Android and wants more from their phone.",
 caseH:"Case study",caseGoal:"Goal",caseDel:"Deliverable",caseRes:"Results",caseOpen:"Watch the video",
 cV:"views",cR:"people reached",cS:"shares",cX:"the channel's average share rate",
 fits:"A good fit for",fitList:["Smartphones","Accessories","Apps","Carriers","Digital banks","AI courses and tools","Electronics retailers"],
 pkH:"Partnership formats",pkNote:"Pick one format or combine several. Rates on request.",extrasL:"Extras",from:"from",onReq:"on request",
 resp:"I reply within {n} h",deliv:"Delivery within {n} days of receiving the product",
 testiH:"What brands say",
updated:"Updated on November 2",pdf:"Download as PDF",pdfBusy:"Generating PDF…",pdfErr:"Could not generate the PDF",pdfOff:"No internet: try again",light:"Light",dark:"Dark",
 role:"Tech · smartphones, apps and AI",
 pitch:"I help people <mark>get more out of the phone</mark> they already own: hidden smartphone features, app tips, straight-talking reviews and AI tricks.",
 bigL:"combined followers across TikTok, Instagram and YouTube, a Portuguese-speaking audience, mostly in Brazil.",
 k1:"views in 90 days",k2:"TikTok engagement",k3:"of TikTok viewers in Brazil",
 perPlat:"Numbers by platform",perNote:"Last 90 days. Engagement = likes + comments + shares ÷ views.",
 followers:"followers",subs:"subscribers",likesTotal:"total likes",posts:"posts",netSubs:"net in 90 days",
 videosPub:"Videos published",postsPub:"Posts",videosCh:"Videos on channel",views:"Views",
 medianV:"Median per video",medianP:"Median per post",meanV:"Average per video",meanP:"Average per post",er:"Engagement",
 over100k:"Videos over 100K",saves:"Saves",watch:"Watch time",
 who:"Audience",whoNote:"Followers on Instagram and TikTok; viewers on YouTube.",
 men:"Men",a2554:"Aged 25 to 54",brazil:"Brazil",ofAud:"% of audience",age:"Age range",years:"years",
 tops:"Top-performing content",topsNote:"Tap a title to open the original post (in Portuguese).",
 v:"views",saved:"saves",shares:"shares",publi:"SPONSORED",
 themes:"Topics and partnerships",about:"What I cover",how:"How we can work together",
 pillars:[["Samsung Galaxy","One UI 8.5 and 9, hidden features, battery, camera, Good Lock."],["Motorola","Moto Secure, gestures, performance, Signature review."],["Everyday AI","ChatGPT for photos and ads, bots built with Codex."],["Apps and WhatsApp","Formatting codes, hidden chats, app locking."],["Accessories","Earbuds, power banks, cases, lavalier mics, cables."],["Tech news","iPhone and Samsung launches, bugs and jailbreaks."]],
 formats:[["Dedicated video","One short video on TikTok, Reels and Shorts showing your product in use."],["Review or unboxing","A longer YouTube video with an honest opinion."],["Tips series","Your product's or app's features across several videos, in the format that already works on the channel."],["Three-platform bundle","One script adapted for each network."]],
 proof:"<b>Proven results.</b> The sponsored TikTokIO video passed {v} views and {s} shares on TikTok.",
 price:"Rates and availability on request.",brands:"Brands and products featured on the channel",
 cta:"Let's work together",ctaP:"Send me the product, the goal and the timeline. I'll reply with a proposal.",
 copy:"Copy email",copied:"Email copied",selected:"Selected",links:"All links",
 foot:"Sources: official Instagram, TikTok and YouTube APIs."}
};
var BR_TZ=/^America\/(Sao_Paulo|Rio_Branco|Manaus|Belem|Fortaleza|Recife|Bahia|Cuiaba|Campo_Grande|Porto_Velho|Boa_Vista|Noronha|Araguaina|Maceio|Santarem|Eirunepe)$/;
function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);}catch(e){return null;}}
function detectLang(){
  var s=store("eb-lang");if(s==="pt"||s==="en")return s;
  var l=String((navigator.languages&&navigator.languages[0])||navigator.language||"").toLowerCase();
  return l.indexOf("pt")===0?"pt":"en";
}
var lang=detectLang(), theme=store("eb-theme")==="dark"?"dark":"light", D=null;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function t(k){return T[lang][k];}
function nc(n){return new Intl.NumberFormat(t("locale"),{notation:"compact",maximumFractionDigits:1}).format(n);}
function nf(n){return new Intl.NumberFormat(t("locale")).format(n);}
function pc(x){return new Intl.NumberFormat(t("locale"),{style:"percent",minimumFractionDigits:1,maximumFractionDigits:1}).format(x);}
function dt(s){return new Intl.DateTimeFormat(t("locale"),{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(new Date(s+"T00:00:00Z"));}
function ago(iso){
  var diff=(new Date(iso)-new Date())/1000, rtf=new Intl.RelativeTimeFormat(t("locale"),{numeric:"auto"});
  var units=[["day",86400],["hour",3600],["minute",60]];
  for(var i=0;i<units.length;i++){if(Math.abs(diff)>=units[i][1])return rtf.format(Math.round(diff/units[i][1]),units[i][0]);}
  return rtf.format(0,"minute");
}
function avatar(c){var ph=D.profile&&D.profile.photo;return ph?'<img class="avatar '+c+'" src="'+esc(ph)+'" alt="Eduardo Bastier">':'<div class="avatar '+c+'" aria-hidden="true">EB</div>';}
function row(l,v){return '<div><dt>'+l+'</dt><dd>'+v+'</dd></div>';}
function plat(name,handle,big,sub,rows){return '<article class="box"><div class="plat-h"><h3>'+name+'</h3><span class="handle">'+handle+'</span></div><div class="plat-big num">'+big+'<small>'+sub+'</small></div><dl>'+rows.join("")+'</dl></article>';}
function tops(name,items){
  return '<div class="box top"><h3>'+name+'</h3>'+items.map(function(it){
    var extra=it.saves?' · '+nc(it.saves)+' '+t("saved"):(it.shares?' · '+nc(it.shares)+' '+t("shares"):'');
    return '<a class="item" href="'+esc(it.url)+'" target="_blank" rel="noopener"><span class="ttl">'+(it.sponsored?'<em>'+t("publi")+'</em>':'')+esc(it[lang])+'</span><span class="vw num">'+nc(it.views)+'<small>'+t("v")+extra+'</small></span></a>';
  }).join("")+'</div>';
}
var P=[["tiktok","TikTok"],["instagram","Instagram"],["youtube","YouTube"]];
var BUCKETS=["13–17","18–24","25–34","35–44","45–54","55+"], COLS=["--a1","--a2","--a3","--a4","--a5","--a6"];
var H={
pt:{home:"Início",mk:"Mídia Kit",role:"Tech · smartphones, apps e IA",
 pitch:"Ensino a <mark>usar melhor o celular</mark> que as pessoas já têm: funções escondidas de smartphone, dicas de aplicativos, reviews diretos e truques de IA.",
 mile:"10 mil seguidores no TikTok em 3 meses, só no orgânico",
 bigL:"pessoas me acompanham",seeMk:"Ver Mídia Kit",talk:"Falar comigo",thSub:"Textos curtos e conversas",
 dealsH:"Grupos de ofertas",dealsNote:"Promoções de tecnologia que eu confiro antes de mandar. Entre no grupo que preferir.",
 tg:"Telegram",tgSub:"Ofertas em tempo real, com alerta no celular",wa:"WhatsApp",waSub:"Só os achados que valem a pena, sem spam",pend:"link em breve",
 nowH:"O que eu faço hoje",
 now:[["Conteúdo tech","Vídeos curtos sobre funções escondidas de Samsung e Motorola, apps e WhatsApp."],["IA no dia a dia","Dicas práticas de IA para fotos, textos e trabalho."],["Curadoria de ofertas","Grupos no Telegram e WhatsApp com promoções de celulares e acessórios."],["Parcerias com marcas","Publis, stories patrocinados, vídeos dedicados, collabs e vídeos longos para marcas de tecnologia."]],
 socH:"Minhas redes",socNote:"Números atualizados dos meus perfis.",open:"Abrir perfil →",followers:"seguidores",subs:"inscritos",
 studyH:"Formação",studyT:"Programação na Estácio",studyP:"Estudei programação na Estácio, com foco em desenvolvimento front-end.",
 mkEy:"Para marcas",mkT:"Veja o Mídia Kit completo",mkP:"Público, engajamento, conteúdos que mais rodaram, estudo de caso e pacotes de parceria.",mkBtn:"Abrir Mídia Kit",mkTitle:"Mídia Kit",
 cta:"Vamos fazer algo juntos?",ctaP:"Para parcerias, publis e reviews, me mande um e-mail com o produto, o objetivo e o prazo.",copy:"Copiar e-mail",
 foot:"© 2026 Eduardo Bastier · Números das redes via APIs oficiais."},
en:{home:"Home",mk:"Media Kit",role:"Tech · smartphones, apps and AI",
 pitch:"I help people <mark>get more out of the phone</mark> they already own: hidden smartphone features, app tips, straight-talking reviews and AI tricks.",
 mile:"10K TikTok followers in 3 months, all organic",
 bigL:"people follow me",seeMk:"See Media Kit",talk:"Get in touch",thSub:"Short posts and conversations",
 dealsH:"Deals groups",dealsNote:"Tech promotions I check before sharing. Join the group you prefer.",
 tg:"Telegram",tgSub:"Real-time deals with phone alerts",wa:"WhatsApp",waSub:"Only the finds worth buying, no spam",pend:"link coming soon",
 nowH:"What I do today",
 now:[["Tech content","Short videos on hidden Samsung and Motorola features, apps and WhatsApp."],["Everyday AI","Practical AI tips for photos, writing and work."],["Deal curation","Telegram and WhatsApp groups with phone and accessory deals."],["Brand partnerships","Sponsored posts and stories, dedicated videos, collabs and long-form videos for tech brands."]],
 socH:"My channels",socNote:"Up-to-date numbers from my profiles.",open:"Open profile →",followers:"followers",subs:"subscribers",
 studyH:"Education",studyT:"Programming at Estácio",studyP:"I studied programming at Estácio, focusing on front-end development.",
 mkEy:"For brands",mkT:"See the full Media Kit",mkP:"Audience, engagement, top-performing content, a case study and partnership packages.",mkBtn:"Open Media Kit",mkTitle:"Media Kit",
 cta:"Let's work together",ctaP:"For partnerships, sponsored posts and reviews, email me the product, the goal and the timeline.",copy:"Copy email",
 foot:"© 2026 Eduardo Bastier · Channel numbers from official APIs."}
};
function h(k){return H[lang][k];}
function menuLabels(){
  document.getElementById("m-home").textContent=h("home");
  document.getElementById("m-mk").textContent=h("mk");
}
function renderHome(){
  document.querySelectorAll("[data-h]").forEach(function(el){var v=h(el.getAttribute("data-h"));if(v!=null)el.innerHTML=v;});
  document.getElementById("h-total").textContent=nc(D.totals.followers);
  document.getElementById("h-now").innerHTML=h("now").map(function(x){return '<li><b>'+x[0]+'</b><span>'+x[1]+'</span></li>';}).join("");
  var S=[["TikTok","i-tt","@eduardobastiertech","https://www.tiktok.com/@eduardobastiertech",D.tiktok.followers,"followers"],
         ["Instagram","i-ig","@eduardobastiertech","https://www.instagram.com/eduardobastiertech/",D.instagram.followers,"followers"],
         ["YouTube","i-yt","@eduardobastiertech","https://www.youtube.com/@eduardobastiertech",D.youtube.followers,"subs"],
         ["Threads","i-th","@eduardobastiertech","https://www.threads.com/@eduardobastiertech",null,"thSub"]];
  document.getElementById("h-socials").innerHTML=S.map(function(s){
    return '<a class="box soc" href="'+s[3]+'" target="_blank" rel="noopener"><div class="plat-h"><h3 style="display:flex;gap:8px;align-items:center"><svg><use href="#'+s[1]+'"/></svg>'+s[0]+'</h3><span class="handle">'+s[2]+'</span></div><div class="plat-big num">'+(s[4]==null?'<small style="margin-top:0">'+h(s[5])+'</small>':nc(s[4])+'<small>'+h(s[5])+'</small>')+'</div><span class="open">'+h("open")+'</span></a>';}).join("");
  var b=document.getElementById("h-copy");
  if(!b.dataset.w){b.dataset.w=1;b.addEventListener("click",function(){var m=document.getElementById("h-mail");
    function sel(){var r=document.createRange();r.selectNodeContents(m);var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent=t("selected");}
    try{navigator.clipboard.writeText(m.textContent.trim()).then(function(){b.textContent=t("copied");},sel);}catch(e){sel();}});}
}
function route(){
  var mk=location.hash==="#midia-kit";
  document.getElementById("view-home").hidden=mk;document.getElementById("view-mk").hidden=!mk;
  document.getElementById("m-home").setAttribute("aria-current",mk?"false":"page");
  document.getElementById("m-mk").setAttribute("aria-current",mk?"page":"false");
  document.querySelectorAll(".mp-item[data-page]").forEach(function(a){a.setAttribute("aria-current",(a.getAttribute("data-page")==="mk")===mk?"page":"false");});
  var tg=!mk&&location.hash.length>1&&document.getElementById(location.hash.slice(1));
  if(tg&&tg.id==="contato")tg.scrollIntoView();else window.scrollTo(0,0);
}

function render(){
  if(!D)return;
  document.documentElement.lang=lang==="pt"?"pt-BR":"en";
  var tt=D.tiktok, ig=D.instagram, yt=D.youtube, a=D.audience;
  var metrics=[["men",a.male],["a2554",a.age25_54],["brazil",a.brazil]].map(function(m){
    return '<div class="metric"><h3>'+t(m[0])+'</h3><div class="sub">'+t("ofAud")+'</div>'+P.map(function(p){
      var x=m[1][p[0]];return '<div class="bar"><span class="t">'+p[1]+'</span><span class="trk"><span class="fill" style="width:'+(x*100).toFixed(1)+'%"></span></span><span class="v">'+pc(x)+'</span></div>';}).join("")+'</div>';}).join("");
  var ages=P.map(function(p){
    return '<div class="stack"><span class="t">'+p[1]+'</span><div class="segs">'+a.ages[p[0]].map(function(x,j){
      if(!(x>0))return "";var pct=x*100;
      return '<div class="sg" style="flex:'+pct+' 1 0;background:var('+COLS[j]+');color:var(--t'+(j+1)+')" title="'+BUCKETS[j]+': '+pc(x)+'"><span>'+(pct>=5?Math.round(pct)+'%':"")+'</span></div>';}).join("")+'</div></div>';}).join("");
  var spons=(D.top.tiktok||[]).filter(function(i){return i.sponsored;})[0];
  var h='';
  var pf=D.profile||{};
  h+='<header class="hero"><div><div class="hero-who">'+avatar("")+'<div><h1 class="name">Eduardo Bastier<span>'+t("role")+'</span></h1></div></div><p class="pitch">'+t("pitch")+'</p>'+(pf.milestone?'<span class="mile">'+esc(pf.milestone[lang])+'</span>':'')+'</div>'+
     '<div class="hero-side"><div class="hero-stat"><div class="big-n num">'+nc(D.totals.followers)+'</div><p>'+t("bigL")+'</p></div><div class="big-row">'+
     '<div><b class="num">'+nc(D.totals.views90d)+'</b><small>'+t("k1")+'</small></div>'+
     '<div><b class="num">'+pc(tt.er)+'</b><small>'+t("k2")+'</small></div>'+
     '<div><b class="num">'+pc(a.brazil.tiktok).replace(/[.,]\d\s?%/,"%")+'</b><small>'+t("k3")+'</small></div></div></div></header>';
  h+='<section class="sec"><div class="sec-h"><h2>'+t("perPlat")+'</h2><p class="sec-note">'+t("perNote")+'</p></div><div class="grid3">'+
     plat("TikTok","@eduardobastiertech",nc(tt.followers),t("followers")+' · '+nc(tt.totalLikes)+' '+t("likesTotal"),[row(t("videosPub"),nf(tt.posts)),row(t("views"),nc(tt.views)),row(t("medianV"),nc(tt.median)),row(t("meanV"),nc(tt.mean)),row(t("er"),pc(tt.er)),row(t("over100k"),nf(tt.over100k))])+
     plat("Instagram","@eduardobastiertech",nc(ig.followers),t("followers")+' · '+nf(ig.mediaCount)+' '+t("posts"),[row(t("postsPub"),nf(ig.posts)),row(t("views"),nc(ig.views)),row(t("medianP"),nc(ig.median)),row(t("meanP"),nc(ig.mean)),row(t("er"),pc(ig.er)),row(t("saves"),nc(ig.saves))])+
     plat("YouTube","Eduardo Bastier Tech",nf(yt.followers),t("subs")+' · +'+nf(yt.netSubs90d)+' '+t("netSubs"),[row(t("videosCh"),nf(yt.videos)),row(t("views"),nc(yt.views)),row(t("medianV"),nc(yt.median)),row(t("meanV"),nc(yt.mean)),row(t("er"),pc(yt.er)),row(t("watch"),nf(yt.watchHours)+' h')])+
     '</div></section>';
  var tops12=[].concat(D.top.tiktok||[],D.top.instagram||[],D.top.youtube||[]);
  var andro=tops12.filter(function(i){return /samsung|motorola|galaxy|one ui|moto/i.test(i.pt);}).length;
  h+='<section class="sec"><div class="sec-h"><h2>'+t("why")+'</h2><p class="sec-note">'+t("whyNote")+'</p></div><div class="why">'+
   '<div class="box"><b class="num">'+nc(tt.shares)+'</b><h3>'+t("w1t")+'</h3><p>'+t("w1")+'</p></div>'+
   '<div class="box"><b class="num">'+new Intl.NumberFormat(t("locale"),{maximumFractionDigits:1}).format(tt.posts/90)+'</b><h3>'+t("w2t")+'</h3><p>'+t("w2").replace("{n}",nf(tt.posts))+'</p></div>'+
   '<div class="box"><b class="num">'+pc(a.age25_54.tiktok).replace(/[.,]\d\s?%/,"%")+'</b><h3>'+t("w3t")+'</h3><p>'+t("w3")+'</p></div>'+
   '<div class="box"><b class="num">'+andro+'/'+tops12.length+'</b><h3>'+t("w4t")+'</h3><p>'+t("w4")+'</p></div></div>';
  var cs=D.caseStudy;
  if(cs){var mult=(cs.shares/cs.views)/(tt.shares/tt.views);
   h+='<div class="box case"><div><span class="eyebrow">'+t("caseH")+' · #publi</span><h2 style="font-size:clamp(28px,4vw,40px);margin:8px 0 16px">'+esc(cs.brand)+'</h2><dl>'+
   row(t("caseGoal"),'<span style="font-weight:500">'+esc(cs.goal[lang])+'</span>')+row(t("caseDel"),'<span style="font-weight:500">'+esc(cs.delivery[lang])+'</span>')+
   '</dl><p style="margin-top:14px"><a href="'+esc(cs.url)+'" target="_blank" rel="noopener">'+t("caseOpen")+' →</a></p></div>'+
   '<div><span class="eyebrow">'+t("caseRes")+'</span><div class="case-kpis" style="margin-top:12px">'+
   '<div><b class="num">'+nc(cs.views)+'</b><small>'+t("cV")+'</small></div><div><b class="num">'+nc(cs.reach)+'</b><small>'+t("cR")+'</small></div>'+
   '<div><b class="num">'+nc(cs.shares)+'</b><small>'+t("cS")+'</small></div><div><b class="num">'+new Intl.NumberFormat(t("locale"),{maximumFractionDigits:1}).format(mult)+'×</b><small>'+t("cX")+'</small></div></div></div></div>';}
  h+='<div class="box"><h3>'+t("fits")+'</h3><div class="chips">'+t("fitList").map(function(x){return '<span class="chip">'+x+'</span>';}).join("")+'</div></div></section>';
  var tm=D.terms||{};
  h+='<section class="sec"><div class="sec-h"><h2>'+t("pkH")+'</h2><p class="sec-note">'+t("pkNote")+'</p></div><div class="pk">'+(D.packages||[]).map(function(k,i){
     return '<div class="box fmt"><div><span class="fmt-n">'+(i<9?"0":"")+(i+1)+'</span><h3>'+esc(k[lang])+'</h3><p>'+esc(lang==="pt"?k.dpt:k.den)+'</p>'+((k.platforms||[]).length?'<div class="fmt-tags">'+k.platforms.map(function(x){return '<span>'+esc(x)+'</span>';}).join("")+'</div>':'')+'</div><div class="price">'+(k.priceFrom?'<small>'+t("from")+'</small>'+new Intl.NumberFormat(t("locale"),{style:"currency",currency:"BRL",maximumFractionDigits:0}).format(k.priceFrom):'<small>'+t("onReq")+'</small>—')+'</div></div>';}).join("")+'</div>'+
     ((D.extras||[]).length?'<div class="extras"><b>'+t("extrasL")+'</b>'+D.extras.map(function(x){return '<span class="chip">'+esc(x[lang]||x.pt)+'</span>';}).join("")+'</div>':'')+
     ((tm.responseHours||tm.deliveryDays)?'<div class="terms">'+(tm.responseHours?'<span class="chip">'+t("resp").replace("{n}",tm.responseHours)+'</span>':'')+(tm.deliveryDays?'<span class="chip">'+t("deliv").replace("{n}",tm.deliveryDays)+'</span>':'')+'</div>':'')+'</section>';
  h+='<section class="sec"><div class="sec-h"><h2>'+t("who")+'</h2><p class="sec-note">'+t("whoNote")+'</p></div><div class="box aud"><div class="grid3">'+metrics+'</div><div class="metric"><h3>'+t("age")+'</h3>'+ages+
     '<div class="legend">'+BUCKETS.map(function(b,j){return '<span><i style="background:var('+COLS[j]+')"></i>'+b+' '+t("years")+'</span>';}).join("")+'</div></div></div></section>';
  h+='<section class="sec"><div class="sec-h"><h2>'+t("tops")+'</h2><p class="sec-note">'+t("topsNote")+'</p></div><div class="grid3 tops-grid">'+P.map(function(p){return tops(p[1],D.top[p[0]]||[]);}).join("")+'</div></section>';
  h+='<section class="sec"><div class="sec-h"><h2>'+t("themes")+'</h2></div><div>'+
     '<div class="box"><h3>'+t("about")+'</h3><ul class="list">'+t("pillars").map(function(x){return '<li><b>'+x[0]+'</b><span>'+x[1]+'</span></li>';}).join("")+'</ul></div>'+
     '</div>'+
     '<div class="box"><h3>'+t("brands")+'</h3><div class="chips">'+["Motorola","Samsung","Xiaomi / Redmi","Nothing","i2go","FIFINE","JOVI","Lenovo","Xundd","TikTokIO"].map(function(b){return '<span class="chip">'+b+'</span>';}).join("")+'</div></div></section>';
  if((D.testimonials||[]).length){h+='<section class="sec"><div class="sec-h"><h2>'+t("testiH")+'</h2></div><div class="two">'+D.testimonials.map(function(q){return '<blockquote class="box quote" style="margin:0">“'+esc(q[lang]||q.pt)+'”<footer>'+esc(q.name)+' · '+esc(q.company)+'</footer></blockquote>';}).join("")+'</div></section>';}
  h+='<section class="contact"><div>'+avatar("sm")+'<h2 style="margin-top:16px">'+t("cta")+'</h2><p>'+t("ctaP")+'</p></div><div><span class="mail" id="mail">contatoeduardobastier@gmail.com</span><div class="row"><button class="btn" id="copy" type="button">'+t("copy")+'</button><a class="btn ghost" href="https://beacons.ai/eduardobastiertech" target="_blank" rel="noopener">'+t("links")+'</a></div></div></section>';
  h+='<p class="foot">'+t("foot").replace("{from}",dt(D.periodFrom)).replace("{to}",dt(D.periodTo)).replace("{reach}",nf(ig.reach30d))+'</p>';
  document.getElementById("content").innerHTML=h;
  wireCopy(); renderHome(); chrome();
}
function chrome(){
  menuLabels();
  var pb=document.getElementById("pdf");if(!pb.disabled)pb.textContent=t("pdf");
  document.getElementById("updated").textContent=D?t("updated").replace("{ago}",ago(D.generatedAt)):"…";
  document.querySelectorAll("[data-lang]").forEach(function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-lang")===lang));});
  document.querySelectorAll("[data-theme-set]").forEach(function(b){var m=b.getAttribute("data-theme-set");b.textContent=t(m);b.setAttribute("aria-pressed",String(m===theme));});
  document.getElementById("mbtn").setAttribute("aria-label",lang==="pt"?"Menu":"Menu");
  document.getElementById("theme-group").setAttribute("aria-label",lang==="pt"?"Tema":"Theme");
}
function wireCopy(){
  var btn=document.getElementById("copy"),mail=document.getElementById("mail");
  btn.addEventListener("click",function(){
    function sel(){var r=document.createRange();r.selectNodeContents(mail);var s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent=t("selected");}
    try{navigator.clipboard.writeText(mail.textContent.trim()).then(function(){btn.textContent=t("copied");},sel);}catch(e){sel();}
  });
}
function applyTheme(){document.documentElement.setAttribute("data-theme",theme);}
document.querySelectorAll("[data-lang]").forEach(function(b){b.addEventListener("click",function(){lang=b.getAttribute("data-lang");store("eb-lang",lang);render();});});
document.querySelectorAll("[data-theme-set]").forEach(function(b){b.addEventListener("click",function(){theme=b.getAttribute("data-theme-set");store("eb-theme",theme);applyTheme();chrome();});});
applyTheme();
try{D=JSON.parse(document.getElementById("fallback").textContent);}catch(e){}
render();
function refresh(){
  fetch("dados/data.json",{cache:"no-store"}).then(function(r){if(!r.ok)throw 0;return r.json();}).then(function(n){
    if(n&&n.generatedAt&&(!D||n.generatedAt!==D.generatedAt)){D=n;render();}else chrome();
  }).catch(function(){chrome();});
}
route(); window.addEventListener("hashchange",route);
// Menu do celular: botão ☰ abre um menu pequeno com páginas, grupos e preferências
(function(){
  var btn=document.getElementById("mbtn"), pop=document.getElementById("mpop");
  function setOpen(open,focusBtn){
    pop.classList.toggle("open",open);btn.setAttribute("aria-expanded",String(open));
    if(open){var first=pop.querySelector(".mp-item");if(first)first.focus({preventScroll:true});}
    else if(focusBtn)btn.focus({preventScroll:true});
  }
  btn.addEventListener("click",function(e){e.stopPropagation();setOpen(!pop.classList.contains("open"));});
  document.addEventListener("click",function(e){if(pop.classList.contains("open")&&!pop.contains(e.target))setOpen(false);});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&pop.classList.contains("open"))setOpen(false,true);});
  pop.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){setOpen(false);});});
  window.addEventListener("resize",function(){if(innerWidth>700)setOpen(false);});
})();
// PDF do Mídia Kit: baixa o arquivo direto (html2pdf.js, carregado só no primeiro clique), sempre no tema claro
var PDF_LIB="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
function loadScript(src,ready){
  return new Promise(function(ok,fail){
    if(ready())return ok();
    var s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=fail;document.head.appendChild(s);
  });
}
function loadPdfLib(){
  return Promise.all([
    loadScript(PDF_LIB,function(){return !!window.html2pdf;}).catch(function(){throw "offline";}),
    loadScript("js/foto-pdf.js",function(){return !!window.EB_FOTO_PDF;})
  ]);
}
function pdfWorker(){
  return html2pdf().set({
    margin:10,filename:"midia-kit-eduardo-bastier.pdf",
    image:{type:"jpeg",quality:0.95},
    html2canvas:{scale:2,useCORS:true,backgroundColor:"#FFFBF0",scrollX:0,scrollY:0,
      onclone:function(doc){doc.querySelectorAll("img").forEach(function(i){if(window.EB_FOTO_PDF)i.src=window.EB_FOTO_PDF;});}},
    jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},
    pagebreak:{mode:["css","legacy"],avoid:[".sec",".box",".hero",".metric",".contact"]}
  }).from(document.getElementById("content"));
}
document.getElementById("pdf").addEventListener("click",function(){
  var btn=this, oldTheme=theme;
  if(btn.disabled)return;
  btn.disabled=true;btn.textContent=t("pdfBusy");
  if(theme!=="light"){theme="light";applyTheme();}
  document.documentElement.classList.add("pdf-mode");
  function done(){
    document.documentElement.classList.remove("pdf-mode");
    if(oldTheme!==theme){theme=oldTheme;applyTheme();}
    btn.disabled=false;chrome();
  }
  loadPdfLib().then(function(){return pdfWorker().save();}).then(done,function(e){done();btn.textContent=t(e==="offline"?"pdfOff":"pdfErr");});
});
document.querySelector(".brand").addEventListener("click",function(e){
  e.preventDefault();
  var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({top:0,behavior:reduce?"auto":"smooth"});
});
refresh(); setInterval(refresh,5*60*1000); setInterval(chrome,60*1000);
})();

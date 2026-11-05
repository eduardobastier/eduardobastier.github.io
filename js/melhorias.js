document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{
 const side=document.querySelector('#view-home .hero-side');
 if(side&&!side.querySelector('.strip')){const s=document.createElement('div');s.className='strip';
  const en=(document.documentElement.lang||'').startsWith('en');const L=en?'en-US':'pt-BR';
  const f=n=>n>=1e6?(n/1e6).toLocaleString(L,{maximumFractionDigits:1})+(en?'M':' mi'):n>=1e3?(n/1e3).toLocaleString(L,{maximumFractionDigits:1})+(en?'K':' mil'):String(n);
  const draw=d=>{s.innerHTML='<div><b>'+f(d.totals.followers)+'</b><small>'+(en?'followers':'seguidores')+'</small></div><div><b>'+f(d.totals.views90d)+'</b><small>'+(en?'views in 90 days':'views em 90 dias')+'</small></div><div><b>'+(d.tiktok.er*100).toLocaleString(L,{maximumFractionDigits:1})+'%</b><small>'+(en?'engagement':'engajamento')+'</small></div>'};
  draw({totals:{followers:22543,views90d:2884359},tiktok:{er:.03797}});side.prepend(s);
  fetch('dados/data.json').then(r=>r.json()).then(draw).catch(()=>{})}
},400));

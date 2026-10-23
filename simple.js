const viewer=document.querySelector('#photo-viewer');let lastPhoto;
document.querySelectorAll('a.photo').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();lastPhoto=link;viewer.querySelector('img').src=link.href;viewer.querySelector('img').alt=link.querySelector('img').alt;viewer.querySelector('p').textContent=link.querySelector('img').alt;viewer.showModal();}));
viewer.querySelector('button').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',e=>{if(e.target===viewer){const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close();}});viewer.addEventListener('close',()=>lastPhoto?.focus());document.querySelectorAll('video:not([data-preview])').forEach(video=>video.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();})));

const preview=document.querySelector('[data-preview]');
const fullVideo=document.querySelector('#meute-video');
const clipStart=document.querySelector('.clip-start');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
let clipVisible=false;
function updatePreview(){
  if(clipVisible&&!reduceMotion.matches&&!document.hidden&&fullVideo.hidden){preview.play().catch(()=>{});}else{preview.pause();}
}
new IntersectionObserver(entries=>{
  clipVisible=entries[0].isIntersecting;
  if(clipVisible&&fullVideo.preload==='none'){fullVideo.preload='metadata';fullVideo.load();}
  updatePreview();
},{rootMargin:'200px'}).observe(preview);
reduceMotion.addEventListener('change',updatePreview);
document.addEventListener('visibilitychange',updatePreview);
clipStart.addEventListener('click',()=>{
  preview.pause();preview.hidden=true;clipStart.hidden=true;
  fullVideo.hidden=false;fullVideo.preload='auto';fullVideo.muted=false;
  fullVideo.play().catch(()=>{});fullVideo.focus();
});

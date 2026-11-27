(()=>{
// Keep the complete narrative and its existing recordings in one destination.
const origin=document.getElementById('territoire-origines');
if(origin){const note=document.createElement('article');note.className='documented-archives';note.innerHTML='<h3>Les traces déjà réunies</h3><p>Le récit d’origine, deux podcasts de présentation et quatre chansons accompagnent la naissance de l’IbèreTerre. Les images du jardin, du safran, du verger et de la Meute en montrent la vie sur le terrain.</p><p>Ces récits et créations composent la mémoire du projet. Ils sont présentés comme tels, sans leur attribuer la valeur de documents historiques.</p><button class="button" data-propose-action="Partager un récit, une photographie ou une archive :">Partager une trace ↗</button>';origin.prepend(note);}
const dossier=territoryDossier;territoryDossier=function(id){if(id==='memoire'){document.getElementById('detailDialog').close();window.ecoExplorer.open('territoire-origines');return;}dossier(id);};
// Remove empty future collection entries until their five source cards are ready.

document.querySelectorAll('[href="atelier-cartes.html"],.territory-footer a[href="index.html"]').forEach(a=>a.remove());
document.addEventListener('click',e=>{const a=e.target.closest('a[href="#podcasts"],a[href="#origines"]');if(!a)return;e.preventDefault();e.stopImmediatePropagation();document.getElementById('detailDialog').close();window.ecoExplorer.open('territoire-origines');},true);
window.ecoLanguage?.refresh(origin);
})();

document.querySelectorAll('#atlas>button').forEach(b=>b.remove());

(()=>{for(const [id,file,alt]of [['jardin-safran','safran.webp','Les fleurs de safran sur le terrain'],['jardin-potager','base-reelle.jpg','Les cultures et les installations de la Base'],['ecojardin-base','base-reelle.jpg','La Base autonome réelle'],['meute-garantie','meute.webp','Les chiens dans les bois du territoire']]){const section=document.getElementById(id);if(!section||section.querySelector('img'))continue;const img=document.createElement('img');img.className='chapter-landscape';img.src='assets/'+file;img.alt=alt;img.loading='lazy';section.querySelector('.chapter-intro')?.after(img);}})();
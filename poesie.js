(()=>{const poems={
'.territory-lead':'Des terres acquises pour racines,\nUne Base autonome au matin,\nLa source, les bois, les collines,\nDix chiens auprès de dix gardiens.\n\nÉcoJardin cultive la terre,\nLa Meute en prolonge les liens ;\nL’IbèreTerre conduit ses affaires,\nEt choisit ses propres chemins.',
'.gates-section .section-heading>p':'Chaque carte ouvre un passage,\nChaque lieu dessine un lien ;\nDu terrain jusqu’à ses usages,\nLe plateau rejoint le quotidien.',
'#atlas .section-heading>p':'La prairie au bord des futaies,\nLa source au détour du chemin ;\nLa Base où les jours se relaient,\nPuis les bois, la rivière au loin.',
'#interieur .section-heading>p':'L’eau recueillie, la terre nourrie,\nLe soleil au creux des abris ;\nDes mains qui prennent soin de la vie,\nDes voix pour les choix réunis.',
'#activites .section-heading>p':'Du safran jusqu’aux jeunes ramures,\nDes gardiens aux chiens réunis,\nLes gestes répondent aux cultures,\nEt les liens traversent les vies.',
'#ecojardin-ouvrages .section-heading>p':'Du safran aux arbres qui poussent,\nDu potager aux chants d’oiseaux,\nLes saisons réveillent les pousses,\nLes mains prennent soin des travaux.',
'#base-ouvrages .section-heading>p':'Un passage ouvert dans la clairière,\nUne haie au bord du chemin ;\nDes gestes pour garder la terre,\nEt des lieux tenus par les mains.',
'#chiens>p:not(.eyebrow)':'Dix regards que la carte éclaire,\nDix caractères, dix chemins ;\nLa Meute a ses voix, ses repères,\nEt ses liens avec les humains.',
'#gardiens>p:not(.eyebrow)':'Dix chiens, dix gardiens dans la ronde,\nDes présences au fil des jours ;\nLes cartes donnent corps au monde,\nLes soins en prolongent le cours.',
'#missions .section-heading>p':'Une marche, un accueil, une présence,\nUn gardien, une course, un chemin ;\nLes missions prennent leur cadence\nDans les liens du quotidien.',
'#missions .missions-head>div>p':'Une sortie, une présence,\nUn accueil au bout du chemin ;\nChaque mission prend sa cadence,\nDans l’accord du chien et l’humain.',
'.passport-intro':'Un titre garde une mémoire,\nUn badge raconte un lien ;\nLe passeport porte une histoire,\nDes missions, des lieux, des chemins.',
'#alliances .section-heading>p':'Des lieux qui conduisent leurs affaires,\nDes accords qui dessinent un lien ;\nDes voix pour parler à l’extérieur,\nDes choix pour poursuivre un chemin.',
'#demarches>p:not(.eyebrow):not(.small)':'Une question, une rencontre,\nUn savoir au creux de la main ;\nUne idée que chacun nous montre,\nEt les termes d’un lien commun.'};
for(const [selector,text]of Object.entries(poems)){const el=document.querySelector(selector);if(el){el.textContent=text;el.classList.add('verse')}}
const story=document.querySelectorAll('#recit .story-layout>div:last-child>p');const stanzas=['Avant le pavillon, la route,\nLes haltes, les métiers, les mains ;\nUne mémoire qu’on écoute,\nQui traverse encore les chemins.','Puis des terres acquises pour racines,\nUn point d’ancrage, un lendemain ;\nDes bois, de l’eau, des vies voisines,\nEt la suite entre nos mains.','Sur le blanc, la patte légère\nA laissé la trace d’un lien ;\nLa Meute habite cette terre,\nEt le vivant rejoint l’humain.'];story.forEach((el,i)=>{if(stanzas[i]){el.textContent=stanzas[i];el.classList.add('verse')}});
const panel=document.querySelector('#functionPanel');if(panel){const el=panel.querySelector('.function-intro');if(el)el.dataset.noWild=''}
})();

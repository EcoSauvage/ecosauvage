const gardenWorks=[
{id:'safran',name:'Le safran & les essais',state:'CULTURE · RÉALISATIONS · ESSAIS',text:'Le safran est cultivé sur place. Le miel de safran fait partie des réalisations. Les sirops et préparations avec alcool sont au stade des tests. La torréfaction de café est un projet.',facts:['Safran : culture sur le lieu.','Miel de safran : réalisation.','Sirops et préparations avec alcool : essais.','Torréfaction de café : en projet.']},
{id:'poulailler',name:'Le poulailler',state:'À REPEUPLER',text:'Le poulailler existe. Son repeuplement est prévu autour de quatre à six poules.',facts:['Installation présente.','Repeuplement à préparer : 4 à 6 poules.']},
{id:'potager',name:'Le potager',state:'REPRISE AU PRINTEMPS',text:'Le potager doit redémarrer au printemps. La reprise fait partie des travaux saisonniers de la Base.',facts:['Espace potager existant.','Redémarrage prévu au printemps.']},
{id:'verger',name:'Le verger',state:'ARBRES PLANTÉS',text:'Les arbres sont plantés. La collection permet de retrouver leurs espèces et leurs particularités ; l’entretien accompagne leur installation et leur développement.',facts:['Plantation réalisée.','Entretien et suivi des arbres.','Collection de cartes du verger consultable.']},
{id:'oiseaux',name:'La cantine des oiseaux',state:'NICHOIRS & MANGEOIRES',text:'Les nichoirs et les mangeoires composent la cantine des oiseaux. Cette activité relie accueil de la faune, observation et entretien des équipements.',facts:['Nichoirs et mangeoires.','Suivi des installations et observation des oiseaux.']}
];
const baseWorks=[
{id:'fauchage',name:'Fauchage sélectif',state:'ENTRETIEN',text:'Le fauchage est sélectif : les interventions suivent les usages et les espaces à maintenir accessibles.'},
{id:'haies',name:'Contours & haies',state:'AU FIL DES TRAVAUX',text:'Les contours des parcelles sont entretenus et les haies se constituent progressivement.'},
{id:'acces',name:'Les accès entre les parcelles',state:'ENTRETIEN & DÉFRICHAGE',text:'L’entretien et le défrichage des accès assurent la circulation vers les autres parcelles.'},
{id:'ponctuels',name:'Les ouvrages ponctuels',state:'SELON LES BESOINS',text:'Les projets sur place se définissent selon les besoins, les moyens disponibles et les personnes concernées.'},
{id:'accueil',name:'Guinguette & emplacements',state:'RÉSERVATIONS · PROJETS · ÉTUDE',text:'Des emplacements sont déjà réservés aux chiens et aux gardiens. La guinguette et les spots pour les membres sont en projet ; d’autres emplacements sont à l’étude. Une réservation ne signifie pas qu’un équipement est déjà aménagé ou ouvert.'}
];
function workCards(items){return items.map(w=>'<button class="work-card" data-work="'+w.id+'"><small>'+w.state+'</small><h3>'+w.name+'</h3><p>'+w.text+'</p><b>Ouvrir la fiche ↗</b></button>').join('')}
document.querySelector('#gardenWorks').innerHTML=workCards(gardenWorks);document.querySelector('#baseWorks').innerHTML=workCards(baseWorks);
function openWork(id){const w=[...gardenWorks,...baseWorks].find(w=>w.id===id);if(!w)return;show(w.name,'<span class="fact-state">'+w.state+'</span><p>'+w.text+'</p>'+(w.facts?'<ul class="detail-list">'+w.facts.map(x=>'<li>'+x+'</li>').join('')+'</ul>':'')+(w.id==='verger'?'<button class="button" data-detail="verger">Ouvrir les cartes des arbres ↗</button>':''),'LES OUVRAGES / '+(gardenWorks.includes(w)?'ÉCOJARDIN':'LA BASE'))}
document.addEventListener('click',e=>{const b=e.target.closest('[data-work]');if(b)openWork(b.dataset.work)});
const originalTerritoryDetail=detail;
detail=function(id){if(id==='ecojardin')return show('ÉcoJardin · les cinq activités.','<p>Les cultures, les essais et les équipements du vivant se répartissent en cinq activités. Chaque fiche précise son état actuel.</p><div class="work-grid">'+workCards(gardenWorks)+'</div>','LES ACTIVITÉS / ÉCOJARDIN');if(id==='avenir')return show('Les ouvrages de la Base.','<p>L’entretien du terrain, les accès et les aménagements ont chacun leur rythme.</p><div class="work-grid">'+workCards(baseWorks)+'</div>','LA BASE / ENTRETIEN & AMÉNAGEMENTS');return originalTerritoryDetail(id)};
zones.base.text='Sous la source, à gauche, la Base rassemble les installations de vie quotidienne, les cinq activités d’ÉcoJardin et les espaces de la Meute. Son entretien comprend fauchage sélectif, contours de parcelles, haies et accès aux autres terrains. Des emplacements sont réservés aux chiens et gardiens ; les autres aménagements sont décrits selon leur avancement.';

// Géographie de l’eau précisée par les habitants.
zones.prairie.text='En haut du territoire, la prairie est bordée de forêt. Elle précède la parcelle où la source ressort.';
zones.source.title='L’eau ressort, puis poursuit sous terre.';
zones.source.text='Sur cette parcelle, la source ressort dans une sorte de mare. Son écoulement est ensuite enterré jusqu’en bas du territoire, où il réapparaît en ruisseau et rejoint la rivière. La Base récupère l’eau de pluie : ce circuit est distinct de celui de la source.';
zones.source.tags=['Résurgence & mare','Écoulement enterré','Ruisseau en bas'];
zones.bois.text='Les parcelles boisées prolongent le territoire. Des ruisseaux traversent ces milieux forestiers ; les chemins entretenus relient les espaces.';
zones.riviere.text='Tout en bas, la parcelle riveraine rejoint la rivière. L’eau de la source y réapparaît en ruisseau après son parcours enterré, puis se jette dans la rivière.';
zones.base.text+=' La récupération d’eau de pluie et les cuves appartiennent au circuit propre de la Base.';
territoryFunctions.eau.title='Une source, un trajet sous terre, une rivière.';
territoryFunctions.eau.intro='En haut, une prairie bordée de forêt. Puis la source ressort dans une mare, poursuit son chemin sous terre et réapparaît en ruisseau au bord de la rivière. La Base récupère l’eau de pluie ; les bois ont leurs ruisseaux.';
territoryFunctions.eau.facts=[['La source','Résurgence dans une mare sur la parcelle sous la prairie.'],['Sous terre','Écoulement enterré jusqu’en bas, puis ruisseau rejoignant la rivière.'],['La Base','Récupération d’eau de pluie et cuves : un circuit distinct.'],['Les bois','Des ruisseaux dans les parcelles forestières.']];
if(activeTerritoryFunction==='eau')renderTerritoryFunction('eau');
setZone('base');

zones.prairie.sub='Le terrain d’entraînement de la Meute';
zones.prairie.title='La prairie met la Meute en mouvement.';
zones.prairie.text='En haut du territoire, la prairie bordée de forêt accueille le terrain d’entraînement des chiens : canitrottinette, parcours et exercices. En contrebas se trouve la parcelle où la source ressort dans une mare.';
zones.prairie.tags=['Entraînement des chiens','Canitrottinette','Parcours','Bordure forestière'];
const prairieNode=document.querySelector('[data-zone="prairie"] small');if(prairieNode)prairieNode.textContent=zones.prairie.sub;

zones.base.title='La Base rassemble la vie du territoire.';
zones.base.text='La Base relie l’habitat, la récupération d’eau de pluie, le verger planté, le potager, le poulailler et les parcelles dédiées aux chiens. La guinguette y a son emplacement en projet. Les haies, le fauchage sélectif et les accès accompagnent l’organisation des espaces.';
zones.base.tags=['Verger & potager','Poulailler','Parcelles des chiens','Guinguette en projet'];
zones.immersion.title='Un abri, un feu, les bois.';
zones.immersion.text='Plus petite que la Base, la parcelle d’immersion se resserre autour d’une cabane et d’un coin feu dans les bois. Elle forme une étape entre la vie de la Base et la vallée du bas.';
zones.immersion.tags=['Petite parcelle boisée','Cabane d’immersion','Coin feu'];
zones.riviere.name='La vallée enclavée';
zones.riviere.title='Hors réseau. Au bord de l’eau.';
zones.riviere.text='Tout en bas, une vallée encaissée, hors réseau téléphonique : cours d’eau, rochers et petits spots tranquilles au bord de l’eau. Le ruisseau issu du parcours enterré de la source rejoint la rivière dans ce paysage boisé.';
zones.riviere.tags=['Vallée encaissée','Hors réseau téléphonique','Rochers & cours d’eau','Spots tranquilles'];
const valleyNode=document.querySelector('[data-zone="riviere"] strong');if(valleyNode)valleyNode.textContent='La vallée enclavée';
setZone('base');

territoryFunctions.decisions.title='Le Prince, les Héritiers, le Conseil.';
territoryFunctions.decisions.state='LES INSTANCES DE L’IBÈRETERRE';
territoryFunctions.decisions.intro='Xipoun Ramanax incarne le Prince et son droit de veto dans l’univers. Gerom porte l’interprétation et la parole. Les neuf Conseillers discutent les propositions ; les cinq Héritiers décident en dernier ressort après consultation et échanges.';
territoryFunctions.decisions.facts=[['Le Prince','Xipoun Ramanax, avec droit de veto.'],['L’interprète','Gerom : traducteur, interprète, porte-drapeau et clairon.'],['Les cinq Héritiers','Cinq cartes destinées à des proches, voisins ou personnes investies ; leur attribution reste à choisir. Décision en dernier ressort après consultation.'],['Les neuf Conseillers','Neuf chiots et leurs neuf gardiens : débat, propositions d’action et de stratégie.']];
const priorCouncilDossier=territoryDossier;
territoryDossier=function(id){if(id!=='organisation')return priorCouncilDossier(id);show('Les voix du territoire.','<p>Le Prince, les Héritiers et le Conseil composent les instances de l’univers de l’IbèreTerre.</p><div class="dossier-grid"><div class="dossier-block"><h3>Le Prince · Xipoun Ramanax</h3><p>Le Prince dispose du droit de veto. Sa parole est portée par son interprète.</p></div><div class="dossier-block"><h3>Gerom · l’interprète</h3><p>Traducteur, interprète, porte-drapeau et clairon : il assure le passage entre les voix de la Meute et celles des humains.</p></div><div class="dossier-block"><h3>Les cinq Héritiers</h3><p>Après consultation, échanges et propositions du Conseil, les cinq Héritiers décident en dernier ressort. Les cinq cartes seront attribuées à des proches, voisins ou personnes investies dans le projet.</p></div><div class="dossier-block"><h3>Le Conseil des neuf</h3><p>Les neuf chiots et les neuf gardiens discutent les propositions et élaborent des actions ou des stratégies pour le territoire.</p></div></div>','LA VIE INTÉRIEURE / LES INSTANCES')};

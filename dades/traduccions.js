// ============================================================
// DADES: Traduccions de la interfície i contingut de seccions
// Poble: Montbrull (exemple fictici)
// ============================================================
// Estructura de cada entrada:
//   'clau': { ca: '...', es: '...', en: '...', fr: '' }
//
// Regla: cap cadena pot ser buida. Si una traducció falta,
// `traduir()` farà fallback al català (IDIOMA_PER_DEFECTE).
// ============================================================


// ============================================================
// SECCIÓ: Textos fixos de la interfície d'usuari (UI)
// Responsabilitat: botons, etiquetes, missatges d'estat
// ============================================================

/**
 * Textos invariables de la UI: botons, etiquetes i missatges.
 * S'actualitzen automàticament en canviar d'idioma via
 * `actualitzarTextosDinamics()` de funcions.js.
 *
 * @type {Object.<string, {ca: string, es: string, en: string}>}
 */
const UI = {

    // --- Capçalera i navegació general ---
    'titol-app':            { ca: 'Guia de Patrimoni',           es: 'Guía de Patrimonio',              en: 'Heritage Guide', fr: 'Guide du patrimoine'              },
    'obrir-menu':           { ca: 'Obrir menú',          es: 'Abrir menú',             en: 'Open menu', fr: 'Ouvrir le menu'              },
    'tancar-menu':          { ca: 'Tancar menú',         es: 'Cerrar menú',            en: 'Close menu', fr: 'Fermer le menu'             },
    'tornar':               { ca: 'Tornar',              es: 'Volver',                 en: 'Back', fr: 'Retour'                   },

    // --- Mapa principal ---
    'mapa-poble-label':     { ca: 'Mapa interactiu d\'Amer',
                              es: 'Mapa interactivo de Amer',
                              en: 'Interactive map of Amer', fr: 'Carte interactive d\'Amer'                                                     },
    'instruccio-mapa':      { ca: 'Toca una zona per explorar-la',
                              es: 'Toca una zona para explorarla',
                              en: 'Tap a zone to explore it', fr: 'Touchez une zone pour l\'explorer'                                                         },

    // --- Filtre d'estrelles (zona.html) ---
    'filtre-estrelles':     { ca: 'Filtrar per rellevància',
                              es: 'Filtrar por relevancia',
                              en: 'Filter by relevance', fr: 'Filtrer par pertinence'                                                              },
    'filtre-tots':          { ca: 'Tots',                es: 'Todos',                  en: 'All', fr: 'Tous'                    },
    'filtre-una-estrella':  { ca: 'Recomanats',          es: 'Recomendados',           en: 'Recommended', fr: 'Recommandés'            },
    'filtre-dues-estrelles':{ ca: 'Destacats',           es: 'Destacados',             en: 'Featured', fr: 'Remarquables'               },
    'filtre-tres-estrelles':{ ca: 'Imprescindibles',     es: 'Imprescindibles',        en: 'Must-see', fr: 'Incontournables'               },

    // --- Fitxa de punt d'interès (punt-interes.html) ---
    'any-construccio':      { ca: 'Any:',                es: 'Año:',                   en: 'Year:', fr: 'Année :'                  },
    'estil-arquitectonic':  { ca: 'Estil:',              es: 'Estilo:',                en: 'Style:', fr: 'Style :'                 },
    'direccio-punt':        { ca: 'Adreça:',             es: 'Dirección:',             en: 'Address:', fr: 'Adresse :'      },
    'rellevancia':          { ca: 'Rellevància:',        es: 'Relevancia:',            en: 'Relevance:', fr: 'Pertinence :'             },

    // --- Missatges d'estat ---
    'sense-resultats':      { ca: 'Cap punt d\'interès amb aquest filtre',
                              es: 'Ningún punto de interés con este filtro',
                              en: 'No points of interest match this filter', fr: 'Aucun point d\'intérêt ne correspond à ce filtre'                                          },
    'carregant':            { ca: 'Carregant…',          es: 'Cargando…',              en: 'Loading…', fr: 'Chargement…'               },
    'error-zona':           { ca: 'No s\'ha trobat la zona sol·licitada',
                              es: 'No se ha encontrado la zona solicitada',
                              en: 'The requested zone was not found', fr: 'La zone demandée est introuvable'                                                 },
    'error-punt':           { ca: 'No s\'ha trobat el punt d\'interès',
                              es: 'No se ha encontrado el punto de interés',
                              en: 'The point of interest was not found', fr: 'Le point d\'intérêt est introuvable'                                              },

    // --- Accessibilitat: etiquetes ARIA generades per JS ---
    'aria-estrelles':       { ca: '{n} de 3 estrelles',  es: '{n} de 3 estrellas',     en: '{n} out of 3 stars', fr: '{n} étoiles sur 3'     },
    'aria-zona-boto':       { ca: 'Explorar {nom}',      es: 'Explorar {nom}',         en: 'Explore {nom}', fr: 'Explorer {nom}'          },
    'aria-marcador-pi':     { ca: 'Veure {nom}',         es: 'Ver {nom}',              en: 'View {nom}', fr: 'Voir {nom}'             },

    // --- Avís sense JavaScript ---
    'noscript-avis':        { ca: 'Aquesta aplicació requereix JavaScript per funcionar.',
                              es: 'Esta aplicación requiere JavaScript para funcionar.',
                              en: 'This application requires JavaScript to work.', fr: 'Cette application nécessite JavaScript pour fonctionner.'                                    },
};


// ============================================================
// SECCIÓ: Noms de les seccions del menú lateral
// Responsabilitat: etiquetes visibles als botons del menú
// ============================================================

/**
 * Noms mostrats als botons del menú lateral.
 * La clau ha de coincidir exactament amb `data-seccio` a l'HTML
 * i amb les entrades de `CONTINGUT_SECCIONS` i `SECCIONS_MENU`.
 *
 * @type {Object.<string, {ca: string, es: string, en: string}>}
 */
const NOMS_SECCIONS = {
    'introduccio':          { ca: 'Presentació',         es: 'Presentación',           en: 'Welcome', fr: 'Présentation'           },
    'mapa':                 { ca: 'Mapa Centre',         es: 'Mapa Centro',            en: 'Town Centre Map',        fr: 'Carte du centre'    },
    'mapa-rodalia':         { ca: 'Mapa Rodalia',        es: 'Mapa Alrededores',       en: 'Surroundings Map',   fr: 'Carte des environs' },
    'historia':             { ca: 'Història',            es: 'Historia',               en: 'History', fr: 'Histoire'                },
    'rutes':                { ca: 'Rutes',               es: 'Rutas',                  en: 'Routes', fr: 'Itinéraires'                 },
    'arquitectura':         { ca: 'Arquitectura',        es: 'Arquitectura',           en: 'Architecture', fr: 'Architecture'           },
    'equipament':           { ca: 'Equipament',          es: 'Equipamiento',           en: 'Facilities', fr: 'Équipements'  },
    'festes-tradicions':    { ca: 'Festes i tradicions', es: 'Fiestas y tradiciones',  en: 'Festivals & traditions', fr: 'Fêtes et traditions' },
    'informacio-practica':  { ca: 'Informació pràctica', es: 'Información práctica',   en: 'Practical information', fr: 'Informations pratiques'         },
	'sardana':  			{ ca: 'Sardanes', 			 es: 'Sardanas',        	  en: 'Sardanes', fr: 'Sardanes'      		   },
};	


// ============================================================
// SECCIÓ: Contingut de les seccions del menú lateral
// Responsabilitat: textos que es mostren en prémer cada secció
// ============================================================

/**
 * Texts descriptius mostrats a la secció `#seccio-contingut`
 * quan l'usuari prem un element del menú lateral.
 * Permet HTML senzill (negreta, llistes), però sense scripts.
 *
 * @type {Object.<string, {ca: string, es: string, en: string}>}
 */
const CONTINGUT_SECCIONS = {

    'introduccio': {
        ca: `<p>Benvinguts a <strong>Amer</strong>, on els carrers estrets i empedrats, l'olor de fum de les xemeneies a l'hivern i el silenci dels matins de diumenge t'embriagaran sense voler.
			<br> No serà cap sorpresa, no veureu aquí ni estàtues de grans generals ni tampoc cap arc del triomf.
			Sí que queda però el testimoni de mil anys de història,  aquí tenim la història de la gent del carrer.  <br> 
			
			
		</p>
			<p>Si passejant pel poble passeu per la plaça de Sant Miquel, fixeu-vos en el Monument als Músics. 
			El que porta el músic esculpit és un flabiol, l'instrument musical de fusta més senzill i popular, ho considerem una declaració de intencions.</p>
             <br>EN RESUM:<br>
			 <p>Aquí trobareu la història de la gent menuda, que no tenia un escrivà que li guardés registre, acompanyeu-nos a trobar-la.</p>
			 <br><br>
			 <p> Nota bibliogràfica: <br>
			 La informació que trobareu s'ha extret d'invarquit (Cercador de Patrimoni de la Generalitat), la web de Catalunya Medieval, la fantàstica guia de pobles de Catalunya i una mica de la Viquipèdia.
			Tot sacsejat i barrejat al nostre gust de forma que cap acadèmic ho validaria. <br>
			No us prengueu res al peu de la lletra: quedeu-vos amb la "història" i gaudiu de la visita.</p>
			 `,
			 

        es: `<p>Bienvenidos a <strong>Amer</strong>, donde las calles estrechas y empedradas, el olor a humo de las chimeneas en invierno y el silencio de las mañanas de domingo os embriagarán sin querer.
			<br> No será ninguna sorpresa: aquí no veréis ni estatuas de grandes generales ni tampoco ningún arco del triunfo.
			Lo que sí queda es el testimonio de mil años de historia; aquí tenemos la historia de la gente de la calle.  <br> 
		</p>
			<p>Si paseando por el pueblo pasáis por la plaza de Sant Miquel, fijaos en el Monumento a los Músicos. 
			Lo que lleva el músico esculpido es un flabiol, el instrumento musical de madera más sencillo y popular; lo consideramos una declaración de intenciones.</p>
             <br>EN RESUMEN:<br>
			 <p>Aquí encontraréis la historia de la gente humilde, que no tenía un escribano que dejara constancia de ella. Acompañadnos a descubrirla.</p>
			 <br><br>
			 <p> Nota bibliográfica: <br>
			 La información que encontraréis se ha extraído de invarquit (Buscador de Patrimonio de la Generalitat), la web de Catalunya Medieval, la fantástica guía de pueblos de Cataluña y un poco de la Wikipedia.
			Todo agitado y mezclado a nuestro gusto, de forma que ningún académico lo validaría. <br>
			No os toméis nada al pie de la letra: quedaos con la "historia" y disfrutad de la visita.</p>
			 `,

        en: `<p>Welcome to <strong>Amer</strong>, where the narrow cobbled streets, the smell of wood smoke from the chimneys in winter and the silence of Sunday mornings will win you over before you know it.
			<br> It will come as no surprise: here you won't see statues of great generals, nor any triumphal arch.
			What does remain is the testimony of a thousand years of history; here we have the history of ordinary people.  <br> 
		</p>
			<p>If, while strolling around the village, you pass through Sant Miquel Square, take a look at the Musicians' Monument. 
			What the sculpted musician is holding is a flabiol, the simplest and most popular wooden musical instrument; we consider it a statement of intent.</p>
             <br>IN SHORT:<br>
			 <p>Here you will find the history of humble folk, who had no scribe to keep a record of them. Join us as we go looking for it.</p>
			 <br><br>
			 <p> Bibliographical note: <br>
			 The information you will find here comes from invarquit (the Generalitat's Heritage Search Engine), the Catalunya Medieval website, the fantastic guide to the villages of Catalonia and a little Wikipedia.
			All shaken and stirred to our own taste, in a way no academic would ever approve. <br>
			Don't take anything too literally: hold on to the "story" and enjoy your visit.</p>
			 `,

        fr: `<p>Bienvenue à <strong>Amer</strong>, où les ruelles étroites et pavées, l'odeur de la fumée des cheminées en hiver et le silence des dimanches matin vous enivreront sans même que vous vous en rendiez compte.
			<br> Ce ne sera pas une surprise : vous ne verrez ici ni statues de grands généraux ni arc de triomphe.
			Ce qui demeure, en revanche, c'est le témoignage de mille ans d'histoire ; ici, c'est l'histoire des gens ordinaires.  <br> 
		</p>
			<p>Si, en vous promenant dans le village, vous passez par la place Sant Miquel, observez le Monument aux Musiciens. 
			Ce que tient le musicien sculpté est un flabiol, l'instrument de musique en bois le plus simple et le plus populaire ; nous y voyons une déclaration d'intention.</p>
             <br>EN RÉSUMÉ :<br>
			 <p>Vous trouverez ici l'histoire des petites gens, qui n'avaient pas de scribe pour en garder la trace. Accompagnez-nous à sa découverte.</p>
			 <br><br>
			 <p> Note bibliographique : <br>
			 Les informations que vous trouverez ici proviennent d'invarquit (le moteur de recherche du patrimoine de la Generalitat), du site Catalunya Medieval, de l'excellent guide des villages de Catalogne et d'un peu de Wikipédia.
			Le tout secoué et mélangé à notre goût, d'une manière qu'aucun universitaire ne validerait. <br>
			Ne prenez rien au pied de la lettre : retenez l'« histoire » et profitez de la visite.</p>
			 `,
    },

    'historia': {
        ca: `<p>La història d'Amer comença amb la fundació del monestir al 949. <br>
		No és que abans no hi hagués hagut vida, sinó que no en consta documentació. <br>
		Com la majoria de monestirs el d'Amer va anar acumulant donacions i riqueses i això va atraure població que es va anar instal·lant on va poder. <br>
		Per entendre la importància del monestir, penseu que fins a 6 monjos d'aquest van ser escollits presidents de la Generalitat. <br>
		Això el que indica és que o bé les famílies nobles enviaven els seus fills ja instruïts al monestir (i utilitzaven la influència familiar per ser escollits). 
		O bé l'<i>scriptorium</i> del monestir era tan bo que els monjos sortien prou ben preparats per ser-ho. 
		Probablement una mica de cada cosa. <br><br>
		L'establiment del mercat setmanal al S.XII és un altre indicador de prosperitat. 
		Però res és etern, la prosperitat es va estroncar amb la crisi econòmica del S.XV. 
		El gran terratrèmol de 1.427, l'any de la picor (1.471) i la pesta de 1.483 no van ajudar precisament. 
		Amb tot, el monestir va seguir funcional, amb alts i baixos, fins la desamortització de 1.835. <br>
		<br><strong>I la gent menuda on queda?</strong><br>
		El monestir, edificis annexos i horts ocupaven gran part del que ara és l'entorn de la plaça. 
		La gent, atreta per la seguretat que aportava el monestir i les possibilitats de comerç 
		es va anar instal·lant on podia. I, com avui dia als vorals de la autopista hi trobes barraquisme, 
		la població es va anar instal·lant a la carretera reial que duia a Girona, encara avui carrer Girona. <br>
		És l'actual barri del <i>Pedreguet</i>. <br><br>
		Tinguem present que la comunitat de monjos es dedicava a resar, tenir cura del monestir, etc, etc, sí. <br>
		Però l'abat.. l'abat a efectes pràctics era un altre senyor feudal, s'assegurava que tothom pagués els seus impostos, <br>
		administrava justícia (empresonaments), era l'autoritat absoluta. <br>
		I com? Us imagineu els monjos armats, patrullant els carrers i defensant els murs del monestir? <br>
		LLEIG<br>
		Ara en diriem externalització, i així a l'entrada del poble hi havia el Castell d'Estela (avui ruinós) 
		atorgat a un baró, tenia les seves terres i a canvi controlava l'accés al poble i sobretot, en cas de necessitat, era prou a prop per socórrer els monjos. <br>
		No consten revoltes però sí que se sap que al 1.335 l'Abat renuncià als anomenats "mals usos" 
		i, vaja, tampoc consta que se li aparegués cap sant per fer-lo canviar de parer. <br>
		Les guerres dels remences a la segona meitat del S.XV, entre d'altres, van aportar a Amer disposar de Batlle. <br>
		Quedant així separada la població de l'administració directa de l'Abat. <br><br>
		<strong>Resumint:</strong> <br>
		El que a tot arreu es considera "casc antic", aquí el trobareu a un extrem del poble: al carrer Girona i circumdants (el Barri del Pedreguet).<br> 
		La plaça de la vila, actual centre neuràlgic, no es va urbanitzar fins després de la desamortització, amb la clausura del monestir.
		De l'antic monestir en queda l'actual església de Santa Maria, la resta d'edificis es va anar reaprofitant en habitatges i l'antic claustre és ara la plaça del monestir.
			</p>`,

        es: `<p>La historia de Amer empieza con la fundación del monasterio en el año 949. <br>
		No es que antes no hubiera habido vida, sino que no consta documentación. <br>
		Como la mayoría de monasterios, el de Amer fue acumulando donaciones y riquezas, y eso atrajo población que se fue instalando donde pudo. <br>
		Para entender la importancia del monasterio, pensad que hasta 6 de sus monjes fueron elegidos presidentes de la Generalitat. <br>
		Lo que esto indica es que, o bien las familias nobles enviaban a sus hijos ya instruidos al monasterio (y utilizaban la influencia familiar para que fueran elegidos), 
		o bien el <i>scriptorium</i> del monasterio era tan bueno que los monjes salían lo bastante bien preparados para serlo. 
		Probablemente, un poco de cada cosa. <br><br>
		La creación del mercado semanal en el s. XII es otro indicador de prosperidad. 
		Pero nada es eterno: la prosperidad se truncó con la crisis económica del s. XV. 
		El gran terremoto de 1427, el año del picor (1471) y la peste de 1483 no ayudaron precisamente. 
		Aun así, el monasterio siguió funcionando, con altibajos, hasta la desamortización de 1835. <br>
		<br><strong>¿Y dónde queda la gente humilde?</strong><br>
		El monasterio, sus edificios anexos y sus huertos ocupaban gran parte de lo que hoy es el entorno de la plaza. 
		La gente, atraída por la seguridad que aportaba el monasterio y las posibilidades de comercio, 
		se fue instalando donde podía. Y, igual que hoy en día encuentras chabolismo en los arcenes de la autopista, 
		la población se fue instalando a lo largo del camino real que llevaba a Girona, todavía hoy calle Girona. <br>
		Es el actual barrio del <i>Pedreguet</i>. <br><br>
		Tengamos presente que la comunidad de monjes se dedicaba a rezar, a cuidar del monasterio, etc., etc., sí. <br>
		Pero el abad... el abad, a efectos prácticos, era otro señor feudal: se aseguraba de que todo el mundo pagara sus impuestos, <br>
		administraba justicia (encarcelamientos), era la autoridad absoluta. <br>
		¿Y cómo? ¿Os imagináis a los monjes armados, patrullando las calles y defendiendo los muros del monasterio? <br>
		FEO<br>
		Ahora lo llamaríamos externalización. Así, a la entrada del pueblo estaba el Castillo d'Estela (hoy en ruinas), 
		otorgado a un barón que tenía sus tierras y a cambio controlaba el acceso al pueblo y, sobre todo, en caso de necesidad, estaba lo bastante cerca para socorrer a los monjes. <br>
		No constan revueltas, pero sí se sabe que en 1335 el Abad renunció a los llamados "malos usos" 
		y, vaya, tampoco consta que se le apareciera ningún santo para hacerle cambiar de opinión. <br>
		Las guerras de los remensas, en la segunda mitad del s. XV, entre otras cosas permitieron que Amer dispusiera de un Batlle (baile). <br>
		De este modo, la población quedó separada de la administración directa del Abad. <br><br>
		<strong>Resumiendo:</strong> <br>
		Lo que en todas partes se considera el "casco antiguo", aquí lo encontraréis en un extremo del pueblo: en la calle Girona y alrededores (el Barrio del Pedreguet).<br> 
		La Plaza de la Villa, actual centro neurálgico, no se urbanizó hasta después de la desamortización, con la clausura del monasterio.
		Del antiguo monasterio queda la actual iglesia de Santa Maria; el resto de edificios se fue reaprovechando como viviendas y el antiguo claustro es ahora la plaza del monasterio.
			</p>`,

        en: `<p>The history of Amer begins with the founding of the monastery in 949. <br>
		Not that there was no life here before, but there is no record of it. <br>
		Like most monasteries, Amer's gradually accumulated donations and wealth, and this attracted people who settled wherever they could. <br>
		To understand how important the monastery was, consider that as many as 6 of its monks were elected presidents of the Generalitat (the Catalan government). <br>
		What this suggests is that either noble families sent their already educated sons to the monastery (and used family influence to get them elected), 
		or the monastery's <i>scriptorium</i> was so good that the monks came out well enough prepared for the job. 
		Probably a bit of both. <br><br>
		The establishment of the weekly market in the 12th century is another sign of prosperity. 
		But nothing lasts forever: prosperity was cut short by the economic crisis of the 15th century. 
		The great earthquake of 1427, the year of the itch (1471) and the plague of 1483 certainly didn't help. 
		Even so, the monastery remained active, with ups and downs, until the disentailment (confiscation of church property) of 1835. <br>
		<br><strong>And where do the ordinary people fit in?</strong><br>
		The monastery, its outbuildings and its vegetable gardens took up much of what is now the area around the square. 
		People, drawn by the security the monastery provided and the opportunities for trade, 
		settled wherever they could. And, just as today you find shanty towns along the edges of motorways, 
		the population settled along the royal road that led to Girona, still called Girona Street today. <br>
		This is the present-day <i>Pedreguet</i> quarter. <br><br>
		Bear in mind that the community of monks devoted itself to prayer, looking after the monastery, and so on, yes. <br>
		But the abbot... the abbot was, for all practical purposes, just another feudal lord: he made sure everyone paid their taxes, <br>
		he administered justice (imprisonment included), he was the absolute authority. <br>
		And how? Can you picture armed monks patrolling the streets and defending the monastery walls? <br>
		NOT A GOOD LOOK<br>
		Today we would call it outsourcing. So, at the entrance to the village stood Estela Castle (now in ruins), 
		granted to a baron who held his own lands and, in return, controlled access to the village and, above all, was close enough to come to the monks' aid if needed. <br>
		There are no records of revolts, but we do know that in 1335 the Abbot renounced the so-called "bad customs" (feudal abuses) 
		and, well, there is no record of any saint appearing to him to change his mind either. <br>
		The Remença wars (peasant revolts) in the second half of the 15th century, among other things, gave Amer its own Batlle (local magistrate). <br>
		The townspeople were thus freed from the Abbot's direct rule. <br><br>
		<strong>In short:</strong> <br>
		What everywhere else is considered the "old town", here you will find at one end of the village: on Girona Street and the streets around it (the Pedreguet quarter).<br> 
		The Town Square, today the heart of the village, was not laid out until after the disentailment, when the monastery was closed.
		All that remains of the old monastery is today's Santa Maria church; the rest of the buildings were gradually converted into homes, and the old cloister is now Monastery Square.
			</p>`,

        fr: `<p>L'histoire d'Amer commence avec la fondation du monastère en 949. <br>
		Non pas qu'il n'y ait pas eu de vie auparavant, mais aucun document n'en garde la trace. <br>
		Comme la plupart des monastères, celui d'Amer accumula peu à peu donations et richesses, ce qui attira une population qui s'installa où elle put. <br>
		Pour comprendre l'importance du monastère, sachez que jusqu'à 6 de ses moines furent élus présidents de la Generalitat (le gouvernement catalan). <br>
		Cela indique que, soit les familles nobles envoyaient au monastère leurs fils déjà instruits (et usaient de l'influence familiale pour les faire élire), 
		soit le <i>scriptorium</i> du monastère était si bon que les moines en sortaient assez bien préparés pour l'être. 
		Probablement un peu des deux. <br><br>
		La création du marché hebdomadaire au XIIe siècle est un autre signe de prospérité. 
		Mais rien n'est éternel : la prospérité prit fin avec la crise économique du XVe siècle. 
		Le grand tremblement de terre de 1427, l'année de la démangeaison (1471) et la peste de 1483 n'arrangèrent rien. 
		Malgré tout, le monastère resta en activité, avec des hauts et des bas, jusqu'au désamortissement (la saisie des biens de l'Église) de 1835. <br>
		<br><strong>Et les petites gens, dans tout ça ?</strong><br>
		Le monastère, ses bâtiments annexes et ses potagers occupaient une grande partie de ce qui est aujourd'hui les abords de la place. 
		Les gens, attirés par la sécurité qu'offrait le monastère et par les possibilités de commerce, 
		s'installèrent où ils purent. Et, de même qu'aujourd'hui on trouve des bidonvilles au bord des autoroutes, 
		la population s'installa le long du chemin royal qui menait à Gérone, l'actuelle rue de Gérone. <br>
		C'est l'actuel quartier du <i>Pedreguet</i>. <br><br>
		N'oublions pas que la communauté des moines se consacrait à la prière, à l'entretien du monastère, etc., etc., oui. <br>
		Mais l'abbé... l'abbé était, en pratique, un seigneur féodal comme un autre : il veillait à ce que chacun paie ses impôts, <br>
		il rendait la justice (emprisonnements compris), il était l'autorité absolue. <br>
		Et comment ? Imaginez-vous des moines armés patrouillant dans les rues et défendant les murs du monastère ? <br>
		PAS TRÈS CHIC<br>
		Aujourd'hui, on parlerait d'externalisation. Ainsi, à l'entrée du village se dressait le château d'Estela (aujourd'hui en ruine), 
		concédé à un baron qui avait ses propres terres et, en échange, contrôlait l'accès au village et surtout, en cas de besoin, était assez proche pour venir en aide aux moines. <br>
		Aucune révolte n'est attestée, mais on sait qu'en 1335 l'Abbé renonça aux « mauvais usages » (abus féodaux) 
		et, ma foi, aucun document ne dit qu'un saint lui soit apparu pour le faire changer d'avis. <br>
		Les guerres des remences (révoltes paysannes), dans la seconde moitié du XVe siècle, permirent entre autres à Amer de disposer d'un batlle (bailli). <br>
		La population échappa ainsi à l'administration directe de l'Abbé. <br><br>
		<strong>En résumé :</strong> <br>
		Ce que partout ailleurs on appelle la « vieille ville », vous la trouverez ici à une extrémité du village : dans la rue de Gérone et les rues voisines (le quartier du Pedreguet).<br> 
		La place de la Ville, aujourd'hui centre névralgique, ne fut aménagée qu'après le désamortissement, avec la fermeture du monastère.
		De l'ancien monastère subsiste l'actuelle église Santa Maria ; les autres bâtiments furent peu à peu transformés en logements et l'ancien cloître est aujourd'hui la place du Monastère.
			</p>`,
    },

    'rutes': {
        ca: `<p>Des d'Amer es poden fer moltes excursions, us n'oferim les nostres preferides:</p>
             <ul>
               <li><strong>Ruta de Santa Brígida</strong> — 8 km .<br>
                   Pujada a l'ermita, excursió curta on es fan cames.  <br>
				  <a href="https://es.wikiloc.com/rutas-senderismo/amer-santa-brigida-23507062"> https://es.wikiloc.com/rutas-senderismo/amer-santa-brigida-23507062</a></li>
               <li><strong>Ruta de voramera i el Carrilet</strong> — 7 km · . <br>
                   Circular pel poble, ideal amb bicicleta <br>
				   <a href="https://www.wikiloc.com/nordic-walking-trails/amer-voramera-75666065"> https://www.wikiloc.com/nordic-walking-trails/amer-voramera-75666065</a>.</li>
			<li><strong>Ruta de les Ermites</strong> — 15 km · . <br>
                   Excursió llarga amb bones vistes en què es visiten 3 ermites romàniques. <br>
				   <a href="https://es.wikiloc.com/rutas-senderismo/ruta-de-les-ermites-d-amer-3502965"> https://es.wikiloc.com/rutas-senderismo/ruta-de-les-ermites-d-amer-3502965</a>.</li>
		    
              
             </ul>
             <p></p>`,

        es: `<p>Desde Amer se pueden hacer muchas excursiones; os ofrecemos nuestras preferidas:</p>
             <ul>
               <li><strong>Ruta de Santa Brígida</strong> — 8 km.<br>
                   Subida a la ermita, excursión corta para estirar las piernas.  <br>
				  <a href="https://es.wikiloc.com/rutas-senderismo/amer-santa-brigida-23507062"> https://es.wikiloc.com/rutas-senderismo/amer-santa-brigida-23507062</a></li>
               <li><strong>Ruta de la ribera y el Carrilet</strong> — 7 km. <br>
                   Circular por el pueblo, ideal en bicicleta. <br>
				   <a href="https://www.wikiloc.com/nordic-walking-trails/amer-voramera-75666065"> https://www.wikiloc.com/nordic-walking-trails/amer-voramera-75666065</a>.</li>
			<li><strong>Ruta de las Ermitas</strong> — 15 km. <br>
                   Excursión larga con buenas vistas en la que se visitan 3 ermitas románicas. <br>
				   <a href="https://es.wikiloc.com/rutas-senderismo/ruta-de-les-ermites-d-amer-3502965"> https://es.wikiloc.com/rutas-senderismo/ruta-de-les-ermites-d-amer-3502965</a>.</li>
             </ul>
             <p></p>`,

        en: `<p>There are plenty of walks you can do from Amer; here are our favourites:</p>
             <ul>
               <li><strong>Santa Brígida Route</strong> — 8 km.<br>
                   Climb up to the hermitage: a short walk that will get your legs working.  <br>
				  <a href="https://es.wikiloc.com/rutas-senderismo/amer-santa-brigida-23507062"> https://es.wikiloc.com/rutas-senderismo/amer-santa-brigida-23507062</a></li>
               <li><strong>Riverside and Carrilet Route</strong> — 7 km. <br>
                   A circular route around the village, ideal by bike. <br>
				   <a href="https://www.wikiloc.com/nordic-walking-trails/amer-voramera-75666065"> https://www.wikiloc.com/nordic-walking-trails/amer-voramera-75666065</a>.</li>
			<li><strong>Hermitages Route</strong> — 15 km. <br>
                   A long walk with great views, visiting 3 Romanesque hermitages. <br>
				   <a href="https://es.wikiloc.com/rutas-senderismo/ruta-de-les-ermites-d-amer-3502965"> https://es.wikiloc.com/rutas-senderismo/ruta-de-les-ermites-d-amer-3502965</a>.</li>
             </ul>
             <p></p>`,

        fr: `<p>Au départ d'Amer, on peut faire de nombreuses randonnées ; voici nos préférées :</p>
             <ul>
               <li><strong>Itinéraire de Santa Brígida</strong> — 8 km.<br>
                   Montée jusqu'à l'ermitage : une courte randonnée qui fait travailler les jambes.  <br>
				  <a href="https://es.wikiloc.com/rutas-senderismo/amer-santa-brigida-23507062"> https://es.wikiloc.com/rutas-senderismo/amer-santa-brigida-23507062</a></li>
               <li><strong>Itinéraire des berges et du Carrilet</strong> — 7 km. <br>
                   Boucle autour du village, idéale à vélo. <br>
				   <a href="https://www.wikiloc.com/nordic-walking-trails/amer-voramera-75666065"> https://www.wikiloc.com/nordic-walking-trails/amer-voramera-75666065</a>.</li>
			<li><strong>Itinéraire des Ermitages</strong> — 15 km. <br>
                   Longue randonnée avec de belles vues, qui passe par 3 ermitages romans. <br>
				   <a href="https://es.wikiloc.com/rutas-senderismo/ruta-de-les-ermites-d-amer-3502965"> https://es.wikiloc.com/rutas-senderismo/ruta-de-les-ermites-d-amer-3502965</a>.</li>
             </ul>
             <p></p>`,
    },

    'arquitectura': {
        ca: `<p>Perdoneu. <br>Creiem que a la majoria pot venir bé una petita introducció de l'arquitectura popular abans de començar la visita.<br> <br>
            <strong> L'arquitectura popular:</strong></p>
             Avui en dia, amb formigó armat i acer, no hi pensem, quan has construït quatre parets
			 et trobes amb problemes per: <br>
			 <ul>
               <li>Crear un espai per passar (porta) </li>
			   <li>Crear un espai per ventilar i il·luminar (finestra)</li>
			  </ul>
			  Penseu en quan els nens es fan una cabana a casa o al bosc, al final...  la humanitat no va viure en coves perquè els agradés estar a les fosques durant el dia o respirant fum de les fogueres a tothora. 
			  Una cabana de fusta és una cosa i una senyora casa de pedra una altra! <br>
			 No us costarà trobar com els abats i senyors contractaven mestres d'obres i picapedrers per fer una volta de canó (Romànic) o Arcs Ojivals (Gòtic). <br>
			 Aquí ens centrarem en l'"arquitectura popular", la que no ha deixat rastre escrit. Cadascú s'aixecava casa seva com podia. <br>
			 <br>
			 <strong>Solucions a les obertures de les parets:</strong><br>
			 <br><strong>Podem posar una biga de fusta.</strong><br>
			 Tot el pes de la paret (i pisos superiors) caurà sobre aquesta biga.<br>
			 Ha de ser fusta molt bona, molt gruixuda i... resumint no aguanta. 
			 <br>Només apta per finestres molt petites i només als pisos superiors.<br>
			 <br><strong>Podem posar una gran roca.</strong><br>
			 No és ideal, però funciona millor, aixó seria una LLINDA: rectangles gruixuts de pedra treballada que aguanten el pes i permeten una amplada digna d'una porta.<br>
			 No només estan a la part més visible de l'entrada, també són costoses de fer.<br>
			 Aquí és on trobareu sovint la inscripció amb l'any, el nom del propietari, la seva professió o potser un goig a la Mare de Déu.<br>
			 Si tens una llinda, tens una casa. És un orgull.<br>
			 <br><strong>Per què no copiem la porta ovalada de l'església?</strong><br>
			 Tu… tu tens quartos eh, això et permet una entrada per on pot passar un carro!<br>
			 La tecnologia tampoc és moderna, els romans ja la usaven: fas petites peces de pedra en forma trapezoidal que reparteixen el pes dels pisos superiros cap a cada costat de la porta. Però... necessites pedra de qualitat i un bon picapedrer també!<br>
			 En podeu trobar, típicament, a les masies reformades al s. XVIII
			 abans de la fil·loxera (un insecte provinent del continent americà que matava els ceps), quan l'exportació de vi donava bons beneficis.
			 `,

        es: `<p>Perdonad. <br>Creemos que a la mayoría le puede venir bien una pequeña introducción a la arquitectura popular antes de empezar la visita.<br> <br>
            <strong> La arquitectura popular:</strong></p>
             Hoy en día, con hormigón armado y acero, no pensamos en ello, pero cuando has construido cuatro paredes
			 te encuentras con problemas para: <br>
			 <ul>
               <li>Crear un espacio para pasar (puerta) </li>
			   <li>Crear un espacio para ventilar e iluminar (ventana)</li>
			  </ul>
			  Pensad en cuando los niños se hacen una cabaña en casa o en el bosque; al fin y al cabo... la humanidad no vivió en cuevas porque le gustara estar a oscuras durante el día o respirando humo de las hogueras a todas horas. 
			  ¡Una cabaña de madera es una cosa y una señora casa de piedra, otra! <br>
			 No os costará encontrar cómo los abades y señores contrataban a maestros de obras y canteros para hacer una bóveda de cañón (Románico) o arcos ojivales (Gótico). <br>
			 Aquí nos centraremos en la "arquitectura popular", la que no ha dejado rastro escrito. Cada uno se levantaba su casa como podía. <br>
			 <br>
			 <strong>Soluciones para las aberturas de las paredes:</strong><br>
			 <br><strong>Podemos poner una viga de madera.</strong><br>
			 Todo el peso de la pared (y de los pisos superiores) recaerá sobre esta viga.<br>
			 Tiene que ser madera muy buena, muy gruesa y... resumiendo, no aguanta. 
			 <br>Solo apta para ventanas muy pequeñas y solo en los pisos superiores.<br>
			 <br><strong>Podemos poner una gran roca.</strong><br>
			 No es lo ideal, pero funciona mejor: eso sería un DINTEL, rectángulos gruesos de piedra labrada que aguantan el peso y permiten una anchura digna de una puerta.<br>
			 No solo están en la parte más visible de la entrada, también son costosos de hacer.<br>
			 Aquí es donde encontraréis a menudo la inscripción con el año, el nombre del propietario, su profesión o quizá una alabanza a la Virgen.<br>
			 Si tienes un dintel, tienes una casa. Es un orgullo.<br>
			 <br><strong>¿Por qué no copiamos la puerta ovalada de la iglesia?</strong><br>
			 Tú… tú tienes dinero, ¿eh? ¡Eso te permite una entrada por la que puede pasar un carro!<br>
			 La tecnología tampoco es moderna, los romanos ya la usaban: haces pequeñas piezas de piedra en forma trapezoidal que reparten el peso de los pisos superiores hacia cada lado de la puerta. Pero... ¡necesitas piedra de calidad y también un buen cantero!<br>
			 Podéis encontrarlas, típicamente, en las masías reformadas en el s. XVIII,
			 antes de la filoxera (un insecto procedente del continente americano que mataba las cepas), cuando la exportación de vino daba buenos beneficios.
			 `,

        en: `<p>Bear with us. <br>We think most visitors will find a short introduction to vernacular architecture useful before starting the visit.<br> <br>
            <strong> Vernacular architecture:</strong></p>
             Nowadays, with reinforced concrete and steel, we don't give it a thought, but once you've built four walls
			 you run into problems when you want to: <br>
			 <ul>
               <li>Make a space to walk through (a door) </li>
			   <li>Make a space for air and light (a window)</li>
			  </ul>
			  Think of children building a den at home or in the woods; in the end... humanity didn't live in caves because it enjoyed sitting in the dark all day or breathing smoke from the fire around the clock. 
			  A wooden hut is one thing, and a fine stone house is quite another! <br>
			 It won't be hard to find out how abbots and lords hired master builders and stonemasons to build a barrel vault (Romanesque) or pointed arches (Gothic). <br>
			 Here we'll focus on "vernacular architecture", the kind that left no written trace. Everyone built their own house as best they could. <br>
			 <br>
			 <strong>Solutions for openings in walls:</strong><br>
			 <br><strong>We can use a wooden beam.</strong><br>
			 The whole weight of the wall (and the upper floors) will rest on this beam.<br>
			 It has to be very good, very thick timber and... in short, it doesn't hold. 
			 <br>Only suitable for very small windows, and only on the upper floors.<br>
			 <br><strong>We can use a big stone.</strong><br>
			 It's not ideal, but it works better: this is a LINTEL, a thick rectangle of dressed stone that bears the weight and allows an opening wide enough for a proper door.<br>
			 Not only are lintels on the most visible part of the entrance, they are also expensive to make.<br>
			 This is where you will often find an inscription with the year, the owner's name, their trade or perhaps a verse in praise of the Virgin Mary.<br>
			 If you have a lintel, you have a house. It's a source of pride.<br>
			 <br><strong>Why not copy the arched doorway of the church?</strong><br>
			 You… you've got money, eh? That gets you an entrance wide enough for a cart!<br>
			 The technology isn't new either; the Romans already used it: you cut small wedge-shaped stones that spread the weight of the upper floors to each side of the door. But... you need good-quality stone and a good stonemason too!<br>
			 You will typically find them on masies (traditional Catalan farmhouses) renovated in the 18th century,
			 before phylloxera (an insect from the Americas that killed the vines), when wine exports brought good profits.
			 `,

        fr: `<p>Pardonnez-nous. <br>Nous pensons qu'une petite introduction à l'architecture populaire sera utile à la plupart d'entre vous avant de commencer la visite.<br> <br>
            <strong> L'architecture populaire :</strong></p>
             Aujourd'hui, avec le béton armé et l'acier, on n'y pense pas, mais une fois quatre murs construits,
			 on se heurte à des problèmes pour : <br>
			 <ul>
               <li>Créer un espace pour passer (une porte) </li>
			   <li>Créer un espace pour aérer et éclairer (une fenêtre)</li>
			  </ul>
			  Pensez aux enfants qui se construisent une cabane à la maison ou dans les bois ; au fond... l'humanité n'a pas vécu dans des grottes parce qu'elle aimait rester dans le noir toute la journée ou respirer la fumée des feux à longueur de temps. 
			  Une cabane en bois, c'est une chose ; une belle maison en pierre, c'en est une autre ! <br>
			 Vous n'aurez aucun mal à découvrir comment abbés et seigneurs engageaient maîtres d'œuvre et tailleurs de pierre pour réaliser une voûte en berceau (roman) ou des arcs ogivaux (gothique). <br>
			 Ici, nous nous intéresserons à l'« architecture populaire », celle qui n'a laissé aucune trace écrite. Chacun bâtissait sa maison comme il pouvait. <br>
			 <br>
			 <strong>Solutions pour les ouvertures dans les murs :</strong><br>
			 <br><strong>On peut poser une poutre en bois.</strong><br>
			 Tout le poids du mur (et des étages supérieurs) reposera sur cette poutre.<br>
			 Il faut un bois de très bonne qualité, très épais et... bref, ça ne tient pas. 
			 <br>Ne convient qu'aux toutes petites fenêtres, et seulement aux étages supérieurs.<br>
			 <br><strong>On peut poser une grosse pierre.</strong><br>
			 Ce n'est pas idéal, mais ça marche mieux : c'est un LINTEAU, un épais rectangle de pierre taillée qui supporte le poids et permet une largeur digne d'une porte.<br>
			 Non seulement les linteaux se trouvent sur la partie la plus visible de l'entrée, mais ils coûtent cher à réaliser.<br>
			 C'est là que vous trouverez souvent une inscription avec l'année, le nom du propriétaire, son métier ou peut-être un cantique à la Vierge.<br>
			 Si vous avez un linteau, vous avez une maison. C'est une fierté.<br>
			 <br><strong>Pourquoi ne pas copier la porte cintrée de l'église ?</strong><br>
			 Toi… tu as des sous, hein ? Ça te permet une entrée assez large pour qu'une charrette y passe !<br>
			 La technique n'est pas nouvelle non plus, les Romains l'utilisaient déjà : on taille de petites pierres en forme de trapèze qui répartissent le poids des étages supérieurs de chaque côté de la porte. Mais... il faut une pierre de qualité et un bon tailleur de pierre aussi !<br>
			 On en trouve typiquement dans les mas (masies, fermes catalanes traditionnelles) rénovés au XVIIIe siècle,
			 avant le phylloxéra (un insecte venu du continent américain qui tuait les ceps), quand l'exportation du vin rapportait de bons bénéfices.
			 `,
    },

    'informacio-practica': {
        ca: `
			<p><strong>Telèfons d'interès</strong><br>
			Emergències: 112 <br>
             Ajuntament: 972 431 112 / informaciot@amer.cat <br>
			 Policia - Mossos d'Esquadra: 972 181 675 / Carrer Francesc Moragas 65-67, Santa Coloma de Farners <br>
			 Atenció Primària:  972 421 498 / Jardins de Can Cendra, Anglès <br>
			 Farmàcia d'Amer: 972 430 316 / Av. de la Selva 63, Amer
             </p>
             <p><strong>Aparcament</strong><br>
             Amb excepció dels migdies laborables no hauríeu de trobar problemes d'aparcament.
			Amb tot trobareu sempre espai a l'aparcament municipal, a la dreta de la carretera en direcció Olot entrada per:	Carrer del Riu Rogent, s/n
             <br>
			 a 5 minuts caminant de la plaça de la vila.</p>
             <p><strong>Gasolineres</strong><br>
             A la sortida del poble en direcció Olot trobareu una gasolinera Repsol que disposa també de botiga de 6 a 21h<br>
			 Amb tot, a l'entrada d'Anglès trobareu a la primera rotonda dues gasolineres low cost que es fan competència.
			 
			 </p> 
			 <p><strong>Alimentació</strong><br>
			 A la plaça del poble cada dimecres es fa el mercat al matí. <br>
			 També a la plaça de dilluns a dissabte trobareu el Suma obert. <br>
			 I al carrer Junquera, tocant a la plaça, està Can Batet. Carnisseria que recomanem. <br>
			 En general, les botigues són aquí multiopció: als forns de pa tenen brics de llet i pasta seca, l'estanc fa de llibreria...
              <br>
			 
			 Aquí el pa és bo, hi ha més de 6 forns de pa. Cada família té el seu de referència... aquí no ens mullarem però sortiu al matí a buscar un croassant recent fet i compreu-hi pa també!.
			 
			 </p>
			 <p><strong>Especialitat d'Amer</strong><br>
             Posats a portar un detall típic d'Amer recomanem els Capricis, els trobareu a la <i>Pastisseria Puigdemont</i> a Sant Miquel 6.  <br>
			 Destaquem també els Rocs de la <i>Pastisseria Martoni</i>, Plaça de la Vila 31.						 			 
			 </p>
			 
			 <p><strong>On menjar</strong><br>
			 A l'<i>Snack Bar</i> (tocant a la farmàcia), tenen un ampli horari, hi podreu esmorzar, dinar, sopar i prendre una cervesa a la fresca a bon preu. <br>
			 A <i>Can Co-Absis</i>, darrere l'absis del Monestir, hi trobareu una cuina tradicional catalana feta a foc lent. <br>
			 A <i>Can Franc1</i>, plaça Pompeu Fabra, fan tapes modernes, pizzes, etc. Tot amb un ambient desenfadat.
		
			 
					 
			 </p>
			 
             <p><strong>Allotjament</strong><br>
             Confiem que no us calgui i ens recomaneu.</p>`,

        es: `
			<p><strong>Teléfonos de interés</strong><br>
			Emergencias: 112 <br>
             Ayuntamiento: 972 431 112 / informacio@amer.cat <br>
			 Policía - Mossos d'Esquadra: 972 181 675 / Calle Francesc Moragas 65-67, Santa Coloma de Farners <br>
			 Atención Primaria:  972 421 498 / Jardines de Can Cendra, Anglès <br>
			 Farmacia de Amer: 972 430 316 / Avenida de la Selva 63, Amer
             </p>
             <p><strong>Aparcamiento</strong><br>
             Salvo a mediodía en días laborables, no deberíais tener problemas para aparcar.
			Aun así, siempre encontraréis sitio en el aparcamiento municipal, a la derecha de la carretera en dirección Olot, con entrada por la Calle del Riu Rogent, s/n,
             <br>
			 a 5 minutos andando de la Plaza de la Villa.</p>
             <p><strong>Gasolineras</strong><br>
             A la salida del pueblo en dirección Olot encontraréis una gasolinera Repsol que también tiene tienda, abierta de 6 a 21 h.<br>
			 Aun así, a la entrada de Anglès, en la primera rotonda, encontraréis dos gasolineras low cost que compiten entre ellas.
			 </p> 
			 <p><strong>Alimentación</strong><br>
			 En la plaza del pueblo, cada miércoles por la mañana se hace el mercado. <br>
			 También en la plaza, de lunes a sábado, encontraréis abierto el Suma. <br>
			 Y en la calle Junquera, junto a la plaza, está Can Batet, una carnicería que recomendamos. <br>
			 En general, aquí las tiendas son multiopción: en las panaderías tienen bricks de leche y pasta seca, el estanco hace de librería...
              <br>
			 Aquí el pan es bueno: hay más de 6 panaderías. Cada familia tiene la suya de referencia... no nos vamos a mojar, ¡pero salid por la mañana a buscar un cruasán recién hecho y comprad también pan!
			 </p>
			 <p><strong>Especialidad de Amer</strong><br>
             Si queréis llevaros un detalle típico de Amer, os recomendamos los Capricis; los encontraréis en la <i>Pastisseria Puigdemont</i>, en Sant Miquel 6.  <br>
			 Destacamos también los Rocs de la <i>Pastisseria Martoni</i>, Plaza de la Villa 31.
			 </p>
			 
			 <p><strong>Dónde comer</strong><br>
			 En el <i>Snack Bar</i> (junto a la farmacia) tienen un horario amplio: podréis desayunar, comer, cenar y tomar una cerveza al fresco a buen precio. <br>
			 En <i>Can Co-Absis</i>, detrás del ábside del Monasterio, encontraréis una cocina tradicional catalana hecha a fuego lento. <br>
			 En <i>Can Franc1</i>, plaza Pompeu Fabra, hacen tapas modernas, pizzas, etc. Todo en un ambiente desenfadado.
			 </p>
			 
             <p><strong>Alojamiento</strong><br>
             Esperamos que no os haga falta y que nos recomendéis.</p>`,

        en: `
			<p><strong>Useful phone numbers</strong><br>
			Emergencies: 112 <br>
             Town Hall: 972 431 112 / informacio@amer.cat <br>
			 Police - Mossos d'Esquadra (Catalan police): 972 181 675 / Francesc Moragas Street 65-67, Santa Coloma de Farners <br>
			 Primary Health Care Centre:  972 421 498 / Can Cendra Gardens, Anglès <br>
			 Amer Pharmacy: 972 430 316 / Selva Avenue 63, Amer
             </p>
             <p><strong>Parking</strong><br>
             Except around midday on weekdays, you shouldn't have any trouble parking.
			Even so, you will always find space in the municipal car park, on the right of the road towards Olot, with the entrance on Riu Rogent Street, s/n,
             <br>
			 a 5-minute walk from the Town Square.</p>
             <p><strong>Petrol stations</strong><br>
             On the way out of the village towards Olot there is a Repsol petrol station, which also has a shop open from 6 am to 9 pm.<br>
			 Alternatively, at the entrance to Anglès, on the first roundabout, you will find two low-cost petrol stations competing with each other.
			 </p> 
			 <p><strong>Food shopping</strong><br>
			 There is a market in the village square every Wednesday morning. <br>
			 Also on the square, the Suma supermarket is open Monday to Saturday. <br>
			 And on Junquera Street, right by the square, is Can Batet, a butcher's we recommend. <br>
			 In general, shops here sell a bit of everything: bakeries stock cartons of milk and dried pasta, the tobacconist doubles as a bookshop...
              <br>
			 The bread here is good: there are more than 6 bakeries. Every family has its favourite... we won't take sides, but head out in the morning for a freshly baked croissant and pick up some bread while you're at it!
			 </p>
			 <p><strong>Amer specialities</strong><br>
             If you'd like to take home a typical treat from Amer, we recommend the Capricis, which you will find at <i>Pastisseria Puigdemont</i>, Sant Miquel Street 6.  <br>
			 We'd also highlight the Rocs from <i>Pastisseria Martoni</i>, Town Square 31.
			 </p>
			 
			 <p><strong>Where to eat</strong><br>
			 The <i>Snack Bar</i> (next to the pharmacy) has long opening hours: you can have breakfast, lunch or dinner there, or enjoy a beer outdoors at a good price. <br>
			 At <i>Can Co-Absis</i>, behind the apse of the Monastery, you will find traditional Catalan slow-cooked food. <br>
			 At <i>Can Franc1</i>, Pompeu Fabra Square, they serve modern tapas, pizzas and more, all in a relaxed atmosphere.
			 </p>
			 
             <p><strong>Accommodation</strong><br>
             We hope you won't need it — and that you'll recommend us!</p>`,

        fr: `
			<p><strong>Numéros utiles</strong><br>
			Urgences : 112 <br>
             Mairie : 972 431 112 / informacio@amer.cat <br>
			 Police - Mossos d'Esquadra (police catalane) : 972 181 675 / rue Francesc Moragas 65-67, Santa Coloma de Farners <br>
			 Centre de soins primaires :  972 421 498 / jardins de Can Cendra, Anglès <br>
			 Pharmacie d'Amer : 972 430 316 / avenue de la Selva 63, Amer
             </p>
             <p><strong>Stationnement</strong><br>
             Sauf à midi les jours ouvrables, vous ne devriez pas avoir de mal à vous garer.
			Quoi qu'il en soit, vous trouverez toujours de la place au parking municipal, à droite de la route en direction d'Olot, avec entrée par la rue du Riu Rogent, s/n,
             <br>
			 à 5 minutes à pied de la place de la Ville.</p>
             <p><strong>Stations-service</strong><br>
             À la sortie du village en direction d'Olot, vous trouverez une station-service Repsol avec une boutique ouverte de 6 h à 21 h.<br>
			 Sinon, à l'entrée d'Anglès, au premier rond-point, vous trouverez deux stations low cost qui se font concurrence.
			 </p> 
			 <p><strong>Alimentation</strong><br>
			 Le marché se tient sur la place du village tous les mercredis matin. <br>
			 Sur la place également, le supermarché Suma est ouvert du lundi au samedi. <br>
			 Et rue Junquera, tout près de la place, se trouve Can Batet, une boucherie que nous recommandons. <br>
			 En général, ici les commerces vendent un peu de tout : les boulangeries ont des briques de lait et des pâtes sèches, le bureau de tabac fait aussi librairie...
              <br>
			 Ici, le pain est bon : il y a plus de 6 boulangeries. Chaque famille a la sienne... nous ne prendrons pas parti, mais sortez le matin chercher un croissant tout juste sorti du four et achetez-y aussi du pain !
			 </p>
			 <p><strong>Spécialités d'Amer</strong><br>
             Pour rapporter une douceur typique d'Amer, nous vous recommandons les Capricis, que vous trouverez à la <i>Pastisseria Puigdemont</i>, rue Sant Miquel 6.  <br>
			 Nous vous signalons aussi les Rocs de la <i>Pastisseria Martoni</i>, place de la Ville 31.
			 </p>
			 
			 <p><strong>Où manger</strong><br>
			 Le <i>Snack Bar</i> (à côté de la pharmacie) a de larges horaires : vous pourrez y prendre le petit-déjeuner, déjeuner, dîner ou boire une bière au frais à bon prix. <br>
			 À <i>Can Co-Absis</i>, derrière l'abside du Monastère, vous trouverez une cuisine catalane traditionnelle mijotée à feu doux. <br>
			 À <i>Can Franc1</i>, place Pompeu Fabra, on sert des tapas modernes, des pizzas, etc. Le tout dans une ambiance décontractée.
			 </p>
			 
             <p><strong>Hébergement</strong><br>
             Nous espérons que vous n'en aurez pas besoin… et que vous nous recommanderez !</p>`,
    },
	'sardana': {
        ca: `
			<p><strong>Tradició sardanística</strong><br>
             La tradició sardanística d'Amer és i ha estat molt important. Amb orgull s'explica que tant Pere Buixó com Pere Fontàs, compositors de sardanes, són fills d'Amer.
             </p>
			 
			 <p><strong>Sardana de l'alcalde</strong><br>
			 És una composició única de la sardana que té la peculiaritat que el cercle no es tanca mai.<br>
			 Es balla sempre per la festa major, el cercle de la sardana, que romandrà obert, l'inicia l'alcalde<br>
			 I poc a poc s'hi van sumant els veïns quedant així figuradament tot el poble ballant la mateixa sardana.<br>
			 Ara a l'alcalde se'l pot veure com a font de poder, però si tenim present la història del poble i l'abat, que tot el poble es posés de forma física 
			 rere el seu alcalde, que era qui podia prevenir-los dels abusos de l'abat... bé és una lectura que ens agrada de fer. <br>
			  <p><strong>La peça de la sardana</strong><br>
			  La tradició manava que l'alcalde triaria cada any la peça que sonaria al ballar-se la sardana de l'alcalde.
			  Es va donar la circumstància que Pere Fontàs fent el servei militar va quedar impossibilitat, de tal manera que només podia viure  dels drets d'autor de les seves
			  composicions. Es va triar sempre una peça seva per al ball, de forma que ha quedat ja lligat la sardana de l'alcalde amb la peça Festa Mil·lenària.
            `,

        es: `
			<p><strong>Tradición sardanista</strong><br>
             La tradición sardanista de Amer es y ha sido muy importante. Se cuenta con orgullo que tanto Pere Buixó como Pere Fontàs, compositores de sardanas, son hijos de Amer.
             </p>
			 
			 <p><strong>Sardana del alcalde</strong><br>
			 Es una composición única de la sardana, con la peculiaridad de que el círculo no se cierra nunca.<br>
			 Se baila siempre en la fiesta mayor: el círculo de la sardana, que permanecerá abierto, lo inicia el alcalde<br>
			 y poco a poco se van sumando los vecinos, de modo que, figuradamente, todo el pueblo acaba bailando la misma sardana.<br>
			 Hoy al alcalde se le puede ver como una fuente de poder, pero si tenemos presente la historia del pueblo y del abad, que todo el pueblo se colocara físicamente 
			 detrás de su alcalde, que era quien podía protegerlos de los abusos del abad... bueno, es una lectura que nos gusta hacer. <br>
			  <p><strong>La pieza de la sardana</strong><br>
			  La tradición mandaba que el alcalde eligiera cada año la pieza que sonaría al bailarse la sardana del alcalde.
			  Se dio la circunstancia de que Pere Fontàs quedó impedido durante el servicio militar, de tal manera que solo podía vivir de los derechos de autor de sus
			  composiciones. Se eligió siempre una pieza suya para el baile, de forma que la sardana del alcalde ha quedado ya ligada a la pieza Festa Mil·lenària.
            `,

        en: `
			<p><strong>The sardana tradition</strong><br>
             The sardana (Catalonia's traditional circle dance) is and always has been very important in Amer. People proudly point out that both Pere Buixó and Pere Fontàs, composers of sardanas, were born in Amer.
             </p>
			 
			 <p><strong>The Mayor's Sardana</strong><br>
			 It is a unique version of the sardana, with the peculiarity that the circle is never closed.<br>
			 It is always danced during the Main Festival: the mayor starts the circle, which remains open,<br>
			 and little by little the residents join in, so that, figuratively, the whole village ends up dancing the same sardana.<br>
			 Today the mayor might be seen as a figure of power, but if we bear in mind the history of the village and the abbot, the whole village physically lining up 
			 behind its mayor, who was the one able to protect them from the abbot's abuses... well, that's a reading we like to make. </p>
			  <p><strong>The music for the sardana</strong><br>
			  Tradition had it that each year the mayor would choose the piece to be played for the Mayor's Sardana.
			  As it happened, Pere Fontàs was left disabled during his military service, so that he could only live on the royalties from his
			  compositions. One of his pieces was always chosen for the dance, and so the Mayor's Sardana has become inseparable from the piece Festa Mil·lenària.</p>
            `,

        fr: `
			<p><strong>La tradition de la sardane</strong><br>
             La sardane (la danse traditionnelle catalane en cercle) est et a toujours été très importante à Amer. On raconte avec fierté que Pere Buixó comme Pere Fontàs, compositeurs de sardanes, sont enfants d'Amer.
             </p>
			 
			 <p><strong>La Sardane du maire</strong><br>
			 C'est une version unique de la sardane, dont la particularité est que le cercle ne se ferme jamais.<br>
			 Elle est toujours dansée lors de la fête majeure : le maire ouvre le cercle, qui restera ouvert,<br>
			 et peu à peu les habitants s'y joignent, si bien que, symboliquement, tout le village danse la même sardane.<br>
			 Aujourd'hui, on peut voir le maire comme une figure de pouvoir, mais si l'on garde à l'esprit l'histoire du village et de l'abbé, voir tout le village se ranger physiquement 
			 derrière son maire, celui qui pouvait le protéger des abus de l'abbé... eh bien, c'est une lecture qui nous plaît. </p>
			  <p><strong>Le morceau de la sardane</strong><br>
			  La tradition voulait que le maire choisisse chaque année le morceau qui accompagnerait la Sardane du maire.
			  Il se trouve que Pere Fontàs resta invalide à la suite de son service militaire, si bien qu'il ne pouvait vivre que des droits d'auteur de ses
			  compositions. On choisit donc toujours l'un de ses morceaux pour la danse, de sorte que la Sardane du maire reste désormais liée au morceau Festa Mil·lenària.</p>
            `,
    },

    'equipament': {
        ca: `
             <p><strong>Piscina municipal</strong><br>
             La piscina d'Amer és a la zona esportiva del poble, oberta durant els mesos d'estiu (juny-setembre).
             Els menors de 3 anys no pagen entrada.<br>
             Horari habitual: de 10h a 18h. <br>Consulteu els detalls a l'agenda de l'ajuntament <br>
			<a href="https://amer.cat/equipaments/esportius/"> https://amer.cat/equipaments/esportius/</a>
             </p>

             <p><strong>Museu Etnològic Lluís Sidera</strong><br>
             En Lluís Sidera va estar tota la vida arreplegant totes les eines del camp que la modernització havia tornat obsoletes.<br>
			 Les tenia exposades a casa seva i eren visitables sempre que hi fos.<br>
			 Va fer donació de totes a l'ajuntament, tingueu en compte que el 100% de l'exposició que hi veureu és seva.<br>
             Contactar per horaris: meda@amer.cat /  972 431 956.<br>
			 <a href="https://www.catalunya.com/ca/continguts/patrimoni-cultural/museu-etnologic-lluis-sidera-17-16001-580172"> https://www.catalunya.com/ca/continguts/patrimoni-cultural/museu-etnologic-lluis-sidera-17-16001-580172 </a>
             </p>

             <p><strong>Pistes de pàdel</strong><br>
			 A la zona esportiva, junt amb el camp de futbol a l'altra banda del riu. <br>
             972 431 112 (de 9 a 14 h.)<br>
             <a href="https://amer.cat/equipaments/esportius/">https://amer.cat/equipaments/esportius/</a>
             </p>`,

        es: `
             <p><strong>Piscina municipal</strong><br>
             La piscina de Amer está en la zona deportiva del pueblo y abre durante los meses de verano (junio-septiembre).
             Los menores de 3 años no pagan entrada.<br>
             Horario habitual: de 10 h a 18 h. <br>Consultad los detalles en la agenda del ayuntamiento <br>
			<a href="https://amer.cat/equipaments/esportius/"> https://amer.cat/equipaments/esportius/</a>
             </p>

             <p><strong>Museo Etnológico Lluís Sidera</strong><br>
             Lluís Sidera pasó toda la vida recogiendo todas las herramientas del campo que la modernización había dejado obsoletas.<br>
			 Las tenía expuestas en su casa y se podían visitar siempre que él estuviera.<br>
			 Las donó todas al ayuntamiento; tened en cuenta que el 100% de la exposición que veréis es suya.<br>
             Contacto para horarios: meda@amer.cat /  972 431 956.<br>
			 <a href="https://www.catalunya.com/ca/continguts/patrimoni-cultural/museu-etnologic-lluis-sidera-17-16001-580172"> https://www.catalunya.com/ca/continguts/patrimoni-cultural/museu-etnologic-lluis-sidera-17-16001-580172 </a>
             </p>

             <p><strong>Pistas de pádel</strong><br>
			 En la zona deportiva, junto al campo de fútbol, al otro lado del río. <br>
             972 431 112 (de 9 a 14 h)<br>
             <a href="https://amer.cat/equipaments/esportius/">https://amer.cat/equipaments/esportius/</a>
             </p>`,

        en: `
             <p><strong>Municipal swimming pool</strong><br>
             Amer's swimming pool is in the village sports area and is open during the summer months (June to September).
             Children under 3 get in free.<br>
             Usual opening hours: 10 am to 6 pm. <br>Check the details in the Town Hall's events calendar <br>
			<a href="https://amer.cat/equipaments/esportius/"> https://amer.cat/equipaments/esportius/</a>
             </p>

             <p><strong>Lluís Sidera Ethnological Museum</strong><br>
             Lluís Sidera spent his whole life collecting all the farm tools that modernisation had made obsolete.<br>
			 He displayed them in his own home, and anyone could visit whenever he was in.<br>
			 He donated the entire collection to the Town Hall; bear in mind that 100% of the exhibition you will see was his.<br>
             Contact for opening hours: meda@amer.cat /  972 431 956.<br>
			 <a href="https://www.catalunya.com/ca/continguts/patrimoni-cultural/museu-etnologic-lluis-sidera-17-16001-580172"> https://www.catalunya.com/ca/continguts/patrimoni-cultural/museu-etnologic-lluis-sidera-17-16001-580172 </a>
             </p>

             <p><strong>Padel courts</strong><br>
			 In the sports area, next to the football pitch on the other side of the river. <br>
             972 431 112 (9 am to 2 pm)<br>
             <a href="https://amer.cat/equipaments/esportius/">https://amer.cat/equipaments/esportius/</a>
             </p>`,

        fr: `
             <p><strong>Piscine municipale</strong><br>
             La piscine d'Amer se trouve dans la zone sportive du village et ouvre pendant les mois d'été (juin à septembre).
             L'entrée est gratuite pour les moins de 3 ans.<br>
             Horaires habituels : de 10 h à 18 h. <br>Consultez les détails dans l'agenda de la mairie <br>
			<a href="https://amer.cat/equipaments/esportius/"> https://amer.cat/equipaments/esportius/</a>
             </p>

             <p><strong>Musée ethnologique Lluís Sidera</strong><br>
             Lluís Sidera a passé toute sa vie à rassembler tous les outils agricoles que la modernisation avait rendus obsolètes.<br>
			 Il les exposait chez lui, et on pouvait les visiter chaque fois qu'il était là.<br>
			 Il a fait don de toute la collection à la mairie ; sachez que 100 % de l'exposition que vous verrez lui appartenait.<br>
             Contact pour les horaires : meda@amer.cat /  972 431 956.<br>
			 <a href="https://www.catalunya.com/ca/continguts/patrimoni-cultural/museu-etnologic-lluis-sidera-17-16001-580172"> https://www.catalunya.com/ca/continguts/patrimoni-cultural/museu-etnologic-lluis-sidera-17-16001-580172 </a>
             </p>

             <p><strong>Terrains de padel</strong><br>
			 Dans la zone sportive, à côté du terrain de football, de l'autre côté de la rivière. <br>
             972 431 112 (de 9 h à 14 h)<br>
             <a href="https://amer.cat/equipaments/esportius/">https://amer.cat/equipaments/esportius/</a>
             </p>`,
    },

    'festes-tradicions': {
        ca: `
             <p><strong>Festa Major</strong><br>
             Del 8 al 15 d'agost<br>
             Es fan activitats esportives, se celebra l'aplec nocturn de Sardanes, proclamació de l'hereu i la pubilla.
			El 15 d'agost se celebra la cercavila amb la colla gegantera i concerts. <br>
			La informació actualitzada de cada any la trobareu a l'agenda de l'ajuntament: 	
			<a href="https://amer.cat/category/agenda-2/">https://amer.cat/category/agenda-2/</a>
             </p>

             <p><strong>Processó dels Dolors</strong><br>
             Se celebra per Setmana Santa, és una festivitat provinent d'una tradició del segle XIV. <br>
			 La tradició vol acostar-nos als dolors de la Mare de Déu i preparar per la crucifixió de Crist.<br>
			 A Amer el 2010 van celebrar els seus 300 anys d'existència amb la presència del Bisbe de Girona. <br>
			 Més informació a: 		<a href="https://www.elsdolorsamer.cat/"> https://www.elsdolorsamer.cat/</a>
             </p>

             <p><strong>Festa de l'Albergínia</strong><br>
             Se celebra cada any a principis de setembre al barri del Pedreguet. <br>
			 És una festa molt arrelada, el punt neuràlgic és la plantada del vern a la Plaça de la Pietat. <br>
             Té una gastronomia pròpia que val la pena tastar. Només direm que no són albergínies! <br>
			 Per més informació: <a href="https://www.festes.org/ca/calendari/festes-d-estiu/1940/article/1142/festa-de-l-alberginia"> Festa Esberguínia</a>
             </p>
			 
			   <p><strong>Marxa de les Ermites</strong><br>
             Cada maig des de les Esquelles organitzen una ruta fantàstica per camins i corriols que et porten a visitar les ermites de Santa Brígida, Santa Lena i Sant Roc. <br>
			 Habitualment s'organitzen dos recorreguts de 8  i 15 km. <br>
			 <a href ="https://esquelles.cat/"> https://esquelles.cat/</a>
             </p>
			 
			   <p><strong>Aplec de Santa Brígida</strong><br>
             El primer cap de setmana de febrer es fa el tradicional aplec de Santa Brígida. <br>
			 Amb activitats de foc i focs artificials al vespre i botifarrades al migdia.
			 S'organitza la pujada amb itineraris diferents per ciclistes i caminadors. <br>
			 La cloenda es fa amb el Cant dels Goigs a l'ermita. <br>
			 <a href ="https://esquelles.cat/"> https://esquelles.cat/</a>
             </p>
			 
			  <p><strong>Sona Amer</strong><br>
             Des de fa 10 anys s'organitza cada gener un festival de música en viu.<br>
			 L'organitza https://www.ideagc.com/  al Teatre el Casal d'Amer<br>
			 <a href="https://amer.cat/sonaamer2026/">https://amer.cat/sonaamer2026/</a>
             </p>
			 `,
			 
			 

        es: `
             <p><strong>Fiesta Mayor</strong><br>
             Del 8 al 15 de agosto<br>
             Se hacen actividades deportivas, se celebra el aplec nocturno de sardanas y la proclamación del hereu y la pubilla.
			El 15 de agosto se celebra el pasacalles con la colla de gigantes y conciertos. <br>
			Encontraréis la información actualizada de cada año en la agenda del ayuntamiento: 	
			<a href="https://amer.cat/category/agenda-2/">https://amer.cat/category/agenda-2/</a>
             </p>

             <p><strong>Procesión de los Dolores</strong><br>
             Se celebra en Semana Santa y es una festividad que procede de una tradición del siglo XIV. <br>
			 La tradición quiere acercarnos a los dolores de la Virgen y prepararnos para la crucifixión de Cristo.<br>
			 En Amer, en 2010 se celebraron sus 300 años de existencia con la presencia del Obispo de Girona. <br>
			 Más información en: 		<a href="https://www.elsdolorsamer.cat/"> https://www.elsdolorsamer.cat/</a>
             </p>

             <p><strong>Fiesta de la Berenjena (Festa de l'Albergínia)</strong><br>
             Se celebra cada año a principios de septiembre en el barrio del Pedreguet. <br>
			 Es una fiesta muy arraigada; el punto neurálgico es la plantada del aliso en la Plaza de la Pietat. <br>
             Tiene una gastronomía propia que vale la pena probar. ¡Solo diremos que no son berenjenas! <br>
			 Para más información: <a href="https://www.festes.org/ca/calendari/festes-d-estiu/1940/article/1142/festa-de-l-alberginia"> Fiesta de la Berenjena</a>
             </p>
			 
			   <p><strong>Marcha de las Ermitas</strong><br>
             Cada mayo, desde Les Esquelles organizan una ruta fantástica por caminos y senderos que te llevan a visitar las ermitas de Santa Brígida, Santa Lena y Sant Roc. <br>
			 Habitualmente se organizan dos recorridos, de 8 y 15 km. <br>
			 <a href ="https://esquelles.cat/"> https://esquelles.cat/</a>
             </p>
			 
			   <p><strong>Romería de Santa Brígida</strong><br>
             El primer fin de semana de febrero se celebra la tradicional romería (aplec) de Santa Brígida. <br>
			 Con actividades de fuego y fuegos artificiales por la noche y butifarradas al mediodía.
			 Se organiza la subida con itinerarios diferentes para ciclistas y caminantes. <br>
			 La clausura se hace con el canto de los Goigs en la ermita. <br>
			 <a href ="https://esquelles.cat/"> https://esquelles.cat/</a>
             </p>
			 
			  <p><strong>Sona Amer</strong><br>
             Desde hace 10 años se organiza cada enero un festival de música en directo.<br>
			 Lo organiza https://www.ideagc.com/ en el Teatro el Casal d'Amer<br>
			 <a href="https://amer.cat/sonaamer2026/">https://amer.cat/sonaamer2026/</a>
             </p>
			 `,

        en: `
             <p><strong>Main Festival (Festa Major)</strong><br>
             From 8 to 15 August<br>
             There are sports activities, a night-time sardana gathering (aplec), and the proclamation of the hereu and pubilla (the festival's young representatives).
			On 15 August there is a parade with the giants troupe, plus concerts. <br>
			You will find each year's updated information in the Town Hall's events calendar: 	
			<a href="https://amer.cat/category/agenda-2/">https://amer.cat/category/agenda-2/</a>
             </p>

             <p><strong>Procession of the Sorrows (Processó dels Dolors)</strong><br>
             It is held during Holy Week and comes from a tradition dating back to the 14th century. <br>
			 The tradition aims to bring us closer to the sorrows of the Virgin Mary and prepare us for the crucifixion of Christ.<br>
			 In 2010 Amer celebrated its 300 years of existence in the presence of the Bishop of Girona. <br>
			 More information at: 		<a href="https://www.elsdolorsamer.cat/"> https://www.elsdolorsamer.cat/</a>
             </p>

             <p><strong>Aubergine Festival (Festa de l'Albergínia)</strong><br>
             It is held every year in early September in the Pedreguet quarter. <br>
			 It is a deeply rooted festival; its highlight is the planting of the alder tree in Pietat Square. <br>
             It has its own food, which is well worth trying. All we'll say is that they're not aubergines! <br>
			 For more information: <a href="https://www.festes.org/ca/calendari/festes-d-estiu/1940/article/1142/festa-de-l-alberginia"> Aubergine Festival</a>
             </p>
			 
			   <p><strong>Hermitages Walk (Marxa de les Ermites)</strong><br>
             Every May, Les Esquelles organise a fantastic route along tracks and footpaths that takes you to the hermitages of Santa Brígida, Santa Lena and Sant Roc. <br>
			 There are usually two routes, of 8 and 15 km. <br>
			 <a href ="https://esquelles.cat/"> https://esquelles.cat/</a>
             </p>
			 
			   <p><strong>Santa Brígida Pilgrimage (Aplec de Santa Brígida)</strong><br>
             On the first weekend of February the traditional Santa Brígida gathering takes place. <br>
			 With fire activities and fireworks in the evening, and botifarra (Catalan sausage) barbecues at midday.
			 The climb is organised with different routes for cyclists and walkers. <br>
			 It closes with the singing of the Goigs (traditional hymns) at the hermitage. <br>
			 <a href ="https://esquelles.cat/"> https://esquelles.cat/</a>
             </p>
			 
			  <p><strong>Sona Amer</strong><br>
             For the past 10 years, a live music festival has been held every January.<br>
			 It is organised by https://www.ideagc.com/ at the Casal d'Amer Theatre<br>
			 <a href="https://amer.cat/sonaamer2026/">https://amer.cat/sonaamer2026/</a>
             </p>
			 `,

        fr: `
             <p><strong>Fête majeure (Festa Major)</strong><br>
             Du 8 au 15 août<br>
             Au programme : activités sportives, rassemblement nocturne de sardanes (aplec) et proclamation de l'hereu et de la pubilla (les jeunes ambassadeurs de la fête).
			Le 15 août a lieu le défilé avec la troupe des géants, ainsi que des concerts. <br>
			Vous trouverez les informations actualisées de chaque année dans l'agenda de la mairie : 	
			<a href="https://amer.cat/category/agenda-2/">https://amer.cat/category/agenda-2/</a>
             </p>

             <p><strong>Procession des Douleurs (Processó dels Dolors)</strong><br>
             Elle a lieu pendant la Semaine sainte et est issue d'une tradition du XIVe siècle. <br>
			 Cette tradition veut nous rapprocher des douleurs de la Vierge et nous préparer à la crucifixion du Christ.<br>
			 En 2010, Amer a célébré ses 300 ans d'existence en présence de l'évêque de Gérone. <br>
			 Plus d'informations : 		<a href="https://www.elsdolorsamer.cat/"> https://www.elsdolorsamer.cat/</a>
             </p>

             <p><strong>Fête de l'Aubergine (Festa de l'Albergínia)</strong><br>
             Elle a lieu chaque année début septembre dans le quartier du Pedreguet. <br>
			 C'est une fête très enracinée, dont le moment fort est la plantation de l'aulne sur la place de la Pietat. <br>
             Elle a sa propre gastronomie, qui vaut la peine d'être goûtée. Nous dirons seulement que ce ne sont pas des aubergines ! <br>
			 Pour plus d'informations : <a href="https://www.festes.org/ca/calendari/festes-d-estiu/1940/article/1142/festa-de-l-alberginia"> Fête de l'Aubergine</a>
             </p>
			 
			   <p><strong>Marche des Ermitages (Marxa de les Ermites)</strong><br>
             Chaque mois de mai, Les Esquelles organisent un superbe parcours par chemins et sentiers qui mène aux ermitages de Santa Brígida, Santa Lena et Sant Roc. <br>
			 Deux parcours sont habituellement proposés, de 8 et 15 km. <br>
			 <a href ="https://esquelles.cat/"> https://esquelles.cat/</a>
             </p>
			 
			   <p><strong>Pèlerinage de Santa Brígida (Aplec de Santa Brígida)</strong><br>
             Le premier week-end de février a lieu le traditionnel pèlerinage de Santa Brígida. <br>
			 Avec des animations de feu et un feu d'artifice le soir, et des grillades de botifarra (saucisse catalane) à midi.
			 La montée est organisée avec des itinéraires différents pour les cyclistes et les marcheurs. <br>
			 La fête se clôt par le chant des Goigs (cantiques traditionnels) à l'ermitage. <br>
			 <a href ="https://esquelles.cat/"> https://esquelles.cat/</a>
             </p>
			 
			  <p><strong>Sona Amer</strong><br>
             Depuis 10 ans, un festival de musique live est organisé chaque mois de janvier.<br>
			 Il est organisé par https://www.ideagc.com/ au Théâtre el Casal d'Amer<br>
			 <a href="https://amer.cat/sonaamer2026/">https://amer.cat/sonaamer2026/</a>
             </p>
			 `,
    },
};

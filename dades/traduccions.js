// ============================================================
// DADES: Traduccions de la interfície i contingut de seccions
// Poble: Montbrull (exemple fictici)
// ============================================================
// Estructura de cada entrada:
//   'clau': { ca: '...', es: '...', en: '...' }
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
    'titol-app':            { ca: 'Amer',           es: 'Amer',              en: 'Amer'              },
    'obrir-menu':           { ca: 'Obrir menú',          es: 'Abrir menú',             en: 'Open menu'              },
    'tancar-menu':          { ca: 'Tancar menú',         es: 'Cerrar menú',            en: 'Close menu'             },
    'tornar':               { ca: 'Tornar',              es: 'Volver',                 en: 'Back'                   },

    // --- Mapa principal ---
    'mapa-poble-label':     { ca: 'Mapa interactiu de Amer',
                              es: 'Mapa interactivo de Amer',
                              en: 'Interactive map of Amer'                                                     },
    'instruccio-mapa':      { ca: 'Toca una zona per explorar-la',
                              es: 'Toca una zona para explorarla',
                              en: 'Tap a zone to explore it'                                                         },

    // --- Filtre d'estrelles (zona.html) ---
    'filtre-estrelles':     { ca: 'Filtrar per rellevància',
                              es: 'Filtrar por relevancia',
                              en: 'Filter by relevance'                                                              },
    'filtre-tots':          { ca: 'Tots',                es: 'Todos',                  en: 'All'                    },
    'filtre-una-estrella':  { ca: 'Recomanats',          es: 'Recomendados',           en: 'Recommended'            },
    'filtre-dues-estrelles':{ ca: 'Destacats',           es: 'Destacados',             en: 'Featured'               },
    'filtre-tres-estrelles':{ ca: 'Imprescindibles',     es: 'Imprescindibles',        en: 'Must-see'               },

    // --- Fitxa de punt d'interès (punt-interes.html) ---
    'any-construccio':      { ca: 'Any:',                es: 'Año:',                   en: 'Year:'                  },
    'estil-arquitectonic':  { ca: 'Estil:',              es: 'Estilo:',                en: 'Style:'                 },
    'zona-pertany':         { ca: 'Zona:',               es: 'Zona:',                  en: 'Zone:'                  },
    'rellevancia':          { ca: 'Rellevància:',        es: 'Relevancia:',            en: 'Relevance:'             },

    // --- Missatges d'estat ---
    'sense-resultats':      { ca: 'Cap punt d\'interès amb aquest filtre',
                              es: 'Ningún punto de interés con este filtro',
                              en: 'No points of interest match this filter'                                          },
    'carregant':            { ca: 'Carregant…',          es: 'Cargando…',              en: 'Loading…'               },
    'error-zona':           { ca: 'No s\'ha trobat la zona sol·licitada',
                              es: 'No se ha encontrado la zona solicitada',
                              en: 'The requested zone was not found'                                                 },
    'error-punt':           { ca: 'No s\'ha trobat el punt d\'interès',
                              es: 'No se ha encontrado el punto de interés',
                              en: 'The point of interest was not found'                                              },

    // --- Accessibilitat: etiquetes ARIA generades per JS ---
    'aria-estrelles':       { ca: '{n} de 3 estrelles',  es: '{n} de 3 estrellas',     en: '{n} out of 3 stars'     },
    'aria-zona-boto':       { ca: 'Explorar {nom}',      es: 'Explorar {nom}',         en: 'Explore {nom}'          },
    'aria-marcador-pi':     { ca: 'Veure {nom}',         es: 'Ver {nom}',              en: 'View {nom}'             },

    // --- Avís sense JavaScript ---
    'noscript-avis':        { ca: 'Aquesta aplicació requereix JavaScript per funcionar.',
                              es: 'Esta aplicación requiere JavaScript para funcionar.',
                              en: 'This application requires JavaScript to work.'                                    },
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
    'introduccio':          { ca: 'Presentació',         es: 'Introducción',           en: 'Introduction'           },
    'mapa':                 { ca: 'Mapa',                es: 'Mapa',                   en: 'Map'                    },
    'historia':             { ca: 'Història',            es: 'Historia',               en: 'History'                },
    'rutes':                { ca: 'Rutes',               es: 'Rutas',                  en: 'Routes'                 },
    'arquitectura':         { ca: 'Arquitectura',        es: 'Arquitectura',           en: 'Architecture'           },
    'informacio-practica':  { ca: 'Informació pràctica', es: 'Info práctica',          en: 'Practical info'         },
	'sardana':  			{ ca: 'Sardanes', 			 es: 'Sardanas',        	  en: 'Sardanes'      		   },
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
        ca: `<p>Benvinguts a <strong>Amer</strong>, ón els carrers estrets i empedrats, l'olor de fum de les xemeneies a l'hivern i el silenci dels matins de diumenge t'embriaguen sense voler.
			<br> No serà cap sorpresa, no veureu aquí ni estàtues de grans generals ni tampoc cap arc del triomf.
			Sí queda però el testimoni de mil anys de història,  aquí tenim la història de la gent de a peu.  <br>
			
			
		</p>
             <p>És la història de la gent menuda, que no tenía un escrivà que li guardés registre, acompanyeu-nos a trobar-la.</p>`,

        es: `<p>Bienvenidos a <strong>Montbrull</strong>, un pequeño municipio de la Cataluña
             central enclavado entre viñedos y bosques de roble. Con poco más de 800 habitantes,
             conserva intacto su núcleo medieval, sus tradiciones vitivinícolas
             y una hospitalidad que hace volver a quienes lo visitan.</p>
             <p>Pasear por sus calles empedradas es hacer un viaje de ocho siglos atrás.</p>`,

        en: `<p>Welcome to <strong>Montbrull</strong>, a small municipality in central Catalonia
             nestled among vineyards and oak forests. With just over 800 inhabitants,
             it preserves intact its medieval core, its wine-making traditions
             and a warmth that brings visitors back time and again.</p>
             <p>Walking its cobbled streets is a journey eight centuries back in time.</p>`,
    },

    'historia': {
        ca: `<p>La hstòria d'Amer comença amb la fundació del monestir al 949. <br>
		No és que abans no hi hagués hagut vida, sinó que no en consta documentació. <br>
		Com la majoria de monestirs el d'Amer va anar acumulant donacions i riqueses i aixó va atraure població que es va anar instal·lant on va poder. <br>
		Per entendre la importància del monestir, penseu que fins a 6 monjos d'aquest van ser escollits presidents de la Generalitat. <br>
		Aixó el que indica és que o bé les famílies nobles enviaven els seus fills ja instruïts al monestir (i utilitzaven la influència familiar per ser escollits) <br>
		O bé l'escriptorium del monestir era tant bo que els monjos sortien prou ben preparats per ser-ho. <br>
		Probablement una mica de cada cosa. <br>
		L'establiment del mercat setmanal al S.XII és un altre indicador de prosperitat. <br>
		La prosperitat va començar a devallar amb la crisi del S.XV, el gran terratrèmol de 1427, 
		l'any de la picor 1471 o la pesta de 1483 no van ajudar precisament. 
		El monestir va seguir subsistint, amb alts i baixos, fins la desamortització de 1835. <br>
		<br><strong>I la gent menuda on queda?</strong><br>
		El monestir, edificis annexos i horts ocupaven gran part del que ara és el poble antic. 
		La gent, atreta per la seguretat que aportava el monestir i les possibilitats de comerç 
		es va anar instal·lant on podia. I com avui dia als vorals de la autopista hi ha barraquisme 
		la població es va anar instal·lant a la carretera reial que duia a Girona, encara avui carrer Girona. <br>
		És l'actual barri del Pedreguet. <br><br>
		Tinguem present que la comunitat de monjos es dedicava a resar, tenir cura del monestir, etc, sí. <br>
		Però l'abat.. l'abat a efectes pràctics era un senyor feudal més, s'assegurava que tothom pagués els seus impostos, <br>
		administrava justícia (empresonaments), era l'autoritat absoluta. <br>
		I com? Us imagineu els monjos armats, patrullant els carrers i defensant els murs del monestir? <br>
		LLEIG<br>
		Millor externalitzem, i així a l'entrada del poble hi havia el Castell de Estela (avui ruinós) 
		otorgat a un baró, controlava l'accés al poble i en cas de necessitat era prou aprop per socórrer els monjos. <br>
		No consten revoltes però si se sap que al 1335 l'Abat renuncià als anomenats "mals usos" 
		i tampoc consta que se li apareguès un arcàngel per fer-lo canviar de parer. <br>
		Les guerres dels remences a la segona meitat del S.XV, entre d'altres, van aportar a Amer disposar de Batlle. <br>
		Quedant així separada la població de la administració directa de l'Abat. <br><br>
		Resumint: <br>
		El "casc antic" el trobareu a un extrem del poble al carrer Girona (Barri del Pedreguet)<br> 
		La plaça de la vila, actual centre neuràlgic, es va urbanitzar després de la desamortització, amb la clausura del monestir.
		De l'antic monestir en queda la actual esglèsia de Santa Maria, la resta es va anar reaprofitant en habitatges.
			</p>`,

        es: `<p>Montbrull aparece documentado por primera vez en el año <strong>1163</strong>
             en una carta de población otorgada por el conde Ramón Berenguer IV. A lo largo de
             la edad media creció al amparo de su castillo, hoy en ruinas pero
             aún visible desde cualquier punto del pueblo.</p>
             <p>En el siglo XVIII, la industria textil y el comercio del vino dieron una nueva
             prosperidad al municipio, reflejada en las casas solariegas de la calle Mayor.</p>
             <p>Durante la guerra del Francés (1808-1814) el pueblo sufrió importantes
             daños, de los que tardó décadas en recuperarse.</p>`,

        en: `<p>Montbrull is first documented in <strong>1163</strong> in a settlement charter
             granted by Count Ramon Berenguer IV. Throughout the Middle Ages it grew under
             the protection of its castle, now in ruins but still visible from anywhere in
             the village.</p>
             <p>In the 18th century, the textile industry and wine trade brought new
             prosperity, reflected in the grand manor houses along Carrer Major.</p>
             <p>During the Peninsular War (1808-1814) the village suffered considerable
             damage, taking decades to recover.</p>`,
    },

    'rutes': {
        ca: `<p>Amer ofereix tres rutes senyalitzades adaptades a tots els nivells:</p>
             <ul>
               <li><strong>Ruta de SantaBrígida</strong> — 1,2 km · 45 min · fàcil.
                   Recorre els principals monuments del centre històric.
				   https://es.wikiloc.com/rutas-senderismo/amer-santa-brigida-23507062</li>
               <li><strong>Ruta de voramera i el Carrilet</strong> — 4,5 km · 2 h · moderat.
                   Circular pel poble  https://www.wikiloc.com/nordic-walking-trails/amer-voramera-75666065.</li>
              
             </ul>
             <p>Tots els itineraris disposen de panells informatius i codis QR
             amb contingut addicional.</p>`,

        es: `<p>Montbrull ofrece tres rutas señalizadas adaptadas a todos los niveles:</p>
             <ul>
               <li><strong>Ruta del Núcleo Antiguo</strong> — 1,2 km · 45 min · fácil.
                   Recorre los principales monumentos del centro histórico.</li>
               <li><strong>Ruta de los Viñedos</strong> — 4,5 km · 2 h · moderado.
                   Circular por los viñedos con vistas panorámicas al castillo.</li>
               <li><strong>Ruta del Bosque de Mas Pujol</strong> — 8 km · 3,5 h · medio.
                   Senda forestal hasta la ermita de Sant Roc (s. XIV).</li>
             </ul>
             <p>Todos los itinerarios disponen de paneles informativos y códigos QR
             con contenido adicional.</p>`,

        en: `<p>Montbrull offers three signposted routes suitable for all levels:</p>
             <ul>
               <li><strong>Old Town Route</strong> — 1.2 km · 45 min · easy.
                   Takes in the main monuments of the historic centre.</li>
               <li><strong>Vineyard Route</strong> — 4.5 km · 2 h · moderate.
                   A circular walk through vineyards with panoramic views of the castle.</li>
               <li><strong>Mas Pujol Forest Route</strong> — 8 km · 3.5 h · medium.
                   Forest trail to the Sant Roc hermitage (14th century).</li>
             </ul>
             <p>All itineraries feature information panels and QR codes
             with additional content.</p>`,
    },

    'arquitectura': {
        ca: `<p>Perdoneu, sí. Creiem cal petita introducció de l'arquitectura abans de començar.<br>
             Història de la arquitectura:</p>
             Avui en día, amb formigó armat i acer, no hi pensem, quan has construït cuatre parets
			 et trobes amb problemes per: <br>
			 <ul>
               <li>Crear un espai per passar (porta) </li>
			   <li>Crear un espai per ventilar i il·luminar (finestra)</li>
			  </ul>
			  Penseu en quan els nens intenten construïr una cabana, o que la humanitat no va viure en coves perquè els agradés estar a les fosques durant el dia o respirant fum de les fogueres. <br>
			 No us costarà trobar com els abats i senyors contractaven mestres d'obres i picapedrers per fer una volta de canó (Romànic) o Arcs Ojivals (Gòtic). <br>
			 Aquí ens centrarem en la "arquitectura popular", la que no ha deixat rastre escrit. Cada ú s'aixecava casa seva com podía. <br>
			 <br>
			 Sol·lucions:<br>
			 <br><strong>Podem posar una biga de fusta.</strong><br>
			 Tot el pes de la paret (i pisos superiors) caurà sobre aquesta biga.<br>
			 Ha de ser fusta molt bona, molt gruixuda i... resumint no aguanta. 
			 <br>Només apta per finestres molt petites i només als pisos superiors.<br>
			 <br><strong>Podem posar una gran roca.</strong><br>
			 No és ideal, però funciona millor.<br>
			 Tenim el que són les LLINDES: blocs de pedra gruixuda que permeten una amplada digna d'una porta.<br>
			 No només estàn a la part més visible de la entrada, també són costoses de fer.<br>
			 Aquí és on trobareu sovint la inscripció amb l'any, el nom del propietari, la seva professió o un goig a la Mare de Déu.<br>
			 Si tens una llinda, tens una casa. És un orgull.<br>
			 <br><strong>Perque no copiem la porta ovalada de l'esglèsia?</strong><br>
			 Tu.. tu tens cuartos eh, aixó et permet una entrada per on pot passar un carro!<br>
			 La tecnología tampoc és moderna, els romans ja la feien. Però per fer suficients peces de pedra en forma trapezoidal que encaixin a la perfecció<br>
			 i reparteixin el pes de uniformement a ambdós costats... necessites un picapedrer de qualitat.<br>
			 En trobareu tìpicament a les masies reformades al SXVIII
			 quan la exportació de vi donava bons beneficis.
			 `,

        es: `<p>El patrimonio arquitectónico de Montbrull abarca seis siglos de historia.
             Destacan tres estilos principales:</p>
             <ul>
               <li><strong>Gótico catalán</strong> (ss. XIV-XV): la iglesia de Sant Pere
                   y la puerta de la Muralla son los mejores ejemplos.</li>
               <li><strong>Renacimiento</strong> (s. XVI): la Plaza Mayor y el portal
                   de Can Torrentó muestran la influencia italiana del momento.</li>
               <li><strong>Modernismo</strong> (1890-1920): el Casino dels Vinyaters
                   y la fachada de la Cooperativa Agrícola aportan un toque singular
                   al conjunto del núcleo.</li>
             </ul>`,

        en: `<p>Montbrull's architectural heritage spans six centuries of history.
             Three main styles stand out:</p>
             <ul>
               <li><strong>Catalan Gothic</strong> (14th–15th c.): Sant Pere church
                   and the Town Wall Gate are the finest examples.</li>
               <li><strong>Renaissance</strong> (16th c.): the Main Square and the
                   Can Torrentó portal reflect the Italian influence of the period.</li>
               <li><strong>Modernisme</strong> (1890–1920): the Casino dels Vinyaters
                   and the façade of the Agricultural Cooperative add a distinctive
                   touch to the old town.</li>
             </ul>`,
    },

    'informacio-practica': {
        ca: `
			<p><strong>Telèfons interés</strong><br>
             Ajuntament: 972 431 112 / informaciot@amer.cat <br>
			 Mossos Santa Coloma Farners: 972 181 675 / Carrer Francesc Moragas 65-67, Santa Coloma de Farners <br>
			 Cap d'Anglés:  972 421 498 / Jardins de Can Cendra, Anglés <br>
			 Farmàcia d'Amer: 972 430 316 / Av. de la Selva 63, Amer
             </p>
             <p><strong>Aparcament</strong><br>
             Amb excepció dels migdies laborables no acostuma a haver problemes d'aparcament.
			Amb tot trobareu sempre espai a l'aparcament municipal, a la dreta de la carretera en direcció Olot:	Carrer del Riu Rogent, s/n
             <br>
			 a 5 minuts caminant del nucli antic.</p>
             <p><strong>Gasolineres</strong><br>
             A la sortida del poble en direcció Olot trobareu una gasolinera Repsol que disposa també de botiga de 6 a 21h<br>
			 Amb tot, a l'entrada d'Anglés trobareu a la primera rotonda dues gasolineres low cost que es fan competència.
			 
			 </p> 
			 <p><strong>Alimentació</strong><br>
			 Excepte a la farmàcia i l'estanc, podeu fer la compra a quasi qualsevol botiga.
			 Els forns de pa tenen brics de llet i pasta seca, a la pastisseria pots trobat tabac i revistes...
             Amb tot, entrant la vila hi ha un supermercat Charter i un Suma a la plaça. <br>
			 
			 Aquí el pa és bo, hi ha més de 6 forns de pa. Cada família té el seu i no ens mullarem però compreu-ne!.
			 
			 </p>
			 <p><strong>Especialitat d'Amer</strong><br>
             Típic d'Amer són els Capricis, els trobareu a la Pastisseria Puigdemont a Sant Miquel 6  <br>
			 Destaquem també els Rocs de la Pastisseria Martoni (Plaça de la Vila 31)						 			 
			 </p>
			 
			 <p><strong>Ón menjar</strong><br>
			 A l'Snack Bar (tocant a la farmàcia) podreu esmorzar, dinar, sopar i pendre una cervesa a la fresca a bon preu <br>
			 A tots els bars de la plaça trobareu menú diari i si voleu seure amb calma recomanem Can Co-Absis, darrere l'absis del Monestir.
			 
					 
			 </p>
			 
             <p><strong>Allotjament</strong><br>
             Confiem que no us calgui i ens recomaneu.</p>`,

        es: `<p><strong>Cómo llegar</strong><br>
             En coche: C-37 desde Manresa, salida Montbrull km 42.<br>
             En autobús: línea regional L-14, parada Montbrull Centre (lunes a sábado).</p>
             <p><strong>Aparcamiento</strong><br>
             Aparcamiento gratuito en la zona deportiva (Carrer del Molí, s/n),
             a 5 minutos andando del casco antiguo.</p>
             <p><strong>Oficina de Turismo</strong><br>
             Plaza Mayor, 1 · Tel. 938 00 00 00<br>
             Primavera/otoño: lu-vi 9-14 h · sá 10-14 h<br>
             Verano (jul-ago): lu-do 9-19 h</p>
             <p><strong>Alojamiento</strong><br>
             El municipio cuenta con 2 casas rurales y 1 hostal.
             Consulta disponibilidad en la Oficina de Turismo.</p>`,

        en: `<p><strong>Getting there</strong><br>
             By car: C-37 from Manresa, Montbrull exit km 42.<br>
             By bus: regional line L-14, stop Montbrull Centre (Monday to Saturday).</p>
             <p><strong>Parking</strong><br>
             Free parking at the sports area (Carrer del Molí, s/n),
             5 minutes' walk from the old town.</p>
             <p><strong>Tourist Office</strong><br>
             Plaça Major, 1 · Tel. +34 938 00 00 00<br>
             Spring/autumn: Mon–Fri 9am–2pm · Sat 10am–2pm<br>
             Summer (Jul–Aug): Mon–Sun 9am–7pm</p>
             <p><strong>Accommodation</strong><br>
             The municipality has 2 rural houses and 1 guesthouse.
             Check availability at the Tourist Office.</p>`,
    },
	'sardana': {
        ca: `
			<p><strong>Tradició sardanística</strong><br>
             La tradició sardanística d'Amer és i ha estat molt important. Proba d'aixó en són Pere Buixó i Pere Fontàs compositors de sardanes.
             </p>
			 
			 <p><strong>Sardana de l'alcalde</strong><br>
			 És una composicó única de la sardana que té la peculiaritat que el cercle no es tanca mai.<br>
			 Es balla sempre per la festa major, el cercle de la sardana, que romandrà obert, l'inicia l'alcalde<br>
			 I poc a poc s'hi van sumant els veïns quedant així figuradament tot el poble ballant la mateixa sardana.<br>
			 Ara a l'alcalde se'l pot veure com a font de poder, però si tenim present la història del poble i l'abat, que tot el poble es posés de forma física 
			 rere el seu alcalde, que era qui podia prevenir-los dels abusos de l'abat... bé és una lectura que ens agrada de fer. <br>
			  <p><strong>La peça de la sardana</strong><br>
			  La tradició manava que l'alcalde triaria cada any la peça que sonaria al ballar-se la sardana de l'alcalde.
			  Es va donar la circumstància que Pere Fontàs fent el servei militar va quedar impossibilitat, de tal manera que només podia viure  dels drets d'autor de les seves
			  composicions. Es va triar sempre una peça seva per al ball, de forma que ha quedat ja lligat la sardana de l'alcalde amb la peça Festa Milenaria.
            `,

        es: `<p><strong>Cómo llegar</strong><br>
             En coche: C-37 desde Manresa, salida Montbrull km 42.<br>
             En autobús: línea regional L-14, parada Montbrull Centre (lunes a sábado).</p>
             <p><strong>Aparcamiento</strong><br>
             Aparcamiento gratuito en la zona deportiva (Carrer del Molí, s/n),
             a 5 minutos andando del casco antiguo.</p>
             <p><strong>Oficina de Turismo</strong><br>
             Plaza Mayor, 1 · Tel. 938 00 00 00<br>
             Primavera/otoño: lu-vi 9-14 h · sá 10-14 h<br>
             Verano (jul-ago): lu-do 9-19 h</p>
             <p><strong>Alojamiento</strong><br>
             El municipio cuenta con 2 casas rurales y 1 hostal.
             Consulta disponibilidad en la Oficina de Turismo.</p>`,

        en: `<p><strong>Getting there</strong><br>
             By car: C-37 from Manresa, Montbrull exit km 42.<br>
             By bus: regional line L-14, stop Montbrull Centre (Monday to Saturday).</p>
             <p><strong>Parking</strong><br>
             Free parking at the sports area (Carrer del Molí, s/n),
             5 minutes' walk from the old town.</p>
             <p><strong>Tourist Office</strong><br>
             Plaça Major, 1 · Tel. +34 938 00 00 00<br>
             Spring/autumn: Mon–Fri 9am–2pm · Sat 10am–2pm<br>
             Summer (Jul–Aug): Mon–Sun 9am–7pm</p>
             <p><strong>Accommodation</strong><br>
             The municipality has 2 rural houses and 1 guesthouse.
             Check availability at the Tourist Office.</p>`,
    },
};

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
    'titol-app':            { ca: 'Montbrull',           es: 'Montbrull',              en: 'Montbrull'              },
    'obrir-menu':           { ca: 'Obrir menú',          es: 'Abrir menú',             en: 'Open menu'              },
    'tancar-menu':          { ca: 'Tancar menú',         es: 'Cerrar menú',            en: 'Close menu'             },
    'tornar':               { ca: 'Tornar',              es: 'Volver',                 en: 'Back'                   },

    // --- Mapa principal ---
    'mapa-poble-label':     { ca: 'Mapa interactiu de Montbrull',
                              es: 'Mapa interactivo de Montbrull',
                              en: 'Interactive map of Montbrull'                                                     },
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
    'introduccio':          { ca: 'Introducció',         es: 'Introducción',           en: 'Introduction'           },
    'mapa':                 { ca: 'Mapa',                es: 'Mapa',                   en: 'Map'                    },
    'historia':             { ca: 'Història',            es: 'Historia',               en: 'History'                },
    'rutes':                { ca: 'Rutes',               es: 'Rutas',                  en: 'Routes'                 },
    'arquitectura':         { ca: 'Arquitectura',        es: 'Arquitectura',           en: 'Architecture'           },
    'informacio-practica':  { ca: 'Informació pràctica', es: 'Info práctica',          en: 'Practical info'         },
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
        ca: `<p>Benvinguts a <strong>Montbrull</strong>, un petit municipi de la Catalunya central
             enclavat entre vinyes i boscos de roure. Amb poc més de 800 habitants,
             conserva intacte el seu nucli medieval, les seves tradicions vitivinícoles
             i una hospitalitat que fa tornar els qui el visiten.</p>
             <p>Passejar pels seus carrers empedrats és fer un viatge de vuit segles enrere.</p>`,

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
        ca: `<p>Montbrull apareix documentat per primera vegada l'any <strong>1163</strong>
             en una carta de població atorgada pel comte Ramon Berenguer IV. Al llarg de
             l'edat mitjana va créixer a redós del seu castell, avui en ruïnes però
             encara visible des de qualsevol punt del poble.</p>
             <p>Al segle XVIII, la indústria tèxtil i el comerç del vi van donar una nova
             prosperitat al municipi, reflectida en les cases pairals del carrer Major.</p>
             <p>Durant la guerra del Francès (1808-1814) el poble va patir importants
             danys, dels quals va trigar dècades a recuperar-se.</p>`,

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
        ca: `<p>Montbrull ofereix tres rutes senyalitzades adaptades a tots els nivells:</p>
             <ul>
               <li><strong>Ruta del Nucli Antic</strong> — 1,2 km · 45 min · fàcil.
                   Recorre els principals monuments del centre històric.</li>
               <li><strong>Ruta de les Vinyes</strong> — 4,5 km · 2 h · moderat.
                   Circular per les vinyes amb vistes panoràmiques al castell.</li>
               <li><strong>Ruta del Bosc de Mas Pujol</strong> — 8 km · 3,5 h · mitjà.
                   Senda forestal fins a l'ermita de Sant Roc (s. XIV).</li>
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
        ca: `<p>El patrimoni arquitectònic de Montbrull abraça sis segles d'història.
             Destaquen tres estils principals:</p>
             <ul>
               <li><strong>Gòtic català</strong> (ss. XIV-XV): l'església de Sant Pere
                   i la porta de la Muralla en són els millors exemples.</li>
               <li><strong>Renaixement</strong> (s. XVI): la Plaça Major i el portal
                   de Can Torrentó mostren la influència italiana del moment.</li>
               <li><strong>Modernisme</strong> (1890-1920): el Casino dels Vinyaters
                   i la façana de la Cooperativa Agrícola aporten un toc singular
                   al conjunt del nucli.</li>
             </ul>`,

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
        ca: `<p><strong>Com arribar-hi</strong><br>
             En cotxe: C-37 des de Manresa, sortida Montbrull km 42.<br>
             En autobús: línia regional L-14, parada Montbrull Centre (dilluns a dissabte).</p>
             <p><strong>Aparcament</strong><br>
             Aparcament gratuït a la zona esportiva (Carrer del Molí, s/n),
             a 5 minuts caminant del nucli antic.</p>
             <p><strong>Oficina de Turisme</strong><br>
             Plaça Major, 1 · Tel. 938 00 00 00<br>
             Primavera/tardor: dl-dv 9-14 h · ds 10-14 h<br>
             Estiu (jul-ago): dl-dg 9-19 h</p>
             <p><strong>Allotjament</strong><br>
             El municipi compta amb 2 cases rurals i 1 hostal.
             Consulta disponibilitat a l'Oficina de Turisme.</p>`,

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

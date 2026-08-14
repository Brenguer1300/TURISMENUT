// ============================================================
// DADES: Punts d'interès de Montbrull
// ============================================================
// Les coordenades x/y són PERCENTATGES (0.0–100.0) sobre el
// mapa SVG de la zona corresponent (viewBox="0 0 100 100").
//
//   x: 0.0 = extrem esquerre   · x: 100.0 = extrem dret
//   y: 0.0 = extrem superior   · y: 100.0 = extrem inferior
//
// Distribució per zones:
//   zona-centre  → pi-001, pi-002, pi-003, pi-004  (4 PIs)
//   zona-moli    → pi-005, pi-006                  (2 PIs)
//   zona-castell → pi-007, pi-008                  (2 PIs)
//   zona-vinyes  → pi-009, pi-010                  (2 PIs)
//
// Estrelles de rellevància:
//   3 ★★★  Imprescindible  (1–2 per poble)
//   2 ★★   Destacat        (3–4 per poble)
//   1 ★    Recomanat       (la resta)
// ============================================================


/**
 * @typedef {Object} PuntInteres
 * @property {string}  id          - Identificador únic en format 'pi-NNN'
 * @property {string}  idZona      - ID de la zona a la qual pertany (vegeu zones.js)
 * @property {number}  estrelles   - Rellevància: 1 (recomanat) · 2 (destacat) · 3 (imprescindible)
 * @property {{x: number, y: number}} coordenades
 *                                 - Posició del marcador en percentatge (0.0–100.0)
 *                                   sobre el mapa SVG de la zona corresponent
 * @property {string}  imatge      - Ruta a la fotografia del PI
 * @property {{ca:string, es:string, en:string}} nom        - Nom en els 3 idiomes
 * @property {number}  any         - Any de construcció o primera documentació
 * @property {{ca:string, es:string, en:string}} estil      - Estil arquitectònic en els 3 idiomes
 * @property {{ca:string, es:string, en:string}} descripcio - Descripció en els 3 idiomes
 */

/** @type {PuntInteres[]} */
const PUNTS_INTERES = [


    // ============================================================
    // ZONA: Centre Històric (zona-centre)
    // Mapa de zona: imatges/mapes-zones/zona-centre.svg
    // Els 4 PIs es distribueixen per les quatre subàrees naturals
    // del nucli: l'àrea religiosa (nord), la plaça central, el
    // portal de la muralla (est) i el carrer Major (sud).
    // ============================================================

    {
        id: 'pi-001',
        idZona: 'zona-vila',
        estrelles: 2,                                // Imprescindible
        coordenades: { x: 45.3, y: 37.7 },          // Àrea nord: la nau de l'església domina
        imatge: 'imatges/punts-interes/pi-001.jpg',
        nom: {
            ca: 'Plaça de la Vila',
            es: 'Plaza de la Vila',
            en: 'Vila Square',
        },
        any: 1980,
        estil: {
            ca: 'Eclèctic',
            es: 'Eclectico',
            en: 'Eclectic',
        },
        descripcio: {
            ca: `Plaça de la Vila o plaça Porxada. 
			
			És l'espai emblemàtic d'Amer i una de les places porticades més grans de Catalunya. 
			Era l'espai on, des d'època medieval, s'hi celebrava el mercat, els porxos servien per protegir les parades de les inclemències del temps. 
			
			La plaça va ser reurbanitzada l'any 1980, quan la dinàmica de tots els pobles era retirar les llambordes dels carrers per colocar asfalt.
			Amer va voler treure pit dels seus carrers amb llambordes i així la reforma de la plaça va fer-se incorporant llambordes al punt central del poble.
			Com ja no se'n fabricaven es fer una crida a ajuntaments de tot Catalunya per aconseguir-ne.
			Així la plaça actual és composta de la retirada de les mateixes dels carrers de molts pobles i 
			ciutats catalanes. 
			
			En agraïment a cada poble que va respondre a la crida es va incloure una placa identificativa,
			creieu que trobareu el vostre?`,
            es: `La plaza de la Vila o plaza Porxada es el espacio emblemático de Amer.

						Es una de las plazas porticadas más grandes de Cataluña. Era el lugar donde, desde época medieval, se celebraba el mercado,
						y los porches servían para proteger los puestos de las inclemencias del tiempo.

					La plaza fue reurbanizada en 1980, cuando la tendencia en todos los pueblos era retirar los adoquines de las calles para colocar asfalto. 
					Amer quiso presumir de sus calles adoquinadas y, por eso, la reforma de la plaza se hizo incorporando adoquines en el punto central del pueblo. Como ya no se fabricaban, se hizo una llamada a ayuntamientos de toda Cataluña para conseguirlos.

					Así, la plaza actual está compuesta por la retirada de adoquines de las calles de muchos pueblos y ciudades catalanas.

				En agradecimiento a cada municipio que respondió a la llamada, se incluyó una placa identificativa.
			¿Creéis que encontraréis la de vuestro pueblo?`,
            en: `The Plaça de la Vila, also known as Plaça Porxada, is the emblematic square of Amer.

				It is one of the largest porticoed squares in Catalonia. Since medieval times, it was the place where the market was held, and the porticoes protected the stalls from bad weather.

			The square was redeveloped in 1980, at a time when most towns were removing cobblestones from their streets to lay asphalt. Amer wanted to take pride in its cobbled streets, so the renovation of the square incorporated cobblestones into the town’s central space. Since they were no longer being manufactured, a call was made to town councils across Catalonia to obtain them.

				As a result, the current square is made up of cobblestones removed from the streets of many Catalan towns and cities.

				To thank each town that responded to the call, an identifying plaque was added.
			Do you think you’ll find yours?`,
        },
    },

    {
        id: 'pi-002',
        idZona: 'zona-vila',
        estrelles: 1,                                // Destacat
        coordenades: { x: 31.1, y: 29.8 },         // Àrea central: plaça oberta
        imatge: 'imatges/punts-interes/pi-002.jpg',
        nom: {
            ca: 'Can Panosa',
            es: 'Can Panosa',
            en: 'Can Panosa',
        },
        any: 1800,
        estil: {
            ca: 'Gòtic tardà',
            es: 'Gótico tardío',
            en: 'Late Gothic',
        },
        descripcio: {
            ca: `Can Panosa. Plaça de la Vila 11.
				Tot i la reforma moderna de l'edifici, conserva el seu interès per la finestra re-aprofitada d'època gòtica. 
			És un finestral conopial bigeminat, amb llindes trilobulades sostingudes per una fina columna amb capitell de tipus vegetal, amb flors a les impostes.
			Podria ser del segle XV. 
			També és interessant el conjunt d'arcades de mig punt i ogivals. 
			Hi destaca el pilar de suport, motllurat i amb relleus al capitell.`,
            es: `La Plaza Mayor es el corazón social y comercial de Montbrull desde el siglo XV. Rodeada
                 de arcadas góticas tardías de piedra caliza, acoge el mercado semanal cada sábado desde
                 el año 1509. En el lado norte destaca la Casa de la Vila, con su reloj de sol del siglo XVII
                 y el escudo de la villa esculpido sobre el dintel principal. Durante el verano la plaza
                 se llena de terrazas y es escenario del Festival de Música Antigua de Montbrull.`,
            en: `The Main Square has been the social and commercial heart of Montbrull since the 15th century.
                 Surrounded by late Gothic limestone arcades, it has hosted the weekly Saturday market since
                 1509. On the north side stands the Casa de la Vila, featuring a 17th-century sundial and
                 the town's coat of arms carved above the main lintel. In summer the square fills with café
                 terraces and becomes the venue for the Montbrull Early Music Festival.`,
        },
    },

    {
        id: 'pi-003',
        idZona: 'zona-vila',
        estrelles: 1,                                // Destacat
        coordenades: {  x: 52.4 , y: 12.2},          // Àrea est: límit de la muralla
        imatge: 'imatges/punts-interes/pi-003.jpg',
        nom: {
            ca: 'Can Gultresa',
            es: 'Can Gultresa',
            en: 'Can Gultresa',
        },
        any: 1900,
        estil: {
            ca: 'Gòtic militar',
            es: 'Gótico militar',
            en: 'Military Gothic',
        },
        descripcio: {
            ca: `Can Gultresa. Plaça de la Vila 5.
			Edifici de l'any 1883 situat en un extrem de la plaça de la Vila i que té molts elements que el singularitzen. 
			D'entrada, les arcades del porxo són més altes que les de la resta de cases.
			La façana, que imita un encoixinat, presenta unes amples motllures al voltant de les obertures amb medallons a les llindes. 
			És destacable la barana dels balcons, decorades amb fulles de vinya, plataner i figuera. 
			A una llinda hi podem llegir el nom de Pelegrín Altarriba.
			Quan s'acosta festa major podreu trobar els gegants de la vila esperant a sortir sota les seves arcades.`,
            es: `Único de los tres portales originales que se conserva en pie, el Portal de la Muralla data
                 de 1318 y formaba parte del recinto amurallado encargado por el rey Jaime II. El arco de
                 medio punto con dovelas, las aspilleras laterales y los restos de la barbacana exterior
                 atestiguan la función defensiva original. En la clave del arco puede leerse la inscripción
                 «VILLA MONTIS BRULLI» parcialmente erosionada. La restauración de 2008 consolidó los
                 sillares y recuperó el pavimento de guijarros originales bajo el paso del arco.`,
            en: `The only one of the three original gates still standing, the Town Wall Gate dates from 1318
                 and formed part of the fortified enclosure commissioned by King Jaume II. The semicircular
                 voussoir arch, the lateral arrow slits, and the remains of the outer barbican bear witness
                 to its original defensive function. On the keystone the inscription «VILLA MONTIS BRULLI»
                 can be read, partially worn by weathering. The 2008 restoration consolidated the ashlar
                 masonry and recovered the original cobblestone paving beneath the arch passage.`,
        },
    },

    {
        id: 'pi-004',
        idZona: 'zona-vila',
        estrelles: 1,                                // Recomanat
        coordenades: { x:  46.1,   y:  53.2 },          // Àrea sud: carrer Major
        imatge: 'imatges/punts-interes/pi-004.jpg',
        nom: {
            ca: 'Llinda de Can Mundet',
            es: 'Llinda de Can Mundet',
            en: 'Llinda de Can Mundet',
        },
        any: 1561,
        estil: {
            ca: 'Renaixement català',
            es: 'Renacimiento catalán',
            en: 'Catalan Renaissance',
        },
        descripcio: {
            ca: `Llinda de Can Mundet. Plaça de la Vila 26.
				La trobareu a la segona finestra del carrer de Can Ventura. 
				L'interès d'aquesta llinda, de l'any 1775, rau en la seva originalitat, una decoració poc freqüent a base d'ovals i una figura central simètrica de caire vegetal. 
			Cal remarcar la particularitat de que la inscripció que flanqueja aquesta figura està feta amb lletres hebrees.`,
            es: `La Casa Torrentó es la mejor muestra del renacimiento civil en Montbrull. Construida en 1561
                 por la familia Torrentó, enriquecida en el comercio del vino y la lana, presenta una fachada
                 de tres crujías con ventanas geminadas de arco rebajado y una galería superior de seis arcos
                 de medio punto. El portal con dovelas conserva el escudo heráldico de la familia con tres
                 troncos y una cruz. Actualmente alberga el Centre d'Interpretació del Patrimoni de Montbrull,
                 abierto al público de martes a domingo.`,
            en: `Torrentó House is the finest example of civic Renaissance architecture in Montbrull. Built in
                 1561 by the Torrentó family, who had grown wealthy through wine and wool trading, it features
                 a three-bay façade with paired windows under segmental arches and an upper gallery of six
                 semicircular arches. The voussoir portal preserves the family's heraldic shield showing three
                 logs and a cross. The building now houses the Montbrull Heritage Interpretation Centre,
                 open to the public Tuesday to Sunday.`,
        },
    },


    // ============================================================
    // ZONA: Barri del Molí (zona-moli)
    // Mapa de zona: imatges/mapes-zones/zona-moli.svg
    // Zona estreta i allargada al costat del Rec de Montbrull.
    // Els 2 PIs es situen al nord (molí) i al centre (font).
    // ============================================================

    {
        id: 'pi-005',
        idZona: 'zona-moli',
        estrelles: 2,                                // Destacat
        coordenades: { x: 52.0, y: 28.0 },          // Nord de la zona: molí prop del rec
        imatge: 'imatges/punts-interes/pi-005.jpg',
        nom: {
            ca: 'Molí Fariner de Can Puig',
            es: 'Molino Harinero de Can Puig',
            en: 'Can Puig Flour Mill',
        },
        any: 1408,
        estil: {
            ca: 'Arquitectura rural medieval',
            es: 'Arquitectura rural medieval',
            en: 'Medieval rural architecture',
        },
        descripcio: {
            ca: `El Molí Fariner de Can Puig és un dels molins hidràulics medievals millor conservats de la
                 comarca. Documentat des del 1408, aprofitava el cabal del Rec de Montbrull per accionar
                 dues moles de pedra calcària. L'edifici de planta rectangular amb coberta de lloses i la
                 bassa exterior amb el canal d'alimentació es conserven gairebé intactes. L'any 2015 es va
                 restaurar la roda de fusta i s'hi va instal·lar un circuit interpretatiu que explica el
                 procés de molta tradicional. Visitable els caps de setmana de maig a octubre.`,
            es: `El Molino Harinero de Can Puig es uno de los molinos hidráulicos medievales mejor conservados
                 de la comarca. Documentado desde 1408, aprovechaba el caudal del Rec de Montbrull para
                 accionar dos muelas de piedra caliza. El edificio de planta rectangular con cubierta de
                 losas y la balsa exterior con el canal de alimentación se conservan casi intactos. En 2015
                 se restauró la rueda de madera y se instaló un circuito interpretativo que explica el
                 proceso de molienda tradicional. Visitable los fines de semana de mayo a octubre.`,
            en: `Can Puig Flour Mill is one of the best-preserved medieval water mills in the region.
                 Documented since 1408, it harnessed the flow of the Rec de Montbrull to drive two limestone
                 millstones. The rectangular building with its stone slab roof and the external millpond with
                 its supply channel survive almost intact. In 2015 the wooden wheel was restored and an
                 interpretive trail was installed explaining the traditional milling process. Visitable
                 weekends from May to October.`,
        },
    },

    {
        id: 'pi-006',
        idZona: 'zona-moli',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 48.0, y: 62.0 },          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-006.jpg',
        nom: {
            ca: 'Font del Rec',
            es: 'Fuente del Rec',
            en: 'Rec Fountain',
        },
        any: 1723,
        estil: {
            ca: 'Barroc popular',
            es: 'Barroco popular',
            en: 'Vernacular Baroque',
        },
        descripcio: {
            ca: `La Font del Rec és una de les fonts públiques més antigues de Montbrull en ús continuat.
                 Construïda el 1723 per sufragi popular, presenta un frontó triangular amb la data gravada
                 i quatre brolladors de ferro forjat en forma de cap de lleó. Enmig del Barri del Molí,
                 durant segles va ser el punt d'abastiment d'aigua de la zona nord del poble. La llegenda
                 local diu que beure'n l'aigua el dia de Sant Joan garanteix un any de bona salut.`,
            es: `La Fuente del Rec es una de las fuentes públicas más antiguas de Montbrull en uso continuo.
                 Construida en 1723 por sufragio popular, presenta un frontón triangular con la fecha grabada
                 y cuatro surtidores de hierro forjado en forma de cabeza de león. En el corazón del Barrio
                 del Molino, durante siglos fue el punto de abastecimiento de agua de la zona norte del
                 pueblo. La leyenda local dice que beber su agua el día de Sant Joan garantiza un año de
                 buena salud.`,
            en: `The Rec Fountain is one of Montbrull's oldest public fountains in continuous use. Built in
                 1723 through public subscription, it features a triangular pediment with the date inscribed
                 and four wrought-iron lion's-head spouts. At the heart of the Mill Quarter, it served for
                 centuries as the water supply point for the northern part of the village. Local legend holds
                 that drinking its water on St John's Day (24 June) guarantees a healthy year ahead.`,
        },
    },


    // ============================================================
    // ZONA: Zona del Castell (zona-castell)
    // Mapa de zona: imatges/mapes-zones/zona-castell.svg
    // Zona en pendent, al turó que domina el poble.
    // PI-007 a la cima (castell), PI-008 a mig pendent (mirador).
    // ============================================================

    {
        id: 'pi-007',
        idZona: 'zona-castell',
        estrelles: 3,                                // Imprescindible
        coordenades: { x: 42.0, y: 25.0 },          // Cima del turó, zona nord-central
        imatge: 'imatges/punts-interes/pi-007.jpg',
        nom: {
            ca: 'Ruïnes del Castell de Montbrull',
            es: 'Ruinas del Castillo de Montbrull',
            en: 'Montbrull Castle Ruins',
        },
        any: 1163,
        estil: {
            ca: 'Romànic militar',
            es: 'Románico militar',
            en: 'Military Romanesque',
        },
        descripcio: {
            ca: `Les ruïnes del Castell de Montbrull constitueixen el primer nucli documentat del municipi,
                 esmentat per primera vegada a la carta de població de 1163. De la fortalesa original es
                 conserven la torre de l'homenatge de planta circular —amb murs d'1,8 metres de gruix—,
                 tres panys de muralla i les restes de la cisterna subterrània. Les excavacions arqueològiques
                 dels anys 1994-1998 van posar al descobert ceràmica andalusina del segle XI, indici d'una
                 ocupació anterior a la conquesta cristiana. Des del terrat de la torre, en dies clars, es
                 divisa el Montseny i el Pirineu oriental.`,
            es: `Las ruinas del Castillo de Montbrull constituyen el primer núcleo documentado del municipio,
                 mencionado por primera vez en la carta de población de 1163. De la fortaleza original se
                 conservan la torre del homenaje de planta circular —con muros de 1,8 metros de grosor—,
                 tres lienzos de muralla y los restos de la cisterna subterránea. Las excavaciones
                 arqueológicas de 1994-1998 sacaron a la luz cerámica andalusí del siglo XI, indicio de
                 una ocupación anterior a la conquista cristiana. Desde la azotea de la torre, en días
                 claros, se divisa el Montseny y el Pirineo oriental.`,
            en: `The ruins of Montbrull Castle are the earliest documented nucleus of the municipality,
                 first mentioned in the 1163 settlement charter. Surviving from the original fortress are
                 the circular keep — with walls 1.8 metres thick —, three curtain wall sections, and the
                 remains of the underground cistern. Archaeological excavations in 1994–1998 uncovered
                 11th-century Andalusian ceramics, evidence of pre-Christian occupation. From the top
                 of the keep, on clear days, both Montseny and the eastern Pyrenees are visible.`,
        },
    },

    {
        id: 'pi-008',
        idZona: 'zona-castell',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 28.0, y: 65.0 },          // Mig pendent, accés sud al castell
        imatge: 'imatges/punts-interes/pi-008.jpg',
        nom: {
            ca: 'Mirador de la Vinya Vella',
            es: 'Mirador de la Viña Vieja',
            en: 'Old Vineyard Viewpoint',
        },
        any: 1998,                                   // Any de construcció del mirador actual
        estil: {
            ca: 'Equipament contemporani',
            es: 'Equipamiento contemporáneo',
            en: 'Contemporary facility',
        },
        descripcio: {
            ca: `El Mirador de la Vinya Vella es troba a mig camí de la pujada al castell, en una terrassa
                 natural que domina el conjunt del nucli antic i les vinyes de la plana. La plataforma
                 d'obra vista i l'entramat de fusta, construïts l'any 1998 a partir del projecte de
                 l'arquitecte local Pau Grau, es van dissenyar per integrar-se en el paisatge sense
                 pertorbar la vista del castell. Disposa de taules de lectura del paisatge amb
                 identificació dels principals elements del territori. Accessible des de la Ruta de
                 les Vinyes i des de la Ruta del Castell.`,
            es: `El Mirador de la Viña Vieja se encuentra a mitad de camino de la subida al castillo,
                 en una terraza natural que domina el conjunto del casco antiguo y los viñedos de la
                 llanura. La plataforma de obra vista y el entramado de madera, construidos en 1998 a
                 partir del proyecto del arquitecto local Pau Grau, se diseñaron para integrarse en el
                 paisaje sin perturbar la vista del castillo. Dispone de mesas de lectura del paisaje con
                 identificación de los principales elementos del territorio. Accesible desde la Ruta de
                 los Viñedos y desde la Ruta del Castillo.`,
            en: `The Old Vineyard Viewpoint stands halfway up to the castle, on a natural terrace
                 overlooking the old town and the vineyards of the plain below. The exposed-brick platform
                 and wooden framework, built in 1998 to a design by local architect Pau Grau, were
                 conceived to blend into the landscape without obstructing views of the castle. It features
                 landscape-reading panels identifying the main elements of the surrounding territory.
                 Accessible from both the Vineyard Route and the Castle Route.`,
        },
    },


    // ============================================================
    // ZONA: Zona de les Vinyes (zona-vinyes)
    // Mapa de zona: imatges/mapes-zones/zona-vinyes.svg
    // Zona plana al peu del turó, amb la cooperativa i el celler.
    // PI-009 a l'est (cooperativa), PI-010 a l'oest (celler).
    // ============================================================

    {
        id: 'pi-009',
        idZona: 'zona-vinyes',
        estrelles: 2,                                // Destacat
        coordenades: { x: 68.0, y: 42.0 },          // Est de la zona: entrada principal
        imatge: 'imatges/punts-interes/pi-009.jpg',
        nom: {
            ca: 'Cooperativa Agrícola de Montbrull',
            es: 'Cooperativa Agrícola de Montbrull',
            en: 'Montbrull Agricultural Cooperative',
        },
        any: 1913,
        estil: {
            ca: 'Modernisme industrial',
            es: 'Modernismo industrial',
            en: 'Industrial Modernisme',
        },
        descripcio: {
            ca: `Fundada el 1913 per 34 pagesos associats, la Cooperativa Agrícola de Montbrull és la
                 institució viva més antiga del municipi. L'edifici principal, projectat per un deixeble
                 de Puig i Cadafalch i inaugurat el 1917, destaca per la façana de maó vist amb ornaments
                 de ceràmica daurada i les grans finestres d'arc parabòlic que inunden de llum la nau
                 de vinificació. Avui elabora set referències de vi DO Catalunya i organitza visites
                 guiades amb tast els dissabtes al matí entre abril i novembre.`,
            es: `Fundada en 1913 por 34 payeses asociados, la Cooperativa Agrícola de Montbrull es la
                 institución viva más antigua del municipio. El edificio principal, proyectado por un
                 discípulo de Puig i Cadafalch e inaugurado en 1917, destaca por la fachada de ladrillo
                 visto con ornamentos de cerámica dorada y los grandes ventanales de arco parabólico que
                 inundan de luz la nave de vinificación. Hoy elabora siete referencias de vino DO
                 Catalunya y organiza visitas guiadas con cata los sábados por la mañana entre abril
                 y noviembre.`,
            en: `Founded in 1913 by 34 associated farmers, the Montbrull Agricultural Cooperative is the
                 oldest active institution in the municipality. The main building, designed by a disciple
                 of Puig i Cadafalch and inaugurated in 1917, is notable for its exposed brick façade with
                 gilded ceramic ornaments and the large parabolic-arch windows that flood the winery hall
                 with light. Today it produces seven DO Catalunya wines and runs guided tours with tastings
                 every Saturday morning from April to November.`,
        },
    },

    {
        id: 'pi-010',
        idZona: 'zona-vinyes',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 28.0, y: 68.0 },          // Oest de la zona: mas aïllat
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Celler Modernista de Can Marfà',
            es: 'Bodega Modernista de Can Marfà',
            en: 'Can Marfà Modernista Winery',
        },
        any: 1904,
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Modernisme',
        },
        descripcio: {
            ca: `El Celler de Can Marfà és un dels escassos cellers particulars modernistes conservats
                 a la comarca. Construït el 1904 per encàrrec de la família Marfà, combina elements
                 neogòtics —els arcs apuntats de la façana nord— amb la racionalitat funcional pròpia de
                 l'arquitectura vitivinícola de l'època. L'interior manté les bótes de roure originals
                 i la premsa de viga de fusta del segle XIX. Visitable prèvia reserva a través de
                 l'Oficina de Turisme de Montbrull. El mas adjacent és residència privada i no és
                 accessible al públic.`,
            es: `La Bodega de Can Marfà es uno de los escasos lagares particulares modernistas conservados
                 en la comarca. Construido en 1904 por encargo de la familia Marfà, combina elementos
                 neogóticos —los arcos apuntados de la fachada norte— con la racionalidad funcional propia
                 de la arquitectura vitivinícola de la época. El interior mantiene las barricas de roble
                 originales y la prensa de viga de madera del siglo XIX. Visitable previa reserva a través
                 de la Oficina de Turismo de Montbrull. El mas adyacente es residencia privada y no es
                 accesible al público.`,
            en: `Can Marfà Winery is one of the rare privately-owned Modernista wineries still intact in
                 the region. Built in 1904 for the Marfà family, it blends Neo-Gothic elements — the
                 pointed arches on the north façade — with the functional rationality typical of wine
                 architecture of the period. The interior retains the original oak barrels and a 19th-century
                 wooden beam press. Visits by prior booking through the Montbrull Tourist Office. The
                 adjacent farmhouse is a private residence and is not open to the public.`,
        },
    },


];

// ============================================================
// DADES: Punts d'interès de Montbrull
// ============================================================
// SISTEMA DE COORDENADES
//
// Les coordenades x/y situen el marcador sobre la imatge del mapa
// DE LA ZONA a la qual pertany el punt (no sobre el mapa principal).
//
//   x → sempre de 0 a 100          (percentatge de l'amplada)
//   y → de 0 a `alcadaViewBox`     (valor definit per a cada zona
//                                   a dades/zones.js)
//
// ATENCIÓ: y NO arriba a 100. Amb una imatge apaïsada de 1351×853,
// alcadaViewBox val 63.14, així que y ha d'estar entre 0 i 63.14.
// Un valor de y més gran deixaria el marcador fora de la imatge.
//
// Fes servir eina-coordenades.html en mode "Punt": carrega-hi la
// imatge de la zona, clica sobre el monument i copia el resultat.
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
 * @property {(number|string)} [any]  - Opcional. Any de construcció (p. ex. 1342)
 *                                       o període en text lliure (p. ex. 'S. XIX',
 *                                       'segle XII', 'c. 1400'). Si s'omet, la
 *                                       fila "Any" no es mostra a la fitxa.
 * @property {{ca:string, es:string, en:string}} estil      - Estil arquitectònic en els 3 idiomes
 * @property {{ca:string, es:string, en:string}} descripcio - Descripció en els 3 idiomes
 */

/** @type {PuntInteres[]} */
const PUNTS_INTERES = [


    // ============================================================
    // ZONA: Centre Plaça Vila (zona-vila)
    // Mapa de zona: imatges/mapes-zones/zona-vila.svg
    // Els PIs es distribueixen per les quatre subàrees naturals
    // ============================================================

    {
        id: 'pi-001',
        idZona: 'zona-vila',
        estrelles: 2,                                // Imprescindible
        coordenades: {  x:47 ,  y: 31 },          // Àrea nord: la nau de l'església domina
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
        any: 'S.XVII',
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
        any: 1883,
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Modernisme',
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
        coordenades: { x:  46.1,   y:  48 },          // Àrea sud: carrer Major
        imatge: 'imatges/punts-interes/pi-004.jpg',
        nom: {
            ca: 'Llinda de Can Mundet',
            es: 'Llinda de Can Mundet',
            en: 'Llinda de Can Mundet',
        },
        any: 'S. XIV',
        estil: {
            ca: 'Gòtic',
            es: 'Gótico',
            en: 'Gotic',
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

    {
        id: 'pi-005',
        idZona: 'zona-vila',
        estrelles: 1,                                // Destacat
        coordenades: { x:  34.8,   y:  48 },          // Nord de la zona: molí prop del rec
        imatge: 'imatges/punts-interes/pi-005.jpg',
        nom: {
            ca: 'Ca Espinet',
            es: 'Ca Espinet',
            en: 'Ca Espinet',
        },
        any: 'S.XIX',
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Modernisme',
        },
        descripcio: {
            ca: `Ca l'Espinet. Plaça de la Vila 20.
			Edifici estret, d'una sola crugia, que s'aboca a la plaça de la Vila amb una façana d'estil romàntic, 
			emmarcada amb dues falses pilastres d'ordre gegant i coronada amb una cornisa decorada damunt la qual hi ha una barana d'obra entre dos gerros.
			Les llindes dels dos primers pisos estan ornamentades amb relleus vegetals i figures femenines.
			El parament cec està acabat amb un fals encoixinat.
`,
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
        idZona: 'zona-vila',
        estrelles: 1,                                // Recomanat
        coordenades: { x:    29 ,  y:  32.1},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-006.jpg',
        nom: {
            ca: 'Can Guifre',
            es: 'Can Guifre',
            en: 'Can Guifre',
        },
        any: 1930,
        estil: {
            ca: 'Eclèctic',
            es: 'Eclectico',
            en: 'Eclectico',
        },
        descripcio: {
            ca: `Can Guifre. Plaça de la Vila 13.
			     Construït al segon terç del S.XIX és la única csa de la plaça amb .
				 La particularitat és que si us acosteu a la porta sota la porchada podreu veure la singularitat
				 amb que es podia resoldre la absència de porters automàtics. 
				 Nota, mireu al sostre!`,
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
	
	    {
        id: 'pi-007',
        idZona: 'zona-vila',
        estrelles: 1,                                // Recomanat
        coordenades: { x:    20 ,  y:  38},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-007.jpg',
        nom: {
            ca: 'Can Junquera',
            es: 'Can Junquera',
            en: 'Can Junquera',
        },
        any: 1930,
        estil: {
            ca: 'Eclèctic',
            es: 'Eclectico',
            en: 'Eclectico',
        },
        descripcio: {
            ca: `Can Junquera. Carrer Narcís Junquera 1.
			     Edifici entre mitgeres de l'any 1895, d'estil eclèctic. Consta de planta baixa i dos pisos. 
				 El pis principal amb balcó corregut i el pis superior amb tres balcons individuals. 
				 L'ornamentació destaca pels frisos esgrafiats de color vermell i els guardapols del pis principal. 
				 Va ser la casa de la família Junquera, de la que era l'alcalde perpetu durant el Franquisme.
`,
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
	
	 {
        id: 'pi-008',
        idZona: 'zona-vila',
        estrelles: 1,                                // Recomanat
        coordenades: { x:    8 ,  y:  16},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-008.jpg',
        nom: {
            ca: 'Can Soler',
            es: 'Can Soler',
            en: 'Can Soler',
        },
        any: 1930,
        estil: {
            ca: 'Eclèctic',
            es: 'Eclectico',
            en: 'Eclectico',
        },
        descripcio: {
            ca: `Can Soler. Carrer Narcís Junquera 8.
			     Edifici entre mitgeres de planta baixa i dos pisos. El pis principal té un balcó corregut mentre que el superior té tres balcons individuals, 
				 tots ells amb la barana bombada. L'ornamentació dels dos pisos està basada en uns plafons i un fals encoixinat que juguen amb els colors blanc i vermell, 
				 invertits en un pis i en l'altre.
`,
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
	
	 {
        id: 'pi-009',
        idZona: 'zona-vila',
        estrelles: 1,                                // Recomanat
        coordenades: { x:    62 ,  y:  36},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-009.jpg',
        nom: {
            ca: 'Ajuntament',
            es: 'Ayuntamiento',
            en: 'Council City',
        },
        any: 1930,
        estil: {
            ca: 'Noucentisme',
            es: 'Noucentismo',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Ajuntament. Plaça de la Vila 2.
			     Edifici Noucentista molt simplista. Destaca l'esgrafiat central amb l'escut del poble
`,
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
    // ZONA: CARRER DE LA BARROCA zona-barroca
    // Mapa de zona: imatges/mapes-zones/zona-vila.svg
    // Els PIs es distribueixen per les quatre subàrees naturals
    // ============================================================
	 {
        id: 'pi-010',
        idZona: 'zona-barroca',
        estrelles: 1,                                // Recomanat
        coordenades: { x:    64 ,  y:  18},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'La Torre',
            es: 'La Torre',
            en: 'La Torre',
        },
        any: 1925,
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `La Torre. Carrer de la Barroca 1. 
			
			     Casa d'estiueig formada per diferents cossos i terrasses, dels quals el més destacat, i que ha donat nom a la casa, 
				 és una torratxa mirador, de planta quadrada, circumdada per un balcó i amb coronament piramidal.
`,
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
	
{
        id: 'pi-011',
        idZona: 'zona-barroca',
        estrelles: 1,                                // Recomanat
        coordenades: { x:    36 ,  y:  26},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Can Pujades',
            es: 'Can Pujades',
            en: 'Can Pujades',
        },
        any: 'Anys 20',
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Can Pujades. Carrer de la Barroca 5. 
			
			     Edifici construït cap a la darreria dels anys vint del segle passat, d'una sola planta, amb pati al davant. La façana, coronada amb una balustrada de tres trams,
				 presenta una destacada ornamentació al voltant de les tres obertures, on les llindes mostren uns relleus de caire vegetal de gust modernista.
				 També estan decorades les mènsules que sostenen la cornisa.
`,
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
    // ZONA: Zona del Monestir (zona-monestir)
    // Mapa de zona: imatges/mapes-zones/zona-monestir.jpg
    // Zona historica
    // ============================================================

	 {
        id: 'pi-012',
        idZona: 'zona-monestir',
        estrelles: 2,                                // Recomanat
        coordenades: { x: 50, y: 6},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Absis Monestir',
            es: 'Abis del Monasterio',
            en: 'Monastery Absis',
        },
        any: "S.XII",
        estil: {
            ca: 'Romànic',
            es: 'Romanico',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Absis del Monestir.  Carrer Jacint Verdaguer.
			
			     La capçalera de Santa Maria, restaurada modernament, és la part que conserva de forma més íntegra l'aspecte original del temple romànic. 
				 Inicialment tenia un absis central flanquejat per dues absidioles. 
				 Posteriorment s'hi va afegir un altre absis, amb un tipus de carreuat més gran i regular. Tots quatre presenten arcuacions i lesenes de tipus llombard.
`,
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
	
	
	 {
        id: 'pi-013',
        idZona: 'zona-monestir',
        estrelles: 2,                                // Recomanat
        coordenades: { x: 45, y: 51},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Can Món',
            es: 'Can Món',
            en: 'Can Món',
        },
        any: "S.XIV",
        estil: {
            ca: 'Romànic',
            es: 'Romanico',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Can Món.  Carrer Narcís Junquera / Plaça del Monestir.
			
			     Interessant edifici format per dos cossos en L, un dels quals travessa el carrer Narcís Junquera deixant obert un pas inferior que clou la plaça del Monestir.
				 La casa ocupa una part de l'antiga casa de l'Abat. La façana que dóna a la plaça, del segle XVI, mostra un balcó que conserva el guardapols motllurat 
				 ornamentat amb garlandes i detalls florals. És remarcable la façana de l'antiga capella, amb pilastres estriades i frontó triangular, d'estil renaixentista. 
				 La façana que dóna al carrer Junquera és molt posterior, de la fi del segle XIX, d'estil historicista.
`,
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

 {
        id: 'pi-014',
        idZona: 'zona-monestir',
        estrelles: 2,                                // Recomanat
        coordenades: { x: 55, y: 45},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Can Boles',
            es: 'Can Boles',
            en: 'Can Boles',
        },
        any: "S.XIV",
        estil: {
            ca: 'Romànic',
            es: 'Romanico',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Can Boles.  Plaça del Monestir 5.
			
			     Edifici del segle XVI, amb modificacions posteriors (hi ha llindes amb dates del segle XVIII),
				 va ser alçat sobre l'antic palau de l'Abat i una part del desaparegut claustre. 
				 És un gran casal de planta baixa i dos pisos, amb la façana principal porticada.
				 Les obertures i les cantoneres estan fetes amb carreus de pedra picada. Damunt d'un balcó llueix un vell escut heràldic.
`,
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
	
	 {
        id: 'pi-015',
        idZona: 'zona-monestir',
        estrelles: 2,                                // Recomanat
        coordenades: { x: 66, y: 36},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Creu de terme',
            es: 'Creu de terme',
            en: 'Creu de terme',
        },
        any: "S.XIX",
        estil: {
            ca: 'Neoromànic',
            es: 'Neoromanico',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Creu de terme.  Plaça del Monestir s/n.
			
			     A la plaça del Monestir hi ha una fidel reproducció de la creu de terme que hi havia a l'entrada del poble, venint de Girona.
				 L'original està dipositada al Museu Diocesà de Girona.
				 La creu, molt ornamentada, presenta com és habitual el Crist crucificat a una cara i la Mare de Déu a l'altra la Mare de Déu, que ha perdut la part superior.
`,
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
	
	{
        id: 'pi-016',
        idZona: 'zona-monestir',
        estrelles: 2,                                // Recomanat
        coordenades: { x: 62, y: 22},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Can Terme',
            es: 'Can Terme',
            en: 'Can Terme',
        },
        any: "S.XIX",
        estil: {
            ca: 'Neoromànic',
            es: 'Neoromanico',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Can Terme.  Plaça del Monestir 2.
			
			     Edifici adossat al Monestir que antigament havia fet funcions de sagristia. Actualment acull el Museu Etnològic d'Amer. Molt reformat en època moderna (el cos travessat per una volta que dóna accés a la plaça és una construcció recent), 
				 conserva alguns elements antics, del segle XVII, especialment visibles en l'emmarcament d'algunes de les obertures. En una d'elles llegim clarament la data de 1662 i en una altra la de 1689.
`,
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
	
	{
        id: 'pi-017',
        idZona: 'zona-monestir',
        estrelles: 2,                                // Recomanat
        coordenades: { x: 40, y: 32},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Monestir',
            es: 'Monasterio',
            en: 'Monastery',
        },
        any: "S.XIX",
        estil: {
            ca: 'Neoromànic',
            es: 'Neoromanico',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Antic Monestir Santa Maria d'Amer.  Plaça del Monestir 2.
			
			     Monestir benedictí consagrat l'any 949 i que durant els segles següents,
				 fins al segle XIV, va gaudir de gran prosperitat. 
				 Els terratrèmols de 1427 i 1428 el van deixar molt malmès, s'esfondraren 
				 les voltes i el claustre i moltes dependències monàstiques van quedar destruïdes.
`,
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
	
		{
        id: 'pi-018',
        idZona: 'zona-monestir',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 10, y: 20},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Ca l-Espígol',
            es: 'Ca l-Espígol',
            en: 'Ca l-Espígol',
        },
        any: "S.XIX",
        estil: {
            ca: 'Neoromànic',
            es: 'Neoromanico',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Ca lEspigol.  Plaça del Monestir 17.
			
			     Edifici de tres plantes situat enfront del monestir. Conserva l'emmarcament de pedra de les cantoneres i de les obertures,
				 que són d'arc carpanell a la planta baixa i de llinda monolítica als pisos. La casa va ser molt reformada a començament del segle XX.
`,
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
	
	{
        id: 'pi-019',
        idZona: 'zona-monestir',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 75, y: 40},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Can Gasull',
            es: 'Can Gasull',
            en: 'Can Gasull',
        },
        any: "S.XIX",
        estil: {
            ca: 'Neoromànic',
            es: 'Neoromanico',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Can Gasull.  Plaça del Monestir, 3 / Carrer Sant Benet.
			
			    Correspon a un dels antics edificis del Monestir d'Amer, concretament era la infermeria, amb façana a la plaça i al carrer de Sant Benet. 
				Conserva alguna finestra antiga però les façanes estan molt deteriorades. La casa posseïa un dels finestrals renaixentistes més interessants de l'arquitectura civil catalana, 
				especialment pel seu valor iconogràfic, amb temàtica vinculada a les epidèmies de pesta.
				Lamentablement, aquesta finestra i una altra de tipus conopial, van ser venudes per l'antic propietari i, segons se'ns ha informat,
				actualment es troben a la seu de l'Opus Dei a Torreciudad.
`,
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

{
        id: 'pi-020',
        idZona: 'zona-monestir',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 61, y: 40},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Placa Remença',
            es: 'Placa Remença',
            en: 'Placa Remença',
        },
        any: "S.XX",
        estil: {
            ca: 'Neoromànic',
            es: 'Neoromanico',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Placa de l'arbitratge Remença.  Colocada a Can Boles.
			
			    Ferran II d'Aragó va firmar el 1486 la sentència arbitral de Guadalupe amb la que es posava fi a la segona guerra remença.
				Aquí Amer un any abans s'havia pactat la fi de les hostilitats acceptant els remençes que acatarien el dictàment del rei.
				Creiem que es va poder firmar a Amer per que l'Abat ja havia renunciat als mals usos.
				Si seguiu el viatge per la Garrotxa podreu seguir totes les localitzacions de les Guerres Remences.
`,
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
    // ZONA: Zona del Pedreguet (zona-pedreguet)
    // Mapa de zona: imatges/mapes-zones/zona-pedreguet.jpg
    // Zona historica
    // ============================================================
	{
        id: 'pi-021',
        idZona: 'zona-pedreguet',
        estrelles: 3,                                // Recomanat
        coordenades: { x: 41, y: 10},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Carrer Girona',
            es: 'Calle Girona',
            en: 'Girona Street',
        },
        any: "S.XVII",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Arquitectura popular',
        },
        descripcio: {
            ca: `Carrer Girona.  
			
			    El carrer Girona és un carrer llarg i estret originat a l'edat mitjana i que articula el barri del
				Pedreguet fins arribar a la capella de la Mare de Déu de la Pietat. 
				
				És un carrer molt interessant 
				que ha preservat la seva estructura antiga i molts dels seus seus edificis, malgrat les reformes modernes,
				han conservat els elements antics de més qualitat, com les llindes de les portes i finestres,
				moltes de les quals ens donen notícia dels seus antics propietaris i de l'any en què es feren les reformes, entre els segles XVII, XVIII i XIX.
				
				Són moltes les cases d'Amer que conserven inalterades les portes i finestres originals.
				A les llindes de moltes d'elles podem llegir-hi el nom del propietari i l'any de construcció o reforma de la casa. 
 
				La fesomia particular del carrer, sense ni un carrer lateral, es deu que es van anar construint les cases 
				al llarg de la antiga carretera que duia a Girona. Tothom volia estar el més aprop possible de la plaça i el Monestir,
				i per tant cada nova casa es feia paret amb paret amb la última sense que ningú penses a deixar un carrer enmig.
`,
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

	{
        id: 'pi-022',
        idZona: 'zona-pedreguet',
        estrelles: 2,                                // Recomanat
        coordenades: { x: 50, y: 15},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Can La',
            es: 'Can La',
            en: 'Can La',
        },
        any: "S.XVIII",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Arquitectura popular',
        },
        descripcio: {
            ca: `Can La. Carrer Girona 2.  
			
			    És una de les cases més interessants del carrer Girona però es troba en un estat de conservació deplorable.
				Hi destaca el seu portal adovellat, de punt rodó, i un finestral del segle XVI d'arc conopial amb la
				típica traceria gòtica i un guardapols motllurat recte.
`,
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
	
	{
        id: 'pi-022',
        idZona: 'zona-pedreguet',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 50, y: 20},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Can Plana',
            es: 'Can Plana',
            en: 'Can Plana',
        },
        any: "S.XVIII",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Arquitectura popular',
        },
        descripcio: {
            ca: `Can Plana. Carrer Girona 2.  
			
			    Edifici reformat modernament però que ha conservat alguns elements antics d'interès, com els muntants amb permòdols del portal o la finestra petita també amb llinda sobre permòdols.
				Pel que fa a la balconera cal destacar la llinda conopial de tradició gòtica envoltada amb un guardapols motllurat.
`,
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
	
		{
        id: 'pi-023',
        idZona: 'zona-pedreguet',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 84, y: 55},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Ermita',
            es: 'Ermita',
            en: 'Ermita',
        },
        any: "S.XVII",
        estil: {
            ca: 'Barroc',
            es: 'Barroco',
            en: 'Barroc',
        },
        descripcio: {
            ca: `Ermita Mare de Déu de la Pietat. Carrer Girona (al final).  
			
			    Capella situada als afores del poble. Va ser construïda al segle XVII, tot i que el seu origen pot ser més antic, i reformada al XIX. 
				Té planta rectangular coberta amb volta de canó i capçada amb un absis semicircular. Hi té adossat un cos que fa de sagristia. 
				Davant la porta hi ha un porxo per sota del qual passa el carrer. A la llinda de la porta hi ha la data de la reforma, 1844.
				
				Aquí és on es revestien els bisbes i abats en entrar a la vila, d'aquesta manera es mostraven sempre impoluts davant el poble encara que haguessin fet un llarg camí.

`,
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
	
		{
        id: 'pi-024',
        idZona: 'zona-pedreguet',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 44, y: 25},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-010.jpg',
        nom: {
            ca: 'Can Llepart',
            es: 'Can Llepart',
            en: 'Can Llepart',
        },
        any: "S.XVIII",
        estil: {
            ca: 'Neoromànic',
            es: 'Neoromanico',
            en: 'Newcentury',
        },
        descripcio: {
            ca: `Can Llepart. Plaça de la Pietat 1  
			
			   Edifici de grans dimensions construït al segle XVIII (1758), restaurat modernament.
			   La façana que dóna la carrer Abat Vilafreser hi ha una llinda on s'hi llegeix la data i el nom de Joseph Clusehs. 
			   De la façana de la plaça en destaca el balcó de fusta, protegit per un destacat voladís.

`,
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



];

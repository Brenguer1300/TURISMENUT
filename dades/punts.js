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
            fr: '[FR-TODO]',
        },
        any: 1980,
        estil: {
            ca: 'Eclèctic',
            es: 'Eclectico',
            en: 'Eclectic',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Plaça de la Vila o plaça Porxada. <br><br>
			
			És l'espai emblemàtic d'Amer i la segona de les places porticades més grans de Catalunya. <br>
			Les places porticades són molt típiques dels llocs on es feia mercat, aquesta no és excepció i se'n té constància des d'època medieval.
			Heu d'imaginar, l'autoritat marca la mida que ha de tenir la plaça. Com més gran més parades i més ingressos. A l'hora de construir una casa que doni a la plaça
			no pots ocupar l'espai reservat al mercat, igual que tampoc pots ocupar un carrer. Les arcades permeten guanyar uns metres
			molt preciats als pisos superiors, mentre que compleixes amb la norma d'urbanisme perquè la porta de la casa està on toca.<br>
			I els paradistes? Contents, més atapeïts sí, però contents que ara els dies de pluja no impedeixen el mercat. <br><br>
			
			La plaça va ser reurbanitzada l'any 1980, quan la dinàmica de tots els pobles era retirar les llambordes dels carrers per col·locar asfalt.
			Amer va voler treure pit dels seus carrers amb llambordes i així la reforma de la plaça va fer-se incorporant llambordes al punt central del poble.
			Com ja no se'n fabricaven es va fer una crida a ajuntaments de tot Catalunya per aconseguir-ne.
			Així la plaça actual està composta per les llambordes retirades dels carrers de molts pobles i 
			ciutats catalanes. <br><br>
			
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
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
            fr: '[FR-TODO]',
        },
        any: 'S.XVII',
        estil: {
            ca: 'Gòtic tardà',
            es: 'Gótico tardío',
            en: 'Late Gothic',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Panosa. Plaça de la Vila 11.<br><br>
				Té estructura d'edifici modern on destaca una finestra gòtica al segon pis. El més probable és que la compressin i no acaba d'encaixar al conjunt. <br>
			Però el finestral no en té cap culpa. La divisió en dos amb una columna ben fina els capitell de tipus vegetal.. bé nosaltres ens alegrem s'hagi conservat. <br>
			
			Si us fixeu en les arcades de sota (aquesta casa i les contigües), veureu que n'hi ha de mig punt i ogivals i algunes amb capitell i relleus com si d'un claustre de monestir es tractés.
			`,
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },

    {
        id: 'pi-003',
        idZona: 'zona-vila',
        estrelles: 2,                                // Destacat
        coordenades: {  x: 52.4 , y: 12.2},          // Àrea est: límit de la muralla
        imatge: 'imatges/punts-interes/pi-003.jpg',
        nom: {
            ca: 'Can Gultresa',
            es: 'Can Gultresa',
            en: 'Can Gultresa',
            fr: '[FR-TODO]',
        },
        any: 1883,
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Modernisme',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Gultresa. Plaça de la Vila 5.<br><br>
			Edifici de l'any 1883 notareu d'entrada que les arcades del porxo són més altes que les de la resta de cases.
			Quan s'acosta festa major podreu trobar els gegants de la vila esperant a sortir des d'aquí. <br>
			La façana té una base que imita un encoixinat de maons falsos. Totes les finestres tenen amples motllures al voltant i medallons a les llindes. <br>
			I la barana dels balcons? Una mà de pintura si.. però la decoració amb fulles de vinya, plataner i figuera l'havíeu vista?.  <br>
			A la llinda de la porta hi podem llegir el nom de Pelegrín Altarriba, l'esquerda que la travessa dona fe de les dificultats de fer una bona llinda.
			`,
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
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
            fr: '[FR-TODO]',
        },
        any: 'S. XIV',
        estil: {
            ca: 'Gòtic',
            es: 'Gótico',
            en: 'Gotic',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Llinda de Can Mundet. Plaça de la Vila 26.<br><br>
				
			Aquesta llinda de l'any 1775, té una decoració poc freqüent a base d'ovals i una figura central de caire vegetal. 
			La inscripció de la mateixa està feta amb lletres hebrees. <br>
			La trobareu a la finestra dels baixos del carrer de Can Ventura (mirant l'edifici a la dreta).  <br>
			Quan hagueu visitat la resta de llindes del poble torneu a revisar aquesta!
			`,
		
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
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
            fr: '[FR-TODO]',
        },
        any: 'S.XIX',
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Modernisme',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Ca l'Espinet. Plaça de la Vila 20.<br><br>
			Edifici estret amb una façana d'estil romàntic, 
			decorada amb dues falses pilastres i coronada amb una cornisa decorada, damunt la qual hi ha una barana d'obra entre dos gerros.
			Les llindes dels dos primers pisos estan ornamentades amb relleus vegetals i figures femenines. <br>
			Casa estreta no és motiu per no engalanar-la!
			
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
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
            fr: '[FR-TODO]',
        },
        any: 1930,
        estil: {
            ca: 'Eclèctic',
            es: 'Eclectico',
            en: 'Eclectico',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Guifre. Plaça de la Vila 13. <br><br>
			     Construït al segon terç del S.XIX és l'única casa de la plaça amb tribuna. Els vitralls de colors amb la seva sanefa i la barana del balcó tímidament decorada
				 ens deixen entreveure un propietari enamorat de casa seva.
				 <br>La singularitat de la casa la veureu si us poseu sota la seva porxada, us heu plantejat mai 
				 com era viure sense porters automàtics? <br>
				 <strong> Mireu al sostre!</strong>`,
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	    {
        id: 'pi-007',
        idZona: 'zona-vila',
        estrelles: 3,                                // Recomanat
        coordenades: { x:    20 ,  y:  38},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-007.jpg',
        nom: {
            ca: 'Can Junquera',
            es: 'Can Junquera',
            en: 'Can Junquera',
            fr: '[FR-TODO]',
        },
        any: 1930,
        estil: {
            ca: 'Eclèctic',
            es: 'Eclèctic',
            en: 'Eclectico',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Junquera. Carrer Narcís Junquera 1.<br><br>
			     Edifici de l'any 1895 d'estil eclèctic (que barreja estils i no ens mullem vaja).  <br>
				 Una simetria i unes proporcions molt treballades, l'ornamentació destaca pels frisos esgrafiats de color vermell i els guardapols del pis principal. 
				A la porta veureu un escut amb les inicials del propietari, una evolució moderna de les llindes dels segles anteriors. <br>				 
				 Va ser la casa de la família Junquera, d'on era l'alcalde perpetu durant el Franquisme.
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
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
            fr: '[FR-TODO]',
        },
        any: 1930,
        estil: {
            ca: 'Modernisme',
            es: 'Eclectico',
            en: 'Eclectico',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Soler. Carrer Narcís Junquera 8. <br><br>
			     Edifici molt ben conservat, tots els balcons amb la barana bombada, tan típica de l'època.
				 L'ornamentació està basada en uns plafons i un fals encoixinat que juguen amb els colors blanc i vermell, 
				 invertits entre el primer i el segon pis. <br>
				 Molt típic de l'època també és la falsa teulada que sobresurt a dalt de tot, una petita joia que a més protegeix la façana de la pluja.
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
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
            fr: '[FR-TODO]',
        },
        any: 'XIX',
        estil: {
            ca: 'Arquitectura Popular',
            es: 'Noucentismo',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Ajuntament. Plaça de la Vila 2. <br> <br>
			     Edifici sense pretensions, destaca l'esgrafiat central amb l'escut del poble. Molt senzill inclou el nom del poble i la senyera catalana representada aquí amb tres barres.<br>
				 Amer és un dels pocs pobles que no disposa d'escut oficial, creiem que haver estat una propietat eclesiàstica hi té a veure. <br>
				 Així com les finestres tenen llindes planes, tant a la porta com a la finestra del primer pis,
				 disposen de marcs d'inspiració arabesca.
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	{
        id: 'pi-025',
        idZona: 'zona-vila',
        estrelles: 1,                                // Recomanat
        coordenades: { x:    14 ,  y:  30},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-025.jpg',
        nom: {
            ca: 'Can Canesteve',
            es: 'Can Canesteve',
            en: 'Can Canesteve',
            fr: 'Can Canesteve',
        },
        any: 1885,
        estil: {
            ca: 'Arquitectura Popular',
            es: 'Noucentismo',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Canesteve. Carrer Narcís Junquera 5. <br><br>
			     Edifici de tres pisos sense pretensions. <br>Fixeu-vos com al 1885 encara cuejava l'ús de "llindes" amb el nom del propietari i l'any inscrits.
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
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
            fr: '[FR-TODO]',
        },
        any: 1925,
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `La Torre. Carrer de la Barroca 1.  <br><br>
			
			     Ni Amer vam escapar de la primeríssima moda de les cases d'estiueig! Aquesta formada per diferents cossos i terrasses, dels quals el més destacat, i que ha donat nom a la casa, 
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
{
        id: 'pi-011',
        idZona: 'zona-barroca',
        estrelles: 1,                                // Recomanat
        coordenades: { x:    36 ,  y:  26},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-011.jpg',
        nom: {
            ca: 'Can Pujades',
            es: 'Can Pujades',
            en: 'Can Pujades',
            fr: '[FR-TODO]',
        },
        any: 'Anys 20',
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Pujades. Carrer de la Barroca 5. <br><br>
			
			     Casa d'estiugeig petita amb tots els detalls possibles: façana coronada amb una barana de tres trams,
				 les finestres estan decorades com si d'un castell es tractés, a les llindes de cada una relleus de caire vegetal. <br>
				 Fins i tot estan decorades les mènsules que sostenen la cornisa de la barana del balco!
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
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
        estrelles: 3,                                // Recomanat
        coordenades: { x: 50, y: 6},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-012.jpg',
        nom: {
            ca: 'Absis Monestir',
            es: 'Abis del Monasterio',
            en: 'Monastery Absis',
            fr: '[FR-TODO]',
        },
        any: "S.XII",
        estil: {
            ca: 'Romànic',
            es: 'Romanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Absis del Monestir.  Carrer Jacint Verdaguer.  <br><br>
			
			     És la part que conserva de forma més íntegra l'aspecte original del temple romànic. <br>
				 Fixeu-vos en les petites finestres quasi sense decoració, 	únicament disposen just a sota la teulada d'aquestes petits arcs de pedres, en l'anomenada decoració llombarda, molt típica del romànic català primerenc. <br>
				 Avui dia estem acostumats a la pedra nua de les esglèsies i ermites, aixó ens indica que són antigues! Però al seu moment heu de pensar que estaven totes les pedres enguixades i pintades per destacar! <br>
				 A la construcció inicial es van fer tres absis, essent el quart un afegit posterior. <br> Sabríeu diferenciar pel tipus i color de la pedra quin és?
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	
	 {
        id: 'pi-013',
        idZona: 'zona-monestir',
        estrelles: 2,                                // Recomanat
        coordenades: { x: 45, y: 51},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-013.jpg',
        nom: {
            ca: 'Can Món',
            es: 'Can Món',
            en: 'Can Món',
            fr: '[FR-TODO]',
        },
        any: "S.XVI-XIX",
        estil: {
            ca: 'Renaixentista',
            es: 'Romanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Món.  Carrer Narcís Junquera / Plaça del Monestir. <br><br>
				
				 Qualsevol guia us parlaria d'edifici eclèctic, diguem que és la definició exacta d'urbanisme d'aprofitament. <br>
				 És un edifici format per dos cossos en L, el que fa de pont per entrar a la plaça i el que té aquesta portalada digna d'una església amb dues finestres obliques a sobre.<br>
				 Aquesta última és el que queda de l'antic palau de l'Abat, la portalada és d'estil renaixentista i un frontó triangular purament ornamental. <br>
				 Les ordres monàstiques podien fer vot de pobresa, però l'abat estava sempre per sobre i tenia el seu palau, servents, etc. Encaixa més pensar-hi com un senyor feudal que com un monjo. <br>
				 De l'edifici que fa de pont té a la banda del Monestir un balcó amb un guardapols fantàstic. <br> 
				 <br> Potser fins ara no impressiona, però creueu la casa per sota i a l'altra banda 
				 veureu una façana que manté un únic estil que vol simular les antigues cases del gòtic (és de finals del s. XIX), imagineu-vos com seria aquest casalot per dins! 
				 
			     
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },

 {
        id: 'pi-014',
        idZona: 'zona-monestir',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 55, y: 45},          // Centre de la zona: encreuament de carrers
        imatge: 'imatges/punts-interes/pi-014.jpg',
        nom: {
            ca: 'Can Boles',
            es: 'Can Boles',
            en: 'Can Boles',
            fr: '[FR-TODO]',
        },
        any: "S.XVI",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Romanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Boles.  Plaça del Monestir 5. <br><br>
			
			     Edifici del segle XVI, amb modificacions posteriors (hi ha llindes amb dates del segle XVIII), 
				 podríem dir que entre aquest edifici i l'església hauríem trobat el claustre del monestir. <br>
				 És un gran casal sense gaires pretensions arquitectòniques però sí que destaca el vell escut heràldic i les pedres tan treballades que envolten les finestres.
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	 {
        id: 'pi-015',
        idZona: 'zona-monestir',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 66, y: 36},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-015.jpg',
        nom: {
            ca: 'Creu de terme',
            es: 'Creu de terme',
            en: 'Creu de terme',
            fr: '[FR-TODO]',
        },
        any: "S.XIX",
        estil: {
            ca: 'Neoromànic',
            es: 'Neoromanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Creu de terme.  Plaça del Monestir s/n. <br><br>
			
			     Antigament l'hauríem trobada a l'entrada del terme municipal donant la benvinguda.<br>
				 L'original està dipositada al Museu Diocesà de Girona, aquí en podeu observar una reproducció força malmesa per les inclemències del temps. 
				 La creu, si hi poseu imaginació encara ho podreu veure, presenta el Crist crucificat a una cara i la Mare de Déu a l'altra.
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	{
        id: 'pi-016',
        idZona: 'zona-monestir',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 62, y: 22},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-016.jpg',
        nom: {
            ca: 'Can Terme',
            es: 'Can Terme',
            en: 'Can Terme',
            fr: '[FR-TODO]',
        },
        any: "S.XVII",
        estil: {
            ca: 'Arquitectura Popular',
            es: 'Neoromanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Terme.  Plaça del Monestir 2. <br><br>
			
			    Actualment acull el Museu Etnològic d'Amer. <br>
				Era l'antiga sacristia, un edifici molt reformat que conserva alguns elements antics del segle XVII. <br>
				Si us hi acosteu i l'examineu hauríeu de trobar un escut, una figura geomètrica de pedra i una llinda amb la data de 1662.
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	{
        id: 'pi-017',
        idZona: 'zona-monestir',
        estrelles: 3,                                // Recomanat
        coordenades: { x: 40, y: 32},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-017.jpg',
        nom: {
            ca: 'Monestir',
            es: 'Monasterio',
            en: 'Monastery',
            fr: '[FR-TODO]',
        },
        any: "S.IX",
        estil: {
            ca: 'Romànic',
            es: 'Neoromanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Antic Monestir Santa Maria d'Amer.  Plaça del Monestir. <br><br>
			
			     De l'antic monestir benedictí consagrat l'any 949 queda principalment l'actual església de Santa Maria, ha patit moltes reformes i algun terratrèmol també. 
				 Ara és fàcil mirar enrere i criticar reformes anteriors que van malmetre l'original, però cal tenir en compte que en cada moment s'han fet sempre les millors reformes en funció de les capacitats i també de l'estil i moda del moment.
				 Destaquem la forma imponent, les motllures de les portes i finestres i també el treball de ferro de les finestres.
				 Si teniu ocasió entreu-hi dins (horari de missa).<br> Amb el creixement de població es va prendre la decisió de modificar els pilars interiors romànics (amples i robustos) 
				 per permetre que des dels laterals es pogués seguir missa per quatre columnetes ornamentades que costa creure aguantin el mateix pes.  És realment una decisió insòlita que val la pena observar.
				 
				 
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
		{
        id: 'pi-018',
        idZona: 'zona-monestir',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 10, y: 20},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-018.jpg',
        nom: {
            ca: 'Ca l\'Espígol',
            es: 'Ca l\'Espígol',
            en: 'Ca l\'Espígol',
            fr: '[FR-TODO]',
        },
        any: "S.XVIII",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Neoromanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Ca l'Espígol.  Plaça del Monestir 17. <br><br>
			
			     La consideraríem una masia si no estigués en nucli urbà. Destaca l'emmarcament de pedra de la porta i de totes les finestres.
				 De pedra treballada, llindes a totes les finestres i mantenint una coherència del conjunt.<br>
				 La porta ens agrada especialment per la seva forma rodona.<br>
				 Amb tot, no consta cap inscripció!
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	{
        id: 'pi-019',
        idZona: 'zona-monestir',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 75, y: 40},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-019.jpg',
        nom: {
            ca: 'Can Gasull',
            es: 'Can Gasull',
            en: 'Can Gasull',
            fr: '[FR-TODO]',
        },
        any: "S.XVII",
        estil: {
            ca: 'Gòtic',
            es: 'Gotico',
            en: 'Gothic',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Gasull.  Plaça del Monestir, 3 / Carrer Sant Benet. <br><br>
			
			    Correspon a un dels antics edificis del Monestir d'Amer, concretament era la infermeria, amb façana a la plaça i al carrer de Sant Benet, si feu la volta veureu una placa de l'ajuntament que indica que als baixos s'usaven com a cavallerisses. 
				Ara és un casalot que conserva alguna finestra antiga, però hem vist fotografies de qui hi va viure i aquesta casa posseïa un dels finestrals renaixentistes més interessants de l'arquitectura civil catalana, 
				amb temàtica vinculada a les epidèmies de pesta.<br>
				Lamentablement, aquesta finestra i una altra de tipus conopial, van ser venudes per l'antic propietari. <br>
				Des del carrer Sant Benet veureu l'altra cara de la casa i encara conserva un finestral ben bonic (costa de trobar un punt amb visió!).
				
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },

{
        id: 'pi-020',
        idZona: 'zona-monestir',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 61, y: 40},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-020.jpg',
        nom: {
            ca: 'Placa Remença',
            es: 'Placa Remença',
            en: 'Placa Remença',
            fr: '[FR-TODO]',
        },
        any: "S.XX",
        estil: {
            ca: 'Neoromànic',
            es: 'Neoromanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Placa de l'arbitratge Remença.  Col·locada a un lateral de Can Boles. <br><br>
				
				Preparats per una parrafada històrica? Amer no va ser el centre de grans esdeveniments, i tampoc aquest ho és!, però ens fa il·lusió que fos escenari 
				de quan el poble menut va dir prou i va obligar els senyors feudals a negociar a la baixa els seus drets:<br>
			    Ferran II d'Aragó va firmar el 1486 la sentència arbitral de Guadalupe amb la que es posava fi a la segona guerra remença.
				Aquí Amer un any abans s'havia pactat la fi de les hostilitats acceptant els remences que acatarien el dictamen del rei.
				Creiem que es va poder firmar a Amer perquè l'Abat ja havia renunciat als mals usos. <br>
				Si continueu el viatge per la Garrotxa podreu resseguir totes les localitzacions de les Guerres Remences. <br>
				No oblideu buscar qui va ser Verntallat!
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
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
        imatge: 'imatges/punts-interes/pi-021.jpg',
        nom: {
            ca: 'Carrer Girona',
            es: 'Calle Girona',
            en: 'Girona Street',
            fr: '[FR-TODO]',
        },
        any: "S.XVII",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Arquitectura popular',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Carrer Girona.  <br><br>
			
			    El carrer Girona és un carrer llarg i estret originat a l'edat mitjana i que articula el barri del
				Pedreguet fins arribar a la capella de la Mare de Déu de la Pietat. <br>
				
				És un carrer molt interessant 
				que ha preservat la seva estructura antiga i molts dels seus edificis conserven elements destacables com les llindes de les portes i finestres.<br>
				La majoria de les cases originàriament eren d'una planta baixa dedicada al bestiar i paller i un primer pis d'habitacions. <br>
				En aquestes poden trobar el nom dels seus antics propietaris i de l'any en què es feren, en ocasions la casa i en d'altres la reforma, principalment entre els segles XVII-XIX.<br><br>
				
				 
				La fesomia particular del carrer, quasi sense sortida lateral, es deu que es van anar construint les cases 
				al llarg de l'antiga carretera que duia a Girona. Tothom volia estar el més a prop possible de la plaça i el Monestir,
				i per tant cada nova casa es feia paret amb paret amb l'última sense que ningú pensés a deixar un carrer enmig. <br><br>
				
				Us recomanem un passeig tranquil tant per aquest com pel superior carrer de l'Abat Vilafreser. <br>
				La juguesca consisteix a ser el primer a trobar i llegir la següent inscripció. <br>
				Penseu que per petita i estreta que fos una casa, l'orgull de fer-la o reformar-la portava a pagar un picapedrer per deixar-ne constància.<br>
				<strong>Alerta:</strong> no només trobareu inscripcions a les portes!		<br><br>
				<strong>No descuideu la canalla</strong>, per tranquil que sembli és un carrer amb trànsit rodat.
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },

	{
        id: 'pi-022',
        idZona: 'zona-pedreguet',
        estrelles: 2,                                // Recomanat
        coordenades: { x: 50, y: 15},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-022.jpg',
        nom: {
            ca: 'Can La',
            es: 'Can La',
            en: 'Can La',
            fr: '[FR-TODO]',
        },
        any: "S.XVII",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Arquitectura popular',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can La. Carrer Girona 8.   <br><br>
			
			    És una de les cases més interessants del carrer Girona, una masia en un entorn urbà. <br>
				No hi consta cap llinda amb el nom del propietari, però destaca el seu portal adovellat i un finestral digne d'un palau del segle XVI amb la
				típica traceria gòtica i un guardapols motllurat recte. <br>
				Aquí hi movien diners!
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	{
        id: 'pi-023',
        idZona: 'zona-pedreguet',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 52, y: 18},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-023.jpg',
        nom: {
            ca: 'Can Plana',
            es: 'Can Plana',
            en: 'Can Plana',
            fr: '[FR-TODO]',
        },
        any: "S.XVIII",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Arquitectura popular',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Plana. Carrer Girona 14.  <br><br>
			
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
		{
        id: 'pi-024',
        idZona: 'zona-pedreguet',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 84, y: 55},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-024.jpg',
        nom: {
            ca: 'Ermita de la Pietat',
            es: 'Ermita de la Pietat',
            en: 'Ermita dela Pietat',
            fr: '[FR-TODO]',
        },
        any: "S.XVII",
        estil: {
            ca: 'Barroc',
            es: 'Barroco',
            en: 'Barroc',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Ermita Mare de Déu de la Pietat. Carrer Girona (al final).  <br><br>
			
			    Capella situada als afores del poble. Va ser construïda al segle XVII, tot i que el seu origen pot ser més antic, i reformada al XIX. 
				Té planta rectangular coberta amb volta de canó i capçada amb un absis semicircular. Hi té adossat un cos que fa de sagristia. 
				Davant la porta hi ha un porxo per sota del qual passa el carrer. A la llinda de la porta hi ha la data de la reforma, 1844.
				
				Aquí és on es revestien els bisbes i abats en entrar a la vila, d'aquesta manera es mostraven sempre impol·luts davant el poble encara que haguessin fet un llarg camí.

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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
		{
        id: 'pi-026',
        idZona: 'zona-pedreguet',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 44, y: 25},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-026.jpg',
        nom: {
            ca: 'Can Llepart',
            es: 'Can Llepart',
            en: 'Can Llepart',
            fr: '[FR-TODO]',
        },
        any: "S.XVIII",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Neoromanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Llepart. Plaça de la Pietat 1  <br><br>
			
			   Edifici de grans dimensions construït al segle XVIII (1758), restaurat modernament.
			   La façana que dóna al carrer Abat Vilafreser hi ha una llinda on s'hi llegeix la data i el nom de Joseph Clusehs. 
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	{
        id: 'pi-027',
        idZona: 'zona-pedreguet',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 66, y: 24},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-027.jpg',
        nom: {
            ca: 'Can Cantí',
            es: 'Can Cantí',
            en: 'Can Cantí',
            fr: 'Can Cantí',
        },
        any: "1743",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Neoromanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Cantí. Carrer Girona 31. <br><br>
			
			   Exemple de llinda amb la inscripció més senzilla: 1743.<br>
			   Podria ser l'any de construcció o probablement de reforma de la casa.
			   Aviat farà 200 anys que es va fer aquesta pedra treballada i polida per aguantar el pes de la casa i permetre una porta més que decent. <br>
			   Compareu-la amb la de la finestra superior molt més estreta.

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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	{
        id: 'pi-028',
        idZona: 'zona-pedreguet',
        estrelles: 2,                                // Recomanat
        coordenades: { x: 68, y: 36},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-028.jpg',
        nom: {
            ca: 'Can Joanet Zai',
            es: 'Can Joanet Zai',
            en: 'Can Joanet Zai',
            fr: 'Can Joanet Zai',
        },
        any: "1755",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Neoromanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Joanet Zai. Carrer Girona 46. <br><br>
			
			   La llinda més decorada que veureu avui, fixeu-vos que les pedres que emmarquen la casa estan treballades per fer simular un marc. <br>
			   La serra, que envolta l'any i el nom del constructor, el martell i l'escaire ens indiquen que qui la va fer era mestre de cases. <br>
			   No se'ns acut millor reclam per als propers clients!

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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	{
        id: 'pi-029',
        idZona: 'zona-pedreguet',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 74, y: 44},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-029.jpg',
        nom: {
            ca: 'Girona 64',
            es: 'Girona 64',
            en: 'Girona 64',
            fr: 'Girona 64',
        },
        any: "1752",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Neoromanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Carrer Girona 64. <br><br>
			
			   Recordeu com de mala idea és fer una llinda de fusta? <br> Doncs aquesta de fusta ens porta la contrària des de mil set-cents… cinquanta-dos? <br>
			   Les de les finestres immediatament superiors també ho són i malgrat estar a la intempèrie ni es veuen bufades ni han començat a doblegar-se.<br>
			   Ens agradaria saber de quina fusta es tracta i us seguim recomanant que per casa vostra en poseu una de pedra (les de les altres dues finestres sí que les han hagut de canviar).
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	{
        id: 'pi-030',
        idZona: 'zona-pedreguet',
        estrelles: 3,                                // Recomanat
        coordenades: { x: 62, y: 28},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-030.jpg',
        nom: {
            ca: 'Can Cisteller de Dalt',
            es: 'Can Cisteller de Dalt',
            en: 'Can Cisteller de Dalt',
            fr: 'Can Cisteller de Dalt',
        },
        any: "1737",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Neoromanico',
            en: 'Newcentury',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Can Cisteller de Dalt. Carrer Girona 38. <br><br>
			
			   <strong>MIQUEL CUDINA ME FECIT. ANY 1737.</strong><br>
			   No tenim paraules per descriure com ens fa sentir aquesta inscripció. <br>
			   No només consta l'any, també està de forma totalment innecessària la paraula any abans de la data. <br>
			   Però el fet que sigui la casa qui es dirigeix a tu ens fascina. <br>
			   Si les cases poguessin acudir al registre a inscriure's elles mateixes, farien totes una inscripció així.
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	   // ============================================================
    // ZONA: Zona Rodalies Amer (zona-rodalia)
    // Mapa de zona: imatges/mapes-zones/zona-rodalia.jpg
    // Zona historica
    // ============================================================
	{
        id: 'pi-100',
        idZona: 'zona-rodalia',
        estrelles: 2,                                // Recomanat
        coordenades: { x: 4, y: 2},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-100.jpg',
        nom: {
            ca: 'Font Picant',
            es: 'Font Picant',
            en: 'Font Picant',
            fr: 'Font Picant',
        },
        any: "S.XVIII",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Arquitectura popular',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Font Picant.  Sortint del poble en direcció Olot veureu un trencall a l'esquerra amb un petit cartell groc: Fonter. <br> <br>
			
			    Al fons del petit polígon industrial de Fonter hi ha una àrea de lleure amb la Font Picant com a punt central. <br>
				Fa temps que hi convindria una inversió en manteniment. Trobareu que no és exactament el mateix sabor que la comercialitzada però a casa 
				sempre hem trobat més bona aquesta. Recomanem dur ampolla/garrafa d'aigua per omplir.<br>
				Tingueu en compte que des de la sequera no sempre raja aigua, si ho fa	podeu trobar cua!
 
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
		{
        id: 'pi-101',
        idZona: 'zona-rodalia',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 2, y: 24},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-101.jpg',
        nom: {
            ca: 'Font de la Teula',
            es: 'Font de la Teula',
            en: 'Font de la Teula',
            fr: 'Font de la Teula',
        },
        any: "S.XX",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Arquitectura popular',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Font de la Teula.  En una corba a meitat del camí a Sant Martí Sacalm  <br> <br>
			
			    Gairebé tothom s'atura en aquest lloc tan bonic, <br>
				a beure i reposar un xic. <br>
				Si ningú no hi deixés merda, <br>
				l'aigua seria més pura  <br>
				i l'herba força més verda. <br>
				L'ajuntament no es fa responsable de la potabilitat de la mateixa, però la trobem molt bona. <br>
				Si heu arribat fins aquí acabeu el camí fins a Sant Martí Sacalm, just sota el Far. <br>
				La composició de masies de pedra soltes fa rememorar el passat medieval.
 
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
		{
        id: 'pi-102',
        idZona: 'zona-rodalia',
        estrelles: 3,                                // Recomanat
        coordenades: { x: 40, y: 10},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-102.jpg',
        nom: {
            ca: 'Santa Brígida',
            es: 'Santa Brígida',
            en: 'Santa Brígida',
            fr: 'Santa Brígida',
        },
        any: "S.XVII",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Arquitectura popular',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Ermita de Santa Brígida. Camí de Santa Brígida: fins dalt de tot!  <br> <br>
			
			    Depenent del Monestir de Santa Maria d'Amer va ser reformada al s. XVII i restaurada el 2001 pel grup excursionista d'Amer. <br>
				Edifici senzill d'una sola nau amb volta de canó. És molt reverenciada pels amerencs i les vistes a la vall molt bones. <br>
				Arribar-hi és una mitja excursió on fareu cames! <br>
				Als nens els podeu entretenir a fer-los buscar petxines fossilitzades pel camí.
 
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
	{
        id: 'pi-104',
        idZona: 'zona-rodalia',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 95, y: 50},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-104.jpg',
        nom: {
            ca: 'Sant Climent',
            es: 'Sant Climent',
            en: 'Sant Climent',
            fr: 'Sant Climent',
        },
        any: "S.XVIII",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Arquitectura popular',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Ermita de Sant Climent d'Amer.  Camí de Sant Climent s/n <br> <br>
			
			    Antigament dedicada a Sant Climent i Sant Julià, documentada del 1066 va ser completament reformada al 1877.<br>
				Era el punt neuràlgic de totes les masies d'aquesta zona. <br>
				Ara us pot semblar desert, però hi havia prou veïns a la zona com per aixecar-se la seva pròpia ermita i evitar anar i tornar d'Amer per anar a missa. <br>
				Penseu que les masies eren habitades per la família (pares, fills i nets) en ocasions també la família extensa (germans i tiets) i sobretot tots els treballadors (bracers i jornalers) 
				que treballaven la terra i tenien cura del bestiar i s'hi estaven amb la família. <br>
				Fins al 1941 tots els batejos, casaments i defuncions es realitzaven aquí.
				
				Arquitectònicament és destacable la porta d'estil neoclàssic amb les dues columnes impostes a banda i banda.<br>
				Recomanem acostar-s'hi, principalment, per l'entorn agrari.
 
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },
	
{
        id: 'pi-105',
        idZona: 'zona-rodalia',
        estrelles: 1,                                // Recomanat
        coordenades: { x: 24, y: 35},          // Centre de la zona: encreuament de carrer
        imatge: 'imatges/punts-interes/pi-105.jpg',
        nom: {
            ca: 'Estació del Carrilet',
            es: 'Estación del Carrilet',
            en: 'Carrilet Station',
            fr: 'Stattion du Carrilet',
        },
        any: "1895",
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Arquitectura popular',
            fr: '[FR-TODO]',
        },
        descripcio: {
            ca: `Estació d'Amer del Carrilet.  Pujada de l'estació 15 <br> <br>
			
			    Molt ben restaurat, era la parada del tren que unia Olot i Sant Feliu de Guíxols, petit tren d'una única via: popularment el Carrilet. <br>
				Us imagineu una locumotora a vapor anunciant la seva arribada al poble?<br>
				Va ser una revolució en les comunicacions a la comarca, el seu tancament encara és lamentat pels que ho van viure. <br>
				El Carrilet va funcionar del 1895 fins 1966, avui via verda molt usada pels ciclistes.
				L'edifici és actualment dependències municipals.
 
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
            fr: `[FR-TODO]
                 <!-- Traducció pendent al francès -->`,
        },
    },



];

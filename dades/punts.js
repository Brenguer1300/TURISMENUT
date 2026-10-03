// ============================================================
// DADES: Punts d'interès d'Amer
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
//   zona-vila      → pi-001 … pi-009, pi-025                 (10 PIs)
//   zona-barroca   → pi-010, pi-011                          (2 PIs)
//   zona-monestir  → pi-012 … pi-020                         (9 PIs)
//   zona-pedreguet → pi-021 … pi-024, pi-026 … pi-030        (9 PIs)
//   zona-rodalia   → pi-100, pi-101, pi-102, pi-104, pi-105  (5 PIs)
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
 * @property {{ca:string, es:string, en:string, fr:string}} nom        - Nom en els 4 idiomes
 * @property {(number|string)} [any]  - Opcional. Any de construcció (p. ex. 1342)
 *                                       o període en text lliure (p. ex. 'S. XIX',
 *                                       'segle XII', 'c. 1400'). Si s'omet, la
 *                                       fila "Any" no es mostra a la fitxa.
 * @property {string} [direccio]      - Opcional. Adreça postal en text únic
 *                                       (p. ex. 'Plaça de la Vila, 11'). No es
 *                                       tradueix. Si és cadena buida o s'omet,
 *                                       la fila "Adreça" no es mostra a la fitxa.
 * @property {{ca:string, es:string, en:string, fr:string}} estil      - Estil arquitectònic en els 4 idiomes
 * @property {{ca:string, es:string, en:string, fr:string}} descripcio - Descripció en els 4 idiomes
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
            fr: 'Place de la Vila',
        },
        any: 1980,
        direccio: 'Plaça de la Vila',
        estil: {
            ca: 'Eclèctic',
            es: 'Ecléctico',
            en: 'Eclectic',
            fr: 'Éclectique',
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
            es: `Plaza de la Vila o plaza Porxada. <br><br>

			Es el espacio emblemático de Amer y la segunda plaza porticada más grande de Cataluña. <br>
			Las plazas porticadas son muy típicas de los lugares donde se celebraba mercado; esta no es una excepción y hay constancia de ello desde época medieval.
			Imaginad: la autoridad marca el tamaño que debe tener la plaza. Cuanto más grande, más puestos y más ingresos. A la hora de construir una casa que dé a la plaza
			no puedes ocupar el espacio reservado al mercado, igual que tampoco puedes ocupar una calle. Los porches permiten ganar unos metros
			muy preciados en los pisos superiores, mientras cumples con la normativa urbanística porque la puerta de la casa está donde toca.<br>
			¿Y los vendedores? Contentos: más apretados, sí, pero contentos de que ahora los días de lluvia no impidan el mercado. <br><br>

			La plaza fue reurbanizada en 1980, cuando la dinámica de todos los pueblos era retirar los adoquines de las calles para poner asfalto.
			Amer quiso presumir de sus calles adoquinadas y así la reforma de la plaza se hizo incorporando adoquines en el punto central del pueblo.
			Como ya no se fabricaban, se hizo un llamamiento a ayuntamientos de toda Cataluña para conseguirlos.
			Así, la plaza actual está compuesta por los adoquines retirados de las calles de muchos pueblos y
			ciudades catalanas. <br><br>

			En agradecimiento a cada pueblo que respondió al llamamiento se incluyó una placa identificativa.
			¿Creéis que encontraréis el vuestro?`,
            en: `Plaça de la Vila, also known as Plaça Porxada. <br><br>
			
			It is Amer's emblematic space and the second-largest arcaded square in Catalonia. <br>
			Arcaded squares are very typical of places where markets were held; this one is no exception, and there are records of it going back to medieval times.
			Just imagine: the authorities decided how big the square had to be. The bigger it was, the more stalls and the more income. When building a house facing the square
			you could not take over the space reserved for the market, just as you could not build on a street. The arcades let owners gain a few
			very precious metres on the upper floors, while still complying with the planning rules, because the front door stayed exactly where it should be.<br>
			And the stallholders? Happy: more crowded, yes, but happy that rainy days no longer stopped the market. <br><br>
			
			The square was redeveloped in 1980, at a time when every town was removing the cobblestones from its streets to lay asphalt.
			Amer wanted to show off its cobbled streets, so the square's renovation brought cobblestones into the very heart of the town.
			Since they were no longer being made, an appeal was sent to town councils all over Catalonia to get hold of some.
			So today's square is made of cobblestones taken up from the streets of many Catalan towns and 
			cities. <br><br>
			
			To thank every town that answered the appeal, an identifying plaque was added.
			Do you think you'll find yours?`,
            fr: `Place de la Vila, ou place Porxada. <br><br>

			C'est le lieu emblématique d'Amer et la deuxième plus grande place à arcades de Catalogne. <br>
			Les places à arcades sont très typiques des lieux où se tenait un marché ; celle-ci ne fait pas exception, et on en trouve la trace dès l'époque médiévale.
			Imaginez : c'est l'autorité qui fixe la taille de la place. Plus elle est grande, plus il y a d'étals et plus il y a de recettes. Quand on construit une maison donnant sur la place,
			on ne peut pas empiéter sur l'espace réservé au marché, pas plus qu'on ne peut empiéter sur une rue. Les arcades permettent de gagner quelques mètres
			très précieux aux étages supérieurs, tout en respectant la règle d'urbanisme, puisque la porte de la maison est exactement là où elle doit être.<br>
			Et les marchands ? Contents : plus serrés, certes, mais contents que les jours de pluie n'empêchent plus le marché. <br><br>

			La place a été réaménagée en 1980, à une époque où tous les villages retiraient les pavés de leurs rues pour poser de l'asphalte.
			Amer a voulu être fier de ses rues pavées, et la rénovation de la place a donc intégré des pavés au cœur même du village.
			Comme on n'en fabriquait plus, un appel a été lancé aux mairies de toute la Catalogne pour en obtenir.
			Ainsi, la place actuelle est faite des pavés retirés des rues de nombreux villages et
			villes de Catalogne. <br><br>

			Pour remercier chaque village ayant répondu à l'appel, une plaque d'identification a été posée.
			Pensez-vous trouver la vôtre ?`,
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
            fr: 'Can Panosa',
        },
        any: 'S.XVII',
        direccio: 'Plaça de la Vila 11',
        estil: {
            ca: 'Gòtic tardà',
            es: 'Gótico tardío',
            en: 'Late Gothic',
            fr: 'Gothique tardif',
        },
        descripcio: {
            ca: `Can Panosa<br><br>
				Té estructura d'edifici modern on destaca una finestra gòtica al segon pis. El més probable és que la compressin i no acaba d'encaixar al conjunt. <br>
			Però el finestral no en té cap culpa. La divisió en dos amb una columna ben fina els capitell de tipus vegetal.. bé nosaltres ens alegrem s'hagi conservat. <br>
			
			Si us fixeu en les arcades de sota (aquesta casa i les contigües), veureu que n'hi ha de mig punt i ogivals i algunes amb capitell i relleus com si d'un claustre de monestir es tractés.
			`,
            es: `Can Panosa<br><br>
			Tiene estructura de edificio moderno, donde destaca una ventana gótica en el segundo piso. Lo más probable es que la compraran y no acaba de encajar en el conjunto. <br>
			Pero el ventanal no tiene ninguna culpa. La división en dos con una columna muy fina, los capiteles de tipo vegetal... bueno, nosotros nos alegramos de que se haya conservado. <br>

			Si os fijáis en los porches de abajo (de esta casa y de las contiguas), veréis que los hay de medio punto y ojivales, y algunos con capitel y relieves, como si se tratara de un claustro de monasterio.
			`,
            en: `Can Panosa<br><br>
				It has the structure of a modern building, where a Gothic window on the second floor stands out. Most likely it was bought elsewhere, and it doesn't quite fit in with the rest. <br>
			But the window is not to blame. Split in two by a very slender column, with plant-motif capitals... well, we're glad it has survived. <br>
			
			If you look at the arcades below (on this house and the neighbouring ones), you'll see round arches and pointed ones, some with capitals and reliefs, as if they belonged to a monastery cloister.
			`,
            fr: `Can Panosa<br><br>
			Le bâtiment a une structure moderne, où se distingue une fenêtre gothique au deuxième étage. Elle a très probablement été achetée ailleurs, et elle ne s'intègre pas vraiment à l'ensemble. <br>
			Mais la fenêtre n'y est pour rien. Divisée en deux par une colonne très fine, avec des chapiteaux à motifs végétaux… bref, nous sommes ravis qu'elle ait été conservée. <br>

			Si vous observez les arcades en dessous (de cette maison et des maisons voisines), vous verrez des arcs en plein cintre et des arcs brisés, certains avec chapiteaux et reliefs, comme s'il s'agissait du cloître d'un monastère.
			`,
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
            fr: 'Can Gultresa',
        },
        any: 1883,
        direccio: 'Plaça de la Vila 5',
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Catalan Modernisme',
            fr: 'Modernisme catalan',
        },
        descripcio: {
            ca: `Can Gultresa<br><br>
			Edifici de l'any 1883 notareu d'entrada que les arcades del porxo són més altes que les de la resta de cases.
			Quan s'acosta festa major podreu trobar els gegants de la vila esperant a sortir des d'aquí. <br>
			La façana té una base que imita un encoixinat de maons falsos. Totes les finestres tenen amples motllures al voltant i medallons a les llindes. <br>
			I la barana dels balcons? Una mà de pintura si.. però la decoració amb fulles de vinya, plataner i figuera l'havíeu vista?.  <br>
			A la llinda de la porta hi podem llegir el nom de Pelegrín Altarriba, l'esquerda que la travessa dona fe de les dificultats de fer una bona llinda.
			`,
            es: `Can Gultresa<br><br>
			Edificio del año 1883: notaréis de entrada que los arcos del porche son más altos que los del resto de casas.
			Cuando se acerca la fiesta mayor podréis encontrar aquí a los gigantes de la villa esperando para salir. <br>
			La fachada tiene una base que imita un almohadillado de ladrillos falsos. Todas las ventanas tienen anchas molduras alrededor y medallones en los dinteles. <br>
			¿Y la barandilla de los balcones? Una mano de pintura sí... pero ¿habíais visto la decoración con hojas de vid, plátano e higuera?  <br>
			En el dintel de la puerta podemos leer el nombre de Pelegrín Altarriba; la grieta que lo atraviesa da fe de lo difícil que es hacer un buen dintel.
			`,
            en: `Can Gultresa<br><br>
			A building from 1883: you'll notice straight away that the arches of its portico are taller than those of the other houses.
			As the Festa Major (the town's main festival) approaches, you may find the town's giants here, waiting to come out. <br>
			The façade has a base that imitates rusticated masonry made of fake bricks. All the windows have wide mouldings around them and medallions on the lintels. <br>
			And the balcony railings? They could do with a lick of paint, yes... but had you noticed the decoration of vine, plane-tree and fig leaves?  <br>
			On the door lintel we can read the name Pelegrín Altarriba; the crack running across it bears witness to how hard it is to make a good lintel.
			`,
            fr: `Can Gultresa<br><br>
			Bâtiment de 1883 : vous remarquerez d'emblée que les arcs de son porche sont plus hauts que ceux des autres maisons.
			À l'approche de la fête patronale, vous pourrez y trouver les géants de la ville attendant de sortir. <br>
			La façade repose sur une base imitant un bossage de fausses briques. Toutes les fenêtres sont entourées de larges moulures et ornées de médaillons sur les linteaux. <br>
			Et la rambarde des balcons ? Un coup de peinture, oui… mais aviez-vous remarqué le décor de feuilles de vigne, de platane et de figuier ?  <br>
			Sur le linteau de la porte, on peut lire le nom de Pelegrín Altarriba ; la fissure qui le traverse témoigne de la difficulté de réaliser un bon linteau.
			`,
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
            es: 'Dintel de Can Mundet',
            en: 'Can Mundet Lintel',
            fr: 'Linteau de Can Mundet',
        },
        any: 'S. XIV',
        direccio: 'Plaça de la Vila 26',
        estil: {
            ca: 'Gòtic',
            es: 'Gótico',
            en: 'Gothic',
            fr: 'Gothique',
        },
        descripcio: {
            ca: `Llinda de Can Mundet<br><br>
				
			Aquesta llinda de l'any 1775, té una decoració poc freqüent a base d'ovals i una figura central de caire vegetal. 
			La inscripció de la mateixa està feta amb lletres hebrees. <br>
			La trobareu a la finestra dels baixos del carrer de Can Ventura (mirant l'edifici a la dreta).  <br>
			Quan hagueu visitat la resta de llindes del poble torneu a revisar aquesta!
			`,
		
            es: `Dintel de Can Mundet<br><br>

			Este dintel del año 1775 tiene una decoración poco frecuente a base de óvalos y una figura central de tipo vegetal.
			Su inscripción está hecha con letras hebreas. <br>
			Lo encontraréis en la ventana de la planta baja de la calle de Can Ventura (mirando el edificio, a la derecha).  <br>
			¡Cuando hayáis visitado el resto de dinteles del pueblo, volved a mirar este!
			`,
            en: `Lintel of Can Mundet<br><br>
				
			This lintel from 1775 has an unusual decoration of ovals and a central plant-like figure. 
			Its inscription is written in Hebrew letters. <br>
			You'll find it on the ground-floor window on Carrer de Can Ventura (to the right as you face the building).  <br>
			Once you've seen the rest of the town's lintels, come back and take another look at this one!
			`,
            fr: `Linteau de Can Mundet<br><br>

			Ce linteau de 1775 présente un décor peu courant, fait d'ovales et d'une figure centrale de type végétal.
			Son inscription est gravée en lettres hébraïques. <br>
			Vous le trouverez sur la fenêtre du rez-de-chaussée, rue de Can Ventura (à droite quand on regarde le bâtiment).  <br>
			Quand vous aurez vu les autres linteaux du village, revenez regarder celui-ci !
			`,
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
            fr: 'Ca Espinet',
        },
        any: 'S.XIX',
        direccio: 'Plaça de la Vila 20',
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Catalan Modernisme',
            fr: 'Modernisme catalan',
        },
        descripcio: {
            ca: `Ca l'Espinet<br><br>
			Edifici estret amb una façana d'estil romàntic, 
			decorada amb dues falses pilastres i coronada amb una cornisa decorada, damunt la qual hi ha una barana d'obra entre dos gerros.
			Les llindes dels dos primers pisos estan ornamentades amb relleus vegetals i figures femenines. <br>
			Casa estreta no és motiu per no engalanar-la!
			
`,
            es: `Ca l'Espinet<br><br>
			Edificio estrecho con una fachada de estilo romántico,
			decorada con dos falsas pilastras y coronada con una cornisa decorada, sobre la cual hay una barandilla de obra entre dos jarrones.
			Los dinteles de los dos primeros pisos están ornamentados con relieves vegetales y figuras femeninas. <br>
			¡Que una casa sea estrecha no es motivo para no engalanarla!

`,
            en: `Ca l'Espinet<br><br>
			A narrow building with a Romantic-style façade, 
			decorated with two false pilasters and crowned by an ornate cornice, topped by a masonry balustrade between two urns.
			The lintels of the first two floors are adorned with plant reliefs and female figures. <br>
			Being a narrow house is no reason not to dress it up!
			
`,
            fr: `Ca l'Espinet<br><br>
			Bâtiment étroit à la façade de style romantique,
			décorée de deux fausses pilastres et couronnée d'une corniche ornée, surmontée d'une balustrade maçonnée entre deux vases.
			Les linteaux des deux premiers étages sont ornés de reliefs végétaux et de figures féminines. <br>
			Une maison étroite, ce n'est pas une raison pour ne pas la parer !

`,
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
            fr: 'Can Guifre',
        },
        any: 1930,
        direccio: 'Plaça de la Vila 13',
        estil: {
            ca: 'Eclèctic',
            es: 'Ecléctico',
            en: 'Eclectic',
            fr: 'Éclectique',
        },
        descripcio: {
            ca: `Can Guifre <br>
			     Construït al segon terç del S.XIX és l'única casa de la plaça amb tribuna. Els vitralls de colors amb la seva sanefa i la barana del balcó tímidament decorada
				 ens deixen entreveure un propietari enamorat de casa seva.
				 <br>La singularitat de la casa la veureu si us poseu sota la seva porxada, us heu plantejat mai 
				 com era viure sense porters automàtics? <br>
				 <strong> Mireu al sostre!</strong>`,
            es: `Can Guifre <br>
			     Construida en el segundo tercio del s. XIX, es la única casa de la plaza con tribuna. Las vidrieras de colores con su cenefa y la barandilla del balcón tímidamente decorada
				 nos dejan entrever a un propietario enamorado de su casa.
				 <br>La singularidad de la casa la veréis si os ponéis bajo su porche: ¿os habéis planteado alguna vez
				 cómo era vivir sin porteros automáticos? <br>
				 <strong> ¡Mirad al techo!</strong>`,
            en: `Can Guifre <br>
			     Built in the second third of the 19th century, it is the only house on the square with a tribune (an enclosed bay window). The coloured stained glass with its decorative border and the timidly decorated balcony railing
				 hint at an owner who was in love with his home.
				 <br>You'll discover what makes this house unique if you stand under its portico: have you ever wondered 
				 what life was like without door-entry intercoms? <br>
				 <strong> Look up at the ceiling!</strong>`,
            fr: `Can Guifre <br>
			     Construite au cours du deuxième tiers du XIXe siècle, c'est la seule maison de la place dotée d'une tribune (un oriel vitré). Les vitraux colorés avec leur frise et la rambarde du balcon timidement décorée
				 laissent deviner un propriétaire amoureux de sa maison.
				 <br>Vous découvrirez ce qui rend cette maison unique en vous plaçant sous son porche : vous êtes-vous déjà demandé
				 comment on vivait sans interphone ? <br>
				 <strong> Regardez le plafond !</strong>`,
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
            fr: 'Can Junquera',
        },
        any: 1930,
        direccio: 'Carrer Narcís Junquera 1',
        estil: {
            ca: 'Eclèctic',
            es: 'Ecléctico',
            en: 'Eclectic',
            fr: 'Éclectique',
        },
        descripcio: {
            ca: `Can Junquera<br><br>
			     Edifici de l'any 1895 d'estil eclèctic (que barreja estils i no ens mullem vaja).  <br>
				 Una simetria i unes proporcions molt treballades, l'ornamentació destaca pels frisos esgrafiats de color vermell i els guardapols del pis principal. 
				A la porta veureu un escut amb les inicials del propietari, una evolució moderna de les llindes dels segles anteriors. <br>				 
				 Va ser la casa de la família Junquera, d'on era l'alcalde perpetu durant el Franquisme.
`,
            es: `Can Junquera<br><br>
			     Edificio del año 1895 de estilo ecléctico (que mezcla estilos y no se moja, vaya).  <br>
				 Una simetría y unas proporciones muy trabajadas; la ornamentación destaca por los frisos esgrafiados de color rojo y los guardapolvos del piso principal.
				En la puerta veréis un escudo con las iniciales del propietario, una evolución moderna de los dinteles de los siglos anteriores. <br>
				 Fue la casa de la familia Junquera, a la que pertenecía el alcalde perpetuo durante el franquismo.
`,
            en: `Can Junquera<br><br>
			     A building from 1895 in the eclectic style (one that mixes styles without committing to any, let's say).  <br>
				 Its symmetry and proportions are very carefully worked; the ornamentation stands out for its red sgraffito friezes and the hood mouldings on the main floor. 
				On the door you'll see a shield with the owner's initials, a modern evolution of the carved lintels of earlier centuries. <br>				 
				 It was the home of the Junquera family, to which the town's "perpetual mayor" during the Franco regime belonged.
`,
            fr: `Can Junquera<br><br>
			     Bâtiment de 1895 de style éclectique (qui mélange les styles sans trop se mouiller, disons).  <br>
				 Une symétrie et des proportions très soignées ; l'ornementation se distingue par ses frises en sgraffite rouge et les larmiers de l'étage noble.
				Sur la porte, vous verrez un écusson aux initiales du propriétaire, une évolution moderne des linteaux gravés des siècles précédents. <br>
				 C'était la maison de la famille Junquera, à laquelle appartenait le « maire perpétuel » sous le franquisme.
`,
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
            fr: 'Can Soler',
        },
        any: 1930,
        direccio: 'Carrer Narcís Junquera 8',
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Catalan Modernisme',
            fr: 'Modernisme catalan',
        },
        descripcio: {
            ca: `Can Soler <br><br>
			     Edifici molt ben conservat, tots els balcons amb la barana bombada, tan típica de l'època.
				 L'ornamentació està basada en uns plafons i un fals encoixinat que juguen amb els colors blanc i vermell, 
				 invertits entre el primer i el segon pis. <br>
				 Molt típic de l'època també és la falsa teulada que sobresurt a dalt de tot, una petita joia que a més protegeix la façana de la pluja.
`,
            es: `Can Soler <br><br>
			     Edificio muy bien conservado, con todos los balcones con la barandilla abombada, tan típica de la época.
				 La ornamentación se basa en unos plafones y un falso almohadillado que juegan con los colores blanco y rojo,
				 invertidos entre el primer y el segundo piso. <br>
				 Muy típico de la época es también el falso tejado que sobresale en lo más alto, una pequeña joya que además protege la fachada de la lluvia.
`,
            en: `Can Soler <br><br>
			     A very well-preserved building, with bulging railings on every balcony, so typical of the period.
				 The ornamentation is based on panels and false rustication that play with white and red, 
				 reversed between the first and second floors. <br>
				 Also very typical of the period is the false roof jutting out at the very top, a little gem that also protects the façade from the rain.
`,
            fr: `Can Soler <br><br>
			     Bâtiment très bien conservé, dont tous les balcons ont une rambarde bombée, si typique de l'époque.
				 L'ornementation repose sur des panneaux et un faux bossage qui jouent avec le blanc et le rouge,
				 inversés entre le premier et le deuxième étage. <br>
				 Très typique de l'époque aussi : le faux toit qui dépasse tout en haut, un petit bijou qui protège en plus la façade de la pluie.
`,
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
            en: 'Town Hall',
            fr: 'Mairie',
        },
        any: 'XIX',
        direccio: 'Plaça de la Vila 2',
        estil: {
            ca: 'Arquitectura Popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Ajuntament <br> <br>
			     Edifici sense pretensions, destaca l'esgrafiat central amb l'escut del poble. Molt senzill inclou el nom del poble i la senyera catalana representada aquí amb tres barres.<br>
				 Amer és un dels pocs pobles que no disposa d'escut oficial, creiem que haver estat una propietat eclesiàstica hi té a veure. <br>
				 Així com les finestres tenen llindes planes, tant a la porta com a la finestra del primer pis,
				 disposen de marcs d'inspiració arabesca.
`,
            es: `Ayuntamiento <br> <br>
			     Edificio sin pretensiones; destaca el esgrafiado central con el escudo del pueblo. Muy sencillo, incluye el nombre del pueblo y la senyera catalana, representada aquí con tres barras.<br>
				 Amer es uno de los pocos pueblos que no tiene escudo oficial; creemos que haber sido una propiedad eclesiástica tiene algo que ver. <br>
				 Mientras que las ventanas tienen dinteles planos, tanto la puerta como la ventana del primer piso
				 tienen marcos de inspiración arabesca.
`,
            en: `Town Hall <br> <br>
			     An unpretentious building; what stands out is the central sgraffito with the town's coat of arms. Very simple, it includes the town's name and the Catalan flag, shown here with three stripes.<br>
				 Amer is one of the few towns without an official coat of arms; we believe its past as church property has something to do with it. <br>
				 While the windows have flat lintels, both the door and the first-floor window
				 have Arabesque-inspired frames.
`,
            fr: `Mairie <br> <br>
			     Bâtiment sans prétention ; ce qui ressort, c'est le sgraffite central avec l'écusson du village. Très simple, il comporte le nom du village et le drapeau catalan, représenté ici avec trois bandes.<br>
				 Amer est l'un des rares villages à ne pas avoir d'armoiries officielles ; nous pensons que son passé de propriété ecclésiastique y est pour quelque chose. <br>
				 Si les fenêtres ont des linteaux droits, la porte comme la fenêtre du premier étage
				 ont des encadrements d'inspiration arabesque.
`,
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
        direccio: 'Carrer Narcís Junquera 5',
        estil: {
            ca: 'Arquitectura Popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Can Canesteve <br><br>
			     Edifici de tres pisos sense pretensions. <br>Fixeu-vos com al 1885 encara cuejava l'ús de "llindes" amb el nom del propietari i l'any inscrits.
`,
            es: `Can Canesteve <br><br>
			     Edificio de tres pisos sin pretensiones. <br>Fijaos en cómo en 1885 todavía coleaba la costumbre de los "dinteles" con el nombre del propietario y el año inscritos.
`,
            en: `Can Canesteve <br><br>
			     An unpretentious three-storey building. <br>Notice how, as late as 1885, the custom of carved "lintels" bearing the owner's name and the year was still hanging on.
`,
            fr: `Can Canesteve <br><br>
			     Bâtiment de trois étages sans prétention. <br>Remarquez comme, en 1885, la coutume des « linteaux » portant le nom du propriétaire et l'année gravés perdurait encore.
`,
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
            fr: 'La Torre',
        },
        any: 1925,
        direccio: 'Carrer de la Barroca 1',
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Catalan Modernisme',
            fr: 'Modernisme catalan',
        },
        descripcio: {
            ca: `La Torre  <br>
			
			     Ni Amer vam escapar de la primeríssima moda de les cases d'estiueig! Aquesta formada per diferents cossos i terrasses, dels quals el més destacat, i que ha donat nom a la casa, 
				 és una torratxa mirador, de planta quadrada, circumdada per un balcó i amb coronament piramidal.
`,
            es: `La Torre  <br>

			     ¡Ni en Amer nos escapamos de la primerísima moda de las casas de veraneo! Esta está formada por distintos cuerpos y terrazas, de los cuales el más destacado, y el que ha dado nombre a la casa,
				 es una torrecilla mirador de planta cuadrada, rodeada por un balcón y con remate piramidal.
`,
            en: `La Torre (The Tower)  <br>
			
			     Not even Amer escaped the very first fashion for summer houses! This one is made up of several volumes and terraces, the most striking of which, and the one that gave the house its name, 
				 is a small lookout tower, square in plan, surrounded by a balcony and topped with a pyramid-shaped roof.
`,
            fr: `La Torre (La Tour)  <br>

			     Même Amer n'a pas échappé à la toute première mode des maisons de villégiature ! Celle-ci est composée de plusieurs volumes et terrasses, dont le plus remarquable, qui a donné son nom à la maison,
				 est une petite tour belvédère de plan carré, entourée d'un balcon et coiffée d'un toit pyramidal.
`,
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
            fr: 'Can Pujades',
        },
        any: 'Anys 20',
        direccio: 'Carrer de la Barroca 5',
        estil: {
            ca: 'Modernisme',
            es: 'Modernismo',
            en: 'Catalan Modernisme',
            fr: 'Modernisme catalan',
        },
        descripcio: {
            ca: `Can Pujades <br>
			
			     Casa d'estiugeig petita amb tots els detalls possibles: façana coronada amb una barana de tres trams,
				 les finestres estan decorades com si d'un castell es tractés, a les llindes de cada una relleus de caire vegetal. <br>
				 Fins i tot estan decorades les mènsules que sostenen la cornisa de la barana del balco!
`,
            es: `Can Pujades <br>

			     Pequeña casa de veraneo con todos los detalles posibles: fachada coronada con una barandilla de tres tramos,
				 ventanas decoradas como si se tratara de un castillo y, en los dinteles de cada una, relieves de tipo vegetal. <br>
				 ¡Incluso están decoradas las ménsulas que sostienen la cornisa de la barandilla del balcón!
`,
            en: `Can Pujades <br>
			
			     A small summer house with every possible detail: a façade crowned by a three-section balustrade,
				 windows decorated as if it were a castle, and plant-motif reliefs on each of their lintels. <br>
				 Even the corbels supporting the cornice of the balcony railing are decorated!
`,
            fr: `Can Pujades <br>

			     Petite maison de villégiature avec tous les détails possibles : une façade couronnée d'une balustrade en trois sections,
				 des fenêtres décorées comme s'il s'agissait d'un château et, sur chacun de leurs linteaux, des reliefs végétaux. <br>
				 Même les consoles qui soutiennent la corniche de la rambarde du balcon sont décorées !
`,
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
            es: 'Ábside del Monasterio',
            en: 'Monastery Apse',
            fr: 'Abside du monastère',
        },
        any: "S.XII",
        direccio: 'Carrer Jacint Verdaguer',
        estil: {
            ca: 'Romànic',
            es: 'Románico',
            en: 'Romanesque',
            fr: 'Roman',
        },
        descripcio: {
            ca: `Absis del Monestir  <br>
			
			     És la part que conserva de forma més íntegra l'aspecte original del temple romànic. <br>
				 Fixeu-vos en les petites finestres quasi sense decoració, 	únicament disposen just a sota la teulada d'aquestes petits arcs de pedres, en l'anomenada decoració llombarda, molt típica del romànic català primerenc. <br>
				 A la construcció inicial es van fer tres absis, essent el quart un afegit posterior. <br> Sabríeu diferenciar pel tipus i color de la pedra quin és?
`,
            es: `Ábside del Monasterio  <br>

			     Es la parte que conserva de forma más íntegra el aspecto original del templo románico. <br>
				 Fijaos en las pequeñas ventanas casi sin decoración; únicamente tienen, justo debajo del tejado, estos pequeños arcos de piedra, la llamada decoración lombarda, muy típica del románico catalán temprano. <br>
				 En la construcción inicial se hicieron tres ábsides; el cuarto es un añadido posterior. <br> ¿Sabríais distinguir cuál es por el tipo y el color de la piedra?
`,
            en: `Apse of the Monastery  <br>
			
			     This is the part that most fully preserves the original appearance of the Romanesque church. <br>
				 Notice the small, almost undecorated windows; the only ornament is the row of small stone arches just below the roof, the so-called Lombard band decoration, very typical of early Catalan Romanesque. <br>
				 The original building had three apses, the fourth being a later addition. <br> Could you tell which one it is from the type and colour of the stone?
`,
            fr: `Abside du monastère  <br>

			     C'est la partie qui conserve le plus fidèlement l'aspect d'origine de l'église romane. <br>
				 Observez les petites fenêtres presque sans décor ; seule une rangée de petits arcs de pierre court juste sous le toit : c'est le décor dit « lombard », très typique du premier art roman catalan. <br>
				 La construction initiale comptait trois absides, la quatrième étant un ajout postérieur. <br> Sauriez-vous dire laquelle, d'après le type et la couleur de la pierre ?
`,
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
            fr: 'Can Món',
        },
        any: "S.XVI-XIX",
        direccio: 'Carrer Narcís Junquera / Plaça del Monestir',
        estil: {
            ca: 'Renaixentista',
            es: 'Renacentista',
            en: 'Renaissance',
            fr: 'Renaissance',
        },
        descripcio: {
            ca: `Can Món <br>
				
				 Qualsevol guia us parlaria d'edifici eclèctic, diguem que és la definició exacta d'urbanisme d'aprofitament. <br>
				 És un edifici format per dos cossos en L, el que fa de pont per entrar a la plaça i el que té aquesta portalada digna d'una església amb dues finestres obliques a sobre.<br>
				 Aquesta última és el que queda de l'antic palau de l'Abat, la portalada és d'estil renaixentista i un frontó triangular purament ornamental. <br>
				 Les ordres monàstiques podien fer vot de pobresa, però l'abat estava sempre per sobre i tenia el seu palau, servents, etc. Encaixa més pensar-hi com un senyor feudal que com un monjo. <br>
				 De l'edifici que fa de pont té a la banda del Monestir un balcó amb un guardapols fantàstic. <br> 
				 <br> Potser fins ara no impressiona, però creueu la casa per sota i a l'altra banda 
				 veureu una façana que manté un únic estil que vol simular les antigues cases del gòtic (és de finals del s. XIX), imagineu-vos com seria aquest casalot per dins! 
				 
			     
`,
            es: `Can Món <br>

				 Cualquier guía os hablaría de un edificio ecléctico; digamos que es la definición exacta de urbanismo de aprovechamiento. <br>
				 Es un edificio formado por dos cuerpos en L: el que hace de puente para entrar en la plaza y el que tiene esa portada digna de una iglesia con dos ventanas oblicuas encima.<br>
				 Este último es lo que queda del antiguo palacio del Abad; la portada es de estilo renacentista, con un frontón triangular puramente ornamental. <br>
				 Las órdenes monásticas podían hacer voto de pobreza, pero el abad siempre estaba por encima y tenía su palacio, sirvientes, etc. Encaja más pensar en él como un señor feudal que como un monje. <br>
				 El edificio que hace de puente tiene, por el lado del Monasterio, un balcón con un guardapolvo fantástico. <br>
				 <br> Quizá hasta ahora no impresiona, pero cruzad la casa por debajo y al otro lado
				 veréis una fachada de un único estilo que quiere imitar las antiguas casas góticas (es de finales del s. XIX). ¡Imaginaos cómo debe de ser este caserón por dentro!

`,
            en: `Can Món <br>
				
				 Any guide would call it an eclectic building; let's say it is the very definition of making the most of whatever was already there. <br>
				 It is made up of two wings in an L shape: the one that forms a bridge into the square, and the one with a doorway worthy of a church and two oblique windows above it.<br>
				 The latter is what remains of the old Abbot's palace: the doorway is Renaissance in style, with a purely ornamental triangular pediment. <br>
				 Monastic orders could take a vow of poverty, but the abbot was always above all that and had his own palace, servants and so on. It makes more sense to think of him as a feudal lord than as a monk. <br>
				 On the Monastery side, the bridge building has a balcony with a fantastic hood moulding. <br> 
				 <br> Maybe it isn't impressive so far, but walk through under the house and on the other side 
				 you'll see a façade in a single style that sets out to imitate old Gothic houses (it dates from the late 19th century). Just imagine what this great mansion must be like inside! 
				 
			     
`,
            fr: `Can Món <br>

				 N'importe quel guide vous parlerait d'un bâtiment éclectique ; disons que c'est la définition même de l'urbanisme de récupération. <br>
				 C'est un bâtiment formé de deux corps en L : celui qui forme un pont pour entrer sur la place, et celui qui présente ce portail digne d'une église, surmonté de deux fenêtres obliques.<br>
				 Ce dernier est ce qui reste de l'ancien palais de l'Abbé : le portail est de style Renaissance, avec un fronton triangulaire purement décoratif. <br>
				 Les ordres monastiques pouvaient faire vœu de pauvreté, mais l'abbé était toujours au-dessus de tout cela et avait son palais, ses serviteurs, etc. Il est plus juste de le voir comme un seigneur féodal que comme un moine. <br>
				 Côté monastère, le bâtiment-pont possède un balcon avec un larmier magnifique. <br>
				 <br> Ce n'est peut-être pas encore impressionnant, mais passez sous la maison et, de l'autre côté,
				 vous verrez une façade d'un style unique qui cherche à imiter les anciennes maisons gothiques (elle date de la fin du XIXe siècle). Imaginez à quoi doit ressembler cette grande demeure à l'intérieur !

`,
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
            fr: 'Can Boles',
        },
        any: "S.XVI",
        direccio: 'Plaça del Monestir 5',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Can Boles <br>
			
			     Edifici del segle XVI, amb modificacions posteriors (hi ha llindes amb dates del segle XVIII), 
				 podríem dir que entre aquest edifici i l'església hauríem trobat el claustre del monestir. <br>
				 És un gran casal sense gaires pretensions arquitectòniques però sí que destaca el vell escut heràldic i les pedres tan treballades que envolten les finestres.
`,
            es: `Can Boles <br>

			     Edificio del siglo XVI, con modificaciones posteriores (hay dinteles con fechas del siglo XVIII);
				 podríamos decir que entre este edificio y la iglesia habríamos encontrado el claustro del monasterio. <br>
				 Es un gran caserón sin muchas pretensiones arquitectónicas, pero sí destacan el viejo escudo heráldico y las piedras tan trabajadas que enmarcan las ventanas.
`,
            en: `Can Boles <br>
			
			     A 16th-century building with later alterations (some lintels bear 18th-century dates); 
				 the monastery cloister would probably have stood between this building and the church. <br>
				 It is a large manor house without much architectural pretension, but the old heraldic shield and the finely worked stones framing the windows do stand out.
`,
            fr: `Can Boles <br>

			     Bâtiment du XVIe siècle, modifié par la suite (certains linteaux portent des dates du XVIIIe siècle) ;
				 le cloître du monastère se trouvait sans doute entre ce bâtiment et l'église. <br>
				 C'est une grande demeure sans grandes prétentions architecturales, mais le vieil écusson héraldique et les pierres finement travaillées qui encadrent les fenêtres se remarquent.
`,
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
            es: 'Cruz de término',
            en: 'Boundary Cross',
            fr: 'Croix de terme',
        },
        any: "S.XIX",
        direccio: 'Plaça del Monestir s/n',
        estil: {
            ca: 'Neoromànic',
            es: 'Neorrománico',
            en: 'Neo-Romanesque',
            fr: 'Néo-roman',
        },
        descripcio: {
            ca: `Creu de terme <br><br>
			
			     Antigament l'hauríem trobada a l'entrada del terme municipal donant la benvinguda.<br>
				 L'original està dipositada al Museu Diocesà de Girona, aquí en podeu observar una reproducció força malmesa per les inclemències del temps. 
				 La creu, si hi poseu imaginació encara ho podreu veure, presenta el Crist crucificat a una cara i la Mare de Déu a l'altra.
`,
            es: `Cruz de término <br><br>

			     Antiguamente la habríamos encontrado a la entrada del término municipal, dando la bienvenida.<br>
				 El original está depositado en el Museo Diocesano de Girona; aquí podéis ver una reproducción bastante estropeada por las inclemencias del tiempo.
				 La cruz (si le ponéis imaginación, todavía lo podréis ver) presenta a Cristo crucificado en una cara y a la Virgen en la otra.
`,
            en: `Boundary Cross <br><br>
			
			     In the past we would have found it at the entrance to the municipality, welcoming travellers.<br>
				 The original is kept at the Girona Diocesan Museum; here you can see a replica, quite worn by the weather. 
				 If you use your imagination you can still make it out: the cross shows the crucified Christ on one side and the Virgin Mary on the other.
`,
            fr: `Croix de terme <br><br>

			     Autrefois, on l'aurait trouvée à l'entrée de la commune, pour souhaiter la bienvenue aux voyageurs.<br>
				 L'original est conservé au Musée diocésain de Gérone ; vous pouvez voir ici une reproduction assez abîmée par les intempéries.
				 La croix (avec un peu d'imagination, vous le verrez encore) représente le Christ crucifié sur une face et la Vierge sur l'autre.
`,
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
            fr: 'Can Terme',
        },
        any: "S.XVII",
        direccio: 'Plaça del Monestir 2',
        estil: {
            ca: 'Arquitectura Popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Can Terme <br>
			
			    Actualment acull el Museu Etnològic d'Amer. <br>
				Era l'antiga sacristia, un edifici molt reformat que conserva alguns elements antics del segle XVII. <br>
				Si us hi acosteu i l'examineu hauríeu de trobar un escut, una figura geomètrica de pedra i una llinda amb la data de 1662.
`,
            es: `Can Terme <br>

			    Actualmente acoge el Museo Etnológico de Amer. <br>
				Era la antigua sacristía, un edificio muy reformado que conserva algunos elementos antiguos del siglo XVII. <br>
				Si os acercáis y lo examináis, deberíais encontrar un escudo, una figura geométrica de piedra y un dintel con la fecha de 1662.
`,
            en: `Can Terme <br>
			
			    It currently houses the Amer Ethnological Museum. <br>
				It was the old sacristy, a heavily renovated building that still keeps some old 17th-century features. <br>
				If you get close and take a good look, you should find a coat of arms, a geometric stone figure and a lintel dated 1662.
`,
            fr: `Can Terme <br>

			    Elle abrite aujourd'hui le Musée ethnologique d'Amer. <br>
				C'était l'ancienne sacristie, un bâtiment très remanié qui conserve quelques éléments anciens du XVIIe siècle. <br>
				Si vous vous approchez et l'examinez, vous devriez trouver un écusson, une figure géométrique en pierre et un linteau daté de 1662.
`,
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
            fr: 'Monastère',
        },
        any: "S.IX",
        direccio: 'Plaça del Monestir',
        estil: {
            ca: 'Romànic',
            es: 'Románico',
            en: 'Romanesque',
            fr: 'Roman',
        },
        descripcio: {
            ca: `Antic Monestir Santa Maria d'Amer <br>
			
			     De l'antic monestir benedictí consagrat l'any 949 queda principalment l'actual església de Santa Maria, ha patit moltes reformes. 
				 Destaquem la forma imponent, les motllures de les portes i finestres i també el treball de ferro de les finestres.
				 Si teniu ocasió entreu-hi dins (horari de missa).<br> Amb el creixement de població es va prendre la decisió de modificar els pilars interiors romànics (amples i robustos) 
				 per permetre que des dels laterals es pogués seguir missa per quatre columnetes ornamentades que costa creure aguantin el mateix pes.  És realment una decisió insòlita que val la pena observar.
				 
				 
`,
            es: `Antiguo Monasterio de Santa Maria d'Amer <br>

			     Del antiguo monasterio benedictino consagrado en el año 949 queda principalmente la actual iglesia de Santa Maria, que ha sufrido muchas reformas.
				 Destacamos su forma imponente, las molduras de puertas y ventanas y también el trabajo de hierro de las ventanas.
				 Si tenéis ocasión, entrad (en horario de misa).<br> Con el crecimiento de la población se tomó la decisión de sustituir los pilares interiores románicos (anchos y robustos)
				 por cuatro columnitas ornamentadas, para que desde los laterales se pudiera seguir la misa; cuesta creer que aguanten el mismo peso.  Es realmente una decisión insólita que vale la pena observar.

`,
            en: `Former Monastery of Santa Maria d'Amer <br>
			
			     Of the old Benedictine monastery consecrated in 949, what mainly remains is today's church of Santa Maria, which has undergone many alterations. 
				 We would highlight its imposing shape, the mouldings of the doors and windows, and the ironwork on the windows.
				 If you get the chance, go inside (during Mass times).<br> As the population grew, the decision was taken to replace the wide, sturdy Romanesque interior pillars 
				 with four slender ornamented columns, so that Mass could be followed from the side aisles; it's hard to believe they bear the same weight.  It is a truly unusual decision and well worth seeing.
				 
				 
`,
            fr: `Ancien monastère de Santa Maria d'Amer <br>

			     De l'ancien monastère bénédictin consacré en 949, il reste principalement l'actuelle église de Santa Maria, qui a subi de nombreuses transformations.
				 Nous soulignons sa forme imposante, les moulures des portes et fenêtres, ainsi que la ferronnerie des fenêtres.
				 Si vous en avez l'occasion, entrez (aux heures de messe).<br> Avec la croissance de la population, on a décidé de remplacer les piliers romans intérieurs (larges et robustes)
				 par quatre fines colonnettes ornées, afin que l'on puisse suivre la messe depuis les bas-côtés ; on a du mal à croire qu'elles supportent le même poids.  C'est une décision vraiment insolite qui mérite d'être vue.

`,
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
            fr: 'Ca l\'Espígol',
        },
        any: "S.XVIII",
        direccio: 'Plaça del Monestir 17',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Ca l'Espígol <br>
			
			     La consideraríem una masia si no estigués en nucli urbà. Destaca l'emmarcament de pedra de la porta i de totes les finestres.
				 De pedra treballada, llindes a totes les finestres i mantenint una coherència del conjunt.<br>
				 La porta ens agrada especialment per la seva forma rodona.<br>
				 Amb tot, no consta cap inscripció!
`,
            es: `Ca l'Espígol <br>

			     La consideraríamos una masía si no estuviera en el casco urbano. Destaca el enmarcado de piedra de la puerta y de todas las ventanas.
				 Piedra trabajada, dinteles en todas las ventanas y una coherencia en todo el conjunto.<br>
				 La puerta nos gusta especialmente por su forma redondeada.<br>
				 ¡Con todo, no consta ninguna inscripción!
`,
            en: `Ca l'Espígol <br>
			
			     We would call it a masia (a traditional farmhouse) if it weren't in the town centre. The stone framing of the door and of every window stands out.
				 Worked stone, lintels on every window, and a consistent look throughout.<br>
				 We especially like the door for its rounded shape.<br>
				 Even so, there is no inscription anywhere!
`,
            fr: `Ca l'Espígol <br>

			     On la qualifierait de mas (ferme traditionnelle catalane) si elle ne se trouvait pas en plein village. L'encadrement en pierre de la porte et de toutes les fenêtres est remarquable.
				 De la pierre taillée, des linteaux à toutes les fenêtres et une belle cohérence d'ensemble.<br>
				 Nous aimons particulièrement la porte pour sa forme arrondie.<br>
				 Et pourtant, aucune inscription !
`,
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
            fr: 'Can Gasull',
        },
        any: "S.XVII",
        direccio: 'Plaça del Monestir, 3 / Carrer Sant Benet',
        estil: {
            ca: 'Gòtic',
            es: 'Gótico',
            en: 'Gothic',
            fr: 'Gothique',
        },
        descripcio: {
            ca: `Can Gasull <br>
			
			    Correspon a un dels antics edificis del Monestir d'Amer, concretament era la infermeria, amb façana a la plaça i al carrer de Sant Benet, si feu la volta veureu una placa de l'ajuntament que indica que als baixos s'usaven com a cavallerisses. 
				Ara és un casalot que conserva alguna finestra antiga, però hem vist fotografies de qui hi va viure i aquesta casa posseïa un dels finestrals renaixentistes més interessants de l'arquitectura civil catalana, 
				amb temàtica vinculada a les epidèmies de pesta.<br>
				Lamentablement, aquesta finestra i una altra de tipus conopial, van ser venudes per l'antic propietari. <br>
				Des del carrer Sant Benet veureu l'altra cara de la casa i encara conserva un finestral ben bonic (costa de trobar un punt amb visió!).
				
`,
            es: `Can Gasull <br>

			    Corresponde a uno de los antiguos edificios del Monasterio de Amer, concretamente la enfermería, con fachada a la plaza y a la calle de Sant Benet. Si dais la vuelta veréis una placa del ayuntamiento que indica que los bajos se usaban como caballerizas.
				Ahora es un caserón que conserva alguna ventana antigua, pero hemos visto fotografías de quien vivió allí y esta casa tenía uno de los ventanales renacentistas más interesantes de la arquitectura civil catalana,
				con temática vinculada a las epidemias de peste.<br>
				Lamentablemente, esta ventana y otra de tipo conopial fueron vendidas por el antiguo propietario. <br>
				Desde la calle de Sant Benet veréis la otra cara de la casa, que todavía conserva un ventanal muy bonito (¡cuesta encontrar un punto con buena vista!).

`,
            en: `Can Gasull <br>
			
			    This was one of the old buildings of the Monastery of Amer, specifically the infirmary, with façades on the square and on Carrer de Sant Benet. If you walk round, you'll see a plaque from the town council indicating that the ground floor was used as stables. 
				Today it is a large house that keeps a few old windows, but we have seen photographs from people who lived there, and this house had one of the most interesting Renaissance windows in Catalan civil architecture, 
				with themes linked to plague epidemics.<br>
				Sadly, this window and another ogee-arched one were sold by the former owner. <br>
				From Carrer de Sant Benet you'll see the other side of the house, which still keeps a lovely window (it's hard to find a spot with a good view!).
				
`,
            fr: `Can Gasull <br>

			    Il s'agit de l'un des anciens bâtiments du monastère d'Amer, plus précisément de l'infirmerie, avec une façade sur la place et une autre sur la rue de Sant Benet. Si vous en faites le tour, vous verrez une plaque de la mairie indiquant que le rez-de-chaussée servait d'écurie.
				C'est aujourd'hui une grande maison qui conserve quelques fenêtres anciennes, mais nous avons vu des photographies de ceux qui y ont vécu : cette maison possédait l'une des fenêtres Renaissance les plus intéressantes de l'architecture civile catalane,
				sur le thème des épidémies de peste.<br>
				Malheureusement, cette fenêtre et une autre en accolade ont été vendues par l'ancien propriétaire. <br>
				Depuis la rue de Sant Benet, vous verrez l'autre face de la maison, qui conserve encore une très jolie fenêtre (difficile de trouver un point de vue !).

`,
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
            es: 'Placa de los Remensas',
            en: 'Remença Plaque',
            fr: 'Plaque des Remences',
        },
        any: "S.XX",
        direccio: 'Plaça del Monestir s/n',
        estil: {
            ca: 'Neoromànic',
            es: 'Neorrománico',
            en: 'Neo-Romanesque',
            fr: 'Néo-roman',
        },
        descripcio: {
            ca: `Placa de l'arbitratge Remença <br><br>
				La trobareu col·locada a un lateral de Can Boles.<br>
				Preparats per una parrafada històrica? Amer no va ser el centre de grans esdeveniments, i tampoc aquest ho és!, però ens fa il·lusió que fos escenari 
				de quan el poble menut va dir prou i va obligar els senyors feudals a negociar a la baixa els seus drets:<br>
			    Ferran II d'Aragó va firmar el 1486 la sentència arbitral de Guadalupe amb la que es posava fi a la segona guerra remença.
				Aquí Amer un any abans s'havia pactat la fi de les hostilitats acceptant els remences que acatarien el dictamen del rei.
				Creiem que es va poder firmar a Amer perquè l'Abat ja havia renunciat als mals usos. <br>
				Si continueu el viatge per la Garrotxa podreu resseguir totes les localitzacions de les Guerres Remences. <br>
				No oblideu buscar qui va ser Verntallat!
`,
            es: `Placa del arbitraje remensa <br><br>
				La encontraréis colocada en un lateral de Can Boles.<br>
				¿Preparados para una parrafada histórica? Amer no fue el centro de grandes acontecimientos, ¡y este tampoco lo es!, pero nos hace ilusión que fuera escenario
				del momento en que el pueblo llano dijo basta y obligó a los señores feudales a negociar a la baja sus derechos:<br>
			    Fernando II de Aragón firmó en 1486 la Sentencia Arbitral de Guadalupe, con la que se ponía fin a la segunda guerra remensa.
				Aquí en Amer, un año antes, se había pactado el fin de las hostilidades: los remensas aceptaban acatar el dictamen del rey.
				Creemos que se pudo firmar en Amer porque el Abad ya había renunciado a los malos usos. <br>
				Si continuáis el viaje por la Garrotxa podréis seguir todas las localizaciones de las guerras remensas. <br>
				¡No olvidéis buscar quién fue Verntallat!
`,
            en: `Plaque of the Remença Arbitration <br><br>
				You'll find it on one side of Can Boles.<br>
				Ready for a bit of history? Amer was never the centre of great events, and this one isn't either!, but we love that it was the setting 
				for the moment when ordinary people said enough and forced the feudal lords to negotiate their rights downwards:<br>
			    In 1486 Ferdinand II of Aragon signed the Sentence of Guadalupe, an arbitration ruling that ended the second Remença War (the Catalan peasants' uprising).
				Here in Amer, a year earlier, an end to hostilities had been agreed, with the remença peasants accepting that they would abide by the king's ruling.
				We believe it could be signed in Amer because the Abbot had already given up the "mals usos" (the abusive feudal customs). <br>
				If you continue your trip through the Garrotxa, you can follow all the locations of the Remença Wars. <br>
				Don't forget to find out who Verntallat was!
`,
            fr: `Plaque de l'arbitrage des Remences <br><br>
				Vous la trouverez sur un côté de Can Boles.<br>
				Prêts pour un petit cours d'histoire ? Amer n'a jamais été le centre de grands événements, et celui-ci ne l'est pas non plus !, mais nous sommes ravis qu'il ait servi de décor
				au moment où les petites gens ont dit « assez » et ont obligé les seigneurs féodaux à revoir leurs droits à la baisse :<br>
			    En 1486, Ferdinand II d'Aragon signa la Sentence arbitrale de Guadalupe, qui mit fin à la deuxième guerre des Remences (le soulèvement des paysans catalans).
				Ici même, à Amer, un an plus tôt, on avait convenu de la fin des hostilités, les paysans remences acceptant de se soumettre à la décision du roi.
				Nous pensons que l'accord a pu être signé à Amer parce que l'Abbé avait déjà renoncé aux « mauvais usages » (les coutumes féodales abusives). <br>
				Si vous poursuivez votre voyage dans la Garrotxa, vous pourrez suivre tous les lieux des guerres des Remences. <br>
				N'oubliez pas de chercher qui était Verntallat !
`,
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
            fr: 'Rue de Girona',
        },
        any: "S.XVII",
        direccio: 'Carrer Girona',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Carrer Girona  <br><br>
			
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
            es: `Calle Girona  <br><br>

			    La calle Girona es una calle larga y estrecha originada en la Edad Media que articula el barrio del
				Pedreguet hasta llegar a la capilla de la Mare de Déu de la Pietat. <br>

				Es una calle muy interesante
				que ha conservado su estructura antigua, y muchos de sus edificios mantienen elementos destacables como los dinteles de puertas y ventanas.<br>
				La mayoría de las casas tenían originalmente una planta baja dedicada al ganado y al pajar, y un primer piso de habitaciones. <br>
				En los dinteles podemos encontrar el nombre de sus antiguos propietarios y el año en que se hicieron (unas veces la casa y otras la reforma), principalmente entre los siglos XVII y XIX.<br><br>

				La fisonomía particular de la calle, casi sin salidas laterales, se debe a que las casas se fueron construyendo
				a lo largo de la antigua carretera que llevaba a Girona. Todo el mundo quería estar lo más cerca posible de la plaza y del Monasterio,
				así que cada casa nueva se hacía pared con pared con la anterior, sin que nadie pensara en dejar una calle en medio. <br><br>

				Os recomendamos un paseo tranquilo tanto por esta calle como por la de l'Abat Vilafreser, justo encima. <br>
				El juego consiste en ser el primero en encontrar y leer la siguiente inscripción. <br>
				Pensad que, por pequeña y estrecha que fuera una casa, el orgullo de construirla o reformarla llevaba a pagar a un cantero para dejar constancia.<br>
				<strong>Atención:</strong> ¡no solo encontraréis inscripciones en las puertas!		<br><br>
				<strong>No perdáis de vista a los niños</strong>: por tranquila que parezca, es una calle con tráfico rodado.
`,
            en: `Carrer Girona  <br><br>
			
			    Carrer Girona is a long, narrow street dating back to the Middle Ages that runs through the
				Pedreguet neighbourhood up to the chapel of Mare de Déu de la Pietat. <br>
				
				It is a very interesting street 
				that has kept its old layout, and many of its buildings preserve notable features such as the lintels of their doors and windows.<br>
				Most of the houses originally had a ground floor for livestock and hay, and a first floor with the bedrooms. <br>
				On the lintels you can find the names of their former owners and the year they were made (sometimes of the house itself, sometimes of a renovation), mainly between the 17th and 19th centuries.<br><br>
				
				 
				The street's particular character, with almost no side exits, is because the houses were built one after another 
				along the old road to Girona. Everyone wanted to be as close as possible to the square and the Monastery,
				so each new house was built wall-to-wall with the previous one, and nobody thought of leaving a street in between. <br><br>
				
				We recommend a leisurely stroll along this street and along Carrer de l'Abat Vilafreser just above it. <br>
				The game is to be the first to find and read the next inscription. <br>
				Bear in mind that, however small and narrow a house was, the pride of building or renovating it led people to pay a stonemason to leave a record of it.<br>
				<strong>Watch out:</strong> you won't only find inscriptions on doors!		<br><br>
				<strong>Keep an eye on the kids</strong>: however quiet it may seem, cars do use this street.
`,
            fr: `Rue de Girona  <br><br>

			    La rue de Girona est une rue longue et étroite, née au Moyen Âge, qui structure le quartier du
				Pedreguet jusqu'à la chapelle de la Mare de Déu de la Pietat. <br>

				C'est une rue très intéressante
				qui a conservé son tracé ancien, et nombre de ses bâtiments gardent des éléments remarquables, comme les linteaux des portes et des fenêtres.<br>
				À l'origine, la plupart des maisons avaient un rez-de-chaussée réservé au bétail et au foin, et un premier étage avec les chambres. <br>
				Sur les linteaux, on peut lire le nom des anciens propriétaires et l'année de réalisation (parfois de la maison, parfois de sa rénovation), principalement entre le XVIIe et le XIXe siècle.<br><br>

				La physionomie particulière de la rue, presque sans issue latérale, s'explique par le fait que les maisons ont été construites les unes après les autres
				le long de l'ancienne route de Gérone. Tout le monde voulait être le plus près possible de la place et du monastère,
				si bien que chaque nouvelle maison était bâtie mur contre mur avec la précédente, sans que personne ne pense à laisser une rue entre les deux. <br><br>

				Nous vous recommandons une promenade tranquille dans cette rue et dans la rue de l'Abat Vilafreser, juste au-dessus. <br>
				Le jeu consiste à être le premier à trouver et à lire l'inscription suivante. <br>
				Songez que, aussi petite et étroite que soit une maison, la fierté de l'avoir construite ou rénovée poussait à payer un tailleur de pierre pour en laisser la trace.<br>
				<strong>Attention :</strong> vous ne trouverez pas d'inscriptions que sur les portes !		<br><br>
				<strong>Surveillez les enfants</strong> : aussi calme qu'elle paraisse, cette rue est ouverte à la circulation.
`,
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
            fr: 'Can La',
        },
        any: "S.XVII",
        direccio: 'Carrer Girona 8',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Can La  <br><br>
			
			    És una de les cases més interessants del carrer Girona, una masia en un entorn urbà. <br>
				No hi consta cap llinda amb el nom del propietari, però destaca el seu portal adovellat i un finestral digne d'un palau del segle XVI amb la
				típica traceria gòtica i un guardapols motllurat recte. <br>
				Aquí hi movien diners!
`,
            es: `Can La  <br><br>

			    Es una de las casas más interesantes de la calle Girona: una masía en un entorno urbano. <br>
				No hay ningún dintel con el nombre del propietario, pero destaca su portal adovelado y un ventanal digno de un palacio del siglo XVI, con la
				típica tracería gótica y un guardapolvo moldurado recto. <br>
				¡Aquí se movía dinero!
`,
            en: `Can La  <br><br>
			
			    It is one of the most interesting houses on Carrer Girona: a farmhouse in an urban setting. <br>
				There is no lintel with the owner's name, but its voussoired doorway stands out, as does a window worthy of a 16th-century palace, with the
				typical Gothic tracery and a straight moulded hood. <br>
				There was money here!
`,
            fr: `Can La  <br><br>

			    C'est l'une des maisons les plus intéressantes de la rue de Girona : un mas en milieu urbain. <br>
				Aucun linteau ne porte le nom du propriétaire, mais on remarque son portail à claveaux et une fenêtre digne d'un palais du XVIe siècle, avec le
				réseau gothique typique et un larmier mouluré droit. <br>
				Ici, il y avait de l'argent !
`,
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
            fr: 'Can Plana',
        },
        any: "S.XVIII",
        direccio: 'Carrer Girona 14',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Can Plana  <br><br>
			
			    Edifici reformat modernament però que ha conservat alguns elements antics d'interès, com els muntants amb permòdols del portal o la finestra petita també amb llinda sobre permòdols.
				Pel que fa a la balconera cal destacar la llinda conopial de tradició gòtica envoltada amb un guardapols motllurat.
`,
            es: `Can Plana  <br><br>

			    Edificio reformado modernamente pero que ha conservado algunos elementos antiguos de interés, como las jambas con ménsulas del portal o la ventana pequeña, también con dintel sobre ménsulas.
				En cuanto a la puerta balconera, hay que destacar el dintel conopial de tradición gótica rodeado por un guardapolvo moldurado.
`,
            en: `Can Plana  <br><br>
			
			    A building renovated in modern times that has kept some interesting old features, such as the doorway jambs with corbels, or the small window whose lintel also rests on corbels.
				As for the balcony door, the ogee lintel in the Gothic tradition, framed by a moulded hood, is worth a look.
`,
            fr: `Can Plana  <br><br>

			    Bâtiment rénové à l'époque moderne mais qui a conservé quelques éléments anciens intéressants, comme les montants du portail sur corbeaux ou la petite fenêtre, dont le linteau repose lui aussi sur des corbeaux.
				Quant à la porte-fenêtre du balcon, son linteau en accolade de tradition gothique, entouré d'un larmier mouluré, mérite le coup d'œil.
`,
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
            en: 'Pietat Hermitage',
            fr: 'Ermitage de la Pietat',
        },
        any: "S.XVII",
        direccio: 'Carrer Girona s/n (al final)',
        estil: {
            ca: 'Barroc',
            es: 'Barroco',
            en: 'Baroque',
            fr: 'Baroque',
        },
        descripcio: {
            ca: `Ermita Mare de Déu de la Pietat  
			
			    Capella situada als afores del poble. Va ser construïda al segle XVII, tot i que el seu origen pot ser més antic, i reformada al XIX. 
				Té planta rectangular coberta amb volta de canó i capçada amb un absis semicircular. Hi té adossat un cos que fa de sagristia. 
				Davant la porta hi ha un porxo per sota del qual passa el carrer. A la llinda de la porta hi ha la data de la reforma, 1844.
				
				Aquí és on es revestien els bisbes i abats en entrar a la vila, d'aquesta manera es mostraven sempre impol·luts davant el poble encara que haguessin fet un llarg camí.

`,
            es: `Ermita de la Mare de Déu de la Pietat

			    Capilla situada en las afueras del pueblo. Fue construida en el siglo XVII, aunque su origen puede ser más antiguo, y reformada en el XIX.
				Tiene planta rectangular cubierta con bóveda de cañón y rematada con un ábside semicircular. Tiene adosado un cuerpo que hace de sacristía.
				Delante de la puerta hay un porche por debajo del cual pasa la calle. En el dintel de la puerta figura la fecha de la reforma, 1844.

				Aquí es donde se revestían los obispos y abades al entrar en la villa; de este modo se mostraban siempre impolutos ante el pueblo, aunque hubieran hecho un largo camino.

`,
            en: `Hermitage of Mare de Déu de la Pietat  
			
			    A chapel on the outskirts of the town. It was built in the 17th century, although its origins may be older, and renovated in the 19th. 
				It has a rectangular floor plan covered by a barrel vault and ends in a semicircular apse. A small building serving as the sacristy is attached to it. 
				In front of the door there is a porch under which the street passes. The door lintel bears the date of the renovation, 1844.
				
				This is where bishops and abbots put on their vestments before entering the town, so that they always appeared spotless before the people, even after a long journey.

`,
            fr: `Ermitage de la Mare de Déu de la Pietat

			    Chapelle située à la sortie du village. Elle a été construite au XVIIe siècle, même si son origine est peut-être plus ancienne, et remaniée au XIXe.
				Elle a un plan rectangulaire couvert d'une voûte en berceau et se termine par une abside semi-circulaire. Un petit bâtiment servant de sacristie lui est accolé.
				Devant la porte se trouve un porche sous lequel passe la rue. Le linteau de la porte porte la date de la rénovation, 1844.

				C'est ici que les évêques et les abbés revêtaient leurs habits en entrant dans la ville : ils apparaissaient ainsi toujours impeccables devant le peuple, même après un long voyage.

`,
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
            fr: 'Can Llepart',
        },
        any: "S.XVIII",
        direccio: 'Plaça de la Pietat 1',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Can Llepart  <br><br>
			
			   Edifici de grans dimensions construït al segle XVIII (1758), restaurat modernament.
			   La façana que dóna al carrer Abat Vilafreser hi ha una llinda on s'hi llegeix la data i el nom de Joseph Clusehs. 
			   De la façana de la plaça en destaca el balcó de fusta, protegit per un destacat voladís.

`,
            es: `Can Llepart  <br><br>

			   Edificio de grandes dimensiones construido en el siglo XVIII (1758) y restaurado modernamente.
			   En la fachada que da a la calle Abat Vilafreser hay un dintel donde se lee la fecha y el nombre de Joseph Clusehs.
			   De la fachada de la plaza destaca el balcón de madera, protegido por un marcado voladizo.

`,
            en: `Can Llepart  <br><br>
			
			   A large building constructed in the 18th century (1758) and restored in modern times.
			   On the façade facing Carrer Abat Vilafreser there is a lintel bearing the date and the name Joseph Clusehs. 
			   On the façade facing the square, the wooden balcony stands out, sheltered by a prominent overhang.

`,
            fr: `Can Llepart  <br><br>

			   Grand bâtiment construit au XVIIIe siècle (1758) et restauré à l'époque moderne.
			   Sur la façade donnant sur la rue Abat Vilafreser, un linteau porte la date et le nom de Joseph Clusehs.
			   Sur la façade de la place, on remarque le balcon en bois, protégé par un large avant-toit.

`,
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
        direccio: 'Carrer Girona 31',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Can Cantí <br><br>
			
			   Exemple de llinda amb la inscripció més senzilla: 1743.<br>
			   Podria ser l'any de construcció o probablement de reforma de la casa.
			   Aviat farà 200 anys que es va fer aquesta pedra treballada i polida per aguantar el pes de la casa i permetre una porta més que decent. <br>
			   Compareu-la amb la de la finestra superior molt més estreta.

`,
            es: `Can Cantí <br><br>

			   Ejemplo de dintel con la inscripción más sencilla: 1743.<br>
			   Podría ser el año de construcción o, probablemente, de reforma de la casa.
			   Pronto hará 200 años que se hizo esta piedra trabajada y pulida para aguantar el peso de la casa y permitir una puerta más que decente. <br>
			   Comparadla con la de la ventana superior, mucho más estrecha.

`,
            en: `Can Cantí <br><br>
			
			   An example of a lintel with the simplest possible inscription: 1743.<br>
			   It could be the year the house was built or, more likely, renovated.
			   It will soon be 200 years since this stone was carved and polished to bear the weight of the house and allow for a more than decent door. <br>
			   Compare it with the much narrower one on the window above.

`,
            fr: `Can Cantí <br><br>

			   Exemple de linteau avec l'inscription la plus simple qui soit : 1743.<br>
			   Il pourrait s'agir de l'année de construction ou, plus probablement, de rénovation de la maison.
			   Cela fera bientôt 200 ans que cette pierre a été taillée et polie pour supporter le poids de la maison et permettre une porte plus que convenable. <br>
			   Comparez-la avec celle de la fenêtre au-dessus, beaucoup plus étroite.

`,
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
        direccio: 'Carrer Girona 46',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Can Joanet Zai <br><br>
			
			   La llinda més decorada que veureu avui, fixeu-vos que les pedres que emmarquen la casa estan treballades per fer simular un marc. <br>
			   La serra, que envolta l'any i el nom del constructor, el martell i l'escaire ens indiquen que qui la va fer era mestre de cases. <br>
			   No se'ns acut millor reclam per als propers clients!

`,
            es: `Can Joanet Zai <br><br>

			   El dintel más decorado que veréis hoy; fijaos en que las piedras que enmarcan la puerta están trabajadas para simular un marco. <br>
			   La sierra que rodea el año y el nombre del constructor, el martillo y la escuadra nos indican que quien lo hizo era maestro de obras. <br>
			   ¡No se nos ocurre mejor reclamo para los próximos clientes!

`,
            en: `Can Joanet Zai <br><br>
			
			   The most decorated lintel you'll see today; notice how the stones around the doorway are carved to look like a frame. <br>
			   The saw surrounding the year and the builder's name, together with the hammer and the set square, tell us that whoever made it was a master builder. <br>
			   We can't think of a better advert for future clients!

`,
            fr: `Can Joanet Zai <br><br>

			   Le linteau le plus décoré que vous verrez aujourd'hui ; remarquez que les pierres qui encadrent la porte sont taillées pour imiter un cadre. <br>
			   La scie qui entoure l'année et le nom du constructeur, le marteau et l'équerre nous indiquent que son auteur était maître maçon. <br>
			   Nous ne voyons pas de meilleure publicité pour ses futurs clients !

`,
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
        direccio: 'Carrer Girona 64',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Carrer Girona 64 <br><br>
			
			   Recordeu com de mala idea és fer una llinda de fusta? <br> Doncs aquesta de fusta ens porta la contrària des de mil set-cents… cinquanta-dos? <br>
			   Les de les finestres immediatament superiors també ho són i malgrat estar a la intempèrie ni es veuen bufades ni han començat a doblegar-se.<br>
			   Ens agradaria saber de quina fusta es tracta i us seguim recomanant que per casa vostra en poseu una de pedra (les de les altres dues finestres sí que les han hagut de canviar).
`,
            es: `Calle Girona 64 <br><br>

			   ¿Recordáis lo mala idea que es hacer un dintel de madera? <br> Pues este de madera nos lleva la contraria desde mil setecientos... ¿cincuenta y dos? <br>
			   Los de las ventanas inmediatamente superiores también lo son y, a pesar de estar a la intemperie, ni se ven hinchados ni han empezado a doblarse.<br>
			   Nos gustaría saber de qué madera se trata, y os seguimos recomendando que en vuestra casa pongáis uno de piedra (los de las otras dos ventanas sí que los han tenido que cambiar).
`,
            en: `Carrer Girona 64 <br><br>
			
			   Remember what a bad idea it is to make a wooden lintel? <br> Well, this wooden one has been proving us wrong since seventeen… fifty-two? <br>
			   The ones on the windows just above are wooden too, and despite being exposed to the elements they are neither swollen nor starting to bend.<br>
			   We'd love to know what wood it is, but we still recommend you use stone in your own home (the lintels on the other two windows did have to be replaced).
`,
            fr: `Rue de Girona 64 <br><br>

			   Vous vous souvenez à quel point c'est une mauvaise idée de faire un linteau en bois ? <br> Eh bien, celui-ci nous donne tort depuis mille sept cent… cinquante-deux ? <br>
			   Ceux des fenêtres juste au-dessus sont aussi en bois et, bien qu'exposés aux intempéries, ils ne sont ni gonflés ni en train de se déformer.<br>
			   Nous aimerions savoir de quel bois il s'agit, mais nous vous conseillons toujours d'en mettre un en pierre chez vous (ceux des deux autres fenêtres, eux, ont bien dû être remplacés).
`,
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
        direccio: 'Carrer Girona 38',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Can Cisteller de Dalt <br><br>
			
			   <strong>MIQUEL CUDINA ME FECIT. ANY 1737.</strong><br>
			   No tenim paraules per descriure com ens fa sentir aquesta inscripció. <br>
			   No només consta l'any, també està de forma totalment innecessària la paraula any abans de la data. <br>
			   Però el fet que sigui la casa qui es dirigeix a tu ens fascina. <br>
			   Si les cases poguessin acudir al registre a inscriure's elles mateixes, farien totes una inscripció així.
`,
            es: `Can Cisteller de Dalt <br><br>

			   <strong>MIQUEL CUDINA ME FECIT. ANY 1737.</strong> («Miquel Cudina me hizo. Año 1737.»)<br>
			   No tenemos palabras para describir cómo nos hace sentir esta inscripción. <br>
			   No solo consta el año: además aparece, de forma totalmente innecesaria, la palabra «any» (año) antes de la fecha. <br>
			   Pero que sea la casa quien se dirige a ti nos fascina. <br>
			   Si las casas pudieran acudir al registro a inscribirse ellas mismas, todas harían una inscripción así.
`,
            en: `Can Cisteller de Dalt <br><br>
			
			   <strong>MIQUEL CUDINA ME FECIT. ANY 1737.</strong> ("Miquel Cudina made me. Year 1737.")<br>
			   We have no words to describe how this inscription makes us feel. <br>
			   Not only is the year recorded, but the word "ANY" (year) is also carved, quite unnecessarily, before the date. <br>
			   But what fascinates us is that it is the house itself speaking to you. <br>
			   If houses could go to the registry office and register themselves, they would all carve an inscription like this.
`,
            fr: `Can Cisteller de Dalt <br><br>

			   <strong>MIQUEL CUDINA ME FECIT. ANY 1737.</strong> (« Miquel Cudina m'a faite. Année 1737. »)<br>
			   Nous n'avons pas de mots pour décrire ce que cette inscription nous fait ressentir. <br>
			   Non seulement l'année y figure, mais le mot « ANY » (année) est gravé, de façon tout à fait superflue, devant la date. <br>
			   Mais ce qui nous fascine, c'est que ce soit la maison elle-même qui s'adresse à vous. <br>
			   Si les maisons pouvaient se rendre elles-mêmes au registre pour s'inscrire, elles feraient toutes une inscription comme celle-ci.
`,
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
        direccio: '',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Font Picant   <br> <br>
				La trobareu sortint del poble en direcció Olot veureu un trencall a l'esquerra amb un petit cartell groc: Fonter <br>
			
			    Al fons del petit polígon industrial de Fonter hi ha una àrea de lleure amb la Font Picant com a punt central. <br>
				Fa temps que hi convindria una inversió en manteniment. Trobareu que no és exactament el mateix sabor que la comercialitzada però a casa 
				sempre hem trobat més bona aquesta. Recomanem dur ampolla/garrafa d'aigua per omplir.<br>
				Tingueu en compte que des de la sequera no sempre raja aigua, si ho fa	podeu trobar cua!
 
				`,
            es: `Font Picant   <br> <br>
				La encontraréis saliendo del pueblo en dirección a Olot: veréis un desvío a la izquierda con un pequeño cartel amarillo: Fonter <br>

			    Al fondo del pequeño polígono industrial de Fonter hay un área recreativa con la Font Picant (un manantial de agua con gas natural) como punto central. <br>
				Hace tiempo que le convendría una inversión en mantenimiento. Veréis que no tiene exactamente el mismo sabor que la comercializada, pero en casa
				siempre nos ha gustado más esta. Recomendamos llevar botella o garrafa de agua para llenar.<br>
				Tened en cuenta que desde la sequía no siempre mana agua; ¡si lo hace, podéis encontrar cola!

				`,
            en: `Font Picant   <br> <br>
				To find it, leave the town heading towards Olot and look for a turn-off on the left with a small yellow sign: Fonter <br>
			
			    At the far end of the small Fonter industrial estate there is a picnic area with the Font Picant (a naturally sparkling spring) as its centrepiece. <br>
				It has needed some investment in maintenance for a while. You'll find it doesn't taste exactly like the bottled version, but at home 
				we've always preferred this one. We recommend bringing a bottle to fill up.<br>
				Bear in mind that since the drought the water doesn't always flow, and when it does	you may find a queue!
 
				`,
            fr: `Font Picant   <br> <br>
				Pour la trouver, sortez du village en direction d'Olot : vous verrez un embranchement à gauche avec un petit panneau jaune : Fonter <br>

			    Au fond de la petite zone industrielle de Fonter se trouve une aire de loisirs dont la Font Picant (une source d'eau naturellement gazeuse) est le point central. <br>
				Un investissement dans l'entretien serait bienvenu depuis un moment. Vous trouverez que son goût n'est pas exactement celui de l'eau commercialisée, mais chez nous
				nous avons toujours préféré celle-ci. Nous vous conseillons d'apporter une bouteille ou un bidon à remplir.<br>
				Sachez que depuis la sécheresse l'eau ne coule pas toujours ; et quand elle coule, il peut y avoir la queue !

				`,
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
        direccio: 'Camí de Sant Martí',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Font de la Teula.    <br> <br>
			    La trobareu en una corba a meitat del camí a Sant Martí Sacalm <br><br>
			    Gairebé tothom s'atura en aquest lloc tan bonic, <br>
				a beure i reposar un xic. <br>
				Si ningú no hi deixés merda, <br>
				l'aigua seria més pura  <br>
				i l'herba força més verda. <br>
				L'ajuntament no es fa responsable de la potabilitat de la mateixa, però la trobem molt bona. <br>
				<br>Si heu arribat fins aquí acabeu el camí fins a Sant Martí Sacalm, just sota el Far. <br>
				La composició de masies de pedra soltes fa rememorar el passat medieval.
 
				`,
            es: `Font de la Teula.    <br> <br>
			    Encontraréis la fuente en una curva a mitad del camino a Sant Martí Sacalm <br><br>
			    Gairebé tothom s'atura en aquest lloc tan bonic, (Casi todo el mundo se para en este lugar tan bonito) <br>
				a beure i reposar un xic. (a beber y descansar un poquito) <br>
				Si ningú no hi deixés merda, (Si nadie dejara mierda) <br>
				l'aigua seria més pura  (el agua sería más pura) <br>
				i l'herba força més verda. (y la hierba bastante más verde) <br>
				El ayuntamiento no se hace responsable de la potabilidad del agua, pero a nosotros nos parece muy buena. <br>
				<br>Si habéis llegado hasta aquí, acabad el camino hasta Sant Martí Sacalm, justo debajo de El Far. <br>
				El conjunto de masías de piedra dispersas hace rememorar el pasado medieval.

				`,
            en: `Font de la Teula.    <br> <br>
			    You'll the fountain on a bend halfway along the road to Sant Martí Sacalm <br>
			    Gairebé tothom s'atura en aquest lloc tan bonic, (Almost everyone stops at this lovely spot) <br><br>
				a beure i reposar un xic. (to drink and rest a little bit) <br>
				Si ningú no hi deixés merda, (If nobody left behind their muck) <br>
				l'aigua seria més pura  (the water would be purer) <br>
				i l'herba força més verda. (and the grass a lot more greener) <br>
				The town council takes no responsibility for whether the water is drinkable, but we find it very good. <br>
				<br>If you've made it this far, carry on to Sant Martí Sacalm, just below El Far. <br>
				Its cluster of scattered stone farmhouses brings the medieval past to mind.
 
				`,
            fr: `Font de la Teula.    <br> <br>
			    Vous la trouverez dans un virage, à mi-chemin sur la route de Sant Martí Sacalm <br>
			    Gairebé tothom s'atura en aquest lloc tan bonic, (Presque tout le monde s'arrête en ce si joli lieu) <br><br>
				a beure i reposar un xic. (pour boire et se reposer un peu) <br>
				Si ningú no hi deixés merda, (Si personne n'y laissait de saletés) <br>
				l'aigua seria més pura  (l'eau serait plus pure) <br>
				i l'herba força més verda. (et l'herbe bien plus verte) <br>
				La mairie décline toute responsabilité quant à la potabilité de l'eau, mais nous la trouvons très bonne. <br>
				<br>Si vous êtes arrivés jusqu'ici, poussez jusqu'à Sant Martí Sacalm, juste sous El Far. <br>
				Son ensemble de mas en pierre dispersés évoque le passé médiéval.

				`,
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
        direccio: 'Camí de Santa Brígida: fins dalt de tot!',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Ermita de Santa Brígida  <br> <br>
			
			    Depenent del Monestir de Santa Maria d'Amer va ser reformada al s. XVII i restaurada el 2001 pel grup excursionista d'Amer. <br>
				Edifici senzill d'una sola nau amb volta de canó. És molt reverenciada pels amerencs i les vistes a la vall molt bones. <br>
				Arribar-hi és una mitja excursió on fareu cames! <br>
				Als nens els podeu entretenir a fer-los buscar petxines fossilitzades pel camí.
 
				`,
            es: `Ermita de Santa Brígida  <br> <br>

			    Dependiente del Monasterio de Santa Maria d'Amer, fue reformada en el s. XVII y restaurada en 2001 por el grupo excursionista de Amer. <br>
				Edificio sencillo de una sola nave con bóveda de cañón. La gente de Amer la venera mucho y las vistas al valle son muy buenas. <br>
				¡Llegar hasta allí es media excursión en la que haréis piernas! <br>
				A los niños los podéis entretener haciéndoles buscar conchas fosilizadas por el camino.

				`,
            en: `Hermitage of Santa Brígida  <br> <br>
			
			    Once dependent on the Monastery of Santa Maria d'Amer, it was renovated in the 17th century and restored in 2001 by Amer's hiking club. <br>
				A simple single-nave building with a barrel vault. It is much loved by the people of Amer, and the views over the valley are superb. <br>
				Getting there is a proper little hike that will work your legs! <br>
				You can keep the kids entertained by getting them to look for fossilised shells along the path.
 
				`,
            fr: `Ermitage de Santa Brígida  <br> <br>

			    Dépendant du monastère de Santa Maria d'Amer, il a été remanié au XVIIe siècle et restauré en 2001 par le club de randonnée d'Amer. <br>
				Édifice simple à nef unique voûtée en berceau. Les habitants d'Amer y sont très attachés, et la vue sur la vallée est superbe. <br>
				Y monter est une vraie petite randonnée qui vous fera travailler les jambes ! <br>
				Vous pouvez occuper les enfants en leur faisant chercher des coquillages fossilisés le long du chemin.

				`,
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
        direccio: 'Camí de Sant Climent s/n',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Ermita de Sant Climent d'Amer <br> <br>
			
			    Antigament dedicada a Sant Climent i Sant Julià, documentada del 1066 va ser completament reformada al 1877.<br>
				Era el punt neuràlgic de totes les masies d'aquesta zona. <br>
				Ara us pot semblar desert, però hi havia prou veïns a la zona com per aixecar-se la seva pròpia ermita i evitar anar i tornar d'Amer per anar a missa. <br>
				Penseu que les masies eren habitades per la família (pares, fills i nets) en ocasions també la família extensa (germans i tiets) i sobretot tots els treballadors (bracers i jornalers) 
				que treballaven la terra i tenien cura del bestiar i s'hi estaven amb la família. <br>
				Fins al 1941 tots els batejos, casaments i defuncions es realitzaven aquí.
				
				Arquitectònicament és destacable la porta d'estil neoclàssic amb les dues columnes impostes a banda i banda.<br>
				Recomanem acostar-s'hi, principalment, per l'entorn agrari.
 
				`,
            es: `Ermita de Sant Climent d'Amer <br> <br>

			    Antiguamente dedicada a San Clemente y San Julián, documentada desde 1066, fue completamente reformada en 1877.<br>
				Era el punto neurálgico de todas las masías de esta zona. <br>
				Ahora os puede parecer desierto, pero había suficientes vecinos en la zona como para levantar su propia ermita y evitar ir y volver de Amer para ir a misa. <br>
				Pensad que las masías estaban habitadas por la familia (padres, hijos y nietos), en ocasiones también por la familia extensa (hermanos y tíos) y, sobre todo, por todos los trabajadores (braceros y jornaleros)
				que trabajaban la tierra, cuidaban del ganado y vivían allí con la familia. <br>
				Hasta 1941 todos los bautizos, bodas y defunciones se celebraban aquí.

				Arquitectónicamente destaca la puerta de estilo neoclásico con las dos columnas adosadas a ambos lados.<br>
				Recomendamos acercarse, principalmente, por el entorno agrario.

				`,
            en: `Hermitage of Sant Climent d'Amer <br> <br>
			
			    Formerly dedicated to Saint Clement and Saint Julian, it is documented from 1066 and was completely rebuilt in 1877.<br>
				It was the focal point for all the farmhouses in this area. <br>
				It may look deserted now, but there were once enough neighbours around here to build their own hermitage and avoid travelling to and from Amer to go to Mass. <br>
				Bear in mind that the farmhouses were home to the family (parents, children and grandchildren), sometimes the extended family too (siblings, aunts and uncles), and above all the workers (farmhands and day labourers) 
				who worked the land, looked after the livestock and lived there with the family. <br>
				Until 1941, all baptisms, weddings and funerals were held here.
				
				Architecturally, the neoclassical-style doorway with a column set on either side is noteworthy.<br>
				We recommend going there mainly for the farming landscape.
 
				`,
            fr: `Ermitage de Sant Climent d'Amer <br> <br>

			    Autrefois dédié à saint Clément et saint Julien, attesté dès 1066, il a été entièrement reconstruit en 1877.<br>
				C'était le point névralgique de tous les mas de cette zone. <br>
				L'endroit peut vous sembler désert aujourd'hui, mais il y avait autrefois assez de voisins pour construire leur propre ermitage et éviter l'aller-retour à Amer pour aller à la messe. <br>
				Songez que les mas étaient habités par la famille (parents, enfants et petits-enfants), parfois aussi par la famille élargie (frères, sœurs, oncles et tantes) et surtout par tous les travailleurs (valets de ferme et journaliers)
				qui travaillaient la terre, s'occupaient du bétail et vivaient là avec la famille. <br>
				Jusqu'en 1941, tous les baptêmes, mariages et funérailles avaient lieu ici.

				Sur le plan architectural, on remarque la porte de style néoclassique encadrée de deux colonnes engagées.<br>
				Nous vous conseillons d'y aller surtout pour le paysage agricole.

				`,
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
            fr: 'Gare du Carrilet',
        },
        any: "1895",
        direccio: ' Pujada de estació 15',
        estil: {
            ca: 'Arquitectura popular',
            es: 'Arquitectura popular',
            en: 'Vernacular architecture',
            fr: 'Architecture vernaculaire',
        },
        descripcio: {
            ca: `Estació d'Amer del Carrilet <br> <br>
			
			    Molt ben restaurat, era la parada del tren que unia Olot i Sant Feliu de Guíxols, petit tren d'una única via: popularment el Carrilet. <br>
				Us imagineu una locumotora a vapor anunciant la seva arribada al poble?<br>
				Va ser una revolució en les comunicacions a la comarca, el seu tancament encara és lamentat pels que ho van viure. <br>
				El Carrilet va funcionar del 1895 fins 1966, avui via verda molt usada pels ciclistes.
				L'edifici és actualment dependències municipals.
 
				`,
            es: `Estación del Carrilet de Amer <br> <br>

			    Muy bien restaurada, era la parada del tren que unía Olot y Sant Feliu de Guíxols, un pequeño tren de vía única conocido popularmente como el Carrilet. <br>
				¿Os imagináis una locomotora de vapor anunciando su llegada al pueblo?<br>
				Fue una revolución en las comunicaciones de la comarca; su cierre todavía lo lamentan quienes lo vivieron. <br>
				El Carrilet funcionó de 1895 a 1966; hoy es una vía verde muy utilizada por los ciclistas.
				El edificio alberga actualmente dependencias municipales.

				`,
            en: `Amer Carrilet Station <br> <br>
			
			    Beautifully restored, this was the stop on the railway linking Olot and Sant Feliu de Guíxols, a small single-track train popularly known as the Carrilet. <br>
				Can you imagine a steam locomotive announcing its arrival in town?<br>
				It was a revolution in transport for the region, and its closure is still mourned by those who lived through it. <br>
				The Carrilet ran from 1895 to 1966; today its route is a greenway very popular with cyclists.
				The building currently houses municipal offices.
 
				`,
            fr: `Gare du Carrilet d'Amer <br> <br>

			    Très bien restaurée, c'était l'arrêt du train qui reliait Olot à Sant Feliu de Guíxols, un petit train à voie unique connu sous le nom populaire de Carrilet. <br>
				Imaginez-vous une locomotive à vapeur annonçant son arrivée au village ?<br>
				Ce fut une révolution pour les transports de la région, et sa fermeture est encore regrettée par ceux qui l'ont connue. <br>
				Le Carrilet a circulé de 1895 à 1966 ; son tracé est aujourd'hui une voie verte très fréquentée par les cyclistes.
				Le bâtiment abrite actuellement des services municipaux.

				`,
        },
    },



];

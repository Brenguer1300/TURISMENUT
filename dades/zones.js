// ============================================================
// DADES: Zones del poble de Montbrull
// Cada zona correspon a una àrea clicable del mapa principal
// viewBox del mapa principal: "0 0 100 100"
// ============================================================
//
// Distribució aproximada de les zones al mapa principal:
//
//   0        25        50        75       100
//   ┌─────────┬─────────┬────────────────────┐  0
//   │         │ CENTRE  │                    │
//   │  BARRI  │ HISTÒRIC│    ZONA DEL        │ 20
//   │  DEL    ├─────────┤    CASTELL         │
//   │  MOLÍ   │         │                    │ 45
//   │         │  BARRI  ├────────────────────┤
//   │         │  DE     │                    │ 60
//   └─────────┤  L'EST  │   ZONA DE LES      │
//             │         │   VINYES           │ 80
//             └─────────┴────────────────────┘ 100
//
// Nota: els polígons són rectangles simples per facilitar
// la creació manual del SVG. En producció es poden refinar
// amb formes irregulars que s'ajustin millor al contorn real.
// ============================================================


/**
 * @typedef {Object} Zona
 * @property {string} id        - Identificador únic, en kebab-case
 * @property {Object} nom       - Nom de la zona en els 3 idiomes
 * @property {string} nom.ca    - Nom en català
 * @property {string} nom.es    - Nom en castellà
 * @property {string} nom.en    - Nom en anglès
 * @property {string} arxiuMapa - Ruta al SVG del mapa detallat de la zona
 *                                (viewBox ha de ser "0 0 100 100")
 * @property {string} formaArea - Path SVG de l'àrea clicable al mapa principal.
 *                                Coordenades en unitats del viewBox 0 0 100 100,
 *                                equivalents a percentatges sobre la imatge.
 * @property {{x: number, y: number}} centreEtiqueta
 *                              - Punt on JS col·locarà el text del nom de la zona
 *                                sobre el mapa principal (en unitats viewBox)
 */

/** @type {Zona[]} */
const ZONES = [

    // ----------------------------------------------------------
    // Zona 1: PLAÇA VILA
    // Rectangle: columnes 25-55, files 5-45
    // Conté: l'església, la plaça major i el portal de la muralla
    // ----------------------------------------------------------
    {
        id: 'zona-vila',
        nom: {
            ca: 'Plaça de la Vila',
            es: 'Plaza de la Vila',
            en: 'Vila Town',
        },
        arxiuMapa: 'imatges/mapes-zones/zona-vila.jpg',
        // Polígon rectangular: esquerra-dalt → dreta-dalt → dreta-baix → esquerra-baix
        formaArea: 'M33.9,37.7 L33.9,40.6 L37.3,40.8 L37.5,37.6 Z',
        centreEtiqueta: { x: 34, y: 40 },
    },

    // ----------------------------------------------------------
    // Zona 2: PLAÇA MONESTIR
    // Rectangle: columnes 2-24, files 5-80
    // Conté: el molí fariner, la font del Rec i cases populars
    // ----------------------------------------------------------
    {
        id: 'zona-monestir',
        nom: {
            ca: 'Plaça del Monestir',
            es: 'Plaza del Monasterio',
            en: 'Abby Square',
        },
        arxiuMapa: 'imatges/mapes-zones/zona-monestir.jpg',
        formaArea: 'M30,35.4 L30.3,38 L34.4,37.8 L34.6,35.2 Z',
        centreEtiqueta: { x: 30, y: 33 },
    },

    // ----------------------------------------------------------
    // Zona 3: BARRI DEL PEDREGUET
    // Forma de L invertida: ocupa la part dreta-superior
    // columnes 56-98, files 5-60
    // Conté: les ruïnes del castell i el mirador panoràmic
    // ----------------------------------------------------------
    {
        id: 'zona-pedreguet',
        nom: {
            ca: 'Zona del Castell',
            es: 'Zona del Castillo',
            en: 'Castle Area',
        },
        arxiuMapa: 'imatges/mapes-zones/zona-pedreguet.jpg',
        // Polígon de 5 punts per donar-li una forma lleugerament irregular
        // que segueixi el pendent imaginari del turó
        formaArea: 'M35.2,42.1 L40.7,41.9 L40.7,48.7 L35.6,48.8 Z',
        centreEtiqueta: { x: 57, y: 30 },
    },

    // ----------------------------------------------------------
    // Zona 4: CARRER DE LA BARROCA
    // Rectangle inferior: columnes 25-98, files 61-95
    // Conté: la cooperativa agrícola, el celler modernista i
    //        el mirador de les vinyes
    // ----------------------------------------------------------
    {
        id: 'zona-barroca',
        nom: {
            ca: 'Zona Sant Climent',
            es: 'Zona de Sant Climent',
            en: 'Sant Climent Area',
        },
        arxiuMapa: 'imatges/mapes-zones/zona-barroca.jpg',
        formaArea: 'M85.2,44.6 L86.1,58.2 L98.8,59.1 L98.7,45 Z',
        centreEtiqueta: { x: 61, y: 78 },
    },

];

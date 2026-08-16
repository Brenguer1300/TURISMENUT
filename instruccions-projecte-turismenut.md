# Guia del Projecte: Web de Punts d'Interès d'un Poble
> Document de referència per al desenvolupament — Versió 1.1

---

## 1. Descripció General del Projecte

### Objectiu
Aplicació web estàtica per descobrir els punts d'interès (PI) d'un poble, optimitzada per a dispositius mòbils. L'usuari pot explorar el poble a través d'un mapa interactiu, navegar per zones i consultar el detall de cada punt d'interès.

### Públic objectiu
Visitants i turistes que consulten el mòbil mentre passegen pel poble.

### Tecnologies
- **HTML5** semàntic i accessible
- **CSS3** — fitxer únic `estils.css`, disseny mobile-first
- **JavaScript ES6+** — fitxer principal `funcions.js` + 3 fitxers de dades, sense frameworks
- **Sense servidor** — tots els fitxers són estàtics, funciona obrint `index.html` directament al navegador o allotjat a GitHub Pages / Netlify

### Idiomes suportats
| Codi | Idioma              |
|------|---------------------|
| `ca` | Català (per defecte)|
| `es` | Castellà            |
| `en` | Anglès              |

---

## 2. Arquitectura de Fitxers

```
/arrel-del-projecte
│
├── index.html              ← Pantalla principal: mapa del poble + menú
├── zona.html               ← Pantalla de zona: mapa de zona + PIs marcats
├── punt-interes.html       ← Pantalla de detall d'un PI
│
├── estils.css              ← Tot el CSS de l'aplicació
├── funcions.js             ← Tota la lògica JS de l'aplicació
│
├── dades/
│   ├── zones.js            ← Dades de les zones del poble
│   ├── punts.js            ← Dades dels punts d'interès
│   └── traduccions.js      ← Textos de la UI i seccions del menú
│
└── imatges/
    ├── mapa-poble.svg      ← Mapa principal SVG del poble (amb zones)
    ├── mapes-zones/        ← Mapes SVG de cada zona
    │   ├── zona-centre.svg
    │   └── zona-est.svg
    └── punts-interes/      ← Fotografies dels PIs
        ├── pi-001.jpg
        └── pi-002.jpg
```

### Responsabilitats per fitxer

| Fitxer | Responsabilitat |
|---|---|
| `index.html` | Estructura del mapa + menú lateral |
| `zona.html` | Mapa de zona + llista de PIs filtrats |
| `punt-interes.html` | Fitxa completa d'un PI |
| `estils.css` | Tot el disseny visual i responsive |
| `funcions.js` | Lògica, navegació, i18n, filtre |
| `dades/zones.js` | Definició de zones i àrees del mapa |
| `dades/punts.js` | Tots els punts d'interès amb coordenades relatives |
| `dades/traduccions.js` | Textos de la interfície i contingut de seccions |

### Ordre de càrrega dels `<script>` (important)

Els fitxers de dades s'han de carregar **abans** que `funcions.js`, perquè aquest
els necessita disponibles en memòria. A cada HTML:

```html
<!-- Al final del <body>, en aquest ordre: -->
<script src="dades/traduccions.js"></script>
<script src="dades/zones.js"></script>
<script src="dades/punts.js"></script>
<script src="funcions.js"></script>
```

---

## 3. Estàndards de Codi

### 3.1 Nomenclatura en Català

Tots els comentaris, noms de funcions, variables i documentació han d'estar en **català**.

```javascript
// ✅ CORRECTE
const zonesDelPoble = [];
function carregarPuntInteres(idPunt) { }
let idiomaActual = 'ca';

// ❌ INCORRECTE
const townZones = [];
function loadPointOfInterest(pointId) { }
let currentLanguage = 'ca';
```

### 3.2 Plantilla de Documentació de Funcions (JSDoc en català)

```javascript
/**
 * Carrega i mostra els punts d'interès d'una zona concreta.
 *
 * @param {string} idZona         - Identificador únic de la zona (ex: 'zona-centre')
 * @param {number} filtrEstrelles - Filtre mínim d'estrelles (1, 2 o 3). 0 = tots.
 * @returns {Array<Object>}       - Llista de punts d'interès filtrats i ordenats
 */
function carregarPuntsDeZona(idZona, filtrEstrelles = 0) {
    // implementació...
}
```

### 3.3 Plantilla de Comentaris de Secció

```javascript
// ============================================================
// SECCIÓ: Gestió d'Idiomes
// Responsabilitat: canviar l'idioma actiu i actualitzar la UI
// ============================================================

// --- Constants d'idioma ---
const IDIOMES_DISPONIBLES = ['ca', 'es', 'en'];
const IDIOMA_PER_DEFECTE  = 'ca';
```

### 3.4 Constants de Configuració (al principi de `funcions.js`)

```javascript
// ============================================================
// CONFIGURACIÓ GLOBAL — Modificar aquí per personalitzar
// ============================================================

/** @constant {string} Nom del poble mostrat a la capçalera */
const NOM_POBLE = 'El Poble';

/** @constant {string[]} Idiomes disponibles a l'aplicació */
const IDIOMES_DISPONIBLES = ['ca', 'es', 'en'];

/** @constant {string} Idioma per defecte en carregar */
const IDIOMA_PER_DEFECTE = 'ca';

/** @constant {string} Clau de localStorage per desar l'idioma escollit */
const CLAU_IDIOMA_LOCAL = 'idioma-poble';

/** @constant {Object} Etiquetes de les estrelles de rellevància */
const ETIQUETES_ESTRELLES = {
    1: { ca: 'Recomanat',      es: 'Recomendado',    en: 'Recommended' },
    2: { ca: 'Destacat',       es: 'Destacado',      en: 'Featured'    },
    3: { ca: 'Imprescindible', es: 'Imprescindible', en: 'Must-see'    },
};

/** @constant {string[]} Seccions del menú lateral (en ordre d'aparició) */
const SECCIONS_MENU = [
    'introduccio',
    'historia',
    'rutes',
    'arquitectura',
    'informacio-practica'
];
```

### 3.5 Estil General de Codi

- **Indentació:** 4 espais
- **Cometes:** simples `'` per a cadenes JS
- **Punt i coma:** sempre al final de cada instrucció
- **Noms de funcions:** `camelCase` en català (`carregarZona`, `mostrarDetall`)
- **Noms de constants:** `MAJUSCULES_AMB_GUIÓ_BAIX` (`NOM_POBLE`, `IDIOMA_PER_DEFECTE`)
- **Noms de classes CSS:** `kebab-case` en català (`punt-interes`, `menu-lateral`)
- **IDs HTML:** `kebab-case` en català (`boto-idioma`, `mapa-principal`)

---

## 4. Estructura de Dades (fitxers `.js`)

Les dades s'exporten com a **variables globals** de JavaScript. Això elimina qualsevol
necessitat de `fetch()` o servidor: el navegador les carrega directament com a scripts.

---

### 4.1 `dades/zones.js`

```javascript
// ============================================================
// DADES: Zones del poble
// Cada zona correspon a una àrea clicable del mapa principal
// ============================================================

/**
 * @typedef {Object} Zona
 * @property {string} id          - Identificador únic
 * @property {Object} nom         - Nom en els 3 idiomes
 * @property {string} arxiuMapa   - Ruta al SVG del mapa de la zona
 * @property {string} formaArea   - Path SVG de l'àrea clicable al mapa principal
 *                                  (coordenades en % sobre viewBox 0 0 100 100)
 */

/** @type {Zona[]} */
const ZONES = [
    {
        id: 'zona-centre',
        nom: {
            ca: 'Centre Històric',
            es: 'Centro Histórico',
            en: 'Historic Centre'
        },
        arxiuMapa: 'imatges/mapes-zones/zona-centre.svg',
        // Polígon definit en percentatge sobre el viewBox 0 0 100 100
        formaArea: 'M20,15 L60,15 L60,55 L20,55 Z'
    },
    {
        id: 'zona-est',
        nom: {
            ca: 'Barri de l\'Est',
            es: 'Barrio del Este',
            en: 'East Quarter'
        },
        arxiuMapa: 'imatges/mapes-zones/zona-est.svg',
        formaArea: 'M62,15 L90,15 L90,55 L62,55 Z'
    }
];
```

---

### 4.2 `dades/punts.js`

```javascript
// ============================================================
// DADES: Punts d'interès
// Les coordenades x/y són PERCENTATGES (0-100) sobre el mapa
// de la zona corresponent. Exemple: x:45.5, y:30.2 = 45.5%
// des de l'esquerra i 30.2% des de dalt.
// ============================================================

/**
 * @typedef {Object} PuntInteres
 * @property {string} id       - Identificador únic (ex: 'pi-001')
 * @property {string} idZona   - ID de la zona a la qual pertany
 * @property {number} estrelles - Rellevància: 1 (recomanat), 2 (destacat), 3 (imprescindible)
 * @property {{x: number, y: number}} coordenades - Posició relativa en % sobre el mapa de zona
 * @property {string} imatge   - Ruta a la fotografia del PI
 * @property {Object} nom      - Nom en els 3 idiomes
 * @property {number} any      - Any de construcció
 * @property {Object} estil    - Estil arquitectònic en els 3 idiomes
 * @property {Object} descripcio - Descripció en els 3 idiomes
 */

/** @type {PuntInteres[]} */
const PUNTS_INTERES = [
    {
        id: 'pi-001',
        idZona: 'zona-centre',
        estrelles: 3,
        coordenades: { x: 45.5, y: 30.2 },   // 45.5% des de l'esquerra, 30.2% des de dalt
        imatge: 'imatges/punts-interes/pi-001.jpg',
        nom: {
            ca: 'Església de Sant Pere',
            es: 'Iglesia de San Pedro',
            en: 'Saint Peter\'s Church'
        },
        any: 1342,
        estil: {
            ca: 'Gòtic català',
            es: 'Gótico catalán',
            en: 'Catalan Gothic'
        },
        descripcio: {
            ca: 'Descripció detallada en català...',
            es: 'Descripción detallada en castellano...',
            en: 'Detailed description in English...'
        }
    },
    {
        id: 'pi-002',
        idZona: 'zona-centre',
        estrelles: 2,
        coordenades: { x: 62.0, y: 48.5 },
        imatge: 'imatges/punts-interes/pi-002.jpg',
        nom: {
            ca: 'Plaça Major',
            es: 'Plaza Mayor',
            en: 'Main Square'
        },
        any: 1480,
        estil: {
            ca: 'Renaixement',
            es: 'Renacimiento',
            en: 'Renaissance'
        },
        descripcio: {
            ca: 'Descripció detallada en català...',
            es: 'Descripción detallada en castellano...',
            en: 'Detailed description in English...'
        }
    }
];
```

---

### 4.3 `dades/traduccions.js`

```javascript
// ============================================================
// DADES: Traduccions de la interfície i contingut de seccions
// ============================================================

/**
 * Textos fixos de la UI (botons, etiquetes, missatges)
 * Clau → objecte amb ca/es/en
 * @type {Object}
 */
const UI = {
    'titol-app':          { ca: 'El Poble',         es: 'El Pueblo',       en: 'The Village'     },
    'obrir-menu':         { ca: 'Obrir menú',        es: 'Abrir menú',      en: 'Open menu'       },
    'tancar-menu':        { ca: 'Tancar menú',       es: 'Cerrar menú',     en: 'Close menu'      },
    'tornar':             { ca: 'Tornar',            es: 'Volver',          en: 'Back'            },
    'filtre-tots':        { ca: 'Tots',              es: 'Todos',           en: 'All'             },
    'filtre-estrelles':   { ca: 'Filtre',            es: 'Filtro',          en: 'Filter'          },
    'sense-resultats':    { ca: 'Cap resultat',      es: 'Sin resultados',  en: 'No results'      },
    'any-construccio':    { ca: 'Any:',              es: 'Año:',            en: 'Year:'           },
    'estil-arquitectonic':{ ca: 'Estil:',            es: 'Estilo:',         en: 'Style:'          },
};

/**
 * Noms de les seccions del menú lateral
 * @type {Object}
 */
const NOMS_SECCIONS = {
    'introduccio':         { ca: 'Introducció',        es: 'Introducción',     en: 'Introduction'    },
    'historia':            { ca: 'Història',           es: 'Historia',         en: 'History'         },
    'rutes':               { ca: 'Rutes',              es: 'Rutas',            en: 'Routes'          },
    'arquitectura':        { ca: 'Arquitectura',       es: 'Arquitectura',     en: 'Architecture'    },
    'informacio-practica': { ca: 'Informació pràctica',es: 'Info práctica',    en: 'Practical info'  },
};

/**
 * Contingut de les seccions del menú lateral
 * @type {Object}
 */
const CONTINGUT_SECCIONS = {
    'introduccio': {
        ca: 'Text d\'introducció al poble en català...',
        es: 'Texto de introducción al pueblo en castellano...',
        en: 'Introduction text in English...'
    },
    'historia': {
        ca: 'Història del poble en català...',
        es: 'Historia del pueblo en castellano...',
        en: 'Village history in English...'
    },
    'rutes': {
        ca: 'Descripció de les rutes disponibles...',
        es: 'Descripción de las rutas disponibles...',
        en: 'Description of available routes...'
    },
    'arquitectura': {
        ca: 'Resum del patrimoni arquitectònic...',
        es: 'Resumen del patrimonio arquitectónico...',
        en: 'Summary of architectural heritage...'
    },
    'informacio-practica': {
        ca: 'Horaris, transport, allotjament...',
        es: 'Horarios, transporte, alojamiento...',
        en: 'Opening hours, transport, accommodation...'
    },
};
```

---

## 5. Components Principals i Responsabilitats

### 5.1 Pantalla Principal (`index.html`)

**Estructura HTML:**
```html
<body>
  <nav id="menu-lateral" aria-label="Menú principal" aria-hidden="true">
    <button id="boto-tancar-menu" aria-label="Tancar menú">✕</button>
    <ul>
      <li><button data-seccio="introduccio">Introducció</button></li>
      <li><button data-seccio="historia">Història</button></li>
      <li><button data-seccio="rutes">Rutes</button></li>
      <li><button data-seccio="arquitectura">Arquitectura</button></li>
      <li><button data-seccio="informacio-practica">Informació pràctica</button></li>
    </ul>
  </nav>

  <div id="coberta-menu" aria-hidden="true"></div>  <!-- fons fosc quan menú obert -->

  <main id="contingut-principal">
    <header>
      <button id="boto-menu" aria-label="Obrir menú">☰</button>
      <h1 id="titol-poble"></h1>   <!-- s'omple per JS des de traduccions.js -->
      <div id="selector-idioma" role="group" aria-label="Selecció d'idioma">
        <button data-idioma="ca" aria-pressed="true">CA</button>
        <button data-idioma="es" aria-pressed="false">ES</button>
        <button data-idioma="en" aria-pressed="false">EN</button>
      </div>
    </header>

    <section id="seccio-mapa" aria-label="Mapa del poble">
      <svg id="mapa-poble" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"
           role="img" aria-label="Mapa interactiu del poble">
        <!-- Les zones es generen dinàmicament per JS des de zones.js -->
        <!-- Exemple de zona generada:
        <g class="zona-clicable" data-id-zona="zona-centre"
           tabindex="0" role="button" aria-label="Centre Històric">
          <path d="M20,15 L60,15 L60,55 L20,55 Z" />
          <text x="40" y="35">Centre Històric</text>
        </g>
        -->
      </svg>
    </section>

    <section id="seccio-contingut" aria-live="polite" hidden>
      <!-- Contingut de les seccions del menú (ocult per defecte) -->
    </section>
  </main>

  <script src="dades/traduccions.js"></script>
  <script src="dades/zones.js"></script>
  <script src="dades/punts.js"></script>
  <script src="funcions.js"></script>
</body>
```

**Funcions JS associades:**
- `inicialitzarMapa()` — genera les zones SVG des de `ZONES` i assigna events
- `obrirMenu()` / `tancarMenu()` — control del menú lateral + `aria-hidden`
- `mostrarSeccio(idSeccio)` — mostra contingut d'una secció traduïda
- `navegarAZona(idZona)` — redirigeix a `zona.html?zona=<id>`

---

### 5.2 Pantalla de Zona (`zona.html`)

**Paràmetre d'URL:** `zona.html?zona=zona-centre`

**Funcions JS associades:**
- `obtenirParametreUrl(clau)` — llegeix paràmetres GET
- `carregarDadesZona(idZona)` — filtra `ZONES` per id
- `renderitzarMapaZona(zona, punts)` — pinta el SVG i els marcadors de PIs
- `calcularPosicioMarcador(coordenades, svgElement)` — converteix % a px
- `renderitzarLlistaPunts(punts, filtrEstrelles)` — llista de PIs sota el mapa
- `aplicarFiltrEstrelles(estrellesMinim)` — actualitza llista i marcadors
- `navegarAPuntInteres(idPunt)` — redirigeix a `punt-interes.html?pi=<id>`

**Control del filtre d'estrelles:**
```html
<div id="filtre-estrelles" role="group" aria-label="Filtre per rellevància">
  <button data-estrelles="0" aria-pressed="true">Tots</button>
  <button data-estrelles="1" aria-pressed="false">★</button>
  <button data-estrelles="2" aria-pressed="false">★★</button>
  <button data-estrelles="3" aria-pressed="false">★★★</button>
</div>
```

**Com funcionen les coordenades relatives al SVG:**
```javascript
/**
 * Converteix coordenades relatives (%) a posició absoluta sobre el SVG renderitzat.
 * Permet col·locar marcadors que s'adapten a qualsevol mida de pantalla.
 *
 * @param {{x: number, y: number}} coordenades - Percentatges (0-100)
 * @param {SVGElement} svgElement               - Element SVG del mapa de zona
 * @returns {{cx: number, cy: number}}          - Posició en unitats SVG (viewBox)
 */
function calcularPosicioMarcador(coordenades, svgElement) {
    // Si el viewBox és "0 0 100 100", x/y ja són directament les coordenades
    // Exemple: x:45.5 → cx:45.5 dins el viewBox 0 0 100 100
    return {
        cx: coordenades.x,
        cy: coordenades.y
    };
}
```

> 💡 **Convenció de coordenades:** tots els mapes SVG de zones han de tenir
> `viewBox="0 0 100 100"`. Així `x:45.5` significa literalment el 45.5% de
> l'amplada, i els marcadors escalen automàticament amb qualsevol mida de pantalla.

---

### 5.3 Pantalla Punt d'Interès (`punt-interes.html`)

**Paràmetre d'URL:** `punt-interes.html?pi=pi-001`

**Funcions JS associades:**
- `carregarDadesPunt(idPunt)` — cerca el PI a `PUNTS_INTERES` per id
- `renderitzarFitxaPunt(punt, idioma)` — omple tots els camps de la fitxa
- `renderitzarEstrelles(numEstrelles)` — genera HTML de les estrelles visuals

**Estructura de la fitxa:**
```html
<article id="fitxa-punt-interes">
  <div id="contenidor-imatge">
    <img id="imatge-punt" src="" alt="" />
  </div>
  <section id="detalls-punt">
    <h1 id="nom-punt"></h1>
    <dl>
      <dt data-i18n="any-construccio"></dt>
      <dd id="any-construccio"></dd>
      <dt data-i18n="estil-arquitectonic"></dt>
      <dd id="estil-arquitectonic"></dd>
    </dl>
    <div id="estrelles-rellevancia" role="img" aria-label=""></div>
  </section>
  <section id="descripcio-punt">
    <p id="text-descripcio"></p>
  </section>
  <button id="boto-tornar" onclick="history.back()"></button>
</article>
```

---

## 6. Funcionalitats Principals

### 6.1 Sistema d'Internacionalització (i18n)

```javascript
/**
 * Obté el text traduït d'un camp multilingüe.
 *
 * @param {Object} camp   - Objecte amb claus 'ca', 'es', 'en'
 * @param {string} idioma - Codi d'idioma actiu ('ca', 'es', 'en')
 * @returns {string}      - Text en l'idioma sol·licitat, o català si no existeix
 */
function traduir(camp, idioma) {
    return camp[idioma] || camp[IDIOMA_PER_DEFECTE] || '';
}

/**
 * Canvia l'idioma de tota l'aplicació i actualitza la UI.
 * Desa la preferència a localStorage perquè persisteixi entre pàgines.
 *
 * @param {string} nouIdioma - Codi del nou idioma ('ca', 'es', 'en')
 */
function canviarIdioma(nouIdioma) {
    if (!IDIOMES_DISPONIBLES.includes(nouIdioma)) return;
    localStorage.setItem(CLAU_IDIOMA_LOCAL, nouIdioma);
    idiomaActual = nouIdioma;
    document.documentElement.lang = nouIdioma;
    actualitzarTextosDinamics();
}

/**
 * Llegeix l'idioma desat a localStorage, o retorna el per defecte.
 *
 * @returns {string} - Codi d'idioma actiu
 */
function obtenirIdiomaActual() {
    return localStorage.getItem(CLAU_IDIOMA_LOCAL) || IDIOMA_PER_DEFECTE;
}
```

---

### 6.2 Filtre de Rellevància per Estrelles

```javascript
/**
 * Filtra una llista de PIs per nombre mínim d'estrelles.
 * Si minEstrelles és 0, retorna tots els PIs sense filtrar.
 *
 * @param {Array<Object>} punts        - Llista de PIs a filtrar
 * @param {number}        minEstrelles - Mínim d'estrelles (0 = tots)
 * @returns {Array<Object>}            - PIs que compleixen el filtre, de més a menys estrelles
 */
function filtrarPerEstrelles(punts, minEstrelles = 0) {
    if (minEstrelles === 0) return punts;
    return punts
        .filter(p => p.estrelles >= minEstrelles)
        .sort((a, b) => b.estrelles - a.estrelles);
}
```

---

### 6.3 Navegació entre Pàgines

```javascript
/**
 * Navega a la pàgina de zona amb l'identificador indicat.
 *
 * @param {string} idZona - Identificador de la zona
 */
function navegarAZona(idZona) {
    window.location.href = `zona.html?zona=${encodeURIComponent(idZona)}`;
}

/**
 * Navega a la fitxa d'un punt d'interès.
 *
 * @param {string} idPunt - Identificador del PI
 */
function navegarAPuntInteres(idPunt) {
    window.location.href = `punt-interes.html?pi=${encodeURIComponent(idPunt)}`;
}

/**
 * Llegeix un paràmetre de la URL actual.
 *
 * @param {string} clau - Nom del paràmetre GET
 * @returns {string|null}
 */
function obtenirParametreUrl(clau) {
    const params = new URLSearchParams(window.location.search);
    return params.get(clau);
}
```

---

## 7. Mobile-First i Accessibilitat

### 7.1 Variables CSS (al principi de `estils.css`)

```css
/* ============================================================
   VARIABLES GLOBALS — Modificar aquí per personalitzar
   ============================================================ */
:root {
    /* Colors principals */
    --color-fons:            #f5f0e8;
    --color-text:            #2c2416;
    --color-accent:          #8b4513;
    --color-accent-clar:     #c67d3a;
    --color-superficie:      #ffffff;
    --color-ombra:           rgba(0, 0, 0, 0.15);

    /* Colors estrelles */
    --color-estrella-activa: #f5a623;
    --color-estrella-buida:  #d4c9b0;

    /* Tipografia */
    --mida-text-base:    16px;
    --mida-text-petit:   0.875rem;
    --mida-text-gran:    1.25rem;
    --mida-titol:        1.75rem;

    /* Espaiat */
    --espai-petit:  0.5rem;
    --espai-mitja:  1rem;
    --espai-gran:   1.5rem;
    --espai-extra:  2rem;

    /* Touch targets (mínim 44px per accessibilitat mòbil) */
    --mida-touch:   44px;

    /* Menú lateral */
    --amplada-menu:    280px;
    --durada-animacio: 250ms;
}
```

### 7.2 Estratègia Mobile-First

```css
/* ── Mòbil (base, 0px+) ──────────────────────────────── */
#menu-lateral {
    position: fixed;
    top: 0; left: 0; height: 100%;
    width: var(--amplada-menu);
    transform: translateX(-100%);
    transition: transform var(--durada-animacio) ease;
    z-index: 100;
}

#menu-lateral.obert {
    transform: translateX(0);
}

/* ── Tauleta (768px+) ────────────────────────────────── */
@media (min-width: 768px) {
    #menu-lateral {
        position: relative;
        transform: none;
        height: auto;
    }
}

/* ── Escriptori (1024px+) ────────────────────────────── */
@media (min-width: 1024px) {
    body {
        display: grid;
        grid-template-columns: var(--amplada-menu) 1fr;
    }
}
```

### 7.3 Accessibilitat — Regles Obligatòries

| Element | Requisit |
|---|---|
| Zones del mapa (SVG `<g>`) | `role="button"`, `tabindex="0"`, `aria-label` amb nom de zona |
| Marcadors de PI (SVG `<circle>`) | `role="button"`, `tabindex="0"`, `aria-label` amb nom del PI |
| Botons d'idioma | `aria-pressed="true/false"` actualitzat en canviar |
| Botons de filtre d'estrelles | `aria-pressed="true/false"` actualitzat en filtrar |
| Imatge del PI | `alt` amb el nom del punt d'interès en l'idioma actiu |
| Menú lateral | `aria-hidden="true/false"` · `aria-label="Menú principal"` |
| Seccions dinàmiques | `aria-live="polite"` |
| Estrelles de rellevància | `role="img"` · `aria-label="2 de 3 estrelles"` |

### 7.4 Touch-Friendly

```css
/* Tot element interactiu: mínim 44×44px (Apple/Google guidelines) */
button,
.zona-clicable,
.marcador-punt,
[role="button"] {
    min-width:  var(--mida-touch);
    min-height: var(--mida-touch);
    cursor: pointer;
}

/* Evitar zoom automàtic en focus d'inputs (iOS) */
input, select, textarea {
    font-size: 16px;
}
```

---

## 8. Checklists de Bones Pràctiques

### ✅ `index.html` / `zona.html` / `punt-interes.html`
- [ ] `<html lang="ca">` (actualitzat per JS en canviar d'idioma)
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] `<script>` al final del `<body>` en l'ordre: traduccions → zones → punts → funcions
- [ ] `<noscript>` amb missatge d'avís en els 3 idiomes
- [ ] Tots els `<img>` amb atribut `alt` omplert per JS en l'idioma actiu

### ✅ `estils.css`
- [ ] Variables CSS definides a `:root`
- [ ] Ordre intern: reset → variables → base → components → utilitats → media queries
- [ ] Cap mida de text en `px` fix (usar `rem`)
- [ ] Contrast mínim 4.5:1 per a text normal · 3:1 per a text gran
- [ ] `:focus-visible` visible en tots els elements interactius

### ✅ `funcions.js`
- [ ] Constants de configuració al principi del fitxer
- [ ] Totes les funcions documentades amb JSDoc en català
- [ ] Cap funció fa més d'una cosa
- [ ] `localStorage` amb fallback (`try/catch`) si el navegador el bloqueja

### ✅ `dades/zones.js`
- [ ] Tots els SVG de mapes de zona tenen `viewBox="0 0 100 100"`
- [ ] Cada zona té `id` únic, `nom` en els 3 idiomes i `formaArea` vàlid

### ✅ `dades/punts.js`
- [ ] Cada PI té `id` únic, `idZona` vàlid i `estrelles` entre 1 i 3
- [ ] Coordenades `x` i `y` en percentatge (0.0–100.0), verificades sobre el mapa de zona
- [ ] Tots els camps de text tenen les 3 traduccions (`ca`, `es`, `en`)

### ✅ `dades/traduccions.js`
- [ ] Totes les claus de `UI` i `NOMS_SECCIONS` existents a l'HTML estan definides
- [ ] Tot el contingut de `CONTINGUT_SECCIONS` té les 3 traduccions

### ✅ Accessibilitat general
- [ ] Navegació completa per teclat (Tab, Enter, Escape per tancar menú)
- [ ] Testat en pantalla de 375px d'ample (iPhone SE)
- [ ] Testat amb zoom del navegador al 200%

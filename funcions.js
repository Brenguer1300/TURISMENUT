// ============================================================
// funcions.js — Montbrull, Guia de Punts d'Interès
// ============================================================
// Fitxer únic de lògica JavaScript per a tota l'aplicació.
// S'estructura en seccions independents; cada secció és
// autocontinguda i documentada amb JSDoc en català.
//
// Ordre de càrrega (definit als HTML):
//   1. dades/traduccions.js  → globals: UI, NOMS_SECCIONS, CONTINGUT_SECCIONS
//   2. dades/zones.js        → global: ZONES
//   3. dades/punts.js        → global: PUNTS_INTERES
//   4. funcions.js           ← aquest fitxer
//
// Pàgines que l'utilitzen:
//   · index.html       → inicialitzarPaginaPrincipal()
//   · zona.html        → inicialitzarPaginaZona()       [Part 2]
//   · punt-interes.html → inicialitzarPaginaPuntInteres() [Part 2]
// ============================================================


'use strict';


// ============================================================
// SECCIÓ: Configuració Global
// Responsabilitat: constants que parametritzen tota l'aplicació.
// Modificar aquí per adaptar a un altre poble o idiomes.
// ============================================================

/** @constant {string} Nom del poble mostrat a la capçalera */
const NOM_POBLE = 'Montbrull';

/** @constant {string[]} Codis d'idioma disponibles */
const IDIOMES_DISPONIBLES = ['ca', 'es', 'en'];

/** @constant {string} Idioma per defecte si no n'hi ha cap desat */
const IDIOMA_PER_DEFECTE = 'ca';

/** @constant {string} Clau de localStorage per persistir l'idioma entre pàgines */
const CLAU_IDIOMA_LOCAL = 'montbrull-idioma';

/**
 * @constant {Object} Etiquetes de rellevància per nombre d'estrelles.
 * Coincideixen amb les de traduccions.js però es mantenen aquí
 * per no dependre de l'ordre de càrrega.
 */
const ETIQUETES_ESTRELLES = {
    1: { ca: 'Recomanat',      es: 'Recomendado',    en: 'Recommended' },
    2: { ca: 'Destacat',       es: 'Destacado',      en: 'Featured'    },
    3: { ca: 'Imprescindible', es: 'Imprescindible', en: 'Must-see'    },
};

/**
 * @constant {string} Identificador de la secció especial "Mapa".
 * No té text a CONTINGUT_SECCIONS: en lloc de mostrar text, restaura
 * la vista de mapa de la pàgina i amaga el panell de contingut.
 */
const ID_SECCIO_MAPA = 'mapa';

/** @constant {string[]} IDs de les seccions del menú (ordre d'aparició a l'HTML) */
const SECCIONS_MENU = [
    'introduccio',
    ID_SECCIO_MAPA,
    'historia',
    'rutes',
    'arquitectura',
    'informacio-practica',
];

/** @constant {Object} Emoticones associades a cada secció del menú */
const EMOJIS_SECCIONS = {
    'introduccio':          '📖',
    'mapa':                 '🗺️',
    'historia':             '⚔️',
    'rutes':                '🥾',
    'arquitectura':         '🏛️',
    'informacio-practica':  '🕯️',
	'sardana':   			'🎺',
};

/** @constant {Object} Emoticona per a cada zona del mapa */
const EMOJIS_ZONES = {
    'zona-centre':   '⛪',
    'zona-moli':     '🏚️',
    'zona-castell':  '🏰',
    'zona-vinyes':   '🍇',
};

/** @constant {string} Emoticona per a marcadors normals al mapa de zona */
const EMOJI_MARCADOR_BASE        = '📍';

/** @constant {string} Emoticona per a PIs imprescindibles (3 estrelles) */
const EMOJI_MARCADOR_IMPRESCINDIBLE = '⚜️';


// ============================================================
// SECCIÓ: Estat Global de l'Aplicació
// Responsabilitat: variables mutables d'abast global.
// ============================================================

/** @type {string} Idioma actiu en aquest moment */
let idiomaActual = IDIOMA_PER_DEFECTE;

/** @type {boolean} Indica si el menú lateral és obert */
let menuObert = false;

/**
 * @type {string} Secció del menú activa.
 * Comença sempre a `ID_SECCIO_MAPA`: en carregar qualsevol pàgina
 * es mostra el mapa, no cap panell de text.
 */
let seccioActiva = ID_SECCIO_MAPA;


// ============================================================
// SECCIÓ: Utilitats de localStorage
// Responsabilitat: lectura/escriptura segura amb try/catch,
// per si el navegador bloqueja l'emmagatzematge local.
// ============================================================

/**
 * Desa un valor a localStorage de forma segura.
 * Si el navegador bloqueja localStorage (mode privat, etc.)
 * simplement no fa res i no llança cap error visible.
 *
 * @param {string} clau  - Nom de la clau
 * @param {string} valor - Valor a desar (sempre cadena)
 * @returns {boolean} - `true` si s'ha desat correctament
 */
function desarALocalStorage(clau, valor) {
    try {
        localStorage.setItem(clau, valor);
        return true;
    } catch (error) {
        console.warn(`[Montbrull] No s'ha pogut desar "${clau}" a localStorage:`, error);
        return false;
    }
}

/**
 * Llegeix un valor de localStorage de forma segura.
 *
 * @param {string} clau          - Nom de la clau
 * @param {string} [valorDefecte=''] - Valor a retornar si la clau no existeix o hi ha error
 * @returns {string} - El valor desat, o `valorDefecte`
 */
function llegirDeLocalStorage(clau, valorDefecte = '') {
    try {
        return localStorage.getItem(clau) ?? valorDefecte;
    } catch (error) {
        console.warn(`[Montbrull] No s'ha pogut llegir "${clau}" de localStorage:`, error);
        return valorDefecte;
    }
}


// ============================================================
// SECCIÓ: Sistema d'Internacionalització (i18n)
// Responsabilitat: traducció de textos, canvi d'idioma,
// actualització de tots els elements de la UI.
// ============================================================

/**
 * Obté el text traduït d'un camp multilingüe.
 * Fa fallback al català si l'idioma sol·licitat no existeix.
 *
 * @param {Object} camp   - Objecte amb claus 'ca', 'es', 'en' (provinent de les dades)
 * @param {string} [idioma] - Codi d'idioma; si s'omet, usa `idiomaActual`
 * @returns {string}      - Text en l'idioma indicat, o en català, o cadena buida
 *
 * @example
 *   traduir({ ca: 'Castell', es: 'Castillo', en: 'Castle' })
 *   // → 'Castell' (si idiomaActual === 'ca')
 */
function traduir(camp, idioma) {
    const lang = idioma || idiomaActual;
    return camp[lang] || camp[IDIOMA_PER_DEFECTE] || '';
}

/**
 * Llegeix l'idioma desat a localStorage.
 * Si no n'hi ha cap, retorna l'idioma per defecte.
 * Si el valor desat no és vàlid, el descarta i retorna el per defecte.
 *
 * @returns {string} - Codi d'idioma vàlid ('ca', 'es' o 'en')
 */
function obtenirIdiomaDesat() {
    const desat = llegirDeLocalStorage(CLAU_IDIOMA_LOCAL, IDIOMA_PER_DEFECTE);
    return IDIOMES_DISPONIBLES.includes(desat) ? desat : IDIOMA_PER_DEFECTE;
}

/**
 * ÚNICA font de veritat per a l'estat visual dels botons d'idioma.
 *
 * Sincronitza `aria-pressed` amb `idiomaActual`. El CSS ressalta el botó
 * actiu amb el selector `#selector-idioma button[aria-pressed="true"]`,
 * de manera que aquest únic atribut controla alhora l'estat semàntic
 * (lectors de pantalla) i el visual.
 *
 * Cap altra funció ha de tocar `aria-pressed` d'aquests botons: mantenir
 * una sola via evita que l'estat visual i el semàntic se separin.
 *
 * Es crida des de:
 *   · inicialitzar*()             → en carregar cada pàgina
 *   · actualitzarTextosDinamics() → en canviar d'idioma
 *   · listener 'pageshow'         → en restaurar del bfcache
 *
 * @returns {void}
 */
function sincronitzarBotonsIdioma() {
    document.querySelectorAll('#selector-idioma button[data-idioma]').forEach(boto => {
        const esActiu = boto.dataset.idioma === idiomaActual;
        boto.setAttribute('aria-pressed', esActiu ? 'true' : 'false');
    });
}

/**
 * Substitueix les variables de plantilla en una cadena de text.
 * Format de variable: `{nomVariable}`.
 *
 * @param {string} plantilla  - Cadena amb variables, ex: 'Veure {nom}'
 * @param {Object} variables  - Parells clau/valor, ex: { nom: 'Castell' }
 * @returns {string}          - Cadena amb les variables substituïdes
 *
 * @example
 *   interpolar('Explorar {nom}', { nom: 'Centre Històric' })
 *   // → 'Explorar Centre Històric'
 */
function interpolar(plantilla, variables) {
    return plantilla.replace(/\{(\w+)\}/g, (_, clau) => variables[clau] ?? '');
}

/**
 * Actualitza el text de tots els elements HTML que tenen
 * l'atribut `data-i18n`. El valor de l'atribut és la clau de
 * l'objecte `UI` de traduccions.js.
 *
 * Exemple d'element HTML:
 *   <dt data-i18n="any-construccio"></dt>
 *
 * Només actualitza `textContent`, mai innerHTML, per seguretat.
 */
function actualitzarElementsEstaticsi18n() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const clau = element.dataset.i18n;
        if (UI && UI[clau]) {
            element.textContent = traduir(UI[clau]);
        }
    });
}

/**
 * Actualitza tots els textos dinàmics de la UI per a l'idioma actiu:
 * títol de la pàgina, capçalera, botons del menú, etiquetes ARIA
 * dels botons d'idioma, i qualsevol secció de contingut oberta.
 * Crida a `actualitzarElementsEstaticsi18n()` al final.
 */
function actualitzarTextosDinamics() {
    // --- Títol del document (pestanya del navegador) ---
    document.title = `${NOM_POBLE} — ${traduir(UI['titol-app'])}`;

    // --- Títol del poble a la capçalera ---
    const elTitol = document.getElementById('titol-poble');
    if (elTitol) {
        elTitol.textContent = traduir(UI['titol-app']);
    }

    // --- Botons d'idioma: aria-label traduït + estat actiu ---
    // L'estat `aria-pressed` el gestiona exclusivament
    // sincronitzarBotonsIdioma(); aquí només traduïm les etiquetes.
    const etiquetesIdioma = {
        ca: 'Català',
        es: 'Castellà',
        en: 'English',
    };
    document.querySelectorAll('#selector-idioma button[data-idioma]').forEach(boto => {
        const codi = boto.dataset.idioma;
        boto.setAttribute('aria-label', etiquetesIdioma[codi] || codi);
    });
    sincronitzarBotonsIdioma();

    // --- Etiquetes ARIA del menú ---
    const elMenu = document.getElementById('menu-lateral');
    if (elMenu) {
        elMenu.setAttribute('aria-label', traduir(UI['titol-app']));
    }

    const elBotoMenu = document.getElementById('boto-menu');
    if (elBotoMenu) {
        elBotoMenu.setAttribute('aria-label', traduir(UI['obrir-menu']));
    }

    const elBotoTancar = document.getElementById('boto-tancar-menu');
    if (elBotoTancar) {
        elBotoTancar.setAttribute('aria-label', traduir(UI['tancar-menu']));
    }

    // --- Botons de seccions del menú ---
    // L'emoji s'insereix AQUÍ, dins un <span class="icona-seccio">, llegint
    // EMOJIS_SECCIONS. El CSS NO ha d'afegir-lo també amb ::before o
    // apareixeria duplicat. El span porta aria-hidden perquè els lectors
    // de pantalla llegeixin només el nom de la secció.
    document.querySelectorAll('#menu-lateral [data-seccio]').forEach(boto => {
        const idSeccio = boto.dataset.seccio;
        if (NOMS_SECCIONS && NOMS_SECCIONS[idSeccio]) {
            const emoji = EMOJIS_SECCIONS[idSeccio] || '';
            boto.textContent = '';                           // neteja
            if (emoji) {
                const spanEmoji = document.createElement('span');
                spanEmoji.className = 'icona-seccio';
                spanEmoji.textContent = emoji;
                spanEmoji.setAttribute('aria-hidden', 'true');
                boto.appendChild(spanEmoji);
            }
            boto.appendChild(
                document.createTextNode(traduir(NOMS_SECCIONS[idSeccio]))
            );
        }
    });

    // --- Secció de contingut oberta: re-renderitza en el nou idioma ---
    // La secció "Mapa" no té text, així que s'exclou.
    if (seccioActiva && seccioActiva !== ID_SECCIO_MAPA) {
        renderitzarContingutSeccio(seccioActiva);
    }

    // --- Elements amb data-i18n estàtics ---
    actualitzarElementsEstaticsi18n();

    // --- Atribut lang del document ---
    document.documentElement.lang = idiomaActual;
}

/**
 * Canvia l'idioma de tota l'aplicació i actualitza immediatament la UI.
 * Desa la preferència a localStorage perquè persisteixi entre pàgines.
 * No fa res si `nouIdioma` no és un codi d'idioma vàlid.
 *
 * @param {string} nouIdioma - Codi del nou idioma ('ca', 'es' o 'en')
 */
function canviarIdioma(nouIdioma) {
    if (!IDIOMES_DISPONIBLES.includes(nouIdioma)) {
        console.warn(`[Montbrull] Idioma no vàlid: "${nouIdioma}"`);
        return;
    }
    idiomaActual = nouIdioma;
    desarALocalStorage(CLAU_IDIOMA_LOCAL, nouIdioma);
    actualitzarTextosDinamics();
}


// ============================================================
// SECCIÓ: Menú Lateral
// Responsabilitat: obrir, tancar i gestionar l'accessibilitat
// del drawer de navegació i la coberta fosca de fons.
// ============================================================

/**
 * Obre el menú lateral i actualitza tots els atributs ARIA.
 * Activa la coberta fosca de fons i desa l'element que tenia
 * el focus perquè es pugui restaurar en tancar.
 */
function obrirMenu() {
    if (menuObert) return;
    menuObert = true;

    const elMenu    = document.getElementById('menu-lateral');
    const elCoberta = document.getElementById('coberta-menu');
    const elBoto    = document.getElementById('boto-menu');

    if (elMenu) {
        elMenu.classList.add('obert');
        elMenu.setAttribute('aria-hidden', 'false');

        // Mou el focus al primer botó del menú per a usuaris de teclat
        const primerBoto = elMenu.querySelector('button, [tabindex="0"]');
        if (primerBoto) {
            primerBoto.focus();
        }
    }

    if (elCoberta) {
        elCoberta.classList.add('visible');
        // Petita demora perquè la transició CSS s'apliqui
        requestAnimationFrame(() => elCoberta.classList.add('activa'));
    }

    if (elBoto) {
        elBoto.setAttribute('aria-expanded', 'true');
    }

    // Evita que el contingut de darrere es pugui fer scroll en mòbil
    document.body.style.overflow = 'hidden';
}

/**
 * Tanca el menú lateral i restaura l'estat d'accessibilitat.
 * Torna el focus al botó d'hamburguesa si l'usuari usava el teclat.
 */
function tancarMenu() {
    if (!menuObert) return;
    menuObert = false;

    const elMenu    = document.getElementById('menu-lateral');
    const elCoberta = document.getElementById('coberta-menu');
    const elBoto    = document.getElementById('boto-menu');

    if (elMenu) {
        elMenu.classList.remove('obert');
        elMenu.setAttribute('aria-hidden', 'true');
    }

    if (elCoberta) {
        elCoberta.classList.remove('activa');
        // Espera la transició CSS (260ms) abans de treure 'visible'
        setTimeout(() => elCoberta.classList.remove('visible'), 270);
    }

    if (elBoto) {
        elBoto.setAttribute('aria-expanded', 'false');
        elBoto.focus();   // restaura el focus per a usuaris de teclat
    }

    document.body.style.overflow = '';
}

/**
 * Commuta l'estat del menú lateral (obre si tancat, tanca si obert).
 */
function commutarMenu() {
    menuObert ? tancarMenu() : obrirMenu();
}


// ============================================================
// SECCIÓ: Vistes de la Pàgina (mapa ↔ contingut)
// Responsabilitat: alternar entre la vista de mapa (per defecte)
// i el panell de text d'una secció del menú. Només una de les
// dues és visible alhora, de manera que l'usuari no ha de fer
// scroll per llegir el contingut.
// ============================================================

/**
 * Recull els elements que formen la "vista de mapa" de la pàgina actual.
 * Cada pàgina en té els seus; la funció ignora els que no existeixen,
 * de manera que la mateixa lògica serveix per a les tres pàgines.
 *
 *   index.html        → #seccio-mapa
 *   zona.html         → #capçalera-zona, #seccio-mapa-zona,
 *                       #barra-filtre, #seccio-llista
 *   punt-interes.html → (cap: no té mapa)
 *
 * @returns {HTMLElement[]} - Elements presents a la pàgina actual
 */
function obtenirElementsVistaMapa() {
    const IDS_VISTA_MAPA = [
        'seccio-mapa',        // mapa del poble (index.html)
        'capçalera-zona',     // capçalera amb nom de zona (zona.html)
        'seccio-mapa-zona',   // mapa de la zona (zona.html)
        'barra-filtre',       // filtre d'estrelles (zona.html)
        'seccio-llista',      // llista de PIs (zona.html)
    ];
    return IDS_VISTA_MAPA
        .map(id => document.getElementById(id))
        .filter(Boolean);
}

/**
 * Indica si la pàgina actual té una vista de mapa pròpia.
 * `punt-interes.html` no en té: allà l'opció "Mapa" del menú
 * ha de navegar a la pàgina principal.
 *
 * @returns {boolean}
 */
function paginaTeVistaMapa() {
    return obtenirElementsVistaMapa().length > 0;
}

/**
 * Mostra o amaga tots els elements de la vista de mapa alhora.
 *
 * @param {boolean} visible - `true` per mostrar-los, `false` per amagar-los
 */
function commutarVistaMapa(visible) {
    obtenirElementsVistaMapa().forEach(element => {
        element.hidden = !visible;
    });
}

/**
 * Genera el HTML de contingut per a una secció del menú lateral.
 * Llegeix el text de `CONTINGUT_SECCIONS` i el nom de `NOMS_SECCIONS`
 * (tots dos de traduccions.js), tots en l'idioma actiu.
 *
 * @param {string} idSeccio - Identificador de la secció (ex: 'historia')
 * @returns {string}        - HTML intern per inserir a `#seccio-contingut`
 */
function generarHTMLSeccio(idSeccio) {
    const nomSeccio     = NOMS_SECCIONS[idSeccio]     ? traduir(NOMS_SECCIONS[idSeccio])     : idSeccio;
    const textContingut = CONTINGUT_SECCIONS[idSeccio] ? traduir(CONTINGUT_SECCIONS[idSeccio]) : '';
    const emoji         = EMOJIS_SECCIONS[idSeccio] || '';

    return `<h2>${emoji ? emoji + ' ' : ''}${nomSeccio}</h2>${textContingut}`;
}

/**
 * Actualitza el contingut de `#seccio-contingut` per a la secció activa.
 * Separat de `mostrarSeccio` perquè es crida també des de `canviarIdioma`.
 * No fa res per a la secció especial "Mapa", que no té text.
 *
 * @param {string} idSeccio - Identificador de la secció
 */
function renderitzarContingutSeccio(idSeccio) {
    if (idSeccio === ID_SECCIO_MAPA) return;
    const elSeccio = document.getElementById('seccio-contingut');
    if (!elSeccio) return;
    elSeccio.innerHTML = generarHTMLSeccio(idSeccio);
}

/**
 * Marca visualment quin botó del menú està actiu i actualitza
 * els atributs ARIA de tots els botons de secció.
 *
 * @param {string} idActiu - Identificador de la secció activa
 */
function actualitzarEstatBotonsMenu(idActiu) {
    document.querySelectorAll('#menu-lateral [data-seccio]').forEach(boto => {
        const esAquest = boto.dataset.seccio === idActiu;
        boto.setAttribute('aria-current', esAquest ? 'true' : 'false');
        // Les seccions de text despleguen un panell; la de mapa no
        if (boto.dataset.seccio !== ID_SECCIO_MAPA) {
            boto.setAttribute('aria-expanded', esAquest ? 'true' : 'false');
        }
    });
}

/**
 * Restaura la vista de mapa: mostra el mapa (i, a zona.html, també el
 * filtre i la llista de PIs) i amaga el panell de text.
 * És la vista per defecte en carregar qualsevol pàgina amb mapa.
 */
function mostrarVistaMapa() {
    commutarVistaMapa(true);

    const elSeccio = document.getElementById('seccio-contingut');
    if (elSeccio) {
        elSeccio.hidden = true;
        elSeccio.innerHTML = '';
    }

    seccioActiva = ID_SECCIO_MAPA;
    actualitzarEstatBotonsMenu(ID_SECCIO_MAPA);

    // Torna a dalt de tot perquè el mapa quedi enquadrat
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Mostra el panell de text d'una secció del menú i amaga la vista de mapa,
 * de manera que el text ocupi tota la pantalla sense necessitat de scroll.
 *
 * Casos especials:
 *   · Si `idSeccio` és "Mapa" → restaura la vista de mapa.
 *   · Si es torna a prémer la secció ja activa → també torna al mapa
 *     (així sempre queda alguna cosa visible).
 *   · A `punt-interes.html`, que no té mapa, "Mapa" navega a `index.html`.
 *
 * @param {string} idSeccio - Identificador de la secció (ex: 'historia')
 */
function mostrarSeccio(idSeccio) {
    // --- Cas 1: secció especial "Mapa" ---
    if (idSeccio === ID_SECCIO_MAPA) {
        if (paginaTeVistaMapa()) {
            mostrarVistaMapa();
        } else {
            // punt-interes.html no té mapa: torna a la pàgina principal
            window.location.href = 'index.html';
            return;
        }
        tancarMenuEnMobil();
        return;
    }

    // --- Cas 2: no som a la pàgina principal ---
    // Des de zona.html o punt-interes.html, les seccions del menú
    // (història, gastronomia, etc.) no s'han d'obrir sobre la pàgina
    // actual perquè afegirien text sota el mapa/fitxa. Redirigim a
    // index.html amb un query param i allà s'obrirà la secció.
    if (obtenirPaginaActual() !== 'index.html') {
        window.location.href = `index.html?seccio=${encodeURIComponent(idSeccio)}`;
        return;
    }

    const elSeccio = document.getElementById('seccio-contingut');
    if (!elSeccio) return;

    // --- Cas 3: es torna a prémer la secció activa → torna al mapa ---
    if (seccioActiva === idSeccio && paginaTeVistaMapa()) {
        mostrarVistaMapa();
        tancarMenuEnMobil();
        return;
    }

    // --- Cas 4: mostra el text de la secció i amaga el mapa ---
    commutarVistaMapa(false);

    seccioActiva = idSeccio;
    renderitzarContingutSeccio(idSeccio);
    elSeccio.hidden = false;

    actualitzarEstatBotonsMenu(idSeccio);

    // Força la re-animació d'entrada
    elSeccio.classList.remove('entrar');
    void elSeccio.offsetWidth;   // reflow per reiniciar l'animació
    elSeccio.classList.add('entrar');

    // El text comença a dalt de tot
    window.scrollTo({ top: 0, behavior: 'smooth' });

    tancarMenuEnMobil();
}

/**
 * Tanca el menú lateral si som en mòbil (amplada < 768px), perquè
 * el drawer no tapi el contingut que l'usuari acaba de seleccionar.
 */
function tancarMenuEnMobil() {
    if (menuObert && window.innerWidth < 768) {
        tancarMenu();
    }
}


// ============================================================
// SECCIÓ: Esdeveniments del Menú i Idiomes
// Responsabilitat: assignar tots els listeners de la
// capçalera i el drawer, inclosa la navegació per teclat.
// ============================================================

/**
 * Assigna els listeners d'events per a:
 *   - Botó hamburguesa (obrir menú)
 *   - Botó tancar menú
 *   - Coberta fosca (clic per tancar)
 *   - Botons d'idioma
 *   - Botons de seccions del menú
 *   - Tecla Escape (tanca el menú si és obert)
 *   - Tecla Enter/Space sobre les zones del mapa (accessibilitat)
 */
function assignarEsdevenimentsUI() {

    // --- Botó hamburguesa ---
    const elBotoMenu = document.getElementById('boto-menu');
    if (elBotoMenu) {
        elBotoMenu.addEventListener('click', commutarMenu);
    }

    // --- Botó tancar menú ---
    const elBotoTancar = document.getElementById('boto-tancar-menu');
    if (elBotoTancar) {
        elBotoTancar.addEventListener('click', tancarMenu);
    }

    // --- Coberta fosca: clic fora del menú per tancar ---
    const elCoberta = document.getElementById('coberta-menu');
    if (elCoberta) {
        elCoberta.addEventListener('click', tancarMenu);
    }

    // --- Botons d'idioma ---
    document.querySelectorAll('#selector-idioma button[data-idioma]').forEach(boto => {
        boto.addEventListener('click', () => canviarIdioma(boto.dataset.idioma));
    });

    // --- Botons de seccions del menú ---
    document.querySelectorAll('#menu-lateral [data-seccio]').forEach(boto => {
        boto.addEventListener('click', () => mostrarSeccio(boto.dataset.seccio));
    });

    // --- Tecla Escape: tanca el menú ---
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menuObert) {
            tancarMenu();
        }
    });

    // --- Canvi de mida de finestra: tanca el menú si s'obre en tauleta ---
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && menuObert) {
            tancarMenu();
        }
    });
}


// ============================================================
// SECCIÓ: Inicialització del Mapa Principal (index.html)
// Responsabilitat: afegir events de clic i teclat a les zones
// del SVG que ja existeixen hardcoded a l'HTML.
// ============================================================

/**
 * Afegeix events de clic, teclat i hover a totes les zones
 * clicables del mapa SVG principal (`#mapa-poble`).
 * Les zones ja estan a l'HTML; aquesta funció només les activa.
 * La navegació a zona.html la fa `navegarAZona()`.
 */
function inicialitzarZonesDelMapa() {
    const elMapa = document.getElementById('mapa-poble');
    if (!elMapa) return;

    elMapa.querySelectorAll('.zona-clicable[data-id-zona]').forEach(zona => {
        const idZona = zona.dataset.idZona;

        // Clic → navega a zona.html
        zona.addEventListener('click', () => navegarAZona(idZona));

        // Enter o Space → idem (accessibilitat teclat per a role="button")
        zona.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();   // evita scroll amb Space
                navegarAZona(idZona);
            }
        });

        // Actualitza aria-label amb el nom traduït si existeix la zona
        const dadesZona = (typeof ZONES !== 'undefined')
            ? ZONES.find(z => z.id === idZona)
            : null;

        if (dadesZona) {
            const nomTraduït = traduir(dadesZona.nom);
            const plantilla   = UI['aria-zona-boto']
                ? traduir(UI['aria-zona-boto'])
                : 'Explorar {nom}';
            zona.setAttribute('aria-label', interpolar(plantilla, { nom: nomTraduït }));
        }
    });
}


// ============================================================
// SECCIÓ: Navegació entre Pàgines
// Responsabilitat: redirigir a zona.html i punt-interes.html
// amb els paràmetres correctes a la URL.
// ============================================================

/**
 * Navega a la pàgina de zona passant l'id com a paràmetre GET.
 *
 * @param {string} idZona - Identificador de la zona (ex: 'zona-centre')
 */
function navegarAZona(idZona) {
    window.location.href = `zona.html?zona=${encodeURIComponent(idZona)}`;
}

/**
 * Navega a la fitxa d'un punt d'interès passant l'id com a paràmetre GET.
 *
 * @param {string} idPunt - Identificador del PI (ex: 'pi-001')
 */
function navegarAPuntInteres(idPunt) {
    window.location.href = `punt-interes.html?pi=${encodeURIComponent(idPunt)}`;
}

/**
 * Llegeix el valor d'un paràmetre de la query string de la URL actual.
 *
 * @param {string} clau - Nom del paràmetre GET (ex: 'zona', 'pi')
 * @returns {string|null} - Valor del paràmetre, o `null` si no existeix
 *
 * @example
 *   // URL: zona.html?zona=zona-centre
 *   obtenirParametreUrl('zona')   // → 'zona-centre'
 *   obtenirParametreUrl('pi')     // → null
 */
function obtenirParametreUrl(clau) {
    const params = new URLSearchParams(window.location.search);
    return params.get(clau);
}


// ============================================================
// SECCIÓ: Detecció de Pàgina Activa
// Responsabilitat: determinar quin HTML s'ha carregat per
// cridar la funció d'inicialització correcta.
// ============================================================

/**
 * Retorna el nom del fitxer HTML de la pàgina actual, en minúscules.
 * Exemples: 'index.html', 'zona.html', 'punt-interes.html'.
 * Per a URLs que acaben en '/' retorna 'index.html' per convenció.
 *
 * @returns {string} - Nom del fitxer HTML actiu
 */
function obtenirPaginaActual() {
    const ruta = window.location.pathname;
    const nom  = ruta.split('/').pop().toLowerCase();
    return nom === '' ? 'index.html' : nom;
}


// ============================================================
// SECCIÓ: Inicialització Principal (index.html)
// Responsabilitat: orquestrar tot l'arrancada de la pàgina
// principal: idioma, UI, mapa i events.
// ============================================================

/**
 * Punt d'entrada per a `index.html`.
 * S'executa quan el DOM és completament carregat.
 *
 * Seqüència:
 *   1. Llegeix l'idioma desat i l'activa
 *   2. Actualitza tots els textos de la UI
 *   3. Assigna els events de capçalera i menú
 *   4. Activa les zones del mapa SVG
 */
function inicialitzarPaginaPrincipal() {
    // 1. Idioma: llegeix localStorage i corregeix els botons hardcoded de l'HTML
    idiomaActual = obtenirIdiomaDesat();
    sincronitzarBotonsIdioma();

    // 2. Textos de la UI
    actualitzarTextosDinamics();

    // 3. Events de la interfície
    assignarEsdevenimentsUI();

    // 4. Zones del mapa
    inicialitzarZonesDelMapa();

    // 5. Vista per defecte: el mapa (marca el botó "Mapa" del menú
    //    i s'assegura que el panell de text estigui amagat)
    mostrarVistaMapa();

    // 6. Si venim d'una altra pàgina amb ?seccio=<id>, obrim aquella
    //    secció directament (permet navegar des de zona.html o
    //    punt-interes.html cap a una secció del menú principal).
    const seccioSolicitada = obtenirParametreUrl('seccio');
    if (seccioSolicitada && NOMS_SECCIONS && NOMS_SECCIONS[seccioSolicitada]) {
        mostrarSeccio(seccioSolicitada);
    }

    console.info(`[Montbrull] Pàgina principal inicialitzada. Idioma: ${idiomaActual}`);
}


// ============================================================
// SECCIÓ: Utilitats de Renderització Compartides
// Responsabilitat: funcions auxiliars reutilitzables per
// zona.html i punt-interes.html.
// ============================================================

/**
 * Genera el HTML de les estrelles de rellevància d'un PI.
 * Les estrelles actives usen la classe `.estrella-activa`,
 * les buides `.estrella-buida`. Sempre en renderitza 3.
 *
 * @param {number} numEstrelles - Nombre d'estrelles actives (1, 2 o 3)
 * @returns {string}            - HTML intern per inserir al contenidor d'estrelles
 *
 * @example
 *   renderitzarEstrelles(2)
 *   // → '<span class="estrella-activa" aria-hidden="true">★</span>
 *   //    <span class="estrella-activa" aria-hidden="true">★</span>
 *   //    <span class="estrella-buida"  aria-hidden="true">★</span>'
 */
function renderitzarEstrelles(numEstrelles) {
    let html = '';
    for (let i = 1; i <= 3; i++) {
        const classe = i <= numEstrelles ? 'estrella-activa' : 'estrella-buida';
        html += `<span class="${classe}" aria-hidden="true">★</span>`;
    }
    return html;
}

/**
 * Genera el text ARIA descriptiu per al bloc d'estrelles.
 * Usa la plantilla `UI['aria-estrelles']` de traduccions.js.
 *
 * @param {number} numEstrelles - Nombre d'estrelles (1, 2 o 3)
 * @returns {string}            - Text llegible per lectors de pantalla
 *
 * @example
 *   etiquetaAriaEstrelles(3)  // → '3 de 3 estrelles'  (en català)
 */
function etiquetaAriaEstrelles(numEstrelles) {
    if (UI && UI['aria-estrelles']) {
        return interpolar(traduir(UI['aria-estrelles']), { n: numEstrelles });
    }
    return `${numEstrelles} / 3`;
}

/**
 * Genera el HTML del badge de rellevància (text + estrelles).
 * S'usa a la fitxa del PI i, opcionalment, a les targetes.
 *
 * @param {number} numEstrelles - Nombre d'estrelles (1, 2 o 3)
 * @returns {string}            - HTML del badge
 */
function renderitzarBadgeRellevancia(numEstrelles) {
    const etiqueta = ETIQUETES_ESTRELLES[numEstrelles]
        ? traduir(ETIQUETES_ESTRELLES[numEstrelles])
        : `${numEstrelles}★`;
    const emoji = numEstrelles === 3 ? '⚜️' : numEstrelles === 2 ? '✦' : '·';
    return `<span class="badge-rellevancia">${emoji} ${etiqueta}</span>`;
}

/**
 * Filtra una llista de PIs per nombre mínim d'estrelles.
 * Retorna una còpia ordenada de més a menys rellevants.
 * Si `minEstrelles` és 0, retorna tots sense filtrar ni reordenar.
 *
 * @param {Array<Object>} punts        - Llista de PIs a filtrar
 * @param {number}        minEstrelles - Mínim d'estrelles (0 = tots)
 * @returns {Array<Object>}            - PIs filtrats, de més a menys estrelles
 */
function filtrarPerEstrelles(punts, minEstrelles = 0) {
    if (minEstrelles === 0) return punts;
    return punts
        .filter(p => p.estrelles >= minEstrelles)
        .sort((a, b) => b.estrelles - a.estrelles);
}


// ============================================================
// SECCIÓ: Pàgina de Zona — Dades i Mapa (zona.html)
// Responsabilitat: llegir la zona de la URL, obtenir les dades
// i renderitzar el mapa SVG amb marcadors de PIs.
// ============================================================

/**
 * Cerca una zona a l'array ZONES per identificador.
 *
 * @param {string} idZona - Identificador de la zona
 * @returns {Object|null} - Objecte Zona, o `null` si no existeix
 */
function carregarDadesZona(idZona) {
    if (typeof ZONES === 'undefined') {
        console.error('[Montbrull] ZONES no està definit. Comprova zones.js.');
        return null;
    }
    return ZONES.find(z => z.id === idZona) || null;
}

/**
 * Retorna tots els PIs que pertanyen a una zona concreta.
 * Preserva l'ordre original de PUNTS_INTERES (per estrelles desc,
 * tal com estan ordenats al fitxer).
 *
 * @param {string} idZona - Identificador de la zona
 * @returns {Array<Object>} - PIs de la zona, o array buit si cap
 */
function obtenirPuntsDeZona(idZona) {
    if (typeof PUNTS_INTERES === 'undefined') {
        console.error('[Montbrull] PUNTS_INTERES no està definit. Comprova punts.js.');
        return [];
    }
    return PUNTS_INTERES.filter(p => p.idZona === idZona);
}

/**
 * Converteix coordenades relatives (percentatge 0–100) a unitats
 * del viewBox SVG. Com que tots els mapes de zona usen
 * `viewBox="0 0 100 100"`, la conversió és directa (1:1).
 * Aquesta funció existeix com a capa d'abstracció: si algun mapa
 * usés un viewBox diferent, caldria adaptar-la aquí.
 *
 * @param {{x: number, y: number}} coordenades - Posició en % (0.0–100.0)
 * @param {SVGElement}             _svgElement  - Reservat per a futures extensions
 * @returns {{cx: number, cy: number}}          - Coordenades en unitats viewBox
 */
function calcularPosicioMarcador(coordenades, _svgElement) {
    return {
        cx: coordenades.x,
        cy: coordenades.y,
    };
}

/**
 * Crea un element `<g>` SVG que actua com a marcador interactiu
 * per a un punt d'interès sobre el mapa de zona.
 *
 * Estructura generada:
 *   <g class="marcador-punt" data-id-punt="pi-001" data-estrelles="3"
 *      tabindex="0" role="button" aria-label="Veure Església de Sant Pere">
 *     <circle cx="38" cy="22" r="3.5" class="cercle-marcador"/>
 *     <text x="38" y="23.2" class="text-marcador">⚜️</text>
 *   </g>
 *
 * @param {Object} punt  - Objecte PuntInteres
 * @param {number} cx    - Coordenada X en unitats viewBox
 * @param {number} cy    - Coordenada Y en unitats viewBox
 * @returns {SVGGElement} - Element <g> llest per inserir al SVG
 */
function crearElementMarcador(punt, cx, cy) {
    const espaiNoms = 'http://www.w3.org/2000/svg';

    // --- Grup contenidor ---
    const g = document.createElementNS(espaiNoms, 'g');
    g.classList.add('marcador-punt');
    g.dataset.idPunt    = punt.id;
    g.dataset.estrelles = punt.estrelles;
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');

    // Etiqueta ARIA amb nom traduït
    const nomPunt     = traduir(punt.nom);
    const plantilla   = UI && UI['aria-marcador-pi']
        ? traduir(UI['aria-marcador-pi'])
        : 'Veure {nom}';
    g.setAttribute('aria-label', interpolar(plantilla, { nom: nomPunt }));

    // --- Tooltip nadiu del navegador ---
    // Sense aquest <title> fill, el navegador puja per l'arbre SVG i mostra
    // el <title> del <svg> pare (el nom de la zona), fent que TOTS els
    // marcadors ensenyin el mateix text en passar-hi el cursor per sobre.
    const titolMarcador = document.createElementNS(espaiNoms, 'title');
    titolMarcador.textContent = nomPunt;
    g.appendChild(titolMarcador);

    // --- Cercle de fons (hit area visible) ---
    const radi = punt.estrelles === 3 ? 4.0 : punt.estrelles === 2 ? 3.2 : 2.6;

    const cercle = document.createElementNS(espaiNoms, 'circle');
    cercle.setAttribute('cx', cx);
    cercle.setAttribute('cy', cy);
    cercle.setAttribute('r', radi);
    cercle.classList.add('cercle-marcador');
    g.appendChild(cercle);

    // --- Text emoji ---
    const emoji = punt.estrelles === 3 ? EMOJI_MARCADOR_IMPRESCINDIBLE : EMOJI_MARCADOR_BASE;
    const midaFont = punt.estrelles === 3 ? 5.5 : punt.estrelles === 2 ? 4.5 : 3.8;

    const text = document.createElementNS(espaiNoms, 'text');
    text.setAttribute('x', cx);
    text.setAttribute('y', cy + midaFont * 0.38);   // centrat visual vertical
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-size', midaFont);
    text.setAttribute('aria-hidden', 'true');
    text.classList.add('text-marcador');
    text.textContent = emoji;
    g.appendChild(text);

    return g;
}

/**
 * Alçada de viewBox per defecte si una zona no en declara cap.
 * 63.14 correspon a una imatge apaïsada de proporció ~1351×853,
 * la mateixa del mapa principal.
 * @constant {number}
 */
const ALCADA_VIEWBOX_PER_DEFECTE = 63.14;

/**
 * Renderitza el mapa d'una zona: crea el SVG, hi carrega la imatge de
 * fons (`zona.arxiuMapa`, que pot ser .jpg, .png o .svg) i hi superposa
 * els marcadors dels punts d'interès.
 *
 * El viewBox de cada zona és `0 0 100 <alcadaViewBox>`, on l'alçada
 * ve del camp `alcadaViewBox` de zones.js i s'ha de calcular així:
 *
 *     alcadaViewBox = 100 × (alçadaPx / ampladaPx)
 *
 * D'aquesta manera la imatge no es deforma i les coordenades dels PIs
 * (`coordenades.x` de 0 a 100, `coordenades.y` de 0 a alcadaViewBox)
 * hi encaixen exactament. Fes servir eina-coordenades.html per obtenir
 * tots dos valors carregant-hi la imatge de la zona.
 *
 * Si la imatge no es pot carregar (fitxer inexistent, o CORS en obrir
 * l'HTML directament des del disc), mostra un fons neutre amb el nom
 * de la zona, de manera que els marcadors segueixin sent utilitzables.
 *
 * @param {Object}         zona  - Objecte Zona (de zones.js)
 * @param {Array<Object>}  punts - PIs que pertanyen a la zona
 */
function renderitzarMapaZona(zona, punts) {
    const elContenidor = document.getElementById('contenidor-mapa-zona');
    if (!elContenidor) return;

    const espaiNoms = 'http://www.w3.org/2000/svg';

    // Proporció declarada per la zona, o la per defecte
    const alcada = zona.alcadaViewBox || ALCADA_VIEWBOX_PER_DEFECTE;

    // Reserva l'espai abans de pintar res, per evitar salts de layout
    elContenidor.style.aspectRatio = `100 / ${alcada}`;

    // --- SVG base ---
    const svg = document.createElementNS(espaiNoms, 'svg');
    svg.setAttribute('id', 'mapa-zona');
    svg.setAttribute('viewBox', `0 0 100 ${alcada}`);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', traduir(zona.nom));
    svg.setAttribute('xmlns', espaiNoms);

    const titolSVG = document.createElementNS(espaiNoms, 'title');
    titolSVG.textContent = traduir(zona.nom);
    svg.appendChild(titolSVG);

    // --- Fons neutre: visible mentre carrega la imatge i si aquesta falla ---
    const rect = document.createElementNS(espaiNoms, 'rect');
    rect.setAttribute('x', '0');
    rect.setAttribute('y', '0');
    rect.setAttribute('width', '100');
    rect.setAttribute('height', alcada);
    rect.setAttribute('fill', '#d8cdb0');
    svg.appendChild(rect);

    // --- Imatge de fons de la zona ---
    // preserveAspectRatio="none": el height ja respecta la proporció real,
    // així que la imatge omple el rectangle sense marges ni retalls.
    const img = document.createElementNS(espaiNoms, 'image');
    img.setAttribute('href', zona.arxiuMapa);
    img.setAttribute('x', '0');
    img.setAttribute('y', '0');
    img.setAttribute('width', '100');
    img.setAttribute('height', alcada);
    img.setAttribute('preserveAspectRatio', 'none');

    img.addEventListener('error', () => {
        console.warn(`[Montbrull] No s'ha pogut carregar el mapa de zona: ${zona.arxiuMapa}`);
        img.remove();
        const textFallback = document.createElementNS(espaiNoms, 'text');
        textFallback.setAttribute('x', '50');
        textFallback.setAttribute('y', alcada / 2);
        textFallback.setAttribute('text-anchor', 'middle');
        textFallback.setAttribute('dominant-baseline', 'middle');
        textFallback.setAttribute('font-size', '5');
        textFallback.setAttribute('font-family', "'Cinzel', serif");
        textFallback.setAttribute('fill', '#5c4a2a');
        textFallback.setAttribute('opacity', '0.45');
        textFallback.textContent = traduir(zona.nom);
        svg.insertBefore(textFallback, svg.querySelector('.marcadors-zona'));
    }, { once: true });

    svg.appendChild(img);

    // --- Grup de marcadors, sempre per damunt de la imatge ---
    const grupMarcadors = document.createElementNS(espaiNoms, 'g');
    grupMarcadors.classList.add('marcadors-zona');
    svg.appendChild(grupMarcadors);

    punts.forEach(punt => {
        const { cx, cy } = calcularPosicioMarcador(punt.coordenades, svg);
        const marcador   = crearElementMarcador(punt, cx, cy);

        marcador.addEventListener('click', () => navegarAPuntInteres(punt.id));
        marcador.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                navegarAPuntInteres(punt.id);
            }
        });

        grupMarcadors.appendChild(marcador);
    });

    elContenidor.appendChild(svg);
}

/**
 * Actualitza la visibilitat dels marcadors SVG del mapa de zona
 * segons el filtre d'estrelles actiu. Els marcadors que no
 * compleixen el filtre s'amaguen amb `visibility:hidden` per
 * no alterar el layout del SVG.
 *
 * @param {number} minEstrelles - Mínim d'estrelles (0 = tots visibles)
 */
function actualitzarVisibilitatMarcadors(minEstrelles) {
    document.querySelectorAll('#mapa-zona .marcador-punt').forEach(marcador => {
        const estrelles = parseInt(marcador.dataset.estrelles, 10);
        const visible   = minEstrelles === 0 || estrelles >= minEstrelles;
        marcador.style.visibility = visible ? 'visible' : 'hidden';
        // Treu el marcador amagat de l'ordre de tabulació
        marcador.setAttribute('tabindex', visible ? '0' : '-1');
    });
}


// ============================================================
// SECCIÓ: Pàgina de Zona — Llista de PIs (zona.html)
// Responsabilitat: generar i actualitzar la llista de targetes
// dels punts d'interès sota el mapa de zona.
// ============================================================

/**
 * Genera el HTML d'una targeta de PI per a la llista.
 * El botó rep `data-id-punt` per gestionar el clic al listener.
 *
 * @param {Object} punt - Objecte PuntInteres
 * @returns {string}    - HTML de la targeta
 */
function generarHTMLTargetaPunt(punt) {
    const nom      = traduir(punt.nom);
    const estil    = traduir(punt.estil);
    const emojiZona = EMOJIS_ZONES[punt.idZona] || '📍';

    // El <li> és obligatori: #llista-punts és un <ul role="list">
    // i només pot tenir <li> com a fills directes.
    // La miniatura intenta carregar la foto real; si no existeix,
    // el listener d'error la substitueix per l'emoji de la zona
    // (vegeu renderitzarLlistaPunts).
    return `
        <li>
            <button class="targeta-punt"
                    data-id-punt="${punt.id}"
                    aria-label="${nom}">
                <img class="miniatura"
                     src="${punt.imatge}"
                     alt=""
                     loading="lazy"
                     decoding="async"
                     data-emoji-alternatiu="${emojiZona}">
                <div class="info-punt">
                    <div class="nom-punt-targeta">${nom}</div>
                    <div class="estil-punt">${estil}</div>
                    ${punt.any ? `<div class="any-punt">${punt.any}</div>` : ''}
                    <div class="estrelles-targeta"
                         role="img"
                         aria-label="${etiquetaAriaEstrelles(punt.estrelles)}">
                        ${renderitzarEstrelles(punt.estrelles)}
                    </div>
                </div>
            </button>
        </li>`;
}

/**
 * Renderitza la llista completa de PIs filtrats al contenidor
 * `#llista-punts`. Si no hi ha PIs, mostra el missatge de
 * "cap resultat" de traduccions.js.
 *
 * @param {Array<Object>} punts        - Llista de PIs a mostrar
 * @param {number}        filtrEstrelles - Filtre actiu (per indicar-lo a l'ARIA)
 */
function renderitzarLlistaPunts(punts, filtrEstrelles = 0) {
    const elLlista = document.getElementById('llista-punts');
    if (!elLlista) return;

    const puntsFiltrats = filtrarPerEstrelles(punts, filtrEstrelles);

    if (puntsFiltrats.length === 0) {
        const text = UI && UI['sense-resultats']
            ? traduir(UI['sense-resultats'])
            : 'Cap resultat';
        elLlista.innerHTML = `<li id="missatge-sense-resultats">${text}</li>`;
        return;
    }

    elLlista.innerHTML = puntsFiltrats
        .map(punt => generarHTMLTargetaPunt(punt))
        .join('');

    // Assigna events de clic a cada targeta
    elLlista.querySelectorAll('.targeta-punt[data-id-punt]').forEach(targeta => {
        targeta.addEventListener('click', () => {
            navegarAPuntInteres(targeta.dataset.idPunt);
        });
    });

    // Miniatures: si la foto no existeix, substitueix-la per l'emoji de la zona.
    // No es pot fer amb onerror inline perquè el HTML es genera com a cadena.
    elLlista.querySelectorAll('img.miniatura').forEach(img => {
        img.addEventListener('error', () => {
            const substitut = document.createElement('div');
            substitut.className = 'miniatura-absent';
            substitut.setAttribute('aria-hidden', 'true');
            substitut.textContent = img.dataset.emojiAlternatiu || '📍';
            img.replaceWith(substitut);
        }, { once: true });
    });
}


// ============================================================
// SECCIÓ: Pàgina de Zona — Filtre d'Estrelles (zona.html)
// Responsabilitat: gestionar els botons de filtre i sincronitzar
// el mapa i la llista quan canvia la selecció.
// ============================================================

/**
 * Estat intern del filtre: quantes estrelles mínimes estan
 * seleccionades. 0 = tots els PIs visibles.
 * @type {number}
 */
let filtrEstellesActiu = 0;

/**
 * Punts d'interès de la zona carregada. Es desa aquí per poder
 * re-filtrar sense tornar a consultar PUNTS_INTERES.
 * @type {Array<Object>}
 */
let puntsDeZonaActual = [];

/**
 * Aplica el filtre d'estrelles: actualitza els botons (aria-pressed),
 * amaga/mostra marcadors al mapa, i re-renderitza la llista.
 *
 * @param {number} minEstrelles - Valor del filtre (0, 1, 2 o 3)
 */
function aplicarFiltrEstrelles(minEstrelles) {
    filtrEstellesActiu = minEstrelles;

    // --- Actualitza l'estat dels botons de filtre ---
    document.querySelectorAll('#filtre-estrelles button[data-estrelles]').forEach(boto => {
        const valor   = parseInt(boto.dataset.estrelles, 10);
        const actiu   = valor === minEstrelles;
        boto.setAttribute('aria-pressed', actiu ? 'true' : 'false');
        boto.classList.toggle('actiu', actiu);
    });

    // --- Sincronitza els marcadors del mapa ---
    actualitzarVisibilitatMarcadors(minEstrelles);

    // --- Re-renderitza la llista ---
    renderitzarLlistaPunts(puntsDeZonaActual, minEstrelles);
}

/**
 * Assigna els listeners als botons de filtre d'estrelles.
 * Ha d'existir el contenidor `#filtre-estrelles` a l'HTML.
 */
function assignarEsdevenimentsFiltre() {
    const elFiltre = document.getElementById('filtre-estrelles');
    if (!elFiltre) return;

    elFiltre.querySelectorAll('button[data-estrelles]').forEach(boto => {
        boto.addEventListener('click', () => {
            const valor = parseInt(boto.dataset.estrelles, 10);
            aplicarFiltrEstrelles(valor);
        });
    });
}


// ============================================================
// SECCIÓ: Inicialització de la Pàgina de Zona (zona.html)
// Responsabilitat: orquestrar la càrrega de zona.html a partir
// del paràmetre `?zona=` de la URL.
// ============================================================

/**
 * Punt d'entrada per a `zona.html`.
 * Llegeix el paràmetre `zona` de la URL, valida que existeixi,
 * i omple tots els elements de la pàgina.
 *
 * Seqüència:
 *   1. Idioma
 *   2. Llegeix idZona de la URL
 *   3. Carrega dades de zona i PIs
 *   4. Omple la capçalera de zona
 *   5. Renderitza el mapa SVG amb marcadors
 *   6. Renderitza la llista de PIs
 *   7. Assigna events (filtre, tornar, idiomes, menú)
 */
function inicialitzarPaginaZona() {
    // 1. Idioma: llegeix localStorage i corregeix els botons hardcoded de l'HTML
    idiomaActual = obtenirIdiomaDesat();
    sincronitzarBotonsIdioma();
    actualitzarTextosDinamics();

    // 2. Paràmetre de la URL
    const idZona = obtenirParametreUrl('zona');
    if (!idZona) {
        console.error('[Montbrull] zona.html: manca el paràmetre ?zona= a la URL.');
        mostrarErrorPagina(UI && UI['error-zona'] ? traduir(UI['error-zona']) : 'Zona no trobada.');
        return;
    }

    // 3. Dades
    const zona = carregarDadesZona(idZona);
    if (!zona) {
        console.error(`[Montbrull] zona.html: zona "${idZona}" no existeix a zones.js.`);
        mostrarErrorPagina(UI && UI['error-zona'] ? traduir(UI['error-zona']) : 'Zona no trobada.');
        return;
    }
    puntsDeZonaActual = obtenirPuntsDeZona(idZona);

    // 4. Capçalera de zona
    const elNomZona = document.getElementById('nom-zona');
    if (elNomZona) {
        elNomZona.textContent = `${EMOJIS_ZONES[idZona] || ''} ${traduir(zona.nom)}`.trim();
    }
    document.title = `${traduir(zona.nom)} — ${NOM_POBLE}`;

    // 5. Mapa SVG amb marcadors
    renderitzarMapaZona(zona, puntsDeZonaActual);

    // 6. Llista inicial (sense filtre: tots els PIs)
    renderitzarLlistaPunts(puntsDeZonaActual, 0);

    // 7. Events
    assignarEsdevenimentsFiltre();
    assignarEsdevenimentsUI();

    // 8. Vista per defecte: mapa de zona + filtre + llista
    mostrarVistaMapa();

    console.info(`[Montbrull] Zona "${idZona}" inicialitzada. PIs: ${puntsDeZonaActual.length}`);
}


// ============================================================
// SECCIÓ: Pàgina de Fitxa de PI (punt-interes.html)
// Responsabilitat: llegir el PI de la URL, validar-lo i
// omplir tots els elements de la fitxa: imatge, nom, metadades,
// estrelles i descripció.
// ============================================================

/**
 * Cerca un punt d'interès a PUNTS_INTERES per identificador.
 *
 * @param {string} idPunt - Identificador del PI (ex: 'pi-001')
 * @returns {Object|null} - Objecte PuntInteres, o `null` si no existeix
 */
function carregarDadesPunt(idPunt) {
    if (typeof PUNTS_INTERES === 'undefined') {
        console.error('[Montbrull] PUNTS_INTERES no està definit. Comprova punts.js.');
        return null;
    }
    return PUNTS_INTERES.find(p => p.id === idPunt) || null;
}

/**
 * Omple tots els elements de la fitxa del PI a `punt-interes.html`.
 * Gestiona el cas en què la imatge no existeix (onerror → placeholder).
 *
 * Elements que actualitza:
 *   #imatge-punt         → src + alt
 *   #nom-punt            → textContent
 *   #any-construccio     → textContent
 *   #estil-arquitectonic → textContent
 *   #estrelles-rellevancia → innerHTML + aria-label
 *   #text-descripcio     → textContent
 *   #boto-tornar         → textContent (text traduït)
 *   [data-i18n]          → tots els labels estàtics
 *
 * @param {Object} punt - Objecte PuntInteres
 */
function renderitzarFitxaPunt(punt) {
    // --- Imatge ---
    const elImatge = document.getElementById('imatge-punt');
    if (elImatge) {
        elImatge.src = punt.imatge;
        elImatge.alt = traduir(punt.nom);
        // Si la imatge no existeix, amaga el contenidor sense trencar el layout
        elImatge.addEventListener('error', () => {
            const contenidor = document.getElementById('contenidor-imatge');
            if (contenidor) {
                const emoji = EMOJIS_ZONES[punt.idZona] || '🏛️';
                contenidor.innerHTML =
                    `<div class="imatge-placeholder" aria-hidden="true">${emoji}</div>`;
            }
        }, { once: true });
    }

    // --- Nom ---
    const elNom = document.getElementById('nom-punt');
    if (elNom) {
        elNom.textContent = traduir(punt.nom);
    }

    // --- Any de construcció (opcional: pot ser número, text tipus 'S. XIX', o absent) ---
    const elAny = document.getElementById('any-construccio');
    if (elAny) {
        // El <dt> germà és l'etiqueta "Any:" que cal amagar alhora
        const elAnyLabel = document.querySelector('dt[data-i18n="any-construccio"]');
        if (punt.any !== undefined && punt.any !== null && punt.any !== '') {
            elAny.textContent = punt.any;
            elAny.hidden = false;
            if (elAnyLabel) elAnyLabel.hidden = false;
        } else {
            elAny.textContent = '';
            elAny.hidden = true;
            if (elAnyLabel) elAnyLabel.hidden = true;
        }
    }

    // --- Estil arquitectònic ---
    const elEstil = document.getElementById('estil-arquitectonic');
    if (elEstil) {
        elEstil.textContent = traduir(punt.estil);
    }

    // --- Zona a la qual pertany ---
    const elZonaPertany = document.getElementById('zona-pertany');
    if (elZonaPertany) {
        const zonaObj = (typeof ZONES !== 'undefined')
            ? ZONES.find(z => z.id === punt.idZona)
            : null;
        elZonaPertany.textContent = zonaObj
            ? `${EMOJIS_ZONES[punt.idZona] || ''} ${traduir(zonaObj.nom)}`.trim()
            : punt.idZona;
    }

    // --- Estrelles de rellevància ---
    const elEstrelles = document.getElementById('estrelles-rellevancia');
    if (elEstrelles) {
        elEstrelles.innerHTML =
            renderitzarEstrelles(punt.estrelles) +
            renderitzarBadgeRellevancia(punt.estrelles);
        elEstrelles.setAttribute('aria-label', etiquetaAriaEstrelles(punt.estrelles));
    }

    // --- Descripció ---
    const elDescripcio = document.getElementById('text-descripcio');
    if (elDescripcio) {
        // Usa textContent (no innerHTML) per seguretat: el text ve de dades
        elDescripcio.textContent = traduir(punt.descripcio);
    }

    // --- Botó tornar: text traduït ---
    const elBotoTornar = document.getElementById('boto-tornar');
    if (elBotoTornar && UI && UI['tornar']) {
        elBotoTornar.textContent = `◂ ${traduir(UI['tornar'])}`;
    }

    // --- Labels estàtics [data-i18n] (Any:, Estil:, Zona:) ---
    actualitzarElementsEstaticsi18n();

    // --- Títol del document ---
    document.title = `${traduir(punt.nom)} — ${NOM_POBLE}`;
}


// ============================================================
// SECCIÓ: Utilitat d'Error de Pàgina
// Responsabilitat: mostrar un missatge d'error amable quan
// falta un paràmetre de la URL o no es troben les dades.
// ============================================================

/**
 * Substitueix el contingut del `<main>` amb un missatge d'error
 * i un botó per tornar a la pàgina anterior.
 * S'usa quan `?zona=` o `?pi=` no existeix o és invàlid.
 *
 * @param {string} missatge - Text de l'error a mostrar
 */
function mostrarErrorPagina(missatge) {
    const elMain = document.querySelector('main, #contingut-principal');
    if (!elMain) return;

    const textTornar = UI && UI['tornar'] ? traduir(UI['tornar']) : 'Tornar';

    elMain.innerHTML = `
        <div style="padding:2rem;text-align:center;font-family:'IM Fell English',serif;">
            <p style="font-size:3rem;margin-bottom:1rem;">🏚️</p>
            <p style="font-size:1.1rem;color:#5c4a2a;margin-bottom:1.5rem;">${missatge}</p>
            <button onclick="history.back()"
                    style="padding:.5rem 1.5rem;font-family:'Cinzel',serif;
                           border:1px solid #8b6e3a;border-radius:4px;
                           background:#faf5e8;color:#5c4a2a;cursor:pointer;">
                ◂ ${textTornar}
            </button>
        </div>`;
}


// ============================================================
// SECCIÓ: Inicialització de la Fitxa de PI (punt-interes.html)
// Responsabilitat: orquestrar la càrrega de punt-interes.html
// a partir del paràmetre `?pi=` de la URL.
// ============================================================

/**
 * Punt d'entrada per a `punt-interes.html`.
 * Llegeix el paràmetre `pi` de la URL, valida que existeixi,
 * i omple la fitxa completa del punt d'interès.
 *
 * Seqüència:
 *   1. Idioma
 *   2. Llegeix idPunt de la URL
 *   3. Carrega les dades del PI
 *   4. Renderitza la fitxa
 *   5. Assigna events (idiomes, menú si existeix)
 */
function inicialitzarPaginaPuntInteres() {
    // 1. Idioma: llegeix localStorage i corregeix els botons hardcoded de l'HTML
    idiomaActual = obtenirIdiomaDesat();
    sincronitzarBotonsIdioma();
    actualitzarTextosDinamics();

    // 2. Paràmetre de la URL
    const idPunt = obtenirParametreUrl('pi');
    if (!idPunt) {
        console.error('[Montbrull] punt-interes.html: manca el paràmetre ?pi= a la URL.');
        mostrarErrorPagina(UI && UI['error-punt'] ? traduir(UI['error-punt']) : 'Punt d\'interès no trobat.');
        return;
    }

    // 3. Dades
    const punt = carregarDadesPunt(idPunt);
    if (!punt) {
        console.error(`[Montbrull] punt-interes.html: PI "${idPunt}" no existeix a punts.js.`);
        mostrarErrorPagina(UI && UI['error-punt'] ? traduir(UI['error-punt']) : 'Punt d\'interès no trobat.');
        return;
    }

    // 4. Renderitza
    renderitzarFitxaPunt(punt);

    // 5. Events (capçalera i menú, si existeixen a l'HTML)
    assignarEsdevenimentsUI();

    console.info(`[Montbrull] PI "${idPunt}" carregat: ${punt.nom.ca}`);
}


// ============================================================
// SECCIÓ: Punt d'Entrada Global (DOMContentLoaded)
// Responsabilitat: detectar la pàgina i cridar la funció
// d'inicialització adequada.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const pagina = obtenirPaginaActual();

    switch (pagina) {
        case 'index.html':
        case '':
            inicialitzarPaginaPrincipal();
            break;

        case 'zona.html':
            inicialitzarPaginaZona();
            break;

        case 'punt-interes.html':
            inicialitzarPaginaPuntInteres();
            break;

        default:
            console.warn(`[Montbrull] Pàgina no reconeguda: "${pagina}"`);
    }
});

// ============================================================
// SECCIÓ: Gestió del Back-Forward Cache (bfcache)
// Responsabilitat: quan el navegador restaura una pàgina des
// del bfcache (botó enrere/endavant), DOMContentLoaded NO es
// torna a disparar. El listener 'pageshow' sí que s'executa,
// i event.persisted indica si ve del bfcache.
// Sense això, l'idioma es mostra correctament en càrrega nova
// però queda "congelat" en l'estat anterior en restaurar.
// ============================================================

window.addEventListener('pageshow', (event) => {
    if (!event.persisted) return;   // càrrega normal → ja ho ha fet DOMContentLoaded

    // La pàgina ve del bfcache: resincronitza l'idioma i els botons
    idiomaActual = obtenirIdiomaDesat();
    sincronitzarBotonsIdioma();
    actualitzarTextosDinamics();
    console.info(`[Montbrull] Restaurat del bfcache. Idioma: ${idiomaActual}`);
});

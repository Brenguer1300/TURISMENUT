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
const NOM_POBLE = 'Amer';

/** @constant {string[]} Codis d'idioma disponibles (ordre alfabètic) */
const IDIOMES_DISPONIBLES = ['ca', 'en', 'es', 'fr'];

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
    1: { ca: 'Recomanat',      es: 'Recomendado',    en: 'Recommended', fr: 'Recommandé'   },
    2: { ca: 'Destacat',       es: 'Destacado',      en: 'Featured',    fr: 'À découvrir'  },
    3: { ca: 'Imprescindible', es: 'Imprescindible', en: 'Must-see',    fr: 'Incontournable' },
};

/**
 * @constant {string} Identificador de la secció especial "Mapa".
 * No té text a CONTINGUT_SECCIONS: en lloc de mostrar text, restaura
 * la vista de mapa de la pàgina i amaga el panell de contingut.
 */
const ID_SECCIO_MAPA = 'mapa';

/**
 * @constant {string} Identificador de la secció especial "Mapa Rodalia".
 * No mostra text a la pàgina actual: navega directament a `zona.html`
 * amb la zona especial `zona-rodalia`, que no apareix al mapa principal.
 */
const ID_SECCIO_MAPA_RODALIA = 'mapa-rodalia';

/**
 * @constant {string} Identificador de la zona associada al botó
 * "Mapa Rodalia" del menú lateral.
 */
const ID_ZONA_RODALIA = 'zona-rodalia';

/** @constant {string[]} IDs de les seccions del menú (ordre d'aparició a l'HTML) */
const SECCIONS_MENU = [
    'introduccio',
    ID_SECCIO_MAPA,
    ID_SECCIO_MAPA_RODALIA,
    'historia',
    'rutes',
    'arquitectura',
    'sardana',
    'equipament',
    'festes-tradicions',
    'informacio-practica',
];

/** @constant {Object} Emoticones associades a cada secció del menú */
const EMOJIS_SECCIONS = {
    'introduccio':          '📖',
    'mapa':                 '🏘️',
    'mapa-rodalia':         '🗺️',
    'historia':             '⚔️',
    'rutes':                '🥾',
    'arquitectura':         '🏛️',
    'sardana':   			'🎺',
    'equipament':           '🏊',
    'festes-tradicions':    '🎭',
    'informacio-practica':  '🧭',
};

/**
 * @constant {Object.<number, string>} Emoticones dels marcadors del
 * mapa de zona segons el nombre d'estrelles del PI. Permet distingir
 * visualment els tres nivells de rellevància des del mapa.
 */
const EMOJIS_MARCADOR_PER_ESTRELLES = {
    1: '📍',   // Recomanat: marcador clàssic
    2: '🏵️',  // Destacat: rosette daurada
    3: '⚜️',  // Imprescindible: flor de llis
};

/** @constant {string} Emoticona per defecte si `estrelles` no és 1, 2 o 3 */
const EMOJI_MARCADOR_BASE           = '📍';

/** @constant {string} Emoticona per defecte per a fotos de PI no disponibles */
const EMOJI_PLACEHOLDER_PUNT        = '🏛️';



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

/**
 * @type {string|null} Identificador del PI actualment seleccionat
 * al mapa de zona (`null` si no n'hi ha cap).
 *
 * Comportament del cicle de selecció (només a `zona.html`):
 *   · 1r clic a un marcador     → es marca com a seleccionat
 *                                  (mateix estil groc que el hover)
 *                                  i la targeta corresponent puja
 *                                  al primer lloc de la llista i
 *                                  també es ressalta en groc.
 *   · 2n clic al mateix marcador → navega a punt-interes.html
 *   · Clic al fons del mapa     → desselecciona (marcador + targeta,
 *                                  llista torna a l'ordre original).
 */
let idPuntSeleccionat = null;

/**
 * @type {Array<function(): void>} Llista d'oients (callbacks) que
 * s'han de cridar cada vegada que l'idioma canvia.
 *
 * Cada pàgina hi registra les funcions que re-renderitzen el seu
 * contingut específic (per exemple, la fitxa d'un PI o la llista
 * de PIs d'una zona), perquè `actualitzarTextosDinamics()` només
 * refresca la UI genèrica compartida (menú, capçalera, data-i18n).
 *
 * Es buida a cada inicialització de pàgina per evitar acumulació
 * entre navegacions restaurades del bfcache.
 */
let oientsCanviIdioma = [];


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
// SECCIÓ: Sanejament d'HTML per a descripcions
// Responsabilitat: permetre etiquetes de format bàsic (<br>,
// <strong>, <em>, <p>, <ul>/<ol>/<li>) dins els textos de
// descripció dels PIs, però bloquejar qualsevol contingut que
// pugui executar codi (<script>, on*=, javascript:, etc.).
//
// Aquest mòdul és la ÚNICA porta per la qual el text del fitxer
// de dades entra al DOM com a HTML. Qualsevol futur camp que
// admeti HTML ha de passar per aquí també.
// ============================================================

/**
 * @constant {Set<string>} Etiquetes HTML permeses a les descripcions.
 * Tot el que no aparegui aquí es descarta (però el text interior
 * es conserva). Els atributs, TOTS, es descarten sempre.
 *
 * Per afegir-ne una de nova: comprovar que no pot contenir handlers
 * (per exemple <img> podria tenir onerror; no s'afegeix).
 */
const ETIQUETES_PERMESES_DESCRIPCIO = new Set([
    'br', 'strong', 'em', 'b', 'i', 'p', 'ul', 'ol', 'li',
]);

/**
 * Escapa els caràcters HTML especials d'un text pla perquè
 * no siguin interpretats com a marques quan es concatenen a HTML.
 *
 * @param {string} text - Text sense marques
 * @returns {string}    - Text amb `&`, `<` i `>` escapats
 */
function escaparHTML(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/**
 * Recorre recursivament un node del DOM i en construeix la
 * versió HTML "segura": només les etiquetes de la llista blanca
 * es conserven, i sempre sense atributs. Les no permeses es
 * descarten però se'n manté el text interior.
 *
 * @param {Node} node - Node arrel a processar (els fills es visiten)
 * @returns {string}  - HTML sanejat generat a partir del subarbre
 */
function construirHTMLPermès(node) {
    let resultat = '';
    for (const fill of node.childNodes) {
        if (fill.nodeType === Node.TEXT_NODE) {
            // Text pla: reescapar per si conté caràcters especials
            resultat += escaparHTML(fill.textContent);
        } else if (fill.nodeType === Node.ELEMENT_NODE) {
            const tag = fill.tagName.toLowerCase();
            if (ETIQUETES_PERMESES_DESCRIPCIO.has(tag)) {
                if (tag === 'br') {
                    // Element buit: no té fills, no cal etiqueta de tancament
                    resultat += '<br>';
                } else {
                    // Etiqueta permesa: la mantenim SENSE cap atribut
                    resultat += `<${tag}>${construirHTMLPermès(fill)}</${tag}>`;
                }
            } else {
                // Etiqueta no permesa: descartem l'embolcall però conservem
                // el text interior perquè no es perdi contingut útil
                resultat += construirHTMLPermès(fill);
            }
        }
        // Ignora comentaris (nodeType 8) i altres tipus de node
    }
    return resultat;
}

/**
 * Sanitza HTML provinent de dades per mostrar-lo dins una
 * descripció de PI. Permet marques bàsiques de format i n'elimina
 * qualsevol cosa potencialment perillosa.
 *
 * S'usa amb `element.innerHTML = sanejarHTMLDescripcio(text)`
 * quan el text pot contenir `<br>`, `<strong>`, etc.
 *
 * @param {string} htmlBrut - Cadena que pot contenir HTML
 * @returns {string}        - HTML sanejat (segur per a innerHTML)
 *
 * @example
 *   sanejarHTMLDescripcio('Hola<br>món<script>alert(1)</script>');
 *   // → 'Hola<br>mónalert(1)'  (l'script s'elimina, el seu text es conserva)
 */
function sanejarHTMLDescripcio(htmlBrut) {
    if (typeof htmlBrut !== 'string' || htmlBrut === '') return '';

    // DOMParser NO executa scripts, NO dispara handlers on*=, NO
    // fa peticions de xarxa. És el parser més segur del navegador
    // per a HTML no confiable.
    const doc = new DOMParser().parseFromString(htmlBrut, 'text/html');
    return construirHTMLPermès(doc.body);
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
    // 1. Prioritat 1: paràmetre ?idioma= a la URL.
    //    És el fallback per quan localStorage està deshabilitat o
    //    aïllat entre pàgines (típic amb obertura via file:// o en
    //    navegadors mòbils amb polítiques estrictes). Cada navegació
    //    interna afegeix el paràmetre via `afegirIdiomaAUrl`.
    const desURL = obtenirParametreUrl('idioma');
    if (desURL && IDIOMES_DISPONIBLES.includes(desURL)) {
        return desURL;
    }

    // 2. Prioritat 2: preferència desada a localStorage.
    const desat = llegirDeLocalStorage(CLAU_IDIOMA_LOCAL, IDIOMA_PER_DEFECTE);
    return IDIOMES_DISPONIBLES.includes(desat) ? desat : IDIOMA_PER_DEFECTE;
}

/**
 * Afegeix (o actualitza) el paràmetre `?idioma=` a una URL relativa.
 * Solució de compatibilitat: `new URL()` pot ser inestable sobre `file://`,
 * així que fem manipulació manual senzilla i predictible.
 *
 * @param {string} url - URL relativa (ex: 'zona.html?zona=xxx')
 * @returns {string}   - Mateixa URL amb `idioma=<idiomaActual>` afegit
 */
function afegirIdiomaAUrl(url) {
    if (typeof url !== 'string' || url === '' || url.startsWith('#')) return url;

    // Separa el fragment (#…) per preservar-lo al final
    const iAncora = url.indexOf('#');
    const ancora  = iAncora >= 0 ? url.slice(iAncora) : '';
    const base    = iAncora >= 0 ? url.slice(0, iAncora) : url;

    // Substitueix o afegeix el paràmetre idioma=
    let novaBase;
    if (/[?&]idioma=[^&]*/.test(base)) {
        novaBase = base.replace(/([?&])idioma=[^&]*/, `$1idioma=${idiomaActual}`);
    } else {
        const separador = base.includes('?') ? '&' : '?';
        novaBase = `${base}${separador}idioma=${idiomaActual}`;
    }
    return novaBase + ancora;
}

/**
 * Navega a una URL interna preservant l'idioma actual. Ús obligatori en
 * comptes de `window.location.href = ...` per a navegacions internes.
 *
 * @param {string} url - URL relativa
 */
function navegarAmbIdioma(url) {
    window.location.href = afegirIdiomaAUrl(url);
}

/**
 * Actualitza tots els enllaços `<a href>` interns de la pàgina perquè
 * el seu href inclogui el paràmetre `?idioma=<idiomaActual>`. Es crida
 * al carregar la pàgina i cada vegada que l'idioma canvia.
 *
 * Només afecta enllaços a les 3 pàgines de l'app (index/zona/punt-interes).
 */
function actualitzarEnllacosInterns() {
    const paginesInternes = ['index.html', 'zona.html', 'punt-interes.html'];
    document.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (!href) return;
        // Nom del fitxer (abans de ? o #) — l'enllaç ha de començar amb un d'ells
        const fitxer = href.split('?')[0].split('#')[0];
        if (!paginesInternes.includes(fitxer)) return;
        a.setAttribute('href', afegirIdiomaAUrl(href));
    });
}

/* ============================================================
   SELECTOR D'IDIOMA (desplegable personalitzat)
   ============================================================ */

/**
 * Retorna les referències als elements del desplegable d'idioma,
 * o `null` si no existeixen en la pàgina actual.
 *
 * @returns {{disparador: HTMLElement, llista: HTMLElement, opcions: NodeListOf<HTMLElement>}|null}
 */
function obtenirElementsSelectorIdioma() {
    const disparador = document.getElementById('selector-idioma-disparador');
    const llista     = document.getElementById('selector-idioma-llista');
    if (!disparador || !llista) return null;
    return {
        disparador,
        llista,
        opcions: llista.querySelectorAll('[role="option"]'),
    };
}

/**
 * Indica si el desplegable d'idioma està obert.
 * @returns {boolean}
 */
function desplegableIdiomaEstaObert() {
    const els = obtenirElementsSelectorIdioma();
    return !!els && !els.llista.hidden;
}

/**
 * Obre el desplegable d'idioma i, opcionalment, mou el focus a
 * l'opció seleccionada (o a la primera si no n'hi ha cap seleccionada).
 *
 * @param {boolean} [focalitzarOpcio=false]  Si cal moure el focus a la llista.
 * @returns {void}
 */
function obrirDesplegableIdioma(focalitzarOpcio = false) {
    const els = obtenirElementsSelectorIdioma();
    if (!els) return;

    els.llista.hidden = false;
    els.disparador.setAttribute('aria-expanded', 'true');

    if (focalitzarOpcio) {
        const seleccionada = els.llista.querySelector('[aria-selected="true"]');
        (seleccionada || els.opcions[0]).focus();
    }
}

/**
 * Tanca el desplegable d'idioma.
 *
 * @param {boolean} [retornarFocus=false]  Si cal tornar el focus al botó disparador.
 * @returns {void}
 */
function tancarDesplegableIdioma(retornarFocus = false) {
    const els = obtenirElementsSelectorIdioma();
    if (!els) return;

    els.llista.hidden = true;
    els.disparador.setAttribute('aria-expanded', 'false');

    if (retornarFocus) {
        els.disparador.focus();
    }
}

/**
 * Assigna tots els esdeveniments necessaris al desplegable d'idioma:
 * clic al botó, clic a les opcions, clic fora, tecla Escape,
 * i navegació per teclat (fletxes, Home, End, Enter, Espai).
 *
 * Es crida des d'assignarEsdevenimentsUI(). Si el desplegable no existeix
 * en la pàgina, la funció retorna sense fer res.
 *
 * @returns {void}
 */
function assignarEsdevenimentsSelectorIdioma() {
    const els = obtenirElementsSelectorIdioma();
    if (!els) return;

    // --- Clic al botó disparador: alterna obert/tancat ---
    els.disparador.addEventListener('click', () => {
        if (desplegableIdiomaEstaObert()) {
            tancarDesplegableIdioma();
        } else {
            obrirDesplegableIdioma();
        }
    });

    // --- Teclat sobre el botó disparador ---
    // ArrowDown / ArrowUp: obren la llista i hi mouen el focus.
    els.disparador.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            obrirDesplegableIdioma(true);
        }
    });

    // --- Clic sobre una opció: canvia d'idioma i tanca ---
    els.opcions.forEach(opcio => {
        opcio.addEventListener('click', () => {
            canviarIdioma(opcio.dataset.idioma);
            tancarDesplegableIdioma(true);
        });
    });

    // --- Teclat sobre les opcions ---
    // ↑/↓ : mou el focus entre opcions (cíclic).
    // Home/End : primera/última opció.
    // Enter/Espai : selecciona l'opció actual.
    // Escape : tanca i torna el focus al botó.
    els.llista.addEventListener('keydown', (event) => {
        const opcions = Array.from(els.opcions);
        const indexActiu = opcions.indexOf(document.activeElement);

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                opcions[(indexActiu + 1) % opcions.length].focus();
                break;
            case 'ArrowUp':
                event.preventDefault();
                opcions[(indexActiu - 1 + opcions.length) % opcions.length].focus();
                break;
            case 'Home':
                event.preventDefault();
                opcions[0].focus();
                break;
            case 'End':
                event.preventDefault();
                opcions[opcions.length - 1].focus();
                break;
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (indexActiu >= 0) {
                    canviarIdioma(opcions[indexActiu].dataset.idioma);
                    tancarDesplegableIdioma(true);
                }
                break;
            case 'Escape':
                event.preventDefault();
                tancarDesplegableIdioma(true);
                break;
        }
    });

    // --- Clic fora del desplegable: tanca ---
    // Registrat al document per capturar tots els clics; només actua
    // si el clic no és dins del contenidor del selector.
    document.addEventListener('click', (event) => {
        if (!desplegableIdiomaEstaObert()) return;
        const contenidor = document.getElementById('selector-idioma');
        if (contenidor && !contenidor.contains(event.target)) {
            tancarDesplegableIdioma();
        }
    });
}



/**
 * ÚNICA font de veritat per a l'estat visual del selector d'idioma.
 *
 * Actualitza el desplegable personalitzat perquè reflecteixi
 * `idiomaActual`:
 *   · Text del botó disparador (codi en majúscules: CA / EN / ES / FR).
 *   · Atribut `aria-selected` de cada opció de la llista.
 *
 * Cap altra funció ha de tocar aquests atributs: mantenir una sola
 * via evita que l'estat visual, el semàntic i l'intern se separin.
 *
 * Es crida des de:
 *   · inicialitzar*()             → en carregar cada pàgina
 *   · actualitzarTextosDinamics() → en canviar d'idioma
 *   · listener 'pageshow'         → en restaurar del bfcache
 *
 * @returns {void}
 */
function sincronitzarBotonsIdioma() {
    // --- Codi al botó disparador (CA / EN / ES / FR) ---
    const elCodi = document.querySelector('#selector-idioma-disparador .desplegable-idioma__codi');
    if (elCodi) {
        elCodi.textContent = idiomaActual.toUpperCase();
    }

    // --- aria-selected a cada opció ---
    document.querySelectorAll('#selector-idioma-llista [role="option"]').forEach(opcio => {
        const esActiva = opcio.dataset.idioma === idiomaActual;
        opcio.setAttribute('aria-selected', esActiva ? 'true' : 'false');
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

    // --- Selector d'idioma: text de cada opció de la llista ---
    // Els noms es mantenen en la seva llengua nativa (endònims) perquè
    // un usuari que no entengui l'idioma actual pugui igualment
    // identificar el seu. L'estat seleccionat el gestiona
    // exclusivament sincronitzarBotonsIdioma().
    const etiquetesIdioma = {
        ca: 'Català',
        es: 'Castellano',
        en: 'English',
        fr: 'Français',
    };
    document.querySelectorAll('#selector-idioma-llista [role="option"]').forEach(opcio => {
        const codi = opcio.dataset.idioma;
        opcio.textContent = etiquetesIdioma[codi] || codi;
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

    // --- Botó "Tornar" (existeix a zona.html i punt-interes.html) ---
    // Es tradueix aquí, de manera centralitzada, perquè es refresqui
    // a cada canvi d'idioma. La fletxa "◂" l'afegeix el CSS via
    // .boto-tornar::before, així que només cal sobreescriure el text.
    const elBotoTornar = document.getElementById('boto-tornar');
    if (elBotoTornar && UI && UI['tornar']) {
        elBotoTornar.textContent = traduir(UI['tornar']);
    }

    // --- Enllaços interns amb idioma ---
    // Assegura que tots els <a href="index.html|zona.html|punt-interes.html">
    // portin ?idioma=<idiomaActual>, com a fallback quan localStorage
    // no persisteix entre pàgines.
    actualitzarEnllacosInterns();
}

/**
 * Registra un oient que es cridarà cada cop que canviï l'idioma.
 * L'ha d'usar cada pàgina per re-renderitzar el seu contingut
 * específic (fitxa de PI, llista de PIs, capçalera de zona…),
 * ja que `actualitzarTextosDinamics()` només refresca la UI
 * genèrica compartida.
 *
 * @param {function(): void} callback - Funció sense arguments a
 *                                       cridar quan canviï l'idioma
 */
function afegirOientCanviIdioma(callback) {
    if (typeof callback === 'function') {
        oientsCanviIdioma.push(callback);
    }
}

/**
 * Buida la llista d'oients de canvi d'idioma. S'ha de cridar al
 * principi de cada `inicialitzar*()` per evitar que quedin oients
 * de la navegació anterior (rellevant amb el bfcache del navegador).
 */
function reiniciarOientsCanviIdioma() {
    oientsCanviIdioma = [];
}

/**
 * Canvia l'idioma de tota l'aplicació i actualitza immediatament la UI.
 * Desa la preferència a localStorage perquè persisteixi entre pàgines.
 * No fa res si `nouIdioma` no és un codi d'idioma vàlid.
 *
 * Seqüència:
 *   1. Valida l'idioma
 *   2. Actualitza `idiomaActual` i persisteix a localStorage
 *   3. Refresca la UI genèrica (`actualitzarTextosDinamics`)
 *   4. Notifica tots els oients específics de pàgina, si n'hi ha
 *      (fitxa de PI, llista de PIs, etc.)
 *
 * @param {string} nouIdioma - Codi del nou idioma ('ca', 'en', 'es' o 'fr')
 */
function canviarIdioma(nouIdioma) {
    if (!IDIOMES_DISPONIBLES.includes(nouIdioma)) {
        console.warn(`[Montbrull] Idioma no vàlid: "${nouIdioma}"`);
        return;
    }
    idiomaActual = nouIdioma;
    desarALocalStorage(CLAU_IDIOMA_LOCAL, nouIdioma);

    // Actualitza la URL actual (sense recarregar) amb el nou idioma.
    // Serveix com a fallback si localStorage no persisteix entre
    // pàgines (obertura via file://), perquè si l'usuari refresca
    // la pàgina l'idioma es manté.
    try {
        const nova = afegirIdiomaAUrl(window.location.pathname + window.location.search + window.location.hash);
        history.replaceState(null, '', nova);
    } catch (error) {
        console.warn('[Montbrull] No s\'ha pogut actualitzar la URL:', error);
    }

    // Actualitza els <a href> interns perquè portin ?idioma=<nou>
    actualitzarEnllacosInterns();

    actualitzarTextosDinamics();

    // Notifica als components específics de pàgina (fitxa, llista, etc.).
    // Encapsulat en try/catch: un error en un oient no ha de bloquejar
    // la resta ni deixar la UI en un estat inconsistent.
    for (const oient of oientsCanviIdioma) {
        try {
            oient();
        } catch (error) {
            console.error('[Montbrull] Error en oient de canvi d\'idioma:', error);
        }
    }
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
    // En tauleta/escriptori (>=768px) el menú és una columna fixa
    // que es col·lapsa amb la classe .menu-amagat al <body>. Aquí
    // simplement la traiem i el botó hamburguesa desapareix.
    if (window.innerWidth >= 768) {
        document.body.classList.remove('menu-amagat');
        const elBotoDesktop = document.getElementById('boto-menu');
        if (elBotoDesktop) elBotoDesktop.setAttribute('aria-expanded', 'true');
        return;
    }

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
    // En tauleta/escriptori amaguem el menú afegint .menu-amagat al
    // <body>: el CSS del media (min-width:768px) el col·lapsa i torna
    // a mostrar el botó hamburguesa perquè es pugui reobrir.
    if (window.innerWidth >= 768) {
        document.body.classList.add('menu-amagat');
        const elBotoDesktop = document.getElementById('boto-menu');
        if (elBotoDesktop) {
            elBotoDesktop.setAttribute('aria-expanded', 'false');
            elBotoDesktop.focus();
        }
        return;
    }

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
        // Les seccions de text despleguen un panell; les de mapa no
        if (boto.dataset.seccio !== ID_SECCIO_MAPA &&
            boto.dataset.seccio !== ID_SECCIO_MAPA_RODALIA) {
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
    // --- Cas 0: secció especial "Mapa Rodalia" ---
    // Navega directament a la zona especial que només és accessible
    // des d'aquest botó del menú. No mostra cap panell de contingut.
    if (idSeccio === ID_SECCIO_MAPA_RODALIA) {
        navegarAmbIdioma(`zona.html?zona=${encodeURIComponent(ID_ZONA_RODALIA)}`);
        return;
    }

    // --- Cas 1: secció especial "Mapa Centre" ---
    // Sempre representa el mapa principal del poble (index.html):
    //   · a index.html      → restaura la vista de mapa
    //   · a qualsevol altra → navega a index.html
    if (idSeccio === ID_SECCIO_MAPA) {
        if (obtenirPaginaActual() === 'index.html') {
            mostrarVistaMapa();
            tancarMenuEnMobil();
        } else {
            navegarAmbIdioma('index.html');
        }
        return;
    }

    // --- Cas 2: no som a la pàgina principal ---
    // Des de zona.html o punt-interes.html, les seccions del menú
    // (història, gastronomia, etc.) no s'han d'obrir sobre la pàgina
    // actual perquè afegirien text sota el mapa/fitxa. Redirigim a
    // index.html amb un query param i allà s'obrirà la secció.
    if (obtenirPaginaActual() !== 'index.html') {
        navegarAmbIdioma(`index.html?seccio=${encodeURIComponent(idSeccio)}`);
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

    // --- Selector d'idioma (desplegable personalitzat) ---
    assignarEsdevenimentsSelectorIdioma();

    // --- Botons de seccions del menú ---
    document.querySelectorAll('#menu-lateral [data-seccio]').forEach(boto => {
        boto.addEventListener('click', () => mostrarSeccio(boto.dataset.seccio));
    });

    // --- Tecla Escape: tanca el menú (drawer mòbil o menú desktop) ---
    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        const menuDesktopVisible =
            window.innerWidth >= 768 && !document.body.classList.contains('menu-amagat');
        if (menuObert || menuDesktopVisible) {
            tancarMenu();
        }
    });

    // --- Canvi de mida de finestra ---
    // Si el drawer mòbil està obert i es passa a tauleta/escriptori,
    // netegem l'estat del drawer (classe .obert, overflow del body)
    // però NO cridem tancarMenu(): ho amagaria també en desktop, cosa
    // que no volem — allà el menú és visible per defecte.
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && menuObert) {
            menuObert = false;
            const elMenu    = document.getElementById('menu-lateral');
            const elCoberta = document.getElementById('coberta-menu');
            if (elMenu) {
                elMenu.classList.remove('obert');
                elMenu.setAttribute('aria-hidden', 'false');
            }
            if (elCoberta) {
                elCoberta.classList.remove('activa', 'visible');
            }
            document.body.style.overflow = '';
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
    navegarAmbIdioma(`zona.html?zona=${encodeURIComponent(idZona)}`);
}

/**
 * Navega a la fitxa d'un punt d'interès passant l'id com a paràmetre GET.
 *
 * @param {string} idPunt - Identificador del PI (ex: 'pi-001')
 */
function navegarAPuntInteres(idPunt) {
    navegarAmbIdioma(`punt-interes.html?pi=${encodeURIComponent(idPunt)}`);
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
    // 1. Idioma: llegeix localStorage i corregeix els botons hardcoded de l'HTML.
    //    Es reinicien els oients per no acumular-ne de la pàgina anterior.
    reiniciarOientsCanviIdioma();
    idiomaActual = obtenirIdiomaDesat();
    sincronitzarBotonsIdioma();

    // 2. Textos de la UI
    actualitzarTextosDinamics();

    // 3. Events de la interfície
    assignarEsdevenimentsUI();

    // 4. Zones del mapa (aria-labels traduïts)
    inicialitzarZonesDelMapa();
    // Els aria-labels de les zones han de refrescar-se en canvi d'idioma
    afegirOientCanviIdioma(() => inicialitzarZonesDelMapa());

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
 * Filtra una llista de PIs per nombre exacte d'estrelles.
 * Si `numEstrelles` és 0, retorna tots els PIs sense filtrar.
 * Altrament, retorna només els PIs que tinguin EXACTAMENT aquest
 * nombre d'estrelles (no ≥): pressionar "2★" mostra només els
 * destacats, no els imprescindibles.
 *
 * @param {Array<Object>} punts        - Llista de PIs a filtrar
 * @param {number}        numEstrelles - Nombre exacte d'estrelles (0 = tots)
 * @returns {Array<Object>}            - PIs que compleixen el filtre
 */
function filtrarPerEstrelles(punts, numEstrelles = 0) {
    if (numEstrelles === 0) return punts;
    return punts.filter(p => p.estrelles === numEstrelles);
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
    // Radis reduïts ~25% respecte l'original per fer els marcadors
    // menys invasius sobre el mapa; es manté la jerarquia visual
    // entre nivells (imprescindible > destacat > recomanat).
    const radi = punt.estrelles === 3 ? 3.0
               : punt.estrelles === 2 ? 2.4
               :                        2.0;

    const cercle = document.createElementNS(espaiNoms, 'circle');
    cercle.setAttribute('cx', cx);
    cercle.setAttribute('cy', cy);
    cercle.setAttribute('r', radi);
    cercle.classList.add('cercle-marcador');
    g.appendChild(cercle);

    // --- Text emoji ---
    // Un emoji diferent per a cada nivell de rellevància, definits
    // a EMOJIS_MARCADOR_PER_ESTRELLES. Si les estrelles no són 1-3,
    // s'usa el marcador bàsic.
    const emoji    = EMOJIS_MARCADOR_PER_ESTRELLES[punt.estrelles] || EMOJI_MARCADOR_BASE;
    const midaFont = punt.estrelles === 3 ? 4.2
                   : punt.estrelles === 2 ? 3.5
                   :                        3.0;

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

        // Cicle de selecció (vegeu comentari a `idPuntSeleccionat`):
        //   · 1r clic → selecciona (marcador i targeta en groc)
        //   · 2n clic al mateix marcador → navega a la fitxa del PI
        marcador.addEventListener('click', event => {
            // Evita que el clic pugi al SVG i dispari la desselecció
            event.stopPropagation();
            gestionarClicMarcador(punt.id);
        });
        marcador.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                event.stopPropagation();
                gestionarClicMarcador(punt.id);
            }
        });

        grupMarcadors.appendChild(marcador);
    });

    // Clic al fons del mapa (fora de cap marcador) → desselecciona.
    // Es delega al SVG perquè el listener anterior de cada marcador
    // ja ha aturat la propagació amb `stopPropagation()`.
    svg.addEventListener('click', () => {
        if (idPuntSeleccionat !== null) {
            deseleccionarPunt();
        }
    });

    elContenidor.appendChild(svg);
}

/**
 * Actualitza la visibilitat dels marcadors SVG del mapa de zona
 * segons el filtre d'estrelles actiu. Els marcadors que no
 * compleixen el filtre s'amaguen amb `visibility:hidden` per
 * no alterar el layout del SVG.
 *
 * Filtre exacte (coherent amb `filtrarPerEstrelles`):
 *   · 0 → tots els marcadors visibles
 *   · n → només els marcadors amb EXACTAMENT n estrelles
 *
 * @param {number} numEstrelles - Nombre exacte d'estrelles (0 = tots)
 */
function actualitzarVisibilitatMarcadors(numEstrelles) {
    document.querySelectorAll('#mapa-zona .marcador-punt').forEach(marcador => {
        const estrelles = parseInt(marcador.dataset.estrelles, 10);
        const visible   = numEstrelles === 0 || estrelles === numEstrelles;
        marcador.style.visibility = visible ? 'visible' : 'hidden';
        // Treu el marcador amagat de l'ordre de tabulació
        marcador.setAttribute('tabindex', visible ? '0' : '-1');
    });
}


// ============================================================
// SECCIÓ: Pàgina de Zona — Selecció de PI (zona.html)
// Responsabilitat: gestionar la selecció visual d'un punt
// d'interès des del mapa. El primer clic al marcador el
// selecciona (marcador i targeta en groc + targeta al primer
// lloc de la llista); el segon clic navega a la seva fitxa;
// un clic al fons del mapa desselecciona.
// ============================================================

/**
 * Gestiona el clic (o l'Enter/Espai) sobre un marcador del mapa.
 *
 * Si el marcador ja estava seleccionat, navega a la fitxa del PI.
 * Altrament, el marca com a seleccionat i re-renderitza la llista
 * perquè la targeta corresponent aparegui al primer lloc i ressaltada.
 *
 * @param {string} idPunt - Identificador del PI del marcador clicat
 */
function gestionarClicMarcador(idPunt) {
    if (idPuntSeleccionat === idPunt) {
        // Segon clic al mateix marcador → obre la fitxa
        navegarAPuntInteres(idPunt);
        return;
    }
    seleccionarPunt(idPunt);
}

/**
 * Marca un PI com a seleccionat: aplica la classe `.seleccionat`
 * al marcador del mapa i re-renderitza la llista perquè la targeta
 * corresponent quedi ressaltada i col·locada al primer lloc.
 *
 * Respecta el filtre d'estrelles actiu (`filtrEstellesActiu`).
 *
 * @param {string} idPunt - Identificador del PI a seleccionar
 */
function seleccionarPunt(idPunt) {
    idPuntSeleccionat = idPunt;

    // --- Marcador del mapa ---
    document.querySelectorAll('#mapa-zona .marcador-punt').forEach(marcador => {
        marcador.classList.toggle('seleccionat', marcador.dataset.idPunt === idPunt);
    });

    // --- Llista de PIs (reordena i ressalta) ---
    renderitzarLlistaPunts(puntsDeZonaActual, filtrEstellesActiu);
}

/**
 * Desfà la selecció actual: treu la classe `.seleccionat` del
 * marcador i restaura l'ordre original de la llista.
 * No fa res si no hi ha cap PI seleccionat.
 */
function deseleccionarPunt() {
    if (idPuntSeleccionat === null) return;

    idPuntSeleccionat = null;

    // --- Marcadors del mapa ---
    document.querySelectorAll('#mapa-zona .marcador-punt.seleccionat')
        .forEach(marcador => marcador.classList.remove('seleccionat'));

    // --- Llista: torna a l'ordre original ---
    renderitzarLlistaPunts(puntsDeZonaActual, filtrEstellesActiu);
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
 * @param {Object}  punt         - Objecte PuntInteres
 * @param {boolean} [seleccionada=false] - Si `true`, s'afegeix la
 *                                  classe `.seleccionada` i
 *                                  `aria-current="true"` perquè
 *                                  la targeta es mostri ressaltada.
 * @returns {string}             - HTML de la targeta
 */
function generarHTMLTargetaPunt(punt, seleccionada = false) {
    const nom      = traduir(punt.nom);
    const estil    = traduir(punt.estil);
    const classes  = seleccionada ? 'targeta-punt seleccionada' : 'targeta-punt';
    const ariaCurrent = seleccionada ? ' aria-current="true"' : '';

    // El <li> és obligatori: #llista-punts és un <ul role="list">
    // i només pot tenir <li> com a fills directes.
    // La miniatura intenta carregar la foto real; si no existeix,
    // el listener d'error la substitueix per un emoji neutre
    // (vegeu renderitzarLlistaPunts).
    return `
        <li>
            <button class="${classes}"
                    data-id-punt="${punt.id}"
                    aria-label="${nom}"${ariaCurrent}>
                <img class="miniatura"
                     src="${punt.imatge}"
                     alt=""
                     loading="lazy"
                     decoding="async"
                     data-emoji-alternatiu="${EMOJI_MARCADOR_BASE}">
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

    // Si hi ha un PI seleccionat i és dins la llista filtrada, el
    // movem al primer lloc perquè l'usuari el vegi immediatament.
    // L'ordre original de la resta es conserva.
    let puntsOrdenats = puntsFiltrats;
    if (idPuntSeleccionat) {
        const idxSel = puntsFiltrats.findIndex(p => p.id === idPuntSeleccionat);
        if (idxSel > 0) {
            const [puntSel] = puntsFiltrats.slice(idxSel, idxSel + 1);
            puntsOrdenats = [
                puntSel,
                ...puntsFiltrats.slice(0, idxSel),
                ...puntsFiltrats.slice(idxSel + 1),
            ];
        }
    }

    elLlista.innerHTML = puntsOrdenats
        .map(punt => generarHTMLTargetaPunt(punt, punt.id === idPuntSeleccionat))
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

    // En canviar el filtre, el PI seleccionat pot quedar amagat
    // (o simplement deixa de tenir sentit mantenir-lo). El
    // desseleccionem silenciosament: només netegem l'estat, ja
    // que la llista i els marcadors es re-renderitzaran tot seguit.
    if (idPuntSeleccionat !== null) {
        idPuntSeleccionat = null;
    }

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
    // 1. Idioma: llegeix localStorage i corregeix els botons hardcoded de l'HTML.
    //    Es reinicien els oients per no acumular-ne de la pàgina anterior.
    reiniciarOientsCanviIdioma();
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

    // 4. Capçalera de zona + títol del document (aïllat en una closure
    //    perquè es pugui tornar a cridar en canviar l'idioma)
    const refrescarCapçaleraZona = () => {
        const elNomZona = document.getElementById('nom-zona');
        if (elNomZona) {
            elNomZona.textContent = traduir(zona.nom);
        }
        document.title = `${traduir(zona.nom)} — ${NOM_POBLE}`;
    };
    refrescarCapçaleraZona();

    // 5. Mapa SVG amb marcadors
    renderitzarMapaZona(zona, puntsDeZonaActual);

    // 6. Llista inicial (sense filtre: tots els PIs)
    renderitzarLlistaPunts(puntsDeZonaActual, 0);

    // 7. Registra oient de canvi d'idioma: cal re-renderitzar la
    //    capçalera de zona, el mapa (aria-labels dels marcadors) i la
    //    llista de PIs preservant el filtre actiu, ja que
    //    actualitzarTextosDinamics() no coneix aquest contingut.
    afegirOientCanviIdioma(() => {
        refrescarCapçaleraZona();
        renderitzarMapaZona(zona, puntsDeZonaActual);
        renderitzarLlistaPunts(puntsDeZonaActual, filtrEstellesActiu);
    });

    // 8. Events
    assignarEsdevenimentsFiltre();
    assignarEsdevenimentsUI();

    // 9. Vista per defecte: mapa de zona + filtre + llista
    mostrarVistaMapa();

    // 9b. Si estem visualitzant la zona especial de rodalia, cal marcar
    //     el botó "Mapa Rodalia" com actiu al menú (mostrarVistaMapa
    //     sempre marca "Mapa Centre" per defecte, perquè és el cas normal).
    if (idZona === ID_ZONA_RODALIA) {
        seccioActiva = ID_SECCIO_MAPA_RODALIA;
        actualitzarEstatBotonsMenu(ID_SECCIO_MAPA_RODALIA);
    }

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
                contenidor.innerHTML =
                    `<div class="imatge-placeholder" aria-hidden="true">${EMOJI_PLACEHOLDER_PUNT}</div>`;
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

    // --- Adreça (opcional: text únic no traduïble; si és buida, s'amaga tota la fila) ---
    const elDireccio = document.getElementById('direccio-punt');
    if (elDireccio) {
        // El <dt> germà és l'etiqueta "Adreça:" que cal amagar alhora
        const elDireccioLabel = document.querySelector('dt[data-i18n="direccio-punt"]');
        if (punt.direccio !== undefined && punt.direccio !== null && punt.direccio !== '') {
            elDireccio.textContent = punt.direccio;
            elDireccio.hidden = false;
            if (elDireccioLabel) elDireccioLabel.hidden = false;
        } else {
            elDireccio.textContent = '';
            elDireccio.hidden = true;
            if (elDireccioLabel) elDireccioLabel.hidden = true;
        }
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
        // El text ve de dades i pot contenir marques bàsiques de format
        // (<br>, <strong>, <em>, <p>, <ul>/<ol>/<li>). El sanejament
        // permet aquestes marques però bloqueja qualsevol contingut
        // potencialment perillós (scripts, handlers on*, etc.).
        // Vegeu sanejarHTMLDescripcio() a dalt.
        elDescripcio.innerHTML = sanejarHTMLDescripcio(traduir(punt.descripcio));
    }

    // --- Botó tornar: text traduït (la fletxa '◂' l'afegeix .boto-tornar::before) ---
    const elBotoTornar = document.getElementById('boto-tornar');
    if (elBotoTornar && UI && UI['tornar']) {
        elBotoTornar.textContent = traduir(UI['tornar']);
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
    // 1. Idioma: llegeix localStorage i corregeix els botons hardcoded de l'HTML.
    //    Es reinicien els oients perquè no en quedin de la pàgina anterior
    //    si el navegador ha restaurat estat via bfcache.
    reiniciarOientsCanviIdioma();
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

    // 5. Registra oient de canvi d'idioma: cal re-renderitzar la fitxa
    //    perquè conté text que ve de dades (nom, estil, zona, descripció,
    //    alt de la imatge, aria-label de les estrelles, title del document)
    //    i que actualitzarTextosDinamics() no coneix.
    afegirOientCanviIdioma(() => renderitzarFitxaPunt(punt));

    // 6. Events (capçalera i menú, si existeixen a l'HTML)
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

    // ────────────────────────────────────────────────────────────
    // La pàgina ve del bfcache: el DOM restaurat encara reflecteix
    // l'estat de l'idioma que hi havia en marxar. Cal ressincronitzar:
    //
    //   1. Idioma actiu (llegit de localStorage — pot haver canviat
    //      en una altra pàgina abans de tornar aquí).
    //   2. Selector d'idioma (valor del <select>).
    //   3. UI genèrica compartida (noms del menú, aria-labels,
    //      botó "Tornar", etc.).
    //   4. Contingut específic de la pàgina (fitxa d'un PI, capçalera
    //      i llista de zona, aria-labels del mapa principal…),
    //      cridant els oients registrats per la pàgina.
    //
    // Sense el pas 4 la meitat superior de la pàgina es traduïa i
    // la meitat inferior quedava en l'idioma anterior.
    // ────────────────────────────────────────────────────────────
    idiomaActual = obtenirIdiomaDesat();
    sincronitzarBotonsIdioma();
    actualitzarTextosDinamics();

    for (const oient of oientsCanviIdioma) {
        try {
            oient();
        } catch (error) {
            console.error('[Montbrull] Error en oient de canvi d\'idioma (pageshow):', error);
        }
    }

    console.info(`[Montbrull] Restaurat del bfcache. Idioma: ${idiomaActual}`);
});

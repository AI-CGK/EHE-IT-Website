# Guida Wix — Target reale: Core + Editor classico + Velo

## Target piattaforma e limiti piano Core

Sito di destinazione confermato:

- **Wix Editor classico** (`editor.wix.com/html/editor/...`)
- **Velo attivato**
- **Piano Wix Core**
- Dominio produzione già collegato: **https://www.ehe-italia.it**

Limiti Core rilevanti per questa ricostruzione:

- Moduli acquisizione lead: **max 10** (fino a 50 campi/modulo)
- Indici CMS (Gestore contenuti): **max 4**
- Elementi CMS: **illimitati**
- Richieste dati: lettura **3.000/min**, scrittura **200/min**, timeout **5s**
- Backend Velo: **1 micro container** (1 vCPU, 400 MB RAM), **1.500 richieste/min**, timeout **14s**
- Favicon personalizzata: **disponibile**
- Rimozione branding Wix: **disponibile**
- Pagamenti e piani a pagamento: **disponibili** (commissione piani a pagamento **4%**)

---

## Matrice di compatibilità (prototipo → Wix Editor classico)

| Voce | Stato | Workaround / Nota Wix |
|---|---|---|
| Palette token `:root`, font Lora + Inter | ✅ replicabile 1:1 | Theme Manager (colori + font globali) |
| Sezioni full-width, container 1200px, griglie 2/3/4 col | ✅ replicabile 1:1 | Strip/Sezioni + Repeater |
| Card con bordo/ombra/hover | ✅ replicabile 1:1 | Design pannello elemento + stati hover |
| Header sticky, menu a tendina 5 voci, hamburger mobile | ✅ replicabile 1:1 | Componenti/menu nativi Wix |
| Accordion FAQ | ✅ replicabile 1:1 | Elemento Accordion nativo |
| Form (contatti, diventa-socio, ecc.) | ✅ replicabile 1:1 | Wix Forms (attenzione limite 10 moduli) |
| CTA "Dona ora" / quota soci | ✅ replicabile 1:1 | Wix Payments / Piani a pagamento |
| SEO, OG, Twitter Card, JSON-LD, redirect 301 | ✅ replicabile 1:1 | Pannello SEO per pagina + URL Redirect Manager |
| Favicon | ✅ replicabile 1:1 | Disponibile su Core |
| Filtro centri "Dove curarsi" | ✅ replicabile 1:1 | **Da riscrivere in Velo + CMS** (non riuso diretto del JS statico) |
| CTA sticky mobile | ⚠️ adattamento | Duplicare elemento in vista mobile e fissarlo in basso |
| Animazioni `.reveal` | ⚠️ adattamento | Usare animazioni ingresso native Wix (controllo meno fine) |
| Bordo sfumato header + blur | ⚠️/❌ adattamento parziale | Simulare striscia con immagine/gradiente; `blur` non equivalente 1:1 |
| Tipografia fluida `clamp()` | ❌ non replicabile 1:1 | Impostare 3 dimensioni fisse (desktop/tablet/mobile) |
| `style.css` condiviso / stili one-off | ❌ non replicabile 1:1 | Ricostruzione elemento per elemento nell'Editor |
| `skip-link`, `:focus-visible` custom | ❌ non replicabile 1:1 | Gestiti nativamente da Wix |

---

## CMS `Centri` (pagina `dove-curarsi.html`)

Collezione consigliata: **`Centri`** (1 item = 1 struttura).

| Campo Wix | Tipo | Uso |
|---|---|---|
| `titolo` | Testo | Nome struttura |
| `citta` | Testo | Città |
| `areaGeografica` | Testo (valori: `Nord`, `Centro`, `Sud e Isole`) | Filtro dropdown |
| `specializzazione` | Testo lungo | Specializzazione/descrizione |
| `indirizzo` | Testo | Indirizzo completo |
| `oncologiaContattoLabel` | Testo | Es. "Oncologia Medica — Segreteria" |
| `oncologiaEmail` | Email | Email oncologia |
| `oncologiaTelefono` | Testo | Telefono oncologia |
| `chirurgiaContattoLabel` | Testo | Es. "Chirurgia Sarcomi — Segreteria" |
| `chirurgiaEmail` | Email | Email chirurgia |
| `chirurgiaTelefono` | Testo | Telefono chirurgia |
| `linkPrenotazione` | URL | Link prenotazione (se disponibile) |
| `foto` | Immagine | Foto centro |
| `searchText` | Testo lungo | Campo aggregato per ricerca libera (nome+città+keyword) |

### Indici CMS (massimo 4 su Core)

Per restare entro il limite Core:

1. `areaGeografica` (eq)
2. `searchText` (contains)
3. `citta` (supporto filtri futuri)
4. `titolo` (ordinamento/ricerca puntuale)

---

## Snippet Velo pronto (ricerca testuale + dropdown area)

Elementi attesi in pagina:

- Input: `#inputRicerca`
- Dropdown: `#dropdownArea`
- Dataset: `#datasetCentri`
- Repeater: `#repeaterCentri`

```js
import wixData from 'wix-data';

function applyCenterFilter() {
  let filter = wixData.filter();

  const textValue = ($w('#inputRicerca').value || '').trim().toLowerCase();
  const areaValue = $w('#dropdownArea').value || 'tutte';

  if (textValue) {
    filter = filter.contains('searchText', textValue);
  }

  if (areaValue !== 'tutte') {
    filter = filter.eq('areaGeografica', areaValue);
  }

  return $w('#datasetCentri').setFilter(filter);
}

$w.onReady(() => {
  // Repeater collegato al dataset #datasetCentri
  $w('#inputRicerca').onInput(() => {
    applyCenterFilter();
  });

  $w('#dropdownArea').onChange(() => {
    applyCenterFilter();
  });

  applyCenterFilter();
});
```

Nota: comportamento allineato alla logica attuale del prototipo (`testo` + `area`, AND logico), equivalente a `applyCenterFilter()` in `assets/js/main.js`.

---

## Conteggio form vs limite Core (max 10)

Pagine del repo che prevedono un form nel flusso funzionale:

1. `contatti.html`
2. `diventa-socio.html`
3. `supporto.html`
4. `5x1000.html`
5. `sostienici.html`

Stato attuale prototipo statico: tag `<form>` già presenti in `contatti`, `supporto`, `sostienici`.

Raccomandazione: se in Wix il numero moduli tende a superare 10, accorpare richieste simili in un modulo unico con campo dropdown **"Motivo del contatto"**.

---

## Checklist pre-switch dominio (produzione già su `www.ehe-italia.it`)

⚠️ `www.ehe-italia.it` è il sito in produzione: ricostruire su sito copia/staging e spostare il dominio solo a validazione completata.

- [ ] Duplicare/creare sito di prova Wix (non lavorare sul live)
- [ ] Ricostruire tutte le pagine e verificare mobile/desktop
- [ ] Configurare SEO base (title, description, OG/Twitter)
- [ ] Inserire JSON-LD pagina per pagina
- [ ] Preparare e testare redirect 301
- [ ] QA contenuti, link, form, filtri CMS, performance
- [ ] Solo a fine QA: spostare dominio `www.ehe-italia.it` al nuovo sito

### Tabella redirect 301 da compilare

> In Wix gli URL finali non hanno estensione `.html`.

| URL attuale su ehe-italia.it (da compilare a mano) | Nuovo URL Wix |
|---|---|
|  | `/` |
|  | `/5x1000` |
|  | `/associazione` |
|  | `/blog` |
|  | `/che-cos-e-ehe` |
|  | `/contatti` |
|  | `/diventa-socio` |
|  | `/documenti-di-consenso` |
|  | `/dove-curarsi` |
|  | `/ho-ricevuto-la-diagnosi` |
|  | `/progetti-ed-eventi` |
|  | `/ricerca` |
|  | `/servizi-per-il-paziente` |
|  | `/sostienici` |
|  | `/storie-di-pazienti-e-caregiver-ehe` |
|  | `/supporto` |
|  | `/the-pledge` |

Nota SEO: i redirect sono critici per non perdere traffico organico su query sensibili (es. "emangioendotelioma epitelioide"), fondamentali per pazienti e caregiver.

---

## Nota logo (fondamentale)

Il logo ufficiale dell'associazione è il **girasole** giallo/corallo con centro a reticolo, già caricato nell'editor Wix dall'associazione.

Gli asset SVG presenti nel repository sono ricostruzioni approssimative/placeholder: **non usarli come riferimento grafico ufficiale**.

---

## Ordine di lavoro consigliato (17 pagine)

1. Theme/token (colori + tipografia)
2. Header + menu
3. Footer
4. Template pagina (hero, sezioni, card)
5. Pagine contenuto
6. CMS `Centri` + filtro Velo
7. Form
8. SEO + JSON-LD
9. Redirect 301
10. Switch dominio finale

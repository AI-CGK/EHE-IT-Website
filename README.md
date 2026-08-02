# EHE Italia - Prototipo statico Wix-replicabile

Prototipo statico completo (HTML/CSS/JS vanilla) del nuovo sito **EHE Italia – Associazione Non Solo Laura ODV**.

## Cosa contiene

- 17 pagine HTML navigabili:
  - `index.html`
  - `che-cos-e-ehe.html`
  - `servizi-per-il-paziente.html`
  - `dove-curarsi.html`
  - `documenti-di-consenso.html`
  - `the-pledge.html`
  - `progetti-ed-eventi.html`
  - `storie-di-pazienti-e-caregiver-ehe.html`
  - `5x1000.html`
  - `diventa-socio.html`
  - `blog.html`
  - `ho-ricevuto-la-diagnosi.html`
  - `ricerca.html`
  - `sostienici.html`
  - `associazione.html`
  - `supporto.html`
  - `contatti.html`
- `assets/img/favicon.svg`: favicon provvisoria (monogramma testuale)
- `assets/css/style.css`: design system + layout responsive
- `assets/js/main.js`: menu mobile, menu a tendina, filtro centri, FAQ accordion, reveal on scroll
- SEO tecnico: metadati unici, Open Graph, Twitter card, JSON-LD, `robots.txt`, `sitemap.xml`
- `docs/GUIDA-WIX.md`: mappatura prototipo → Wix
- `docs/CONTENUTI.md`: testi da copiare/incollare in Wix

## Come aprire il prototipo

1. Clona o scarica il repository.
2. Apri `index.html` con un browser moderno.
3. Verifica layout responsive a 375px, 768px, 1440px.

## Deploy su GitHub Pages

È incluso il workflow GitHub Actions in `.github/workflows/pages.yml`.

1. In GitHub: **Settings → Pages**.
2. Source: **GitHub Actions**.
3. Ogni push su `main` pubblica automaticamente il sito.

## Logo ufficiale (da inserire)

L'header usa un segnaposto quadrato (`<span class="logo-placeholder">LOGO</span>`) accanto al
titolo testuale "EHE Italia - Associazione Non Solo Laura ODV": il marchio precedente era un
disegno non ufficiale ed e' stato rimosso.

Per inserire il logo ufficiale:

1. Aggiungere il file in `assets/img/logo-ehe-italia.png` (o `.svg`, preferibile).
2. In tutte le pagine HTML, sostituire `<span class="logo-placeholder" aria-hidden="true">LOGO</span>`
   con `<img class="logo-placeholder" src="assets/img/logo-ehe-italia.png" alt="" aria-hidden="true" />`.
3. Sostituire `assets/img/favicon.svg` e `assets/favicon.svg` con la versione quadrata del marchio.

## Note

- I dati marcati con badge `da confermare` o classe `.placeholder-note` vanno validati dall'associazione.
- La palette in `:root` è allineata ai codici ufficiali del logo EHE Italia.

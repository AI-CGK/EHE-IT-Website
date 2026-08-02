# EHE Italia - Prototipo statico Wix-replicabile

Prototipo statico completo (HTML/CSS/JS vanilla) del nuovo sito **EHE Italia – Associazione Non Solo Laura ODV**.

## Cosa contiene

- 9 pagine HTML navigabili:
  - `index.html`
  - `ho-ricevuto-la-diagnosi.html`
  - `che-cos-e-ehe.html`
  - `dove-curarsi.html`
  - `ricerca.html`
  - `sostienici.html`
  - `associazione.html`
  - `supporto.html`
  - `contatti.html`
- `assets/css/style.css`: design system + layout responsive
- `assets/js/main.js`: menu mobile, filtro centri, FAQ accordion, reveal on scroll
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

## Note

- I dati marcati con badge `da confermare` o classe `.placeholder-note` vanno validati dall'associazione.
- La palette in `:root` include TODO per allinearsi ai codici ufficiali del logo.

# Guida Wix - Mappatura prototipo EHE Italia

## Theme Manager (da impostare in Wix)

- Colore primario: `#274c77` *(TODO sostituire con HEX ufficiale logo)*
- Primario soft: `#5f7d9f`
- Accento CTA dona: `#c7663b` (usare **solo** per Dona/CTA primaria)
- Sfondo caldo: `#faf7f2`
- Testo: `#23262b`
- Supporto: `#dcebe5`

Font:
- Titoli: **Lora**
- Testo: **Inter** (18 desktop, 17 mobile, line-height 1.6)

Spaziature: multipli da 8px (8/16/24/32/48/64).

## Mappatura sezione per sezione (Home)

1. Hero: Sezione Wix a 2 colonne (testo + immagine), 2 bottoni.
2. Tre porte: Repeater 3 card.
3. Definizione EHE: sezione testo centrato (max width ~720).
4. Numeri impatto: 4 statistic cards.
5. Storia: sezione 2 colonne (immagine + quote).
6. Ricerca: Repeater 3 card progetto.
7. Partner: griglia 4 card/loghi.
8. News: Repeater 3 card.
9. Newsletter + 5x1000: sezione 2 colonne con form e CTA.
10. Footer: multicolonna con contatti, link, CF.

## Pagine Wix richieste

Ricreare in Wix le 9 pagine del prototipo mantenendo:
- Header sticky
- CTA Dona sticky su mobile
- Menu: Ho l'EHE, Supporto, Ricerca, Associazione, Sostienici + DONA

## JSON-LD (Wix Custom Code)

- Home: schema `NGO`
- `che-cos-e-ehe.html`: schema `MedicalCondition`
- Pagine FAQ: schema `FAQPage`
- Ogni pagina: `BreadcrumbList`

In Wix: **Settings → Custom Code → Add Code** (Head).

## Embed HTML necessari

- Filtro directory centri in `dove-curarsi` (input + select + cards filtrabili)
- Accordion FAQ (in alternativa componente Wix FAQ)

## SEO Wix per pagina

Per ogni pagina impostare manualmente:
- SEO title unico
- Meta description unica
- Slug coerente
- Open Graph title/description/image
- Un solo H1

## Verifiche pre-pubblicazione

- Mobile 375px, tablet 768px, desktop 1440px
- Contrasto AA
- Focus tastiera visibile
- Link interni funzionanti
- Badge “da confermare” rimossi solo dopo validazione dati

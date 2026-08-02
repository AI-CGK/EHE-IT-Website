# Analisi sito attuale EHE Italia (fase pre-implementazione)

## 0) Ambito, fonti e limiti di verifica

Questa analisi è stata redatta **prima di ulteriori modifiche al codice** e serve come base approvativa.

### Fonti usate in questa fase
- Repository prototipo corrente (`/home/runner/work/EHE-IT-Website/EHE-IT-Website`)
- URL ufficiali indicati dal committente:
  - `https://www.ehe-italia.it/documenti-di-consenso`
  - `https://www.ehe-italia.it/the-pledge`
  - `https://www.ehe-italia.it/progetti-ed-eventi`
  - `https://www.ehe-italia.it/servizi-per-il-paziente`
  - `https://www.ehe-italia.it/cos-%C3%A8-ehe`
  - `https://www.ehe-italia.it/blog`
  - `https://www.ehe-italia.it/storie-di-pazienti-e-caregiver-ehe`
  - `https://www.ehe-italia.it/5x1000`
  - `https://www.ehe-italia.it/diventa-socio`
- Dati istituzionali e centri clinici forniti direttamente dal committente.

### Limite tecnico rilevato in ambiente
Dall’ambiente di lavoro corrente il dominio `www.ehe-italia.it` risulta non risolvibile/bloccato, quindi non è stato possibile fare crawling diretto pagina-per-pagina o ispezione CSS live.

**Impatto sul deliverable:**
- La mappa e la gap analysis sono affidabili sui contenuti richiesti esplicitamente.
- La palette “verificata da logo” è stata impostata come **blocco approvativo**: va chiusa con estrazione colore dai file logo ufficiali condivisi (pipetta su asset sorgente) prima di passare all’implementazione visual.

---

## 1) Mappa completa della navigazione (target da preservare)

> Obiettivo: mantenere tutte le pagine considerate strategiche dall’associazione, riorganizzando solo l’architettura informativa.

## Navigazione principale proposta (allineata alle sezioni esistenti richieste)

1. **Home**
2. **Cos’è l’EHE**
3. **Servizi per il paziente**
4. **Dove curarsi**
5. **Documenti e advocacy**
   - Documenti di consenso
   - The Pledge
6. **Progetti ed eventi**
7. **Storie di pazienti e caregiver**
8. **Sostienici**
   - 5x1000
   - Diventa socio
   - Donazioni (bonifico/altre modalità)
9. **Associazione**
10. **Blog**
11. **Contatti**

## URL/pagine da includere esplicitamente (must-preserve)

- `/` (home)
- `/cos-%C3%A8-ehe`
- `/servizi-per-il-paziente`
- `/dove-curarsi` (pagina rete centri)
- `/documenti-di-consenso`
- `/the-pledge`
- `/progetti-ed-eventi`
- `/storie-di-pazienti-e-caregiver-ehe`
- `/5x1000`
- `/diventa-socio`
- `/blog`
- `/associazione` (o equivalente “chi siamo”)
- `/contatti`

## Pagine derivate/figlie attese

- Singole storie pazienti (es. già emerse: `la-storia-di-elena-e-alessandra`, `la-storia-di-chiara`)
- Eventuali singoli articoli/eventi (detail page)
- Eventuali pagine operative (es. conferma invio modulo)

---

## 2) Palette colori verificata (stato e decisione)

## Requisito non negoziabile
Il brief richiede codici HEX reali del brand/logo e vieta colori inventati.

## Stato attuale
Nel prototipo è presente una palette non approvata (incluso verde di supporto), già contestata dal committente.

## Decisione di progetto
Prima di qualunque rework grafico:
1. estrarre i colori dai **3 file logo ufficiali** condivisi (asset sorgente ad alta qualità),
2. definire token brand finali (primario, primario scuro, CTA, sfondi, neutri),
3. validare contrasto AA/AAA sulle combinazioni testo/sfondo,
4. congelare design token in un unico file di riferimento.

## Uscita attesa per approvazione palette
Tabella finale da compilare in approvazione:
- Primario brand (HEX)
- Primario scuro per testo/link (HEX)
- Accento CTA (HEX)
- Accento secondario (HEX)
- Neutro sfondo 1/2 (HEX)
- Neutro testo 1/2 (HEX)
- Regole d’uso (dove può/non può essere usato ogni colore)

---

## 3) Elenco contenuti mancanti nel prototipo (priorità)

## Must-have (bloccanti)
- **Logo ufficiale** in header e nei punti istituzionali (footer, eventuale pagina associazione)
- **Documenti di consenso** (pagina dedicata, non link disperso)
- **The Pledge** (pagina dedicata)
- **Progetti ed eventi** (sezione completa)
- **Servizi per il paziente** (pagina completa)
- **Cos’è l’EHE** in versione approfondita (incluse traslocazioni)
- **Storie di pazienti e caregiver** con almeno 5 storie reali
- **5x1000** con guida operativa passo-passo
- **Diventa socio** come pagina dedicata
- **Dati istituzionali corretti** in tutte le pagine chiave (footer, contatti, sostienici)

## Should-have
- Struttura IA orientata a 3 pubblici (pazienti, donatori, professionisti)
- Partner/logo rete scientifica e associativa (se presenti sul sito sorgente)
- Dettaglio contenuti “progetti ed eventi” per categorie

## Nice-to-have
- Migliorie UX: filtri avanzati per eventi/storie, CTA contestuali personalizzate
- Blocco “risorse rapide” cross-page (diagnosi, diritti, contatti utili)

---

## 4) Asset da acquisire (con sorgente)

## Branding e identità
- Logo ufficiale in formato vettoriale o PNG ad alta risoluzione (3 varianti condivise)
- Eventuali varianti monocromatiche/negative per sfondi

## Pagine e contenuti editoriali
- Testi e media da:
  - `/cos-%C3%A8-ehe` (inclusa grafica traslocazioni)
  - `/servizi-per-il-paziente`
  - `/documenti-di-consenso`
  - `/the-pledge`
  - `/progetti-ed-eventi`
  - `/storie-di-pazienti-e-caregiver-ehe`
  - `/5x1000`
  - `/diventa-socio`
  - `/blog`

## Storie pazienti
- Almeno 5 storie complete (titolo, autore/nome se pubblicabile, testo, foto, consenso uso immagine)

## Rete centri
- Foto sedi cliniche fornite dal committente (nomi file già disponibili)
- Dati anagrafici/contatti strutturati per centro (già forniti)
- Eventuali loghi ospedalieri con diritti di utilizzo web

## Partner e credibilità istituzionale
- Loghi partner/enti (es. network clinico/scientifico) da verificare su sito sorgente e autorizzazioni d’uso

---

## 5) Raccomandazioni architetturali (3 pubblici)

## Pazienti e caregiver (priorità UX massima)
- Percorso immediato in header: **Ho ricevuto diagnosi / Cos’è EHE / Servizi / Dove curarsi / Storie**
- Contenuti clinici in linguaggio chiaro con CTA a supporto umano
- Sezione servizi e diritti sempre raggiungibile in 1 click

## Donatori e sostenitori
- Percorso dedicato: **5x1000 / Dona / Diventa socio / Trasparenza associazione**
- Ridurre frizione operativa (istruzioni guidate, dati bancari chiari, conferme)
- CTA coerenti su home, footer e pagine ad alta visita

## Professionisti sanitari
- Accesso rapido a: **Documenti di consenso / The Pledge / Progetti / Eventi / rete centri**
- Materiali tecnici separati dai contenuti divulgativi, ma interconnessi

## Principio guida IA
Non eliminare pagine rilevanti: **riorganizzare per percorsi utente**, mantenendo completezza contenutistica richiesta dall’associazione.

---

## 6) Contenuti specifici da replicare (criteri di qualità)

## Cos’è l’EHE
- Struttura approfondita, non solo intro breve
- Presenza esplicita della grafica traslocazioni (WWTR1-CAMTA1 / YAP1-TFE3)
- Sezioni su sedi, sintomi, diagnosi, rarità e percorso clinico

## Documenti di consenso + The Pledge
- Due pagine distinte ma collegate tra loro
- Chiarezza su destinatari (pazienti/professionisti)
- Accesso diretto ai documenti scaricabili/consultabili

## Storie di pazienti
- Almeno 5 storie reali pubblicate con struttura uniforme
- Evidenza editoriale: titolo, contesto, supporto ricevuto, call to action utile

## Servizi per il paziente
- Esplicitare: supporto informativo, orientamento centri, supporto psicologico/nutrizione/diritti (se presenti), contatti operativi

## Progetti ed eventi
- Distinguere progetto vs evento
- Metadati minimi: titolo, data, stato, obiettivo, eventuale recap/report

## 5x1000
- Guida operativa concreta (passi compilazione) + codice fiscale

## Diventa socio
- Pagina dedicata con flusso chiaro (requisiti, quota, modulo, pagamento, conferma)

---

## 7) Informazioni istituzionali da uniformare (fonte committente)

- **Associazione:** EHE ITALIA Associazione Non Solo LAURA ODV
- **Sede legale:** Concorezzo, 20863 (MB)
- **Codice Fiscale:** 95294240635
- **Email:** info@ehe-italia.it
- **IBAN:** IT05E0501803400000017044942
- **SWIFT CODE:** ETICIT22XXX

Regola: questi dati devono essere coerenti in footer, contatti, sostienici, diventa socio, 5x1000.

---

## 8) Valutazione blog (pro/contro + raccomandazione)

## Pro
- Migliora SEO su query informative long-tail (patologia rara, diagnosi, centri, diritti)
- Rafforza autorevolezza medico-associativa nel tempo
- Supporta engagement continuativo con pazienti/caregiver/donatori

## Contro
- Se non aggiornato, può trasmettere abbandono e ridurre fiducia
- Richiede ownership editoriale minima e calendario

## Raccomandazione
**Includere il blog nell’architettura da subito** (menu + template + tassonomia), con rilascio operativo in 2 modalità:
1. **MVP:** pubblicazione iniziale con pochi contenuti cornerstone (es. cos’è EHE, percorso paziente, documenti chiave)
2. **Run mode:** cadenza sostenibile (es. 1 contenuto/mese minimo, 2/mese ideale) con piano editoriale semestrale.

---

## 9) Timeline realistico (riscrittura completa)

## Fase 1 — Audit e allineamento contenuti (3–5 giorni)
- Inventario pagine/asset
- Chiusura palette ufficiale da logo
- Conferma struttura IA finale

## Fase 2 — Architettura e design system (4–6 giorni)
- Navigazione definitiva per 3 pubblici
- Token grafici/typography/componenti
- Prototipo ad alta fedeltà delle pagine core

## Fase 3 — Produzione contenuti e pagine (8–12 giorni)
- Implementazione pagine mancanti e revisione pagine esistenti
- Integrazione storie, documenti, servizi, eventi, 5x1000, diventa socio
- Inserimento asset visuali e loghi

## Fase 4 — QA, accessibilità, SEO, rifiniture (4–6 giorni)
- Verifiche cross-device
- Coerenza contenuti istituzionali
- QA link/documenti/form

## Totale stimato
**19–29 giorni lavorativi** (dipende da velocità approvazioni, disponibilità asset finali e revisioni contenuti clinici).

---

## 10) Gap sintetico tra prototipo attuale e standard richiesto

Il prototipo corrente copre solo una parte del perimetro. Per essere allineato al livello richiesto (strategico, fedele al brand, completo e professionale) sono necessari:
- completamento contenutistico strutturale,
- riallineamento totale identità visuale su logo ufficiale,
- consolidamento percorsi utente per pazienti/donatori/professionisti,
- revisione editoriale e istituzionale puntuale.

Questa analisi è pronta per approvazione; dopo approvazione si procede alla fase implementativa.

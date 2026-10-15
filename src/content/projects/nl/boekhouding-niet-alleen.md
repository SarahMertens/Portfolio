---
title: Boekhouding Niet Alleen
summary: Boekhoudapp voor een vrijwilligersorganisatie, van een desktopprogramma op één laptop naar een beveiligde webapp.
featured: true
order: 1
year: 2026
context: volunteer
role: Volledig zelf ontwikkeld, in overleg met de gebruikers
tech: [JavaScript, Supabase, PostgreSQL, Netlify, GitHub Actions, Java, JavaFX]
---

## Het probleem

Mijn mama houdt de boekhouding bij van de vrijwilligersgroep Niet Alleen. Daarvoor bouwde ik eerst een desktopapp in Java en JavaFX met een lokale SQLite-databank. Die werkte, maar stond enkel op haar laptop. De organisatie stelde de terechte vraag: *wat als zij stopt, hoe komen wij dan aan de gegevens?*

Daarnaast waren er drie ergernissen in het dagelijks gebruik:

- Het Excel-overzicht, het enige dat werd doorgestuurd, was onoverzichtelijk.
- Wie een betaling een andere naam gaf ("lidgeld" of "lidgeld 2026"), vond ze niet terug.
- Klopte het saldo niet met de bank-app, dan moest alles herlezen worden om de fout te vinden.

## Mijn aanpak

Ik heb de app opnieuw opgebouwd als webapp, met **Supabase** (PostgreSQL) als gedeelde databank en hosting op **Netlify**. Belangrijk was dat het uitzicht hetzelfde bleef, want mijn mama gebruikt het al jaren.

- **Beveiliging in de databank zelf:** met Row Level Security bepaalt de databank wie wat mag zien of aanpassen (rollen *lezen*, *schrijven* en *beheer*). Nieuwe accounts kunnen enkel op uitnodiging.
- **Historiek:** elke toevoeging, aanpassing en verwijdering wordt bewaard: wie, wanneer, oud en nieuw.
- **Backups:** export naar Excel en JSON, plus een GitHub Action die twee keer per week automatisch een backup maakt.
- **Overzetten:** een importfunctie leest de oude SQLite-databank in en controleert de saldi voor er iets wordt overschreven.

## De uitdaging: fouten vinden zonder alles te herlezen

Klopt het saldo niet met de bank, dan zegt de app nu hoe groot het verschil is en waar de fout kan zitten. Hij stelt ook waarschijnlijke oorzaken voor: iets dubbel ingegeven, IN en UIT omgewisseld (het verschil is dan precies het dubbele van een bedrag), een tikfout of de verkeerde rekening. Daarna zoek je stap voor stap: *"Was het saldo op het einde van 12/08 juist in de bank-app?"* Na een paar vragen weet je op welke dag de fout zit.

## Bewuste keuzes

Ik koos bewust voor **geen eigen server**. Voor een vrijwilligersorganisatie zijn kosten, onderhoud en overdraagbaarheid belangrijker dan de nieuwste technologie. Een statische site met een beheerde databank blijft werken, ook als niemand er nog naar omkijkt.

## Wat ik leerde

Luisteren naar de echte gebruikers is minstens zo belangrijk als de code. De meest gewaardeerde verbeteringen waren geen grote features, maar kleine dingen die dagelijks tijd besparen.

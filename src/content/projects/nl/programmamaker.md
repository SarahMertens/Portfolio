---
title: Programmamaker
summary: Webapp die van losse Word-documenten en e-mails automatisch een opgemaakt tweemaandelijks programma maakt.
featured: true
order: 4
year: 2026
context: volunteer
role: Volledig zelf ontwikkeld, in overleg met de gebruiker
tech:
  [
    JavaScript,
    HTML,
    CSS,
    JSZip,
    Office Open XML,
    Node.js test runner,
    GitHub Actions,
  ]
github: https://github.com/SarahMertens/programmamaker-demo
demo: https://sarahmertens.github.io/programmamaker-demo/
embed: true
demoNote: Klik in de app op "Probeer met voorbeelden" om drie ingestuurde activiteiten in te laden. Alle namen en nummers zijn verzonnen.
---

## Het probleem

Een vriendenkring maakt elke twee maanden een programma met activiteiten. Leden sturen hun activiteit op allerlei manieren door: als Word-document, als tekst in een e-mail, telkens net iets anders opgemaakt. Alles moest met de hand overgetypt en opgemaakt worden in één Word-document, terwijl de eerste pagina en de opmaak altijd hetzelfde zijn.

## Wat de app doet

- Word-bestanden in de app slepen of de tekst uit een e-mail plakken
- Datum, titel, beschrijving, afspraakplaats, prijs, contactpersoon en opmerkingen worden **automatisch herkend**
- **Waarschuwingen** voor een verkeerde weekdag, ontbrekende velden, dubbels, datums buiten de periode of een inschrijfdatum na de activiteit
- Een **live voorbeeld** van de A4-pagina's
- Eén klik geeft het nieuwe programma als **Word-bestand**, met dezelfde eerste pagina en huisstijl als het vorige

## De uitdaging: Word lezen en schrijven in de browser

Een .docx-bestand is eigenlijk een zip met XML-bestanden. De app pakt het vorige programma uit, neemt pagina 1 en de opmaak letterlijk over, en vervangt alleen het deel met de activiteiten. Er is één bibliotheek (JSZip) om de zip te openen. De rest, zoals het lezen en schrijven van de Word-XML, staat in de eigen code.

## Bewuste keuzes

- **Geen server en geen databank:** alles draait in de browser en het werk wordt lokaal bewaard. Dat is gratis, privé en er kan niets stukgaan.
- **Geen framework:** gewone JavaScript-modules, opgedeeld in model, inlezen, Word, voorbeeld en interface.
- **Tests:** het inlezen van teksten en de periodes is getest met de testrunner van Node.js, die bij elke wijziging automatisch draait via GitHub Actions.

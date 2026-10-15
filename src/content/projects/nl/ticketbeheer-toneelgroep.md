---
title: Ticketbeheer voor een toneelvoorstelling
summary: Reservaties, Excel-export en printbare tickets voor de voorstelling van een toneelgroep, gebouwd met Blazor en Firebase.
featured: true
order: 3
year: 2026
context: personal
role: Volledig zelf ontwikkeld
tech:
  [
    C#,
    Blazor WebAssembly,
    .NET,
    Firebase,
    Cloud Firestore,
    xUnit,
    GitHub Actions,
  ]
github: https://github.com/SarahMertens/Toneel-website
demo: https://sarahmertens.github.io/Toneel-website/
embed: true
demoNote: Kies op het aanmeldscherm voor de demomodus. Die werkt met verzonnen gegevens die enkel in je eigen browser bewaard worden.
---

## Het probleem

Voor de voorstelling _Er was eens … Rare Wereld!_ van Toneelgroep De Ballon moesten de reservaties ergens bijgehouden worden: wie reserveerde hoeveel plaatsen voor welke voorstelling, en hoeveel plaatsen zijn er nog?

## Wat de app doet

- Reservaties per voorstelling ingeven en aanpassen
- Automatische totalen per voorstelling
- De lijst exporteren naar Excel
- Per reservatie een printbaar ticket maken
- Een demomodus met verzonnen gegevens, zodat iedereen de app kan uitproberen zonder account

## Technische keuzes

- **Blazor WebAssembly:** de hele app draait in de browser, in C#. Er is geen eigen server nodig, dus ze kan gratis op **GitHub Pages** staan.
- **Firebase:** Cloud Firestore als databank en Firebase Authentication voor de login, allebei via hun REST API.
- **Beveiliging via `firestore.rules`:** enkel gebruikers in de lijst `admins` kunnen gegevens lezen of schrijven.
- **Gescheiden lagen:** alle logica zit in een aparte C#-bibliotheek (`Toneel.Core`) zonder afhankelijkheden. Zo is ze los van de interface te testen.

## Testen en automatisatie

De kernlogica is getest met **xUnit**. Bij elke push bouwt, test en publiceert **GitHub Actions** de app automatisch.

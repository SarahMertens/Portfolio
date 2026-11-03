---
title: Toneelgroep De Ballon
summary: Website met beheer voor een toneelgroep in Oostende. Begonnen als examenproject, nu live op een eigen server met Docker en HTTPS.
featured: true
order: 2
year: 2026
context: volunteer
role: Frontend, backend en server. Het ontwerp koos ik samen met de toneelgroep.
tech:
  [
    React,
    TypeScript,
    Vite,
    Tailwind CSS,
    NestJS,
    Drizzle ORM,
    MySQL,
    Docker,
    Caddy,
    Jest,
    Cypress,
  ]
demo: https://toneelgroepdeballon.be
---

## Het doel

Mijn mama leidt Toneelgroep De Ballon, een amateurtoneelgroep die speelt in de ontmoetingscentra van Oostende. De groep wilde een website om haar voorstellingen bekend te maken en nieuwe spelers te vinden. Mama moest alles zelf kunnen aanpassen: teksten, producties, foto's en speeldata, zonder mij te moeten bellen.

## Van examenproject naar echte website

De eerste versie was mijn examenopdracht voor Front-end Web Development en Web Services aan HOGENT (18/20). In 2026 bouwde ik de site helemaal opnieuw om ze echt online te zetten: met een nieuw ontwerp, strengere beveiliging en een eigen server. Sinds november 2026 staat ze op [toneelgroepdeballon.be](https://toneelgroepdeballon.be).

## Wat ik bouwde

- **Publieke site (React):** in de stijl van een oude theateraffiche, met zwevende ballonnen die je kan laten knappen. Ze blijven achter de inhoud en staan stil voor wie minder beweging wil (`prefers-reduced-motion`).
- **Beheeromgeving:** teksten (met vet, cursief en links), producties, foto's en speeldata aanpassen. Speeldata worden altijd in Belgische tijd ingegeven, ook rond de overgang naar zomer- of wintertijd.
- **REST API (NestJS):** met Drizzle ORM, MySQL, strikte validatie en documentatie via Swagger. Foto's staan op Cloudinary.

## Beveiliging

- De login zit in een cookie met `httpOnly`, `Secure` en `SameSite=Strict`, niet in `localStorage`. Zo kan JavaScript in de browser de sessie niet stelen.
- Wachtwoorden worden gehasht met **argon2**. Een onbekend e-mailadres krijgt even snel een antwoord als een fout wachtwoord, zodat je niet kan raden wie een account heeft.
- Een limiet op het aantal loginpogingen en uploads per IP-adres, Helmet met een strikte Content-Security-Policy, en geen publieke registratie.
- De app gebruikt een databankgebruiker met alleen de rechten die ze nodig heeft. De migraties draaien met een aparte gebruiker.

## Online zetten

- **Eigen VPS (Ubuntu):** inloggen alleen met een SSH-sleutel, een firewall, fail2ban en automatische beveiligingsupdates.
- **Docker Compose:** Caddy (met automatisch HTTPS via Let's Encrypt), de backend en MySQL. De databank zit op een intern netwerk en is van buitenaf niet bereikbaar.
- **Back-ups:** elke nacht automatisch, met een script dat test of een back-up ook echt terug te zetten is.

## Testen

- **Backend:** unit- en end-to-endtests met Jest, tegen een echte MySQL-databank.
- **Frontend:** end-to-endtests met Cypress voor de belangrijkste beheerflows.

## Hoe ik werkte

Ik gebruikte Claude (AI) als begeleider. Het stelde per stap de code voor en testte die vooraf. Ik zette alles zelf in mijn project, voerde de commando's uit op mijn laptop en de server, en zocht mee naar de oorzaak als iets niet werkte. Zo leerde ik vooral veel over servers, DNS en beveiliging.

## Wat ik leerde

Een website online zetten is veel meer dan code schrijven: een domein en DNS, certificaten, back-ups die je ook test, en een beheer dat iemand zonder IT-achtergrond echt kan gebruiken.
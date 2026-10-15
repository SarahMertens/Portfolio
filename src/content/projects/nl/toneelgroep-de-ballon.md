---
title: Toneelgroep De Ballon
summary: Website met beheeromgeving voor een amateurtoneelgezelschap, met eigen REST API, authenticatie en geautomatiseerde tests.
featured: true
order: 2
year: 2025
context: school
role: Individuele examenopdracht, frontend en backend
tech: [React, Vite, Tailwind CSS, NestJS, TypeScript, Drizzle ORM, MySQL, JWT, Docker, Jest, Cypress]
---

## Het doel

Toneelgroep De Ballon wilde mensen laten weten dat ze bestaat, nieuwe leden warm maken voor de lessen en praktische info over voorstellingen tonen. Tegelijk moest de groep zelf alles kunnen aanpassen, zonder een developer te bellen.

Dit was mijn examenopdracht voor de vakken Front-end Web Development en Web Services aan HOGENT.

## Wat ik bouwde

**Publieke website (React):** overzicht van voorstellingen met detailpagina's, fotogalerij, speeldata, info over de lessen en een "Over ons"-pagina. Alles is responsive.

**Beheeromgeving:** toneelstukken, personages, acteurs, speeldata en afbeeldingen beheren. Ook de vaste teksten van de site, zoals "Over ons" en de lesinfo, staan in de databank en zijn aanpasbaar.

**REST API (NestJS):** gestructureerd per domein (toneelstuk, optreden, personage, acteur, lessen, …), met validatie via DTO's en documentatie via Swagger.

## Technische keuzes

- **Authenticatie met JWT en rollen:** enkel beheerders kunnen iets aanpassen. Wachtwoorden worden gehasht met **argon2**.
- **Drizzle ORM** met migraties en seed-data, zodat de databank altijd reproduceerbaar is.
- **Beveiliging:** Helmet voor HTTP-headers en een CORS-configuratie per omgeving.
- **Docker** voor de databank tijdens de ontwikkeling en voor de deployment.

## Testen

- **Backend:** unit- en end-to-endtests met Jest en Supertest. Testcontainers start voor de tests een echte MySQL-databank in Docker.
- **Frontend:** end-to-endtests met Cypress voor de belangrijkste beheerflows.

## Wat ik leerde

Een volledige applicatie van databank tot interface zelf opzetten, en vooral: hoe je ze zo structureert dat ze testbaar en onderhoudbaar blijft.

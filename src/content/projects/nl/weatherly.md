---
title: Weatherly
summary: Full-stack weerdashboard met zoeken, favorieten en een eigen API, gemaakt als opdracht voor een stage.
order: 5
year: 2026
context: internship
role: Volledig zelf ontwikkeld
tech: [React, TypeScript, Tailwind CSS, NestJS, Drizzle ORM, MySQL, Docker, Jest, Cypress, GitHub Actions]
github: https://github.com/SarahMertens/WeatherApp
---

## De opdracht

Een thuisopdracht voor een full-stack stage: bouw een weerapp waarin je steden kan zoeken, het huidige weer ziet en favorieten kan bewaren.

## Wat ik bouwde

- Steden zoeken terwijl je typt (met *debouncing*, zodat niet bij elke toets een verzoek vertrekt)
- Temperatuur, gevoelstemperatuur, vochtigheid, wind en een weericoon, in Celsius of Fahrenheit
- Favorieten die bewaard worden in MySQL, zonder dubbels
- Duidelijke toestanden voor laden, geen resultaten en fouten
- Een responsive interface die volledig met het toetsenbord te bedienen is

## Technische keuzes

- De **NestJS-backend** staat tussen de app en de gratis weerdienst Open-Meteo. Zo kan de bron later vervangen worden zonder de frontend aan te passen.
- Dubbele favorieten worden geweigerd door een **unieke index in de databank**, niet enkel in de code.
- Antwoorden die te laat binnenkomen worden genegeerd, zodat de interface nooit oude resultaten toont.
- Getest met **Jest, Supertest en Testcontainers** (backend) en **Cypress** (frontend), automatisch bij elke push.

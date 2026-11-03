---
title: Theatre group De Ballon
summary: Website with an admin area for a theatre group in Ostend. It started as an exam project and now runs live on its own server with Docker and HTTPS.
featured: true
order: 2
year: 2026
context: volunteer
role: Frontend, backend and server. I chose the design together with the theatre group.
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

## The goal

My mum runs Toneelgroep De Ballon, an amateur theatre group that performs in the community centres of Ostend. The group wanted a website to promote its shows and find new actors. My mum had to be able to change everything herself: texts, productions, photos and performance dates, without having to call me.

## From exam project to a real website

The first version was my exam project for Front-end Web Development and Web Services at HOGENT (18/20). In 2026 I rebuilt the site from scratch to put it online for real: with a new design, stricter security and its own server. Since November 2026 it has been live at [toneelgroepdeballon.be](https://toneelgroepdeballon.be) (in Dutch).

## What I built

- **Public site (React):** in the style of an old theatre poster, with floating balloons you can pop. They stay behind the content and stand still for visitors who prefer less motion (`prefers-reduced-motion`).
- **Admin area:** edit texts (with bold, italics and links), productions, photos and performance dates. Dates are always entered in Belgian time, also around the switch to summer or winter time.
- **REST API (NestJS):** with Drizzle ORM, MySQL, strict validation and Swagger documentation. Photos are stored on Cloudinary.

## Security

- The login lives in a cookie with `httpOnly`, `Secure` and `SameSite=Strict`, not in `localStorage`. That way JavaScript in the browser cannot steal the session.
- Passwords are hashed with **argon2**. An unknown email address gets an answer just as fast as a wrong password, so nobody can guess who has an account.
- A limit on login attempts and uploads per IP address, Helmet with a strict Content Security Policy, and no public sign-up.
- The app uses a database user with only the rights it needs. Migrations run with a separate user.

## Going live

- **Own VPS (Ubuntu):** login only with an SSH key, a firewall, fail2ban and automatic security updates.
- **Docker Compose:** Caddy (with automatic HTTPS via Let's Encrypt), the backend and MySQL. The database sits on an internal network and cannot be reached from outside.
- **Backups:** automatically every night, with a script that tests whether a backup can really be restored.

## Testing

- **Backend:** unit and end-to-end tests with Jest, against a real MySQL database.
- **Frontend:** end-to-end tests with Cypress for the main admin flows.

## How I worked

I used Claude (AI) as a guide. It suggested the code step by step and tested it first. I put everything into my project myself, ran the commands on my laptop and the server, and helped find the cause when something didn't work. That taught me a lot about servers, DNS and security in particular.

## What I learned

Putting a website online is much more than writing code: a domain and DNS, certificates, backups you actually test, and an admin area that someone without an IT background can really use.
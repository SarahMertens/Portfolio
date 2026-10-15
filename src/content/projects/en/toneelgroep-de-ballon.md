---
title: Theatre group De Ballon
summary: Website with an admin area for an amateur theatre company, with its own REST API, authentication and automated tests.
featured: true
order: 2
year: 2025
context: school
role: Individual exam project, frontend and backend
tech: [React, Vite, Tailwind CSS, NestJS, TypeScript, Drizzle ORM, MySQL, JWT, Docker, Jest, Cypress]
---

## The goal

Theatre group De Ballon wanted to make people aware of the group, attract new members to its classes and show practical information about performances. At the same time, the group had to be able to update everything itself, without calling a developer.

This was my exam project for the courses Front-end Web Development and Web Services at HOGENT.

## What I built

**Public website (React):** an overview of plays with detail pages, a photo gallery, performance dates, class information and an "About us" page. Everything is responsive.

**Admin area:** manage plays, characters, actors, performance dates and images. The fixed texts of the site, such as "About us" and the class information, are stored in the database and can be edited too.

**REST API (NestJS):** organised per domain (play, performance, character, actor, classes, …), with validation through DTOs and documentation through Swagger.

## Technical choices

- **Authentication with JWT and roles:** only admins can change anything. Passwords are hashed with **argon2**.
- **Drizzle ORM** with migrations and seed data, so the database is always reproducible.
- **Security:** Helmet for HTTP headers and a CORS configuration per environment.
- **Docker** for the database during development and for deployment.

## Testing

- **Backend:** unit and end-to-end tests with Jest and Supertest. Testcontainers starts a real MySQL database in Docker for the tests.
- **Frontend:** end-to-end tests with Cypress for the main admin flows.

## What I learned

How to set up a complete application, from database to interface, and above all how to structure it so it stays testable and maintainable.

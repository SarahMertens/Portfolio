---
title: Weatherly
summary: Full-stack weather dashboard with search, favourites and its own API, built as an internship assignment.
order: 5
year: 2026
context: internship
role: Built entirely by me
tech: [React, TypeScript, Tailwind CSS, NestJS, Drizzle ORM, MySQL, Docker, Jest, Cypress, GitHub Actions]
github: https://github.com/SarahMertens/WeatherApp
---

## The assignment

A take-home assignment for a full-stack internship: build a weather app where you can search for cities, see the current weather and save favourites.

## What I built

- City search as you type (with *debouncing*, so not every keystroke sends a request)
- Temperature, feels-like temperature, humidity, wind and a weather icon, in Celsius or Fahrenheit
- Favourites stored in MySQL, without duplicates
- Clear loading, empty and error states
- A responsive interface that can be used entirely with the keyboard

## Technical choices

- The **NestJS backend** sits between the app and the free weather service Open-Meteo, so the source can be replaced later without touching the frontend.
- Duplicate favourites are rejected by a **unique index in the database**, not only in code.
- Responses that arrive too late are ignored, so the interface never shows stale results.
- Tested with **Jest, Supertest and Testcontainers** (backend) and **Cypress** (frontend), automatically on every push.

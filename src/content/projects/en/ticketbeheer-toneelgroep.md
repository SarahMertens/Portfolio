---
title: Box office for a theatre play
summary: Reservations, Excel export and printable tickets for a theatre group's play, built with Blazor and Firebase.
featured: true
order: 3
year: 2026
context: personal
role: Built entirely by me
tech: [C#, Blazor WebAssembly, .NET, Firebase, Cloud Firestore, xUnit, GitHub Actions]
github: https://github.com/SarahMertens/Toneel-website
---

## The problem

For the play *Er was eens … Rare Wereld!* by theatre group De Ballon, reservations had to be tracked somewhere: who reserved how many seats for which performance, and how many seats are left?

## What the app does

- Add and edit reservations per performance
- Automatic totals per performance
- Export the list to Excel
- Generate a printable ticket for each reservation
- A demo mode with made-up data, so anyone can try the app without an account

## Technical choices

- **Blazor WebAssembly:** the whole app runs in the browser, in C#. It needs no server of its own, so it can be hosted for free on **GitHub Pages**.
- **Firebase:** Cloud Firestore as the database and Firebase Authentication for sign-in, both through their REST API.
- **Security through `firestore.rules`:** only users in the `admins` list can read or write data.
- **Separate layers:** all logic lives in a separate C# library (`Toneel.Core`) with no dependencies, so it can be tested independently of the interface.

## Testing and automation

The core logic is tested with **xUnit**. On every push, **GitHub Actions** builds, tests and publishes the app automatically.

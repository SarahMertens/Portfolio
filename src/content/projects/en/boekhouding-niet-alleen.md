---
title: Bookkeeping for Niet Alleen
summary: Bookkeeping app for a volunteer organisation, moved from a desktop program on one laptop to a secure web app.
featured: true
order: 1
year: 2026
context: volunteer
role: Built entirely by me, together with the users
tech: [JavaScript, Supabase, PostgreSQL, Netlify, GitHub Actions, Java, JavaFX]
---

## The problem

My mother keeps the books for the volunteer group Niet Alleen. I first built a desktop app for her in Java and JavaFX with a local SQLite database. It worked, but it only lived on her laptop. The organisation rightly asked: *if she stops, how do we get to the data?*

There were also three daily frustrations:

- The Excel overview, the only thing that was ever shared, was hard to read.
- If a payment was named differently ("membership" or "membership 2026"), you couldn't find it.
- When the balance didn't match the banking app, everything had to be reread to find the mistake.

## My approach

I rebuilt the app as a web app, with **Supabase** (PostgreSQL) as a shared database and hosting on **Netlify**. The layout had to stay the same, because my mother has been using it for years.

- **Security in the database itself:** Row Level Security decides who can see or change what (roles *read*, *write* and *admin*). New accounts are invitation-only.
- **History:** every addition, change and deletion is logged: who, when, old and new value.
- **Backups:** export to Excel and JSON, plus a GitHub Action that makes an automatic backup twice a week.
- **Migration:** an import feature reads the old SQLite database and checks the balances before anything is overwritten.

## The challenge: finding mistakes without rereading everything

When the balance doesn't match the bank, the app now shows the difference and where the mistake can be. It suggests likely causes: a duplicate entry, IN and OUT swapped (the difference is then exactly twice an amount), a typo or the wrong account. Then it narrows it down step by step: *"Was the balance at the end of 12/08 correct in the banking app?"* After a few questions you know which day the mistake is on.

## Deliberate choices

I deliberately chose **not to run my own server**. For a volunteer organisation, cost, maintenance and handover matter more than the newest technology. A static site with a managed database keeps working, even when nobody looks after it.

## What I learned

Listening to the real users matters as much as the code. The most appreciated improvements weren't big features, but small things that save time every day.

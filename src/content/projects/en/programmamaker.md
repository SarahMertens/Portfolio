---
title: Programme maker
summary: Web app that turns loose Word documents and emails into a formatted bimonthly programme automatically.
featured: true
order: 4
year: 2026
context: volunteer
role: Built entirely by me, together with the user
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
demoNote: Click "Probeer met voorbeelden" (Try with examples) to load three submitted activities. All names and numbers are made up. The interface is in Dutch.
---

## The problem

A social club publishes a programme of activities every two months. Members send in their activity in all sorts of ways: as a Word document or as text in an email, each formatted slightly differently. Everything had to be retyped and formatted by hand in one Word document, even though the first page and the layout are always the same.

## What the app does

- Drag Word files into the app or paste the text from an email
- Date, title, description, meeting place, price, contact person and notes are **recognised automatically**
- **Warnings** for a wrong weekday, missing fields, duplicates, dates outside the period or a registration deadline after the activity
- A **live preview** of the A4 pages
- One click produces the new programme as a **Word file**, with the same first page and house style as the previous one

## The challenge: reading and writing Word in the browser

A .docx file is really a zip of XML files. The app unpacks the previous programme, copies page 1 and the styles exactly, and replaces only the part with the activities. One library (JSZip) opens the zip. Everything else, such as reading and writing the Word XML, is in the app's own code.

## Deliberate choices

- **No server and no database:** everything runs in the browser and the work is saved locally. It's free, private and nothing can break.
- **No framework:** plain JavaScript modules, split into model, parsing, Word, preview and interface.
- **Tests:** parsing texts and periods is tested with the Node.js test runner, which runs automatically on every change through GitHub Actions.

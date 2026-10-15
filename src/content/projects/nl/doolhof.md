---
title: Doolhof
summary: Doolhofspel in het donker met bewegende muren en jagers, gebouwd in Java zonder game-engine.
order: 6
year: 2026
context: personal
role: Volledig zelf ontwikkeld
tech: [Java, Swing, Java 2D, Maven, JUnit 5, Mockito]
github: https://github.com/SarahMertens/Doolhof
---

## Het spel

Je loopt door een donker doolhof en ziet enkel wat je licht bereikt. Zoek de sleutels en ontwijk de jagers. Ondertussen verschuiven de muren. Met een lichtflits zie je even het hele level en verdoof je de jagers in de buurt. Sprinten kan ook, maar dan horen ze je sneller. Er zijn acht levels, en level 0 is het doolhof uit mijn allereerste programma.

## Hoe het gebouwd is

- **Geen game-engine en geen externe bibliotheken:** de doolhofgenerator, padzoeken, belichting, het gedrag van de jagers en de geluiden staan allemaal in de eigen code.
- **Drie lagen** (presentatie, domein en opslag) die enkel via onveranderlijke DTO's met elkaar praten. Een test controleert automatisch dat geen enkele laag die regel breekt.
- **156 tests,** onder andere: is elk doolhof volledig bereikbaar, verschuiven de muren correct, en speelt een "automatische piloot" elk level uit.

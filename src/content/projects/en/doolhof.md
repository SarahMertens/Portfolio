---
title: Doolhof (Maze)
summary: A maze game in the dark with moving walls and hunters, built in Java without a game engine.
order: 6
year: 2026
context: personal
role: Built entirely by me
tech: [Java, Swing, Java 2D, Maven, JUnit 5, Mockito]
github: https://github.com/SarahMertens/Doolhof
---

## The game

You walk through a dark maze and only see what your light reaches. Find the keys and avoid the hunters, while the walls shift around you. A light flare briefly reveals the whole level and stuns nearby hunters. You can also sprint, but then they hear you sooner. There are eight levels, and level 0 is the maze from my very first program.

## How it's built

- **No game engine and no external libraries:** the maze generator, pathfinding, lighting, hunter behaviour and sound are all my own code.
- **Three layers** (presentation, domain and persistence) that only talk through immutable DTOs. A test automatically checks that no layer breaks that rule.
- **156 tests,** including: is every maze fully reachable, do the walls shift correctly, and can an "autopilot" play through every level.

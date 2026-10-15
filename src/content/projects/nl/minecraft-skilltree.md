---
title: Minecraft Skill Tree
summary: Fabric-mod voor Minecraft die quests en een skill tree met twaalf vaardigheden toevoegt.
order: 7
year: 2026
context: personal
role: Volledig zelf ontwikkeld
tech: [Java, Fabric, Gradle, JUnit 5, Mockito, GitHub Actions]
github: https://github.com/SarahMertens/minecraft_skilltree
---

## Wat de mod doet

Spelers voltooien quests (mijnen, vechten, reizen, landbouw) en verdienen zo skillpunten. Die spenderen ze in een skill tree met twaalf vaardigheden in vier takken: Mining, Combat, Exploration en Nature. Denk aan sneller mijnen, meer schade, extra levens of *Lumberjack*, waarmee je een hele boom in één slag omhakt.

- 25 quests en commando's voor spelers en beheerders
- Werkt in singleplayer en op servers
- Vertaald in het Engels en het Nederlands

## Hoe het gebouwd is

De code is opgedeeld in domein, opslag en presentatie, zodat de spelregels los van Minecraft getest kunnen worden. **69 unittests** controleren de logica, de opslag en de netwerkpakketten tussen client en server.

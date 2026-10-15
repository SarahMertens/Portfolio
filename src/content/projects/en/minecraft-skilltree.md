---
title: Minecraft Skill Tree
summary: A Fabric mod for Minecraft that adds quests and a skill tree with twelve skills.
order: 7
year: 2026
context: personal
role: Built entirely by me
tech: [Java, Fabric, Gradle, JUnit 5, Mockito, GitHub Actions]
github: https://github.com/SarahMertens/minecraft_skilltree
---

## What the mod does

Players complete quests (mining, fighting, travelling, farming) to earn skill points. They spend those in a skill tree with twelve skills across four branches: Mining, Combat, Exploration and Nature. Think faster mining, more damage, extra hearts or *Lumberjack*, which fells a whole tree in one chop.

- 25 quests and commands for players and operators
- Works in singleplayer and on servers
- Translated into English and Dutch

## How it's built

The code is split into domain, persistence and presentation, so the game rules can be tested independently of Minecraft. **69 unit tests** cover the logic, persistence and the network packets between client and server.

---
title: Installation
description: Installing the ActionItems mod
---

Installing the ActionItems mod is as straightforward as almost any mod! Follow the steps below to get started.

:::note
ActionItems can be installed in either a server or client environment as long as the requirements are met!
:::

***
## Server Requirements
ActionItems requires the following to run (as of January 2026):
- **Minecraft** - 1.21.1
- **Fabric Loader** - 0.17.2+
- **Fabric API** - 0.116.6-1.21.1 (or greater)
- **Java** - 21+
- **Fabric Language Kotlin** - 1.13.0+kotlin.2.1.0 (or greater)

## Installation Steps
1. Set up a Fabric server with Minecraft 1.21.1
2. Install the ActionItems mod jar into the `mods` folder of your server. Download the mod <a href="https://modrinth.com/mod/actionitems" target="_blank" rel="noopener noreferrer">here</a>!
3. Download all required dependencies for the mod (See [Server Requirements](#server-requirements) above)]
4. Restart the server to generate the configuration files and folders.
5. Get the example item using the command `/actionitems give example` while in-game.
6. Modify and create new Action Items in the `config/actionitems/items/` folder. See the [Item Configuration](/actionitems/items/base/) guide for more information.

## Optional Integrations
ActionItems supports a variety of optional integrations to enhance functionality. These integrations are not required but can provide added features.
- **Economy Plugins** - ActionItems supports a variety of economy plugins for use
  - <a href="https://modrinth.com/mod/impactor" target="_blank" rel="noopener noreferrer">Impactor</a>
  - <a href="https://modrinth.com/mod/beconomy" target="_blank" rel="noopener noreferrer">BEconomy</a>
  - <a href="https://modrinth.com/mod/cobbledollars" target="_blank" rel="noopener noreferrer">CobbleDollars</a>
  - Pebbles Economy
  - **See the [Supported Economies](/actionitems/getting_started/economies/) page for more information.**
- **Placeholder Services** - ActionItems supports a variety of Placeholder APIs for use with placeholders in items.
  - <a href="https://modrinth.com/plugin/miniplaceholders" target="_blank" rel="noopener noreferrer">MiniPlaceholders</a>
  - <a href="https://modrinth.com/mod/placeholder-api" target="_blank" rel="noopener noreferrer">TextPlaceholderAPI</a> (not the spigot one)
  - **See the [Placeholders](/actionitems/getting_started/placeholders/) page for more information.**
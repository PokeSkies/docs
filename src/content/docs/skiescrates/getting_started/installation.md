---
title: Installation
description: Installing the SkiesCrates mod
---

Installing the SkiesCrates mod is as straightforward as almost any mod! Follow the steps below to get started.

:::note
SkiesCrates can be installed in either a server or client environment as long as the requirements are met!
:::

***
## Server Requirements
SkiesCrates requires the following to run (as of January 2026):
- **Minecraft** - 1.21.1
- **Fabric Loader** - 0.16.9+
- **Fabric API** - 0.107.0-1.21.1 (or greater)
- **Java** - 21+
- **Fabric Language Kotlin** - 1.11.0+kotlin.2.0.0 (or greater)

## Installation Steps
1. Set up a Fabric server with Minecraft 1.21.1
2. Install the SkiesCrates mod jar into the `mods` folder of your server. Download the mod <a href="https://modrinth.com/mod/skiescrates" target="_blank" rel="noopener noreferrer">here</a>!
3. Download all required dependencies for the mod (See [Server Requirements](#server-requirements) above)]
4. Restart the server to generate the configuration files and folders.
5. Set a new location for the example crate using the command `/crates set example_crate` while in-game.
6. Modify and create new Crates in the `config/skiescrates/crates/` folder. See the [Crate Configuration](/skiescrates/crate_config/base/) guide for more information.

## Optional Integrations
SkiesCrates supports a variety of optional integrations to enhance functionality. These integrations are not required but can provide added features.
- **Economy Plugins** - SkiesCrates supports a variety of economy plugins for use
  - <a href="https://modrinth.com/mod/impactor" target="_blank" rel="noopener noreferrer">Impactor</a>
  - <a href="https://modrinth.com/mod/beconomy" target="_blank" rel="noopener noreferrer">BEconomy</a>
  - <a href="https://modrinth.com/mod/cobbledollars" target="_blank" rel="noopener noreferrer">CobbleDollars</a>
  - Pebbles Economy
  - **See the [Supported Economies](/skiescrates/getting_started/economies/) page for more information.**
- **Placeholder Services** - SkiesCrates supports a variety of Placeholder APIs for use with placeholders in GUI configurations.
  - <a href="https://modrinth.com/plugin/miniplaceholders" target="_blank" rel="noopener noreferrer">MiniPlaceholders</a>
  - <a href="https://modrinth.com/mod/placeholder-api" target="_blank" rel="noopener noreferrer">TextPlaceholderAPI</a> (not the spigot one)
  - **See the [Placeholders](/skiescrates/getting_started/placeholders/) page for more information.**
- **Holograms** - SkiesCrates supports <a href="https://modrinth.com/mod/holodisplays" target="_blank" rel="noopener noreferrer">HoloDisplays</a> for displaying holograms above crates.
- **Additional Rewards** - SkiesCrates supports additional action types through optional dependencies.
    - <a href="https://modrinth.com/mod/cobblemon" target="_blank" rel="noopener noreferrer">Cobblemon</a> - `POKEMON`
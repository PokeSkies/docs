---
title: Installation
description: Installing the SkiesGUIs mod
---

Installing the SkiesGUIs mod is as straightforward as almost any mod! Follow the steps below to get started.

:::note
SkiesGUIs can be installed in either a server or client environment as long as the requirements are met!
:::

***
## Server Requirements
SkiesGUIs requires the following to run (as of January 2026):
- **Minecraft** - 1.21.1
- **Fabric Loader** - 0.16.9+
- **Fabric API** - 0.107.0-1.21.1 (or greater)
- **Java** - 21+
- **Fabric Language Kotlin** - 1.11.0+kotlin.2.0.0 (or greater)

## Installation Steps
1. Set up a Fabric server with Minecraft 1.21.1
2. Install the SkiesGUIs mod jar into the `mods` folder of your server. Download the mod [here](https://modrinth.com/mod/skiesguis)!
3. Download all required dependencies for the mod (See [Server Requirements](#server-requirements) above)]
4. Restart the server to generate the configuration files and folders.
5. Open the example GUI using the command `/gui open example_gui` while in-game.
6. Modify and create new GUIs in the `config/skiesguis/guis/` folder. See the [GUI Configuration](/skiesguis/gui_config/base/) guide for more information.

## Optional Integrations
SkiesGUIs supports a variety of optional integrations to enhance functionality. These integrations are not required but can provide added features.
- **Economy Plugins** - SkiesGUIs supports a variety of economy plugins for use
  - Impactor
  - BEconomy
  - CobbleDollars
  - Pebbles Economy
  - **See the [Supported Economies](/skiesguis/getting_started/economies/) page for more information.**
- **Placeholder Services** - SkiesGUIs supports a variety of Placeholder APIs for use with placeholders in GUI configurations.
  - MiniPlaceholders
  - TextPlaceholderAPI (not the spigot one)
  - **See the [Placeholders](/skiesguis/getting_started/placeholders/) page for more information.**
- **Additional Actions** - SkiesGUIs supports additional action types through optional dependencies.
    - Cobblemon - `MOLANG`
- **Additional Requirements** - SkiesGUIs supports additional requirement types through optional dependencies.
  - Plan - `PLAN_PLAYTIME`
  - Cobblemon - `MOLANG`
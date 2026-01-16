---
title: Placeholders
description: Supported Placeholder API services for SkiesGUIs
---

SkiesGUIs supports the use of Placeholder APIs to allow for dynamic text within GUI items, such as player names, balances, and other placeholders. Most string inputs throughout the mod will be parsed for placeholders, including item names, lore, titles, and more.

## Supported Mods
The following are the different types of Placeholders Services are supported.
- [MiniPlaceholders](https://modrinth.com/plugin/miniplaceholders)
- [TextPlaceholderAPI](https://modrinth.com/mod/placeholder-api)
- [Impactor](https://modrinth.com/mod/impactor)

## Default Placeholders
By default, the mod comes with a few built-in placeholders that can be used without any additional Placeholder API mods installed. These include:
- `%player%` - The name of the player viewing the GUI.
- `%player_uuid%` - The UUID of the player viewing the GUI.
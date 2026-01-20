---
title: Placeholders
description: Supported Placeholder API services for ActionItems
---

ActionItems supports the use of Placeholder APIs to allow for dynamic text within the configurations, such as player names, balances, and other placeholders. Most string inputs throughout the mod will be parsed for placeholders, including item names, lore, nbt, and more.

## Supported Mods
The following are the different types of Placeholders Services are supported.
- <a href="https://modrinth.com/plugin/miniplaceholders" target="_blank" rel="noopener noreferrer">MiniPlaceholders</a>
- <a href="https://modrinth.com/mod/placeholder-api" target="_blank" rel="noopener noreferrer">TextPlaceholderAPI</a>
- <a href="https://modrinth.com/mod/impactor" target="_blank" rel="noopener noreferrer">Impactor</a>

## Default Placeholders
By default, the mod comes with a few built-in placeholders that can be used without any additional Placeholder API mods installed. These include:
- `%player%` - The name of the player viewing the GUI.
- `%player_uuid%` - The UUID of the player viewing the GUI.
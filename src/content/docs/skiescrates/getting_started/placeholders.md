---
title: Placeholders
description: Supported Placeholder API services for SkiesCrates
---

SkiesCrates supports the use of Placeholder APIs to allow for dynamic text within the configurations, such as player names, balances, and other placeholders. Most string inputs throughout the mod will be parsed for placeholders, including item names, lore, titles, and more.

## Supported Mods
The following are the different types of Placeholders Services are supported.
- <a href="https://modrinth.com/plugin/miniplaceholders" target="_blank" rel="noopener noreferrer">MiniPlaceholders</a>
- <a href="https://modrinth.com/mod/placeholder-api" target="_blank" rel="noopener noreferrer">TextPlaceholderAPI</a>
- <a href="https://modrinth.com/mod/impactor" target="_blank" rel="noopener noreferrer">Impactor</a>

## Default Placeholders
By default, the mod comes with a few built-in placeholders that can be used without any additional Placeholder API mods installed. These include:
- `%player%` - The name of the player viewing the GUI.
- `%player_uuid%` - The UUID of the player viewing the GUI.

## Crate Placeholders
These placeholders can be used in the context of a Crate, in most circumstances:
- `%crate_id%` - The crate's identifier
- `%crate_name%` - The crate's `"name"` setting
- `%crate_inventory_space%` - The value of the crate's `"inventory_space"` setting
- `%crate_keys%` - A list of keys this crate requires

## Reward Placeholders
These placeholders can be used in context of a Crate reward, in most circumstances:
- `%reward_id%` - The reward's identifier
- `%reward_name%` - The reward's `"name"` setting
- `%reward_display_name%` - The reward's `"display"` setting's `"name"` setting
- `%reward_display_lore%` - The reward's `"display"` setting's `"lore"` setting
- `%reward_weight%` - The reward's weight
- `%reward_percent%` - The reward's percent chance to be selected (based on all reward weights)
- `%reward_limit_player%` - The reward's per-player limit
- `%reward_limit_player_claimed%` - The amount of times the player has claimed this reward (if a limit is set)
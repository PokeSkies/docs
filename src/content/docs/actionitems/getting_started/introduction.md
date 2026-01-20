---
title: Introduction
description: Documentation for the ActionItems mod
---

Welcome to the documentation for the ActionItems mod! This guide will help you get started with using and configuring the mod.
***

## Quick Start
1. Install the ActionItems mod jar onto your server. Download the mod <a href="https://modrinth.com/mod/actionitems" target="_blank" rel="noopener noreferrer">here</a>!
2. Give yourself an Action Item using `/actionitems give <id>` while in-game.
3. Modify and create new items in the `config/actionitems/items/` folder.

## What is ActionItems?

ActionItems is a server-sided fabric mod that allows server admins to attach interaction actions to items. The mod is highly configurable and uses JSON files for all configuration, allowing for organization and relative ease of use.

The mod supports a variety of features, including:
- Create practically infinite items *(idk, haven't tested that)*
- Set actions for items when clicked on
    - Currently 12 available [Action Types](/actionitems/items/actions/#action-types)
- Set requirements for using items
    - Currently 8 available [Requirement Types](/actionitems/items/requirements/#requirement-types)
- Per-player item use limits and cooldowns
- Economy integration with many Economy mods (Impactor, BEconomy, CobbleDollars, etc)
- Placeholder support with popular Placeholder APIs (TextPlaceholderAPI, MiniPlaceholders, etc)
- All customizable items support custom names, lore, enchantments, and more (anything that is a component/nbt can be applied)
- And more!

## Getting Started
1. [Introduction](/actionitems/getting_started/introduction/)
  <br>Initial introduction to the ActionItems mod, understanding the purpose and features of the mod.
2. [Installation](/actionitems/getting_started/installation/)
  <br>Guide to install the ActionItems mod, dependencies, and optional integrations.
3. [Commands and Permissions](/actionitems/getting_started/commands_permissions/)
  <br>List of commands and permissions available in the ActionItems mod.
4. [Supported Economies](/actionitems/getting_started/economies/)
  <br>List of supported economy plugins for use with ActionItems.
5. [Placeholders](/actionitems/getting_started/placeholders/)
  <br>List of supported Placeholder APIs and available placeholders for use with ActionItems.
6. [FAQs](/actionitems/getting_started/faqs/)
  <br>Frequently Asked Questions about the ActionItems mod, including troubleshooting tips and common implementation questions.

## Configuration
### Base Config
1. [Main Configuration](/actionitems/config/config/)
  <br>Guide to configure the main `config.json` file for ActionItems. These settings apply globally to the mod.
   1. [Storage Options](/actionitems/config/storage_options/)
     <br>Configuration options for the storage system used by ActionItems

### Items
1. [Item Configuration](/actionitems/items/items/)
  <br>Guide to understanding the basics of an item configuration file.
   1. [Display Options](/actionitems/items/display_options/)
     <br>Configuration options for a Display Item's appearance and data.
2. [Actions](/actionitems/items/actions/)
   <br>Configuration of actions that can be executed when clicking.
3. [Requirements](/actionitems/items/requirements/)
   <br>Configuration of requirements that can be used to restrict using an item.
4. [Components](/actionitems/items/components/)
   <br>Guide to using Components and specifically how to make use of them in the ActionItems mod.
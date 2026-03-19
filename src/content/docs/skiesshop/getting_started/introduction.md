---
title: Introduction
description: Documentation for the SkiesShop mod
---

Welcome to the documentation for the SkiesShop mod! This guide will help you get started with using and configuring the mod.
***

## Quick Start
1. Install the SkiesShop mod jar onto your server. Download the mod <a href="https://modrinth.com/mod/skiesshop" target="_blank" rel="noopener noreferrer">here</a>!
2. Open shops using the command `/shops open <id>` while in-game.
3. Modify and create new Shops in the `config/skiesshop/shops/` folder.

## What is SkiesShop?

SkiesShop is a server-sided fabric mod featuring a powerful shop system allowing you to create infinite shops with items and commands available for purchase and for sale with relative ease!

The mod supports a variety of features, including:
- Create practically infinite shops and items (idk, haven't tested that)
- Economy integration with many Economy mods (Impactor, BEconomy, CobbleDollars, etc)
- Placeholder support with popular Placeholder APIs (TextPlaceholderAPI, MiniPlaceholders, etc)
- All customizable items support custom names, lore, enchantments, and more (anything that is a component/nbt can be applied)
- And more!

## Getting Started
1. [Introduction](/skiesshop/getting_started/introduction/)
  <br>Initial introduction to the SkiesShop mod, understanding the purpose and features of the mod.
2. [Installation](/skiesshop/getting_started/installation/)
  <br>Guide to install the SkiesShop mod, dependencies, and optional integrations.
3. [Commands and Permissions](/skiesshop/getting_started/commands_permissions/)
  <br>List of commands and permissions available in the SkiesShop mod.
4. [Supported Economies](/skiesshop/getting_started/economies/)
  <br>List of supported economy plugins for use with SkiesShop.
5. [Placeholders](/skiesshop/getting_started/placeholders/)
  <br>List of supported Placeholder APIs and available placeholders for use with SkiesShop.
6. [GUI Types](/skiesshop/getting_started/gui_types/)
  <br>List of the supported GUI types used in SkiesShop, including for shop and confirmation menus.
7. [FAQs](/skiesshop/getting_started/faqs/)
  <br>Frequently Asked Questions about the SkiesShop mod, including troubleshooting tips and common implementation questions.

## Configuration
### Base Config
1. [Main Configuration](/skiesshop/config/config/)
  <br>Guide to configure the main `config.json` file for SkiesShop. These settings apply globally to the mod.
   1. [Keys Options](/skiesshop/config/keys_options/)
     <br>Configuration options for the Keys menu and command
   2. [Storage Options](/skiesshop/config/storage_options/)
     <br>Configuration options for the storage system used by SkiesShop
   3. [Migration Options](/skiesshop/config/migration_options/)
     <br>Configuration options for migrating data
   4. [Webhook Options](/skiesshop/config/webhook_options/)
     <br>Configuration options for Discord webhooks
2. [Lang Configuration](/skiesshop/config/lang/)
  <br>Guide to customizing the messages for SkiesShop

### Crates
1. [Crate Configuration](/skiesshop/crates/crates/)
  <br>Guide to understanding the basics of a Crate configuration file.
   1. [Cost Options](/skiesshop/crates/cost_options/)
     <br>Configuration options for defining costs to open a Crate.
   2. [Failure Options](/skiesshop/crates/failure_options/)
     <br>Configuration options for failure behavior when opening a Crate.
   3. [Block Options](/skiesshop/crates/block_options/)
     <br>Configuration options for the Crate block behavior and appearance.
   4. [Hologram Options](/skiesshop/crates/hologram_options/)
     <br>Configuration options for HoloDisplays holograms above Crate blocks.
2. [Examples](/skiesshop/crates/examples/)
   <br>Example Crate configurations to help get started.

### Rewards
1. [Rewards](/skiesshop/rewards/rewards/)
   <br>Configuration of rewards within a Crate, including display properties, behaviors, and advanced options.
    1. [Limit Options](/skiesshop/rewards/limit_options/)
      <br>Options to configure a reward's claim limits.
2. [Reward Types](/skiesshop/rewards/rewards/#reward-types)
   <br>The Available reward types and their specific configuration options.
    1. [COMMAND_CONSOLE](/skiesshop/rewards/reward_types/command_console/)
       <br>Guide to using the COMMAND_CONSOLE reward type.
    2. [COMMAND_PLAYER](/skiesshop/rewards/reward_types/command_player/)
       <br>Guide to using the COMMAND_PLAYER reward type.
    3. [ITEM](/skiesshop/rewards/reward_types/item/)
       <br>Guide to using the ITEM reward type.
    4. [POKEMON](/skiesshop/rewards/reward_types/pokemon/)
       <br>Guide to using the POKEMON reward type (requires Cobblemon mod).

### Keys
1. [Key Configuration](/skiesshop/keys/keys/)
    <br>Guide to understanding the basics of a Key configuration file.
2. [Keys Menu](/skiesshop/keys/keys_menu/)
   <br>Configuration options for the /keys menu.

### Previews
1. [Previews](/skiesshop/previews/previews/)
   <br>Guide to configuring crate preview menus, which display the possible rewards in a crate.
  1. [Preview Settings](/skiesshop/previews/preview_settings/)
     <br>Options to configure the general settings of a crate preview menu.
  2. [Preview Buttons](/skiesshop/previews/preview_buttons/)
     <br>Options to configure buttons within the crate preview menus.

### Opening Animations
1. [Opening Animations](/skiesshop/openings/opening_animations/)
   <br>Guide to configuring crate opening animations, both inventory-based and in-world.
   1. [Inventory Animations](/skiesshop/openings/inventory/)
     <br>Guide to configuring inventory-based crate opening animations.
      1. [Animation Settings](/skiesshop/openings/inventory/animation_settings/)
       <br>Options to configure the general settings of an inventory opening animation.
      2. [Spinning Items](/skiesshop/openings/inventory/spinning_items/)
       <br>Guide to configuring spinning animated items in an inventory opening animation.
      3. [Presets](/skiesshop/openings/inventory/presets/)
       <br>Guide to using presets in inventory opening animations.
   2. [World Animations](/skiesshop/openings/world/world_animations)
     <br>Guide to configuring in-world crate opening animations.
      1. [World Animation Types](/skiesshop/openings/world/world_animations/#world-animation-types)
       <br>List of available world animation types and their specific configuration options.
      2. [SIMPLE_ROLL](/skiesshop/openings/world/types/simple_roll/)
       <br>Guide to using the SIMPLE_ROLL world animation type.

### Particles
1. [Particle Animations](/skiesshop/particles/particle_animations/)
   <br>Guide to configuring idle particle effects/animations for Crate blocks.
2. [Particle Effects](/skiesshop/particles/particle_effects/)
   <br>List of available particle effects and their specific configuration options.
   1. [Effect Types](/skiesshop/particles/particle_effects/#effect-types)
     <br>List of available particle effect types and their specific configuration options.
      1. [CIRCLE](/skiesshop/particles/particle_effects/types/circle/)
       <br>Guide to using the CIRCLE particle effect type.
      2. [SPIRAL](/skiesshop/particles/particle_effects/types/spiral/)
       <br>Guide to using the SPIRAL particle effect type.
      3. [PULSE](/skiesshop/particles/particle_effects/types/pulse/)
       <br>Guide to using the PULSE particle effect type.
      4. [BEAM](/skiesshop/particles/particle_effects/types/beam/)
       <br>Guide to using the BEAM particle effect type.

### Items
1. [Item Options](/skiesshop/items/item_options/)
   <br>Options to configure a generic item's appearance and data.
2. [Components](/skiesshop/items/components/)
   <br>Guide to using Components and specifically how to make use of them in the SkiesShop mod.
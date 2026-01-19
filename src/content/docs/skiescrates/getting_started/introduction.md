---
title: Introduction
description: Documentation for the SkiesCrates mod
---

Welcome to the documentation for the SkiesCrates mod! This guide will help you get started with using and configuring the mod.
***

## Quick Start
1. Install the SkiesCrates mod jar onto your server. Download the mod <a href="https://modrinth.com/mod/skiescrates" target="_blank" rel="noopener noreferrer">here</a>!
2. Set the location of your a crate using `/crate set <crate_id>` while in-game, looking at the block you want to be the crate.
3. Modify and create new Crates in the `config/skiescrates/crates/` folder.

## What is SkiesCrates?

SkiesCrates is a server-sided fabric mod that allows server admins to create custom Crates for players to interact with to earn rewards. The mod is highly configurable and uses JSON files for all configuration, allowing for organization and relative ease of use.

The mod supports a variety of features, including:
- Create practically infinite crates *(idk, haven't tested that)*
    - Crates can either be physically placed or given as an inventory item
- Define keys with advanced options
    - Physical keys with customizable items
    - Virtual keys stored in a database
    - Anti-dupe systems when setting physical keys as "unique"
    - Keys support multiple crates and crates support multiple keys
- Create custom rewards for crates with tons of customization
    - 4 reward types, including: COMMAND_CONSOLE, COMMAND_PLAYER, ITEM, and POKEMON (Cobblemon required)
    - Weighted rewards for random chance crates
    - Display options when opening and previewing crates
    - Overridable display when previewing rewards
    - Apply limits on how many times a player can earn a reward
    - Automatic broadcast option
- Customizable crate preview menus for viewing potential crate rewards
    - Supports different preview menus for each crate
- Create your own crate opening animations customize them extensively
    - Inventory openings support deep customization of the animation sequence (6 includes by default!)
    - In-World openings are packet based allowing for multiple players to open the crate at once
- Per-player reward limiting
- Per-player crate cooldowns.
- Customizable broadcast messages for certain rewards
- Crate animation early cancelling supported
- Hologram support through HoloDisplays integrations
- Customizable idle particle effects/animations
- Built in /keys menu to view your virtual keys (disableable and customize commands)
- Economy integration with many Economy mods (Impactor, BEconomy, CobbleDollars, etc)
- Placeholder support with popular Placeholder APIs (TextPlaceholderAPI, MiniPlaceholders, etc)
- All customizable items support custom names, lore, enchantments, and more (anything that is a component/nbt can be applied)
- And more!

## Getting Started
1. [Introduction](/skiescrates/getting_started/introduction/)
  <br>Initial introduction to the SkiesCrates mod, understanding the purpose and features of the mod.
2. [Installation](/skiescrates/getting_started/installation/)
  <br>Guide to install the SkiesCrates mod, dependencies, and optional integrations.
3. [Commands and Permissions](/skiescrates/getting_started/commands_permissions/)
  <br>List of commands and permissions available in the SkiesCrates mod.
4. [Supported Economies](/skiescrates/getting_started/economies/)
  <br>List of supported economy plugins for use with SkiesCrates.
5. [Placeholders](/skiescrates/getting_started/placeholders/)
  <br>List of supported Placeholder APIs and available placeholders for use with SkiesCrates.
6. [GUI Types](/skiescrates/getting_started/gui_types/)
  <br>List of the supported GUI types used in SkiesCrates, including for crate previews and inventory animations.
7. [FAQs](/skiescrates/getting_started/faqs/)
  <br>Frequently Asked Questions about the SkiesCrates mod, including troubleshooting tips and common implementation questions.

## Configuration
### Base Config
1. [Main Configuration](/skiescrates/config/config/)
  <br>Guide to configure the main `config.json` file for SkiesCrates. These settings apply globally to the mod.
   1. [Keys Options](/skiescrates/config/config/keys_options/)
     <br>Configuration options for the Keys menu and command
   2. [Storage Options](/skiescrates/config/config/storage_options/)
     <br>Configuration options for the storage system used by SkiesCrates
   3. [Migration Options](/skiescrates/config/config/migration_options/)
     <br>Configuration options for migrating data
   4. [Webhook Options](/skiescrates/config/config/webhook_options/)
     <br>Configuration options for Discord webhooks
2. [Lang Configuration](/skiescrates/config/lang/)
  <br>Guide to customizing the messages for SkiesCrates

### Crates
1. [Crate Configuration](/skiescrates/crates/crates/)
  <br>Guide to understanding the basics of a Crate configuration file.
   1. [Cost Options](/skiescrates/crates/cost_options/)
     <br>Configuration options for defining costs to open a Crate.
   2. [Failure Options](/skiescrates/crates/failure_options/)
     <br>Configuration options for failure behavior when opening a Crate.
   3. [Block Options](/skiescrates/crates/block_options/)
     <br>Configuration options for the Crate block behavior and appearance.
   4. [Hologram Options](/skiescrates/crates/hologram_options/)
     <br>Configuration options for HoloDisplays holograms above Crate blocks.
2. [Examples](/skiescrates/crates/examples/)
   <br>Example Crate configurations to help get started.

### Rewards
1. [Rewards](/skiescrates/rewards/rewards/)
   <br>Configuration of rewards within a Crate, including display properties, behaviors, and advanced options.
    1. [Limit Options](/skiescrates/rewards/limit_options/)
      <br>Options to configure a reward's claim limits.
2. [Reward Types](/skiescrates/rewards/rewards/#reward-types)
   <br>The Available reward types and their specific configuration options.
    1. [COMMAND_CONSOLE](/skiescrates/rewards/reward_types/command_console/)
       <br>Guide to using the COMMAND_CONSOLE reward type.
    2. [COMMAND_PLAYER](/skiescrates/rewards/reward_types/command_player/)
       <br>Guide to using the COMMAND_PLAYER reward type.
    3. [ITEM](/skiescrates/rewards/reward_types/item/)
       <br>Guide to using the ITEM reward type.
    4. [POKEMON](/skiescrates/rewards/reward_types/pokemon/)
       <br>Guide to using the POKEMON reward type (requires Cobblemon mod).

### Keys
1. [Key Configuration](/skiescrates/keys/keys/)
    <br>Guide to understanding the basics of a Key configuration file.
2. [Keys Menu](/skiescrates/keys/keys_menu/)
   <br>Configuration options for the /keys menu.

### Previews
1. [Previews](/skiescrates/previews/previews/)
   <br>Guide to configuring crate preview menus, which display the possible rewards in a crate.
  1. [Preview Settings](/skiescrates/previews/preview_settings/)
     <br>Options to configure the general settings of a crate preview menu.
  2. [Preview Buttons](/skiescrates/previews/preview_buttons/)
     <br>Options to configure buttons within the crate preview menus.

### Opening Animations
1. [Opening Animations](/skiescrates/openings/opening_animations/)
   <br>Guide to configuring crate opening animations, both inventory-based and in-world.
   1. [Inventory Animations](/skiescrates/openings/inventory/)
     <br>Guide to configuring inventory-based crate opening animations.
      1. [Animation Settings](/skiescrates/openings/inventory/animation_settings/)
       <br>Options to configure the general settings of an inventory opening animation.
      2. [Spinning Items](/skiescrates/openings/inventory/spinning_items/)
       <br>Guide to configuring spinning animated items in an inventory opening animation.
      3. [Presets](/skiescrates/openings/inventory/presets/)
       <br>Guide to using presets in inventory opening animations.
   2. [World Animations](/skiescrates/openings/world/world_animations)
     <br>Guide to configuring in-world crate opening animations.
      1. [World Animation Types](/skiescrates/openings/world/world_animations/#world-animation-types)
       <br>List of available world animation types and their specific configuration options.
      2. [SIMPLE_ROLL](/skiescrates/openings/world/types/simple_roll/)
       <br>Guide to using the SIMPLE_ROLL world animation type.

### Particles
1. [Particle Animations](/skiescrates/particles/particle_animations/)
   <br>Guide to configuring idle particle effects/animations for Crate blocks.
2. [Particle Effects](/skiescrates/particles/particle_effects/)
   <br>List of available particle effects and their specific configuration options.
   1. [Effect Types](/skiescrates/particles/particle_effects/#effect-types)
     <br>List of available particle effect types and their specific configuration options.
      1. [CIRCLE](/skiescrates/particles/particle_effects/types/circle/)
       <br>Guide to using the CIRCLE particle effect type.
      2. [SPIRAL](/skiescrates/particles/particle_effects/types/spiral/)
       <br>Guide to using the SPIRAL particle effect type.
      3. [PULSE](/skiescrates/particles/particle_effects/types/pulse/)
       <br>Guide to using the PULSE particle effect type.
      4. [BEAM](/skiescrates/particles/particle_effects/types/beam/)
       <br>Guide to using the BEAM particle effect type.

### Items
1. [Item Options](/skiescrates/items/item_options/)
   <br>Options to configure a generic item's appearance and data.
2. [Components](/skiescrates/items/components/)
   <br>Guide to using Components and specifically how to make use of them in the SkiesCrates mod.
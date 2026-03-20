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
   1. [Entry Lore](/skiesshop/config/entry_lore/)
     <br>Configuration options for the lore added to Shop Entries.
   2. [Click Options](/skiesshop/config/click_options/)
      <br>Configuration options for Shop Entry click behavior.
   3. [Storage Options](/skiesshop/config/storage_options/)
     <br>Configuration options for the storage system used by SkiesShop
2. [Lang Configuration](/skiesshop/config/lang/)
  <br>Guide to customizing the messages for SkiesShop

### Shops
1. [Shop Configuration](/skiesshop/shops/shops/)
  <br>Guide to understanding the basics of a Shop configuration file.
   1. [Shop Entries](/skiesshop/shops/entries/)
     <br>Configuration options for a Shop Entry, which is what can be bought/sold in a Shop.
   2. [Price Configuration](/skiesshop/shops/price_configuration/)
     <br>Configuration options for defining the price of Shop Entries.
   3. [Presets](/skiesshop/shops/presets/)
      <br>Guide to using presets in Shop configurations.
2. [Actions](/skiesshop/shops/actions/)
  <br>Configuration options actions that can be executed within a Shop.
3. [Requirements](/skiesshop/shops/requirements/)
  <br>Configuration options for requirements for Shop Entries.

### Confirm Menus
1. [Confirm Menus](/skiesshop/confirm_menus/confirm_menus/)
  <br>Guide to understanding the basics of a Confirm Menu configuration file.
   1. [Amount Selectors](/skiesshop/confirm_menus/amount_selectors/)
     <br>Configuration options for Amount Selectors in Confirm Menus.

### Items
1. [Item Options](/skiesshop/items/item_options/)
   <br>Options to configure a generic item's appearance and data.
2. [Components](/skiesshop/items/components/)
   <br>Guide to using Components and specifically how to make use of them in the SkiesShop mod.
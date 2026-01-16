---
title: Introduction
description: Documentation for the SkiesGUIs mod
---

Welcome to the documentation for the SkiesGUIs mod! This guide will help you get started with using and configuring the mod.
***

## Quick Start
1. Install the SkiesGUIs mod jar onto your server. Download the mod <a href="https://modrinth.com/mod/skiesguis" target="_blank" rel="noopener noreferrer">here</a>!
2. Open GUIs using the command `/gui open <id>` while in-game.
3. Modify and create new GUIs in the `config/skiesguis/guis/` folder.

## What is SkiesGUIS?

SkiesGUIs is a server-sided fabric mod that allows server admins to create GUIs (Graphical User Interfaces) using vanilla Minecraft GUIs for players to interact with. The mod is highly configurable and uses JSON files for all configuration, allowing for organization and relative ease of use.

The mod supports a variety of features, including:
- Practically infinite GUIs
- Definable items with custom names, lore, enchantments, and more (anything that is a component/nbt can be applied)
- Clickable items with definable actions (run commands, give items, open other GUIs, etc.)
- Requirements to restrict viewing certain items, clicking items, or accessing entire GUIs (permissions, economy balances, advancements, etc.)
- Economy intergration with popular economy plugins
- Placeholder support with popular Placeholder APIs
- Custom GUI alias commands
- Open and close actions and requirements
- And much more!

## Table Of Contents
### Getting Started
1. [Introduction](/skiesguis/getting_started/introduction/)
  <br>Initial introduction to the SkiesGUIs mod, understanding the purpose and features of the mod.
2. [Installation](/skiesguis/getting_started/installation/)
  <br>Guide to install the SkiesGUIs mod, dependencies, and optional integrations.
4. [Commands and Permissions](/skiesguis/getting_started/commands_permissions/)
  <br>List of commands and permissions available in the SkiesGUIs mod.
5. [Supported Economies](/skiesguis/getting_started/economies/)
  <br>List of supported economy plugins for use with SkiesGUIs.
6. [Placeholders](/skiesguis/getting_started/placeholders/)
  <br>List of supported Placeholder APIs and available placeholders for use with SkiesGUIs.
8. [FAQs](/skiesguis/getting_started/faqs/)
  <br>Frequently Asked Questions about the SkiesGUIs mod, including troubleshooting tips and common implementation questions.

### Configuration
#### Base Config
1. [Main Configuration](/skiesguis/main_config/)
   <br>Guide to configure the main `config.json` file for SkiesGUIs. These features apply globally to the mod.

#### GUI Configuration
1. [Base Configuration](/skiesguis/guis/base/)
  <br>Guide to understanding the very basics of a GUI configuration file.
2. [Items](/skiesguis/guis/items/)
  <br>Configuration of items within a GUI, including display properties, behaviors, and advanced options.
3. [Actions](/skiesguis/guis/actions/)
  <br>Configuration of actions that can be executed within a GUI, including additional advanced options.
4. [Requirements](/skiesguis/guis/requirements/)
  <br>Configuration of requirements that can be used to restrict viewing items, click actions, and GUI access.
5. [Components](/skiesguis/guis/components/)
   <br>Guide to using Components and specifically how to make use of them in the SkiesGUIs mod.
6. [Examples](/skiesguis/guis/examples/)
  <br>Example GUI configurations for SkiesGUIs to help get started.
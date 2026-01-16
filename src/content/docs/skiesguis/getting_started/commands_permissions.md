---
title: Commands and Permissions
description: Commands and Permissions for the SkiesGUIs mod
---

## Commands
| Command                     | Description                                                   | Permission                 |
|-----------------------------|---------------------------------------------------------------|----------------------------|
| /gui reload                 | Reload the Mod                                                | skiesguis.command.reload   |
| /gui open <gui_id> [player] | Open a GUI specified by its ID, optionally for another player | skiesguis.command.open     |
| /gui printnbt               | Print the NBT data of the item in your hand, if present       | skiesguis.command.printnbt |
| /gui debug                  | Toggle the debug mode for more insight into errors            | skiesguis.command.debug     |

## General Permissions
| Permission              | Description                                          |
|-------------------------|------------------------------------------------------|
| skiesguis.open.<gui_id> | Permission to open a GUI when using an Alias Command |
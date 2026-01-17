---
title: Commands and Permissions
description: Commands and Permissions for the SkiesCrates mod
---

## Commands
| Command                                              | Description                                                     | Permission                   |
|------------------------------------------------------|-----------------------------------------------------------------|------------------------------|
| /skiescrates, /crates, /crate                        | Default command                                                 | skiescrates.command.base     |
| /crates reload                                       | Reloads any configuration changes                               | skiescrates.command.reload   |
| /crates debug                                        | Toggle the debug mode for more insight into errors              | skiescrates.command.debug    |
| /crates set <crate_id>                               | Adds the targeted block to the specified crate's location list  | skiescrates.command.set      |
| /crates remove                                       | Removes the targeted block from all crate's location list       | skiescrates.command.remove   |
| /crates give <player> <crate_id> [amount] [silent]   | Give the inventory version of a crate                           | skiescrates.command.give     |
| /crates key give <player> <key_id> [amount] [silent] | Give keys to the specified player                               | skiescrates.command.key.give |
| /crates key take <player> <key_id> [amount] [silent] | Take keys from the specified player (key must be virtual)       | skiescrates.command.key.take |
| /crates key set <player> <key_id> [amount] [silent]  | Set the specified player's key count (key must be virtual)      | skiescrates.command.key.set  |
| /crates key view <player>                            | View the player's key balance (shows virtual keys)              | skiescrates.command.key.view |
| /keys (configurable)                                 | Open the key menu (shows virtual keys)                          | skiescrates.command.keys     |
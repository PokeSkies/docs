---
title: Actions
description: Guide to configure actions for the SkiesCrates mod
---

Actions are a list of things that are executed when an item is clicked.
***
## Creating Actions
Actions follow the below format, which is a MAP of actions that will be run. Each entry needs its unique string identifier. In this example below. It has two actions defined within the `"actions": {}` section: `action_1` and `action_2`.
```json
"actions": {
  "action_1": {
    // Action options...
  },
  "action_2": {
    // Action options...
  }
}
```
***

## Action Options
### Type (required)
The type of action that this entry is. A list of types can be found in [Action Types](#action-types).
```json
"type": "MESSAGE"
```
### Additional Options
Additional options are available depending on the type of action used. See [Action Types](#action-types) for each type's additional options.
***

## Action Types
These are the available Action Types along with a short description and the required mods, if any.

| Identifier      | Description                                                            | Required Mods |
|-----------------|------------------------------------------------------------------------|---------------|
| MESSAGE         | Send a message to the player                                           |               |
| COMMAND_CONSOLE | Run a command as the console                                           |               |
| COMMAND_PLAYER  | Run a command as the player                                            |               |
| BROADCAST       | Broadcast a message to all players                                     |               |
| PLAYSOUND       | Play a sound to the player                                             |               |
| CLOSE_GUI       | Close this GUI for the player                                          |               |
| NEXT_PAGE       | Move to the next page of the GUI. Requires the GUI to be paginated     |               |
| PREVIOUS_PAGE   | Move to the previous page of the GUI. Requires the GUI to be paginated |               |

### Message Action
Sends a message to the player, parsed by Placeholder Services. Uses <a href="https://docs.advntr.dev/minimessage/format.html" target="_blank" rel="noopener noreferrer">MiniMessage formatting</a>!
```json
"type": "MESSAGE",
"message": ["<blue>This is a message to the player!"]
```
### Command Console Action
Runs a command as the console, parsed by Placeholder Services.
```json
"type": "COMMAND_CONSOLE",
"commands": ["give %player% diamond 1"]
```
### Command Player Action
Runs a command as the player, parsed by Placeholder Services.
```json
"type": "COMMAND_PLAYER",
"commands": ["say Hello, I am %player%!"],
"permission_level": 1 // Optional. Permission level the command is ran as
```
### Broadcast Action
Broadcasts a message to all players, parsed by Placeholder Services. Uses <a href="https://docs.advntr.dev/minimessage/format.html" target="_blank" rel="noopener noreferrer">MiniMessage formatting</a>!
```json
"type": "BROADCAST",
"message": ["<green>%player% has clicked the special item!"]
```
### PlaySound Action
Plays a sound to the player. The sound is sent as a packet, so other players will not hear it.
```json
"type": "PLAYSOUND",
"sound": "minecraft:entity.player.levelup",
"source": "MASTER", // Optional, defaults to MASTER. Valid sources: MASTER, MUSIC, RECORD, WEATHER, BLOCKS, HOSTILE, NEUTRAL, PLAYERS, AMBIENT, VOICE
"volume": 1.0, // Optional, defaults to 1.0
"pitch": 1.0 // Optional, defaults to 1.0
```
### Close GUI Action
Closes the current SkiesCrate menu for the player.
```json
"type": "CLOSE_GUI"
```
### Next Page Action
Moves to the next page of the current SkiesCrate menu. Requires the menu to be paginated.
```json
"type": "NEXT_PAGE"
```
### Previous Page Action
Moves to the previous page of the current SkiesCrate menu. Requires the menu to be paginated.
```json
"type": "PREVIOUS_PAGE"
```
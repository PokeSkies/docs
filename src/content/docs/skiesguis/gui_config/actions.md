---
title: Actions
description: Guide to configure actions for the SkiesGUIs mod
---

Actions are a list of things that are executed when an item is clicked, a GUI is opened/closed, or a Requirement has failed/succeeded, depending on where they are defined.
***
## Creating Actions
When defining actions, you must know where you want to use them. Is it a action when clicking on an item? Is it a action when opening a GUI? Depending on where you want to use the actions, the name used is different.

Generally, actions follow the below format. A MAP of actions that may be ran. Each entry needs its unique string identifier. In this example below. It has two actions defined within the `"actions": {}` section: `action_1` and `action_2`. To understand what use cases are available, see [Example Uses](#example-uses).
```json
"<type_>actions": {
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
The type of action that this entry is. Must be in full capitalization. A list of types can be found in [Action Types](#action-types).
```json
"type": "MESSAGE"
```
### Click
The type of click that is required for this action to execute. Must be in full capitalization. A list of types can be found in [Click Types](#click-types). Defaults to ANY if not provided.
```json
"click": "ANY"
```
### Delay
The time in ticks (20 ticks a second) until the action should be executed. Defaults to 0 (no delay) if not provided.
```json
"delay": 100
```
### Chance
The chance that this action should be executed. Allowed values are between `0.0` and `1.0`. An example of a 50% chance would be `0.5`. Defaults to no chance check if not provided.
```json
"chance": 0.5
```
### Requirements
Define when an action is allowed to execute using conditionals. All listed requirements must be met in order for the action to be ran. The Click Type must be correct before the requirement will be checked. Optionally, [Actions](/skiesguis/gui_config/actions/) can be defined to execute when the requirements have failed or succeeded. See [Requirements](/skiesguis/gui_config/requirements/) for more information on requirements.
```json
"requirements": {
  "requirements": {},
  "deny_actions": {},
  "success_actions": {}
},
```
### Additional Options
Additional options are available depending on the type of action used. See [Action Types](#action-types) for each type's additional options.
***

## Action Types
These are the available Action Types and their respective settings. Some settings are optional, while others may be required.

| Identifier        | Description                                                                           | Required Mods |
|-------------------|---------------------------------------------------------------------------------------|---------------|
| MESSAGE           | Send a message to the player                                                          |               |
| COMMAND_CONSOLE   | Run a command as the console                                                          |               |
| COMMAND_PLAYER    | Run a command as the player                                                           |               |
| BROADCAST         | Broadcast a message to all players                                                    |               |
| PLAYSOUND         | Play a sound to the player                                                            |               |
| OPEN_GUI          | Open a GUI for the player                                                             |               |
| CLOSE_GUI         | Close this GUI for the player                                                         |               |
| REFRESH_GUI       | Refresh the player's current GUI                                                      |               |
| GIVE_XP           | Give XP to the player                                                                 |               |
| CURRENCY_DEPOSIT  | Deposit currency from a player's account                                              |               |
| CURRENCY_WITHDRAW | Withdraw currency from a player's account                                             |               |
| CURRENCY_SET      | Set the balance of a player's account                                                 |               |
| GIVE_ITEM         | Give the player an item                                                               |               |
| TAKE_ITEM         | Take an item from the player if possible. Strict will define if NBT needs to be exact |               |
| MOLANG            | Executes a set of molang scripts/expressions                                          | Cobblemon     |

### Message Action
Sends a message to the player, parsed by Placeholder Services. Uses [MiniMessage formatting](https://docs.advntr.dev/minimessage/format.html)!
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
Broadcasts a message to all players, parsed by Placeholder Services. Uses [MiniMessage formatting](https://docs.advntr.dev/minimessage/format.html)!
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
### Open GUI Action
Opens a SkiesGUI menu for the player.
```json
"type": "OPEN_GUI",
"id": "example_gui"
```
### Close GUI Action
Closes the current SkiesGUI menu for the player.
```json
"type": "CLOSE_GUI"
```
### Refresh GUI Action
Refreshes the current SkiesGUI menu for the player.
```json
"type": "REFRESH_GUI"
```
### Give XP Action
Gives XP to the player.
```json
"type": "GIVE_XP",
"amount": 10,
"level": false // Optional, defaults to false. True to give levels, false to give points
```
### Currency Deposit Action
Deposits currency into the player's account.
```json
"type": "CURRENCY_DEPOSIT",
"economy": "IMPACTOR",
"currency": "impactor:dollars", // Optional
"amount": 100
```
### Currency Withdraw Action
Withdraws currency from the player's account.
```json
"type": "CURRENCY_WITHDRAW",
"economy": "IMPACTOR",
"currency": "impactor:dollars", // Optional
"amount": 100
```
### Currency Set Action
Sets the balance of the player's account.
```json
"type": "CURRENCY_SET",
"economy": "IMPACTOR",
"currency": "impactor:dollars", // Optional
"amount": 1000
```
### Give Item Action
Gives an item to the player.
```json
"type": "GIVE_ITEM",
"item": "minecraft:diamond_sword",
"amount": 5, // Optional
"components": {},  // Optional
"custom_model_data": 1, // Optional
"strict": true  // Optional, defaults to true
```
### Take Item Action
Takes an item from the player if possible.
```json
"type": "TAKE_ITEM",
"item": "minecraft:diamond_sword",
"amount": 3, // Optional
"components": {},  // Optional
"custom_model_data": 1, // Optional
"strict": false  // Optional, defaults to true
```
### Cobblemon Molang Action
Executes a set of Molang scripts/expressions for Cobblemon. Requires the Cobblemon mod
```json
"type": "MOLANG",
"script": ["q.gui.player.tell('test');"]
```
***

## Click Types
Below is a list of valid click types that can be used in the `click_type` option for Actions.

| Identifier        | Left Click | Shift Left Click | Right Click | Shift Right Click | Middle Click | Throw (Q) |
|-------------------|------------|------------------|-------------|-------------------|--------------|-----------|
| ANY               | &#x2611;   | &#x2611;         | &#x2611;    | &#x2611;          | &#x2611;     | &#x2611;  |
| LEFT_CLICK        | &#x2611;   | &#x2610;         | &#x2610;    | &#x2610;          | &#x2610;     | &#x2610;  |
| SHIFT_LEFT_CLICK  | &#x2610;   | &#x2611;         | &#x2610;    | &#x2610;          | &#x2610;     | &#x2610;  |
| ANY_LEFT_CLICK    | &#x2611;   | &#x2611;         | &#x2610;    | &#x2610;          | &#x2610;     | &#x2610;  |
| RIGHT_CLICK       | &#x2610;   | &#x2610;         | &#x2611;    | &#x2610;          | &#x2610;     | &#x2610;  |
| SHIFT_RIGHT_CLICK | &#x2610;   | &#x2610;         | &#x2610;    | &#x2611;          | &#x2610;     | &#x2610;  |
| ANY_RIGHT_CLICK   | &#x2610;   | &#x2610;         | &#x2611;    | &#x2611;          | &#x2610;     | &#x2610;  |
| ANY_CLICK         | &#x2611;   | &#x2611;         | &#x2611;    | &#x2611;          | &#x2610;     | &#x2610;  |
| ANY_MAIN_CLICK    | &#x2611;   | &#x2610;         | &#x2611;    | &#x2610;          | &#x2610;     | &#x2610;  |
| ANY_SHIFT_CLICK   | &#x2610;   | &#x2611;         | &#x2610;    | &#x2611;          | &#x2610;     | &#x2610;  |
| MIDDLE_CLICK      | &#x2610;   | &#x2610;         | &#x2610;    | &#x2610;          | &#x2611;     | &#x2610;  |
| THROW             | &#x2610;   | &#x2610;         | &#x2610;    | &#x2610;          | &#x2610;     | &#x2611;  |


## Example Uses
Below are examples of how to use actions in different sections of a GUI configuration. This list is not exhaustive, but covers the most common uses.
### Open Actions
Actions that are executed when the GUI is opened.
```json
{
  "open_actions": {
    // List of actions...
  }
}
```
### Close Actions
Actions that are executed when the GUI is closed.
```json
{
  "close_actions": {
    // List of actions...
  }
}
```
### Click Actions
Actions that are executed when the GUI is closed.
```json
{
  "items": {
    "example_item": {
      "item": "minecraft:diamond",
      "click_actions": {
        "action_1": {
          // Action options...
        }
      }
    }
  }
}
```
### Requirement Actions
#### Success Actions
Actions that are executed when a requirement section is successful.
```json
"<type_>requirements": {
  "requirements": {},
  "success_actions": {
    // List of actions...
  }
}
```
#### Deny Actions
Actions that are executed when a requirement section is failed.
```json
"<type_>requirements": {
  "requirements": {},
  "deny_actions": {
    // List of actions...
  }
}
```
### Extensive Example
```json
"actions": {
  "action_1": {
    "type": "COMMAND_CONSOLE",
    "click": "ANY",
    "commands": ["give %player% diamond_sword 1"]
  },
  "action_2": {
    "type": "MESSAGE",
    "click": "ANY",
    "message": ["<blue>You have received the Example Sword!"]
  },
  "action_3": {
    "type": "COMMAND_CONSOLE",
    "click": "ANY",
    "commands": ["give %player% diamond 1"],
    "requirements": {
      "requirements": {
        "type": "PERMISSION",
        "permission": "test.permission"
      }
    }
  },
  "chance_action_1": {
    "type": "MESSAGE",
    "click": "ANY",
    "chance": 0.5,
    "message": ["<gold>This is a RARE message!"]
  },
  "delayed_action_1": {
    "type": "MESSAGE",
    "click": "ANY",
    "delay": 100,
    "message": ["<blue>You received the Example Sword 5 seconds ago!"]
  }
}
```
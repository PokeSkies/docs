---
title: Actions
description: Guide to configure actions for the ActionItems mod
---

Actions are a list of things that are executed when an item is clicked or a Requirement has failed/succeeded, depending on where they are defined.
***
## Creating Actions
Generally, actions follow the below format. A list of actions that may be ran. In this example below. It has two actions defined within the `"actions": {}` section. To understand what use cases are available, see [Example Uses](#example-uses).
```json
"actions": [
  {
    // Action 1 options...
  },
  {
    // Action 2 options...
  }
]
```
***

## Action Options
### Type (required)
The type of action that this entry is. A list of types can be found in [Action Types](#action-types).
```json
"type": "MESSAGE"
```
### Requirements
Define when an action is allowed to execute using conditionals. All listed requirements must be met in order for the action to be ran. Optionally, [Actions](/skiesguis/gui_config/actions/) can be defined to execute when the requirements have failed or succeeded. See [Requirements](/skiesguis/gui_config/requirements/) for more information on requirements.
```json
"requirements": {
  "requirements": [],
  "deny_actions": [],
  "success_actions": []
},
```
### Additional Options
Additional options are available depending on the type of action used. See [Action Types](#action-types) for each type's additional options.
***

## Action Types
These are the available Action Types along with a short description and the required mods, if any.

| Identifier        | Description                                                                           | Required Mods |
|-------------------|---------------------------------------------------------------------------------------|---------------|
| MESSAGE           | Send a message to the player                                                          |               |
| COMMAND_CONSOLE   | Run a command as the console                                                          |               |
| COMMAND_PLAYER    | Run a command as the player                                                           |               |
| BROADCAST         | Broadcast a message to all players                                                    |               |
| PLAY_SOUND        | Play a sound to the player                                                            |               |
| GIVE_XP           | Give XP to the player                                                                 |               |
| CURRENCY_DEPOSIT  | Deposit currency from a player's account                                              |               |
| CURRENCY_WITHDRAW | Withdraw currency from a player's account                                             |               |
| CURRENCY_SET      | Set the balance of a player's account                                                 |               |
| GIVE_ITEM         | Give the player an item                                                               |               |
| TAKE_ITEM         | Take an item from the player if possible. Strict will define if NBT needs to be exact |               |
| MOLANG            | Executes a set of molang scripts/expressions                                          | Cobblemon     |

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
### Play Sound Action
Plays a sound to the player. The sound is sent as a packet, so other players will not hear it.
```json
"type": "PLAY_SOUND",
"sound": "minecraft:entity.player.levelup",
"source": "MASTER", // Optional, defaults to MASTER. Valid sources: MASTER, MUSIC, RECORD, WEATHER, BLOCKS, HOSTILE, NEUTRAL, PLAYERS, AMBIENT, VOICE
"volume": 1.0, // Optional, defaults to 1.0
"pitch": 1.0 // Optional, defaults to 1.0
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

## Example Uses
Below are examples of how to use actions in different sections of a GUI configuration. This list is not exhaustive, but covers the most common uses.
### Click Actions
Actions that are executed when the item is clicked.
```json
{
  "items": {
    "example_item": {
      "display": {},
      "actions": [
        {
          // Action options...
        }
      ]
    }
  }
}
```
### Requirement Actions
#### Success Actions
Actions that are executed when a requirement section is successful.
```json
"requirements": {
  "requirements": [],
  "success_actions": [
    // List of actions...
  ]
}
```
#### Deny Actions
Actions that are executed when a requirement section is failed.
```json
"<type_>requirements": {
  "requirements": [],
  "deny_actions": [
    // List of actions...
  ]
}
```
---
title: Requirements
description: Guide to configure requirements for the SkiesGUIs mod
---

Requirements are a list of checks that must succeed for a GUI to open, item to display, or action to activate, depending on where it's used.
***
## Creating Requirements
When defining requirements, you must know where you want to use them. Is it a requirement for clicking on an item? Is it a requirement for opening a GUI? Depending on where you want to use the requirements, the name used is different.

Generally, all requirement sections follow the below format. To understand what use cases are available, see [Example Uses](#example-uses).
```json
"<type_>requirements": {
  "requirements": {}, // A MAP of actual requirements
  "success_actions": {}, // Optional - A MAP of actions to run when requirements succeed
  "deny_actions": {}, // Optional - A MAP of actions to run when requirements fail
  "minimum_requirements": 1, // Optional - Minimum number of requirements that must succeed
  "stop_at_success": false // Optional - Stop checking requirements after the minimum successful requirements are met
}
```
***

## Requirements Options
### Requirements (required)
A MAP of requirements that need to be checked. Each entry needs its unique string identifier. In this example below. It has two requirements defined within the `"requirements": {}` section: `requirement_1` and `requirement_2`.
```json
"<type_>requirements": {
  "requirements": {
    "requirement_1": {
      "type": "PERMISSION",
      "permission": "example.permission"
    },
    "requirement_2": {
      "type": "CURRENCY",
      "economy": "IMPACTOR",
      "amount": 100,
      "currency": "impactor:dollars"
    }
  }
  "success_actions": {},
  "deny_actions": {}
}
```
#### Type (required)
The type of requirement that this entry is. A list of types can be found in [Requirement Types](#requirement-types).
```json
"type": "PERMISSION"
```
#### Comparison
The type of comparison that this requirement should do. The usage changes depending on the requirement used. See [Comparison Types](#comparison-types) for more information.
```json
"comparison": "=="
```
#### Additional Options
Additional options are available depending on the type of requirement used. See [Requirement Types](#requirement-types) for each type's additional options.
***
### Success Actions
A MAP of actions that are performed when all requirements has succeeded. Each entry needs its unique string identifier. See [Actions](/skiesguis/gui_config/actions/) for more information.
```json
"<type_>requirements": {
  "requirements": {},
  "success_actions": {
    "success_action_1": {
      "type": "MESSAGE",
      "message": ["<red>You do have permission!"]
    }
  },
  "deny_actions": {}
}
```
***
### Deny Actions
A MAP of actions that are performed when any requirement has failed. Each entry needs its unique string identifier. See [Actions](/skiesguis/gui_config/actions/) for more information.
```json
"<type_>requirements": {
  "requirements": {},
  "success_actions": {},
  "deny_actions": {
    "deny_action_1": {
      "type": "MESSAGE",
      "message": ["<red>You do not have permission!"]
    }
  }
}
```
***
### Minimum Requirements
The minimum number of requirements that must succeed in order for the overall requirements to be considered successful.
```json
"<type_>requirements": {
  "requirements": {},
  "success_actions": {},
  "deny_actions": {},
  "minimum_requirements": 1
}
```
***
### Stop At Success
A boolean value that defines whether to stop checking requirements after the minimum successful requirements are met. Defaults to `false` if not provided.
```json
"<type_>requirements": {
  "requirements": {},
  "success_actions": {},
  "deny_actions": {},
  "stop_at_success": true
}
```
***

## Requirement Types
These are the available Requirement Types and their respective settings. Some settings are optional, while others may be required.

| Identifier      | Description                                                                                                                           | Required Mods |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------|---------------|
| PERMISSION      | Check if the player has a permission                                                                                                  |               |
| ITEM            | Check if the player has an item. Strict will define if NBT needs to be exact                                                          |               |
| CURRENCY        | Check if the player has an amount of currency                                                                                         |               |
| DIMENSION       | Check if the player is in a dimension                                                                                                 |               |
| PLACEHOLDER     | An input string will be parsed and checked against an output string. Strict will define if capitalization needs to be exact           |               |
| JAVASCRIPT      | An expression string will be parsed and then evaluated by the GraalVM JavaScript engine. The expression should return a boolean value |               |
| XP              | Check if the player has a specific amount of XP. Level will define if checking levels instead of total XP                             |               |
| ADVANCEMENT     | Check a players progress on a specific advancement                                                                                    |               |
| MOLANG          | Check a Molang expression against a value                                                                                             | Cobblemon     |    
| PLAN_PLAYTIME   | Check the player's playtime.                                                                                                          | Plan          |

### Permission Requirement
Check if the player has a specific permission node. Supports `==` and `!=` comparisons.
```json
"type": "PERMISSION",
"comparison": "==",
"permission": "example.permission"
```
### Item Requirement
Check if the player has a specific item in their inventory. Supports all comparison types.
```json
"type": "ITEM",
"comparison": ">=",
"item": "minecraft:diamond",
"amount": 5, // Optional
"components": {},  // Optional
"custom_model_data": 1, // Optional
"strict": true  // Optional, defaults to true
```
### Currency Requirement
Check if the player has a specific amount of currency in their account. Supports all comparison types.
```json
"type": "CURRENCY",
"comparison": ">=",
"economy": "IMPACTOR",
"currency": "impactor:dollars", // Optional
"amount": 100
```
### Dimension Requirement
Check if the player is currently in a specific dimension. Supports `==` and `!=` comparisons.
```json
"type": "DIMENSION",
"comparison": "==",
"id": "minecraft:overworld"
```
### Placeholder Requirement
An input string will be parsed by all available Placeholder Services and checked against an output. Supports `==` and `!=` comparisons.
```json
"type": "PLACEHOLDER",
"comparison": "==",
"input": "%player_health%",
"output": "20",
"strict": false // Optional, defaults to false
```
### JavaScript Requirement
An expression string will be parsed by available Placeholder Services and then evaluated by the GraalVM JavaScript engine. The expression should return a boolean value. Supports `==` and `!=` comparisons.
```json
"type": "JAVASCRIPT",
"comparison": "==",
"expression": "(%player_health% + 10) > 15"
```
### XP Requirement
Check if the player has a specific amount of XP. Supports all comparison types.
```json
"type": "XP",
"comparison": ">=",
"amount": 500,
"level": true // Optional, defaults to false. True to give levels, false to give points
```
### Advancement Requirement
Check a players progress on a specific advancement. Supports all comparison types.
```json
"type": "ADVANCEMENT",
"comparison": ">=",
"advancement": "minecraft:husbandry/bred_all_animal",
"progress": 1.0 // Optional, defaults to 1.0
```
### Plan Playtime Requirement
Check the player's playtime. Requires the Plan mod. Supports all comparison types.
```json
"type": "PLAN_PLAYTIME",
"comparison": ">=",
"time": 3600 // Time in seconds
```
### Cobblemon Molang Requirement
Check a Molang expression against a value. Requires the Cobblemon mod. Supports all comparison types.
```json
"type": "MOLANG",
"equals": "==",
"script": ["t.party = q.gui.player.party; t.pokemon = t.party.get_pokemon(0); t.pokemon.is_shiny;"],
"output": ["1"]
"strict": false // Optional, defaults to false. Ignores case sensitivity when true
```
***

## Comparison Types
| Identifier | Supported Requirements                         |
|------------|------------------------------------------------|
| ==         | ALL                                            |
| !=         | ALL                                            |
| >          | ITEM, CURRENCY, XP, ADVANCEMENT, PLAN_PLAYTIME |
| <          | ITEM, CURRENCY, XP, ADVANCEMENT, PLAN_PLAYTIME |
| >=         | ITEM, CURRENCY, XP, ADVANCEMENT, PLAN_PLAYTIME |
| <=         | ITEM, CURRENCY, XP, ADVANCEMENT, PLAN_PLAYTIME |
***

## Example Uses
Below are examples of how to use requirements in different sections of a GUI configuration. This list is not exhaustive, but covers the most common uses.
### Open Requirements
Requirements that must be met in order for a GUI to be opened.
```json
{
  "open_requirements": {
    "requirements": {}
    // Additional options if desired...
  }
}
```
### Item Requirements
#### View Requirements
Requirements that must be met in order for an item to be displayed in the GUI.
```json
{
  "items": {
    "example_item": {
      "item": "minecraft:diamond",
      "view_requirements": {
        "requirements": {}
        // Additional options if desired...
      }
    }
  }
}
```
#### Click Requirements
Requirements that must be met in order to execute an item's click actions.
```json
{
  "items": {
    "example_item": {
      "item": "minecraft:diamond",
      "click_requirements": {
        "requirements": {}
        // Additional options if desired...
      }
    }
  }
}
```
### Action Requirements
Requirements for a specific action to run (the example below shows requirements for a click action, but it can be any action).
```json
{
  "items": {
    "example_item": {
      "item": "minecraft:diamond",
      "click_actions": {
        "action_1": {
          "type": "MESSAGE",
          "message": "test message",
          "requirements": {
            "requirements": {}
            // Additional options if desired...
          }
        }
      }
    }
  }
}
```
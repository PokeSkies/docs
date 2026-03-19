---
title: Requirements
description: Guide to configure requirements for shop entries
---

Requirements are a list of checks that must succeed to buy/sell a shop entry, depending on where its defined.
***
## Creating Requirements
All requirement sections follow the below format.
```json
"requirements": {
  "requirements": {}, // A MAP of actual requirements
  "success_actions": {}, // Optional - A MAP of actions to run when requirements succeed
  "deny_actions": {}, // Optional - A MAP of actions to run when requirements fail
  "minimum_requirements": 1, // Optional - Minimum number of requirements that must succeed
  "stop_at_success": false, // Optional - Stop checking requirements after the minimum successful requirements are met
  "send_denial_message": true // Optional - Whether to send a default denial message when requirements fail. Defaults to true if not provided
}
```
***

## Requirements Options
### Requirements (required)
A MAP of requirements that need to be checked. Each entry needs its unique string identifier. In this example below. It has two requirements defined within the `"requirements": {}` section: `requirement_1` and `requirement_2`.
```json
"requirements": {
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
"requirements": {
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
"requirements": {
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
"requirements": {
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
"requirements": {
  "requirements": {},
  "success_actions": {},
  "deny_actions": {},
  "stop_at_success": true
}
```
***
### Send Denial Message
A boolean value that defines whether to send a default denial message when requirements fail. Defaults to `true` if not provided.
```json
"requirements": {
  "requirements": {},
  "success_actions": {},
  "deny_actions": {},
  "send_denial_message": false
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
| XP              | Check if the player has a specific amount of XP. Level will define if checking levels instead of total XP                             |               |
| ADVANCEMENT     | Check a players progress on a specific advancement                                                                                    |               |
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
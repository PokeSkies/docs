---
title: Items
description: Guide to configure items for the SkiesGUIs mod
---

Items are the main contents of a GUI and the available options for items define how they should behave when players view or interact with them.
***
## Creating Items
Each item is defined under the `"items": {}` object in a MAP format, which means each item corresponds to a unique string identifier. This identifier can be anything but must be unique to each item within this GUI.

See this example below. It has two items defined with in the `"items": {}` section: `item_1` and `item_2`. Importantly there is a comma (`,`) between these two items, indicating they are in a list (really a MAP in this case). These two items can then have their options defined inside them.
```json
"items": {
  "item_1": {
    // Item Options here
  },
  "item_2": {
    // Item Options here
  }
}
```

***
## Item Options
The item definitions themselves are also in a MAP format (key -> value), containing all the available options for the item. Below are the available options for items.
### Item (required)
An item resource location (combination of `mod_id:item_id`). This can be any item, vanilla or modded. Unknown item stacks will default to `minecraft:air`. See the [Supported Items](#supported-items) section for more information on supported items.
```json
"item": "minecraft:stone"
```
### Slots
> Aliases: `slot`

A list of slots that this item will be inserted into. This value should be between `0` and the (`size` * 9) - 1. EX: if `"size: 3"`, then between `0` and `26`. Defaults to an empty list if not provided.
:::tip
Some options are flexible-lists, meaning you can either set it to a specific value or define a list!
> `"slots": 1`<br>
> `"slots": [1, 2, 3]`
:::
```json
"slots": [0, 1, 7, 8]
```
### Amount
The amount of this item that should be displayed in each slot. Defaults to 1 if not provided.
```json
"amount": 10
```
### Name
The name to override the item with. Defaults to the item's normal name if not provided. Uses [MiniMessage formatting](https://docs.advntr.dev/minimessage/format.html)!
```json
"name": "<red>Example Stone"
```
### Lore
A list of lore to override the item with. Defaults to an empty list if not provided. Uses [MiniMessage formatting](https://docs.advntr.dev/minimessage/format.html)!
```json
"lore": [
  "<gray>Example Line 1",
  "<gray>Example Line 2"
]
```
### Custom Model Data
An number representing the Custom Model Data of the item. This is a quick option for the `"minecraft:custom_model_data"` component, added for ease of use. Not applied if not provided.
```json
"custom_model_data": 123456
```
### Components (nbt)
> Aliases: `nbt`

A list of components that are set onto the item. This follows the same formatting as applying components to an item via `/give`. No additional components are applied if not provided.
:::note
Components are the new way of defining item NBT in Minecraft. They replaced the older NBT format in versions 1.20.5+. For more information on components, see the [Minecraft Wiki on Data Components](https://minecraft.wiki/w/Data_component_format).
:::
```json
"components": {
  "minecraft:enchantments": {
    "levels": {
    "minecraft:unbreaking": 3
    },
    "show_in_tooltip": false
  },
  "minecraft:hide_additional_tooltip": {}
}
```
### Priority
The priority of this item to the defined slots compared to other items. The closer to 0, the higher the priority. Useful in combination with [View Requirements](#view-requirements) to display different items using conditionals. Defaults to 0 if not provided.
```json
"priority": 10
```
### View Requirements
Define when an item is allowed to be displayed using conditionals. All listed requirements must be met in order for the item to be displayed. Useful in combination with [Priority](#priority) to display different items using conditionals. Optionally, [Actions](/skiesguis/gui_config/actions/) can be defined to execute when the requirements have failed or succeeded. See [Requirements](/skiesguis/gui_config/requirements/) for more information on requirements.
```json
"view_requirements": {
  "requirements": {
    "example_requirement_1": {
      "type": "PERMISSION",
      "permission": "test.permission"
    }
  },
  "deny_actions": {
    "deny_action_1": {
      "type": "MESSAGE",
      "message": ["<red>You do not have permission!"]
    }
  },
  "success_actions": {
    "success_action_1": {
      "type": "MESSAGE",
      "message": ["<green>You do have permission!"]
    }
  }
},
```
### Click Actions
A list of Actions that are executed when the item is clicked on. The [Click Type](/skiesguis/gui_config/actions/#click-types) must be correct and any [Click Requirements](#click-requirements) defined must succeed before the actions are executed. See [Actions](/skiesguis/gui_config/actions/) for more information.
```json
"click_actions": {
  "action_1": {
    "type": "COMMAND_CONSOLE",
    "click": "ANY",
    "commands": ["give %player% diamond_sword 1"]
  },
  "action_2": {
    "type": "MESSAGE",
    "click": "ANY",
    "message": ["<blue>You have received the Example Sword!"]
  }
}
```
### Click Requirements
Define when an item's actions are allowed to be executed when clicked on using conditionals. All listed requirements must be met in order for any actions to be ran or checked. Optionally, [Actions](/skiesguis/gui_config/actions/) can be defined to execute when the requirements have failed or succeeded. See [Requirements](/skiesguis/gui_config/requirements/) for more information on requirements.
```json
"click_requirements": {
  "requirements": {
    "example_requirement_1": {
      "type": "PERMISSION",
      "permission": "test.permission"
    }
  },
  "deny_actions": {
    "deny_action_1": {
      "type": "MESSAGE",
      "message": ["<red>You do not have permission!"]
    }
  },
  "success_actions": {
    "success_action_1": {
      "type": "MESSAGE",
      "message": ["<green>You do have permission!"]
    }
  }
},
```

## Supported Items
The `"item": ""` option supports a variety of inputs, either default `mod_id:item_id` identifiers or special keywords for specific item types. All inputs are parsed against any Placeholder Services.
### Vanilla Items
Vanilla items can be called on using either `minecraft:<item_id>` or just `<item_id>`. For example, both `minecraft:stone` and `stone` will give a stone block.
### Modded Items
Modded items can be called on using their full `mod_id:item_id` identifier. For example, `cobblemon:poke_ball` will give a Poke Ball item from Cobblemon.
### Player Heads
Player Heads can be set using the special keyword `playerhead` followed by an option specifier. Below are available option specifiers:
- `playerhead` - Gives the head of the player viewing the GUI.
- `playerhead-<uuid>` - Gives the head of the player with the specified UUID. This will work if the player is offline but must have played on the server before.
- `playerhead-<username>` - Gives the head of the player with the specified username. This will only work if the player is online.
- `playerhead-<base64>` - Gives a custom head with the texture specified by the base64 string. Useful for custom heads from head databases.

## Example Item Definition
```json
{
  "title": "<dark_gray>Example GUI",
  "size": 3,
  "items": {
    "item_1": {
      "item": "minecraft:diamond_sword",
      "slots": [0],
      "count": 1,
      "name": "<blue><b>Example Sword",
      "lore": ["<gray><italic>Example lore!"],
      "components": {
        "minecraft:enchantments": {
          "levels": {
            "minecraft:unbreaking": 3
          },
          "show_in_tooltip": false
        },
        "minecraft:hide_additional_tooltip": {}
      },
      "priority": 1,
      "view_requirements": {
        "requirements": {
            "requirement_1": {
                "type": "PERMISSION",
                "permission": "test.permission"
            }
        },
        "success_actions": {},
        "deny_actions": {}
      },
      "click_requirements": {
        "requirements": {
            "requirement_1": {
                "type": "PERMISSION",
                "permission": "test.permission.2"
            }
        },
        "success_actions": {},
        "deny_actions": {}
      },
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
        }
      }
    }
  }
}
```
---
title: Components
description: Guide to using Components within the SkiesGUIs mod
---

Components are the 1.20.5+ system of applying data to items, blocks, entities, and more. This partially replaces the older NBT system used in previous versions with some helpful new features. However, even though components have replaced NBT for the better, it not always the most intuitive and knowledge of the old NBT system can cause some confusion. This page will explain how to use Components, and specifically the unique features supplied to them with SkiesGUIs.

## Understanding Components
### Components in Minecraft
If you've ever used the /give command in 1.20.5+ to give an item with special data, like a custom name or enchantments, you have used Components! For example, the following command gives a diamond sword with a custom name and enchantment:
```
/give @a diamond_sword[custom_name='[{"text":"Custom Name","italic":false}]',enchantments={levels:{sharpness:1}}] 1
```

In this example, we see the item id (diamond_sword) followed by square brackets containing a bunch of data. That data is the component data for the item. When defining components for an item in the give command, each component is in a (key -> value) pair list with each pair separated by a comma.

For the example, we see two components with the keys `"custom_name"` and `"enchantments"`. The value for `"custom_name"` is a text component that defines how the name should appear, and the value for `"enchantments"` is an object of enchantment data. The specific keys and values for a component depend on what component your trying to use. More information on that later!

### Components in Configs
Components in configs are fundamentally the same, but formatting-wise have some differences. For example, if we wanted to convert this example give command with the components to a SkiesGUIs item configuration, it would look something like this:
```json
{
  "items": {
    "example_item": {
      "id": "minecraft:diamond_sword",
      "count": 1,
      "components": {
        "custom_name": "[{\"text\":\"Custom Name\",\"italic\":false}]",
        "enchantments": {
          "levels": {
            "sharpness": 1
          }
        }
      }
    }
  }
}
```

If you compare the `"components"` field in this example to the give command, you can see that the structure is very similar. Each component is still a (key -> value) pair, with each pair separated by a comma. The main differences are:
1. The components are now inside a `"components"` field within the item configuration
2. Keys and string values are wrapped in double quotes
3. Quotes inside string values are escaped with a backslash (`\"`)

These differences are the core of converting from the in-game command format to the JSON format. What's even better is there's a command provided by SkiesGUIs to help with the component conversion! The unfortunately named (because nbt got changed to components) `/guis printnbt` command will print out the Component data of the item your actively holding in valid JSON formatting.

### Component Types
A hidden thing about components is that there are different types of components. Some components are just simple values, like an integer, booleans, and strings. Other components can get more complex with more complicated structures, like the `"enchantments"` component in the previous example. Lastly, some components are lists of values or objects, like the `"lore"` component. These are a series of the same type of values in a comma separated list.

When defining components in configs, it's important to know what type of component your working with so you can format the value correctly. Here are the common component types:
- Integer - Whole numbers (1, 2, 3) from -2,147,483,648 to 2,147,483,647
- Short - Whole numbers (1, 2, 3) from -32,768 to 32,767
- Long - Whole numbers (1, 2, 3) from -9,223,372,036,854,775,808 to 9,223,372,036,
- Byte - Whole numbers (1, 2, 3) from -128 to 127
- Double - Decimal numbers (1.0, 2.5, 3.14) of 32-bit precision
- Float - Decimal numbers (1.0, 2.5, 3.14) of 64-bit precision
- Boolean - True or false
- String - Text wrapped in double quotes ("example")
- Object - A set of (key -> value) pairs wrapped in curly braces ("example": { "a": 1, "b": "text" })
- List - A list of values or objects wrapped in square brackets ([1, 2, 3] or [{"a": 1}, {"b": 2}])

See more info about Minecraft's data types on the <a href="https://minecraft.wiki/w/Java_Edition_protocol/Data_types#Definitions" target="_blank" rel="noopener noreferrer">Minecraft Wiki</a>.

### Type Inferencing
A thing about components in configs is that when they get translated from JSON (the text in the config) into an actual Minecraft Component, the typing has to be inferred. Minecraft has to do a bit of guessing on what type you intended. This is obvious for some types, like Strings since there's really only one way to interpret them. It's less obvious types for things like Integers, Shorts, Longs, Bytes, Doubles, and Floats since they can all be represented as exactly the same number in some circumstances.

Take this example into consideration:
```json
{
  "example": 5
}
```
Most people would interpret this as an Integer component with the value of 5. However, Minecraft could also interpret this as a Short, Long, or Byte since 5 is a valid value for all those types. In this case, Minecraft will choose the smallest type that can hold the value, which would be a Byte. This can cause issues when trying to compare two Item Stacks with components since two items that look identical may have different component types, causing them to not match.

So how would you ensure the correct type is used? Well for SkiesGUIs a system was implemented to allow you to explicitly define the type of a component. This is done by wrapping the value in an object with two fields: `"type"` and `"value"`. The `"type"` field is a string representing the desired component type, and the `"value"` field is the actual value of the component.

Here's an example of how to define a component with an explicit type:
```json
{
  "components": {
    "example_integer": {
      "type": "INT",
      "value": 5
    }
  }
}
```
This will ensure that the `"example_integer"` component is always interpreted as an Integer with the value of 5, regardless of what Minecraft would normally infer.

## Available Components
SkiesGUIs supports all vanilla Minecraft 1.21.1 components that can be applied to items. A full list of available components can be found on the <a href="https://minecraft.wiki/w/Data_component_format" target="_blank" rel="noopener noreferrer">Minecraft Wiki</a>, though the Wiki is updated to the latest versions of Minecraft, so all data may not be usable or correct.
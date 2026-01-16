---
title: Supported Economies
description: Supported Economy mods for the SkiesGUIs mod
---

When using actions/requirements that are relating to currencies, you can specify both the economy mod to use and the currency to use (if the mod supports it). The mod will still load even if an integration is not found, but Currency related Requirements and Actions will not function.

## Supported Types
The following are the different types of Economy Integrations supported.
| Identifier    | Mod                                                     |
|---------------|---------------------------------------------------------|
| IMPACTOR      | [Impactor](https://modrinth.com/mod/impactor)           |
| PEBBLES       | Pebbles Economy                                         |
| COBBLEDOLLARS | [CobbleDollars](https://modrinth.com/mod/cobbledollars) |
| BECONOMY      | [BEconomy](https://modrinth.com/mod/beconomy)           |

## Example Use
When specifying an economy type in an action or requirement, use the following format:
>```json
> "economy": "IMPACTOR",
> "currency": "impactor:dollars"
>```
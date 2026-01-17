---
title: Supported Economies
description: Supported Economy mods for the SkiesCrates mod
---

When using actions/requirements that are relating to currencies, you can specify both the economy mod to use and the currency to use (if the mod supports it). The mod will still load even if an integration is not found, but Currency related functions may not work.

## Supported Types
The following are the different types of Economy Integrations supported.

| Identifier    | Mod                                                     |
|---------------|---------------------------------------------------------|
| IMPACTOR      | <a href="https://modrinth.com/mod/impactor" target="_blank" rel="noopener noreferrer">Impactor</a>           |
| BECONOMY      | <a href="https://modrinth.com/mod/beconomy" target="_blank" rel="noopener noreferrer">BEconomy</a>           |
| COBBLEDOLLARS | <a href="https://modrinth.com/mod/cobbledollars" target="_blank" rel="noopener noreferrer">CobbleDollars</a> |
| PEBBLES       | Pebbles Economy                                         |

## Example Use
When specifying an economy/currency, use the following format:
```json
"provider": "IMPACTOR",
"currency": "impactor:dollars" // Optional, default currency will be used if not specified
```
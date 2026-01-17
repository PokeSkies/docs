---
title: Cost Options
description: Configuration options for a crate's cost in SkiesCrates
---

Define the cost to open this crate.
```json
"cost": {
  "provider": "IMPACTOR",
  "currency": "impactor:dollars",
  "amount": 100
}
```
## Provider
The Economy Service to use for the transaction. See the [Economy Services](/skiescrates/economy_services/) page for more information.
```json
"provider": "IMPACTOR"
```
## Currency
The currency ID to use for the transaction. If undefined, the default currency for the selected provider will be used.
```json
"currency": "impactor:dollars"
```
## Amount
The amount to charge the player when opening the crate.
```json
"amount": 100
```
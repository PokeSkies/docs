---
title: Click Options
description: Configuration options for Shop Entry click behavior in SkiesShop
---

The `click_options` field defines what happens when a player clicks on an entry in the shop. This is a map of Click Type to the Click Action that should be executed when that click type is done. This is useful as it allows you to change the behavior of your shop to your liking. 

For example, you can have a shop where left-clicking an item opens a Confirm Menu to buy the item, while right-clicking the item opens a different Confirm Menu to sell the item. Or instead, you could configure direct purchasing and selling without a confirmation menu!

:::tip
Click Options can also be defined and overridden on a per-shop and per-entry basis, allowing you to have different click behaviors for different entries and shops. If a click option is not defined for an entry, it will fall back to the shop's click options, and if not defined there, it will fall back to the global click options defined in the config.
:::
```json
"click_options": {
  "ANY_LEFT_CLICK": {
    "type": "OPEN_CONFIRM_MENU",
    "sound": {
      "id": "minecraft:ui.button.click",
      "source": "MASTER",
      "volume": 0.5,
      "pitch": 0.5
    },
    "transactions": [
      "buy"
    ],
    "menu": "example_buy"
  },
  "ANY_RIGHT_CLICK": {
    "type": "OPEN_CONFIRM_MENU",
    "sound": {
      "id": "minecraft:ui.button.click",
      "source": "MASTER",
      "volume": 0.5,
      "pitch": 0.5
    },
    "transactions": [
      "sell"
    ],
    "menu": "example_sell"
  }
}
```

## Click Options
### Type (required)
The type of action that should be executed when the specified click type is done. A list of valid actions can be found in [Click Actions](#click-actions).
```json
"type": "OPEN_CONFIRM_MENU"
```

### Sound
The sound that should be played when the specified click type is done. This is optional and defaults to no sound if not specified.
```json
"sound": {
  "id": "minecraft:ui.button.click",
  "source": "MASTER",
  "volume": 0.5,
  "pitch": 0.5
}
```

## Click Actions
Click Actions are similar to regular Actions, but they are specific to Shop Entry clicking.

| Identifier        | Description                                                              |
|-------------------|--------------------------------------------------------------------------|
| OPEN_CONFIRM_MENU | Opens a confirmation menu for the player to confirm their purchase/sell. |
| BUY               | Directly buy the entry without a confirmation menu.                      |
| SELL              | Directly sell the entry without a confirmation menu.                     |

### Open Confirm Menu
Opens a Confirm Menu for the player to confirm their purchase/sell.
```json
"ANY_CLICK": {
  "type": "OPEN_CONFIRM_MENU",
  "sound": {
    "id": "minecraft:ui.button.click",
    "source": "MASTER",
    "volume": 0.5,
    "pitch": 0.5
  },
  "transactions": [
    "buy"
  ],
  "menu": "example_buy"
}
```
#### Transactions
The transactions that should be executed when the player confirms their purchase/sell in the Confirm Menu. This is a list of the transaction types that should be executed, which can be `buy`, `sell`, or both.
```json
"transactions": [
  "buy",
  "sell"
]
```
#### Menu
The Confirm Menu that should be opened when the player clicks on the entry. This should be the string identifier of a Confirm Menu defined in the `confirm_menus` section of the config.
```json
"menu": "example_confirm_menu"
```
<br></br>
***
### Buy
Directly buy the entry without a confirmation menu.
```json
"ANY_CLICK": {
  "type": "BUY",
  "sound": {
      "id": "minecraft:entity.player.levelup",
      "source": "MASTER",
      "volume": 0.5,
      "pitch": 0.5
  },
  "amount": 1    
}
```
#### Amount
The amount of the entry that should be bought when the player clicks on the entry. This is required and should be a positive integer.
```json
"amount": 1
```
<br></br>
***
### Sell
Directly sell the entry without a confirmation menu.
```json
"ANY_CLICK": {
  "type": "SELL",
  "sound": {
      "id": "minecraft:entity.player.levelup",
      "source": "MASTER",
      "volume": 0.5,
      "pitch": 0.5
  },
  "amount": 1    
}
```
#### Amount
The amount of the entry that should be sold when the player clicks on the entry. This is required and should be a positive integer.
```json
"amount": 1
```

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

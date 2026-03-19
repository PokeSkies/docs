---
title: Entry Lore
description: Configuration options for Shop Entry lore in SkiesShop
---

Entry Lore is the lore displayed on a Shop Entry in the shop GUI. This is a MAP of transaction type (buy, sell, OR buy_sell) to a list of strings for that transaction type. This allows you to have different lores for buying, selling, or when both.

:::tip
Entry Lore can also be defined and overridden on a per-shop and per-entry basis, allowing you to have different lore for different entries and shops. If the lore is not defined for an entry, it will fall back to the shop's lore, and if not defined there, it will fall back to the global lore defined in the config.
:::

## Use Cases
### Global Config and Shop Lore
When defining Entry Lore in either the global `config.json` or within a specific shop's configuration, the formatting is a MAP of transaction type to a list of strings.
```json
"entry_lore": {
  "buy": [
    "%display_item_lore%",
    "",
    "<green><b>Buy Price:</b> <white>%buy_price% %buy_price_currency%",
    "",
    "<gray>Left-Click to buy this item"
  ],
  "sell": [
    "%display_item_lore%",
    "",
    "<red><b>Sell Price:</b> <white>%sell_price% %sell_price_currency%",
    "",
    "<gray>Right-Click to sell this item"
  ],
  "buy_sell": [
    "%display_item_lore%",
    "",
    "<green><b>Buy Price:</b> <white>%buy_price% %buy_price_currency%",
    "<red><b>Sell Price:</b> <white>%sell_price% %sell_price_currency%",
    "",
    "<gray>Left-Click to buy this item",
    "<gray>Right-Click to sell this item"
  ]
},
```

### Shop Entry Lore
If lore is defined on a specific Shop Entry, the formatting is a single string list, not multiple as you will already know the behavior when configuring.
```json
"entry_lore": [
  "%display_item_lore%",
  "",
  "<green><b>Buy Price:</b> <white>%buy_price% %buy_price_currency%",
  "<red><b>Sell Price:</b> <white>%sell_price% %sell_price_currency%",
  "",
  "<gray>Left-Click to buy this item",
  "<gray>Right-Click to sell this item"
]
```

## Placeholders
- `%display_item_lore%`: The lore of the display item defined for this entry, if it exists. If no display item is defined, this placeholder will be replaced with an empty string. This is useful for configuring customized descriptions for items while still keeping the same lore format everywhere.
- `%buy_price%`: The price to buy this entry, if it can be bought.
- `%buy_price_currency%`: The currency name for the buy price of this entry, if it can be bought.
- `%sell_price%`: The price to sell this entry, if it can be sold.
- `%sell_price_currency%`: The currency name for the sell price of this entry, if it can be sold.
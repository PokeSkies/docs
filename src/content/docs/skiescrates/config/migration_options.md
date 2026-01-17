---
title: Migrations Options
description: Configuration options for migration in SkiesCrates
---

Settings for data migration!
```json
"migration": {
  "keys": []
}
```
## Key Migration
Used to allow items from other Crate mods to act as keys. Provide a key IDs and it's related NBT key->value pair. The example below shows a migration for a key containing the NBT `"CrateName:old_key_id"` being allowed to act as a `example_key` in SkiesCrates.
```json
"keys": [
  {
    "key": "example_key",
    "nbt": {
      "key": "CrateName",
      "value": "old_key_id"
    }
  }
]
```
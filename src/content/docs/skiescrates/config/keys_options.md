---
title: Keys Options
description: Configuration options for the Keys menu and command in SkiesCrates
---

Settings for the keys menu and command.
```json
"keys": {
  "aliases" [
    "keys"
  ],
  "use_menu": true
}
```
## Aliases
A list of commands that can be used to access the keys menu. Each entry is a new command, which should only be one word and unused by another mod. **A restart is required to register commands**!
```json
"aliases": [
  "keys"
]
```
## Use Menu
Toggles whether the keys menu GUI (`config/skiescrates/menus/keys.json`) should be used when accessing keys. If false, the list of keys will be printed in chat.
```json
"use_menu": true
```
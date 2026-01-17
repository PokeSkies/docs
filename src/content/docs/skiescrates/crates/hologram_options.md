---
title: Hologram Options
description: Configuration options for a crate's holograms in SkiesCrates
---

The options for the hologram displayed above each crate block location. Requires the <a href="https://modrinth.com/mod/holodisplays" target="_blank" rel="noopener noreferrer">HoloDisplays</a> mod to be installed.
```json
"hologram": {
  "text": [
    "<red>Example Crate"
  ],
  "offset": {
    "x": 0.0,
    "y": 1.0,
    "z": 0.0
  },
  "scale": {
    "x": 1.0,
    "y": 1.0,
    "z": 1.0
  },
  "rotation": {
    "x": 0.0,
    "y": 0.0,
    "z": 0.0
  },
  "billboard": "VERTICAL",
  "background": {
    "color": "000000",
    "opacity": 50
  },
  "shadow": true,
  "opacity": 1.0,
  "update_rate": 100,
  "view_distance": 50.0
}
```
### Sound
The sound event to play. In the format of `mod_id:sound_id`.
```json
"sound": "minecraft:block.lava.extinguish"
```
### Pitch
The pitch at which to play the sound. Defaults to 1.0.
```json
"pitch": 1.0
```
### Volume
The volume at which to play the sound. Defaults to 1.0.
```json
"volume": 0.5
```
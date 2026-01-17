---
title: Failure Options
description: Configuration options for a crate's failure behavior in SkiesCrates
---

Defines what happens when a player fails to open the crate for some reason, like missing keys, insufficient funds, inventory space, etc.
```json
"failure": {
  "pushback": 0.5,
  "sound": {
    "sound": "minecraft:block.lava.extinguish",
    "pitch": 1.0,
    "volume": 0.5
  }
}
```
## Pushback
The force with which a player is pushed back away from the crate positon by when a crate opening fails. Set to `0` to disable.
```json
"pushback": 0.5
```
## Sound
The sound played to the player when a crate opening fails.
```json
"sound": {
  "sound": "minecraft:block.lava.extinguish",
  "pitch": 1.0,
  "volume": 0.5
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
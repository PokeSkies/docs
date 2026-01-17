---
title: Webhook Options
description: Configuration options for Discord webhooks in SkiesCrates
---

Settings for sending Discord webhooks on certain events.
```json
"webhooks": {
  "duplicate_key": {
    "url": ""
  }
}
```
## Duplicate Key
Settings for the Duplicate Key webhook, which is sent when a player tries to use a key marked as `"unique": true` but the key failed unique checks.
```json
"duplicate_key": {
  "url": ""
}
```
---
description: Information about the Cadmus compat
---

# Cadmus
*The configuration settings described here are located in `config/skyblockbuilder/cadmus.json5` when you have 
[Cadmus](https://modrinth.com/mod/cadmus) installed.*

## Display Name
This setting defines the display name of the owner for the claimed chunks at spawn. You can configure it like this:

Using a fixed text:
```json
{
  "text": "SkyblockBuilder Spawn"
}
```

Or with a resource pack that references a translation key:
```json
{
  "translate": "cavestone.cadmus.chunk_claim_name"
}
```

## Protect Spawn Chunks
This option automatically claims spawn chunks as admin-owned. The size of the protected area is determined by the 
[`spawnProtectionRadius`](../packdev/config/spawn.mdx#spawn-protection-radius) setting.

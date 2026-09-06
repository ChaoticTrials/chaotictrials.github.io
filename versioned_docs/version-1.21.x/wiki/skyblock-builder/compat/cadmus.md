---
description: Information about the Cadmus compat
---

# Cadmus
*The configuration settings described here are located in `config/skyblockbuilder/compatability/cadmus.json5` when you have
[Cadmus 🔗](https://modrinth.com/mod/cadmus) installed.*

:::warning
Cadmus isn't available for this version yet, so the integration is currently switched off. The command still exists
and reports success, but no chunks are actually claimed. This page describes how it behaves once Cadmus is back.
:::

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
[`spawnProtectionRadius`](../packdev/configs/spawn.mdx#spawn-protection-radius) setting.

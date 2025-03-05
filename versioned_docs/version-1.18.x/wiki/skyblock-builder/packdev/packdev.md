---
description: Important information for pack developers
---

# Main Setup
## Setting World Type on Single Player as Default
To set the world type to `skyblockbuilder:skyblock` when playing single player, start the game once and it will
generate a config file named `forge-common.toml`. Update the only value in the file as follows:

```toml title="config/forge-common.toml"
[general]
   defaultWorldType = "skyblockbuilder:skyblock"
```

Alternatively, you can manually create the `forge-common.toml` file in the config directory with the above content.

## Setting World Type on Server as Default
For servers, you can provide a custom `server.properties` file by setting the `level-type` to
`skyblockbuilder:skyblock`. The rest of the setup is the same as
in [single player](#setting-world-type-on-single-player-as-default).

## Creating a Custom Skyblock Island
1. Build an island.
2. Use the custom item `Structure Saver` from the vanilla Tools tab in the creative inventory. The output directory for
   this will be `<minecraft>/skyblock_exports/<name>.nbt`. Alternatively, use the vanilla Structure Block, noting it can
   only save islands up to 48x48x48 blocks. The output for this will be in
   `<minecraft>/saves/<world>/generated/minecraft/structures/<name>.nbt`.
3. Copy the generated file to `config/skyblockbuilder/templates/<name>.nbt`.
4. [Configure the template with a readable name and spawns](#configuring-templates) in
   `config/skyblockbuilder/templates.json5`. Multiple spawns can be defined as arrays with `[x, y, z]` coordinates
   relative to the template structure's origin (0, 0, 0). You can
   also [modify existing spawns](../user/user.md#modifying-spawns) and export them using `/skyblock spawns EXPORT`. Note:
   These commands require the world type `Skyblock`.
5. View current spawns by running `/skyblock spawns debug`.
6. Apply the new spawn points by copying them into the `config/skyblockbuilder/templates.json5` file.

## Setting a Default Spawn Island
To set a default spawn island for new worlds, use the `spawn` setting. If `spawn` is set to `null`, the default team 
template will be used instead.

For more details on how to configure `spawn`, see [Configuring Templates](#configuring-templates).

## Setting Multiple Templates
To enable multiple schematics, place them in `config/skyblockbuilder/templates/`. Users can select these templates by
pressing the `Customize` button in the world options screen or by changing the schematic with the
`/skyblock manage islandShape <template>` command, where `<template>` is the name specified in
the [next chapter](#configuring-templates). **IMPORTANT**: Do not name any schematic files `template.nbt` to avoid
overwriting the default schematic.

## Configuring Templates
To configure templates and set spawn points, edit `config/skyblockbuilder/templates.json5` as detailed
in [Creating a Custom Skyblock Island](#creating-a-custom-skyblock-island). The `spawns` option holds multiple spawn
point sets:

```json
{
   "spawns": {
      "default": [
         [ 6, 3, 5 ]
      ]
   }
}
```

Each object key (e.g., `default`) is referenced by the `templates` section:

```json
{
  "templates": [
     {
        "name": "default",
        "desc": "Default template",
        "file": "default.nbt",
        "spawns": "default",
        "direction": "south"
     }
  ]
}
```

- `name`: The name displayed on the `Customize` screen.
- `desc`: A description shown on the `Customize` screen when choosing the world type.
- `file`: The filename of the template.
- `spawns`: The spawn configuration name, taken from the `spawns` option.
- `direction`: The direction the user should face for this template. Defaults to `south` if not specified.

You can differentiate multiple configurations with the same `file` and `spawns` using unique names. Additionally, you 
can set an icon for each template by placing it in `config/skyblockbuilder/templates/icon/<name>.png`, where `<name>` 
must be in lowercase.

:::note
If spawning inside a block, add the block to the
`#skyblockbuilder:additional_valid_spawns` [block tag](https://minecraft.wiki/w/Tutorials/Creating_a_data_pack#Tags).
:::

## Loot Chests on Island
To add a loot chest to an island, set the NBT data to the chest with the command:

```shell
/data merge block <x y z> {LootTable: modid:path/to/loot_table}
```

:::warning
Do not open the chest after merging this data.
:::

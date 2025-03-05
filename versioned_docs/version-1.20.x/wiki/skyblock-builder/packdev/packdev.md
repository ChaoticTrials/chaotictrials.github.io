---
description: Important information for pack developers
sidebar_position: 1
---

# Main Setup
## Setting World Type on Single Player as Default
See [Default World Type](../../defaultworldtype). Use `skyblockbuilder:skyblock` as config value.

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
   `<minecraft>/saves/<world>/generated/minecraft/structures/<name>.nbt`. If you set a Spawn Block, you'll also get an 
   additional file with all the spawn points where the spawn blocks were. They are not present in the exported file. If 
   you click the option to export everything into the config, the template will be generated into the correct directory.
   If you used spawn blocks, spawns will also be added to `config/skyblockbuilder/templates.json5`.
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
To set up templates and spawn points, you’ll need to edit the `config/skyblockbuilder/templates.json5` file. This guide 
helps you configure it step by step.

### Spawns
The `spawns` section specifies spawn point sets. For example:
```json title="config/skyblockbuilder/templates.json5"
{
   "spawns": {
      "default": {
         "east": [],
         "west": [],
         "north": [],
         "south": [
            [ 6, 3, 5 ]
         ]
      }
   }
}
```

Here, `"default"` is the key, and it contains four directional keys (e.g., `"north"`, `"south"`, etc.). Each directional
key holds a list of coordinate arrays (`[x, y, z]`) that define spawn positions. You can configure multiple entries, but
each top-level key (like `"default"`) must be unique.

### Spreads
The `spreads` section defines islands that surround the main island. For example:
```json title="config/skyblockbuilder/templates.json5"
{
  "spreads": {
    "default": [
      {
        "file": "default.nbt",
        "minOffset": [ -6, 3, 5 ],
        "maxOffset": [ 4, 10, 3 ],
        "origin": "CENTER"
      },
      {
        "file": "default2.nbt",
        "offset": [0, 64, 0]
      }
    ]
  }
}
```
This section is similar to the previously explained `spawns`. It allows you to define multiple keys (like `"default"`) holding arrays of objects. **Each key must be unique.**

Each object in the arrays specifies the following:

- **`file`**: The name of the file (located in `config/skyblockbuilder/templates/spreads`) with a `.nbt` or `.snbt` extension.
- **Offsets**:
    - Use `minOffset` and `maxOffset` to define a random range for the object's position relative to `[0, 0, 0]` (main island).
    - Alternatively, use `offset` for a fixed position relative to the main island.
- **Origin (Optional)**: Determines how offsets are calculated. Possible values:
    - `ZERO` (default) starts offset from the origin coordinates.
    - `CENTER` starts offset from the center of the object.

Here’s a visual representation of the `origin` options:  
![](/img/projects/skyblock-builder/config/origin.png)

:::info
To debug spreads, use the `/locate` command with the `spread` option:
```shell
/locate spread <team> <spread>
```  
This provides all the positions related to the specified spread type.
:::

### Surrounding Blocks
The `surroundingBlocks` section determines the blocks that will surround the template. For example:
```json title="config/skyblockbuilder/templates.json5"
{
  "surroundingBlocks": {
    "default": [
      "minecraft:stone",
      "minecraft:bedrock"
    ]
  }
}
```

- The key (e.g., `"default"`) must be unique and is linked to the `templates` option in the next section.
- The value is a list of block identifiers (resource locations). These blocks will randomly surround the template.
- Thickness of this surrounding area is determined by `surroundingMargin` (explained below).

### Templates
The `templates` section defines the actual templates, connecting them with spawn points and block settings. Here's an 
example:

```json
{
   "templates": [
      {
         "name": "default",
         "desc": "Default template",
         "file": "default.nbt",
         "spawns": "default",
         "offset": [ 0, 0, 0 ],
         "surroundingBlocks": "default",
         "surroundingMargin": 0
      }
   ]
}
```

| **Key**             | **Default Value**   | **Description**                                                                                                                       |
|---------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `name`              | ❌                   | The name displayed on the `Customize` screen. Use `{` at the start and `}` at the end for lang keys.                                  |
| `desc`              | `""` (empty string) | A description shown on the `Customize` screen when selecting the world preset. Use `{` at the start and `}` at the end for lang keys. |
| `file`              | ❌                   | The filename of the template.                                                                                                         |
| `spawns`            | ❌                   | The name of the spawn configuration, taken from the `spawns` option.                                                                  |
| `direction`         | `south`             | The direction the user will face when using this template. If not specified, defaults to `south`.                                     |
| `offset`            | `[ 0, 0, 0 ]`       | The positional offset for this template. Learn more about offsets [here](config/world.md#offset).                                     |
| `surroundingBlocks` | `""` (empty string) | The configuration name for surrounding blocks, taken from the `surroundingBlocks` option.                                             |
| `surroundingMargin` | `0`                 | The thickness of the border around the template.                                                                                      |

:::info
Settings with default values are optional.
:::

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

## Converting `.nbt` Templates to `.snbt`
To convert your existing `.nbt` templates to `.snbt`, use the command:  
`/skyblock templates_to_snbt`.

This command will convert all templates located in the `config/skyblockbuilder/templates/` folder into `.snbt` files. 
The original `.nbt` files will remain unchanged.

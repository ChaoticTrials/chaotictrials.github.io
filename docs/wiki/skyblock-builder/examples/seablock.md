---
sidebar_position: 3
description: Example Download for Seablock map
---

# Seablock

![Starting template](/img/projects/skyblock-builder/examples/seablock/start_template.png)
_[Download](/img/projects/skyblock-builder/examples/downloads/1.21.x/seablock.zip)_

To create a Seablock-like modpack, simply set the surface settings as shown in the config below. This will also generate
some gravel and cobblestone randomly instead of sand.

```json title="config/skyblockbuilder/world.json5"
{
  "minecraft:overworld": [
    {
      "block": "minecraft:bedrock"
    },
    {
      "block": "minecraft:sandstone",
      "height": 132
    },
    {
      "block": "minecraft:sand",
      "height": 4,
      "extras": {
        "blocks": [
          {
            "block": "minecraft:gravel",
            "weight": 99
          },
          {
            "block": "minecraft:cobblestone"
          }
        ],
        "chance": 0.01
      }
    },
    {
      "block": "minecraft:water",
      "height": 55
    }
  ]
}
```

I added multiple sandstone layers for the image. Additionally, the download includes a few more changes. Some features
and structures are enabled, and the spawn height is set to position the top of the island above the water layers.

Here you can also see the single biome option. This example demonstrates multiple templates, showing how to set them up
correctly.

```json title="config/skyblockbuilder/templates.json5"
{
  "templateList": [
    {
      "name": "Random Color",
      "file": "seablock_random.nbt",
      "spawns": "seablock",
      "allowPaletteSelection": false
    },
    {
      "name": "Blue",
      "file": "seablock_blue.nbt",
      "spawns": "seablock"
    },
    {
      "name": "Black",
      "file": "seablock_black.nbt",
      "spawns": "seablock"
    },
    {
      "name": "Green",
      "file": "seablock_green.nbt",
      "spawns": "seablock"
    },
    {
      "name": "Orange",
      "file": "seablock_orange.nbt",
      "spawns": "seablock"
    },
    {
      "name": "Purple",
      "file": "seablock_purple.nbt",
      "spawns": "seablock"
    },
    {
      "name": "Red",
      "file": "seablock_red.nbt",
      "spawns": "seablock"
    },
    {
      "name": "White",
      "file": "seablock_white.nbt",
      "spawns": "seablock"
    },
    {
      "name": "Yellow",
      "file": "seablock_yellow.nbt",
      "spawns": "seablock"
    }
  ]
}
```

Thanks to [benbenlaw 🔗](https://www.curseforge.com/members/benbenlaw/projects) for permitting the use of templates from
his well-known modpack [Seaopolis 🔗](https://www.curseforge.com/minecraft/modpacks/seaopolis) for this example.

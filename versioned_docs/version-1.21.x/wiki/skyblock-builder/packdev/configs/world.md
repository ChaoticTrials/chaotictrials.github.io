---
description: Shape the world
---

# World
*The settings on this page can be configured in `config/skyblockbuilder/world.json5`.*

## Island Distance
Specifies the distance between two islands.

## Offset
Determines the offset from coordinates (0, 0, 0) for island generation. This can be utilized to generate islands 
centrally within .mca files, or moving the island up/down. The value in the middle is you height, one and three is for x
and z direction.

## Sea Height
Sets the sea level in the world. Note that this does not affect the water height within the world but does influence
spawn heights for entities like squids.

## Biomes
This is a map that provides [ResourceLists](index.mdx#common-config-types).

:::info
Each dimension must have at least one valid biome! If not, your setting will completely be ignored.
:::

You can find a complete list of all possible biomes in `config/skyblockbuilder/data/biomes.txt`.

:::warning
Some structures require specific biomes to generate (e.g., Mansions require Dark Oak Forest). These
structures will not be generated if you do not have these biomes.
:::

## Carvers
This is a map that provides [ResourceLists](index.mdx#common-config-types).

To learn more about carvers, take a look at the [Minecraft wiki](https://minecraft.wiki/w/Carver_definition).

You can find a complete list of all possible carvers in `config/skyblockbuilder/data/carvers.txt`.

## Prevent Falling Blocks
Use this feature to stop blocks like gravel or sand from falling when generating the island. To specify which blocks 
should be prevented from falling, use the block tag `skyblockbuilder:prevent_scheduled_tick`. By default, this tag 
includes falling blocks such as sand, gravel, concrete powder, anvils, pointed dripstone, and the dragon egg.

## Teleport to the Overworld
Enable this option if the overworld is unchanged, and there is no defined spawn point. When enabled, players will be 
teleported to the overworld's world spawn instead of the default spawn point.

## Surface
Configures the block settings for generating surfaces across different dimensions. Each dimension can have its own 
surface configuration, specified as a list of layers. For a completely void space, use an empty array `[]`. If you want,
you could also use the same format as the 
[flat world generation settings ](https://minecraft.wiki/w/Superflat#Preset_code_format) without the biome 
configuration. If surface generation is disabled, these settings are ignored.

:::info
Each layer can have the following properties:
- `block`: (Required) The block to use for this layer (e.g., "minecraft:stone")
- `height`: (Optional) The height of the layer in blocks. Defaults to 1 if not specified
- `extras`: (Optional) Special configuration for random block placement
    - `blocks`: List of blocks that can randomly replace the layer's main block
        - `block`: The block to potentially place
        - `weight`: (Optional) Relative weight for random selection. Defaults to 1
    - `chance`: Probability (0.0 to 1.0) of replacing the main block with one from the extras
:::

```json title="Surface Configuration"
"surfaceSettings": {
  "minecraft:overworld": [
    {
      "block": "minecraft:bedrock"
    },
    {
      "block": "minecraft:blackstone",
      "height": 63
    },
    {
      "block": "minecraft:stone",
      "height": 5,
      "extras": {
        "blocks": [
          {
            "block": "minecraft:diamond_block",
            "weight": 9
          },
          {
            "block": "minecraft:cobblestone"
          }
        ],
        "chance": 0.01
      }
    }
  ],
  "minecraft:the_nether": [],
  "minecraft:the_end": []
}
```

In this example:
1. The overworld has three layers:
    - A single layer of bedrock at the bottom
    - 63 blocks of blackstone in the middle
    - 5 blocks of stone at the top, with a 1% chance per block to be replaced with either diamond blocks (90% of replacements) or cobblestone (10% of replacements)
2. Both the Nether and End dimensions are configured as void spaces with empty arrays

The total height of all layers in a dimension cannot exceed 384 blocks.

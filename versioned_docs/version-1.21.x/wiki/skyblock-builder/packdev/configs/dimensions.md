---
description: Configure vanilla dimensions and biome generation
---

# Dimensions
*The settings on this page can be configured in `config/skyblockbuilder/dimensions.json5`.*

## Overworld
The Overworld can be configured to either use custom void generation or vanilla world generation. When using custom
generation (`"isCustom": true`), the world will generate as void, ignoring vanilla
[structures](structures.md#structures-to-generate) and [features](structures.md#features-to-generate) as configured. If
you decide against it, a normal overworld will be generated. This may be useful when your
[starting dimension](spawn.mdx#dimension) is not the Overworld.

You can configure biome rings around islands using [centered biomes](#centered-biomes).

## The Nether
The Nether can be configured to either use custom void generation or vanilla world generation. When using custom
generation (`"isCustom": true`), the world will generate as void, ignoring vanilla
[structures](structures.md#structures-to-generate) and [features](structures.md#features-to-generate) as configured. If
you decide against it, a normal nether will be generated.

You can configure biome rings around islands using [centered biomes](#centered-biomes).

## The End
The Nether can be configured to either use custom void generation or vanilla world generation. When using custom
generation (`"isCustom": true`), the world will generate as void, ignoring vanilla
[structures](structures.md#structures-to-generate) and [features](structures.md#features-to-generate) as configured. If
you decide against it, a normal nether will be generated.
Additionally, you can decide whether the main island, which includes the Ender Dragon, should be kept or not.

## Other Dimensions
All other dimensions added by datapacks or mods will not be void. If you want to add additional void dimensions, have a
look at the [Custom Dimensions](../custom-dimensions.mdx) page. For compatibility issues, please contact the mod author
or [open an issue on GitHub](https://github.com/ChaoticTrials/SkyblockBuilder/issues/new?assignees=MelanX&labels=enhancement&template=feature_request.md&title=).

## Additional Explanation
### Centered Biomes

Centered biomes allow you to create concentric rings of specific biomes around islands. Each entry in the `centeredBiomes` list defines a biome ring with two properties:
- `id`: The Minecraft biome identifier
- `radius`: The width of the ring in blocks

The biomes are arranged in circles, with each subsequent ring starting where the previous ring ends. The radius of each ring adds to the previous ring's outer edge.

```json5 title="Example"
[
  {
    "id": "minecraft:plains",
    "radius": 64
  },
  {
    "id": "minecraft:end_highlands",
    "radius": 32
  }
]
```

This example would create:
1. An inner circle of Plains biome extending 64 blocks from the island
2. A ring of End Highlands biome starting at 64 blocks and extending an additional 32 blocks (from 64 to 96 blocks from center)

This feature is useful for:
- Creating controlled environments around spawn islands
- Establishing biome-specific farming or resource gathering areas
- Building layered ecosystems with predictable biome placement

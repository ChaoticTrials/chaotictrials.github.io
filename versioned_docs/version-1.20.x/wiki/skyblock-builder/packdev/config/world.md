---
description: Shape the world
---

# World
*The settings on this page can be configured in `config/skyblockbuilder/world.json5`.*

## Island Distance
Specifies the distance between two islands. If `minecraft:the_nether` is selected as the [start dimension](spawn.mdx#dimension),
this distance is divided by 8.

## Offset
Determines the offset from coordinates (0, 0, 0) for island generation. This can be utilized to generate islands 
centrally within .mca files, or moving the island up/down. The value in the middle is you height, one and three is for x
and z direction.

## Sea Height
Sets the sea level in the world. Note that this does not affect the water height within the world but does influence
spawn heights for entities like squids.

## Surface
Configures the block settings for generating surfaces across different dimensions. Follows a format similar
to [flat world generation settings 🔗](https://minecraft.wiki/w/Superflat#Preset_code_format), but ignores the
biome setting. These settings can be applied to each dimension. To generate a completely void space, set the dimension
to an empty string instead of removing it from the list. If surface generation is disabled, these settings are ignored.

## Biomes
This is a map that provides [ResourceLists 🔗](https://moddingx.org/libx/org/moddingx/libx/util/data/ResourceList.html#use_resource_lists_in_configs).

By default, all biomes are allowed. You can block specific biomes by adding them to the list. To only allow biomes from the list, set `allow_list` to `true`.

:::info
Each dimension must have at least one valid biome!
:::

You can find a complete list of all possible biomes in `config/skyblockbuilder/data/biomes.txt`.

:::warning
Some structures require specific biomes to generate (e.g., Mansions require Dark Oak Forest). These
structures will not be generated if you do not have these biomes.
:::

## Prevent Falling Blocks
Use this feature to stop blocks like gravel or sand from falling when generating the island. To specify which blocks 
should be prevented from falling, use the block tag `skyblockbuilder:prevent_scheduled_tick`. By default, this tag 
includes falling blocks such as sand, gravel, concrete powder, anvils, pointed dripstone, and the dragon egg.

## Teleport to the Overworld
Enable this option if the overworld is unchanged, and there is no defined spawn point. When enabled, players will be 
teleported to the overworld's world spawn instead of the default spawn point.

---
description: This document provides examples and guidance for configuring loot tables using spreads in Minecraft datapacks.
sidebar_position: 3
---

# Datapacks
## Loot Item Function

By using [spreads](packdev.md#configuring-templates), you can create maps that show the destination of each spread for a team. These maps can be added to your loot tables with the following configuration:

```json5 title="data/modid/loot_tables/example.json"
{
  "type": "minecraft:item",
  "name": "minecraft:map",
  "functions": [
    {
      "spreads": "spread_1", // The file name of the spread (without the extension); case-sensitive
      "decoration": "red_x", // Optional: Map marker decoration (default is "red_x")
      "function": "skyblockbuilder:spread_map", // Required: Specifies that this is the spread map functionality
      "zoom": 2 // Optional: Map zoom level (default is 2)
    }
  ]
}
```

```json5 title="data/modid/loot_tables/another_example.json"
{
  "type": "minecraft:item",
  "name": "minecraft:map",
  "functions": [
    {
      "spreads": [ // Array of spread file names
        "spread_1",
        "spread_2"
      ],
      "decoration": "red_x", // Optional: Defaults to "red_x" if not specified
      "function": "skyblockbuilder:spread_map", // Required: Spread map function
      "zoom": 2 // Optional: Default is 2
    }
  ]
}
```

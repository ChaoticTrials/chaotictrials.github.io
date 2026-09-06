---
sidebar_position: 2
description: Example Download for Stoneblock map
---

# Stoneblock
![Starting template](/img/projects/skyblock-builder/examples/stoneblock/start_template.png)
[Download](/img/projects/skyblock-builder/examples/downloads/1.21.x/stoneblock.zip)

To create a Stoneblock-like modpack, you can simply set the surface settings as shown in the configuration below.

```json title="config/skyblockbuilder/world.json5"
{
  "surface": true,
  "surfaceSettings": {
    "minecraft:overworld": "minecraft:bedrock,382*minecraft:stone,minecraft:bedrock"
  }
}
```

The downloaded file generates Bedrock at the top and bottom of the dimension. There is only one spawn point, and a 
starting inventory is included, as shown below:
```json title="config/skyblockbuilder/starter_inventory.json5"
{
  "items": [
    {
      "Slot": "mainhand",
      "Item": {
        "id": "minecraft:wooden_pickaxe",
        "count": 1,
        "components": {
          "minecraft:enchantments": {
            "minecraft:efficiency": 2
          },
          "minecraft:unbreakable": {},
          "minecraft:custom_name": "Infinite Pickaxe"
        }
      }
    }
  ],
  "curios_items": []
}
```

![Starting item](/img/projects/skyblock-builder/examples/stoneblock/start_item.png)
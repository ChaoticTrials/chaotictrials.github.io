---
description: Configure items players receive when joining a team
---

# Starting Inventory
*The settings on this page can be configured in `config/skyblockbuilder/starter_inventory.json5`.*

You can set a starting inventory by customizing the `config/skyblockbuilder/starter_inventory.json5` file. These items 
will be given to the player only when joining a team. If a player already was part of a team and re-joins it, no items
will be provided to prevent abusing. You can also assign items to specific slots using the `Slot` key.

You can export your inventory by using the command `/skyblock inventory export`, which will create a new file in the
[exports](../directory-structure.md#exports) directory containing the current inventory and the corresponding slots. 
This is the easiest way to do, and the only documented way.

If you have Curios installed, you can add items similarly to how you add them in `items`, but use the key `curios_items`
instead. Each item in this section must include the `Slot` key. You can find available slot names by running the
`/curios list` command. If you use the command above, it will obviously be exported as well.

Be careful not to add too many items to a single slot or use an invalid slot name, as this will log an error and notify
the player. Always double-check before releasing your pack!

:::info
Available values for the vanilla slots are:
- `mainhand` (default)
- `offhand`
- `head`
- `chest`
- `legs`
- `feet`
:::

A sample configuration file might look like this:

```json title="config/skyblockbuilder/starter_inventory.json5"
{
  "items": [
    {
      "Slot": "mainhand",
      "Item": {
        "id": "minecraft:diamond_pickaxe",
        "count": 1,
        "components": {
          "minecraft:unbreakable": {},
          "minecraft:enchantments": {
            "levels": {
              "minecraft:efficiency": 5
            }
          }
        }
      }
    },
    {
      "Slot": "offhand",
      "Item": {
        "id": "minecraft:bread",
        "count": 32
      }
    }
  ],
  "curios_items": [
    {
      "Slot": "charged_charm",
      "Item": {
        "id": "chargedcharms:charged_glowup_charm",
        "count": 1
      }
    },
    {
      "Slot": "charged_charm",
      "Item": {
        "id": "chargedcharms:charged_speed_charm",
        "count": 1
      }
    }
  ]
}
```

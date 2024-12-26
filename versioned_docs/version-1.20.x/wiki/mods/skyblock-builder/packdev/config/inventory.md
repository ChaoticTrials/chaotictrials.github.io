---
description: Defining a default start inventory
---

# Inventory
*The settings on this page can be configured in `config/skyblockbuilder/inventory.json5`.*

## Clear Inventory
If this option is selected, the user's inventory will be deleted when joining the world for the first time. This is
useful if you don't want other mods to give the player items, such as guide books.

:::note
This option will not affect the [starting inventory](#starting-inventory).
:::

## Dropping Inventory
If this option is selected, the user's inventory will be dropped when leaving a team.

## Starting Inventory
You can set a starting inventory by customizing the `config/skyblockbuilder/starter_inventory.json5` file. These items will be
given to the player only when they initially join the world, not when joining a team. You can also assign items to
specific slots using the `Slot` key.

You can export your inventory by using the command `/skyblock inventory export`, which will create a new file in the
`skyblock_exports` folder containing the current inventory and the corresponding slots.

If you have Curios installed, you can add items similarly to how you add them in `items`, but use the key `curios_items` 
instead. Each item in this section must include the `Slot` key. You can find available slot names by running the 
`/curios list` command.

Be careful not to add too many items to a single slot or use an invalid slot name, as this will log an error and notify 
the player. Always double-check before releasing your pack!

Available values for the vanilla slots are:
- `mainhand` (default)
- `offhand`
- `head`
- `chest`
- `legs`
- `feet`

A sample configuration file might look like this:

```json title="config/skyblockbuilder/starter_inventory.json5"
{
  "items": [
    {
      "item": "minecraft:diamond_pickaxe",
      "nbt": "{Unbreakable:1b}"
    },
    {
      "item": "minecraft:bread",
      "count": 32,
      "Slot": "offhand"
    }
  ],
  "curios_items": [
    {
      "item": "botania:flight_tiara",
      "nbt": "{variant:7}",
      "Slot": "head"
    },
    {
      "item": "botania:monocle",
      "Slot": "charm"
    }
  ]
}
```

If you want all other items to be deleted, you can set the `inventory.clear` configuration option to `true`. This will
remove items like guide books or other unwanted items, allowing you to only include desired items in the starter
inventory without modifying all other configurations.

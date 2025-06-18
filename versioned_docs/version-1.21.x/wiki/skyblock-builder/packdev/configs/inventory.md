---
description: Control inventory clearing and dropping behavior
---

# Inventory
*The settings on this page can be configured in `config/skyblockbuilder/inventory.json5`.*

## Clear Inventory
If this option is selected, the user's inventory will be deleted when joining the world for the first time. This is
useful if you don't want other mods to give the player items, such as guide books.

:::info
This option will not affect the [starting inventory](starting-inventory.md).
:::

## Dropping Inventory
If this option is selected, the user's inventory will be dropped when leaving a team.

## Initial Inventory Type
This configuration decides when exactly a player should receive the starting inventory.

|  Option   | When the inventory is granted           |
|:---------:|-----------------------------------------|
|  `spawn`  | The first time a player joins the world |
|  `team`   | The first time a player joins a team    |

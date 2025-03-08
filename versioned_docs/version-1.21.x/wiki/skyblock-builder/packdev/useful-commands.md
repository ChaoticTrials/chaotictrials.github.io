---
description: A collection of useful commands
sidebar_position: 5
---

# Useful Commands

## Convert
The `/skyblock convert` command in the code is used to convert files between `.nbt` and `.snbt` formats. It scans the 
[convert input](directory-structure.md#convert-input) directory for these file types. `.nbt` files will be converted to
`.snbt` and vice versa. The output is in the [convert output](directory-structure.md#convert-output) directory.

This command is best used for converting template files if you didn't set the config when exporting correctly.

## Export Inventory
The `/skyblock inventory export` command is used to export the current inventory for use as 
[starting inventory](configs/starting-inventory.md).

## Locate
The `/locate spread <team> [spread]` command is used to locate the spreads of a team. If no spread name is 
provided, it will locate all spreads.

:::warning
This command extends the vanilla `/locate` command and does not begin with `/skyblock`!
:::

## Spawns
The `/skyblock spawns` command shows particles at each spawn position of your current team. Additionally, a list with
the exact positions is printed in the chat.

## Generate
The `/skyblock generate template [pos] [border] [spreads]` command is used to generate a template from the 
[template list](create-templates/advanced-settings.mdx#templatelist-entry-options). If no position is provided, your 
current position will be used. `border` is a boolean that defines whether the
[surrounding blocks](create-templates/advanced-settings.mdx#surrounding-block-definitions) should be generated or not.
By default, they will not be generated. `spreads` is a boolean that defines whether the 
[spreads](create-templates/spread-definitions.mdx) should be generated or not. By default, they will not be generated.

## Dump Screen
The command `/skyblock dump` simply opens the dump screen. This is used for
[creating issues](../create_issues.md#dump-report).

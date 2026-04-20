---
description: Information on creating custom nether portal structures
sidebar_position: 4
---

# Custom Nether Entry

Using the **Structure Saver**, you can click on the red item tab. This allows to export exactly one structure called
`to_nether.[s]nbt`. This requires a nether portal block present, otherwise it wouldn't be exportable. It will be placed
into the folder `config/skyblockbuilder/templates/portals`. 

:::warning
Don't provide too many resources in the portal itself. If the nether portal block will be destroyed, the structure will 
re-generate next time entering the nether.

You may use the [Nether Spreads](spread-definitions.mdx#nether-spreads) for providing additional resources.
:::

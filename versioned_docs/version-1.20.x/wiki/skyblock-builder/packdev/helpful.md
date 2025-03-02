---
description: Some helpful information
sidebar_position: 4
---

# Helpful Information
## Commands
### Generate Command
Use the `/skyblock generate <template name> [pos] [border] [spreads]` command to debug your templates.

| Argument          | Description                                                                                                              | Default       |
|-------------------|--------------------------------------------------------------------------------------------------------------------------|---------------|
| `<template name>` | The name of the fully configured template, as defined in the [`templates.json5`](packdev.md#configuring-templates) file. | ❌             |
| `[pos]`           | The position where the structure will generate. If not specified, the structure will generate at your current position.  | Your position |
| `[border]`        | Set to `true` or `false`. If `true`, the border from the `surroundingBlocks` configuration will be added.                | `false`       |
| `[spreads]`       | Set to `true` or `false`. If `true`, the spread structures will also be generated.                                       | `false`       |

### Defaults
If you don't provide a `pos`, the structure will generate at your current position. `border` and `spreads` are `false` 
by default.

---
description: Configure permissions and command access
---

# Permissions
*The settings on this page can be configured in `config/skyblockbuilder/permissions.json5`.*

## Permission Levels
### Bypass Permissions
Sets the minimum permission level (0-4) required to bypass [permission restrictions](#allowed-actions).

### Bypass Limitations
Sets the minimum permission level (0-4) required to bypass limitations like [cooldowns](#cooldowns).

### Execute Commands
Sets the minimum permission level (0-4) required to execute operator commands.

## Force Skyblock Check
When enabled, this allows commands to be used in worlds without any skyblock dimension.

## Allowed Actions
The following actions can be individually allowed or restricted:
|            Permission             |               Description                |
|:--------------------------------:|:----------------------------------------:|
|          `team_create`           |           Creating new teams            |
|      `team_handle_invites`       |      Managing team invitations         |
| `team_handle_join_requests`      |       Managing join requests           |
|          `team_leave`            |         Leaving current team           |
|          `edit_spawns`           |        Modifying spawn points          |
|       `teleport_to_spawn`        |         Teleporting to spawn           |
| `teleport_to_visiting_island`    |        Visiting other islands          |
|        `teleport_home`           |      Teleporting to home island        |
|   `teleport_across_dimensions`   |     Cross-dimensional teleportation    |

## Spawn Settings
### Range
Defines the maximum distance from the island center (in blocks) where new spawns can be added. Default: 50

## Teleportation Settings
### Fall Protection
- `disallowTeleportationDuringFalling` - Prevents teleporting while falling
- `negateFallDamage` - Removes fall damage after teleporting

### Dimension Restrictions
Controls which dimensions allow teleportation commands. Uses the [resource list](index.mdx#common-config-types) format.

### Cooldowns
Configures the waiting period (in ticks) between teleport commands:
- `homeCooldown` - Delay for home teleports (Default: 3600 = 3min)
- `spawnCooldown` - Delay for spawn teleports (Default: 3600 = 3min)
- `visitCooldown` - Delay for visiting other islands (Default: 3600 = 3min)

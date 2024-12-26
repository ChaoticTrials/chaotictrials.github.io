---
description: Manage various permissions
---

# Permissions
*The settings on this page can be configured in `config/skyblockbuilder/permissions.json5`.*

## Create Own Team
Allows players to [create their own team](../../user/user.md#creating-your-own-island).

## Self-Management
Enables the player to use several commands, including:
- [Leaving the team](../admin.md#leaving-a-team)
- [Accepting/declining join requests](../../user/join-team.md#accepting-requests)
- [Accepting/declining invitations](../../user/invitations.md#accepting-invitations)
- [Sending join requests](../../user/join-team.md#sending-a-join-request)
- [Inviting other players to join](../../user/invitations.md#inviting-users)
- [Modifying spawns](#modify-spawns)

## Spawns
### Modify Spawns
Allows players to [modify spawns](../../user/user.md#modifying-spawns). Requires [Self-Management](#self-management) to be
enabled.

### Range
Defines the distance from the island center within which players can add spawns.

## Teleports
### Visits
Allows the player to [visit other islands](../../user/visiting.md). Each player has a cooldown before they can use this again.

### Home
Allows the player to [teleport back home](../../user/user.md#teleporting-back-to-home-island). Each player has a cooldown before they can use this again.

### Spawn
Allows the player to [teleport to the spawn island](../../user/user.md#teleporting-to-spawn-island). Each player has a cooldown before they can use this again.

### Cross-Dimension Teleportation
Allows players to teleport between dimensions. For example, they can teleport from the Nether back to the spawn island, their home, or even to another player's island.  
If this option is disabled, players must be in the main dimension (e.g., the Overworld) to teleport.

### Dimension Teleportation Restrictions
You can control where players are allowed to teleport using this setting.
- **Block certain dimensions:** Add dimensions to a list where teleportation commands are not allowed.
- **Allow only specific dimensions:** Turn on `allow_list` to restrict commands so they work *only* in the dimensions in the list.

This setting uses a resource list. Learn more about resource lists [here 🔗](https://moddingx.org/libx/org/moddingx/libx/util/data/ResourceList.html#use_resource_lists_in_configs).

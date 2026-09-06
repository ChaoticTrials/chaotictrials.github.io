---
title: Add your own
description: Adding mod compat into your own mod
sidebar_position: 2
---

# Adding compat as mod dev
## Disable team management
You can use the API to disable team management without needing to change the configuration. Additionally, you can
prevent players from being teleported to spawn when joining the world. For more information, visit
the [SkyblockBuilder API documentation 🔗](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/api/SkyblockBuilderAPI.java).
This can be called in the main constructor of your mod.

## Custom NeoForge Events
Skyblock Builder triggers several events which you can subscribe to, similar to normal NeoForge events. Here are all the
events:

- [Create Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockCreateTeamEvent.java)
- [Invite Player](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockInvitationEvent.java#L72)
- [Accept Invitation](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockInvitationEvent.java#L93)
- [Decline Invitation](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockInvitationEvent.java#L103)
- [Send Join Request](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockJoinRequestEvent.java#L70)
- [Accept Join Request](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockJoinRequestEvent.java#L80)
- [Deny Join Request](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockJoinRequestEvent.java#L100)
- [Toggle Visitation Status](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L70)
- [Toggle Join Request Status](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L97)
- [Add Spawn](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L124)
- [Remove Spawn](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L171)
- [Reset Spawns](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L191)
- [Rename Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L201)
- [Leave Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L230)
- [Create Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockOpManageEvent.java#L78)
- [Clear Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockOpManageEvent.java#L58)
- [Delete Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockOpManageEvent.java#L38)
- [Add to Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockOpManageEvent.java#L116)
- [Remove from Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockOpManageEvent.java#L147)
- [Teleport Home](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockTeleportEvent.java#L66)
- [Teleport to Spawn](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockTeleportEvent.java#L76)
- [Visit Island](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockTeleportEvent.java#L86)
- [Change Dimension](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockChangeDimensionEvent.java)

All events have proper Javadoc documentation explaining their functionality.

## Sending Players to the Right Dimension
This only matters if [dimension per team](../packdev/dimension-per-team.md) is enabled. With that feature on,
`minecraft:overworld` and `minecraft:the_nether` are no longer the same place for everyone - each team has its own copy
of them, so a hardcoded dimension key sends the player into somebody else's world, or into the shared one they left
behind.

If your mod teleports players itself, fire
[`SkyblockChangeDimensionEvent`](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.21.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockChangeDimensionEvent.java) on the
`NeoForge.EVENT_BUS` with the dimension you were about to use, then use `getDimension()` instead. Skyblock Builder
rewrites it to the calling player's team dimension, and leaves it untouched when there is nothing to rewrite.

Skyblock Builder already does this for a few mods itself. Have a look at the `coremods` module if you want to see how
that is wired up.

## Knowing Which Dimension a Player Is Really In
A team dimension is a copy of a vanilla one, but it does not share its id, so a check like
`player.level().dimension() == Level.NETHER` fails for every team.

To work around that, Skyblock Builder attaches the *normalized* dimension to every player. The attachment is registered
as `skyblockbuilder:data` and stores the vanilla dimension that the player's current one stands in for:

```java
ResourceKey<Level> dimension = player.getData(ModAttachmentTypes.data);
```

A player standing in their team's own nether reads back `minecraft:the_nether`, and one on the spawn island reads back
whatever you set as the [spawn dimension](../packdev/configs/spawn.mdx#dimension). It is serialized as
`normalized_dimension`, survives death, and defaults to `minecraft:overworld`. Here's an example output:
```snbt
"skyblockbuilder:data": {normalized_dimension: "minecraft:overworld"}
```

:::note
The attachment is only maintained while dimension per team is enabled, and it is updated when the player changes
dimension. If you just want to map a dimension key to the vanilla one it copies, without going through a player, use
`WorldUtil.resolveOriginalDimension(ResourceKey<Level>)` instead.
:::

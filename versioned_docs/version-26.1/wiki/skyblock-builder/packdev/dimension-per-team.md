---
description: Give each team its own copy of the world
sidebar_position: 4
---

# Dimension per Team

With `DimensionPerTeam` enabled, each team gets its own copy of the world, generated from your
[spawn dimension](configs/spawn.mdx#dimension). Teams never see each other's chunks, and nothing one team does can reach another one.

:::warning
This is experimental and not properly tested yet. Feel free to test it and report anything to me. Bugs and issues on
GitHub, good working things on CurseForge or Discord. Thank you ❤️
:::

:::note
This requires [Infiniverse](https://www.curseforge.com/minecraft/mc-mods/infiniverse). Without it, nothing really happens.
:::

## Should You Use This?
Probably not.

Everything else in Skyblock Builder assumes that all teams share one world, and that's how it's tested over several 
versions. This is the one switch that breaks that assumption, and it doesn't only break it for Skyblock Builder - it
also breaks it for every other mod in your pack, too. Have a look at [Other Mods](#other-mods) for what that means in
practice. Maybe it's not as bad as I described it here.

Enable it only if your teams genuinely need their own copy of the world - separate mob caps, separate world spawn, no
shared chunks at all - and only if you're willing to hunt down odd behavior across your whole modlist. If you just want
teams to be far away from each other, raise the [island distance](configs/world.md#island-distance) instead.

## What Each Team Gets
The island always goes into the team's own dimension. That one isn't optional, it's the whole point of the feature.

On top of that, each team can get its own overworld and its own nether, depending on the two settings. If you turn one
off, that vanilla dimension stays shared with everyone, exactly like it is without the feature. And if your spawn
dimension is the overworld or the nether, that copy is the one holding the island, so it's always created no matter what
the setting says.

The spawn team is the exception. Its island *is* the shared spawn, so it doesn't get a separate overworld of its own.

### Dimension Type and Generator
Team dimensions copy the dimension type and the generator of your configured
[spawn dimension](configs/spawn.mdx#dimension). If the dimension you configured doesn't exist, you get a warning 
and an overworld copy instead.

## Nether Portals
Portals work. You can light one in a team's own overworld or nether, and going through it puts you into that team's own
counterpart.

If the team doesn't have its own copy of the dimension you're heading to, because you turned that setting off, you end
up in the shared vanilla dimension instead. 

## The End and Modded Dimensions
The End stays shared. The Ender Dragon doesn't want to be alive in multiple dimensions at once, and I'm not going to
argue with it.

Modded dimensions aren't copied either (unless it's the spawn dimension). There are far too many of them out there, and
they're not built with this in mind. So the moment your players leave the overworld and the nether behind, they're all
in the same place again.

## What Else Changes
- The world spawn is no longer moved onto the island. It stays where it belongs, in the actual spawn dimension.
- The [`teleport_across_dimensions`](configs/permissions.md#allowed-actions) permission isn't checked. Every team is in
  its own dimension, so the check would deny practically every teleport.
- [Dimension restrictions](configs/permissions.md#dimension-restrictions) built from vanilla dimension names won't match
  the team dimensions, because those aren't vanilla dimensions.

## Other Mods
Any mod that hardcodes the overworld or the nether will look at a team's copy and see something that is neither. That
covers dimension-gated recipes, teleporters, structure locators, and anything with an "only works in the nether" check.

Skyblock Builder already patches a few of those itself - Teleport Cakes and Ender IO's fire crafting recipes both find
the correct team dimension. But there's no way to cover every mod out there, so expect to run into some.

## Report Issues to Me
:::info
If you're running dimension per team and something dimension-specific misbehaves in *another* mod, report it here, not
to that mod's author.
:::

Recipes that don't fire, a teleport that lands in the wrong place, a feature that insists you're not in the overworld
while you clearly are - all of that is Skyblock Builder's doing. It's what made those dimensions differ in the first
place, and the other mod is behaving exactly the way it was written. Sending its author a bug report they can't act on
doesn't help either of you.

When you report something, include a [dump](../create_issues.md#dump-report) and mention that dimension per team is
turned on. That tells me right away which half of the mod I'm looking at.

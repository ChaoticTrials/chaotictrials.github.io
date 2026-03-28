---
slug: skyblockbuilder-21.1.24
title: Critical Skyblock Builder Update
authors: melanx
tags: [news]
---

This blog post is about Skyblock Builder and issue [#210](https://github.com/ChaoticTrials/SkyblockBuilder/issues/210).

:::info
This blog post will explain some things behind the scenes and explain more about what you should do when updating.
:::

<!-- truncate -->

## Important Notes
:::warning
Create a backup of your world before updating!
:::

This update will try to modify your `level.dat` file. If you experience any issues with that, please report them on the 
[issue tracker](https://github.com/ChaoticTrials/SkyblockBuilder/issues).

## What went wrong?
When updating to Minecraft 1.21.1, I made the first mistake. For the centered biomes feature, I need a custom biome
source. This source is registered properly, it works as intended. However, I made the mistake to explicitly use
`MultiNoiseBiomeSource` as parent instead of a generic `BiomeSource`. Because of this, it didn't save the type of the
biome source because it's always a `MultiNoiseBiomeSource`, what's wrong with that? Well, when implementing new
features, such as a preset for the filtered biome loading, I needed a custom `MultiNoiseBiomeSource`. However, it didn't
store the type in your `level.dat` file. 

That's why the mod will now try to update these values when entering a world or booting a server. If the process was
done, it'll create a file called `.skyblockbuilder_level_dat_fixed` as indicator for the mod to not check that world
again. It contains a message for "nothing changed" and "converted."

## How to fix it?
Open your game and world as usual. It should fix all the problems itself. If it doesn't, please report it 
immediately on the [issue tracker](https://github.com/ChaoticTrials/SkyblockBuilder/issues)! Please include your 
`level.dat` file.

## Final words
I'm really sorry about that problem. I know that a lot of users and pack devs love Skyblock Builder and rely on it.
Such a big mistake in that mod that could cause worlds to break is really unfortunate. I will do my best to guide you
through the process of updating if you encounter any issues. For that, the easiest way is to join my
[Discord server](https://discord.chaotictrials.de/). Open a new thread in the `#🔧 ┃ support` channel.

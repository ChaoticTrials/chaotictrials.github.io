---
slug: simplebackups-sbk
title: SimpleBackups - SBK support
authors: melanx
tags: [news]
---

Today is an exciting day! I've added support for sbk backups to SimpleBackups. What's that? Well, read more about it
below!

<!-- truncate -->

## What is SBK?
SBK stands for SimpleBackups Kompressor. It's a new archive format specifically designed for Minecraft world backups.
Based on the file endings, the compression decides which pre-processing steps to apply. In this pre-processing, the raw
data will be re-written in a more efficient and compact way. This results in a tiny file size, but also in a
non-readable format for Minecraft itself. SBK is also not compatible with already existing archive viewers. Because of
that, there are tools available written in Rust to compress and decompress SBK files.

For Linux, the tool is well-tested. For Windows, I was only able to test it a bit in a virtual machine. For macOS, there
is a compiled version available, but this is not tested at all. I don't own any macOS device.

Read more about them here:
- https://github.com/ChaoticTrials/sbk
- https://github.com/ChaoticTrials/sbk-gui

## SBK in SimpleBackups
SimpleBackups supports basic SBK backups. You have to set the backup format to `SBK` and have at least one tool
available in `configs/simplebackups/external-dependencies` or straight up using the `-zstd` version of the mod available
on CurseForge and Modrinth as an extra file.

The tools you may place in the `external-dependencies` folder are:

| Tool       | Algorithm | Download Link                                                                         | GitHub Repo                                |
|------------|-----------|---------------------------------------------------------------------------------------|--------------------------------------------|
| `xz-java`  | LZMA2     | https://repo1.maven.org/maven2/org/tukaani/xz/1.12/xz-1.12.jar                        | https://github.com/tukaani-project/xz-java |
| `zstd-jni` | ZSTD      | https://repo1.maven.org/maven2/com/github/luben/zstd-jni/1.5.7-7/zstd-jni-1.5.7-7.jar | https://github.com/luben/zstd-jni          |

If none of these tools are available, an exception will be thrown, and you get a warning in the chat. If only one tool 
is available (which is totally fine), but you selected the other algorithm to use for SBK, SimpleBackups will 
automatically use the other algorithm without warning you.

## AI Disclaimer
Nearly everything in the two Rust projects and the package `de.melanx.simplebackups.sbk` was written by Claude Code 
Sonnet 4.6. I'm not proud of it, but that's how it was done. I wanted to provide a pretty decent result for SBK backups
and didn't want to spend a lot of time learning a new language. And I feel like I need that tool (`sbk` and `sbk-gui`)
because it's pretty useful to be able to read the files easily in a graphical interface. 

You can hate it, you cannot use SimpleBackups anymore, you can ignore SBK if you want. 

Using Claude Code helped a lot with the proper implementation of the SBK format in Rust and Java. I'd say it's pretty 
well tested and save to use.

---
slug: simplebackups-7zip-removal
title: SimpleBackups - 7zip support removed
authors: melanx
tags: [news]
---

The Minecraft 26.1 release brought a new feature to SimpleBackups: ZSTD and 7ZIP compression. Now, only 4 days later,
I remove the support for 7ZIP.

<!-- truncate -->

7ZIP is a very popular compression format, and because of that, I implemented it to SimpleBackups.
However, while trying to create some comparison tests for the wiki, I realized that the 7ZIP compression wasn't really
working. First, I forgot to add one line in the `build.gradle` file to include the correct library for 7ZIP. Second,
even adding the library correctly didn't fix the problem in production. In development, everything was working fine.

Now, I made some tests in development. Because of the results, I decided to remove the support for 7ZIP and keep ZSTD
and ZIP for now. For everyone interested, here are the results of the tests:

The test world is roughly 3,480,817,649 Bytes. Why roughly? Because the world was running during the tests. I didn't
move, but entities did.

## Compression Level: Default

|                   | ZIP           | 7ZIP          | ZSTD          |
|-------------------|---------------|---------------|---------------|
| Time              | 49.606s       | 04:27min      | 9.881s        |
| Compression ratio | 72.3 %        | 71.6 %        | **71.2 %**    |
| Exact size        | 2,517,893,038 | 2,493,717,593 | 2,478,299,046 |

## Compression Level: 1 (Fastest, but worst compression)

|                   | ZIP           | 7ZIP          | ZSTD          |
|-------------------|---------------|---------------|---------------|
| Time              | 45.242s       | 04:43min      | 9.819s        |
| Compression ratio | 72.5 %        | **70.7 %**    | 71.2 %        |
| Exact size        | 2,523,151,288 | 2,459,428,419 | 2,478,380,222 |

## Compression Level: 9 (Slowest, but best compression)

|                   | ZIP           | 7ZIP          | ZSTD          |
|-------------------|---------------|---------------|---------------|
| Time              | 54.607s       | 10:40min      | 06:15min      |
| Compression ratio | 72.3 %        | 69.1 %        | **68.6 %**    |
| Exact size        | 2,517,174,306 | 2,404,865,382 | 2,388,058,325 |

## Conclusion
As you can see from the results, 7ZIP is roughly as good as ZSTD but 7ZIP is extremely slow. Because of that, I'll
remove the support for 7ZIP entirely instead of finding a solution to keep it.

Maybe a little sneak peek for another compression format:

|                   | Default       | Fastest       | Slowest       |
|-------------------|---------------|---------------|---------------|
| Time              | 47.973s       | 36.948s       | 04:25min      |
| Compression ratio | 37.9 %        | 47.2 %        | **32.2 %**    |
| Exact size        | 1,320,888,879 | 1,643,665,604 | 1,120,662,253 |

As a little extra, I also publish a SimpleBackups version that already bundles zstd-jni. You can use this if you wish to
use this instead of the slim version and downloading zstd-jni manually.

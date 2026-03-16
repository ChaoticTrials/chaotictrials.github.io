---
description: Information about how to create issues.
---

# Creating Issues
If you encounter any issues with Skyblock Builder or have suggestions for new features, you can use the GitHub link 
below to report them: [Skyblock Builder Issues](https://github.com/ChaoticTrials/SkyblockBuilder/issues/new/choose)

---

## Reporting Bugs
### Standard Bug Report
To report a bug manually, use the **"Bug Report (Manual Mode)"** template available via the GitHub link above. When submitting your report, please include the following details:
1. A **title** that summarizes the issue.
2. The **Minecraft version** where the issue occurs.
3. The versions of the following: **LibX**, **Skyblock Builder**, and **Forge**.
4. The [`latest.log`](https://git.io/mclogs) file.
5. A **detailed description** of the issue.
6. Step-by-step instructions on **how to reproduce** the bug.

If the issue happens only in a modpack, include:
- A link to the modpack and the exact version you're using.
- If the modpack is not publicly released, provide an exported version with the most important configuration files.

Need to share sensitive information privately? Join the [Discord server 🔗](https://discord.chaotictrials.de) and send a direct message to `@MelanX`.

### Dump Report
In version 1.20.1, a new command `/skyblock dump` was introduced, making bug reports easier. Running this command opens 
a screen where you can customize what data to include in the dump file.  
![Dump Screen](/img/projects/skyblock-builder/dump_screen.png)  
*(The red outlined option is only visible to operators)*

Starting with version **1.20.1-5.1.29**, the dump uses manifest v2, which adds mod file hashes (MD5, SHA-1, SHA-512) for
Skyblock Builder and its dependencies, includes `debug.log` alongside `latest.log`, and automatically redacts IP
addresses from log files and crash reports.

|                         |                                                                                                                                                    |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `Configs`               | Includes all Skyblock Builder configuration files.                                                                                                 |
| `Templates and Spreads` | Includes files from the `config/skyblockbuilder/templates` directory, including subdirectories.                                                    |
| `level.dat`             | Adds the `level.dat` file of the current world.                                                                                                    |
| `latest.log`            | Includes `latest.log` and `debug.log`. IP addresses are automatically redacted.                                                                    |
| `crash-<latest>.txt`    | Includes the most recent crash report. IP addresses are automatically redacted. Only select this if the crash is related to the issue.             |
| `Skyblock Data File`    | Adds `world/data/skyblock_builder.dat`, which stores team metadata, island positions, and more.                                                    |
| `Create Dump on Server` | Ensures the dump file is created on the server (useful for server-side issues).                                                                    |

Click the **"Create Dump"** button to generate a ZIP file, located in `<instance>/skyblockbuilder/dumps`. The generated file name will appear in the chat, and clicking it will open the folder.

When submitting a dump report, use the **"Bug Report (Dump Mode)"** template and include:
1. The **Minecraft version**.
2. The generated **dump file**.
3. A **detailed description** of the issue.
4. Steps on **how to reproduce**.

If the problem occurs in a modpack, include the same information as a standard bug report (modpack link and version or an exported modpack if it’s unreleased).

Sensitive information? Share it privately via [Discord 🔗](https://discord.chaotictrials.de) by messaging `@MelanX`.

---

## Requesting Features

To suggest new features, use the **"Feature Request"** template. Please note:
- New features are generally added only in the latest mod version.
- Major features that require extensive code changes may be implemented in the next major Minecraft version.
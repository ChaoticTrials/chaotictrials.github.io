import React, { useState } from "react";
import JSZip from "jszip";
import styles from "./styles.module.css";

const allowedFiles = [
    "dimensions.json5",
    "inventory.json5",
    "permissions.json5",
    "spawn.json5",
    "structures.json5",
    "templates.json5",
    "world.json5",
];

function removeComments(contents: string): string {
    return contents
        .split("\n")
        .filter((line) => !line.trim().startsWith("//"))
        .join("\n")
        .trim();
}

function collectPermissions(oldConfig: any): string[] {
    const permissions: string[] = [];
    if (oldConfig?.createOwnTeam ?? true) {
        permissions.push("team_create");
    }
    if (oldConfig?.selfManage ?? true) {
        permissions.push("team_handle_invites", "team_handle_join_requests", "team_leave");
    }
    if (oldConfig?.Spawns?.modifySpawns ?? true) {
        permissions.push("edit_spawns");
    }
    if (oldConfig?.Teleports?.spawn ?? true) {
        permissions.push("teleport_to_spawn");
    }
    if (oldConfig?.Teleports?.allowVisits ?? true) {
        permissions.push("teleport_to_visiting_island");
    }
    if (oldConfig?.Teleports?.home ?? true) {
        permissions.push("teleport_home");
    }
    if (oldConfig?.Teleports?.crossDimensionTeleportation ?? true) {
        permissions.push("teleport_across_dimensions");
    }
    return permissions;
}

function transformSpreads(spreads: any): any {
    const result: any = {};
    for (const key in spreads) {
        result[key] = spreads[key].map((entry: any) => ({
            file: entry.file,
            offset: {
                min: entry.offset || entry.minOffset || [0, 0, 0],
                max: entry.offset || entry.maxOffset || [0, 0, 0],
            },
            origin: entry.origin || "CENTER",
        }));
    }
    return result;
}

function transformSurroundingBlocks(surroundingBlocks: any): any {
    const result: any = {};
    for (const key in surroundingBlocks) {
        result[key] = surroundingBlocks[key].map((block: any) => ({ block }));
    }
    return result;
}

function processConfig(fileName: string, contents: string): string {
    let data: any;
    try {
        data = JSON.parse(removeComments(contents));
    } catch (err) {
        console.error("Error parsing", fileName, err);
        alert(`An error occurred while parsing "${fileName}": ${err}`);
        return null;
    }

    let newData: any = {};

    switch (fileName) {
        case "dimensions.json5": {
            newData["End"] = {
                isCustom: !(data?.End?.Default ?? true),
                keepMainIsland: data?.End?.mainIsland ?? true,
            };
            newData["Nether"] = {
                centeredBiomes: data?.Nether?.centeredBiomes ?? [],
                isCustom: !(data?.Nether?.Default ?? true),
            };
            newData["Overworld"] = {
                centeredBiomes: data?.Overworld?.centeredBiomes ?? [],
                isCustom: !(data?.Overworld?.Default ?? true),
            };
            break;
        }
        case "inventory.json5": {
            newData["clearInitialInventory"] = data?.clearInv ?? false;
            newData["dropItems"] = data?.dropItems ?? true;
            break;
        }
        case "permissions.json5": {
            newData["forceSkyblockCheck"] = data?.forceSkyblockCheck ?? false;
            newData["minimumPermissionLevelToBypass"] = 2;
            newData["minimumPermissionLevelToBypassLimitations"] = 3;
            newData["minimumPermissionLevelToExecuteCommands"] = 4;
            newData["permissions"] = collectPermissions(data);
            newData["Spawns"] = {
                range: data?.Spawns?.range ?? 50,
            };
            newData["Teleports"] = {
                disallowTeleportationDuringFalling: data?.Teleports?.preventWhileFalling ?? false,
                negateFallDamage: data?.Teleports?.noFallDamage ?? false,
                teleportationDimensions:
                    data?.Teleports?.teleportationDimensions ?? { allow_list: false, elements: [] },
                Cooldowns: {
                    homeCooldown: data?.Teleports?.Cooldowns?.homeCooldown ?? 3600,
                    spawnCooldown: data?.Teleports?.Cooldowns?.spawnCooldown ?? 3600,
                    visitCooldown: data?.Teleports?.Cooldowns?.visitCooldown ?? 3600,
                },
            };
            break;
        }
        case "spawn.json5": {
            newData["interactionBlocksInSpawnProtection"] =
                data?.interactionBlocksInSpawnProtection ?? {
                    allow_list: true,
                    elements: ["gravestone:gravestone", "tombstone:grave_simple"],
                };
            newData["interactionEntitiesInSpawnProtection"] =
                data?.interactionEntitiesInSpawnProtection ?? {
                    allow_list: true,
                    elements: ["corpse:corpse"],
                };
            newData["interactionItemsInSpawnProtection"] =
                data?.interactionItemsInSpawnProtection ?? {
                    allow_list: true,
                    elements: ["tombstone:grave_key"],
                };
            newData["radiusToFindValidSpawn"] = data?.radius ?? 50;
            newData["skipCenterIslandCreation"] = data?.skipCenterIslandCreation ?? false;
            newData["spawmDimension"] = data?.dimension ?? "minecraft:overworld";
            newData["spawnProtectionEvents"] =
                data?.spawnProtectionEvents ?? [
                    "interact_entities",
                    "interact_blocks",
                    "mob_griefing",
                    "explosions",
                    "crop_grow",
                    "apply_bonemeal",
                    "mobs_spawn",
                    "mobs_spawn_egg",
                    "damage",
                    "healing",
                ];
            newData["spawnProtectionRadius"] = data?.spawnProtectionRadius ?? 0;
            newData["Height"] = {
                heightCalculationType: data?.Height?.spawnType ?? "set",
                offset: data?.Height?.offset ?? 0,
                range: data?.Height?.range ?? { bottom: 64, top: 319 },
            };
            break;
        }
        case "structures.json5": {
            newData["featuresToGenerate"] =
                data?.generationFeatures ?? {
                    allow_list: true,
                    elements: ["minecraft:end_spike", "minecraft:end_gateway_return"],
                };
            newData["structuresToGenerate"] =
                data?.generationStructures ?? {
                    allow_list: true,
                    elements: ["minecraft:fortress"],
                };
            break;
        }
        case "templates.json5": {
            newData["defaultOffset"] = data?.defaultOffset ?? 0;
            newData["mainSpawnIsland"] = data?.spawn ?? null;
            newData["spawnPointReferences"] =
                data?.spawns ?? {
                    default: {
                        south: [[6, 3, 5]],
                        west: [],
                        north: [],
                        east: [],
                    },
                };
            newData["spreadReferences"] = transformSpreads(data?.spreads ?? { default: [] });
            newData["surroundingBlockReferences"] = transformSurroundingBlocks(
                data?.surroundingBlocks ?? { default: {} }
            );
            newData["templateList"] =
                data?.templates ?? [
                    {
                        name: "default",
                        file: "default.nbt",
                        spawns: "default",
                        surroundingBlocks: "default",
                        spreads: "default",
                    },
                ];
            break;
        }
        case "world.json5": {
            newData = { ...data };
            delete newData.offset;
        }
    }

    return JSON.stringify(newData, null, 2);
}

const UpdateConfigSky20To21 = () => {
    const [isZipLoaded, setIsZipLoaded] = useState(false);
    const [processedZipBlob, setProcessedZipBlob] = useState<Blob | null>(null);

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (
            !file ||
            (!file.type.includes("zip") && !file.name.toLowerCase().endsWith(".zip"))
        ) {
            alert("Please drop a valid zip file.");
            return;
        }
        const zip = new JSZip();
        try {
            const content = await file.arrayBuffer();
            const loadedZip = await zip.loadAsync(content);
            const newZip = new JSZip();

            // Iterate through each file in the zip
            await Promise.all(
                Object.keys(loadedZip.files).map(async (fileName) => {
                    const fileObj = loadedZip.files[fileName];
                    // If the file is not in our allowed list, simply copy it over
                    if (!allowedFiles.includes(fileName)) {
                        const fileData = await fileObj.async("string");
                        newZip.file(fileName, fileData);
                        return;
                    }
                    // Process the allowed JSON5 file using our transformation logic
                    const fileData = await fileObj.async("string");
                    const processedData = processConfig(fileName, fileData);
                    if (!processedData) return;
                    newZip.file(fileName, processedData);
                })
            );

            const newZipBlob = await newZip.generateAsync({ type: "blob" });
            setProcessedZipBlob(newZipBlob);
            setIsZipLoaded(true);
        } catch (err) {
            console.error("Error processing zip file:", err);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const downloadZip = () => {
        if (!processedZipBlob) return;
        const link = document.createElement("a");
        link.href = URL.createObjectURL(processedZipBlob);
        link.download = "configs.zip";
        link.click();
        setIsZipLoaded(false);
    };

    return (
        <div>
            <h2>Update Configs</h2>
            <p>
                Drag and drop your zipped config file below to update your configuration files.
                It needs to be a zip file containing all the files from the <code>config/skyblockbuilder</code> folder
                of your Skyblock 1.20.1 configs ending with <code>.json5</code>.
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                    className={styles.dropArea}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <p>Drag & drop your configs.zip file here</p>
                </div>
                <button
                    className={styles.downloadButton}
                    onClick={downloadZip}
                    disabled={!isZipLoaded}
                >
                    Download updated configs
                </button>
            </div>
        </div>

    );
};

export default UpdateConfigSky20To21;

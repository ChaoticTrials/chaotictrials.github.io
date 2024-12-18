import React, { useState } from "react";
import JSZip from "jszip";
import styles from './styles.module.css';

const UpdateOldConfig = () => {
    const [isFileLoaded, setIsFileLoaded] = useState(false);
    const [isTemplatesFileLoaded, setIsTemplatesFileLoaded] = useState(false);
    const [fileData, setFileData] = useState<Record<string, any>>({});
    const [templatesFileData, setTemplatesFileData] = useState({});

    const removeComments = (contents) => {
        return contents
            .split("\n")
            .filter((line) => !line.trim().startsWith("//"))
            .join("\n");
    };

    const handleFile = (file, setData, setLoaded) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const contents = e.target.result;
            try {
                const parsedContents = JSON.parse(removeComments(contents));
                setData(parsedContents);
                setLoaded(true);
            } catch (err) {
                console.error("Failed to parse file:", err);
            }
        };
        reader.readAsText(file);
    };

    const handleDrop = (event, setData, setLoaded) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        handleFile(file, setData, setLoaded);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const createAndDownloadFiles = () => {
        const { Dimensions, Inventory, Spawn, Structures, Utility, World } = fileData;
        const zip = new JSZip();
        zip.file("dimensions.json5", JSON.stringify(Dimensions));
        zip.file("inventory.json5", JSON.stringify(Inventory));
        zip.file("spawn.json5", JSON.stringify(Spawn));
        zip.file("structures.json5", JSON.stringify(Structures));
        zip.file("permissions.json5", JSON.stringify(Utility));
        zip.file("world.json5", JSON.stringify(World));

        zip.generateAsync({ type: "blob" }).then((content) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(content);
            link.download = "data.zip";
            link.click();
            setIsFileLoaded(false);
        });
    };

    const createAndDownloadTemplatesFile = () => {
        const blob = new Blob([JSON.stringify(templatesFileData)], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "templates.json5";
        link.click();
        setIsTemplatesFileLoaded(false);
    };

    return (
        <div>
            <h2>Update 1.19.2 configs</h2>
            <p>Use this tool to update your old <code>common-config.json5</code> to the new files.</p>

            <div className={styles.myContainer}>
                <div
                    className={styles.dropArea}
                    onDrop={(event) => handleDrop(event, setFileData, setIsFileLoaded)}
                    onDragOver={handleDragOver}
                >
                    <p>Drag & drop common-config.json5 file here</p>
                </div>

                <div
                    className={styles.dropArea}
                    onDrop={(event) =>
                        handleDrop(event, setTemplatesFileData, setIsTemplatesFileLoaded)
                    }
                    onDragOver={handleDragOver}
                >
                    <p>Drag & drop templates.json5 file here</p>
                </div>
            </div>

            <div className={styles.myContainer}>
                <button
                    className={styles.downloadButton}
                    onClick={createAndDownloadFiles}
                    disabled={!isFileLoaded}
                >
                    Download Files
                </button>
                <button
                    className={styles.downloadButton}
                    onClick={createAndDownloadTemplatesFile}
                    disabled={!isTemplatesFileLoaded}
                >
                    Download File
                </button>
            </div>
        </div>
    );
};

export default UpdateOldConfig;

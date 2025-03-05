# Directories
Here, you have a quick overview over all the directories added by Skyblock Builder.
```text
Modpack Folder
├── config
│   ├── skyblockbuilder
│   │   ├── data
│   │   └── templates
│   │       ├── icons
│   │       ├── islands
│   │       ├── portals
│   │       └── spreads
├── skyblockbuilder
│   ├── convert_input
│   ├── convert_output
│   ├── dumps
│   └── exports
```

## Convert Input
In the `skyblockbuilder/convert_input` folder, you may put all `.nbt` or `.snbt` files you want to 
[convert](useful-commands.md#convert).

## Convert Output
In the `skyblockbuilder/convert_output` folder, every [converted](useful-commands.md#convert) file will be saved.

## Dumps
The `skyblockbuilder/dumps` folder is the destination of all your created [dump report files](../create_issues.md).

## Exports
The `skyblockbuilder/exports` folder is the destination for the
[Inventory Command](useful-commands.md#export-inventory), and whenever you [save a structure](create-templates) using
the **Structure Saver** without saving to config.

## Configs
### Templates
The templates in `config/skyblockbuilder/templates` are split into 3 subdirectories.

- `islands` contains the main islands
- `portals` contains all the portals, at the moment only the [Custom Nether Entry](create-templates/custom-nether-entry.md)
- `spreads` contains all the files for the [spreads](create-templates/spread-definitions.mdx)

### Data
The directory `config/skyblockbuilder/data` contains a few `.txt` files containing available dimensions, biomes, 
whatever the file is called like.

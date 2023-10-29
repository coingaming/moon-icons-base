# Fetch Icons

> **Note** The codeblocks in this document are executed by `npm run fetch-icons`.

## Fetch icons from Figma

We use the [figma-export cli](https://github.com/marcomontalbano/figma-export) to download
SVG files directly from Figma. The configuration for this process is located in
`.figmaexportrc.js`.

For this process to work the FIGMA_TOKEN must be set in GitHub secrets.

```sh
# Remove all the previous icons so any icon that was removed from Figma does not remain in the repository.
rm -rf icons

# Export the FIGMA_TOKEN Github secret.
export $(process.env.FIGMA_TOKEN)

# This command requires a FIGMA_TOKEN to be set in GitHub secrets.
npx figma-export use-config
```
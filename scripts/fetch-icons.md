# Fetch Icons

> **Note**: The codeblock in this document is executed by `npm run fetch-icons`.

## Fetch icons from Figma

We use the [figma-export cli](https://github.com/marcomontalbano/figma-export) to download
SVG files directly from Figma. The configuration for this process is located in
`.figmaexportrc.js`.

For this process to work the FIGMA_TOKEN must be set in GitHub secrets.

```sh
# Remove all the previous icons so any icon that was removed from Figma does not remain in the repository.
rm -rf icons

# By default uses FIGMA_TOKEN GitHub secret set in the workflow env. For local development export FIGMA_TOKEN set in .env file.
export $(egrep -v '^#' .env | xargs)

# This command requires a FIGMA_TOKEN to be set in GitHub secrets.
npx figma-export use-config
```
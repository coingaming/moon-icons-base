#!/bin/bash

# Remove all the previous icons so any icon that was removed from Figma does not remain in the repository.
rm -rf icons

# When using local environment get the FIGMA_TOKEN variable from .env file. The GitHub Action 
# will use the one from the workflow environment by default.
export $(egrep -v '^#' .env | xargs)

# This command requires a FIGMA_TOKEN to be set in env.
npx figma-export use-config

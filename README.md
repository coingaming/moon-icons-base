# Moon Design System icons base repository

Base repository for Moon Design System SVG icons. The aim of this repository is to always be in sync with the current state of the MDS icons Figma [file](https://www.figma.com/file/RDNl9dNTMw2y0LO7K3veak/moon-dev-icon-set?type=design&node-id=4793-543&mode=design&t=UvJQgyCNfpQB9Eft-0). Thus this repository has no versioning nor does it do any post-processing on the icons. Commits to this repository should activate further workflows in MDS technology specific (React, Elixir, Flutter) repositories.

## How is this repository updated

Commits to this repository are done automatically via GitHub Actions workflow which gets activated by the following sequence of events:

1) When designers publish a new icon in the Figma icons file, a Figma webhook triggers from the Figma LIBRARY_PUBLISH event.
2) The webhook then triggers an AWS Lambda on MDS AWS sub-account.
3) Lambda triggers GH Actions workflow by hitting https://api.github.com/repos/coingaming/moon-icons-base/dispatches endpoint with the _icons_updated_ keyword.

## Notice!

The whole workflow chain requires having/maintaining PATs:

- Figma PAT - (no expiry) with admin access to Moon team on Figma. Is used in AWS Lambda and _fetch_svgs.yml_ workflow as secret.
- GitHub YOLO organisation PAT scoped to this repository (name: "MDS automation". Requires yearly regeneration). Is used in AWS Lambda as secret mainly or for local development, set in .env file. Good candidate in future to have automated token rotation set up.
- MOON_GH_TOKEN - YOLO GitHub organisation secret scoped to all MDS icons and token repositories (should be available by default to relevant repositories).

## Reference architecture diagram

![Screenshot 2023-10-30 at 00 00 36](https://github.com/coingaming/moon-icons-base/assets/46851868/db2cb28d-c3f5-4b07-9100-d3b6f1f10120)

Miro board link: [https://miro.com/app/board/uXjVNcbQUMk=/#tpicker-content](https://miro.com/app/board/uXjVNcbQUMk=/#tpicker-content)

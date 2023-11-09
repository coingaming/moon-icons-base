module.exports = {
  commands: [
    [
      "components",
      {
        fileId: "RDNl9dNTMw2y0LO7K3veak",
        onlyFromPages: ["icon-set"],
        outputters: [
          require("@figma-export/output-components-as-svg")({
            output: "./icons",
            getDirname: () => "",
          }),
        ],
      },
    ],
  ],
};

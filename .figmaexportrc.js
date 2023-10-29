module.exports = {
  commands: [
    [
      "components",
      {
        fileId: "Mq0ul9vM8Kc5FroxM8lxCU",
        onlyFromPages: ["    ↪️  Dev-MDSMainIconSet"],
        outputters: [
          require("@figma-export/output-components-as-svg")({
            output: "./icons",
          }),
        ],
      },
    ],
  ],
};

module.exports = {
  commands: [
    [
      "components",
      {
        fileId: "S3q1SkVngbwHuwpxHKCsgtJj",
        onlyFromPages: ["Icons"],
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

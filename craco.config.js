const { join } = require("path");

module.exports = {
  babel: {
    plugins: [
      [
        "babel-plugin-fbt",
        {
          fbtCommonPath: join(__dirname, "commonStrings.json"),
          fbtEnumPath: join(__dirname, ".enum_manifest.json"),
          extraOptions: {
            __source: true,
            __self: true,
          },
        },
      ],
      "babel-plugin-fbt-runtime",
    ],
  },
};

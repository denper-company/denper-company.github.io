const { join } = require("path");

module.exports = {
  babel: {
    plugins: [
      [
        "babel-plugin-fbt",
        {
          fbtCommonPath: join(__dirname, "common_strings.json"),
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
  webpack: {
    configure: (config, { env }) => {
      if (env === "production") {
        config.optimization["splitChunks"] = {
          chunks: "all",
        };
      }
      return config;
    },
  },
};

const path = require("path");

module.exports = {
  i18n: {
    // providing the locales supported by your application
    locales: ["en-US", "es-ES"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "es-ES",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"], name: "[name].[ext]" },
    });
    return cfg;
  },
};

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["*"],
  css: { extract: false },
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
});

module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  //   plugins: ["vue", "typescript-eslint"],
  plugins: ["@typescript-eslint"],

  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {},
};

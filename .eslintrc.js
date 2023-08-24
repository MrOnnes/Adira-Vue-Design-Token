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
  rules: {
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-indent": "off",
    "vue/max-attributes-per-line": "off",
  },
};

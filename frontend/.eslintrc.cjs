module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["semistandard"],

  rules: {
    quotes: "off",
    "comma-dangle": "off",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
  },
  "multiline-ternary": "error",
  "operator-linebreak": [
    "error",
    "after",
    { overrides: { "?": "before", ":": "before" } },
  ],
};

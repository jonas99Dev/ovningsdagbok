// eslint.config.js
import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
  },
  {
    files: ["cypress/**/*.ts", "cypress/**/*.tsx"],
    env: { "cypress/globals": true },
    rules: {
      "@typescript-eslint/no-namespace": "off",
    },
  },
];

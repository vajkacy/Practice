import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS recommended rules
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { js },
    extends: ["js/recommended"],
  },
  // React recommended rules
  {
    files: ["**/*.jsx"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { react: pluginReact },
    rules: pluginReact.configs.recommended.rules,
  },
]);

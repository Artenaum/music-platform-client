import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
  { 
	files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
	languageOptions: { 
		globals: {...globals.browser, ...globals.node} 
	},
	rules: {
      //"no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
	  "@typescript-eslint/no-require-imports": "off",
	  "@typescript-eslint/no-unused-expressions": "off",
	  "@typescript-eslint/no-unsafe-function-type": "off",
	  "@typescript-eslint/no-explicit-any": "off",
	  "react/no-unknown-property": "off",
	  "react/prop-types": "off",
    }
  },
]);

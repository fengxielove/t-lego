import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint, { parser as typeScriptParser } from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";
import typescriptParser from "@typescript-eslint/parser";

export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },

	pluginJs.configs.recommended,

	...tseslint.configs.recommended,

	...pluginVue.configs["flat/recommended"],
	eslintConfigPrettier,
	{
		languageOptions: {
			parserOptions: {
				parser: typescriptParser,
				ecmaVersion: 2020,
				sourceType: "module",
			},
		},
	},
	{
		rules: {
			"vue/multi-word-component-names": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-explicit-any": "off",
		},
	},
];

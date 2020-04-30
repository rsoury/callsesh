const { alias: appAlias } = require("./packages/app/config/alias");
const { alias: authAlias } = require("./packages/auth/config/alias");

module.exports = {
	extends: [
		"airbnb",
		"plugin:prettier/recommended",
		"prettier/react",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:jest/recommended"
	],
	parser: "babel-eslint",
	plugins: ["babel", "react", "baseui", "jest"],
	env: {
		browser: true,
		jest: true
	},
	settings: {
		react: {
			pragma: "React",
			version: "detect"
		}
	},
	overrides: [
		{
			files: ["packages/app/**/*"],
			settings: {
				"import/resolver": {
					alias: {
						map: Object.entries(appAlias),
						extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
					}
				}
			}
		},
		{
			files: ["packages/auth/**/*"],
			settings: {
				"import/resolver": {
					alias: {
						map: Object.entries(authAlias),
						extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
					}
				}
			}
		}
	],
	rules: {
		// See: https://github.com/benmosher/eslint-plugin-import/issues/496
		"import/no-extraneous-dependencies": 0,
		"import/prefer-default-export": 0,
		"no-console": ["warn"],
		"no-unused-vars": ["error", { ignoreRestSiblings: true }],
		"class-methods-use-this": 0,
		"no-param-reassign": 0,
		"react/jsx-props-no-spreading": 0,
		"react/forbid-prop-types": [
			"error",
			{
				forbid: ["any", "array"],
				checkContextTypes: true,
				checkChildContextTypes: true
			}
		],
		"react/state-in-constructor": 0,
		"react/react-in-jsx-scope": "off",
		"react/no-danger": "off"
	}
};

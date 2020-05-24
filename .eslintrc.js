const path = require("path");
const { alias: appAlias } = require("./packages/app/config/alias");
const { alias: authAlias } = require("./packages/auth/config/alias");
const {
	alias: csmAlias
} = require("./packages/call-session-manager/config/alias");

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
		},
		"import/resolver": {
			alias: {
				extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
			}
		}
	},
	overrides: [
		{
			files: ["packages/app/**/*"],
			settings: {
				"import/resolver": {
					alias: {
						map: Object.entries(appAlias)
					}
				}
			}
		},
		{
			files: ["packages/auth/**/*"],
			settings: {
				"import/resolver": {
					alias: {
						map: Object.entries(authAlias)
					}
				}
			}
		},
		{
			files: ["packages/call-session-manager/**/*"],
			settings: {
				"import/resolver": {
					alias: {
						map: Object.entries(csmAlias)
					}
				}
			}
		}
	],
	rules: {
		// See: https://github.com/benmosher/eslint-plugin-import/issues/496
		// https://stackoverflow.com/questions/44939304/eslint-should-be-listed-in-the-projects-dependencies-not-devdependencies
		"import/no-extraneous-dependencies": ["error", { devDependencies: true }],
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

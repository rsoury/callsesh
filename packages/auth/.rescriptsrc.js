const path = require("path");
const { editWebpackPlugin } = require("@rescripts/utilities");
const get = require("lodash/get");
const set = require("lodash/set");
const { alias, jestAlias } = require("./config/alias");
const pkg = require("./package.json");

const mw = (fn) => Object.assign(fn, { isMiddleware: true });

const env = {
	PUBLIC_URL: process.env.PUBLIC_URL || ""
};

const addAlias = mw((config) => {
	const existingAlias = get(config, "resolve.alias", {});
	config = set(
		config,
		"resolve.alias",
		Object.assign({}, existingAlias, alias)
	);
	return config;
});

const buildApp = mw((config) => {
	// Rename output directory and filename
	config.output = Object.assign({}, config.output, {
		filename: "[name].js",
		chunkFilename: `[name].[contenthash:8].js`
	});

	// Setup env vars
	const definitions = {
		"process.env.REACT_APP_PUBLIC_URL": JSON.stringify(env.PUBLIC_URL),
		"process.env.REACT_APP_SENTRY_RELEASE": JSON.stringify(pkg.version)
	};

	// Apply definitions
	config = editWebpackPlugin(
		(p) => {
			p.definitions = {
				...p.definitions,
				...definitions
			};
			return p;
		},
		"DefinePlugin",
		config
	);

	return config;
});

module.exports = [
	["use-babel-config", ".babelrc.js"],
	{
		jest(config) {
			config.testMatch = ["**/*.test.js"];
			config.verbose = true;
			config.rootDir = "tests";
			config.setupFilesAfterEnv.push("<rootDir>/jest.setup.js");
			config.moduleNameMapper = {
				...config.moduleNameMapper,
				...jestAlias
			};
			config.transform["^.+\\.(js|jsx|ts|tsx)$"] = path.resolve(
				__dirname,
				"./jest.transform.js"
			);
			return config;
		}
	},
	addAlias,
	buildApp
];

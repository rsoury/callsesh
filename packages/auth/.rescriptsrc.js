require("dotenv").config({ path: require("find-config")(".env") });
const path = require("path");
const {
	editWebpackPlugin,
	removeWebpackPlugin
} = require("@rescripts/utilities");
const get = require("lodash/get");
const set = require("lodash/set");
const { default: InjectPlugin, ENTRY_ORDER } = require("webpack-inject-plugin");
const { alias, jestAlias } = require("./config/alias");
const pkg = require("./package.json");
const exampleConfig = require("./example.config.json");

const isTrue = (v) => v === true || v === "true";
const mw = (fn) => Object.assign(fn, { isMiddleware: true });
const removePlugin = (name, config) => {
	if (
		config.plugins.filter((plugin) => plugin.constructor.name === name).length >
		0
	) {
		config = removeWebpackPlugin(name, config);
	}
	return config;
};

const env = {
	PUBLIC_URL: process.env.PUBLIC_URL || "",
	STAGE: process.env.REACT_APP_STAGE || "",
	DEV_CONFIG: isTrue(process.env.DEV_CONFIG),
	SENTRY_DSN: process.env.SENTRY_DSN || "" // If set, replace REACT_APP_SENTRY_DSN
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

	// Remove unused plugins
	config = removePlugin("ManifestPlugin", config);

	if (env.STAGE === "staging") {
		// Staging: Make dev bundle for a production build command.

		config.mode = "development";
		config.optimization = {
			...config.optimization,
			minimize: false,
			minimizer: []
		};
		config.devtool = "source-map";
	}

	if (env.DEV_CONFIG) {
		config.plugins.push(
			new InjectPlugin(
				() => `window.config=${JSON.stringify(exampleConfig)};`,
				{
					entryOrder: ENTRY_ORDER.First
				}
			)
		);
	}

	// Setup env vars
	const definitions = {
		"process.env.REACT_APP_PUBLIC_URL": JSON.stringify(env.PUBLIC_URL),
		"process.env.REACT_APP_SENTRY_RELEASE": JSON.stringify(pkg.version)
	};

	// Consolidate SENTRY_DSN env var.
	if (!process.env.REACT_APP_SENTRY_DSN && env.SENTRY_DSN) {
		definitions["process.env.REACT_APP_SENTRY_DSN"] = JSON.stringify(
			env.SENTRY_DSN
		);
	}

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

const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");
const filenamify = require("filenamify");
const webpack = require("webpack");
const findConfig = require("find-config");
const DotenvPlugin = require("dotenv-webpack");
// Exposes dotenv to this config.
require("dotenv").config({
	path: findConfig(".env")
});

const { alias } = require("./config/alias");
const pkg = require("./package.json");

const sentryRelease = filenamify(`${pkg.name}@${pkg.version}`, {
	replacement: "-"
});

module.exports = {
	entry: slsw.lib.entries,
	target: "node",
	resolve: {
		alias
	},
	// Generate sourcemaps for proper error messages
	devtool: "source-map",
	// Since 'aws-sdk' is not compatible with webpack,
	// we exclude all node dependencies
	externals: [nodeExternals()],
	mode: slsw.lib.webpack.isLocal ? "development" : "production",
	optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
	performance: {
		// Turn off size warnings for entry points
		hints: false
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.SENTRY_RELEASE": JSON.stringify(sentryRelease),
			// Used by financial times logger
			"process.env.CONSOLE_LOG_LEVEL": JSON.stringify(
				process.env.LOG_LEVEL || "info"
			),
			// Formidable Lambda Error:
			// https://github.com/netlify/netlify-lambda/issues/64
			// https://github.com/serverless-heaven/serverless-webpack/issues/543
			// https://github.com/node-formidable/formidable/issues/337
			"global.GENTLY": false
		}),
		new DotenvPlugin({
			path: findConfig(".env")
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader"
					}
				]
			}
		]
	},
	output: {
		libraryTarget: "commonjs2",
		path: path.join(__dirname, ".webpack"),
		filename: "[name].js",
		sourceMapFilename: "[file].map"
	}
};

const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");
const filenamify = require("filenamify");
const webpack = require("webpack");
const DotenvPlugin = require("dotenv-webpack");
const findConfig = require("find-config");

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
	// optimization: {
	//   // We no not want to minimize our code.
	//   minimize: false,
	// },
	// performance: {
	//   // Turn off size warnings for entry points
	//   hints: false,
	// },
	plugins: [
		new webpack.DefinePlugin({
			"process.env.SENTRY_RELEASE": JSON.stringify(sentryRelease)
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
	}
};

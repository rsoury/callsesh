require("dotenv").config();
const withSourceMaps = require("@zeit/next-source-maps")();
const {
	PHASE_PRODUCTION_SERVER,
	PHASE_DEVELOPMENT_SERVER
} = require("next/constants");
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
const filenamify = require("filenamify");
const { alias } = require("./config/alias");
const pkg = require("./package.json");

module.exports = (phase) => {
	// Explicitly define environment variables to be used at build time for both frontend and server
	// dotenv.config should automatically configure process.env for local development
	const frontendEnv = {
		PUBLIC_URL: process.env.PUBLIC_URL || "",
		AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || "",
		AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || "",
		STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || "",
		SENTRY_DSN: process.env.SENTRY_DSN || ""
	};
	const serverEnv = {
		SESSION_SECRET: process.env.SESSION_SECRET || "",
		TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || "",
		TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || "",
		TWILIO_PROXY_SERVICE_SID: process.env.TWILIO_PROXY_SERVICE_SID || "",
		AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET || "",
		STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || ""
	};

	let env = frontendEnv;
	if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_SERVER) {
		env = {
			...frontendEnv,
			...serverEnv
		};
	}

	const nextConfig = {
		// Explicitly define environment variables to be used at build time.
		env,
		webpack: (config, { isServer, webpack, dev }) => {
			config.externals = config.externals || {};
			config.externals["styletron-server"] = "styletron-server";

			// Sentry release
			const sentryRelease = filenamify(`${pkg.name}@${pkg.version}`, {
				replacement: "-"
			});
			config.plugins.push(
				new webpack.DefinePlugin({
					"process.env.SENTRY_RELEASE": JSON.stringify(sentryRelease)
				})
			);

			// Add alias to Webpack
			Object.entries(alias).forEach(([key, value]) => {
				config.resolve.alias[key] = value;
			});

			// Sentry alias
			if (!isServer) {
				config.resolve.alias["@sentry/node"] = "@sentry/browser";
			}

			// When all the Sentry configuration env variables are available/configured
			// The Sentry webpack plugin gets pushed to the webpack plugins to build
			// and upload the source maps to sentry.
			// This is an alternative to manually uploading the source maps
			// See: https://github.com/zeit/next.js/blob/canary/examples/with-sentry-simple/next.config.js
			if (
				!dev &&
				process.env.SENTRY_DSN &&
				process.env.SENTRY_ORG &&
				process.env.SENTRY_PROJECT &&
				process.env.SENTRY_AUTH_TOKEN
			) {
				config.plugins.push(
					new SentryWebpackPlugin({
						release: sentryRelease,
						include: ".next",
						ignore: ["node_modules"],
						urlPrefix: "~/_next"
					})
				);
			}

			return config;
		},
		target: "serverless",
		poweredByHeader: false
	};

	// Next plugins expect a config object and respond with an object.
	return withSourceMaps(nextConfig);
};

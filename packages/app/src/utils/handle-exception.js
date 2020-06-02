import { toaster } from "baseui/toast";
import * as Sentry from "@sentry/node"; // will be replaced by @sentry/browser by webpack
import { Debug as SentryDebug } from "@sentry/integrations";
import { isProd, sentry } from "@/env-config";

const sentryOptions = {
	dsn: sentry.dsn,
	enabled: process.env.NODE_ENV !== "test",
	release: sentry.release,
	environment: process.env.NODE_ENV
};

// If developing locally
if (!isProd) {
	// Don't actually send the errors to Sentry
	sentryOptions.beforeSend = () => null;

	// Instead, dump the errors to the console
	sentryOptions.integrations = [
		new SentryDebug({
			// Trigger DevTools debugger instead of using console.log
			debugger: false
		})
	];
} else {
	sentryOptions.maxBreadcrumbs = 50;
	sentryOptions.attachStacktrace = true;
	sentryOptions.ignoreErrors = ["Non-Error exception captured"];
}

if (sentry.dsn) {
	Sentry.init(sentryOptions);

	// Scope configured by default, subsequent calls to "configureScope" will add additional data
	Sentry.configureScope((scope) => {
		scope.setTag("package", "app");

		// See https://www.npmjs.com/package/@sentry/node
		scope.setTag("nodejs", process.version);
		scope.setTag("nodejsAWS", process.env.AWS_EXECUTION_ENV || null); // Optional - Available on production environment only
		scope.setTag("memory", process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE || null); // Optional - Available on production environment only
		scope.setTag(
			"runtimeEngine",
			typeof window !== "undefined" ? "browser" : "server"
		);
		scope.setTag("buildTime", process.env.BUILD_TIME);
	});
}

export { Sentry };

export const setUser = (user) => {
	Sentry.configureScope((scope) => {
		scope.setUser(user);
	});
};

export const alerts = {
	error() {
		const msg = `Oops! Something went wrong. We've noted this error. Please contact Callsesh support, or refresh and try again.`;
		toaster.negative(msg);
	}
};

export default (err, ctx) => {
	Sentry.configureScope((scope) => {
		if (err.message) {
			// De-duplication currently doesn't work correctly for SSR / browser errors
			// so we force deduplication by error message if it is present
			scope.setFingerprint([err.message]);
		}

		if (err.statusCode) {
			scope.setExtra("statusCode", err.statusCode);
		}

		if (ctx) {
			const { req, res, errorInfo, query, pathname } = ctx;

			if (res && res.statusCode) {
				scope.setExtra("statusCode", res.statusCode);
			}

			if (typeof window !== "undefined") {
				scope.setTag("ssr", false);
				scope.setExtra("query", query);
				scope.setExtra("pathname", pathname);
			} else {
				scope.setTag("ssr", true);
				scope.setExtra("url", req.url);
				scope.setExtra("method", req.method);
				scope.setExtra("headers", req.headers);
				scope.setExtra("params", req.params);
				scope.setExtra("query", req.query);
			}

			if (errorInfo) {
				Object.keys(errorInfo).forEach((key) =>
					scope.setExtra(key, errorInfo[key])
				);
			}
		}
	});

	return Sentry.captureException(err);
};

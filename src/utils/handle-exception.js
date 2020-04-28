import { toaster } from "baseui/toast";
import * as Sentry from "@sentry/node"; // will be replaced by @sentry/browser by webpack
import * as SentryIntegrations from "@sentry/integrations";
import * as envConfig from "@/env-config";

const { isProd, sentry } = envConfig;

const sentryOptions = {
	dsn: sentry.dsn,
	release: sentry.release,
	environment: process.env.NODE_ENV,
	maxBreadcrumbs: 50,
	attachStacktrace: true
};

// If developing locally
if (!isProd) {
	// Don't actually send the errors to Sentry
	sentryOptions.beforeSend = () => null;

	// Instead, dump the errors to the console
	sentryOptions.integrations = [
		new SentryIntegrations.Debug({
			// Trigger DevTools debugger instead of using console.log
			debugger: false
		})
	];
}

if (sentry.dsn) {
	Sentry.init(sentryOptions);
}

export { Sentry };

export const setErrorTrackingUser = (user) => {
	Sentry.configureScope((scope) => {
		scope.setUser({
			id: user.id,
			email: user.email,
			name: `${user.firstName} ${user.lastName}`
		});
	});
};

export const alerts = {
	error() {
		const msg = `Oops! Something went wrong. We've noted this error. Please contact Wagecall support, or refresh and try again.`;
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

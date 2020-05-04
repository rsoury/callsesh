import { toaster } from "baseui/toast";
import * as Sentry from "@sentry/browser";
import { Debug as SentryDebug } from "@sentry/integrations";
import { isProd, sentry } from "@/env-config";

const sentryOptions = {
	dsn: sentry.dsn,
	enabled: process.env.NODE_ENV !== "test",
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
		new SentryDebug({
			// Trigger DevTools debugger instead of using console.log
			debugger: false
		})
	];
}

if (sentry.dsn) {
	Sentry.init(sentryOptions);
	Sentry.configureScope((scope) => {
		scope.setTag("package", "auth");
	});
}

export { Sentry };

export const alerts = {
	error() {
		const msg = `Oops! Something went wrong. We've noted this error. Please contact Callsesh support, or refresh and try again.`;
		toaster.negative(msg);
	}
};

export default (err) => {
	Sentry.configureScope((scope) => {
		if (err.message) {
			// De-duplication currently doesn't work correctly for SSR / browser errors
			// so we force deduplication by error message if it is present
			scope.setFingerprint([err.message]);
		}
	});

	return Sentry.captureException(err);
};

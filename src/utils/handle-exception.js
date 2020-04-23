/* eslint-disable no-console */

import { toaster } from "baseui/toast";
import * as Sentry from "@sentry/browser";
import { isProd, sentry } from "@/env-config";

if (sentry.dsn) {
	Sentry.init({
		dsn: sentry.dsn,
		environment: process.env.NODE_ENV
	});
}

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

export default (e) => {
	if (e) {
		if (isProd) {
			Sentry.captureException(e);
		} else {
			console.error(e);
		}
	}
};

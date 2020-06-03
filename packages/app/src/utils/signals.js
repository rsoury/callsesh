import { isProd } from "@/env-config";
import isUserOperator from "@/utils/is-operator";
import { Sentry } from "@/utils/handle-exception";

// Helper to ensure production
const mw = (fn) => (...params) => {
	if (!isProd) {
		return false;
	}
	return fn(...params);
};

const getLogRocket = () => import("logrocket").then((m) => m.default || m);

// let mixpanel;
// if (isProd) {
// 	// TODO: Next.config should resolve mixpanel/node for backend --- or typeof window to determine import.
// 	mixpanel = import("mixpanel-browser").then((m) => m.default || m);
// }

/**
 * Setup tracking
 */
export const setup = mw(async () => {
	if (typeof window !== "undefined") {
		const LogRocket = await getLogRocket();
		const setupLogRocketReact = await import("logrocket-react").then(
			(m) => m.default || m
		);
		LogRocket.init("vzsg8h/callsesh");
		setupLogRocketReact(LogRocket);
		LogRocket.getSessionURL((sessionURL) => {
			Sentry.configureScope((scope) => {
				scope.setExtra("sessionURL", sessionURL);
			});
		});
	}
	return true;
});

/**
 * Accepts Callsesh user object
 *
 * @param   {Object}  user  Callsesh user object
 */
export const identifyUser = mw(async (user) => {
	// if (mixpanel) {
	// }

	if (typeof window !== "undefined") {
		const LogRocket = await getLogRocket();
		LogRocket.identify(user.username, {
			name: user.nickname,
			country: user.country,
			currency: user.currency,
			operator: isUserOperator(user)
		});
	}
});

import { isProd } from "@/env-config";

let mixpanel;
if (isProd) {
	// TODO: Next.config should resolve mixpanel/node for backend --- or typeof window to determine import.
	mixpanel = import("mixpanel-browser").then((m) => m.default || m);
}

export const identifyUser = (userId, userProperties) => {
	if (mixpanel) {
	}
};

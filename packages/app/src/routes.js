/**
 * An object defining all page routes.page.
 */

export const page = {
	index: "/",
	login: "/login",
	signup: "/signup",
	register: "/get-started",
	user: `/user/:id`,
	tos: "/terms-of-service",
	privacyPolicy: "/privacy-policy",
	cookiePolicy: "/cookie-policy",
	settings: {
		profile: "/settings/profile",
		paymentMethods: "/settings/payment-methods",
		notifications: "/settings/notifications"
	}
};

export const build = {
	user(userId) {
		return `/u/${userId}`;
	}
};

export const api = {
	auth: {
		callback: "/api/auth/callback",
		login: "/api/auth/login",
		logout: "/api/auth/logout",
		signup: "/api/auth/signup"
	},
	user: "/api/user"
};

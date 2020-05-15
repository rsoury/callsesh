/**
 * An object defining all page routes.page.
 */

export const page = {
	index: "/",
	login: "/login",
	signup: "/signup",
	logout: "/logout",
	register: "/get-started",
	user: `/user/:id`,
	tos: "/terms-of-service",
	privacyPolicy: "/privacy-policy",
	cookiePolicy: "/cookie-policy",
	settings: {
		profile: "/settings/profile",
		payments: "/settings/payments"
	},
	becomeAnOperator: "/become-an-operator",
	referrals: "/referrals"
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
	user: "/api/user",
	card: "/api/card",
	live: "/api/live",
	usernameAvailable: "/api/username-available",
	connect: {
		start: "/api/connect",
		redirect: "/api/connect/oauth"
	}
};

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
		wallet: "/settings/wallet"
	},
	becomeAnOperator: "/become-an-operator",
	referrals: "/referrals"
};

export const build = {
	user(username) {
		return `/u/${username}`;
	},
	callUser(username) {
		return `/api/u/${username}/call`;
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
	cards: "/api/cards",
	live: "/api/live",
	usernameAvailable: "/api/username-available",
	connect: {
		start: "/api/connect",
		redirect: "/api/connect/oauth"
	},
	callUser: `/api/u/:id/call`
};

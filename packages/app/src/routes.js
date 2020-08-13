/**
 * An object defining all page routes.page.
 */

export const page = {
	index: "/",
	user: `/:id`,
	invite: `/:id/invite`,
	login: "/login",
	signup: "/signup",
	logout: "/logout",
	register: "/get-started",
	terms: {
		tos: "/terms",
		privacyPolicy: "/terms/privacy-policy",
		cookiePolicy: "/terms/cookie-policy"
	},
	settings: {
		profile: "/settings/profile",
		wallet: "/settings/wallet",
		threeDSecure: "/settings/3d-secure"
	},
	becomeAnOperator: "/become-an-operator",
	referrals: "/referrals",
	faq: "/faq",
	chat: "/chat",
	freelancers: "/freelancers",
	contacts: "/contacts"
};

export const build = {
	user(username) {
		return `/${username}`;
	},
	invite(username) {
		return `/${username}/invite`;
	},
	card(id) {
		return `/api/cards/${id}`;
	},
	notify(id) {
		return `/api/u/${id}/notify`;
	},
	work(id) {
		return `/api/u/${id}/work`;
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
	call: "/api/call",
	endCall: "/api/call/end",
	meter: "/api/call/meter",
	cards: "/api/cards",
	live: "/api/live",
	liveNotify: "/api/live/notify",
	usernameAvailable: "/api/username-available",
	connect: {
		start: "/api/connect",
		redirect: "/api/connect/oauth"
	},
	resendEmail: `/api/resend-email`,
	token: `/api/token`,
	chatToken: `/api/token/chat`,
	contacts: `/api/contacts`
};

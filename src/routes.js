export default {
	index: "/",
	login: "/login",
	signup: "/signup",
	tos: "/terms-of-service",
	privacyPolicy: "/privacy-policy",
	cookiePolicy: "/cookie-policy",
	settings: {
		profile: "/settings/profile",
		paymentMethods: "/settings/payment-methods",
		notifications: "/settings/notifications"
	},
	// All API related endpoints
	api: {
		auth: {
			logout: "/api/auth/logout",
			passwordless: "/api/auth/passwordless",
			passwordlessVerify: "/api/auth/passwordless/verify"
		}
	}
};

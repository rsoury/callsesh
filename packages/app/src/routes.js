export default {
	index: "/",
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
			passwordless: {
				login: "/api/auth/passwordless/login",
				signup: "/api/auth/passwordless/signup",
				verify: "/api/auth/passwordless/verify"
			}
		}
	}
};

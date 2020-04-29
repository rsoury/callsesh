export const isProd = process.env.NODE_ENV === "production";
export const publicUrl = process.env.PUBLIC_URL || "";
export const sessionSecret = process.env.SH_SESSION_SECRET || "";
export const sentry = {
	dsn: process.env.SENTRY_DSN || "",
	release: process.env.SENTRY_RELEASE || ""
};
export const auth0 = {
	domain: process.env.AUTH0_DOMAIN || "",
	clientId: process.env.AUTH0_CLIENT_ID || "",
	clientSecret: process.env.SH_AUTH0_CLIENT_SECRET || ""
};
export const twilio = {
	accountSid: process.env.SH_TWILIO_ACCOUNT_SID || "",
	authToken: process.env.SH_TWILIO_AUTH_TOKEN || "",
	proxyServiceSid: process.env.SH_TWILIO_PROXY_SERVICE_SID || ""
};
export const stripe = {
	public: process.env.STRIPE_PUBLIC_KEY || "",
	secret: process.env.SH_STRIPE_SECRET_KEY || ""
};

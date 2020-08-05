export const isProd = process.env.NODE_ENV === "production";
export const logLevel = process.env.LOG_LEVEL || "info";
export const publicUrl = process.env.PUBLIC_URL || "";
export const publicProxyUrl = process.env.PUBLIC_PROXY_URL || "";
export const sessionSecret = process.env.SESSION_SECRET || "";
export const sentry = {
	dsn: process.env.SENTRY_DSN || "",
	release: process.env.SENTRY_RELEASE || ""
};
export const uploadcare = {
	publicKey: process.env.UPLOADCARE_PUBLIC_KEY || ""
};
export const workflowsUrl = process.env.WORKFLOWS_URL || "";
export const gaTrackingId = process.env.GA_TRACKING_ID || "";
export const chat = {
	url: process.env.CHAT_URL || "",
	user: process.env.CHAT_USER || "",
	pass: process.env.CHAT_PASS || ""
};
export const auth0 = {
	domain: process.env.AUTH0_DOMAIN || "",
	clientId: process.env.AUTH0_CLIENT_ID || "",
	clientSecret: process.env.AUTH0_CLIENT_SECRET || ""
};
export const twilio = {
	accountSid: process.env.TWILIO_ACCOUNT_SID || "",
	proxyServiceSid: process.env.TWILIO_PROXY_SERVICE_SID || "",
	syncServiceSid: process.env.TWILIO_SYNC_SERVICE_SID || "default",
	apiKey: process.env.TWILIO_API_KEY || "",
	apiSecret: process.env.TWILIO_API_SECRET || ""
};
export const stripe = {
	publicKey: process.env.STRIPE_PUBLIC_KEY || "",
	secretKey: process.env.STRIPE_SECRET_KEY || "",
	connectId: process.env.STRIPE_CONNECT_ID || ""
};
export const postmark = {
	apiToken: process.env.POSTMARK_API_TOKEN || ""
};

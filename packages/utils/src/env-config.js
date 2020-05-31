export const auth0 = {
	domain: process.env.AUTH0_DOMAIN || "",
	clientId: process.env.AUTH0_CLIENT_ID || "",
	clientSecret: process.env.AUTH0_CLIENT_SECRET || ""
};
export const twilio = {
	accountSid: process.env.TWILIO_ACCOUNT_SID || "",
	authToken: process.env.TWILIO_AUTH_TOKEN || "",
	proxyServiceSid: process.env.TWILIO_PROXY_SERVICE_SID || ""
};
export const stripe = {
	publicKey: process.env.STRIPE_PUBLIC_KEY || "",
	secretKey: process.env.STRIPE_SECRET_KEY || "",
	connectId: process.env.STRIPE_CONNECT_ID || ""
};

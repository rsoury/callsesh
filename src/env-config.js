export const isProd = process.env.NODE_ENV === "production";
export const sentry = {
	dsn: ""
};
export const twilio = {
	accountSid: process.env.TWILIO_ACCOUNT_SID,
	authToken: process.env.TWILIO_AUTH_TOKEN,
	proxyServiceSid: process.env.TWILIO_PROXY_SERVICE_SID
};
export const airtable = {};

export const isProd = process.env.NODE_ENV === "production";
export const sentry = {
	dsn: process.env.SENTRY_DSN || "",
	release: process.env.SENTRY_RELEASE || ""
};

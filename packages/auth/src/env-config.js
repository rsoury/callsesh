export const isProd = process.env.NODE_ENV === "production";
export const stage = process.env.REACT_APP_STAGE;

export const sentry = {
	dsn: process.env.REACT_APP_SENTRY_DSN || "",
	release: process.env.REACT_APP_SENTRY_RELEASE || ""
};

export const authConfig = window.config || {};

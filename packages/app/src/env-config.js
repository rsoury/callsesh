export * from "@callsesh/utils/env-config";

export const isProd = process.env.NODE_ENV === "production";
export const publicUrl = process.env.PUBLIC_URL || "";
export const sessionSecret = process.env.SESSION_SECRET || "";
export const sentry = {
	dsn: process.env.SENTRY_DSN || "",
	release: process.env.SENTRY_RELEASE || ""
};
// TODO: Remove AWS Credentials -- no in use.
export const awsCredentials = {
	accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ""
};
export const uploadcare = {
	publicKey: process.env.UPLOADCARE_PUBLIC_KEY || ""
};
export const callSessionManagerUrl = process.env.CALL_SESSION_MANAGER_URL || "";

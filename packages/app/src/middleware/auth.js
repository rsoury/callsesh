/**
 * Middleware to handle authentication
 */

import nextConnect from "next-connect";
import { sessionSecret, isProd } from "@/env-config";
import passport from "./lib/passport";
import session from "./lib/session";

const auth = nextConnect()
	.use(
		session({
			name: "sess",
			secret: sessionSecret,
			cookie: {
				maxAge: 60 * 60 * 8, // 8 hours,
				httpOnly: true,
				secure: isProd,
				path: "/",
				sameSite: "lax"
			}
		})
	)
	.use(passport.initialize())
	.use(passport.session())
	.use((req, res, next) => {
		// Add a unauthorised response handler.
		res.unauthorised = () => {
			return res.status(401).json({
				success: false,
				code: 401,
				message: "Unauthorised"
			});
		};

		next();
	});
// .use(passport.authenticate("remember-me"));

export default auth;

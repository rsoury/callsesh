/**
 * Middleware to handle authentication
 */

import nextConnect from "next-connect";
import { sessionSecret, isProd } from "@/envConfig";
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
	.use(passport.session());
// .use(passport.authenticate("remember-me"));

export default auth;

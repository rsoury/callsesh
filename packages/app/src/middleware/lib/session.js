/**
 * Middlware to create a cookie session
 * This will eventually be replaced with some redis based session store.
 * https://github.com/zeit/next.js/blob/canary/examples/with-passport-and-next-connect/lib/session.js
 * https://stackoverflow.com/questions/23566555/whats-difference-with-express-session-and-cookie-session
 */

import { parse, serialize } from "cookie";
import Iron from "@hapi/iron";

export default function session({ name, secret, cookie: cookieOpts }) {
	return async (req, res, next) => {
		const cookie = req.headers?.cookie ? parse(req.headers.cookie) : null;
		let unsealed;
		if (cookie?.[name]) {
			try {
				// the cookie needs to be unsealed using the password `secret`
				unsealed = await Iron.unseal(cookie[name], secret, Iron.defaults);
			} catch (e) {
				// To cookie is invalid, do nothing
			}
		}

		// Initialize the session
		req.session = unsealed || {};

		// We are proxying res.end to commit the session cookie
		const oldEnd = res.end;
		res.end = async function resEndProxy(...args) {
			if (res.finished || res.writableEnded || res.headersSent) return;
			// sealing the cookie to be sent to client
			const sealed = await Iron.seal(req.session, secret, Iron.defaults);
			res.setHeader("Set-Cookie", serialize(name, sealed, cookieOpts));
			oldEnd.apply(this, args);
		};

		next();
	};
}

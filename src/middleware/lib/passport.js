/**
 * Middleware to initialize Passport.js authentication library
 * https://github.com/zeit/next.js/blob/canary/examples/with-passport-and-next-connect/lib/passport.js
 */

import passport from "passport";
import CustomStrategy from "passport-custom";
import isEmpty from "is-empty";
import { findUser, findOrCreateUserBy } from "@/db";
import { verificationCheck } from "@/comms";

passport.serializeUser((user, done) => {
	console.log(user);
	// serialize the user id into session
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	console.log(id);
	// deserialize the user id back into user object
	findUser(id)
		.then((user) => {
			done(null, user);
		})
		.catch((e) => {
			done(e, false);
		});
});

// Custom strategy which includes Twilio Verification Check
passport.use(
	new CustomStrategy((req, done) => {
		const { phoneNumber, code } = req.body;
		verificationCheck(phoneNumber, code)
			.then((success) => {
				if (success) {
					return findOrCreateUserBy("Phone Number", phoneNumber, {
						firstName: req.body.firstName,
						lastName: req.body.firstName,
						phoneNumber
					});
				}

				return null;
			})
			.then((user) => {
				if (isEmpty(user)) {
					return done(null, false);
				}

				return done(null, user);
			})
			.catch((e) => {
				done(e, false);
			});
	})
);

export default passport;

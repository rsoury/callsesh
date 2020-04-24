/**
 * Middleware to initialize Passport.js authentication library
 * https://github.com/zeit/next.js/blob/canary/examples/with-passport-and-next-connect/lib/passport.js
 */

import passport from "passport";
import CustomStrategy from "passport-custom";
import RememberMeStrategy from "passport-remember-me";
import isEmpty from "is-empty";
import * as db from "@/db";
import { verificationCheck } from "@/comms";
import randomString from "@/utils/randomString";

passport.serializeUser((user, done) => {
	console.log(user);
	// serialize the user id into session
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	console.log(id);
	// deserialize the user id back into user object
	db.findUser(id)
		.then((user) => {
			done(null, user);
		})
		.catch((e) => {
			done(e);
		});
});

// Custom strategy which includes Twilio Verification Check
passport.use(
	new CustomStrategy((req, done) => {
		const { phoneNumber, code } = req.body;
		verificationCheck(phoneNumber, code)
			.then((success) => {
				if (success) {
					return db.findOrCreateUserBy("Phone Number", phoneNumber, {
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
				done(e);
			});
	})
);

// Remember Me strategy to ensure authentications persist
passport.use(
	new RememberMeStrategy(
		(token, done) => {
			db.consumeAuthMemoryToken(token)
				.then((user) => {
					if (isEmpty(user)) {
						return done(null, false);
					}

					return done(null, user);
				})
				.catch((e) => {
					done(e);
				});
		},
		(user, done) => {
			const token = randomString(64);
			db.saveAuthMemoryToken(user.id, token)
				.then((updatedUser) => {
					done(null, updatedUser);
				})
				.catch((e) => {
					done(e);
				});
		}
	)
);

export default passport;

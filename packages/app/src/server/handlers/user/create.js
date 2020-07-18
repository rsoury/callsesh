/**
 * Get / Manage the currently authenticated user
 */

import * as yup from "yup";
import isEmpty from "is-empty";
import { parseCookies, destroyCookie } from "nookies";

import { onError } from "@/server/middleware";
import { getUser } from "@/server/middleware/auth";
import * as authManager from "@/server/auth-manager";
import stripe from "@/server/stripe";
import isUsernameAvailable from "@/server/utils/is-username-available";

import { schemaProperties } from "./utils";

const postSchema = yup.object().shape(schemaProperties);

export default async function createUser(req, res) {
	// Extract and validate the values from request body
	try {
		await postSchema.validate(req.body);
	} catch (e) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: "Bad request. Invalid request body."
		});
	}

	const user = await getUser(req, { withContext: true });

	const logger = req.log.child({ user: user.id });
	logger.info("Register user");

	const { stripeCustomerId, phoneNumber, country, currency } = user;

	const {
		email,
		firstName,
		lastName,
		username,
		gender,
		dob,
		operator,
		hourlyRate,
		profilePicture,
		purpose,
		messageBroadcast
	} = req.body;

	// Check if username already exists.
	const usernameAvailable = await isUsernameAvailable(username);
	if (!usernameAvailable) {
		throw new Error("Username is not available");
	}

	// Create full name
	const name = `${firstName} ${lastName}`;

	// Register the data against the authenticated user.
	const updateParams = {
		given_name: firstName,
		family_name: lastName,
		name,
		nickname: name,
		metadata: {
			user: {
				username,
				gender,
				dob,
				country,
				currency
			},
			app: {
				usernamespace: username.toLowerCase()
			}
		}
	};

	// Set profile picture
	if (isEmpty(profilePicture)) {
		updateParams.picture = `https://api.adorable.io/avatars/285/${new Date(
			user.createdAt
		).getTime()}@adorable.io.png`;
	} else {
		updateParams.picture = profilePicture.cdnUrl;
		updateParams.metadata.user.profilePicture = profilePicture;
	}

	// Set referrer for newly registered users.
	if (!user.isRegistered) {
		const { referrer } = parseCookies({ req, res });
		destroyCookie({ req, res }, "referrer");
		// Make sure referrer has a value, and there is no current referrer value
		if (!isEmpty(referrer) && isEmpty(user.referrer)) {
			updateParams.metadata.app.referrer = referrer;
		}
	}

	try {
		// Update email identity
		await authManager.updateEmail(user.id, email, user.emailIdentity);
		logger.info("Created email identity", { email });

		// Update operator details
		if (operator) {
			updateParams.metadata.user = {
				...updateParams.metadata.user,
				hourlyRate,
				purpose,
				messageBroadcast,
				isLive: false
			};

			// Assign role to user.
			await authManager.assignOperatorRole(user.id);
			logger.info("Assign user to Operator role");
		}

		// Update update
		await authManager.updateUser(user.id, updateParams);
		logger.info("Update user data", { params: updateParams });

		// Register the same data against the stripe customer entity if it exists.
		if (!isEmpty(stripeCustomerId)) {
			await stripe.customers.update(stripeCustomerId, {
				description: `Caller: ${name}`,
				email,
				name,
				phone: phoneNumber
			});
			logger.info("Update stripe customer data");
		}

		return res.json({
			success: true
		});
	} catch (e) {
		return onError(e, req, res);
	}
}

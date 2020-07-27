/**
 * Get / Manage the currently authenticated user
 */

import isEmpty from "is-empty";
import set from "lodash/set";
import isEmail from "is-email";

import { onError } from "@/server/middleware";
import { getUser, updateAndGetUser } from "@/server/middleware/auth";
import * as authManager from "@/server/auth-manager";
import stripe from "@/server/stripe";
import * as chat from "@/server/chat";

import { schemaProperties } from "./utils";

const patchMap = {
	firstName: "given_name",
	lastName: "family_name",
	username: (patch, value) => {
		set(patch, "metadata.user.username", value);
		set(patch, "metadata.app.usernamespace", value.toLowerCase());
		return patch;
	},
	gender: "metadata.user.gender",
	dob: "metadata.user.dob",
	country: "metadata.user.country",
	currency: "metadata.user.currency",
	hourlyRate: "metadata.user.hourlyRate",
	profilePicture: (patch, value) => {
		// Will receive profilePicture object as value.
		set(patch, "metadata.user.profilePicture", value);
		patch.picture = value.cdnUrl;
		return patch;
	},
	purpose: "metadata.user.purpose",
	messageBroadcast: "metadata.user.messageBroadcast",
	links: "metadata.user.links"
};
const patchProperties = Object.keys(patchMap);

export default async function updateUser(req, res) {
	const user = await getUser(req, { withContext: true });

	const logger = req.log.child({ user: user.id });
	logger.info("Patch user");

	// Seperate user patch parameters from identity updates
	const { email, operator, ...requestBody } = req.body;

	// Scope body to accepted properties
	const bodyEntries = Object.entries(requestBody).filter(([property]) =>
		patchProperties.includes(property)
	);
	// Validate entries using schema
	const validatedEntries = await Promise.all(
		bodyEntries.map(async (entry) => {
			try {
				const [property, value] = entry;
				await schemaProperties[property].validate(value);
				return entry;
			} catch (e) {
				// Invalid
			}
			return undefined;
		})
	);
	// Filter invalid entries.
	const entries = validatedEntries.filter((entry) => Array.isArray(entry));

	// Build out patch parameters
	const patchParams = entries.reduce((patch, [property, value]) => {
		const pmap = patchMap[property];
		if (typeof pmap === "function") {
			patch = pmap(patch, value);
		} else {
			set(patch, pmap, value);
		}
		return patch;
	}, {});

	// Set name if changed.
	let name;
	if (patchParams.given_name && patchParams.family_name) {
		name = `${patchParams.given_name} ${patchParams.family_name}`;
	} else if (patchParams.given_name) {
		name = `${patchParams.given_name} ${user.familyName}`;
	} else if (patchParams.family_name) {
		name = `${user.givenName} ${patchParams.family_name}`;
	}
	if (!isEmpty(name)) {
		patchParams.name = name;
		patchParams.nickname = name;
	}

	logger.info("Patch params created", {
		params: patchParams
	});

	// Used to update the existing user
	// Works by constructing a patchParams object by iterating over the request body
	try {
		let newUser = user;
		const isNewEmail = typeof email === "string" && isEmail(email);

		// Update email identity
		if (isNewEmail) {
			await authManager.updateEmail(user.id, email, user.emailIdentity);
			// Apply changes to newUser
			newUser = {
				...newUser,
				email,
				emailVerified: false
			};
			logger.info("Updated email identity", { email });
		}

		// Assign to Operator if provided
		if (typeof operator === "boolean" && operator) {
			await authManager.assignOperatorRole(user.id);
			logger.info("Assign user to Operator role");
		}

		// Update update
		if (!isEmpty(patchParams)) {
			newUser = await updateAndGetUser(req, patchParams);
			logger.info("Patch user data");
		}

		// Register the same data against the stripe customer entity if it exists.
		const { stripeCustomerId } = user;
		if (!isEmpty(stripeCustomerId)) {
			const stripeUpdateParams = {};
			if (patchParams.name) {
				stripeUpdateParams.description = `Caller: ${name}`;
				stripeUpdateParams.name = name;
			}
			if (isNewEmail) {
				stripeUpdateParams.email = email;
			}
			if (!isEmpty(stripeUpdateParams)) {
				await stripe.customers.update(stripeCustomerId, stripeUpdateParams);
				logger.info("Patch stripe customer data");
			}
		}

		// Register the same data against the rocket chat user
		const { chatUser } = user;
		if (!isEmpty(chatUser)) {
			const chatUpdateParams = patchParams; // destructures in chat.updateUser method
			if (isNewEmail) {
				chatUpdateParams.email = email;
			}
			await chat.updateUser(chatUser.id, chatUpdateParams);
			logger.info("Patch chat user data", {
				chatUserId: chatUser.id,
				chatUpdateParams
			});
		}

		return res.json({
			success: true,
			user: newUser
		});
	} catch (e) {
		return onError(e, req, res);
	}
}

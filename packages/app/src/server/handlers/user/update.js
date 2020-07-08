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
	messageBroadcast: "metadata.user.messageBroadcast"
};
const patchProperties = Object.keys(patchMap);

export default async function updateUser(req, res) {
	const user = await getUser(req, { withContext: true });

	req.log.info("Patch user", { user: user.id });

	// Seperate user patch parameters from identity updates
	const { email, ...requestBody } = req.body;

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

	// Check if username is set, and if so, does it already exist.

	req.log.info("Patch params created", {
		user: user.id,
		params: patchParams
	});

	// Used to update the existing user
	// Works by constructing a patchParams object by iterating over the request body
	try {
		let newUser = user;
		const stripeUpdateParams = {};

		// Update email identity
		if (typeof email === "string" && isEmail(email)) {
			await authManager.updateEmail(user.id, email, user.emailIdentity);
			stripeUpdateParams.email = email;
			// Apply changes to newUser
			newUser = {
				...newUser,
				email,
				emailVerified: false
			};
			req.log.info("Updated email identity", { user: user.id, email });
		}

		// Update update
		if (!isEmpty(patchParams)) {
			newUser = await updateAndGetUser(req, patchParams);
			stripeUpdateParams.description = `Caller: ${name}`;
			stripeUpdateParams.name = name;
			req.log.info("Patch user data", { user: user.id });
		}

		// Register the same data against the stripe customer entity if it exists.
		const { stripeCustomerId } = user;
		if (!isEmpty(stripeCustomerId) && !isEmpty(stripeUpdateParams)) {
			await stripe.customers.update(stripeCustomerId, stripeUpdateParams);
			req.log.info("Patch stripe customer data", { user: user.id });
		}

		return res.json({
			success: true,
			user: newUser
		});
	} catch (e) {
		return onError(e, req, res);
	}
}

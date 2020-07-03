/**
 * Get / Manage the currently authenticated user
 */

import * as yup from "yup";
import isEmpty from "is-empty";
import set from "lodash/set";
import { parseCookies, destroyCookie } from "nookies";
import isEmail from "is-email";

import getHandler, { onError } from "@/middleware";
import {
	requireAuthentication,
	getUser,
	updateAndGetUser
} from "@/middleware/auth";
import * as authManager from "@callsesh/utils/auth-manager";
import stripe from "@callsesh/utils/stripe";
import isUsernameAvailable from "@/utils/is-username-available";
import slugify from "@/utils/slugify";

const handler = getHandler();

const schemaProperties = {
	email: yup
		.string()
		.test("is-email", "${path} is not valid", (value) => isEmail(value))
		.required(),
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	username: yup
		.string()
		.test(
			"is-valid",
			"Your ${path} can only contain letters, numbers and '_'",
			(value) => value === slugify(value)
		)
		.required(),
	gender: yup.string().oneOf(["Male", "Female", "Other"]).required(),
	dob: yup.string().required(),
	profilePicture: yup.object(),
	country: yup.string(),
	currency: yup.string(),
	paymentMethod: yup.object(),
	operator: yup.boolean(),
	hourlyRate: yup.string(),
	purpose: yup.string(),
	messageBroadcast: yup.string()
};
const postSchema = yup.object().shape(schemaProperties);

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

const updateEmail = async (userId, email, emailIdentity) => {
	// Check if email identity exists. If so, unlink and delete it for to be created
	if (!isEmpty(email)) {
		await authManager.getClient().unlinkUsers({
			id: userId,
			user_id: emailIdentity,
			provider: "email"
		});
		await authManager.getClient().deleteUser({ id: `email|${emailIdentity}` });
	}
	// Use email to create a new account
	const emailUser = await authManager
		.getClient()
		.createUser({ email, connection: "email" });
	// Create an account link with the newly created account
	await authManager
		.getClient()
		.linkUsers(userId, { user_id: emailUser.user_id, provider: "email" });

	return emailUser.user_id.split("|")[1]; // Remove email|xxx from id
};

handler
	.use(requireAuthentication)
	.get(async (req, res) => {
		const user = await getUser(req);

		res.json(user);
	})
	.post(async (req, res) => {
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

		req.log.info("Register user", { user: user.id });

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
			await updateEmail(user.id, email, user.emailIdentity);
			req.log.info("Created email identity", { user: user.id, email });

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
				const allRoles = await authManager
					.getClient()
					.getRoles({ per_page: 50, page: 0 });

				await authManager.getClient().assignRolestoUser(
					{ id: user.id },
					{
						roles: allRoles
							.filter((role) => role.name.toLowerCase() === "operator")
							.map((role) => role.id)
					}
				);
				req.log.info("Assign user to Operator role", { user: user.id });
			}

			// Update update
			await authManager.updateUser(user.id, updateParams);
			req.log.info("Update user data", { user: user.id, params: updateParams });

			// Register the same data against the stripe customer entity if it exists.
			if (!isEmpty(stripeCustomerId)) {
				await stripe.customers.update(stripeCustomerId, {
					description: `Caller: ${name}`,
					email,
					name,
					phone: phoneNumber
				});
				req.log.info("Update stripe customer data", { user: user.id });
			}

			return res.json({
				success: true
			});
		} catch (e) {
			return onError(e, req, res);
		}
	})
	.patch(async (req, res) => {
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
				await updateEmail(user.id, email, user.emailIdentity);
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
	});

export default handler;

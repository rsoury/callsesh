/**
 * Get / Manage the currently authenticated user
 */

import * as yup from "yup";
import isEmpty from "is-empty";
import set from "lodash/set";

import getHandler, { onError } from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";
import * as authManager from "@/auth-manager";
import stripe from "@/stripe";

const handler = getHandler();

const schemaProperties = {
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	username: yup.string().required(),
	gender: yup.string().required(),
	dob: yup.string().required(),
	country: yup.string(),
	currency: yup.string(),
	paymentMethod: yup.object(),
	operator: yup.boolean(),
	hourlyRate: yup.string(),
	profilePicture: yup.object(),
	purpose: yup.string(),
	messageBroadcast: yup.string()
};
const postSchema = yup.object().shape(schemaProperties);

const patchMap = {
	firstName: "given_name",
	lastName: "family_name",
	username: "metadata.user.username",
	gender: "metadata.user.gender",
	dob: "metadata.user.dob",
	country: "metadata.user.country",
	currency: "metadata.user.currency",
	hourlyRate: "metadata.user.hourlyRate",
	profilePicture: "picture",
	purpose: "metadata.user.purpose",
	messageBroadcast: "metadata.user.messageBroadcast"
};
const patchProperties = Object.keys(patchMap);

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
				}
			}
		};

		if (!isEmpty(profilePicture)) {
			updateParams.picture = profilePicture.cdnUrl;
		}

		try {
			if (operator) {
				updateParams.metadata.user = {
					...updateParams.metadata.user,
					hourlyRate,
					purpose,
					messageBroadcast
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
			req.log.info("Update user data", { user: user.id });

			// Register the same data against the stripe customer entity if it exists.
			if (!isEmpty(stripeCustomerId)) {
				await stripe.customers.update(stripeCustomerId, {
					description: `Caller: ${name}`,
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

		// Scope body to accepted properties
		const bodyEntries = Object.entries(req.body).filter(([property]) =>
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
			set(patch, patchMap[property], value);
			return patch;
		}, {});

		req.log.info("Patch params created", {
			user: user.id,
			params: patchParams
		});

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

		// Used to update the existing user
		// Works by constructing a patchParams object by iterating over the request body
		try {
			// Update update
			await authManager.updateUser(user.id, patchParams);
			req.log.info("Patch user data", { user: user.id });

			// Register the same data against the stripe customer entity if it exists.
			const { stripeCustomerId } = user;
			if (!isEmpty(stripeCustomerId) && !isEmpty(name)) {
				await stripe.customers.update(stripeCustomerId, {
					description: `Caller: ${name}`,
					name
				});
				req.log.info("Patch stripe customer data", { user: user.id });
			}

			return res.json({
				success: true
			});
		} catch (e) {
			return onError(e, req, res);
		}
	});

export default handler;

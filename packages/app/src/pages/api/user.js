/**
 * Get / Manage the currently authenticated user
 */

import * as yup from "yup";
import isEmpty from "is-empty";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import getHandler, { onError } from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";
import * as authManager from "@/auth-manager";
import stripe from "@/stripe";

const handler = getHandler();

const postSchema = yup.object().shape({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	username: yup.string().required(),
	gender: yup.string().required(),
	dob: yup.string(),
	paymentMethod: yup.object(),
	operator: yup.boolean(),
	hourlyRate: yup.string(),
	profilePicture: yup.object(),
	purpose: yup.string(),
	messageBroadcast: yup.string()
});

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

		const { stripeCustomerId, phoneNumber } = user;

		const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber);
		let country = "";
		let currency = "";
		if (parsedPhoneNumber) {
			country = parsedPhoneNumber.country;
			currency = country === "AU" ? "AUD" : "USD";
		}

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
	});

export default handler;

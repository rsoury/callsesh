/**
 * Check whether or not a username is available.
 */

import isEmpty from "is-empty";
import getHandler from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";
import * as authManager from "@/auth-manager";
import stripe from "@/stripe";

const handler = getHandler();

handler.use(requireAuthentication).get(async (req, res) => {
	const user = await getUser(req, { withContext: true });

	let { stripeCustomerId } = user;

	if (isEmpty(stripeCustomerId)) {
		// If not stripe customer id exists, create one.
		const customer = await stripe.customers.create();
		stripeCustomerId = customer.id;

		// Associate customer id with user.
		await authManager.updateUser(user.id, {
			metadata: {
				app: {
					stripeCustomerId: customer.id
				}
			}
		});
	}

	// Get SetupIntent Secret
	const intent = await stripe.setupIntents.create({
		customer: stripeCustomerId,
		payment_method_types: ["card"],
		usage: "off_session"
	});

	return res.json({
		success: true,
		secret: intent.client_secret
	});
});

export default handler;

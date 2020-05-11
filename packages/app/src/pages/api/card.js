/**
 * Manage credit cards using Stripe.
 */

import isEmpty from "is-empty";
import Stripe from "stripe";
import getHandler from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";
import * as authManager from "@/auth-manager";
import { stripe as config } from "@/env-config";

const handler = getHandler();
const stripe = Stripe(config.secretKey); // eslint-disable-line

handler.use(requireAuthentication).post(async (req, res) => {
	const { paymentMethod = {} } = req.body;

	if (isEmpty(paymentMethod)) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: "Payment method required"
		});
	}

	const user = await getUser(req);

	// Create Stripe customer with phone number and user id
	const customer = await stripe.customers.create({
		payment_method: paymentMethod.id
	});

	// Store Stripe customer id against user is app_metadata
	await authManager.updateMetadata(
		user.id,
		{
			stripeCustomerId: customer.id
		},
		true
	);

	return res.status(200).json({
		success: true,
		verified: true
	});
});

export default handler;

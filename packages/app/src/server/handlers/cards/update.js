/**
 * Manage credit cards using Stripe.
 */

import isEmpty from "is-empty";
import { getUser } from "@/server/middleware/auth";
import stripe from "@/server/stripe";

export default async function updateCard(req, res) {
	// Patch method to make a card default
	const { id } = req.query;

	req.log.info(id);

	if (isEmpty(id)) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: "Payment method id required"
		});
	}

	const user = await getUser(req, { withContext: true }); // Be sure to return user secret context data

	if (isEmpty(user.stripeCustomerId)) {
		return [];
	}

	await stripe.customers.update(user.stripeCustomerId, {
		invoice_settings: {
			default_payment_method: id
		}
	});

	return res.json({
		success: true
	});
}

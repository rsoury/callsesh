/**
 * Manage credit cards using Stripe.
 */

import isEmpty from "is-empty";
import stripe from "@/server/stripe";

export default async function removeCard(req, res) {
	const { id } = req.query;

	if (isEmpty(id)) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: "Payment method id required"
		});
	}

	await stripe.paymentMethods.detach(id);

	return res.json({
		success: true
	});
}

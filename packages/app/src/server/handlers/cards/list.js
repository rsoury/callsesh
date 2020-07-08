/**
 * Manage credit cards using Stripe.
 */

import isEmpty from "is-empty";
import { getUser } from "@/server/middleware/auth";
import stripe from "@/server/stripe";

export default async function listCards(req, res) {
	// Get list of added cards
	const user = await getUser(req, { withContext: true }); // Be sure to return user secret context data

	if (isEmpty(user.stripeCustomerId)) {
		return res.json({
			success: true,
			cards: []
		});
	}

	const { data: cards } = await stripe.paymentMethods.list({
		customer: user.stripeCustomerId,
		type: "card",
		limit: 20
	});

	// Get Stripe customer - to determine default payment method
	const customer = await stripe.customers.retrieve(user.stripeCustomerId);
	const defaultPaymentMethodId =
		customer.invoice_settings.default_payment_method;

	return res.json({
		success: true,
		cards: cards.map(
			({ id, billing_details: billingDetails, card, created }) => ({
				id,
				billingDetails,
				brand: card.brand,
				checks: card.check,
				country: card.country,
				expMonth: card.exp_month,
				expYear: card.exp_year,
				last4: card.last4,
				created,
				isDefault: id === defaultPaymentMethodId
			})
		)
	});
}

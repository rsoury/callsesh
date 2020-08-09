/**
 * Manage credit cards using Stripe.
 */

import isEmpty from "is-empty";
import { getUser } from "@/server/middleware/auth";
import * as authManager from "@/server/auth-manager";
import stripe from "@/server/stripe";
import { publicUrl } from "@/env-config";
import { page as pageRoutes } from "@/routes";

export default async function addCard(req, res) {
	const { paymentMethod = {} } = req.body;

	if (isEmpty(paymentMethod)) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: "Payment method required"
		});
	}

	const user = await getUser(req, { withContext: true }); // Be sure to return user secret context data

	const { nickname: name, phoneNumber } = user;
	let { stripeCustomerId } = user;

	try {
		// Ensure stripe customer
		if (isEmpty(stripeCustomerId)) {
			// Create Stripe customer with phone number and user id
			const customer = await stripe.customers.create({
				description: `Caller: ${name}`,
				name,
				phone: phoneNumber
			});
			// Store Stripe customer id against user is app_metadata
			await authManager.updateUser(user.id, {
				metadata: {
					app: {
						stripeCustomerId: customer.id
					}
				}
			});
			req.log.info("Stripe customer created", {
				user: user.id,
				customerId: customer.id
			});
			stripeCustomerId = customer.id;
		}

		// Create setup intent for future payments on payment method
		// Associate payment method directly and confirm. Return secret to frontend for error check.
		const intent = await stripe.setupIntents.create({
			customer: stripeCustomerId,
			description: "Payment method for making calls on Callsesh",
			payment_method_types: ["card"],
			usage: "off_session",
			confirm: true,
			payment_method: paymentMethod.id,
			return_url: `${publicUrl}${pageRoutes.settings.threeDSecure}`
		});

		req.log.info("Setup intent created", {
			user: user.id,
			intent: intent.id
		});

		// If the intent succeeded, make the payment method the default for customer.
		if (intent.status === "succeeded") {
			await stripe.customers.update(stripeCustomerId, {
				invoice_settings: {
					default_payment_method: intent.payment_method
				}
			});
			req.log.info("Updated Stripe default payment method", {
				user: user.id
			});
		}

		return res.status(200).json({
			success: true,
			verified: true,
			secret: intent.client_secret
		});
	} catch (e) {
		if (`${e.code}` === "card_declined") {
			req.log.warn(e.message, { paymentMethod: paymentMethod.id });
			return res.status(200).json({
				success: true,
				verified: false
			});
		}
		throw e;
	}
}

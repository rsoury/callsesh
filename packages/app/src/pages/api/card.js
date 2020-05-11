/**
 * Manage credit cards using Stripe.
 */

import isEmpty from "is-empty";
import getHandler from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";
import * as authManager from "@/auth-manager";
import stripe from "@/stripe";

const handler = getHandler();

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

	const { stripeCustomerId } = user;

	if (isEmpty(stripeCustomerId)) {
		// Create Stripe customer with phone number and user id
		const customer = await stripe.customers.create({
			payment_method: paymentMethod.id
		});
		// Store Stripe customer id against user is app_metadata
		await authManager.updateUser(user.id, {
			metadata: {
				app: {
					stripeCustomerId: customer.id
				}
			}
		});
	} else {
		// If stripe customer id exits, attach payment method to customer and make it default
		const { id: attachedPaymentMethodId } = await stripe.paymentMethods.attach(
			paymentMethod.id,
			{
				customer: stripeCustomerId
			}
		);
		await stripe.customers.update(stripeCustomerId, {
			invoice_settings: {
				default_payment_method: attachedPaymentMethodId
			}
		});
	}

	return res.status(200).json({
		success: true,
		verified: true
	});
});

export default handler;

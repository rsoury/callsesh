/**
 * Manage credit cards using Stripe.
 */

import isEmpty from "is-empty";
import getHandler from "@/middleware";
import { requireAuthentication, getUser } from "@/middleware/auth";
import * as authManager from "@/auth-manager";
import stripe from "@/stripe";

const handler = getHandler();

handler
	.use(requireAuthentication)
	.get(async (req, res) => {
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
	})
	.post(async (req, res) => {
		const { paymentMethod = {} } = req.body;

		if (isEmpty(paymentMethod)) {
			return res.status(400).json({
				success: false,
				code: 400,
				message: "Payment method required"
			});
		}

		const user = await getUser(req, { withContext: true }); // Be sure to return user secret context data

		const { stripeCustomerId, nickname: name, phoneNumber } = user;

		try {
			if (isEmpty(stripeCustomerId)) {
				// Create Stripe customer with phone number and user id
				const customer = await stripe.customers.create({
					payment_method: paymentMethod.id,
					invoice_settings: {
						default_payment_method: paymentMethod.id
					},
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
				req.log.info("Create stripe customer", { user: user.id });
			} else {
				// If stripe customer id exits, attach payment method to customer and make it default
				const {
					id: attachedPaymentMethodId
				} = await stripe.paymentMethods.attach(paymentMethod.id, {
					customer: stripeCustomerId
				});
				await stripe.customers.update(stripeCustomerId, {
					invoice_settings: {
						default_payment_method: attachedPaymentMethodId
					}
				});
				req.log.info("Update stripe customer", { user: user.id });
			}
		} catch (e) {
			if (`${e.code}` === "card_declined") {
				return res.status(200).json({
					success: true,
					verified: false
				});
			}
			throw e;
		}

		return res.status(200).json({
			success: true,
			verified: true
		});
	})
	.patch(async (req, res) => {
		// Patch method to make a card default
		const { id } = req.body;

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
	})
	.delete(async (req, res) => {
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
	});

export default handler;

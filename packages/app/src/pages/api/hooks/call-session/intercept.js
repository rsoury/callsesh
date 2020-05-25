/**
 * Twilio Proxy Service Intercept Callback Url.
 * Fires on each interaction.
 * Used to prevent Operator from making interactions.
 */

import isEmpty from "is-empty";
import ono from "@jsdevtools/ono";
import truncate from "lodash/truncate";

import * as comms from "@callsesh/utils/comms";
import getHandler from "@/middleware";
import * as authManager from "@callsesh/utils/auth-manager";
import handleException from "@/utils/handle-exception";
import stripe, { isPayoutsEnabled } from "@callsesh/utils/stripe";
import * as fees from "@callsesh/utils/fees";
import { CALL_SESSION_USER_TYPE } from "@/constants";
import { publicUrl } from "@/env-config";
import * as routes from "@/routes";

const handler = getHandler();

handler.post(async (req, res) => {
	const { inboundParticipantSid, interactionSessionSid } = req.body;

	const logParams = { requestBody: { ...req.body } };

	req.log.info(`Start call session interaction intercept`);

	try {
		// Get participant in call session
		const participant = await comms
			.getProxyService()
			.sessions(interactionSessionSid)
			.participants(inboundParticipantSid)
			.fetch();
		const { identifier: phoneNumber } = participant;

		logParams.participant = participant;

		req.log.info(`Caller participant retrieved`, { id: participant.sid });

		// Use participant identifier to determine user
		const user = await authManager.getUserByPhoneNumber(phoneNumber, {
			withContext: true
		});
		if (isEmpty(user)) {
			throw new Error("No caller user found in session");
		}

		req.log.info(`Caller application user retrieved`, {
			username: user.username
		});

		const { callSession, stripeCustomerId } = user;

		logParams.callSession = callSession;
		logParams.stripeCustomerId = stripeCustomerId;

		// Check this user is in this call session
		if (callSession.id !== interactionSessionSid) {
			throw new Error(
				"Application user call session does not match interaction session"
			);
		}

		// Make sure this user is the caller in this call session
		if (callSession.as !== CALL_SESSION_USER_TYPE.caller) {
			req.log.info(
				"Application user is not the caller in this session",
				logParams
			);
			return res.status(403).end();
		}

		req.log.info(`Participant is a valid caller`);

		// Check caller in callSession to find if callSession.preAuthorisation (stripe id) exists.
		if (isEmpty(callSession.preAuthorisation)) {
			// We need the currency to charge in. Get the user that is in session with caller.
			const operatorUser = await authManager.getUserByUsername(
				callSession.with,
				{
					withContext: true
				}
			);
			if (isEmpty(operatorUser)) {
				throw new Error("Cannot find the operator user in call session");
			}

			try {
				// If not, authorise amount
				// The payment intent can error if authentication is required
				// -- setup intent is in use to prevent this, but not guaranteed
				// You may need to send the customer an SMS here with a link to confirm payment.
				const customer = await stripe.customers.retrieve(stripeCustomerId);
				const paymentMethodId =
					customer.invoice_settings.default_payment_method;
				const preAuthParams = {
					amount: fees.preAuthAmount(),
					currency: operatorUser.currency,
					customer: stripeCustomerId,
					payment_method: paymentMethodId,
					description: "Call session pre-authorisation",
					metadata: {
						callSessionId: callSession.id,
						callerName: user.nickname,
						callerUsername: user.username,
						operatorName: operatorUser.nickname,
						operatorUsername: operatorUser.username,
						hello: {
							throwing: "error"
						}
					},
					statement_descriptor_suffix: `OP: ${truncate(
						operatorUser.givenName,
						18
					)}`,
					off_session: true,
					confirm: true,
					error_on_requires_action: true,
					capture_method: "manual"
				};
				// Check if operator has payouts setup, and if so add destination connect id.
				// Requires to be set here, as destination cannot be added on update
				const payoutsEnabled = await isPayoutsEnabled(
					operatorUser.stripeConnectId
				);
				if (payoutsEnabled) {
					preAuthParams.application_fee_amount = fees.preAuthAmount();
					preAuthParams.transfer_data = {
						destination: operatorUser.stripeConnectId
					};
				}
				const preAuth = await stripe.paymentIntents.create(preAuthParams);

				// Add pre auth charge id to application user data
				await authManager.updateUser(user.id, {
					metadata: {
						app: {
							callSession: {
								...callSession,
								preAuthorisation: preAuth.id
							}
						}
					}
				});

				req.log.info(`Pre-authorisation charge complete`);
			} catch (e) {
				// Remove users from call session if payment fails
				if (!isEmpty(user) && !isEmpty(operatorUser)) {
					await Promise.all([
						authManager.endCallSession(operatorUser.id),
						authManager.endCallSession(user.id)
					]);

					// SMS Caller of issue with payment too.
					await comms.sms(
						user.phoneNumber,
						`There seems to have been an issue with your payment method. Please configure or add a new payment method through your Callsesh Wallet. ${publicUrl}${routes.page.settings.wallet}`
					);

					req.log.info("Users removed from call session", {
						id: interactionSessionSid
					});
				}

				// Handle exception in parent try/catch
				throw e;
			}
		}

		// Return 200.
		return res.end();
	} catch (err) {
		req.log.error(err.message, logParams);
		handleException(ono(err, logParams));

		// Status 403 Forbidden required to end the call.
		return res.status(403).end();
	}
});

export default handler;

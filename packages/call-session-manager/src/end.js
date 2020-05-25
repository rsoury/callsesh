/**
 * 1. Get the status of the session. If closed, end the session. If failed, throw an error for further investigation.
 * 2. Remove call session data from both participant users.
 * 3. Fetch call logs for session
 * 4. Sum up talk duration
 * 5. Use operator hourlyRate to quantify call cost -- include service fee
 * 6. Calc transfer amount -- include existing pendingPayoutAmount and minus service fee
 * 7. Check if operator has stripeConnectId and enabled payouts, if so, add destination, otherwise overwrite to pendingPayoutAmount
 * 8. Charge caller for call.
 * 9. Notify both parties in the session with a call summary via text.
 */

import isEmpty from "is-empty";
import truncate from "lodash.truncate";
import * as comms from "@callsesh/utils/comms";
import * as authManager from "@callsesh/utils/auth-manager";
import ono from "@jsdevtools/ono";
import * as fees from "@callsesh/utils/fees";
import stripe, { isPayoutsEnabled } from "@callsesh/utils/stripe";
import { constants } from "@callsesh/utils";

import handleException from "@/utils/handle-exception";
import logger from "@financial-times/lambda-logger";

const { CALL_SESSION_USER_TYPE } = constants;

const service = comms.getProxyService();

export default async function (event) {
	const {
		interactionSessionSid,
		outboundParticipantSid,
		inboundParticipantSid
	} = event;

	logger.info({ event }, `Start Call Session Manager - Ender`);

	try {
		// Check if the status is closed.
		const session = await service.sessions(interactionSessionSid).fetch();
		logger.info({ status: session.status }, `Session status`);
		if (session.status === "closed") {
			// Officially end the session
			const [operatorParticipant, callerParticipant] = await Promise.all([
				service
					.sessions(interactionSessionSid)
					.participants(outboundParticipantSid)
					.fetch(),
				service
					.sessions(interactionSessionSid)
					.participants(inboundParticipantSid)
					.fetch()
			]);
			logger.info(`Participants retrieved from Twilio`);

			const [operatorUser, callerUser] = await Promise.all([
				authManager.getUserByPhoneNumber(operatorParticipant.identifier, {
					withContext: true
				}),
				authManager.getUserByPhoneNumber(callerParticipant.identifier, {
					withContext: true
				})
			]);

			logger.info(`Users retrieved from Applications`);

			// Check if users are still in a call session together with appropriate roles
			// ie. Call session could have already ended, and new sessions could be in place.
			let valid = false;
			if (
				!isEmpty(callerUser.callSession) &&
				!isEmpty(operatorUser.callSession)
			) {
				if (
					// Usernames match
					callerUser.callSession.with === operatorUser.username &&
					operatorUser.callSession.with === callerUser.username &&
					// Roles match
					callerUser.callSession.as === CALL_SESSION_USER_TYPE.caller &&
					operatorUser.callSession.as === CALL_SESSION_USER_TYPE.operator &&
					// Ids match
					callerUser.callSession.id === operatorUser.callSession.id
				) {
					valid = true;
				}
			}
			if (!valid) {
				logger.warn({ event }, `Call session is invalid`);
				return {};
			}

			// Remove call session data from both users.
			await Promise.all([
				authManager.endCallSession(operatorUser.id),
				authManager.endCallSession(callerUser.id)
			]);

			logger.info(`User call sessions reset`);

			// Fetch call logs
			const interactions = await service
				.sessions(interactionSessionSid)
				.interactions.list({ limit: 99999999 });

			logger.info(
				{
					amount: interactions.length
				},
				`Interactions retrieved for session`
			);

			// Calc total duration
			const totalDuration = interactions.reduce((sum, interaction) => {
				if (
					interaction.outboundResourceType === "call" &&
					interaction.outboundResourceStatus === "completed"
				) {
					if (!isEmpty(interaction.data)) {
						try {
							const data = JSON.parse(interaction.data);
							const duration = parseInt(data.duration, 10);
							sum += duration;
						} catch (e) {
							// empty catch
						}
					}
				}
				return sum;
			}, 0);

			logger.info(
				{
					duration: totalDuration
				},
				`Total talk duration calculated`
			);

			// Check if any talk time accrued. Ensure duration is greater than 10 seconds.
			if (totalDuration < 10) {
				if (!isEmpty(callerUser.callSession.preAuthorisation)) {
					const cancelledPayment = await stripe.paymentIntents.cancel(
						callerUser.callSession.preAuthorisation,
						{
							cancellation_reason: "abandoned"
						}
					);
					logger.debug({ cancelledPayment }, `Cancelled payment intent`);
					logger.info(`Cancelling payment...`);
				}
				logger.info(`Call session ended with insufficient talk time.`);
				return {};
			}

			const {
				pendingPayoutAmount = 0,
				hourlyRate,
				stripeConnectId
			} = operatorUser;
			// Quantify the caller charge amount of session based on operator hourly rate
			const chargeAmount = fees.chargeAmount(hourlyRate, totalDuration);
			// Get application fee -- includes service fee
			const applicationFee = fees.applicationAmount(hourlyRate, totalDuration);
			const customer = await stripe.customers.retrieve(
				callerUser.stripeCustomerId
			);
			const paymentMethodId = customer.invoice_settings.default_payment_method;
			const chargeParams = {
				amount: chargeAmount,
				currency: operatorUser.currency,
				customer: callerUser.stripeCustomerId,
				payment_method: paymentMethodId,
				description: `Call session complete - Caller: ${truncate(
					callerUser.givenName,
					{ length: 22 }
				)} - Operator: ${truncate(operatorUser.givenName, { length: 22 })}`,
				metadata: {
					callSessionId: callerUser.callSession.id,
					callerName: callerUser.nickname,
					callerUsername: callerUser.username,
					operatorName: operatorUser.nickname,
					operatorUsername: operatorUser.username,
					pendingPayoutAmount,
					hourlyRate,
					totalDuration
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

			const payoutsEnabled = await isPayoutsEnabled(stripeConnectId);
			if (payoutsEnabled) {
				// Add payout to charge with destination
				chargeParams.application_fee_amount = applicationFee;
				chargeParams.transfer_data = {
					destination: operatorUser.stripeConnectId
				};
			} else {
				// Add payout to pending payout amount
				const payoutAmount =
					chargeAmount - applicationFee + pendingPayoutAmount;
				await authManager.updateUser(operatorUser.id, {
					metadata: {
						app: {
							pendingPayoutAmount: payoutAmount > 0 ? payoutAmount : 0
						}
					}
				});

				logger.info({ payoutAmount }, `Pending payout amount updated`);
			}

			// Cancel pre-auth payment intent. Create new payment intent with chargeParams
			const cancelledPayment = await stripe.paymentIntents.cancel(
				callerUser.callSession.preAuthorisation,
				{
					cancellation_reason: "duplicate"
				}
			);
			// Payments will be captured manually for now.
			const payment = await stripe.paymentIntents.create(chargeParams);

			logger.debug(
				{ payment, cancelledPayment, chargeParams },
				`Successful payment intent`
			);

			logger.info(`Charge payment create with latest call session details.`);

			// Notify both parties in the session with a call summary via text.
			await Promise.all([
				// Operator
				comms.sms(
					operatorUser.phoneNumber,
					`This call went for ${totalDuration} seconds. You will paid $${
						chargeAmount - applicationFee
					}.${
						pendingPayoutAmount > 0
							? ` You have a pending payout of $${(
									pendingPayoutAmount / 100
							  ).toFixed(
									2
							  )} which will be paid the first day of the next month.`
							: ``
					} You can manage your payouts through the Callsesh web app.`
				),
				// Caller
				comms.sms(
					callerUser.phoneNumber,
					`This call went for ${totalDuration} seconds and metered ${chargeAmount}. You can find your receipt here: ${payment.charges.data[0].receipt_url} We hope you're happy with the call! Have issues? Contact Callsesh support.`
				)
			]);
		} else if (session.status === "failed") {
			logger.error(`Session failed`);
			// Capture an exception for further investigation
			handleException(ono(new Error("Session failed"), { event }));
		}
	} catch (e) {
		handleException(e);
		throw e;
	}

	return {};
}

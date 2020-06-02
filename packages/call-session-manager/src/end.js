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

export default async function endCallSession(event) {
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

			logger.info(
				{
					operator: operatorUser.username,
					caller: callerUser.username
				},
				`Users retrieved from Applications`
			);

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
			// Use a 8 second buffer -- prevents charge on accidental call/voice-message
			const durationBuffer = 8;
			const totalDuration = interactions.reduce((sum, interaction) => {
				if (
					interaction.outboundResourceType === "call" &&
					interaction.outboundResourceStatus === "completed"
				) {
					if (!isEmpty(interaction.data)) {
						try {
							const data = JSON.parse(interaction.data);
							const duration = parseInt(data.duration, 10);
							// Only total interactions with a valid duration. -- ie. no dropouts or no-answers
							if (duration >= durationBuffer) {
								sum += duration;
							}
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

			// Check if any talk time accrued.
			if (isEmpty(totalDuration)) {
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
				stripeConnectId,
				referrer: operatorReferrer
			} = operatorUser;

			// Quantify the caller charge amount of session based on operator hourly rate
			const chargeAmount = fees.chargeAmount(hourlyRate, totalDuration);
			const totalChargeAmount = chargeAmount + fees.preAuthAmount();
			// If referrer exists, calc referral fee
			let referralFee = 0;
			let referrerUser;
			if (
				!isEmpty(operatorReferrer) &&
				operatorReferrer !== callerUser.username // make sure operator referrer isn't also the caller user.
			) {
				referrerUser = await authManager.getUserByUsername(operatorReferrer, {
					withContext: true
				});
				const { referrals: { earnings } = {} } = referrerUser;
				referralFee = fees.operatorReferralAmount(chargeAmount, earnings);
			}
			// Get application fee
			const applicationFee =
				fees.applicationAmount(hourlyRate, totalDuration) - referralFee;

			const customer = await stripe.customers.retrieve(
				callerUser.stripeCustomerId
			);
			const paymentMethodId = customer.invoice_settings.default_payment_method;
			const chargeParams = {
				amount: totalChargeAmount,
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
			const payoutAmount = chargeAmount - applicationFee + pendingPayoutAmount;
			const newPendingPayoutAmount = payoutAmount > 0 ? payoutAmount : 0;

			if (payoutsEnabled) {
				// Add payout to charge with destination
				// Include referral fee to ensure we capture the amount that's to be paid to the referrer
				// We should be including the existing payout amount into this transfer, however, Stripe only allows payouts equal/upto to the amount of the transaction
				// In the future, there should be a check to see if transfers are available for this user. -- Stripe Transfers are restricted in that the connected account (Operator) and Caller must be in the same region
				chargeParams.application_fee_amount =
					applicationFee + fees.preAuthAmount() + referralFee;
				chargeParams.transfer_data = {
					destination: stripeConnectId
				};
			} else {
				// Add payout to pending payout amount
				await authManager.updateUser(operatorUser.id, {
					metadata: {
						app: {
							pendingPayoutAmount: newPendingPayoutAmount
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

			logger.info(
				{ chargeAmount, applicationFee },
				`Charge payment create with latest call session details.`
			);

			// Update the earnings of the referrerUser
			// We update earnings here to ensure payment is successful
			if (!isEmpty(referrerUser) && !isEmpty(referralFee)) {
				const {
					referrals: { earnings = 0 } = {},
					pendingPayoutAmount: referrerPendingPayoutAmount = 0
				} = referrerUser;
				const newEarnings = earnings + referralFee;
				await authManager.updateUser(referrerUser.id, {
					metadata: {
						app: {
							referrals: {
								earnings: newEarnings
							},
							pendingPayoutAmount: referrerPendingPayoutAmount + referralFee
						}
					}
				});
				logger.info(
					{
						earnings,
						referralFee,
						newEarnings,
						referrerUser: {
							username: referrerUser.username,
							name: referrerUser.nickname
						}
					},
					`Updated the referral user's earnings`
				);
			}

			// Notify both parties in the session with a call summary via text.
			const operatorSummary = [`This call went for ${totalDuration} seconds.`];
			if (payoutsEnabled) {
				operatorSummary.push(
					`You will be paid $${((chargeAmount - applicationFee) / 100).toFixed(
						2
					)}.`
				);

				if (pendingPayoutAmount > 0) {
					operatorSummary.push(
						`You also have $${(pendingPayoutAmount / 100).toFixed(
							2
						)} pending payout.`
					);
				}
			} else {
				operatorSummary.push(
					`You now have $${(newPendingPayoutAmount / 100).toFixed(
						2
					)} pending payout.`
				);
			}
			operatorSummary.push(
				`Pending payouts are paid at the start each month. You can manage your payouts through the Callsesh web app.`
			);
			await Promise.all([
				// Operator
				comms.sms(operatorUser.phoneNumber, operatorSummary.join(" ")),
				// Caller
				comms.sms(
					callerUser.phoneNumber,
					[
						`This call went for ${totalDuration} seconds and metered $${(
							totalChargeAmount / 100
						).toFixed(2)}.`,
						`You can find your receipt here: ${payment.charges.data[0].receipt_url} `,
						`We hope you're happy with the call! Have issues? Contact Callsesh support.`
					].join("\n") // new line: https://stackoverflow.com/questions/24218945/how-do-i-add-a-line-break-in-my-twilio-sms-message
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

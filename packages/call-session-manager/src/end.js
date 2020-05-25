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
import handleException from "@/utils/handle-exception";
import logger from "@/utils/logger";
import ono from "@jsdevtools/ono";
import * as fees from "@callsesh/utils/fees";
import stripe, { isPayoutsEnabled } from "@callsesh/utils/stripe";
import { constants } from "@callsesh/utils";

const { CALL_SESSION_USER_TYPE } = constants;

const service = comms.getProxyService();

export default async function (event) {
	const {
		interactionSessionSid,
		outboundParticipantSid,
		inboundParticipantSid
	} = event;

	logger.info(`Start Call Session Manager - Ender`, { event });

	try {
		// Check if the status is closed.
		const session = await service.sessions(interactionSessionSid).fetch();
		logger.info(`Session status`, { status: session.status });
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
				logger.warn(`Call session is invalid`, { event });
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

			logger.info(`Interactions retrieved for session`, {
				amount: interactions.length
			});

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

			logger.info(`Total talk duration calculated`, {
				duration: totalDuration
			});

			// Check if any talk time accrued
			if (isEmpty(totalDuration)) {
				await stripe.paymentIntents.cancel(
					callerUser.callSession.preAuthorisation,
					{
						cancellation_reason: "abandoned"
					}
				);
				logger.info(`Call session ended with no talk time. Cancelling payment`);
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

			const chargeParams = {
				amount: chargeAmount,
				description: `Call session complete - Caller: ${truncate(
					callerUser.givenName,
					{ length: 22 }
				)} - Operator: ${truncate(operatorUser.givenName, { length: 22 })}`
			};

			const payoutsEnabled = await isPayoutsEnabled(stripeConnectId);
			if (payoutsEnabled) {
				// Add payout to charge with destination
				chargeParams.application_fee_amount = applicationFee;
			} else {
				// Add payout to pending payout amount
				await authManager.updateUser(stripeConnectId, {
					metadata: {
						app: {
							pendingPayoutAmount:
								chargeAmount - applicationFee + pendingPayoutAmount
						}
					}
				});

				logger.info(`Pending payout amount updated`);
			}

			// Update payment intent with chargeParams
			// Payments will be captured manually for now.
			const paymentIntent = await stripe.paymentIntents.update(
				callerUser.callSession.preAuthorisation,
				chargeParams
			);

			logger.debug(`Payment Intent`, paymentIntent);

			logger.info(`Charge payment updated with latest call session details.`);

			// Notify both parties in the session with a call summary via text.
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

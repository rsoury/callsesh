/**
 * 1. Get the status of the session. If closed, end the session. If failed, throw an error for further investigation.
 * 2. Remove call session data from both participant users.
 * 3. Fetch call logs for session
 * 4. Sum up talk duration
 * 5. Use operator hourlyRate to quantify call cost -- include service fee
 * 6. Calc transfer amount -- include existing pendingPayoutAmount and minus service fee
 * 7. Check if operator has stripeConnectId and enabled payouts, if so, add destination, otherwise overwrite to pendingPayoutAmount
 * 8. Charge caller for call.
 */

// import { isProd } from "@/env-config";
import isEmpty from "is-empty";
import * as comms from "@callsesh/utils/comms";
import * as authManager from "@callsesh/utils/auth-manager";
import handleException from "@/utils/handle-exception";
import logger from "@/utils/logger";
import ono from "@jsdevtools/ono";
import * as fees from "@callsesh/utils/fees";
import stripe from "@callsesh/utils/stripe";

const service = comms.getProxyService();

export default async function (event) {
	const {
		interactionSessionSid,
		outboundParticipantSid,
		inboundParticipantSid
	} = event;

	logger.info(`Start Call Session Manager - Ender`, { event });

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

		// Remove call session data from both users.
		await Promise.all([
			authManager.updateUser(operatorUser.id, {
				metadata: {
					app: {
						callSession: {}
					}
				}
			}),
			authManager.updateUser(callerUser.id, {
				metadata: {
					app: {
						callSession: {}
					}
				}
			})
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

		logger.info(`Total talk duration calculated`, { duration: totalDuration });

		const {
			pendingPayoutAmount = 0,
			hourlyRate,
			stripeConnectId
		} = operatorUser;
		// Quantify the caller charge amount of session based on operator hourly rate
		const chargeAmount = fees.chargeAmount(hourlyRate, totalDuration);
		// Get application fee -- includes service fee
		const applicationFee = fees.applicationAmount(hourlyRate, totalDuration);

		const payoutAmount = chargeAmount - applicationFee + pendingPayoutAmount;

		const chargeParams = {}; // TODO: set payment intent params here.

		let payoutsEnabled = false;
		if (!isEmpty(stripeConnectId)) {
			const account = await stripe.accounts.retrieve(stripeConnectId);
			payoutsEnabled = account.charges_enabled && account.payouts_enabled;
		}
		if (payoutsEnabled) {
			// Add payout to charge with destination
			// TODO: Add connect details to chargeParams here.
		} else {
			// Add payout to pending payout amount
			await authManager.updateUser(stripeConnectId, {
				metadata: {
					app: {
						pendingPayoutAmount: payoutAmount
					}
				}
			});
		}
	} else if (session.status === "failed") {
		logger.error(`Session failed`);
		// Capture an exception for further investigation
		handleException(ono(new Error("Session failed"), { event }));
	}

	return {};
}

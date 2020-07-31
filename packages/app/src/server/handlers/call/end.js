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
import truncate from "lodash/truncate";
import ono from "@jsdevtools/ono";
import * as authManager from "@/server/auth-manager";
import * as comms from "@/server/comms";
import stripe, { isPayoutsEnabled } from "@/server/stripe";
import * as fees from "@/utils/fees";
import Moment from "moment";
import { extendMoment } from "moment-range";
import * as chat from "@/server/chat";

import { onNoMatch } from "@/server/middleware";
import { getUser } from "@/server/middleware/auth";
import { ERROR_TYPES, CALL_SESSION_USER_TYPE } from "@/constants";
import handleException from "@/utils/handle-exception";
import checkCallSession from "@/utils/check-call-session";
import syncIds from "@/utils/sync/identifiers";

import * as utils from "./utils";

const moment = extendMoment(Moment);

const service = comms.getProxyService();

export default async function endCallSession(req, res) {
	const { force = false } = req.body;

	const user = await getUser(req, { withContext: true });

	if (isEmpty(user.callSession)) {
		return res.status(400).json({
			success: false,
			code: 400,
			type: ERROR_TYPES.callSessionRequired,
			message: "Call session does not exist"
		});
	}

	const { id: sessionId } = user.callSession;

	// Get Counterpart user
	const counterpartUser = await authManager.getUserByUsername(
		user.callSession.with,
		{
			withContext: true
		}
	);

	// If not found, return not found.
	if (isEmpty(counterpartUser)) {
		return onNoMatch(req, res);
	}

	req.log.info(`Counterpart user found - start ending call session`, {
		sessionId,
		userId: counterpartUser.id,
		username: counterpartUser.username
	});

	// Ensure the status is closed before ending -- for automatic call session ending
	const session = await service.sessions(sessionId).fetch();
	req.log.info(`Session status`, { status: session.status });
	if (force) {
		await comms.endSession(sessionId).catch((e) => {
			req.log.error(`Could not end session`);
			throw e;
		});
	} else if (session.status !== "closed") {
		if (session.status === "failed") {
			req.log.error(`Session failed`);
			// Capture an exception for further investigation
			handleException(ono(new Error("Session failed"), { sessionId }));
		}

		return res.status(400).json({
			success: false,
			code: 400
		});
	}

	// Determine role of each user, as both roles can call this API endpoint handler
	const callerUser =
		user.callSession.as === CALL_SESSION_USER_TYPE.caller
			? user
			: counterpartUser;
	const operatorUser =
		user.callSession.as === CALL_SESSION_USER_TYPE.operator
			? user
			: counterpartUser;

	// Create a logger using users set with roles.
	const logger = req.log.child(utils.logParams(operatorUser, callerUser));

	logger.info(`Users retrieved from applications`);

	// Check if users are still in a call session together with appropriate roles
	// ie. Call session could have already ended, and new sessions could be in place.
	const { isSame: valid } = checkCallSession(callerUser, operatorUser);
	if (!valid) {
		logger.warn(`Call session is invalid`, { sessionId });
		return res.status(400).json({
			success: false,
			code: 400
		});
	}

	// Remove call session data from both users.
	await Promise.all([
		authManager.endCallSession(operatorUser.id),
		authManager.endCallSession(callerUser.id)
	]);

	logger.info(`User call sessions reset`, {
		operator: operatorUser.callSession,
		caller: callerUser.callSession
	});

	// Remove call session sync document
	await Promise.all([
		comms
			.getSyncService()
			.documents(syncIds.getCallSession(callerUser.callSession.id))
			.remove(),
		comms.updateDocument(syncIds.getLiveOperator(operatorUser.id), {})
	]);

	// Fetch call logs
	const interactions = await service
		.sessions(sessionId)
		.interactions.list({ limit: 99999999 });

	logger.info(`Interactions retrieved for session`, {
		amount: interactions.length
	});

	// Convert interactions into formatted completed calls
	const completedCalls = interactions
		.map((interaction) => {
			if (
				interaction.outboundResourceType === "call" &&
				interaction.outboundResourceStatus === "completed"
			) {
				if (!isEmpty(interaction.data)) {
					try {
						const data = JSON.parse(interaction.data);
						const duration = parseInt(data.duration, 10);

						return {
							...interaction,
							data: {
								...data,
								duration
							}
						};
					} catch (e) {
						// empty catch
					}
				}
			}
			return {};
		})
		.filter((result) => !isEmpty(result));

	// Calc total metered duration
	// Start with total talk duration
	// Use a 8 second buffer -- prevents charge on accidental call/voice-message
	const talkDurationBuffer = 8;
	const talkDuration = completedCalls.reduce((sum, { data: { duration } }) => {
		// Only total interactions with a valid duration. -- ie. no dropouts or no-answers
		if (duration >= talkDurationBuffer) {
			sum += duration;
		}
		return sum;
	}, 0);

	// Then total metered duration.
	const { meterStamps = [] } = operatorUser.callSession;
	// If the last meter stamp has not ended, end it using the current timestamp.
	const lastStamp = meterStamps[meterStamps.length - 1];
	if (Array.isArray(lastStamp) ? lastStamp.length === 1 : false) {
		const stopMeterTs = Date.now();
		meterStamps[meterStamps.length - 1].push(stopMeterTs);
	}
	const meterDuration = meterStamps.reduce(
		(sum, [startTimestamp, stopTimestamp]) => {
			const difference = stopTimestamp - startTimestamp;
			sum += difference / 1000; // to seconds
			return sum;
		},
		0
	);

	// Determine overlap duration -- Where a call is made during metering
	// We want to capture the time during metering that collides with talk time.
	// Iterate over completed calls, and use talk start/stop times to determine how much meter time is overlap
	const overlapDuration = completedCalls.reduce(
		(sum, { dateUpdated, data: { duration } }) => {
			const completeTimestamp = Date.parse(dateUpdated);
			// Start timestamp is the complete timestamp minus the duration in milliseconds
			const talkRange = moment.range(
				completeTimestamp - duration * 1000,
				completeTimestamp
			);

			meterStamps.forEach((stamp) => {
				const meterRange = moment.range(stamp[0], stamp[1]);
				if (talkRange.overlaps(meterRange)) {
					sum += talkRange.intersect(meterRange).valueOf() / 1000; // to seconds
				}
			});
			return sum;
		},
		0
	);

	// Subtract talk duration from metered duration.
	const totalDuration = meterDuration + talkDuration - overlapDuration;

	logger.info(`Total metered duration calculated`, {
		talkDuration,
		meterDuration,
		overlapDuration,
		totalDuration
	});

	// Check if any talk time accrued.
	if (isEmpty(totalDuration)) {
		if (!isEmpty(callerUser.callSession.preAuthorisation)) {
			const cancelledPayment = await stripe.paymentIntents.cancel(
				callerUser.callSession.preAuthorisation,
				{
					cancellation_reason: "abandoned"
				}
			);
			logger.debug(`Cancelled payment intent`, { cancelledPayment });
			logger.info(`Cancelling payment...`);
		}
		logger.info(`Call session ended with insufficient talk time.`);
		return res.json({
			success: true
		});
	}

	const {
		pendingPayoutAmount = 0,
		hourlyRate,
		stripeConnectId,
		referrer: operatorReferrer
	} = operatorUser;

	// Quantify the caller charge amount of session based on operator hourly rate
	const chargeAmount = fees.chargeAmount(hourlyRate, totalDuration, true);
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
		referralFee = fees.operatorReferralAmount(chargeAmount, earnings, true);
	}
	// Get application fee
	const applicationFee =
		fees.applicationAmount(hourlyRate, totalDuration, true) - referralFee;

	const customer = await stripe.customers.retrieve(callerUser.stripeCustomerId);
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
		statement_descriptor_suffix: `OP: ${truncate(operatorUser.givenName, 18)}`,
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
		// Include referral fee to ensure we capture the amount that's to be paid to the referrer. ie. 15% (app-fee) + $2.50 (pre-auth) + 5% (referral fee)
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
		logger.info(`Pending payout amount updated`, { payoutAmount });
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

	logger.debug(`Successful payment intent`, {
		payment,
		cancelledPayment,
		chargeParams
	});

	logger.info(`Charge payment create with latest call session details.`, {
		chargeAmount,
		applicationFee
	});

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
		logger.info(`Updated the referral user's earnings`, {
			earnings,
			referralFee,
			newEarnings,
			referrerUser: {
				username: referrerUser.username,
				name: referrerUser.nickname
			}
		});
	}

	// Notify both parties in the session with a call summary via text.
	const timeTypes = ["hour", "minute", "second"];
	const readableDuration = new Date(totalDuration * 1000)
		.toISOString()
		.substr(11, 8)
		.split(":")
		.map((value, index) => {
			const intVal = parseInt(value, 10);
			return `${intVal} ${timeTypes[index]}${intVal > 1 ? "s" : ""}`;
		})
		.join(" ");
	const operatorSummary = [`This call went for ${readableDuration}.`];
	if (payoutsEnabled) {
		operatorSummary.push(
			`You will be paid ${fees.format(chargeAmount - applicationFee)}.`
		);

		if (pendingPayoutAmount > 0) {
			operatorSummary.push(
				`You also have ${fees.format(pendingPayoutAmount)} pending payout.`
			);
		}
	} else {
		operatorSummary.push(
			`You now have a ${fees.format(newPendingPayoutAmount)} pending payout.`
		);
	}
	operatorSummary.push(
		`Pending payouts are paid at the start each month. You can manage your payouts at https://www.callsesh.com`
	);
	await Promise.all([
		// Operator
		comms.sms(operatorUser.phoneNumber, operatorSummary.join(" ")),
		// Caller
		comms.sms(
			callerUser.phoneNumber,
			[
				`This call went for ${readableDuration} and metered ${fees.format(
					totalChargeAmount
				)}. A receipt has been emailed to you.`,
				`We hope you're happy with the call! Have issues? Contact Callsesh support.`
			].join("\n") // new line: https://stackoverflow.com/questions/24218945/how-do-i-add-a-line-break-in-my-twilio-sms-message
		)
	]);

	// Ensure both users can remain in contact over chat by ensuring direct message session is created.
	if (!isEmpty(user.chatUser.id)) {
		const { data: { authToken: chatAuthToken = "" } = {} } = await chat.login(
			user.username,
			user.chatUser.password
		);
		const { room = {} } = await chat
			.getClient()
			.post(
				"im.create",
				{
					username: counterpartUser.username
				},
				{
					headers: chat.getAuthHeaderParams(user.chatUser.id, chatAuthToken)
				}
			)
			.then(({ data: d }) => d)
			.catch((e) => {
				handleException(e);
			});
		logger.info(`User direct message session ensured`, { room });
	} else {
		logger.warn(`No chat user exists for user`);
	}

	return res.json({
		success: true
	});
}

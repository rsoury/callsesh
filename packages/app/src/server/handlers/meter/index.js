/**
 * A request handler to toggle (or force stop/start) the call session Meter
 */

import isEmpty from "is-empty";

import { getUser } from "@/server/middleware/auth";
import * as authManager from "@/server/auth-manager";
import * as comms from "@/server/comms";
import { CALL_SESSION_USER_TYPE } from "@/constants";
import { publicUrl } from "@/env-config";

export default async function toggleCallSessionMeter(req, res) {
	// Accepts a timestamp to use to mark start time
	const { ts, start = false, stop = false } = req.body;

	if (isEmpty(ts)) {
		return res.status(400).json({
			success: false,
			code: 400
		});
	}

	// Get the authed user
	const user = await getUser(req, { withContext: true });

	// Ensure user is in a callSession
	if (isEmpty(user.callSession)) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: "Operator must be in a call session"
		});
	}

	// Ensure user is operator in session
	if (user.callSession.as !== CALL_SESSION_USER_TYPE.operator) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: "User must be the operator to manage meter"
		});
	}

	// Get meterStamps or default from call session
	const { meterStamps = [] } = user.callSession;
	const lastStamp = meterStamps[meterStamps.length - 1];

	// Check call session meterStamps 2d array. Last element should be the latest element
	// If last element has a length of 1, then the array is expecting a stop timestamp, so throw an error.
	if (Array.isArray(lastStamp) ? lastStamp.length === 1 : false) {
		// Throw an error if you're trying to force a start here.
		if (start) {
			throw new Error("Cannot start meter. Meter stamps expecting to stop.");
		}
		// Stop the meter here.
		meterStamps[meterStamps.length - 1].push(ts);
		await comms.expireSession(user.callSession.id);
	} else {
		// Throw an error if you're trying to force a stop here.
		if (stop) {
			throw new Error("Cannot stop meter. Meter stamps is expecting a start.");
		}
		// Start the meter here.
		meterStamps.push([ts]);
		await comms.prolongSession(user.callSession.id);
	}

	const callSession = {
		...user.callSession,
		meterStamps
	};

	await authManager.updateUser(user.id, {
		metadata: {
			app: {
				callSession
			}
		}
	});

	// SMS caller in the call session that the meter has started.
	if (meterStamps[meterStamps.length - 1].length === 1) {
		const callerUser = await authManager.getUserByUsername(
			user.callSession.with,
			{ withContext: true }
		);
		await comms.sms(
			callerUser.phoneNumber,
			`${user.givenName} is metering your call session! To end the session visit ${publicUrl}/${user.username}`
		);
	}

	return res.json({
		success: true,
		callSession
	});
}

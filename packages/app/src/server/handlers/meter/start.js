/**
 * A request handler to start the call session Meter
 */

import isEmpty from "is-empty";
import ono from "@jsdevtools/ono";
import * as authManager from "@/server/auth-manager";

import { onNoMatch } from "@/server/middleware";
import { getUser } from "@/server/middleware/auth";
import isUserOperator from "@/utils/is-operator";
import { ERROR_TYPES, CALL_SESSION_USER_TYPE } from "@/constants";
import checkCallSession from "@/utils/check-call-session";
import * as syncDocumentName from "@/utils/get-sync-document-name";
import { delayEndSession } from "@/server/workflows";

export default async function startCallSessionMeter(req, res) {
	// Accepts a timestamp to use to mark start time
	const { ts } = req.body;

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

	return res.json({
		success: true
	});
}

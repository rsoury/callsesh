/**
 * Queue up emails to be sent out to user's notified list
 */

import isEmpty from "is-empty";
import Queue from "better-queue";
import ono from "@jsdevtools/ono";

import getHandler from "@/server/middleware";
import { requireAuthentication, getUser } from "@/server/middleware/auth";
import * as authManager from "@/server/auth-manager";
import * as email from "@/server/email";
import isUserOperator from "@/utils/is-operator";
import handleException from "@/utils/handle-exception";

const handler = getHandler();

handler.use(requireAuthentication).post(async (req, res) => {
	const user = await getUser(req, { withContext: true });

	// Make user is operator
	if (!isUserOperator(user)) {
		throw new Error("User does not have appropriate role.");
	}

	// Check if user is live
	if (!user.isLive) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: "User is not live"
		});
	}

	const { notified = [], lastNotificationTime } = user;
	const oneDay = 60 * 60 * 24 * 1000;
	const ts = Date.now();
	const safeToContinue = isEmpty(lastNotificationTime)
		? true
		: ts - lastNotificationTime > oneDay;

	if (!safeToContinue) {
		return res.status(400).json({
			success: false,
			code: 400,
			message: "Notifications already sent today"
		});
	}

	const q = new Queue(
		(usernameToNotify, done) => {
			authManager
				.getUserByUsername(usernameToNotify, {
					withContext: true
				})
				.then((userToNotify) => {
					req.log.info(userToNotify);
					return email.sendLiveNotification(userToNotify);
				})
				.then(() => {
					done(null, usernameToNotify);
				})
				.catch((err) => {
					done(ono(err, { usernameToNotify }));
				});
		},
		{ concurrent: 3 }
	);

	q.on("task_finish", (taskId, result) => {
		req.log.info(`Successfully notified user`, { taskId, username: result });
	});
	q.on("task_failed", (taskId, err) => {
		handleException(err);
		req.log.error(`An error occurred sending live notification`, {
			taskId,
			username: err.usernameToNotify
		});
		req.log.error(err);
	});

	notified.forEach((username) => {
		q.push(username);
	});

	await new Promise((resolve) => q.on("drain", resolve));

	// Make the current time as the lastNotificationTime and update the current user with this measurement
	const newLastNotificationTime = Date.now();
	await authManager.updateUser(user.id, {
		metadata: {
			app: {
				lastNotificationTime: newLastNotificationTime
			}
		}
	});

	return res.status(200).json({
		success: true
	});
});

export default handler;

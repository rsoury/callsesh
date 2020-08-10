/**
 * Queue up emails to be sent out to user's notified list
 */

import isEmpty from "is-empty";
import Queue from "better-queue";
import MemoryStore from "better-queue-memory";
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
		const resp = {
			success: false,
			code: 400,
			message: "User is not live"
		};
		req.log.info(resp.message);
		return res.status(400).json(resp);
	}

	const logger = req.log.child({ liveUser: user.username });

	const { notified = [], lastNotificationTime } = user;
	logger.info(`Preparing notification for going live...`, {
		notified,
		lastNotificationTime
	});

	// const notificationBuffer = 60 * 60 * 24 * 1000; // 1 day
	const notificationBuffer = 60 * 60 * 3 * 1000; // 3 hours
	const ts = Date.now();
	const safeToContinue = isEmpty(lastNotificationTime)
		? true
		: ts - lastNotificationTime > notificationBuffer;

	if (!safeToContinue) {
		const resp = {
			success: false,
			code: 400,
			message: "Notifications already sent"
		};
		logger.info(resp.message);
		return res.status(400).json(resp);
	}

	const q = new Queue(
		(usernameToNotify, done) => {
			authManager
				.getUserByUsername(usernameToNotify, {
					withContext: true
				})
				.then((userToNotify) => {
					const logParams = {
						id: userToNotify.id,
						username: userToNotify.username,
						email: userToNotify.email
					};
					if (!userToNotify.emailVerified) {
						logger.warning(
							`Email not verified. Cannot notify that user is live`,
							logParams
						);
						return false;
					}
					logger.info(`Notify email that user is live`, logParams);
					return email.sendLiveNotification(userToNotify.email, user);
				})
				.then(() => {
					done(null, usernameToNotify);
				})
				.catch((err) => {
					done(ono(err, { usernameToNotify }));
				});
		},
		{ concurrent: 3, store: new MemoryStore() }
	);

	q.on("task_finish", (taskId, result) => {
		logger.info(`Successfully notified user`, { taskId, username: result });
	});
	q.on("task_failed", (taskId, err) => {
		handleException(err);
		logger.error(`An error occurred sending live notification`, {
			taskId,
			username: err.usernameToNotify
		});
		logger.error(err);
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

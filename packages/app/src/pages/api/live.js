/**
 * Toggle user live status.
 */

import getHandler from "@/server/middleware";
import { requireAuthentication, getUser } from "@/server/middleware/auth";
import * as authManager from "@/server/auth-manager";
import isUserOperator from "@/utils/is-operator";

const handler = getHandler();

handler.use(requireAuthentication).post(async (req, res) => {
	const user = await getUser(req);

	// Make user is operator
	if (!isUserOperator(user)) {
		throw new Error("User does not have appropriate role.");
	}

	const newLiveValue = !user.isLive;

	const params = {
		metadata: {
			user: {
				isLive: newLiveValue
			}
		}
	};

	await authManager.updateUser(user.id, params);

	if (newLiveValue) {
		req.log.info("User is live!", { user: user.id });
	} else {
		req.log.info("User ended their live", { user: user.id });
	}

	return res.status(200).json({
		success: true,
		value: newLiveValue
	});
});

export default handler;

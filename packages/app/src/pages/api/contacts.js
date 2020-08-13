/**
 * Get deep contact data for the given user's contact list.
 */

import isEmpty from "is-empty";
import pick from "lodash/pick";

import getHandler from "@/server/middleware";
import { requireAuthentication, getUser } from "@/server/middleware/auth";
import * as authManager from "@/server/auth-manager";

const handler = getHandler();

handler.use(requireAuthentication).get(async (req, res) => {
	const user = await getUser(req, { withContext: true });

	let contacts = [];
	if (!isEmpty(user.contacts)) {
		contacts = await Promise.all(
			user.contacts.map((contactUsername) =>
				authManager
					.getUserByUsername(contactUsername)
					.then((contactUserData) =>
						pick(contactUserData, [
							"name",
							"nickname",
							"username",
							"picture",
							"givenName",
							"familyName"
						])
					)
			)
		);
	}

	return res.json({
		success: true,
		contacts
	});
});

export default handler;

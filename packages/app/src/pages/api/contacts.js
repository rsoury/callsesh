/**
 * Get deep contact data for the given user's contact list.
 */

import isEmpty from "is-empty";
import pick from "lodash/pick";
import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";

import getHandler from "@/server/middleware";
import { requireAuthentication, getUser } from "@/server/middleware/auth";
import * as authManager from "@/server/auth-manager";

const handler = getHandler();

handler.use(requireAuthentication).get(async (req, res) => {
	const user = await getUser(req, { withContext: true });

	let contacts = [];
	if (!isEmpty(user.contacts)) {
		const contactsRawData = await authManager.getClient().getUsers({
			search_engine: "v3",
			page: 0,
			per_page: 10,
			q: `app_metadata.usernamespace:(${user.contacts
				.map((contactUsername) => `"${contactUsername.toLowerCase()}"`)
				.join(" OR ")})`,
			fields: [
				"name",
				"nickname",
				"user_metadata",
				"family_name",
				"given_name",
				"picture"
			]
		});

		contacts = contactsRawData.map(
			({ user_metadata: { username }, ...data }) => ({
				username,
				...mapKeys(data, (value, key) => camelCase(key))
			})
		);
	}

	return res.json({
		success: true,
		contacts
	});
});

export default handler;

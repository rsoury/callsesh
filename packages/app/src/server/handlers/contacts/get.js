import isEmpty from "is-empty";
import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";
import * as authManager from "@/server/auth-manager";

import { getUser } from "@/server/middleware/auth";

export default async function getContacts(req, res) {
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
				"picture",
				"blocked"
			]
		});

		// Filter out contacts that are blocked.
		contacts = contactsRawData
			.filter(({ blocked }) => !blocked)
			.map(({ user_metadata: { username }, ...data }) => ({
				username,
				...mapKeys(data, (value, key) => camelCase(key))
			}));
	}

	return res.json({
		success: true,
		contacts
	});
}

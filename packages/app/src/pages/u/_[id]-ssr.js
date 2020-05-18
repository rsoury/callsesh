import ono from "@jsdevtools/ono";
import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";
import isEmpty from "is-empty";
import * as yup from "yup";

import * as routes from "@/routes";
import handleException from "@/utils/handle-exception";
import ssrUser from "@/utils/ssr-user";
import * as authManager from "@/auth-manager";

const viewUserSchema = yup.object().shape({
	createdAt: yup.string().required(),
	givenName: yup.string().required(),
	familyName: yup.string().required(),
	nickname: yup.string().required(),
	name: yup.string().required(),
	picture: yup.string().required(),
	username: yup.string().required(),
	country: yup.string().required(),
	currency: yup.string().required(),
	dob: yup.string().required(),
	gender: yup.string(),
	hourlyRate: yup.string(),
	messageBroadcast: yup.string(),
	purpose: yup.string(),
	isLive: yup.boolean(),
	profilePicture: yup.object()
});

export default async function getServerSideProps({
	req,
	res,
	query: { return_url: returnUrl = "/", id: username }
}) {
	// Get view user data.
	if (isEmpty(username)) {
		// See: https://github.com/zeit/next.js/issues/3362 for managing error pages.
		// Defalts props, so you can just return an empty object
		return {
			props: {}
		};
	}
	// Search users by username in user_metadata
	const users = await authManager.getClient().getUsers({
		search_engine: "v3",
		page: 0,
		per_page: 10,
		q: `user_metadata.username:"${username}"`,
		fields: [
			"created_at",
			"user_id",
			"given_name",
			"family_name",
			"nickname",
			"name",
			"user_metadata",
			"picture"
		].join(",")
	});
	if (isEmpty(users)) {
		return {
			props: {}
		};
	}
	if (users.length > 1) {
		// There are multiple responses for the same username
		const err = new Error("Multiple users for username");
		handleException(ono(err, { username }));
		return {
			props: {
				error: {
					code: 500,
					message:
						"Oops! Something has gone wrong. We have been notified and will look into it"
				}
			}
		};
	}

	// Now that we have a user, validate them. Make sure the view user is registered
	const {
		user_id: viewUserId,
		user_metadata: userMetadata,
		...userData
	} = users[0];
	const viewUser = mapKeys(
		{
			...userData,
			...userMetadata
		},
		(value, key) => camelCase(key)
	);
	try {
		await viewUserSchema.validate(viewUser);
	} catch (e) {
		console.error(e); // eslint-disable-line
		return {
			props: {}
		};
	}

	// Get view user roles
	const roles = await authManager.getUserRoles(viewUserId);
	viewUser.roles = roles.map((role) => ({
		name: role.name,
		description: role.description
	}));

	return ssrUser({ req, res }, async (user) => {
		// If user does exist...
		if (!isEmpty(user)) {
			// If user is not registered, redirect to register page
			if (!user.isRegistered) {
				res.writeHead(302, {
					Location: `${routes.page.register}?return_url=${returnUrl}`
				});
				res.end();
			}
		}

		return {
			props: {
				user,
				viewUser,
				error: {}
			}
		};
	});
}

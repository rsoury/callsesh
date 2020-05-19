import ono from "@jsdevtools/ono";
import isEmpty from "is-empty";

import * as routes from "@/routes";
import handleException from "@/utils/handle-exception";
import ssrUser from "@/utils/ssr-user";
import * as authManager from "@/auth-manager";

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
	try {
		const viewUser = await authManager.getViewUserByUsername(username);

		// Return empty if no view user exists.
		if (isEmpty(viewUser)) {
			return {
				props: {}
			};
		}

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
	} catch (err) {
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
}

/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

// import { useState, useEffect, useCallback } from "react";
import { useStyletron } from "baseui";
import isEmpty from "is-empty";
import ono from "@jsdevtools/ono";

import Layout from "@/components/Layout";
// import UppercaseLabel from "@/components/UppercaseLabel";
import * as routes from "@/routes";
// import request from "@/utils/request";
import handleException from "@/utils/handle-exception";
import ssrUser from "@/utils/ssr-user";
import * as authManager from "@/auth-manager";

// We're referring to the currently viewed user, as the viewUser
const ViewUser = () => {
	const [css, theme] = useStyletron();
	// const [user, isUserLoading] = useUser();
	// const [isLoading, setLoading] = useState(false);
	// const [viewUser, setViewUser] = useState();

	return (
		<Layout>
			<div
				id="callsesh-view-user"
				className={css({
					width: "100%",
					maxWidth: "1000px",
					margin: "0 auto",
					padding: "0 20px 50px 20px",
					[theme.mediaQuery.maxSmall]: {
						paddingLeft: "0px",
						paddingRight: "0px"
					}
				})}
			>
				<div>Hello World</div>
			</div>
		</Layout>
	);
};

export function getServerSideProps({
	req,
	res,
	query: { return_url: returnUrl = "/", id: username }
}) {
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

		// Get view user data.
		if (isEmpty(username)) {
			// See: https://github.com/zeit/next.js/issues/3362 for managing error pages.
			return {
				props: {
					user,
					view: {},
					error: {
						code: 404,
						message: "Not Found"
					}
				}
			};
		}
		// Search users by username in user_metadata
		const users = await authManager.getClient().getUsers({
			search_engine: "v3",
			page: 0,
			per_page: 10,
			q: `user_metadata.username:"${username}"`,
			fields: ["created_at"].join(",")
		});
		if (isEmpty(users)) {
			return {
				props: {
					user,
					view: {},
					error: {
						code: 404,
						message: "Not Found"
					}
				}
			};
		}
		if (users.length > 1) {
			// There are multiple responses for the same username
			const errMessage = "Multiple users for username";
			const err = new Error(errMessage);
			handleException(ono(err, { username }));
			return {
				props: {
					user,
					view: {},
					error: {
						code: 500,
						message: errMessage
					}
				}
			};
		}

		console.log(users);
		// const [viewUser] = user;

		// const [{ user_metadata: userMetadata,
		// 	app_metadata: appMetadata, ...userData }, roles] = await Promise.all([authManager.getUser(viewUserId), authManager.getUserRoles(viewUserId)]);

		// const view = {
		// 	...pickBy(mapKeys(userData, (value, key) => camelCase(key)), (value, key) => ),
		// 	roles: roles.map((role) => ({
		// 		name: role.name,
		// 		description: role.description
		// 	}))
		// }

		// If user not found, redirect to 404.

		return {
			props: {
				user,
				view: {},
				error: {}
			}
		};
	});
}

export default ViewUser;

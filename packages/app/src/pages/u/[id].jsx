/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

// import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import isEmpty from "is-empty";
import ono from "@jsdevtools/ono";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import ArrowLeft from "baseui/icon/arrow-left";
import Link from "next/link";

import Layout from "@/components/Layout";
import InlineErrorPage from "@/components/InlineErrorPage";
import * as routes from "@/routes";
// import request from "@/utils/request";
import handleException from "@/utils/handle-exception";
import ssrUser from "@/utils/ssr-user";
import * as authManager from "@/auth-manager";
import { UserProps } from "@/utils/common-prop-types";
import ScreenContainer from "@/components/ScreenContainer";

// We're referring to the currently viewed user, as the viewUser
const ViewUser = ({ user, view, error }) => {
	const [css, theme] = useStyletron();

	return (
		<Layout
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between"
			}}
		>
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
				{isEmpty(error) ? (
					<div>Hello World</div>
				) : (
					<div>
						<InlineErrorPage statusCode={error.code} title={error.message} />
						<div className={css({ textAlign: "center", marginTop: "30px" })}>
							<Link href={routes.page.index}>
								<Button
									startEnhancer={() => <ArrowLeft size={22} />}
									kind={BUTTON_KIND.secondary}
								>
									Back to Callsesh
								</Button>
							</Link>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
};

ViewUser.propTypes = {
	user: UserProps,
	view: PropTypes.shape({}),
	error: PropTypes.shape({
		code: PropTypes.number,
		message: PropTypes.string
	})
};

ViewUser.defaultProps = {
	user: {},
	view: {},
	error: {
		code: 404,
		message: "This user cannot be found"
	}
};

export async function getServerSideProps({
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
		fields: ["created_at"].join(",")
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

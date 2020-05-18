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
import { Grid, Cell } from "baseui/layout-grid";
import * as yup from "yup";
import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";
import { Avatar } from "baseui/avatar";
import { H1 as Heading, Paragraph2 as Paragraph } from "baseui/typography";
import { ArrowRight } from "react-feather";

import Layout from "@/components/Layout";
import InlineErrorPage from "@/components/InlineErrorPage";
import Highlight from "@/components/Highlight";
import * as routes from "@/routes";
// import request from "@/utils/request";
import handleException from "@/utils/handle-exception";
import ssrUser from "@/utils/ssr-user";
import * as authManager from "@/auth-manager";
import { UserProps } from "@/utils/common-prop-types";
import isUserOperator from "@/utils/is-operator";

// We're referring to the currently viewed user, as the viewUser
const ViewUser = ({ user, viewUser, error }) => {
	const [css] = useStyletron();
	const isAuthenticated = !isEmpty(user);
	const isSameUser = isAuthenticated
		? user.username === viewUser.username
		: false;

	const isOperator = isUserOperator(viewUser);

	let ownerPronoun = "They're";
	if (viewUser.gender.toLowerCase() === "male") {
		ownerPronoun = "He's";
	} else if (viewUser.gender.toLowerCase() === "female") {
		ownerPronoun = "She's";
	}

	const minuteRate = (parseFloat(viewUser.hourlyRate) / 60).toFixed(2);

	return (
		<Layout>
			<div id="callsesh-view-user">
				{isEmpty(error) ? (
					<div>
						<Grid>
							<Cell span={12}>
								<div className={css({ display: "flex", alignItems: "center" })}>
									<div className={css({ marginRight: "20px" })}>
										<Avatar
											name={user.nickname}
											size="scale4800"
											src={
												user.picture.indexOf("auth0.com") > -1
													? null
													: user.picture
											}
										/>
									</div>
									<div className={css({})}>
										<Heading>
											<strong className={css({ fontWeight: "900" })}>
												Meet {viewUser.givenName}!
											</strong>{" "}
											{ownerPronoun}{" "}
											{isOperator ? (
												<span>
													offering{" "}
													<Highlight noBreak>{viewUser.purpose}</Highlight> over
													a phone call for{" "}
													<Highlight noBreak>${minuteRate}/minute</Highlight>
												</span>
											) : (
												<span>making calls on Callsesh. You can too!</span>
											)}
										</Heading>
									</div>
								</div>
								<div>
									{isOperator ? (
										<div></div>
									) : (
										<div>
											<Link href={routes.page.signup}>
												<Button endEnhancer={() => <ArrowRight size={22} />}>
													Get Started
												</Button>
											</Link>
										</div>
									)}
								</div>
							</Cell>
						</Grid>
					</div>
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
	viewUser: PropTypes.shape({
		createdAt: PropTypes.string,
		picture: PropTypes.string,
		givenName: PropTypes.string,
		familyName: PropTypes.string,
		username: PropTypes.string,
		nickname: PropTypes.string,
		name: PropTypes.string,
		country: PropTypes.string,
		currency: PropTypes.string,
		dob: PropTypes.string,
		gender: PropTypes.string,
		hourlyRate: PropTypes.string,
		messageBroadcast: PropTypes.string,
		purpose: PropTypes.string,
		isLive: PropTypes.bool,
		profilePicture: PropTypes.object,
		roles: PropTypes.arrayOf(
			PropTypes.shape({ name: PropTypes.string, description: PropTypes.string })
		)
	}),
	error: PropTypes.shape({
		code: PropTypes.number,
		message: PropTypes.string
	})
};

ViewUser.defaultProps = {
	user: {},
	viewUser: {},
	error: {
		code: 404,
		message: "This user cannot be found"
	}
};

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

export default ViewUser;

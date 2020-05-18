/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useCallback } from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import isEmpty from "is-empty";
import ono from "@jsdevtools/ono";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import Link from "next/link";
import { Grid, Cell } from "baseui/layout-grid";
import * as yup from "yup";
import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";
import { Avatar } from "baseui/avatar";
import {
	H1 as Heading,
	ParagraphMedium as Paragraph,
	// ParagraphXSmall,
	Label1 as Label
} from "baseui/typography";
import ArrowLeft from "baseui/icon/arrow-left";
import ArrowRight from "baseui/icon/arrow-right";
import {
	MessageCircle as MessageIcon,
	PhoneCall as PhoneIcon,
	User as UserIcon,
	Calendar as CalendarIcon,
	Map as MapIcon,
	Lock as LockIcon
} from "react-feather";
import nl2br from "nl2br";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";
import { getName } from "country-list";

import Layout from "@/components/Layout";
import InlineErrorPage from "@/components/InlineErrorPage";
import ScreenContainer from "@/components/ScreenContainer";
import Highlight from "@/components/Highlight";
import Card from "@/components/Card";
import * as routes from "@/routes";
// import request from "@/utils/request";
import handleException from "@/utils/handle-exception";
import ssrUser from "@/utils/ssr-user";
import * as authManager from "@/auth-manager";
import { UserProps } from "@/utils/common-prop-types";
import isUserOperator from "@/utils/is-operator";

const listItemProps = {
	artworkSize: ARTWORK_SIZES.MEDIUM,
	overrides: {
		Root: {
			style: {
				backgroundColor: "transparent",
				marginTop: "10px",
				marginBottom: "10px"
			}
		},
		ArtworkContainer: {
			style: {
				paddingBottom: "10px"
			}
		},
		Content: {
			style: {
				height: "auto",
				paddingBottom: "10px",
				flexWrap: "wrap"
			}
		}
	}
};

// We're referring to the currently viewed user, as the viewUser
const ViewUser = ({ user, viewUser, error }) => {
	const [css, theme] = useStyletron();
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
	console.log(viewUser.createdAt);
	const memberSince = new Intl.DateTimeFormat("en-US", {
		month: "long",
		year: "numeric"
	}).format(new Date(viewUser.createdAt));
	console.log(memberSince);

	const startCallSession = useCallback(() => {
		// Start Call Session between user and viewUser
	}, [user, viewUser]);

	return (
		<Layout>
			<ScreenContainer id="callsesh-view-user">
				{isEmpty(error) ? (
					<div>
						<Grid>
							<Cell span={12}>
								<div
									className={css({
										display: "flex",
										alignItems: "center",
										marginTop: "10px",
										marginBottom: "10px",
										[theme.mediaQuery.maxSmall]: {
											flexDirection: "column",
											alignItems: "flex-start"
										}
									})}
								>
									<div
										className={css({
											marginTop: "10px",
											marginBottom: "10px",
											marginRight: "30px"
										})}
									>
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
									<div>
										<Heading marginTop="0px" marginBottom="10px">
											<strong className={css({ fontWeight: "900" })}>
												Meet {viewUser.givenName}!
											</strong>
											<br />
											{ownerPronoun}{" "}
											{isOperator ? (
												<span>
													offering <Highlight>{viewUser.purpose}</Highlight>{" "}
													over a phone call for{" "}
													<Highlight noBreak>${minuteRate}/minute</Highlight>
												</span>
											) : (
												<span>making calls on Callsesh. You can too!</span>
											)}
										</Heading>
									</div>
								</div>
							</Cell>
						</Grid>
						{isOperator ? (
							<div className={css({ display: "flex" })}>
								<div className={css({ width: "calc(100% - 400px)" })}>
									<div className={css({ marginBottom: "20px" })}>
										<Card
											title="About me"
											icon={UserIcon}
											overrides={{
												Root: {
													style: {
														borderRight: "0px",
														borderLeft: "0px",
														borderBottom: "0px"
													}
												}
											}}
										>
											<ListItem artwork={CalendarIcon} {...listItemProps}>
												<ListItemLabel>
													<Paragraph margin="0px">
														Member since {memberSince}
													</Paragraph>
												</ListItemLabel>
											</ListItem>
											<ListItem artwork={MapIcon} {...listItemProps}>
												<ListItemLabel>
													<Paragraph margin="0px">
														Based in {getName(user.country)}
													</Paragraph>
												</ListItemLabel>
											</ListItem>
										</Card>
									</div>
									<div>
										<Card
											title="A message from me"
											icon={MessageIcon}
											overrides={{
												Root: {
													style: {
														borderRight: "0px",
														borderLeft: "0px",
														borderBottom: "0px"
													}
												}
											}}
										>
											<Paragraph
												margin="0"
												dangerouslySetInnerHTML={{
													__html: nl2br(viewUser.messageBroadcast)
												}}
											/>
										</Card>
									</div>
								</div>
								<div className={css({ width: "400px" })}>
									<Card>
										<div className={css({ marginBotton: "10px" })}>
											<Label>
												{user.isLive ? (
													<span>
														<strong>{user.givenName} is live!</strong>
													</span>
												) : (
													<span>
														<strong>{user.givenName} is not available.</strong>{" "}
														Check back another time or follow their socials for
														an announcement on when they will be live.
													</span>
												)}
											</Label>
										</div>
										{!isAuthenticated && (
											<Link
												href={routes.page.signup}
												style={{ textDecoration: "none" }}
											>
												<Button
													startEnhancer={() => <LockIcon size={22} />}
													endEnhancer={() => <ArrowRight size={22} />}
												>
													Sign in to call {user.givenName}
												</Button>
											</Link>
										)}
										{isAuthenticated && user.isLive && (
											<Button
												startEnhancer={() => <PhoneIcon size={22} />}
												disabled={isSameUser}
												onClick={startCallSession}
											>
												Call {user.givenName} for ${minuteRate}/minute
											</Button>
										)}
									</Card>
								</div>
							</div>
						) : (
							<Grid>
								<Cell span={12}>
									<Paragraph>
										Get expertise, advice, guidance, or companionship over a
										phone call using Callsesh, or become an operator and make
										money offering the world your unique take.
									</Paragraph>
									<div>
										<Link href={routes.page.signup}>
											<Button
												endEnhancer={() => <ArrowRight size={22} />}
												disabled={isSameUser}
											>
												Get Started
											</Button>
										</Link>
									</div>
								</Cell>
							</Grid>
						)}
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
			</ScreenContainer>
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

/**
 * Page to modify profile details
 * Includes operator settings if user is an operator.
 */

import { useCallback } from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import isEmpty from "is-empty";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import Link from "next/link";
import { Grid, Cell } from "baseui/layout-grid";
import { Avatar } from "baseui/avatar";
import {
	H1 as Heading,
	ParagraphMedium as Paragraph,
	Label1 as Label,
	ParagraphXSmall
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
import { FixedBottom } from "react-fixed-bottom";
import { Card as BaseCard, StyledBody, StyledAction } from "baseui/card";

import Layout from "@/components/Layout";
import InlineErrorPage from "@/components/InlineErrorPage";
import ScreenContainer from "@/components/ScreenContainer";
import Highlight from "@/components/Highlight";
import Card from "@/components/Card";
import * as routes from "@/routes";
// import request from "@/utils/request";
import { UserProps } from "@/utils/common-prop-types";
import isUserOperator from "@/utils/is-operator";
import getServerSideProps from "./_[id]-ssr";

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
				paddingBottom: "10px",
				paddingLeft: "0px !important"
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
	const memberSince = new Intl.DateTimeFormat("en-US", {
		month: "long",
		year: "numeric"
	}).format(new Date(viewUser.createdAt));

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
											alignItems: "flex-start",
											marginBottom: "50px"
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
											name={viewUser.nickname}
											size="scale4800"
											src={
												viewUser.picture.indexOf("auth0.com") > -1
													? null
													: viewUser.picture
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
							<Grid gridGutters="0px">
								<Cell span={[12, 5, 8]}>
									<div className={css({ marginBottom: "20px" })}>
										<Card
											title="About me"
											icon={UserIcon}
											overrides={{
												Root: {
													style: {
														borderRightWidth: "0px",
														borderLeftWidth: "0px",
														borderBottomWidth: "0px"
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
														Based in {getName(viewUser.country)}
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
														borderRightWidth: "0px",
														borderLeftWidth: "0px",
														borderBottomWidth: "0px"
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
								</Cell>
								<Cell span={[12, 3, 4]}>
									<FixedBottom>
										<div
											className={css({
												position: "relative !important",
												[theme.mediaQuery.maxSmall]: {
													position: "fixed !important",
													left: "0",
													right: "0",
													bottom: "0",
													zIndex: "100",
													borderRight: "0",
													borderBottom: "0",
													borderLeft: "0",
													backgroundColor: "#fff"
												}
											})}
										>
											<BaseCard
												overrides={{
													Root: {
														style: {
															[theme.mediaQuery.maxSmall]: {
																borderRightWidth: "0px",
																borderLeftWidth: "0px",
																borderBottomWidth: "0px"
															}
														}
													}
												}}
											>
												<StyledBody>
													{viewUser.isLive ? (
														<Label>
															<strong>{viewUser.givenName} is live!</strong>
														</Label>
													) : (
														<div>
															<Label>
																<strong>
																	{viewUser.givenName} is not available.
																</strong>
															</Label>
															<ParagraphXSmall
																marginTop="5px"
																marginBottom="0px"
															>
																Check back another time or follow their socials
																for an announcement on when they will be live.
															</ParagraphXSmall>
														</div>
													)}
												</StyledBody>
												<StyledAction>
													{!isAuthenticated && (
														<Link
															href={routes.page.signup}
															style={{ textDecoration: "none" }}
														>
															<Button
																startEnhancer={() => <LockIcon size={22} />}
																endEnhancer={() => <ArrowRight size={22} />}
															>
																Sign in to call {viewUser.givenName}
															</Button>
														</Link>
													)}
													{isAuthenticated && viewUser.isLive && (
														<Button
															startEnhancer={() => <PhoneIcon size={22} />}
															disabled={isSameUser}
															onClick={startCallSession}
														>
															Call {viewUser.givenName} for ${minuteRate}/minute
														</Button>
													)}
												</StyledAction>
											</BaseCard>
										</div>
									</FixedBottom>
								</Cell>
							</Grid>
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

export { getServerSideProps };

export default ViewUser;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import {
	Label1 as Label,
	ParagraphSmall,
	H2 as Heading,
	ParagraphLarge,
	ParagraphMedium as Paragraph
} from "baseui/typography";
import { Card as BaseCard, StyledBody, StyledAction } from "baseui/card";
import ArrowRight from "baseui/icon/arrow-right";
import {
	Button,
	SIZE as BUTTON_SIZE,
	KIND as BUTTON_KIND,
	SHAPE as BUTTON_SHAPE
} from "baseui/button";
import {
	PhoneCall as PhoneIcon,
	PhoneOff as PhoneUnavailableIcon,
	Lock as LockIcon,
	Bell as NotifyIcon,
	BellOff as RemoveNotifyIcon,
	XCircle as StopWorkIcon,
	Briefcase as StartWorkIcon
} from "react-feather";
import isEmpty from "is-empty";
import { Drawer } from "baseui/drawer";
import Check from "baseui/icon/check";

import * as fees from "@/utils/fees";
import useUser from "@/frontend/hooks/use-user";
import Link from "@/frontend/components/Link";
import Highlight from "@/frontend/components/Highlight";
import { ViewUserProps } from "@/frontend/utils/common-prop-types";
import checkCallSession from "@/utils/check-call-session";
import getUserPronoun from "@/utils/get-user-pronoun";
import appendReturnUrl from "@/frontend/utils/append-return-url";
import * as routes from "@/routes";

import ActionTags from "./ActionTags";

const ViewUserOperatorAction = ({
	viewUser,
	onStart,
	onToggleNotify,
	onToggleWork
}) => {
	const [css, theme] = useStyletron();
	const [user] = useUser();
	const [isStarting, setStarting] = useState(false);
	const [isTogglingNotify, setTogglingNotify] = useState(false);
	const [isTogglingWork, setTogglingWork] = useState(false);
	const [isWorkDrawerOpen, setWorkDrawerOpen] = useState(false);

	const isAuthenticated = !isEmpty(user);
	const isSameUser = isAuthenticated
		? user.username === viewUser.username
		: false;
	const {
		isCaller: inSession,
		isOperator: viewUserInSession,
		isSame: inSessionWithViewUser
	} = checkCallSession(user, viewUser);

	const rate = fees.getRate(viewUser.hourlyRate);
	const minuteRate = rate.toMinute().toString();
	const hourRate = rate.toHour().toString();
	const viewUserPronoun = getUserPronoun(viewUser);
	const isNotified = (viewUser.notified || []).includes(user.username);
	const isWorkingContact = (viewUser.contacts || []).includes(user.username);

	const handleStart = () => {
		setStarting(true);
		return onStart(() => setStarting(false));
	};

	const handleToggleNotify = () => {
		setTogglingNotify(true);
		return onToggleNotify(() => setTogglingNotify(false));
	};

	const handleToggleWork = () => {
		setTogglingWork(true);
		return onToggleWork(() => {
			setWorkDrawerOpen(false);
			setTogglingWork(false);
		});
	};

	const handleStartWork = () => {
		setWorkDrawerOpen(true);
	};

	return (
		<div
			className={css({
				maxWidth: "500px",
				margin: "0 auto",
				[theme.mediaQuery.maxSmall]: {
					maxWidth: "none"
				}
			})}
		>
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
						backgroundColor: "#fff",
						paddingBottom: "10px", // Padding prevent mobile UI covering content
						boxShadow: `0px 14px 60px -12px rgba(50, 50, 93, 0.45), 0 0 36px -18px rgba(0, 0, 0, 0.3), 0 5px 36px -8px rgba(0, 0, 0, 0.025)`
					}
				})}
			>
				<BaseCard
					overrides={{
						Root: {
							style: {
								borderTopLeftRadius: theme.borders.radius300,
								borderTopRightRadius: theme.borders.radius300,
								borderBottomLeftRadius: theme.borders.radius300,
								borderBottomRightRadius: theme.borders.radius300,
								[theme.mediaQuery.maxSmall]: {
									borderRightWidth: "0px",
									borderLeftWidth: "0px",
									borderBottomWidth: "0px",
									borderRadius: "0px"
								}
							}
						}
					}}
				>
					<StyledBody className={css({ marginBottom: theme.sizing.scale200 })}>
						{viewUser.isLive && inSessionWithViewUser && (
							<div>
								<Label>
									<Highlight type="positive">
										You&apos;re in call session with {viewUser.givenName}
									</Highlight>
								</Label>
							</div>
						)}
						{viewUser.isLive && !inSessionWithViewUser && (
							<div>
								<Label>
									<Highlight>{viewUser.givenName} is live!</Highlight>
								</Label>
							</div>
						)}
						{!viewUser.isLive && isAuthenticated && (
							<div>
								<Label>
									<strong>{viewUser.givenName} is not available.</strong>
								</Label>
								<ParagraphSmall marginTop="5px" marginBottom="0px">
									Get email notifications using the button below or follow their
									socials for an announcement.
								</ParagraphSmall>
							</div>
						)}
					</StyledBody>
					<StyledAction>
						{!isAuthenticated && (
							<Link href={appendReturnUrl(routes.page.signup, true)} button>
								<Button
									startEnhancer={() => <LockIcon size={20} />}
									endEnhancer={() => <ArrowRight size={20} />}
									overrides={{
										BaseButton: {
											style: {
												width: "100%"
											}
										}
									}}
								>
									Sign up to call {viewUser.givenName}
								</Button>
							</Link>
						)}
						{isAuthenticated && viewUser.isLive && (
							<div>
								<ActionTags currency={viewUser.currency} />
								<Button
									startEnhancer={
										viewUserInSession && !inSessionWithViewUser
											? () => <PhoneUnavailableIcon size={20} />
											: () => <PhoneIcon size={20} />
									}
									disabled={
										// Disabled when user looking at their own profile
										// User in session, but new with view user
										// View user in session but not with user.
										// Means, if user and viewuser are in a session, together, this button is available.
										isSameUser ||
										(inSession && !inSessionWithViewUser) ||
										(viewUserInSession && !inSessionWithViewUser)
									}
									onClick={handleStart}
									overrides={{
										BaseButton: {
											style: {
												width: "100%",
												pointerEvents: isStarting ? "none" : "auto"
											}
										}
									}}
									isLoading={isStarting}
								>
									{viewUserInSession && !inSessionWithViewUser ? (
										<span>Currently in a call. Check in later.</span>
									) : (
										<span>
											Call {viewUser.givenName} for {minuteRate}
											/minute
										</span>
									)}
								</Button>
							</div>
						)}
						<div className={css({ marginTop: "10px", textAlign: "center" })}>
							<Button
								startEnhancer={
									isWorkingContact
										? () => <StopWorkIcon size={20} />
										: () => <StartWorkIcon size={20} />
								}
								onClick={isWorkingContact ? handleToggleWork : handleStartWork}
								overrides={{
									BaseButton: {
										style: {
											width: "100%",
											pointerEvents: isTogglingWork ? "none" : "auto",
											paddingRight: "20px",
											paddingLeft: "20px",
											...(isWorkingContact
												? {
														backgroundColor: theme.colors.negative,
														":hover": {
															backgroundColor: theme.colors.negative500
														}
												  }
												: {})
										}
									}
								}}
								isLoading={isTogglingWork}
								kind={
									isWorkingContact ? BUTTON_KIND.primary : BUTTON_KIND.secondary
								}
							>
								{isWorkingContact ? (
									<span>Stop working with {viewUser.givenName}</span>
								) : (
									<span>Work with {viewUser.givenName}</span>
								)}
							</Button>
						</div>
					</StyledAction>
				</BaseCard>
			</div>
			{isAuthenticated && !isSameUser && (
				<div className={css({ marginTop: "10px", textAlign: "center" })}>
					<Button
						startEnhancer={
							isNotified
								? () => <RemoveNotifyIcon size={20} />
								: () => <NotifyIcon size={20} />
						}
						onClick={handleToggleNotify}
						overrides={{
							BaseButton: {
								style: {
									pointerEvents: isTogglingNotify ? "none" : "auto",
									paddingRight: "20px",
									paddingLeft: "20px"
								}
							}
						}}
						isLoading={isTogglingNotify}
						size={BUTTON_SIZE.compact}
						kind={isNotified ? BUTTON_KIND.primary : BUTTON_KIND.secondary}
						shape={BUTTON_SHAPE.pill}
					>
						{isNotified ? (
							<span>Stop notifications</span>
						) : (
							<span>Get notified</span>
						)}
					</Button>
				</div>
			)}
			{/* Work Drawer */}
			<Drawer
				isOpen={isWorkDrawerOpen}
				autoFocus
				onClose={() => setWorkDrawerOpen(false)}
				overrides={{
					DrawerBody: {
						style: {
							maxWidth: "100%"
						}
					}
				}}
			>
				<div className={css({ padding: "20px 0" })}>
					<Heading className={css({ marginTop: "0px" })}>
						<strong className={css({ fontWeight: "900" })}>
							Work with {viewUser.givenName}
						</strong>
					</Heading>
					<ParagraphLarge>
						Grant {viewUser.givenName} permission to create metered call
						sessions with you whenever {viewUserPronoun.toLowerCase()} working
						on your tasks.
					</ParagraphLarge>
					<ul className={css({ margin: "10px", paddingLeft: "20px" })}>
						<li>
							<ParagraphSmall>
								You will be notified when a call session starts with the option
								to cancel and stop working with {viewUser.givenName}.
							</ParagraphSmall>
						</li>
						<li>
							<ParagraphSmall>
								The service fee will apply per session created
							</ParagraphSmall>
						</li>
						<li>
							<ParagraphSmall>
								You will not be charged until a call session is complete
							</ParagraphSmall>
						</li>
					</ul>
					<div className={css({ marginTop: "40px" })}>
						<ParagraphLarge className={css({ marginBottom: "10px" })}>
							Rate:{" "}
							<strong className={css({ fontWeight: "900" })}>
								{hourRate}/hour
							</strong>
						</ParagraphLarge>
						<ActionTags currency={viewUser.currency} />
						{isAuthenticated ? (
							<Button
								endEnhancer={<Check size={24} />}
								onClick={handleToggleWork}
								overrides={{
									BaseButton: {
										style: {
											pointerEvents: isTogglingWork ? "none" : "auto"
										}
									}
								}}
								isLoading={isTogglingWork}
								size={BUTTON_SIZE.large}
							>
								{isWorkingContact ? (
									<span>Stop working with {viewUser.givenName}</span>
								) : (
									<span>Work with {viewUser.givenName}</span>
								)}
							</Button>
						) : (
							<Link href={appendReturnUrl(routes.page.signup, true)} button>
								<Button
									startEnhancer={() => <LockIcon size={20} />}
									endEnhancer={() => <ArrowRight size={20} />}
									size={BUTTON_SIZE.large}
								>
									Sign up to work with {viewUser.givenName}
								</Button>
							</Link>
						)}
					</div>
				</div>
			</Drawer>
		</div>
	);
};

ViewUserOperatorAction.propTypes = {
	viewUser: ViewUserProps.isRequired,
	onStart: PropTypes.func,
	onToggleNotify: PropTypes.func,
	onToggleWork: PropTypes.func
};

ViewUserOperatorAction.defaultProps = {
	onStart() {},
	onToggleNotify() {},
	onToggleWork() {}
};

export default ViewUserOperatorAction;

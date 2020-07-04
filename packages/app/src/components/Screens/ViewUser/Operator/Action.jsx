import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";
import { Label1 as Label, ParagraphXSmall } from "baseui/typography";
import { Card as BaseCard, StyledBody, StyledAction } from "baseui/card";
import ArrowRight from "baseui/icon/arrow-right";
import { Button } from "baseui/button";
import {
	PhoneCall as PhoneIcon,
	PhoneOff as PhoneUnavailableIcon,
	Lock as LockIcon
} from "react-feather";
import isEmpty from "is-empty";
import * as fees from "@callsesh/utils/fees";

import useUser from "@/hooks/use-user";
import Link from "@/components/Link";
import Highlight from "@/components/Highlight";
import EnsureVerified from "@/components/EnsureVerified";
import { ViewUserProps } from "@/utils/common-prop-types";
import * as routes from "@/routes";
import { CALL_SESSION_USER_TYPE } from "@/constants";

const ViewUserOperatorAction = ({ viewUser, onStart, isStarting }) => {
	const [css, theme] = useStyletron();
	const [user] = useUser();

	const isAuthenticated = !isEmpty(user);
	const isSameUser = isAuthenticated
		? user.username === viewUser.username
		: false;
	const inSession = !isEmpty(user.callSession);
	const viewUserInSession = !isEmpty(viewUser.callSession);
	const inSessionWithViewUser =
		viewUserInSession &&
		inSession &&
		viewUser.callSession.with === user.username &&
		user.callSession.with === viewUser.username &&
		viewUser.callSession.as === CALL_SESSION_USER_TYPE.operator &&
		user.callSession.as === CALL_SESSION_USER_TYPE.caller;

	const minuteRate = fees.getMinuteRate(viewUser.hourlyRate);

	return (
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
					paddingBottom: "10px" // Padding prevent mobile UI covering content
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
					{viewUser.isLive && inSessionWithViewUser && (
						<div>
							<Label>
								<Highlight type="positive">
									You&apos;re in call session with {viewUser.givenName}
								</Highlight>
								<ParagraphXSmall marginTop="5px" marginBottom="0px">
									The call session will end a minute after you hangup.
								</ParagraphXSmall>
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
					{!viewUser.isLive && (
						<div>
							<Label>
								<strong>{viewUser.givenName} is not available.</strong>
							</Label>
							<ParagraphXSmall marginTop="5px" marginBottom="0px">
								Check back another time or follow their socials for an
								announcement on when they will be live.
							</ParagraphXSmall>
						</div>
					)}
				</StyledBody>
				<StyledAction>
					{!isAuthenticated && (
						<Link href={routes.page.signup} button>
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
							<EnsureVerified>
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
										// isSameUser ||
										(inSession && !inSessionWithViewUser) ||
										(viewUserInSession && !inSessionWithViewUser)
									}
									onClick={onStart}
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
							</EnsureVerified>
							<ParagraphXSmall marginTop="5px" marginBottom="0px">
								A service fee of {fees.preAuthAmountText()} will be charged upon
								initiating the call. Additional charges will apply only for time
								spent in the call. Currency is in {viewUser.currency}.
							</ParagraphXSmall>
						</div>
					)}
				</StyledAction>
			</BaseCard>
		</div>
	);
};

ViewUserOperatorAction.propTypes = {
	viewUser: ViewUserProps.isRequired,
	onStart: PropTypes.func,
	isStarting: PropTypes.bool
};

ViewUserOperatorAction.defaultProps = {
	onStart() {},
	isStarting: false
};

export default ViewUserOperatorAction;

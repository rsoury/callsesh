import React, { useState } from "react";
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
import * as fees from "@/utils/fees";

import useUser from "@/hooks/use-user";
import Link from "@/components/Link";
import Highlight from "@/components/Highlight";
import { ViewUserProps } from "@/utils/common-prop-types";
import checkCallSession from "@/utils/check-call-session";
import * as routes from "@/routes";

const ViewUserOperatorAction = ({ viewUser, onStart }) => {
	const [css, theme] = useStyletron();
	const [user] = useUser();
	const [isStarting, setStarting] = useState(false);

	const isAuthenticated = !isEmpty(user);
	const isSameUser = isAuthenticated
		? user.username === viewUser.username
		: false;
	const {
		isCaller: inSession,
		isOperator: viewUserInSession,
		isSame: inSessionWithViewUser
	} = checkCallSession(user, viewUser);

	const minuteRate = fees.getMinuteRate(viewUser.hourlyRate);

	const handleStart = () => {
		setStarting(true);
		return onStart(() => setStarting(false));
	};

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
							<ParagraphXSmall marginTop="5px" marginBottom="0px">
								You will be charged for metered and talk duration.
								<br />A fee of {fees.preAuthAmountText()} will be charged on
								successful calls.
								<br />
								Call currency is in {viewUser.currency}.
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
	onStart: PropTypes.func
};

ViewUserOperatorAction.defaultProps = {
	onStart() {}
};

export default ViewUserOperatorAction;

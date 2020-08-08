import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import isEmpty from "is-empty";
import { useStyletron, withStyle } from "baseui";
import { Paragraph2 as Paragraph, ParagraphXSmall } from "baseui/typography";
import { StyledSpinnerNext, SIZE as SPINNER_SIZE } from "baseui/spinner";
import {
	Button,
	SHAPE as BUTTON_SHAPE,
	KIND as BUTTON_KIND
} from "baseui/button";
import { motion } from "framer-motion";
import {
	PhoneOff as EndSessionIcon,
	MessageSquare as ChatIcon,
	Clock as MeterIcon,
	PauseCircle as StopMeterIcon,
	Phone as CallIcon,
	XCircle as CancelSessionIcon
} from "react-feather";

import InSessionTopBar from "@/frontend/components/Header/InSessionTopBar";
import Layout from "@/frontend/components/Layout";
import { ViewUserProps } from "@/frontend/utils/common-prop-types";
import isUserOperator from "@/utils/is-operator";
import useUser from "@/frontend/hooks/use-user";
import { CALL_SESSION_STATUS } from "@/constants";
import Link from "@/frontend/components/Link";
import * as routes from "@/routes";

// import Notice from "./Notice";
import With from "./With";
import ActionButton from "./ActionButton";

const Spinner = withStyle(StyledSpinnerNext, {
	width: "40px",
	height: "40px"
});

// Basically a function to manage loading state for a handler.
const manageLoadingState = (handler, setLoadingState) => () => {
	setLoadingState(true);
	handler(() => setLoadingState(false));
};

const InSessionScreen = ({
	viewUser,
	onEndSession,
	onOpenChat,
	onCall,
	onToggleMeter
}) => {
	const [css, theme] = useStyletron();
	const [user] = useUser();
	const [isCalling, setCalling] = useState(false);
	const [isEndingSession, setEndingSession] = useState(false);
	const [isLoadingMeter, setLoadingMeter] = useState(false);
	const [isInitiated, setInitiated] = useState(false);

	const { callSession } = user;
	const isOperator = isUserOperator(user);

	const handleEndSession = manageLoadingState(onEndSession, setEndingSession);
	const handleOpenChat = onOpenChat;
	const handleCall = manageLoadingState(onCall, setCalling);
	const handleToggleMeter = manageLoadingState(onToggleMeter, setLoadingMeter);

	useEffect(() => {
		if (
			[
				CALL_SESSION_STATUS.active,
				CALL_SESSION_STATUS.inCall,
				CALL_SESSION_STATUS.metering
			].includes(callSession.status)
		) {
			setInitiated(true);
		}
	}, [callSession]);

	return (
		<Layout noHeader noFooter>
			<div
				id="callsesh-in-session"
				className={css({
					position: "relative",
					backgroundColor: "#fff"
				})}
			>
				<div
					className={css({
						position: "absolute",
						top: "0px",
						left: "0px",
						right: "0px",
						zIndex: "10"
					})}
				>
					<InSessionTopBar />
				</div>
				<div
					className={css({
						minHeight: "100vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						paddingLeft: "10px",
						paddingRight: "10px",
						[theme.mediaQuery.small]: {
							paddingTop: "12.5px"
						}
					})}
				>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<With name={viewUser.givenName} picture={viewUser.picture} />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.3
						}}
					>
						{isInitiated ? (
							<div
								className={css({
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexDirection: "column"
								})}
							>
								<div
									className={css({
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										flexDirection: "column",
										padding: "20px 0"
									})}
								>
									{isOperator && (
										<div
											className={css({
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												textAlign: "center",
												paddingBottom: "20px",
												width: "100%",
												marginBottom: "20px",
												borderBottom: `1px solid rgb(240, 240, 240)`
											})}
										>
											<ActionButton
												onClick={handleToggleMeter}
												startEnhancer={
													callSession.status === CALL_SESSION_STATUS.metering
														? () => <StopMeterIcon size={30} />
														: () => <MeterIcon size={26} />
												}
												variant={
													callSession.status === CALL_SESSION_STATUS.metering
														? "accent"
														: ""
												}
												retain
												isLoading={isLoadingMeter}
												disabled={isEndingSession}
											>
												{callSession.status === CALL_SESSION_STATUS.metering
													? `Stop the meter`
													: `Start the meter`}
											</ActionButton>
										</div>
									)}
									<div
										className={css({
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between"
										})}
									>
										<ActionButton
											onClick={handleEndSession}
											startEnhancer={() => <EndSessionIcon size={26} />}
											variant="negative"
											isLoading={isEndingSession}
										>
											End Session
										</ActionButton>
										<Link
											button
											standard
											newWindow
											href={`${routes.page.chat}?with=${viewUser.username}`}
											style={{
												pointerEvents: isEndingSession ? "none" : "auto"
											}}
										>
											<ActionButton
												onClick={handleOpenChat}
												startEnhancer={() => <ChatIcon size={26} />}
												disabled={isEndingSession}
											>
												Chat
											</ActionButton>
										</Link>
										<ActionButton
											onClick={handleCall}
											isLoading={isCalling}
											startEnhancer={() => <CallIcon size={26} />}
											disabled={
												callSession.status === CALL_SESSION_STATUS.inCall ||
												isEndingSession
											}
										>
											Call
										</ActionButton>
									</div>
								</div>
								{!isOperator && (
									<ParagraphXSmall>
										You will be charged for metered and talk duration.
									</ParagraphXSmall>
								)}
							</div>
						) : (
							<div
								className={css({
									textAlign: "center",
									maxWidth: "300px",
									margin: "0 auto",
									display: "flex",
									alignItems: "center",
									flexDirection: "column"
								})}
							>
								<Spinner $size={SPINNER_SIZE.large} />
								{isEmpty(callSession.status) && (
									<Paragraph
										marginTop="25px"
										color={theme.colors.contentTertiary}
									>
										<strong>Connecting to your session...</strong>
									</Paragraph>
								)}
								{callSession.status === CALL_SESSION_STATUS.pending && (
									<Paragraph
										marginTop="25px"
										color={theme.colors.contentTertiary}
									>
										<strong>
											Your call session has started.
											<br />
											{isOperator ? (
												<span>
													You are about to be called by {viewUser.givenName}!
												</span>
											) : (
												<span>
													You should receive an SMS with a phone number to call
													that will connect you to your operator.
												</span>
											)}
										</strong>
									</Paragraph>
								)}
								{callSession.status === CALL_SESSION_STATUS.ending && (
									<Paragraph
										marginTop="25px"
										color={theme.colors.contentTertiary}
									>
										<strong>Your call session is ending...</strong>
									</Paragraph>
								)}
								<div className={css({ marginTop: "10px" })}>
									<Button
										onClick={handleEndSession}
										startEnhancer={() => <CancelSessionIcon size={24} />}
										isLoading={isEndingSession}
										kind={BUTTON_KIND.secondary}
										shape={BUTTON_SHAPE.pill}
									>
										Cancel Session
									</Button>
								</div>
							</div>
						)}
					</motion.div>
				</div>
			</div>
		</Layout>
	);
};

InSessionScreen.propTypes = {
	viewUser: ViewUserProps.isRequired,
	onEndSession: PropTypes.func,
	onOpenChat: PropTypes.func,
	onCall: PropTypes.func,
	onToggleMeter: PropTypes.func
};

InSessionScreen.defaultProps = {
	onEndSession() {},
	onOpenChat() {},
	onCall() {},
	onToggleMeter() {}
};

export default InSessionScreen;

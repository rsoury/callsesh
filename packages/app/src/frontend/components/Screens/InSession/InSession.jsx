import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import isEmpty from "is-empty";
import { useStyletron, withStyle } from "baseui";
import { Paragraph2 as Paragraph, ParagraphXSmall } from "baseui/typography";
import { StyledSpinnerNext, SIZE as SPINNER_SIZE } from "baseui/spinner";
import { ProgressBar } from "baseui/progress-bar";
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
import Emoji from "@/frontend/components/Emoji";
import { ViewUserProps } from "@/frontend/utils/common-prop-types";
import useUser from "@/frontend/hooks/use-user";
import {
	CALL_SESSION_STATUS,
	CALL_SESSION_START_TIMEOUT,
	CALL_SESSION_USER_TYPE
} from "@/constants";
import Link from "@/frontend/components/Link";
import * as routes from "@/routes";
import isOperatorMeterActive from "@/utils/is-operator-meter-active";

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

let progress = null;

const InSessionScreen = ({
	viewUser,
	onEnd,
	onUndo,
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
	const [startProgressValue, setStartProgressValue] = useState(0);
	const [isMetering, setMetering] = useState(false);

	const { callSession } = user;
	const isOperator = callSession.as === CALL_SESSION_USER_TYPE.operator;

	const handleEndSession = manageLoadingState(onEnd, setEndingSession);
	const handleUndoSession = onUndo;
	const handleOpenChat = onOpenChat;
	const handleCall = manageLoadingState(onCall, setCalling);
	const handleToggleMeter = manageLoadingState(onToggleMeter, setLoadingMeter);

	useEffect(() => {
		progress = setInterval(() => {
			setStartProgressValue((value) => (value < 100 ? value + 1 : value));
		}, CALL_SESSION_START_TIMEOUT / 100);

		return () => {};
	}, []);

	useEffect(() => {
		if (!isEmpty(callSession.status) || startProgressValue >= 100) {
			clearInterval(progress);
		}
		if (
			[
				CALL_SESSION_STATUS.active,
				CALL_SESSION_STATUS.inCall,
				CALL_SESSION_STATUS.metering
			].includes(callSession.status)
		) {
			setInitiated(true);
		}

		return () => {};
	}, [callSession, startProgressValue, progress]);

	useEffect(() => {
		// If user is operator
		if (user.callSession.as === CALL_SESSION_USER_TYPE.operator) {
			console.log(user);
			console.log(
				isOperatorMeterActive(user) ? `METER IS ACTIVE` : `METER NOT ACTIVE`
			);
			setMetering(isOperatorMeterActive(user));
		}

		return () => {};
	}, [user]);

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
													isMetering
														? () => <StopMeterIcon size={30} />
														: () => <MeterIcon size={26} />
												}
												variant={isMetering ? "accent" : ""}
												retain
												isLoading={isLoadingMeter}
												disabled={isEndingSession}
											>
												{isMetering ? `Stop the meter` : `Start the meter`}
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
									margin: "0 auto"
								})}
							>
								{isEmpty(callSession.status) && (
									<motion.div
										animate={{ opacity: 1 }}
										initial={{ opacity: 0 }}
										className={css({
											display: "flex",
											alignItems: "center",
											flexDirection: "column"
										})}
									>
										{isOperator ? (
											<Spinner $size={SPINNER_SIZE.large} />
										) : (
											<ProgressBar
												value={startProgressValue}
												successValue={100}
											/>
										)}
										<Paragraph
											marginTop="25px"
											color={theme.colors.contentTertiary}
										>
											<strong>Connecting to your session...</strong>
										</Paragraph>
										{/* Remove Undo button if call session is about to start */}
										{!isOperator && startProgressValue < 100 && (
											<div className={css({ marginTop: "10px" })}>
												<Button
													onClick={handleUndoSession}
													startEnhancer={() => <CancelSessionIcon size={24} />}
													isLoading={isEndingSession}
													kind={BUTTON_KIND.secondary}
													shape={BUTTON_SHAPE.pill}
												>
													Undo
												</Button>
											</div>
										)}
									</motion.div>
								)}
								{callSession.status === CALL_SESSION_STATUS.pending && (
									<motion.div
										animate={{ opacity: 1 }}
										initial={{ opacity: 0 }}
										className={css({
											display: "flex",
											alignItems: "center",
											flexDirection: "column"
										})}
									>
										<Spinner $size={SPINNER_SIZE.large} />
										<Paragraph
											marginTop="25px"
											color={theme.colors.contentTertiary}
										>
											<strong>
												{isOperator ? (
													<span>
														You are about to be called by {viewUser.givenName}!
													</span>
												) : (
													<span>
														<Emoji label="phone" symbol="📞" />
														&nbsp;&nbsp;We&apos;ve sent you an SMS! Call the
														phone number to connect to your operator.
													</span>
												)}
											</strong>
										</Paragraph>
									</motion.div>
								)}
								{callSession.status === CALL_SESSION_STATUS.ending && (
									<Paragraph
										marginTop="25px"
										color={theme.colors.contentTertiary}
									>
										<strong>Your call session is ending...</strong>
									</Paragraph>
								)}
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
	onEnd: PropTypes.func,
	onUndo: PropTypes.func,
	onOpenChat: PropTypes.func,
	onCall: PropTypes.func,
	onToggleMeter: PropTypes.func
};

InSessionScreen.defaultProps = {
	onEnd() {},
	onUndo() {},
	onOpenChat() {},
	onCall() {},
	onToggleMeter() {}
};

export default InSessionScreen;

import React, { useCallback } from "react";
import isEmpty from "is-empty";
import { useStyletron, withStyle } from "baseui";
import { Avatar } from "baseui/avatar";
import {
	H1 as Heading,
	Paragraph2 as Paragraph,
	Label2 as Label,
	ParagraphXSmall
} from "baseui/typography";
import { StyledSpinnerNext, SIZE as SPINNER_SIZE } from "baseui/spinner";
import {
	Button,
	SHAPE as BUTTON_SHAPE,
	SIZE as BUTTON_SIZE
} from "baseui/button";
import { motion } from "framer-motion";
import {
	PhoneOff as EndSessionIcon,
	MessageSquare as ChatIcon,
	Clock as MeterIcon,
	PauseCircle as StopMeterIcon,
	Phone as CallIcon
} from "react-feather";

import InCallTopBar from "@/components/Header/InCallTopBar";
import UppercaseLabel from "@/components/UppercaseLabel";
import { ViewUserProps } from "@/utils/common-prop-types";
import isUserOperator from "@/utils/is-operator";
import useUser from "@/hooks/use-user";
import { CALL_SESSION_STATUS } from "@/constants";

const Spinner = withStyle(StyledSpinnerNext, {
	width: "40px",
	height: "40px"
});

const InSessionScreen = ({ viewUser }) => {
	const [css, theme] = useStyletron();
	const [user] = useUser();

	const { callSession } = user;
	const isPending = isEmpty(callSession.status);

	const handleEndSession = useCallback(() => {
		console.log("end session...");
	}, []);

	const handleOpenChat = useCallback(() => {
		console.log("open chat...");
	}, []);

	const handleCall = useCallback(() => {
		// Send an SMS and Toast when desktop, otherwise trigger tel:
		console.log("call...");
	}, []);

	const handleStartMeter = useCallback(() => {
		console.log("start meter...");
	}, []);

	const handleEndMeter = useCallback(() => {
		console.log("stop meter...");
	}, []);

	return (
		<main
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
				<InCallTopBar />
			</div>
			<div
				className={css({
					minHeight: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					[theme.mediaQuery.small]: {
						paddingTop: "12.5px"
					}
				})}
			>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className={css({ textAlign: "center" })}
				>
					<UppercaseLabel style={{ marginBottom: "10px", opacity: "0.3" }}>
						In session with
					</UppercaseLabel>
					<Avatar
						name={viewUser.nickname}
						size="scale4800"
						src={viewUser.picture}
					/>
					<Heading>
						<strong className={css({ fontWeight: 900 })}>
							{viewUser.nickname}
						</strong>
					</Heading>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3
					}}
				>
					{isPending ? (
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
							<Paragraph marginTop="25px" color={theme.colors.contentTertiary}>
								<strong>
									Your call session has started.
									<br />
									You should receive an SMS with a phone number to call that
									will connect you to your operator.
								</strong>
							</Paragraph>
						</div>
					) : (
						<div
							className={css({
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column"
							})}
						>
							{callSession.status === CALL_SESSION_STATUS.metering && (
								<div
									className={css({
										display: "inline-flex",
										alignItems: "center",
										color: theme.colors.accent,
										borderRadius: "20px"
									})}
								>
									<div
										className={css({
											display: "flex",
											padding: "10px",
											backgroundColor: theme.colors.accent100,
											borderRadius: "100px",
											marginRight: "10px"
										})}
									>
										<MeterIcon size={24} />
									</div>
									<Label>The meter is currently running</Label>
								</div>
							)}
							<div
								className={css({
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexDirection: "column",
									padding: "20px 0"
								})}
							>
								{isUserOperator(user) && (
									<div
										className={css({
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											paddingBottom: "20px"
										})}
									>
										<Button
											onClick={
												callSession.status === CALL_SESSION_STATUS.metering
													? handleEndMeter
													: handleStartMeter
											}
											size={BUTTON_SIZE.large}
											shape={BUTTON_SHAPE.pill}
											startEnhancer={
												callSession.status === CALL_SESSION_STATUS.metering
													? () => <StopMeterIcon size={30} />
													: () => <MeterIcon size={26} />
											}
											overrides={{
												BaseButton: {
													style: {
														margin: "0 20px",
														...(callSession.status ===
														CALL_SESSION_STATUS.metering
															? {
																	backgroundColor: theme.colors.accent,
																	":hover": {
																		backgroundColor: theme.colors.accent300
																	}
															  }
															: {})
													}
												}
											}}
										>
											<span
												className={css({
													paddingRight: "5px"
												})}
											>
												{callSession.status === CALL_SESSION_STATUS.metering
													? `Stop the meter`
													: `Keep the meter running`}
											</span>
										</Button>
										{callSession.status !== CALL_SESSION_STATUS.metering && (
											<ParagraphXSmall>
												Use to end the call and continue the session
											</ParagraphXSmall>
										)}
									</div>
								)}
								<div
									className={css({
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between"
									})}
								>
									<Button
										onClick={handleEndSession}
										size={BUTTON_SIZE.large}
										shape={BUTTON_SHAPE.pill}
										startEnhancer={() => <EndSessionIcon size={26} />}
										overrides={{
											BaseButton: {
												style: {
													margin: "0 20px",
													backgroundColor: theme.colors.negative,
													":hover": {
														backgroundColor: theme.colors.negative300
													},
													[theme.mediaQuery.maxSmall]: {
														width: "70px",
														height: "70px"
													}
												}
											},
											StartEnhancer: {
												style: {
													[theme.mediaQuery.maxSmall]: {
														marginRight: "0px"
													}
												}
											}
										}}
									>
										<span
											className={css({
												paddingRight: "5px",
												[theme.mediaQuery.maxSmall]: {
													display: "none"
												}
											})}
										>
											End Session
										</span>
									</Button>
									<Button
										onClick={handleOpenChat}
										size={BUTTON_SIZE.large}
										shape={BUTTON_SHAPE.pill}
										startEnhancer={() => <ChatIcon size={26} />}
										overrides={{
											BaseButton: {
												style: {
													margin: "0 20px",
													[theme.mediaQuery.maxSmall]: {
														width: "70px",
														height: "70px"
													}
												}
											},
											StartEnhancer: {
												style: {
													[theme.mediaQuery.maxSmall]: {
														marginRight: "0px"
													}
												}
											}
										}}
									>
										<span
											className={css({
												paddingRight: "5px",
												[theme.mediaQuery.maxSmall]: {
													display: "none"
												}
											})}
										>
											Chat
										</span>
									</Button>
									<Button
										onClick={handleCall}
										size={BUTTON_SIZE.large}
										shape={BUTTON_SHAPE.pill}
										startEnhancer={() => <CallIcon size={26} />}
										overrides={{
											BaseButton: {
												style: {
													margin: "0 20px",
													[theme.mediaQuery.maxSmall]: {
														width: "70px",
														height: "70px"
													}
												}
											},
											StartEnhancer: {
												style: {
													[theme.mediaQuery.maxSmall]: {
														marginRight: "0px"
													}
												}
											}
										}}
									>
										<span
											className={css({
												paddingRight: "5px",
												[theme.mediaQuery.maxSmall]: {
													display: "none"
												}
											})}
										>
											Call
										</span>
									</Button>
								</div>
							</div>
						</div>
					)}
				</motion.div>
			</div>
		</main>
	);
};

InSessionScreen.propTypes = {
	viewUser: ViewUserProps.isRequired
};

export default InSessionScreen;

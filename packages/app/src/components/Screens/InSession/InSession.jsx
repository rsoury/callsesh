import React, { useCallback, useState } from "react";
import isEmpty from "is-empty";
import { useStyletron, withStyle } from "baseui";
import { Paragraph2 as Paragraph, ParagraphXSmall } from "baseui/typography";
import { StyledSpinnerNext, SIZE as SPINNER_SIZE } from "baseui/spinner";
import { toaster } from "baseui/toast";
import { motion } from "framer-motion";
import {
	PhoneOff as EndSessionIcon,
	MessageSquare as ChatIcon,
	Clock as MeterIcon,
	PauseCircle as StopMeterIcon,
	Phone as CallIcon,
	Info as InfoIcon
} from "react-feather";
import MobileDetect from "mobile-detect";
import { KIND as NOTIFICATION_KIND } from "baseui/notification";

import InCallTopBar from "@/components/Header/InCallTopBar";
import Notice from "@/components/Notice";
import { ViewUserProps } from "@/utils/common-prop-types";
import isUserOperator from "@/utils/is-operator";
import useUser from "@/hooks/use-user";
import request from "@/utils/request";
import { CALL_SESSION_STATUS } from "@/constants";
import * as routes from "@/routes";

// import Notice from "./Notice";
import With from "./With";
import ActionButton from "./ActionButton";

const Spinner = withStyle(StyledSpinnerNext, {
	width: "40px",
	height: "40px"
});

const InSessionScreen = ({ viewUser }) => {
	const [css, theme] = useStyletron();
	const [user] = useUser();
	const [isCalling, setCalling] = useState(false);

	const { callSession } = user;
	const isPending = isEmpty(callSession.status);
	const isOperator = isUserOperator(user);

	const md = new MobileDetect(window.navigator.userAgent);

	const handleEndSession = useCallback(() => {
		console.log("end session...");
	}, []);

	const handleOpenChat = useCallback(() => {
		console.log("open chat...");
	}, []);

	const handleCall = useCallback(() => {
		// Send an SMS and Toast when desktop, otherwise trigger tel:
		setCalling(true);
		request
			.get(routes.build.callUser(user.username))
			.then(({ proxyPhoneNumber }) => {
				if (md.phone()) {
					window.location.href = `tel:${proxyPhoneNumber}`;
				} else {
					toaster.info(
						`You should receive an SMS with a phone number to call that will connect you to operator.`
					);
				}
			})
			.finally(() => {
				setCalling(false);
			});
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
					<With name={viewUser.nickname} picture={viewUser.picture} />
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
							<div className={css({ marginBottom: "20px" })}>
								{callSession.status === CALL_SESSION_STATUS.active && (
									<Notice icon={InfoIcon}>
										This session will end in a minute.
										<br />
										Call or start metering to continue the session.
									</Notice>
								)}
								{callSession.status === CALL_SESSION_STATUS.inCall && (
									<Notice kind={NOTIFICATION_KIND.positive} icon={CallIcon}>
										You are currently in a call
									</Notice>
								)}
								{callSession.status === CALL_SESSION_STATUS.metering && (
									<Notice kind={NOTIFICATION_KIND.accent} icon={MeterIcon}>
										The session is being metered
									</Notice>
								)}
							</div>
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
											paddingBottom: "20px",
											textAlign: "center"
										})}
									>
										<ActionButton
											onClick={
												callSession.status === CALL_SESSION_STATUS.metering
													? handleEndMeter
													: handleStartMeter
											}
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
										>
											{callSession.status === CALL_SESSION_STATUS.metering
												? `Stop the meter`
												: `Start the meter`}
										</ActionButton>
										{callSession.status !== CALL_SESSION_STATUS.metering && (
											<ParagraphXSmall>
												Use to end the call and continue charging for the
												duration of the session
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
									<ActionButton
										onClick={handleEndSession}
										startEnhancer={() => <EndSessionIcon size={26} />}
										variant="negative"
									>
										End Session
									</ActionButton>
									<ActionButton
										onClick={handleOpenChat}
										startEnhancer={() => <ChatIcon size={26} />}
									>
										Chat
									</ActionButton>
									<ActionButton
										onClick={handleCall}
										isLoading={isCalling}
										startEnhancer={() => <CallIcon size={26} />}
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

import React from "react";
import { useStyletron, withStyle } from "baseui";
import { Label3 as Label, Paragraph2 as Paragraph } from "baseui/typography";
import { StyledSpinnerNext, SIZE as SPINNER_SIZE } from "baseui/spinner";
import {
	PhoneCall as PhoneIcon,
	Clock as MeterIcon,
	Info as InfoIcon
} from "react-feather";
import isEmpty from "is-empty";
import { motion } from "framer-motion";

import useUser from "@/hooks/use-user";
import stripTrailingSlash from "@/utils/strip-trailing-slash";
import * as routes from "@/routes";
import { CALL_SESSION_STATUS } from "@/constants";

const Spinner = withStyle(StyledSpinnerNext, {
	width: "40px",
	height: "40px"
});

const InSessionTopBar = () => {
	const [css, theme] = useStyletron();
	const [user] = useUser();

	if (isEmpty((user || {}).callSession)) {
		return null;
	}

	const inSessionPathname = routes.build.user(user.callSession.with);
	const shouldRedirectToSession =
		stripTrailingSlash(window.location.pathname) !==
		stripTrailingSlash(inSessionPathname);

	const statuses = {
		[CALL_SESSION_STATUS.active]: {
			Icon: InfoIcon,
			content: `This session will end in a minute. Call or start metering to continue the session.`
		},
		[CALL_SESSION_STATUS.inCall]: {
			Icon: PhoneIcon,
			content: `You are currently in a call`,
			variant: "positive"
		},
		[CALL_SESSION_STATUS.metering]: {
			Icon: MeterIcon,
			content: `The session is being metered`,
			variant: "accent"
		}
	};

	return (
		<>
			{typeof statuses[user.callSession.status] === "object" && (
				<motion.div
					initial={{ opacity: 0, y: -35 }}
					animate={{ opacity: 1, y: 0 }}
					className={css({
						width: "100%",
						backgroundColor:
							theme.colors[
								statuses[user.callSession.status].variant || "primary"
							],
						borderBottomLeftRadius: "4px",
						borderBottomRightRadius: "4px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "#fff",
						textAlign: "center",
						position: "relative",
						zIndex: "9999",
						height: "35px",
						padding: "5px",
						...theme.typography.ParagraphSmall
					})}
				>
					<span
						className={css({
							marginRight: "10px",
							display: "flex",
							alignItems: "center"
						})}
					>
						{(() => {
							const { Icon } = statuses[user.callSession.status];
							return <Icon size={22} />;
						})()}
					</span>
					<Label
						className={css({
							display: "flex",
							alignItems: "center",
							color: "#fff"
						})}
					>
						<strong className={css({ color: "#fff" })}>
							{statuses[user.callSession.status].content}
						</strong>
					</Label>
				</motion.div>
			)}
			{shouldRedirectToSession && (
				<div
					className={css({
						position: "fixed",
						top: "0px",
						left: "0px",
						right: "0px",
						bottom: "0px",
						backgroundColor: "#fff",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						zIndex: "9995",
						textAlign: "center"
					})}
				>
					<motion.div
						initial={{
							opacity: 0,
							y: 20
						}}
						animate={{
							opacity: 1,
							y: 0
						}}
						className={css({
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column"
						})}
					>
						<Spinner $size={SPINNER_SIZE.large} />
						<Paragraph marginTop="25px" color={theme.colors.contentTertiary}>
							<strong>
								You are in a call session!
								<br />
								Please wait while we redirect you to the session...
							</strong>
						</Paragraph>
					</motion.div>
				</div>
			)}
		</>
	);
};

export default InSessionTopBar;

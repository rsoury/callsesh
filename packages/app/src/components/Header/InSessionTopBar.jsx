import React from "react";
import { useStyletron } from "baseui";
import { Label3 as Label } from "baseui/typography";
import {
	PhoneCall as PhoneIcon,
	Clock as MeterIcon,
	Info as InfoIcon,
	Loader as LoadingIcon
} from "react-feather";
import isEmpty from "is-empty";
import { motion } from "framer-motion";

import FullscreenLoader from "@/components/FullscreenLoader";
import useUser from "@/hooks/use-user";
import stripTrailingSlash from "@/utils/strip-trailing-slash";
import * as routes from "@/routes";
import { CALL_SESSION_STATUS } from "@/constants";

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

	const status = statuses[user.callSession.status] || {};
	if (isEmpty(status)) {
		status.Icon = LoadingIcon;
		status.content = "Your session is starting...";
		status.variant = "warning100";
		status.textColor = "#000";
	}

	status.variant = status.variant || "primary";
	status.textColor = status.textColor || "#fff";

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: -35 }}
				animate={{ opacity: 1, y: 0 }}
				className={css({
					width: "100%",
					backgroundColor: theme.colors[status.variant],
					borderBottomLeftRadius: "4px",
					borderBottomRightRadius: "4px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: status.textColor,
					textAlign: "center",
					position: "relative",
					zIndex: "9999",
					height: "35px",
					padding: "5px",
					transition: "background-color 0.25s, color 0.25s",
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
					<status.Icon size={22} />
				</span>
				<Label
					className={css({
						display: "flex",
						alignItems: "center"
					})}
				>
					<strong
						className={css({
							transition: "color 0.25s",
							color: status.textColor
						})}
					>
						{status.content}
					</strong>
				</Label>
			</motion.div>
			{shouldRedirectToSession && (
				<FullscreenLoader>
					<strong>
						You are in a call session!
						<br />
						Please wait while we redirect you to the session...
					</strong>
				</FullscreenLoader>
			)}
		</>
	);
};

export default InSessionTopBar;

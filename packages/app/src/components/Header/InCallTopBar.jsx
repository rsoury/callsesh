import React from "react";
import { useStyletron, withStyle } from "baseui";
import { Label3 as Label, Paragraph2 as Paragraph } from "baseui/typography";
import { PhoneCall as PhoneIcon } from "react-feather";
import isEmpty from "is-empty";
import { motion } from "framer-motion";
import { StyledSpinnerNext, SIZE as SPINNER_SIZE } from "baseui/spinner";

import useUser from "@/hooks/use-user";
import stripTrailingSlash from "@/utils/strip-trailing-slash";
import * as routes from "@/routes";

const Spinner = withStyle(StyledSpinnerNext, {
	width: "40px",
	height: "40px"
});

const InCallTopBar = () => {
	const [css, theme] = useStyletron();
	const [user] = useUser();

	if (isEmpty((user || {}).callSession)) {
		return null;
	}

	const inSessionPathname = routes.build.user(user.callSession.with);
	const shouldRedirectToSession =
		stripTrailingSlash(window.location.pathname) !==
		stripTrailingSlash(inSessionPathname);

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: -35 }}
				animate={{ opacity: 1, y: 0 }}
				className={css({
					width: "100%",
					backgroundColor: theme.colors.positive,
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
					<PhoneIcon size={18} />
				</span>
				<Label
					className={css({
						display: "flex",
						alignItems: "center",
						color: "#fff"
					})}
				>
					<strong className={css({ color: "#fff" })}>
						You are currently in a call session
					</strong>
				</Label>
			</motion.div>
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

export default InCallTopBar;

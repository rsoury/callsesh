import React from "react";
import { useStyletron } from "baseui";
import ArrowRight from "baseui/icon/arrow-right";
import { Button, SIZE as BUTTON_SIZE } from "baseui/button";
import { PhoneCall as PhoneIcon } from "react-feather";
import isEmpty from "is-empty";

import Link from "@/components/Link";
import * as routes from "@/routes";
import useUser from "@/hooks/use-user";
import stripTrailingSlash from "@/utils/strip-trailing-slash";

const InCallTopBar = () => {
	const [css, theme] = useStyletron();
	const [user] = useUser();

	if (isEmpty(user)) {
		return null;
	}

	const inSessionWithRoute = routes.build.user(user.callSession.with);
	const onViewUserPage =
		stripTrailingSlash(window.location.pathname) ===
		stripTrailingSlash(inSessionWithRoute);

	return (
		<Link
			href={inSessionWithRoute}
			button
			style={{ pointerEvents: onViewUserPage ? "none" : "auto" }}
		>
			<Button
				size={BUTTON_SIZE.mini}
				startEnhancer={() => <PhoneIcon size={18} />}
				overrides={{
					BaseButton: {
						style: {
							width: "100%",
							backgroundColor: theme.colors.positive,
							borderBottomLeftRadius: "4px",
							borderBottomRightRadius: "4px"
						}
					}
				}}
			>
				<span className={css({ display: "flex", alignItems: "center" })}>
					You are currently in a call session
					{!onViewUserPage && (
						<span className={css({ display: "flex", alignItems: "center" })}>
							<span
								className={css({
									height: "2px",
									width: "10px",
									backgroundColor: "#fff",
									margin: "0 5px"
								})}
							/>
							<span>Visit</span>
							<span
								className={css({
									marginLeft: "5px",
									display: "flex",
									alignItems: "center"
								})}
							>
								<ArrowRight size={20} />
							</span>
						</span>
					)}
				</span>
			</Button>
		</Link>
	);
};

export default InCallTopBar;

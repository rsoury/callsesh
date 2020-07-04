/**
 * The payouts card to appear on the home page for operators
 */

import React, { useState, useCallback } from "react";
import { Radio as LiveIcon } from "react-feather";
import { useStyletron, withStyle } from "baseui";
import {
	Checkbox,
	LABEL_PLACEMENT as CHECKBOX_LABEL_PLACEMENT,
	STYLE_TYPE as CHECKBOX_STYLE_TYPE
} from "baseui/checkbox";
import { ParagraphXSmall } from "baseui/typography";
import { StyledSpinnerNext } from "baseui/spinner";
import { toaster } from "baseui/toast";

import Card from "@/components/Card";
import Highlight from "@/components/Highlight";
import Pulse from "@/components/Pulse";
import EnsureVerified from "@/components/EnsureVerified";
import useUser from "@/hooks/use-user";
import handleException, { alerts } from "@/utils/handle-exception";
import * as routes from "@/routes";
import request from "@/utils/request";

import LoadingCard from "./Loading";

const cardProps = {
	title: "Go Live",
	icon: LiveIcon
};

const Spinner = withStyle(StyledSpinnerNext, {
	width: "20px",
	height: "20px"
});

const GoLiveCard = ({ ...props }) => {
	const [css, theme] = useStyletron();
	const [user, isUserLoading] = useUser();
	const [isLoading, setLoading] = useState(false);
	const [isLive, setLive] = useState(user.isLive);

	if (isUserLoading) {
		return <LoadingCard {...cardProps} {...props} />;
	}

	const toggleLive = useCallback(() => {
		// Get the new live value from the server so its always in sync.
		setLoading(true);
		request
			.post(routes.api.live)
			.then(({ data }) => data)
			.then(({ value }) => {
				setLive(value);
				if (value) {
					toaster.info(
						`You're now live! Copy your Operator Link and share the news to your Socials, Website, Newsletter, or anywhere you'd like.`
					);
				} else {
					toaster.info(
						`You've ended your live. No calls will be made until you're live again.`
					);
				}
			})
			.catch((err) => {
				handleException(err);
				alerts.error();
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<Card {...cardProps} {...props}>
			<div
				className={css({
					display: "flex",
					alignItems: "center",
					padding: "13px 0"
				})}
			>
				<div className={css({ marginRight: "10px" })}>
					<EnsureVerified inline>
						<Checkbox
							checked={isLive}
							onChange={toggleLive}
							labelPlacement={CHECKBOX_LABEL_PLACEMENT.right}
							checkmarkType={CHECKBOX_STYLE_TYPE.toggle_round}
							disabled={isLoading}
							overrides={{
								Root: {
									style: {
										opacity: isLoading ? "0.8" : "1",
										pointerEvents: isLoading ? "none" : "auto",
										display: "flex",
										alignItems: "center"
									}
								},
								Label: {
									style: {
										fontSize: "32px",
										fontWeight: "900",
										transition: "padding 0.25s",
										paddingLeft: isLive
											? theme.sizing.scale600
											: theme.sizing.scale300
									}
								},
								ToggleTrack: {
									style: {
										height: "30px",
										width: "50px",
										borderTopLeftRadius: "100px",
										borderTopRightRadius: "100px",
										borderBottomLeftRadius: "100px",
										borderBottomRightRadius: "100px"
									}
								},
								Toggle: {
									style: {
										height: "30px",
										width: "30px"
									}
								}
							}}
						>
							{isLive ? (
								<div className={css({ display: "flex", alignItems: "center" })}>
									<span
										className={css({
											position: "relative",
											zIndex: "5",
											marginRight: "10px"
										})}
									>
										Live!
									</span>
									{!isLoading && <Pulse width="15px" height="15px" />}
								</div>
							) : (
								<span>Go Live</span>
							)}
						</Checkbox>
					</EnsureVerified>
				</div>
				<div>{isLoading && <Spinner />}</div>
			</div>
			<ParagraphXSmall>
				<Highlight>Go live</Highlight> to accept calls from your page visitors.
				You will never receive a call if you are not live.
			</ParagraphXSmall>
		</Card>
	);
};

export default GoLiveCard;

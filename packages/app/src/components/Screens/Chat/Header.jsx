import React from "react";
import { useStyletron } from "baseui";
import PropTypes from "prop-types";
import { Avatar } from "baseui/avatar";
import { Label2 as Label, LabelSmall } from "baseui/typography";
import {
	Button,
	SIZE as BUTTON_SIZE,
	SHAPE as BUTTON_SHAPE
} from "baseui/button";

import CloseIcon from "baseui/icon/delete";
import InSessionTopBar from "@/components/Header/InSessionTopBar";

const ChatHeader = ({ name, picture, onClose }) => {
	const [css, theme] = useStyletron();

	return (
		<div id="callsesh-session-chat-header">
			<InSessionTopBar />
			<div
				className={css({
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "10px",
					borderBottom: `1px solid ${theme.colors.borderOpaque}`
				})}
			>
				<div className={css({ display: "flex", alignItems: "center" })}>
					<div className={css({ display: "flex", marginRight: "10px" })}>
						<Avatar name={name} size="scale1200" src={picture} />
					</div>
					<div>
						<Label marginBottom="2.5px">
							<strong className={css({ fontWeight: "900" })}>{name}</strong>
						</Label>
						{/* TODO: Add functionality to this */}
						<LabelSmall color={theme.colors.contentTertiary}>
							Active 1h ago
						</LabelSmall>
					</div>
				</div>
				<div className={css({ display: "flex" })}>
					<Button
						onClick={onClose}
						startEnhancer={() => <CloseIcon size={24} />}
						size={BUTTON_SIZE.compact}
						shape={BUTTON_SHAPE.pill}
						overrides={{
							BaseButton: {
								style: {
									marginRight: "0px",
									marginTop: "0px",
									marginBottom: "0px",
									marginLeft: "0px",
									[theme.mediaQuery.maxSmall]: {
										height: "45px",
										width: "45px"
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
								[theme.mediaQuery.maxSmall]: {
									display: "none"
								}
							})}
						>
							Close chat
						</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

ChatHeader.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	onClose: PropTypes.func
};

ChatHeader.defaultProps = {
	onClose() {}
};

export default ChatHeader;

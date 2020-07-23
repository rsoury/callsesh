/**
 * A component to render when there are no messages in chat
 */

import React from "react";
import { useStyletron } from "baseui";
import { ParagraphMedium as Paragraph } from "baseui/typography";
import {
	MessageCircle as MessageCircleIcon,
	MessageSquare as MessageSquareIcon
} from "react-feather";

const ChatEmpty = () => {
	const [css, theme] = useStyletron();

	return (
		<div
			className={css({
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				transform: "rotateX(180deg)",
				height: "100%"
			})}
		>
			<div className={css({ display: "flex", alignItems: "flex-end" })}>
				<div
					className={css({
						color: theme.colors.contentTertiary,
						display: "flex"
					})}
				>
					<MessageSquareIcon size={38} />
				</div>
				<div
					className={css({
						color: theme.colors.accent,
						display: "flex",
						transform: "rotateY(180deg)"
					})}
				>
					<MessageCircleIcon size={30} />
				</div>
			</div>
			<Paragraph marginTop="10px" color={theme.colors.contentTertiary}>
				Say hi! &apos;Tell me more about how I can help...&apos;
			</Paragraph>
		</div>
	);
};

export default ChatEmpty;

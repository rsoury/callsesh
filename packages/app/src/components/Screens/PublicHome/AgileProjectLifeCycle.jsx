import React from "react";
import { useStyletron } from "baseui";
import { LabelMedium, LabelLarge as Label } from "baseui/typography";
import {
	PhoneCall as PhoneIcon,
	Clock as MeterIcon,
	MessageSquare as ChatIcon,
	DollarSign as PaymentIcon
} from "react-feather";
import kebabCase from "lodash/kebabCase";

const HowSection = () => {
	const [css, theme] = useStyletron();

	const containerStyle = {
		padding: "10px",
		borderLeft: `3px solid ${theme.colors.primary}`,
		marginBottom: "20px"
	};

	return (
		<div
			className={css({
				display: "flex",
				alignItems: "center",
				[theme.mediaQuery.maxSmall]: {
					flexWrap: "wrap"
				}
			})}
		>
			<div
				className={css({
					width: "60%",
					position: "relative",
					paddingRight: "20px",
					[theme.mediaQuery.maxSmall]: {
						width: "100%",
						paddingRight: "0px"
					}
				})}
			>
				<img
					src="/static/assets/callsesh-infographic-transparent.png"
					alt="Callsesh Agile Freelancing Project Life Cycle"
					className={css({ width: "100%" })}
				/>
			</div>
			<div
				className={css({
					width: "40%",
					[theme.mediaQuery.maxSmall]: {
						width: "100%"
					}
				})}
			>
				{[
					{
						Icon: PhoneIcon,
						title: "Accept phone calls",
						caption: "Every solution starts as a communicated problem."
					},
					{
						Icon: MeterIcon,
						title: "Keep the meter running",
						caption:
							"Not all problems are the same. Continue metering your time outside of the phone call."
					},
					{
						Icon: ChatIcon,
						title: "Chat",
						caption: "Send messages, links, files, secrets and more."
					},
					{
						Icon: PaymentIcon,
						title: "Get Paid",
						caption: "Payment acceptance and payouts completely managed."
					}
				].map(({ Icon, title, caption }) => (
					<div
						key={kebabCase(title.toLowerCase())}
						className={css({
							...containerStyle
						})}
					>
						<Icon size={24} />
						<Label marginBottom="5px" marginTop="5px">
							<strong>{title}</strong>
						</Label>
						<LabelMedium opacity="0.8">{caption}</LabelMedium>
					</div>
				))}
			</div>
		</div>
	);
};

export default HowSection;

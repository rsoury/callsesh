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

	console.log(theme.mediaQuery);

	return (
		<div
			className={css({
				display: "flex",
				alignItems: "center",
				position: "relative",
				flexDirection: "column",
				margin: "20px 0"
			})}
		>
			<div
				className={css({
					width: "calc(100% - 450px)",
					maxWidth: "600px",
					minWidth: "350px",
					margin: "0 auto",
					"@media screen and (max-width: 850px) and (min-width: 600px)": {
						opacity: 0.5
					},
					[theme.mediaQuery.maxSmall]: {
						width: "100%"
					}
				})}
			>
				<img
					src="/static/assets/callsesh-infographic-transparent.png"
					alt="Callsesh Agile Freelancing Project Life Cycle"
					className={css({ width: "100%" })}
				/>
			</div>
			{[
				{
					Icon: PhoneIcon,
					title: "Accept phone calls",
					caption: "Every solution starts as a communicated problem.",
					style: {
						top: "0px",
						left: "0px",
						textAlign: "right"
					}
				},
				{
					Icon: MeterIcon,
					title: "Keep the meter running",
					caption:
						"Not all problems are the same. Continue metering your time outside of the phone call.",
					style: {
						top: "0px",
						right: "0px"
					}
				},
				{
					Icon: ChatIcon,
					title: "Chat",
					caption: "Send messages, links, files, secrets and more.",
					style: {
						bottom: "0px",
						right: "0px"
					}
				},
				{
					Icon: PaymentIcon,
					title: "Get Paid",
					caption: "Payment acceptance and payouts completely managed.",
					style: {
						bottom: "0px",
						left: "0px",
						textAlign: "right"
					}
				}
			].map(({ Icon, title, caption, style = {} }) => (
				<div
					key={kebabCase(title.toLowerCase())}
					className={css({
						width: "250px",
						position: "absolute",
						...style,
						[theme.mediaQuery.maxSmall]: {
							position: "relative",
							width: "100%",
							marginBottom: "30px",
							textAlign: "left"
						}
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
	);
};

export default HowSection;

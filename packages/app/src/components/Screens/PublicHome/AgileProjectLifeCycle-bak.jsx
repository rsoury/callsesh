import React from "react";
import { useStyletron } from "baseui";
import { LabelMedium, LabelLarge as Label } from "baseui/typography";
import {
	PhoneCall as PhoneIcon,
	Clock as MeterIcon,
	MessageSquare as ChatIcon,
	DollarSign as PaymentIcon
} from "react-feather";
import LineTo from "react-lineto";

const HowSection = () => {
	const [css, theme] = useStyletron();

	const containerStyle = {
		padding: "10px",
		// backgroundColor: "#fff",
		// boxShadow: "-5px 5px",
		borderLeft: `3px solid ${theme.colors.primary}`,
		marginBottom: "20px"
	};

	const anchorPointStyle = {
		height: " 15px",
		width: " 15px",
		backgroundColor: "#000",
		borderRadius: "100%"
	};

	return (
		<div className={css({ display: "flex", alignItems: "center" })}>
			<div
				className={css({
					width: "70%",
					position: "relative",
					paddingRight: "20px"
				})}
			>
				<img
					src="/static/assets/callsesh-infographic-transparent.png"
					alt="Callsesh Agile Freelancing Project Life Cycle"
					className={css({ width: "100%" })}
				/>
				<div
					className={`enagement-anchor ${css({
						...anchorPointStyle,
						position: "absolute",
						left: "20%",
						top: "20%"
					})}`}
				/>
				<div
					className={`problem-solving-anchor ${css({
						...anchorPointStyle,
						position: "absolute",
						right: "20%",
						top: "20%"
					})}`}
				/>
				<div
					className={`collaboration-anchor ${css({
						...anchorPointStyle,
						position: "absolute",
						right: "20%",
						bottom: "20%"
					})}`}
				/>
				<div
					className={`compensation-anchor ${css({
						...anchorPointStyle,
						position: "absolute",
						left: "20%",
						bottom: "20%"
					})}`}
				/>
			</div>
			<div className={css({ width: "30%" })}>
				<div
					className={`engagement-info ${css({
						...containerStyle
					})}`}
				>
					<PhoneIcon size={24} />
					<Label marginBottom="5px" marginTop="5px">
						<strong>Accept phone calls</strong>
					</Label>
					<LabelMedium opacity="0.8">
						Every solution starts as a communicated problem.
					</LabelMedium>
				</div>
				<div
					className={`problem-solving-info ${css({
						...containerStyle
					})}`}
				>
					<MeterIcon size={24} />
					<Label marginBottom="5px" marginTop="5px">
						<strong>Keep the meter running</strong>
					</Label>
					<LabelMedium opacity="0.8">
						Not all problems are the same. Continue metering your time outside
						of the phone call.
					</LabelMedium>
				</div>
				<div
					className={`collaboration-info ${css({
						...containerStyle
					})}`}
				>
					<ChatIcon size={24} />
					<Label marginBottom="5px" marginTop="5px">
						<strong>Chat</strong>
					</Label>
					<LabelMedium opacity="0.8">
						Send messages, links, files, secrets and more.
					</LabelMedium>
				</div>
				<div
					className={`compensation-info ${css({
						...containerStyle
					})}`}
				>
					<PaymentIcon size={24} />
					<Label marginBottom="5px" marginTop="5px">
						<strong>Get Paid</strong>
					</Label>
					<LabelMedium opacity="0.8">
						Payment acceptance and payouts completely managed.
					</LabelMedium>
				</div>
			</div>
			<LineTo from="engagement-info" to="engagement-anchor" />
			<LineTo from="problem-solving-info" to="problem-solving-anchor" />
			<LineTo from="collaboration-info" to="collaboration-anchor" />
			<LineTo from="compensation-info" to="compensation-anchor" />
		</div>
	);
};

export default HowSection;

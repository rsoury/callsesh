import React from "react";
import { useStyletron } from "baseui";
import { LabelMedium, LabelLarge as Label } from "baseui/typography";
import {
	PhoneCall as PhoneIcon,
	Clock as MeterIcon,
	MessageSquare as ChatIcon,
	DollarSign as PaymentIcon
} from "react-feather";

const HowSection = () => {
	const [css, theme] = useStyletron();

	const containerStyle = {
		position: "absolute",
		maxWidth: "250px",
		padding: "10px",
		backgroundColor: "#fff",
		boxShadow: "-5px 5px"
	};

	return (
		<div className={css({ position: "relative", padding: "50px" })}>
			<div className={css({ ...containerStyle, top: "-25px", left: "-25px" })}>
				<div
					className={css({
						padding: "10px",
						borderRadius: theme.borders.radius300
					})}
				>
					<PhoneIcon size={24} />
					<Label>
						<strong>Accept phone calls</strong>
					</Label>
					<LabelMedium opacity="0.8">
						Every solution starts as a communicated problem.
					</LabelMedium>
				</div>
			</div>
			<div className={css({ ...containerStyle, top: "0px", right: "0px" })}>
				<div
					className={css({
						padding: "10px",
						borderRadius: theme.borders.radius300
					})}
				>
					<MeterIcon size={24} />
					<Label>
						<strong>Keep the meter running</strong>
					</Label>
					<LabelMedium opacity="0.8">
						Not all problems are the same. Continue metering your time outside
						of the phone call.
					</LabelMedium>
				</div>
			</div>
			<div className={css({ ...containerStyle, bottom: "0px", right: "0px" })}>
				<div
					className={css({
						padding: "10px",
						borderRadius: theme.borders.radius300
					})}
				>
					<ChatIcon size={24} />
					<Label>
						<strong>Chat</strong>
					</Label>
					<LabelMedium opacity="0.8">
						Send messages, links, files, secrets and more.
					</LabelMedium>
				</div>
			</div>
			<div className={css({ ...containerStyle, bottom: "0px", left: "0px" })}>
				<div
					className={css({
						padding: "10px",
						borderRadius: theme.borders.radius300
					})}
				>
					<PaymentIcon size={24} />
					<Label>
						<strong>Get Paid</strong>
					</Label>
					<LabelMedium opacity="0.8">
						Payment acceptance and payouts completely managed.
					</LabelMedium>
				</div>
			</div>
			<img
				src="/static/assets/callsesh-infographic-transparent.png"
				alt="Callsesh Agile Freelancing Project Life Cycle"
				className={css({ width: "100%" })}
			/>
		</div>
	);
};

export default HowSection;

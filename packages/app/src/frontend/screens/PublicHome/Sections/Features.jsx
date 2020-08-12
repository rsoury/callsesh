/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import kebabCase from "lodash/kebabCase";
import {
	LabelLarge as Label,
	ParagraphSmall,
	ParagraphMedium
} from "baseui/typography";
import {
	Radio as GoLiveIcon,
	PhoneCall as PhoneCallIcon,
	PhoneOff as AnonPhoneIcon,
	Bell as NotifyIcon,
	Send as PayoutsIcon,
	Clock as MeterIcon,
	MessageSquare as ChatIcon,
	CreditCard as PaymentsIcon
} from "react-feather";

const PublicHomeFeaturesSection = () => {
	const [css, theme] = useStyletron();

	return (
		<section
			id="callsesh-home-features-section"
			className={css({
				padding: "50px 0",
				borderTop: `3px solid #000`
			})}
		>
			<div>
				<Grid gridGutter={16}>
					{[
						{
							Icon: GoLiveIcon,
							title: "Go live",
							content:
								"Set your schedule and rate. Accept calls at your own pace."
						},
						{
							Icon: PhoneCallIcon,
							title: "Accept phone calls",
							content: "Receive a call from anyone across the world securely."
						},
						{
							Icon: AnonPhoneIcon,
							title: "Hidden phone numbers",
							content: "Your personal contact phone number remains private."
						},
						{
							Icon: NotifyIcon,
							title: "Live email notifications",
							content: "Notify your subscribers whenever you go live."
						},
						{
							Icon: MeterIcon,
							title: "Metering",
							content:
								"Continue metering your time outside of a phone call. Bring your favourite tools to collaborate in."
						},
						{
							Icon: ChatIcon,
							title: "Chat",
							content:
								"Fully-featured chat for digital collaboration. Share links, messages, TODO lists, and much more."
						},
						{
							Icon: PaymentsIcon,
							title: "Payments",
							content: "Callsesh collects payments from clients for you."
						},
						{
							Icon: PayoutsIcon,
							title: "Payouts",
							content:
								"Connect your bank account securely using Stripe and get paid on an automatic recurring basis."
						}
					].map(({ Icon, title, content }) => (
						<Cell span={[6, 4, 4]} key={kebabCase(title.toLowerCase())}>
							<div
								className={css({
									position: "relative",
									padding: "20px",
									textAlign: "left"
								})}
							>
								<div className={css({ marginBottom: "5px" })}>
									<Icon size={24} />
								</div>
								<div>
									<Label>
										<strong>{title}</strong>
									</Label>
								</div>
								<ParagraphSmall
									className={css({
										width: "100%",
										opacity: "0.8",
										fontWeight: "500",
										marginTop: "10px"
									})}
								>
									{content}
								</ParagraphSmall>
							</div>
						</Cell>
					))}
				</Grid>
			</div>
			<div
				className={css({
					padding: "20px 0",
					borderRadius: theme.borders.radius400,
					backgroundColor: `rgb(248, 248, 248)`
				})}
			>
				<Grid gridGutter={16}>
					{[
						{
							title: "NO signup or subscription fees",
							content:
								"There is a 15% commission on each call session. We only win when you do."
						},
						{
							title: "Earn on referrals",
							content:
								"Refer an Operator and earn 5% commission on their call session transactions."
						}
					].map(({ title, content }) => (
						<Cell span={[12, 4, 6]} key={kebabCase(title.toLowerCase())}>
							<div
								className={css({
									position: "relative",
									padding: "20px",
									textAlign: "left"
								})}
							>
								<div>
									<Label>
										<strong>{title}</strong>
									</Label>
								</div>
								<ParagraphMedium
									className={css({
										width: "100%",
										opacity: "0.8",
										fontWeight: "500"
									})}
								>
									{content}
								</ParagraphMedium>
							</div>
						</Cell>
					))}
				</Grid>
			</div>
		</section>
	);
};

export default PublicHomeFeaturesSection;

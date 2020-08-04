import React, { useState } from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	H3 as Heading,
	ParagraphLarge as Paragraph,
	ParagraphMedium,
	LabelLarge as Label
} from "baseui/typography";
import { motion } from "framer-motion";
import kebabCase from "lodash/kebabCase";

import Highlight from "@/components/Highlight";

import Background from "../Background";
import AgileProjectLifeCycle from "../AgileProjectLifeCycle";

const HowSection = () => {
	const [css, theme] = useStyletron();
	const [selectedFeature, setSelectedFeatured] = useState(0);

	const features = [
		{
			title: "Freelance",
			content: (
				<ParagraphMedium>
					Determine your own schedule and set your own hourly rate. Use the Go
					Live switch to set when you&apos;re available to accept calls. When
					you&apos;re unavailable, visitors can opt-in to get notified when you
					do go live.
				</ParagraphMedium>
			),
			image: (
				<img
					src="/static/assets/features/freelance.jpg"
					alt="Freelancer: Set your own schedule and rates"
					className={css({
						borderRadius: theme.borders.radius400,
						height: "100%",
						width: "100%"
					})}
				/>
			)
		},
		{
			title: "Phone calls",
			content: (
				<ParagraphMedium>
					Make assistance for anyone across the world as simple as a phone call.{" "}
					<br /> We anonymise you and your caller&apos;s phone numbers to ensure
					personal security and prevent calls from being made while you&apos;re
					unavailable.
				</ParagraphMedium>
			),
			image: (
				<img
					src="/static/assets/features/freelance.jpg"
					alt="Freelancer: Set your own schedule and rates"
					className={css({
						borderRadius: theme.borders.radius400,
						height: "100%",
						width: "100%"
					})}
				/>
			)
		},
		{
			title: "Metering",
			content: (
				<ParagraphMedium>
					Charge each second that you&apos;re in a phone call or metering your
					session. Start the meter to collaborate beyond a phone call using the
					tools your love, from screen sharing to pair programming to video
					conferencing. Your Callsesh meter will run until you stop it or your
					caller ends the session.
				</ParagraphMedium>
			),
			image: (
				<img
					src="/static/assets/features/freelance.jpg"
					alt="Freelancer: Set your own schedule and rates"
					className={css({
						borderRadius: theme.borders.radius400,
						height: "100%",
						width: "100%"
					})}
				/>
			)
		},
		{
			title: "Chat",
			content: (
				<ParagraphMedium>
					Messages, links, files, voice and more can be exchanged through the
					Callsesh Chat. Get out of email and communicate with your clients as
					you would with your teammates. Retain your contacts after your session
					has finished and organise follow up call sessions.
				</ParagraphMedium>
			),
			image: (
				<img
					src="/static/assets/features/freelance.jpg"
					alt="Freelancer: Set your own schedule and rates"
					className={css({
						borderRadius: theme.borders.radius400,
						height: "100%",
						width: "100%"
					})}
				/>
			)
		},
		{
			title: "Payments",
			content: (
				<ParagraphMedium>
					Callers must have a valid payment method associated to their account
					to make a call. We ensure all your clients are paying for your premium
					attention.
				</ParagraphMedium>
			),
			image: (
				<img
					src="/static/assets/features/freelance.jpg"
					alt="Freelancer: Set your own schedule and rates"
					className={css({
						borderRadius: theme.borders.radius400,
						height: "100%",
						width: "100%"
					})}
				/>
			)
		},
		{
			title: "Payouts",
			content: (
				<ParagraphMedium>
					Connect your bank account and get paid on a weekly to monthly basis.
					Stripe is used to securely manage your personal banking information.
					View your pending bank payouts as they are processed.
				</ParagraphMedium>
			),
			image: (
				<img
					src="/static/assets/features/freelance.jpg"
					alt="Freelancer: Set your own schedule and rates"
					className={css({
						borderRadius: theme.borders.radius400,
						height: "100%",
						width: "100%"
					})}
				/>
			)
		}
	];

	return (
		<section id="how-it-works">
			<Background
				color={theme.colors.warning50}
				className={css({
					padding: "50px 0",
					borderTop: `3px solid ${theme.colors.primary}`
				})}
			>
				<Grid gridGutter={16}>
					<Cell span={[12, 3, 4]}>
						<div
							className={css({
								height: "100%",
								display: "flex",
								alignItems: "flex-start",
								flexDirection: "column",
								justifyContent: "center",
								position: "relative"
							})}
						>
							<Heading marginTop="0px">
								<strong className={css({ fontWeight: "900" })}>
									Rapid value delivery made seamless
								</strong>
							</Heading>
							<Paragraph marginTop="0px">
								Spend less time documenting contracts and proposals, invoicing
								and time tracking.
								<br />
								Callsesh provides the components required to take a
								person&apos;s problem from{" "}
								<Highlight>phone call to repeat customer</Highlight>.
							</Paragraph>
						</div>
					</Cell>
					<Cell span={[12, 5, 8]}>
						<AgileProjectLifeCycle />
					</Cell>
				</Grid>
			</Background>
			<div className={css({ padding: "50px 0" })}>
				<Grid gridGutter={8}>
					<Cell span={[12, 3, 4]}>
						{features.map(({ title }, index) => (
							<motion.div
								key={kebabCase(title.toLowerCase())}
								className={css({
									borderRadius: `0px ${theme.borders.radius300} ${theme.borders.radius300} 0px`,
									borderLeftWidth: "3px",
									borderLeftStyle: "solid",
									cursor: "pointer",
									padding: "15px 10px",
									transition: "background-color 0.25s",
									":hover": {
										backgroundColor: `${theme.colors.positive50} ${
											selectedFeature === index ? "" : "!important"
										}`
									}
								})}
								animate={
									selectedFeature === index
										? {
												backgroundColor: theme.colors.positive,
												boxShadow: `-5px 5px 30px rgba(0, 0, 0, 0.1)`,
												y: -5,
												borderColor: theme.colors.primary,
												color: "#fff"
										  }
										: {
												backgroundColor: "rgb(255, 255, 255)",
												boxShadow: "none",
												y: 0,
												borderColor: "#fff",
												color: theme.colors.primary
										  }
								}
								onClick={() => setSelectedFeatured(index)}
							>
								<Label className={css({ color: "inherit" })}>
									<strong className={css({ fontWeight: "900" })}>
										{title}
									</strong>
								</Label>
							</motion.div>
						))}
					</Cell>
					<Cell span={[12, 5, 8]}>
						{features.map(({ image, content }, index) => (
							<motion.div
								animate={
									selectedFeature === index
										? {
												x: 0,
												opacity: 1,
												visiblity: "visible"
										  }
										: {
												x: 20,
												opacity: 0,
												visiblity: "hidden"
										  }
								}
							>
								<div
									className={css({
										display: "flex",
										alignItems: "flex-start",
										flexDirection: "column"
									})}
								>
									<div
										className={css({
											display: "flex",
											maxWidth: "300px"
										})}
									>
										{content}
									</div>
									<div
										className={css({
											display: "flex",
											flexGrow: "1",
											width: "100%"
										})}
									>
										{image}
									</div>
								</div>
							</motion.div>
						))}
					</Cell>
				</Grid>
			</div>
		</section>
	);
};

export default HowSection;

import React, { useState } from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	ParagraphLarge as Paragraph,
	LabelLarge as Label
} from "baseui/typography";
import { motion } from "framer-motion";
import kebabCase from "lodash/kebabCase";

import Highlight from "@/components/Highlight";

import CallPageSlider from "./CallPageSlider";

const FeatureViewer = () => {
	const [css, theme] = useStyletron();
	const [selectedFeature, setSelectedFeatured] = useState(0);

	const features = [
		{
			title: "Freelance",
			content: (
				<Paragraph marginTop="0px">
					Determine your own schedule and set your own hourly rate.
					<br />
					Use the <Highlight>Go Live</Highlight> switch to set when you&apos;re
					available to accept calls.
					<br />
					When you&apos;re unavailable, visitors can opt-in to{" "}
					<Highlight>get notified</Highlight> when you do go live.
				</Paragraph>
			),
			image: (
				<img
					src="/static/assets/features/freelance.jpg"
					alt="Freelancer: Set your own schedule and rates"
					className={css({
						borderRadius: theme.borders.radius400,
						height: "100%",
						width: "100%",
						boxShadow: "-10px 10px 30px rgba(0, 0, 0, 0.1)"
					})}
				/>
			)
		},
		{
			title: "Phone calls",
			content: (
				<Paragraph marginTop="0px">
					Make assistance for anyone across the world as simple as a phone call.
					<br />
					You and your caller&apos;s personal{" "}
					<Highlight>phone numbers are always hidden</Highlight>. Callsesh
					provides temporary phone numbers to ensure personal security and
					prevent calls from being made while you&apos;re unavailable.
				</Paragraph>
			),
			image: (
				<div
					className={css({
						width: "100%",
						textAlign: "center",
						display: "flex",
						justifyContent: "center",
						margin: "-35px 0"
					})}
				>
					<CallPageSlider />
				</div>
			)
		},
		{
			title: "Metering",
			content: (
				<Paragraph marginTop="0px">
					Charge each second that you&apos;re in a phone call or metering your
					session. Start the meter to collaborate beyond a phone call using the
					tools your love, from screen sharing to pair programming to video
					conferencing. Your Callsesh meter will run until you stop it or your
					caller ends the session.
				</Paragraph>
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
				<Paragraph marginTop="0px">
					Messages, links, files, voice and more can be exchanged through the
					Callsesh Chat. Get out of email and communicate with your clients as
					you would with your teammates. Retain your contacts after your session
					has finished and organise follow up call sessions.
				</Paragraph>
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
				<Paragraph marginTop="0px">
					Callers must have a valid payment method associated to their account
					to make a call. We ensure all your clients are paying for your premium
					attention.
				</Paragraph>
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
				<Paragraph marginTop="0px">
					Connect your bank account and get paid on a weekly to monthly basis.
					Stripe is used to securely manage your personal banking information.
					View your pending bank payouts as they are processed.
				</Paragraph>
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
		<div id="features-viewer">
			<Grid gridGutter={8}>
				<Cell span={[12, 3, 4]}>
					<div className={css({ padding: "25px 0" })}>
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
										backgroundColor: `${theme.colors.accent50} ${
											selectedFeature === index ? "" : "!important"
										}`
									}
								})}
								animate={
									selectedFeature === index
										? {
												backgroundColor: theme.colors.accent,
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
					</div>
				</Cell>
				<Cell span={[12, 5, 8]}>
					<div className={css({ position: "relative", height: "800px" })}>
						{features.map(({ title, image, content }, index) => (
							<div
								key={kebabCase(title.toLowerCase())}
								className={css({
									position: "absolute",
									top: "0px",
									right: "0px",
									left: "0px",
									bottom: "0px"
								})}
							>
								<div
									className={css({
										display: "flex",
										alignItems: "flex-start",
										flexDirection: "column"
									})}
								>
									<motion.div
										className={css({
											display: "flex",
											borderRadius: theme.borders.radius300,
											padding: `20px 20px 50px`,
											backgroundColor: `rgb(250, 250, 250)`
										})}
										animate={
											selectedFeature === index
												? {
														x: 0,
														opacity: 1,
														visiblity: "visible",
														zIndex: 5
												  }
												: {
														x: -50,
														opacity: 0,
														visiblity: "hidden",
														zIndex: 1
												  }
										}
									>
										{content}
									</motion.div>
									<motion.div
										className={css({
											display: "flex",
											flexGrow: "1",
											width: "100%",
											margin: "-60px 20px 0"
										})}
										animate={
											selectedFeature === index
												? {
														x: 0,
														opacity: 1,
														visiblity: "visible",
														zIndex: 5
												  }
												: {
														x: 50,
														opacity: 0,
														visiblity: "hidden",
														zIndex: 1
												  }
										}
									>
										{image}
									</motion.div>
								</div>
							</div>
						))}
					</div>
				</Cell>
			</Grid>
		</div>
	);
};

export default FeatureViewer;

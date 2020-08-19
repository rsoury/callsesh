/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import kebabCase from "lodash/kebabCase";
import {
	HeadingSmall as Heading,
	ParagraphLarge as Paragraph
} from "baseui/typography";

const PublicHomeGetStartedSection = () => {
	const [css, theme] = useStyletron();

	return (
		<section
			id="callsesh-home-get-started-section"
			className={css({
				padding: "50px 0",
				borderTop: "3px solid #000",
				position: "relative",
				":before": {
					content: '""',
					position: "absolute",
					left: "0px",
					top: "0px",
					right: "0px",
					height: "6px",
					backgroundColor: theme.colors.warning,
					pointerEvents: "none"
				}
			})}
		>
			<div>
				<Heading
					className={css({
						marginTop: "0px",
						textAlign: "center",
						width: "100%",
						position: "relative"
						// ":after": {
						// 	content: '""',
						// 	position: "absolute",
						// 	left: "0px",
						// 	right: "0px",
						// 	bottom: "0px",
						// 	height: "6px",
						// 	width: "100%",
						// 	maxWidth: "26px",
						// 	margin: "0 auto",
						// 	backgroundColor: theme.colors.accent
						// }
					})}
				>
					<strong
						className={css({
							borderBottom: `3px solid ${theme.colors.accent}`,
							paddingBottom: "3px"
						})}
					>
						Getting started is simple...
					</strong>
				</Heading>
				<Grid gridGutter={16}>
					{[
						"Register with your phone number",
						"Setup your profile, set your hourly rate and input your banking details",
						"Go live and share your Callsesh link with your clients to start accepting metered calls",
						"Get paid automatically after call sessions"
					].map((stepMessage, index) => (
						<Cell span={[6, 4, 6]} key={kebabCase(stepMessage.toLowerCase())}>
							<div
								className={css({
									display: "flex",
									alignItems: "center",
									justifyContent: "flex-start",
									flexDirection: "column",
									position: "relative",
									padding: "20px"
								})}
							>
								<div
									className={css({
										opacity: "0.1",
										position: "absolute",
										left: "-10px",
										top: "-10px",
										fontSize: "90px"
									})}
								>
									<strong className={css({ fontWeight: "900" })}>
										{index + 1}
									</strong>
								</div>
								<Paragraph className={css({ width: "100%" })}>
									<strong>{stepMessage}</strong>
								</Paragraph>
							</div>
						</Cell>
					))}
				</Grid>
			</div>
		</section>
	);
};

export default PublicHomeGetStartedSection;

import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { H3 as Heading, ParagraphLarge as Paragraph } from "baseui/typography";
import {
	Button,
	SIZE as BUTTON_SIZE,
	SHAPE as BUTTON_SHAPE,
	KIND as BUTTON_KIND
} from "baseui/button";
import ArrowRight from "baseui/icon/arrow-right";

import Link from "@/components/Link";

const CredebilitySection = () => {
	const [css, theme] = useStyletron();

	return (
		<section id="credebility" className={css({ padding: "75px 0 50px" })}>
			<Grid gridGutter={16}>
				<Cell span={12}>
					<div
						className={css({
							height: "100%",
							display: "flex",
							alignItems: "flex-start",
							flexDirection: "column",
							justifyContent: "center",
							position: "relative",
							textAlign: "center"
						})}
					>
						<Heading marginTop="0px" marginLeft="auto" marginRight="auto">
							<strong className={css({ fontWeight: "900" })}>
								Developed by freelancers for freelancers.
							</strong>
						</Heading>
						<div
							className={css({
								position: "relative",
								maxWidth: "700px",
								margin: "0 auto"
							})}
						>
							<Paragraph marginTop="0px" marginBottom="10px">
								&ldquo;Atomised work is disregarded due to the overhead of
								securing the transaction. Callsesh removes the overhead.
								Engagement, Collaboration and Payments rolled into one seamless
								experience speeding up time to value.&rdquo;
								<br />
								<span
									className={css({
										marginTop: "20px",
										display: "block",
										...theme.typography.ParagraphSmall
									})}
								>
									&mdash; Ryan Soury, Founder and Software Freelancer
								</span>
							</Paragraph>
							<div className={css({ marginBottom: "20px" })}>
								<Link href="/ryan" button standard newWindow>
									<Button
										size={BUTTON_SIZE.compact}
										kind={BUTTON_KIND.minimal}
										shape={BUTTON_SHAPE.pill}
										startEnhancer={() => (
											<img
												src="/static/assets/ryan-soury-profile-picture.jpg"
												alt="Callsesh Operator Profile Headshot"
												className={css({
													height: "30px",
													width: "30px",
													borderRadius: "100%"
												})}
											/>
										)}
										endEnhancer={() => <ArrowRight size={24} />}
									>
										Visit my Call Page
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</Cell>
				{/* <Cell span={12}>
					<div
						className={css({
							margin: "20px 0",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: "100%"
						})}
					>
						<div
							className={css({
								backgroundColor: "rgb(240, 240, 240)",
								width: "520px",
								height: "315px"
							})}
						/>
					</div>
				</Cell> */}
			</Grid>
		</section>
	);
};

export default CredebilitySection;

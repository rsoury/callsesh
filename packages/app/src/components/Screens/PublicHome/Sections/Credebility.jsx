import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { H3 as Heading, ParagraphLarge as Paragraph } from "baseui/typography";

const CredebilitySection = () => {
	const [css] = useStyletron();

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
							<Paragraph marginTop="0px">
								Atomised work has been disregarded due to the overhead of
								securing the transaction. <br />
								Callsesh removes the overhead. Engagement, Collaboration and
								Payments rolled into one seamless experience speeding up time to
								value.
								<br />
								Complement your workflow and gain a competitive advantage.
							</Paragraph>
						</div>
					</div>
				</Cell>
				<Cell span={12}>
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
				</Cell>
			</Grid>
		</section>
	);
};

export default CredebilitySection;

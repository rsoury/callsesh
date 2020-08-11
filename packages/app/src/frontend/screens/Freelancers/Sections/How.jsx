import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { H3 as Heading, ParagraphLarge as Paragraph } from "baseui/typography";

import Highlight from "@/frontend/components/Highlight";
import Background from "@/frontend/components/SectionBackground";

import AgileProjectLifeCycle from "../AgileProjectLifeCycle";

const HowSection = () => {
	const [css, theme] = useStyletron();

	return (
		<section id="how-it-works">
			<Background
				color={theme.colors.warning50}
				style={{
					borderTop: `3px solid ${theme.colors.primary}`
				}}
				className={css({
					padding: "50px 0"
				})}
			>
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
					<Cell span={12}>
						<AgileProjectLifeCycle />
					</Cell>
				</Grid>
			</Background>
		</section>
	);
};

export default HowSection;

import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { H3 as Heading, ParagraphLarge as Paragraph } from "baseui/typography";
// import {
// 	Button,
// 	SIZE as BUTTON_SIZE,
// 	SHAPE as BUTTON_SHAPE,
// 	KIND as BUTTON_KIND
// } from "baseui/button";

import Highlight from "@/components/Highlight";

import Background from "../Background";

const HeroSection = () => {
	const [css] = useStyletron();

	return (
		<section id="how-it-works">
			<Background
				color="rgb(248, 248, 248)"
				className={css({ padding: "50px 0" })}
			>
				<Grid gridGutter={16}>
					<Cell span={[12, 4, 6]}>
						<Heading marginTop="0px">
							Rapid value delivery made seamless
						</Heading>
						<Paragraph>
							Spend less time documenting contracts and proposals, invoicing and
							time tracking on work that can complete within a call or a day.
							<br />
							Callsesh provides the components required to take a person&apos;s
							problem from <Highlight>phone call to repeat customer</Highlight>.
						</Paragraph>
					</Cell>
				</Grid>
			</Background>
		</section>
	);
};

export default HeroSection;

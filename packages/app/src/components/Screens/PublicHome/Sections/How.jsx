import React, { useState } from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	H3 as Heading,
	ParagraphLarge as Paragraph,
	ParagraphMedium
} from "baseui/typography";
// import { motion } from "framer-motion";

import Highlight from "@/components/Highlight";

import Background from "../Background";

const HowSection = () => {
	const [css] = useStyletron();
	const [selectedFeature, setSelectedFeatured] = useState(0);

	const features = [
		{
			title: <span>Freelance</span>,
			content: (
				<ParagraphMedium>
					Determine your own schedule and set your own hourly rate. Use the Go
					Live switch to set when you&apos;re available to accept calls. When
					you&apos;re unavailable, visitors can opt-in to get notified when you
					do go live.
				</ParagraphMedium>
			),
			image: <div></div>
		}
	];

	return (
		<section id="how-it-works">
			<Background
				color="rgb(248, 248, 248)"
				className={css({ padding: "50px 0" })}
			>
				<Grid gridGutter={16}>
					<Cell span={[12, 4, 6]}>
						<Heading marginTop="0px" fontWeight="900">
							Rapid value delivery made seamless
						</Heading>
						<Paragraph>
							Spend less time documenting contracts and proposals, invoicing and
							time tracking.
							<br />
							Callsesh provides the components required to take a person&apos;s
							problem from <Highlight>phone call to repeat customer</Highlight>.
						</Paragraph>
					</Cell>
				</Grid>
			</Background>
			<Grid gridGutter={8}>
				<Cell></Cell>
			</Grid>
		</section>
	);
};

export default HowSection;

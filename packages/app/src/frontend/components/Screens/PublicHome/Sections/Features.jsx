import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { H3 as Heading } from "baseui/typography";

import FeatureViewer from "../FeatureViewer";

const FeaturesSection = () => {
	const [css] = useStyletron();

	return (
		<section id="features" className={css({ padding: "50px 0" })}>
			<Grid gridGutter={16}>
				<Cell span={12}>
					<div
						className={css({
							textAlign: "center",
							width: "100%"
						})}
					>
						<Heading marginTop="0px" marginLeft="auto" marginRight="auto">
							<strong className={css({ fontWeight: "900" })}>
								The toolkit to complement your workflow
							</strong>
						</Heading>
					</div>
				</Cell>
			</Grid>
			<FeatureViewer />
		</section>
	);
};

export default FeaturesSection;

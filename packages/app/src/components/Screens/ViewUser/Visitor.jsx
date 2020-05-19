import React from "react";
import { Grid, Cell } from "baseui/layout-grid";
import ArrowRight from "baseui/icon/arrow-right";
import { Button } from "baseui/button";
import { Paragraph2 as Paragraph } from "baseui/typography";

import Link from "@/components/Link";
import * as routes from "@/routes";

const ViewUserVisitor = () => (
	<Grid>
		<Cell span={12}>
			<Paragraph>
				Get expertise, advice, guidance, or companionship over a phone call
				using Callsesh, or become an operator and make money offering the world
				your unique take.
			</Paragraph>
			<div>
				<Link href={routes.page.signup} pass button>
					<Button endEnhancer={() => <ArrowRight size={22} />}>
						Get Started
					</Button>
				</Link>
			</div>
		</Cell>
	</Grid>
);

export default ViewUserVisitor;

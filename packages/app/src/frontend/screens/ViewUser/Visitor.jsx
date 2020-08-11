import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import ArrowRight from "baseui/icon/arrow-right";
import { Button, SIZE as BUTTON_SIZE } from "baseui/button";
import { Paragraph2 as Paragraph, H4 as Heading } from "baseui/typography";

import Link from "@/frontend/components/Link";
import * as routes from "@/routes";

const ViewUserVisitor = () => {
	const [css, theme] = useStyletron();

	return (
		<Grid>
			<Cell span={12}>
				<div
					className={css({
						margin: "20px 0",
						padding: "20px",
						borderTop: `1px solid ${theme.colors.borderOpaque}`
					})}
				>
					<Heading marginTop="0px" marginBottom="10px">
						Your answers are a call away
					</Heading>
					<Paragraph>
						Sign up and get calling. Reaching your reliable operator is as easy
						as a phone call to a friend.
						<br />
						Callsesh Support is available in case you have any questions about
						the service.
					</Paragraph>
					<div>
						<Link href={routes.page.signup} pass button>
							<Button
								endEnhancer={() => <ArrowRight size={22} />}
								size={BUTTON_SIZE.large}
							>
								Get Started
							</Button>
						</Link>
					</div>
				</div>
			</Cell>
		</Grid>
	);
};

export default ViewUserVisitor;

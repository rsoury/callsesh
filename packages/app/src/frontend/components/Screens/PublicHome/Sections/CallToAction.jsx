import React from "react";
import { useStyletron } from "baseui";
import { H3 as Heading } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";

import SignupActionButton from "@/frontend/components/SignupActionButton";
import Highlight from "@/frontend/components/Highlight";

const UseCasesSection = () => {
	const [css, theme] = useStyletron();

	return (
		<section className={css({ padding: "50px" })}>
			<div
				className={css({
					borderRadius: theme.borders.radius300,
					backgroundColor: theme.colors.accent50,
					padding: "75px 0px",
					position: "relative",
					zIndex: "5",
					[theme.mediaQuery.maxMedium]: {
						padding: "50px 25px"
					}
				})}
			>
				<Grid gridGutters={16}>
					<Cell span={[12, 8, 8]}>
						<div
							className={css({
								display: "flex",
								[theme.mediaQuery.maxMedium]: {
									marginBottom: "20px"
								}
							})}
						>
							<Heading marginTop="0px" marginBottom="0px">
								<strong
									className={css({
										[theme.mediaQuery.maxSmall]: {
											...theme.typography.HeadingSmall
										},
										fontWeight: "900 !important"
									})}
								>
									Save time and earn more.
									<br />
									Empower <Highlight>your</Highlight> workflow.
								</strong>
							</Heading>
						</div>
					</Cell>
					<Cell span={[12, 8, 4]}>
						<div
							className={css({
								display: "flex",
								alignItems: "center",
								height: "100%",
								justifyContent: "flex-end",
								[theme.mediaQuery.maxMedium]: {
									justifyContent: "flex-start"
								}
							})}
						>
							<SignupActionButton />
						</div>
					</Cell>
				</Grid>
			</div>
		</section>
	);
};

export default UseCasesSection;

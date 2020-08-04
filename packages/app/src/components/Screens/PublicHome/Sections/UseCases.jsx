import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	H3 as Heading,
	ParagraphLarge as Paragraph,
	ParagraphMedium,
	LabelMedium as Label
} from "baseui/typography";
import {
	Code as CodeIcon,
	Feather as FeatherIcon,
	Zap as ZapIcon
} from "react-feather";
import kebabCase from "lodash/kebabCase";

import Background from "../Background";

const UseCasesSection = () => {
	const [css, theme] = useStyletron();

	return (
		<section id="use-cases">
			<Background
				color={theme.colors.positive50}
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
								textAlign: "center",
								width: "100%",
								marginBottom: "50px"
							})}
						>
							<Heading marginTop="0px" marginLeft="auto" marginRight="auto">
								<strong className={css({ fontWeight: "900" })}>
									A world of possibilities
								</strong>
							</Heading>
							<Paragraph marginTop="0px">
								A freelancer is anyone who delivers value to a customer on their
								own schedule at their own rates.
								<br />
								What value you offer with Callsesh is entirely up to you.
							</Paragraph>
						</div>
					</Cell>
					{[
						{
							Icon: CodeIcon,
							title: "Micro Software Development",
							points: ["Web edits", "Bug fixing", "Server upgrades"]
						},
						{
							Icon: FeatherIcon,
							title: "Digital Design Expertise",
							points: [
								"Conceptual mockups",
								"On-the-fly logo design",
								"Brainstorms, ideation, mood boards"
							]
						},
						{
							Icon: ZapIcon,
							title: "Immediate Premium Assistance",
							points: [
								"Technical support",
								"Social media app assistance",
								"Research assistance"
							]
						}
					].map(({ Icon, title, points }) => (
						<Cell span={[12, 2, 4]} key={kebabCase(title.toLowerCase())}>
							<div
								className={css({
									display: "flex",
									flexDirection: "column"
								})}
							>
								<div
									className={css({
										display: "flex",
										alignItems: "center",
										justifyContent: "flex-start"
									})}
								>
									<div
										className={css({
											display: "flex",
											width: "40px",
											height: "40px",
											minWidth: "40px",
											minHeight: "40px",
											maxWidth: "40px",
											maxHeight: "40px",
											borderRadius: "100%",
											alignItems: "center",
											justifyContent: "center",
											backgroundColor: theme.colors.primary,
											color: "#fff",
											marginRight: "10px"
										})}
									>
										<Icon />
									</div>
									<Label>
										<strong>{title}</strong>
									</Label>
								</div>
								<ul>
									{points.map((point) => (
										<li>
											<ParagraphMedium marginTop="0px" marginBottom="5px">
												{point}
											</ParagraphMedium>
										</li>
									))}
								</ul>
							</div>
						</Cell>
					))}
					<Cell span={12}>
						<Paragraph className={css({ textAlign: "center" })}>
							You decide...
						</Paragraph>
					</Cell>
				</Grid>
			</Background>
		</section>
	);
};

export default UseCasesSection;

/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import kebabCase from "lodash/kebabCase";
import {
	HeadingSmall as Heading,
	ParagraphLarge,
	ParagraphMedium,
	LabelLarge
} from "baseui/typography";
import { PhoneCall as CallIcon, Briefcase as WorkIcon } from "react-feather";

const PublicHomeHowItWorksSection = () => {
	const [css, theme] = useStyletron();

	return (
		<section
			id="callsesh-home-how-it-works-section"
			className={css({
				padding: "50px 0",
				borderTop: "3px solid #000",
				position: "relative",
				":before": {
					content: '""',
					position: "absolute",
					left: "0px",
					top: "0px",
					right: "0px",
					height: "6px",
					backgroundColor: theme.colors.warning,
					pointerEvents: "none"
				}
			})}
		>
			<div>
				<Grid gridGutter={16}>
					<Cell span={[12, 4, 6]}>
						<div
							className={css({
								padding: "25px 0",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								height: "100%"
							})}
						>
							<Heading
								className={css({
									marginTop: "0px",
									width: "100%",
									position: "relative"
								})}
							>
								<strong
									className={css({
										borderBottom: `3px solid ${theme.colors.accent}`,
										paddingBottom: "3px"
									})}
								>
									Get engaged through your page
								</strong>
							</Heading>
							{[
								{
									Icon: CallIcon,
									title: "Get Called",
									content: "Accept phone calls and meter your engagement"
								},
								{
									Icon: WorkIcon,
									title: "Get Hired",
									content:
										"With permission from your clients, start metered sessions whenever you're working on their tasks."
								}
							].map(({ Icon, title, content }) => (
								<div
									key={kebabCase(title.toLowerCase())}
									className={css({
										display: "flex",
										flexDirection: "column",
										padding: "20px",
										marginBottom: "20px",
										border: `3px solid rgb(248, 248, 248)`,
										borderRadius: theme.borders.radius400,
										width: "100%"
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
												alignItems: "center",
												justifyContent: "center",
												marginRight: "10px"
											})}
										>
											<Icon size={30} />
										</div>
										<LabelLarge>
											<strong>{title}</strong>
										</LabelLarge>
									</div>
									<ParagraphLarge className={css({ marginBottom: "0px" })}>
										{content}
									</ParagraphLarge>
								</div>
							))}
						</div>
					</Cell>
					<Cell span={[12, 4, 6]}>
						<div
							className={css({
								position: "relative",
								zIndex: "5",
								marginRight: "-100px",
								height: "100%"
							})}
						>
							<img
								src="/static/assets/work-with-christie-cut.jpg"
								alt="Freelancer and Freelancing: Work with me"
								className={css({
									borderRadius: theme.borders.radius400,
									height: "100%",
									width: "100%",
									boxShadow: "-10px 10px 30px rgba(0, 0, 0, 0.1)",
									objectFit: "cover"
								})}
							/>
						</div>
					</Cell>
				</Grid>
			</div>
		</section>
	);
};

export default PublicHomeHowItWorksSection;

/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import {
	HeadingSmall as Heading,
	ParagraphLarge as Paragraph
} from "baseui/typography";
import {
	Button,
	SIZE as BUTTON_SIZE,
	KIND as BUTTON_KIND
} from "baseui/button";
import ArrowRight from "baseui/icon/arrow-right";

import Link from "@/frontend/components/Link";
import * as routes from "@/routes";

const PublicHomeNarrowSection = () => {
	const [css, theme] = useStyletron();

	const buttonProps = {
		endEnhancer() {
			return <ArrowRight size={24} />;
		},
		size: BUTTON_SIZE.large
	};

	const containerStyle = {
		padding: "40px",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		minHeight: "400px"
	};

	return (
		<section
			id="callsesh-home-narrow-section"
			className={css({
				padding: "50px 0",
				borderTop: `3px solid #000`
			})}
		>
			<div>
				<Grid gridGutter={16}>
					<Cell span={[12, 8, 6]}>
						<div
							className={css({
								...containerStyle,
								backgroundColor: "#000",
								backgroundImage: `url("/static/assets/man-drawing-designs-freelancing.jpg")`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								position: "relative",
								boxShadow: `-5px 5px ${theme.colors.primary}`,
								marginBottom: "20px",
								":before": {
									content: '""',
									position: "absolute",
									left: "0px",
									right: "0px",
									top: "0px",
									bottom: "0px",
									backgroundColor: "rgba(0, 0, 0, 0.35)"
								}
							})}
						>
							<div
								className={css({
									position: "relative",
									zIndex: "5"
								})}
							>
								<Heading
									className={css({
										marginTop: "0px",
										marginBottom: "40px",
										color: "#fff"
									})}
								>
									<strong className={css({ fontWeight: "900" })}>
										The toolkit for agile freelancers
									</strong>
								</Heading>
								<div>
									<Link href={routes.page.freelancers} button pass>
										<Button
											{...buttonProps}
											kind={BUTTON_KIND.secondary}
											overrides={{
												BaseButton: {
													style: {
														backgroundColor: "#fff"
													}
												}
											}}
										>
											Learn More
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</Cell>
					<Cell span={[12, 8, 6]}>
						<div
							className={css({
								...containerStyle,
								backgroundColor: theme.colors.warning300,
								boxShadow: `-5px 5px ${theme.colors.primary}`,
								marginBottom: "20px"
							})}
						>
							<Heading
								className={css({
									marginTop: "0px",
									marginBottom: "0px"
								})}
							>
								<strong className={css({ fontWeight: "900" })}>
									Looking for answers?
								</strong>
							</Heading>
							<Paragraph className={css({ fontWeight: "500" })}>
								Operators share their call links to their customers and
								audience, but may also be able to help you. Tell us more about
								your problems and we can suggest Operators to connect with based
								on your preferences.
							</Paragraph>
							<div>
								<Link
									href="https://forms.gle/qP2S8XoV6vPPZBVg8"
									button
									standard
									newWindow
								>
									<Button {...buttonProps}>Tell us more</Button>
								</Link>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		</section>
	);
};

export default PublicHomeNarrowSection;

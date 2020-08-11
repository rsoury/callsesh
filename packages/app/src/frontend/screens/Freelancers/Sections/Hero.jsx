import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";

import Highlight from "@/frontend/components/Highlight";
import SignupActionButton from "@/frontend/components/Buttons/SignupAction";
import IntroButton from "@/frontend/components/Buttons/Intro";

const HeroSection = () => {
	const [css, theme] = useStyletron();

	return (
		<section
			id="hero"
			className={css({
				position: "relative",
				padding: "25px 0 75px"
			})}
		>
			<Grid gridGutter={16}>
				<Cell span={[12, 3, 4]}>
					<img
						src="/static/assets/woman-on-laptop-in-coffee-shop.jpg"
						alt="woman-on-laptop-in-coffee-shop"
						className={css({
							objectFit: "cover",
							height: "100%",
							width: "100%",
							boxShadow: `-10px 10px 0 ${theme.colors.warning400}`,
							[theme.mediaQuery.maxSmall]: {
								display: "none"
							}
						})}
					/>
				</Cell>
				<Cell span={[12, 5, 8]}>
					<div
						className={css({
							height: "100%",
							display: "flex",
							alignItems: "flex-start",
							flexDirection: "column",
							justifyContent: "center",
							position: "relative",
							zIndex: "100",
							// textAlign: "center",
							padding: "75px 0"
						})}
					>
						<h1
							className={css({
								...theme.typography.DisplaySmall,
								fontWeight: "900",
								marginTop: "0px",
								marginBottom: "0px"
							})}
						>
							<Highlight>Agile</Highlight> engagement and collaboration for your
							freelance business
						</h1>
						<h2
							className={css({
								...theme.typography.HeadingSmall,
								maxWidth: "700px",
								marginLeft: "auto",
								marginRight: "auto",
								padding: "10px 0"
							})}
						>
							Offer your clients metered call sessions to solve their problems
							on-the-fly, whether it takes 10 minutes or a day.
						</h2>
						<div
							className={css({
								width: "100%",
								marginBottom: "20px"
							})}
						>
							<SignupActionButton />
						</div>
						<div className={css({ width: "100%" })}>
							<IntroButton />
						</div>
					</div>
				</Cell>
			</Grid>
		</section>
	);
};

export default HeroSection;

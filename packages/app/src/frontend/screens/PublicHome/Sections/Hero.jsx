/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";

import Highlight from "@/frontend/components/Highlight";
import CallPageSlider from "@/frontend/components/CallPageSlider";
import SignupActionButton from "@/frontend/components/Buttons/SignupAction";
import IntroButton from "@/frontend/components/Buttons/Intro";

const PublicHomeHeroSection = () => {
	const [css, theme] = useStyletron();

	return (
		<section
			id="callsesh-home-hero-section"
			className={css({
				paddingBottom: "30px",
				position: "relative",
				"::after": {
					content: '""',
					position: "absolute",
					left: "0px",
					right: "0px",
					bottom: "0px",
					height: "200px",
					backgroundColor: `rgb(248, 248, 248)`,
					borderRadius: `${theme.borders.radius400} ${theme.borders.radius400} 0px 0px`
				}
			})}
		>
			<Grid gridGutters={16}>
				<Cell span={12}>
					<div
						className={css({
							height: "100%",
							display: "flex",
							alignItems: "flex-start",
							flexDirection: "column",
							justifyContent: "center",
							padding: "50px 30px 20px 10px",
							position: "relative",
							zIndex: "100",
							backgroundColor: "#fff",
							textAlign: "center"
						})}
					>
						<h1
							className={css({
								...theme.typography.DisplaySmall,
								fontWeight: "900",
								marginTop: "0px",
								marginBottom: "0px",
								marginLeft: "auto",
								marginRight: "auto"
							})}
						>
							<strong className={css({ fontWeight: "900" })}>
								Offer yourself over a call session and{" "}
								<Highlight>get paid</Highlight>.
							</strong>
						</h1>
						<h2
							className={css({
								...theme.typography.HeadingSmall,
								paddingBottom: "20px"
							})}
						>
							Eliminate the hassle in quoting, time tracking, invoicing and
							payment collection. With metered call sessions in Callsesh, you
							can collaborate and consult your callers all while charging for
							your time.
						</h2>
						<div
							className={css({
								width: "100%",
								zIndex: "1",
								position: "relative",
								marginBottom: "20px"
							})}
						>
							<SignupActionButton />
						</div>
						<div
							className={css({
								width: "100%"
							})}
						>
							<IntroButton />
						</div>
					</div>
				</Cell>
				<Cell span={12}>
					<div
						className={css({
							position: "relative",
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						})}
					>
						<div
							className={css({
								position: "relative",
								zIndex: "10"
							})}
						>
							<CallPageSlider tilt={false} />
						</div>
						<div
							className={css({
								position: "relative",
								zIndex: "5",
								marginLeft: "-100px",
								[theme.mediaQuery.maxSmall]: {
									display: "none"
								}
							})}
						>
							<img
								src="/static/assets/features/metering.jpg"
								alt="Freelancer and Freelancing: Meter your time and get paid"
								className={css({
									borderRadius: theme.borders.radius400,
									height: "100%",
									width: "100%",
									boxShadow: "-10px 10px 30px rgba(0, 0, 0, 0.1)",
									minWidth: "600px"
								})}
							/>
						</div>
					</div>
				</Cell>
			</Grid>
		</section>
	);
};

export default PublicHomeHeroSection;

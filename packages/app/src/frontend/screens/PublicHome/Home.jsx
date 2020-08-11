/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";

import Layout from "@/frontend/components/Layout";
import Highlight from "@/frontend/components/Highlight";
import CallPageSlider from "@/frontend/components/CallPageSlider";
import SignupActionButton from "@/frontend/components/Buttons/SignupAction";
import IntroButton from "@/frontend/components/Buttons/Intro";

// import HeroSection from "./Sections/Hero";

const PublicHomeScreen = () => {
	const [css, theme] = useStyletron();

	return (
		<Layout>
			<div
				id="callsesh-public-home-screen"
				className={css({ maxWidth: "100%" })}
			>
				<div
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
										marginBottom: "0px"
									})}
								>
									Offer your premium time over a call session and{" "}
									<Highlight>get paid</Highlight>.
								</h1>
								<h2 className={css({ ...theme.typography.HeadingSmall })}>
									Share your skills, expert advice, instant assistance and
									personality with your audience and customers. Set your rate
									and spread your word.
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
				</div>
			</div>
		</Layout>
	);
};

export default PublicHomeScreen;

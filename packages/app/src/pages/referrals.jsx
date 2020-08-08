import { useStyletron } from "baseui";
import { H3, Paragraph2 as Paragraph } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";

import Layout from "@/frontend/components/Layout";
import SignupActionButton from "@/frontend/components/SignupActionButton";
import Highlight from "@/frontend/components/Highlight";

const Referrals = () => {
	const [css, theme] = useStyletron();

	return (
		<Layout>
			<div
				id="callsesh-referrals-screen"
				className={css({ maxWidth: "100%", overflow: "hidden" })}
			>
				<Grid gridGutters={16}>
					<Cell span={12}>
						<div className={css({ position: "relative" })}>
							<div
								className={css({
									height: "100%",
									display: "flex",
									alignItems: "flex-start",
									flexDirection: "column",
									justifyContent: "center",
									padding: "50px 30px 50px 10px",
									position: "relative",
									zIndex: "100",
									width: "50%",
									[theme.mediaQuery.maxMedium]: {
										width: "100%"
									}
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
									Invite operators to take calls on Callsesh and{" "}
									<Highlight>get paid</Highlight>.
								</h1>
								<h2 className={css({ ...theme.typography.HeadingSmall })}>
									Get an invite link by creating an account for free. Share your
									invite link with your audience or friends and get paid when
									they do.
								</h2>
								<div
									className={css({
										width: "100%"
									})}
								>
									<SignupActionButton />
								</div>
							</div>
							<div
								className={css({
									position: "absolute",
									right: "-25%",
									top: "0px",
									bottom: "0px",
									width: "100%",
									height: "100%",
									[theme.mediaQuery.maxMedium]: {
										display: "none"
									}
								})}
							>
								<img
									src="/static/assets/calling.svg"
									alt="Invite operators and get paid"
									className={css({
										height: "100%",
										width: "100%"
									})}
								/>
							</div>
						</div>
					</Cell>
					<Cell span={12}>
						<div
							className={css({
								textAlign: "center",
								maxWidth: "600px",
								margin: "0 auto",
								padding: "20px 0 40px"
							})}
						>
							<H3>
								Are you a blogger, agent, webmaster, or social influencer?
							</H3>
							<Paragraph>
								Become a referrer and earn more! Turn your following and
								influence into hard money in the bank, with our referral
								program. You will receive 5% commission upto $50,000 on all
								income earned by any user who joins Callsesh as an operator via
								your invite link. So join for free, post your referral link to
								your audience and then sit back, relax and watch your earnings
								grow!
							</Paragraph>
							<Paragraph>
								Partners are paid on the first calendar day of each month,
								directly into their bank account or Paypal account. All earnings
								are categorised per user and we are continually adding new tools
								and features to provide our partners with the tools and
								marketing material that will enhance their experience and
								earning potential.
							</Paragraph>
						</div>
					</Cell>
				</Grid>
			</div>
		</Layout>
	);
};

export default Referrals;

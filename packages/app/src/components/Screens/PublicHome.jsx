/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { H3 } from "baseui/typography";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";
import {
	PhoneCall as PhoneIcon,
	PhoneOff as AnonPhoneIcon,
	DollarSign as PayoutIcon,
	User as UserIcon
} from "react-feather";
import { Button, SIZE as BUTTON_SIZE } from "baseui/button";
import ArrowRight from "baseui/icon/arrow-right";

import * as routes from "@/routes";
import Link from "@/components/Link";
import Highlight from "@/components/Highlight";
import PhoneMockup from "@/components/PhoneMockup";
// import UppercaseLabel from "@/components/UppercaseLabel";

const PublicHomeScreen = () => {
	const [css, theme] = useStyletron();

	const listItemProps = {
		artworkSize: ARTWORK_SIZES.MEDIUM,
		overrides: {
			Root: {
				style: {
					backgroundColor: "transparent",
					marginTop: "10px",
					marginBottom: "20px"
				}
			},
			ArtworkContainer: {
				style: {
					paddingBottom: "0px",
					marginRight: "20px",
					color: theme.colors.accent,
					backgroundColor: theme.colors.accent100,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "10px",
					height: "50px",
					width: "50px"
				}
			},
			Content: {
				style: {
					height: "auto",
					width: "calc(100% - 70px)",
					borderBottom: "0px",
					paddingBottom: "0px"
				}
			}
		}
	};

	return (
		<div id="callsesh-public-home-screen">
			<Grid gridGutters={16}>
				<Cell span={[12, 5, 6]}>
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
							backgroundColor: "#fff"
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
							Offer your time over a call and <Highlight>get paid</Highlight>.
						</h1>
						<h2 className={css({ ...theme.typography.HeadingSmall })}>
							Share your skills, expert advice and personality with your
							audience and customers. Set your rates and spread your word.
						</h2>
						<div
							className={css({
								width: "100%"
							})}
						>
							<Link
								href={routes.page.signup}
								button
								style={{
									display: "inline-block",
									width: "100%",
									maxWidth: "300px"
								}}
							>
								<Button
									size={BUTTON_SIZE.large}
									endEnhancer={<ArrowRight size={24} />}
									overrides={{
										BaseButton: {
											style: {
												width: "100%",
												position: "relative",
												"::before": {
													content: '""',
													position: "absolute",
													left: "0px",
													right: "0px",
													top: "0px",
													bottom: "0px",
													backgroundColor: theme.colors.accent,
													transform: "translate(-5px, 5px)",
													zIndex: "-1",
													transition: "transform 0.25s"
												},
												":hover": {
													"::before": {
														transform: "translate(-10px, 10px)"
													}
												},
												":active": {
													"::before": {
														transform: "translate(0)"
													}
												}
											}
										}
									}}
								>
									Get Started
								</Button>
							</Link>
						</div>
					</div>
				</Cell>
				<Cell span={[12, 3, 6]}>
					<div
						className={css({
							display: "flex",
							justifyContent: "flex-end",
							transform: "scale(0.9) rotate(3deg)",
							[theme.mediaQuery.maxMedium]: {
								marginRight: "-40px"
							},
							[theme.mediaQuery.maxSmall]: {
								marginRight: "0px",
								justifyContent: "center"
							}
						})}
					>
						<PhoneMockup>
							<img
								src="/static/assets/phone-demo-2.jpg"
								alt="Callsesh phone demonstration"
							/>
						</PhoneMockup>
					</div>
				</Cell>
				<Cell span={12}>
					<div
						className={css({
							position: "relative",
							backgroundColor: "#fff",
							paddingBottom: "50px",
							paddingTop: "25px",
							borderTop: `3px solid rgb(250, 250, 250)`,
							marginTop: "25px",
							[theme.mediaQuery.maxSmall]: {
								zIndex: "100",
								marginTop: "-50%",
								paddingTop: "50px",
								borderColor: theme.colors.primary
							}
						})}
					>
						<div>
							<H3 marginTop="0px">How it works</H3>
							<ListItem artwork={UserIcon} {...listItemProps}>
								<ListItemLabel description="It is completely free to signup. We only make money when you do.">
									Create an account
								</ListItemLabel>
							</ListItem>
							<ListItem artwork={PhoneIcon} {...listItemProps}>
								<ListItemLabel description="You decide when you're available, whenever you want, at the flick of a switch.">
									Go live and accept calls
								</ListItemLabel>
							</ListItem>
							<ListItem artwork={AnonPhoneIcon} {...listItemProps}>
								<ListItemLabel description="We will never release your personal phone number to your callers. Keeping your personal contact information hidden and secure is our priority.">
									Hidden phone numbers
								</ListItemLabel>
							</ListItem>
							<ListItem artwork={PayoutIcon} {...listItemProps}>
								<ListItemLabel description="Set your own hourly rate, and charge by the second. Setup your payouts and get paid when you take calls.">
									Get paid
								</ListItemLabel>
							</ListItem>
						</div>
					</div>
				</Cell>
			</Grid>
		</div>
	);
};

export default PublicHomeScreen;

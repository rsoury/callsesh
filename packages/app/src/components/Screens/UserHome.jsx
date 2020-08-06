import React, { useEffect } from "react";
import { useStyletron } from "baseui";
import { H1 as Heading, ParagraphMedium as Paragraph } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";
import { PLACEMENT as TOOLTIP_PLACEMENT } from "baseui/tooltip";
import { motion } from "framer-motion";
import { Button, SHAPE as BUTTON_SHAPE } from "baseui/button";
import ArrowRight from "baseui/icon/arrow-right";
import { toaster } from "baseui/toast";
import { useRouter } from "next/router";

import isUserOperator from "@/utils/is-operator";
import Link from "@/components/Link";
import Layout from "@/components/Layout";
import PayoutsCard from "@/components/Cards/Payouts";
import GoLiveCard from "@/components/Cards/GoLive";
import CallLinkCard from "@/components/Cards/CallLink";
import InviteLinkCard from "@/components/Cards/InviteLink";
import BecomeAnOperatorCard from "@/components/Cards/BecomeAnOperator";
import useUser from "@/hooks/use-user";
import * as routes from "@/routes";

const UserHomeScreen = () => {
	const [css, theme] = useStyletron();
	const [user] = useUser();
	const router = useRouter();

	const isOperator = isUserOperator(user);

	const cardOverrides = {
		Root: {
			style: {
				borderTopRightRadius: theme.borders.radius300,
				borderTopLeftRadius: theme.borders.radius300,
				borderBottomRightRadius: theme.borders.radius300,
				borderBottomLeftRadius: theme.borders.radius300
			}
		}
	};

	useEffect(() => {
		if (
			!user.emailVerified &&
			(router.query.chat_error === true || router.query.chat_error === "true")
		) {
			toaster.negative(`Your email must be verified to access Callsesh Chat`);
		}
	}, []);

	return (
		<Layout
			style={
				isOperator
					? {
							paddingBottom: "100px",
							[theme.mediaQuery.large]: {
								paddingBottom: "0px"
							}
					  }
					: {}
			}
		>
			<div
				id="callsesh-user-home-screen"
				className={css({ maxWidth: "100%", position: "relative" })}
			>
				<Grid>
					<Cell span={12}>
						<Heading>Welcome {user.givenName}!</Heading>
					</Cell>
					{isOperator ? (
						<>
							<Cell span={12}>
								<GoLiveCard overrides={cardOverrides} />
							</Cell>
							<Cell span={12}>
								<CallLinkCard overrides={cardOverrides} />
							</Cell>
							<Cell span={12}>
								<PayoutsCard
									helpPlacement={TOOLTIP_PLACEMENT.left}
									overrides={cardOverrides}
								/>
							</Cell>
							<Cell span={12}>
								<InviteLinkCard overrides={cardOverrides} />
							</Cell>
						</>
					) : (
						<>
							<Cell span={12}>
								<div
									className={css({
										padding: "20px",
										borderTop: `1px solid ${theme.colors.borderOpaque}`,
										borderBottom: `1px solid ${theme.colors.borderOpaque}`,
										marginBottom: "30px"
									})}
								>
									<Paragraph marginTop="0px" marginBottom="0px">
										Get immediate assistance from Callsesh Operators across the
										internet.
										<br />
										Use their Callsesh Call Link to visit their page. Get
										notified when they go live and if they&apos;re live, make a
										call.
									</Paragraph>
								</div>
							</Cell>
							<Cell span={12}>
								<InviteLinkCard overrides={cardOverrides} />
							</Cell>
							<Cell span={12}>
								<BecomeAnOperatorCard overrides={cardOverrides} />
							</Cell>
						</>
					)}
				</Grid>
				<div
					className={css({
						position: "fixed",
						left: "0px",
						right: "0px",
						bottom: "0px",
						height: "80px",
						padding: "10px 0",
						zIndex: "999",
						[theme.mediaQuery.large]: {
							display: "none"
						}
					})}
				>
					<motion.div
						animate={{ y: 0, opacity: 1 }}
						initial={{ y: 20, opacity: 0 }}
						className={css({
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						})}
					>
						<Link
							button
							href={routes.page.chat}
							standard
							newWindow
							style={{
								width: "100%",
								maxWidth: "200px",
								margin: "0 auto"
							}}
						>
							<Button
								shape={BUTTON_SHAPE.pill}
								endEnhancer={() => (
									<ArrowRight size={18} style={{ marginTop: "1px" }} />
								)}
								overrides={{
									BaseButton: {
										style: {
											width: "100%",
											boxShadow: `-5px 10px 30px rgba(0, 0, 0, 0.2)`
										}
									}
								}}
							>
								Open Chat
							</Button>
						</Link>
					</motion.div>
				</div>
			</div>
		</Layout>
	);
};

export default UserHomeScreen;

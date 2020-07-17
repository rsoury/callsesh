import React from "react";
import { useStyletron } from "baseui";
import { H1 as Heading, ParagraphMedium as Paragraph } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";
import { PLACEMENT as TOOLTIP_PLACEMENT } from "baseui/tooltip";

import isUserOperator from "@/utils/is-operator";
import PayoutsCard from "@/components/Cards/Payouts";
import GoLiveCard from "@/components/Cards/GoLive";
import CallLinkCard from "@/components/Cards/CallLink";
import InviteLinkCard from "@/components/Cards/InviteLink";
import BecomeAnOperatorCard from "@/components/Cards/BecomeAnOperator";
import useUser from "@/hooks/use-user";

const UserHomeScreen = () => {
	const [css, theme] = useStyletron();
	const [user] = useUser();

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

	return (
		<div id="callsesh-user-home-screen" className={css({ maxWidth: "100%" })}>
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
									Use their Callsesh Call Link to visit their page. Get notified
									when they go live and if they&apos;re live, make a call.
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
		</div>
	);
};

export default UserHomeScreen;

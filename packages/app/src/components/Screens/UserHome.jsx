import React from "react";
import { useStyletron } from "baseui";
import { H1 as Heading, Paragraph2 as Paragraph } from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";
import {
	Star as StarIcon,
	Map as MapIcon,
	PhoneCall as OperatorIcon
} from "react-feather";
import { Button } from "baseui/button";
import ChevronRight from "baseui/icon/chevron-right";
import { PLACEMENT as TOOLTIP_PLACEMENT } from "baseui/tooltip";

import Card from "@/components/Card";
import isUserOperator from "@/utils/is-operator";
import * as routes from "@/routes";
import PayoutsCard from "@/components/Cards/Payouts";
import LinksCard from "@/components/Cards/Links";
import GoLiveCard from "@/components/Cards/GoLive";
import Link from "@/components/Link";
import Highlight from "@/components/Highlight";
import useUser from "@/hooks/use-user";

const UserHomeScreen = () => {
	const [css] = useStyletron();
	const [user] = useUser();

	const isOperator = isUserOperator(user);

	return (
		<div id="callsesh-user-home-screen" className={css({ maxWidth: "100%" })}>
			<Grid gridGutters={16}>
				<Cell span={12}>
					<Heading>Welcome {user.givenName}!</Heading>
				</Cell>
				{isOperator ? (
					<>
						<Cell span={[12, 4, 6]}>
							<GoLiveCard
								overrides={{
									Root: {
										style: {
											borderRightWidth: "0px",
											borderLeftWidth: "0px",
											borderBottomWidth: "0px"
										}
									}
								}}
							/>
						</Cell>
						<Cell span={[12, 4, 6]}>
							<PayoutsCard
								helpPlacement={TOOLTIP_PLACEMENT.left}
								overrides={{
									Root: {
										style: {
											borderRightWidth: "0px",
											borderLeftWidth: "0px",
											borderBottomWidth: "0px"
										}
									}
								}}
							/>
						</Cell>
					</>
				) : (
					<Cell span={12}>
						<div className={css({ marginBottom: "30px" })}>
							<Link href={routes.page.becomeAnOperator} button>
								<Button
									startEnhancer={() => <OperatorIcon size={22} />}
									endEnhancer={() => <ChevronRight size={22} />}
								>
									Become an Operator
								</Button>
							</Link>
						</div>
					</Cell>
				)}
				<Cell span={12}>
					<LinksCard />
				</Cell>
				<Cell span={[12, 4, 6]}>
					<Card
						title="Where to find Operators?"
						icon={MapIcon}
						overrides={{
							Root: {
								style: {
									borderRightWidth: "0px",
									borderLeftWidth: "0px",
									borderBottomWidth: "0px"
								}
							}
						}}
					>
						<Paragraph>
							Callsesh Operators will share their links around the internet, and
							on their <Highlight>social media</Highlight> profiles. If an
							Operator is live, feel free to make a call.
						</Paragraph>
					</Card>
				</Cell>
				<Cell span={[12, 4, 6]}>
					<Card
						title="New to the world"
						icon={StarIcon}
						overrides={{
							Root: {
								style: {
									borderRightWidth: "0px",
									borderLeftWidth: "0px",
									borderBottomWidth: "0px"
								}
							}
						}}
					>
						<Paragraph>
							Callsesh is a new platform and is currently in{" "}
							<Highlight>Beta</Highlight>. If you experience any odd behaviour,
							or would to like to offer your suggestion, please feel free to
							contact Callsesh support.
						</Paragraph>
					</Card>
				</Cell>
			</Grid>
		</div>
	);
};

export default UserHomeScreen;

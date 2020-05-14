/**
 * The payouts card to appear on the home page for operators
 */

import React from "react";
import { Button } from "baseui/button";
import {
	Lock as SecureIcon,
	DollarSign as BankAccountIcon,
	AlignLeft as FormIcon
} from "react-feather";
import ChevronRight from "baseui/icon/chevron-right";
import { ParagraphXSmall } from "baseui/typography";
import { useStyletron, withStyle } from "baseui";
import { StyledSpinnerNext } from "baseui/spinner";

import Highlight from "@/components/Highlight";
import Link from "@/components/Link";
import Card from "@/components/Card";
import * as routes from "@/routes";
import { isStripeConnectAvailable } from "@/utils/user-support";
import useUser from "@/hooks/use-user";
import { PAYOUTS_SUBMISSION_FORM_URL } from "@/constants";

const cardProps = {
	title: "Manage Payouts",
	icon: BankAccountIcon,
	helpText: `Receive your payouts by connecting your bank account and appropriate information. We will hold your pending payouts until you have connected a verified payout method.`
};

const Spinner = withStyle(StyledSpinnerNext, {
	width: "20px",
	height: "20px"
});

const PayoutsCard = () => {
	const [css] = useStyletron();
	const [user, isUserLoading] = useUser();

	if (isUserLoading) {
		return (
			<Card {...cardProps}>
				<div
					className={css({
						display: "flex",
						height: "200px",
						alignItems: "center",
						justifyContent: "center"
					})}
				>
					<Spinner />
				</div>
			</Card>
		);
	}

	return (
		<Card {...cardProps}>
			{isStripeConnectAvailable(user.country) ? (
				<div>
					<Link
						href={routes.api.connect.start}
						style={{ textDecoration: "none !important" }}
					>
						<Button
							startEnhancer={() => <SecureIcon size={22} />}
							endEnhancer={() => <ChevronRight size={22} />}
						>
							{user.payoutsSetup ? `Manage` : `Setup`} Payouts
						</Button>
					</Link>
					<ParagraphXSmall>
						We use <Highlight>Stripe</Highlight> to make sure you get paid on
						time and to keep your personal bank and details secure.
					</ParagraphXSmall>
				</div>
			) : (
				<Link
					href={PAYOUTS_SUBMISSION_FORM_URL}
					target="_blank"
					rel="noopener noreferrer"
					standard
				>
					<Button
						startEnhancer={() => <FormIcon size={22} />}
						endEnhancer={() => <ChevronRight size={22} />}
					>
						Setup Payouts
					</Button>
				</Link>
			)}
		</Card>
	);
};

export default PayoutsCard;

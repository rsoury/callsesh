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
import { useStyletron } from "baseui";
import { Tag, VARIANT as TAG_VARIANT, KIND as TAG_KIND } from "baseui/tag";

import Highlight from "@/components/Highlight";
import Link from "@/components/Link";
import Card from "@/components/Card";
import EnsureVerified from "@/components/EnsureVerified";
import * as routes from "@/routes";
import { isStripeConnectAvailable } from "@/utils/user-support";
import useUser from "@/hooks/use-user";
import { PAYOUTS_SUBMISSION_FORM_URL } from "@/constants";

import LoadingCard from "./Loading";

const cardProps = {
	title: "Manage Payouts",
	icon: BankAccountIcon,
	helpText: `Receive your payouts by connecting your bank account and appropriate information. We will hold your pending payouts until you have connected a verified payout method.`
};

const tagProps = {
	closeable: false,
	variant: TAG_VARIANT.solid,
	overrides: {
		Root: {
			style: {
				marginTop: "0px",
				marginLeft: "0px",
				marginRight: "0px",
				marginBottom: "0px"
			}
		},
		Text: {
			style: {
				maxWidth: "none"
			}
		}
	}
};

const PayoutsCard = ({ ...props }) => {
	const [css] = useStyletron();
	const [user, isUserLoading] = useUser();

	if (isUserLoading) {
		return <LoadingCard {...cardProps} {...props} />;
	}

	return (
		<Card {...cardProps} {...props}>
			{isStripeConnectAvailable(user.country) ? (
				<div>
					<div className={css({ marginBottom: "10px" })}>
						{!user.payouts.setup && (
							<Tag {...tagProps} kind={TAG_KIND.primary}>
								Requires setup
							</Tag>
						)}
						{user.payouts.setup && !user.payouts.enabled && (
							<Tag {...tagProps} kind={TAG_KIND.negative}>
								Requires further information
							</Tag>
						)}
						{user.payouts.setup && user.payouts.enabled && (
							<Tag {...tagProps} kind={TAG_KIND.positive}>
								Connected
							</Tag>
						)}
					</div>
					<EnsureVerified inline>
						<Link href={routes.api.connect.start} button>
							<Button
								startEnhancer={() => <SecureIcon size={22} />}
								endEnhancer={() => <ChevronRight size={22} />}
							>
								{user.payouts.setup ? `Manage` : `Setup`} Payouts
							</Button>
						</Link>
					</EnsureVerified>
					<ParagraphXSmall>
						We use <Highlight>Stripe</Highlight> to make sure you get paid on
						time and to keep your personal bank and details secure.
					</ParagraphXSmall>
				</div>
			) : (
				<div>
					<EnsureVerified inline>
						<Link
							href={PAYOUTS_SUBMISSION_FORM_URL}
							target="_blank"
							rel="noopener noreferrer"
							standard
							button
						>
							<Button
								startEnhancer={() => <FormIcon size={22} />}
								endEnhancer={() => <ChevronRight size={22} />}
							>
								Setup Payouts
							</Button>
						</Link>
					</EnsureVerified>
					<ParagraphXSmall>
						Submit your payout information and verify your details with the
						Callsesh support team to get paid by us on the first day of each
						calendar month.
					</ParagraphXSmall>
				</div>
			)}
		</Card>
	);
};

export default PayoutsCard;

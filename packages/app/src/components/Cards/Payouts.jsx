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
					{user.payouts.setup && (
						<div className={css({ marginBottom: "10px" })}>
							{user.payouts.enabled ? (
								<Tag {...tagProps} kind={TAG_KIND.positive}>
									Connected
								</Tag>
							) : (
								<Tag {...tagProps} kind={TAG_KIND.negative}>
									Requires further information
								</Tag>
							)}
						</div>
					)}
					<Link href={routes.api.connect.start} button>
						<Button
							startEnhancer={() => <SecureIcon size={22} />}
							endEnhancer={() => <ChevronRight size={22} />}
						>
							{user.payouts.setup ? `Manage` : `Setup`} Payouts
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

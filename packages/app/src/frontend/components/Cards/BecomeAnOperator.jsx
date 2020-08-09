import React from "react";
import { useStyletron } from "baseui";
import { ParagraphMedium as Paragraph } from "baseui/typography";
import { Button } from "baseui/button";
import ChevronRight from "baseui/icon/chevron-right";
import { PhoneCall as OperatorIcon } from "react-feather";

import Card from "@/frontend/components/Card";
import * as routes from "@/routes";
import Link from "@/frontend/components/Link";

const cardProps = {
	title: "Receive calls and get paid",
	icon: OperatorIcon
};

const BecomeAnOperatorCard = ({ ...props }) => {
	const [css] = useStyletron();

	return (
		<Card {...cardProps} {...props}>
			<Paragraph>
				Have customers or an audience that would benefit from your service,
				skills, talent, or advice?
				<br />
				Offer your immediate assistance through metered call sessions.
			</Paragraph>
			<div className={css({ margin: "10px 0" })}>
				<Link href={routes.page.becomeAnOperator} button>
					<Button endEnhancer={() => <ChevronRight size={22} />}>
						Become an Operator
					</Button>
				</Link>
			</div>
		</Card>
	);
};

export default BecomeAnOperatorCard;

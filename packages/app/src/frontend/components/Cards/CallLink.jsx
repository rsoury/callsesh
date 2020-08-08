import React from "react";
import {
	ParagraphMedium as Paragraph,
	ParagraphXSmall
} from "baseui/typography";
import { Phone as PhoneIcon, Link as LinkIcon } from "react-feather";
import CopyToClipboard from "react-copy-to-clipboard";
import { toaster } from "baseui/toast";
import { Button } from "baseui/button";

import Card from "@/frontend/components/Card";
import * as routes from "@/routes";
import Link from "@/frontend/components/Link";
import useUser from "@/frontend/hooks/use-user";

import LoadingCard from "./Loading";

const cardProps = {
	title: "Share your Call link",
	icon: PhoneIcon
};

const CallLinkCard = ({ ...props }) => {
	const [user, isUserLoading] = useUser();

	if (isUserLoading) {
		return <LoadingCard {...cardProps} {...props} />;
	}

	const operatorLink = `${window.location.origin}${routes.build.user(
		user.username
	)}`;

	return (
		<Card {...cardProps} {...props}>
			<Paragraph>
				Share your call link with your audience or clients. Visitors can call
				you if you&apos;re live and get notified when your go live.
			</Paragraph>
			<CopyToClipboard
				text={operatorLink}
				onCopy={() => toaster.info(`Copied Call Link!`)}
			>
				<Button
					startEnhancer={() => <LinkIcon size={22} />}
					overrides={{
						BaseButton: {
							style: {
								marginRight: "10px"
							}
						}
					}}
				>
					Copy Call Link
				</Button>
			</CopyToClipboard>
			<ParagraphXSmall>
				Or you can visit your call link here{" "}
				<Link href={operatorLink} standard newWindow highlight>
					<strong>{operatorLink}</strong>
				</Link>
			</ParagraphXSmall>
		</Card>
	);
};

export default CallLinkCard;

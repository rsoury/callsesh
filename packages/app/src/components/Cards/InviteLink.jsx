import React from "react";
import { useStyletron } from "baseui";
import { ParagraphMedium as Paragraph } from "baseui/typography";
import { UserPlus as InviteLinkIcon, Link as LinkIcon } from "react-feather";
import CopyToClipboard from "react-copy-to-clipboard";
import { toaster } from "baseui/toast";
import { Input } from "baseui/input";
import { Button, SIZE as BUTTON_SIZE } from "baseui/button";

import Card from "@/components/Card";
import * as routes from "@/routes";
import Link from "@/components/Link";
import useUser from "@/hooks/use-user";

import LoadingCard from "./Loading";

const cardProps = {
	title: "Tell a friend",
	icon: InviteLinkIcon
};

const InviteLinkCard = ({ ...props }) => {
	const [css] = useStyletron();
	const [user, isUserLoading] = useUser();

	if (isUserLoading) {
		return <LoadingCard {...cardProps} {...props} />;
	}

	const inviteLink = `${window.location.origin}${routes.build.invite(
		user.username
	)}`;

	return (
		<Card {...cardProps} {...props}>
			<Paragraph>
				Invite others earn a commission on their sessions.{" "}
				<Link href={routes.page.referrals} highlight standard target="_blank">
					Learn more
				</Link>
			</Paragraph>
			<div
				className={css({
					display: "flex",
					alignItems: "center"
				})}
			>
				<Input
					value={inviteLink}
					overrides={{
						Root: {
							style: {
								marginRight: "10px"
							}
						},
						Input: {
							props: {
								readOnly: true,
								onClick: (e) => e.target.select()
							}
						}
					}}
				/>
				<CopyToClipboard
					text={inviteLink}
					onCopy={() => toaster.info(`Copied Referral Invite Link!`)}
				>
					<Button
						startEnhancer={() => <LinkIcon size={22} />}
						size={BUTTON_SIZE.compact}
						overrides={{
							BaseButton: {
								style: { height: "48px" }
							}
						}}
					>
						Copy
					</Button>
				</CopyToClipboard>
			</div>
		</Card>
	);
};

export default InviteLinkCard;

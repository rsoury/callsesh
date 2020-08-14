import React from "react";
import { useStyletron } from "baseui";
import {
	ParagraphMedium as Paragraph,
	ParagraphXSmall
} from "baseui/typography";
import {
	Phone as PhoneIcon,
	Link as LinkIcon,
	PhoneCall as CallIcon,
	Briefcase as WorkIcon
} from "react-feather";
import CopyToClipboard from "react-copy-to-clipboard";
import { toaster } from "baseui/toast";
import { Button } from "baseui/button";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";

import Card from "@/frontend/components/Card";
import * as routes from "@/routes";
import Link from "@/frontend/components/Link";
import useUser from "@/frontend/hooks/use-user";

import LoadingCard from "./Loading";

const listItemProps = {
	artworkSize: ARTWORK_SIZES.MEDIUM,
	overrides: {
		Root: {
			style: {
				backgroundColor: "transparent",
				marginTop: "0px",
				marginBottom: "10px"
			}
		},
		ArtworkContainer: {
			style: {
				paddingBottom: "10px",
				justifyContent: "flex-start",
				width: "24px",
				minWidth: "24px",
				marginRight: "15px"
			}
		},
		Content: {
			style: {
				height: "auto",
				paddingBottom: "10px",
				paddingRight: "0px"
			}
		}
	}
};

const cardProps = {
	title: "Share your Callsesh Link",
	icon: PhoneIcon
};

const SharePageCard = ({ ...props }) => {
	const [css, theme] = useStyletron();
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
				Share your Callsesh link with your audience or clients.
			</Paragraph>
			<ul className={css({ margin: "0px", padding: "0px" })}>
				<ListItem artwork={CallIcon} {...listItemProps}>
					<ListItemLabel description="Visitors can call if you're live, get notified when you're not live.">
						<span className={css({ ...theme.typography.LabelSmall })}>
							Get Called
						</span>
					</ListItemLabel>
				</ListItem>
				<ListItem artwork={WorkIcon} {...listItemProps}>
					<ListItemLabel description="Get permission to start metered sessions whenever you're working for your client.">
						<span className={css({ ...theme.typography.LabelSmall })}>
							Get Hired
						</span>
					</ListItemLabel>
				</ListItem>
			</ul>
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
					Copy Callsesh Link
				</Button>
			</CopyToClipboard>
			<ParagraphXSmall>
				Or you can visit your Callsesh link here{" "}
				<Link href={operatorLink} standard newWindow highlight>
					<strong>{operatorLink}</strong>
				</Link>
			</ParagraphXSmall>
		</Card>
	);
};

export default SharePageCard;

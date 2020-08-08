import { useStyletron } from "baseui";
import { Label2 as Label } from "baseui/typography";
import {
	Link as LinkIcon,
	Phone as CallLinkIcon,
	UserPlus as InviteLinkIcon
} from "react-feather";
import CopyToClipboard from "react-copy-to-clipboard";
import { toaster } from "baseui/toast";
import ArrowRight from "baseui/icon/arrow-right";

import LabelControl from "@/frontend/components/LabelControl";
import Card from "@/frontend/components/Card";
import isUserOperator from "@/utils/is-operator";
import * as routes from "@/routes";
import Link from "@/frontend/components/Link";
import useUser from "@/frontend/hooks/use-user";

import LoadingCard from "./Loading";

const cardProps = {
	title: "Callsesh Links",
	icon: LinkIcon
};

const LinksCard = ({ ...props }) => {
	const [css, theme] = useStyletron();
	const [user, isUserLoading] = useUser();

	if (isUserLoading) {
		return <LoadingCard {...cardProps} {...props} />;
	}

	const isOperator = isUserOperator(user);

	const operatorPathname = routes.build.user(user.username);
	const operatorLink = `${window.location.origin}${operatorPathname}`;
	const inviteLink = `${window.location.origin}${routes.build.invite(
		user.username
	)}`;

	const copyTextClassName = css({
		cursor: "pointer",
		fontWeight: "700 !important",
		color: `${theme.colors.accent} !important`,
		"::before": {
			position: "absolute",
			left: "0px",
			right: "0px",
			top: "0px",
			bottom: "0px",
			content: '""',
			backgroundColor: "rgba(0, 0, 0, 0)",
			pointerEvents: "none",
			transition: "background-color 0.25s"
		},
		":active": {
			"::before": {
				backgroundColor: "rgba(0, 0, 0, 0.1)"
			}
		}
	});

	const labelControlStyle = {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis"
	};

	return (
		<Card {...cardProps} {...props}>
			<LabelControl
				label={() => (
					<div className={css({ display: "flex", alignItems: "center" })}>
						<span className={css({ marginRight: "10px" })}>Call Link</span>
						<span
							className={css({
								height: "2px",
								width: "10px",
								backgroundColor: theme.colors.accent,
								marginRight: "5px"
							})}
						/>
						<Link
							href={operatorPathname}
							style={{
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								color: `${theme.colors.accent} !important`
							}}
						>
							<span>Visit</span>
							<ArrowRight size={22} />
						</Link>
					</div>
				)}
				caption={
					isOperator
						? `Share this link with your audience or customers. Visitors will be able to call you if you're live.`
						: `Share this link with your audience or customers. Once you become an Operator, visitors will be able to call you.`
				}
				startEnhancer={() => <CallLinkIcon size={22} />}
				endEnhancer={() => <Label>Copy</Label>}
				style={labelControlStyle}
			>
				<CopyToClipboard
					text={operatorLink}
					onCopy={() => toaster.info(`Copied Call Link!`)}
				>
					<Label className={copyTextClassName}>{operatorLink}</Label>
				</CopyToClipboard>
			</LabelControl>
			<LabelControl
				label="Referral Invite Link"
				caption={() => (
					<span>
						Invite others to become an Operator and earn a commission on their
						sessions.{" "}
						<Link href={routes.page.referrals} highlight>
							Learn more
						</Link>
					</span>
				)}
				startEnhancer={() => <InviteLinkIcon size={22} />}
				endEnhancer={() => <Label>Copy</Label>}
				style={labelControlStyle}
			>
				<CopyToClipboard
					text={inviteLink}
					onCopy={() => toaster.info(`Copied Referral Invite Link!`)}
				>
					<Label className={copyTextClassName}>{inviteLink}</Label>
				</CopyToClipboard>
			</LabelControl>
		</Card>
	);
};

export default LinksCard;

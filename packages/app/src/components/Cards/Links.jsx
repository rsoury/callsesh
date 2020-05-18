import { useStyletron } from "baseui";
import { Label2 as Label } from "baseui/typography";
import {
	Link as LinkIcon,
	Phone as PhoneIcon,
	Users as InviteIcon,
	Clipboard as ClipboardIcon
} from "react-feather";
import CopyToClipboard from "react-copy-to-clipboard";
import { toaster } from "baseui/toast";
import {
	Button,
	SHAPE as BUTTON_SHAPE,
	SIZE as BUTTON_SIZE
} from "baseui/button";
import ArrowRight from "baseui/icon/arrow-right";

import LabelControl from "@/components/LabelControl";
import Card from "@/components/Card";
import isUserOperator from "@/utils/is-operator";
import * as routes from "@/routes";
import Link from "@/components/Link";
import useUser from "@/hooks/use-user";

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

	const operatorPathname = `/u/${user.username}`;
	const operatorLink = `${window.location.origin}${operatorPathname}`;
	const inviteLink = `${window.location.origin}/u/${user.username}/invite`;

	const copyTextClassName = css({
		opacity: "1",
		transition: "opacity 0.25s",
		cursor: "pointer",
		fontWeight: "700 !important",
		color: `${theme.colors.accent} !important`,
		":active": {
			opacity: `0.8 !important`
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
						<span className={css({ marginRight: "10px" })}>Operator Link</span>
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
				startEnhancer={() => <PhoneIcon size={22} />}
				endEnhancer={() => <ClipboardIcon size={22} />}
				style={labelControlStyle}
			>
				<CopyToClipboard
					text={operatorLink}
					onCopy={() => toaster.info(`Copied Operator Link!`)}
				>
					<Label className={copyTextClassName}>{operatorLink}</Label>
				</CopyToClipboard>
			</LabelControl>
			<LabelControl
				label="Invite Link"
				caption={() => (
					<span>
						Invite others to become an Operator and earn a commission on their
						sessions.{" "}
						<Link href={routes.page.referrals} highlight>
							Learn more
						</Link>
					</span>
				)}
				startEnhancer={() => <InviteIcon size={22} />}
				endEnhancer={() => <ClipboardIcon size={22} />}
				style={labelControlStyle}
			>
				<CopyToClipboard
					text={inviteLink}
					onCopy={() => toaster.info(`Copied Invite Link!`)}
				>
					<Label className={copyTextClassName}>{inviteLink}</Label>
				</CopyToClipboard>
			</LabelControl>
		</Card>
	);
};

export default LinksCard;

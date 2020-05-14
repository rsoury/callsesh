import { useStyletron } from "baseui";
import isEmpty from "is-empty";
import {
	H1 as Heading,
	Paragraph2 as Paragraph,
	Label2 as Label
} from "baseui/typography";
import { Grid, Cell } from "baseui/layout-grid";
import {
	Link as LinkIcon,
	Star as StarIcon,
	Phone as PhoneIcon,
	Users as InviteIcon,
	Map as MapIcon,
	Clipboard as ClipboardIcon,
	PhoneCall as OperatorIcon,
	Radio as LiveIcon
} from "react-feather";
import CopyToClipboard from "react-copy-to-clipboard";
import { toaster } from "baseui/toast";
import Link from "next/link";
import { Button } from "baseui/button";
import ChevronRight from "baseui/icon/chevron-right";

import Layout from "@/components/Layout";
import Card from "@/components/Card";
import LabelControl from "@/components/LabelControl";
import { getUser } from "@/middleware/auth";
import isUserOperator from "@/utils/is-operator";
import { setUser } from "@/hooks/use-user";
import * as routes from "@/routes";
import { UserProps, ChildrenProps } from "@/utils/common-prop-types";
import PayoutsCard from "@/components/Cards/Payouts";

const Highlight = ({ children }) => {
	const [css, theme] = useStyletron();

	return (
		<strong className={css({ color: theme.colors.accent })}>{children}</strong>
	);
};

Highlight.propTypes = {
	children: ChildrenProps.isRequired
};

const Index = ({ user }) => {
	setUser(user);
	const [css, theme] = useStyletron();

	const isAuthenticated = !isEmpty(user);
	const isOperator = isUserOperator(user);

	const operatorLink = `${window.location.origin}/u/${user.username}`;
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
		<Layout>
			{isAuthenticated ? (
				<div id="callsesh-user-screen">
					<Grid gridGutters={16}>
						<Cell span={12}>
							<Heading>Welcome {user.givenName}!</Heading>
						</Cell>
						{isOperator ? (
							<>
								<Cell span={[12, 4, 6]}>
									<Card title="Go Live" icon={LiveIcon}>
										<Paragraph>Go live</Paragraph>
									</Card>
								</Cell>
								<Cell span={[12, 4, 6]}>
									<PayoutsCard />
								</Cell>
							</>
						) : (
							<Cell span={12}>
								<div className={css({ marginBottom: "30px" })}>
									<Link href={routes.page.becomeAnOperator}>
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
							<Card title="Callsesh Links" icon={LinkIcon}>
								<LabelControl
									label="Operator Link"
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
											Invite others to become an Operator and earn a commission
											on their sessions.{" "}
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
						</Cell>
						<Cell span={[12, 4, 6]}>
							<Card title="Where to find Operators?" icon={MapIcon}>
								<Paragraph>
									Callsesh Operators will share their links around the internet,
									and on their <Highlight>social media</Highlight> profiles. If
									an Operator is live, feel free to make a call.
								</Paragraph>
							</Card>
						</Cell>
						<Cell span={[12, 4, 6]}>
							<Card title="New to the world" icon={StarIcon}>
								<Paragraph>
									Callsesh is a new platform and is currently in{" "}
									<Highlight>Beta</Highlight>. If you experience any odd
									behaviour, or would to like to offer your suggestion, please
									feel free to contact Callsesh support.
								</Paragraph>
							</Card>
						</Cell>
					</Grid>
				</div>
			) : (
				<h1>Welcome to Callsesh!</h1>
			)}
		</Layout>
	);
};

export async function getServerSideProps({
	req,
	res,
	query: { return_url: returnUrl = "/" }
}) {
	// Check if user already registered.
	const user = await getUser(req);

	if (isEmpty(user)) {
		return { props: {} };
	}

	// If user is registered, redirect to settings/profile
	if (!user.isRegistered) {
		res.writeHead(302, {
			Location: `${routes.page.register}?return_url=${returnUrl}`
		});
		res.end();
	}

	return {
		props: {
			user
		}
	};
}

Index.propTypes = {
	user: UserProps
};

Index.defaultProps = {
	user: {}
};

export default Index;

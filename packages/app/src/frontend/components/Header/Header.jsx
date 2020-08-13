/* eslint-disable react/prop-types */

import React from "react";
import { useStyletron } from "baseui";
import {
	Button,
	KIND as BUTTON_KIND,
	SHAPE as BUTTON_SHAPE,
	SIZE as BUTTON_SIZE
} from "baseui/button";
import {
	CreditCard as WalletIcon,
	User as ProfileIcon,
	LogOut as LogoutIcon,
	LogIn as LoginIcon,
	Edit2 as SignupIcon,
	MessageSquare as ChatIcon,
	Briefcase as WorkIcon
} from "react-feather";
import isEmpty from "is-empty";
import { Unstable_AppNavBar as AppNavBar } from "baseui/app-nav-bar";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/router";
import Url from "url-parse";
import { Tag, KIND as TAG_KIND, VARIANT as TAG_VARIANT } from "baseui/tag";
import { StatefulTooltip as Tooltip } from "baseui/tooltip";
import ArrowRight from "baseui/icon/arrow-right";
import ChevronRight from "baseui/icon/chevron-right";
import { motion } from "framer-motion";

import Link from "@/frontend/components/Link";
import * as routes from "@/routes";
import useUser from "@/frontend/hooks/use-user";
import appendReturnUrl from "@/frontend/utils/append-return-url";
import isUserOperator from "@/utils/is-operator";

import Logo from "./Logo";
import VerifyEmail from "./VerifyEmail";
import InSessionTopBar from "./InSessionTopBar";

const NavItemPrimitive = ({ label, ...props }) => {
	const [css, theme] = useStyletron();

	return (
		<div
			className={css({
				marginRight: "-10px",
				marginLeft: "-10px",
				...theme.typography.LabelSmall,
				fontSize: "15px"
			})}
		>
			<Link button {...props}>
				{label}
			</Link>
		</div>
	);
};

const NavItemButtonPrimitive = ({ label, buttonProps = {}, ...props }) => {
	const [css, theme] = useStyletron();

	return (
		<div className={css({ marginRight: "-10px", marginLeft: "-10px" })}>
			<Link button {...props}>
				<Button
					size={BUTTON_SIZE.compact}
					{...buttonProps}
					overrides={{
						BaseButton: {
							style: {
								width: "100%",
								justifyContent: "flex-start",
								fontSize: "15px",
								[theme.mediaQuery.maxMedium]: {
									backgroundColor: "rgba(0, 0, 0, 0)",
									color: theme.colors.primary,
									paddingTop: "0px",
									paddingRight: "0px",
									paddingLeft: "0px",
									paddingBottom: "0px",
									fontSize: "inherit !important"
								}
							}
						}
					}}
				>
					{label}
				</Button>
			</Link>
		</div>
	);
};

const NavItem = (props) => <NavItemPrimitive {...props} />;

const NavItemButton = (props) => <NavItemButtonPrimitive {...props} />;

const NavItemLabel = ({ label }) => label;

const getNavIcon = (Icon) => (props) => (
	<Icon {...props} size={30} style={{ marginRight: "10px" }} />
);

const Header = () => {
	const [css, theme] = useStyletron();
	const [user, isLoading] = useUser();
	const router = useRouter();

	const navProps = {};

	if (isLoading) {
		navProps.mainNav = [0, 1].map((key) => ({
			mapItemToNode: () => (
				<div
					key={key}
					className={css({
						height: "72px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginRight: "-20px"
					})}
				>
					<Skeleton height={45} width={100} />
				</div>
			)
		}));
	} else if (isEmpty(user)) {
		navProps.mainNav = [
			{
				icon: getNavIcon(ChevronRight),
				item: {
					label: "Are you a Freelancer?",
					href: routes.page.freelancers,
					pass: true
				},
				mapItemToNode: NavItem,
				mapItemToString: NavItemLabel
			},
			{
				icon: getNavIcon(LoginIcon),
				item: {
					label: "Log In",
					href: appendReturnUrl(routes.page.login),
					standard: true,
					buttonProps: {
						kind: BUTTON_KIND.tertiary
					}
				},
				mapItemToNode: NavItemButton,
				mapItemToString: NavItemLabel
			},
			{
				icon: getNavIcon(SignupIcon),
				item: {
					label: "Sign Up",
					href: appendReturnUrl(routes.page.signup),
					standard: true
				},
				mapItemToNode: NavItemButton,
				mapItemToString: NavItemLabel
			}
		];
	} else {
		navProps.username = user.nickname;
		navProps.usernameSubtitle = user.phoneNumber;
		navProps.userImgUrl = user.picture;
		navProps.userNav = [
			{
				icon: getNavIcon(LogoutIcon),
				item: {
					label: "Logout",
					href: routes.page.logout,
					standard: true
				},
				mapItemToNode: NavItem,
				mapItemToString: NavItemLabel
			}
		];
		navProps.mainNav = [
			{
				icon: getNavIcon(ChatIcon),
				item: {
					label: "Chat",
					href: routes.page.chat,
					buttonProps: {
						kind: BUTTON_KIND.secondary,
						shape: BUTTON_SHAPE.pill,
						endEnhancer() {
							return <ArrowRight size={18} style={{ marginTop: "1px" }} />;
						},
						onClick() {
							return null;
						}
					},
					standard: true,
					newWindow: true
				},
				mapItemToNode: NavItemButton,
				mapItemToString: NavItemLabel
			},
			{
				icon: getNavIcon(WorkIcon),
				item: { label: "Contacts", href: routes.page.contacts },
				mapItemToNode: NavItem,
				mapItemToString: NavItemLabel
			},
			{
				icon: getNavIcon(ProfileIcon),
				item: { label: "Profile", href: routes.page.settings.profile },
				mapItemToNode: NavItem,
				mapItemToString: NavItemLabel
			},
			{
				icon: getNavIcon(WalletIcon),
				item: {
					label: "Wallet",
					href: routes.page.settings.wallet
				},
				mapItemToNode: NavItem,
				mapItemToString: NavItemLabel
			}
		];
	}

	return (
		<header
			id="callsesh-header"
			className={css({
				overflow: "hidden",
				position: "relative"
			})}
		>
			{!isEmpty((user || {}).callSession) && <InSessionTopBar />}
			{!isLoading && !isEmpty(user) && !(user || {}).emailVerified && (
				<VerifyEmail />
			)}
			<AppNavBar
				appDisplayName={
					<div className={css({ display: "flex", alignItems: "center" })}>
						<div
							className={css({
								display: "flex",
								alignItems: "flex-end"
							})}
						>
							<Link href={routes.page.index} button pass>
								<Logo />
							</Link>
							<Tooltip
								content={() => (
									<div className={css({ maxWidth: "280px" })}>
										Callsesh is a new platform and is currently in{" "}
										<strong>Beta</strong>. If you experience any odd behaviour,
										or would to like to offer your suggestion, please feel free
										to contact Callsesh support.
									</div>
								)}
								showArrow
								overrides={{
									Body: {
										style: {
											zIndex: "99999999"
										}
									}
								}}
							>
								<div
									className={css({
										display: "flex",
										transform: "translate(-5px, 10px)"
									})}
								>
									<Tag
										kind={TAG_KIND.accent}
										closeable={false}
										overrides={{
											Root: {
												style: {
													marginTop: "0px",
													marginBottom: "0px"
												}
											}
										}}
									>
										Beta
									</Tag>
								</div>
							</Tooltip>
						</div>
						{isUserOperator(user) && !!(user || {}).isLive && (
							<motion.div
								initial={{
									x: -20,
									opacity: 0
								}}
								animate={{
									x: 0,
									opacity: 1
								}}
							>
								<Tag
									kind={TAG_KIND.primary}
									variant={TAG_VARIANT.solid}
									closeable={false}
									overrides={{
										Root: {
											style: {
												marginTop: "0px",
												marginBottom: "0px"
											}
										}
									}}
								>
									<span
										className={css({ display: "flex", alignItems: "center" })}
									>
										<span
											className={css({
												display: "block",
												width: "10px",
												height: "10px",
												backgroundColor: theme.colors.negative300,
												borderRadius: "100%",
												marginRight: "5px"
											})}
										/>
										<strong>
											<span className={css({ color: "#fff" })}>Live</span>
										</strong>
									</span>
								</Tag>
							</motion.div>
						)}
					</div>
				}
				onNavItemSelect={({
					item: { item: { href, standard, newWindow } = {} }
				}) => {
					if (!isEmpty(href)) {
						if (typeof href === "object") {
							return router.push(href);
						}
						if (typeof href === "string") {
							if (!standard) {
								if (href.charAt(0) === "/") {
									return router.push(href);
								}
								const url = new Url(href, true);
								if (url.origin === window.location.origin) {
									return router.push({
										pathname: url.pathname,
										query: url.query
									});
								}
							}
							if (newWindow) {
								return window.open(href);
							}
							window.location.href = href;
						}
					}
					return null;
				}}
				{...navProps}
			/>
		</header>
	);
};

export default Header;

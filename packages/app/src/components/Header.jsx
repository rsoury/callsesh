/* eslint-disable react/prop-types */

import React from "react";
import { useStyletron } from "baseui";
import {
	Button,
	KIND as BUTTON_KIND,
	SIZE as BUTTON_SIZE
} from "baseui/button";
import {
	CreditCard as WalletIcon,
	User as ProfileIcon,
	LogOut as LogoutIcon,
	PhoneCall as PhoneIcon
} from "react-feather";
import ArrowRight from "baseui/icon/arrow-right";
import isEmpty from "is-empty";
import { Unstable_AppNavBar as AppNavBar } from "baseui/app-nav-bar";
import Skeleton from "react-loading-skeleton";

import Link from "@/components/Link";
import * as routes from "@/routes";
import useUser from "@/hooks/use-user";
import appendReturnUrl from "@/utils/append-return-url";

import Logo from "./Logo";

const NavItem = ({ label, href, ...props }) => (
	<Link href={href} button {...props}>
		{label}
	</Link>
);

const NavItemButton = ({ label, href, buttonKind, ...props }) => (
	<Link href={href} button {...props}>
		<Button
			kind={buttonKind || BUTTON_KIND.tertiary}
			overrides={{
				BaseButton: {
					style: {
						width: "100%",
						justifyContent: "flex-start"
					}
				}
			}}
		>
			{label}
		</Button>
	</Link>
);

const NavItemLabel = ({ label }) => label;

const InCallTopBar = () => {
	const [css, theme] = useStyletron();
	const [user] = useUser();

	if (isEmpty(user)) {
		return null;
	}

	const inSessionWithRoute = routes.build.user(user.callSession.with);
	const onViewUserPage = window.location.pathname === inSessionWithRoute;

	return (
		<Link
			href={inSessionWithRoute}
			button
			style={{ pointerEvents: onViewUserPage ? "none" : "auto" }}
		>
			<Button
				size={BUTTON_SIZE.mini}
				startEnhancer={() => <PhoneIcon size={18} />}
				overrides={{
					BaseButton: {
						style: {
							width: "100%",
							backgroundColor: theme.colors.positive,
							borderBottomLeftRadius: "4px",
							borderBottomRightRadius: "4px"
						}
					}
				}}
			>
				<span className={css({ display: "flex", alignItems: "center" })}>
					You are currently in a call
					{!onViewUserPage && (
						<span className={css({ display: "flex", alignItems: "center" })}>
							<span
								className={css({
									height: "2px",
									width: "10px",
									backgroundColor: "#fff",
									margin: "0 5px"
								})}
							/>
							<span>Visit</span>
							<span
								className={css({
									marginLeft: "5px",
									display: "flex",
									alignItems: "center"
								})}
							>
								<ArrowRight size={20} />
							</span>
						</span>
					)}
				</span>
			</Button>
		</Link>
	);
};

const Header = () => {
	const [css] = useStyletron();
	const [user, isLoading] = useUser();

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
						justifyContent: "center"
					})}
				>
					<Skeleton height={45} width={100} />
				</div>
			)
		}));
	} else if (isEmpty(user)) {
		navProps.mainNav = [
			{
				item: {
					label: "Log In",
					href: appendReturnUrl(routes.page.login, true),
					pass: true
				},
				mapItemToNode: NavItemButton,
				mapItemToString: NavItemLabel
			},
			{
				item: {
					label: "Sign Up",
					href: appendReturnUrl(routes.page.signup, true),
					buttonKind: BUTTON_KIND.primary,
					pass: true
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
				icon: LogoutIcon,
				item: {
					label: "Logout",
					href: routes.page.logout,
					pass: true
				},
				mapItemToNode: NavItem,
				mapItemToString: NavItemLabel
			}
		];
		navProps.mainNav = [
			{
				icon: ProfileIcon,
				item: { label: "Profile", href: routes.page.settings.profile },
				mapItemToNode: NavItem,
				mapItemToString: NavItemLabel
			},
			{
				icon: WalletIcon,
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
				overflow: "hidden"
			})}
		>
			{!isEmpty(user.callSession) && <InCallTopBar />}
			<AppNavBar
				appDisplayName={<Logo />}
				appDisplayNameLink={routes.page.index}
				isNavItemActive={() => {}}
				onNavItemSelect={() => {}}
				{...navProps}
			/>
		</header>
	);
};

export default Header;

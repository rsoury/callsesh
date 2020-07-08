/* eslint-disable react/prop-types */

import React from "react";
import { useStyletron } from "baseui";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import {
	CreditCard as WalletIcon,
	User as ProfileIcon,
	LogOut as LogoutIcon,
	LogIn as LoginIcon,
	Edit2 as SignupIcon
} from "react-feather";
import isEmpty from "is-empty";
import { Unstable_AppNavBar as AppNavBar } from "baseui/app-nav-bar";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/router";
import Url from "url-parse";

import Link from "@/components/Link";
import * as routes from "@/routes";
import useUser from "@/hooks/use-user";
import appendReturnUrl from "@/utils/append-return-url";

import Logo from "./Logo";
import VerifyEmail from "./VerifyEmail";
import InCallTopBar from "./InCallTopBar";

const NavItem = ({ label, href, ...props }) => (
	<Link href={href} button {...props}>
		{label}
	</Link>
);

const getNavItemButton = ([, theme]) => ({
	label,
	href,
	buttonKind,
	...props
}) => (
	<Link href={href} button {...props}>
		<Button
			kind={buttonKind || BUTTON_KIND.tertiary}
			overrides={{
				BaseButton: {
					style: {
						width: "100%",
						justifyContent: "flex-start",
						[theme.mediaQuery.maxSmall]: {
							backgroundColor: "rgba(0, 0, 0, 0)",
							color: theme.colors.primary
						}
					}
				}
			}}
		>
			{label}
		</Button>
	</Link>
);

const NavItemLabel = ({ label }) => label;

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
						justifyContent: "center"
					})}
				>
					<Skeleton height={45} width={100} />
				</div>
			)
		}));
	} else if (isEmpty(user)) {
		const NavItemButton = getNavItemButton([css, theme]);
		navProps.mainNav = [
			{
				icon: LoginIcon,
				item: {
					label: "Log In",
					href: appendReturnUrl(routes.page.login),
					standard: true
				},
				mapItemToNode: NavItemButton,
				mapItemToString: NavItemLabel
			},
			{
				icon: SignupIcon,
				item: {
					label: "Sign Up",
					href: appendReturnUrl(routes.page.signup),
					buttonKind: BUTTON_KIND.primary,
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
				icon: LogoutIcon,
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
			{!isEmpty((user || {}).callSession) && <InCallTopBar />}
			{!isLoading && !isEmpty(user) && !(user || {}).emailVerified && (
				<VerifyEmail />
			)}
			<AppNavBar
				appDisplayName={
					<Link href={routes.page.index} button pass>
						<Logo />
					</Link>
				}
				onNavItemSelect={({ item: { item: { href, standard } = {} } }) => {
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

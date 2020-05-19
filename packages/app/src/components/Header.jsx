/* eslint-disable react/prop-types */

import React from "react";
import { useStyletron } from "baseui";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import {
	CreditCard as WalletIcon,
	User as ProfileIcon,
	LogOut as LogoutIcon
} from "react-feather";
import isEmpty from "is-empty";
import { Unstable_AppNavBar as AppNavBar } from "baseui/app-nav-bar";
import Skeleton from "react-loading-skeleton";

import Link from "@/components/Link";
import * as routes from "@/routes";
import useUser from "@/hooks/use-user";
import appendReturnUrl from "@/utils/append-return-url";
import isAuth0Avatar from "@/utils/is-auth0-avatar";

import Logo from "./Logo";

const NavItem = ({ label, href }) => (
	<Link href={href} button>
		{label}
	</Link>
);

const NavItemButton = ({ label, href, buttonKind, ...props }) => (
	<Link href={href} button>
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
			{...props}
		>
			{label}
		</Button>
	</Link>
);

const NavItemLabel = ({ label }) => label;

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
					href: appendReturnUrl(routes.page.login, true)
				},
				mapItemToNode: NavItemButton,
				mapItemToString: NavItemLabel
			},
			{
				item: {
					label: "Sign Up",
					href: appendReturnUrl(routes.page.signup, true),
					buttonKind: BUTTON_KIND.primary
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
					href: routes.page.logout
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

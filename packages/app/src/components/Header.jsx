/* eslint-disable react/prop-types */

import React from "react";
import { useStyletron } from "baseui";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import {
	CreditCard as PaymentMethodsIcon,
	User as ProfileIcon,
	LogOut as LogoutIcon
} from "react-feather";
import isEmpty from "is-empty";
import Skeleton from "react-loading-skeleton";
import { Unstable_AppNavBar as AppNavBar } from "baseui/app-nav-bar";
import Link from "@/components/Link";
import * as routes from "@/routes";
import useUser from "@/hooks/use-user";
import appendReturnUrl from "@/utils/append-return-url";

import Logo from "./Logo";

const NavItem = ({ label, href }) => (
	<Link href={href} style={{ textDecoration: "none" }}>
		{label}
	</Link>
);

const NavItemButton = ({ label, href, buttonKind, ...props }) => (
	<Link href={href} style={{ textDecoration: "none" }}>
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

const NavItemSkeleton = () => {
	const [css] = useStyletron();

	return (
		<div
			className={css({
				height: "72px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			})}
		>
			<Skeleton height={45} width={100} />
		</div>
	);
};

const NavItemLabel = ({ label }) => label;

const Header = () => {
	const [css] = useStyletron();
	const [user, isLoading] = useUser();

	const navProps = {};

	if (isLoading) {
		navProps.mainNav = [
			{
				mapItemToNode: NavItemSkeleton
			},
			{
				mapItemToNode: NavItemSkeleton
			}
		];
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
				icon: PaymentMethodsIcon,
				item: {
					label: "Payment Methods",
					href: routes.page.settings.paymentMethods
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
				isNavItemActive={() => {}}
				onNavItemSelect={() => {}}
				{...navProps}
			/>
		</header>
	);
};

export default Header;

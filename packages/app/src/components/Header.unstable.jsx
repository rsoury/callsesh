/* eslint-disable react/prop-types */

import React from "react";
import { useStyletron } from "baseui";
import { Button, KIND as BUTTON_KIND } from "baseui/button";
import {
	CreditCard as PaymentMethodsIcon,
	User as ProfileIcon
} from "react-feather";
import isEmpty from "is-empty";
import Skeleton from "react-loading-skeleton";
import { Unstable_AppNavBar as AppNavBar } from "baseui/app-nav-bar";
import Link from "@/components/Link";
import * as routes from "@/routes";
import useUser from "@/hooks/use-user";
import appendReturnUrl from "@/utils/append-return-url";

import Logo from "./Logo";

const NavItem = ({ label, href, buttonKind, ...props }) => (
	<Link href={href}>
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
	// const user = {};
	// const isLoading = false;

	const navProps = {};

	if (isLoading) {
		const mapItemToNode = () => (
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
		navProps.mainNav = [
			{
				mapItemToNode
			},
			{
				mapItemToNode
			}
		];
	} else if (isEmpty(user)) {
		navProps.mainNav = [
			{
				item: {
					label: "Log In",
					href: appendReturnUrl(routes.page.login, true)
				},
				mapItemToNode: NavItem,
				mapItemToString: NavItemLabel
			},
			{
				item: {
					label: "Sign Up",
					href: appendReturnUrl(routes.page.signup, true),
					buttonKind: BUTTON_KIND.primary
				},
				mapItemToNode: NavItem,
				mapItemToString: NavItemLabel
			}
		];
	} else {
		navProps.username = user.name;
		navProps.usernameSubtitle = user.nickname;
		const mapItemToNode = ({ label, href }) => <Link href={href}>{label}</Link>;
		navProps.userNav = [
			{
				icon: ProfileIcon,
				item: { label: "Profile", href: routes.page.settings.profile },
				mapItemToNode,
				mapItemToString: NavItemLabel
			},
			{
				icon: PaymentMethodsIcon,
				item: {
					label: "Payment Methods",
					href: routes.page.settings.paymentMethods
				},
				mapItemToNode,
				mapItemToString: NavItemLabel
			}
		];
	}

	return (
		<div
			className={css({
				overflow: "hidden"
			})}
		>
			<AppNavBar
				appDisplayName={<Logo />}
				overrides={{
					Root: {
						style: {
							boxShadow: "none",
							padding: "0"
						}
					},
					Base: {
						style: {
							boxShadow: "none",
							padding: "0"
						}
					},
					AppNavBar: {
						style: {
							boxShadow: "none",
							padding: "0"
						}
					}
				}}
				{...navProps}
			/>
		</div>
	);
};

export default Header;

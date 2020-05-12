import React from "react";
import { useStyletron } from "baseui";

import { page as pageRoutes } from "@/routes";
import Link from "@/components/Link";

const nav = [
	{
		text: "Referrals",
		href: pageRoutes.referrals
	},
	{
		text: "Terms of Service",
		href: pageRoutes.tos
	},
	{
		text: "Privacy Policy",
		href: pageRoutes.privacyPolicy
	},
	{
		text: "Cookie Policy",
		href: pageRoutes.cookiePolicy
	}
];

const Footer = () => {
	const [css] = useStyletron();

	return (
		<footer className={css({ paddingTop: "50px" })}>
			<nav>
				<ul
					className={css({
						listStyle: "none",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						margin: "0px",
						padding: "0px"
					})}
				>
					{nav.map(({ text, href }) => (
						<li className={css({ margin: "0px 10px" })}>
							<Link href={href}>{text}</Link>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;

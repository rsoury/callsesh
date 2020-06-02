import React from "react";
import { useStyletron } from "baseui";
import { Paragraph4 as Paragraph } from "baseui/typography";

import { page as pageRoutes } from "@/routes";
import Link from "@/components/Link";
import useUser from "@/hooks/use-user";

const getSupportEmail = (userId = "") =>
	`mailto:support${userId ? `+${userId}` : ``}@callsesh.com`;

const Footer = () => {
	const [css, theme] = useStyletron();
	const [user] = useUser();

	const nav = [
		{
			text: "FAQs",
			href: pageRoutes.faq
		},
		{
			text: "Refer A Friend",
			href: pageRoutes.referrals
		},
		{
			text: "Terms of Service",
			href: pageRoutes.terms.tos
		},
		{
			text: "Privacy Policy",
			href: pageRoutes.terms.privacyPolicy
		},
		{
			text: "Cookie Policy",
			href: pageRoutes.terms.cookiePolicy
		},
		{
			text: "Callsesh Support",
			href: getSupportEmail((user || {}).username),
			standard: true
		}
	];

	return (
		<footer className={css({ padding: "40px 0 10px 0" })}>
			<nav>
				<ul
					className={css({
						listStyle: "none",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						margin: "0px",
						padding: "0px",
						[theme.mediaQuery.maxSmall]: {
							flexDirection: "column"
						}
					})}
				>
					{nav.map(({ text, ...props }) => (
						<li
							key={text.toLowerCase()}
							className={css({ margin: "5px 10px" })}
						>
							<Link {...props} pass>
								{text}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<Paragraph
				className={css({
					marginTop: "20px",
					opacity: "0.8",
					textAlign: "center"
				})}
			>
				&copy;2020 Callsesh &nbsp;&middot;&nbsp; A{" "}
				<Link
					href="https://webdoodle.com.au/"
					target="_blank"
					rel="noopener noreferrer"
					standard
				>
					Web Doodle
				</Link>{" "}
				Project
			</Paragraph>
		</footer>
	);
};

export default Footer;

import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChildrenProps } from "@/utils/common-prop-types";

const maxWidthSize = 1024;

const Layout = ({ children, style, fullWidth }) => {
	const [css] = useStyletron();

	return (
		<main
			className={css({
				minHeight: "100vh",
				maxWidth: "100vw",
				overflow: "hidden",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				...style
			})}
		>
			<div
				className={css({
					maxWidth: `${maxWidthSize}px`,
					margin: "0 auto",
					width: "100%"
				})}
			>
				<Header />
			</div>
			<div
				className={css({
					flexGrow: 1,
					display: "flex",
					maxWidth: fullWidth ? "none" : `${maxWidthSize}px`,
					margin: "0 auto",
					width: "100%"
				})}
			>
				{children}
			</div>
			<div
				className={css({
					maxWidth: `${maxWidthSize}px`,
					margin: "0 auto",
					width: "100%"
				})}
			>
				<Footer />
			</div>
		</main>
	);
};

Layout.propTypes = {
	children: ChildrenProps.isRequired,
	style: PropTypes.object,
	fullWidth: PropTypes.bool
};

Layout.defaultProps = {
	style: {},
	fullWidth: false
};

export default Layout;

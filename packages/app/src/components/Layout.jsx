import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChildrenProps } from "@/utils/common-prop-types";

const maxWidthSize = 1024;

const Layout = ({
	children,
	style,
	fullWidth,
	noHeader,
	noFooter,
	bodyStyle,
	headerStyle,
	footerStyle
}) => {
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
					width: "100%",
					...headerStyle
				})}
			>
				{!noHeader && <Header />}
			</div>
			<div
				className={css({
					flexGrow: 1,
					maxWidth: fullWidth ? "none" : `${maxWidthSize}px`,
					margin: "0 auto",
					width: "100%",
					...bodyStyle
				})}
			>
				{children}
			</div>
			<div
				className={css({
					maxWidth: `${maxWidthSize}px`,
					margin: "0 auto",
					width: "100%",
					...footerStyle
				})}
			>
				{!noFooter && <Footer />}
			</div>
		</main>
	);
};

Layout.propTypes = {
	children: ChildrenProps.isRequired,
	style: PropTypes.object,
	fullWidth: PropTypes.bool,
	noHeader: PropTypes.bool,
	noFooter: PropTypes.bool,
	bodyStyle: PropTypes.object,
	headerStyle: PropTypes.object,
	footerStyle: PropTypes.object
};

Layout.defaultProps = {
	style: {},
	fullWidth: false,
	noHeader: false,
	noFooter: false,
	bodyStyle: {},
	headerStyle: {},
	footerStyle: {}
};

export default Layout;

import React from "react";
import PropTypes from "prop-types";
import { useStyletron } from "baseui";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChildrenProps } from "@/utils/common-prop-types";

const Layout = ({ children, style }) => {
	const [css] = useStyletron();

	return (
		<main
			className={css({
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				...style
			})}
		>
			<Header />
			<div className={css({ flexGrow: 1, display: "flex" })}>{children}</div>
			<Footer />
		</main>
	);
};

Layout.propTypes = {
	children: ChildrenProps.isRequired,
	style: PropTypes.object
};

Layout.defaultProps = {
	style: {}
};

export default Layout;

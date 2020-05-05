import React from "react";

import Header from "@/components/Header.unstable";
import { ChildrenProps } from "@/utils/common-prop-types";

const Layout = ({ children }) => {
	return (
		<main>
			<Header />
			<div>{children}</div>
		</main>
	);
};

Layout.propTypes = {
	children: ChildrenProps.isRequired
};

export default Layout;

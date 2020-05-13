import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChildrenProps } from "@/utils/common-prop-types";

const Layout = ({ children }) => {
	return (
		<main>
			<Header />
			<div>{children}</div>
			<Footer />
		</main>
	);
};

Layout.propTypes = {
	children: ChildrenProps.isRequired
};

export default Layout;

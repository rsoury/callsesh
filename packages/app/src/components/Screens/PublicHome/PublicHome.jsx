/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";

import Layout from "@/components/Layout";

import HeroSection from "./Sections/Hero";
import HowSection from "./Sections/How";
import FeaturesSection from "./Sections/Features";

const PublicHomeScreen = () => {
	const [css] = useStyletron();

	return (
		<Layout>
			<div
				id="callsesh-public-home-screen"
				className={css({ maxWidth: "100%" })}
			>
				<HeroSection />
				<HowSection />
				<FeaturesSection />
			</div>
		</Layout>
	);
};

export default PublicHomeScreen;

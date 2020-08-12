/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";

import Layout from "@/frontend/components/Layout";
import CallToActionSection from "@/frontend/components/CallToAction";

import HeroSection from "./Sections/Hero";
import GetStartedSection from "./Sections/GetStarted";
import FeaturesSection from "./Sections/Features";
import NarrowSection from "./Sections/Narrow";

const PublicHomeScreen = () => {
	const [css] = useStyletron();

	return (
		<Layout>
			<div
				id="callsesh-public-home-screen"
				className={css({ maxWidth: "100%" })}
			>
				<HeroSection />
				<GetStartedSection />
				<FeaturesSection />
				<CallToActionSection />
				<NarrowSection />
			</div>
		</Layout>
	);
};

export default PublicHomeScreen;

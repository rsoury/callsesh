/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";

import Layout from "@/components/Layout";

import HeroSection from "./Sections/Hero";
import HowSection from "./Sections/How";
import FeaturesSection from "./Sections/Features";
import UseCasesSection from "./Sections/UseCases";
import CallToAction from "./Sections/CallToAction";
import CredebilitySection from "./Sections/Credebility";

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
				<UseCasesSection />
				<CredebilitySection />
				<CallToAction />
			</div>
		</Layout>
	);
};

export default PublicHomeScreen;

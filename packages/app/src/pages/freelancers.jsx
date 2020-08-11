/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";
import { NextSeo } from "next-seo";

import Layout from "@/frontend/components/Layout";

import HeroSection from "@/frontend/screens/Freelancers/Sections/Hero";
import HowSection from "@/frontend/screens/Freelancers/Sections/How";
import FeaturesSection from "@/frontend/screens/Freelancers/Sections/Features";
import UseCasesSection from "@/frontend/screens/Freelancers/Sections/UseCases";
import CallToAction from "@/frontend/screens/Freelancers/Sections/CallToAction";
import CredebilitySection from "@/frontend/screens/Freelancers/Sections/Credebility";

const Freelancers = () => {
	const [css] = useStyletron();

	return (
		<Layout>
			<NextSeo
				title="Solve your client's problems on-the-fly"
				description="Offer your clients metered call sessions to solve their problems on-the-fly, whether it takes 10 minutes or a day. Callsesh is agile engagement and collaboration for your freelance business."
			/>
			<div
				id="callsesh-public-freelancers-screen"
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

export default Freelancers;

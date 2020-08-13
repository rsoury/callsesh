/**
 * Publicly accessable home screen -- for Unauthorised users.
 */

import React from "react";
import { useStyletron } from "baseui";

import Layout from "@/frontend/components/Layout";

import HeroSection from "@/frontend/screens/Freelancers/Sections/Hero";
import HowSection from "@/frontend/screens/Freelancers/Sections/How";
import FeaturesSection from "@/frontend/screens/Freelancers/Sections/Features";
import UseCasesSection from "@/frontend/screens/Freelancers/Sections/UseCases";
import CredebilitySection from "@/frontend/screens/Freelancers/Sections/Credebility";
import CallToAction from "@/frontend/components/CallToAction";

const Freelancers = () => {
	const [css] = useStyletron();

	return (
		<Layout>
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

export function getStaticProps() {
	return {
		props: {
			seo: {
				title: "Solve your client's problems on-the-fly",
				description:
					"Offer your clients call sessions to solve their problems on-the-fly. Callsesh is agile engagement and collaboration for your freelance business."
			}
		}
	};
}

export default Freelancers;

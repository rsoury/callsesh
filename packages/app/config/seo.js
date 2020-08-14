const description =
	"Work with your clients on-the-fly through metered call sessions. Action tasks, collaborate, and consult your clients all while charging for your time.";
const url = "https://www.callsesh.com/";

module.exports = {
	url,
	titleTemplate: "%s | Callsesh",
	title: "Work with your clients on-the-fly",
	description,
	canonical: url,
	openGraph: {
		type: "website",
		url,
		site_name: "Callsesh"
	},
	twitter: {
		handle: "@ryan_soury",
		cardType: "summary_large_image"
	}
};

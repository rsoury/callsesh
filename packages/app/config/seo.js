const description =
	"Earn money through metered call sessions. Eliminate the hassle out of quoting, time tracking, invoicing, and payments for your over-the-phone consultations.";
const url = "https://www.callsesh.com/";

module.exports = {
	url,
	titleTemplate: "%s | Callsesh",
	title: "Earn money for your time",
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

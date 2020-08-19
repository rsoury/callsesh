const description =
	"Earn money for your time through metered call sessions. Collaborate and consult your callers all while charging for your time.";
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

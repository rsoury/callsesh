const description =
	"Earn money offering your premium attention through metered call sessions. Share your skills, expert advice, instant assistance and personality with your audience and customers.";
const url = "https://www.callsesh.com/";

module.exports = {
	url,
	titleTemplate: "%s | Callsesh",
	title: "Earn money for your premium time",
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

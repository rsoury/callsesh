const description =
	"Callsesh allows you to make money by offering call sessions. Share your expertise, advice or care to your customers or audience.";
const url = "https://www.callsesh.com/";

module.exports = {
	url,
	titleTemplate: "Callsesh - %s",
	title: "Call sessions shared!",
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

const description =
	"Offer your clients metered call sessions to solve their problems on-the-fly, whether it takes 10 minutes or a day. Callsesh is agile engagement and collaboration for your freelance business.";
const url = "https://www.callsesh.com/";

module.exports = {
	url,
	titleTemplate: "Callsesh - %s",
	title: "Call sessions to solve your client's problems on-the-fly",
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

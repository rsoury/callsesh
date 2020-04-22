const description =
	"Wagecall allows you to offer your customers or audience access to your expertise, advice or care through a paid phone call.";
const url = "https://www.wagecall.com/";

module.exports = {
	url,
	titleTemplate: "Wagecall - %s",
	title: "Earn a wage, offer a call!",
	description,
	canonical: url,
	openGraph: {
		type: "website",
		url,
		site_name: "Wagecall"
	},
	twitter: {
		handle: "@ryan_soury",
		cardType: "summary_large_image"
	}
};

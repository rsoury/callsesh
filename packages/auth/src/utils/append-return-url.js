import Url from "url-parse";

export default (sourceUrl) => {
	if (typeof window !== "undefined") {
		const url = new Url(window.location.href, true);
		const { return_url: returnUrl } = url.query;
		const destUrl = new Url(sourceUrl, true);
		destUrl.set("query", {
			...destUrl.query,
			return_url: returnUrl
		});
		return destUrl.toString();
	}
	return sourceUrl;
};

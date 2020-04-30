import Url from "url-parse";

export default (sourceUrl, returnObject = false) => {
	if (typeof window !== "undefined") {
		if (returnObject) {
			return {
				pathname: sourceUrl,
				query: {
					return_url: window.location.href
				}
			};
		}
		const destUrl = new Url(sourceUrl, true);
		destUrl.set("query", {
			...destUrl.query,
			return_url: window.location.href
		});
		return destUrl.toString();
	}
	return sourceUrl;
};

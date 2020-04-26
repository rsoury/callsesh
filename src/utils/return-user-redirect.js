import Url from "url-parse";
import isEmpty from "is-empty";
import Router from "next/router";
import routes from "@/routes";

/**
 * Returns to user to return_url, previous page, or to index page.
 *
 * ie. a user log in, then redirect to original user url.
 */
export default () => {
	const url = new Url(window.location.href, true);
	const { return_url: returnUrl } = url.query;

	if (!isEmpty(returnUrl)) {
		Router.replace(returnUrl);
	} else if (window.history.length < 2) {
		Router.replace(routes.index);
	} else {
		Router.back();
	}
};

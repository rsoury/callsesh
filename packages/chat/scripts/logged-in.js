/* eslint-disable */
(function () {
	// Redirect to return_url if provided
	var params = new URLSearchParams(window.location.search);
	const returnUrl = params.get("return_url");

	if (typeof returnUrl === "string" && !!returnUrl) {
		window.location.href = returnUrl;
	}
})();

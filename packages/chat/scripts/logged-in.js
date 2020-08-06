/* eslint-disable */
(function () {
	// Redirect to return_url if provided
	var params = new URLSearchParams(window.location.search);
	const returnUrl = params.get("return_url");
	const removeCacheValue = params.get("remove_cache");
	const removeCache = removeCacheValue === "true" || removeCacheValue === true;

	if (typeof returnUrl === "string" && !!returnUrl) {
		window.location.href = returnUrl;
	}

	/* Override history API to push an event  */
	history.pushState = ((f) =>
		function pushState() {
			var ret = f.apply(this, arguments);
			window.dispatchEvent(new Event("pushState"));
			window.dispatchEvent(new Event("locationchange"));
			return ret;
		})(history.pushState);
	history.replaceState = ((f) =>
		function replaceState() {
			var ret = f.apply(this, arguments);
			window.dispatchEvent(new Event("replaceState"));
			window.dispatchEvent(new Event("locationchange"));
			return ret;
		})(history.replaceState);
	var mapPathToBodyClass = function () {
		if (window.location.pathname === "/account/profile") {
			document.body.classList.add("account-profile-page");
		} else {
			document.body.classList.remove("account-profile-page");
		}
	};
	mapPathToBodyClass();
	window.addEventListener("locationchange", function () {
		mapPathToBodyClass();
	});

	// Remove cookies if params says so
	if (removeCache) {
		document.cookie = "rc_uid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
		document.cookie = "rc_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
	}
})();

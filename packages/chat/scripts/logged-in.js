/* eslint-disable */
(function () {
	function setCookie(name, value, days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
	}
	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
	function eraseCookie(name) {
		document.cookie =
			name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	}

	// Redirect to return_url if provided
	var params = new URLSearchParams(window.location.search);
	const returnUrl = params.get("return_url");
	const removeCacheValue = params.get("remove_cache");
	const removeCache = removeCacheValue === "true" || removeCacheValue === true;

	if (typeof returnUrl === "string" && !!returnUrl) {
		setTimeout(() => {
			window.location.href = returnUrl;
		}, 1000);
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
		eraseCookie("rc_uid");
		eraseCookie("rc_token");
	}
})();

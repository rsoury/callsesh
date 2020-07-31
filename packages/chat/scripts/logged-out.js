/* eslint-disable */
(function () {
	// Show login form if query param provided -- for administation purposes.
	var params = new URLSearchParams(window.location.search);
	const showForm = params.get("admin_show_form");

	if (showForm === "true" || showForm === true) {
		document.body.classList.add("admin_show_form");
	}
})();

const startCase = require("lodash/startCase");

const message = (msg) => {
	if (!msg) {
		return "";
	}
	if (typeof msg === "object") {
		msg = Object.entries(msg)
			.map(([, value]) => value)
			.join(", ");
	}

	const words = msg.split(" ");
	const firstWord = words.shift();
	let first = startCase(firstWord);
	first = first.toLowerCase();
	const formatted = [
		first.charAt(0).toUpperCase() + first.substr(1),
		words.join(" ")
	].join(" ");

	return formatted;
};

module.exports = {
	message
};

import startCase from "lodash/startCase";

export const message = (msg) => {
	if (!msg) {
		return "";
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

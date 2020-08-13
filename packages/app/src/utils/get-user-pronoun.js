import isEmpty from "is-empty";

export default function getUserPronoun(user, own = true) {
	let pronoun = `They${own ? "'re" : ""}`;
	if (isEmpty((user || {}).gender)) {
		return pronoun;
	}

	if (user.gender.toLowerCase() === "male") {
		pronoun = `He${own ? "'s" : ""}`;
	} else if (user.gender.toLowerCase() === "female") {
		pronoun = `She${own ? "'s" : ""}`;
	}

	return pronoun;
}

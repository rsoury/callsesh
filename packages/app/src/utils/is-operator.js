/**
 * Check if user is operator.
 */

import isEmpty from "is-empty";

export default (user) => {
	if (isEmpty(user)) {
		return false;
	}
	const { roles } = user;
	return !isEmpty(roles.find((role) => role.name.toLowerCase() === "operator"));
};

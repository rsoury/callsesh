/**
 * Check if user is operator.
 */

import isEmpty from "is-empty";

const isUserOperator = (user) => {
	if (isEmpty(user)) {
		return false;
	}
	const { roles } = user;
	return !isEmpty(roles.find((role) => role.name.toLowerCase() === "operator"));
};

export default isUserOperator;

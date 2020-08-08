/**
 * Util function to get public properties from Call Session object
 */

import pickBy from "lodash/pickBy";

const getPublicCallSession = (callSession) =>
	pickBy(
		callSession,
		(value, key) => !["id", "preAuthorisation"].includes(key)
	);

export default getPublicCallSession;

/**
 * Util function to get public properties from Call Session object
 */

import pickBy from "lodash/pickBy";

const getPublicCallSession = (callSession) =>
	pickBy(callSession, (value, key) => !["id"].includes(key));

export default getPublicCallSession;

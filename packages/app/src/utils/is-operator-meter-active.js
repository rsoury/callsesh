/**
 * Check if operator user has actively running meter for the call session
 */

import isEmpty from "is-empty";

const isOperatorMeterActive = (user) => {
	if (isEmpty(user)) {
		return false;
	}
	if (isEmpty(user.callSession)) {
		return false;
	}
	const { meterStamps = [] } = user.callSession;
	const lastStamp = meterStamps[meterStamps.length - 1];
	if (Array.isArray(lastStamp)) {
		return lastStamp.length === 1;
	}
	return false;
};

export default isOperatorMeterActive;

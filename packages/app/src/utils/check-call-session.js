import isEmpty from "is-empty";

import { CALL_SESSION_USER_TYPE } from "@/constants";

const checkCallSession = (callerUser, operatorUser) => {
	const callerInSession = !isEmpty(callerUser.callSession);
	const operatorInSession = !isEmpty(operatorUser.callSession);
	const inSameSession =
		operatorInSession && callerInSession
			? operatorUser.callSession.with === callerUser.username &&
			  callerUser.callSession.with === operatorUser.username &&
			  operatorUser.callSession.as === CALL_SESSION_USER_TYPE.operator &&
			  callerUser.callSession.as === CALL_SESSION_USER_TYPE.caller &&
			  callerUser.callSession.id === operatorUser.callSession.id
			: false;

	return {
		isCaller: callerInSession,
		isOperator: operatorInSession,
		isSame: inSameSession
	};
};

export default checkCallSession;

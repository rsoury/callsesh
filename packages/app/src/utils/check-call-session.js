import isEmpty from "is-empty";

import { CALL_SESSION_USER_TYPE } from "@/constants";

const checkCallSession = (user1, user2) => {
	const callerUser =
		user1.callSession?.as === CALL_SESSION_USER_TYPE.caller ? user1 : user2;
	const operatorUser =
		user1.callSession?.as === CALL_SESSION_USER_TYPE.operator ? user1 : user2;

	const callerInSession = !isEmpty(callerUser.callSession);
	const operatorInSession = !isEmpty(operatorUser.callSession);
	const inSameSession =
		operatorInSession && callerInSession
			? operatorUser.callSession.with === callerUser.username &&
			  callerUser.callSession.with === operatorUser.username &&
			  callerUser.callSession.id === operatorUser.callSession.id
			: false;

	return {
		isCaller: callerInSession,
		isOperator: operatorInSession,
		isSame: inSameSession
	};
};

export default checkCallSession;

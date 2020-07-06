import isEmpty from "is-empty";

import { CALL_SESSION_USER_TYPE } from "@/constants";

const checkCallSession = (user, viewUser) => {
	const inSession = !isEmpty(user.callSession);
	const viewUserInSession = !isEmpty(viewUser.callSession);
	const inSessionWithViewUser =
		viewUserInSession && inSession
			? viewUser.callSession.with === user.username &&
			  user.callSession.with === viewUser.username &&
			  viewUser.callSession.as === CALL_SESSION_USER_TYPE.operator &&
			  user.callSession.as === CALL_SESSION_USER_TYPE.caller
			: false;

	return {
		isUser: inSession,
		isViewUser: viewUserInSession,
		isSame: inSessionWithViewUser
	};
};

export default checkCallSession;

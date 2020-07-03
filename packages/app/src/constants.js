import { constants } from "@callsesh/utils";

// Call Session
export const { CALL_SESSION_USER_TYPE } = constants;

// Payouts
export const PAYOUTS_SUBMISSION_FORM_URL =
	"https://forms.gle/zYHyhTds5opadV8b8";

// Error Types -- Shared between frontend and backend.
export const ERROR_TYPES = {
	// Auth
	userBlocked: "UserBlocked",
	// Call session
	paymentMethodRequired: "PaymentMethodRequired",
	// Operator
	operatorRequired: "OperatorRequired",
	operatorUnavailable: "OperatorUnavailable",
	operatorBusy: "OperatorBusy",
	// Caller
	callSessionExists: "CallSessionExists",
	proxyPhoneNumberRequired: "ProxyPhoneNumberRequired"
};

// 3DS Frame Messaging
export const THREE_D_SECURE_MESSAGE_TYPES = {
	complete: "3DS-authentication-complete",
	failed: "3DS-authentication-failed"
};

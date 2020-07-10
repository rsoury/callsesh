// Fees
export const FEE_MULTIPLIER = 0.15;
export const SERVICE_FEE = 50;

// Referral
export const OPERATOR_REFERRAL_MULTIPLIER = 0.05;
export const OPERATOR_REFERRAL_EARNINGS_CAP = 50000 * 100; // 50,000

// Caller Coupons
export const COUPONS = [
	{
		id: "callerReferral",
		name: "Caller Referral",
		amount: 500
	},
	{
		id: "newReferredCaller",
		name: "New Caller",
		amount: 2000
	}
];

// SMS Sender Id
export const SMS_SENDER_ID = "Callsesh";

// Call Session
export const CALL_SESSION_USER_TYPE = {
	caller: "caller",
	operator: "operator"
};

// Call Session Statuses
export const CALL_SESSION_STATUS = {
	pending: "pending", // The call session is pending a call
	active: "active", // The call session is active and will timeout unless called or metered
	inCall: "in-call", // The call session is in call
	metering: "metering" // The call session is being metered
};

// Payouts
export const PAYOUTS_SUBMISSION_FORM_URL =
	"https://forms.gle/zYHyhTds5opadV8b8";

// Error Types -- Shared between frontend and backend.
export const ERROR_TYPES = {
	// Auth
	userBlocked: "UserBlocked",
	// Call session
	paymentMethodRequired: "PaymentMethodRequired",
	callSessionRequired: "CallSessionRequired",
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

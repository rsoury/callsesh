// Fees
export const FEE_MULTIPLIER = 0.2;
export const SERVICE_FEE = 250;

// Payouts
export const PAYOUTS_SUBMISSION_FORM_URL = "";

// Call Session
export const CALL_SESSION_USER_TYPE = {
	caller: "caller",
	operator: "operator"
};

// SMS Sender Id
export const SMS_SENDER_ID = "Callsesh";

// Error Types -- Shared between frontend and backend.
export const ERROR_TYPES = {
	// Call session
	paymentMethodRequired: "PaymentMethodRequired",
	// Operator
	operatorRequired: "OperatorRequired",
	operatorUnavailable: "OperatorUnavailable",
	operatorBusy: "OperatorBusy",
	// Caller
	callSessionExists: "CallSessionExists"
};

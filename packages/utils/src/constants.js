// Fees
export const FEE_MULTIPLIER = 0.2;
export const SERVICE_FEE = 250;

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

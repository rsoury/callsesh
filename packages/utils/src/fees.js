/**
 * Methods suffixed with 'Amount' will return nunbers
 * Methods suffixed with 'Text' will return strings.
 * Methods suffixed with 'Rate' will return either a number or string
 */

import isEmpty from "is-empty";
import {
	FEE_MULTIPLIER,
	SERVICE_FEE,
	COUPONS,
	OPERATOR_REFERRAL_MULTIPLIER,
	OPERATOR_REFERRAL_EARNINGS_CAP
} from "./constants";

/**
 * Calc application's rate based on hourly rate
 *
 * @param   {string}  hourlyRate
 * @param   {boolean}  returnFloat
 *
 * @return  {string|number}
 */
export const applicationRate = (hourlyRate, { returnFloat = false } = {}) => {
	if (isEmpty(hourlyRate)) {
		if (returnFloat) {
			return 0;
		}
		return "0.00";
	}
	const rate = FEE_MULTIPLIER * parseFloat(hourlyRate);
	if (returnFloat) {
		return rate;
	}
	return rate.toFixed(2);
};

/**
 * Calc payout rate based on hourly rate
 *
 * @param   {string}  hourlyRate
 * @param   {boolean}  returnFloat
 *
 * @return  {string|number}
 */
export const payoutRate = (hourlyRate, { returnFloat = false } = {}) => {
	if (isEmpty(hourlyRate)) {
		if (returnFloat) {
			return 0;
		}
		return "0.00";
	}
	const rate = (1 - FEE_MULTIPLIER) * parseFloat(hourlyRate);
	if (returnFloat) {
		return rate;
	}
	return rate.toFixed(2);
};

/**
 * Get service fee for pre auth
 */
export const preAuthAmount = () => SERVICE_FEE;

/**
 * Get service fee in text format
 */
export const preAuthAmountText = () => `$${(SERVICE_FEE / 100).toFixed(2)}`;

/**
 * Get minute rate based on hourly rate
 *
 * @param   {string}  hourlyRate
 * @param   {boolean}  returnFloat
 *
 * @return  {string|number}
 */
export const getMinuteRate = (hourlyRate, { returnFloat = false } = {}) => {
	const rate = parseFloat(hourlyRate) / 60;
	if (returnFloat) {
		return rate;
	}
	return rate.toFixed(2);
};

/**
 * Get second rate based on hourly rate
 *
 * @param   {string}  hourlyRate
 * @param   {boolean}  returnFloat
 *
 * @return  {string|number}
 */
export const getSecondRate = (hourlyRate, { returnFloat = false } = {}) => {
	const rate = parseFloat(hourlyRate) / 60 / 60;
	if (returnFloat) {
		return rate;
	}
	return rate.toFixed(2);
};

/**
 * Calc charge amount based on hourlyRate and call duration -- duration in seconds
 * Produces amount in cents.
 *
 * @param   {string}  hourlyRate
 * @param   {number}  duration
 * @param   {boolean}  returnFloat
 *
 * @return  {number}
 */
export const chargeAmount = (
	hourlyRate,
	duration,
	{ returnFloat = false } = {}
) => {
	const secondRate = getSecondRate(hourlyRate, { returnFloat: true });
	let amount = secondRate * duration * 100; // stripe accepts amount in cents.
	if (!returnFloat) {
		amount = Math.round(amount);
	}
	return amount;
};

/**
 * Calc application amount based on hourlyRate and call duration -- duration in seconds
 *
 * @param   {string}  hourlyRate
 * @param   {number}  duration
 * @param   {boolean} returnFloat
 *
 * @return  {number}
 */
export const applicationAmount = (
	hourlyRate,
	duration,
	{ returnFloat = false } = {}
) => {
	const amountToCharge = chargeAmount(hourlyRate, duration, {
		returnFloat: true
	});
	let amount = amountToCharge * FEE_MULTIPLIER;
	if (!returnFloat) {
		amount = Math.round(amount);
	}
	return amount;
};

/**
 * Method to get coupon by coupon id
 *
 * @param   {string}  couponId
 *
 * @return {Object}
 */
export const getCoupon = (couponId) => {
	return COUPONS.find(({ id }) => id === couponId);
};

/**
 * Calc operator referral amount based on an amount parameter
 *
 * If earnings come under the cap, get the difference between the cap and earnings.
 * If the referralFee is greater than than the difference, use the difference as referralFee, otherwise use the referralFee in total
 */
export const operatorReferralAmount = (
	amountToCharge,
	earnings = 0,
	{ returnFloat = false } = {}
) => {
	if (earnings >= OPERATOR_REFERRAL_EARNINGS_CAP) {
		return 0;
	}
	let amount = amountToCharge * OPERATOR_REFERRAL_MULTIPLIER;
	if (!returnFloat) {
		amount = Math.round(amount);
	}
	const difference = OPERATOR_REFERRAL_EARNINGS_CAP - earnings;
	if (amount > difference) {
		return difference;
	}
	return amount;
};

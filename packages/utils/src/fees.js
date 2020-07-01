/**
 * Methods suffixed with 'Amount' will return nunbers
 * Methods suffixed with 'Text' will return strings.
 * Methods suffixed with 'Rate' will return either a number or string
 */

import isEmpty from "is-empty";
import isNumber from "is-number";
import Dinero from "dinero.js";
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
 * @param   {number}  hourlyRate
 * @param   {boolean}  returnInt
 *
 * @return  {number|string}
 */
export const applicationRate = (hourlyRate, returnInt = false) => {
	if (isEmpty(hourlyRate) || !isNumber(hourlyRate)) {
		if (returnInt) {
			return 0;
		}
		return "0.00";
	}
	const rate = Dinero({ amount: hourlyRate }).multiply(FEE_MULTIPLIER);
	if (returnInt) {
		return rate.toRoundedUnit(2) * 100;
	}
	return rate.toFormat("$0.00");
};

/**
 * Calc payout rate based on hourly rate
 *
 * @param   {number}  hourlyRate
 * @param   {boolean}  returnInt
 *
 * @return  {number|string}
 */
export const payoutRate = (hourlyRate, returnInt = false) => {
	if (isEmpty(hourlyRate) || !isNumber(hourlyRate)) {
		if (returnInt) {
			return 0;
		}
		return "0.00";
	}
	const rate = Dinero({ amount: hourlyRate }).multiply(1 - FEE_MULTIPLIER);
	if (returnInt) {
		return rate.toRoundedUnit(2) * 100;
	}
	return rate.toFormat("$0.00");
};

/**
 * Get service fee for pre auth
 */
export const preAuthAmount = () => SERVICE_FEE;

/**
 * Get service fee in text format
 */
export const preAuthAmountText = () =>
	Dinero({ amount: SERVICE_FEE }).toFormat("$0.00");

/**
 * Get minute rate based on hourly rate
 *
 * @param   {number}  hourlyRate
 * @param   {boolean}  returnInt
 *
 * @return  {number|string}
 */
export const getMinuteRate = (hourlyRate, returnInt = false) => {
	const rate = Dinero({ amount: hourlyRate }).divide(60);
	if (returnInt) {
		return rate.toRoundedUnit(2) * 100;
	}
	return rate.toFormat("$0.00");
};

/**
 * Get second rate based on hourly rate
 *
 * @param   {number}  hourlyRate
 * @param   {boolean}  returnInt
 *
 * @return  {string|number}
 */
export const getSecondRate = (hourlyRate, returnInt = false) => {
	const rate = Dinero({ amount: hourlyRate }).divide(60 / 60);
	if (returnInt) {
		return rate.toRoundedUnit(2) * 100;
	}
	return rate.toFormat("$0.00");
};

/**
 * Calc charge amount based on hourlyRate and call duration -- duration in seconds
 * Produces amount in cents.
 *
 * @param   {number}  hourlyRate
 * @param   {number}  secondDuration
 * @param   {boolean}  returnFloat
 *
 * @return  {number|string}
 */
export const chargeAmount = (hourlyRate, secondDuration, returnInt = false) => {
	const secondRate = getSecondRate(hourlyRate, true);
	const amount = secondRate * secondDuration;
	if (returnInt) {
		return amount;
	}
	return Dinero({ amount }).toFormat("$0.00");
};

/**
 * Calc application amount based on hourlyRate and call duration -- duration in seconds
 *
 * @param   {number}  hourlyRate
 * @param   {number}  secondDuration
 * @param   {boolean} returnInt
 *
 * @return  {number|string}
 */
export const applicationAmount = (
	hourlyRate,
	secondDuration,
	returnInt = false
) => {
	const amountToCharge = chargeAmount(hourlyRate, secondDuration, true);
	const amount = amountToCharge * FEE_MULTIPLIER;
	if (returnInt) {
		return amount;
	}
	return Dinero({ amount }).toFormat("$0.00");
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
	returnInt = false
) => {
	if (earnings >= OPERATOR_REFERRAL_EARNINGS_CAP) {
		return 0;
	}
	let amount = amountToCharge * OPERATOR_REFERRAL_MULTIPLIER;
	const difference = OPERATOR_REFERRAL_EARNINGS_CAP - earnings;
	if (amount > difference) {
		// Cap amount to difference if greater
		amount = difference;
	}

	// Use Dinero to round money value to keep consistent rounding
	if (returnInt) {
		return Dinero({ amount }).toRoundedUnit(2) * 100;
	}

	return Dinero({ amount }).toFormat("$0.00");
};

/**
 * Takes an integer and formats appropriately
 */
export const format = (amount) => Dinero({ amount }).toFormat("$0.00");

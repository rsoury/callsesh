import isEmpty from "is-empty";
import { FEE_MULTIPLIER, SERVICE_FEE } from "./constants";

/**
 * Calc application's rate based on hourly rate
 *
 * @param   {string}  hourlyRate
 * @param   {boolean}  returnFloat
 *
 * @return  {string|number}
 */
export const applicationRate = (hourlyRate, returnFloat = false) => {
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
export const payoutRate = (hourlyRate, returnFloat = false) => {
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
export const getMinuteRate = (hourlyRate, returnFloat = false) => {
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
export const getSecondRate = (hourlyRate, returnFloat = false) => {
	const rate = parseFloat(hourlyRate) / 60 / 60;
	if (returnFloat) {
		return rate;
	}
	return rate.toFixed(2);
};

/**
 * Calc charge amount based on hourlyRate and call duration -- duration in seconds
 *
 * @param   {string}  hourlyRate
 * @param   {number}  duration
 * @param   {boolean}  returnFloat
 *
 * @return  {string|number}
 */
export const chargeAmount = (hourlyRate, duration, returnFloat = false) => {
	const secondRate = getSecondRate(hourlyRate, true);
	let amount = secondRate * duration;
	if (!returnFloat) {
		amount = Math.round(amount);
	}
	return amount + preAuthAmount();
};

/**
 * Calc application amount based on hourlyRate and call duration -- duration in seconds
 *
 * @param   {string}  hourlyRate
 * @param   {number}  duration
 * @param   {boolean} returnFloat
 *
 * @return  {string|number}
 */
export const applicationAmount = (
	hourlyRate,
	duration,
	returnFloat = false
) => {
	const amountToCharge = chargeAmount(hourlyRate, duration, returnFloat);
	let amount = amountToCharge * FEE_MULTIPLIER;
	if (!returnFloat) {
		amount = Math.round(amount);
	}
	return amount + preAuthAmount();
};

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
	OPERATOR_REFERRAL_MULTIPLIER,
	OPERATOR_REFERRAL_EARNINGS_CAP
} from "@/constants";

const wrapDinero = (dineroVar) => {
	dineroVar.toString = function toString() {
		return this.toFormat("$0.00");
	};
	dineroVar.toInt = function toInt() {
		return this.toRoundedUnit(2) * 100;
	};
	return dineroVar;
};

/**
 * Single function to manage hourlyRate
 */
export function getRate(hourlyRate) {
	return {
		/**
		 * Calc application's rate based on hourly rate
		 */
		forApplication() {
			if (isEmpty(hourlyRate) || !isNumber(hourlyRate)) {
				return wrapDinero(Dinero({ amount: 0 }));
			}
			const rate = Dinero({ amount: hourlyRate }).multiply(FEE_MULTIPLIER);
			return wrapDinero(rate);
		},
		/**
		 * Calc payout rate based on hourly rate
		 */
		forPayout() {
			if (isEmpty(hourlyRate) || !isNumber(hourlyRate)) {
				return wrapDinero(Dinero({ amount: 0 }));
			}
			const rate = Dinero({ amount: hourlyRate }).multiply(1 - FEE_MULTIPLIER);
			return wrapDinero(rate);
		},
		/**
		 * Get hour rate based on hourly rate
		 */
		toHour() {
			const rate = Dinero({ amount: hourlyRate });
			return wrapDinero(rate);
		},
		/**
		 * Get minute rate based on hourly rate
		 */
		toMinute() {
			const rate = Dinero({ amount: hourlyRate }).divide(60);
			return wrapDinero(rate);
		},
		/**
		 * Get second rate based on hourly rate
		 */
		toSecond() {
			const rate = Dinero({ amount: hourlyRate }).divide(60 * 60); // divide hourlyRate by 3600 (3600 seconds in an hour)
			return wrapDinero(rate);
		}
	};
}

export function getAmount(hourlyRate, secondDuration) {
	return {
		/**
		 * Calc charge amount based on hourlyRate and call duration -- duration in seconds
		 * Produces amount in cents.
		 */
		forCharge() {
			const amount = Dinero({ amount: hourlyRate })
				.multiply(secondDuration, "HALF_UP")
				.divide(60 * 60);
			return wrapDinero(amount);
		},
		/**
		 * Calc application amount based on hourlyRate and call duration -- duration in seconds
		 */
		forApplication() {
			const amount = this.forCharge().multiply(FEE_MULTIPLIER, "HALF_UP");
			return wrapDinero(amount);
		},
		/**
		 * Calc operator referral amount based on an amount parameter
		 *
		 * If earnings come under the cap, get the difference between the cap and earnings.
		 * If the referralFee is greater than than the difference, use the difference as referralFee, otherwise use the referralFee in total
		 */
		forOperatorReferral(earnings = 0) {
			if (earnings >= OPERATOR_REFERRAL_EARNINGS_CAP) {
				return 0;
			}
			let amount = this.forCharge().multiply(OPERATOR_REFERRAL_MULTIPLIER);
			const difference = Dinero({
				amount: OPERATOR_REFERRAL_EARNINGS_CAP - earnings
			});
			if (amount.greaterThan(difference)) {
				// Cap amount to difference if greater
				amount = difference;
			}

			return wrapDinero(amount);
		}
	};
}

/**
 * Get service fee for pre auth
 */
export const preAuth = () => wrapDinero(Dinero({ amount: SERVICE_FEE }));

/**
 * Takes a string, applies zero-decimal format, and round using Dinero
 */
export const value = (v) =>
	Math.round(parseFloat(typeof v === "string" ? v.replace("$", "") : "") * 100);

/**
 * Takes an integer and formats appropriately
 */
export const format = (amount, noSymbol = false) => {
	const base = `${noSymbol ? "" : "$"}0.00`;
	if (isEmpty(amount)) {
		return base;
	}
	return Dinero({
		amount: typeof amount === "number" ? amount : value(amount)
	}).toFormat(base);
};

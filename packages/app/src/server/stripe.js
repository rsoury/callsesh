import isEmpty from "is-empty";
import Stripe from "stripe";
import { stripe as config } from "@/env-config";

const stripe = Stripe(config.secretKey);

export const isPayoutsEnabled = async (connectId) => {
	if (isEmpty(connectId)) {
		return false;
	}
	const account = await stripe.accounts.retrieve(connectId);
	return account.charges_enabled && account.payouts_enabled;
};

export default stripe;

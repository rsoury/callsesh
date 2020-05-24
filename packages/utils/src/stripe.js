import isEmpty from "is-empty";
import Stripe from "stripe";
import { stripe as config } from "./env-config";

const stripe = Stripe(config.secretKey);

export const isPayoutsEnabled = async (connectId) => {
	let enabled = false;
	if (!isEmpty(connectId)) {
		const account = await stripe.accounts.retrieve(connectId);
		enabled = account.charges_enabled && account.payouts_enabled;
	}

	return enabled;
};

export default stripe;

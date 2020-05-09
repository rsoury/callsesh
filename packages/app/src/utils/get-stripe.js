import { loadStripe } from "@stripe/stripe-js/pure";
import { stripe as config } from "@/env-config";

let loaded = false;

const getStripe = () => {
	if (typeof window !== "undefined") {
		if (!loaded) {
			loaded = true;
			loadStripe.setLoadParameters({ advancedFraudSignals: false });
			return loadStripe(config.publicKey);
		}
		return Promise.resolve(window.Stripe);
	}
	return Promise.resolve();
};

export default getStripe;

/**
 * A page to redirect to from Stripe 3d secure page.
 * Will be used in iframe. It's purpose is to post a complete message to parent.
 */

import { useEffect } from "react";

const ThreeDSecure = () => {
	useEffect(() => {
		window.top.postMessage("3DS-authentication-complete");
	}, []);

	return null;
};

export default ThreeDSecure;

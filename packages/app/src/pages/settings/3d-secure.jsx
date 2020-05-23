/**
 * A page to redirect to from Stripe 3d secure page.
 * Will be used in iframe. It's purpose is to post a complete message to parent.
 */

import { useEffect } from "react";
import PropTypes from "prop-types";
import { useStyletron, withStyle } from "baseui";
import { StyledSpinnerNext, SIZE as SPINNER_SIZE } from "baseui/spinner";
import isEmpty from "is-empty";
import { loadStripe } from "@stripe/stripe-js/pure";

import { THREE_D_SECURE_MESSAGE_TYPES } from "@/constants";
import { stripe as config } from "@/env-config";

const Spinner = withStyle(StyledSpinnerNext, {
	width: "40px",
	height: "40px"
});

const ThreeDSecure = ({ setupIntent }) => {
	const [css] = useStyletron();

	useEffect(() => {
		loadStripe(config.publicKey)
			.then((stripe) => {
				return stripe.retrieveSetupIntent(setupIntent.secret);
			})
			.then((result) => {
				if (isEmpty(result.error)) {
					if (result.setupIntent.status === "succeeded") {
						window.top.postMessage(THREE_D_SECURE_MESSAGE_TYPES.complete);
					}
				}
				window.top.postMessage(THREE_D_SECURE_MESSAGE_TYPES.failed);
			});
	}, [setupIntent]);

	return (
		<div
			className={css({
				display: "flex",
				alignItems: "center",
				width: "100%",
				height: "100%",
				minHeight: "100vh",
				justifyContent: "center"
			})}
		>
			<Spinner $size={SPINNER_SIZE.medium} />
		</div>
	);
};

ThreeDSecure.propTypes = {
	setupIntent: PropTypes.shape({
		id: PropTypes.string,
		secret: PropTypes.string,
		type: PropTypes.string
	})
};

ThreeDSecure.defaultProps = {
	setupIntent: {}
};

export async function getServerSideProps({
	query: {
		setup_intent: setupIntentId,
		setup_intent_client_secret: setupIntentSecret,
		source_type: sourceType
	}
}) {
	return {
		props: {
			setupIntent: {
				id: setupIntentId,
				secret: setupIntentSecret,
				type: sourceType
			}
		}
	};
}

export default ThreeDSecure;

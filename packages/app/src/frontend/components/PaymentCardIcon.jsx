import React from "react";
import PropTypes from "prop-types";

import AmexIcon from "baseui/payment-card/icons/amex";
import DinersClubIcon from "baseui/payment-card/icons/dinersclub";
import DiscoverIcon from "baseui/payment-card/icons/discover";
import EloIcon from "baseui/payment-card/icons/elo";
import GenericIcon from "baseui/payment-card/icons/generic";
import JcbIcon from "baseui/payment-card/icons/jcb";
import MaestroIcon from "baseui/payment-card/icons/maestro";
import MastercardIcon from "baseui/payment-card/icons/mastercard";
import UnionPayIcon from "baseui/payment-card/icons/unionpay";
import VisaIcon from "baseui/payment-card/icons/visa";

const CardTypeToComponent = {
	visa: VisaIcon,
	mastercard: MastercardIcon,
	"american-express": AmexIcon,
	amex: AmexIcon,
	"diners-club": DinersClubIcon,
	discover: DiscoverIcon,
	jcb: JcbIcon,
	unionpay: UnionPayIcon,
	maestro: MaestroIcon,
	elo: EloIcon,
	generic: GenericIcon
};

const PaymentCardIcon = ({ type, ...props }) => {
	const CardIcon = CardTypeToComponent[type] || CardTypeToComponent.generic;

	return <CardIcon {...props} />;
};

PaymentCardIcon.propTypes = {
	type: PropTypes.string
};

PaymentCardIcon.defaultProps = {
	type: "generic"
};

export default PaymentCardIcon;

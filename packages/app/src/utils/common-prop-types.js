import PropTypes from "prop-types";

export const ChildrenProps = PropTypes.oneOfType([
	PropTypes.string,
	PropTypes.func,
	PropTypes.node,
	PropTypes.arrayOf(PropTypes.node)
]);

export const UserProps = PropTypes.shape({
	id: PropTypes.string,
	phoneNumber: PropTypes.string,
	sub: PropTypes.string,
	nickname: PropTypes.string,
	name: PropTypes.string,
	picture: PropTypes.string,
	updatedAt: PropTypes.string,
	username: PropTypes.string,
	familyName: PropTypes.string,
	givenName: PropTypes.string,
	country: PropTypes.string,
	currency: PropTypes.string,
	dob: PropTypes.string,
	gender: PropTypes.string,
	hourlyRate: PropTypes.string,
	messageBroadcast: PropTypes.string,
	purpose: PropTypes.string,
	isRegistered: PropTypes.boolean
});

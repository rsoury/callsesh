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
	isRegistered: PropTypes.bool
});

export const ViewUserProps = PropTypes.shape({
	createdAt: PropTypes.string,
	picture: PropTypes.string,
	givenName: PropTypes.string,
	familyName: PropTypes.string,
	username: PropTypes.string,
	nickname: PropTypes.string,
	name: PropTypes.string,
	country: PropTypes.string,
	currency: PropTypes.string,
	dob: PropTypes.string,
	gender: PropTypes.string,
	hourlyRate: PropTypes.string,
	messageBroadcast: PropTypes.string,
	purpose: PropTypes.string,
	isLive: PropTypes.bool,
	profilePicture: PropTypes.object,
	roles: PropTypes.arrayOf(
		PropTypes.shape({ name: PropTypes.string, description: PropTypes.string })
	)
});

export const ErrorPageProps = PropTypes.shape({
	code: PropTypes.number,
	message: PropTypes.string
});

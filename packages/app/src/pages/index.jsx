import isEmpty from "is-empty";

import UserHomeScreen from "@/components/Screens/UserHome";
import PublicHomeScreen from "@/components/Screens/PublicHome";
import * as routes from "@/routes";
import { UserProps } from "@/utils/common-prop-types";
import ssrUser from "@/utils/ssr-user";

const Index = ({ user }) => {
	const isAuthenticated = !isEmpty(user);

	if (isAuthenticated) {
		return <UserHomeScreen />;
	}
	return <PublicHomeScreen />;
};

export function getServerSideProps({
	req,
	res,
	query: { return_url: returnUrl = "/" }
}) {
	return ssrUser({ req, res }, (user) => {
		if (!isEmpty(user)) {
			// If user is not registered and is authenticated, redirect to register page
			if (!user.isRegistered) {
				res.writeHead(302, {
					Location: `${routes.page.register}?return_url=${returnUrl}`
				});
				res.end();
			}
		}

		return {
			props: {
				user
			}
		};
	});
}

Index.propTypes = {
	user: UserProps
};

Index.defaultProps = {
	user: {}
};

export default Index;

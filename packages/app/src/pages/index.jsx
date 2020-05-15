import isEmpty from "is-empty";

import Layout from "@/components/Layout";
import UserHomeScreen from "@/components/Screens/UserHome";
import { setUser } from "@/hooks/use-user";
import * as routes from "@/routes";
import { UserProps } from "@/utils/common-prop-types";
import ssrUser from "@/utils/ssr-user";

const Index = ({ user }) => {
	setUser(user);

	const isAuthenticated = !isEmpty(user);

	return (
		<Layout>
			{isAuthenticated ? <UserHomeScreen /> : <h1>Welcome to Callsesh!</h1>}
		</Layout>
	);
};

export function getServerSideProps({
	req,
	res,
	query: { return_url: returnUrl = "/" }
}) {
	return ssrUser({ req, res }, (user) => {
		if (isEmpty(user)) {
			return { props: {} };
		}

		// If user is registered, redirect to settings/profile
		if (!user.isRegistered) {
			res.writeHead(302, {
				Location: `${routes.page.register}?return_url=${returnUrl}`
			});
			res.end();
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

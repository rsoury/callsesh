import { useStyletron } from "baseui";
import isEmpty from "is-empty";
import { H1 as Heading, Paragraph2 as Paragraph } from "baseui/typography";

import { getUser } from "@/middleware/auth";
import Layout from "@/components/Layout";
import isUserOperator from "@/utils/is-operator";
import { setUser } from "@/hooks/use-user";
import * as routes from "@/routes";
import { UserProps } from "@/utils/common-prop-types";

const Index = ({ user }) => {
	setUser(user);
	const [css, theme] = useStyletron();

	const isAuthenticated = !isEmpty(user);
	const isOperator = isUserOperator(user);

	return (
		<Layout>
			{isAuthenticated ? (
				<div id="callsesh-user-screen">
					{isOperator ? (
						<div>Hey operator!</div>
					) : (
						<div>
							<Heading>Welcome ${user.givenName}</Heading>
							<Paragraph>
								Remember, keep an eye out for{" "}
								<strong className={css({ color: theme.colors.accent })}>
									Callsesh links
								</strong>{" "}
								shared by our Operators across the internet and on social media.
							</Paragraph>
						</div>
					)}
				</div>
			) : (
				<h1>Welcome to Callsesh!</h1>
			)}
		</Layout>
	);
};

export async function getServerSideProps({
	req,
	res,
	query: { return_url: returnUrl = "/" }
}) {
	// Check if user already registered.
	const user = await getUser(req);

	if (isEmpty(user)) {
		return { props: {} };
	}

	// If user is registered, redirect to settings/profile
	if (!user.isRegistered) {
		res.writeHead(302, {
			Location: `${routes.page.register}?return_url${returnUrl}`
		});
		res.end();
	}

	return {
		props: {
			user
		}
	};
}

Index.propTypes = {
	user: UserProps
};

Index.defaultProps = {
	user: {}
};

export default Index;

import isEmpty from "is-empty";
import auth from "@/middleware/auth";
import * as routes from "@/routes";

const Login = () => null;

export async function getServerSideProps({
	req,
	res,
	query: { return_url: returnUrl = "/" }
}) {
	// Here you can check authentication status directly before rendering the page,
	// however the page would be a serverless function, which is more expensive and
	// slower than a static page with client side authentication
	const session = await auth.getSession(req);

	if (isEmpty(session)) {
		res.writeHead(302, {
			Location: `${routes.api.auth.login}?return_url=${returnUrl}`
		});
	} else {
		res.writeHead(302, {
			Location: routes.page.index
		});
	}
	res.end();

	return { props: {} };
}

export default Login;

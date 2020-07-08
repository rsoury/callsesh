import isEmpty from "is-empty";
import { getSession } from "@/server/middleware/auth";
import * as routes from "@/routes";

const Signup = () => null;

export async function getServerSideProps({
	req,
	res,
	query: { return_url: returnUrl = "/" }
}) {
	// Here you can check authentication status directly before rendering the page,
	// however the page would be a serverless function, which is more expensive and
	// slower than a static page with client side authentication
	const session = await getSession(req);

	if (isEmpty(session)) {
		res.writeHead(302, {
			Location: `${routes.api.auth.signup}?return_url=${returnUrl}`
		});
	} else {
		res.writeHead(302, {
			Location: routes.page.index
		});
	}
	res.end();

	return { props: {} };
}

export default Signup;

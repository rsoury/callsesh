import isEmpty from "is-empty";
import auth from "@/middleware/auth";

const Logout = () => null;

export async function getServerSideProps({ req, res }) {
	// Here you can check authentication status directly before rendering the page,
	// however the page would be a serverless function, which is more expensive and
	// slower than a static page with client side authentication
	const session = await auth.getSession(req);

	if (isEmpty(session)) {
		res.writeHead(302, {
			Location: `/`
		});
	} else {
		res.writeHead(302, {
			Location: "/api/auth/logout"
		});
	}
	res.end();
	return {};
}

export default Logout;

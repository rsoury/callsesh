import { setCookie } from "nookies";
import * as routes from "@/routes";

const Invite = () => null;

export async function getServerSideProps({
	req,
	res,
	query: { return_url: returnUrl = "/", id: referrerUsername }
}) {
	// Create a referrer cookie and redirect to signup
	setCookie({ req, res }, "referrer", referrerUsername, {
		maxAge: 7 * 60 * 60, // lasts 7 days
		path: "/"
	});
	res.writeHead(302, {
		Location: `${routes.page.signup}?return_url=${returnUrl}`
	});
	res.end();

	return { props: {} };
}

export default Invite;

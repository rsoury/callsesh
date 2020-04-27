import { useEffect } from "react";
import { useRouter } from "next/router";
import useRequest from "@/hooks/use-request";
import routes from "@/routes";

const Logout = () => {
	const router = useRouter();
	useRequest({
		url: routes.api.auth.logout
	});

	useEffect(() => {
		router.push("/");
	}, []);

	return <div />;
};

export default Logout;

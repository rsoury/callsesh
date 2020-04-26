import { useEffect } from "react";
import { useRouter } from "next/router";
import useRequest from "@/hooks/use-request";

const Logout = () => {
	const router = useRouter();
	useRequest({
		url: "/api/auth/logout"
	});

	useEffect(() => {
		router.push("/");
	}, []);

	return <div />;
};

export default Logout;

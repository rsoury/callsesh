/**
 * Page that simply authenticates the user, and redirects to return_url or index
 */

// import { useEffect } from "react";
// import Router from "next/router";
import { useStyletron } from "baseui";
import getSpinner from "@/components/getSpinner";
// import auth from "@/utils/auth";

const Spinner = getSpinner({
	width: "30px",
	height: "30px"
});

const Auth = () => {
	const [css] = useStyletron();

	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		auth0;
	// 	}
	// }, []);

	return (
		<div
			className={css({
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			})}
		>
			<Spinner />
		</div>
	);
};

export default Auth;

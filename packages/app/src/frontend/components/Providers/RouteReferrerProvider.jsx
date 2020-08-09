import React, { createContext, useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

import { ChildrenProps } from "@/frontend/utils/common-prop-types";

export const RouteReferrerContext = createContext();

const RouteReferrerContextProvider = ({ children }) => {
	const router = useRouter();
	const [routeReferrer, setRouteReferrer] = useState("");
	const [userRouteReferrer, setUserRouteReferrer] = useState("");
	const [currentPathname, setCurrentPathname] = useState(router.asPath);

	const beforeHistoryChangeHandler = (pathname) => {
		// Set route referrer to whatevers in current pathname
		setRouteReferrer(currentPathname);
		// Update current pathname
		setCurrentPathname(pathname);
	};

	useEffect(() => {
		// Implement route referrer state
		Router.events.on("beforeHistoryChange", beforeHistoryChangeHandler);
		return () => {
			Router.events.off("beforeHistoryChange", beforeHistoryChangeHandler);
		};
	}, [currentPathname, routeReferrer, userRouteReferrer]);

	return (
		<RouteReferrerContext.Provider
			value={{
				routeReferrer,
				setRouteReferrer,
				userRouteReferrer,
				setUserRouteReferrer
			}}
		>
			{children}
		</RouteReferrerContext.Provider>
	);
};

RouteReferrerContextProvider.propTypes = {
	children: ChildrenProps.isRequired
};

export default RouteReferrerContextProvider;

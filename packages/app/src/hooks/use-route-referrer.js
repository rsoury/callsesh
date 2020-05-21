import { useEffect, useContext } from "react";
import isEmpty from "is-empty";

import { RouteReferrerContext } from "@/components/RouteReferrerProvider";

export const useUserRouteReferrer = () => {
	const { userRouteReferrer, setUserRouteReferrer } = useContext(
		RouteReferrerContext
	);

	return [userRouteReferrer, setUserRouteReferrer];
};

function useRouteReferrer(initialState) {
	const { routeReferrer, setRouteReferrer } = useContext(RouteReferrerContext);

	useEffect(() => {
		if (!isEmpty(initialState)) {
			setRouteReferrer(initialState);
		}
	}, []);

	return [routeReferrer, setRouteReferrer];
}

export default useRouteReferrer;

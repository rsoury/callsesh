/**
 * Hook to manage state in context.
 * Manage router here.
 */

import { useEffect, useContext } from "react";

import { CountryContext } from "@/CountryProvider";

function useCountry() {
	const { country, setCountry, getCountry, loading } = useContext(
		CountryContext
	);

	useEffect(() => {
		// If country already fetched
		if (!loading && country) {
			return () => {};
		}

		getCountry();

		return () => {};
	}, []);

	return [country, loading, { getCountry, setCountry }];
}

export default useCountry;

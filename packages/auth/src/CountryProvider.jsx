/* eslint-disable no-underscore-dangle */

import React, { createContext, useState } from "react";
import { COUNTRIES } from "baseui/phone-input";
import createPersistedState from "use-persisted-state";
import { getRequest } from "@callsesh/utils";

import handleException from "@/utils/handle-exception";
import { ChildrenProps } from "@/utils/common-prop-types";
import { authConfig } from "@/env-config";

export const CountryContext = createContext();

const request = getRequest();

const useCountryState = createPersistedState("country");

const CountryContextProvider = ({ children }) => {
	const [country, setCountry] = useCountryState();
	const [loading, setLoading] = useState(false);

	const getCountry = () => {
		setLoading(true);
		// Use Auth0 native lookup
		return request
			.get(`https://${authConfig.auth0Domain}/user/geoloc/country`)
			.then(({ data }) => data)
			.then((lookupData) => {
				const { country_code: countryCode } = lookupData || {};
				if (countryCode) {
					setCountry(COUNTRIES[countryCode.toUpperCase()]);
				}
			})
			.catch((e) => {
				handleException(e);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<CountryContext.Provider
			value={{
				country,
				setCountry,
				getCountry,
				loading
			}}
		>
			{children}
		</CountryContext.Provider>
	);
};

CountryContextProvider.propTypes = {
	children: ChildrenProps.isRequired
};

export default CountryContextProvider;

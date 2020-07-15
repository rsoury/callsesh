/* eslint-disable no-underscore-dangle */

import React, { createContext, useState, useEffect } from "react";
import isEmpty from "is-empty";
import get from "lodash/get";

import { ChildrenProps } from "@/utils/common-prop-types";
import * as routes from "@/routes";
import request from "@/utils/request";
import { identifyUser } from "@/utils/signals";
import { setUser as setErrorTrackingUser } from "@/utils/handle-exception";

export const UserContext = createContext();

const getUserFromSSR = () => {
	if (typeof window === "undefined") {
		return null;
	}
	// If window is defined, retrieve user object from SSR directly. -- Hack but will work.
	return get(window, "__NEXT_DATA__.props.pageProps.user", null);
};

const UserContextProvider = ({ children }) => {
	const userFromSSR = getUserFromSSR();
	const [user, setUserState] = useState(() => userFromSSR);
	const [loading, setLoading] = useState(() => !userFromSSR);

	const setUser = (paramUser) => {
		if (isEmpty(paramUser)) {
			return null;
		}
		setUserState(paramUser);
		setErrorTrackingUser(paramUser);
		identifyUser(paramUser);
		return paramUser;
	};
	const removeUser = () => setUser({});
	const getUser = async (cookie = "") => {
		setLoading(true);
		try {
			const retrievedUser = await request
				.get(
					routes.api.user,
					cookie
						? {
								headers: {
									cookie
								}
						  }
						: {}
				)
				.then(({ data }) => data);

			setUser(retrievedUser);

			return retrievedUser;
		} catch (e) {
			return null;
		} finally {
			setLoading(false);
		}
	};

	// If user sourced from SSR, apply to third party services
	useEffect(() => {
		if (!isEmpty(user)) {
			setErrorTrackingUser(user);
			identifyUser(user);
		}
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				removeUser,
				getUser,
				loading
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

UserContextProvider.propTypes = {
	children: ChildrenProps.isRequired
};

export default UserContextProvider;

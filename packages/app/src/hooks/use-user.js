/* eslint-disable no-underscore-dangle */

import { useState, useEffect } from "react";
import Router from "next/router";
import isEmpty from "is-empty";
import request from "@/utils/request";

// We need to check whether user is registered. If not redirect to /register
const ensureUserRegistered = (user) => {
	if (isEmpty(user)) {
		return null;
	}
	const { isRegistered } = user;
	if (!isRegistered) {
		// Redirect to get started if not registered
		Router.push("/get-started");
	}
	return null;
};

export async function getUser(cookie = "") {
	if (typeof window !== "undefined" && window.__user) {
		return window.__user;
	}

	try {
		const user = await request
			.get(
				"/api/user",
				cookie
					? {
							headers: {
								cookie
							}
					  }
					: {}
			)
			.then(({ data }) => data);

		if (typeof window !== "undefined") {
			window.__user = user;
		}
		return user;
	} catch (e) {
		delete window.__user;
		return null;
	}
}

function useUser({ required } = {}) {
	const [loading, setLoading] = useState(
		() => !(typeof window !== "undefined" && window.__user)
	);
	const [user, setUser] = useState(() => {
		if (typeof window === "undefined") {
			return null;
		}

		return window.__user || null;
	});

	useEffect(() => {
		// If user already exists.
		if (!loading && user) {
			ensureUserRegistered(user);
			return () => {};
		}
		// Start user fetch
		setLoading(true);
		let isMounted = true;

		getUser()
			.then((newUser) => {
				// Only set the user if the component is still mounted
				if (isMounted) {
					// When the user is not logged in but login is required
					if (required && !newUser) {
						Router.replace("/login");
						return;
					}
					ensureUserRegistered(newUser);
					setUser(newUser);
				}
			})
			.finally(() => setLoading(false));

		return () => {
			isMounted = false;
		};
	}, []);

	return [user, loading];
}

export default useUser;

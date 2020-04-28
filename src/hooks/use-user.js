/* eslint-disable no-underscore-dangle */

import useRequest from "./use-request";

export default function useUser() {
	const { data, mutate, isValidating: loading } = useRequest({
		url: "/api/user"
	});

	// if data is not defined, the query has not completed
	const user = data?.user;
	return [user, { mutate, loading }];
}

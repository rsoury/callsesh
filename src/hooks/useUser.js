import useRequest from "./useRequest";

export default function useUser() {
	const { data, mutate } = useRequest({
		url: "/api/user"
	});
	// if data is not defined, the query has not completed
	const loading = !data;
	const user = data?.user;
	return [user, { mutate, loading }];
}

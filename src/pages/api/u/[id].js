/**
 * Get user
 * If user doesn't exist, 404 error.
 */

export default (req, res) => {
	const {
		query: { id }
	} = req;
	// Get user using id.

	res.json({ user: id });
};

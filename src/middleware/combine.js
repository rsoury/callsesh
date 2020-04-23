/**
 * Take a series of middleware functions and combine them
 * Middleware should be passed in, in the order of execution. Ie. Error, Authentication -- this way auth errors can be cause by error middleware
 */

export default (...middlwares) => (handler) =>
	middlwares.reduce((combined, middleware) => {
		const result = middleware(combined);
		return result;
	}, handler);

import slugify from "@sindresorhus/slugify";

const defaultOptions = {
	separator: "_",
	decamelize: false,
	lowercase: false
};

export default (value, options = {}) =>
	slugify(value, {
		...defaultOptions,
		...options
	});

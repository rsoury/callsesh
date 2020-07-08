import slugify from "@sindresorhus/slugify";

const defaultOptions = {
	separator: "_",
	decamelize: false,
	lowercase: false
};

const slugifyWithDefaults = (value, options = {}) =>
	slugify(value, {
		...defaultOptions,
		...options
	});

export default slugifyWithDefaults;

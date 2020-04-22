module.exports = {
	webpack: function webpack(config) {
		const c = config;
		c.externals = c.externals || {};
		c.externals["styletron-server"] = "styletron-server";
		return c;
	}
};

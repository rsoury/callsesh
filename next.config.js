module.exports = {
	webpack(config) {
		const { externals = {} } = config;

		return {
			externals: {
				...externals,
				"styletron-server": "styletron-server"
			}
		};
	}
};

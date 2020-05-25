module.exports = {
	comments: false,
	sourceMaps: "both",
	plugins: ["source-map-support"],
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "12"
				}
			}
		]
	]
};

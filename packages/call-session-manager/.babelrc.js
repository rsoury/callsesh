module.exports = {
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

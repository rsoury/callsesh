module.exports = {
	presets: ["next/babel"],
	plugins: [["react-native-web", { commonjs: true }], "add-react-displayname"]
};

/**
 * Advice used from
 * https://developer-log.netlify.app/testing-react-components-with-jest-enzyme-nextjs/
 * https://medium.com/@kjaer/setting-up-jest-and-enzyme-for-typescript-next-js-apps-ce383167643
 */

const { jestAlias } = require("./config/alias");

module.exports = {
	setupFiles: ["<rootDir>/tests/setup.js", "dotenv/config"],
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	moduleNameMapper: jestAlias,
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest"
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};

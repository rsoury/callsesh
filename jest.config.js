/**
 * Advice used from
 * https://developer-log.netlify.app/testing-react-components-with-jest-enzyme-nextjs/
 * https://medium.com/@kjaer/setting-up-jest-and-enzyme-for-typescript-next-js-apps-ce383167643
 */

module.exports = {
	setupFiles: ["<rootDir>/tests/setup.js"],
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	moduleNameMapper: {
		"^@(/)(.*)$": "<rootDir>/$2",
		"^@(tests/)(.*)$": "<rootDir>/tests/$2"
	},
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest"
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};

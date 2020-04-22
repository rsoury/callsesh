module.exports = {
	setupFiles: ["<rootDir>/jest.setup.js"],
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	moduleNameMapper: {
		"^@(/)(.*)$": "<rootDir>/$2",
		"^@(tests/)(.*)$": "<rootDir>/tests/$2"
	},
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest"
	}
};

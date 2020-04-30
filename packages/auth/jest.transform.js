const babelJest = require("babel-jest");
const babelConfig = require("./.babelrc");

module.exports = babelJest.createTransformer(babelConfig);

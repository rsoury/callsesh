module.exports = /******/ (function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = require("../../../ssr-module-cache.js"); // The require function
	/******/
	/******/ /******/ function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId]) {
			/******/ return installedModules[moduleId].exports;
			/******/
		} // Create a new module (and put it into the cache)
		/******/ /******/ var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {}
			/******/
		}); // Execute the module function
		/******/
		/******/ /******/ var threw = true;
		/******/ try {
			/******/ modules[moduleId].call(
				module.exports,
				module,
				module.exports,
				__webpack_require__
			);
			/******/ threw = false;
			/******/
		} finally {
			/******/ if (threw) delete installedModules[moduleId];
			/******/
		} // Flag the module as loaded
		/******/
		/******/ /******/ module.l = true; // Return the exports of the module
		/******/
		/******/ /******/ return module.exports;
		/******/
	} // expose the modules object (__webpack_modules__)
	/******/
	/******/
	/******/ /******/ __webpack_require__.m = modules; // expose the module cache
	/******/
	/******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
	/******/
	/******/ /******/ __webpack_require__.d = function (exports, name, getter) {
		/******/ if (!__webpack_require__.o(exports, name)) {
			/******/ Object.defineProperty(exports, name, {
				enumerable: true,
				get: getter
			});
			/******/
		}
		/******/
	}; // define __esModule on exports
	/******/
	/******/ /******/ __webpack_require__.r = function (exports) {
		/******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
			/******/ Object.defineProperty(exports, Symbol.toStringTag, {
				value: "Module"
			});
			/******/
		}
		/******/ Object.defineProperty(exports, "__esModule", { value: true });
		/******/
	}; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
	/******/
	/******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
		value,
		mode
	) {
		/******/ if (mode & 1) value = __webpack_require__(value);
		/******/ if (mode & 8) return value;
		/******/ if (
			mode & 4 &&
			typeof value === "object" &&
			value &&
			value.__esModule
		)
			return value;
		/******/ var ns = Object.create(null);
		/******/ __webpack_require__.r(ns);
		/******/ Object.defineProperty(ns, "default", {
			enumerable: true,
			value: value
		});
		/******/ if (mode & 2 && typeof value != "string")
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function (key) {
						return value[key];
					}.bind(null, key)
				);
		/******/ return ns;
		/******/
	}; // getDefaultExport function for compatibility with non-harmony modules
	/******/
	/******/ /******/ __webpack_require__.n = function (module) {
		/******/ var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module["default"];
				  }
				: /******/ function getModuleExports() {
						return module;
				  };
		/******/ __webpack_require__.d(getter, "a", getter);
		/******/ return getter;
		/******/
	}; // Object.prototype.hasOwnProperty.call
	/******/
	/******/ /******/ __webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	}; // __webpack_public_path__
	/******/
	/******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
	/******/
	/******/
	/******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "../../node_modules/modern-normalize/modern-normalize.css":
			/*!****************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/modern-normalize/modern-normalize.css ***!
  \****************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				/***/
			},

		/***/ "../../node_modules/next/app.js":
			/*!**************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/app.js ***!
  \**************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				module.exports = __webpack_require__(
					/*! ./dist/pages/_app */ "../../node_modules/next/dist/pages/_app.js"
				);

				/***/
			},

		/***/ "../../node_modules/next/dist/pages/_app.js":
			/*!**************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/pages/_app.js ***!
  \**************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);

				exports.__esModule = true;
				exports.Container = Container;
				exports.createUrl = createUrl;
				exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ "react")
				);

				var _utils = __webpack_require__(
					/*! ../next-server/lib/utils */ "../next-server/lib/utils"
				);

				exports.AppInitialProps = _utils.AppInitialProps;
				/**
				 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
				 * This allows for keeping state between navigation, custom error handling, injecting additional data.
				 */

				async function appGetInitialProps(_ref) {
					var { Component, ctx } = _ref;
					var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
					return {
						pageProps
					};
				}

				class App extends _react.default.Component {
					// Kept here for backwards compatibility.
					// When someone ended App they could call `super.componentDidCatch`.
					// @deprecated This method is no longer needed. Errors are caught at the top level
					componentDidCatch(error, _errorInfo) {
						throw error;
					}

					render() {
						var { router, Component, pageProps, __N_SSG, __N_SSP } = this.props;
						return _react.default.createElement(
							Component,
							Object.assign(
								{},
								pageProps, // we don't add the legacy URL prop if it's using non-legacy
								// methods like getStaticProps and getServerSideProps
								!(__N_SSG || __N_SSP)
									? {
											url: createUrl(router)
									  }
									: {}
							)
						);
					}
				}

				exports.default = App;
				App.origGetInitialProps = appGetInitialProps;
				App.getInitialProps = appGetInitialProps;
				var warnContainer;
				var warnUrl;

				if (true) {
					warnContainer = (0, _utils.execOnce)(() => {
						console.warn(
							"Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated"
						);
					});
					warnUrl = (0, _utils.execOnce)(() => {
						console.error(
							"Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated"
						);
					});
				} // @deprecated noop for now until removal

				function Container(p) {
					if (true) warnContainer();
					return p.children;
				}

				function createUrl(router) {
					// This is to make sure we don't references the router object at call time
					var { pathname, asPath, query } = router;
					return {
						get query() {
							if (true) warnUrl();
							return query;
						},

						get pathname() {
							if (true) warnUrl();
							return pathname;
						},

						get asPath() {
							if (true) warnUrl();
							return asPath;
						},

						back: () => {
							if (true) warnUrl();
							router.back();
						},
						push: (url, as) => {
							if (true) warnUrl();
							return router.push(url, as);
						},
						pushTo: (href, as) => {
							if (true) warnUrl();
							var pushRoute = as ? href : "";
							var pushUrl = as || href;
							return router.push(pushRoute, pushUrl);
						},
						replace: (url, as) => {
							if (true) warnUrl();
							return router.replace(url, as);
						},
						replaceTo: (href, as) => {
							if (true) warnUrl();
							var replaceRoute = as ? href : "";
							var replaceUrl = as || href;
							return router.replace(replaceRoute, replaceUrl);
						}
					};
				}

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
			/*!********************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \********************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule
						? obj
						: {
								default: obj
						  };
				}

				module.exports = _interopRequireDefault;

				/***/
			},

		/***/ "../next-server/lib/utils":
			/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("next/dist/next-server/lib/utils.js");

				/***/
			},

		/***/ "./config/constants.js":
			/*!*****************************!*\
  !*** ./config/constants.js ***!
  \*****************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports.HYDRATE_CLASS = "_root_hydrate_";

				/***/
			},

		/***/ "./config/seo.js":
			/*!***********************!*\
  !*** ./config/seo.js ***!
  \***********************/
			/*! no static exports found */
			/***/ function (module, exports) {
				const description =
					"Wagecall allows you to offer your customers or audience access to your expertise, advice or care through a paid phone call.";
				const url = "https://www.wagecall.com/";
				module.exports = {
					url,
					titleTemplate: "Wagecall - %s",
					title: "Earn a wage, offer a call!",
					description,
					canonical: url,
					openGraph: {
						type: "website",
						url,
						site_name: "Wagecall"
					},
					twitter: {
						handle: "@ryan_soury",
						cardType: "summary_large_image"
					}
				};

				/***/
			},

		/***/ "./config/styletron.js":
			/*!*****************************!*\
  !*** ./config/styletron.js ***!
  \*****************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				const { Client, Server } = __webpack_require__(
					/*! styletron-engine-atomic */ "styletron-engine-atomic"
				);

				const { DebugEngine } = __webpack_require__(
					/*! styletron-react */ "styletron-react"
				);

				const constants = __webpack_require__(
					/*! ./constants */ "./config/constants.js"
				);

				const getHydrateClass = () =>
					document.getElementsByClassName(constants.HYDRATE_CLASS);

				module.exports.engine = true ? new Server() : undefined;
				module.exports.debug = true ? new DebugEngine() : undefined;

				/***/
			},

		/***/ "./src/pages/_app.jsx":
			/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "react"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! next/app */ "../../node_modules/next/app.js"
				);
				/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					next_app__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! baseui */ "baseui"
				);
				/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
					baseui__WEBPACK_IMPORTED_MODULE_2__
				);
				/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! styletron-react */ "styletron-react"
				);
				/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
					styletron_react__WEBPACK_IMPORTED_MODULE_3__
				);
				/* harmony import */ var baseui_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! baseui/toast */ "baseui/toast"
				);
				/* harmony import */ var baseui_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
					baseui_toast__WEBPACK_IMPORTED_MODULE_4__
				);
				/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! next-seo */ "next-seo"
				);
				/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
					next_seo__WEBPACK_IMPORTED_MODULE_5__
				);
				/* harmony import */ var react_fastclick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					/*! react-fastclick */ "react-fastclick"
				);
				/* harmony import */ var react_fastclick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
					react_fastclick__WEBPACK_IMPORTED_MODULE_6__
				);
				/* harmony import */ var _config_styletron__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					/*! @config/styletron */ "./config/styletron.js"
				);
				/* harmony import */ var _config_styletron__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
					_config_styletron__WEBPACK_IMPORTED_MODULE_7__
				);
				/* harmony import */ var _config_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					/*! @config/seo */ "./config/seo.js"
				);
				/* harmony import */ var _config_seo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
					_config_seo__WEBPACK_IMPORTED_MODULE_8__
				);
				/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					/*! setimmediate */ "setimmediate"
				);
				/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
					setimmediate__WEBPACK_IMPORTED_MODULE_9__
				);
				/* harmony import */ var modern_normalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					/*! modern-normalize */ "../../node_modules/modern-normalize/modern-normalize.css"
				);
				/* harmony import */ var modern_normalize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
					modern_normalize__WEBPACK_IMPORTED_MODULE_10__
				);
				/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					/*! @/styles.css */ "./src/styles.css"
				);
				/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
					_styles_css__WEBPACK_IMPORTED_MODULE_11__
				);
				var _jsxFileName =
					"/Users/ryansoury/dev/wagecall/packages/wagecall/src/pages/_app.jsx";
				var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

				function _extends() {
					_extends =
						Object.assign ||
						function (target) {
							for (var i = 1; i < arguments.length; i++) {
								var source = arguments[i];
								for (var key in source) {
									if (Object.prototype.hasOwnProperty.call(source, key)) {
										target[key] = source[key];
									}
								}
							}
							return target;
						};
					return _extends.apply(this, arguments);
				}

				function ownKeys(object, enumerableOnly) {
					var keys = Object.keys(object);
					if (Object.getOwnPropertySymbols) {
						var symbols = Object.getOwnPropertySymbols(object);
						if (enumerableOnly)
							symbols = symbols.filter(function (sym) {
								return Object.getOwnPropertyDescriptor(object, sym).enumerable;
							});
						keys.push.apply(keys, symbols);
					}
					return keys;
				}

				function _objectSpread(target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i] != null ? arguments[i] : {};
						if (i % 2) {
							ownKeys(Object(source), true).forEach(function (key) {
								_defineProperty(target, key, source[key]);
							});
						} else if (Object.getOwnPropertyDescriptors) {
							Object.defineProperties(
								target,
								Object.getOwnPropertyDescriptors(source)
							);
						} else {
							ownKeys(Object(source)).forEach(function (key) {
								Object.defineProperty(
									target,
									key,
									Object.getOwnPropertyDescriptor(source, key)
								);
							});
						}
					}
					return target;
				}

				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, {
							value: value,
							enumerable: true,
							configurable: true,
							writable: true
						});
					} else {
						obj[key] = value;
					}
					return obj;
				}

				const theme = _objectSpread(
					{},
					baseui__WEBPACK_IMPORTED_MODULE_2__["LightTheme"],
					{
						mediaQuery: {
							small: `@media screen and (min-width: ${baseui__WEBPACK_IMPORTED_MODULE_2__["LightTheme"].breakpoints.small}px)`,
							medium: `@media screen and (min-width: ${baseui__WEBPACK_IMPORTED_MODULE_2__["LightTheme"].breakpoints.medium}px)`,
							large: `@media screen and (min-width: ${baseui__WEBPACK_IMPORTED_MODULE_2__["LightTheme"].breakpoints.large}px)`,
							maxSmall: `@media screen and (max-width: ${
								baseui__WEBPACK_IMPORTED_MODULE_2__["LightTheme"].breakpoints
									.medium - 1
							}px)`,
							maxMedium: `@media screen and (max-width: ${
								baseui__WEBPACK_IMPORTED_MODULE_2__["LightTheme"].breakpoints
									.large - 1
							}px)`
						}
					}
				);

				const Container = Object(baseui__WEBPACK_IMPORTED_MODULE_2__["styled"])(
					"div",
					{
						maxWidth: "1024px",
						margin: "0 auto",
						width: "100%"
					}
				);

				class App extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
					componentDidMount() {
						if (false) {
						}
					}

					render() {
						const { Component, pageProps } = this.props;
						return __jsx(
							styletron_react__WEBPACK_IMPORTED_MODULE_3__["Provider"],
							{
								value: _config_styletron__WEBPACK_IMPORTED_MODULE_7__["engine"],
								debug: _config_styletron__WEBPACK_IMPORTED_MODULE_7__["debug"],
								debugAfterHydration: true,
								__self: this,
								__source: {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 4
								}
							},
							__jsx(
								baseui__WEBPACK_IMPORTED_MODULE_2__["BaseProvider"],
								{
									theme: theme,
									__self: this,
									__source: {
										fileName: _jsxFileName,
										lineNumber: 49,
										columnNumber: 5
									}
								},
								__jsx(
									next_seo__WEBPACK_IMPORTED_MODULE_5__["DefaultSeo"],
									_extends(
										{},
										_config_seo__WEBPACK_IMPORTED_MODULE_8___default.a,
										{
											__self: this,
											__source: {
												fileName: _jsxFileName,
												lineNumber: 50,
												columnNumber: 6
											}
										}
									)
								),
								__jsx(
									baseui_toast__WEBPACK_IMPORTED_MODULE_4__["ToasterContainer"],
									{
										placement:
											baseui_toast__WEBPACK_IMPORTED_MODULE_4__["PLACEMENT"]
												.topRight,
										autoHideDuration: 10000,
										overrides: {
											Root: {
												style: {
													zIndex: "99999999"
												}
											}
										},
										__self: this,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 51,
											columnNumber: 6
										}
									},
									__jsx(
										Container,
										{
											id: "wagecall-app",
											__self: this,
											__source: {
												fileName: _jsxFileName,
												lineNumber: 62,
												columnNumber: 7
											}
										},
										__jsx(
											Component,
											_extends({}, pageProps, {
												__self: this,
												__source: {
													fileName: _jsxFileName,
													lineNumber: 63,
													columnNumber: 8
												}
											})
										)
									)
								)
							)
						);
					}
				}

				/* harmony default export */ __webpack_exports__["default"] = App;

				/***/
			},

		/***/ "./src/styles.css":
			/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				/***/
			},

		/***/ 0:
			/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				module.exports = __webpack_require__(
					/*! private-next-pages/_app.jsx */ "./src/pages/_app.jsx"
				);

				/***/
			},

		/***/ baseui:
			/*!*************************!*\
  !*** external "baseui" ***!
  \*************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("baseui");

				/***/
			},

		/***/ "baseui/toast":
			/*!*******************************!*\
  !*** external "baseui/toast" ***!
  \*******************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("baseui/toast");

				/***/
			},

		/***/ "next-seo":
			/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("next-seo");

				/***/
			},

		/***/ react:
			/*!************************!*\
  !*** external "react" ***!
  \************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("react");

				/***/
			},

		/***/ "react-fastclick":
			/*!**********************************!*\
  !*** external "react-fastclick" ***!
  \**********************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("react-fastclick");

				/***/
			},

		/***/ setimmediate:
			/*!*******************************!*\
  !*** external "setimmediate" ***!
  \*******************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("setimmediate");

				/***/
			},

		/***/ "styletron-engine-atomic":
			/*!******************************************!*\
  !*** external "styletron-engine-atomic" ***!
  \******************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("styletron-engine-atomic");

				/***/
			},

		/***/ "styletron-react":
			/*!**********************************!*\
  !*** external "styletron-react" ***!
  \**********************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("styletron-react");

				/***/
			}

		/******/
	}
);
//# sourceMappingURL=_app.js.map

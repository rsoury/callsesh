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
	/******/ /******/ return __webpack_require__((__webpack_require__.s = 3));
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ "../../node_modules/next/dist/client/link.js":
			/*!***************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/client/link.js ***!
  \***************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);

				var _interopRequireWildcard = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"
				);

				exports.__esModule = true;
				exports.default = void 0;

				var _react = _interopRequireWildcard(
					__webpack_require__(/*! react */ "react")
				);

				var _url = __webpack_require__(/*! url */ "url");

				var _utils = __webpack_require__(
					/*! ../next-server/lib/utils */ "../next-server/lib/utils"
				);

				var _router = _interopRequireDefault(
					__webpack_require__(
						/*! ./router */ "../../node_modules/next/dist/client/router.js"
					)
				);

				var _router2 = __webpack_require__(
					/*! ../next-server/lib/router/router */ "../../node_modules/next/dist/next-server/lib/router/router.js"
				);

				function isLocal(href) {
					var url = (0, _url.parse)(href, false, true);
					var origin = (0, _url.parse)(
						(0, _utils.getLocationOrigin)(),
						false,
						true
					);
					return (
						!url.host ||
						(url.protocol === origin.protocol && url.host === origin.host)
					);
				}

				function memoizedFormatUrl(formatFunc) {
					var lastHref = null;
					var lastAs = null;
					var lastResult = null;
					return (href, as) => {
						if (lastResult && href === lastHref && as === lastAs) {
							return lastResult;
						}

						var result = formatFunc(href, as);
						lastHref = href;
						lastAs = as;
						lastResult = result;
						return result;
					};
				}

				function formatUrl(url) {
					return url && typeof url === "object"
						? (0, _utils.formatWithValidation)(url)
						: url;
				}

				var observer;
				var listeners = new Map();
				var IntersectionObserver = false ? undefined : null;
				var prefetched = {};

				function getObserver() {
					// Return shared instance of IntersectionObserver if already created
					if (observer) {
						return observer;
					} // Only create shared IntersectionObserver if supported in browser

					if (!IntersectionObserver) {
						return undefined;
					}

					return (observer = new IntersectionObserver(
						(entries) => {
							entries.forEach((entry) => {
								if (!listeners.has(entry.target)) {
									return;
								}

								var cb = listeners.get(entry.target);

								if (entry.isIntersecting || entry.intersectionRatio > 0) {
									observer.unobserve(entry.target);
									listeners.delete(entry.target);
									cb();
								}
							});
						},
						{
							rootMargin: "200px"
						}
					));
				}

				var listenToIntersections = (el, cb) => {
					var observer = getObserver();

					if (!observer) {
						return () => {};
					}

					observer.observe(el);
					listeners.set(el, cb);
					return () => {
						try {
							observer.unobserve(el);
						} catch (err) {
							console.error(err);
						}

						listeners.delete(el);
					};
				};

				class Link extends _react.Component {
					constructor(props) {
						super(props);
						this.p = void 0;

						this.cleanUpListeners = () => {};

						this.formatUrls = memoizedFormatUrl((href, asHref) => {
							return {
								href: (0, _router2.addBasePath)(formatUrl(href)),
								as: asHref
									? (0, _router2.addBasePath)(formatUrl(asHref))
									: asHref
							};
						});

						this.linkClicked = (e) => {
							var { nodeName, target } = e.currentTarget;

							if (
								nodeName === "A" &&
								((target && target !== "_self") ||
									e.metaKey ||
									e.ctrlKey ||
									e.shiftKey ||
									(e.nativeEvent && e.nativeEvent.which === 2))
							) {
								// ignore click for new tab / new window behavior
								return;
							}

							var { href, as } = this.formatUrls(
								this.props.href,
								this.props.as
							);

							if (!isLocal(href)) {
								// ignore click if it's outside our scope (e.g. https://google.com)
								return;
							}

							var { pathname } = window.location;
							href = (0, _url.resolve)(pathname, href);
							as = as ? (0, _url.resolve)(pathname, as) : href;
							e.preventDefault(); //  avoid scroll for urls with anchor refs

							var { scroll } = this.props;

							if (scroll == null) {
								scroll = as.indexOf("#") < 0;
							} // replace state instead of push if prop is present

							_router.default[this.props.replace ? "replace" : "push"](
								href,
								as,
								{
									shallow: this.props.shallow
								}
							).then((success) => {
								if (!success) return;

								if (scroll) {
									window.scrollTo(0, 0);
									document.body.focus();
								}
							});
						};

						if (true) {
							if (props.prefetch) {
								console.warn(
									"Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated"
								);
							}
						}

						this.p = props.prefetch !== false;
					}

					componentWillUnmount() {
						this.cleanUpListeners();
					}

					getPaths() {
						var { pathname } = window.location;
						var { href: parsedHref, as: parsedAs } = this.formatUrls(
							this.props.href,
							this.props.as
						);
						var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
						return [
							resolvedHref,
							parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref
						];
					}

					handleRef(ref) {
						if (this.p && IntersectionObserver && ref && ref.tagName) {
							this.cleanUpListeners();
							var isPrefetched =
								prefetched[
									this.getPaths().join(
										// Join on an invalid URI character
										"%"
									)
								];

							if (!isPrefetched) {
								this.cleanUpListeners = listenToIntersections(ref, () => {
									this.prefetch();
								});
							}
						}
					} // The function is memoized so that no extra lifecycles are needed
					// as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

					prefetch(options) {
						if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

						var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
						// loading with priority which can reject but we don't
						// want to force navigation since this is only a prefetch

						_router.default
							.prefetch(
								paths[/* href */
								0],
								paths[/* asPath */
								1],
								options
							)
							.catch((err) => {
								if (true) {
									// rethrow to show invalid URL errors
									throw err;
								}
							});

						prefetched[
							paths.join(
								// Join on an invalid URI character
								"%"
							)
						] = true;
					}

					render() {
						var { children } = this.props;
						var { href, as } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

						if (typeof children === "string") {
							children = _react.default.createElement("a", null, children);
						} // This will return the first child, if multiple are provided it will throw an error

						var child = _react.Children.only(children);

						var props = {
							ref: (el) => {
								this.handleRef(el);

								if (child && typeof child === "object" && child.ref) {
									if (typeof child.ref === "function") child.ref(el);
									else if (typeof child.ref === "object") {
										child.ref.current = el;
									}
								}
							},
							onMouseEnter: (e) => {
								if (
									child.props &&
									typeof child.props.onMouseEnter === "function"
								) {
									child.props.onMouseEnter(e);
								}

								this.prefetch({
									priority: true
								});
							},
							onClick: (e) => {
								if (child.props && typeof child.props.onClick === "function") {
									child.props.onClick(e);
								}

								if (!e.defaultPrevented) {
									this.linkClicked(e);
								}
							}
						}; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
						// defined, we specify the current 'href', so that repetition is not needed by the user

						if (
							this.props.passHref ||
							(child.type === "a" && !("href" in child.props))
						) {
							props.href = as || href;
						} // Add the ending slash to the paths. So, we can serve the
						// "<page>/index.html" directly.

						if (false) {
							var rewriteUrlForNextExport;
						}

						return _react.default.cloneElement(child, props);
					}
				}

				if (true) {
					var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

					var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

					var exact = __webpack_require__(
						/*! prop-types-exact */ "prop-types-exact"
					); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.

					Link.propTypes = exact({
						href: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
							.isRequired,
						as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
						prefetch: PropTypes.bool,
						replace: PropTypes.bool,
						shallow: PropTypes.bool,
						passHref: PropTypes.bool,
						scroll: PropTypes.bool,
						children: PropTypes.oneOfType([
							PropTypes.element,
							(props, propName) => {
								var value = props[propName];

								if (typeof value === "string") {
									warn(
										"Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"
									);
								}

								return null;
							}
						]).isRequired
					});
				}

				var _default = Link;
				exports.default = _default;

				/***/
			},

		/***/ "../../node_modules/next/dist/client/router.js":
			/*!*****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/client/router.js ***!
  \*****************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var _interopRequireWildcard = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"
				);

				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);

				exports.__esModule = true;
				exports.useRouter = useRouter;
				exports.makePublicRouterInstance = makePublicRouterInstance;
				exports.createRouter = exports.withRouter = exports.default = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ "react")
				);

				var _router2 = _interopRequireWildcard(
					__webpack_require__(
						/*! ../next-server/lib/router/router */ "../../node_modules/next/dist/next-server/lib/router/router.js"
					)
				);

				exports.Router = _router2.default;
				exports.NextRouter = _router2.NextRouter;

				var _routerContext = __webpack_require__(
					/*! ../next-server/lib/router-context */ "../next-server/lib/router-context"
				);

				var _withRouter = _interopRequireDefault(
					__webpack_require__(
						/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"
					)
				);

				exports.withRouter = _withRouter.default;
				/* global window */

				var singletonRouter = {
					router: null,
					// holds the actual router instance
					readyCallbacks: [],

					ready(cb) {
						if (this.router) return cb();

						if (false) {
						}
					}
				}; // Create public properties and methods of the router in the singletonRouter

				var urlPropertyFields = [
					"pathname",
					"route",
					"query",
					"asPath",
					"components",
					"isFallback",
					"basePath"
				];
				var routerEvents = [
					"routeChangeStart",
					"beforeHistoryChange",
					"routeChangeComplete",
					"routeChangeError",
					"hashChangeStart",
					"hashChangeComplete"
				];
				var coreMethodFields = [
					"push",
					"replace",
					"reload",
					"back",
					"prefetch",
					"beforePopState"
				]; // Events is a static property on the router, the router doesn't have to be initialized to use it

				Object.defineProperty(singletonRouter, "events", {
					get() {
						return _router2.default.events;
					}
				});
				urlPropertyFields.forEach((field) => {
					// Here we need to use Object.defineProperty because, we need to return
					// the property assigned to the actual router
					// The value might get changed as we change routes and this is the
					// proper way to access it
					Object.defineProperty(singletonRouter, field, {
						get() {
							var router = getRouter();
							return router[field];
						}
					});
				});
				coreMethodFields.forEach((field) => {
					// We don't really know the types here, so we add them later instead
					singletonRouter[field] = function () {
						var router = getRouter();
						return router[field](...arguments);
					};
				});
				routerEvents.forEach((event) => {
					singletonRouter.ready(() => {
						_router2.default.events.on(event, function () {
							var eventField =
								"on" + event.charAt(0).toUpperCase() + event.substring(1);
							var _singletonRouter = singletonRouter;

							if (_singletonRouter[eventField]) {
								try {
									_singletonRouter[eventField](...arguments);
								} catch (err) {
									// tslint:disable-next-line:no-console
									console.error(
										"Error when running the Router event: " + eventField
									); // tslint:disable-next-line:no-console

									console.error(err.message + "\n" + err.stack);
								}
							}
						});
					});
				});

				function getRouter() {
					if (!singletonRouter.router) {
						var message =
							"No router instance found.\n" +
							'You should only use "next/router" inside the client side of your app.\n';
						throw new Error(message);
					}

					return singletonRouter.router;
				} // Export the singletonRouter and this is the public API.

				var _default = singletonRouter; // Reexport the withRoute HOC

				exports.default = _default;

				function useRouter() {
					return _react.default.useContext(_routerContext.RouterContext);
				} // INTERNAL APIS
				// -------------
				// (do not use following exports inside the app)
				// Create a router and assign it as the singleton instance.
				// This is used in client side when we are initilizing the app.
				// This should **not** use inside the server.

				var createRouter = function createRouter() {
					for (
						var _len = arguments.length, args = new Array(_len), _key = 0;
						_key < _len;
						_key++
					) {
						args[_key] = arguments[_key];
					}

					singletonRouter.router = new _router2.default(...args);
					singletonRouter.readyCallbacks.forEach((cb) => cb());
					singletonRouter.readyCallbacks = [];
					return singletonRouter.router;
				}; // This function is used to create the `withRouter` router instance

				exports.createRouter = createRouter;

				function makePublicRouterInstance(router) {
					var _router = router;
					var instance = {};

					for (var property of urlPropertyFields) {
						if (typeof _router[property] === "object") {
							instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

							continue;
						}

						instance[property] = _router[property];
					} // Events is a static property on the router, the router doesn't have to be initialized to use it

					instance.events = _router2.default.events;
					coreMethodFields.forEach((field) => {
						instance[field] = function () {
							return _router[field](...arguments);
						};
					});
					return instance;
				}

				/***/
			},

		/***/ "../../node_modules/next/dist/client/with-router.js":
			/*!**********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/client/with-router.js ***!
  \**********************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);

				exports.__esModule = true;
				exports.default = withRouter;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ "react")
				);

				var _router = __webpack_require__(
					/*! ./router */ "../../node_modules/next/dist/client/router.js"
				);

				function withRouter(ComposedComponent) {
					function WithRouterWrapper(props) {
						return _react.default.createElement(
							ComposedComponent,
							Object.assign(
								{
									router: (0, _router.useRouter)()
								},
								props
							)
						);
					}

					WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps; // This is needed to allow checking for custom getInitialProps in _app
					WithRouterWrapper.origGetInitialProps =
						ComposedComponent.origGetInitialProps;

					if (true) {
						var name =
							ComposedComponent.displayName ||
							ComposedComponent.name ||
							"Unknown";
						WithRouterWrapper.displayName = "withRouter(" + name + ")";
					}

					return WithRouterWrapper;
				}

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/mitt.js":
			/*!************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/mitt.js ***!
  \************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				function mitt() {
					const all = Object.create(null);
					return {
						on(type, handler) {
							(all[type] || (all[type] = [])).push(handler);
						},

						off(type, handler) {
							if (all[type]) {
								// tslint:disable-next-line:no-bitwise
								all[type].splice(all[type].indexOf(handler) >>> 0, 1);
							}
						},

						emit(type, ...evts) {
							// eslint-disable-next-line array-callback-return
							(all[type] || []).slice().map((handler) => {
								handler(...evts);
							});
						}
					};
				}

				exports.default = mitt;

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/router/router.js":
			/*!*********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/router/router.js ***!
  \*********************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var __importDefault =
					(this && this.__importDefault) ||
					function (mod) {
						return mod && mod.__esModule
							? mod
							: {
									default: mod
							  };
					};

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				const url_1 = __webpack_require__(/*! url */ "url");

				const mitt_1 = __importDefault(
					__webpack_require__(
						/*! ../mitt */ "../../node_modules/next/dist/next-server/lib/mitt.js"
					)
				);

				const utils_1 = __webpack_require__(
					/*! ../utils */ "../../node_modules/next/dist/next-server/lib/utils.js"
				);

				const is_dynamic_1 = __webpack_require__(
					/*! ./utils/is-dynamic */ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js"
				);

				const route_matcher_1 = __webpack_require__(
					/*! ./utils/route-matcher */ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js"
				);

				const route_regex_1 = __webpack_require__(
					/*! ./utils/route-regex */ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js"
				);

				const basePath = false || "";

				function addBasePath(path) {
					return path.indexOf(basePath) !== 0 ? basePath + path : path;
				}

				exports.addBasePath = addBasePath;

				function delBasePath(path) {
					return path.indexOf(basePath) === 0
						? path.substr(basePath.length) || "/"
						: path;
				}

				exports.delBasePath = delBasePath;

				function toRoute(path) {
					return path.replace(/\/$/, "") || "/";
				}

				const prepareRoute = (path) =>
					toRoute(!path || path === "/" ? "/index" : path);

				function fetchNextData(pathname, query, isServerRender, cb) {
					let attempts = isServerRender ? 3 : 1;

					function getResponse() {
						return fetch(
							utils_1.formatWithValidation({
								pathname: addBasePath(
									// @ts-ignore __NEXT_DATA__
									`/_next/data/${__NEXT_DATA__.buildId}${delBasePath(
										pathname
									)}.json`
								),
								query
							}),
							{
								// Cookies are required to be present for Next.js' SSG "Preview Mode".
								// Cookies may also be required for `getServerSideProps`.
								//
								// > `fetch` won’t send cookies, unless you set the credentials init
								// > option.
								// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
								//
								// > For maximum browser compatibility when it comes to sending &
								// > receiving cookies, always supply the `credentials: 'same-origin'`
								// > option instead of relying on the default.
								// https://github.com/github/fetch#caveats
								credentials: "same-origin"
							}
						).then((res) => {
							if (!res.ok) {
								if (--attempts > 0 && res.status >= 500) {
									return getResponse();
								}

								throw new Error(`Failed to load static props`);
							}

							return res.json();
						});
					}

					return getResponse()
						.then((data) => {
							return cb ? cb(data) : data;
						})
						.catch((err) => {
							// We should only trigger a server-side transition if this was caused
							// on a client-side transition. Otherwise, we'd get into an infinite
							// loop.
							if (!isServerRender) {
								err.code = "PAGE_LOAD_ERROR";
							}

							throw err;
						});
				}

				class Router {
					constructor(
						pathname,
						query,
						as,
						{
							initialProps,
							pageLoader,
							App,
							wrapApp,
							Component,
							err,
							subscription,
							isFallback
						}
					) {
						// Static Data Cache
						this.sdc = {};

						this.onPopState = (e) => {
							if (!e.state) {
								// We get state as undefined for two reasons.
								//  1. With older safari (< 8) and older chrome (< 34)
								//  2. When the URL changed with #
								//
								// In the both cases, we don't need to proceed and change the route.
								// (as it's already changed)
								// But we can simply replace the state with the new changes.
								// Actually, for (1) we don't need to nothing. But it's hard to detect that event.
								// So, doing the following for (1) does no harm.
								const { pathname, query } = this;
								this.changeState(
									"replaceState",
									utils_1.formatWithValidation({
										pathname,
										query
									}),
									utils_1.getURL()
								);
								return;
							} // Make sure we don't re-render on initial load,
							// can be caused by navigating back from an external site

							if (
								e.state &&
								this.isSsr &&
								e.state.as === this.asPath &&
								url_1.parse(e.state.url).pathname === this.pathname
							) {
								return;
							} // If the downstream application returns falsy, return.
							// They will then be responsible for handling the event.

							if (this._bps && !this._bps(e.state)) {
								return;
							}

							const { url, as, options } = e.state;

							if (true) {
								if (typeof url === "undefined" || typeof as === "undefined") {
									console.warn(
										"`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty"
									);
								}
							}

							this.replace(url, as, options);
						};

						this._getStaticData = (asPath) => {
							const pathname = prepareRoute(url_1.parse(asPath).pathname);
							return false
								? undefined
								: fetchNextData(
										pathname,
										null,
										this.isSsr,
										(data) => (this.sdc[pathname] = data)
								  );
						};

						this._getServerData = (asPath) => {
							let { pathname, query } = url_1.parse(asPath, true);
							pathname = prepareRoute(pathname);
							return fetchNextData(pathname, query, this.isSsr);
						}; // represents the current component key

						this.route = toRoute(pathname); // set up the component cache (by route keys)

						this.components = {}; // We should not keep the cache, if there's an error
						// Otherwise, this cause issues when when going back and
						// come again to the errored page.

						if (pathname !== "/_error") {
							this.components[this.route] = {
								Component,
								props: initialProps,
								err,
								__N_SSG: initialProps && initialProps.__N_SSG,
								__N_SSP: initialProps && initialProps.__N_SSP
							};
						}

						this.components["/_app"] = {
							Component: App
						}; // Backwards compat for Router.router.events
						// TODO: Should be remove the following major version as it was never documented

						this.events = Router.events;
						this.pageLoader = pageLoader;
						this.pathname = pathname;
						this.query = query; // if auto prerendered and dynamic route wait to update asPath
						// until after mount to prevent hydration mismatch

						this.asPath = // @ts-ignore this is temporarily global (attached to window)
							is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport
								? pathname
								: as;
						this.basePath = basePath;
						this.sub = subscription;
						this.clc = null;
						this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
						// back from external site

						this.isSsr = true;
						this.isFallback = isFallback;

						if (false) {
						}
					} // @deprecated backwards compatibility even though it's a private method.

					static _rewriteUrlForNextExport(url) {
						if (false) {
						} else {
							return url;
						}
					}

					update(route, mod) {
						const Component = mod.default || mod;
						const data = this.components[route];

						if (!data) {
							throw new Error(`Cannot update unavailable route: ${route}`);
						}

						const newData = Object.assign(Object.assign({}, data), {
							Component,
							__N_SSG: mod.__N_SSG,
							__N_SSP: mod.__N_SSP
						});
						this.components[route] = newData; // pages/_app.js updated

						if (route === "/_app") {
							this.notify(this.components[this.route]);
							return;
						}

						if (route === this.route) {
							this.notify(newData);
						}
					}

					reload() {
						window.location.reload();
					}
					/**
					 * Go back in history
					 */

					back() {
						window.history.back();
					}
					/**
					 * Performs a `pushState` with arguments
					 * @param url of the route
					 * @param as masks `url` for the browser
					 * @param options object you can define `shallow` and other options
					 */

					push(url, as = url, options = {}) {
						return this.change("pushState", url, as, options);
					}
					/**
					 * Performs a `replaceState` with arguments
					 * @param url of the route
					 * @param as masks `url` for the browser
					 * @param options object you can define `shallow` and other options
					 */

					replace(url, as = url, options = {}) {
						return this.change("replaceState", url, as, options);
					}

					change(method, _url, _as, options) {
						return new Promise((resolve, reject) => {
							if (!options._h) {
								this.isSsr = false;
							} // marking route changes as a navigation start entry

							if (utils_1.ST) {
								performance.mark("routeChange");
							} // If url and as provided as an object representation,
							// we'll format them into the string version here.

							let url =
								typeof _url === "object"
									? utils_1.formatWithValidation(_url)
									: _url;
							let as =
								typeof _as === "object"
									? utils_1.formatWithValidation(_as)
									: _as;
							url = addBasePath(url);
							as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
							// "<page>/index.html" directly for the SSR page.

							if (false) {
							}

							this.abortComponentLoad(as); // If the url change is only related to a hash change
							// We should not proceed. We should only change the state.
							// WARNING: `_h` is an internal option for handing Next.js client-side
							// hydration. Your app should _never_ use this property. It may change at
							// any time without notice.

							if (!options._h && this.onlyAHashChange(as)) {
								this.asPath = as;
								Router.events.emit("hashChangeStart", as);
								this.changeState(method, url, as, options);
								this.scrollToHash(as);
								Router.events.emit("hashChangeComplete", as);
								return resolve(true);
							}

							const { pathname, query, protocol } = url_1.parse(url, true);

							if (!pathname || protocol) {
								if (true) {
									throw new Error(
										`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`
									);
								}

								return resolve(false);
							} // If asked to change the current URL we should reload the current page
							// (not location.reload() but reload getInitialProps and other Next.js stuffs)
							// We also need to set the method = replaceState always
							// as this should not go into the history (That's how browsers work)
							// We should compare the new asPath to the current asPath, not the url

							if (!this.urlIsNew(as)) {
								method = "replaceState";
							}

							const route = toRoute(pathname);
							const { shallow = false } = options;

							if (is_dynamic_1.isDynamicRoute(route)) {
								const { pathname: asPathname } = url_1.parse(as);
								const routeRegex = route_regex_1.getRouteRegex(route);
								const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(
									asPathname
								);

								if (!routeMatch) {
									const missingParams = Object.keys(routeRegex.groups).filter(
										(param) => !query[param]
									);

									if (missingParams.length > 0) {
										if (true) {
											console.warn(
												`Mismatching \`as\` and \`href\` failed to manually provide ` +
													`the params: ${missingParams.join(
														", "
													)} in the \`href\`'s \`query\``
											);
										}

										return reject(
											new Error(
												`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` +
													`Read more: https://err.sh/zeit/next.js/incompatible-href-as`
											)
										);
									}
								} else {
									// Merge params into `query`, overwriting any specified in search
									Object.assign(query, routeMatch);
								}
							}

							Router.events.emit("routeChangeStart", as); // If shallow is true and the route exists in the router cache we reuse the previous result

							this.getRouteInfo(route, pathname, query, as, shallow).then(
								(routeInfo) => {
									const { error } = routeInfo;

									if (error && error.cancelled) {
										return resolve(false);
									}

									Router.events.emit("beforeHistoryChange", as);
									this.changeState(method, url, as, options);

									if (true) {
										const appComp = this.components["/_app"].Component;
										window.next.isPrerendered =
											appComp.getInitialProps === appComp.origGetInitialProps &&
											!routeInfo.Component.getInitialProps;
									}

									this.set(route, pathname, query, as, routeInfo);

									if (error) {
										Router.events.emit("routeChangeError", error, as);
										throw error;
									}

									Router.events.emit("routeChangeComplete", as);
									return resolve(true);
								},
								reject
							);
						});
					}

					changeState(method, url, as, options = {}) {
						if (true) {
							if (typeof window.history === "undefined") {
								console.error(`Warning: window.history is not available.`);
								return;
							}

							if (typeof window.history[method] === "undefined") {
								console.error(
									`Warning: window.history.${method} is not available`
								);
								return;
							}
						}

						if (method !== "pushState" || utils_1.getURL() !== as) {
							window.history[method](
								{
									url,
									as,
									options
								}, // Most browsers currently ignores this parameter, although they may use it in the future.
								// Passing the empty string here should be safe against future changes to the method.
								// https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
								"",
								as
							);
						}
					}

					getRouteInfo(route, pathname, query, as, shallow = false) {
						const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
						// If the route is already rendered on the screen.

						if (shallow && cachedRouteInfo && this.route === route) {
							return Promise.resolve(cachedRouteInfo);
						}

						const handleError = (err, loadErrorFail) => {
							return new Promise((resolve) => {
								if (err.code === "PAGE_LOAD_ERROR" || loadErrorFail) {
									// If we can't load the page it could be one of following reasons
									//  1. Page doesn't exists
									//  2. Page does exist in a different zone
									//  3. Internal error while loading the page
									// So, doing a hard reload is the proper way to deal with this.
									window.location.href = as; // Changing the URL doesn't block executing the current code path.
									// So, we need to mark it as a cancelled error and stop the routing logic.

									err.cancelled = true; // @ts-ignore TODO: fix the control flow here

									return resolve({
										error: err
									});
								}

								if (err.cancelled) {
									// @ts-ignore TODO: fix the control flow here
									return resolve({
										error: err
									});
								}

								resolve(
									this.fetchComponent("/_error")
										.then((res) => {
											const { page: Component } = res;
											const routeInfo = {
												Component,
												err
											};
											return new Promise((resolve) => {
												this.getInitialProps(Component, {
													err,
													pathname,
													query
												}).then(
													(props) => {
														routeInfo.props = props;
														routeInfo.error = err;
														resolve(routeInfo);
													},
													(gipErr) => {
														console.error(
															"Error in error page `getInitialProps`: ",
															gipErr
														);
														routeInfo.error = err;
														routeInfo.props = {};
														resolve(routeInfo);
													}
												);
											});
										})
										.catch((err) => handleError(err, true))
								);
							});
						};

						return new Promise((resolve, reject) => {
							if (cachedRouteInfo) {
								return resolve(cachedRouteInfo);
							}

							this.fetchComponent(route).then(
								(res) =>
									resolve({
										Component: res.page,
										__N_SSG: res.mod.__N_SSG,
										__N_SSP: res.mod.__N_SSP
									}),
								reject
							);
						})
							.then((routeInfo) => {
								const { Component, __N_SSG, __N_SSP } = routeInfo;

								if (true) {
									const { isValidElementType } = __webpack_require__(
										/*! react-is */ "../../node_modules/next/node_modules/react-is/index.js"
									);

									if (!isValidElementType(Component)) {
										throw new Error(
											`The default export is not a React Component in page: "${pathname}"`
										);
									}
								}

								return this._getData(() =>
									__N_SSG
										? this._getStaticData(as)
										: __N_SSP
										? this._getServerData(as)
										: this.getInitialProps(
												Component, // we provide AppTree later so this needs to be `any`
												{
													pathname,
													query,
													asPath: as
												}
										  )
								).then((props) => {
									routeInfo.props = props;
									this.components[route] = routeInfo;
									return routeInfo;
								});
							})
							.catch(handleError);
					}

					set(route, pathname, query, as, data) {
						this.isFallback = false;
						this.route = route;
						this.pathname = pathname;
						this.query = query;
						this.asPath = as;
						this.notify(data);
					}
					/**
					 * Callback to execute before replacing router state
					 * @param cb callback to be executed
					 */

					beforePopState(cb) {
						this._bps = cb;
					}

					onlyAHashChange(as) {
						if (!this.asPath) return false;
						const [oldUrlNoHash, oldHash] = this.asPath.split("#");
						const [newUrlNoHash, newHash] = as.split("#"); // Makes sure we scroll to the provided hash if the url/hash are the same

						if (
							newHash &&
							oldUrlNoHash === newUrlNoHash &&
							oldHash === newHash
						) {
							return true;
						} // If the urls are change, there's more than a hash change

						if (oldUrlNoHash !== newUrlNoHash) {
							return false;
						} // If the hash has changed, then it's a hash only change.
						// This check is necessary to handle both the enter and
						// leave hash === '' cases. The identity case falls through
						// and is treated as a next reload.

						return oldHash !== newHash;
					}

					scrollToHash(as) {
						const [, hash] = as.split("#"); // Scroll to top if the hash is just `#` with no value

						if (hash === "") {
							window.scrollTo(0, 0);
							return;
						} // First we check if the element by id is found

						const idEl = document.getElementById(hash);

						if (idEl) {
							idEl.scrollIntoView();
							return;
						} // If there's no element with the id, we check the `name` property
						// To mirror browsers

						const nameEl = document.getElementsByName(hash)[0];

						if (nameEl) {
							nameEl.scrollIntoView();
						}
					}

					urlIsNew(asPath) {
						return this.asPath !== asPath;
					}
					/**
					 * Prefetch page code, you may wait for the data during page rendering.
					 * This feature only works in production!
					 * @param url the href of prefetched page
					 * @param asPath the as path of the prefetched page
					 */

					prefetch(url, asPath = url, options = {}) {
						return new Promise((resolve, reject) => {
							const { pathname, protocol } = url_1.parse(url);

							if (!pathname || protocol) {
								if (true) {
									throw new Error(
										`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`
									);
								}

								return;
							} // Prefetch is not supported in development mode because it would trigger on-demand-entries

							if (true) {
								return;
							}

							const route = delBasePath(toRoute(pathname));
							Promise.all([
								this.pageLoader.prefetchData(url, delBasePath(asPath)),
								this.pageLoader[options.priority ? "loadPage" : "prefetch"](
									route
								)
							]).then(() => resolve(), reject);
						});
					}

					async fetchComponent(route) {
						let cancelled = false;

						const cancel = (this.clc = () => {
							cancelled = true;
						});

						route = delBasePath(route);
						const componentResult = await this.pageLoader.loadPage(route);

						if (cancelled) {
							const error = new Error(
								`Abort fetching component for route: "${route}"`
							);
							error.cancelled = true;
							throw error;
						}

						if (cancel === this.clc) {
							this.clc = null;
						}

						return componentResult;
					}

					_getData(fn) {
						let cancelled = false;

						const cancel = () => {
							cancelled = true;
						};

						this.clc = cancel;
						return fn().then((data) => {
							if (cancel === this.clc) {
								this.clc = null;
							}

							if (cancelled) {
								const err = new Error("Loading initial props cancelled");
								err.cancelled = true;
								throw err;
							}

							return data;
						});
					}

					getInitialProps(Component, ctx) {
						const { Component: App } = this.components["/_app"];

						const AppTree = this._wrapApp(App);

						ctx.AppTree = AppTree;
						return utils_1.loadGetInitialProps(App, {
							AppTree,
							Component,
							router: this,
							ctx
						});
					}

					abortComponentLoad(as) {
						if (this.clc) {
							const e = new Error("Route Cancelled");
							e.cancelled = true;
							Router.events.emit("routeChangeError", e, as);
							this.clc();
							this.clc = null;
						}
					}

					notify(data) {
						this.sub(data, this.components["/_app"].Component);
					}
				}

				exports.default = Router;
				Router.events = mitt_1.default();

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
			/*!*******************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \*******************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				}); // Identify /[param]/ in route string

				const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

				function isDynamicRoute(route) {
					return TEST_ROUTE.test(route);
				}

				exports.isDynamicRoute = isDynamicRoute;

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
			/*!**********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \**********************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				function getRouteMatcher(routeRegex) {
					const { re, groups } = routeRegex;
					return (pathname) => {
						const routeMatch = re.exec(pathname);

						if (!routeMatch) {
							return false;
						}

						const decode = (param) => {
							try {
								return decodeURIComponent(param);
							} catch (_) {
								const err = new Error("failed to decode param");
								err.code = "DECODE_FAILED";
								throw err;
							}
						};

						const params = {};
						Object.keys(groups).forEach((slugName) => {
							const g = groups[slugName];
							const m = routeMatch[g.pos];

							if (m !== undefined) {
								params[slugName] = ~m.indexOf("/")
									? m.split("/").map((entry) => decode(entry))
									: g.repeat
									? [decode(m)]
									: decode(m);
							}
						});
						return params;
					};
				}

				exports.getRouteMatcher = getRouteMatcher;

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
			/*!********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \********************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				}); // this isn't importing the escape-string-regex module
				// to reduce bytes

				function escapeRegex(str) {
					return str.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&");
				}

				function getRouteRegex(normalizedRoute) {
					// Escape all characters that could be considered RegEx
					const escapedRoute = escapeRegex(
						normalizedRoute.replace(/\/$/, "") || "/"
					);
					const groups = {};
					let groupIndex = 1;
					const parameterizedRoute = escapedRoute.replace(
						/\/\\\[([^/]+?)\\\](?=\/|$)/g,
						(_, $1) => {
							const isCatchAll = /^(\\\.){3}/.test($1);
							groups[
								$1 // Un-escape key
									.replace(/\\([|\\{}()[\]^$+*?.-])/g, "$1")
									.replace(/^\.{3}/, "") // eslint-disable-next-line no-sequences
							] = {
								pos: groupIndex++,
								repeat: isCatchAll
							};
							return isCatchAll ? "/(.+?)" : "/([^/]+?)";
						}
					);
					let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
					// while generating routes-manifest

					if (true) {
						namedParameterizedRoute = escapedRoute.replace(
							/\/\\\[([^/]+?)\\\](?=\/|$)/g,
							(_, $1) => {
								const isCatchAll = /^(\\\.){3}/.test($1);
								const key = $1 // Un-escape key
									.replace(/\\([|\\{}()[\]^$+*?.-])/g, "$1")
									.replace(/^\.{3}/, "");
								return isCatchAll
									? `/(?<${escapeRegex(key)}>.+?)`
									: `/(?<${escapeRegex(key)}>[^/]+?)`;
							}
						);
					}

					return Object.assign(
						{
							re: new RegExp("^" + parameterizedRoute + "(?:/)?$", "i"),
							groups
						},
						namedParameterizedRoute
							? {
									namedRegex: `^${namedParameterizedRoute}(?:/)?$`
							  }
							: {}
					);
				}

				exports.getRouteRegex = getRouteRegex;

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/utils.js":
			/*!*************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/utils.js ***!
  \*************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				const url_1 = __webpack_require__(/*! url */ "url");
				/**
				 * Utils
				 */

				function execOnce(fn) {
					let used = false;
					let result;
					return (...args) => {
						if (!used) {
							used = true;
							result = fn(...args);
						}

						return result;
					};
				}

				exports.execOnce = execOnce;

				function getLocationOrigin() {
					const { protocol, hostname, port } = window.location;
					return `${protocol}//${hostname}${port ? ":" + port : ""}`;
				}

				exports.getLocationOrigin = getLocationOrigin;

				function getURL() {
					const { href } = window.location;
					const origin = getLocationOrigin();
					return href.substring(origin.length);
				}

				exports.getURL = getURL;

				function getDisplayName(Component) {
					return typeof Component === "string"
						? Component
						: Component.displayName || Component.name || "Unknown";
				}

				exports.getDisplayName = getDisplayName;

				function isResSent(res) {
					return res.finished || res.headersSent;
				}

				exports.isResSent = isResSent;

				async function loadGetInitialProps(App, ctx) {
					var _a;

					if (true) {
						if (
							(_a = App.prototype) === null || _a === void 0
								? void 0
								: _a.getInitialProps
						) {
							const message = `"${getDisplayName(
								App
							)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
							throw new Error(message);
						}
					} // when called from _app `ctx` is nested in `ctx`

					const res = ctx.res || (ctx.ctx && ctx.ctx.res);

					if (!App.getInitialProps) {
						if (ctx.ctx && ctx.Component) {
							// @ts-ignore pageProps default
							return {
								pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
							};
						}

						return {};
					}

					const props = await App.getInitialProps(ctx);

					if (res && isResSent(res)) {
						return props;
					}

					if (!props) {
						const message = `"${getDisplayName(
							App
						)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
						throw new Error(message);
					}

					if (true) {
						if (Object.keys(props).length === 0 && !ctx.ctx) {
							console.warn(
								`${getDisplayName(
									App
								)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`
							);
						}
					}

					return props;
				}

				exports.loadGetInitialProps = loadGetInitialProps;
				exports.urlObjectKeys = [
					"auth",
					"hash",
					"host",
					"hostname",
					"href",
					"path",
					"pathname",
					"port",
					"protocol",
					"query",
					"search",
					"slashes"
				];

				function formatWithValidation(url, options) {
					if (true) {
						if (url !== null && typeof url === "object") {
							Object.keys(url).forEach((key) => {
								if (exports.urlObjectKeys.indexOf(key) === -1) {
									console.warn(
										`Unknown key passed via urlObject into url.format: ${key}`
									);
								}
							});
						}
					}

					return url_1.format(url, options);
				}

				exports.formatWithValidation = formatWithValidation;
				exports.SP = typeof performance !== "undefined";
				exports.ST =
					exports.SP &&
					typeof performance.mark === "function" &&
					typeof performance.measure === "function";

				/***/
			},

		/***/ "../../node_modules/next/link.js":
			/*!***************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/link.js ***!
  \***************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				module.exports = __webpack_require__(
					/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js"
				);

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

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
			/*!*********************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*********************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var _typeof = __webpack_require__(
					/*! ../helpers/typeof */ "../../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js"
				);

				function _getRequireWildcardCache() {
					if (typeof WeakMap !== "function") return null;
					var cache = new WeakMap();

					_getRequireWildcardCache = function _getRequireWildcardCache() {
						return cache;
					};

					return cache;
				}

				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					}

					if (
						obj === null ||
						(_typeof(obj) !== "object" && typeof obj !== "function")
					) {
						return {
							default: obj
						};
					}

					var cache = _getRequireWildcardCache();

					if (cache && cache.has(obj)) {
						return cache.get(obj);
					}

					var newObj = {};
					var hasPropertyDescriptor =
						Object.defineProperty && Object.getOwnPropertyDescriptor;

					for (var key in obj) {
						if (Object.prototype.hasOwnProperty.call(obj, key)) {
							var desc = hasPropertyDescriptor
								? Object.getOwnPropertyDescriptor(obj, key)
								: null;

							if (desc && (desc.get || desc.set)) {
								Object.defineProperty(newObj, key, desc);
							} else {
								newObj[key] = obj[key];
							}
						}
					}

					newObj["default"] = obj;

					if (cache) {
						cache.set(obj, newObj);
					}

					return newObj;
				}

				module.exports = _interopRequireWildcard;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
			/*!*****************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*****************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _typeof2(obj) {
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof2 = function _typeof2(obj) {
							return typeof obj;
						};
					} else {
						_typeof2 = function _typeof2(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof2(obj);
				}

				function _typeof(obj) {
					if (
						typeof Symbol === "function" &&
						_typeof2(Symbol.iterator) === "symbol"
					) {
						module.exports = _typeof = function _typeof(obj) {
							return _typeof2(obj);
						};
					} else {
						module.exports = _typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: _typeof2(obj);
						};
					}

					return _typeof(obj);
				}

				module.exports = _typeof;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
			/*!*********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*********************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				/** @license React v16.8.6
				 * react-is.development.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				if (true) {
					(function () {
						"use strict";

						Object.defineProperty(exports, "__esModule", { value: true });

						// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
						// nor polyfill, then a plain number is used for performance.
						var hasSymbol = typeof Symbol === "function" && Symbol.for;

						var REACT_ELEMENT_TYPE = hasSymbol
							? Symbol.for("react.element")
							: 0xeac7;
						var REACT_PORTAL_TYPE = hasSymbol
							? Symbol.for("react.portal")
							: 0xeaca;
						var REACT_FRAGMENT_TYPE = hasSymbol
							? Symbol.for("react.fragment")
							: 0xeacb;
						var REACT_STRICT_MODE_TYPE = hasSymbol
							? Symbol.for("react.strict_mode")
							: 0xeacc;
						var REACT_PROFILER_TYPE = hasSymbol
							? Symbol.for("react.profiler")
							: 0xead2;
						var REACT_PROVIDER_TYPE = hasSymbol
							? Symbol.for("react.provider")
							: 0xeacd;
						var REACT_CONTEXT_TYPE = hasSymbol
							? Symbol.for("react.context")
							: 0xeace;
						var REACT_ASYNC_MODE_TYPE = hasSymbol
							? Symbol.for("react.async_mode")
							: 0xeacf;
						var REACT_CONCURRENT_MODE_TYPE = hasSymbol
							? Symbol.for("react.concurrent_mode")
							: 0xeacf;
						var REACT_FORWARD_REF_TYPE = hasSymbol
							? Symbol.for("react.forward_ref")
							: 0xead0;
						var REACT_SUSPENSE_TYPE = hasSymbol
							? Symbol.for("react.suspense")
							: 0xead1;
						var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
						var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;

						function isValidElementType(type) {
							return (
								typeof type === "string" ||
								typeof type === "function" ||
								// Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
								type === REACT_FRAGMENT_TYPE ||
								type === REACT_CONCURRENT_MODE_TYPE ||
								type === REACT_PROFILER_TYPE ||
								type === REACT_STRICT_MODE_TYPE ||
								type === REACT_SUSPENSE_TYPE ||
								(typeof type === "object" &&
									type !== null &&
									(type.$$typeof === REACT_LAZY_TYPE ||
										type.$$typeof === REACT_MEMO_TYPE ||
										type.$$typeof === REACT_PROVIDER_TYPE ||
										type.$$typeof === REACT_CONTEXT_TYPE ||
										type.$$typeof === REACT_FORWARD_REF_TYPE))
							);
						}

						/**
						 * Forked from fbjs/warning:
						 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
						 *
						 * Only change is we use console.warn instead of console.error,
						 * and do nothing when 'console' is not supported.
						 * This really simplifies the code.
						 * ---
						 * Similar to invariant but only logs a warning if the condition is not met.
						 * This can be used to log issues in development environments in critical
						 * paths. Removing the logging code for production environments will keep the
						 * same logic and follow the same code paths.
						 */

						var lowPriorityWarning = function () {};

						{
							var printWarning = function (format) {
								for (
									var _len = arguments.length,
										args = Array(_len > 1 ? _len - 1 : 0),
										_key = 1;
									_key < _len;
									_key++
								) {
									args[_key - 1] = arguments[_key];
								}

								var argIndex = 0;
								var message =
									"Warning: " +
									format.replace(/%s/g, function () {
										return args[argIndex++];
									});
								if (typeof console !== "undefined") {
									console.warn(message);
								}
								try {
									// --- Welcome to debugging React ---
									// This error was thrown as a convenience so that you can use this stack
									// to find the callsite that caused this warning to fire.
									throw new Error(message);
								} catch (x) {}
							};

							lowPriorityWarning = function (condition, format) {
								if (format === undefined) {
									throw new Error(
										"`lowPriorityWarning(condition, format, ...args)` requires a warning " +
											"message argument"
									);
								}
								if (!condition) {
									for (
										var _len2 = arguments.length,
											args = Array(_len2 > 2 ? _len2 - 2 : 0),
											_key2 = 2;
										_key2 < _len2;
										_key2++
									) {
										args[_key2 - 2] = arguments[_key2];
									}

									printWarning.apply(undefined, [format].concat(args));
								}
							};
						}

						var lowPriorityWarning$1 = lowPriorityWarning;

						function typeOf(object) {
							if (typeof object === "object" && object !== null) {
								var $$typeof = object.$$typeof;
								switch ($$typeof) {
									case REACT_ELEMENT_TYPE:
										var type = object.type;

										switch (type) {
											case REACT_ASYNC_MODE_TYPE:
											case REACT_CONCURRENT_MODE_TYPE:
											case REACT_FRAGMENT_TYPE:
											case REACT_PROFILER_TYPE:
											case REACT_STRICT_MODE_TYPE:
											case REACT_SUSPENSE_TYPE:
												return type;
											default:
												var $$typeofType = type && type.$$typeof;

												switch ($$typeofType) {
													case REACT_CONTEXT_TYPE:
													case REACT_FORWARD_REF_TYPE:
													case REACT_PROVIDER_TYPE:
														return $$typeofType;
													default:
														return $$typeof;
												}
										}
									case REACT_LAZY_TYPE:
									case REACT_MEMO_TYPE:
									case REACT_PORTAL_TYPE:
										return $$typeof;
								}
							}

							return undefined;
						}

						// AsyncMode is deprecated along with isAsyncMode
						var AsyncMode = REACT_ASYNC_MODE_TYPE;
						var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
						var ContextConsumer = REACT_CONTEXT_TYPE;
						var ContextProvider = REACT_PROVIDER_TYPE;
						var Element = REACT_ELEMENT_TYPE;
						var ForwardRef = REACT_FORWARD_REF_TYPE;
						var Fragment = REACT_FRAGMENT_TYPE;
						var Lazy = REACT_LAZY_TYPE;
						var Memo = REACT_MEMO_TYPE;
						var Portal = REACT_PORTAL_TYPE;
						var Profiler = REACT_PROFILER_TYPE;
						var StrictMode = REACT_STRICT_MODE_TYPE;
						var Suspense = REACT_SUSPENSE_TYPE;

						var hasWarnedAboutDeprecatedIsAsyncMode = false;

						// AsyncMode should be deprecated
						function isAsyncMode(object) {
							{
								if (!hasWarnedAboutDeprecatedIsAsyncMode) {
									hasWarnedAboutDeprecatedIsAsyncMode = true;
									lowPriorityWarning$1(
										false,
										"The ReactIs.isAsyncMode() alias has been deprecated, " +
											"and will be removed in React 17+. Update your code to use " +
											"ReactIs.isConcurrentMode() instead. It has the exact same API."
									);
								}
							}
							return (
								isConcurrentMode(object) ||
								typeOf(object) === REACT_ASYNC_MODE_TYPE
							);
						}
						function isConcurrentMode(object) {
							return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
						}
						function isContextConsumer(object) {
							return typeOf(object) === REACT_CONTEXT_TYPE;
						}
						function isContextProvider(object) {
							return typeOf(object) === REACT_PROVIDER_TYPE;
						}
						function isElement(object) {
							return (
								typeof object === "object" &&
								object !== null &&
								object.$$typeof === REACT_ELEMENT_TYPE
							);
						}
						function isForwardRef(object) {
							return typeOf(object) === REACT_FORWARD_REF_TYPE;
						}
						function isFragment(object) {
							return typeOf(object) === REACT_FRAGMENT_TYPE;
						}
						function isLazy(object) {
							return typeOf(object) === REACT_LAZY_TYPE;
						}
						function isMemo(object) {
							return typeOf(object) === REACT_MEMO_TYPE;
						}
						function isPortal(object) {
							return typeOf(object) === REACT_PORTAL_TYPE;
						}
						function isProfiler(object) {
							return typeOf(object) === REACT_PROFILER_TYPE;
						}
						function isStrictMode(object) {
							return typeOf(object) === REACT_STRICT_MODE_TYPE;
						}
						function isSuspense(object) {
							return typeOf(object) === REACT_SUSPENSE_TYPE;
						}

						exports.typeOf = typeOf;
						exports.AsyncMode = AsyncMode;
						exports.ConcurrentMode = ConcurrentMode;
						exports.ContextConsumer = ContextConsumer;
						exports.ContextProvider = ContextProvider;
						exports.Element = Element;
						exports.ForwardRef = ForwardRef;
						exports.Fragment = Fragment;
						exports.Lazy = Lazy;
						exports.Memo = Memo;
						exports.Portal = Portal;
						exports.Profiler = Profiler;
						exports.StrictMode = StrictMode;
						exports.Suspense = Suspense;
						exports.isValidElementType = isValidElementType;
						exports.isAsyncMode = isAsyncMode;
						exports.isConcurrentMode = isConcurrentMode;
						exports.isContextConsumer = isContextConsumer;
						exports.isContextProvider = isContextProvider;
						exports.isElement = isElement;
						exports.isForwardRef = isForwardRef;
						exports.isFragment = isFragment;
						exports.isLazy = isLazy;
						exports.isMemo = isMemo;
						exports.isPortal = isPortal;
						exports.isProfiler = isProfiler;
						exports.isStrictMode = isStrictMode;
						exports.isSuspense = isSuspense;
					})();
				}

				/***/
			},

		/***/ "../../node_modules/next/node_modules/react-is/index.js":
			/*!**************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/react-is/index.js ***!
  \**************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				if (false) {
				} else {
					module.exports = __webpack_require__(
						/*! ./cjs/react-is.development.js */ "../../node_modules/next/node_modules/react-is/cjs/react-is.development.js"
					);
				}

				/***/
			},

		/***/ "../next-server/lib/router-context":
			/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("next/dist/next-server/lib/router-context.js");

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

		/***/ "./src/components/Header.jsx":
			/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
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
				/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! baseui */ "baseui"
				);
				/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					baseui__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! baseui/button */ "baseui/button"
				);
				/* harmony import */ var baseui_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
					baseui_button__WEBPACK_IMPORTED_MODULE_2__
				);
				/* harmony import */ var baseui_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! baseui/drawer */ "baseui/drawer"
				);
				/* harmony import */ var baseui_drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
					baseui_drawer__WEBPACK_IMPORTED_MODULE_3__
				);
				/* harmony import */ var baseui_icon_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! baseui/icon/menu */ "baseui/icon/menu"
				);
				/* harmony import */ var baseui_icon_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
					baseui_icon_menu__WEBPACK_IMPORTED_MODULE_4__
				);
				/* harmony import */ var baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! baseui/header-navigation */ "baseui/header-navigation"
				);
				/* harmony import */ var baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
					baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__
				);
				/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					/*! next/link */ "../../node_modules/next/link.js"
				);
				/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
					next_link__WEBPACK_IMPORTED_MODULE_6__
				);
				/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					/*! react-feather */ "react-feather"
				);
				/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
					react_feather__WEBPACK_IMPORTED_MODULE_7__
				);
				/* harmony import */ var is_empty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					/*! is-empty */ "is-empty"
				);
				/* harmony import */ var is_empty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
					is_empty__WEBPACK_IMPORTED_MODULE_8__
				);
				/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					/*! react-loading-skeleton */ "react-loading-skeleton"
				);
				/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
					react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9__
				);
				/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					/*! @/routes */ "./src/routes.js"
				);
				var _jsxFileName =
					"/Users/ryansoury/dev/wagecall/packages/wagecall/src/components/Header.jsx";
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

				// import useUser from "@/hooks/use-user";

				const logoUrl = "/static/logo/wagecall-logo@300.png";

				const Header = () => {
					const [css, theme] = Object(
						baseui__WEBPACK_IMPORTED_MODULE_1__["useStyletron"]
					)();
					const { 0: mobileMenu, 1: showMobileMenu } = Object(
						react__WEBPACK_IMPORTED_MODULE_0__["useState"]
					)(false); // const [user, { loading: isLoading }] = useUser();

					const user = {};
					const isLoading = false;
					let menuItems = [];

					if (isLoading) {
						menuItems = Object.entries({
							button1: () =>
								__jsx(
									react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9___default.a,
									{
										height: 45,
										width: 100,
										__self: undefined,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 39,
											columnNumber: 19
										}
									}
								),
							button2: () =>
								__jsx(
									react_loading_skeleton__WEBPACK_IMPORTED_MODULE_9___default.a,
									{
										height: 45,
										width: 100,
										__self: undefined,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 40,
											columnNumber: 19
										}
									}
								)
						});
					} else if (is_empty__WEBPACK_IMPORTED_MODULE_8___default()(user)) {
						menuItems = Object.entries({
							login: (props) =>
								__jsx(
									next_link__WEBPACK_IMPORTED_MODULE_6___default.a,
									{
										href:
											_routes__WEBPACK_IMPORTED_MODULE_10__["default"].login,
										__self: undefined,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 45,
											columnNumber: 5
										}
									},
									__jsx(
										baseui_button__WEBPACK_IMPORTED_MODULE_2__["Button"],
										_extends(
											{
												kind:
													baseui_button__WEBPACK_IMPORTED_MODULE_2__["KIND"]
														.tertiary
											},
											props,
											{
												__self: undefined,
												__source: {
													fileName: _jsxFileName,
													lineNumber: 46,
													columnNumber: 6
												}
											}
										),
										"Log in"
									)
								),
							signup: (props) =>
								__jsx(
									next_link__WEBPACK_IMPORTED_MODULE_6___default.a,
									{
										href:
											_routes__WEBPACK_IMPORTED_MODULE_10__["default"].signup,
										__self: undefined,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 52,
											columnNumber: 5
										}
									},
									__jsx(
										baseui_button__WEBPACK_IMPORTED_MODULE_2__["Button"],
										_extends({}, props, {
											__self: undefined,
											__source: {
												fileName: _jsxFileName,
												lineNumber: 53,
												columnNumber: 6
											}
										}),
										"Sign up"
									)
								)
						});
					} else {
						menuItems = Object.entries({
							profile: (props) =>
								__jsx(
									next_link__WEBPACK_IMPORTED_MODULE_6___default.a,
									{
										href:
											_routes__WEBPACK_IMPORTED_MODULE_10__["default"].settings
												.profile,
										__self: undefined,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 60,
											columnNumber: 5
										}
									},
									__jsx(
										baseui_button__WEBPACK_IMPORTED_MODULE_2__["Button"],
										_extends(
											{
												kind:
													baseui_button__WEBPACK_IMPORTED_MODULE_2__["KIND"]
														.tertiary,
												startEnhancer: () =>
													__jsx(
														react_feather__WEBPACK_IMPORTED_MODULE_7__["User"],
														{
															size: 20,
															__self: undefined,
															__source: {
																fileName: _jsxFileName,
																lineNumber: 63,
																columnNumber: 28
															}
														}
													)
											},
											props,
											{
												__self: undefined,
												__source: {
													fileName: _jsxFileName,
													lineNumber: 61,
													columnNumber: 6
												}
											}
										),
										"Profile"
									)
								),
							paymentMethods: (props) =>
								__jsx(
									next_link__WEBPACK_IMPORTED_MODULE_6___default.a,
									{
										href:
											_routes__WEBPACK_IMPORTED_MODULE_10__["default"].settings
												.paymentMethods,
										__self: undefined,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 71,
											columnNumber: 5
										}
									},
									__jsx(
										baseui_button__WEBPACK_IMPORTED_MODULE_2__["Button"],
										_extends(
											{
												kind:
													baseui_button__WEBPACK_IMPORTED_MODULE_2__["KIND"]
														.tertiary,
												startEnhancer: () =>
													__jsx(
														react_feather__WEBPACK_IMPORTED_MODULE_7__[
															"CreditCard"
														],
														{
															size: 20,
															__self: undefined,
															__source: {
																fileName: _jsxFileName,
																lineNumber: 74,
																columnNumber: 28
															}
														}
													)
											},
											props,
											{
												__self: undefined,
												__source: {
													fileName: _jsxFileName,
													lineNumber: 72,
													columnNumber: 6
												}
											}
										),
										"Payment Methods"
									)
								),
							notifications: (props) =>
								__jsx(
									next_link__WEBPACK_IMPORTED_MODULE_6___default.a,
									{
										href:
											_routes__WEBPACK_IMPORTED_MODULE_10__["default"].settings
												.notifications,
										__self: undefined,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 82,
											columnNumber: 5
										}
									},
									__jsx(
										baseui_button__WEBPACK_IMPORTED_MODULE_2__["Button"],
										_extends(
											{
												kind:
													baseui_button__WEBPACK_IMPORTED_MODULE_2__["KIND"]
														.tertiary,
												startEnhancer: () =>
													__jsx(
														react_feather__WEBPACK_IMPORTED_MODULE_7__["Bell"],
														{
															size: 20,
															__self: undefined,
															__source: {
																fileName: _jsxFileName,
																lineNumber: 85,
																columnNumber: 28
															}
														}
													)
											},
											props,
											{
												__self: undefined,
												__source: {
													fileName: _jsxFileName,
													lineNumber: 83,
													columnNumber: 6
												}
											}
										),
										"Notifications"
									)
								)
						});
					}

					return __jsx(
						react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
						null,
						__jsx(
							baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__[
								"HeaderNavigation"
							],
							{
								overrides: {
									Root: {
										style: {
											borderBottomColor: `transparent`,
											justifyContent: "space-between",
											marginBottom: "15px"
										}
									}
								},
								__self: undefined,
								__source: {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 4
								}
							},
							__jsx(
								baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__[
									"StyledNavigationList"
								],
								{
									$align:
										baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__[
											"ALIGN"
										].left,
									__self: undefined,
									__source: {
										fileName: _jsxFileName,
										lineNumber: 108,
										columnNumber: 5
									}
								},
								__jsx(
									baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__[
										"StyledNavigationItem"
									],
									{
										className: css({
											margin: "0 0 0 -10px"
										}),
										__self: undefined,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 109,
											columnNumber: 6
										}
									},
									__jsx(
										"div",
										{
											className: css({
												height: "100%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center"
											}),
											__self: undefined,
											__source: {
												fileName: _jsxFileName,
												lineNumber: 110,
												columnNumber: 7
											}
										},
										__jsx("img", {
											src: logoUrl,
											alt: "Wagecall logo",
											title: "Wagecall",
											className: css({
												width: "100%",
												maxWidth: "150px"
											}),
											__self: undefined,
											__source: {
												fileName: _jsxFileName,
												lineNumber: 118,
												columnNumber: 8
											}
										})
									)
								)
							),
							__jsx(
								baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__[
									"StyledNavigationList"
								],
								{
									$align:
										baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__[
											"ALIGN"
										].right,
									className: css({
										[theme.mediaQuery.maxSmall]: {
											display: "none"
										},
										paddingRight: `${theme.sizing.scale400} !important`,
										paddingLeft: `${theme.sizing.scale400} !important`
									}),
									__self: undefined,
									__source: {
										fileName: _jsxFileName,
										lineNumber: 127,
										columnNumber: 5
									}
								},
								menuItems.map(([key, Item]) =>
									__jsx(
										baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__[
											"StyledNavigationItem"
										],
										{
											key: key,
											className: css({
												paddingLeft: `${theme.sizing.scale400} !important`
											}),
											__self: undefined,
											__source: {
												fileName: _jsxFileName,
												lineNumber: 138,
												columnNumber: 7
											}
										},
										__jsx(Item, {
											__self: undefined,
											__source: {
												fileName: _jsxFileName,
												lineNumber: 144,
												columnNumber: 8
											}
										})
									)
								)
							),
							__jsx(
								baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__[
									"StyledNavigationList"
								],
								{
									$align:
										baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__[
											"ALIGN"
										].right,
									className: css({
										[theme.mediaQuery.medium]: {
											display: "none"
										}
									}),
									__self: undefined,
									__source: {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 5
									}
								},
								__jsx(
									baseui_header_navigation__WEBPACK_IMPORTED_MODULE_5__[
										"StyledNavigationItem"
									],
									{
										__self: undefined,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 156,
											columnNumber: 6
										}
									},
									__jsx(
										baseui_button__WEBPACK_IMPORTED_MODULE_2__["Button"],
										{
											kind:
												baseui_button__WEBPACK_IMPORTED_MODULE_2__["KIND"]
													.tertiary,
											shape:
												baseui_button__WEBPACK_IMPORTED_MODULE_2__["SHAPE"]
													.round,
											onClick: () => showMobileMenu(true),
											__self: undefined,
											__source: {
												fileName: _jsxFileName,
												lineNumber: 157,
												columnNumber: 7
											}
										},
										__jsx(
											baseui_icon_menu__WEBPACK_IMPORTED_MODULE_4___default.a,
											{
												size: 22,
												__self: undefined,
												__source: {
													fileName: _jsxFileName,
													lineNumber: 162,
													columnNumber: 8
												}
											}
										)
									)
								)
							)
						),
						__jsx(
							baseui_drawer__WEBPACK_IMPORTED_MODULE_3__["Drawer"],
							{
								animate: true,
								anchor:
									baseui_drawer__WEBPACK_IMPORTED_MODULE_3__["ANCHOR"].right,
								isOpen: mobileMenu,
								autoFocus: true,
								onClose: () => showMobileMenu(false),
								overrides: {
									DrawerContainer: {
										style: {
											maxWidth: "300px"
										}
									}
								},
								__self: undefined,
								__source: {
									fileName: _jsxFileName,
									lineNumber: 167,
									columnNumber: 4
								}
							},
							menuItems.map(([key, Item]) =>
								__jsx(
									"div",
									{
										key: key,
										__self: undefined,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 182,
											columnNumber: 6
										}
									},
									__jsx(Item, {
										overrides: {
											BaseButton: {
												style: {
													width: "100%",
													justifyContent: "flex-start"
												}
											}
										},
										onClick: () => showMobileMenu(false),
										__self: undefined,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 183,
											columnNumber: 7
										}
									})
								)
							)
						)
					);
				};

				/* harmony default export */ __webpack_exports__["default"] = Header;

				/***/
			},

		/***/ "./src/pages/index.jsx":
			/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
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
				/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! baseui */ "baseui"
				);
				/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					baseui__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! @/components/Header */ "./src/components/Header.jsx"
				);
				var _jsxFileName =
					"/Users/ryansoury/dev/wagecall/packages/wagecall/src/pages/index.jsx";

				var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

				const Index = () => {
					const [css] = Object(
						baseui__WEBPACK_IMPORTED_MODULE_1__["useStyletron"]
					)();
					return __jsx(
						"main",
						{
							__self: undefined,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 8,
								columnNumber: 3
							}
						},
						__jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
							__self: undefined,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 9,
								columnNumber: 4
							}
						}),
						__jsx(
							"p",
							{
								className: css({
									fontSize: "32px"
								}),
								__self: undefined,
								__source: {
									fileName: _jsxFileName,
									lineNumber: 10,
									columnNumber: 4
								}
							},
							"Styled by hook"
						)
					);
				};

				/* harmony default export */ __webpack_exports__["default"] = Index;

				/***/
			},

		/***/ "./src/routes.js":
			/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony default export */ __webpack_exports__["default"] = {
					index: "/",
					login: "/login",
					signup: "/signup",
					tos: "/terms-of-service",
					privacyPolicy: "/privacy-policy",
					cookiePolicy: "/cookie-policy",
					settings: {
						profile: "/settings/profile",
						paymentMethods: "/settings/payment-methods",
						notifications: "/settings/notifications"
					},
					// All API related endpoints
					api: {
						auth: {
							logout: "/api/auth/logout",
							passwordless: {
								login: "/api/auth/passwordless/login",
								signup: "/api/auth/passwordless/signup",
								verify: "/api/auth/passwordless/verify"
							}
						}
					}
				};

				/***/
			},

		/***/ 3:
			/*!***********************************!*\
  !*** multi ./src/pages/index.jsx ***!
  \***********************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				module.exports = __webpack_require__(
					/*! /Users/ryansoury/dev/wagecall/packages/wagecall/src/pages/index.jsx */ "./src/pages/index.jsx"
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

		/***/ "baseui/button":
			/*!********************************!*\
  !*** external "baseui/button" ***!
  \********************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("baseui/button");

				/***/
			},

		/***/ "baseui/drawer":
			/*!********************************!*\
  !*** external "baseui/drawer" ***!
  \********************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("baseui/drawer");

				/***/
			},

		/***/ "baseui/header-navigation":
			/*!*******************************************!*\
  !*** external "baseui/header-navigation" ***!
  \*******************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("baseui/header-navigation");

				/***/
			},

		/***/ "baseui/icon/menu":
			/*!***********************************!*\
  !*** external "baseui/icon/menu" ***!
  \***********************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("baseui/icon/menu");

				/***/
			},

		/***/ "is-empty":
			/*!***************************!*\
  !*** external "is-empty" ***!
  \***************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("is-empty");

				/***/
			},

		/***/ "prop-types":
			/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("prop-types");

				/***/
			},

		/***/ "prop-types-exact":
			/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("prop-types-exact");

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

		/***/ "react-feather":
			/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("react-feather");

				/***/
			},

		/***/ "react-loading-skeleton":
			/*!*****************************************!*\
  !*** external "react-loading-skeleton" ***!
  \*****************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("react-loading-skeleton");

				/***/
			},

		/***/ url:
			/*!**********************!*\
  !*** external "url" ***!
  \**********************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = require("url");

				/***/
			}

		/******/
	}
);
//# sourceMappingURL=index.js.map

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["static/development/pages/_app.js"],
	{
		/***/ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
			/*!**************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _assertThisInitialized(self) {
					if (self === void 0) {
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					}

					return self;
				}

				module.exports = _assertThisInitialized;

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/classCallCheck.js":
			/*!*******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*******************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				module.exports = _classCallCheck;

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/createClass.js":
			/*!****************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/createClass.js ***!
  \****************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				function _createClass(Constructor, protoProps, staticProps) {
					if (protoProps) _defineProperties(Constructor.prototype, protoProps);
					if (staticProps) _defineProperties(Constructor, staticProps);
					return Constructor;
				}

				module.exports = _createClass;

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
			/*!******************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \******************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return _assertThisInitialized;
					}
				);
				function _assertThisInitialized(self) {
					if (self === void 0) {
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					}

					return self;
				}

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
			/*!***********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \***********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return _classCallCheck;
					}
				);
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/esm/createClass.js":
			/*!********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return _createClass;
					}
				);
				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				function _createClass(Constructor, protoProps, staticProps) {
					if (protoProps) _defineProperties(Constructor.prototype, protoProps);
					if (staticProps) _defineProperties(Constructor, staticProps);
					return Constructor;
				}

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
			/*!***********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \***********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return _defineProperty;
					}
				);
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

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/esm/extends.js":
			/*!****************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \****************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return _extends;
					}
				);
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

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
			/*!***********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \***********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return _getPrototypeOf;
					}
				);
				function _getPrototypeOf(o) {
					_getPrototypeOf = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function _getPrototypeOf(o) {
								return o.__proto__ || Object.getPrototypeOf(o);
						  };
					return _getPrototypeOf(o);
				}

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/esm/inherits.js":
			/*!*****************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*****************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return _inherits;
					}
				);
				/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js"
				);

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					}

					subClass.prototype = Object.create(
						superClass && superClass.prototype,
						{
							constructor: {
								value: subClass,
								writable: true,
								configurable: true
							}
						}
					);
					if (superClass)
						Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(
							subClass,
							superClass
						);
				}

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
			/*!**********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \**********************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return _possibleConstructorReturn;
					}
				);
				/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../../helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js"
				);
				/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
				);

				function _possibleConstructorReturn(self, call) {
					if (
						call &&
						(Object(
							_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"]
						)(call) === "object" ||
							typeof call === "function")
					) {
						return call;
					}

					return Object(
						_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"]
					)(self);
				}

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
			/*!***********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \***********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return _setPrototypeOf;
					}
				);
				function _setPrototypeOf(o, p) {
					_setPrototypeOf =
						Object.setPrototypeOf ||
						function _setPrototypeOf(o, p) {
							o.__proto__ = p;
							return o;
						};

					return _setPrototypeOf(o, p);
				}

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/esm/typeof.js":
			/*!***************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return _typeof;
					}
				);
				function _typeof(obj) {
					"@babel/helpers - typeof";

					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}

					return _typeof(obj);
				}

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
			/*!************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/extends.js ***!
  \************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _extends() {
					module.exports = _extends =
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

				module.exports = _extends;

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
			/*!*******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*******************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _getPrototypeOf(o) {
					module.exports = _getPrototypeOf = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function _getPrototypeOf(o) {
								return o.__proto__ || Object.getPrototypeOf(o);
						  };
					return _getPrototypeOf(o);
				}

				module.exports = _getPrototypeOf;

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/inherits.js":
			/*!*************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/inherits.js ***!
  \*************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var setPrototypeOf = __webpack_require__(
					/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js"
				);

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					}

					subClass.prototype = Object.create(
						superClass && superClass.prototype,
						{
							constructor: {
								value: subClass,
								writable: true,
								configurable: true
							}
						}
					);
					if (superClass) setPrototypeOf(subClass, superClass);
				}

				module.exports = _inherits;

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
			/*!**************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************/
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

		/***/ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
			/*!***************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var _typeof = __webpack_require__(
					/*! ../helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js"
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

		/***/ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
			/*!******************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \******************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var _typeof = __webpack_require__(
					/*! ../helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js"
				);

				var assertThisInitialized = __webpack_require__(
					/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"
				);

				function _possibleConstructorReturn(self, call) {
					if (
						call &&
						(_typeof(call) === "object" || typeof call === "function")
					) {
						return call;
					}

					return assertThisInitialized(self);
				}

				module.exports = _possibleConstructorReturn;

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
			/*!*******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*******************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _setPrototypeOf(o, p) {
					module.exports = _setPrototypeOf =
						Object.setPrototypeOf ||
						function _setPrototypeOf(o, p) {
							o.__proto__ = p;
							return o;
						};

					return _setPrototypeOf(o, p);
				}

				module.exports = _setPrototypeOf;

				/***/
			},

		/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
			/*!***********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/@babel/runtime/helpers/typeof.js ***!
  \***********************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _typeof(obj) {
					"@babel/helpers - typeof";

					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						module.exports = _typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						module.exports = _typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}

					return _typeof(obj);
				}

				module.exports = _typeof;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/accordion/locale.js":
			/*!*********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/accordion/locale.js ***!
  \*********************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					collapse: "Collapse",
					expand: "Expand"
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/breadcrumbs/locale.js":
			/*!***********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/breadcrumbs/locale.js ***!
  \***********************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					ariaLabel: "Breadcrumbs navigation"
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/button-group/locale.js":
			/*!************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/button-group/locale.js ***!
  \************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					ariaLabel: "button group"
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/data-table/locale.js":
			/*!**********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/data-table/locale.js ***!
  \**********************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					emptyState:
						"No rows match the filter criteria defined. Please remove one or more filters to view more data.",
					loadingState: "Loading Rows."
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/datepicker/locale.js":
			/*!**********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/datepicker/locale.js ***!
  \**********************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					ariaLabel: "Select a date.",
					ariaLabelRange: "Select a date range.",
					ariaLabelCalendar: "Calendar.",
					ariaRoleDescriptionCalendarMonth: "Calendar month",
					previousMonth: "Previous month.",
					nextMonth: "Next month.",
					pastWeek: "Past Week",
					pastMonth: "Past Month",
					pastThreeMonths: "Past 3 Months",
					pastSixMonths: "Past 6 Months",
					pastYear: "Past Year",
					pastTwoYears: "Past 2 Years",
					screenReaderMessageInput:
						"Press the down arrow key to interact with the calendar and select a date. Press the escape button to close the calendar.",
					selectedDate: "Selected date is ${date}.",
					selectedDateRange:
						"Selected date range is from ${startDate} to ${endDate}.",
					selectSecondDatePrompt: "Select the second date.",
					quickSelectLabel: "Choose a date range",
					quickSelectAriaLabel: "Choose a date range",
					quickSelectPlaceholder: "None",
					timeSelectEndLabel: "End time",
					timeSelectStartLabel: "Start time",
					timePickerAriaLabel12Hour: "Select a time, 12-hour format.",
					timePickerAriaLabel24Hour: "Select a time, 24-hour format.",
					timezonePickerAriaLabel: "Select a timezone.",
					selectedStartDateLabel: "Selected start date.",
					selectedEndDateLabel: "Selected end date.",
					dateNotAvailableLabel: "Not available.",
					dateAvailableLabel: "It's available.",
					selectedLabel: "Selected.",
					chooseLabel: "Choose"
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/drawer/locale.js":
			/*!******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/drawer/locale.js ***!
  \******************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					close: "Close"
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/file-uploader/locale.js":
			/*!*************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/file-uploader/locale.js ***!
  \*************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					dropFilesToUpload: "Drop files here to upload",
					or: "or",
					browseFiles: "Browse files",
					retry: "Retry Upload",
					cancel: "Cancel"
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/helpers/base-provider.js":
			/*!**************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/helpers/base-provider.js ***!
  \**************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var _layer_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../layer/index.js */ "../../node_modules/baseui/esm/layer/index.js"
				);
				/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../styles/index.js */ "../../node_modules/baseui/esm/styles/index.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var BaseProvider = function BaseProvider(props) {
					var children = props.children,
						overrides = props.overrides,
						theme = props.theme,
						zIndex = props.zIndex;
					return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
						_layer_index_js__WEBPACK_IMPORTED_MODULE_1__["LayersManager"],
						{
							zIndex: zIndex,
							overrides: overrides
						},
						react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
							_styles_index_js__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"],
							{
								theme: theme
							},
							children
						)
					);
				};

				/* harmony default export */ __webpack_exports__[
					"default"
				] = BaseProvider;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/helpers/overrides.js":
			/*!**********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/helpers/overrides.js ***!
  \**********************************************************************************/
			/*! exports provided: getOverride, getOverrideProps, toObjectOverride, getOverrides, mergeOverrides, mergeOverride, mergeConfigurationOverrides */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"getOverride",
					function () {
						return getOverride;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"getOverrideProps",
					function () {
						return getOverrideProps;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"toObjectOverride",
					function () {
						return toObjectOverride;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"getOverrides",
					function () {
						return getOverrides;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"mergeOverrides",
					function () {
						return mergeOverrides;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"mergeOverride",
					function () {
						return mergeOverride;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"mergeConfigurationOverrides",
					function () {
						return mergeConfigurationOverrides;
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! react-is */ "../../node_modules/react-is/index.js"
				);
				/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					react_is__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var _utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../utils/deep-merge.js */ "../../node_modules/baseui/esm/utils/deep-merge.js"
				);
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

				function _typeof(obj) {
					"@babel/helpers - typeof";
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof(obj);
				}

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/**
				 * Given an override argument, returns the component implementation override if it exists
				 */
				// eslint-disable-next-line flowtype/no-weak-types
				function getOverride(override) {
					if (
						Object(react_is__WEBPACK_IMPORTED_MODULE_1__["isValidElementType"])(
							override
						)
					) {
						return override;
					} // Check if override is OverrideObjectT

					if (override && _typeof(override) === "object") {
						// Remove this 'any' once this flow issue is fixed:
						// https://github.com/facebook/flow/issues/6666
						// eslint-disable-next-line flowtype/no-weak-types
						return override.component;
					} // null/undefined

					return override;
				}
				/**
				 * Given an override argument, returns the override props that should be passed
				 * to the component when rendering it.
				 */

				function getOverrideProps(override) {
					if (override && _typeof(override) === "object") {
						if (_typeof(override.props) === "object") {
							return _objectSpread({}, override.props, {
								$style: override.style
							});
						} else {
							return {
								$style: override.style
							};
						}
					}

					return {};
				}
				/**
				 * Coerces an override argument into an override object
				 * (sometimes it is just an override component)
				 */

				function toObjectOverride(override) {
					if (
						Object(react_is__WEBPACK_IMPORTED_MODULE_1__["isValidElementType"])(
							override
						)
					) {
						return {
							// eslint-disable-next-line flowtype/no-weak-types
							component: override
						};
					} // Flow can't figure out that typeof 'function' above will
					// catch React.StatelessFunctionalComponent
					// (probably related to https://github.com/facebook/flow/issues/6666)
					// eslint-disable-next-line flowtype/no-weak-types

					return override || {};
				}
				/**
				 * Get a convenient override array that will always have [component, props]
				 */

				/* eslint-disable flowtype/no-weak-types */

				function getOverrides(override, defaultComponent) {
					var Component = getOverride(override) || defaultComponent;

					if (
						override &&
						_typeof(override) === "object" &&
						typeof override.props === "function"
					) {
						// TODO(v10)
						if (true) {
							console.warn(
								"baseui:Overrides Props as a function will be removed in the next major version."
							);
						}

						var DynamicOverride = react__WEBPACK_IMPORTED_MODULE_0__[
							"forwardRef"
						](function (props, ref) {
							var mappedProps = override.props(props);
							var nextProps = getOverrideProps(
								_objectSpread({}, override, {
									props: mappedProps
								})
							);
							return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
								Component,
								_extends(
									{
										ref: ref
									},
									nextProps
								)
							);
						});
						DynamicOverride.displayName = Component.displayName;
						return [DynamicOverride, {}];
					}

					var props = getOverrideProps(override);
					return [Component, props];
				}
				/* eslint-enable flowtype/no-weak-types */

				/**
				 * Merges two overrides objects – this is useful if you want to inject your own
				 * overrides into a child component, but also accept further overrides from
				 * from upstream. See `mergeOverride` below.
				 */

				function mergeOverrides() {
					var target =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: {};
					var source =
						arguments.length > 1 && arguments[1] !== undefined
							? arguments[1]
							: {};
					var merged = Object.assign({}, target, source);
					var allIdentifiers = Object.keys(merged); // const allIdentifiers = Object.keys({...target, ...source});

					return allIdentifiers.reduce(function (acc, name) {
						acc[name] = mergeOverride(
							toObjectOverride(target[name]),
							toObjectOverride(source[name])
						);
						return acc;
					}, {});
				}
				/**
				 * Merges two override objects using the following behavior:
				 * - Component implementation from the source (parent) replaces target
				 * - Props and styles are both deep merged
				 */

				function mergeOverride(target, source) {
					// Shallow merge should handle `component`
					var merged = _objectSpread({}, target, {}, source);

					if (target.props && source.props) {
						merged.props = mergeConfigurationOverrides(
							target.props,
							source.props
						);
					}

					if (target.style && source.style) {
						merged.style = mergeConfigurationOverrides(
							target.style,
							source.style
						);
					}

					return merged;
				}
				/**
				 * Since style or props overrides can be an object *or* a function, we need to handle
				 * the case that one of them is a function. We do this by returning a new
				 * function that deep merges the result of each style override
				 */

				function mergeConfigurationOverrides(target, source) {
					// Simple case of both objects
					if (_typeof(target) === "object" && _typeof(source) === "object") {
						return Object(
							_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_2__["default"]
						)({}, target, source);
					} // At least one is a function, return a new composite function

					return function () {
						return Object(
							_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_2__["default"]
						)(
							{},
							typeof target === "function"
								? target.apply(void 0, arguments)
								: target,
							typeof source === "function"
								? source.apply(void 0, arguments)
								: source
						);
					};
				}

				/***/
			},

		/***/ "../../node_modules/baseui/esm/helpers/responsive-helpers.js":
			/*!*******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/helpers/responsive-helpers.js ***!
  \*******************************************************************************************/
			/*! exports provided: getMediaQuery, getMediaQueries */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"getMediaQuery",
					function () {
						return getMediaQuery;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"getMediaQueries",
					function () {
						return getMediaQueries;
					}
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/**
				 * Helper function that generates media queries based on breakpoint, e.g.
				 * getMediaQuery(720) => '@media screen and (min-width: 720px)'
				 */
				var getMediaQuery = function getMediaQuery(breakpoint) {
					return "@media screen and (min-width: ".concat(breakpoint, "px)");
				};
				var getMediaQueries = function getMediaQueries(breakpoints) {
					return Object.keys(breakpoints)
						.map(function (key) {
							return breakpoints[key];
						})
						.sort(function (a, b) {
							return a - b;
						})
						.map(getMediaQuery);
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/icon/delete.js":
			/*!****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/icon/delete.js ***!
  \****************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../styles/index.js */ "../../node_modules/baseui/esm/styles/index.js"
				);
				/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../helpers/overrides.js */ "../../node_modules/baseui/esm/helpers/overrides.js"
				);
				/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./icon.js */ "../../node_modules/baseui/esm/icon/icon.js"
				);
				/* harmony import */ var _omit_dollar_prefixed_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ./omit-dollar-prefixed-keys.js */ "../../node_modules/baseui/esm/icon/omit-dollar-prefixed-keys.js"
				);
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

				function _objectWithoutProperties(source, excluded) {
					if (source == null) return {};
					var target = _objectWithoutPropertiesLoose(source, excluded);
					var key, i;
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
						for (i = 0; i < sourceSymbolKeys.length; i++) {
							key = sourceSymbolKeys[i];
							if (excluded.indexOf(key) >= 0) continue;
							if (!Object.prototype.propertyIsEnumerable.call(source, key))
								continue;
							target[key] = source[key];
						}
					}
					return target;
				}

				function _objectWithoutPropertiesLoose(source, excluded) {
					if (source == null) return {};
					var target = {};
					var sourceKeys = Object.keys(source);
					var key, i;
					for (i = 0; i < sourceKeys.length; i++) {
						key = sourceKeys[i];
						if (excluded.indexOf(key) >= 0) continue;
						target[key] = source[key];
					}
					return target;
				}

				function _slicedToArray(arr, i) {
					return (
						_arrayWithHoles(arr) ||
						_iterableToArrayLimit(arr, i) ||
						_nonIterableRest()
					);
				}

				function _nonIterableRest() {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance"
					);
				}

				function _iterableToArrayLimit(arr, i) {
					if (
						!(
							Symbol.iterator in Object(arr) ||
							Object.prototype.toString.call(arr) === "[object Arguments]"
						)
					) {
						return;
					}
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = undefined;
					try {
						for (
							var _i = arr[Symbol.iterator](), _s;
							!(_n = (_s = _i.next()).done);
							_n = true
						) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}

				function _arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				// BASEUI-GENERATED-REACT-ICON
				// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md

				function Delete(props, ref) {
					var _useStyletron = Object(
							_styles_index_js__WEBPACK_IMPORTED_MODULE_1__["useStyletron"]
						)(),
						_useStyletron2 = _slicedToArray(_useStyletron, 2),
						theme = _useStyletron2[1];

					var _props$overrides = props.overrides,
						overrides = _props$overrides === void 0 ? {} : _props$overrides,
						restProps = _objectWithoutProperties(props, ["overrides"]);

					var SvgOverride = Object(
						_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_2__["mergeOverride"]
					)(
						// Icons from theme really targets the SVG override in the underlying Icon component, but
						// have props typed with IconPropsT. Provided the missing props inline below here.
						{
							component:
								theme.icons && theme.icons.Delete ? theme.icons.Delete : null,
							props: _objectSpread(
								{
									title: "Delete",
									viewBox: "0 0 24 24"
								},
								Object(
									_omit_dollar_prefixed_keys_js__WEBPACK_IMPORTED_MODULE_4__[
										"default"
									]
								)(restProps)
							)
						},
						overrides && overrides.Svg
							? Object(
									_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_2__[
										"toObjectOverride"
									]
							  )(overrides.Svg)
							: {}
					);
					return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
						_icon_js__WEBPACK_IMPORTED_MODULE_3__["default"],
						_extends(
							{
								title: "Delete",
								viewBox: "0 0 24 24",
								ref: ref,
								overrides: {
									Svg: SvgOverride
								}
							},
							restProps
						),
						react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
							fillRule: "evenodd",
							clipRule: "evenodd",
							d:
								"M7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289Z"
						})
					);
				}

				/* harmony default export */ __webpack_exports__[
					"default"
				] = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](Delete);

				/***/
			},

		/***/ "../../node_modules/baseui/esm/icon/icon.js":
			/*!**************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/icon/icon.js ***!
  \**************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../helpers/overrides.js */ "../../node_modules/baseui/esm/helpers/overrides.js"
				);
				/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./styled-components.js */ "../../node_modules/baseui/esm/icon/styled-components.js"
				);
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

				function _slicedToArray(arr, i) {
					return (
						_arrayWithHoles(arr) ||
						_iterableToArrayLimit(arr, i) ||
						_nonIterableRest()
					);
				}

				function _nonIterableRest() {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance"
					);
				}

				function _iterableToArrayLimit(arr, i) {
					if (
						!(
							Symbol.iterator in Object(arr) ||
							Object.prototype.toString.call(arr) === "[object Arguments]"
						)
					) {
						return;
					}
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = undefined;
					try {
						for (
							var _i = arr[Symbol.iterator](), _s;
							!(_n = (_s = _i.next()).done);
							_n = true
						) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}

				function _arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}

				function _objectWithoutProperties(source, excluded) {
					if (source == null) return {};
					var target = _objectWithoutPropertiesLoose(source, excluded);
					var key, i;
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
						for (i = 0; i < sourceSymbolKeys.length; i++) {
							key = sourceSymbolKeys[i];
							if (excluded.indexOf(key) >= 0) continue;
							if (!Object.prototype.propertyIsEnumerable.call(source, key))
								continue;
							target[key] = source[key];
						}
					}
					return target;
				}

				function _objectWithoutPropertiesLoose(source, excluded) {
					if (source == null) return {};
					var target = {};
					var sourceKeys = Object.keys(source);
					var key, i;
					for (i = 0; i < sourceKeys.length; i++) {
						key = sourceKeys[i];
						if (excluded.indexOf(key) >= 0) continue;
						target[key] = source[key];
					}
					return target;
				}

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				function Icon(props, ref) {
					var children = props.children,
						title = props.title,
						_props$overrides = props.overrides,
						overrides = _props$overrides === void 0 ? {} : _props$overrides,
						size = props.size,
						color = props.color,
						restProps = _objectWithoutProperties(props, [
							"children",
							"title",
							"overrides",
							"size",
							"color"
						]);

					var _getOverrides = Object(
							_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__["getOverrides"]
						)(
							overrides.Svg,
							_styled_components_js__WEBPACK_IMPORTED_MODULE_2__["Svg"]
						),
						_getOverrides2 = _slicedToArray(_getOverrides, 2),
						Svg = _getOverrides2[0],
						overrideProps = _getOverrides2[1];

					var sharedProps = {
						$size: size,
						$color: color
					};
					return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
						Svg,
						_extends(
							{
								"data-baseweb": "icon",
								ref: ref
							},
							restProps,
							sharedProps,
							overrideProps
						),
						title
							? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
									"title",
									null,
									title
							  )
							: null,
						children
					);
				}

				/* harmony default export */ __webpack_exports__[
					"default"
				] = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](Icon);

				/***/
			},

		/***/ "../../node_modules/baseui/esm/icon/omit-dollar-prefixed-keys.js":
			/*!***********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/icon/omit-dollar-prefixed-keys.js ***!
  \***********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return omitDollarPrefixedKeys;
					}
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				// eslint-disable-next-line flowtype/no-weak-types
				function omitDollarPrefixedKeys(source) {
					var result = {};

					for (var key in source) {
						if (key[0] !== "$") {
							result[key] = source[key];
						}
					}

					return result;
				}

				/***/
			},

		/***/ "../../node_modules/baseui/esm/icon/styled-components.js":
			/*!***************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/icon/styled-components.js ***!
  \***************************************************************************************/
			/*! exports provided: getSvgStyles, Svg */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"getSvgStyles",
					function () {
						return getSvgStyles;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"Svg",
					function () {
						return Svg;
					}
				);
				/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../styles/index.js */ "../../node_modules/baseui/esm/styles/index.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				function getSvgStyles(_ref) {
					var $theme = _ref.$theme,
						$size = _ref.$size,
						$color = _ref.$color;

					if ($size) {
						if ($theme.sizing[$size]) {
							$size = $theme.sizing[$size];
						} else if (typeof $size === "number") {
							$size = "".concat($size, "px");
						}
					} else {
						$size = $theme.sizing.scale600;
					}

					if ($color && $theme.colors[$color]) {
						$color = $theme.colors[$color];
					}

					return {
						display: "inline-block",
						fill: $color || "currentColor",
						color: $color || "currentColor",
						height: $size,
						width: $size
					};
				}
				var Svg = Object(
					_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"]
				)("svg", getSvgStyles);
				Svg.displayName = "Svg";

				/***/
			},

		/***/ "../../node_modules/baseui/esm/index.js":
			/*!**********************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/index.js ***!
  \**********************************************************************/
			/*! exports provided: styled, withStyle, withWrapper, useStyletron, createThemedStyled, createThemedWithStyle, createThemedUseStyletron, ThemeProvider, ThemeConsumer, createTheme, createDarkTheme, createLightTheme, lightThemePrimitives, darkThemePrimitives, darkThemeOverrides, DarkTheme, DarkThemeMove, LightTheme, LightThemeMove, LocaleProvider, BaseProvider, mergeOverrides */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./styles/index.js */ "../../node_modules/baseui/esm/styles/index.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"styled",
					function () {
						return _styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"withStyle",
					function () {
						return _styles_index_js__WEBPACK_IMPORTED_MODULE_0__["withStyle"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"withWrapper",
					function () {
						return _styles_index_js__WEBPACK_IMPORTED_MODULE_0__["withWrapper"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"useStyletron",
					function () {
						return _styles_index_js__WEBPACK_IMPORTED_MODULE_0__[
							"useStyletron"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createThemedStyled",
					function () {
						return _styles_index_js__WEBPACK_IMPORTED_MODULE_0__[
							"createThemedStyled"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createThemedWithStyle",
					function () {
						return _styles_index_js__WEBPACK_IMPORTED_MODULE_0__[
							"createThemedWithStyle"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createThemedUseStyletron",
					function () {
						return _styles_index_js__WEBPACK_IMPORTED_MODULE_0__[
							"createThemedUseStyletron"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"ThemeProvider",
					function () {
						return _styles_index_js__WEBPACK_IMPORTED_MODULE_0__[
							"ThemeProvider"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"ThemeConsumer",
					function () {
						return _styles_index_js__WEBPACK_IMPORTED_MODULE_0__[
							"ThemeConsumer"
						];
					}
				);

				/* harmony import */ var _themes_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./themes/index.js */ "../../node_modules/baseui/esm/themes/index.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createTheme",
					function () {
						return _themes_index_js__WEBPACK_IMPORTED_MODULE_1__["createTheme"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createDarkTheme",
					function () {
						return _themes_index_js__WEBPACK_IMPORTED_MODULE_1__[
							"createDarkTheme"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createLightTheme",
					function () {
						return _themes_index_js__WEBPACK_IMPORTED_MODULE_1__[
							"createLightTheme"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"lightThemePrimitives",
					function () {
						return _themes_index_js__WEBPACK_IMPORTED_MODULE_1__[
							"lightThemePrimitives"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"darkThemePrimitives",
					function () {
						return _themes_index_js__WEBPACK_IMPORTED_MODULE_1__[
							"darkThemePrimitives"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"darkThemeOverrides",
					function () {
						return _themes_index_js__WEBPACK_IMPORTED_MODULE_1__[
							"darkThemeOverrides"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"DarkTheme",
					function () {
						return _themes_index_js__WEBPACK_IMPORTED_MODULE_1__["DarkTheme"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"DarkThemeMove",
					function () {
						return _themes_index_js__WEBPACK_IMPORTED_MODULE_1__[
							"DarkThemeMove"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"LightTheme",
					function () {
						return _themes_index_js__WEBPACK_IMPORTED_MODULE_1__["LightTheme"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"LightThemeMove",
					function () {
						return _themes_index_js__WEBPACK_IMPORTED_MODULE_1__[
							"LightThemeMove"
						];
					}
				);

				/* harmony import */ var _locale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./locale/index.js */ "../../node_modules/baseui/esm/locale/index.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"LocaleProvider",
					function () {
						return _locale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
					}
				);

				/* harmony import */ var _helpers_base_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./helpers/base-provider.js */ "../../node_modules/baseui/esm/helpers/base-provider.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"BaseProvider",
					function () {
						return _helpers_base_provider_js__WEBPACK_IMPORTED_MODULE_3__[
							"default"
						];
					}
				);

				/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ./helpers/overrides.js */ "../../node_modules/baseui/esm/helpers/overrides.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"mergeOverrides",
					function () {
						return _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_4__[
							"mergeOverrides"
						];
					}
				);

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/***/
			},

		/***/ "../../node_modules/baseui/esm/layer/constants.js":
			/*!********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/layer/constants.js ***!
  \********************************************************************************/
			/*! exports provided: TETHER_PLACEMENT */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"TETHER_PLACEMENT",
					function () {
						return TETHER_PLACEMENT;
					}
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var TETHER_PLACEMENT = {
					auto: "auto",
					topLeft: "topLeft",
					top: "top",
					topRight: "topRight",
					rightTop: "rightTop",
					right: "right",
					rightBottom: "rightBottom",
					bottomRight: "bottomRight",
					bottom: "bottom",
					bottomLeft: "bottomLeft",
					leftBottom: "leftBottom",
					left: "left",
					leftTop: "leftTop"
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/layer/index.js":
			/*!****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/layer/index.js ***!
  \****************************************************************************/
			/*! exports provided: LayersManager, Layer, TetherBehavior, TETHER_PLACEMENT */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _layers_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./layers-manager.js */ "../../node_modules/baseui/esm/layer/layers-manager.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"LayersManager",
					function () {
						return _layers_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"];
					}
				);

				/* harmony import */ var _layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./layer.js */ "../../node_modules/baseui/esm/layer/layer.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"Layer",
					function () {
						return _layer_js__WEBPACK_IMPORTED_MODULE_1__["default"];
					}
				);

				/* harmony import */ var _tether_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./tether.js */ "../../node_modules/baseui/esm/layer/tether.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"TetherBehavior",
					function () {
						return _tether_js__WEBPACK_IMPORTED_MODULE_2__["default"];
					}
				);

				/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./constants.js */ "../../node_modules/baseui/esm/layer/constants.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"TETHER_PLACEMENT",
					function () {
						return _constants_js__WEBPACK_IMPORTED_MODULE_3__[
							"TETHER_PLACEMENT"
						];
					}
				);

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/***/
			},

		/***/ "../../node_modules/baseui/esm/layer/layer.js":
			/*!****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/layer/layer.js ***!
  \****************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return Layer;
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! react-dom */ "../../node_modules/react-dom/index.js"
				);
				/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					react_dom__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../styles/index.js */ "../../node_modules/baseui/esm/styles/index.js"
				);
				/* harmony import */ var _layers_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./layers-manager.js */ "../../node_modules/baseui/esm/layer/layers-manager.js"
				);
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

				function _typeof(obj) {
					"@babel/helpers - typeof";
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof(obj);
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				function _createClass(Constructor, protoProps, staticProps) {
					if (protoProps) _defineProperties(Constructor.prototype, protoProps);
					if (staticProps) _defineProperties(Constructor, staticProps);
					return Constructor;
				}

				function _possibleConstructorReturn(self, call) {
					if (
						call &&
						(_typeof(call) === "object" || typeof call === "function")
					) {
						return call;
					}
					return _assertThisInitialized(self);
				}

				function _getPrototypeOf(o) {
					_getPrototypeOf = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function _getPrototypeOf(o) {
								return o.__proto__ || Object.getPrototypeOf(o);
						  };
					return _getPrototypeOf(o);
				}

				function _assertThisInitialized(self) {
					if (self === void 0) {
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					}
					return self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					}
					subClass.prototype = Object.create(
						superClass && superClass.prototype,
						{
							constructor: {
								value: subClass,
								writable: true,
								configurable: true
							}
						}
					);
					if (superClass) _setPrototypeOf(subClass, superClass);
				}

				function _setPrototypeOf(o, p) {
					_setPrototypeOf =
						Object.setPrototypeOf ||
						function _setPrototypeOf(o, p) {
							o.__proto__ = p;
							return o;
						};
					return _setPrototypeOf(o, p);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/* global document */

				var Container = Object(
					_styles_index_js__WEBPACK_IMPORTED_MODULE_2__["styled"]
				)("div", function (_ref) {
					var $zIndex = _ref.$zIndex;
					return {
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						zIndex: $zIndex || null
					};
				});
				Container.displayName = "Container";

				var LayerComponent =
					/*#__PURE__*/
					(function (_React$Component) {
						_inherits(LayerComponent, _React$Component);

						function LayerComponent() {
							var _getPrototypeOf2;

							var _this;

							_classCallCheck(this, LayerComponent);

							for (
								var _len = arguments.length, args = new Array(_len), _key = 0;
								_key < _len;
								_key++
							) {
								args[_key] = arguments[_key];
							}

							_this = _possibleConstructorReturn(
								this,
								(_getPrototypeOf2 = _getPrototypeOf(LayerComponent)).call.apply(
									_getPrototypeOf2,
									[this].concat(args)
								)
							);

							_defineProperty(_assertThisInitialized(_this), "state", {
								container: null
							});

							_defineProperty(
								_assertThisInitialized(_this),
								"onEscape",
								function () {
									if (_this.props.onEscape) {
										_this.props.onEscape();
									}
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"onDocumentClick",
								function (event) {
									if (_this.props.onDocumentClick) {
										_this.props.onDocumentClick(event);
									}
								}
							);

							return _this;
						}

						_createClass(LayerComponent, [
							{
								key: "componentDidMount",
								value: function componentDidMount() {
									this.context.addEscapeHandler(this.onEscape);
									this.context.addDocClickHandler(this.onDocumentClick);
									var _this$props = this.props,
										onMount = _this$props.onMount,
										mountNode = _this$props.mountNode,
										layersManagerHost = _this$props.host;

									if (mountNode) {
										onMount && onMount();
										return;
									} // There was no LayersManager added if this.props.host === undefined.
									// Use document.body is the case no LayersManager is used.

									var hasLayersManager = layersManagerHost !== undefined;

									if (true) {
										if (!hasLayersManager) {
											console.warn(
												"`LayersManager` was not found. This occurs if you are attempting to use a component requiring `Layer` without using the `BaseProvider` at the root of your app. Please visit https://baseweb.design/components/base-provider/ for more information"
											);
										}
									}

									var host = hasLayersManager
										? layersManagerHost
										: document.body;

									if (host) {
										this.addContainer(host);
									}
								}
							},
							{
								key: "componentDidUpdate",
								value: function componentDidUpdate(prevProps) {
									var _this$props2 = this.props,
										host = _this$props2.host,
										mountNode = _this$props2.mountNode;

									if (mountNode) {
										return;
									}

									if (
										host &&
										host !== prevProps.host &&
										prevProps.host === null
									) {
										this.addContainer(host);
									}
								}
							},
							{
								key: "componentWillUnmount",
								value: function componentWillUnmount() {
									this.context.removeEscapeHandler(this.onEscape);
									this.context.removeDocClickHandler(this.onDocumentClick);

									if (this.props.onUnmount) {
										this.props.onUnmount();
									}

									var host = this.props.host;
									var container = this.state.container;

									if (host && container) {
										if (host.contains(container)) {
											host.removeChild(container);
										}
									}
								}
							},
							{
								key: "addContainer",
								value: function addContainer(host) {
									var _this$props3 = this.props,
										index = _this$props3.index,
										mountNode = _this$props3.mountNode,
										onMount = _this$props3.onMount; // Do nothing if mountNode is provided

									if (mountNode) {
										return;
									}

									if (host) {
										var container = host.ownerDocument.createElement("div"); // `host` is an DOM node, but not a React component

										var sibling =
											typeof index === "number" ? host.children[index] : null;
										sibling
											? host.insertBefore(container, sibling)
											: host.appendChild(container);
										this.setState(
											{
												container: container
											},
											function () {
												onMount && onMount();
											}
										);
									}
								}
							},
							{
								key: "render",
								value: function render() {
									var container = this.state.container;
									var _this$props4 = this.props,
										children = _this$props4.children,
										mountNode = _this$props4.mountNode,
										zIndex = _this$props4.zIndex; // Only adding an additional wrapper when a layer has z-index to be set

									var childrenToRender = zIndex
										? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
												Container,
												{
													$zIndex: zIndex
												},
												children
										  )
										: children;

									if (typeof document !== "undefined") {
										if (mountNode || container) {
											// $FlowFixMe
											return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(
												childrenToRender,
												mountNode || container
											);
										}

										return null;
									}

									return null;
								}
							}
						]);

						return LayerComponent;
					})(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

				_defineProperty(
					LayerComponent,
					"contextType",
					_layers_manager_js__WEBPACK_IMPORTED_MODULE_3__["LayersContext"]
				);

				function Layer(props) {
					return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
						_layers_manager_js__WEBPACK_IMPORTED_MODULE_3__["Consumer"],
						null,
						function (_ref2) {
							var host = _ref2.host,
								zIndex = _ref2.zIndex;
							return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
								LayerComponent,
								_extends({}, props, {
									host: host,
									zIndex: zIndex
								})
							);
						}
					);
				}

				/***/
			},

		/***/ "../../node_modules/baseui/esm/layer/layers-manager.js":
			/*!*************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/layer/layers-manager.js ***!
  \*************************************************************************************/
			/*! exports provided: LayersContext, Provider, Consumer, default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"LayersContext",
					function () {
						return LayersContext;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"Provider",
					function () {
						return Provider;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"Consumer",
					function () {
						return Consumer;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return LayersManager;
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../styles/index.js */ "../../node_modules/baseui/esm/styles/index.js"
				);
				/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../helpers/overrides.js */ "../../node_modules/baseui/esm/helpers/overrides.js"
				);
				/* harmony import */ var _utils_focusVisible_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ../utils/focusVisible.js */ "../../node_modules/baseui/esm/utils/focusVisible.js"
				);
				function _typeof(obj) {
					"@babel/helpers - typeof";
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof(obj);
				}

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

				function _slicedToArray(arr, i) {
					return (
						_arrayWithHoles(arr) ||
						_iterableToArrayLimit(arr, i) ||
						_nonIterableRest()
					);
				}

				function _nonIterableRest() {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance"
					);
				}

				function _iterableToArrayLimit(arr, i) {
					if (
						!(
							Symbol.iterator in Object(arr) ||
							Object.prototype.toString.call(arr) === "[object Arguments]"
						)
					) {
						return;
					}
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = undefined;
					try {
						for (
							var _i = arr[Symbol.iterator](), _s;
							!(_n = (_s = _i.next()).done);
							_n = true
						) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}

				function _arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}

				function _toConsumableArray(arr) {
					return (
						_arrayWithoutHoles(arr) ||
						_iterableToArray(arr) ||
						_nonIterableSpread()
					);
				}

				function _nonIterableSpread() {
					throw new TypeError(
						"Invalid attempt to spread non-iterable instance"
					);
				}

				function _iterableToArray(iter) {
					if (
						Symbol.iterator in Object(iter) ||
						Object.prototype.toString.call(iter) === "[object Arguments]"
					)
						return Array.from(iter);
				}

				function _arrayWithoutHoles(arr) {
					if (Array.isArray(arr)) {
						for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
							arr2[i] = arr[i];
						}
						return arr2;
					}
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				function _createClass(Constructor, protoProps, staticProps) {
					if (protoProps) _defineProperties(Constructor.prototype, protoProps);
					if (staticProps) _defineProperties(Constructor, staticProps);
					return Constructor;
				}

				function _possibleConstructorReturn(self, call) {
					if (
						call &&
						(_typeof(call) === "object" || typeof call === "function")
					) {
						return call;
					}
					return _assertThisInitialized(self);
				}

				function _getPrototypeOf(o) {
					_getPrototypeOf = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function _getPrototypeOf(o) {
								return o.__proto__ || Object.getPrototypeOf(o);
						  };
					return _getPrototypeOf(o);
				}

				function _assertThisInitialized(self) {
					if (self === void 0) {
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					}
					return self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					}
					subClass.prototype = Object.create(
						superClass && superClass.prototype,
						{
							constructor: {
								value: subClass,
								writable: true,
								configurable: true
							}
						}
					);
					if (superClass) _setPrototypeOf(subClass, superClass);
				}

				function _setPrototypeOf(o, p) {
					_setPrototypeOf =
						Object.setPrototypeOf ||
						function _setPrototypeOf(o, p) {
							o.__proto__ = p;
							return o;
						};
					return _setPrototypeOf(o, p);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var StyledAppContainer = Object(
					_styles_index_js__WEBPACK_IMPORTED_MODULE_1__["styled"]
				)("div", {});
				StyledAppContainer.displayName = "StyledAppContainer";
				var StyledLayersContainer = Object(
					_styles_index_js__WEBPACK_IMPORTED_MODULE_1__["styled"]
				)("div", {});
				StyledLayersContainer.displayName = "StyledLayersContainer";

				function defaultEventHandlerFn() {
					if (true) {
						console.warn(
							"`LayersManager` was not found. This occurs if you are attempting to use a component requiring `Layer` without using the `BaseProvider` at the root of your app. Please visit https://baseweb.design/components/base-provider/ for more information"
						);
					}
				}

				var LayersContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](
					{
						addEscapeHandler: defaultEventHandlerFn,
						removeEscapeHandler: defaultEventHandlerFn,
						addDocClickHandler: defaultEventHandlerFn,
						removeDocClickHandler: defaultEventHandlerFn,
						host: undefined,
						zIndex: undefined
					}
				);
				var Provider = LayersContext.Provider;
				var Consumer = LayersContext.Consumer;

				var LayersManager =
					/*#__PURE__*/
					(function (_React$Component) {
						_inherits(LayersManager, _React$Component);

						function LayersManager(props) {
							var _this;

							_classCallCheck(this, LayersManager);

							_this = _possibleConstructorReturn(
								this,
								_getPrototypeOf(LayersManager).call(this, props)
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"host",
								react__WEBPACK_IMPORTED_MODULE_0__["createRef"]()
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"containerRef",
								react__WEBPACK_IMPORTED_MODULE_0__["createRef"]()
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"onDocumentClick",
								function (event) {
									var docClickHandler =
										_this.state.docClickHandlers[
											_this.state.docClickHandlers.length - 1
										];

									if (docClickHandler) {
										docClickHandler(event);
									}
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"onKeyUp",
								function (event) {
									if (event.key === "Escape") {
										var escapeKeyHandler =
											_this.state.escapeKeyHandlers[
												_this.state.escapeKeyHandlers.length - 1
											];

										if (escapeKeyHandler) {
											escapeKeyHandler();
										}
									}
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"onAddEscapeHandler",
								function (escapeKeyHandler) {
									_this.setState(function (prev) {
										return {
											escapeKeyHandlers: [].concat(
												_toConsumableArray(prev.escapeKeyHandlers),
												[escapeKeyHandler]
											)
										};
									});
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"onRemoveEscapeHandler",
								function (escapeKeyHandler) {
									_this.setState(function (prev) {
										return {
											escapeKeyHandlers: prev.escapeKeyHandlers.filter(
												function (handler) {
													return handler !== escapeKeyHandler;
												}
											)
										};
									});
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"onAddDocClickHandler",
								function (docClickHandler) {
									_this.setState(function (prev) {
										return {
											docClickHandlers: [].concat(
												_toConsumableArray(prev.docClickHandlers),
												[docClickHandler]
											)
										};
									});
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"onRemoveDocClickHandler",
								function (docClickHandler) {
									_this.setState(function (prev) {
										return {
											docClickHandlers: prev.docClickHandlers.filter(function (
												handler
											) {
												return handler !== docClickHandler;
											})
										};
									});
								}
							);

							_this.state = {
								escapeKeyHandlers: [],
								docClickHandlers: []
							};
							return _this;
						}

						_createClass(LayersManager, [
							{
								key: "componentDidMount",
								value: function componentDidMount() {
									this.forceUpdate();
									Object(
										_utils_focusVisible_js__WEBPACK_IMPORTED_MODULE_3__[
											"initFocusVisible"
										]
									)(this.containerRef.current);

									if (typeof document !== "undefined") {
										document.addEventListener("keyup", this.onKeyUp); // using mousedown event so that callback runs before events on children inside of the layer

										document.addEventListener(
											"mousedown",
											this.onDocumentClick
										);
									}
								}
							},
							{
								key: "componentWillUnmount",
								value: function componentWillUnmount() {
									if (typeof document !== "undefined") {
										document.removeEventListener("keyup", this.onKeyUp);
										document.removeEventListener(
											"mousedown",
											this.onDocumentClick
										);
									}
								}
							},
							{
								key: "render",
								value: function render() {
									var _this2 = this;

									var _this$props$overrides = this.props.overrides,
										overrides =
											_this$props$overrides === void 0
												? {}
												: _this$props$overrides;

									var _getOverrides = Object(
											_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_2__[
												"getOverrides"
											]
										)(overrides.AppContainer, StyledAppContainer),
										_getOverrides2 = _slicedToArray(_getOverrides, 2),
										AppContainer = _getOverrides2[0],
										appContainerProps = _getOverrides2[1];

									var _getOverrides3 = Object(
											_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_2__[
												"getOverrides"
											]
										)(overrides.LayersContainer, StyledLayersContainer),
										_getOverrides4 = _slicedToArray(_getOverrides3, 2),
										LayersContainer = _getOverrides4[0],
										layersContainerProps = _getOverrides4[1];

									return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
										Consumer,
										null,
										function (_ref) {
											var host = _ref.host;

											if (true) {
												if (host !== undefined) {
													// eslint-disable-next-line no-console
													console.warn(
														"There is a LayersManager already exists in your application. It is not recommended to have more than one LayersManager in an application."
													);
												}
											}

											return react__WEBPACK_IMPORTED_MODULE_0__[
												"createElement"
											](
												Provider,
												{
													value: {
														host: host || _this2.host.current,
														zIndex: _this2.props.zIndex,
														addEscapeHandler: _this2.onAddEscapeHandler,
														removeEscapeHandler: _this2.onRemoveEscapeHandler,
														addDocClickHandler: _this2.onAddDocClickHandler,
														removeDocClickHandler:
															_this2.onRemoveDocClickHandler
													}
												},
												react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
													AppContainer,
													_extends({}, appContainerProps, {
														ref: _this2.containerRef
													}),
													_this2.props.children
												),
												react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
													LayersContainer,
													_extends({}, layersContainerProps, {
														ref: _this2.host
													})
												)
											);
										}
									);
								}
							}
						]);

						return LayersManager;
					})(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

				/***/
			},

		/***/ "../../node_modules/baseui/esm/layer/tether.js":
			/*!*****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/layer/tether.js ***!
  \*****************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! popper.js */ "../../node_modules/popper.js/dist/esm/popper.js"
				);
				/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./utils.js */ "../../node_modules/baseui/esm/layer/utils.js"
				);
				/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./constants.js */ "../../node_modules/baseui/esm/layer/constants.js"
				);
				function _typeof(obj) {
					"@babel/helpers - typeof";
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof(obj);
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

				function _objectWithoutProperties(source, excluded) {
					if (source == null) return {};
					var target = _objectWithoutPropertiesLoose(source, excluded);
					var key, i;
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
						for (i = 0; i < sourceSymbolKeys.length; i++) {
							key = sourceSymbolKeys[i];
							if (excluded.indexOf(key) >= 0) continue;
							if (!Object.prototype.propertyIsEnumerable.call(source, key))
								continue;
							target[key] = source[key];
						}
					}
					return target;
				}

				function _objectWithoutPropertiesLoose(source, excluded) {
					if (source == null) return {};
					var target = {};
					var sourceKeys = Object.keys(source);
					var key, i;
					for (i = 0; i < sourceKeys.length; i++) {
						key = sourceKeys[i];
						if (excluded.indexOf(key) >= 0) continue;
						target[key] = source[key];
					}
					return target;
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				function _createClass(Constructor, protoProps, staticProps) {
					if (protoProps) _defineProperties(Constructor.prototype, protoProps);
					if (staticProps) _defineProperties(Constructor, staticProps);
					return Constructor;
				}

				function _possibleConstructorReturn(self, call) {
					if (
						call &&
						(_typeof(call) === "object" || typeof call === "function")
					) {
						return call;
					}
					return _assertThisInitialized(self);
				}

				function _getPrototypeOf(o) {
					_getPrototypeOf = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function _getPrototypeOf(o) {
								return o.__proto__ || Object.getPrototypeOf(o);
						  };
					return _getPrototypeOf(o);
				}

				function _assertThisInitialized(self) {
					if (self === void 0) {
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					}
					return self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					}
					subClass.prototype = Object.create(
						superClass && superClass.prototype,
						{
							constructor: {
								value: subClass,
								writable: true,
								configurable: true
							}
						}
					);
					if (superClass) _setPrototypeOf(subClass, superClass);
				}

				function _setPrototypeOf(o, p) {
					_setPrototypeOf =
						Object.setPrototypeOf ||
						function _setPrototypeOf(o, p) {
							o.__proto__ = p;
							return o;
						};
					return _setPrototypeOf(o, p);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var Tether =
					/*#__PURE__*/
					(function (_React$Component) {
						_inherits(Tether, _React$Component);

						function Tether() {
							var _getPrototypeOf2;

							var _this;

							_classCallCheck(this, Tether);

							for (
								var _len = arguments.length, args = new Array(_len), _key = 0;
								_key < _len;
								_key++
							) {
								args[_key] = arguments[_key];
							}

							_this = _possibleConstructorReturn(
								this,
								(_getPrototypeOf2 = _getPrototypeOf(Tether)).call.apply(
									_getPrototypeOf2,
									[this].concat(args)
								)
							);

							_defineProperty(_assertThisInitialized(_this), "popper", void 0);

							_defineProperty(_assertThisInitialized(_this), "popperHeight", 0);

							_defineProperty(_assertThisInitialized(_this), "state", {
								isMounted: false
							});

							_defineProperty(
								_assertThisInitialized(_this),
								"onPopperUpdate",
								function (data) {
									var normalizedOffsets = {
										popper: Object(
											_utils_js__WEBPACK_IMPORTED_MODULE_2__[
												"parsePopperOffset"
											]
										)(data.offsets.popper),
										arrow: data.offsets.arrow
											? Object(
													_utils_js__WEBPACK_IMPORTED_MODULE_2__[
														"parsePopperOffset"
													]
											  )(data.offsets.arrow)
											: {
													top: 0,
													left: 0
											  }
									};

									_this.props.onPopperUpdate(normalizedOffsets, data);
								}
							);

							return _this;
						}

						_createClass(Tether, [
							{
								key: "componentDidMount",
								value: function componentDidMount() {
									this.setState({
										isMounted: true
									});
								}
							},
							{
								key: "componentDidUpdate",
								value: function componentDidUpdate(prevProps, prevState) {
									// Handles the case where popover content changes size and creates a gap between the anchor and
									// the popover. Popper.js only schedules updates on resize and scroll events. In the case of
									// the Select component, when options were filtered in the dropdown menu it creates a gap
									// between it and the input element.
									if (this.props.popperRef) {
										var _this$props$popperRef = this.props.popperRef.getBoundingClientRect(),
											height = _this$props$popperRef.height;

										if (this.popperHeight !== height) {
											this.popperHeight = height;
											this.popper && this.popper.scheduleUpdate();
										}

										if (this.state.isMounted !== prevState.isMounted) {
											if (!this.props.anchorRef) {
												if (true) {
													// eslint-disable-next-line no-console
													console.warn(
														"[baseui][TetherBehavior] ref has not been passed to the Popper's anchor element.\n              See how to pass the ref to an anchor element in the Popover example\n              http://baseui.design/components/popover#anchor-ref-handling-example"
													);
												}
											} else {
												this.initializePopper();
											}
										}
									}
								}
							},
							{
								key: "componentWillUnmount",
								value: function componentWillUnmount() {
									this.destroyPopover();
								}
							},
							{
								key: "initializePopper",
								value: function initializePopper() {
									var _this$props = this.props,
										placement = _this$props.placement,
										popperOptions = _this$props.popperOptions;

									var modifiers = popperOptions.modifiers,
										restOptions = _objectWithoutProperties(popperOptions, [
											"modifiers"
										]);

									if (!this.props.anchorRef || !this.props.popperRef) return;
									this.popper = new popper_js__WEBPACK_IMPORTED_MODULE_1__[
										"default"
									](
										this.props.anchorRef,
										this.props.popperRef,
										_objectSpread(
											{
												// Recommended placement (popper may ignore if it causes a viewport overflow, etc)
												placement: Object(
													_utils_js__WEBPACK_IMPORTED_MODULE_2__[
														"toPopperPlacement"
													]
												)(placement),
												modifiers: _objectSpread(
													{
														// Passing the arrow ref will measure the arrow when calculating styles
														arrow: {
															element: this.props.arrowRef,
															enabled: !!this.props.arrowRef
														},
														computeStyle: {
															// Make popper use top/left instead of transform translate, this is because
															// we use transform for animations and we dont want them to conflict
															gpuAcceleration: false
														},
														applyStyle: {
															// Disable default styling modifier, we'll apply styles on our own
															enabled: false
														},
														applyReactStyle: {
															enabled: true,
															fn: this.onPopperUpdate,
															order: 900
														},
														preventOverflow: {
															enabled: true
														}
													},
													modifiers
												)
											},
											restOptions
										)
									);
								}
							},
							{
								key: "destroyPopover",
								value: function destroyPopover() {
									if (this.popper) {
										this.popper.destroy();
										delete this.popper;
									}
								}
							},
							{
								key: "render",
								value: function render() {
									return this.props.children || null;
								}
							}
						]);

						return Tether;
					})(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

				_defineProperty(Tether, "defaultProps", {
					anchorRef: null,
					onPopperUpdate: function onPopperUpdate() {
						return null;
					},
					placement:
						_constants_js__WEBPACK_IMPORTED_MODULE_3__["TETHER_PLACEMENT"].auto,
					popperRef: null,
					popperOptions: {}
				});

				/* harmony default export */ __webpack_exports__["default"] = Tether;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/layer/utils.js":
			/*!****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/layer/utils.js ***!
  \****************************************************************************/
			/*! exports provided: toPopperPlacement, parsePopperOffset */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"toPopperPlacement",
					function () {
						return toPopperPlacement;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"parsePopperOffset",
					function () {
						return parsePopperOffset;
					}
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				function toPopperPlacement(placement) {
					return placement
						.replace(/(Top|Left)$/, "-start")
						.replace(/(Right|Bottom)$/, "-end");
				}
				/**
				 * Takes the offset passed from popper.js and normalizes it
				 */

				function parsePopperOffset(offset) {
					return {
						top: Math.floor(offset.top || 0),
						left: Math.floor(offset.left || 0)
					};
				}

				/***/
			},

		/***/ "../../node_modules/baseui/esm/locale/en_US.js":
			/*!*****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/locale/en_US.js ***!
  \*****************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _accordion_locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../accordion/locale.js */ "../../node_modules/baseui/esm/accordion/locale.js"
				);
				/* harmony import */ var _breadcrumbs_locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../breadcrumbs/locale.js */ "../../node_modules/baseui/esm/breadcrumbs/locale.js"
				);
				/* harmony import */ var _datepicker_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../datepicker/locale.js */ "../../node_modules/baseui/esm/datepicker/locale.js"
				);
				/* harmony import */ var _data_table_locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ../data-table/locale.js */ "../../node_modules/baseui/esm/data-table/locale.js"
				);
				/* harmony import */ var _button_group_locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ../button-group/locale.js */ "../../node_modules/baseui/esm/button-group/locale.js"
				);
				/* harmony import */ var _file_uploader_locale_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! ../file-uploader/locale.js */ "../../node_modules/baseui/esm/file-uploader/locale.js"
				);
				/* harmony import */ var _menu_locale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					/*! ../menu/locale.js */ "../../node_modules/baseui/esm/menu/locale.js"
				);
				/* harmony import */ var _modal_locale_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					/*! ../modal/locale.js */ "../../node_modules/baseui/esm/modal/locale.js"
				);
				/* harmony import */ var _drawer_locale_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					/*! ../drawer/locale.js */ "../../node_modules/baseui/esm/drawer/locale.js"
				);
				/* harmony import */ var _pagination_locale_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					/*! ../pagination/locale.js */ "../../node_modules/baseui/esm/pagination/locale.js"
				);
				/* harmony import */ var _select_locale_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					/*! ../select/locale.js */ "../../node_modules/baseui/esm/select/locale.js"
				);
				/* harmony import */ var _toast_locale_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					/*! ../toast/locale.js */ "../../node_modules/baseui/esm/toast/locale.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var en_US = {
					accordion:
						_accordion_locale_js__WEBPACK_IMPORTED_MODULE_0__["default"],
					breadcrumbs:
						_breadcrumbs_locale_js__WEBPACK_IMPORTED_MODULE_1__["default"],
					datepicker:
						_datepicker_locale_js__WEBPACK_IMPORTED_MODULE_2__["default"],
					datatable:
						_data_table_locale_js__WEBPACK_IMPORTED_MODULE_3__["default"],
					buttongroup:
						_button_group_locale_js__WEBPACK_IMPORTED_MODULE_4__["default"],
					fileuploader:
						_file_uploader_locale_js__WEBPACK_IMPORTED_MODULE_5__["default"],
					menu: _menu_locale_js__WEBPACK_IMPORTED_MODULE_6__["default"],
					modal: _modal_locale_js__WEBPACK_IMPORTED_MODULE_7__["default"],
					drawer: _drawer_locale_js__WEBPACK_IMPORTED_MODULE_8__["default"],
					pagination:
						_pagination_locale_js__WEBPACK_IMPORTED_MODULE_9__["default"],
					select: _select_locale_js__WEBPACK_IMPORTED_MODULE_10__["default"],
					toast: _toast_locale_js__WEBPACK_IMPORTED_MODULE_11__["default"]
				};
				/* harmony default export */ __webpack_exports__["default"] = en_US;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/locale/index.js":
			/*!*****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/locale/index.js ***!
  \*****************************************************************************/
			/*! exports provided: LocaleContext, default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"LocaleContext",
					function () {
						return LocaleContext;
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var just_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! just-extend */ "../../node_modules/just-extend/index.js"
				);
				/* harmony import */ var just_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					just_extend__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var _en_US_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./en_US.js */ "../../node_modules/baseui/esm/locale/en_US.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var LocaleContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](
					_en_US_js__WEBPACK_IMPORTED_MODULE_2__["default"]
				);

				var LocaleProvider = function LocaleProvider(props) {
					var locale = props.locale,
						children = props.children;

					if (true) {
						if (locale.datepicker && locale.datepicker.timePickerAriaLabel) {
							console.warn(
								"`timePickerAriaLabel` will be removed in v10 - please use timePickerAriaLabel12Hour and timePickerAriaLabel24Hour instead"
							);
						}
					}

					return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
						LocaleContext.Provider,
						{
							value: just_extend__WEBPACK_IMPORTED_MODULE_1___default()(
								{},
								_en_US_js__WEBPACK_IMPORTED_MODULE_2__["default"],
								locale
							)
						},
						children
					);
				};

				/* harmony default export */ __webpack_exports__[
					"default"
				] = LocaleProvider;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/menu/locale.js":
			/*!****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/menu/locale.js ***!
  \****************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					noResultsMsg: "No results",
					parentMenuItemAriaLabel:
						"You are currently at an item than opens a nested listbox. Press right arrow to enter that element and left arrow to return."
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/modal/locale.js":
			/*!*****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/modal/locale.js ***!
  \*****************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					close: "Close"
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/pagination/locale.js":
			/*!**********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/pagination/locale.js ***!
  \**********************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					prev: "Prev",
					next: "Next",
					preposition: "of"
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/select/locale.js":
			/*!******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/select/locale.js ***!
  \******************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					// Remove noResultsMsg prop in the next major version
					noResultsMsg: "No results found",
					placeholder: "Select...",
					create: "Create"
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/styles/index.js":
			/*!*****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/styles/index.js ***!
  \*****************************************************************************/
			/*! exports provided: createThemedStyled, createThemedWithStyle, createThemedUseStyletron, styled, withStyle, useStyletron, withWrapper, hexToRgb, expandBorderStyles, ThemeProvider, ThemeConsumer */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"ThemeConsumer",
					function () {
						return ThemeConsumer;
					}
				);
				/* harmony import */ var _theme_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./theme-provider.js */ "../../node_modules/baseui/esm/styles/theme-provider.js"
				);
				/* harmony import */ var _styled_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./styled.js */ "../../node_modules/baseui/esm/styles/styled.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createThemedStyled",
					function () {
						return _styled_js__WEBPACK_IMPORTED_MODULE_1__[
							"createThemedStyled"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createThemedWithStyle",
					function () {
						return _styled_js__WEBPACK_IMPORTED_MODULE_1__[
							"createThemedWithStyle"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createThemedUseStyletron",
					function () {
						return _styled_js__WEBPACK_IMPORTED_MODULE_1__[
							"createThemedUseStyletron"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"styled",
					function () {
						return _styled_js__WEBPACK_IMPORTED_MODULE_1__["styled"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"withStyle",
					function () {
						return _styled_js__WEBPACK_IMPORTED_MODULE_1__["withStyle"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"useStyletron",
					function () {
						return _styled_js__WEBPACK_IMPORTED_MODULE_1__["useStyletron"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"withWrapper",
					function () {
						return _styled_js__WEBPACK_IMPORTED_MODULE_1__["withWrapper"];
					}
				);

				/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./util.js */ "../../node_modules/baseui/esm/styles/util.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"hexToRgb",
					function () {
						return _util_js__WEBPACK_IMPORTED_MODULE_2__["hexToRgb"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"expandBorderStyles",
					function () {
						return _util_js__WEBPACK_IMPORTED_MODULE_2__["expandBorderStyles"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"ThemeProvider",
					function () {
						return _theme_provider_js__WEBPACK_IMPORTED_MODULE_0__["default"];
					}
				);

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var ThemeConsumer =
					_theme_provider_js__WEBPACK_IMPORTED_MODULE_0__["ThemeContext"]
						.Consumer;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/styles/styled.js":
			/*!******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/styles/styled.js ***!
  \******************************************************************************/
			/*! exports provided: createThemedStyled, styled, createThemedWithStyle, withStyle, createThemedUseStyletron, useStyletron, withWrapper */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"createThemedStyled",
					function () {
						return createThemedStyled;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"styled",
					function () {
						return styled;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"createThemedWithStyle",
					function () {
						return createThemedWithStyle;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"withStyle",
					function () {
						return withStyle;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"createThemedUseStyletron",
					function () {
						return createThemedUseStyletron;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"useStyletron",
					function () {
						return useStyletron;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"withWrapper",
					function () {
						return withWrapper;
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! styletron-react */ "../../node_modules/styletron-react/dist/browser.es5.es.js"
				);
				/* harmony import */ var styletron_standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! styletron-standard */ "../../node_modules/styletron-standard/dist/browser.es5.es.js"
				);
				/* harmony import */ var _theme_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./theme-provider.js */ "../../node_modules/baseui/esm/styles/theme-provider.js"
				);
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

				function _slicedToArray(arr, i) {
					return (
						_arrayWithHoles(arr) ||
						_iterableToArrayLimit(arr, i) ||
						_nonIterableRest()
					);
				}

				function _nonIterableRest() {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance"
					);
				}

				function _iterableToArrayLimit(arr, i) {
					if (
						!(
							Symbol.iterator in Object(arr) ||
							Object.prototype.toString.call(arr) === "[object Arguments]"
						)
					) {
						return;
					}
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = undefined;
					try {
						for (
							var _i = arr[Symbol.iterator](), _s;
							!(_n = (_s = _i.next()).done);
							_n = true
						) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}

				function _arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}

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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var wrapper = function wrapper(StyledComponent) {
					return react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (
						props,
						ref
					) {
						return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
							_theme_provider_js__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]
								.Consumer,
							null,
							function (theme) {
								return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
									StyledComponent,
									_extends(
										{
											ref: ref
										},
										props,
										{
											$theme: theme
										}
									)
								);
							}
						);
					});
				};
				/* eslint-disable flowtype/generic-spacing */

				/* eslint-disable flowtype/no-weak-types */

				/* eslint-enable flowtype/generic-spacing */

				/* eslint-enable flowtype/no-weak-types */
				function createThemedStyled() {
					return Object(
						styletron_react__WEBPACK_IMPORTED_MODULE_1__["createStyled"]
					)({
						wrapper: wrapper,
						getInitialStyle:
							styletron_standard__WEBPACK_IMPORTED_MODULE_2__[
								"getInitialStyle"
							],
						driver: styletron_standard__WEBPACK_IMPORTED_MODULE_2__["driver"] // eslint-disable-next-line flowtype/no-weak-types
					});
				}
				var styled = createThemedStyled();
				function createThemedWithStyle() {
					// eslint-disable-next-line flowtype/no-weak-types
					return styletron_react__WEBPACK_IMPORTED_MODULE_1__["withStyle"];
				}
				var withStyle = createThemedWithStyle();
				function createThemedUseStyletron() {
					return function () {
						// eslint-disable-next-line flowtype/no-weak-types
						var theme = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](
							_theme_provider_js__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]
						);

						var _styletronUseStyletro = Object(
								styletron_react__WEBPACK_IMPORTED_MODULE_1__["useStyletron"]
							)(),
							_styletronUseStyletro2 = _slicedToArray(_styletronUseStyletro, 1),
							css = _styletronUseStyletro2[0];

						return [css, theme];
					};
				}
				var useStyletron = createThemedUseStyletron();
				function withWrapper(StyledElement, wrapperFn) { // eslint-disable-next-line flowtype/no-weak-types
					// eslint-disable-next-line flowtype/no-weak-types
					return Object(
						styletron_react__WEBPACK_IMPORTED_MODULE_1__["withWrapper"]
					)(StyledElement, function (Styled) {
						return react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (
							props,
							ref
						) {
							return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
								_theme_provider_js__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]
									.Consumer,
								null,
								function (theme) {
									return wrapperFn(Styled)(
										_objectSpread(
											{
												ref: ref
											},
											props,
											{
												$theme: theme
											}
										)
									);
								}
							);
						});
					});
				}

				/***/
			},

		/***/ "../../node_modules/baseui/esm/styles/theme-provider.js":
			/*!**************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/styles/theme-provider.js ***!
  \**************************************************************************************/
			/*! exports provided: ThemeContext, default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"ThemeContext",
					function () {
						return ThemeContext;
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var _themes_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../themes/index.js */ "../../node_modules/baseui/esm/themes/index.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](
					_themes_index_js__WEBPACK_IMPORTED_MODULE_1__["LightTheme"]
				);

				var ThemeProvider = function ThemeProvider(props) {
					var theme = props.theme,
						children = props.children;
					return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
						ThemeContext.Provider,
						{
							value: theme
						},
						children
					);
				};

				/* harmony default export */ __webpack_exports__[
					"default"
				] = ThemeProvider;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/styles/util.js":
			/*!****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/styles/util.js ***!
  \****************************************************************************/
			/*! exports provided: hexToRgb, ellipsisText, expandBorderStyles */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"hexToRgb",
					function () {
						return hexToRgb;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"ellipsisText",
					function () {
						return ellipsisText;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"expandBorderStyles",
					function () {
						return expandBorderStyles;
					}
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				function hexToRgb() {
					var hex =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: "";
					var alpha =
						arguments.length > 1 && arguments[1] !== undefined
							? arguments[1]
							: "1";
					var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
					hex = hex.replace(shorthandRegex, function (m, r, g, b) {
						return r + r + g + g + b + b;
					});
					var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
					return result
						? "rgba("
								.concat(parseInt(result[1], 16), ", ")
								.concat(parseInt(result[2], 16), ", ")
								.concat(parseInt(result[3], 16), ", ")
								.concat(alpha, ")")
						: null;
				}
				var ellipsisText = {
					overflow: "hidden",
					textOverflow: "ellipsis",
					whiteSpace: "nowrap",
					wordWrap: "normal"
				};
				function expandBorderStyles(borderStyles) {
					return {
						borderTopWidth: borderStyles.borderWidth,
						borderTopStyle: borderStyles.borderStyle,
						borderTopColor: borderStyles.borderColor,
						borderBottomWidth: borderStyles.borderWidth,
						borderBottomStyle: borderStyles.borderStyle,
						borderBottomColor: borderStyles.borderColor,
						borderLeftWidth: borderStyles.borderWidth,
						borderLeftStyle: borderStyles.borderStyle,
						borderLeftColor: borderStyles.borderColor,
						borderRightWidth: borderStyles.borderWidth,
						borderRightStyle: borderStyles.borderStyle,
						borderRightColor: borderStyles.borderColor
					};
				}

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/dark-theme/borders.js":
			/*!******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/dark-theme/borders.js ***!
  \******************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _shared_borders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../shared/borders.js */ "../../node_modules/baseui/esm/themes/shared/borders.js"
				);
				/* harmony import */ var _utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../../utils/deep-merge.js */ "../../node_modules/baseui/esm/utils/deep-merge.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				// Override border colors for the dark theme
				var borders = Object(
					_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_1__["default"]
				)({}, _shared_borders_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
					border100: {
						borderColor: "hsla(0, 0%, 100%, 0.04)"
					},
					border200: {
						borderColor: "hsla(0, 0%, 100%, 0.08)"
					},
					border300: {
						borderColor: "hsla(0, 0%, 100%, 0.12)"
					},
					border400: {
						borderColor: "hsla(0, 0%, 100%, 0.16)"
					},
					border500: {
						borderColor: "hsla(0, 0%, 100%, 0.2)"
					},
					border600: {
						borderColor: "hsla(0, 0%, 100%, 0.24)"
					}
				});
				/* harmony default export */ __webpack_exports__["default"] = borders;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/dark-theme/color-component-tokens.js":
			/*!*********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/dark-theme/color-component-tokens.js ***!
  \*********************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-tokens.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/* ---- Component colors ---- */
				// TODO(#2318) Make it a plain object in the next v10 major version
				// with values taken from `colorTokens`.
				// Due to the legacy `createTheme` type the values
				// need to be overrideable through primitives
				/* harmony default export */ __webpack_exports__[
					"default"
				] = function () {
					var themePrimitives =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"];
					return {
						// Buttons
						buttonPrimaryFill: themePrimitives.primary,
						buttonPrimaryText: themePrimitives.black,
						buttonPrimaryHover: themePrimitives.primary100,
						buttonPrimaryActive: themePrimitives.primary200,
						buttonPrimarySelectedText: themePrimitives.black,
						buttonPrimarySelectedFill: themePrimitives.primary200,
						buttonPrimarySpinnerForeground: themePrimitives.primary700,
						buttonPrimarySpinnerBackground: themePrimitives.primary300,
						buttonSecondaryFill: themePrimitives.primary700,
						buttonSecondaryText: themePrimitives.primary,
						buttonSecondaryHover: themePrimitives.primary600,
						buttonSecondaryActive: themePrimitives.primary500,
						buttonSecondarySelectedText: themePrimitives.primary,
						buttonSecondarySelectedFill: themePrimitives.primary500,
						buttonSecondarySpinnerForeground: themePrimitives.white,
						buttonSecondarySpinnerBackground: themePrimitives.primary400,
						buttonTertiaryFill: "transparent",
						buttonTertiaryText: themePrimitives.primary,
						buttonTertiaryHover: themePrimitives.primary700,
						buttonTertiaryActive: themePrimitives.primary600,
						buttonTertiarySelectedText: themePrimitives.primary,
						buttonTertiarySelectedFill: themePrimitives.primary600,
						buttonTertiarySpinnerForeground: themePrimitives.primary50,
						buttonTertiarySpinnerBackground: themePrimitives.primary500,
						buttonMinimalFill: "transparent",
						buttonMinimalText: themePrimitives.primary,
						buttonMinimalHover: themePrimitives.primary700,
						buttonMinimalActive: themePrimitives.primary600,
						buttonMinimalSelectedText: themePrimitives.primary,
						buttonMinimalSelectedFill: themePrimitives.primary600,
						buttonMinimalSpinnerForeground: themePrimitives.primary50,
						buttonMinimalSpinnerBackground: themePrimitives.primary500,
						buttonDisabledFill: themePrimitives.mono600,
						buttonDisabledText: themePrimitives.mono300,
						buttonDisabledSpinnerForeground: themePrimitives.mono200,
						buttonDisabledSpinnerBackground: themePrimitives.mono400,
						// Breadcrumbs
						breadcrumbsText: themePrimitives.mono100,
						breadcrumbsSeparatorFill: themePrimitives.mono200,
						// Datepicker
						datepickerBackground: themePrimitives.mono600,
						datepickerDayFont: themePrimitives.white,
						datepickerDayFontDisabled: themePrimitives.mono100,
						datepickerDayPseudoSelected: themePrimitives.mono500,
						datepickerDayPseudoHighlighted: themePrimitives.mono600,
						// Calendar
						calendarBackground: themePrimitives.mono800,
						calendarForeground: themePrimitives.white,
						calendarForegroundDisabled: themePrimitives.mono300,
						calendarHeaderBackground: themePrimitives.primary700,
						calendarHeaderForeground: themePrimitives.primary,
						calendarHeaderBackgroundActive: themePrimitives.primary600,
						calendarHeaderForegroundDisabled: themePrimitives.primary500,
						calendarDayBackgroundPseudoSelected: themePrimitives.primary700,
						calendarDayForegroundPseudoSelected: themePrimitives.primary,
						calendarDayBackgroundPseudoSelectedHighlighted:
							themePrimitives.primary600,
						calendarDayForegroundPseudoSelectedHighlighted:
							themePrimitives.primary,
						calendarDayBackgroundSelected: themePrimitives.primary,
						calendarDayForegroundSelected: themePrimitives.black,
						calendarDayBackgroundSelectedHighlighted:
							themePrimitives.primary100,
						calendarDayForegroundSelectedHighlighted: themePrimitives.black,
						// FileUploader
						fileUploaderBackgroundColor: themePrimitives.mono700,
						fileUploaderBackgroundColorActive: themePrimitives.mono600,
						fileUploaderBorderColorActive: themePrimitives.primary,
						fileUploaderBorderColorDefault: themePrimitives.mono500,
						fileUploaderMessageColor: themePrimitives.mono100,
						// Links
						linkText: themePrimitives.primary,
						linkVisited: themePrimitives.primary100,
						linkHover: themePrimitives.primary200,
						linkActive: themePrimitives.primary300,
						// List
						listHeaderFill: themePrimitives.mono600,
						listBodyFill: themePrimitives.mono700,
						listIconFill: themePrimitives.mono100,
						listBorder: themePrimitives.mono500,
						// ProgressSteps
						progressStepsCompletedText: themePrimitives.black,
						progressStepsCompletedFill: themePrimitives.primary,
						progressStepsActiveText: themePrimitives.black,
						progressStepsActiveFill: themePrimitives.primary,
						progressStepsIconActiveFill: themePrimitives.primary,
						// Modal
						modalCloseColor: themePrimitives.mono300,
						modalCloseColorHover: themePrimitives.mono400,
						modalCloseColorFocus: themePrimitives.mono400,
						// Notification
						notificationPrimaryBackground: themePrimitives.primary700,
						notificationPrimaryText: themePrimitives.primary200,
						notificationInfoBackground: themePrimitives.accent700,
						notificationInfoText: themePrimitives.accent200,
						notificationPositiveBackground: themePrimitives.positive700,
						notificationPositiveText: themePrimitives.positive200,
						notificationWarningBackground: themePrimitives.warning700,
						notificationWarningText: themePrimitives.warning200,
						notificationNegativeBackground: themePrimitives.negative700,
						notificationNegativeText: themePrimitives.negative200,
						// Tag
						tagSolidRampUnit: "500",
						tagSolidHoverRampUnit: "500",
						tagSolidActiveRampUnit: "400",
						tagSolidDisabledRampUnit: "700",
						tagSolidFontRampUnit: "100",
						tagSolidFontHoverRampUnit: "100",
						tagLightRampUnit: "700",
						tagLightHoverRampUnit: "700",
						tagLightActiveRampUnit: "600",
						tagLightDisabledRampUnit: "700",
						tagLightFontRampUnit: "100",
						tagLightFontHoverRampUnit: "100",
						tagOutlinedRampUnit: "500",
						tagOutlinedHoverRampUnit: "400",
						tagOutlinedActiveRampUnit: "300",
						tagOutlinedDisabledRampUnit: "700",
						tagOutlinedFontRampUnit: "200",
						tagOutlinedFontHoverRampUnit: "700",
						tagFontDisabledRampUnit: "500",
						tagNeutralSolidBackground: themePrimitives.mono600,
						tagNeutralSolidHover: themePrimitives.mono600,
						tagNeutralSolidActive: themePrimitives.mono500,
						tagNeutralSolidDisabled: themePrimitives.mono700,
						tagNeutralSolidFont: themePrimitives.mono200,
						tagNeutralSolidFontHover: themePrimitives.mono200,
						tagNeutralLightBackground: themePrimitives.mono800,
						tagNeutralLightHover: themePrimitives.mono800,
						tagNeutralLightActive: themePrimitives.mono700,
						tagNeutralLightDisabled: themePrimitives.mono700,
						tagNeutralLightFont: themePrimitives.mono200,
						tagNeutralLightFontHover: themePrimitives.mono200,
						tagNeutralOutlinedBackground: themePrimitives.mono600,
						tagNeutralOutlinedHover: themePrimitives.mono500,
						tagNeutralOutlinedActive: themePrimitives.mono400,
						tagNeutralOutlinedDisabled: themePrimitives.mono700,
						tagNeutralOutlinedFont: themePrimitives.mono200,
						tagNeutralOutlinedFontHover: themePrimitives.mono900,
						tagNeutralFontDisabled: themePrimitives.mono500,
						tagPrimarySolidBackground: themePrimitives.primary,
						tagPrimarySolidHover: themePrimitives.primary700,
						tagPrimarySolidActive: themePrimitives.primary400,
						tagPrimarySolidDisabled: themePrimitives.primary700,
						tagPrimarySolidFont: themePrimitives.primary700,
						tagPrimarySolidFontHover: themePrimitives.primary100,
						tagPrimaryLightBackground: themePrimitives.primary700,
						tagPrimaryLightHover: themePrimitives.primary700,
						tagPrimaryLightActive: themePrimitives.primary600,
						tagPrimaryLightDisabled: themePrimitives.primary700,
						tagPrimaryLightFont: themePrimitives.primary100,
						tagPrimaryLightFontHover: themePrimitives.primary100,
						tagPrimaryOutlinedBackground: themePrimitives.primary,
						tagPrimaryOutlinedHover: themePrimitives.primary700,
						tagPrimaryOutlinedActive: themePrimitives.primary600,
						tagPrimaryOutlinedDisabled: themePrimitives.primary700,
						tagPrimaryOutlinedFont: themePrimitives.primary,
						tagPrimaryOutlinedFontHover: themePrimitives.primary50,
						tagPrimaryFontDisabled: themePrimitives.primary500,
						tagAccentSolidBackground: themePrimitives.accent500,
						tagAccentSolidHover: themePrimitives.accent500,
						tagAccentSolidActive: themePrimitives.accent400,
						tagAccentSolidDisabled: themePrimitives.accent700,
						tagAccentSolidFont: themePrimitives.accent100,
						tagAccentSolidFontHover: themePrimitives.accent100,
						tagAccentLightBackground: themePrimitives.accent700,
						tagAccentLightHover: themePrimitives.accent700,
						tagAccentLightActive: themePrimitives.accent600,
						tagAccentLightDisabled: themePrimitives.accent700,
						tagAccentLightFont: themePrimitives.accent100,
						tagAccentLightFontHover: themePrimitives.accent100,
						tagAccentOutlinedBackground: themePrimitives.accent500,
						tagAccentOutlinedHover: themePrimitives.accent400,
						tagAccentOutlinedActive: themePrimitives.accent300,
						tagAccentOutlinedDisabled: themePrimitives.accent700,
						tagAccentOutlinedFont: themePrimitives.accent200,
						tagAccentOutlinedFontHover: themePrimitives.accent700,
						tagAccentFontDisabled: themePrimitives.accent500,
						tagPositiveSolidBackground: themePrimitives.positive500,
						tagPositiveSolidHover: themePrimitives.positive500,
						tagPositiveSolidActive: themePrimitives.positive400,
						tagPositiveSolidDisabled: themePrimitives.positive700,
						tagPositiveSolidFont: themePrimitives.positive100,
						tagPositiveSolidFontHover: themePrimitives.positive100,
						tagPositiveLightBackground: themePrimitives.positive700,
						tagPositiveLightHover: themePrimitives.positive700,
						tagPositiveLightActive: themePrimitives.positive600,
						tagPositiveLightDisabled: themePrimitives.positive700,
						tagPositiveLightFont: themePrimitives.positive100,
						tagPositiveLightFontHover: themePrimitives.positive100,
						tagPositiveOutlinedBackground: themePrimitives.positive500,
						tagPositiveOutlinedHover: themePrimitives.positive400,
						tagPositiveOutlinedActive: themePrimitives.positive300,
						tagPositiveOutlinedDisabled: themePrimitives.positive700,
						tagPositiveOutlinedFont: themePrimitives.positive200,
						tagPositiveOutlinedFontHover: themePrimitives.positive700,
						tagPositiveFontDisabled: themePrimitives.positive500,
						tagWarningSolidBackground: themePrimitives.warning500,
						tagWarningSolidHover: themePrimitives.warning500,
						tagWarningSolidActive: themePrimitives.warning400,
						tagWarningSolidDisabled: themePrimitives.warning700,
						tagWarningSolidFont: themePrimitives.warning100,
						tagWarningSolidFontHover: themePrimitives.warning100,
						tagWarningLightBackground: themePrimitives.warning700,
						tagWarningLightHover: themePrimitives.warning700,
						tagWarningLightActive: themePrimitives.warning600,
						tagWarningLightDisabled: themePrimitives.warning700,
						tagWarningLightFont: themePrimitives.warning100,
						tagWarningLightFontHover: themePrimitives.warning100,
						tagWarningOutlinedBackground: themePrimitives.warning500,
						tagWarningOutlinedHover: themePrimitives.warning400,
						tagWarningOutlinedActive: themePrimitives.warning300,
						tagWarningOutlinedDisabled: themePrimitives.warning700,
						tagWarningOutlinedFont: themePrimitives.warning200,
						tagWarningOutlinedFontHover: themePrimitives.warning700,
						tagWarningFontDisabled: themePrimitives.warning500,
						tagNegativeSolidBackground: themePrimitives.negative500,
						tagNegativeSolidHover: themePrimitives.negative500,
						tagNegativeSolidActive: themePrimitives.negative400,
						tagNegativeSolidDisabled: themePrimitives.negative700,
						tagNegativeSolidFont: themePrimitives.negative100,
						tagNegativeSolidFontHover: themePrimitives.negative100,
						tagNegativeLightBackground: themePrimitives.negative700,
						tagNegativeLightHover: themePrimitives.negative700,
						tagNegativeLightActive: themePrimitives.negative600,
						tagNegativeLightDisabled: themePrimitives.negative700,
						tagNegativeLightFont: themePrimitives.negative100,
						tagNegativeLightFontHover: themePrimitives.negative100,
						tagNegativeOutlinedBackground: themePrimitives.negative500,
						tagNegativeOutlinedHover: themePrimitives.negative400,
						tagNegativeOutlinedActive: themePrimitives.negative300,
						tagNegativeOutlinedDisabled: themePrimitives.negative700,
						tagNegativeOutlinedFont: themePrimitives.negative200,
						tagNegativeOutlinedFontHover: themePrimitives.negative700,
						tagNegativeFontDisabled: themePrimitives.negative500,
						// Table
						tableHeadBackgroundColor: themePrimitives.mono700,
						tableBackground: themePrimitives.mono800,
						tableStripedBackground: themePrimitives.mono700,
						tableFilter: themePrimitives.mono400,
						tableFilterHeading: themePrimitives.mono300,
						tableFilterBackground: themePrimitives.mono700,
						tableFilterFooterBackground: themePrimitives.mono800,
						// Toast
						toastText: themePrimitives.white,
						toastPrimaryBackground: themePrimitives.primary500,
						toastInfoBackground: themePrimitives.accent500,
						toastPositiveBackground: themePrimitives.positive500,
						toastWarningBackground: themePrimitives.warning500,
						toastNegativeBackground: themePrimitives.negative500,
						// Toggle
						toggleFill: themePrimitives.mono300,
						toggleFillChecked: themePrimitives.primary,
						toggleFillDisabled: themePrimitives.mono600,
						toggleTrackFill: themePrimitives.mono400,
						toggleTrackFillDisabled: themePrimitives.mono700,
						// Tick
						tickFill: themePrimitives.mono1000,
						tickFillHover: themePrimitives.mono700,
						tickFillActive: themePrimitives.mono600,
						tickFillSelected: themePrimitives.primary,
						tickFillSelectedHover: themePrimitives.primary50,
						tickFillSelectedHoverActive: themePrimitives.primary100,
						tickFillError: themePrimitives.negative700,
						tickFillErrorHover: themePrimitives.negative600,
						tickFillErrorHoverActive: themePrimitives.negative500,
						tickFillErrorSelected: themePrimitives.negative500,
						tickFillErrorSelectedHover: themePrimitives.negative600,
						tickFillErrorSelectedHoverActive: themePrimitives.negative700,
						tickFillDisabled: themePrimitives.mono500,
						tickBorder: themePrimitives.mono300,
						tickBorderError: themePrimitives.negative400,
						tickMarkFill: themePrimitives.black,
						tickMarkFillError: themePrimitives.white,
						tickMarkFillDisabled: themePrimitives.mono800,
						// Slider/Toggle
						sliderTrackFill: themePrimitives.mono600,
						sliderTrackFillHover: themePrimitives.mono500,
						sliderTrackFillActive: themePrimitives.mono400,
						sliderTrackFillSelected: themePrimitives.primary500,
						sliderTrackFillSelectedActive: themePrimitives.primary600,
						sliderTrackFillSelectedHover: themePrimitives.primary700,
						sliderTrackFillDisabled: themePrimitives.mono700,
						sliderHandleFill: themePrimitives.mono300,
						sliderHandleFillHover: themePrimitives.mono300,
						sliderHandleFillActive: themePrimitives.mono300,
						sliderHandleFillSelected: themePrimitives.primary500,
						sliderHandleFillSelectedHover: themePrimitives.primary600,
						sliderHandleFillSelectedActive: themePrimitives.primary700,
						sliderHandleFillDisabled: themePrimitives.mono600,
						sliderHandleInnerFill: themePrimitives.mono300,
						sliderHandleInnerFillDisabled: themePrimitives.mono500,
						sliderHandleInnerFillSelectedHover: themePrimitives.primary600,
						sliderHandleInnerFillSelectedActive: themePrimitives.primary700,
						sliderBorder: themePrimitives.white,
						sliderBorderHover: themePrimitives.white,
						sliderBorderDisabled: themePrimitives.mono400,
						// Input
						inputBorder: themePrimitives.mono600,
						inputFill: themePrimitives.mono600,
						inputFillActive: themePrimitives.mono500,
						inputFillError: themePrimitives.negative700,
						inputFillDisabled: themePrimitives.mono800,
						inputFillPositive: themePrimitives.positive700,
						inputTextDisabled: themePrimitives.mono500,
						inputBorderError: themePrimitives.negative400,
						inputBorderPositive: themePrimitives.positive400,
						inputEnhancerFill: themePrimitives.mono500,
						inputEnhancerFillDisabled: themePrimitives.mono700,
						inputEnhancerTextDisabled: themePrimitives.mono500,
						inputPlaceholder: themePrimitives.mono300,
						inputPlaceholderDisabled: themePrimitives.mono500,
						// Menu
						menuFill: themePrimitives.mono600,
						menuFillHover: themePrimitives.mono700,
						menuFontDefault: themePrimitives.mono300,
						menuFontDisabled: themePrimitives.mono400,
						menuFontHighlighted: themePrimitives.mono200,
						menuFontSelected: themePrimitives.white,
						// Pagination
						paginationTriangleDown: themePrimitives.mono100,
						// Header navigation
						headerNavigationFill: themePrimitives.mono700,
						// Tab
						tabBarFill: themePrimitives.mono1000,
						tabColor: themePrimitives.mono300,
						// Spinner
						spinnerTrackFill: themePrimitives.mono100,
						// Progress bar
						progressbarTrackFill: themePrimitives.mono100,
						// Tooltip
						tooltipBackground: themePrimitives.mono200,
						tooltipText: themePrimitives.mono1000
					};
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/dark-theme/color-deprecated-semantic-tokens.js":
			/*!*******************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/dark-theme/color-deprecated-semantic-tokens.js ***!
  \*******************************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-tokens.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/* ---- DEPRECATED ---- */
				/* harmony default export */ __webpack_exports__[
					"default"
				] = function () {
					var themePrimitives =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"];
					return {
						// TODO(#2318) Remove Legacy Semantic Colors values in the next v10 major
						// since it's not used in the component specific tokens
						// and we ship semantic tokens separately

						/* ---- Legacy Semantic Colors ---- */
						// Font Color
						colorPrimary: themePrimitives.mono100,
						colorSecondary: themePrimitives.mono200,
						// Background
						background: themePrimitives.mono1000,
						backgroundAlt: themePrimitives.mono700,
						backgroundInv: themePrimitives.mono100,
						// Foreground
						foreground: themePrimitives.mono100,
						foregroundAlt: themePrimitives.mono300,
						foregroundInv: themePrimitives.mono1000,
						// Borders
						border: themePrimitives.mono600,
						borderAlt: themePrimitives.mono700,
						borderFocus: themePrimitives.primary,
						borderError: themePrimitives.negative,
						// Shadow
						shadowFocus: "rgba(39, 110, 241, 0.32)",
						shadowError: "rgba(229, 73, 55, 0.32)"
					};
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/dark-theme/color-semantic-tokens.js":
			/*!********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/dark-theme/color-semantic-tokens.js ***!
  \********************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-tokens.js"
				);
				/* harmony import */ var _styles_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../../styles/util.js */ "../../node_modules/baseui/esm/styles/util.js"
				);
				/* harmony import */ var _tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../../tokens/colors.js */ "../../node_modules/baseui/esm/tokens/colors.js"
				);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/* harmony default export */ __webpack_exports__[
					"default"
				] = function () {
					var foundation =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"];
					var core = {
						// Background
						backgroundPrimary: foundation.primaryB,
						backgroundSecondary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray800,
						backgroundTertiary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray700,
						backgroundInversePrimary: foundation.primaryA,
						backgroundInverseSecondary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray300,
						// Content
						contentPrimary: foundation.primaryA,
						contentSecondary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray400,
						contentTertiary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray500,
						contentInversePrimary: foundation.primaryB,
						contentInverseSecondary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray600,
						contentInverseTertiary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray500,
						// Border
						borderOpaque:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray700,
						borderTransparent: Object(
							_styles_util_js__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"]
						)(foundation.primaryA, "0.08"),
						borderSelected: foundation.primaryA,
						borderInverseOpaque:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray400,
						borderInverseTransparent: Object(
							_styles_util_js__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"]
						)(foundation.primaryB, "0.2"),
						borderInverseSelected: foundation.primaryB
					};
					var coreExtensions = {
						// Backgrounds
						backgroundStateDisabled:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray800,
						backgroundOverlayDark: Object(
							_styles_util_js__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"]
						)(
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].black,
							"0.3"
						),
						backgroundOverlayLight: Object(
							_styles_util_js__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"]
						)(
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].black,
							"0.08"
						),
						backgroundAccent: foundation.accent,
						backgroundNegative: foundation.negative,
						backgroundWarning: foundation.warning,
						backgroundPositive: foundation.positive,
						backgroundLightAccent:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].blue700,
						backgroundLightPositive:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"]
								.green700,
						backgroundLightNegative:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].red700,
						backgroundLightWarning:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"]
								.yellow700,
						backgroundAlwaysDark:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray900,
						backgroundAlwaysLight:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray100,
						// Content
						contentStateDisabled:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray600,
						contentAccent:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].blue300,
						contentOnColor:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray100,
						contentNegative:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].red300,
						contentWarning:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"]
								.yellow300,
						contentPositive:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"]
								.green300,
						// Border
						borderStateDisabled:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray800,
						borderAccent:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].blue400,
						borderAccentLight:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].blue500,
						borderNegative:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].red500,
						borderWarning:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"]
								.yellow500,
						borderPositive:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].green500
					};
					return _objectSpread({}, core, {}, coreExtensions);
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/dark-theme/color-tokens.js":
			/*!***********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/dark-theme/color-tokens.js ***!
  \***********************************************************************************************/
			/*! exports provided: darkColorTokens, default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"darkColorTokens",
					function () {
						return darkColorTokens;
					}
				);
				/* harmony import */ var _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../../tokens/index.js */ "../../node_modules/baseui/esm/tokens/index.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				// color constants
				var darkColorTokens = {
					// Primary Palette
					primaryA:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray200,
					primaryB:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray900,
					primary:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].white,
					primary50:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray50,
					primary100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray100,
					primary200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray200,
					primary300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray300,
					primary400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray400,
					primary500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray500,
					primary600:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray600,
					primary700:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray700,
					// Accent Palette
					accent:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue400,
					accent50:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue50,
					accent100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue100,
					accent200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue200,
					accent300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue300,
					accent400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue400,
					accent500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue500,
					accent600:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue600,
					accent700:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue700,
					// Negative Palette
					negative:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red500,
					negative50:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red50,
					negative100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red100,
					negative200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red200,
					negative300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red300,
					negative400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red400,
					negative500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red500,
					negative600:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red600,
					negative700:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red700,
					// Warning Palette
					warning:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow500,
					warning50:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow50,
					warning100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow100,
					warning200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow200,
					warning300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow300,
					warning400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow400,
					warning500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow500,
					warning600:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow600,
					warning700:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow700,
					// Positive Palette
					positive:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green400,
					positive50:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green50,
					positive100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green100,
					positive200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green200,
					positive300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green300,
					positive400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green400,
					positive500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green500,
					positive600:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green600,
					positive700:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green700,
					// Monochrome Palette
					white: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].white,
					black: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].black,
					mono100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray300,
					mono200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray400,
					mono300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray500,
					mono400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray600,
					mono500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray700,
					// mono600 and mono900 are not in official brand tokens atm
					mono600: "#292929",
					mono700: "#1F1F1F",
					mono800: "#141414",
					mono900: "#111111",
					mono1000:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].black,
					// Rating Palette,
					rating200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow200,
					rating400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow400
				};
				/* harmony default export */ __webpack_exports__[
					"default"
				] = darkColorTokens;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/dark-theme/create-dark-theme.js":
			/*!****************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/dark-theme/create-dark-theme.js ***!
  \****************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return createDarkTheme;
					}
				);
				/* harmony import */ var _shared_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../shared/animation.js */ "../../node_modules/baseui/esm/themes/shared/animation.js"
				);
				/* harmony import */ var _borders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./borders.js */ "../../node_modules/baseui/esm/themes/dark-theme/borders.js"
				);
				/* harmony import */ var _shared_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../shared/breakpoints.js */ "../../node_modules/baseui/esm/themes/shared/breakpoints.js"
				);
				/* harmony import */ var _utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ../../utils/deep-merge.js */ "../../node_modules/baseui/esm/utils/deep-merge.js"
				);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-tokens.js"
				);
				/* harmony import */ var _color_component_tokens_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! ./color-component-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-component-tokens.js"
				);
				/* harmony import */ var _color_deprecated_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					/*! ./color-deprecated-semantic-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-deprecated-semantic-tokens.js"
				);
				/* harmony import */ var _color_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					/*! ./color-semantic-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-semantic-tokens.js"
				);
				/* harmony import */ var _shared_typography_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					/*! ../shared/typography.js */ "../../node_modules/baseui/esm/themes/shared/typography.js"
				);
				/* harmony import */ var _shared_grid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					/*! ../shared/grid.js */ "../../node_modules/baseui/esm/themes/shared/grid.js"
				);
				/* harmony import */ var _shared_lighting_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					/*! ../shared/lighting.js */ "../../node_modules/baseui/esm/themes/shared/lighting.js"
				);
				/* harmony import */ var _shared_media_query_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					/*! ../shared/media-query.js */ "../../node_modules/baseui/esm/themes/shared/media-query.js"
				);
				/* harmony import */ var _shared_sizing_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					/*! ../shared/sizing.js */ "../../node_modules/baseui/esm/themes/shared/sizing.js"
				);
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

				function _objectWithoutProperties(source, excluded) {
					if (source == null) return {};
					var target = _objectWithoutPropertiesLoose(source, excluded);
					var key, i;
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
						for (i = 0; i < sourceSymbolKeys.length; i++) {
							key = sourceSymbolKeys[i];
							if (excluded.indexOf(key) >= 0) continue;
							if (!Object.prototype.propertyIsEnumerable.call(source, key))
								continue;
							target[key] = source[key];
						}
					}
					return target;
				}

				function _objectWithoutPropertiesLoose(source, excluded) {
					if (source == null) return {};
					var target = {};
					var sourceKeys = Object.keys(source);
					var key, i;
					for (i = 0; i < sourceKeys.length; i++) {
						key = sourceKeys[i];
						if (excluded.indexOf(key) >= 0) continue;
						target[key] = source[key];
					}
					return target;
				}

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				function createDarkTheme() {
					var primitives =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: {};
					var // Used to override default theme property values derived from primitives
						overrides = arguments.length > 1 ? arguments[1] : undefined;

					// Extract font tokens and color tokens from primitives
					var primaryFontFamily = primitives.primaryFontFamily,
						customColorTokens = _objectWithoutProperties(primitives, [
							"primaryFontFamily"
						]); // Assemble color tokens by overriding defaults with custom color tokens

					var colorTokens = _objectSpread(
						{},
						_color_tokens_js__WEBPACK_IMPORTED_MODULE_4__["default"],
						{},
						customColorTokens
					);

					var theme = {
						animation:
							_shared_animation_js__WEBPACK_IMPORTED_MODULE_0__["default"],
						borders: _borders_js__WEBPACK_IMPORTED_MODULE_1__["default"],
						breakpoints:
							_shared_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__["default"],
						colors: _objectSpread(
							{},
							colorTokens,
							{},
							Object(
								_color_component_tokens_js__WEBPACK_IMPORTED_MODULE_5__[
									"default"
								]
							)(colorTokens),
							{},
							Object(
								_color_deprecated_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_6__[
									"default"
								]
							)(colorTokens),
							{},
							Object(
								_color_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_7__[
									"default"
								]
							)(colorTokens)
						),
						direction: "auto",
						grid: _shared_grid_js__WEBPACK_IMPORTED_MODULE_9__["default"],
						lighting:
							_shared_lighting_js__WEBPACK_IMPORTED_MODULE_10__["default"],
						mediaQuery:
							_shared_media_query_js__WEBPACK_IMPORTED_MODULE_11__["default"],
						sizing: _shared_sizing_js__WEBPACK_IMPORTED_MODULE_12__["default"],
						// If primaryFontFamily is not provided, we use our default font tokens
						typography: primaryFontFamily
							? Object(
									_shared_typography_js__WEBPACK_IMPORTED_MODULE_8__["default"]
							  )({
									primaryFontFamily: primaryFontFamily
							  })
							: Object(
									_shared_typography_js__WEBPACK_IMPORTED_MODULE_8__["default"]
							  )(),
						// TODO(#2318) Remove in v10, the next major version.
						// Do not use.
						zIndex: {
							modal: 2000
						}
					};
					return Object(
						_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_3__["default"]
					)(theme, overrides);
				}

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/dark-theme/dark-theme.js":
			/*!*********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/dark-theme/dark-theme.js ***!
  \*********************************************************************************************/
			/*! exports provided: DarkTheme */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"DarkTheme",
					function () {
						return DarkTheme;
					}
				);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-tokens.js"
				);
				/* harmony import */ var _color_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./color-semantic-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-semantic-tokens.js"
				);
				/* harmony import */ var _color_component_tokens_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./color-component-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-component-tokens.js"
				);
				/* harmony import */ var _color_deprecated_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./color-deprecated-semantic-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-deprecated-semantic-tokens.js"
				);
				/* harmony import */ var _borders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ./borders.js */ "../../node_modules/baseui/esm/themes/dark-theme/borders.js"
				);
				/* harmony import */ var _shared_lighting_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! ../shared/lighting.js */ "../../node_modules/baseui/esm/themes/shared/lighting.js"
				);
				/* harmony import */ var _shared_typography_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					/*! ../shared/typography.js */ "../../node_modules/baseui/esm/themes/shared/typography.js"
				);
				/* harmony import */ var _shared_animation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					/*! ../shared/animation.js */ "../../node_modules/baseui/esm/themes/shared/animation.js"
				);
				/* harmony import */ var _shared_breakpoints_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					/*! ../shared/breakpoints.js */ "../../node_modules/baseui/esm/themes/shared/breakpoints.js"
				);
				/* harmony import */ var _shared_grid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					/*! ../shared/grid.js */ "../../node_modules/baseui/esm/themes/shared/grid.js"
				);
				/* harmony import */ var _shared_media_query_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					/*! ../shared/media-query.js */ "../../node_modules/baseui/esm/themes/shared/media-query.js"
				);
				/* harmony import */ var _shared_sizing_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					/*! ../shared/sizing.js */ "../../node_modules/baseui/esm/themes/shared/sizing.js"
				);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var DarkTheme = {
					name: "dark-theme",
					colors: _objectSpread(
						{},
						_color_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"],
						{},
						Object(
							_color_component_tokens_js__WEBPACK_IMPORTED_MODULE_2__["default"]
						)(),
						{},
						Object(
							_color_deprecated_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_3__[
								"default"
							]
						)(),
						{},
						Object(
							_color_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_1__["default"]
						)()
					),
					animation:
						_shared_animation_js__WEBPACK_IMPORTED_MODULE_7__["default"],
					breakpoints:
						_shared_breakpoints_js__WEBPACK_IMPORTED_MODULE_8__["default"],
					borders: _borders_js__WEBPACK_IMPORTED_MODULE_4__["default"],
					direction: "auto",
					grid: _shared_grid_js__WEBPACK_IMPORTED_MODULE_9__["default"],
					lighting: _shared_lighting_js__WEBPACK_IMPORTED_MODULE_5__["default"],
					mediaQuery:
						_shared_media_query_js__WEBPACK_IMPORTED_MODULE_10__["default"],
					sizing: _shared_sizing_js__WEBPACK_IMPORTED_MODULE_11__["default"],
					typography: Object(
						_shared_typography_js__WEBPACK_IMPORTED_MODULE_6__["default"]
					)(),
					// TODO(#2318) Remove it in the next v10 major version.
					// Do not use.
					zIndex: {
						modal: 2000
					}
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/dark-theme/primitives.js":
			/*!*********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/dark-theme/primitives.js ***!
  \*********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/dark-theme/color-tokens.js"
				);
				/* harmony import */ var _shared_typography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../shared/typography.js */ "../../node_modules/baseui/esm/themes/shared/typography.js"
				);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				// We don't use this ourselves. We provide it for backward compatability.
				// People may have used it to create their own custom theme.
				var primitives = _objectSpread(
					{},
					_color_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"],
					{},
					_shared_typography_js__WEBPACK_IMPORTED_MODULE_1__[
						"defaultFontTokens"
					]
				);

				/* harmony default export */ __webpack_exports__[
					"default"
				] = primitives;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/index.js":
			/*!*****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/index.js ***!
  \*****************************************************************************/
			/*! exports provided: createDarkTheme, createLightTheme, createTheme, LightTheme, LightThemeMove, lightThemePrimitives, DarkTheme, DarkThemeMove, darkThemePrimitives, darkThemeOverrides */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _light_theme_light_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./light-theme/light-theme.js */ "../../node_modules/baseui/esm/themes/light-theme/light-theme.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"LightTheme",
					function () {
						return _light_theme_light_theme_js__WEBPACK_IMPORTED_MODULE_0__[
							"LightTheme"
						];
					}
				);

				/* harmony import */ var _move_theme_light_theme_with_move_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./move-theme/light-theme-with-move.js */ "../../node_modules/baseui/esm/themes/move-theme/light-theme-with-move.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"LightThemeMove",
					function () {
						return _move_theme_light_theme_with_move_js__WEBPACK_IMPORTED_MODULE_1__[
							"LightThemeMove"
						];
					}
				);

				/* harmony import */ var _dark_theme_dark_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./dark-theme/dark-theme.js */ "../../node_modules/baseui/esm/themes/dark-theme/dark-theme.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"DarkTheme",
					function () {
						return _dark_theme_dark_theme_js__WEBPACK_IMPORTED_MODULE_2__[
							"DarkTheme"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"darkThemeOverrides",
					function () {
						return _dark_theme_dark_theme_js__WEBPACK_IMPORTED_MODULE_2__[
							"DarkTheme"
						];
					}
				);

				/* harmony import */ var _move_theme_dark_theme_with_move_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./move-theme/dark-theme-with-move.js */ "../../node_modules/baseui/esm/themes/move-theme/dark-theme-with-move.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"DarkThemeMove",
					function () {
						return _move_theme_dark_theme_with_move_js__WEBPACK_IMPORTED_MODULE_3__[
							"DarkThemeMove"
						];
					}
				);

				/* harmony import */ var _dark_theme_create_dark_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ./dark-theme/create-dark-theme.js */ "../../node_modules/baseui/esm/themes/dark-theme/create-dark-theme.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createDarkTheme",
					function () {
						return _dark_theme_create_dark_theme_js__WEBPACK_IMPORTED_MODULE_4__[
							"default"
						];
					}
				);

				/* harmony import */ var _light_theme_create_light_theme_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! ./light-theme/create-light-theme.js */ "../../node_modules/baseui/esm/themes/light-theme/create-light-theme.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createLightTheme",
					function () {
						return _light_theme_create_light_theme_js__WEBPACK_IMPORTED_MODULE_5__[
							"default"
						];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createTheme",
					function () {
						return _light_theme_create_light_theme_js__WEBPACK_IMPORTED_MODULE_5__[
							"default"
						];
					}
				);

				/* harmony import */ var _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					/*! ./dark-theme/primitives.js */ "../../node_modules/baseui/esm/themes/dark-theme/primitives.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"darkThemePrimitives",
					function () {
						return _dark_theme_primitives_js__WEBPACK_IMPORTED_MODULE_6__[
							"default"
						];
					}
				);

				/* harmony import */ var _light_theme_primitives_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					/*! ./light-theme/primitives.js */ "../../node_modules/baseui/esm/themes/light-theme/primitives.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"lightThemePrimitives",
					function () {
						return _light_theme_primitives_js__WEBPACK_IMPORTED_MODULE_7__[
							"default"
						];
					}
				);

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/light-theme/color-component-tokens.js":
			/*!**********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/light-theme/color-component-tokens.js ***!
  \**********************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-tokens.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/* ---- Component colors ---- */
				// TODO(#2318) Make it a plain object in the next v10 major version
				// with values taken from `colorTokens`.
				// Due to the legacy `createTheme` type the value need to be
				// overrideable through primitives (`foundation` )
				/* harmony default export */ __webpack_exports__[
					"default"
				] = function () {
					var themePrimitives =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"];
					return {
						// Buttons
						buttonPrimaryFill: themePrimitives.primary,
						buttonPrimaryText: themePrimitives.white,
						buttonPrimaryHover: themePrimitives.primary700,
						buttonPrimaryActive: themePrimitives.primary600,
						buttonPrimarySelectedFill: themePrimitives.primary600,
						buttonPrimarySelectedText: themePrimitives.white,
						buttonPrimarySpinnerForeground: themePrimitives.primary50,
						buttonPrimarySpinnerBackground: themePrimitives.primary500,
						buttonSecondaryFill: themePrimitives.primary100,
						buttonSecondaryText: themePrimitives.primary,
						buttonSecondaryHover: themePrimitives.primary200,
						buttonSecondaryActive: themePrimitives.primary300,
						buttonSecondarySelectedFill: themePrimitives.primary300,
						buttonSecondarySelectedText: themePrimitives.primary,
						buttonSecondarySpinnerForeground: themePrimitives.primary700,
						buttonSecondarySpinnerBackground: themePrimitives.primary300,
						buttonTertiaryFill: "transparent",
						buttonTertiaryText: themePrimitives.primary,
						buttonTertiaryHover: themePrimitives.primary50,
						buttonTertiaryActive: themePrimitives.primary100,
						buttonTertiarySelectedFill: themePrimitives.primary100,
						buttonTertiarySelectedText: themePrimitives.primary,
						buttonTertiarySpinnerForeground: themePrimitives.primary700,
						buttonTertiarySpinnerBackground: themePrimitives.primary300,
						buttonMinimalFill: "transparent",
						buttonMinimalText: themePrimitives.primary,
						buttonMinimalHover: themePrimitives.primary50,
						buttonMinimalActive: themePrimitives.primary100,
						buttonMinimalSelectedFill: themePrimitives.primary100,
						buttonMinimalSelectedText: themePrimitives.primary,
						buttonMinimalSpinnerForeground: themePrimitives.primary700,
						buttonMinimalSpinnerBackground: themePrimitives.primary300,
						buttonDisabledFill: themePrimitives.mono200,
						buttonDisabledText: themePrimitives.mono600,
						buttonDisabledSpinnerForeground: themePrimitives.mono600,
						buttonDisabledSpinnerBackground: themePrimitives.mono400,
						// Breadcrumbs
						breadcrumbsText: themePrimitives.mono900,
						breadcrumbsSeparatorFill: themePrimitives.mono700,
						// Datepicker
						datepickerBackground: themePrimitives.mono100,
						datepickerDayFont: themePrimitives.mono1000,
						datepickerDayFontDisabled: themePrimitives.mono500,
						datepickerDayPseudoSelected: themePrimitives.primary100,
						datepickerDayPseudoHighlighted: themePrimitives.primary200,
						// Calendar
						calendarBackground: themePrimitives.mono100,
						calendarForeground: themePrimitives.mono1000,
						calendarForegroundDisabled: themePrimitives.mono500,
						calendarHeaderBackground: themePrimitives.primary,
						calendarHeaderForeground: themePrimitives.white,
						calendarHeaderBackgroundActive: themePrimitives.primary700,
						calendarHeaderForegroundDisabled: themePrimitives.primary500,
						calendarDayBackgroundPseudoSelected: themePrimitives.primary100,
						calendarDayForegroundPseudoSelected: themePrimitives.mono1000,
						calendarDayBackgroundPseudoSelectedHighlighted:
							themePrimitives.primary200,
						calendarDayForegroundPseudoSelectedHighlighted:
							themePrimitives.mono1000,
						calendarDayBackgroundSelected: themePrimitives.white,
						calendarDayForegroundSelected: themePrimitives.primary,
						calendarDayBackgroundSelectedHighlighted: themePrimitives.primary,
						calendarDayForegroundSelectedHighlighted: themePrimitives.white,
						// FileUploader
						fileUploaderBackgroundColor: themePrimitives.mono200,
						fileUploaderBackgroundColorActive: themePrimitives.primary50,
						fileUploaderBorderColorActive: themePrimitives.primary,
						fileUploaderBorderColorDefault: themePrimitives.mono500,
						fileUploaderMessageColor: themePrimitives.mono600,
						// Links
						linkText: themePrimitives.primary,
						linkVisited: themePrimitives.primary700,
						linkHover: themePrimitives.primary600,
						linkActive: themePrimitives.primary500,
						// List
						listHeaderFill: themePrimitives.white,
						listBodyFill: themePrimitives.mono200,
						listIconFill: themePrimitives.mono500,
						listBorder: themePrimitives.mono500,
						// ProgressSteps
						progressStepsCompletedText: themePrimitives.white,
						progressStepsCompletedFill: themePrimitives.primary,
						progressStepsActiveText: themePrimitives.white,
						progressStepsActiveFill: themePrimitives.primary,
						progressStepsIconActiveFill: themePrimitives.primary,
						// Toggle
						toggleFill: themePrimitives.white,
						toggleFillChecked: themePrimitives.primary,
						toggleFillDisabled: themePrimitives.mono600,
						toggleTrackFill: themePrimitives.mono400,
						toggleTrackFillDisabled: themePrimitives.mono300,
						// Tick
						tickFill: themePrimitives.mono100,
						tickFillHover: themePrimitives.mono200,
						tickFillActive: themePrimitives.mono300,
						tickFillSelected: themePrimitives.primary,
						tickFillSelectedHover: themePrimitives.primary700,
						tickFillSelectedHoverActive: themePrimitives.primary600,
						tickFillError: themePrimitives.negative50,
						tickFillErrorHover: themePrimitives.negative100,
						tickFillErrorHoverActive: themePrimitives.negative200,
						tickFillErrorSelected: themePrimitives.negative400,
						tickFillErrorSelectedHover: themePrimitives.negative500,
						tickFillErrorSelectedHoverActive: themePrimitives.negative600,
						tickFillDisabled: themePrimitives.mono600,
						tickBorder: themePrimitives.mono700,
						tickBorderError: themePrimitives.negative400,
						tickMarkFill: themePrimitives.white,
						tickMarkFillError: themePrimitives.white,
						tickMarkFillDisabled: themePrimitives.mono100,
						// Slider/Toggle
						sliderTrackFill: themePrimitives.mono400,
						sliderTrackFillHover: themePrimitives.mono500,
						sliderTrackFillActive: themePrimitives.mono600,
						sliderTrackFillSelected: themePrimitives.primary,
						sliderTrackFillSelectedHover: themePrimitives.primary,
						sliderTrackFillSelectedActive: themePrimitives.primary500,
						sliderTrackFillDisabled: themePrimitives.mono300,
						sliderHandleFill: themePrimitives.white,
						sliderHandleFillHover: themePrimitives.white,
						sliderHandleFillActive: themePrimitives.white,
						sliderHandleFillSelected: themePrimitives.white,
						sliderHandleFillSelectedHover: themePrimitives.white,
						sliderHandleFillSelectedActive: themePrimitives.white,
						sliderHandleFillDisabled: themePrimitives.mono500,
						sliderHandleInnerFill: themePrimitives.mono400,
						sliderHandleInnerFillDisabled: themePrimitives.mono400,
						sliderHandleInnerFillSelectedHover: themePrimitives.primary,
						sliderHandleInnerFillSelectedActive: themePrimitives.primary500,
						sliderBorder: themePrimitives.mono500,
						sliderBorderHover: themePrimitives.primary,
						sliderBorderDisabled: themePrimitives.mono600,
						// Inputs
						inputBorder: themePrimitives.mono300,
						inputFill: themePrimitives.mono300,
						inputFillError: themePrimitives.negative50,
						inputFillDisabled: themePrimitives.mono200,
						inputFillActive: themePrimitives.mono200,
						inputFillPositive: themePrimitives.positive50,
						inputTextDisabled: themePrimitives.mono600,
						inputBorderError: themePrimitives.negative200,
						inputBorderPositive: themePrimitives.positive200,
						inputEnhancerFill: themePrimitives.mono300,
						inputEnhancerFillDisabled: themePrimitives.mono300,
						inputEnhancerTextDisabled: themePrimitives.mono600,
						inputPlaceholder: themePrimitives.mono700,
						inputPlaceholderDisabled: themePrimitives.mono600,
						// Menu
						menuFill: themePrimitives.mono100,
						menuFillHover: themePrimitives.mono200,
						menuFontDefault: themePrimitives.mono800,
						menuFontDisabled: themePrimitives.mono500,
						menuFontHighlighted: themePrimitives.mono1000,
						menuFontSelected: themePrimitives.mono1000,
						// Modal
						modalCloseColor: themePrimitives.mono1000,
						modalCloseColorHover: themePrimitives.mono800,
						modalCloseColorFocus: themePrimitives.mono800,
						// Pagination
						paginationTriangleDown: themePrimitives.mono800,
						// Header navigation
						headerNavigationFill: "transparent",
						// Tab
						tabBarFill: themePrimitives.mono200,
						tabColor: themePrimitives.mono800,
						// Notification
						notificationPrimaryBackground: themePrimitives.primary50,
						notificationPrimaryText: themePrimitives.primary500,
						notificationInfoBackground: themePrimitives.accent50,
						notificationInfoText: themePrimitives.accent500,
						notificationPositiveBackground: themePrimitives.positive50,
						notificationPositiveText: themePrimitives.positive500,
						notificationWarningBackground: themePrimitives.warning50,
						notificationWarningText: themePrimitives.warning500,
						notificationNegativeBackground: themePrimitives.negative50,
						notificationNegativeText: themePrimitives.negative500,
						// Tag
						tagSolidRampUnit: "400",
						tagSolidHoverRampUnit: "50",
						tagSolidActiveRampUnit: "100",
						tagSolidDisabledRampUnit: "50",
						tagSolidFontRampUnit: "50",
						tagSolidFontHoverRampUnit: "500",
						tagLightRampUnit: "50",
						tagLightHoverRampUnit: "100",
						tagLightActiveRampUnit: "100",
						tagLightDisabledRampUnit: "50",
						tagLightFontRampUnit: "500",
						tagLightFontHoverRampUnit: "500",
						tagOutlinedRampUnit: "400",
						tagOutlinedHoverRampUnit: "500",
						tagOutlinedActiveRampUnit: "600",
						tagOutlinedDisabledRampUnit: "50",
						tagOutlinedFontRampUnit: "500",
						tagOutlinedFontHoverRampUnit: "50",
						tagFontDisabledRampUnit: "200",
						tagNeutralSolidBackground: themePrimitives.mono900,
						tagNeutralSolidHover: themePrimitives.mono300,
						tagNeutralSolidActive: themePrimitives.mono400,
						tagNeutralSolidDisabled: themePrimitives.mono200,
						tagNeutralSolidFont: themePrimitives.mono100,
						tagNeutralSolidFontHover: themePrimitives.mono900,
						tagNeutralLightBackground: themePrimitives.mono300,
						tagNeutralLightHover: themePrimitives.mono300,
						tagNeutralLightActive: themePrimitives.mono400,
						tagNeutralLightDisabled: themePrimitives.mono200,
						tagNeutralLightFont: themePrimitives.mono900,
						tagNeutralLightFontHover: themePrimitives.mono900,
						tagNeutralOutlinedBackground: themePrimitives.mono900,
						tagNeutralOutlinedHover: themePrimitives.mono800,
						tagNeutralOutlinedActive: themePrimitives.mono900,
						tagNeutralOutlinedDisabled: themePrimitives.mono200,
						tagNeutralOutlinedFont: themePrimitives.mono900,
						tagNeutralOutlinedFontHover: themePrimitives.mono200,
						tagNeutralFontDisabled: themePrimitives.mono500,
						tagPrimarySolidBackground: themePrimitives.primary,
						tagPrimarySolidHover: themePrimitives.primary100,
						tagPrimarySolidActive: themePrimitives.primary200,
						tagPrimarySolidDisabled: themePrimitives.primary50,
						tagPrimarySolidFont: themePrimitives.primary50,
						tagPrimarySolidFontHover: themePrimitives.primary700,
						tagPrimaryLightBackground: themePrimitives.primary50,
						tagPrimaryLightHover: themePrimitives.primary100,
						tagPrimaryLightActive: themePrimitives.primary100,
						tagPrimaryLightDisabled: themePrimitives.primary50,
						tagPrimaryLightFont: themePrimitives.primary500,
						tagPrimaryLightFontHover: themePrimitives.primary500,
						tagPrimaryOutlinedBackground: themePrimitives.primary,
						tagPrimaryOutlinedHover: themePrimitives.primary700,
						tagPrimaryOutlinedActive: themePrimitives.primary600,
						tagPrimaryOutlinedDisabled: themePrimitives.primary50,
						tagPrimaryOutlinedFont: themePrimitives.primary,
						tagPrimaryOutlinedFontHover: themePrimitives.primary50,
						tagPrimaryFontDisabled: themePrimitives.primary400,
						tagAccentSolidBackground: themePrimitives.accent400,
						tagAccentSolidHover: themePrimitives.accent50,
						tagAccentSolidActive: themePrimitives.accent100,
						tagAccentSolidDisabled: themePrimitives.accent50,
						tagAccentSolidFont: themePrimitives.accent50,
						tagAccentSolidFontHover: themePrimitives.accent500,
						tagAccentLightBackground: themePrimitives.accent50,
						tagAccentLightHover: themePrimitives.accent100,
						tagAccentLightActive: themePrimitives.accent100,
						tagAccentLightDisabled: themePrimitives.accent50,
						tagAccentLightFont: themePrimitives.accent500,
						tagAccentLightFontHover: themePrimitives.accent500,
						tagAccentOutlinedBackground: themePrimitives.accent400,
						tagAccentOutlinedHover: themePrimitives.accent500,
						tagAccentOutlinedActive: themePrimitives.accent600,
						tagAccentOutlinedDisabled: themePrimitives.accent50,
						tagAccentOutlinedFont: themePrimitives.accent500,
						tagAccentOutlinedFontHover: themePrimitives.accent50,
						tagAccentFontDisabled: themePrimitives.accent200,
						tagPositiveSolidBackground: themePrimitives.positive400,
						tagPositiveSolidHover: themePrimitives.positive50,
						tagPositiveSolidActive: themePrimitives.positive100,
						tagPositiveSolidDisabled: themePrimitives.positive50,
						tagPositiveSolidFont: themePrimitives.positive50,
						tagPositiveSolidFontHover: themePrimitives.positive500,
						tagPositiveLightBackground: themePrimitives.positive50,
						tagPositiveLightHover: themePrimitives.positive100,
						tagPositiveLightActive: themePrimitives.positive100,
						tagPositiveLightDisabled: themePrimitives.positive50,
						tagPositiveLightFont: themePrimitives.positive500,
						tagPositiveLightFontHover: themePrimitives.positive500,
						tagPositiveOutlinedBackground: themePrimitives.positive400,
						tagPositiveOutlinedHover: themePrimitives.positive500,
						tagPositiveOutlinedActive: themePrimitives.positive600,
						tagPositiveOutlinedDisabled: themePrimitives.positive50,
						tagPositiveOutlinedFont: themePrimitives.positive500,
						tagPositiveOutlinedFontHover: themePrimitives.positive50,
						tagPositiveFontDisabled: themePrimitives.positive200,
						tagWarningSolidBackground: themePrimitives.warning400,
						tagWarningSolidHover: themePrimitives.warning50,
						tagWarningSolidActive: themePrimitives.warning100,
						tagWarningSolidDisabled: themePrimitives.warning50,
						tagWarningSolidFont: themePrimitives.warning700,
						tagWarningSolidFontHover: themePrimitives.warning500,
						tagWarningLightBackground: themePrimitives.warning50,
						tagWarningLightHover: themePrimitives.warning100,
						tagWarningLightActive: themePrimitives.warning100,
						tagWarningLightDisabled: themePrimitives.warning50,
						tagWarningLightFont: themePrimitives.warning500,
						tagWarningLightFontHover: themePrimitives.warning500,
						tagWarningOutlinedBackground: themePrimitives.warning300,
						tagWarningOutlinedHover: themePrimitives.warning500,
						tagWarningOutlinedActive: themePrimitives.warning600,
						tagWarningOutlinedDisabled: themePrimitives.warning100,
						tagWarningOutlinedFont: themePrimitives.warning600,
						tagWarningOutlinedFontHover: themePrimitives.warning50,
						tagWarningFontDisabled: themePrimitives.warning300,
						tagNegativeSolidBackground: themePrimitives.negative400,
						tagNegativeSolidHover: themePrimitives.negative50,
						tagNegativeSolidActive: themePrimitives.negative100,
						tagNegativeSolidDisabled: themePrimitives.negative50,
						tagNegativeSolidFont: themePrimitives.negative50,
						tagNegativeSolidFontHover: themePrimitives.negative500,
						tagNegativeLightBackground: themePrimitives.negative50,
						tagNegativeLightHover: themePrimitives.negative100,
						tagNegativeLightActive: themePrimitives.negative100,
						tagNegativeLightDisabled: themePrimitives.negative50,
						tagNegativeLightFont: themePrimitives.negative500,
						tagNegativeLightFontHover: themePrimitives.negative500,
						tagNegativeOutlinedBackground: themePrimitives.negative400,
						tagNegativeOutlinedHover: themePrimitives.negative500,
						tagNegativeOutlinedActive: themePrimitives.negative600,
						tagNegativeOutlinedDisabled: themePrimitives.negative50,
						tagNegativeOutlinedFont: themePrimitives.negative500,
						tagNegativeOutlinedFontHover: themePrimitives.negative50,
						tagNegativeFontDisabled: themePrimitives.negative200,
						// Table
						tableHeadBackgroundColor: themePrimitives.mono100,
						tableBackground: themePrimitives.mono100,
						tableStripedBackground: themePrimitives.mono200,
						tableFilter: themePrimitives.mono600,
						tableFilterHeading: themePrimitives.mono700,
						tableFilterBackground: themePrimitives.mono100,
						tableFilterFooterBackground: themePrimitives.mono200,
						// Toast
						toastText: themePrimitives.white,
						toastPrimaryBackground: themePrimitives.primary500,
						toastInfoBackground: themePrimitives.accent500,
						toastPositiveBackground: themePrimitives.positive500,
						toastWarningBackground: themePrimitives.warning500,
						toastNegativeBackground: themePrimitives.negative500,
						// Spinner
						spinnerTrackFill: themePrimitives.mono900,
						// Progress bar
						progressbarTrackFill: themePrimitives.mono900,
						// Tooltip
						tooltipBackground: themePrimitives.mono900,
						tooltipText: themePrimitives.mono100
					};
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/light-theme/color-deprecated-semantic-tokens.js":
			/*!********************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/light-theme/color-deprecated-semantic-tokens.js ***!
  \********************************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-tokens.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/* ---- DEPRECATED ---- */
				/* harmony default export */ __webpack_exports__[
					"default"
				] = function () {
					var themePrimitives =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"];
					return {
						// TODO(#2318) Remove Legacy Semantic Colors values in the next v10 major
						// since it's not used in the component specific tokens
						// and we ship semantic tokens separately

						/* ---- Legacy Semantic Colors ---- */
						// Font Color
						colorPrimary: themePrimitives.black,
						colorSecondary: themePrimitives.mono800,
						// Background
						background: themePrimitives.white,
						backgroundAlt: themePrimitives.white,
						backgroundInv: themePrimitives.primary,
						// Foreground
						foreground: themePrimitives.black,
						foregroundAlt: themePrimitives.mono800,
						foregroundInv: themePrimitives.white,
						// Borders
						border: themePrimitives.mono500,
						borderAlt: themePrimitives.mono600,
						borderFocus: themePrimitives.primary,
						borderError: themePrimitives.negative,
						// Shadow
						shadowFocus: "rgba(39, 110, 241, 0.32)",
						shadowError: "rgba(229, 73, 55, 0.32)"
					};
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/light-theme/color-semantic-tokens.js":
			/*!*********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/light-theme/color-semantic-tokens.js ***!
  \*********************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-tokens.js"
				);
				/* harmony import */ var _styles_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../../styles/util.js */ "../../node_modules/baseui/esm/styles/util.js"
				);
				/* harmony import */ var _tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../../tokens/colors.js */ "../../node_modules/baseui/esm/tokens/colors.js"
				);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/* harmony default export */ __webpack_exports__[
					"default"
				] = function () {
					var foundation =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"];
					var core = {
						// Background
						backgroundPrimary: foundation.primaryB,
						backgroundSecondary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray50,
						backgroundTertiary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray100,
						backgroundInversePrimary: foundation.primaryA,
						backgroundInverseSecondary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray800,
						// Content
						contentPrimary: foundation.primaryA,
						contentSecondary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray600,
						contentTertiary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray500,
						contentInversePrimary: foundation.primaryB,
						contentInverseSecondary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray300,
						contentInverseTertiary:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray400,
						// Border
						borderOpaque:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray200,
						borderTransparent: Object(
							_styles_util_js__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"]
						)(foundation.primaryA, "0.08"),
						borderSelected: foundation.primaryA,
						borderInverseOpaque:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray700,
						borderInverseTransparent: Object(
							_styles_util_js__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"]
						)(foundation.primaryB, "0.2"),
						borderInverseSelected: foundation.primaryB
					};
					var coreExtensions = {
						// Backgrounds
						backgroundStateDisabled:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray50,
						backgroundOverlayDark: Object(
							_styles_util_js__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"]
						)(
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].black,
							"0.3"
						),
						backgroundOverlayLight: Object(
							_styles_util_js__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"]
						)(
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].black,
							"0.08"
						),
						backgroundAccent: foundation.accent,
						backgroundNegative: foundation.negative,
						backgroundWarning: foundation.warning,
						backgroundPositive: foundation.positive,
						backgroundLightAccent:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].blue50,
						backgroundLightNegative:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].red50,
						backgroundLightWarning:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"]
								.yellow50,
						backgroundLightPositive:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].green50,
						backgroundAlwaysDark:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].black,
						backgroundAlwaysLight:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].white,
						// Content
						contentStateDisabled:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray400,
						contentAccent: foundation.accent,
						contentOnColor:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].white,
						contentNegative: foundation.negative,
						contentWarning:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"]
								.yellow500,
						contentPositive: foundation.positive,
						// Border
						borderStateDisabled:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].gray50,
						borderAccent:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].blue400,
						borderAccentLight:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].blue200,
						borderNegative:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].red200,
						borderWarning:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"]
								.yellow200,
						borderPositive:
							_tokens_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"].green200
					};
					return _objectSpread({}, core, {}, coreExtensions);
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/light-theme/color-tokens.js":
			/*!************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/light-theme/color-tokens.js ***!
  \************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../../tokens/index.js */ "../../node_modules/baseui/esm/tokens/index.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				// color constants
				var lightColorTokens = {
					// Primary Palette
					primaryA:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].black,
					primaryB:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].white,
					primary:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].black,
					primary50:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray50,
					primary100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray100,
					primary200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray200,
					primary300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray300,
					primary400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray400,
					primary500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray500,
					primary600:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray600,
					primary700:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray700,
					// Accent Palette
					accent:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue400,
					accent50:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue50,
					accent100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue100,
					accent200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue200,
					accent300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue300,
					accent400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue400,
					accent500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue500,
					accent600:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue600,
					accent700:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].blue700,
					// Negative Palette
					negative:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red400,
					negative50:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red50,
					negative100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red100,
					negative200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red200,
					negative300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red300,
					negative400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red400,
					negative500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red500,
					negative600:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red600,
					negative700:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].red700,
					// Warning Palette
					warning:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow400,
					warning50:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow50,
					warning100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow100,
					warning200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow200,
					warning300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow300,
					warning400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow400,
					warning500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow500,
					warning600:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow600,
					warning700:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow700,
					// Positive Palette
					positive:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green400,
					positive50:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green50,
					positive100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green100,
					positive200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green200,
					positive300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green300,
					positive400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green400,
					positive500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green500,
					positive600:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green600,
					positive700:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].green700,
					// Monochrome Palette
					white: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].white,
					black: _tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].black,
					mono100:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].white,
					mono200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray50,
					mono300:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray100,
					mono400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray200,
					mono500:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray300,
					mono600:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray400,
					mono700:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray500,
					mono800:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray600,
					mono900:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].gray700,
					mono1000:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].black,
					// Rating Palette,
					rating200:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow200,
					rating400:
						_tokens_index_js__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow400
				};
				/* harmony default export */ __webpack_exports__[
					"default"
				] = lightColorTokens;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/light-theme/create-light-theme.js":
			/*!******************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/light-theme/create-light-theme.js ***!
  \******************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return createLightTheme;
					}
				);
				/* harmony import */ var _shared_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../shared/animation.js */ "../../node_modules/baseui/esm/themes/shared/animation.js"
				);
				/* harmony import */ var _shared_borders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../shared/borders.js */ "../../node_modules/baseui/esm/themes/shared/borders.js"
				);
				/* harmony import */ var _shared_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../shared/breakpoints.js */ "../../node_modules/baseui/esm/themes/shared/breakpoints.js"
				);
				/* harmony import */ var _utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ../../utils/deep-merge.js */ "../../node_modules/baseui/esm/utils/deep-merge.js"
				);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-tokens.js"
				);
				/* harmony import */ var _color_component_tokens_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! ./color-component-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-component-tokens.js"
				);
				/* harmony import */ var _color_deprecated_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					/*! ./color-deprecated-semantic-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-deprecated-semantic-tokens.js"
				);
				/* harmony import */ var _color_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					/*! ./color-semantic-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-semantic-tokens.js"
				);
				/* harmony import */ var _shared_typography_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					/*! ../shared/typography.js */ "../../node_modules/baseui/esm/themes/shared/typography.js"
				);
				/* harmony import */ var _shared_grid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					/*! ../shared/grid.js */ "../../node_modules/baseui/esm/themes/shared/grid.js"
				);
				/* harmony import */ var _shared_lighting_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					/*! ../shared/lighting.js */ "../../node_modules/baseui/esm/themes/shared/lighting.js"
				);
				/* harmony import */ var _shared_media_query_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					/*! ../shared/media-query.js */ "../../node_modules/baseui/esm/themes/shared/media-query.js"
				);
				/* harmony import */ var _shared_sizing_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					/*! ../shared/sizing.js */ "../../node_modules/baseui/esm/themes/shared/sizing.js"
				);
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

				function _objectWithoutProperties(source, excluded) {
					if (source == null) return {};
					var target = _objectWithoutPropertiesLoose(source, excluded);
					var key, i;
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
						for (i = 0; i < sourceSymbolKeys.length; i++) {
							key = sourceSymbolKeys[i];
							if (excluded.indexOf(key) >= 0) continue;
							if (!Object.prototype.propertyIsEnumerable.call(source, key))
								continue;
							target[key] = source[key];
						}
					}
					return target;
				}

				function _objectWithoutPropertiesLoose(source, excluded) {
					if (source == null) return {};
					var target = {};
					var sourceKeys = Object.keys(source);
					var key, i;
					for (i = 0; i < sourceKeys.length; i++) {
						key = sourceKeys[i];
						if (excluded.indexOf(key) >= 0) continue;
						target[key] = source[key];
					}
					return target;
				}

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				function createLightTheme() {
					var primitives =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: {};
					var // Used to override default theme property values derived from primitives
						overrides = arguments.length > 1 ? arguments[1] : undefined;

					// Extract font tokens and color tokens from primitives
					var primaryFontFamily = primitives.primaryFontFamily,
						customColorTokens = _objectWithoutProperties(primitives, [
							"primaryFontFamily"
						]); // Assemble color tokens by overriding defaults with custom color tokens

					var colorTokens = _objectSpread(
						{},
						_color_tokens_js__WEBPACK_IMPORTED_MODULE_4__["default"],
						{},
						customColorTokens
					);

					var theme = {
						animation:
							_shared_animation_js__WEBPACK_IMPORTED_MODULE_0__["default"],
						borders: _shared_borders_js__WEBPACK_IMPORTED_MODULE_1__["default"],
						breakpoints:
							_shared_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__["default"],
						colors: _objectSpread(
							{},
							colorTokens,
							{},
							Object(
								_color_component_tokens_js__WEBPACK_IMPORTED_MODULE_5__[
									"default"
								]
							)(colorTokens),
							{},
							Object(
								_color_deprecated_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_6__[
									"default"
								]
							)(colorTokens),
							{},
							Object(
								_color_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_7__[
									"default"
								]
							)(colorTokens)
						),
						direction: "auto",
						grid: _shared_grid_js__WEBPACK_IMPORTED_MODULE_9__["default"],
						lighting:
							_shared_lighting_js__WEBPACK_IMPORTED_MODULE_10__["default"],
						mediaQuery:
							_shared_media_query_js__WEBPACK_IMPORTED_MODULE_11__["default"],
						sizing: _shared_sizing_js__WEBPACK_IMPORTED_MODULE_12__["default"],
						// If primaryFontFamily is not provided, we use our default font tokens
						typography: primaryFontFamily
							? Object(
									_shared_typography_js__WEBPACK_IMPORTED_MODULE_8__["default"]
							  )({
									primaryFontFamily: primaryFontFamily
							  })
							: Object(
									_shared_typography_js__WEBPACK_IMPORTED_MODULE_8__["default"]
							  )(),
						// TODO(#2318) Remove in v10, the next major version.
						// Do not use.
						zIndex: {
							modal: 2000
						}
					};
					return Object(
						_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_3__["default"]
					)(theme, overrides);
				}

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/light-theme/light-theme.js":
			/*!***********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/light-theme/light-theme.js ***!
  \***********************************************************************************************/
			/*! exports provided: LightTheme */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"LightTheme",
					function () {
						return LightTheme;
					}
				);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-tokens.js"
				);
				/* harmony import */ var _color_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./color-semantic-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-semantic-tokens.js"
				);
				/* harmony import */ var _color_component_tokens_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./color-component-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-component-tokens.js"
				);
				/* harmony import */ var _color_deprecated_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./color-deprecated-semantic-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-deprecated-semantic-tokens.js"
				);
				/* harmony import */ var _shared_borders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ../shared/borders.js */ "../../node_modules/baseui/esm/themes/shared/borders.js"
				);
				/* harmony import */ var _shared_lighting_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! ../shared/lighting.js */ "../../node_modules/baseui/esm/themes/shared/lighting.js"
				);
				/* harmony import */ var _shared_typography_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					/*! ../shared/typography.js */ "../../node_modules/baseui/esm/themes/shared/typography.js"
				);
				/* harmony import */ var _shared_animation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					/*! ../shared/animation.js */ "../../node_modules/baseui/esm/themes/shared/animation.js"
				);
				/* harmony import */ var _shared_breakpoints_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					/*! ../shared/breakpoints.js */ "../../node_modules/baseui/esm/themes/shared/breakpoints.js"
				);
				/* harmony import */ var _shared_grid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					/*! ../shared/grid.js */ "../../node_modules/baseui/esm/themes/shared/grid.js"
				);
				/* harmony import */ var _shared_media_query_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					/*! ../shared/media-query.js */ "../../node_modules/baseui/esm/themes/shared/media-query.js"
				);
				/* harmony import */ var _shared_sizing_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					/*! ../shared/sizing.js */ "../../node_modules/baseui/esm/themes/shared/sizing.js"
				);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var LightTheme = {
					name: "light-theme",
					colors: _objectSpread(
						{},
						_color_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"],
						{},
						Object(
							_color_component_tokens_js__WEBPACK_IMPORTED_MODULE_2__["default"]
						)(),
						{},
						Object(
							_color_deprecated_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_3__[
								"default"
							]
						)(),
						{},
						Object(
							_color_semantic_tokens_js__WEBPACK_IMPORTED_MODULE_1__["default"]
						)()
					),
					animation:
						_shared_animation_js__WEBPACK_IMPORTED_MODULE_7__["default"],
					breakpoints:
						_shared_breakpoints_js__WEBPACK_IMPORTED_MODULE_8__["default"],
					borders: _shared_borders_js__WEBPACK_IMPORTED_MODULE_4__["default"],
					direction: "auto",
					grid: _shared_grid_js__WEBPACK_IMPORTED_MODULE_9__["default"],
					lighting: _shared_lighting_js__WEBPACK_IMPORTED_MODULE_5__["default"],
					mediaQuery:
						_shared_media_query_js__WEBPACK_IMPORTED_MODULE_10__["default"],
					sizing: _shared_sizing_js__WEBPACK_IMPORTED_MODULE_11__["default"],
					typography: Object(
						_shared_typography_js__WEBPACK_IMPORTED_MODULE_6__["default"]
					)(),
					// TODO(#2318) Remove it in the next v10 major version.
					// Do not use.
					zIndex: {
						modal: 2000
					}
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/light-theme/primitives.js":
			/*!**********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/light-theme/primitives.js ***!
  \**********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _color_tokens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./color-tokens.js */ "../../node_modules/baseui/esm/themes/light-theme/color-tokens.js"
				);
				/* harmony import */ var _shared_typography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../shared/typography.js */ "../../node_modules/baseui/esm/themes/shared/typography.js"
				);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				// We don't use this ourselves. We provide it for backward compatability.
				// People may have used it to create their own custom theme.
				var primitives = _objectSpread(
					{},
					_color_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"],
					{},
					_shared_typography_js__WEBPACK_IMPORTED_MODULE_1__[
						"defaultFontTokens"
					]
				);

				/* harmony default export */ __webpack_exports__[
					"default"
				] = primitives;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/move-theme/dark-theme-with-move.js":
			/*!*******************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/move-theme/dark-theme-with-move.js ***!
  \*******************************************************************************************************/
			/*! exports provided: DarkThemeMove */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"DarkThemeMove",
					function () {
						return DarkThemeMove;
					}
				);
				/* harmony import */ var _utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../../utils/deep-merge.js */ "../../node_modules/baseui/esm/utils/deep-merge.js"
				);
				/* harmony import */ var _dark_theme_dark_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../dark-theme/dark-theme.js */ "../../node_modules/baseui/esm/themes/dark-theme/dark-theme.js"
				);
				/* harmony import */ var _typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./typography.js */ "../../node_modules/baseui/esm/themes/move-theme/typography.js"
				);
				/* harmony import */ var _shared_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ../shared/typography.js */ "../../node_modules/baseui/esm/themes/shared/typography.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var DarkThemeMove = Object(
					_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_0__["default"]
				)(
					{},
					_dark_theme_dark_theme_js__WEBPACK_IMPORTED_MODULE_1__["DarkTheme"],
					{
						name: "dark-theme-with-move",
						// For the move theme we need to override typography values
						// in the default darkTheme with a font values that reference
						// our custom font family. In addition to it we want to replace some
						// of the fonts with an additional secondary font that specified
						// in `moveTypography`. For it we'll get the typhography value built
						// with a custom font using `getTypograhy` helper and extend the result
						// value with the customized set of fonts that reference a secondary font
						typography: Object(
							_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_0__["default"]
						)(
							Object(
								_shared_typography_js__WEBPACK_IMPORTED_MODULE_3__["default"]
							)(_typography_js__WEBPACK_IMPORTED_MODULE_2__["fontTokens"]),
							_typography_js__WEBPACK_IMPORTED_MODULE_2__["typography"]
						)
					}
				);

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/move-theme/light-theme-with-move.js":
			/*!********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/move-theme/light-theme-with-move.js ***!
  \********************************************************************************************************/
			/*! exports provided: LightThemeMove */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"LightThemeMove",
					function () {
						return LightThemeMove;
					}
				);
				/* harmony import */ var _utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../../utils/deep-merge.js */ "../../node_modules/baseui/esm/utils/deep-merge.js"
				);
				/* harmony import */ var _light_theme_light_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../light-theme/light-theme.js */ "../../node_modules/baseui/esm/themes/light-theme/light-theme.js"
				);
				/* harmony import */ var _typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./typography.js */ "../../node_modules/baseui/esm/themes/move-theme/typography.js"
				);
				/* harmony import */ var _shared_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ../shared/typography.js */ "../../node_modules/baseui/esm/themes/shared/typography.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var LightThemeMove = Object(
					_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_0__["default"]
				)(
					{},
					_light_theme_light_theme_js__WEBPACK_IMPORTED_MODULE_1__[
						"LightTheme"
					],
					{
						name: "light-theme-with-move",
						// For the move theme we need to override typography values
						// in the default lightTheme with a font values that reference
						// our custom font family. In addition to it we want to replace some
						// of the fonts with an additional secondary font that specified
						// in `moveTypography`. For it we'll get the typhography value built
						// with a custom font using `getTypograhy` helper and extend the result
						// value with the customized set of fonts that reference a secondary font
						typography: Object(
							_utils_deep_merge_js__WEBPACK_IMPORTED_MODULE_0__["default"]
						)(
							Object(
								_shared_typography_js__WEBPACK_IMPORTED_MODULE_3__["default"]
							)(_typography_js__WEBPACK_IMPORTED_MODULE_2__["fontTokens"]),
							_typography_js__WEBPACK_IMPORTED_MODULE_2__["typography"]
						)
					}
				);

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/move-theme/typography.js":
			/*!*********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/move-theme/typography.js ***!
  \*********************************************************************************************/
			/*! exports provided: fontTokens, typography */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"fontTokens",
					function () {
						return fontTokens;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"typography",
					function () {
						return typography;
					}
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var fontTokens = {
					primaryFontFamily:
						'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
				};
				var secondaryFontFamily =
					'UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';
				var typography = {
					font1450: {
						fontFamily: secondaryFontFamily
					},
					font1350: {
						fontFamily: secondaryFontFamily
					},
					font1250: {
						fontFamily: secondaryFontFamily
					},
					font1150: {
						fontFamily: secondaryFontFamily
					},
					DisplayLarge: {
						fontFamily: secondaryFontFamily
					},
					DisplayMedium: {
						fontFamily: secondaryFontFamily
					},
					DisplaySmall: {
						fontFamily: secondaryFontFamily
					},
					DisplayXSmall: {
						fontFamily: secondaryFontFamily
					}
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/shared/animation.js":
			/*!****************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/shared/animation.js ***!
  \****************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var animation = {
					timing100: "100ms",
					timing200: "200ms",
					timing300: "300ms",
					timing400: "400ms",
					timing500: "500ms",
					timing600: "600ms",
					timing700: "700ms",
					timing800: "800ms",
					timing900: "900ms",
					timing1000: "1000ms",
					easeInCurve: "cubic-bezier(.8, .2, .6, 1)",
					easeOutCurve: "cubic-bezier(.2, .8, .4, 1)",
					easeInOutCurve: "cubic-bezier(0.4, 0, 0.2, 1)",
					easeInQuinticCurve: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
					easeOutQuinticCurve: "cubic-bezier(0.23, 1, 0.32, 1)",
					easeInOutQuinticCurve: "cubic-bezier(0.86, 0, 0.07, 1)",
					linearCurve: "cubic-bezier(0, 0, 1, 1)"
				};
				/* harmony default export */ __webpack_exports__["default"] = animation;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/shared/borders.js":
			/*!**************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/shared/borders.js ***!
  \**************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				// borderColor is defaulted to the light theme values.
				// Dark theme overrides the border colors.
				var borders = {
					border100: {
						borderColor: "hsla(0, 0%, 0%, 0.04)",
						borderStyle: "solid",
						borderWidth: "1px"
					},
					border200: {
						borderColor: "hsla(0, 0%, 0%, 0.08)",
						borderStyle: "solid",
						borderWidth: "1px"
					},
					border300: {
						borderColor: "hsla(0, 0%, 0%, 0.12)",
						borderStyle: "solid",
						borderWidth: "1px"
					},
					border400: {
						borderColor: "hsla(0, 0%, 0%, 0.16)",
						borderStyle: "solid",
						borderWidth: "1px"
					},
					border500: {
						borderColor: "hsla(0, 0%, 0%, 0.2)",
						borderStyle: "solid",
						borderWidth: "1px"
					},
					border600: {
						borderColor: "hsla(0, 0%, 0%, 0.24)",
						borderStyle: "solid",
						borderWidth: "1px"
					},
					radius100: "2px",
					radius200: "4px",
					radius300: "8px",
					radius400: "12px",

					/** Datepicker (Range), Progress Bar, Slider, Tag */
					useRoundedCorners: true,

					/** Button, ButtonGroup */
					buttonBorderRadius: "0px",

					/** Input, Select, Textarea, Checkbox */
					inputBorderRadius: "0px",

					/** Popover, Menu, Tooltip */
					popoverBorderRadius: "0px",

					/** Card, Datepicker, Modal, Toast, Notification */
					surfaceBorderRadius: "0px"
				};
				/* harmony default export */ __webpack_exports__["default"] = borders;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/shared/breakpoints.js":
			/*!******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/shared/breakpoints.js ***!
  \******************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var breakpoints = {
					small: 320,
					medium: 600,
					large: 1136
				};
				/* harmony default export */ __webpack_exports__[
					"default"
				] = breakpoints;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/shared/grid.js":
			/*!***********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/shared/grid.js ***!
  \***********************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var grid = {
					columns: [4, 8, 12],
					gutters: [16, 36, 36],
					margins: [16, 36, 64],
					gaps: 0,
					unit: "px",
					maxWidth: 1280
				};
				/* harmony default export */ __webpack_exports__["default"] = grid;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/shared/lighting.js":
			/*!***************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/shared/lighting.js ***!
  \***************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var lighting = {
					shadow400: "0 1px 4px hsla(0, 0%, 0%, 0.16)",
					shadow500: "0 2px 8px hsla(0, 0%, 0%, 0.16)",
					shadow600: "0 4px 16px hsla(0, 0%, 0%, 0.16)",
					shadow700: "0 8px 24px hsla(0, 0%, 0%, 0.16)",
					overlay0: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0)",
					overlay100: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)",
					overlay200: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)",
					overlay300: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)",
					overlay400: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)",
					overlay500: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.2)",
					overlay600: "inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)"
				};
				/* harmony default export */ __webpack_exports__["default"] = lighting;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/shared/media-query.js":
			/*!******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/shared/media-query.js ***!
  \******************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _helpers_responsive_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../../helpers/responsive-helpers.js */ "../../node_modules/baseui/esm/helpers/responsive-helpers.js"
				);
				/* harmony import */ var _breakpoints_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./breakpoints.js */ "../../node_modules/baseui/esm/themes/shared/breakpoints.js"
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var mediaQuery = {
					small: Object(
						_helpers_responsive_helpers_js__WEBPACK_IMPORTED_MODULE_0__[
							"getMediaQuery"
						]
					)(_breakpoints_js__WEBPACK_IMPORTED_MODULE_1__["default"].small),
					medium: Object(
						_helpers_responsive_helpers_js__WEBPACK_IMPORTED_MODULE_0__[
							"getMediaQuery"
						]
					)(_breakpoints_js__WEBPACK_IMPORTED_MODULE_1__["default"].medium),
					large: Object(
						_helpers_responsive_helpers_js__WEBPACK_IMPORTED_MODULE_0__[
							"getMediaQuery"
						]
					)(_breakpoints_js__WEBPACK_IMPORTED_MODULE_1__["default"].large)
				};
				/* harmony default export */ __webpack_exports__[
					"default"
				] = mediaQuery;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/shared/sizing.js":
			/*!*************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/shared/sizing.js ***!
  \*************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var sizing = {
					scale0: "2px",
					scale100: "4px",
					scale200: "6px",
					scale300: "8px",
					scale400: "10px",
					scale500: "12px",
					scale550: "14px",
					scale600: "16px",
					scale650: "18px",
					scale700: "20px",
					scale750: "22px",
					scale800: "24px",
					scale900: "32px",
					scale1000: "40px",
					scale1200: "48px",
					scale1400: "56px",
					scale1600: "64px",
					scale2400: "96px",
					scale3200: "128px",
					scale4800: "192px"
				};
				/* harmony default export */ __webpack_exports__["default"] = sizing;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/themes/shared/typography.js":
			/*!*****************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/themes/shared/typography.js ***!
  \*****************************************************************************************/
			/*! exports provided: defaultFontTokens, default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"defaultFontTokens",
					function () {
						return defaultFontTokens;
					}
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var defaultFontTokens = {
					primaryFontFamily:
						'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
				};
				/* harmony default export */ __webpack_exports__[
					"default"
				] = function () {
					var fontTokens =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: defaultFontTokens;
					var font100 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "12px",
						fontWeight: "normal",
						lineHeight: "20px"
					};
					var font150 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "12px",
						fontWeight: 500,
						lineHeight: "16px"
					};
					var font200 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "14px",
						fontWeight: "normal",
						lineHeight: "20px"
					};
					var font250 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "14px",
						fontWeight: 500,
						lineHeight: "16px"
					};
					var font300 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "16px",
						fontWeight: "normal",
						lineHeight: "24px"
					};
					var font350 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "16px",
						fontWeight: 500,
						lineHeight: "20px"
					};
					var font400 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "18px",
						fontWeight: "normal",
						lineHeight: "28px"
					};
					var font450 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "18px",
						fontWeight: 500,
						lineHeight: "24px"
					};
					var font550 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "20px",
						fontWeight: 500,
						lineHeight: "28px"
					};
					var font650 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "24px",
						fontWeight: 500,
						lineHeight: "32px"
					};
					var font750 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "28px",
						fontWeight: 500,
						lineHeight: "36px"
					};
					var font850 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "32px",
						fontWeight: 500,
						lineHeight: "40px"
					};
					var font950 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "36px",
						fontWeight: 500,
						lineHeight: "44px"
					};
					var font1050 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "40px",
						fontWeight: 500,
						lineHeight: "52px"
					};
					var font1150 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "36px",
						fontWeight: 500,
						lineHeight: "44px"
					};
					var font1250 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "44px",
						fontWeight: 500,
						lineHeight: "52px"
					};
					var font1350 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "52px",
						fontWeight: 500,
						lineHeight: "64px"
					};
					var font1450 = {
						fontFamily: fontTokens.primaryFontFamily,
						fontSize: "96px",
						fontWeight: 500,
						lineHeight: "112px"
					};
					return {
						font100: font100,
						font150: font150,
						font200: font200,
						font250: font250,
						font300: font300,
						font350: font350,
						font400: font400,
						font450: font450,
						font550: font550,
						font650: font650,
						font750: font750,
						font850: font850,
						font950: font950,
						font1050: font1050,
						font1150: font1150,
						font1250: font1250,
						font1350: font1350,
						font1450: font1450,
						ParagraphXSmall: font100,
						ParagraphSmall: font200,
						ParagraphMedium: font300,
						ParagraphLarge: font400,
						LabelXSmall: font150,
						LabelSmall: font250,
						LabelMedium: font350,
						LabelLarge: font450,
						HeadingXSmall: font550,
						HeadingSmall: font650,
						HeadingMedium: font750,
						HeadingLarge: font850,
						HeadingXLarge: font950,
						HeadingXXLarge: font1050,
						DisplayXSmall: font1150,
						DisplaySmall: font1250,
						DisplayMedium: font1350,
						DisplayLarge: font1450
					};
				};

				/***/
			},

		/***/ "../../node_modules/baseui/esm/toast/constants.js":
			/*!********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/toast/constants.js ***!
  \********************************************************************************/
			/*! exports provided: KIND, TYPE, PLACEMENT */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"KIND",
					function () {
						return KIND;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"TYPE",
					function () {
						return TYPE;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"PLACEMENT",
					function () {
						return PLACEMENT;
					}
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var KIND = Object.freeze({
					info: "info",
					positive: "positive",
					warning: "warning",
					negative: "negative"
				});
				var TYPE = Object.freeze({
					inline: "inline",
					toast: "toast"
				});
				var PLACEMENT = Object.freeze({
					topLeft: "topLeft",
					top: "top",
					topRight: "topRight",
					bottomRight: "bottomRight",
					bottom: "bottom",
					bottomLeft: "bottomLeft"
				});

				/***/
			},

		/***/ "../../node_modules/baseui/esm/toast/index.js":
			/*!****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/toast/index.js ***!
  \****************************************************************************/
			/*! exports provided: toaster, ToasterContainer, Toast, KIND, PLACEMENT, TYPE, StyledRoot, StyledBody, StyledCloseIcon */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _toaster_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./toaster.js */ "../../node_modules/baseui/esm/toast/toaster.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"toaster",
					function () {
						return _toaster_js__WEBPACK_IMPORTED_MODULE_0__["default"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"ToasterContainer",
					function () {
						return _toaster_js__WEBPACK_IMPORTED_MODULE_0__["ToasterContainer"];
					}
				);

				/* harmony import */ var _toast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./toast.js */ "../../node_modules/baseui/esm/toast/toast.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"Toast",
					function () {
						return _toast_js__WEBPACK_IMPORTED_MODULE_1__["default"];
					}
				);

				/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./constants.js */ "../../node_modules/baseui/esm/toast/constants.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"KIND",
					function () {
						return _constants_js__WEBPACK_IMPORTED_MODULE_2__["KIND"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"PLACEMENT",
					function () {
						return _constants_js__WEBPACK_IMPORTED_MODULE_2__["PLACEMENT"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"TYPE",
					function () {
						return _constants_js__WEBPACK_IMPORTED_MODULE_2__["TYPE"];
					}
				);

				/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./styled-components.js */ "../../node_modules/baseui/esm/toast/styled-components.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"StyledRoot",
					function () {
						return _styled_components_js__WEBPACK_IMPORTED_MODULE_3__["Root"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"StyledBody",
					function () {
						return _styled_components_js__WEBPACK_IMPORTED_MODULE_3__["Body"];
					}
				);

				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"StyledCloseIcon",
					function () {
						return _styled_components_js__WEBPACK_IMPORTED_MODULE_3__[
							"CloseIconSvg"
						];
					}
				);

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				// Constants

				// Styled elements

				// Flow

				/***/
			},

		/***/ "../../node_modules/baseui/esm/toast/locale.js":
			/*!*****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/toast/locale.js ***!
  \*****************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var locale = {
					close: "Close"
				};
				/* harmony default export */ __webpack_exports__["default"] = locale;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/toast/styled-components.js":
			/*!****************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/toast/styled-components.js ***!
  \****************************************************************************************/
			/*! exports provided: getPlacement, Root, InnerContainer, Body, CloseIconSvg */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"getPlacement",
					function () {
						return getPlacement;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"Root",
					function () {
						return Root;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"InnerContainer",
					function () {
						return InnerContainer;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"Body",
					function () {
						return Body;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"CloseIconSvg",
					function () {
						return CloseIconSvg;
					}
				);
				/* harmony import */ var _styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../styles/index.js */ "../../node_modules/baseui/esm/styles/index.js"
				);
				/* harmony import */ var _icon_styled_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../icon/styled-components.js */ "../../node_modules/baseui/esm/icon/styled-components.js"
				);
				/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./constants.js */ "../../node_modules/baseui/esm/toast/constants.js"
				);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				function getBackgroundColor(kind, type, theme) {
					var _KIND$info$KIND$posit;

					var isInline =
						type === _constants_js__WEBPACK_IMPORTED_MODULE_2__["TYPE"].inline;
					return ((_KIND$info$KIND$posit = {}),
					_defineProperty(
						_KIND$info$KIND$posit,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["KIND"].info,
						isInline
							? theme.colors.notificationInfoBackground
							: theme.colors.toastInfoBackground
					),
					_defineProperty(
						_KIND$info$KIND$posit,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["KIND"].positive,
						isInline
							? theme.colors.notificationPositiveBackground
							: theme.colors.toastPositiveBackground
					),
					_defineProperty(
						_KIND$info$KIND$posit,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["KIND"].warning,
						isInline
							? theme.colors.notificationWarningBackground
							: theme.colors.toastWarningBackground
					),
					_defineProperty(
						_KIND$info$KIND$posit,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["KIND"].negative,
						isInline
							? theme.colors.notificationNegativeBackground
							: theme.colors.toastNegativeBackground
					),
					_KIND$info$KIND$posit)[kind];
				}

				function getFontColor(kind, theme) {
					var _KIND$info$KIND$posit2;

					return ((_KIND$info$KIND$posit2 = {}),
					_defineProperty(
						_KIND$info$KIND$posit2,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["KIND"].info,
						theme.colors.notificationInfoText
					),
					_defineProperty(
						_KIND$info$KIND$posit2,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["KIND"].positive,
						theme.colors.notificationPositiveText
					),
					_defineProperty(
						_KIND$info$KIND$posit2,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["KIND"].warning,
						theme.colors.notificationWarningText
					),
					_defineProperty(
						_KIND$info$KIND$posit2,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["KIND"].negative,
						theme.colors.notificationNegativeText
					),
					_KIND$info$KIND$posit2)[kind];
				}

				function getPlacement(placement) {
					var _PLACEMENT$topLeft$PL;

					return ((_PLACEMENT$topLeft$PL = {}),
					_defineProperty(
						_PLACEMENT$topLeft$PL,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["PLACEMENT"].topLeft,
						{
							top: 0,
							alignItems: "flex-start",
							justifyContent: "flex-start",
							flexDirection: "column"
						}
					),
					_defineProperty(
						_PLACEMENT$topLeft$PL,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["PLACEMENT"].top,
						{
							top: 0,
							alignItems: "center",
							justifyContent: "flex-start",
							flexDirection: "column"
						}
					),
					_defineProperty(
						_PLACEMENT$topLeft$PL,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["PLACEMENT"].topRight,
						{
							top: 0,
							alignItems: "flex-end",
							justifyContent: "flex-start",
							flexDirection: "column"
						}
					),
					_defineProperty(
						_PLACEMENT$topLeft$PL,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["PLACEMENT"].bottomRight,
						{
							bottom: 0,
							alignItems: "flex-end",
							justifyContent: "flex-end",
							flexDirection: "column-reverse"
						}
					),
					_defineProperty(
						_PLACEMENT$topLeft$PL,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["PLACEMENT"].bottom,
						{
							bottom: 0,
							alignItems: "center",
							justifyContent: "flex-end",
							flexDirection: "column-reverse"
						}
					),
					_defineProperty(
						_PLACEMENT$topLeft$PL,
						_constants_js__WEBPACK_IMPORTED_MODULE_2__["PLACEMENT"].bottomLeft,
						{
							bottom: 0,
							alignItems: "flex-start",
							justifyContent: "flex-end",
							flexDirection: "column-reverse"
						}
					),
					_PLACEMENT$topLeft$PL)[placement];
				} // $FlowFixMe https://github.com/facebook/flow/issues/7745

				var Root = Object(
					_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"]
				)("div", function (props) {
					var $placement = props.$placement,
						$theme = props.$theme;
					return _objectSpread(
						{
							pointerEvents: "none",
							position: "fixed",
							right: 0,
							left: 0,
							display: "flex",
							marginTop: $theme.sizing.scale300,
							marginBottom: $theme.sizing.scale300,
							marginLeft: $theme.sizing.scale600,
							marginRight: $theme.sizing.scale600
						},
						getPlacement($placement)
					);
				}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

				Root.displayName = "Root";
				var InnerContainer = Object(
					_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"]
				)("div", {}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

				InnerContainer.displayName = "InnerContainer";
				var Body = Object(
					_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"]
				)("div", function (props) {
					var $isVisible = props.$isVisible,
						$kind = props.$kind,
						$type = props.$type,
						$theme = props.$theme;
					var isInline =
						$type === _constants_js__WEBPACK_IMPORTED_MODULE_2__["TYPE"].inline;
					return _objectSpread({}, $theme.typography.font250, {
						pointerEvents: "auto",
						color: isInline
							? getFontColor($kind, $theme)
							: $theme.colors.toastText,
						height: "auto",
						width: "288px",
						paddingTop: $theme.sizing.scale600,
						paddingRight: $theme.sizing.scale600,
						paddingBottom: $theme.sizing.scale600,
						paddingLeft: $theme.sizing.scale600,
						marginTop: $theme.sizing.scale300,
						marginBottom: $theme.sizing.scale300,
						backgroundColor:
							getBackgroundColor($kind, $type, $theme) || $theme.colors.accent,
						borderTopLeftRadius: $theme.borders.surfaceBorderRadius,
						borderTopRightRadius: $theme.borders.surfaceBorderRadius,
						borderBottomRightRadius: $theme.borders.surfaceBorderRadius,
						borderBottomLeftRadius: $theme.borders.surfaceBorderRadius,
						boxShadow: isInline ? "none" : $theme.lighting.shadow600,
						opacity: $isVisible ? 1 : 0,
						transitionProperty: "all",
						transitionDuration: $theme.animation.timing200,
						transitionTimingFunction: $theme.animation.easeInOutCurve,
						display: "flex",
						justifyContent: "space-between"
					});
				}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

				Body.displayName = "Body";
				var CloseIconSvg = Object(
					_styles_index_js__WEBPACK_IMPORTED_MODULE_0__["styled"]
				)("svg", function (props) {
					return _objectSpread(
						{},
						Object(
							_icon_styled_components_js__WEBPACK_IMPORTED_MODULE_1__[
								"getSvgStyles"
							]
						)(props),
						{
							cursor: "pointer",
							width: props.$size || "16px",
							flexShrink: 0,
							outline: props.$isFocusVisible
								? "3px solid ".concat(props.$theme.colors.accent)
								: "none"
						}
					);
				});
				CloseIconSvg.displayName = "CloseIconSvg";

				/***/
			},

		/***/ "../../node_modules/baseui/esm/toast/toast.js":
			/*!****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/toast/toast.js ***!
  \****************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../helpers/overrides.js */ "../../node_modules/baseui/esm/helpers/overrides.js"
				);
				/* harmony import */ var _icon_delete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../icon/delete.js */ "../../node_modules/baseui/esm/icon/delete.js"
				);
				/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./styled-components.js */ "../../node_modules/baseui/esm/toast/styled-components.js"
				);
				/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ./constants.js */ "../../node_modules/baseui/esm/toast/constants.js"
				);
				/* harmony import */ var _locale_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! ../locale/index.js */ "../../node_modules/baseui/esm/locale/index.js"
				);
				/* harmony import */ var _utils_focusVisible_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					/*! ../utils/focusVisible.js */ "../../node_modules/baseui/esm/utils/focusVisible.js"
				);
				function _typeof(obj) {
					"@babel/helpers - typeof";
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof(obj);
				}

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

				function _slicedToArray(arr, i) {
					return (
						_arrayWithHoles(arr) ||
						_iterableToArrayLimit(arr, i) ||
						_nonIterableRest()
					);
				}

				function _nonIterableRest() {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance"
					);
				}

				function _iterableToArrayLimit(arr, i) {
					if (
						!(
							Symbol.iterator in Object(arr) ||
							Object.prototype.toString.call(arr) === "[object Arguments]"
						)
					) {
						return;
					}
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = undefined;
					try {
						for (
							var _i = arr[Symbol.iterator](), _s;
							!(_n = (_s = _i.next()).done);
							_n = true
						) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}

				function _arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				function _createClass(Constructor, protoProps, staticProps) {
					if (protoProps) _defineProperties(Constructor.prototype, protoProps);
					if (staticProps) _defineProperties(Constructor, staticProps);
					return Constructor;
				}

				function _possibleConstructorReturn(self, call) {
					if (
						call &&
						(_typeof(call) === "object" || typeof call === "function")
					) {
						return call;
					}
					return _assertThisInitialized(self);
				}

				function _getPrototypeOf(o) {
					_getPrototypeOf = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function _getPrototypeOf(o) {
								return o.__proto__ || Object.getPrototypeOf(o);
						  };
					return _getPrototypeOf(o);
				}

				function _assertThisInitialized(self) {
					if (self === void 0) {
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					}
					return self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					}
					subClass.prototype = Object.create(
						superClass && superClass.prototype,
						{
							constructor: {
								value: subClass,
								writable: true,
								configurable: true
							}
						}
					);
					if (superClass) _setPrototypeOf(subClass, superClass);
				}

				function _setPrototypeOf(o, p) {
					_setPrototypeOf =
						Object.setPrototypeOf ||
						function _setPrototypeOf(o, p) {
							o.__proto__ = p;
							return o;
						};
					return _setPrototypeOf(o, p);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/* global document */

				var Toast =
					/*#__PURE__*/
					(function (_React$Component) {
						_inherits(Toast, _React$Component);

						function Toast(props) {
							var _this;

							_classCallCheck(this, Toast);

							_this = _possibleConstructorReturn(
								this,
								_getPrototypeOf(Toast).call(this, props)
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"autoHideTimeout",
								void 0
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"animateInTimer",
								void 0
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"animateOutCompleteTimer",
								void 0
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"closeRef",
								void 0
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"previouslyFocusedElement",
								void 0
							);

							_defineProperty(_assertThisInitialized(_this), "state", {
								isVisible: false,
								isRendered: true,
								isFocusVisible: false
							});

							_defineProperty(
								_assertThisInitialized(_this),
								"handleFocus",
								function (event) {
									if (
										Object(
											_utils_focusVisible_js__WEBPACK_IMPORTED_MODULE_6__[
												"isFocusVisible"
											]
										)(event)
									) {
										_this.setState({
											isFocusVisible: true
										});
									}
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"handleBlur",
								function (event) {
									if (_this.state.isFocusVisible !== false) {
										_this.setState({
											isFocusVisible: false
										});
									}
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"animateIn",
								function () {
									// Defer to next event loop
									_this.animateInTimer = setTimeout(function () {
										_this.setState({
											isVisible: true
										});
									}, 0);
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"animateOut",
								function () {
									var callback =
										arguments.length > 0 && arguments[0] !== undefined
											? arguments[0]
											: function () {};

									_this.setState({
										isVisible: false
									}); // Remove the toast from the DOM after animation finishes

									_this.animateOutCompleteTimer = setTimeout(function () {
										_this.setState({
											isRendered: false
										});

										callback();
									}, 600);
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"dismiss",
								function () {
									_this.animateOut(_this.props.onClose);

									if (_this.props.autoFocus && _this.previouslyFocusedElement) {
										_this.previouslyFocusedElement.focus();
									}
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"onFocus",
								function (e) {
									clearTimeout(_this.autoHideTimeout);
									clearTimeout(_this.animateOutCompleteTimer);
									typeof _this.props.onFocus === "function" &&
										_this.props.onFocus(e);
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"onMouseEnter",
								function (e) {
									clearTimeout(_this.autoHideTimeout);
									clearTimeout(_this.animateOutCompleteTimer);
									typeof _this.props.onMouseEnter === "function" &&
										_this.props.onMouseEnter(e);
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"onBlur",
								function (e) {
									_this.startTimeout();

									typeof _this.props.onBlur === "function" &&
										_this.props.onBlur(e);
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"onMouseLeave",
								function (e) {
									_this.startTimeout();

									typeof _this.props.onMouseLeave === "function" &&
										_this.props.onMouseLeave(e);
								}
							);

							_this.closeRef = react__WEBPACK_IMPORTED_MODULE_0__[
								"createRef"
							]();
							_this.previouslyFocusedElement = null;
							return _this;
						}

						_createClass(Toast, [
							{
								key: "componentDidMount",
								value: function componentDidMount() {
									this.animateIn();
									this.startTimeout();

									if (
										typeof document !== "undefined" &&
										this.props.autoFocus &&
										this.closeRef &&
										this.closeRef.current &&
										this.closeRef.current.focus &&
										typeof this.closeRef.current.focus === "function"
									) {
										this.previouslyFocusedElement = document.activeElement; // $FlowFixMe: CloseIcon is `mixed` type so doesn't like `focus` call.

										this.closeRef.current.focus();
										this.setState({
											isFocusVisible: true
										});
									}
								}
							},
							{
								key: "componentDidUpdate",
								value: function componentDidUpdate(prevProps) {
									if (
										this.props.autoHideDuration !==
											prevProps.autoHideDuration ||
										this.props.__updated !== prevProps.__updated
									) {
										this.startTimeout();
									}
								}
							},
							{
								key: "componentWillUnmount",
								value: function componentWillUnmount() {
									this.clearTimeout();
								}
							},
							{
								key: "startTimeout",
								value: function startTimeout() {
									if (this.props.autoHideDuration) {
										if (this.autoHideTimeout) {
											clearTimeout(this.autoHideTimeout);
										}

										this.autoHideTimeout = setTimeout(
											this.dismiss,
											this.props.autoHideDuration
										);
									}
								}
							},
							{
								key: "clearTimeout",
								value: (function (_clearTimeout) {
									function clearTimeout() {
										return _clearTimeout.apply(this, arguments);
									}

									clearTimeout.toString = function () {
										return _clearTimeout.toString();
									};

									return clearTimeout;
								})(function () {
									[
										this.autoHideTimeout,
										this.animateInTimer,
										this.animateOutCompleteTimer
									].forEach(function (timerId) {
										if (timerId) {
											clearTimeout(timerId);
										}
									});
								})
							},
							{
								key: "getSharedProps",
								value: function getSharedProps() {
									var _this$props = this.props,
										kind = _this$props.kind,
										notificationType = _this$props.notificationType,
										closeable = _this$props.closeable;
									var _this$state = this.state,
										isRendered = _this$state.isRendered,
										isVisible = _this$state.isVisible;
									return {
										$kind: kind,
										$type: notificationType,
										$closeable: closeable,
										$isRendered: isRendered,
										$isVisible: isVisible
									};
								}
							},
							{
								key: "render",
								value: function render() {
									var _this2 = this;

									var _this$props2 = this.props,
										children = _this$props2.children,
										closeable = _this$props2.closeable;
									var isRendered = this.state.isRendered;
									var _this$props$overrides = this.props.overrides,
										BodyOverride = _this$props$overrides.Body,
										CloseIconOverride = _this$props$overrides.CloseIcon,
										InnerContainerOverride =
											_this$props$overrides.InnerContainer;

									var _getOverrides = Object(
											_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__[
												"getOverrides"
											]
										)(
											BodyOverride,
											_styled_components_js__WEBPACK_IMPORTED_MODULE_3__["Body"]
										),
										_getOverrides2 = _slicedToArray(_getOverrides, 2),
										Body = _getOverrides2[0],
										bodyProps = _getOverrides2[1];

									var _getOverrides3 = Object(
											_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__[
												"getOverrides"
											]
										)(
											InnerContainerOverride,
											_styled_components_js__WEBPACK_IMPORTED_MODULE_3__[
												"InnerContainer"
											]
										),
										_getOverrides4 = _slicedToArray(_getOverrides3, 2),
										InnerContainer = _getOverrides4[0],
										innerContainerProps = _getOverrides4[1];

									var _getOverrides5 = Object(
											_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__[
												"getOverrides"
											]
										)(
											CloseIconOverride,
											_styled_components_js__WEBPACK_IMPORTED_MODULE_3__[
												"CloseIconSvg"
											]
										),
										_getOverrides6 = _slicedToArray(_getOverrides5, 2),
										CloseIcon = _getOverrides6[0],
										closeIconProps = _getOverrides6[1];

									var closeIconOverrides = Object(
										_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_1__[
											"mergeOverrides"
										]
									)(
										{
											Svg: {
												component: CloseIcon
											}
										}, // $FlowFixMe
										{
											Svg: CloseIconOverride
										}
									);
									var sharedProps = this.getSharedProps();

									if (!isRendered) {
										return null;
									}

									return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
										_locale_index_js__WEBPACK_IMPORTED_MODULE_5__[
											"LocaleContext"
										].Consumer,
										null,
										function (locale) {
											return react__WEBPACK_IMPORTED_MODULE_0__[
												"createElement"
											](
												Body,
												_extends(
													{
														role: "alert",
														"data-baseweb":
															_this2.props["data-baseweb"] || "toast"
													},
													sharedProps,
													bodyProps,
													{
														// the properties below have to go after overrides
														onBlur: _this2.onBlur,
														onFocus: _this2.onFocus,
														onMouseEnter: _this2.onMouseEnter,
														onMouseLeave: _this2.onMouseLeave
													}
												),
												react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
													InnerContainer,
													_extends({}, sharedProps, innerContainerProps),
													typeof children === "function"
														? children({
																dismiss: _this2.dismiss
														  })
														: children
												),
												closeable
													? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
															_icon_delete_js__WEBPACK_IMPORTED_MODULE_2__[
																"default"
															],
															_extends(
																{
																	ref: _this2.closeRef,
																	role: "button",
																	tabIndex: 0,
																	$isFocusVisible: _this2.state.isFocusVisible,
																	onClick: _this2.dismiss,
																	onKeyPress: function onKeyPress(event) {
																		if (event.key === "Enter") {
																			_this2.dismiss();
																		}
																	},
																	title: locale.toast.close
																},
																sharedProps,
																closeIconProps,
																{
																	onFocus: Object(
																		_utils_focusVisible_js__WEBPACK_IMPORTED_MODULE_6__[
																			"forkFocus"
																		]
																	)(closeIconProps, _this2.handleFocus),
																	onBlur: Object(
																		_utils_focusVisible_js__WEBPACK_IMPORTED_MODULE_6__[
																			"forkBlur"
																		]
																	)(closeIconProps, _this2.handleBlur),
																	overrides: closeIconOverrides
																}
															)
													  )
													: null
											);
										}
									);
								}
							}
						]);

						return Toast;
					})(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

				_defineProperty(Toast, "defaultProps", {
					autoFocus: false,
					autoHideDuration: 0,
					closeable: true,
					kind: _constants_js__WEBPACK_IMPORTED_MODULE_4__["KIND"].info,
					notificationType:
						_constants_js__WEBPACK_IMPORTED_MODULE_4__["TYPE"].toast,
					// Do we need a separate handler for
					// when a notification dismisses automatically
					onClose: function onClose() {},
					onBlur: function onBlur() {},
					onFocus: function onFocus() {},
					onMouseEnter: function onMouseEnter() {},
					onMouseLeave: function onMouseLeave() {},
					overrides: {}
				});

				/* harmony default export */ __webpack_exports__["default"] = Toast;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/toast/toaster.js":
			/*!******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/toast/toaster.js ***!
  \******************************************************************************/
			/*! exports provided: ToasterContainer, default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"ToasterContainer",
					function () {
						return ToasterContainer;
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! react-dom */ "../../node_modules/react-dom/index.js"
				);
				/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					react_dom__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var _helpers_overrides_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../helpers/overrides.js */ "../../node_modules/baseui/esm/helpers/overrides.js"
				);
				/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./constants.js */ "../../node_modules/baseui/esm/toast/constants.js"
				);
				/* harmony import */ var _styled_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ./styled-components.js */ "../../node_modules/baseui/esm/toast/styled-components.js"
				);
				/* harmony import */ var _toast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! ./toast.js */ "../../node_modules/baseui/esm/toast/toast.js"
				);
				function _typeof(obj) {
					"@babel/helpers - typeof";
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof(obj);
				}

				function _slicedToArray(arr, i) {
					return (
						_arrayWithHoles(arr) ||
						_iterableToArrayLimit(arr, i) ||
						_nonIterableRest()
					);
				}

				function _nonIterableRest() {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance"
					);
				}

				function _iterableToArrayLimit(arr, i) {
					if (
						!(
							Symbol.iterator in Object(arr) ||
							Object.prototype.toString.call(arr) === "[object Arguments]"
						)
					) {
						return;
					}
					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = undefined;
					try {
						for (
							var _i = arr[Symbol.iterator](), _s;
							!(_n = (_s = _i.next()).done);
							_n = true
						) {
							_arr.push(_s.value);
							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}
					return _arr;
				}

				function _arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}

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

				function _objectWithoutProperties(source, excluded) {
					if (source == null) return {};
					var target = _objectWithoutPropertiesLoose(source, excluded);
					var key, i;
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
						for (i = 0; i < sourceSymbolKeys.length; i++) {
							key = sourceSymbolKeys[i];
							if (excluded.indexOf(key) >= 0) continue;
							if (!Object.prototype.propertyIsEnumerable.call(source, key))
								continue;
							target[key] = source[key];
						}
					}
					return target;
				}

				function _objectWithoutPropertiesLoose(source, excluded) {
					if (source == null) return {};
					var target = {};
					var sourceKeys = Object.keys(source);
					var key, i;
					for (i = 0; i < sourceKeys.length; i++) {
						key = sourceKeys[i];
						if (excluded.indexOf(key) >= 0) continue;
						target[key] = source[key];
					}
					return target;
				}

				function _toConsumableArray(arr) {
					return (
						_arrayWithoutHoles(arr) ||
						_iterableToArray(arr) ||
						_nonIterableSpread()
					);
				}

				function _nonIterableSpread() {
					throw new TypeError(
						"Invalid attempt to spread non-iterable instance"
					);
				}

				function _iterableToArray(iter) {
					if (
						Symbol.iterator in Object(iter) ||
						Object.prototype.toString.call(iter) === "[object Arguments]"
					)
						return Array.from(iter);
				}

				function _arrayWithoutHoles(arr) {
					if (Array.isArray(arr)) {
						for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
							arr2[i] = arr[i];
						}
						return arr2;
					}
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

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				function _createClass(Constructor, protoProps, staticProps) {
					if (protoProps) _defineProperties(Constructor.prototype, protoProps);
					if (staticProps) _defineProperties(Constructor, staticProps);
					return Constructor;
				}

				function _possibleConstructorReturn(self, call) {
					if (
						call &&
						(_typeof(call) === "object" || typeof call === "function")
					) {
						return call;
					}
					return _assertThisInitialized(self);
				}

				function _getPrototypeOf(o) {
					_getPrototypeOf = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function _getPrototypeOf(o) {
								return o.__proto__ || Object.getPrototypeOf(o);
						  };
					return _getPrototypeOf(o);
				}

				function _assertThisInitialized(self) {
					if (self === void 0) {
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					}
					return self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					}
					subClass.prototype = Object.create(
						superClass && superClass.prototype,
						{
							constructor: {
								value: subClass,
								writable: true,
								configurable: true
							}
						}
					);
					if (superClass) _setPrototypeOf(subClass, superClass);
				}

				function _setPrototypeOf(o, p) {
					_setPrototypeOf =
						Object.setPrototypeOf ||
						function _setPrototypeOf(o, p) {
							o.__proto__ = p;
							return o;
						};
					return _setPrototypeOf(o, p);
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

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				var toasterRef = null;
				var ToasterContainer =
					/*#__PURE__*/
					(function (_React$Component) {
						_inherits(ToasterContainer, _React$Component);

						function ToasterContainer(_props) {
							var _this;

							_classCallCheck(this, ToasterContainer);

							_this = _possibleConstructorReturn(
								this,
								_getPrototypeOf(ToasterContainer).call(this, _props)
							);

							_defineProperty(_assertThisInitialized(_this), "state", {
								isMounted: false,
								toasts: []
							});

							_defineProperty(
								_assertThisInitialized(_this),
								"dismissHandlers",
								{}
							);

							_defineProperty(_assertThisInitialized(_this), "toastId", 0);

							_defineProperty(
								_assertThisInitialized(_this),
								"getToastProps",
								function (props) {
									var _this$props = _this.props,
										autoFocus = _this$props.autoFocus,
										autoHideDuration = _this$props.autoHideDuration;
									var key = props.key || "toast-".concat(_this.toastId++);
									return _objectSpread(
										{
											autoFocus: autoFocus,
											autoHideDuration: autoHideDuration
										},
										props,
										{
											key: key
										}
									);
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"show",
								function () {
									var props =
										arguments.length > 0 && arguments[0] !== undefined
											? arguments[0]
											: {};

									if (
										_this.state.toasts
											.map(function (t) {
												return t.key;
											})
											.includes(props.key)
									) {
										_this.update(props.key, props);

										return props.key;
									}

									var toastProps = _this.getToastProps(props);

									_this.setState(function (_ref) {
										var toasts = _ref.toasts;
										return {
											toasts: [].concat(_toConsumableArray(toasts), [
												toastProps
											])
										};
									});

									return toastProps.key;
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"update",
								function (key, props) {
									_this.setState(function (_ref2) {
										var toasts = _ref2.toasts;
										var updatedToasts = toasts.map(function (toast) {
											if (toast.key === key) {
												var updatedToastProps = _objectSpread(
													{},
													toast,
													{},
													_this.getToastProps(
														_objectSpread(
															{
																autoHideDuration: toast.autoHideDuration
															},
															props
														)
													),
													{
														key: key
													},
													_this.props.resetAutoHideTimerOnUpdate
														? {
																__updated: (parseInt(toast.__updated) || 0) + 1
														  }
														: {}
												);

												return updatedToastProps;
											}

											return toast;
										});
										return {
											toasts: updatedToasts
										};
									});
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"dismiss",
								function (key) {
									if (_this.dismissHandlers[key]) {
										_this.dismissHandlers[key]();
									}
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"clearAll",
								function () {
									Object.keys(_this.dismissHandlers).forEach(function (key) {
										_this.dismissHandlers[key]();
									});
								}
							);

							_defineProperty(_assertThisInitialized(_this), "clear", function (
								key
							) {
								key === undefined ? _this.clearAll() : _this.dismiss(key);
							});

							_defineProperty(
								_assertThisInitialized(_this),
								"internalOnClose",
								function (key) {
									delete _this.dismissHandlers[key];

									_this.setState(function (_ref3) {
										var toasts = _ref3.toasts;
										return {
											toasts: toasts.filter(function (t) {
												return !(t.key === key);
											})
										};
									});
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"getOnCloseHandler",
								function (key, onClose) {
									return function () {
										_this.internalOnClose(key);

										typeof onClose === "function" && onClose();
									};
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"renderToast",
								function (toastProps) {
									var onClose = toastProps.onClose,
										children = toastProps.children,
										key = toastProps.key,
										restProps = _objectWithoutProperties(toastProps, [
											"onClose",
											"children",
											"key"
										]);

									var _this$props$overrides = _this.props.overrides,
										BodyOverride = _this$props$overrides.ToastBody,
										CloseIconOverride = _this$props$overrides.ToastCloseIcon,
										InnerContainerOverride =
											_this$props$overrides.ToastInnerContainer;
									var globalToastOverrides = Object(
										_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_2__[
											"mergeOverrides"
										]
									)(
										{
											Body:
												_styled_components_js__WEBPACK_IMPORTED_MODULE_4__[
													"Body"
												],
											CloseIcon:
												_styled_components_js__WEBPACK_IMPORTED_MODULE_4__[
													"CloseIconSvg"
												],
											InnerContainer:
												_styled_components_js__WEBPACK_IMPORTED_MODULE_4__[
													"InnerContainer"
												]
										}, // $FlowFixMe
										{
											Body: BodyOverride,
											CloseIcon: CloseIconOverride,
											InnerContainer: InnerContainerOverride
										}
									);
									var toastOverrides = Object(
										_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_2__[
											"mergeOverrides"
										]
									)(globalToastOverrides, toastProps.overrides);
									return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
										_toast_js__WEBPACK_IMPORTED_MODULE_5__["default"],
										_extends({}, restProps, {
											overrides: toastOverrides,
											key: key,
											onClose: _this.getOnCloseHandler(key, onClose)
										}),
										function (_ref4) {
											var dismiss = _ref4.dismiss;
											_this.dismissHandlers[key] = dismiss; // $FlowFixMe

											return children;
										}
									);
								}
							);

							_defineProperty(
								_assertThisInitialized(_this),
								"getSharedProps",
								function () {
									var placement = _this.props.placement;
									return {
										$placement: placement
									};
								}
							);

							toasterRef = _assertThisInitialized(_this);
							return _this;
						}

						_createClass(ToasterContainer, [
							{
								key: "componentDidMount",
								value: function componentDidMount() {
									this.setState({
										isMounted: true
									});
								}
							},
							{
								key: "render",
								value: function render() {
									var sharedProps = this.getSharedProps();
									var RootOverride = this.props.overrides.Root;

									var _getOverrides = Object(
											_helpers_overrides_js__WEBPACK_IMPORTED_MODULE_2__[
												"getOverrides"
											]
										)(
											RootOverride,
											_styled_components_js__WEBPACK_IMPORTED_MODULE_4__["Root"]
										),
										_getOverrides2 = _slicedToArray(_getOverrides, 2),
										Root = _getOverrides2[0],
										rootProps = _getOverrides2[1];

									var toastsLength = this.state.toasts.length;
									var toastsToRender = []; // render the toasts from the newest at the start
									// to the oldest at the end
									// eslint-disable-next-line for-direction

									for (var _i2 = toastsLength - 1; _i2 >= 0; _i2--) {
										toastsToRender.push(
											this.renderToast(this.state.toasts[_i2])
										);
									}

									var root = react__WEBPACK_IMPORTED_MODULE_0__[
										"createElement"
									](
										Root,
										_extends(
											{
												"data-baseweb": "toaster"
											},
											sharedProps,
											rootProps
										),
										toastsToRender
									);

									if (this.state.isMounted) {
										// Only render on the browser (portals aren't supported server-side)
										if (this.props.usePortal) {
											if (typeof document !== "undefined") {
												return react__WEBPACK_IMPORTED_MODULE_0__[
													"createElement"
												](
													react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
													null,
													react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(
														root, // $FlowFixMe
														document.body
													),
													this.props.children
												);
											}
										} else {
											return react__WEBPACK_IMPORTED_MODULE_0__[
												"createElement"
											](
												react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
												null,
												root,
												this.props.children
											);
										}
									}

									return null;
								}
							}
						]);

						return ToasterContainer;
					})(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

				_defineProperty(ToasterContainer, "defaultProps", {
					children: null,
					placement:
						_constants_js__WEBPACK_IMPORTED_MODULE_3__["PLACEMENT"].top,
					usePortal: true,
					overrides: {},
					autoFocus: false,
					autoHideDuration: 0,
					resetAutoHideTimerOnUpdate: true
				});

				var toaster = {
					getRef: function getRef() {
						return toasterRef;
					},
					show: function show(children) {
						var props =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: {};
						// toasts can not be added until Toaster is mounted
						// no SSR for the `toaster.show()`
						var toasterInstance = this.getRef();

						if (toasterInstance) {
							return toasterInstance.show(
								_objectSpread({}, props, {
									children: children
								})
							);
						} else if (true) {
							throw new Error(
								"Please make sure to add the ToasterContainer to your application before adding toasts! You can find more information here: https://baseweb.design/components/toast"
							);
						}
					},
					info: function info(children) {
						var props =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: {};
						return this.show(
							children,
							_objectSpread({}, props, {
								kind: _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].info
							})
						);
					},
					positive: function positive(children) {
						var props =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: {};
						return this.show(
							children,
							_objectSpread({}, props, {
								kind:
									_constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].positive
							})
						);
					},
					warning: function warning(children) {
						var props =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: {};
						return this.show(
							children,
							_objectSpread({}, props, {
								kind: _constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].warning
							})
						);
					},
					negative: function negative(children) {
						var props =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: {};
						return this.show(
							children,
							_objectSpread({}, props, {
								kind:
									_constants_js__WEBPACK_IMPORTED_MODULE_3__["KIND"].negative
							})
						);
					},
					update: function update(key, props) {
						var toasterInstance = this.getRef();

						if (toasterInstance) {
							toasterInstance.update(key, props);
						} else if (true) {
							// eslint-disable-next-line no-console
							console.error("No ToasterContainer is mounted yet.");
						}
					},
					clear: function clear(key) {
						var toasterInstance = this.getRef();

						if (toasterInstance) {
							toasterInstance.clear(key);
						} else if (true) {
							// eslint-disable-next-line no-console
							console.error("No ToasterContainer is mounted yet.");
						}
					}
				};
				/* harmony default export */ __webpack_exports__["default"] = toaster;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/tokens/colors.js":
			/*!******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/tokens/colors.js ***!
  \******************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				var colors = {
					white: "#FFFFFF",
					gray50: "#F6F6F6",
					gray100: "#EEEEEE",
					gray200: "#E2E2E2",
					gray300: "#CBCBCB",
					gray400: "#AFAFAF",
					gray500: "#757575",
					gray600: "#545454",
					gray700: "#333333",
					gray800: "#1F1F1F",
					gray900: "#141414",
					black: "#000000",
					platinum50: "#F5F7F8",
					platinum100: "#EBF5F7",
					platinum200: "#CCDFE5",
					platinum300: "#A1BDCA",
					platinum400: "#8EA3AD",
					platinum500: "#6C7C83",
					platinum600: "#556268",
					platinum700: "#394145",
					blue50: "#EDF3FD",
					blue100: "#D4E2FC",
					blue200: "#9FBFF8",
					blue300: "#5A90F4",
					blue400: "#276EF1",
					blue500: "#1D53B7",
					blue600: "#174291",
					blue700: "#0F2C60",
					red50: "#FBEFEE",
					red100: "#F6D9D6",
					red200: "#ECACA5",
					red300: "#DE7063",
					red400: "#D44333",
					red500: "#A13226",
					red600: "#7F281E",
					red700: "#541A14",
					green50: "#F0FAF3",
					green100: "#CFF3DD",
					green200: "#9EE2B8",
					green300: "#43BF75",
					green400: "#21A453",
					green500: "#09863D",
					green600: "#156A36",
					green700: "#0D4020",
					orange50: "#FDF3EE",
					orange100: "#FBE2D6",
					orange200: "#F7BFA5",
					orange300: "#F19063",
					orange400: "#ED6E33",
					orange500: "#B45326",
					orange600: "#8E421E",
					orange700: "#5F2C14",
					purple50: "#F3F1F9",
					purple100: "#E3DDF2",
					purple200: "#C1B4E2",
					purple300: "#957FCE",
					purple400: "#7356BF",
					purple500: "#574191",
					purple600: "#453372",
					purple700: "#2E224C",
					yellow50: "#FFF9EF",
					yellow100: "#FFF2D9",
					yellow200: "#FFE3AC",
					yellow300: "#FFCF70",
					yellow400: "#FFC043",
					yellow500: "#C19132",
					yellow600: "#997328",
					yellow700: "#664C1A",
					brown50: "#F6F2F0",
					brown100: "#EBE0DB",
					brown200: "#D2BAB0",
					brown300: "#B18976",
					brown400: "#99644C",
					brown500: "#744C39",
					brown600: "#5B3C2D",
					brown700: "#3D281E"
				};
				/* harmony default export */ __webpack_exports__["default"] = colors;

				/***/
			},

		/***/ "../../node_modules/baseui/esm/tokens/index.js":
			/*!*****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/tokens/index.js ***!
  \*****************************************************************************/
			/*! exports provided: colors */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./colors.js */ "../../node_modules/baseui/esm/tokens/colors.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"colors",
					function () {
						return _colors_js__WEBPACK_IMPORTED_MODULE_0__["default"];
					}
				);

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/***/
			},

		/***/ "../../node_modules/baseui/esm/utils/deep-merge.js":
			/*!*********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/utils/deep-merge.js ***!
  \*********************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return deepMerge;
					}
				);
				function _typeof(obj) {
					"@babel/helpers - typeof";
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof(obj);
				}

				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

				/* eslint-disable flowtype/no-weak-types */
				function deepMerge(target) {
					target = target || {};
					var len = arguments.length <= 1 ? 0 : arguments.length - 1;
					var obj;
					var value;

					for (var i = 0; i < len; i++) {
						obj =
							(i + 1 < 1 || arguments.length <= i + 1
								? undefined
								: arguments[i + 1]) || {};

						for (var key in obj) {
							if (_typeof(obj[key]) !== undefined) {
								value = obj[key];

								if (isCloneable(value)) {
									target[key] = deepMerge(
										/* eslint-disable-next-line no-mixed-operators */
										target[key] || (Array.isArray(value) && []) || {},
										value
									);
								} else {
									target[key] = value;
								}
							}
						}
					}

					return target;
				}
				/* eslint-enable flowtype/no-weak-types */

				/* eslint-disable-next-line flowtype/no-weak-types */

				function isCloneable(obj) {
					/* eslint-disable-next-line eqeqeq */
					return (
						Array.isArray(obj) || {}.toString.call(obj) == "[object Object]"
					);
				}

				/***/
			},

		/***/ "../../node_modules/baseui/esm/utils/focusVisible.js":
			/*!***********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/baseui/esm/utils/focusVisible.js ***!
  \***********************************************************************************/
			/*! exports provided: teardown, isFocusVisible, handleBlurVisible, initFocusVisible, forkFocus, forkBlur */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"teardown",
					function () {
						return teardown;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"isFocusVisible",
					function () {
						return isFocusVisible;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"handleBlurVisible",
					function () {
						return handleBlurVisible;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"initFocusVisible",
					function () {
						return initFocusVisible;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"forkFocus",
					function () {
						return forkFocus;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"forkBlur",
					function () {
						return forkBlur;
					}
				);
				/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
				// based on:
				// - https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/focusVisible.js
				// - https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
				var initialized = false;
				var hadKeyboardEvent = true;
				var hadFocusVisibleRecently = false;
				var hadFocusVisibleRecentlyTimeout = null;
				var inputTypesWhitelist = {
					text: true,
					search: true,
					url: true,
					tel: true,
					email: true,
					password: true,
					number: true,
					date: true,
					month: true,
					week: true,
					time: true,
					datetime: true,
					"datetime-local": true
				};
				/**
				 * Computes whether the given element should automatically trigger the
				 * `focus-visible` class being added, i.e. whether it should always match
				 * `:focus-visible` when focused.
				 * @param {Element} node
				 * @return {boolean}
				 */

				function focusTriggersKeyboardModality(node) {
					var type = node.type,
						tagName = node.tagName;

					if (
						tagName === "INPUT" &&
						inputTypesWhitelist[type] &&
						!node.readOnly
					) {
						return true;
					}

					if (tagName === "TEXTAREA" && !node.readOnly) {
						return true;
					}

					if (node.isContentEditable) {
						return true;
					}

					return false;
				}
				/**
				 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
				 * If the most recent user interaction was via the keyboard;
				 * and the key press did not include a meta, alt/option, or control key;
				 * then the modality is keyboard. Otherwise, the modality is not keyboard.
				 * @param {KeyboardEvent} event
				 */

				function handleKeyDown(event) {
					if (event.metaKey || event.altKey || event.ctrlKey) {
						return;
					}

					hadKeyboardEvent = true;
				}
				/**
				 * If at any point a user clicks with a pointing device, ensure that we change
				 * the modality away from keyboard.
				 * This avoids the situation where a user presses a key on an already focused
				 * element, and then clicks on a different element, focusing it with a
				 * pointing device, while we still think we're in keyboard modality.
				 */

				function handlePointerDown() {
					hadKeyboardEvent = false;
				}

				function handleVisibilityChange() {
					if (this.visibilityState === "hidden") {
						// If the tab becomes active again, the browser will handle calling focus
						// on the element (Safari actually calls it twice).
						// If this tab change caused a blur on an element with focus-visible,
						// re-apply the class when the user switches back to the tab.
						if (hadFocusVisibleRecently) {
							hadKeyboardEvent = true;
						}
					}
				}

				function prepare(doc) {
					doc.addEventListener("keydown", handleKeyDown, true);
					doc.addEventListener("mousedown", handlePointerDown, true);
					doc.addEventListener("pointerdown", handlePointerDown, true);
					doc.addEventListener("touchstart", handlePointerDown, true);
					doc.addEventListener(
						"visibilitychange",
						handleVisibilityChange,
						true
					);
				} //$FlowFixMe

				function teardown(doc) {
					doc.removeEventListener("keydown", handleKeyDown, true);
					doc.removeEventListener("mousedown", handlePointerDown, true);
					doc.removeEventListener("pointerdown", handlePointerDown, true);
					doc.removeEventListener("touchstart", handlePointerDown, true);
					doc.removeEventListener(
						"visibilitychange",
						handleVisibilityChange,
						true
					);
				} //$FlowFixMe

				function isFocusVisible(event) {
					var target = event.target;

					try {
						return target.matches(":focus-visible");
					} catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
					// we use our own heuristic for those browsers
					// rethrow might be better if it's not the expected error but do we really
					// want to crash if focus-visible malfunctioned?
					// no need for validFocusTarget check. the user does that by attaching it to
					// focusable events only

					return hadKeyboardEvent || focusTriggersKeyboardModality(target);
				}
				/**
				 * Should be called if a blur event is fired on a focus-visible element
				 */

				function handleBlurVisible() {
					// To detect a tab/window switch, we look for a blur event followed
					// rapidly by a visibility change.
					// If we don't see a visibility change within 100ms, it's probably a
					// regular focus change.
					hadFocusVisibleRecently = true;

					if (typeof document !== "undefined") {
						window.clearTimeout(hadFocusVisibleRecentlyTimeout);
						hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
							hadFocusVisibleRecently = false;
						}, 100);
					}
				} //$FlowFixMe

				function initFocusVisible(node) {
					if (!initialized && node != null) {
						initialized = true;
						prepare(node.ownerDocument);
					}
				}
				var forkFocus = function forkFocus(rootProps, handler) {
					return function (e) {
						if (typeof rootProps.onFocus === "function") {
							rootProps.onFocus(e);
						}

						handler(e);
					};
				};
				var forkBlur = function forkBlur(rootProps, handler) {
					return function (e) {
						if (typeof rootProps.onBlur === "function") {
							rootProps.onBlur(e);
						}

						handler(e);
					};
				};

				/***/
			},

		/***/ "../../node_modules/css-in-js-utils/lib/hyphenateProperty.js":
			/*!*******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \*******************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = hyphenateProperty;

				var _hyphenateStyleName = __webpack_require__(
					/*! hyphenate-style-name */ "../../node_modules/hyphenate-style-name/index.js"
				);

				var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function hyphenateProperty(property) {
					return (0, _hyphenateStyleName2.default)(property);
				}
				module.exports = exports["default"];

				/***/
			},

		/***/ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js":
			/*!*****************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*****************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = isPrefixedValue;
				var regex = /-webkit-|-moz-|-ms-/;

				function isPrefixedValue(value) {
					return typeof value === "string" && regex.test(value);
				}
				module.exports = exports["default"];

				/***/
			},

		/***/ "../../node_modules/hyphenate-style-name/index.js":
			/*!********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/hyphenate-style-name/index.js ***!
  \********************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* eslint-disable no-var, prefer-template */
				var uppercasePattern = /[A-Z]/g;
				var msPattern = /^ms-/;
				var cache = {};

				function toHyphenLower(match) {
					return "-" + match.toLowerCase();
				}

				function hyphenateStyleName(name) {
					if (cache.hasOwnProperty(name)) {
						return cache[name];
					}

					var hName = name.replace(uppercasePattern, toHyphenLower);
					return (cache[name] = msPattern.test(hName) ? "-" + hName : hName);
				}

				/* harmony default export */ __webpack_exports__[
					"default"
				] = hyphenateStyleName;

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/createPrefixer.js":
			/*!*********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/createPrefixer.js ***!
  \*********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return createPrefixer;
					}
				);
				/* harmony import */ var _utils_prefixProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./utils/prefixProperty */ "../../node_modules/inline-style-prefixer/es/utils/prefixProperty.js"
				);
				/* harmony import */ var _utils_prefixValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./utils/prefixValue */ "../../node_modules/inline-style-prefixer/es/utils/prefixValue.js"
				);
				/* harmony import */ var _utils_addNewValuesOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./utils/addNewValuesOnly */ "../../node_modules/inline-style-prefixer/es/utils/addNewValuesOnly.js"
				);
				/* harmony import */ var _utils_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./utils/isObject */ "../../node_modules/inline-style-prefixer/es/utils/isObject.js"
				);

				function createPrefixer(_ref) {
					var prefixMap = _ref.prefixMap,
						plugins = _ref.plugins;

					return function prefix(style) {
						for (var property in style) {
							var value = style[property];

							// handle nested objects
							if (
								Object(_utils_isObject__WEBPACK_IMPORTED_MODULE_3__["default"])(
									value
								)
							) {
								style[property] = prefix(value);
								// handle array values
							} else if (Array.isArray(value)) {
								var combinedValue = [];

								for (var i = 0, len = value.length; i < len; ++i) {
									var processedValue = Object(
										_utils_prefixValue__WEBPACK_IMPORTED_MODULE_1__["default"]
									)(plugins, property, value[i], style, prefixMap);
									Object(
										_utils_addNewValuesOnly__WEBPACK_IMPORTED_MODULE_2__[
											"default"
										]
									)(combinedValue, processedValue || value[i]);
								}

								// only modify the value if it was touched
								// by any plugin to prevent unnecessary mutations
								if (combinedValue.length > 0) {
									style[property] = combinedValue;
								}
							} else {
								var _processedValue = Object(
									_utils_prefixValue__WEBPACK_IMPORTED_MODULE_1__["default"]
								)(plugins, property, value, style, prefixMap);

								// only modify the value if it was touched
								// by any plugin to prevent unnecessary mutations
								if (_processedValue) {
									style[property] = _processedValue;
								}

								style = Object(
									_utils_prefixProperty__WEBPACK_IMPORTED_MODULE_0__["default"]
								)(prefixMap, property, style);
							}
						}

						return style;
					};
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/data.js":
			/*!***********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/data.js ***!
  \***********************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);

				var w = ["Webkit"];
				var m = ["Moz"];
				var ms = ["ms"];
				var wm = ["Webkit", "Moz"];
				var wms = ["Webkit", "ms"];
				var wmms = ["Webkit", "Moz", "ms"];

				/* harmony default export */ __webpack_exports__["default"] = {
					plugins: [],
					prefixMap: {
						appearance: wm,
						textEmphasisPosition: w,
						textEmphasis: w,
						textEmphasisStyle: w,
						textEmphasisColor: w,
						boxDecorationBreak: w,
						maskImage: w,
						maskMode: w,
						maskRepeat: w,
						maskPosition: w,
						maskClip: w,
						maskOrigin: w,
						maskSize: w,
						maskComposite: w,
						mask: w,
						maskBorderSource: w,
						maskBorderMode: w,
						maskBorderSlice: w,
						maskBorderWidth: w,
						maskBorderOutset: w,
						maskBorderRepeat: w,
						maskBorder: w,
						maskType: w,
						textDecorationStyle: w,
						textDecorationSkip: w,
						textDecorationLine: w,
						textDecorationColor: w,
						userSelect: wmms,
						backdropFilter: w,
						fontKerning: w,
						scrollSnapType: wms,
						scrollSnapPointsX: wms,
						scrollSnapPointsY: wms,
						scrollSnapDestination: wms,
						scrollSnapCoordinate: wms,
						clipPath: w,
						shapeImageThreshold: w,
						shapeImageMargin: w,
						shapeImageOutside: w,
						filter: w,
						hyphens: wms,
						flowInto: wms,
						flowFrom: wms,
						breakBefore: wms,
						breakAfter: wms,
						breakInside: wms,
						regionFragment: wms,
						writingMode: wms,
						textOrientation: w,
						tabSize: m,
						fontFeatureSettings: w,
						columnCount: w,
						columnFill: w,
						columnGap: w,
						columnRule: w,
						columnRuleColor: w,
						columnRuleStyle: w,
						columnRuleWidth: w,
						columns: w,
						columnSpan: w,
						columnWidth: w,
						wrapFlow: ms,
						wrapThrough: ms,
						wrapMargin: ms,
						textSizeAdjust: wms
					}
				};

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/index.js":
			/*!************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/index.js ***!
  \************************************************************************************/
			/*! exports provided: createPrefixer, prefix */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"prefix",
					function () {
						return prefix;
					}
				);
				/* harmony import */ var _createPrefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./createPrefixer */ "../../node_modules/inline-style-prefixer/es/createPrefixer.js"
				);
				/* harmony reexport (safe) */ __webpack_require__.d(
					__webpack_exports__,
					"createPrefixer",
					function () {
						return _createPrefixer__WEBPACK_IMPORTED_MODULE_0__["default"];
					}
				);

				/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./data */ "../../node_modules/inline-style-prefixer/es/data.js"
				);
				/* harmony import */ var _plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./plugins/backgroundClip */ "../../node_modules/inline-style-prefixer/es/plugins/backgroundClip.js"
				);
				/* harmony import */ var _plugins_cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ./plugins/cursor */ "../../node_modules/inline-style-prefixer/es/plugins/cursor.js"
				);
				/* harmony import */ var _plugins_crossFade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ./plugins/crossFade */ "../../node_modules/inline-style-prefixer/es/plugins/crossFade.js"
				);
				/* harmony import */ var _plugins_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! ./plugins/filter */ "../../node_modules/inline-style-prefixer/es/plugins/filter.js"
				);
				/* harmony import */ var _plugins_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					/*! ./plugins/flex */ "../../node_modules/inline-style-prefixer/es/plugins/flex.js"
				);
				/* harmony import */ var _plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					/*! ./plugins/flexboxOld */ "../../node_modules/inline-style-prefixer/es/plugins/flexboxOld.js"
				);
				/* harmony import */ var _plugins_gradient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					/*! ./plugins/gradient */ "../../node_modules/inline-style-prefixer/es/plugins/gradient.js"
				);
				/* harmony import */ var _plugins_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					/*! ./plugins/grid */ "../../node_modules/inline-style-prefixer/es/plugins/grid.js"
				);
				/* harmony import */ var _plugins_imageSet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					/*! ./plugins/imageSet */ "../../node_modules/inline-style-prefixer/es/plugins/imageSet.js"
				);
				/* harmony import */ var _plugins_logical__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					/*! ./plugins/logical */ "../../node_modules/inline-style-prefixer/es/plugins/logical.js"
				);
				/* harmony import */ var _plugins_position__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					/*! ./plugins/position */ "../../node_modules/inline-style-prefixer/es/plugins/position.js"
				);
				/* harmony import */ var _plugins_sizing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					/*! ./plugins/sizing */ "../../node_modules/inline-style-prefixer/es/plugins/sizing.js"
				);
				/* harmony import */ var _plugins_transition__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					/*! ./plugins/transition */ "../../node_modules/inline-style-prefixer/es/plugins/transition.js"
				);

				var plugins = [
					_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_2__["default"],
					_plugins_crossFade__WEBPACK_IMPORTED_MODULE_4__["default"],
					_plugins_cursor__WEBPACK_IMPORTED_MODULE_3__["default"],
					_plugins_filter__WEBPACK_IMPORTED_MODULE_5__["default"],
					_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_7__["default"],
					_plugins_gradient__WEBPACK_IMPORTED_MODULE_8__["default"],
					_plugins_grid__WEBPACK_IMPORTED_MODULE_9__["default"],
					_plugins_imageSet__WEBPACK_IMPORTED_MODULE_10__["default"],
					_plugins_logical__WEBPACK_IMPORTED_MODULE_11__["default"],
					_plugins_position__WEBPACK_IMPORTED_MODULE_12__["default"],
					_plugins_sizing__WEBPACK_IMPORTED_MODULE_13__["default"],
					_plugins_transition__WEBPACK_IMPORTED_MODULE_14__["default"],
					_plugins_flex__WEBPACK_IMPORTED_MODULE_6__["default"]
				];

				var prefix = Object(
					_createPrefixer__WEBPACK_IMPORTED_MODULE_0__["default"]
				)({
					prefixMap: _data__WEBPACK_IMPORTED_MODULE_1__["default"].prefixMap,
					plugins: plugins
				});

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/backgroundClip.js":
			/*!*****************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/backgroundClip.js ***!
  \*****************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return backgroundClip;
					}
				);

				// https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility
				function backgroundClip(property, value) {
					if (typeof value === "string" && value === "text") {
						return ["-webkit-text", "text"];
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/crossFade.js":
			/*!************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/crossFade.js ***!
  \************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return crossFade;
					}
				);
				/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! css-in-js-utils/lib/isPrefixedValue */ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js"
				);
				/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__
				);

				// http://caniuse.com/#search=cross-fade
				var prefixes = ["-webkit-", ""];

				function crossFade(property, value) {
					if (
						typeof value === "string" &&
						!css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(
							value
						) &&
						value.indexOf("cross-fade(") > -1
					) {
						return prefixes.map(function (prefix) {
							return value.replace(/cross-fade\(/g, prefix + "cross-fade(");
						});
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/cursor.js":
			/*!*********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/cursor.js ***!
  \*********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return cursor;
					}
				);
				var prefixes = ["-webkit-", "-moz-", ""];

				var values = {
					"zoom-in": true,
					"zoom-out": true,
					grab: true,
					grabbing: true
				};

				function cursor(property, value) {
					if (property === "cursor" && values.hasOwnProperty(value)) {
						return prefixes.map(function (prefix) {
							return prefix + value;
						});
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/filter.js":
			/*!*********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/filter.js ***!
  \*********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return filter;
					}
				);
				/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! css-in-js-utils/lib/isPrefixedValue */ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js"
				);
				/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__
				);

				// http://caniuse.com/#feat=css-filter-function
				var prefixes = ["-webkit-", ""];

				function filter(property, value) {
					if (
						typeof value === "string" &&
						!css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(
							value
						) &&
						value.indexOf("filter(") > -1
					) {
						return prefixes.map(function (prefix) {
							return value.replace(/filter\(/g, prefix + "filter(");
						});
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/flex.js":
			/*!*******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/flex.js ***!
  \*******************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return flex;
					}
				);
				var values = {
					flex: [
						"-webkit-box",
						"-moz-box",
						"-ms-flexbox",
						"-webkit-flex",
						"flex"
					],
					"inline-flex": [
						"-webkit-inline-box",
						"-moz-inline-box",
						"-ms-inline-flexbox",
						"-webkit-inline-flex",
						"inline-flex"
					]
				};

				function flex(property, value) {
					if (property === "display" && values.hasOwnProperty(value)) {
						return values[value];
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/flexboxOld.js":
			/*!*************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/flexboxOld.js ***!
  \*************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return flexboxOld;
					}
				);
				var alternativeValues = {
					"space-around": "justify",
					"space-between": "justify",
					"flex-start": "start",
					"flex-end": "end",
					"wrap-reverse": "multiple",
					wrap: "multiple"
				};

				var alternativeProps = {
					alignItems: "WebkitBoxAlign",
					justifyContent: "WebkitBoxPack",
					flexWrap: "WebkitBoxLines",
					flexGrow: "WebkitBoxFlex"
				};

				function flexboxOld(property, value, style) {
					if (property === "flexDirection" && typeof value === "string") {
						if (value.indexOf("column") > -1) {
							style.WebkitBoxOrient = "vertical";
						} else {
							style.WebkitBoxOrient = "horizontal";
						}
						if (value.indexOf("reverse") > -1) {
							style.WebkitBoxDirection = "reverse";
						} else {
							style.WebkitBoxDirection = "normal";
						}
					}
					if (alternativeProps.hasOwnProperty(property)) {
						style[alternativeProps[property]] =
							alternativeValues[value] || value;
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/gradient.js":
			/*!***********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/gradient.js ***!
  \***********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return gradient;
					}
				);
				/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! css-in-js-utils/lib/isPrefixedValue */ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js"
				);
				/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__
				);

				var prefixes = ["-webkit-", "-moz-", ""];
				var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

				function gradient(property, value) {
					if (
						typeof value === "string" &&
						!css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(
							value
						) &&
						values.test(value)
					) {
						return prefixes.map(function (prefix) {
							return value.replace(values, function (grad) {
								return prefix + grad;
							});
						});
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/grid.js":
			/*!*******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/grid.js ***!
  \*******************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return grid;
					}
				);
				var _slicedToArray = (function () {
					function sliceIterator(arr, i) {
						var _arr = [];
						var _n = true;
						var _d = false;
						var _e = undefined;
						try {
							for (
								var _i = arr[Symbol.iterator](), _s;
								!(_n = (_s = _i.next()).done);
								_n = true
							) {
								_arr.push(_s.value);
								if (i && _arr.length === i) break;
							}
						} catch (err) {
							_d = true;
							_e = err;
						} finally {
							try {
								if (!_n && _i["return"]) _i["return"]();
							} finally {
								if (_d) throw _e;
							}
						}
						return _arr;
					}
					return function (arr, i) {
						if (Array.isArray(arr)) {
							return arr;
						} else if (Symbol.iterator in Object(arr)) {
							return sliceIterator(arr, i);
						} else {
							throw new TypeError(
								"Invalid attempt to destructure non-iterable instance"
							);
						}
					};
				})();

				function isSimplePositionValue(value) {
					return typeof value === "number" && !isNaN(value);
				}

				function isComplexSpanValue(value) {
					return typeof value === "string" && value.includes("/");
				}

				var alignmentValues = ["center", "end", "start", "stretch"];

				var displayValues = {
					"inline-grid": ["-ms-inline-grid", "inline-grid"],
					grid: ["-ms-grid", "grid"]
				};

				var propertyConverters = {
					alignSelf: function alignSelf(value, style) {
						if (alignmentValues.indexOf(value) > -1) {
							style.msGridRowAlign = value;
						}
					},

					gridColumn: function gridColumn(value, style) {
						if (isSimplePositionValue(value)) {
							style.msGridColumn = value;
						} else if (isComplexSpanValue(value)) {
							var _value$split = value.split("/"),
								_value$split2 = _slicedToArray(_value$split, 2),
								start = _value$split2[0],
								end = _value$split2[1];

							propertyConverters.gridColumnStart(+start, style);

							var _end$split = end.split(/ ?span /),
								_end$split2 = _slicedToArray(_end$split, 2),
								maybeSpan = _end$split2[0],
								maybeNumber = _end$split2[1];

							if (maybeSpan === "") {
								propertyConverters.gridColumnEnd(+start + +maybeNumber, style);
							} else {
								propertyConverters.gridColumnEnd(+end, style);
							}
						} else {
							propertyConverters.gridColumnStart(value, style);
						}
					},

					gridColumnEnd: function gridColumnEnd(value, style) {
						var msGridColumn = style.msGridColumn;

						if (
							isSimplePositionValue(value) &&
							isSimplePositionValue(msGridColumn)
						) {
							style.msGridColumnSpan = value - msGridColumn;
						}
					},

					gridColumnStart: function gridColumnStart(value, style) {
						if (isSimplePositionValue(value)) {
							style.msGridColumn = value;
						}
					},

					gridRow: function gridRow(value, style) {
						if (isSimplePositionValue(value)) {
							style.msGridRow = value;
						} else if (isComplexSpanValue(value)) {
							var _value$split3 = value.split("/"),
								_value$split4 = _slicedToArray(_value$split3, 2),
								start = _value$split4[0],
								end = _value$split4[1];

							propertyConverters.gridRowStart(+start, style);

							var _end$split3 = end.split(/ ?span /),
								_end$split4 = _slicedToArray(_end$split3, 2),
								maybeSpan = _end$split4[0],
								maybeNumber = _end$split4[1];

							if (maybeSpan === "") {
								propertyConverters.gridRowEnd(+start + +maybeNumber, style);
							} else {
								propertyConverters.gridRowEnd(+end, style);
							}
						} else {
							propertyConverters.gridRowStart(value, style);
						}
					},

					gridRowEnd: function gridRowEnd(value, style) {
						var msGridRow = style.msGridRow;

						if (
							isSimplePositionValue(value) &&
							isSimplePositionValue(msGridRow)
						) {
							style.msGridRowSpan = value - msGridRow;
						}
					},

					gridRowStart: function gridRowStart(value, style) {
						if (isSimplePositionValue(value)) {
							style.msGridRow = value;
						}
					},

					gridTemplateColumns: function gridTemplateColumns(value, style) {
						style.msGridColumns = value;
					},

					gridTemplateRows: function gridTemplateRows(value, style) {
						style.msGridRows = value;
					},

					justifySelf: function justifySelf(value, style) {
						if (alignmentValues.indexOf(value) > -1) {
							style.msGridColumnAlign = value;
						}
					}
				};

				function grid(property, value, style) {
					if (property === "display" && value in displayValues) {
						return displayValues[value];
					}

					if (property in propertyConverters) {
						var propertyConverter = propertyConverters[property];
						propertyConverter(value, style);
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/imageSet.js":
			/*!***********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/imageSet.js ***!
  \***********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return imageSet;
					}
				);
				/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! css-in-js-utils/lib/isPrefixedValue */ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js"
				);
				/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0__
				);

				// http://caniuse.com/#feat=css-image-set
				var prefixes = ["-webkit-", ""];

				function imageSet(property, value) {
					if (
						typeof value === "string" &&
						!css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_0___default()(
							value
						) &&
						value.indexOf("image-set(") > -1
					) {
						return prefixes.map(function (prefix) {
							return value.replace(/image-set\(/g, prefix + "image-set(");
						});
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/logical.js":
			/*!**********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/logical.js ***!
  \**********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return logical;
					}
				);
				var alternativeProps = {
					marginBlockStart: ["WebkitMarginBefore"],
					marginBlockEnd: ["WebkitMarginAfter"],
					marginInlineStart: ["WebkitMarginStart", "MozMarginStart"],
					marginInlineEnd: ["WebkitMarginEnd", "MozMarginEnd"],
					paddingBlockStart: ["WebkitPaddingBefore"],
					paddingBlockEnd: ["WebkitPaddingAfter"],
					paddingInlineStart: ["WebkitPaddingStart", "MozPaddingStart"],
					paddingInlineEnd: ["WebkitPaddingEnd", "MozPaddingEnd"],
					borderBlockStart: ["WebkitBorderBefore"],
					borderBlockStartColor: ["WebkitBorderBeforeColor"],
					borderBlockStartStyle: ["WebkitBorderBeforeStyle"],
					borderBlockStartWidth: ["WebkitBorderBeforeWidth"],
					borderBlockEnd: ["WebkitBorderAfter"],
					borderBlockEndColor: ["WebkitBorderAfterColor"],
					borderBlockEndStyle: ["WebkitBorderAfterStyle"],
					borderBlockEndWidth: ["WebkitBorderAfterWidth"],
					borderInlineStart: ["WebkitBorderStart", "MozBorderStart"],
					borderInlineStartColor: [
						"WebkitBorderStartColor",
						"MozBorderStartColor"
					],
					borderInlineStartStyle: [
						"WebkitBorderStartStyle",
						"MozBorderStartStyle"
					],
					borderInlineStartWidth: [
						"WebkitBorderStartWidth",
						"MozBorderStartWidth"
					],
					borderInlineEnd: ["WebkitBorderEnd", "MozBorderEnd"],
					borderInlineEndColor: ["WebkitBorderEndColor", "MozBorderEndColor"],
					borderInlineEndStyle: ["WebkitBorderEndStyle", "MozBorderEndStyle"],
					borderInlineEndWidth: ["WebkitBorderEndWidth", "MozBorderEndWidth"]
				};

				function logical(property, value, style) {
					if (
						Object.prototype.hasOwnProperty.call(alternativeProps, property)
					) {
						var alternativePropList = alternativeProps[property];
						for (var i = 0, len = alternativePropList.length; i < len; ++i) {
							style[alternativePropList[i]] = value;
						}
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/position.js":
			/*!***********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/position.js ***!
  \***********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return position;
					}
				);
				function position(property, value) {
					if (property === "position" && value === "sticky") {
						return ["-webkit-sticky", "sticky"];
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/sizing.js":
			/*!*********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/sizing.js ***!
  \*********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return sizing;
					}
				);
				var prefixes = ["-webkit-", "-moz-", ""];

				var properties = {
					maxHeight: true,
					maxWidth: true,
					width: true,
					height: true,
					columnWidth: true,
					minWidth: true,
					minHeight: true
				};
				var values = {
					"min-content": true,
					"max-content": true,
					"fill-available": true,
					"fit-content": true,
					"contain-floats": true
				};

				function sizing(property, value) {
					if (
						properties.hasOwnProperty(property) &&
						values.hasOwnProperty(value)
					) {
						return prefixes.map(function (prefix) {
							return prefix + value;
						});
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/plugins/transition.js":
			/*!*************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/plugins/transition.js ***!
  \*************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return transition;
					}
				);
				/* harmony import */ var css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! css-in-js-utils/lib/hyphenateProperty */ "../../node_modules/css-in-js-utils/lib/hyphenateProperty.js"
				);
				/* harmony import */ var css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! css-in-js-utils/lib/isPrefixedValue */ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js"
				);
				/* harmony import */ var css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var _utils_capitalizeString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../utils/capitalizeString */ "../../node_modules/inline-style-prefixer/es/utils/capitalizeString.js"
				);

				var properties = {
					transition: true,
					transitionProperty: true,
					WebkitTransition: true,
					WebkitTransitionProperty: true,
					MozTransition: true,
					MozTransitionProperty: true
				};

				var prefixMapping = {
					Webkit: "-webkit-",
					Moz: "-moz-",
					ms: "-ms-"
				};

				function prefixValue(value, propertyPrefixMap) {
					if (
						css_in_js_utils_lib_isPrefixedValue__WEBPACK_IMPORTED_MODULE_1___default()(
							value
						)
					) {
						return value;
					}

					// only split multi values, not cubic beziers
					var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

					for (var i = 0, len = multipleValues.length; i < len; ++i) {
						var singleValue = multipleValues[i];
						var values = [singleValue];
						for (var property in propertyPrefixMap) {
							var dashCaseProperty = css_in_js_utils_lib_hyphenateProperty__WEBPACK_IMPORTED_MODULE_0___default()(
								property
							);

							if (
								singleValue.indexOf(dashCaseProperty) > -1 &&
								dashCaseProperty !== "order"
							) {
								var prefixes = propertyPrefixMap[property];
								for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
									// join all prefixes and create a new value
									values.unshift(
										singleValue.replace(
											dashCaseProperty,
											prefixMapping[prefixes[j]] + dashCaseProperty
										)
									);
								}
							}
						}

						multipleValues[i] = values.join(",");
					}

					return multipleValues.join(",");
				}

				function transition(property, value, style, propertyPrefixMap) {
					// also check for already prefixed transitions
					if (
						typeof value === "string" &&
						properties.hasOwnProperty(property)
					) {
						var outputValue = prefixValue(value, propertyPrefixMap);
						// if the property is already prefixed
						var webkitOutput = outputValue
							.split(/,(?![^()]*(?:\([^()]*\))?\))/g)
							.filter(function (val) {
								return !/-moz-|-ms-/.test(val);
							})
							.join(",");

						if (property.indexOf("Webkit") > -1) {
							return webkitOutput;
						}

						var mozOutput = outputValue
							.split(/,(?![^()]*(?:\([^()]*\))?\))/g)
							.filter(function (val) {
								return !/-webkit-|-ms-/.test(val);
							})
							.join(",");

						if (property.indexOf("Moz") > -1) {
							return mozOutput;
						}

						style[
							"Webkit" +
								Object(
									_utils_capitalizeString__WEBPACK_IMPORTED_MODULE_2__[
										"default"
									]
								)(property)
						] = webkitOutput;
						style[
							"Moz" +
								Object(
									_utils_capitalizeString__WEBPACK_IMPORTED_MODULE_2__[
										"default"
									]
								)(property)
						] = mozOutput;
						return outputValue;
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/utils/addNewValuesOnly.js":
			/*!*****************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/utils/addNewValuesOnly.js ***!
  \*****************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return addNewValuesOnly;
					}
				);
				function addIfNew(list, value) {
					if (list.indexOf(value) === -1) {
						list.push(value);
					}
				}

				function addNewValuesOnly(list, values) {
					if (Array.isArray(values)) {
						for (var i = 0, len = values.length; i < len; ++i) {
							addIfNew(list, values[i]);
						}
					} else {
						addIfNew(list, values);
					}
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/utils/capitalizeString.js":
			/*!*****************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/utils/capitalizeString.js ***!
  \*****************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return capitalizeString;
					}
				);
				function capitalizeString(str) {
					return str.charAt(0).toUpperCase() + str.slice(1);
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/utils/isObject.js":
			/*!*********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/utils/isObject.js ***!
  \*********************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return isObject;
					}
				);
				function isObject(value) {
					return value instanceof Object && !Array.isArray(value);
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/utils/prefixProperty.js":
			/*!***************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/utils/prefixProperty.js ***!
  \***************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return prefixProperty;
					}
				);
				/* harmony import */ var _capitalizeString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./capitalizeString */ "../../node_modules/inline-style-prefixer/es/utils/capitalizeString.js"
				);

				function prefixProperty(prefixProperties, property, style) {
					if (prefixProperties.hasOwnProperty(property)) {
						var newStyle = {};
						var requiredPrefixes = prefixProperties[property];
						var capitalizedProperty = Object(
							_capitalizeString__WEBPACK_IMPORTED_MODULE_0__["default"]
						)(property);
						var keys = Object.keys(style);
						for (var i = 0; i < keys.length; i++) {
							var styleProperty = keys[i];
							if (styleProperty === property) {
								for (var j = 0; j < requiredPrefixes.length; j++) {
									newStyle[requiredPrefixes[j] + capitalizedProperty] =
										style[property];
								}
							}
							newStyle[styleProperty] = style[styleProperty];
						}
						return newStyle;
					}
					return style;
				}

				/***/
			},

		/***/ "../../node_modules/inline-style-prefixer/es/utils/prefixValue.js":
			/*!************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/inline-style-prefixer/es/utils/prefixValue.js ***!
  \************************************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"default",
					function () {
						return prefixValue;
					}
				);
				function prefixValue(plugins, property, value, style, metaData) {
					for (var i = 0, len = plugins.length; i < len; ++i) {
						var processedValue = plugins[i](property, value, style, metaData);

						// we can stop processing if a value is returned
						// as all plugin criteria are unique
						if (processedValue) {
							return processedValue;
						}
					}
				}

				/***/
			},

		/***/ "../../node_modules/just-extend/index.js":
			/*!***********************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/just-extend/index.js ***!
  \***********************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = extend;

				/*
  var obj = {a: 3, b: 5};
  extend(obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 4, b: 5, c: 8}

  var obj = {a: 3, b: 5};
  extend({}, obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 3, b: 5}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4]}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(true, obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3]}

  extend({a: 4, b: 5}); // {a: 4, b: 5}
  extend({a: 4, b: 5}, 3); {a: 4, b: 5}
  extend({a: 4, b: 5}, true); {a: 4, b: 5}
  extend('hello', {a: 4, b: 5}); // throws
  extend(3, {a: 4, b: 5}); // throws
*/

				function extend(/* [deep], obj1, obj2, [objn] */) {
					var args = [].slice.call(arguments);
					var deep = false;
					if (typeof args[0] == "boolean") {
						deep = args.shift();
					}
					var result = args[0];
					if (isUnextendable(result)) {
						throw new Error("extendee must be an object");
					}
					var extenders = args.slice(1);
					var len = extenders.length;
					for (var i = 0; i < len; i++) {
						var extender = extenders[i];
						for (var key in extender) {
							if (extender.hasOwnProperty(key)) {
								var value = extender[key];
								if (deep && isCloneable(value)) {
									var base = Array.isArray(value) ? [] : {};
									result[key] = extend(
										true,
										result.hasOwnProperty(key) && !isUnextendable(result[key])
											? result[key]
											: base,
										value
									);
								} else {
									result[key] = value;
								}
							}
						}
					}
					return result;
				}

				function isCloneable(obj) {
					return (
						Array.isArray(obj) || {}.toString.call(obj) == "[object Object]"
					);
				}

				function isUnextendable(val) {
					return !val || (typeof val != "object" && typeof val != "function");
				}

				/***/
			},

		/***/ "../../node_modules/modern-normalize/modern-normalize.css":
			/*!****************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/modern-normalize/modern-normalize.css ***!
  \****************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var api = __webpack_require__(
					/*! ../next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
				);
				var content = __webpack_require__(
					/*! !../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader??__nextjs_postcss!./modern-normalize.css */ "../../node_modules/next/node_modules/css-loader/dist/cjs.js?!../../node_modules/next/dist/compiled/postcss-loader/index.js?!../../node_modules/modern-normalize/modern-normalize.css"
				);

				content = content.__esModule ? content.default : content;

				if (typeof content === "string") {
					content = [[module.i, content, ""]];
				}

				var options = {};

				options.insert = function (element) {
					// These elements should always exist. If they do not,
					// this code should fail.
					var anchorElement = document.querySelector(
						"#__next_css__DO_NOT_USE__"
					);
					var parentNode = anchorElement.parentNode; // Normally <head>
					// Each style tag should be placed right before our
					// anchor. By inserting before and not after, we do not
					// need to track the last inserted element.
					parentNode.insertBefore(element, anchorElement); // Remember: this is development only code.
					//
					// After styles are injected, we need to remove the
					// <style> tags that set `body { display: none; }`.
					//
					// We use `requestAnimationFrame` as a way to defer
					// this operation since there may be multiple style
					// tags.
					(self.requestAnimationFrame || setTimeout)(function () {
						for (
							var x = document.querySelectorAll("[data-next-hide-fouc]"),
								i = x.length;
							i--;

						) {
							x[i].parentNode.removeChild(x[i]);
						}
					});
				};
				options.singleton = false;

				var update = api(content, options);

				if (true) {
					if (!content.locals || module.hot.invalidate) {
						var isEqualLocals = function isEqualLocals(a, b) {
							if ((!a && b) || (a && !b)) {
								return false;
							}

							var p;

							for (p in a) {
								if (a[p] !== b[p]) {
									return false;
								}
							}

							for (p in b) {
								if (!a[p]) {
									return false;
								}
							}

							return true;
						};
						var oldLocals = content.locals;

						module.hot.accept(
							/*! !../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader??__nextjs_postcss!./modern-normalize.css */ "../../node_modules/next/node_modules/css-loader/dist/cjs.js?!../../node_modules/next/dist/compiled/postcss-loader/index.js?!../../node_modules/modern-normalize/modern-normalize.css",
							function () {
								var newContent = __webpack_require__(
									/*! !../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader??__nextjs_postcss!./modern-normalize.css */ "../../node_modules/next/node_modules/css-loader/dist/cjs.js?!../../node_modules/next/dist/compiled/postcss-loader/index.js?!../../node_modules/modern-normalize/modern-normalize.css"
								);

								newContent = newContent.__esModule
									? newContent.default
									: newContent;

								if (typeof newContent === "string") {
									newContent = [[module.i, newContent, ""]];
								}

								if (!isEqualLocals(oldLocals, newContent.locals)) {
									module.hot.invalidate();

									return;
								}

								oldLocals = newContent.locals;

								update(newContent);
							}
						);
					}

					module.hot.dispose(function () {
						update();
					});
				}

				module.exports = content.locals || {};

				/***/
			},

		/***/ "../../node_modules/native-url/dist/index.js":
			/*!***************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/native-url/dist/index.js ***!
  \***************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var e,
					t =
						(e = __webpack_require__(
							/*! querystring */ "../../node_modules/querystring-es3/index.js"
						)) &&
						"object" == typeof e &&
						"default" in e
							? e.default
							: e,
					r = /https?|ftp|gopher|file/;
				function o(e) {
					"string" == typeof e && (e = g(e));
					var o = (function (e, t, r) {
						var o = e.auth,
							a = e.hostname,
							s = e.protocol || "",
							c = e.pathname || "",
							h = e.hash || "",
							p = e.query || "",
							n = !1;
						(o = o ? encodeURIComponent(o).replace(/%3A/i, ":") + "@" : ""),
							e.host
								? (n = o + e.host)
								: a &&
								  ((n = o + (~a.indexOf(":") ? "[" + a + "]" : a)),
								  e.port && (n += ":" + e.port)),
							p && "object" == typeof p && (p = t.encode(p));
						var l = e.search || (p && "?" + p) || "";
						return (
							s && ":" !== s.substr(-1) && (s += ":"),
							e.slashes || ((!s || r.test(s)) && !1 !== n)
								? ((n = "//" + (n || "")), c && "/" !== c[0] && (c = "/" + c))
								: n || (n = ""),
							h && "#" !== h[0] && (h = "#" + h),
							l && "?" !== l[0] && (l = "?" + l),
							{
								protocol: s,
								host: n,
								pathname: (c = c.replace(/[?#]/g, encodeURIComponent)),
								search: (l = l.replace("#", "%23")),
								hash: h
							}
						);
					})(e, t, r);
					return "" + o.protocol + o.host + o.pathname + o.search + o.hash;
				}
				var a = "http://",
					s = "w.w",
					c = a + s,
					h = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
					p = /https?|ftp|gopher|file/;
				function n(e, t) {
					var r = "string" == typeof e ? g(e) : e;
					e = "object" == typeof e ? o(e) : e;
					var s = g(t),
						n = "";
					r.protocol &&
						!r.slashes &&
						((n = r.protocol),
						(e = e.replace(r.protocol, "")),
						(n += "/" === t[0] || "/" === e[0] ? "/" : "")),
						n &&
							s.protocol &&
							((n = ""),
							s.slashes || ((n = s.protocol), (t = t.replace(s.protocol, ""))));
					var l = e.match(h);
					l &&
						!s.protocol &&
						((e = e.substr((n = l[1] + (l[2] || "")).length)),
						/^\/\/[^/]/.test(t) && (n = n.slice(0, -1)));
					var i = new URL(e, c + "/"),
						f = new URL(t, i).toString().replace(c, ""),
						u = s.protocol || r.protocol;
					return (
						(u += r.slashes || s.slashes ? "//" : ""),
						!n && u ? (f = f.replace(a, u)) : n && (f = f.replace(a, "")),
						p.test(f) ||
							~t.indexOf(".") ||
							"/" === e.slice(-1) ||
							"/" === t.slice(-1) ||
							"/" !== f.slice(-1) ||
							(f = f.slice(0, -1)),
						n && (f = n + ("/" === f[0] ? f.substr(1) : f)),
						f
					);
				}
				function l() {}
				(l.parse = g), (l.format = o), (l.resolve = n), (l.resolveObject = n);
				var i = /^https?|ftp|gopher|file/,
					f = /^(.*?)([#?].*)/,
					u = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
					m = /^([a-z0-9.+-]*:)?\/\/\/*/i,
					v = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
				function d(e) {
					try {
						return decodeURI(e);
					} catch (t) {
						return e;
					}
				}
				function g(e, r, a) {
					if (
						(void 0 === r && (r = !1),
						void 0 === a && (a = !1),
						e && "object" == typeof e && e instanceof l)
					)
						return e;
					var h = (e = e.trim()).match(f);
					(e = h
						? d(h[1]).replace(/\\/g, "/") + h[2]
						: d(e).replace(/\\/g, "/")),
						v.test(e) && "/" !== e.slice(-1) && (e += "/");
					var p = !/(^javascript)/.test(e) && e.match(u),
						n = m.test(e),
						g = "";
					p &&
						(i.test(p[1]) || ((g = p[1].toLowerCase()), (e = "" + p[2] + p[3])),
						p[2] ||
							((n = !1),
							i.test(p[1]) ? ((g = p[1]), (e = "" + p[3])) : (e = "//" + p[3])),
						(3 !== p[2].length && 1 !== p[2].length) ||
							((g = p[1]), (e = "/" + p[3])));
					var b,
						y = (h ? h[1] : e).match(/(:[0-9]+)/),
						j = "";
					y &&
						y[1] &&
						3 === y[1].length &&
						(e = e.replace((j = y[1]), j + "00"));
					var w = new l(),
						x = "",
						U = "";
					try {
						b = new URL(e);
					} catch (t) {
						(x = t),
							g ||
								a ||
								!/^\/\//.test(e) ||
								/^\/\/.+[@.]/.test(e) ||
								((U = "/"), (e = e.substr(1)));
						try {
							b = new URL(e, c);
						} catch (e) {
							return (w.protocol = g), (w.href = g), w;
						}
					}
					(w.slashes = n && !U),
						(w.host = b.host === s ? "" : b.host),
						(w.hostname =
							b.hostname === s ? "" : b.hostname.replace(/(\[|\])/g, "")),
						(w.protocol = x ? g || null : b.protocol),
						(w.search = b.search.replace(/\\/g, "%5C")),
						(w.hash = b.hash.replace(/\\/g, "%5C"));
					var R = e.split("#");
					!w.search && ~R[0].indexOf("?") && (w.search = "?"),
						w.hash || "" !== R[1] || (w.hash = "#"),
						(w.query = r ? t.decode(b.search.substr(1)) : w.search.substr(1)),
						(w.pathname = U + d(b.pathname).replace(/"/g, "%22")),
						"about:" === w.protocol &&
							"blank" === w.pathname &&
							((w.protocol = ""), (w.pathname = "")),
						x && "/" !== e[0] && (w.pathname = w.pathname.substr(1)),
						g &&
							!i.test(g) &&
							"/" !== e.slice(-1) &&
							"/" === w.pathname &&
							(w.pathname = ""),
						(w.path = w.pathname + w.search),
						(w.auth = [b.username, b.password]
							.map(decodeURIComponent)
							.filter(Boolean)
							.join(":")),
						(w.port = b.port),
						j &&
							((w.host = w.host.replace(j + "00", j)),
							(w.port = w.port.slice(0, -2))),
						(w.href = U ? "" + w.pathname + w.search + w.hash : o(w));
					var O = /^(file)/.test(w.href) ? ["host", "hostname"] : [];
					return (
						Object.keys(w).forEach(function (e) {
							~O.indexOf(e) || (w[e] = w[e] || null);
						}),
						w
					);
				}
				(exports.parse = g),
					(exports.format = o),
					(exports.resolve = n),
					(exports.resolveObject = function (e, t) {
						return g(n(e, t));
					}),
					(exports.Url = l);
				//# sourceMappingURL=index.js.map

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/index.js":
			/*!************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/index.js ***!
  \************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireWildcard = __webpack_require__(
						/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"
					),
					_interopRequireDefault = __webpack_require__(
						/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
					);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					Object.defineProperty(exports, "DefaultSeo", {
						enumerable: !0,
						get: function get() {
							return _defaultSEO["default"];
						}
					}),
					Object.defineProperty(exports, "NextSeo", {
						enumerable: !0,
						get: function get() {
							return _nextSEO["default"];
						}
					}),
					Object.defineProperty(exports, "ArticleJsonLd", {
						enumerable: !0,
						get: function get() {
							return _article["default"];
						}
					}),
					Object.defineProperty(exports, "ArticleJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _article.ArticleJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "BreadcrumbJsonLd", {
						enumerable: !0,
						get: function get() {
							return _breadcrumb["default"];
						}
					}),
					Object.defineProperty(exports, "BreadCrumbJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _breadcrumb.BreadCrumbJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "FAQPageJsonLd", {
						enumerable: !0,
						get: function get() {
							return _faqPage["default"];
						}
					}),
					Object.defineProperty(exports, "FAQPageJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _faqPage.FAQPageJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "JobPostingJsonLd", {
						enumerable: !0,
						get: function get() {
							return _jobPosting["default"];
						}
					}),
					Object.defineProperty(exports, "JobPostingJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _jobPosting.JobPostingJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "BlogJsonLd", {
						enumerable: !0,
						get: function get() {
							return _blog["default"];
						}
					}),
					Object.defineProperty(exports, "BlogJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _blog.BlogJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "CourseJsonLd", {
						enumerable: !0,
						get: function get() {
							return _course["default"];
						}
					}),
					Object.defineProperty(exports, "CourseJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _course.CourseJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "DatasetJsonLd", {
						enumerable: !0,
						get: function get() {
							return _dataset["default"];
						}
					}),
					Object.defineProperty(exports, "DatasetJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _dataset.DatasetJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "LocalBusinessJsonLd", {
						enumerable: !0,
						get: function get() {
							return _localBusiness["default"];
						}
					}),
					Object.defineProperty(exports, "LocalBusinessJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _localBusiness.LocalBusinessJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "LogoJsonLd", {
						enumerable: !0,
						get: function get() {
							return _logo["default"];
						}
					}),
					Object.defineProperty(exports, "LogoJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _logo.LogoJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "ProductJsonLd", {
						enumerable: !0,
						get: function get() {
							return _product["default"];
						}
					}),
					Object.defineProperty(exports, "ProductJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _product.ProductJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "SocialProfileJsonLd", {
						enumerable: !0,
						get: function get() {
							return _socialProfile["default"];
						}
					}),
					Object.defineProperty(exports, "SocialProfileJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _socialProfile.SocialProfileJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "CorporateContactJsonLd", {
						enumerable: !0,
						get: function get() {
							return _corporateContact["default"];
						}
					}),
					Object.defineProperty(exports, "CorporateContactJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _corporateContact.CorporateContactJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "NewsArticleJsonLd", {
						enumerable: !0,
						get: function get() {
							return _newsarticle["default"];
						}
					}),
					Object.defineProperty(exports, "NewsArticleJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _newsarticle.NewsArticleJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "EventJsonLd", {
						enumerable: !0,
						get: function get() {
							return _event["default"];
						}
					}),
					Object.defineProperty(exports, "EventJsonLdProps", {
						enumerable: !0,
						get: function get() {
							return _event.EventJsonLdProps;
						}
					}),
					Object.defineProperty(exports, "DefaultSeoProps", {
						enumerable: !0,
						get: function get() {
							return _types.DefaultSeoProps;
						}
					}),
					Object.defineProperty(exports, "NextSeoProps", {
						enumerable: !0,
						get: function get() {
							return _types.NextSeoProps;
						}
					});
				var _defaultSEO = _interopRequireDefault(
						__webpack_require__(
							/*! ./meta/defaultSEO */ "../../node_modules/next-seo/lib/meta/defaultSEO.js"
						)
					),
					_nextSEO = _interopRequireDefault(
						__webpack_require__(
							/*! ./meta/nextSEO */ "../../node_modules/next-seo/lib/meta/nextSEO.js"
						)
					),
					_article = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/article */ "../../node_modules/next-seo/lib/jsonld/article.js"
						)
					),
					_breadcrumb = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/breadcrumb */ "../../node_modules/next-seo/lib/jsonld/breadcrumb.js"
						)
					),
					_faqPage = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/faqPage */ "../../node_modules/next-seo/lib/jsonld/faqPage.js"
						)
					),
					_jobPosting = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/jobPosting */ "../../node_modules/next-seo/lib/jsonld/jobPosting.js"
						)
					),
					_blog = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/blog */ "../../node_modules/next-seo/lib/jsonld/blog.js"
						)
					),
					_course = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/course */ "../../node_modules/next-seo/lib/jsonld/course.js"
						)
					),
					_dataset = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/dataset */ "../../node_modules/next-seo/lib/jsonld/dataset.js"
						)
					),
					_localBusiness = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/localBusiness */ "../../node_modules/next-seo/lib/jsonld/localBusiness.js"
						)
					),
					_logo = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/logo */ "../../node_modules/next-seo/lib/jsonld/logo.js"
						)
					),
					_product = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/product */ "../../node_modules/next-seo/lib/jsonld/product.js"
						)
					),
					_socialProfile = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/socialProfile */ "../../node_modules/next-seo/lib/jsonld/socialProfile.js"
						)
					),
					_corporateContact = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/corporateContact */ "../../node_modules/next-seo/lib/jsonld/corporateContact.js"
						)
					),
					_newsarticle = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/newsarticle */ "../../node_modules/next-seo/lib/jsonld/newsarticle.js"
						)
					),
					_event = _interopRequireWildcard(
						__webpack_require__(
							/*! ./jsonld/event */ "../../node_modules/next-seo/lib/jsonld/event.js"
						)
					),
					_types = __webpack_require__(
						/*! ./types */ "../../node_modules/next-seo/lib/types.js"
					);

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/article.js":
			/*!*********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/article.js ***!
  \*********************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					__jsx = _react["default"].createElement,
					ArticleJsonLd = function (a) {
						var b = a.url,
							c = a.title,
							d = a.images,
							e = void 0 === d ? [] : d,
							f = a.datePublished,
							g = a.dateModified,
							h = void 0 === g ? null : g,
							i = a.authorName,
							j = a.description,
							k = a.publisherName,
							l = a.publisherLogo,
							m = '{\n    "@context": "http://schema.org",\n    "@type": "Article",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'
								.concat(b, '"\n    },\n    "headline": "')
								.concat(c, '",\n    "image": [\n      ')
								.concat(
									e.map(function (a) {
										return '"'.concat(a, '"');
									}),
									'\n     ],\n    "datePublished": "'
								)
								.concat(f, '",\n    "dateModified": "')
								.concat(
									h || f,
									'",\n    "author": {\n      "@type": "Person",\n      "name": "'
								)
								.concat(
									i,
									'"\n    },\n    "publisher": {\n      "@type": "Organization",\n      "name": "'
								)
								.concat(
									k,
									'",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "'
								)
								.concat(l, '"\n      }\n    },\n    "description": "')
								.concat(j, '"\n  }');
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(m),
								key: "jsonld-article"
							})
						);
					},
					_default = ArticleJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/blog.js":
			/*!******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/blog.js ***!
  \******************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					__jsx = _react["default"].createElement,
					BlogJsonLd = function (a) {
						var b = a.url,
							c = a.title,
							d = a.images,
							e = void 0 === d ? [] : d,
							f = a.datePublished,
							g = a.dateModified,
							h = void 0 === g ? null : g,
							i = a.authorName,
							j = a.description,
							k = '{\n    "@context": "http://schema.org",\n    "@type": "Blog",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'
								.concat(b, '"\n    },\n    "headline": "')
								.concat(c, '",\n    "image": [\n      ')
								.concat(
									e.map(function (a) {
										return '"'.concat(a, '"');
									}),
									'\n     ],\n    "datePublished": "'
								)
								.concat(f, '",\n    "dateModified": "')
								.concat(
									h || f,
									'",\n    "author": {\n      "@type": "Person",\n      "name": "'
								)
								.concat(i, '"\n    },\n    "description": "')
								.concat(j, '"\n  }');
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(k),
								key: "jsonld-blog"
							})
						);
					},
					_default = BlogJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/breadcrumb.js":
			/*!************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/breadcrumb.js ***!
  \************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					__jsx = _react["default"].createElement,
					BreadCrumbJsonLd = function (a) {
						var b = a.itemListElements,
							c = void 0 === b ? [] : b,
							d = '{\n    "@context": "http://schema.org",\n    "@type": "BreadcrumbList",\n    "itemListElement": [\n      '.concat(
								c.map(function (a) {
									return '{\n        "@type": "ListItem",\n        "position": '
										.concat(
											a.position,
											',\n        "item": {\n          "@id": "'
										)
										.concat(a.item, '",\n          "name": "')
										.concat(a.name, '"\n        }\n      }');
								}),
								"\n     ]\n  }"
							);
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(d),
								key: "jsonld-breadcrumb"
							})
						);
					},
					_default = BreadCrumbJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/corporateContact.js":
			/*!******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/corporateContact.js ***!
  \******************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					__jsx = _react["default"].createElement,
					formatIfArray = function (a) {
						return Array.isArray(a)
							? "[".concat(
									a.map(function (a) {
										return '"'.concat(a, '"');
									}),
									"]"
							  )
							: '"'.concat(a, '"');
					},
					buildContactPoint = function (a) {
						return a.map(function (a) {
							return '{\n    "@type": "ContactPoint",\n    "telephone": "'
								.concat(a.telephone, '",\n    "contactType": "')
								.concat(a.contactType, '"')
								.concat(
									a.areaServed
										? ',\n    "areaServed": '.concat(
												formatIfArray(a.areaServed)
										  )
										: ""
								)
								.concat(
									a.availableLanguage
										? ',\n    "availableLanguage": '.concat(
												formatIfArray(a.availableLanguage)
										  )
										: ""
								)
								.concat(
									a.contactOption
										? ',\n    "contactOption": "'.concat(a.contactOption, '"')
										: "",
									"\n    }"
								);
						});
					},
					CorporateContactJsonLd = function (a) {
						var b = a.url,
							c = a.logo,
							d = a.contactPoint,
							e = '{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "'
								.concat(b, '",\n    ')
								.concat(
									c ? '"logo": "'.concat(c, '",') : "",
									'\n    "contactPoint": ['
								)
								.concat(buildContactPoint(d), "]\n  }");
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(e),
								key: "jsonld-corporate-contact"
							})
						);
					},
					_default = CorporateContactJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/course.js":
			/*!********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/course.js ***!
  \********************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					__jsx = _react["default"].createElement,
					CourseJsonLd = function (a) {
						var b = a.courseName,
							c = a.description,
							d = a.providerName,
							e = a.providerUrl,
							f = '{\n    "@context": "http://schema.org",\n    "@type": "Course",\n    "name": "'
								.concat(b, '",\n    "description": "')
								.concat(
									c,
									'",\n    "provider": {\n      "@type": "Organization",\n      "name": "'
								)
								.concat(d, '"')
								.concat(
									e ? ',\n      "sameAs": "'.concat(e, '"') : "",
									"\n    }\n  }"
								);
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(f),
								key: "jsonld-course"
							})
						);
					},
					_default = CourseJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/dataset.js":
			/*!*********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/dataset.js ***!
  \*********************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					__jsx = _react["default"].createElement,
					DatasetJsonLd = function (a) {
						var b = a.description,
							c = a.name,
							d = a.license,
							e = '{\n    "@context": "http://schema.org",\n    "@type": "Dataset",\n    "description": "'
								.concat(b, '",\n    "name": "')
								.concat(c, '"')
								.concat(
									d ? ',\n        "license": "'.concat(d, '"') : "",
									"\n  }"
								);
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(e),
								key: "jsonld-dataset"
							})
						);
					},
					_default = DatasetJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/event.js":
			/*!*******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/event.js ***!
  \*******************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					_formatIfArray = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/formatIfArray */ "../../node_modules/next-seo/lib/utils/formatIfArray.js"
						)
					),
					_buildAddress = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/buildAddress */ "../../node_modules/next-seo/lib/utils/buildAddress.js"
						)
					),
					__jsx = _react["default"].createElement,
					buildLocation = function (a) {
						return '\n  "location": {\n    "@type": "Place",\n    '
							.concat((0, _buildAddress["default"])(a.address), "\n    ")
							.concat(
								a.sameAs ? '"sameAs": "'.concat(a.sameAs, '",') : "",
								'\n    "name": "'
							)
							.concat(a.name, '"\n  },\n');
					},
					EventJsonLd = function (a) {
						var b = a.name,
							c = a.startDate,
							d = a.endDate,
							e = a.location,
							f = a.url,
							g = a.description,
							h = a.images,
							i = '{\n    "@context": "http://schema.org",\n    "@type": "Event",\n    "startDate": "'
								.concat(c, '",\n    "endDate": "')
								.concat(d, '",\n    ')
								.concat(buildLocation(e), "\n    ")
								.concat(
									h
										? '"image":'.concat((0, _formatIfArray["default"])(h), ",")
										: "",
									"\n    "
								)
								.concat(f ? '"url": "'.concat(f, '",') : "", "\n    ")
								.concat(
									g ? '"description": "'.concat(g, '",') : "",
									'\n    "name": "'
								)
								.concat(b, '"\n  }');
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(i),
								key: "jsonld-event"
							})
						);
					},
					_default = EventJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/faqPage.js":
			/*!*********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/faqPage.js ***!
  \*********************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					__jsx = _react["default"].createElement,
					buildQuestions = function (a) {
						return "\n  ".concat(
							a.map(function (a) {
								return '{\n      "@type": "Question",\n      "name": "'
									.concat(
										a.questionName,
										'",\n      "acceptedAnswer": {\n        "@type": "Answer",\n        "text": "'
									)
									.concat(a.acceptedAnswerText, '"\n      }\n  }');
							})
						);
					},
					FAQPageJsonLd = function (a) {
						var b = a.mainEntity,
							c = void 0 === b ? [] : b,
							d = '{\n    "@context": "http://schema.org/",\n    "@type": "FAQPage",\n    "mainEntity": ['.concat(
								buildQuestions(c),
								"]\n  }"
							);
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(d),
								key: "jsonld-faq-page"
							})
						);
					},
					_default = FAQPageJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/jobPosting.js":
			/*!************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/jobPosting.js ***!
  \************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					__jsx = _react["default"].createElement,
					buildBaseSalary = function (a) {
						return '\n  "baseSalary": {\n    "@type": "MonetaryAmount",\n    '
							.concat(
								a.currency ? '"currency": "'.concat(a.currency, '",') : "",
								'\n    "value": {\n      "@type": "QuantitativeValue",\n      '
							)
							.concat(
								a.value ? '"value": "'.concat(a.value, '",') : "",
								"\n      "
							)
							.concat(
								a.unitText ? '"unitText": "'.concat(a.unitText, '"') : "",
								"\n    }\n  },\n"
							);
					},
					JobPostingJsonLd = function (a) {
						var b = a.baseSalary,
							c = a.datePosted,
							d = a.description,
							e = a.employmentType,
							f = a.hiringOrganization,
							g = a.jobLocation,
							h = a.applicantLocationRequirements,
							i = a.jobLocationType,
							j = a.title,
							k = a.validThrough,
							l = '{\n    "@context": "http://schema.org",\n    "@type": "JobPosting",\n    '
								.concat(b ? buildBaseSalary(b) : "", '\n    "datePosted": "')
								.concat(c, '",\n    "description": "')
								.concat(d, '",\n    ')
								.concat(
									e ? '"employmentType": "'.concat(e, '",') : "",
									'\n    "hiringOrganization" : {\n      "@type" : "Organization",\n      "name" : "'
								)
								.concat(f.name, '",\n      "sameAs" : "')
								.concat(
									f.sameAs,
									'"\n    },\n    \n    "jobLocation": {\n      "@type": "Place",\n      "address": {\n        "@type": "PostalAddress",\n        "addressLocality": "'
								)
								.concat(g.addressLocality, '",\n        "addressRegion": "')
								.concat(g.addressRegion, '",\n        "postalCode" : "')
								.concat(g.postalCode, '",\n        "streetAddress" : "')
								.concat(g.streetAddress, '",\n        "addressCountry" : "')
								.concat(g.addressCountry, '"\n      }\n    },\n    ')
								.concat(
									h
										? ' "applicantLocationRequirements": {\n        "@type": "Country",\n        "name": "'.concat(
												h,
												'"\n    },'
										  )
										: "",
									"\n    "
								)
								.concat(
									i ? '"jobLocationType": "'.concat(i, '",') : "",
									"\n    "
								)
								.concat(
									k ? '"validThrough": "'.concat(k, '",') : "",
									'\n    "title": "'
								)
								.concat(j, '"\n  }');
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(l),
								key: "jsonld-jobPosting"
							})
						);
					},
					_default = JobPostingJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/localBusiness.js":
			/*!***************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/localBusiness.js ***!
  \***************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					_formatIfArray = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/formatIfArray */ "../../node_modules/next-seo/lib/utils/formatIfArray.js"
						)
					),
					_buildAddress = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/buildAddress */ "../../node_modules/next-seo/lib/utils/buildAddress.js"
						)
					),
					__jsx = _react["default"].createElement,
					buildGeo = function (a) {
						return '\n  "geo": {\n    "@type": "GeoCoordinates",\n    "latitude": "'
							.concat(a.latitude, '",\n    "longitude": "')
							.concat(a.longitude, '"\n  },\n');
					},
					buildRating = function (a) {
						return '\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "'
							.concat(a.ratingValue, '",\n    "ratingCount": "')
							.concat(a.ratingCount, '"\n  },\n');
					},
					buildOpeningHours = function (a) {
						return '\n  {\n    "@type": "OpeningHoursSpecification",\n    "opens": "'
							.concat(a.opens, '",\n    "closes": "')
							.concat(a.closes, '",\n    ')
							.concat(
								a.dayOfWeek
									? '"dayOfWeek": '.concat(
											(0, _formatIfArray["default"])(a.dayOfWeek),
											","
									  )
									: "",
								"\n    "
							)
							.concat(
								a.validFrom ? '"validFrom": "'.concat(a.validFrom, '",') : "",
								"\n    "
							)
							.concat(
								a.validThrough
									? '"validThrough": "'.concat(a.validThrough, '"')
									: "",
								"\n  }\n"
							);
					},
					LocalBusinessJsonLd = function (a) {
						var b = a.type,
							c = a.id,
							d = a.name,
							e = a.description,
							f = a.url,
							g = a.telephone,
							h = a.address,
							i = a.geo,
							j = a.images,
							k = a.rating,
							l = a.priceRange,
							m = a.sameAs,
							n = a.openingHours,
							o = '{\n    "@context": "http://schema.org",\n    "@type": "'
								.concat(b, '",\n    "@id": "')
								.concat(c, '",\n    ')
								.concat(e ? '"description": "'.concat(e, '",') : "", "\n    ")
								.concat(f ? '"url": "'.concat(f, '",') : "", "\n    ")
								.concat(g ? '"telephone": "'.concat(g, '",') : "", "\n    ")
								.concat((0, _buildAddress["default"])(h), "\n    ")
								.concat(i ? "".concat(buildGeo(i)) : "", "\n    ")
								.concat(k ? "".concat(buildRating(k)) : "", "\n    ")
								.concat(
									l ? '"priceRange": "'.concat(l, '",') : "",
									'\n    "image":'
								)
								.concat((0, _formatIfArray["default"])(j), ",\n    ")
								.concat(
									m
										? '"sameAs": ['.concat(
												m.map(function (a) {
													return '"'.concat(a, '"');
												}),
												"],"
										  )
										: "",
									"\n    "
								)
								.concat(
									n
										? '"openingHoursSpecification": '.concat(
												Array.isArray(n)
													? "[".concat(
															n.map(function (a) {
																return "".concat(buildOpeningHours(a));
															}),
															"]"
													  )
													: buildOpeningHours(n),
												","
										  )
										: "",
									'\n    "name": "'
								)
								.concat(d, '"\n  }');
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(o),
								key: "jsonld-local-business"
							})
						);
					},
					_default = LocalBusinessJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/logo.js":
			/*!******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/logo.js ***!
  \******************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					__jsx = _react["default"].createElement,
					LogoJsonLd = function (a) {
						var b = a.url,
							c = a.logo,
							d = '{\n    "@context": "http://schema.org",\n    "@type": "Organization",\n    "url": "'
								.concat(b, '",\n    "logo": "')
								.concat(c, '"\n  }');
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(d),
								key: "jsonld-logo"
							})
						);
					},
					_default = LogoJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/newsarticle.js":
			/*!*************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/newsarticle.js ***!
  \*************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					__jsx = _react["default"].createElement,
					NewsArticleJsonLd = function (a) {
						var b = a.url,
							c = a.title,
							d = a.images,
							e = void 0 === d ? [] : d,
							f = a.section,
							g = a.keywords,
							h = a.datePublished,
							i = a.dateCreated,
							j = void 0 === i ? null : i,
							k = a.dateModified,
							l = void 0 === k ? null : k,
							m = a.authorName,
							n = a.description,
							o = a.body,
							p = a.publisherName,
							q = a.publisherLogo,
							r = '{\n    "@context": "http://schema.org",\n    "@type": "NewsArticle",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'
								.concat(b, '"\n    },\n    "headline": "')
								.concat(c, '",\n    "image": [\n      ')
								.concat(
									e.map(function (a) {
										return '"'.concat(a, '"');
									}),
									'\n     ],\n    "articleSection":"'
								)
								.concat(f, '",\n    "keywords": "')
								.concat(g, '",    \n    "datePublished": "')
								.concat(h, '",\n    "dateCreated": "')
								.concat(j || h, '",\n    "dateModified": "')
								.concat(
									l || h,
									'",\n    "author": {\n      "@type": "Person",\n      "name": "'
								)
								.concat(
									m,
									'"\n    },\n    "publisher": {\n      "@type": "Organization",\n      "name": "'
								)
								.concat(
									p,
									'",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "'
								)
								.concat(q, '"\n      }\n    },\n    "description": "')
								.concat(n, '",\n    "articleBody": "')
								.concat(o, '"\n  }');
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(r),
								key: "jsonld-newsarticle"
							})
						);
					},
					_default = NewsArticleJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/product.js":
			/*!*********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/product.js ***!
  \*********************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					_formatIfArray = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/formatIfArray */ "../../node_modules/next-seo/lib/utils/formatIfArray.js"
						)
					),
					__jsx = _react["default"].createElement,
					buildBrand = function (a) {
						return '\n  "brand": {\n      "@type": "Thing",\n      "name": "'.concat(
							a,
							'"\n    },\n'
						);
					},
					buildReviewRating = function (a) {
						return a
							? '"reviewRating": {\n          "@type": "Rating",\n          '
									.concat(
										a.bestRating
											? '"bestRating": "'.concat(a.bestRating, '",')
											: "",
										"\n          "
									)
									.concat(
										a.worstRating
											? '"worstRating": "'.concat(a.worstRating, '",')
											: "",
										'\n          "ratingValue": "'
									)
									.concat(a.ratingValue, '"\n        }')
							: "";
					},
					buildAuthor = function (a) {
						return '\n  "author": {\n      "@type": "'
							.concat(a.type, '",\n      "name": "')
							.concat(a.name, '"\n  },\n');
					},
					buildPublisher = function (a) {
						return '\n  "publisher": {\n      "@type": "'
							.concat(a.type, '",\n      "name": "')
							.concat(a.name, '"\n  },\n');
					},
					buildReviews = function (a) {
						return '\n"review": [\n  '.concat(
							a.map(function (a) {
								return '{\n      "@type": "Review",\n      '
									.concat(a.author ? buildAuthor(a.author) : "", "\n      ")
									.concat(
										a.publisher ? buildPublisher(a.publisher) : "",
										"\n      "
									)
									.concat(
										a.datePublished
											? '"datePublished": "'.concat(a.datePublished, '",')
											: "",
										"\n      "
									)
									.concat(
										a.reviewBody
											? '"reviewBody": "'.concat(a.reviewBody, '",')
											: "",
										"\n      "
									)
									.concat(
										a.name ? '"name": "'.concat(a.name, '",') : "",
										"\n      "
									)
									.concat(buildReviewRating(a.reviewRating), "\n  }");
							}),
							"],"
						);
					},
					buildAggregateRating = function (a) {
						return '\n  "aggregateRating": {\n      "@type": "AggregateRating",\n      "ratingValue": "'
							.concat(a.ratingValue, '",\n      "reviewCount": "')
							.concat(a.reviewCount, '"\n    },\n');
					},
					buildOffers = function (a) {
						return '\n  {\n    "@type": "Offer",\n    "priceCurrency": "'
							.concat(a.priceCurrency, '",\n    ')
							.concat(
								a.priceValidUntil
									? '"priceValidUntil": "'.concat(a.priceValidUntil, '",')
									: "",
								"\n    "
							)
							.concat(
								a.itemCondition
									? '"itemCondition": "'.concat(a.itemCondition, '",')
									: "",
								"\n    "
							)
							.concat(
								a.availability
									? '"availability": "'.concat(a.availability, '",')
									: "",
								"\n    "
							)
							.concat(a.url ? '"url": "'.concat(a.url, '",') : "", "\n    ")
							.concat(
								a.seller
									? '\n      "seller": {\n      "@type": "Organization",\n      "name": "'.concat(
											a.seller.name,
											'"\n    },\n    '
									  )
									: "",
								'\n    "price": "'
							)
							.concat(a.price, '"\n  }\n');
					},
					ProductJsonLd = function (a) {
						var b = a.productName,
							c = a.images,
							d = void 0 === c ? [] : c,
							e = a.description,
							f = a.sku,
							g = a.gtin8,
							h = a.gtin13,
							i = a.gtin14,
							j = a.mpn,
							k = a.brand,
							l = a.reviews,
							m = void 0 === l ? [] : l,
							n = a.aggregateRating,
							o = a.offers,
							p = '{\n    "@context": "http://schema.org/",\n    "@type": "Product",\n    "image":'
								.concat((0, _formatIfArray["default"])(d), ",\n    ")
								.concat(e ? '"description": "'.concat(e, '",') : "", "\n    ")
								.concat(j ? '"mpn": "'.concat(j, '",') : "", "\n    ")
								.concat(f ? '"sku": "'.concat(f, '",') : "", "\n    ")
								.concat(g ? '"gtin8": "'.concat(g, '",') : "", "\n    ")
								.concat(h ? '"gtin13": "'.concat(h, '",') : "", "\n    ")
								.concat(i ? '"gtin14": "'.concat(i, '",') : "", "\n    ")
								.concat(k ? buildBrand(k) : "", "\n    ")
								.concat(m.length ? buildReviews(m) : "", "\n    ")
								.concat(n ? buildAggregateRating(n) : "", "\n    ")
								.concat(
									o
										? '"offers": '.concat(
												Array.isArray(o)
													? "[".concat(
															o.map(function (a) {
																return "".concat(buildOffers(a));
															}),
															"]"
													  )
													: buildOffers(o),
												","
										  )
										: "",
									'\n    "name": "'
								)
								.concat(b, '"\n  }');
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(p),
								key: "jsonld-product"
							})
						);
					},
					_default = ProductJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/jsonld/socialProfile.js":
			/*!***************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/jsonld/socialProfile.js ***!
  \***************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_markup = _interopRequireDefault(
						__webpack_require__(
							/*! ../utils/markup */ "../../node_modules/next-seo/lib/utils/markup.js"
						)
					),
					__jsx = _react["default"].createElement,
					SocialProfileJsonLd = function (a) {
						var b = a.type,
							c = a.name,
							d = a.url,
							e = a.sameAs,
							f = void 0 === e ? [] : e,
							g = '{\n    "@context": "http://schema.org",\n    "@type": "'
								.concat(b, '",\n    "name": "')
								.concat(c, '",\n    "url": "')
								.concat(d, '",\n    "sameAs": [\n      ')
								.concat(
									f.map(function (a) {
										return '"'.concat(a, '"');
									}),
									"\n     ]\n  }"
								);
						return _react["default"].createElement(
							_head["default"],
							null,
							_react["default"].createElement("script", {
								type: "application/ld+json",
								dangerouslySetInnerHTML: (0, _markup["default"])(g),
								key: "jsonld-social"
							})
						);
					},
					_default = SocialProfileJsonLd;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/meta/buildTags.js":
			/*!*********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/meta/buildTags.js ***!
  \*********************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _extends2 = _interopRequireDefault(
						__webpack_require__(
							/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js"
						)
					),
					_react = _interopRequireDefault(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					__jsx = _react["default"].createElement,
					defaults = {
						templateTitle: "",
						noindex: !1,
						nofollow: !1,
						defaultOpenGraphImageWidth: 0,
						defaultOpenGraphImageHeight: 0,
						defaultOpenGraphVideoWidth: 0,
						defaultOpenGraphVideoHeight: 0
					},
					buildTags = function (a) {
						var b = [];
						a.titleTemplate && (defaults.templateTitle = a.titleTemplate);
						var c = "";
						a.title &&
							((c = a.title),
							defaults.templateTitle &&
								(c = defaults.templateTitle.replace(/%s/g, function () {
									return c;
								})),
							b.push(
								_react["default"].createElement("title", { key: "title" }, c)
							));
						var d =
								a.noindex ||
								defaults.noindex ||
								a.dangerouslySetAllPagesToNoIndex,
							e =
								a.nofollow ||
								defaults.nofollow ||
								a.dangerouslySetAllPagesToNoFollow;
						if (
							(d || e
								? (a.dangerouslySetAllPagesToNoIndex && (defaults.noindex = !0),
								  a.dangerouslySetAllPagesToNoFollow &&
										(defaults.nofollow = !0),
								  b.push(
										_react["default"].createElement("meta", {
											key: "robots",
											name: "robots",
											content: ""
												.concat(d ? "noindex" : "index", ",")
												.concat(e ? "nofollow" : "follow")
										})
								  ),
								  b.push(
										_react["default"].createElement("meta", {
											key: "googlebot",
											name: "googlebot",
											content: ""
												.concat(d ? "noindex" : "index", ",")
												.concat(e ? "nofollow" : "follow")
										})
								  ))
								: (b.push(
										_react["default"].createElement("meta", {
											key: "robots",
											name: "robots",
											content: "index,follow"
										})
								  ),
								  b.push(
										_react["default"].createElement("meta", {
											key: "googlebot",
											name: "googlebot",
											content: "index,follow"
										})
								  )),
							a.description &&
								b.push(
									_react["default"].createElement("meta", {
										key: "description",
										name: "description",
										content: a.description
									})
								),
							a.mobileAlternate &&
								b.push(
									_react["default"].createElement("link", {
										rel: "alternate",
										key: "mobileAlternate",
										media: a.mobileAlternate.media,
										href: a.mobileAlternate.href
									})
								),
							a.languageAlternates &&
								0 < a.languageAlternates.length &&
								a.languageAlternates.forEach(function (a) {
									b.push(
										_react["default"].createElement("link", {
											rel: "alternate",
											key: "languageAlternate-".concat(a.hrefLang),
											hrefLang: a.hrefLang,
											href: a.href
										})
									);
								}),
							a.twitter &&
								(a.twitter.cardType &&
									b.push(
										_react["default"].createElement("meta", {
											key: "twitter:card",
											name: "twitter:card",
											content: a.twitter.cardType
										})
									),
								a.twitter.site &&
									b.push(
										_react["default"].createElement("meta", {
											key: "twitter:site",
											name: "twitter:site",
											content: a.twitter.site
										})
									),
								a.twitter.handle &&
									b.push(
										_react["default"].createElement("meta", {
											key: "twitter:creator",
											name: "twitter:creator",
											content: a.twitter.handle
										})
									)),
							a.facebook &&
								a.facebook.appId &&
								b.push(
									_react["default"].createElement("meta", {
										key: "fb:app_id",
										property: "fb:app_id",
										content: a.facebook.appId
									})
								),
							a.openGraph)
						) {
							if (
								((a.openGraph.url || a.canonical) &&
									b.push(
										_react["default"].createElement("meta", {
											key: "og:url",
											property: "og:url",
											content: a.openGraph.url || a.canonical
										})
									),
								a.openGraph.type)
							) {
								var f = a.openGraph.type.toLowerCase();
								b.push(
									_react["default"].createElement("meta", {
										key: "og:type",
										property: "og:type",
										content: f
									})
								),
									"profile" === f && a.openGraph.profile
										? (a.openGraph.profile.firstName &&
												b.push(
													_react["default"].createElement("meta", {
														key: "profile:first_name",
														property: "profile:first_name",
														content: a.openGraph.profile.firstName
													})
												),
										  a.openGraph.profile.lastName &&
												b.push(
													_react["default"].createElement("meta", {
														key: "profile:last_name",
														property: "profile:last_name",
														content: a.openGraph.profile.lastName
													})
												),
										  a.openGraph.profile.username &&
												b.push(
													_react["default"].createElement("meta", {
														key: "profile:username",
														property: "profile:username",
														content: a.openGraph.profile.username
													})
												),
										  a.openGraph.profile.gender &&
												b.push(
													_react["default"].createElement("meta", {
														key: "profile:gender",
														property: "profile:gender",
														content: a.openGraph.profile.gender
													})
												))
										: "book" === f && a.openGraph.book
										? (a.openGraph.book.authors &&
												a.openGraph.book.authors.length &&
												a.openGraph.book.authors.forEach(function (a, c) {
													b.push(
														_react["default"].createElement("meta", {
															key: "book:author:0".concat(c),
															property: "book:author",
															content: a
														})
													);
												}),
										  a.openGraph.book.isbn &&
												b.push(
													_react["default"].createElement("meta", {
														key: "book:isbn",
														property: "book:isbn",
														content: a.openGraph.book.isbn
													})
												),
										  a.openGraph.book.releaseDate &&
												b.push(
													_react["default"].createElement("meta", {
														key: "book:release_date",
														property: "book:release_date",
														content: a.openGraph.book.releaseDate
													})
												),
										  a.openGraph.book.tags &&
												a.openGraph.book.tags.length &&
												a.openGraph.book.tags.forEach(function (a, c) {
													b.push(
														_react["default"].createElement("meta", {
															key: "book:tag:0".concat(c),
															property: "book:tag",
															content: a
														})
													);
												}))
										: "article" === f && a.openGraph.article
										? (a.openGraph.article.publishedTime &&
												b.push(
													_react["default"].createElement("meta", {
														key: "article:published_time",
														property: "article:published_time",
														content: a.openGraph.article.publishedTime
													})
												),
										  a.openGraph.article.modifiedTime &&
												b.push(
													_react["default"].createElement("meta", {
														key: "article:modified_time",
														property: "article:modified_time",
														content: a.openGraph.article.modifiedTime
													})
												),
										  a.openGraph.article.expirationTime &&
												b.push(
													_react["default"].createElement("meta", {
														key: "article:expiration_time",
														property: "article:expiration_time",
														content: a.openGraph.article.expirationTime
													})
												),
										  a.openGraph.article.authors &&
												a.openGraph.article.authors.length &&
												a.openGraph.article.authors.forEach(function (a, c) {
													b.push(
														_react["default"].createElement("meta", {
															key: "article:author:0".concat(c),
															property: "article:author",
															content: a
														})
													);
												}),
										  a.openGraph.article.section &&
												b.push(
													_react["default"].createElement("meta", {
														key: "article:section",
														property: "article:section",
														content: a.openGraph.article.section
													})
												),
										  a.openGraph.article.tags &&
												a.openGraph.article.tags.length &&
												a.openGraph.article.tags.forEach(function (a, c) {
													b.push(
														_react["default"].createElement("meta", {
															key: "article:tag:0".concat(c),
															property: "article:tag",
															content: a
														})
													);
												}))
										: ("video.movie" === f ||
												"video.episode" === f ||
												"video.tv_show" === f ||
												"video.other" === f) &&
										  a.openGraph.video &&
										  (a.openGraph.video.actors &&
												a.openGraph.video.actors.length &&
												a.openGraph.video.actors.forEach(function (a, c) {
													a.profile &&
														b.push(
															_react["default"].createElement("meta", {
																key: "video:actor:0".concat(c),
																property: "video:actor",
																content: a.profile
															})
														),
														a.role &&
															b.push(
																_react["default"].createElement("meta", {
																	key: "video:actor:role:0".concat(c),
																	property: "video:actor:role",
																	content: a.role
																})
															);
												}),
										  a.openGraph.video.directors &&
												a.openGraph.video.directors.length &&
												a.openGraph.video.directors.forEach(function (a, c) {
													b.push(
														_react["default"].createElement("meta", {
															key: "video:director:0".concat(c),
															property: "video:director",
															content: a
														})
													);
												}),
										  a.openGraph.video.writers &&
												a.openGraph.video.writers.length &&
												a.openGraph.video.writers.forEach(function (a, c) {
													b.push(
														_react["default"].createElement("meta", {
															key: "video:writer:0".concat(c),
															property: "video:writer",
															content: a
														})
													);
												}),
										  a.openGraph.video.duration &&
												b.push(
													_react["default"].createElement("meta", {
														key: "video:duration",
														property: "video:duration",
														content: a.openGraph.video.duration.toString()
													})
												),
										  a.openGraph.video.releaseDate &&
												b.push(
													_react["default"].createElement("meta", {
														key: "video:release_date",
														property: "video:release_date",
														content: a.openGraph.video.releaseDate
													})
												),
										  a.openGraph.video.tags &&
												a.openGraph.video.tags.length &&
												a.openGraph.video.tags.forEach(function (a, c) {
													b.push(
														_react["default"].createElement("meta", {
															key: "video:tag:0".concat(c),
															property: "video:tag",
															content: a
														})
													);
												}),
										  a.openGraph.video.series &&
												b.push(
													_react["default"].createElement("meta", {
														key: "video:series",
														property: "video:series",
														content: a.openGraph.video.series
													})
												));
							}
							(a.openGraph.title || a.title) &&
								b.push(
									_react["default"].createElement("meta", {
										key: "og:title",
										property: "og:title",
										content: a.openGraph.title || c
									})
								),
								(a.openGraph.description || a.description) &&
									b.push(
										_react["default"].createElement("meta", {
											key: "og:description",
											property: "og:description",
											content: a.openGraph.description || a.description
										})
									),
								a.defaultOpenGraphImageWidth &&
									(defaults.defaultOpenGraphImageWidth =
										a.defaultOpenGraphImageWidth),
								a.defaultOpenGraphImageHeight &&
									(defaults.defaultOpenGraphImageHeight =
										a.defaultOpenGraphImageHeight),
								a.openGraph.images &&
									a.openGraph.images.length &&
									a.openGraph.images.forEach(function (a, c) {
										b.push(
											_react["default"].createElement("meta", {
												key: "og:image:0".concat(c),
												property: "og:image",
												content: a.url
											})
										),
											a.alt &&
												b.push(
													_react["default"].createElement("meta", {
														key: "og:image:alt0".concat(c),
														property: "og:image:alt",
														content: a.alt
													})
												),
											a.width
												? b.push(
														_react["default"].createElement("meta", {
															key: "og:image:width0".concat(c),
															property: "og:image:width",
															content: a.width.toString()
														})
												  )
												: defaults.defaultOpenGraphImageWidth &&
												  b.push(
														_react["default"].createElement("meta", {
															key: "og:image:width0".concat(c),
															property: "og:image:width",
															content: defaults.defaultOpenGraphImageWidth.toString()
														})
												  ),
											a.height
												? b.push(
														_react["default"].createElement("meta", {
															key: "og:image:height".concat(c),
															property: "og:image:height",
															content: a.height.toString()
														})
												  )
												: defaults.defaultOpenGraphImageHeight &&
												  b.push(
														_react["default"].createElement("meta", {
															key: "og:image:height".concat(c),
															property: "og:image:height",
															content: defaults.defaultOpenGraphImageHeight.toString()
														})
												  );
									}),
								a.defaultOpenGraphVideoWidth &&
									(defaults.defaultOpenGraphVideoWidth =
										a.defaultOpenGraphVideoWidth),
								a.defaultOpenGraphVideoHeight &&
									(defaults.defaultOpenGraphVideoHeight =
										a.defaultOpenGraphVideoHeight),
								a.openGraph.videos &&
									a.openGraph.videos.length &&
									a.openGraph.videos.forEach(function (a, c) {
										b.push(
											_react["default"].createElement("meta", {
												key: "og:video:0".concat(c),
												property: "og:video",
												content: a.url
											})
										),
											a.alt &&
												b.push(
													_react["default"].createElement("meta", {
														key: "og:video:alt0".concat(c),
														property: "og:video:alt",
														content: a.alt
													})
												),
											a.width
												? b.push(
														_react["default"].createElement("meta", {
															key: "og:video:width0".concat(c),
															property: "og:video:width",
															content: a.width.toString()
														})
												  )
												: defaults.defaultOpenGraphVideoWidth &&
												  b.push(
														_react["default"].createElement("meta", {
															key: "og:video:width0".concat(c),
															property: "og:video:width",
															content: defaults.defaultOpenGraphVideoWidth.toString()
														})
												  ),
											a.height
												? b.push(
														_react["default"].createElement("meta", {
															key: "og:video:height".concat(c),
															property: "og:video:height",
															content: a.height.toString()
														})
												  )
												: defaults.defaultOpenGraphVideoHeight &&
												  b.push(
														_react["default"].createElement("meta", {
															key: "og:video:height".concat(c),
															property: "og:video:height",
															content: defaults.defaultOpenGraphVideoHeight.toString()
														})
												  );
									}),
								a.openGraph.locale &&
									b.push(
										_react["default"].createElement("meta", {
											key: "og:locale",
											property: "og:locale",
											content: a.openGraph.locale
										})
									),
								a.openGraph.site_name &&
									b.push(
										_react["default"].createElement("meta", {
											key: "og:site_name",
											property: "og:site_name",
											content: a.openGraph.site_name
										})
									);
						}
						return (
							a.canonical &&
								b.push(
									_react["default"].createElement("link", {
										rel: "canonical",
										href: a.canonical,
										key: "canonical"
									})
								),
							a.additionalMetaTags &&
								0 < a.additionalMetaTags.length &&
								a.additionalMetaTags.forEach(function (a) {
									b.push(
										_react["default"].createElement(
											"meta",
											(0, _extends2["default"])(
												{ key: a.name ? a.name : a.property },
												a
											)
										)
									);
								}),
							b
						);
					},
					_default = buildTags;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/meta/defaultSEO.js":
			/*!**********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/meta/defaultSEO.js ***!
  \**********************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireWildcard = __webpack_require__(
						/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"
					),
					_interopRequireDefault = __webpack_require__(
						/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
					);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _classCallCheck2 = _interopRequireDefault(
						__webpack_require__(
							/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"
						)
					),
					_createClass2 = _interopRequireDefault(
						__webpack_require__(
							/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"
						)
					),
					_possibleConstructorReturn2 = _interopRequireDefault(
						__webpack_require__(
							/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"
						)
					),
					_getPrototypeOf2 = _interopRequireDefault(
						__webpack_require__(
							/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"
						)
					),
					_inherits2 = _interopRequireDefault(
						__webpack_require__(
							/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_react = _interopRequireWildcard(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_buildTags = _interopRequireDefault(
						__webpack_require__(
							/*! ./buildTags */ "../../node_modules/next-seo/lib/meta/buildTags.js"
						)
					),
					__jsx = _react["default"].createElement,
					_default = /*#__PURE__*/ (function (a) {
						function b() {
							return (
								(0, _classCallCheck2["default"])(this, b),
								(0, _possibleConstructorReturn2["default"])(
									this,
									(0, _getPrototypeOf2["default"])(b).apply(this, arguments)
								)
							);
						}
						return (
							(0, _inherits2["default"])(b, a),
							(0, _createClass2["default"])(b, [
								{
									key: "render",
									value: function render() {
										var a = this.props,
											b = a.title,
											c = a.titleTemplate,
											d = a.dangerouslySetAllPagesToNoIndex,
											e = a.dangerouslySetAllPagesToNoFollow,
											f = a.description,
											g = a.canonical,
											h = a.facebook,
											i = a.openGraph,
											j = a.additionalMetaTags,
											k = a.twitter,
											l = a.defaultOpenGraphImageWidth,
											m = a.defaultOpenGraphImageHeight,
											n = a.defaultOpenGraphVideoWidth,
											o = a.defaultOpenGraphVideoHeight,
											p = a.mobileAlternate,
											q = a.languageAlternates;
										return _react["default"].createElement(
											_head["default"],
											null,
											(0, _buildTags["default"])({
												title: b,
												titleTemplate: c,
												dangerouslySetAllPagesToNoIndex: void 0 !== d && d,
												dangerouslySetAllPagesToNoFollow: void 0 !== e && e,
												description: f,
												canonical: g,
												facebook: h,
												openGraph: i,
												additionalMetaTags: j,
												twitter: k,
												defaultOpenGraphImageWidth: l,
												defaultOpenGraphImageHeight: m,
												defaultOpenGraphVideoWidth: n,
												defaultOpenGraphVideoHeight: o,
												mobileAlternate: p,
												languageAlternates: q
											})
										);
									}
								}
							]),
							b
						);
					})(_react.Component);
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/meta/nextSEO.js":
			/*!*******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/meta/nextSEO.js ***!
  \*******************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				var _interopRequireWildcard = __webpack_require__(
						/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"
					),
					_interopRequireDefault = __webpack_require__(
						/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js"
					);
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _classCallCheck2 = _interopRequireDefault(
						__webpack_require__(
							/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"
						)
					),
					_createClass2 = _interopRequireDefault(
						__webpack_require__(
							/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"
						)
					),
					_possibleConstructorReturn2 = _interopRequireDefault(
						__webpack_require__(
							/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"
						)
					),
					_getPrototypeOf2 = _interopRequireDefault(
						__webpack_require__(
							/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"
						)
					),
					_inherits2 = _interopRequireDefault(
						__webpack_require__(
							/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"
						)
					),
					_head = _interopRequireDefault(
						__webpack_require__(
							/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js"
						)
					),
					_react = _interopRequireWildcard(
						__webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						)
					),
					_buildTags = _interopRequireDefault(
						__webpack_require__(
							/*! ./buildTags */ "../../node_modules/next-seo/lib/meta/buildTags.js"
						)
					),
					__jsx = _react["default"].createElement,
					_default = /*#__PURE__*/ (function (a) {
						function b() {
							return (
								(0, _classCallCheck2["default"])(this, b),
								(0, _possibleConstructorReturn2["default"])(
									this,
									(0, _getPrototypeOf2["default"])(b).apply(this, arguments)
								)
							);
						}
						return (
							(0, _inherits2["default"])(b, a),
							(0, _createClass2["default"])(b, [
								{
									key: "render",
									value: function render() {
										var a = this.props,
											b = a.title,
											c = a.noindex,
											d = a.nofollow,
											e = a.description,
											f = a.canonical,
											g = a.openGraph,
											h = a.facebook,
											i = a.twitter,
											j = a.additionalMetaTags,
											k = a.titleTemplate,
											l = a.mobileAlternate,
											m = a.languageAlternates;
										return _react["default"].createElement(
											_head["default"],
											null,
											(0, _buildTags["default"])({
												title: b,
												noindex: void 0 !== c && c,
												nofollow: d,
												description: e,
												canonical: f,
												facebook: h,
												openGraph: g,
												additionalMetaTags: j,
												twitter: i,
												titleTemplate: k,
												mobileAlternate: l,
												languageAlternates: m
											})
										);
									}
								}
							]),
							b
						);
					})(_react.Component);
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/types.js":
			/*!************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/types.js ***!
  \************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				/***/

			},

		/***/ "../../node_modules/next-seo/lib/utils/buildAddress.js":
			/*!*************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/utils/buildAddress.js ***!
  \*************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var _default = function (a) {
					return '\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "'
						.concat(a.streetAddress, '",\n    "addressLocality": "')
						.concat(a.addressLocality, '",\n    ')
						.concat(
							a.addressRegion
								? '"addressRegion": "'.concat(a.addressRegion, '",')
								: "",
							'\n    "postalCode": "'
						)
						.concat(a.postalCode, '",\n    "addressCountry": "')
						.concat(a.addressCountry, '"\n  },\n');
				};
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/utils/formatIfArray.js":
			/*!**************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/utils/formatIfArray.js ***!
  \**************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var formatIfArray = function (a) {
						return Array.isArray(a)
							? "[".concat(
									a.map(function (a) {
										return '"'.concat(a, '"');
									}),
									"]"
							  )
							: '"'.concat(a, '"');
					},
					_default = formatIfArray;
				exports["default"] = _default;

				/***/
			},

		/***/ "../../node_modules/next-seo/lib/utils/markup.js":
			/*!*******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next-seo/lib/utils/markup.js ***!
  \*******************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				Object.defineProperty(exports, "__esModule", { value: !0 }),
					(exports["default"] = void 0);
				var markup = function (a) {
						return { __html: a };
					},
					_default = markup;
				exports["default"] = _default;

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

		/***/ "../../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.jsx&hotRouterUpdates=true!./":
			/*!************************************************************************************************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.jsx&hotRouterUpdates=true ***!
  \************************************************************************************************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				(window.__NEXT_P = window.__NEXT_P || []).push([
					"/_app",
					function () {
						var mod = __webpack_require__(
							/*! private-next-pages/_app.jsx */ "./src/pages/_app.jsx"
						);
						if (true) {
							module.hot.accept(
								/*! private-next-pages/_app.jsx */ "./src/pages/_app.jsx",
								function () {
									if (!next.router.components["/_app"]) return;
									var updatedPage = __webpack_require__(
										/*! private-next-pages/_app.jsx */ "./src/pages/_app.jsx"
									);
									next.router.update("/_app", updatedPage);
								}
							);
						}
						return mod;
					}
				]);

				/***/
			},

		/***/ "../../node_modules/next/dist/client/router.js":
			/*!*****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/client/router.js ***!
  \*****************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var _construct = __webpack_require__(
					/*! @babel/runtime/helpers/construct */ "../../node_modules/next/node_modules/@babel/runtime/helpers/construct.js"
				);

				function _createForOfIteratorHelper(o) {
					if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
						if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
							var i = 0;
							var F = function F() {};
							return {
								s: F,
								n: function n() {
									if (i >= o.length) return { done: true };
									return { done: false, value: o[i++] };
								},
								e: function e(_e) {
									throw _e;
								},
								f: F
							};
						}
						throw new TypeError(
							"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					}
					var it,
						normalCompletion = true,
						didErr = false,
						err;
					return {
						s: function s() {
							it = o[Symbol.iterator]();
						},
						n: function n() {
							var step = it.next();
							normalCompletion = step.done;
							return step;
						},
						e: function e(_e2) {
							didErr = true;
							err = _e2;
						},
						f: function f() {
							try {
								if (!normalCompletion && it["return"] != null) it["return"]();
							} finally {
								if (didErr) throw err;
							}
						}
					};
				}

				function _unsupportedIterableToArray(o, minLen) {
					if (!o) return;
					if (typeof o === "string") return _arrayLikeToArray(o, minLen);
					var n = Object.prototype.toString.call(o).slice(8, -1);
					if (n === "Object" && o.constructor) n = o.constructor.name;
					if (n === "Map" || n === "Set") return Array.from(n);
					if (
						n === "Arguments" ||
						/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
					)
						return _arrayLikeToArray(o, minLen);
				}

				function _arrayLikeToArray(arr, len) {
					if (len == null || len > arr.length) len = arr.length;
					for (var i = 0, arr2 = new Array(len); i < len; i++) {
						arr2[i] = arr[i];
					}
					return arr2;
				}

				var _interopRequireWildcard = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js"
				);

				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);

				exports.__esModule = true;
				exports.useRouter = useRouter;
				exports.makePublicRouterInstance = makePublicRouterInstance;
				exports.createRouter = exports.withRouter = exports["default"] = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ "../../node_modules/react/index.js")
				);

				var _router2 = _interopRequireWildcard(
					__webpack_require__(
						/*! ../next-server/lib/router/router */ "../../node_modules/next/dist/next-server/lib/router/router.js"
					)
				);

				exports.Router = _router2["default"];
				exports.NextRouter = _router2.NextRouter;

				var _routerContext = __webpack_require__(
					/*! ../next-server/lib/router-context */ "../../node_modules/next/dist/next-server/lib/router-context.js"
				);

				var _withRouter = _interopRequireDefault(
					__webpack_require__(
						/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"
					)
				);

				exports.withRouter = _withRouter["default"];
				/* global window */

				var singletonRouter = {
					router: null,
					// holds the actual router instance
					readyCallbacks: [],
					ready: function ready(cb) {
						if (this.router) return cb();

						if (true) {
							this.readyCallbacks.push(cb);
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
					get: function get() {
						return _router2["default"].events;
					}
				});
				urlPropertyFields.forEach(function (field) {
					// Here we need to use Object.defineProperty because, we need to return
					// the property assigned to the actual router
					// The value might get changed as we change routes and this is the
					// proper way to access it
					Object.defineProperty(singletonRouter, field, {
						get: function get() {
							var router = getRouter();
							return router[field];
						}
					});
				});
				coreMethodFields.forEach(function (field) {
					// We don't really know the types here, so we add them later instead
					singletonRouter[field] = function () {
						var router = getRouter();
						return router[field].apply(router, arguments);
					};
				});
				routerEvents.forEach(function (event) {
					singletonRouter.ready(function () {
						_router2["default"].events.on(event, function () {
							var eventField =
								"on" + event.charAt(0).toUpperCase() + event.substring(1);
							var _singletonRouter = singletonRouter;

							if (_singletonRouter[eventField]) {
								try {
									_singletonRouter[eventField].apply(
										_singletonRouter,
										arguments
									);
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

				exports["default"] = _default;

				function useRouter() {
					return _react["default"].useContext(_routerContext.RouterContext);
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

					singletonRouter.router = _construct(_router2["default"], args);
					singletonRouter.readyCallbacks.forEach(function (cb) {
						return cb();
					});
					singletonRouter.readyCallbacks = [];
					return singletonRouter.router;
				}; // This function is used to create the `withRouter` router instance

				exports.createRouter = createRouter;

				function makePublicRouterInstance(router) {
					var _router = router;
					var instance = {};

					var _iterator = _createForOfIteratorHelper(urlPropertyFields),
						_step;

					try {
						for (_iterator.s(); !(_step = _iterator.n()).done; ) {
							var property = _step.value;

							if (typeof _router[property] === "object") {
								instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

								continue;
							}

							instance[property] = _router[property];
						} // Events is a static property on the router, the router doesn't have to be initialized to use it
					} catch (err) {
						_iterator.e(err);
					} finally {
						_iterator.f();
					}

					instance.events = _router2["default"].events;
					coreMethodFields.forEach(function (field) {
						instance[field] = function () {
							return _router[field].apply(_router, arguments);
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
				exports["default"] = withRouter;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ "../../node_modules/react/index.js")
				);

				var _router = __webpack_require__(
					/*! ./router */ "../../node_modules/next/dist/client/router.js"
				);

				function withRouter(ComposedComponent) {
					function WithRouterWrapper(props) {
						return _react["default"].createElement(
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

		/***/ "../../node_modules/next/dist/next-server/lib/amp-context.js":
			/*!*******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/amp-context.js ***!
  \*******************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var __importStar =
					(this && this.__importStar) ||
					function (mod) {
						if (mod && mod.__esModule) return mod;
						var result = {};
						if (mod != null)
							for (var k in mod) {
								if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
							}
						result["default"] = mod;
						return result;
					};

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var React = __importStar(
					__webpack_require__(/*! react */ "../../node_modules/react/index.js")
				);

				exports.AmpStateContext = React.createContext({});

				if (true) {
					exports.AmpStateContext.displayName = "AmpStateContext";
				}

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/amp.js":
			/*!***********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/amp.js ***!
  \***********************************************************************************/
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

				var react_1 = __importDefault(
					__webpack_require__(/*! react */ "../../node_modules/react/index.js")
				);

				var amp_context_1 = __webpack_require__(
					/*! ./amp-context */ "../../node_modules/next/dist/next-server/lib/amp-context.js"
				);

				function isInAmpMode() {
					var _ref =
							arguments.length > 0 && arguments[0] !== undefined
								? arguments[0]
								: {},
						_ref$ampFirst = _ref.ampFirst,
						ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
						_ref$hybrid = _ref.hybrid,
						hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
						_ref$hasQuery = _ref.hasQuery,
						hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

					return ampFirst || (hybrid && hasQuery);
				}

				exports.isInAmpMode = isInAmpMode;

				function useAmp() {
					// Don't assign the context value to a variable to save bytes
					return isInAmpMode(
						react_1["default"].useContext(amp_context_1.AmpStateContext)
					);
				}

				exports.useAmp = useAmp;

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/head-manager-context.js":
			/*!****************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \****************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var __importStar =
					(this && this.__importStar) ||
					function (mod) {
						if (mod && mod.__esModule) return mod;
						var result = {};
						if (mod != null)
							for (var k in mod) {
								if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
							}
						result["default"] = mod;
						return result;
					};

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var React = __importStar(
					__webpack_require__(/*! react */ "../../node_modules/react/index.js")
				);

				exports.HeadManagerContext = React.createContext(null);

				if (true) {
					exports.HeadManagerContext.displayName = "HeadManagerContext";
				}

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/head.js":
			/*!************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/head.js ***!
  \************************************************************************************/
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

				var react_1 = __importDefault(
					__webpack_require__(/*! react */ "../../node_modules/react/index.js")
				);

				var side_effect_1 = __importDefault(
					__webpack_require__(
						/*! ./side-effect */ "../../node_modules/next/dist/next-server/lib/side-effect.js"
					)
				);

				var amp_context_1 = __webpack_require__(
					/*! ./amp-context */ "../../node_modules/next/dist/next-server/lib/amp-context.js"
				);

				var head_manager_context_1 = __webpack_require__(
					/*! ./head-manager-context */ "../../node_modules/next/dist/next-server/lib/head-manager-context.js"
				);

				var amp_1 = __webpack_require__(
					/*! ./amp */ "../../node_modules/next/dist/next-server/lib/amp.js"
				);

				function defaultHead() {
					var inAmpMode =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: false;
					var head = [
						react_1["default"].createElement("meta", {
							charSet: "utf-8"
						})
					];

					if (!inAmpMode) {
						head.push(
							react_1["default"].createElement("meta", {
								name: "viewport",
								content: "width=device-width"
							})
						);
					}

					return head;
				}

				exports.defaultHead = defaultHead;

				function onlyReactElement(list, child) {
					// React children can be "string" or "number" in this case we ignore them for backwards compat
					if (typeof child === "string" || typeof child === "number") {
						return list;
					} // Adds support for React.Fragment

					if (child.type === react_1["default"].Fragment) {
						return list.concat(
							react_1["default"].Children.toArray(child.props.children).reduce(
								function (fragmentList, fragmentChild) {
									if (
										typeof fragmentChild === "string" ||
										typeof fragmentChild === "number"
									) {
										return fragmentList;
									}

									return fragmentList.concat(fragmentChild);
								},
								[]
							)
						);
					}

					return list.concat(child);
				}

				var METATYPES = ["name", "httpEquiv", "charSet", "itemProp"];
				/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

				function unique() {
					var keys = new Set();
					var tags = new Set();
					var metaTypes = new Set();
					var metaCategories = {};
					return function (h) {
						var unique = true;

						if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
							var key = h.key.slice(h.key.indexOf("$") + 1);

							if (keys.has(key)) {
								unique = false;
							} else {
								keys.add(key);
							}
						} // eslint-disable-next-line default-case

						switch (h.type) {
							case "title":
							case "base":
								if (tags.has(h.type)) {
									unique = false;
								} else {
									tags.add(h.type);
								}

								break;

							case "meta":
								for (var i = 0, len = METATYPES.length; i < len; i++) {
									var metatype = METATYPES[i];
									if (!h.props.hasOwnProperty(metatype)) continue;

									if (metatype === "charSet") {
										if (metaTypes.has(metatype)) {
											unique = false;
										} else {
											metaTypes.add(metatype);
										}
									} else {
										var category = h.props[metatype];
										var categories = metaCategories[metatype] || new Set();

										if (categories.has(category)) {
											unique = false;
										} else {
											categories.add(category);
											metaCategories[metatype] = categories;
										}
									}
								}

								break;
						}

						return unique;
					};
				}
				/**
				 *
				 * @param headElements List of multiple <Head> instances
				 */

				function reduceComponents(headElements, props) {
					return headElements
						.reduce(function (list, headElement) {
							var headElementChildren = react_1["default"].Children.toArray(
								headElement.props.children
							);
							return list.concat(headElementChildren);
						}, [])
						.reduce(onlyReactElement, [])
						.reverse()
						.concat(defaultHead(props.inAmpMode))
						.filter(unique())
						.reverse()
						.map(function (c, i) {
							var key = c.key || i;
							return react_1["default"].cloneElement(c, {
								key: key
							});
						});
				}

				var Effect = side_effect_1["default"]();
				/**
				 * This component injects elements to `<head>` of your page.
				 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
				 */

				function Head(_ref) {
					var children = _ref.children;
					return react_1["default"].createElement(
						amp_context_1.AmpStateContext.Consumer,
						null,
						function (ampState) {
							return react_1["default"].createElement(
								head_manager_context_1.HeadManagerContext.Consumer,
								null,
								function (updateHead) {
									return react_1["default"].createElement(
										Effect,
										{
											reduceComponentsToState: reduceComponents,
											handleStateChange: updateHead,
											inAmpMode: amp_1.isInAmpMode(ampState)
										},
										children
									);
								}
							);
						}
					);
				}

				Head.rewind = Effect.rewind;
				exports["default"] = Head;

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
					var all = Object.create(null);
					return {
						on: function on(type, handler) {
							(all[type] || (all[type] = [])).push(handler);
						},
						off: function off(type, handler) {
							if (all[type]) {
								// tslint:disable-next-line:no-bitwise
								all[type].splice(all[type].indexOf(handler) >>> 0, 1);
							}
						},
						emit: function emit(type) {
							for (
								var _len = arguments.length,
									evts = new Array(_len > 1 ? _len - 1 : 0),
									_key = 1;
								_key < _len;
								_key++
							) {
								evts[_key - 1] = arguments[_key];
							}

							// eslint-disable-next-line array-callback-return
							(all[type] || []).slice().map(function (handler) {
								handler.apply(void 0, evts);
							});
						}
					};
				}

				exports["default"] = mitt;

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/router-context.js":
			/*!**********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/router-context.js ***!
  \**********************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var __importStar =
					(this && this.__importStar) ||
					function (mod) {
						if (mod && mod.__esModule) return mod;
						var result = {};
						if (mod != null)
							for (var k in mod) {
								if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
							}
						result["default"] = mod;
						return result;
					};

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var React = __importStar(
					__webpack_require__(/*! react */ "../../node_modules/react/index.js")
				);

				exports.RouterContext = React.createContext(null);

				if (true) {
					exports.RouterContext.displayName = "RouterContext";
				}

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/router/router.js":
			/*!*********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/router/router.js ***!
  \*********************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var _regeneratorRuntime = __webpack_require__(
					/*! @babel/runtime/regenerator */ "../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js"
				);

				var _slicedToArray = __webpack_require__(
					/*! @babel/runtime/helpers/slicedToArray */ "../../node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js"
				);

				var _classCallCheck = __webpack_require__(
					/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js"
				);

				var _createClass = __webpack_require__(
					/*! @babel/runtime/helpers/createClass */ "../../node_modules/next/node_modules/@babel/runtime/helpers/createClass.js"
				);

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

				var url_1 = __webpack_require__(
					/*! url */ "../../node_modules/native-url/dist/index.js"
				);

				var mitt_1 = __importDefault(
					__webpack_require__(
						/*! ../mitt */ "../../node_modules/next/dist/next-server/lib/mitt.js"
					)
				);

				var utils_1 = __webpack_require__(
					/*! ../utils */ "../../node_modules/next/dist/next-server/lib/utils.js"
				);

				var is_dynamic_1 = __webpack_require__(
					/*! ./utils/is-dynamic */ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js"
				);

				var route_matcher_1 = __webpack_require__(
					/*! ./utils/route-matcher */ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js"
				);

				var route_regex_1 = __webpack_require__(
					/*! ./utils/route-regex */ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js"
				);

				var basePath = false || "";

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

				var prepareRoute = function prepareRoute(path) {
					return toRoute(!path || path === "/" ? "/index" : path);
				};

				function fetchNextData(pathname, query, isServerRender, cb) {
					var attempts = isServerRender ? 3 : 1;

					function getResponse() {
						return fetch(
							utils_1.formatWithValidation({
								pathname: addBasePath(
									// @ts-ignore __NEXT_DATA__
									"/_next/data/"
										.concat(__NEXT_DATA__.buildId)
										.concat(delBasePath(pathname), ".json")
								),
								query: query
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
						).then(function (res) {
							if (!res.ok) {
								if (--attempts > 0 && res.status >= 500) {
									return getResponse();
								}

								throw new Error("Failed to load static props");
							}

							return res.json();
						});
					}

					return getResponse()
						.then(function (data) {
							return cb ? cb(data) : data;
						})
						["catch"](function (err) {
							// We should only trigger a server-side transition if this was caused
							// on a client-side transition. Otherwise, we'd get into an infinite
							// loop.
							if (!isServerRender) {
								err.code = "PAGE_LOAD_ERROR";
							}

							throw err;
						});
				}

				var Router = /*#__PURE__*/ (function () {
					function Router(pathname, query, as, _ref) {
						var _this = this;

						var initialProps = _ref.initialProps,
							pageLoader = _ref.pageLoader,
							App = _ref.App,
							wrapApp = _ref.wrapApp,
							Component = _ref.Component,
							err = _ref.err,
							subscription = _ref.subscription,
							isFallback = _ref.isFallback;

						_classCallCheck(this, Router);

						// Static Data Cache
						this.sdc = {};

						this.onPopState = function (e) {
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
								var _pathname = _this.pathname,
									_query = _this.query;

								_this.changeState(
									"replaceState",
									utils_1.formatWithValidation({
										pathname: _pathname,
										query: _query
									}),
									utils_1.getURL()
								);

								return;
							} // Make sure we don't re-render on initial load,
							// can be caused by navigating back from an external site

							if (
								e.state &&
								_this.isSsr &&
								e.state.as === _this.asPath &&
								url_1.parse(e.state.url).pathname === _this.pathname
							) {
								return;
							} // If the downstream application returns falsy, return.
							// They will then be responsible for handling the event.

							if (_this._bps && !_this._bps(e.state)) {
								return;
							}

							var _e$state = e.state,
								url = _e$state.url,
								as = _e$state.as,
								options = _e$state.options;

							if (true) {
								if (typeof url === "undefined" || typeof as === "undefined") {
									console.warn(
										"`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty"
									);
								}
							}

							_this.replace(url, as, options);
						};

						this._getStaticData = function (asPath) {
							var pathname = prepareRoute(url_1.parse(asPath).pathname);
							return false
								? undefined
								: fetchNextData(pathname, null, _this.isSsr, function (data) {
										return (_this.sdc[pathname] = data);
								  });
						};

						this._getServerData = function (asPath) {
							var _url_1$parse = url_1.parse(asPath, true),
								pathname = _url_1$parse.pathname,
								query = _url_1$parse.query;

							pathname = prepareRoute(pathname);
							return fetchNextData(pathname, query, _this.isSsr);
						}; // represents the current component key

						this.route = toRoute(pathname); // set up the component cache (by route keys)

						this.components = {}; // We should not keep the cache, if there's an error
						// Otherwise, this cause issues when when going back and
						// come again to the errored page.

						if (pathname !== "/_error") {
							this.components[this.route] = {
								Component: Component,
								props: initialProps,
								err: err,
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

						if (true) {
							// make sure "as" doesn't start with double slashes or else it can
							// throw an error as it's considered invalid
							if (as.substr(0, 2) !== "//") {
								// in order for `e.state` to work on the `onpopstate` event
								// we have to register the initial route upon initialization
								this.changeState(
									"replaceState",
									utils_1.formatWithValidation({
										pathname: pathname,
										query: query
									}),
									as
								);
							}

							window.addEventListener("popstate", this.onPopState);
						}
					} // @deprecated backwards compatibility even though it's a private method.

					_createClass(
						Router,
						[
							{
								key: "update",
								value: function update(route, mod) {
									var Component = mod["default"] || mod;
									var data = this.components[route];

									if (!data) {
										throw new Error(
											"Cannot update unavailable route: ".concat(route)
										);
									}

									var newData = Object.assign(Object.assign({}, data), {
										Component: Component,
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
							},
							{
								key: "reload",
								value: function reload() {
									window.location.reload();
								}
								/**
								 * Go back in history
								 */
							},
							{
								key: "back",
								value: function back() {
									window.history.back();
								}
								/**
								 * Performs a `pushState` with arguments
								 * @param url of the route
								 * @param as masks `url` for the browser
								 * @param options object you can define `shallow` and other options
								 */
							},
							{
								key: "push",
								value: function push(url) {
									var as =
										arguments.length > 1 && arguments[1] !== undefined
											? arguments[1]
											: url;
									var options =
										arguments.length > 2 && arguments[2] !== undefined
											? arguments[2]
											: {};
									return this.change("pushState", url, as, options);
								}
								/**
								 * Performs a `replaceState` with arguments
								 * @param url of the route
								 * @param as masks `url` for the browser
								 * @param options object you can define `shallow` and other options
								 */
							},
							{
								key: "replace",
								value: function replace(url) {
									var as =
										arguments.length > 1 && arguments[1] !== undefined
											? arguments[1]
											: url;
									var options =
										arguments.length > 2 && arguments[2] !== undefined
											? arguments[2]
											: {};
									return this.change("replaceState", url, as, options);
								}
							},
							{
								key: "change",
								value: function change(method, _url, _as, options) {
									var _this2 = this;

									return new Promise(function (resolve, reject) {
										if (!options._h) {
											_this2.isSsr = false;
										} // marking route changes as a navigation start entry

										if (utils_1.ST) {
											performance.mark("routeChange");
										} // If url and as provided as an object representation,
										// we'll format them into the string version here.

										var url =
											typeof _url === "object"
												? utils_1.formatWithValidation(_url)
												: _url;
										var as =
											typeof _as === "object"
												? utils_1.formatWithValidation(_as)
												: _as;
										url = addBasePath(url);
										as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
										// "<page>/index.html" directly for the SSR page.

										if (false) {
											var rewriteUrlForNextExport;
										}

										_this2.abortComponentLoad(as); // If the url change is only related to a hash change
										// We should not proceed. We should only change the state.
										// WARNING: `_h` is an internal option for handing Next.js client-side
										// hydration. Your app should _never_ use this property. It may change at
										// any time without notice.

										if (!options._h && _this2.onlyAHashChange(as)) {
											_this2.asPath = as;
											Router.events.emit("hashChangeStart", as);

											_this2.changeState(method, url, as, options);

											_this2.scrollToHash(as);

											Router.events.emit("hashChangeComplete", as);
											return resolve(true);
										}

										var _url_1$parse2 = url_1.parse(url, true),
											pathname = _url_1$parse2.pathname,
											query = _url_1$parse2.query,
											protocol = _url_1$parse2.protocol;

										if (!pathname || protocol) {
											if (true) {
												throw new Error(
													"Invalid href passed to router: ".concat(
														url,
														" https://err.sh/zeit/next.js/invalid-href-passed"
													)
												);
											}

											return resolve(false);
										} // If asked to change the current URL we should reload the current page
										// (not location.reload() but reload getInitialProps and other Next.js stuffs)
										// We also need to set the method = replaceState always
										// as this should not go into the history (That's how browsers work)
										// We should compare the new asPath to the current asPath, not the url

										if (!_this2.urlIsNew(as)) {
											method = "replaceState";
										}

										var route = toRoute(pathname);
										var _options$shallow = options.shallow,
											shallow =
												_options$shallow === void 0 ? false : _options$shallow;

										if (is_dynamic_1.isDynamicRoute(route)) {
											var _url_1$parse3 = url_1.parse(as),
												asPathname = _url_1$parse3.pathname;

											var routeRegex = route_regex_1.getRouteRegex(route);
											var routeMatch = route_matcher_1.getRouteMatcher(
												routeRegex
											)(asPathname);

											if (!routeMatch) {
												var missingParams = Object.keys(
													routeRegex.groups
												).filter(function (param) {
													return !query[param];
												});

												if (missingParams.length > 0) {
													if (true) {
														console.warn(
															"Mismatching `as` and `href` failed to manually provide " +
																"the params: ".concat(
																	missingParams.join(", "),
																	" in the `href`'s `query`"
																)
														);
													}

													return reject(
														new Error(
															"The provided `as` value ("
																.concat(
																	asPathname,
																	") is incompatible with the `href` value ("
																)
																.concat(route, "). ") +
																"Read more: https://err.sh/zeit/next.js/incompatible-href-as"
														)
													);
												}
											} else {
												// Merge params into `query`, overwriting any specified in search
												Object.assign(query, routeMatch);
											}
										}

										Router.events.emit("routeChangeStart", as); // If shallow is true and the route exists in the router cache we reuse the previous result

										_this2
											.getRouteInfo(route, pathname, query, as, shallow)
											.then(function (routeInfo) {
												var error = routeInfo.error;

												if (error && error.cancelled) {
													return resolve(false);
												}

												Router.events.emit("beforeHistoryChange", as);

												_this2.changeState(method, url, as, options);

												if (true) {
													var appComp = _this2.components["/_app"].Component;
													window.next.isPrerendered =
														appComp.getInitialProps ===
															appComp.origGetInitialProps &&
														!routeInfo.Component.getInitialProps;
												}

												_this2.set(route, pathname, query, as, routeInfo);

												if (error) {
													Router.events.emit("routeChangeError", error, as);
													throw error;
												}

												Router.events.emit("routeChangeComplete", as);
												return resolve(true);
											}, reject);
									});
								}
							},
							{
								key: "changeState",
								value: function changeState(method, url, as) {
									var options =
										arguments.length > 3 && arguments[3] !== undefined
											? arguments[3]
											: {};

									if (true) {
										if (typeof window.history === "undefined") {
											console.error(
												"Warning: window.history is not available."
											);
											return;
										}

										if (typeof window.history[method] === "undefined") {
											console.error(
												"Warning: window.history.".concat(
													method,
													" is not available"
												)
											);
											return;
										}
									}

									if (method !== "pushState" || utils_1.getURL() !== as) {
										window.history[method](
											{
												url: url,
												as: as,
												options: options
											}, // Most browsers currently ignores this parameter, although they may use it in the future.
											// Passing the empty string here should be safe against future changes to the method.
											// https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
											"",
											as
										);
									}
								}
							},
							{
								key: "getRouteInfo",
								value: function getRouteInfo(route, pathname, query, as) {
									var _this3 = this;

									var shallow =
										arguments.length > 4 && arguments[4] !== undefined
											? arguments[4]
											: false;
									var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
									// If the route is already rendered on the screen.

									if (shallow && cachedRouteInfo && this.route === route) {
										return Promise.resolve(cachedRouteInfo);
									}

									var handleError = function handleError(err, loadErrorFail) {
										return new Promise(function (resolve) {
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
												_this3
													.fetchComponent("/_error")
													.then(function (res) {
														var Component = res.page;
														var routeInfo = {
															Component: Component,
															err: err
														};
														return new Promise(function (resolve) {
															_this3
																.getInitialProps(Component, {
																	err: err,
																	pathname: pathname,
																	query: query
																})
																.then(
																	function (props) {
																		routeInfo.props = props;
																		routeInfo.error = err;
																		resolve(routeInfo);
																	},
																	function (gipErr) {
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
													["catch"](function (err) {
														return handleError(err, true);
													})
											);
										});
									};

									return new Promise(function (resolve, reject) {
										if (cachedRouteInfo) {
											return resolve(cachedRouteInfo);
										}

										_this3.fetchComponent(route).then(function (res) {
											return resolve({
												Component: res.page,
												__N_SSG: res.mod.__N_SSG,
												__N_SSP: res.mod.__N_SSP
											});
										}, reject);
									})
										.then(function (routeInfo) {
											var Component = routeInfo.Component,
												__N_SSG = routeInfo.__N_SSG,
												__N_SSP = routeInfo.__N_SSP;

											if (true) {
												var _require = __webpack_require__(
														/*! react-is */ "../../node_modules/next/node_modules/react-is/index.js"
													),
													isValidElementType = _require.isValidElementType;

												if (!isValidElementType(Component)) {
													throw new Error(
														'The default export is not a React Component in page: "'.concat(
															pathname,
															'"'
														)
													);
												}
											}

											return _this3
												._getData(function () {
													return __N_SSG
														? _this3._getStaticData(as)
														: __N_SSP
														? _this3._getServerData(as)
														: _this3.getInitialProps(
																Component, // we provide AppTree later so this needs to be `any`
																{
																	pathname: pathname,
																	query: query,
																	asPath: as
																}
														  );
												})
												.then(function (props) {
													routeInfo.props = props;
													_this3.components[route] = routeInfo;
													return routeInfo;
												});
										})
										["catch"](handleError);
								}
							},
							{
								key: "set",
								value: function set(route, pathname, query, as, data) {
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
							},
							{
								key: "beforePopState",
								value: function beforePopState(cb) {
									this._bps = cb;
								}
							},
							{
								key: "onlyAHashChange",
								value: function onlyAHashChange(as) {
									if (!this.asPath) return false;

									var _this$asPath$split = this.asPath.split("#"),
										_this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
										oldUrlNoHash = _this$asPath$split2[0],
										oldHash = _this$asPath$split2[1];

									var _as$split = as.split("#"),
										_as$split2 = _slicedToArray(_as$split, 2),
										newUrlNoHash = _as$split2[0],
										newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same

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
							},
							{
								key: "scrollToHash",
								value: function scrollToHash(as) {
									var _as$split3 = as.split("#"),
										_as$split4 = _slicedToArray(_as$split3, 2),
										hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value

									if (hash === "") {
										window.scrollTo(0, 0);
										return;
									} // First we check if the element by id is found

									var idEl = document.getElementById(hash);

									if (idEl) {
										idEl.scrollIntoView();
										return;
									} // If there's no element with the id, we check the `name` property
									// To mirror browsers

									var nameEl = document.getElementsByName(hash)[0];

									if (nameEl) {
										nameEl.scrollIntoView();
									}
								}
							},
							{
								key: "urlIsNew",
								value: function urlIsNew(asPath) {
									return this.asPath !== asPath;
								}
								/**
								 * Prefetch page code, you may wait for the data during page rendering.
								 * This feature only works in production!
								 * @param url the href of prefetched page
								 * @param asPath the as path of the prefetched page
								 */
							},
							{
								key: "prefetch",
								value: function prefetch(url) {
									var _this4 = this;

									var asPath =
										arguments.length > 1 && arguments[1] !== undefined
											? arguments[1]
											: url;
									var options =
										arguments.length > 2 && arguments[2] !== undefined
											? arguments[2]
											: {};
									return new Promise(function (resolve, reject) {
										var _url_1$parse4 = url_1.parse(url),
											pathname = _url_1$parse4.pathname,
											protocol = _url_1$parse4.protocol;

										if (!pathname || protocol) {
											if (true) {
												throw new Error(
													"Invalid href passed to router: ".concat(
														url,
														" https://err.sh/zeit/next.js/invalid-href-passed"
													)
												);
											}

											return;
										} // Prefetch is not supported in development mode because it would trigger on-demand-entries

										if (true) {
											return;
										}

										var route = delBasePath(toRoute(pathname));
										Promise.all([
											_this4.pageLoader.prefetchData(url, delBasePath(asPath)),
											_this4.pageLoader[
												options.priority ? "loadPage" : "prefetch"
											](route)
										]).then(function () {
											return resolve();
										}, reject);
									});
								}
							},
							{
								key: "fetchComponent",
								value: function fetchComponent(route) {
									var cancelled, cancel, componentResult, error;
									return _regeneratorRuntime.async(
										function fetchComponent$(_context) {
											while (1) {
												switch ((_context.prev = _context.next)) {
													case 0:
														cancelled = false;

														cancel = this.clc = function () {
															cancelled = true;
														};

														route = delBasePath(route);
														_context.next = 5;
														return _regeneratorRuntime.awrap(
															this.pageLoader.loadPage(route)
														);

													case 5:
														componentResult = _context.sent;

														if (!cancelled) {
															_context.next = 10;
															break;
														}

														error = new Error(
															'Abort fetching component for route: "'.concat(
																route,
																'"'
															)
														);
														error.cancelled = true;
														throw error;

													case 10:
														if (cancel === this.clc) {
															this.clc = null;
														}

														return _context.abrupt("return", componentResult);

													case 12:
													case "end":
														return _context.stop();
												}
											}
										},
										null,
										this,
										null,
										Promise
									);
								}
							},
							{
								key: "_getData",
								value: function _getData(fn) {
									var _this5 = this;

									var cancelled = false;

									var cancel = function cancel() {
										cancelled = true;
									};

									this.clc = cancel;
									return fn().then(function (data) {
										if (cancel === _this5.clc) {
											_this5.clc = null;
										}

										if (cancelled) {
											var err = new Error("Loading initial props cancelled");
											err.cancelled = true;
											throw err;
										}

										return data;
									});
								}
							},
							{
								key: "getInitialProps",
								value: function getInitialProps(Component, ctx) {
									var App = this.components["/_app"].Component;

									var AppTree = this._wrapApp(App);

									ctx.AppTree = AppTree;
									return utils_1.loadGetInitialProps(App, {
										AppTree: AppTree,
										Component: Component,
										router: this,
										ctx: ctx
									});
								}
							},
							{
								key: "abortComponentLoad",
								value: function abortComponentLoad(as) {
									if (this.clc) {
										var e = new Error("Route Cancelled");
										e.cancelled = true;
										Router.events.emit("routeChangeError", e, as);
										this.clc();
										this.clc = null;
									}
								}
							},
							{
								key: "notify",
								value: function notify(data) {
									this.sub(data, this.components["/_app"].Component);
								}
							}
						],
						[
							{
								key: "_rewriteUrlForNextExport",
								value: function _rewriteUrlForNextExport(url) {
									if (false) {
										var rewriteUrlForNextExport;
									} else {
										return url;
									}
								}
							}
						]
					);

					return Router;
				})();

				exports["default"] = Router;
				Router.events = mitt_1["default"]();

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

				var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

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
					var re = routeRegex.re,
						groups = routeRegex.groups;
					return function (pathname) {
						var routeMatch = re.exec(pathname);

						if (!routeMatch) {
							return false;
						}

						var decode = function decode(param) {
							try {
								return decodeURIComponent(param);
							} catch (_) {
								var err = new Error("failed to decode param");
								err.code = "DECODE_FAILED";
								throw err;
							}
						};

						var params = {};
						Object.keys(groups).forEach(function (slugName) {
							var g = groups[slugName];
							var m = routeMatch[g.pos];

							if (m !== undefined) {
								params[slugName] = ~m.indexOf("/")
									? m.split("/").map(function (entry) {
											return decode(entry);
									  })
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
					var escapedRoute = escapeRegex(
						normalizedRoute.replace(/\/$/, "") || "/"
					);
					var groups = {};
					var groupIndex = 1;
					var parameterizedRoute = escapedRoute.replace(
						/\/\\\[([^/]+?)\\\](?=\/|$)/g,
						function (_, $1) {
							var isCatchAll = /^(\\\.){3}/.test($1);
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
					var namedParameterizedRoute; // dead code eliminate for browser since it's only needed
					// while generating routes-manifest

					if (false) {
					}

					return Object.assign(
						{
							re: new RegExp("^" + parameterizedRoute + "(?:/)?$", "i"),
							groups: groups
						},
						namedParameterizedRoute
							? {
									namedRegex: "^".concat(namedParameterizedRoute, "(?:/)?$")
							  }
							: {}
					);
				}

				exports.getRouteRegex = getRouteRegex;

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/side-effect.js":
			/*!*******************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/side-effect.js ***!
  \*******************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var _classCallCheck = __webpack_require__(
					/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js"
				);

				var _assertThisInitialized = __webpack_require__(
					/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js"
				);

				var _createClass = __webpack_require__(
					/*! @babel/runtime/helpers/createClass */ "../../node_modules/next/node_modules/@babel/runtime/helpers/createClass.js"
				);

				var _inherits = __webpack_require__(
					/*! @babel/runtime/helpers/inherits */ "../../node_modules/next/node_modules/@babel/runtime/helpers/inherits.js"
				);

				var _possibleConstructorReturn = __webpack_require__(
					/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"
				);

				var _getPrototypeOf = __webpack_require__(
					/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js"
				);

				var _toConsumableArray = __webpack_require__(
					/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js"
				);

				function _createSuper(Derived) {
					return function () {
						var Super = _getPrototypeOf(Derived),
							result;
						if (_isNativeReflectConstruct()) {
							var NewTarget = _getPrototypeOf(this).constructor;
							result = Reflect.construct(Super, arguments, NewTarget);
						} else {
							result = Super.apply(this, arguments);
						}
						return _possibleConstructorReturn(this, result);
					};
				}

				function _isNativeReflectConstruct() {
					if (typeof Reflect === "undefined" || !Reflect.construct)
						return false;
					if (Reflect.construct.sham) return false;
					if (typeof Proxy === "function") return true;
					try {
						Date.prototype.toString.call(
							Reflect.construct(Date, [], function () {})
						);
						return true;
					} catch (e) {
						return false;
					}
				}

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var react_1 = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);

				var isServer = false;

				exports["default"] = function () {
					var mountedInstances = new Set();
					var state;

					function emitChange(component) {
						state = component.props.reduceComponentsToState(
							_toConsumableArray(mountedInstances),
							component.props
						);

						if (component.props.handleStateChange) {
							component.props.handleStateChange(state);
						}
					}

					return /*#__PURE__*/ (function (_react_1$Component) {
						_inherits(_class, _react_1$Component);

						var _super = _createSuper(_class);

						_createClass(_class, null, [
							{
								key: "rewind",
								// Used when server rendering
								value: function rewind() {
									var recordedState = state;
									state = undefined;
									mountedInstances.clear();
									return recordedState;
								}
							}
						]);

						function _class(props) {
							var _this;

							_classCallCheck(this, _class);

							_this = _super.call(this, props);

							if (isServer) {
								mountedInstances.add(_assertThisInitialized(_this));
								emitChange(_assertThisInitialized(_this));
							}

							return _this;
						}

						_createClass(_class, [
							{
								key: "componentDidMount",
								value: function componentDidMount() {
									mountedInstances.add(this);
									emitChange(this);
								}
							},
							{
								key: "componentDidUpdate",
								value: function componentDidUpdate() {
									emitChange(this);
								}
							},
							{
								key: "componentWillUnmount",
								value: function componentWillUnmount() {
									mountedInstances["delete"](this);
									emitChange(this);
								}
							},
							{
								key: "render",
								value: function render() {
									return null;
								}
							}
						]);

						return _class;
					})(react_1.Component);
				};

				/***/
			},

		/***/ "../../node_modules/next/dist/next-server/lib/utils.js":
			/*!*************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/next-server/lib/utils.js ***!
  \*************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var _regeneratorRuntime = __webpack_require__(
					/*! @babel/runtime/regenerator */ "../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js"
				);

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var url_1 = __webpack_require__(
					/*! url */ "../../node_modules/native-url/dist/index.js"
				);
				/**
				 * Utils
				 */

				function execOnce(fn) {
					var used = false;
					var result;
					return function () {
						if (!used) {
							used = true;
							result = fn.apply(void 0, arguments);
						}

						return result;
					};
				}

				exports.execOnce = execOnce;

				function getLocationOrigin() {
					var _window$location = window.location,
						protocol = _window$location.protocol,
						hostname = _window$location.hostname,
						port = _window$location.port;
					return ""
						.concat(protocol, "//")
						.concat(hostname)
						.concat(port ? ":" + port : "");
				}

				exports.getLocationOrigin = getLocationOrigin;

				function getURL() {
					var href = window.location.href;
					var origin = getLocationOrigin();
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

				function loadGetInitialProps(App, ctx) {
					var _a, message, res, props, _message;

					return _regeneratorRuntime.async(
						function loadGetInitialProps$(_context) {
							while (1) {
								switch ((_context.prev = _context.next)) {
									case 0:
										if (false) {
										}

										if (
											!((_a = App.prototype) === null || _a === void 0
												? void 0
												: _a.getInitialProps)
										) {
											_context.next = 4;
											break;
										}

										message = '"'.concat(
											getDisplayName(App),
											'.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.'
										);
										throw new Error(message);

									case 4:
										// when called from _app `ctx` is nested in `ctx`
										res = ctx.res || (ctx.ctx && ctx.ctx.res);

										if (App.getInitialProps) {
											_context.next = 12;
											break;
										}

										if (!(ctx.ctx && ctx.Component)) {
											_context.next = 11;
											break;
										}

										_context.next = 9;
										return _regeneratorRuntime.awrap(
											loadGetInitialProps(ctx.Component, ctx.ctx)
										);

									case 9:
										_context.t0 = _context.sent;
										return _context.abrupt("return", {
											pageProps: _context.t0
										});

									case 11:
										return _context.abrupt("return", {});

									case 12:
										_context.next = 14;
										return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

									case 14:
										props = _context.sent;

										if (!(res && isResSent(res))) {
											_context.next = 17;
											break;
										}

										return _context.abrupt("return", props);

									case 17:
										if (props) {
											_context.next = 20;
											break;
										}

										_message = '"'
											.concat(
												getDisplayName(App),
												'.getInitialProps()" should resolve to an object. But found "'
											)
											.concat(props, '" instead.');
										throw new Error(_message);

									case 20:
										if (true) {
											if (Object.keys(props).length === 0 && !ctx.ctx) {
												console.warn(
													"".concat(
														getDisplayName(App),
														" returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"
													)
												);
											}
										}

										return _context.abrupt("return", props);

									case 22:
									case "end":
										return _context.stop();
								}
							}
						},
						null,
						null,
						null,
						Promise
					);
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
							Object.keys(url).forEach(function (key) {
								if (exports.urlObjectKeys.indexOf(key) === -1) {
									console.warn(
										"Unknown key passed via urlObject into url.format: ".concat(
											key
										)
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

		/***/ "../../node_modules/next/dist/pages/_app.js":
			/*!**************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/dist/pages/_app.js ***!
  \**************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var _classCallCheck = __webpack_require__(
					/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js"
				);

				var _createClass = __webpack_require__(
					/*! @babel/runtime/helpers/createClass */ "../../node_modules/next/node_modules/@babel/runtime/helpers/createClass.js"
				);

				var _inherits = __webpack_require__(
					/*! @babel/runtime/helpers/inherits */ "../../node_modules/next/node_modules/@babel/runtime/helpers/inherits.js"
				);

				var _possibleConstructorReturn = __webpack_require__(
					/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"
				);

				var _getPrototypeOf = __webpack_require__(
					/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js"
				);

				var _regeneratorRuntime = __webpack_require__(
					/*! @babel/runtime/regenerator */ "../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js"
				);

				function _createSuper(Derived) {
					return function () {
						var Super = _getPrototypeOf(Derived),
							result;
						if (_isNativeReflectConstruct()) {
							var NewTarget = _getPrototypeOf(this).constructor;
							result = Reflect.construct(Super, arguments, NewTarget);
						} else {
							result = Super.apply(this, arguments);
						}
						return _possibleConstructorReturn(this, result);
					};
				}

				function _isNativeReflectConstruct() {
					if (typeof Reflect === "undefined" || !Reflect.construct)
						return false;
					if (Reflect.construct.sham) return false;
					if (typeof Proxy === "function") return true;
					try {
						Date.prototype.toString.call(
							Reflect.construct(Date, [], function () {})
						);
						return true;
					} catch (e) {
						return false;
					}
				}

				var _interopRequireDefault = __webpack_require__(
					/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js"
				);

				exports.__esModule = true;
				exports.Container = Container;
				exports.createUrl = createUrl;
				exports["default"] = void 0;

				var _react = _interopRequireDefault(
					__webpack_require__(/*! react */ "../../node_modules/react/index.js")
				);

				var _utils = __webpack_require__(
					/*! ../next-server/lib/utils */ "../../node_modules/next/dist/next-server/lib/utils.js"
				);

				exports.AppInitialProps = _utils.AppInitialProps;
				/**
				 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
				 * This allows for keeping state between navigation, custom error handling, injecting additional data.
				 */

				function appGetInitialProps(_ref) {
					var Component, ctx, pageProps;
					return _regeneratorRuntime.async(
						function appGetInitialProps$(_context) {
							while (1) {
								switch ((_context.prev = _context.next)) {
									case 0:
										(Component = _ref.Component), (ctx = _ref.ctx);
										_context.next = 3;
										return _regeneratorRuntime.awrap(
											(0, _utils.loadGetInitialProps)(Component, ctx)
										);

									case 3:
										pageProps = _context.sent;
										return _context.abrupt("return", {
											pageProps: pageProps
										});

									case 5:
									case "end":
										return _context.stop();
								}
							}
						},
						null,
						null,
						null,
						Promise
					);
				}

				var App = /*#__PURE__*/ (function (_react$default$Compon) {
					_inherits(App, _react$default$Compon);

					var _super = _createSuper(App);

					function App() {
						_classCallCheck(this, App);

						return _super.apply(this, arguments);
					}

					_createClass(App, [
						{
							key: "componentDidCatch",
							// Kept here for backwards compatibility.
							// When someone ended App they could call `super.componentDidCatch`.
							// @deprecated This method is no longer needed. Errors are caught at the top level
							value: function componentDidCatch(error, _errorInfo) {
								throw error;
							}
						},
						{
							key: "render",
							value: function render() {
								var _this$props = this.props,
									router = _this$props.router,
									Component = _this$props.Component,
									pageProps = _this$props.pageProps,
									__N_SSG = _this$props.__N_SSG,
									__N_SSP = _this$props.__N_SSP;
								return _react["default"].createElement(
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
					]);

					return App;
				})(_react["default"].Component);

				exports["default"] = App;
				App.origGetInitialProps = appGetInitialProps;
				App.getInitialProps = appGetInitialProps;
				var warnContainer;
				var warnUrl;

				if (true) {
					warnContainer = (0, _utils.execOnce)(function () {
						console.warn(
							"Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated"
						);
					});
					warnUrl = (0, _utils.execOnce)(function () {
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
					var pathname = router.pathname,
						asPath = router.asPath,
						query = router.query;
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

						back: function back() {
							if (true) warnUrl();
							router.back();
						},
						push: function push(url, as) {
							if (true) warnUrl();
							return router.push(url, as);
						},
						pushTo: function pushTo(href, as) {
							if (true) warnUrl();
							var pushRoute = as ? href : "";
							var pushUrl = as || href;
							return router.push(pushRoute, pushUrl);
						},
						replace: function replace(url, as) {
							if (true) warnUrl();
							return router.replace(url, as);
						},
						replaceTo: function replaceTo(href, as) {
							if (true) warnUrl();
							var replaceRoute = as ? href : "";
							var replaceUrl = as || href;
							return router.replace(replaceRoute, replaceUrl);
						}
					};
				}

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
			/*!*************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _arrayWithHoles(arr) {
					if (Array.isArray(arr)) return arr;
				}

				module.exports = _arrayWithHoles;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
			/*!****************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \****************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _arrayWithoutHoles(arr) {
					if (Array.isArray(arr)) {
						for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
							arr2[i] = arr[i];
						}

						return arr2;
					}
				}

				module.exports = _arrayWithoutHoles;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
			/*!********************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \********************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _assertThisInitialized(self) {
					if (self === void 0) {
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						);
					}

					return self;
				}

				module.exports = _assertThisInitialized;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
			/*!*************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				module.exports = _classCallCheck;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
			/*!********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/construct.js ***!
  \********************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var setPrototypeOf = __webpack_require__(
					/*! ./setPrototypeOf */ "../../node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js"
				);

				function isNativeReflectConstruct() {
					if (typeof Reflect === "undefined" || !Reflect.construct)
						return false;
					if (Reflect.construct.sham) return false;
					if (typeof Proxy === "function") return true;

					try {
						Date.prototype.toString.call(
							Reflect.construct(Date, [], function () {})
						);
						return true;
					} catch (e) {
						return false;
					}
				}

				function _construct(Parent, args, Class) {
					if (isNativeReflectConstruct()) {
						module.exports = _construct = Reflect.construct;
					} else {
						module.exports = _construct = function _construct(
							Parent,
							args,
							Class
						) {
							var a = [null];
							a.push.apply(a, args);
							var Constructor = Function.bind.apply(Parent, a);
							var instance = new Constructor();
							if (Class) setPrototypeOf(instance, Class.prototype);
							return instance;
						};
					}

					return _construct.apply(null, arguments);
				}

				module.exports = _construct;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
			/*!**********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \**********************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				function _createClass(Constructor, protoProps, staticProps) {
					if (protoProps) _defineProperties(Constructor.prototype, protoProps);
					if (staticProps) _defineProperties(Constructor, staticProps);
					return Constructor;
				}

				module.exports = _createClass;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
			/*!*************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _getPrototypeOf(o) {
					module.exports = _getPrototypeOf = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function _getPrototypeOf(o) {
								return o.__proto__ || Object.getPrototypeOf(o);
						  };
					return _getPrototypeOf(o);
				}

				module.exports = _getPrototypeOf;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
			/*!*******************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \*******************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var setPrototypeOf = __webpack_require__(
					/*! ./setPrototypeOf */ "../../node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js"
				);

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError(
							"Super expression must either be null or a function"
						);
					}

					subClass.prototype = Object.create(
						superClass && superClass.prototype,
						{
							constructor: {
								value: subClass,
								writable: true,
								configurable: true
							}
						}
					);
					if (superClass) setPrototypeOf(subClass, superClass);
				}

				module.exports = _inherits;

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

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
			/*!**************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _iterableToArray(iter) {
					if (
						Symbol.iterator in Object(iter) ||
						Object.prototype.toString.call(iter) === "[object Arguments]"
					)
						return Array.from(iter);
				}

				module.exports = _iterableToArray;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
			/*!*******************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*******************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _iterableToArrayLimit(arr, i) {
					if (
						!(
							Symbol.iterator in Object(arr) ||
							Object.prototype.toString.call(arr) === "[object Arguments]"
						)
					) {
						return;
					}

					var _arr = [];
					var _n = true;
					var _d = false;
					var _e = undefined;

					try {
						for (
							var _i = arr[Symbol.iterator](), _s;
							!(_n = (_s = _i.next()).done);
							_n = true
						) {
							_arr.push(_s.value);

							if (i && _arr.length === i) break;
						}
					} catch (err) {
						_d = true;
						_e = err;
					} finally {
						try {
							if (!_n && _i["return"] != null) _i["return"]();
						} finally {
							if (_d) throw _e;
						}
					}

					return _arr;
				}

				module.exports = _iterableToArrayLimit;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
			/*!**************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _nonIterableRest() {
					throw new TypeError(
						"Invalid attempt to destructure non-iterable instance"
					);
				}

				module.exports = _nonIterableRest;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
			/*!****************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \****************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _nonIterableSpread() {
					throw new TypeError(
						"Invalid attempt to spread non-iterable instance"
					);
				}

				module.exports = _nonIterableSpread;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
			/*!************************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \************************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var _typeof = __webpack_require__(
					/*! ../helpers/typeof */ "../../node_modules/next/node_modules/@babel/runtime/helpers/typeof.js"
				);

				var assertThisInitialized = __webpack_require__(
					/*! ./assertThisInitialized */ "../../node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js"
				);

				function _possibleConstructorReturn(self, call) {
					if (
						call &&
						(_typeof(call) === "object" || typeof call === "function")
					) {
						return call;
					}

					return assertThisInitialized(self);
				}

				module.exports = _possibleConstructorReturn;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
			/*!*************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				function _setPrototypeOf(o, p) {
					module.exports = _setPrototypeOf =
						Object.setPrototypeOf ||
						function _setPrototypeOf(o, p) {
							o.__proto__ = p;
							return o;
						};

					return _setPrototypeOf(o, p);
				}

				module.exports = _setPrototypeOf;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
			/*!************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var arrayWithHoles = __webpack_require__(
					/*! ./arrayWithHoles */ "../../node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js"
				);

				var iterableToArrayLimit = __webpack_require__(
					/*! ./iterableToArrayLimit */ "../../node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"
				);

				var nonIterableRest = __webpack_require__(
					/*! ./nonIterableRest */ "../../node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js"
				);

				function _slicedToArray(arr, i) {
					return (
						arrayWithHoles(arr) ||
						iterableToArrayLimit(arr, i) ||
						nonIterableRest()
					);
				}

				module.exports = _slicedToArray;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
			/*!****************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \****************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var arrayWithoutHoles = __webpack_require__(
					/*! ./arrayWithoutHoles */ "../../node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"
				);

				var iterableToArray = __webpack_require__(
					/*! ./iterableToArray */ "../../node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js"
				);

				var nonIterableSpread = __webpack_require__(
					/*! ./nonIterableSpread */ "../../node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js"
				);

				function _toConsumableArray(arr) {
					return (
						arrayWithoutHoles(arr) ||
						iterableToArray(arr) ||
						nonIterableSpread()
					);
				}

				module.exports = _toConsumableArray;

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

		/***/ "../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
			/*!********************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \********************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				module.exports = __webpack_require__(
					/*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime.js"
				);

				/***/
			},

		/***/ "../../node_modules/next/node_modules/css-loader/dist/cjs.js?!../../node_modules/next/dist/compiled/postcss-loader/index.js?!../../node_modules/modern-normalize/modern-normalize.css":
			/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!/Users/ryansoury/dev/wagecall/node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!/Users/ryansoury/dev/wagecall/node_modules/modern-normalize/modern-normalize.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// Imports
				var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
					/*! ../next/node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/next/node_modules/css-loader/dist/runtime/api.js"
				);
				exports = ___CSS_LOADER_API_IMPORT___(true);
				// Module
				exports.push([
					module.i,
					"/*! modern-normalize v0.6.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n:root {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\nAdd the correct height in Firefox.\n*/\n\nhr {\n\theight: 0;\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nCorrect the padding in Firefox.\n*/\n\nfieldset {\n\tpadding: 0.35em 0.75em 0.625em;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n[type='search']::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n",
					"",
					{
						version: 3,
						sources: ["modern-normalize.css"],
						names: [],
						mappings:
							"AAAA,8FAA8F;;AAE9F;;;CAGC;;AAED;;CAEC;;AAED;;;CAGC,sBAAsB;AACvB;;AAEA;;CAEC;;AAED;CACC,gBAAgB;CAChB,cAAW;IAAX,WAAW;AACZ;;AAEA;;;CAGC;;AAED;CACC,iBAAiB,EAAE,MAAM;CACzB,8BAA8B,EAAE,MAAM;AACvC;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,SAAS;AACV;;AAEA;;CAEC;;AAED;CACC;;;;;;;;;kBASiB;AAClB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,SAAS;AACV;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,yCAAiC;SAAjC,iCAAiC;AAClC;;AAEA;;CAEC;;AAED;;CAEC,mBAAmB;AACpB;;AAEA;;;CAGC;;AAED;;;;CAIC;;;;;WAKU,EAAE,MAAM;CAClB,cAAc,EAAE,MAAM;AACvB;;AAEA;;CAEC;;AAED;CACC,cAAc;AACf;;AAEA;;CAEC;;AAED;;CAEC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;;;;;CAKC,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;AAClB;;AAEA;;;CAGC;;AAED;SACS,MAAM;CACd,oBAAoB;AACrB;;AAEA;;CAEC;;AAED;;;;CAIC,0BAA0B;AAC3B;;AAEA;;CAEC;;AAED;;;;CAIC,kBAAkB;CAClB,UAAU;AACX;;AAEA;;CAEC;;AAED;;;;CAIC,8BAA8B;AAC/B;;AAEA;;CAEC;;AAED;CACC,8BAA8B;AAC/B;;AAEA;;CAEC;;AAED;CACC,UAAU;AACX;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;CAEC;;AAED;;CAEC,YAAY;AACb;;AAEA;;;CAGC;;AAED;CACC,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;AAC7B;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;;CAGC;;AAED;CACC,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AACtB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,kBAAkB;AACnB",
						file: "modern-normalize.css",
						sourcesContent: [
							"/*! modern-normalize v0.6.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n:root {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\nAdd the correct height in Firefox.\n*/\n\nhr {\n\theight: 0;\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nCorrect the padding in Firefox.\n*/\n\nfieldset {\n\tpadding: 0.35em 0.75em 0.625em;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n[type='search']::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n"
						]
					}
				]);
				// Exports
				module.exports = exports;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/css-loader/dist/cjs.js?!../../node_modules/next/dist/compiled/postcss-loader/index.js?!./src/styles.css":
			/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!/Users/ryansoury/dev/wagecall/node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/styles.css ***!
  \*****************************************************************************************************************************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				// Imports
				var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
					/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/next/node_modules/css-loader/dist/runtime/api.js"
				);
				exports = ___CSS_LOADER_API_IMPORT___(true);
				// Module
				exports.push([
					module.i,
					"button span {\n\tbox-sizing: content-box;\n}\n",
					"",
					{
						version: 3,
						sources: ["styles.css"],
						names: [],
						mappings: "AAAA;CACC,uBAAuB;AACxB",
						file: "styles.css",
						sourcesContent: ["button span {\n\tbox-sizing: content-box;\n}\n"]
					}
				]);
				// Exports
				module.exports = exports;

				/***/
			},

		/***/ "../../node_modules/next/node_modules/css-loader/dist/runtime/api.js":
			/*!***************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
				// css base code, injected by the css-loader
				// eslint-disable-next-line func-names
				module.exports = function (useSourceMap) {
					var list = []; // return the list of modules as css string

					list.toString = function toString() {
						return this.map(function (item) {
							var content = cssWithMappingToString(item, useSourceMap);

							if (item[2]) {
								return "@media ".concat(item[2], " {").concat(content, "}");
							}

							return content;
						}).join("");
					}; // import a list of modules into the list
					// eslint-disable-next-line func-names

					list.i = function (modules, mediaQuery, dedupe) {
						if (typeof modules === "string") {
							// eslint-disable-next-line no-param-reassign
							modules = [[null, modules, ""]];
						}

						var alreadyImportedModules = {};

						if (dedupe) {
							for (var i = 0; i < this.length; i++) {
								// eslint-disable-next-line prefer-destructuring
								var id = this[i][0];

								if (id != null) {
									alreadyImportedModules[id] = true;
								}
							}
						}

						for (var _i = 0; _i < modules.length; _i++) {
							var item = [].concat(modules[_i]);

							if (dedupe && alreadyImportedModules[item[0]]) {
								// eslint-disable-next-line no-continue
								continue;
							}

							if (mediaQuery) {
								if (!item[2]) {
									item[2] = mediaQuery;
								} else {
									item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
								}
							}

							list.push(item);
						}
					};

					return list;
				};

				function cssWithMappingToString(item, useSourceMap) {
					var content = item[1] || ""; // eslint-disable-next-line prefer-destructuring

					var cssMapping = item[3];

					if (!cssMapping) {
						return content;
					}

					if (useSourceMap && typeof btoa === "function") {
						var sourceMapping = toComment(cssMapping);
						var sourceURLs = cssMapping.sources.map(function (source) {
							return "/*# sourceURL="
								.concat(cssMapping.sourceRoot || "")
								.concat(source, " */");
						});
						return [content]
							.concat(sourceURLs)
							.concat([sourceMapping])
							.join("\n");
					}

					return [content].join("\n");
				} // Adapted from convert-source-map (MIT)

				function toComment(sourceMap) {
					// eslint-disable-next-line no-undef
					var base64 = btoa(
						unescape(encodeURIComponent(JSON.stringify(sourceMap)))
					);
					var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
						base64
					);
					return "/*# ".concat(data, " */");
				}

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

		/***/ "../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
			/*!**************************************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**************************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				var isOldIE = (function isOldIE() {
					var memo;
					return function memorize() {
						if (typeof memo === "undefined") {
							// Test for IE <= 9 as proposed by Browserhacks
							// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
							// Tests for existence of standard globals is to allow style-loader
							// to operate correctly into non-standard environments
							// @see https://github.com/webpack-contrib/style-loader/issues/177
							memo = Boolean(
								window && document && document.all && !window.atob
							);
						}

						return memo;
					};
				})();

				var getTarget = (function getTarget() {
					var memo = {};
					return function memorize(target) {
						if (typeof memo[target] === "undefined") {
							var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

							if (
								window.HTMLIFrameElement &&
								styleTarget instanceof window.HTMLIFrameElement
							) {
								try {
									// This will throw an exception if access to iframe is blocked
									// due to cross-origin restrictions
									styleTarget = styleTarget.contentDocument.head;
								} catch (e) {
									// istanbul ignore next
									styleTarget = null;
								}
							}

							memo[target] = styleTarget;
						}

						return memo[target];
					};
				})();

				var stylesInDom = [];

				function getIndexByIdentifier(identifier) {
					var result = -1;

					for (var i = 0; i < stylesInDom.length; i++) {
						if (stylesInDom[i].identifier === identifier) {
							result = i;
							break;
						}
					}

					return result;
				}

				function modulesToDom(list, options) {
					var idCountMap = {};
					var identifiers = [];

					for (var i = 0; i < list.length; i++) {
						var item = list[i];
						var id = options.base ? item[0] + options.base : item[0];
						var count = idCountMap[id] || 0;
						var identifier = "".concat(id, " ").concat(count);
						idCountMap[id] = count + 1;
						var index = getIndexByIdentifier(identifier);
						var obj = {
							css: item[1],
							media: item[2],
							sourceMap: item[3]
						};

						if (index !== -1) {
							stylesInDom[index].references++;
							stylesInDom[index].updater(obj);
						} else {
							stylesInDom.push({
								identifier: identifier,
								updater: addStyle(obj, options),
								references: 1
							});
						}

						identifiers.push(identifier);
					}

					return identifiers;
				}

				function insertStyleElement(options) {
					var style = document.createElement("style");
					var attributes = options.attributes || {};

					if (typeof attributes.nonce === "undefined") {
						var nonce = true ? __webpack_require__.nc : undefined;

						if (nonce) {
							attributes.nonce = nonce;
						}
					}

					Object.keys(attributes).forEach(function (key) {
						style.setAttribute(key, attributes[key]);
					});

					if (typeof options.insert === "function") {
						options.insert(style);
					} else {
						var target = getTarget(options.insert || "head");

						if (!target) {
							throw new Error(
								"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
							);
						}

						target.appendChild(style);
					}

					return style;
				}

				function removeStyleElement(style) {
					// istanbul ignore if
					if (style.parentNode === null) {
						return false;
					}

					style.parentNode.removeChild(style);
				}
				/* istanbul ignore next  */

				var replaceText = (function replaceText() {
					var textStore = [];
					return function replace(index, replacement) {
						textStore[index] = replacement;
						return textStore.filter(Boolean).join("\n");
					};
				})();

				function applyToSingletonTag(style, index, remove, obj) {
					var css = remove
						? ""
						: obj.media
						? "@media ".concat(obj.media, " {").concat(obj.css, "}")
						: obj.css; // For old IE

					/* istanbul ignore if  */

					if (style.styleSheet) {
						style.styleSheet.cssText = replaceText(index, css);
					} else {
						var cssNode = document.createTextNode(css);
						var childNodes = style.childNodes;

						if (childNodes[index]) {
							style.removeChild(childNodes[index]);
						}

						if (childNodes.length) {
							style.insertBefore(cssNode, childNodes[index]);
						} else {
							style.appendChild(cssNode);
						}
					}
				}

				function applyToTag(style, options, obj) {
					var css = obj.css;
					var media = obj.media;
					var sourceMap = obj.sourceMap;

					if (media) {
						style.setAttribute("media", media);
					} else {
						style.removeAttribute("media");
					}

					if (sourceMap && btoa) {
						css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
							btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
							" */"
						);
					} // For old IE

					/* istanbul ignore if  */

					if (style.styleSheet) {
						style.styleSheet.cssText = css;
					} else {
						while (style.firstChild) {
							style.removeChild(style.firstChild);
						}

						style.appendChild(document.createTextNode(css));
					}
				}

				var singleton = null;
				var singletonCounter = 0;

				function addStyle(obj, options) {
					var style;
					var update;
					var remove;

					if (options.singleton) {
						var styleIndex = singletonCounter++;
						style = singleton || (singleton = insertStyleElement(options));
						update = applyToSingletonTag.bind(null, style, styleIndex, false);
						remove = applyToSingletonTag.bind(null, style, styleIndex, true);
					} else {
						style = insertStyleElement(options);
						update = applyToTag.bind(null, style, options);

						remove = function remove() {
							removeStyleElement(style);
						};
					}

					update(obj);
					return function updateStyle(newObj) {
						if (newObj) {
							if (
								newObj.css === obj.css &&
								newObj.media === obj.media &&
								newObj.sourceMap === obj.sourceMap
							) {
								return;
							}

							update((obj = newObj));
						} else {
							remove();
						}
					};
				}

				module.exports = function (list, options) {
					options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
					// tags it will allow on a page

					if (!options.singleton && typeof options.singleton !== "boolean") {
						options.singleton = isOldIE();
					}

					list = list || [];
					var lastIdentifiers = modulesToDom(list, options);
					return function update(newList) {
						newList = newList || [];

						if (Object.prototype.toString.call(newList) !== "[object Array]") {
							return;
						}

						for (var i = 0; i < lastIdentifiers.length; i++) {
							var identifier = lastIdentifiers[i];
							var index = getIndexByIdentifier(identifier);
							stylesInDom[index].references--;
						}

						var newLastIdentifiers = modulesToDom(newList, options);

						for (var _i = 0; _i < lastIdentifiers.length; _i++) {
							var _identifier = lastIdentifiers[_i];

							var _index = getIndexByIdentifier(_identifier);

							if (stylesInDom[_index].references === 0) {
								stylesInDom[_index].updater();

								stylesInDom.splice(_index, 1);
							}
						}

						lastIdentifiers = newLastIdentifiers;
					};
				};

				/***/
			},

		/***/ "../../node_modules/next/node_modules/webpack/buildin/global.js":
			/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				var g;

				// This works in non-strict mode
				g = (function () {
					return this;
				})();

				try {
					// This works if eval is allowed (see CSP)
					g = g || new Function("return this")();
				} catch (e) {
					// This works if the window reference is available
					if (typeof window === "object") g = window;
				}

				// g can still be undefined, but nothing to do about it...
				// We return undefined, instead of nothing here, so it's
				// easier to handle this case. if(!global) { ...}

				module.exports = g;

				/***/
			},

		/***/ "../../node_modules/popper.js/dist/esm/popper.js":
			/*!*******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/popper.js/dist/esm/popper.js ***!
  \*******************************************************************************/
			/*! exports provided: default */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* WEBPACK VAR INJECTION */ (function (global) {
					/**!
					 * @fileOverview Kickass library to create and place poppers near their reference elements.
					 * @version 1.16.1
					 * @license
					 * Copyright (c) 2016 Federico Zivolo and contributors
					 *
					 * Permission is hereby granted, free of charge, to any person obtaining a copy
					 * of this software and associated documentation files (the "Software"), to deal
					 * in the Software without restriction, including without limitation the rights
					 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
					 * copies of the Software, and to permit persons to whom the Software is
					 * furnished to do so, subject to the following conditions:
					 *
					 * The above copyright notice and this permission notice shall be included in all
					 * copies or substantial portions of the Software.
					 *
					 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
					 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
					 * SOFTWARE.
					 */
					var isBrowser =
						typeof window !== "undefined" &&
						typeof document !== "undefined" &&
						typeof navigator !== "undefined";

					var timeoutDuration = (function () {
						var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
						for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
							if (
								isBrowser &&
								navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0
							) {
								return 1;
							}
						}
						return 0;
					})();

					function microtaskDebounce(fn) {
						var called = false;
						return function () {
							if (called) {
								return;
							}
							called = true;
							window.Promise.resolve().then(function () {
								called = false;
								fn();
							});
						};
					}

					function taskDebounce(fn) {
						var scheduled = false;
						return function () {
							if (!scheduled) {
								scheduled = true;
								setTimeout(function () {
									scheduled = false;
									fn();
								}, timeoutDuration);
							}
						};
					}

					var supportsMicroTasks = isBrowser && window.Promise;

					/**
					 * Create a debounced version of a method, that's asynchronously deferred
					 * but called in the minimum time possible.
					 *
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Function} fn
					 * @returns {Function}
					 */
					var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

					/**
					 * Check if the given variable is a function
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Any} functionToCheck - variable to check
					 * @returns {Boolean} answer to: is a function?
					 */
					function isFunction(functionToCheck) {
						var getType = {};
						return (
							functionToCheck &&
							getType.toString.call(functionToCheck) === "[object Function]"
						);
					}

					/**
					 * Get CSS computed property of the given element
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Eement} element
					 * @argument {String} property
					 */
					function getStyleComputedProperty(element, property) {
						if (element.nodeType !== 1) {
							return [];
						}
						// NOTE: 1 DOM access here
						var window = element.ownerDocument.defaultView;
						var css = window.getComputedStyle(element, null);
						return property ? css[property] : css;
					}

					/**
					 * Returns the parentNode or the host of the element
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Element} element
					 * @returns {Element} parent
					 */
					function getParentNode(element) {
						if (element.nodeName === "HTML") {
							return element;
						}
						return element.parentNode || element.host;
					}

					/**
					 * Returns the scrolling parent of the given element
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Element} element
					 * @returns {Element} scroll parent
					 */
					function getScrollParent(element) {
						// Return body, `getScroll` will take care to get the correct `scrollTop` from it
						if (!element) {
							return document.body;
						}

						switch (element.nodeName) {
							case "HTML":
							case "BODY":
								return element.ownerDocument.body;
							case "#document":
								return element.body;
						}

						// Firefox want us to check `-x` and `-y` variations as well

						var _getStyleComputedProp = getStyleComputedProperty(element),
							overflow = _getStyleComputedProp.overflow,
							overflowX = _getStyleComputedProp.overflowX,
							overflowY = _getStyleComputedProp.overflowY;

						if (
							/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)
						) {
							return element;
						}

						return getScrollParent(getParentNode(element));
					}

					/**
					 * Returns the reference node of the reference object, or the reference object itself.
					 * @method
					 * @memberof Popper.Utils
					 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
					 * @returns {Element} parent
					 */
					function getReferenceNode(reference) {
						return reference && reference.referenceNode
							? reference.referenceNode
							: reference;
					}

					var isIE11 =
						isBrowser &&
						!!(window.MSInputMethodContext && document.documentMode);
					var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

					/**
					 * Determines if the browser is Internet Explorer
					 * @method
					 * @memberof Popper.Utils
					 * @param {Number} version to check
					 * @returns {Boolean} isIE
					 */
					function isIE(version) {
						if (version === 11) {
							return isIE11;
						}
						if (version === 10) {
							return isIE10;
						}
						return isIE11 || isIE10;
					}

					/**
					 * Returns the offset parent of the given element
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Element} element
					 * @returns {Element} offset parent
					 */
					function getOffsetParent(element) {
						if (!element) {
							return document.documentElement;
						}

						var noOffsetParent = isIE(10) ? document.body : null;

						// NOTE: 1 DOM access here
						var offsetParent = element.offsetParent || null;
						// Skip hidden elements which don't have an offsetParent
						while (
							offsetParent === noOffsetParent &&
							element.nextElementSibling
						) {
							offsetParent = (element = element.nextElementSibling)
								.offsetParent;
						}

						var nodeName = offsetParent && offsetParent.nodeName;

						if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
							return element
								? element.ownerDocument.documentElement
								: document.documentElement;
						}

						// .offsetParent will return the closest TH, TD or TABLE in case
						// no offsetParent is present, I hate this job...
						if (
							["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 &&
							getStyleComputedProperty(offsetParent, "position") === "static"
						) {
							return getOffsetParent(offsetParent);
						}

						return offsetParent;
					}

					function isOffsetContainer(element) {
						var nodeName = element.nodeName;

						if (nodeName === "BODY") {
							return false;
						}
						return (
							nodeName === "HTML" ||
							getOffsetParent(element.firstElementChild) === element
						);
					}

					/**
					 * Finds the root node (document, shadowDOM root) of the given element
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Element} node
					 * @returns {Element} root node
					 */
					function getRoot(node) {
						if (node.parentNode !== null) {
							return getRoot(node.parentNode);
						}

						return node;
					}

					/**
					 * Finds the offset parent common to the two provided nodes
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Element} element1
					 * @argument {Element} element2
					 * @returns {Element} common offset parent
					 */
					function findCommonOffsetParent(element1, element2) {
						// This check is needed to avoid errors in case one of the elements isn't defined for any reason
						if (
							!element1 ||
							!element1.nodeType ||
							!element2 ||
							!element2.nodeType
						) {
							return document.documentElement;
						}

						// Here we make sure to give as "start" the element that comes first in the DOM
						var order =
							element1.compareDocumentPosition(element2) &
							Node.DOCUMENT_POSITION_FOLLOWING;
						var start = order ? element1 : element2;
						var end = order ? element2 : element1;

						// Get common ancestor container
						var range = document.createRange();
						range.setStart(start, 0);
						range.setEnd(end, 0);
						var commonAncestorContainer = range.commonAncestorContainer;

						// Both nodes are inside #document

						if (
							(element1 !== commonAncestorContainer &&
								element2 !== commonAncestorContainer) ||
							start.contains(end)
						) {
							if (isOffsetContainer(commonAncestorContainer)) {
								return commonAncestorContainer;
							}

							return getOffsetParent(commonAncestorContainer);
						}

						// one of the nodes is inside shadowDOM, find which one
						var element1root = getRoot(element1);
						if (element1root.host) {
							return findCommonOffsetParent(element1root.host, element2);
						} else {
							return findCommonOffsetParent(element1, getRoot(element2).host);
						}
					}

					/**
					 * Gets the scroll value of the given element in the given side (top and left)
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Element} element
					 * @argument {String} side `top` or `left`
					 * @returns {number} amount of scrolled pixels
					 */
					function getScroll(element) {
						var side =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: "top";

						var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
						var nodeName = element.nodeName;

						if (nodeName === "BODY" || nodeName === "HTML") {
							var html = element.ownerDocument.documentElement;
							var scrollingElement =
								element.ownerDocument.scrollingElement || html;
							return scrollingElement[upperSide];
						}

						return element[upperSide];
					}

					/*
					 * Sum or subtract the element scroll values (left and top) from a given rect object
					 * @method
					 * @memberof Popper.Utils
					 * @param {Object} rect - Rect object you want to change
					 * @param {HTMLElement} element - The element from the function reads the scroll values
					 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
					 * @return {Object} rect - The modifier rect object
					 */
					function includeScroll(rect, element) {
						var subtract =
							arguments.length > 2 && arguments[2] !== undefined
								? arguments[2]
								: false;

						var scrollTop = getScroll(element, "top");
						var scrollLeft = getScroll(element, "left");
						var modifier = subtract ? -1 : 1;
						rect.top += scrollTop * modifier;
						rect.bottom += scrollTop * modifier;
						rect.left += scrollLeft * modifier;
						rect.right += scrollLeft * modifier;
						return rect;
					}

					/*
					 * Helper to detect borders of a given element
					 * @method
					 * @memberof Popper.Utils
					 * @param {CSSStyleDeclaration} styles
					 * Result of `getStyleComputedProperty` on the given element
					 * @param {String} axis - `x` or `y`
					 * @return {number} borders - The borders size of the given axis
					 */

					function getBordersSize(styles, axis) {
						var sideA = axis === "x" ? "Left" : "Top";
						var sideB = sideA === "Left" ? "Right" : "Bottom";

						return (
							parseFloat(styles["border" + sideA + "Width"]) +
							parseFloat(styles["border" + sideB + "Width"])
						);
					}

					function getSize(axis, body, html, computedStyle) {
						return Math.max(
							body["offset" + axis],
							body["scroll" + axis],
							html["client" + axis],
							html["offset" + axis],
							html["scroll" + axis],
							isIE(10)
								? parseInt(html["offset" + axis]) +
										parseInt(
											computedStyle[
												"margin" + (axis === "Height" ? "Top" : "Left")
											]
										) +
										parseInt(
											computedStyle[
												"margin" + (axis === "Height" ? "Bottom" : "Right")
											]
										)
								: 0
						);
					}

					function getWindowSizes(document) {
						var body = document.body;
						var html = document.documentElement;
						var computedStyle = isIE(10) && getComputedStyle(html);

						return {
							height: getSize("Height", body, html, computedStyle),
							width: getSize("Width", body, html, computedStyle)
						};
					}

					var classCallCheck = function (instance, Constructor) {
						if (!(instance instanceof Constructor)) {
							throw new TypeError("Cannot call a class as a function");
						}
					};

					var createClass = (function () {
						function defineProperties(target, props) {
							for (var i = 0; i < props.length; i++) {
								var descriptor = props[i];
								descriptor.enumerable = descriptor.enumerable || false;
								descriptor.configurable = true;
								if ("value" in descriptor) descriptor.writable = true;
								Object.defineProperty(target, descriptor.key, descriptor);
							}
						}

						return function (Constructor, protoProps, staticProps) {
							if (protoProps)
								defineProperties(Constructor.prototype, protoProps);
							if (staticProps) defineProperties(Constructor, staticProps);
							return Constructor;
						};
					})();

					var defineProperty = function (obj, key, value) {
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
					};

					var _extends =
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

					/**
					 * Given element offsets, generate an output similar to getBoundingClientRect
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Object} offsets
					 * @returns {Object} ClientRect like output
					 */
					function getClientRect(offsets) {
						return _extends({}, offsets, {
							right: offsets.left + offsets.width,
							bottom: offsets.top + offsets.height
						});
					}

					/**
					 * Get bounding client rect of given element
					 * @method
					 * @memberof Popper.Utils
					 * @param {HTMLElement} element
					 * @return {Object} client rect
					 */
					function getBoundingClientRect(element) {
						var rect = {};

						// IE10 10 FIX: Please, don't ask, the element isn't
						// considered in DOM in some circumstances...
						// This isn't reproducible in IE10 compatibility mode of IE11
						try {
							if (isIE(10)) {
								rect = element.getBoundingClientRect();
								var scrollTop = getScroll(element, "top");
								var scrollLeft = getScroll(element, "left");
								rect.top += scrollTop;
								rect.left += scrollLeft;
								rect.bottom += scrollTop;
								rect.right += scrollLeft;
							} else {
								rect = element.getBoundingClientRect();
							}
						} catch (e) {}

						var result = {
							left: rect.left,
							top: rect.top,
							width: rect.right - rect.left,
							height: rect.bottom - rect.top
						};

						// subtract scrollbar size from sizes
						var sizes =
							element.nodeName === "HTML"
								? getWindowSizes(element.ownerDocument)
								: {};
						var width = sizes.width || element.clientWidth || result.width;
						var height = sizes.height || element.clientHeight || result.height;

						var horizScrollbar = element.offsetWidth - width;
						var vertScrollbar = element.offsetHeight - height;

						// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
						// we make this check conditional for performance reasons
						if (horizScrollbar || vertScrollbar) {
							var styles = getStyleComputedProperty(element);
							horizScrollbar -= getBordersSize(styles, "x");
							vertScrollbar -= getBordersSize(styles, "y");

							result.width -= horizScrollbar;
							result.height -= vertScrollbar;
						}

						return getClientRect(result);
					}

					function getOffsetRectRelativeToArbitraryNode(children, parent) {
						var fixedPosition =
							arguments.length > 2 && arguments[2] !== undefined
								? arguments[2]
								: false;

						var isIE10 = isIE(10);
						var isHTML = parent.nodeName === "HTML";
						var childrenRect = getBoundingClientRect(children);
						var parentRect = getBoundingClientRect(parent);
						var scrollParent = getScrollParent(children);

						var styles = getStyleComputedProperty(parent);
						var borderTopWidth = parseFloat(styles.borderTopWidth);
						var borderLeftWidth = parseFloat(styles.borderLeftWidth);

						// In cases where the parent is fixed, we must ignore negative scroll in offset calc
						if (fixedPosition && isHTML) {
							parentRect.top = Math.max(parentRect.top, 0);
							parentRect.left = Math.max(parentRect.left, 0);
						}
						var offsets = getClientRect({
							top: childrenRect.top - parentRect.top - borderTopWidth,
							left: childrenRect.left - parentRect.left - borderLeftWidth,
							width: childrenRect.width,
							height: childrenRect.height
						});
						offsets.marginTop = 0;
						offsets.marginLeft = 0;

						// Subtract margins of documentElement in case it's being used as parent
						// we do this only on HTML because it's the only element that behaves
						// differently when margins are applied to it. The margins are included in
						// the box of the documentElement, in the other cases not.
						if (!isIE10 && isHTML) {
							var marginTop = parseFloat(styles.marginTop);
							var marginLeft = parseFloat(styles.marginLeft);

							offsets.top -= borderTopWidth - marginTop;
							offsets.bottom -= borderTopWidth - marginTop;
							offsets.left -= borderLeftWidth - marginLeft;
							offsets.right -= borderLeftWidth - marginLeft;

							// Attach marginTop and marginLeft because in some circumstances we may need them
							offsets.marginTop = marginTop;
							offsets.marginLeft = marginLeft;
						}

						if (
							isIE10 && !fixedPosition
								? parent.contains(scrollParent)
								: parent === scrollParent && scrollParent.nodeName !== "BODY"
						) {
							offsets = includeScroll(offsets, parent);
						}

						return offsets;
					}

					function getViewportOffsetRectRelativeToArtbitraryNode(element) {
						var excludeScroll =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: false;

						var html = element.ownerDocument.documentElement;
						var relativeOffset = getOffsetRectRelativeToArbitraryNode(
							element,
							html
						);
						var width = Math.max(html.clientWidth, window.innerWidth || 0);
						var height = Math.max(html.clientHeight, window.innerHeight || 0);

						var scrollTop = !excludeScroll ? getScroll(html) : 0;
						var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;

						var offset = {
							top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
							left:
								scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
							width: width,
							height: height
						};

						return getClientRect(offset);
					}

					/**
					 * Check if the given element is fixed or is inside a fixed parent
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Element} element
					 * @argument {Element} customContainer
					 * @returns {Boolean} answer to "isFixed?"
					 */
					function isFixed(element) {
						var nodeName = element.nodeName;
						if (nodeName === "BODY" || nodeName === "HTML") {
							return false;
						}
						if (getStyleComputedProperty(element, "position") === "fixed") {
							return true;
						}
						var parentNode = getParentNode(element);
						if (!parentNode) {
							return false;
						}
						return isFixed(parentNode);
					}

					/**
					 * Finds the first parent of an element that has a transformed property defined
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Element} element
					 * @returns {Element} first transformed parent or documentElement
					 */

					function getFixedPositionOffsetParent(element) {
						// This check is needed to avoid errors in case one of the elements isn't defined for any reason
						if (!element || !element.parentElement || isIE()) {
							return document.documentElement;
						}
						var el = element.parentElement;
						while (el && getStyleComputedProperty(el, "transform") === "none") {
							el = el.parentElement;
						}
						return el || document.documentElement;
					}

					/**
					 * Computed the boundaries limits and return them
					 * @method
					 * @memberof Popper.Utils
					 * @param {HTMLElement} popper
					 * @param {HTMLElement} reference
					 * @param {number} padding
					 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
					 * @param {Boolean} fixedPosition - Is in fixed position mode
					 * @returns {Object} Coordinates of the boundaries
					 */
					function getBoundaries(
						popper,
						reference,
						padding,
						boundariesElement
					) {
						var fixedPosition =
							arguments.length > 4 && arguments[4] !== undefined
								? arguments[4]
								: false;

						// NOTE: 1 DOM access here

						var boundaries = { top: 0, left: 0 };
						var offsetParent = fixedPosition
							? getFixedPositionOffsetParent(popper)
							: findCommonOffsetParent(popper, getReferenceNode(reference));

						// Handle viewport case
						if (boundariesElement === "viewport") {
							boundaries = getViewportOffsetRectRelativeToArtbitraryNode(
								offsetParent,
								fixedPosition
							);
						} else {
							// Handle other cases based on DOM element used as boundaries
							var boundariesNode = void 0;
							if (boundariesElement === "scrollParent") {
								boundariesNode = getScrollParent(getParentNode(reference));
								if (boundariesNode.nodeName === "BODY") {
									boundariesNode = popper.ownerDocument.documentElement;
								}
							} else if (boundariesElement === "window") {
								boundariesNode = popper.ownerDocument.documentElement;
							} else {
								boundariesNode = boundariesElement;
							}

							var offsets = getOffsetRectRelativeToArbitraryNode(
								boundariesNode,
								offsetParent,
								fixedPosition
							);

							// In case of HTML, we need a different computation
							if (
								boundariesNode.nodeName === "HTML" &&
								!isFixed(offsetParent)
							) {
								var _getWindowSizes = getWindowSizes(popper.ownerDocument),
									height = _getWindowSizes.height,
									width = _getWindowSizes.width;

								boundaries.top += offsets.top - offsets.marginTop;
								boundaries.bottom = height + offsets.top;
								boundaries.left += offsets.left - offsets.marginLeft;
								boundaries.right = width + offsets.left;
							} else {
								// for all the other DOM elements, this one is good
								boundaries = offsets;
							}
						}

						// Add paddings
						padding = padding || 0;
						var isPaddingNumber = typeof padding === "number";
						boundaries.left += isPaddingNumber ? padding : padding.left || 0;
						boundaries.top += isPaddingNumber ? padding : padding.top || 0;
						boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
						boundaries.bottom -= isPaddingNumber
							? padding
							: padding.bottom || 0;

						return boundaries;
					}

					function getArea(_ref) {
						var width = _ref.width,
							height = _ref.height;

						return width * height;
					}

					/**
					 * Utility used to transform the `auto` placement to the placement with more
					 * available space.
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Object} data - The data object generated by update method
					 * @argument {Object} options - Modifiers configuration and options
					 * @returns {Object} The data object, properly modified
					 */
					function computeAutoPlacement(
						placement,
						refRect,
						popper,
						reference,
						boundariesElement
					) {
						var padding =
							arguments.length > 5 && arguments[5] !== undefined
								? arguments[5]
								: 0;

						if (placement.indexOf("auto") === -1) {
							return placement;
						}

						var boundaries = getBoundaries(
							popper,
							reference,
							padding,
							boundariesElement
						);

						var rects = {
							top: {
								width: boundaries.width,
								height: refRect.top - boundaries.top
							},
							right: {
								width: boundaries.right - refRect.right,
								height: boundaries.height
							},
							bottom: {
								width: boundaries.width,
								height: boundaries.bottom - refRect.bottom
							},
							left: {
								width: refRect.left - boundaries.left,
								height: boundaries.height
							}
						};

						var sortedAreas = Object.keys(rects)
							.map(function (key) {
								return _extends(
									{
										key: key
									},
									rects[key],
									{
										area: getArea(rects[key])
									}
								);
							})
							.sort(function (a, b) {
								return b.area - a.area;
							});

						var filteredAreas = sortedAreas.filter(function (_ref2) {
							var width = _ref2.width,
								height = _ref2.height;
							return (
								width >= popper.clientWidth && height >= popper.clientHeight
							);
						});

						var computedPlacement =
							filteredAreas.length > 0
								? filteredAreas[0].key
								: sortedAreas[0].key;

						var variation = placement.split("-")[1];

						return computedPlacement + (variation ? "-" + variation : "");
					}

					/**
					 * Get offsets to the reference element
					 * @method
					 * @memberof Popper.Utils
					 * @param {Object} state
					 * @param {Element} popper - the popper element
					 * @param {Element} reference - the reference element (the popper will be relative to this)
					 * @param {Element} fixedPosition - is in fixed position mode
					 * @returns {Object} An object containing the offsets which will be applied to the popper
					 */
					function getReferenceOffsets(state, popper, reference) {
						var fixedPosition =
							arguments.length > 3 && arguments[3] !== undefined
								? arguments[3]
								: null;

						var commonOffsetParent = fixedPosition
							? getFixedPositionOffsetParent(popper)
							: findCommonOffsetParent(popper, getReferenceNode(reference));
						return getOffsetRectRelativeToArbitraryNode(
							reference,
							commonOffsetParent,
							fixedPosition
						);
					}

					/**
					 * Get the outer sizes of the given element (offset size + margins)
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Element} element
					 * @returns {Object} object containing width and height properties
					 */
					function getOuterSizes(element) {
						var window = element.ownerDocument.defaultView;
						var styles = window.getComputedStyle(element);
						var x =
							parseFloat(styles.marginTop || 0) +
							parseFloat(styles.marginBottom || 0);
						var y =
							parseFloat(styles.marginLeft || 0) +
							parseFloat(styles.marginRight || 0);
						var result = {
							width: element.offsetWidth + y,
							height: element.offsetHeight + x
						};
						return result;
					}

					/**
					 * Get the opposite placement of the given one
					 * @method
					 * @memberof Popper.Utils
					 * @argument {String} placement
					 * @returns {String} flipped placement
					 */
					function getOppositePlacement(placement) {
						var hash = {
							left: "right",
							right: "left",
							bottom: "top",
							top: "bottom"
						};
						return placement.replace(/left|right|bottom|top/g, function (
							matched
						) {
							return hash[matched];
						});
					}

					/**
					 * Get offsets to the popper
					 * @method
					 * @memberof Popper.Utils
					 * @param {Object} position - CSS position the Popper will get applied
					 * @param {HTMLElement} popper - the popper element
					 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
					 * @param {String} placement - one of the valid placement options
					 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
					 */
					function getPopperOffsets(popper, referenceOffsets, placement) {
						placement = placement.split("-")[0];

						// Get popper node sizes
						var popperRect = getOuterSizes(popper);

						// Add position, width and height to our offsets object
						var popperOffsets = {
							width: popperRect.width,
							height: popperRect.height
						};

						// depending by the popper placement we have to compute its offsets slightly differently
						var isHoriz = ["right", "left"].indexOf(placement) !== -1;
						var mainSide = isHoriz ? "top" : "left";
						var secondarySide = isHoriz ? "left" : "top";
						var measurement = isHoriz ? "height" : "width";
						var secondaryMeasurement = !isHoriz ? "height" : "width";

						popperOffsets[mainSide] =
							referenceOffsets[mainSide] +
							referenceOffsets[measurement] / 2 -
							popperRect[measurement] / 2;
						if (placement === secondarySide) {
							popperOffsets[secondarySide] =
								referenceOffsets[secondarySide] -
								popperRect[secondaryMeasurement];
						} else {
							popperOffsets[secondarySide] =
								referenceOffsets[getOppositePlacement(secondarySide)];
						}

						return popperOffsets;
					}

					/**
					 * Mimics the `find` method of Array
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Array} arr
					 * @argument prop
					 * @argument value
					 * @returns index or -1
					 */
					function find(arr, check) {
						// use native find if supported
						if (Array.prototype.find) {
							return arr.find(check);
						}

						// use `filter` to obtain the same behavior of `find`
						return arr.filter(check)[0];
					}

					/**
					 * Return the index of the matching object
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Array} arr
					 * @argument prop
					 * @argument value
					 * @returns index or -1
					 */
					function findIndex(arr, prop, value) {
						// use native findIndex if supported
						if (Array.prototype.findIndex) {
							return arr.findIndex(function (cur) {
								return cur[prop] === value;
							});
						}

						// use `find` + `indexOf` if `findIndex` isn't supported
						var match = find(arr, function (obj) {
							return obj[prop] === value;
						});
						return arr.indexOf(match);
					}

					/**
					 * Loop trough the list of modifiers and run them in order,
					 * each of them will then edit the data object.
					 * @method
					 * @memberof Popper.Utils
					 * @param {dataObject} data
					 * @param {Array} modifiers
					 * @param {String} ends - Optional modifier name used as stopper
					 * @returns {dataObject}
					 */
					function runModifiers(modifiers, data, ends) {
						var modifiersToRun =
							ends === undefined
								? modifiers
								: modifiers.slice(0, findIndex(modifiers, "name", ends));

						modifiersToRun.forEach(function (modifier) {
							if (modifier["function"]) {
								// eslint-disable-line dot-notation
								console.warn(
									"`modifier.function` is deprecated, use `modifier.fn`!"
								);
							}
							var fn = modifier["function"] || modifier.fn; // eslint-disable-line dot-notation
							if (modifier.enabled && isFunction(fn)) {
								// Add properties to offsets to make them a complete clientRect object
								// we do this before each modifier to make sure the previous one doesn't
								// mess with these values
								data.offsets.popper = getClientRect(data.offsets.popper);
								data.offsets.reference = getClientRect(data.offsets.reference);

								data = fn(data, modifier);
							}
						});

						return data;
					}

					/**
					 * Updates the position of the popper, computing the new offsets and applying
					 * the new style.<br />
					 * Prefer `scheduleUpdate` over `update` because of performance reasons.
					 * @method
					 * @memberof Popper
					 */
					function update() {
						// if popper is destroyed, don't perform any further update
						if (this.state.isDestroyed) {
							return;
						}

						var data = {
							instance: this,
							styles: {},
							arrowStyles: {},
							attributes: {},
							flipped: false,
							offsets: {}
						};

						// compute reference element offsets
						data.offsets.reference = getReferenceOffsets(
							this.state,
							this.popper,
							this.reference,
							this.options.positionFixed
						);

						// compute auto placement, store placement inside the data object,
						// modifiers will be able to edit `placement` if needed
						// and refer to originalPlacement to know the original value
						data.placement = computeAutoPlacement(
							this.options.placement,
							data.offsets.reference,
							this.popper,
							this.reference,
							this.options.modifiers.flip.boundariesElement,
							this.options.modifiers.flip.padding
						);

						// store the computed placement inside `originalPlacement`
						data.originalPlacement = data.placement;

						data.positionFixed = this.options.positionFixed;

						// compute the popper offsets
						data.offsets.popper = getPopperOffsets(
							this.popper,
							data.offsets.reference,
							data.placement
						);

						data.offsets.popper.position = this.options.positionFixed
							? "fixed"
							: "absolute";

						// run the modifiers
						data = runModifiers(this.modifiers, data);

						// the first `update` will call `onCreate` callback
						// the other ones will call `onUpdate` callback
						if (!this.state.isCreated) {
							this.state.isCreated = true;
							this.options.onCreate(data);
						} else {
							this.options.onUpdate(data);
						}
					}

					/**
					 * Helper used to know if the given modifier is enabled.
					 * @method
					 * @memberof Popper.Utils
					 * @returns {Boolean}
					 */
					function isModifierEnabled(modifiers, modifierName) {
						return modifiers.some(function (_ref) {
							var name = _ref.name,
								enabled = _ref.enabled;
							return enabled && name === modifierName;
						});
					}

					/**
					 * Get the prefixed supported property name
					 * @method
					 * @memberof Popper.Utils
					 * @argument {String} property (camelCase)
					 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
					 */
					function getSupportedPropertyName(property) {
						var prefixes = [false, "ms", "Webkit", "Moz", "O"];
						var upperProp =
							property.charAt(0).toUpperCase() + property.slice(1);

						for (var i = 0; i < prefixes.length; i++) {
							var prefix = prefixes[i];
							var toCheck = prefix ? "" + prefix + upperProp : property;
							if (typeof document.body.style[toCheck] !== "undefined") {
								return toCheck;
							}
						}
						return null;
					}

					/**
					 * Destroys the popper.
					 * @method
					 * @memberof Popper
					 */
					function destroy() {
						this.state.isDestroyed = true;

						// touch DOM only if `applyStyle` modifier is enabled
						if (isModifierEnabled(this.modifiers, "applyStyle")) {
							this.popper.removeAttribute("x-placement");
							this.popper.style.position = "";
							this.popper.style.top = "";
							this.popper.style.left = "";
							this.popper.style.right = "";
							this.popper.style.bottom = "";
							this.popper.style.willChange = "";
							this.popper.style[getSupportedPropertyName("transform")] = "";
						}

						this.disableEventListeners();

						// remove the popper if user explicitly asked for the deletion on destroy
						// do not use `remove` because IE11 doesn't support it
						if (this.options.removeOnDestroy) {
							this.popper.parentNode.removeChild(this.popper);
						}
						return this;
					}

					/**
					 * Get the window associated with the element
					 * @argument {Element} element
					 * @returns {Window}
					 */
					function getWindow(element) {
						var ownerDocument = element.ownerDocument;
						return ownerDocument ? ownerDocument.defaultView : window;
					}

					function attachToScrollParents(
						scrollParent,
						event,
						callback,
						scrollParents
					) {
						var isBody = scrollParent.nodeName === "BODY";
						var target = isBody
							? scrollParent.ownerDocument.defaultView
							: scrollParent;
						target.addEventListener(event, callback, { passive: true });

						if (!isBody) {
							attachToScrollParents(
								getScrollParent(target.parentNode),
								event,
								callback,
								scrollParents
							);
						}
						scrollParents.push(target);
					}

					/**
					 * Setup needed event listeners used to update the popper position
					 * @method
					 * @memberof Popper.Utils
					 * @private
					 */
					function setupEventListeners(reference, options, state, updateBound) {
						// Resize event listener on window
						state.updateBound = updateBound;
						getWindow(reference).addEventListener("resize", state.updateBound, {
							passive: true
						});

						// Scroll event listener on scroll parents
						var scrollElement = getScrollParent(reference);
						attachToScrollParents(
							scrollElement,
							"scroll",
							state.updateBound,
							state.scrollParents
						);
						state.scrollElement = scrollElement;
						state.eventsEnabled = true;

						return state;
					}

					/**
					 * It will add resize/scroll events and start recalculating
					 * position of the popper element when they are triggered.
					 * @method
					 * @memberof Popper
					 */
					function enableEventListeners() {
						if (!this.state.eventsEnabled) {
							this.state = setupEventListeners(
								this.reference,
								this.options,
								this.state,
								this.scheduleUpdate
							);
						}
					}

					/**
					 * Remove event listeners used to update the popper position
					 * @method
					 * @memberof Popper.Utils
					 * @private
					 */
					function removeEventListeners(reference, state) {
						// Remove resize event listener on window
						getWindow(reference).removeEventListener(
							"resize",
							state.updateBound
						);

						// Remove scroll event listener on scroll parents
						state.scrollParents.forEach(function (target) {
							target.removeEventListener("scroll", state.updateBound);
						});

						// Reset state
						state.updateBound = null;
						state.scrollParents = [];
						state.scrollElement = null;
						state.eventsEnabled = false;
						return state;
					}

					/**
					 * It will remove resize/scroll events and won't recalculate popper position
					 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
					 * unless you call `update` method manually.
					 * @method
					 * @memberof Popper
					 */
					function disableEventListeners() {
						if (this.state.eventsEnabled) {
							cancelAnimationFrame(this.scheduleUpdate);
							this.state = removeEventListeners(this.reference, this.state);
						}
					}

					/**
					 * Tells if a given input is a number
					 * @method
					 * @memberof Popper.Utils
					 * @param {*} input to check
					 * @return {Boolean}
					 */
					function isNumeric(n) {
						return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
					}

					/**
					 * Set the style to the given popper
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Element} element - Element to apply the style to
					 * @argument {Object} styles
					 * Object with a list of properties and values which will be applied to the element
					 */
					function setStyles(element, styles) {
						Object.keys(styles).forEach(function (prop) {
							var unit = "";
							// add unit if the value is numeric and is one of the following
							if (
								["width", "height", "top", "right", "bottom", "left"].indexOf(
									prop
								) !== -1 &&
								isNumeric(styles[prop])
							) {
								unit = "px";
							}
							element.style[prop] = styles[prop] + unit;
						});
					}

					/**
					 * Set the attributes to the given popper
					 * @method
					 * @memberof Popper.Utils
					 * @argument {Element} element - Element to apply the attributes to
					 * @argument {Object} styles
					 * Object with a list of properties and values which will be applied to the element
					 */
					function setAttributes(element, attributes) {
						Object.keys(attributes).forEach(function (prop) {
							var value = attributes[prop];
							if (value !== false) {
								element.setAttribute(prop, attributes[prop]);
							} else {
								element.removeAttribute(prop);
							}
						});
					}

					/**
					 * @function
					 * @memberof Modifiers
					 * @argument {Object} data - The data object generated by `update` method
					 * @argument {Object} data.styles - List of style properties - values to apply to popper element
					 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
					 * @argument {Object} options - Modifiers configuration and options
					 * @returns {Object} The same data object
					 */
					function applyStyle(data) {
						// any property present in `data.styles` will be applied to the popper,
						// in this way we can make the 3rd party modifiers add custom styles to it
						// Be aware, modifiers could override the properties defined in the previous
						// lines of this modifier!
						setStyles(data.instance.popper, data.styles);

						// any property present in `data.attributes` will be applied to the popper,
						// they will be set as HTML attributes of the element
						setAttributes(data.instance.popper, data.attributes);

						// if arrowElement is defined and arrowStyles has some properties
						if (data.arrowElement && Object.keys(data.arrowStyles).length) {
							setStyles(data.arrowElement, data.arrowStyles);
						}

						return data;
					}

					/**
					 * Set the x-placement attribute before everything else because it could be used
					 * to add margins to the popper margins needs to be calculated to get the
					 * correct popper offsets.
					 * @method
					 * @memberof Popper.modifiers
					 * @param {HTMLElement} reference - The reference element used to position the popper
					 * @param {HTMLElement} popper - The HTML element used as popper
					 * @param {Object} options - Popper.js options
					 */
					function applyStyleOnLoad(
						reference,
						popper,
						options,
						modifierOptions,
						state
					) {
						// compute reference element offsets
						var referenceOffsets = getReferenceOffsets(
							state,
							popper,
							reference,
							options.positionFixed
						);

						// compute auto placement, store placement inside the data object,
						// modifiers will be able to edit `placement` if needed
						// and refer to originalPlacement to know the original value
						var placement = computeAutoPlacement(
							options.placement,
							referenceOffsets,
							popper,
							reference,
							options.modifiers.flip.boundariesElement,
							options.modifiers.flip.padding
						);

						popper.setAttribute("x-placement", placement);

						// Apply `position` to popper before anything else because
						// without the position applied we can't guarantee correct computations
						setStyles(popper, {
							position: options.positionFixed ? "fixed" : "absolute"
						});

						return options;
					}

					/**
					 * @function
					 * @memberof Popper.Utils
					 * @argument {Object} data - The data object generated by `update` method
					 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
					 * @returns {Object} The popper's position offsets rounded
					 *
					 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
					 * good as it can be within reason.
					 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
					 *
					 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
					 * as well on High DPI screens).
					 *
					 * Firefox prefers no rounding for positioning and does not have blurriness on
					 * high DPI screens.
					 *
					 * Only horizontal placement and left/right values need to be considered.
					 */
					function getRoundedOffsets(data, shouldRound) {
						var _data$offsets = data.offsets,
							popper = _data$offsets.popper,
							reference = _data$offsets.reference;
						var round = Math.round,
							floor = Math.floor;

						var noRound = function noRound(v) {
							return v;
						};

						var referenceWidth = round(reference.width);
						var popperWidth = round(popper.width);

						var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
						var isVariation = data.placement.indexOf("-") !== -1;
						var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
						var bothOddWidth =
							referenceWidth % 2 === 1 && popperWidth % 2 === 1;

						var horizontalToInteger = !shouldRound
							? noRound
							: isVertical || isVariation || sameWidthParity
							? round
							: floor;
						var verticalToInteger = !shouldRound ? noRound : round;

						return {
							left: horizontalToInteger(
								bothOddWidth && !isVariation && shouldRound
									? popper.left - 1
									: popper.left
							),
							top: verticalToInteger(popper.top),
							bottom: verticalToInteger(popper.bottom),
							right: horizontalToInteger(popper.right)
						};
					}

					var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

					/**
					 * @function
					 * @memberof Modifiers
					 * @argument {Object} data - The data object generated by `update` method
					 * @argument {Object} options - Modifiers configuration and options
					 * @returns {Object} The data object, properly modified
					 */
					function computeStyle(data, options) {
						var x = options.x,
							y = options.y;
						var popper = data.offsets.popper;

						// Remove this legacy support in Popper.js v2

						var legacyGpuAccelerationOption = find(
							data.instance.modifiers,
							function (modifier) {
								return modifier.name === "applyStyle";
							}
						).gpuAcceleration;
						if (legacyGpuAccelerationOption !== undefined) {
							console.warn(
								"WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
							);
						}
						var gpuAcceleration =
							legacyGpuAccelerationOption !== undefined
								? legacyGpuAccelerationOption
								: options.gpuAcceleration;

						var offsetParent = getOffsetParent(data.instance.popper);
						var offsetParentRect = getBoundingClientRect(offsetParent);

						// Styles
						var styles = {
							position: popper.position
						};

						var offsets = getRoundedOffsets(
							data,
							window.devicePixelRatio < 2 || !isFirefox
						);

						var sideA = x === "bottom" ? "top" : "bottom";
						var sideB = y === "right" ? "left" : "right";

						// if gpuAcceleration is set to `true` and transform is supported,
						//  we use `translate3d` to apply the position to the popper we
						// automatically use the supported prefixed version if needed
						var prefixedProperty = getSupportedPropertyName("transform");

						// now, let's make a step back and look at this code closely (wtf?)
						// If the content of the popper grows once it's been positioned, it
						// may happen that the popper gets misplaced because of the new content
						// overflowing its reference element
						// To avoid this problem, we provide two options (x and y), which allow
						// the consumer to define the offset origin.
						// If we position a popper on top of a reference element, we can set
						// `x` to `top` to make the popper grow towards its top instead of
						// its bottom.
						var left = void 0,
							top = void 0;
						if (sideA === "bottom") {
							// when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
							// and not the bottom of the html element
							if (offsetParent.nodeName === "HTML") {
								top = -offsetParent.clientHeight + offsets.bottom;
							} else {
								top = -offsetParentRect.height + offsets.bottom;
							}
						} else {
							top = offsets.top;
						}
						if (sideB === "right") {
							if (offsetParent.nodeName === "HTML") {
								left = -offsetParent.clientWidth + offsets.right;
							} else {
								left = -offsetParentRect.width + offsets.right;
							}
						} else {
							left = offsets.left;
						}
						if (gpuAcceleration && prefixedProperty) {
							styles[prefixedProperty] =
								"translate3d(" + left + "px, " + top + "px, 0)";
							styles[sideA] = 0;
							styles[sideB] = 0;
							styles.willChange = "transform";
						} else {
							// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
							var invertTop = sideA === "bottom" ? -1 : 1;
							var invertLeft = sideB === "right" ? -1 : 1;
							styles[sideA] = top * invertTop;
							styles[sideB] = left * invertLeft;
							styles.willChange = sideA + ", " + sideB;
						}

						// Attributes
						var attributes = {
							"x-placement": data.placement
						};

						// Update `data` attributes, styles and arrowStyles
						data.attributes = _extends({}, attributes, data.attributes);
						data.styles = _extends({}, styles, data.styles);
						data.arrowStyles = _extends(
							{},
							data.offsets.arrow,
							data.arrowStyles
						);

						return data;
					}

					/**
					 * Helper used to know if the given modifier depends from another one.<br />
					 * It checks if the needed modifier is listed and enabled.
					 * @method
					 * @memberof Popper.Utils
					 * @param {Array} modifiers - list of modifiers
					 * @param {String} requestingName - name of requesting modifier
					 * @param {String} requestedName - name of requested modifier
					 * @returns {Boolean}
					 */
					function isModifierRequired(
						modifiers,
						requestingName,
						requestedName
					) {
						var requesting = find(modifiers, function (_ref) {
							var name = _ref.name;
							return name === requestingName;
						});

						var isRequired =
							!!requesting &&
							modifiers.some(function (modifier) {
								return (
									modifier.name === requestedName &&
									modifier.enabled &&
									modifier.order < requesting.order
								);
							});

						if (!isRequired) {
							var _requesting = "`" + requestingName + "`";
							var requested = "`" + requestedName + "`";
							console.warn(
								requested +
									" modifier is required by " +
									_requesting +
									" modifier in order to work, be sure to include it before " +
									_requesting +
									"!"
							);
						}
						return isRequired;
					}

					/**
					 * @function
					 * @memberof Modifiers
					 * @argument {Object} data - The data object generated by update method
					 * @argument {Object} options - Modifiers configuration and options
					 * @returns {Object} The data object, properly modified
					 */
					function arrow(data, options) {
						var _data$offsets$arrow;

						// arrow depends on keepTogether in order to work
						if (
							!isModifierRequired(
								data.instance.modifiers,
								"arrow",
								"keepTogether"
							)
						) {
							return data;
						}

						var arrowElement = options.element;

						// if arrowElement is a string, suppose it's a CSS selector
						if (typeof arrowElement === "string") {
							arrowElement = data.instance.popper.querySelector(arrowElement);

							// if arrowElement is not found, don't run the modifier
							if (!arrowElement) {
								return data;
							}
						} else {
							// if the arrowElement isn't a query selector we must check that the
							// provided DOM node is child of its popper node
							if (!data.instance.popper.contains(arrowElement)) {
								console.warn(
									"WARNING: `arrow.element` must be child of its popper element!"
								);
								return data;
							}
						}

						var placement = data.placement.split("-")[0];
						var _data$offsets = data.offsets,
							popper = _data$offsets.popper,
							reference = _data$offsets.reference;

						var isVertical = ["left", "right"].indexOf(placement) !== -1;

						var len = isVertical ? "height" : "width";
						var sideCapitalized = isVertical ? "Top" : "Left";
						var side = sideCapitalized.toLowerCase();
						var altSide = isVertical ? "left" : "top";
						var opSide = isVertical ? "bottom" : "right";
						var arrowElementSize = getOuterSizes(arrowElement)[len];

						//
						// extends keepTogether behavior making sure the popper and its
						// reference have enough pixels in conjunction
						//

						// top/left side
						if (reference[opSide] - arrowElementSize < popper[side]) {
							data.offsets.popper[side] -=
								popper[side] - (reference[opSide] - arrowElementSize);
						}
						// bottom/right side
						if (reference[side] + arrowElementSize > popper[opSide]) {
							data.offsets.popper[side] +=
								reference[side] + arrowElementSize - popper[opSide];
						}
						data.offsets.popper = getClientRect(data.offsets.popper);

						// compute center of the popper
						var center =
							reference[side] + reference[len] / 2 - arrowElementSize / 2;

						// Compute the sideValue using the updated popper offsets
						// take popper margin in account because we don't have this info available
						var css = getStyleComputedProperty(data.instance.popper);
						var popperMarginSide = parseFloat(css["margin" + sideCapitalized]);
						var popperBorderSide = parseFloat(
							css["border" + sideCapitalized + "Width"]
						);
						var sideValue =
							center -
							data.offsets.popper[side] -
							popperMarginSide -
							popperBorderSide;

						// prevent arrowElement from being placed not contiguously to its popper
						sideValue = Math.max(
							Math.min(popper[len] - arrowElementSize, sideValue),
							0
						);

						data.arrowElement = arrowElement;
						data.offsets.arrow =
							((_data$offsets$arrow = {}),
							defineProperty(_data$offsets$arrow, side, Math.round(sideValue)),
							defineProperty(_data$offsets$arrow, altSide, ""),
							_data$offsets$arrow);

						return data;
					}

					/**
					 * Get the opposite placement variation of the given one
					 * @method
					 * @memberof Popper.Utils
					 * @argument {String} placement variation
					 * @returns {String} flipped placement variation
					 */
					function getOppositeVariation(variation) {
						if (variation === "end") {
							return "start";
						} else if (variation === "start") {
							return "end";
						}
						return variation;
					}

					/**
					 * List of accepted placements to use as values of the `placement` option.<br />
					 * Valid placements are:
					 * - `auto`
					 * - `top`
					 * - `right`
					 * - `bottom`
					 * - `left`
					 *
					 * Each placement can have a variation from this list:
					 * - `-start`
					 * - `-end`
					 *
					 * Variations are interpreted easily if you think of them as the left to right
					 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
					 * is right.<br />
					 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
					 *
					 * Some valid examples are:
					 * - `top-end` (on top of reference, right aligned)
					 * - `right-start` (on right of reference, top aligned)
					 * - `bottom` (on bottom, centered)
					 * - `auto-end` (on the side with more space available, alignment depends by placement)
					 *
					 * @static
					 * @type {Array}
					 * @enum {String}
					 * @readonly
					 * @method placements
					 * @memberof Popper
					 */
					var placements = [
						"auto-start",
						"auto",
						"auto-end",
						"top-start",
						"top",
						"top-end",
						"right-start",
						"right",
						"right-end",
						"bottom-end",
						"bottom",
						"bottom-start",
						"left-end",
						"left",
						"left-start"
					];

					// Get rid of `auto` `auto-start` and `auto-end`
					var validPlacements = placements.slice(3);

					/**
					 * Given an initial placement, returns all the subsequent placements
					 * clockwise (or counter-clockwise).
					 *
					 * @method
					 * @memberof Popper.Utils
					 * @argument {String} placement - A valid placement (it accepts variations)
					 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
					 * @returns {Array} placements including their variations
					 */
					function clockwise(placement) {
						var counter =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: false;

						var index = validPlacements.indexOf(placement);
						var arr = validPlacements
							.slice(index + 1)
							.concat(validPlacements.slice(0, index));
						return counter ? arr.reverse() : arr;
					}

					var BEHAVIORS = {
						FLIP: "flip",
						CLOCKWISE: "clockwise",
						COUNTERCLOCKWISE: "counterclockwise"
					};

					/**
					 * @function
					 * @memberof Modifiers
					 * @argument {Object} data - The data object generated by update method
					 * @argument {Object} options - Modifiers configuration and options
					 * @returns {Object} The data object, properly modified
					 */
					function flip(data, options) {
						// if `inner` modifier is enabled, we can't use the `flip` modifier
						if (isModifierEnabled(data.instance.modifiers, "inner")) {
							return data;
						}

						if (data.flipped && data.placement === data.originalPlacement) {
							// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
							return data;
						}

						var boundaries = getBoundaries(
							data.instance.popper,
							data.instance.reference,
							options.padding,
							options.boundariesElement,
							data.positionFixed
						);

						var placement = data.placement.split("-")[0];
						var placementOpposite = getOppositePlacement(placement);
						var variation = data.placement.split("-")[1] || "";

						var flipOrder = [];

						switch (options.behavior) {
							case BEHAVIORS.FLIP:
								flipOrder = [placement, placementOpposite];
								break;
							case BEHAVIORS.CLOCKWISE:
								flipOrder = clockwise(placement);
								break;
							case BEHAVIORS.COUNTERCLOCKWISE:
								flipOrder = clockwise(placement, true);
								break;
							default:
								flipOrder = options.behavior;
						}

						flipOrder.forEach(function (step, index) {
							if (placement !== step || flipOrder.length === index + 1) {
								return data;
							}

							placement = data.placement.split("-")[0];
							placementOpposite = getOppositePlacement(placement);

							var popperOffsets = data.offsets.popper;
							var refOffsets = data.offsets.reference;

							// using floor because the reference offsets may contain decimals we are not going to consider here
							var floor = Math.floor;
							var overlapsRef =
								(placement === "left" &&
									floor(popperOffsets.right) > floor(refOffsets.left)) ||
								(placement === "right" &&
									floor(popperOffsets.left) < floor(refOffsets.right)) ||
								(placement === "top" &&
									floor(popperOffsets.bottom) > floor(refOffsets.top)) ||
								(placement === "bottom" &&
									floor(popperOffsets.top) < floor(refOffsets.bottom));

							var overflowsLeft =
								floor(popperOffsets.left) < floor(boundaries.left);
							var overflowsRight =
								floor(popperOffsets.right) > floor(boundaries.right);
							var overflowsTop =
								floor(popperOffsets.top) < floor(boundaries.top);
							var overflowsBottom =
								floor(popperOffsets.bottom) > floor(boundaries.bottom);

							var overflowsBoundaries =
								(placement === "left" && overflowsLeft) ||
								(placement === "right" && overflowsRight) ||
								(placement === "top" && overflowsTop) ||
								(placement === "bottom" && overflowsBottom);

							// flip the variation if required
							var isVertical = ["top", "bottom"].indexOf(placement) !== -1;

							// flips variation if reference element overflows boundaries
							var flippedVariationByRef =
								!!options.flipVariations &&
								((isVertical && variation === "start" && overflowsLeft) ||
									(isVertical && variation === "end" && overflowsRight) ||
									(!isVertical && variation === "start" && overflowsTop) ||
									(!isVertical && variation === "end" && overflowsBottom));

							// flips variation if popper content overflows boundaries
							var flippedVariationByContent =
								!!options.flipVariationsByContent &&
								((isVertical && variation === "start" && overflowsRight) ||
									(isVertical && variation === "end" && overflowsLeft) ||
									(!isVertical && variation === "start" && overflowsBottom) ||
									(!isVertical && variation === "end" && overflowsTop));

							var flippedVariation =
								flippedVariationByRef || flippedVariationByContent;

							if (overlapsRef || overflowsBoundaries || flippedVariation) {
								// this boolean to detect any flip loop
								data.flipped = true;

								if (overlapsRef || overflowsBoundaries) {
									placement = flipOrder[index + 1];
								}

								if (flippedVariation) {
									variation = getOppositeVariation(variation);
								}

								data.placement = placement + (variation ? "-" + variation : "");

								// this object contains `position`, we want to preserve it along with
								// any additional property we may add in the future
								data.offsets.popper = _extends(
									{},
									data.offsets.popper,
									getPopperOffsets(
										data.instance.popper,
										data.offsets.reference,
										data.placement
									)
								);

								data = runModifiers(data.instance.modifiers, data, "flip");
							}
						});
						return data;
					}

					/**
					 * @function
					 * @memberof Modifiers
					 * @argument {Object} data - The data object generated by update method
					 * @argument {Object} options - Modifiers configuration and options
					 * @returns {Object} The data object, properly modified
					 */
					function keepTogether(data) {
						var _data$offsets = data.offsets,
							popper = _data$offsets.popper,
							reference = _data$offsets.reference;

						var placement = data.placement.split("-")[0];
						var floor = Math.floor;
						var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
						var side = isVertical ? "right" : "bottom";
						var opSide = isVertical ? "left" : "top";
						var measurement = isVertical ? "width" : "height";

						if (popper[side] < floor(reference[opSide])) {
							data.offsets.popper[opSide] =
								floor(reference[opSide]) - popper[measurement];
						}
						if (popper[opSide] > floor(reference[side])) {
							data.offsets.popper[opSide] = floor(reference[side]);
						}

						return data;
					}

					/**
					 * Converts a string containing value + unit into a px value number
					 * @function
					 * @memberof {modifiers~offset}
					 * @private
					 * @argument {String} str - Value + unit string
					 * @argument {String} measurement - `height` or `width`
					 * @argument {Object} popperOffsets
					 * @argument {Object} referenceOffsets
					 * @returns {Number|String}
					 * Value in pixels, or original string if no values were extracted
					 */
					function toValue(str, measurement, popperOffsets, referenceOffsets) {
						// separate value from unit
						var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
						var value = +split[1];
						var unit = split[2];

						// If it's not a number it's an operator, I guess
						if (!value) {
							return str;
						}

						if (unit.indexOf("%") === 0) {
							var element = void 0;
							switch (unit) {
								case "%p":
									element = popperOffsets;
									break;
								case "%":
								case "%r":
								default:
									element = referenceOffsets;
							}

							var rect = getClientRect(element);
							return (rect[measurement] / 100) * value;
						} else if (unit === "vh" || unit === "vw") {
							// if is a vh or vw, we calculate the size based on the viewport
							var size = void 0;
							if (unit === "vh") {
								size = Math.max(
									document.documentElement.clientHeight,
									window.innerHeight || 0
								);
							} else {
								size = Math.max(
									document.documentElement.clientWidth,
									window.innerWidth || 0
								);
							}
							return (size / 100) * value;
						} else {
							// if is an explicit pixel unit, we get rid of the unit and keep the value
							// if is an implicit unit, it's px, and we return just the value
							return value;
						}
					}

					/**
					 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
					 * @function
					 * @memberof {modifiers~offset}
					 * @private
					 * @argument {String} offset
					 * @argument {Object} popperOffsets
					 * @argument {Object} referenceOffsets
					 * @argument {String} basePlacement
					 * @returns {Array} a two cells array with x and y offsets in numbers
					 */
					function parseOffset(
						offset,
						popperOffsets,
						referenceOffsets,
						basePlacement
					) {
						var offsets = [0, 0];

						// Use height if placement is left or right and index is 0 otherwise use width
						// in this way the first offset will use an axis and the second one
						// will use the other one
						var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;

						// Split the offset string to obtain a list of values and operands
						// The regex addresses values with the plus or minus sign in front (+10, -20, etc)
						var fragments = offset.split(/(\+|\-)/).map(function (frag) {
							return frag.trim();
						});

						// Detect if the offset string contains a pair of values or a single one
						// they could be separated by comma or space
						var divider = fragments.indexOf(
							find(fragments, function (frag) {
								return frag.search(/,|\s/) !== -1;
							})
						);

						if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
							console.warn(
								"Offsets separated by white space(s) are deprecated, use a comma (,) instead."
							);
						}

						// If divider is found, we divide the list of values and operands to divide
						// them by ofset X and Y.
						var splitRegex = /\s*,\s*|\s+/;
						var ops =
							divider !== -1
								? [
										fragments
											.slice(0, divider)
											.concat([fragments[divider].split(splitRegex)[0]]),
										[fragments[divider].split(splitRegex)[1]].concat(
											fragments.slice(divider + 1)
										)
								  ]
								: [fragments];

						// Convert the values with units to absolute pixels to allow our computations
						ops = ops.map(function (op, index) {
							// Most of the units rely on the orientation of the popper
							var measurement = (index === 1 ? !useHeight : useHeight)
								? "height"
								: "width";
							var mergeWithPrevious = false;
							return (
								op
									// This aggregates any `+` or `-` sign that aren't considered operators
									// e.g.: 10 + +5 => [10, +, +5]
									.reduce(function (a, b) {
										if (
											a[a.length - 1] === "" &&
											["+", "-"].indexOf(b) !== -1
										) {
											a[a.length - 1] = b;
											mergeWithPrevious = true;
											return a;
										} else if (mergeWithPrevious) {
											a[a.length - 1] += b;
											mergeWithPrevious = false;
											return a;
										} else {
											return a.concat(b);
										}
									}, [])
									// Here we convert the string values into number values (in px)
									.map(function (str) {
										return toValue(
											str,
											measurement,
											popperOffsets,
											referenceOffsets
										);
									})
							);
						});

						// Loop trough the offsets arrays and execute the operations
						ops.forEach(function (op, index) {
							op.forEach(function (frag, index2) {
								if (isNumeric(frag)) {
									offsets[index] += frag * (op[index2 - 1] === "-" ? -1 : 1);
								}
							});
						});
						return offsets;
					}

					/**
					 * @function
					 * @memberof Modifiers
					 * @argument {Object} data - The data object generated by update method
					 * @argument {Object} options - Modifiers configuration and options
					 * @argument {Number|String} options.offset=0
					 * The offset value as described in the modifier description
					 * @returns {Object} The data object, properly modified
					 */
					function offset(data, _ref) {
						var offset = _ref.offset;
						var placement = data.placement,
							_data$offsets = data.offsets,
							popper = _data$offsets.popper,
							reference = _data$offsets.reference;

						var basePlacement = placement.split("-")[0];

						var offsets = void 0;
						if (isNumeric(+offset)) {
							offsets = [+offset, 0];
						} else {
							offsets = parseOffset(offset, popper, reference, basePlacement);
						}

						if (basePlacement === "left") {
							popper.top += offsets[0];
							popper.left -= offsets[1];
						} else if (basePlacement === "right") {
							popper.top += offsets[0];
							popper.left += offsets[1];
						} else if (basePlacement === "top") {
							popper.left += offsets[0];
							popper.top -= offsets[1];
						} else if (basePlacement === "bottom") {
							popper.left += offsets[0];
							popper.top += offsets[1];
						}

						data.popper = popper;
						return data;
					}

					/**
					 * @function
					 * @memberof Modifiers
					 * @argument {Object} data - The data object generated by `update` method
					 * @argument {Object} options - Modifiers configuration and options
					 * @returns {Object} The data object, properly modified
					 */
					function preventOverflow(data, options) {
						var boundariesElement =
							options.boundariesElement ||
							getOffsetParent(data.instance.popper);

						// If offsetParent is the reference element, we really want to
						// go one step up and use the next offsetParent as reference to
						// avoid to make this modifier completely useless and look like broken
						if (data.instance.reference === boundariesElement) {
							boundariesElement = getOffsetParent(boundariesElement);
						}

						// NOTE: DOM access here
						// resets the popper's position so that the document size can be calculated excluding
						// the size of the popper element itself
						var transformProp = getSupportedPropertyName("transform");
						var popperStyles = data.instance.popper.style; // assignment to help minification
						var top = popperStyles.top,
							left = popperStyles.left,
							transform = popperStyles[transformProp];

						popperStyles.top = "";
						popperStyles.left = "";
						popperStyles[transformProp] = "";

						var boundaries = getBoundaries(
							data.instance.popper,
							data.instance.reference,
							options.padding,
							boundariesElement,
							data.positionFixed
						);

						// NOTE: DOM access here
						// restores the original style properties after the offsets have been computed
						popperStyles.top = top;
						popperStyles.left = left;
						popperStyles[transformProp] = transform;

						options.boundaries = boundaries;

						var order = options.priority;
						var popper = data.offsets.popper;

						var check = {
							primary: function primary(placement) {
								var value = popper[placement];
								if (
									popper[placement] < boundaries[placement] &&
									!options.escapeWithReference
								) {
									value = Math.max(popper[placement], boundaries[placement]);
								}
								return defineProperty({}, placement, value);
							},
							secondary: function secondary(placement) {
								var mainSide = placement === "right" ? "left" : "top";
								var value = popper[mainSide];
								if (
									popper[placement] > boundaries[placement] &&
									!options.escapeWithReference
								) {
									value = Math.min(
										popper[mainSide],
										boundaries[placement] -
											(placement === "right" ? popper.width : popper.height)
									);
								}
								return defineProperty({}, mainSide, value);
							}
						};

						order.forEach(function (placement) {
							var side =
								["left", "top"].indexOf(placement) !== -1
									? "primary"
									: "secondary";
							popper = _extends({}, popper, check[side](placement));
						});

						data.offsets.popper = popper;

						return data;
					}

					/**
					 * @function
					 * @memberof Modifiers
					 * @argument {Object} data - The data object generated by `update` method
					 * @argument {Object} options - Modifiers configuration and options
					 * @returns {Object} The data object, properly modified
					 */
					function shift(data) {
						var placement = data.placement;
						var basePlacement = placement.split("-")[0];
						var shiftvariation = placement.split("-")[1];

						// if shift shiftvariation is specified, run the modifier
						if (shiftvariation) {
							var _data$offsets = data.offsets,
								reference = _data$offsets.reference,
								popper = _data$offsets.popper;

							var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
							var side = isVertical ? "left" : "top";
							var measurement = isVertical ? "width" : "height";

							var shiftOffsets = {
								start: defineProperty({}, side, reference[side]),
								end: defineProperty(
									{},
									side,
									reference[side] + reference[measurement] - popper[measurement]
								)
							};

							data.offsets.popper = _extends(
								{},
								popper,
								shiftOffsets[shiftvariation]
							);
						}

						return data;
					}

					/**
					 * @function
					 * @memberof Modifiers
					 * @argument {Object} data - The data object generated by update method
					 * @argument {Object} options - Modifiers configuration and options
					 * @returns {Object} The data object, properly modified
					 */
					function hide(data) {
						if (
							!isModifierRequired(
								data.instance.modifiers,
								"hide",
								"preventOverflow"
							)
						) {
							return data;
						}

						var refRect = data.offsets.reference;
						var bound = find(data.instance.modifiers, function (modifier) {
							return modifier.name === "preventOverflow";
						}).boundaries;

						if (
							refRect.bottom < bound.top ||
							refRect.left > bound.right ||
							refRect.top > bound.bottom ||
							refRect.right < bound.left
						) {
							// Avoid unnecessary DOM access if visibility hasn't changed
							if (data.hide === true) {
								return data;
							}

							data.hide = true;
							data.attributes["x-out-of-boundaries"] = "";
						} else {
							// Avoid unnecessary DOM access if visibility hasn't changed
							if (data.hide === false) {
								return data;
							}

							data.hide = false;
							data.attributes["x-out-of-boundaries"] = false;
						}

						return data;
					}

					/**
					 * @function
					 * @memberof Modifiers
					 * @argument {Object} data - The data object generated by `update` method
					 * @argument {Object} options - Modifiers configuration and options
					 * @returns {Object} The data object, properly modified
					 */
					function inner(data) {
						var placement = data.placement;
						var basePlacement = placement.split("-")[0];
						var _data$offsets = data.offsets,
							popper = _data$offsets.popper,
							reference = _data$offsets.reference;

						var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;

						var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;

						popper[isHoriz ? "left" : "top"] =
							reference[basePlacement] -
							(subtractLength ? popper[isHoriz ? "width" : "height"] : 0);

						data.placement = getOppositePlacement(placement);
						data.offsets.popper = getClientRect(popper);

						return data;
					}

					/**
					 * Modifier function, each modifier can have a function of this type assigned
					 * to its `fn` property.<br />
					 * These functions will be called on each update, this means that you must
					 * make sure they are performant enough to avoid performance bottlenecks.
					 *
					 * @function ModifierFn
					 * @argument {dataObject} data - The data object generated by `update` method
					 * @argument {Object} options - Modifiers configuration and options
					 * @returns {dataObject} The data object, properly modified
					 */

					/**
					 * Modifiers are plugins used to alter the behavior of your poppers.<br />
					 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
					 * needed by the library.
					 *
					 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
					 * All the other properties are configurations that could be tweaked.
					 * @namespace modifiers
					 */
					var modifiers = {
						/**
						 * Modifier used to shift the popper on the start or end of its reference
						 * element.<br />
						 * It will read the variation of the `placement` property.<br />
						 * It can be one either `-end` or `-start`.
						 * @memberof modifiers
						 * @inner
						 */
						shift: {
							/** @prop {number} order=100 - Index used to define the order of execution */
							order: 100,
							/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
							enabled: true,
							/** @prop {ModifierFn} */
							fn: shift
						},

						/**
						 * The `offset` modifier can shift your popper on both its axis.
						 *
						 * It accepts the following units:
						 * - `px` or unit-less, interpreted as pixels
						 * - `%` or `%r`, percentage relative to the length of the reference element
						 * - `%p`, percentage relative to the length of the popper element
						 * - `vw`, CSS viewport width unit
						 * - `vh`, CSS viewport height unit
						 *
						 * For length is intended the main axis relative to the placement of the popper.<br />
						 * This means that if the placement is `top` or `bottom`, the length will be the
						 * `width`. In case of `left` or `right`, it will be the `height`.
						 *
						 * You can provide a single value (as `Number` or `String`), or a pair of values
						 * as `String` divided by a comma or one (or more) white spaces.<br />
						 * The latter is a deprecated method because it leads to confusion and will be
						 * removed in v2.<br />
						 * Additionally, it accepts additions and subtractions between different units.
						 * Note that multiplications and divisions aren't supported.
						 *
						 * Valid examples are:
						 * ```
						 * 10
						 * '10%'
						 * '10, 10'
						 * '10%, 10'
						 * '10 + 10%'
						 * '10 - 5vh + 3%'
						 * '-10px + 5vh, 5px - 6%'
						 * ```
						 * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
						 * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
						 * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
						 *
						 * @memberof modifiers
						 * @inner
						 */
						offset: {
							/** @prop {number} order=200 - Index used to define the order of execution */
							order: 200,
							/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
							enabled: true,
							/** @prop {ModifierFn} */
							fn: offset,
							/** @prop {Number|String} offset=0
							 * The offset value as described in the modifier description
							 */
							offset: 0
						},

						/**
						 * Modifier used to prevent the popper from being positioned outside the boundary.
						 *
						 * A scenario exists where the reference itself is not within the boundaries.<br />
						 * We can say it has "escaped the boundaries" — or just "escaped".<br />
						 * In this case we need to decide whether the popper should either:
						 *
						 * - detach from the reference and remain "trapped" in the boundaries, or
						 * - if it should ignore the boundary and "escape with its reference"
						 *
						 * When `escapeWithReference` is set to`true` and reference is completely
						 * outside its boundaries, the popper will overflow (or completely leave)
						 * the boundaries in order to remain attached to the edge of the reference.
						 *
						 * @memberof modifiers
						 * @inner
						 */
						preventOverflow: {
							/** @prop {number} order=300 - Index used to define the order of execution */
							order: 300,
							/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
							enabled: true,
							/** @prop {ModifierFn} */
							fn: preventOverflow,
							/**
							 * @prop {Array} [priority=['left','right','top','bottom']]
							 * Popper will try to prevent overflow following these priorities by default,
							 * then, it could overflow on the left and on top of the `boundariesElement`
							 */
							priority: ["left", "right", "top", "bottom"],
							/**
							 * @prop {number} padding=5
							 * Amount of pixel used to define a minimum distance between the boundaries
							 * and the popper. This makes sure the popper always has a little padding
							 * between the edges of its container
							 */
							padding: 5,
							/**
							 * @prop {String|HTMLElement} boundariesElement='scrollParent'
							 * Boundaries used by the modifier. Can be `scrollParent`, `window`,
							 * `viewport` or any DOM element.
							 */
							boundariesElement: "scrollParent"
						},

						/**
						 * Modifier used to make sure the reference and its popper stay near each other
						 * without leaving any gap between the two. Especially useful when the arrow is
						 * enabled and you want to ensure that it points to its reference element.
						 * It cares only about the first axis. You can still have poppers with margin
						 * between the popper and its reference element.
						 * @memberof modifiers
						 * @inner
						 */
						keepTogether: {
							/** @prop {number} order=400 - Index used to define the order of execution */
							order: 400,
							/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
							enabled: true,
							/** @prop {ModifierFn} */
							fn: keepTogether
						},

						/**
						 * This modifier is used to move the `arrowElement` of the popper to make
						 * sure it is positioned between the reference element and its popper element.
						 * It will read the outer size of the `arrowElement` node to detect how many
						 * pixels of conjunction are needed.
						 *
						 * It has no effect if no `arrowElement` is provided.
						 * @memberof modifiers
						 * @inner
						 */
						arrow: {
							/** @prop {number} order=500 - Index used to define the order of execution */
							order: 500,
							/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
							enabled: true,
							/** @prop {ModifierFn} */
							fn: arrow,
							/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
							element: "[x-arrow]"
						},

						/**
						 * Modifier used to flip the popper's placement when it starts to overlap its
						 * reference element.
						 *
						 * Requires the `preventOverflow` modifier before it in order to work.
						 *
						 * **NOTE:** this modifier will interrupt the current update cycle and will
						 * restart it if it detects the need to flip the placement.
						 * @memberof modifiers
						 * @inner
						 */
						flip: {
							/** @prop {number} order=600 - Index used to define the order of execution */
							order: 600,
							/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
							enabled: true,
							/** @prop {ModifierFn} */
							fn: flip,
							/**
							 * @prop {String|Array} behavior='flip'
							 * The behavior used to change the popper's placement. It can be one of
							 * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
							 * placements (with optional variations)
							 */
							behavior: "flip",
							/**
							 * @prop {number} padding=5
							 * The popper will flip if it hits the edges of the `boundariesElement`
							 */
							padding: 5,
							/**
							 * @prop {String|HTMLElement} boundariesElement='viewport'
							 * The element which will define the boundaries of the popper position.
							 * The popper will never be placed outside of the defined boundaries
							 * (except if `keepTogether` is enabled)
							 */
							boundariesElement: "viewport",
							/**
							 * @prop {Boolean} flipVariations=false
							 * The popper will switch placement variation between `-start` and `-end` when
							 * the reference element overlaps its boundaries.
							 *
							 * The original placement should have a set variation.
							 */
							flipVariations: false,
							/**
							 * @prop {Boolean} flipVariationsByContent=false
							 * The popper will switch placement variation between `-start` and `-end` when
							 * the popper element overlaps its reference boundaries.
							 *
							 * The original placement should have a set variation.
							 */
							flipVariationsByContent: false
						},

						/**
						 * Modifier used to make the popper flow toward the inner of the reference element.
						 * By default, when this modifier is disabled, the popper will be placed outside
						 * the reference element.
						 * @memberof modifiers
						 * @inner
						 */
						inner: {
							/** @prop {number} order=700 - Index used to define the order of execution */
							order: 700,
							/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
							enabled: false,
							/** @prop {ModifierFn} */
							fn: inner
						},

						/**
						 * Modifier used to hide the popper when its reference element is outside of the
						 * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
						 * be used to hide with a CSS selector the popper when its reference is
						 * out of boundaries.
						 *
						 * Requires the `preventOverflow` modifier before it in order to work.
						 * @memberof modifiers
						 * @inner
						 */
						hide: {
							/** @prop {number} order=800 - Index used to define the order of execution */
							order: 800,
							/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
							enabled: true,
							/** @prop {ModifierFn} */
							fn: hide
						},

						/**
						 * Computes the style that will be applied to the popper element to gets
						 * properly positioned.
						 *
						 * Note that this modifier will not touch the DOM, it just prepares the styles
						 * so that `applyStyle` modifier can apply it. This separation is useful
						 * in case you need to replace `applyStyle` with a custom implementation.
						 *
						 * This modifier has `850` as `order` value to maintain backward compatibility
						 * with previous versions of Popper.js. Expect the modifiers ordering method
						 * to change in future major versions of the library.
						 *
						 * @memberof modifiers
						 * @inner
						 */
						computeStyle: {
							/** @prop {number} order=850 - Index used to define the order of execution */
							order: 850,
							/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
							enabled: true,
							/** @prop {ModifierFn} */
							fn: computeStyle,
							/**
							 * @prop {Boolean} gpuAcceleration=true
							 * If true, it uses the CSS 3D transformation to position the popper.
							 * Otherwise, it will use the `top` and `left` properties
							 */
							gpuAcceleration: true,
							/**
							 * @prop {string} [x='bottom']
							 * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
							 * Change this if your popper should grow in a direction different from `bottom`
							 */
							x: "bottom",
							/**
							 * @prop {string} [x='left']
							 * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
							 * Change this if your popper should grow in a direction different from `right`
							 */
							y: "right"
						},

						/**
						 * Applies the computed styles to the popper element.
						 *
						 * All the DOM manipulations are limited to this modifier. This is useful in case
						 * you want to integrate Popper.js inside a framework or view library and you
						 * want to delegate all the DOM manipulations to it.
						 *
						 * Note that if you disable this modifier, you must make sure the popper element
						 * has its position set to `absolute` before Popper.js can do its work!
						 *
						 * Just disable this modifier and define your own to achieve the desired effect.
						 *
						 * @memberof modifiers
						 * @inner
						 */
						applyStyle: {
							/** @prop {number} order=900 - Index used to define the order of execution */
							order: 900,
							/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
							enabled: true,
							/** @prop {ModifierFn} */
							fn: applyStyle,
							/** @prop {Function} */
							onLoad: applyStyleOnLoad,
							/**
							 * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
							 * @prop {Boolean} gpuAcceleration=true
							 * If true, it uses the CSS 3D transformation to position the popper.
							 * Otherwise, it will use the `top` and `left` properties
							 */
							gpuAcceleration: undefined
						}
					};

					/**
					 * The `dataObject` is an object containing all the information used by Popper.js.
					 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
					 * @name dataObject
					 * @property {Object} data.instance The Popper.js instance
					 * @property {String} data.placement Placement applied to popper
					 * @property {String} data.originalPlacement Placement originally defined on init
					 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
					 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
					 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
					 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
					 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
					 * @property {Object} data.boundaries Offsets of the popper boundaries
					 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
					 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
					 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
					 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
					 */

					/**
					 * Default options provided to Popper.js constructor.<br />
					 * These can be overridden using the `options` argument of Popper.js.<br />
					 * To override an option, simply pass an object with the same
					 * structure of the `options` object, as the 3rd argument. For example:
					 * ```
					 * new Popper(ref, pop, {
					 *   modifiers: {
					 *     preventOverflow: { enabled: false }
					 *   }
					 * })
					 * ```
					 * @type {Object}
					 * @static
					 * @memberof Popper
					 */
					var Defaults = {
						/**
						 * Popper's placement.
						 * @prop {Popper.placements} placement='bottom'
						 */
						placement: "bottom",

						/**
						 * Set this to true if you want popper to position it self in 'fixed' mode
						 * @prop {Boolean} positionFixed=false
						 */
						positionFixed: false,

						/**
						 * Whether events (resize, scroll) are initially enabled.
						 * @prop {Boolean} eventsEnabled=true
						 */
						eventsEnabled: true,

						/**
						 * Set to true if you want to automatically remove the popper when
						 * you call the `destroy` method.
						 * @prop {Boolean} removeOnDestroy=false
						 */
						removeOnDestroy: false,

						/**
						 * Callback called when the popper is created.<br />
						 * By default, it is set to no-op.<br />
						 * Access Popper.js instance with `data.instance`.
						 * @prop {onCreate}
						 */
						onCreate: function onCreate() {},

						/**
						 * Callback called when the popper is updated. This callback is not called
						 * on the initialization/creation of the popper, but only on subsequent
						 * updates.<br />
						 * By default, it is set to no-op.<br />
						 * Access Popper.js instance with `data.instance`.
						 * @prop {onUpdate}
						 */
						onUpdate: function onUpdate() {},

						/**
						 * List of modifiers used to modify the offsets before they are applied to the popper.
						 * They provide most of the functionalities of Popper.js.
						 * @prop {modifiers}
						 */
						modifiers: modifiers
					};

					/**
					 * @callback onCreate
					 * @param {dataObject} data
					 */

					/**
					 * @callback onUpdate
					 * @param {dataObject} data
					 */

					// Utils
					// Methods
					var Popper = (function () {
						/**
						 * Creates a new Popper.js instance.
						 * @class Popper
						 * @param {Element|referenceObject} reference - The reference element used to position the popper
						 * @param {Element} popper - The HTML / XML element used as the popper
						 * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
						 * @return {Object} instance - The generated Popper.js instance
						 */
						function Popper(reference, popper) {
							var _this = this;

							var options =
								arguments.length > 2 && arguments[2] !== undefined
									? arguments[2]
									: {};
							classCallCheck(this, Popper);

							this.scheduleUpdate = function () {
								return requestAnimationFrame(_this.update);
							};

							// make update() debounced, so that it only runs at most once-per-tick
							this.update = debounce(this.update.bind(this));

							// with {} we create a new object with the options inside it
							this.options = _extends({}, Popper.Defaults, options);

							// init state
							this.state = {
								isDestroyed: false,
								isCreated: false,
								scrollParents: []
							};

							// get reference and popper elements (allow jQuery wrappers)
							this.reference =
								reference && reference.jquery ? reference[0] : reference;
							this.popper = popper && popper.jquery ? popper[0] : popper;

							// Deep merge modifiers options
							this.options.modifiers = {};
							Object.keys(
								_extends({}, Popper.Defaults.modifiers, options.modifiers)
							).forEach(function (name) {
								_this.options.modifiers[name] = _extends(
									{},
									Popper.Defaults.modifiers[name] || {},
									options.modifiers ? options.modifiers[name] : {}
								);
							});

							// Refactoring modifiers' list (Object => Array)
							this.modifiers = Object.keys(this.options.modifiers)
								.map(function (name) {
									return _extends(
										{
											name: name
										},
										_this.options.modifiers[name]
									);
								})
								// sort the modifiers by order
								.sort(function (a, b) {
									return a.order - b.order;
								});

							// modifiers have the ability to execute arbitrary code when Popper.js get inited
							// such code is executed in the same order of its modifier
							// they could add new properties to their options configuration
							// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
							this.modifiers.forEach(function (modifierOptions) {
								if (
									modifierOptions.enabled &&
									isFunction(modifierOptions.onLoad)
								) {
									modifierOptions.onLoad(
										_this.reference,
										_this.popper,
										_this.options,
										modifierOptions,
										_this.state
									);
								}
							});

							// fire the first update to position the popper in the right place
							this.update();

							var eventsEnabled = this.options.eventsEnabled;
							if (eventsEnabled) {
								// setup event listeners, they will take care of update the position in specific situations
								this.enableEventListeners();
							}

							this.state.eventsEnabled = eventsEnabled;
						}

						// We can't use class properties because they don't get listed in the
						// class prototype and break stuff like Sinon stubs

						createClass(Popper, [
							{
								key: "update",
								value: function update$$1() {
									return update.call(this);
								}
							},
							{
								key: "destroy",
								value: function destroy$$1() {
									return destroy.call(this);
								}
							},
							{
								key: "enableEventListeners",
								value: function enableEventListeners$$1() {
									return enableEventListeners.call(this);
								}
							},
							{
								key: "disableEventListeners",
								value: function disableEventListeners$$1() {
									return disableEventListeners.call(this);
								}

								/**
								 * Schedules an update. It will run on the next UI update available.
								 * @method scheduleUpdate
								 * @memberof Popper
								 */

								/**
								 * Collection of utilities useful when writing custom modifiers.
								 * Starting from version 1.7, this method is available only if you
								 * include `popper-utils.js` before `popper.js`.
								 *
								 * **DEPRECATION**: This way to access PopperUtils is deprecated
								 * and will be removed in v2! Use the PopperUtils module directly instead.
								 * Due to the high instability of the methods contained in Utils, we can't
								 * guarantee them to follow semver. Use them at your own risk!
								 * @static
								 * @private
								 * @type {Object}
								 * @deprecated since version 1.8
								 * @member Utils
								 * @memberof Popper
								 */
							}
						]);
						return Popper;
					})();

					/**
					 * The `referenceObject` is an object that provides an interface compatible with Popper.js
					 * and lets you use it as replacement of a real DOM node.<br />
					 * You can use this method to position a popper relatively to a set of coordinates
					 * in case you don't have a DOM node to use as reference.
					 *
					 * ```
					 * new Popper(referenceObject, popperNode);
					 * ```
					 *
					 * NB: This feature isn't supported in Internet Explorer 10.
					 * @name referenceObject
					 * @property {Function} data.getBoundingClientRect
					 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
					 * @property {number} data.clientWidth
					 * An ES6 getter that will return the width of the virtual reference element.
					 * @property {number} data.clientHeight
					 * An ES6 getter that will return the height of the virtual reference element.
					 */

					Popper.Utils = (typeof window !== "undefined"
						? window
						: global
					).PopperUtils;
					Popper.placements = placements;
					Popper.Defaults = Defaults;

					/* harmony default export */ __webpack_exports__["default"] = Popper;
					//# sourceMappingURL=popper.js.map

					/* WEBPACK VAR INJECTION */
				}.call(
					this,
					__webpack_require__(
						/*! ./../../../next/node_modules/webpack/buildin/global.js */ "../../node_modules/next/node_modules/webpack/buildin/global.js"
					)
				));

				/***/
			},

		/***/ "../../node_modules/process/browser.js":
			/*!*********************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/process/browser.js ***!
  \*********************************************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				// shim for using process in browser
				var process = (module.exports = {});

				// cached from whatever global is present so that test runners that stub it
				// don't break things.  But we need to wrap it in a try catch in case it is
				// wrapped in strict mode code which doesn't define any globals.  It's inside a
				// function because try/catches deoptimize in certain engines.

				var cachedSetTimeout;
				var cachedClearTimeout;

				function defaultSetTimout() {
					throw new Error("setTimeout has not been defined");
				}
				function defaultClearTimeout() {
					throw new Error("clearTimeout has not been defined");
				}
				(function () {
					try {
						if (typeof setTimeout === "function") {
							cachedSetTimeout = setTimeout;
						} else {
							cachedSetTimeout = defaultSetTimout;
						}
					} catch (e) {
						cachedSetTimeout = defaultSetTimout;
					}
					try {
						if (typeof clearTimeout === "function") {
							cachedClearTimeout = clearTimeout;
						} else {
							cachedClearTimeout = defaultClearTimeout;
						}
					} catch (e) {
						cachedClearTimeout = defaultClearTimeout;
					}
				})();
				function runTimeout(fun) {
					if (cachedSetTimeout === setTimeout) {
						//normal enviroments in sane situations
						return setTimeout(fun, 0);
					}
					// if setTimeout wasn't available but was latter defined
					if (
						(cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
						setTimeout
					) {
						cachedSetTimeout = setTimeout;
						return setTimeout(fun, 0);
					}
					try {
						// when when somebody has screwed with setTimeout but no I.E. maddness
						return cachedSetTimeout(fun, 0);
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
							return cachedSetTimeout.call(null, fun, 0);
						} catch (e) {
							// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
							return cachedSetTimeout.call(this, fun, 0);
						}
					}
				}
				function runClearTimeout(marker) {
					if (cachedClearTimeout === clearTimeout) {
						//normal enviroments in sane situations
						return clearTimeout(marker);
					}
					// if clearTimeout wasn't available but was latter defined
					if (
						(cachedClearTimeout === defaultClearTimeout ||
							!cachedClearTimeout) &&
						clearTimeout
					) {
						cachedClearTimeout = clearTimeout;
						return clearTimeout(marker);
					}
					try {
						// when when somebody has screwed with setTimeout but no I.E. maddness
						return cachedClearTimeout(marker);
					} catch (e) {
						try {
							// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
							return cachedClearTimeout.call(null, marker);
						} catch (e) {
							// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
							// Some versions of I.E. have different rules for clearTimeout vs setTimeout
							return cachedClearTimeout.call(this, marker);
						}
					}
				}
				var queue = [];
				var draining = false;
				var currentQueue;
				var queueIndex = -1;

				function cleanUpNextTick() {
					if (!draining || !currentQueue) {
						return;
					}
					draining = false;
					if (currentQueue.length) {
						queue = currentQueue.concat(queue);
					} else {
						queueIndex = -1;
					}
					if (queue.length) {
						drainQueue();
					}
				}

				function drainQueue() {
					if (draining) {
						return;
					}
					var timeout = runTimeout(cleanUpNextTick);
					draining = true;

					var len = queue.length;
					while (len) {
						currentQueue = queue;
						queue = [];
						while (++queueIndex < len) {
							if (currentQueue) {
								currentQueue[queueIndex].run();
							}
						}
						queueIndex = -1;
						len = queue.length;
					}
					currentQueue = null;
					draining = false;
					runClearTimeout(timeout);
				}

				process.nextTick = function (fun) {
					var args = new Array(arguments.length - 1);
					if (arguments.length > 1) {
						for (var i = 1; i < arguments.length; i++) {
							args[i - 1] = arguments[i];
						}
					}
					queue.push(new Item(fun, args));
					if (queue.length === 1 && !draining) {
						runTimeout(drainQueue);
					}
				};

				// v8 likes predictible objects
				function Item(fun, array) {
					this.fun = fun;
					this.array = array;
				}
				Item.prototype.run = function () {
					this.fun.apply(null, this.array);
				};
				process.title = "browser";
				process.browser = true;
				process.env = {};
				process.argv = [];
				process.version = ""; // empty string to avoid regexp issues
				process.versions = {};

				function noop() {}

				process.on = noop;
				process.addListener = noop;
				process.once = noop;
				process.off = noop;
				process.removeListener = noop;
				process.removeAllListeners = noop;
				process.emit = noop;
				process.prependListener = noop;
				process.prependOnceListener = noop;

				process.listeners = function (name) {
					return [];
				};

				process.binding = function (name) {
					throw new Error("process.binding is not supported");
				};

				process.cwd = function () {
					return "/";
				};
				process.chdir = function (dir) {
					throw new Error("process.chdir is not supported");
				};
				process.umask = function () {
					return 0;
				};

				/***/
			},

		/***/ "../../node_modules/querystring-es3/decode.js":
			/*!****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/querystring-es3/decode.js ***!
  \****************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				// Copyright Joyent, Inc. and other Node contributors.
				//
				// Permission is hereby granted, free of charge, to any person obtaining a
				// copy of this software and associated documentation files (the
				// "Software"), to deal in the Software without restriction, including
				// without limitation the rights to use, copy, modify, merge, publish,
				// distribute, sublicense, and/or sell copies of the Software, and to permit
				// persons to whom the Software is furnished to do so, subject to the
				// following conditions:
				//
				// The above copyright notice and this permission notice shall be included
				// in all copies or substantial portions of the Software.
				//
				// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
				// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
				// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
				// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
				// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
				// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
				// USE OR OTHER DEALINGS IN THE SOFTWARE.

				// If obj.hasOwnProperty has been overridden, then calling
				// obj.hasOwnProperty(prop) will break.
				// See: https://github.com/joyent/node/issues/1707
				function hasOwnProperty(obj, prop) {
					return Object.prototype.hasOwnProperty.call(obj, prop);
				}

				module.exports = function (qs, sep, eq, options) {
					sep = sep || "&";
					eq = eq || "=";
					var obj = {};

					if (typeof qs !== "string" || qs.length === 0) {
						return obj;
					}

					var regexp = /\+/g;
					qs = qs.split(sep);

					var maxKeys = 1000;
					if (options && typeof options.maxKeys === "number") {
						maxKeys = options.maxKeys;
					}

					var len = qs.length;
					// maxKeys <= 0 means that we should not limit keys count
					if (maxKeys > 0 && len > maxKeys) {
						len = maxKeys;
					}

					for (var i = 0; i < len; ++i) {
						var x = qs[i].replace(regexp, "%20"),
							idx = x.indexOf(eq),
							kstr,
							vstr,
							k,
							v;

						if (idx >= 0) {
							kstr = x.substr(0, idx);
							vstr = x.substr(idx + 1);
						} else {
							kstr = x;
							vstr = "";
						}

						k = decodeURIComponent(kstr);
						v = decodeURIComponent(vstr);

						if (!hasOwnProperty(obj, k)) {
							obj[k] = v;
						} else if (isArray(obj[k])) {
							obj[k].push(v);
						} else {
							obj[k] = [obj[k], v];
						}
					}

					return obj;
				};

				var isArray =
					Array.isArray ||
					function (xs) {
						return Object.prototype.toString.call(xs) === "[object Array]";
					};

				/***/
			},

		/***/ "../../node_modules/querystring-es3/encode.js":
			/*!****************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/querystring-es3/encode.js ***!
  \****************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				// Copyright Joyent, Inc. and other Node contributors.
				//
				// Permission is hereby granted, free of charge, to any person obtaining a
				// copy of this software and associated documentation files (the
				// "Software"), to deal in the Software without restriction, including
				// without limitation the rights to use, copy, modify, merge, publish,
				// distribute, sublicense, and/or sell copies of the Software, and to permit
				// persons to whom the Software is furnished to do so, subject to the
				// following conditions:
				//
				// The above copyright notice and this permission notice shall be included
				// in all copies or substantial portions of the Software.
				//
				// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
				// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
				// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
				// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
				// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
				// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
				// USE OR OTHER DEALINGS IN THE SOFTWARE.

				var stringifyPrimitive = function (v) {
					switch (typeof v) {
						case "string":
							return v;

						case "boolean":
							return v ? "true" : "false";

						case "number":
							return isFinite(v) ? v : "";

						default:
							return "";
					}
				};

				module.exports = function (obj, sep, eq, name) {
					sep = sep || "&";
					eq = eq || "=";
					if (obj === null) {
						obj = undefined;
					}

					if (typeof obj === "object") {
						return map(objectKeys(obj), function (k) {
							var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
							if (isArray(obj[k])) {
								return map(obj[k], function (v) {
									return ks + encodeURIComponent(stringifyPrimitive(v));
								}).join(sep);
							} else {
								return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
							}
						}).join(sep);
					}

					if (!name) return "";
					return (
						encodeURIComponent(stringifyPrimitive(name)) +
						eq +
						encodeURIComponent(stringifyPrimitive(obj))
					);
				};

				var isArray =
					Array.isArray ||
					function (xs) {
						return Object.prototype.toString.call(xs) === "[object Array]";
					};

				function map(xs, f) {
					if (xs.map) return xs.map(f);
					var res = [];
					for (var i = 0; i < xs.length; i++) {
						res.push(f(xs[i], i));
					}
					return res;
				}

				var objectKeys =
					Object.keys ||
					function (obj) {
						var res = [];
						for (var key in obj) {
							if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
						}
						return res;
					};

				/***/
			},

		/***/ "../../node_modules/querystring-es3/index.js":
			/*!***************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/querystring-es3/index.js ***!
  \***************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				exports.decode = exports.parse = __webpack_require__(
					/*! ./decode */ "../../node_modules/querystring-es3/decode.js"
				);
				exports.encode = exports.stringify = __webpack_require__(
					/*! ./encode */ "../../node_modules/querystring-es3/encode.js"
				);

				/***/
			},

		/***/ "../../node_modules/react-dom/index.js":
			/*!***************************************************************************************************!*\
  !*** delegated ../../node_modules/react-dom/index.js from dll-reference dll_2792696c4305f10043ec ***!
  \***************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				module.exports = __webpack_require__(
					/*! dll-reference dll_2792696c4305f10043ec */ "dll-reference dll_2792696c4305f10043ec"
				)("../../node_modules/react-dom/index.js");

				/***/
			},

		/***/ "../../node_modules/react-fastclick/src/index.js":
			/*!*******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/react-fastclick/src/index.js ***!
  \*******************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				(function () {
					var getReactFCInitializer = function (React) {
						return function initializeReactFastclick() {
							var originalCreateElement = React.createElement;

							// Moved if Math.abs(downX - upX) > MOVE_THRESHOLD;
							var MOVE_THRESHOLD = 8;
							var TOUCH_DELAY = 1000;

							var touchKeysToStore = [
								"clientX",
								"clientY",
								"pageX",
								"pageY",
								"screenX",
								"screenY",
								"radiusX",
								"radiusY"
							];

							var touchEvents = {
								downPos: {},
								lastPos: {}
							};

							var isDisabled = function (element) {
								if (!element) {
									return false;
								}
								var disabled = element.getAttribute("disabled");

								return disabled !== false && disabled !== null;
							};

							var focus = function (event, target) {
								var myTarget = target || event.currentTarget;

								if (!myTarget || isDisabled(myTarget)) {
									return;
								}

								myTarget.focus();
							};

							var handleType = {
								input: function (event) {
									focus(event);
									event.stopPropagation();
								},
								textarea: function (event) {
									focus(event);
									event.stopPropagation();
								},
								select: function (event) {
									focus(event);
									event.stopPropagation();
								},
								label: function (event) {
									var input;

									var forTarget = event.currentTarget.getAttribute("for");

									if (forTarget) {
										input = document.getElementById(forTarget);
									} else {
										input = event.currentTarget.querySelectorAll(
											"input, textarea, select"
										)[0];
									}

									if (input) {
										focus(event, input);
									}
								}
							};

							var fakeClickEvent = function (event) {
								if (typeof event.persist === "function") {
									event.persist();
								}

								event.fastclick = true;
								event.type = "click";
								event.button = 0;
							};

							var copyTouchKeys = function (touch, target) {
								if (typeof target.persist === "function") {
									target.persist();
								}

								if (touch) {
									for (var i = 0; i < touchKeysToStore.length; i += 1) {
										var key = touchKeysToStore[i];
										target[key] = touch[key];
									}
								}
							};

							var noTouchHappened = function () {
								return (
									!touchEvents.touched &&
									(!touchEvents.lastTouchDate ||
										new Date().getTime() >
											touchEvents.lastTouchDate + TOUCH_DELAY)
								);
							};

							var invalidateIfMoreThanOneTouch = function (event) {
								touchEvents.invalid =
									(event.touches && event.touches.length > 1) ||
									touchEvents.invalid;
							};

							var onMouseEvent = function (callback, event) {
								var touched = !noTouchHappened();

								// Prevent mouse events on other elements
								if (touched && event.target !== touchEvents.target) {
									event.preventDefault();
								}

								// Prevent any mouse events if we touched recently
								if (typeof callback === "function" && !touched) {
									callback(event);
								}

								if (event.type === "click") {
									touchEvents.invalid = false;
									touchEvents.touched = false;
									touchEvents.moved = false;
								}
							};

							var onTouchStart = function (callback, event) {
								touchEvents.invalid = false;
								touchEvents.moved = false;
								touchEvents.touched = true;
								touchEvents.target = event.target;
								touchEvents.lastTouchDate = new Date().getTime();

								copyTouchKeys(event.touches[0], touchEvents.downPos);
								copyTouchKeys(event.touches[0], touchEvents.lastPos);

								invalidateIfMoreThanOneTouch(event);

								if (typeof callback === "function") {
									callback(event);
								}
							};

							var onTouchMove = function (callback, event) {
								touchEvents.touched = true;
								touchEvents.lastTouchDate = new Date().getTime();

								copyTouchKeys(event.touches[0], touchEvents.lastPos);

								invalidateIfMoreThanOneTouch(event);

								if (
									Math.abs(
										touchEvents.downPos.clientX - touchEvents.lastPos.clientX
									) > MOVE_THRESHOLD ||
									Math.abs(
										touchEvents.downPos.clientY - touchEvents.lastPos.clientY
									) > MOVE_THRESHOLD
								) {
									touchEvents.moved = true;
								}

								if (typeof callback === "function") {
									callback(event);
								}
							};

							var onTouchEnd = function (callback, onClick, type, event) {
								touchEvents.touched = true;
								touchEvents.lastTouchDate = new Date().getTime();

								invalidateIfMoreThanOneTouch(event);

								if (typeof callback === "function") {
									callback(event);
								}

								if (!touchEvents.invalid && !touchEvents.moved) {
									var box = event.currentTarget.getBoundingClientRect();

									if (
										touchEvents.lastPos.clientX -
											(touchEvents.lastPos.radiusX || 0) <=
											box.right &&
										touchEvents.lastPos.clientX +
											(touchEvents.lastPos.radiusX || 0) >=
											box.left &&
										touchEvents.lastPos.clientY -
											(touchEvents.lastPos.radiusY || 0) <=
											box.bottom &&
										touchEvents.lastPos.clientY +
											(touchEvents.lastPos.radiusY || 0) >=
											box.top
									) {
										if (!isDisabled(event.currentTarget)) {
											if (typeof onClick === "function") {
												copyTouchKeys(touchEvents.lastPos, event);
												fakeClickEvent(event);
												onClick(event);
											}

											if (!event.defaultPrevented && handleType[type]) {
												handleType[type](event);
											}
										}
									}
								}
							};

							var propsWithFastclickEvents = function (type, props) {
								var newProps = {};

								// Loop over props
								for (var key in props) {
									// Copy props to newProps
									newProps[key] = props[key];
								}

								// Apply our wrapped mouse and touch handlers
								newProps.onClick = onMouseEvent.bind(null, props.onClick);
								newProps.onMouseDown = onMouseEvent.bind(
									null,
									props.onMouseDown
								);
								newProps.onMouseMove = onMouseEvent.bind(
									null,
									props.onMouseMove
								);
								newProps.onMouseUp = onMouseEvent.bind(null, props.onMouseUp);
								newProps.onTouchStart = onTouchStart.bind(
									null,
									props.onTouchStart
								);
								newProps.onTouchMove = onTouchMove.bind(
									null,
									props.onTouchMove
								);
								newProps.onTouchEnd = onTouchEnd.bind(
									null,
									props.onTouchEnd,
									props.onClick,
									type
								);

								if (typeof Object.freeze === "function") {
									Object.freeze(newProps);
								}

								return newProps;
							};

							React.createElement = function () {
								// Convert arguments to array
								var args = Array.prototype.slice.call(arguments);

								var type = args[0];
								var props = args[1];

								// Check if basic element & has onClick prop
								if (
									type &&
									typeof type === "string" &&
									((props && typeof props.onClick === "function") ||
										handleType[type])
								) {
									// Add our own events to props
									args[1] = propsWithFastclickEvents(type, props || {});
								}

								// Apply args to original createElement function
								return originalCreateElement.apply(null, args);
							};

							if (typeof React.DOM === "object") {
								for (var key in React.DOM) {
									React.DOM[key] = React.createElement.bind(null, key);
								}
							}
						};
					};

					/* istanbul ignore next */
					// Export for commonjs / browserify
					if (true) {
						var React = __webpack_require__(
							/*! react */ "../../node_modules/react/index.js"
						);
						module.exports = getReactFCInitializer(React);
						// Export for amd / require
					} else {
						var root;
					}
				})();

				/***/
			},

		/***/ "../../node_modules/react-is/cjs/react-is.development.js":
			/*!***************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/react-is/cjs/react-is.development.js ***!
  \***************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";
				/** @license React v16.13.1
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
							: 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
						// (unstable) APIs that have been removed. Can we remove the symbols?

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
						var REACT_SUSPENSE_LIST_TYPE = hasSymbol
							? Symbol.for("react.suspense_list")
							: 0xead8;
						var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
						var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
						var REACT_BLOCK_TYPE = hasSymbol
							? Symbol.for("react.block")
							: 0xead9;
						var REACT_FUNDAMENTAL_TYPE = hasSymbol
							? Symbol.for("react.fundamental")
							: 0xead5;
						var REACT_RESPONDER_TYPE = hasSymbol
							? Symbol.for("react.responder")
							: 0xead6;
						var REACT_SCOPE_TYPE = hasSymbol
							? Symbol.for("react.scope")
							: 0xead7;

						function isValidElementType(type) {
							return (
								typeof type === "string" ||
								typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
								type === REACT_FRAGMENT_TYPE ||
								type === REACT_CONCURRENT_MODE_TYPE ||
								type === REACT_PROFILER_TYPE ||
								type === REACT_STRICT_MODE_TYPE ||
								type === REACT_SUSPENSE_TYPE ||
								type === REACT_SUSPENSE_LIST_TYPE ||
								(typeof type === "object" &&
									type !== null &&
									(type.$$typeof === REACT_LAZY_TYPE ||
										type.$$typeof === REACT_MEMO_TYPE ||
										type.$$typeof === REACT_PROVIDER_TYPE ||
										type.$$typeof === REACT_CONTEXT_TYPE ||
										type.$$typeof === REACT_FORWARD_REF_TYPE ||
										type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
										type.$$typeof === REACT_RESPONDER_TYPE ||
										type.$$typeof === REACT_SCOPE_TYPE ||
										type.$$typeof === REACT_BLOCK_TYPE))
							);
						}

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
													case REACT_LAZY_TYPE:
													case REACT_MEMO_TYPE:
													case REACT_PROVIDER_TYPE:
														return $$typeofType;

													default:
														return $$typeof;
												}
										}

									case REACT_PORTAL_TYPE:
										return $$typeof;
								}
							}

							return undefined;
						} // AsyncMode is deprecated along with isAsyncMode

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
						var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

						function isAsyncMode(object) {
							{
								if (!hasWarnedAboutDeprecatedIsAsyncMode) {
									hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

									console["warn"](
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
						exports.isValidElementType = isValidElementType;
						exports.typeOf = typeOf;
					})();
				}

				/***/
			},

		/***/ "../../node_modules/react-is/index.js":
			/*!********************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/react-is/index.js ***!
  \********************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				"use strict";

				if (false) {
				} else {
					module.exports = __webpack_require__(
						/*! ./cjs/react-is.development.js */ "../../node_modules/react-is/cjs/react-is.development.js"
					);
				}

				/***/
			},

		/***/ "../../node_modules/react/index.js":
			/*!***********************************************************************************************!*\
  !*** delegated ../../node_modules/react/index.js from dll-reference dll_2792696c4305f10043ec ***!
  \***********************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				module.exports = __webpack_require__(
					/*! dll-reference dll_2792696c4305f10043ec */ "dll-reference dll_2792696c4305f10043ec"
				)("../../node_modules/react/index.js");

				/***/
			},

		/***/ "../../node_modules/regenerator-runtime/runtime.js":
			/*!*********************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				/**
				 * Copyright (c) 2014-present, Facebook, Inc.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				var runtime = (function (exports) {
					"use strict";

					var Op = Object.prototype;
					var hasOwn = Op.hasOwnProperty;
					var undefined; // More compressible than void 0.
					var $Symbol = typeof Symbol === "function" ? Symbol : {};
					var iteratorSymbol = $Symbol.iterator || "@@iterator";
					var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
					var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

					function wrap(innerFn, outerFn, self, tryLocsList) {
						// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
						var protoGenerator =
							outerFn && outerFn.prototype instanceof Generator
								? outerFn
								: Generator;
						var generator = Object.create(protoGenerator.prototype);
						var context = new Context(tryLocsList || []);

						// The ._invoke method unifies the implementations of the .next,
						// .throw, and .return methods.
						generator._invoke = makeInvokeMethod(innerFn, self, context);

						return generator;
					}
					exports.wrap = wrap;

					// Try/catch helper to minimize deoptimizations. Returns a completion
					// record like context.tryEntries[i].completion. This interface could
					// have been (and was previously) designed to take a closure to be
					// invoked without arguments, but in all the cases we care about we
					// already have an existing method we want to call, so there's no need
					// to create a new function object. We can even get away with assuming
					// the method takes exactly one argument, since that happens to be true
					// in every case, so we don't have to touch the arguments object. The
					// only additional allocation required is the completion record, which
					// has a stable shape and so hopefully should be cheap to allocate.
					function tryCatch(fn, obj, arg) {
						try {
							return { type: "normal", arg: fn.call(obj, arg) };
						} catch (err) {
							return { type: "throw", arg: err };
						}
					}

					var GenStateSuspendedStart = "suspendedStart";
					var GenStateSuspendedYield = "suspendedYield";
					var GenStateExecuting = "executing";
					var GenStateCompleted = "completed";

					// Returning this object from the innerFn has the same effect as
					// breaking out of the dispatch switch statement.
					var ContinueSentinel = {};

					// Dummy constructor functions that we use as the .constructor and
					// .constructor.prototype properties for functions that return Generator
					// objects. For full spec compliance, you may wish to configure your
					// minifier not to mangle the names of these two functions.
					function Generator() {}
					function GeneratorFunction() {}
					function GeneratorFunctionPrototype() {}

					// This is a polyfill for %IteratorPrototype% for environments that
					// don't natively support it.
					var IteratorPrototype = {};
					IteratorPrototype[iteratorSymbol] = function () {
						return this;
					};

					var getProto = Object.getPrototypeOf;
					var NativeIteratorPrototype =
						getProto && getProto(getProto(values([])));
					if (
						NativeIteratorPrototype &&
						NativeIteratorPrototype !== Op &&
						hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
					) {
						// This environment has a native %IteratorPrototype%; use it instead
						// of the polyfill.
						IteratorPrototype = NativeIteratorPrototype;
					}

					var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
						IteratorPrototype
					));
					GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
					GeneratorFunctionPrototype.constructor = GeneratorFunction;
					GeneratorFunctionPrototype[
						toStringTagSymbol
					] = GeneratorFunction.displayName = "GeneratorFunction";

					// Helper for defining the .next, .throw, and .return methods of the
					// Iterator interface in terms of a single ._invoke method.
					function defineIteratorMethods(prototype) {
						["next", "throw", "return"].forEach(function (method) {
							prototype[method] = function (arg) {
								return this._invoke(method, arg);
							};
						});
					}

					exports.isGeneratorFunction = function (genFun) {
						var ctor = typeof genFun === "function" && genFun.constructor;
						return ctor
							? ctor === GeneratorFunction ||
									// For the native GeneratorFunction constructor, the best we can
									// do is to check its .name property.
									(ctor.displayName || ctor.name) === "GeneratorFunction"
							: false;
					};

					exports.mark = function (genFun) {
						if (Object.setPrototypeOf) {
							Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
						} else {
							genFun.__proto__ = GeneratorFunctionPrototype;
							if (!(toStringTagSymbol in genFun)) {
								genFun[toStringTagSymbol] = "GeneratorFunction";
							}
						}
						genFun.prototype = Object.create(Gp);
						return genFun;
					};

					// Within the body of any async function, `await x` is transformed to
					// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
					// `hasOwn.call(value, "__await")` to determine if the yielded value is
					// meant to be awaited.
					exports.awrap = function (arg) {
						return { __await: arg };
					};

					function AsyncIterator(generator, PromiseImpl) {
						function invoke(method, arg, resolve, reject) {
							var record = tryCatch(generator[method], generator, arg);
							if (record.type === "throw") {
								reject(record.arg);
							} else {
								var result = record.arg;
								var value = result.value;
								if (
									value &&
									typeof value === "object" &&
									hasOwn.call(value, "__await")
								) {
									return PromiseImpl.resolve(value.__await).then(
										function (value) {
											invoke("next", value, resolve, reject);
										},
										function (err) {
											invoke("throw", err, resolve, reject);
										}
									);
								}

								return PromiseImpl.resolve(value).then(
									function (unwrapped) {
										// When a yielded Promise is resolved, its final value becomes
										// the .value of the Promise<{value,done}> result for the
										// current iteration.
										result.value = unwrapped;
										resolve(result);
									},
									function (error) {
										// If a rejected Promise was yielded, throw the rejection back
										// into the async generator function so it can be handled there.
										return invoke("throw", error, resolve, reject);
									}
								);
							}
						}

						var previousPromise;

						function enqueue(method, arg) {
							function callInvokeWithMethodAndArg() {
								return new PromiseImpl(function (resolve, reject) {
									invoke(method, arg, resolve, reject);
								});
							}

							return (previousPromise =
								// If enqueue has been called before, then we want to wait until
								// all previous Promises have been resolved before calling invoke,
								// so that results are always delivered in the correct order. If
								// enqueue has not been called before, then it is important to
								// call invoke immediately, without waiting on a callback to fire,
								// so that the async generator function has the opportunity to do
								// any necessary setup in a predictable way. This predictability
								// is why the Promise constructor synchronously invokes its
								// executor callback, and why async functions synchronously
								// execute code before the first await. Since we implement simple
								// async functions in terms of async generators, it is especially
								// important to get this right, even though it requires care.
								previousPromise
									? previousPromise.then(
											callInvokeWithMethodAndArg,
											// Avoid propagating failures to Promises returned by later
											// invocations of the iterator.
											callInvokeWithMethodAndArg
									  )
									: callInvokeWithMethodAndArg());
						}

						// Define the unified helper method that is used to implement .next,
						// .throw, and .return (see defineIteratorMethods).
						this._invoke = enqueue;
					}

					defineIteratorMethods(AsyncIterator.prototype);
					AsyncIterator.prototype[asyncIteratorSymbol] = function () {
						return this;
					};
					exports.AsyncIterator = AsyncIterator;

					// Note that simple async functions are implemented on top of
					// AsyncIterator objects; they just return a Promise for the value of
					// the final result produced by the iterator.
					exports.async = function (
						innerFn,
						outerFn,
						self,
						tryLocsList,
						PromiseImpl
					) {
						if (PromiseImpl === void 0) PromiseImpl = Promise;

						var iter = new AsyncIterator(
							wrap(innerFn, outerFn, self, tryLocsList),
							PromiseImpl
						);

						return exports.isGeneratorFunction(outerFn)
							? iter // If outerFn is a generator, return the full iterator.
							: iter.next().then(function (result) {
									return result.done ? result.value : iter.next();
							  });
					};

					function makeInvokeMethod(innerFn, self, context) {
						var state = GenStateSuspendedStart;

						return function invoke(method, arg) {
							if (state === GenStateExecuting) {
								throw new Error("Generator is already running");
							}

							if (state === GenStateCompleted) {
								if (method === "throw") {
									throw arg;
								}

								// Be forgiving, per 25.3.3.3.3 of the spec:
								// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
								return doneResult();
							}

							context.method = method;
							context.arg = arg;

							while (true) {
								var delegate = context.delegate;
								if (delegate) {
									var delegateResult = maybeInvokeDelegate(delegate, context);
									if (delegateResult) {
										if (delegateResult === ContinueSentinel) continue;
										return delegateResult;
									}
								}

								if (context.method === "next") {
									// Setting context._sent for legacy support of Babel's
									// function.sent implementation.
									context.sent = context._sent = context.arg;
								} else if (context.method === "throw") {
									if (state === GenStateSuspendedStart) {
										state = GenStateCompleted;
										throw context.arg;
									}

									context.dispatchException(context.arg);
								} else if (context.method === "return") {
									context.abrupt("return", context.arg);
								}

								state = GenStateExecuting;

								var record = tryCatch(innerFn, self, context);
								if (record.type === "normal") {
									// If an exception is thrown from innerFn, we leave state ===
									// GenStateExecuting and loop back for another invocation.
									state = context.done
										? GenStateCompleted
										: GenStateSuspendedYield;

									if (record.arg === ContinueSentinel) {
										continue;
									}

									return {
										value: record.arg,
										done: context.done
									};
								} else if (record.type === "throw") {
									state = GenStateCompleted;
									// Dispatch the exception by looping back around to the
									// context.dispatchException(context.arg) call above.
									context.method = "throw";
									context.arg = record.arg;
								}
							}
						};
					}

					// Call delegate.iterator[context.method](context.arg) and handle the
					// result, either by returning a { value, done } result from the
					// delegate iterator, or by modifying context.method and context.arg,
					// setting context.delegate to null, and returning the ContinueSentinel.
					function maybeInvokeDelegate(delegate, context) {
						var method = delegate.iterator[context.method];
						if (method === undefined) {
							// A .throw or .return when the delegate iterator has no .throw
							// method always terminates the yield* loop.
							context.delegate = null;

							if (context.method === "throw") {
								// Note: ["return"] must be used for ES3 parsing compatibility.
								if (delegate.iterator["return"]) {
									// If the delegate iterator has a return method, give it a
									// chance to clean up.
									context.method = "return";
									context.arg = undefined;
									maybeInvokeDelegate(delegate, context);

									if (context.method === "throw") {
										// If maybeInvokeDelegate(context) changed context.method from
										// "return" to "throw", let that override the TypeError below.
										return ContinueSentinel;
									}
								}

								context.method = "throw";
								context.arg = new TypeError(
									"The iterator does not provide a 'throw' method"
								);
							}

							return ContinueSentinel;
						}

						var record = tryCatch(method, delegate.iterator, context.arg);

						if (record.type === "throw") {
							context.method = "throw";
							context.arg = record.arg;
							context.delegate = null;
							return ContinueSentinel;
						}

						var info = record.arg;

						if (!info) {
							context.method = "throw";
							context.arg = new TypeError("iterator result is not an object");
							context.delegate = null;
							return ContinueSentinel;
						}

						if (info.done) {
							// Assign the result of the finished delegate to the temporary
							// variable specified by delegate.resultName (see delegateYield).
							context[delegate.resultName] = info.value;

							// Resume execution at the desired location (see delegateYield).
							context.next = delegate.nextLoc;

							// If context.method was "throw" but the delegate handled the
							// exception, let the outer generator proceed normally. If
							// context.method was "next", forget context.arg since it has been
							// "consumed" by the delegate iterator. If context.method was
							// "return", allow the original .return call to continue in the
							// outer generator.
							if (context.method !== "return") {
								context.method = "next";
								context.arg = undefined;
							}
						} else {
							// Re-yield the result returned by the delegate method.
							return info;
						}

						// The delegate iterator is finished, so forget it and continue with
						// the outer generator.
						context.delegate = null;
						return ContinueSentinel;
					}

					// Define Generator.prototype.{next,throw,return} in terms of the
					// unified ._invoke helper method.
					defineIteratorMethods(Gp);

					Gp[toStringTagSymbol] = "Generator";

					// A Generator should always return itself as the iterator object when the
					// @@iterator function is called on it. Some browsers' implementations of the
					// iterator prototype chain incorrectly implement this, causing the Generator
					// object to not be returned from this call. This ensures that doesn't happen.
					// See https://github.com/facebook/regenerator/issues/274 for more details.
					Gp[iteratorSymbol] = function () {
						return this;
					};

					Gp.toString = function () {
						return "[object Generator]";
					};

					function pushTryEntry(locs) {
						var entry = { tryLoc: locs[0] };

						if (1 in locs) {
							entry.catchLoc = locs[1];
						}

						if (2 in locs) {
							entry.finallyLoc = locs[2];
							entry.afterLoc = locs[3];
						}

						this.tryEntries.push(entry);
					}

					function resetTryEntry(entry) {
						var record = entry.completion || {};
						record.type = "normal";
						delete record.arg;
						entry.completion = record;
					}

					function Context(tryLocsList) {
						// The root entry object (effectively a try statement without a catch
						// or a finally block) gives us a place to store values thrown from
						// locations where there is no enclosing try statement.
						this.tryEntries = [{ tryLoc: "root" }];
						tryLocsList.forEach(pushTryEntry, this);
						this.reset(true);
					}

					exports.keys = function (object) {
						var keys = [];
						for (var key in object) {
							keys.push(key);
						}
						keys.reverse();

						// Rather than returning an object with a next method, we keep
						// things simple and return the next function itself.
						return function next() {
							while (keys.length) {
								var key = keys.pop();
								if (key in object) {
									next.value = key;
									next.done = false;
									return next;
								}
							}

							// To avoid creating an additional object, we just hang the .value
							// and .done properties off the next function object itself. This
							// also ensures that the minifier will not anonymize the function.
							next.done = true;
							return next;
						};
					};

					function values(iterable) {
						if (iterable) {
							var iteratorMethod = iterable[iteratorSymbol];
							if (iteratorMethod) {
								return iteratorMethod.call(iterable);
							}

							if (typeof iterable.next === "function") {
								return iterable;
							}

							if (!isNaN(iterable.length)) {
								var i = -1,
									next = function next() {
										while (++i < iterable.length) {
											if (hasOwn.call(iterable, i)) {
												next.value = iterable[i];
												next.done = false;
												return next;
											}
										}

										next.value = undefined;
										next.done = true;

										return next;
									};

								return (next.next = next);
							}
						}

						// Return an iterator with no values.
						return { next: doneResult };
					}
					exports.values = values;

					function doneResult() {
						return { value: undefined, done: true };
					}

					Context.prototype = {
						constructor: Context,

						reset: function (skipTempReset) {
							this.prev = 0;
							this.next = 0;
							// Resetting context._sent for legacy support of Babel's
							// function.sent implementation.
							this.sent = this._sent = undefined;
							this.done = false;
							this.delegate = null;

							this.method = "next";
							this.arg = undefined;

							this.tryEntries.forEach(resetTryEntry);

							if (!skipTempReset) {
								for (var name in this) {
									// Not sure about the optimal order of these conditions:
									if (
										name.charAt(0) === "t" &&
										hasOwn.call(this, name) &&
										!isNaN(+name.slice(1))
									) {
										this[name] = undefined;
									}
								}
							}
						},

						stop: function () {
							this.done = true;

							var rootEntry = this.tryEntries[0];
							var rootRecord = rootEntry.completion;
							if (rootRecord.type === "throw") {
								throw rootRecord.arg;
							}

							return this.rval;
						},

						dispatchException: function (exception) {
							if (this.done) {
								throw exception;
							}

							var context = this;
							function handle(loc, caught) {
								record.type = "throw";
								record.arg = exception;
								context.next = loc;

								if (caught) {
									// If the dispatched exception was caught by a catch block,
									// then let that catch block handle the exception normally.
									context.method = "next";
									context.arg = undefined;
								}

								return !!caught;
							}

							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i];
								var record = entry.completion;

								if (entry.tryLoc === "root") {
									// Exception thrown outside of any try block that could handle
									// it, so set the completion value of the entire function to
									// throw the exception.
									return handle("end");
								}

								if (entry.tryLoc <= this.prev) {
									var hasCatch = hasOwn.call(entry, "catchLoc");
									var hasFinally = hasOwn.call(entry, "finallyLoc");

									if (hasCatch && hasFinally) {
										if (this.prev < entry.catchLoc) {
											return handle(entry.catchLoc, true);
										} else if (this.prev < entry.finallyLoc) {
											return handle(entry.finallyLoc);
										}
									} else if (hasCatch) {
										if (this.prev < entry.catchLoc) {
											return handle(entry.catchLoc, true);
										}
									} else if (hasFinally) {
										if (this.prev < entry.finallyLoc) {
											return handle(entry.finallyLoc);
										}
									} else {
										throw new Error("try statement without catch or finally");
									}
								}
							}
						},

						abrupt: function (type, arg) {
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i];
								if (
									entry.tryLoc <= this.prev &&
									hasOwn.call(entry, "finallyLoc") &&
									this.prev < entry.finallyLoc
								) {
									var finallyEntry = entry;
									break;
								}
							}

							if (
								finallyEntry &&
								(type === "break" || type === "continue") &&
								finallyEntry.tryLoc <= arg &&
								arg <= finallyEntry.finallyLoc
							) {
								// Ignore the finally entry if control is not jumping to a
								// location outside the try/catch block.
								finallyEntry = null;
							}

							var record = finallyEntry ? finallyEntry.completion : {};
							record.type = type;
							record.arg = arg;

							if (finallyEntry) {
								this.method = "next";
								this.next = finallyEntry.finallyLoc;
								return ContinueSentinel;
							}

							return this.complete(record);
						},

						complete: function (record, afterLoc) {
							if (record.type === "throw") {
								throw record.arg;
							}

							if (record.type === "break" || record.type === "continue") {
								this.next = record.arg;
							} else if (record.type === "return") {
								this.rval = this.arg = record.arg;
								this.method = "return";
								this.next = "end";
							} else if (record.type === "normal" && afterLoc) {
								this.next = afterLoc;
							}

							return ContinueSentinel;
						},

						finish: function (finallyLoc) {
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i];
								if (entry.finallyLoc === finallyLoc) {
									this.complete(entry.completion, entry.afterLoc);
									resetTryEntry(entry);
									return ContinueSentinel;
								}
							}
						},

						catch: function (tryLoc) {
							for (var i = this.tryEntries.length - 1; i >= 0; --i) {
								var entry = this.tryEntries[i];
								if (entry.tryLoc === tryLoc) {
									var record = entry.completion;
									if (record.type === "throw") {
										var thrown = record.arg;
										resetTryEntry(entry);
									}
									return thrown;
								}
							}

							// The context.catch method must only be called with a location
							// argument that corresponds to a known catch block.
							throw new Error("illegal catch attempt");
						},

						delegateYield: function (iterable, resultName, nextLoc) {
							this.delegate = {
								iterator: values(iterable),
								resultName: resultName,
								nextLoc: nextLoc
							};

							if (this.method === "next") {
								// Deliberately forget the last sent value so that we don't
								// accidentally pass it on to the delegate.
								this.arg = undefined;
							}

							return ContinueSentinel;
						}
					};

					// Regardless of whether this script is executing as a CommonJS module
					// or not, return the runtime object so that we can declare the variable
					// regeneratorRuntime in the outer scope, which allows this module to be
					// injected easily by `bin/regenerator --include-runtime script.js`.
					return exports;
				})(
					// If this script is executing as a CommonJS module, use module.exports
					// as the regeneratorRuntime namespace. Otherwise create a new empty
					// object. Either way, the resulting object will be used to initialize
					// the regeneratorRuntime variable at the top of this file.
					true ? module.exports : undefined
				);

				try {
					regeneratorRuntime = runtime;
				} catch (accidentalStrictMode) {
					// This module should not be running in strict mode, so the above
					// assignment should always work unless something is misconfigured. Just
					// in case runtime.js accidentally runs in strict mode, we can escape
					// strict mode using a global Function call. This could conceivably fail
					// if a Content Security Policy forbids using Function, but in that case
					// the proper solution is to fix the accidental strict mode problem. If
					// you've misconfigured your bundler to force strict mode and applied a
					// CSP to forbid Function, and you're not willing to fix either of those
					// problems, please detail your unique predicament in a GitHub issue.
					Function("r", "regeneratorRuntime = r")(runtime);
				}

				/***/
			},

		/***/ "../../node_modules/setimmediate/setImmediate.js":
			/*!*******************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/setimmediate/setImmediate.js ***!
  \*******************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				/* WEBPACK VAR INJECTION */ (function (global, process) {
					(function (global, undefined) {
						"use strict";

						if (global.setImmediate) {
							return;
						}

						var nextHandle = 1; // Spec says greater than zero
						var tasksByHandle = {};
						var currentlyRunningATask = false;
						var doc = global.document;
						var registerImmediate;

						function setImmediate(callback) {
							// Callback can either be a function or a string
							if (typeof callback !== "function") {
								callback = new Function("" + callback);
							}
							// Copy function arguments
							var args = new Array(arguments.length - 1);
							for (var i = 0; i < args.length; i++) {
								args[i] = arguments[i + 1];
							}
							// Store and register the task
							var task = { callback: callback, args: args };
							tasksByHandle[nextHandle] = task;
							registerImmediate(nextHandle);
							return nextHandle++;
						}

						function clearImmediate(handle) {
							delete tasksByHandle[handle];
						}

						function run(task) {
							var callback = task.callback;
							var args = task.args;
							switch (args.length) {
								case 0:
									callback();
									break;
								case 1:
									callback(args[0]);
									break;
								case 2:
									callback(args[0], args[1]);
									break;
								case 3:
									callback(args[0], args[1], args[2]);
									break;
								default:
									callback.apply(undefined, args);
									break;
							}
						}

						function runIfPresent(handle) {
							// From the spec: "Wait until any invocations of this algorithm started before this one have completed."
							// So if we're currently running a task, we'll need to delay this invocation.
							if (currentlyRunningATask) {
								// Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
								// "too much recursion" error.
								setTimeout(runIfPresent, 0, handle);
							} else {
								var task = tasksByHandle[handle];
								if (task) {
									currentlyRunningATask = true;
									try {
										run(task);
									} finally {
										clearImmediate(handle);
										currentlyRunningATask = false;
									}
								}
							}
						}

						function installNextTickImplementation() {
							registerImmediate = function (handle) {
								process.nextTick(function () {
									runIfPresent(handle);
								});
							};
						}

						function canUsePostMessage() {
							// The test against `importScripts` prevents this implementation from being installed inside a web worker,
							// where `global.postMessage` means something completely different and can't be used for this purpose.
							if (global.postMessage && !global.importScripts) {
								var postMessageIsAsynchronous = true;
								var oldOnMessage = global.onmessage;
								global.onmessage = function () {
									postMessageIsAsynchronous = false;
								};
								global.postMessage("", "*");
								global.onmessage = oldOnMessage;
								return postMessageIsAsynchronous;
							}
						}

						function installPostMessageImplementation() {
							// Installs an event handler on `global` for the `message` event: see
							// * https://developer.mozilla.org/en/DOM/window.postMessage
							// * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

							var messagePrefix = "setImmediate$" + Math.random() + "$";
							var onGlobalMessage = function (event) {
								if (
									event.source === global &&
									typeof event.data === "string" &&
									event.data.indexOf(messagePrefix) === 0
								) {
									runIfPresent(+event.data.slice(messagePrefix.length));
								}
							};

							if (global.addEventListener) {
								global.addEventListener("message", onGlobalMessage, false);
							} else {
								global.attachEvent("onmessage", onGlobalMessage);
							}

							registerImmediate = function (handle) {
								global.postMessage(messagePrefix + handle, "*");
							};
						}

						function installMessageChannelImplementation() {
							var channel = new MessageChannel();
							channel.port1.onmessage = function (event) {
								var handle = event.data;
								runIfPresent(handle);
							};

							registerImmediate = function (handle) {
								channel.port2.postMessage(handle);
							};
						}

						function installReadyStateChangeImplementation() {
							var html = doc.documentElement;
							registerImmediate = function (handle) {
								// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
								// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
								var script = doc.createElement("script");
								script.onreadystatechange = function () {
									runIfPresent(handle);
									script.onreadystatechange = null;
									html.removeChild(script);
									script = null;
								};
								html.appendChild(script);
							};
						}

						function installSetTimeoutImplementation() {
							registerImmediate = function (handle) {
								setTimeout(runIfPresent, 0, handle);
							};
						}

						// If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
						var attachTo =
							Object.getPrototypeOf && Object.getPrototypeOf(global);
						attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

						// Don't get fooled by e.g. browserify environments.
						if ({}.toString.call(global.process) === "[object process]") {
							// For Node.js before 0.9
							installNextTickImplementation();
						} else if (canUsePostMessage()) {
							// For non-IE10 modern browsers
							installPostMessageImplementation();
						} else if (global.MessageChannel) {
							// For web workers, where supported
							installMessageChannelImplementation();
						} else if (
							doc &&
							"onreadystatechange" in doc.createElement("script")
						) {
							// For IE 6–8
							installReadyStateChangeImplementation();
						} else {
							// For older browsers
							installSetTimeoutImplementation();
						}

						attachTo.setImmediate = setImmediate;
						attachTo.clearImmediate = clearImmediate;
					})(
						typeof self === "undefined"
							? typeof global === "undefined"
								? this
								: global
							: self
					);

					/* WEBPACK VAR INJECTION */
				}.call(
					this,
					__webpack_require__(
						/*! ./../next/node_modules/webpack/buildin/global.js */ "../../node_modules/next/node_modules/webpack/buildin/global.js"
					),
					__webpack_require__(
						/*! ./../process/browser.js */ "../../node_modules/process/browser.js"
					)
				));

				/***/
			},

		/***/ "../../node_modules/styletron-engine-atomic/dist/browser.es5.es.js":
			/*!*************************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/styletron-engine-atomic/dist/browser.es5.es.js ***!
  \*************************************************************************************************/
			/*! exports provided: Client, Server */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"Client",
					function () {
						return StyletronClient;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"Server",
					function () {
						return StyletronServer;
					}
				);
				/* harmony import */ var inline_style_prefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! inline-style-prefixer */ "../../node_modules/inline-style-prefixer/es/index.js"
				);

				var SequentialIDGenerator =
					/*#__PURE__*/
					(function () {
						function SequentialIDGenerator(prefix$$1) {
							if (prefix$$1 === void 0) {
								prefix$$1 = "";
							}

							// ensure start with "ae" so "ad" is never produced
							this.prefix = prefix$$1;
							this.count = 0;
							this.offset = 374;
							this.msb = 1295;
							this.power = 2;
						}

						var _proto = SequentialIDGenerator.prototype;

						_proto.next = function next() {
							var id = this.increment().toString(36);
							return this.prefix ? "" + this.prefix + id : id;
						};

						_proto.increment = function increment() {
							var id = this.count + this.offset;

							if (id === this.msb) {
								this.offset += (this.msb + 1) * 9;
								this.msb = Math.pow(36, ++this.power) - 1;
							}

							this.count++;
							return id;
						};

						return SequentialIDGenerator;
					})();

				// adapted from https://github.com/dutchenkoOleg/sort-css-media-queries
				var minMaxWidth = /(!?\(\s*min(-device-)?-width).+\(\s*max(-device)?-width/i;
				var minWidth = /\(\s*min(-device)?-width/i;
				var maxMinWidth = /(!?\(\s*max(-device)?-width).+\(\s*min(-device)?-width/i;
				var maxWidth = /\(\s*max(-device)?-width/i;

				var isMinWidth = _testQuery(minMaxWidth, maxMinWidth, minWidth);

				var isMaxWidth = _testQuery(maxMinWidth, minMaxWidth, maxWidth);

				var minMaxHeight = /(!?\(\s*min(-device)?-height).+\(\s*max(-device)?-height/i;
				var minHeight = /\(\s*min(-device)?-height/i;
				var maxMinHeight = /(!?\(\s*max(-device)?-height).+\(\s*min(-device)?-height/i;
				var maxHeight = /\(\s*max(-device)?-height/i;

				var isMinHeight = _testQuery(minMaxHeight, maxMinHeight, minHeight);

				var isMaxHeight = _testQuery(maxMinHeight, minMaxHeight, maxHeight);

				var isPrint = /print/i;
				var isPrintOnly = /^print$/i;
				var maxValue = Number.MAX_VALUE;

				function _getQueryLength(length) {
					var matches = /(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(length);

					if (matches === null) {
						return maxValue;
					}

					var number = matches[1];
					var unit = matches[2];

					switch (unit) {
						case "ch":
							number = parseFloat(number) * 8.8984375;
							break;

						case "em":
						case "rem":
							number = parseFloat(number) * 16;
							break;

						case "ex":
							number = parseFloat(number) * 8.296875;
							break;

						case "px":
							number = parseFloat(number);
							break;
					}

					return +number;
				}

				function _testQuery(doubleTestTrue, doubleTestFalse, singleTest) {
					return function (query) {
						if (doubleTestTrue.test(query)) {
							return true;
						} else if (doubleTestFalse.test(query)) {
							return false;
						}

						return singleTest.test(query);
					};
				}

				function _testIsPrint(a, b) {
					var isPrintA = isPrint.test(a);
					var isPrintOnlyA = isPrintOnly.test(a);
					var isPrintB = isPrint.test(b);
					var isPrintOnlyB = isPrintOnly.test(b);

					if (isPrintA && isPrintB) {
						if (!isPrintOnlyA && isPrintOnlyB) {
							return 1;
						}

						if (isPrintOnlyA && !isPrintOnlyB) {
							return -1;
						}

						return a.localeCompare(b);
					}

					if (isPrintA) {
						return 1;
					}

					if (isPrintB) {
						return -1;
					}

					return null;
				}

				function sortCSSmq(a, b) {
					if (a === "") {
						return -1;
					}

					if (b === "") {
						return 1;
					}

					var testIsPrint = _testIsPrint(a, b);

					if (testIsPrint !== null) {
						return testIsPrint;
					}

					var minA = isMinWidth(a) || isMinHeight(a);
					var maxA = isMaxWidth(a) || isMaxHeight(a);
					var minB = isMinWidth(b) || isMinHeight(b);
					var maxB = isMaxWidth(b) || isMaxHeight(b);

					if (minA && maxB) {
						return -1;
					}

					if (maxA && minB) {
						return 1;
					}

					var lengthA = _getQueryLength(a);

					var lengthB = _getQueryLength(b);

					if (lengthA === maxValue && lengthB === maxValue) {
						return a.localeCompare(b);
					} else if (lengthA === maxValue) {
						return 1;
					} else if (lengthB === maxValue) {
						return -1;
					}

					if (lengthA > lengthB) {
						if (maxA) {
							return -1;
						}

						return 1;
					}

					if (lengthA < lengthB) {
						if (maxA) {
							return 1;
						}

						return -1;
					}

					return a.localeCompare(b);
				}

				var MultiCache =
					/*#__PURE__*/
					(function () {
						function MultiCache(idGenerator, onNewCache, onNewValue) {
							this.idGenerator = idGenerator;
							this.onNewCache = onNewCache;
							this.onNewValue = onNewValue;
							this.sortedCacheKeys = [];
							this.caches = {};
						}

						var _proto = MultiCache.prototype;

						_proto.getCache = function getCache(key) {
							if (!this.caches[key]) {
								var _cache = new Cache(this.idGenerator, this.onNewValue);

								_cache.key = key;
								this.sortedCacheKeys.push(key);
								this.sortedCacheKeys.sort(sortCSSmq);
								var keyIndex = this.sortedCacheKeys.indexOf(key);
								var insertBeforeMedia =
									keyIndex < this.sortedCacheKeys.length - 1
										? this.sortedCacheKeys[keyIndex + 1]
										: void 0;
								this.caches[key] = _cache;
								this.onNewCache(key, _cache, insertBeforeMedia);
							}

							return this.caches[key];
						};

						_proto.getSortedCacheKeys = function getSortedCacheKeys() {
							return this.sortedCacheKeys;
						};

						return MultiCache;
					})();
				var Cache =
					/*#__PURE__*/
					(function () {
						function Cache(idGenerator, onNewValue) {
							this.cache = {};
							this.idGenerator = idGenerator;
							this.onNewValue = onNewValue;
						}

						var _proto2 = Cache.prototype;

						_proto2.addValue = function addValue(key, value) {
							var cached = this.cache[key];

							if (cached) {
								return cached;
							}

							var id = this.idGenerator.next();
							this.cache[key] = id;
							this.onNewValue(this, id, value);
							return id;
						};

						return Cache;
					})();

				var uppercasePattern = /[A-Z]/g;
				var msPattern = /^ms-/;
				var cache = {};
				function hyphenateStyleName(prop) {
					return prop in cache
						? cache[prop]
						: (cache[prop] = prop
								.replace(uppercasePattern, "-$&")
								.toLowerCase()
								.replace(msPattern, "-ms-"));
				}

				/**
				 * Adapted from https://github.com/gilmoreorless/css-shorthand-properties
				 */
				var shorthandMap = {
					// CSS 2.1: https://www.w3.org/TR/CSS2/propidx.html
					"list-style": [
						"list-style-type",
						"list-style-position",
						"list-style-image"
					],
					margin: [
						"margin-top",
						"margin-right",
						"margin-bottom",
						"margin-left"
					],
					outline: ["outline-width", "outline-style", "outline-color"],
					padding: [
						"padding-top",
						"padding-right",
						"padding-bottom",
						"padding-left"
					],
					// CSS Backgrounds and Borders Module Level 3: https://www.w3.org/TR/css3-background/
					background: [
						"background-image",
						"background-position",
						"background-size",
						"background-repeat",
						"background-origin",
						"background-clip",
						"background-attachment",
						"background-color"
					],
					border: [
						"border-top-width",
						"border-right-width",
						"border-bottom-width",
						"border-left-width",
						"border-width",
						"border-top-style",
						"border-right-style",
						"border-bottom-style",
						"border-left-style",
						"border-style",
						"border-top-color",
						"border-right-color",
						"border-bottom-color",
						"border-left-color",
						"border-color"
					],
					"border-color": [
						"border-top-color",
						"border-right-color",
						"border-bottom-color",
						"border-left-color"
					],
					"border-style": [
						"border-top-style",
						"border-right-style",
						"border-bottom-style",
						"border-left-style"
					],
					"border-width": [
						"border-top-width",
						"border-right-width",
						"border-bottom-width",
						"border-left-width"
					],
					"border-top": [
						"border-top-width",
						"border-top-style",
						"border-top-color"
					],
					"border-right": [
						"border-right-width",
						"border-right-style",
						"border-right-color"
					],
					"border-bottom": [
						"border-bottom-width",
						"border-bottom-style",
						"border-bottom-color"
					],
					"border-left": [
						"border-left-width",
						"border-left-style",
						"border-left-color"
					],
					"border-radius": [
						"border-top-left-radius",
						"border-top-right-radius",
						"border-bottom-right-radius",
						"border-bottom-left-radius"
					],
					"border-image": [
						"border-image-source",
						"border-image-slice",
						"border-image-width",
						"border-image-outset",
						"border-image-repeat"
					],
					// CSS Fonts Module Level 3: https://www.w3.org/TR/css3-fonts/
					font: [
						"font-style",
						"font-variant-ligatures",
						"font-variant-alternates",
						"font-variant-caps",
						"font-variant-numeric",
						"font-variant-east-asian",
						"font-variant",
						"font-weight",
						"font-stretch",
						"font-size",
						"line-height",
						"font-family"
					],
					"font-variant": [
						"font-variant-ligatures",
						"font-variant-alternates",
						"font-variant-caps",
						"font-variant-numeric",
						"font-variant-east-asian"
					],
					// CSS Flexible Box Layout Module Level 1: https://www.w3.org/TR/css3-flexbox-1/
					flex: ["flex-grow", "flex-shrink", "flex-basis"],
					"flex-flow": ["flex-direction", "flex-wrap"],
					// CSS Grid Layout Module Level 1: https://www.w3.org/TR/css-grid-1/
					grid: [
						"grid-template-rows",
						"grid-template-columns",
						"grid-template-areas",
						"grid-auto-rows",
						"grid-auto-columns",
						"grid-auto-flow"
					],
					"grid-template": [
						"grid-template-rows",
						"grid-template-columns",
						"grid-template-areas"
					],
					"grid-row": ["grid-row-start", "grid-row-end"],
					"grid-column": ["grid-column-start", "grid-column-end"],
					"grid-area": [
						"grid-row-start",
						"grid-column-start",
						"grid-row-end",
						"grid-column-end"
					],
					"grid-gap": ["grid-row-gap", "grid-column-gap"],
					// CSS Masking Module Level 1: https://www.w3.org/TR/css-masking/
					mask: [
						"mask-image",
						"mask-mode",
						"mask-position",
						"mask-size",
						"mask-repeat",
						"mask-origin",
						"mask-clip"
					],
					"mask-border": [
						"mask-border-source",
						"mask-border-slice",
						"mask-border-width",
						"mask-border-outset",
						"mask-border-repeat",
						"mask-border-mode"
					],
					// CSS Multi-column Layout Module: https://www.w3.org/TR/css3-multicol/
					columns: ["column-width", "column-count"],
					"column-rule": [
						"column-rule-width",
						"column-rule-style",
						"column-rule-color"
					],
					// CSS Scroll Snap Module Level 1: https://www.w3.org/TR/css-scroll-snap-1/
					"scroll-padding": [
						"scroll-padding-top",
						"scroll-padding-right",
						"scroll-padding-bottom",
						"scroll-padding-left"
					],
					"scroll-padding-block": [
						"scroll-padding-block-start",
						"scroll-padding-block-end"
					],
					"scroll-padding-inline": [
						"scroll-padding-inline-start",
						"scroll-padding-inline-end"
					],
					"scroll-snap-margin": [
						"scroll-snap-margin-top",
						"scroll-snap-margin-right",
						"scroll-snap-margin-bottom",
						"scroll-snap-margin-left"
					],
					"scroll-snap-margin-block": [
						"scroll-snap-margin-block-start",
						"scroll-snap-margin-block-end"
					],
					"scroll-snap-margin-inline": [
						"scroll-snap-margin-inline-start",
						"scroll-snap-margin-inline-end"
					],
					// CSS Speech Module: https://www.w3.org/TR/css3-speech/
					cue: ["cue-before", "cue-after"],
					pause: ["pause-before", "pause-after"],
					rest: ["rest-before", "rest-after"],
					// CSS Text Decoration Module Level 3: https://www.w3.org/TR/css-text-decor-3/
					"text-decoration": [
						"text-decoration-line",
						"text-decoration-style",
						"text-decoration-color"
					],
					"text-emphasis": ["text-emphasis-style", "text-emphasis-color"],
					// CSS Animations (WD): https://www.w3.org/TR/css3-animations
					animation: [
						"animation-name",
						"animation-duration",
						"animation-timing-function",
						"animation-delay",
						"animation-iteration-count",
						"animation-direction",
						"animation-fill-mode",
						"animation-play-state"
					],
					// CSS Transitions (WD): https://www.w3.org/TR/css3-transitions/
					transition: [
						"transition-property",
						"transition-duration",
						"transition-timing-function",
						"transition-delay"
					]
				};
				function validateNoMixedHand(style) {
					var hyphenatedProperties = Object.keys(style).reduce(function (
						acc,
						property
					) {
						acc[hyphenateStyleName(property)] = property;
						return acc;
					},
					{});
					var mixed = [];

					for (var property in hyphenatedProperties) {
						if (property in shorthandMap) {
							for (
								var _iterator = shorthandMap[property],
									_isArray = Array.isArray(_iterator),
									_i = 0,
									_iterator = _isArray
										? _iterator
										: _iterator[Symbol.iterator]();
								;

							) {
								var _ref;

								if (_isArray) {
									if (_i >= _iterator.length) break;
									_ref = _iterator[_i++];
								} else {
									_i = _iterator.next();
									if (_i.done) break;
									_ref = _i.value;
								}

								var _longhand = _ref;

								if (_longhand in hyphenatedProperties) {
									var long = hyphenatedProperties[_longhand];
									var short = hyphenatedProperties[property];
									mixed.push({
										shorthand: {
											property: short,
											value: style[short]
										},
										longhand: {
											property: long,
											value: style[long]
										}
									});
								}
							}
						}
					}

					return mixed;
				}

				function _typeof(obj) {
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof(obj);
				}

				function injectStylePrefixed(styleCache, styles, media, pseudo) {
					var cache = styleCache.getCache(media);
					var classString = "";

					for (var originalKey in styles) {
						var originalVal = styles[originalKey];

						if (originalVal === void 0 || originalVal === null) {
							continue;
						}

						if (_typeof(originalVal) !== "object") {
							// Non-null and non-undefined primitive value
							if (true) {
								validateValueType(originalVal, originalKey);
							}

							var propValPair =
								hyphenateStyleName(originalKey) + ":" + originalVal;
							var key = "" + pseudo + propValPair;
							var cachedId = cache.cache[key];

							if (cachedId !== void 0) {
								// cache hit
								classString += " " + cachedId;
								continue;
							} else {
								var _prefix;

								// cache miss
								var block = "";
								var prefixed = Object(
									inline_style_prefixer__WEBPACK_IMPORTED_MODULE_0__["prefix"]
								)(
									((_prefix = {}),
									(_prefix[originalKey] = originalVal),
									_prefix)
								);

								for (var prefixedKey in prefixed) {
									var prefixedVal = prefixed[prefixedKey];

									var prefixedValType = _typeof(prefixedVal);

									if (
										prefixedValType === "string" ||
										prefixedValType === "number"
									) {
										var prefixedPair =
											hyphenateStyleName(prefixedKey) + ":" + prefixedVal;

										if (prefixedPair !== propValPair) {
											block += prefixedPair + ";";
										}
									} else if (Array.isArray(prefixedVal)) {
										var hyphenated = hyphenateStyleName(prefixedKey);

										for (var i = 0; i < prefixedVal.length; i++) {
											var _prefixedPair = hyphenated + ":" + prefixedVal[i];

											if (_prefixedPair !== propValPair) {
												block += _prefixedPair + ";";
											}
										}
									}
								}

								block += propValPair; // ensure original prop/val is last (for hydration)

								var id = cache.addValue(key, {
									pseudo: pseudo,
									block: block
								});
								classString += " " + id;
							}
						} else {
							// Non-null object value
							if (originalKey[0] === ":") {
								classString +=
									" " +
									injectStylePrefixed(
										styleCache,
										originalVal,
										media,
										pseudo + originalKey
									);
							} else if (originalKey.substring(0, 6) === "@media") {
								classString +=
									" " +
									injectStylePrefixed(
										styleCache,
										originalVal,
										originalKey.substr(7),
										pseudo
									);
							}
						}
					}

					if (true) {
						var conflicts = validateNoMixedHand(styles);

						if (conflicts.length) {
							conflicts.forEach(function (_ref) {
								var _JSON$stringify, _JSON$stringify2;

								var shorthand = _ref.shorthand,
									longhand = _ref.longhand;
								var short = JSON.stringify(
									((_JSON$stringify = {}),
									(_JSON$stringify[shorthand.property] = shorthand.value),
									_JSON$stringify)
								);
								var long = JSON.stringify(
									((_JSON$stringify2 = {}),
									(_JSON$stringify2[longhand.property] = longhand.value),
									_JSON$stringify2)
								); // eslint-disable-next-line no-console

								console.warn(
									"Styles `" +
										short +
										"` and `" +
										long +
										'` in object yielding class "' +
										classString.slice(1) +
										'" may result in unexpected behavior. Mixing shorthand and longhand properties within the same style object is unsupported with atomic rendering.'
								);
							});
						}
					} // remove leading space

					return classString.slice(1);
				}

				function validateValueType(value, key) {
					if (
						value === null ||
						Array.isArray(value) ||
						(typeof value !== "number" && typeof value !== "string")
					) {
						throw new Error(
							"Unsupported style value: " +
								JSON.stringify(value) +
								" used in property " +
								JSON.stringify(key)
						);
					}
				}

				function _typeof$1(obj) {
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof$1 = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof$1 = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof$1(obj);
				}

				/* eslint-disable no-console */
				var validAnimationState = /^(from|to|\+?(\d*\.)?\d+%)(\s*,\s*(from|to|\+?(\d*\.)?\d+%))*$/;
				function validateKeyframesObject(keyframes) {
					var valid = true;

					for (var animationState in keyframes) {
						var value = keyframes[animationState];

						if (!validAnimationState.test(animationState)) {
							valid = false;
							console.warn(
								'Warning: property "' +
									animationState +
									'" in keyframes object ' +
									JSON.stringify(keyframes) +
									' is not a valid. Must be "from", "to", or a percentage.'
							);
						}

						if (_typeof$1(value) !== "object") {
							valid = false;
							console.warn(
								'Warning: value for "' +
									animationState +
									'" property in keyframes object ' +
									JSON.stringify(keyframes) +
									" must be an object. Instead it was a " +
									_typeof$1(value) +
									"."
							);
						}

						if (!valid) {
							console.warn(
								'Warning: object used as value for "animationName" style is invalid:',
								keyframes
							);
						}
					}
				}

				function atomicSelector(id, pseudo) {
					var selector = "." + id;

					if (pseudo) {
						selector += pseudo;
					}

					return selector;
				}
				function keyframesToBlock(keyframes) {
					if (true) {
						validateKeyframesObject(keyframes);
					}

					if (true && typeof Object.getPrototypeOf(keyframes) !== "undefined") {
						if (
							Object.getPrototypeOf(keyframes) !== Object.getPrototypeOf({})
						) {
							// eslint-disable-next-line no-console
							console.warn(
								"Only plain objects should be used as animation values. Unexpectedly recieved:",
								keyframes
							);
						}
					}

					var result = "";

					for (var animationState in keyframes) {
						result +=
							animationState +
							"{" +
							declarationsToBlock(keyframes[animationState]) +
							"}";
					}

					return result;
				}
				function declarationsToBlock(style) {
					var css = "";

					for (var prop in style) {
						var val = style[prop];

						if (typeof val === "string" || typeof val === "number") {
							css += hyphenateStyleName(prop) + ":" + val + ";";
						}
					} // trim trailing semicolon

					return css.slice(0, -1);
				}
				function keyframesBlockToRule(id, block) {
					return "@keyframes " + id + "{" + block + "}";
				}
				function fontFaceBlockToRule(id, block) {
					return "@font-face{font-family:" + id + ";" + block + "}";
				}
				function styleBlockToRule(selector, block) {
					return selector + "{" + block + "}";
				}

				/* eslint-env browser */
				var insertRuleIntoDevtools = function insertRuleIntoDevtools(
					selector,
					block
				) {
					// start after the . combinator and cut at the first : if there is one to cut out the pseudo classes
					var key = selector.substring(
						1,
						selector.indexOf(":") !== -1
							? selector.indexOf(":")
							: selector.length
					);
					var styles = {}; // split the declaration to catch vendor prefixing

					for (
						var _iterator = block.split(";"),
							_isArray = Array.isArray(_iterator),
							_i = 0,
							_iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();
						;

					) {
						var _ref;

						if (_isArray) {
							if (_i >= _iterator.length) break;
							_ref = _iterator[_i++];
						} else {
							_i = _iterator.next();
							if (_i.done) break;
							_ref = _i.value;
						}

						var _decl = _ref;
						if (
							_decl.trim() !== "" &&
							!window.__STYLETRON_DEVTOOLS__.atomicMap[key]
						)
							styles[_decl.substring(0, _decl.indexOf(":"))] = _decl.substring(
								_decl.indexOf(":") + 1,
								_decl.length
							);
					}

					window.__STYLETRON_DEVTOOLS__.atomicMap[key] = styles;
				};
				var hydrateDevtoolsRule = function hydrateDevtoolsRule(cssString) {
					var id = cssString.substring(0, 3);
					var block = cssString.substring(4, cssString.length - 1);
					insertRuleIntoDevtools(id, block);
				};

				/* eslint-env browser */
				var STYLES_HYDRATOR = /\.([^{:]+)(:[^{]+)?{(?:[^}]*;)?([^}]*?)}/g;
				var KEYFRAMES_HYRDATOR = /@keyframes ([^{]+)\{((?:[^{]+\{[^}]*\})*)\}/g;
				var FONT_FACE_HYDRATOR = /@font-face\{font-family:([^;]+);([^}]*)\}/g;

				function hydrateStyles(cache, hydrator, css) {
					var match;

					while ((match = hydrator.exec(css))) {
						var _match = match,
							id = _match[1],
							pseudo = _match[2],
							key = _match[3];

						if (true && window.__STYLETRON_DEVTOOLS__) {
							hydrateDevtoolsRule(match[0]);
						}

						var fullKey = pseudo ? "" + pseudo + key : key;
						cache.cache[fullKey] = id; // set cache without triggering side effects

						cache.idGenerator.increment(); // increment id
					}
				}

				function hydrate(cache, hydrator, css) {
					var match;

					while ((match = hydrator.exec(css))) {
						var _match2 = match,
							id = _match2[1],
							key = _match2[2];

						if (true && window.__STYLETRON_DEVTOOLS__) {
							hydrateDevtoolsRule(match[0]);
						}

						cache.cache[key] = id; // set cache without triggering side effects

						cache.idGenerator.increment(); // increment id
					}
				}

				var StyletronClient =
					/*#__PURE__*/
					(function () {
						function StyletronClient(opts) {
							var _this = this;

							if (opts === void 0) {
								opts = {};
							}

							this.styleElements = {};
							var styleIdGenerator = new SequentialIDGenerator(opts.prefix);

							var onNewStyle = function onNewStyle(cache, id, value) {
								var pseudo = value.pseudo,
									block = value.block;
								var sheet = _this.styleElements[cache.key].sheet;
								var selector = atomicSelector(id, pseudo);
								var rule = styleBlockToRule(selector, block);

								try {
									sheet.insertRule(rule, sheet.cssRules.length);

									if (true && window.__STYLETRON_DEVTOOLS__) {
										insertRuleIntoDevtools(selector, block);
									}
								} catch (e) {
									if (true) {
										// eslint-disable-next-line no-console
										console.warn(
											'Failed to inject CSS: "' +
												rule +
												'". Perhaps this has invalid or un-prefixed properties?'
										);
									}
								}
							}; // Setup style cache

							this.styleCache = new MultiCache(
								styleIdGenerator,
								function (media, _cache, insertBeforeMedia) {
									var styleElement = document.createElement("style");
									styleElement.media = media;

									if (insertBeforeMedia === void 0) {
										_this.container.appendChild(styleElement);
									} else {
										var insertBeforeIndex = findSheetIndexWithMedia(
											_this.container.children,
											insertBeforeMedia
										);

										_this.container.insertBefore(
											styleElement,
											_this.container.children[insertBeforeIndex]
										);
									}

									_this.styleElements[media] = styleElement;
								},
								onNewStyle
							);
							this.keyframesCache = new Cache(
								new SequentialIDGenerator(opts.prefix),
								function (cache, id, value) {
									_this.styleCache.getCache("");

									var sheet = _this.styleElements[""].sheet;
									var rule = keyframesBlockToRule(id, keyframesToBlock(value));

									try {
										sheet.insertRule(rule, sheet.cssRules.length);
									} catch (e) {
										if (true) {
											// eslint-disable-next-line no-console
											console.warn(
												'Failed to inject CSS: "' +
													rule +
													'". Perhaps this has invalid or un-prefixed properties?'
											);
										}
									}
								}
							);
							this.fontFaceCache = new Cache(
								new SequentialIDGenerator(opts.prefix),
								function (cache, id, value) {
									_this.styleCache.getCache("");

									var sheet = _this.styleElements[""].sheet;
									var rule = fontFaceBlockToRule(
										id,
										declarationsToBlock(value)
									);

									try {
										sheet.insertRule(rule, sheet.cssRules.length);
									} catch (e) {
										if (true) {
											// eslint-disable-next-line no-console
											console.warn(
												'Failed to inject CSS: "' +
													rule +
													'". Perhaps this has invalid or un-prefixed properties?'
											);
										}
									}
								}
							);

							if (opts.container) {
								this.container = opts.container;
							} // Hydrate

							if (opts.hydrate && opts.hydrate.length > 0) {
								// infer container from parent element
								if (!this.container) {
									var parentElement = opts.hydrate[0].parentElement;

									if (parentElement !== null && parentElement !== void 0) {
										this.container = parentElement;
									}
								}

								for (var i = 0; i < opts.hydrate.length; i++) {
									var element = opts.hydrate[i];
									var hydrateType = element.getAttribute("data-hydrate");

									if (hydrateType === "font-face") {
										hydrate(
											this.fontFaceCache,
											FONT_FACE_HYDRATOR,
											element.textContent
										);
										continue;
									}

									if (hydrateType === "keyframes") {
										hydrate(
											this.keyframesCache,
											KEYFRAMES_HYRDATOR,
											element.textContent
										);
										continue;
									}

									var key = element.media ? element.media : "";
									this.styleElements[key] = element;
									var cache = new Cache(styleIdGenerator, onNewStyle);
									cache.key = key;
									hydrateStyles(cache, STYLES_HYDRATOR, element.textContent);
									this.styleCache.sortedCacheKeys.push(key);
									this.styleCache.caches[key] = cache;
								}
							}

							if (!this.container) {
								if (document.head === null) {
									throw new Error(
										"No container provided and `document.head` was null"
									);
								}

								this.container = document.head;
							}
						}

						var _proto = StyletronClient.prototype;

						_proto.renderStyle = function renderStyle(style) {
							return injectStylePrefixed(this.styleCache, style, "", "");
						};

						_proto.renderFontFace = function renderFontFace(fontFace) {
							var key = declarationsToBlock(fontFace);
							return this.fontFaceCache.addValue(key, fontFace);
						};

						_proto.renderKeyframes = function renderKeyframes(keyframes) {
							var key = keyframesToBlock(keyframes);
							return this.keyframesCache.addValue(key, keyframes);
						};

						return StyletronClient;
					})();

				function findSheetIndexWithMedia(children, media) {
					var index = 0;

					for (; index < children.length; index++) {
						var child = children[index];

						if (child.tagName === "STYLE" && child.media === media) {
							return index;
						}
					}

					return -1;
				}

				function _objectWithoutProperties(source, excluded) {
					if (source == null) return {};
					var target = _objectWithoutPropertiesLoose(source, excluded);
					var key, i;
					if (Object.getOwnPropertySymbols) {
						var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
						for (i = 0; i < sourceSymbolKeys.length; i++) {
							key = sourceSymbolKeys[i];
							if (excluded.indexOf(key) >= 0) continue;
							if (!Object.prototype.propertyIsEnumerable.call(source, key))
								continue;
							target[key] = source[key];
						}
					}
					return target;
				}

				function _objectWithoutPropertiesLoose(source, excluded) {
					if (source == null) return {};
					var target = {};
					var sourceKeys = Object.keys(source);
					var key, i;
					for (i = 0; i < sourceKeys.length; i++) {
						key = sourceKeys[i];
						if (excluded.indexOf(key) >= 0) continue;
						target[key] = source[key];
					}
					return target;
				}

				var StyletronServer =
					/*#__PURE__*/
					(function () {
						function StyletronServer(opts) {
							var _this = this;

							if (opts === void 0) {
								opts = {};
							}

							this.styleRules = {
								"": ""
							};
							this.styleCache = new MultiCache(
								new SequentialIDGenerator(opts.prefix),
								function (media) {
									_this.styleRules[media] = "";
								},
								function (cache, id, value) {
									var pseudo = value.pseudo,
										block = value.block;
									_this.styleRules[cache.key] += styleBlockToRule(
										atomicSelector(id, pseudo),
										block
									);
								}
							);
							this.fontFaceRules = "";
							this.fontFaceCache = new Cache(
								new SequentialIDGenerator(opts.prefix),
								function (cache, id, value) {
									_this.fontFaceRules += fontFaceBlockToRule(
										id,
										declarationsToBlock(value)
									);
								}
							);
							this.keyframesRules = "";
							this.keyframesCache = new Cache(
								new SequentialIDGenerator(opts.prefix),
								function (cache, id, value) {
									_this.keyframesRules += keyframesBlockToRule(
										id,
										keyframesToBlock(value)
									);
								}
							);
						}

						var _proto = StyletronServer.prototype;

						_proto.renderStyle = function renderStyle(style) {
							return injectStylePrefixed(this.styleCache, style, "", "");
						};

						_proto.renderFontFace = function renderFontFace(fontFace) {
							var key = JSON.stringify(fontFace);
							return this.fontFaceCache.addValue(key, fontFace);
						};

						_proto.renderKeyframes = function renderKeyframes(keyframes) {
							var key = JSON.stringify(keyframes);
							return this.keyframesCache.addValue(key, keyframes);
						};

						_proto.getStylesheets = function getStylesheets() {
							return [].concat(
								this.keyframesRules.length
									? [
											{
												css: this.keyframesRules,
												attrs: {
													"data-hydrate": "keyframes"
												}
											}
									  ]
									: [],
								this.fontFaceRules.length
									? [
											{
												css: this.fontFaceRules,
												attrs: {
													"data-hydrate": "font-face"
												}
											}
									  ]
									: [],
								sheetify(this.styleRules, this.styleCache.getSortedCacheKeys())
							);
						};

						_proto.getStylesheetsHtml = function getStylesheetsHtml(className) {
							if (className === void 0) {
								className = "_styletron_hydrate_";
							}

							return generateHtmlString(this.getStylesheets(), className);
						};

						_proto.getCss = function getCss() {
							return (
								this.keyframesRules +
								this.fontFaceRules +
								stringify(this.styleRules, this.styleCache.getSortedCacheKeys())
							);
						};

						return StyletronServer;
					})();

				function generateHtmlString(sheets, className) {
					var html = "";

					for (var i = 0; i < sheets.length; i++) {
						var sheet = sheets[i];

						var _sheet$attrs = sheet.attrs,
							originalClassName = _sheet$attrs.class,
							rest = _objectWithoutProperties(_sheet$attrs, ["class"]);

						var attrs = Object.assign(
							{
								class: originalClassName
									? className + " " + originalClassName
									: className
							},
							rest
						);
						html +=
							"<style" + attrsToString(attrs) + ">" + sheet.css + "</style>";
					}

					return html;
				}

				function attrsToString(attrs) {
					var result = "";

					for (var attr in attrs) {
						var value = attrs[attr];

						if (value === true) {
							result += " " + attr;
						} else if (value !== false) {
							result += " " + attr + '="' + value + '"';
						}
					}

					return result;
				}

				function stringify(styleRules, sortedCacheKeys) {
					var result = "";
					sortedCacheKeys.forEach(function (cacheKey) {
						var rules = styleRules[cacheKey];

						if (cacheKey !== "") {
							result += "@media " + cacheKey + "{" + rules + "}";
						} else {
							result += rules;
						}
					});
					return result;
				}

				function sheetify(styleRules, sortedCacheKeys) {
					if (sortedCacheKeys.length === 0) {
						return [
							{
								css: "",
								attrs: {}
							}
						];
					}

					var sheets = [];
					sortedCacheKeys.forEach(function (cacheKey) {
						// omit media (cacheKey) attribute if empty
						var attrs =
							cacheKey === ""
								? {}
								: {
										media: cacheKey
								  };
						sheets.push({
							css: styleRules[cacheKey],
							attrs: attrs
						});
					});
					return sheets;
				}

				//# sourceMappingURL=browser.es5.es.js.map

				/***/
			},

		/***/ "../../node_modules/styletron-react/dist/browser.es5.es.js":
			/*!*****************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/styletron-react/dist/browser.es5.es.js ***!
  \*****************************************************************************************/
			/*! exports provided: DebugEngine, Provider, DevConsumer, useStyletron, createStyled, styled, withTransform, withStyle, withStyleDeep, withWrapper, autoComposeShallow, autoComposeDeep, staticComposeShallow, staticComposeDeep, dynamicComposeShallow, dynamicComposeDeep, createShallowMergeReducer, createDeepMergeReducer, composeStatic, composeDynamic, createStyledElementComponent, resolveStyle */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"DebugEngine",
					function () {
						return DebugEngine;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"Provider",
					function () {
						return Provider;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"DevConsumer",
					function () {
						return DevConsumer;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"useStyletron",
					function () {
						return useStyletron;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"createStyled",
					function () {
						return createStyled;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"styled",
					function () {
						return styled;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"withTransform",
					function () {
						return withTransform;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"withStyle",
					function () {
						return withStyle;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"withStyleDeep",
					function () {
						return withStyleDeep;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"withWrapper",
					function () {
						return withWrapper;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"autoComposeShallow",
					function () {
						return autoComposeShallow;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"autoComposeDeep",
					function () {
						return autoComposeDeep;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"staticComposeShallow",
					function () {
						return staticComposeShallow;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"staticComposeDeep",
					function () {
						return staticComposeDeep;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"dynamicComposeShallow",
					function () {
						return dynamicComposeShallow;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"dynamicComposeDeep",
					function () {
						return dynamicComposeDeep;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"createShallowMergeReducer",
					function () {
						return createShallowMergeReducer;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"createDeepMergeReducer",
					function () {
						return createDeepMergeReducer;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"composeStatic",
					function () {
						return composeStatic;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"composeDynamic",
					function () {
						return composeDynamic;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"createStyledElementComponent",
					function () {
						return createStyledElementComponent;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"resolveStyle",
					function () {
						return resolveStyle;
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var styletron_standard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! styletron-standard */ "../../node_modules/styletron-standard/dist/browser.es5.es.js"
				);

				/* eslint-env browser */

				/* global module */
				function addDebugMetadata(instance, stackIndex) {
					var _ref = new Error("stacktrace source"),
						stack = _ref.stack,
						stacktrace = _ref.stacktrace,
						message = _ref.message;

					instance.debug = {
						stackInfo: {
							stack: stack,
							stacktrace: stacktrace,
							message: message
						},
						stackIndex: stackIndex
					};
				} // DEVTOOLS SETUP

				var setupDevtoolsExtension = function setupDevtoolsExtension() {
					var atomicMap = {};
					var extensionsMap = new Map();
					var stylesMap = new Map();

					var getStyles = function getStyles(className) {
						var styles = {};

						if (typeof className !== "string") {
							return styles;
						}

						if (stylesMap.has(className)) {
							styles.styles = stylesMap.get(className);
							var classList = className.split(" ");

							if (classList.length) {
								var classes = {};
								classList.forEach(function (singleClassName) {
									classes[singleClassName] = atomicMap[singleClassName];
								});
								styles.classes = classes;
							}

							if (extensionsMap.has(className)) {
								var extension = extensionsMap.get(className);
								styles.extends = extension;
							}

							return styles;
						}
					};

					window.__STYLETRON_DEVTOOLS__ = {
						atomicMap: atomicMap,
						extensionsMap: extensionsMap,
						stylesMap: stylesMap,
						getStyles: getStyles
					};
				};

				var BrowserDebugEngine =
					/*#__PURE__*/
					(function () {
						function BrowserDebugEngine(worker) {
							if (!worker) {
								var workerBlob = new Blob(
									[
										'importScripts("https://unpkg.com/css-to-js-sourcemap-worker@2.0.5/worker.js")'
									],
									{
										type: "application/javascript"
									}
								);
								worker = new Worker(URL.createObjectURL(workerBlob));
								worker.postMessage({
									id: "init_wasm",
									url:
										"https://unpkg.com/css-to-js-sourcemap-worker@2.0.5/mappings.wasm"
								});
								worker.postMessage({
									id: "set_render_interval",
									interval: 120
								});

								if (true) {
									module.hot.addStatusHandler(function (status) {
										if (status === "dispose") {
											worker.postMessage({
												id: "invalidate"
											});
										}
									});
								}
							}

							this.worker = worker;
							this.counter = 0;

							this.worker.onmessage = function (msg) {
								var _msg$data = msg.data,
									id = _msg$data.id,
									css = _msg$data.css;

								if (id === "render_css" && css) {
									var style = document.createElement("style");
									style.appendChild(document.createTextNode(css));
									document.head.appendChild(style);
								}
							};
						}

						var _proto = BrowserDebugEngine.prototype;

						_proto.debug = function debug(_ref2) {
							var stackIndex = _ref2.stackIndex,
								stackInfo = _ref2.stackInfo;
							var className = "__debug-" + this.counter++;
							this.worker.postMessage({
								id: "add_mapped_class",
								className: className,
								stackInfo: stackInfo,
								stackIndex: stackIndex
							});
							return className;
						};

						return BrowserDebugEngine;
					})();

				var DebugEngine = BrowserDebugEngine;

				function _typeof(obj) {
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof(obj);
				}

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

				function _inheritsLoose(subClass, superClass) {
					subClass.prototype = Object.create(superClass.prototype);
					subClass.prototype.constructor = subClass;
					subClass.__proto__ = superClass;
				}

				/* eslint-env browser */

				/* eslint-disable no-unused-vars, no-redeclare, no-shadow */
				var noopEngine = {
					renderStyle: function renderStyle() {
						return "";
					},
					renderKeyframes: function renderKeyframes() {
						return "";
					},
					renderFontFace: function renderFontFace() {
						return "";
					}
				};
				var StyletronContext = Object(
					react__WEBPACK_IMPORTED_MODULE_0__["createContext"]
				)(noopEngine);
				var HydrationContext = Object(
					react__WEBPACK_IMPORTED_MODULE_0__["createContext"]
				)(false);
				var DebugEngineContext = Object(
					react__WEBPACK_IMPORTED_MODULE_0__["createContext"]
				)();
				var ThemeContext = Object(
					react__WEBPACK_IMPORTED_MODULE_0__["createContext"]
				)();

				var DevProvider =
					/*#__PURE__*/
					(function (_React$Component) {
						_inheritsLoose(DevProvider, _React$Component);

						function DevProvider(props) {
							var _this;

							_this = _React$Component.call(this) || this;
							_this.state = {
								hydrating: Boolean(props.debugAfterHydration)
							};
							return _this;
						}

						var _proto = DevProvider.prototype;

						_proto.componentDidMount = function componentDidMount() {
							{
								if (this.state.hydrating === true) {
									this.setState({
										hydrating: false
									});
								}
							}
						};

						_proto.render = function render() {
							return Object(
								react__WEBPACK_IMPORTED_MODULE_0__["createElement"]
							)(
								StyletronContext.Provider,
								{
									value: this.props.value
								},
								Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
									DebugEngineContext.Provider,
									{
										value: this.props.debug
									},
									Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
										HydrationContext.Provider,
										{
											value: this.state.hydrating
										},
										this.props.children
									)
								)
							);
						};

						return DevProvider;
					})(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

				var Provider = true ? DevProvider : undefined;

				if (true && !window.__STYLETRON_DEVTOOLS__) {
					setupDevtoolsExtension();
				} // TODO: more precise types

				function DevConsumer(props) {
					return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
						StyletronContext.Consumer,
						null,
						function (styletronEngine) {
							return Object(
								react__WEBPACK_IMPORTED_MODULE_0__["createElement"]
							)(DebugEngineContext.Consumer, null, function (debugEngine) {
								return Object(
									react__WEBPACK_IMPORTED_MODULE_0__["createElement"]
								)(HydrationContext.Consumer, null, function (hydrating) {
									return props.children(
										styletronEngine,
										debugEngine,
										hydrating
									);
								});
							});
						}
					);
				}
				var Consumer = true ? DevConsumer : undefined;

				function checkNoopEngine(engine) {
					// if no engine provided, we default to no-op, handy for tests
					// however, print a warning in other envs
					if (true) {
						engine === noopEngine && // eslint-disable-next-line no-console
							console.warn(
								true
									? '\nStyletron has been switched to a no-op (test) mode.\n\nA Styletron styled component was rendered, but no Styletron engine instance was provided in React context.\n\nDid you forget to provide a Styletron engine instance to React context via using the Styletron provider component?\n\nNote: Providers and Consumers must come from the exact same React.createContext call to work.\nIf your app has multiple instances of the "styletron-react" package in your node_module tree,\nyour Provider may be coming from a different React.createContext call, which means the styled components\nwill not recieve the provided engine instance. This scenario can arise, for example, when using "npm link".\n'
									: undefined
							);
					}
				}

				function useStyletron() {
					var styletronEngine = Object(
						react__WEBPACK_IMPORTED_MODULE_0__["useContext"]
					)(StyletronContext);
					var debugEngine = Object(
						react__WEBPACK_IMPORTED_MODULE_0__["useContext"]
					)(DebugEngineContext);
					var hydrating = Object(
						react__WEBPACK_IMPORTED_MODULE_0__["useContext"]
					)(HydrationContext);
					checkNoopEngine(styletronEngine);
					var debugClassName = Object(
						react__WEBPACK_IMPORTED_MODULE_0__["useRef"]
					)("");
					var prevDebugClassNameDeps = Object(
						react__WEBPACK_IMPORTED_MODULE_0__["useRef"]
					)([]);
					return [
						function css(style) {
							var className = Object(
								styletron_standard__WEBPACK_IMPORTED_MODULE_1__["driver"]
							)(style, styletronEngine);

							if (false) {
							}

							var _ref = new Error("stacktrace source"),
								stack = _ref.stack,
								message = _ref.message;

							var nextDeps = [debugEngine, hydrating];

							if (
								prevDebugClassNameDeps.current[0] !== nextDeps[0] ||
								prevDebugClassNameDeps.current[1] !== nextDeps[1]
							) {
								if (debugEngine && !hydrating) {
									debugClassName.current = debugEngine.debug({
										stackInfo: {
											stack: stack,
											message: message
										},
										stackIndex: 1
									});
								}

								prevDebugClassNameDeps.current = nextDeps;
							}

							if (debugClassName.current) {
								return debugClassName.current + " " + className;
							}

							return className;
						}
					];
				}
				function createStyled(_ref2) {
					var getInitialStyle$$1 = _ref2.getInitialStyle,
						driver$$1 = _ref2.driver,
						wrapper = _ref2.wrapper;

					function styled(base, styleArg) {
						if (true) {
							if (base.__STYLETRON__) {
								/* eslint-disable no-console */
								console.warn(
									"It appears you are passing a styled component into `styled`."
								);
								console.warn(
									"For composition with existing styled components, use `withStyle` or `withTransform` instead."
								);
								/* eslint-enable no-console */
							}
						}

						var baseStyletron = {
							reducers: [],
							base: base,
							driver: driver$$1,
							getInitialStyle: getInitialStyle$$1,
							wrapper: wrapper
						};

						if (true) {
							addDebugMetadata(baseStyletron, 2);
						}

						return createStyledElementComponent(
							autoComposeShallow(baseStyletron, styleArg)
						);
					}

					return styled;
				}
				var styled = createStyled({
					getInitialStyle:
						styletron_standard__WEBPACK_IMPORTED_MODULE_1__["getInitialStyle"],
					driver: styletron_standard__WEBPACK_IMPORTED_MODULE_1__["driver"],
					wrapper: function wrapper(Component$$1) {
						return Component$$1;
					}
				});
				function withTransform(component, transformer) {
					var styletron = component.__STYLETRON__;

					if (true) {
						addDebugMetadata(styletron, 2);
					}

					return createStyledElementComponent(
						composeDynamic(styletron, transformer)
					);
				}
				var withStyle = withStyleDeep;
				function withStyleDeep(component, styleArg) {
					var styletron = component.__STYLETRON__;

					if (true) {
						if (!styletron) {
							/* eslint-disable no-console */
							console.warn(
								"The first parameter to `withStyle` must be a styled component (without extra wrappers)."
							);
							/* eslint-enable no-console */
						}
					}

					if (true) {
						addDebugMetadata(styletron, 2);
						return createStyledElementComponent(
							addExtension(
								autoComposeDeep(styletron, styleArg),
								component,
								styleArg
							)
						);
					} else {
					}
				}
				function withWrapper(component, wrapper) {
					var styletron = component.__STYLETRON__;

					if (true) {
						if (!styletron) {
							/* eslint-disable no-console */
							console.warn(
								"The first parameter to `withWrapper` must be a styled component (without extra wrappers)."
							);
							/* eslint-enable no-console */
						}
					}

					var composed = {
						getInitialStyle: styletron.getInitialStyle,
						base: styletron.base,
						driver: styletron.driver,
						wrapper: wrapper,
						reducers: styletron.reducers
					};

					if (true) {
						addDebugMetadata(composed, 2);
					}

					return createStyledElementComponent(composed);
				}
				function autoComposeShallow(styletron, styleArg) {
					if (typeof styleArg === "function") {
						return dynamicComposeShallow(styletron, styleArg);
					}

					return staticComposeShallow(styletron, styleArg);
				}

				function addExtension(composed, component, styleArg) {
					return Object.assign({}, composed, {
						ext: {
							with: styleArg,
							name: component.displayName,
							base: component.__STYLETRON__.base,
							getInitialStyle: component.__STYLETRON__.reducers.length
								? component.__STYLETRON__.reducers[0].reducer
								: component.__STYLETRON__.getInitialStyle
						}
					});
				}

				function autoComposeDeep(styletron, styleArg) {
					if (typeof styleArg === "function") {
						return dynamicComposeDeep(styletron, styleArg);
					}

					return staticComposeDeep(styletron, styleArg);
				}
				function staticComposeShallow(styletron, style) {
					return composeStatic(styletron, createShallowMergeReducer(style));
				}
				function staticComposeDeep(styletron, style) {
					return composeStatic(styletron, createDeepMergeReducer(style));
				}
				function dynamicComposeShallow(styletron, styleFn) {
					return composeDynamic(styletron, function (style, props) {
						return shallowMerge(style, styleFn(props));
					});
				}
				function dynamicComposeDeep(styletron, styleFn) {
					return composeDynamic(styletron, function (style, props) {
						return deepMerge(style, styleFn(props));
					});
				}
				function createShallowMergeReducer(style) {
					return {
						reducer: function reducer(inputStyle) {
							return shallowMerge(inputStyle, style);
						},
						assignmentCommutative: true,
						factory: createShallowMergeReducer,
						style: style
					};
				}
				function createDeepMergeReducer(style) {
					return {
						reducer: function reducer(inputStyle) {
							return deepMerge(inputStyle, style);
						},
						assignmentCommutative: true,
						factory: createDeepMergeReducer,
						style: style
					};
				}
				function composeStatic(styletron, reducerContainer) {
					if (styletron.reducers.length === 0) {
						var style = reducerContainer.reducer(styletron.getInitialStyle());
						var result = {
							reducers: styletron.reducers,
							base: styletron.base,
							driver: styletron.driver,
							wrapper: styletron.wrapper,
							getInitialStyle: function getInitialStyle$$1() {
								return style;
							}
						};

						if (true) {
							result.debug = styletron.debug;
						}

						return result;
					} else {
						var last = styletron.reducers[0];

						if (
							last.assignmentCommutative === true &&
							reducerContainer.assignmentCommutative === true
						) {
							var composed = reducerContainer.reducer(last.style);
							var _result = {
								getInitialStyle: styletron.getInitialStyle,
								base: styletron.base,
								driver: styletron.driver,
								wrapper: styletron.wrapper,
								reducers: [last.factory(composed)].concat(
									styletron.reducers.slice(1)
								)
							};

							if (true) {
								_result.debug = styletron.debug;
							}

							return _result;
						}

						return composeDynamic(styletron, reducerContainer.reducer);
					}
				}
				function composeDynamic(styletron, reducer) {
					var composed = {
						getInitialStyle: styletron.getInitialStyle,
						base: styletron.base,
						driver: styletron.driver,
						wrapper: styletron.wrapper,
						reducers: [
							{
								assignmentCommutative: false,
								reducer: reducer
							}
						].concat(styletron.reducers)
					};

					if (true) {
						composed.debug = styletron.debug;
					}

					return composed;
				}
				function createStyledElementComponent(styletron) {
					var reducers = styletron.reducers,
						base = styletron.base,
						driver$$1 = styletron.driver,
						wrapper = styletron.wrapper,
						getInitialStyle$$1 = styletron.getInitialStyle,
						ext = styletron.ext;

					if (true) {
						var debugStackInfo, debugStackIndex;

						if (styletron.debug) {
							debugStackInfo = styletron.debug.stackInfo;
							debugStackIndex = styletron.debug.stackIndex;
						}
					}

					if (true) {
						var debugClassName;
					}

					var StyledElement = Object(
						react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]
					)(function (props, ref) {
						return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
							Consumer,
							null,
							function (styletron, debugEngine, hydrating) {
								checkNoopEngine(styletron);
								var elementProps = omitPrefixedKeys(props);
								var style = resolveStyle(getInitialStyle$$1, reducers, props);

								if (props.$style) {
									if (typeof props.$style === "function") {
										style = deepMerge(style, props.$style(props));
									} else {
										style = deepMerge(style, props.$style);
									}
								}

								var styleClassString = driver$$1(style, styletron);
								var Element = props.$as ? props.$as : base;
								elementProps.className = props.className
									? props.className + " " + styleClassString
									: styleClassString;

								if (true && debugEngine && !hydrating) {
									if (!debugClassName) {
										debugClassName = debugEngine.debug({
											stackInfo: debugStackInfo,
											stackIndex: debugStackIndex
										});
									}

									var joined = debugClassName + " " + elementProps.className;
									elementProps.className = joined;
								}

								if (true && window.__STYLETRON_DEVTOOLS__) {
									window.__STYLETRON_DEVTOOLS__.stylesMap.set(
										elementProps.className,
										style
									);

									if (ext) {
										window.__STYLETRON_DEVTOOLS__.extensionsMap.set(
											elementProps.className,
											{
												base: ext.base,
												displayName: ext.name,
												initialStyles: ext.getInitialStyle({}, props),
												styleOverrides:
													typeof ext.with === "function"
														? ext.with(props)
														: ext.with
											}
										);
									}
								}

								if (props.$ref) {
									// eslint-disable-next-line no-console
									console.warn(
										"The prop `$ref` has been deprecated. Use `ref` instead. Refs are now forwarded with React.forwardRef."
									);
								}

								return Object(
									react__WEBPACK_IMPORTED_MODULE_0__["createElement"]
								)(
									Element,
									_extends({}, elementProps, {
										ref: ref || props.$ref
									})
								);
							}
						);
					});
					var Wrapped = wrapper(StyledElement);
					Wrapped.__STYLETRON__ = {
						base: base,
						reducers: reducers,
						driver: driver$$1,
						wrapper: wrapper,
						getInitialStyle: getInitialStyle$$1
					};

					if (true) {
						var displayName;

						if (typeof base === "string") {
							displayName = base;
						} else if (base.displayName) {
							displayName = base.displayName;
						} else if (base.name) {
							displayName = base.name;
						} else {
							displayName = "Unknown";
						}

						Wrapped.displayName = "Styled(" + displayName + ")";
					}

					return Wrapped;
				} // Utility functions

				function resolveStyle(getInitialStyle$$1, reducers, props) {
					var result = getInitialStyle$$1();
					var i = reducers.length;

					while (i--) {
						// Cast to allow passing unused props param in case of static reducer
						var reducer = reducers[i].reducer;
						result = reducer(result, props);
					}

					return result;
				}

				function isObject(x) {
					return _typeof(x) === "object" && x !== null;
				}

				function omitPrefixedKeys(source) {
					var result = {};

					for (var key in source) {
						if (key[0] !== "$") {
							result[key] = source[key];
						}
					}

					return result;
				}

				function deepMerge(a, b) {
					var result = assign({}, a);

					for (var key in b) {
						var val = b[key];

						if (isObject(val) && isObject(a[key])) {
							result[key] = deepMerge(a[key], val);
						} else {
							result[key] = val;
						}
					}

					return result;
				}

				function shallowMerge(a, b) {
					return assign(assign({}, a), b);
				}

				function assign(target, source) {
					for (var key in source) {
						target[key] = source[key];
					}

					return target;
				}

				//# sourceMappingURL=browser.es5.es.js.map

				/***/
			},

		/***/ "../../node_modules/styletron-standard/dist/browser.es5.es.js":
			/*!********************************************************************************************!*\
  !*** /Users/ryansoury/dev/wagecall/node_modules/styletron-standard/dist/browser.es5.es.js ***!
  \********************************************************************************************/
			/*! exports provided: driver, getInitialStyle, renderDeclarativeRules */
			/***/ function (module, __webpack_exports__, __webpack_require__) {
				"use strict";
				__webpack_require__.r(__webpack_exports__);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"driver",
					function () {
						return driver;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"getInitialStyle",
					function () {
						return getInitialStyle;
					}
				);
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					"renderDeclarativeRules",
					function () {
						return renderDeclarativeRules;
					}
				);
				function _typeof(obj) {
					if (
						typeof Symbol === "function" &&
						typeof Symbol.iterator === "symbol"
					) {
						_typeof = function _typeof(obj) {
							return typeof obj;
						};
					} else {
						_typeof = function _typeof(obj) {
							return obj &&
								typeof Symbol === "function" &&
								obj.constructor === Symbol &&
								obj !== Symbol.prototype
								? "symbol"
								: typeof obj;
						};
					}
					return _typeof(obj);
				}

				// Note: $Shape is needed to make polymorphic withStyle refinements work correctly
				// It seems functions satisfy this type without $Shape
				// See: https://github.com/facebook/flow/issues/6784
				//
				//
				//
				//
				//
				//
				function driver(style, styletron) {
					var tx = renderDeclarativeRules(style, styletron);
					return styletron.renderStyle(tx);
				}
				function getInitialStyle() {
					return {};
				}
				function renderDeclarativeRules(style, styletron) {
					for (var key in style) {
						var val = style[key];

						if (key === "animationName" && typeof val !== "string") {
							style.animationName = styletron.renderKeyframes(val);
							continue;
						}

						if (key === "fontFamily" && typeof val !== "string") {
							if (Array.isArray(val)) {
								var result = "";

								for (
									var _iterator = val,
										_isArray = Array.isArray(_iterator),
										_i = 0,
										_iterator = _isArray
											? _iterator
											: _iterator[Symbol.iterator]();
									;

								) {
									var _ref;

									if (_isArray) {
										if (_i >= _iterator.length) break;
										_ref = _iterator[_i++];
									} else {
										_i = _iterator.next();
										if (_i.done) break;
										_ref = _i.value;
									}

									var _font = _ref;

									if (_typeof(_font) === "object") {
										result += styletron.renderFontFace(_font) + ",";
									} else if (typeof _font === "string") {
										result += _font + ",";
									}
								}

								style.fontFamily = result.slice(0, -1);
								continue;
							} else {
								style.fontFamily = styletron.renderFontFace(val);
								continue;
							}
						}

						if (_typeof(val) === "object" && val !== null) {
							renderDeclarativeRules(val, styletron);
						}
					}

					return style;
				}

				//# sourceMappingURL=browser.es5.es.js.map

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
				var description =
					"Wagecall allows you to offer your customers or audience access to your expertise, advice or care through a paid phone call.";
				var url = "https://www.wagecall.com/";
				module.exports = {
					url: url,
					titleTemplate: "Wagecall - %s",
					title: "Earn a wage, offer a call!",
					description: description,
					canonical: url,
					openGraph: {
						type: "website",
						url: url,
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
				var _require = __webpack_require__(
						/*! styletron-engine-atomic */ "../../node_modules/styletron-engine-atomic/dist/browser.es5.es.js"
					),
					Client = _require.Client,
					Server = _require.Server;

				var _require2 = __webpack_require__(
						/*! styletron-react */ "../../node_modules/styletron-react/dist/browser.es5.es.js"
					),
					DebugEngine = _require2.DebugEngine;

				var constants = __webpack_require__(
					/*! ./constants */ "./config/constants.js"
				);

				var getHydrateClass = function getHydrateClass() {
					return document.getElementsByClassName(constants.HYDRATE_CLASS);
				};

				module.exports.engine = false
					? undefined
					: new Client({
							hydrate: getHydrateClass()
					  });
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
				/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js"
				);
				/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
				);
				/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js"
				);
				/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js"
				);
				/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"
				);
				/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
					/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"
				);
				/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
					/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
					/*! react */ "../../node_modules/react/index.js"
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
					react__WEBPACK_IMPORTED_MODULE_7__
				);
				/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
					/*! next/app */ "../../node_modules/next/app.js"
				);
				/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
					next_app__WEBPACK_IMPORTED_MODULE_8__
				);
				/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
					/*! baseui */ "../../node_modules/baseui/esm/index.js"
				);
				/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
					/*! styletron-react */ "../../node_modules/styletron-react/dist/browser.es5.es.js"
				);
				/* harmony import */ var baseui_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
					/*! baseui/toast */ "../../node_modules/baseui/esm/toast/index.js"
				);
				/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
					/*! next-seo */ "../../node_modules/next-seo/lib/index.js"
				);
				/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
					next_seo__WEBPACK_IMPORTED_MODULE_12__
				);
				/* harmony import */ var react_fastclick__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
					/*! react-fastclick */ "../../node_modules/react-fastclick/src/index.js"
				);
				/* harmony import */ var react_fastclick__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
					react_fastclick__WEBPACK_IMPORTED_MODULE_13__
				);
				/* harmony import */ var _config_styletron__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
					/*! @config/styletron */ "./config/styletron.js"
				);
				/* harmony import */ var _config_styletron__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(
					_config_styletron__WEBPACK_IMPORTED_MODULE_14__
				);
				/* harmony import */ var _config_seo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
					/*! @config/seo */ "./config/seo.js"
				);
				/* harmony import */ var _config_seo__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(
					_config_seo__WEBPACK_IMPORTED_MODULE_15__
				);
				/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
					/*! setimmediate */ "../../node_modules/setimmediate/setImmediate.js"
				);
				/* harmony import */ var setimmediate__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(
					setimmediate__WEBPACK_IMPORTED_MODULE_16__
				);
				/* harmony import */ var modern_normalize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
					/*! modern-normalize */ "../../node_modules/modern-normalize/modern-normalize.css"
				);
				/* harmony import */ var modern_normalize__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(
					modern_normalize__WEBPACK_IMPORTED_MODULE_17__
				);
				/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
					/*! @/styles.css */ "./src/styles.css"
				);
				/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(
					_styles_css__WEBPACK_IMPORTED_MODULE_18__
				);

				var _jsxFileName =
					"/Users/ryansoury/dev/wagecall/packages/wagecall/src/pages/_app.jsx";
				var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

				function _createSuper(Derived) {
					return function () {
						var Super = Object(
								_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[
									"default"
								]
							)(Derived),
							result;
						if (_isNativeReflectConstruct()) {
							var NewTarget = Object(
								_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[
									"default"
								]
							)(this).constructor;
							result = Reflect.construct(Super, arguments, NewTarget);
						} else {
							result = Super.apply(this, arguments);
						}
						return Object(
							_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[
								"default"
							]
						)(this, result);
					};
				}

				function _isNativeReflectConstruct() {
					if (typeof Reflect === "undefined" || !Reflect.construct)
						return false;
					if (Reflect.construct.sham) return false;
					if (typeof Proxy === "function") return true;
					try {
						Date.prototype.toString.call(
							Reflect.construct(Date, [], function () {})
						);
						return true;
					} catch (e) {
						return false;
					}
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
								Object(
									_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[
										"default"
									]
								)(target, key, source[key]);
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

				var theme = _objectSpread(
					{},
					baseui__WEBPACK_IMPORTED_MODULE_9__["LightTheme"],
					{
						mediaQuery: {
							small: "@media screen and (min-width: ".concat(
								baseui__WEBPACK_IMPORTED_MODULE_9__["LightTheme"].breakpoints
									.small,
								"px)"
							),
							medium: "@media screen and (min-width: ".concat(
								baseui__WEBPACK_IMPORTED_MODULE_9__["LightTheme"].breakpoints
									.medium,
								"px)"
							),
							large: "@media screen and (min-width: ".concat(
								baseui__WEBPACK_IMPORTED_MODULE_9__["LightTheme"].breakpoints
									.large,
								"px)"
							),
							maxSmall: "@media screen and (max-width: ".concat(
								baseui__WEBPACK_IMPORTED_MODULE_9__["LightTheme"].breakpoints
									.medium - 1,
								"px)"
							),
							maxMedium: "@media screen and (max-width: ".concat(
								baseui__WEBPACK_IMPORTED_MODULE_9__["LightTheme"].breakpoints
									.large - 1,
								"px)"
							)
						}
					}
				);

				var Container = Object(baseui__WEBPACK_IMPORTED_MODULE_9__["styled"])(
					"div",
					{
						maxWidth: "1024px",
						margin: "0 auto",
						width: "100%"
					}
				);

				var App = /*#__PURE__*/ (function (_NextApp) {
					Object(
						_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[
							"default"
						]
					)(App, _NextApp);

					var _super = _createSuper(App);

					function App() {
						Object(
							_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[
								"default"
							]
						)(this, App);

						return _super.apply(this, arguments);
					}

					Object(
						_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[
							"default"
						]
					)(App, [
						{
							key: "componentDidMount",
							value: function componentDidMount() {
								if (true) {
									react_fastclick__WEBPACK_IMPORTED_MODULE_13___default()();
								}
							}
						},
						{
							key: "render",
							value: function render() {
								var _this$props = this.props,
									Component = _this$props.Component,
									pageProps = _this$props.pageProps;
								return __jsx(
									styletron_react__WEBPACK_IMPORTED_MODULE_10__["Provider"],
									{
										value:
											_config_styletron__WEBPACK_IMPORTED_MODULE_14__["engine"],
										debug:
											_config_styletron__WEBPACK_IMPORTED_MODULE_14__["debug"],
										debugAfterHydration: true,
										__self: this,
										__source: {
											fileName: _jsxFileName,
											lineNumber: 48,
											columnNumber: 4
										}
									},
									__jsx(
										baseui__WEBPACK_IMPORTED_MODULE_9__["BaseProvider"],
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
											next_seo__WEBPACK_IMPORTED_MODULE_12__["DefaultSeo"],
											Object(
												_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
													"default"
												]
											)(
												{},
												_config_seo__WEBPACK_IMPORTED_MODULE_15___default.a,
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
											baseui_toast__WEBPACK_IMPORTED_MODULE_11__[
												"ToasterContainer"
											],
											{
												placement:
													baseui_toast__WEBPACK_IMPORTED_MODULE_11__[
														"PLACEMENT"
													].topRight,
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
													Object(
														_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
															"default"
														]
													)({}, pageProps, {
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
					]);

					return App;
				})(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

				/* harmony default export */ __webpack_exports__["default"] = App;

				/***/
			},

		/***/ "./src/styles.css":
			/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				var api = __webpack_require__(
					/*! ../../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
				);
				var content = __webpack_require__(
					/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "../../node_modules/next/node_modules/css-loader/dist/cjs.js?!../../node_modules/next/dist/compiled/postcss-loader/index.js?!./src/styles.css"
				);

				content = content.__esModule ? content.default : content;

				if (typeof content === "string") {
					content = [[module.i, content, ""]];
				}

				var options = {};

				options.insert = function (element) {
					// These elements should always exist. If they do not,
					// this code should fail.
					var anchorElement = document.querySelector(
						"#__next_css__DO_NOT_USE__"
					);
					var parentNode = anchorElement.parentNode; // Normally <head>
					// Each style tag should be placed right before our
					// anchor. By inserting before and not after, we do not
					// need to track the last inserted element.
					parentNode.insertBefore(element, anchorElement); // Remember: this is development only code.
					//
					// After styles are injected, we need to remove the
					// <style> tags that set `body { display: none; }`.
					//
					// We use `requestAnimationFrame` as a way to defer
					// this operation since there may be multiple style
					// tags.
					(self.requestAnimationFrame || setTimeout)(function () {
						for (
							var x = document.querySelectorAll("[data-next-hide-fouc]"),
								i = x.length;
							i--;

						) {
							x[i].parentNode.removeChild(x[i]);
						}
					});
				};
				options.singleton = false;

				var update = api(content, options);

				if (true) {
					if (!content.locals || module.hot.invalidate) {
						var isEqualLocals = function isEqualLocals(a, b) {
							if ((!a && b) || (a && !b)) {
								return false;
							}

							var p;

							for (p in a) {
								if (a[p] !== b[p]) {
									return false;
								}
							}

							for (p in b) {
								if (!a[p]) {
									return false;
								}
							}

							return true;
						};
						var oldLocals = content.locals;

						module.hot.accept(
							/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "../../node_modules/next/node_modules/css-loader/dist/cjs.js?!../../node_modules/next/dist/compiled/postcss-loader/index.js?!./src/styles.css",
							function () {
								var newContent = __webpack_require__(
									/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "../../node_modules/next/node_modules/css-loader/dist/cjs.js?!../../node_modules/next/dist/compiled/postcss-loader/index.js?!./src/styles.css"
								);

								newContent = newContent.__esModule
									? newContent.default
									: newContent;

								if (typeof newContent === "string") {
									newContent = [[module.i, newContent, ""]];
								}

								if (!isEqualLocals(oldLocals, newContent.locals)) {
									module.hot.invalidate();

									return;
								}

								oldLocals = newContent.locals;

								update(newContent);
							}
						);
					}

					module.hot.dispose(function () {
						update();
					});
				}

				module.exports = content.locals || {};

				/***/
			},

		/***/ 0:
			/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.jsx&hotRouterUpdates=true /Users/ryansoury/dev/wagecall/node_modules/next/dist/client/router.js ***!
  \**********************************************************************************************************************************************************************************************/
			/*! no static exports found */
			/***/ function (module, exports, __webpack_require__) {
				__webpack_require__(
					/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.jsx&hotRouterUpdates=true! */ "../../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.jsx&hotRouterUpdates=true!./"
				);
				module.exports = __webpack_require__(
					/*! /Users/ryansoury/dev/wagecall/node_modules/next/dist/client/router.js */ "../../node_modules/next/dist/client/router.js"
				);

				/***/
			},

		/***/ "dll-reference dll_2792696c4305f10043ec":
			/*!*******************************************!*\
  !*** external "dll_2792696c4305f10043ec" ***!
  \*******************************************/
			/*! no static exports found */
			/***/ function (module, exports) {
				module.exports = dll_2792696c4305f10043ec;

				/***/
			}
	},
	[[0, "static/runtime/webpack.js"]]
]);
//# sourceMappingURL=_app.js.map

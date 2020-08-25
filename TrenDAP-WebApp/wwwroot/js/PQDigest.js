/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./tsx/TrenDAP.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./tsx/TrenDAP.tsx":
/*!*************************!*\
  !*** ./tsx/TrenDAP.tsx ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
//******************************************************************************************************
//  TrenDAP.tsx - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  08/25/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************



var TrenDAP = function (props) {
    //const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ './Home/Home'));
    //const Trending = React.lazy(() => import(/* webpackChunkName: "Trending" */ './Trending/Trending'));
    //const MeterAvailability = React.lazy(() => import(/* webpackChunkName: "MeterAvailability" */ './MeterAvailability/MeterAvailability'));
    //const Lightning = React.lazy(() => import(/* webpackChunkName: "Lightning" */ './Lightning/Lightning'));
    //const EventSearch = React.lazy(() => import(/* webpackChunkName: "EventSearch" */ './EventSearch/EventSearch'));
    //const WaveformViewer = React.lazy(() => import(/* webpackChunkName: "WaveformViewer" */ './WaveformViewer/WaveformViewer'));
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", { className: "navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3", style: { height: 75 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container-fluid" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "col-sm-3 col-md-2 mr-0", style: { textAlign: 'center' }, href: "https://www.gridprotectionalliance.org" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { width: 400, margin: 0 }, src: "../Image/PQDigest.png" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "navbar-nav flex-grow-1" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link " + (location.pathname == '/' ? "active" : ""), href: "/" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { height: 36 }, src: "/Image/home.png" })),
                                "Home")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link " + (location.pathname == '/Trending' ? "active" : ""), href: "/Trending" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { height: 36 }, src: "/Image/trending.png" })),
                                "Trending")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link " + (location.pathname == '/EventSearch' ? "active" : ""), href: "/EventSearch" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { height: 36 }, src: "/Image/search.png" })),
                                "Find Events")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link " + (location.pathname == '/Lightning' ? "active" : ""), href: "/Lightning" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { height: 36 }, src: "/Image/lightning.png" })),
                                "Lightning")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link " + (location.pathname == '/MeterAvailability' ? "active" : ""), href: "/MeterAvailability" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { style: { height: 36 }, src: "/Image/availability.png" })),
                                "Meter Availability")),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: "nav-item" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { style: { marginTop: 4 }, className: "nav-link", href: "#" }, "Sign out")))))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container-fluid", style: { top: 75, position: 'absolute', width: '100%', height: 'calc(100% - 135px)', overflow: 'hidden' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { height: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col", style: { width: '100%', height: 'inherit', padding: '0 0 0 0', overflow: 'hidden' } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Loading...") })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", { className: "border-top footer text-muted" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "container-fluid" }, "\u00A9 2020 - TrenDAP"))));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TrenDAP, null), document.getElementById('window'));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "ReactRouterDOM" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRouterDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHN4L1RyZW5EQVAudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJvdXRlckRPTVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3R0FBd0c7QUFDeEcsc0JBQXNCO0FBQ3RCLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7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Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJqcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90c3gvVHJlbkRBUC50c3hcIik7XG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgVHJlbkRBUC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDgvMjUvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIlxyXG5cclxuXHJcbmNvbnN0IFRyZW5EQVA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKHByb3BzOiB7fSkgPT4ge1xyXG4gICAgLy9jb25zdCBIb21lID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJIb21lXCIgKi8gJy4vSG9tZS9Ib21lJykpO1xyXG4gICAgLy9jb25zdCBUcmVuZGluZyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiVHJlbmRpbmdcIiAqLyAnLi9UcmVuZGluZy9UcmVuZGluZycpKTtcclxuICAgIC8vY29uc3QgTWV0ZXJBdmFpbGFiaWxpdHkgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIk1ldGVyQXZhaWxhYmlsaXR5XCIgKi8gJy4vTWV0ZXJBdmFpbGFiaWxpdHkvTWV0ZXJBdmFpbGFiaWxpdHknKSk7XHJcbiAgICAvL2NvbnN0IExpZ2h0bmluZyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiTGlnaHRuaW5nXCIgKi8gJy4vTGlnaHRuaW5nL0xpZ2h0bmluZycpKTtcclxuICAgIC8vY29uc3QgRXZlbnRTZWFyY2ggPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkV2ZW50U2VhcmNoXCIgKi8gJy4vRXZlbnRTZWFyY2gvRXZlbnRTZWFyY2gnKSk7XHJcbiAgICAvL2NvbnN0IFdhdmVmb3JtVmlld2VyID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJXYXZlZm9ybVZpZXdlclwiICovICcuL1dhdmVmb3JtVmlld2VyL1dhdmVmb3JtVmlld2VyJykpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gbmF2YmFyLXRvZ2dsZWFibGUtc20gbmF2YmFyLWxpZ2h0IGJnLXdoaXRlIGJvcmRlci1ib3R0b20gYm94LXNoYWRvdyBtYi0zXCIgc3R5bGU9e3sgaGVpZ2h0OiA3NSB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLW1kLTIgbXItMFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0gaHJlZj1cImh0dHBzOi8vd3d3LmdyaWRwcm90ZWN0aW9uYWxsaWFuY2Uub3JnXCI+PGltZyBzdHlsZT17eyB3aWR0aDogNDAwLCBtYXJnaW46IDAgfX0gc3JjPXtcIi4uL0ltYWdlL1BRRGlnZXN0LnBuZ1wifSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBkLXNtLWlubGluZS1mbGV4IGZsZXgtc20tcm93LXJldmVyc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgZmxleC1ncm93LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17XCJuYXYtbGluayBcIiArIChsb2NhdGlvbi5wYXRobmFtZSA9PSAnLycgPyBcImFjdGl2ZVwiIDogXCJcIil9IGhyZWY9XCIvXCI+PHNwYW4+PGltZyBzdHlsZT17eyBoZWlnaHQ6IDM2IH19IHNyYz1cIi9JbWFnZS9ob21lLnBuZ1wiIC8+PC9zcGFuPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rIFwiICsgKGxvY2F0aW9uLnBhdGhuYW1lID09ICcvVHJlbmRpbmcnID8gXCJhY3RpdmVcIiA6IFwiXCIpfSBocmVmPVwiL1RyZW5kaW5nXCI+PHNwYW4+PGltZyBzdHlsZT17eyBoZWlnaHQ6IDM2IH19IHNyYz1cIi9JbWFnZS90cmVuZGluZy5wbmdcIiAvPjwvc3Bhbj5UcmVuZGluZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmsgXCIgKyAobG9jYXRpb24ucGF0aG5hbWUgPT0gJy9FdmVudFNlYXJjaCcgPyBcImFjdGl2ZVwiIDogXCJcIil9IGhyZWY9XCIvRXZlbnRTZWFyY2hcIj48c3Bhbj48aW1nIHN0eWxlPXt7IGhlaWdodDogMzYgfX0gc3JjPVwiL0ltYWdlL3NlYXJjaC5wbmdcIiAvPjwvc3Bhbj5GaW5kIEV2ZW50czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmsgXCIgKyAobG9jYXRpb24ucGF0aG5hbWUgPT0gJy9MaWdodG5pbmcnID8gXCJhY3RpdmVcIiA6IFwiXCIpfSBocmVmPVwiL0xpZ2h0bmluZ1wiPjxzcGFuPjxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAzNiB9fSBzcmM9XCIvSW1hZ2UvbGlnaHRuaW5nLnBuZ1wiIC8+PC9zcGFuPkxpZ2h0bmluZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmsgXCIgKyAobG9jYXRpb24ucGF0aG5hbWUgPT0gJy9NZXRlckF2YWlsYWJpbGl0eScgPyBcImFjdGl2ZVwiIDogXCJcIil9IGhyZWY9XCIvTWV0ZXJBdmFpbGFiaWxpdHlcIj48c3Bhbj48aW1nIHN0eWxlPXt7IGhlaWdodDogMzYgfX0gc3JjPVwiL0ltYWdlL2F2YWlsYWJpbGl0eS5wbmdcIiAvPjwvc3Bhbj5NZXRlciBBdmFpbGFiaWxpdHk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgbWFyZ2luVG9wOiA0IH19IGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5TaWduIG91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3sgdG9wOiA3NSwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2NhbGMoMTAwJSAtIDEzNXB4KScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdpbmhlcml0JywgcGFkZGluZzogJzAgMCAwIDAnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5TdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5TdXNwZW5zZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBmb290ZXIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAmY29weTsgMjAyMCAtIFRyZW5EQVBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcblxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPFRyZW5EQVAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3cnKSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Um91dGVyRE9NOyJdLCJzb3VyY2VSb290IjoiIn0=
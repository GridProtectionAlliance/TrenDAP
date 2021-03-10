(self["webpackChunk"] = self["webpackChunk"] || []).push([["TypeScript_Features_DataSets_DataSetData_tsx"],{

/***/ "../node_modules/css-modules-typescript-loader/index.js!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/sass-loader/dist/cjs.js!./Styles/spinner.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-modules-typescript-loader/index.js!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/sass-loader/dist/cjs.js!./Styles/spinner.scss ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._1w4ury-AuxFkYLvnaXPC-v {\n  width: 20px;\n  height: 20px;\n  animation: _3IVRCb4HT7c-XGwAE2Zgn8 4s infinite linear;\n  transform-origin: 50% 50%;\n}\n\n@keyframes _3IVRCb4HT7c-XGwAE2Zgn8 {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n._2OjbjaUI_sg8O1qna94hVk {\n  fill: transparent;\n  stroke: #2f3d4c;\n  stroke-width: 10;\n  stroke-linecap: round;\n  transform-origin: 50% 50%;\n  stroke-dasharray: 283;\n  stroke-dashoffset: 75;\n  animation: _2Pi2tVK0EW7cVsJWMFU1Py 1.4s ease-in-out infinite both;\n}\n\n@keyframes _2Pi2tVK0EW7cVsJWMFU1Py {\n  0%, 25% {\n    stroke-dashoffset: 280;\n    transform: rotate(0);\n  }\n  50%, 75% {\n    stroke-dashoffset: 75;\n    transform: rotate(45deg);\n  }\n  100% {\n    stroke-dashoffset: 280;\n    transform: rotate(360deg);\n  }\n}\n@keyframes _3Mg9_Lgnr9_ctsHzaqFz4Y {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n._5S-qw1NQvd7GS2i_UwNiO {\n  animation: _3Mg9_Lgnr9_ctsHzaqFz4Y 2s linear infinite;\n}", "",{"version":3,"sources":["webpack://./Styles/spinner.scss"],"names":[],"mappings":"AAuBA;EACC,WAAA;EACA,YAAA;EACA,qDAAA;EACG,yBAAA;AAtBJ;;AA0BA;EACC;IACC,uBAAA;EAvBA;EA0BD;IACC,yBAAA;EAxBA;AACF;AAuCA;EACC,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,yBAAA;EACA,qBAAA;EACA,qBAAA;EACA,iEAAA;AArCD;;AAwCA;EACC;IACC,sBAAA;IACA,oBAAA;EArCA;EAwCD;IACC,qBAAA;IACA,wBAAA;EAtCA;EAyCD;IACC,sBAAA;IACA,yBAAA;EAvCA;AACF;AA0CA;EACC;IACC,wBAAA;EAxCA;EA2CD;IACC,0BAAA;EAzCA;AACF;AA6CA;EACC,qDAAA;AA3CD","sourcesContent":["//******************************************************************************************************\r\n//  spinner.scss - Gbtc\r\n//\r\n//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.\r\n//\r\n//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See\r\n//  the NOTICE file distributed with this work for additional information regarding copyright ownership.\r\n//  The GPA licenses this file to you under the MIT License (MIT), the \"License\"; you may not use this\r\n//  file except in compliance with the License. You may obtain a copy of the License at:\r\n//\r\n//      http://opensource.org/licenses/MIT\r\n//\r\n//  Unless agreed to in writing, the subject software distributed under the License is distributed on an\r\n//  \"AS-IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the\r\n//  License for the specific language governing permissions and limitations.\r\n//\r\n//  Code Modification History:\r\n//  ----------------------------------------------------------------------------------------------------\r\n//  01/18/2021 - Billy Ernest\r\n//       Generated original version of source code.\r\n//\r\n//******************************************************************************************************\r\n\r\n.spinner {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tanimation: spin 4s infinite linear;\r\n    transform-origin: 50% 50%;\r\n}\r\n\r\n\r\n@keyframes spin {\r\n\tfrom {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\r\n\tto {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n@function get-dash-value($radius, $percentage) {\r\n\t// Using $radius, calculate circumference.\r\n\t$circumference: 2 * 3.1415927 * $radius;\r\n\r\n\t// Convert percentage to decimal.\r\n\t// i.e. 50% = 0.5.\r\n\t$percentage-as-decimal: $percentage / 100%;\r\n\r\n\t// Return unit value.\r\n\t@return $circumference * $percentage-as-decimal;\r\n}\r\n\r\n.circle {\r\n\tfill: transparent;\r\n\tstroke: #2f3d4c;\r\n\tstroke-width: 10;\r\n\tstroke-linecap: round;\r\n\ttransform-origin: 50% 50%;\r\n\tstroke-dasharray: 283;\r\n\tstroke-dashoffset: 75;\r\n\tanimation: circle--animation 1.4s ease-in-out infinite both;\r\n}\r\n\r\n@keyframes circle--animation {\r\n\t0%, 25% {\r\n\t\tstroke-dashoffset: 280;\r\n\t\ttransform: rotate(0);\r\n\t}\r\n\r\n\t50%, 75% {\r\n\t\tstroke-dashoffset: 75;\r\n\t\ttransform: rotate(45deg);\r\n\t}\r\n\r\n\t100% {\r\n\t\tstroke-dashoffset: 280;\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n@keyframes svg--animation {\r\n\t0% {\r\n\t\ttransform: rotateZ(0deg);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: rotateZ(360deg);\r\n\t}\r\n}\r\n\r\n\r\n.svg {\r\n\tanimation: svg--animation 2s linear infinite;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"spinner": "_1w4ury-AuxFkYLvnaXPC-v",
	"spin": "_3IVRCb4HT7c-XGwAE2Zgn8",
	"circle": "_2OjbjaUI_sg8O1qna94hVk",
	"circle--animation": "_2Pi2tVK0EW7cVsJWMFU1Py",
	"svg": "_5S-qw1NQvd7GS2i_UwNiO",
	"svg--animation": "_3Mg9_Lgnr9_ctsHzaqFz4Y"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./Styles/spinner.scss":
/*!*****************************!*\
  !*** ./Styles/spinner.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_modules_typescript_loader_index_js_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-modules-typescript-loader/index.js!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../../node_modules/sass-loader/dist/cjs.js!./spinner.scss */ "../node_modules/css-modules-typescript-loader/index.js!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/sass-loader/dist/cjs.js!./Styles/spinner.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_modules_typescript_loader_index_js_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_modules_typescript_loader_index_js_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_spinner_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./TypeScript/Constants.ts":
/*!*********************************!*\
  !*** ./TypeScript/Constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeavyCheckMark": () => (/* binding */ HeavyCheckMark),
/* harmony export */   "Pencil": () => (/* binding */ Pencil),
/* harmony export */   "TrashCan": () => (/* binding */ TrashCan),
/* harmony export */   "CrossMark": () => (/* binding */ CrossMark),
/* harmony export */   "Plus": () => (/* binding */ Plus),
/* harmony export */   "Warning": () => (/* binding */ Warning),
/* harmony export */   "Spinner": () => (/* binding */ Spinner),
/* harmony export */   "Wrench": () => (/* binding */ Wrench)
/* harmony export */ });
//******************************************************************************************************
//  Constants.ts - Gbtc
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
//  09/30/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
// emojis
var HeavyCheckMark = '✔️';
var Pencil = '✏️';
var TrashCan = '🗑️';
var CrossMark = '❌';
var Plus = '➕';
var Warning = '⚠️';
var Spinner = '🔄';
var Wrench = '🔧';



/***/ }),

/***/ "./TypeScript/Features/DataSets/DataSetData.tsx":
/*!******************************************************!*\
  !*** ./TypeScript/Features/DataSets/DataSetData.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSetsSlice */ "./TypeScript/Features/DataSets/DataSetsSlice.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Constants */ "./TypeScript/Constants.ts");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LoadingSpinner */ "./TypeScript/LoadingSpinner.tsx");
//******************************************************************************************************
//  DataSetData.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/18/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************





var DataSetData = function (props) {
    var _a, _b, _c;
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var dataSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return (0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.SelectDataSetByID)(state, props.ID); });
    var dsStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.SelectDataSetsStatus);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (dsStatus === 'idle') {
        }
        else if (dsStatus == 'unitiated' || dsStatus === 'changed')
            dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.FetchDataSets)());
        return function () {
        };
    }, [dsStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (dataSet == undefined)
            return;
        else if (dataSet.Data.Status === 'unitiated')
            dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.UpdateDataSetDataFlag)(dataSet));
    }, [dataSet]);
    if (dataSet == undefined)
        return null;
    else if (((_a = dataSet.Data) === null || _a === void 0 ? void 0 : _a.Status) === 'loading')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { title: "Loading Data.", style: { marginLeft: 25 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__.default, { Height: 25, Width: 25, Color: "black", Background: "white" }));
    else if (((_b = dataSet.Data) === null || _b === void 0 ? void 0 : _b.Status) === 'error')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', onClick: function () { return dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.FetchDataSetData)(dataSet)); }, title: "Error loading data: " + dataSet.Data.Error + ". Click to reload." }, _Constants__WEBPACK_IMPORTED_MODULE_3__.CrossMark);
    else if (((_c = dataSet.Data) === null || _c === void 0 ? void 0 : _c.Status) === 'idle')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', onClick: function () { return dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.FetchDataSetData)(dataSet)); }, title: 'Data loaded into TrenDAP. Click to reload.' }, _Constants__WEBPACK_IMPORTED_MODULE_3__.HeavyCheckMark));
    else
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', onClick: function () { return dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.FetchDataSetData)(dataSet)); }, title: 'Click to load data into TrenDAP' }, _Constants__WEBPACK_IMPORTED_MODULE_3__.Warning);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSetData);


/***/ }),

/***/ "./TypeScript/LoadingSpinner.tsx":
/*!***************************************!*\
  !*** ./TypeScript/LoadingSpinner.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/spinner.scss */ "./Styles/spinner.scss");
//******************************************************************************************************
//  LoadingSpinner.tsx - Gbtc
//
//  Copyright © 2021, Grid Protection Alliance.  All Rights Reserved.
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
//  01/18/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


var LoadingSpinner = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { className: _Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1__.default.svg, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", height: props.Height, width: props.Width },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { className: _Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1__.default.circle, cx: "50", cy: "50", r: "45" })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSpinner);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9TdHlsZXMvc3Bpbm5lci5zY3NzIiwid2VicGFjazovLy8uL1N0eWxlcy9zcGlubmVyLnNjc3M/YTI3ZCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL0RhdGFTZXREYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0xvYWRpbmdTcGlubmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxvRUFBb0UsZ0JBQWdCLGlCQUFpQiwwREFBMEQsOEJBQThCLEdBQUcsd0NBQXdDLFVBQVUsOEJBQThCLEtBQUssUUFBUSxnQ0FBZ0MsS0FBSyxHQUFHLDRCQUE0QixzQkFBc0Isb0JBQW9CLHFCQUFxQiwwQkFBMEIsOEJBQThCLDBCQUEwQiwwQkFBMEIsc0VBQXNFLEdBQUcsd0NBQXdDLGFBQWEsNkJBQTZCLDJCQUEyQixLQUFLLGNBQWMsNEJBQTRCLCtCQUErQixLQUFLLFVBQVUsNkJBQTZCLGdDQUFnQyxLQUFLLEdBQUcsc0NBQXNDLFFBQVEsK0JBQStCLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxHQUFHLDJCQUEyQiwwREFBMEQsR0FBRyxPQUFPLHVGQUF1RixVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsaWlCQUFp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REFBYyxDQUFVLENBQUcsQ0FBQzs7UUFFL0ssT0FBTyw2REFBUSxTQUFTLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBRSxjQUFNLGVBQVEsQ0FBQyxnRUFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFuQyxDQUFtQyxFQUFFLEtBQUssRUFBQyxpQ0FBaUMsSUFBRSwrQ0FBTyxDQUFVLENBQUM7QUFFL0osQ0FBQztBQUVELGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFM0Isd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRTlFO0FBQ2tCO0FBRTVDLElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBMkU7SUFDL0YsT0FBTyxDQUNILG9FQUFLLFNBQVMsRUFBRSw2REFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztRQUN6SCx1RUFBUSxTQUFTLEVBQUUsZ0VBQWEsRUFBRyxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLElBQUksR0FBRyxDQUMxRCxDQUNULENBQUM7QUFDTixDQUFDO0FBRUQsaUVBQWUsY0FBYyIsImZpbGUiOiJUeXBlU2NyaXB0X0ZlYXR1cmVzX0RhdGFTZXRzX0RhdGFTZXREYXRhX3RzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLl8xdzR1cnktQXV4RmtZTHZuYVhQQy12IHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYW5pbWF0aW9uOiBfM0lWUkNiNEhUN2MtWEd3QUUyWmduOCA0cyBpbmZpbml0ZSBsaW5lYXI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIF8zSVZSQ2I0SFQ3Yy1YR3dBRTJaZ244IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLl8yT2piamFVSV9zZzhPMXFuYTk0aFZrIHtcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcbiAgc3Ryb2tlOiAjMmYzZDRjO1xcbiAgc3Ryb2tlLXdpZHRoOiAxMDtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICBzdHJva2UtZGFzaGFycmF5OiAyODM7XFxuICBzdHJva2UtZGFzaG9mZnNldDogNzU7XFxuICBhbmltYXRpb246IF8yUGkydFZLMEVXN2NWc0pXTUZVMVB5IDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcXG59XFxuXFxuQGtleWZyYW1lcyBfMlBpMnRWSzBFVzdjVnNKV01GVTFQeSB7XFxuICAwJSwgMjUlIHtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI4MDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUsIDc1JSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA3NTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyODA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgXzNNZzlfTGducjlfY3RzSHphcUZ6NFkge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7XFxuICB9XFxufVxcbi5fNVMtcXcxTlF2ZDdHUzJpX1V3TmlPIHtcXG4gIGFuaW1hdGlvbjogXzNNZzlfTGducjlfY3RzSHphcUZ6NFkgMnMgbGluZWFyIGluZmluaXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9TdHlsZXMvc3Bpbm5lci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXVCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDRyx5QkFBQTtBQXRCSjs7QUEwQkE7RUFDQztJQUNDLHVCQUFBO0VBdkJBO0VBMEJEO0lBQ0MseUJBQUE7RUF4QkE7QUFDRjtBQXVDQTtFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpRUFBQTtBQXJDRDs7QUF3Q0E7RUFDQztJQUNDLHNCQUFBO0lBQ0Esb0JBQUE7RUFyQ0E7RUF3Q0Q7SUFDQyxxQkFBQTtJQUNBLHdCQUFBO0VBdENBO0VBeUNEO0lBQ0Msc0JBQUE7SUFDQSx5QkFBQTtFQXZDQTtBQUNGO0FBMENBO0VBQ0M7SUFDQyx3QkFBQTtFQXhDQTtFQTJDRDtJQUNDLDBCQUFBO0VBekNBO0FBQ0Y7QUE2Q0E7RUFDQyxxREFBQTtBQTNDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbi8vICBzcGlubmVyLnNjc3MgLSBHYnRjXFxyXFxuLy9cXHJcXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxyXFxuLy9cXHJcXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxcclxcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXFxyXFxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcXFwiTGljZW5zZVxcXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXFxyXFxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0Olxcclxcbi8vXFxyXFxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXFxyXFxuLy9cXHJcXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxcclxcbi8vICBcXFwiQVMtSVNcXFwiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXFxyXFxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxcclxcbi8vXFxyXFxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XFxyXFxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG4vLyAgMDEvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxcclxcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxcclxcbi8vXFxyXFxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG5cXHJcXG4uc3Bpbm5lciB7XFxyXFxuXFx0d2lkdGg6IDIwcHg7XFxyXFxuXFx0aGVpZ2h0OiAyMHB4O1xcclxcblxcdGFuaW1hdGlvbjogc3BpbiA0cyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuXFx0ZnJvbSB7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHRvIHtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQGZ1bmN0aW9uIGdldC1kYXNoLXZhbHVlKCRyYWRpdXMsICRwZXJjZW50YWdlKSB7XFxyXFxuXFx0Ly8gVXNpbmcgJHJhZGl1cywgY2FsY3VsYXRlIGNpcmN1bWZlcmVuY2UuXFxyXFxuXFx0JGNpcmN1bWZlcmVuY2U6IDIgKiAzLjE0MTU5MjcgKiAkcmFkaXVzO1xcclxcblxcclxcblxcdC8vIENvbnZlcnQgcGVyY2VudGFnZSB0byBkZWNpbWFsLlxcclxcblxcdC8vIGkuZS4gNTAlID0gMC41LlxcclxcblxcdCRwZXJjZW50YWdlLWFzLWRlY2ltYWw6ICRwZXJjZW50YWdlIC8gMTAwJTtcXHJcXG5cXHJcXG5cXHQvLyBSZXR1cm4gdW5pdCB2YWx1ZS5cXHJcXG5cXHRAcmV0dXJuICRjaXJjdW1mZXJlbmNlICogJHBlcmNlbnRhZ2UtYXMtZGVjaW1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpcmNsZSB7XFxyXFxuXFx0ZmlsbDogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0c3Ryb2tlOiAjMmYzZDRjO1xcclxcblxcdHN0cm9rZS13aWR0aDogMTA7XFxyXFxuXFx0c3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxyXFxuXFx0c3Ryb2tlLWRhc2hhcnJheTogMjgzO1xcclxcblxcdHN0cm9rZS1kYXNob2Zmc2V0OiA3NTtcXHJcXG5cXHRhbmltYXRpb246IGNpcmNsZS0tYW5pbWF0aW9uIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaXJjbGUtLWFuaW1hdGlvbiB7XFxyXFxuXFx0MCUsIDI1JSB7XFxyXFxuXFx0XFx0c3Ryb2tlLWRhc2hvZmZzZXQ6IDI4MDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0NTAlLCA3NSUge1xcclxcblxcdFxcdHN0cm9rZS1kYXNob2Zmc2V0OiA3NTtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdDEwMCUge1xcclxcblxcdFxcdHN0cm9rZS1kYXNob2Zmc2V0OiAyODA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3ZnLS1hbmltYXRpb24ge1xcclxcblxcdDAlIHtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdDEwMCUge1xcclxcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnN2ZyB7XFxyXFxuXFx0YW5pbWF0aW9uOiBzdmctLWFuaW1hdGlvbiAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNwaW5uZXJcIjogXCJfMXc0dXJ5LUF1eEZrWUx2bmFYUEMtdlwiLFxuXHRcInNwaW5cIjogXCJfM0lWUkNiNEhUN2MtWEd3QUUyWmduOFwiLFxuXHRcImNpcmNsZVwiOiBcIl8yT2piamFVSV9zZzhPMXFuYTk0aFZrXCIsXG5cdFwiY2lyY2xlLS1hbmltYXRpb25cIjogXCJfMlBpMnRWSzBFVzdjVnNKV01GVTFQeVwiLFxuXHRcInN2Z1wiOiBcIl81Uy1xdzFOUXZkN0dTMmlfVXdOaU9cIixcblx0XCJzdmctLWFuaW1hdGlvblwiOiBcIl8zTWc5X0xnbnI5X2N0c0h6YXFGejRZXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbW9kdWxlcy10eXBlc2NyaXB0LWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3Bpbm5lci5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbnN0YW50cy50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8zMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuLy8gZW1vamlzXHJcbmNvbnN0IEhlYXZ5Q2hlY2tNYXJrID0gJ+KclO+4jyc7XHJcbmNvbnN0IFBlbmNpbCA9ICfinI/vuI8nO1xyXG5jb25zdCBUcmFzaENhbiA9ICfwn5eR77iPJztcclxuY29uc3QgQ3Jvc3NNYXJrID0gJ+KdjCc7XHJcbmNvbnN0IFBsdXMgPSAn4p6VJztcclxuY29uc3QgV2FybmluZyA9ICfimqDvuI8nO1xyXG5jb25zdCBTcGlubmVyID0gJ/CflIQnO1xyXG5jb25zdCBXcmVuY2ggPSAn8J+Upyc7XHJcblxyXG5leHBvcnQgeyBIZWF2eUNoZWNrTWFyaywgUGVuY2lsLCBUcmFzaENhbiwgQ3Jvc3NNYXJrLCBQbHVzLCBXYXJuaW5nLCBTcGlubmVyLCBXcmVuY2ggfTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRGF0YVNldERhdGEudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAxLzE4LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWR1eCwgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRmV0Y2hEYXRhU2V0RGF0YSwgRmV0Y2hEYXRhU2V0cywgU2VsZWN0RGF0YVNldEJ5SUQsIFNlbGVjdERhdGFTZXRzU3RhdHVzLCBVcGRhdGVEYXRhU2V0RGF0YUZsYWcgfSBmcm9tICcuL0RhdGFTZXRzU2xpY2UnXHJcbmltcG9ydCB7ICBTcGlubmVyLCBXYXJuaW5nLCBDcm9zc01hcmssIEhlYXZ5Q2hlY2tNYXJrIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9zcGlubmVyLnNjc3MnO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnLi4vLi4vTG9hZGluZ1NwaW5uZXInO1xyXG5cclxuY29uc3QgRGF0YVNldERhdGEgPSAocHJvcHM6IHsgSUQ6IG51bWJlciB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBkYXRhU2V0ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3REYXRhU2V0QnlJRChzdGF0ZSwgcHJvcHMuSUQpKTtcclxuICAgIGNvbnN0IGRzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHNTdGF0dXMpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRzU3RhdHVzID09PSAnaWRsZScpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZHNTdGF0dXMgPT0gJ3VuaXRpYXRlZCcgfHwgZHNTdGF0dXMgPT09ICdjaGFuZ2VkJylcclxuICAgICAgICAgICAgZGlzcGF0Y2goRmV0Y2hEYXRhU2V0cygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZHNTdGF0dXNdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGFTZXQgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YVNldC5EYXRhLlN0YXR1cyA9PT0gJ3VuaXRpYXRlZCcpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZURhdGFTZXREYXRhRmxhZyhkYXRhU2V0KSk7XHJcbiAgICB9LCBbZGF0YVNldF0pO1xyXG5cclxuXHJcbiAgICBpZiAoZGF0YVNldCA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAoZGF0YVNldC5EYXRhPy5TdGF0dXMgPT09ICdsb2FkaW5nJylcclxuICAgICAgICByZXR1cm4gPHNwYW4gdGl0bGU9XCJMb2FkaW5nIERhdGEuXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjUgfX0+PExvYWRpbmdTcGlubmVyIEhlaWdodD17MjV9IFdpZHRoPXsyNX0gQ29sb3I9XCJibGFja1wiIEJhY2tncm91bmQ9XCJ3aGl0ZVwiIC8+PC9zcGFuPjtcclxuICAgIGVsc2UgaWYgKGRhdGFTZXQuRGF0YT8uU3RhdHVzID09PSAnZXJyb3InKVxyXG4gICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChGZXRjaERhdGFTZXREYXRhKGRhdGFTZXQpKX0gdGl0bGU9e2BFcnJvciBsb2FkaW5nIGRhdGE6ICR7ZGF0YVNldC5EYXRhLkVycm9yfS4gQ2xpY2sgdG8gcmVsb2FkLmB9PntDcm9zc01hcmt9PC9idXR0b24+O1xyXG4gICAgZWxzZSBpZiAoZGF0YVNldC5EYXRhPy5TdGF0dXMgPT09ICdpZGxlJylcclxuICAgICAgICByZXR1cm4gPD48YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChGZXRjaERhdGFTZXREYXRhKGRhdGFTZXQpKX0gdGl0bGU9J0RhdGEgbG9hZGVkIGludG8gVHJlbkRBUC4gQ2xpY2sgdG8gcmVsb2FkLicgPntIZWF2eUNoZWNrTWFya308L2J1dHRvbj48Lz47XHJcbiAgICAgZWxzZVxyXG4gICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChGZXRjaERhdGFTZXREYXRhKGRhdGFTZXQpKX0gdGl0bGU9J0NsaWNrIHRvIGxvYWQgZGF0YSBpbnRvIFRyZW5EQVAnPntXYXJuaW5nfTwvYnV0dG9uPjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFTZXREYXRhOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBMb2FkaW5nU3Bpbm5lci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDEvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9TdHlsZXMvc3Bpbm5lci5zY3NzJztcclxuXHJcbmNvbnN0IExvYWRpbmdTcGlubmVyID0gKHByb3BzOiB7IEhlaWdodDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBCYWNrZ3JvdW5kOiBzdHJpbmcsIENvbG9yOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLnN2Z30gdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD17cHJvcHMuSGVpZ2h0fSB3aWR0aD17cHJvcHMuV2lkdGh9PlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZSB9IGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjQ1XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTcGlubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==
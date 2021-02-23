(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DataSets"],{

/***/ "../node_modules/@gpa-gemstone/gpa-symbols/lib/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/gpa-symbols/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputNumbers = exports.DNA = exports.DownArrow = exports.UpArrow = exports.Flag = exports.Wrench = exports.Spinner = exports.Warning = exports.Plus = exports.CrossMark = exports.TrashCan = exports.Pencil = exports.HeavyCheckMark = void 0;
// ******************************************************************************************************
//  index.tsx - Gbtc
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
//  09/30/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var HeavyCheckMark = '✔️';
exports.HeavyCheckMark = HeavyCheckMark;
var Pencil = '✏️';
exports.Pencil = Pencil;
var TrashCan = '🗑️';
exports.TrashCan = TrashCan;
var CrossMark = '❌';
exports.CrossMark = CrossMark;
var Plus = '➕';
exports.Plus = Plus;
var Warning = '⚠️';
exports.Warning = Warning;
var Spinner = '🔄';
exports.Spinner = Spinner;
var Wrench = '🔧';
exports.Wrench = Wrench;
var Flag = '🚩';
exports.Flag = Flag;
var UpArrow = '⬆️';
exports.UpArrow = UpArrow;
var DownArrow = '⬇️';
exports.DownArrow = DownArrow;
var DNA = '🧬';
exports.DNA = DNA;
var InputNumbers = '🔢';
exports.InputNumbers = InputNumbers;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-table/lib/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-table/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//  ******************************************************************************************************
//  Table.tsx - Gbtc
//
//  Copyright © 2018, Grid Protection Alliance.  All Rights Reserved.
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
//  08/02/2018 - Billy Ernest
//       Generated original version of source code.
//
//  ******************************************************************************************************
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var AngleIcon = function (props) { return (React.createElement("span", { style: { width: 10, height: 10, margin: 3 }, className: 'fa fa-angle-' + (props.ascending ? 'up' : 'down') })); };
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        return _super.call(this, props) || this;
    }
    Table.prototype.render = function () {
        var rowComponents = this.generateRows();
        var headerComponents = this.generateHeaders();
        return (React.createElement("table", { className: this.props.tableClass !== undefined ? this.props.tableClass : '', style: this.props.tableStyle },
            React.createElement("thead", { style: this.props.theadStyle }, headerComponents),
            React.createElement("tbody", { style: this.props.tbodyStyle }, rowComponents)));
    };
    Table.prototype.generateHeaders = function () {
        var _this = this;
        if (this.props.cols.length === 0)
            return null;
        var cells = this.props.cols.map(function (colData, index) {
            var style;
            if (colData.headerStyle !== undefined) {
                style = colData.headerStyle;
            }
            else
                style = {};
            if (style.cursor === undefined)
                style.cursor = 'pointer';
            return (React.createElement("th", { key: index, style: style, onClick: function (e) { return _this.handleSort({ col: colData.key, ascending: _this.props.ascending }, e); } },
                colData.label,
                _this.props.sortField === colData.key ? React.createElement(AngleIcon, { ascending: _this.props.ascending }) : null));
        });
        return React.createElement("tr", null, cells);
    };
    Table.prototype.generateRows = function () {
        var _this = this;
        if (this.props.data.length === 0)
            return null;
        return this.props.data.map(function (item, index) {
            var cells = _this.props.cols.map(function (colData) {
                var css;
                if (colData.rowStyle === undefined)
                    css = {};
                else
                    css = __assign({}, colData.rowStyle);
                return (React.createElement("td", { key: index.toString() + item[colData.key] + colData.key, style: css, onClick: _this.handleClick.bind(_this, { col: colData.key, row: item, data: item[colData.key] }) }, colData.content !== undefined ? colData.content(item, colData.key, css) : item[colData.key]));
            });
            var style;
            if (_this.props.rowStyle !== undefined) {
                style = __assign({}, _this.props.rowStyle);
            }
            else
                style = {};
            if (style.cursor === undefined)
                style.cursor = 'pointer';
            if (_this.props.selected !== undefined && _this.props.selected(item))
                style.backgroundColor = 'yellow';
            return (React.createElement("tr", { style: style, key: index.toString() }, cells));
        });
    };
    Table.prototype.handleClick = function (data, event) {
        this.props.onClick(data, event);
    };
    Table.prototype.handleSort = function (data, event) {
        this.props.onSort(data);
    };
    return Table;
}(React.Component));
exports.default = Table;


/***/ }),

/***/ "../node_modules/css-modules-typescript-loader/index.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js!./Styles/spinner.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-modules-typescript-loader!../node_modules/css-loader/dist/cjs.js??ref--4-2!../node_modules/sass-loader/dist/cjs.js!./Styles/spinner.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "._2MKBas_7uwvtcyryvCH9PY {\n  width: 20px;\n  height: 20px;\n  animation: _337M3CDDJwQuuuHEta2iWl 4s infinite linear;\n  transform-origin: 50% 50%;\n}\n\n@keyframes _337M3CDDJwQuuuHEta2iWl {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n._2t1tkattxtKeUViyxz5IH8 {\n  fill: transparent;\n  stroke: #2f3d4c;\n  stroke-width: 10;\n  stroke-linecap: round;\n  transform-origin: 50% 50%;\n  stroke-dasharray: 283;\n  stroke-dashoffset: 75;\n  animation: _1l8yx4ttz-DbPpXrsEy6-X 1.4s ease-in-out infinite both;\n}\n\n@keyframes _1l8yx4ttz-DbPpXrsEy6-X {\n  0%, 25% {\n    stroke-dashoffset: 280;\n    transform: rotate(0);\n  }\n  50%, 75% {\n    stroke-dashoffset: 75;\n    transform: rotate(45deg);\n  }\n  100% {\n    stroke-dashoffset: 280;\n    transform: rotate(360deg);\n  }\n}\n@keyframes lpaocU4W06jCzhmBcKMrQ {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n.KPA1bQ71pfzqGWkfk6ke8 {\n  animation: lpaocU4W06jCzhmBcKMrQ 2s linear infinite;\n}", ""]);
// Exports
exports.locals = {
	"spinner": "_2MKBas_7uwvtcyryvCH9PY",
	"spin": "_337M3CDDJwQuuuHEta2iWl",
	"circle": "_2t1tkattxtKeUViyxz5IH8",
	"circle--animation": "_1l8yx4ttz-DbPpXrsEy6-X",
	"svg": "KPA1bQ71pfzqGWkfk6ke8",
	"svg--animation": "lpaocU4W06jCzhmBcKMrQ"
};
module.exports = exports;


/***/ }),

/***/ "./Styles/spinner.scss":
/*!*****************************!*\
  !*** ./Styles/spinner.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-modules-typescript-loader!../../node_modules/css-loader/dist/cjs.js??ref--4-2!../../node_modules/sass-loader/dist/cjs.js!./spinner.scss */ "../node_modules/css-modules-typescript-loader/index.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js!./Styles/spinner.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./TypeScript/Constants.ts":
/*!*********************************!*\
  !*** ./TypeScript/Constants.ts ***!
  \*********************************/
/*! exports provided: HeavyCheckMark, Pencil, TrashCan, CrossMark, Plus, Warning, Spinner, Wrench */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeavyCheckMark", function() { return HeavyCheckMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pencil", function() { return Pencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashCan", function() { return TrashCan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossMark", function() { return CrossMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return Plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warning", function() { return Warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrench", function() { return Wrench; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    var dataSet = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) { return Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["SelectDataSetByID"])(state, props.ID); });
    var dsStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["SelectDataSetsStatus"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (dsStatus === 'idle') {
        }
        else if (dsStatus == 'unitiated' || dsStatus === 'changed')
            dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSets"])());
        return function () {
        };
    }, [dsStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (dataSet == undefined)
            return;
        else if (dataSet.Data.Status === 'unitiated')
            dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["UpdateDataSetDataFlag"])(dataSet));
    }, [dataSet]);
    if (dataSet == undefined)
        return null;
    else if (((_a = dataSet.Data) === null || _a === void 0 ? void 0 : _a.Status) === 'loading')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { title: "Loading Data.", style: { marginLeft: 25 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], { Height: 25, Width: 25, Color: "black", Background: "white" }));
    else if (((_b = dataSet.Data) === null || _b === void 0 ? void 0 : _b.Status) === 'error')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSetData"])(dataSet)); }, title: "Error loading data: " + dataSet.Data.Error + ". Click to reload." }, _Constants__WEBPACK_IMPORTED_MODULE_3__["CrossMark"]);
    else if (((_c = dataSet.Data) === null || _c === void 0 ? void 0 : _c.Status) === 'idle')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSetData"])(dataSet)); }, title: 'Data loaded into TrenDAP. Click to reload.' }, _Constants__WEBPACK_IMPORTED_MODULE_3__["HeavyCheckMark"]));
    else
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSetData"])(dataSet)); }, title: 'Click to load data into TrenDAP' }, _Constants__WEBPACK_IMPORTED_MODULE_3__["Warning"]);
};
/* harmony default export */ __webpack_exports__["default"] = (DataSetData);


/***/ }),

/***/ "./TypeScript/Features/DataSets/DataSets.tsx":
/*!***************************************************!*\
  !*** ./TypeScript/Features/DataSets/DataSets.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table/lib/index */ "../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataSetsSlice */ "./TypeScript/Features/DataSets/DataSetsSlice.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Constants */ "./TypeScript/Constants.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DataSetData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DataSetData */ "./TypeScript/Features/DataSets/DataSetData.tsx");
/* harmony import */ var _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gpa-gemstone/gpa-symbols */ "../node_modules/@gpa-gemstone/gpa-symbols/lib/index.js");
/* harmony import */ var _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_8__);
//******************************************************************************************************
//  DataSets.tsx - Gbtc
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
//  09/25/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};









var DataSets = function (props) {
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    var DataSets = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) { return Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["SelectDataSetsForUser"])(state, userName); });
    var publicDataSets = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) { return Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["SelectDataSetsAllPublicNotUser"])(state, userName); });
    var dsStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["SelectDataSetsStatus"]);
    var sortField = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["SelectDataSetsSortField"]);
    var ascending = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["SelectDataSetsAscending"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (dsStatus != 'unitiated' && dsStatus != 'changed')
            return;
        dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["FetchDataSets"])());
        return function () {
        };
    }, [dispatch, dsStatus]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 10 } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-8", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" }, "My DataSets"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                            { key: 'Name', label: 'Name' },
                            { key: 'Public', label: 'Global', headerStyle: { width: 75 }, rowStyle: { width: 75 }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, item[key] ? _Constants__WEBPACK_IMPORTED_MODULE_4__["HeavyCheckMark"] : null); } },
                            { key: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, moment__WEBPACK_IMPORTED_MODULE_6___default()(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                            {
                                key: null,
                                label: '',
                                headerStyle: { width: 300 },
                                rowStyle: { width: 300 },
                                content: function (item, key, style) {
                                    var _a;
                                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DataSetData__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({}, item)),
                                        ((_a = item.Data) === null || _a === void 0 ? void 0 : _a.Status) === 'idle' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: homePath + "ViewDataSet/" + item.ID, title: 'View/Edit DataSet Data.', className: 'btn' }, _Constants__WEBPACK_IMPORTED_MODULE_4__["Wrench"]) : null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: homePath + "EditDataSet/" + item.ID, title: 'Edit DataSet Parameters.', className: 'btn' }, _Constants__WEBPACK_IMPORTED_MODULE_4__["Pencil"]),
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { title: 'Clone DataSet.', className: "btn", onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["CloneDataSet"])(item)); } }, _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_8__["DNA"]),
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { title: 'Delete DataSet.', className: "btn", onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["RemoveDataSet"])(item)); } }, _Constants__WEBPACK_IMPORTED_MODULE_4__["TrashCan"]));
                                }
                            }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortField: sortField, onClick: function (data) { }, onSort: function (data) { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["Sort"])({ SortField: data.col, Ascending: data.ascending })); }, data: DataSets, ascending: ascending })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-4", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" }, "Global DataSets"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                            { key: 'Name', label: 'Name' },
                            { key: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, moment__WEBPACK_IMPORTED_MODULE_6___default()(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortField: sortField, onClick: function () { }, onSort: function (data) { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["Sort"])({ SortField: data.col, Ascending: data.ascending })); }, data: publicDataSets, ascending: ascending }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DataSets);


/***/ }),

/***/ "./TypeScript/LoadingSpinner.tsx":
/*!***************************************!*\
  !*** ./TypeScript/LoadingSpinner.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/spinner.scss */ "./Styles/spinner.scss");
/* harmony import */ var _Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1__);
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { className: _Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1___default.a.svg, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", height: props.Height, width: props.Width },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { className: _Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1___default.a.circle, cx: "50", cy: "50", r: "45" })));
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvZ3BhLXN5bWJvbHMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vU3R5bGVzL3NwaW5uZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9TdHlsZXMvc3Bpbm5lci5zY3NzPzZiZGUiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9EYXRhU2V0cy9EYXRhU2V0RGF0YS50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9EYXRhU2V0cy9EYXRhU2V0cy50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9Mb2FkaW5nU3Bpbm5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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bmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW5wdXROdW1iZXJzID0gZXhwb3J0cy5ETkEgPSBleHBvcnRzLkRvd25BcnJvdyA9IGV4cG9ydHMuVXBBcnJvdyA9IGV4cG9ydHMuRmxhZyA9IGV4cG9ydHMuV3JlbmNoID0gZXhwb3J0cy5TcGlubmVyID0gZXhwb3J0cy5XYXJuaW5nID0gZXhwb3J0cy5QbHVzID0gZXhwb3J0cy5Dcm9zc01hcmsgPSBleHBvcnRzLlRyYXNoQ2FuID0gZXhwb3J0cy5QZW5jaWwgPSBleHBvcnRzLkhlYXZ5Q2hlY2tNYXJrID0gdm9pZCAwO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgaW5kZXgudHN4IC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMDkvMzAvMjAyMCAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG52YXIgSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcbmV4cG9ydHMuSGVhdnlDaGVja01hcmsgPSBIZWF2eUNoZWNrTWFyaztcbnZhciBQZW5jaWwgPSAn4pyP77iPJztcbmV4cG9ydHMuUGVuY2lsID0gUGVuY2lsO1xudmFyIFRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xuZXhwb3J0cy5UcmFzaENhbiA9IFRyYXNoQ2FuO1xudmFyIENyb3NzTWFyayA9ICfinYwnO1xuZXhwb3J0cy5Dcm9zc01hcmsgPSBDcm9zc01hcms7XG52YXIgUGx1cyA9ICfinpUnO1xuZXhwb3J0cy5QbHVzID0gUGx1cztcbnZhciBXYXJuaW5nID0gJ+KaoO+4jyc7XG5leHBvcnRzLldhcm5pbmcgPSBXYXJuaW5nO1xudmFyIFNwaW5uZXIgPSAn8J+UhCc7XG5leHBvcnRzLlNwaW5uZXIgPSBTcGlubmVyO1xudmFyIFdyZW5jaCA9ICfwn5SnJztcbmV4cG9ydHMuV3JlbmNoID0gV3JlbmNoO1xudmFyIEZsYWcgPSAn8J+aqSc7XG5leHBvcnRzLkZsYWcgPSBGbGFnO1xudmFyIFVwQXJyb3cgPSAn4qyG77iPJztcbmV4cG9ydHMuVXBBcnJvdyA9IFVwQXJyb3c7XG52YXIgRG93bkFycm93ID0gJ+Ksh++4jyc7XG5leHBvcnRzLkRvd25BcnJvdyA9IERvd25BcnJvdztcbnZhciBETkEgPSAn8J+nrCc7XG5leHBvcnRzLkROQSA9IEROQTtcbnZhciBJbnB1dE51bWJlcnMgPSAn8J+Uoic7XG5leHBvcnRzLklucHV0TnVtYmVycyA9IElucHV0TnVtYmVycztcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIFRhYmxlLnRzeCAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTgsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDA4LzAyLzIwMTggLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBBbmdsZUljb24gPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgbWFyZ2luOiAzIH0sIGNsYXNzTmFtZTogJ2ZhIGZhLWFuZ2xlLScgKyAocHJvcHMuYXNjZW5kaW5nID8gJ3VwJyA6ICdkb3duJykgfSkpOyB9O1xudmFyIFRhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUYWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRhYmxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb3dDb21wb25lbnRzID0gdGhpcy5nZW5lcmF0ZVJvd3MoKTtcbiAgICAgICAgdmFyIGhlYWRlckNvbXBvbmVudHMgPSB0aGlzLmdlbmVyYXRlSGVhZGVycygpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy50YWJsZUNsYXNzICE9PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLnRhYmxlQ2xhc3MgOiAnJywgc3R5bGU6IHRoaXMucHJvcHMudGFibGVTdHlsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIHsgc3R5bGU6IHRoaXMucHJvcHMudGhlYWRTdHlsZSB9LCBoZWFkZXJDb21wb25lbnRzKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCB7IHN0eWxlOiB0aGlzLnByb3BzLnRib2R5U3R5bGUgfSwgcm93Q29tcG9uZW50cykpKTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5nZW5lcmF0ZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBjZWxscyA9IHRoaXMucHJvcHMuY29scy5tYXAoZnVuY3Rpb24gKGNvbERhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG4gICAgICAgICAgICBpZiAoY29sRGF0YS5oZWFkZXJTdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBjb2xEYXRhLmhlYWRlclN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBrZXk6IGluZGV4LCBzdHlsZTogc3R5bGUsIG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5oYW5kbGVTb3J0KHsgY29sOiBjb2xEYXRhLmtleSwgYXNjZW5kaW5nOiBfdGhpcy5wcm9wcy5hc2NlbmRpbmcgfSwgZSk7IH0gfSxcbiAgICAgICAgICAgICAgICBjb2xEYXRhLmxhYmVsLFxuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLnNvcnRGaWVsZCA9PT0gY29sRGF0YS5rZXkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEFuZ2xlSWNvbiwgeyBhc2NlbmRpbmc6IF90aGlzLnByb3BzLmFzY2VuZGluZyB9KSA6IG51bGwpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgY2VsbHMpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmdlbmVyYXRlUm93cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2VsbHMgPSBfdGhpcy5wcm9wcy5jb2xzLm1hcChmdW5jdGlvbiAoY29sRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBjc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNvbERhdGEucm93U3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgY3NzID0ge307XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjc3MgPSBfX2Fzc2lnbih7fSwgY29sRGF0YS5yb3dTdHlsZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBrZXk6IGluZGV4LnRvU3RyaW5nKCkgKyBpdGVtW2NvbERhdGEua2V5XSArIGNvbERhdGEua2V5LCBzdHlsZTogY3NzLCBvbkNsaWNrOiBfdGhpcy5oYW5kbGVDbGljay5iaW5kKF90aGlzLCB7IGNvbDogY29sRGF0YS5rZXksIHJvdzogaXRlbSwgZGF0YTogaXRlbVtjb2xEYXRhLmtleV0gfSkgfSwgY29sRGF0YS5jb250ZW50ICE9PSB1bmRlZmluZWQgPyBjb2xEYXRhLmNvbnRlbnQoaXRlbSwgY29sRGF0YS5rZXksIGNzcykgOiBpdGVtW2NvbERhdGEua2V5XSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMucm93U3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gX19hc3NpZ24oe30sIF90aGlzLnByb3BzLnJvd1N0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgaWYgKHN0eWxlLmN1cnNvciA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5zZWxlY3RlZCAhPT0gdW5kZWZpbmVkICYmIF90aGlzLnByb3BzLnNlbGVjdGVkKGl0ZW0pKVxuICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgeyBzdHlsZTogc3R5bGUsIGtleTogaW5kZXgudG9TdHJpbmcoKSB9LCBjZWxscykpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChkYXRhLCBldmVudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZGF0YSwgZXZlbnQpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmhhbmRsZVNvcnQgPSBmdW5jdGlvbiAoZGF0YSwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNvcnQoZGF0YSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGFibGU7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVGFibGU7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLl8yTUtCYXNfN3V3dnRjeXJ5dkNIOVBZIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYW5pbWF0aW9uOiBfMzM3TTNDRERKd1F1dXVIRXRhMmlXbCA0cyBpbmZpbml0ZSBsaW5lYXI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIF8zMzdNM0NEREp3UXV1dUhFdGEyaVdsIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLl8ydDF0a2F0dHh0S2VVVml5eHo1SUg4IHtcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcbiAgc3Ryb2tlOiAjMmYzZDRjO1xcbiAgc3Ryb2tlLXdpZHRoOiAxMDtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICBzdHJva2UtZGFzaGFycmF5OiAyODM7XFxuICBzdHJva2UtZGFzaG9mZnNldDogNzU7XFxuICBhbmltYXRpb246IF8xbDh5eDR0dHotRGJQcFhyc0V5Ni1YIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcXG59XFxuXFxuQGtleWZyYW1lcyBfMWw4eXg0dHR6LURiUHBYcnNFeTYtWCB7XFxuICAwJSwgMjUlIHtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI4MDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUsIDc1JSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA3NTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyODA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbHBhb2NVNFcwNmpDemhtQmNLTXJRIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xcbiAgfVxcbn1cXG4uS1BBMWJRNzFwZnpxR1drZms2a2U4IHtcXG4gIGFuaW1hdGlvbjogbHBhb2NVNFcwNmpDemhtQmNLTXJRIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNwaW5uZXJcIjogXCJfMk1LQmFzXzd1d3Z0Y3lyeXZDSDlQWVwiLFxuXHRcInNwaW5cIjogXCJfMzM3TTNDRERKd1F1dXVIRXRhMmlXbFwiLFxuXHRcImNpcmNsZVwiOiBcIl8ydDF0a2F0dHh0S2VVVml5eHo1SUg4XCIsXG5cdFwiY2lyY2xlLS1hbmltYXRpb25cIjogXCJfMWw4eXg0dHR6LURiUHBYcnNFeTYtWFwiLFxuXHRcInN2Z1wiOiBcIktQQTFiUTcxcGZ6cUdXa2ZrNmtlOFwiLFxuXHRcInN2Zy0tYW5pbWF0aW9uXCI6IFwibHBhb2NVNFcwNmpDemhtQmNLTXJRXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1tb2R1bGVzLXR5cGVzY3JpcHQtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGlubmVyLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbW9kdWxlcy10eXBlc2NyaXB0LWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3Bpbm5lci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1tb2R1bGVzLXR5cGVzY3JpcHQtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGlubmVyLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uc3RhbnRzLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzMwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyBlbW9qaXNcclxuY29uc3QgSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcclxuY29uc3QgUGVuY2lsID0gJ+Kcj++4jyc7XHJcbmNvbnN0IFRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xyXG5jb25zdCBDcm9zc01hcmsgPSAn4p2MJztcclxuY29uc3QgUGx1cyA9ICfinpUnO1xyXG5jb25zdCBXYXJuaW5nID0gJ+KaoO+4jyc7XHJcbmNvbnN0IFNwaW5uZXIgPSAn8J+UhCc7XHJcbmNvbnN0IFdyZW5jaCA9ICfwn5SnJztcclxuXHJcbmV4cG9ydCB7IEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFRyYXNoQ2FuLCBDcm9zc01hcmssIFBsdXMsIFdhcm5pbmcsIFNwaW5uZXIsIFdyZW5jaCB9OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU2V0RGF0YS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDEvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlZHV4LCBUcmVuREFQIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGZXRjaERhdGFTZXREYXRhLCBGZXRjaERhdGFTZXRzLCBTZWxlY3REYXRhU2V0QnlJRCwgU2VsZWN0RGF0YVNldHNTdGF0dXMsIFVwZGF0ZURhdGFTZXREYXRhRmxhZyB9IGZyb20gJy4vRGF0YVNldHNTbGljZSdcclxuaW1wb3J0IHsgIFNwaW5uZXIsIFdhcm5pbmcsIENyb3NzTWFyaywgSGVhdnlDaGVja01hcmsgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vU3R5bGVzL3NwaW5uZXIuc2Nzcyc7XHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuLi8uLi9Mb2FkaW5nU3Bpbm5lcic7XHJcblxyXG5jb25zdCBEYXRhU2V0RGF0YSA9IChwcm9wczogeyBJRDogbnVtYmVyIH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGRhdGFTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdERhdGFTZXRCeUlEKHN0YXRlLCBwcm9wcy5JRCkpO1xyXG4gICAgY29uc3QgZHNTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0c1N0YXR1cyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHNTdGF0dXMgPT09ICdpZGxlJykge1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkc1N0YXR1cyA9PSAndW5pdGlhdGVkJyB8fCBkc1N0YXR1cyA9PT0gJ2NoYW5nZWQnKVxyXG4gICAgICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTZXRzKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkc1N0YXR1c10pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGF0YVNldCA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBlbHNlIGlmIChkYXRhU2V0LkRhdGEuU3RhdHVzID09PSAndW5pdGlhdGVkJylcclxuICAgICAgICAgICAgZGlzcGF0Y2goVXBkYXRlRGF0YVNldERhdGFGbGFnKGRhdGFTZXQpKTtcclxuICAgIH0sIFtkYXRhU2V0XSk7XHJcblxyXG5cclxuICAgIGlmIChkYXRhU2V0ID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBlbHNlIGlmIChkYXRhU2V0LkRhdGE/LlN0YXR1cyA9PT0gJ2xvYWRpbmcnKVxyXG4gICAgICAgIHJldHVybiA8c3BhbiB0aXRsZT1cIkxvYWRpbmcgRGF0YS5cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyNSB9fT48TG9hZGluZ1NwaW5uZXIgSGVpZ2h0PXsyNX0gV2lkdGg9ezI1fSBDb2xvcj1cImJsYWNrXCIgQmFja2dyb3VuZD1cIndoaXRlXCIgLz48L3NwYW4+O1xyXG4gICAgZWxzZSBpZiAoZGF0YVNldC5EYXRhPy5TdGF0dXMgPT09ICdlcnJvcicpXHJcbiAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKEZldGNoRGF0YVNldERhdGEoZGF0YVNldCkpfSB0aXRsZT17YEVycm9yIGxvYWRpbmcgZGF0YTogJHtkYXRhU2V0LkRhdGEuRXJyb3J9LiBDbGljayB0byByZWxvYWQuYH0+e0Nyb3NzTWFya308L2J1dHRvbj47XHJcbiAgICBlbHNlIGlmIChkYXRhU2V0LkRhdGE/LlN0YXR1cyA9PT0gJ2lkbGUnKVxyXG4gICAgICAgIHJldHVybiA8PjxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKEZldGNoRGF0YVNldERhdGEoZGF0YVNldCkpfSB0aXRsZT0nRGF0YSBsb2FkZWQgaW50byBUcmVuREFQLiBDbGljayB0byByZWxvYWQuJyA+e0hlYXZ5Q2hlY2tNYXJrfTwvYnV0dG9uPjwvPjtcclxuICAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKEZldGNoRGF0YVNldERhdGEoZGF0YVNldCkpfSB0aXRsZT0nQ2xpY2sgdG8gbG9hZCBkYXRhIGludG8gVHJlbkRBUCc+e1dhcm5pbmd9PC9idXR0b24+O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVNldERhdGE7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERhdGFTZXRzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8yNS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCwgUmVkdXggfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlL2xpYi9pbmRleCdcclxuaW1wb3J0IHsgU29ydCwgRmV0Y2hEYXRhU2V0cywgU2VsZWN0RGF0YVNldHNTdGF0dXMsIFJlbW92ZURhdGFTZXQsIFNlbGVjdERhdGFTZXRzRm9yVXNlciwgU2VsZWN0RGF0YVNldHNBbGxQdWJsaWNOb3RVc2VyLCBTZWxlY3REYXRhU2V0c1NvcnRGaWVsZCwgU2VsZWN0RGF0YVNldHNBc2NlbmRpbmcsIEZldGNoRGF0YVNldERhdGEsIENsb25lRGF0YVNldCB9IGZyb20gJy4vRGF0YVNldHNTbGljZSc7XHJcbmltcG9ydCBFZGl0RGF0YVNldCBmcm9tICcuL0VkaXREYXRhU2V0JztcclxuaW1wb3J0IHsgVHJhc2hDYW4sIEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFdyZW5jaCwgQ3Jvc3NNYXJrLCBTcGlubmVyIH0gZnJvbSAnLi8uLi8uLi9Db25zdGFudHMnXHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IERhdGFTZXREYXRhIGZyb20gJy4vRGF0YVNldERhdGEnO1xyXG5pbXBvcnQgeyBETkEgfSBmcm9tICdAZ3BhLWdlbXN0b25lL2dwYS1zeW1ib2xzJztcclxuXHJcbmNvbnN0IERhdGFTZXRzOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wczoge30pID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBEYXRhU2V0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0RGF0YVNldHNGb3JVc2VyKHN0YXRlLCB1c2VyTmFtZSkpO1xyXG4gICAgY29uc3QgcHVibGljRGF0YVNldHMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdERhdGFTZXRzQWxsUHVibGljTm90VXNlcihzdGF0ZSwgdXNlck5hbWUpKTtcclxuXHJcbiAgICBjb25zdCBkc1N0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTZXRzU3RhdHVzKTtcclxuXHJcbiAgICBjb25zdCBzb3J0RmllbGQgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0c1NvcnRGaWVsZCk7XHJcbiAgICBjb25zdCBhc2NlbmRpbmcgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0c0FzY2VuZGluZyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHNTdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgZHNTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hEYXRhU2V0cygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGRzU3RhdHVzXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAwIDAgMCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+TXkgRGF0YVNldHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8VHJlbkRBUC5pRGF0YVNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdOYW1lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdQdWJsaWMnLCBsYWJlbDogJ0dsb2JhbCcsIGhlYWRlclN0eWxlOiB7IHdpZHRoOiA3NSB9LCByb3dTdHlsZTogeyB3aWR0aDogNzUgfSxjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e2l0ZW1ba2V5XSA/IEhlYXZ5Q2hlY2tNYXJrIDogbnVsbH08L3NwYW4+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1VwZGF0ZWRPbicsIGxhYmVsOiAnVXBkYXRlZCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj57bW9tZW50KGl0ZW0uVXBkYXRlZE9uKS5zdWJ0cmFjdChuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCksICdtaW51dGVzJykuZm9ybWF0KCdNTS9ERC9ZWSBISDptbScpfTwvc3Bhbj4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJTdHlsZTogeyB3aWR0aDogMzAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlOiB7IHdpZHRoOiAzMDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhU2V0RGF0YSB7Li4uaXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5EYXRhPy5TdGF0dXMgPT09ICdpZGxlJyA/IDxMaW5rIHRvPXtgJHtob21lUGF0aH1WaWV3RGF0YVNldC8ke2l0ZW0uSUR9YH0gdGl0bGU9J1ZpZXcvRWRpdCBEYXRhU2V0IERhdGEuJyBjbGFzc05hbWU9J2J0bic+e1dyZW5jaH08L0xpbms+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YCR7aG9tZVBhdGh9RWRpdERhdGFTZXQvJHtpdGVtLklEfWB9IHRpdGxlPSdFZGl0IERhdGFTZXQgUGFyYW1ldGVycy4nIGNsYXNzTmFtZT0nYnRuJz57UGVuY2lsfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT0nQ2xvbmUgRGF0YVNldC4nIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKENsb25lRGF0YVNldChpdGVtKSl9PntETkF9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPSdEZWxldGUgRGF0YVNldC4nIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFJlbW92ZURhdGFTZXQoaXRlbSkpfT57VHJhc2hDYW59PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA1MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIxNSwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGRhdGEpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXtkYXRhID0+IGRpc3BhdGNoKFNvcnQoeyBTb3J0RmllbGQ6IGRhdGEuY29sLCBBc2NlbmRpbmc6IGRhdGEuYXNjZW5kaW5nIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17RGF0YVNldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDAgMCAwJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5HbG9iYWwgRGF0YVNldHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8VHJlbkRBUC5pRGF0YVNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ05hbWUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVcGRhdGVkT24nLCBsYWJlbDogJ1VwZGF0ZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e21vbWVudChpdGVtLlVwZGF0ZWRPbikuc3VidHJhY3QobmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpLmZvcm1hdCgnTU0vREQvWVkgSEg6bW0nKX08L3NwYW4+IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8veyBrZXk6IG51bGwsIGxhYmVsOiAnJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxzcGFuPjxFZGl0RGF0YVNldCBEYXRhU2V0PXtpdGVtfSAvPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goUmVtb3ZlRGF0YVNldChpdGVtKSl9PntUcmFzaENhbn08L2J1dHRvbj48L3NwYW4+IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNTAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMTUsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9e2RhdGEgPT4gZGlzcGF0Y2goU29ydCh7IFNvcnRGaWVsZDogZGF0YS5jb2wsIEFzY2VuZGluZzogZGF0YS5hc2NlbmRpbmcgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHVibGljRGF0YVNldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0czsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTG9hZGluZ1NwaW5uZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAxLzE4LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU3R5bGVzL3NwaW5uZXIuc2Nzcyc7XHJcblxyXG5jb25zdCBMb2FkaW5nU3Bpbm5lciA9IChwcm9wczogeyBIZWlnaHQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgQmFja2dyb3VuZDogc3RyaW5nLCBDb2xvcjogc3RyaW5nIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5zdmd9IHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9e3Byb3BzLkhlaWdodH0gd2lkdGg9e3Byb3BzLldpZHRofT5cclxuICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGUgfSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI0NVwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nU3Bpbm5lciJdLCJzb3VyY2VSb290IjoiIn0=
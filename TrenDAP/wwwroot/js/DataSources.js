(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DataSources"],{

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

/***/ "./TypeScript/Constants.ts":
/*!*********************************!*\
  !*** ./TypeScript/Constants.ts ***!
  \*********************************/
/*! exports provided: HeavyCheckMark, Pencil, TrashCan, CrossMark, Plus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeavyCheckMark", function() { return HeavyCheckMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pencil", function() { return Pencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashCan", function() { return TrashCan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossMark", function() { return CrossMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return Plus; });
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



/***/ }),

/***/ "./TypeScript/Features/DataSources/DataSources.tsx":
/*!*********************************************************!*\
  !*** ./TypeScript/Features/DataSources/DataSources.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSourcesSlice */ "./TypeScript/Features/DataSources/DataSourcesSlice.ts");
/* harmony import */ var _gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-table/lib/index */ "../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DataSourceTypes/DataSourceTypesSlice */ "./TypeScript/Features/DataSourceTypes/DataSourceTypesSlice.ts");
/* harmony import */ var _EditDataSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditDataSource */ "./TypeScript/Features/DataSources/EditDataSource.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../Constants */ "./TypeScript/Constants.ts");
//******************************************************************************************************
//  DataSources.tsx - Gbtc
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
//  09/11/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************







var DataSources = function (props) {
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    var dataSources = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) { return Object(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__["SelectDataSourcesForUser"])(state, userName); });
    var publicDataSources = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) { return Object(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__["SelectDataSourcesAllPublicNotUser"])(state, userName); });
    var dsStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__["SelectDataSourcesStatus"]);
    var dataSourceTypes = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_4__["SelectDataSourceTypes"]);
    var dstStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_4__["SelectDataSourceTypesStatus"]);
    var sortField = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__["SelectDataSourcesSortField"]);
    var ascending = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__["SelectDataSourcesAscending"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (dsStatus != 'unitiated' && dsStatus != 'changed')
            return;
        var promise = dispatch(Object(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSources"])());
        return function () {
            if (dsStatus === 'loading')
                promise.abort();
        };
    }, [dispatch, dsStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (dstStatus != 'unitiated')
            return;
        var promise = dispatch(Object(_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_4__["FetchDataSourceTypes"])());
        return function () {
            if (dstStatus === 'loading')
                promise.abort();
        };
    }, [dispatch, dstStatus]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 10 } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-6", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" }, "My DataSources"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_3___default.a, { cols: [
                            { key: 'Name', label: 'Name' },
                            { key: 'DataSourceTypeID', label: 'Type', content: function (item, key, style) { var _a; return (_a = dataSourceTypes.find(function (dst) { return item.DataSourceTypeID === dst.ID; })) === null || _a === void 0 ? void 0 : _a.Name; } },
                            { key: 'URL', label: 'Url' },
                            { key: 'Public', label: 'Public', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, item[key] ? _Constants__WEBPACK_IMPORTED_MODULE_6__["HeavyCheckMark"] : null); } },
                            { key: null, label: '', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EditDataSource__WEBPACK_IMPORTED_MODULE_5__["default"], { DataSource: item }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", onClick: function () { return dispatch(Object(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__["RemoveDataSource"])(item)); } }, _Constants__WEBPACK_IMPORTED_MODULE_6__["TrashCan"])); } }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortField: sortField, onClick: function () { }, onSort: function (data) { return dispatch(Object(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__["Sort"])({ SortField: data.col, Ascending: data.ascending })); }, data: dataSources, ascending: ascending })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-6", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" }, "Public DataSources"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_3___default.a, { cols: [
                            { key: 'Name', label: 'Name' },
                            { key: 'DataSourceTypeID', label: 'Type', content: function (item, key, style) { var _a; return (_a = dataSourceTypes.find(function (dst) { return item.DataSourceTypeID === dst.ID; })) === null || _a === void 0 ? void 0 : _a.Name; } },
                            { key: 'URL', label: 'Url' },
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortField: sortField, onClick: function () { }, onSort: function (data) { return dispatch(Object(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__["Sort"])({ SortField: data.col, Ascending: data.ascending })); }, data: publicDataSources, ascending: ascending }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DataSources);


/***/ }),

/***/ "./TypeScript/Features/DataSources/EditDataSource.tsx":
/*!************************************************************!*\
  !*** ./TypeScript/Features/DataSources/EditDataSource.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSourcesSlice */ "./TypeScript/Features/DataSources/DataSourcesSlice.ts");
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataSource */ "./TypeScript/Features/DataSources/DataSource.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Constants */ "./TypeScript/Constants.ts");
//******************************************************************************************************
//  EditDataSource.tsx - Gbtc
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





var EditDataSource = function (props) {
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.DataSource), 2), dataSource = _a[0], setDataSource = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), show = _b[0], setShow = _b[1];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", onClick: function () { return setShow(true); } }, _Constants__WEBPACK_IMPORTED_MODULE_4__["Pencil"]),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal", style: { display: show ? 'block' : null } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", { className: "modal-title" }, "DataSource"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "close", onClick: function () { return setShow(false); } }, "\u00D7")),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DataSource__WEBPACK_IMPORTED_MODULE_3__["default"], { DataSource: dataSource, SetDataSource: setDataSource })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                dispatch(Object(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__["UpdateDataSource"])(dataSource));
                                setShow(false);
                            } }, "Save"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger", onClick: function () { return setShow(false); } }, "Close")))))));
};
/* harmony default export */ __webpack_exports__["default"] = (EditDataSource);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvQ29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNvdXJjZXMvRGF0YVNvdXJjZXMudHN4Iiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNvdXJjZXMvRWRpdERhdGFTb3VyY2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixrQ0FBa0Msc0NBQXNDLFNBQVMsbUNBQW1DLGlFQUFpRSxHQUFHO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsNEdBQTRHO0FBQzFKLDBDQUEwQywrQkFBK0I7QUFDekUsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtEQUFrRCwwQkFB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QUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUUsY0FBTSxjQUFPLENBQUMsS0FBSyxDQUFDLEVBQWQsQ0FBYyxZQUFnQixDQUM1RixDQUVKLENBQ0osQ0FDQSxDQUNQLENBQ04sQ0FBQztBQUNOLENBQUM7QUFFYyw2RUFBYyxFQUFDIiwiZmlsZSI6IkRhdGFTb3VyY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgVGFibGUudHN4IC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAxOCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMDgvMDIvMjAxOCAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEFuZ2xlSWNvbiA9IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBtYXJnaW46IDMgfSwgY2xhc3NOYW1lOiAnZmEgZmEtYW5nbGUtJyArIChwcm9wcy5hc2NlbmRpbmcgPyAndXAnIDogJ2Rvd24nKSB9KSk7IH07XG52YXIgVGFibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRhYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgVGFibGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvd0NvbXBvbmVudHMgPSB0aGlzLmdlbmVyYXRlUm93cygpO1xuICAgICAgICB2YXIgaGVhZGVyQ29tcG9uZW50cyA9IHRoaXMuZ2VuZXJhdGVIZWFkZXJzKCk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLnRhYmxlQ2xhc3MgIT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMudGFibGVDbGFzcyA6ICcnLCBzdHlsZTogdGhpcy5wcm9wcy50YWJsZVN0eWxlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgeyBzdHlsZTogdGhpcy5wcm9wcy50aGVhZFN0eWxlIH0sIGhlYWRlckNvbXBvbmVudHMpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIHsgc3R5bGU6IHRoaXMucHJvcHMudGJvZHlTdHlsZSB9LCByb3dDb21wb25lbnRzKSkpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmdlbmVyYXRlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29scy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGNlbGxzID0gdGhpcy5wcm9wcy5jb2xzLm1hcChmdW5jdGlvbiAoY29sRGF0YSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZTtcbiAgICAgICAgICAgIGlmIChjb2xEYXRhLmhlYWRlclN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGNvbERhdGEuaGVhZGVyU3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChzdHlsZS5jdXJzb3IgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IGtleTogaW5kZXgsIHN0eWxlOiBzdHlsZSwgb25DbGljazogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVNvcnQoeyBjb2w6IGNvbERhdGEua2V5LCBhc2NlbmRpbmc6IF90aGlzLnByb3BzLmFzY2VuZGluZyB9LCBlKTsgfSB9LFxuICAgICAgICAgICAgICAgIGNvbERhdGEubGFiZWwsXG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMuc29ydEZpZWxkID09PSBjb2xEYXRhLmtleSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5nbGVJY29uLCB7IGFzY2VuZGluZzogX3RoaXMucHJvcHMuYXNjZW5kaW5nIH0pIDogbnVsbCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLCBjZWxscyk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuZ2VuZXJhdGVSb3dzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kYXRhLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBjZWxscyA9IF90aGlzLnByb3BzLmNvbHMubWFwKGZ1bmN0aW9uIChjb2xEYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNzcztcbiAgICAgICAgICAgICAgICBpZiAoY29sRGF0YS5yb3dTdHlsZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBjc3MgPSB7fTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNzcyA9IF9fYXNzaWduKHt9LCBjb2xEYXRhLnJvd1N0eWxlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IGtleTogaW5kZXgudG9TdHJpbmcoKSArIGl0ZW1bY29sRGF0YS5rZXldICsgY29sRGF0YS5rZXksIHN0eWxlOiBjc3MsIG9uQ2xpY2s6IF90aGlzLmhhbmRsZUNsaWNrLmJpbmQoX3RoaXMsIHsgY29sOiBjb2xEYXRhLmtleSwgcm93OiBpdGVtLCBkYXRhOiBpdGVtW2NvbERhdGEua2V5XSB9KSB9LCBjb2xEYXRhLmNvbnRlbnQgIT09IHVuZGVmaW5lZCA/IGNvbERhdGEuY29udGVudChpdGVtLCBjb2xEYXRhLmtleSwgY3NzKSA6IGl0ZW1bY29sRGF0YS5rZXldKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBzdHlsZTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5yb3dTdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBfX2Fzc2lnbih7fSwgX3RoaXMucHJvcHMucm93U3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnNlbGVjdGVkICE9PSB1bmRlZmluZWQgJiYgX3RoaXMucHJvcHMuc2VsZWN0ZWQoaXRlbSkpXG4gICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdyc7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IHN0eWxlOiBzdHlsZSwga2V5OiBpbmRleC50b1N0cmluZygpIH0sIGNlbGxzKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGRhdGEsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayhkYXRhLCBldmVudCk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuaGFuZGxlU29ydCA9IGZ1bmN0aW9uIChkYXRhLCBldmVudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU29ydChkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBUYWJsZTtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUYWJsZTtcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25zdGFudHMudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMzAvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbi8vIGVtb2ppc1xyXG5jb25zdCBIZWF2eUNoZWNrTWFyayA9ICfinJTvuI8nO1xyXG5jb25zdCBQZW5jaWwgPSAn4pyP77iPJztcclxuY29uc3QgVHJhc2hDYW4gPSAn8J+Xke+4jyc7XHJcbmNvbnN0IENyb3NzTWFyayA9ICfinYwnO1xyXG5jb25zdCBQbHVzID0gJ+KelSc7XHJcbmV4cG9ydCB7IEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFRyYXNoQ2FuLCBDcm9zc01hcmssUGx1cyB9OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU291cmNlcy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTEvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU29ydCwgU2VsZWN0RGF0YVNvdXJjZXNGb3JVc2VyLCBGZXRjaERhdGFTb3VyY2VzLCBTZWxlY3REYXRhU291cmNlc1N0YXR1cywgUmVtb3ZlRGF0YVNvdXJjZSwgU2VsZWN0RGF0YVNvdXJjZXNBbGxQdWJsaWNOb3RVc2VyLCBTZWxlY3REYXRhU291cmNlc1NvcnRGaWVsZCwgU2VsZWN0RGF0YVNvdXJjZXNBc2NlbmRpbmcgfSBmcm9tICcuL0RhdGFTb3VyY2VzU2xpY2UnXHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlL2xpYi9pbmRleCdcclxuaW1wb3J0IHsgU2VsZWN0RGF0YVNvdXJjZVR5cGVzLCBTZWxlY3REYXRhU291cmNlVHlwZXNTdGF0dXMsIEZldGNoRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnLi4vRGF0YVNvdXJjZVR5cGVzL0RhdGFTb3VyY2VUeXBlc1NsaWNlJztcclxuaW1wb3J0IEVkaXREYXRhU291cmNlIGZyb20gJy4vRWRpdERhdGFTb3VyY2UnO1xyXG5pbXBvcnQgeyBUcmFzaENhbiwgSGVhdnlDaGVja01hcmsgfSBmcm9tICcuLy4uLy4uL0NvbnN0YW50cydcclxuXHJcbmNvbnN0IERhdGFTb3VyY2VzOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gU2VsZWN0RGF0YVNvdXJjZXNGb3JVc2VyKHN0YXRlLCB1c2VyTmFtZSkpO1xyXG4gICAgY29uc3QgcHVibGljRGF0YVNvdXJjZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBTZWxlY3REYXRhU291cmNlc0FsbFB1YmxpY05vdFVzZXIoc3RhdGUsdXNlck5hbWUpKTtcclxuXHJcbiAgICBjb25zdCBkc1N0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VzU3RhdHVzKTtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VUeXBlcyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VUeXBlcyk7XHJcbiAgICBjb25zdCBkc3RTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlVHlwZXNTdGF0dXMpO1xyXG5cclxuICAgIGNvbnN0IHNvcnRGaWVsZCA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VzU29ydEZpZWxkKTtcclxuICAgIGNvbnN0IGFzY2VuZGluZyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VzQXNjZW5kaW5nKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkc1N0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBkc1N0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IGRpc3BhdGNoKEZldGNoRGF0YVNvdXJjZXMoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChkc1N0YXR1cyA9PT0gJ2xvYWRpbmcnKVxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgZHNTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkc3RTdGF0dXMgIT0gJ3VuaXRpYXRlZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBkaXNwYXRjaChGZXRjaERhdGFTb3VyY2VUeXBlcygpKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZihkc3RTdGF0dXMgPT09ICdsb2FkaW5nJylcclxuICAgICAgICAgICAgICAgIHByb21pc2UuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGRzdFN0YXR1c10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMTB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDAgMCAwJyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+TXkgRGF0YVNvdXJjZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlPFRyZW5EQVAuaURhdGFTb3VyY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTmFtZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRGF0YVNvdXJjZVR5cGVJRCcsIGxhYmVsOiAnVHlwZScsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gaXRlbS5EYXRhU291cmNlVHlwZUlEID09PSBkc3QuSUQpPy5OYW1lIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1VSTCcsIGxhYmVsOiAnVXJsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdQdWJsaWMnLCBsYWJlbDogJ1B1YmxpYycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj57aXRlbVtrZXldID8gSGVhdnlDaGVja01hcmsgOiBudWxsfTwvc3Bhbj4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj48RWRpdERhdGFTb3VyY2UgRGF0YVNvdXJjZT17aXRlbX0gLz48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFJlbW92ZURhdGFTb3VyY2UoaXRlbSkpfT57VHJhc2hDYW59PC9idXR0b24+PC9zcGFuPiB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDUwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMTUsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17ZGF0YSA9PiBkaXNwYXRjaChTb3J0KHtTb3J0RmllbGQ6IGRhdGEuY29sLCBBc2NlbmRpbmc6IGRhdGEuYXNjZW5kaW5nfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhU291cmNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAwIDAgMCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+UHVibGljIERhdGFTb3VyY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPFRyZW5EQVAuaURhdGFTb3VyY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdOYW1lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRGF0YVNvdXJjZVR5cGVJRCcsIGxhYmVsOiAnVHlwZScsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gaXRlbS5EYXRhU291cmNlVHlwZUlEID09PSBkc3QuSUQpPy5OYW1lIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVUkwnLCBsYWJlbDogJ1VybCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3sga2V5OiAnUHVibGljJywgbGFiZWw6ICdQdWJsaWMnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e2l0ZW1ba2V5XSA/IEhlYXZ5Q2hlY2tNYXJrIDogbnVsbH08L3NwYW4+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy97IGtleTogbnVsbCwgbGFiZWw6ICcnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+PEVkaXREYXRhU291cmNlIERhdGFTb3VyY2U9e2l0ZW19IC8+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChSZW1vdmVEYXRhU291cmNlKGl0ZW0pKX0+e1RyYXNoQ2FufTwvYnV0dG9uPjwvc3Bhbj4gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA1MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIxNSwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMTUsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17ZGF0YSA9PiBkaXNwYXRjaChTb3J0KHsgU29ydEZpZWxkOiBkYXRhLmNvbCwgQXNjZW5kaW5nOiBkYXRhLmFzY2VuZGluZyB9KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtwdWJsaWNEYXRhU291cmNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVNvdXJjZXM7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEVkaXREYXRhU291cmNlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8yNS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVcGRhdGVEYXRhU291cmNlIH0gZnJvbSAnLi9EYXRhU291cmNlc1NsaWNlJ1xyXG5pbXBvcnQgRGF0YVNvdXJjZSBmcm9tICcuL0RhdGFTb3VyY2UnO1xyXG5pbXBvcnQgeyBQZW5jaWwgfSBmcm9tICcuLy4uLy4uL0NvbnN0YW50cydcclxuY29uc3QgRWRpdERhdGFTb3VyY2U6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgRGF0YVNvdXJjZTogVHJlbkRBUC5pRGF0YVNvdXJjZX0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlEYXRhU291cmNlPihwcm9wcy5EYXRhU291cmNlKTtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4gc2V0U2hvdyh0cnVlKX0+e1BlbmNpbH08L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgc3R5bGU9e3tkaXNwbGF5OiBzaG93ID8gJ2Jsb2NrJyA6IG51bGx9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+RGF0YVNvdXJjZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17KCkgPT4gc2V0U2hvdyhmYWxzZSl9PiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVNvdXJjZSBEYXRhU291cmNlPXtkYXRhU291cmNlfSBTZXREYXRhU291cmNlPXtzZXREYXRhU291cmNlIH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZURhdGFTb3VyY2UoZGF0YVNvdXJjZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmU8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gc2V0U2hvdyhmYWxzZSl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXREYXRhU291cmNlOyJdLCJzb3VyY2VSb290IjoiIn0=
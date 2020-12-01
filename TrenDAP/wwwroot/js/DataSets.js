(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DataSets"],{

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






var DataSets = function (props) {
    //const history = useHistory();
    //const context = React.useContext();
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    var DataSets = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) { return Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["SelectDataSetsForUser"])(state, userName); });
    var publicDataSets = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) { return Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["SelectDataSetsAllPublicNotUser"])(state, userName); });
    var wsStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["SelectDataSetsStatus"]);
    var sortField = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["SelectDataSetsSortField"]);
    var ascending = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["SelectDataSetsAscending"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (wsStatus != 'unitiated' && wsStatus != 'changed')
            return;
        var promise = dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["FetchDataSets"])());
        return function () {
            if (wsStatus === 'loading')
                promise.abort();
        };
    }, [dispatch, wsStatus]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 10 } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-8", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" }, "My DataSets"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                            { key: 'Name', label: 'Name' },
                            { key: 'Public', label: 'Public', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, item[key] ? _Constants__WEBPACK_IMPORTED_MODULE_4__["HeavyCheckMark"] : null); } },
                            { key: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, moment(item[key]).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                            { key: null, label: '', headerStyle: { width: 125 }, rowStyle: { width: 125 }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], { to: homePath + "EditDataSet/" + item.ID, className: 'btn' }, _Constants__WEBPACK_IMPORTED_MODULE_4__["Pencil"]),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "btn", onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["RemoveDataSet"])(item)); } }, _Constants__WEBPACK_IMPORTED_MODULE_4__["TrashCan"])); } }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortField: sortField, onClick: function (data) { }, onSort: function (data) { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["Sort"])({ SortField: data.col, Ascending: data.ascending })); }, data: DataSets, ascending: ascending })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-4", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" }, "Public DataSets"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                            { key: 'Name', label: 'Name' },
                            { key: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, moment(item[key]).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortField: sortField, onClick: function () { }, onSort: function (data) { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__["Sort"])({ SortField: data.col, Ascending: data.ascending })); }, data: publicDataSets, ascending: ascending }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (DataSets);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvQ29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvRGF0YVNldHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixrQ0FBa0Msc0NBQXNDLFNBQVMsbUNBQW1DLGlFQUFpRSxHQUFHO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsNEdBQTRHO0FBQzFKLDBDQUEwQywrQkFBK0I7QUFDekUsMENBQTBDLCtCQUErQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtEQUFrRCwwQkFBMEIscURBQXFELEtBQUssRUFBRSxFQUFFO0FBQ3pMO0FBQ0Esd0ZBQXdGLG1DQUFtQztBQUMzSCxTQUFTO0FBQ1Q7QUFDQTtB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LEVBQUUsRUFDeEYsU0FBUyxFQUFFLFNBQVMsRUFDcEIsT0FBTyxFQUFFLGNBQVEsQ0FBQyxFQUNsQixNQUFNLEVBQUUsY0FBSSxJQUFJLGVBQVEsQ0FBQywyREFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQWxFLENBQWtFLEVBQ2xGLElBQUksRUFBRSxjQUFjLEVBQ3BCLFNBQVMsRUFBRSxTQUFTLEdBQ3RCLENBRUEsQ0FDSixDQUNKLENBRUosQ0FFVCxDQUFDO0FBQ04sQ0FBQztBQUVjLHVFQUFRLEVBQUMiLCJmaWxlIjoiRGF0YVNldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBUYWJsZS50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDE4LCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwOC8wMi8yMDE4IC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgQW5nbGVJY29uID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyB3aWR0aDogMTAsIGhlaWdodDogMTAsIG1hcmdpbjogMyB9LCBjbGFzc05hbWU6ICdmYSBmYS1hbmdsZS0nICsgKHByb3BzLmFzY2VuZGluZyA/ICd1cCcgOiAnZG93bicpIH0pKTsgfTtcbnZhciBUYWJsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVGFibGUocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBUYWJsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm93Q29tcG9uZW50cyA9IHRoaXMuZ2VuZXJhdGVSb3dzKCk7XG4gICAgICAgIHZhciBoZWFkZXJDb21wb25lbnRzID0gdGhpcy5nZW5lcmF0ZUhlYWRlcnMoKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMudGFibGVDbGFzcyAhPT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wcy50YWJsZUNsYXNzIDogJycsIHN0eWxlOiB0aGlzLnByb3BzLnRhYmxlU3R5bGUgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiLCB7IHN0eWxlOiB0aGlzLnByb3BzLnRoZWFkU3R5bGUgfSwgaGVhZGVyQ29tcG9uZW50cyksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgeyBzdHlsZTogdGhpcy5wcm9wcy50Ym9keVN0eWxlIH0sIHJvd0NvbXBvbmVudHMpKSk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuZ2VuZXJhdGVIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb2xzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgY2VsbHMgPSB0aGlzLnByb3BzLmNvbHMubWFwKGZ1bmN0aW9uIChjb2xEYXRhLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuICAgICAgICAgICAgaWYgKGNvbERhdGEuaGVhZGVyU3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gY29sRGF0YS5oZWFkZXJTdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgaWYgKHN0eWxlLmN1cnNvciA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsga2V5OiBpbmRleCwgc3R5bGU6IHN0eWxlLCBvbkNsaWNrOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMuaGFuZGxlU29ydCh7IGNvbDogY29sRGF0YS5rZXksIGFzY2VuZGluZzogX3RoaXMucHJvcHMuYXNjZW5kaW5nIH0sIGUpOyB9IH0sXG4gICAgICAgICAgICAgICAgY29sRGF0YS5sYWJlbCxcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5zb3J0RmllbGQgPT09IGNvbERhdGEua2V5ID8gUmVhY3QuY3JlYXRlRWxlbWVudChBbmdsZUljb24sIHsgYXNjZW5kaW5nOiBfdGhpcy5wcm9wcy5hc2NlbmRpbmcgfSkgOiBudWxsKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsIGNlbGxzKTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5nZW5lcmF0ZVJvd3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGEubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGNlbGxzID0gX3RoaXMucHJvcHMuY29scy5tYXAoZnVuY3Rpb24gKGNvbERhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3NzO1xuICAgICAgICAgICAgICAgIGlmIChjb2xEYXRhLnJvd1N0eWxlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIGNzcyA9IHt9O1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY3NzID0gX19hc3NpZ24oe30sIGNvbERhdGEucm93U3R5bGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsga2V5OiBpbmRleC50b1N0cmluZygpICsgaXRlbVtjb2xEYXRhLmtleV0gKyBjb2xEYXRhLmtleSwgc3R5bGU6IGNzcywgb25DbGljazogX3RoaXMuaGFuZGxlQ2xpY2suYmluZChfdGhpcywgeyBjb2w6IGNvbERhdGEua2V5LCByb3c6IGl0ZW0sIGRhdGE6IGl0ZW1bY29sRGF0YS5rZXldIH0pIH0sIGNvbERhdGEuY29udGVudCAhPT0gdW5kZWZpbmVkID8gY29sRGF0YS5jb250ZW50KGl0ZW0sIGNvbERhdGEua2V5LCBjc3MpIDogaXRlbVtjb2xEYXRhLmtleV0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnJvd1N0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IF9fYXNzaWduKHt9LCBfdGhpcy5wcm9wcy5yb3dTdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgIGlmIChzdHlsZS5jdXJzb3IgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBzdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCAmJiBfdGhpcy5wcm9wcy5zZWxlY3RlZChpdGVtKSlcbiAgICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHsgc3R5bGU6IHN0eWxlLCBrZXk6IGluZGV4LnRvU3RyaW5nKCkgfSwgY2VsbHMpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZGF0YSwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGRhdGEsIGV2ZW50KTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5oYW5kbGVTb3J0ID0gZnVuY3Rpb24gKGRhdGEsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Tb3J0KGRhdGEpO1xuICAgIH07XG4gICAgcmV0dXJuIFRhYmxlO1xufShSZWFjdC5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlO1xuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbnN0YW50cy50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8zMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuLy8gZW1vamlzXHJcbmNvbnN0IEhlYXZ5Q2hlY2tNYXJrID0gJ+KclO+4jyc7XHJcbmNvbnN0IFBlbmNpbCA9ICfinI/vuI8nO1xyXG5jb25zdCBUcmFzaENhbiA9ICfwn5eR77iPJztcclxuY29uc3QgQ3Jvc3NNYXJrID0gJ+KdjCc7XHJcbmNvbnN0IFBsdXMgPSAn4p6VJztcclxuZXhwb3J0IHsgSGVhdnlDaGVja01hcmssIFBlbmNpbCwgVHJhc2hDYW4sIENyb3NzTWFyayxQbHVzIH07IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERhdGFTZXRzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8yNS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUvbGliL2luZGV4J1xyXG5pbXBvcnQgeyBTb3J0LCBGZXRjaERhdGFTZXRzLCBTZWxlY3REYXRhU2V0c1N0YXR1cywgUmVtb3ZlRGF0YVNldCwgU2VsZWN0RGF0YVNldHNGb3JVc2VyLCBTZWxlY3REYXRhU2V0c0FsbFB1YmxpY05vdFVzZXIsIFNlbGVjdERhdGFTZXRzU29ydEZpZWxkLCBTZWxlY3REYXRhU2V0c0FzY2VuZGluZyB9IGZyb20gJy4vRGF0YVNldHNTbGljZSc7XHJcbmltcG9ydCBFZGl0RGF0YVNldCBmcm9tICcuL0VkaXREYXRhU2V0JztcclxuaW1wb3J0IHsgVHJhc2hDYW4sIEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwgfSBmcm9tICcuLy4uLy4uL0NvbnN0YW50cydcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IERhdGFTZXRzOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wczoge30pID0+IHtcclxuICAgIC8vY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICAgIC8vY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IERhdGFTZXRzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gU2VsZWN0RGF0YVNldHNGb3JVc2VyKHN0YXRlLCB1c2VyTmFtZSkpO1xyXG4gICAgY29uc3QgcHVibGljRGF0YVNldHMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBTZWxlY3REYXRhU2V0c0FsbFB1YmxpY05vdFVzZXIoc3RhdGUsIHVzZXJOYW1lKSk7XHJcblxyXG4gICAgY29uc3Qgd3NTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0c1N0YXR1cyk7XHJcblxyXG4gICAgY29uc3Qgc29ydEZpZWxkID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHNTb3J0RmllbGQpO1xyXG4gICAgY29uc3QgYXNjZW5kaW5nID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHNBc2NlbmRpbmcpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdzU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIHdzU3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gZGlzcGF0Y2goRmV0Y2hEYXRhU2V0cygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHdzU3RhdHVzID09PSAnbG9hZGluZycpXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCB3c1N0YXR1c10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDEwIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCIgc3R5bGU9e3sgcGFkZGluZzogJzAgMCAwIDAnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPk15IERhdGFTZXRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPFRyZW5EQVAuaURhdGFTZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTmFtZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnUHVibGljJywgbGFiZWw6ICdQdWJsaWMnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e2l0ZW1ba2V5XSA/IEhlYXZ5Q2hlY2tNYXJrIDogbnVsbH08L3NwYW4+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1VwZGF0ZWRPbicsIGxhYmVsOiAnVXBkYXRlZCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj57bW9tZW50KGl0ZW1ba2V5XSkuc3VidHJhY3QobmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpLmZvcm1hdCgnTU0vREQvWVkgSEg6bW0nKX08L3NwYW4+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogMTI1IH0sIHJvd1N0eWxlOiB7IHdpZHRoOiAxMjUgfSwgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxzcGFuPjxMaW5rIHRvPXtgJHtob21lUGF0aH1FZGl0RGF0YVNldC8ke2l0ZW0uSUR9YH0gY2xhc3NOYW1lPSdidG4nPntQZW5jaWx9PC9MaW5rPjxhIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFJlbW92ZURhdGFTZXQoaXRlbSkpIH0+e1RyYXNoQ2FufTwvYT48L3NwYW4+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA1MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIxNSwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGRhdGEpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXtkYXRhID0+IGRpc3BhdGNoKFNvcnQoeyBTb3J0RmllbGQ6IGRhdGEuY29sLCBBc2NlbmRpbmc6IGRhdGEuYXNjZW5kaW5nIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17RGF0YVNldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDAgMCAwJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5QdWJsaWMgRGF0YVNldHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8VHJlbkRBUC5pRGF0YVNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ05hbWUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVcGRhdGVkT24nLCBsYWJlbDogJ1VwZGF0ZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e21vbWVudChpdGVtW2tleV0pLnN1YnRyYWN0KG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSwgJ21pbnV0ZXMnKS5mb3JtYXQoJ01NL0REL1lZIEhIOm1tJyl9PC9zcGFuPiB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3sga2V5OiBudWxsLCBsYWJlbDogJycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj48RWRpdERhdGFTZXQgRGF0YVNldD17aXRlbX0gLz48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFJlbW92ZURhdGFTZXQoaXRlbSkpfT57VHJhc2hDYW59PC9idXR0b24+PC9zcGFuPiB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDUwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIxNSwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXtkYXRhID0+IGRpc3BhdGNoKFNvcnQoeyBTb3J0RmllbGQ6IGRhdGEuY29sLCBBc2NlbmRpbmc6IGRhdGEuYXNjZW5kaW5nIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3B1YmxpY0RhdGFTZXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0czsiXSwic291cmNlUm9vdCI6IiJ9
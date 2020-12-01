(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WorkSpaces"],{

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

/***/ "./TypeScript/Features/WorkSpaces/EditWorkSpace.tsx":
/*!**********************************************************!*\
  !*** ./TypeScript/Features/WorkSpaces/EditWorkSpace.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkSpacesSlice */ "./TypeScript/Features/WorkSpaces/WorkSpacesSlice.ts");
/* harmony import */ var _WorkSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkSpace */ "./TypeScript/Features/WorkSpaces/WorkSpace.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Constants */ "./TypeScript/Constants.ts");
//******************************************************************************************************
//  EditWorkSpace.tsx - Gbtc
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





var EditWorkSpace = function (props) {
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.WorkSpace), 2), ws = _a[0], setWorkSpace = _a[1];
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
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_WorkSpace__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: ws, SetWorkSpace: setWorkSpace })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_2__["UpdateWorkSpace"])(ws));
                                setShow(false);
                            } }, "Save"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger", onClick: function () { return setShow(false); } }, "Close")))))));
};
/* harmony default export */ __webpack_exports__["default"] = (EditWorkSpace);


/***/ }),

/***/ "./TypeScript/Features/WorkSpaces/WorkSpaces.tsx":
/*!*******************************************************!*\
  !*** ./TypeScript/Features/WorkSpaces/WorkSpaces.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table/lib/index */ "../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkSpacesSlice */ "./TypeScript/Features/WorkSpaces/WorkSpacesSlice.ts");
/* harmony import */ var _EditWorkSpace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditWorkSpace */ "./TypeScript/Features/WorkSpaces/EditWorkSpace.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Constants */ "./TypeScript/Constants.ts");
//******************************************************************************************************
//  WorkSpaces.tsx - Gbtc
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






var WorkSpaces = function (props) {
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    var workSpaces = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) { return Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__["SelectWorkSpacesForUser"])(state, userName); });
    var publicWorkSpaces = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) { return Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__["SelectWorkSpacesAllPublicNotUser"])(state, userName); });
    var wsStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__["SelectWorkSpacesStatus"]);
    var sortField = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__["SelectWorkSpacesSortField"]);
    var ascending = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__["SelectWorkSpacesAscending"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (wsStatus != 'unitiated' && wsStatus != 'changed')
            return;
        var promise = dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__["FetchWorkSpaces"])());
        return function () {
            if (wsStatus === 'loading')
                promise.abort();
        };
    }, [dispatch, wsStatus]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row", style: { margin: 10 } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-8", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" }, "My Workspaces"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                            { key: 'Name', label: 'Name' },
                            { key: 'Public', label: 'Public', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, item[key] ? _Constants__WEBPACK_IMPORTED_MODULE_5__["HeavyCheckMark"] : null); } },
                            { key: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, moment(item[key]).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                            {
                                key: null, label: '', content: function (item, key, style) {
                                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EditWorkSpace__WEBPACK_IMPORTED_MODULE_4__["default"], { WorkSpace: item }),
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", onClick: function (evt) {
                                                evt.preventDefault();
                                                dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__["RemoveWorkSpace"])(item));
                                            } }, _Constants__WEBPACK_IMPORTED_MODULE_5__["TrashCan"]));
                                }
                            }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortField: sortField, onClick: function (data, evt) {
                            if (!evt.target.classList.contains('btn'))
                                window.location.href = homePath + "WorkSpaceEditor/" + data.row.ID;
                        }, onSort: function (data) { return dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__["Sort"])({ SortField: data.col, Ascending: data.ascending })); }, data: workSpaces, ascending: ascending })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-4", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card " },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" }, "Public Workspaces"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2___default.a, { cols: [
                            { key: 'Name', label: 'Name' },
                            { key: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, moment(item[key]).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortField: sortField, onClick: function () { }, onSort: function (data) { return dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__["Sort"])({ SortField: data.col, Ascending: data.ascending })); }, data: publicWorkSpaces, ascending: ascending }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (WorkSpaces);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvQ29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvRmVhdHVyZXMvV29ya1NwYWNlcy9FZGl0V29ya1NwYWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dvcmtTcGFjZXMvV29ya1NwYWNlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLGtDQUFrQyxzQ0FBc0MsU0FBUyxtQ0FBbUMsaUVBQWlFLEdBQUc7QUFDeEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw0R0FBNEc7QUFDMUosMENBQTBDLCtCQUErQjtBQUN6RSwwQ0FBMEMsK0JBQStCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msa0RBQWtELDBCQUEwQixx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LHlFQUFVLEVBQUMiLCJmaWxlIjoiV29ya1NwYWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIFRhYmxlLnRzeCAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IMKpIDIwMTgsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDA4LzAyLzIwMTggLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBBbmdsZUljb24gPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IHdpZHRoOiAxMCwgaGVpZ2h0OiAxMCwgbWFyZ2luOiAzIH0sIGNsYXNzTmFtZTogJ2ZhIGZhLWFuZ2xlLScgKyAocHJvcHMuYXNjZW5kaW5nID8gJ3VwJyA6ICdkb3duJykgfSkpOyB9O1xudmFyIFRhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUYWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRhYmxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb3dDb21wb25lbnRzID0gdGhpcy5nZW5lcmF0ZVJvd3MoKTtcbiAgICAgICAgdmFyIGhlYWRlckNvbXBvbmVudHMgPSB0aGlzLmdlbmVyYXRlSGVhZGVycygpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IGNsYXNzTmFtZTogdGhpcy5wcm9wcy50YWJsZUNsYXNzICE9PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzLnRhYmxlQ2xhc3MgOiAnJywgc3R5bGU6IHRoaXMucHJvcHMudGFibGVTdHlsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIHsgc3R5bGU6IHRoaXMucHJvcHMudGhlYWRTdHlsZSB9LCBoZWFkZXJDb21wb25lbnRzKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCB7IHN0eWxlOiB0aGlzLnByb3BzLnRib2R5U3R5bGUgfSwgcm93Q29tcG9uZW50cykpKTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5nZW5lcmF0ZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBjZWxscyA9IHRoaXMucHJvcHMuY29scy5tYXAoZnVuY3Rpb24gKGNvbERhdGEsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG4gICAgICAgICAgICBpZiAoY29sRGF0YS5oZWFkZXJTdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBjb2xEYXRhLmhlYWRlclN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHN0eWxlID0ge307XG4gICAgICAgICAgICBpZiAoc3R5bGUuY3Vyc29yID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBrZXk6IGluZGV4LCBzdHlsZTogc3R5bGUsIG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5oYW5kbGVTb3J0KHsgY29sOiBjb2xEYXRhLmtleSwgYXNjZW5kaW5nOiBfdGhpcy5wcm9wcy5hc2NlbmRpbmcgfSwgZSk7IH0gfSxcbiAgICAgICAgICAgICAgICBjb2xEYXRhLmxhYmVsLFxuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLnNvcnRGaWVsZCA9PT0gY29sRGF0YS5rZXkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEFuZ2xlSWNvbiwgeyBhc2NlbmRpbmc6IF90aGlzLnByb3BzLmFzY2VuZGluZyB9KSA6IG51bGwpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgY2VsbHMpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmdlbmVyYXRlUm93cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2VsbHMgPSBfdGhpcy5wcm9wcy5jb2xzLm1hcChmdW5jdGlvbiAoY29sRGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBjc3M7XG4gICAgICAgICAgICAgICAgaWYgKGNvbERhdGEucm93U3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgY3NzID0ge307XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjc3MgPSBfX2Fzc2lnbih7fSwgY29sRGF0YS5yb3dTdHlsZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBrZXk6IGluZGV4LnRvU3RyaW5nKCkgKyBpdGVtW2NvbERhdGEua2V5XSArIGNvbERhdGEua2V5LCBzdHlsZTogY3NzLCBvbkNsaWNrOiBfdGhpcy5oYW5kbGVDbGljay5iaW5kKF90aGlzLCB7IGNvbDogY29sRGF0YS5rZXksIHJvdzogaXRlbSwgZGF0YTogaXRlbVtjb2xEYXRhLmtleV0gfSkgfSwgY29sRGF0YS5jb250ZW50ICE9PSB1bmRlZmluZWQgPyBjb2xEYXRhLmNvbnRlbnQoaXRlbSwgY29sRGF0YS5rZXksIGNzcykgOiBpdGVtW2NvbERhdGEua2V5XSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMucm93U3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gX19hc3NpZ24oe30sIF90aGlzLnByb3BzLnJvd1N0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgaWYgKHN0eWxlLmN1cnNvciA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5zZWxlY3RlZCAhPT0gdW5kZWZpbmVkICYmIF90aGlzLnByb3BzLnNlbGVjdGVkKGl0ZW0pKVxuICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgeyBzdHlsZTogc3R5bGUsIGtleTogaW5kZXgudG9TdHJpbmcoKSB9LCBjZWxscykpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChkYXRhLCBldmVudCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZGF0YSwgZXZlbnQpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmhhbmRsZVNvcnQgPSBmdW5jdGlvbiAoZGF0YSwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNvcnQoZGF0YSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGFibGU7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVGFibGU7XG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uc3RhbnRzLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzMwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyBlbW9qaXNcclxuY29uc3QgSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcclxuY29uc3QgUGVuY2lsID0gJ+Kcj++4jyc7XHJcbmNvbnN0IFRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xyXG5jb25zdCBDcm9zc01hcmsgPSAn4p2MJztcclxuY29uc3QgUGx1cyA9ICfinpUnO1xyXG5leHBvcnQgeyBIZWF2eUNoZWNrTWFyaywgUGVuY2lsLCBUcmFzaENhbiwgQ3Jvc3NNYXJrLFBsdXMgfTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRWRpdFdvcmtTcGFjZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMjUvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVcGRhdGVXb3JrU3BhY2UgfSBmcm9tICcuL1dvcmtTcGFjZXNTbGljZSdcclxuaW1wb3J0IFdvcmtTcGFjZSBmcm9tICcuL1dvcmtTcGFjZSc7XHJcbmltcG9ydCB7IFBlbmNpbCB9IGZyb20gJy4vLi4vLi4vQ29uc3RhbnRzJ1xyXG5jb25zdCBFZGl0V29ya1NwYWNlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IFdvcmtTcGFjZTogVHJlbkRBUC5pV29ya1NwYWNlfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFt3cywgc2V0V29ya1NwYWNlXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVdvcmtTcGFjZT4ocHJvcHMuV29ya1NwYWNlKTtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KHRydWUpfT57UGVuY2lsfTwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBzdHlsZT17e2Rpc3BsYXk6IHNob3cgPyAnYmxvY2snIDogbnVsbH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5EYXRhU291cmNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya1NwYWNlIFJlY29yZD17d3N9IFNldFdvcmtTcGFjZT17c2V0V29ya1NwYWNlIH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChVcGRhdGVXb3JrU3BhY2Uod3MpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3coZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0V29ya1NwYWNlOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBXb3JrU3BhY2VzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8yNS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUvbGliL2luZGV4J1xyXG5pbXBvcnQgeyBTb3J0LCBGZXRjaFdvcmtTcGFjZXMsIFNlbGVjdFdvcmtTcGFjZXNTdGF0dXMsIFJlbW92ZVdvcmtTcGFjZSwgU2VsZWN0V29ya1NwYWNlc0ZvclVzZXIsIFNlbGVjdFdvcmtTcGFjZXNBbGxQdWJsaWNOb3RVc2VyLCBTZWxlY3RXb3JrU3BhY2VzU29ydEZpZWxkLCBTZWxlY3RXb3JrU3BhY2VzQXNjZW5kaW5nIH0gZnJvbSAnLi9Xb3JrU3BhY2VzU2xpY2UnO1xyXG5pbXBvcnQgRWRpdFdvcmtTcGFjZSBmcm9tICcuL0VkaXRXb3JrU3BhY2UnO1xyXG5pbXBvcnQgeyBUcmFzaENhbiwgSGVhdnlDaGVja01hcmsgfSBmcm9tICcuLy4uLy4uL0NvbnN0YW50cydcclxuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBXb3JrU3BhY2VzOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHdvcmtTcGFjZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBTZWxlY3RXb3JrU3BhY2VzRm9yVXNlcihzdGF0ZSwgdXNlck5hbWUpKTtcclxuICAgIGNvbnN0IHB1YmxpY1dvcmtTcGFjZXMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBTZWxlY3RXb3JrU3BhY2VzQWxsUHVibGljTm90VXNlcihzdGF0ZSwgdXNlck5hbWUpKTtcclxuXHJcbiAgICBjb25zdCB3c1N0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdFdvcmtTcGFjZXNTdGF0dXMpO1xyXG5cclxuICAgIGNvbnN0IHNvcnRGaWVsZCA9IHVzZVNlbGVjdG9yKFNlbGVjdFdvcmtTcGFjZXNTb3J0RmllbGQpO1xyXG4gICAgY29uc3QgYXNjZW5kaW5nID0gdXNlU2VsZWN0b3IoU2VsZWN0V29ya1NwYWNlc0FzY2VuZGluZyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod3NTdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgd3NTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHByb21pc2UgPSBkaXNwYXRjaChGZXRjaFdvcmtTcGFjZXMoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh3c1N0YXR1cyA9PT0gJ2xvYWRpbmcnKVxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgd3NTdGF0dXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiIHN0eWxlPXt7cGFkZGluZzogJzAgMCAwIDAnfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+TXkgV29ya3NwYWNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxUcmVuREFQLmlXb3JrU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdOYW1lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnUHVibGljJywgbGFiZWw6ICdQdWJsaWMnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e2l0ZW1ba2V5XSA/IEhlYXZ5Q2hlY2tNYXJrIDogbnVsbH08L3NwYW4+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVcGRhdGVkT24nLCBsYWJlbDogJ1VwZGF0ZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e21vbWVudChpdGVtW2tleV0pLnN1YnRyYWN0KG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSwgJ21pbnV0ZXMnKS5mb3JtYXQoJ01NL0REL1lZIEhIOm1tJyl9PC9zcGFuPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG51bGwsIGxhYmVsOiAnJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEVkaXRXb3JrU3BhY2UgV29ya1NwYWNlPXtpdGVtfSAvPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goUmVtb3ZlV29ya1NwYWNlKGl0ZW0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57VHJhc2hDYW59PC9idXR0b24+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDUwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIxNSwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZD17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGRhdGEsIGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bicpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke2hvbWVQYXRofVdvcmtTcGFjZUVkaXRvci8ke2RhdGEucm93LklEfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9e2RhdGEgPT4gZGlzcGF0Y2goU29ydCh7IFNvcnRGaWVsZDogZGF0YS5jb2wsIEFzY2VuZGluZzogZGF0YS5hc2NlbmRpbmcgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17d29ya1NwYWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDAgMCAwJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+UHVibGljIFdvcmtzcGFjZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8VHJlbkRBUC5pV29ya1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTmFtZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1VwZGF0ZWRPbicsIGxhYmVsOiAnVXBkYXRlZCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj57bW9tZW50KGl0ZW1ba2V5XSkuc3VidHJhY3QobmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpLmZvcm1hdCgnTU0vREQvWVkgSEg6bW0nKX08L3NwYW4+IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8veyBrZXk6IG51bGwsIGxhYmVsOiAnJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxzcGFuPjxFZGl0V29ya1NwYWNlIFdvcmtTcGFjZT17aXRlbX0gLz48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFJlbW92ZVdvcmtTcGFjZShpdGVtKSl9PntUcmFzaENhbn08L2J1dHRvbj48L3NwYW4+IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNTAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMTUsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9e2RhdGEgPT4gZGlzcGF0Y2goU29ydCh7IFNvcnRGaWVsZDogZGF0YS5jb2wsIEFzY2VuZGluZzogZGF0YS5hc2NlbmRpbmcgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHVibGljV29ya1NwYWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya1NwYWNlczsiXSwic291cmNlUm9vdCI6IiJ9
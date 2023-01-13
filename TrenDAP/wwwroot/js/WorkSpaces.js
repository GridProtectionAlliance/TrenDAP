"use strict";
(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["WorkSpaces"],{

/***/ "./wwwroot/TypeScript/Constants.ts":
/*!*****************************************!*\
  !*** ./wwwroot/TypeScript/Constants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrossMark": () => (/* binding */ CrossMark),
/* harmony export */   "HeavyCheckMark": () => (/* binding */ HeavyCheckMark),
/* harmony export */   "Pencil": () => (/* binding */ Pencil),
/* harmony export */   "Plus": () => (/* binding */ Plus),
/* harmony export */   "Spinner": () => (/* binding */ Spinner),
/* harmony export */   "TrashCan": () => (/* binding */ TrashCan),
/* harmony export */   "Warning": () => (/* binding */ Warning),
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

/***/ "./wwwroot/TypeScript/Features/WorkSpaces/EditWorkSpace.tsx":
/*!******************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/WorkSpaces/EditWorkSpace.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkSpacesSlice */ "./wwwroot/TypeScript/Features/WorkSpaces/WorkSpacesSlice.ts");
/* harmony import */ var _WorkSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkSpace */ "./wwwroot/TypeScript/Features/WorkSpaces/WorkSpace.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Constants */ "./wwwroot/TypeScript/Constants.ts");
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
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(__assign({}, props.WorkSpace)), 2), ws = _a[0], setWorkSpace = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), show = _b[0], setShow = _b[1];
    function Cancel() {
        setWorkSpace(props.WorkSpace);
        setShow(false);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", onClick: function (evt) {
                evt.preventDefault();
                setShow(true);
            } }, _Constants__WEBPACK_IMPORTED_MODULE_4__.Pencil),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal", style: { display: show ? 'block' : null, backgroundColor: 'rgba(0,0,0,0.4)' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-dialog" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", { className: "modal-title" }, "Workspace"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "close", onClick: Cancel }, "\u00D7")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WorkSpace__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: ws, SetWorkSpace: setWorkSpace, Edit: true })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_2__.UpdateWorkSpace)(ws));
                                setShow(false);
                            } }, "Save"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-danger", onClick: Cancel }, "Close")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditWorkSpace);


/***/ }),

/***/ "./wwwroot/TypeScript/Features/WorkSpaces/WorkSpaces.tsx":
/*!***************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/WorkSpaces/WorkSpaces.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkSpacesSlice */ "./wwwroot/TypeScript/Features/WorkSpaces/WorkSpacesSlice.ts");
/* harmony import */ var _EditWorkSpace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditWorkSpace */ "./wwwroot/TypeScript/Features/WorkSpaces/EditWorkSpace.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Constants */ "./wwwroot/TypeScript/Constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DataSets/DataSetsSlice */ "./wwwroot/TypeScript/Features/DataSets/DataSetsSlice.ts");
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
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var workSpaces = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return (0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.SelectWorkSpacesForUser)(state, userName); });
    var publicWorkSpaces = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return (0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.SelectWorkSpacesAllPublicNotUser)(state, userName); });
    var dataSets = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_7__.SelectDataSets);
    var wsStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.SelectWorkSpacesStatus);
    var sortField = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.SelectWorkSpacesSortField);
    var ascending = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.SelectWorkSpacesAscending);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (wsStatus != 'unitiated' && wsStatus != 'changed')
            return;
        dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.FetchWorkSpaces)());
        return function () {
        };
    }, [dispatch, wsStatus]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 10 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-8", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" }, "My Workspaces"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__["default"], { cols: [
                            { key: 'Name', label: 'Name', field: 'Name' },
                            { key: 'DataSetID', label: 'Data Set', field: 'DataSetID', content: function (item, key, style) { var _a; return (_a = dataSets.find(function (ds) { return ds.ID === item.DataSetID; })) === null || _a === void 0 ? void 0 : _a.Name; } },
                            { key: 'Type', label: 'Type', field: 'Type' },
                            { key: 'Public', label: 'Shared', field: 'Public', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item[key] ? _Constants__WEBPACK_IMPORTED_MODULE_5__.HeavyCheckMark : null); } },
                            { key: 'UpdatedOn', field: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_6___default()(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                            {
                                key: null, label: '', content: function (item, key, style) {
                                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditWorkSpace__WEBPACK_IMPORTED_MODULE_4__["default"], { WorkSpace: item }),
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", onClick: function (evt) {
                                                evt.preventDefault();
                                                dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.RemoveWorkSpace)(item));
                                            } }, _Constants__WEBPACK_IMPORTED_MODULE_5__.TrashCan));
                                }
                            }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortKey: sortField, onClick: function (data, evt) {
                            if (evt.target.tagName.toLowerCase() === 'td')
                                window.location.href = "".concat(homePath, "WorkSpaceEditor/").concat(data.row.ID);
                        }, onSort: function (data) { return dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.Sort)({ SortField: data.colField, Ascending: data.ascending })); }, data: workSpaces, ascending: ascending })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-4", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card " },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" }, "Shared Workspaces"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__["default"], { cols: [
                            { key: 'Name', label: 'Name', field: 'Name' },
                            { key: 'DataSetID', field: 'DataSetID', label: 'Data Set', content: function (item, key, style) { var _a; return (_a = dataSets.find(function (ds) { return ds.ID === item.ID; })) === null || _a === void 0 ? void 0 : _a.Name; } },
                            { key: 'UpdatedOn', field: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_6___default()(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                            //{ key: null, label: '', content: (item, key, style) => <span><EditWorkSpace WorkSpace={item} /><button className="btn" onClick={() => dispatch(RemoveWorkSpace(item))}>{TrashCan}</button></span> }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortKey: sortField, onClick: function () { return function (data, evt) {
                            if (evt.target.tagName.toLowerCase() === 'td')
                                window.location.href = "".concat(homePath, "WorkSpaceEditor/").concat(data.row.ID);
                        }; }, onSort: function (data) { return dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.Sort)({ SortField: data.colField, Ascending: data.ascending })); }, data: publicWorkSpaces, ascending: ascending }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkSpaces);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEVBQUUsRUFBRSxFQUFFLEVBQ3RHLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDM0ksUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN4RixPQUFPLEVBQUUsU0FBUyxFQUNsQixPQUFPLEVBQUUsY0FBTSxpQkFBQyxJQUFJLEVBQUUsR0FBRzs0QkFDckIsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJO2dDQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFHLFFBQVEsNkJBQW1CLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFFO3dCQUMxRSxDQUFDLEVBSGMsQ0FHZCxFQUNELE1BQU0sRUFBRSxjQUFJLElBQUksZUFBUSxDQUFDLHNEQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBdkUsQ0FBdUUsRUFDdkYsSUFBSSxFQUFFLGdCQUFnQixFQUN0QixTQUFTLEVBQUUsU0FBUyxHQUN0QixDQUVBLENBQ0osQ0FDSixDQUVKLENBRVQsQ0FBQztBQUNOLENBQUM7QUFFRCxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dvcmtTcGFjZXMvRWRpdFdvcmtTcGFjZS50c3giLCJ3ZWJwYWNrOi8vdHJlbmRhcC8uL3d3d3Jvb3QvVHlwZVNjcmlwdC9GZWF0dXJlcy9Xb3JrU3BhY2VzL1dvcmtTcGFjZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25zdGFudHMudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMzAvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbi8vIGVtb2ppc1xyXG5jb25zdCBIZWF2eUNoZWNrTWFyayA9ICfinJTvuI8nO1xyXG5jb25zdCBQZW5jaWwgPSAn4pyP77iPJztcclxuY29uc3QgVHJhc2hDYW4gPSAn8J+Xke+4jyc7XHJcbmNvbnN0IENyb3NzTWFyayA9ICfinYwnO1xyXG5jb25zdCBQbHVzID0gJ+KelSc7XHJcbmNvbnN0IFdhcm5pbmcgPSAn4pqg77iPJztcclxuY29uc3QgU3Bpbm5lciA9ICfwn5SEJztcclxuY29uc3QgV3JlbmNoID0gJ/CflKcnO1xyXG5cclxuZXhwb3J0IHsgSGVhdnlDaGVja01hcmssIFBlbmNpbCwgVHJhc2hDYW4sIENyb3NzTWFyaywgUGx1cywgV2FybmluZywgU3Bpbm5lciwgV3JlbmNoIH07IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEVkaXRXb3JrU3BhY2UudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzI1LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVXBkYXRlV29ya1NwYWNlIH0gZnJvbSAnLi9Xb3JrU3BhY2VzU2xpY2UnXHJcbmltcG9ydCBXb3JrU3BhY2UgZnJvbSAnLi9Xb3JrU3BhY2UnO1xyXG5pbXBvcnQgeyBQZW5jaWwgfSBmcm9tICcuLy4uLy4uL0NvbnN0YW50cydcclxuY29uc3QgRWRpdFdvcmtTcGFjZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBXb3JrU3BhY2U6IFRyZW5EQVAuaVdvcmtTcGFjZX0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbd3MsIHNldFdvcmtTcGFjZV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlXb3JrU3BhY2U+KHsgLi4ucHJvcHMuV29ya1NwYWNlIH0pO1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIENhbmNlbCgpIHtcclxuICAgICAgICBzZXRXb3JrU3BhY2UocHJvcHMuV29ya1NwYWNlKTtcclxuICAgICAgICBzZXRTaG93KGZhbHNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNldFNob3codHJ1ZSlcclxuICAgICAgICAgICAgfX0+e1BlbmNpbH08L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHN0eWxlPXt7ZGlzcGxheTogc2hvdyA/ICdibG9jaycgOiBudWxsLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNCknfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5Xb3Jrc3BhY2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXtDYW5jZWx9PiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya1NwYWNlIFJlY29yZD17d3N9IFNldFdvcmtTcGFjZT17c2V0V29ya1NwYWNlfSBFZGl0PXt0cnVlIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goVXBkYXRlV29ya1NwYWNlKHdzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXtDYW5jZWx9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRXb3JrU3BhY2U7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFdvcmtTcGFjZXMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzI1LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnXHJcbmltcG9ydCB7IFNvcnQsIEZldGNoV29ya1NwYWNlcywgU2VsZWN0V29ya1NwYWNlc1N0YXR1cywgUmVtb3ZlV29ya1NwYWNlLCBTZWxlY3RXb3JrU3BhY2VzRm9yVXNlciwgU2VsZWN0V29ya1NwYWNlc0FsbFB1YmxpY05vdFVzZXIsIFNlbGVjdFdvcmtTcGFjZXNTb3J0RmllbGQsIFNlbGVjdFdvcmtTcGFjZXNBc2NlbmRpbmcgfSBmcm9tICcuL1dvcmtTcGFjZXNTbGljZSc7XHJcbmltcG9ydCBFZGl0V29ya1NwYWNlIGZyb20gJy4vRWRpdFdvcmtTcGFjZSc7XHJcbmltcG9ydCB7IFRyYXNoQ2FuLCBIZWF2eUNoZWNrTWFyayB9IGZyb20gJy4vLi4vLi4vQ29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3REYXRhU2V0cyB9IGZyb20gJy4uL0RhdGFTZXRzL0RhdGFTZXRzU2xpY2UnO1xyXG5cclxuY29uc3QgV29ya1NwYWNlczogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAocHJvcHM6IHt9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB3b3JrU3BhY2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RXb3JrU3BhY2VzRm9yVXNlcihzdGF0ZSwgdXNlck5hbWUpKTtcclxuICAgIGNvbnN0IHB1YmxpY1dvcmtTcGFjZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFdvcmtTcGFjZXNBbGxQdWJsaWNOb3RVc2VyKHN0YXRlLCB1c2VyTmFtZSkpO1xyXG4gICAgY29uc3QgZGF0YVNldHMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0cyk7XHJcbiAgICBjb25zdCB3c1N0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdFdvcmtTcGFjZXNTdGF0dXMpO1xyXG5cclxuICAgIGNvbnN0IHNvcnRGaWVsZCA9IHVzZVNlbGVjdG9yKFNlbGVjdFdvcmtTcGFjZXNTb3J0RmllbGQpO1xyXG4gICAgY29uc3QgYXNjZW5kaW5nID0gdXNlU2VsZWN0b3IoU2VsZWN0V29ya1NwYWNlc0FzY2VuZGluZyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod3NTdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgd3NTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hXb3JrU3BhY2VzKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgd3NTdGF0dXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiIHN0eWxlPXt7cGFkZGluZzogJzAgMCAwIDAnfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+TXkgV29ya3NwYWNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxUcmVuREFQLmlXb3JrU3BhY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgbGFiZWw6ICdOYW1lJywgZmllbGQ6ICdOYW1lJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdEYXRhU2V0SUQnLCBsYWJlbDogJ0RhdGEgU2V0JywgIGZpZWxkOiAnRGF0YVNldElEJyxjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gZGF0YVNldHMuZmluZChkcyA9PiBkcy5JRCA9PT0gaXRlbS5EYXRhU2V0SUQpPy5OYW1lIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdUeXBlJywgbGFiZWw6ICdUeXBlJywgZmllbGQ6ICdUeXBlJyB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1B1YmxpYycsIGxhYmVsOiAnU2hhcmVkJywgZmllbGQ6ICdQdWJsaWMnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e2l0ZW1ba2V5XSA/IEhlYXZ5Q2hlY2tNYXJrIDogbnVsbH08L3NwYW4+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVcGRhdGVkT24nLCBmaWVsZDogJ1VwZGF0ZWRPbicsbGFiZWw6ICdVcGRhdGVkJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxzcGFuPnttb21lbnQoaXRlbS5VcGRhdGVkT24pLnN1YnRyYWN0KG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSwgJ21pbnV0ZXMnKS5mb3JtYXQoJ01NL0REL1lZIEhIOm1tJyl9PC9zcGFuPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG51bGwsIGxhYmVsOiAnJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEVkaXRXb3JrU3BhY2UgV29ya1NwYWNlPXtpdGVtfSAvPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goUmVtb3ZlV29ya1NwYWNlKGl0ZW0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57VHJhc2hDYW59PC9idXR0b24+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDUwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIxNSwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRLZXk9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkYXRhLCBldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7aG9tZVBhdGh9V29ya1NwYWNlRWRpdG9yLyR7ZGF0YS5yb3cuSUR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17ZGF0YSA9PiBkaXNwYXRjaChTb3J0KHsgU29ydEZpZWxkOiBkYXRhLmNvbEZpZWxkLCBBc2NlbmRpbmc6IGRhdGEuYXNjZW5kaW5nIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3dvcmtTcGFjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAwIDAgMCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlNoYXJlZCBXb3Jrc3BhY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPFRyZW5EQVAuaVdvcmtTcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ05hbWUnLCBmaWVsZDogJ05hbWUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdEYXRhU2V0SUQnLCBmaWVsZDogJ0RhdGFTZXRJRCcsIGxhYmVsOiAnRGF0YSBTZXQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gZGF0YVNldHMuZmluZChkcyA9PiBkcy5JRCA9PT0gaXRlbS5JRCk/Lk5hbWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1VwZGF0ZWRPbicsIGZpZWxkOiAnVXBkYXRlZE9uJywgbGFiZWw6ICdVcGRhdGVkJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxzcGFuPnttb21lbnQoaXRlbS5VcGRhdGVkT24pLnN1YnRyYWN0KG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSwgJ21pbnV0ZXMnKS5mb3JtYXQoJ01NL0REL1lZIEhIOm1tJyl9PC9zcGFuPiB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3sga2V5OiBudWxsLCBsYWJlbDogJycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj48RWRpdFdvcmtTcGFjZSBXb3JrU3BhY2U9e2l0ZW19IC8+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChSZW1vdmVXb3JrU3BhY2UoaXRlbSkpfT57VHJhc2hDYW59PC9idXR0b24+PC9zcGFuPiB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDUwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIxNSwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRLZXk9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChkYXRhLCBldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7aG9tZVBhdGh9V29ya1NwYWNlRWRpdG9yLyR7ZGF0YS5yb3cuSUR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17ZGF0YSA9PiBkaXNwYXRjaChTb3J0KHsgU29ydEZpZWxkOiBkYXRhLmNvbEZpZWxkLCBBc2NlbmRpbmc6IGRhdGEuYXNjZW5kaW5nIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3B1YmxpY1dvcmtTcGFjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtTcGFjZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
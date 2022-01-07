(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["WorkSpaces"],{

/***/ "./wwwroot/TypeScript/Constants.ts":
/*!*****************************************!*\
  !*** ./wwwroot/TypeScript/Constants.ts ***!
  \*****************************************/
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

/***/ "./wwwroot/TypeScript/Features/WorkSpaces/EditWorkSpace.tsx":
/*!******************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/WorkSpaces/EditWorkSpace.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WorkSpace__WEBPACK_IMPORTED_MODULE_3__.default, { Record: ws, SetWorkSpace: setWorkSpace, Edit: true })),
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

"use strict";
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
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__.default, { cols: [
                            { key: 'Name', label: 'Name', field: 'Name' },
                            { key: 'DataSetID', label: 'Data Set', field: 'DataSetID', content: function (item, key, style) { var _a; return (_a = dataSets.find(function (ds) { return ds.ID === item.DataSetID; })) === null || _a === void 0 ? void 0 : _a.Name; } },
                            { key: 'Type', label: 'Type', field: 'Type' },
                            { key: 'Public', label: 'Shared', field: 'Public', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item[key] ? _Constants__WEBPACK_IMPORTED_MODULE_5__.HeavyCheckMark : null); } },
                            { key: 'UpdatedOn', field: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_6___default()(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                            {
                                key: null, label: '', content: function (item, key, style) {
                                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditWorkSpace__WEBPACK_IMPORTED_MODULE_4__.default, { WorkSpace: item }),
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", onClick: function (evt) {
                                                evt.preventDefault();
                                                dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.RemoveWorkSpace)(item));
                                            } }, _Constants__WEBPACK_IMPORTED_MODULE_5__.TrashCan));
                                }
                            }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortKey: sortField, onClick: function (data, evt) {
                            if (evt.target.tagName.toLowerCase() === 'td')
                                window.location.href = homePath + "WorkSpaceEditor/" + data.row.ID;
                        }, onSort: function (data) { return dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.Sort)({ SortField: data.colField, Ascending: data.ascending })); }, data: workSpaces, ascending: ascending })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-4", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card " },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" }, "Shared Workspaces"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__.default, { cols: [
                            { key: 'Name', label: 'Name', field: 'Name' },
                            { key: 'DataSetID', field: 'DataSetID', label: 'Data Set', content: function (item, key, style) { var _a; return (_a = dataSets.find(function (ds) { return ds.ID === item.ID; })) === null || _a === void 0 ? void 0 : _a.Name; } },
                            { key: 'UpdatedOn', field: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_6___default()(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                            //{ key: null, label: '', content: (item, key, style) => <span><EditWorkSpace WorkSpace={item} /><button className="btn" onClick={() => dispatch(RemoveWorkSpace(item))}>{TrashCan}</button></span> }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortKey: sortField, onClick: function () { return function (data, evt) {
                            if (evt.target.tagName.toLowerCase() === 'td')
                                window.location.href = homePath + "WorkSpaceEditor/" + data.row.ID;
                        }; }, onSort: function (data) { return dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_3__.Sort)({ SortField: data.colField, Ascending: data.ascending })); }, data: publicWorkSpaces, ascending: ascending }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkSpaces);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dvcmtTcGFjZXMvRWRpdFdvcmtTcGFjZS50c3giLCJ3ZWJwYWNrOi8vdHJlbmRhcC8uL3d3d3Jvb3QvVHlwZVNjcmlwdC9GZWF0dXJlcy9Xb3JrU3BhY2VzL1dvcmtTcGFjZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0dBQXdHO0FBQ3hHLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRXhHLFNBQVM7QUFDVCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN2QixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDdEIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDckIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBRW1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3ZGLHdHQUF3RztBQUN4Ryw0QkFBNEI7QUFDNUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdH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LENBRUosQ0FFVCxDQUFDO0FBQ04sQ0FBQztBQUVELGlFQUFlLFVBQVUsRUFBQyIsImZpbGUiOiJXb3JrU3BhY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbnN0YW50cy50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8zMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuLy8gZW1vamlzXHJcbmNvbnN0IEhlYXZ5Q2hlY2tNYXJrID0gJ+KclO+4jyc7XHJcbmNvbnN0IFBlbmNpbCA9ICfinI/vuI8nO1xyXG5jb25zdCBUcmFzaENhbiA9ICfwn5eR77iPJztcclxuY29uc3QgQ3Jvc3NNYXJrID0gJ+KdjCc7XHJcbmNvbnN0IFBsdXMgPSAn4p6VJztcclxuY29uc3QgV2FybmluZyA9ICfimqDvuI8nO1xyXG5jb25zdCBTcGlubmVyID0gJ/CflIQnO1xyXG5jb25zdCBXcmVuY2ggPSAn8J+Upyc7XHJcblxyXG5leHBvcnQgeyBIZWF2eUNoZWNrTWFyaywgUGVuY2lsLCBUcmFzaENhbiwgQ3Jvc3NNYXJrLCBQbHVzLCBXYXJuaW5nLCBTcGlubmVyLCBXcmVuY2ggfTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRWRpdFdvcmtTcGFjZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMjUvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVcGRhdGVXb3JrU3BhY2UgfSBmcm9tICcuL1dvcmtTcGFjZXNTbGljZSdcclxuaW1wb3J0IFdvcmtTcGFjZSBmcm9tICcuL1dvcmtTcGFjZSc7XHJcbmltcG9ydCB7IFBlbmNpbCB9IGZyb20gJy4vLi4vLi4vQ29uc3RhbnRzJ1xyXG5jb25zdCBFZGl0V29ya1NwYWNlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IFdvcmtTcGFjZTogVHJlbkRBUC5pV29ya1NwYWNlfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFt3cywgc2V0V29ya1NwYWNlXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVdvcmtTcGFjZT4oeyAuLi5wcm9wcy5Xb3JrU3BhY2UgfSk7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gQ2FuY2VsKCkge1xyXG4gICAgICAgIHNldFdvcmtTcGFjZShwcm9wcy5Xb3JrU3BhY2UpO1xyXG4gICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvdyh0cnVlKVxyXG4gICAgICAgICAgICB9fT57UGVuY2lsfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgc3R5bGU9e3tkaXNwbGF5OiBzaG93ID8gJ2Jsb2NrJyA6IG51bGwsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40KSd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPldvcmtzcGFjZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e0NhbmNlbH0+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JrU3BhY2UgUmVjb3JkPXt3c30gU2V0V29ya1NwYWNlPXtzZXRXb3JrU3BhY2V9IEVkaXQ9e3RydWUgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChVcGRhdGVXb3JrU3BhY2Uod3MpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmU8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e0NhbmNlbH0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFdvcmtTcGFjZTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgV29ya1NwYWNlcy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMjUvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSdcclxuaW1wb3J0IHsgU29ydCwgRmV0Y2hXb3JrU3BhY2VzLCBTZWxlY3RXb3JrU3BhY2VzU3RhdHVzLCBSZW1vdmVXb3JrU3BhY2UsIFNlbGVjdFdvcmtTcGFjZXNGb3JVc2VyLCBTZWxlY3RXb3JrU3BhY2VzQWxsUHVibGljTm90VXNlciwgU2VsZWN0V29ya1NwYWNlc1NvcnRGaWVsZCwgU2VsZWN0V29ya1NwYWNlc0FzY2VuZGluZyB9IGZyb20gJy4vV29ya1NwYWNlc1NsaWNlJztcclxuaW1wb3J0IEVkaXRXb3JrU3BhY2UgZnJvbSAnLi9FZGl0V29ya1NwYWNlJztcclxuaW1wb3J0IHsgVHJhc2hDYW4sIEhlYXZ5Q2hlY2tNYXJrIH0gZnJvbSAnLi8uLi8uLi9Db25zdGFudHMnXHJcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IFNlbGVjdERhdGFTZXRzIH0gZnJvbSAnLi4vRGF0YVNldHMvRGF0YVNldHNTbGljZSc7XHJcblxyXG5jb25zdCBXb3JrU3BhY2VzOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHdvcmtTcGFjZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFdvcmtTcGFjZXNGb3JVc2VyKHN0YXRlLCB1c2VyTmFtZSkpO1xyXG4gICAgY29uc3QgcHVibGljV29ya1NwYWNlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0V29ya1NwYWNlc0FsbFB1YmxpY05vdFVzZXIoc3RhdGUsIHVzZXJOYW1lKSk7XHJcbiAgICBjb25zdCBkYXRhU2V0cyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTZXRzKTtcclxuICAgIGNvbnN0IHdzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0V29ya1NwYWNlc1N0YXR1cyk7XHJcblxyXG4gICAgY29uc3Qgc29ydEZpZWxkID0gdXNlU2VsZWN0b3IoU2VsZWN0V29ya1NwYWNlc1NvcnRGaWVsZCk7XHJcbiAgICBjb25zdCBhc2NlbmRpbmcgPSB1c2VTZWxlY3RvcihTZWxlY3RXb3JrU3BhY2VzQXNjZW5kaW5nKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3c1N0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiB3c1N0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaFdvcmtTcGFjZXMoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCB3c1N0YXR1c10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDEwIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCIgc3R5bGU9e3twYWRkaW5nOiAnMCAwIDAgMCd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5NeSBXb3Jrc3BhY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPFRyZW5EQVAuaVdvcmtTcGFjZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05hbWUnLCBsYWJlbDogJ05hbWUnLCBmaWVsZDogJ05hbWUnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0RhdGFTZXRJRCcsIGxhYmVsOiAnRGF0YSBTZXQnLCAgZmllbGQ6ICdEYXRhU2V0SUQnLGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBkYXRhU2V0cy5maW5kKGRzID0+IGRzLklEID09PSBpdGVtLkRhdGFTZXRJRCk/Lk5hbWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1R5cGUnLCBsYWJlbDogJ1R5cGUnLCBmaWVsZDogJ1R5cGUnIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnUHVibGljJywgbGFiZWw6ICdTaGFyZWQnLCBmaWVsZDogJ1B1YmxpYycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj57aXRlbVtrZXldID8gSGVhdnlDaGVja01hcmsgOiBudWxsfTwvc3Bhbj4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1VwZGF0ZWRPbicsIGZpZWxkOiAnVXBkYXRlZE9uJyxsYWJlbDogJ1VwZGF0ZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e21vbWVudChpdGVtLlVwZGF0ZWRPbikuc3VidHJhY3QobmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpLmZvcm1hdCgnTU0vREQvWVkgSEg6bW0nKX08L3NwYW4+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbnVsbCwgbGFiZWw6ICcnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48RWRpdFdvcmtTcGFjZSBXb3JrU3BhY2U9e2l0ZW19IC8+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChSZW1vdmVXb3JrU3BhY2UoaXRlbSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PntUcmFzaENhbn08L2J1dHRvbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNTAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMTUsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEtleT17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGRhdGEsIGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtob21lUGF0aH1Xb3JrU3BhY2VFZGl0b3IvJHtkYXRhLnJvdy5JRH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXtkYXRhID0+IGRpc3BhdGNoKFNvcnQoeyBTb3J0RmllbGQ6IGRhdGEuY29sRmllbGQsIEFzY2VuZGluZzogZGF0YS5hc2NlbmRpbmcgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17d29ya1NwYWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcwIDAgMCAwJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+U2hhcmVkIFdvcmtzcGFjZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8VHJlbkRBUC5pV29ya1NwYWNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGxhYmVsOiAnTmFtZScsIGZpZWxkOiAnTmFtZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0RhdGFTZXRJRCcsIGZpZWxkOiAnRGF0YVNldElEJywgbGFiZWw6ICdEYXRhIFNldCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBkYXRhU2V0cy5maW5kKGRzID0+IGRzLklEID09PSBpdGVtLklEKT8uTmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVXBkYXRlZE9uJywgZmllbGQ6ICdVcGRhdGVkT24nLCBsYWJlbDogJ1VwZGF0ZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e21vbWVudChpdGVtLlVwZGF0ZWRPbikuc3VidHJhY3QobmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpLmZvcm1hdCgnTU0vREQvWVkgSEg6bW0nKX08L3NwYW4+IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8veyBrZXk6IG51bGwsIGxhYmVsOiAnJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxzcGFuPjxFZGl0V29ya1NwYWNlIFdvcmtTcGFjZT17aXRlbX0gLz48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFJlbW92ZVdvcmtTcGFjZShpdGVtKSl9PntUcmFzaENhbn08L2J1dHRvbj48L3NwYW4+IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNTAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMTUsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEtleT17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKGRhdGEsIGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtob21lUGF0aH1Xb3JrU3BhY2VFZGl0b3IvJHtkYXRhLnJvdy5JRH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXtkYXRhID0+IGRpc3BhdGNoKFNvcnQoeyBTb3J0RmllbGQ6IGRhdGEuY29sRmllbGQsIEFzY2VuZGluZzogZGF0YS5hc2NlbmRpbmcgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHVibGljV29ya1NwYWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya1NwYWNlczsiXSwic291cmNlUm9vdCI6IiJ9
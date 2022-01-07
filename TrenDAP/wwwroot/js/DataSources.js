(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["DataSources"],{

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

/***/ "./wwwroot/TypeScript/Features/DataSources/DataSources.tsx":
/*!*****************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSources/DataSources.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSourcesSlice */ "./wwwroot/TypeScript/Features/DataSources/DataSourcesSlice.ts");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DataSourceTypes/DataSourceTypesSlice */ "./wwwroot/TypeScript/Features/DataSourceTypes/DataSourceTypesSlice.ts");
/* harmony import */ var _EditDataSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditDataSource */ "./wwwroot/TypeScript/Features/DataSources/EditDataSource.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../Constants */ "./wwwroot/TypeScript/Constants.ts");
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
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var dataSources = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return (0,_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.SelectDataSourcesForUser)(state, userName); });
    var publicDataSources = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return (0,_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.SelectDataSourcesAllPublicNotUser)(state, userName); });
    var dsStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.SelectDataSourcesStatus);
    var dataSourceTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_4__.SelectDataSourceTypes);
    var dstStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_4__.SelectDataSourceTypesStatus);
    var sortField = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.SelectDataSourcesSortField);
    var ascending = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.SelectDataSourcesAscending);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (dsStatus != 'unitiated' && dsStatus != 'changed')
            return;
        dispatch((0,_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.FetchDataSources)());
        return function () {
        };
    }, [dispatch, dsStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (dstStatus != 'unitiated')
            return;
        dispatch((0,_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_4__.FetchDataSourceTypes)());
        return function () {
        };
    }, [dispatch, dstStatus]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 10 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-6", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" }, "My DataSources"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__.default, { cols: [
                            { key: 'Name', field: 'Name', label: 'Name' },
                            { key: 'DataSourceTypeID', field: 'DataSourceTypeID', label: 'Type', content: function (item, key, style) { var _a; return (_a = dataSourceTypes.find(function (dst) { return item.DataSourceTypeID === dst.ID; })) === null || _a === void 0 ? void 0 : _a.Name; } },
                            { key: 'URL', field: 'URL', label: 'Url' },
                            { key: 'Public', field: 'Public', label: 'Shared', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item[key] ? _Constants__WEBPACK_IMPORTED_MODULE_6__.HeavyCheckMark : null); } },
                            { key: null, label: '', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditDataSource__WEBPACK_IMPORTED_MODULE_5__.default, { DataSource: item }),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", onClick: function () { return dispatch((0,_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.RemoveDataSource)(item)); } }, _Constants__WEBPACK_IMPORTED_MODULE_6__.TrashCan)); } }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortKey: sortField, onClick: function () { }, onSort: function (data) { return dispatch((0,_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.Sort)({ SortField: data.colField, Ascending: data.ascending })); }, data: dataSources, ascending: ascending })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-6", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" }, "Shared DataSources"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__.default, { cols: [
                            { key: 'Name', field: 'Name', label: 'Name' },
                            { key: 'DataSourceTypeID', field: 'DataSourceTypeID', label: 'Type', content: function (item, key, style) { var _a; return (_a = dataSourceTypes.find(function (dst) { return item.DataSourceTypeID === dst.ID; })) === null || _a === void 0 ? void 0 : _a.Name; } },
                            { key: 'URL', field: 'URL', label: 'Url' },
                            //{ key: null, label: '', content: (item, key, style) => <span><EditDataSource DataSource={item} /><button className="btn" onClick={() => dispatch(RemoveDataSource(item))}>{TrashCan}</button></span> }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortKey: sortField, onClick: function () { }, onSort: function (data) { return dispatch((0,_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.Sort)({ SortField: data.colField, Ascending: data.ascending })); }, data: publicDataSources, ascending: ascending }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSources);


/***/ }),

/***/ "./wwwroot/TypeScript/Features/DataSources/EditDataSource.tsx":
/*!********************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSources/EditDataSource.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSourcesSlice */ "./wwwroot/TypeScript/Features/DataSources/DataSourcesSlice.ts");
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataSource */ "./wwwroot/TypeScript/Features/DataSources/DataSource.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Constants */ "./wwwroot/TypeScript/Constants.ts");
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
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.DataSource), 2), dataSource = _a[0], setDataSource = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), show = _b[0], setShow = _b[1];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", onClick: function () { return setShow(true); } }, _Constants__WEBPACK_IMPORTED_MODULE_4__.Pencil),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal", style: { display: show ? 'block' : null, backgroundColor: 'rgba(0,0,0,0.4)' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-dialog" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", { className: "modal-title" }, "DataSource"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "close", onClick: function () { return setShow(false); } }, "\u00D7")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataSource__WEBPACK_IMPORTED_MODULE_3__.default, { DataSource: dataSource, SetDataSource: setDataSource })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                dispatch((0,_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.UpdateDataSource)(dataSource));
                                setShow(false);
                            } }, "Save"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-danger", onClick: function () { return setShow(false); } }, "Close")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditDataSource);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTb3VyY2VzL0RhdGFTb3VyY2VzLnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTb3VyY2VzL0VkaXREYXRhU291cmNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdHQUF3RztBQUN4Ryx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUV4RyxTQUFTO0FBQ1QsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdkIsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNqQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDckIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUVtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3ZGLHdHQUF3RztBQUN4RywwQkFBMEI7QUFDMUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ys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LE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDbkIsQ0FBQyxXQUFlO3dCQUVoQiw2REFBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUUsY0FBTSxjQUFPLENBQUMsS0FBSyxDQUFDLEVBQWQsQ0FBYyxZQUFnQixDQUM1RixDQUVKLENBQ0osQ0FDQSxDQUNQLENBQ04sQ0FBQztBQUNOLENBQUM7QUFFRCxpRUFBZSxjQUFjLEVBQUMiLCJmaWxlIjoiRGF0YVNvdXJjZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uc3RhbnRzLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzMwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyBlbW9qaXNcclxuY29uc3QgSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcclxuY29uc3QgUGVuY2lsID0gJ+Kcj++4jyc7XHJcbmNvbnN0IFRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xyXG5jb25zdCBDcm9zc01hcmsgPSAn4p2MJztcclxuY29uc3QgUGx1cyA9ICfinpUnO1xyXG5jb25zdCBXYXJuaW5nID0gJ+KaoO+4jyc7XHJcbmNvbnN0IFNwaW5uZXIgPSAn8J+UhCc7XHJcbmNvbnN0IFdyZW5jaCA9ICfwn5SnJztcclxuXHJcbmV4cG9ydCB7IEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFRyYXNoQ2FuLCBDcm9zc01hcmssIFBsdXMsIFdhcm5pbmcsIFNwaW5uZXIsIFdyZW5jaCB9OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU291cmNlcy50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMTEvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCwgUmVkdXggfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNvcnQsIFNlbGVjdERhdGFTb3VyY2VzRm9yVXNlciwgRmV0Y2hEYXRhU291cmNlcywgU2VsZWN0RGF0YVNvdXJjZXNTdGF0dXMsIFJlbW92ZURhdGFTb3VyY2UsIFNlbGVjdERhdGFTb3VyY2VzQWxsUHVibGljTm90VXNlciwgU2VsZWN0RGF0YVNvdXJjZXNTb3J0RmllbGQsIFNlbGVjdERhdGFTb3VyY2VzQXNjZW5kaW5nIH0gZnJvbSAnLi9EYXRhU291cmNlc1NsaWNlJ1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSdcclxuaW1wb3J0IHsgU2VsZWN0RGF0YVNvdXJjZVR5cGVzLCBTZWxlY3REYXRhU291cmNlVHlwZXNTdGF0dXMsIEZldGNoRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnLi4vRGF0YVNvdXJjZVR5cGVzL0RhdGFTb3VyY2VUeXBlc1NsaWNlJztcclxuaW1wb3J0IEVkaXREYXRhU291cmNlIGZyb20gJy4vRWRpdERhdGFTb3VyY2UnO1xyXG5pbXBvcnQgeyBUcmFzaENhbiwgSGVhdnlDaGVja01hcmsgfSBmcm9tICcuLy4uLy4uL0NvbnN0YW50cydcclxuXHJcbmNvbnN0IERhdGFTb3VyY2VzOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wczoge30pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3REYXRhU291cmNlc0ZvclVzZXIoc3RhdGUsIHVzZXJOYW1lKSk7XHJcbiAgICBjb25zdCBwdWJsaWNEYXRhU291cmNlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgID0+IFNlbGVjdERhdGFTb3VyY2VzQWxsUHVibGljTm90VXNlcihzdGF0ZSx1c2VyTmFtZSkpO1xyXG5cclxuICAgIGNvbnN0IGRzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZXNTdGF0dXMpO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZVR5cGVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZVR5cGVzKTtcclxuICAgIGNvbnN0IGRzdFN0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VUeXBlc1N0YXR1cyk7XHJcblxyXG4gICAgY29uc3Qgc29ydEZpZWxkID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZXNTb3J0RmllbGQpO1xyXG4gICAgY29uc3QgYXNjZW5kaW5nID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZXNBc2NlbmRpbmcpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRzU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIGRzU3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNvdXJjZXMoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkc1N0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRzdFN0YXR1cyAhPSAndW5pdGlhdGVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTb3VyY2VUeXBlcygpKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgZHN0U3RhdHVzXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luOiAxMH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCIgc3R5bGU9e3sgcGFkZGluZzogJzAgMCAwIDAnIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5NeSBEYXRhU291cmNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGU8VHJlbkRBUC5pRGF0YVNvdXJjZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgZmllbGQ6ICdOYW1lJywgbGFiZWw6ICdOYW1lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdEYXRhU291cmNlVHlwZUlEJywgZmllbGQ6ICdEYXRhU291cmNlVHlwZUlEJywgbGFiZWw6ICdUeXBlJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGRhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBpdGVtLkRhdGFTb3VyY2VUeXBlSUQgPT09IGRzdC5JRCk/Lk5hbWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVVJMJyxmaWVsZDogJ1VSTCcsIGxhYmVsOiAnVXJsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdQdWJsaWMnLGZpZWxkOiAnUHVibGljJywgbGFiZWw6ICdTaGFyZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e2l0ZW1ba2V5XSA/IEhlYXZ5Q2hlY2tNYXJrIDogbnVsbH08L3NwYW4+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogbnVsbCwgbGFiZWw6ICcnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+PEVkaXREYXRhU291cmNlIERhdGFTb3VyY2U9e2l0ZW19IC8+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChSZW1vdmVEYXRhU291cmNlKGl0ZW0pKX0+e1RyYXNoQ2FufTwvYnV0dG9uPjwvc3Bhbj4gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlYWRTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiA1MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIxNSwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0S2V5PXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXtkYXRhID0+IGRpc3BhdGNoKFNvcnQoe1NvcnRGaWVsZDogZGF0YS5jb2xGaWVsZCwgQXNjZW5kaW5nOiBkYXRhLmFzY2VuZGluZ30pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVNvdXJjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCIgc3R5bGU9e3sgcGFkZGluZzogJzAgMCAwIDAnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlNoYXJlZCBEYXRhU291cmNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZTxUcmVuREFQLmlEYXRhU291cmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGZpZWxkOiAnTmFtZScsIGxhYmVsOiAnTmFtZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0RhdGFTb3VyY2VUeXBlSUQnLCBmaWVsZDogJ0RhdGFTb3VyY2VUeXBlSUQnLCBsYWJlbDogJ1R5cGUnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gZGF0YVNvdXJjZVR5cGVzLmZpbmQoZHN0ID0+IGl0ZW0uRGF0YVNvdXJjZVR5cGVJRCA9PT0gZHN0LklEKT8uTmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVVJMJywgZmllbGQ6ICdVUkwnLCBsYWJlbDogJ1VybCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3sga2V5OiBudWxsLCBsYWJlbDogJycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj48RWRpdERhdGFTb3VyY2UgRGF0YVNvdXJjZT17aXRlbX0gLz48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFJlbW92ZURhdGFTb3VyY2UoaXRlbSkpfT57VHJhc2hDYW59PC9idXR0b24+PC9zcGFuPiB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDUwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIxNSwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRLZXk9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17ZGF0YSA9PiBkaXNwYXRjaChTb3J0KHsgU29ydEZpZWxkOiBkYXRhLmNvbEZpZWxkLCBBc2NlbmRpbmc6IGRhdGEuYXNjZW5kaW5nIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3B1YmxpY0RhdGFTb3VyY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlczsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRWRpdERhdGFTb3VyY2UudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzI1LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFVwZGF0ZURhdGFTb3VyY2UgfSBmcm9tICcuL0RhdGFTb3VyY2VzU2xpY2UnXHJcbmltcG9ydCBEYXRhU291cmNlIGZyb20gJy4vRGF0YVNvdXJjZSc7XHJcbmltcG9ydCB7IFBlbmNpbCB9IGZyb20gJy4vLi4vLi4vQ29uc3RhbnRzJ1xyXG5jb25zdCBFZGl0RGF0YVNvdXJjZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBEYXRhU291cmNlOiBUcmVuREFQLmlEYXRhU291cmNlfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtkYXRhU291cmNlLCBzZXREYXRhU291cmNlXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaURhdGFTb3VyY2U+KHByb3BzLkRhdGFTb3VyY2UpO1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IHNldFNob3codHJ1ZSl9PntQZW5jaWx9PC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHN0eWxlPXt7ZGlzcGxheTogc2hvdyA/ICdibG9jaycgOiBudWxsLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNCknIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5EYXRhU291cmNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhU291cmNlIERhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IFNldERhdGFTb3VyY2U9e3NldERhdGFTb3VyY2UgfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goVXBkYXRlRGF0YVNvdXJjZShkYXRhU291cmNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdERhdGFTb3VyY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==
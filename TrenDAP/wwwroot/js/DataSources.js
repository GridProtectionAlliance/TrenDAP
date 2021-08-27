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
                            { key: 'Public', field: 'Public', label: 'Global', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item[key] ? _Constants__WEBPACK_IMPORTED_MODULE_6__.HeavyCheckMark : null); } },
                            { key: null, label: '', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditDataSource__WEBPACK_IMPORTED_MODULE_5__.default, { DataSource: item }),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", onClick: function () { return dispatch((0,_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.RemoveDataSource)(item)); } }, _Constants__WEBPACK_IMPORTED_MODULE_6__.TrashCan)); } }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortKey: sortField, onClick: function () { }, onSort: function (data) { return dispatch((0,_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.Sort)({ SortField: data.colField, Ascending: data.ascending })); }, data: dataSources, ascending: ascending })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-6", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" }, "Global DataSources"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__.default, { cols: [
                            { key: 'Name', field: 'Name', label: 'Name' },
                            { key: 'DataSourceTypeID', field: 'DataSourceTypeID', label: 'Type', content: function (item, key, style) { var _a; return (_a = dataSourceTypes.find(function (dst) { return item.DataSourceTypeID === dst.ID; })) === null || _a === void 0 ? void 0 : _a.Name; } },
                            { key: 'URL', field: 'URL', label: 'Url' },
                            //{ key: 'Public', label: 'Global', content: (item, key, style) => <span>{item[key] ? HeavyCheckMark : null}</span> },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTb3VyY2VzL0RhdGFTb3VyY2VzLnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTb3VyY2VzL0VkaXREYXRhU291cmNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdHQUF3RztBQUN4Ryx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUV4RyxTQUFTO0FBQ1QsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdkIsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNqQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDckIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUVtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3ZGLHdHQUF3RztBQUN4RywwQkFBMEI7QUFDMUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ys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QUMsQ0FBQztnQ0FDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNuQixDQUFDLFdBQWU7d0JBRWhCLDZEQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBRSxjQUFNLGNBQU8sQ0FBQyxLQUFLLENBQUMsRUFBZCxDQUFjLFlBQWdCLENBQzVGLENBRUosQ0FDSixDQUNBLENBQ1AsQ0FDTixDQUFDO0FBQ04sQ0FBQztBQUVELGlFQUFlLGNBQWMsRUFBQyIsImZpbGUiOiJEYXRhU291cmNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25zdGFudHMudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMzAvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbi8vIGVtb2ppc1xyXG5jb25zdCBIZWF2eUNoZWNrTWFyayA9ICfinJTvuI8nO1xyXG5jb25zdCBQZW5jaWwgPSAn4pyP77iPJztcclxuY29uc3QgVHJhc2hDYW4gPSAn8J+Xke+4jyc7XHJcbmNvbnN0IENyb3NzTWFyayA9ICfinYwnO1xyXG5jb25zdCBQbHVzID0gJ+KelSc7XHJcbmNvbnN0IFdhcm5pbmcgPSAn4pqg77iPJztcclxuY29uc3QgU3Bpbm5lciA9ICfwn5SEJztcclxuY29uc3QgV3JlbmNoID0gJ/CflKcnO1xyXG5cclxuZXhwb3J0IHsgSGVhdnlDaGVja01hcmssIFBlbmNpbCwgVHJhc2hDYW4sIENyb3NzTWFyaywgUGx1cywgV2FybmluZywgU3Bpbm5lciwgV3JlbmNoIH07IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERhdGFTb3VyY2VzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xMS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU29ydCwgU2VsZWN0RGF0YVNvdXJjZXNGb3JVc2VyLCBGZXRjaERhdGFTb3VyY2VzLCBTZWxlY3REYXRhU291cmNlc1N0YXR1cywgUmVtb3ZlRGF0YVNvdXJjZSwgU2VsZWN0RGF0YVNvdXJjZXNBbGxQdWJsaWNOb3RVc2VyLCBTZWxlY3REYXRhU291cmNlc1NvcnRGaWVsZCwgU2VsZWN0RGF0YVNvdXJjZXNBc2NlbmRpbmcgfSBmcm9tICcuL0RhdGFTb3VyY2VzU2xpY2UnXHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJ1xyXG5pbXBvcnQgeyBTZWxlY3REYXRhU291cmNlVHlwZXMsIFNlbGVjdERhdGFTb3VyY2VUeXBlc1N0YXR1cywgRmV0Y2hEYXRhU291cmNlVHlwZXMgfSBmcm9tICcuLi9EYXRhU291cmNlVHlwZXMvRGF0YVNvdXJjZVR5cGVzU2xpY2UnO1xyXG5pbXBvcnQgRWRpdERhdGFTb3VyY2UgZnJvbSAnLi9FZGl0RGF0YVNvdXJjZSc7XHJcbmltcG9ydCB7IFRyYXNoQ2FuLCBIZWF2eUNoZWNrTWFyayB9IGZyb20gJy4vLi4vLi4vQ29uc3RhbnRzJ1xyXG5cclxuY29uc3QgRGF0YVNvdXJjZXM6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKHByb3BzOiB7fSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdERhdGFTb3VyY2VzRm9yVXNlcihzdGF0ZSwgdXNlck5hbWUpKTtcclxuICAgIGNvbnN0IHB1YmxpY0RhdGFTb3VyY2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSAgPT4gU2VsZWN0RGF0YVNvdXJjZXNBbGxQdWJsaWNOb3RVc2VyKHN0YXRlLHVzZXJOYW1lKSk7XHJcblxyXG4gICAgY29uc3QgZHNTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlc1N0YXR1cyk7XHJcbiAgICBjb25zdCBkYXRhU291cmNlVHlwZXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlVHlwZXMpO1xyXG4gICAgY29uc3QgZHN0U3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZVR5cGVzU3RhdHVzKTtcclxuXHJcbiAgICBjb25zdCBzb3J0RmllbGQgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlc1NvcnRGaWVsZCk7XHJcbiAgICBjb25zdCBhc2NlbmRpbmcgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlc0FzY2VuZGluZyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHNTdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgZHNTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hEYXRhU291cmNlcygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGRzU3RhdHVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHN0U3RhdHVzICE9ICd1bml0aWF0ZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNvdXJjZVR5cGVzKCkpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkc3RTdGF0dXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDEwfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAwIDAgMCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPk15IERhdGFTb3VyY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZTxUcmVuREFQLmlEYXRhU291cmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05hbWUnLCBmaWVsZDogJ05hbWUnLCBsYWJlbDogJ05hbWUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0RhdGFTb3VyY2VUeXBlSUQnLCBmaWVsZDogJ0RhdGFTb3VyY2VUeXBlSUQnLCBsYWJlbDogJ1R5cGUnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gZGF0YVNvdXJjZVR5cGVzLmZpbmQoZHN0ID0+IGl0ZW0uRGF0YVNvdXJjZVR5cGVJRCA9PT0gZHN0LklEKT8uTmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVUkwnLGZpZWxkOiAnVVJMJywgbGFiZWw6ICdVcmwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1B1YmxpYycsZmllbGQ6ICdQdWJsaWMnLCBsYWJlbDogJ0dsb2JhbCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj57aXRlbVtrZXldID8gSGVhdnlDaGVja01hcmsgOiBudWxsfTwvc3Bhbj4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj48RWRpdERhdGFTb3VyY2UgRGF0YVNvdXJjZT17aXRlbX0gLz48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFJlbW92ZURhdGFTb3VyY2UoaXRlbSkpfT57VHJhc2hDYW59PC9idXR0b24+PC9zcGFuPiB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDUwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMTUsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRLZXk9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9e2RhdGEgPT4gZGlzcGF0Y2goU29ydCh7U29ydEZpZWxkOiBkYXRhLmNvbEZpZWxkLCBBc2NlbmRpbmc6IGRhdGEuYXNjZW5kaW5nfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhU291cmNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAwIDAgMCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+R2xvYmFsIERhdGFTb3VyY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPFRyZW5EQVAuaURhdGFTb3VyY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgZmllbGQ6ICdOYW1lJywgbGFiZWw6ICdOYW1lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRGF0YVNvdXJjZVR5cGVJRCcsIGZpZWxkOiAnRGF0YVNvdXJjZVR5cGVJRCcsIGxhYmVsOiAnVHlwZScsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gaXRlbS5EYXRhU291cmNlVHlwZUlEID09PSBkc3QuSUQpPy5OYW1lIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVUkwnLCBmaWVsZDogJ1VSTCcsIGxhYmVsOiAnVXJsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8veyBrZXk6ICdQdWJsaWMnLCBsYWJlbDogJ0dsb2JhbCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj57aXRlbVtrZXldID8gSGVhdnlDaGVja01hcmsgOiBudWxsfTwvc3Bhbj4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3sga2V5OiBudWxsLCBsYWJlbDogJycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj48RWRpdERhdGFTb3VyY2UgRGF0YVNvdXJjZT17aXRlbX0gLz48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFJlbW92ZURhdGFTb3VyY2UoaXRlbSkpfT57VHJhc2hDYW59PC9idXR0b24+PC9zcGFuPiB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDUwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ym9keVN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93WTogJ3Njcm9sbCcsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIxNSwgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRLZXk9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU29ydD17ZGF0YSA9PiBkaXNwYXRjaChTb3J0KHsgU29ydEZpZWxkOiBkYXRhLmNvbEZpZWxkLCBBc2NlbmRpbmc6IGRhdGEuYXNjZW5kaW5nIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3B1YmxpY0RhdGFTb3VyY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlczsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRWRpdERhdGFTb3VyY2UudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzI1LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFVwZGF0ZURhdGFTb3VyY2UgfSBmcm9tICcuL0RhdGFTb3VyY2VzU2xpY2UnXHJcbmltcG9ydCBEYXRhU291cmNlIGZyb20gJy4vRGF0YVNvdXJjZSc7XHJcbmltcG9ydCB7IFBlbmNpbCB9IGZyb20gJy4vLi4vLi4vQ29uc3RhbnRzJ1xyXG5jb25zdCBFZGl0RGF0YVNvdXJjZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBEYXRhU291cmNlOiBUcmVuREFQLmlEYXRhU291cmNlfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtkYXRhU291cmNlLCBzZXREYXRhU291cmNlXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaURhdGFTb3VyY2U+KHByb3BzLkRhdGFTb3VyY2UpO1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IHNldFNob3codHJ1ZSl9PntQZW5jaWx9PC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHN0eWxlPXt7ZGlzcGxheTogc2hvdyA/ICdibG9jaycgOiBudWxsLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNCknIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5EYXRhU291cmNlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhU291cmNlIERhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IFNldERhdGFTb3VyY2U9e3NldERhdGFTb3VyY2UgfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goVXBkYXRlRGF0YVNvdXJjZShkYXRhU291cmNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdERhdGFTb3VyY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==
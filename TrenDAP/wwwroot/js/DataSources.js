"use strict";
(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["DataSources"],{

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

/***/ "./wwwroot/TypeScript/Features/DataSources/DataSources.tsx":
/*!*****************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSources/DataSources.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__["default"], { cols: [
                            { key: 'Name', field: 'Name', label: 'Name' },
                            { key: 'DataSourceTypeID', field: 'DataSourceTypeID', label: 'Type', content: function (item, key, style) { var _a; return (_a = dataSourceTypes.find(function (dst) { return item.DataSourceTypeID === dst.ID; })) === null || _a === void 0 ? void 0 : _a.Name; } },
                            { key: 'URL', field: 'URL', label: 'Url' },
                            { key: 'Public', field: 'Public', label: 'Shared', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item[key] ? _Constants__WEBPACK_IMPORTED_MODULE_6__.HeavyCheckMark : null); } },
                            { key: null, label: '', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditDataSource__WEBPACK_IMPORTED_MODULE_5__["default"], { DataSource: item }),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", onClick: function () { return dispatch((0,_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.RemoveDataSource)(item)); } }, _Constants__WEBPACK_IMPORTED_MODULE_6__.TrashCan)); } }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortKey: sortField, onClick: function () { }, onSort: function (data) { return dispatch((0,_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_2__.Sort)({ SortField: data.colField, Ascending: data.ascending })); }, data: dataSources, ascending: ascending })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-6", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" }, "Shared DataSources"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_3__["default"], { cols: [
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
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataSource__WEBPACK_IMPORTED_MODULE_3__["default"], { DataSource: dataSource, SetDataSource: setDataSource })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVNvdXJjZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3R0FBd0c7QUFDeEcsdUJBQXVCO0FBQ3ZCLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7QUFFeEcsU0FBUztBQUNULElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQztBQUM1QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDcEIsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUN0QixJQUFNLElBQUksR0FBRyxHQUFHLENBQUM7QUFDakIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFFbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3ZGLHdHQUF3RztBQUN4RywwQkFBMEI7QUFDMUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUV6RTtBQUV3QjtBQUNvSztBQUM5SztBQUNzRjtBQUNyRjtBQUNjO0FBRTVELElBQU0sV0FBVyxHQUE0QixVQUFDLEtBQVM7SUFDbkQsSUFBTSxRQUFRLEdBQUcsd0RBQVcsRUFBRSxDQUFDO0lBQy9CLElBQU0sV0FBVyxHQUFHLHdEQUFXLENBQUMsVUFBQyxLQUF1QixJQUFLLGtGQUF3QixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0lBQ3hHLElBQU0saUJBQWlCLEdBQUcsd0RBQVcsQ0FBQyxVQUFDLEtBQXVCLElBQU0sMkZBQWlDLENBQUMsS0FBSyxFQUFDLFFBQVEsQ0FBQyxFQUFqRCxDQUFpRCxDQUFDLENBQUM7SUFFdkgsSUFBTSxRQUFRLEdBQUcsd0RBQVcsQ0FBQyxzRUFBdUIsQ0FBQyxDQUFDO0lBQ3RELElBQU0sZUFBZSxHQUFHLHdEQUFXLENBQUMsd0ZBQXFCLENBQUMsQ0FBQztJQUMzRCxJQUFNLFNBQVMsR0FBRyx3REFBVyxDQUFDLDhGQUEyQixDQUFDLENBQUM7SUFFM0QsSUFBTSxTQUFTLEdBQUcsd0RBQVcsQ0FBQyx5RUFBMEIsQ0FBQyxDQUFDO0lBQzFELElBQU0sU0FBUyxHQUFHLHdEQUFXLENBQUMseUVBQTBCLENBQUMsQ0FBQztJQUUxRCw0Q0FBZSxDQUFDO1FBQ1osSUFBSSxRQUFRLElBQUksV0FBVyxJQUFJLFFBQVEsSUFBSSxTQUFTO1lBQUUsT0FBTztRQUM3RCxRQUFRLENBQUMsbUVBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBRTdCLE9BQU87UUFDUCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFekIsNENBQWUsQ0FBQztRQUNaLElBQUksU0FBUyxJQUFJLFdBQVc7WUFBRSxPQUFPO1FBRXJDLFFBQVEsQ0FBQywyRkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDakMsT0FBTztRQUNQLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUUxQixPQUFPLENBQ1AsMERBQUssU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFDO1FBQ2pDLDBEQUFLLFNBQVMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtZQUNwRCwwREFBSyxTQUFTLEVBQUMsTUFBTTtnQkFDakIsMERBQUssU0FBUyxFQUFDLGFBQWEscUJBQXFCO2dCQUNqRCwwREFBSyxTQUFTLEVBQUMsV0FBVztvQkFDdEIsaURBQUMsaUVBQUssSUFDRixJQUFJLEVBQUU7NEJBQ0YsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTs0QkFDN0MsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLFlBQUssNEJBQWUsQ0FBQyxJQUFJLENBQUMsYUFBRyxJQUFJLFdBQUksQ0FBQyxnQkFBZ0IsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFoQyxDQUFnQyxDQUFDLDBDQUFFLElBQUksS0FBRTs0QkFDekssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTs0QkFDekMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSyxzRUFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNEQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBUSxFQUFoRCxDQUFnRCxFQUFFOzRCQUNuSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSztvQ0FBTSxpREFBQyx1REFBYyxJQUFDLFVBQVUsRUFBRSxJQUFJLEdBQUk7b0NBQUEsNkRBQVEsU0FBUyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUUsY0FBTSxlQUFRLENBQUMsbUVBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsSUFBRyxnREFBUSxDQUFVLENBQU8sRUFBN0ksQ0FBNkksRUFBRTt5QkFFek0sRUFDRCxVQUFVLEVBQUMsbUJBQW1CLEVBQzlCLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUN0RyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQzNJLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDeEYsT0FBTyxFQUFFLFNBQVMsRUFDbEIsT0FBTyxFQUFFLGNBQVEsQ0FBQyxFQUNsQixNQUFNLEVBQUUsY0FBSSxJQUFJLGVBQVEsQ0FBQyx1REFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDLEVBQXJFLENBQXFFLEVBQ3JGLElBQUksRUFBRSxXQUFXLEVBQ2pCLFNBQVMsRUFBRSxTQUFTLEdBQ3RCLENBRUEsQ0FDSixDQUNKO1FBQ0YsMERBQUssU0FBUyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFO1lBQ2hELDBEQUFLLFNBQVMsRUFBQyxNQUFNO2dCQUNqQiwwREFBSyxTQUFTLEVBQUMsYUFBYSx5QkFBeUI7Z0JBQ3JELDBEQUFLLFNBQVMsRUFBQyxXQUFXO29CQUN0QixpREFBQyxpRUFBSyxJQUNGLElBQUksRUFBRTs0QkFDRixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFOzRCQUM3QyxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssWUFBSyw0QkFBZSxDQUFDLElBQUksQ0FBQyxhQUFHLElBQUksV0FBSSxDQUFDLGdCQUFnQixLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQWhDLENBQWdDLENBQUMsMENBQUUsSUFBSSxLQUFFOzRCQUN6SyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFOzRCQUMxQyx3TUFBd007eUJBRTNNLEVBQ0QsVUFBVSxFQUFDLG1CQUFtQixFQUM5QixVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFDdEcsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUMzSSxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQ2xCLE9BQU8sRUFBRSxjQUFRLENBQUMsRUFDbEIsTUFBTSxFQUFFLGNBQUksSUFBSSxlQUFRLENBQUMsdURBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUF2RSxDQUF1RSxFQUN2RixJQUFJLEVBQUUsaUJBQWlCLEVBQ3ZCLFNBQVMsRUFBRSxTQUFTLEdBQ3RCLENBRUEsQ0FDSixDQUVSLENBQ0osQ0FDTCxDQUFDO0FBQ04sQ0FBQztBQUVELGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SDNCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHekU7QUFFVztBQUNXO0FBQ2Y7QUFDSTtBQUMxQyxJQUFNLGNBQWMsR0FBZ0UsVUFBQyxLQUFLO0lBQ3RGLElBQU0sUUFBUSxHQUFHLHdEQUFXLEVBQUUsQ0FBQztJQUN6QixnQkFBOEIsMkNBQWMsQ0FBc0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFsRixVQUFVLFVBQUUsYUFBYSxRQUF5RCxDQUFDO0lBQ3BGLGdCQUFrQiwyQ0FBYyxDQUFVLEtBQUssQ0FBQyxNQUEvQyxJQUFJLFVBQUUsT0FBTyxRQUFrQyxDQUFDO0lBRXZELE9BQU8sQ0FDSDtRQUNBLDZEQUFRLFNBQVMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFFLGNBQU0sY0FBTyxDQUFDLElBQUksQ0FBQyxFQUFiLENBQWEsSUFBRyw4Q0FBTSxDQUFVO1FBQ3ZFLDBEQUFLLFNBQVMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFO1lBQy9GLDBEQUFLLFNBQVMsRUFBQyxjQUFjO2dCQUN6QiwwREFBSyxTQUFTLEVBQUMsZUFBZTtvQkFFNUIsMERBQUssU0FBUyxFQUFDLGNBQWM7d0JBQ3ZCLHlEQUFJLFNBQVMsRUFBQyxhQUFhLGlCQUFnQjt3QkFDM0MsNkRBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRSxjQUFNLGNBQU8sQ0FBQyxLQUFLLENBQUMsRUFBZCxDQUFjLGFBQWtCLENBQ3JGO29CQUVSLDBEQUFLLFNBQVMsRUFBQyxZQUFZO3dCQUNyQixpREFBQyxtREFBVSxJQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGFBQWEsR0FBSyxDQUNyRTtvQkFFSiwwREFBSyxTQUFTLEVBQUMsY0FBYzt3QkFDekIsNkRBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFFO2dDQUN2RCxRQUFRLENBQUMsbUVBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQ0FDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNuQixDQUFDLFdBQWU7d0JBRWhCLDZEQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLE9BQU8sRUFBRSxjQUFNLGNBQU8sQ0FBQyxLQUFLLENBQUMsRUFBZCxDQUFjLFlBQWdCLENBQzVGLENBRUosQ0FDSixDQUNBLENBQ1AsQ0FDTixDQUFDO0FBQ04sQ0FBQztBQUVELGlFQUFlLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNvdXJjZXMvRGF0YVNvdXJjZXMudHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNvdXJjZXMvRWRpdERhdGFTb3VyY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25zdGFudHMudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMzAvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbi8vIGVtb2ppc1xyXG5jb25zdCBIZWF2eUNoZWNrTWFyayA9ICfinJTvuI8nO1xyXG5jb25zdCBQZW5jaWwgPSAn4pyP77iPJztcclxuY29uc3QgVHJhc2hDYW4gPSAn8J+Xke+4jyc7XHJcbmNvbnN0IENyb3NzTWFyayA9ICfinYwnO1xyXG5jb25zdCBQbHVzID0gJ+KelSc7XHJcbmNvbnN0IFdhcm5pbmcgPSAn4pqg77iPJztcclxuY29uc3QgU3Bpbm5lciA9ICfwn5SEJztcclxuY29uc3QgV3JlbmNoID0gJ/CflKcnO1xyXG5cclxuZXhwb3J0IHsgSGVhdnlDaGVja01hcmssIFBlbmNpbCwgVHJhc2hDYW4sIENyb3NzTWFyaywgUGx1cywgV2FybmluZywgU3Bpbm5lciwgV3JlbmNoIH07IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERhdGFTb3VyY2VzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8xMS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU29ydCwgU2VsZWN0RGF0YVNvdXJjZXNGb3JVc2VyLCBGZXRjaERhdGFTb3VyY2VzLCBTZWxlY3REYXRhU291cmNlc1N0YXR1cywgUmVtb3ZlRGF0YVNvdXJjZSwgU2VsZWN0RGF0YVNvdXJjZXNBbGxQdWJsaWNOb3RVc2VyLCBTZWxlY3REYXRhU291cmNlc1NvcnRGaWVsZCwgU2VsZWN0RGF0YVNvdXJjZXNBc2NlbmRpbmcgfSBmcm9tICcuL0RhdGFTb3VyY2VzU2xpY2UnXHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJ1xyXG5pbXBvcnQgeyBTZWxlY3REYXRhU291cmNlVHlwZXMsIFNlbGVjdERhdGFTb3VyY2VUeXBlc1N0YXR1cywgRmV0Y2hEYXRhU291cmNlVHlwZXMgfSBmcm9tICcuLi9EYXRhU291cmNlVHlwZXMvRGF0YVNvdXJjZVR5cGVzU2xpY2UnO1xyXG5pbXBvcnQgRWRpdERhdGFTb3VyY2UgZnJvbSAnLi9FZGl0RGF0YVNvdXJjZSc7XHJcbmltcG9ydCB7IFRyYXNoQ2FuLCBIZWF2eUNoZWNrTWFyayB9IGZyb20gJy4vLi4vLi4vQ29uc3RhbnRzJ1xyXG5cclxuY29uc3QgRGF0YVNvdXJjZXM6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKHByb3BzOiB7fSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdERhdGFTb3VyY2VzRm9yVXNlcihzdGF0ZSwgdXNlck5hbWUpKTtcclxuICAgIGNvbnN0IHB1YmxpY0RhdGFTb3VyY2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSAgPT4gU2VsZWN0RGF0YVNvdXJjZXNBbGxQdWJsaWNOb3RVc2VyKHN0YXRlLHVzZXJOYW1lKSk7XHJcblxyXG4gICAgY29uc3QgZHNTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlc1N0YXR1cyk7XHJcbiAgICBjb25zdCBkYXRhU291cmNlVHlwZXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlVHlwZXMpO1xyXG4gICAgY29uc3QgZHN0U3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZVR5cGVzU3RhdHVzKTtcclxuXHJcbiAgICBjb25zdCBzb3J0RmllbGQgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlc1NvcnRGaWVsZCk7XHJcbiAgICBjb25zdCBhc2NlbmRpbmcgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlc0FzY2VuZGluZyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHNTdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgZHNTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hEYXRhU291cmNlcygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGRzU3RhdHVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHN0U3RhdHVzICE9ICd1bml0aWF0ZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNvdXJjZVR5cGVzKCkpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkc3RTdGF0dXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXJnaW46IDEwfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAwIDAgMCcgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPk15IERhdGFTb3VyY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZTxUcmVuREFQLmlEYXRhU291cmNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ05hbWUnLCBmaWVsZDogJ05hbWUnLCBsYWJlbDogJ05hbWUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0RhdGFTb3VyY2VUeXBlSUQnLCBmaWVsZDogJ0RhdGFTb3VyY2VUeXBlSUQnLCBsYWJlbDogJ1R5cGUnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gZGF0YVNvdXJjZVR5cGVzLmZpbmQoZHN0ID0+IGl0ZW0uRGF0YVNvdXJjZVR5cGVJRCA9PT0gZHN0LklEKT8uTmFtZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVUkwnLGZpZWxkOiAnVVJMJywgbGFiZWw6ICdVcmwnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1B1YmxpYycsZmllbGQ6ICdQdWJsaWMnLCBsYWJlbDogJ1NoYXJlZCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj57aXRlbVtrZXldID8gSGVhdnlDaGVja01hcmsgOiBudWxsfTwvc3Bhbj4gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBudWxsLCBsYWJlbDogJycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiA8c3Bhbj48RWRpdERhdGFTb3VyY2UgRGF0YVNvdXJjZT17aXRlbX0gLz48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFJlbW92ZURhdGFTb3VyY2UoaXRlbSkpfT57VHJhc2hDYW59PC9idXR0b24+PC9zcGFuPiB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVhZFN0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDUwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMTUsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1N0eWxlPXt7IGZvbnRTaXplOiAnc21hbGxlcicsIGRpc3BsYXk6ICd0YWJsZScsIHRhYmxlTGF5b3V0OiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRLZXk9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9e2RhdGEgPT4gZGlzcGF0Y2goU29ydCh7U29ydEZpZWxkOiBkYXRhLmNvbEZpZWxkLCBBc2NlbmRpbmc6IGRhdGEuYXNjZW5kaW5nfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhU291cmNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAwIDAgMCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+U2hhcmVkIERhdGFTb3VyY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPFRyZW5EQVAuaURhdGFTb3VyY2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgZmllbGQ6ICdOYW1lJywgbGFiZWw6ICdOYW1lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnRGF0YVNvdXJjZVR5cGVJRCcsIGZpZWxkOiAnRGF0YVNvdXJjZVR5cGVJRCcsIGxhYmVsOiAnVHlwZScsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gaXRlbS5EYXRhU291cmNlVHlwZUlEID09PSBkc3QuSUQpPy5OYW1lIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdVUkwnLCBmaWVsZDogJ1VSTCcsIGxhYmVsOiAnVXJsJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8veyBrZXk6IG51bGwsIGxhYmVsOiAnJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxzcGFuPjxFZGl0RGF0YVNvdXJjZSBEYXRhU291cmNlPXtpdGVtfSAvPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goUmVtb3ZlRGF0YVNvdXJjZShpdGVtKSl9PntUcmFzaENhbn08L2J1dHRvbj48L3NwYW4+IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNTAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMTUsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEtleT17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXtkYXRhID0+IGRpc3BhdGNoKFNvcnQoeyBTb3J0RmllbGQ6IGRhdGEuY29sRmllbGQsIEFzY2VuZGluZzogZGF0YS5hc2NlbmRpbmcgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHVibGljRGF0YVNvdXJjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFTb3VyY2VzOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBFZGl0RGF0YVNvdXJjZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMjUvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVXBkYXRlRGF0YVNvdXJjZSB9IGZyb20gJy4vRGF0YVNvdXJjZXNTbGljZSdcclxuaW1wb3J0IERhdGFTb3VyY2UgZnJvbSAnLi9EYXRhU291cmNlJztcclxuaW1wb3J0IHsgUGVuY2lsIH0gZnJvbSAnLi8uLi8uLi9Db25zdGFudHMnXHJcbmNvbnN0IEVkaXREYXRhU291cmNlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IERhdGFTb3VyY2U6IFRyZW5EQVAuaURhdGFTb3VyY2V9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2RhdGFTb3VyY2UsIHNldERhdGFTb3VyY2VdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pRGF0YVNvdXJjZT4ocHJvcHMuRGF0YVNvdXJjZSk7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4gc2V0U2hvdyh0cnVlKX0+e1BlbmNpbH08L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgc3R5bGU9e3tkaXNwbGF5OiBzaG93ID8gJ2Jsb2NrJyA6IG51bGwsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40KScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPkRhdGFTb3VyY2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9eygpID0+IHNldFNob3coZmFsc2UpfT4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFTb3VyY2UgRGF0YVNvdXJjZT17ZGF0YVNvdXJjZX0gU2V0RGF0YVNvdXJjZT17c2V0RGF0YVNvdXJjZSB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChVcGRhdGVEYXRhU291cmNlKGRhdGFTb3VyY2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3coZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0RGF0YVNvdXJjZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
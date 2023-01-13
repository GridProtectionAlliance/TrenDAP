"use strict";
(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["wwwroot_TypeScript_Features_DataSets_DataSet_tsx"],{

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

/***/ "./wwwroot/TypeScript/Features/DataSets/DataSet.tsx":
/*!**********************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/DataSet.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataSourceTypes/DataSourceTypesSlice */ "./wwwroot/TypeScript/Features/DataSourceTypes/DataSourceTypesSlice.ts");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./wwwroot/Styles/app.scss");
/* harmony import */ var _OpenHistorian_DataSetOpenHistorian__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OpenHistorian/DataSetOpenHistorian */ "./wwwroot/TypeScript/Features/OpenHistorian/DataSetOpenHistorian.tsx");
/* harmony import */ var _OpenXDA_DataSetOpenXDA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../OpenXDA/DataSetOpenXDA */ "./wwwroot/TypeScript/Features/OpenXDA/DataSetOpenXDA.tsx");
/* harmony import */ var _Types_DataSetGlobalSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Types/DataSetGlobalSettings */ "./wwwroot/TypeScript/Features/DataSets/Types/DataSetGlobalSettings.tsx");
/* harmony import */ var _Sapphire_DataSetSapphire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Sapphire/DataSetSapphire */ "./wwwroot/TypeScript/Features/Sapphire/DataSetSapphire.tsx");
//******************************************************************************************************
//  DataSet.tsx - Gbtc
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








var DataSet = function (props) {
    var dataSourceTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_2__.SelectDataSourceTypes);
    var dstStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_2__.SelectDataSourceTypesStatus);
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (dstStatus != 'unitiated')
            return;
        dispatch((0,_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_2__.FetchDataSourceTypes)());
        return function () {
        };
    }, [dispatch, dstStatus]);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('settings'), 2), tab = _a[0], setTab = _a[1];
    var dataSources = JSON.parse(props.Record.JSONString);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "nav nav-tabs", style: { padding: 10 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "nav-item" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "nav-link active", "data-toggle": "tab", onClick: function () { return setTab('settings'); } }, "Settings")),
            dataSources.map(function (ds, index) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "nav-item " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3__["default"].workspacetab, key: index },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "nav-link", "data-toggle": "tab", onClick: function () { return setTab(index.toString()); } }, ds.DataSource.Name),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { onClick: function () {
                        var json = JSON.parse(props.Record.JSONString);
                        json.splice(index, 1);
                        props.SetDataSet(__assign(__assign({}, props.Record), { JSONString: JSON.stringify(json) }));
                    } }, "X"))); })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-content" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-pane container " + (tab === "settings" ? 'active' : 'fade') },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Types_DataSetGlobalSettings__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({}, props))),
            dataSources.map(function (ds, index) {
                var _a, _b, _c;
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-pane container " + (tab === index.toString() ? 'active' : 'fade'), id: index, key: index },
                    (((_a = dataSourceTypes.find(function (dst) { return dst.ID === ds.DataSource.DataSourceTypeID; })) === null || _a === void 0 ? void 0 : _a.Name) === "TrenDAPDB" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OpenXDA_DataSetOpenXDA__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({}, props, { Data: ds, Index: index })) : null),
                    (((_b = dataSourceTypes.find(function (dst) { return dst.ID === ds.DataSource.DataSourceTypeID; })) === null || _b === void 0 ? void 0 : _b.Name) === "Sapphire" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Sapphire_DataSetSapphire__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({}, props, { Data: ds, Index: index })) : null),
                    (((_c = dataSourceTypes.find(function (dst) { return dst.ID === ds.DataSource.DataSourceTypeID; })) === null || _c === void 0 ? void 0 : _c.Name) === "OpenHistorian" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OpenHistorian_DataSetOpenHistorian__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({}, props, { Data: ds, Index: index })) : null)));
            }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSet);


/***/ }),

/***/ "./wwwroot/TypeScript/Features/DataSets/HelperFunctions.ts":
/*!*****************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/HelperFunctions.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputeValidDays": () => (/* binding */ ComputeValidDays),
/* harmony export */   "ComputeValidWeeks": () => (/* binding */ ComputeValidWeeks)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//******************************************************************************************************
//  HelperFunctions.ts - Gbtc
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
//  02/06/2022 - C. Lackner
//       Generated original version of source code.
//
//******************************************************************************************************

var ComputeValidDays = function (ds) {
    if (ds.Context == 'Relative')
        return 127;
    var from = moment__WEBPACK_IMPORTED_MODULE_0___default()(ds.From);
    from.startOf("d");
    var to = moment__WEBPACK_IMPORTED_MODULE_0___default()(ds.To);
    to.startOf("d");
    var diff = to.diff(from, 'd');
    if (diff >= 7)
        return 127;
    //If less than 1 Day Nothing is Valid
    if (diff < 1)
        return 0;
    var result = 0;
    for (var i = 0; i < 7; i = i + 1) {
        if (i >= from.day() && (i - from.day()) < diff)
            result = result + Math.pow(2, i);
        if (i < from.day() && (from.day() - i) > (7 - diff))
            result = result + Math.pow(2, i);
    }
    return result;
};
var ComputeValidWeeks = function (ds) {
    if (ds.Context == 'Relative')
        return Math.pow(2, 53) - 1;
    var from = moment__WEBPACK_IMPORTED_MODULE_0___default()(ds.From);
    from.startOf("week");
    var to = moment__WEBPACK_IMPORTED_MODULE_0___default()(ds.To);
    to.startOf("week");
    var diff = to.diff(from, 'week');
    if (diff >= 52)
        return Math.pow(2, 53) - 1;
    var result = 0;
    for (var i = 1; i < 54; i = i + 1) {
        if (i >= from.week() && (i - from.week()) < diff)
            result = result + Math.pow(2, i - 1);
        if (i < from.week() && (from.week() - i) > (53 - diff))
            result = result + Math.pow(2, i - 1);
    }
    return result;
};



/***/ }),

/***/ "./wwwroot/TypeScript/Features/DataSets/Types/DataSetGlobalSettings.tsx":
/*!******************************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/Types/DataSetGlobalSettings.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Constants */ "./wwwroot/TypeScript/Constants.ts");
/* harmony import */ var _DataSources_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../DataSources/DataSourcesSlice */ "./wwwroot/TypeScript/Features/DataSources/DataSourcesSlice.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../DataSourceTypes/DataSourceTypesSlice */ "./wwwroot/TypeScript/Features/DataSourceTypes/DataSourceTypesSlice.ts");
/* harmony import */ var _DataSetsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../DataSetsSlice */ "./wwwroot/TypeScript/Features/DataSets/DataSetsSlice.ts");
/* harmony import */ var _OpenHistorian_OpenHistorianSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../OpenHistorian/OpenHistorianSlice */ "./wwwroot/TypeScript/Features/OpenHistorian/OpenHistorianSlice.ts");
/* harmony import */ var _Sapphire_SapphireSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Sapphire/SapphireSlice */ "./wwwroot/TypeScript/Features/Sapphire/SapphireSlice.ts");
/* harmony import */ var _HelperFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../HelperFunctions */ "./wwwroot/TypeScript/Features/DataSets/HelperFunctions.ts");
//******************************************************************************************************
//  DataSetGlobalSettings.tsx - Gbtc
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
//  08/27/2021 - Billy Ernest
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










var DataSetGlobalSettings = function (props) {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    var dataSources = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) { return (0,_DataSources_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_3__.SelectDataSourcesForUser)(state, userName); });
    var publicDataSources = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) { return (0,_DataSources_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_3__.SelectDataSourcesAllPublicNotUser)(state, userName); });
    var dsStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_DataSources_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_3__.SelectDataSourcesStatus);
    var dataSourceTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_5__.SelectDataSourceTypes);
    var dstStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_5__.SelectDataSourceTypesStatus);
    var allDataSets = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_6__.SelectDataSets);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (dsStatus != 'unitiated' && dsStatus != 'changed')
            return;
        dispatch((0,_DataSources_DataSourcesSlice__WEBPACK_IMPORTED_MODULE_3__.FetchDataSources)());
        return function () {
        };
    }, [dispatch, dsStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (dstStatus != 'unitiated')
            return;
        dispatch((0,_DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_5__.FetchDataSourceTypes)());
        return function () {
        };
    }, [dispatch, dstStatus]);
    function valid(field) {
        if (field == 'Name')
            return props.Record.Name != null && props.Record.Name.trim().length > 0 &&
                props.Record.Name.length <= 200 && allDataSets.find(function (ws) { return ws.Name.toLowerCase() == props.Record.Name.toLowerCase() && ws.ID != props.Record.ID; }) == null;
        else
            return true;
    }
    function AddDS(dataSource) {
        var json = JSON.parse(props.Record.JSONString);
        json.push({ DataSource: dataSource, Data: GetDS(dataSource) });
        props.SetDataSet(__assign(__assign({}, props.Record), { JSONString: JSON.stringify(json) }));
    }
    function GetDS(dataSource) {
        if (dataSourceTypes.find(function (dst) { return dst.ID === dataSource.DataSourceTypeID; }).Name === "TrenDAPDB")
            return (0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_6__.SelectNewXDADataSet)();
        if (dataSourceTypes.find(function (dst) { return dst.ID === dataSource.DataSourceTypeID; }).Name === "Sapphire")
            return (0,_Sapphire_SapphireSlice__WEBPACK_IMPORTED_MODULE_8__.NewSapphireDataSet)();
        if (dataSourceTypes.find(function (dst) { return dst.ID === dataSource.DataSourceTypeID; }).Name === "OpenHistorian")
            return (0,_OpenHistorian_OpenHistorianSlice__WEBPACK_IMPORTED_MODULE_7__.SelectNewOpenHistorianDataSet)();
        else
            return {};
    }
    function validDay(d) {
        var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var i = dayOfWeek.findIndex(function (day) { return day == d; });
        return ((0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_9__.ComputeValidDays)(props.Record) & Math.pow(2, i)) == 0;
    }
    function validWeek(h) {
        var i = parseInt(h);
        var x = (0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_9__.ComputeValidWeeks)(props.Record);
        return Math.floor((0,_HelperFunctions__WEBPACK_IMPORTED_MODULE_9__.ComputeValidWeeks)(props.Record) / Math.pow(2, i)) % 2 == 0;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Record: props.Record, Field: "Name", Setter: function (record) { return props.SetDataSet(record); }, Valid: valid, Feedback: "A unique Name has to be specified" }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(RelativeDateRangePicker, { Record: props.Record, Setter: function (record) { return props.SetDataSet(record); } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.EnumCheckBoxes, { Record: props.Record, Field: "Hours", Label: "Hour of Day", Setter: function (record) { return props.SetDataSet(record); }, Enum: Array.from({ length: 24 }, function (_, i) { return i.toString(); }) }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.EnumCheckBoxes, { Record: props.Record, Field: "Days", Label: "Day of Week", Setter: function (record) { return props.SetDataSet(record); }, Enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], IsDisabled: validDay }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.EnumCheckBoxes, { Record: props.Record, Field: "Weeks", Label: "Week of Year", Setter: function (record) { return props.SetDataSet(record); }, Enum: Array.from({ length: 53 }, function (_, i) { return i.toString(); }), IsDisabled: validWeek }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.EnumCheckBoxes, { Record: props.Record, Field: "Months", Label: "Month of Year", Setter: function (record) { return props.SetDataSet(record); }, Enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.CheckBox, { Record: props.Record, Field: "Public", Label: 'Shared', Setter: function (record) { return props.SetDataSet(record); } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-group" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropup" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                    _Constants__WEBPACK_IMPORTED_MODULE_2__.Plus,
                    " DataSource"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-menu", "aria-labelledby": "dropdownMenuButton" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-header" }, "Your DataSources"),
                    dataSources.map(function (ds) { var _a; return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { key: ds.ID, className: "dropdown-item", onClick: function () { return AddDS(ds); } },
                        ds.Name,
                        " (", (_a = dataSourceTypes.find(function (dst) { return dst.ID === ds.DataSourceTypeID; })) === null || _a === void 0 ? void 0 :
                        _a.Name,
                        ")"); }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-header" }, "Shared DataSources"),
                    publicDataSources.map(function (ds) { var _a; return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { key: ds.ID, className: "dropdown-item", onClick: function () { return AddDS(ds); } },
                        ds.Name,
                        " (", (_a = dataSourceTypes.find(function (dst) { return dst.ID === ds.DataSourceTypeID; })) === null || _a === void 0 ? void 0 :
                        _a.Name,
                        ")"); }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSetGlobalSettings);
var RelativeDateRangePicker = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Record.Context), 2), context = _a[0], setContext = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Record.RelativeValue), 2), relativeValue = _b[0], setRelativeValue = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Record.RelativeWindow), 2), relativeWindow = _c[0], setRelativeWindow = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Record.From), 2), startDate = _d[0], setStartDate = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Record.To), 2), endDate = _e[0], setEndDate = _e[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (context !== props.Record.Context)
            setContext(props.Record.Context);
        if (relativeValue !== props.Record.RelativeValue)
            setRelativeValue(props.Record.RelativeValue);
        if (relativeWindow !== props.Record.RelativeWindow)
            setRelativeWindow(props.Record.RelativeWindow);
        if (startDate !== props.Record.From)
            setStartDate(props.Record.From);
        if (endDate !== props.Record.To)
            setEndDate(props.Record.To);
    }, [props.Record]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (context !== props.Record.Context) {
            var newRecord = __assign({}, props.Record);
            newRecord.Context = context;
            props.Setter(newRecord);
        }
    }, [context]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (relativeValue !== props.Record.RelativeValue) {
            var newRecord = __assign({}, props.Record);
            newRecord.RelativeValue = relativeValue;
            props.Setter(newRecord);
        }
    }, [relativeValue]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (relativeWindow !== props.Record.RelativeWindow) {
            var newRecord = __assign({}, props.Record);
            newRecord.RelativeWindow = relativeWindow;
            props.Setter(newRecord);
        }
    }, [relativeWindow]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (startDate !== props.Record.From) {
            var newRecord = __assign({}, props.Record);
            newRecord.From = startDate;
            props.Setter(newRecord);
        }
    }, [startDate]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (endDate !== props.Record.To) {
            var newRecord = __assign({}, props.Record);
            newRecord.To = endDate;
            props.Setter(newRecord);
        }
    }, [endDate]);
    var ShowContent = function () {
        if (context == 'Relative')
            return ShowRelative();
        else
            return ShowFixed();
    };
    var ShowRelative = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Time Window Size"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { value: relativeValue, type: 'number', className: 'form-control', onChange: function (evt) { return setRelativeValue(parseFloat(evt.target.value)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Time Window Units"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: 'form-control', value: relativeWindow, onChange: function (evt) { return setRelativeWindow(evt.target.value); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Day' }, "Day(s)"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Week' }, "Week(s)"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Month' }, "Month(s)"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Year' }, "Year(s)")))));
    };
    var ShowFixed = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Start Date"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { value: startDate, type: 'date', className: 'form-control', onChange: function (evt) { return setStartDate(evt.target.value); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "End Date"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { value: endDate, type: 'date', className: 'form-control', onChange: function (evt) { return setEndDate(evt.target.value); } }))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'row' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Time Context"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: 'form-control', value: context, onChange: function (evt) { return setContext(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Relative' }, "Relative"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Fixed Dates' }, "Fixed Dates"))),
        ShowContent()));
};


/***/ }),

/***/ "./wwwroot/TypeScript/Features/OpenHistorian/DataSetOpenHistorian.tsx":
/*!****************************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/OpenHistorian/DataSetOpenHistorian.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OpenHistorianSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OpenHistorianSlice */ "./wwwroot/TypeScript/Features/OpenHistorian/OpenHistorianSlice.ts");
//******************************************************************************************************
//  DataSetOpenHistorian.tsx - Gbtc
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
//  03/03/2021 - Billy Ernest
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var DataSetOpenHistorian = function (props) {
    var _a, _b;
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var devices = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenHistorianSlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenHistorian)(state, props.Data.DataSource.ID); });
    function UpdateDS() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var json = JSON.parse(props.Record.JSONString);
        json[props.Index].Data = __assign({}, props.Data.Data);
        for (var index in params)
            json[props.Index].Data[params[index].field] = params[index].value;
        props.SetDataSet(__assign(__assign({}, props.Record), { JSONString: JSON.stringify(json) }));
    }
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (devices != undefined && (devices === null || devices === void 0 ? void 0 : devices.Status) != 'unitiated' && (devices === null || devices === void 0 ? void 0 : devices.Status) != 'changed')
            return;
        dispatch((0,_OpenHistorianSlice__WEBPACK_IMPORTED_MODULE_3__.FetchOpenHistorian)({ dataSourceID: props.Data.DataSource.ID }));
        return function () {
        };
    }, [dispatch, devices.Status]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayMultiSelect, { Style: { height: window.innerHeight - 450 }, Record: props.Data.Data, Options: __spreadArray([], __read(new Set((_a = devices === null || devices === void 0 ? void 0 : devices.Measurements.filter(function (m) {
                        if (props.Data.Data.Instance !== 'None')
                            return m.ID.includes(props.Data.Data.Instance);
                        else
                            return false;
                    }).map(function (m) { return m.Device; })) !== null && _a !== void 0 ? _a : [])), false).map(function (m) { return ({ Value: m, Label: m }); }), Field: "Devices", Setter: function (record) { return UpdateDS({ field: 'Devices', value: record.Devices }); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "Instance", Options: [{ Value: 'None', Label: 'None' }].concat((_b = devices === null || devices === void 0 ? void 0 : devices.Instances.map(function (m) { return ({ Value: m.Acronym, Label: m.Acronym }); })) !== null && _b !== void 0 ? _b : []), Setter: function (record) { return UpdateDS({ field: 'Instance', value: record.Instance }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "Aggregate", Options: [{ Value: '1m', Label: 'Minute' }, { Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, { Value: '1M', Label: 'Month' }], Setter: function (record) { return UpdateDS({ field: 'Aggregate', value: record.Aggregate }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayCheckBoxes, { Record: props.Data.Data, Checkboxes: [{ ID: 'A', Label: 'A' }, { ID: 'B', Label: 'B' }, { ID: 'C', Label: 'C' }, { ID: 'N', Label: 'N' }, { ID: '+', Label: 'Pos' }, { ID: '0', Label: 'Zero' }, { ID: '-', Label: 'Neg' }, { ID: 'None', Label: 'None' }], Field: "Phases", Setter: function (record) { return UpdateDS({ field: 'Phases', value: record.Phases }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayCheckBoxes, { Record: props.Data.Data, Checkboxes: [{ ID: 'IPHM', Label: 'Current Magnitude' }, { ID: 'IPHA', Label: 'Current Angle' }, { ID: 'VPHM', Label: 'Voltage Magnitude' }, { ID: 'VPHA', Label: 'Voltage Angle' }, { ID: 'FREQ', Label: 'Frequency' }, { ID: 'DFDT', Label: 'DFDT' }, { ID: 'ALOG', Label: 'Analog' }, { ID: 'DIGI', Label: 'Digital' }, { ID: 'CALC', Label: 'Calculated' }], Field: "Types", Setter: function (record) { return UpdateDS({ field: 'Types', value: record.Types }); } })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSetOpenHistorian);


/***/ }),

/***/ "./wwwroot/TypeScript/Features/OpenXDA/DataSetOpenXDA.tsx":
/*!****************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/OpenXDA/DataSetOpenXDA.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OpenXDA/OpenXDASlice */ "./wwwroot/TypeScript/Features/OpenXDA/OpenXDASlice.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
//******************************************************************************************************
//  DataSetOpenXDA.tsx - Gbtc
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
//  08/16/2021 - Billy Ernest
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var DataSetOpenXDA = function (props) {
    var _a, _b, _c, _d;
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var phases = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDA)(state, props.Data.DataSource.ID, 'Phase'); });
    var phStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDAStatus)(state, props.Data.DataSource.ID, 'Phase'); });
    var meters = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDA)(state, props.Data.DataSource.ID, 'Meter'); });
    var meterStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDAStatus)(state, props.Data.DataSource.ID, 'Meter'); });
    var assets = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDA)(state, props.Data.DataSource.ID, 'Asset'); });
    var assetStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDAStatus)(state, props.Data.DataSource.ID, 'Asset'); });
    var channelGroups = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDA)(state, props.Data.DataSource.ID, 'ChannelGroup'); });
    var cgStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDAStatus)(state, props.Data.DataSource.ID, 'ChannelGroup'); });
    var channelTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDA)(state, props.Data.DataSource.ID, 'ChannelGroupType'); });
    var cgtStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDAStatus)(state, props.Data.DataSource.ID, 'ChannelGroupType'); });
    function UpdateDS() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var json = JSON.parse(props.Record.JSONString);
        json[props.Index].Data = __assign({}, props.Data.Data);
        for (var index in params)
            json[props.Index].Data[params[index].field] = params[index].value;
        props.SetDataSet(__assign(__assign({}, props.Record), { JSONString: JSON.stringify(json) }));
    }
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (phStatus != 'unitiated' && phStatus != 'changed')
            return;
        dispatch((0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.FetchOpenXDA)({ dataSourceID: props.Data.DataSource.ID, table: 'Phase' }));
        return function () {
        };
    }, [dispatch, phStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (meterStatus != 'unitiated' && meterStatus != 'changed')
            return;
        dispatch((0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.FetchOpenXDA)({ dataSourceID: props.Data.DataSource.ID, table: 'Meter' }));
        return function () {
        };
    }, [dispatch, meterStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (assetStatus != 'unitiated' && assetStatus != 'changed')
            return;
        dispatch((0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.FetchOpenXDA)({ dataSourceID: props.Data.DataSource.ID, table: 'Asset' }));
        return function () {
        };
    }, [dispatch, assetStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (cgStatus != 'unitiated' && cgStatus != 'changed')
            return;
        dispatch((0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.FetchOpenXDA)({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroup' }));
        return function () {
        };
    }, [dispatch, cgStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (cgtStatus != 'unitiated' && cgtStatus != 'changed')
            return;
        dispatch((0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.FetchOpenXDA)({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroupType' }));
        return function () {
        };
    }, [dispatch, cgtStatus]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-primary', onClick: function (evt) {
                        evt.preventDefault();
                        window.open("".concat(homePath, "QuickViewOpenXDA"), "_blank");
                        localStorage.setItem('QuickViewOpenXDA', JSON.stringify({ DataSourceID: props.Data.DataSource.ID, PostData: CreatePost(props.Record, props.Data.Data) }));
                    } }, "Quick View"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "Aggregate", Options: [{ Value: '', Label: 'None' }, { Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, { Value: '1w', Label: 'Week' }], Setter: function (record) { return UpdateDS({ field: 'Aggregate', value: record.Aggregate }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "By", Options: [{ Value: 'Meter', Label: 'Meter' }, { Value: 'Asset', Label: 'Asset' }], Setter: function (record) { return UpdateDS({ field: 'By', value: record.By }, { field: 'IDs', value: [] }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayMultiSelect, { Style: { height: window.innerHeight - 560 }, Record: props.Data.Data, Options: (_a = (props.Data.Data.By == 'Meter' ? meters === null || meters === void 0 ? void 0 : meters.map(function (m) { return ({ Value: m.ID.toString(), Label: m.Name }); }) : assets === null || assets === void 0 ? void 0 : assets.map(function (m) { return ({ Value: m.ID.toString(), Label: m.AssetName }); }))) !== null && _a !== void 0 ? _a : [], Field: "IDs", Setter: function (record) { return UpdateDS({ field: 'IDs', value: record.IDs }); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayCheckBoxes, { Record: props.Data.Data, Checkboxes: (_b = phases === null || phases === void 0 ? void 0 : phases.map(function (m) { return ({ ID: m.ID.toString(), Label: m.Name }); })) !== null && _b !== void 0 ? _b : [], Field: "Phases", Setter: function (record) { return UpdateDS({ field: 'Phases', value: record.Phases }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayCheckBoxes, { Label: "Quick Selection", Record: props.Data.Data, Checkboxes: (_c = channelGroups === null || channelGroups === void 0 ? void 0 : channelGroups.map(function (m) { return ({ ID: m.ID, Label: m.Name }); })) !== null && _c !== void 0 ? _c : [], Field: "Groups", Setter: function (record) {
                        var oldGroups = props.Data.Data.Groups;
                        if (oldGroups.length > record.Groups.length) { // something was taken out
                            var a = oldGroups.map(function (x) { return record.Groups.indexOf(x); });
                            var i_1 = a.indexOf(-1);
                            var channelGroupID = oldGroups[i_1];
                            var newa = props.Data.Data.Types.map(function (t) { return channelTypes.find(function (ct) { return ct.ID === t; }); }).filter(function (t) { return t.ChannelGroupID !== oldGroups[i_1]; }).map(function (t) { return t.ID; });
                            UpdateDS({ field: 'Groups', value: record.Groups }, { field: 'Types', value: newa });
                        }
                        else if (oldGroups.length < record.Groups.length) { // something was put in
                            var a = record.Groups.map(function (x) { return oldGroups.indexOf(x); });
                            var i = a.indexOf(-1);
                            var channelGroupID_1 = record.Groups[i];
                            var newa = __spreadArray(__spreadArray([], __read(props.Data.Data.Types), false), __read(channelTypes.filter(function (t) { return t.ChannelGroupID === channelGroupID_1; }).map(function (t) { return t.ID; })), false);
                            UpdateDS({ field: 'Groups', value: record.Groups }, { field: 'Types', value: newa });
                        }
                        else { // this probably can't happen, but means nothing changed
                        }
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayMultiSelect, { Style: { height: window.innerHeight - 520 }, Record: props.Data.Data, Options: (_d = channelTypes === null || channelTypes === void 0 ? void 0 : channelTypes.map(function (m) { return ({ Value: m.ID, Label: m.DisplayName }); })) !== null && _d !== void 0 ? _d : [], Field: "Types", Setter: function (record) { return UpdateDS({ field: 'Types', value: record.Types }); } })))));
};
function CreatePost(dataSet, data) {
    var startTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(dataSet.From);
    var endTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(dataSet.To);
    if (dataSet.Context == "Relative") {
        endTime = moment__WEBPACK_IMPORTED_MODULE_4___default()();
        startTime = moment__WEBPACK_IMPORTED_MODULE_4___default()();
        if (dataSet.RelativeWindow == "Day")
            startTime.add('days', -dataSet.RelativeValue);
        else if (dataSet.RelativeWindow == "Week")
            startTime.add('days', -dataSet.RelativeValue * 7);
        else if (dataSet.RelativeWindow == "Month")
            startTime.add('months', -dataSet.RelativeValue);
        else
            startTime.add('years', -dataSet.RelativeValue);
    }
    return {
        By: data.By,
        IDs: data.IDs,
        Phases: data.Phases,
        Groups: data.Groups,
        Types: data.Types,
        StartTime: startTime,
        EndTime: endTime,
        Hours: dataSet.Hours,
        Days: dataSet.Days,
        Weeks: dataSet.Weeks,
        Months: dataSet.Months,
        Aggregate: data.Aggregate
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSetOpenXDA);


/***/ }),

/***/ "./wwwroot/TypeScript/Features/Sapphire/DataSetSapphire.tsx":
/*!******************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/Sapphire/DataSetSapphire.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _SapphireSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SapphireSlice */ "./wwwroot/TypeScript/Features/Sapphire/SapphireSlice.ts");
//******************************************************************************************************
//  DataSetSapphire.tsx - Gbtc
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
//  12/03/2021 - Billy Ernest
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




var DataSetSapphire = function (props) {
    var _a;
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var resolutions = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.SelectSapphire)(state, props.Data.DataSource.ID, 'Resolution'); });
    var rStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.SelectSapphireStatus)(state, props.Data.DataSource.ID, 'Resolution'); });
    var phases = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.SelectSapphire)(state, props.Data.DataSource.ID, 'Phase'); });
    var phStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.SelectSapphireStatus)(state, props.Data.DataSource.ID, 'Phase'); });
    var meters = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.SelectSapphire)(state, props.Data.DataSource.ID, 'Meter'); });
    var mStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.SelectSapphireStatus)(state, props.Data.DataSource.ID, 'Meter'); });
    var channelTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.SelectSapphire)(state, props.Data.DataSource.ID, 'ChannelGroupType'); });
    var ctStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.SelectSapphireStatus)(state, props.Data.DataSource.ID, 'ChannelGroupType'); });
    function UpdateDS() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var json = JSON.parse(props.Record.JSONString);
        json[props.Index].Data = __assign({}, props.Data.Data);
        for (var index in params)
            json[props.Index].Data[params[index].field] = params[index].value;
        props.SetDataSet(__assign(__assign({}, props.Record), { JSONString: JSON.stringify(json) }));
    }
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (phStatus != 'unitiated' && phStatus != 'changed')
            return;
        dispatch((0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.FetchSapphire)({ dataSourceID: props.Data.DataSource.ID, table: 'Phase' }));
        return function () {
        };
    }, [phStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (rStatus != 'unitiated' && rStatus != 'changed')
            return;
        dispatch((0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.FetchSapphire)({ dataSourceID: props.Data.DataSource.ID, table: 'Resolution' }));
        return function () {
        };
    }, [rStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (mStatus != 'unitiated' && mStatus != 'changed')
            return;
        dispatch((0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.FetchSapphire)({ dataSourceID: props.Data.DataSource.ID, table: 'Meter' }));
        return function () {
        };
    }, [mStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (ctStatus != 'unitiated' && ctStatus != 'changed')
            return;
        dispatch((0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.FetchSapphire)({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroupType' }));
        return function () {
        };
    }, [ctStatus]);
    function TestHarmonics(harmonics) {
        var re = /^\d+(?:-\d+)?(?:,\h*\d+(?:-\d+)?)*$/;
        return re.test(harmonics);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "Aggregate", Options: resolutions.map(function (m) { return ({ Value: m.Description, Label: m.DisplayName }); }), Setter: function (record) { return UpdateDS({ field: 'Aggregate', value: record.Aggregate }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayMultiSelect, { Style: { height: window.innerHeight - 510 }, Record: props.Data.Data, Options: meters.map(function (m) { return ({ Value: m.ID, Label: m.Name }); }), Field: "IDs", Setter: function (record) { return UpdateDS({ field: 'IDs', value: record.IDs }); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayCheckBoxes, { Record: props.Data.Data, Checkboxes: (_a = phases.map(function (m) { return ({ ID: m.ID, Label: m.Name }); })) !== null && _a !== void 0 ? _a : [], Field: "Phases", Setter: function (record) { return UpdateDS({ field: 'Phases', value: record.Phases }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Field: 'Harmonics', Record: props.Data.Data, Label: 'Harmonics', Setter: function (record) { return UpdateDS({ field: 'Harmonics', value: record.Harmonics.replace(' ', '') }); }, Valid: function (field) { return TestHarmonics(props.Data.Data.Harmonics); }, Feedback: 'Harmonic groups should be listed by range or index.  eg 1-15,19,23,26-100', Type: 'text' }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayMultiSelect, { Style: { height: window.innerHeight - 600 }, Record: props.Data.Data, Options: channelTypes.map(function (m) { return ({ Value: m.ID, Label: m.DisplayName }); }), Field: "Types", Setter: function (record) { return UpdateDS({ field: 'Types', value: record.Types }); } })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSetSapphire);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3d3cm9vdF9UeXBlU2NyaXB0X0ZlYXR1cmVzX0RhdGFTZXRzX0RhdGFTZXRfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0dBQXdHO0FBQ3hHLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRXhHLFNBQVM7QUFDVCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN2QixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDdEIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDckIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBRW1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDdkYsd0dBQXdHO0FBQ3hHLHNCQUFzQjtBQUN0QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1E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aURBQUMscUVBQWMsSUFBbUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBSyxZQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUF4QixDQUF3QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsUUFBUSxFQUFFLEVBQVosQ0FBWSxDQUFDLEdBQUk7UUFDcE0saURBQUMscUVBQWMsSUFBbUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBSyxZQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUF4QixDQUF3QixFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxRQUFRLEdBQUk7UUFDclAsaURBQUMscUVBQWMsSUFBbUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBSyxZQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUF4QixDQUF3QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsUUFBUSxFQUFFLEVBQVosQ0FBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsR0FBSTtRQUM1TixpREFBQyxxRUFBYyxJQUFtQixNQUFN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aFQsaURBQUMsc0VBQWUsSUFBZ0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFFLFVBQUMsTUFBTSxJQUFLLGVBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFuRCxDQUFtRCxHQUFJO2dCQUN0WSxpREFBQyxzRUFBZSxJQUFnQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEVBQUUsRUFB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LFFBQVEsRUFBQywyRUFBMkUsRUFBQyxJQUFJLEVBQUMsTUFBTSxHQUFFO2dCQUM3VixpREFBQyx1RUFBZ0IsSUFBMkIsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQUssZUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQWpELENBQWlELEdBQUksQ0FFaFIsQ0FDSixDQUNILENBQ1YsQ0FBQztBQUVOLENBQUM7QUFFRCxpRUFBZSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL0RhdGFTZXQudHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvSGVscGVyRnVuY3Rpb25zLnRzIiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVHlwZXMvRGF0YVNldEdsb2JhbFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL09wZW5IaXN0b3JpYW4vRGF0YVNldE9wZW5IaXN0b3JpYW4udHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvT3BlblhEQS9EYXRhU2V0T3BlblhEQS50c3giLCJ3ZWJwYWNrOi8vdHJlbmRhcC8uL3d3d3Jvb3QvVHlwZVNjcmlwdC9GZWF0dXJlcy9TYXBwaGlyZS9EYXRhU2V0U2FwcGhpcmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25zdGFudHMudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMzAvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbi8vIGVtb2ppc1xyXG5jb25zdCBIZWF2eUNoZWNrTWFyayA9ICfinJTvuI8nO1xyXG5jb25zdCBQZW5jaWwgPSAn4pyP77iPJztcclxuY29uc3QgVHJhc2hDYW4gPSAn8J+Xke+4jyc7XHJcbmNvbnN0IENyb3NzTWFyayA9ICfinYwnO1xyXG5jb25zdCBQbHVzID0gJ+KelSc7XHJcbmNvbnN0IFdhcm5pbmcgPSAn4pqg77iPJztcclxuY29uc3QgU3Bpbm5lciA9ICfwn5SEJztcclxuY29uc3QgV3JlbmNoID0gJ/CflKcnO1xyXG5cclxuZXhwb3J0IHsgSGVhdnlDaGVja01hcmssIFBlbmNpbCwgVHJhc2hDYW4sIENyb3NzTWFyaywgUGx1cywgV2FybmluZywgU3Bpbm5lciwgV3JlbmNoIH07IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERhdGFTZXQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzI1LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNlbGVjdERhdGFTb3VyY2VUeXBlcywgU2VsZWN0RGF0YVNvdXJjZVR5cGVzU3RhdHVzLCBGZXRjaERhdGFTb3VyY2VUeXBlcyB9IGZyb20gJy4uL0RhdGFTb3VyY2VUeXBlcy9EYXRhU291cmNlVHlwZXNTbGljZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vU3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0IERhdGFTZXRPcGVuSGlzdG9yaWFuIGZyb20gJy4uL09wZW5IaXN0b3JpYW4vRGF0YVNldE9wZW5IaXN0b3JpYW4nO1xyXG5pbXBvcnQgRGF0YVNldE9wZW5YREEgZnJvbSAnLi4vT3BlblhEQS9EYXRhU2V0T3BlblhEQSc7XHJcbmltcG9ydCBEYXRhU2V0R2xvYmFsU2V0dGluZ3MgZnJvbSAnLi9UeXBlcy9EYXRhU2V0R2xvYmFsU2V0dGluZ3MnO1xyXG5pbXBvcnQgRGF0YVNldFNhcHBoaXJlIGZyb20gJy4uL1NhcHBoaXJlL0RhdGFTZXRTYXBwaGlyZSc7XHJcblxyXG5cclxuY29uc3QgRGF0YVNldDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBSZWNvcmQ6IFRyZW5EQVAuaURhdGFTZXQsIFNldERhdGFTZXQ6ICh3czogVHJlbkRBUC5pRGF0YVNldCkgPT4gdm9pZCB9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZVR5cGVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZVR5cGVzKSBhcyBUcmVuREFQLmlEYXRhU291cmNlVHlwZVtdO1xyXG4gICAgY29uc3QgZHN0U3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZVR5cGVzU3RhdHVzKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHN0U3RhdHVzICE9ICd1bml0aWF0ZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNvdXJjZVR5cGVzKCkpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkc3RTdGF0dXNdKTtcclxuXHJcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignc2V0dGluZ3MnKTtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VzID0gSlNPTi5wYXJzZShwcm9wcy5SZWNvcmQuSlNPTlN0cmluZyk7XHJcblxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFic1wiIHN0eWxlPXt7cGFkZGluZzoxMH19PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ3NldHRpbmdzJykgfT5TZXR0aW5nczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZXMubWFwKChkcywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJuYXYtaXRlbSBcIiArIHN0eWxlcy53b3Jrc3BhY2V0YWJ9ICBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoaW5kZXgudG9TdHJpbmcoKSl9Pntkcy5EYXRhU291cmNlLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShwcm9wcy5SZWNvcmQuSlNPTlN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldERhdGFTZXQoeyAuLi5wcm9wcy5SZWNvcmQsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KGpzb24pIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+WDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0YWItcGFuZSBjb250YWluZXIgXCIrICh0YWIgPT09IFwic2V0dGluZ3NcIiA/ICdhY3RpdmUnIDogJ2ZhZGUnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGFTZXRHbG9iYWxTZXR0aW5ncyB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlcy5tYXAoKGRzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0YWItcGFuZSBjb250YWluZXIgXCIgKyAodGFiID09PSBpbmRleC50b1N0cmluZygpID8gJ2FjdGl2ZScgOiAnZmFkZScpfSBpZD17aW5kZXh9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gZHN0LklEID09PSBkcy5EYXRhU291cmNlLkRhdGFTb3VyY2VUeXBlSUQpPy5OYW1lID09PSBcIlRyZW5EQVBEQlwiID8gPERhdGFTZXRPcGVuWERBIHsuLi5wcm9wc30gRGF0YT17ZHN9IEluZGV4PXtpbmRleH0vPjogbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRzLkRhdGFTb3VyY2UuRGF0YVNvdXJjZVR5cGVJRCk/Lk5hbWUgPT09IFwiU2FwcGhpcmVcIiA/IDxEYXRhU2V0U2FwcGhpcmUgey4uLnByb3BzfSBEYXRhPXtkc30gSW5kZXg9e2luZGV4fSAvPiA6IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRzLkRhdGFTb3VyY2UuRGF0YVNvdXJjZVR5cGVJRCk/Lk5hbWUgPT09IFwiT3Blbkhpc3RvcmlhblwiID8gPERhdGFTZXRPcGVuSGlzdG9yaWFuIHsuLi5wcm9wc30gRGF0YT17ZHN9IEluZGV4PXtpbmRleH0gLz4gOiBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVNldDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgSGVscGVyRnVuY3Rpb25zLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzA2LzIwMjIgLSBDLiBMYWNrbmVyXHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gXCIuLi8uLi9nbG9iYWxcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5jb25zdCBDb21wdXRlVmFsaWREYXlzID0gKGRzOiBUcmVuREFQLmlEYXRhU2V0KSA9PiB7XHJcbiAgICBpZiAoZHMuQ29udGV4dCA9PSAnUmVsYXRpdmUnKVxyXG4gICAgICAgIHJldHVybiAxMjc7XHJcblxyXG4gICAgY29uc3QgZnJvbSA9IG1vbWVudChkcy5Gcm9tKTtcclxuICAgIGZyb20uc3RhcnRPZihcImRcIilcclxuXHJcbiAgICBjb25zdCB0byA9IG1vbWVudChkcy5Ubyk7XHJcbiAgICB0by5zdGFydE9mKFwiZFwiKTtcclxuXHJcbiAgICBjb25zdCBkaWZmID0gdG8uZGlmZihmcm9tLCAnZCcpO1xyXG5cclxuICAgIGlmIChkaWZmID49IDcpXHJcbiAgICAgICAgcmV0dXJuIDEyNztcclxuXHJcbiAgICAvL0lmIGxlc3MgdGhhbiAxIERheSBOb3RoaW5nIGlzIFZhbGlkXHJcbiAgICBpZiAoZGlmZiA8IDEpXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgPSBpICsgMSkge1xyXG4gICAgICAgIGlmIChpID49IGZyb20uZGF5KCkgJiYgIChpIC0gZnJvbS5kYXkoKSkgPCBkaWZmKVxyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBNYXRoLnBvdygyLCBpKTtcclxuICAgICAgICBpZiAoaSA8IGZyb20uZGF5KCkgJiYgKGZyb20uZGF5KCkgLSBpKSA+ICg3IC0gZGlmZikpXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIE1hdGgucG93KDIsIGkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG59XHJcblxyXG5jb25zdCBDb21wdXRlVmFsaWRXZWVrcyA9IChkczogVHJlbkRBUC5pRGF0YVNldCkgPT4ge1xyXG4gICAgaWYgKGRzLkNvbnRleHQgPT0gJ1JlbGF0aXZlJylcclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiw1MykgLSAxO1xyXG5cclxuICAgIGNvbnN0IGZyb20gPSBtb21lbnQoZHMuRnJvbSk7XHJcbiAgICBmcm9tLnN0YXJ0T2YoXCJ3ZWVrXCIpXHJcblxyXG4gICAgY29uc3QgdG8gPSBtb21lbnQoZHMuVG8pO1xyXG4gICAgdG8uc3RhcnRPZihcIndlZWtcIik7XHJcblxyXG4gICAgY29uc3QgZGlmZiA9IHRvLmRpZmYoZnJvbSwgJ3dlZWsnKTtcclxuXHJcbiAgICBpZiAoZGlmZiA+PSA1MilcclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgNTMpIC0gMTtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTQ7IGkgPSBpICsgMSkge1xyXG4gICAgICAgIGlmIChpID49IGZyb20ud2VlaygpICYmIChpIC0gZnJvbS53ZWVrKCkpIDwgZGlmZilcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgTWF0aC5wb3coMiwgaS0xKTtcclxuICAgICAgICBpZiAoaSA8IGZyb20ud2VlaygpICYmIChmcm9tLndlZWsoKSAtIGkpID4gKDUzIC0gZGlmZikpXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIE1hdGgucG93KDIsIGktMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IENvbXB1dGVWYWxpZERheXMsIENvbXB1dGVWYWxpZFdlZWtzIH0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRGF0YVNldEdsb2JhbFNldHRpbmdzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8yNy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IElucHV0LCBDaGVja0JveCwgRW51bUNoZWNrQm94ZXMgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IHsgUGx1cyB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNlbGVjdERhdGFTb3VyY2VzU3RhdHVzLCBTZWxlY3REYXRhU291cmNlc0FsbFB1YmxpY05vdFVzZXIsIFNlbGVjdERhdGFTb3VyY2VzRm9yVXNlciwgRmV0Y2hEYXRhU291cmNlcyB9IGZyb20gJy4uLy4uL0RhdGFTb3VyY2VzL0RhdGFTb3VyY2VzU2xpY2UnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNlbGVjdERhdGFTb3VyY2VUeXBlcywgU2VsZWN0RGF0YVNvdXJjZVR5cGVzU3RhdHVzLCBGZXRjaERhdGFTb3VyY2VUeXBlcyB9IGZyb20gJy4uLy4uL0RhdGFTb3VyY2VUeXBlcy9EYXRhU291cmNlVHlwZXNTbGljZSc7XHJcbmltcG9ydCB7IFNlbGVjdERhdGFTZXRzLCBTZWxlY3ROZXdYREFEYXRhU2V0IH0gZnJvbSAnLi8uLi9EYXRhU2V0c1NsaWNlJztcclxuaW1wb3J0IHsgU2VsZWN0TmV3T3Blbkhpc3RvcmlhbkRhdGFTZXQgfSBmcm9tICcuLi8uLi9PcGVuSGlzdG9yaWFuL09wZW5IaXN0b3JpYW5TbGljZSc7XHJcbmltcG9ydCB7IE5ld1NhcHBoaXJlRGF0YVNldCB9IGZyb20gJy4uLy4uL1NhcHBoaXJlL1NhcHBoaXJlU2xpY2UnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IFNlbGVjdFdvcmtTcGFjZXMgfSBmcm9tICcuLi8uLi9Xb3JrU3BhY2VzL1dvcmtTcGFjZXNTbGljZSc7XHJcbmltcG9ydCB7IENvbXB1dGVWYWxpZERheXMsIENvbXB1dGVWYWxpZFdlZWtzIH0gZnJvbSAnLi4vSGVscGVyRnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IERhdGFTZXRHbG9iYWxTZXR0aW5nczogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBSZWNvcmQ6IFRyZW5EQVAuaURhdGFTZXQsIFNldERhdGFTZXQ6ICh3czogVHJlbkRBUC5pRGF0YVNldCkgPT4gdm9pZCB9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdERhdGFTb3VyY2VzRm9yVXNlcihzdGF0ZSwgdXNlck5hbWUpKSBhcyBUcmVuREFQLmlEYXRhU291cmNlW107XHJcbiAgICBjb25zdCBwdWJsaWNEYXRhU291cmNlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0RGF0YVNvdXJjZXNBbGxQdWJsaWNOb3RVc2VyKHN0YXRlLCB1c2VyTmFtZSkpIGFzIFRyZW5EQVAuaURhdGFTb3VyY2VbXTtcclxuICAgIGNvbnN0IGRzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZXNTdGF0dXMpO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZVR5cGVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZVR5cGVzKSBhcyBUcmVuREFQLmlEYXRhU291cmNlVHlwZVtdO1xyXG4gICAgY29uc3QgZHN0U3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZVR5cGVzU3RhdHVzKTtcclxuICAgIGNvbnN0IGFsbERhdGFTZXRzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHMpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRzU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIGRzU3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNvdXJjZXMoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkc1N0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRzdFN0YXR1cyAhPSAndW5pdGlhdGVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTb3VyY2VUeXBlcygpKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgZHN0U3RhdHVzXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkKGZpZWxkOiBrZXlvZiAoVHJlbkRBUC5pRGF0YVNldCkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoZmllbGQgPT0gJ05hbWUnKVxyXG4gICAgICAgICAgICByZXR1cm4gcHJvcHMuUmVjb3JkLk5hbWUgIT0gbnVsbCAmJiBwcm9wcy5SZWNvcmQuTmFtZS50cmltKCkubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgcHJvcHMuUmVjb3JkLk5hbWUubGVuZ3RoIDw9IDIwMCAmJiBhbGxEYXRhU2V0cy5maW5kKHdzID0+IHdzLk5hbWUudG9Mb3dlckNhc2UoKSA9PSBwcm9wcy5SZWNvcmQuTmFtZS50b0xvd2VyQ2FzZSgpICYmIHdzLklEICE9IHByb3BzLlJlY29yZC5JRCkgPT0gbnVsbFxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQWRkRFMoZGF0YVNvdXJjZTogVHJlbkRBUC5pRGF0YVNvdXJjZSkge1xyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShwcm9wcy5SZWNvcmQuSlNPTlN0cmluZyk7XHJcbiAgICAgICAganNvbi5wdXNoKHsgRGF0YVNvdXJjZTogZGF0YVNvdXJjZSwgRGF0YTogR2V0RFMoZGF0YVNvdXJjZSkgfSk7XHJcbiAgICAgICAgcHJvcHMuU2V0RGF0YVNldCh7IC4uLnByb3BzLlJlY29yZCwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RFMoZGF0YVNvdXJjZTogVHJlbkRBUC5pRGF0YVNvdXJjZSkge1xyXG4gICAgICAgIGlmIChkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gZHN0LklEID09PSBkYXRhU291cmNlLkRhdGFTb3VyY2VUeXBlSUQpLk5hbWUgPT09IFwiVHJlbkRBUERCXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3ROZXdYREFEYXRhU2V0KCk7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRhdGFTb3VyY2UuRGF0YVNvdXJjZVR5cGVJRCkuTmFtZSA9PT0gXCJTYXBwaGlyZVwiKVxyXG4gICAgICAgICAgICByZXR1cm4gTmV3U2FwcGhpcmVEYXRhU2V0KCk7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRhdGFTb3VyY2UuRGF0YVNvdXJjZVR5cGVJRCkuTmFtZSA9PT0gXCJPcGVuSGlzdG9yaWFuXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3ROZXdPcGVuSGlzdG9yaWFuRGF0YVNldCgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkRGF5KGQ6IHN0cmluZykge1xyXG5cclxuICAgICAgICBjb25zdCBkYXlPZldlZWsgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cclxuICAgICAgICBjb25zdCBpID0gZGF5T2ZXZWVrLmZpbmRJbmRleChkYXkgPT4gZGF5ID09IGQpO1xyXG5cclxuICAgICAgICByZXR1cm4gKENvbXB1dGVWYWxpZERheXMocHJvcHMuUmVjb3JkKSAmIE1hdGgucG93KDIsaSkpID09IDBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZFdlZWsoaDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaSA9IHBhcnNlSW50KGgpO1xyXG4gICAgICAgIGxldCB4ID0gQ29tcHV0ZVZhbGlkV2Vla3MocHJvcHMuUmVjb3JkKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihDb21wdXRlVmFsaWRXZWVrcyhwcm9wcy5SZWNvcmQpLyBNYXRoLnBvdygyLCBpKSklMiA9PSAwXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaURhdGFTZXQ+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGaWVsZD1cIk5hbWVcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IHByb3BzLlNldERhdGFTZXQocmVjb3JkKX0gVmFsaWQ9e3ZhbGlkfSBGZWVkYmFjaz17XCJBIHVuaXF1ZSBOYW1lIGhhcyB0byBiZSBzcGVjaWZpZWRcIn0gLz5cclxuICAgICAgICAgICAgPFJlbGF0aXZlRGF0ZVJhbmdlUGlja2VyIFJlY29yZD17cHJvcHMuUmVjb3JkfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHByb3BzLlNldERhdGFTZXQocmVjb3JkKX0gLz5cclxuICAgICAgICAgICAgPEVudW1DaGVja0JveGVzPFRyZW5EQVAuaURhdGFTZXQ+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGaWVsZD1cIkhvdXJzXCIgTGFiZWw9XCJIb3VyIG9mIERheVwiIFNldHRlcj17KHJlY29yZCkgPT4gcHJvcHMuU2V0RGF0YVNldChyZWNvcmQpfSBFbnVtPXtBcnJheS5mcm9tKHsgbGVuZ3RoOiAyNCB9LCAoXywgaSkgPT4gaS50b1N0cmluZygpKX0gLz5cclxuICAgICAgICAgICAgPEVudW1DaGVja0JveGVzPFRyZW5EQVAuaURhdGFTZXQ+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGaWVsZD1cIkRheXNcIiBMYWJlbD1cIkRheSBvZiBXZWVrXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBwcm9wcy5TZXREYXRhU2V0KHJlY29yZCl9IEVudW09e1snU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXX0gSXNEaXNhYmxlZD17dmFsaWREYXl9IC8+XHJcbiAgICAgICAgICAgIDxFbnVtQ2hlY2tCb3hlczxUcmVuREFQLmlEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gRmllbGQ9XCJXZWVrc1wiIExhYmVsPVwiV2VlayBvZiBZZWFyXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBwcm9wcy5TZXREYXRhU2V0KHJlY29yZCl9IEVudW09e0FycmF5LmZyb20oeyBsZW5ndGg6IDUzIH0sIChfLCBpKSA9PiBpLnRvU3RyaW5nKCkpfSBJc0Rpc2FibGVkPXt2YWxpZFdlZWt9IC8+XHJcbiAgICAgICAgICAgIDxFbnVtQ2hlY2tCb3hlczxUcmVuREFQLmlEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gRmllbGQ9XCJNb250aHNcIiBMYWJlbD1cIk1vbnRoIG9mIFllYXJcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IHByb3BzLlNldERhdGFTZXQocmVjb3JkKX0gRW51bT17WydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ119IC8+XHJcbiAgICAgICAgICAgIDxDaGVja0JveDxUcmVuREFQLmlEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gRmllbGQ9XCJQdWJsaWNcIiBMYWJlbD0nU2hhcmVkJyBTZXR0ZXI9eyhyZWNvcmQpID0+IHByb3BzLlNldERhdGFTZXQocmVjb3JkKX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtQbHVzfSBEYXRhU291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taGVhZGVyXCI+WW91ciBEYXRhU291cmNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YVNvdXJjZXMubWFwKGRzID0+IDxhIGtleT17ZHMuSUR9IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBBZGREUyhkcyl9Pntkcy5OYW1lfSAoe2RhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRzLkRhdGFTb3VyY2VUeXBlSUQpPy5OYW1lfSk8L2E+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1oZWFkZXJcIj5TaGFyZWQgRGF0YVNvdXJjZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3B1YmxpY0RhdGFTb3VyY2VzLm1hcChkcyA9PiA8YSBrZXk9e2RzLklEfSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gQWRkRFMoZHMpfT57ZHMuTmFtZX0gKHtkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gZHN0LklEID09PSBkcy5EYXRhU291cmNlVHlwZUlEKT8uTmFtZX0pPC9hPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFTZXRHbG9iYWxTZXR0aW5ncztcclxuXHJcbmNvbnN0IFJlbGF0aXZlRGF0ZVJhbmdlUGlja2VyID0gKHByb3BzOiB7IFJlY29yZDogVHJlbkRBUC5pRGF0YVNldCwgU2V0dGVyOiAocmVjb3JkOiBUcmVuREFQLmlEYXRhU2V0KSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IFtjb250ZXh0LCBzZXRDb250ZXh0XSA9IFJlYWN0LnVzZVN0YXRlPCdSZWxhdGl2ZScgfCAnRml4ZWQgRGF0ZXMnPihwcm9wcy5SZWNvcmQuQ29udGV4dCk7XHJcbiAgICBjb25zdCBbcmVsYXRpdmVWYWx1ZSwgc2V0UmVsYXRpdmVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHByb3BzLlJlY29yZC5SZWxhdGl2ZVZhbHVlKTtcclxuICAgIGNvbnN0IFtyZWxhdGl2ZVdpbmRvdywgc2V0UmVsYXRpdmVXaW5kb3ddID0gUmVhY3QudXNlU3RhdGU8J0RheScgfCAnV2VlaycgfCAnTW9udGgnIHwgJ1llYXInPihwcm9wcy5SZWNvcmQuUmVsYXRpdmVXaW5kb3cpXHJcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihwcm9wcy5SZWNvcmQuRnJvbSk7XHJcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHByb3BzLlJlY29yZC5Ubyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY29udGV4dCAhPT0gcHJvcHMuUmVjb3JkLkNvbnRleHQpIHNldENvbnRleHQocHJvcHMuUmVjb3JkLkNvbnRleHQpO1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVZhbHVlICE9PSBwcm9wcy5SZWNvcmQuUmVsYXRpdmVWYWx1ZSkgc2V0UmVsYXRpdmVWYWx1ZShwcm9wcy5SZWNvcmQuUmVsYXRpdmVWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlV2luZG93ICE9PSBwcm9wcy5SZWNvcmQuUmVsYXRpdmVXaW5kb3cpIHNldFJlbGF0aXZlV2luZG93KHByb3BzLlJlY29yZC5SZWxhdGl2ZVdpbmRvdyk7XHJcbiAgICAgICAgaWYgKHN0YXJ0RGF0ZSAhPT0gcHJvcHMuUmVjb3JkLkZyb20pIHNldFN0YXJ0RGF0ZShwcm9wcy5SZWNvcmQuRnJvbSk7XHJcbiAgICAgICAgaWYgKGVuZERhdGUgIT09IHByb3BzLlJlY29yZC5Ubykgc2V0RW5kRGF0ZShwcm9wcy5SZWNvcmQuVG8pO1xyXG4gICAgfSwgW3Byb3BzLlJlY29yZF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnRleHQgIT09IHByb3BzLlJlY29yZC5Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlY29yZCA9IHsgLi4ucHJvcHMuUmVjb3JkIH07XHJcbiAgICAgICAgICAgIG5ld1JlY29yZC5Db250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKG5ld1JlY29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbnRleHRdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVZhbHVlICE9PSBwcm9wcy5SZWNvcmQuUmVsYXRpdmVWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWNvcmQgPSB7IC4uLnByb3BzLlJlY29yZCB9O1xyXG4gICAgICAgICAgICBuZXdSZWNvcmQuUmVsYXRpdmVWYWx1ZSA9IHJlbGF0aXZlVmFsdWU7XHJcbiAgICAgICAgICAgIHByb3BzLlNldHRlcihuZXdSZWNvcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZWxhdGl2ZVZhbHVlXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmVsYXRpdmVXaW5kb3cgIT09IHByb3BzLlJlY29yZC5SZWxhdGl2ZVdpbmRvdykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWNvcmQgPSB7IC4uLnByb3BzLlJlY29yZCB9O1xyXG4gICAgICAgICAgICBuZXdSZWNvcmQuUmVsYXRpdmVXaW5kb3cgPSByZWxhdGl2ZVdpbmRvdztcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKG5ld1JlY29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JlbGF0aXZlV2luZG93XSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3RhcnREYXRlICE9PSBwcm9wcy5SZWNvcmQuRnJvbSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWNvcmQgPSB7IC4uLnByb3BzLlJlY29yZCB9O1xyXG4gICAgICAgICAgICBuZXdSZWNvcmQuRnJvbSA9IHN0YXJ0RGF0ZTtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKG5ld1JlY29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3N0YXJ0RGF0ZV0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVuZERhdGUgIT09IHByb3BzLlJlY29yZC5Ubykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWNvcmQgPSB7IC4uLnByb3BzLlJlY29yZCB9O1xyXG4gICAgICAgICAgICBuZXdSZWNvcmQuVG8gPSBlbmREYXRlO1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIobmV3UmVjb3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZW5kRGF0ZV0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBTaG93Q29udGVudCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY29udGV4dCA9PSAnUmVsYXRpdmUnKVxyXG4gICAgICAgICAgICByZXR1cm4gU2hvd1JlbGF0aXZlKCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gU2hvd0ZpeGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2hvd1JlbGF0aXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGltZSBXaW5kb3cgU2l6ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtyZWxhdGl2ZVZhbHVlfSB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVsYXRpdmVWYWx1ZShwYXJzZUZsb2F0KGV2dC50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlRpbWUgV2luZG93IFVuaXRzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17cmVsYXRpdmVXaW5kb3d9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWxhdGl2ZVdpbmRvdyhldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdEYXknPkRheShzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdXZWVrJz5XZWVrKHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J01vbnRoJz5Nb250aChzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdZZWFyJz5ZZWFyKHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IFNob3dGaXhlZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0YXJ0IERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c3RhcnREYXRlfSB0eXBlPSdkYXRlJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgb25DaGFuZ2U9eyhldnQpID0+IHNldFN0YXJ0RGF0ZShldnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVuZCBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VuZERhdGV9IHR5cGU9J2RhdGUnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBvbkNoYW5nZT17KGV2dCkgPT4gc2V0RW5kRGF0ZShldnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5UaW1lIENvbnRleHQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2NvbnRleHR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDb250ZXh0KGV2dC50YXJnZXQudmFsdWUgYXMgYW55KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nUmVsYXRpdmUnPlJlbGF0aXZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nRml4ZWQgRGF0ZXMnPkZpeGVkIERhdGVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtTaG93Q29udGVudCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRGF0YVNldE9wZW5IaXN0b3JpYW4udHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAzLzAzLzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgU2VsZWN0LCBBcnJheUNoZWNrQm94ZXMsIEFycmF5TXVsdGlTZWxlY3QgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBTZWxlY3RPcGVuSGlzdG9yaWFuLCBGZXRjaE9wZW5IaXN0b3JpYW4gfSBmcm9tICcuL09wZW5IaXN0b3JpYW5TbGljZSc7XHJcbmltcG9ydCB7IE9wZW5IaXN0b3JpYW4gfSBmcm9tICdAZ3BhLWdlbXN0b25lL2FwcGxpY2F0aW9uLXR5cGluZ3MnO1xyXG5cclxuY29uc3QgRGF0YVNldE9wZW5IaXN0b3JpYW46IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgUmVjb3JkOiBUcmVuREFQLmlEYXRhU2V0LCBEYXRhOiB7IERhdGFTb3VyY2U6IFRyZW5EQVAuaURhdGFTb3VyY2UsIERhdGE6IFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5EYXRhU2V0IH0sIEluZGV4OiBudW1iZXIsIFNldERhdGFTZXQ6ICh3czogVHJlbkRBUC5pRGF0YVNldCkgPT4gdm9pZCB9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgZGV2aWNlczogUmVkdXguT3Blbkhpc3RvcmlhblN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RPcGVuSGlzdG9yaWFuKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQpKTtcclxuXHJcbiAgICBmdW5jdGlvbiBVcGRhdGVEUyguLi5wYXJhbXM6IHsgZmllbGQ6IGtleW9mIFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5EYXRhU2V0LCB2YWx1ZTogYW55IH1bXSkge1xyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShwcm9wcy5SZWNvcmQuSlNPTlN0cmluZyk7XHJcbiAgICAgICAganNvbltwcm9wcy5JbmRleF0uRGF0YSA9IHsgLi4ucHJvcHMuRGF0YS5EYXRhIH07XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gcGFyYW1zKVxyXG4gICAgICAgICAgICBqc29uW3Byb3BzLkluZGV4XS5EYXRhW3BhcmFtc1tpbmRleF0uZmllbGRdID0gcGFyYW1zW2luZGV4XS52YWx1ZTtcclxuICAgICAgICBwcm9wcy5TZXREYXRhU2V0KHsgLi4ucHJvcHMuUmVjb3JkLCBKU09OU3RyaW5nOiBKU09OLnN0cmluZ2lmeShqc29uKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkZXZpY2VzICE9IHVuZGVmaW5lZCAmJiBkZXZpY2VzPy5TdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgZGV2aWNlcz8uU3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoT3Blbkhpc3Rvcmlhbih7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklEfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgZGV2aWNlcy5TdGF0dXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlNdWx0aVNlbGVjdDxUcmVuREFQLmlPcGVuSGlzdG9yaWFuRGF0YVNldD4gU3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0NTAgfX0gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IE9wdGlvbnM9e1suLi5uZXcgU2V0KGRldmljZXM/Lk1lYXN1cmVtZW50cy5maWx0ZXIobSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5EYXRhLkRhdGEuSW5zdGFuY2UgIT09ICdOb25lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtLklELmluY2x1ZGVzKHByb3BzLkRhdGEuRGF0YS5JbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLm1hcChtID0+IG0uRGV2aWNlKSA/PyBbXSldLm1hcChtID0+ICh7IFZhbHVlOiBtLCBMYWJlbDogbSB9KSkgfSBGaWVsZD1cIkRldmljZXNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdEZXZpY2VzJywgdmFsdWU6IHJlY29yZC5EZXZpY2VzIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Q8VHJlbkRBUC5pT3Blbkhpc3RvcmlhbkRhdGFTZXQ+IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBGaWVsZD1cIkluc3RhbmNlXCIgT3B0aW9ucz17W3sgVmFsdWU6ICdOb25lJywgTGFiZWw6ICdOb25lJ31dLmNvbmNhdChkZXZpY2VzPy5JbnN0YW5jZXMubWFwKG0gPT4gKHsgVmFsdWU6IG0uQWNyb255bSwgTGFiZWw6IG0uQWNyb255bSB9KSkgPz8gW10pfSBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdJbnN0YW5jZScsIHZhbHVlOiByZWNvcmQuSW5zdGFuY2UgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdDxUcmVuREFQLmlPcGVuSGlzdG9yaWFuRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IEZpZWxkPVwiQWdncmVnYXRlXCIgT3B0aW9ucz17W3sgVmFsdWU6ICcxbScsIExhYmVsOiAnTWludXRlJyB9LCB7IFZhbHVlOiAnMWgnLCBMYWJlbDogJ0hvdXInIH0sIHsgVmFsdWU6ICcxZCcsIExhYmVsOiAnRGF5JyB9LCB7IFZhbHVlOiAnMU0nLCBMYWJlbDogJ01vbnRoJyB9XX0gU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnQWdncmVnYXRlJywgdmFsdWU6IHJlY29yZC5BZ2dyZWdhdGUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5Q2hlY2tCb3hlczxUcmVuREFQLmlPcGVuSGlzdG9yaWFuRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IENoZWNrYm94ZXM9e1t7IElEOiAnQScsIExhYmVsOiAnQScgfSwgeyBJRDogJ0InLCBMYWJlbDogJ0InIH0sIHsgSUQ6ICdDJywgTGFiZWw6ICdDJyB9LCB7IElEOiAnTicsIExhYmVsOiAnTicgfSwgeyBJRDogJysnLCBMYWJlbDogJ1BvcycgfSwgeyBJRDogJzAnLCBMYWJlbDogJ1plcm8nIH0sIHsgSUQ6ICctJywgTGFiZWw6ICdOZWcnIH0sIHsgSUQ6ICdOb25lJywgTGFiZWw6ICdOb25lJyB9XX0gRmllbGQ9XCJQaGFzZXNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdQaGFzZXMnLCB2YWx1ZTogcmVjb3JkLlBoYXNlcyB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlDaGVja0JveGVzPFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5EYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gQ2hlY2tib3hlcz17W3sgSUQ6ICdJUEhNJywgTGFiZWw6ICdDdXJyZW50IE1hZ25pdHVkZScgfSwgeyBJRDogJ0lQSEEnLCBMYWJlbDogJ0N1cnJlbnQgQW5nbGUnIH0sIHsgSUQ6ICdWUEhNJywgTGFiZWw6ICdWb2x0YWdlIE1hZ25pdHVkZScgfSwgeyBJRDogJ1ZQSEEnLCBMYWJlbDogJ1ZvbHRhZ2UgQW5nbGUnIH0sIHsgSUQ6ICdGUkVRJywgTGFiZWw6ICdGcmVxdWVuY3knIH0sIHsgSUQ6ICdERkRUJywgTGFiZWw6ICdERkRUJyB9LCB7IElEOiAnQUxPRycsIExhYmVsOiAnQW5hbG9nJyB9LCB7IElEOiAnRElHSScsIExhYmVsOiAnRGlnaXRhbCcgfSwgeyBJRDogJ0NBTEMnLCBMYWJlbDogJ0NhbGN1bGF0ZWQnIH1dfSBGaWVsZD1cIlR5cGVzXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnVHlwZXMnLCB2YWx1ZTogcmVjb3JkLlR5cGVzIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVNldE9wZW5IaXN0b3JpYW47IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERhdGFTZXRPcGVuWERBLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8xNi8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IFNlbGVjdCwgQXJyYXlDaGVja0JveGVzLCBBcnJheU11bHRpU2VsZWN0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU2VsZWN0T3BlblhEQSwgRmV0Y2hPcGVuWERBLCBTZWxlY3RPcGVuWERBU3RhdHVzIH0gZnJvbSAnLi4vT3BlblhEQS9PcGVuWERBU2xpY2UnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IE9wZW5YREEgfSBmcm9tICdAZ3BhLWdlbXN0b25lL2FwcGxpY2F0aW9uLXR5cGluZ3MnO1xyXG5cclxuY29uc3QgRGF0YVNldE9wZW5YREE6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgUmVjb3JkOiBUcmVuREFQLmlEYXRhU2V0LCBEYXRhOiB7IERhdGFTb3VyY2U6IFRyZW5EQVAuaURhdGFTb3VyY2UsIERhdGE6IFRyZW5EQVAuaVhEQURhdGFTZXQgfSwgSW5kZXg6IG51bWJlciwgU2V0RGF0YVNldDogKHdzOiBUcmVuREFQLmlEYXRhU2V0KSA9PiB2b2lkIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBwaGFzZXM6IE9wZW5YREEuVHlwZXMuUGhhc2VbXSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0T3BlblhEQShzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnUGhhc2UnKSk7XHJcbiAgICBjb25zdCBwaFN0YXR1czogVHJlbkRBUC5TdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5YREFTdGF0dXMoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ1BoYXNlJykpO1xyXG4gICAgY29uc3QgbWV0ZXJzOiBPcGVuWERBLlR5cGVzLk1ldGVyW10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5YREEoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ01ldGVyJykpO1xyXG4gICAgY29uc3QgbWV0ZXJTdGF0dXM6IFRyZW5EQVAuU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RPcGVuWERBU3RhdHVzKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdNZXRlcicpKTtcclxuICAgIGNvbnN0IGFzc2V0czogT3BlblhEQS5UeXBlcy5Bc3NldFtdID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RPcGVuWERBKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdBc3NldCcpKTtcclxuICAgIGNvbnN0IGFzc2V0U3RhdHVzOiBUcmVuREFQLlN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0T3BlblhEQVN0YXR1cyhzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnQXNzZXQnKSk7XHJcblxyXG4gICAgY29uc3QgY2hhbm5lbEdyb3VwczogYW55W10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5YREEoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ0NoYW5uZWxHcm91cCcpKTtcclxuICAgIGNvbnN0IGNnU3RhdHVzOiBUcmVuREFQLlN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0T3BlblhEQVN0YXR1cyhzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnQ2hhbm5lbEdyb3VwJykpO1xyXG5cclxuICAgIGNvbnN0IGNoYW5uZWxUeXBlczogYW55W10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5YREEoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ0NoYW5uZWxHcm91cFR5cGUnKSk7XHJcbiAgICBjb25zdCBjZ3RTdGF0dXM6IFRyZW5EQVAuU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RPcGVuWERBU3RhdHVzKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdDaGFubmVsR3JvdXBUeXBlJykpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBVcGRhdGVEUyguLi5wYXJhbXM6IHsgZmllbGQ6IGtleW9mIFRyZW5EQVAuaVhEQURhdGFTZXQsIHZhbHVlOiBhbnkgfVtdKSB7XHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHByb3BzLlJlY29yZC5KU09OU3RyaW5nKTtcclxuICAgICAgICBqc29uW3Byb3BzLkluZGV4XS5EYXRhID0geyAuLi5wcm9wcy5EYXRhLkRhdGEgfTtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwYXJhbXMpXHJcbiAgICAgICAgICAgIGpzb25bcHJvcHMuSW5kZXhdLkRhdGFbcGFyYW1zW2luZGV4XS5maWVsZF0gPSBwYXJhbXNbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIHByb3BzLlNldERhdGFTZXQoeyAuLi5wcm9wcy5SZWNvcmQsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KGpzb24pIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBoU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIHBoU3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoT3BlblhEQSh7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCB0YWJsZTogJ1BoYXNlJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBwaFN0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1ldGVyU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIG1ldGVyU3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoT3BlblhEQSh7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCB0YWJsZTogJ01ldGVyJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBtZXRlclN0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBhc3NldFN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBhc3NldFN0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaE9wZW5YREEoeyBkYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgdGFibGU6ICdBc3NldCcgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgYXNzZXRTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjZ1N0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBjZ1N0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaE9wZW5YREEoeyBkYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgdGFibGU6ICdDaGFubmVsR3JvdXAnIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGNnU3RhdHVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY2d0U3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIGNndFN0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaE9wZW5YREEoeyBkYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgdGFibGU6ICdDaGFubmVsR3JvdXBUeXBlJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBjZ3RTdGF0dXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBvbkNsaWNrPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihgJHtob21lUGF0aH1RdWlja1ZpZXdPcGVuWERBYCwgYF9ibGFua2ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdRdWlja1ZpZXdPcGVuWERBJywgSlNPTi5zdHJpbmdpZnkoeyBEYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgUG9zdERhdGE6IENyZWF0ZVBvc3QocHJvcHMuUmVjb3JkLCBwcm9wcy5EYXRhLkRhdGEpIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5RdWljayBWaWV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdDxUcmVuREFQLmlYREFEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gRmllbGQ9XCJBZ2dyZWdhdGVcIiBPcHRpb25zPXtbeyBWYWx1ZTogJycsIExhYmVsOiAnTm9uZScgfSwgeyBWYWx1ZTogJzFoJywgTGFiZWw6ICdIb3VyJyB9LCB7IFZhbHVlOiAnMWQnLCBMYWJlbDogJ0RheScgfSwgeyBWYWx1ZTogJzF3JywgTGFiZWw6ICdXZWVrJyB9XX0gU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnQWdncmVnYXRlJywgdmFsdWU6IHJlY29yZC5BZ2dyZWdhdGUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdDxUcmVuREFQLmlYREFEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gRmllbGQ9XCJCeVwiIE9wdGlvbnM9e1t7IFZhbHVlOiAnTWV0ZXInLCBMYWJlbDogJ01ldGVyJyB9LCB7IFZhbHVlOiAnQXNzZXQnLCBMYWJlbDogJ0Fzc2V0JyB9XX0gU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnQnknLCB2YWx1ZTogcmVjb3JkLkJ5IH0sIHsgZmllbGQ6ICdJRHMnLCB2YWx1ZTogW10gfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5TXVsdGlTZWxlY3Q8VHJlbkRBUC5pWERBRGF0YVNldD4gU3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1NjAgfX0gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IE9wdGlvbnM9eyhwcm9wcy5EYXRhLkRhdGEuQnkgPT0gJ01ldGVyJyA/IG1ldGVycz8ubWFwKG0gPT4gKHsgVmFsdWU6IG0uSUQudG9TdHJpbmcoKSwgTGFiZWw6IG0uTmFtZSB9KSkgOiBhc3NldHM/Lm1hcChtID0+ICh7IFZhbHVlOiBtLklELnRvU3RyaW5nKCksIExhYmVsOiBtLkFzc2V0TmFtZSB9KSkpID8/IFtdfSBGaWVsZD1cIklEc1wiIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0lEcycsIHZhbHVlOiByZWNvcmQuSURzIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheUNoZWNrQm94ZXM8VHJlbkRBUC5pWERBRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IENoZWNrYm94ZXM9e3BoYXNlcz8ubWFwKG0gPT4gKHsgSUQ6IG0uSUQudG9TdHJpbmcoKSwgTGFiZWw6IG0uTmFtZSB9KSkgPz8gW119IEZpZWxkPVwiUGhhc2VzXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnUGhhc2VzJywgdmFsdWU6IHJlY29yZC5QaGFzZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5Q2hlY2tCb3hlczxUcmVuREFQLmlYREFEYXRhU2V0PiBMYWJlbD1cIlF1aWNrIFNlbGVjdGlvblwiIFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBDaGVja2JveGVzPXtjaGFubmVsR3JvdXBzPy5tYXAobSA9PiAoeyBJRDogbS5JRCwgTGFiZWw6IG0uTmFtZSB9KSkgPz8gW119IEZpZWxkPVwiR3JvdXBzXCIgU2V0dGVyPXsocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZEdyb3VwcyA9IHByb3BzLkRhdGEuRGF0YS5Hcm91cHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRHcm91cHMubGVuZ3RoID4gcmVjb3JkLkdyb3Vwcy5sZW5ndGgpIHsgLy8gc29tZXRoaW5nIHdhcyB0YWtlbiBvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhID0gb2xkR3JvdXBzLm1hcCh4ID0+IHJlY29yZC5Hcm91cHMuaW5kZXhPZih4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IGEuaW5kZXhPZigtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhbm5lbEdyb3VwSUQgPSBvbGRHcm91cHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3YSA9IHByb3BzLkRhdGEuRGF0YS5UeXBlcy5tYXAodCA9PiBjaGFubmVsVHlwZXMuZmluZChjdCA9PiBjdC5JRCA9PT0gdCkpLmZpbHRlcih0ID0+IHQuQ2hhbm5lbEdyb3VwSUQgIT09IG9sZEdyb3Vwc1tpXSkubWFwKHQgPT4gdC5JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVEUyh7IGZpZWxkOiAnR3JvdXBzJywgdmFsdWU6IHJlY29yZC5Hcm91cHMgfSwgeyBmaWVsZDogJ1R5cGVzJywgdmFsdWU6IG5ld2EgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob2xkR3JvdXBzLmxlbmd0aCA8IHJlY29yZC5Hcm91cHMubGVuZ3RoKSB7IC8vIHNvbWV0aGluZyB3YXMgcHV0IGluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHJlY29yZC5Hcm91cHMubWFwKHggPT4gb2xkR3JvdXBzLmluZGV4T2YoeCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSBhLmluZGV4T2YoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5uZWxHcm91cElEID0gcmVjb3JkLkdyb3Vwc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdhID0gWy4uLnByb3BzLkRhdGEuRGF0YS5UeXBlcywgLi4uY2hhbm5lbFR5cGVzLmZpbHRlcih0ID0+IHQuQ2hhbm5lbEdyb3VwSUQgPT09IGNoYW5uZWxHcm91cElEKS5tYXAodCA9PiB0LklEKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVEUyh7IGZpZWxkOiAnR3JvdXBzJywgdmFsdWU6IHJlY29yZC5Hcm91cHMgfSwgeyBmaWVsZDogJ1R5cGVzJywgdmFsdWU6IG5ld2EgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7ICAvLyB0aGlzIHByb2JhYmx5IGNhbid0IGhhcHBlbiwgYnV0IG1lYW5zIG5vdGhpbmcgY2hhbmdlZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlNdWx0aVNlbGVjdDxUcmVuREFQLmlYREFEYXRhU2V0PiBTdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDUyMCB9fSBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gT3B0aW9ucz17Y2hhbm5lbFR5cGVzPy5tYXAobSA9PiAoeyBWYWx1ZTogbS5JRCwgTGFiZWw6IG0uRGlzcGxheU5hbWUgfSkpID8/IFtdfSBGaWVsZD1cIlR5cGVzXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnVHlwZXMnLCB2YWx1ZTogcmVjb3JkLlR5cGVzIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVQb3N0KGRhdGFTZXQ6IFRyZW5EQVAuaURhdGFTZXQsIGRhdGE6IFRyZW5EQVAuaVhEQURhdGFTZXQpXHJcbntcclxuICAgIGxldCBzdGFydFRpbWUgPSBtb21lbnQoZGF0YVNldC5Gcm9tKTtcclxuICAgIGxldCBlbmRUaW1lID0gbW9tZW50KGRhdGFTZXQuVG8pO1xyXG4gICAgaWYgKGRhdGFTZXQuQ29udGV4dCA9PSBcIlJlbGF0aXZlXCIpIHtcclxuICAgICAgICBlbmRUaW1lID0gbW9tZW50KCk7XHJcbiAgICAgICAgc3RhcnRUaW1lID0gbW9tZW50KCk7XHJcbiAgICAgICAgaWYgKGRhdGFTZXQuUmVsYXRpdmVXaW5kb3cgPT0gXCJEYXlcIilcclxuICAgICAgICAgICAgc3RhcnRUaW1lLmFkZCgnZGF5cycsIC1kYXRhU2V0LlJlbGF0aXZlVmFsdWUpO1xyXG4gICAgICAgIGVsc2UgaWYgKGRhdGFTZXQuUmVsYXRpdmVXaW5kb3cgPT0gXCJXZWVrXCIpXHJcbiAgICAgICAgICAgIHN0YXJ0VGltZS5hZGQoJ2RheXMnLCAtZGF0YVNldC5SZWxhdGl2ZVZhbHVlICogNyk7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YVNldC5SZWxhdGl2ZVdpbmRvdyA9PSBcIk1vbnRoXCIpXHJcbiAgICAgICAgICAgIHN0YXJ0VGltZS5hZGQoJ21vbnRocycsIC1kYXRhU2V0LlJlbGF0aXZlVmFsdWUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3RhcnRUaW1lLmFkZCgneWVhcnMnLCAtZGF0YVNldC5SZWxhdGl2ZVZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEJ5IDogZGF0YS5CeSxcclxuICAgICAgICBJRHMgOiBkYXRhLklEcyxcclxuICAgICAgICBQaGFzZXMgOiBkYXRhLlBoYXNlcyxcclxuICAgICAgICBHcm91cHMgOiBkYXRhLkdyb3VwcyxcclxuICAgICAgICBUeXBlcyA6IGRhdGEuVHlwZXMsXHJcbiAgICAgICAgU3RhcnRUaW1lIDogc3RhcnRUaW1lLFxyXG4gICAgICAgIEVuZFRpbWUgOiBlbmRUaW1lLFxyXG4gICAgICAgIEhvdXJzIDogZGF0YVNldC5Ib3VycyxcclxuICAgICAgICBEYXlzIDogZGF0YVNldC5EYXlzLFxyXG4gICAgICAgIFdlZWtzOiBkYXRhU2V0LldlZWtzLFxyXG4gICAgICAgIE1vbnRoczogZGF0YVNldC5Nb250aHMsXHJcbiAgICAgICAgQWdncmVnYXRlOiBkYXRhLkFnZ3JlZ2F0ZVxyXG4gICAgfTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFTZXRPcGVuWERBOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU2V0U2FwcGhpcmUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDEyLzAzLzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgU2VsZWN0LCBBcnJheUNoZWNrQm94ZXMsIEFycmF5TXVsdGlTZWxlY3QsIElucHV0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU2VsZWN0U2FwcGhpcmUsIEZldGNoU2FwcGhpcmUsIFNlbGVjdFNhcHBoaXJlU3RhdHVzIH0gZnJvbSAnLi9TYXBwaGlyZVNsaWNlJztcclxuXHJcbmNvbnN0IERhdGFTZXRTYXBwaGlyZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBSZWNvcmQ6IFRyZW5EQVAuaURhdGFTZXQsIERhdGE6IHsgRGF0YVNvdXJjZTogVHJlbkRBUC5pRGF0YVNvdXJjZSwgRGF0YTogVHJlbkRBUC5pU2FwcGhpcmVEYXRhU2V0IH0sIEluZGV4OiBudW1iZXIsIFNldERhdGFTZXQ6ICh3czogVHJlbkRBUC5pRGF0YVNldCkgPT4gdm9pZCB9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHJlc29sdXRpb25zOiBhbnlbXSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0U2FwcGhpcmUoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ1Jlc29sdXRpb24nKSk7XHJcbiAgICBjb25zdCByU3RhdHVzOiBUcmVuREFQLlN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0U2FwcGhpcmVTdGF0dXMoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ1Jlc29sdXRpb24nKSk7XHJcblxyXG4gICAgY29uc3QgcGhhc2VzOiBhbnlbXSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0U2FwcGhpcmUoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ1BoYXNlJykpO1xyXG4gICAgY29uc3QgcGhTdGF0dXM6IFRyZW5EQVAuU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RTYXBwaGlyZVN0YXR1cyhzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnUGhhc2UnKSk7XHJcbiAgICBjb25zdCBtZXRlcnM6IGFueVtdID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RTYXBwaGlyZShzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnTWV0ZXInKSk7XHJcbiAgICBjb25zdCBtU3RhdHVzOiBUcmVuREFQLlN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0U2FwcGhpcmVTdGF0dXMoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ01ldGVyJykpO1xyXG4gICAgY29uc3QgY2hhbm5lbFR5cGVzOiBhbnlbXSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0U2FwcGhpcmUoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ0NoYW5uZWxHcm91cFR5cGUnKSk7XHJcbiAgICBjb25zdCBjdFN0YXR1czogVHJlbkRBUC5TdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFNhcHBoaXJlU3RhdHVzKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdDaGFubmVsR3JvdXBUeXBlJykpO1xyXG5cclxuICAgIGZ1bmN0aW9uIFVwZGF0ZURTKC4uLnBhcmFtczogeyBmaWVsZDoga2V5b2YgVHJlbkRBUC5pU2FwcGhpcmVEYXRhU2V0LCB2YWx1ZTogYW55IH1bXSkge1xyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShwcm9wcy5SZWNvcmQuSlNPTlN0cmluZyk7XHJcbiAgICAgICAganNvbltwcm9wcy5JbmRleF0uRGF0YSA9IHsgLi4ucHJvcHMuRGF0YS5EYXRhIH07XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gcGFyYW1zKVxyXG4gICAgICAgICAgICBqc29uW3Byb3BzLkluZGV4XS5EYXRhW3BhcmFtc1tpbmRleF0uZmllbGRdID0gcGFyYW1zW2luZGV4XS52YWx1ZTtcclxuICAgICAgICBwcm9wcy5TZXREYXRhU2V0KHsgLi4ucHJvcHMuUmVjb3JkLCBKU09OU3RyaW5nOiBKU09OLnN0cmluZ2lmeShqc29uKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwaFN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBwaFN0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaFNhcHBoaXJlKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsIHRhYmxlOiAnUGhhc2UnIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcGhTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChyU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIHJTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hTYXBwaGlyZSh7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCB0YWJsZTogJ1Jlc29sdXRpb24nIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbclN0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1TdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgbVN0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaFNhcHBoaXJlKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsIHRhYmxlOiAnTWV0ZXInIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbVN0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN0U3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIGN0U3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoU2FwcGhpcmUoeyBkYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgdGFibGU6ICdDaGFubmVsR3JvdXBUeXBlJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2N0U3RhdHVzXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gVGVzdEhhcm1vbmljcyhoYXJtb25pY3M6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZSA9IC9eXFxkKyg/Oi1cXGQrKT8oPzosXFxoKlxcZCsoPzotXFxkKyk/KSokLztcclxuICAgICAgICByZXR1cm4gcmUudGVzdChoYXJtb25pY3MpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdDxUcmVuREFQLmlTYXBwaGlyZURhdGFTZXQ+IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBGaWVsZD1cIkFnZ3JlZ2F0ZVwiIE9wdGlvbnM9e3Jlc29sdXRpb25zLm1hcChtID0+ICh7IFZhbHVlOiBtLkRlc2NyaXB0aW9uLCBMYWJlbDogbS5EaXNwbGF5TmFtZSB9KSl9IFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0FnZ3JlZ2F0ZScsIHZhbHVlOiByZWNvcmQuQWdncmVnYXRlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheU11bHRpU2VsZWN0PFRyZW5EQVAuaVNhcHBoaXJlRGF0YVNldD4gU3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1MTAgfX0gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IE9wdGlvbnM9eyBtZXRlcnMubWFwKG0gPT4gKHsgVmFsdWU6IG0uSUQsIExhYmVsOiBtLk5hbWUgfSkpfSBGaWVsZD1cIklEc1wiIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0lEcycsIHZhbHVlOiByZWNvcmQuSURzIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheUNoZWNrQm94ZXM8VHJlbkRBUC5pU2FwcGhpcmVEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gQ2hlY2tib3hlcz17cGhhc2VzLm1hcChtID0+ICh7IElEOiBtLklELCBMYWJlbDogbS5OYW1lIH0pKSA/PyBbXX0gRmllbGQ9XCJQaGFzZXNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdQaGFzZXMnLCB2YWx1ZTogcmVjb3JkLlBoYXNlcyB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pU2FwcGhpcmVEYXRhU2V0PiBGaWVsZD0nSGFybW9uaWNzJyBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gTGFiZWw9J0hhcm1vbmljcycgU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnSGFybW9uaWNzJywgdmFsdWU6IHJlY29yZC5IYXJtb25pY3MucmVwbGFjZSgnICcsICcnKSB9KX0gVmFsaWQ9eyhmaWVsZCkgPT4gVGVzdEhhcm1vbmljcyhwcm9wcy5EYXRhLkRhdGEuSGFybW9uaWNzKSB9IEZlZWRiYWNrPSdIYXJtb25pYyBncm91cHMgc2hvdWxkIGJlIGxpc3RlZCBieSByYW5nZSBvciBpbmRleC4gIGVnIDEtMTUsMTksMjMsMjYtMTAwJyBUeXBlPSd0ZXh0Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5TXVsdGlTZWxlY3Q8VHJlbkRBUC5pU2FwcGhpcmVEYXRhU2V0PiBTdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDYwMCB9fSBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gT3B0aW9ucz17Y2hhbm5lbFR5cGVzLm1hcChtID0+ICh7IFZhbHVlOiBtLklELCBMYWJlbDogbS5EaXNwbGF5TmFtZSB9KSl9IEZpZWxkPVwiVHlwZXNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdUeXBlcycsIHZhbHVlOiByZWNvcmQuVHlwZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFTZXRTYXBwaGlyZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
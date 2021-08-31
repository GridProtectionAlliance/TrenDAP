(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["wwwroot_TypeScript_Features_DataSets_DataSet_tsx"],{

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

/***/ "./wwwroot/TypeScript/Features/DataSets/DataSet.tsx":
/*!**********************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/DataSet.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSourceTypes_DataSourceTypesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataSourceTypes/DataSourceTypesSlice */ "./wwwroot/TypeScript/Features/DataSourceTypes/DataSourceTypesSlice.ts");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./wwwroot/Styles/app.scss");
/* harmony import */ var _OpenHistorian_DataSetOpenHistorian__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OpenHistorian/DataSetOpenHistorian */ "./wwwroot/TypeScript/Features/OpenHistorian/DataSetOpenHistorian.tsx");
/* harmony import */ var _Types_DataSetOpenXDA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Types/DataSetOpenXDA */ "./wwwroot/TypeScript/Features/DataSets/Types/DataSetOpenXDA.tsx");
/* harmony import */ var _Types_DataSetGlobalSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Types/DataSetGlobalSettings */ "./wwwroot/TypeScript/Features/DataSets/Types/DataSetGlobalSettings.tsx");
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
            dataSources.map(function (ds, index) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: "nav-item " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3__.default.workspacetab, key: index },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "nav-link", "data-toggle": "tab", onClick: function () { return setTab(index.toString()); } }, ds.DataSource.Name),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { onClick: function () {
                        var json = JSON.parse(props.Record.JSONString);
                        json.splice(index, 1);
                        props.SetDataSet(__assign(__assign({}, props.Record), { JSONString: JSON.stringify(json) }));
                    } }, "X"))); })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-content" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-pane container " + (tab === "settings" ? 'active' : 'fade') },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Types_DataSetGlobalSettings__WEBPACK_IMPORTED_MODULE_6__.default, __assign({}, props))),
            dataSources.map(function (ds, index) {
                var _a, _b;
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-pane container " + (tab === index.toString() ? 'active' : 'fade'), id: index, key: index },
                    (((_a = dataSourceTypes.find(function (dst) { return dst.ID === ds.DataSource.DataSourceTypeID; })) === null || _a === void 0 ? void 0 : _a.Name) === "TrenDAPDB" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Types_DataSetOpenXDA__WEBPACK_IMPORTED_MODULE_5__.default, __assign({}, props, { Data: ds, Index: index })) : null),
                    (((_b = dataSourceTypes.find(function (dst) { return dst.ID === ds.DataSource.DataSourceTypeID; })) === null || _b === void 0 ? void 0 : _b.Name) === "OpenHistorian" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OpenHistorian_DataSetOpenHistorian__WEBPACK_IMPORTED_MODULE_4__.default, __assign({}, props, { Data: ds, Index: index })) : null)));
            }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSet);


/***/ }),

/***/ "./wwwroot/TypeScript/Features/DataSets/Types/DataSetGlobalSettings.tsx":
/*!******************************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/Types/DataSetGlobalSettings.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
            return props.Record.Name != null && props.Record.Name.length > 0 && props.Record.Name.length <= 200;
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
        if (dataSourceTypes.find(function (dst) { return dst.ID === dataSource.DataSourceTypeID; }).Name === "OpenHistorian")
            return (0,_OpenHistorian_OpenHistorianSlice__WEBPACK_IMPORTED_MODULE_7__.SelectNewOpenHistorianDataSet)();
        else
            return {};
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Record: props.Record, Field: "Name", Setter: function (record) { return props.SetDataSet(record); }, Valid: valid }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(RelativeDateRangePicker, { Record: props.Record, Setter: function (record) { return props.SetDataSet(record); } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.EnumCheckBoxes, { Record: props.Record, Field: "Hours", Label: "Hour of Day", Setter: function (record) { return props.SetDataSet(record); }, Enum: Array.from({ length: 24 }, function (_, i) { return i.toString(); }) }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.EnumCheckBoxes, { Record: props.Record, Field: "Days", Label: "Day of Week", Setter: function (record) { return props.SetDataSet(record); }, Enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.EnumCheckBoxes, { Record: props.Record, Field: "Weeks", Label: "Week of Year", Setter: function (record) { return props.SetDataSet(record); }, Enum: Array.from({ length: 53 }, function (_, i) { return i.toString(); }) }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.EnumCheckBoxes, { Record: props.Record, Field: "Months", Label: "Month of Year", Setter: function (record) { return props.SetDataSet(record); }, Enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.CheckBox, { Record: props.Record, Field: "Public", Label: 'Global', Setter: function (record) { return props.SetDataSet(record); } }),
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
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-header" }, "Global DataSources"),
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

/***/ "./wwwroot/TypeScript/Features/DataSets/Types/DataSetOpenXDA.tsx":
/*!***********************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/Types/DataSetOpenXDA.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "./node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../OpenXDA/OpenXDASlice */ "./wwwroot/TypeScript/Features/OpenXDA/OpenXDASlice.ts");
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};




var DataSetOpenXDA = function (props) {
    var _a, _b, _c, _d;
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var phases = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDA)(state, props.Data.DataSource.ID, 'Phase'); });
    var meters = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDA)(state, props.Data.DataSource.ID, 'Meter'); });
    var assets = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDA)(state, props.Data.DataSource.ID, 'Asset'); });
    var channelGroups = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDA)(state, props.Data.DataSource.ID, 'ChannelGroup'); });
    var channelTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.SelectOpenXDA)(state, props.Data.DataSource.ID, 'ChannelGroupType'); });
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
        if (phases != undefined && (phases === null || phases === void 0 ? void 0 : phases.Status) != 'unitiated' && (phases === null || phases === void 0 ? void 0 : phases.Status) != 'changed')
            return;
        dispatch((0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.FetchOpenXDA)({ dataSourceID: props.Data.DataSource.ID, table: 'Phase' }));
        return function () {
        };
    }, [dispatch, phases === null || phases === void 0 ? void 0 : phases.Status]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (meters != undefined && (meters === null || meters === void 0 ? void 0 : meters.Status) != 'unitiated' && (meters === null || meters === void 0 ? void 0 : meters.Status) != 'changed')
            return;
        dispatch((0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.FetchOpenXDA)({ dataSourceID: props.Data.DataSource.ID, table: 'Meter' }));
        return function () {
        };
    }, [dispatch, meters === null || meters === void 0 ? void 0 : meters.Status]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (assets != undefined && (assets === null || assets === void 0 ? void 0 : assets.Status) != 'unitiated' && (assets === null || assets === void 0 ? void 0 : assets.Status) != 'changed')
            return;
        dispatch((0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.FetchOpenXDA)({ dataSourceID: props.Data.DataSource.ID, table: 'Asset' }));
        return function () {
        };
    }, [dispatch, assets === null || assets === void 0 ? void 0 : assets.Status]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (channelGroups != undefined && (channelGroups === null || channelGroups === void 0 ? void 0 : channelGroups.Status) != 'unitiated' && (channelGroups === null || channelGroups === void 0 ? void 0 : channelGroups.Status) != 'changed')
            return;
        dispatch((0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.FetchOpenXDA)({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroup' }));
        return function () {
        };
    }, [dispatch, channelGroups === null || channelGroups === void 0 ? void 0 : channelGroups.Status]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (channelTypes != undefined && (channelTypes === null || channelTypes === void 0 ? void 0 : channelTypes.Status) != 'unitiated' && (channelTypes === null || channelTypes === void 0 ? void 0 : channelTypes.Status) != 'changed')
            return;
        dispatch((0,_OpenXDA_OpenXDASlice__WEBPACK_IMPORTED_MODULE_3__.FetchOpenXDA)({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroupType' }));
        return function () {
        };
    }, [dispatch, channelTypes === null || channelTypes === void 0 ? void 0 : channelTypes.Status]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "Aggregate", Options: [{ Value: '', Label: 'None' }, { Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, { Value: '1w', Label: 'Week' }], Setter: function (record) { return UpdateDS({ field: 'Aggregate', value: record.Aggregate }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "By", Options: [{ Value: 'Meter', Label: 'Meter' }, { Value: 'Asset', Label: 'Asset' }], Setter: function (record) { return UpdateDS({ field: 'By', value: record.By }, { field: 'IDs', value: [] }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayMultiSelect, { Style: { height: window.innerHeight - 510 }, Record: props.Data.Data, Options: (_a = (props.Data.Data.By == 'Meter' ? meters === null || meters === void 0 ? void 0 : meters.Data.map(function (m) { return ({ Value: m.ID, Label: m.Name }); }) : assets === null || assets === void 0 ? void 0 : assets.Data.map(function (m) { return ({ Value: m.ID, Label: m.AssetName }); }))) !== null && _a !== void 0 ? _a : [], Field: "IDs", Setter: function (record) { return UpdateDS({ field: 'IDs', value: record.IDs }); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayCheckBoxes, { Record: props.Data.Data, Checkboxes: (_b = phases === null || phases === void 0 ? void 0 : phases.Data.map(function (m) { return ({ ID: m.ID, Label: m.Name }); })) !== null && _b !== void 0 ? _b : [], Field: "Phases", Setter: function (record) { return UpdateDS({ field: 'Phases', value: record.Phases }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayCheckBoxes, { Label: "Quick Selection", Record: props.Data.Data, Checkboxes: (_c = channelGroups === null || channelGroups === void 0 ? void 0 : channelGroups.Data.map(function (m) { return ({ ID: m.ID, Label: m.Name }); })) !== null && _c !== void 0 ? _c : [], Field: "Groups", Setter: function (record) {
                        var oldGroups = props.Data.Data.Groups;
                        if (oldGroups.length > record.Groups.length) { // something was taken out
                            var a = oldGroups.map(function (x) { return record.Groups.indexOf(x); });
                            var i_1 = a.indexOf(-1);
                            var channelGroupID = oldGroups[i_1];
                            var newa = props.Data.Data.Types.map(function (t) { return channelTypes.Data.find(function (ct) { return ct.ID === t; }); }).filter(function (t) { return t.ChannelGroupID !== oldGroups[i_1]; }).map(function (t) { return t.ID; });
                            UpdateDS({ field: 'Groups', value: record.Groups }, { field: 'Types', value: newa });
                        }
                        else if (oldGroups.length < record.Groups.length) { // something was put in
                            var a = record.Groups.map(function (x) { return oldGroups.indexOf(x); });
                            var i = a.indexOf(-1);
                            var channelGroupID_1 = record.Groups[i];
                            var newa = __spreadArray(__spreadArray([], __read(props.Data.Data.Types)), __read(channelTypes.Data.filter(function (t) { return t.ChannelGroupID === channelGroupID_1; }).map(function (t) { return t.ID; })));
                            UpdateDS({ field: 'Groups', value: record.Groups }, { field: 'Types', value: newa });
                        }
                        else { // this probably can't happen, but means nothing changed
                        }
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayMultiSelect, { Style: { height: window.innerHeight - 520 }, Record: props.Data.Data, Options: (_d = channelTypes === null || channelTypes === void 0 ? void 0 : channelTypes.Data.map(function (m) { return ({ Value: m.ID, Label: m.DisplayName }); })) !== null && _d !== void 0 ? _d : [], Field: "Types", Setter: function (record) { return UpdateDS({ field: 'Types', value: record.Types }); } })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSetOpenXDA);


/***/ }),

/***/ "./wwwroot/TypeScript/Features/OpenHistorian/DataSetOpenHistorian.tsx":
/*!****************************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/OpenHistorian/DataSetOpenHistorian.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
                    }).map(function (m) { return m.Device; })) !== null && _a !== void 0 ? _a : []))).map(function (m) { return ({ Value: m, Label: m }); }), Field: "Devices", Setter: function (record) { return UpdateDS({ field: 'Devices', value: record.Devices }); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "Instance", Options: [{ Value: 'None', Label: 'None' }].concat((_b = devices === null || devices === void 0 ? void 0 : devices.Instances.map(function (m) { return ({ Value: m.Acronym, Label: m.Acronym }); })) !== null && _b !== void 0 ? _b : []), Setter: function (record) { return UpdateDS({ field: 'Instance', value: record.Instance }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "Aggregate", Options: [{ Value: '1m', Label: 'Minute' }, { Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, { Value: '1M', Label: 'Month' }], Setter: function (record) { return UpdateDS({ field: 'Aggregate', value: record.Aggregate }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayCheckBoxes, { Record: props.Data.Data, Checkboxes: [{ ID: 'A', Label: 'A' }, { ID: 'B', Label: 'B' }, { ID: 'C', Label: 'C' }, { ID: 'N', Label: 'N' }, { ID: '+', Label: 'Pos' }, { ID: '0', Label: 'Zero' }, { ID: '-', Label: 'Neg' }, { ID: 'None', Label: 'None' }], Field: "Phases", Setter: function (record) { return UpdateDS({ field: 'Phases', value: record.Phases }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayCheckBoxes, { Record: props.Data.Data, Checkboxes: [{ ID: 'IPHM', Label: 'Current Magnitude' }, { ID: 'IPHA', Label: 'Current Angle' }, { ID: 'VPHM', Label: 'Voltage Magnitude' }, { ID: 'VPHA', Label: 'Voltage Angle' }, { ID: 'FREQ', Label: 'Frequency' }, { ID: 'DFDT', Label: 'DFDT' }, { ID: 'ALOG', Label: 'Analog' }, { ID: 'DIGI', Label: 'Digital' }, { ID: 'CALC', Label: 'Calculated' }], Field: "Types", Setter: function (record) { return UpdateDS({ field: 'Types', value: record.Types }); } })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSetOpenHistorian);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL0RhdGFTZXQudHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVHlwZXMvRGF0YVNldEdsb2JhbFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1R5cGVzL0RhdGFTZXRPcGVuWERBLnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL09wZW5IaXN0b3JpYW4vRGF0YVNldE9wZW5IaXN0b3JpYW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0dBQXdHO0FBQ3hHLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRXhHLFNBQVM7QUFDVCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN2QixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDdEIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLElBQU0s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RUFBRSxDQUFDLEVBQXpELENBQXlELEdBQUk7Z0JBQ2hULGlEQUFDLHNFQUFlLElBQWdDLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBSyxlQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBbkQsQ0FBbUQsR0FBSTtnQkFDdFksaURBQUMsc0VBQWUsSUFBZ0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQUMsTUFBTSxJQUFLLGVBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFqRCxDQUFpRCxHQUFJLENBQy9mLENBQ0osQ0FDSCxDQUNWLENBQUM7QUFFTixDQUFDO0FBR0QsaUVBQWUsb0JBQW9CLEVBQUMiLCJmaWxlIjoid3d3cm9vdF9UeXBlU2NyaXB0X0ZlYXR1cmVzX0RhdGFTZXRzX0RhdGFTZXRfdHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbnN0YW50cy50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8zMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuLy8gZW1vamlzXHJcbmNvbnN0IEhlYXZ5Q2hlY2tNYXJrID0gJ+KclO+4jyc7XHJcbmNvbnN0IFBlbmNpbCA9ICfinI/vuI8nO1xyXG5jb25zdCBUcmFzaENhbiA9ICfwn5eR77iPJztcclxuY29uc3QgQ3Jvc3NNYXJrID0gJ+KdjCc7XHJcbmNvbnN0IFBsdXMgPSAn4p6VJztcclxuY29uc3QgV2FybmluZyA9ICfimqDvuI8nO1xyXG5jb25zdCBTcGlubmVyID0gJ/CflIQnO1xyXG5jb25zdCBXcmVuY2ggPSAn8J+Upyc7XHJcblxyXG5leHBvcnQgeyBIZWF2eUNoZWNrTWFyaywgUGVuY2lsLCBUcmFzaENhbiwgQ3Jvc3NNYXJrLCBQbHVzLCBXYXJuaW5nLCBTcGlubmVyLCBXcmVuY2ggfTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRGF0YVNldC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMjUvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCwgUmVkdXggfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQ2hlY2tCb3gsIEVudW1DaGVja0JveGVzLCBEYXRlUmFuZ2VQaWNrZXIsIFNlbGVjdCwgQXJyYXlDaGVja0JveGVzLCBBcnJheU11bHRpU2VsZWN0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCB7IFBsdXMgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBTZWxlY3REYXRhU291cmNlc1N0YXR1cywgU2VsZWN0RGF0YVNvdXJjZXNBbGxQdWJsaWNOb3RVc2VyLCBTZWxlY3REYXRhU291cmNlc0ZvclVzZXIsIEZldGNoRGF0YVNvdXJjZXMgfSBmcm9tICcuLi9EYXRhU291cmNlcy9EYXRhU291cmNlc1NsaWNlJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBTZWxlY3REYXRhU291cmNlVHlwZXMsIFNlbGVjdERhdGFTb3VyY2VUeXBlc1N0YXR1cywgRmV0Y2hEYXRhU291cmNlVHlwZXMgfSBmcm9tICcuLi9EYXRhU291cmNlVHlwZXMvRGF0YVNvdXJjZVR5cGVzU2xpY2UnO1xyXG5pbXBvcnQgeyBTZWxlY3ROZXdYREFEYXRhU2V0IH0gZnJvbSAnLi9EYXRhU2V0c1NsaWNlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgRGF0YVNldE9wZW5IaXN0b3JpYW4gZnJvbSAnLi4vT3Blbkhpc3Rvcmlhbi9EYXRhU2V0T3Blbkhpc3Rvcmlhbic7XHJcbmltcG9ydCB7IFNlbGVjdE5ld09wZW5IaXN0b3JpYW5EYXRhU2V0IH0gZnJvbSAnLi4vT3Blbkhpc3Rvcmlhbi9PcGVuSGlzdG9yaWFuU2xpY2UnO1xyXG5pbXBvcnQgRGF0YVNldE9wZW5YREEgZnJvbSAnLi9UeXBlcy9EYXRhU2V0T3BlblhEQSc7XHJcbmltcG9ydCBEYXRhU2V0R2xvYmFsU2V0dGluZ3MgZnJvbSAnLi9UeXBlcy9EYXRhU2V0R2xvYmFsU2V0dGluZ3MnO1xyXG5cclxuXHJcbmNvbnN0IERhdGFTZXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgUmVjb3JkOiBUcmVuREFQLmlEYXRhU2V0LCBTZXREYXRhU2V0OiAod3M6IFRyZW5EQVAuaURhdGFTZXQpID0+IHZvaWQgfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VUeXBlcyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VUeXBlcykgYXMgVHJlbkRBUC5pRGF0YVNvdXJjZVR5cGVbXTtcclxuICAgIGNvbnN0IGRzdFN0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VUeXBlc1N0YXR1cyk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHN0U3RhdHVzICE9ICd1bml0aWF0ZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNvdXJjZVR5cGVzKCkpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkc3RTdGF0dXNdKTtcclxuXHJcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignc2V0dGluZ3MnKTtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VzID0gSlNPTi5wYXJzZShwcm9wcy5SZWNvcmQuSlNPTlN0cmluZyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCIgc3R5bGU9e3twYWRkaW5nOjEwfX0+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmVcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIG9uQ2xpY2s9eygpID0+IHNldFRhYignc2V0dGluZ3MnKSB9PlNldHRpbmdzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlcy5tYXAoKGRzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcIm5hdi1pdGVtIFwiICsgc3R5bGVzLndvcmtzcGFjZXRhYn0gIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIG9uQ2xpY2s9eygpID0+IHNldFRhYihpbmRleC50b1N0cmluZygpKX0+e2RzLkRhdGFTb3VyY2UuTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHByb3BzLlJlY29yZC5KU09OU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0RGF0YVNldCh7IC4uLnByb3BzLlJlY29yZCwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5YPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRhYi1wYW5lIGNvbnRhaW5lciBcIisgKHRhYiA9PT0gXCJzZXR0aW5nc1wiID8gJ2FjdGl2ZScgOiAnZmFkZScpfT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVNldEdsb2JhbFNldHRpbmdzIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2VzLm1hcCgoZHMsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRhYi1wYW5lIGNvbnRhaW5lciBcIiArICh0YWIgPT09IGluZGV4LnRvU3RyaW5nKCkgPyAnYWN0aXZlJyA6ICdmYWRlJyl9IGlkPXtpbmRleH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRzLkRhdGFTb3VyY2UuRGF0YVNvdXJjZVR5cGVJRCk/Lk5hbWUgPT09IFwiVHJlbkRBUERCXCIgPyA8RGF0YVNldE9wZW5YREEgey4uLnByb3BzfSBEYXRhPXtkc30gSW5kZXg9e2luZGV4fS8+OiBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YVNvdXJjZVR5cGVzLmZpbmQoZHN0ID0+IGRzdC5JRCA9PT0gZHMuRGF0YVNvdXJjZS5EYXRhU291cmNlVHlwZUlEKT8uTmFtZSA9PT0gXCJPcGVuSGlzdG9yaWFuXCIgPyA8RGF0YVNldE9wZW5IaXN0b3JpYW4gey4uLnByb3BzfSBEYXRhPXtkc30gSW5kZXg9e2luZGV4fSAvPiA6IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU2V0R2xvYmFsU2V0dGluZ3MudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA4LzI3LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgSW5wdXQsIENoZWNrQm94LCBFbnVtQ2hlY2tCb3hlcyB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgeyBQbHVzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgU2VsZWN0RGF0YVNvdXJjZXNTdGF0dXMsIFNlbGVjdERhdGFTb3VyY2VzQWxsUHVibGljTm90VXNlciwgU2VsZWN0RGF0YVNvdXJjZXNGb3JVc2VyLCBGZXRjaERhdGFTb3VyY2VzIH0gZnJvbSAnLi4vLi4vRGF0YVNvdXJjZXMvRGF0YVNvdXJjZXNTbGljZSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU2VsZWN0RGF0YVNvdXJjZVR5cGVzLCBTZWxlY3REYXRhU291cmNlVHlwZXNTdGF0dXMsIEZldGNoRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnLi4vLi4vRGF0YVNvdXJjZVR5cGVzL0RhdGFTb3VyY2VUeXBlc1NsaWNlJztcclxuaW1wb3J0IHsgU2VsZWN0TmV3WERBRGF0YVNldCB9IGZyb20gJy4vLi4vRGF0YVNldHNTbGljZSc7XHJcbmltcG9ydCB7IFNlbGVjdE5ld09wZW5IaXN0b3JpYW5EYXRhU2V0IH0gZnJvbSAnLi4vLi4vT3Blbkhpc3Rvcmlhbi9PcGVuSGlzdG9yaWFuU2xpY2UnO1xyXG5cclxuY29uc3QgRGF0YVNldEdsb2JhbFNldHRpbmdzOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IFJlY29yZDogVHJlbkRBUC5pRGF0YVNldCwgU2V0RGF0YVNldDogKHdzOiBUcmVuREFQLmlEYXRhU2V0KSA9PiB2b2lkIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBkYXRhU291cmNlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0RGF0YVNvdXJjZXNGb3JVc2VyKHN0YXRlLCB1c2VyTmFtZSkpIGFzIFRyZW5EQVAuaURhdGFTb3VyY2VbXTtcclxuICAgIGNvbnN0IHB1YmxpY0RhdGFTb3VyY2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3REYXRhU291cmNlc0FsbFB1YmxpY05vdFVzZXIoc3RhdGUsIHVzZXJOYW1lKSkgYXMgVHJlbkRBUC5pRGF0YVNvdXJjZVtdO1xyXG4gICAgY29uc3QgZHNTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlc1N0YXR1cyk7XHJcbiAgICBjb25zdCBkYXRhU291cmNlVHlwZXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlVHlwZXMpIGFzIFRyZW5EQVAuaURhdGFTb3VyY2VUeXBlW107XHJcbiAgICBjb25zdCBkc3RTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlVHlwZXNTdGF0dXMpO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkc1N0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBkc1N0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTb3VyY2VzKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgZHNTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkc3RTdGF0dXMgIT0gJ3VuaXRpYXRlZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hEYXRhU291cmNlVHlwZXMoKSk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGRzdFN0YXR1c10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZChmaWVsZDoga2V5b2YgKFRyZW5EQVAuaURhdGFTZXQpKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGZpZWxkID09ICdOYW1lJylcclxuICAgICAgICAgICAgcmV0dXJuIHByb3BzLlJlY29yZC5OYW1lICE9IG51bGwgJiYgcHJvcHMuUmVjb3JkLk5hbWUubGVuZ3RoID4gMCAmJiBwcm9wcy5SZWNvcmQuTmFtZS5sZW5ndGggPD0gMjAwO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQWRkRFMoZGF0YVNvdXJjZTogVHJlbkRBUC5pRGF0YVNvdXJjZSkge1xyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShwcm9wcy5SZWNvcmQuSlNPTlN0cmluZyk7XHJcbiAgICAgICAganNvbi5wdXNoKHsgRGF0YVNvdXJjZTogZGF0YVNvdXJjZSwgRGF0YTogR2V0RFMoZGF0YVNvdXJjZSkgfSk7XHJcbiAgICAgICAgcHJvcHMuU2V0RGF0YVNldCh7IC4uLnByb3BzLlJlY29yZCwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0RFMoZGF0YVNvdXJjZTogVHJlbkRBUC5pRGF0YVNvdXJjZSkge1xyXG4gICAgICAgIGlmIChkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gZHN0LklEID09PSBkYXRhU291cmNlLkRhdGFTb3VyY2VUeXBlSUQpLk5hbWUgPT09IFwiVHJlbkRBUERCXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3ROZXdYREFEYXRhU2V0KCk7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRhdGFTb3VyY2UuRGF0YVNvdXJjZVR5cGVJRCkuTmFtZSA9PT0gXCJPcGVuSGlzdG9yaWFuXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3ROZXdPcGVuSGlzdG9yaWFuRGF0YVNldCgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gRmllbGQ9XCJOYW1lXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBwcm9wcy5TZXREYXRhU2V0KHJlY29yZCl9IFZhbGlkPXt2YWxpZH0gLz5cclxuICAgICAgICAgICAgPFJlbGF0aXZlRGF0ZVJhbmdlUGlja2VyIFJlY29yZD17cHJvcHMuUmVjb3JkfSBTZXR0ZXI9eyhyZWNvcmQpID0+IHByb3BzLlNldERhdGFTZXQocmVjb3JkKX0gLz5cclxuICAgICAgICAgICAgey8qPERhdGVSYW5nZVBpY2tlcjxUcmVuREFQLmlEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gRnJvbUZpZWxkPVwiRnJvbVwiIFRvRmllbGQ9XCJUb1wiIFNldHRlcj17cHJvcHMuU2V0RGF0YVNldH0gTGFiZWw9XCJEYXRlIFJhbmdlXCIgLz4qL31cclxuICAgICAgICAgICAgPEVudW1DaGVja0JveGVzPFRyZW5EQVAuaURhdGFTZXQ+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGaWVsZD1cIkhvdXJzXCIgTGFiZWw9XCJIb3VyIG9mIERheVwiIFNldHRlcj17KHJlY29yZCkgPT4gcHJvcHMuU2V0RGF0YVNldChyZWNvcmQpfSBFbnVtPXtBcnJheS5mcm9tKHsgbGVuZ3RoOiAyNCB9LCAoXywgaSkgPT4gaS50b1N0cmluZygpKX0gLz5cclxuICAgICAgICAgICAgPEVudW1DaGVja0JveGVzPFRyZW5EQVAuaURhdGFTZXQ+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGaWVsZD1cIkRheXNcIiBMYWJlbD1cIkRheSBvZiBXZWVrXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBwcm9wcy5TZXREYXRhU2V0KHJlY29yZCl9IEVudW09e1snU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXX0gLz5cclxuICAgICAgICAgICAgPEVudW1DaGVja0JveGVzPFRyZW5EQVAuaURhdGFTZXQ+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGaWVsZD1cIldlZWtzXCIgTGFiZWw9XCJXZWVrIG9mIFllYXJcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IHByb3BzLlNldERhdGFTZXQocmVjb3JkKX0gRW51bT17QXJyYXkuZnJvbSh7IGxlbmd0aDogNTMgfSwgKF8sIGkpID0+IGkudG9TdHJpbmcoKSl9IC8+XHJcbiAgICAgICAgICAgIDxFbnVtQ2hlY2tCb3hlczxUcmVuREFQLmlEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gRmllbGQ9XCJNb250aHNcIiBMYWJlbD1cIk1vbnRoIG9mIFllYXJcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IHByb3BzLlNldERhdGFTZXQocmVjb3JkKX0gRW51bT17WydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ119IC8+XHJcbiAgICAgICAgICAgIDxDaGVja0JveDxUcmVuREFQLmlEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gRmllbGQ9XCJQdWJsaWNcIiBMYWJlbD0nR2xvYmFsJyBTZXR0ZXI9eyhyZWNvcmQpID0+IHByb3BzLlNldERhdGFTZXQocmVjb3JkKX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtQbHVzfSBEYXRhU291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taGVhZGVyXCI+WW91ciBEYXRhU291cmNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YVNvdXJjZXMubWFwKGRzID0+IDxhIGtleT17ZHMuSUR9IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBBZGREUyhkcyl9Pntkcy5OYW1lfSAoe2RhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRzLkRhdGFTb3VyY2VUeXBlSUQpPy5OYW1lfSk8L2E+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1oZWFkZXJcIj5HbG9iYWwgRGF0YVNvdXJjZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3B1YmxpY0RhdGFTb3VyY2VzLm1hcChkcyA9PiA8YSBrZXk9e2RzLklEfSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gQWRkRFMoZHMpfT57ZHMuTmFtZX0gKHtkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gZHN0LklEID09PSBkcy5EYXRhU291cmNlVHlwZUlEKT8uTmFtZX0pPC9hPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFTZXRHbG9iYWxTZXR0aW5ncztcclxuXHJcbmNvbnN0IFJlbGF0aXZlRGF0ZVJhbmdlUGlja2VyID0gKHByb3BzOiB7IFJlY29yZDogVHJlbkRBUC5pRGF0YVNldCwgU2V0dGVyOiAocmVjb3JkOiBUcmVuREFQLmlEYXRhU2V0KSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IFtjb250ZXh0LCBzZXRDb250ZXh0XSA9IFJlYWN0LnVzZVN0YXRlPCdSZWxhdGl2ZScgfCAnRml4ZWQgRGF0ZXMnPihwcm9wcy5SZWNvcmQuQ29udGV4dCk7XHJcbiAgICBjb25zdCBbcmVsYXRpdmVWYWx1ZSwgc2V0UmVsYXRpdmVWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHByb3BzLlJlY29yZC5SZWxhdGl2ZVZhbHVlKTtcclxuICAgIGNvbnN0IFtyZWxhdGl2ZVdpbmRvdywgc2V0UmVsYXRpdmVXaW5kb3ddID0gUmVhY3QudXNlU3RhdGU8J0RheScgfCAnV2VlaycgfCAnTW9udGgnIHwgJ1llYXInPihwcm9wcy5SZWNvcmQuUmVsYXRpdmVXaW5kb3cpXHJcbiAgICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihwcm9wcy5SZWNvcmQuRnJvbSk7XHJcbiAgICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHByb3BzLlJlY29yZC5Ubyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY29udGV4dCAhPT0gcHJvcHMuUmVjb3JkLkNvbnRleHQpIHNldENvbnRleHQocHJvcHMuUmVjb3JkLkNvbnRleHQpO1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVZhbHVlICE9PSBwcm9wcy5SZWNvcmQuUmVsYXRpdmVWYWx1ZSkgc2V0UmVsYXRpdmVWYWx1ZShwcm9wcy5SZWNvcmQuUmVsYXRpdmVWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlV2luZG93ICE9PSBwcm9wcy5SZWNvcmQuUmVsYXRpdmVXaW5kb3cpIHNldFJlbGF0aXZlV2luZG93KHByb3BzLlJlY29yZC5SZWxhdGl2ZVdpbmRvdyk7XHJcbiAgICAgICAgaWYgKHN0YXJ0RGF0ZSAhPT0gcHJvcHMuUmVjb3JkLkZyb20pIHNldFN0YXJ0RGF0ZShwcm9wcy5SZWNvcmQuRnJvbSk7XHJcbiAgICAgICAgaWYgKGVuZERhdGUgIT09IHByb3BzLlJlY29yZC5Ubykgc2V0RW5kRGF0ZShwcm9wcy5SZWNvcmQuVG8pO1xyXG4gICAgfSwgW3Byb3BzLlJlY29yZF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnRleHQgIT09IHByb3BzLlJlY29yZC5Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlY29yZCA9IHsgLi4ucHJvcHMuUmVjb3JkIH07XHJcbiAgICAgICAgICAgIG5ld1JlY29yZC5Db250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKG5ld1JlY29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NvbnRleHRdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVZhbHVlICE9PSBwcm9wcy5SZWNvcmQuUmVsYXRpdmVWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWNvcmQgPSB7IC4uLnByb3BzLlJlY29yZCB9O1xyXG4gICAgICAgICAgICBuZXdSZWNvcmQuUmVsYXRpdmVWYWx1ZSA9IHJlbGF0aXZlVmFsdWU7XHJcbiAgICAgICAgICAgIHByb3BzLlNldHRlcihuZXdSZWNvcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZWxhdGl2ZVZhbHVlXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmVsYXRpdmVXaW5kb3cgIT09IHByb3BzLlJlY29yZC5SZWxhdGl2ZVdpbmRvdykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWNvcmQgPSB7IC4uLnByb3BzLlJlY29yZCB9O1xyXG4gICAgICAgICAgICBuZXdSZWNvcmQuUmVsYXRpdmVXaW5kb3cgPSByZWxhdGl2ZVdpbmRvdztcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKG5ld1JlY29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JlbGF0aXZlV2luZG93XSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc3RhcnREYXRlICE9PSBwcm9wcy5SZWNvcmQuRnJvbSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWNvcmQgPSB7IC4uLnByb3BzLlJlY29yZCB9O1xyXG4gICAgICAgICAgICBuZXdSZWNvcmQuRnJvbSA9IHN0YXJ0RGF0ZTtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKG5ld1JlY29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3N0YXJ0RGF0ZV0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVuZERhdGUgIT09IHByb3BzLlJlY29yZC5Ubykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWNvcmQgPSB7IC4uLnByb3BzLlJlY29yZCB9O1xyXG4gICAgICAgICAgICBuZXdSZWNvcmQuVG8gPSBlbmREYXRlO1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIobmV3UmVjb3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZW5kRGF0ZV0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBTaG93Q29udGVudCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY29udGV4dCA9PSAnUmVsYXRpdmUnKVxyXG4gICAgICAgICAgICByZXR1cm4gU2hvd1JlbGF0aXZlKCk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gU2hvd0ZpeGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU2hvd1JlbGF0aXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGltZSBXaW5kb3cgU2l6ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtyZWxhdGl2ZVZhbHVlfSB0eXBlPSdudW1iZXInIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVsYXRpdmVWYWx1ZShwYXJzZUZsb2F0KGV2dC50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlRpbWUgV2luZG93IFVuaXRzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17cmVsYXRpdmVXaW5kb3d9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWxhdGl2ZVdpbmRvdyhldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdEYXknPkRheShzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdXZWVrJz5XZWVrKHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J01vbnRoJz5Nb250aChzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdZZWFyJz5ZZWFyKHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IFNob3dGaXhlZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0YXJ0IERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c3RhcnREYXRlfSB0eXBlPSdkYXRlJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgb25DaGFuZ2U9eyhldnQpID0+IHNldFN0YXJ0RGF0ZShldnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVuZCBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VuZERhdGV9IHR5cGU9J2RhdGUnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBvbkNoYW5nZT17KGV2dCkgPT4gc2V0RW5kRGF0ZShldnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5UaW1lIENvbnRleHQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2NvbnRleHR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDb250ZXh0KGV2dC50YXJnZXQudmFsdWUgYXMgYW55KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nUmVsYXRpdmUnPlJlbGF0aXZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nRml4ZWQgRGF0ZXMnPkZpeGVkIERhdGVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtTaG93Q29udGVudCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRGF0YVNldE9wZW5YREEudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA4LzI3LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgU2VsZWN0LCBBcnJheUNoZWNrQm94ZXMsIEFycmF5TXVsdGlTZWxlY3QgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBTZWxlY3RPcGVuWERBLCBGZXRjaE9wZW5YREEgfSBmcm9tICcuLi8uLi9PcGVuWERBL09wZW5YREFTbGljZSc7XHJcblxyXG5jb25zdCBEYXRhU2V0T3BlblhEQTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBSZWNvcmQ6IFRyZW5EQVAuaURhdGFTZXQsIERhdGE6IHsgRGF0YVNvdXJjZTogVHJlbkRBUC5pRGF0YVNvdXJjZSwgRGF0YTogVHJlbkRBUC5pWERBRGF0YVNldCB9LCBJbmRleDogbnVtYmVyLCBTZXREYXRhU2V0OiAod3M6IFRyZW5EQVAuaURhdGFTZXQpID0+IHZvaWQgfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHBoYXNlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0T3BlblhEQShzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnUGhhc2UnKSk7XHJcbiAgICBjb25zdCBtZXRlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5YREEoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ01ldGVyJykpO1xyXG4gICAgY29uc3QgYXNzZXRzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RPcGVuWERBKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdBc3NldCcpKTtcclxuICAgIGNvbnN0IGNoYW5uZWxHcm91cHMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5YREEoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ0NoYW5uZWxHcm91cCcpKTtcclxuICAgIGNvbnN0IGNoYW5uZWxUeXBlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0T3BlblhEQShzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnQ2hhbm5lbEdyb3VwVHlwZScpKTtcclxuXHJcbiAgICBmdW5jdGlvbiBVcGRhdGVEUyguLi5wYXJhbXM6IHsgZmllbGQ6IGtleW9mIFRyZW5EQVAuaVhEQURhdGFTZXQsIHZhbHVlOiBhbnkgfVtdKSB7XHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHByb3BzLlJlY29yZC5KU09OU3RyaW5nKTtcclxuICAgICAgICBqc29uW3Byb3BzLkluZGV4XS5EYXRhID0geyAuLi5wcm9wcy5EYXRhLkRhdGEgfTtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwYXJhbXMpXHJcbiAgICAgICAgICAgIGpzb25bcHJvcHMuSW5kZXhdLkRhdGFbcGFyYW1zW2luZGV4XS5maWVsZF0gPSBwYXJhbXNbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIHByb3BzLlNldERhdGFTZXQoeyAuLi5wcm9wcy5SZWNvcmQsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KGpzb24pIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBoYXNlcyAhPSB1bmRlZmluZWQgJiYgcGhhc2VzPy5TdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgcGhhc2VzPy5TdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hPcGVuWERBKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsIHRhYmxlOiAnUGhhc2UnIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIHBoYXNlcz8uU3RhdHVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobWV0ZXJzICE9IHVuZGVmaW5lZCAmJiBtZXRlcnM/LlN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBtZXRlcnM/LlN0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaE9wZW5YREEoeyBkYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgdGFibGU6ICdNZXRlcicgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgbWV0ZXJzPy5TdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhc3NldHMgIT0gdW5kZWZpbmVkICYmIGFzc2V0cz8uU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIGFzc2V0cz8uU3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoT3BlblhEQSh7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCB0YWJsZTogJ0Fzc2V0JyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBhc3NldHM/LlN0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYW5uZWxHcm91cHMgIT0gdW5kZWZpbmVkICYmIGNoYW5uZWxHcm91cHM/LlN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBjaGFubmVsR3JvdXBzPy5TdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hPcGVuWERBKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsIHRhYmxlOiAnQ2hhbm5lbEdyb3VwJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBjaGFubmVsR3JvdXBzPy5TdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGFubmVsVHlwZXMgIT0gdW5kZWZpbmVkICYmIGNoYW5uZWxUeXBlcz8uU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIGNoYW5uZWxUeXBlcz8uU3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoT3BlblhEQSh7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCB0YWJsZTogJ0NoYW5uZWxHcm91cFR5cGUnIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGNoYW5uZWxUeXBlcz8uU3RhdHVzXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdDxUcmVuREFQLmlYREFEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gRmllbGQ9XCJBZ2dyZWdhdGVcIiBPcHRpb25zPXtbeyBWYWx1ZTogJycsIExhYmVsOiAnTm9uZScgfSwgeyBWYWx1ZTogJzFoJywgTGFiZWw6ICdIb3VyJyB9LCB7IFZhbHVlOiAnMWQnLCBMYWJlbDogJ0RheScgfSwgeyBWYWx1ZTogJzF3JywgTGFiZWw6ICdXZWVrJyB9XX0gU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnQWdncmVnYXRlJywgdmFsdWU6IHJlY29yZC5BZ2dyZWdhdGUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdDxUcmVuREFQLmlYREFEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gRmllbGQ9XCJCeVwiIE9wdGlvbnM9e1t7IFZhbHVlOiAnTWV0ZXInLCBMYWJlbDogJ01ldGVyJyB9LCB7IFZhbHVlOiAnQXNzZXQnLCBMYWJlbDogJ0Fzc2V0JyB9XX0gU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnQnknLCB2YWx1ZTogcmVjb3JkLkJ5IH0sIHsgZmllbGQ6ICdJRHMnLCB2YWx1ZTogW10gfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5TXVsdGlTZWxlY3Q8VHJlbkRBUC5pWERBRGF0YVNldD4gU3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1MTAgfX0gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IE9wdGlvbnM9eyhwcm9wcy5EYXRhLkRhdGEuQnkgPT0gJ01ldGVyJyA/IG1ldGVycz8uRGF0YS5tYXAobSA9PiAoeyBWYWx1ZTogbS5JRCwgTGFiZWw6IG0uTmFtZSB9KSkgOiBhc3NldHM/LkRhdGEubWFwKG0gPT4gKHsgVmFsdWU6IG0uSUQsIExhYmVsOiBtLkFzc2V0TmFtZSB9KSkpID8/IFtdfSBGaWVsZD1cIklEc1wiIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0lEcycsIHZhbHVlOiByZWNvcmQuSURzIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheUNoZWNrQm94ZXM8VHJlbkRBUC5pWERBRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IENoZWNrYm94ZXM9e3BoYXNlcz8uRGF0YS5tYXAobSA9PiAoeyBJRDogbS5JRCwgTGFiZWw6IG0uTmFtZSB9KSkgPz8gW119IEZpZWxkPVwiUGhhc2VzXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnUGhhc2VzJywgdmFsdWU6IHJlY29yZC5QaGFzZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5Q2hlY2tCb3hlczxUcmVuREFQLmlYREFEYXRhU2V0PiBMYWJlbD1cIlF1aWNrIFNlbGVjdGlvblwiIFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBDaGVja2JveGVzPXtjaGFubmVsR3JvdXBzPy5EYXRhLm1hcChtID0+ICh7IElEOiBtLklELCBMYWJlbDogbS5OYW1lIH0pKSA/PyBbXX0gRmllbGQ9XCJHcm91cHNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkR3JvdXBzID0gcHJvcHMuRGF0YS5EYXRhLkdyb3VwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZEdyb3Vwcy5sZW5ndGggPiByZWNvcmQuR3JvdXBzLmxlbmd0aCkgeyAvLyBzb21ldGhpbmcgd2FzIHRha2VuIG91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSBvbGRHcm91cHMubWFwKHggPT4gcmVjb3JkLkdyb3Vwcy5pbmRleE9mKHgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gYS5pbmRleE9mKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFubmVsR3JvdXBJRCA9IG9sZEdyb3Vwc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdhID0gcHJvcHMuRGF0YS5EYXRhLlR5cGVzLm1hcCh0ID0+IGNoYW5uZWxUeXBlcy5EYXRhLmZpbmQoY3QgPT4gY3QuSUQgPT09IHQpKS5maWx0ZXIodCA9PiB0LkNoYW5uZWxHcm91cElEICE9PSBvbGRHcm91cHNbaV0pLm1hcCh0ID0+IHQuSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlRFMoeyBmaWVsZDogJ0dyb3VwcycsIHZhbHVlOiByZWNvcmQuR3JvdXBzIH0sIHsgZmllbGQ6ICdUeXBlcycsIHZhbHVlOiBuZXdhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9sZEdyb3Vwcy5sZW5ndGggPCByZWNvcmQuR3JvdXBzLmxlbmd0aCkgeyAvLyBzb21ldGhpbmcgd2FzIHB1dCBpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSByZWNvcmQuR3JvdXBzLm1hcCh4ID0+IG9sZEdyb3Vwcy5pbmRleE9mKHgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gYS5pbmRleE9mKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFubmVsR3JvdXBJRCA9IHJlY29yZC5Hcm91cHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3YSA9IFsuLi5wcm9wcy5EYXRhLkRhdGEuVHlwZXMsIC4uLmNoYW5uZWxUeXBlcy5EYXRhLmZpbHRlcih0ID0+IHQuQ2hhbm5lbEdyb3VwSUQgPT09IGNoYW5uZWxHcm91cElEKS5tYXAodCA9PiB0LklEKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVEUyh7IGZpZWxkOiAnR3JvdXBzJywgdmFsdWU6IHJlY29yZC5Hcm91cHMgfSwgeyBmaWVsZDogJ1R5cGVzJywgdmFsdWU6IG5ld2EgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7ICAvLyB0aGlzIHByb2JhYmx5IGNhbid0IGhhcHBlbiwgYnV0IG1lYW5zIG5vdGhpbmcgY2hhbmdlZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlNdWx0aVNlbGVjdDxUcmVuREFQLmlYREFEYXRhU2V0PiBTdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDUyMCB9fSBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gT3B0aW9ucz17Y2hhbm5lbFR5cGVzPy5EYXRhLm1hcChtID0+ICh7IFZhbHVlOiBtLklELCBMYWJlbDogbS5EaXNwbGF5TmFtZSB9KSkgPz8gW119IEZpZWxkPVwiVHlwZXNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdUeXBlcycsIHZhbHVlOiByZWNvcmQuVHlwZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFTZXRPcGVuWERBOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU2V0T3Blbkhpc3Rvcmlhbi50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDMvMDMvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCwgUmVkdXggfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyBTZWxlY3QsIEFycmF5Q2hlY2tCb3hlcywgQXJyYXlNdWx0aVNlbGVjdCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNlbGVjdE9wZW5IaXN0b3JpYW4sIEZldGNoT3Blbkhpc3RvcmlhbiB9IGZyb20gJy4vT3Blbkhpc3RvcmlhblNsaWNlJztcclxuaW1wb3J0IHsgT3Blbkhpc3RvcmlhbiB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvYXBwbGljYXRpb24tdHlwaW5ncyc7XHJcblxyXG5jb25zdCBEYXRhU2V0T3Blbkhpc3RvcmlhbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBSZWNvcmQ6IFRyZW5EQVAuaURhdGFTZXQsIERhdGE6IHsgRGF0YVNvdXJjZTogVHJlbkRBUC5pRGF0YVNvdXJjZSwgRGF0YTogVHJlbkRBUC5pT3Blbkhpc3RvcmlhbkRhdGFTZXQgfSwgSW5kZXg6IG51bWJlciwgU2V0RGF0YVNldDogKHdzOiBUcmVuREFQLmlEYXRhU2V0KSA9PiB2b2lkIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBkZXZpY2VzOiBSZWR1eC5PcGVuSGlzdG9yaWFuU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5IaXN0b3JpYW4oc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIFVwZGF0ZURTKC4uLnBhcmFtczogeyBmaWVsZDoga2V5b2YgVHJlbkRBUC5pT3Blbkhpc3RvcmlhbkRhdGFTZXQsIHZhbHVlOiBhbnkgfVtdKSB7XHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHByb3BzLlJlY29yZC5KU09OU3RyaW5nKTtcclxuICAgICAgICBqc29uW3Byb3BzLkluZGV4XS5EYXRhID0geyAuLi5wcm9wcy5EYXRhLkRhdGEgfTtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwYXJhbXMpXHJcbiAgICAgICAgICAgIGpzb25bcHJvcHMuSW5kZXhdLkRhdGFbcGFyYW1zW2luZGV4XS5maWVsZF0gPSBwYXJhbXNbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIHByb3BzLlNldERhdGFTZXQoeyAuLi5wcm9wcy5SZWNvcmQsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KGpzb24pIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRldmljZXMgIT0gdW5kZWZpbmVkICYmIGRldmljZXM/LlN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBkZXZpY2VzPy5TdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hPcGVuSGlzdG9yaWFuKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUR9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkZXZpY2VzLlN0YXR1c10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheU11bHRpU2VsZWN0PFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5EYXRhU2V0PiBTdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDQ1MCB9fSBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gT3B0aW9ucz17Wy4uLm5ldyBTZXQoZGV2aWNlcz8uTWVhc3VyZW1lbnRzLmZpbHRlcihtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLkRhdGEuRGF0YS5JbnN0YW5jZSAhPT0gJ05vbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0uSUQuaW5jbHVkZXMocHJvcHMuRGF0YS5EYXRhLkluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSkubWFwKG0gPT4gbS5EZXZpY2UpID8/IFtdKV0ubWFwKG0gPT4gKHsgVmFsdWU6IG0sIExhYmVsOiBtIH0pKSB9IEZpZWxkPVwiRGV2aWNlc1wiIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0RldmljZXMnLCB2YWx1ZTogcmVjb3JkLkRldmljZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdDxUcmVuREFQLmlPcGVuSGlzdG9yaWFuRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IEZpZWxkPVwiSW5zdGFuY2VcIiBPcHRpb25zPXtbeyBWYWx1ZTogJ05vbmUnLCBMYWJlbDogJ05vbmUnfV0uY29uY2F0KGRldmljZXM/Lkluc3RhbmNlcy5tYXAobSA9PiAoeyBWYWx1ZTogbS5BY3JvbnltLCBMYWJlbDogbS5BY3JvbnltIH0pKSA/PyBbXSl9IFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0luc3RhbmNlJywgdmFsdWU6IHJlY29yZC5JbnN0YW5jZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0PFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5EYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gRmllbGQ9XCJBZ2dyZWdhdGVcIiBPcHRpb25zPXtbeyBWYWx1ZTogJzFtJywgTGFiZWw6ICdNaW51dGUnIH0sIHsgVmFsdWU6ICcxaCcsIExhYmVsOiAnSG91cicgfSwgeyBWYWx1ZTogJzFkJywgTGFiZWw6ICdEYXknIH0sIHsgVmFsdWU6ICcxTScsIExhYmVsOiAnTW9udGgnIH1dfSBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdBZ2dyZWdhdGUnLCB2YWx1ZTogcmVjb3JkLkFnZ3JlZ2F0ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlDaGVja0JveGVzPFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5EYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gQ2hlY2tib3hlcz17W3sgSUQ6ICdBJywgTGFiZWw6ICdBJyB9LCB7IElEOiAnQicsIExhYmVsOiAnQicgfSwgeyBJRDogJ0MnLCBMYWJlbDogJ0MnIH0sIHsgSUQ6ICdOJywgTGFiZWw6ICdOJyB9LCB7IElEOiAnKycsIExhYmVsOiAnUG9zJyB9LCB7IElEOiAnMCcsIExhYmVsOiAnWmVybycgfSwgeyBJRDogJy0nLCBMYWJlbDogJ05lZycgfSwgeyBJRDogJ05vbmUnLCBMYWJlbDogJ05vbmUnIH1dfSBGaWVsZD1cIlBoYXNlc1wiIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ1BoYXNlcycsIHZhbHVlOiByZWNvcmQuUGhhc2VzIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheUNoZWNrQm94ZXM8VHJlbkRBUC5pT3Blbkhpc3RvcmlhbkRhdGFTZXQ+IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBDaGVja2JveGVzPXtbeyBJRDogJ0lQSE0nLCBMYWJlbDogJ0N1cnJlbnQgTWFnbml0dWRlJyB9LCB7IElEOiAnSVBIQScsIExhYmVsOiAnQ3VycmVudCBBbmdsZScgfSwgeyBJRDogJ1ZQSE0nLCBMYWJlbDogJ1ZvbHRhZ2UgTWFnbml0dWRlJyB9LCB7IElEOiAnVlBIQScsIExhYmVsOiAnVm9sdGFnZSBBbmdsZScgfSwgeyBJRDogJ0ZSRVEnLCBMYWJlbDogJ0ZyZXF1ZW5jeScgfSwgeyBJRDogJ0RGRFQnLCBMYWJlbDogJ0RGRFQnIH0sIHsgSUQ6ICdBTE9HJywgTGFiZWw6ICdBbmFsb2cnIH0sIHsgSUQ6ICdESUdJJywgTGFiZWw6ICdEaWdpdGFsJyB9LCB7IElEOiAnQ0FMQycsIExhYmVsOiAnQ2FsY3VsYXRlZCcgfV19IEZpZWxkPVwiVHlwZXNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdUeXBlcycsIHZhbHVlOiByZWNvcmQuVHlwZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0T3Blbkhpc3RvcmlhbjsiXSwic291cmNlUm9vdCI6IiJ9
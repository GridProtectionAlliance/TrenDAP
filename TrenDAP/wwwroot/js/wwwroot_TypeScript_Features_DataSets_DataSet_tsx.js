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
                var _a, _b, _c;
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tab-pane container " + (tab === index.toString() ? 'active' : 'fade'), id: index, key: index },
                    (((_a = dataSourceTypes.find(function (dst) { return dst.ID === ds.DataSource.DataSourceTypeID; })) === null || _a === void 0 ? void 0 : _a.Name) === "TrenDAPDB" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OpenXDA_DataSetOpenXDA__WEBPACK_IMPORTED_MODULE_5__.default, __assign({}, props, { Data: ds, Index: index })) : null),
                    (((_b = dataSourceTypes.find(function (dst) { return dst.ID === ds.DataSource.DataSourceTypeID; })) === null || _b === void 0 ? void 0 : _b.Name) === "Sapphire" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Sapphire_DataSetSapphire__WEBPACK_IMPORTED_MODULE_7__.default, __assign({}, props, { Data: ds, Index: index })) : null),
                    (((_c = dataSourceTypes.find(function (dst) { return dst.ID === ds.DataSource.DataSourceTypeID; })) === null || _c === void 0 ? void 0 : _c.Name) === "OpenHistorian" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OpenHistorian_DataSetOpenHistorian__WEBPACK_IMPORTED_MODULE_4__.default, __assign({}, props, { Data: ds, Index: index })) : null)));
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
/* harmony import */ var _Sapphire_SapphireSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Sapphire/SapphireSlice */ "./wwwroot/TypeScript/Features/Sapphire/SapphireSlice.ts");
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
        if (dataSourceTypes.find(function (dst) { return dst.ID === dataSource.DataSourceTypeID; }).Name === "Sapphire")
            return (0,_Sapphire_SapphireSlice__WEBPACK_IMPORTED_MODULE_8__.NewSapphireDataSet)();
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


/***/ }),

/***/ "./wwwroot/TypeScript/Features/OpenXDA/DataSetOpenXDA.tsx":
/*!****************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/OpenXDA/DataSetOpenXDA.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
                        window.open(homePath + "QuickViewOpenXDA", "_blank");
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
                            var newa = __spreadArray(__spreadArray([], __read(props.Data.Data.Types)), __read(channelTypes.filter(function (t) { return t.ChannelGroupID === channelGroupID_1; }).map(function (t) { return t.ID; })));
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

"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL0RhdGFTZXQudHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVHlwZXMvRGF0YVNldEdsb2JhbFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL09wZW5IaXN0b3JpYW4vRGF0YVNldE9wZW5IaXN0b3JpYW4udHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvT3BlblhEQS9EYXRhU2V0T3BlblhEQS50c3giLCJ3ZWJwYWNrOi8vdHJlbmRhcC8uL3d3d3Jvb3QvVHlwZVNjcmlwdC9GZWF0dXJlcy9TYXBwaGlyZS9EYXRhU2V0U2FwcGhpcmUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0dBQXdHO0FBQ3hHLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRXhHLFNBQVM7QUFDVCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQztB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TSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxtQ0FBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQUssZUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQXZELENBQXVELEdBQUk7Z0JBQ2hTLGlEQUFDLDZEQUFNLElBQWdDLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQUssZUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQXpELENBQXlELEdBQUk7Z0JBQ2hULGlEQUFDLHNFQUFlLElBQWdDLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBSyxlQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBbkQsQ0FBbUQsR0FBSTtnQkFDdFksaURBQUMsc0VBQWUsSUFBZ0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFF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QUFDO0lBRUQsNENBQWUsQ0FBQztRQUNaLElBQUksUUFBUSxJQUFJLFdBQVcsSUFBSSxRQUFRLElBQUksU0FBUztZQUFFLE9BQU87UUFDN0QsUUFBUSxDQUFDLDZEQUFhLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEYsT0FBTztRQUNQLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRWYsNENBQWUsQ0FBQztRQUNaLElBQUksT0FBTyxJQUFJLFdBQVcsSUFBSSxPQUFPLElBQUksU0FBUztZQUFFLE9BQU87UUFDM0QsUUFBUSxDQUFDLDZEQUFhLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekYsT0FBTztRQUNQLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRWQsNENBQWUsQ0FBQztRQUNaLElBQUksT0FBTyxJQUFJLFdBQVcsSUFBSSxPQUFPLElBQUksU0FBUztZQUFFLE9BQU87UUFDM0QsUUFBUSxDQUFDLDZEQUFhLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEYsT0FBTztRQUNQLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRWQsNENBQWUsQ0FBQztRQUNaLElBQUksUUFBUSxJQUFJLFdBQVcsSUFBSSxRQUFRLElBQUksU0FBUztZQUFFLE9BQU87UUFDN0QsUUFBUSxDQUFDLDZEQUFhLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxF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QUEyQixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQXZDLENBQXVDLENBQUMsRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBSyxlQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBakQsQ0FBaUQsR0FBSSxDQUVoUixDQUNKLENBQ0gsQ0FDVixDQUFDO0FBRU4sQ0FBQztBQUVELGlFQUFlLGVBQWUsRUFBQyIsImZpbGUiOiJ3d3dyb290X1R5cGVTY3JpcHRfRmVhdHVyZXNfRGF0YVNldHNfRGF0YVNldF90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uc3RhbnRzLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzMwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyBlbW9qaXNcclxuY29uc3QgSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcclxuY29uc3QgUGVuY2lsID0gJ+Kcj++4jyc7XHJcbmNvbnN0IFRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xyXG5jb25zdCBDcm9zc01hcmsgPSAn4p2MJztcclxuY29uc3QgUGx1cyA9ICfinpUnO1xyXG5jb25zdCBXYXJuaW5nID0gJ+KaoO+4jyc7XHJcbmNvbnN0IFNwaW5uZXIgPSAn8J+UhCc7XHJcbmNvbnN0IFdyZW5jaCA9ICfwn5SnJztcclxuXHJcbmV4cG9ydCB7IEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFRyYXNoQ2FuLCBDcm9zc01hcmssIFBsdXMsIFdhcm5pbmcsIFNwaW5uZXIsIFdyZW5jaCB9OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU2V0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8yNS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBTZWxlY3REYXRhU291cmNlVHlwZXMsIFNlbGVjdERhdGFTb3VyY2VUeXBlc1N0YXR1cywgRmV0Y2hEYXRhU291cmNlVHlwZXMgfSBmcm9tICcuLi9EYXRhU291cmNlVHlwZXMvRGF0YVNvdXJjZVR5cGVzU2xpY2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCBEYXRhU2V0T3Blbkhpc3RvcmlhbiBmcm9tICcuLi9PcGVuSGlzdG9yaWFuL0RhdGFTZXRPcGVuSGlzdG9yaWFuJztcclxuaW1wb3J0IERhdGFTZXRPcGVuWERBIGZyb20gJy4uL09wZW5YREEvRGF0YVNldE9wZW5YREEnO1xyXG5pbXBvcnQgRGF0YVNldEdsb2JhbFNldHRpbmdzIGZyb20gJy4vVHlwZXMvRGF0YVNldEdsb2JhbFNldHRpbmdzJztcclxuaW1wb3J0IERhdGFTZXRTYXBwaGlyZSBmcm9tICcuLi9TYXBwaGlyZS9EYXRhU2V0U2FwcGhpcmUnO1xyXG5cclxuXHJcbmNvbnN0IERhdGFTZXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgUmVjb3JkOiBUcmVuREFQLmlEYXRhU2V0LCBTZXREYXRhU2V0OiAod3M6IFRyZW5EQVAuaURhdGFTZXQpID0+IHZvaWQgfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VUeXBlcyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VUeXBlcykgYXMgVHJlbkRBUC5pRGF0YVNvdXJjZVR5cGVbXTtcclxuICAgIGNvbnN0IGRzdFN0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VUeXBlc1N0YXR1cyk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHN0U3RhdHVzICE9ICd1bml0aWF0ZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNvdXJjZVR5cGVzKCkpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkc3RTdGF0dXNdKTtcclxuXHJcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignc2V0dGluZ3MnKTtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VzID0gSlNPTi5wYXJzZShwcm9wcy5SZWNvcmQuSlNPTlN0cmluZyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCIgc3R5bGU9e3twYWRkaW5nOjEwfX0+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmVcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIG9uQ2xpY2s9eygpID0+IHNldFRhYignc2V0dGluZ3MnKSB9PlNldHRpbmdzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlcy5tYXAoKGRzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcIm5hdi1pdGVtIFwiICsgc3R5bGVzLndvcmtzcGFjZXRhYn0gIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIG9uQ2xpY2s9eygpID0+IHNldFRhYihpbmRleC50b1N0cmluZygpKX0+e2RzLkRhdGFTb3VyY2UuTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHByb3BzLlJlY29yZC5KU09OU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0RGF0YVNldCh7IC4uLnByb3BzLlJlY29yZCwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5YPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRhYi1wYW5lIGNvbnRhaW5lciBcIisgKHRhYiA9PT0gXCJzZXR0aW5nc1wiID8gJ2FjdGl2ZScgOiAnZmFkZScpfT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVNldEdsb2JhbFNldHRpbmdzIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2VzLm1hcCgoZHMsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInRhYi1wYW5lIGNvbnRhaW5lciBcIiArICh0YWIgPT09IGluZGV4LnRvU3RyaW5nKCkgPyAnYWN0aXZlJyA6ICdmYWRlJyl9IGlkPXtpbmRleH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRzLkRhdGFTb3VyY2UuRGF0YVNvdXJjZVR5cGVJRCk/Lk5hbWUgPT09IFwiVHJlbkRBUERCXCIgPyA8RGF0YVNldE9wZW5YREEgey4uLnByb3BzfSBEYXRhPXtkc30gSW5kZXg9e2luZGV4fS8+OiBudWxsIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YVNvdXJjZVR5cGVzLmZpbmQoZHN0ID0+IGRzdC5JRCA9PT0gZHMuRGF0YVNvdXJjZS5EYXRhU291cmNlVHlwZUlEKT8uTmFtZSA9PT0gXCJTYXBwaGlyZVwiID8gPERhdGFTZXRTYXBwaGlyZSB7Li4ucHJvcHN9IERhdGE9e2RzfSBJbmRleD17aW5kZXh9IC8+IDogbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YVNvdXJjZVR5cGVzLmZpbmQoZHN0ID0+IGRzdC5JRCA9PT0gZHMuRGF0YVNvdXJjZS5EYXRhU291cmNlVHlwZUlEKT8uTmFtZSA9PT0gXCJPcGVuSGlzdG9yaWFuXCIgPyA8RGF0YVNldE9wZW5IaXN0b3JpYW4gey4uLnByb3BzfSBEYXRhPXtkc30gSW5kZXg9e2luZGV4fSAvPiA6IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU2V0R2xvYmFsU2V0dGluZ3MudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA4LzI3LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgSW5wdXQsIENoZWNrQm94LCBFbnVtQ2hlY2tCb3hlcyB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgeyBQbHVzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgU2VsZWN0RGF0YVNvdXJjZXNTdGF0dXMsIFNlbGVjdERhdGFTb3VyY2VzQWxsUHVibGljTm90VXNlciwgU2VsZWN0RGF0YVNvdXJjZXNGb3JVc2VyLCBGZXRjaERhdGFTb3VyY2VzIH0gZnJvbSAnLi4vLi4vRGF0YVNvdXJjZXMvRGF0YVNvdXJjZXNTbGljZSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU2VsZWN0RGF0YVNvdXJjZVR5cGVzLCBTZWxlY3REYXRhU291cmNlVHlwZXNTdGF0dXMsIEZldGNoRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnLi4vLi4vRGF0YVNvdXJjZVR5cGVzL0RhdGFTb3VyY2VUeXBlc1NsaWNlJztcclxuaW1wb3J0IHsgU2VsZWN0TmV3WERBRGF0YVNldCB9IGZyb20gJy4vLi4vRGF0YVNldHNTbGljZSc7XHJcbmltcG9ydCB7IFNlbGVjdE5ld09wZW5IaXN0b3JpYW5EYXRhU2V0IH0gZnJvbSAnLi4vLi4vT3Blbkhpc3Rvcmlhbi9PcGVuSGlzdG9yaWFuU2xpY2UnO1xyXG5pbXBvcnQgeyBOZXdTYXBwaGlyZURhdGFTZXQgfSBmcm9tICcuLi8uLi9TYXBwaGlyZS9TYXBwaGlyZVNsaWNlJztcclxuXHJcbmNvbnN0IERhdGFTZXRHbG9iYWxTZXR0aW5nczogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBSZWNvcmQ6IFRyZW5EQVAuaURhdGFTZXQsIFNldERhdGFTZXQ6ICh3czogVHJlbkRBUC5pRGF0YVNldCkgPT4gdm9pZCB9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdERhdGFTb3VyY2VzRm9yVXNlcihzdGF0ZSwgdXNlck5hbWUpKSBhcyBUcmVuREFQLmlEYXRhU291cmNlW107XHJcbiAgICBjb25zdCBwdWJsaWNEYXRhU291cmNlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0RGF0YVNvdXJjZXNBbGxQdWJsaWNOb3RVc2VyKHN0YXRlLCB1c2VyTmFtZSkpIGFzIFRyZW5EQVAuaURhdGFTb3VyY2VbXTtcclxuICAgIGNvbnN0IGRzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZXNTdGF0dXMpO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZVR5cGVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZVR5cGVzKSBhcyBUcmVuREFQLmlEYXRhU291cmNlVHlwZVtdO1xyXG4gICAgY29uc3QgZHN0U3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNvdXJjZVR5cGVzU3RhdHVzKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHNTdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgZHNTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hEYXRhU291cmNlcygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGRzU3RhdHVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHN0U3RhdHVzICE9ICd1bml0aWF0ZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNvdXJjZVR5cGVzKCkpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkc3RTdGF0dXNdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWQoZmllbGQ6IGtleW9mIChUcmVuREFQLmlEYXRhU2V0KSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChmaWVsZCA9PSAnTmFtZScpXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5SZWNvcmQuTmFtZSAhPSBudWxsICYmIHByb3BzLlJlY29yZC5OYW1lLmxlbmd0aCA+IDAgJiYgcHJvcHMuUmVjb3JkLk5hbWUubGVuZ3RoIDw9IDIwMDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEFkZERTKGRhdGFTb3VyY2U6IFRyZW5EQVAuaURhdGFTb3VyY2UpIHtcclxuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UocHJvcHMuUmVjb3JkLkpTT05TdHJpbmcpO1xyXG4gICAgICAgIGpzb24ucHVzaCh7IERhdGFTb3VyY2U6IGRhdGFTb3VyY2UsIERhdGE6IEdldERTKGRhdGFTb3VyY2UpIH0pO1xyXG4gICAgICAgIHByb3BzLlNldERhdGFTZXQoeyAuLi5wcm9wcy5SZWNvcmQsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KGpzb24pIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldERTKGRhdGFTb3VyY2U6IFRyZW5EQVAuaURhdGFTb3VyY2UpIHtcclxuICAgICAgICBpZiAoZGF0YVNvdXJjZVR5cGVzLmZpbmQoZHN0ID0+IGRzdC5JRCA9PT0gZGF0YVNvdXJjZS5EYXRhU291cmNlVHlwZUlEKS5OYW1lID09PSBcIlRyZW5EQVBEQlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gU2VsZWN0TmV3WERBRGF0YVNldCgpO1xyXG4gICAgICAgIGlmIChkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gZHN0LklEID09PSBkYXRhU291cmNlLkRhdGFTb3VyY2VUeXBlSUQpLk5hbWUgPT09IFwiU2FwcGhpcmVcIilcclxuICAgICAgICAgICAgcmV0dXJuIE5ld1NhcHBoaXJlRGF0YVNldCgpO1xyXG4gICAgICAgIGlmIChkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gZHN0LklEID09PSBkYXRhU291cmNlLkRhdGFTb3VyY2VUeXBlSUQpLk5hbWUgPT09IFwiT3Blbkhpc3RvcmlhblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gU2VsZWN0TmV3T3Blbkhpc3RvcmlhbkRhdGFTZXQoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5SZWNvcmR9IEZpZWxkPVwiTmFtZVwiIFNldHRlcj17KHJlY29yZCkgPT4gcHJvcHMuU2V0RGF0YVNldChyZWNvcmQpfSBWYWxpZD17dmFsaWR9IC8+XHJcbiAgICAgICAgICAgIDxSZWxhdGl2ZURhdGVSYW5nZVBpY2tlciBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gU2V0dGVyPXsocmVjb3JkKSA9PiBwcm9wcy5TZXREYXRhU2V0KHJlY29yZCl9IC8+XHJcbiAgICAgICAgICAgIHsvKjxEYXRlUmFuZ2VQaWNrZXI8VHJlbkRBUC5pRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5SZWNvcmR9IEZyb21GaWVsZD1cIkZyb21cIiBUb0ZpZWxkPVwiVG9cIiBTZXR0ZXI9e3Byb3BzLlNldERhdGFTZXR9IExhYmVsPVwiRGF0ZSBSYW5nZVwiIC8+Ki99XHJcbiAgICAgICAgICAgIDxFbnVtQ2hlY2tCb3hlczxUcmVuREFQLmlEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gRmllbGQ9XCJIb3Vyc1wiIExhYmVsPVwiSG91ciBvZiBEYXlcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IHByb3BzLlNldERhdGFTZXQocmVjb3JkKX0gRW51bT17QXJyYXkuZnJvbSh7IGxlbmd0aDogMjQgfSwgKF8sIGkpID0+IGkudG9TdHJpbmcoKSl9IC8+XHJcbiAgICAgICAgICAgIDxFbnVtQ2hlY2tCb3hlczxUcmVuREFQLmlEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gRmllbGQ9XCJEYXlzXCIgTGFiZWw9XCJEYXkgb2YgV2Vla1wiIFNldHRlcj17KHJlY29yZCkgPT4gcHJvcHMuU2V0RGF0YVNldChyZWNvcmQpfSBFbnVtPXtbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J119IC8+XHJcbiAgICAgICAgICAgIDxFbnVtQ2hlY2tCb3hlczxUcmVuREFQLmlEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLlJlY29yZH0gRmllbGQ9XCJXZWVrc1wiIExhYmVsPVwiV2VlayBvZiBZZWFyXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBwcm9wcy5TZXREYXRhU2V0KHJlY29yZCl9IEVudW09e0FycmF5LmZyb20oeyBsZW5ndGg6IDUzIH0sIChfLCBpKSA9PiBpLnRvU3RyaW5nKCkpfSAvPlxyXG4gICAgICAgICAgICA8RW51bUNoZWNrQm94ZXM8VHJlbkRBUC5pRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5SZWNvcmR9IEZpZWxkPVwiTW9udGhzXCIgTGFiZWw9XCJNb250aCBvZiBZZWFyXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBwcm9wcy5TZXREYXRhU2V0KHJlY29yZCl9IEVudW09e1snSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddfSAvPlxyXG4gICAgICAgICAgICA8Q2hlY2tCb3g8VHJlbkRBUC5pRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5SZWNvcmR9IEZpZWxkPVwiUHVibGljXCIgTGFiZWw9J0dsb2JhbCcgU2V0dGVyPXsocmVjb3JkKSA9PiBwcm9wcy5TZXREYXRhU2V0KHJlY29yZCl9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVwiIHR5cGU9XCJidXR0b25cIiBpZD1cImRyb3Bkb3duTWVudUJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7UGx1c30gRGF0YVNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWhlYWRlclwiPllvdXIgRGF0YVNvdXJjZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFTb3VyY2VzLm1hcChkcyA9PiA8YSBrZXk9e2RzLklEfSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gQWRkRFMoZHMpfT57ZHMuTmFtZX0gKHtkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gZHN0LklEID09PSBkcy5EYXRhU291cmNlVHlwZUlEKT8uTmFtZX0pPC9hPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taGVhZGVyXCI+R2xvYmFsIERhdGFTb3VyY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwdWJsaWNEYXRhU291cmNlcy5tYXAoZHMgPT4gPGEga2V5PXtkcy5JRH0gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEFkZERTKGRzKX0+e2RzLk5hbWV9ICh7ZGF0YVNvdXJjZVR5cGVzLmZpbmQoZHN0ID0+IGRzdC5JRCA9PT0gZHMuRGF0YVNvdXJjZVR5cGVJRCk/Lk5hbWV9KTwvYT4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0R2xvYmFsU2V0dGluZ3M7XHJcblxyXG5jb25zdCBSZWxhdGl2ZURhdGVSYW5nZVBpY2tlciA9IChwcm9wczogeyBSZWNvcmQ6IFRyZW5EQVAuaURhdGFTZXQsIFNldHRlcjogKHJlY29yZDogVHJlbkRBUC5pRGF0YVNldCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbY29udGV4dCwgc2V0Q29udGV4dF0gPSBSZWFjdC51c2VTdGF0ZTwnUmVsYXRpdmUnIHwgJ0ZpeGVkIERhdGVzJz4ocHJvcHMuUmVjb3JkLkNvbnRleHQpO1xyXG4gICAgY29uc3QgW3JlbGF0aXZlVmFsdWUsIHNldFJlbGF0aXZlVmFsdWVdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihwcm9wcy5SZWNvcmQuUmVsYXRpdmVWYWx1ZSk7XHJcbiAgICBjb25zdCBbcmVsYXRpdmVXaW5kb3csIHNldFJlbGF0aXZlV2luZG93XSA9IFJlYWN0LnVzZVN0YXRlPCdEYXknIHwgJ1dlZWsnIHwgJ01vbnRoJyB8ICdZZWFyJz4ocHJvcHMuUmVjb3JkLlJlbGF0aXZlV2luZG93KVxyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4ocHJvcHMuUmVjb3JkLkZyb20pO1xyXG4gICAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihwcm9wcy5SZWNvcmQuVG8pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnRleHQgIT09IHByb3BzLlJlY29yZC5Db250ZXh0KSBzZXRDb250ZXh0KHByb3BzLlJlY29yZC5Db250ZXh0KTtcclxuICAgICAgICBpZiAocmVsYXRpdmVWYWx1ZSAhPT0gcHJvcHMuUmVjb3JkLlJlbGF0aXZlVmFsdWUpIHNldFJlbGF0aXZlVmFsdWUocHJvcHMuUmVjb3JkLlJlbGF0aXZlVmFsdWUpO1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVdpbmRvdyAhPT0gcHJvcHMuUmVjb3JkLlJlbGF0aXZlV2luZG93KSBzZXRSZWxhdGl2ZVdpbmRvdyhwcm9wcy5SZWNvcmQuUmVsYXRpdmVXaW5kb3cpO1xyXG4gICAgICAgIGlmIChzdGFydERhdGUgIT09IHByb3BzLlJlY29yZC5Gcm9tKSBzZXRTdGFydERhdGUocHJvcHMuUmVjb3JkLkZyb20pO1xyXG4gICAgICAgIGlmIChlbmREYXRlICE9PSBwcm9wcy5SZWNvcmQuVG8pIHNldEVuZERhdGUocHJvcHMuUmVjb3JkLlRvKTtcclxuICAgIH0sIFtwcm9wcy5SZWNvcmRdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb250ZXh0ICE9PSBwcm9wcy5SZWNvcmQuQ29udGV4dCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZWNvcmQgPSB7IC4uLnByb3BzLlJlY29yZCB9O1xyXG4gICAgICAgICAgICBuZXdSZWNvcmQuQ29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgICAgIHByb3BzLlNldHRlcihuZXdSZWNvcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjb250ZXh0XSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmVsYXRpdmVWYWx1ZSAhPT0gcHJvcHMuUmVjb3JkLlJlbGF0aXZlVmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UmVjb3JkID0geyAuLi5wcm9wcy5SZWNvcmQgfTtcclxuICAgICAgICAgICAgbmV3UmVjb3JkLlJlbGF0aXZlVmFsdWUgPSByZWxhdGl2ZVZhbHVlO1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIobmV3UmVjb3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVsYXRpdmVWYWx1ZV0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlV2luZG93ICE9PSBwcm9wcy5SZWNvcmQuUmVsYXRpdmVXaW5kb3cpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UmVjb3JkID0geyAuLi5wcm9wcy5SZWNvcmQgfTtcclxuICAgICAgICAgICAgbmV3UmVjb3JkLlJlbGF0aXZlV2luZG93ID0gcmVsYXRpdmVXaW5kb3c7XHJcbiAgICAgICAgICAgIHByb3BzLlNldHRlcihuZXdSZWNvcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZWxhdGl2ZVdpbmRvd10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXJ0RGF0ZSAhPT0gcHJvcHMuUmVjb3JkLkZyb20pIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UmVjb3JkID0geyAuLi5wcm9wcy5SZWNvcmQgfTtcclxuICAgICAgICAgICAgbmV3UmVjb3JkLkZyb20gPSBzdGFydERhdGU7XHJcbiAgICAgICAgICAgIHByb3BzLlNldHRlcihuZXdSZWNvcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzdGFydERhdGVdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbmREYXRlICE9PSBwcm9wcy5SZWNvcmQuVG8pIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UmVjb3JkID0geyAuLi5wcm9wcy5SZWNvcmQgfTtcclxuICAgICAgICAgICAgbmV3UmVjb3JkLlRvID0gZW5kRGF0ZTtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKG5ld1JlY29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2VuZERhdGVdKTtcclxuXHJcblxyXG4gICAgY29uc3QgU2hvd0NvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnRleHQgPT0gJ1JlbGF0aXZlJylcclxuICAgICAgICAgICAgcmV0dXJuIFNob3dSZWxhdGl2ZSgpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIFNob3dGaXhlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNob3dSZWxhdGl2ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlRpbWUgV2luZG93IFNpemU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17cmVsYXRpdmVWYWx1ZX0gdHlwZT0nbnVtYmVyJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgb25DaGFuZ2U9eyhldnQpID0+IHNldFJlbGF0aXZlVmFsdWUocGFyc2VGbG9hdChldnQudGFyZ2V0LnZhbHVlKSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaW1lIFdpbmRvdyBVbml0czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e3JlbGF0aXZlV2luZG93fSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVsYXRpdmVXaW5kb3coZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nRGF5Jz5EYXkocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nV2Vlayc+V2VlayhzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdNb250aCc+TW9udGgocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nWWVhcic+WWVhcihzKTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBTaG93Rml4ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdGFydCBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3N0YXJ0RGF0ZX0gdHlwZT0nZGF0ZScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRTdGFydERhdGUoZXZ0LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbmQgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtlbmREYXRlfSB0eXBlPSdkYXRlJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgb25DaGFuZ2U9eyhldnQpID0+IHNldEVuZERhdGUoZXZ0LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VGltZSBDb250ZXh0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtjb250ZXh0fSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q29udGV4dChldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1JlbGF0aXZlJz5SZWxhdGl2ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0ZpeGVkIERhdGVzJz5GaXhlZCBEYXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7U2hvd0NvbnRlbnQoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERhdGFTZXRPcGVuSGlzdG9yaWFuLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMy8wMy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IFNlbGVjdCwgQXJyYXlDaGVja0JveGVzLCBBcnJheU11bHRpU2VsZWN0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU2VsZWN0T3Blbkhpc3RvcmlhbiwgRmV0Y2hPcGVuSGlzdG9yaWFuIH0gZnJvbSAnLi9PcGVuSGlzdG9yaWFuU2xpY2UnO1xyXG5pbXBvcnQgeyBPcGVuSGlzdG9yaWFuIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9hcHBsaWNhdGlvbi10eXBpbmdzJztcclxuXHJcbmNvbnN0IERhdGFTZXRPcGVuSGlzdG9yaWFuOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IFJlY29yZDogVHJlbkRBUC5pRGF0YVNldCwgRGF0YTogeyBEYXRhU291cmNlOiBUcmVuREFQLmlEYXRhU291cmNlLCBEYXRhOiBUcmVuREFQLmlPcGVuSGlzdG9yaWFuRGF0YVNldCB9LCBJbmRleDogbnVtYmVyLCBTZXREYXRhU2V0OiAod3M6IFRyZW5EQVAuaURhdGFTZXQpID0+IHZvaWQgfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGRldmljZXM6IFJlZHV4Lk9wZW5IaXN0b3JpYW5TdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0T3Blbkhpc3RvcmlhbihzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklEKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gVXBkYXRlRFMoLi4ucGFyYW1zOiB7IGZpZWxkOiBrZXlvZiBUcmVuREFQLmlPcGVuSGlzdG9yaWFuRGF0YVNldCwgdmFsdWU6IGFueSB9W10pIHtcclxuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UocHJvcHMuUmVjb3JkLkpTT05TdHJpbmcpO1xyXG4gICAgICAgIGpzb25bcHJvcHMuSW5kZXhdLkRhdGEgPSB7IC4uLnByb3BzLkRhdGEuRGF0YSB9O1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIHBhcmFtcylcclxuICAgICAgICAgICAganNvbltwcm9wcy5JbmRleF0uRGF0YVtwYXJhbXNbaW5kZXhdLmZpZWxkXSA9IHBhcmFtc1tpbmRleF0udmFsdWU7XHJcbiAgICAgICAgcHJvcHMuU2V0RGF0YVNldCh7IC4uLnByb3BzLlJlY29yZCwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGV2aWNlcyAhPSB1bmRlZmluZWQgJiYgZGV2aWNlcz8uU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIGRldmljZXM/LlN0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaE9wZW5IaXN0b3JpYW4oeyBkYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGRldmljZXMuU3RhdHVzXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5TXVsdGlTZWxlY3Q8VHJlbkRBUC5pT3Blbkhpc3RvcmlhbkRhdGFTZXQ+IFN0eWxlPXt7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNDUwIH19IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBPcHRpb25zPXtbLi4ubmV3IFNldChkZXZpY2VzPy5NZWFzdXJlbWVudHMuZmlsdGVyKG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMuRGF0YS5EYXRhLkluc3RhbmNlICE9PSAnTm9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5JRC5pbmNsdWRlcyhwcm9wcy5EYXRhLkRhdGEuSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KS5tYXAobSA9PiBtLkRldmljZSkgPz8gW10pXS5tYXAobSA9PiAoeyBWYWx1ZTogbSwgTGFiZWw6IG0gfSkpIH0gRmllbGQ9XCJEZXZpY2VzXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnRGV2aWNlcycsIHZhbHVlOiByZWNvcmQuRGV2aWNlcyB9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0PFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5EYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gRmllbGQ9XCJJbnN0YW5jZVwiIE9wdGlvbnM9e1t7IFZhbHVlOiAnTm9uZScsIExhYmVsOiAnTm9uZSd9XS5jb25jYXQoZGV2aWNlcz8uSW5zdGFuY2VzLm1hcChtID0+ICh7IFZhbHVlOiBtLkFjcm9ueW0sIExhYmVsOiBtLkFjcm9ueW0gfSkpID8/IFtdKX0gU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnSW5zdGFuY2UnLCB2YWx1ZTogcmVjb3JkLkluc3RhbmNlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Q8VHJlbkRBUC5pT3Blbkhpc3RvcmlhbkRhdGFTZXQ+IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBGaWVsZD1cIkFnZ3JlZ2F0ZVwiIE9wdGlvbnM9e1t7IFZhbHVlOiAnMW0nLCBMYWJlbDogJ01pbnV0ZScgfSwgeyBWYWx1ZTogJzFoJywgTGFiZWw6ICdIb3VyJyB9LCB7IFZhbHVlOiAnMWQnLCBMYWJlbDogJ0RheScgfSwgeyBWYWx1ZTogJzFNJywgTGFiZWw6ICdNb250aCcgfV19IFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0FnZ3JlZ2F0ZScsIHZhbHVlOiByZWNvcmQuQWdncmVnYXRlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheUNoZWNrQm94ZXM8VHJlbkRBUC5pT3Blbkhpc3RvcmlhbkRhdGFTZXQ+IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBDaGVja2JveGVzPXtbeyBJRDogJ0EnLCBMYWJlbDogJ0EnIH0sIHsgSUQ6ICdCJywgTGFiZWw6ICdCJyB9LCB7IElEOiAnQycsIExhYmVsOiAnQycgfSwgeyBJRDogJ04nLCBMYWJlbDogJ04nIH0sIHsgSUQ6ICcrJywgTGFiZWw6ICdQb3MnIH0sIHsgSUQ6ICcwJywgTGFiZWw6ICdaZXJvJyB9LCB7IElEOiAnLScsIExhYmVsOiAnTmVnJyB9LCB7IElEOiAnTm9uZScsIExhYmVsOiAnTm9uZScgfV19IEZpZWxkPVwiUGhhc2VzXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnUGhhc2VzJywgdmFsdWU6IHJlY29yZC5QaGFzZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5Q2hlY2tCb3hlczxUcmVuREFQLmlPcGVuSGlzdG9yaWFuRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IENoZWNrYm94ZXM9e1t7IElEOiAnSVBITScsIExhYmVsOiAnQ3VycmVudCBNYWduaXR1ZGUnIH0sIHsgSUQ6ICdJUEhBJywgTGFiZWw6ICdDdXJyZW50IEFuZ2xlJyB9LCB7IElEOiAnVlBITScsIExhYmVsOiAnVm9sdGFnZSBNYWduaXR1ZGUnIH0sIHsgSUQ6ICdWUEhBJywgTGFiZWw6ICdWb2x0YWdlIEFuZ2xlJyB9LCB7IElEOiAnRlJFUScsIExhYmVsOiAnRnJlcXVlbmN5JyB9LCB7IElEOiAnREZEVCcsIExhYmVsOiAnREZEVCcgfSwgeyBJRDogJ0FMT0cnLCBMYWJlbDogJ0FuYWxvZycgfSwgeyBJRDogJ0RJR0knLCBMYWJlbDogJ0RpZ2l0YWwnIH0sIHsgSUQ6ICdDQUxDJywgTGFiZWw6ICdDYWxjdWxhdGVkJyB9XX0gRmllbGQ9XCJUeXBlc1wiIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ1R5cGVzJywgdmFsdWU6IHJlY29yZC5UeXBlcyB9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFTZXRPcGVuSGlzdG9yaWFuOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU2V0T3BlblhEQS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDgvMTYvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCwgUmVkdXggfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyBTZWxlY3QsIEFycmF5Q2hlY2tCb3hlcywgQXJyYXlNdWx0aVNlbGVjdCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNlbGVjdE9wZW5YREEsIEZldGNoT3BlblhEQSwgU2VsZWN0T3BlblhEQVN0YXR1cyB9IGZyb20gJy4uL09wZW5YREEvT3BlblhEQVNsaWNlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBPcGVuWERBIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9hcHBsaWNhdGlvbi10eXBpbmdzJztcclxuXHJcbmNvbnN0IERhdGFTZXRPcGVuWERBOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IFJlY29yZDogVHJlbkRBUC5pRGF0YVNldCwgRGF0YTogeyBEYXRhU291cmNlOiBUcmVuREFQLmlEYXRhU291cmNlLCBEYXRhOiBUcmVuREFQLmlYREFEYXRhU2V0IH0sIEluZGV4OiBudW1iZXIsIFNldERhdGFTZXQ6ICh3czogVHJlbkRBUC5pRGF0YVNldCkgPT4gdm9pZCB9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgcGhhc2VzOiBPcGVuWERBLlR5cGVzLlBoYXNlW10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5YREEoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ1BoYXNlJykpO1xyXG4gICAgY29uc3QgcGhTdGF0dXM6IFRyZW5EQVAuU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RPcGVuWERBU3RhdHVzKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdQaGFzZScpKTtcclxuICAgIGNvbnN0IG1ldGVyczogT3BlblhEQS5UeXBlcy5NZXRlcltdID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RPcGVuWERBKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdNZXRlcicpKTtcclxuICAgIGNvbnN0IG1ldGVyU3RhdHVzOiBUcmVuREFQLlN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0T3BlblhEQVN0YXR1cyhzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnTWV0ZXInKSk7XHJcbiAgICBjb25zdCBhc3NldHM6IE9wZW5YREEuVHlwZXMuQXNzZXRbXSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0T3BlblhEQShzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnQXNzZXQnKSk7XHJcbiAgICBjb25zdCBhc3NldFN0YXR1czogVHJlbkRBUC5TdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5YREFTdGF0dXMoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ0Fzc2V0JykpO1xyXG5cclxuICAgIGNvbnN0IGNoYW5uZWxHcm91cHM6IGFueVtdID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RPcGVuWERBKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdDaGFubmVsR3JvdXAnKSk7XHJcbiAgICBjb25zdCBjZ1N0YXR1czogVHJlbkRBUC5TdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5YREFTdGF0dXMoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ0NoYW5uZWxHcm91cCcpKTtcclxuXHJcbiAgICBjb25zdCBjaGFubmVsVHlwZXM6IGFueVtdID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RPcGVuWERBKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdDaGFubmVsR3JvdXBUeXBlJykpO1xyXG4gICAgY29uc3QgY2d0U3RhdHVzOiBUcmVuREFQLlN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0T3BlblhEQVN0YXR1cyhzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnQ2hhbm5lbEdyb3VwVHlwZScpKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gVXBkYXRlRFMoLi4ucGFyYW1zOiB7IGZpZWxkOiBrZXlvZiBUcmVuREFQLmlYREFEYXRhU2V0LCB2YWx1ZTogYW55IH1bXSkge1xyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShwcm9wcy5SZWNvcmQuSlNPTlN0cmluZyk7XHJcbiAgICAgICAganNvbltwcm9wcy5JbmRleF0uRGF0YSA9IHsgLi4ucHJvcHMuRGF0YS5EYXRhIH07XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gcGFyYW1zKVxyXG4gICAgICAgICAgICBqc29uW3Byb3BzLkluZGV4XS5EYXRhW3BhcmFtc1tpbmRleF0uZmllbGRdID0gcGFyYW1zW2luZGV4XS52YWx1ZTtcclxuICAgICAgICBwcm9wcy5TZXREYXRhU2V0KHsgLi4ucHJvcHMuUmVjb3JkLCBKU09OU3RyaW5nOiBKU09OLnN0cmluZ2lmeShqc29uKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwaFN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBwaFN0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaE9wZW5YREEoeyBkYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgdGFibGU6ICdQaGFzZScgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgcGhTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZXRlclN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBtZXRlclN0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaE9wZW5YREEoeyBkYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgdGFibGU6ICdNZXRlcicgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgbWV0ZXJTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICggYXNzZXRTdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgYXNzZXRTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hPcGVuWERBKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsIHRhYmxlOiAnQXNzZXQnIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGFzc2V0U3RhdHVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY2dTdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgY2dTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hPcGVuWERBKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsIHRhYmxlOiAnQ2hhbm5lbEdyb3VwJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBjZ1N0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNndFN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBjZ3RTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hPcGVuWERBKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsIHRhYmxlOiAnQ2hhbm5lbEdyb3VwVHlwZScgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgY2d0U3RhdHVzXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgb25DbGljaz17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oYCR7aG9tZVBhdGh9UXVpY2tWaWV3T3BlblhEQWAsIGBfYmxhbmtgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUXVpY2tWaWV3T3BlblhEQScsIEpTT04uc3RyaW5naWZ5KHsgRGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsIFBvc3REYXRhOiBDcmVhdGVQb3N0KHByb3BzLlJlY29yZCwgcHJvcHMuRGF0YS5EYXRhKSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+UXVpY2sgVmlldzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Q8VHJlbkRBUC5pWERBRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IEZpZWxkPVwiQWdncmVnYXRlXCIgT3B0aW9ucz17W3sgVmFsdWU6ICcnLCBMYWJlbDogJ05vbmUnIH0sIHsgVmFsdWU6ICcxaCcsIExhYmVsOiAnSG91cicgfSwgeyBWYWx1ZTogJzFkJywgTGFiZWw6ICdEYXknIH0sIHsgVmFsdWU6ICcxdycsIExhYmVsOiAnV2VlaycgfV19IFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0FnZ3JlZ2F0ZScsIHZhbHVlOiByZWNvcmQuQWdncmVnYXRlIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Q8VHJlbkRBUC5pWERBRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IEZpZWxkPVwiQnlcIiBPcHRpb25zPXtbeyBWYWx1ZTogJ01ldGVyJywgTGFiZWw6ICdNZXRlcicgfSwgeyBWYWx1ZTogJ0Fzc2V0JywgTGFiZWw6ICdBc3NldCcgfV19IFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0J5JywgdmFsdWU6IHJlY29yZC5CeSB9LCB7IGZpZWxkOiAnSURzJywgdmFsdWU6IFtdIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheU11bHRpU2VsZWN0PFRyZW5EQVAuaVhEQURhdGFTZXQ+IFN0eWxlPXt7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTYwIH19IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBPcHRpb25zPXsocHJvcHMuRGF0YS5EYXRhLkJ5ID09ICdNZXRlcicgPyBtZXRlcnM/Lm1hcChtID0+ICh7IFZhbHVlOiBtLklELnRvU3RyaW5nKCksIExhYmVsOiBtLk5hbWUgfSkpIDogYXNzZXRzPy5tYXAobSA9PiAoeyBWYWx1ZTogbS5JRC50b1N0cmluZygpLCBMYWJlbDogbS5Bc3NldE5hbWUgfSkpKSA/PyBbXX0gRmllbGQ9XCJJRHNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdJRHMnLCB2YWx1ZTogcmVjb3JkLklEcyB9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlDaGVja0JveGVzPFRyZW5EQVAuaVhEQURhdGFTZXQ+IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBDaGVja2JveGVzPXtwaGFzZXM/Lm1hcChtID0+ICh7IElEOiBtLklELnRvU3RyaW5nKCksIExhYmVsOiBtLk5hbWUgfSkpID8/IFtdfSBGaWVsZD1cIlBoYXNlc1wiIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ1BoYXNlcycsIHZhbHVlOiByZWNvcmQuUGhhc2VzIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheUNoZWNrQm94ZXM8VHJlbkRBUC5pWERBRGF0YVNldD4gTGFiZWw9XCJRdWljayBTZWxlY3Rpb25cIiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gQ2hlY2tib3hlcz17Y2hhbm5lbEdyb3Vwcz8ubWFwKG0gPT4gKHsgSUQ6IG0uSUQsIExhYmVsOiBtLk5hbWUgfSkpID8/IFtdfSBGaWVsZD1cIkdyb3Vwc1wiIFNldHRlcj17KHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRHcm91cHMgPSBwcm9wcy5EYXRhLkRhdGEuR3JvdXBzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkR3JvdXBzLmxlbmd0aCA+IHJlY29yZC5Hcm91cHMubGVuZ3RoKSB7IC8vIHNvbWV0aGluZyB3YXMgdGFrZW4gb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IG9sZEdyb3Vwcy5tYXAoeCA9PiByZWNvcmQuR3JvdXBzLmluZGV4T2YoeCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSBhLmluZGV4T2YoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5uZWxHcm91cElEID0gb2xkR3JvdXBzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld2EgPSBwcm9wcy5EYXRhLkRhdGEuVHlwZXMubWFwKHQgPT4gY2hhbm5lbFR5cGVzLmZpbmQoY3QgPT4gY3QuSUQgPT09IHQpKS5maWx0ZXIodCA9PiB0LkNoYW5uZWxHcm91cElEICE9PSBvbGRHcm91cHNbaV0pLm1hcCh0ID0+IHQuSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlRFMoeyBmaWVsZDogJ0dyb3VwcycsIHZhbHVlOiByZWNvcmQuR3JvdXBzIH0sIHsgZmllbGQ6ICdUeXBlcycsIHZhbHVlOiBuZXdhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9sZEdyb3Vwcy5sZW5ndGggPCByZWNvcmQuR3JvdXBzLmxlbmd0aCkgeyAvLyBzb21ldGhpbmcgd2FzIHB1dCBpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSByZWNvcmQuR3JvdXBzLm1hcCh4ID0+IG9sZEdyb3Vwcy5pbmRleE9mKHgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gYS5pbmRleE9mKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFubmVsR3JvdXBJRCA9IHJlY29yZC5Hcm91cHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3YSA9IFsuLi5wcm9wcy5EYXRhLkRhdGEuVHlwZXMsIC4uLmNoYW5uZWxUeXBlcy5maWx0ZXIodCA9PiB0LkNoYW5uZWxHcm91cElEID09PSBjaGFubmVsR3JvdXBJRCkubWFwKHQgPT4gdC5JRCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlRFMoeyBmaWVsZDogJ0dyb3VwcycsIHZhbHVlOiByZWNvcmQuR3JvdXBzIH0sIHsgZmllbGQ6ICdUeXBlcycsIHZhbHVlOiBuZXdhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyAgLy8gdGhpcyBwcm9iYWJseSBjYW4ndCBoYXBwZW4sIGJ1dCBtZWFucyBub3RoaW5nIGNoYW5nZWRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5TXVsdGlTZWxlY3Q8VHJlbkRBUC5pWERBRGF0YVNldD4gU3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1MjAgfX0gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IE9wdGlvbnM9e2NoYW5uZWxUeXBlcz8ubWFwKG0gPT4gKHsgVmFsdWU6IG0uSUQsIExhYmVsOiBtLkRpc3BsYXlOYW1lIH0pKSA/PyBbXX0gRmllbGQ9XCJUeXBlc1wiIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ1R5cGVzJywgdmFsdWU6IHJlY29yZC5UeXBlcyB9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gQ3JlYXRlUG9zdChkYXRhU2V0OiBUcmVuREFQLmlEYXRhU2V0LCBkYXRhOiBUcmVuREFQLmlYREFEYXRhU2V0KVxyXG57XHJcbiAgICBsZXQgc3RhcnRUaW1lID0gbW9tZW50KGRhdGFTZXQuRnJvbSk7XHJcbiAgICBsZXQgZW5kVGltZSA9IG1vbWVudChkYXRhU2V0LlRvKTtcclxuICAgIGlmIChkYXRhU2V0LkNvbnRleHQgPT0gXCJSZWxhdGl2ZVwiKSB7XHJcbiAgICAgICAgZW5kVGltZSA9IG1vbWVudCgpO1xyXG4gICAgICAgIHN0YXJ0VGltZSA9IG1vbWVudCgpO1xyXG4gICAgICAgIGlmIChkYXRhU2V0LlJlbGF0aXZlV2luZG93ID09IFwiRGF5XCIpXHJcbiAgICAgICAgICAgIHN0YXJ0VGltZS5hZGQoJ2RheXMnLCAtZGF0YVNldC5SZWxhdGl2ZVZhbHVlKTtcclxuICAgICAgICBlbHNlIGlmIChkYXRhU2V0LlJlbGF0aXZlV2luZG93ID09IFwiV2Vla1wiKVxyXG4gICAgICAgICAgICBzdGFydFRpbWUuYWRkKCdkYXlzJywgLWRhdGFTZXQuUmVsYXRpdmVWYWx1ZSAqIDcpO1xyXG4gICAgICAgIGVsc2UgaWYgKGRhdGFTZXQuUmVsYXRpdmVXaW5kb3cgPT0gXCJNb250aFwiKVxyXG4gICAgICAgICAgICBzdGFydFRpbWUuYWRkKCdtb250aHMnLCAtZGF0YVNldC5SZWxhdGl2ZVZhbHVlKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHN0YXJ0VGltZS5hZGQoJ3llYXJzJywgLWRhdGFTZXQuUmVsYXRpdmVWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBCeSA6IGRhdGEuQnksXHJcbiAgICAgICAgSURzIDogZGF0YS5JRHMsXHJcbiAgICAgICAgUGhhc2VzIDogZGF0YS5QaGFzZXMsXHJcbiAgICAgICAgR3JvdXBzIDogZGF0YS5Hcm91cHMsXHJcbiAgICAgICAgVHlwZXMgOiBkYXRhLlR5cGVzLFxyXG4gICAgICAgIFN0YXJ0VGltZSA6IHN0YXJ0VGltZSxcclxuICAgICAgICBFbmRUaW1lIDogZW5kVGltZSxcclxuICAgICAgICBIb3VycyA6IGRhdGFTZXQuSG91cnMsXHJcbiAgICAgICAgRGF5cyA6IGRhdGFTZXQuRGF5cyxcclxuICAgICAgICBXZWVrczogZGF0YVNldC5XZWVrcyxcclxuICAgICAgICBNb250aHM6IGRhdGFTZXQuTW9udGhzLFxyXG4gICAgICAgIEFnZ3JlZ2F0ZTogZGF0YS5BZ2dyZWdhdGVcclxuICAgIH07XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0T3BlblhEQTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRGF0YVNldFNhcHBoaXJlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMi8wMy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IFNlbGVjdCwgQXJyYXlDaGVja0JveGVzLCBBcnJheU11bHRpU2VsZWN0LCBJbnB1dCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNlbGVjdFNhcHBoaXJlLCBGZXRjaFNhcHBoaXJlLCBTZWxlY3RTYXBwaGlyZVN0YXR1cyB9IGZyb20gJy4vU2FwcGhpcmVTbGljZSc7XHJcblxyXG5jb25zdCBEYXRhU2V0U2FwcGhpcmU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgUmVjb3JkOiBUcmVuREFQLmlEYXRhU2V0LCBEYXRhOiB7IERhdGFTb3VyY2U6IFRyZW5EQVAuaURhdGFTb3VyY2UsIERhdGE6IFRyZW5EQVAuaVNhcHBoaXJlRGF0YVNldCB9LCBJbmRleDogbnVtYmVyLCBTZXREYXRhU2V0OiAod3M6IFRyZW5EQVAuaURhdGFTZXQpID0+IHZvaWQgfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCByZXNvbHV0aW9uczogYW55W10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFNhcHBoaXJlKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdSZXNvbHV0aW9uJykpO1xyXG4gICAgY29uc3QgclN0YXR1czogVHJlbkRBUC5TdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFNhcHBoaXJlU3RhdHVzKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdSZXNvbHV0aW9uJykpO1xyXG5cclxuICAgIGNvbnN0IHBoYXNlczogYW55W10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFNhcHBoaXJlKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdQaGFzZScpKTtcclxuICAgIGNvbnN0IHBoU3RhdHVzOiBUcmVuREFQLlN0YXR1cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0U2FwcGhpcmVTdGF0dXMoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ1BoYXNlJykpO1xyXG4gICAgY29uc3QgbWV0ZXJzOiBhbnlbXSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0U2FwcGhpcmUoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ01ldGVyJykpO1xyXG4gICAgY29uc3QgbVN0YXR1czogVHJlbkRBUC5TdGF0dXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFNhcHBoaXJlU3RhdHVzKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdNZXRlcicpKTtcclxuICAgIGNvbnN0IGNoYW5uZWxUeXBlczogYW55W10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFNhcHBoaXJlKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdDaGFubmVsR3JvdXBUeXBlJykpO1xyXG4gICAgY29uc3QgY3RTdGF0dXM6IFRyZW5EQVAuU3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RTYXBwaGlyZVN0YXR1cyhzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnQ2hhbm5lbEdyb3VwVHlwZScpKTtcclxuXHJcbiAgICBmdW5jdGlvbiBVcGRhdGVEUyguLi5wYXJhbXM6IHsgZmllbGQ6IGtleW9mIFRyZW5EQVAuaVNhcHBoaXJlRGF0YVNldCwgdmFsdWU6IGFueSB9W10pIHtcclxuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UocHJvcHMuUmVjb3JkLkpTT05TdHJpbmcpO1xyXG4gICAgICAgIGpzb25bcHJvcHMuSW5kZXhdLkRhdGEgPSB7IC4uLnByb3BzLkRhdGEuRGF0YSB9O1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIHBhcmFtcylcclxuICAgICAgICAgICAganNvbltwcm9wcy5JbmRleF0uRGF0YVtwYXJhbXNbaW5kZXhdLmZpZWxkXSA9IHBhcmFtc1tpbmRleF0udmFsdWU7XHJcbiAgICAgICAgcHJvcHMuU2V0RGF0YVNldCh7IC4uLnByb3BzLlJlY29yZCwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocGhTdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgcGhTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hTYXBwaGlyZSh7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCB0YWJsZTogJ1BoYXNlJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3BoU3RhdHVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoclN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiByU3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoU2FwcGhpcmUoeyBkYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgdGFibGU6ICdSZXNvbHV0aW9uJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChtU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIG1TdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hTYXBwaGlyZSh7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCB0YWJsZTogJ01ldGVyJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21TdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdFN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBjdFN0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaFNhcHBoaXJlKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsIHRhYmxlOiAnQ2hhbm5lbEdyb3VwVHlwZScgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjdFN0YXR1c10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIFRlc3RIYXJtb25pY3MoaGFybW9uaWNzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmUgPSAvXlxcZCsoPzotXFxkKyk/KD86LFxcaCpcXGQrKD86LVxcZCspPykqJC87XHJcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QoaGFybW9uaWNzKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Q8VHJlbkRBUC5pU2FwcGhpcmVEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gRmllbGQ9XCJBZ2dyZWdhdGVcIiBPcHRpb25zPXtyZXNvbHV0aW9ucy5tYXAobSA9PiAoeyBWYWx1ZTogbS5EZXNjcmlwdGlvbiwgTGFiZWw6IG0uRGlzcGxheU5hbWUgfSkpfSBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdBZ2dyZWdhdGUnLCB2YWx1ZTogcmVjb3JkLkFnZ3JlZ2F0ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlNdWx0aVNlbGVjdDxUcmVuREFQLmlTYXBwaGlyZURhdGFTZXQ+IFN0eWxlPXt7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTEwIH19IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBPcHRpb25zPXsgbWV0ZXJzLm1hcChtID0+ICh7IFZhbHVlOiBtLklELCBMYWJlbDogbS5OYW1lIH0pKX0gRmllbGQ9XCJJRHNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdJRHMnLCB2YWx1ZTogcmVjb3JkLklEcyB9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlDaGVja0JveGVzPFRyZW5EQVAuaVNhcHBoaXJlRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IENoZWNrYm94ZXM9e3BoYXNlcy5tYXAobSA9PiAoeyBJRDogbS5JRCwgTGFiZWw6IG0uTmFtZSB9KSkgPz8gW119IEZpZWxkPVwiUGhhc2VzXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnUGhhc2VzJywgdmFsdWU6IHJlY29yZC5QaGFzZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaVNhcHBoaXJlRGF0YVNldD4gRmllbGQ9J0hhcm1vbmljcycgUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IExhYmVsPSdIYXJtb25pY3MnIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0hhcm1vbmljcycsIHZhbHVlOiByZWNvcmQuSGFybW9uaWNzLnJlcGxhY2UoJyAnLCAnJykgfSl9IFZhbGlkPXsoZmllbGQpID0+IFRlc3RIYXJtb25pY3MocHJvcHMuRGF0YS5EYXRhLkhhcm1vbmljcykgfSBGZWVkYmFjaz0nSGFybW9uaWMgZ3JvdXBzIHNob3VsZCBiZSBsaXN0ZWQgYnkgcmFuZ2Ugb3IgaW5kZXguICBlZyAxLTE1LDE5LDIzLDI2LTEwMCcgVHlwZT0ndGV4dCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheU11bHRpU2VsZWN0PFRyZW5EQVAuaVNhcHBoaXJlRGF0YVNldD4gU3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA2MDAgfX0gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IE9wdGlvbnM9e2NoYW5uZWxUeXBlcy5tYXAobSA9PiAoeyBWYWx1ZTogbS5JRCwgTGFiZWw6IG0uRGlzcGxheU5hbWUgfSkpfSBGaWVsZD1cIlR5cGVzXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnVHlwZXMnLCB2YWx1ZTogcmVjb3JkLlR5cGVzIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0U2FwcGhpcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==
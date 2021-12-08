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
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-primary', onClick: function (evt) {
                        evt.preventDefault();
                        window.open(homePath + "QuickViewOpenXDA", "_blank");
                        localStorage.setItem('QuickViewOpenXDA', JSON.stringify({ DataSourceID: props.Data.DataSource.ID, PostData: CreatePost(props.Record, props.Data.Data) }));
                    } }, "Quick View"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "Aggregate", Options: [{ Value: '', Label: 'None' }, { Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, { Value: '1w', Label: 'Week' }], Setter: function (record) { return UpdateDS({ field: 'Aggregate', value: record.Aggregate }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "By", Options: [{ Value: 'Meter', Label: 'Meter' }, { Value: 'Asset', Label: 'Asset' }], Setter: function (record) { return UpdateDS({ field: 'By', value: record.By }, { field: 'IDs', value: [] }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayMultiSelect, { Style: { height: window.innerHeight - 560 }, Record: props.Data.Data, Options: (_a = (props.Data.Data.By == 'Meter' ? meters === null || meters === void 0 ? void 0 : meters.Data.map(function (m) { return ({ Value: m.ID, Label: m.Name }); }) : assets === null || assets === void 0 ? void 0 : assets.Data.map(function (m) { return ({ Value: m.ID, Label: m.AssetName }); }))) !== null && _a !== void 0 ? _a : [], Field: "IDs", Setter: function (record) { return UpdateDS({ field: 'IDs', value: record.IDs }); } })),
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
    var _a, _b, _c;
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    var phases = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.SelectSapphire)(state, props.Data.DataSource.ID, 'Phase'); });
    var meters = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.SelectSapphire)(state, props.Data.DataSource.ID, 'Meter'); });
    var channelTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) { return (0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.SelectSapphire)(state, props.Data.DataSource.ID, 'ChannelGroupType'); });
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
        dispatch((0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.FetchSapphire)({ dataSourceID: props.Data.DataSource.ID, table: 'Phase' }));
        return function () {
        };
    }, [dispatch, phases === null || phases === void 0 ? void 0 : phases.Status]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (meters != undefined && (meters === null || meters === void 0 ? void 0 : meters.Status) != 'unitiated' && (meters === null || meters === void 0 ? void 0 : meters.Status) != 'changed')
            return;
        dispatch((0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.FetchSapphire)({ dataSourceID: props.Data.DataSource.ID, table: 'Meter' }));
        return function () {
        };
    }, [dispatch, meters === null || meters === void 0 ? void 0 : meters.Status]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (channelTypes != undefined && (channelTypes === null || channelTypes === void 0 ? void 0 : channelTypes.Status) != 'unitiated' && (channelTypes === null || channelTypes === void 0 ? void 0 : channelTypes.Status) != 'changed')
            return;
        dispatch((0,_SapphireSlice__WEBPACK_IMPORTED_MODULE_3__.FetchSapphire)({ dataSourceID: props.Data.DataSource.ID, table: 'ChannelGroupType' }));
        return function () {
        };
    }, [dispatch, channelTypes === null || channelTypes === void 0 ? void 0 : channelTypes.Status]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Select, { Record: props.Data.Data, Field: "Aggregate", Options: [{ Value: '', Label: 'None' }, { Value: '1h', Label: 'Hour' }, { Value: '1d', Label: 'Day' }, { Value: '1w', Label: 'Week' }], Setter: function (record) { return UpdateDS({ field: 'Aggregate', value: record.Aggregate }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayMultiSelect, { Style: { height: window.innerHeight - 510 }, Record: props.Data.Data, Options: (_a = meters === null || meters === void 0 ? void 0 : meters.Data.map(function (m) { return ({ Value: m.ID, Label: m.Name }); })) !== null && _a !== void 0 ? _a : [], Field: "IDs", Setter: function (record) { return UpdateDS({ field: 'IDs', value: record.IDs }); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayCheckBoxes, { Record: props.Data.Data, Checkboxes: (_b = phases === null || phases === void 0 ? void 0 : phases.Data.map(function (m) { return ({ ID: m.ID, Label: m.Name }); })) !== null && _b !== void 0 ? _b : [], Field: "Phases", Setter: function (record) { return UpdateDS({ field: 'Phases', value: record.Phases }); } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.ArrayMultiSelect, { Style: { height: window.innerHeight - 520 }, Record: props.Data.Data, Options: (_c = channelTypes === null || channelTypes === void 0 ? void 0 : channelTypes.Data.map(function (m) { return ({ Value: m.ID, Label: m.DisplayName }); })) !== null && _c !== void 0 ? _c : [], Field: "Types", Setter: function (record) { return UpdateDS({ field: 'Types', value: record.Types }); } })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSetSapphire);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL0RhdGFTZXQudHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVHlwZXMvRGF0YVNldEdsb2JhbFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL09wZW5IaXN0b3JpYW4vRGF0YVNldE9wZW5IaXN0b3JpYW4udHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvT3BlblhEQS9EYXRhU2V0T3BlblhEQS50c3giLCJ3ZWJwYWNrOi8vdHJlbmRhcC8uL3d3d3Jvb3QvVHlwZVNjcmlwdC9GZWF0dXJlcy9TYXBwaGlyZS9EYXRhU2V0U2FwcGhpcmUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0dBQXdHO0FBQ3hHLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRXhHLFNBQVM7QUFDVCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQztB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TSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxtQ0FBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQUssZUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQXZELENBQXVELEdBQUk7Z0JBQ2hTLGlEQUFDLDZEQUFNLElBQWdDLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQUssZUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQXpELENBQXlELEdBQUk7Z0JBQ2hULGlEQUFDLHNFQUFlLElBQWdDLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBRSxVQUFDLE1BQU0sSUFBSyxlQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBbkQsQ0FBbUQsR0FBSTtnQkFDdFksaURBQUMsc0VBQWUsSUFBZ0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFF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LElBQUksUUFBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxtQ0FBSSxFQUFFLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBQyxNQUFNLElBQUssZUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQWpELENBQWlELEdBQUksQ0FFNVIsQ0FDSixDQUNILENBQ1YsQ0FBQztBQUVOLENBQUM7QUFFRCxpRUFBZSxlQUFlLEVBQUMiLCJmaWxlIjoid3d3cm9vdF9UeXBlU2NyaXB0X0ZlYXR1cmVzX0RhdGFTZXRzX0RhdGFTZXRfdHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbnN0YW50cy50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8zMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuLy8gZW1vamlzXHJcbmNvbnN0IEhlYXZ5Q2hlY2tNYXJrID0gJ+KclO+4jyc7XHJcbmNvbnN0IFBlbmNpbCA9ICfinI/vuI8nO1xyXG5jb25zdCBUcmFzaENhbiA9ICfwn5eR77iPJztcclxuY29uc3QgQ3Jvc3NNYXJrID0gJ+KdjCc7XHJcbmNvbnN0IFBsdXMgPSAn4p6VJztcclxuY29uc3QgV2FybmluZyA9ICfimqDvuI8nO1xyXG5jb25zdCBTcGlubmVyID0gJ/CflIQnO1xyXG5jb25zdCBXcmVuY2ggPSAn8J+Upyc7XHJcblxyXG5leHBvcnQgeyBIZWF2eUNoZWNrTWFyaywgUGVuY2lsLCBUcmFzaENhbiwgQ3Jvc3NNYXJrLCBQbHVzLCBXYXJuaW5nLCBTcGlubmVyLCBXcmVuY2ggfTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRGF0YVNldC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMjUvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgU2VsZWN0RGF0YVNvdXJjZVR5cGVzLCBTZWxlY3REYXRhU291cmNlVHlwZXNTdGF0dXMsIEZldGNoRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnLi4vRGF0YVNvdXJjZVR5cGVzL0RhdGFTb3VyY2VUeXBlc1NsaWNlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgRGF0YVNldE9wZW5IaXN0b3JpYW4gZnJvbSAnLi4vT3Blbkhpc3Rvcmlhbi9EYXRhU2V0T3Blbkhpc3Rvcmlhbic7XHJcbmltcG9ydCBEYXRhU2V0T3BlblhEQSBmcm9tICcuLi9PcGVuWERBL0RhdGFTZXRPcGVuWERBJztcclxuaW1wb3J0IERhdGFTZXRHbG9iYWxTZXR0aW5ncyBmcm9tICcuL1R5cGVzL0RhdGFTZXRHbG9iYWxTZXR0aW5ncyc7XHJcbmltcG9ydCBEYXRhU2V0U2FwcGhpcmUgZnJvbSAnLi4vU2FwcGhpcmUvRGF0YVNldFNhcHBoaXJlJztcclxuXHJcblxyXG5jb25zdCBEYXRhU2V0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IFJlY29yZDogVHJlbkRBUC5pRGF0YVNldCwgU2V0RGF0YVNldDogKHdzOiBUcmVuREFQLmlEYXRhU2V0KSA9PiB2b2lkIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhU291cmNlVHlwZXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlVHlwZXMpIGFzIFRyZW5EQVAuaURhdGFTb3VyY2VUeXBlW107XHJcbiAgICBjb25zdCBkc3RTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU291cmNlVHlwZXNTdGF0dXMpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRzdFN0YXR1cyAhPSAndW5pdGlhdGVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTb3VyY2VUeXBlcygpKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgZHN0U3RhdHVzXSk7XHJcblxyXG4gICAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ3NldHRpbmdzJyk7XHJcbiAgICBjb25zdCBkYXRhU291cmNlcyA9IEpTT04ucGFyc2UocHJvcHMuUmVjb3JkLkpTT05TdHJpbmcpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFic1wiIHN0eWxlPXt7cGFkZGluZzoxMH19PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoJ3NldHRpbmdzJykgfT5TZXR0aW5nczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZXMubWFwKChkcywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJuYXYtaXRlbSBcIiArIHN0eWxlcy53b3Jrc3BhY2V0YWJ9ICBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoaW5kZXgudG9TdHJpbmcoKSl9Pntkcy5EYXRhU291cmNlLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShwcm9wcy5SZWNvcmQuSlNPTlN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldERhdGFTZXQoeyAuLi5wcm9wcy5SZWNvcmQsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KGpzb24pIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+WDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0YWItcGFuZSBjb250YWluZXIgXCIrICh0YWIgPT09IFwic2V0dGluZ3NcIiA/ICdhY3RpdmUnIDogJ2ZhZGUnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGFTZXRHbG9iYWxTZXR0aW5ncyB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlcy5tYXAoKGRzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0YWItcGFuZSBjb250YWluZXIgXCIgKyAodGFiID09PSBpbmRleC50b1N0cmluZygpID8gJ2FjdGl2ZScgOiAnZmFkZScpfSBpZD17aW5kZXh9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhU291cmNlVHlwZXMuZmluZChkc3QgPT4gZHN0LklEID09PSBkcy5EYXRhU291cmNlLkRhdGFTb3VyY2VUeXBlSUQpPy5OYW1lID09PSBcIlRyZW5EQVBEQlwiID8gPERhdGFTZXRPcGVuWERBIHsuLi5wcm9wc30gRGF0YT17ZHN9IEluZGV4PXtpbmRleH0vPjogbnVsbCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRzLkRhdGFTb3VyY2UuRGF0YVNvdXJjZVR5cGVJRCk/Lk5hbWUgPT09IFwiU2FwcGhpcmVcIiA/IDxEYXRhU2V0U2FwcGhpcmUgey4uLnByb3BzfSBEYXRhPXtkc30gSW5kZXg9e2luZGV4fSAvPiA6IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRzLkRhdGFTb3VyY2UuRGF0YVNvdXJjZVR5cGVJRCk/Lk5hbWUgPT09IFwiT3Blbkhpc3RvcmlhblwiID8gPERhdGFTZXRPcGVuSGlzdG9yaWFuIHsuLi5wcm9wc30gRGF0YT17ZHN9IEluZGV4PXtpbmRleH0gLz4gOiBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVNldDsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRGF0YVNldEdsb2JhbFNldHRpbmdzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8yNy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IElucHV0LCBDaGVja0JveCwgRW51bUNoZWNrQm94ZXMgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IHsgUGx1cyB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFNlbGVjdERhdGFTb3VyY2VzU3RhdHVzLCBTZWxlY3REYXRhU291cmNlc0FsbFB1YmxpY05vdFVzZXIsIFNlbGVjdERhdGFTb3VyY2VzRm9yVXNlciwgRmV0Y2hEYXRhU291cmNlcyB9IGZyb20gJy4uLy4uL0RhdGFTb3VyY2VzL0RhdGFTb3VyY2VzU2xpY2UnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNlbGVjdERhdGFTb3VyY2VUeXBlcywgU2VsZWN0RGF0YVNvdXJjZVR5cGVzU3RhdHVzLCBGZXRjaERhdGFTb3VyY2VUeXBlcyB9IGZyb20gJy4uLy4uL0RhdGFTb3VyY2VUeXBlcy9EYXRhU291cmNlVHlwZXNTbGljZSc7XHJcbmltcG9ydCB7IFNlbGVjdE5ld1hEQURhdGFTZXQgfSBmcm9tICcuLy4uL0RhdGFTZXRzU2xpY2UnO1xyXG5pbXBvcnQgeyBTZWxlY3ROZXdPcGVuSGlzdG9yaWFuRGF0YVNldCB9IGZyb20gJy4uLy4uL09wZW5IaXN0b3JpYW4vT3Blbkhpc3RvcmlhblNsaWNlJztcclxuaW1wb3J0IHsgTmV3U2FwcGhpcmVEYXRhU2V0IH0gZnJvbSAnLi4vLi4vU2FwcGhpcmUvU2FwcGhpcmVTbGljZSc7XHJcblxyXG5jb25zdCBEYXRhU2V0R2xvYmFsU2V0dGluZ3M6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHsgUmVjb3JkOiBUcmVuREFQLmlEYXRhU2V0LCBTZXREYXRhU2V0OiAod3M6IFRyZW5EQVAuaURhdGFTZXQpID0+IHZvaWQgfT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3REYXRhU291cmNlc0ZvclVzZXIoc3RhdGUsIHVzZXJOYW1lKSkgYXMgVHJlbkRBUC5pRGF0YVNvdXJjZVtdO1xyXG4gICAgY29uc3QgcHVibGljRGF0YVNvdXJjZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdERhdGFTb3VyY2VzQWxsUHVibGljTm90VXNlcihzdGF0ZSwgdXNlck5hbWUpKSBhcyBUcmVuREFQLmlEYXRhU291cmNlW107XHJcbiAgICBjb25zdCBkc1N0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VzU3RhdHVzKTtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VUeXBlcyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VUeXBlcykgYXMgVHJlbkRBUC5pRGF0YVNvdXJjZVR5cGVbXTtcclxuICAgIGNvbnN0IGRzdFN0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTb3VyY2VUeXBlc1N0YXR1cyk7XHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRzU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIGRzU3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNvdXJjZXMoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkc1N0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRzdFN0YXR1cyAhPSAndW5pdGlhdGVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTb3VyY2VUeXBlcygpKTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgZHN0U3RhdHVzXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkKGZpZWxkOiBrZXlvZiAoVHJlbkRBUC5pRGF0YVNldCkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoZmllbGQgPT0gJ05hbWUnKVxyXG4gICAgICAgICAgICByZXR1cm4gcHJvcHMuUmVjb3JkLk5hbWUgIT0gbnVsbCAmJiBwcm9wcy5SZWNvcmQuTmFtZS5sZW5ndGggPiAwICYmIHByb3BzLlJlY29yZC5OYW1lLmxlbmd0aCA8PSAyMDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBBZGREUyhkYXRhU291cmNlOiBUcmVuREFQLmlEYXRhU291cmNlKSB7XHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHByb3BzLlJlY29yZC5KU09OU3RyaW5nKTtcclxuICAgICAgICBqc29uLnB1c2goeyBEYXRhU291cmNlOiBkYXRhU291cmNlLCBEYXRhOiBHZXREUyhkYXRhU291cmNlKSB9KTtcclxuICAgICAgICBwcm9wcy5TZXREYXRhU2V0KHsgLi4ucHJvcHMuUmVjb3JkLCBKU09OU3RyaW5nOiBKU09OLnN0cmluZ2lmeShqc29uKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXREUyhkYXRhU291cmNlOiBUcmVuREFQLmlEYXRhU291cmNlKSB7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRhdGFTb3VyY2UuRGF0YVNvdXJjZVR5cGVJRCkuTmFtZSA9PT0gXCJUcmVuREFQREJcIilcclxuICAgICAgICAgICAgcmV0dXJuIFNlbGVjdE5ld1hEQURhdGFTZXQoKTtcclxuICAgICAgICBpZiAoZGF0YVNvdXJjZVR5cGVzLmZpbmQoZHN0ID0+IGRzdC5JRCA9PT0gZGF0YVNvdXJjZS5EYXRhU291cmNlVHlwZUlEKS5OYW1lID09PSBcIlNhcHBoaXJlXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBOZXdTYXBwaGlyZURhdGFTZXQoKTtcclxuICAgICAgICBpZiAoZGF0YVNvdXJjZVR5cGVzLmZpbmQoZHN0ID0+IGRzdC5JRCA9PT0gZGF0YVNvdXJjZS5EYXRhU291cmNlVHlwZUlEKS5OYW1lID09PSBcIk9wZW5IaXN0b3JpYW5cIilcclxuICAgICAgICAgICAgcmV0dXJuIFNlbGVjdE5ld09wZW5IaXN0b3JpYW5EYXRhU2V0KCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaURhdGFTZXQ+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGaWVsZD1cIk5hbWVcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IHByb3BzLlNldERhdGFTZXQocmVjb3JkKX0gVmFsaWQ9e3ZhbGlkfSAvPlxyXG4gICAgICAgICAgICA8UmVsYXRpdmVEYXRlUmFuZ2VQaWNrZXIgUmVjb3JkPXtwcm9wcy5SZWNvcmR9IFNldHRlcj17KHJlY29yZCkgPT4gcHJvcHMuU2V0RGF0YVNldChyZWNvcmQpfSAvPlxyXG4gICAgICAgICAgICB7Lyo8RGF0ZVJhbmdlUGlja2VyPFRyZW5EQVAuaURhdGFTZXQ+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGcm9tRmllbGQ9XCJGcm9tXCIgVG9GaWVsZD1cIlRvXCIgU2V0dGVyPXtwcm9wcy5TZXREYXRhU2V0fSBMYWJlbD1cIkRhdGUgUmFuZ2VcIiAvPiovfVxyXG4gICAgICAgICAgICA8RW51bUNoZWNrQm94ZXM8VHJlbkRBUC5pRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5SZWNvcmR9IEZpZWxkPVwiSG91cnNcIiBMYWJlbD1cIkhvdXIgb2YgRGF5XCIgU2V0dGVyPXsocmVjb3JkKSA9PiBwcm9wcy5TZXREYXRhU2V0KHJlY29yZCl9IEVudW09e0FycmF5LmZyb20oeyBsZW5ndGg6IDI0IH0sIChfLCBpKSA9PiBpLnRvU3RyaW5nKCkpfSAvPlxyXG4gICAgICAgICAgICA8RW51bUNoZWNrQm94ZXM8VHJlbkRBUC5pRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5SZWNvcmR9IEZpZWxkPVwiRGF5c1wiIExhYmVsPVwiRGF5IG9mIFdlZWtcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IHByb3BzLlNldERhdGFTZXQocmVjb3JkKX0gRW51bT17WydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddfSAvPlxyXG4gICAgICAgICAgICA8RW51bUNoZWNrQm94ZXM8VHJlbkRBUC5pRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5SZWNvcmR9IEZpZWxkPVwiV2Vla3NcIiBMYWJlbD1cIldlZWsgb2YgWWVhclwiIFNldHRlcj17KHJlY29yZCkgPT4gcHJvcHMuU2V0RGF0YVNldChyZWNvcmQpfSBFbnVtPXtBcnJheS5mcm9tKHsgbGVuZ3RoOiA1MyB9LCAoXywgaSkgPT4gaS50b1N0cmluZygpKX0gLz5cclxuICAgICAgICAgICAgPEVudW1DaGVja0JveGVzPFRyZW5EQVAuaURhdGFTZXQ+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGaWVsZD1cIk1vbnRoc1wiIExhYmVsPVwiTW9udGggb2YgWWVhclwiIFNldHRlcj17KHJlY29yZCkgPT4gcHJvcHMuU2V0RGF0YVNldChyZWNvcmQpfSBFbnVtPXtbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXX0gLz5cclxuICAgICAgICAgICAgPENoZWNrQm94PFRyZW5EQVAuaURhdGFTZXQ+IFJlY29yZD17cHJvcHMuUmVjb3JkfSBGaWVsZD1cIlB1YmxpY1wiIExhYmVsPSdHbG9iYWwnIFNldHRlcj17KHJlY29yZCkgPT4gcHJvcHMuU2V0RGF0YVNldChyZWNvcmQpfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1BsdXN9IERhdGFTb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1oZWFkZXJcIj5Zb3VyIERhdGFTb3VyY2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhU291cmNlcy5tYXAoZHMgPT4gPGEga2V5PXtkcy5JRH0gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEFkZERTKGRzKX0+e2RzLk5hbWV9ICh7ZGF0YVNvdXJjZVR5cGVzLmZpbmQoZHN0ID0+IGRzdC5JRCA9PT0gZHMuRGF0YVNvdXJjZVR5cGVJRCk/Lk5hbWV9KTwvYT4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWhlYWRlclwiPkdsb2JhbCBEYXRhU291cmNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHVibGljRGF0YVNvdXJjZXMubWFwKGRzID0+IDxhIGtleT17ZHMuSUR9IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBBZGREUyhkcyl9Pntkcy5OYW1lfSAoe2RhdGFTb3VyY2VUeXBlcy5maW5kKGRzdCA9PiBkc3QuSUQgPT09IGRzLkRhdGFTb3VyY2VUeXBlSUQpPy5OYW1lfSk8L2E+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVNldEdsb2JhbFNldHRpbmdzO1xyXG5cclxuY29uc3QgUmVsYXRpdmVEYXRlUmFuZ2VQaWNrZXIgPSAocHJvcHM6IHsgUmVjb3JkOiBUcmVuREFQLmlEYXRhU2V0LCBTZXR0ZXI6IChyZWNvcmQ6IFRyZW5EQVAuaURhdGFTZXQpID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NvbnRleHQsIHNldENvbnRleHRdID0gUmVhY3QudXNlU3RhdGU8J1JlbGF0aXZlJyB8ICdGaXhlZCBEYXRlcyc+KHByb3BzLlJlY29yZC5Db250ZXh0KTtcclxuICAgIGNvbnN0IFtyZWxhdGl2ZVZhbHVlLCBzZXRSZWxhdGl2ZVZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4ocHJvcHMuUmVjb3JkLlJlbGF0aXZlVmFsdWUpO1xyXG4gICAgY29uc3QgW3JlbGF0aXZlV2luZG93LCBzZXRSZWxhdGl2ZVdpbmRvd10gPSBSZWFjdC51c2VTdGF0ZTwnRGF5JyB8ICdXZWVrJyB8ICdNb250aCcgfCAnWWVhcic+KHByb3BzLlJlY29yZC5SZWxhdGl2ZVdpbmRvdylcclxuICAgIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHByb3BzLlJlY29yZC5Gcm9tKTtcclxuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4ocHJvcHMuUmVjb3JkLlRvKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb250ZXh0ICE9PSBwcm9wcy5SZWNvcmQuQ29udGV4dCkgc2V0Q29udGV4dChwcm9wcy5SZWNvcmQuQ29udGV4dCk7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlVmFsdWUgIT09IHByb3BzLlJlY29yZC5SZWxhdGl2ZVZhbHVlKSBzZXRSZWxhdGl2ZVZhbHVlKHByb3BzLlJlY29yZC5SZWxhdGl2ZVZhbHVlKTtcclxuICAgICAgICBpZiAocmVsYXRpdmVXaW5kb3cgIT09IHByb3BzLlJlY29yZC5SZWxhdGl2ZVdpbmRvdykgc2V0UmVsYXRpdmVXaW5kb3cocHJvcHMuUmVjb3JkLlJlbGF0aXZlV2luZG93KTtcclxuICAgICAgICBpZiAoc3RhcnREYXRlICE9PSBwcm9wcy5SZWNvcmQuRnJvbSkgc2V0U3RhcnREYXRlKHByb3BzLlJlY29yZC5Gcm9tKTtcclxuICAgICAgICBpZiAoZW5kRGF0ZSAhPT0gcHJvcHMuUmVjb3JkLlRvKSBzZXRFbmREYXRlKHByb3BzLlJlY29yZC5Ubyk7XHJcbiAgICB9LCBbcHJvcHMuUmVjb3JkXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY29udGV4dCAhPT0gcHJvcHMuUmVjb3JkLkNvbnRleHQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UmVjb3JkID0geyAuLi5wcm9wcy5SZWNvcmQgfTtcclxuICAgICAgICAgICAgbmV3UmVjb3JkLkNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIobmV3UmVjb3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29udGV4dF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlbGF0aXZlVmFsdWUgIT09IHByb3BzLlJlY29yZC5SZWxhdGl2ZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlY29yZCA9IHsgLi4ucHJvcHMuUmVjb3JkIH07XHJcbiAgICAgICAgICAgIG5ld1JlY29yZC5SZWxhdGl2ZVZhbHVlID0gcmVsYXRpdmVWYWx1ZTtcclxuICAgICAgICAgICAgcHJvcHMuU2V0dGVyKG5ld1JlY29yZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JlbGF0aXZlVmFsdWVdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZWxhdGl2ZVdpbmRvdyAhPT0gcHJvcHMuUmVjb3JkLlJlbGF0aXZlV2luZG93KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlY29yZCA9IHsgLi4ucHJvcHMuUmVjb3JkIH07XHJcbiAgICAgICAgICAgIG5ld1JlY29yZC5SZWxhdGl2ZVdpbmRvdyA9IHJlbGF0aXZlV2luZG93O1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIobmV3UmVjb3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVsYXRpdmVXaW5kb3ddKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdGFydERhdGUgIT09IHByb3BzLlJlY29yZC5Gcm9tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlY29yZCA9IHsgLi4ucHJvcHMuUmVjb3JkIH07XHJcbiAgICAgICAgICAgIG5ld1JlY29yZC5Gcm9tID0gc3RhcnREYXRlO1xyXG4gICAgICAgICAgICBwcm9wcy5TZXR0ZXIobmV3UmVjb3JkKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc3RhcnREYXRlXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZW5kRGF0ZSAhPT0gcHJvcHMuUmVjb3JkLlRvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlY29yZCA9IHsgLi4ucHJvcHMuUmVjb3JkIH07XHJcbiAgICAgICAgICAgIG5ld1JlY29yZC5UbyA9IGVuZERhdGU7XHJcbiAgICAgICAgICAgIHByb3BzLlNldHRlcihuZXdSZWNvcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtlbmREYXRlXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFNob3dDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb250ZXh0ID09ICdSZWxhdGl2ZScpXHJcbiAgICAgICAgICAgIHJldHVybiBTaG93UmVsYXRpdmUoKTtcclxuICAgICAgICBlbHNlIHJldHVybiBTaG93Rml4ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTaG93UmVsYXRpdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaW1lIFdpbmRvdyBTaXplPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3JlbGF0aXZlVmFsdWV9IHR5cGU9J251bWJlcicgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWxhdGl2ZVZhbHVlKHBhcnNlRmxvYXQoZXZ0LnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGltZSBXaW5kb3cgVW5pdHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtyZWxhdGl2ZVdpbmRvd30gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlbGF0aXZlV2luZG93KGV2dC50YXJnZXQudmFsdWUgYXMgYW55KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0RheSc+RGF5KHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1dlZWsnPldlZWsocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTW9udGgnPk1vbnRoKHMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J1llYXInPlllYXIocyk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgU2hvd0ZpeGVkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhcnQgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtzdGFydERhdGV9IHR5cGU9J2RhdGUnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBvbkNoYW5nZT17KGV2dCkgPT4gc2V0U3RhcnREYXRlKGV2dC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW5kIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17ZW5kRGF0ZX0gdHlwZT0nZGF0ZScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRFbmREYXRlKGV2dC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlRpbWUgQ29udGV4dDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17Y29udGV4dH0gb25DaGFuZ2U9eyhldnQpID0+IHNldENvbnRleHQoZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdSZWxhdGl2ZSc+UmVsYXRpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdGaXhlZCBEYXRlcyc+Rml4ZWQgRGF0ZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1Nob3dDb250ZW50KCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU2V0T3Blbkhpc3Rvcmlhbi50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDMvMDMvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCwgUmVkdXggfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyBTZWxlY3QsIEFycmF5Q2hlY2tCb3hlcywgQXJyYXlNdWx0aVNlbGVjdCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNlbGVjdE9wZW5IaXN0b3JpYW4sIEZldGNoT3Blbkhpc3RvcmlhbiB9IGZyb20gJy4vT3Blbkhpc3RvcmlhblNsaWNlJztcclxuaW1wb3J0IHsgT3Blbkhpc3RvcmlhbiB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvYXBwbGljYXRpb24tdHlwaW5ncyc7XHJcblxyXG5jb25zdCBEYXRhU2V0T3Blbkhpc3RvcmlhbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBSZWNvcmQ6IFRyZW5EQVAuaURhdGFTZXQsIERhdGE6IHsgRGF0YVNvdXJjZTogVHJlbkRBUC5pRGF0YVNvdXJjZSwgRGF0YTogVHJlbkRBUC5pT3Blbkhpc3RvcmlhbkRhdGFTZXQgfSwgSW5kZXg6IG51bWJlciwgU2V0RGF0YVNldDogKHdzOiBUcmVuREFQLmlEYXRhU2V0KSA9PiB2b2lkIH0+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBkZXZpY2VzOiBSZWR1eC5PcGVuSGlzdG9yaWFuU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5IaXN0b3JpYW4oc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIFVwZGF0ZURTKC4uLnBhcmFtczogeyBmaWVsZDoga2V5b2YgVHJlbkRBUC5pT3Blbkhpc3RvcmlhbkRhdGFTZXQsIHZhbHVlOiBhbnkgfVtdKSB7XHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHByb3BzLlJlY29yZC5KU09OU3RyaW5nKTtcclxuICAgICAgICBqc29uW3Byb3BzLkluZGV4XS5EYXRhID0geyAuLi5wcm9wcy5EYXRhLkRhdGEgfTtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwYXJhbXMpXHJcbiAgICAgICAgICAgIGpzb25bcHJvcHMuSW5kZXhdLkRhdGFbcGFyYW1zW2luZGV4XS5maWVsZF0gPSBwYXJhbXNbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIHByb3BzLlNldERhdGFTZXQoeyAuLi5wcm9wcy5SZWNvcmQsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KGpzb24pIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRldmljZXMgIT0gdW5kZWZpbmVkICYmIGRldmljZXM/LlN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBkZXZpY2VzPy5TdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hPcGVuSGlzdG9yaWFuKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUR9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkZXZpY2VzLlN0YXR1c10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheU11bHRpU2VsZWN0PFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5EYXRhU2V0PiBTdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDQ1MCB9fSBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gT3B0aW9ucz17Wy4uLm5ldyBTZXQoZGV2aWNlcz8uTWVhc3VyZW1lbnRzLmZpbHRlcihtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLkRhdGEuRGF0YS5JbnN0YW5jZSAhPT0gJ05vbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0uSUQuaW5jbHVkZXMocHJvcHMuRGF0YS5EYXRhLkluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSkubWFwKG0gPT4gbS5EZXZpY2UpID8/IFtdKV0ubWFwKG0gPT4gKHsgVmFsdWU6IG0sIExhYmVsOiBtIH0pKSB9IEZpZWxkPVwiRGV2aWNlc1wiIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0RldmljZXMnLCB2YWx1ZTogcmVjb3JkLkRldmljZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdDxUcmVuREFQLmlPcGVuSGlzdG9yaWFuRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IEZpZWxkPVwiSW5zdGFuY2VcIiBPcHRpb25zPXtbeyBWYWx1ZTogJ05vbmUnLCBMYWJlbDogJ05vbmUnfV0uY29uY2F0KGRldmljZXM/Lkluc3RhbmNlcy5tYXAobSA9PiAoeyBWYWx1ZTogbS5BY3JvbnltLCBMYWJlbDogbS5BY3JvbnltIH0pKSA/PyBbXSl9IFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0luc3RhbmNlJywgdmFsdWU6IHJlY29yZC5JbnN0YW5jZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0PFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5EYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gRmllbGQ9XCJBZ2dyZWdhdGVcIiBPcHRpb25zPXtbeyBWYWx1ZTogJzFtJywgTGFiZWw6ICdNaW51dGUnIH0sIHsgVmFsdWU6ICcxaCcsIExhYmVsOiAnSG91cicgfSwgeyBWYWx1ZTogJzFkJywgTGFiZWw6ICdEYXknIH0sIHsgVmFsdWU6ICcxTScsIExhYmVsOiAnTW9udGgnIH1dfSBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdBZ2dyZWdhdGUnLCB2YWx1ZTogcmVjb3JkLkFnZ3JlZ2F0ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlDaGVja0JveGVzPFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5EYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gQ2hlY2tib3hlcz17W3sgSUQ6ICdBJywgTGFiZWw6ICdBJyB9LCB7IElEOiAnQicsIExhYmVsOiAnQicgfSwgeyBJRDogJ0MnLCBMYWJlbDogJ0MnIH0sIHsgSUQ6ICdOJywgTGFiZWw6ICdOJyB9LCB7IElEOiAnKycsIExhYmVsOiAnUG9zJyB9LCB7IElEOiAnMCcsIExhYmVsOiAnWmVybycgfSwgeyBJRDogJy0nLCBMYWJlbDogJ05lZycgfSwgeyBJRDogJ05vbmUnLCBMYWJlbDogJ05vbmUnIH1dfSBGaWVsZD1cIlBoYXNlc1wiIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ1BoYXNlcycsIHZhbHVlOiByZWNvcmQuUGhhc2VzIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheUNoZWNrQm94ZXM8VHJlbkRBUC5pT3Blbkhpc3RvcmlhbkRhdGFTZXQ+IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBDaGVja2JveGVzPXtbeyBJRDogJ0lQSE0nLCBMYWJlbDogJ0N1cnJlbnQgTWFnbml0dWRlJyB9LCB7IElEOiAnSVBIQScsIExhYmVsOiAnQ3VycmVudCBBbmdsZScgfSwgeyBJRDogJ1ZQSE0nLCBMYWJlbDogJ1ZvbHRhZ2UgTWFnbml0dWRlJyB9LCB7IElEOiAnVlBIQScsIExhYmVsOiAnVm9sdGFnZSBBbmdsZScgfSwgeyBJRDogJ0ZSRVEnLCBMYWJlbDogJ0ZyZXF1ZW5jeScgfSwgeyBJRDogJ0RGRFQnLCBMYWJlbDogJ0RGRFQnIH0sIHsgSUQ6ICdBTE9HJywgTGFiZWw6ICdBbmFsb2cnIH0sIHsgSUQ6ICdESUdJJywgTGFiZWw6ICdEaWdpdGFsJyB9LCB7IElEOiAnQ0FMQycsIExhYmVsOiAnQ2FsY3VsYXRlZCcgfV19IEZpZWxkPVwiVHlwZXNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdUeXBlcycsIHZhbHVlOiByZWNvcmQuVHlwZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0T3Blbkhpc3RvcmlhbjsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgRGF0YVNldE9wZW5YREEudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA4LzE2LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgU2VsZWN0LCBBcnJheUNoZWNrQm94ZXMsIEFycmF5TXVsdGlTZWxlY3QgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBTZWxlY3RPcGVuWERBLCBGZXRjaE9wZW5YREEgfSBmcm9tICcuLi9PcGVuWERBL09wZW5YREFTbGljZSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IERhdGFTZXRPcGVuWERBOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7IFJlY29yZDogVHJlbkRBUC5pRGF0YVNldCwgRGF0YTogeyBEYXRhU291cmNlOiBUcmVuREFQLmlEYXRhU291cmNlLCBEYXRhOiBUcmVuREFQLmlYREFEYXRhU2V0IH0sIEluZGV4OiBudW1iZXIsIFNldERhdGFTZXQ6ICh3czogVHJlbkRBUC5pRGF0YVNldCkgPT4gdm9pZCB9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgcGhhc2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RPcGVuWERBKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdQaGFzZScpKTtcclxuICAgIGNvbnN0IG1ldGVycyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0T3BlblhEQShzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnTWV0ZXInKSk7XHJcbiAgICBjb25zdCBhc3NldHMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdE9wZW5YREEoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ0Fzc2V0JykpO1xyXG4gICAgY29uc3QgY2hhbm5lbEdyb3VwcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0T3BlblhEQShzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnQ2hhbm5lbEdyb3VwJykpO1xyXG4gICAgY29uc3QgY2hhbm5lbFR5cGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RPcGVuWERBKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdDaGFubmVsR3JvdXBUeXBlJykpO1xyXG5cclxuICAgIGZ1bmN0aW9uIFVwZGF0ZURTKC4uLnBhcmFtczogeyBmaWVsZDoga2V5b2YgVHJlbkRBUC5pWERBRGF0YVNldCwgdmFsdWU6IGFueSB9W10pIHtcclxuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UocHJvcHMuUmVjb3JkLkpTT05TdHJpbmcpO1xyXG4gICAgICAgIGpzb25bcHJvcHMuSW5kZXhdLkRhdGEgPSB7IC4uLnByb3BzLkRhdGEuRGF0YSB9O1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4IGluIHBhcmFtcylcclxuICAgICAgICAgICAganNvbltwcm9wcy5JbmRleF0uRGF0YVtwYXJhbXNbaW5kZXhdLmZpZWxkXSA9IHBhcmFtc1tpbmRleF0udmFsdWU7XHJcbiAgICAgICAgcHJvcHMuU2V0RGF0YVNldCh7IC4uLnByb3BzLlJlY29yZCwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocGhhc2VzICE9IHVuZGVmaW5lZCAmJiBwaGFzZXM/LlN0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBwaGFzZXM/LlN0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaE9wZW5YREEoeyBkYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgdGFibGU6ICdQaGFzZScgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgcGhhc2VzPy5TdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZXRlcnMgIT0gdW5kZWZpbmVkICYmIG1ldGVycz8uU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIG1ldGVycz8uU3RhdHVzICE9ICdjaGFuZ2VkJykgcmV0dXJuO1xyXG4gICAgICAgIGRpc3BhdGNoKEZldGNoT3BlblhEQSh7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCB0YWJsZTogJ01ldGVyJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBtZXRlcnM/LlN0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFzc2V0cyAhPSB1bmRlZmluZWQgJiYgYXNzZXRzPy5TdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgYXNzZXRzPy5TdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hPcGVuWERBKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsIHRhYmxlOiAnQXNzZXQnIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGFzc2V0cz8uU3RhdHVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY2hhbm5lbEdyb3VwcyAhPSB1bmRlZmluZWQgJiYgY2hhbm5lbEdyb3Vwcz8uU3RhdHVzICE9ICd1bml0aWF0ZWQnICYmIGNoYW5uZWxHcm91cHM/LlN0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaE9wZW5YREEoeyBkYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgdGFibGU6ICdDaGFubmVsR3JvdXAnIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGNoYW5uZWxHcm91cHM/LlN0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYW5uZWxUeXBlcyAhPSB1bmRlZmluZWQgJiYgY2hhbm5lbFR5cGVzPy5TdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgY2hhbm5lbFR5cGVzPy5TdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hPcGVuWERBKHsgZGF0YVNvdXJjZUlEOiBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsIHRhYmxlOiAnQ2hhbm5lbEdyb3VwVHlwZScgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgY2hhbm5lbFR5cGVzPy5TdGF0dXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBvbkNsaWNrPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihgJHtob21lUGF0aH1RdWlja1ZpZXdPcGVuWERBYCwgYF9ibGFua2ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdRdWlja1ZpZXdPcGVuWERBJywgSlNPTi5zdHJpbmdpZnkoeyBEYXRhU291cmNlSUQ6IHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgUG9zdERhdGE6IENyZWF0ZVBvc3QocHJvcHMuUmVjb3JkLCBwcm9wcy5EYXRhLkRhdGEpIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5RdWljayBWaWV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdDxUcmVuREFQLmlYREFEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gRmllbGQ9XCJBZ2dyZWdhdGVcIiBPcHRpb25zPXtbeyBWYWx1ZTogJycsIExhYmVsOiAnTm9uZScgfSwgeyBWYWx1ZTogJzFoJywgTGFiZWw6ICdIb3VyJyB9LCB7IFZhbHVlOiAnMWQnLCBMYWJlbDogJ0RheScgfSwgeyBWYWx1ZTogJzF3JywgTGFiZWw6ICdXZWVrJyB9XX0gU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnQWdncmVnYXRlJywgdmFsdWU6IHJlY29yZC5BZ2dyZWdhdGUgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdDxUcmVuREFQLmlYREFEYXRhU2V0PiBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gRmllbGQ9XCJCeVwiIE9wdGlvbnM9e1t7IFZhbHVlOiAnTWV0ZXInLCBMYWJlbDogJ01ldGVyJyB9LCB7IFZhbHVlOiAnQXNzZXQnLCBMYWJlbDogJ0Fzc2V0JyB9XX0gU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnQnknLCB2YWx1ZTogcmVjb3JkLkJ5IH0sIHsgZmllbGQ6ICdJRHMnLCB2YWx1ZTogW10gfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5TXVsdGlTZWxlY3Q8VHJlbkRBUC5pWERBRGF0YVNldD4gU3R5bGU9e3sgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA1NjAgfX0gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IE9wdGlvbnM9eyhwcm9wcy5EYXRhLkRhdGEuQnkgPT0gJ01ldGVyJyA/IG1ldGVycz8uRGF0YS5tYXAobSA9PiAoeyBWYWx1ZTogbS5JRCwgTGFiZWw6IG0uTmFtZSB9KSkgOiBhc3NldHM/LkRhdGEubWFwKG0gPT4gKHsgVmFsdWU6IG0uSUQsIExhYmVsOiBtLkFzc2V0TmFtZSB9KSkpID8/IFtdfSBGaWVsZD1cIklEc1wiIFNldHRlcj17KHJlY29yZCkgPT4gVXBkYXRlRFMoeyBmaWVsZDogJ0lEcycsIHZhbHVlOiByZWNvcmQuSURzIH0pfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJheUNoZWNrQm94ZXM8VHJlbkRBUC5pWERBRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IENoZWNrYm94ZXM9e3BoYXNlcz8uRGF0YS5tYXAobSA9PiAoeyBJRDogbS5JRCwgTGFiZWw6IG0uTmFtZSB9KSkgPz8gW119IEZpZWxkPVwiUGhhc2VzXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnUGhhc2VzJywgdmFsdWU6IHJlY29yZC5QaGFzZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5Q2hlY2tCb3hlczxUcmVuREFQLmlYREFEYXRhU2V0PiBMYWJlbD1cIlF1aWNrIFNlbGVjdGlvblwiIFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBDaGVja2JveGVzPXtjaGFubmVsR3JvdXBzPy5EYXRhLm1hcChtID0+ICh7IElEOiBtLklELCBMYWJlbDogbS5OYW1lIH0pKSA/PyBbXX0gRmllbGQ9XCJHcm91cHNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkR3JvdXBzID0gcHJvcHMuRGF0YS5EYXRhLkdyb3VwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZEdyb3Vwcy5sZW5ndGggPiByZWNvcmQuR3JvdXBzLmxlbmd0aCkgeyAvLyBzb21ldGhpbmcgd2FzIHRha2VuIG91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSBvbGRHcm91cHMubWFwKHggPT4gcmVjb3JkLkdyb3Vwcy5pbmRleE9mKHgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gYS5pbmRleE9mKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFubmVsR3JvdXBJRCA9IG9sZEdyb3Vwc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdhID0gcHJvcHMuRGF0YS5EYXRhLlR5cGVzLm1hcCh0ID0+IGNoYW5uZWxUeXBlcy5EYXRhLmZpbmQoY3QgPT4gY3QuSUQgPT09IHQpKS5maWx0ZXIodCA9PiB0LkNoYW5uZWxHcm91cElEICE9PSBvbGRHcm91cHNbaV0pLm1hcCh0ID0+IHQuSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlRFMoeyBmaWVsZDogJ0dyb3VwcycsIHZhbHVlOiByZWNvcmQuR3JvdXBzIH0sIHsgZmllbGQ6ICdUeXBlcycsIHZhbHVlOiBuZXdhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9sZEdyb3Vwcy5sZW5ndGggPCByZWNvcmQuR3JvdXBzLmxlbmd0aCkgeyAvLyBzb21ldGhpbmcgd2FzIHB1dCBpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSByZWNvcmQuR3JvdXBzLm1hcCh4ID0+IG9sZEdyb3Vwcy5pbmRleE9mKHgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gYS5pbmRleE9mKC0xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFubmVsR3JvdXBJRCA9IHJlY29yZC5Hcm91cHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3YSA9IFsuLi5wcm9wcy5EYXRhLkRhdGEuVHlwZXMsIC4uLmNoYW5uZWxUeXBlcy5EYXRhLmZpbHRlcih0ID0+IHQuQ2hhbm5lbEdyb3VwSUQgPT09IGNoYW5uZWxHcm91cElEKS5tYXAodCA9PiB0LklEKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVEUyh7IGZpZWxkOiAnR3JvdXBzJywgdmFsdWU6IHJlY29yZC5Hcm91cHMgfSwgeyBmaWVsZDogJ1R5cGVzJywgdmFsdWU6IG5ld2EgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7ICAvLyB0aGlzIHByb2JhYmx5IGNhbid0IGhhcHBlbiwgYnV0IG1lYW5zIG5vdGhpbmcgY2hhbmdlZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlNdWx0aVNlbGVjdDxUcmVuREFQLmlYREFEYXRhU2V0PiBTdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDUyMCB9fSBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gT3B0aW9ucz17Y2hhbm5lbFR5cGVzPy5EYXRhLm1hcChtID0+ICh7IFZhbHVlOiBtLklELCBMYWJlbDogbS5EaXNwbGF5TmFtZSB9KSkgPz8gW119IEZpZWxkPVwiVHlwZXNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdUeXBlcycsIHZhbHVlOiByZWNvcmQuVHlwZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENyZWF0ZVBvc3QoZGF0YVNldDogVHJlbkRBUC5pRGF0YVNldCwgZGF0YTogVHJlbkRBUC5pWERBRGF0YVNldClcclxue1xyXG4gICAgbGV0IHN0YXJ0VGltZSA9IG1vbWVudChkYXRhU2V0LkZyb20pO1xyXG4gICAgbGV0IGVuZFRpbWUgPSBtb21lbnQoZGF0YVNldC5Ubyk7XHJcbiAgICBpZiAoZGF0YVNldC5Db250ZXh0ID09IFwiUmVsYXRpdmVcIikge1xyXG4gICAgICAgIGVuZFRpbWUgPSBtb21lbnQoKTtcclxuICAgICAgICBzdGFydFRpbWUgPSBtb21lbnQoKTtcclxuICAgICAgICBpZiAoZGF0YVNldC5SZWxhdGl2ZVdpbmRvdyA9PSBcIkRheVwiKVxyXG4gICAgICAgICAgICBzdGFydFRpbWUuYWRkKCdkYXlzJywgLWRhdGFTZXQuUmVsYXRpdmVWYWx1ZSk7XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YVNldC5SZWxhdGl2ZVdpbmRvdyA9PSBcIldlZWtcIilcclxuICAgICAgICAgICAgc3RhcnRUaW1lLmFkZCgnZGF5cycsIC1kYXRhU2V0LlJlbGF0aXZlVmFsdWUgKiA3KTtcclxuICAgICAgICBlbHNlIGlmIChkYXRhU2V0LlJlbGF0aXZlV2luZG93ID09IFwiTW9udGhcIilcclxuICAgICAgICAgICAgc3RhcnRUaW1lLmFkZCgnbW9udGhzJywgLWRhdGFTZXQuUmVsYXRpdmVWYWx1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzdGFydFRpbWUuYWRkKCd5ZWFycycsIC1kYXRhU2V0LlJlbGF0aXZlVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgQnkgOiBkYXRhLkJ5LFxyXG4gICAgICAgIElEcyA6IGRhdGEuSURzLFxyXG4gICAgICAgIFBoYXNlcyA6IGRhdGEuUGhhc2VzLFxyXG4gICAgICAgIEdyb3VwcyA6IGRhdGEuR3JvdXBzLFxyXG4gICAgICAgIFR5cGVzIDogZGF0YS5UeXBlcyxcclxuICAgICAgICBTdGFydFRpbWUgOiBzdGFydFRpbWUsXHJcbiAgICAgICAgRW5kVGltZSA6IGVuZFRpbWUsXHJcbiAgICAgICAgSG91cnMgOiBkYXRhU2V0LkhvdXJzLFxyXG4gICAgICAgIERheXMgOiBkYXRhU2V0LkRheXMsXHJcbiAgICAgICAgV2Vla3M6IGRhdGFTZXQuV2Vla3MsXHJcbiAgICAgICAgTW9udGhzOiBkYXRhU2V0Lk1vbnRocyxcclxuICAgICAgICBBZ2dyZWdhdGU6IGRhdGEuQWdncmVnYXRlXHJcbiAgICB9O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVNldE9wZW5YREE7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERhdGFTZXRTYXBwaGlyZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMTIvMDMvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCwgUmVkdXggfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyBTZWxlY3QsIEFycmF5Q2hlY2tCb3hlcywgQXJyYXlNdWx0aVNlbGVjdCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFNlbGVjdFNhcHBoaXJlLCBGZXRjaFNhcHBoaXJlIH0gZnJvbSAnLi9TYXBwaGlyZVNsaWNlJztcclxuXHJcbmNvbnN0IERhdGFTZXRTYXBwaGlyZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBSZWNvcmQ6IFRyZW5EQVAuaURhdGFTZXQsIERhdGE6IHsgRGF0YVNvdXJjZTogVHJlbkRBUC5pRGF0YVNvdXJjZSwgRGF0YTogVHJlbkRBUC5pU2FwcGhpcmVEYXRhU2V0IH0sIEluZGV4OiBudW1iZXIsIFNldERhdGFTZXQ6ICh3czogVHJlbkRBUC5pRGF0YVNldCkgPT4gdm9pZCB9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgcGhhc2VzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RTYXBwaGlyZShzdGF0ZSwgcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCAnUGhhc2UnKSk7XHJcbiAgICBjb25zdCBtZXRlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFNhcHBoaXJlKHN0YXRlLCBwcm9wcy5EYXRhLkRhdGFTb3VyY2UuSUQsICdNZXRlcicpKTtcclxuICAgIGNvbnN0IGNoYW5uZWxUeXBlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0U2FwcGhpcmUoc3RhdGUsIHByb3BzLkRhdGEuRGF0YVNvdXJjZS5JRCwgJ0NoYW5uZWxHcm91cFR5cGUnKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gVXBkYXRlRFMoLi4ucGFyYW1zOiB7IGZpZWxkOiBrZXlvZiBUcmVuREFQLmlTYXBwaGlyZURhdGFTZXQsIHZhbHVlOiBhbnkgfVtdKSB7XHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHByb3BzLlJlY29yZC5KU09OU3RyaW5nKTtcclxuICAgICAgICBqc29uW3Byb3BzLkluZGV4XS5EYXRhID0geyAuLi5wcm9wcy5EYXRhLkRhdGEgfTtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBwYXJhbXMpXHJcbiAgICAgICAgICAgIGpzb25bcHJvcHMuSW5kZXhdLkRhdGFbcGFyYW1zW2luZGV4XS5maWVsZF0gPSBwYXJhbXNbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIHByb3BzLlNldERhdGFTZXQoeyAuLi5wcm9wcy5SZWNvcmQsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KGpzb24pIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBoYXNlcyAhPSB1bmRlZmluZWQgJiYgcGhhc2VzPy5TdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgcGhhc2VzPy5TdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hTYXBwaGlyZSh7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCB0YWJsZTogJ1BoYXNlJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBwaGFzZXM/LlN0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1ldGVycyAhPSB1bmRlZmluZWQgJiYgbWV0ZXJzPy5TdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgbWV0ZXJzPy5TdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hTYXBwaGlyZSh7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCB0YWJsZTogJ01ldGVyJyB9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBtZXRlcnM/LlN0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYW5uZWxUeXBlcyAhPSB1bmRlZmluZWQgJiYgY2hhbm5lbFR5cGVzPy5TdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgY2hhbm5lbFR5cGVzPy5TdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hTYXBwaGlyZSh7IGRhdGFTb3VyY2VJRDogcHJvcHMuRGF0YS5EYXRhU291cmNlLklELCB0YWJsZTogJ0NoYW5uZWxHcm91cFR5cGUnIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGNoYW5uZWxUeXBlcz8uU3RhdHVzXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdDxUcmVuREFQLmlTYXBwaGlyZURhdGFTZXQ+IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBGaWVsZD1cIkFnZ3JlZ2F0ZVwiIE9wdGlvbnM9e1t7IFZhbHVlOiAnJywgTGFiZWw6ICdOb25lJyB9LCB7IFZhbHVlOiAnMWgnLCBMYWJlbDogJ0hvdXInIH0sIHsgVmFsdWU6ICcxZCcsIExhYmVsOiAnRGF5JyB9LCB7IFZhbHVlOiAnMXcnLCBMYWJlbDogJ1dlZWsnIH1dfSBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdBZ2dyZWdhdGUnLCB2YWx1ZTogcmVjb3JkLkFnZ3JlZ2F0ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlNdWx0aVNlbGVjdDxUcmVuREFQLmlTYXBwaGlyZURhdGFTZXQ+IFN0eWxlPXt7IGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gNTEwIH19IFJlY29yZD17cHJvcHMuRGF0YS5EYXRhfSBPcHRpb25zPXsgbWV0ZXJzPy5EYXRhLm1hcChtID0+ICh7IFZhbHVlOiBtLklELCBMYWJlbDogbS5OYW1lIH0pKSA/PyBbXX0gRmllbGQ9XCJJRHNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdJRHMnLCB2YWx1ZTogcmVjb3JkLklEcyB9KX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyYXlDaGVja0JveGVzPFRyZW5EQVAuaVNhcHBoaXJlRGF0YVNldD4gUmVjb3JkPXtwcm9wcy5EYXRhLkRhdGF9IENoZWNrYm94ZXM9e3BoYXNlcz8uRGF0YS5tYXAobSA9PiAoeyBJRDogbS5JRCwgTGFiZWw6IG0uTmFtZSB9KSkgPz8gW119IEZpZWxkPVwiUGhhc2VzXCIgU2V0dGVyPXsocmVjb3JkKSA9PiBVcGRhdGVEUyh7IGZpZWxkOiAnUGhhc2VzJywgdmFsdWU6IHJlY29yZC5QaGFzZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycmF5TXVsdGlTZWxlY3Q8VHJlbkRBUC5pU2FwcGhpcmVEYXRhU2V0PiBTdHlsZT17eyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDUyMCB9fSBSZWNvcmQ9e3Byb3BzLkRhdGEuRGF0YX0gT3B0aW9ucz17Y2hhbm5lbFR5cGVzPy5EYXRhLm1hcChtID0+ICh7IFZhbHVlOiBtLklELCBMYWJlbDogbS5EaXNwbGF5TmFtZSB9KSkgPz8gW119IEZpZWxkPVwiVHlwZXNcIiBTZXR0ZXI9eyhyZWNvcmQpID0+IFVwZGF0ZURTKHsgZmllbGQ6ICdUeXBlcycsIHZhbHVlOiByZWNvcmQuVHlwZXMgfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFTZXRTYXBwaGlyZTsiXSwic291cmNlUm9vdCI6IiJ9
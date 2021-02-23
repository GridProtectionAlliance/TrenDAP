(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WorkSpaceEditor"],{

/***/ "../node_modules/css-modules-typescript-loader/index.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js!./Styles/spinner.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-modules-typescript-loader!../node_modules/css-loader/dist/cjs.js??ref--4-2!../node_modules/sass-loader/dist/cjs.js!./Styles/spinner.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "._2MKBas_7uwvtcyryvCH9PY {\n  width: 20px;\n  height: 20px;\n  animation: _337M3CDDJwQuuuHEta2iWl 4s infinite linear;\n  transform-origin: 50% 50%;\n}\n\n@keyframes _337M3CDDJwQuuuHEta2iWl {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n._2t1tkattxtKeUViyxz5IH8 {\n  fill: transparent;\n  stroke: #2f3d4c;\n  stroke-width: 10;\n  stroke-linecap: round;\n  transform-origin: 50% 50%;\n  stroke-dasharray: 283;\n  stroke-dashoffset: 75;\n  animation: _1l8yx4ttz-DbPpXrsEy6-X 1.4s ease-in-out infinite both;\n}\n\n@keyframes _1l8yx4ttz-DbPpXrsEy6-X {\n  0%, 25% {\n    stroke-dashoffset: 280;\n    transform: rotate(0);\n  }\n  50%, 75% {\n    stroke-dashoffset: 75;\n    transform: rotate(45deg);\n  }\n  100% {\n    stroke-dashoffset: 280;\n    transform: rotate(360deg);\n  }\n}\n@keyframes lpaocU4W06jCzhmBcKMrQ {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n.KPA1bQ71pfzqGWkfk6ke8 {\n  animation: lpaocU4W06jCzhmBcKMrQ 2s linear infinite;\n}", ""]);
// Exports
exports.locals = {
	"spinner": "_2MKBas_7uwvtcyryvCH9PY",
	"spin": "_337M3CDDJwQuuuHEta2iWl",
	"circle": "_2t1tkattxtKeUViyxz5IH8",
	"circle--animation": "_1l8yx4ttz-DbPpXrsEy6-X",
	"svg": "KPA1bQ71pfzqGWkfk6ke8",
	"svg--animation": "lpaocU4W06jCzhmBcKMrQ"
};
module.exports = exports;


/***/ }),

/***/ "./Styles/spinner.scss":
/*!*****************************!*\
  !*** ./Styles/spinner.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-modules-typescript-loader!../../node_modules/css-loader/dist/cjs.js??ref--4-2!../../node_modules/sass-loader/dist/cjs.js!./spinner.scss */ "../node_modules/css-modules-typescript-loader/index.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js!./Styles/spinner.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./TypeScript/Constants.ts":
/*!*********************************!*\
  !*** ./TypeScript/Constants.ts ***!
  \*********************************/
/*! exports provided: HeavyCheckMark, Pencil, TrashCan, CrossMark, Plus, Warning, Spinner, Wrench */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeavyCheckMark", function() { return HeavyCheckMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pencil", function() { return Pencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashCan", function() { return TrashCan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossMark", function() { return CrossMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return Plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warning", function() { return Warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrench", function() { return Wrench; });
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

/***/ "./TypeScript/Features/DataSets/DataSetData.tsx":
/*!******************************************************!*\
  !*** ./TypeScript/Features/DataSets/DataSetData.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSetsSlice */ "./TypeScript/Features/DataSets/DataSetsSlice.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Constants */ "./TypeScript/Constants.ts");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../LoadingSpinner */ "./TypeScript/LoadingSpinner.tsx");
//******************************************************************************************************
//  DataSetData.tsx - Gbtc
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
//  01/18/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************





var DataSetData = function (props) {
    var _a, _b, _c;
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    var dataSet = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) { return Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["SelectDataSetByID"])(state, props.ID); });
    var dsStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["SelectDataSetsStatus"]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (dsStatus === 'idle') {
        }
        else if (dsStatus == 'unitiated' || dsStatus === 'changed')
            dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSets"])());
        return function () {
        };
    }, [dsStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (dataSet == undefined)
            return;
        else if (dataSet.Data.Status === 'unitiated')
            dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["UpdateDataSetDataFlag"])(dataSet));
    }, [dataSet]);
    if (dataSet == undefined)
        return null;
    else if (((_a = dataSet.Data) === null || _a === void 0 ? void 0 : _a.Status) === 'loading')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { title: "Loading Data.", style: { marginLeft: 25 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], { Height: 25, Width: 25, Color: "black", Background: "white" }));
    else if (((_b = dataSet.Data) === null || _b === void 0 ? void 0 : _b.Status) === 'error')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSetData"])(dataSet)); }, title: "Error loading data: " + dataSet.Data.Error + ". Click to reload." }, _Constants__WEBPACK_IMPORTED_MODULE_3__["CrossMark"]);
    else if (((_c = dataSet.Data) === null || _c === void 0 ? void 0 : _c.Status) === 'idle')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSetData"])(dataSet)); }, title: 'Data loaded into TrenDAP. Click to reload.' }, _Constants__WEBPACK_IMPORTED_MODULE_3__["HeavyCheckMark"]));
    else
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSetData"])(dataSet)); }, title: 'Click to load data into TrenDAP' }, _Constants__WEBPACK_IMPORTED_MODULE_3__["Warning"]);
};
/* harmony default export */ __webpack_exports__["default"] = (DataSetData);


/***/ }),

/***/ "./TypeScript/Features/Widgets/Histogram.tsx":
/*!***************************************************!*\
  !*** ./TypeScript/Features/Widgets/Histogram.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistogramJSX; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Widget */ "./TypeScript/Features/Widgets/Widget.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Constants */ "./TypeScript/Constants.ts");
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
//******************************************************************************************************
//  Histogram.tsx - Gbtc
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
//  11/16/2020 - Billy Ernest
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};







var SvgStyle = {
    fill: 'none',
    shapeRendering: 'crispEdges',
    userSelect: 'none',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none'
};
function HistogramJSX(props) {
    var _a, _b;
    var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](false), 2), toggle = _c[0], setToggle = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Histogram"](props)), 2), record = _d[0], setRecord = _d[1];
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    }, [toggle, props.JSON]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        Initialize(record);
    }, [record]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Histogram"](__assign(__assign({}, record), { Data: props.Data })));
    }, [props.Data]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Histogram"](__assign(__assign({}, record), { Height: props.Height })));
    }, [props.Height]);
    function Initialize(settings) {
        var _a, _b;
        var profile = settings.JSON.Series.map(function (series) { return series.Profile; }).reduce(function (prev, curr) { return prev || curr; }, false);
        var margin = { bottom: 50, left: 50, top: 40, right: (profile ? 70 : 20) };
        var svgHeight = record.Height - margin.top - margin.bottom;
        var extent = d3__WEBPACK_IMPORTED_MODULE_0__["extent"]([].concat.apply([], __spread(settings.JSON.Series.map(function (series) { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = settings.Data.find(function (d) { return d.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (d) { return d.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : [])).map(function (d) { return d[series.Field]; }); }))));
        //// set the parameters for the histogram
        var histograms = (_b = (_a = settings.JSON) === null || _a === void 0 ? void 0 : _a.Series, (_b !== null && _b !== void 0 ? _b : [])).map(function (series) {
            var _a, _b, _c, _d;
            var dataSource = (_b = (_a = settings.Data.find(function (d) { return d.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
            var datum = (_d = (_c = dataSource.find(function (d) { return d.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Data.map(function (d) { return d[series.Field]; }), (_d !== null && _d !== void 0 ? _d : []));
            var histogram = d3__WEBPACK_IMPORTED_MODULE_0__["histogram"]()
                .value(function (d) { return d; }) // I need to give the vector of value
                .domain(extent) // then the domain of the graphic
                .thresholds(settings.JSON.BinCount); // then the numbers of bins
            // And apply this function to data to get the bins
            return histogram(datum);
        });
        var yMax = Math.max.apply(Math, __spread([].concat.apply([], __spread(histograms)).map(function (b) { return b.length; })));
        d3__WEBPACK_IMPORTED_MODULE_0__["select"](ref.current).selectAll('svg').remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"](ref.current)
            .append('svg')
            .attr('width', settings.Width)
            .attr('height', settings.Height);
        var x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([settings.JSON.Min, settings.JSON.Max]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([0, settings.Width - margin.left - margin.right]);
        var xAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + (settings.Height - margin.bottom) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x));
        svg.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (settings.Width / 2) + "," + (settings.Height - margin.bottom / 3) + ")")
            .text(record.JSON.Units);
        var y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .range([settings.Height - margin.top - margin.bottom, 0])
            .domain([0, yMax]); // d3.hist has to be called before the Y axis obviously
        var yAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](y));
        svg.append("text")
            .attr("transform", "rotate(-90) translate(-" + settings.Height / 2 + "," + margin.left / 3 + ")")
            .style("text-anchor", "middle")
            .text("Counts");
        var binWidth = Math.max.apply(Math, __spread(histograms.map(function (histogram) { return Math.max.apply(Math, __spread(histogram.map(function (a) { return x(a.x1) - x(a.x0); }))); })));
        //svg.selectAll("g.bins").remove();
        svg.selectAll("g.bins")
            .data(settings.JSON.Series)
            .enter()
            .append('g').attr('class', 'bins').attr("fill", function (series) { return series.Color; })
            .attr('transform', function (d, index) { return "translate(" + (margin.left + index * binWidth / settings.JSON.Series.length) + "," + margin.top + ")"; })
            //.attr("opacity", 0.3)
            .selectAll('rect')
            .data(function (series, index) { return histograms[index]; })
            .enter()
            .append("rect")
            .attr("x", 1)
            .attr("transform", function (d, i, g) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
            .attr("width", function (d) { return (x(d.x1) - x(d.x0) > 2 ? (x(d.x1) - x(d.x0)) / settings.JSON.Series.length : 2) - 1; })
            .attr("height", function (d) { return svgHeight - y(d.length); });
        if (profile) {
            var profiles = record.JSON.Series.filter(function (series) { return series.Profile; }).map(function (series, index) {
                var _a, _b, _c, _d;
                var dataSource = (_b = (_a = settings.Data.find(function (d) { return d.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
                var datum = (_d = (_c = dataSource.find(function (d) { return d.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Data.map(function (d) { return d[series.Field]; }), (_d !== null && _d !== void 0 ? _d : []));
                var histogram = d3__WEBPACK_IMPORTED_MODULE_0__["histogram"]()
                    .value(function (d) { return d; }) // I need to give the vector of value
                    .domain(d3__WEBPACK_IMPORTED_MODULE_0__["extent"](datum)) // then the domain of the graphic
                    .thresholds(settings.JSON.BinCount)(datum); // then the numbers of bins
                return { Color: series.ProfileColor, Profile: histogram.map((function (sum) { return function (value) { return sum += value.length; }; })(0)).map(function (prof, i) { return ({ Bin: histogram[i].x0, Value: prof }); }) };
            });
            //const profiles = histograms.map(hist => hist.map((sum => value => sum += value.length)(0)).map((prof, i) => ({ Bin: hist[i].x0, Value: prof })));
            var pyMax = Math.max.apply(Math, __spread(profiles.map(function (pr) { return pr.Profile; }).reduce(function (prev, curr) { return prev.concat(curr); }, []).map(function (p) { return p.Value; })));
            var py_1 = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                .range([settings.Height - margin.top - margin.bottom, 0])
                .domain([0, pyMax]); // d3.hist has to be called before the Y axis obviously
            var pyAxis = svg.append("g")
                .attr("transform", "translate(" + (settings.Width - margin.right) + "," + margin.top + ")")
                .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisRight"](py_1));
            svg.append("text")
                .attr("transform", "rotate(-90) translate(-" + settings.Height / 2 + "," + (settings.Width - margin.right / 3) + ")")
                .style("text-anchor", "middle")
                .text("Profile");
            //const filteredData = profile.find(ds => ds.ID === series.ID)?.Data ?? []).filter(ds => moment(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[field] >= axis.Min && ds[field] <= axis.Max)
            var lineFunc_1 = d3__WEBPACK_IMPORTED_MODULE_0__["line"]().x(function (dd) { return x(dd.Bin); }).y(function (dd) { return py_1(dd.Value); });
            svg.append("path")
                .data(profiles)
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", function (d) { return d.Color; })
                .attr("d", function (d) { return lineFunc_1(d.Profile); })
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card", style: { width: props.Width, height: props.Height } },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: ref })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-4" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Histogram"](r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "number", className: "form-control", value: (_b = (_a = record) === null || _a === void 0 ? void 0 : _a.Width, (_b !== null && _b !== void 0 ? _b : 0)), onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Histogram"](__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Histogram"](__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'row' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'col' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'Units', Record: record.JSON, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Histogram"](__assign(__assign({}, record), { JSON: r }))); }, Valid: function (field) { return true; } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'col' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'BinCount', Label: 'Bins', Record: record.JSON, Type: 'number', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Histogram"](__assign(__assign({}, record), { JSON: r }))); }, Valid: function (field) { return true; } }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'Min', Label: 'Min', Record: record.JSON, Type: 'number', Setter: function (r) { return setRecord(__assign(__assign({}, record), { JSON: r })); }, Valid: function (field) { return true; } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'Max', Record: record.JSON, Type: 'number', Setter: function (r) { return setRecord(__assign(__assign({}, record), { JSON: r })); }, Valid: function (field) { return true; } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2", style: { position: 'relative' } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () { return setRecord(record.CalculateAxisRange()); } }, "Use Data")))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h6", null, "Series"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "accordion", style: { overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 } }, record.Data.map(function (d, i) {
                    var _a, _b;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], { key: i },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-body" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["SeriesSelect"], { Widget: record, DataSourceID: d.DataSource.ID, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Histogram"](record)); } }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "list-group" }, (d.DataSource.Type === 'TrenDAPDB' ? (_b = (_a = record.JSON) === null || _a === void 0 ? void 0 : _a.Series, (_b !== null && _b !== void 0 ? _b : [])).map(function (series, ind) {
                                    var datum = d.Data.find(function (dd) { return dd.ID === series.ID; });
                                    if (datum === undefined)
                                        return null;
                                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: series.ID, className: "list-group-item" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, datum.Name),
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["AdditionalInfo"], { Data: datum, Index: i })),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SeriesPicker, { Index: ind, Series: series, Widget: record, Callback: function (widget) { return setRecord(widget); } }))));
                                }) : null)))));
                }))))));
}
var SeriesPicker = function (props) {
    var _a;
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.Color), 2), color = _b[0], setColor = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.Field), 2), type = _c[0], setType = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.Profile), 2), profile = _d[0], setProfile = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.ProfileColor), 2), pColor = _e[0], setPColor = _e[1];
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "Color", color)); }, [color]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "Field", type)); }, [type]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "Profile", profile)); }, [profile]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "ProfileColor", pColor)); }, [pColor]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Field"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { className: "form-control", value: type, onChange: function (evt) { return setType(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Average" }, "Avg"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Minimum" }, "Min"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Maximum" }, "Max"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Color"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "color", className: "form-control", value: color, onChange: function (evt) { return setColor(evt.target.value); } })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-1" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Profile"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "checkbox", className: "form-control", style: { width: 20 }, value: (_a = profile) === null || _a === void 0 ? void 0 : _a.toString(), checked: profile, onChange: function (evt) { return setProfile(evt.target.checked); } })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Profile Color"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "color", className: "form-control", value: pColor, onChange: function (evt) { return setPColor(evt.target.value); } })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-1" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-link", onClick: function () { return props.Callback(props.Widget.RemoveSeries(props.Index)); } }, _Constants__WEBPACK_IMPORTED_MODULE_5__["CrossMark"]))));
};


/***/ }),

/***/ "./TypeScript/Features/Widgets/Profile.tsx":
/*!*************************************************!*\
  !*** ./TypeScript/Features/Widgets/Profile.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
//******************************************************************************************************
//  Widgit.tsx - Gbtc
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
//  11/16/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

function Profile(props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Profile");
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Stats.tsx":
/*!***********************************************!*\
  !*** ./TypeScript/Features/Widgets/Stats.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatsJSX; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Widget */ "./TypeScript/Features/Widgets/Widget.tsx");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__);
//******************************************************************************************************
//  Stats.tsx - Gbtc
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
//  11/16/2020 - Billy Ernest
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





function StatsJSX(props) {
    var _a, _b, _c;
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), toggle = _d[0], setToggle = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Stats"](props)), 2), record = _e[0], setRecord = _e[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Stats"](__assign(__assign({}, record), { Data: props.Data })));
    }, [props.Data]);
    var stats = record.Stats();
    var dataSource = (_b = (_a = record.Data.find(function (dd) { var _a, _b; return _b = dd.DataSource.ID === ((_a = record.JSON.Series) === null || _a === void 0 ? void 0 : _a.DataSourceID), (_b !== null && _b !== void 0 ? _b : 0); })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
    var datum = dataSource.find(function (dd) { var _a, _b; return _b = dd.ID === ((_a = record.JSON.Series) === null || _a === void 0 ? void 0 : _a.ID), (_b !== null && _b !== void 0 ? _b : 0); });
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card", style: { width: props.Width, height: props.Height, maxHeight: props.Height, overflowY: 'auto' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: 'table' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Category"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", null, "Statistic"))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, Object.keys(stats).map(function (key) {
                    if (key !== 'Percentile')
                        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: key },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, key),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, stats[key]));
                    else
                        return Object.keys(stats.Percentile).map(function (pkey) {
                            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: key + pkey },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null,
                                    pkey,
                                    "th Percentile"),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, stats.Percentile[pkey]));
                        });
                })))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["Input"], { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Stats"](r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "number", className: "form-control", value: (_c = record) === null || _c === void 0 ? void 0 : _c.Width, onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Stats"](__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Stats"](__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width")))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, "Series"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { id: "accordion", style: { overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 } }, record.Data.map(function (d, i) {
                    var _a;
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: i },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_3__["SeriesSelect"], { Widget: record, DataSourceID: d.DataSource.ID, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Stats"](record)); } }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" }, d.DataSource.Type === 'TrenDAPDB' && record.JSON.Series != undefined ?
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: record.JSON.Series.ID, className: "list-group-item" },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-3" },
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, (_a = datum) === null || _a === void 0 ? void 0 : _a.Name),
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_3__["AdditionalInfo"], { Index: i, Data: datum })),
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label" }, "Field"),
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "form-control", value: record.JSON.Series.Field, onChange: function (evt) { return setRecord(record.SetSeriesField(evt.target.value)); } },
                                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "Average" }, "Avg"),
                                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "Minimum" }, "Min"),
                                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "Maximum" }, "Max"))),
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label" }, "Precision"),
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: "number", value: record.JSON.Precision, onChange: function (evt) { return setRecord(record.SetPrecsision(parseInt(evt.target.value))); } }))))
                                    : null))));
                }))))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Table.tsx":
/*!***********************************************!*\
  !*** ./TypeScript/Features/Widgets/Table.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableJSX; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Widget */ "./TypeScript/Features/Widgets/Widget.tsx");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
//******************************************************************************************************
//  Table.tsx - Gbtc
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
//  11/16/2020 - Billy Ernest
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







function TableJSX(props) {
    var _a;
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), toggle = _b[0], setToggle = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](new _Implementations__WEBPACK_IMPORTED_MODULE_3__["Table"](props)), 2), record = _c[0], setRecord = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Timestamp'), 2), sortField = _d[0], setSortField = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](true), 2), ascending = _e[0], setAscending = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), data = _f[0], setData = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({}), 2), info = _g[0], setInfo = _g[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_3__["Table"](__assign(__assign({}, record), { Data: props.Data })));
    }, [props.Data]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var _a, _b;
        var dataSource = (_b = (_a = record.Data.find(function (dd) { var _a, _b; return _b = dd.DataSource.ID === ((_a = record.JSON.Series) === null || _a === void 0 ? void 0 : _a.DataSourceID), (_b !== null && _b !== void 0 ? _b : 0); })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
        var datum = dataSource.find(function (dd) { var _a, _b; return _b = dd.ID === ((_a = record.JSON.Series) === null || _a === void 0 ? void 0 : _a.ID), (_b !== null && _b !== void 0 ? _b : 0); });
        if (datum == undefined)
            setInfo({});
        else
            setInfo(datum);
    }, [record]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var _a, _b;
        var ordered = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.orderBy((_b = (_a = info) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])), [sortField], [ascending ? 'asc' : 'desc']);
        setData(ordered);
    }, [ascending, sortField, info]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card", style: { width: props.Width, height: props.Height, maxHeight: props.Height, overflowY: 'auto' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default.a, { tableClass: 'table', cols: [
                    { key: 'Timestamp', label: 'Timestamp' },
                    { key: 'Minimum', label: 'Min', content: function (item, key, style) { return item.Minimum.toFixed(record.JSON.Precision); } },
                    { key: 'Average', label: 'Avg', content: function (item, key, style) { return item.Average.toFixed(record.JSON.Precision); } },
                    { key: 'Maximum', label: 'Max', content: function (item, key, style) { return item.Maximum.toFixed(record.JSON.Precision); } },
                ], data: data, sortField: sortField, onClick: function (data) { }, ascending: ascending, onSort: function (data) {
                    if (data.col === sortField)
                        setAscending(!ascending);
                    else {
                        setSortField(data.col);
                        setAscending(true);
                    }
                } })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_5__["Input"], { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_3__["Table"](r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "number", className: "form-control", value: (_a = record) === null || _a === void 0 ? void 0 : _a.Width, onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_3__["Table"](__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_3__["Table"](__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width")))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h6", null, "Series"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { id: "accordion", style: { overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 } }, record.Data.map(function (d, i) {
                    var _a, _b;
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: i },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["SeriesSelect"], { Widget: record, DataSourceID: d.DataSource.ID, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_3__["Table"](record)); } }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" }, d.DataSource.Type === 'TrenDAPDB' && record.JSON.Series != undefined ?
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: record.JSON.Series.ID, className: "list-group-item" },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-3" },
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, (_b = (_a = info) === null || _a === void 0 ? void 0 : _a.Name, (_b !== null && _b !== void 0 ? _b : ''))),
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["AdditionalInfo"], { Index: i, Data: info })),
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label" }, "Precision"),
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: "number", value: record.JSON.Precision, onChange: function (evt) { return setRecord(record.SetPrecsision(parseInt(evt.target.value))); } }))))
                                    : null))));
                }))))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Text.tsx":
/*!**********************************************!*\
  !*** ./TypeScript/Features/Widgets/Text.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextJSX; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Widget */ "./TypeScript/Features/Widgets/Widget.tsx");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__);
//******************************************************************************************************
//  Text.tsx - Gbtc
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
//  11/16/2020 - Billy Ernest
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





function TextJSX(props) {
    var _a;
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), toggle = _b[0], setToggle = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Text"](props)), 2), record = _c[0], setRecord = _c[1];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card", style: { width: props.Width, height: props.Height } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default.a["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { style: { position: 'relative', top: 30 } }, props.JSON.Text)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["Input"], { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Text"](r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "number", className: "form-control", value: (_a = record) === null || _a === void 0 ? void 0 : _a.Width, onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Text"](__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Text"](__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width")))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__["TextArea"], { Record: record.JSON, Field: "Text", Rows: 10, Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Text"](__assign(__assign({}, record), { JSON: __assign({}, r) }))); }, Valid: function (field) { return true; } })))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Trend/Axis.tsx":
/*!****************************************************!*\
  !*** ./TypeScript/Features/Widgets/Trend/Axis.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Axis; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Constants */ "./TypeScript/Constants.ts");
//******************************************************************************************************
//  Axis.tsx - Gbtc
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
//  02/17/2021 - Billy Ernest
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



function Axis(props) {
    var firstRender = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](true);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        firstRender.current = false;
    }, []);
    //const [bins, setBins] = React.useState<number>(props.Series?.BinCount ?? 10);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Axis.Units), 2), units = _a[0], setUnits = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Axis.Position), 2), position = _b[0], setPosition = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Axis.Min), 2), min = _c[0], setMin = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Axis.Max), 2), max = _d[0], setMax = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Units", units);
            props.Callback();
        }
    }, [units]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Position", position);
            props.Callback();
        }
    }, [position]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Max", max);
            props.Callback();
        }
    }, [max]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Min", min);
            props.Callback();
        }
    }, [min]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'row' },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Position"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "form-control", value: position, onChange: function (evt) { return setPosition(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "left" }, "Left"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "right" }, "Right"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Field: 'Units', Record: props.Axis, Type: 'text', Setter: function (r) { return setUnits(r.Units); }, Valid: function (field) { return true; } })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Field: 'Min', Label: 'Min', Record: props.Axis, Type: 'number', Setter: function (r) { return setMin(r.Min); }, Valid: function (field) { return true; } })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["Input"], { Field: 'Max', Record: props.Axis, Type: 'number', Setter: function (r) { return setMax(r.Max); }, Valid: function (field) { return true; } })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-2", style: { position: 'relative' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () {
                    props.Widget.CalculateAxisRange('y', props.Index);
                    props.Callback();
                } }, "Use Data")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-1" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-link", style: { top: 30 }, onClick: function () {
                    props.Widget.RemoveAxis(props.Index);
                    props.Callback();
                } }, _Constants__WEBPACK_IMPORTED_MODULE_2__["CrossMark"]))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Trend/SeriesPicker.tsx":
/*!************************************************************!*\
  !*** ./TypeScript/Features/Widgets/Trend/SeriesPicker.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SeriesPicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Widget */ "./TypeScript/Features/Widgets/Widget.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Constants */ "./TypeScript/Constants.ts");
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datetime/css/react-datetime.css */ "../node_modules/react-datetime/css/react-datetime.css");
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_4__);
//******************************************************************************************************
//  SeriesPicker.tsx - Gbtc
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
//  02/17/2021 - Billy Ernest
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





function SeriesPicker(props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Series.Axis), 2), axis = _a[0], setAxis = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Series.Color), 2), color = _b[0], setColor = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Series.Field), 2), type = _c[0], setType = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Series.ShowEvents), 2), showEvents = _d[0], setShowEvents = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        props.Widget.UpdateSeries(props.Index, "Color", color);
        props.Callback();
    }, [color]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        props.Widget.UpdateSeries(props.Index, "Field", type);
        props.Callback();
    }, [type]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        props.Widget.UpdateSeries(props.Index, "ShowEvents", showEvents);
        props.Callback();
    }, [showEvents]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        props.Widget.UpdateSeries(props.Index, "Axis", axis);
        props.Widget.CalculateAxisRange('y');
        props.Widget.CalculateAxisRange('x');
        props.Callback();
    }, [axis]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'row' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-3" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, props.Series.Label),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_2__["AdditionalInfo"], { Index: props.Index, Data: props.Data })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label" }, "Field"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "form-control", value: type, onChange: function (evt) { return setType(evt.target.value); } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "Average" }, "Avg"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "Minimum" }, "Min"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "Maximum" }, "Max"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label" }, "YAxis"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "form-control", value: axis, onChange: function (evt) { return setAxis(parseInt(evt.target.value)); } }, props.Widget.JSON.YAxis.map(function (axis, index) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: index, key: index }, axis.Units); }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label" }, "Color"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "color", className: "form-control", value: color, onChange: function (evt) { return setColor(evt.target.value); } })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-1" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-link", onClick: function () {
                        props.Widget.RemoveSeries(props.Index);
                        props.Callback();
                    } }, _Constants__WEBPACK_IMPORTED_MODULE_3__["CrossMark"]))),
        (props.Data.Events.length > 0 ?
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'row' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__["CheckBox"], { Record: props.Series, Field: 'ShowEvents', Label: 'Show Events', Setter: function (r) { return setShowEvents(!showEvents); } })))
            : null)));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Trend/Trend.tsx":
/*!*****************************************************!*\
  !*** ./TypeScript/Features/Widgets/Trend/Trend.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrendJSX; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Widget */ "./TypeScript/Features/Widgets/Widget.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Constants */ "./TypeScript/Constants.ts");
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Implementations */ "./TypeScript/Implementations.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datetime */ "../node_modules/react-datetime/dist/react-datetime.cjs.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-datetime/css/react-datetime.css */ "../node_modules/react-datetime/css/react-datetime.css");
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_switch_button_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap-switch-button-react */ "../node_modules/bootstrap-switch-button-react/lib/bootstrap-switch-button-react.js");
/* harmony import */ var bootstrap_switch_button_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_switch_button_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Axis__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Axis */ "./TypeScript/Features/Widgets/Trend/Axis.tsx");
/* harmony import */ var _SeriesPicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SeriesPicker */ "./TypeScript/Features/Widgets/Trend/SeriesPicker.tsx");
//******************************************************************************************************
//  Trend.tsx - Gbtc
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
//  11/13/2020 - Billy Ernest
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













function TrendJSX(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](false), 2), toggle = _h[0], setToggle = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](props)), 2), record = _j[0], setRecord = _j[1];
    var hover = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](-10);
    var svgs = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]([]);
    var margin = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]({ bottom: 50, left: 50, top: 40, right: 50 });
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"]('Pan'), 2), chartAction = _k[0], setChartAction = _k[1];
    var chartActionRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]('Pan');
    var setHover = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (value) {
        HandleHoverUpdate(value);
    }, []);
    try {
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](props));
        }, [props]);
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            chartActionRef.current = chartAction;
        }, [chartAction]);
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            Initialize(record);
        }, [record]);
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { Height: props.Height })));
        }, [props.Height]);
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { Data: props.Data })));
        }, [props.Data]);
        react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
            return function () { d3__WEBPACK_IMPORTED_MODULE_0__["select"](ref.current).selectAll('svg').remove(); };
        }, []);
    }
    catch (ex) {
        console.log(ex);
    }
    function Initialize(settings) {
        var svgCount = 1;
        if (settings.JSON.Split && settings.JSON.SplitType === 'Axis') {
            margin.current = { bottom: 50, left: 50, top: 40, right: 50 };
            svgCount = settings.JSON.YAxis.length;
        }
        else if (settings.JSON.Split && settings.JSON.SplitType === 'Series') {
            margin.current = { bottom: 50, left: 50, top: 40, right: 50 };
            svgCount = settings.JSON.Series.length;
        }
        else
            margin.current = {
                bottom: 50,
                left: (settings.JSON.YAxis.filter(function (axis) { return axis.Position === 'left'; }).length == 0 ? 50 : settings.JSON.YAxis.filter(function (axis) { return axis.Position === 'left'; }).length * 50),
                top: 40,
                right: (settings.JSON.YAxis.filter(function (axis) { return axis.Position === 'right'; }).length == 0 ? 50 : settings.JSON.YAxis.filter(function (axis) { return axis.Position === 'right'; }).length * 50)
            };
        if (settings.JSON.Legend)
            margin.current.right = margin.current.right + 200;
        var svgHeight = props.Height / svgCount;
        if (svgs.current.length !== svgCount) {
            svgs.current = [];
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](ref.current).selectAll('svg').remove();
            for (var i = 0; i < svgCount; i++) {
                var svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"](ref.current)
                    .append('svg')
                    .attr('width', settings.Width)
                    .attr('height', svgHeight);
                svgs.current.push(svg);
            }
        }
        var x = GetXScale(settings);
        svgs.current.forEach(function (svg, i) {
            if (settings.JSON.Split && settings.JSON.SplitType === 'Axis')
                return InitializeSplitOnAxis(settings, svg, x, i);
            if (settings.JSON.Split && settings.JSON.SplitType === 'Series')
                return InitializeSplitOnSeries(settings, svg, x, i);
            else
                return InitializeNotSplit(settings, svg, x);
        });
    }
    function InitializeSplitOnSeries(settings, svg, x, i) {
        var _a, _b, _c, _d;
        var svgHeight = parseInt(svg.attr('height'));
        var series = settings.JSON.Series[i];
        var axis = settings.JSON.YAxis[series.Axis];
        var field = series.Field;
        AddXAxis(svg, x);
        var y = GetYScale(svgHeight, axis);
        AddYAxisLeft(axis, svg, y);
        var filteredData = (_d = (_c = (_b = (_a = record.Data.find(function (ds) { return ds.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (ds) { return ds.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : [])).filter(function (ds) { return moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[field] >= axis.Min && ds[field] <= axis.Max; });
        var lineFunc = d3__WEBPACK_IMPORTED_MODULE_0__["line"]().x(function (dd) { return x(moment__WEBPACK_IMPORTED_MODULE_7___default()(dd.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ')); }).y(function (dd) { return y(dd[series.Field]); });
        svg.selectAll("g.line").remove();
        svg.selectAll('g.line')
            .data([filteredData])
            .enter()
            .append('g')
            .classed('line', true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", series.Color)
            .attr("d", function (d) {
            return lineFunc(d);
        });
        if (series.ShowEvents) {
            AddEventLine(series, svg, x);
        }
        svg.selectAll("g.legend").remove();
        if (settings.JSON.Legend) {
            AddLegend(svg, [series]);
        }
        svg.on('mousemove', function (d) { return setHover(d.offsetX); });
        svg.on('mousedown', function (d) { return HandleChartAction(d, svg, x); });
    }
    function InitializeSplitOnAxis(settings, svg, x, i) {
        var svgHeight = parseInt(svg.attr('height'));
        var axis = settings.JSON.YAxis[i];
        var series = settings.JSON.Series.filter(function (s) { return s.Axis === i; }).map(function (s) {
            var _a, _b, _c, _d;
            return (__assign(__assign({}, s), { Data: (_d = (_c = (_b = (_a = record.Data.find(function (ds) { return ds.DataSource.ID === s.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (ds) { return ds.ID === s.ID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : [])).filter(function (ds) { return moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[s.Field] >= axis.Min && ds[s.Field] <= axis.Max; }).map(function (point) { return [point.Timestamp, point[s.Field]]; }) }));
        });
        AddXAxis(svg, x);
        var y = GetYScale(svgHeight, axis);
        AddYAxisLeft(axis, svg, y);
        var lineFunc = d3__WEBPACK_IMPORTED_MODULE_0__["line"]().x(function (dd) { return x(moment__WEBPACK_IMPORTED_MODULE_7___default()(dd[0], 'YYYY-MM-DDTHH:mm:ss.fffZ')); }).y(function (dd) { return y(dd[1]); });
        svg.selectAll("g.line").remove();
        svg.selectAll("g.line")
            .data(series)
            .enter()
            .append('g')
            .classed('line', true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", function (s) { return s.Color; })
            .attr("d", function (s) { return lineFunc(s.Data); });
        series.forEach(function (s) { return AddEventLine(s, svg, x); });
        svg.selectAll("g.legend").remove();
        if (settings.JSON.Legend) {
            AddLegend(svg, series);
        }
        svg.on('mousemove', function (d) { return setHover(d.offsetX); });
        svg.on('mousedown', function (d) { return HandleChartAction(d, svg, x); });
    }
    function InitializeNotSplit(settings, svg, x) {
        AddXAxis(svg, x);
        var y = settings.JSON.YAxis.map(function (axis) { return GetYScale(settings.Height, axis); });
        svg.selectAll('g.yaxis').remove();
        var yAxis = settings.JSON.YAxis.map(function (axis, index) {
            var a;
            if (axis.Position === 'left') {
                var ind = settings.JSON.YAxis.filter(function (axis) { return axis.Position === 'left'; }).findIndex(function (axis) { return axis === settings.JSON.YAxis[index]; });
                AddYAxisLeft(axis, svg, y[index], false, ind);
            }
            else {
                var ind = settings.JSON.YAxis.filter(function (axis) { return axis.Position === 'right'; }).findIndex(function (axis) { return axis === settings.JSON.YAxis[index]; });
                AddYAxisRight(axis, svg, y[index], ind);
            }
            return a;
        });
        svg.selectAll("g.legend").remove();
        if (settings.JSON.Legend) {
            AddLegend(svg, settings.JSON.Series);
        }
        svg.selectAll("g.line").remove();
        svg.selectAll("g.line")
            .data(settings.JSON.Series)
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", function (d) { return d.Color; })
            .attr("d", function (d) {
            var _a, _b, _c, _d;
            var yScale = y[d.Axis];
            var lineFunc = d3__WEBPACK_IMPORTED_MODULE_0__["line"]().x(function (dd) { return x(moment__WEBPACK_IMPORTED_MODULE_7___default()(dd.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ')); }).y(function (dd) { return yScale(dd[d.Field]); });
            var filteredData = (_d = (_c = (_b = (_a = record.Data.find(function (ds) { return ds.DataSource.ID === d.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (ds) { return ds.ID === d.ID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : [])).filter(function (ds) { var _a, _b; return moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[d.Field] >= ((_a = settings.JSON.YAxis[d.Axis]) === null || _a === void 0 ? void 0 : _a.Min) && ds[d.Field] <= ((_b = settings.JSON.YAxis[d.Axis]) === null || _b === void 0 ? void 0 : _b.Max); });
            return lineFunc(filteredData);
        });
        svg.on('mousemove', function (d) { return setHover(d.offsetX); });
        svg.on('mousedown', function (d) { return HandleChartAction(d, svg, x); });
        settings.JSON.Series.filter(function (series) { return series.ShowEvents; }).forEach(function (series) { return AddEventLine(series, svg, x); });
    }
    function AddLegend(svg, series) {
        var svgHeight = parseInt(svg.attr('height'));
        var svgWidth = parseInt(svg.attr('width'));
        var legend = svg.selectAll('g.legend')
            .data([series])
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', "translate(" + (svgWidth - 200) + "," + margin.current.top + ")");
        var legendRows = legend.selectAll('g.legendRow')
            .data(function (d) { return d; })
            .enter()
            .append('g')
            .attr('class', 'legendrow')
            .attr('transform', function (d, i) { return "translate(10," + i * 30 + ")"; });
        legendRows.append('rect').attr('height', 20).attr('width', 20).attr('fill', function (d) { return d.Color; });
        legendRows.append('text').attr('x', 30).attr('y', 15)
            .text(function (d) {
            if (d.Label.length > 15)
                return d.Label.slice(0, 15) + '...';
            else
                return d.Label;
        });
        legendRows.append('title').text(function (d) { return d.Label; });
    }
    function AddEventLine(series, svg, x) {
        var _a, _b, _c, _d;
        var svgHeight = parseInt(svg.attr('height'));
        var data = (_d = (_c = (_b = (_a = record.Data.find(function (ds) { return ds.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (ds) { return ds.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Events, (_d !== null && _d !== void 0 ? _d : []));
        svg.selectAll('g.event-line').remove();
        var g = svg.selectAll('g.event-line')
            .data(data)
            .enter()
            .append('g')
            .classed('event-line', true);
        g.append('path')
            .attr('stroke-width', '2px')
            .attr("d", function (d) { return "M0," + (svgHeight - margin.current.bottom - margin.current.top) + "L-10," + (svgHeight - margin.current.bottom - margin.current.top + 10) + ",L10," + (svgHeight - margin.current.bottom - margin.current.top + 10) + "L0," + (svgHeight - margin.current.bottom - margin.current.top) + "Z"; })
            .attr("transform", function (d) { return "translate(" + x(moment__WEBPACK_IMPORTED_MODULE_7___default()(d.StartTime, 'YYYY-MM-DDTHH:mm:ss.fff')) + "," + margin.current.top + ")"; })
            .attr('stroke', 'red')
            .attr('fill', 'red')
            .style('cursor', 'pointer')
            .on('click', function (e, d) {
            window.open(record.Data.find(function (ds) { return ds.DataSource.ID === series.DataSourceID; }).DataSource.OpenSEE + '?eventID=' + d.ID);
        });
    }
    function AddXAxis(svg, x) {
        var svgWidth = parseInt(svg.attr('width'));
        var svgHeight = parseInt(svg.attr('height'));
        svg.selectAll('g.xaxis').remove();
        var xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (svgHeight - margin.current.bottom) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x));
        svg.append("g").classed('xaxis', true).append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (svgWidth / 2) + "," + (svgHeight - margin.current.bottom / 3) + ")")
            .text("Time");
    }
    function AddYAxisLeft(axis, svg, y, rotate, index) {
        if (rotate === void 0) { rotate = true; }
        if (index === void 0) { index = 0; }
        var svgWidth = parseInt(svg.attr('width'));
        var svgHeight = parseInt(svg.attr('height'));
        svg.selectAll('g.lyaxis' + index).remove();
        var yAxis = svg.append("g").classed('lyaxis' + index, true)
            .attr("transform", "translate(" + (margin.current.left - index * 50) + ",0)")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat(function (value) { return d3__WEBPACK_IMPORTED_MODULE_0__["format"]("~s")(value); }));
        var text = svg.append("g")
            .classed('lyaxis' + index, true)
            .append("text")
            .text(axis.Units);
        if (rotate)
            text.attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + ((margin.current.left - index * 50) / 3) + ")").style("text-anchor", "middle");
        else
            text.attr("transform", "translate(" + (margin.current.left - index * 50) + "," + (svgHeight - margin.current.bottom / 2) + ")").style("text-anchor", "end");
    }
    function AddYAxisRight(axis, svg, y, index) {
        if (index === void 0) { index = 0; }
        var svgWidth = parseInt(svg.attr('width'));
        var svgHeight = parseInt(svg.attr('height'));
        svg.selectAll('g.ryaxis' + index).remove();
        var yAxis = svg.append("g").classed('ryaxis' + index, true)
            .attr("transform", "translate(" + (svgWidth - margin.current.right + index * 50) + ",0)")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisRight"](y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat(function (value) { return d3__WEBPACK_IMPORTED_MODULE_0__["format"]("~s")(value); }));
        var text = svg.append("g")
            .classed('ryaxis' + index, true)
            .append("text")
            .text(axis.Units);
        text.attr("transform", "translate(" + (svgWidth - margin.current.right + index * 50) + "," + (svgHeight - margin.current.bottom / 2) + ")").style("text-anchor", "start");
    }
    function GetXScale(settings) {
        return d3__WEBPACK_IMPORTED_MODULE_0__["scaleTime"]()
            .domain([settings.JSON.Min, settings.JSON.Max]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([margin.current.left, settings.Width - margin.current.right]);
    }
    function GetYScale(svgHeight, axis) {
        return d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .range([svgHeight - margin.current.bottom, margin.current.top])
            .domain([axis.Min, axis.Max]);
    }
    function HandleHoverUpdate(hover) {
        if (chartActionRef.current !== 'Click')
            return;
        svgs.current.forEach(function (svg, index) {
            var height = parseInt(svg.attr('height')) - margin.current.top - margin.current.bottom;
            if (hover >= margin.current.left && hover <= (props.Width - margin.current.right)) {
                svg.selectAll('g.mouse-over').remove();
                svg.append('g')
                    .classed('mouse-over', true)
                    .append('path')
                    .attr("d", function (d) { return "M 0 0 V " + height; })
                    .attr("transform", "translate(" + hover + "," + margin.current.top + ")")
                    .attr('stroke', 'gray');
            }
        });
    }
    function HandleReset() {
        setRecord(record.CalculateAxisRange('x'));
    }
    function HandleChartAction(evt, svg, scale) {
        var height = parseInt(svg.attr('height'));
        var width = parseInt(svg.attr('width'));
        evt.preventDefault();
        if (evt.offsetX < margin.current.left || evt.offsetX > width - margin.current.right)
            return;
        else if (evt.offsetY < margin.current.top || evt.offsetY > height - margin.current.bottom)
            return;
        else if (chartActionRef.current == 'Click')
            OnClick(evt, svg, scale);
        else if (chartActionRef.current == 'Pan')
            OnPan(evt, svg, scale);
        else if (chartActionRef.current == 'ZoomX')
            OnXZoom(evt, svg, scale);
    }
    function OnClick(evt, svg, scale) {
        var height = parseInt(svg.attr('height'));
        var tooltipHeight = record.JSON.Series.length * 15;
        if (evt.offsetX < margin.current.left && evt.offsetX > (props.Width - margin.current.right))
            return;
        svg.selectAll('g.mouse-over2').remove();
        svg.append('g')
            .classed('mouse-over2', true)
            .append('path')
            .attr("d", function (d) { return "M 0 0 V " + (height - margin.current.bottom - margin.current.top); })
            .attr("transform", "translate(" + evt.offsetX + "," + margin.current.top + ")")
            .attr('stroke', 'grey');
        svg.selectAll('g.charttooltip').remove();
        var tooltip = svg.append('g')
            .attr('class', 'charttooltip')
            .attr("transform", "translate(" + (evt.offsetX + 15) + "," + (evt.offsetY - tooltipHeight / 2) + ")");
        var rect = tooltip.append('rect')
            .attr('fill', 'gainsboro')
            .attr('height', record.JSON.Series.length + 'em')
            .attr('width', 200)
            .attr('x', 0)
            .attr('y', 0);
        var text = tooltip.append('text')
            .attr('x', 0)
            .attr('y', 0);
        var width = 200;
        record.JSON.Series.forEach(function (series, index) {
            var _a, _b, _c, _d;
            tooltip.append('rect').attr('x', 5).attr('y', index + "em").attr('height', '1em').attr('width', '1em').attr('fill', series.Color);
            var dataSource = (_b = (_a = record.Data.find(function (ds) { return ds.DataSource.ID == series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
            var data = (_d = (_c = dataSource.find(function (ds) { return ds.ID == series.ID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : []));
            var floor = Math.floor(data.length * evt.offsetX / props.Width * .95);
            var ceil = Math.ceil(data.length * evt.offsetX / props.Width * 1.05);
            var shortenedData = data.slice(floor, ceil);
            var dist = shortenedData.map(function (datum) { return ({ Value: datum[series.Field], Distance: Math.abs(evt.offsetX - scale(moment__WEBPACK_IMPORTED_MODULE_7___default()(datum.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ').toDate().getTime())) }); });
            dist.sort(function (a, b) {
                if (a.Distance > b.Distance)
                    return 1;
                else if (a.Distance == b.Distance)
                    return 0;
                else
                    return -1;
            });
            var datum = d3__WEBPACK_IMPORTED_MODULE_0__["format"]('.2f')(dist[0].Value);
            text.append('tspan').text(series.Label + ' - ' + datum).attr('x', '1.5em').attr('y', index + 1 + "em");
            width = text.node().getBBox().width + 25 > width ? text.node().getBBox().width + 25 : width;
        });
        rect.attr('width', width);
        if (width > props.Width - margin.current.right - evt.offsetX)
            tooltip.attr("transform", "translate(" + (evt.offsetX - 15 - width) + "," + (evt.offsetY - tooltipHeight / 2) + ")");
    }
    function OnPan(evt, svg, scale) {
        var start = evt.clientX;
        svg.on('mousemove.pan', function (e) {
            record.UpdateJSON('Min', scale.invert(scale.range()[0] + start - e.clientX).getTime());
            setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](record.UpdateJSON('Max', scale.invert(scale.range()[1] + start - e.clientX).getTime())));
        });
        svg.on('mouseup.pan', function () { return svg.on('mousemove.pan', null); });
    }
    function OnXZoom(evt, svg, scale) {
        var start = evt.offsetX;
        var brush = d3__WEBPACK_IMPORTED_MODULE_0__["brushX"]()
            .extent([[margin.current.left, margin.current.top + 0.5], [props.Width - margin.current.right, parseInt(svg.attr('height')) - margin.current.bottom + 0.5]]);
        var br = svg.append('g').call(brush);
        br.call(brush.move, [start, start + 1]);
        svg.on('mousemove.brush', function (e) {
            br.call(brush.move, [start, e.offsetX]);
        });
        svg.on('mouseup.brush', function (e) {
            var min = Math.min(start, e.offsetX);
            var max = Math.max(start, e.offsetX);
            record.UpdateJSON('Min', scale.invert(min).getTime());
            setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](record.UpdateJSON('Max', scale.invert(max).getTime())));
            br.remove();
            svg.on('mousemove.brush', null);
            svg.on('mouseup.brush', null);
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card", style: { width: props.Width, height: props.Height } },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: ref, style: { userSelect: 'none' } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { position: 'absolute', left: 10, zIndex: 1010 } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: 'btn btn-light', onClick: HandleReset }, "Reset"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-check-inline" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "form-check-label" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "radio", className: "form-check-input", checked: chartAction == 'Pan', onChange: function (evt) { return setChartAction('Pan'); } }),
                            "Pan")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-check-inline" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "form-check-label" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "radio", className: "form-check-input", checked: chartAction == 'ZoomX', onChange: function (evt) { return setChartAction('ZoomX'); } }),
                            "Zoom")),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "form-check-inline" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "form-check-label" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "radio", className: "form-check-input", checked: chartAction == 'Click', onChange: function (evt) { return setChartAction('Click'); } }),
                            "Click"))))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "number", className: "form-control", value: (_a = record) === null || _a === void 0 ? void 0 : _a.Width, onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'row' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'col-1' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Split"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](bootstrap_switch_button_react__WEBPACK_IMPORTED_MODULE_10___default.a, { checked: (_d = (_c = (_b = record) === null || _b === void 0 ? void 0 : _b.JSON) === null || _c === void 0 ? void 0 : _c.Split, (_d !== null && _d !== void 0 ? _d : false)), onChange: function (checked) { return setRecord(record.UpdateJSON('Split', checked)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'col-2' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Select"], { Label: 'Split On', Field: 'SplitType', Record: (_e = record) === null || _e === void 0 ? void 0 : _e.JSON, Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { JSON: r }))); }, Options: [{ Value: 'Axis', Label: 'Axis' }, { Value: 'Series', Label: 'Series' }] })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'col-2' },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Legend"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](bootstrap_switch_button_react__WEBPACK_IMPORTED_MODULE_10___default.a, { checked: (_g = (_f = record.JSON) === null || _f === void 0 ? void 0 : _f.Legend, (_g !== null && _g !== void 0 ? _g : false)), onChange: function (checked) { return setRecord(record.UpdateJSON('Legend', checked)); } }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h6", null, "X Axis"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Min"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_8___default.a, { value: moment__WEBPACK_IMPORTED_MODULE_7___default()(record.JSON.Min), onChange: function (value) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { JSON: __assign(__assign({}, record.JSON), { Min: moment__WEBPACK_IMPORTED_MODULE_7___default()(value).toDate().getTime() }) }))); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Min"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_8___default.a, { value: moment__WEBPACK_IMPORTED_MODULE_7___default()(record.JSON.Max), onChange: function (value) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { JSON: __assign(__assign({}, record.JSON), { Max: moment__WEBPACK_IMPORTED_MODULE_7___default()(value).toDate().getTime() }) }))); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2", style: { position: 'relative' } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () {
                                record.CalculateAxisRange('x', 0);
                                setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](record));
                            } }, "Use Data"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h6", null, "Y Axis"),
                " ",
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { style: { position: 'relative', float: 'right', top: -30 }, className: 'btn btn-link', onClick: function () {
                        record.AddAxis();
                        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](record));
                    } }, _Constants__WEBPACK_IMPORTED_MODULE_5__["Plus"]),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "list-group list-group-flush", style: { maxHeight: window.innerHeight - 625, overflowY: 'auto', overflowX: 'hidden', width: '100%' } }, record.JSON.YAxis.map(function (axis, index) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: index, className: 'list-group-item' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Axis__WEBPACK_IMPORTED_MODULE_11__["default"], { Axis: axis, Index: index, Widget: record, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](record)); } }))); }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h6", null, "Series"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "accordion", style: { overflowY: 'auto', maxHeight: window.innerHeight - 250 } }, record.Data.map(function (d, i) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], { key: i },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-body" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: 'btn btn-primary', onClick: function () { return setRecord(record.QuickAddVoltageRMS(d.DataSource.ID)); } }, "Quick Add VRMS"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: 'btn btn-primary', onClick: function () { return setRecord(record.QuickAddCurrentRMS(d.DataSource.ID)); } }, "Quick Add IRMS"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: 'btn btn-primary', onClick: function () { return setRecord(record.RemoveAll(d.DataSource.ID)); } }, "Remove All"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["SeriesSelect"], { Widget: record, DataSourceID: d.DataSource.ID, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](record)); } }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "list-group" }, (d.DataSource.Type === 'TrenDAPDB' ? record.JSON.Series.map(function (series, ind) {
                                    var datum = d.Data.find(function (dd) { return dd.ID === series.ID; });
                                    if (datum === undefined)
                                        return null;
                                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: series.ID, className: "list-group-item" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SeriesPicker__WEBPACK_IMPORTED_MODULE_12__["default"], { Index: ind, Series: series, Data: datum, Widget: record, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](record)); } })));
                                }) : null)))));
                }))))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Widget.tsx":
/*!************************************************!*\
  !*** ./TypeScript/Features/Widgets/Widget.tsx ***!
  \************************************************/
/*! exports provided: default, SeriesSelect, AdditionalInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Widgit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesSelect", function() { return SeriesSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalInfo", function() { return AdditionalInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  Widget.tsx - Gbtc
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
//  11/16/2020 - Billy Ernest
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


function Widgit(props) {
    return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal", role: "dialog", style: { display: props.Toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog mw-100 w-75", role: "document" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content mx-auto" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-header" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", { className: "modal-title" },
                        props.Label,
                        " Settings"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "close", onClick: function () { return props.SetToggle(false); } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { "aria-hidden": "true" }, "\u00D7"))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" }, props.children)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", onClick: function () {
                            props.Update(props.Record);
                            props.SetToggle(false);
                        } }, "Save changes"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-danger", onClick: function () {
                            props.Remove();
                            props.SetToggle(false);
                        } }, "Delete Widgit"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-secondary", onClick: function () { return props.SetToggle(false); } }, "Close"))))), document.getElementById("window"));
}
function SeriesSelect(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var _q = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](undefined), 2), dataSource = _q[0], setDataSource = _q[1];
    var _r = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({ ID: 0 }), 2), selected = _r[0], setSelected = _r[1];
    var _s = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Meter'), 2), type = _s[0], setType = _s[1];
    var _t = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](''), 2), delimeter = _t[0], setDelimeter = _t[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var dataSource = props.Widget.Data.find(function (d) { return d.DataSource.ID === props.DataSourceID; });
        if (dataSource != undefined) {
            setDataSource(dataSource);
            //setSelected((dataSource?.Data ?? [undefined])[0]);
        }
    }, [props.Widget.Data]);
    if (((_a = dataSource) === null || _a === void 0 ? void 0 : _a.DataSource.Type) === 'TrenDAPDB')
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "form-control", value: type, onChange: function (evt) { return setType(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: 'Meter' }, "Meter"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: 'Asset' }, "Asset")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "form-control", value: delimeter, onChange: function (evt) { return setDelimeter(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '' }),
                (_c = (_b = dataSource) === null || _b === void 0 ? void 0 : _b.Data, (_c !== null && _c !== void 0 ? _c : [])).map(function (d) { return d[type]; }).filter(function (x, i, a) { return a.indexOf(x) === i; }).map(function (d, i) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: i, value: d }, d); })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "form-control", value: (_e = (_d = selected) === null || _d === void 0 ? void 0 : _d.ID, (_e !== null && _e !== void 0 ? _e : '0')), onChange: function (evt) { return setSelected(dataSource.Data.find(function (datum) { return datum.ID === parseInt(evt.target.value); })); } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '0' }),
                (_g = (_f = dataSource) === null || _f === void 0 ? void 0 : _f.Data, (_g !== null && _g !== void 0 ? _g : [])).filter(function (datum) { return datum[type].indexOf(delimeter) >= 0; }).map(function (datum, index) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: index, value: datum.ID }, datum.Name); })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group-append" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-outline-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Info"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-menu dropdown-menu-right", "aria-labelledby": "dropdownMenuButton" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                        "Meter: ", (_h = selected) === null || _h === void 0 ? void 0 :
                        _h.Meter),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                        "Asset: ", (_j = selected) === null || _j === void 0 ? void 0 :
                        _j.Asset),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                        "Characteristic: ", (_k = selected) === null || _k === void 0 ? void 0 :
                        _k.Characteristic),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                        "Type: ", (_l = selected) === null || _l === void 0 ? void 0 :
                        _l.Type),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                        "Station: ", (_m = selected) === null || _m === void 0 ? void 0 :
                        _m.Station),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                        "Phase: ", (_o = selected) === null || _o === void 0 ? void 0 :
                        _o.Phase),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                        "Harmonic: ", (_p = selected) === null || _p === void 0 ? void 0 :
                        _p.Harmonic)),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-outline-secondary", type: "button", onClick: function () {
                        if (props.Widget.Type === 'Histogram')
                            props.Widget.AddSeries(selected.ID, props.DataSourceID, selected.Type + ' ' + selected.Phase);
                        else if (props.Widget.Type === 'Trend') {
                            var label = '';
                            if (selected.Characteristic === 'Frequency')
                                label = 'Freq - ' + selected.Meter;
                            else if (selected.Type === 'Voltage' && selected.Characteristic === 'RMS')
                                label = "V" + selected.Phase + " - " + selected.Meter;
                            else if (selected.Type === 'Voltage')
                                label = "V" + selected.Phase + " " + selected.Characteristic + " - " + selected.Meter;
                            else if (selected.Type === 'Current' && selected.Characteristic === 'RMS')
                                label = "I" + selected.Phase + " - " + selected.Meter;
                            else if (selected.Type === 'Current')
                                label = "I" + selected.Phase + " " + selected.Characteristic + " - " + selected.Meter;
                            else
                                label = selected.Name;
                            props.Widget.AddSeries(selected.ID, props.DataSourceID, label);
                        }
                        else if (props.Widget.Type === 'Stats')
                            props.Widget.SetSeries(selected.ID, props.DataSourceID);
                        else if (props.Widget.Type === 'Table')
                            props.Widget.SetSeries(selected.ID, props.DataSourceID);
                        else if (props.Widget.Type === 'XvsY')
                            props.Widget.SetSeries(props.Axis, selected.ID, props.DataSourceID);
                        props.Callback();
                    } }, "Select"))));
    else
        return null;
}
function AdditionalInfo(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "form-control dropdown-toggle", type: "button", id: "dropdownMenuButton" + props.Index, "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Addition Info"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-menu", "aria-labelledby": "dropdownMenuButton" + props.Index },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Meter: ", (_a = props.Data) === null || _a === void 0 ? void 0 :
                _a.Meter),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Asset: ", (_b = props.Data) === null || _b === void 0 ? void 0 :
                _b.Asset),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Characteristic: ", (_c = props.Data) === null || _c === void 0 ? void 0 :
                _c.Characteristic),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Type: ", (_d = props.Data) === null || _d === void 0 ? void 0 :
                _d.Type),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Station: ", (_e = props.Data) === null || _e === void 0 ? void 0 :
                _e.Station),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Phase: ", (_f = props.Data) === null || _f === void 0 ? void 0 :
                _f.Phase),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Harmonic: ", (_g = props.Data) === null || _g === void 0 ? void 0 :
                _g.Harmonic))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/XvsY.tsx":
/*!**********************************************!*\
  !*** ./TypeScript/Features/Widgets/XvsY.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XvsYJSX; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Widget */ "./TypeScript/Features/Widgets/Widget.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Constants */ "./TypeScript/Constants.ts");
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datetime */ "../node_modules/react-datetime/dist/react-datetime.cjs.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-datetime/css/react-datetime.css */ "../node_modules/react-datetime/css/react-datetime.css");
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var simple_statistics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! simple-statistics */ "../node_modules/simple-statistics/dist/simple-statistics.min.js");
/* harmony import */ var simple_statistics__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(simple_statistics__WEBPACK_IMPORTED_MODULE_10__);
//******************************************************************************************************
//  XvsY.tsx - Gbtc
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
//  11/16/2020 - Billy Ernest
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











function XvsYJSX(props) {
    var _a;
    var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](false), 2), toggle = _b[0], setToggle = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](props)), 2), record = _c[0], setRecord = _c[1];
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        //record.current = new Trend(props);
    }, [toggle, props.JSON]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        Initialize(record);
    }, [record]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](__assign(__assign({}, record), { Height: props.Height })));
    }, [props.Height]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](__assign(__assign({}, record), { Data: props.Data })));
    }, [props.Data]);
    function Zip(array1, field1, array2, field2, zipField) {
        var returnArray = [];
        if (array1.length > array2.length) {
            array1.forEach(function (xd, i) {
                var array2Point = array2.find(function (point) { return point[zipField] === xd[zipField]; });
                if (array2Point == undefined)
                    return;
                returnArray.push({
                    ZipField: xd[zipField], Array1: xd[field1], Array2: array2Point[field2]
                });
            });
        }
        else {
            array2.forEach(function (xd, i) {
                var array1Point = array1.find(function (point) { return point[zipField] === xd[zipField]; });
                if (array1Point == undefined)
                    return;
                returnArray.push({
                    ZipField: xd[zipField], Array2: xd[field1], Array1: array1Point[field2]
                });
            });
        }
        return returnArray;
    }
    function Initialize(settings) {
        var _a, _b, _c, _d;
        if (settings.JSON.X.Series == undefined || settings.JSON.Y.Series == undefined)
            return;
        var margin = { bottom: 50, left: 50, top: 40, right: 50 };
        var svgHeight = props.Height;
        d3__WEBPACK_IMPORTED_MODULE_0__["select"](ref.current).selectAll('svg').remove();
        var x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([settings.JSON.X.Min, settings.JSON.X.Max]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([0, settings.Width - margin.left - margin.right]);
        var y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .range([svgHeight - margin.top - margin.bottom, 0])
            .domain([settings.JSON.Y.Min, settings.JSON.Y.Max]); // d3.hist has to be called before the Y axis obviously
        var svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"](ref.current)
            .append('svg')
            .attr('width', settings.Width)
            .attr('height', svgHeight);
        var xAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + (svgHeight - margin.bottom) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x));
        svg.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (settings.Width / 2) + "," + (svgHeight - margin.bottom / 3) + ")")
            .text(settings.JSON.X.Units);
        var yAxis = svg.append("g")
            .attr("transform", "translate(" + (margin.left) + "," + margin.top + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](y));
        svg.append("text")
            .attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + (margin.left / 3) + ")")
            .style("text-anchor", "middle")
            .text(settings.JSON.Y.Units);
        var xData = (_b = (_a = GetDatum('x')) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
        var yData = (_d = (_c = GetDatum('y')) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : []));
        var combinedData = Zip(xData, record.JSON.X.Series.Field, yData, record.JSON.Y.Series.Field, 'Timestamp');
        //const combinedData = xData.map((xd, i) => ({ Timestamp: xd.Timestamp, X: xd[record.JSON.XSeries.Field], Y: yData[i][record.JSON.YSeries.Field] }))
        var filteredData = combinedData.filter(function (d) { return moment__WEBPACK_IMPORTED_MODULE_7___default()(d.ZipField).toDate().getTime() >= record.JSON.TimeMin && moment__WEBPACK_IMPORTED_MODULE_7___default()(d.ZipField).toDate().getTime() <= record.JSON.TimeMax; });
        svg.selectAll("dot")
            .data(filteredData)
            .enter().append("circle")
            .attr("r", 3.5)
            .attr("cx", function (d) { return x(d.Array1); })
            .attr("cy", function (d) { return y(d.Array2); })
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        if (record.JSON.RegressionLine) {
            var data = filteredData.map(function (d) { return [d.Array1, d.Array2]; });
            var model = Object(simple_statistics__WEBPACK_IMPORTED_MODULE_10__["linearRegression"])(data);
            var lrLine_1 = Object(simple_statistics__WEBPACK_IMPORTED_MODULE_10__["linearRegressionLine"])(model);
            var r2 = Object(simple_statistics__WEBPACK_IMPORTED_MODULE_10__["rSquared"])(data, lrLine_1);
            var lineFunc_1 = d3__WEBPACK_IMPORTED_MODULE_0__["line"]().x(function (d) { return x(d[0]); }).y(function (d) { return y(lrLine_1(d[0])); });
            svg.append('text')
                .attr('stroke', 'red')
                .attr("transform", "translate(" + (props.Width - margin.left - margin.right) + "," + margin.top + ")")
                .text("R2 - " + r2.toFixed(3));
            svg.append("path")
                .data([data])
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", 'red')
                .attr("d", function (d) { return lineFunc_1(d); })
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        }
    }
    function GetDatum(axis) {
        var _a, _b, _c, _d;
        if (axis === 'x') {
            if (record.JSON.X.Series == undefined)
                return { Name: '' };
            var dataSource = (_b = (_a = record.Data.find(function (d) { return d.DataSource.ID === record.JSON.X.Series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
            var datum = dataSource.find(function (ds) { return ds.ID === record.JSON.X.Series.ID; });
            return datum;
        }
        else {
            if (record.JSON.Y.Series == undefined)
                return { Name: '' };
            var dataSource = (_d = (_c = record.Data.find(function (d) { return d.DataSource.ID === record.JSON.Y.Series.DataSourceID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : []));
            var datum = dataSource.find(function (ds) { return ds.ID === record.JSON.Y.Series.ID; });
            return datum;
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card", style: { width: props.Width, height: props.Height } },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2___default.a["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: ref })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["default"], __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "number", className: "form-control", value: (_a = record) === null || _a === void 0 ? void 0 : _a.Width, onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Min"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_8___default.a, { value: moment__WEBPACK_IMPORTED_MODULE_7___default()(record.JSON.TimeMin), onChange: function (value) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](record.UpdateJSON('TimeMin', moment__WEBPACK_IMPORTED_MODULE_7___default()(value).toDate().getTime()))); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Min"),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_datetime__WEBPACK_IMPORTED_MODULE_8___default.a, { value: moment__WEBPACK_IMPORTED_MODULE_7___default()(record.JSON.TimeMax), onChange: function (value) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](record.UpdateJSON('TimeMax', moment__WEBPACK_IMPORTED_MODULE_7___default()(value).toDate().getTime()))); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2", style: { position: 'relative' } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () { return setRecord(record.CalculateRange('time')); } }, "Use Data"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["CheckBox"], { Record: record.JSON, Field: 'RegressionLine', Label: 'Add Regression', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](record.UpdateJSON('RegressionLine', r.RegressionLine))); } }))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h6", null, "X Axis"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: record.JSON.X, Field: 'Units', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('x', 'Units', r.Units)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: record.JSON.X, Field: 'Min', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('x', 'Min', r.Min)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: record.JSON.X, Field: 'Max', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('x', 'Max', r.Max)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2", style: { position: 'relative' } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () { return setRecord(record.CalculateRange('x')); } }, "Use Data"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h6", null, "Y Axis"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: record.JSON.Y, Field: 'Units', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('y', 'Units', r.Units)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: record.JSON.Y, Field: 'Min', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('y', 'Min', r.Min)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Record: record.JSON.Y, Field: 'Max', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('y', 'Max', r.Max)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2", style: { position: 'relative' } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () { return setRecord(record.CalculateRange('y')); } }, "Use Data")))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h6", null, "Series"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "accordion", style: { overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 } }, record.Data.map(function (d, i) {
                    var _a, _b, _c, _d;
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], { key: i },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-body" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h6", null, "X Series"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["SeriesSelect"], { Widget: record, DataSourceID: d.DataSource.ID, Axis: 'x', Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](record)); } }),
                                (record.JSON.X.Series != undefined ?
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-3" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, (_b = (_a = GetDatum('x')) === null || _a === void 0 ? void 0 : _a.Name, (_b !== null && _b !== void 0 ? _b : ''))),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["AdditionalInfo"], { Index: i, Data: GetDatum('x') })),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SeriesPicker, { Axis: 'x', Series: record.JSON.X.Series, Widget: record, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](record)); } })) : null),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h6", null, "Y Series"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["SeriesSelect"], { Widget: record, DataSourceID: d.DataSource.ID, Axis: 'y', Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](record)); } }),
                                (record.JSON.Y.Series != undefined ?
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-3" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, (_d = (_c = GetDatum('y')) === null || _c === void 0 ? void 0 : _c.Name, (_d !== null && _d !== void 0 ? _d : ''))),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["AdditionalInfo"], { Index: i, Data: GetDatum('y') })),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SeriesPicker, { Axis: 'y', Series: record.JSON.Y.Series, Widget: record, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](record)); } })) : null))));
                }))))));
}
var SeriesPicker = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.Field), 2), type = _a[0], setType = _a[1];
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        props.Widget.UpdateSeries(props.Axis, "Field", type);
        props.Callback();
    }, [type]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "form-label" }, "Field"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { className: "form-control", value: type, onChange: function (evt) { return setType(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Average" }, "Avg"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Minimum" }, "Min"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Maximum" }, "Max"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-1" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-link", onClick: function () {
                    props.Widget.RemoveSeries(props.Axis);
                    props.Callback();
                } }, _Constants__WEBPACK_IMPORTED_MODULE_5__["CrossMark"]))));
};


/***/ }),

/***/ "./TypeScript/Features/WorkSpaces/WorkSpaceEditor.tsx":
/*!************************************************************!*\
  !*** ./TypeScript/Features/WorkSpaces/WorkSpaceEditor.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/gpa-symbols */ "../node_modules/@gpa-gemstone/gpa-symbols/lib/index.js");
/* harmony import */ var _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Styles_app_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WorkSpacesSlice */ "./TypeScript/Features/WorkSpaces/WorkSpacesSlice.ts");
/* harmony import */ var _Widgets_Histogram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Widgets/Histogram */ "./TypeScript/Features/Widgets/Histogram.tsx");
/* harmony import */ var _Widgets_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Widgets/Profile */ "./TypeScript/Features/Widgets/Profile.tsx");
/* harmony import */ var _Widgets_Stats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Widgets/Stats */ "./TypeScript/Features/Widgets/Stats.tsx");
/* harmony import */ var _Widgets_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Widgets/Table */ "./TypeScript/Features/Widgets/Table.tsx");
/* harmony import */ var _Widgets_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Widgets/Text */ "./TypeScript/Features/Widgets/Text.tsx");
/* harmony import */ var _Widgets_Trend_Trend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Widgets/Trend/Trend */ "./TypeScript/Features/Widgets/Trend/Trend.tsx");
/* harmony import */ var _Widgets_XvsY__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Widgets/XvsY */ "./TypeScript/Features/Widgets/XvsY.tsx");
/* harmony import */ var _DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../DataSets/DataSetsSlice */ "./TypeScript/Features/DataSets/DataSetsSlice.ts");
/* harmony import */ var _DataSets_DataSetData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../DataSets/DataSetData */ "./TypeScript/Features/DataSets/DataSetData.tsx");
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
//******************************************************************************************************
//  WorkSpaceEditor.tsx - Gbtc
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
//  11/10/2020 - Billy Ernest
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
















var NavMargin = 85;
var NavWidth = 200;
var WorkSpaceEditor = function (props) {
    var _a, _b;
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), data = _c[0], setData = _c[1];
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
    var id = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])().id;
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](id), 2), tab = _d[0], setTab = _d[1];
    var usersWorkSpaces = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) { return Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__["SelectWorkSpacesForUser"])(state, userName); });
    var publicWorkSpaces = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) { return Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__["SelectWorkSpacesAllPublicNotUser"])(state, userName); });
    var dataSets = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_13__["SelectDataSets"]);
    var wsStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__["SelectWorkSpacesStatus"]);
    var dsStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_13__["SelectDataSetsStatus"]);
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({ Rows: [] }), 2), workSpaceJSON = _e[0], setWorkSpaceJSON = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](__spread(usersWorkSpaces, publicWorkSpaces).find(function (ws) { return ws.ID == tab; })), 2), workSpace = _f[0], setWorkSpace = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({}), 2), dataSet = _g[0], setDataSet = _g[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (id != tab) {
            history.push("/WorkSpaceEditor/" + tab);
            var ws = __spread(usersWorkSpaces, publicWorkSpaces).find(function (ws) { return ws.ID == tab; });
            setWorkSpace(ws);
            var ds = dataSets.find(function (ds) { return ds.ID === workSpace.DataSetID; });
            if (ds != undefined)
                setDataSet(ds);
        }
    }, [tab]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var _a;
        if (workSpace === undefined)
            return;
        //setDataSet(dataSets.find(ds => ds.ID === workSpace.DataSetID));
        if (!((_a = workSpace) === null || _a === void 0 ? void 0 : _a.Open))
            dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__["OpenCloseWorkSpace"])({ workSpace: workSpace, open: true }));
        var json = JSON.parse(workSpace.JSONString);
        setWorkSpaceJSON(json);
        Object(_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_13__["GetDataSetDataFromIDB"])(workSpace.DataSetID).then(function (d) {
            setData(d);
        });
    }, [workSpace, dataSets]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (wsStatus === 'idle') {
            var ws = __spread(usersWorkSpaces, publicWorkSpaces).find(function (ws) { return ws.ID == tab; });
            setWorkSpace(ws);
            var ds = dataSets.find(function (ds) { return ds.ID === workSpace.DataSetID; });
            if (ds != undefined)
                setDataSet(ds);
        }
        else if (wsStatus == 'unitiated' || wsStatus == 'changed')
            dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__["FetchWorkSpaces"])());
        return function () {
        };
    }, [dispatch, wsStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (dsStatus === 'idle') {
            if (workSpace != undefined) {
                var ds = dataSets.find(function (ds) { return ds.ID === workSpace.DataSetID; });
                if (ds != undefined)
                    setDataSet(ds);
            }
        }
        else if (dsStatus == 'unitiated' || dsStatus === 'changed')
            dispatch(Object(_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_13__["FetchDataSets"])());
        return function () {
        };
    }, [dispatch, dsStatus]);
    function HandleAddObject(type) {
        if (type === 'Row')
            setWorkSpaceJSON(__assign(__assign({}, workSpaceJSON), { Rows: __spread(workSpaceJSON.Rows, [{ Height: 500, Widgets: [] }]) }));
        else
            setWorkSpaceJSON(__assign(__assign({}, workSpaceJSON), { Rows: __spread(workSpaceJSON.Rows, [{
                        Height: window.innerHeight - NavMargin,
                        Widgets: [Object(_Implementations__WEBPACK_IMPORTED_MODULE_15__["CreateWidget"])(type, window.innerHeight - NavMargin, window.innerWidth - NavWidth)]
                    }]) }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.navbarbuttons },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { padding: '6px 12px', position: 'relative' } },
                "Data Set: ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], { to: homePath + "EditDataSet/" + ((_a = dataSet) === null || _a === void 0 ? void 0 : _a.ID) }, (_b = dataSet) === null || _b === void 0 ? void 0 : _b.Name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DataSets_DataSetData__WEBPACK_IMPORTED_MODULE_14__["default"], __assign({}, dataSet))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Add Object', "data-toggle": 'dropdown', "aria-haspopup": 'true', "aria-expanded": 'false' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-plus" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-menu" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function (e) { return HandleAddObject('Row'); } }, "Row"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-divider" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Histogram'); } }, "Histogram"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Stats'); } }, "Stats"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Table'); } }, "Table"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Text'); } }, "Text"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Trend'); } }, "Trend"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('XvsY'); } }, "X vs Y"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Export Current Data Set', "data-toggle": 'dropdown', "aria-haspopup": 'true', "aria-expanded": 'false' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-download" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-menu" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "PDF"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "CSV"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Save current workspace...', onClick: function (e) {
                    e.preventDefault();
                    dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__["UpdateWorkSpace"])(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(workSpaceJSON) })));
                } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-save" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Workspace Settings' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-cog" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "nav nav-tabs" }, __spread(usersWorkSpaces, publicWorkSpaces).filter(function (ws) { return ws.Open; }).map(function (ws) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: ws.ID, className: "nav-item " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.workspacetab },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link" + (tab == ws.ID ? ' active' : ''), href: '#', onClick: function (evt) { return setTab(ws.ID); } }, ws.Name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { onClick: function () { return dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__["OpenCloseWorkSpace"])({ workSpace: ws, open: false })); } }, "X"));
        })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a["tab-content"] }, workSpaceJSON.Rows.map(function (row, index) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Row, { key: index, WorkSpace: workSpace, Data: data, Widgets: row.Widgets, Height: row.Height, Update: function (record) {
                    var json = __assign({}, workSpaceJSON);
                    json.Rows[index].Height = record.Height;
                    json.Rows[index].Widgets = record.Widgets;
                    json.Rows[index].WorkSpace = undefined;
                    json.Rows[index].Data = undefined;
                    dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__["UpdateWorkSpace"])(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(json) })));
                }, RemoveRow: function () {
                    var json = __assign({}, workSpaceJSON);
                    json.Rows.splice(index, 1);
                    dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__["UpdateWorkSpace"])(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(json) })));
                }, MoveUp: function () {
                    if (index <= 0)
                        return;
                    var newIndex = index - 1;
                    var json = __assign({}, workSpaceJSON);
                    var a = json.Rows[newIndex];
                    var b = json.Rows[index];
                    json.Rows[newIndex] = b;
                    json.Rows[index] = a;
                    dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__["UpdateWorkSpace"])(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(json) })));
                }, MoveDown: function () {
                    var json = __assign({}, workSpaceJSON);
                    if (index >= json.Rows.length)
                        return;
                    var newIndex = index + 1;
                    var a = json.Rows[newIndex];
                    var b = json.Rows[index];
                    json.Rows[newIndex] = b;
                    json.Rows[index] = a;
                    dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__["UpdateWorkSpace"])(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(json) })));
                } });
        }))));
};
var Row = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), toggle = _a[0], setToggle = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Height), 2), height = _b[0], setHeight = _b[1];
    function HandleAddObject(type) {
        var row = __assign(__assign({}, props), { Update: undefined, WorkSpace: undefined, RemoveRow: undefined });
        row.Widgets.push(Object(_Implementations__WEBPACK_IMPORTED_MODULE_15__["CreateWidget"])(type, 100, (window.innerWidth - NavWidth) / 2));
        props.Update(row);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card", style: { height: props.Height, display: 'grid' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body", style: { padding: 0, zIndex: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "" + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a.triangle },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "" + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default.a["row-controls"] },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn-group" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Add Object', "data-toggle": 'dropdown', "aria-haspopup": 'true', "aria-expanded": 'false' },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-plus" })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-menu" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Histogram'); } }, "Histogram"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Stats'); } }, "Stats"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Table'); } }, "Table"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Text'); } }, "Text"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Trend'); } }, "Trend"),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('XvsY'); } }, "X vs Y"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Remove Row', onClick: function () { return props.RemoveRow(); } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-minus" })),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Row Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'grid-container', style: { display: 'inline-flex' } }, props.Widgets.map(function (widget, index) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Widget, __assign({}, __assign(__assign({}, widget), { Height: props.Height, WorkSpace: props.WorkSpace, Data: props.Data, Update: function (newRecord) {
                    var row = __assign({}, props);
                    var widget = __assign({}, newRecord);
                    widget.WorkSpace = undefined;
                    widget.Data = undefined;
                    row.Widgets[index] = widget;
                    props.Update(row);
                }, Remove: function () {
                    var row = __assign({}, props);
                    row.Widgets.splice(index, 1);
                    props.Update(row);
                } }), { key: index })); }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal", role: "dialog", style: { display: toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog", role: "document", style: { maxWidth: 525 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", { className: "modal-title" }, "Row Settings"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "close", onClick: function () { return setToggle(false); } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { "aria-hidden": "true" }, "\u00D7"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Height"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "number", className: "form-control", value: height != null ? height : 0, onChange: function (evt) { return setHeight(parseInt(evt.target.value)); } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group-prepend" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setHeight(window.innerHeight - NavMargin); } }, "Full Height"))),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                            "Widgets (Max Width : ",
                            window.innerWidth - 200,
                            " px, Width Used: ",
                            (props.Widgets.length == 0 ? 0 : props.Widgets.map(function (w) { return w.Width; }).reduce(function (a, b) { return a + b; })),
                            "px)"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: 'list-group' }, props.Widgets.map(function (widget, i) {
                            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { className: 'list-group-item', key: i },
                                widget.Label,
                                " -",
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pull-right' },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Width:"),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { value: widget.Width, type: 'number', onChange: function (evt) {
                                            var row = __assign({}, props);
                                            row.Widgets[i].Width = parseInt(evt.target.value);
                                            props.Update(row);
                                        } }),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', disabled: i <= 0, onClick: function () {
                                            var row = __assign({}, props);
                                            if (i <= 0)
                                                return;
                                            var newIndex = i - 1;
                                            var a = row.Widgets[newIndex];
                                            var b = row.Widgets[i];
                                            row.Widgets[newIndex] = b;
                                            row.Widgets[i] = a;
                                            props.Update(row);
                                        } }, _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_1__["UpArrow"]),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', disabled: i >= props.Widgets.length - 1, onClick: function () {
                                            var row = __assign({}, props);
                                            if (i >= row.Widgets.length - 1)
                                                return;
                                            var newIndex = i + 1;
                                            var a = row.Widgets[newIndex];
                                            var b = row.Widgets[i];
                                            row.Widgets[newIndex] = b;
                                            row.Widgets[i] = a;
                                            props.Update(row);
                                        } }, _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_1__["DownArrow"]),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () {
                                            var row = __assign({}, props);
                                            row.Widgets.splice(i, 1);
                                            props.Update(row);
                                        } }, _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_1__["CrossMark"])));
                        }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                props.MoveUp();
                                setToggle(false);
                            } }, "Move Row Up"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                props.MoveDown();
                                setToggle(false);
                            } }, "Move Row Down"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                props.Update(__assign(__assign({}, props), { Height: height }));
                                setToggle(false);
                            } }, "Save changes"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-secondary", onClick: function () { return setToggle(false); } }, "Close")))))));
};
var Widget = function (props) {
    if (props.Type == 'Histogram')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Histogram__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({}, props));
    else if (props.Type == 'Profile')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Profile__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({}, props));
    else if (props.Type == 'Stats')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Stats__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({}, props));
    else if (props.Type == 'Table')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Table__WEBPACK_IMPORTED_MODULE_9__["default"], __assign({}, props));
    else if (props.Type == 'Text')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Text__WEBPACK_IMPORTED_MODULE_10__["default"], __assign({}, props));
    else if (props.Type == 'Trend')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Trend_Trend__WEBPACK_IMPORTED_MODULE_11__["default"], __assign({}, props));
    else if (props.Type == 'XvsY')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_XvsY__WEBPACK_IMPORTED_MODULE_12__["default"], __assign({}, props));
    else
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "Not a widget.");
};
/* harmony default export */ __webpack_exports__["default"] = (WorkSpaceEditor);


/***/ }),

/***/ "./TypeScript/Implementations.ts":
/*!***************************************!*\
  !*** ./TypeScript/Implementations.ts ***!
  \***************************************/
/*! exports provided: Widget, Histogram, Trend, Stats, Table, Text, XvsY, CreateWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Histogram", function() { return Histogram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trend", function() { return Trend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return Stats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XvsY", function() { return XvsY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWidget", function() { return CreateWidget; });
/* harmony import */ var _gpa_gemstone_helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gpa-gemstone/helper-functions */ "../node_modules/@gpa-gemstone/helper-functions/lib/index.js");
/* harmony import */ var _gpa_gemstone_helper_functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_helper_functions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stats_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stats-lite */ "../node_modules/stats-lite/stats.js");
/* harmony import */ var stats_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stats_lite__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  Implementations.ts - Gbtc
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
//  01/27/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
var __extends = (undefined && undefined.__extends) || (function () {
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};


var Widget = /** @class */ (function () {
    function Widget(props) {
        var _this = this;
        this.SetLabel = function (label) {
            _this.Label = label;
        };
        this.SetHeight = function (height) { return _this.Height = height; };
        this.SetWidth = function (width) { return _this.Width = width; };
        this.SetJSON = function (json) { return _this.JSON = json; };
        this.AvailableSeries = function () { return _this.Data.map(function (dd) { return (__assign(__assign({}, dd), { DataSourceID: dd.DataSource.ID, DataSource: dd.DataSource })).Data.map(function (ddd) { return (__assign(__assign({}, ddd), { Data: [], DataSource: dd.DataSource.Name, DataSourceID: dd.DataSource.ID })); }); }).reduce(function (acc, val) { return acc.concat(val); }, []); };
        this.UpdateJSON = function (field, value) {
            _this.JSON[field] = value;
            return _this;
        };
        this.Height = props.Height;
        this.Width = props.Width;
        this.Type = props.Type;
        this.Label = props.Label;
        this.JSON = props.JSON;
        if (props.Data == undefined)
            this.Data = [];
        else
            this.Data = props.Data;
    }
    return Widget;
}());

var Histogram = /** @class */ (function (_super) {
    __extends(Histogram, _super);
    function Histogram(props) {
        var _this = _super.call(this, props) || this;
        _this.AddSeries = function (id, dataSourceID, label) {
            _this.JSON.Series.push({ ID: id, DataSourceID: dataSourceID, Field: "Average", Color: GetColor(), Profile: false, ProfileColor: GetColor(label) });
            return new Histogram(_this);
        };
        _this.RemoveSeries = function (index) {
            _this.JSON.Series.splice(index, 1);
            return new Histogram(_this);
        };
        _this.UpdateSeries = function (index, field, value) {
            _this.JSON.Series[index][field] = value;
            return new Histogram(_this);
        };
        _this.CalculateAxisRange = function () {
            var dd = [].concat.apply([], __spread(_this.Data.map(function (d) { return d.Data; })));
            var ss = _this.JSON.Series.map(function (series) { var _a, _b; return (_b = (_a = dd.find(function (d) { return d.ID === series.ID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).map(function (d) { return d[series.Field]; }); });
            var mm = ss.map(function (s) { return [Math.min.apply(Math, __spread(s)), Math.max.apply(Math, __spread(s))]; });
            _this.JSON.Max = Math.max.apply(Math, __spread([].concat.apply([], __spread(mm))));
            _this.JSON.Min = Math.min.apply(Math, __spread([].concat.apply([], __spread(mm))));
            var buffer = (_this.JSON.Max - _this.JSON.Min) * .10;
            _this.JSON.Max = _this.JSON.Max + buffer;
            _this.JSON.Min = _this.JSON.Min - buffer;
            return new Histogram(_this);
        };
        _this.Type = "Histogram";
        if (_this.JSON === undefined)
            _this.JSON = { Min: 0, Max: 10, Units: '', Series: [], BinCount: 10 };
        return _this;
    }
    return Histogram;
}(Widget));

var Trend = /** @class */ (function (_super) {
    __extends(Trend, _super);
    function Trend(props) {
        var _this = _super.call(this, props) || this;
        _this.AddAxis = function () { return _this.JSON.YAxis.push({ Max: 10, Min: 0, Position: 'left', Units: '' }); };
        _this.RemoveAxis = function (index) {
            if (_this.JSON.YAxis.length == 1)
                return;
            _this.JSON.YAxis.splice(index, 1);
            _this.JSON.Series.forEach(function (series) {
                if (series.Axis >= index)
                    series.Axis = (index > 0 ? series.Axis - 1 : 0);
            });
        };
        _this.UpdateAxis = function (index, field, value) { _this.JSON.YAxis[index][field] = value; };
        _this.CalculateAxisRange = function (type, index) {
            var dd = [].concat.apply([], __spread(_this.Data.map(function (d) { return d.Data; })));
            if (type === 'x') {
                var ss = _this.JSON.Series.map(function (series) { var _a, _b; return (_b = (_a = dd.find(function (d) { return d.ID === series.ID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).map(function (d) { return new Date(d.Timestamp).getTime(); }); });
                var mm = ss.map(function (s) { return [Math.min.apply(Math, __spread(s)), Math.max.apply(Math, __spread(s))]; });
                _this.JSON.Max = Math.max.apply(Math, __spread([].concat.apply([], __spread(mm))));
                _this.JSON.Min = Math.min.apply(Math, __spread([].concat.apply([], __spread(mm))));
            }
            else {
                if (index == undefined) {
                    var _loop_1 = function (index_1) {
                        var ss = _this.JSON.Series.filter(function (series) { return series.Axis === index_1; }).map(function (series) { var _a, _b; return (_b = (_a = dd.find(function (d) { return d.ID === series.ID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).map(function (d) { return d[series.Field]; }); });
                        var mm = ss.map(function (s) { return [Math.min.apply(Math, __spread(s)), Math.max.apply(Math, __spread(s))]; });
                        _this.JSON.YAxis[index_1]['Max'] = Math.max.apply(Math, __spread([].concat.apply([], __spread(mm))));
                        _this.JSON.YAxis[index_1]['Min'] = Math.min.apply(Math, __spread([].concat.apply([], __spread(mm))));
                        var buffer = (_this.JSON.YAxis[index_1]['Max'] - _this.JSON.YAxis[index_1]['Min']) * .10;
                        _this.JSON.YAxis[index_1]['Max'] = _this.JSON.YAxis[index_1]['Max'] + buffer;
                        _this.JSON.YAxis[index_1]['Min'] = _this.JSON.YAxis[index_1]['Min'] - buffer;
                    };
                    for (var index_1 = 0; index_1 < _this.JSON.YAxis.length; index_1++) {
                        _loop_1(index_1);
                    }
                }
                else {
                    var ss = _this.JSON.Series.filter(function (series) { return series.Axis === index; }).map(function (series) { var _a, _b; return (_b = (_a = dd.find(function (d) { return d.ID === series.ID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).map(function (d) { return d[series.Field]; }); });
                    var mm = ss.map(function (s) { return [Math.min.apply(Math, __spread(s)), Math.max.apply(Math, __spread(s))]; });
                    _this.JSON.YAxis[index]['Max'] = Math.max.apply(Math, __spread([].concat.apply([], __spread(mm))));
                    _this.JSON.YAxis[index]['Min'] = Math.min.apply(Math, __spread([].concat.apply([], __spread(mm))));
                    var buffer = (_this.JSON.YAxis[index]['Max'] - _this.JSON.YAxis[index]['Min']) * .10;
                    _this.JSON.YAxis[index]['Max'] = _this.JSON.YAxis[index]['Max'] + buffer;
                    _this.JSON.YAxis[index]['Min'] = _this.JSON.YAxis[index]['Min'] - buffer;
                }
            }
            return new Trend(_this);
        };
        _this.AddSeries = function (id, dataSourceID, label) {
            if (_this.JSON.Series.find(function (series) { return series.ID === id && series.DataSourceID === dataSourceID; }) !== undefined)
                return;
            _this.JSON.Series.push({ ID: id, DataSourceID: dataSourceID, Axis: 0, Field: "Average", Color: GetColor(label), Label: label, ShowEvents: false });
            _this.CalculateAxisRange('x');
            _this.CalculateAxisRange('y');
            return new Trend(_this);
        };
        _this.QuickAddVoltageRMS = function (dataSourceID) {
            var _a;
            var axis = _this.JSON.YAxis.findIndex(function (axis) { return axis.Units === 'Volts'; });
            if (axis < 0) {
                axis = _this.JSON.YAxis.push({ Units: 'Volts', Position: 'left', Min: 0, Max: 100 }) - 1;
            }
            (_a = _this.JSON.Series).push.apply(_a, __spread(_this.Data.find(function (datum) { return datum.DataSource.ID === dataSourceID; }).Data.filter(function (datum) { return datum.Type === 'Voltage' && datum.Characteristic === 'RMS'; }).map(function (datum) { return ({ ID: datum.ID, DataSourceID: dataSourceID, Axis: axis, Field: 'Average', Color: GetColor("V" + datum.Phase + " - " + datum.Meter), Label: datum.Name, ShowEvents: false }); })));
            _this.CalculateAxisRange('x');
            _this.CalculateAxisRange('y');
            return new Trend(_this);
        };
        _this.QuickAddCurrentRMS = function (dataSourceID) {
            var _a;
            var axis = _this.JSON.YAxis.findIndex(function (axis) { return axis.Units === 'Amps'; });
            if (axis < 0) {
                axis = _this.JSON.YAxis.push({ Units: 'Amps', Position: 'left', Min: 0, Max: 100 }) - 1;
            }
            (_a = _this.JSON.Series).push.apply(_a, __spread(_this.Data.find(function (datum) { return datum.DataSource.ID === dataSourceID; }).Data.filter(function (datum) { return datum.Type === 'Current' && datum.Characteristic === 'RMS'; }).map(function (datum) { return ({ ID: datum.ID, DataSourceID: dataSourceID, Axis: axis, Field: 'Average', Color: GetColor("I" + datum.Phase + " - " + datum.Meter), Label: datum.Name, ShowEvents: false }); })));
            _this.CalculateAxisRange('x');
            _this.CalculateAxisRange('y');
            return new Trend(_this);
        };
        _this.RemoveSeries = function (index) { return _this.JSON.Series.splice(index, 1); };
        _this.RemoveAll = function (dataSourceID) {
            _this.JSON.Series = _this.JSON.Series.filter(function (series) { return series.DataSourceID != dataSourceID; });
            return new Trend(_this);
        };
        _this.UpdateSeries = function (index, field, value) { _this.JSON.Series[index][field] = value; };
        _this.Pan = function (value) {
            _this.JSON.Max = _this.JSON.Max + value;
            _this.JSON.Min = _this.JSON.Min + value;
            return new Trend(_this);
        };
        _this.Type = "Trend";
        if (_this.JSON === undefined)
            _this.JSON = { Min: 0, Max: 10, Legend: false, Split: false, SplitType: 'Axis', YAxis: [{ Max: 10, Min: 0, Position: 'left', Units: '' }], Series: [] };
        return _this;
    }
    return Trend;
}(Widget));

//export class Profile extends Widget<TrenDAP.iProfile> {
//    constructor(height: number, width: number, json?: TrenDAP.iTrend) {
//        super("Profile", height, width, json);
//        if (json === undefined)
//            this.JSON = {  };
//    }
//}
var Stats = /** @class */ (function (_super) {
    __extends(Stats, _super);
    function Stats(props) {
        var _this = _super.call(this, props) || this;
        _this.SetSeries = function (id, dsID) { return _this.JSON.Series = { ID: id, DataSourceID: dsID, Field: 'Average' }; };
        _this.SetSeriesField = function (field) {
            _this.JSON.Series.Field = field;
            return new Stats(_this);
        };
        _this.SetPrecsision = function (value) {
            _this.JSON.Precision = value;
            return new Stats(_this);
        };
        _this.Stats = function () {
            var _a, _b, _c, _d;
            var series = _this.JSON.Series;
            if (series == null)
                return {
                    Mean: '',
                    Median: '',
                    //Mode: '',
                    Variance: '',
                    StdDev: '',
                    Percentile: {
                        10: '',
                        25: '',
                        50: '',
                        75: '',
                        90: '',
                    }
                };
            var dataSourceData = (_b = (_a = _this.Data.find(function (ds) { return ds.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
            var dataSeries = (_d = (_c = dataSourceData.find(function (d) { return d.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : []));
            var data = dataSeries.map(function (d) { return d[series.Field]; });
            if (data.length == 0)
                return {
                    Mean: '',
                    Median: '',
                    //Mode: '',
                    Variance: '',
                    StdDev: '',
                    Percentile: {
                        10: '',
                        25: '',
                        50: '',
                        75: '',
                        90: '',
                    }
                };
            return {
                Mean: stats_lite__WEBPACK_IMPORTED_MODULE_1___default.a.mean(data).toFixed(_this.JSON.Precision),
                Median: stats_lite__WEBPACK_IMPORTED_MODULE_1___default.a.median(data).toFixed(_this.JSON.Precision),
                //Mode: stats.mode(data)/*.toPrecision(this.JSON.Precision)*/,
                Variance: stats_lite__WEBPACK_IMPORTED_MODULE_1___default.a.variance(data).toFixed(_this.JSON.Precision),
                StdDev: stats_lite__WEBPACK_IMPORTED_MODULE_1___default.a.stdev(data).toFixed(_this.JSON.Precision),
                Percentile: {
                    10: stats_lite__WEBPACK_IMPORTED_MODULE_1___default.a.percentile(data, 0.10).toFixed(_this.JSON.Precision),
                    25: stats_lite__WEBPACK_IMPORTED_MODULE_1___default.a.percentile(data, 0.25).toFixed(_this.JSON.Precision),
                    50: stats_lite__WEBPACK_IMPORTED_MODULE_1___default.a.percentile(data, 0.50).toFixed(_this.JSON.Precision),
                    75: stats_lite__WEBPACK_IMPORTED_MODULE_1___default.a.percentile(data, 0.75).toFixed(_this.JSON.Precision),
                    90: stats_lite__WEBPACK_IMPORTED_MODULE_1___default.a.percentile(data, 0.90).toFixed(_this.JSON.Precision),
                }
            };
        };
        _this.Type = "Stats";
        if (_this.JSON === undefined)
            _this.JSON = { Series: null, Precision: 3 };
        return _this;
    }
    return Stats;
}(Widget));

var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        var _this = _super.call(this, props) || this;
        _this.SetSeries = function (id, dsID) { return _this.JSON.Series = { ID: id, DataSourceID: dsID, Field: 'Average' }; };
        _this.SetSeriesField = function (field) {
            _this.JSON.Series.Field = field;
            return new Stats(_this);
        };
        _this.SetPrecsision = function (value) {
            _this.JSON.Precision = value;
            return new Stats(_this);
        };
        if (_this.JSON === undefined)
            _this.JSON = { Series: null, Precision: 3 };
        return _this;
    }
    return Table;
}(Widget));

var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(props) {
        var _this = _super.call(this, props) || this;
        if (_this.JSON === undefined)
            _this.JSON = { Text: '' };
        return _this;
    }
    return Text;
}(Widget));

var XvsY = /** @class */ (function (_super) {
    __extends(XvsY, _super);
    function XvsY(props) {
        var _this = _super.call(this, props) || this;
        _this.CalculateRange = function (type) {
            var _a, _b, _c, _d, _e, _f;
            if (type === 'x') {
                var dd = (_b = (_a = _this.Data.find(function (ds) { return ds.DataSource.ID === _this.JSON.X.Series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
                var ss = dd.find(function (d) { return d.ID === _this.JSON.X.Series.ID; }).Data.map(function (d) { return d[_this.JSON.X.Series.Field]; });
                _this.JSON.X.Max = Math.max.apply(Math, __spread(ss));
                _this.JSON.X.Min = Math.min.apply(Math, __spread(ss));
                var buffer = (_this.JSON.X.Max - _this.JSON.X.Min) * .10;
                _this.JSON.X.Max = _this.JSON.X.Max + buffer;
                _this.JSON.X.Min = _this.JSON.X.Min - buffer;
            }
            else if (type === 'y') {
                var dd = (_d = (_c = _this.Data.find(function (ds) { return ds.DataSource.ID === _this.JSON.Y.Series.DataSourceID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : []));
                var ss = dd.find(function (d) { return d.ID === _this.JSON.Y.Series.ID; }).Data.map(function (d) { return d[_this.JSON.Y.Series.Field]; });
                _this.JSON.Y.Max = Math.max.apply(Math, __spread(ss));
                _this.JSON.Y.Min = Math.min.apply(Math, __spread(ss));
                var buffer = (_this.JSON.Y.Max - _this.JSON.Y.Min) * .10;
                _this.JSON.Y.Max = _this.JSON.Y.Max + buffer;
                _this.JSON.Y.Min = _this.JSON.Y.Min - buffer;
            }
            else {
                var dd = (_f = (_e = _this.Data.find(function (ds) { return ds.DataSource.ID === _this.JSON.X.Series.DataSourceID; })) === null || _e === void 0 ? void 0 : _e.Data, (_f !== null && _f !== void 0 ? _f : []));
                var ss = dd.find(function (d) { return d.ID === _this.JSON.X.Series.ID; }).Data.map(function (d) { return new Date(d.Timestamp).getTime(); });
                _this.JSON.TimeMax = Math.max.apply(Math, __spread(ss));
                _this.JSON.TimeMin = Math.min.apply(Math, __spread(ss));
            }
            return new XvsY(_this);
        };
        _this.SetAxis = function (axis, field, value) {
            if (axis === 'x')
                _this.JSON.X[field] = value;
            else
                _this.JSON.Y[field] = value;
            return new XvsY(_this);
        };
        _this.SetSeries = function (axis, id, dsID) {
            if (axis === 'x')
                _this.JSON.X.Series = { ID: id, DataSourceID: dsID, Field: 'Average' };
            else
                _this.JSON.Y.Series = { ID: id, DataSourceID: dsID, Field: 'Average' };
            return new XvsY(_this);
        };
        _this.UpdateSeries = function (axis, field, value) {
            if (axis === 'x')
                _this.JSON.X.Series[field] = value;
            else
                _this.JSON.Y.Series[field] = value;
            return new XvsY(_this);
        };
        _this.RemoveSeries = function (axis) {
            if (axis === 'x')
                _this.JSON.X.Series = null;
            else
                _this.JSON.Y.Series = null;
            return new XvsY(_this);
        };
        if (_this.JSON === undefined)
            _this.JSON = {
                Y: { Min: 0, Max: 100, Units: '', Series: null },
                X: { Min: 0, Max: 100, Units: '', Series: null },
                TimeMin: null, TimeMax: null, RegressionLine: false
            };
        if (_this.JSON.X == undefined)
            _this.JSON.X = { Min: 0, Max: 100, Units: '', Series: null };
        if (_this.JSON.Y == undefined)
            _this.JSON.Y = { Min: 0, Max: 100, Units: '', Series: null };
        return _this;
    }
    return XvsY;
}(Widget));

function CreateWidget(type, height, width) {
    if (type == 'Histogram')
        return new Histogram({ Height: height, Width: width, Label: type, Type: type, JSON: undefined });
    //else if (type == 'Profile')
    //    return new Profile(height, width);
    else if (type == 'Stats')
        return new Stats({ Height: height, Width: width, Label: type, Type: type, JSON: undefined });
    else if (type == 'Table')
        return new Table({ Height: height, Width: width, Label: type, Type: type, JSON: undefined });
    else if (type == 'Text')
        return new Text({ Height: height, Width: width, Label: type, Type: type, JSON: undefined });
    else if (type == 'Trend')
        return new Trend({ Height: height, Width: width, Label: type, Type: type, JSON: undefined });
    if (type == 'XvsY')
        return new XvsY({ Height: height, Width: width, Label: type, Type: type, JSON: undefined });
}
function GetColor(label) {
    if (label == undefined)
        return Object(_gpa_gemstone_helper_functions__WEBPACK_IMPORTED_MODULE_0__["RandomColor"])();
    else if (label.indexOf('Voltage A') >= 0)
        return '#A30000';
    else if (label.indexOf('Voltage B') >= 0)
        return '#0029A3';
    else if (label.indexOf('Voltage C') >= 0)
        return '#007A29';
    else if (label.indexOf('Voltage N') >= 0)
        return '#c3c3c3';
    else if (label.indexOf('Current A') >= 0)
        return '#FF0000';
    else if (label.indexOf('Current B') >= 0)
        return '#0066CC';
    else if (label.indexOf('Current C') >= 0)
        return '#33CC33';
    else if (label.indexOf('AN') >= 0)
        return '#FF0000';
    else if (label.indexOf('BN') >= 0)
        return '#0066CC';
    else if (label.indexOf('CN') >= 0)
        return '#33CC33';
    else if (label.indexOf('NG') >= 0)
        return '#c3c3c3';
    else if (label.indexOf('RES') >= 0)
        return '#ffc107';
    else if (label.indexOf('Average') >= 0)
        return '#9A52A4';
    else if (label.indexOf('Total') >= 0)
        return '#9A52A4';
    else if (label.indexOf('S0') >= 0)
        return '#A30000';
    else if (label.indexOf('S2') >= 0)
        return '#007A29';
    else if (label.indexOf('S1') >= 0)
        return '#0029A3';
    else
        return Object(_gpa_gemstone_helper_functions__WEBPACK_IMPORTED_MODULE_0__["RandomColor"])();
}


/***/ }),

/***/ "./TypeScript/LoadingSpinner.tsx":
/*!***************************************!*\
  !*** ./TypeScript/LoadingSpinner.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/spinner.scss */ "./Styles/spinner.scss");
/* harmony import */ var _Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  LoadingSpinner.tsx - Gbtc
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
//  01/18/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


var LoadingSpinner = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { className: _Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1___default.a.svg, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", height: props.Height, width: props.Width },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", { className: _Styles_spinner_scss__WEBPACK_IMPORTED_MODULE_1___default.a.circle, cx: "50", cy: "50", r: "45" })));
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9TdHlsZXMvc3Bpbm5lci5zY3NzIiwid2VicGFjazovLy8uL1N0eWxlcy9zcGlubmVyLnNjc3M/NmJkZSIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL0RhdGFTZXREYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvSGlzdG9ncmFtLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9XaWRnZXRzL1N0YXRzLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvVGFibGUudHN4Iiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvRmVhdHVyZXMvV2lkZ2V0cy9UZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvVHJlbmQvQXhpcy50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9XaWRnZXRzL1RyZW5kL1Nlcmllc1BpY2tlci50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9XaWRnZXRzL1RyZW5kL1RyZW5kLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvV2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvWHZzWS50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9Xb3JrU3BhY2VzL1dvcmtTcGFjZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9JbXBsZW1lbnRhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9Mb2FkaW5n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RSxDQUFDLEtBQ0osSUFBSSxFQUFFLFlBQUMsWUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFFLElBQUksU0FBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBbkMsQ0FBbUMsQ0FBQywwQ0FBRSxJQUFJLHVDQUFJLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxZQUFFLElBQUksU0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFkLENBQWMsQ0FBQywwQ0FBRSxJQUFJLHVDQUFJLEVBQUUsRUFBQyxDQUFDLE1BQU0sQ0FBQyxZQUFFLElBQUksb0RBQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksNkNBQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBbEwsQ0FBa0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFLLElBQUksUUFBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxJQUMzVztTQUFBLENBQUMsQ0FBQztRQUVKLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakIsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVyQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUzQixJQUFNLFFBQVEsR0FBRyx1Q0FBTyxF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QUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQXBELENBQW9ELENBQUMsMENBQUUsSUFBSSx1Q0FBSSxFQUFFLEdBQUM7Z0JBQ2hHLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztnQkFDakcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxXQUFRLEVBQUUsRUFBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsT0FBUixJQUFJLFdBQVEsRUFBRSxFQUFDLENBQUM7Z0JBQ2xDLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO2FBRTlDO2lCQUNJO2dCQUNELElBQUksRUFBRSxlQUFH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a0ZBQVcsRUFBRSxDQUFDO1NBQ3hDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxTQUFTLENBQUM7U0FDdEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLFNBQVMsQ0FBQztTQUN0RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sU0FBUyxDQUFDO1NBQ3RELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxTQUFTLENBQUM7U0FDdEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLFNBQVMsQ0FBQztTQUN0RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sU0FBUyxDQUFDO1NBQ3RELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxTQUFTLENBQUM7U0FDdEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLFNBQVMsQ0FBQztTQUMvQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sU0FBUyxDQUFDO1NBQy9DLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxTQUFTLENBQUM7U0FDL0MsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLFNBQVMsQ0FBQztTQUMvQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sU0FBUyxDQUFDO1NBQ2hELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxTQUFTLENBQUM7U0FDcEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLFNBQVMsQ0FBQztTQUNsRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sU0FBUyxDQUFDO1NBQy9DLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxTQUFTLENBQUM7U0FDL0MsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLFNBQVMsQ0FBQzs7UUFDL0MsT0FBTyxrRkFBVyxFQUFFLENBQUM7QUFDOUIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JjRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRTlFO0FBQ2tCO0FBRTVDLElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBMkU7SUFDL0YsT0FBTyxDQUNILG9FQUFLLFNBQVMsRUFBRSwyREFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7UUFDekgsdUVBQVEsU0FBUyxFQUFFLDJEQUFNLENBQUMsTUFBTSxFQUFHLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsSUFBSSxHQUFHLENBQzFELENBQ1QsQ0FBQztBQUNOLENBQUM7QUFFYyw2RUFBYyIsImZpbGUiOiJXb3JrU3BhY2VFZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLl8yTUtCYXNfN3V3dnRjeXJ5dkNIOVBZIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYW5pbWF0aW9uOiBfMzM3TTNDRERKd1F1dXVIRXRhMmlXbCA0cyBpbmZpbml0ZSBsaW5lYXI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIF8zMzdNM0NEREp3UXV1dUhFdGEyaVdsIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLl8ydDF0a2F0dHh0S2VVVml5eHo1SUg4IHtcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcbiAgc3Ryb2tlOiAjMmYzZDRjO1xcbiAgc3Ryb2tlLXdpZHRoOiAxMDtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICBzdHJva2UtZGFzaGFycmF5OiAyODM7XFxuICBzdHJva2UtZGFzaG9mZnNldDogNzU7XFxuICBhbmltYXRpb246IF8xbDh5eDR0dHotRGJQcFhyc0V5Ni1YIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcXG59XFxuXFxuQGtleWZyYW1lcyBfMWw4eXg0dHR6LURiUHBYcnNFeTYtWCB7XFxuICAwJSwgMjUlIHtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI4MDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUsIDc1JSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA3NTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyODA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbHBhb2NVNFcwNmpDemhtQmNLTXJRIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xcbiAgfVxcbn1cXG4uS1BBMWJRNzFwZnpxR1drZms2a2U4IHtcXG4gIGFuaW1hdGlvbjogbHBhb2NVNFcwNmpDemhtQmNLTXJRIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNwaW5uZXJcIjogXCJfMk1LQmFzXzd1d3Z0Y3lyeXZDSDlQWVwiLFxuXHRcInNwaW5cIjogXCJfMzM3TTNDRERKd1F1dXVIRXRhMmlXbFwiLFxuXHRcImNpcmNsZVwiOiBcIl8ydDF0a2F0dHh0S2VVVml5eHo1SUg4XCIsXG5cdFwiY2lyY2xlLS1hbmltYXRpb25cIjogXCJfMWw4eXg0dHR6LURiUHBYcnNFeTYtWFwiLFxuXHRcInN2Z1wiOiBcIktQQTFiUTcxcGZ6cUdXa2ZrNmtlOFwiLFxuXHRcInN2Zy0tYW5pbWF0aW9uXCI6IFwibHBhb2NVNFcwNmpDemhtQmNLTXJRXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1tb2R1bGVzLXR5cGVzY3JpcHQtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGlubmVyLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbW9kdWxlcy10eXBlc2NyaXB0LWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3Bpbm5lci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1tb2R1bGVzLXR5cGVzY3JpcHQtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGlubmVyLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uc3RhbnRzLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzMwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyBlbW9qaXNcclxuY29uc3QgSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcclxuY29uc3QgUGVuY2lsID0gJ+Kcj++4jyc7XHJcbmNvbnN0IFRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xyXG5jb25zdCBDcm9zc01hcmsgPSAn4p2MJztcclxuY29uc3QgUGx1cyA9ICfinpUnO1xyXG5jb25zdCBXYXJuaW5nID0gJ+KaoO+4jyc7XHJcbmNvbnN0IFNwaW5uZXIgPSAn8J+UhCc7XHJcbmNvbnN0IFdyZW5jaCA9ICfwn5SnJztcclxuXHJcbmV4cG9ydCB7IEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFRyYXNoQ2FuLCBDcm9zc01hcmssIFBsdXMsIFdhcm5pbmcsIFNwaW5uZXIsIFdyZW5jaCB9OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU2V0RGF0YS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDEvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlZHV4LCBUcmVuREFQIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGZXRjaERhdGFTZXREYXRhLCBGZXRjaERhdGFTZXRzLCBTZWxlY3REYXRhU2V0QnlJRCwgU2VsZWN0RGF0YVNldHNTdGF0dXMsIFVwZGF0ZURhdGFTZXREYXRhRmxhZyB9IGZyb20gJy4vRGF0YVNldHNTbGljZSdcclxuaW1wb3J0IHsgIFNwaW5uZXIsIFdhcm5pbmcsIENyb3NzTWFyaywgSGVhdnlDaGVja01hcmsgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vU3R5bGVzL3NwaW5uZXIuc2Nzcyc7XHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuLi8uLi9Mb2FkaW5nU3Bpbm5lcic7XHJcblxyXG5jb25zdCBEYXRhU2V0RGF0YSA9IChwcm9wczogeyBJRDogbnVtYmVyIH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGRhdGFTZXQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdERhdGFTZXRCeUlEKHN0YXRlLCBwcm9wcy5JRCkpO1xyXG4gICAgY29uc3QgZHNTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0c1N0YXR1cyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHNTdGF0dXMgPT09ICdpZGxlJykge1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkc1N0YXR1cyA9PSAndW5pdGlhdGVkJyB8fCBkc1N0YXR1cyA9PT0gJ2NoYW5nZWQnKVxyXG4gICAgICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTZXRzKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkc1N0YXR1c10pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGF0YVNldCA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBlbHNlIGlmIChkYXRhU2V0LkRhdGEuU3RhdHVzID09PSAndW5pdGlhdGVkJylcclxuICAgICAgICAgICAgZGlzcGF0Y2goVXBkYXRlRGF0YVNldERhdGFGbGFnKGRhdGFTZXQpKTtcclxuICAgIH0sIFtkYXRhU2V0XSk7XHJcblxyXG5cclxuICAgIGlmIChkYXRhU2V0ID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBlbHNlIGlmIChkYXRhU2V0LkRhdGE/LlN0YXR1cyA9PT0gJ2xvYWRpbmcnKVxyXG4gICAgICAgIHJldHVybiA8c3BhbiB0aXRsZT1cIkxvYWRpbmcgRGF0YS5cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyNSB9fT48TG9hZGluZ1NwaW5uZXIgSGVpZ2h0PXsyNX0gV2lkdGg9ezI1fSBDb2xvcj1cImJsYWNrXCIgQmFja2dyb3VuZD1cIndoaXRlXCIgLz48L3NwYW4+O1xyXG4gICAgZWxzZSBpZiAoZGF0YVNldC5EYXRhPy5TdGF0dXMgPT09ICdlcnJvcicpXHJcbiAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKEZldGNoRGF0YVNldERhdGEoZGF0YVNldCkpfSB0aXRsZT17YEVycm9yIGxvYWRpbmcgZGF0YTogJHtkYXRhU2V0LkRhdGEuRXJyb3J9LiBDbGljayB0byByZWxvYWQuYH0+e0Nyb3NzTWFya308L2J1dHRvbj47XHJcbiAgICBlbHNlIGlmIChkYXRhU2V0LkRhdGE/LlN0YXR1cyA9PT0gJ2lkbGUnKVxyXG4gICAgICAgIHJldHVybiA8PjxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKEZldGNoRGF0YVNldERhdGEoZGF0YVNldCkpfSB0aXRsZT0nRGF0YSBsb2FkZWQgaW50byBUcmVuREFQLiBDbGljayB0byByZWxvYWQuJyA+e0hlYXZ5Q2hlY2tNYXJrfTwvYnV0dG9uPjwvPjtcclxuICAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKEZldGNoRGF0YVNldERhdGEoZGF0YVNldCkpfSB0aXRsZT0nQ2xpY2sgdG8gbG9hZCBkYXRhIGludG8gVHJlbkRBUCc+e1dhcm5pbmd9PC9idXR0b24+O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YVNldERhdGE7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEhpc3RvZ3JhbS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMTEvMTYvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vU3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IFdpZGdldCwgeyBBZGRpdGlvbmFsSW5mbywgU2VyaWVzU2VsZWN0IH0gZnJvbSAnLi9XaWRnZXQnO1xyXG5pbXBvcnQgeyBDcm9zc01hcmsgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBIaXN0b2dyYW0gfSBmcm9tICcuLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5cclxuXHJcbmNvbnN0IFN2Z1N0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgZmlsbDogJ25vbmUnLFxyXG4gICAgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJyxcclxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcclxuICAgIFdlYmtpdFRvdWNoQ2FsbG91dDogJ25vbmUnLFxyXG4gICAgV2Via2l0VXNlclNlbGVjdDogJ25vbmUnLFxyXG4gICAgS2h0bWxVc2VyU2VsZWN0OiAnbm9uZScsXHJcbiAgICBNb3pVc2VyU2VsZWN0OiAnbm9uZScsXHJcbiAgICBtc1VzZXJTZWxlY3Q6ICdub25lJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlzdG9ncmFtSlNYKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pSGlzdG9ncmFtPikge1xyXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZWNvcmQsIHNldFJlY29yZF0gPSBSZWFjdC51c2VTdGF0ZTxIaXN0b2dyYW0+KG5ldyBIaXN0b2dyYW0ocHJvcHMpKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgfSwgW3RvZ2dsZSwgcHJvcHMuSlNPTl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgSW5pdGlhbGl6ZShyZWNvcmQpO1xyXG4gICAgfSwgW3JlY29yZF0pXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRSZWNvcmQobmV3IEhpc3RvZ3JhbSh7IC4uLnJlY29yZCwgRGF0YTogcHJvcHMuRGF0YSB9KSk7XHJcbiAgICB9LCBbcHJvcHMuRGF0YV0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVjb3JkKG5ldyBIaXN0b2dyYW0oeyAuLi5yZWNvcmQsIEhlaWdodDogcHJvcHMuSGVpZ2h0IH0pKVxyXG4gICAgfSwgW3Byb3BzLkhlaWdodF0pXHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZShzZXR0aW5nczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaUhpc3RvZ3JhbT4pIHtcclxuICAgICAgICBjb25zdCBwcm9maWxlID0gc2V0dGluZ3MuSlNPTi5TZXJpZXMubWFwKHNlcmllcyA9PiBzZXJpZXMuUHJvZmlsZSkucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2IHx8IGN1cnIsIGZhbHNlKTtcclxuICAgICAgICBjb25zdCBtYXJnaW4gPSB7IGJvdHRvbTogNTAsIGxlZnQ6IDUwLCB0b3A6IDQwLCByaWdodDogKHByb2ZpbGUgPyA3MCA6IDIwKSB9O1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IHJlY29yZC5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuXHJcbiAgICAgICAgY29uc3QgZXh0ZW50ID0gZDMuZXh0ZW50KFtdLmNvbmNhdCguLi5zZXR0aW5ncy5KU09OLlNlcmllcy5tYXAoc2VyaWVzID0+ICgoc2V0dGluZ3MuRGF0YS5maW5kKGQgPT4gZC5EYXRhU291cmNlLklEID09PSBzZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSA/P1tdKS5maW5kKGQ9PiBkLklEID09PSBzZXJpZXMuSUQpPy5EYXRhPz8gW10pLm1hcChkID0+IGRbc2VyaWVzLkZpZWxkXSBhcyBudW1iZXIpKSkpO1xyXG4gICAgICAgIC8vLy8gc2V0IHRoZSBwYXJhbWV0ZXJzIGZvciB0aGUgaGlzdG9ncmFtXHJcbiAgICAgICAgbGV0IGhpc3RvZ3JhbXMgPSAoc2V0dGluZ3MuSlNPTj8uU2VyaWVzID8/IFtdKS5tYXAoc2VyaWVzID0+IHtcclxuICAgICAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBzZXR0aW5ncy5EYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IHNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgICAgICBsZXQgZGF0dW0gPSBkYXRhU291cmNlLmZpbmQoZCA9PiBkLklEID09PSBzZXJpZXMuSUQpPy5EYXRhLm1hcChkID0+IGRbc2VyaWVzLkZpZWxkXSkgPz8gW107XHJcbiAgICAgICAgICAgIGxldCBoaXN0b2dyYW0gPSBkMy5oaXN0b2dyYW08bnVtYmVyLCBudW1iZXI+KClcclxuICAgICAgICAgICAgICAgIC52YWx1ZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfSkgICAvLyBJIG5lZWQgdG8gZ2l2ZSB0aGUgdmVjdG9yIG9mIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAuZG9tYWluKGV4dGVudCkgIC8vIHRoZW4gdGhlIGRvbWFpbiBvZiB0aGUgZ3JhcGhpY1xyXG4gICAgICAgICAgICAgICAgLnRocmVzaG9sZHMoc2V0dGluZ3MuSlNPTi5CaW5Db3VudCk7IC8vIHRoZW4gdGhlIG51bWJlcnMgb2YgYmluc1xyXG5cclxuICAgICAgICAgICAgLy8gQW5kIGFwcGx5IHRoaXMgZnVuY3Rpb24gdG8gZGF0YSB0byBnZXQgdGhlIGJpbnNcclxuICAgICAgICAgICAgcmV0dXJuIGhpc3RvZ3JhbShkYXR1bSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgeU1heCA9IE1hdGgubWF4KC4uLltdLmNvbmNhdCguLi5oaXN0b2dyYW1zKS5tYXAoYiA9PiBiLmxlbmd0aCkpO1xyXG4gICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QocmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXHJcbiAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc2V0dGluZ3MuV2lkdGgpXHJcbiAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHNldHRpbmdzLkhlaWdodClcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLmRvbWFpbihbc2V0dGluZ3MuSlNPTi5NaW4sIHNldHRpbmdzLkpTT04uTWF4XSkgICAgIC8vIGNhbiB1c2UgdGhpcyBpbnN0ZWFkIG9mIDEwMDAgdG8gaGF2ZSB0aGUgbWF4IG9mIGRhdGE6IGQzLm1heChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiArZC5wcmljZSB9KVxyXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHNldHRpbmdzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHRdKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgKHNldHRpbmdzLkhlaWdodCAtIG1hcmdpbi5ib3R0b20pICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXHJcblxyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHNldHRpbmdzLldpZHRoIC8gMikgKyBcIixcIiArIChzZXR0aW5ncy5IZWlnaHQgLSBtYXJnaW4uYm90dG9tLzMpICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC50ZXh0KHJlY29yZC5KU09OLlVuaXRzKVxyXG5cclxuICAgICAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAucmFuZ2UoW3NldHRpbmdzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLCAwXSlcclxuICAgICAgICAgICAgLmRvbWFpbihbMCwgeU1heF0pOyAgIC8vIGQzLmhpc3QgaGFzIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIFkgYXhpcyBvYnZpb3VzbHlcclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcclxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBzZXR0aW5ncy5IZWlnaHQvMiArIFwiLFwiICsgbWFyZ2luLmxlZnQvMyArIFwiKVwiKVxyXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNvdW50c1wiKVxyXG5cclxuICAgICAgICBjb25zdCBiaW5XaWR0aCA9IE1hdGgubWF4KC4uLmhpc3RvZ3JhbXMubWFwKGhpc3RvZ3JhbSA9PiBNYXRoLm1heCguLi5oaXN0b2dyYW0ubWFwKGEgPT4geChhLngxKSAtIHgoYS54MCkpKSkpO1xyXG4gICAgICAgIC8vc3ZnLnNlbGVjdEFsbChcImcuYmluc1wiKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcuYmluc1wiKVxyXG4gICAgICAgICAgICAuZGF0YShzZXR0aW5ncy5KU09OLlNlcmllcylcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdiaW5zJykuYXR0cihcImZpbGxcIiwgKHNlcmllcykgPT4gc2VyaWVzLkNvbG9yKVxyXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGluZGV4KSA9PiBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnQgKyBpbmRleCAqIGJpbldpZHRoIC8gc2V0dGluZ3MuSlNPTi5TZXJpZXMubGVuZ3RofSwke21hcmdpbi50b3B9KWApXHJcbiAgICAgICAgICAgICAgICAvLy5hdHRyKFwib3BhY2l0eVwiLCAwLjMpXHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKCdyZWN0JylcclxuICAgICAgICAgICAgICAgIC5kYXRhKChzZXJpZXMsIGluZGV4KSA9PiBoaXN0b2dyYW1zW2luZGV4XSlcclxuICAgICAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgMSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCxpLGcpID0+IGB0cmFuc2xhdGUoJHt4KGQueDApfSwke3koZC5sZW5ndGgpfSlgKVxyXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiAoeChkLngxKSAtIHgoZC54MCkgPiAyID8gKHgoZC54MSkgLSB4KGQueDApKSAvIHNldHRpbmdzLkpTT04uU2VyaWVzLmxlbmd0aCA6IDIpIC0gMSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gc3ZnSGVpZ2h0IC0geShkLmxlbmd0aCkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmIChwcm9maWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVzID0gcmVjb3JkLkpTT04uU2VyaWVzLmZpbHRlcihzZXJpZXMgPT4gc2VyaWVzLlByb2ZpbGUpLm1hcCgoc2VyaWVzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBzZXR0aW5ncy5EYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IHNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdHVtID0gZGF0YVNvdXJjZS5maW5kKGQgPT4gZC5JRCA9PT0gc2VyaWVzLklEKT8uRGF0YS5tYXAoZCA9PiBkW3Nlcmllcy5GaWVsZF0pID8/IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhpc3RvZ3JhbSA9IGQzLmhpc3RvZ3JhbTxudW1iZXIsIG51bWJlcj4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfSkgICAvLyBJIG5lZWQgdG8gZ2l2ZSB0aGUgdmVjdG9yIG9mIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0dW0pIGFzIFtudW1iZXIsIG51bWJlcl0pICAvLyB0aGVuIHRoZSBkb21haW4gb2YgdGhlIGdyYXBoaWNcclxuICAgICAgICAgICAgICAgICAgICAudGhyZXNob2xkcyhzZXR0aW5ncy5KU09OLkJpbkNvdW50KShkYXR1bSk7IC8vIHRoZW4gdGhlIG51bWJlcnMgb2YgYmluc1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IENvbG9yOiBzZXJpZXMuUHJvZmlsZUNvbG9yLCBQcm9maWxlOiBoaXN0b2dyYW0ubWFwKChzdW0gPT4gdmFsdWUgPT4gc3VtICs9IHZhbHVlLmxlbmd0aCkoMCkpLm1hcCgocHJvZiwgaSkgPT4gKHsgQmluOiBoaXN0b2dyYW1baV0ueDAsIFZhbHVlOiBwcm9mIH0pKX07XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9jb25zdCBwcm9maWxlcyA9IGhpc3RvZ3JhbXMubWFwKGhpc3QgPT4gaGlzdC5tYXAoKHN1bSA9PiB2YWx1ZSA9PiBzdW0gKz0gdmFsdWUubGVuZ3RoKSgwKSkubWFwKChwcm9mLCBpKSA9PiAoeyBCaW46IGhpc3RbaV0ueDAsIFZhbHVlOiBwcm9mIH0pKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHB5TWF4ID0gTWF0aC5tYXgoLi4ucHJvZmlsZXMubWFwKHByID0+IHByLlByb2ZpbGUpLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5jb25jYXQoY3VyciksIFtdKS5tYXAocCA9PiBwLlZhbHVlKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHB5ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAgICAgLnJhbmdlKFtzZXR0aW5ncy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSwgMF0pXHJcbiAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBweU1heF0pOyAgIC8vIGQzLmhpc3QgaGFzIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIFkgYXhpcyBvYnZpb3VzbHlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHB5QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChzZXR0aW5ncy5XaWR0aCAtIG1hcmdpbi5yaWdodCkgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcclxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNSaWdodChweSkpO1xyXG4gICAgICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKSB0cmFuc2xhdGUoLVwiICsgc2V0dGluZ3MuSGVpZ2h0IC8gMiArIFwiLFwiICsgKHNldHRpbmdzLldpZHRoIC0gbWFyZ2luLnJpZ2h0LzMpICsgXCIpXCIpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoXCJQcm9maWxlXCIpXHJcblxyXG4gICAgICAgICAgICAvL2NvbnN0IGZpbHRlcmVkRGF0YSA9IHByb2ZpbGUuZmluZChkcyA9PiBkcy5JRCA9PT0gc2VyaWVzLklEKT8uRGF0YSA/PyBbXSkuZmlsdGVyKGRzID0+IG1vbWVudChkcy5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSA+PSBzZXR0aW5ncy5KU09OLk1pbiAmJiBtb21lbnQoZHMuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkgPD0gc2V0dGluZ3MuSlNPTi5NYXggJiYgZHNbZmllbGRdID49IGF4aXMuTWluICYmIGRzW2ZpZWxkXSA8PSBheGlzLk1heClcclxuICAgICAgICAgICAgY29uc3QgbGluZUZ1bmMgPSBkMy5saW5lPHtCaW46IG51bWJlciwgVmFsdWU6IG51bWJlcn0+KCkueChkZCA9PiB4KGRkLkJpbikpLnkoZGQgPT4gcHkoZGQuVmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgICAgICAgICAuZGF0YShwcm9maWxlcylcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGQgPT4gZC5Db2xvcilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4gbGluZUZ1bmMoZC5Qcm9maWxlKSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6IHByb3BzLldpZHRoLCBoZWlnaHQ6IHByb3BzLkhlaWdodCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIndpZGdpdC1sYWJlbFwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLkxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gXCIgKyBzdHlsZXNbXCJ3aWRnaXQtY29udHJvbHNcIl19IHRpdGxlPSdXaWRnZXQgU2V0dGluZ3MnIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSh0cnVlKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFdpZGdldCB7Li4ucHJvcHN9IFJlY29yZD17cmVjb3JkfSBUb2dnbGU9e3RvZ2dsZX0gU2V0VG9nZ2xlPXsoYm9vbCkgPT4gc2V0VG9nZ2xlKGJvb2wpIH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaVdpZGdldD4gRmllbGQ9J0xhYmVsJyBSZWNvcmQ9e3JlY29yZH0gVHlwZT0ndGV4dCcgU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKG5ldyBIaXN0b2dyYW0ocikpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V2lkdGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmVjb3JkPy5XaWR0aCA/PyAwfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKG5ldyBIaXN0b2dyYW0oeyAuLi5yZWNvcmQsIFdpZHRoOiBwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSB9KSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldnQpID0+IHNldFJlY29yZChuZXcgSGlzdG9ncmFtKHsgLi4ucmVjb3JkLCBXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSAyMDAgfSkpfT5GdWxsIFdpZHRoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlIaXN0b2dyYW0+IEZpZWxkPSdVbml0cycgUmVjb3JkPXtyZWNvcmQuSlNPTn0gVHlwZT0ndGV4dCcgU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKG5ldyBIaXN0b2dyYW0oeyAuLi5yZWNvcmQsIEpTT046IHIgfSkpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pSGlzdG9ncmFtPiBGaWVsZD0nQmluQ291bnQnIExhYmVsPSdCaW5zJyBSZWNvcmQ9e3JlY29yZC5KU09OfSBUeXBlPSdudW1iZXInIFNldHRlcj17KHIpID0+IHNldFJlY29yZChuZXcgSGlzdG9ncmFtKHsgLi4ucmVjb3JkLCBKU09OOiByIH0pKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pSGlzdG9ncmFtPiBGaWVsZD0nTWluJyBMYWJlbD0nTWluJyBSZWNvcmQ9e3JlY29yZC5KU09OIGFzIFRyZW5EQVAuaUhpc3RvZ3JhbX0gVHlwZT0nbnVtYmVyJyBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQoeyAuLi5yZWNvcmQsIEpTT046IHIgfSl9IFZhbGlkPXsoZmllbGQpID0+IHRydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaUhpc3RvZ3JhbT4gRmllbGQ9J01heCcgUmVjb3JkPXtyZWNvcmQuSlNPTiBhcyBUcmVuREFQLmlIaXN0b2dyYW19IFR5cGU9J251bWJlcicgU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKHsgLi4ucmVjb3JkLCBKU09OOiByIH0pfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDE2IH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRSZWNvcmQocmVjb3JkLkNhbGN1bGF0ZUF4aXNSYW5nZSgpKX0+VXNlIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+U2VyaWVzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3JkaW9uXCIgc3R5bGU9e3tvdmVyZmxvd1k6ICdhdXRvJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LzJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5EYXRhLm1hcCgoZCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e1wiI2NvbGxhcHNlXCIgKyBpfT57ZC5EYXRhU291cmNlLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcImNvbGxhcHNlXCIgKyBpfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBzaG93XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzU2VsZWN0IFdpZGdldD17cmVjb3JkfSBEYXRhU291cmNlSUQ9e2QuRGF0YVNvdXJjZS5JRH0gQ2FsbGJhY2s9eygpID0+IHNldFJlY29yZChuZXcgSGlzdG9ncmFtKHJlY29yZCkpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1RyZW5EQVBEQicgPyAocmVjb3JkLkpTT04/LlNlcmllcyA/PyBbXSkubWFwKChzZXJpZXMsaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXR1bSA9IGQuRGF0YS5maW5kKGRkID0+IGRkLklEID09PSBzZXJpZXMuSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0dW0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtzZXJpZXMuSUR9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2RhdHVtLk5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRpdGlvbmFsSW5mbyBEYXRhPXtkYXR1bX0gSW5kZXg9e2l9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzUGlja2VyIEluZGV4PXtpbmR9IFNlcmllcz17c2VyaWVzfSBXaWRnZXQ9e3JlY29yZH0gQ2FsbGJhY2s9eyh3aWRnZXQpID0+IHNldFJlY29yZCh3aWRnZXQpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5jb25zdCBTZXJpZXNQaWNrZXIgPSAocHJvcHM6IHsgSW5kZXg6IG51bWJlciwgU2VyaWVzOiBUcmVuREFQLmlIaXN0b2dyYW1TZXJpZXMsIFdpZGdldDogSGlzdG9ncmFtLCBDYWxsYmFjazogKHdpZGdldDogSGlzdG9ncmFtKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihwcm9wcy5TZXJpZXMuQ29sb3IpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRGaWVsZD4ocHJvcHMuU2VyaWVzLkZpZWxkKTtcclxuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHByb3BzLlNlcmllcy5Qcm9maWxlKTtcclxuICAgIGNvbnN0IFtwQ29sb3IsIHNldFBDb2xvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHByb3BzLlNlcmllcy5Qcm9maWxlQ29sb3IpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHByb3BzLkNhbGxiYWNrKHByb3BzLldpZGdldC5VcGRhdGVTZXJpZXMocHJvcHMuSW5kZXgsIFwiQ29sb3JcIiwgY29sb3IpKSwgW2NvbG9yXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gcHJvcHMuQ2FsbGJhY2socHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5JbmRleCwgXCJGaWVsZFwiLCB0eXBlKSksIFt0eXBlXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gcHJvcHMuQ2FsbGJhY2socHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5JbmRleCwgXCJQcm9maWxlXCIsIHByb2ZpbGUpKSwgW3Byb2ZpbGVdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBwcm9wcy5DYWxsYmFjayhwcm9wcy5XaWRnZXQuVXBkYXRlU2VyaWVzKHByb3BzLkluZGV4LCBcIlByb2ZpbGVDb2xvclwiLCBwQ29sb3IpKSwgW3BDb2xvcl0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5GaWVsZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZShldnQudGFyZ2V0LnZhbHVlIGFzIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXZlcmFnZVwiPkF2Zzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaW5pbXVtXCI+TWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1heGltdW1cIj5NYXg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2NvbG9yfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q29sb3IoZXZ0LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZmlsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3t3aWR0aDogMjB9fSAgdmFsdWU9e3Byb2ZpbGU/LnRvU3RyaW5nKCl9IGNoZWNrZWQ9e3Byb2ZpbGV9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRQcm9maWxlKGV2dC50YXJnZXQuY2hlY2tlZCl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlByb2ZpbGUgQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtwQ29sb3J9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRQQ29sb3IoZXZ0LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5DYWxsYmFjayhwcm9wcy5XaWRnZXQuUmVtb3ZlU2VyaWVzKHByb3BzLkluZGV4KSkgfT57Q3Jvc3NNYXJrfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbik7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgV2lkZ2l0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xNi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vU3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUocHJvcHM6IFRyZW5EQVAuaVdpZGdldCkge1xyXG4gICAgcmV0dXJuIDxkaXY+UHJvZmlsZTwvZGl2PjtcclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgU3RhdHMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzE2LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IFN0YXRzIH0gZnJvbSAnLi4vLi4vSW1wbGVtZW50YXRpb25zJztcclxuaW1wb3J0IFdpZGdldCwgeyBTZXJpZXNTZWxlY3QsIEFkZGl0aW9uYWxJbmZvIH0gZnJvbSAnLi9XaWRnZXQnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdHNKU1gocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlTdGF0cz4pIHtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8U3RhdHM+KG5ldyBTdGF0cyhwcm9wcykpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVjb3JkKG5ldyBTdGF0cyh7IC4uLnJlY29yZCwgRGF0YTogcHJvcHMuRGF0YSB9KSk7XHJcbiAgICB9LCBbcHJvcHMuRGF0YV0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBzdGF0cyA9IHJlY29yZC5TdGF0cygpO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IHJlY29yZC5EYXRhLmZpbmQoZGQgPT4gZGQuRGF0YVNvdXJjZS5JRCA9PT0gcmVjb3JkLkpTT04uU2VyaWVzPy5EYXRhU291cmNlSUQgPz8gMCk/LkRhdGEgPz8gW107XHJcbiAgICBjb25zdCBkYXR1bSA9IGRhdGFTb3VyY2UuZmluZChkZCA9PiBkZC5JRCA9PT0gcmVjb3JkLkpTT04uU2VyaWVzPy5JRCA/PyAwKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6IHByb3BzLldpZHRoLCBoZWlnaHQ6IHByb3BzLkhlaWdodCwgbWF4SGVpZ2h0OiBwcm9wcy5IZWlnaHQsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wid2lkZ2l0LWxhYmVsXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBcIiArIHN0eWxlc1tcIndpZGdpdC1jb250cm9sc1wiXX0gdGl0bGU9J1dpZGdldCBTZXR0aW5ncycgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKHRydWUpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPkNhdGVnb3J5PC90aD48dGg+U3RhdGlzdGljPC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoc3RhdHMpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnUGVyY2VudGlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2tleX0+PHRkPntrZXl9PC90ZD48dGQ+e3N0YXRzW2tleV19PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdGF0cy5QZXJjZW50aWxlKS5tYXAocGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dHIga2V5PXtrZXkrcGtleX0+PHRkPntwa2V5fXRoIFBlcmNlbnRpbGU8L3RkPjx0ZD57c3RhdHMuUGVyY2VudGlsZVtwa2V5XX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxXaWRnZXQgey4uLnByb3BzfSBSZWNvcmQ9e3JlY29yZH0gVG9nZ2xlPXt0b2dnbGV9IFNldFRvZ2dsZT17KGJvb2wpID0+IHNldFRvZ2dsZShib29sKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pU3RhdHM+PiBGaWVsZD0nTGFiZWwnIFJlY29yZD17cmVjb3JkfSBUeXBlPSd0ZXh0JyBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQobmV3IFN0YXRzKHIpKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldpZHRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3JlY29yZD8uV2lkdGh9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFN0YXRzKHsgLi4ucmVjb3JkLCBXaWR0aDogcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkgfSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFN0YXRzKHsgLi4ucmVjb3JkLCBXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSAyMDAgfSkpfT5GdWxsIFdpZHRoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+U2VyaWVzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3JkaW9uXCIgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnYXV0bycsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuRGF0YS5tYXAoKGQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtcIiNjb2xsYXBzZVwiICsgaX0+e2QuRGF0YVNvdXJjZS5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcImNvbGxhcHNlXCIgKyBpfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBzaG93XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzU2VsZWN0IFdpZGdldD17cmVjb3JkfSBEYXRhU291cmNlSUQ9e2QuRGF0YVNvdXJjZS5JRH0gQ2FsbGJhY2s9eygpID0+IHNldFJlY29yZChuZXcgU3RhdHMocmVjb3JkKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1RyZW5EQVBEQicgJiYgcmVjb3JkLkpTT04uU2VyaWVzICE9IHVuZGVmaW5lZCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cmVjb3JkLkpTT04uU2VyaWVzLklEfSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2RhdHVtPy5OYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm8gSW5kZXg9e2l9IERhdGE9e2RhdHVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RmllbGQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmVjb3JkLkpTT04uU2VyaWVzLkZpZWxkfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKHJlY29yZC5TZXRTZXJpZXNGaWVsZChldnQudGFyZ2V0LnZhbHVlIGFzIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkF2ZXJhZ2VcIj5Bdmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWluaW11bVwiPk1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYXhpbXVtXCI+TWF4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByZWNpc2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtyZWNvcmQuSlNPTi5QcmVjaXNpb259IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQocmVjb3JkLlNldFByZWNzaXNpb24ocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgVGFibGUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzE2LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCBUYWJsZUZvcm0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi4vLi4vSW1wbGVtZW50YXRpb25zJztcclxuaW1wb3J0IFdpZGdldCwgeyBTZXJpZXNTZWxlY3QsIEFkZGl0aW9uYWxJbmZvIH0gZnJvbSAnLi9XaWRnZXQnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBTb3J0IH0gZnJvbSAnLi4vV29ya1NwYWNlcy9Xb3JrU3BhY2VzU2xpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVKU1gocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlUYWJsZT4pIHtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8VGFibGU+KG5ldyBUYWJsZShwcm9wcykpO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PignVGltZXN0YW1wJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdPihbXSk7XHJcbiAgICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFSZXR1cm5EYXRhPih7fSBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFJlY29yZChuZXcgVGFibGUoeyAuLi5yZWNvcmQsIERhdGE6IHByb3BzLkRhdGEgfSkpO1xyXG4gICAgfSwgW3Byb3BzLkRhdGFdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSByZWNvcmQuRGF0YS5maW5kKGRkID0+IGRkLkRhdGFTb3VyY2UuSUQgPT09IHJlY29yZC5KU09OLlNlcmllcz8uRGF0YVNvdXJjZUlEID8/IDApPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIGNvbnN0IGRhdHVtID0gZGF0YVNvdXJjZS5maW5kKGRkID0+IGRkLklEID09PSByZWNvcmQuSlNPTi5TZXJpZXM/LklEID8/IDApO1xyXG4gICAgICAgIGlmIChkYXR1bSA9PSB1bmRlZmluZWQpIHNldEluZm8oe30gYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSApO1xyXG4gICAgICAgIGVsc2Ugc2V0SW5mbyhkYXR1bSk7XHJcbiAgICB9LCBbcmVjb3JkXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3Qgb3JkZXJlZCA9IF8ub3JkZXJCeShpbmZvPy5EYXRhID8/IFtdLCBbc29ydEZpZWxkXSwgW2FzY2VuZGluZyA/ICdhc2MnIDogJ2Rlc2MnXSlcclxuICAgICAgICBzZXREYXRhKG9yZGVyZWQpO1xyXG4gICAgfSwgW2FzY2VuZGluZyxzb3J0RmllbGQsaW5mb10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6IHByb3BzLldpZHRoLCBoZWlnaHQ6IHByb3BzLkhlaWdodCwgbWF4SGVpZ2h0OiBwcm9wcy5IZWlnaHQsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wid2lkZ2l0LWxhYmVsXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBcIiArIHN0eWxlc1tcIndpZGdpdC1jb250cm9sc1wiXX0gdGl0bGU9J1dpZGdldCBTZXR0aW5ncycgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKHRydWUpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVGb3JtPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PiB0YWJsZUNsYXNzPSd0YWJsZScgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVGltZXN0YW1wJywgbGFiZWw6ICdUaW1lc3RhbXAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNaW5pbXVtJywgbGFiZWw6ICdNaW4nLCBjb250ZW50OiAoaXRlbSxrZXksIHN0eWxlKSA9PiBpdGVtLk1pbmltdW0udG9GaXhlZChyZWNvcmQuSlNPTi5QcmVjaXNpb24pfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0F2ZXJhZ2UnLCBsYWJlbDogJ0F2ZycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBpdGVtLkF2ZXJhZ2UudG9GaXhlZChyZWNvcmQuSlNPTi5QcmVjaXNpb24pfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01heGltdW0nLCBsYWJlbDogJ01heCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBpdGVtLk1heGltdW0udG9GaXhlZChyZWNvcmQuSlNPTi5QcmVjaXNpb24pfSxcclxuICAgICAgICAgICAgICAgIF19IGRhdGE9e2RhdGF9IHNvcnRGaWVsZD17c29ydEZpZWxkfSBvbkNsaWNrPXsoZGF0YSkgPT4geyB9fSBhc2NlbmRpbmc9e2FzY2VuZGluZ30gb25Tb3J0PXsoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvbCA9PT0gc29ydEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZylcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGRhdGEuY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxXaWRnZXQgey4uLnByb3BzfSBSZWNvcmQ9e3JlY29yZH0gVG9nZ2xlPXt0b2dnbGV9IFNldFRvZ2dsZT17KGJvb2wpID0+IHNldFRvZ2dsZShib29sKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pU3RhdHM+PiBGaWVsZD0nTGFiZWwnIFJlY29yZD17cmVjb3JkfSBUeXBlPSd0ZXh0JyBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQobmV3IFRhYmxlKHIpKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldpZHRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3JlY29yZD8uV2lkdGh9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFRhYmxlKHsgLi4ucmVjb3JkLCBXaWR0aDogcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkgfSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFRhYmxlKHsgLi4ucmVjb3JkLCBXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSAyMDAgfSkpfT5GdWxsIFdpZHRoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+U2VyaWVzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3JkaW9uXCIgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnYXV0bycsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuRGF0YS5tYXAoKGQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtcIiNjb2xsYXBzZVwiICsgaX0+e2QuRGF0YVNvdXJjZS5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcImNvbGxhcHNlXCIgKyBpfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBzaG93XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzU2VsZWN0IFdpZGdldD17cmVjb3JkfSBEYXRhU291cmNlSUQ9e2QuRGF0YVNvdXJjZS5JRH0gQ2FsbGJhY2s9eygpID0+IHNldFJlY29yZChuZXcgVGFibGUocmVjb3JkKSl9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZC5EYXRhU291cmNlLlR5cGUgPT09ICdUcmVuREFQREInICYmIHJlY29yZC5KU09OLlNlcmllcyAhPSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtyZWNvcmQuSlNPTi5TZXJpZXMuSUR9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57aW5mbz8uTmFtZSA/PyAnJ308L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm8gSW5kZXg9e2l9IERhdGE9e2luZm99IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QcmVjaXNpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtyZWNvcmQuSlNPTi5QcmVjaXNpb259IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQocmVjb3JkLlNldFByZWNzaXNpb24ocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRleHQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzE2LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4vV2lkZ2V0JztcclxuaW1wb3J0IHsgSW5wdXQsIFRleHRBcmVhIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0SlNYKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pVGV4dD4pIHtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8VGV4dD4obmV3IFRleHQocHJvcHMpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBwcm9wcy5XaWR0aCwgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ3aWRnaXQtbGFiZWxcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5MYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIFwiICsgc3R5bGVzW1wid2lkZ2l0LWNvbnRyb2xzXCJdfSB0aXRsZT0nV2lkZ2V0IFNldHRpbmdzJyBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogMzB9fT57cHJvcHMuSlNPTi5UZXh0IH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFdpZGdldCB7Li4ucHJvcHN9IFJlY29yZD17cmVjb3JkfSBUb2dnbGU9e3RvZ2dsZX0gU2V0VG9nZ2xlPXsoYm9vbCkgPT4gc2V0VG9nZ2xlKGJvb2wpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlUZXh0Pj4gRmllbGQ9J0xhYmVsJyBSZWNvcmQ9e3JlY29yZH0gVHlwZT0ndGV4dCcgU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKG5ldyBUZXh0KHIpKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldpZHRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3JlY29yZD8uV2lkdGh9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFRleHQoeyAuLi5yZWNvcmQsIFdpZHRoOiBwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSB9KSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldnQpID0+IHNldFJlY29yZChuZXcgVGV4dCh7IC4uLnJlY29yZCwgV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC0gMjAwIH0pKX0+RnVsbCBXaWR0aDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhPFRyZW5EQVAuaVRleHQ+IFJlY29yZD17cmVjb3JkLkpTT059IEZpZWxkPVwiVGV4dFwiIFJvd3M9ezEwfSBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQobmV3IFRleHQoeyAuLi5yZWNvcmQsIEpTT046IHsgLi4uciB9IH0pKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEF4aXMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzE3LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgVHJlbmQgfSBmcm9tICcuLi8uLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgeyBDcm9zc01hcmsgfSBmcm9tICcuLi8uLi8uLi9Db25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXhpcyAocHJvcHM6IHsgSW5kZXg6IG51bWJlciwgQXhpczogVHJlbkRBUC5pWUF4aXMsIFdpZGdldDogVHJlbmQsIENhbGxiYWNrOiAoKSA9PiB2b2lkIH0pe1xyXG4gICAgY29uc3QgZmlyc3RSZW5kZXIgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmaXJzdFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy9jb25zdCBbYmlucywgc2V0Qmluc10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHByb3BzLlNlcmllcz8uQmluQ291bnQgPz8gMTApO1xyXG4gICAgY29uc3QgW3VuaXRzLCBzZXRVbml0c10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHByb3BzLkF4aXMuVW5pdHMpO1xyXG4gICAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTwnbGVmdCcgfCAncmlnaHQnPihwcm9wcy5BeGlzLlBvc2l0aW9uKTtcclxuICAgIGNvbnN0IFttaW4sIHNldE1pbl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHByb3BzLkF4aXMuTWluKTtcclxuICAgIGNvbnN0IFttYXgsIHNldE1heF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHByb3BzLkF4aXMuTWF4KTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZmlyc3RSZW5kZXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICBwcm9wcy5XaWRnZXQuVXBkYXRlQXhpcyhwcm9wcy5JbmRleCwgXCJVbml0c1wiLCB1bml0cyk7XHJcbiAgICAgICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VuaXRzXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZmlyc3RSZW5kZXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICBwcm9wcy5XaWRnZXQuVXBkYXRlQXhpcyhwcm9wcy5JbmRleCwgXCJQb3NpdGlvblwiLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Bvc2l0aW9uXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZmlyc3RSZW5kZXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICBwcm9wcy5XaWRnZXQuVXBkYXRlQXhpcyhwcm9wcy5JbmRleCwgXCJNYXhcIiwgbWF4KTtcclxuICAgICAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21heF0pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWZpcnN0UmVuZGVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcHJvcHMuV2lkZ2V0LlVwZGF0ZUF4aXMocHJvcHMuSW5kZXgsIFwiTWluXCIsIG1pbik7XHJcbiAgICAgICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21pbl0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Qb3NpdGlvbjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cG9zaXRpb259IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRQb3NpdGlvbihldnQudGFyZ2V0LnZhbHVlIGFzICgnbGVmdCcgfCAncmlnaHQnKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZWZ0XCI+TGVmdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaWdodFwiPlJpZ2h0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pWUF4aXM+IEZpZWxkPSdVbml0cycgUmVjb3JkPXtwcm9wcy5BeGlzfSBUeXBlPSd0ZXh0JyBTZXR0ZXI9eyhyKSA9PiBzZXRVbml0cyhyLlVuaXRzKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlZQXhpcz4gRmllbGQ9J01pbicgTGFiZWw9J01pbicgUmVjb3JkPXtwcm9wcy5BeGlzfSBUeXBlPSdudW1iZXInIFNldHRlcj17KHIpID0+IHNldE1pbihyLk1pbil9IFZhbGlkPXsoZmllbGQpID0+IHRydWV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pWUF4aXM+IEZpZWxkPSdNYXgnIFJlY29yZD17cHJvcHMuQXhpc30gVHlwZT0nbnVtYmVyJyBTZXR0ZXI9eyhyKSA9PiBzZXRNYXgoci5NYXgpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogMTYgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5XaWRnZXQuQ2FsY3VsYXRlQXhpc1JhbmdlKCd5JywgcHJvcHMuSW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH19PlVzZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBzdHlsZT17eyB0b3A6IDMwIH19IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5XaWRnZXQuUmVtb3ZlQXhpcyhwcm9wcy5JbmRleClcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfX0+e0Nyb3NzTWFya308L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgU2VyaWVzUGlja2VyLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8xNy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgQ2hlY2tCb3ggfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuXHJcbmltcG9ydCB7IEFkZGl0aW9uYWxJbmZvIH0gZnJvbSAnLi4vV2lkZ2V0JztcclxuaW1wb3J0IHsgQ3Jvc3NNYXJrIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgVHJlbmQgfSBmcm9tICcuLi8uLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRldGltZS9jc3MvcmVhY3QtZGF0ZXRpbWUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJpZXNQaWNrZXIocHJvcHM6IHsgSW5kZXg6IG51bWJlciwgU2VyaWVzOiBUcmVuREFQLmlUcmVuZFNlcmllcywgRGF0YTogVHJlbkRBUC5pWERBUmV0dXJuRGF0YSwgV2lkZ2V0OiBUcmVuZCwgQ2FsbGJhY2s6ICgpID0+IHZvaWQgfSl7XHJcbiAgICBjb25zdCBbYXhpcywgc2V0QXhpc10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHByb3BzLlNlcmllcy5BeGlzKTtcclxuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihwcm9wcy5TZXJpZXMuQ29sb3IpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRGaWVsZD4ocHJvcHMuU2VyaWVzLkZpZWxkKTtcclxuICAgIGNvbnN0IFtzaG93RXZlbnRzLCBzZXRTaG93RXZlbnRzXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHByb3BzLlNlcmllcy5TaG93RXZlbnRzKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5JbmRleCwgXCJDb2xvclwiLCBjb2xvcik7XHJcbiAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuICAgIH0sIFtjb2xvcl0pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5XaWRnZXQuVXBkYXRlU2VyaWVzKHByb3BzLkluZGV4LCBcIkZpZWxkXCIsIHR5cGUpO1xyXG4gICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICB9LCBbdHlwZV0pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5XaWRnZXQuVXBkYXRlU2VyaWVzKHByb3BzLkluZGV4LCBcIlNob3dFdmVudHNcIiwgc2hvd0V2ZW50cyk7XHJcbiAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuICAgIH0sIFtzaG93RXZlbnRzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5XaWRnZXQuVXBkYXRlU2VyaWVzKHByb3BzLkluZGV4LCBcIkF4aXNcIiwgYXhpcyk7XHJcbiAgICAgICAgcHJvcHMuV2lkZ2V0LkNhbGN1bGF0ZUF4aXNSYW5nZSgneScpO1xyXG4gICAgICAgIHByb3BzLldpZGdldC5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3gnKTtcclxuICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgfSwgW2F4aXNdKTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntwcm9wcy5TZXJpZXMuTGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm8gSW5kZXg9e3Byb3BzLkluZGV4fSBEYXRhPXtwcm9wcy5EYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkZpZWxkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZShldnQudGFyZ2V0LnZhbHVlIGFzIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkF2ZXJhZ2VcIj5Bdmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1pbmltdW1cIj5NaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1heGltdW1cIj5NYXg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPllBeGlzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtheGlzfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0QXhpcyhwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuV2lkZ2V0LkpTT04uWUF4aXMubWFwKChheGlzLCBpbmRleCkgPT4gPG9wdGlvbiB2YWx1ZT17aW5kZXh9IGtleT17aW5kZXh9PntheGlzLlVuaXRzfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Db2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtjb2xvcn0gb25DaGFuZ2U9eyhldnQpID0+IHNldENvbG9yKGV2dC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLldpZGdldC5SZW1vdmVTZXJpZXMocHJvcHMuSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PntDcm9zc01hcmt9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsocHJvcHMuRGF0YS5FdmVudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94PFRyZW5EQVAuaVRyZW5kU2VyaWVzPiBSZWNvcmQ9e3Byb3BzLlNlcmllc30gRmllbGQ9J1Nob3dFdmVudHMnIExhYmVsPSdTaG93IEV2ZW50cycgU2V0dGVyPXsocikgPT4gc2V0U2hvd0V2ZW50cyghc2hvd0V2ZW50cyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogbnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRyZW5kLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xMy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQ2hlY2tCb3gsIFNlbGVjdCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5cclxuaW1wb3J0IFdpZGdldCwgeyBTZXJpZXNTZWxlY3QsIEFkZGl0aW9uYWxJbmZvfSBmcm9tICcuLi9XaWRnZXQnO1xyXG5pbXBvcnQgeyBDcm9zc01hcmssIFBsdXMgfSBmcm9tICcuLi8uLi8uLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBUcmVuZCB9IGZyb20gJy4uLy4uLy4uL0ltcGxlbWVudGF0aW9ucyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IERhdGV0aW1lIGZyb20gJ3JlYWN0LWRhdGV0aW1lJztcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXRpbWUvY3NzL3JlYWN0LWRhdGV0aW1lLmNzc1wiO1xyXG5pbXBvcnQgU3dpdGNoQnV0dG9uIGZyb20gJ2Jvb3RzdHJhcC1zd2l0Y2gtYnV0dG9uLXJlYWN0JztcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IEF4aXMgZnJvbSAnLi9BeGlzJztcclxuaW1wb3J0IFNlcmllc1BpY2tlciBmcm9tICcuL1Nlcmllc1BpY2tlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmVuZEpTWChwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVRyZW5kPikge1xyXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZWNvcmQsIHNldFJlY29yZF0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuZD4obmV3IFRyZW5kKHByb3BzKSk7XHJcbiAgICBjb25zdCBob3ZlciA9IFJlYWN0LnVzZVJlZjxudW1iZXI+KC0xMCk7XHJcbiAgICBjb25zdCBzdmdzID0gUmVhY3QudXNlUmVmPGQzLlNlbGVjdGlvbjxTVkdTVkdFbGVtZW50LCB1bmtub3duLCBudWxsLCB1bmRlZmluZWQ+W10+KFtdKTtcclxuICAgIGNvbnN0IG1hcmdpbiA9IFJlYWN0LnVzZVJlZjx7IGJvdHRvbTogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByaWdodDogbnVtYmVyIH0+KHsgYm90dG9tOiA1MCwgbGVmdDogNTAsIHRvcDogNDAsIHJpZ2h0OiA1MCB9KTtcclxuICAgIGNvbnN0IFtjaGFydEFjdGlvbiwgc2V0Q2hhcnRBY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5DaGFydEFjdGlvbj4oJ1BhbicpO1xyXG4gICAgY29uc3QgY2hhcnRBY3Rpb25SZWYgPSBSZWFjdC51c2VSZWY8VHJlbkRBUC5DaGFydEFjdGlvbj4oJ1BhbicpO1xyXG4gICAgY29uc3Qgc2V0SG92ZXIgPSBSZWFjdC51c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgICAgICBIYW5kbGVIb3ZlclVwZGF0ZSh2YWx1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBcclxuICAgICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZWNvcmQobmV3IFRyZW5kKHByb3BzKSk7XHJcbiAgICAgICAgfSwgW3Byb3BzXSk7XHJcblxyXG4gICAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYXJ0QWN0aW9uUmVmLmN1cnJlbnQgPSBjaGFydEFjdGlvbjtcclxuICAgICAgICB9LCBbY2hhcnRBY3Rpb25dKTtcclxuXHJcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZShyZWNvcmQpXHJcbiAgICAgICAgfSwgW3JlY29yZF0pXHJcblxyXG4gICAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFJlY29yZChuZXcgVHJlbmQoeyAuLi5yZWNvcmQsIEhlaWdodDogcHJvcHMuSGVpZ2h0IH0pKVxyXG4gICAgICAgIH0sIFtwcm9wcy5IZWlnaHRdKVxyXG5cclxuICAgICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZWNvcmQobmV3IFRyZW5kKHsgLi4ucmVjb3JkLCBEYXRhOiBwcm9wcy5EYXRhIH0pKTtcclxuICAgICAgICB9LCBbcHJvcHMuRGF0YV0pO1xyXG5cclxuICAgICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyBkMy5zZWxlY3QocmVmLmN1cnJlbnQpLnNlbGVjdEFsbCgnc3ZnJykucmVtb3ZlKCk7IH1cclxuICAgICAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBJbml0aWFsaXplKHNldHRpbmdzOiBUcmVuZCkge1xyXG4gICAgICAgIGxldCBzdmdDb3VudCA9IDE7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLkpTT04uU3BsaXQgJiYgc2V0dGluZ3MuSlNPTi5TcGxpdFR5cGUgPT09ICdBeGlzJykge1xyXG4gICAgICAgICAgICBtYXJnaW4uY3VycmVudCA9IHsgYm90dG9tOiA1MCwgbGVmdDogNTAsIHRvcDogNDAsIHJpZ2h0OiA1MCB9O1xyXG4gICAgICAgICAgICBzdmdDb3VudCA9IHNldHRpbmdzLkpTT04uWUF4aXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZXR0aW5ncy5KU09OLlNwbGl0ICYmIHNldHRpbmdzLkpTT04uU3BsaXRUeXBlID09PSAnU2VyaWVzJykge1xyXG4gICAgICAgICAgICBtYXJnaW4uY3VycmVudCA9IHsgYm90dG9tOiA1MCwgbGVmdDogNTAsIHRvcDogNDAsIHJpZ2h0OiA1MCB9XHJcbiAgICAgICAgICAgIHN2Z0NvdW50ID0gc2V0dGluZ3MuSlNPTi5TZXJpZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG1hcmdpbi5jdXJyZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IChzZXR0aW5ncy5KU09OLllBeGlzLmZpbHRlcihheGlzID0+IGF4aXMuUG9zaXRpb24gPT09ICdsZWZ0JykubGVuZ3RoID09IDAgPyA1MCA6IHNldHRpbmdzLkpTT04uWUF4aXMuZmlsdGVyKGF4aXMgPT4gYXhpcy5Qb3NpdGlvbiA9PT0gJ2xlZnQnKS5sZW5ndGggKiA1MCksXHJcbiAgICAgICAgICAgICAgICB0b3A6IDQwLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IChzZXR0aW5ncy5KU09OLllBeGlzLmZpbHRlcihheGlzID0+IGF4aXMuUG9zaXRpb24gPT09ICdyaWdodCcpLmxlbmd0aCA9PSAwID8gNTAgOiBzZXR0aW5ncy5KU09OLllBeGlzLmZpbHRlcihheGlzID0+IGF4aXMuUG9zaXRpb24gPT09ICdyaWdodCcpLmxlbmd0aCAqIDUwKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ3MuSlNPTi5MZWdlbmQpIG1hcmdpbi5jdXJyZW50LnJpZ2h0ID0gbWFyZ2luLmN1cnJlbnQucmlnaHQgKyAyMDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAvIHN2Z0NvdW50O1xyXG5cclxuICAgICAgICBpZiAoc3Zncy5jdXJyZW50Lmxlbmd0aCAhPT0gc3ZnQ291bnQpIHtcclxuICAgICAgICAgICAgc3Zncy5jdXJyZW50ID0gW107XHJcbiAgICAgICAgICAgIGQzLnNlbGVjdChyZWYuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN2Z0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChyZWYuY3VycmVudClcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHNldHRpbmdzLldpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzdmdIZWlnaHQpXHJcbiAgICAgICAgICAgICAgICBzdmdzLmN1cnJlbnQucHVzaChzdmcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB4ID0gR2V0WFNjYWxlKHNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgc3Zncy5jdXJyZW50LmZvckVhY2goKHN2ZywgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuSlNPTi5TcGxpdCAmJiBzZXR0aW5ncy5KU09OLlNwbGl0VHlwZSA9PT0gJ0F4aXMnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEluaXRpYWxpemVTcGxpdE9uQXhpcyhzZXR0aW5ncywgc3ZnLCB4LCBpKTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLkpTT04uU3BsaXQgJiYgc2V0dGluZ3MuSlNPTi5TcGxpdFR5cGUgPT09ICdTZXJpZXMnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEluaXRpYWxpemVTcGxpdE9uU2VyaWVzKHNldHRpbmdzLCBzdmcsIHgsIGkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5pdGlhbGl6ZU5vdFNwbGl0KHNldHRpbmdzLCBzdmcsIHgpO1xyXG4gICAgICAgIH0pOyAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZVNwbGl0T25TZXJpZXMoc2V0dGluZ3M6IFRyZW5kLCBzdmcsIHg6IGQzLlNjYWxlVGltZTxudW1iZXIsIG51bWJlcj4sIGk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IHBhcnNlSW50KHN2Zy5hdHRyKCdoZWlnaHQnKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlcmllcyA9IHNldHRpbmdzLkpTT04uU2VyaWVzW2ldO1xyXG4gICAgICAgIGNvbnN0IGF4aXMgPSBzZXR0aW5ncy5KU09OLllBeGlzW3Nlcmllcy5BeGlzXTtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHNlcmllcy5GaWVsZDtcclxuXHJcbiAgICAgICAgQWRkWEF4aXMoc3ZnLCB4KTtcclxuXHJcbiAgICAgICAgY29uc3QgeSA9IEdldFlTY2FsZShzdmdIZWlnaHQsIGF4aXMpO1xyXG5cclxuICAgICAgICBBZGRZQXhpc0xlZnQoYXhpcywgc3ZnLCB5KTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gKChyZWNvcmQuRGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT09IHNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdKS5maW5kKGRzID0+IGRzLklEID09PSBzZXJpZXMuSUQpPy5EYXRhID8/IFtdKS5maWx0ZXIoZHMgPT4gbW9tZW50KGRzLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpID49IHNldHRpbmdzLkpTT04uTWluICYmIG1vbWVudChkcy5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSA8PSBzZXR0aW5ncy5KU09OLk1heCAmJiBkc1tmaWVsZF0gPj0gYXhpcy5NaW4gJiYgZHNbZmllbGRdIDw9IGF4aXMuTWF4KVxyXG4gICAgICAgIGNvbnN0IGxpbmVGdW5jID0gZDMubGluZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4oKS54KGRkID0+IHgobW9tZW50KGRkLlRpbWVzdGFtcCwgJ1lZWVktTU0tRERUSEg6bW06c3MuZmZmWicpKSkueShkZCA9PiB5KGRkW3Nlcmllcy5GaWVsZF0pKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubGluZVwiKS5yZW1vdmUoKTtcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLmxpbmUnKVxyXG4gICAgICAgICAgICAuZGF0YShbZmlsdGVyZWREYXRhXSBhcyBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdW10pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAgICAgICAuY2xhc3NlZCgnbGluZScsIHRydWUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBzZXJpZXMuQ29sb3IpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVGdW5jKGQpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChzZXJpZXMuU2hvd0V2ZW50cykge1xyXG4gICAgICAgICAgICBBZGRFdmVudExpbmUoc2VyaWVzLCBzdmcsIHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubGVnZW5kXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmIChzZXR0aW5ncy5KU09OLkxlZ2VuZCkge1xyXG4gICAgICAgICAgICBBZGRMZWdlbmQoc3ZnLCBbc2VyaWVzXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdmcub24oJ21vdXNlbW92ZScsIChkOiBNb3VzZUV2ZW50KSA9PiBzZXRIb3ZlcihkLm9mZnNldFgpKTtcclxuICAgICAgICBzdmcub24oJ21vdXNlZG93bicsIChkOiBNb3VzZUV2ZW50KSA9PiBIYW5kbGVDaGFydEFjdGlvbihkLCBzdmcsIHgpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZVNwbGl0T25BeGlzKHNldHRpbmdzOiBUcmVuZCwgc3ZnLCB4OiBkMy5TY2FsZVRpbWU8bnVtYmVyLCBudW1iZXI+LCBpOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcGFyc2VJbnQoc3ZnLmF0dHIoJ2hlaWdodCcpKTtcclxuICAgICAgICAgICAgY29uc3QgYXhpcyA9IHNldHRpbmdzLkpTT04uWUF4aXNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcmllcyA9IHNldHRpbmdzLkpTT04uU2VyaWVzLmZpbHRlcigocykgPT4gcy5BeGlzID09PSBpKS5tYXAocyA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4ucyxcclxuICAgICAgICAgICAgICAgIERhdGE6ICgocmVjb3JkLkRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSBzLkRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW10pLmZpbmQoZHMgPT4gZHMuSUQgPT09IHMuSUQpPy5EYXRhID8/IFtdKS5maWx0ZXIoZHMgPT4gbW9tZW50KGRzLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpID49IHNldHRpbmdzLkpTT04uTWluICYmIG1vbWVudChkcy5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSA8PSBzZXR0aW5ncy5KU09OLk1heCAmJiBkc1tzLkZpZWxkXSA+PSBheGlzLk1pbiAmJiBkc1tzLkZpZWxkXSA8PSBheGlzLk1heCkubWFwKHBvaW50ID0+IFtwb2ludC5UaW1lc3RhbXAsIHBvaW50W3MuRmllbGRdXSlcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgQWRkWEF4aXMoc3ZnLCB4KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBHZXRZU2NhbGUoc3ZnSGVpZ2h0LCBheGlzKTtcclxuXHJcbiAgICAgICAgICAgIEFkZFlBeGlzTGVmdChheGlzLCBzdmcsIHkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGluZUZ1bmMgPSBkMy5saW5lPFtzdHJpbmcsIG51bWJlcl0+KCkueChkZCA9PiB4KG1vbWVudChkZFswXSwgJ1lZWVktTU0tRERUSEg6bW06c3MuZmZmWicpKSkueShkZCA9PiB5KGRkWzFdKSk7XHJcblxyXG4gICAgICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5saW5lXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5saW5lXCIpXHJcbiAgICAgICAgICAgICAgICAuZGF0YShzZXJpZXMpXHJcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbGluZScsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgKHMpID0+IHMuQ29sb3IpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgKHMpID0+IGxpbmVGdW5jKHMuRGF0YSBhcyBbc3RyaW5nLCBudW1iZXJdW10pKVxyXG5cclxuICAgICAgICAgICAgc2VyaWVzLmZvckVhY2gocyA9PiBBZGRFdmVudExpbmUocyxzdmcsIHgpKVxyXG5cclxuICAgICAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubGVnZW5kXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuSlNPTi5MZWdlbmQpIHtcclxuICAgICAgICAgICAgICAgIEFkZExlZ2VuZChzdmcsIHNlcmllcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBzdmcub24oJ21vdXNlbW92ZScsIChkOiBNb3VzZUV2ZW50KSA9PiBzZXRIb3ZlcihkLm9mZnNldFgpKTtcclxuICAgICAgICAgICAgc3ZnLm9uKCdtb3VzZWRvd24nLCAoZDogTW91c2VFdmVudCkgPT4gSGFuZGxlQ2hhcnRBY3Rpb24oZCwgc3ZnLCB4KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZU5vdFNwbGl0KHNldHRpbmdzOiBUcmVuZCwgc3ZnLCB4OiBkMy5TY2FsZVRpbWU8bnVtYmVyLCBudW1iZXI+KSB7XHJcbiAgICAgICAgQWRkWEF4aXMoc3ZnLCB4KTtcclxuICAgICAgICBjb25zdCB5ID0gc2V0dGluZ3MuSlNPTi5ZQXhpcy5tYXAoYXhpcyA9PiBHZXRZU2NhbGUoc2V0dGluZ3MuSGVpZ2h0LCBheGlzKSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cueWF4aXMnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB5QXhpcyA9IHNldHRpbmdzLkpTT04uWUF4aXMubWFwKChheGlzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYTtcclxuICAgICAgICAgICAgaWYgKGF4aXMuUG9zaXRpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZCA9IHNldHRpbmdzLkpTT04uWUF4aXMuZmlsdGVyKGF4aXMgPT4gYXhpcy5Qb3NpdGlvbiA9PT0gJ2xlZnQnKS5maW5kSW5kZXgoYXhpcyA9PiBheGlzID09PSBzZXR0aW5ncy5KU09OLllBeGlzW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBBZGRZQXhpc0xlZnQoYXhpcywgc3ZnLCB5W2luZGV4XSwgZmFsc2UsIGluZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kID0gc2V0dGluZ3MuSlNPTi5ZQXhpcy5maWx0ZXIoYXhpcyA9PiBheGlzLlBvc2l0aW9uID09PSAncmlnaHQnKS5maW5kSW5kZXgoYXhpcyA9PiBheGlzID09PSBzZXR0aW5ncy5KU09OLllBeGlzW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBBZGRZQXhpc1JpZ2h0KGF4aXMsIHN2ZywgeVtpbmRleF0sIGluZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubGVnZW5kXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIGlmIChzZXR0aW5ncy5KU09OLkxlZ2VuZCkge1xyXG4gICAgICAgICAgICBBZGRMZWdlbmQoc3ZnLCBzZXR0aW5ncy5KU09OLlNlcmllcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5saW5lXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmxpbmVcIilcclxuICAgICAgICAgICAgLmRhdGEoc2V0dGluZ3MuSlNPTi5TZXJpZXMpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwibGluZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgKGQ6IFRyZW5EQVAuaVRyZW5kU2VyaWVzKSA9PiBkLkNvbG9yKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQ6IFRyZW5EQVAuaVRyZW5kU2VyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeVNjYWxlID0geVtkLkF4aXNdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmVGdW5jID0gZDMubGluZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4oKS54KGRkID0+IHgobW9tZW50KGRkLlRpbWVzdGFtcCwgJ1lZWVktTU0tRERUSEg6bW06c3MuZmZmWicpKSkueShkZCA9PiB5U2NhbGUoZGRbZC5GaWVsZF0pKTtcclxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZERhdGEgPSAoKHJlY29yZC5EYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gZC5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdKS5maW5kKGRzID0+IGRzLklEID09PSBkLklEKT8uRGF0YSA/PyBbXSkuZmlsdGVyKGRzID0+IG1vbWVudChkcy5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSA+PSBzZXR0aW5ncy5KU09OLk1pbiAmJiBtb21lbnQoZHMuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkgPD0gc2V0dGluZ3MuSlNPTi5NYXggJiYgZHNbZC5GaWVsZF0gPj0gc2V0dGluZ3MuSlNPTi5ZQXhpc1tkLkF4aXNdPy5NaW4gJiYgZHNbZC5GaWVsZF0gPD0gc2V0dGluZ3MuSlNPTi5ZQXhpc1tkLkF4aXNdPy5NYXgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZUZ1bmMoZmlsdGVyZWREYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBzdmcub24oJ21vdXNlbW92ZScsIChkOiBNb3VzZUV2ZW50KSA9PiBzZXRIb3ZlcihkLm9mZnNldFgpKVxyXG4gICAgICAgIHN2Zy5vbignbW91c2Vkb3duJywgKGQ6IE1vdXNlRXZlbnQpID0+IEhhbmRsZUNoYXJ0QWN0aW9uKGQsIHN2ZywgeCkpXHJcblxyXG4gICAgICAgIHNldHRpbmdzLkpTT04uU2VyaWVzLmZpbHRlcihzZXJpZXMgPT4gc2VyaWVzLlNob3dFdmVudHMpLmZvckVhY2goc2VyaWVzID0+IEFkZEV2ZW50TGluZShzZXJpZXMsIHN2ZywgeCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEFkZExlZ2VuZChzdmcsIHNlcmllczogVHJlbkRBUC5pVHJlbmRTZXJpZXNbXSkge1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IHBhcnNlSW50KHN2Zy5hdHRyKCdoZWlnaHQnKSk7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSBwYXJzZUludChzdmcuYXR0cignd2lkdGgnKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IHN2Zy5zZWxlY3RBbGwoJ2cubGVnZW5kJylcclxuICAgICAgICAgICAgLmRhdGEoW3Nlcmllc10pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcclxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtzdmdXaWR0aCAtIDIwMH0sJHttYXJnaW4uY3VycmVudC50b3B9KWApO1xyXG5cclxuICAgICAgICBjb25zdCBsZWdlbmRSb3dzID0gbGVnZW5kLnNlbGVjdEFsbCgnZy5sZWdlbmRSb3cnKVxyXG4gICAgICAgICAgICAuZGF0YShkID0+IGQpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kcm93JylcclxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDEwLCR7aSAqIDMwfSlgKTtcclxuXHJcbiAgICAgICAgbGVnZW5kUm93cy5hcHBlbmQoJ3JlY3QnKS5hdHRyKCdoZWlnaHQnLCAyMCkuYXR0cignd2lkdGgnLCAyMCkuYXR0cignZmlsbCcsIGQgPT4gZC5Db2xvcilcclxuICAgICAgICBsZWdlbmRSb3dzLmFwcGVuZCgndGV4dCcpLmF0dHIoJ3gnLCAzMCkuYXR0cigneScsIDE1KVxyXG4gICAgICAgICAgLnRleHQoZnVuY3Rpb24oZCl7XHJcbiAgICAgICAgICAgICAgaWYgKGQuTGFiZWwubGVuZ3RoID4gMTUpXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkLkxhYmVsLnNsaWNlKDAsIDE1KSArICcuLi4nO1xyXG4gICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGQuTGFiZWw7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBsZWdlbmRSb3dzLmFwcGVuZCgndGl0bGUnKS50ZXh0KGQgPT4gZC5MYWJlbClcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIGZ1bmN0aW9uIEFkZEV2ZW50TGluZShzZXJpZXM6IFRyZW5EQVAuaVRyZW5kU2VyaWVzLCBzdmcsIHgpIHtcclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBwYXJzZUludChzdmcuYXR0cignaGVpZ2h0JykpXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSAoKHJlY29yZC5EYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gc2VyaWVzLkRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW10pLmZpbmQoZHMgPT4gZHMuSUQgPT09IHNlcmllcy5JRCk/LkV2ZW50cyA/PyBbXSlcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLmV2ZW50LWxpbmUnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBnID0gc3ZnLnNlbGVjdEFsbCgnZy5ldmVudC1saW5lJylcclxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKCdldmVudC1saW5lJywgdHJ1ZSlcclxuICAgICAgICBnLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMnB4JylcclxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4gYE0wLCR7c3ZnSGVpZ2h0IC0gbWFyZ2luLmN1cnJlbnQuYm90dG9tIC0gbWFyZ2luLmN1cnJlbnQudG9wfUwtMTAsJHtzdmdIZWlnaHQgLSBtYXJnaW4uY3VycmVudC5ib3R0b20gLSBtYXJnaW4uY3VycmVudC50b3AgKyAxMH0sTDEwLCR7c3ZnSGVpZ2h0IC0gbWFyZ2luLmN1cnJlbnQuYm90dG9tIC0gbWFyZ2luLmN1cnJlbnQudG9wICsgMTB9TDAsJHtzdmdIZWlnaHQgLSBtYXJnaW4uY3VycmVudC5ib3R0b20gLSBtYXJnaW4uY3VycmVudC50b3B9WmApXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gYHRyYW5zbGF0ZSgke3gobW9tZW50KGQuU3RhcnRUaW1lLCAnWVlZWS1NTS1ERFRISDptbTpzcy5mZmYnKSl9LCR7bWFyZ2luLmN1cnJlbnQudG9wfSlgKVxyXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3JlZCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ3JlZCcpXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKGUsIGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHJlY29yZC5EYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gc2VyaWVzLkRhdGFTb3VyY2VJRCkuRGF0YVNvdXJjZS5PcGVuU0VFICsgJz9ldmVudElEPScgKyBkLklEKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEFkZFhBeGlzKHN2ZywgeCkge1xyXG4gICAgICAgIGNvbnN0IHN2Z1dpZHRoID0gcGFyc2VJbnQoc3ZnLmF0dHIoJ3dpZHRoJykpO1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IHBhcnNlSW50KHN2Zy5hdHRyKCdoZWlnaHQnKSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cueGF4aXMnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ3hheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uY3VycmVudC5ib3R0b20pICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXHJcblxyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ3hheGlzJywgdHJ1ZSkuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChzdmdXaWR0aCAvIDIpICsgXCIsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmN1cnJlbnQuYm90dG9tIC8gMykgKyBcIilcIilcclxuICAgICAgICAgICAgLnRleHQoXCJUaW1lXCIpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEFkZFlBeGlzTGVmdChheGlzOiBUcmVuREFQLmlZQXhpcywgc3ZnLCB5LCByb3RhdGU6IGJvb2xlYW4gPSB0cnVlLCBpbmRleDogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIGNvbnN0IHN2Z1dpZHRoID0gcGFyc2VJbnQoc3ZnLmF0dHIoJ3dpZHRoJykpO1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IHBhcnNlSW50KHN2Zy5hdHRyKCdoZWlnaHQnKSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cubHlheGlzJyArIGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB5QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ2x5YXhpcycgKyBpbmRleCwgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAobWFyZ2luLmN1cnJlbnQubGVmdCAtIGluZGV4ICogNTApICsgXCIsMClcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkudGlja3MoTWF0aC5mbG9vcihzdmdIZWlnaHQgLyA1MCkgKyAxKS50aWNrRm9ybWF0KCh2YWx1ZTogbnVtYmVyKSA9PiBkMy5mb3JtYXQoXCJ+c1wiKSh2YWx1ZSkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKCdseWF4aXMnICsgaW5kZXgsIHRydWUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLnRleHQoYXhpcy5Vbml0cyk7XHJcbiAgICAgICAgaWYgKHJvdGF0ZSlcclxuICAgICAgICAgICAgdGV4dC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MCkgdHJhbnNsYXRlKC1cIiArIHN2Z0hlaWdodCAvIDIgKyBcIixcIiArICgobWFyZ2luLmN1cnJlbnQubGVmdCAtIGluZGV4ICogNTApIC8gMykgKyBcIilcIikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRleHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChtYXJnaW4uY3VycmVudC5sZWZ0IC0gaW5kZXggKiA1MCkgKyBcIixcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uY3VycmVudC5ib3R0b20gLyAyKSArIFwiKVwiKS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEFkZFlBeGlzUmlnaHQoYXhpczogVHJlbkRBUC5pWUF4aXMsIHN2ZywgeSwgaW5kZXg6IG51bWJlciA9IDApIHtcclxuICAgICAgICBjb25zdCBzdmdXaWR0aCA9IHBhcnNlSW50KHN2Zy5hdHRyKCd3aWR0aCcpKTtcclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBwYXJzZUludChzdmcuYXR0cignaGVpZ2h0JykpO1xyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cucnlheGlzJyArIGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB5QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ3J5YXhpcycgKyBpbmRleCwgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc3ZnV2lkdGggLSBtYXJnaW4uY3VycmVudC5yaWdodCArIGluZGV4ICogNTApICsgXCIsMClcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc1JpZ2h0KHkpLnRpY2tzKE1hdGguZmxvb3Ioc3ZnSGVpZ2h0IC8gNTApICsgMSkudGlja0Zvcm1hdCgodmFsdWU6IG51bWJlcikgPT4gZDMuZm9ybWF0KFwifnNcIikodmFsdWUpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZCgncnlheGlzJyArIGluZGV4LCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAudGV4dChheGlzLlVuaXRzKTtcclxuICAgICAgICAgICAgdGV4dC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHN2Z1dpZHRoIC0gbWFyZ2luLmN1cnJlbnQucmlnaHQgKyBpbmRleCAqIDUwKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5jdXJyZW50LmJvdHRvbSAvIDIpICsgXCIpXCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXRYU2NhbGUoc2V0dGluZ3M6IFRyZW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIGQzLnNjYWxlVGltZSgpXHJcbiAgICAgICAgICAgIC5kb21haW4oW3NldHRpbmdzLkpTT04uTWluLCBzZXR0aW5ncy5KU09OLk1heF0pICAgICAvLyBjYW4gdXNlIHRoaXMgaW5zdGVhZCBvZiAxMDAwIHRvIGhhdmUgdGhlIG1heCBvZiBkYXRhOiBkMy5tYXgoZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gK2QucHJpY2UgfSlcclxuICAgICAgICAgICAgLnJhbmdlKFttYXJnaW4uY3VycmVudC5sZWZ0LCBzZXR0aW5ncy5XaWR0aCAtIG1hcmdpbi5jdXJyZW50LnJpZ2h0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0WVNjYWxlKHN2Z0hlaWdodDogbnVtYmVyLCBheGlzOiBUcmVuREFQLmlZQXhpcykge1xyXG4gICAgICAgIHJldHVybiBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5yYW5nZShbc3ZnSGVpZ2h0IC0gbWFyZ2luLmN1cnJlbnQuYm90dG9tLCBtYXJnaW4uY3VycmVudC50b3BdKVxyXG4gICAgICAgICAgICAuZG9tYWluKFtheGlzLk1pbiwgYXhpcy5NYXhdKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZUhvdmVyVXBkYXRlKGhvdmVyOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoY2hhcnRBY3Rpb25SZWYuY3VycmVudCAhPT0gJ0NsaWNrJykgcmV0dXJuO1xyXG4gICAgICAgIHN2Z3MuY3VycmVudC5mb3JFYWNoKChzdmcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHBhcnNlSW50KHN2Zy5hdHRyKCdoZWlnaHQnKSkgLSBtYXJnaW4uY3VycmVudC50b3AgLSBtYXJnaW4uY3VycmVudC5ib3R0b207XHJcblxyXG4gICAgICAgICAgICBpZiAoaG92ZXIgPj0gbWFyZ2luLmN1cnJlbnQubGVmdCAmJiBob3ZlciA8PSAocHJvcHMuV2lkdGggLSBtYXJnaW4uY3VycmVudC5yaWdodCkpIHtcclxuICAgICAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cubW91c2Utb3ZlcicpLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbW91c2Utb3ZlcicsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4gYE0gMCAwIFYgJHtoZWlnaHR9YClcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7aG92ZXJ9LCR7bWFyZ2luLmN1cnJlbnQudG9wfSlgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnZ3JheScpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZVJlc2V0KCkge1xyXG4gICAgICAgIHNldFJlY29yZChyZWNvcmQuQ2FsY3VsYXRlQXhpc1JhbmdlKCd4JykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZUNoYXJ0QWN0aW9uKGV2dDogTW91c2VFdmVudCwgc3ZnOiBkMy5TZWxlY3Rpb248U1ZHU1ZHRWxlbWVudCwgdW5rbm93biwgbnVsbCwgdW5kZWZpbmVkPiwgc2NhbGU6IGQzLlNjYWxlVGltZTxudW1iZXIsIG51bWJlcj4pIHtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUludChzdmcuYXR0cignaGVpZ2h0JykpO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gcGFyc2VJbnQoc3ZnLmF0dHIoJ3dpZHRoJykpO1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChldnQub2Zmc2V0WCA8IG1hcmdpbi5jdXJyZW50LmxlZnQgfHwgZXZ0Lm9mZnNldFggPiB3aWR0aCAtIG1hcmdpbi5jdXJyZW50LnJpZ2h0KSByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAoZXZ0Lm9mZnNldFkgPCBtYXJnaW4uY3VycmVudC50b3AgfHwgZXZ0Lm9mZnNldFkgPmhlaWdodCAtIG1hcmdpbi5jdXJyZW50LmJvdHRvbSkgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKGNoYXJ0QWN0aW9uUmVmLmN1cnJlbnQgPT0gJ0NsaWNrJylcclxuICAgICAgICAgICAgT25DbGljayhldnQsIHN2Zywgc2NhbGUpO1xyXG4gICAgICAgIGVsc2UgaWYgKGNoYXJ0QWN0aW9uUmVmLmN1cnJlbnQgPT0gJ1BhbicpXHJcbiAgICAgICAgICAgIE9uUGFuKGV2dCwgc3ZnLCBzY2FsZSlcclxuICAgICAgICBlbHNlIGlmIChjaGFydEFjdGlvblJlZi5jdXJyZW50ID09ICdab29tWCcpXHJcbiAgICAgICAgICAgIE9uWFpvb20oZXZ0LCBzdmcsIHNjYWxlKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gT25DbGljayhldnQ6IE1vdXNlRXZlbnQsIHN2ZzogZDMuU2VsZWN0aW9uPFNWR1NWR0VsZW1lbnQsIHVua25vd24sIG51bGwsIHVuZGVmaW5lZD4sIHNjYWxlOiBkMy5TY2FsZVRpbWU8bnVtYmVyLCBudW1iZXI+KSB7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VJbnQoc3ZnLmF0dHIoJ2hlaWdodCcpKTtcclxuICAgICAgICBjb25zdCB0b29sdGlwSGVpZ2h0ID0gcmVjb3JkLkpTT04uU2VyaWVzLmxlbmd0aCAqIDE1O1xyXG4gICAgICAgIGlmIChldnQub2Zmc2V0WCA8IG1hcmdpbi5jdXJyZW50LmxlZnQgJiYgZXZ0Lm9mZnNldFggPiAocHJvcHMuV2lkdGggLSBtYXJnaW4uY3VycmVudC5yaWdodCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy5tb3VzZS1vdmVyMicpLnJlbW92ZSgpXHJcbiAgICAgICAgc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtb3VzZS1vdmVyMicsIHRydWUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiBgTSAwIDAgViAke2hlaWdodCAtIG1hcmdpbi5jdXJyZW50LmJvdHRvbSAtIG1hcmdpbi5jdXJyZW50LnRvcH1gKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7ZXZ0Lm9mZnNldFh9LCR7bWFyZ2luLmN1cnJlbnQudG9wfSlgKVxyXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2dyZXknKVxyXG5cclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy5jaGFydHRvb2x0aXAnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB0b29sdGlwID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdjaGFydHRvb2x0aXAnKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7ZXZ0Lm9mZnNldFggKyAxNX0sJHtldnQub2Zmc2V0WSAtIHRvb2x0aXBIZWlnaHQvMn0pYCk7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRvb2x0aXAuYXBwZW5kKCdyZWN0JylcclxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnZ2FpbnNib3JvJylcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHJlY29yZC5KU09OLlNlcmllcy5sZW5ndGggKyAnZW0nKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCAyMDApXHJcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcclxuICAgICAgICAgICAgLmF0dHIoJ3knLDApXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRvb2x0aXAuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAwKVxyXG4gICAgICAgICAgICAuYXR0cigneScsIDApXHJcblxyXG4gICAgICAgIGxldCB3aWR0aCA9IDIwMDtcclxuICAgICAgICByZWNvcmQuSlNPTi5TZXJpZXMuZm9yRWFjaCgoc2VyaWVzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0b29sdGlwLmFwcGVuZCgncmVjdCcpLmF0dHIoJ3gnLCA1KS5hdHRyKCd5JywgYCR7aW5kZXh9ZW1gKS5hdHRyKCdoZWlnaHQnLCAnMWVtJykuYXR0cignd2lkdGgnLCAnMWVtJykuYXR0cignZmlsbCcsIHNlcmllcy5Db2xvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSByZWNvcmQuRGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT0gc2VyaWVzLkRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkYXRhU291cmNlLmZpbmQoZHMgPT4gZHMuSUQgPT0gc2VyaWVzLklEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoICogZXZ0Lm9mZnNldFggLyBwcm9wcy5XaWR0aCAqIC45NSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlaWwgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggKiBldnQub2Zmc2V0WCAvIHByb3BzLldpZHRoICogMS4wNSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3J0ZW5lZERhdGEgPSBkYXRhLnNsaWNlKGZsb29yLCBjZWlsKTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IHNob3J0ZW5lZERhdGEubWFwKGRhdHVtID0+ICh7IFZhbHVlOiBkYXR1bVtzZXJpZXMuRmllbGRdLCBEaXN0YW5jZTogTWF0aC5hYnMoZXZ0Lm9mZnNldFggLSBzY2FsZShtb21lbnQoZGF0dW0uVGltZXN0YW1wLCAnWVlZWS1NTS1ERFRISDptbTpzcy5mZmZaJykudG9EYXRlKCkuZ2V0VGltZSgpKSkgfSkpO1xyXG4gICAgICAgICAgICBkaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLkRpc3RhbmNlID4gYi5EaXN0YW5jZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhLkRpc3RhbmNlID09IGIuRGlzdGFuY2UpIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdHVtID0gZDMuZm9ybWF0KCcuMmYnKShkaXN0WzBdLlZhbHVlKTtcclxuICAgICAgICAgICAgdGV4dC5hcHBlbmQoJ3RzcGFuJykudGV4dChzZXJpZXMuTGFiZWwgKyAnIC0gJyArIGRhdHVtKS5hdHRyKCd4JywgJzEuNWVtJykuYXR0cigneScsIGAke2luZGV4KzF9ZW1gKTtcclxuICAgICAgICAgICAgd2lkdGggPSB0ZXh0Lm5vZGUoKS5nZXRCQm94KCkud2lkdGggKyAyNSA+IHdpZHRoID8gdGV4dC5ub2RlKCkuZ2V0QkJveCgpLndpZHRoICsgMjUgIDogd2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVjdC5hdHRyKCd3aWR0aCcsIHdpZHRoKTtcclxuICAgICAgICBpZiAod2lkdGggPiBwcm9wcy5XaWR0aCAtIG1hcmdpbi5jdXJyZW50LnJpZ2h0IC0gZXZ0Lm9mZnNldFgpXHJcbiAgICAgICAgICAgIHRvb2x0aXAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7ZXZ0Lm9mZnNldFggLSAxNSAtIHdpZHRofSwke2V2dC5vZmZzZXRZIC0gdG9vbHRpcEhlaWdodCAvIDJ9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE9uUGFuKGV2dDogTW91c2VFdmVudCwgc3ZnOiBkMy5TZWxlY3Rpb248U1ZHU1ZHRWxlbWVudCwgdW5rbm93biwgbnVsbCwgdW5kZWZpbmVkPiwgc2NhbGU6IGQzLlNjYWxlVGltZTxudW1iZXIsIG51bWJlcj4pIHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IGV2dC5jbGllbnRYO1xyXG4gICAgICAgIHN2Zy5vbignbW91c2Vtb3ZlLnBhbicsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJlY29yZC5VcGRhdGVKU09OKCdNaW4nLCBzY2FsZS5pbnZlcnQoc2NhbGUucmFuZ2UoKVswXSArIHN0YXJ0IC0gZS5jbGllbnRYKS5nZXRUaW1lKCkpXHJcbiAgICAgICAgICAgIHNldFJlY29yZChuZXcgVHJlbmQocmVjb3JkLlVwZGF0ZUpTT04oJ01heCcsIHNjYWxlLmludmVydChzY2FsZS5yYW5nZSgpWzFdICsgc3RhcnQgLSBlLmNsaWVudFgpLmdldFRpbWUoKSkpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN2Zy5vbignbW91c2V1cC5wYW4nLCAoKSA9PiBzdmcub24oJ21vdXNlbW92ZS5wYW4nLCBudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gT25YWm9vbShldnQ6IE1vdXNlRXZlbnQsIHN2ZzogZDMuU2VsZWN0aW9uPFNWR1NWR0VsZW1lbnQsIHVua25vd24sIG51bGwsIHVuZGVmaW5lZD4sIHNjYWxlOiBkMy5TY2FsZVRpbWU8bnVtYmVyLCBudW1iZXI+KSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBldnQub2Zmc2V0WDtcclxuICAgICAgICBjb25zdCBicnVzaCA9IGQzLmJydXNoWCgpXHJcbiAgICAgICAgICAgIC5leHRlbnQoW1ttYXJnaW4uY3VycmVudC5sZWZ0LCBtYXJnaW4uY3VycmVudC50b3AgKyAwLjVdLCBbcHJvcHMuV2lkdGggLSBtYXJnaW4uY3VycmVudC5yaWdodCwgcGFyc2VJbnQoc3ZnLmF0dHIoJ2hlaWdodCcpKSAtIG1hcmdpbi5jdXJyZW50LmJvdHRvbSArIDAuNV1dKVxyXG4gICAgICAgIGNvbnN0IGJyID0gc3ZnLmFwcGVuZCgnZycpLmNhbGwoYnJ1c2gpXHJcbiAgICAgICAgYnIuY2FsbChicnVzaC5tb3ZlLCBbc3RhcnQsIHN0YXJ0ICsgMV0pO1xyXG4gICAgICAgIHN2Zy5vbignbW91c2Vtb3ZlLmJydXNoJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgYnIuY2FsbChicnVzaC5tb3ZlLCBbc3RhcnQsIGUub2Zmc2V0WF0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc3ZnLm9uKCdtb3VzZXVwLmJydXNoJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oc3RhcnQsIGUub2Zmc2V0WCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHN0YXJ0LCBlLm9mZnNldFgpO1xyXG4gICAgICAgICAgICByZWNvcmQuVXBkYXRlSlNPTignTWluJywgc2NhbGUuaW52ZXJ0KG1pbikuZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICBzZXRSZWNvcmQobmV3IFRyZW5kKHJlY29yZC5VcGRhdGVKU09OKCdNYXgnLCBzY2FsZS5pbnZlcnQobWF4KS5nZXRUaW1lKCkpKSlcclxuXHJcbiAgICAgICAgICAgIGJyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdmcub24oJ21vdXNlbW92ZS5icnVzaCcsIG51bGwpO1xyXG4gICAgICAgICAgICBzdmcub24oJ21vdXNldXAuYnJ1c2gnLCBudWxsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBwcm9wcy5XaWR0aCwgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ3aWRnaXQtbGFiZWxcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5MYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIFwiICsgc3R5bGVzW1wid2lkZ2l0LWNvbnRyb2xzXCJdfSB0aXRsZT0nV2lkZ2V0IFNldHRpbmdzJyBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXt7IHVzZXJTZWxlY3Q6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAxMCwgekluZGV4OiAxMDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saWdodCcgb25DbGljaz17SGFuZGxlUmVzZXR9PlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBjaGVja2VkPXtjaGFydEFjdGlvbiA9PSAnUGFuJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldENoYXJ0QWN0aW9uKCdQYW4nKX0gLz5QYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIGNoZWNrZWQ9e2NoYXJ0QWN0aW9uID09ICdab29tWCd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDaGFydEFjdGlvbignWm9vbVgnKX0gLz5ab29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBjaGVja2VkPXtjaGFydEFjdGlvbiA9PSAnQ2xpY2snfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q2hhcnRBY3Rpb24oJ0NsaWNrJyl9IC8+Q2xpY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgY2hlY2tlZD17Y2hhcnRBY3Rpb24gPT0gJ1pvb21ZJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldENoYXJ0QWN0aW9uKCdab29tWScpfSAvPlpvb20gWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBjaGVja2VkPXtjaGFydEFjdGlvbiA9PSAnWm9vbVhZJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldENoYXJ0QWN0aW9uKCdab29tWFknKX0gLz5ab29tIFggJiBZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxXaWRnZXQgey4uLnByb3BzfSBSZWNvcmQ9e3JlY29yZH0gVG9nZ2xlPXt0b2dnbGV9IFNldFRvZ2dsZT17KGJvb2wpID0+IHNldFRvZ2dsZShib29sKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlXaWRnZXQ+IEZpZWxkPSdMYWJlbCcgUmVjb3JkPXtyZWNvcmR9IFR5cGU9J3RleHQnIFNldHRlcj17KHIpID0+IHNldFJlY29yZChuZXcgVHJlbmQocikpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V2lkdGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmVjb3JkPy5XaWR0aH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlY29yZChuZXcgVHJlbmQoeyAuLi5yZWNvcmQsV2lkdGg6IHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpfSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFRyZW5kKHsgLi4ucmVjb3JkLCBXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSAyMDB9KSkgfT5GdWxsIFdpZHRoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNwbGl0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoQnV0dG9uIGNoZWNrZWQ9e3JlY29yZD8uSlNPTj8uU3BsaXQgPz8gZmFsc2V9IG9uQ2hhbmdlPXsoY2hlY2tlZDogYm9vbGVhbikgPT4gc2V0UmVjb3JkKHJlY29yZC5VcGRhdGVKU09OKCdTcGxpdCcsIGNoZWNrZWQpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0PFRyZW5EQVAuaVRyZW5kPiBMYWJlbD0nU3BsaXQgT24nIEZpZWxkPSdTcGxpdFR5cGUnIFJlY29yZD17cmVjb3JkPy5KU09OfSBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQobmV3IFRyZW5kKHsgLi4ucmVjb3JkLCBKU09OOiByIH0pKX0gT3B0aW9ucz17W3sgVmFsdWU6ICdBeGlzJywgTGFiZWw6ICdBeGlzJyB9LCB7IFZhbHVlOiAnU2VyaWVzJywgTGFiZWw6ICdTZXJpZXMnIH1dfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MZWdlbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoQnV0dG9uIGNoZWNrZWQ9e3JlY29yZC5KU09OPy5MZWdlbmQgPz8gZmFsc2V9IG9uQ2hhbmdlPXsoY2hlY2tlZDogYm9vbGVhbikgPT4gc2V0UmVjb3JkKHJlY29yZC5VcGRhdGVKU09OKCdMZWdlbmQnLCBjaGVja2VkKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+WCBBeGlzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRldGltZSB2YWx1ZT17bW9tZW50KHJlY29yZC5KU09OLk1pbil9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFJlY29yZChuZXcgVHJlbmQoeyAuLi5yZWNvcmQsIEpTT046IHsgLi4ucmVjb3JkLkpTT04sTWluOiBtb21lbnQodmFsdWUpLnRvRGF0ZSgpLmdldFRpbWUoKX19KSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRldGltZSB2YWx1ZT17bW9tZW50KHJlY29yZC5KU09OLk1heCl9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFJlY29yZChuZXcgVHJlbmQoeyAuLi5yZWNvcmQsIEpTT046IHsgLi4ucmVjb3JkLkpTT04sIE1heDogbW9tZW50KHZhbHVlKS50b0RhdGUoKS5nZXRUaW1lKCkgfX0pKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogMTYgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuQ2FsY3VsYXRlQXhpc1JhbmdlKCd4JywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVjb3JkKG5ldyBUcmVuZChyZWNvcmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlVzZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+WSBBeGlzPC9oNj4gPGJ1dHRvbiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgdG9wOiAtMzB9fSBjbGFzc05hbWU9J2J0biBidG4tbGluaycgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuQWRkQXhpcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlY29yZChuZXcgVHJlbmQocmVjb3JkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e1BsdXN9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiIHN0eWxlPXt7bWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA2MjUsIG92ZXJmbG93WTogJ2F1dG8nLCBvdmVyZmxvd1g6ICdoaWRkZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5KU09OLllBeGlzLm1hcCgoYXhpcywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSc+PEF4aXMgQXhpcz17YXhpc30gSW5kZXg9e2luZGV4fSBXaWRnZXQ9e3JlY29yZH0gQ2FsbGJhY2s9eygpID0+IHNldFJlY29yZChuZXcgVHJlbmQocmVjb3JkKSkgfS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+U2VyaWVzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3JkaW9uXCIgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnYXV0bycsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjUwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuRGF0YS5tYXAoKGQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtcIiNjb2xsYXBzZVwiICsgaX0+e2QuRGF0YVNvdXJjZS5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcImNvbGxhcHNlXCIgKyBpfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBzaG93XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBvbkNsaWNrPXsoKSA9PiBzZXRSZWNvcmQocmVjb3JkLlF1aWNrQWRkVm9sdGFnZVJNUyhkLkRhdGFTb3VyY2UuSUQpKX0+UXVpY2sgQWRkIFZSTVM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIG9uQ2xpY2s9eygpID0+IHNldFJlY29yZChyZWNvcmQuUXVpY2tBZGRDdXJyZW50Uk1TKGQuRGF0YVNvdXJjZS5JRCkpfT5RdWljayBBZGQgSVJNUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgb25DbGljaz17KCkgPT4gc2V0UmVjb3JkKHJlY29yZC5SZW1vdmVBbGwoZC5EYXRhU291cmNlLklEKSl9PlJlbW92ZSBBbGw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJpZXNTZWxlY3QgV2lkZ2V0PXtyZWNvcmR9IERhdGFTb3VyY2VJRD17ZC5EYXRhU291cmNlLklEfSBDYWxsYmFjaz17KCkgPT4gc2V0UmVjb3JkKG5ldyBUcmVuZChyZWNvcmQpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1RyZW5EQVBEQicgPyByZWNvcmQuSlNPTi5TZXJpZXMubWFwKChzZXJpZXMsIGluZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0dW0gPSBkLkRhdGEuZmluZChkZCA9PiBkZC5JRCA9PT0gc2VyaWVzLklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdHVtID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2VyaWVzLklEfSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzUGlja2VyIEluZGV4PXtpbmR9IFNlcmllcz17c2VyaWVzfSBEYXRhPXtkYXR1bX0gV2lkZ2V0PXtyZWNvcmR9IENhbGxiYWNrPXsoKSA9PiBzZXRSZWNvcmQobmV3IFRyZW5kKHJlY29yZCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuXHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgV2lkZ2V0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xNi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vU3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFdpZGdldCwgSGlzdG9ncmFtLCBUcmVuZCwgU3RhdHMsIFRhYmxlLCBYdnNZIH0gZnJvbSAnLi4vLi4vSW1wbGVtZW50YXRpb25zJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRyZW5EQVAuaVdpZGdldCB7XHJcbiAgICBjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdLFxyXG4gICAgUmVjb3JkOiBUcmVuREFQLmlXaWRnZXQsXHJcbiAgICBUb2dnbGU6IGJvb2xlYW4sXHJcbiAgICBTZXRUb2dnbGU6IChib29sZWFuKSA9PiB2b2lkXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2l0KHByb3BzOiBQcm9wcykge1xyXG5cclxuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiByb2xlPVwiZGlhbG9nXCIgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuVG9nZ2xlID8gJ2Jsb2NrJyA6ICdub25lJywgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjQpJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG13LTEwMCB3LTc1XCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibW9kYWwtaGVhZGVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3Byb3BzLkxhYmVsfSBTZXR0aW5nczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiY2xvc2VcIn0gb25DbGljaz17KCkgPT4gcHJvcHMuU2V0VG9nZ2xlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5VcGRhdGUocHJvcHMuUmVjb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5SZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXRUb2dnbGUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGUgV2lkZ2l0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHByb3BzLlNldFRvZ2dsZShmYWxzZSl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRvd1wiKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZXJpZXNTZWxlY3QocHJvcHM6IHsgV2lkZ2V0OiBXaWRnZXQ8VHJlbkRBUC5XaWRnZXRDbGFzcz4sIERhdGFTb3VyY2VJRDogbnVtYmVyLCBDYWxsYmFjazogKCkgPT4gdm9pZCwgQXhpcz86ICd4JyB8ICd5JyB9KSB7XHJcbiAgICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlEYXRhU2V0UmV0dXJuPih1bmRlZmluZWQpXHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaURhdGFTZXRSZXR1cm5UeXBlPih7IElEOiAwIH0gYXMgVHJlbkRBUC5pRGF0YVNldFJldHVyblR5cGUpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGU8J01ldGVyJyB8ICdBc3NldCc+KCdNZXRlcicpO1xyXG4gICAgY29uc3QgW2RlbGltZXRlciwgc2V0RGVsaW1ldGVyXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IHByb3BzLldpZGdldC5EYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IHByb3BzLkRhdGFTb3VyY2VJRCk7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldERhdGFTb3VyY2UoZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgICAgIC8vc2V0U2VsZWN0ZWQoKGRhdGFTb3VyY2U/LkRhdGEgPz8gW3VuZGVmaW5lZF0pWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuV2lkZ2V0LkRhdGFdKTtcclxuXHJcblxyXG4gICAgaWYgKGRhdGFTb3VyY2U/LkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1RyZW5EQVBEQicpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dHlwZX0gb25DaGFuZ2U9eyhldnQpID0+IHNldFR5cGUoZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdNZXRlcic+TWV0ZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBc3NldCc+QXNzZXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17ZGVsaW1ldGVyfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0RGVsaW1ldGVyKGV2dC50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsoZGF0YVNvdXJjZT8uRGF0YSA/PyBbXSkubWFwKGQgPT4gZFt0eXBlXSkuZmlsdGVyKCh4LCBpLCBhKSA9PiBhLmluZGV4T2YoeCkgPT09IGkpLm1hcCgoZCwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtkfT57ZH08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17c2VsZWN0ZWQ/LklEID8/ICcwJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldFNlbGVjdGVkKGRhdGFTb3VyY2UuRGF0YS5maW5kKGRhdHVtID0+IGRhdHVtLklEID09PSBwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSkpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScwJz48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7KGRhdGFTb3VyY2U/LkRhdGEgPz8gW10pLmZpbHRlcihkYXR1bSA9PiBkYXR1bVt0eXBlXS5pbmRleE9mKGRlbGltZXRlcikgPj0gMCkubWFwKChkYXR1bSwgaW5kZXgpID0+IDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2RhdHVtLklEfT57ZGF0dW0uTmFtZX08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9e1wiZHJvcGRvd25NZW51QnV0dG9uXCJ9IGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPkluZm88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiIGFyaWEtbGFiZWxsZWRieT17XCJkcm9wZG93bk1lbnVCdXR0b25cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPk1ldGVyOiB7c2VsZWN0ZWQ/Lk1ldGVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5Bc3NldDoge3NlbGVjdGVkPy5Bc3NldH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+Q2hhcmFjdGVyaXN0aWM6IHtzZWxlY3RlZD8uQ2hhcmFjdGVyaXN0aWN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlR5cGU6IHtzZWxlY3RlZD8uVHlwZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+U3RhdGlvbjoge3NlbGVjdGVkPy5TdGF0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5QaGFzZToge3NlbGVjdGVkPy5QaGFzZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+SGFybW9uaWM6IHtzZWxlY3RlZD8uSGFybW9uaWN9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb3BzLldpZGdldC5UeXBlID09PSAnSGlzdG9ncmFtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5XaWRnZXQgYXMgSGlzdG9ncmFtKS5BZGRTZXJpZXMoc2VsZWN0ZWQuSUQsIHByb3BzLkRhdGFTb3VyY2VJRCwgc2VsZWN0ZWQuVHlwZSArICcgJyArIHNlbGVjdGVkLlBoYXNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wcy5XaWRnZXQuVHlwZSA9PT0gJ1RyZW5kJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQuQ2hhcmFjdGVyaXN0aWMgPT09ICdGcmVxdWVuY3knKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gJ0ZyZXEgLSAnICsgc2VsZWN0ZWQuTWV0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RlZC5UeXBlID09PSAnVm9sdGFnZScmJiBzZWxlY3RlZC5DaGFyYWN0ZXJpc3RpYyA9PT0gJ1JNUycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBgViR7c2VsZWN0ZWQuUGhhc2V9IC0gJHtzZWxlY3RlZC5NZXRlcn1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWQuVHlwZSA9PT0gJ1ZvbHRhZ2UnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gYFYke3NlbGVjdGVkLlBoYXNlfSAke3NlbGVjdGVkLkNoYXJhY3RlcmlzdGljfSAtICR7c2VsZWN0ZWQuTWV0ZXJ9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGVjdGVkLlR5cGUgPT09ICdDdXJyZW50JyAmJiBzZWxlY3RlZC5DaGFyYWN0ZXJpc3RpYyA9PT0gJ1JNUycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBgSSR7c2VsZWN0ZWQuUGhhc2V9IC0gJHtzZWxlY3RlZC5NZXRlcn1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0ZWQuVHlwZSA9PT0gJ0N1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gYEkke3NlbGVjdGVkLlBoYXNlfSAke3NlbGVjdGVkLkNoYXJhY3RlcmlzdGljfSAtICR7c2VsZWN0ZWQuTWV0ZXJ9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgbGFiZWwgPSBzZWxlY3RlZC5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLldpZGdldCBhcyBUcmVuZCkuQWRkU2VyaWVzKHNlbGVjdGVkLklELCBwcm9wcy5EYXRhU291cmNlSUQsIGxhYmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BzLldpZGdldC5UeXBlID09PSAnU3RhdHMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLldpZGdldCBhcyBTdGF0cykuU2V0U2VyaWVzKHNlbGVjdGVkLklELCBwcm9wcy5EYXRhU291cmNlSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wcy5XaWRnZXQuVHlwZSA9PT0gJ1RhYmxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5XaWRnZXQgYXMgVGFibGUpLlNldFNlcmllcyhzZWxlY3RlZC5JRCwgcHJvcHMuRGF0YVNvdXJjZUlEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcHMuV2lkZ2V0LlR5cGUgPT09ICdYdnNZJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5XaWRnZXQgYXMgWHZzWSkuU2V0U2VyaWVzKHByb3BzLkF4aXMsIHNlbGVjdGVkLklELCBwcm9wcy5EYXRhU291cmNlSUQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlNlbGVjdDwvYnV0dG9uID5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWRkaXRpb25hbEluZm8gKHByb3BzOiB7IEluZGV4OiBudW1iZXIsIERhdGE6IGFueSB9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBkcm9wZG93bi10b2dnbGVcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9e1wiZHJvcGRvd25NZW51QnV0dG9uXCIgKyBwcm9wcy5JbmRleH0gZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICBBZGRpdGlvbiBJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9e1wiZHJvcGRvd25NZW51QnV0dG9uXCIgKyBwcm9wcy5JbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5NZXRlcjoge3Byb3BzLkRhdGE/Lk1ldGVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+QXNzZXQ6IHtwcm9wcy5EYXRhPy5Bc3NldH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPkNoYXJhY3RlcmlzdGljOiB7cHJvcHMuRGF0YT8uQ2hhcmFjdGVyaXN0aWN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5UeXBlOiB7cHJvcHMuRGF0YT8uVHlwZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlN0YXRpb246IHtwcm9wcy5EYXRhPy5TdGF0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+UGhhc2U6IHtwcm9wcy5EYXRhPy5QaGFzZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPkhhcm1vbmljOiB7cHJvcHMuRGF0YT8uSGFybW9uaWN9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBYdnNZLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xNi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQ2hlY2tCb3ggfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuXHJcbmltcG9ydCBXaWRnZXQsIHsgU2VyaWVzU2VsZWN0LCBBZGRpdGlvbmFsSW5mbyB9IGZyb20gJy4vV2lkZ2V0JztcclxuaW1wb3J0IHsgQ3Jvc3NNYXJrLCBQbHVzIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgWHZzWSB9IGZyb20gJy4uLy4uL0ltcGxlbWVudGF0aW9ucyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IERhdGV0aW1lIGZyb20gJ3JlYWN0LWRhdGV0aW1lJztcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXRpbWUvY3NzL3JlYWN0LWRhdGV0aW1lLmNzc1wiO1xyXG5pbXBvcnQgeyBsaW5lYXJSZWdyZXNzaW9uLCBsaW5lYXJSZWdyZXNzaW9uTGluZSwgclNxdWFyZWQgfSBmcm9tICdzaW1wbGUtc3RhdGlzdGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBYdnNZSlNYKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pWHZzWT4pIHtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8WHZzWT4obmV3IFh2c1kocHJvcHMpKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vcmVjb3JkLmN1cnJlbnQgPSBuZXcgVHJlbmQocHJvcHMpO1xyXG4gICAgfSwgW3RvZ2dsZSwgcHJvcHMuSlNPTl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUocmVjb3JkKVxyXG4gICAgfSwgW3JlY29yZF0pXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRSZWNvcmQobmV3IFh2c1koeyAuLi5yZWNvcmQsIEhlaWdodDogcHJvcHMuSGVpZ2h0IH0pKVxyXG4gICAgfSwgW3Byb3BzLkhlaWdodF0pXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRSZWNvcmQobmV3IFh2c1koeyAuLi5yZWNvcmQsIERhdGE6IHByb3BzLkRhdGEgfSkpO1xyXG4gICAgfSwgW3Byb3BzLkRhdGFdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBaaXA8VD4oYXJyYXkxOiBUW10sIGZpZWxkMToga2V5b2YgVCwgYXJyYXkyOiBUW10sIGZpZWxkMjoga2V5b2YgVCwgemlwRmllbGQ6IGtleW9mIFQpIHtcclxuICAgICAgICBsZXQgcmV0dXJuQXJyYXk6IHsgWmlwRmllbGQ6IFRba2V5b2YgVF0sIEFycmF5MTogVFtrZXlvZiBUXSwgQXJyYXkyOiAgVFtrZXlvZiBUXX1bXT0gW107XHJcbiAgICAgICAgaWYgKGFycmF5MS5sZW5ndGggPiBhcnJheTIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGFycmF5MS5mb3JFYWNoKCh4ZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkyUG9pbnQgPSBhcnJheTIuZmluZChwb2ludCA9PiBwb2ludFt6aXBGaWVsZF0gPT09IHhkW3ppcEZpZWxkXSlcclxuICAgICAgICAgICAgICAgIGlmIChhcnJheTJQb2ludCA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIFppcEZpZWxkOiB4ZFt6aXBGaWVsZF0sIEFycmF5MTogeGRbZmllbGQxXSwgQXJyYXkyOiBhcnJheTJQb2ludFtmaWVsZDJdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhcnJheTIuZm9yRWFjaCgoeGQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5MVBvaW50ID0gYXJyYXkxLmZpbmQocG9pbnQgPT4gcG9pbnRbemlwRmllbGRdID09PSB4ZFt6aXBGaWVsZF0pXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkxUG9pbnQgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBaaXBGaWVsZDogeGRbemlwRmllbGRdLCBBcnJheTI6IHhkW2ZpZWxkMV0sIEFycmF5MTogYXJyYXkxUG9pbnRbZmllbGQyXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZShzZXR0aW5nczogWHZzWSkge1xyXG4gICAgICAgIGlmIChzZXR0aW5ncy5KU09OLlguU2VyaWVzID09IHVuZGVmaW5lZCB8fCBzZXR0aW5ncy5KU09OLlkuU2VyaWVzID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBtYXJnaW4gPSB7IGJvdHRvbTogNTAsIGxlZnQ6IDUwLCB0b3A6IDQwLCByaWdodDogNTAgfTtcclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQ7XHJcbiAgICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLmRvbWFpbihbc2V0dGluZ3MuSlNPTi5YLk1pbiwgc2V0dGluZ3MuSlNPTi5YLk1heF0pICAgICAvLyBjYW4gdXNlIHRoaXMgaW5zdGVhZCBvZiAxMDAwIHRvIGhhdmUgdGhlIG1heCBvZiBkYXRhOiBkMy5tYXgoZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gK2QucHJpY2UgfSlcclxuICAgICAgICAgICAgLnJhbmdlKFswLCBzZXR0aW5ncy5XaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0XSk7XHJcbiAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLnJhbmdlKFtzdmdIZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSwgMF0pXHJcbiAgICAgICAgICAgIC5kb21haW4oW3NldHRpbmdzLkpTT04uWS5NaW4sIHNldHRpbmdzLkpTT04uWS5NYXhdKTsgICAvLyBkMy5oaXN0IGhhcyB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBZIGF4aXMgb2J2aW91c2x5XHJcblxyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChyZWYuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc2V0dGluZ3MuV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzdmdIZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc2V0dGluZ3MuV2lkdGggLyAyKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAudGV4dChzZXR0aW5ncy5KU09OLlguVW5pdHMpXHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAobWFyZ2luLmxlZnQpICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKSB0cmFuc2xhdGUoLVwiICsgc3ZnSGVpZ2h0IC8gMiArIFwiLFwiICsgKG1hcmdpbi5sZWZ0IC8gMykgKyBcIilcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLnRleHQoc2V0dGluZ3MuSlNPTi5ZLlVuaXRzKTtcclxuXHJcbiAgICAgICAgY29uc3QgeERhdGE6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10gPSBHZXREYXR1bSgneCcpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIGNvbnN0IHlEYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdID0gR2V0RGF0dW0oJ3knKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBjb25zdCBjb21iaW5lZERhdGEgPSBaaXAoeERhdGEsIHJlY29yZC5KU09OLlguU2VyaWVzLkZpZWxkLCB5RGF0YSwgcmVjb3JkLkpTT04uWS5TZXJpZXMuRmllbGQsICdUaW1lc3RhbXAnKTsgXHJcbiAgICAgICAgLy9jb25zdCBjb21iaW5lZERhdGEgPSB4RGF0YS5tYXAoKHhkLCBpKSA9PiAoeyBUaW1lc3RhbXA6IHhkLlRpbWVzdGFtcCwgWDogeGRbcmVjb3JkLkpTT04uWFNlcmllcy5GaWVsZF0sIFk6IHlEYXRhW2ldW3JlY29yZC5KU09OLllTZXJpZXMuRmllbGRdIH0pKVxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGNvbWJpbmVkRGF0YS5maWx0ZXIoZCA9PiBtb21lbnQoZC5aaXBGaWVsZCkudG9EYXRlKCkuZ2V0VGltZSgpID49IHJlY29yZC5KU09OLlRpbWVNaW4gJiYgbW9tZW50KGQuWmlwRmllbGQpLnRvRGF0ZSgpLmdldFRpbWUoKSA8PSByZWNvcmQuSlNPTi5UaW1lTWF4KTtcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZG90XCIpXHJcbiAgICAgICAgICAgIC5kYXRhKGZpbHRlcmVkRGF0YSlcclxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCAzLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZC5BcnJheTEgYXMgbnVtYmVyKTsgfSlcclxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLkFycmF5MiBhcyBudW1iZXIpOyB9KVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYCk7XHJcblxyXG5cclxuICAgICAgICBpZiAocmVjb3JkLkpTT04uUmVncmVzc2lvbkxpbmUpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGZpbHRlcmVkRGF0YS5tYXAoZCA9PiBbZC5BcnJheTEgYXMgbnVtYmVyLCBkLkFycmF5MiBhcyBudW1iZXJdKVxyXG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IGxpbmVhclJlZ3Jlc3Npb24oZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxyTGluZSA9IGxpbmVhclJlZ3Jlc3Npb25MaW5lKG1vZGVsKTtcclxuICAgICAgICAgICAgY29uc3QgcjIgPSByU3F1YXJlZChkYXRhLCBsckxpbmUpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lRnVuYyA9IGQzLmxpbmU8bnVtYmVyW10+KCkueChkID0+IHgoZFswXSkpLnkoZCA9PiB5KGxyTGluZShkWzBdKSkpO1xyXG4gICAgICAgICAgICBzdmcuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmVkJylcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtwcm9wcy5XaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0fSwke21hcmdpbi50b3B9KWApXHJcbiAgICAgICAgICAgICAgICAudGV4dChgUjIgLSAke3IyLnRvRml4ZWQoMyl9YCk7XHJcblxyXG4gICAgICAgICAgICBzdmcuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAgICAgICAgICAgLmRhdGEoW2RhdGFdKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgJ3JlZCcpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgKGQpID0+IGxpbmVGdW5jKGQpKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdHVtKGF4aXM6ICd4JyB8ICd5Jykge1xyXG4gICAgICAgIGlmIChheGlzID09PSAneCcpIHtcclxuICAgICAgICAgICAgaWYgKHJlY29yZC5KU09OLlguU2VyaWVzID09IHVuZGVmaW5lZCkgcmV0dXJuIHtOYW1lOiAnJ30gYXMgYW55O1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhU291cmNlID0gcmVjb3JkLkRhdGEuZmluZChkID0+IGQuRGF0YVNvdXJjZS5JRCA9PT0gcmVjb3JkLkpTT04uWC5TZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICAgICAgY29uc3QgZGF0dW0gPSBkYXRhU291cmNlLmZpbmQoZHMgPT4gZHMuSUQgPT09IHJlY29yZC5KU09OLlguU2VyaWVzLklEKVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0dW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocmVjb3JkLkpTT04uWS5TZXJpZXMgPT0gdW5kZWZpbmVkKSByZXR1cm4geyBOYW1lOiAnJyB9IGFzIGFueTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IHJlY29yZC5EYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IHJlY29yZC5KU09OLlkuU2VyaWVzLkRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdHVtID0gZGF0YVNvdXJjZS5maW5kKGRzID0+IGRzLklEID09PSByZWNvcmQuSlNPTi5ZLlNlcmllcy5JRClcclxuICAgICAgICAgICAgcmV0dXJuIGRhdHVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBwcm9wcy5XaWR0aCwgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ3aWRnaXQtbGFiZWxcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5MYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIFwiICsgc3R5bGVzW1wid2lkZ2l0LWNvbnRyb2xzXCJdfSB0aXRsZT0nV2lkZ2V0IFNldHRpbmdzJyBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxXaWRnZXQgey4uLnByb3BzfSBSZWNvcmQ9e3JlY29yZH0gVG9nZ2xlPXt0b2dnbGV9IFNldFRvZ2dsZT17KGJvb2wpID0+IHNldFRvZ2dsZShib29sKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlXaWRnZXQ+IEZpZWxkPSdMYWJlbCcgUmVjb3JkPXtyZWNvcmR9IFR5cGU9J3RleHQnIFNldHRlcj17KHIpID0+IHNldFJlY29yZChuZXcgWHZzWShyKSl9IFZhbGlkPXsoZmllbGQpID0+IHRydWV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5XaWR0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtyZWNvcmQ/LldpZHRofSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKG5ldyBYdnNZKHsgLi4ucmVjb3JkLCBXaWR0aDogcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkgfSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFh2c1koeyAuLi5yZWNvcmQsIFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAtIDIwMCB9KSl9PkZ1bGwgV2lkdGg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGV0aW1lIHZhbHVlPXttb21lbnQocmVjb3JkLkpTT04uVGltZU1pbil9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFJlY29yZChuZXcgWHZzWShyZWNvcmQuVXBkYXRlSlNPTignVGltZU1pbicsIG1vbWVudCh2YWx1ZSkudG9EYXRlKCkuZ2V0VGltZSgpKSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGV0aW1lIHZhbHVlPXttb21lbnQocmVjb3JkLkpTT04uVGltZU1heCl9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFJlY29yZChuZXcgWHZzWShyZWNvcmQuVXBkYXRlSlNPTignVGltZU1heCcsIG1vbWVudCh2YWx1ZSkudG9EYXRlKCkuZ2V0VGltZSgpKSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogMTYgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFJlY29yZChyZWNvcmQuQ2FsY3VsYXRlUmFuZ2UoJ3RpbWUnKSl9PlVzZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94PFRyZW5EQVAuaVh2c1k+IFJlY29yZD17cmVjb3JkLkpTT059IEZpZWxkPSdSZWdyZXNzaW9uTGluZScgTGFiZWw9J0FkZCBSZWdyZXNzaW9uJyBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQobmV3IFh2c1kocmVjb3JkLlVwZGF0ZUpTT04oJ1JlZ3Jlc3Npb25MaW5lJywgci5SZWdyZXNzaW9uTGluZSkpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PlggQXhpczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlBeGlzPiBSZWNvcmQ9e3JlY29yZC5KU09OLlh9IEZpZWxkPSdVbml0cycgVmFsaWQ9eygpID0+IHRydWV9IFNldHRlcj17KHIpID0+IHNldFJlY29yZChyZWNvcmQuU2V0QXhpcygneCcsICdVbml0cycsIHIuVW5pdHMpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pQXhpcz4gUmVjb3JkPXtyZWNvcmQuSlNPTi5YfSBGaWVsZD0nTWluJyBWYWxpZD17KCkgPT4gdHJ1ZX0gU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKHJlY29yZC5TZXRBeGlzKCd4JywgJ01pbicsIHIuTWluKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaUF4aXM+IFJlY29yZD17cmVjb3JkLkpTT04uWH0gRmllbGQ9J01heCcgVmFsaWQ9eygpID0+IHRydWV9IFNldHRlcj17KHIpID0+IHNldFJlY29yZChyZWNvcmQuU2V0QXhpcygneCcsICdNYXgnLCByLk1heCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogMTYgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFJlY29yZChyZWNvcmQuQ2FsY3VsYXRlUmFuZ2UoJ3gnKSl9PlVzZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+WSBBeGlzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaUF4aXM+IFJlY29yZD17cmVjb3JkLkpTT04uWX0gRmllbGQ9J1VuaXRzJyBWYWxpZD17KCkgPT4gdHJ1ZX0gU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKHJlY29yZC5TZXRBeGlzKCd5JywgJ1VuaXRzJywgci5Vbml0cykpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlBeGlzPiBSZWNvcmQ9e3JlY29yZC5KU09OLll9IEZpZWxkPSdNaW4nIFZhbGlkPXsoKSA9PiB0cnVlfSBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQocmVjb3JkLlNldEF4aXMoJ3knLCAnTWluJywgci5NaW4pKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pQXhpcz4gUmVjb3JkPXtyZWNvcmQuSlNPTi5ZfSBGaWVsZD0nTWF4JyBWYWxpZD17KCkgPT4gdHJ1ZX0gU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKHJlY29yZC5TZXRBeGlzKCd5JywgJ01heCcsIHIuTWF4KSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiAxNiB9fSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0UmVjb3JkKHJlY29yZC5DYWxjdWxhdGVSYW5nZSgneScpKX0+VXNlIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5TZXJpZXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhY2NvcmRpb25cIiBzdHlsZT17eyBvdmVyZmxvd1k6ICdhdXRvJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC8gMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5EYXRhLm1hcCgoZCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e1wiI2NvbGxhcHNlXCIgKyBpfT57ZC5EYXRhU291cmNlLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1wiY29sbGFwc2VcIiArIGl9IGNsYXNzTmFtZT1cImNvbGxhcHNlIHNob3dcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5YIFNlcmllczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlcmllc1NlbGVjdCBXaWRnZXQ9e3JlY29yZH0gRGF0YVNvdXJjZUlEPXtkLkRhdGFTb3VyY2UuSUR9IEF4aXM9J3gnIENhbGxiYWNrPXsoKSA9PiBzZXRSZWNvcmQobmV3IFh2c1kocmVjb3JkKSl9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhyZWNvcmQuSlNPTi5YLlNlcmllcyAhPSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57R2V0RGF0dW0oJ3gnKT8uTmFtZSA/PyAnJ308L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZGl0aW9uYWxJbmZvIEluZGV4PXtpfSBEYXRhPXtHZXREYXR1bSgneCcpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlcmllc1BpY2tlciBBeGlzPSd4JyBTZXJpZXM9e3JlY29yZC5KU09OLlguU2VyaWVzfSBXaWRnZXQ9e3JlY29yZH0gQ2FsbGJhY2s9eygpID0+IHNldFJlY29yZChuZXcgWHZzWShyZWNvcmQpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5ZIFNlcmllczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJpZXNTZWxlY3QgV2lkZ2V0PXtyZWNvcmR9IERhdGFTb3VyY2VJRD17ZC5EYXRhU291cmNlLklEfSBBeGlzPSd5JyBDYWxsYmFjaz17KCkgPT4gc2V0UmVjb3JkKG5ldyBYdnNZKHJlY29yZCkpfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocmVjb3JkLkpTT04uWS5TZXJpZXMgIT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e0dldERhdHVtKCd5Jyk/Lk5hbWUgPz8gJyd9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRpdGlvbmFsSW5mbyBJbmRleD17aX0gRGF0YT17R2V0RGF0dW0oJ3knKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJpZXNQaWNrZXIgQXhpcz0neScgU2VyaWVzPXtyZWNvcmQuSlNPTi5ZLlNlcmllc30gV2lkZ2V0PXtyZWNvcmR9IENhbGxiYWNrPXsoKSA9PiBzZXRSZWNvcmQobmV3IFh2c1kocmVjb3JkKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3QgU2VyaWVzUGlja2VyID0gKHByb3BzOiB7IEF4aXM6ICd4J3wneScsIFNlcmllczogVHJlbkRBUC5pU2VyaWVzLCBXaWRnZXQ6IFh2c1ksIENhbGxiYWNrOiAoKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQ+KHByb3BzLlNlcmllcy5GaWVsZCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5XaWRnZXQuVXBkYXRlU2VyaWVzKHByb3BzLkF4aXMsIFwiRmllbGRcIiwgdHlwZSk7XHJcbiAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuICAgIH0sIFt0eXBlXSk7XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkZpZWxkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3R5cGV9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRUeXBlKGV2dC50YXJnZXQudmFsdWUgYXMgVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRGaWVsZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBdmVyYWdlXCI+QXZnPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1pbmltdW1cIj5NaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWF4aW11bVwiPk1heDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5XaWRnZXQuUmVtb3ZlU2VyaWVzKHByb3BzLkF4aXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9fT57Q3Jvc3NNYXJrfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgV29ya1NwYWNlRWRpdG9yLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgSW5wdXQsIENoZWNrQm94IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCB7IENyb3NzTWFyaywgVXBBcnJvdywgRG93bkFycm93IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9ncGEtc3ltYm9scyc7XHJcblxyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIExpbmssIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IFNlbGVjdFdvcmtTcGFjZXNGb3JVc2VyLCBTZWxlY3RXb3JrU3BhY2VzQWxsUHVibGljTm90VXNlciwgT3BlbkNsb3NlV29ya1NwYWNlLCBVcGRhdGVXb3JrU3BhY2UsIFNlbGVjdFdvcmtTcGFjZXNTdGF0dXMsIEZldGNoV29ya1NwYWNlcyB9IGZyb20gJy4vV29ya1NwYWNlc1NsaWNlJztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgSGlzdG9ncmFtIGZyb20gJy4uL1dpZGdldHMvSGlzdG9ncmFtJztcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vV2lkZ2V0cy9Qcm9maWxlJztcclxuaW1wb3J0IFN0YXRzIGZyb20gJy4uL1dpZGdldHMvU3RhdHMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vV2lkZ2V0cy9UYWJsZSc7XHJcbmltcG9ydCBUZXh0IGZyb20gJy4uL1dpZGdldHMvVGV4dCc7XHJcbmltcG9ydCBUcmVuZCBmcm9tICcuLi9XaWRnZXRzL1RyZW5kL1RyZW5kJztcclxuaW1wb3J0IFh2c1kgZnJvbSAnLi4vV2lkZ2V0cy9YdnNZJztcclxuaW1wb3J0IHsgVXBkYXRlLCBTZWxlY3REYXRhU2V0QnlJRCwgU2VsZWN0RGF0YVNldHMsIEZldGNoRGF0YVNldHMsIFNlbGVjdERhdGFTZXRzU3RhdHVzLCBTZWxlY3REYXRhU2V0RGF0YSwgR2V0RGF0YVNldERhdGFGcm9tSURCIH0gZnJvbSAnLi4vRGF0YVNldHMvRGF0YVNldHNTbGljZSc7XHJcbmltcG9ydCBEYXRhU2V0RGF0YSBmcm9tICcuLi9EYXRhU2V0cy9EYXRhU2V0RGF0YSc7XHJcbmltcG9ydCB7IENyZWF0ZVdpZGdldCB9IGZyb20gJy4uLy4uL0ltcGxlbWVudGF0aW9ucyc7XHJcblxyXG5jb25zdCBOYXZNYXJnaW4gPSA4NTtcclxuY29uc3QgTmF2V2lkdGggPSAyMDA7XHJcblxyXG5jb25zdCBXb3JrU3BhY2VFZGl0b3I6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHt9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pRGF0YVNldFJldHVybltdPihbXSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXM8eyBpZCB9PigpO1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KGlkKTtcclxuICAgIGNvbnN0IHVzZXJzV29ya1NwYWNlczogVHJlbkRBUC5pV29ya1NwYWNlW10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFdvcmtTcGFjZXNGb3JVc2VyKHN0YXRlLCB1c2VyTmFtZSkpO1xyXG4gICAgY29uc3QgcHVibGljV29ya1NwYWNlczogVHJlbkRBUC5pV29ya1NwYWNlW10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFdvcmtTcGFjZXNBbGxQdWJsaWNOb3RVc2VyKHN0YXRlLCB1c2VyTmFtZSkpO1xyXG4gICAgY29uc3QgZGF0YVNldHMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0cyk7XHJcbiAgICBjb25zdCB3c1N0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdFdvcmtTcGFjZXNTdGF0dXMpO1xyXG4gICAgY29uc3QgZHNTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0c1N0YXR1cyk7XHJcbiAgICBjb25zdCBbd29ya1NwYWNlSlNPTiwgc2V0V29ya1NwYWNlSlNPTl0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLldvcmtTcGFjZUpTT04+KHsgUm93czogW10gfSk7XHJcbiAgICBjb25zdCBbd29ya1NwYWNlLCBzZXRXb3JrU3BhY2VdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pV29ya1NwYWNlPihbLi4udXNlcnNXb3JrU3BhY2VzLCAuLi5wdWJsaWNXb3JrU3BhY2VzXS5maW5kKHdzID0+IHdzLklEID09IHRhYikpO1xyXG4gICAgY29uc3QgW2RhdGFTZXQsIHNldERhdGFTZXRdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pRGF0YVNldD4oe30gYXMgYW55KTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCAhPSB0YWIpIHtcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKGAvV29ya1NwYWNlRWRpdG9yLyR7dGFifWApOyBcclxuICAgICAgICAgICAgY29uc3Qgd3MgPSBbLi4udXNlcnNXb3JrU3BhY2VzLCAuLi5wdWJsaWNXb3JrU3BhY2VzXS5maW5kKHdzID0+IHdzLklEID09IHRhYilcclxuICAgICAgICAgICAgc2V0V29ya1NwYWNlKHdzKTtcclxuICAgICAgICAgICAgY29uc3QgZHMgPSBkYXRhU2V0cy5maW5kKGRzID0+IGRzLklEID09PSB3b3JrU3BhY2UuRGF0YVNldElEKTtcclxuICAgICAgICAgICAgaWYgKGRzICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHNldERhdGFTZXQoZHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0YWJdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3b3JrU3BhY2UgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIC8vc2V0RGF0YVNldChkYXRhU2V0cy5maW5kKGRzID0+IGRzLklEID09PSB3b3JrU3BhY2UuRGF0YVNldElEKSk7XHJcbiAgICAgICAgaWYgKCF3b3JrU3BhY2U/Lk9wZW4pXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKE9wZW5DbG9zZVdvcmtTcGFjZSh7IHdvcmtTcGFjZTogd29ya1NwYWNlLCBvcGVuOiB0cnVlIH0pKTtcclxuXHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHdvcmtTcGFjZS5KU09OU3RyaW5nKSBhcyBUcmVuREFQLldvcmtTcGFjZUpTT047XHJcbiAgICAgICAgc2V0V29ya1NwYWNlSlNPTihqc29uKTtcclxuXHJcbiAgICAgICAgR2V0RGF0YVNldERhdGFGcm9tSURCKHdvcmtTcGFjZS5EYXRhU2V0SUQpLnRoZW4oZCA9PiB7XHJcbiAgICAgICAgICAgIHNldERhdGEoZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSwgW3dvcmtTcGFjZSwgZGF0YVNldHNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3c1N0YXR1cyA9PT0gJ2lkbGUnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdzID0gWy4uLnVzZXJzV29ya1NwYWNlcywgLi4ucHVibGljV29ya1NwYWNlc10uZmluZCh3cyA9PiB3cy5JRCA9PSB0YWIpXHJcbiAgICAgICAgICAgIHNldFdvcmtTcGFjZSh3cyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRzID0gZGF0YVNldHMuZmluZChkcyA9PiBkcy5JRCA9PT0gd29ya1NwYWNlLkRhdGFTZXRJRCk7XHJcbiAgICAgICAgICAgIGlmIChkcyAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhU2V0KGRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAod3NTdGF0dXMgPT0gJ3VuaXRpYXRlZCcgfHwgd3NTdGF0dXMgPT0gJ2NoYW5nZWQnKVxyXG4gICAgICAgICAgICBkaXNwYXRjaChGZXRjaFdvcmtTcGFjZXMoKSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgd3NTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkc1N0YXR1cyA9PT0gJ2lkbGUnKSB7XHJcbiAgICAgICAgICAgIGlmICh3b3JrU3BhY2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcyA9IGRhdGFTZXRzLmZpbmQoZHMgPT4gZHMuSUQgPT09IHdvcmtTcGFjZS5EYXRhU2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRzICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhU2V0KGRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZHNTdGF0dXMgPT0gJ3VuaXRpYXRlZCcgIHx8IGRzU3RhdHVzID09PSAnY2hhbmdlZCcpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNldHMoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Rpc3BhdGNoLCBkc1N0YXR1c10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZUFkZE9iamVjdCh0eXBlOiBUcmVuREFQLldpZGdldFR5cGUgfCAnUm93Jykge1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnUm93JylcclxuICAgICAgICAgICAgc2V0V29ya1NwYWNlSlNPTih7IC4uLndvcmtTcGFjZUpTT04sIFJvd3M6IFsuLi53b3JrU3BhY2VKU09OLlJvd3MsIHsgSGVpZ2h0OiA1MDAsIFdpZGdldHM6IFtdIH1dIH0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0V29ya1NwYWNlSlNPTih7XHJcbiAgICAgICAgICAgICAgICAuLi53b3JrU3BhY2VKU09OLCBSb3dzOiBbLi4ud29ya1NwYWNlSlNPTi5Sb3dzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgSGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBOYXZNYXJnaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgV2lkZ2V0czogW0NyZWF0ZVdpZGdldCh0eXBlLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSBOYXZNYXJnaW4sIHdpbmRvdy5pbm5lcldpZHRoIC0gTmF2V2lkdGgpXVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJidXR0b25zfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmc6ICc2cHggMTJweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PkRhdGEgU2V0OiA8TGluayB0bz17YCR7aG9tZVBhdGh9RWRpdERhdGFTZXQvJHtkYXRhU2V0Py5JRH1gfT57ZGF0YVNldD8uTmFtZX08L0xpbms+PERhdGFTZXREYXRhIHsuLi5kYXRhU2V0fSAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiB0aXRsZT0nQWRkIE9iamVjdCcgZGF0YS10b2dnbGU9J2Ryb3Bkb3duJyBhcmlhLWhhc3BvcHVwPSd0cnVlJyBhcmlhLWV4cGFuZGVkPSdmYWxzZSc+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcGx1c1wiID48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoZSkgPT4gSGFuZGxlQWRkT2JqZWN0KCdSb3cnKX0+Um93PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ0hpc3RvZ3JhbScpfT5IaXN0b2dyYW08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdQcm9maWxlJyl9PlByb2ZpbGU8L2J1dHRvbj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdTdGF0cycpfT5TdGF0czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ1RhYmxlJyl9PlRhYmxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnVGV4dCcpfT5UZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnVHJlbmQnKX0+VHJlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdYdnNZJyl9PlggdnMgWTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHRpdGxlPSdFeHBvcnQgQ3VycmVudCBEYXRhIFNldCcgZGF0YS10b2dnbGU9J2Ryb3Bkb3duJyBhcmlhLWhhc3BvcHVwPSd0cnVlJyBhcmlhLWV4cGFuZGVkPSdmYWxzZSc+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZG93bmxvYWRcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+UERGPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5DU1Y8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J1NhdmUgY3VycmVudCB3b3Jrc3BhY2UuLi4nIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZVdvcmtTcGFjZSh7IC4uLndvcmtTcGFjZSwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkod29ya1NwYWNlSlNPTikgfSkpO1xyXG4gICAgICAgICAgICAgICAgfX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2F2ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J1dvcmtzcGFjZSBTZXR0aW5ncyc+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgICAgICAgICAgICAgIHtbLi4udXNlcnNXb3JrU3BhY2VzLCAuLi5wdWJsaWNXb3JrU3BhY2VzXS5maWx0ZXIod3MgPT4gd3MuT3BlbikubWFwKHdzID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17d3MuSUR9IGNsYXNzTmFtZT17XCJuYXYtaXRlbSBcIiArIHN0eWxlcy53b3Jrc3BhY2V0YWJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rXCIgKyAodGFiID09IHdzLklEID8gJyBhY3RpdmUnIDogJycpfSBocmVmPScjJyBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRUYWIod3MuSUQpfSA+e3dzLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChPcGVuQ2xvc2VXb3JrU3BhY2UoeyB3b3JrU3BhY2U6IHdzLCBvcGVuOiBmYWxzZSB9KSl9Plg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT4pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1widGFiLWNvbnRlbnRcIl19PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtTcGFjZUpTT04uUm93cy5tYXAoKHJvdywgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cga2V5PXtpbmRleH0gV29ya1NwYWNlPXt3b3JrU3BhY2V9IERhdGE9e2RhdGF9IFdpZGdldHM9e3Jvdy5XaWRnZXRzfSBIZWlnaHQ9e3Jvdy5IZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGU9eyhyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IHsgLi4ud29ya1NwYWNlSlNPTiB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24uUm93c1tpbmRleF0uSGVpZ2h0ID0gcmVjb3JkLkhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLlJvd3NbaW5kZXhdLldpZGdldHMgPSByZWNvcmQuV2lkZ2V0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLlJvd3NbaW5kZXhdLldvcmtTcGFjZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLlJvd3NbaW5kZXhdLkRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goVXBkYXRlV29ya1NwYWNlKHsgLi4ud29ya1NwYWNlLCBKU09OU3RyaW5nOiBKU09OLnN0cmluZ2lmeShqc29uKSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlUm93PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSB7IC4uLndvcmtTcGFjZUpTT04gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLlJvd3Muc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZVdvcmtTcGFjZSh7IC4uLndvcmtTcGFjZSwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdmVVcD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBpbmRleCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IHsgLi4ud29ya1NwYWNlSlNPTiB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBqc29uLlJvd3NbbmV3SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBqc29uLlJvd3NbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24uUm93c1tuZXdJbmRleF0gPSBiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24uUm93c1tpbmRleF0gPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZVdvcmtTcGFjZSh7IC4uLndvcmtTcGFjZSwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vdmVEb3duPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSB7IC4uLndvcmtTcGFjZUpTT04gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0ganNvbi5Sb3dzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXggKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IGpzb24uUm93c1tuZXdJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYiA9IGpzb24uUm93c1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbi5Sb3dzW25ld0luZGV4XSA9IGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbi5Sb3dzW2luZGV4XSA9IGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goVXBkYXRlV29ya1NwYWNlKHsgLi4ud29ya1NwYWNlLCBKU09OU3RyaW5nOiBKU09OLnN0cmluZ2lmeShqc29uKSB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFJvdzogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8VHJlbkRBUC5pUm93PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHByb3BzLkhlaWdodCk7XHJcblxyXG4gICAgZnVuY3Rpb24gSGFuZGxlQWRkT2JqZWN0KHR5cGU6IFRyZW5EQVAuV2lkZ2V0VHlwZSkge1xyXG4gICAgICAgIGxldCByb3cgPSB7IC4uLnByb3BzLCBVcGRhdGU6IHVuZGVmaW5lZCwgV29ya1NwYWNlOiB1bmRlZmluZWQsIFJlbW92ZVJvdzogdW5kZWZpbmVkIH0gYXMgVHJlbkRBUC5pUm93OyBcclxuICAgICAgICByb3cuV2lkZ2V0cy5wdXNoKCBDcmVhdGVXaWRnZXQoIHR5cGUsIDEwMCwgKHdpbmRvdy5pbm5lcldpZHRoIC0gTmF2V2lkdGgpLzIpKVxyXG4gICAgICAgIHByb3BzLlVwZGF0ZShyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiggICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCwgZGlzcGxheTogJ2dyaWQnIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAsIHpJbmRleDogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudHJpYW5nbGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1tcInJvdy1jb250cm9sc1wiXX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J0FkZCBPYmplY3QnIGRhdGEtdG9nZ2xlPSdkcm9wZG93bicgYXJpYS1oYXNwb3B1cD0ndHJ1ZScgYXJpYS1leHBhbmRlZD0nZmFsc2UnPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXNcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnSGlzdG9ncmFtJyl9Pkhpc3RvZ3JhbTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnUHJvZmlsZScpfT5Qcm9maWxlPC9idXR0b24+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdTdGF0cycpfT5TdGF0czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnVGFibGUnKX0+VGFibGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ1RleHQnKX0+VGV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnVHJlbmQnKX0+VHJlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ1h2c1knKX0+WCB2cyBZPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J1JlbW92ZSBSb3cnIG9uQ2xpY2s9eygpID0+IHByb3BzLlJlbW92ZVJvdygpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1taW51c1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiB0aXRsZT0nUm93IFNldHRpbmdzJyBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSkgfT48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkLWNvbnRhaW5lcicgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1mbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5XaWRnZXRzLm1hcCgod2lkZ2V0LCBpbmRleCkgPT4gPFdpZGdldCB7Li4ue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLndpZGdldCxcclxuICAgICAgICAgICAgICAgICAgICBIZWlnaHQ6IHByb3BzLkhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBXb3JrU3BhY2U6IHByb3BzLldvcmtTcGFjZSxcclxuICAgICAgICAgICAgICAgICAgICBEYXRhOiBwcm9wcy5EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZTogKG5ld1JlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0geyAuLi5wcm9wcyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2lkZ2V0ID0geyAuLi5uZXdSZWNvcmQgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LldvcmtTcGFjZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LkRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5XaWRnZXRzW2luZGV4XSA9IHdpZGdldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuVXBkYXRlKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZW1vdmU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IHsgLi4ucHJvcHMgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LldpZGdldHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuVXBkYXRlKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX0ga2V5PXtpbmRleH0gLz4pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiIHN0eWxlPXt7IGRpc3BsYXk6IHRvZ2dsZSA/ICdibG9jaycgOiAnbm9uZScsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40KScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiIHN0eWxlPXt7bWF4V2lkdGg6IDUyNX19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+Um93IFNldHRpbmdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SGVpZ2h0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtoZWlnaHQgIT0gbnVsbCA/IGhlaWdodCA6IDB9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRIZWlnaHQocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGV2dCkgPT4gc2V0SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCAtIE5hdk1hcmdpbikgfT5GdWxsIEhlaWdodDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5XaWRnZXRzIChNYXggV2lkdGggOiB7d2luZG93LmlubmVyV2lkdGggLSAyMDB9IHB4LCBXaWR0aCBVc2VkOiB7IChwcm9wcy5XaWRnZXRzLmxlbmd0aCA9PSAwID8gMCA6IHByb3BzLldpZGdldHMubWFwKHcgPT4gdy5XaWR0aCkucmVkdWNlKChhLGIpPT4gYStiICkpfXB4KTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuV2lkZ2V0cy5tYXAoKHdpZGdldCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJyBrZXk9e2l9Pnt3aWRnZXQuTGFiZWx9IC0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHVsbC1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldpZHRoOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt3aWRnZXQuV2lkdGh9IHR5cGU9J251bWJlcicgb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IHsuLi5wcm9wc307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5XaWRnZXRzW2ldLldpZHRoID0gcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlVwZGF0ZShyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgZGlzYWJsZWQ9e2kgPD0gMH0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0geyAuLi5wcm9wcyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSByb3cuV2lkZ2V0c1tuZXdJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSByb3cuV2lkZ2V0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LldpZGdldHNbbmV3SW5kZXhdID0gYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LldpZGdldHNbaV0gPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5VcGRhdGUocm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0+e1VwQXJyb3d9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgZGlzYWJsZWQ9e2kgPj0gcHJvcHMuV2lkZ2V0cy5sZW5ndGggLSAxfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3cgPSB7IC4uLnByb3BzIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IHJvdy5XaWRnZXRzLmxlbmd0aCAtIDEpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IHJvdy5XaWRnZXRzW25ld0luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYiA9IHJvdy5XaWRnZXRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuV2lkZ2V0c1tuZXdJbmRleF0gPSBiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuV2lkZ2V0c1tpXSA9IGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlVwZGF0ZShyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PntEb3duQXJyb3d9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0geyAuLi5wcm9wcyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuV2lkZ2V0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlVwZGF0ZShyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PntDcm9zc01hcmt9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuTW92ZVVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pk1vdmUgUm93IFVwPC9idXR0b24+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLk1vdmVEb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pk1vdmUgUm93IERvd248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5VcGRhdGUoey4uLnByb3BzLCBIZWlnaHQ6IGhlaWdodH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBXaWRnZXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFRyZW5EQVAuaVdpZGdldD4gPSAocHJvcHMpID0+IHtcclxuICAgIGlmIChwcm9wcy5UeXBlID09ICdIaXN0b2dyYW0nKVxyXG4gICAgICAgIHJldHVybiA8SGlzdG9ncmFtIHsuLi5wcm9wc30gLz47XHJcbiAgICBlbHNlIGlmIChwcm9wcy5UeXBlID09ICdQcm9maWxlJylcclxuICAgICAgICByZXR1cm4gPFByb2ZpbGUgey4uLnByb3BzfSAvPjtcclxuICAgIGVsc2UgaWYgKHByb3BzLlR5cGUgPT0gJ1N0YXRzJylcclxuICAgICAgICByZXR1cm4gPFN0YXRzIHsuLi5wcm9wc30gLz47XHJcbiAgICBlbHNlIGlmIChwcm9wcy5UeXBlID09ICdUYWJsZScpXHJcbiAgICAgICAgcmV0dXJuIDxUYWJsZSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgZWxzZSBpZiAocHJvcHMuVHlwZSA9PSAnVGV4dCcpXHJcbiAgICAgICAgcmV0dXJuIDxUZXh0IHsuLi5wcm9wc30gLz47XHJcbiAgICBlbHNlIGlmIChwcm9wcy5UeXBlID09ICdUcmVuZCcpXHJcbiAgICAgICAgcmV0dXJuIDxUcmVuZCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgZWxzZSBpZiAocHJvcHMuVHlwZSA9PSAnWHZzWScpXHJcbiAgICAgICAgcmV0dXJuIDxYdnNZIHsuLi5wcm9wc30gLz47XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIDxzcGFuPk5vdCBhIHdpZGdldC48L3NwYW4+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrU3BhY2VFZGl0b3I7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEltcGxlbWVudGF0aW9ucy50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMS8yNy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuL2dsb2JhbCc7XHJcbmltcG9ydCB7IENyZWF0ZUd1aWQsIFJhbmRvbUNvbG9yIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9oZWxwZXItZnVuY3Rpb25zJztcclxuaW1wb3J0IHN0YXRzIGZyb20gJ3N0YXRzLWxpdGUnO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgVHJlbkRBUC5XaWRnZXRDbGFzcz4gaW1wbGVtZW50cyBUcmVuREFQLmlXaWRnZXQ8VD57XHJcbiAgICBKU09OOiBUO1xyXG4gICAgSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBXaWR0aDogbnVtYmVyO1xyXG4gICAgVHlwZTogVHJlbkRBUC5XaWRnZXRUeXBlO1xyXG4gICAgTGFiZWw6IHN0cmluZztcclxuICAgIERhdGE6IFRyZW5EQVAuaURhdGFTZXRSZXR1cm5bXTtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VD4pIHtcclxuICAgICAgICB0aGlzLkhlaWdodCA9IHByb3BzLkhlaWdodDtcclxuICAgICAgICB0aGlzLldpZHRoID0gcHJvcHMuV2lkdGg7XHJcbiAgICAgICAgdGhpcy5UeXBlID0gcHJvcHMuVHlwZTtcclxuICAgICAgICB0aGlzLkxhYmVsID0gcHJvcHMuTGFiZWw7XHJcbiAgICAgICAgdGhpcy5KU09OID0gcHJvcHMuSlNPTjtcclxuICAgICAgICBpZiAocHJvcHMuRGF0YSA9PSB1bmRlZmluZWQpIHRoaXMuRGF0YSA9IFtdO1xyXG4gICAgICAgIGVsc2UgdGhpcy5EYXRhID0gcHJvcHMuRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0TGFiZWwgPSAobGFiZWw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMuTGFiZWwgPSBsYWJlbDtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgU2V0SGVpZ2h0ID0gKGhlaWdodDogbnVtYmVyKSA9PiB0aGlzLkhlaWdodCA9IGhlaWdodDtcclxuICAgIHB1YmxpYyBTZXRXaWR0aCA9ICh3aWR0aDogbnVtYmVyKSA9PiB0aGlzLldpZHRoID0gd2lkdGg7XHJcbiAgICBwdWJsaWMgU2V0SlNPTiA9IChqc29uOiBUKSA9PiB0aGlzLkpTT04gPSBqc29uO1xyXG4gICAgcHVibGljIEF2YWlsYWJsZVNlcmllcyA9ICgpID0+IHRoaXMuRGF0YS5tYXAoZGQgPT4gKHsgLi4uZGQsIERhdGFTb3VyY2VJRDogZGQuRGF0YVNvdXJjZS5JRCwgRGF0YVNvdXJjZTogZGQuRGF0YVNvdXJjZSB9KS5EYXRhLm1hcChkZGQgPT4gKHsgLi4uZGRkLCBEYXRhOiBbXSwgRGF0YVNvdXJjZTogZGQuRGF0YVNvdXJjZS5OYW1lLCBEYXRhU291cmNlSUQ6IGRkLkRhdGFTb3VyY2UuSUQgfSBhcyBUcmVuREFQLmlYREFSZXR1cm5XaXRoRGF0YVNvdXJjZSkpKS5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKTtcclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlSlNPTiA9IDxLIGV4dGVuZHMga2V5b2YgVD4oZmllbGQ6IEssIHZhbHVlOiBUW0tdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5KU09OW2ZpZWxkXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIaXN0b2dyYW0gZXh0ZW5kcyBXaWRnZXQ8VHJlbkRBUC5pSGlzdG9ncmFtPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaUhpc3RvZ3JhbT4gKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuVHlwZSA9IFwiSGlzdG9ncmFtXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLkpTT04gPSB7IE1pbjogMCwgTWF4OiAxMCwgVW5pdHM6ICcnLCBTZXJpZXM6IFtdLCBCaW5Db3VudDogMTAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkU2VyaWVzID0gKGlkOiBudW1iZXIsIGRhdGFTb3VyY2VJRDogbnVtYmVyLCBsYWJlbD86IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXMucHVzaCh7IElEOiBpZCwgRGF0YVNvdXJjZUlEOiBkYXRhU291cmNlSUQsIEZpZWxkOiBcIkF2ZXJhZ2VcIiwgQ29sb3I6IEdldENvbG9yKCksIFByb2ZpbGU6IGZhbHNlLCBQcm9maWxlQ29sb3I6IEdldENvbG9yKGxhYmVsKSB9KTtcclxuICAgICAgICByZXR1cm4gbmV3IEhpc3RvZ3JhbSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVtb3ZlU2VyaWVzID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLkpTT04uU2VyaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIaXN0b2dyYW0odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZVNlcmllcyA9IChpbmRleDoga2V5b2YgVHJlbkRBUC5pSGlzdG9ncmFtU2VyaWVzW10sIGZpZWxkOiBrZXlvZiBUcmVuREFQLmlIaXN0b2dyYW1TZXJpZXMsIHZhbHVlOiBUcmVuREFQLmlIaXN0b2dyYW1TZXJpZXNba2V5b2YgVHJlbkRBUC5pSGlzdG9ncmFtU2VyaWVzXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXNbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgSGlzdG9ncmFtKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2FsY3VsYXRlQXhpc1JhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBkZDogVHJlbkRBUC5pWERBUmV0dXJuRGF0YVtdID0gW10uY29uY2F0KC4uLnRoaXMuRGF0YS5tYXAoZCA9PiBkLkRhdGEpKTtcclxuICAgICAgICBsZXQgc3MgPSB0aGlzLkpTT04uU2VyaWVzLm1hcChzZXJpZXMgPT4gKGRkLmZpbmQoZCA9PiBkLklEID09PSBzZXJpZXMuSUQpPy5EYXRhID8/IFtdKS5tYXAoZCA9PiBkW3Nlcmllcy5GaWVsZF0pKTtcclxuICAgICAgICBsZXQgbW0gPSBzcy5tYXAocyA9PiBbTWF0aC5taW4oLi4ucyksIE1hdGgubWF4KC4uLnMpXSk7XHJcbiAgICAgICAgdGhpcy5KU09OLk1heCA9IE1hdGgubWF4KC4uLltdLmNvbmNhdCguLi5tbSkpO1xyXG4gICAgICAgIHRoaXMuSlNPTi5NaW4gPSBNYXRoLm1pbiguLi5bXS5jb25jYXQoLi4ubW0pKTtcclxuICAgICAgICBsZXQgYnVmZmVyID0gKHRoaXMuSlNPTi5NYXggLSB0aGlzLkpTT04uTWluKSAqIC4xMDtcclxuICAgICAgICB0aGlzLkpTT04uTWF4ID0gdGhpcy5KU09OLk1heCArIGJ1ZmZlcjtcclxuICAgICAgICB0aGlzLkpTT04uTWluID0gdGhpcy5KU09OLk1pbiAtIGJ1ZmZlcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBIaXN0b2dyYW0odGhpcyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVuZCBleHRlbmRzIFdpZGdldDxUcmVuREFQLmlUcmVuZD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlUcmVuZD4pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5UeXBlID0gXCJUcmVuZFwiO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5KU09OID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTiA9IHsgTWluOiAwLCBNYXg6IDEwLCBMZWdlbmQ6IGZhbHNlLCBTcGxpdDogZmFsc2UsIFNwbGl0VHlwZTogJ0F4aXMnLCBZQXhpczogW3sgTWF4OiAxMCwgTWluOiAwLCBQb3NpdGlvbjogJ2xlZnQnLCBVbml0czogJycgfV0sIFNlcmllczogW10gIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZEF4aXMgPSAoKSA9PiB0aGlzLkpTT04uWUF4aXMucHVzaCh7IE1heDogMTAsIE1pbjogMCwgUG9zaXRpb246ICdsZWZ0JywgVW5pdHM6ICcnIH0pO1xyXG4gICAgcHVibGljIFJlbW92ZUF4aXMgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLkpTT04uWUF4aXMubGVuZ3RoID09IDEpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5KU09OLllBeGlzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICB0aGlzLkpTT04uU2VyaWVzLmZvckVhY2goc2VyaWVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlcmllcy5BeGlzID49IGluZGV4KVxyXG4gICAgICAgICAgICAgICAgc2VyaWVzLkF4aXMgPSAoaW5kZXggPiAwID8gc2VyaWVzLkF4aXMgLSAxIDogMCk7ICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBVcGRhdGVBeGlzID0gKGluZGV4OiBrZXlvZiBUcmVuREFQLmlZQXhpc1tdLCBmaWVsZDoga2V5b2YgVHJlbkRBUC5pWUF4aXMsIHZhbHVlOiBUcmVuREFQLmlZQXhpc1trZXlvZiBUcmVuREFQLmlZQXhpc10pID0+IHsgdGhpcy5KU09OLllBeGlzW2luZGV4XVtmaWVsZF0gPSB2YWx1ZTsgfTtcclxuXHJcbiAgICBwdWJsaWMgQ2FsY3VsYXRlQXhpc1JhbmdlID0gKHR5cGU6ICd4JyB8ICd5JywgaW5kZXg/OiBrZXlvZiBUcmVuREFQLmlZQXhpc1tdKSA9PiB7XHJcbiAgICAgICAgbGV0IGRkOiBUcmVuREFQLmlYREFSZXR1cm5EYXRhW10gPSBbXS5jb25jYXQoLi4udGhpcy5EYXRhLm1hcChkID0+IGQuRGF0YSkpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAneCcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3MgPSB0aGlzLkpTT04uU2VyaWVzLm1hcChzZXJpZXMgPT4gKGRkLmZpbmQoZCA9PiBkLklEID09PSBzZXJpZXMuSUQpPy5EYXRhID8/IFtdKS5tYXAoZCA9PiBuZXcgRGF0ZShkLlRpbWVzdGFtcCkuZ2V0VGltZSgpKSk7XHJcbiAgICAgICAgICAgIGxldCBtbSA9IHNzLm1hcChzID0+IFtNYXRoLm1pbiguLi5zKSwgTWF0aC5tYXgoLi4ucyldKTtcclxuICAgICAgICAgICAgdGhpcy5KU09OLk1heCA9IE1hdGgubWF4KC4uLltdLmNvbmNhdCguLi5tbSkpO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uTWluID0gTWF0aC5taW4oLi4uW10uY29uY2F0KC4uLm1tKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5KU09OLllBeGlzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcyA9IHRoaXMuSlNPTi5TZXJpZXMuZmlsdGVyKHNlcmllcyA9PiBzZXJpZXMuQXhpcyA9PT0gaW5kZXgpLm1hcChzZXJpZXMgPT4gKGRkLmZpbmQoZCA9PiBkLklEID09PSBzZXJpZXMuSUQpPy5EYXRhID8/IFtdKS5tYXAoZCA9PiBkW3Nlcmllcy5GaWVsZF0pKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW0gPSBzcy5tYXAocyA9PiBbTWF0aC5taW4oLi4ucyksIE1hdGgubWF4KC4uLnMpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5KU09OLllBeGlzW2luZGV4XVsnTWF4J10gPSBNYXRoLm1heCguLi5bXS5jb25jYXQoLi4ubW0pKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNaW4nXSA9IE1hdGgubWluKC4uLltdLmNvbmNhdCguLi5tbSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidWZmZXIgPSAodGhpcy5KU09OLllBeGlzW2luZGV4XVsnTWF4J10gLSB0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNaW4nXSkgKiAuMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5KU09OLllBeGlzW2luZGV4XVsnTWF4J10gPSB0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNYXgnXSArIGJ1ZmZlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNaW4nXSA9IHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01pbiddIC0gYnVmZmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBzcyA9IHRoaXMuSlNPTi5TZXJpZXMuZmlsdGVyKHNlcmllcyA9PiBzZXJpZXMuQXhpcyA9PT0gaW5kZXgpLm1hcChzZXJpZXMgPT4gKGRkLmZpbmQoZCA9PiBkLklEID09PSBzZXJpZXMuSUQpPy5EYXRhID8/IFtdKS5tYXAoZCA9PiBkW3Nlcmllcy5GaWVsZF0pKTtcclxuICAgICAgICAgICAgICAgIGxldCBtbSA9IHNzLm1hcChzID0+IFtNYXRoLm1pbiguLi5zKSwgTWF0aC5tYXgoLi4ucyldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01heCddID0gTWF0aC5tYXgoLi4uW10uY29uY2F0KC4uLm1tKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNaW4nXSA9IE1hdGgubWluKC4uLltdLmNvbmNhdCguLi5tbSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9ICh0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNYXgnXSAtIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01pbiddKSAqIC4xMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01heCddID0gdGhpcy5KU09OLllBeGlzW2luZGV4XVsnTWF4J10gKyBidWZmZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNaW4nXSA9IHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01pbiddIC0gYnVmZmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRyZW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgQWRkU2VyaWVzID0gKGlkOiBudW1iZXIsIGRhdGFTb3VyY2VJRDogbnVtYmVyLCBsYWJlbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTi5TZXJpZXMuZmluZChzZXJpZXMgPT4gc2VyaWVzLklEID09PSBpZCAmJiBzZXJpZXMuRGF0YVNvdXJjZUlEID09PSBkYXRhU291cmNlSUQpICE9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkpTT04uU2VyaWVzLnB1c2goeyBJRDogaWQsIERhdGFTb3VyY2VJRDogZGF0YVNvdXJjZUlELCBBeGlzOiAwLCBGaWVsZDogXCJBdmVyYWdlXCIsIENvbG9yOiBHZXRDb2xvcihsYWJlbCksIExhYmVsOiBsYWJlbCwgU2hvd0V2ZW50czogZmFsc2UgfSk7XHJcbiAgICAgICAgdGhpcy5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3gnKTtcclxuICAgICAgICB0aGlzLkNhbGN1bGF0ZUF4aXNSYW5nZSgneScpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVHJlbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFF1aWNrQWRkVm9sdGFnZVJNUyA9IChkYXRhU291cmNlSUQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGxldCBheGlzID0gdGhpcy5KU09OLllBeGlzLmZpbmRJbmRleChheGlzID0+IGF4aXMuVW5pdHMgPT09ICdWb2x0cycpXHJcbiAgICAgICAgaWYgKGF4aXMgPCAwKSB7XHJcbiAgICAgICAgICAgIGF4aXMgPSB0aGlzLkpTT04uWUF4aXMucHVzaCh7VW5pdHM6ICdWb2x0cycsIFBvc2l0aW9uOiAnbGVmdCcsIE1pbjogMCwgTWF4OiAxMDB9KSAtIDFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXMucHVzaCguLi50aGlzLkRhdGEuZmluZChkYXR1bSA9PiBkYXR1bS5EYXRhU291cmNlLklEID09PSBkYXRhU291cmNlSUQpLkRhdGEuZmlsdGVyKGRhdHVtID0+IGRhdHVtLlR5cGUgPT09ICdWb2x0YWdlJyAmJiBkYXR1bS5DaGFyYWN0ZXJpc3RpYyA9PT0gJ1JNUycpLm1hcChkYXR1bSA9PiAoeyBJRDogZGF0dW0uSUQsIERhdGFTb3VyY2VJRDogZGF0YVNvdXJjZUlELCBBeGlzOiBheGlzLCBGaWVsZDogJ0F2ZXJhZ2UnIGFzIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQsIENvbG9yOiBHZXRDb2xvcihgViR7ZGF0dW0uUGhhc2V9IC0gJHtkYXR1bS5NZXRlcn1gKSwgTGFiZWw6IGRhdHVtLk5hbWUsIFNob3dFdmVudHM6IGZhbHNlfSkpKVxyXG4gICAgICAgIHRoaXMuQ2FsY3VsYXRlQXhpc1JhbmdlKCd4Jyk7XHJcbiAgICAgICAgdGhpcy5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3knKTtcclxuICAgICAgICByZXR1cm4gbmV3IFRyZW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBRdWlja0FkZEN1cnJlbnRSTVMgPSAoZGF0YVNvdXJjZUlEOiBudW1iZXIpID0+IHtcclxuICAgICAgICBsZXQgYXhpcyA9IHRoaXMuSlNPTi5ZQXhpcy5maW5kSW5kZXgoYXhpcyA9PiBheGlzLlVuaXRzID09PSAnQW1wcycpXHJcbiAgICAgICAgaWYgKGF4aXMgPCAwKSB7XHJcbiAgICAgICAgICAgIGF4aXMgPSB0aGlzLkpTT04uWUF4aXMucHVzaCh7IFVuaXRzOiAnQW1wcycsIFBvc2l0aW9uOiAnbGVmdCcsIE1pbjogMCwgTWF4OiAxMDAgfSkgLSAxXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkpTT04uU2VyaWVzLnB1c2goLi4udGhpcy5EYXRhLmZpbmQoZGF0dW0gPT4gZGF0dW0uRGF0YVNvdXJjZS5JRCA9PT0gZGF0YVNvdXJjZUlEKS5EYXRhLmZpbHRlcihkYXR1bSA9PiBkYXR1bS5UeXBlID09PSAnQ3VycmVudCcgJiYgZGF0dW0uQ2hhcmFjdGVyaXN0aWMgPT09ICdSTVMnKS5tYXAoZGF0dW0gPT4gKHsgSUQ6IGRhdHVtLklELCBEYXRhU291cmNlSUQ6IGRhdGFTb3VyY2VJRCwgQXhpczogYXhpcywgRmllbGQ6ICdBdmVyYWdlJyBhcyBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludEZpZWxkLCBDb2xvcjogR2V0Q29sb3IoYEkke2RhdHVtLlBoYXNlfSAtICR7ZGF0dW0uTWV0ZXJ9YCksIExhYmVsOiBkYXR1bS5OYW1lLCBTaG93RXZlbnRzOiBmYWxzZSB9KSkpXHJcbiAgICAgICAgdGhpcy5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3gnKTtcclxuICAgICAgICB0aGlzLkNhbGN1bGF0ZUF4aXNSYW5nZSgneScpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVHJlbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbW92ZVNlcmllcyA9IChpbmRleDogbnVtYmVyKSA9PiB0aGlzLkpTT04uU2VyaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBwdWJsaWMgUmVtb3ZlQWxsID0gKGRhdGFTb3VyY2VJRDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5KU09OLlNlcmllcyA9IHRoaXMuSlNPTi5TZXJpZXMuZmlsdGVyKHNlcmllcyA9PiBzZXJpZXMuRGF0YVNvdXJjZUlEICE9IGRhdGFTb3VyY2VJRCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmVuZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlU2VyaWVzID0gKGluZGV4OiBrZXlvZiBUcmVuREFQLmlUcmVuZFNlcmllc1tdLCBmaWVsZDoga2V5b2YgVHJlbkRBUC5pVHJlbmRTZXJpZXMsIHZhbHVlOiBUcmVuREFQLmlUcmVuZFNlcmllc1trZXlvZiBUcmVuREFQLmlUcmVuZFNlcmllc10pID0+IHsgdGhpcy5KU09OLlNlcmllc1tpbmRleF1bZmllbGRdID0gdmFsdWU7IH07XHJcblxyXG4gICAgcHVibGljIFBhbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5KU09OLk1heCA9IHRoaXMuSlNPTi5NYXggKyB2YWx1ZTtcclxuICAgICAgICB0aGlzLkpTT04uTWluID0gdGhpcy5KU09OLk1pbiArIHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgVHJlbmQodGhpcyk7XHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuLy9leHBvcnQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIFdpZGdldDxUcmVuREFQLmlQcm9maWxlPiB7XHJcbi8vICAgIGNvbnN0cnVjdG9yKGhlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBqc29uPzogVHJlbkRBUC5pVHJlbmQpIHtcclxuLy8gICAgICAgIHN1cGVyKFwiUHJvZmlsZVwiLCBoZWlnaHQsIHdpZHRoLCBqc29uKTtcclxuLy8gICAgICAgIGlmIChqc29uID09PSB1bmRlZmluZWQpXHJcbi8vICAgICAgICAgICAgdGhpcy5KU09OID0geyAgfTtcclxuLy8gICAgfVxyXG5cclxuLy99XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdHMgZXh0ZW5kcyBXaWRnZXQ8VHJlbkRBUC5pU3RhdHM+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pU3RhdHM+KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuVHlwZSA9IFwiU3RhdHNcIjtcclxuICAgICAgICBpZiAodGhpcy5KU09OID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTiA9IHtTZXJpZXM6IG51bGwsIFByZWNpc2lvbjogM307XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2V0U2VyaWVzID0gKGlkOiBudW1iZXIsIGRzSUQ6IG51bWJlcikgPT4gdGhpcy5KU09OLlNlcmllcyA9IHsgSUQ6IGlkLCBEYXRhU291cmNlSUQ6IGRzSUQsIEZpZWxkOiAnQXZlcmFnZScgfTtcclxuICAgIHB1YmxpYyBTZXRTZXJpZXNGaWVsZCA9IChmaWVsZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRGaWVsZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXMuRmllbGQgPSBmaWVsZDtcclxuICAgICAgICByZXR1cm4gbmV3IFN0YXRzKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBTZXRQcmVjc2lzaW9uID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLkpTT04uUHJlY2lzaW9uID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0cyh0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIFN0YXRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlcmllcyA9IHRoaXMuSlNPTi5TZXJpZXM7XHJcblxyXG4gICAgICAgIGlmIChzZXJpZXMgPT0gbnVsbCkgcmV0dXJuIHtcclxuICAgICAgICAgICAgTWVhbjogJycsXHJcbiAgICAgICAgICAgIE1lZGlhbjonJyxcclxuICAgICAgICAgICAgLy9Nb2RlOiAnJyxcclxuICAgICAgICAgICAgVmFyaWFuY2U6ICcnLFxyXG4gICAgICAgICAgICBTdGREZXY6JycsXHJcbiAgICAgICAgICAgIFBlcmNlbnRpbGU6IHtcclxuICAgICAgICAgICAgICAgIDEwOiAnJyxcclxuICAgICAgICAgICAgICAgIDI1OicnLFxyXG4gICAgICAgICAgICAgICAgNTA6ICcnLFxyXG4gICAgICAgICAgICAgICAgNzU6ICcnLFxyXG4gICAgICAgICAgICAgICAgOTA6JycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBkYXRhU291cmNlRGF0YSA9IHRoaXMuRGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT09IHNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIGNvbnN0IGRhdGFTZXJpZXMgPSBkYXRhU291cmNlRGF0YS5maW5kKGQgPT4gZC5JRCA9PT0gc2VyaWVzLklEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBjb25zdCBkYXRhID0gZGF0YVNlcmllcy5tYXAoZCA9PmRbc2VyaWVzLkZpZWxkXSk7XHJcblxyXG5cclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuIHtcclxuICAgICAgICAgICAgTWVhbjogJycsXHJcbiAgICAgICAgICAgIE1lZGlhbjogJycsXHJcbiAgICAgICAgICAgIC8vTW9kZTogJycsXHJcbiAgICAgICAgICAgIFZhcmlhbmNlOiAnJyxcclxuICAgICAgICAgICAgU3RkRGV2OiAnJyxcclxuICAgICAgICAgICAgUGVyY2VudGlsZToge1xyXG4gICAgICAgICAgICAgICAgMTA6ICcnLFxyXG4gICAgICAgICAgICAgICAgMjU6ICcnLFxyXG4gICAgICAgICAgICAgICAgNTA6ICcnLFxyXG4gICAgICAgICAgICAgICAgNzU6ICcnLFxyXG4gICAgICAgICAgICAgICAgOTA6ICcnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBNZWFuOiBzdGF0cy5tZWFuKGRhdGEpLnRvRml4ZWQodGhpcy5KU09OLlByZWNpc2lvbiksXHJcbiAgICAgICAgICAgIE1lZGlhbjogc3RhdHMubWVkaWFuKGRhdGEpLnRvRml4ZWQodGhpcy5KU09OLlByZWNpc2lvbiksXHJcbiAgICAgICAgICAgIC8vTW9kZTogc3RhdHMubW9kZShkYXRhKS8qLnRvUHJlY2lzaW9uKHRoaXMuSlNPTi5QcmVjaXNpb24pKi8sXHJcbiAgICAgICAgICAgIFZhcmlhbmNlOiBzdGF0cy52YXJpYW5jZShkYXRhKS50b0ZpeGVkKHRoaXMuSlNPTi5QcmVjaXNpb24pLFxyXG4gICAgICAgICAgICBTdGREZXY6IHN0YXRzLnN0ZGV2KGRhdGEpLnRvRml4ZWQodGhpcy5KU09OLlByZWNpc2lvbiksXHJcbiAgICAgICAgICAgIFBlcmNlbnRpbGU6IHtcclxuICAgICAgICAgICAgICAgIDEwOiBzdGF0cy5wZXJjZW50aWxlKGRhdGEsIDAuMTApLnRvRml4ZWQodGhpcy5KU09OLlByZWNpc2lvbiksXHJcbiAgICAgICAgICAgICAgICAyNTogc3RhdHMucGVyY2VudGlsZShkYXRhLCAwLjI1KS50b0ZpeGVkKHRoaXMuSlNPTi5QcmVjaXNpb24pLFxyXG4gICAgICAgICAgICAgICAgNTA6IHN0YXRzLnBlcmNlbnRpbGUoZGF0YSwgMC41MCkudG9GaXhlZCh0aGlzLkpTT04uUHJlY2lzaW9uKSxcclxuICAgICAgICAgICAgICAgIDc1OiBzdGF0cy5wZXJjZW50aWxlKGRhdGEsIDAuNzUpLnRvRml4ZWQodGhpcy5KU09OLlByZWNpc2lvbiksXHJcbiAgICAgICAgICAgICAgICA5MDogc3RhdHMucGVyY2VudGlsZShkYXRhLCAwLjkwKS50b0ZpeGVkKHRoaXMuSlNPTi5QcmVjaXNpb24pLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlIGV4dGVuZHMgV2lkZ2V0PFRyZW5EQVAuaVRhYmxlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVN0YXRzPikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBpZiAodGhpcy5KU09OID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTiA9IHsgU2VyaWVzOiBudWxsLCBQcmVjaXNpb246IDMgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRTZXJpZXMgPSAoaWQ6IG51bWJlciwgZHNJRDogbnVtYmVyKSA9PiB0aGlzLkpTT04uU2VyaWVzID0geyBJRDogaWQsIERhdGFTb3VyY2VJRDogZHNJRCwgRmllbGQ6ICdBdmVyYWdlJyB9O1xyXG4gICAgcHVibGljIFNldFNlcmllc0ZpZWxkID0gKGZpZWxkOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludEZpZWxkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5KU09OLlNlcmllcy5GaWVsZCA9IGZpZWxkO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RhdHModGhpcyk7XHJcbiAgICB9O1xyXG4gICAgcHVibGljIFNldFByZWNzaXNpb24gPSAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTi5QcmVjaXNpb24gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gbmV3IFN0YXRzKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFdpZGdldDxUcmVuREFQLmlUZXh0PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVRleHQ+KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGlmICh0aGlzLkpTT04gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5KU09OID0ge1RleHQ6ICcnfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBYdnNZIGV4dGVuZHMgV2lkZ2V0PFRyZW5EQVAuaVh2c1k+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pWHZzWT4pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLkpTT04gPSB7XHJcbiAgICAgICAgICAgICAgICBZOiB7IE1pbjogMCwgTWF4OiAxMDAsIFVuaXRzOiAnJywgU2VyaWVzOiBudWxsIH0sXHJcbiAgICAgICAgICAgICAgICBYOiB7IE1pbjogMCwgTWF4OiAxMDAsIFVuaXRzOiAnJywgU2VyaWVzOiBudWxsIH0sXHJcbiAgICAgICAgICAgICAgICBUaW1lTWluOiBudWxsLCBUaW1lTWF4OiBudWxsLCBSZWdyZXNzaW9uTGluZTogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTi5YID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5KU09OLlggPSB7IE1pbjogMCwgTWF4OiAxMDAsIFVuaXRzOiAnJywgU2VyaWVzOiBudWxsIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkpTT04uWSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5ZID0geyBNaW46IDAsIE1heDogMTAwLCBVbml0czogJycsIFNlcmllczogbnVsbCB9O1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIENhbGN1bGF0ZVJhbmdlID0gKHR5cGU6ICd4JyB8ICd5JyB8ICd0aW1lJykgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0eXBlID09PSAneCcpIHtcclxuICAgICAgICAgICAgbGV0IGRkID0gdGhpcy5EYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gdGhpcy5KU09OLlguU2VyaWVzLkRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgICAgIGxldCBzcyA9IGRkLmZpbmQoZCA9PiBkLklEID09PSB0aGlzLkpTT04uWC5TZXJpZXMuSUQpLkRhdGEubWFwKGQgPT4gZFt0aGlzLkpTT04uWC5TZXJpZXMuRmllbGRdKTtcclxuICAgICAgICAgICAgdGhpcy5KU09OLlguTWF4ID0gTWF0aC5tYXgoLi4uc3MpO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uWC5NaW4gPSBNYXRoLm1pbiguLi5zcyk7XHJcbiAgICAgICAgICAgIGxldCBidWZmZXIgPSAodGhpcy5KU09OLlguTWF4IC0gdGhpcy5KU09OLlguTWluKSAqIC4xMDtcclxuICAgICAgICAgICAgdGhpcy5KU09OLlguTWF4ID0gdGhpcy5KU09OLlguTWF4ICsgYnVmZmVyO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uWC5NaW4gPSB0aGlzLkpTT04uWC5NaW4gLSBidWZmZXI7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ3knKSB7XHJcbiAgICAgICAgICAgIGxldCBkZCA9IHRoaXMuRGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT09IHRoaXMuSlNPTi5ZLlNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3MgPSBkZC5maW5kKGQgPT4gZC5JRCA9PT0gdGhpcy5KU09OLlkuU2VyaWVzLklEKS5EYXRhLm1hcChkID0+IGRbdGhpcy5KU09OLlkuU2VyaWVzLkZpZWxkXSk7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5ZLk1heCA9IE1hdGgubWF4KC4uLnNzKTtcclxuICAgICAgICAgICAgdGhpcy5KU09OLlkuTWluID0gTWF0aC5taW4oLi4uc3MpO1xyXG4gICAgICAgICAgICBsZXQgYnVmZmVyID0gKHRoaXMuSlNPTi5ZLk1heCAtIHRoaXMuSlNPTi5ZLk1pbikgKiAuMTA7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5ZLk1heCA9IHRoaXMuSlNPTi5ZLk1heCArIGJ1ZmZlcjtcclxuICAgICAgICAgICAgdGhpcy5KU09OLlkuTWluID0gdGhpcy5KU09OLlkuTWluIC0gYnVmZmVyO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkZCA9IHRoaXMuRGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT09IHRoaXMuSlNPTi5YLlNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNzID0gZGQuZmluZChkID0+IGQuSUQgPT09IHRoaXMuSlNPTi5YLlNlcmllcy5JRCkuRGF0YS5tYXAoZCA9PiBuZXcgRGF0ZShkLlRpbWVzdGFtcCkuZ2V0VGltZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5KU09OLlRpbWVNYXggPSBNYXRoLm1heCguLi5zcyk7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5UaW1lTWluID0gTWF0aC5taW4oLi4uc3MpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgWHZzWSh0aGlzKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHB1YmxpYyBTZXRBeGlzID0gKGF4aXM6ICd4JyB8ICd5JywgZmllbGQ6IGtleW9mIFRyZW5EQVAuaUF4aXMsIHZhbHVlOiBUcmVuREFQLmlBeGlzW2tleW9mIFRyZW5EQVAuaUF4aXNdKSA9PiB7XHJcbiAgICAgICAgaWYgKGF4aXMgPT09ICd4JylcclxuICAgICAgICAgICAgKHRoaXMuSlNPTi5YW2ZpZWxkXSBhcyBhbnkpID0gdmFsdWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAodGhpcy5KU09OLllbZmllbGRdIGFzIGFueSkgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBYdnNZKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU2V0U2VyaWVzID0gKGF4aXM6ICd4JyB8ICd5JywgaWQ6IG51bWJlciwgZHNJRDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYoYXhpcyA9PT0gJ3gnKVxyXG4gICAgICAgICAgICB0aGlzLkpTT04uWC5TZXJpZXMgPSB7IElEOiBpZCwgRGF0YVNvdXJjZUlEOiBkc0lELCBGaWVsZDogJ0F2ZXJhZ2UnIH07XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLkpTT04uWS5TZXJpZXMgPSB7IElEOiBpZCwgRGF0YVNvdXJjZUlEOiBkc0lELCBGaWVsZDogJ0F2ZXJhZ2UnIH07XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgWHZzWSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlU2VyaWVzID0gKGF4aXM6ICd4JyB8ICd5JywgZmllbGQ6IGtleW9mIFRyZW5EQVAuaVNlcmllcywgdmFsdWU6IFRyZW5EQVAuaVNlcmllc1trZXlvZiBUcmVuREFQLmlTZXJpZXNdKSA9PiB7XHJcbiAgICAgICAgaWYgKGF4aXMgPT09ICd4JylcclxuICAgICAgICAgICAgKHRoaXMuSlNPTi5YLlNlcmllc1tmaWVsZF0gYXMgYW55KSA9IHZhbHVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgKHRoaXMuSlNPTi5ZLlNlcmllc1tmaWVsZF0gYXMgYW55KSA9IHZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFh2c1kodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW1vdmVTZXJpZXMgPSAoYXhpczogJ3gnIHwgJ3knKSA9PiB7XHJcbiAgICAgICAgaWYgKGF4aXMgPT09ICd4JylcclxuICAgICAgICAgICAgdGhpcy5KU09OLlguU2VyaWVzID0gbnVsbDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5ZLlNlcmllcyA9IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgWHZzWSh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVdpZGdldCh0eXBlOiBUcmVuREFQLldpZGdldFR5cGUsIGhlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZSA9PSAnSGlzdG9ncmFtJylcclxuICAgICAgICByZXR1cm4gbmV3IEhpc3RvZ3JhbSh7SGVpZ2h0OiBoZWlnaHQsIFdpZHRoOiB3aWR0aCwgTGFiZWw6IHR5cGUsIFR5cGU6IHR5cGUsIEpTT046IHVuZGVmaW5lZCB9KTtcclxuICAgIC8vZWxzZSBpZiAodHlwZSA9PSAnUHJvZmlsZScpXHJcbiAgICAvLyAgICByZXR1cm4gbmV3IFByb2ZpbGUoaGVpZ2h0LCB3aWR0aCk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09ICdTdGF0cycpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0cyh7IEhlaWdodDogaGVpZ2h0LCBXaWR0aDogd2lkdGgsIExhYmVsOiB0eXBlLCBUeXBlOiB0eXBlLCBKU09OOiB1bmRlZmluZWQgfSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09ICdUYWJsZScpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZSh7IEhlaWdodDogaGVpZ2h0LCBXaWR0aDogd2lkdGgsIExhYmVsOiB0eXBlLCBUeXBlOiB0eXBlLCBKU09OOiB1bmRlZmluZWQgfSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09ICdUZXh0JylcclxuICAgICAgICByZXR1cm4gbmV3IFRleHQoeyBIZWlnaHQ6IGhlaWdodCwgV2lkdGg6IHdpZHRoLCBMYWJlbDogdHlwZSwgVHlwZTogdHlwZSwgSlNPTjogdW5kZWZpbmVkIH0pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PSAnVHJlbmQnKVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJlbmQoeyBIZWlnaHQ6IGhlaWdodCwgV2lkdGg6IHdpZHRoLCBMYWJlbDogdHlwZSwgVHlwZTogdHlwZSwgSlNPTjogdW5kZWZpbmVkIH0pO1xyXG4gICAgaWYgKHR5cGUgPT0gJ1h2c1knKVxyXG4gICAgICAgIHJldHVybiBuZXcgWHZzWSh7IEhlaWdodDogaGVpZ2h0LCBXaWR0aDogd2lkdGgsIExhYmVsOiB0eXBlLCBUeXBlOiB0eXBlLCBKU09OOiB1bmRlZmluZWQgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldENvbG9yKGxhYmVsPzogc3RyaW5nKSB7XHJcbiAgICBpZiAobGFiZWwgPT0gdW5kZWZpbmVkKSByZXR1cm4gUmFuZG9tQ29sb3IoKTtcclxuICAgIGVsc2UgaWYgKGxhYmVsLmluZGV4T2YoJ1ZvbHRhZ2UgQScpID49IDApIHJldHVybiAnI0EzMDAwMCc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdWb2x0YWdlIEInKSA+PSAwKSByZXR1cm4gJyMwMDI5QTMnO1xyXG4gICAgZWxzZSBpZiAobGFiZWwuaW5kZXhPZignVm9sdGFnZSBDJykgPj0gMCkgcmV0dXJuICcjMDA3QTI5JztcclxuICAgIGVsc2UgaWYgKGxhYmVsLmluZGV4T2YoJ1ZvbHRhZ2UgTicpID49IDApIHJldHVybiAnI2MzYzNjMyc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdDdXJyZW50IEEnKSA+PSAwKSByZXR1cm4gJyNGRjAwMDAnO1xyXG4gICAgZWxzZSBpZiAobGFiZWwuaW5kZXhPZignQ3VycmVudCBCJykgPj0gMCkgcmV0dXJuICcjMDA2NkNDJztcclxuICAgIGVsc2UgaWYgKGxhYmVsLmluZGV4T2YoJ0N1cnJlbnQgQycpID49IDApIHJldHVybiAnIzMzQ0MzMyc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdBTicpID49IDApIHJldHVybiAnI0ZGMDAwMCc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdCTicpID49IDApIHJldHVybiAnIzAwNjZDQyc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdDTicpID49IDApIHJldHVybiAnIzMzQ0MzMyc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdORycpID49IDApIHJldHVybiAnI2MzYzNjMyc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdSRVMnKSA+PSAwKSByZXR1cm4gJyNmZmMxMDcnO1xyXG4gICAgZWxzZSBpZiAobGFiZWwuaW5kZXhPZignQXZlcmFnZScpID49IDApIHJldHVybiAnIzlBNTJBNCc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdUb3RhbCcpID49IDApIHJldHVybiAnIzlBNTJBNCc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdTMCcpID49IDApIHJldHVybiAnI0EzMDAwMCc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdTMicpID49IDApIHJldHVybiAnIzAwN0EyOSc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdTMScpID49IDApIHJldHVybiAnIzAwMjlBMyc7XHJcbiAgICBlbHNlIHJldHVybiBSYW5kb21Db2xvcigpO1xyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBMb2FkaW5nU3Bpbm5lci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDEvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9TdHlsZXMvc3Bpbm5lci5zY3NzJztcclxuXHJcbmNvbnN0IExvYWRpbmdTcGlubmVyID0gKHByb3BzOiB7IEhlaWdodDogbnVtYmVyLCBXaWR0aDogbnVtYmVyLCBCYWNrZ3JvdW5kOiBzdHJpbmcsIENvbG9yOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLnN2Z30gdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD17cHJvcHMuSGVpZ2h0fSB3aWR0aD17cHJvcHMuV2lkdGh9PlxyXG4gICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT17c3R5bGVzLmNpcmNsZSB9IGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjQ1XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTcGlubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==
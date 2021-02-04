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
/*! exports provided: HeavyCheckMark, Pencil, TrashCan, CrossMark, Plus, Warning, Spinner */
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
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (props.ID === undefined)
            return;
        if (props.Data === undefined)
            dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["UpdateDataSetDataFlag"])(props));
    }, [props]);
    if (((_a = props.Data) === null || _a === void 0 ? void 0 : _a.Status) === 'loading')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { title: "Loading Data.", style: { marginLeft: 25 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], { Height: 25, Width: 25, Color: "black", Background: "white" }));
    else if (((_b = props.Data) === null || _b === void 0 ? void 0 : _b.Status) === 'error')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSetData"])(props)); }, title: "Error loading data: " + props.Data.Error + ". Click to reload." }, _Constants__WEBPACK_IMPORTED_MODULE_3__["CrossMark"]);
    else if (((_c = props.Data) === null || _c === void 0 ? void 0 : _c.Status) === 'idle')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSetData"])(props)); }, title: 'Data loaded into TrenDAP. Click to reload.' }, _Constants__WEBPACK_IMPORTED_MODULE_3__["HeavyCheckMark"]);
    else
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () { return dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSetData"])(props)); }, title: 'Click to load data into TrenDAP' }, _Constants__WEBPACK_IMPORTED_MODULE_3__["Warning"]);
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
        //// set the parameters for the histogram
        var histograms = (_b = (_a = settings.JSON) === null || _a === void 0 ? void 0 : _a.Series, (_b !== null && _b !== void 0 ? _b : [])).map(function (series) {
            var _a, _b, _c, _d;
            var dataSource = (_b = (_a = props.Data.find(function (d) { return d.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
            var datum = (_d = (_c = dataSource.find(function (d) { return d.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Data.map(function (d) { return d[series.Field]; }), (_d !== null && _d !== void 0 ? _d : []));
            var histogram = d3__WEBPACK_IMPORTED_MODULE_0__["histogram"]()
                .value(function (d) { return d; }) // I need to give the vector of value
                .domain(d3__WEBPACK_IMPORTED_MODULE_0__["extent"](datum)) // then the domain of the graphic
                .thresholds(series.BinCount); // then the numbers of bins
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
            .attr("transform", "rotate(-90) translate(-" + props.Height / 2 + "," + margin.left / 3 + ")")
            .style("text-anchor", "middle")
            .text("Counts");
        svg.selectAll("rect").remove();
        var histogram = [].concat.apply([], __spread(histograms.map(function (histogram, index) { return histogram.map(function (h) { h.Color = settings.JSON.Series[index].Color; return h; }); })));
        svg.selectAll("rect")
            .data(histogram)
            .enter()
            .append("rect")
            .attr("x", 1)
            .attr("transform", function (d) { return "translate(" + (margin.left + x(d.x0)) + "," + (margin.top + y(d.length)) + ")"; })
            .attr("width", function (d) { return (x(d.x1) - x(d.x0) > 2 ? x(d.x1) - x(d.x0) : 2) - 1; })
            .attr("height", function (d) { return svgHeight - y(d.length); })
            .attr("fill", function (d) { return d.Color; });
        //.attr("opacity", 0.3)
        if (profile) {
            var profiles = record.JSON.Series.filter(function (series) { return series.Profile; }).map(function (series, index) {
                var _a, _b, _c, _d;
                var dataSource = (_b = (_a = props.Data.find(function (d) { return d.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
                var datum = (_d = (_c = dataSource.find(function (d) { return d.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Data.map(function (d) { return d[series.Field]; }), (_d !== null && _d !== void 0 ? _d : []));
                var histogram = d3__WEBPACK_IMPORTED_MODULE_0__["histogram"]()
                    .value(function (d) { return d; }) // I need to give the vector of value
                    .domain(d3__WEBPACK_IMPORTED_MODULE_0__["extent"](datum)) // then the domain of the graphic
                    .thresholds(series.BinCount)(datum); // then the numbers of bins
                return { Color: series.ProfileColor, Profile: histogram.map((function (sum) { return function (value) { return sum += value.length; }; })(0)).map(function (prof, i) { return ({ Bin: histogram[i].x0, Value: prof }); }) };
            });
            //const profiles = histograms.map(hist => hist.map((sum => value => sum += value.length)(0)).map((prof, i) => ({ Bin: hist[i].x0, Value: prof })));
            var pyMax = Math.max.apply(Math, __spread(profiles.map(function (pr) { return pr.Profile; }).reduce(function (prev, curr) { return prev.concat(curr); }, []).map(function (p) { return p.Value; })));
            var py_1 = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                .range([settings.Height - margin.top - margin.bottom, 0])
                .domain([0, pyMax]); // d3.hist has to be called before the Y axis obviously
            var pyAxis = svg.append("g")
                .attr("transform", "translate(" + (props.Width - margin.right) + "," + margin.top + ")")
                .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisRight"](py_1));
            svg.append("text")
                .attr("transform", "rotate(-90) translate(-" + props.Height / 2 + "," + (props.Width - margin.right / 3) + ")")
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
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'Units', Record: record.JSON, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Histogram"](__assign(__assign({}, record), { JSON: r }))); }, Valid: function (field) { return true; } }),
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
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["SeriesSelect"], { Data: record.AvailableSeries(), AddSeries: function (id, dsID) { return setRecord(record.AddSeries(id, dsID)); } }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "list-group" }, (d.DataSource.Type === 'OpenXDA' ? (_b = (_a = record.JSON) === null || _a === void 0 ? void 0 : _a.Series, (_b !== null && _b !== void 0 ? _b : [])).map(function (series, ind) {
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
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.BinCount), 2), bins = _b[0], setBins = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.Color), 2), color = _c[0], setColor = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.Field), 2), type = _d[0], setType = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.Profile), 2), profile = _e[0], setProfile = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.ProfileColor), 2), pColor = _f[0], setPColor = _f[1];
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "Color", color)); }, [color]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "Field", type)); }, [type]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "BinCount", bins)); }, [bins]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "Profile", profile)); }, [profile]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "ProfileColor", pColor)); }, [pColor]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Field"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { className: "form-control", value: type, onChange: function (evt) { return setType(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Average" }, "Avg"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Minimum" }, "Min"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Maximum" }, "Max"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Bins"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "number", className: "form-control", value: bins, onChange: function (evt) { return setBins(parseInt(evt.target.value)); } })),
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
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], { key: i },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_3__["SeriesSelect"], { Data: record.AvailableSeries(), AddSeries: function (id, dsID) {
                                        var something = new _Implementations__WEBPACK_IMPORTED_MODULE_2__["Stats"](record);
                                        something.SetSeries(id, dsID);
                                        setRecord(something);
                                    } }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" }, d.DataSource.Type === 'OpenXDA' && record.JSON.Series != undefined ?
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: record.JSON.Series.ID, className: "list-group-item" },
                                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "col-3" },
                                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, datum.Name),
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
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["SeriesSelect"], { Data: record.AvailableSeries(), AddSeries: function (id, dsID) {
                                        var something = new _Implementations__WEBPACK_IMPORTED_MODULE_3__["Table"](record);
                                        something.SetSeries(id, dsID);
                                        setRecord(something);
                                    } }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "list-group" }, d.DataSource.Type === 'OpenXDA' && record.JSON.Series != undefined ?
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

/***/ "./TypeScript/Features/Widgets/Trend.tsx":
/*!***********************************************!*\
  !*** ./TypeScript/Features/Widgets/Trend.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrendJSX; });
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
    var _a, _b;
    var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](false), 2), toggle = _c[0], setToggle = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](props)), 2), record = _d[0], setRecord = _d[1];
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        //record.current = new Trend(props);
    }, [toggle, props.JSON]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (record.JSON.Split)
            InitializeSplit(record);
        else
            InitializeNotSplit(record);
    }, [record]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { Height: props.Height })));
    }, [props.Height]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { Data: props.Data })));
    }, [props.Data]);
    function SetRecord(field, r) {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](r));
    }
    function InitializeSplit(settings) {
        var margin = { bottom: 50, left: 50, top: 40, right: 50 };
        var svgHeight = props.Height / settings.JSON.Series.length;
        d3__WEBPACK_IMPORTED_MODULE_0__["select"](ref.current).selectAll('svg').remove();
        var x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleTime"]()
            .domain([settings.JSON.Min, settings.JSON.Max]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([0, settings.Width - margin.left - margin.right]);
        settings.JSON.Series.map(function (series) {
            var _a, _b, _c, _d;
            var axis = settings.JSON.YAxis[series.Axis];
            var field = series.Field;
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
                .text("Time");
            var y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                .range([svgHeight - margin.top - margin.bottom, 0])
                .domain([axis.Min, axis.Max]); // d3.hist has to be called before the Y axis obviously
            var yAxis = svg.append("g")
                .attr("transform", "translate(" + (margin.left) + "," + margin.top + ")")
                .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](y));
            svg.append("text")
                .attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + (margin.left / 3) + ")")
                .style("text-anchor", "middle")
                .text(axis.Units);
            var filteredData = (_d = (_c = (_b = (_a = record.Data.find(function (ds) { return ds.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (ds) { return ds.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : [])).filter(function (ds) { return moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[field] >= axis.Min && ds[field] <= axis.Max; });
            var lineFunc = d3__WEBPACK_IMPORTED_MODULE_0__["line"]().x(function (dd) { return x(moment__WEBPACK_IMPORTED_MODULE_7___default()(dd.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ')); }).y(function (dd) { return y(dd[series.Field]); });
            svg.append("path")
                .data([filteredData])
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", series.Color)
                .attr("d", function (d) { return lineFunc(d); })
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        });
    }
    function InitializeNotSplit(settings) {
        var margin = { bottom: 50, left: settings.JSON.YAxis.filter(function (axis) { return axis.Position === 'left'; }).length * 50, top: 40, right: settings.JSON.YAxis.filter(function (axis) { return axis.Position === 'right'; }).length * 50 };
        var x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleTime"]()
            .domain([settings.JSON.Min, settings.JSON.Max]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([0, settings.Width - margin.left - margin.right]);
        d3__WEBPACK_IMPORTED_MODULE_0__["select"](ref.current).selectAll('svg').remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"](ref.current)
            .append('svg')
            .attr('width', settings.Width)
            .attr('height', settings.Height);
        var xAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + (settings.Height - margin.bottom) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x));
        svg.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (settings.Width / 2) + "," + (settings.Height - margin.bottom / 3) + ")")
            .text("Time");
        var y = settings.JSON.YAxis.map(function (axis) {
            var a = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                .range([settings.Height - margin.top - margin.bottom, 0])
                .domain([axis.Min, axis.Max]); // d3.hist has to be called before the Y axis obviously
            return a;
        });
        var yAxis = settings.JSON.YAxis.map(function (axis, index) {
            var a;
            if (axis.Position === 'left') {
                var ind = settings.JSON.YAxis.filter(function (axis) { return axis.Position === 'left'; }).findIndex(function (axis) { return axis === settings.JSON.YAxis[index]; });
                a = svg.append("g")
                    .attr("transform", "translate(" + (margin.left - ind * 50) + "," + margin.top + ")")
                    .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](y[index]));
                svg.append("text")
                    .attr("transform", "rotate(-90) translate(-" + props.Height / 2 + "," + (margin.left - ind * 50 - 25) + ")")
                    .style("text-anchor", "middle")
                    .text(axis.Units);
            }
            else {
                a = svg.append("g")
                    .attr("transform", "translate(" + (settings.Width - margin.right) + "," + margin.top + ")")
                    .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisRight"](y[index]));
                svg.append("text")
                    .attr("transform", "rotate(-90) translate(-" + props.Height / 2 + "," + (settings.Width - margin.right / 3) + ")")
                    .style("text-anchor", "middle")
                    .text(axis.Units);
            }
            return a;
        });
        svg.selectAll("g.line").remove();
        svg.selectAll("g.line")
            .data(settings.JSON.Series)
            .enter()
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", function (d) { return d.Color; })
            .attr("d", function (d) {
            var _a, _b, _c, _d;
            var yScale = y[d.Axis];
            var lineFunc = d3__WEBPACK_IMPORTED_MODULE_0__["line"]().x(function (dd) { return x(moment__WEBPACK_IMPORTED_MODULE_7___default()(dd.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ')); }).y(function (dd) { return yScale(dd[d.Field]); });
            var filteredData = (_d = (_c = (_b = (_a = record.Data.find(function (ds) { return ds.DataSource.ID === d.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (ds) { return ds.ID === d.ID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : [])).filter(function (ds) { return moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[d.Field] >= settings.JSON.YAxis[d.Axis].Min && ds[d.Field] <= settings.JSON.YAxis[d.Axis].Max; });
            return lineFunc(filteredData);
        });
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
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return SetRecord('Label', r); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "number", className: "form-control", value: (_a = record) === null || _a === void 0 ? void 0 : _a.Width, onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["CheckBox"], { Field: 'Split', Record: (_b = record) === null || _b === void 0 ? void 0 : _b.JSON, Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](__assign(__assign({}, record), { JSON: r }))); } }),
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
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "list-group" }, record.JSON.YAxis.map(function (axis, index) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: index, className: 'list-group-item' },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Axis, { Axis: axis, Index: index, Widget: record, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](record)); } }))); }))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h6", null, "Series"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "accordion", style: { overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 } }, record.Data.map(function (d, i) {
                    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], { key: i },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "card-body" },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["SeriesSelect"], { Data: record.AvailableSeries(), AddSeries: function (id, dsID) {
                                        record.AddSeries(id, dsID);
                                        var something = new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](record);
                                        setRecord(something);
                                    } }),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: "list-group" }, (d.DataSource.Type === 'OpenXDA' ? record.JSON.Series.map(function (series, ind) {
                                    var datum = d.Data.find(function (dd) { return dd.ID === series.ID; });
                                    if (datum === undefined)
                                        return null;
                                    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: series.ID, className: "list-group-item" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-3" },
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, datum.Name),
                                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["AdditionalInfo"], { Index: i, Data: datum })),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SeriesPicker, { Index: ind, Series: series, Widget: record, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["Trend"](record)); } }))));
                                }) : null)))));
                }))))));
}
var SeriesPicker = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.Axis), 2), axis = _a[0], setAxis = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.Color), 2), color = _b[0], setColor = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Series.Field), 2), type = _c[0], setType = _c[1];
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        props.Widget.UpdateSeries(props.Index, "Color", color);
        props.Callback();
    }, [color]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        props.Widget.UpdateSeries(props.Index, "Field", type);
        props.Callback();
    }, [type]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        props.Widget.UpdateSeries(props.Index, "Axis", axis);
        props.Callback();
    }, [axis]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "form-label" }, "Field"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { className: "form-control", value: type, onChange: function (evt) { return setType(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Average" }, "Avg"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Minimum" }, "Min"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "Maximum" }, "Max"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "form-label" }, "YAxis"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { className: "form-control", value: axis, onChange: function (evt) { return setAxis(parseInt(evt.target.value)); } }, props.Widget.JSON.YAxis.map(function (axis, index) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: index, key: index }, axis.Units); }))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", { className: "form-label" }, "Color"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "color", className: "form-control", value: color, onChange: function (evt) { return setColor(evt.target.value); } })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-1" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-link", onClick: function () {
                    props.Widget.RemoveSeries(props.Index);
                    props.Callback();
                } }, _Constants__WEBPACK_IMPORTED_MODULE_5__["CrossMark"]))));
};
var Axis = function (props) {
    var firstRender = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](true);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        firstRender.current = false;
    }, []);
    //const [bins, setBins] = React.useState<number>(props.Series?.BinCount ?? 10);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Axis.Units), 2), units = _a[0], setUnits = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Axis.Position), 2), position = _b[0], setPosition = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Axis.Min), 2), min = _c[0], setMin = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_1__["useState"](props.Axis.Max), 2), max = _d[0], setMax = _d[1];
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Units", units);
            props.Callback();
        }
    }, [units]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Position", position);
            props.Callback();
        }
    }, [position]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Max", max);
            props.Callback();
        }
    }, [max]);
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Min", min);
            props.Callback();
        }
    }, [min]);
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: 'row' },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, "Position"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { className: "form-control", value: position, onChange: function (evt) { return setPosition(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "left" }, "Left"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "right" }, "Right"))),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'Units', Record: props.Axis, Type: 'text', Setter: function (r) { return setUnits(r.Units); }, Valid: function (field) { return true; } })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'Min', Label: 'Min', Record: props.Axis, Type: 'number', Setter: function (r) { return setMin(r.Min); }, Valid: function (field) { return true; } })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__["Input"], { Field: 'Max', Record: props.Axis, Type: 'number', Setter: function (r) { return setMax(r.Max); }, Valid: function (field) { return true; } })),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-2", style: { position: 'relative' } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () {
                    props.Widget.CalculateAxisRange('y', props.Index);
                    props.Callback();
                } }, "Use Data")),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-1" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: "btn btn-link", style: { top: 30 }, onClick: function () { return props.Widget.RemoveAxis(props.Index); } }, _Constants__WEBPACK_IMPORTED_MODULE_5__["CrossMark"]))));
};


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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({ ID: 0 }), 2), selected = _k[0], setSelected = _k[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setSelected(props.Data[0]);
    }, [props.Data]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "form-control", value: (_b = (_a = selected) === null || _a === void 0 ? void 0 : _a.ID, (_b !== null && _b !== void 0 ? _b : '')), onChange: function (evt) { return setSelected(props.Data.find(function (datum) { return datum.ID === parseInt(evt.target.value); })); } }, props.Data.map(function (datum, index) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: index, value: datum.ID }, datum.Name); })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "input-group-append" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-outline-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Additional Info"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-menu dropdown-menu-right", "aria-labelledby": "dropdownMenuButton" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                    "Meter: ", (_c = selected) === null || _c === void 0 ? void 0 :
                    _c.Meter),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                    "Asset: ", (_d = selected) === null || _d === void 0 ? void 0 :
                    _d.Asset),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                    "Characteristic: ", (_e = selected) === null || _e === void 0 ? void 0 :
                    _e.Characteristic),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                    "Type: ", (_f = selected) === null || _f === void 0 ? void 0 :
                    _f.Type),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                    "Station: ", (_g = selected) === null || _g === void 0 ? void 0 :
                    _g.Station),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                    "Phase: ", (_h = selected) === null || _h === void 0 ? void 0 :
                    _h.Phase),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                    "Harmonic: ", (_j = selected) === null || _j === void 0 ? void 0 :
                    _j.Harmonic)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-outline-secondary", type: "button", onClick: function () { return props.AddSeries(selected.ID, selected.DataSourceID); } }, "Select"))));
}
function AdditionalInfo(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "form-control dropdown-toggle", type: "button", id: "dropdownMenuButton" + props.Index, "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Addition Info"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-menu", "aria-labelledby": "dropdownMenuButton" + props.Index },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Meter: ",
                props.Data.Meter),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Asset: ",
                props.Data.Asset),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Characteristic: ",
                props.Data.Characteristic),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Type: ",
                props.Data.Type),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Station: ",
                props.Data.Station),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Phase: ",
                props.Data.Phase),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-item" },
                "Harmonic: ",
                props.Data.Harmonic))));
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
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["SeriesSelect"], { Data: record.AvailableSeries(), AddSeries: function (id, dsID) { return setRecord(record.SetSeries('x', id, dsID)); } }),
                                (record.JSON.X.Series != undefined ?
                                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "row" },
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "col-3" },
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, (_b = (_a = GetDatum('x')) === null || _a === void 0 ? void 0 : _a.Name, (_b !== null && _b !== void 0 ? _b : ''))),
                                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["AdditionalInfo"], { Index: i, Data: GetDatum('x') })),
                                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](SeriesPicker, { Axis: 'x', Series: record.JSON.X.Series, Widget: record, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__["XvsY"](record)); } })) : null),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h6", null, "Y Series"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("hr", null),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Widget__WEBPACK_IMPORTED_MODULE_4__["SeriesSelect"], { Data: record.AvailableSeries(), AddSeries: function (id, dsID) { return setRecord(record.SetSeries('y', id, dsID)); } }),
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Styles_app_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkSpacesSlice */ "./TypeScript/Features/WorkSpaces/WorkSpacesSlice.ts");
/* harmony import */ var _Widgets_Histogram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Widgets/Histogram */ "./TypeScript/Features/Widgets/Histogram.tsx");
/* harmony import */ var _Widgets_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Widgets/Profile */ "./TypeScript/Features/Widgets/Profile.tsx");
/* harmony import */ var _Widgets_Stats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Widgets/Stats */ "./TypeScript/Features/Widgets/Stats.tsx");
/* harmony import */ var _Widgets_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Widgets/Table */ "./TypeScript/Features/Widgets/Table.tsx");
/* harmony import */ var _Widgets_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Widgets/Text */ "./TypeScript/Features/Widgets/Text.tsx");
/* harmony import */ var _Widgets_Trend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Widgets/Trend */ "./TypeScript/Features/Widgets/Trend.tsx");
/* harmony import */ var _Widgets_XvsY__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Widgets/XvsY */ "./TypeScript/Features/Widgets/XvsY.tsx");
/* harmony import */ var _DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../DataSets/DataSetsSlice */ "./TypeScript/Features/DataSets/DataSetsSlice.ts");
/* harmony import */ var _DataSets_DataSetData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../DataSets/DataSetData */ "./TypeScript/Features/DataSets/DataSetData.tsx");
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
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
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
    var id = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])().id;
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](id), 2), tab = _d[0], setTab = _d[1];
    var usersWorkSpaces = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) { return Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["SelectWorkSpacesForUser"])(state, userName); });
    var publicWorkSpaces = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) { return Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["SelectWorkSpacesAllPublicNotUser"])(state, userName); });
    var dataSets = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_12__["SelectDataSets"]);
    var wsStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["SelectWorkSpacesStatus"]);
    var dsStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_12__["SelectDataSetsStatus"]);
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({ Rows: [] }), 2), workSpaceJSON = _e[0], setWorkSpaceJSON = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](__spread(usersWorkSpaces, publicWorkSpaces).find(function (ws) { return ws.ID == tab; })), 2), workSpace = _f[0], setWorkSpace = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({}), 2), dataSet = _g[0], setDataSet = _g[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setWorkSpace(__spread(usersWorkSpaces, publicWorkSpaces).find(function (ws) { return ws.ID == tab; }));
    }, [dispatch, tab, usersWorkSpaces, publicWorkSpaces]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var _a;
        if (workSpace === undefined)
            return;
        setDataSet(dataSets.find(function (ds) { return ds.ID === workSpace.DataSetID; }));
        if (!((_a = workSpace) === null || _a === void 0 ? void 0 : _a.Open))
            dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["OpenCloseWorkSpace"])({ workSpace: workSpace, open: true }));
        var json = JSON.parse(workSpace.JSONString);
        setWorkSpaceJSON(json);
        Object(_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_12__["GetDataSetDataFromIDB"])(workSpace.DataSetID).then(function (d) {
            setData(d);
        });
    }, [workSpace, dataSets]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (wsStatus != 'unitiated' && wsStatus != 'changed')
            return;
        dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["FetchWorkSpaces"])());
        return function () {
        };
    }, [dispatch, wsStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (dsStatus != 'unitiated' && dsStatus != 'changed')
            return;
        dispatch(Object(_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_12__["FetchDataSets"])());
        return function () {
        };
    }, [dispatch, dsStatus]);
    function HandleAddObject(type) {
        if (type === 'Row')
            setWorkSpaceJSON(__assign(__assign({}, workSpaceJSON), { Rows: __spread(workSpaceJSON.Rows, [{ Height: 500, Widgets: [] }]) }));
        else
            setWorkSpaceJSON(__assign(__assign({}, workSpaceJSON), { Rows: __spread(workSpaceJSON.Rows, [{
                        Height: window.innerHeight - NavMargin,
                        Widgets: [
                            Object(_Implementations__WEBPACK_IMPORTED_MODULE_14__["CreateWidget"])(type, window.innerHeight - NavMargin, window.innerWidth - NavWidth)
                            //{
                            //    Label: type,
                            //    Height: window.innerHeight - NavMargin,
                            //    Width: window.innerWidth - NavWidth,
                            //    Type: type,
                            //    JSON: InitialLoad(type),
                            //    Update: () => null,
                            //    Remove: () => {
                            //        let json = { ...workSpaceJSON };
                            //        json.Rows.splice(0, 1);
                            //        dispatch(UpdateWorkSpace({ ...workSpace, JSONString: JSON.stringify(json) }));
                            //    }
                            //}
                        ]
                    }]) }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navbarbuttons },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { style: { padding: '6px 12px', position: 'relative' } },
                "Data Set: ",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: homePath + "EditDataSet/" + ((_a = dataSet) === null || _a === void 0 ? void 0 : _a.ID) }, (_b = dataSet) === null || _b === void 0 ? void 0 : _b.Name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DataSets_DataSetData__WEBPACK_IMPORTED_MODULE_13__["default"], __assign({}, dataSet))),
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
                    dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["UpdateWorkSpace"])(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(workSpaceJSON) })));
                } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-save" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Workspace Settings' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-cog" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "nav nav-tabs" }, __spread(usersWorkSpaces, publicWorkSpaces).filter(function (ws) { return ws.Open; }).map(function (ws) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: ws.ID, className: "nav-item " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default.a.workspacetab },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link" + (tab == ws.ID ? ' active' : ''), href: '#', onClick: function (evt) { return setTab(ws.ID); } }, ws.Name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { onClick: function () { return dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["OpenCloseWorkSpace"])({ workSpace: ws, open: false })); } }, "X"));
        })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default.a["tab-content"] }, workSpaceJSON.Rows.map(function (row, index) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Row, { key: index, WorkSpace: workSpace, Data: data, Widgets: row.Widgets, Height: row.Height, Update: function (record) {
                    var json = __assign({}, workSpaceJSON);
                    json.Rows[index].Height = record.Height;
                    json.Rows[index].Widgets = record.Widgets;
                    json.Rows[index].WorkSpace = undefined;
                    json.Rows[index].Data = undefined;
                    dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["UpdateWorkSpace"])(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(json) })));
                }, RemoveRow: function () {
                    var json = __assign({}, workSpaceJSON);
                    json.Rows.splice(index, 1);
                    dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["UpdateWorkSpace"])(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(json) })));
                } });
        }))));
};
var Row = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), toggle = _a[0], setToggle = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Height), 2), height = _b[0], setHeight = _b[1];
    function HandleAddObject(type) {
        var row = __assign(__assign({}, props), { Update: undefined, WorkSpace: undefined, RemoveRow: undefined });
        row.Widgets.push(Object(_Implementations__WEBPACK_IMPORTED_MODULE_14__["CreateWidget"])(type, 100, (window.innerWidth - NavWidth) / 2));
        props.Update(row);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card", style: { height: props.Height, display: 'grid' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body", style: { padding: 0, zIndex: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "" + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default.a.triangle },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "" + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default.a["row-controls"] },
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog", role: "document" },
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
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setHeight(window.innerHeight - NavMargin); } }, "Full Height")))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                props.Update(__assign(__assign({}, props), { Height: height }));
                                setToggle(false);
                            } }, "Save changes"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-secondary", onClick: function () { return setToggle(false); } }, "Close")))))));
};
var Widget = function (props) {
    if (props.Type == 'Histogram')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Histogram__WEBPACK_IMPORTED_MODULE_5__["default"], __assign({}, props));
    else if (props.Type == 'Profile')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Profile__WEBPACK_IMPORTED_MODULE_6__["default"], __assign({}, props));
    else if (props.Type == 'Stats')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Stats__WEBPACK_IMPORTED_MODULE_7__["default"], __assign({}, props));
    else if (props.Type == 'Table')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Table__WEBPACK_IMPORTED_MODULE_8__["default"], __assign({}, props));
    else if (props.Type == 'Text')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Text__WEBPACK_IMPORTED_MODULE_9__["default"], __assign({}, props));
    else if (props.Type == 'Trend')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_Trend__WEBPACK_IMPORTED_MODULE_10__["default"], __assign({}, props));
    else if (props.Type == 'XvsY')
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Widgets_XvsY__WEBPACK_IMPORTED_MODULE_11__["default"], __assign({}, props));
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
        _this.AddSeries = function (id, dataSourceID) {
            _this.JSON.Series.push({ ID: id, DataSourceID: dataSourceID, BinCount: 10, Field: "Average", Color: Object(_gpa_gemstone_helper_functions__WEBPACK_IMPORTED_MODULE_0__["RandomColor"])(), Profile: false, ProfileColor: Object(_gpa_gemstone_helper_functions__WEBPACK_IMPORTED_MODULE_0__["RandomColor"])() });
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
            var ss = _this.JSON.Series.map(function (series) { return dd.find(function (d) { return d.ID === series.ID; }).Data.map(function (d) { return d[series.Field]; }); });
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
            _this.JSON = { Min: 0, Max: 10, Units: '', Series: [] };
        return _this;
    }
    return Histogram;
}(Widget));

var Trend = /** @class */ (function (_super) {
    __extends(Trend, _super);
    function Trend(props) {
        var _this = _super.call(this, props) || this;
        _this.AddAxis = function () { return _this.JSON.YAxis.push({ Max: 10, Min: 0, Position: 'left', Units: '' }); };
        _this.RemoveAxis = function (index) { return _this.JSON.YAxis.splice(index, 1); };
        _this.UpdateAxis = function (index, field, value) { _this.JSON.YAxis[index][field] = value; };
        _this.CalculateAxisRange = function (type, index) {
            var dd = [].concat.apply([], __spread(_this.Data.map(function (d) { return d.Data; })));
            if (type === 'x') {
                var ss = _this.JSON.Series.map(function (series) { return dd.find(function (d) { return d.ID === series.ID; }).Data.map(function (d) { return new Date(d.Timestamp).getTime(); }); });
                var mm = ss.map(function (s) { return [Math.min.apply(Math, __spread(s)), Math.max.apply(Math, __spread(s))]; });
                _this.JSON.Max = Math.max.apply(Math, __spread([].concat.apply([], __spread(mm))));
                _this.JSON.Min = Math.min.apply(Math, __spread([].concat.apply([], __spread(mm))));
            }
            else {
                var ss = _this.JSON.Series.filter(function (series) { return series.Axis === index; }).map(function (series) { return dd.find(function (d) { return d.ID === series.ID; }).Data.map(function (d) { return d[series.Field]; }); });
                var mm = ss.map(function (s) { return [Math.min.apply(Math, __spread(s)), Math.max.apply(Math, __spread(s))]; });
                _this.JSON.YAxis[index]['Max'] = Math.max.apply(Math, __spread([].concat.apply([], __spread(mm))));
                _this.JSON.YAxis[index]['Min'] = Math.min.apply(Math, __spread([].concat.apply([], __spread(mm))));
                var buffer = (_this.JSON.YAxis[index]['Max'] - _this.JSON.YAxis[index]['Min']) * .10;
                _this.JSON.YAxis[index]['Max'] = _this.JSON.YAxis[index]['Max'] + buffer;
                _this.JSON.YAxis[index]['Min'] = _this.JSON.YAxis[index]['Min'] - buffer;
            }
        };
        _this.AddSeries = function (id, dataSourceID) { return _this.JSON.Series.push({ ID: id, DataSourceID: dataSourceID, Axis: 0, Field: "Average", Color: Object(_gpa_gemstone_helper_functions__WEBPACK_IMPORTED_MODULE_0__["RandomColor"])() }); };
        _this.RemoveSeries = function (index) { return _this.JSON.Series.splice(index, 1); };
        _this.UpdateSeries = function (index, field, value) { _this.JSON.Series[index][field] = value; };
        _this.Type = "Trend";
        if (_this.JSON === undefined)
            _this.JSON = { Min: 0, Max: 10, Split: false, YAxis: [{ Max: 10, Min: 0, Position: 'left', Units: '' }], Series: [] };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9TdHlsZXMvc3Bpbm5lci5zY3NzIiwid2VicGFjazovLy8uL1N0eWxlcy9zcGlubmVyLnNjc3M/NmJkZSIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL0RhdGFTZXREYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvSGlzdG9ncmFtLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9XaWRnZXRzL1N0YXRzLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvVGFibGUudHN4Iiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvRmVhdHVyZXMvV2lkZ2V0cy9UZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvVHJlbmQudHN4Iiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvRmVhdHVyZXMvV2lkZ2V0cy9XaWRnZXQudHN4Iiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvRmVhdHVyZXMvV2lkZ2V0cy9YdnNZLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dvcmtTcGFjZXMvV29ya1NwYWNlRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ltcGxlbWVudGF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0xvYWRpbmdTcGlubmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDZCQUE2QixnQkFBZ0IsaUJBQWlCLDBE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QUssQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFHN0QsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDN0YsSUFBSSxDQUFDLDZDQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDYixLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQzthQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUN4RyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFNUIsSUFBTSxDQUFDLEdBQUcsOENBQWMsRUFBRTthQUNyQixLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4RCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFHLHVEQUF1RDtRQUVqRixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENB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QUNILG9FQUFLLFNBQVMsRUFBRSwyREFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7UUFDekgsdUVBQVEsU0FBUyxFQUFFLDJEQUFNLENBQUMsTUFBTSxFQUFHLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsSUFBSSxHQUFHLENBQzFELENBQ1QsQ0FBQztBQUNOLENBQUM7QUFFYyw2RUFBYyIsImZpbGUiOiJXb3JrU3BhY2VFZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLl8yTUtCYXNfN3V3dnRjeXJ5dkNIOVBZIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYW5pbWF0aW9uOiBfMzM3TTNDRERKd1F1dXVIRXRhMmlXbCA0cyBpbmZpbml0ZSBsaW5lYXI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIF8zMzdNM0NEREp3UXV1dUhFdGEyaVdsIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLl8ydDF0a2F0dHh0S2VVVml5eHo1SUg4IHtcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcbiAgc3Ryb2tlOiAjMmYzZDRjO1xcbiAgc3Ryb2tlLXdpZHRoOiAxMDtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICBzdHJva2UtZGFzaGFycmF5OiAyODM7XFxuICBzdHJva2UtZGFzaG9mZnNldDogNzU7XFxuICBhbmltYXRpb246IF8xbDh5eDR0dHotRGJQcFhyc0V5Ni1YIDEuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcXG59XFxuXFxuQGtleWZyYW1lcyBfMWw4eXg0dHR6LURiUHBYcnNFeTYtWCB7XFxuICAwJSwgMjUlIHtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI4MDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICB9XFxuICA1MCUsIDc1JSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA3NTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyODA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbHBhb2NVNFcwNmpDemhtQmNLTXJRIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xcbiAgfVxcbn1cXG4uS1BBMWJRNzFwZnpxR1drZms2a2U4IHtcXG4gIGFuaW1hdGlvbjogbHBhb2NVNFcwNmpDemhtQmNLTXJRIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNwaW5uZXJcIjogXCJfMk1LQmFzXzd1d3Z0Y3lyeXZDSDlQWVwiLFxuXHRcInNwaW5cIjogXCJfMzM3TTNDRERKd1F1dXVIRXRhMmlXbFwiLFxuXHRcImNpcmNsZVwiOiBcIl8ydDF0a2F0dHh0S2VVVml5eHo1SUg4XCIsXG5cdFwiY2lyY2xlLS1hbmltYXRpb25cIjogXCJfMWw4eXg0dHR6LURiUHBYcnNFeTYtWFwiLFxuXHRcInN2Z1wiOiBcIktQQTFiUTcxcGZ6cUdXa2ZrNmtlOFwiLFxuXHRcInN2Zy0tYW5pbWF0aW9uXCI6IFwibHBhb2NVNFcwNmpDemhtQmNLTXJRXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1tb2R1bGVzLXR5cGVzY3JpcHQtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGlubmVyLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbW9kdWxlcy10eXBlc2NyaXB0LWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3Bpbm5lci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1tb2R1bGVzLXR5cGVzY3JpcHQtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcGlubmVyLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uc3RhbnRzLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzMwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyBlbW9qaXNcclxuY29uc3QgSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcclxuY29uc3QgUGVuY2lsID0gJ+Kcj++4jyc7XHJcbmNvbnN0IFRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xyXG5jb25zdCBDcm9zc01hcmsgPSAn4p2MJztcclxuY29uc3QgUGx1cyA9ICfinpUnO1xyXG5jb25zdCBXYXJuaW5nID0gJ+KaoO+4jyc7XHJcbmNvbnN0IFNwaW5uZXIgPSAn8J+UhCc7XHJcblxyXG5leHBvcnQgeyBIZWF2eUNoZWNrTWFyaywgUGVuY2lsLCBUcmFzaENhbiwgQ3Jvc3NNYXJrLCBQbHVzLCBXYXJuaW5nLCBTcGlubmVyIH07IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERhdGFTZXREYXRhLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMS8xOC8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGZXRjaERhdGFTZXREYXRhLCBVcGRhdGVEYXRhU2V0RGF0YUZsYWcgfSBmcm9tICcuL0RhdGFTZXRzU2xpY2UnXHJcbmltcG9ydCB7ICBTcGlubmVyLCBXYXJuaW5nLCBDcm9zc01hcmssIEhlYXZ5Q2hlY2tNYXJrIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9zcGlubmVyLnNjc3MnO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnLi4vLi4vTG9hZGluZ1NwaW5uZXInO1xyXG5cclxuY29uc3QgRGF0YVNldERhdGEgPSAocHJvcHM6IFRyZW5EQVAuaURhdGFTZXQpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLklEID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBpZihwcm9wcy5EYXRhID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZURhdGFTZXREYXRhRmxhZyhwcm9wcykpO1xyXG4gICAgfSxbcHJvcHNdKTtcclxuXHJcbiAgICAgaWYgKHByb3BzLkRhdGE/LlN0YXR1cyA9PT0gJ2xvYWRpbmcnKVxyXG4gICAgICAgIHJldHVybiA8c3BhbiB0aXRsZT1cIkxvYWRpbmcgRGF0YS5cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyNSB9fT48TG9hZGluZ1NwaW5uZXIgSGVpZ2h0PXsyNX0gV2lkdGg9ezI1fSBDb2xvcj1cImJsYWNrXCIgQmFja2dyb3VuZD1cIndoaXRlXCIgLz48L3NwYW4+O1xyXG4gICAgZWxzZSBpZiAocHJvcHMuRGF0YT8uU3RhdHVzID09PSAnZXJyb3InKVxyXG4gICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChGZXRjaERhdGFTZXREYXRhKHByb3BzKSl9IHRpdGxlPXtgRXJyb3IgbG9hZGluZyBkYXRhOiAke3Byb3BzLkRhdGEuRXJyb3J9LiBDbGljayB0byByZWxvYWQuYH0+e0Nyb3NzTWFya308L2J1dHRvbj47XHJcbiAgICBlbHNlIGlmIChwcm9wcy5EYXRhPy5TdGF0dXMgPT09ICdpZGxlJylcclxuICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goRmV0Y2hEYXRhU2V0RGF0YShwcm9wcykpfSB0aXRsZT0nRGF0YSBsb2FkZWQgaW50byBUcmVuREFQLiBDbGljayB0byByZWxvYWQuJyA+e0hlYXZ5Q2hlY2tNYXJrfTwvYnV0dG9uPjtcclxuICAgICBlbHNlXHJcbiAgICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChGZXRjaERhdGFTZXREYXRhKHByb3BzKSl9IHRpdGxlPSdDbGljayB0byBsb2FkIGRhdGEgaW50byBUcmVuREFQJz57V2FybmluZ308L2J1dHRvbj47XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0RGF0YTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgSGlzdG9ncmFtLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xNi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgV2lkZ2V0LCB7IEFkZGl0aW9uYWxJbmZvLCBTZXJpZXNTZWxlY3QgfSBmcm9tICcuL1dpZGdldCc7XHJcbmltcG9ydCB7IENyb3NzTWFyayB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEhpc3RvZ3JhbSB9IGZyb20gJy4uLy4uL0ltcGxlbWVudGF0aW9ucyc7XHJcblxyXG5cclxuY29uc3QgU3ZnU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICBmaWxsOiAnbm9uZScsXHJcbiAgICBzaGFwZVJlbmRlcmluZzogJ2NyaXNwRWRnZXMnLFxyXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxyXG4gICAgV2Via2l0VG91Y2hDYWxsb3V0OiAnbm9uZScsXHJcbiAgICBXZWJraXRVc2VyU2VsZWN0OiAnbm9uZScsXHJcbiAgICBLaHRtbFVzZXJTZWxlY3Q6ICdub25lJyxcclxuICAgIE1velVzZXJTZWxlY3Q6ICdub25lJyxcclxuICAgIG1zVXNlclNlbGVjdDogJ25vbmUnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaXN0b2dyYW1KU1gocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlIaXN0b2dyYW0+KSB7XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IFJlYWN0LnVzZVN0YXRlPEhpc3RvZ3JhbT4obmV3IEhpc3RvZ3JhbShwcm9wcykpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB9LCBbdG9nZ2xlLCBwcm9wcy5KU09OXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBJbml0aWFsaXplKHJlY29yZCk7XHJcbiAgICB9LCBbcmVjb3JkXSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFJlY29yZChuZXcgSGlzdG9ncmFtKHsgLi4ucmVjb3JkLCBEYXRhOiBwcm9wcy5EYXRhIH0pKTtcclxuICAgIH0sIFtwcm9wcy5EYXRhXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRSZWNvcmQobmV3IEhpc3RvZ3JhbSh7IC4uLnJlY29yZCwgSGVpZ2h0OiBwcm9wcy5IZWlnaHQgfSkpXHJcbiAgICB9LCBbcHJvcHMuSGVpZ2h0XSlcclxuXHJcbiAgICBmdW5jdGlvbiBJbml0aWFsaXplKHNldHRpbmdzOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pSGlzdG9ncmFtPikge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBzZXR0aW5ncy5KU09OLlNlcmllcy5tYXAoc2VyaWVzID0+IHNlcmllcy5Qcm9maWxlKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgfHwgY3VyciwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHsgYm90dG9tOiA1MCwgbGVmdDogNTAsIHRvcDogNDAsIHJpZ2h0OiAocHJvZmlsZSA/IDcwIDogMjApIH07XHJcbiAgICAgICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcmVjb3JkLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xyXG5cclxuICAgICAgICAvLy8vIHNldCB0aGUgcGFyYW1ldGVycyBmb3IgdGhlIGhpc3RvZ3JhbVxyXG4gICAgICAgIGxldCBoaXN0b2dyYW1zID0gKHNldHRpbmdzLkpTT04/LlNlcmllcyA/PyBbXSkubWFwKHNlcmllcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhU291cmNlID0gcHJvcHMuRGF0YS5maW5kKGQgPT4gZC5EYXRhU291cmNlLklEID09PSBzZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICAgICAgbGV0IGRhdHVtID0gZGF0YVNvdXJjZS5maW5kKGQgPT4gZC5JRCA9PT0gc2VyaWVzLklEKT8uRGF0YS5tYXAoZCA9PiBkW3Nlcmllcy5GaWVsZF0pID8/IFtdO1xyXG4gICAgICAgICAgICBsZXQgaGlzdG9ncmFtID0gZDMuaGlzdG9ncmFtPG51bWJlciwgbnVtYmVyPigpXHJcbiAgICAgICAgICAgICAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQ7IH0pICAgLy8gSSBuZWVkIHRvIGdpdmUgdGhlIHZlY3RvciBvZiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0dW0pIGFzIFtudW1iZXIsIG51bWJlcl0pICAvLyB0aGVuIHRoZSBkb21haW4gb2YgdGhlIGdyYXBoaWNcclxuICAgICAgICAgICAgICAgIC50aHJlc2hvbGRzKHNlcmllcy5CaW5Db3VudCk7IC8vIHRoZW4gdGhlIG51bWJlcnMgb2YgYmluc1xyXG5cclxuICAgICAgICAgICAgLy8gQW5kIGFwcGx5IHRoaXMgZnVuY3Rpb24gdG8gZGF0YSB0byBnZXQgdGhlIGJpbnNcclxuICAgICAgICAgICAgcmV0dXJuIGhpc3RvZ3JhbShkYXR1bSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgeU1heCA9IE1hdGgubWF4KC4uLltdLmNvbmNhdCguLi5oaXN0b2dyYW1zKS5tYXAoYiA9PiBiLmxlbmd0aCkpO1xyXG4gICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QocmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXHJcbiAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc2V0dGluZ3MuV2lkdGgpXHJcbiAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHNldHRpbmdzLkhlaWdodClcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLmRvbWFpbihbc2V0dGluZ3MuSlNPTi5NaW4sIHNldHRpbmdzLkpTT04uTWF4XSkgICAgIC8vIGNhbiB1c2UgdGhpcyBpbnN0ZWFkIG9mIDEwMDAgdG8gaGF2ZSB0aGUgbWF4IG9mIGRhdGE6IGQzLm1heChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiArZC5wcmljZSB9KVxyXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHNldHRpbmdzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHRdKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgKHNldHRpbmdzLkhlaWdodCAtIG1hcmdpbi5ib3R0b20pICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXHJcblxyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHNldHRpbmdzLldpZHRoIC8gMikgKyBcIixcIiArIChzZXR0aW5ncy5IZWlnaHQgLSBtYXJnaW4uYm90dG9tLzMpICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC50ZXh0KHJlY29yZC5KU09OLlVuaXRzKVxyXG5cclxuICAgICAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAucmFuZ2UoW3NldHRpbmdzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLCAwXSlcclxuICAgICAgICAgICAgLmRvbWFpbihbMCwgeU1heF0pOyAgIC8vIGQzLmhpc3QgaGFzIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIFkgYXhpcyBvYnZpb3VzbHlcclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcclxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBwcm9wcy5IZWlnaHQvMiArIFwiLFwiICsgbWFyZ2luLmxlZnQvMyArIFwiKVwiKVxyXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNvdW50c1wiKVxyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICBsZXQgaGlzdG9ncmFtID0gW10uY29uY2F0KC4uLmhpc3RvZ3JhbXMubWFwKChoaXN0b2dyYW0sIGluZGV4KSA9PiBoaXN0b2dyYW0ubWFwKChoOiBhbnkpID0+IHsgaC5Db2xvciA9IHNldHRpbmdzLkpTT04uU2VyaWVzW2luZGV4XS5Db2xvcjsgcmV0dXJuIGggfSkpKTtcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxyXG4gICAgICAgICAgICAuZGF0YShoaXN0b2dyYW0pXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAxKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCkgPT4gXCJ0cmFuc2xhdGUoXCIgKyAobWFyZ2luLmxlZnQgKyB4KGQueDApKSArIFwiLFwiICsgKG1hcmdpbi50b3AgKyB5KGQubGVuZ3RoKSkgKyBcIilcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4gKHgoZC54MSkgLSB4KGQueDApID4gMiA/IHgoZC54MSkgLSB4KGQueDApIDogMikgLSAxKVxyXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gc3ZnSGVpZ2h0IC0geShkLmxlbmd0aCkpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCkgPT4gZC5Db2xvcilcclxuICAgICAgICAgICAgLy8uYXR0cihcIm9wYWNpdHlcIiwgMC4zKVxyXG5cclxuICAgICAgICBpZiAocHJvZmlsZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9maWxlcyA9IHJlY29yZC5KU09OLlNlcmllcy5maWx0ZXIoc2VyaWVzID0+IHNlcmllcy5Qcm9maWxlKS5tYXAoKHNlcmllcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhU291cmNlID0gcHJvcHMuRGF0YS5maW5kKGQgPT4gZC5EYXRhU291cmNlLklEID09PSBzZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXR1bSA9IGRhdGFTb3VyY2UuZmluZChkID0+IGQuSUQgPT09IHNlcmllcy5JRCk/LkRhdGEubWFwKGQgPT4gZFtzZXJpZXMuRmllbGRdKSA/PyBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBoaXN0b2dyYW0gPSBkMy5oaXN0b2dyYW08bnVtYmVyLCBudW1iZXI+KClcclxuICAgICAgICAgICAgICAgICAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQ7IH0pICAgLy8gSSBuZWVkIHRvIGdpdmUgdGhlIHZlY3RvciBvZiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KGRhdHVtKSBhcyBbbnVtYmVyLCBudW1iZXJdKSAgLy8gdGhlbiB0aGUgZG9tYWluIG9mIHRoZSBncmFwaGljXHJcbiAgICAgICAgICAgICAgICAgICAgLnRocmVzaG9sZHMoc2VyaWVzLkJpbkNvdW50KShkYXR1bSk7IC8vIHRoZW4gdGhlIG51bWJlcnMgb2YgYmluc1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IENvbG9yOiBzZXJpZXMuUHJvZmlsZUNvbG9yLCBQcm9maWxlOiBoaXN0b2dyYW0ubWFwKChzdW0gPT4gdmFsdWUgPT4gc3VtICs9IHZhbHVlLmxlbmd0aCkoMCkpLm1hcCgocHJvZiwgaSkgPT4gKHsgQmluOiBoaXN0b2dyYW1baV0ueDAsIFZhbHVlOiBwcm9mIH0pKX07XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9jb25zdCBwcm9maWxlcyA9IGhpc3RvZ3JhbXMubWFwKGhpc3QgPT4gaGlzdC5tYXAoKHN1bSA9PiB2YWx1ZSA9PiBzdW0gKz0gdmFsdWUubGVuZ3RoKSgwKSkubWFwKChwcm9mLCBpKSA9PiAoeyBCaW46IGhpc3RbaV0ueDAsIFZhbHVlOiBwcm9mIH0pKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHB5TWF4ID0gTWF0aC5tYXgoLi4ucHJvZmlsZXMubWFwKHByID0+IHByLlByb2ZpbGUpLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5jb25jYXQoY3VyciksIFtdKS5tYXAocCA9PiBwLlZhbHVlKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHB5ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAgICAgLnJhbmdlKFtzZXR0aW5ncy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSwgMF0pXHJcbiAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBweU1heF0pOyAgIC8vIGQzLmhpc3QgaGFzIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIFkgYXhpcyBvYnZpb3VzbHlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHB5QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChwcm9wcy5XaWR0aCAtIG1hcmdpbi5yaWdodCkgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcclxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNSaWdodChweSkpO1xyXG4gICAgICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKSB0cmFuc2xhdGUoLVwiICsgcHJvcHMuSGVpZ2h0IC8gMiArIFwiLFwiICsgKHByb3BzLldpZHRoIC0gbWFyZ2luLnJpZ2h0LzMpICsgXCIpXCIpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoXCJQcm9maWxlXCIpXHJcblxyXG4gICAgICAgICAgICAvL2NvbnN0IGZpbHRlcmVkRGF0YSA9IHByb2ZpbGUuZmluZChkcyA9PiBkcy5JRCA9PT0gc2VyaWVzLklEKT8uRGF0YSA/PyBbXSkuZmlsdGVyKGRzID0+IG1vbWVudChkcy5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSA+PSBzZXR0aW5ncy5KU09OLk1pbiAmJiBtb21lbnQoZHMuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkgPD0gc2V0dGluZ3MuSlNPTi5NYXggJiYgZHNbZmllbGRdID49IGF4aXMuTWluICYmIGRzW2ZpZWxkXSA8PSBheGlzLk1heClcclxuICAgICAgICAgICAgY29uc3QgbGluZUZ1bmMgPSBkMy5saW5lPHtCaW46IG51bWJlciwgVmFsdWU6IG51bWJlcn0+KCkueChkZCA9PiB4KGRkLkJpbikpLnkoZGQgPT4gcHkoZGQuVmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgICAgICAgICAuZGF0YShwcm9maWxlcylcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGQgPT4gZC5Db2xvcilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4gbGluZUZ1bmMoZC5Qcm9maWxlKSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6IHByb3BzLldpZHRoLCBoZWlnaHQ6IHByb3BzLkhlaWdodCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIndpZGdpdC1sYWJlbFwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLkxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gXCIgKyBzdHlsZXNbXCJ3aWRnaXQtY29udHJvbHNcIl19IHRpdGxlPSdXaWRnZXQgU2V0dGluZ3MnIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSh0cnVlKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFdpZGdldCB7Li4ucHJvcHN9IFJlY29yZD17cmVjb3JkfSBUb2dnbGU9e3RvZ2dsZX0gU2V0VG9nZ2xlPXsoYm9vbCkgPT4gc2V0VG9nZ2xlKGJvb2wpIH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaVdpZGdldD4gRmllbGQ9J0xhYmVsJyBSZWNvcmQ9e3JlY29yZH0gVHlwZT0ndGV4dCcgU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKG5ldyBIaXN0b2dyYW0ocikpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V2lkdGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmVjb3JkPy5XaWR0aCA/PyAwfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKG5ldyBIaXN0b2dyYW0oeyAuLi5yZWNvcmQsIFdpZHRoOiBwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSB9KSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldnQpID0+IHNldFJlY29yZChuZXcgSGlzdG9ncmFtKHsgLi4ucmVjb3JkLCBXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSAyMDAgfSkpfT5GdWxsIFdpZHRoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pSGlzdG9ncmFtPiBGaWVsZD0nVW5pdHMnIFJlY29yZD17cmVjb3JkLkpTT059IFR5cGU9J3RleHQnIFNldHRlcj17KHIpID0+IHNldFJlY29yZChuZXcgSGlzdG9ncmFtKHsgLi4ucmVjb3JkLCBKU09OOiByIH0pKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlIaXN0b2dyYW0+IEZpZWxkPSdNaW4nIExhYmVsPSdNaW4nIFJlY29yZD17cmVjb3JkLkpTT04gYXMgVHJlbkRBUC5pSGlzdG9ncmFtfSBUeXBlPSdudW1iZXInIFNldHRlcj17KHIpID0+IHNldFJlY29yZCh7IC4uLnJlY29yZCwgSlNPTjogciB9KX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pSGlzdG9ncmFtPiBGaWVsZD0nTWF4JyBSZWNvcmQ9e3JlY29yZC5KU09OIGFzIFRyZW5EQVAuaUhpc3RvZ3JhbX0gVHlwZT0nbnVtYmVyJyBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQoeyAuLi5yZWNvcmQsIEpTT046IHIgfSl9IFZhbGlkPXsoZmllbGQpID0+IHRydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCIgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogMTYgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFJlY29yZChyZWNvcmQuQ2FsY3VsYXRlQXhpc1JhbmdlKCkpfT5Vc2UgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5TZXJpZXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhY2NvcmRpb25cIiBzdHlsZT17e292ZXJmbG93WTogJ2F1dG8nLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQvMn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkLkRhdGEubWFwKChkLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj17XCIjY29sbGFwc2VcIiArIGl9PntkLkRhdGFTb3VyY2UuTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1wiY29sbGFwc2VcIiArIGl9IGNsYXNzTmFtZT1cImNvbGxhcHNlIHNob3dcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJpZXNTZWxlY3QgRGF0YT17cmVjb3JkLkF2YWlsYWJsZVNlcmllcygpfSBBZGRTZXJpZXM9eyhpZCwgZHNJRCkgPT4gc2V0UmVjb3JkKHJlY29yZC5BZGRTZXJpZXMoaWQsIGRzSUQpKSB9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGQuRGF0YVNvdXJjZS5UeXBlID09PSAnT3BlblhEQScgPyAocmVjb3JkLkpTT04/LlNlcmllcyA/PyBbXSkubWFwKChzZXJpZXMsaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXR1bSA9IGQuRGF0YS5maW5kKGRkID0+IGRkLklEID09PSBzZXJpZXMuSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0dW0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtzZXJpZXMuSUR9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2RhdHVtLk5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRpdGlvbmFsSW5mbyBEYXRhPXtkYXR1bX0gSW5kZXg9e2l9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzUGlja2VyIEluZGV4PXtpbmR9IFNlcmllcz17c2VyaWVzfSBXaWRnZXQ9e3JlY29yZH0gQ2FsbGJhY2s9eyh3aWRnZXQpID0+IHNldFJlY29yZCh3aWRnZXQpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5jb25zdCBTZXJpZXNQaWNrZXIgPSAocHJvcHM6IHsgSW5kZXg6IG51bWJlciwgU2VyaWVzOiBUcmVuREFQLmlIaXN0b2dyYW1TZXJpZXMsIFdpZGdldDogSGlzdG9ncmFtLCBDYWxsYmFjazogKHdpZGdldDogSGlzdG9ncmFtKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IFtiaW5zLCBzZXRCaW5zXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4ocHJvcHMuU2VyaWVzLkJpbkNvdW50KTtcclxuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihwcm9wcy5TZXJpZXMuQ29sb3IpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRGaWVsZD4ocHJvcHMuU2VyaWVzLkZpZWxkKTtcclxuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHByb3BzLlNlcmllcy5Qcm9maWxlKTtcclxuICAgIGNvbnN0IFtwQ29sb3IsIHNldFBDb2xvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHByb3BzLlNlcmllcy5Qcm9maWxlQ29sb3IpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHByb3BzLkNhbGxiYWNrKHByb3BzLldpZGdldC5VcGRhdGVTZXJpZXMocHJvcHMuSW5kZXgsIFwiQ29sb3JcIiwgY29sb3IpKSwgW2NvbG9yXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gcHJvcHMuQ2FsbGJhY2socHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5JbmRleCwgXCJGaWVsZFwiLCB0eXBlKSksIFt0eXBlXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gcHJvcHMuQ2FsbGJhY2socHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5JbmRleCwgXCJCaW5Db3VudFwiLCBiaW5zKSksIFtiaW5zXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gcHJvcHMuQ2FsbGJhY2socHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5JbmRleCwgXCJQcm9maWxlXCIsIHByb2ZpbGUpKSwgW3Byb2ZpbGVdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBwcm9wcy5DYWxsYmFjayhwcm9wcy5XaWRnZXQuVXBkYXRlU2VyaWVzKHByb3BzLkluZGV4LCBcIlByb2ZpbGVDb2xvclwiLCBwQ29sb3IpKSwgW3BDb2xvcl0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5GaWVsZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZShldnQudGFyZ2V0LnZhbHVlIGFzIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXZlcmFnZVwiPkF2Zzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaW5pbXVtXCI+TWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1heGltdW1cIj5NYXg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsID5CaW5zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2JpbnN9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRCaW5zKHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpKX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2NvbG9yfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q29sb3IoZXZ0LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZmlsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3t3aWR0aDogMjB9fSAgdmFsdWU9e3Byb2ZpbGU/LnRvU3RyaW5nKCl9IGNoZWNrZWQ9e3Byb2ZpbGV9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRQcm9maWxlKGV2dC50YXJnZXQuY2hlY2tlZCl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlByb2ZpbGUgQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtwQ29sb3J9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRQQ29sb3IoZXZ0LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5DYWxsYmFjayhwcm9wcy5XaWRnZXQuUmVtb3ZlU2VyaWVzKHByb3BzLkluZGV4KSkgfT57Q3Jvc3NNYXJrfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbik7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgV2lkZ2l0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xNi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vU3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUocHJvcHM6IFRyZW5EQVAuaVdpZGdldCkge1xyXG4gICAgcmV0dXJuIDxkaXY+UHJvZmlsZTwvZGl2PjtcclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgU3RhdHMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzE2LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IFN0YXRzIH0gZnJvbSAnLi4vLi4vSW1wbGVtZW50YXRpb25zJztcclxuaW1wb3J0IFdpZGdldCwgeyBTZXJpZXNTZWxlY3QsIEFkZGl0aW9uYWxJbmZvIH0gZnJvbSAnLi9XaWRnZXQnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdHNKU1gocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlTdGF0cz4pIHtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8U3RhdHM+KG5ldyBTdGF0cyhwcm9wcykpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVjb3JkKG5ldyBTdGF0cyh7IC4uLnJlY29yZCwgRGF0YTogcHJvcHMuRGF0YSB9KSk7XHJcbiAgICB9LCBbcHJvcHMuRGF0YV0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBzdGF0cyA9IHJlY29yZC5TdGF0cygpO1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IHJlY29yZC5EYXRhLmZpbmQoZGQgPT4gZGQuRGF0YVNvdXJjZS5JRCA9PT0gcmVjb3JkLkpTT04uU2VyaWVzPy5EYXRhU291cmNlSUQgPz8gMCk/LkRhdGEgPz8gW107XHJcbiAgICBjb25zdCBkYXR1bSA9IGRhdGFTb3VyY2UuZmluZChkZCA9PiBkZC5JRCA9PT0gcmVjb3JkLkpTT04uU2VyaWVzPy5JRCA/PyAwKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6IHByb3BzLldpZHRoLCBoZWlnaHQ6IHByb3BzLkhlaWdodCwgbWF4SGVpZ2h0OiBwcm9wcy5IZWlnaHQsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wid2lkZ2l0LWxhYmVsXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBcIiArIHN0eWxlc1tcIndpZGdpdC1jb250cm9sc1wiXX0gdGl0bGU9J1dpZGdldCBTZXR0aW5ncycgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKHRydWUpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPkNhdGVnb3J5PC90aD48dGg+U3RhdGlzdGljPC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoc3RhdHMpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnUGVyY2VudGlsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ciBrZXk9e2tleX0+PHRkPntrZXl9PC90ZD48dGQ+e3N0YXRzW2tleV19PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdGF0cy5QZXJjZW50aWxlKS5tYXAocGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dHIga2V5PXtrZXkrcGtleX0+PHRkPntwa2V5fXRoIFBlcmNlbnRpbGU8L3RkPjx0ZD57c3RhdHMuUGVyY2VudGlsZVtwa2V5XX08L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxXaWRnZXQgey4uLnByb3BzfSBSZWNvcmQ9e3JlY29yZH0gVG9nZ2xlPXt0b2dnbGV9IFNldFRvZ2dsZT17KGJvb2wpID0+IHNldFRvZ2dsZShib29sKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pU3RhdHM+PiBGaWVsZD0nTGFiZWwnIFJlY29yZD17cmVjb3JkfSBUeXBlPSd0ZXh0JyBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQobmV3IFN0YXRzKHIpKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldpZHRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3JlY29yZD8uV2lkdGh9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFN0YXRzKHsgLi4ucmVjb3JkLCBXaWR0aDogcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkgfSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFN0YXRzKHsgLi4ucmVjb3JkLCBXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSAyMDAgfSkpfT5GdWxsIFdpZHRoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+U2VyaWVzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3JkaW9uXCIgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnYXV0bycsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuRGF0YS5tYXAoKGQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtcIiNjb2xsYXBzZVwiICsgaX0+e2QuRGF0YVNvdXJjZS5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcImNvbGxhcHNlXCIgKyBpfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBzaG93XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzU2VsZWN0IERhdGE9e3JlY29yZC5BdmFpbGFibGVTZXJpZXMoKX0gQWRkU2VyaWVzPXsoaWQsIGRzSUQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc29tZXRoaW5nID0gbmV3IFN0YXRzKHJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZXRoaW5nLlNldFNlcmllcyhpZCwgZHNJRClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWNvcmQoc29tZXRoaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ09wZW5YREEnICYmIHJlY29yZC5KU09OLlNlcmllcyAhPSB1bmRlZmluZWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3JlY29yZC5KU09OLlNlcmllcy5JRH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntkYXR1bS5OYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm8gSW5kZXg9e2l9IERhdGE9e2RhdHVtfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RmllbGQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmVjb3JkLkpTT04uU2VyaWVzLkZpZWxkfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKHJlY29yZC5TZXRTZXJpZXNGaWVsZChldnQudGFyZ2V0LnZhbHVlIGFzIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkF2ZXJhZ2VcIj5Bdmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWluaW11bVwiPk1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYXhpbXVtXCI+TWF4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByZWNpc2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtyZWNvcmQuSlNPTi5QcmVjaXNpb259IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQocmVjb3JkLlNldFByZWNzaXNpb24ocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgVGFibGUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzE2LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCBUYWJsZUZvcm0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi4vLi4vSW1wbGVtZW50YXRpb25zJztcclxuaW1wb3J0IFdpZGdldCwgeyBTZXJpZXNTZWxlY3QsIEFkZGl0aW9uYWxJbmZvIH0gZnJvbSAnLi9XaWRnZXQnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBTb3J0IH0gZnJvbSAnLi4vV29ya1NwYWNlcy9Xb3JrU3BhY2VzU2xpY2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVKU1gocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlUYWJsZT4pIHtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8VGFibGU+KG5ldyBUYWJsZShwcm9wcykpO1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PignVGltZXN0YW1wJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdPihbXSk7XHJcbiAgICBjb25zdCBbaW5mbywgc2V0SW5mb10gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFSZXR1cm5EYXRhPih7fSBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFJlY29yZChuZXcgVGFibGUoeyAuLi5yZWNvcmQsIERhdGE6IHByb3BzLkRhdGEgfSkpO1xyXG4gICAgfSwgW3Byb3BzLkRhdGFdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSByZWNvcmQuRGF0YS5maW5kKGRkID0+IGRkLkRhdGFTb3VyY2UuSUQgPT09IHJlY29yZC5KU09OLlNlcmllcz8uRGF0YVNvdXJjZUlEID8/IDApPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIGNvbnN0IGRhdHVtID0gZGF0YVNvdXJjZS5maW5kKGRkID0+IGRkLklEID09PSByZWNvcmQuSlNPTi5TZXJpZXM/LklEID8/IDApO1xyXG4gICAgICAgIGlmIChkYXR1bSA9PSB1bmRlZmluZWQpIHNldEluZm8oe30gYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSApO1xyXG4gICAgICAgIGVsc2Ugc2V0SW5mbyhkYXR1bSk7XHJcbiAgICB9LCBbcmVjb3JkXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3Qgb3JkZXJlZCA9IF8ub3JkZXJCeShpbmZvPy5EYXRhID8/IFtdLCBbc29ydEZpZWxkXSwgW2FzY2VuZGluZyA/ICdhc2MnIDogJ2Rlc2MnXSlcclxuICAgICAgICBzZXREYXRhKG9yZGVyZWQpO1xyXG4gICAgfSwgW2FzY2VuZGluZyxzb3J0RmllbGQsaW5mb10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6IHByb3BzLldpZHRoLCBoZWlnaHQ6IHByb3BzLkhlaWdodCwgbWF4SGVpZ2h0OiBwcm9wcy5IZWlnaHQsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wid2lkZ2l0LWxhYmVsXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBcIiArIHN0eWxlc1tcIndpZGdpdC1jb250cm9sc1wiXX0gdGl0bGU9J1dpZGdldCBTZXR0aW5ncycgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKHRydWUpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVGb3JtPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PiB0YWJsZUNsYXNzPSd0YWJsZScgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVGltZXN0YW1wJywgbGFiZWw6ICdUaW1lc3RhbXAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNaW5pbXVtJywgbGFiZWw6ICdNaW4nLCBjb250ZW50OiAoaXRlbSxrZXksIHN0eWxlKSA9PiBpdGVtLk1pbmltdW0udG9GaXhlZChyZWNvcmQuSlNPTi5QcmVjaXNpb24pfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0F2ZXJhZ2UnLCBsYWJlbDogJ0F2ZycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBpdGVtLkF2ZXJhZ2UudG9GaXhlZChyZWNvcmQuSlNPTi5QcmVjaXNpb24pfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01heGltdW0nLCBsYWJlbDogJ01heCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBpdGVtLk1heGltdW0udG9GaXhlZChyZWNvcmQuSlNPTi5QcmVjaXNpb24pfSxcclxuICAgICAgICAgICAgICAgIF19IGRhdGE9e2RhdGF9IHNvcnRGaWVsZD17c29ydEZpZWxkfSBvbkNsaWNrPXsoZGF0YSkgPT4geyB9fSBhc2NlbmRpbmc9e2FzY2VuZGluZ30gb25Tb3J0PXsoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvbCA9PT0gc29ydEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcoIWFzY2VuZGluZylcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U29ydEZpZWxkKGRhdGEuY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxXaWRnZXQgey4uLnByb3BzfSBSZWNvcmQ9e3JlY29yZH0gVG9nZ2xlPXt0b2dnbGV9IFNldFRvZ2dsZT17KGJvb2wpID0+IHNldFRvZ2dsZShib29sKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pU3RhdHM+PiBGaWVsZD0nTGFiZWwnIFJlY29yZD17cmVjb3JkfSBUeXBlPSd0ZXh0JyBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQobmV3IFRhYmxlKHIpKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldpZHRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3JlY29yZD8uV2lkdGh9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFRhYmxlKHsgLi4ucmVjb3JkLCBXaWR0aDogcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkgfSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFRhYmxlKHsgLi4ucmVjb3JkLCBXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSAyMDAgfSkpfT5GdWxsIFdpZHRoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+U2VyaWVzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3JkaW9uXCIgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnYXV0bycsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuRGF0YS5tYXAoKGQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtcIiNjb2xsYXBzZVwiICsgaX0+e2QuRGF0YVNvdXJjZS5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcImNvbGxhcHNlXCIgKyBpfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBzaG93XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzU2VsZWN0IERhdGE9e3JlY29yZC5BdmFpbGFibGVTZXJpZXMoKX0gQWRkU2VyaWVzPXsoaWQsIGRzSUQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc29tZXRoaW5nID0gbmV3IFRhYmxlKHJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZXRoaW5nLlNldFNlcmllcyhpZCwgZHNJRClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWNvcmQoc29tZXRoaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ09wZW5YREEnICYmIHJlY29yZC5KU09OLlNlcmllcyAhPSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtyZWNvcmQuSlNPTi5TZXJpZXMuSUR9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57aW5mbz8uTmFtZSA/PyAnJ308L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm8gSW5kZXg9e2l9IERhdGE9e2luZm99IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5QcmVjaXNpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtyZWNvcmQuSlNPTi5QcmVjaXNpb259IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQocmVjb3JkLlNldFByZWNzaXNpb24ocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRleHQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzE2LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4vV2lkZ2V0JztcclxuaW1wb3J0IHsgSW5wdXQsIFRleHRBcmVhIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0SlNYKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pVGV4dD4pIHtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8VGV4dD4obmV3IFRleHQocHJvcHMpKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBwcm9wcy5XaWR0aCwgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ3aWRnaXQtbGFiZWxcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5MYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIFwiICsgc3R5bGVzW1wid2lkZ2l0LWNvbnRyb2xzXCJdfSB0aXRsZT0nV2lkZ2V0IFNldHRpbmdzJyBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogMzB9fT57cHJvcHMuSlNPTi5UZXh0IH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFdpZGdldCB7Li4ucHJvcHN9IFJlY29yZD17cmVjb3JkfSBUb2dnbGU9e3RvZ2dsZX0gU2V0VG9nZ2xlPXsoYm9vbCkgPT4gc2V0VG9nZ2xlKGJvb2wpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlUZXh0Pj4gRmllbGQ9J0xhYmVsJyBSZWNvcmQ9e3JlY29yZH0gVHlwZT0ndGV4dCcgU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKG5ldyBUZXh0KHIpKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldpZHRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3JlY29yZD8uV2lkdGh9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFRleHQoeyAuLi5yZWNvcmQsIFdpZHRoOiBwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSB9KSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldnQpID0+IHNldFJlY29yZChuZXcgVGV4dCh7IC4uLnJlY29yZCwgV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC0gMjAwIH0pKX0+RnVsbCBXaWR0aDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhPFRyZW5EQVAuaVRleHQ+IFJlY29yZD17cmVjb3JkLkpTT059IEZpZWxkPVwiVGV4dFwiIFJvd3M9ezEwfSBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQobmV3IFRleHQoeyAuLi5yZWNvcmQsIEpTT046IHsgLi4uciB9IH0pKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRyZW5kLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xMy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQ2hlY2tCb3ggfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuXHJcbmltcG9ydCBXaWRnZXQsIHsgU2VyaWVzU2VsZWN0LCBBZGRpdGlvbmFsSW5mb30gZnJvbSAnLi9XaWRnZXQnO1xyXG5pbXBvcnQgeyBDcm9zc01hcmssIFBsdXMgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBUcmVuZCB9IGZyb20gJy4uLy4uL0ltcGxlbWVudGF0aW9ucyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IERhdGV0aW1lIGZyb20gJ3JlYWN0LWRhdGV0aW1lJztcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXRpbWUvY3NzL3JlYWN0LWRhdGV0aW1lLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJlbmRKU1gocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlUcmVuZD4pIHtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8VHJlbmQ+KG5ldyBUcmVuZChwcm9wcykpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9yZWNvcmQuY3VycmVudCA9IG5ldyBUcmVuZChwcm9wcyk7XHJcbiAgICB9LCBbdG9nZ2xlLCBwcm9wcy5KU09OXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmVjb3JkLkpTT04uU3BsaXQpXHJcbiAgICAgICAgICAgIEluaXRpYWxpemVTcGxpdChyZWNvcmQpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgSW5pdGlhbGl6ZU5vdFNwbGl0KHJlY29yZClcclxuICAgIH0sIFtyZWNvcmRdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVjb3JkKG5ldyBUcmVuZCh7Li4ucmVjb3JkLEhlaWdodDogcHJvcHMuSGVpZ2h0fSkpXHJcbiAgICB9LCBbcHJvcHMuSGVpZ2h0XSlcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFJlY29yZChuZXcgVHJlbmQoey4uLnJlY29yZCwgRGF0YTogcHJvcHMuRGF0YX0pKTtcclxuICAgIH0sIFtwcm9wcy5EYXRhXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gU2V0UmVjb3JkKGZpZWxkOiBrZXlvZiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pVHJlbmQ+LCByOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pVHJlbmQ+KSB7XHJcbiAgICAgICAgc2V0UmVjb3JkKG5ldyBUcmVuZChyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZVNwbGl0KHNldHRpbmdzOiBUcmVuZCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHsgYm90dG9tOiA1MCwgbGVmdDogNTAsIHRvcDogNDAsIHJpZ2h0OiA1MCB9O1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IHByb3BzLkhlaWdodCAvIHNldHRpbmdzLkpTT04uU2VyaWVzLmxlbmd0aDtcclxuICAgICAgICBkMy5zZWxlY3QocmVmLmN1cnJlbnQpLnNlbGVjdEFsbCgnc3ZnJykucmVtb3ZlKClcclxuICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVUaW1lKClcclxuICAgICAgICAgICAgLmRvbWFpbihbc2V0dGluZ3MuSlNPTi5NaW4sIHNldHRpbmdzLkpTT04uTWF4XSkgICAgIC8vIGNhbiB1c2UgdGhpcyBpbnN0ZWFkIG9mIDEwMDAgdG8gaGF2ZSB0aGUgbWF4IG9mIGRhdGE6IGQzLm1heChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiArZC5wcmljZSB9KVxyXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHNldHRpbmdzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHRdKTtcclxuXHJcbiAgICAgICAgc2V0dGluZ3MuSlNPTi5TZXJpZXMubWFwKHNlcmllcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBzZXR0aW5ncy5KU09OLllBeGlzW3Nlcmllcy5BeGlzXTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBzZXJpZXMuRmllbGQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QocmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc2V0dGluZ3MuV2lkdGgpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0Jywgc3ZnSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcclxuXHJcbiAgICAgICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc2V0dGluZ3MuV2lkdGggLyAyKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoXCJUaW1lXCIpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAgICAgLnJhbmdlKFtzdmdIZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSwgMF0pXHJcbiAgICAgICAgICAgICAgICAuZG9tYWluKFtheGlzLk1pbiwgYXhpcy5NYXhdKTsgICAvLyBkMy5oaXN0IGhhcyB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBZIGF4aXMgb2J2aW91c2x5XHJcblxyXG4gICAgICAgICAgICBjb25zdCB5QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChtYXJnaW4ubGVmdCkgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcclxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcclxuXHJcbiAgICAgICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBzdmdIZWlnaHQgLyAyICsgXCIsXCIgKyAobWFyZ2luLmxlZnQgLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgICAgIC50ZXh0KGF4aXMuVW5pdHMpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gKChyZWNvcmQuRGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT09IHNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdKS5maW5kKGRzID0+IGRzLklEID09PSBzZXJpZXMuSUQpPy5EYXRhID8/IFtdKS5maWx0ZXIoZHMgPT4gbW9tZW50KGRzLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpID49IHNldHRpbmdzLkpTT04uTWluICYmIG1vbWVudChkcy5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSA8PSBzZXR0aW5ncy5KU09OLk1heCAmJiBkc1tmaWVsZF0gPj0gYXhpcy5NaW4gJiYgZHNbZmllbGRdIDw9IGF4aXMuTWF4IClcclxuICAgICAgICAgICAgY29uc3QgbGluZUZ1bmMgPSBkMy5saW5lPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PigpLngoZGQgPT4geChtb21lbnQoZGQuVGltZXN0YW1wLCAnWVlZWS1NTS1ERFRISDptbTpzcy5mZmZaJykpKS55KGRkID0+IHkoZGRbc2VyaWVzLkZpZWxkXSkpO1xyXG5cclxuICAgICAgICAgICAgc3ZnLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgICAgIC5kYXRhKFtmaWx0ZXJlZERhdGFdKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgc2VyaWVzLkNvbG9yKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiBsaW5lRnVuYyhkKSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKVxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemVOb3RTcGxpdChzZXR0aW5nczogVHJlbmQpIHtcclxuICAgICAgICBjb25zdCBtYXJnaW4gPSB7IGJvdHRvbTogNTAsIGxlZnQ6IHNldHRpbmdzLkpTT04uWUF4aXMuZmlsdGVyKGF4aXMgPT4gYXhpcy5Qb3NpdGlvbiA9PT0gJ2xlZnQnKS5sZW5ndGggKiA1MCwgdG9wOiA0MCwgcmlnaHQ6IHNldHRpbmdzLkpTT04uWUF4aXMuZmlsdGVyKGF4aXMgPT4gYXhpcy5Qb3NpdGlvbiA9PT0gJ3JpZ2h0JykubGVuZ3RoICogNTB9O1xyXG4gICAgICAgIGNvbnN0IHggPSBkMy5zY2FsZVRpbWUoKVxyXG4gICAgICAgICAgICAuZG9tYWluKFtzZXR0aW5ncy5KU09OLk1pbiwgc2V0dGluZ3MuSlNPTi5NYXhdKSAgICAgLy8gY2FuIHVzZSB0aGlzIGluc3RlYWQgb2YgMTAwMCB0byBoYXZlIHRoZSBtYXggb2YgZGF0YTogZDMubWF4KGRhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuICtkLnByaWNlIH0pXHJcbiAgICAgICAgICAgIC5yYW5nZShbMCwgc2V0dGluZ3MuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodF0pO1xyXG5cclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzZXR0aW5ncy5XaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHNldHRpbmdzLkhlaWdodClcclxuXHJcbiAgICAgICAgY29uc3QgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyAoc2V0dGluZ3MuSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgKyBcIilcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSk7XHJcblxyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHNldHRpbmdzLldpZHRoIC8gMikgKyBcIixcIiArIChzZXR0aW5ncy5IZWlnaHQgLSBtYXJnaW4uYm90dG9tIC8gMykgKyBcIilcIilcclxuICAgICAgICAgICAgLnRleHQoXCJUaW1lXCIpXHJcblxyXG4gICAgICAgIGNvbnN0IHkgPSBzZXR0aW5ncy5KU09OLllBeGlzLm1hcChheGlzID0+IHtcclxuICAgICAgICAgICAgbGV0IGEgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgICAgICAucmFuZ2UoW3NldHRpbmdzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLCAwXSlcclxuICAgICAgICAgICAgICAgIC5kb21haW4oW2F4aXMuTWluLCBheGlzLk1heF0pOyAgIC8vIGQzLmhpc3QgaGFzIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIFkgYXhpcyBvYnZpb3VzbHlcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc2V0dGluZ3MuSlNPTi5ZQXhpcy5tYXAoKGF4aXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhO1xyXG4gICAgICAgICAgICBpZiAoYXhpcy5Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kID0gc2V0dGluZ3MuSlNPTi5ZQXhpcy5maWx0ZXIoYXhpcyA9PiBheGlzLlBvc2l0aW9uID09PSAnbGVmdCcpLmZpbmRJbmRleChheGlzID0+IGF4aXMgPT09IHNldHRpbmdzLkpTT04uWUF4aXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIGEgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKG1hcmdpbi5sZWZ0IC0gaW5kKjUwKSAgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5W2luZGV4XSkpO1xyXG4gICAgICAgICAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBwcm9wcy5IZWlnaHQgLyAyICsgXCIsXCIgKyAobWFyZ2luLmxlZnQgLSBpbmQgKiA1MCAtIDI1KSArIFwiKVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQoYXhpcy5Vbml0cylcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChzZXR0aW5ncy5XaWR0aCAtIG1hcmdpbi5yaWdodCkgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzUmlnaHQoeVtpbmRleF0pKTtcclxuICAgICAgICAgICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKSB0cmFuc2xhdGUoLVwiICsgcHJvcHMuSGVpZ2h0IC8gMiArIFwiLFwiICsgKHNldHRpbmdzLldpZHRoIC0gbWFyZ2luLnJpZ2h0IC8gMykgKyBcIilcIilcclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGF4aXMuVW5pdHMpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmxpbmVcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubGluZVwiKVxyXG4gICAgICAgICAgICAuZGF0YShzZXR0aW5ncy5KU09OLlNlcmllcylcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwibGluZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgKGQ6IFRyZW5EQVAuaVRyZW5kU2VyaWVzKSA9PiBkLkNvbG9yKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQ6IFRyZW5EQVAuaVRyZW5kU2VyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeVNjYWxlID0geVtkLkF4aXNdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmVGdW5jID0gZDMubGluZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4oKS54KGRkID0+IHgobW9tZW50KGRkLlRpbWVzdGFtcCwgJ1lZWVktTU0tRERUSEg6bW06c3MuZmZmWicpKSkueShkZCA9PiB5U2NhbGUoZGRbZC5GaWVsZF0pKTtcclxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZERhdGEgPSAoKHJlY29yZC5EYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gZC5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdKS5maW5kKGRzID0+IGRzLklEID09PSBkLklEKT8uRGF0YSA/PyBbXSkuZmlsdGVyKGRzID0+IG1vbWVudChkcy5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSA+PSBzZXR0aW5ncy5KU09OLk1pbiAmJiBtb21lbnQoZHMuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkgPD0gc2V0dGluZ3MuSlNPTi5NYXggJiYgZHNbZC5GaWVsZF0gPj0gc2V0dGluZ3MuSlNPTi5ZQXhpc1tkLkF4aXNdLk1pbiAmJiBkc1tkLkZpZWxkXSA8PSBzZXR0aW5ncy5KU09OLllBeGlzW2QuQXhpc10uTWF4KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVGdW5jKGZpbHRlcmVkRGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6IHByb3BzLldpZHRoLCBoZWlnaHQ6IHByb3BzLkhlaWdodCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIndpZGdpdC1sYWJlbFwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLkxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gXCIgKyBzdHlsZXNbXCJ3aWRnaXQtY29udHJvbHNcIl19IHRpdGxlPSdXaWRnZXQgU2V0dGluZ3MnIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSh0cnVlKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFdpZGdldCB7Li4ucHJvcHN9IFJlY29yZD17cmVjb3JkfSBUb2dnbGU9e3RvZ2dsZX0gU2V0VG9nZ2xlPXsoYm9vbCkgPT4gc2V0VG9nZ2xlKGJvb2wpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaVdpZGdldD4gRmllbGQ9J0xhYmVsJyBSZWNvcmQ9e3JlY29yZH0gVHlwZT0ndGV4dCcgU2V0dGVyPXsocikgPT4gU2V0UmVjb3JkKCdMYWJlbCcsIHIpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V2lkdGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmVjb3JkPy5XaWR0aH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlY29yZChuZXcgVHJlbmQoeyAuLi5yZWNvcmQsV2lkdGg6IHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpfSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFRyZW5kKHsgLi4ucmVjb3JkLCBXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSAyMDB9KSkgfT5GdWxsIFdpZHRoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3g8VHJlbkRBUC5pVHJlbmQ+IEZpZWxkPSdTcGxpdCcgUmVjb3JkPXtyZWNvcmQ/LkpTT059IFNldHRlcj17KHIpID0+IHNldFJlY29yZChuZXcgVHJlbmQoeyAuLi5yZWNvcmQsIEpTT046IHIgfSkpIH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PlggQXhpczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1pbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZXRpbWUgdmFsdWU9e21vbWVudChyZWNvcmQuSlNPTi5NaW4pfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRSZWNvcmQobmV3IFRyZW5kKHsgLi4ucmVjb3JkLCBKU09OOiB7IC4uLnJlY29yZC5KU09OLE1pbjogbW9tZW50KHZhbHVlKS50b0RhdGUoKS5nZXRUaW1lKCl9fSkpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1pbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZXRpbWUgdmFsdWU9e21vbWVudChyZWNvcmQuSlNPTi5NYXgpfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRSZWNvcmQobmV3IFRyZW5kKHsgLi4ucmVjb3JkLCBKU09OOiB7IC4uLnJlY29yZC5KU09OLCBNYXg6IG1vbWVudCh2YWx1ZSkudG9EYXRlKCkuZ2V0VGltZSgpIH19KSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDE2IH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLkNhbGN1bGF0ZUF4aXNSYW5nZSgneCcsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlY29yZChuZXcgVHJlbmQocmVjb3JkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Vc2UgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PlkgQXhpczwvaDY+IDxidXR0b24gc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIHRvcDogLTMwfX0gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLkFkZEF4aXMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWNvcmQobmV3IFRyZW5kKHJlY29yZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PntQbHVzfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkLkpTT04uWUF4aXMubWFwKChheGlzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz48QXhpcyBBeGlzPXtheGlzfSBJbmRleD17aW5kZXh9IFdpZGdldD17cmVjb3JkfSBDYWxsYmFjaz17KCkgPT4gc2V0UmVjb3JkKG5ldyBUcmVuZChyZWNvcmQpKSB9Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5TZXJpZXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhY2NvcmRpb25cIiBzdHlsZT17eyBvdmVyZmxvd1k6ICdhdXRvJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC8gMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5EYXRhLm1hcCgoZCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e1wiI2NvbGxhcHNlXCIgKyBpfT57ZC5EYXRhU291cmNlLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1wiY29sbGFwc2VcIiArIGl9IGNsYXNzTmFtZT1cImNvbGxhcHNlIHNob3dcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJpZXNTZWxlY3QgRGF0YT17cmVjb3JkLkF2YWlsYWJsZVNlcmllcygpfSBBZGRTZXJpZXM9eyhpZCwgZHNJRCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZC5BZGRTZXJpZXMoaWQsIGRzSUQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvbWV0aGluZyA9IG5ldyBUcmVuZChyZWNvcmQpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlY29yZChzb21ldGhpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ09wZW5YREEnID8gcmVjb3JkLkpTT04uU2VyaWVzLm1hcCgoc2VyaWVzLCBpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdHVtID0gZC5EYXRhLmZpbmQoZGQgPT4gZGQuSUQgPT09IHNlcmllcy5JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXR1bSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Nlcmllcy5JRH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntkYXR1bS5OYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm8gSW5kZXg9e2l9IERhdGE9e2RhdHVtfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzUGlja2VyIEluZGV4PXtpbmR9IFNlcmllcz17c2VyaWVzfSBXaWRnZXQ9e3JlY29yZH0gQ2FsbGJhY2s9eygpID0+IHNldFJlY29yZChuZXcgVHJlbmQocmVjb3JkKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3QgU2VyaWVzUGlja2VyID0gKHByb3BzOiB7IEluZGV4OiBudW1iZXIsIFNlcmllczogVHJlbkRBUC5pVHJlbmRTZXJpZXMsIFdpZGdldDogVHJlbmQsIENhbGxiYWNrOiAoKSA9PiB2b2lkfSkgPT4ge1xyXG4gICAgY29uc3QgW2F4aXMsIHNldEF4aXNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihwcm9wcy5TZXJpZXMuQXhpcyk7XHJcbiAgICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4ocHJvcHMuU2VyaWVzLkNvbG9yKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQ+KHByb3BzLlNlcmllcy5GaWVsZCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5XaWRnZXQuVXBkYXRlU2VyaWVzKHByb3BzLkluZGV4LCBcIkNvbG9yXCIsIGNvbG9yKTtcclxuICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgfSwgW2NvbG9yXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLldpZGdldC5VcGRhdGVTZXJpZXMocHJvcHMuSW5kZXgsIFwiRmllbGRcIiwgdHlwZSk7XHJcbiAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuICAgIH0sIFt0eXBlXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLldpZGdldC5VcGRhdGVTZXJpZXMocHJvcHMuSW5kZXgsIFwiQXhpc1wiLCBheGlzKTtcclxuICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgfSwgW2F4aXNdKTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RmllbGQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dHlwZX0gb25DaGFuZ2U9eyhldnQpID0+IHNldFR5cGUoZXZ0LnRhcmdldC52YWx1ZSBhcyBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludEZpZWxkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkF2ZXJhZ2VcIj5Bdmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWluaW11bVwiPk1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYXhpbXVtXCI+TWF4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5ZQXhpczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17YXhpc30gb25DaGFuZ2U9eyhldnQpID0+IHNldEF4aXMocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLldpZGdldC5KU09OLllBeGlzLm1hcCgoYXhpcywgaW5kZXgpID0+IDxvcHRpb24gdmFsdWU9e2luZGV4fSBrZXk9e2luZGV4fT57YXhpcy5Vbml0c308L29wdGlvbj4gKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkNvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17Y29sb3J9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDb2xvcihldnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTFcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLldpZGdldC5SZW1vdmVTZXJpZXMocHJvcHMuSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9fT57Q3Jvc3NNYXJrfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBBeGlzID0gKHByb3BzOiB7IEluZGV4OiBudW1iZXIsIEF4aXM6IFRyZW5EQVAuaVlBeGlzLCBXaWRnZXQ6IFRyZW5kLCBDYWxsYmFjazogKCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdFJlbmRlciA9IFJlYWN0LnVzZVJlZih0cnVlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZpcnN0UmVuZGVyLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvL2NvbnN0IFtiaW5zLCBzZXRCaW5zXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4ocHJvcHMuU2VyaWVzPy5CaW5Db3VudCA/PyAxMCk7XHJcbiAgICBjb25zdCBbdW5pdHMsIHNldFVuaXRzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4ocHJvcHMuQXhpcy5Vbml0cyk7XHJcbiAgICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPCdsZWZ0JyB8ICdyaWdodCc+KHByb3BzLkF4aXMuUG9zaXRpb24pO1xyXG4gICAgY29uc3QgW21pbiwgc2V0TWluXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4ocHJvcHMuQXhpcy5NaW4pO1xyXG4gICAgY29uc3QgW21heCwgc2V0TWF4XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4ocHJvcHMuQXhpcy5NYXgpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJzdFJlbmRlci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHByb3BzLldpZGdldC5VcGRhdGVBeGlzKHByb3BzLkluZGV4LCBcIlVuaXRzXCIsIHVuaXRzKTtcclxuICAgICAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdW5pdHNdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJzdFJlbmRlci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHByb3BzLldpZGdldC5VcGRhdGVBeGlzKHByb3BzLkluZGV4LCBcIlBvc2l0aW9uXCIsIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcG9zaXRpb25dKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJzdFJlbmRlci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHByb3BzLldpZGdldC5VcGRhdGVBeGlzKHByb3BzLkluZGV4LCBcIk1heFwiLCBtYXgpO1xyXG4gICAgICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LCBbbWF4XSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZmlyc3RSZW5kZXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICBwcm9wcy5XaWRnZXQuVXBkYXRlQXhpcyhwcm9wcy5JbmRleCwgXCJNaW5cIiwgbWluKTtcclxuICAgICAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWluXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBvc2l0aW9uPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cG9zaXRpb259IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRQb3NpdGlvbihldnQudGFyZ2V0LnZhbHVlIGFzICgnbGVmdCcgfCAncmlnaHQnKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGVmdFwiPkxlZnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJpZ2h0XCI+UmlnaHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pWUF4aXM+IEZpZWxkPSdVbml0cycgUmVjb3JkPXtwcm9wcy5BeGlzfSBUeXBlPSd0ZXh0JyBTZXR0ZXI9eyhyKSA9PiBzZXRVbml0cyhyLlVuaXRzKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlZQXhpcz4gRmllbGQ9J01pbicgTGFiZWw9J01pbicgUmVjb3JkPXtwcm9wcy5BeGlzfSBUeXBlPSdudW1iZXInIFNldHRlcj17KHIpID0+IHNldE1pbihyLk1pbil9IFZhbGlkPXsoZmllbGQpID0+IHRydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pWUF4aXM+IEZpZWxkPSdNYXgnIFJlY29yZD17cHJvcHMuQXhpc30gVHlwZT0nbnVtYmVyJyBTZXR0ZXI9eyhyKSA9PiBzZXRNYXgoci5NYXgpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiAxNiB9fSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLldpZGdldC5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3knLCBwcm9wcy5JbmRleClcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfX0+VXNlIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTFcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgc3R5bGU9e3t0b3A6IDMwfSB9IG9uQ2xpY2s9eygpID0+IHByb3BzLldpZGdldC5SZW1vdmVBeGlzKHByb3BzLkluZGV4KX0+e0Nyb3NzTWFya308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFdpZGdldC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMTEvMTYvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVHJlbkRBUC5pV2lkZ2V0IHtcclxuICAgIGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10sXHJcbiAgICBSZWNvcmQ6IFRyZW5EQVAuaVdpZGdldCxcclxuICAgIFRvZ2dsZTogYm9vbGVhbixcclxuICAgIFNldFRvZ2dsZTogKGJvb2xlYW4pID0+IHZvaWRcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnaXQocHJvcHM6IFByb3BzKSB7XHJcblxyXG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHJvbGU9XCJkaWFsb2dcIiBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5Ub2dnbGUgPyAnYmxvY2snIDogJ25vbmUnLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNCknIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbXctMTAwIHctNzVcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtb2RhbC1oZWFkZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57cHJvcHMuTGFiZWx9IFNldHRpbmdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJjbG9zZVwifSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5TZXRUb2dnbGUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlVwZGF0ZShwcm9wcy5SZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldFRvZ2dsZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRlbGV0ZSBXaWRnaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gcHJvcHMuU2V0VG9nZ2xlKGZhbHNlKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZG93XCIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlcmllc1NlbGVjdChwcm9wczogeyBEYXRhOiBUcmVuREFQLmlYREFSZXR1cm5XaXRoRGF0YVNvdXJjZVtdLCBBZGRTZXJpZXM6IChpZDogbnVtYmVyLCBkYXRhU291cmNlSUQ6IG51bWJlcikgPT4gdm9pZCB9KSB7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVJldHVybldpdGhEYXRhU291cmNlPih7IElEOiAwIH0gYXMgVHJlbkRBUC5pWERBUmV0dXJuV2l0aERhdGFTb3VyY2UpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZChwcm9wcy5EYXRhWzBdKTtcclxuICAgIH0sIFtwcm9wcy5EYXRhXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3NlbGVjdGVkPy5JRCA/PyAnJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldFNlbGVjdGVkKHByb3BzLkRhdGEuZmluZChkYXR1bSA9PiBkYXR1bS5JRCA9PT0gcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpKX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuRGF0YS5tYXAoKGRhdHVtLCBpbmRleCkgPT4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17ZGF0dW0uSUR9PntkYXR1bS5OYW1lfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVwiIHR5cGU9XCJidXR0b25cIiBpZD17XCJkcm9wZG93bk1lbnVCdXR0b25cIn0gZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+QWRkaXRpb25hbCBJbmZvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiIGFyaWEtbGFiZWxsZWRieT17XCJkcm9wZG93bk1lbnVCdXR0b25cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+TWV0ZXI6IHtzZWxlY3RlZD8uTWV0ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+QXNzZXQ6IHtzZWxlY3RlZD8uQXNzZXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+Q2hhcmFjdGVyaXN0aWM6IHtzZWxlY3RlZD8uQ2hhcmFjdGVyaXN0aWN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+VHlwZToge3NlbGVjdGVkPy5UeXBlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlN0YXRpb246IHtzZWxlY3RlZD8uU3RhdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5QaGFzZToge3NlbGVjdGVkPy5QaGFzZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5IYXJtb25pYzoge3NlbGVjdGVkPy5IYXJtb25pY308L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5BZGRTZXJpZXMoc2VsZWN0ZWQuSUQsc2VsZWN0ZWQuRGF0YVNvdXJjZUlEKX0+U2VsZWN0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZGl0aW9uYWxJbmZvIChwcm9wczogeyBJbmRleDogbnVtYmVyLCBEYXRhOiBhbnkgfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGlkPXtcImRyb3Bkb3duTWVudUJ1dHRvblwiICsgcHJvcHMuSW5kZXh9IGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgQWRkaXRpb24gSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PXtcImRyb3Bkb3duTWVudUJ1dHRvblwiICsgcHJvcHMuSW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+TWV0ZXI6IHtwcm9wcy5EYXRhLk1ldGVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+QXNzZXQ6IHtwcm9wcy5EYXRhLkFzc2V0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+Q2hhcmFjdGVyaXN0aWM6IHtwcm9wcy5EYXRhLkNoYXJhY3RlcmlzdGljfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+VHlwZToge3Byb3BzLkRhdGEuVHlwZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlN0YXRpb246IHtwcm9wcy5EYXRhLlN0YXRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5QaGFzZToge3Byb3BzLkRhdGEuUGhhc2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5IYXJtb25pYzoge3Byb3BzLkRhdGEuSGFybW9uaWN9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBYdnNZLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xNi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQ2hlY2tCb3ggfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuXHJcbmltcG9ydCBXaWRnZXQsIHsgU2VyaWVzU2VsZWN0LCBBZGRpdGlvbmFsSW5mbyB9IGZyb20gJy4vV2lkZ2V0JztcclxuaW1wb3J0IHsgQ3Jvc3NNYXJrLCBQbHVzIH0gZnJvbSAnLi4vLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgWHZzWSB9IGZyb20gJy4uLy4uL0ltcGxlbWVudGF0aW9ucyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IERhdGV0aW1lIGZyb20gJ3JlYWN0LWRhdGV0aW1lJztcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXRpbWUvY3NzL3JlYWN0LWRhdGV0aW1lLmNzc1wiO1xyXG5pbXBvcnQgeyBsaW5lYXJSZWdyZXNzaW9uLCBsaW5lYXJSZWdyZXNzaW9uTGluZSwgclNxdWFyZWQgfSBmcm9tICdzaW1wbGUtc3RhdGlzdGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBYdnNZSlNYKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pWHZzWT4pIHtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8WHZzWT4obmV3IFh2c1kocHJvcHMpKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vcmVjb3JkLmN1cnJlbnQgPSBuZXcgVHJlbmQocHJvcHMpO1xyXG4gICAgfSwgW3RvZ2dsZSwgcHJvcHMuSlNPTl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUocmVjb3JkKVxyXG4gICAgfSwgW3JlY29yZF0pXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRSZWNvcmQobmV3IFh2c1koeyAuLi5yZWNvcmQsIEhlaWdodDogcHJvcHMuSGVpZ2h0IH0pKVxyXG4gICAgfSwgW3Byb3BzLkhlaWdodF0pXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRSZWNvcmQobmV3IFh2c1koeyAuLi5yZWNvcmQsIERhdGE6IHByb3BzLkRhdGEgfSkpO1xyXG4gICAgfSwgW3Byb3BzLkRhdGFdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBaaXA8VD4oYXJyYXkxOiBUW10sIGZpZWxkMToga2V5b2YgVCwgYXJyYXkyOiBUW10sIGZpZWxkMjoga2V5b2YgVCwgemlwRmllbGQ6IGtleW9mIFQpIHtcclxuICAgICAgICBsZXQgcmV0dXJuQXJyYXk6IHsgWmlwRmllbGQ6IFRba2V5b2YgVF0sIEFycmF5MTogVFtrZXlvZiBUXSwgQXJyYXkyOiAgVFtrZXlvZiBUXX1bXT0gW107XHJcbiAgICAgICAgaWYgKGFycmF5MS5sZW5ndGggPiBhcnJheTIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGFycmF5MS5mb3JFYWNoKCh4ZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkyUG9pbnQgPSBhcnJheTIuZmluZChwb2ludCA9PiBwb2ludFt6aXBGaWVsZF0gPT09IHhkW3ppcEZpZWxkXSlcclxuICAgICAgICAgICAgICAgIGlmIChhcnJheTJQb2ludCA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIFppcEZpZWxkOiB4ZFt6aXBGaWVsZF0sIEFycmF5MTogeGRbZmllbGQxXSwgQXJyYXkyOiBhcnJheTJQb2ludFtmaWVsZDJdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhcnJheTIuZm9yRWFjaCgoeGQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5MVBvaW50ID0gYXJyYXkxLmZpbmQocG9pbnQgPT4gcG9pbnRbemlwRmllbGRdID09PSB4ZFt6aXBGaWVsZF0pXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkxUG9pbnQgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBaaXBGaWVsZDogeGRbemlwRmllbGRdLCBBcnJheTI6IHhkW2ZpZWxkMV0sIEFycmF5MTogYXJyYXkxUG9pbnRbZmllbGQyXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZShzZXR0aW5nczogWHZzWSkge1xyXG4gICAgICAgIGlmIChzZXR0aW5ncy5KU09OLlguU2VyaWVzID09IHVuZGVmaW5lZCB8fCBzZXR0aW5ncy5KU09OLlkuU2VyaWVzID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBtYXJnaW4gPSB7IGJvdHRvbTogNTAsIGxlZnQ6IDUwLCB0b3A6IDQwLCByaWdodDogNTAgfTtcclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQ7XHJcbiAgICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLmRvbWFpbihbc2V0dGluZ3MuSlNPTi5YLk1pbiwgc2V0dGluZ3MuSlNPTi5YLk1heF0pICAgICAvLyBjYW4gdXNlIHRoaXMgaW5zdGVhZCBvZiAxMDAwIHRvIGhhdmUgdGhlIG1heCBvZiBkYXRhOiBkMy5tYXgoZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gK2QucHJpY2UgfSlcclxuICAgICAgICAgICAgLnJhbmdlKFswLCBzZXR0aW5ncy5XaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0XSk7XHJcbiAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLnJhbmdlKFtzdmdIZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSwgMF0pXHJcbiAgICAgICAgICAgIC5kb21haW4oW3NldHRpbmdzLkpTT04uWS5NaW4sIHNldHRpbmdzLkpTT04uWS5NYXhdKTsgICAvLyBkMy5oaXN0IGhhcyB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBZIGF4aXMgb2J2aW91c2x5XHJcblxyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChyZWYuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc2V0dGluZ3MuV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzdmdIZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc2V0dGluZ3MuV2lkdGggLyAyKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAudGV4dChzZXR0aW5ncy5KU09OLlguVW5pdHMpXHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAobWFyZ2luLmxlZnQpICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKSB0cmFuc2xhdGUoLVwiICsgc3ZnSGVpZ2h0IC8gMiArIFwiLFwiICsgKG1hcmdpbi5sZWZ0IC8gMykgKyBcIilcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLnRleHQoc2V0dGluZ3MuSlNPTi5ZLlVuaXRzKTtcclxuXHJcbiAgICAgICAgY29uc3QgeERhdGE6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10gPSBHZXREYXR1bSgneCcpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIGNvbnN0IHlEYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdID0gR2V0RGF0dW0oJ3knKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBjb25zdCBjb21iaW5lZERhdGEgPSBaaXAoeERhdGEsIHJlY29yZC5KU09OLlguU2VyaWVzLkZpZWxkLCB5RGF0YSwgcmVjb3JkLkpTT04uWS5TZXJpZXMuRmllbGQsICdUaW1lc3RhbXAnKTsgXHJcbiAgICAgICAgLy9jb25zdCBjb21iaW5lZERhdGEgPSB4RGF0YS5tYXAoKHhkLCBpKSA9PiAoeyBUaW1lc3RhbXA6IHhkLlRpbWVzdGFtcCwgWDogeGRbcmVjb3JkLkpTT04uWFNlcmllcy5GaWVsZF0sIFk6IHlEYXRhW2ldW3JlY29yZC5KU09OLllTZXJpZXMuRmllbGRdIH0pKVxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGNvbWJpbmVkRGF0YS5maWx0ZXIoZCA9PiBtb21lbnQoZC5aaXBGaWVsZCkudG9EYXRlKCkuZ2V0VGltZSgpID49IHJlY29yZC5KU09OLlRpbWVNaW4gJiYgbW9tZW50KGQuWmlwRmllbGQpLnRvRGF0ZSgpLmdldFRpbWUoKSA8PSByZWNvcmQuSlNPTi5UaW1lTWF4KTtcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZG90XCIpXHJcbiAgICAgICAgICAgIC5kYXRhKGZpbHRlcmVkRGF0YSlcclxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwiY2lyY2xlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCAzLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgoZC5BcnJheTEgYXMgbnVtYmVyKTsgfSlcclxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLkFycmF5MiBhcyBudW1iZXIpOyB9KVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYCk7XHJcblxyXG5cclxuICAgICAgICBpZiAocmVjb3JkLkpTT04uUmVncmVzc2lvbkxpbmUpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGZpbHRlcmVkRGF0YS5tYXAoZCA9PiBbZC5BcnJheTEgYXMgbnVtYmVyLCBkLkFycmF5MiBhcyBudW1iZXJdKVxyXG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IGxpbmVhclJlZ3Jlc3Npb24oZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxyTGluZSA9IGxpbmVhclJlZ3Jlc3Npb25MaW5lKG1vZGVsKTtcclxuICAgICAgICAgICAgY29uc3QgcjIgPSByU3F1YXJlZChkYXRhLCBsckxpbmUpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lRnVuYyA9IGQzLmxpbmU8bnVtYmVyW10+KCkueChkID0+IHgoZFswXSkpLnkoZCA9PiB5KGxyTGluZShkWzBdKSkpO1xyXG4gICAgICAgICAgICBzdmcuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmVkJylcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHtwcm9wcy5XaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0fSwke21hcmdpbi50b3B9KWApXHJcbiAgICAgICAgICAgICAgICAudGV4dChgUjIgLSAke3IyLnRvRml4ZWQoMyl9YCk7XHJcblxyXG4gICAgICAgICAgICBzdmcuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAgICAgICAgICAgLmRhdGEoW2RhdGFdKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgJ3JlZCcpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgKGQpID0+IGxpbmVGdW5jKGQpKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEdldERhdHVtKGF4aXM6ICd4JyB8ICd5Jykge1xyXG4gICAgICAgIGlmIChheGlzID09PSAneCcpIHtcclxuICAgICAgICAgICAgaWYgKHJlY29yZC5KU09OLlguU2VyaWVzID09IHVuZGVmaW5lZCkgcmV0dXJuIHtOYW1lOiAnJ30gYXMgYW55O1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhU291cmNlID0gcmVjb3JkLkRhdGEuZmluZChkID0+IGQuRGF0YVNvdXJjZS5JRCA9PT0gcmVjb3JkLkpTT04uWC5TZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICAgICAgY29uc3QgZGF0dW0gPSBkYXRhU291cmNlLmZpbmQoZHMgPT4gZHMuSUQgPT09IHJlY29yZC5KU09OLlguU2VyaWVzLklEKVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0dW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocmVjb3JkLkpTT04uWS5TZXJpZXMgPT0gdW5kZWZpbmVkKSByZXR1cm4geyBOYW1lOiAnJyB9IGFzIGFueTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IHJlY29yZC5EYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IHJlY29yZC5KU09OLlkuU2VyaWVzLkRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdHVtID0gZGF0YVNvdXJjZS5maW5kKGRzID0+IGRzLklEID09PSByZWNvcmQuSlNPTi5ZLlNlcmllcy5JRClcclxuICAgICAgICAgICAgcmV0dXJuIGRhdHVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBwcm9wcy5XaWR0aCwgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ3aWRnaXQtbGFiZWxcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5MYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIFwiICsgc3R5bGVzW1wid2lkZ2l0LWNvbnRyb2xzXCJdfSB0aXRsZT0nV2lkZ2V0IFNldHRpbmdzJyBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxXaWRnZXQgey4uLnByb3BzfSBSZWNvcmQ9e3JlY29yZH0gVG9nZ2xlPXt0b2dnbGV9IFNldFRvZ2dsZT17KGJvb2wpID0+IHNldFRvZ2dsZShib29sKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlXaWRnZXQ+IEZpZWxkPSdMYWJlbCcgUmVjb3JkPXtyZWNvcmR9IFR5cGU9J3RleHQnIFNldHRlcj17KHIpID0+IHNldFJlY29yZChuZXcgWHZzWShyKSl9IFZhbGlkPXsoZmllbGQpID0+IHRydWV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5XaWR0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtyZWNvcmQ/LldpZHRofSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKG5ldyBYdnNZKHsgLi4ucmVjb3JkLCBXaWR0aDogcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkgfSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFh2c1koeyAuLi5yZWNvcmQsIFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAtIDIwMCB9KSl9PkZ1bGwgV2lkdGg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGV0aW1lIHZhbHVlPXttb21lbnQocmVjb3JkLkpTT04uVGltZU1pbil9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFJlY29yZChuZXcgWHZzWShyZWNvcmQuVXBkYXRlSlNPTignVGltZU1pbicsIG1vbWVudCh2YWx1ZSkudG9EYXRlKCkuZ2V0VGltZSgpKSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGV0aW1lIHZhbHVlPXttb21lbnQocmVjb3JkLkpTT04uVGltZU1heCl9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFJlY29yZChuZXcgWHZzWShyZWNvcmQuVXBkYXRlSlNPTignVGltZU1heCcsIG1vbWVudCh2YWx1ZSkudG9EYXRlKCkuZ2V0VGltZSgpKSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogMTYgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFJlY29yZChyZWNvcmQuQ2FsY3VsYXRlUmFuZ2UoJ3RpbWUnKSl9PlVzZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94PFRyZW5EQVAuaVh2c1k+IFJlY29yZD17cmVjb3JkLkpTT059IEZpZWxkPSdSZWdyZXNzaW9uTGluZScgTGFiZWw9J0FkZCBSZWdyZXNzaW9uJyBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQobmV3IFh2c1kocmVjb3JkLlVwZGF0ZUpTT04oJ1JlZ3Jlc3Npb25MaW5lJywgci5SZWdyZXNzaW9uTGluZSkpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PlggQXhpczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlBeGlzPiBSZWNvcmQ9e3JlY29yZC5KU09OLlh9IEZpZWxkPSdVbml0cycgVmFsaWQ9eygpID0+IHRydWV9IFNldHRlcj17KHIpID0+IHNldFJlY29yZChyZWNvcmQuU2V0QXhpcygneCcsICdVbml0cycsIHIuVW5pdHMpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pQXhpcz4gUmVjb3JkPXtyZWNvcmQuSlNPTi5YfSBGaWVsZD0nTWluJyBWYWxpZD17KCkgPT4gdHJ1ZX0gU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKHJlY29yZC5TZXRBeGlzKCd4JywgJ01pbicsIHIuTWluKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaUF4aXM+IFJlY29yZD17cmVjb3JkLkpTT04uWH0gRmllbGQ9J01heCcgVmFsaWQ9eygpID0+IHRydWV9IFNldHRlcj17KHIpID0+IHNldFJlY29yZChyZWNvcmQuU2V0QXhpcygneCcsICdNYXgnLCByLk1heCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogMTYgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFJlY29yZChyZWNvcmQuQ2FsY3VsYXRlUmFuZ2UoJ3gnKSl9PlVzZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+WSBBeGlzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaUF4aXM+IFJlY29yZD17cmVjb3JkLkpTT04uWX0gRmllbGQ9J1VuaXRzJyBWYWxpZD17KCkgPT4gdHJ1ZX0gU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKHJlY29yZC5TZXRBeGlzKCd5JywgJ1VuaXRzJywgci5Vbml0cykpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlBeGlzPiBSZWNvcmQ9e3JlY29yZC5KU09OLll9IEZpZWxkPSdNaW4nIFZhbGlkPXsoKSA9PiB0cnVlfSBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQocmVjb3JkLlNldEF4aXMoJ3knLCAnTWluJywgci5NaW4pKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pQXhpcz4gUmVjb3JkPXtyZWNvcmQuSlNPTi5ZfSBGaWVsZD0nTWF4JyBWYWxpZD17KCkgPT4gdHJ1ZX0gU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKHJlY29yZC5TZXRBeGlzKCd5JywgJ01heCcsIHIuTWF4KSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiAxNiB9fSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0UmVjb3JkKHJlY29yZC5DYWxjdWxhdGVSYW5nZSgneScpKX0+VXNlIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5TZXJpZXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhY2NvcmRpb25cIiBzdHlsZT17eyBvdmVyZmxvd1k6ICdhdXRvJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC8gMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5EYXRhLm1hcCgoZCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e1wiI2NvbGxhcHNlXCIgKyBpfT57ZC5EYXRhU291cmNlLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1wiY29sbGFwc2VcIiArIGl9IGNsYXNzTmFtZT1cImNvbGxhcHNlIHNob3dcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5YIFNlcmllczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlcmllc1NlbGVjdCBEYXRhPXtyZWNvcmQuQXZhaWxhYmxlU2VyaWVzKCl9IEFkZFNlcmllcz17KGlkLCBkc0lEKSA9PiBzZXRSZWNvcmQocmVjb3JkLlNldFNlcmllcygneCcsIGlkLCBkc0lEKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHJlY29yZC5KU09OLlguU2VyaWVzICE9IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntHZXREYXR1bSgneCcpPy5OYW1lID8/ICcnfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm8gSW5kZXg9e2l9IERhdGE9e0dldERhdHVtKCd4Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzUGlja2VyIEF4aXM9J3gnIFNlcmllcz17cmVjb3JkLkpTT04uWC5TZXJpZXN9IFdpZGdldD17cmVjb3JkfSBDYWxsYmFjaz17KCkgPT4gc2V0UmVjb3JkKG5ldyBYdnNZKHJlY29yZCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlkgU2VyaWVzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlcmllc1NlbGVjdCBEYXRhPXtyZWNvcmQuQXZhaWxhYmxlU2VyaWVzKCl9IEFkZFNlcmllcz17KGlkLCBkc0lEKSA9PiBzZXRSZWNvcmQocmVjb3JkLlNldFNlcmllcygneScsIGlkLCBkc0lEKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHJlY29yZC5KU09OLlkuU2VyaWVzICE9IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntHZXREYXR1bSgneScpPy5OYW1lID8/ICcnfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm8gSW5kZXg9e2l9IERhdGE9e0dldERhdHVtKCd5Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzUGlja2VyIEF4aXM9J3knIFNlcmllcz17cmVjb3JkLkpTT04uWS5TZXJpZXN9IFdpZGdldD17cmVjb3JkfSBDYWxsYmFjaz17KCkgPT4gc2V0UmVjb3JkKG5ldyBYdnNZKHJlY29yZCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IFNlcmllc1BpY2tlciA9IChwcm9wczogeyBBeGlzOiAneCd8J3knLCBTZXJpZXM6IFRyZW5EQVAuaVNlcmllcywgV2lkZ2V0OiBYdnNZLCBDYWxsYmFjazogKCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludEZpZWxkPihwcm9wcy5TZXJpZXMuRmllbGQpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5BeGlzLCBcIkZpZWxkXCIsIHR5cGUpO1xyXG4gICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICB9LCBbdHlwZV0pO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5GaWVsZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZShldnQudGFyZ2V0LnZhbHVlIGFzIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXZlcmFnZVwiPkF2Zzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaW5pbXVtXCI+TWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1heGltdW1cIj5NYXg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuV2lkZ2V0LlJlbW92ZVNlcmllcyhwcm9wcy5BeGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfX0+e0Nyb3NzTWFya308L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFdvcmtTcGFjZUVkaXRvci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMTEvMTAvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IElucHV0LCBDaGVja0JveCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IFNlbGVjdFdvcmtTcGFjZXNGb3JVc2VyLCBTZWxlY3RXb3JrU3BhY2VzQWxsUHVibGljTm90VXNlciwgT3BlbkNsb3NlV29ya1NwYWNlLCBVcGRhdGVXb3JrU3BhY2UsIFNlbGVjdFdvcmtTcGFjZXNTdGF0dXMsIEZldGNoV29ya1NwYWNlcyB9IGZyb20gJy4vV29ya1NwYWNlc1NsaWNlJztcclxuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICdkMyc7XHJcbmltcG9ydCBIaXN0b2dyYW0gZnJvbSAnLi4vV2lkZ2V0cy9IaXN0b2dyYW0nO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi9XaWRnZXRzL1Byb2ZpbGUnO1xyXG5pbXBvcnQgU3RhdHMgZnJvbSAnLi4vV2lkZ2V0cy9TdGF0cyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9XaWRnZXRzL1RhYmxlJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi4vV2lkZ2V0cy9UZXh0JztcclxuaW1wb3J0IFRyZW5kIGZyb20gJy4uL1dpZGdldHMvVHJlbmQnO1xyXG5pbXBvcnQgWHZzWSBmcm9tICcuLi9XaWRnZXRzL1h2c1knO1xyXG5pbXBvcnQgeyBVcGRhdGUsIFNlbGVjdERhdGFTZXRCeUlELCBTZWxlY3REYXRhU2V0cywgRmV0Y2hEYXRhU2V0cywgU2VsZWN0RGF0YVNldHNTdGF0dXMsIFNlbGVjdERhdGFTZXREYXRhLCBHZXREYXRhU2V0RGF0YUZyb21JREIgfSBmcm9tICcuLi9EYXRhU2V0cy9EYXRhU2V0c1NsaWNlJztcclxuaW1wb3J0IERhdGFTZXREYXRhIGZyb20gJy4uL0RhdGFTZXRzL0RhdGFTZXREYXRhJztcclxuaW1wb3J0IHsgQ3JlYXRlR3VpZCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvaGVscGVyLWZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IENyZWF0ZVdpZGdldCB9IGZyb20gJy4uLy4uL0ltcGxlbWVudGF0aW9ucyc7XHJcblxyXG5jb25zdCBOYXZNYXJnaW4gPSA4NTtcclxuY29uc3QgTmF2V2lkdGggPSAyMDA7XHJcblxyXG5jb25zdCBXb3JrU3BhY2VFZGl0b3I6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHt9PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pRGF0YVNldFJldHVybltdPihbXSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KGlkKTtcclxuICAgIGNvbnN0IHVzZXJzV29ya1NwYWNlczogVHJlbkRBUC5pV29ya1NwYWNlW10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFdvcmtTcGFjZXNGb3JVc2VyKHN0YXRlLCB1c2VyTmFtZSkpO1xyXG4gICAgY29uc3QgcHVibGljV29ya1NwYWNlczogVHJlbkRBUC5pV29ya1NwYWNlW10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdFdvcmtTcGFjZXNBbGxQdWJsaWNOb3RVc2VyKHN0YXRlLCB1c2VyTmFtZSkpO1xyXG4gICAgY29uc3QgZGF0YVNldHMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0cyk7XHJcbiAgICBjb25zdCB3c1N0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdFdvcmtTcGFjZXNTdGF0dXMpO1xyXG4gICAgY29uc3QgZHNTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0c1N0YXR1cyk7XHJcbiAgICBjb25zdCBbd29ya1NwYWNlSlNPTiwgc2V0V29ya1NwYWNlSlNPTl0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLldvcmtTcGFjZUpTT04+KHsgUm93czogW10gfSk7XHJcbiAgICBjb25zdCBbd29ya1NwYWNlLCBzZXRXb3JrU3BhY2VdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pV29ya1NwYWNlPihbLi4udXNlcnNXb3JrU3BhY2VzLCAuLi5wdWJsaWNXb3JrU3BhY2VzXS5maW5kKHdzID0+IHdzLklEID09IHRhYikpO1xyXG4gICAgY29uc3QgW2RhdGFTZXQsIHNldERhdGFTZXRdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pRGF0YVNldD4oe30gYXMgYW55KTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFdvcmtTcGFjZShbLi4udXNlcnNXb3JrU3BhY2VzLCAuLi5wdWJsaWNXb3JrU3BhY2VzXS5maW5kKHdzID0+IHdzLklEID09IHRhYikpO1xyXG4gICAgfSwgW2Rpc3BhdGNoLCB0YWIsIHVzZXJzV29ya1NwYWNlcywgcHVibGljV29ya1NwYWNlc10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdvcmtTcGFjZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgc2V0RGF0YVNldChkYXRhU2V0cy5maW5kKGRzID0+IGRzLklEID09PSB3b3JrU3BhY2UuRGF0YVNldElEKSk7XHJcbiAgICAgICAgaWYgKCF3b3JrU3BhY2U/Lk9wZW4pXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKE9wZW5DbG9zZVdvcmtTcGFjZSh7IHdvcmtTcGFjZTogd29ya1NwYWNlLCBvcGVuOiB0cnVlIH0pKTtcclxuXHJcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHdvcmtTcGFjZS5KU09OU3RyaW5nKSBhcyBUcmVuREFQLldvcmtTcGFjZUpTT047XHJcbiAgICAgICAgc2V0V29ya1NwYWNlSlNPTihqc29uKTtcclxuXHJcbiAgICAgICAgR2V0RGF0YVNldERhdGFGcm9tSURCKHdvcmtTcGFjZS5EYXRhU2V0SUQpLnRoZW4oZCA9PiB7XHJcbiAgICAgICAgICAgIHNldERhdGEoZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSwgW3dvcmtTcGFjZSwgZGF0YVNldHNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3c1N0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiB3c1N0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICAgICAgZGlzcGF0Y2goRmV0Y2hXb3JrU3BhY2VzKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgd3NTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkc1N0YXR1cyAhPSAndW5pdGlhdGVkJyAmJiBkc1N0YXR1cyAhPSAnY2hhbmdlZCcpIHJldHVybjtcclxuICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTZXRzKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgZHNTdGF0dXNdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBIYW5kbGVBZGRPYmplY3QodHlwZTogVHJlbkRBUC5XaWRnZXRUeXBlIHwgJ1JvdycpIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ1JvdycpXHJcbiAgICAgICAgICAgIHNldFdvcmtTcGFjZUpTT04oeyAuLi53b3JrU3BhY2VKU09OLCBSb3dzOiBbLi4ud29ya1NwYWNlSlNPTi5Sb3dzLCB7IEhlaWdodDogNTAwLCBXaWRnZXRzOiBbXSB9XSB9KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldFdvcmtTcGFjZUpTT04oe1xyXG4gICAgICAgICAgICAgICAgLi4ud29ya1NwYWNlSlNPTiwgUm93czogWy4uLndvcmtTcGFjZUpTT04uUm93cywge1xyXG4gICAgICAgICAgICAgICAgICAgIEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gTmF2TWFyZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgIFdpZGdldHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlV2lkZ2V0KHR5cGUsIHdpbmRvdy5pbm5lckhlaWdodCAtIE5hdk1hcmdpbiwgd2luZG93LmlubmVyV2lkdGggLSBOYXZXaWR0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIExhYmVsOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIE5hdk1hcmdpbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC0gTmF2V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIFR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIEpTT046IEluaXRpYWxMb2FkKHR5cGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBVcGRhdGU6ICgpID0+IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIFJlbW92ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgbGV0IGpzb24gPSB7IC4uLndvcmtTcGFjZUpTT04gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIGpzb24uUm93cy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBkaXNwYXRjaChVcGRhdGVXb3JrU3BhY2UoeyAuLi53b3JrU3BhY2UsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KGpzb24pIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJidXR0b25zfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmc6ICc2cHggMTJweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PkRhdGEgU2V0OiA8TGluayB0bz17YCR7aG9tZVBhdGh9RWRpdERhdGFTZXQvJHtkYXRhU2V0Py5JRH1gfT57ZGF0YVNldD8uTmFtZX08L0xpbms+PERhdGFTZXREYXRhIHsuLi5kYXRhU2V0fSAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiB0aXRsZT0nQWRkIE9iamVjdCcgZGF0YS10b2dnbGU9J2Ryb3Bkb3duJyBhcmlhLWhhc3BvcHVwPSd0cnVlJyBhcmlhLWV4cGFuZGVkPSdmYWxzZSc+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcGx1c1wiID48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoZSkgPT4gSGFuZGxlQWRkT2JqZWN0KCdSb3cnKX0+Um93PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ0hpc3RvZ3JhbScpfT5IaXN0b2dyYW08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdQcm9maWxlJyl9PlByb2ZpbGU8L2J1dHRvbj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdTdGF0cycpfT5TdGF0czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ1RhYmxlJyl9PlRhYmxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnVGV4dCcpfT5UZXh0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnVHJlbmQnKX0+VHJlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdYdnNZJyl9PlggdnMgWTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHRpdGxlPSdFeHBvcnQgQ3VycmVudCBEYXRhIFNldCcgZGF0YS10b2dnbGU9J2Ryb3Bkb3duJyBhcmlhLWhhc3BvcHVwPSd0cnVlJyBhcmlhLWV4cGFuZGVkPSdmYWxzZSc+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZG93bmxvYWRcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+UERGPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5DU1Y8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J1NhdmUgY3VycmVudCB3b3Jrc3BhY2UuLi4nIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZVdvcmtTcGFjZSh7IC4uLndvcmtTcGFjZSwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkod29ya1NwYWNlSlNPTikgfSkpO1xyXG4gICAgICAgICAgICAgICAgfX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2F2ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J1dvcmtzcGFjZSBTZXR0aW5ncyc+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgICAgICAgICAgICAgIHtbLi4udXNlcnNXb3JrU3BhY2VzLCAuLi5wdWJsaWNXb3JrU3BhY2VzXS5maWx0ZXIod3MgPT4gd3MuT3BlbikubWFwKHdzID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17d3MuSUR9IGNsYXNzTmFtZT17XCJuYXYtaXRlbSBcIiArIHN0eWxlcy53b3Jrc3BhY2V0YWJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rXCIgKyAodGFiID09IHdzLklEID8gJyBhY3RpdmUnIDogJycpfSBocmVmPScjJyBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRUYWIod3MuSUQpfSA+e3dzLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChPcGVuQ2xvc2VXb3JrU3BhY2UoeyB3b3JrU3BhY2U6IHdzLCBvcGVuOiBmYWxzZSB9KSl9Plg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT4pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1widGFiLWNvbnRlbnRcIl19PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtTcGFjZUpTT04uUm93cy5tYXAoKHJvdywgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cga2V5PXtpbmRleH0gV29ya1NwYWNlPXt3b3JrU3BhY2V9IERhdGE9e2RhdGF9IFdpZGdldHM9e3Jvdy5XaWRnZXRzfSBIZWlnaHQ9e3Jvdy5IZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGU9eyhyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IHsgLi4ud29ya1NwYWNlSlNPTiB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24uUm93c1tpbmRleF0uSGVpZ2h0ID0gcmVjb3JkLkhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLlJvd3NbaW5kZXhdLldpZGdldHMgPSByZWNvcmQuV2lkZ2V0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLlJvd3NbaW5kZXhdLldvcmtTcGFjZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLlJvd3NbaW5kZXhdLkRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goVXBkYXRlV29ya1NwYWNlKHsgLi4ud29ya1NwYWNlLCBKU09OU3RyaW5nOiBKU09OLnN0cmluZ2lmeShqc29uKSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlUm93PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSB7IC4uLndvcmtTcGFjZUpTT04gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLlJvd3Muc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZVdvcmtTcGFjZSh7IC4uLndvcmtTcGFjZSwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fS8+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFJvdzogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8VHJlbkRBUC5pUm93PiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHByb3BzLkhlaWdodCk7XHJcblxyXG4gICAgZnVuY3Rpb24gSGFuZGxlQWRkT2JqZWN0KHR5cGU6IFRyZW5EQVAuV2lkZ2V0VHlwZSkge1xyXG4gICAgICAgIGxldCByb3cgPSB7IC4uLnByb3BzLCBVcGRhdGU6IHVuZGVmaW5lZCwgV29ya1NwYWNlOiB1bmRlZmluZWQsIFJlbW92ZVJvdzogdW5kZWZpbmVkIH0gYXMgVHJlbkRBUC5pUm93OyBcclxuICAgICAgICByb3cuV2lkZ2V0cy5wdXNoKCBDcmVhdGVXaWRnZXQoIHR5cGUsIDEwMCwgKHdpbmRvdy5pbm5lcldpZHRoIC0gTmF2V2lkdGgpLzIpKVxyXG4gICAgICAgIHByb3BzLlVwZGF0ZShyb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiggICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBoZWlnaHQ6IHByb3BzLkhlaWdodCwgZGlzcGxheTogJ2dyaWQnIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAsIHpJbmRleDogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudHJpYW5nbGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1tcInJvdy1jb250cm9sc1wiXX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J0FkZCBPYmplY3QnIGRhdGEtdG9nZ2xlPSdkcm9wZG93bicgYXJpYS1oYXNwb3B1cD0ndHJ1ZScgYXJpYS1leHBhbmRlZD0nZmFsc2UnPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXNcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnSGlzdG9ncmFtJyl9Pkhpc3RvZ3JhbTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnUHJvZmlsZScpfT5Qcm9maWxlPC9idXR0b24+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdTdGF0cycpfT5TdGF0czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnVGFibGUnKX0+VGFibGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ1RleHQnKX0+VGV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnVHJlbmQnKX0+VHJlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ1h2c1knKX0+WCB2cyBZPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J1JlbW92ZSBSb3cnIG9uQ2xpY2s9eygpID0+IHByb3BzLlJlbW92ZVJvdygpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1taW51c1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiB0aXRsZT0nUm93IFNldHRpbmdzJyBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSkgfT48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkLWNvbnRhaW5lcicgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1mbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5XaWRnZXRzLm1hcCgod2lkZ2V0LCBpbmRleCkgPT4gPFdpZGdldCB7Li4ue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLndpZGdldCxcclxuICAgICAgICAgICAgICAgICAgICBIZWlnaHQ6IHByb3BzLkhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBXb3JrU3BhY2U6IHByb3BzLldvcmtTcGFjZSxcclxuICAgICAgICAgICAgICAgICAgICBEYXRhOiBwcm9wcy5EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZTogKG5ld1JlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0geyAuLi5wcm9wcyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2lkZ2V0ID0geyAuLi5uZXdSZWNvcmQgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LldvcmtTcGFjZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LkRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5XaWRnZXRzW2luZGV4XSA9IHdpZGdldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuVXBkYXRlKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZW1vdmU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IHsgLi4ucHJvcHMgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LldpZGdldHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuVXBkYXRlKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX0ga2V5PXtpbmRleH0gLz4pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiIHN0eWxlPXt7IGRpc3BsYXk6IHRvZ2dsZSA/ICdibG9jaycgOiAnbm9uZScsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40KScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+Um93IFNldHRpbmdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SGVpZ2h0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtoZWlnaHQgIT0gbnVsbCA/IGhlaWdodCA6IDB9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRIZWlnaHQocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGV2dCkgPT4gc2V0SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCAtIE5hdk1hcmdpbikgfT5GdWxsIEhlaWdodDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5VcGRhdGUoey4uLnByb3BzLCBIZWlnaHQ6IGhlaWdodH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBXaWRnZXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFRyZW5EQVAuaVdpZGdldD4gPSAocHJvcHMpID0+IHtcclxuICAgIGlmIChwcm9wcy5UeXBlID09ICdIaXN0b2dyYW0nKVxyXG4gICAgICAgIHJldHVybiA8SGlzdG9ncmFtIHsuLi5wcm9wc30gLz47XHJcbiAgICBlbHNlIGlmIChwcm9wcy5UeXBlID09ICdQcm9maWxlJylcclxuICAgICAgICByZXR1cm4gPFByb2ZpbGUgey4uLnByb3BzfSAvPjtcclxuICAgIGVsc2UgaWYgKHByb3BzLlR5cGUgPT0gJ1N0YXRzJylcclxuICAgICAgICByZXR1cm4gPFN0YXRzIHsuLi5wcm9wc30gLz47XHJcbiAgICBlbHNlIGlmIChwcm9wcy5UeXBlID09ICdUYWJsZScpXHJcbiAgICAgICAgcmV0dXJuIDxUYWJsZSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgZWxzZSBpZiAocHJvcHMuVHlwZSA9PSAnVGV4dCcpXHJcbiAgICAgICAgcmV0dXJuIDxUZXh0IHsuLi5wcm9wc30gLz47XHJcbiAgICBlbHNlIGlmIChwcm9wcy5UeXBlID09ICdUcmVuZCcpXHJcbiAgICAgICAgcmV0dXJuIDxUcmVuZCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgZWxzZSBpZiAocHJvcHMuVHlwZSA9PSAnWHZzWScpXHJcbiAgICAgICAgcmV0dXJuIDxYdnNZIHsuLi5wcm9wc30gLz47XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIDxzcGFuPk5vdCBhIHdpZGdldC48L3NwYW4+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrU3BhY2VFZGl0b3I7IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEltcGxlbWVudGF0aW9ucy50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMS8yNy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuL2dsb2JhbCc7XHJcbmltcG9ydCB7IENyZWF0ZUd1aWQsIFJhbmRvbUNvbG9yIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9oZWxwZXItZnVuY3Rpb25zJztcclxuaW1wb3J0IHN0YXRzIGZyb20gJ3N0YXRzLWxpdGUnO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgVHJlbkRBUC5XaWRnZXRDbGFzcz4gaW1wbGVtZW50cyBUcmVuREFQLmlXaWRnZXQ8VD57XHJcbiAgICBKU09OOiBUO1xyXG4gICAgSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBXaWR0aDogbnVtYmVyO1xyXG4gICAgVHlwZTogVHJlbkRBUC5XaWRnZXRUeXBlO1xyXG4gICAgTGFiZWw6IHN0cmluZztcclxuICAgIERhdGE6IFRyZW5EQVAuaURhdGFTZXRSZXR1cm5bXTtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VD4pIHtcclxuICAgICAgICB0aGlzLkhlaWdodCA9IHByb3BzLkhlaWdodDtcclxuICAgICAgICB0aGlzLldpZHRoID0gcHJvcHMuV2lkdGg7XHJcbiAgICAgICAgdGhpcy5UeXBlID0gcHJvcHMuVHlwZTtcclxuICAgICAgICB0aGlzLkxhYmVsID0gcHJvcHMuTGFiZWw7XHJcbiAgICAgICAgdGhpcy5KU09OID0gcHJvcHMuSlNPTjtcclxuICAgICAgICBpZiAocHJvcHMuRGF0YSA9PSB1bmRlZmluZWQpIHRoaXMuRGF0YSA9IFtdO1xyXG4gICAgICAgIGVsc2UgdGhpcy5EYXRhID0gcHJvcHMuRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0TGFiZWwgPSAobGFiZWw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMuTGFiZWwgPSBsYWJlbDtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgU2V0SGVpZ2h0ID0gKGhlaWdodDogbnVtYmVyKSA9PiB0aGlzLkhlaWdodCA9IGhlaWdodDtcclxuICAgIHB1YmxpYyBTZXRXaWR0aCA9ICh3aWR0aDogbnVtYmVyKSA9PiB0aGlzLldpZHRoID0gd2lkdGg7XHJcbiAgICBwdWJsaWMgU2V0SlNPTiA9IChqc29uOiBUKSA9PiB0aGlzLkpTT04gPSBqc29uO1xyXG4gICAgcHVibGljIEF2YWlsYWJsZVNlcmllcyA9ICgpID0+IHRoaXMuRGF0YS5tYXAoZGQgPT4gKHsgLi4uZGQsIERhdGFTb3VyY2VJRDogZGQuRGF0YVNvdXJjZS5JRCwgRGF0YVNvdXJjZTogZGQuRGF0YVNvdXJjZSB9KS5EYXRhLm1hcChkZGQgPT4gKHsgLi4uZGRkLCBEYXRhOiBbXSwgRGF0YVNvdXJjZTogZGQuRGF0YVNvdXJjZS5OYW1lLCBEYXRhU291cmNlSUQ6IGRkLkRhdGFTb3VyY2UuSUQgfSBhcyBUcmVuREFQLmlYREFSZXR1cm5XaXRoRGF0YVNvdXJjZSkpKS5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKTtcclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlSlNPTiA9IDxLIGV4dGVuZHMga2V5b2YgVD4oZmllbGQ6IEssIHZhbHVlOiBUW0tdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5KU09OW2ZpZWxkXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIaXN0b2dyYW0gZXh0ZW5kcyBXaWRnZXQ8VHJlbkRBUC5pSGlzdG9ncmFtPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaUhpc3RvZ3JhbT4gKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuVHlwZSA9IFwiSGlzdG9ncmFtXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLkpTT04gPSB7IE1pbjogMCwgTWF4OiAxMCwgVW5pdHM6ICcnLCBTZXJpZXM6IFtdIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZFNlcmllcyA9IChpZDogbnVtYmVyLCBkYXRhU291cmNlSUQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXMucHVzaCh7IElEOiBpZCwgRGF0YVNvdXJjZUlEOiBkYXRhU291cmNlSUQsIEJpbkNvdW50OiAxMCwgRmllbGQ6IFwiQXZlcmFnZVwiLCBDb2xvcjogUmFuZG9tQ29sb3IoKSwgUHJvZmlsZTogZmFsc2UsIFByb2ZpbGVDb2xvcjogUmFuZG9tQ29sb3IoKSB9KTtcclxuICAgICAgICByZXR1cm4gbmV3IEhpc3RvZ3JhbSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVtb3ZlU2VyaWVzID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLkpTT04uU2VyaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIaXN0b2dyYW0odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZVNlcmllcyA9IChpbmRleDoga2V5b2YgVHJlbkRBUC5pSGlzdG9ncmFtU2VyaWVzW10sIGZpZWxkOiBrZXlvZiBUcmVuREFQLmlIaXN0b2dyYW1TZXJpZXMsIHZhbHVlOiBUcmVuREFQLmlIaXN0b2dyYW1TZXJpZXNba2V5b2YgVHJlbkRBUC5pSGlzdG9ncmFtU2VyaWVzXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXNbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgSGlzdG9ncmFtKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2FsY3VsYXRlQXhpc1JhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBkZDogVHJlbkRBUC5pWERBUmV0dXJuRGF0YVtdID0gW10uY29uY2F0KC4uLnRoaXMuRGF0YS5tYXAoZCA9PiBkLkRhdGEpKTtcclxuICAgICAgICBsZXQgc3MgPSB0aGlzLkpTT04uU2VyaWVzLm1hcChzZXJpZXMgPT4gZGQuZmluZChkID0+IGQuSUQgPT09IHNlcmllcy5JRCkuRGF0YS5tYXAoZCA9PiBkW3Nlcmllcy5GaWVsZF0pKTtcclxuICAgICAgICBsZXQgbW0gPSBzcy5tYXAocyA9PiBbTWF0aC5taW4oLi4ucyksIE1hdGgubWF4KC4uLnMpXSk7XHJcbiAgICAgICAgdGhpcy5KU09OLk1heCA9IE1hdGgubWF4KC4uLltdLmNvbmNhdCguLi5tbSkpO1xyXG4gICAgICAgIHRoaXMuSlNPTi5NaW4gPSBNYXRoLm1pbiguLi5bXS5jb25jYXQoLi4ubW0pKTtcclxuICAgICAgICBsZXQgYnVmZmVyID0gKHRoaXMuSlNPTi5NYXggLSB0aGlzLkpTT04uTWluKSAqIC4xMDtcclxuICAgICAgICB0aGlzLkpTT04uTWF4ID0gdGhpcy5KU09OLk1heCArIGJ1ZmZlcjtcclxuICAgICAgICB0aGlzLkpTT04uTWluID0gdGhpcy5KU09OLk1pbiAtIGJ1ZmZlcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBIaXN0b2dyYW0odGhpcyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVuZCBleHRlbmRzIFdpZGdldDxUcmVuREFQLmlUcmVuZD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlUcmVuZD4pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5UeXBlID0gXCJUcmVuZFwiO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5KU09OID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTiA9IHsgTWluOiAwLCBNYXg6IDEwLCAgU3BsaXQ6IGZhbHNlLCBZQXhpczogW3sgTWF4OiAxMCwgTWluOiAwLCBQb3NpdGlvbjogJ2xlZnQnLCBVbml0czogJycgfV0sIFNlcmllczogW10gIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZEF4aXMgPSAoKSA9PiB0aGlzLkpTT04uWUF4aXMucHVzaCh7IE1heDogMTAsIE1pbjogMCwgUG9zaXRpb246ICdsZWZ0JywgVW5pdHM6ICcnIH0pO1xyXG4gICAgcHVibGljIFJlbW92ZUF4aXMgPSAoaW5kZXg6IG51bWJlcikgPT4gdGhpcy5KU09OLllBeGlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBwdWJsaWMgVXBkYXRlQXhpcyA9IChpbmRleDoga2V5b2YgVHJlbkRBUC5pWUF4aXNbXSwgZmllbGQ6IGtleW9mIFRyZW5EQVAuaVlBeGlzLCB2YWx1ZTogVHJlbkRBUC5pWUF4aXNba2V5b2YgVHJlbkRBUC5pWUF4aXNdKSA9PiB7IHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bZmllbGRdID0gdmFsdWU7IH07XHJcblxyXG4gICAgcHVibGljIENhbGN1bGF0ZUF4aXNSYW5nZSA9ICh0eXBlOiAneCcgfCAneScsIGluZGV4OiBrZXlvZiBUcmVuREFQLmlZQXhpc1tdKSA9PiB7XHJcbiAgICAgICAgbGV0IGRkOiBUcmVuREFQLmlYREFSZXR1cm5EYXRhW10gPSBbXS5jb25jYXQoLi4udGhpcy5EYXRhLm1hcChkID0+IGQuRGF0YSkpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAneCcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3MgPSB0aGlzLkpTT04uU2VyaWVzLm1hcChzZXJpZXMgPT4gZGQuZmluZChkID0+IGQuSUQgPT09IHNlcmllcy5JRCkuRGF0YS5tYXAoZCA9PiBuZXcgRGF0ZShkLlRpbWVzdGFtcCkuZ2V0VGltZSgpKSk7XHJcbiAgICAgICAgICAgIGxldCBtbSA9IHNzLm1hcChzID0+IFtNYXRoLm1pbiguLi5zKSwgTWF0aC5tYXgoLi4ucyldKTtcclxuICAgICAgICAgICAgdGhpcy5KU09OLk1heCA9IE1hdGgubWF4KC4uLltdLmNvbmNhdCguLi5tbSkpO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uTWluID0gTWF0aC5taW4oLi4uW10uY29uY2F0KC4uLm1tKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNzID0gdGhpcy5KU09OLlNlcmllcy5maWx0ZXIoc2VyaWVzID0+IHNlcmllcy5BeGlzID09PSBpbmRleCkubWFwKHNlcmllcyA9PiBkZC5maW5kKGQgPT4gZC5JRCA9PT0gc2VyaWVzLklEKS5EYXRhLm1hcChkID0+IGRbc2VyaWVzLkZpZWxkXSkpO1xyXG4gICAgICAgICAgICBsZXQgbW0gPSBzcy5tYXAocyA9PiBbTWF0aC5taW4oLi4ucyksIE1hdGgubWF4KC4uLnMpXSk7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01heCddID0gTWF0aC5tYXgoLi4uW10uY29uY2F0KC4uLm1tKSk7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01pbiddID0gTWF0aC5taW4oLi4uW10uY29uY2F0KC4uLm1tKSk7XHJcbiAgICAgICAgICAgIGxldCBidWZmZXIgPSAodGhpcy5KU09OLllBeGlzW2luZGV4XVsnTWF4J10gLSB0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNaW4nXSkgKiAuMTA7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01heCddID0gdGhpcy5KU09OLllBeGlzW2luZGV4XVsnTWF4J10gKyBidWZmZXI7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01pbiddID0gdGhpcy5KU09OLllBeGlzW2luZGV4XVsnTWluJ10gLSBidWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIEFkZFNlcmllcyA9IChpZDogbnVtYmVyLCBkYXRhU291cmNlSUQ6IG51bWJlcikgPT4gdGhpcy5KU09OLlNlcmllcy5wdXNoKHsgSUQ6IGlkLCBEYXRhU291cmNlSUQ6IGRhdGFTb3VyY2VJRCwgQXhpczogMCwgRmllbGQ6IFwiQXZlcmFnZVwiLCBDb2xvcjogUmFuZG9tQ29sb3IoKSB9KTtcclxuICAgIHB1YmxpYyBSZW1vdmVTZXJpZXMgPSAoaW5kZXg6IG51bWJlcikgPT4gdGhpcy5KU09OLlNlcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgcHVibGljIFVwZGF0ZVNlcmllcyA9IChpbmRleDoga2V5b2YgVHJlbkRBUC5pVHJlbmRTZXJpZXNbXSwgZmllbGQ6IGtleW9mIFRyZW5EQVAuaVRyZW5kU2VyaWVzLCB2YWx1ZTogVHJlbkRBUC5pVHJlbmRTZXJpZXNba2V5b2YgVHJlbkRBUC5pVHJlbmRTZXJpZXNdKSA9PiB7IHRoaXMuSlNPTi5TZXJpZXNbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlOyB9O1xyXG5cclxuXHJcbn1cclxuXHJcbi8vZXhwb3J0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBXaWRnZXQ8VHJlbkRBUC5pUHJvZmlsZT4ge1xyXG4vLyAgICBjb25zdHJ1Y3RvcihoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwganNvbj86IFRyZW5EQVAuaVRyZW5kKSB7XHJcbi8vICAgICAgICBzdXBlcihcIlByb2ZpbGVcIiwgaGVpZ2h0LCB3aWR0aCwganNvbik7XHJcbi8vICAgICAgICBpZiAoanNvbiA9PT0gdW5kZWZpbmVkKVxyXG4vLyAgICAgICAgICAgIHRoaXMuSlNPTiA9IHsgIH07XHJcbi8vICAgIH1cclxuXHJcbi8vfVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRzIGV4dGVuZHMgV2lkZ2V0PFRyZW5EQVAuaVN0YXRzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVN0YXRzPikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLlR5cGUgPSBcIlN0YXRzXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLkpTT04gPSB7U2VyaWVzOiBudWxsLCBQcmVjaXNpb246IDN9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIFNldFNlcmllcyA9IChpZDogbnVtYmVyLCBkc0lEOiBudW1iZXIpID0+IHRoaXMuSlNPTi5TZXJpZXMgPSB7IElEOiBpZCwgRGF0YVNvdXJjZUlEOiBkc0lELCBGaWVsZDogJ0F2ZXJhZ2UnIH07XHJcbiAgICBwdWJsaWMgU2V0U2VyaWVzRmllbGQgPSAoZmllbGQ6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQpID0+IHtcclxuICAgICAgICB0aGlzLkpTT04uU2VyaWVzLkZpZWxkID0gZmllbGQ7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0cyh0aGlzKTtcclxuICAgIH07XHJcbiAgICBwdWJsaWMgU2V0UHJlY3Npc2lvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5KU09OLlByZWNpc2lvbiA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RhdHModGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBTdGF0cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZXJpZXMgPSB0aGlzLkpTT04uU2VyaWVzO1xyXG5cclxuICAgICAgICBpZiAoc2VyaWVzID09IG51bGwpIHJldHVybiB7XHJcbiAgICAgICAgICAgIE1lYW46ICcnLFxyXG4gICAgICAgICAgICBNZWRpYW46JycsXHJcbiAgICAgICAgICAgIC8vTW9kZTogJycsXHJcbiAgICAgICAgICAgIFZhcmlhbmNlOiAnJyxcclxuICAgICAgICAgICAgU3RkRGV2OicnLFxyXG4gICAgICAgICAgICBQZXJjZW50aWxlOiB7XHJcbiAgICAgICAgICAgICAgICAxMDogJycsXHJcbiAgICAgICAgICAgICAgICAyNTonJyxcclxuICAgICAgICAgICAgICAgIDUwOiAnJyxcclxuICAgICAgICAgICAgICAgIDc1OiAnJyxcclxuICAgICAgICAgICAgICAgIDkwOicnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZURhdGEgPSB0aGlzLkRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSBzZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBjb25zdCBkYXRhU2VyaWVzID0gZGF0YVNvdXJjZURhdGEuZmluZChkID0+IGQuSUQgPT09IHNlcmllcy5JRCk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGRhdGFTZXJpZXMubWFwKGQgPT5kW3Nlcmllcy5GaWVsZF0pO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09IDApIHJldHVybiB7XHJcbiAgICAgICAgICAgIE1lYW46ICcnLFxyXG4gICAgICAgICAgICBNZWRpYW46ICcnLFxyXG4gICAgICAgICAgICAvL01vZGU6ICcnLFxyXG4gICAgICAgICAgICBWYXJpYW5jZTogJycsXHJcbiAgICAgICAgICAgIFN0ZERldjogJycsXHJcbiAgICAgICAgICAgIFBlcmNlbnRpbGU6IHtcclxuICAgICAgICAgICAgICAgIDEwOiAnJyxcclxuICAgICAgICAgICAgICAgIDI1OiAnJyxcclxuICAgICAgICAgICAgICAgIDUwOiAnJyxcclxuICAgICAgICAgICAgICAgIDc1OiAnJyxcclxuICAgICAgICAgICAgICAgIDkwOiAnJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgTWVhbjogc3RhdHMubWVhbihkYXRhKS50b0ZpeGVkKHRoaXMuSlNPTi5QcmVjaXNpb24pLFxyXG4gICAgICAgICAgICBNZWRpYW46IHN0YXRzLm1lZGlhbihkYXRhKS50b0ZpeGVkKHRoaXMuSlNPTi5QcmVjaXNpb24pLFxyXG4gICAgICAgICAgICAvL01vZGU6IHN0YXRzLm1vZGUoZGF0YSkvKi50b1ByZWNpc2lvbih0aGlzLkpTT04uUHJlY2lzaW9uKSovLFxyXG4gICAgICAgICAgICBWYXJpYW5jZTogc3RhdHMudmFyaWFuY2UoZGF0YSkudG9GaXhlZCh0aGlzLkpTT04uUHJlY2lzaW9uKSxcclxuICAgICAgICAgICAgU3RkRGV2OiBzdGF0cy5zdGRldihkYXRhKS50b0ZpeGVkKHRoaXMuSlNPTi5QcmVjaXNpb24pLFxyXG4gICAgICAgICAgICBQZXJjZW50aWxlOiB7XHJcbiAgICAgICAgICAgICAgICAxMDogc3RhdHMucGVyY2VudGlsZShkYXRhLCAwLjEwKS50b0ZpeGVkKHRoaXMuSlNPTi5QcmVjaXNpb24pLFxyXG4gICAgICAgICAgICAgICAgMjU6IHN0YXRzLnBlcmNlbnRpbGUoZGF0YSwgMC4yNSkudG9GaXhlZCh0aGlzLkpTT04uUHJlY2lzaW9uKSxcclxuICAgICAgICAgICAgICAgIDUwOiBzdGF0cy5wZXJjZW50aWxlKGRhdGEsIDAuNTApLnRvRml4ZWQodGhpcy5KU09OLlByZWNpc2lvbiksXHJcbiAgICAgICAgICAgICAgICA3NTogc3RhdHMucGVyY2VudGlsZShkYXRhLCAwLjc1KS50b0ZpeGVkKHRoaXMuSlNPTi5QcmVjaXNpb24pLFxyXG4gICAgICAgICAgICAgICAgOTA6IHN0YXRzLnBlcmNlbnRpbGUoZGF0YSwgMC45MCkudG9GaXhlZCh0aGlzLkpTT04uUHJlY2lzaW9uKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZSBleHRlbmRzIFdpZGdldDxUcmVuREFQLmlUYWJsZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlTdGF0cz4pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLkpTT04gPSB7IFNlcmllczogbnVsbCwgUHJlY2lzaW9uOiAzIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2V0U2VyaWVzID0gKGlkOiBudW1iZXIsIGRzSUQ6IG51bWJlcikgPT4gdGhpcy5KU09OLlNlcmllcyA9IHsgSUQ6IGlkLCBEYXRhU291cmNlSUQ6IGRzSUQsIEZpZWxkOiAnQXZlcmFnZScgfTtcclxuICAgIHB1YmxpYyBTZXRTZXJpZXNGaWVsZCA9IChmaWVsZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRGaWVsZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXMuRmllbGQgPSBmaWVsZDtcclxuICAgICAgICByZXR1cm4gbmV3IFN0YXRzKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBTZXRQcmVjc2lzaW9uID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLkpTT04uUHJlY2lzaW9uID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0cyh0aGlzKTtcclxuICAgIH07XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHQgZXh0ZW5kcyBXaWRnZXQ8VHJlbkRBUC5pVGV4dD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlUZXh0Pikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBpZiAodGhpcy5KU09OID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTiA9IHtUZXh0OiAnJ307XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgWHZzWSBleHRlbmRzIFdpZGdldDxUcmVuREFQLmlYdnNZPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVh2c1k+KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGlmICh0aGlzLkpTT04gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5KU09OID0ge1xyXG4gICAgICAgICAgICAgICAgWTogeyBNaW46IDAsIE1heDogMTAwLCBVbml0czogJycsIFNlcmllczogbnVsbCB9LFxyXG4gICAgICAgICAgICAgICAgWDogeyBNaW46IDAsIE1heDogMTAwLCBVbml0czogJycsIFNlcmllczogbnVsbCB9LFxyXG4gICAgICAgICAgICAgICAgVGltZU1pbjogbnVsbCwgVGltZU1heDogbnVsbCwgUmVncmVzc2lvbkxpbmU6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkpTT04uWCA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5YID0geyBNaW46IDAsIE1heDogMTAwLCBVbml0czogJycsIFNlcmllczogbnVsbCB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5KU09OLlkgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLkpTT04uWSA9IHsgTWluOiAwLCBNYXg6IDEwMCwgVW5pdHM6ICcnLCBTZXJpZXM6IG51bGwgfTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBDYWxjdWxhdGVSYW5nZSA9ICh0eXBlOiAneCcgfCAneScgfCAndGltZScpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3gnKSB7XHJcbiAgICAgICAgICAgIGxldCBkZCA9IHRoaXMuRGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT09IHRoaXMuSlNPTi5YLlNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3MgPSBkZC5maW5kKGQgPT4gZC5JRCA9PT0gdGhpcy5KU09OLlguU2VyaWVzLklEKS5EYXRhLm1hcChkID0+IGRbdGhpcy5KU09OLlguU2VyaWVzLkZpZWxkXSk7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5YLk1heCA9IE1hdGgubWF4KC4uLnNzKTtcclxuICAgICAgICAgICAgdGhpcy5KU09OLlguTWluID0gTWF0aC5taW4oLi4uc3MpO1xyXG4gICAgICAgICAgICBsZXQgYnVmZmVyID0gKHRoaXMuSlNPTi5YLk1heCAtIHRoaXMuSlNPTi5YLk1pbikgKiAuMTA7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5YLk1heCA9IHRoaXMuSlNPTi5YLk1heCArIGJ1ZmZlcjtcclxuICAgICAgICAgICAgdGhpcy5KU09OLlguTWluID0gdGhpcy5KU09OLlguTWluIC0gYnVmZmVyO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICd5Jykge1xyXG4gICAgICAgICAgICBsZXQgZGQgPSB0aGlzLkRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSB0aGlzLkpTT04uWS5TZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICAgICAgbGV0IHNzID0gZGQuZmluZChkID0+IGQuSUQgPT09IHRoaXMuSlNPTi5ZLlNlcmllcy5JRCkuRGF0YS5tYXAoZCA9PiBkW3RoaXMuSlNPTi5ZLlNlcmllcy5GaWVsZF0pO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uWS5NYXggPSBNYXRoLm1heCguLi5zcyk7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5ZLk1pbiA9IE1hdGgubWluKC4uLnNzKTtcclxuICAgICAgICAgICAgbGV0IGJ1ZmZlciA9ICh0aGlzLkpTT04uWS5NYXggLSB0aGlzLkpTT04uWS5NaW4pICogLjEwO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uWS5NYXggPSB0aGlzLkpTT04uWS5NYXggKyBidWZmZXI7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5ZLk1pbiA9IHRoaXMuSlNPTi5ZLk1pbiAtIGJ1ZmZlcjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZGQgPSB0aGlzLkRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSB0aGlzLkpTT04uWC5TZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzcyA9IGRkLmZpbmQoZCA9PiBkLklEID09PSB0aGlzLkpTT04uWC5TZXJpZXMuSUQpLkRhdGEubWFwKGQgPT4gbmV3IERhdGUoZC5UaW1lc3RhbXApLmdldFRpbWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5UaW1lTWF4ID0gTWF0aC5tYXgoLi4uc3MpO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uVGltZU1pbiA9IE1hdGgubWluKC4uLnNzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFh2c1kodGhpcyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwdWJsaWMgU2V0QXhpcyA9IChheGlzOiAneCcgfCAneScsIGZpZWxkOiBrZXlvZiBUcmVuREFQLmlBeGlzLCB2YWx1ZTogVHJlbkRBUC5pQXhpc1trZXlvZiBUcmVuREFQLmlBeGlzXSkgPT4ge1xyXG4gICAgICAgIGlmIChheGlzID09PSAneCcpXHJcbiAgICAgICAgICAgICh0aGlzLkpTT04uWFtmaWVsZF0gYXMgYW55KSA9IHZhbHVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgKHRoaXMuSlNPTi5ZW2ZpZWxkXSBhcyBhbnkpID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgWHZzWSh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFNldFNlcmllcyA9IChheGlzOiAneCcgfCAneScsIGlkOiBudW1iZXIsIGRzSUQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmKGF4aXMgPT09ICd4JylcclxuICAgICAgICAgICAgdGhpcy5KU09OLlguU2VyaWVzID0geyBJRDogaWQsIERhdGFTb3VyY2VJRDogZHNJRCwgRmllbGQ6ICdBdmVyYWdlJyB9O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5KU09OLlkuU2VyaWVzID0geyBJRDogaWQsIERhdGFTb3VyY2VJRDogZHNJRCwgRmllbGQ6ICdBdmVyYWdlJyB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFh2c1kodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZVNlcmllcyA9IChheGlzOiAneCcgfCAneScsIGZpZWxkOiBrZXlvZiBUcmVuREFQLmlTZXJpZXMsIHZhbHVlOiBUcmVuREFQLmlTZXJpZXNba2V5b2YgVHJlbkRBUC5pU2VyaWVzXSkgPT4ge1xyXG4gICAgICAgIGlmIChheGlzID09PSAneCcpXHJcbiAgICAgICAgICAgICh0aGlzLkpTT04uWC5TZXJpZXNbZmllbGRdIGFzIGFueSkgPSB2YWx1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICh0aGlzLkpTT04uWS5TZXJpZXNbZmllbGRdIGFzIGFueSkgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBYdnNZKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVtb3ZlU2VyaWVzID0gKGF4aXM6ICd4JyB8ICd5JykgPT4ge1xyXG4gICAgICAgIGlmIChheGlzID09PSAneCcpXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5YLlNlcmllcyA9IG51bGw7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLkpTT04uWS5TZXJpZXMgPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFh2c1kodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVXaWRnZXQodHlwZTogVHJlbkRBUC5XaWRnZXRUeXBlLCBoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcikge1xyXG4gICAgaWYgKHR5cGUgPT0gJ0hpc3RvZ3JhbScpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBIaXN0b2dyYW0oe0hlaWdodDogaGVpZ2h0LCBXaWR0aDogd2lkdGgsIExhYmVsOiB0eXBlLCBUeXBlOiB0eXBlLCBKU09OOiB1bmRlZmluZWQgfSk7XHJcbiAgICAvL2Vsc2UgaWYgKHR5cGUgPT0gJ1Byb2ZpbGUnKVxyXG4gICAgLy8gICAgcmV0dXJuIG5ldyBQcm9maWxlKGhlaWdodCwgd2lkdGgpO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PSAnU3RhdHMnKVxyXG4gICAgICAgIHJldHVybiBuZXcgU3RhdHMoeyBIZWlnaHQ6IGhlaWdodCwgV2lkdGg6IHdpZHRoLCBMYWJlbDogdHlwZSwgVHlwZTogdHlwZSwgSlNPTjogdW5kZWZpbmVkIH0pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PSAnVGFibGUnKVxyXG4gICAgICAgIHJldHVybiBuZXcgVGFibGUoeyBIZWlnaHQ6IGhlaWdodCwgV2lkdGg6IHdpZHRoLCBMYWJlbDogdHlwZSwgVHlwZTogdHlwZSwgSlNPTjogdW5kZWZpbmVkIH0pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PSAnVGV4dCcpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0KHsgSGVpZ2h0OiBoZWlnaHQsIFdpZHRoOiB3aWR0aCwgTGFiZWw6IHR5cGUsIFR5cGU6IHR5cGUsIEpTT046IHVuZGVmaW5lZCB9KTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT0gJ1RyZW5kJylcclxuICAgICAgICByZXR1cm4gbmV3IFRyZW5kKHsgSGVpZ2h0OiBoZWlnaHQsIFdpZHRoOiB3aWR0aCwgTGFiZWw6IHR5cGUsIFR5cGU6IHR5cGUsIEpTT046IHVuZGVmaW5lZCB9KTtcclxuICAgIGlmICh0eXBlID09ICdYdnNZJylcclxuICAgICAgICByZXR1cm4gbmV3IFh2c1koeyBIZWlnaHQ6IGhlaWdodCwgV2lkdGg6IHdpZHRoLCBMYWJlbDogdHlwZSwgVHlwZTogdHlwZSwgSlNPTjogdW5kZWZpbmVkIH0pO1xyXG59XHJcblxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTG9hZGluZ1NwaW5uZXIudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAxLzE4LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU3R5bGVzL3NwaW5uZXIuc2Nzcyc7XHJcblxyXG5jb25zdCBMb2FkaW5nU3Bpbm5lciA9IChwcm9wczogeyBIZWlnaHQ6IG51bWJlciwgV2lkdGg6IG51bWJlciwgQmFja2dyb3VuZDogc3RyaW5nLCBDb2xvcjogc3RyaW5nIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5zdmd9IHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9e3Byb3BzLkhlaWdodH0gd2lkdGg9e3Byb3BzLldpZHRofT5cclxuICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9e3N0eWxlcy5jaXJjbGUgfSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCI0NVwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nU3Bpbm5lciJdLCJzb3VyY2VSb290IjoiIn0=
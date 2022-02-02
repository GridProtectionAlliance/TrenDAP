(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["ViewDataSet"],{

/***/ "./node_modules/@gpa-gemstone/gpa-symbols/lib/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@gpa-gemstone/gpa-symbols/lib/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// ******************************************************************************************************
//  index.tsx - Gbtc
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
//  09/30/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Questionmark = exports.RewindButton = exports.FastForwardButton = exports.PauseButton = exports.StopButton = exports.PlayButton = exports.Scroll = exports.House = exports.MagnifyingGlass = exports.FourWayArrow = exports.InputNumbers = exports.DNA = exports.DownArrow = exports.RightArrow = exports.LeftArrow = exports.UpArrow = exports.Flag = exports.Wrench = exports.Spinner = exports.Warning = exports.Plus = exports.CrossMark = exports.TrashCan = exports.Pencil = exports.HeavyCheckMark = void 0;
exports.HeavyCheckMark = '✔️';
exports.Pencil = '✏️';
exports.TrashCan = '🗑️';
exports.CrossMark = '❌';
exports.Plus = '➕';
exports.Warning = '⚠️';
exports.Spinner = '🔄';
exports.Wrench = '🔧';
exports.Flag = '🚩';
exports.UpArrow = '⬆️';
exports.LeftArrow = '⬅';
exports.RightArrow = '➡';
exports.DownArrow = '⬇️';
exports.DNA = '🧬';
exports.InputNumbers = '🔢';
exports.FourWayArrow = '☩';
exports.MagnifyingGlass = '🔍';
exports.House = '🏠';
exports.Scroll = '📜';
exports.PlayButton = '▶️';
exports.StopButton = '⏹️';
exports.PauseButton = '⏸️';
exports.FastForwardButton = '⏩';
exports.RewindButton = '⏪';
exports.Questionmark = '?';


/***/ }),

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

/***/ "./wwwroot/TypeScript/Features/DataSets/ViewDataSet/Chart.tsx":
/*!********************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/ViewDataSet/Chart.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
//******************************************************************************************************
//  Chart.tsx - Gbtc
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
//  02/18/2021 - Billy Ernest
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



function Chart(props) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Pan'), 2), chartAction = _a[0], setChartAction = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () { return Initialize(props.Data); }, [props.Data]);
    function HandleReset() {
        //setRecord(record.CalculateAxisRange('x'));
    }
    function Initialize(data) {
        var margin = { bottom: 50, left: 75, top: 65, right: 40 };
        var svgHeight = (window.innerHeight - 270) / 2;
        var svgWidth = (window.innerWidth - 200) / 2;
        d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current).selectAll('svg').remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);
        var x = d3__WEBPACK_IMPORTED_MODULE_1__.scaleUtc()
            .domain(d3__WEBPACK_IMPORTED_MODULE_1__.extent(props.Data, function (d) { return moment__WEBPACK_IMPORTED_MODULE_2___default().utc(d.Timestamp); }))
            .range([margin.left, svgWidth - margin.right]);
        svg.selectAll('g.xaxis').remove();
        var xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (svgHeight - margin.bottom) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom(x));
        svg.append("g").classed('xaxis', true).append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (svgWidth / 2) + "," + (svgHeight - margin.bottom / 3) + ")")
            .text("Time");
        var y = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear()
            .range([svgHeight - margin.bottom, margin.top])
            .domain([d3__WEBPACK_IMPORTED_MODULE_1__.min(props.Data, function (d) { return Math.min((isNaN(d.Minimum) ? Number.POSITIVE_INFINITY : d.Minimum), (isNaN(d.Average) ? Number.POSITIVE_INFINITY : d.Average), (isNaN(d.Maximum) ? Number.POSITIVE_INFINITY : d.Maximum)); }), d3__WEBPACK_IMPORTED_MODULE_1__.max(props.Data, function (d) { return Math.max((isNaN(d.Minimum) ? Number.NEGATIVE_INFINITY : d.Minimum), (isNaN(d.Average) ? Number.NEGATIVE_INFINITY : d.Average), (isNaN(d.Maximum) ? Number.NEGATIVE_INFINITY : d.Maximum)); })]);
        svg.selectAll('g.yaxis').remove();
        var yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", "translate(" + (margin.left) + ",0)")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat(function (value) { return d3__WEBPACK_IMPORTED_MODULE_1__.format("~s")(value); }));
        var text = svg.append("g")
            .classed('yaxis', true)
            .append("text")
            .text("Channel Output");
        text.attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + ((margin.left) / 3) + ")").style("text-anchor", "middle");
        svg.selectAll('g.max').data([props.Data.filter(function (d) { return !isNaN(d.Maximum); })]).enter().append('g').attr('class', 'max').append('path').attr('stroke', 'red').attr('fill', 'none').attr('d', d3__WEBPACK_IMPORTED_MODULE_1__.line().x(function (d) { return x(moment__WEBPACK_IMPORTED_MODULE_2___default().utc(d.Timestamp).toDate().getTime()); }).y(function (d) { return y(d.Maximum); }));
        svg.selectAll('g.min').data([props.Data.filter(function (d) { return !isNaN(d.Minimum); })]).enter().append('g').attr('class', 'min').append('path').attr('stroke', 'red').attr('fill', 'none').attr('d', d3__WEBPACK_IMPORTED_MODULE_1__.line().x(function (d) { return x(moment__WEBPACK_IMPORTED_MODULE_2___default().utc(d.Timestamp).toDate().getTime()); }).y(function (d) { return y(d.Minimum); }));
        var points = svg.selectAll("g.points")
            .data([props.Data.filter(function (d) { return !isNaN(d.Average); })])
            .enter().append('g').attr('class', 'points');
        var point = points.selectAll('point').data(function (d) { return d; }).enter().append('g').attr('class', 'point');
        point.append("circle")
            .attr("r", 3.5)
            .attr("cx", function (d) { return x(moment__WEBPACK_IMPORTED_MODULE_2___default().utc(d.Timestamp).toDate().getTime()); })
            .attr("cy", function (d) { return y(d.Average); })
            .on('click', function (e, d) { props.SetSelected(d); })
            .style('cursor', 'pointer');
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: ref, style: { userSelect: 'none' } }));
}


/***/ }),

/***/ "./wwwroot/TypeScript/Features/DataSets/ViewDataSet/Histogram.tsx":
/*!************************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/ViewDataSet/Histogram.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Histogram)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
//******************************************************************************************************
//  Histogram.tsx - Gbtc
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
//  02/18/2021 - Billy Ernest
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};


function Histogram(props) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Average'), 2), type = _a[0], setType = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () { return Initialize(props.Data); }, [props.Data, type]);
    function Initialize(data) {
        var margin = { bottom: 50, left: 75, top: 65, right: 40 };
        var svgHeight = (window.innerHeight - 270) / 2;
        var svgWidth = (window.innerWidth - 200) / 2;
        d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current).selectAll('svg').remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);
        var histogram = d3__WEBPACK_IMPORTED_MODULE_1__.histogram()
            .value(function (d) { return d; }) // I need to give the vector of value
            .domain(d3__WEBPACK_IMPORTED_MODULE_1__.extent(props.Data.filter(function (d) { return !isNaN(d[type]); }), function (d) { return d[type]; })) // then the domain of the graphic
            .thresholds(40); // then the numbers of bins
        var bins = histogram(props.Data.map(function (d) { return d[type]; }).filter(function (d) { return !isNaN(d); }));
        var yMax = Math.max.apply(Math, __spreadArray([], __read(bins.map(function (b) { return b.length; }))));
        var x = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear()
            .domain([Math.min.apply(Math, __spreadArray([], __read(bins.map(function (a) { return a.x0; })))), Math.max.apply(Math, __spreadArray([], __read(bins.map(function (a) { return a.x1; }))))]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([margin.left, svgWidth - margin.right]);
        var xAxis = svg.append("g")
            .attr("transform", "translate(0," + (svgHeight - margin.bottom) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom(x));
        svg.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (svgWidth / 2) + "," + (svgHeight - margin.bottom / 3) + ")")
            .text("Channel Output");
        var y = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear()
            .range([svgHeight - margin.bottom, margin.top])
            .domain([0, yMax]); // d3.hist has to be called before the Y axis obviously
        var yAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + ",0)")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(y));
        svg.append("text")
            .attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + margin.left / 3 + ")")
            .style("text-anchor", "middle")
            .text("Counts");
        svg.selectAll("rect").remove();
        svg.selectAll("rect")
            .data(bins)
            .enter()
            .append("rect")
            .attr("x", 1)
            .attr("transform", function (d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
            .attr("width", function (d) { return (x(d.x1) - x(d.x0) > 2 ? x(d.x1) - x(d.x0) : 2) - 1; })
            .attr("height", function (d) { return (svgHeight - margin.bottom) - y(d.length); })
            .attr("fill", function (d) { return 'darkblue'; });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: ref },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-check form-check-inline" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "form-check-input", type: "radio", value: type, checked: type == 'Minimum', onChange: function (evt) { return setType('Minimum'); } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-check-label" }, "Min")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-check form-check-inline" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "form-check-input", type: "radio", checked: type == 'Average', onChange: function (evt) { return setType('Average'); } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-check-label" }, "Avg")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-check form-check-inline" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "form-check-input", type: "radio", checked: type == 'Maximum', onChange: function (evt) { return setType('Maximum'); } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-check-label" }, "Max"))));
}


/***/ }),

/***/ "./wwwroot/TypeScript/Features/DataSets/ViewDataSet/PagedTable.tsx":
/*!*************************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/ViewDataSet/PagedTable.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PagedTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/gpa-symbols */ "./node_modules/@gpa-gemstone/gpa-symbols/lib/index.js");
//******************************************************************************************************
//  PagedTable.tsx - Gbtc
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
//  02/18/2021 - Billy Ernest
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



function PagedTable(props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Timestamp'), 2), sortField = _a[0], setSortField = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(true), 2), ascending = _b[0], setAscending = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(0), 2), page = _c[0], setPage = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), tableData = _d[0], setTableData = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(50), 2), maxPages = _e[0], setMaxPages = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), toggle = _f[0], setToggle = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(null), 2), record = _g[0], setRecord = _g[1];
    var tableHeight = window.innerHeight - 270; // 50 + 100 + 70 + 50
    var maxRowCount = Math.floor(tableHeight / 65);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var data = __spreadArray([], __read(props.Data));
        data.sort(function (a, b) {
            if (a[sortField] > b[sortField])
                return (ascending ? 1 : -1);
            else if (a[sortField] === b[sortField])
                return 0;
            else
                return (ascending ? -1 : 1);
        });
        setTableData(data.slice(page * maxRowCount, (page + 1) * maxRowCount));
        setMaxPages(Math.ceil(data.length / maxRowCount) - 1);
    }, [props.Data, ascending, sortField]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setTableData(props.Data.slice(page * maxRowCount, (page + 1) * maxRowCount));
    }, [page]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var index = props.Data.findIndex(function (d) { var _a; return d.Timestamp === ((_a = props.Selected) === null || _a === void 0 ? void 0 : _a.Timestamp); });
        if (index >= 0) {
            var newPage = Math.floor(index / maxRowCount);
            setPage(newPage);
        }
    }, [props.Selected]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__.default, { tableClass: 'table', cols: [
                { key: 'Timestamp', field: 'Timestamp', label: 'Timestamp' },
                { key: 'Minimum', field: 'Minimum', label: 'Min', content: function (item, key, style) { return ((item === null || item === void 0 ? void 0 : item.Minimum.toString()) === 'NaN' ? 'NaN' : item.Minimum.toFixed(2)); } },
                { key: 'Average', field: 'Average', label: 'Avg', content: function (item, key, style) { return ((item === null || item === void 0 ? void 0 : item.Average.toString()) === 'NaN' ? 'NaN' : item.Average.toFixed(2)); } },
                { key: 'Maximum', field: 'Maximum', label: 'Max', content: function (item, key, style) { return ((item === null || item === void 0 ? void 0 : item.Maximum.toString()) === 'NaN' ? 'NaN' : item.Maximum.toFixed(2)); } },
                { key: 'QualityFlags', field: 'QualityFlags', label: 'Flagged', content: function (item, key, style) { return item.QualityFlags > 0 ? _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_2__.Flag : ''; } },
                {
                    key: null, label: '', content: function (item) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', onClick: function () { setRecord(item); setToggle(true); } }, _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_2__.Pencil); }
                }
            ], selected: function (record) { var _a; return record.Timestamp === ((_a = props.Selected) === null || _a === void 0 ? void 0 : _a.Timestamp); }, data: tableData, sortKey: sortField, onClick: function (data) { }, ascending: ascending, onSort: function (data) {
                if (data.colField === sortField)
                    setAscending(!ascending);
                else {
                    setSortField(data.colField);
                    setAscending(true);
                }
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'pull-right' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', title: 'Move back 10 pages', onClick: function () { return setPage((page >= 10 ? page - 10 : 0)); }, disabled: page <= 0 }, '<<'),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', title: 'Move back 1 page', onClick: function () { return setPage((page >= 1 ? page - 1 : 0)); }, disabled: page <= 0 }, '<'),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Page\u00A0"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { value: page + 1, type: 'number', onChange: function (evt) { return setPage(parseInt(evt.target.value) - 1); }, style: { width: 40 } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                "of\u00A0",
                maxPages + 1),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', title: 'Move forward 1 page', onClick: function () { return setPage((page <= maxPages ? page + 1 : maxPages)); }, disabled: page >= maxPages }, '>'),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', title: 'Move forward 10 pages', onClick: function () { return setPage((page <= maxPages - 10 ? page + 10 : maxPages)); }, disabled: page >= maxPages }, '>>')),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal", role: "dialog", style: { display: toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-dialog", role: "document" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-content mx-auto" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", { className: "modal-title" }, "Mark As Flagged"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "close", onClick: function () { return setToggle(false); } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "aria-hidden": "true" }, "\u00D7"))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { style: { listStyle: 'none' } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                                    "Time: ", record === null || record === void 0 ? void 0 :
                                    record.Timestamp),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                                    "Max: ", record === null || record === void 0 ? void 0 :
                                    record.Maximum),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                                    "Avg: ", record === null || record === void 0 ? void 0 :
                                    record.Average),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                                    "Min: ", record === null || record === void 0 ? void 0 :
                                    record.Minimum),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                                    "Flag: ",
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: 'checkbox', checked: ((record === null || record === void 0 ? void 0 : record.QualityFlags) / Math.pow(2, 4) & 1) !== 0, onChange: function (evt) { return setRecord(__assign(__assign({}, record), { QualityFlags: evt.target.checked ? record.QualityFlags + Math.pow(2, 4) : record.QualityFlags - Math.pow(2, 4) })); } }))))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                props.SetFlag(record);
                                setToggle(false);
                            } }, "Save"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-secondary", onClick: function () { return setToggle(false); } }, "Close")))))));
}


/***/ }),

/***/ "./wwwroot/TypeScript/Features/DataSets/ViewDataSet/ViewDataSet.tsx":
/*!**************************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/ViewDataSet/ViewDataSet.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewDataSet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataSetsSlice */ "./wwwroot/TypeScript/Features/DataSets/DataSetsSlice.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _PagedTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PagedTable */ "./wwwroot/TypeScript/Features/DataSets/ViewDataSet/PagedTable.tsx");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chart */ "./wwwroot/TypeScript/Features/DataSets/ViewDataSet/Chart.tsx");
/* harmony import */ var _Histogram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Histogram */ "./wwwroot/TypeScript/Features/DataSets/ViewDataSet/Histogram.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Constants */ "./wwwroot/TypeScript/Constants.ts");
//******************************************************************************************************
//  ViewDataSet.tsx - Gbtc
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








function ViewDataSet() {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)().id;
    var dataSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.SelectRecord);
    var wsStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.SelectDataSetsStatus);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), data = _a[0], setData = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(0), 2), dataSourceID = _b[0], setDataSourceID = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('0'), 2), channelID = _c[0], setChannelID = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), selectedData = _d[0], setSelectedData = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useReducer(function (s, _) { return s + 1; }, 0), 2), flag = _e[0], setFlag = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), toggle = _f[0], setToggle = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([{ Field: 'Average', Condition: '>', Value: 0, AndOr: 'None' }]), 2), criteria = _g[0], setCriteria = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), showFlagged = _h[0], setShowFlagged = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(null), 2), selectedPoint = _j[0], setSelectedPoint = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({}), 2), selectedChannels = _k[0], setSelectedChannels = _k[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setCriteria([{ Field: 'Average', Condition: '>', Value: 0, AndOr: 'None' }]);
    }, [toggle]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (wsStatus === 'unitiated' || wsStatus === 'changed') {
            dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.FetchDataSets)());
        }
        dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.SetRecordByID)(parseInt(id)));
    }, [dispatch, wsStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (dataSourceID === 0)
            setDataSourceID((_b = (_a = data[0]) === null || _a === void 0 ? void 0 : _a.DataSource.ID) !== null && _b !== void 0 ? _b : 0);
        if (channelID == '0')
            setChannelID(((_d = (_c = data[0]) === null || _c === void 0 ? void 0 : _c.Data) !== null && _d !== void 0 ? _d : [{ ID: '0' }])[0].ID.toString());
        var d = (_h = (_g = ((_f = (_e = data.find(function (ds) { return ds.DataSource.ID === dataSourceID; })) === null || _e === void 0 ? void 0 : _e.Data) !== null && _f !== void 0 ? _f : []).find(function (dd) { return dd.ID == channelID; })) === null || _g === void 0 ? void 0 : _g.Data) !== null && _h !== void 0 ? _h : [];
        setSelectedData(d);
    }, [data]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        (0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.GetDataSetDataFromIDB)(id).then(function (d) {
            setData(d);
        });
    }, [flag]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var _a, _b, _c, _d;
        var d = (_d = (_c = ((_b = (_a = data.find(function (ds) { return ds.DataSource.ID === dataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data) !== null && _b !== void 0 ? _b : []).find(function (dd) { return dd.ID == channelID; })) === null || _c === void 0 ? void 0 : _c.Data) !== null && _d !== void 0 ? _d : [];
        setSelectedData(d);
    }, [channelID]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var dataSource = data.find(function (d) { return d.DataSource.ID === dataSourceID; });
        if (dataSource == undefined)
            return;
        else if (dataSource.Data == undefined)
            return;
        if (dataSource.DataSource.Type === 'TrenDAPDB') {
            dataSource.Data.sort(function (a, b) {
                if (a.Meter + ' - ' + a.Name > b.Meter + ' - ' + b.Name)
                    return 1;
                else if (a.Meter + ' - ' + a.Name == b.Meter + ' - ' + b.Name)
                    return 0;
                else
                    return -1;
            });
        }
        else if (dataSource.DataSource.Type === 'OpenHistorian') {
            dataSource.Data.sort(function (a, b) {
                if (a.Device + ' - ' + a.Description > b.Device + ' - ' + b.Description)
                    return 1;
                else if (a.Device + ' - ' + a.Description == b.Device + ' - ' + b.Description)
                    return 0;
                else
                    return -1;
            });
        }
        else if (dataSource.DataSource.Type === 'Sapphire') {
            dataSource.Data.sort(function (a, b) {
                if (a.Meter + ' - ' + a.Name > b.Meter + ' - ' + b.Name)
                    return 1;
                else if (a.Meter + ' - ' + a.Name == b.Meter + ' - ' + b.Name)
                    return 0;
                else
                    return -1;
            });
        }
        setChannelID(dataSource.Data[0].ID.toString());
        setSelectedChannels(dataSource);
    }, [dataSourceID]);
    function FlagData(record) {
        (0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.UpdateDataSetData)(dataSet, dataSourceID, channelID, record).then(function () { return setFlag(1); });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { padding: 10 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, dataSet.Name),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'row' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { paddingLeft: 15, width: '50%' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Data Source"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: 'form-control', value: dataSourceID, onChange: function (evt) { return setDataSourceID(parseInt(evt.target.value)); } }, data.map(function (d) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: d.DataSource.ID, value: d.DataSource.ID }, d.DataSource.Name); }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Channel"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: 'form-control', value: channelID, onChange: function (evt) { return setChannelID(evt.target.value); } }, Options(selectedChannels))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col-2' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-primary', style: { position: 'relative', top: 30, marginRight: 5 }, onClick: function () { } }, "Add Virtual"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-primary', style: { position: 'relative', top: 30 }, onClick: function () { /*setRecord(item); ;*/ setToggle(true); } }, "Flag Data"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'row' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "form-check", style: { position: 'relative', top: 5, left: 5 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "checkbox", className: "form-check-input", value: showFlagged.toString(), checked: showFlagged, onChange: function (evt) { return setShowFlagged(evt.target.checked); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-check-label" }, "Show Flagged")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chart__WEBPACK_IMPORTED_MODULE_4__.default, { Data: (showFlagged ? selectedData : selectedData.filter(function (sd) { return sd.QualityFlags == 0; })), SetSelected: setSelectedPoint }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Histogram__WEBPACK_IMPORTED_MODULE_5__.default, { Data: (showFlagged ? selectedData : selectedData.filter(function (sd) { return sd.QualityFlags == 0; })) })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PagedTable__WEBPACK_IMPORTED_MODULE_3__.default, { Data: selectedData, SetFlag: FlagData, Selected: selectedPoint }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal", role: "dialog", style: { display: toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-dialog", role: "document" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-content mx-auto" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", { className: "modal-title" }, "Mark As Flagged"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "close", onClick: function () { return setToggle(false); } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "aria-hidden": "true" }, "\u00D7"))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Criteria"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { style: { listStyle: 'none' } }, criteria.map(function (c, Index) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(FlagCriteria, __assign({ key: Index }, c, { Update: function (record) {
                                var newCrits = __spreadArray([], __read(criteria));
                                newCrits[Index] = record;
                                setCriteria(newCrits);
                            }, Add: function () {
                                var newCrits = __spreadArray([], __read(criteria));
                                newCrits[Index].AndOr = 'And';
                                newCrits.push({ Field: 'Average', Condition: '>', Value: 0, AndOr: 'None' });
                                setCriteria(newCrits);
                            } })); }))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary pull-left", onClick: function () {
                                var points = selectedData.filter(function (f) { return (f.QualityFlags / Math.pow(2, 4) & 1) !== 0; });
                                points.forEach(function (p) { return p.QualityFlags = p.QualityFlags - Math.pow(2, 4); });
                                FlagData(points);
                                setToggle(false);
                            } }, "Unflag All"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                var points = selectedData.filter(function (f) {
                                    var pre = criteria.map(function (c) {
                                        if (c.Condition == '<')
                                            return { Value: f[c.Field] < c.Value, AndOr: c.AndOr };
                                        else if (c.Condition == '<=')
                                            return { Value: f[c.Field] <= c.Value, AndOr: c.AndOr };
                                        else if (c.Condition == '>=')
                                            return { Value: f[c.Field] >= c.Value, AndOr: c.AndOr };
                                        else if (c.Condition == '>')
                                            return { Value: f[c.Field] > c.Value, AndOr: c.AndOr };
                                        else
                                            return { Value: f[c.Field] == c.Value, AndOr: c.AndOr };
                                    });
                                    return pre.reduce(function (a, b, i, source) {
                                        if (i == 0)
                                            return b.Value;
                                        else if (source[i - 1].AndOr == 'Or')
                                            return a || b.Value;
                                        else
                                            return a && b.Value;
                                    }, undefined);
                                });
                                points.forEach(function (p) { return p.QualityFlags = p.QualityFlags + Math.pow(2, 4); });
                                FlagData(points);
                                setToggle(false);
                            } }, "Process"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-secondary", onClick: function () { return setToggle(false); } }, "Close")))))));
}
var Options = function (dataSource) {
    if (dataSource == undefined)
        return null;
    else if (dataSource.Data == undefined)
        return null;
    if (dataSource.DataSource.Type === 'TrenDAPDB') {
        dataSource.Data.sort(function (a, b) {
            if (a.Meter + ' - ' + a.Name > b.Meter + ' - ' + b.Name)
                return 1;
            else if (a.Meter + ' - ' + a.Name == b.Meter + ' - ' + b.Name)
                return 0;
            else
                return -1;
        });
        return dataSource.Data.map(function (channel) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TrenDAPDBChannel, { key: channel.ID, channel: channel }); });
    }
    else if (dataSource.DataSource.Type === 'Sapphire') {
        dataSource.Data.sort(function (a, b) {
            if (a.Meter + ' - ' + a.Name > b.Meter + ' - ' + b.Name)
                return 1;
            else if (a.Meter + ' - ' + a.Name == b.Meter + ' - ' + b.Name)
                return 0;
            else
                return -1;
        });
        return dataSource.Data.map(function (channel) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SapphireChannel, { key: channel.ID, channel: channel }); });
    }
    else if (dataSource.DataSource.Type === 'OpenHistorian') {
        dataSource.Data.sort(function (a, b) {
            if (a.Device + ' - ' + a.Description > b.Device + ' - ' + b.Description)
                return 1;
            else if (a.Device + ' - ' + a.Description == b.Device + ' - ' + b.Description)
                return 0;
            else
                return -1;
        });
        return dataSource.Data.map(function (channel) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(OpenHistorianChannel, { key: channel.ID, channel: channel }); });
    }
    else
        return dataSource.Data.map(function (channel) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(OtherChannel, { key: channel.ID, channel: channel }); });
};
var TrenDAPDBChannel = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: props.channel.ID }, props.channel.Meter + ' - ' + props.channel.Name);
};
var SapphireChannel = function (props) {
    if (props.channel.Characteristic.indexOf('HRMS') >= 0)
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: props.channel.ID }, props.channel.Meter + " - " + props.channel.Name + " Harmonic: " + props.channel.Harmonic);
    else
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: props.channel.ID }, props.channel.Meter + ' - ' + props.channel.Name);
};
var OpenHistorianChannel = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: props.channel.ID }, props.channel.Device + ' - ' + props.channel.Description);
};
var OtherChannel = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: props.channel['ID'] }, props.channel['Name']);
};
var FlagCriteria = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Field), 2), field = _a[0], setField = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Condition), 2), condition = _b[0], setCondition = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Value), 2), value = _c[0], setValue = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.AndOr), 2), andOr = _d[0], setAndOr = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        props.Update({ Field: field, Condition: condition, Value: value, AndOr: andOr });
    }, [field, condition, value, andOr]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setAndOr(props.AndOr);
    }, [props.AndOr]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setField(props.Field);
    }, [props.Field]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setCondition(props.Condition);
    }, [props.Condition]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setValue(props.Value);
    }, [props.Value]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'row' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: 'form-control', value: field, onChange: function (evt) { return setField(evt.target.value); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Maximum' }, "Max"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Average' }, "Avg"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Minimum' }, "Min"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: 'form-control', value: condition, onChange: function (evt) { return setCondition(evt.target.value); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: '<' }, '<'),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: '<=' }, '<='),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: '==' }, '=='),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: '>=' }, '>='),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: '>' }, '>'))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: 'form-control', type: 'number', value: value, onChange: function (evt) { return setValue(parseFloat(evt.target.value)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' }, props.AndOr == 'None' ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', onClick: function () { return props.Add(); } }, _Constants__WEBPACK_IMPORTED_MODULE_6__.Plus) :
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: 'form-control', value: andOr, onChange: function (evt) { return setAndOr(evt.target.value); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'And' }, "And"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Or' }, "Or"))))));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvZ3BhLXN5bWJvbHMvbGliL2luZGV4LmpzIiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVmlld0RhdGFTZXQvQ2hhcnQudHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVmlld0RhdGFTZXQvSGlzdG9ncmFtLnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L1BhZ2VkVGFibGUudHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVmlld0RhdGFTZXQvVmlld0RhdGFTZXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxvQkFBb0IsR0FBRyxvQkFBb0IsR0FBRyx5QkFBeUIsR0FBRyxtQkFBbUIsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxjQUFjLEdBQUcsYUFBYSxHQUFHLHVCQUF1QixHQUFHLG9CQUFvQixHQUFHLG9CQUFvQixHQUFHLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxlQUFlLEdBQUcsWUFBWSxHQUFHLGNBQWMsR0FBRyxlQUFlLEdBQUcsZUFBZSxH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LEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFHLFFBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsb0NBQU8sRUFBOEIsQ0FBQyxDQUFDLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxpREFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQ3ZTLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFH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Qyw2REFBUSxLQUFLLEVBQUMsSUFBSSxTQUFZLENBQ3pCLENBQ1YsQ0FDTCxDQUNMLENBQ1I7QUFDTCxDQUFDIiwiZmlsZSI6IlZpZXdEYXRhU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgaW5kZXgudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzMwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUXVlc3Rpb25tYXJrID0gZXhwb3J0cy5SZXdpbmRCdXR0b24gPSBleHBvcnRzLkZhc3RGb3J3YXJkQnV0dG9uID0gZXhwb3J0cy5QYXVzZUJ1dHRvbiA9IGV4cG9ydHMuU3RvcEJ1dHRvbiA9IGV4cG9ydHMuUGxheUJ1dHRvbiA9IGV4cG9ydHMuU2Nyb2xsID0gZXhwb3J0cy5Ib3VzZSA9IGV4cG9ydHMuTWFnbmlmeWluZ0dsYXNzID0gZXhwb3J0cy5Gb3VyV2F5QXJyb3cgPSBleHBvcnRzLklucHV0TnVtYmVycyA9IGV4cG9ydHMuRE5BID0gZXhwb3J0cy5Eb3duQXJyb3cgPSBleHBvcnRzLlJpZ2h0QXJyb3cgPSBleHBvcnRzLkxlZnRBcnJvdyA9IGV4cG9ydHMuVXBBcnJvdyA9IGV4cG9ydHMuRmxhZyA9IGV4cG9ydHMuV3JlbmNoID0gZXhwb3J0cy5TcGlubmVyID0gZXhwb3J0cy5XYXJuaW5nID0gZXhwb3J0cy5QbHVzID0gZXhwb3J0cy5Dcm9zc01hcmsgPSBleHBvcnRzLlRyYXNoQ2FuID0gZXhwb3J0cy5QZW5jaWwgPSBleHBvcnRzLkhlYXZ5Q2hlY2tNYXJrID0gdm9pZCAwO1xyXG5leHBvcnRzLkhlYXZ5Q2hlY2tNYXJrID0gJ+KclO+4jyc7XHJcbmV4cG9ydHMuUGVuY2lsID0gJ+Kcj++4jyc7XHJcbmV4cG9ydHMuVHJhc2hDYW4gPSAn8J+Xke+4jyc7XHJcbmV4cG9ydHMuQ3Jvc3NNYXJrID0gJ+KdjCc7XHJcbmV4cG9ydHMuUGx1cyA9ICfinpUnO1xyXG5leHBvcnRzLldhcm5pbmcgPSAn4pqg77iPJztcclxuZXhwb3J0cy5TcGlubmVyID0gJ/CflIQnO1xyXG5leHBvcnRzLldyZW5jaCA9ICfwn5SnJztcclxuZXhwb3J0cy5GbGFnID0gJ/CfmqknO1xyXG5leHBvcnRzLlVwQXJyb3cgPSAn4qyG77iPJztcclxuZXhwb3J0cy5MZWZ0QXJyb3cgPSAn4qyFJztcclxuZXhwb3J0cy5SaWdodEFycm93ID0gJ+KeoSc7XHJcbmV4cG9ydHMuRG93bkFycm93ID0gJ+Ksh++4jyc7XHJcbmV4cG9ydHMuRE5BID0gJ/Cfp6wnO1xyXG5leHBvcnRzLklucHV0TnVtYmVycyA9ICfwn5SiJztcclxuZXhwb3J0cy5Gb3VyV2F5QXJyb3cgPSAn4pipJztcclxuZXhwb3J0cy5NYWduaWZ5aW5nR2xhc3MgPSAn8J+UjSc7XHJcbmV4cG9ydHMuSG91c2UgPSAn8J+PoCc7XHJcbmV4cG9ydHMuU2Nyb2xsID0gJ/Cfk5wnO1xyXG5leHBvcnRzLlBsYXlCdXR0b24gPSAn4pa277iPJztcclxuZXhwb3J0cy5TdG9wQnV0dG9uID0gJ+KPue+4jyc7XHJcbmV4cG9ydHMuUGF1c2VCdXR0b24gPSAn4o+477iPJztcclxuZXhwb3J0cy5GYXN0Rm9yd2FyZEJ1dHRvbiA9ICfij6knO1xyXG5leHBvcnRzLlJld2luZEJ1dHRvbiA9ICfij6onO1xyXG5leHBvcnRzLlF1ZXN0aW9ubWFyayA9ICc/JztcclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbnN0YW50cy50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8zMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuLy8gZW1vamlzXHJcbmNvbnN0IEhlYXZ5Q2hlY2tNYXJrID0gJ+KclO+4jyc7XHJcbmNvbnN0IFBlbmNpbCA9ICfinI/vuI8nO1xyXG5jb25zdCBUcmFzaENhbiA9ICfwn5eR77iPJztcclxuY29uc3QgQ3Jvc3NNYXJrID0gJ+KdjCc7XHJcbmNvbnN0IFBsdXMgPSAn4p6VJztcclxuY29uc3QgV2FybmluZyA9ICfimqDvuI8nO1xyXG5jb25zdCBTcGlubmVyID0gJ/CflIQnO1xyXG5jb25zdCBXcmVuY2ggPSAn8J+Upyc7XHJcblxyXG5leHBvcnQgeyBIZWF2eUNoZWNrTWFyaywgUGVuY2lsLCBUcmFzaENhbiwgQ3Jvc3NNYXJrLCBQbHVzLCBXYXJuaW5nLCBTcGlubmVyLCBXcmVuY2ggfTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ2hhcnQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzE4LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0KHByb3BzOiB7IERhdGE6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10sIFNldFNlbGVjdGVkOiAocmVjb3JkOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludCkgPT4gdm9pZCB9KSB7XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbY2hhcnRBY3Rpb24sIHNldENoYXJ0QWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuQ2hhcnRBY3Rpb24+KCdQYW4nKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gSW5pdGlhbGl6ZShwcm9wcy5EYXRhKSwgW3Byb3BzLkRhdGFdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBIYW5kbGVSZXNldCgpIHtcclxuICAgICAgICAvL3NldFJlY29yZChyZWNvcmQuQ2FsY3VsYXRlQXhpc1JhbmdlKCd4JykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemUoZGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSkge1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHsgYm90dG9tOiA1MCwgbGVmdDogNzUsIHRvcDogNjUsIHJpZ2h0OiA0MCB9O1xyXG5cclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gMjcwKS8yO1xyXG4gICAgICAgIGNvbnN0IHN2Z1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gMjAwKSAvIDI7XHJcblxyXG4gICAgICAgIGQzLnNlbGVjdChyZWYuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKVxyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChyZWYuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc3ZnV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzdmdIZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVVdGMoKVxyXG4gICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudChwcm9wcy5EYXRhLCBkPT4gbW9tZW50LnV0YyhkLlRpbWVzdGFtcCkpKVxyXG4gICAgICAgICAgICAucmFuZ2UoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCAtIG1hcmdpbi5yaWdodF0pO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLnhheGlzJykucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd4YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgKyBcIilcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneGF4aXMnLCB0cnVlKS5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHN2Z1dpZHRoIC8gMikgKyBcIixcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tIC8gMykgKyBcIilcIilcclxuICAgICAgICAgICAgLnRleHQoXCJUaW1lXCIpXHJcblxyXG4gICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5yYW5nZShbc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pXHJcbiAgICAgICAgICAgIC5kb21haW4oW2QzLm1pbihwcm9wcy5EYXRhLCBkID0+IE1hdGgubWluKChpc05hTihkLk1pbmltdW0pID8gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZIDogZC5NaW5pbXVtKSwgKGlzTmFOKGQuQXZlcmFnZSkgPyBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgOiBkLkF2ZXJhZ2UpLCAoaXNOYU4oZC5NYXhpbXVtKSA/IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSA6IGQuTWF4aW11bSkpKSwgZDMubWF4KHByb3BzLkRhdGEsIGQgPT4gTWF0aC5tYXgoKGlzTmFOKGQuTWluaW11bSkgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOiBkLk1pbmltdW0pLCAoaXNOYU4oZC5BdmVyYWdlKSA/IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA6IGQuQXZlcmFnZSksIChpc05hTihkLk1heGltdW0pID8gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIDogZC5NYXhpbXVtKSkpXSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cueWF4aXMnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB5QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ3lheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAobWFyZ2luLmxlZnQpICsgXCIsMClcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkudGlja3MoTWF0aC5mbG9vcihzdmdIZWlnaHQgLyA1MCkgKyAxKS50aWNrRm9ybWF0KCh2YWx1ZTogbnVtYmVyKSA9PiBkMy5mb3JtYXQoXCJ+c1wiKSh2YWx1ZSkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKCd5YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiQ2hhbm5lbCBPdXRwdXRcIik7XHJcbiAgICAgICAgdGV4dC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MCkgdHJhbnNsYXRlKC1cIiArIHN2Z0hlaWdodCAvIDIgKyBcIixcIiArICgobWFyZ2luLmxlZnQpIC8gMykgKyBcIilcIikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy5tYXgnKS5kYXRhKFtwcm9wcy5EYXRhLmZpbHRlcihkPT4gIWlzTmFOKGQuTWF4aW11bSkpXSApLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbWF4JykuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ3JlZCcpLmF0dHIoJ2ZpbGwnLCAnbm9uZScpLmF0dHIoJ2QnLCBkMy5saW5lPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PigpLngoZCA9PiB4KG1vbWVudC51dGMoZC5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSkpLnkoZCA9PiB5KGQuTWF4aW11bSkpKVxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cubWluJykuZGF0YShbcHJvcHMuRGF0YS5maWx0ZXIoZCA9PiAhaXNOYU4oZC5NaW5pbXVtKSldICkuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdtaW4nKS5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdzdHJva2UnLCAncmVkJykuYXR0cignZmlsbCcsICdub25lJykuYXR0cignZCcsIGQzLmxpbmU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+KCkueChkID0+IHgobW9tZW50LnV0YyhkLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpKSkueShkID0+IHkoZC5NaW5pbXVtKSkpXHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IHN2Zy5zZWxlY3RBbGwoXCJnLnBvaW50c1wiKVxyXG4gICAgICAgICAgICAuZGF0YShbcHJvcHMuRGF0YS5maWx0ZXIoZCA9PiAhaXNOYU4oZC5BdmVyYWdlKSldKVxyXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludHMnKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzLnNlbGVjdEFsbCgncG9pbnQnKS5kYXRhKGQgPT4gZCkuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludCcpO1xyXG4gICAgICAgIHBvaW50LmFwcGVuZChcImNpcmNsZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgMy41KVxyXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KG1vbWVudC51dGMoZC5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSk7IH0pXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoZC5BdmVyYWdlKTsgfSlcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIChlLGQ6IGFueSkgPT4geyBwcm9wcy5TZXRTZWxlY3RlZChkKSB9KVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJyk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gc3R5bGU9e3sgdXNlclNlbGVjdDogJ25vbmUnIH19PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBIaXN0b2dyYW0udHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzE4LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlzdG9ncmFtKHByb3BzOiB7IERhdGE6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10gfSkge1xyXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGU8J01pbmltdW0nIHwgJ0F2ZXJhZ2UnIHwgJ01heGltdW0nPignQXZlcmFnZScpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IEluaXRpYWxpemUocHJvcHMuRGF0YSksIFtwcm9wcy5EYXRhLCB0eXBlXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZShkYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdKSB7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luID0geyBib3R0b206IDUwLCBsZWZ0OiA3NSwgdG9wOiA2NSwgcmlnaHQ6IDQwIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNzApIC8gMjtcclxuICAgICAgICBjb25zdCBzdmdXaWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIDIwMCkgLyAyO1xyXG5cclxuICAgICAgICBkMy5zZWxlY3QocmVmLmN1cnJlbnQpLnNlbGVjdEFsbCgnc3ZnJykucmVtb3ZlKClcclxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QocmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXHJcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHN2Z1dpZHRoKVxyXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0Jywgc3ZnSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgbGV0IGhpc3RvZ3JhbSA9IGQzLmhpc3RvZ3JhbTxudW1iZXIsIG51bWJlcj4oKVxyXG4gICAgICAgICAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQ7IH0pICAgLy8gSSBuZWVkIHRvIGdpdmUgdGhlIHZlY3RvciBvZiB2YWx1ZVxyXG4gICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudChwcm9wcy5EYXRhLmZpbHRlcihkID0+ICFpc05hTihkW3R5cGVdKSksIGQgPT4gZFt0eXBlXSkgYXMgW251bWJlciwgbnVtYmVyXSkgIC8vIHRoZW4gdGhlIGRvbWFpbiBvZiB0aGUgZ3JhcGhpY1xyXG4gICAgICAgICAgICAudGhyZXNob2xkcyg0MCk7IC8vIHRoZW4gdGhlIG51bWJlcnMgb2YgYmluc1xyXG5cclxuICAgICAgICBjb25zdCBiaW5zID0gaGlzdG9ncmFtKHByb3BzLkRhdGEubWFwKGQgPT4gZFt0eXBlXSkuZmlsdGVyKGQgPT4gIWlzTmFOKGQpKSk7XHJcblxyXG4gICAgICAgIGxldCB5TWF4ID0gTWF0aC5tYXgoLi4uYmlucy5tYXAoYiA9PiBiLmxlbmd0aCkpO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAuZG9tYWluKFtNYXRoLm1pbiguLi5iaW5zLm1hcChhID0+IGEueDApKSwgTWF0aC5tYXgoLi4uYmlucy5tYXAoYSA9PiBhLngxKSldKSAgICAgLy8gY2FuIHVzZSB0aGlzIGluc3RlYWQgb2YgMTAwMCB0byBoYXZlIHRoZSBtYXggb2YgZGF0YTogZDMubWF4KGRhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuICtkLnByaWNlIH0pXHJcbiAgICAgICAgICAgIC5yYW5nZShbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0XSk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgKyBcIilcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc3ZnV2lkdGggLyAyKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNoYW5uZWwgT3V0cHV0XCIpXHJcblxyXG4gICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5yYW5nZShbc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pXHJcbiAgICAgICAgICAgIC5kb21haW4oWzAsIHlNYXhdKTsgICAvLyBkMy5oaXN0IGhhcyB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBZIGF4aXMgb2J2aW91c2x5XHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLDApXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcclxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBzdmdIZWlnaHQgLyAyICsgXCIsXCIgKyBtYXJnaW4ubGVmdCAvIDMgKyBcIilcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLnRleHQoXCJDb3VudHNcIilcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcclxuICAgICAgICAgICAgLmRhdGEoYmlucylcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDEpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkKSA9PiBgdHJhbnNsYXRlKCR7eChkLngwKX0sJHt5KGQubGVuZ3RoKX0pYClcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4gKHgoZC54MSkgLSB4KGQueDApID4gMiA/IHgoZC54MSkgLSB4KGQueDApIDogMikgLSAxKVxyXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20pIC0geShkLmxlbmd0aCkpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCkgPT4gJ2RhcmtibHVlJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e3R5cGV9IGNoZWNrZWQ9e3R5cGUgPT0gJ01pbmltdW0nfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZSgnTWluaW11bScpIH0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5NaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXt0eXBlID09ICdBdmVyYWdlJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldFR5cGUoJ0F2ZXJhZ2UnKX0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5Bdmc8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3R5cGUgPT0gJ01heGltdW0nfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZSgnTWF4aW11bScpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5NYXg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgUGFnZWRUYWJsZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IHsgUGVuY2lsLCBGbGFnIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9ncGEtc3ltYm9scyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZWRUYWJsZShwcm9wczogeyBEYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdLCBTZWxlY3RlZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQsU2V0RmxhZzogKHJlY29yZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQgKSA9PiB2b2lkfSkge1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PignVGltZXN0YW1wJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW3RhYmxlRGF0YSwgc2V0VGFibGVEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFttYXhQYWdlcywgc2V0TWF4UGFnZXNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPig1MCk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCB0YWJsZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDI3MDsgLy8gNTAgKyAxMDAgKyA3MCArIDUwXHJcbiAgICBjb25zdCBtYXhSb3dDb3VudCA9IE1hdGguZmxvb3IodGFibGVIZWlnaHQgLyA2NSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByb3BzLkRhdGFdO1xyXG4gICAgICAgIGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYVtzb3J0RmllbGRdID4gYltzb3J0RmllbGRdKSByZXR1cm4gKGFzY2VuZGluZyA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFbc29ydEZpZWxkXSA9PT0gYltzb3J0RmllbGRdKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gKGFzY2VuZGluZyA/IC0xIDogMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGFibGVEYXRhKGRhdGEuc2xpY2UocGFnZSAqIG1heFJvd0NvdW50LCAocGFnZSArIDEpICogbWF4Um93Q291bnQpKTtcclxuICAgICAgICBzZXRNYXhQYWdlcyhNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBtYXhSb3dDb3VudCkgLSAxKTtcclxuICAgIH0sIFtwcm9wcy5EYXRhLCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRhYmxlRGF0YShwcm9wcy5EYXRhLnNsaWNlKHBhZ2UgKiBtYXhSb3dDb3VudCwgKHBhZ2UgKyAxKSAqIG1heFJvd0NvdW50KSk7XHJcbiAgICB9LCBbcGFnZV0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9wcy5EYXRhLmZpbmRJbmRleChkID0+IGQuVGltZXN0YW1wID09PSBwcm9wcy5TZWxlY3RlZD8uVGltZXN0YW1wKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3UGFnZSA9IE1hdGguZmxvb3IoaW5kZXggLyBtYXhSb3dDb3VudCk7XHJcbiAgICAgICAgICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLlNlbGVjdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGFibGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+IHRhYmxlQ2xhc3M9J3RhYmxlJ1xyXG4gICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVGltZXN0YW1wJywgZmllbGQ6ICdUaW1lc3RhbXAnLCBsYWJlbDogJ1RpbWVzdGFtcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01pbmltdW0nLCBmaWVsZDogJ01pbmltdW0nLCBsYWJlbDogJ01pbicsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiAoaXRlbT8uTWluaW11bS50b1N0cmluZygpID09PSAnTmFOJyA/ICdOYU4nIDogaXRlbS5NaW5pbXVtLnRvRml4ZWQoMikpfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0F2ZXJhZ2UnLCBmaWVsZDogJ0F2ZXJhZ2UnLCBsYWJlbDogJ0F2ZycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiAoaXRlbT8uQXZlcmFnZS50b1N0cmluZygpID09PSAnTmFOJyA/ICdOYU4nIDogaXRlbS5BdmVyYWdlLnRvRml4ZWQoMikpfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01heGltdW0nLCBmaWVsZDogJ01heGltdW0nLCBsYWJlbDogJ01heCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiAoaXRlbT8uTWF4aW11bS50b1N0cmluZygpID09PSAnTmFOJyA/ICdOYU4nIDogaXRlbS5NYXhpbXVtLnRvRml4ZWQoMikpfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1F1YWxpdHlGbGFncycsIGZpZWxkOiAnUXVhbGl0eUZsYWdzJywgbGFiZWw6ICdGbGFnZ2VkJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW0uUXVhbGl0eUZsYWdzID4gMCA/IEZsYWcgOiAnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG51bGwsIGxhYmVsOiAnJywgY29udGVudDogKGl0ZW0pID0+IDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IHsgc2V0UmVjb3JkKGl0ZW0pOyBzZXRUb2dnbGUodHJ1ZSk7IH0gfT57UGVuY2lsfTwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmVjb3JkID0+IHJlY29yZC5UaW1lc3RhbXAgPT09IHByb3BzLlNlbGVjdGVkPy5UaW1lc3RhbXAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17dGFibGVEYXRhfVxyXG4gICAgICAgICAgICAgICAgc29ydEtleT17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGRhdGEpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgb25Tb3J0PXsoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvbEZpZWxkID09PSBzb3J0RmllbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZGF0YS5jb2xGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B1bGwtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgdGl0bGU9J01vdmUgYmFjayAxMCBwYWdlcycgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocGFnZSA+PSAxMCA/IHBhZ2UgLSAxMCA6IDApKX0gZGlzYWJsZWQ9e3BhZ2UgPD0gMH0+eyc8PCd9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyB0aXRsZT0nTW92ZSBiYWNrIDEgcGFnZScgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocGFnZSA+PSAxID8gcGFnZSAtIDEgOiAwKSl9IGRpc2FibGVkPXtwYWdlIDw9IDB9PnsnPCd9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5QYWdlJm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwYWdlICsgMX0gdHlwZT0nbnVtYmVyJyBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UGFnZShwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSAtIDEpfSBzdHlsZT17e3dpZHRoOiA0MH19IC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5vZiZuYnNwO3sgbWF4UGFnZXMgKyAxfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIHRpdGxlPSdNb3ZlIGZvcndhcmQgMSBwYWdlJyBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwYWdlIDw9IG1heFBhZ2VzID8gcGFnZSArIDEgOiBtYXhQYWdlcykpfSBkaXNhYmxlZD17cGFnZSA+PSBtYXhQYWdlc30+eyc+J308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIHRpdGxlPSdNb3ZlIGZvcndhcmQgMTAgcGFnZXMnIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKHBhZ2UgPD0gbWF4UGFnZXMgLSAxMCA/IHBhZ2UgKyAxMCA6IG1heFBhZ2VzKSl9IGRpc2FibGVkPXtwYWdlID49IG1heFBhZ2VzfT57Jz4+J308L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiIHN0eWxlPXt7IGRpc3BsYXk6IHRvZ2dsZSA/ICdibG9jaycgOiAnbm9uZScsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40KScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5NYXJrIEFzIEZsYWdnZWQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtcImNsb3NlXCJ9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGU6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGltZToge3JlY29yZD8uVGltZXN0YW1wfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NYXg6IHtyZWNvcmQ/Lk1heGltdW19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkF2Zzoge3JlY29yZD8uQXZlcmFnZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWluOiB7cmVjb3JkPy5NaW5pbXVtfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GbGFnOiA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9eyhyZWNvcmQ/LlF1YWxpdHlGbGFncyAvIE1hdGgucG93KDIsIDQpICYgMSkgIT09IDB9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQoeyAuLi5yZWNvcmQsIFF1YWxpdHlGbGFnczogZXZ0LnRhcmdldC5jaGVja2VkID8gcmVjb3JkLlF1YWxpdHlGbGFncyArIE1hdGgucG93KDIsIDQpIDogcmVjb3JkLlF1YWxpdHlGbGFncyAtIE1hdGgucG93KDIsIDQpfSkgfS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldEZsYWcocmVjb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFZpZXdEYXRhU2V0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8xNy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVcGRhdGVEYXRhU2V0RGF0YSwgU2VsZWN0RGF0YVNldHNTdGF0dXMsIEZldGNoRGF0YVNldHMsIFNlbGVjdFJlY29yZCwgU2V0UmVjb3JkQnlJRCwgR2V0RGF0YVNldERhdGFGcm9tSURCLCBVcGRhdGVEYXRhU2V0RGF0YUZsYWcgfSBmcm9tICcuLi9EYXRhU2V0c1NsaWNlJ1xyXG5pbXBvcnQgeyAgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUGFnZWRUYWJsZSBmcm9tICcuL1BhZ2VkVGFibGUnO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9DaGFydCc7XHJcbmltcG9ydCBIaXN0b2dyYW0gZnJvbSAnLi9IaXN0b2dyYW0nO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlcnMgfSBmcm9tICdAZ3BhLWdlbXN0b25lL2dwYS1zeW1ib2xzJztcclxuaW1wb3J0IHsgUGx1cyB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3RGF0YVNldCgpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtczx7aWR9PigpO1xyXG4gICAgY29uc3QgZGF0YVNldCA9IHVzZVNlbGVjdG9yKFNlbGVjdFJlY29yZClcclxuICAgIGNvbnN0IHdzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHNTdGF0dXMpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pRGF0YVNldFJldHVybltdPihbXSk7XHJcbiAgICBjb25zdCBbZGF0YVNvdXJjZUlELCBzZXREYXRhU291cmNlSURdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtjaGFubmVsSUQsIHNldENoYW5uZWxJRF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcwJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWREYXRhLCBzZXRTZWxlY3RlZERhdGFdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXT4oW10pO1xyXG4gICAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gUmVhY3QudXNlUmVkdWNlcigocyxfKSA9PiBzICsgMSwgMCk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2NyaXRlcmlhLCBzZXRDcml0ZXJpYV0gPSBSZWFjdC51c2VTdGF0ZTx7IEZpZWxkOiBhbnksIENvbmRpdGlvbjogYW55LCBWYWx1ZTogbnVtYmVyLCBBbmRPciB9W10+KFt7IEZpZWxkOiAnQXZlcmFnZScsIENvbmRpdGlvbjogJz4nLCBWYWx1ZTogMCwgQW5kT3I6ICdOb25lJyB9XSk7XHJcbiAgICBjb25zdCBbc2hvd0ZsYWdnZWQsIHNldFNob3dGbGFnZ2VkXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFBvaW50LCBzZXRTZWxlY3RlZFBvaW50XSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PihudWxsKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZENoYW5uZWxzLCBzZXRTZWxlY3RlZENoYW5uZWxzXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaURhdGFTZXRSZXR1cm4+KHt9IGFzIFRyZW5EQVAuaURhdGFTZXRSZXR1cm4gKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldENyaXRlcmlhKFt7IEZpZWxkOiAnQXZlcmFnZScsIENvbmRpdGlvbjogJz4nLCBWYWx1ZTogMCwgQW5kT3I6ICdOb25lJyB9XSk7XHJcbiAgICB9LCBbdG9nZ2xlXSk7XHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdzU3RhdHVzID09PSAndW5pdGlhdGVkJyB8fCB3c1N0YXR1cyA9PT0gJ2NoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNldHMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaChTZXRSZWNvcmRCeUlEKHBhcnNlSW50KGlkKSkpO1xyXG4gICAgfSwgW2Rpc3BhdGNoLCB3c1N0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoZGF0YVNvdXJjZUlEID09PSAwKVxyXG4gICAgICAgICAgICBzZXREYXRhU291cmNlSUQoZGF0YVswXT8uRGF0YVNvdXJjZS5JRCA/PyAwKTtcclxuICAgICAgICBpZihjaGFubmVsSUQgPT0gJzAnKVxyXG4gICAgICAgICAgICBzZXRDaGFubmVsSUQoKGRhdGFbMF0/LkRhdGEgPz8gW3sgSUQ6JzAnIH1dKVswXS5JRC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZCA9IChkYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gZGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXSkuZmluZChkZCA9PiBkZC5JRCA9PSBjaGFubmVsSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIHNldFNlbGVjdGVkRGF0YShkKTtcclxuICAgIH0sIFtkYXRhXSk7XHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgR2V0RGF0YVNldERhdGFGcm9tSURCKGlkKS50aGVuKGQgPT4ge1xyXG4gICAgICAgICAgICBzZXREYXRhKGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2ZsYWddKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGQgPSAoZGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT09IGRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW10pLmZpbmQoZGQgPT4gZGQuSUQgPT0gY2hhbm5lbElEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBzZXRTZWxlY3RlZERhdGEoZCk7XHJcbiAgICAgICAgXHJcbiAgICB9LCBbY2hhbm5lbElEXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gZGF0YS5maW5kKGQgPT4gZC5EYXRhU291cmNlLklEID09PSBkYXRhU291cmNlSUQpO1xyXG4gICAgICAgIGlmIChkYXRhU291cmNlID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKGRhdGFTb3VyY2UuRGF0YSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2UuRGF0YVNvdXJjZS5UeXBlID09PSAnVHJlbkRBUERCJykge1xyXG4gICAgICAgICAgICAoZGF0YVNvdXJjZS5EYXRhIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGFbXSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA+IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhLk1ldGVyICsgJyAtICcgKyBhLk5hbWUgPT0gYi5NZXRlciArICcgLSAnICsgYi5OYW1lKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YVNvdXJjZS5EYXRhU291cmNlLlR5cGUgPT09ICdPcGVuSGlzdG9yaWFuJykge1xyXG4gICAgICAgICAgICAoZGF0YVNvdXJjZS5EYXRhIGFzIFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm5bXSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEuRGV2aWNlICsgJyAtICcgKyBhLkRlc2NyaXB0aW9uID4gYi5EZXZpY2UgKyAnIC0gJyArIGIuRGVzY3JpcHRpb24pIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYS5EZXZpY2UgKyAnIC0gJyArIGEuRGVzY3JpcHRpb24gPT0gYi5EZXZpY2UgKyAnIC0gJyArIGIuRGVzY3JpcHRpb24pIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChkYXRhU291cmNlLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1NhcHBoaXJlJykge1xyXG4gICAgICAgICAgICAoZGF0YVNvdXJjZS5EYXRhIGFzIFRyZW5EQVAuaVNhcHBoaXJlUmV0dXJuRGF0YVtdKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID4gYi5NZXRlciArICcgLSAnICsgYi5OYW1lKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA9PSBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDaGFubmVsSUQoZGF0YVNvdXJjZS5EYXRhWzBdLklELnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkQ2hhbm5lbHMoZGF0YVNvdXJjZSk7XHJcblxyXG4gICAgfSwgW2RhdGFTb3VyY2VJRF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEZsYWdEYXRhKHJlY29yZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQgfCBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdKSB7XHJcbiAgICAgICAgVXBkYXRlRGF0YVNldERhdGEoZGF0YVNldCwgZGF0YVNvdXJjZUlELCBjaGFubmVsSUQsIHJlY29yZCkudGhlbigoKSA9PiBzZXRGbGFnKDEpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XHJcbiAgICAgICAgICAgIDxoMz57ZGF0YVNldC5OYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93JyA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAxNSwgd2lkdGg6ICc1MCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EYXRhIFNvdXJjZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2RhdGFTb3VyY2VJRH0gb25DaGFuZ2U9eyhldnQpID0+IHNldERhdGFTb3VyY2VJRChwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSkgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKGQgPT4gPG9wdGlvbiBrZXk9e2QuRGF0YVNvdXJjZS5JRH0gdmFsdWU9e2QuRGF0YVNvdXJjZS5JRH0+e2QuRGF0YVNvdXJjZS5OYW1lfTwvb3B0aW9uPikgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2hhbm5lbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2NoYW5uZWxJRH0gb25DaGFuZ2U9eyhldnQpID0+IHNldENoYW5uZWxJRChldnQudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtPcHRpb25zKHNlbGVjdGVkQ2hhbm5lbHMpIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogMzAsIG1hcmdpblJpZ2h0OiA1IH19IG9uQ2xpY2s9eygpID0+IHsgfX0+QWRkIFZpcnR1YWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAzMCB9fSBvbkNsaWNrPXsoKSA9PiB7IC8qc2V0UmVjb3JkKGl0ZW0pOyA7Ki8gc2V0VG9nZ2xlKHRydWUpfX0+RmxhZyBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogNSwgbGVmdDogNX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHZhbHVlPXtzaG93RmxhZ2dlZC50b1N0cmluZygpfSBjaGVja2VkPXtzaG93RmxhZ2dlZH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFNob3dGbGFnZ2VkKGV2dC50YXJnZXQuY2hlY2tlZCkgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+U2hvdyBGbGFnZ2VkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhcnQgRGF0YT17KHNob3dGbGFnZ2VkID8gc2VsZWN0ZWREYXRhIDogc2VsZWN0ZWREYXRhLmZpbHRlcihzZCA9PiBzZC5RdWFsaXR5RmxhZ3MgPT0gMCkpfSBTZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWRQb2ludH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SGlzdG9ncmFtIERhdGE9eyhzaG93RmxhZ2dlZCA/IHNlbGVjdGVkRGF0YSA6IHNlbGVjdGVkRGF0YS5maWx0ZXIoc2QgPT4gc2QuUXVhbGl0eUZsYWdzID09IDApKX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlZFRhYmxlIERhdGE9e3NlbGVjdGVkRGF0YX0gU2V0RmxhZz17RmxhZ0RhdGF9IFNlbGVjdGVkPXtzZWxlY3RlZFBvaW50IH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiByb2xlPVwiZGlhbG9nXCIgc3R5bGU9e3sgZGlzcGxheTogdG9nZ2xlID8gJ2Jsb2NrJyA6ICdub25lJywgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjQpJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPk1hcmsgQXMgRmxhZ2dlZDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiY2xvc2VcIn0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3JpdGVyaWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NyaXRlcmlhLm1hcCgoYywgSW5kZXgpID0+IDxGbGFnQ3JpdGVyaWEga2V5PXtJbmRleH0gey4uLmN9IFVwZGF0ZT17KHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q3JpdHMgPSBbLi4uY3JpdGVyaWFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDcml0c1tJbmRleF0gPSByZWNvcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENyaXRlcmlhKG5ld0NyaXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBBZGQ9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0NyaXRzID0gWyAuLi5jcml0ZXJpYV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NyaXRzW0luZGV4XS5BbmRPciA9ICdBbmQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDcml0cy5wdXNoKHsgRmllbGQ6ICdBdmVyYWdlJywgQ29uZGl0aW9uOiAnPicsIFZhbHVlOiAwLCBBbmRPcjogJ05vbmUnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDcml0ZXJpYShuZXdDcml0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgcHVsbC1sZWZ0XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2ludHMgPSBzZWxlY3RlZERhdGEuZmlsdGVyKGYgPT4gKGYuUXVhbGl0eUZsYWdzL01hdGgucG93KDIsNCkgJiAxKSAhPT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzLmZvckVhY2gocCA9PiBwLlF1YWxpdHlGbGFncyA9IHAuUXVhbGl0eUZsYWdzLSBNYXRoLnBvdygyLCA0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxhZ0RhdGEocG9pbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+VW5mbGFnIEFsbDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnRzID0gc2VsZWN0ZWREYXRhLmZpbHRlcihmID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmUgPSBjcml0ZXJpYS5tYXAoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYy5Db25kaXRpb24gPT0gJzwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFZhbHVlOiBmW2MuRmllbGRdIDwgYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMuQ29uZGl0aW9uID09ICc8PScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPD0gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMuQ29uZGl0aW9uID09ICc+PScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPj0gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMuQ29uZGl0aW9uID09ICc+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA+IGMuVmFsdWUsIEFuZE9yOiBjLkFuZE9yIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPT0gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJlLnJlZHVjZSgoYSwgYiwgaSwgc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSByZXR1cm4gYi5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNvdXJjZVtpLTFdLkFuZE9yID09ICdPcicpIHJldHVybiBhIHx8IGIuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBhICYmIGIuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwID0+IHAuUXVhbGl0eUZsYWdzID0gcC5RdWFsaXR5RmxhZ3MgKyBNYXRoLnBvdygyLCA0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxhZ0RhdGEocG9pbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+UHJvY2VzczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgT3B0aW9ucyA9IChkYXRhU291cmNlOiBUcmVuREFQLmlEYXRhU2V0UmV0dXJuKSA9PiB7XHJcbiAgICBpZiAoZGF0YVNvdXJjZSA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAoZGF0YVNvdXJjZS5EYXRhID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgaWYgKGRhdGFTb3VyY2UuRGF0YVNvdXJjZS5UeXBlID09PSAnVHJlbkRBUERCJykge1xyXG4gICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YVtdKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhLk1ldGVyICsgJyAtICcgKyBhLk5hbWUgPiBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChhLk1ldGVyICsgJyAtICcgKyBhLk5hbWUgPT0gYi5NZXRlciArICcgLSAnICsgYi5OYW1lKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZGF0YVNvdXJjZS5EYXRhLm1hcChjaGFubmVsID0+IDxUcmVuREFQREJDaGFubmVsIGtleT17Y2hhbm5lbC5JRH0gY2hhbm5lbD17Y2hhbm5lbCBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhfSAvPik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkYXRhU291cmNlLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1NhcHBoaXJlJykge1xyXG4gICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pU2FwcGhpcmVSZXR1cm5EYXRhW10pLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA+IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA9PSBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAwO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBkYXRhU291cmNlLkRhdGEubWFwKGNoYW5uZWwgPT4gPFNhcHBoaXJlQ2hhbm5lbCBrZXk9e2NoYW5uZWwuSUR9IGNoYW5uZWw9e2NoYW5uZWwgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YX0gLz4pO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKGRhdGFTb3VyY2UuRGF0YVNvdXJjZS5UeXBlID09PSAnT3Blbkhpc3RvcmlhbicpIHtcclxuICAgICAgICAoZGF0YVNvdXJjZS5EYXRhIGFzIFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm5bXSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYS5EZXZpY2UgKyAnIC0gJyArIGEuRGVzY3JpcHRpb24gPiBiLkRldmljZSArICcgLSAnICsgYi5EZXNjcmlwdGlvbikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEuRGV2aWNlICsgJyAtICcgKyBhLkRlc2NyaXB0aW9uID09IGIuRGV2aWNlICsgJyAtICcgKyBiLkRlc2NyaXB0aW9uKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZGF0YVNvdXJjZS5EYXRhLm1hcChjaGFubmVsID0+IDxPcGVuSGlzdG9yaWFuQ2hhbm5lbCBrZXk9e2NoYW5uZWwuSUR9IGNoYW5uZWw9e2NoYW5uZWwgYXMgVHJlbkRBUC5pT3Blbkhpc3RvcmlhblJldHVybn0gLz4pO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBkYXRhU291cmNlLkRhdGEubWFwKGNoYW5uZWwgPT4gPE90aGVyQ2hhbm5lbCBrZXk9e2NoYW5uZWwuSUR9IGNoYW5uZWw9e2NoYW5uZWx9IC8+KTtcclxufVxyXG5cclxuY29uc3QgVHJlbkRBUERCQ2hhbm5lbCA9IChwcm9wczogeyBjaGFubmVsOiBUcmVuREFQLmlYREFSZXR1cm5EYXRhIH0pID0+IHtcclxuICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtwcm9wcy5jaGFubmVsLklEfT57cHJvcHMuY2hhbm5lbC5NZXRlciArICcgLSAnICsgcHJvcHMuY2hhbm5lbC5OYW1lfTwvb3B0aW9uPlxyXG59XHJcblxyXG5jb25zdCBTYXBwaGlyZUNoYW5uZWwgPSAocHJvcHM6IHsgY2hhbm5lbDogVHJlbkRBUC5pU2FwcGhpcmVSZXR1cm5EYXRhIH0pID0+IHtcclxuICAgIGlmIChwcm9wcy5jaGFubmVsLkNoYXJhY3RlcmlzdGljLmluZGV4T2YoJ0hSTVMnKSA+PSAwKVxyXG4gICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtwcm9wcy5jaGFubmVsLklEfT57YCR7cHJvcHMuY2hhbm5lbC5NZXRlcn0gLSAke3Byb3BzLmNoYW5uZWwuTmFtZX0gSGFybW9uaWM6ICR7cHJvcHMuY2hhbm5lbC5IYXJtb25pY31gfTwvb3B0aW9uPlxyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtwcm9wcy5jaGFubmVsLklEfT57cHJvcHMuY2hhbm5lbC5NZXRlciArICcgLSAnICsgcHJvcHMuY2hhbm5lbC5OYW1lfTwvb3B0aW9uPlxyXG59XHJcblxyXG5jb25zdCBPcGVuSGlzdG9yaWFuQ2hhbm5lbCA9IChwcm9wczogeyBjaGFubmVsOiBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJuIH0pID0+IHtcclxuICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtwcm9wcy5jaGFubmVsLklEfT57cHJvcHMuY2hhbm5lbC5EZXZpY2UgKyAnIC0gJyArIHByb3BzLmNoYW5uZWwuRGVzY3JpcHRpb259PC9vcHRpb24+XHJcbn1cclxuXHJcblxyXG5jb25zdCBPdGhlckNoYW5uZWwgPSAocHJvcHM6IHsgY2hhbm5lbDogb2JqZWN0IH0pID0+IHtcclxuICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtwcm9wcy5jaGFubmVsWydJRCddfT57cHJvcHMuY2hhbm5lbFsnTmFtZSddfTwvb3B0aW9uPlxyXG59XHJcblxyXG5jb25zdCBGbGFnQ3JpdGVyaWEgPSAocHJvcHM6IHtGaWVsZCwgQ29uZGl0aW9uLCBWYWx1ZSwgQW5kT3IsIFVwZGF0ZTogKHJlY29yZCkgPT4gdm9pZCwgQWRkOiAoKSA9PiB2b2lkfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZpZWxkLCBzZXRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTwnTWF4aW11bScgfCAnTWluaW11bScgfCAnQXZlcmFnZSc+KHByb3BzLkZpZWxkKTtcclxuICAgIGNvbnN0IFtjb25kaXRpb24sIHNldENvbmRpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTwnPCcgfCAnPD0nIHwgJz09JyB8ICc+PScgfCAnPic+KHByb3BzLkNvbmRpdGlvbik7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4ocHJvcHMuVmFsdWUpO1xyXG4gICAgY29uc3QgW2FuZE9yLCBzZXRBbmRPcl0gPSBSZWFjdC51c2VTdGF0ZTwnQW5kJyB8ICdPcicgfCAnTm9uZSc+KHByb3BzLkFuZE9yKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLlVwZGF0ZSh7IEZpZWxkOiBmaWVsZCwgQ29uZGl0aW9uOiBjb25kaXRpb24sIFZhbHVlOiB2YWx1ZSwgQW5kT3I6IGFuZE9yIH0pO1xyXG4gICAgfSwgW2ZpZWxkLCBjb25kaXRpb24sIHZhbHVlLCBhbmRPcl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0QW5kT3IocHJvcHMuQW5kT3IpO1xyXG4gICAgfSwgW3Byb3BzLkFuZE9yXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRGaWVsZChwcm9wcy5GaWVsZCk7XHJcbiAgICB9LCBbcHJvcHMuRmllbGRdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldENvbmRpdGlvbihwcm9wcy5Db25kaXRpb24pO1xyXG4gICAgfSwgW3Byb3BzLkNvbmRpdGlvbl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUocHJvcHMuVmFsdWUpO1xyXG4gICAgfSwgW3Byb3BzLlZhbHVlXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2ZpZWxkfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0RmllbGQoZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J01heGltdW0nPk1heDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBdmVyYWdlJz5Bdmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTWluaW11bSc+TWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtjb25kaXRpb259IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDb25kaXRpb24oZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyc8J30+eyc8J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Jzw9J30+eyc8PSd9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyc9PSd9PnsnPT0nfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPj0nfT57Jz49J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Jz4nfT57Jz4nfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz48aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHR5cGU9J251bWJlcicgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VmFsdWUocGFyc2VGbG9hdChldnQudGFyZ2V0LnZhbHVlKSl9IC8+PC9kaXY+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz57XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuQW5kT3IgPT0gJ05vbmUnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgb25DbGljaz17KCkgPT4gcHJvcHMuQWRkKCkgfT57UGx1c308L2J1dHRvbj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXthbmRPcn0gb25DaGFuZ2U9eyhldnQpID0+IHNldEFuZE9yKGV2dC50YXJnZXQudmFsdWUgYXMgYW55KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nQW5kJz5BbmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J09yJz5Pcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
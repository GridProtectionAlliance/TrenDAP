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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvZ3BhLXN5bWJvbHMvbGliL2luZGV4LmpzIiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVmlld0RhdGFTZXQvQ2hhcnQudHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVmlld0RhdGFTZXQvSGlzdG9ncmFtLnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L1BhZ2VkVGFibGUudHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVmlld0RhdGFTZXQvVmlld0RhdGFTZXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxvQkFBb0IsR0FBRyxvQkFBb0IsR0FBRyx5QkFBeUIsR0FBRyxtQkFBbUIsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxjQUFjLEdBQUcsYUFBYSxHQUFHLHVCQUF1QixHQUFHLG9CQUFvQixHQUFHLG9CQUFvQixHQUFHLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxlQUFlLEdBQUcsWUFBWSxHQUFHLGNBQWMsR0FBRyxlQUFlLEdBQUcsZUFBZSxH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LEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFHLFFBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsb0NBQU8sRUFBOEIsQ0FBQyxDQUFDLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxpREFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQ3ZTLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFH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Qyw2REFBUSxLQUFLLEVBQUMsSUFBSSxTQUFZLENBQ3pCLENBQ1YsQ0FDTCxDQUNMLENBQ1I7QUFDTCxDQUFDIiwiZmlsZSI6IlZpZXdEYXRhU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBpbmRleC50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwOS8zMC8yMDIwIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUXVlc3Rpb25tYXJrID0gZXhwb3J0cy5SZXdpbmRCdXR0b24gPSBleHBvcnRzLkZhc3RGb3J3YXJkQnV0dG9uID0gZXhwb3J0cy5QYXVzZUJ1dHRvbiA9IGV4cG9ydHMuU3RvcEJ1dHRvbiA9IGV4cG9ydHMuUGxheUJ1dHRvbiA9IGV4cG9ydHMuU2Nyb2xsID0gZXhwb3J0cy5Ib3VzZSA9IGV4cG9ydHMuTWFnbmlmeWluZ0dsYXNzID0gZXhwb3J0cy5Gb3VyV2F5QXJyb3cgPSBleHBvcnRzLklucHV0TnVtYmVycyA9IGV4cG9ydHMuRE5BID0gZXhwb3J0cy5Eb3duQXJyb3cgPSBleHBvcnRzLlJpZ2h0QXJyb3cgPSBleHBvcnRzLkxlZnRBcnJvdyA9IGV4cG9ydHMuVXBBcnJvdyA9IGV4cG9ydHMuRmxhZyA9IGV4cG9ydHMuV3JlbmNoID0gZXhwb3J0cy5TcGlubmVyID0gZXhwb3J0cy5XYXJuaW5nID0gZXhwb3J0cy5QbHVzID0gZXhwb3J0cy5Dcm9zc01hcmsgPSBleHBvcnRzLlRyYXNoQ2FuID0gZXhwb3J0cy5QZW5jaWwgPSBleHBvcnRzLkhlYXZ5Q2hlY2tNYXJrID0gdm9pZCAwO1xuZXhwb3J0cy5IZWF2eUNoZWNrTWFyayA9ICfinJTvuI8nO1xuZXhwb3J0cy5QZW5jaWwgPSAn4pyP77iPJztcbmV4cG9ydHMuVHJhc2hDYW4gPSAn8J+Xke+4jyc7XG5leHBvcnRzLkNyb3NzTWFyayA9ICfinYwnO1xuZXhwb3J0cy5QbHVzID0gJ+KelSc7XG5leHBvcnRzLldhcm5pbmcgPSAn4pqg77iPJztcbmV4cG9ydHMuU3Bpbm5lciA9ICfwn5SEJztcbmV4cG9ydHMuV3JlbmNoID0gJ/CflKcnO1xuZXhwb3J0cy5GbGFnID0gJ/CfmqknO1xuZXhwb3J0cy5VcEFycm93ID0gJ+Kshu+4jyc7XG5leHBvcnRzLkxlZnRBcnJvdyA9ICfirIUnO1xuZXhwb3J0cy5SaWdodEFycm93ID0gJ+KeoSc7XG5leHBvcnRzLkRvd25BcnJvdyA9ICfirIfvuI8nO1xuZXhwb3J0cy5ETkEgPSAn8J+nrCc7XG5leHBvcnRzLklucHV0TnVtYmVycyA9ICfwn5SiJztcbmV4cG9ydHMuRm91cldheUFycm93ID0gJ+KYqSc7XG5leHBvcnRzLk1hZ25pZnlpbmdHbGFzcyA9ICfwn5SNJztcbmV4cG9ydHMuSG91c2UgPSAn8J+PoCc7XG5leHBvcnRzLlNjcm9sbCA9ICfwn5OcJztcbmV4cG9ydHMuUGxheUJ1dHRvbiA9ICfilrbvuI8nO1xuZXhwb3J0cy5TdG9wQnV0dG9uID0gJ+KPue+4jyc7XG5leHBvcnRzLlBhdXNlQnV0dG9uID0gJ+KPuO+4jyc7XG5leHBvcnRzLkZhc3RGb3J3YXJkQnV0dG9uID0gJ+KPqSc7XG5leHBvcnRzLlJld2luZEJ1dHRvbiA9ICfij6onO1xuZXhwb3J0cy5RdWVzdGlvbm1hcmsgPSAnPyc7XG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uc3RhbnRzLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzMwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyBlbW9qaXNcclxuY29uc3QgSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcclxuY29uc3QgUGVuY2lsID0gJ+Kcj++4jyc7XHJcbmNvbnN0IFRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xyXG5jb25zdCBDcm9zc01hcmsgPSAn4p2MJztcclxuY29uc3QgUGx1cyA9ICfinpUnO1xyXG5jb25zdCBXYXJuaW5nID0gJ+KaoO+4jyc7XHJcbmNvbnN0IFNwaW5uZXIgPSAn8J+UhCc7XHJcbmNvbnN0IFdyZW5jaCA9ICfwn5SnJztcclxuXHJcbmV4cG9ydCB7IEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFRyYXNoQ2FuLCBDcm9zc01hcmssIFBsdXMsIFdhcm5pbmcsIFNwaW5uZXIsIFdyZW5jaCB9OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnQocHJvcHM6IHsgRGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSwgU2V0U2VsZWN0ZWQ6IChyZWNvcmQ6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50KSA9PiB2b2lkIH0pIHtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtjaGFydEFjdGlvbiwgc2V0Q2hhcnRBY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5DaGFydEFjdGlvbj4oJ1BhbicpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBJbml0aWFsaXplKHByb3BzLkRhdGEpLCBbcHJvcHMuRGF0YV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZVJlc2V0KCkge1xyXG4gICAgICAgIC8vc2V0UmVjb3JkKHJlY29yZC5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3gnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZShkYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdKSB7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luID0geyBib3R0b206IDUwLCBsZWZ0OiA3NSwgdG9wOiA2NSwgcmlnaHQ6IDQwIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNzApLzI7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSAod2luZG93LmlubmVyV2lkdGggLSAyMDApIC8gMjtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHN2Z0hlaWdodCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBkMy5zY2FsZVV0YygpXHJcbiAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KHByb3BzLkRhdGEsIGQ9PiBtb21lbnQudXRjKGQuVGltZXN0YW1wKSkpXHJcbiAgICAgICAgICAgIC5yYW5nZShbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0XSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cueGF4aXMnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ3hheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxyXG5cclxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd4YXhpcycsIHRydWUpLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc3ZnV2lkdGggLyAyKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcclxuXHJcbiAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLnJhbmdlKFtzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tLCBtYXJnaW4udG9wXSlcclxuICAgICAgICAgICAgLmRvbWFpbihbZDMubWluKHByb3BzLkRhdGEsIGQgPT4gTWF0aC5taW4oKGlzTmFOKGQuTWluaW11bSkgPyBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgOiBkLk1pbmltdW0pLCAoaXNOYU4oZC5BdmVyYWdlKSA/IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSA6IGQuQXZlcmFnZSksIChpc05hTihkLk1heGltdW0pID8gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZIDogZC5NYXhpbXVtKSkpLCBkMy5tYXgocHJvcHMuRGF0YSwgZCA9PiBNYXRoLm1heCgoaXNOYU4oZC5NaW5pbXVtKSA/IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA6IGQuTWluaW11bSksIChpc05hTihkLkF2ZXJhZ2UpID8gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIDogZC5BdmVyYWdlKSwgKGlzTmFOKGQuTWF4aW11bSkgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOiBkLk1heGltdW0pKSldKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy55YXhpcycpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneWF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChtYXJnaW4ubGVmdCkgKyBcIiwwKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KS50aWNrcyhNYXRoLmZsb29yKHN2Z0hlaWdodCAvIDUwKSArIDEpLnRpY2tGb3JtYXQoKHZhbHVlOiBudW1iZXIpID0+IGQzLmZvcm1hdChcIn5zXCIpKHZhbHVlKSkpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoJ3lheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnRleHQoXCJDaGFubmVsIE91dHB1dFwiKTtcclxuICAgICAgICB0ZXh0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKSB0cmFuc2xhdGUoLVwiICsgc3ZnSGVpZ2h0IC8gMiArIFwiLFwiICsgKChtYXJnaW4ubGVmdCkgLyAzKSArIFwiKVwiKS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLm1heCcpLmRhdGEoW3Byb3BzLkRhdGEuZmlsdGVyKGQ9PiAhaXNOYU4oZC5NYXhpbXVtKSldICkuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdtYXgnKS5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdzdHJva2UnLCAncmVkJykuYXR0cignZmlsbCcsICdub25lJykuYXR0cignZCcsIGQzLmxpbmU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+KCkueChkID0+IHgobW9tZW50LnV0YyhkLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpKSkueShkID0+IHkoZC5NYXhpbXVtKSkpXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy5taW4nKS5kYXRhKFtwcm9wcy5EYXRhLmZpbHRlcihkID0+ICFpc05hTihkLk1pbmltdW0pKV0gKS5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ21pbicpLmFwcGVuZCgncGF0aCcpLmF0dHIoJ3N0cm9rZScsICdyZWQnKS5hdHRyKCdmaWxsJywgJ25vbmUnKS5hdHRyKCdkJywgZDMubGluZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4oKS54KGQgPT4geChtb21lbnQudXRjKGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpKS55KGQgPT4geShkLk1pbmltdW0pKSlcclxuXHJcbiAgICAgICAgY29uc3QgcG9pbnRzID0gc3ZnLnNlbGVjdEFsbChcImcucG9pbnRzXCIpXHJcbiAgICAgICAgICAgIC5kYXRhKFtwcm9wcy5EYXRhLmZpbHRlcihkID0+ICFpc05hTihkLkF2ZXJhZ2UpKV0pXHJcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3BvaW50cycpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcG9pbnQgPSBwb2ludHMuc2VsZWN0QWxsKCdwb2ludCcpLmRhdGEoZCA9PiBkKS5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3BvaW50Jyk7XHJcbiAgICAgICAgcG9pbnQuYXBwZW5kKFwiY2lyY2xlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCAzLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgobW9tZW50LnV0YyhkLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpKTsgfSlcclxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLkF2ZXJhZ2UpOyB9KVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKGUsZDogYW55KSA9PiB7IHByb3BzLlNldFNlbGVjdGVkKGQpIH0pXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBzdHlsZT17eyB1c2VyU2VsZWN0OiAnbm9uZScgfX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEhpc3RvZ3JhbS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaXN0b2dyYW0ocHJvcHM6IHsgRGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSB9KSB7XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZTwnTWluaW11bScgfCAnQXZlcmFnZScgfCAnTWF4aW11bSc+KCdBdmVyYWdlJyk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gSW5pdGlhbGl6ZShwcm9wcy5EYXRhKSwgW3Byb3BzLkRhdGEsIHR5cGVdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBJbml0aWFsaXplKGRhdGE6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10pIHtcclxuICAgICAgICBjb25zdCBtYXJnaW4gPSB7IGJvdHRvbTogNTAsIGxlZnQ6IDc1LCB0b3A6IDY1LCByaWdodDogNDAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnSGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIDI3MCkgLyAyO1xyXG4gICAgICAgIGNvbnN0IHN2Z1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gMjAwKSAvIDI7XHJcblxyXG4gICAgICAgIGQzLnNlbGVjdChyZWYuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKVxyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChyZWYuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc3ZnV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzdmdIZWlnaHQpO1xyXG5cclxuICAgICAgICBsZXQgaGlzdG9ncmFtID0gZDMuaGlzdG9ncmFtPG51bWJlciwgbnVtYmVyPigpXHJcbiAgICAgICAgICAgIC52YWx1ZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfSkgICAvLyBJIG5lZWQgdG8gZ2l2ZSB0aGUgdmVjdG9yIG9mIHZhbHVlXHJcbiAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KHByb3BzLkRhdGEuZmlsdGVyKGQgPT4gIWlzTmFOKGRbdHlwZV0pKSwgZCA9PiBkW3R5cGVdKSBhcyBbbnVtYmVyLCBudW1iZXJdKSAgLy8gdGhlbiB0aGUgZG9tYWluIG9mIHRoZSBncmFwaGljXHJcbiAgICAgICAgICAgIC50aHJlc2hvbGRzKDQwKTsgLy8gdGhlbiB0aGUgbnVtYmVycyBvZiBiaW5zXHJcblxyXG4gICAgICAgIGNvbnN0IGJpbnMgPSBoaXN0b2dyYW0ocHJvcHMuRGF0YS5tYXAoZCA9PiBkW3R5cGVdKS5maWx0ZXIoZCA9PiAhaXNOYU4oZCkpKTtcclxuXHJcbiAgICAgICAgbGV0IHlNYXggPSBNYXRoLm1heCguLi5iaW5zLm1hcChiID0+IGIubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5kb21haW4oW01hdGgubWluKC4uLmJpbnMubWFwKGEgPT4gYS54MCkpLCBNYXRoLm1heCguLi5iaW5zLm1hcChhID0+IGEueDEpKV0pICAgICAvLyBjYW4gdXNlIHRoaXMgaW5zdGVhZCBvZiAxMDAwIHRvIGhhdmUgdGhlIG1heCBvZiBkYXRhOiBkMy5tYXgoZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gK2QucHJpY2UgfSlcclxuICAgICAgICAgICAgLnJhbmdlKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggLSBtYXJnaW4ucmlnaHRdKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxyXG5cclxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChzdmdXaWR0aCAvIDIpICsgXCIsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSAvIDMpICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiQ2hhbm5lbCBPdXRwdXRcIilcclxuXHJcbiAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLnJhbmdlKFtzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tLCBtYXJnaW4udG9wXSlcclxuICAgICAgICAgICAgLmRvbWFpbihbMCwgeU1heF0pOyAgIC8vIGQzLmhpc3QgaGFzIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIFkgYXhpcyBvYnZpb3VzbHlcclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsMClcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MCkgdHJhbnNsYXRlKC1cIiArIHN2Z0hlaWdodCAvIDIgKyBcIixcIiArIG1hcmdpbi5sZWZ0IC8gMyArIFwiKVwiKVxyXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNvdW50c1wiKVxyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxyXG4gICAgICAgICAgICAuZGF0YShiaW5zKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgMSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IGB0cmFuc2xhdGUoJHt4KGQueDApfSwke3koZC5sZW5ndGgpfSlgKVxyXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiAoeChkLngxKSAtIHgoZC54MCkgPiAyID8geChkLngxKSAtIHgoZC54MCkgOiAyKSAtIDEpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgLSB5KGQubGVuZ3RoKSlcclxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIChkKSA9PiAnZGFya2JsdWUnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17dHlwZX0gY2hlY2tlZD17dHlwZSA9PSAnTWluaW11bSd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRUeXBlKCdNaW5pbXVtJykgfS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPk1pbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3R5cGUgPT0gJ0F2ZXJhZ2UnfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZSgnQXZlcmFnZScpfS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPkF2ZzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17dHlwZSA9PSAnTWF4aW11bSd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRUeXBlKCdNYXhpbXVtJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPk1heDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBQYWdlZFRhYmxlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8xOC8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgeyBQZW5jaWwsIEZsYWcgfSBmcm9tICdAZ3BhLWdlbXN0b25lL2dwYS1zeW1ib2xzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlZFRhYmxlKHByb3BzOiB7IERhdGE6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10sIFNlbGVjdGVkOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludCxTZXRGbGFnOiAocmVjb3JkOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludCApID0+IHZvaWR9KSB7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+KCdUaW1lc3RhbXAnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbdGFibGVEYXRhLCBzZXRUYWJsZURhdGFdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXT4oW10pO1xyXG4gICAgY29uc3QgW21heFBhZ2VzLCBzZXRNYXhQYWdlc10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDUwKTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHRhYmxlSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjcwOyAvLyA1MCArIDEwMCArIDcwICsgNTBcclxuICAgIGNvbnN0IG1heFJvd0NvdW50ID0gTWF0aC5mbG9vcih0YWJsZUhlaWdodCAvIDY1KTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJvcHMuRGF0YV07XHJcbiAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhW3NvcnRGaWVsZF0gPiBiW3NvcnRGaWVsZF0pIHJldHVybiAoYXNjZW5kaW5nID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYVtzb3J0RmllbGRdID09PSBiW3NvcnRGaWVsZF0pIHJldHVybiAwO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAoYXNjZW5kaW5nID8gLTEgOiAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUYWJsZURhdGEoZGF0YS5zbGljZShwYWdlICogbWF4Um93Q291bnQsIChwYWdlICsgMSkgKiBtYXhSb3dDb3VudCkpO1xyXG4gICAgICAgIHNldE1heFBhZ2VzKE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIG1heFJvd0NvdW50KSAtIDEpO1xyXG4gICAgfSwgW3Byb3BzLkRhdGEsIGFzY2VuZGluZywgc29ydEZpZWxkXSk7XHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGFibGVEYXRhKHByb3BzLkRhdGEuc2xpY2UocGFnZSAqIG1heFJvd0NvdW50LCAocGFnZSArIDEpICogbWF4Um93Q291bnQpKTtcclxuICAgIH0sIFtwYWdlXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHByb3BzLkRhdGEuZmluZEluZGV4KGQgPT4gZC5UaW1lc3RhbXAgPT09IHByb3BzLlNlbGVjdGVkPy5UaW1lc3RhbXApO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQYWdlID0gTWF0aC5mbG9vcihpbmRleCAvIG1heFJvd0NvdW50KTtcclxuICAgICAgICAgICAgc2V0UGFnZShuZXdQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuU2VsZWN0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUYWJsZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4gdGFibGVDbGFzcz0ndGFibGUnXHJcbiAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdUaW1lc3RhbXAnLCBmaWVsZDogJ1RpbWVzdGFtcCcsIGxhYmVsOiAnVGltZXN0YW1wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWluaW11bScsIGZpZWxkOiAnTWluaW11bScsIGxhYmVsOiAnTWluJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IChpdGVtPy5NaW5pbXVtLnRvU3RyaW5nKCkgPT09ICdOYU4nID8gJ05hTicgOiBpdGVtLk1pbmltdW0udG9GaXhlZCgyKSl9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQXZlcmFnZScsIGZpZWxkOiAnQXZlcmFnZScsIGxhYmVsOiAnQXZnJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IChpdGVtPy5BdmVyYWdlLnRvU3RyaW5nKCkgPT09ICdOYU4nID8gJ05hTicgOiBpdGVtLkF2ZXJhZ2UudG9GaXhlZCgyKSl9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWF4aW11bScsIGZpZWxkOiAnTWF4aW11bScsIGxhYmVsOiAnTWF4JywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IChpdGVtPy5NYXhpbXVtLnRvU3RyaW5nKCkgPT09ICdOYU4nID8gJ05hTicgOiBpdGVtLk1heGltdW0udG9GaXhlZCgyKSl9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnUXVhbGl0eUZsYWdzJywgZmllbGQ6ICdRdWFsaXR5RmxhZ3MnLCBsYWJlbDogJ0ZsYWdnZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbS5RdWFsaXR5RmxhZ3MgPiAwID8gRmxhZyA6ICcnfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbnVsbCwgbGFiZWw6ICcnLCBjb250ZW50OiAoaXRlbSkgPT4gPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgb25DbGljaz17KCkgPT4geyBzZXRSZWNvcmQoaXRlbSk7IHNldFRvZ2dsZSh0cnVlKTsgfSB9PntQZW5jaWx9PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtyZWNvcmQgPT4gcmVjb3JkLlRpbWVzdGFtcCA9PT0gcHJvcHMuU2VsZWN0ZWQ/LlRpbWVzdGFtcCB9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXt0YWJsZURhdGF9XHJcbiAgICAgICAgICAgICAgICBzb3J0S2V5PXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZGF0YSkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICBvblNvcnQ9eyhkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29sRmllbGQgPT09IHNvcnRGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRGaWVsZChkYXRhLmNvbEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHVsbC1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyB0aXRsZT0nTW92ZSBiYWNrIDEwIHBhZ2VzJyBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwYWdlID49IDEwID8gcGFnZSAtIDEwIDogMCkpfSBkaXNhYmxlZD17cGFnZSA8PSAwfT57Jzw8J308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIHRpdGxlPSdNb3ZlIGJhY2sgMSBwYWdlJyBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwYWdlID49IDEgPyBwYWdlIC0gMSA6IDApKX0gZGlzYWJsZWQ9e3BhZ2UgPD0gMH0+eyc8J308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlBhZ2UmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3BhZ2UgKyAxfSB0eXBlPSdudW1iZXInIG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRQYWdlKHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpIC0gMSl9IHN0eWxlPXt7d2lkdGg6IDQwfX0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPm9mJm5ic3A7eyBtYXhQYWdlcyArIDF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgdGl0bGU9J01vdmUgZm9yd2FyZCAxIHBhZ2UnIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKHBhZ2UgPD0gbWF4UGFnZXMgPyBwYWdlICsgMSA6IG1heFBhZ2VzKSl9IGRpc2FibGVkPXtwYWdlID49IG1heFBhZ2VzfT57Jz4nfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgdGl0bGU9J01vdmUgZm9yd2FyZCAxMCBwYWdlcycgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocGFnZSA8PSBtYXhQYWdlcyAtIDEwID8gcGFnZSArIDEwIDogbWF4UGFnZXMpKX0gZGlzYWJsZWQ9e3BhZ2UgPj0gbWF4UGFnZXN9PnsnPj4nfTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiByb2xlPVwiZGlhbG9nXCIgc3R5bGU9e3sgZGlzcGxheTogdG9nZ2xlID8gJ2Jsb2NrJyA6ICdub25lJywgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjQpJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPk1hcmsgQXMgRmxhZ2dlZDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiY2xvc2VcIn0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZTogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UaW1lOiB7cmVjb3JkPy5UaW1lc3RhbXB9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1heDoge3JlY29yZD8uTWF4aW11bX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QXZnOiB7cmVjb3JkPy5BdmVyYWdlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NaW46IHtyZWNvcmQ/Lk1pbmltdW19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZsYWc6IDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17KHJlY29yZD8uUXVhbGl0eUZsYWdzIC8gTWF0aC5wb3coMiwgNCkgJiAxKSAhPT0gMH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlY29yZCh7IC4uLnJlY29yZCwgUXVhbGl0eUZsYWdzOiBldnQudGFyZ2V0LmNoZWNrZWQgPyByZWNvcmQuUXVhbGl0eUZsYWdzICsgTWF0aC5wb3coMiwgNCkgOiByZWNvcmQuUXVhbGl0eUZsYWdzIC0gTWF0aC5wb3coMiwgNCl9KSB9Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0RmxhZyhyZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgVmlld0RhdGFTZXQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzE3LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFVwZGF0ZURhdGFTZXREYXRhLCBTZWxlY3REYXRhU2V0c1N0YXR1cywgRmV0Y2hEYXRhU2V0cywgU2VsZWN0UmVjb3JkLCBTZXRSZWNvcmRCeUlELCBHZXREYXRhU2V0RGF0YUZyb21JREIsIFVwZGF0ZURhdGFTZXREYXRhRmxhZyB9IGZyb20gJy4uL0RhdGFTZXRzU2xpY2UnXHJcbmltcG9ydCB7ICB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBQYWdlZFRhYmxlIGZyb20gJy4vUGFnZWRUYWJsZSc7XHJcbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0JztcclxuaW1wb3J0IEhpc3RvZ3JhbSBmcm9tICcuL0hpc3RvZ3JhbSc7XHJcbmltcG9ydCB7IElucHV0TnVtYmVycyB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvZ3BhLXN5bWJvbHMnO1xyXG5pbXBvcnQgeyBQbHVzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdEYXRhU2V0KCkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zPHtpZH0+KCk7XHJcbiAgICBjb25zdCBkYXRhU2V0ID0gdXNlU2VsZWN0b3IoU2VsZWN0UmVjb3JkKVxyXG4gICAgY29uc3Qgd3NTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0c1N0YXR1cyk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlEYXRhU2V0UmV0dXJuW10+KFtdKTtcclxuICAgIGNvbnN0IFtkYXRhU291cmNlSUQsIHNldERhdGFTb3VyY2VJRF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2NoYW5uZWxJRCwgc2V0Q2hhbm5lbElEXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJzAnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZERhdGEsIHNldFNlbGVjdGVkRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdPihbXSk7XHJcbiAgICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSBSZWFjdC51c2VSZWR1Y2VyKChzLF8pID0+IHMgKyAxLCAwKTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbY3JpdGVyaWEsIHNldENyaXRlcmlhXSA9IFJlYWN0LnVzZVN0YXRlPHsgRmllbGQ6IGFueSwgQ29uZGl0aW9uOiBhbnksIFZhbHVlOiBudW1iZXIsIEFuZE9yIH1bXT4oW3sgRmllbGQ6ICdBdmVyYWdlJywgQ29uZGl0aW9uOiAnPicsIFZhbHVlOiAwLCBBbmRPcjogJ05vbmUnIH1dKTtcclxuICAgIGNvbnN0IFtzaG93RmxhZ2dlZCwgc2V0U2hvd0ZsYWdnZWRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkUG9pbnQsIHNldFNlbGVjdGVkUG9pbnRdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ2hhbm5lbHMsIHNldFNlbGVjdGVkQ2hhbm5lbHNdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pRGF0YVNldFJldHVybj4oe30gYXMgVHJlbkRBUC5pRGF0YVNldFJldHVybiApO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3JpdGVyaWEoW3sgRmllbGQ6ICdBdmVyYWdlJywgQ29uZGl0aW9uOiAnPicsIFZhbHVlOiAwLCBBbmRPcjogJ05vbmUnIH1dKTtcclxuICAgIH0sIFt0b2dnbGVdKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod3NTdGF0dXMgPT09ICd1bml0aWF0ZWQnIHx8IHdzU3RhdHVzID09PSAnY2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goRmV0Y2hEYXRhU2V0cygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKFNldFJlY29yZEJ5SUQocGFyc2VJbnQoaWQpKSk7XHJcbiAgICB9LCBbZGlzcGF0Y2gsIHdzU3RhdHVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihkYXRhU291cmNlSUQgPT09IDApXHJcbiAgICAgICAgICAgIHNldERhdGFTb3VyY2VJRChkYXRhWzBdPy5EYXRhU291cmNlLklEID8/IDApO1xyXG4gICAgICAgIGlmKGNoYW5uZWxJRCA9PSAnMCcpXHJcbiAgICAgICAgICAgIHNldENoYW5uZWxJRCgoZGF0YVswXT8uRGF0YSA/PyBbeyBJRDonMCcgfV0pWzBdLklELnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBkID0gKGRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSBkYXRhU291cmNlSUQpPy5EYXRhID8/IFtdKS5maW5kKGRkID0+IGRkLklEID09IGNoYW5uZWxJRCk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgc2V0U2VsZWN0ZWREYXRhKGQpO1xyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBHZXREYXRhU2V0RGF0YUZyb21JREIoaWQpLnRoZW4oZCA9PiB7XHJcbiAgICAgICAgICAgIHNldERhdGEoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbZmxhZ10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZCA9IChkYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gZGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXSkuZmluZChkZCA9PiBkZC5JRCA9PSBjaGFubmVsSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIHNldFNlbGVjdGVkRGF0YShkKTtcclxuICAgICAgICBcclxuICAgIH0sIFtjaGFubmVsSURdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IGRhdGFTb3VyY2VJRCk7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2UgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YVNvdXJjZS5EYXRhID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoZGF0YVNvdXJjZS5EYXRhU291cmNlLlR5cGUgPT09ICdUcmVuREFQREInKSB7XHJcbiAgICAgICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YVtdKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID4gYi5NZXRlciArICcgLSAnICsgYi5OYW1lKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA9PSBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChkYXRhU291cmNlLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ09wZW5IaXN0b3JpYW4nKSB7XHJcbiAgICAgICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pT3Blbkhpc3RvcmlhblJldHVybltdKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5EZXZpY2UgKyAnIC0gJyArIGEuRGVzY3JpcHRpb24gPiBiLkRldmljZSArICcgLSAnICsgYi5EZXNjcmlwdGlvbikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhLkRldmljZSArICcgLSAnICsgYS5EZXNjcmlwdGlvbiA9PSBiLkRldmljZSArICcgLSAnICsgYi5EZXNjcmlwdGlvbikgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGRhdGFTb3VyY2UuRGF0YVNvdXJjZS5UeXBlID09PSAnU2FwcGhpcmUnKSB7XHJcbiAgICAgICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pU2FwcGhpcmVSZXR1cm5EYXRhW10pLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLk1ldGVyICsgJyAtICcgKyBhLk5hbWUgPiBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID09IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENoYW5uZWxJRChkYXRhU291cmNlLkRhdGFbMF0uSUQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDaGFubmVscyhkYXRhU291cmNlKTtcclxuXHJcbiAgICB9LCBbZGF0YVNvdXJjZUlEXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gRmxhZ0RhdGEocmVjb3JkOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludCB8IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10pIHtcclxuICAgICAgICBVcGRhdGVEYXRhU2V0RGF0YShkYXRhU2V0LCBkYXRhU291cmNlSUQsIGNoYW5uZWxJRCwgcmVjb3JkKS50aGVuKCgpID0+IHNldEZsYWcoMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cclxuICAgICAgICAgICAgPGgzPntkYXRhU2V0Lk5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDE1LCB3aWR0aDogJzUwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRhdGEgU291cmNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17ZGF0YVNvdXJjZUlEfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0RGF0YVNvdXJjZUlEKHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoZCA9PiA8b3B0aW9uIGtleT17ZC5EYXRhU291cmNlLklEfSB2YWx1ZT17ZC5EYXRhU291cmNlLklEfT57ZC5EYXRhU291cmNlLk5hbWV9PC9vcHRpb24+KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaGFubmVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17Y2hhbm5lbElEfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q2hhbm5lbElEKGV2dC50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge09wdGlvbnMoc2VsZWN0ZWRDaGFubmVscykgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0yJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAzMCwgbWFyZ2luUmlnaHQ6IDUgfX0gb25DbGljaz17KCkgPT4geyB9fT5BZGQgVmlydHVhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6IDMwIH19IG9uQ2xpY2s9eygpID0+IHsgLypzZXRSZWNvcmQoaXRlbSk7IDsqLyBzZXRUb2dnbGUodHJ1ZSl9fT5GbGFnIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCIgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiA1LCBsZWZ0OiA1fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdmFsdWU9e3Nob3dGbGFnZ2VkLnRvU3RyaW5nKCl9IGNoZWNrZWQ9e3Nob3dGbGFnZ2VkfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0U2hvd0ZsYWdnZWQoZXZ0LnRhcmdldC5jaGVja2VkKSB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5TaG93IEZsYWdnZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFydCBEYXRhPXsoc2hvd0ZsYWdnZWQgPyBzZWxlY3RlZERhdGEgOiBzZWxlY3RlZERhdGEuZmlsdGVyKHNkID0+IHNkLlF1YWxpdHlGbGFncyA9PSAwKSl9IFNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZFBvaW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIaXN0b2dyYW0gRGF0YT17KHNob3dGbGFnZ2VkID8gc2VsZWN0ZWREYXRhIDogc2VsZWN0ZWREYXRhLmZpbHRlcihzZCA9PiBzZC5RdWFsaXR5RmxhZ3MgPT0gMCkpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VkVGFibGUgRGF0YT17c2VsZWN0ZWREYXRhfSBTZXRGbGFnPXtGbGFnRGF0YX0gU2VsZWN0ZWQ9e3NlbGVjdGVkUG9pbnQgfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHJvbGU9XCJkaWFsb2dcIiBzdHlsZT17eyBkaXNwbGF5OiB0b2dnbGUgPyAnYmxvY2snIDogJ25vbmUnLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNCknIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+TWFyayBBcyBGbGFnZ2VkPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJjbG9zZVwifSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Dcml0ZXJpYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3JpdGVyaWEubWFwKChjLCBJbmRleCkgPT4gPEZsYWdDcml0ZXJpYSBrZXk9e0luZGV4fSB7Li4uY30gVXBkYXRlPXsocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdDcml0cyA9IFsuLi5jcml0ZXJpYV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NyaXRzW0luZGV4XSA9IHJlY29yZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3JpdGVyaWEobmV3Q3JpdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IEFkZD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q3JpdHMgPSBbIC4uLmNyaXRlcmlhXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q3JpdHNbSW5kZXhdLkFuZE9yID0gJ0FuZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NyaXRzLnB1c2goeyBGaWVsZDogJ0F2ZXJhZ2UnLCBDb25kaXRpb246ICc+JywgVmFsdWU6IDAsIEFuZE9yOiAnTm9uZScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENyaXRlcmlhKG5ld0NyaXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwdWxsLWxlZnRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvaW50cyA9IHNlbGVjdGVkRGF0YS5maWx0ZXIoZiA9PiAoZi5RdWFsaXR5RmxhZ3MvTWF0aC5wb3coMiw0KSAmIDEpICE9PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwID0+IHAuUXVhbGl0eUZsYWdzID0gcC5RdWFsaXR5RmxhZ3MtIE1hdGgucG93KDIsIDQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGbGFnRGF0YShwb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5VbmZsYWcgQWxsPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2ludHMgPSBzZWxlY3RlZERhdGEuZmlsdGVyKGYgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZSA9IGNyaXRlcmlhLm1hcChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjLkNvbmRpdGlvbiA9PSAnPCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPCBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYy5Db25kaXRpb24gPT0gJzw9JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA8PSBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYy5Db25kaXRpb24gPT0gJz49JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA+PSBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYy5Db25kaXRpb24gPT0gJz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFZhbHVlOiBmW2MuRmllbGRdID4gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA9PSBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmUucmVkdWNlKChhLCBiLCBpLCBzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHJldHVybiBiLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc291cmNlW2ktMV0uQW5kT3IgPT0gJ09yJykgcmV0dXJuIGEgfHwgYi5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIGEgJiYgYi5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHAgPT4gcC5RdWFsaXR5RmxhZ3MgPSBwLlF1YWxpdHlGbGFncyArIE1hdGgucG93KDIsIDQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGbGFnRGF0YShwb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Qcm9jZXNzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBPcHRpb25zID0gKGRhdGFTb3VyY2U6IFRyZW5EQVAuaURhdGFTZXRSZXR1cm4pID0+IHtcclxuICAgIGlmIChkYXRhU291cmNlID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBlbHNlIGlmIChkYXRhU291cmNlLkRhdGEgPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBpZiAoZGF0YVNvdXJjZS5EYXRhU291cmNlLlR5cGUgPT09ICdUcmVuREFQREInKSB7XHJcbiAgICAgICAgKGRhdGFTb3VyY2UuRGF0YSBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhW10pLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA+IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA9PSBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAwO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBkYXRhU291cmNlLkRhdGEubWFwKGNoYW5uZWwgPT4gPFRyZW5EQVBEQkNoYW5uZWwga2V5PXtjaGFubmVsLklEfSBjaGFubmVsPXtjaGFubmVsIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGF9IC8+KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRhdGFTb3VyY2UuRGF0YVNvdXJjZS5UeXBlID09PSAnU2FwcGhpcmUnKSB7XHJcbiAgICAgICAgKGRhdGFTb3VyY2UuRGF0YSBhcyBUcmVuREFQLmlTYXBwaGlyZVJldHVybkRhdGFbXSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID4gYi5NZXRlciArICcgLSAnICsgYi5OYW1lKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID09IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuRGF0YS5tYXAoY2hhbm5lbCA9PiA8U2FwcGhpcmVDaGFubmVsIGtleT17Y2hhbm5lbC5JRH0gY2hhbm5lbD17Y2hhbm5lbCBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhfSAvPik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoZGF0YVNvdXJjZS5EYXRhU291cmNlLlR5cGUgPT09ICdPcGVuSGlzdG9yaWFuJykge1xyXG4gICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pT3Blbkhpc3RvcmlhblJldHVybltdKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhLkRldmljZSArICcgLSAnICsgYS5EZXNjcmlwdGlvbiA+IGIuRGV2aWNlICsgJyAtICcgKyBiLkRlc2NyaXB0aW9uKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS5EZXZpY2UgKyAnIC0gJyArIGEuRGVzY3JpcHRpb24gPT0gYi5EZXZpY2UgKyAnIC0gJyArIGIuRGVzY3JpcHRpb24pIHJldHVybiAwO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBkYXRhU291cmNlLkRhdGEubWFwKGNoYW5uZWwgPT4gPE9wZW5IaXN0b3JpYW5DaGFubmVsIGtleT17Y2hhbm5lbC5JRH0gY2hhbm5lbD17Y2hhbm5lbCBhcyBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJufSAvPik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuRGF0YS5tYXAoY2hhbm5lbCA9PiA8T3RoZXJDaGFubmVsIGtleT17Y2hhbm5lbC5JRH0gY2hhbm5lbD17Y2hhbm5lbH0gLz4pO1xyXG59XHJcblxyXG5jb25zdCBUcmVuREFQREJDaGFubmVsID0gKHByb3BzOiB7IGNoYW5uZWw6IFRyZW5EQVAuaVhEQVJldHVybkRhdGEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWwuSUR9Pntwcm9wcy5jaGFubmVsLk1ldGVyICsgJyAtICcgKyBwcm9wcy5jaGFubmVsLk5hbWV9PC9vcHRpb24+XHJcbn1cclxuXHJcbmNvbnN0IFNhcHBoaXJlQ2hhbm5lbCA9IChwcm9wczogeyBjaGFubmVsOiBUcmVuREFQLmlTYXBwaGlyZVJldHVybkRhdGEgfSkgPT4ge1xyXG4gICAgaWYgKHByb3BzLmNoYW5uZWwuQ2hhcmFjdGVyaXN0aWMuaW5kZXhPZignSFJNUycpID49IDApXHJcbiAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWwuSUR9PntgJHtwcm9wcy5jaGFubmVsLk1ldGVyfSAtICR7cHJvcHMuY2hhbm5lbC5OYW1lfSBIYXJtb25pYzogJHtwcm9wcy5jaGFubmVsLkhhcm1vbmljfWB9PC9vcHRpb24+XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWwuSUR9Pntwcm9wcy5jaGFubmVsLk1ldGVyICsgJyAtICcgKyBwcm9wcy5jaGFubmVsLk5hbWV9PC9vcHRpb24+XHJcbn1cclxuXHJcbmNvbnN0IE9wZW5IaXN0b3JpYW5DaGFubmVsID0gKHByb3BzOiB7IGNoYW5uZWw6IFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWwuSUR9Pntwcm9wcy5jaGFubmVsLkRldmljZSArICcgLSAnICsgcHJvcHMuY2hhbm5lbC5EZXNjcmlwdGlvbn08L29wdGlvbj5cclxufVxyXG5cclxuXHJcbmNvbnN0IE90aGVyQ2hhbm5lbCA9IChwcm9wczogeyBjaGFubmVsOiBvYmplY3QgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWxbJ0lEJ119Pntwcm9wcy5jaGFubmVsWydOYW1lJ119PC9vcHRpb24+XHJcbn1cclxuXHJcbmNvbnN0IEZsYWdDcml0ZXJpYSA9IChwcm9wczoge0ZpZWxkLCBDb25kaXRpb24sIFZhbHVlLCBBbmRPciwgVXBkYXRlOiAocmVjb3JkKSA9PiB2b2lkLCBBZGQ6ICgpID0+IHZvaWR9KSA9PiB7XHJcbiAgICBjb25zdCBbZmllbGQsIHNldEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPCdNYXhpbXVtJyB8ICdNaW5pbXVtJyB8ICdBdmVyYWdlJz4ocHJvcHMuRmllbGQpO1xyXG4gICAgY29uc3QgW2NvbmRpdGlvbiwgc2V0Q29uZGl0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPCc8JyB8ICc8PScgfCAnPT0nIHwgJz49JyB8ICc+Jz4ocHJvcHMuQ29uZGl0aW9uKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihwcm9wcy5WYWx1ZSk7XHJcbiAgICBjb25zdCBbYW5kT3IsIHNldEFuZE9yXSA9IFJlYWN0LnVzZVN0YXRlPCdBbmQnIHwgJ09yJyB8ICdOb25lJz4ocHJvcHMuQW5kT3IpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuVXBkYXRlKHsgRmllbGQ6IGZpZWxkLCBDb25kaXRpb246IGNvbmRpdGlvbiwgVmFsdWU6IHZhbHVlLCBBbmRPcjogYW5kT3IgfSk7XHJcbiAgICB9LCBbZmllbGQsIGNvbmRpdGlvbiwgdmFsdWUsIGFuZE9yXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRBbmRPcihwcm9wcy5BbmRPcik7XHJcbiAgICB9LCBbcHJvcHMuQW5kT3JdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEZpZWxkKHByb3BzLkZpZWxkKTtcclxuICAgIH0sIFtwcm9wcy5GaWVsZF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29uZGl0aW9uKHByb3BzLkNvbmRpdGlvbik7XHJcbiAgICB9LCBbcHJvcHMuQ29uZGl0aW9uXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShwcm9wcy5WYWx1ZSk7XHJcbiAgICB9LCBbcHJvcHMuVmFsdWVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17ZmllbGR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRGaWVsZChldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTWF4aW11bSc+TWF4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0F2ZXJhZ2UnPkF2Zzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdNaW5pbXVtJz5NaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2NvbmRpdGlvbn0gb25DaGFuZ2U9eyhldnQpID0+IHNldENvbmRpdGlvbihldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17JzwnfT57JzwnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPD0nfT57Jzw9J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Jz09J30+eyc9PSd9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyc+PSd9PnsnPj0nfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPid9PnsnPid9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPjxpbnB1dCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT0nbnVtYmVyJyB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRWYWx1ZShwYXJzZUZsb2F0KGV2dC50YXJnZXQudmFsdWUpKX0gLz48L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPntcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5BbmRPciA9PSAnTm9uZScgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyBvbkNsaWNrPXsoKSA9PiBwcm9wcy5BZGQoKSB9PntQbHVzfTwvYnV0dG9uPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2FuZE9yfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0QW5kT3IoZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBbmQnPkFuZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nT3InPk9yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
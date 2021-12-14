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
            .domain([d3__WEBPACK_IMPORTED_MODULE_1__.min(props.Data, function (d) { return d.Minimum; }), d3__WEBPACK_IMPORTED_MODULE_1__.max(props.Data, function (d) { return d.Maximum; })]);
        svg.selectAll('g.yaxis').remove();
        var yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", "translate(" + (margin.left) + ",0)")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat(function (value) { return d3__WEBPACK_IMPORTED_MODULE_1__.format("~s")(value); }));
        var text = svg.append("g")
            .classed('yaxis', true)
            .append("text")
            .text("Channel Output");
        text.attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + ((margin.left) / 3) + ")").style("text-anchor", "middle");
        svg.selectAll('g.max').data([props.Data]).enter().append('g').attr('class', 'max').append('path').attr('stroke', 'red').attr('fill', 'none').attr('d', d3__WEBPACK_IMPORTED_MODULE_1__.line().x(function (d) { return x(moment__WEBPACK_IMPORTED_MODULE_2___default().utc(d.Timestamp).toDate().getTime()); }).y(function (d) { return y(d.Maximum); }));
        svg.selectAll('g.min').data([props.Data]).enter().append('g').attr('class', 'min').append('path').attr('stroke', 'red').attr('fill', 'none').attr('d', d3__WEBPACK_IMPORTED_MODULE_1__.line().x(function (d) { return x(moment__WEBPACK_IMPORTED_MODULE_2___default().utc(d.Timestamp).toDate().getTime()); }).y(function (d) { return y(d.Minimum); }));
        var points = svg.selectAll("g.points")
            .data([props.Data])
            .enter().append('g').attr('class', 'points');
        var point = points.selectAll('point').data(function (d) { return d; }).enter().append('g').attr('class', 'point');
        //point.append('path').attr('stroke', 'lightgray').attr('d', d => `M ${x(moment.utc(d.Timestamp).toDate().getTime())}, ${y(d.Average)} V ${y(d.Maximum)}Z`);
        //point.append('path').attr('stroke', 'lightgray').attr('d', d => `M ${x(moment.utc(d.Timestamp).toDate().getTime())}, ${y(d.Average)} V ${y(d.Minimum)}Z`)
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
            .domain(d3__WEBPACK_IMPORTED_MODULE_1__.extent(props.Data, function (d) { return d[type]; })) // then the domain of the graphic
            .thresholds(40); // then the numbers of bins
        var bins = histogram(props.Data.map(function (d) { return d[type]; }));
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
                { key: 'Minimum', field: 'Minimum', label: 'Min', content: function (item, key, style) { return item.Minimum.toFixed(2); } },
                { key: 'Average', field: 'Average', label: 'Avg', content: function (item, key, style) { return item.Average.toFixed(2); } },
                { key: 'Maximum', field: 'Maximum', label: 'Max', content: function (item, key, style) { return item.Maximum.toFixed(2); } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvZ3BhLXN5bWJvbHMvbGliL2luZGV4LmpzIiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvQ29uc3RhbnRzLnRzIiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVmlld0RhdGFTZXQvQ2hhcnQudHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVmlld0RhdGFTZXQvSGlzdG9ncmFtLnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L1BhZ2VkVGFibGUudHN4Iiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvVmlld0RhdGFTZXQvVmlld0RhdGFTZXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxvQkFBb0IsR0FBRyxvQkFBb0IsR0FBRyx5QkFBeUIsR0FBRyxtQkFBbUIsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxjQUFjLEdBQUcsYUFBYSxHQUFHLHVCQUF1QixHQUFHLG9CQUFvQixHQUFHLG9CQUFvQixHQUFHLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxlQUFlLEdBQUcsWUFBWSxHQUFHLGNBQWMsR0FBRyxlQUFlLEdBQUcsZUFBZSxHQUFHLFlBQVksR0FBRyxpQkFBaUIsR0FBRyxnQkFBZ0IsR0FBRyxjQUFjLEdBQUcsc0JBQXNCO0FBQ2pmLHNCQUFzQjtBQUN0QixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osZUFBZTtBQUNmLGVBQWU7QUFDZixjQUFjO0FBQ2QsWUFBWTtBQUNaLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1gsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQix1QkFBdUI7QUFDdkIsYUFBYTtBQUNiLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRHBCLHdHQUF3RztBQUN4Ryx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUV4RyxTQUFTO0FBQ1QsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdkIsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNqQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDckIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUVtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3ZGLHdHQUF3RztBQUN4RyxvQkFBb0I7QUFDcEIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekU7QUFFTjtBQUNHO0FBRWIsU0FBUyxLQUFLLENBQUMsS0FBd0c7SUFDbEksSUFBTSxHQUFHLEdBQUcseUNBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixnQkFBZ0MsMkNBQWMsQ0FBc0IsS0FBSyxDQUFDLE1BQXpFLFdBQVcsVUFBRSxjQUFjLFFBQThDLENBQUM7SUFFakYsNENBQWUsQ0FBQyxjQUFNLGlCQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUF0QixDQUFzQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFNUQsU0FBUyxXQUFXO1FBQ2hCLDRDQUE0QztJQUNoRCxDQUFDO0lBRUQsU0FBUyxVQUFVLENBQUMsSUFBa0M7UUFDbEQsSUFBTSxNQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFNUQsSUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLHNDQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDaEQsSUFBTSxHQUFHLEdBQUcsc0NBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDYixJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQzthQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRS9CLElBQU0sQ0FBQyxHQUFHLHdDQUFXLEVBQUU7YUFDbEIsTUFBTSxDQUFDLHNDQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxXQUFDLElBQUcsd0RBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQzthQUMxRCxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVuRCxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7YUFDL0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxjQUFjLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUNyRSxJQUFJLENBQUMsMENBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNoRCxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQzthQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDOUYsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVqQixJQUFNLENBQUMsR0FBRywyQ0FBYyxFQUFFO2FBQ3JCLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5QyxNQUFNLENBQUMsQ0FBQyxtQ0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsV0FBQyxJQUFJLFFBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUFDLEVBQUUsbUNBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFdBQUMsSUFBSSxRQUFDLENBQUMsT0FBTyxFQUFULENBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0RixHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xDLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7YUFDL0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ3ZELElBQUksQ0FBQyx3Q0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFhLElBQUssNkNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLENBQUM7UUFFdEgsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDdkIsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7YUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNkLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLHlCQUF5QixHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVuSSxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxvQ0FBTyxFQUE4QixDQUFDLENBQUMsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLGlEQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQTdDLENBQTZDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQVosQ0FBWSxDQUFDLENBQUM7UUFDeFEsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsb0NBQU8sRUFBOEIsQ0FBQyxDQUFDLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxpREFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUE3QyxDQUE2QyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDO1FBRXhRLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQ25DLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQixLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUdqRCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxFQUFELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hHLDRKQUE0SjtRQUM1SiwySkFBMko7UUFDM0osS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLGlEQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEYsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUMsRUFBQyxDQUFNLElBQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDbkQsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUdwQyxDQUFDO0lBSUQsT0FBTyxDQUNILDBEQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUN0QyxDQUNULENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR0Qsd0dBQXdHO0FBQ3hHLHdCQUF3QjtBQUN4QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFO0FBRU47QUFLVixTQUFTLFNBQVMsQ0FBQyxLQUE2QztJQUMzRSxJQUFNLEdBQUcsR0FBRyx5Q0FBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLGdCQUFrQiwyQ0FBYyxDQUFvQyxTQUFTLENBQUMsTUFBN0UsSUFBSSxVQUFFLE9BQU8sUUFBZ0UsQ0FBQztJQUNyRiw0Q0FBZSxDQUFDLGNBQU0saUJBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFbEUsU0FBUyxVQUFVLENBQUMsSUFBa0M7UUFDbEQsSUFBTSxNQUFNLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFNUQsSUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLHNDQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDaEQsSUFBTSxHQUFHLEdBQUcsc0NBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDYixJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQzthQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRS9CLElBQUksU0FBUyxHQUFHLHlDQUFZLEVBQWtCO2FBQ3pDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFHLHFDQUFxQzthQUN6RSxNQUFNLENBQUMsc0NBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxDQUFDLEVBQVAsQ0FBTyxDQUFxQixDQUFDLENBQUUsaUNBQWlDO2FBQ2xHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtRQUVoRCxJQUFNLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLENBQUMsRUFBUCxDQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXJELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSwyQkFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQyxHQUFDLENBQUM7UUFFaEQsSUFBTSxDQUFDLEdBQUcsMkNBQWMsRUFBRTthQUNyQixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFSLElBQUksMkJBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsRUFBSixDQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsR0FBRyxPQUFSLElBQUksMkJBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEVBQUUsRUFBSixDQUFJLENBQUMsSUFBRSxDQUFDLENBQUssc0dBQXNHO2FBQ3ZMLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBR25ELElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsY0FBYyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDckUsSUFBSSxDQUFDLDBDQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDYixLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQzthQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDOUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBRTNCLElBQU0sQ0FBQyxHQUFHLDJDQUFjLEVBQUU7YUFDckIsS0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUcsdURBQXVEO1FBRWpGLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ3JELElBQUksQ0FBQyx3Q0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLHlCQUF5QixHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUMxRixLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQzthQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDO1FBRW5CLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLEtBQUssRUFBRTthQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUNaLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBQyxDQUFDLElBQUssc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFHLEVBQXRDLENBQXNDLENBQUM7YUFDaEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFuRCxDQUFtRCxDQUFDO2FBQ3pFLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssUUFBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXpDLENBQXlDLENBQUM7YUFDaEUsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLENBQUMsSUFBSyxpQkFBVSxFQUFWLENBQVUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsT0FBTyxDQUNILDBEQUFLLEdBQUcsRUFBRSxHQUFHO1FBQ1QsMERBQUssU0FBUyxFQUFDLDhCQUE4QjtZQUN6Qyw0REFBTyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLElBQUksU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxjQUFPLENBQUMsU0FBUyxDQUFDLEVBQWxCLENBQWtCLEdBQUk7WUFDbkksNERBQU8sU0FBUyxFQUFDLGtCQUFrQixVQUFZLENBQ3pDO1FBQ1YsMERBQUssU0FBUyxFQUFDLDhCQUE4QjtZQUN6Qyw0REFBTyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBQyxHQUFHLElBQUssY0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFsQixDQUFrQixHQUFHO1lBQ3JILDREQUFPLFNBQVMsRUFBQyxrQkFBa0IsVUFBWSxDQUM3QztRQUNOLDBEQUFLLFNBQVMsRUFBQyw4QkFBOEI7WUFDekMsNERBQU8sU0FBUyxFQUFDLGtCQUFrQixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQUMsR0FBRyxJQUFLLGNBQU8sQ0FBQyxTQUFTLENBQUMsRUFBbEIsQ0FBa0IsR0FBSTtZQUN0SCw0REFBTyxTQUFTLEVBQUMsa0JBQWtCLFVBQVksQ0FDN0MsQ0FDSixDQUNULENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUdELHdHQUF3RztBQUN4Ryx5QkFBeUI7QUFDekIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFO0FBRWU7QUFDVztBQUcxQyxTQUFTLFVBQVUsQ0FBQyxLQUF5STtJQUNsSyxnQkFBNEIsMkNBQWMsQ0FBbUMsV0FBVyxDQUFDLE1BQXhGLFNBQVMsVUFBRSxZQUFZLFFBQWlFLENBQUM7SUFDMUYsZ0JBQTRCLDJDQUFjLENBQVUsSUFBSSxDQUFDLE1BQXhELFNBQVMsVUFBRSxZQUFZLFFBQWlDLENBQUM7SUFDMUQsZ0JBQWtCLDJDQUFjLENBQVMsQ0FBQyxDQUFDLE1BQTFDLElBQUksVUFBRSxPQUFPLFFBQTZCLENBQUM7SUFDNUMsZ0JBQTRCLDJDQUFjLENBQStCLEVBQUUsQ0FBQyxNQUEzRSxTQUFTLFVBQUUsWUFBWSxRQUFvRCxDQUFDO0lBQzdFLGdCQUEwQiwyQ0FBYyxDQUFTLEVBQUUsQ0FBQyxNQUFuRCxRQUFRLFVBQUUsV0FBVyxRQUE4QixDQUFDO0lBQ3JELGdCQUFzQiwyQ0FBYyxDQUFVLEtBQUssQ0FBQyxNQUFuRCxNQUFNLFVBQUUsU0FBUyxRQUFrQyxDQUFDO0lBQ3JELGdCQUFzQiwyQ0FBYyxDQUE2QixJQUFJLENBQUMsTUFBckUsTUFBTSxVQUFFLFNBQVMsUUFBb0QsQ0FBQztJQUU3RSxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQjtJQUNuRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUVqRCw0Q0FBZSxDQUFDO1FBQ1osSUFBTSxJQUFJLDRCQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDeEQsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQzs7Z0JBQzVDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN2RSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFHdkMsNENBQWUsQ0FBQztRQUNaLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsV0FBVyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVYLDRDQUFlLENBQUM7UUFDWixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFDLFlBQUksUUFBQyxDQUFDLFNBQVMsTUFBSyxXQUFLLENBQUMsUUFBUSwwQ0FBRSxTQUFTLEtBQUMsQ0FBQztRQUNuRixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQztZQUM5QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVyQixPQUFPLENBQ0g7UUFDSSxpREFBQyw4REFBSyxJQUE2QixVQUFVLEVBQUMsT0FBTyxFQUNqRCxJQUFJLEVBQUU7Z0JBQ0YsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtnQkFDNUQsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSyxXQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBdkIsQ0FBdUIsRUFBRTtnQkFDMUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSyxXQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBdkIsQ0FBdUIsRUFBRTtnQkFDMUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSyxXQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBdkIsQ0FBdUIsRUFBRTtnQkFDMUcsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSyxXQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsMkRBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFqQyxDQUFpQyxFQUFDO2dCQUNqSTtvQkFDSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQUMsSUFBSSxJQUFLLG9FQUFRLFNBQVMsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFFLGNBQVEsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLDZEQUFNLENBQVUsRUFBekcsQ0FBeUc7aUJBQUM7YUFDMUosRUFDRCxRQUFRLEVBQUUsZ0JBQU0sWUFBSSxhQUFNLENBQUMsU0FBUyxNQUFLLFdBQUssQ0FBQyxRQUFRLDBDQUFFLFNBQVMsTUFDbEUsSUFBSSxFQUFFLFNBQVMsRUFDZixPQUFPLEVBQUUsU0FBUyxFQUNsQixPQUFPLEVBQUUsVUFBQyxJQUFJLElBQU8sQ0FBQyxFQUN0QixTQUFTLEVBQUUsU0FBUyxFQUNwQixNQUFNLEVBQUUsVUFBQyxJQUFJO2dCQUNULElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTO29CQUMzQixZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUM7cUJBQ3ZCO29CQUNELFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUMzQixZQUFZLENBQUMsSUFBSSxDQUFDO2lCQUNyQjtZQUNMLENBQUMsR0FBSTtRQUNULDBEQUFLLFNBQVMsRUFBQyxZQUFZO1lBQ3ZCLDZEQUFRLFNBQVMsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLG9CQUFvQixFQUFDLE9BQU8sRUFBRSxjQUFNLGNBQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXJDLENBQXFDLEVBQUUsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUcsSUFBSSxDQUFVO1lBQ3RKLDZEQUFRLFNBQVMsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFDLGtCQUFrQixFQUFDLE9BQU8sRUFBRSxjQUFNLGNBQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQW5DLENBQW1DLEVBQUUsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUcsR0FBRyxDQUFVO1lBQ2pKLDRFQUF1QjtZQUN2Qiw0REFBTyxLQUFLLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxjQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQXZDLENBQXVDLEVBQUUsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBQyxHQUFJO1lBQ3hIOztnQkFBZ0IsUUFBUSxHQUFHLENBQUMsQ0FBUTtZQUNwQyw2REFBUSxTQUFTLEVBQUMsY0FBYyxFQUFDLEtBQUssRUFBQyxxQkFBcUIsRUFBQyxPQUFPLEVBQUUsY0FBTSxjQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFqRCxDQUFpRCxFQUFFLFFBQVEsRUFBRSxJQUFJLElBQUksUUFBUSxJQUFHLEdBQUcsQ0FBVTtZQUN6Syw2REFBUSxTQUFTLEVBQUMsY0FBYyxFQUFDLEtBQUssRUFBQyx1QkFBdUIsRUFBQyxPQUFPLEVBQUUsY0FBTSxjQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBdkQsQ0FBdUQsRUFBRSxRQUFRLEVBQUUsSUFBSSxJQUFJLFFBQVEsSUFBRyxJQUFJLENBQVUsQ0FFaEw7UUFDTiwwREFBSyxTQUFTLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFO1lBQ2xILDBEQUFLLFNBQVMsRUFBQyxjQUFjLEVBQUMsSUFBSSxFQUFDLFVBQVU7Z0JBQ3pDLDBEQUFLLFNBQVMsRUFBQyx1QkFBdUI7b0JBQ2xDLDBEQUFLLFNBQVMsRUFBQyxjQUFjO3dCQUN6Qix5REFBSSxTQUFTLEVBQUMsYUFBYSxzQkFBcUI7d0JBQ2hELDZEQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsY0FBTSxnQkFBUyxDQUFDLEtBQUssQ0FBQyxFQUFoQixDQUFnQjs0QkFDckUsMEVBQWtCLE1BQU0sYUFBZSxDQUNsQyxDQUNQO29CQUNOLDBEQUFLLFNBQVMsRUFBQyxZQUFZO3dCQUN2QiwwREFBSyxTQUFTLEVBQUMsS0FBSzs0QkFDaEIseURBQUksS0FBSyxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQztnQ0FDMUI7OENBQVcsTUFBTSxhQUFOLE1BQU07b0NBQU4sTUFBTSxDQUFFLFNBQVMsQ0FBTTtnQ0FDbEM7NkNBQVUsTUFBTSxhQUFOLE1BQU07b0NBQU4sTUFBTSxDQUFFLE9BQU8sQ0FBTTtnQ0FDL0I7NkNBQVUsTUFBTSxhQUFOLE1BQU07b0NBQU4sTUFBTSxDQUFFLE9BQU8sQ0FBTTtnQ0FDL0I7NkNBQVUsTUFBTSxhQUFOLE1BQU07b0NBQU4sTUFBTSxDQUFFLE9BQU8sQ0FBTTtnQ0FDL0I7O29DQUFVLDREQUFPLElBQUksRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLENBQUMsT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFlBQVksSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQUMsR0FBRyxJQUFLLGdCQUFTLHVCQUFNLE1BQU0sS0FBRSxZQUFZLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUUsRUFBdkksQ0FBdUksR0FBSSxDQUFLLENBQy9QLENBQ0gsQ0FDSjtvQkFDTiwwREFBSyxTQUFTLEVBQUMsY0FBYzt3QkFDekIsNkRBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFFO2dDQUN2RCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUN0QixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3JCLENBQUMsV0FBZTt3QkFDaEIsNkRBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsbUJBQW1CLEVBQUMsT0FBTyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsWUFBZ0IsQ0FDakcsQ0FDSixDQUNKLENBQ0osQ0FFUCxDQUNOLENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySUQsd0dBQXdHO0FBQ3hHLDBCQUEwQjtBQUMxQixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekU7QUFFd0I7QUFDNkc7QUFDdEg7QUFFUjtBQUNWO0FBQ1E7QUFFTTtBQUUzQixTQUFTLFdBQVc7SUFDL0IsSUFBTSxRQUFRLEdBQUcsd0RBQVcsRUFBRSxDQUFDO0lBQ3ZCLE1BQUUsR0FBSywyREFBUyxFQUFRLEdBQXRCLENBQXVCO0lBQ2pDLElBQU0sT0FBTyxHQUFHLHdEQUFXLENBQUMsd0RBQVksQ0FBQztJQUN6QyxJQUFNLFFBQVEsR0FBRyx3REFBVyxDQUFDLGdFQUFvQixDQUFDLENBQUM7SUFDN0MsZ0JBQWtCLDJDQUFjLENBQTJCLEVBQUUsQ0FBQyxNQUE3RCxJQUFJLFVBQUUsT0FBTyxRQUFnRCxDQUFDO0lBQy9ELGdCQUFrQywyQ0FBYyxDQUFTLENBQUMsQ0FBQyxNQUExRCxZQUFZLFVBQUUsZUFBZSxRQUE2QixDQUFDO0lBQzVELGdCQUE0QiwyQ0FBYyxDQUFTLEdBQUcsQ0FBQyxNQUF0RCxTQUFTLFVBQUUsWUFBWSxRQUErQixDQUFDO0lBQ3hELGdCQUFrQywyQ0FBYyxDQUErQixFQUFFLENBQUMsTUFBakYsWUFBWSxVQUFFLGVBQWUsUUFBb0QsQ0FBQztJQUNuRixnQkFBa0IsNkNBQWdCLENBQUMsVUFBQyxDQUFDLEVBQUMsQ0FBQyxJQUFLLFFBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFwRCxJQUFJLFVBQUUsT0FBTyxRQUF1QyxDQUFDO0lBQ3RELGdCQUFzQiwyQ0FBYyxDQUFVLEtBQUssQ0FBQyxNQUFuRCxNQUFNLFVBQUUsU0FBUyxRQUFrQyxDQUFDO0lBQ3JELGdCQUEwQiwyQ0FBYyxDQUF5RCxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBaEssUUFBUSxVQUFFLFdBQVcsUUFBMkksQ0FBQztJQUNsSyxnQkFBZ0MsMkNBQWMsQ0FBVSxLQUFLLENBQUMsTUFBN0QsV0FBVyxVQUFFLGNBQWMsUUFBa0MsQ0FBQztJQUMvRCxnQkFBb0MsMkNBQWMsQ0FBNkIsSUFBSSxDQUFDLE1BQW5GLGFBQWEsVUFBRSxnQkFBZ0IsUUFBb0QsQ0FBQztJQUNyRixnQkFBMEMsMkNBQWMsQ0FBeUIsRUFBNEIsQ0FBRSxNQUE5RyxnQkFBZ0IsVUFBRSxtQkFBbUIsUUFBeUUsQ0FBQztJQUV0SCw0Q0FBZSxDQUFDO1FBQ1osV0FBVyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFHYiw0Q0FBZSxDQUFDO1FBQ1osSUFBSSxRQUFRLEtBQUssV0FBVyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDcEQsUUFBUSxDQUFDLDZEQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsUUFBUSxDQUFDLDZEQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUV6Qiw0Q0FBZSxDQUFDOztRQUNaLElBQUcsWUFBWSxLQUFLLENBQUM7WUFDakIsZUFBZSxDQUFDLGdCQUFJLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFVBQVUsQ0FBQyxFQUFFLG1DQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUcsU0FBUyxJQUFJLEdBQUc7WUFDZixZQUFZLENBQUMsQ0FBQyxnQkFBSSxDQUFDLENBQUMsQ0FBQywwQ0FBRSxJQUFJLG1DQUFJLENBQUMsRUFBRSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRW5FLElBQU0sQ0FBQyxHQUFHLGFBQUMsZ0JBQUksQ0FBQyxJQUFJLENBQUMsWUFBRSxJQUFJLFNBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLFlBQVksRUFBakMsQ0FBaUMsQ0FBQywwQ0FBRSxJQUFJLG1DQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFFLElBQUksU0FBRSxDQUFDLEVBQUUsSUFBSSxTQUFTLEVBQWxCLENBQWtCLENBQUMsMENBQUUsSUFBSSxtQ0FBSSxFQUFFLENBQUM7UUFDdEgsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFHWCw0Q0FBZSxDQUFDO1FBQ1oscUVBQXFCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQUM7WUFDNUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRVgsNENBQWUsQ0FBQzs7UUFDWixJQUFNLENBQUMsR0FBRyxhQUFDLGdCQUFJLENBQUMsSUFBSSxDQUFDLFlBQUUsSUFBSSxTQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxZQUFZLEVBQWpDLENBQWlDLENBQUMsMENBQUUsSUFBSSxtQ0FBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBRSxJQUFJLFNBQUUsQ0FBQyxFQUFFLElBQUksU0FBUyxFQUFsQixDQUFrQixDQUFDLDBDQUFFLElBQUksbUNBQUksRUFBRSxDQUFDO1FBQ3RILGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2QixDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRWhCLDRDQUFlLENBQUM7UUFDWixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxZQUFZLEVBQWhDLENBQWdDLENBQUMsQ0FBQztRQUNwRSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTzthQUMvQixJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksU0FBUztZQUFFLE9BQU87UUFFOUMsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDM0MsVUFBVSxDQUFDLElBQWlDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSTtvQkFBRSxPQUFPLENBQUMsQ0FBQztxQkFDN0QsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJO29CQUFFLE9BQU8sQ0FBQyxDQUFDOztvQkFDbkUsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUM7U0FDTDthQUVJLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssZUFBZSxFQUFFO1lBQ3BELFVBQVUsQ0FBQyxJQUF1QyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFdBQVc7b0JBQUUsT0FBTyxDQUFDLENBQUM7cUJBQzdFLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBVztvQkFBRSxPQUFPLENBQUMsQ0FBQzs7b0JBQ25GLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDO1NBQ0w7YUFFSSxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUMvQyxVQUFVLENBQUMsSUFBc0MsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztnQkFDekQsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJO29CQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUM3RCxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUk7b0JBQUUsT0FBTyxDQUFDLENBQUM7O29CQUNuRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQztTQUNMO1FBRUQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0MsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFcEMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUVuQixTQUFTLFFBQVEsQ0FBQyxNQUFpRTtRQUMvRSxpRUFBaUIsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxjQUFPLENBQUMsQ0FBQyxDQUFDLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELE9BQU8sQ0FDSCwwREFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDO1FBQ3BCLDZEQUFLLE9BQU8sQ0FBQyxJQUFJLENBQU07UUFDdkIsNERBQU07UUFDTiwwREFBSyxTQUFTLEVBQUMsS0FBSztZQUNoQiwwREFBSyxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7Z0JBQ3pDLDhFQUEwQjtnQkFDMUIsNkRBQVEsU0FBUyxFQUFDLGNBQWMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxzQkFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQTNDLENBQTJDLElBQy9HLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLG9FQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQVUsRUFBbEYsQ0FBa0YsQ0FBQyxDQUM3RixDQUNQO1lBQ04sMERBQUssU0FBUyxFQUFDLEtBQUs7Z0JBQ2hCLDBFQUFzQjtnQkFDdEIsNkRBQVEsU0FBUyxFQUFDLGNBQWMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxtQkFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQTlCLENBQThCLElBQy9GLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNyQixDQUVQO1lBQ04sMERBQUssU0FBUyxFQUFDLE9BQU87Z0JBQ2xCLDZEQUFRLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFRLENBQUMsa0JBQXNCO2dCQUN0SSw2REFBUSxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQVEsc0JBQXNCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFDLGdCQUFvQixDQUN4SixDQUVKO1FBQ04sMERBQUssU0FBUyxFQUFDLEtBQUs7WUFDaEIsMERBQUssU0FBUyxFQUFDLEtBQUs7Z0JBQ2hCLDBEQUFLLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7b0JBQ3RFLDREQUFPLElBQUksRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsVUFBQyxHQUFHLElBQUsscUJBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFsQyxDQUFrQyxHQUFJO29CQUNsSyw0REFBTyxTQUFTLEVBQUMsa0JBQWtCLG1CQUFxQixDQUN0RDtnQkFDTixpREFBQywyQ0FBSyxJQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFlBQUUsSUFBSSxTQUFFLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixHQUFJO2dCQUM5SCxpREFBQywrQ0FBUyxJQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFlBQUUsSUFBSSxTQUFFLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLEdBQUksQ0FFakc7WUFDTiwwREFBSyxTQUFTLEVBQUMsS0FBSztnQkFDaEIsaURBQUMsZ0RBQVUsSUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQWEsR0FBSSxDQUM1RSxDQUVKO1FBRU4sMERBQUssU0FBUyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRTtZQUNsSCwwREFBSyxTQUFTLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBQyxVQUFVO2dCQUN6QywwREFBSyxTQUFTLEVBQUMsdUJBQXVCO29CQUNsQywwREFBSyxTQUFTLEVBQUMsY0FBYzt3QkFDekIseURBQUksU0FBUyxFQUFDLGFBQWEsc0JBQXFCO3dCQUNoRCw2REFBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxLQUFLLENBQUMsRUFBaEIsQ0FBZ0I7NEJBQ3JFLDBFQUFrQixNQUFNLGFBQWUsQ0FDbEMsQ0FDUDtvQkFDTiwwREFBSyxTQUFTLEVBQUMsWUFBWTt3QkFDdkIsMkVBQXVCO3dCQUN2Qix5REFBSSxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLElBQzFCLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSyxJQUFLLHdEQUFDLFlBQVksYUFBQyxHQUFHLEVBQUUsS0FBSyxJQUFNLENBQUMsSUFBRSxNQUFNLEVBQUUsVUFBQyxNQUFNO2dDQUN4RSxJQUFJLFFBQVEsNEJBQU8sUUFBUSxFQUFDLENBQUM7Z0NBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUM7Z0NBQ3pCLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDMUIsQ0FBQyxFQUFFLEdBQUcsRUFBRTtnQ0FDSixJQUFJLFFBQVEsNEJBQVEsUUFBUSxFQUFDLENBQUM7Z0NBQzlCLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dDQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0NBQzdFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDMUIsQ0FBQyxJQUFJLEVBVHVCLENBU3ZCLENBQUMsQ0FFTCxDQUNIO29CQUNOLDBEQUFLLFNBQVMsRUFBQyxjQUFjO3dCQUN6Qiw2REFBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQywyQkFBMkIsRUFBQyxPQUFPLEVBQUU7Z0NBQ2pFLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztnQ0FDaEYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsWUFBWSxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQUM7Z0NBQ3JFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDakIsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNyQixDQUFDLGlCQUFxQjt3QkFFdEIsNkRBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFFO2dDQUN2RCxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQUM7b0NBRTlCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBQzt3Q0FDcEIsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLEdBQUc7NENBQ2xCLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7NkNBQ3RELElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJOzRDQUN4QixPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOzZDQUN2RCxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSTs0Q0FDeEIsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs2Q0FDdkQsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLEdBQUc7NENBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7OzRDQUV2RCxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29DQUVoRSxDQUFDLENBQUMsQ0FBQztvQ0FDSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNO3dDQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDOzRDQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQzs2Q0FDdEIsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJOzRDQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7OzRDQUNuRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO29DQUM3QixDQUFDLEVBQUMsU0FBUyxDQUFDLENBQUM7Z0NBQ2pCLENBQUMsQ0FBQyxDQUFDO2dDQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO2dDQUN0RSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQ2pCLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDckIsQ0FBQyxjQUFrQjt3QkFDbkIsNkRBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsbUJBQW1CLEVBQUMsT0FBTyxFQUFFLGNBQU0sZ0JBQVMsQ0FBQyxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsWUFBZ0IsQ0FDakcsQ0FDSixDQUNKLENBQ0osQ0FHSixDQUNULENBQUM7QUFDTixDQUFDO0FBRUQsSUFBTSxPQUFPLEdBQUcsVUFBQyxVQUFrQztJQUMvQyxJQUFJLFVBQVUsSUFBSSxTQUFTO1FBQUUsT0FBTyxJQUFJLENBQUM7U0FDcEMsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLFNBQVM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUVuRCxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtRQUMzQyxVQUFVLENBQUMsSUFBaUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUk7Z0JBQUUsT0FBTyxDQUFDLENBQUM7aUJBQzdELElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSTtnQkFBRSxPQUFPLENBQUMsQ0FBQzs7Z0JBQ25FLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxJQUFJLHdEQUFDLGdCQUFnQixJQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFpQyxHQUFJLEVBQWpGLENBQWlGLENBQUMsQ0FBQztLQUM1SDtTQUNJLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1FBQy9DLFVBQVUsQ0FBQyxJQUFzQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3pELElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSTtnQkFBRSxPQUFPLENBQUMsQ0FBQztpQkFDN0QsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJO2dCQUFFLE9BQU8sQ0FBQyxDQUFDOztnQkFDbkUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFDRixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLElBQUksd0RBQUMsZUFBZSxJQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFpQyxHQUFJLEVBQWhGLENBQWdGLENBQUMsQ0FBQztLQUMzSDtTQUVJLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssZUFBZSxFQUFFO1FBQ3BELFVBQVUsQ0FBQyxJQUF1QyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQzFELElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBVztnQkFBRSxPQUFPLENBQUMsQ0FBQztpQkFDN0UsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxXQUFXO2dCQUFFLE9BQU8sQ0FBQyxDQUFDOztnQkFDbkYsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFDRixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLElBQUksd0RBQUMsb0JBQW9CLElBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQXVDLEdBQUksRUFBM0YsQ0FBMkYsQ0FBQyxDQUFDO0tBQ3RJOztRQUVHLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sSUFBSSx3REFBQyxZQUFZLElBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sR0FBSSxFQUFuRCxDQUFtRCxDQUFDLENBQUM7QUFDbkcsQ0FBQztBQUVELElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxLQUEwQztJQUNoRSxPQUFPLDZEQUFRLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQVU7QUFDdkcsQ0FBQztBQUVELElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBK0M7SUFDcEUsT0FBTyw2REFBUSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFVO0FBQ3ZHLENBQUM7QUFFRCxJQUFNLG9CQUFvQixHQUFHLFVBQUMsS0FBZ0Q7SUFDMUUsT0FBTyw2REFBUSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFVO0FBQy9HLENBQUM7QUFHRCxJQUFNLFlBQVksR0FBRyxVQUFDLEtBQTBCO0lBQzVDLE9BQU8sNkRBQVEsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBVTtBQUMvRSxDQUFDO0FBRUQsSUFBTSxZQUFZLEdBQUcsVUFBQyxLQUFrRjtJQUM5RixnQkFBb0IsMkNBQWMsQ0FBb0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFqRixLQUFLLFVBQUUsUUFBUSxRQUFrRSxDQUFDO0lBQ25GLGdCQUE0QiwyQ0FBYyxDQUFpQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQTFGLFNBQVMsVUFBRSxZQUFZLFFBQW1FLENBQUM7SUFDNUYsZ0JBQW9CLDJDQUFjLENBQVMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUF0RCxLQUFLLFVBQUUsUUFBUSxRQUF1QyxDQUFDO0lBQ3hELGdCQUFvQiwyQ0FBYyxDQUF3QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQXJFLEtBQUssVUFBRSxRQUFRLFFBQXNELENBQUM7SUFFN0UsNENBQWUsQ0FBQztRQUNaLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNyRixDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXJDLDRDQUFlLENBQUM7UUFDWixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRWxCLDRDQUFlLENBQUM7UUFDWixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRWxCLDRDQUFlLENBQUM7UUFDWixZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRXRCLDRDQUFlLENBQUM7UUFDWixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRWxCLE9BQU8sQ0FDSDtRQUNJLDBEQUFLLFNBQVMsRUFBQyxLQUFLO1lBQ2hCLDBEQUFLLFNBQVMsRUFBQyxLQUFLO2dCQUNoQiw2REFBUSxTQUFTLEVBQUMsY0FBYyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQUMsR0FBRyxJQUFLLGVBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQVksQ0FBQyxFQUFqQyxDQUFpQztvQkFDL0YsNkRBQVEsS0FBSyxFQUFDLFNBQVMsVUFBYTtvQkFDcEMsNkRBQVEsS0FBSyxFQUFDLFNBQVMsVUFBYTtvQkFDcEMsNkRBQVEsS0FBSyxFQUFDLFNBQVMsVUFBYSxDQUMvQixDQUNQO1lBQ04sMERBQUssU0FBUyxFQUFDLEtBQUs7Z0JBQ2hCLDZEQUFRLFNBQVMsRUFBQyxjQUFjLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBQyxHQUFHLElBQUssbUJBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQVksQ0FBQyxFQUFyQyxDQUFxQztvQkFDdkcsNkRBQVEsS0FBSyxFQUFFLEdBQUcsSUFBRyxHQUFHLENBQVU7b0JBQ2xDLDZEQUFRLEtBQUssRUFBRSxJQUFJLElBQUcsSUFBSSxDQUFVO29CQUNwQyw2REFBUSxLQUFLLEVBQUUsSUFBSSxJQUFHLElBQUksQ0FBVTtvQkFDcEMsNkRBQVEsS0FBSyxFQUFFLElBQUksSUFBRyxJQUFJLENBQVU7b0JBQ3BDLDZEQUFRLEtBQUssRUFBRSxHQUFHLElBQUcsR0FBRyxDQUFVLENBQzdCLENBQ1A7WUFDTiwwREFBSyxTQUFTLEVBQUMsS0FBSztnQkFBQyw0REFBTyxTQUFTLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBQyxHQUFHLElBQUssZUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXRDLENBQXNDLEdBQUksQ0FBTTtZQUNwSiwwREFBSyxTQUFTLEVBQUMsS0FBSyxJQUNoQixLQUFLLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQiw2REFBUSxTQUFTLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBRSxjQUFNLFlBQUssQ0FBQyxHQUFHLEVBQUUsRUFBWCxDQUFXLElBQUksNENBQUksQ0FBVSxFQUFDO2dCQUM5RSw2REFBUSxTQUFTLEVBQUMsY0FBYyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQUMsR0FBRyxJQUFLLGVBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQVksQ0FBQyxFQUFqQyxDQUFpQztvQkFDL0YsNkRBQVEsS0FBSyxFQUFDLEtBQUssVUFBYTtvQkFDaEMsNkRBQVEsS0FBSyxFQUFDLElBQUksU0FBWSxDQUN6QixDQUNWLENBQ0wsQ0FDTCxDQUNSO0FBQ0wsQ0FBQyIsImZpbGUiOiJWaWV3RGF0YVNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgaW5kZXgudHN4IC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMDkvMzAvMjAyMCAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlF1ZXN0aW9ubWFyayA9IGV4cG9ydHMuUmV3aW5kQnV0dG9uID0gZXhwb3J0cy5GYXN0Rm9yd2FyZEJ1dHRvbiA9IGV4cG9ydHMuUGF1c2VCdXR0b24gPSBleHBvcnRzLlN0b3BCdXR0b24gPSBleHBvcnRzLlBsYXlCdXR0b24gPSBleHBvcnRzLlNjcm9sbCA9IGV4cG9ydHMuSG91c2UgPSBleHBvcnRzLk1hZ25pZnlpbmdHbGFzcyA9IGV4cG9ydHMuRm91cldheUFycm93ID0gZXhwb3J0cy5JbnB1dE51bWJlcnMgPSBleHBvcnRzLkROQSA9IGV4cG9ydHMuRG93bkFycm93ID0gZXhwb3J0cy5SaWdodEFycm93ID0gZXhwb3J0cy5MZWZ0QXJyb3cgPSBleHBvcnRzLlVwQXJyb3cgPSBleHBvcnRzLkZsYWcgPSBleHBvcnRzLldyZW5jaCA9IGV4cG9ydHMuU3Bpbm5lciA9IGV4cG9ydHMuV2FybmluZyA9IGV4cG9ydHMuUGx1cyA9IGV4cG9ydHMuQ3Jvc3NNYXJrID0gZXhwb3J0cy5UcmFzaENhbiA9IGV4cG9ydHMuUGVuY2lsID0gZXhwb3J0cy5IZWF2eUNoZWNrTWFyayA9IHZvaWQgMDtcbmV4cG9ydHMuSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcbmV4cG9ydHMuUGVuY2lsID0gJ+Kcj++4jyc7XG5leHBvcnRzLlRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xuZXhwb3J0cy5Dcm9zc01hcmsgPSAn4p2MJztcbmV4cG9ydHMuUGx1cyA9ICfinpUnO1xuZXhwb3J0cy5XYXJuaW5nID0gJ+KaoO+4jyc7XG5leHBvcnRzLlNwaW5uZXIgPSAn8J+UhCc7XG5leHBvcnRzLldyZW5jaCA9ICfwn5SnJztcbmV4cG9ydHMuRmxhZyA9ICfwn5qpJztcbmV4cG9ydHMuVXBBcnJvdyA9ICfirIbvuI8nO1xuZXhwb3J0cy5MZWZ0QXJyb3cgPSAn4qyFJztcbmV4cG9ydHMuUmlnaHRBcnJvdyA9ICfinqEnO1xuZXhwb3J0cy5Eb3duQXJyb3cgPSAn4qyH77iPJztcbmV4cG9ydHMuRE5BID0gJ/Cfp6wnO1xuZXhwb3J0cy5JbnB1dE51bWJlcnMgPSAn8J+Uoic7XG5leHBvcnRzLkZvdXJXYXlBcnJvdyA9ICfimKknO1xuZXhwb3J0cy5NYWduaWZ5aW5nR2xhc3MgPSAn8J+UjSc7XG5leHBvcnRzLkhvdXNlID0gJ/Cfj6AnO1xuZXhwb3J0cy5TY3JvbGwgPSAn8J+TnCc7XG5leHBvcnRzLlBsYXlCdXR0b24gPSAn4pa277iPJztcbmV4cG9ydHMuU3RvcEJ1dHRvbiA9ICfij7nvuI8nO1xuZXhwb3J0cy5QYXVzZUJ1dHRvbiA9ICfij7jvuI8nO1xuZXhwb3J0cy5GYXN0Rm9yd2FyZEJ1dHRvbiA9ICfij6knO1xuZXhwb3J0cy5SZXdpbmRCdXR0b24gPSAn4o+qJztcbmV4cG9ydHMuUXVlc3Rpb25tYXJrID0gJz8nO1xuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbnN0YW50cy50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8zMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuLy8gZW1vamlzXHJcbmNvbnN0IEhlYXZ5Q2hlY2tNYXJrID0gJ+KclO+4jyc7XHJcbmNvbnN0IFBlbmNpbCA9ICfinI/vuI8nO1xyXG5jb25zdCBUcmFzaENhbiA9ICfwn5eR77iPJztcclxuY29uc3QgQ3Jvc3NNYXJrID0gJ+KdjCc7XHJcbmNvbnN0IFBsdXMgPSAn4p6VJztcclxuY29uc3QgV2FybmluZyA9ICfimqDvuI8nO1xyXG5jb25zdCBTcGlubmVyID0gJ/CflIQnO1xyXG5jb25zdCBXcmVuY2ggPSAn8J+Upyc7XHJcblxyXG5leHBvcnQgeyBIZWF2eUNoZWNrTWFyaywgUGVuY2lsLCBUcmFzaENhbiwgQ3Jvc3NNYXJrLCBQbHVzLCBXYXJuaW5nLCBTcGlubmVyLCBXcmVuY2ggfTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ2hhcnQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzE4LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0KHByb3BzOiB7IERhdGE6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10sIFNldFNlbGVjdGVkOiAocmVjb3JkOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludCkgPT4gdm9pZCB9KSB7XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbY2hhcnRBY3Rpb24sIHNldENoYXJ0QWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuQ2hhcnRBY3Rpb24+KCdQYW4nKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gSW5pdGlhbGl6ZShwcm9wcy5EYXRhKSwgW3Byb3BzLkRhdGFdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBIYW5kbGVSZXNldCgpIHtcclxuICAgICAgICAvL3NldFJlY29yZChyZWNvcmQuQ2FsY3VsYXRlQXhpc1JhbmdlKCd4JykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemUoZGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSkge1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHsgYm90dG9tOiA1MCwgbGVmdDogNzUsIHRvcDogNjUsIHJpZ2h0OiA0MCB9O1xyXG5cclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gMjcwKS8yO1xyXG4gICAgICAgIGNvbnN0IHN2Z1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gMjAwKSAvIDI7XHJcblxyXG4gICAgICAgIGQzLnNlbGVjdChyZWYuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKVxyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChyZWYuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc3ZnV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzdmdIZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVVdGMoKVxyXG4gICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudChwcm9wcy5EYXRhLCBkPT4gbW9tZW50LnV0YyhkLlRpbWVzdGFtcCkpKVxyXG4gICAgICAgICAgICAucmFuZ2UoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCAtIG1hcmdpbi5yaWdodF0pO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLnhheGlzJykucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd4YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgKyBcIilcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneGF4aXMnLCB0cnVlKS5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHN2Z1dpZHRoIC8gMikgKyBcIixcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tIC8gMykgKyBcIilcIilcclxuICAgICAgICAgICAgLnRleHQoXCJUaW1lXCIpXHJcblxyXG4gICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5yYW5nZShbc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pXHJcbiAgICAgICAgICAgIC5kb21haW4oW2QzLm1pbihwcm9wcy5EYXRhLCBkID0+IGQuTWluaW11bSksIGQzLm1heChwcm9wcy5EYXRhLCBkID0+IGQuTWF4aW11bSldKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy55YXhpcycpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneWF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChtYXJnaW4ubGVmdCkgKyBcIiwwKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KS50aWNrcyhNYXRoLmZsb29yKHN2Z0hlaWdodCAvIDUwKSArIDEpLnRpY2tGb3JtYXQoKHZhbHVlOiBudW1iZXIpID0+IGQzLmZvcm1hdChcIn5zXCIpKHZhbHVlKSkpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoJ3lheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnRleHQoXCJDaGFubmVsIE91dHB1dFwiKTtcclxuICAgICAgICB0ZXh0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKSB0cmFuc2xhdGUoLVwiICsgc3ZnSGVpZ2h0IC8gMiArIFwiLFwiICsgKChtYXJnaW4ubGVmdCkgLyAzKSArIFwiKVwiKS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLm1heCcpLmRhdGEoW3Byb3BzLkRhdGFdKS5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ21heCcpLmFwcGVuZCgncGF0aCcpLmF0dHIoJ3N0cm9rZScsICdyZWQnKS5hdHRyKCdmaWxsJywgJ25vbmUnKS5hdHRyKCdkJywgZDMubGluZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4oKS54KGQgPT4geChtb21lbnQudXRjKGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpKS55KGQgPT4geShkLk1heGltdW0pKSlcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLm1pbicpLmRhdGEoW3Byb3BzLkRhdGFdKS5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ21pbicpLmFwcGVuZCgncGF0aCcpLmF0dHIoJ3N0cm9rZScsICdyZWQnKS5hdHRyKCdmaWxsJywgJ25vbmUnKS5hdHRyKCdkJywgZDMubGluZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4oKS54KGQgPT4geChtb21lbnQudXRjKGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpKS55KGQgPT4geShkLk1pbmltdW0pKSlcclxuXHJcbiAgICAgICAgY29uc3QgcG9pbnRzID0gc3ZnLnNlbGVjdEFsbChcImcucG9pbnRzXCIpXHJcbiAgICAgICAgICAgIC5kYXRhKFtwcm9wcy5EYXRhXSlcclxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAncG9pbnRzJyk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBwb2ludCA9IHBvaW50cy5zZWxlY3RBbGwoJ3BvaW50JykuZGF0YShkID0+IGQpLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAncG9pbnQnKTtcclxuICAgICAgICAvL3BvaW50LmFwcGVuZCgncGF0aCcpLmF0dHIoJ3N0cm9rZScsICdsaWdodGdyYXknKS5hdHRyKCdkJywgZCA9PiBgTSAke3gobW9tZW50LnV0YyhkLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpKX0sICR7eShkLkF2ZXJhZ2UpfSBWICR7eShkLk1heGltdW0pfVpgKTtcclxuICAgICAgICAvL3BvaW50LmFwcGVuZCgncGF0aCcpLmF0dHIoJ3N0cm9rZScsICdsaWdodGdyYXknKS5hdHRyKCdkJywgZCA9PiBgTSAke3gobW9tZW50LnV0YyhkLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpKX0sICR7eShkLkF2ZXJhZ2UpfSBWICR7eShkLk1pbmltdW0pfVpgKVxyXG4gICAgICAgIHBvaW50LmFwcGVuZChcImNpcmNsZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgMy41KVxyXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KG1vbWVudC51dGMoZC5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSk7IH0pXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoZC5BdmVyYWdlKTsgfSlcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIChlLGQ6IGFueSkgPT4geyBwcm9wcy5TZXRTZWxlY3RlZChkKSB9KVxyXG4gICAgICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJyk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gc3R5bGU9e3sgdXNlclNlbGVjdDogJ25vbmUnIH19PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBIaXN0b2dyYW0udHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzE4LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlzdG9ncmFtKHByb3BzOiB7IERhdGE6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10gfSkge1xyXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGU8J01pbmltdW0nIHwgJ0F2ZXJhZ2UnIHwgJ01heGltdW0nPignQXZlcmFnZScpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IEluaXRpYWxpemUocHJvcHMuRGF0YSksIFtwcm9wcy5EYXRhLCB0eXBlXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZShkYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdKSB7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luID0geyBib3R0b206IDUwLCBsZWZ0OiA3NSwgdG9wOiA2NSwgcmlnaHQ6IDQwIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNzApIC8gMjtcclxuICAgICAgICBjb25zdCBzdmdXaWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIDIwMCkgLyAyO1xyXG5cclxuICAgICAgICBkMy5zZWxlY3QocmVmLmN1cnJlbnQpLnNlbGVjdEFsbCgnc3ZnJykucmVtb3ZlKClcclxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QocmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXHJcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHN2Z1dpZHRoKVxyXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0Jywgc3ZnSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgbGV0IGhpc3RvZ3JhbSA9IGQzLmhpc3RvZ3JhbTxudW1iZXIsIG51bWJlcj4oKVxyXG4gICAgICAgICAgICAudmFsdWUoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQ7IH0pICAgLy8gSSBuZWVkIHRvIGdpdmUgdGhlIHZlY3RvciBvZiB2YWx1ZVxyXG4gICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudChwcm9wcy5EYXRhLCBkID0+IGRbdHlwZV0pIGFzIFtudW1iZXIsIG51bWJlcl0pICAvLyB0aGVuIHRoZSBkb21haW4gb2YgdGhlIGdyYXBoaWNcclxuICAgICAgICAgICAgLnRocmVzaG9sZHMoNDApOyAvLyB0aGVuIHRoZSBudW1iZXJzIG9mIGJpbnNcclxuXHJcbiAgICAgICAgY29uc3QgYmlucyA9IGhpc3RvZ3JhbShwcm9wcy5EYXRhLm1hcChkID0+IGRbdHlwZV0pKTtcclxuXHJcbiAgICAgICAgbGV0IHlNYXggPSBNYXRoLm1heCguLi5iaW5zLm1hcChiID0+IGIubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5kb21haW4oW01hdGgubWluKC4uLmJpbnMubWFwKGEgPT4gYS54MCkpLCBNYXRoLm1heCguLi5iaW5zLm1hcChhID0+IGEueDEpKV0pICAgICAvLyBjYW4gdXNlIHRoaXMgaW5zdGVhZCBvZiAxMDAwIHRvIGhhdmUgdGhlIG1heCBvZiBkYXRhOiBkMy5tYXgoZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gK2QucHJpY2UgfSlcclxuICAgICAgICAgICAgLnJhbmdlKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggLSBtYXJnaW4ucmlnaHRdKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxyXG5cclxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChzdmdXaWR0aCAvIDIpICsgXCIsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSAvIDMpICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiQ2hhbm5lbCBPdXRwdXRcIilcclxuXHJcbiAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLnJhbmdlKFtzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tLCBtYXJnaW4udG9wXSlcclxuICAgICAgICAgICAgLmRvbWFpbihbMCwgeU1heF0pOyAgIC8vIGQzLmhpc3QgaGFzIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIFkgYXhpcyBvYnZpb3VzbHlcclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsMClcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MCkgdHJhbnNsYXRlKC1cIiArIHN2Z0hlaWdodCAvIDIgKyBcIixcIiArIG1hcmdpbi5sZWZ0IC8gMyArIFwiKVwiKVxyXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNvdW50c1wiKVxyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKS5yZW1vdmUoKTtcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxyXG4gICAgICAgICAgICAuZGF0YShiaW5zKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgMSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQpID0+IGB0cmFuc2xhdGUoJHt4KGQueDApfSwke3koZC5sZW5ndGgpfSlgKVxyXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiAoeChkLngxKSAtIHgoZC54MCkgPiAyID8geChkLngxKSAtIHgoZC54MCkgOiAyKSAtIDEpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgLSB5KGQubGVuZ3RoKSlcclxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIChkKSA9PiAnZGFya2JsdWUnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17dHlwZX0gY2hlY2tlZD17dHlwZSA9PSAnTWluaW11bSd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRUeXBlKCdNaW5pbXVtJykgfS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPk1pbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3R5cGUgPT0gJ0F2ZXJhZ2UnfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZSgnQXZlcmFnZScpfS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPkF2ZzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17dHlwZSA9PSAnTWF4aW11bSd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRUeXBlKCdNYXhpbXVtJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPk1heDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBQYWdlZFRhYmxlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8xOC8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgeyBQZW5jaWwsIEZsYWcgfSBmcm9tICdAZ3BhLWdlbXN0b25lL2dwYS1zeW1ib2xzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlZFRhYmxlKHByb3BzOiB7IERhdGE6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10sIFNlbGVjdGVkOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludCxTZXRGbGFnOiAocmVjb3JkOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludCApID0+IHZvaWR9KSB7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+KCdUaW1lc3RhbXAnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbdGFibGVEYXRhLCBzZXRUYWJsZURhdGFdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXT4oW10pO1xyXG4gICAgY29uc3QgW21heFBhZ2VzLCBzZXRNYXhQYWdlc10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDUwKTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHRhYmxlSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjcwOyAvLyA1MCArIDEwMCArIDcwICsgNTBcclxuICAgIGNvbnN0IG1heFJvd0NvdW50ID0gTWF0aC5mbG9vcih0YWJsZUhlaWdodCAvIDY1KTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbLi4ucHJvcHMuRGF0YV07XHJcbiAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhW3NvcnRGaWVsZF0gPiBiW3NvcnRGaWVsZF0pIHJldHVybiAoYXNjZW5kaW5nID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYVtzb3J0RmllbGRdID09PSBiW3NvcnRGaWVsZF0pIHJldHVybiAwO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAoYXNjZW5kaW5nID8gLTEgOiAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUYWJsZURhdGEoZGF0YS5zbGljZShwYWdlICogbWF4Um93Q291bnQsIChwYWdlICsgMSkgKiBtYXhSb3dDb3VudCkpO1xyXG4gICAgICAgIHNldE1heFBhZ2VzKE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIG1heFJvd0NvdW50KSAtIDEpO1xyXG4gICAgfSwgW3Byb3BzLkRhdGEsIGFzY2VuZGluZywgc29ydEZpZWxkXSk7XHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGFibGVEYXRhKHByb3BzLkRhdGEuc2xpY2UocGFnZSAqIG1heFJvd0NvdW50LCAocGFnZSArIDEpICogbWF4Um93Q291bnQpKTtcclxuICAgIH0sIFtwYWdlXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHByb3BzLkRhdGEuZmluZEluZGV4KGQgPT4gZC5UaW1lc3RhbXAgPT09IHByb3BzLlNlbGVjdGVkPy5UaW1lc3RhbXApO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdQYWdlID0gTWF0aC5mbG9vcihpbmRleCAvIG1heFJvd0NvdW50KTtcclxuICAgICAgICAgICAgc2V0UGFnZShuZXdQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuU2VsZWN0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUYWJsZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4gdGFibGVDbGFzcz0ndGFibGUnXHJcbiAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdUaW1lc3RhbXAnLCBmaWVsZDogJ1RpbWVzdGFtcCcsIGxhYmVsOiAnVGltZXN0YW1wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWluaW11bScsIGZpZWxkOiAnTWluaW11bScsIGxhYmVsOiAnTWluJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW0uTWluaW11bS50b0ZpeGVkKDIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdBdmVyYWdlJywgZmllbGQ6ICdBdmVyYWdlJywgbGFiZWw6ICdBdmcnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbS5BdmVyYWdlLnRvRml4ZWQoMikgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01heGltdW0nLCBmaWVsZDogJ01heGltdW0nLCBsYWJlbDogJ01heCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBpdGVtLk1heGltdW0udG9GaXhlZCgyKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnUXVhbGl0eUZsYWdzJywgZmllbGQ6ICdRdWFsaXR5RmxhZ3MnLCBsYWJlbDogJ0ZsYWdnZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbS5RdWFsaXR5RmxhZ3MgPiAwID8gRmxhZyA6ICcnfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbnVsbCwgbGFiZWw6ICcnLCBjb250ZW50OiAoaXRlbSkgPT4gPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgb25DbGljaz17KCkgPT4geyBzZXRSZWNvcmQoaXRlbSk7IHNldFRvZ2dsZSh0cnVlKTsgfSB9PntQZW5jaWx9PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtyZWNvcmQgPT4gcmVjb3JkLlRpbWVzdGFtcCA9PT0gcHJvcHMuU2VsZWN0ZWQ/LlRpbWVzdGFtcCB9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXt0YWJsZURhdGF9XHJcbiAgICAgICAgICAgICAgICBzb3J0S2V5PXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZGF0YSkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICBvblNvcnQ9eyhkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29sRmllbGQgPT09IHNvcnRGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRGaWVsZChkYXRhLmNvbEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHVsbC1yaWdodCc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyB0aXRsZT0nTW92ZSBiYWNrIDEwIHBhZ2VzJyBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwYWdlID49IDEwID8gcGFnZSAtIDEwIDogMCkpfSBkaXNhYmxlZD17cGFnZSA8PSAwfT57Jzw8J308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIHRpdGxlPSdNb3ZlIGJhY2sgMSBwYWdlJyBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwYWdlID49IDEgPyBwYWdlIC0gMSA6IDApKX0gZGlzYWJsZWQ9e3BhZ2UgPD0gMH0+eyc8J308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlBhZ2UmbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3BhZ2UgKyAxfSB0eXBlPSdudW1iZXInIG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRQYWdlKHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpIC0gMSl9IHN0eWxlPXt7d2lkdGg6IDQwfX0gLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPm9mJm5ic3A7eyBtYXhQYWdlcyArIDF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgdGl0bGU9J01vdmUgZm9yd2FyZCAxIHBhZ2UnIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKHBhZ2UgPD0gbWF4UGFnZXMgPyBwYWdlICsgMSA6IG1heFBhZ2VzKSl9IGRpc2FibGVkPXtwYWdlID49IG1heFBhZ2VzfT57Jz4nfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgdGl0bGU9J01vdmUgZm9yd2FyZCAxMCBwYWdlcycgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocGFnZSA8PSBtYXhQYWdlcyAtIDEwID8gcGFnZSArIDEwIDogbWF4UGFnZXMpKX0gZGlzYWJsZWQ9e3BhZ2UgPj0gbWF4UGFnZXN9PnsnPj4nfTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiByb2xlPVwiZGlhbG9nXCIgc3R5bGU9e3sgZGlzcGxheTogdG9nZ2xlID8gJ2Jsb2NrJyA6ICdub25lJywgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjQpJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPk1hcmsgQXMgRmxhZ2dlZDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiY2xvc2VcIn0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpc3RTdHlsZTogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5UaW1lOiB7cmVjb3JkPy5UaW1lc3RhbXB9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1heDoge3JlY29yZD8uTWF4aW11bX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QXZnOiB7cmVjb3JkPy5BdmVyYWdlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NaW46IHtyZWNvcmQ/Lk1pbmltdW19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZsYWc6IDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17KHJlY29yZD8uUXVhbGl0eUZsYWdzIC8gTWF0aC5wb3coMiwgNCkgJiAxKSAhPT0gMH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlY29yZCh7IC4uLnJlY29yZCwgUXVhbGl0eUZsYWdzOiBldnQudGFyZ2V0LmNoZWNrZWQgPyByZWNvcmQuUXVhbGl0eUZsYWdzICsgTWF0aC5wb3coMiwgNCkgOiByZWNvcmQuUXVhbGl0eUZsYWdzIC0gTWF0aC5wb3coMiwgNCl9KSB9Lz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0RmxhZyhyZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgVmlld0RhdGFTZXQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzE3LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFVwZGF0ZURhdGFTZXREYXRhLCBTZWxlY3REYXRhU2V0c1N0YXR1cywgRmV0Y2hEYXRhU2V0cywgU2VsZWN0UmVjb3JkLCBTZXRSZWNvcmRCeUlELCBHZXREYXRhU2V0RGF0YUZyb21JREIsIFVwZGF0ZURhdGFTZXREYXRhRmxhZyB9IGZyb20gJy4uL0RhdGFTZXRzU2xpY2UnXHJcbmltcG9ydCB7ICB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBQYWdlZFRhYmxlIGZyb20gJy4vUGFnZWRUYWJsZSc7XHJcbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0JztcclxuaW1wb3J0IEhpc3RvZ3JhbSBmcm9tICcuL0hpc3RvZ3JhbSc7XHJcbmltcG9ydCB7IElucHV0TnVtYmVycyB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvZ3BhLXN5bWJvbHMnO1xyXG5pbXBvcnQgeyBQbHVzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdEYXRhU2V0KCkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zPHtpZH0+KCk7XHJcbiAgICBjb25zdCBkYXRhU2V0ID0gdXNlU2VsZWN0b3IoU2VsZWN0UmVjb3JkKVxyXG4gICAgY29uc3Qgd3NTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0c1N0YXR1cyk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlEYXRhU2V0UmV0dXJuW10+KFtdKTtcclxuICAgIGNvbnN0IFtkYXRhU291cmNlSUQsIHNldERhdGFTb3VyY2VJRF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW2NoYW5uZWxJRCwgc2V0Q2hhbm5lbElEXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJzAnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZERhdGEsIHNldFNlbGVjdGVkRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdPihbXSk7XHJcbiAgICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSBSZWFjdC51c2VSZWR1Y2VyKChzLF8pID0+IHMgKyAxLCAwKTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbY3JpdGVyaWEsIHNldENyaXRlcmlhXSA9IFJlYWN0LnVzZVN0YXRlPHsgRmllbGQ6IGFueSwgQ29uZGl0aW9uOiBhbnksIFZhbHVlOiBudW1iZXIsIEFuZE9yIH1bXT4oW3sgRmllbGQ6ICdBdmVyYWdlJywgQ29uZGl0aW9uOiAnPicsIFZhbHVlOiAwLCBBbmRPcjogJ05vbmUnIH1dKTtcclxuICAgIGNvbnN0IFtzaG93RmxhZ2dlZCwgc2V0U2hvd0ZsYWdnZWRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkUG9pbnQsIHNldFNlbGVjdGVkUG9pbnRdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ2hhbm5lbHMsIHNldFNlbGVjdGVkQ2hhbm5lbHNdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pRGF0YVNldFJldHVybj4oe30gYXMgVHJlbkRBUC5pRGF0YVNldFJldHVybiApO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3JpdGVyaWEoW3sgRmllbGQ6ICdBdmVyYWdlJywgQ29uZGl0aW9uOiAnPicsIFZhbHVlOiAwLCBBbmRPcjogJ05vbmUnIH1dKTtcclxuICAgIH0sIFt0b2dnbGVdKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod3NTdGF0dXMgPT09ICd1bml0aWF0ZWQnIHx8IHdzU3RhdHVzID09PSAnY2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goRmV0Y2hEYXRhU2V0cygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKFNldFJlY29yZEJ5SUQocGFyc2VJbnQoaWQpKSk7XHJcbiAgICB9LCBbZGlzcGF0Y2gsIHdzU3RhdHVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihkYXRhU291cmNlSUQgPT09IDApXHJcbiAgICAgICAgICAgIHNldERhdGFTb3VyY2VJRChkYXRhWzBdPy5EYXRhU291cmNlLklEID8/IDApO1xyXG4gICAgICAgIGlmKGNoYW5uZWxJRCA9PSAnMCcpXHJcbiAgICAgICAgICAgIHNldENoYW5uZWxJRCgoZGF0YVswXT8uRGF0YSA/PyBbeyBJRDonMCcgfV0pWzBdLklELnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBkID0gKGRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSBkYXRhU291cmNlSUQpPy5EYXRhID8/IFtdKS5maW5kKGRkID0+IGRkLklEID09IGNoYW5uZWxJRCk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgc2V0U2VsZWN0ZWREYXRhKGQpO1xyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBHZXREYXRhU2V0RGF0YUZyb21JREIoaWQpLnRoZW4oZCA9PiB7XHJcbiAgICAgICAgICAgIHNldERhdGEoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbZmxhZ10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZCA9IChkYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gZGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXSkuZmluZChkZCA9PiBkZC5JRCA9PSBjaGFubmVsSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIHNldFNlbGVjdGVkRGF0YShkKTtcclxuICAgICAgICBcclxuICAgIH0sIFtjaGFubmVsSURdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IGRhdGFTb3VyY2VJRCk7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2UgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YVNvdXJjZS5EYXRhID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoZGF0YVNvdXJjZS5EYXRhU291cmNlLlR5cGUgPT09ICdUcmVuREFQREInKSB7XHJcbiAgICAgICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YVtdKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID4gYi5NZXRlciArICcgLSAnICsgYi5OYW1lKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA9PSBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChkYXRhU291cmNlLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ09wZW5IaXN0b3JpYW4nKSB7XHJcbiAgICAgICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pT3Blbkhpc3RvcmlhblJldHVybltdKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5EZXZpY2UgKyAnIC0gJyArIGEuRGVzY3JpcHRpb24gPiBiLkRldmljZSArICcgLSAnICsgYi5EZXNjcmlwdGlvbikgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhLkRldmljZSArICcgLSAnICsgYS5EZXNjcmlwdGlvbiA9PSBiLkRldmljZSArICcgLSAnICsgYi5EZXNjcmlwdGlvbikgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGRhdGFTb3VyY2UuRGF0YVNvdXJjZS5UeXBlID09PSAnU2FwcGhpcmUnKSB7XHJcbiAgICAgICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pU2FwcGhpcmVSZXR1cm5EYXRhW10pLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLk1ldGVyICsgJyAtICcgKyBhLk5hbWUgPiBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID09IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENoYW5uZWxJRChkYXRhU291cmNlLkRhdGFbMF0uSUQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDaGFubmVscyhkYXRhU291cmNlKTtcclxuXHJcbiAgICB9LCBbZGF0YVNvdXJjZUlEXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gRmxhZ0RhdGEocmVjb3JkOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludCB8IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10pIHtcclxuICAgICAgICBVcGRhdGVEYXRhU2V0RGF0YShkYXRhU2V0LCBkYXRhU291cmNlSUQsIGNoYW5uZWxJRCwgcmVjb3JkKS50aGVuKCgpID0+IHNldEZsYWcoMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cclxuICAgICAgICAgICAgPGgzPntkYXRhU2V0Lk5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDE1LCB3aWR0aDogJzUwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRhdGEgU291cmNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17ZGF0YVNvdXJjZUlEfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0RGF0YVNvdXJjZUlEKHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoZCA9PiA8b3B0aW9uIGtleT17ZC5EYXRhU291cmNlLklEfSB2YWx1ZT17ZC5EYXRhU291cmNlLklEfT57ZC5EYXRhU291cmNlLk5hbWV9PC9vcHRpb24+KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaGFubmVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17Y2hhbm5lbElEfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q2hhbm5lbElEKGV2dC50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge09wdGlvbnMoc2VsZWN0ZWRDaGFubmVscykgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0yJz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAzMCwgbWFyZ2luUmlnaHQ6IDUgfX0gb25DbGljaz17KCkgPT4geyB9fT5BZGQgVmlydHVhbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6IDMwIH19IG9uQ2xpY2s9eygpID0+IHsgLypzZXRSZWNvcmQoaXRlbSk7IDsqLyBzZXRUb2dnbGUodHJ1ZSl9fT5GbGFnIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCIgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiA1LCBsZWZ0OiA1fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdmFsdWU9e3Nob3dGbGFnZ2VkLnRvU3RyaW5nKCl9IGNoZWNrZWQ9e3Nob3dGbGFnZ2VkfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0U2hvd0ZsYWdnZWQoZXZ0LnRhcmdldC5jaGVja2VkKSB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5TaG93IEZsYWdnZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFydCBEYXRhPXsoc2hvd0ZsYWdnZWQgPyBzZWxlY3RlZERhdGEgOiBzZWxlY3RlZERhdGEuZmlsdGVyKHNkID0+IHNkLlF1YWxpdHlGbGFncyA9PSAwKSl9IFNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZFBvaW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIaXN0b2dyYW0gRGF0YT17KHNob3dGbGFnZ2VkID8gc2VsZWN0ZWREYXRhIDogc2VsZWN0ZWREYXRhLmZpbHRlcihzZCA9PiBzZC5RdWFsaXR5RmxhZ3MgPT0gMCkpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VkVGFibGUgRGF0YT17c2VsZWN0ZWREYXRhfSBTZXRGbGFnPXtGbGFnRGF0YX0gU2VsZWN0ZWQ9e3NlbGVjdGVkUG9pbnQgfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHJvbGU9XCJkaWFsb2dcIiBzdHlsZT17eyBkaXNwbGF5OiB0b2dnbGUgPyAnYmxvY2snIDogJ25vbmUnLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNCknIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+TWFyayBBcyBGbGFnZ2VkPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJjbG9zZVwifSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Dcml0ZXJpYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3JpdGVyaWEubWFwKChjLCBJbmRleCkgPT4gPEZsYWdDcml0ZXJpYSBrZXk9e0luZGV4fSB7Li4uY30gVXBkYXRlPXsocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdDcml0cyA9IFsuLi5jcml0ZXJpYV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NyaXRzW0luZGV4XSA9IHJlY29yZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3JpdGVyaWEobmV3Q3JpdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IEFkZD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q3JpdHMgPSBbIC4uLmNyaXRlcmlhXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q3JpdHNbSW5kZXhdLkFuZE9yID0gJ0FuZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NyaXRzLnB1c2goeyBGaWVsZDogJ0F2ZXJhZ2UnLCBDb25kaXRpb246ICc+JywgVmFsdWU6IDAsIEFuZE9yOiAnTm9uZScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENyaXRlcmlhKG5ld0NyaXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwdWxsLWxlZnRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvaW50cyA9IHNlbGVjdGVkRGF0YS5maWx0ZXIoZiA9PiAoZi5RdWFsaXR5RmxhZ3MvTWF0aC5wb3coMiw0KSAmIDEpICE9PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwID0+IHAuUXVhbGl0eUZsYWdzID0gcC5RdWFsaXR5RmxhZ3MtIE1hdGgucG93KDIsIDQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGbGFnRGF0YShwb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5VbmZsYWcgQWxsPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2ludHMgPSBzZWxlY3RlZERhdGEuZmlsdGVyKGYgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZSA9IGNyaXRlcmlhLm1hcChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjLkNvbmRpdGlvbiA9PSAnPCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPCBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYy5Db25kaXRpb24gPT0gJzw9JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA8PSBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYy5Db25kaXRpb24gPT0gJz49JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA+PSBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYy5Db25kaXRpb24gPT0gJz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFZhbHVlOiBmW2MuRmllbGRdID4gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA9PSBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmUucmVkdWNlKChhLCBiLCBpLCBzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHJldHVybiBiLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc291cmNlW2ktMV0uQW5kT3IgPT0gJ09yJykgcmV0dXJuIGEgfHwgYi5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIGEgJiYgYi5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHAgPT4gcC5RdWFsaXR5RmxhZ3MgPSBwLlF1YWxpdHlGbGFncyArIE1hdGgucG93KDIsIDQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGbGFnRGF0YShwb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Qcm9jZXNzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBPcHRpb25zID0gKGRhdGFTb3VyY2U6IFRyZW5EQVAuaURhdGFTZXRSZXR1cm4pID0+IHtcclxuICAgIGlmIChkYXRhU291cmNlID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBlbHNlIGlmIChkYXRhU291cmNlLkRhdGEgPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBpZiAoZGF0YVNvdXJjZS5EYXRhU291cmNlLlR5cGUgPT09ICdUcmVuREFQREInKSB7XHJcbiAgICAgICAgKGRhdGFTb3VyY2UuRGF0YSBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhW10pLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA+IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA9PSBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAwO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBkYXRhU291cmNlLkRhdGEubWFwKGNoYW5uZWwgPT4gPFRyZW5EQVBEQkNoYW5uZWwga2V5PXtjaGFubmVsLklEfSBjaGFubmVsPXtjaGFubmVsIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGF9IC8+KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRhdGFTb3VyY2UuRGF0YVNvdXJjZS5UeXBlID09PSAnU2FwcGhpcmUnKSB7XHJcbiAgICAgICAgKGRhdGFTb3VyY2UuRGF0YSBhcyBUcmVuREFQLmlTYXBwaGlyZVJldHVybkRhdGFbXSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID4gYi5NZXRlciArICcgLSAnICsgYi5OYW1lKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID09IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuRGF0YS5tYXAoY2hhbm5lbCA9PiA8U2FwcGhpcmVDaGFubmVsIGtleT17Y2hhbm5lbC5JRH0gY2hhbm5lbD17Y2hhbm5lbCBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhfSAvPik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoZGF0YVNvdXJjZS5EYXRhU291cmNlLlR5cGUgPT09ICdPcGVuSGlzdG9yaWFuJykge1xyXG4gICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pT3Blbkhpc3RvcmlhblJldHVybltdKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhLkRldmljZSArICcgLSAnICsgYS5EZXNjcmlwdGlvbiA+IGIuRGV2aWNlICsgJyAtICcgKyBiLkRlc2NyaXB0aW9uKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS5EZXZpY2UgKyAnIC0gJyArIGEuRGVzY3JpcHRpb24gPT0gYi5EZXZpY2UgKyAnIC0gJyArIGIuRGVzY3JpcHRpb24pIHJldHVybiAwO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBkYXRhU291cmNlLkRhdGEubWFwKGNoYW5uZWwgPT4gPE9wZW5IaXN0b3JpYW5DaGFubmVsIGtleT17Y2hhbm5lbC5JRH0gY2hhbm5lbD17Y2hhbm5lbCBhcyBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJufSAvPik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuRGF0YS5tYXAoY2hhbm5lbCA9PiA8T3RoZXJDaGFubmVsIGtleT17Y2hhbm5lbC5JRH0gY2hhbm5lbD17Y2hhbm5lbH0gLz4pO1xyXG59XHJcblxyXG5jb25zdCBUcmVuREFQREJDaGFubmVsID0gKHByb3BzOiB7IGNoYW5uZWw6IFRyZW5EQVAuaVhEQVJldHVybkRhdGEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWwuSUR9Pntwcm9wcy5jaGFubmVsLk1ldGVyICsgJyAtICcgKyBwcm9wcy5jaGFubmVsLk5hbWV9PC9vcHRpb24+XHJcbn1cclxuXHJcbmNvbnN0IFNhcHBoaXJlQ2hhbm5lbCA9IChwcm9wczogeyBjaGFubmVsOiBUcmVuREFQLmlTYXBwaGlyZVJldHVybkRhdGEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWwuSUR9Pntwcm9wcy5jaGFubmVsLk1ldGVyICsgJyAtICcgKyBwcm9wcy5jaGFubmVsLk5hbWV9PC9vcHRpb24+XHJcbn1cclxuXHJcbmNvbnN0IE9wZW5IaXN0b3JpYW5DaGFubmVsID0gKHByb3BzOiB7IGNoYW5uZWw6IFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWwuSUR9Pntwcm9wcy5jaGFubmVsLkRldmljZSArICcgLSAnICsgcHJvcHMuY2hhbm5lbC5EZXNjcmlwdGlvbn08L29wdGlvbj5cclxufVxyXG5cclxuXHJcbmNvbnN0IE90aGVyQ2hhbm5lbCA9IChwcm9wczogeyBjaGFubmVsOiBvYmplY3QgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWxbJ0lEJ119Pntwcm9wcy5jaGFubmVsWydOYW1lJ119PC9vcHRpb24+XHJcbn1cclxuXHJcbmNvbnN0IEZsYWdDcml0ZXJpYSA9IChwcm9wczoge0ZpZWxkLCBDb25kaXRpb24sIFZhbHVlLCBBbmRPciwgVXBkYXRlOiAocmVjb3JkKSA9PiB2b2lkLCBBZGQ6ICgpID0+IHZvaWR9KSA9PiB7XHJcbiAgICBjb25zdCBbZmllbGQsIHNldEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPCdNYXhpbXVtJyB8ICdNaW5pbXVtJyB8ICdBdmVyYWdlJz4ocHJvcHMuRmllbGQpO1xyXG4gICAgY29uc3QgW2NvbmRpdGlvbiwgc2V0Q29uZGl0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPCc8JyB8ICc8PScgfCAnPT0nIHwgJz49JyB8ICc+Jz4ocHJvcHMuQ29uZGl0aW9uKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihwcm9wcy5WYWx1ZSk7XHJcbiAgICBjb25zdCBbYW5kT3IsIHNldEFuZE9yXSA9IFJlYWN0LnVzZVN0YXRlPCdBbmQnIHwgJ09yJyB8ICdOb25lJz4ocHJvcHMuQW5kT3IpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuVXBkYXRlKHsgRmllbGQ6IGZpZWxkLCBDb25kaXRpb246IGNvbmRpdGlvbiwgVmFsdWU6IHZhbHVlLCBBbmRPcjogYW5kT3IgfSk7XHJcbiAgICB9LCBbZmllbGQsIGNvbmRpdGlvbiwgdmFsdWUsIGFuZE9yXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRBbmRPcihwcm9wcy5BbmRPcik7XHJcbiAgICB9LCBbcHJvcHMuQW5kT3JdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEZpZWxkKHByb3BzLkZpZWxkKTtcclxuICAgIH0sIFtwcm9wcy5GaWVsZF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29uZGl0aW9uKHByb3BzLkNvbmRpdGlvbik7XHJcbiAgICB9LCBbcHJvcHMuQ29uZGl0aW9uXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShwcm9wcy5WYWx1ZSk7XHJcbiAgICB9LCBbcHJvcHMuVmFsdWVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17ZmllbGR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRGaWVsZChldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTWF4aW11bSc+TWF4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0F2ZXJhZ2UnPkF2Zzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdNaW5pbXVtJz5NaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2NvbmRpdGlvbn0gb25DaGFuZ2U9eyhldnQpID0+IHNldENvbmRpdGlvbihldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17JzwnfT57JzwnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPD0nfT57Jzw9J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Jz09J30+eyc9PSd9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyc+PSd9PnsnPj0nfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPid9PnsnPid9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPjxpbnB1dCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT0nbnVtYmVyJyB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRWYWx1ZShwYXJzZUZsb2F0KGV2dC50YXJnZXQudmFsdWUpKX0gLz48L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPntcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5BbmRPciA9PSAnTm9uZScgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyBvbkNsaWNrPXsoKSA9PiBwcm9wcy5BZGQoKSB9PntQbHVzfTwvYnV0dG9uPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2FuZE9yfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0QW5kT3IoZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBbmQnPkFuZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nT3InPk9yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
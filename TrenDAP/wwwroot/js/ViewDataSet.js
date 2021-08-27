(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["ViewDataSet"],{

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
            .attr("cx", function (d) { return x(moment__WEBPACK_IMPORTED_MODULE_2___default()(d.Timestamp).toDate().getTime()); })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L0NoYXJ0LnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L0hpc3RvZ3JhbS50c3giLCJ3ZWJwYWNrOi8vdHJlbmRhcC8uL3d3d3Jvb3QvVHlwZVNjcmlwdC9GZWF0dXJlcy9EYXRhU2V0cy9WaWV3RGF0YVNldC9QYWdlZFRhYmxlLnRzeCIsIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L1ZpZXdEYXRhU2V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdHQUF3RztBQUN4Ryx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUV4RyxTQUFTO0FBQ1QsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdkIsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNqQixJ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RUFBRSxVQUFDLEdBQUcsSUFBSyxlQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFZLENBQUMsRUFBakMsQ0FBaUM7b0JBQy9GLDZEQUFRLEtBQUssRUFBQyxLQUFLLFVBQWE7b0JBQ2hDLDZEQUFRLEtBQUssRUFBQyxJQUFJLFNBQVksQ0FDekIsQ0FDVixDQUNMLENBQ0wsQ0FDUjtBQUNMLENBQUMiLCJmaWxlIjoiVmlld0RhdGFTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uc3RhbnRzLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzMwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyBlbW9qaXNcclxuY29uc3QgSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcclxuY29uc3QgUGVuY2lsID0gJ+Kcj++4jyc7XHJcbmNvbnN0IFRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xyXG5jb25zdCBDcm9zc01hcmsgPSAn4p2MJztcclxuY29uc3QgUGx1cyA9ICfinpUnO1xyXG5jb25zdCBXYXJuaW5nID0gJ+KaoO+4jyc7XHJcbmNvbnN0IFNwaW5uZXIgPSAn8J+UhCc7XHJcbmNvbnN0IFdyZW5jaCA9ICfwn5SnJztcclxuXHJcbmV4cG9ydCB7IEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFRyYXNoQ2FuLCBDcm9zc01hcmssIFBsdXMsIFdhcm5pbmcsIFNwaW5uZXIsIFdyZW5jaCB9OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnQocHJvcHM6IHsgRGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSwgU2V0U2VsZWN0ZWQ6IChyZWNvcmQ6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50KSA9PiB2b2lkIH0pIHtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtjaGFydEFjdGlvbiwgc2V0Q2hhcnRBY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5DaGFydEFjdGlvbj4oJ1BhbicpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBJbml0aWFsaXplKHByb3BzLkRhdGEpLCBbcHJvcHMuRGF0YV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZVJlc2V0KCkge1xyXG4gICAgICAgIC8vc2V0UmVjb3JkKHJlY29yZC5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3gnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZShkYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdKSB7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luID0geyBib3R0b206IDUwLCBsZWZ0OiA3NSwgdG9wOiA2NSwgcmlnaHQ6IDQwIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNzApLzI7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSAod2luZG93LmlubmVyV2lkdGggLSAyMDApIC8gMjtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHN2Z0hlaWdodCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBkMy5zY2FsZVV0YygpXHJcbiAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KHByb3BzLkRhdGEsIGQ9PiBtb21lbnQudXRjKGQuVGltZXN0YW1wKSkpXHJcbiAgICAgICAgICAgIC5yYW5nZShbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0XSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cueGF4aXMnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ3hheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxyXG5cclxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd4YXhpcycsIHRydWUpLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc3ZnV2lkdGggLyAyKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcclxuXHJcbiAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLnJhbmdlKFtzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tLCBtYXJnaW4udG9wXSlcclxuICAgICAgICAgICAgLmRvbWFpbihbZDMubWluKHByb3BzLkRhdGEsIGQgPT4gZC5NaW5pbXVtKSwgZDMubWF4KHByb3BzLkRhdGEsIGQgPT4gZC5NYXhpbXVtKV0pO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLnlheGlzJykucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd5YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKG1hcmdpbi5sZWZ0KSArIFwiLDApXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpLnRpY2tzKE1hdGguZmxvb3Ioc3ZnSGVpZ2h0IC8gNTApICsgMSkudGlja0Zvcm1hdCgodmFsdWU6IG51bWJlcikgPT4gZDMuZm9ybWF0KFwifnNcIikodmFsdWUpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZCgneWF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNoYW5uZWwgT3V0cHV0XCIpO1xyXG4gICAgICAgIHRleHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBzdmdIZWlnaHQgLyAyICsgXCIsXCIgKyAoKG1hcmdpbi5sZWZ0KSAvIDMpICsgXCIpXCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cubWF4JykuZGF0YShbcHJvcHMuRGF0YV0pLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbWF4JykuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ3JlZCcpLmF0dHIoJ2ZpbGwnLCAnbm9uZScpLmF0dHIoJ2QnLCBkMy5saW5lPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PigpLngoZCA9PiB4KG1vbWVudC51dGMoZC5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSkpLnkoZCA9PiB5KGQuTWF4aW11bSkpKVxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cubWluJykuZGF0YShbcHJvcHMuRGF0YV0pLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbWluJykuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ3JlZCcpLmF0dHIoJ2ZpbGwnLCAnbm9uZScpLmF0dHIoJ2QnLCBkMy5saW5lPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PigpLngoZCA9PiB4KG1vbWVudC51dGMoZC5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSkpLnkoZCA9PiB5KGQuTWluaW11bSkpKVxyXG5cclxuICAgICAgICBjb25zdCBwb2ludHMgPSBzdmcuc2VsZWN0QWxsKFwiZy5wb2ludHNcIilcclxuICAgICAgICAgICAgLmRhdGEoW3Byb3BzLkRhdGFdKVxyXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludHMnKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzLnNlbGVjdEFsbCgncG9pbnQnKS5kYXRhKGQgPT4gZCkuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludCcpO1xyXG4gICAgICAgIC8vcG9pbnQuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ2xpZ2h0Z3JheScpLmF0dHIoJ2QnLCBkID0+IGBNICR7eChtb21lbnQudXRjKGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpfSwgJHt5KGQuQXZlcmFnZSl9IFYgJHt5KGQuTWF4aW11bSl9WmApO1xyXG4gICAgICAgIC8vcG9pbnQuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ2xpZ2h0Z3JheScpLmF0dHIoJ2QnLCBkID0+IGBNICR7eChtb21lbnQudXRjKGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpfSwgJHt5KGQuQXZlcmFnZSl9IFYgJHt5KGQuTWluaW11bSl9WmApXHJcbiAgICAgICAgcG9pbnQuYXBwZW5kKFwiY2lyY2xlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCAzLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgobW9tZW50KGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpOyB9KVxyXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQuQXZlcmFnZSk7IH0pXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoZSxkOiBhbnkpID0+IHsgcHJvcHMuU2V0U2VsZWN0ZWQoZCkgfSlcclxuICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXt7IHVzZXJTZWxlY3Q6ICdub25lJyB9fT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgSGlzdG9ncmFtLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8xOC8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpc3RvZ3JhbShwcm9wczogeyBEYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdIH0pIHtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlPCdNaW5pbXVtJyB8ICdBdmVyYWdlJyB8ICdNYXhpbXVtJz4oJ0F2ZXJhZ2UnKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBJbml0aWFsaXplKHByb3BzLkRhdGEpLCBbcHJvcHMuRGF0YSwgdHlwZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemUoZGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSkge1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHsgYm90dG9tOiA1MCwgbGVmdDogNzUsIHRvcDogNjUsIHJpZ2h0OiA0MCB9O1xyXG5cclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gMjcwKSAvIDI7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSAod2luZG93LmlubmVyV2lkdGggLSAyMDApIC8gMjtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHN2Z0hlaWdodCk7XHJcblxyXG4gICAgICAgIGxldCBoaXN0b2dyYW0gPSBkMy5oaXN0b2dyYW08bnVtYmVyLCBudW1iZXI+KClcclxuICAgICAgICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkOyB9KSAgIC8vIEkgbmVlZCB0byBnaXZlIHRoZSB2ZWN0b3Igb2YgdmFsdWVcclxuICAgICAgICAgICAgLmRvbWFpbihkMy5leHRlbnQocHJvcHMuRGF0YSwgZCA9PiBkW3R5cGVdKSBhcyBbbnVtYmVyLCBudW1iZXJdKSAgLy8gdGhlbiB0aGUgZG9tYWluIG9mIHRoZSBncmFwaGljXHJcbiAgICAgICAgICAgIC50aHJlc2hvbGRzKDQwKTsgLy8gdGhlbiB0aGUgbnVtYmVycyBvZiBiaW5zXHJcblxyXG4gICAgICAgIGNvbnN0IGJpbnMgPSBoaXN0b2dyYW0ocHJvcHMuRGF0YS5tYXAoZCA9PiBkW3R5cGVdKSk7XHJcblxyXG4gICAgICAgIGxldCB5TWF4ID0gTWF0aC5tYXgoLi4uYmlucy5tYXAoYiA9PiBiLmxlbmd0aCkpO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAuZG9tYWluKFtNYXRoLm1pbiguLi5iaW5zLm1hcChhID0+IGEueDApKSwgTWF0aC5tYXgoLi4uYmlucy5tYXAoYSA9PiBhLngxKSldKSAgICAgLy8gY2FuIHVzZSB0aGlzIGluc3RlYWQgb2YgMTAwMCB0byBoYXZlIHRoZSBtYXggb2YgZGF0YTogZDMubWF4KGRhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuICtkLnByaWNlIH0pXHJcbiAgICAgICAgICAgIC5yYW5nZShbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0XSk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgKyBcIilcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc3ZnV2lkdGggLyAyKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNoYW5uZWwgT3V0cHV0XCIpXHJcblxyXG4gICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5yYW5nZShbc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pXHJcbiAgICAgICAgICAgIC5kb21haW4oWzAsIHlNYXhdKTsgICAvLyBkMy5oaXN0IGhhcyB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBZIGF4aXMgb2J2aW91c2x5XHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLDApXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcclxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBzdmdIZWlnaHQgLyAyICsgXCIsXCIgKyBtYXJnaW4ubGVmdCAvIDMgKyBcIilcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLnRleHQoXCJDb3VudHNcIilcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcclxuICAgICAgICAgICAgLmRhdGEoYmlucylcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDEpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkKSA9PiBgdHJhbnNsYXRlKCR7eChkLngwKX0sJHt5KGQubGVuZ3RoKX0pYClcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4gKHgoZC54MSkgLSB4KGQueDApID4gMiA/IHgoZC54MSkgLSB4KGQueDApIDogMikgLSAxKVxyXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20pIC0geShkLmxlbmd0aCkpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCkgPT4gJ2RhcmtibHVlJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e3R5cGV9IGNoZWNrZWQ9e3R5cGUgPT0gJ01pbmltdW0nfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZSgnTWluaW11bScpIH0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5NaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXt0eXBlID09ICdBdmVyYWdlJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldFR5cGUoJ0F2ZXJhZ2UnKX0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5Bdmc8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3R5cGUgPT0gJ01heGltdW0nfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZSgnTWF4aW11bScpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5NYXg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgUGFnZWRUYWJsZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IHsgUGVuY2lsLCBGbGFnIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9ncGEtc3ltYm9scyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZWRUYWJsZShwcm9wczogeyBEYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdLCBTZWxlY3RlZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQsU2V0RmxhZzogKHJlY29yZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQgKSA9PiB2b2lkfSkge1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PignVGltZXN0YW1wJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW3RhYmxlRGF0YSwgc2V0VGFibGVEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFttYXhQYWdlcywgc2V0TWF4UGFnZXNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPig1MCk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCB0YWJsZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDI3MDsgLy8gNTAgKyAxMDAgKyA3MCArIDUwXHJcbiAgICBjb25zdCBtYXhSb3dDb3VudCA9IE1hdGguZmxvb3IodGFibGVIZWlnaHQgLyA2NSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByb3BzLkRhdGFdO1xyXG4gICAgICAgIGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYVtzb3J0RmllbGRdID4gYltzb3J0RmllbGRdKSByZXR1cm4gKGFzY2VuZGluZyA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFbc29ydEZpZWxkXSA9PT0gYltzb3J0RmllbGRdKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gKGFzY2VuZGluZyA/IC0xIDogMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGFibGVEYXRhKGRhdGEuc2xpY2UocGFnZSAqIG1heFJvd0NvdW50LCAocGFnZSArIDEpICogbWF4Um93Q291bnQpKTtcclxuICAgICAgICBzZXRNYXhQYWdlcyhNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBtYXhSb3dDb3VudCkgLSAxKTtcclxuICAgIH0sIFtwcm9wcy5EYXRhLCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRhYmxlRGF0YShwcm9wcy5EYXRhLnNsaWNlKHBhZ2UgKiBtYXhSb3dDb3VudCwgKHBhZ2UgKyAxKSAqIG1heFJvd0NvdW50KSk7XHJcbiAgICB9LCBbcGFnZV0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9wcy5EYXRhLmZpbmRJbmRleChkID0+IGQuVGltZXN0YW1wID09PSBwcm9wcy5TZWxlY3RlZD8uVGltZXN0YW1wKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3UGFnZSA9IE1hdGguZmxvb3IoaW5kZXggLyBtYXhSb3dDb3VudCk7XHJcbiAgICAgICAgICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLlNlbGVjdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGFibGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+IHRhYmxlQ2xhc3M9J3RhYmxlJ1xyXG4gICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVGltZXN0YW1wJywgZmllbGQ6ICdUaW1lc3RhbXAnLCBsYWJlbDogJ1RpbWVzdGFtcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01pbmltdW0nLCBmaWVsZDogJ01pbmltdW0nLCBsYWJlbDogJ01pbicsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBpdGVtLk1pbmltdW0udG9GaXhlZCgyKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQXZlcmFnZScsIGZpZWxkOiAnQXZlcmFnZScsIGxhYmVsOiAnQXZnJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW0uQXZlcmFnZS50b0ZpeGVkKDIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNYXhpbXVtJywgZmllbGQ6ICdNYXhpbXVtJywgbGFiZWw6ICdNYXgnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbS5NYXhpbXVtLnRvRml4ZWQoMikgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1F1YWxpdHlGbGFncycsIGZpZWxkOiAnUXVhbGl0eUZsYWdzJywgbGFiZWw6ICdGbGFnZ2VkJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW0uUXVhbGl0eUZsYWdzID4gMCA/IEZsYWcgOiAnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG51bGwsIGxhYmVsOiAnJywgY29udGVudDogKGl0ZW0pID0+IDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IHsgc2V0UmVjb3JkKGl0ZW0pOyBzZXRUb2dnbGUodHJ1ZSk7IH0gfT57UGVuY2lsfTwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmVjb3JkID0+IHJlY29yZC5UaW1lc3RhbXAgPT09IHByb3BzLlNlbGVjdGVkPy5UaW1lc3RhbXAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17dGFibGVEYXRhfVxyXG4gICAgICAgICAgICAgICAgc29ydEtleT17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGRhdGEpID0+IHsgfX1cclxuICAgICAgICAgICAgICAgIGFzY2VuZGluZz17YXNjZW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgb25Tb3J0PXsoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvbEZpZWxkID09PSBzb3J0RmllbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZGF0YS5jb2xGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B1bGwtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgdGl0bGU9J01vdmUgYmFjayAxMCBwYWdlcycgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocGFnZSA+PSAxMCA/IHBhZ2UgLSAxMCA6IDApKX0gZGlzYWJsZWQ9e3BhZ2UgPD0gMH0+eyc8PCd9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyB0aXRsZT0nTW92ZSBiYWNrIDEgcGFnZScgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocGFnZSA+PSAxID8gcGFnZSAtIDEgOiAwKSl9IGRpc2FibGVkPXtwYWdlIDw9IDB9PnsnPCd9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5QYWdlJm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwYWdlICsgMX0gdHlwZT0nbnVtYmVyJyBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UGFnZShwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSAtIDEpfSBzdHlsZT17e3dpZHRoOiA0MH19IC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5vZiZuYnNwO3sgbWF4UGFnZXMgKyAxfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIHRpdGxlPSdNb3ZlIGZvcndhcmQgMSBwYWdlJyBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwYWdlIDw9IG1heFBhZ2VzID8gcGFnZSArIDEgOiBtYXhQYWdlcykpfSBkaXNhYmxlZD17cGFnZSA+PSBtYXhQYWdlc30+eyc+J308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIHRpdGxlPSdNb3ZlIGZvcndhcmQgMTAgcGFnZXMnIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKHBhZ2UgPD0gbWF4UGFnZXMgLSAxMCA/IHBhZ2UgKyAxMCA6IG1heFBhZ2VzKSl9IGRpc2FibGVkPXtwYWdlID49IG1heFBhZ2VzfT57Jz4+J308L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiIHN0eWxlPXt7IGRpc3BsYXk6IHRvZ2dsZSA/ICdibG9jaycgOiAnbm9uZScsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40KScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5NYXJrIEFzIEZsYWdnZWQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtcImNsb3NlXCJ9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGU6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGltZToge3JlY29yZD8uVGltZXN0YW1wfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NYXg6IHtyZWNvcmQ/Lk1heGltdW19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkF2Zzoge3JlY29yZD8uQXZlcmFnZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWluOiB7cmVjb3JkPy5NaW5pbXVtfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GbGFnOiA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9eyhyZWNvcmQ/LlF1YWxpdHlGbGFncyAvIE1hdGgucG93KDIsIDQpICYgMSkgIT09IDB9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQoeyAuLi5yZWNvcmQsIFF1YWxpdHlGbGFnczogZXZ0LnRhcmdldC5jaGVja2VkID8gcmVjb3JkLlF1YWxpdHlGbGFncyArIE1hdGgucG93KDIsIDQpIDogcmVjb3JkLlF1YWxpdHlGbGFncyAtIE1hdGgucG93KDIsIDQpfSkgfS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldEZsYWcocmVjb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFZpZXdEYXRhU2V0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8xNy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVcGRhdGVEYXRhU2V0RGF0YSwgU2VsZWN0RGF0YVNldHNTdGF0dXMsIEZldGNoRGF0YVNldHMsIFNlbGVjdFJlY29yZCwgU2V0UmVjb3JkQnlJRCwgR2V0RGF0YVNldERhdGFGcm9tSURCLCBVcGRhdGVEYXRhU2V0RGF0YUZsYWcgfSBmcm9tICcuLi9EYXRhU2V0c1NsaWNlJ1xyXG5pbXBvcnQgeyAgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUGFnZWRUYWJsZSBmcm9tICcuL1BhZ2VkVGFibGUnO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9DaGFydCc7XHJcbmltcG9ydCBIaXN0b2dyYW0gZnJvbSAnLi9IaXN0b2dyYW0nO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlcnMgfSBmcm9tICdAZ3BhLWdlbXN0b25lL2dwYS1zeW1ib2xzJztcclxuaW1wb3J0IHsgUGx1cyB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3RGF0YVNldCgpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtczx7aWR9PigpO1xyXG4gICAgY29uc3QgZGF0YVNldCA9IHVzZVNlbGVjdG9yKFNlbGVjdFJlY29yZClcclxuICAgIGNvbnN0IHdzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHNTdGF0dXMpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pRGF0YVNldFJldHVybltdPihbXSk7XHJcbiAgICBjb25zdCBbZGF0YVNvdXJjZUlELCBzZXREYXRhU291cmNlSURdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtjaGFubmVsSUQsIHNldENoYW5uZWxJRF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcwJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWREYXRhLCBzZXRTZWxlY3RlZERhdGFdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXT4oW10pO1xyXG4gICAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gUmVhY3QudXNlUmVkdWNlcigocyxfKSA9PiBzICsgMSwgMCk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2NyaXRlcmlhLCBzZXRDcml0ZXJpYV0gPSBSZWFjdC51c2VTdGF0ZTx7IEZpZWxkOiBhbnksIENvbmRpdGlvbjogYW55LCBWYWx1ZTogbnVtYmVyLCBBbmRPciB9W10+KFt7IEZpZWxkOiAnQXZlcmFnZScsIENvbmRpdGlvbjogJz4nLCBWYWx1ZTogMCwgQW5kT3I6ICdOb25lJyB9XSk7XHJcbiAgICBjb25zdCBbc2hvd0ZsYWdnZWQsIHNldFNob3dGbGFnZ2VkXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFBvaW50LCBzZXRTZWxlY3RlZFBvaW50XSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PihudWxsKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZENoYW5uZWxzLCBzZXRTZWxlY3RlZENoYW5uZWxzXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaURhdGFTZXRSZXR1cm4+KHt9IGFzIFRyZW5EQVAuaURhdGFTZXRSZXR1cm4gKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldENyaXRlcmlhKFt7IEZpZWxkOiAnQXZlcmFnZScsIENvbmRpdGlvbjogJz4nLCBWYWx1ZTogMCwgQW5kT3I6ICdOb25lJyB9XSk7XHJcbiAgICB9LCBbdG9nZ2xlXSk7XHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdzU3RhdHVzID09PSAndW5pdGlhdGVkJyB8fCB3c1N0YXR1cyA9PT0gJ2NoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNldHMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaChTZXRSZWNvcmRCeUlEKHBhcnNlSW50KGlkKSkpO1xyXG4gICAgfSwgW2Rpc3BhdGNoLCB3c1N0YXR1c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoZGF0YVNvdXJjZUlEID09PSAwKVxyXG4gICAgICAgICAgICBzZXREYXRhU291cmNlSUQoZGF0YVswXT8uRGF0YVNvdXJjZS5JRCA/PyAwKTtcclxuICAgICAgICBpZihjaGFubmVsSUQgPT0gJzAnKVxyXG4gICAgICAgICAgICBzZXRDaGFubmVsSUQoKGRhdGFbMF0/LkRhdGEgPz8gW3sgSUQ6JzAnIH1dKVswXS5JRC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZCA9IChkYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gZGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXSkuZmluZChkZCA9PiBkZC5JRCA9PSBjaGFubmVsSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIHNldFNlbGVjdGVkRGF0YShkKTtcclxuICAgIH0sIFtkYXRhXSk7XHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgR2V0RGF0YVNldERhdGFGcm9tSURCKGlkKS50aGVuKGQgPT4ge1xyXG4gICAgICAgICAgICBzZXREYXRhKGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2ZsYWddKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGQgPSAoZGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT09IGRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW10pLmZpbmQoZGQgPT4gZGQuSUQgPT0gY2hhbm5lbElEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBzZXRTZWxlY3RlZERhdGEoZCk7XHJcbiAgICAgICAgXHJcbiAgICB9LCBbY2hhbm5lbElEXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gZGF0YS5maW5kKGQgPT4gZC5EYXRhU291cmNlLklEID09PSBkYXRhU291cmNlSUQpO1xyXG4gICAgICAgIGlmIChkYXRhU291cmNlID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKGRhdGFTb3VyY2UuRGF0YSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2UuRGF0YVNvdXJjZS5UeXBlID09PSAnVHJlbkRBUERCJykge1xyXG4gICAgICAgICAgICAoZGF0YVNvdXJjZS5EYXRhIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGFbXSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA+IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhLk1ldGVyICsgJyAtICcgKyBhLk5hbWUgPT0gYi5NZXRlciArICcgLSAnICsgYi5OYW1lKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YVNvdXJjZS5EYXRhU291cmNlLlR5cGUgPT09ICdPcGVuSGlzdG9yaWFuJykge1xyXG4gICAgICAgICAgICAoZGF0YVNvdXJjZS5EYXRhIGFzIFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm5bXSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEuRGV2aWNlICsgJyAtICcgKyBhLkRlc2NyaXB0aW9uID4gYi5EZXZpY2UgKyAnIC0gJyArIGIuRGVzY3JpcHRpb24pIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYS5EZXZpY2UgKyAnIC0gJyArIGEuRGVzY3JpcHRpb24gPT0gYi5EZXZpY2UgKyAnIC0gJyArIGIuRGVzY3JpcHRpb24pIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDaGFubmVsSUQoZGF0YVNvdXJjZS5EYXRhWzBdLklELnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkQ2hhbm5lbHMoZGF0YVNvdXJjZSk7XHJcblxyXG4gICAgfSwgW2RhdGFTb3VyY2VJRF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEZsYWdEYXRhKHJlY29yZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQgfCBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdKSB7XHJcbiAgICAgICAgVXBkYXRlRGF0YVNldERhdGEoZGF0YVNldCwgZGF0YVNvdXJjZUlELCBjaGFubmVsSUQsIHJlY29yZCkudGhlbigoKSA9PiBzZXRGbGFnKDEpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XHJcbiAgICAgICAgICAgIDxoMz57ZGF0YVNldC5OYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93JyA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAxNSwgd2lkdGg6ICc1MCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EYXRhIFNvdXJjZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2RhdGFTb3VyY2VJRH0gb25DaGFuZ2U9eyhldnQpID0+IHNldERhdGFTb3VyY2VJRChwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSkgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKGQgPT4gPG9wdGlvbiBrZXk9e2QuRGF0YVNvdXJjZS5JRH0gdmFsdWU9e2QuRGF0YVNvdXJjZS5JRH0+e2QuRGF0YVNvdXJjZS5OYW1lfTwvb3B0aW9uPikgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2hhbm5lbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2NoYW5uZWxJRH0gb25DaGFuZ2U9eyhldnQpID0+IHNldENoYW5uZWxJRChldnQudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtPcHRpb25zKHNlbGVjdGVkQ2hhbm5lbHMpIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogMzAsIG1hcmdpblJpZ2h0OiA1IH19IG9uQ2xpY2s9eygpID0+IHsgfX0+QWRkIFZpcnR1YWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAzMCB9fSBvbkNsaWNrPXsoKSA9PiB7IC8qc2V0UmVjb3JkKGl0ZW0pOyA7Ki8gc2V0VG9nZ2xlKHRydWUpfX0+RmxhZyBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogNSwgbGVmdDogNX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHZhbHVlPXtzaG93RmxhZ2dlZC50b1N0cmluZygpfSBjaGVja2VkPXtzaG93RmxhZ2dlZH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFNob3dGbGFnZ2VkKGV2dC50YXJnZXQuY2hlY2tlZCkgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+U2hvdyBGbGFnZ2VkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhcnQgRGF0YT17KHNob3dGbGFnZ2VkID8gc2VsZWN0ZWREYXRhIDogc2VsZWN0ZWREYXRhLmZpbHRlcihzZCA9PiBzZC5RdWFsaXR5RmxhZ3MgPT0gMCkpfSBTZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWRQb2ludH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SGlzdG9ncmFtIERhdGE9eyhzaG93RmxhZ2dlZCA/IHNlbGVjdGVkRGF0YSA6IHNlbGVjdGVkRGF0YS5maWx0ZXIoc2QgPT4gc2QuUXVhbGl0eUZsYWdzID09IDApKX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlZFRhYmxlIERhdGE9e3NlbGVjdGVkRGF0YX0gU2V0RmxhZz17RmxhZ0RhdGF9IFNlbGVjdGVkPXtzZWxlY3RlZFBvaW50IH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiByb2xlPVwiZGlhbG9nXCIgc3R5bGU9e3sgZGlzcGxheTogdG9nZ2xlID8gJ2Jsb2NrJyA6ICdub25lJywgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjQpJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPk1hcmsgQXMgRmxhZ2dlZDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiY2xvc2VcIn0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3JpdGVyaWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NyaXRlcmlhLm1hcCgoYywgSW5kZXgpID0+IDxGbGFnQ3JpdGVyaWEga2V5PXtJbmRleH0gey4uLmN9IFVwZGF0ZT17KHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q3JpdHMgPSBbLi4uY3JpdGVyaWFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDcml0c1tJbmRleF0gPSByZWNvcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENyaXRlcmlhKG5ld0NyaXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBBZGQ9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0NyaXRzID0gWyAuLi5jcml0ZXJpYV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NyaXRzW0luZGV4XS5BbmRPciA9ICdBbmQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDcml0cy5wdXNoKHsgRmllbGQ6ICdBdmVyYWdlJywgQ29uZGl0aW9uOiAnPicsIFZhbHVlOiAwLCBBbmRPcjogJ05vbmUnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDcml0ZXJpYShuZXdDcml0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgcHVsbC1sZWZ0XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2ludHMgPSBzZWxlY3RlZERhdGEuZmlsdGVyKGYgPT4gKGYuUXVhbGl0eUZsYWdzL01hdGgucG93KDIsNCkgJiAxKSAhPT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzLmZvckVhY2gocCA9PiBwLlF1YWxpdHlGbGFncyA9IHAuUXVhbGl0eUZsYWdzLSBNYXRoLnBvdygyLCA0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxhZ0RhdGEocG9pbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+VW5mbGFnIEFsbDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnRzID0gc2VsZWN0ZWREYXRhLmZpbHRlcihmID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmUgPSBjcml0ZXJpYS5tYXAoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYy5Db25kaXRpb24gPT0gJzwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFZhbHVlOiBmW2MuRmllbGRdIDwgYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMuQ29uZGl0aW9uID09ICc8PScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPD0gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMuQ29uZGl0aW9uID09ICc+PScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPj0gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMuQ29uZGl0aW9uID09ICc+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA+IGMuVmFsdWUsIEFuZE9yOiBjLkFuZE9yIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPT0gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJlLnJlZHVjZSgoYSwgYiwgaSwgc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSByZXR1cm4gYi5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNvdXJjZVtpLTFdLkFuZE9yID09ICdPcicpIHJldHVybiBhIHx8IGIuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBhICYmIGIuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwID0+IHAuUXVhbGl0eUZsYWdzID0gcC5RdWFsaXR5RmxhZ3MgKyBNYXRoLnBvdygyLCA0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxhZ0RhdGEocG9pbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+UHJvY2VzczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgT3B0aW9ucyA9IChkYXRhU291cmNlOiBUcmVuREFQLmlEYXRhU2V0UmV0dXJuKSA9PiB7XHJcbiAgICBpZiAoZGF0YVNvdXJjZSA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAoZGF0YVNvdXJjZS5EYXRhID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgaWYgKGRhdGFTb3VyY2UuRGF0YVNvdXJjZS5UeXBlID09PSAnVHJlbkRBUERCJykge1xyXG4gICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YVtdKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhLk1ldGVyICsgJyAtICcgKyBhLk5hbWUgPiBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChhLk1ldGVyICsgJyAtICcgKyBhLk5hbWUgPT0gYi5NZXRlciArICcgLSAnICsgYi5OYW1lKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZGF0YVNvdXJjZS5EYXRhLm1hcChjaGFubmVsID0+IDxUcmVuREFQREJDaGFubmVsIGtleT17Y2hhbm5lbC5JRH0gY2hhbm5lbD17Y2hhbm5lbCBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhfSAvPik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkYXRhU291cmNlLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ09wZW5IaXN0b3JpYW4nKSB7XHJcbiAgICAgICAgKGRhdGFTb3VyY2UuRGF0YSBhcyBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJuW10pLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGEuRGV2aWNlICsgJyAtICcgKyBhLkRlc2NyaXB0aW9uID4gYi5EZXZpY2UgKyAnIC0gJyArIGIuRGVzY3JpcHRpb24pIHJldHVybiAxO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChhLkRldmljZSArICcgLSAnICsgYS5EZXNjcmlwdGlvbiA9PSBiLkRldmljZSArICcgLSAnICsgYi5EZXNjcmlwdGlvbikgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuRGF0YS5tYXAoY2hhbm5lbCA9PiA8T3Blbkhpc3RvcmlhbkNoYW5uZWwga2V5PXtjaGFubmVsLklEfSBjaGFubmVsPXtjaGFubmVsIGFzIFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm59IC8+KTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gZGF0YVNvdXJjZS5EYXRhLm1hcChjaGFubmVsID0+IDxPdGhlckNoYW5uZWwga2V5PXtjaGFubmVsLklEfSBjaGFubmVsPXtjaGFubmVsfSAvPik7XHJcbn1cclxuXHJcbmNvbnN0IFRyZW5EQVBEQkNoYW5uZWwgPSAocHJvcHM6IHsgY2hhbm5lbDogVHJlbkRBUC5pWERBUmV0dXJuRGF0YSB9KSA9PiB7XHJcbiAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17cHJvcHMuY2hhbm5lbC5JRH0+e3Byb3BzLmNoYW5uZWwuTWV0ZXIgKyAnIC0gJyArIHByb3BzLmNoYW5uZWwuTmFtZX08L29wdGlvbj5cclxufVxyXG5cclxuY29uc3QgT3Blbkhpc3RvcmlhbkNoYW5uZWwgPSAocHJvcHM6IHsgY2hhbm5lbDogVHJlbkRBUC5pT3Blbkhpc3RvcmlhblJldHVybiB9KSA9PiB7XHJcbiAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17cHJvcHMuY2hhbm5lbC5JRH0+e3Byb3BzLmNoYW5uZWwuRGV2aWNlICsgJyAtICcgKyBwcm9wcy5jaGFubmVsLkRlc2NyaXB0aW9ufTwvb3B0aW9uPlxyXG59XHJcblxyXG5cclxuY29uc3QgT3RoZXJDaGFubmVsID0gKHByb3BzOiB7IGNoYW5uZWw6IG9iamVjdCB9KSA9PiB7XHJcbiAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17cHJvcHMuY2hhbm5lbFsnSUQnXX0+e3Byb3BzLmNoYW5uZWxbJ05hbWUnXX08L29wdGlvbj5cclxufVxyXG5cclxuY29uc3QgRmxhZ0NyaXRlcmlhID0gKHByb3BzOiB7RmllbGQsIENvbmRpdGlvbiwgVmFsdWUsIEFuZE9yLCBVcGRhdGU6IChyZWNvcmQpID0+IHZvaWQsIEFkZDogKCkgPT4gdm9pZH0pID0+IHtcclxuICAgIGNvbnN0IFtmaWVsZCwgc2V0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8J01heGltdW0nIHwgJ01pbmltdW0nIHwgJ0F2ZXJhZ2UnPihwcm9wcy5GaWVsZCk7XHJcbiAgICBjb25zdCBbY29uZGl0aW9uLCBzZXRDb25kaXRpb25dID0gUmVhY3QudXNlU3RhdGU8JzwnIHwgJzw9JyB8ICc9PScgfCAnPj0nIHwgJz4nPihwcm9wcy5Db25kaXRpb24pO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KHByb3BzLlZhbHVlKTtcclxuICAgIGNvbnN0IFthbmRPciwgc2V0QW5kT3JdID0gUmVhY3QudXNlU3RhdGU8J0FuZCcgfCAnT3InIHwgJ05vbmUnPihwcm9wcy5BbmRPcik7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwcm9wcy5VcGRhdGUoeyBGaWVsZDogZmllbGQsIENvbmRpdGlvbjogY29uZGl0aW9uLCBWYWx1ZTogdmFsdWUsIEFuZE9yOiBhbmRPciB9KTtcclxuICAgIH0sIFtmaWVsZCwgY29uZGl0aW9uLCB2YWx1ZSwgYW5kT3JdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEFuZE9yKHByb3BzLkFuZE9yKTtcclxuICAgIH0sIFtwcm9wcy5BbmRPcl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RmllbGQocHJvcHMuRmllbGQpO1xyXG4gICAgfSwgW3Byb3BzLkZpZWxkXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRDb25kaXRpb24ocHJvcHMuQ29uZGl0aW9uKTtcclxuICAgIH0sIFtwcm9wcy5Db25kaXRpb25dKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKHByb3BzLlZhbHVlKTtcclxuICAgIH0sIFtwcm9wcy5WYWx1ZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtmaWVsZH0gb25DaGFuZ2U9eyhldnQpID0+IHNldEZpZWxkKGV2dC50YXJnZXQudmFsdWUgYXMgYW55KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdNYXhpbXVtJz5NYXg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nQXZlcmFnZSc+QXZnPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J01pbmltdW0nPk1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17Y29uZGl0aW9ufSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q29uZGl0aW9uKGV2dC50YXJnZXQudmFsdWUgYXMgYW55KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPCd9PnsnPCd9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyc8PSd9PnsnPD0nfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPT0nfT57Jz09J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Jz49J30+eyc+PSd9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyc+J30+eyc+J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+PGlucHV0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB0eXBlPSdudW1iZXInIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhldnQpID0+IHNldFZhbHVlKHBhcnNlRmxvYXQoZXZ0LnRhcmdldC52YWx1ZSkpfSAvPjwvZGl2PiAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+e1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLkFuZE9yID09ICdOb25lJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IHByb3BzLkFkZCgpIH0+e1BsdXN9PC9idXR0b24+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17YW5kT3J9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRBbmRPcihldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0FuZCc+QW5kPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdPcic+T3I8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICB9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
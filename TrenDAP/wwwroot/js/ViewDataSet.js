(self["webpackChunk"] = self["webpackChunk"] || []).push([["ViewDataSet"],{

/***/ "./TypeScript/Constants.ts":
/*!*********************************!*\
  !*** ./TypeScript/Constants.ts ***!
  \*********************************/
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

/***/ "./TypeScript/Features/DataSets/ViewDataSet/Chart.tsx":
/*!************************************************************!*\
  !*** ./TypeScript/Features/DataSets/ViewDataSet/Chart.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
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

/***/ "./TypeScript/Features/DataSets/ViewDataSet/Histogram.tsx":
/*!****************************************************************!*\
  !*** ./TypeScript/Features/DataSets/ViewDataSet/Histogram.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Histogram)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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
        var yMax = Math.max.apply(Math, __spread(bins.map(function (b) { return b.length; })));
        var x = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear()
            .domain([Math.min.apply(Math, __spread(bins.map(function (a) { return a.x0; }))), Math.max.apply(Math, __spread(bins.map(function (a) { return a.x1; })))]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
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

/***/ "./TypeScript/Features/DataSets/ViewDataSet/PagedTable.tsx":
/*!*****************************************************************!*\
  !*** ./TypeScript/Features/DataSets/ViewDataSet/PagedTable.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PagedTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/gpa-symbols */ "../node_modules/@gpa-gemstone/gpa-symbols/lib/index.js");
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};



function PagedTable(props) {
    var _a, _b, _c, _d, _e;
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Timestamp'), 2), sortField = _f[0], setSortField = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(true), 2), ascending = _g[0], setAscending = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(0), 2), page = _h[0], setPage = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), tableData = _j[0], setTableData = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(50), 2), maxPages = _k[0], setMaxPages = _k[1];
    var _l = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), toggle = _l[0], setToggle = _l[1];
    var _m = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(null), 2), record = _m[0], setRecord = _m[1];
    var tableHeight = window.innerHeight - 270; // 50 + 100 + 70 + 50
    var maxRowCount = Math.floor(tableHeight / 65);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var data = __spread(props.Data);
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
        react__WEBPACK_IMPORTED_MODULE_0__.createElement((_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default()), { tableClass: 'table', cols: [
                { key: 'Timestamp', label: 'Timestamp' },
                { key: 'Minimum', label: 'Min', content: function (item, key, style) { return item.Minimum.toFixed(2); } },
                { key: 'Average', label: 'Avg', content: function (item, key, style) { return item.Average.toFixed(2); } },
                { key: 'Maximum', label: 'Max', content: function (item, key, style) { return item.Maximum.toFixed(2); } },
                { key: 'QualityFlags', label: 'Flagged', content: function (item, key, style) { return item.QualityFlags > 0 ? _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_2__.Flag : ''; } },
                {
                    key: null, label: '', content: function (item) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', onClick: function () { setRecord(item); setToggle(true); } }, _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_2__.Pencil); }
                }
            ], selected: function (record) { var _a; return record.Timestamp === ((_a = props.Selected) === null || _a === void 0 ? void 0 : _a.Timestamp); }, data: tableData, sortField: sortField, onClick: function (data) { }, ascending: ascending, onSort: function (data) {
                if (data.col === sortField)
                    setAscending(!ascending);
                else {
                    setSortField(data.col);
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
                                    "Time: ", (_a = record) === null || _a === void 0 ? void 0 :
                                    _a.Timestamp),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                                    "Max: ", (_b = record) === null || _b === void 0 ? void 0 :
                                    _b.Maximum),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                                    "Avg: ", (_c = record) === null || _c === void 0 ? void 0 :
                                    _c.Average),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                                    "Min: ", (_d = record) === null || _d === void 0 ? void 0 :
                                    _d.Minimum),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null,
                                    "Flag: ",
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: 'checkbox', checked: (((_e = record) === null || _e === void 0 ? void 0 : _e.QualityFlags) / Math.pow(2, 4) & 1) !== 0, onChange: function (evt) { return setRecord(__assign(__assign({}, record), { QualityFlags: evt.target.checked ? record.QualityFlags + Math.pow(2, 4) : record.QualityFlags - Math.pow(2, 4) })); } }))))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                props.SetFlag(record);
                                setToggle(false);
                            } }, "Save"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-secondary", onClick: function () { return setToggle(false); } }, "Close")))))));
}


/***/ }),

/***/ "./TypeScript/Features/DataSets/ViewDataSet/ViewDataSet.tsx":
/*!******************************************************************!*\
  !*** ./TypeScript/Features/DataSets/ViewDataSet/ViewDataSet.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewDataSet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataSetsSlice */ "./TypeScript/Features/DataSets/DataSetsSlice.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PagedTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PagedTable */ "./TypeScript/Features/DataSets/ViewDataSet/PagedTable.tsx");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chart */ "./TypeScript/Features/DataSets/ViewDataSet/Chart.tsx");
/* harmony import */ var _Histogram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Histogram */ "./TypeScript/Features/DataSets/ViewDataSet/Histogram.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Constants */ "./TypeScript/Constants.ts");
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
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};








function ViewDataSet() {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)().id;
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
            setDataSourceID((_b = (_a = data[0]) === null || _a === void 0 ? void 0 : _a.DataSource.ID, (_b !== null && _b !== void 0 ? _b : 0)));
        if (channelID == '0')
            setChannelID((_d = (_c = data[0]) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : [{ ID: '0' }]))[0].ID.toString());
        var d = (_h = (_g = (_f = (_e = data.find(function (ds) { return ds.DataSource.ID === dataSourceID; })) === null || _e === void 0 ? void 0 : _e.Data, (_f !== null && _f !== void 0 ? _f : [])).find(function (dd) { return dd.ID == channelID; })) === null || _g === void 0 ? void 0 : _g.Data, (_h !== null && _h !== void 0 ? _h : []));
        setSelectedData(d);
    }, [data]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        (0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.GetDataSetDataFromIDB)(id).then(function (d) {
            setData(d);
        });
    }, [flag]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var _a, _b, _c, _d;
        var d = (_d = (_c = (_b = (_a = data.find(function (ds) { return ds.DataSource.ID === dataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (dd) { return dd.ID == channelID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : []));
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
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chart__WEBPACK_IMPORTED_MODULE_5__.default, { Data: (showFlagged ? selectedData : selectedData.filter(function (sd) { return sd.QualityFlags == 0; })), SetSelected: setSelectedPoint }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Histogram__WEBPACK_IMPORTED_MODULE_6__.default, { Data: (showFlagged ? selectedData : selectedData.filter(function (sd) { return sd.QualityFlags == 0; })) })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PagedTable__WEBPACK_IMPORTED_MODULE_4__.default, { Data: selectedData, SetFlag: FlagData, Selected: selectedPoint }))),
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
                                var newCrits = __spread(criteria);
                                newCrits[Index] = record;
                                setCriteria(newCrits);
                            }, Add: function () {
                                var newCrits = __spread(criteria);
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
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', onClick: function () { return props.Add(); } }, _Constants__WEBPACK_IMPORTED_MODULE_7__.Plus) :
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: 'form-control', value: andOr, onChange: function (evt) { return setAndOr(evt.target.value); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'And' }, "And"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Or' }, "Or"))))));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L0NoYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L0hpc3RvZ3JhbS50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9EYXRhU2V0cy9WaWV3RGF0YVNldC9QYWdlZFRhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L1ZpZXdEYXRhU2V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdHQUF3RztBQUN4Ryx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUV4RyxTQUFTO0FBQ1QsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdkIsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNqQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDckIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLElBQU0sTUFBTSxHQUFH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IiwiZmlsZSI6IlZpZXdEYXRhU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIENvbnN0YW50cy50cyAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8zMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuLy8gZW1vamlzXHJcbmNvbnN0IEhlYXZ5Q2hlY2tNYXJrID0gJ+KclO+4jyc7XHJcbmNvbnN0IFBlbmNpbCA9ICfinI/vuI8nO1xyXG5jb25zdCBUcmFzaENhbiA9ICfwn5eR77iPJztcclxuY29uc3QgQ3Jvc3NNYXJrID0gJ+KdjCc7XHJcbmNvbnN0IFBsdXMgPSAn4p6VJztcclxuY29uc3QgV2FybmluZyA9ICfimqDvuI8nO1xyXG5jb25zdCBTcGlubmVyID0gJ/CflIQnO1xyXG5jb25zdCBXcmVuY2ggPSAn8J+Upyc7XHJcblxyXG5leHBvcnQgeyBIZWF2eUNoZWNrTWFyaywgUGVuY2lsLCBUcmFzaENhbiwgQ3Jvc3NNYXJrLCBQbHVzLCBXYXJuaW5nLCBTcGlubmVyLCBXcmVuY2ggfTsiLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ2hhcnQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzE4LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0KHByb3BzOiB7IERhdGE6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10sIFNldFNlbGVjdGVkOiAocmVjb3JkOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludCkgPT4gdm9pZCB9KSB7XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbY2hhcnRBY3Rpb24sIHNldENoYXJ0QWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuQ2hhcnRBY3Rpb24+KCdQYW4nKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gSW5pdGlhbGl6ZShwcm9wcy5EYXRhKSwgW3Byb3BzLkRhdGFdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBIYW5kbGVSZXNldCgpIHtcclxuICAgICAgICAvL3NldFJlY29yZChyZWNvcmQuQ2FsY3VsYXRlQXhpc1JhbmdlKCd4JykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemUoZGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSkge1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHsgYm90dG9tOiA1MCwgbGVmdDogNzUsIHRvcDogNjUsIHJpZ2h0OiA0MCB9O1xyXG5cclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gMjcwKS8yO1xyXG4gICAgICAgIGNvbnN0IHN2Z1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gMjAwKSAvIDI7XHJcblxyXG4gICAgICAgIGQzLnNlbGVjdChyZWYuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKVxyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChyZWYuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc3ZnV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzdmdIZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVVdGMoKVxyXG4gICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudChwcm9wcy5EYXRhLCBkPT4gbW9tZW50LnV0YyhkLlRpbWVzdGFtcCkpKVxyXG4gICAgICAgICAgICAucmFuZ2UoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCAtIG1hcmdpbi5yaWdodF0pO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLnhheGlzJykucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd4YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgKyBcIilcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneGF4aXMnLCB0cnVlKS5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHN2Z1dpZHRoIC8gMikgKyBcIixcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tIC8gMykgKyBcIilcIilcclxuICAgICAgICAgICAgLnRleHQoXCJUaW1lXCIpXHJcblxyXG4gICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5yYW5nZShbc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pXHJcbiAgICAgICAgICAgIC5kb21haW4oW2QzLm1pbihwcm9wcy5EYXRhLCBkID0+IGQuTWluaW11bSksIGQzLm1heChwcm9wcy5EYXRhLCBkID0+IGQuTWF4aW11bSldKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy55YXhpcycpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneWF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChtYXJnaW4ubGVmdCkgKyBcIiwwKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KS50aWNrcyhNYXRoLmZsb29yKHN2Z0hlaWdodCAvIDUwKSArIDEpLnRpY2tGb3JtYXQoKHZhbHVlOiBudW1iZXIpID0+IGQzLmZvcm1hdChcIn5zXCIpKHZhbHVlKSkpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoJ3lheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnRleHQoXCJDaGFubmVsIE91dHB1dFwiKTtcclxuICAgICAgICB0ZXh0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKSB0cmFuc2xhdGUoLVwiICsgc3ZnSGVpZ2h0IC8gMiArIFwiLFwiICsgKChtYXJnaW4ubGVmdCkgLyAzKSArIFwiKVwiKS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLm1heCcpLmRhdGEoW3Byb3BzLkRhdGFdKS5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ21heCcpLmFwcGVuZCgncGF0aCcpLmF0dHIoJ3N0cm9rZScsICdyZWQnKS5hdHRyKCdmaWxsJywgJ25vbmUnKS5hdHRyKCdkJywgZDMubGluZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4oKS54KGQgPT4geChtb21lbnQudXRjKGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpKS55KGQgPT4geShkLk1heGltdW0pKSlcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLm1pbicpLmRhdGEoW3Byb3BzLkRhdGFdKS5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ21pbicpLmFwcGVuZCgncGF0aCcpLmF0dHIoJ3N0cm9rZScsICdyZWQnKS5hdHRyKCdmaWxsJywgJ25vbmUnKS5hdHRyKCdkJywgZDMubGluZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4oKS54KGQgPT4geChtb21lbnQudXRjKGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpKS55KGQgPT4geShkLk1pbmltdW0pKSlcclxuXHJcbiAgICAgICAgY29uc3QgcG9pbnRzID0gc3ZnLnNlbGVjdEFsbChcImcucG9pbnRzXCIpXHJcbiAgICAgICAgICAgIC5kYXRhKFtwcm9wcy5EYXRhXSlcclxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAncG9pbnRzJyk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBwb2ludCA9IHBvaW50cy5zZWxlY3RBbGwoJ3BvaW50JykuZGF0YShkID0+IGQpLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAncG9pbnQnKTtcclxuICAgICAgICAvL3BvaW50LmFwcGVuZCgncGF0aCcpLmF0dHIoJ3N0cm9rZScsICdsaWdodGdyYXknKS5hdHRyKCdkJywgZCA9PiBgTSAke3gobW9tZW50LnV0YyhkLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpKX0sICR7eShkLkF2ZXJhZ2UpfSBWICR7eShkLk1heGltdW0pfVpgKTtcclxuICAgICAgICAvL3BvaW50LmFwcGVuZCgncGF0aCcpLmF0dHIoJ3N0cm9rZScsICdsaWdodGdyYXknKS5hdHRyKCdkJywgZCA9PiBgTSAke3gobW9tZW50LnV0YyhkLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpKX0sICR7eShkLkF2ZXJhZ2UpfSBWICR7eShkLk1pbmltdW0pfVpgKVxyXG4gICAgICAgIHBvaW50LmFwcGVuZChcImNpcmNsZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgMy41KVxyXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KG1vbWVudChkLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpKTsgfSlcclxuICAgICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geShkLkF2ZXJhZ2UpOyB9KVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKGUsZDogYW55KSA9PiB7IHByb3BzLlNldFNlbGVjdGVkKGQpIH0pXHJcbiAgICAgICAgICAgIC5zdHlsZSgnY3Vyc29yJywgJ3BvaW50ZXInKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBzdHlsZT17eyB1c2VyU2VsZWN0OiAnbm9uZScgfX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEhpc3RvZ3JhbS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaXN0b2dyYW0ocHJvcHM6IHsgRGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSB9KSB7XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZTwnTWluaW11bScgfCAnQXZlcmFnZScgfCAnTWF4aW11bSc+KCdBdmVyYWdlJyk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gSW5pdGlhbGl6ZShwcm9wcy5EYXRhKSwgW3Byb3BzLkRhdGEsIHR5cGVdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBJbml0aWFsaXplKGRhdGE6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10pIHtcclxuICAgICAgICBjb25zdCBtYXJnaW4gPSB7IGJvdHRvbTogNTAsIGxlZnQ6IDc1LCB0b3A6IDY1LCByaWdodDogNDAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3ZnSGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIDI3MCkgLyAyO1xyXG4gICAgICAgIGNvbnN0IHN2Z1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gMjAwKSAvIDI7XHJcblxyXG4gICAgICAgIGQzLnNlbGVjdChyZWYuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKVxyXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChyZWYuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc3ZnV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzdmdIZWlnaHQpO1xyXG5cclxuICAgICAgICBsZXQgaGlzdG9ncmFtID0gZDMuaGlzdG9ncmFtPG51bWJlciwgbnVtYmVyPigpXHJcbiAgICAgICAgICAgIC52YWx1ZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfSkgICAvLyBJIG5lZWQgdG8gZ2l2ZSB0aGUgdmVjdG9yIG9mIHZhbHVlXHJcbiAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KHByb3BzLkRhdGEsIGQgPT4gZFt0eXBlXSkgYXMgW251bWJlciwgbnVtYmVyXSkgIC8vIHRoZW4gdGhlIGRvbWFpbiBvZiB0aGUgZ3JhcGhpY1xyXG4gICAgICAgICAgICAudGhyZXNob2xkcyg0MCk7IC8vIHRoZW4gdGhlIG51bWJlcnMgb2YgYmluc1xyXG5cclxuICAgICAgICBjb25zdCBiaW5zID0gaGlzdG9ncmFtKHByb3BzLkRhdGEubWFwKGQgPT4gZFt0eXBlXSkpO1xyXG5cclxuICAgICAgICBsZXQgeU1heCA9IE1hdGgubWF4KC4uLmJpbnMubWFwKGIgPT4gYi5sZW5ndGgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLmRvbWFpbihbTWF0aC5taW4oLi4uYmlucy5tYXAoYSA9PiBhLngwKSksIE1hdGgubWF4KC4uLmJpbnMubWFwKGEgPT4gYS54MSkpXSkgICAgIC8vIGNhbiB1c2UgdGhpcyBpbnN0ZWFkIG9mIDEwMDAgdG8gaGF2ZSB0aGUgbWF4IG9mIGRhdGE6IGQzLm1heChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiArZC5wcmljZSB9KVxyXG4gICAgICAgICAgICAucmFuZ2UoW21hcmdpbi5sZWZ0LCBzdmdXaWR0aCAtIG1hcmdpbi5yaWdodF0pO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20pICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXHJcblxyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHN2Z1dpZHRoIC8gMikgKyBcIixcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tIC8gMykgKyBcIilcIilcclxuICAgICAgICAgICAgLnRleHQoXCJDaGFubmVsIE91dHB1dFwiKVxyXG5cclxuICAgICAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAucmFuZ2UoW3N2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20sIG1hcmdpbi50b3BdKVxyXG4gICAgICAgICAgICAuZG9tYWluKFswLCB5TWF4XSk7ICAgLy8gZDMuaGlzdCBoYXMgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgWSBheGlzIG9idmlvdXNseVxyXG5cclxuICAgICAgICBjb25zdCB5QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIiwwKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSk7XHJcbiAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKSB0cmFuc2xhdGUoLVwiICsgc3ZnSGVpZ2h0IC8gMiArIFwiLFwiICsgbWFyZ2luLmxlZnQgLyAzICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC50ZXh0KFwiQ291bnRzXCIpXHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXHJcbiAgICAgICAgICAgIC5kYXRhKGJpbnMpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCAxKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCkgPT4gYHRyYW5zbGF0ZSgke3goZC54MCl9LCR7eShkLmxlbmd0aCl9KWApXHJcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgKGQpID0+ICh4KGQueDEpIC0geChkLngwKSA+IDIgPyB4KGQueDEpIC0geChkLngwKSA6IDIpIC0gMSlcclxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSAtIHkoZC5sZW5ndGgpKVxyXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgKGQpID0+ICdkYXJrYmx1ZScpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXt0eXBlfSBjaGVja2VkPXt0eXBlID09ICdNaW5pbXVtJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldFR5cGUoJ01pbmltdW0nKSB9Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+TWluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17dHlwZSA9PSAnQXZlcmFnZSd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRUeXBlKCdBdmVyYWdlJyl9Lz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+QXZnPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXt0eXBlID09ICdNYXhpbXVtJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldFR5cGUoJ01heGltdW0nKX0gLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+TWF4PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFBhZ2VkVGFibGUudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjEsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDAyLzE4LzIwMjEgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC10YWJsZSc7XHJcbmltcG9ydCB7IFBlbmNpbCwgRmxhZyB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvZ3BhLXN5bWJvbHMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VkVGFibGUocHJvcHM6IHsgRGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSwgU2VsZWN0ZWQ6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50LFNldEZsYWc6IChyZWNvcmQ6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50ICkgPT4gdm9pZH0pIHtcclxuICAgIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTxrZXlvZiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4oJ1RpbWVzdGFtcCcpO1xyXG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFt0YWJsZURhdGEsIHNldFRhYmxlRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdPihbXSk7XHJcbiAgICBjb25zdCBbbWF4UGFnZXMsIHNldE1heFBhZ2VzXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oNTApO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZWNvcmQsIHNldFJlY29yZF0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4obnVsbCk7XHJcblxyXG4gICAgY29uc3QgdGFibGVIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNzA7IC8vIDUwICsgMTAwICsgNzAgKyA1MFxyXG4gICAgY29uc3QgbWF4Um93Q291bnQgPSBNYXRoLmZsb29yKHRhYmxlSGVpZ2h0IC8gNjUpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFsuLi5wcm9wcy5EYXRhXTtcclxuICAgICAgICBkYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFbc29ydEZpZWxkXSA+IGJbc29ydEZpZWxkXSkgcmV0dXJuIChhc2NlbmRpbmcgPyAxIDogLTEpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChhW3NvcnRGaWVsZF0gPT09IGJbc29ydEZpZWxkXSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIChhc2NlbmRpbmcgPyAtMSA6IDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRhYmxlRGF0YShkYXRhLnNsaWNlKHBhZ2UgKiBtYXhSb3dDb3VudCwgKHBhZ2UgKyAxKSAqIG1heFJvd0NvdW50KSk7XHJcbiAgICAgICAgc2V0TWF4UGFnZXMoTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gbWF4Um93Q291bnQpIC0gMSk7XHJcbiAgICB9LCBbcHJvcHMuRGF0YSwgYXNjZW5kaW5nLCBzb3J0RmllbGRdKTtcclxuXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUYWJsZURhdGEocHJvcHMuRGF0YS5zbGljZShwYWdlICogbWF4Um93Q291bnQsIChwYWdlICsgMSkgKiBtYXhSb3dDb3VudCkpO1xyXG4gICAgfSwgW3BhZ2VdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvcHMuRGF0YS5maW5kSW5kZXgoZCA9PiBkLlRpbWVzdGFtcCA9PT0gcHJvcHMuU2VsZWN0ZWQ/LlRpbWVzdGFtcCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgbGV0IG5ld1BhZ2UgPSBNYXRoLmZsb29yKGluZGV4IC8gbWF4Um93Q291bnQpO1xyXG4gICAgICAgICAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwcm9wcy5TZWxlY3RlZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRhYmxlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PiB0YWJsZUNsYXNzPSd0YWJsZSdcclxuICAgICAgICAgICAgICAgIGNvbHM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1RpbWVzdGFtcCcsIGxhYmVsOiAnVGltZXN0YW1wJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWluaW11bScsIGxhYmVsOiAnTWluJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW0uTWluaW11bS50b0ZpeGVkKDIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdBdmVyYWdlJywgbGFiZWw6ICdBdmcnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbS5BdmVyYWdlLnRvRml4ZWQoMikgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01heGltdW0nLCBsYWJlbDogJ01heCcsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBpdGVtLk1heGltdW0udG9GaXhlZCgyKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnUXVhbGl0eUZsYWdzJywgbGFiZWw6ICdGbGFnZ2VkJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW0uUXVhbGl0eUZsYWdzID4gMCA/IEZsYWcgOiAnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG51bGwsIGxhYmVsOiAnJywgY29udGVudDogKGl0ZW0pID0+IDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IHsgc2V0UmVjb3JkKGl0ZW0pOyBzZXRUb2dnbGUodHJ1ZSk7IH0gfT57UGVuY2lsfTwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmVjb3JkID0+IHJlY29yZC5UaW1lc3RhbXAgPT09IHByb3BzLlNlbGVjdGVkPy5UaW1lc3RhbXAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17dGFibGVEYXRhfVxyXG4gICAgICAgICAgICAgICAgc29ydEZpZWxkPXtzb3J0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZGF0YSkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgYXNjZW5kaW5nPXthc2NlbmRpbmd9XHJcbiAgICAgICAgICAgICAgICBvblNvcnQ9eyhkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29sID09PSBzb3J0RmllbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZGF0YS5jb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdWxsLXJpZ2h0Jz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIHRpdGxlPSdNb3ZlIGJhY2sgMTAgcGFnZXMnIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKHBhZ2UgPj0gMTAgPyBwYWdlIC0gMTAgOiAwKSl9IGRpc2FibGVkPXtwYWdlIDw9IDB9PnsnPDwnfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgdGl0bGU9J01vdmUgYmFjayAxIHBhZ2UnIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKHBhZ2UgPj0gMSA/IHBhZ2UgLSAxIDogMCkpfSBkaXNhYmxlZD17cGFnZSA8PSAwfT57JzwnfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UGFnZSZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17cGFnZSArIDF9IHR5cGU9J251bWJlcicgb25DaGFuZ2U9eyhldnQpID0+IHNldFBhZ2UocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkgLSAxKX0gc3R5bGU9e3t3aWR0aDogNDB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+b2YmbmJzcDt7IG1heFBhZ2VzICsgMX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyB0aXRsZT0nTW92ZSBmb3J3YXJkIDEgcGFnZScgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocGFnZSA8PSBtYXhQYWdlcyA/IHBhZ2UgKyAxIDogbWF4UGFnZXMpKX0gZGlzYWJsZWQ9e3BhZ2UgPj0gbWF4UGFnZXN9PnsnPid9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyB0aXRsZT0nTW92ZSBmb3J3YXJkIDEwIHBhZ2VzJyBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwYWdlIDw9IG1heFBhZ2VzIC0gMTAgPyBwYWdlICsgMTAgOiBtYXhQYWdlcykpfSBkaXNhYmxlZD17cGFnZSA+PSBtYXhQYWdlc30+eyc+Pid9PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHJvbGU9XCJkaWFsb2dcIiBzdHlsZT17eyBkaXNwbGF5OiB0b2dnbGUgPyAnYmxvY2snIDogJ25vbmUnLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNCknIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+TWFyayBBcyBGbGFnZ2VkPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJjbG9zZVwifSBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7bGlzdFN0eWxlOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRpbWU6IHtyZWNvcmQ/LlRpbWVzdGFtcH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWF4OiB7cmVjb3JkPy5NYXhpbXVtfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Bdmc6IHtyZWNvcmQ/LkF2ZXJhZ2V9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1pbjoge3JlY29yZD8uTWluaW11bX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RmxhZzogPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXsocmVjb3JkPy5RdWFsaXR5RmxhZ3MgLyBNYXRoLnBvdygyLCA0KSAmIDEpICE9PSAwfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKHsgLi4ucmVjb3JkLCBRdWFsaXR5RmxhZ3M6IGV2dC50YXJnZXQuY2hlY2tlZCA/IHJlY29yZC5RdWFsaXR5RmxhZ3MgKyBNYXRoLnBvdygyLCA0KSA6IHJlY29yZC5RdWFsaXR5RmxhZ3MgLSBNYXRoLnBvdygyLCA0KX0pIH0vPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXRGbGFnKHJlY29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBWaWV3RGF0YVNldC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTcvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVXBkYXRlRGF0YVNldERhdGEsIFNlbGVjdERhdGFTZXRzU3RhdHVzLCBGZXRjaERhdGFTZXRzLCBTZWxlY3RSZWNvcmQsIFNldFJlY29yZEJ5SUQsIEdldERhdGFTZXREYXRhRnJvbUlEQiwgVXBkYXRlRGF0YVNldERhdGFGbGFnIH0gZnJvbSAnLi4vRGF0YVNldHNTbGljZSdcclxuaW1wb3J0IHsgIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IFBhZ2VkVGFibGUgZnJvbSAnLi9QYWdlZFRhYmxlJztcclxuaW1wb3J0IENoYXJ0IGZyb20gJy4vQ2hhcnQnO1xyXG5pbXBvcnQgSGlzdG9ncmFtIGZyb20gJy4vSGlzdG9ncmFtJztcclxuaW1wb3J0IHsgSW5wdXROdW1iZXJzIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9ncGEtc3ltYm9scyc7XHJcbmltcG9ydCB7IFBsdXMgfSBmcm9tICcuLi8uLi8uLi9Db25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld0RhdGFTZXQoKSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXM8e2lkfT4oKTtcclxuICAgIGNvbnN0IGRhdGFTZXQgPSB1c2VTZWxlY3RvcihTZWxlY3RSZWNvcmQpXHJcbiAgICBjb25zdCB3c1N0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTZXRzU3RhdHVzKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaURhdGFTZXRSZXR1cm5bXT4oW10pO1xyXG4gICAgY29uc3QgW2RhdGFTb3VyY2VJRCwgc2V0RGF0YVNvdXJjZUlEXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbY2hhbm5lbElELCBzZXRDaGFubmVsSURdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignMCcpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkRGF0YSwgc2V0U2VsZWN0ZWREYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IFJlYWN0LnVzZVJlZHVjZXIoKHMsXykgPT4gcyArIDEsIDApO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtjcml0ZXJpYSwgc2V0Q3JpdGVyaWFdID0gUmVhY3QudXNlU3RhdGU8eyBGaWVsZDogYW55LCBDb25kaXRpb246IGFueSwgVmFsdWU6IG51bWJlciwgQW5kT3IgfVtdPihbeyBGaWVsZDogJ0F2ZXJhZ2UnLCBDb25kaXRpb246ICc+JywgVmFsdWU6IDAsIEFuZE9yOiAnTm9uZScgfV0pO1xyXG4gICAgY29uc3QgW3Nob3dGbGFnZ2VkLCBzZXRTaG93RmxhZ2dlZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQb2ludCwgc2V0U2VsZWN0ZWRQb2ludF0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4obnVsbCk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRDaGFubmVscywgc2V0U2VsZWN0ZWRDaGFubmVsc10gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlEYXRhU2V0UmV0dXJuPih7fSBhcyBUcmVuREFQLmlEYXRhU2V0UmV0dXJuICk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRDcml0ZXJpYShbeyBGaWVsZDogJ0F2ZXJhZ2UnLCBDb25kaXRpb246ICc+JywgVmFsdWU6IDAsIEFuZE9yOiAnTm9uZScgfV0pO1xyXG4gICAgfSwgW3RvZ2dsZV0pO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3c1N0YXR1cyA9PT0gJ3VuaXRpYXRlZCcgfHwgd3NTdGF0dXMgPT09ICdjaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTZXRzKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goU2V0UmVjb3JkQnlJRChwYXJzZUludChpZCkpKTtcclxuICAgIH0sIFtkaXNwYXRjaCwgd3NTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGRhdGFTb3VyY2VJRCA9PT0gMClcclxuICAgICAgICAgICAgc2V0RGF0YVNvdXJjZUlEKGRhdGFbMF0/LkRhdGFTb3VyY2UuSUQgPz8gMCk7XHJcbiAgICAgICAgaWYoY2hhbm5lbElEID09ICcwJylcclxuICAgICAgICAgICAgc2V0Q2hhbm5lbElEKChkYXRhWzBdPy5EYXRhID8/IFt7IElEOicwJyB9XSlbMF0uSUQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGQgPSAoZGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT09IGRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW10pLmZpbmQoZGQgPT4gZGQuSUQgPT0gY2hhbm5lbElEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBzZXRTZWxlY3RlZERhdGEoZCk7XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEdldERhdGFTZXREYXRhRnJvbUlEQihpZCkudGhlbihkID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YShkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtmbGFnXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkID0gKGRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSBkYXRhU291cmNlSUQpPy5EYXRhID8/IFtdKS5maW5kKGRkID0+IGRkLklEID09IGNoYW5uZWxJRCk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgc2V0U2VsZWN0ZWREYXRhKGQpO1xyXG4gICAgICAgIFxyXG4gICAgfSwgW2NoYW5uZWxJRF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRhdGEuZmluZChkID0+IGQuRGF0YVNvdXJjZS5JRCA9PT0gZGF0YVNvdXJjZUlEKTtcclxuICAgICAgICBpZiAoZGF0YVNvdXJjZSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBlbHNlIGlmIChkYXRhU291cmNlLkRhdGEgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChkYXRhU291cmNlLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1RyZW5EQVBEQicpIHtcclxuICAgICAgICAgICAgKGRhdGFTb3VyY2UuRGF0YSBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhW10pLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLk1ldGVyICsgJyAtICcgKyBhLk5hbWUgPiBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID09IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGRhdGFTb3VyY2UuRGF0YVNvdXJjZS5UeXBlID09PSAnT3Blbkhpc3RvcmlhbicpIHtcclxuICAgICAgICAgICAgKGRhdGFTb3VyY2UuRGF0YSBhcyBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJuW10pLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLkRldmljZSArICcgLSAnICsgYS5EZXNjcmlwdGlvbiA+IGIuRGV2aWNlICsgJyAtICcgKyBiLkRlc2NyaXB0aW9uKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGEuRGV2aWNlICsgJyAtICcgKyBhLkRlc2NyaXB0aW9uID09IGIuRGV2aWNlICsgJyAtICcgKyBiLkRlc2NyaXB0aW9uKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q2hhbm5lbElEKGRhdGFTb3VyY2UuRGF0YVswXS5JRC50b1N0cmluZygpKTtcclxuICAgICAgICBzZXRTZWxlY3RlZENoYW5uZWxzKGRhdGFTb3VyY2UpO1xyXG5cclxuICAgIH0sIFtkYXRhU291cmNlSURdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBGbGFnRGF0YShyZWNvcmQ6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50IHwgVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSkge1xyXG4gICAgICAgIFVwZGF0ZURhdGFTZXREYXRhKGRhdGFTZXQsIGRhdGFTb3VyY2VJRCwgY2hhbm5lbElELCByZWNvcmQpLnRoZW4oKCkgPT4gc2V0RmxhZygxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxyXG4gICAgICAgICAgICA8aDM+e2RhdGFTZXQuTmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdycgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogMTUsIHdpZHRoOiAnNTAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGF0YSBTb3VyY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtkYXRhU291cmNlSUR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXREYXRhU291cmNlSUQocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcChkID0+IDxvcHRpb24ga2V5PXtkLkRhdGFTb3VyY2UuSUR9IHZhbHVlPXtkLkRhdGFTb3VyY2UuSUR9PntkLkRhdGFTb3VyY2UuTmFtZX08L29wdGlvbj4pIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNoYW5uZWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtjaGFubmVsSUR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDaGFubmVsSUQoZXZ0LnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7T3B0aW9ucyhzZWxlY3RlZENoYW5uZWxzKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6IDMwLCBtYXJnaW5SaWdodDogNSB9fSBvbkNsaWNrPXsoKSA9PiB7IH19PkFkZCBWaXJ0dWFsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogMzAgfX0gb25DbGljaz17KCkgPT4geyAvKnNldFJlY29yZChpdGVtKTsgOyovIHNldFRvZ2dsZSh0cnVlKX19PkZsYWcgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6IDUsIGxlZnQ6IDV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT17c2hvd0ZsYWdnZWQudG9TdHJpbmcoKX0gY2hlY2tlZD17c2hvd0ZsYWdnZWR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRTaG93RmxhZ2dlZChldnQudGFyZ2V0LmNoZWNrZWQpIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlNob3cgRmxhZ2dlZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXJ0IERhdGE9eyhzaG93RmxhZ2dlZCA/IHNlbGVjdGVkRGF0YSA6IHNlbGVjdGVkRGF0YS5maWx0ZXIoc2QgPT4gc2QuUXVhbGl0eUZsYWdzID09IDApKX0gU2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkUG9pbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpc3RvZ3JhbSBEYXRhPXsoc2hvd0ZsYWdnZWQgPyBzZWxlY3RlZERhdGEgOiBzZWxlY3RlZERhdGEuZmlsdGVyKHNkID0+IHNkLlF1YWxpdHlGbGFncyA9PSAwKSl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZWRUYWJsZSBEYXRhPXtzZWxlY3RlZERhdGF9IFNldEZsYWc9e0ZsYWdEYXRhfSBTZWxlY3RlZD17c2VsZWN0ZWRQb2ludCB9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiIHN0eWxlPXt7IGRpc3BsYXk6IHRvZ2dsZSA/ICdibG9jaycgOiAnbm9uZScsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40KScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5NYXJrIEFzIEZsYWdnZWQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtcImNsb3NlXCJ9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNyaXRlcmlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjcml0ZXJpYS5tYXAoKGMsIEluZGV4KSA9PiA8RmxhZ0NyaXRlcmlhIGtleT17SW5kZXh9IHsuLi5jfSBVcGRhdGU9eyhyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0NyaXRzID0gWy4uLmNyaXRlcmlhXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q3JpdHNbSW5kZXhdID0gcmVjb3JkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDcml0ZXJpYShuZXdDcml0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gQWRkPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdDcml0cyA9IFsgLi4uY3JpdGVyaWFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDcml0c1tJbmRleF0uQW5kT3IgPSAnQW5kJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q3JpdHMucHVzaCh7IEZpZWxkOiAnQXZlcmFnZScsIENvbmRpdGlvbjogJz4nLCBWYWx1ZTogMCwgQW5kT3I6ICdOb25lJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3JpdGVyaWEobmV3Q3JpdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtbGVmdFwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnRzID0gc2VsZWN0ZWREYXRhLmZpbHRlcihmID0+IChmLlF1YWxpdHlGbGFncy9NYXRoLnBvdygyLDQpICYgMSkgIT09IDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHAgPT4gcC5RdWFsaXR5RmxhZ3MgPSBwLlF1YWxpdHlGbGFncy0gTWF0aC5wb3coMiwgNCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZsYWdEYXRhKHBvaW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlVuZmxhZyBBbGw8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvaW50cyA9IHNlbGVjdGVkRGF0YS5maWx0ZXIoZiA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlID0gY3JpdGVyaWEubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMuQ29uZGl0aW9uID09ICc8JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA8IGMuVmFsdWUsIEFuZE9yOiBjLkFuZE9yIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjLkNvbmRpdGlvbiA9PSAnPD0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFZhbHVlOiBmW2MuRmllbGRdIDw9IGMuVmFsdWUsIEFuZE9yOiBjLkFuZE9yIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjLkNvbmRpdGlvbiA9PSAnPj0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFZhbHVlOiBmW2MuRmllbGRdID49IGMuVmFsdWUsIEFuZE9yOiBjLkFuZE9yIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjLkNvbmRpdGlvbiA9PSAnPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPiBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFZhbHVlOiBmW2MuRmllbGRdID09IGMuVmFsdWUsIEFuZE9yOiBjLkFuZE9yIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZS5yZWR1Y2UoKGEsIGIsIGksIHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkgcmV0dXJuIGIuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzb3VyY2VbaS0xXS5BbmRPciA9PSAnT3InKSByZXR1cm4gYSB8fCBiLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gYSAmJiBiLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzLmZvckVhY2gocCA9PiBwLlF1YWxpdHlGbGFncyA9IHAuUXVhbGl0eUZsYWdzICsgTWF0aC5wb3coMiwgNCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZsYWdEYXRhKHBvaW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlByb2Nlc3M8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IE9wdGlvbnMgPSAoZGF0YVNvdXJjZTogVHJlbkRBUC5pRGF0YVNldFJldHVybikgPT4ge1xyXG4gICAgaWYgKGRhdGFTb3VyY2UgPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIGVsc2UgaWYgKGRhdGFTb3VyY2UuRGF0YSA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGlmIChkYXRhU291cmNlLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1RyZW5EQVBEQicpIHtcclxuICAgICAgICAoZGF0YVNvdXJjZS5EYXRhIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGFbXSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID4gYi5NZXRlciArICcgLSAnICsgYi5OYW1lKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID09IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuRGF0YS5tYXAoY2hhbm5lbCA9PiA8VHJlbkRBUERCQ2hhbm5lbCBrZXk9e2NoYW5uZWwuSUR9IGNoYW5uZWw9e2NoYW5uZWwgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YX0gLz4pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGF0YVNvdXJjZS5EYXRhU291cmNlLlR5cGUgPT09ICdPcGVuSGlzdG9yaWFuJykge1xyXG4gICAgICAgIChkYXRhU291cmNlLkRhdGEgYXMgVHJlbkRBUC5pT3Blbkhpc3RvcmlhblJldHVybltdKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhLkRldmljZSArICcgLSAnICsgYS5EZXNjcmlwdGlvbiA+IGIuRGV2aWNlICsgJyAtICcgKyBiLkRlc2NyaXB0aW9uKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS5EZXZpY2UgKyAnIC0gJyArIGEuRGVzY3JpcHRpb24gPT0gYi5EZXZpY2UgKyAnIC0gJyArIGIuRGVzY3JpcHRpb24pIHJldHVybiAwO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBkYXRhU291cmNlLkRhdGEubWFwKGNoYW5uZWwgPT4gPE9wZW5IaXN0b3JpYW5DaGFubmVsIGtleT17Y2hhbm5lbC5JRH0gY2hhbm5lbD17Y2hhbm5lbCBhcyBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJufSAvPik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuRGF0YS5tYXAoY2hhbm5lbCA9PiA8T3RoZXJDaGFubmVsIGtleT17Y2hhbm5lbC5JRH0gY2hhbm5lbD17Y2hhbm5lbH0gLz4pO1xyXG59XHJcblxyXG5jb25zdCBUcmVuREFQREJDaGFubmVsID0gKHByb3BzOiB7IGNoYW5uZWw6IFRyZW5EQVAuaVhEQVJldHVybkRhdGEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWwuSUR9Pntwcm9wcy5jaGFubmVsLk1ldGVyICsgJyAtICcgKyBwcm9wcy5jaGFubmVsLk5hbWV9PC9vcHRpb24+XHJcbn1cclxuXHJcbmNvbnN0IE9wZW5IaXN0b3JpYW5DaGFubmVsID0gKHByb3BzOiB7IGNoYW5uZWw6IFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWwuSUR9Pntwcm9wcy5jaGFubmVsLkRldmljZSArICcgLSAnICsgcHJvcHMuY2hhbm5lbC5EZXNjcmlwdGlvbn08L29wdGlvbj5cclxufVxyXG5cclxuXHJcbmNvbnN0IE90aGVyQ2hhbm5lbCA9IChwcm9wczogeyBjaGFubmVsOiBvYmplY3QgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWxbJ0lEJ119Pntwcm9wcy5jaGFubmVsWydOYW1lJ119PC9vcHRpb24+XHJcbn1cclxuXHJcbmNvbnN0IEZsYWdDcml0ZXJpYSA9IChwcm9wczoge0ZpZWxkLCBDb25kaXRpb24sIFZhbHVlLCBBbmRPciwgVXBkYXRlOiAocmVjb3JkKSA9PiB2b2lkLCBBZGQ6ICgpID0+IHZvaWR9KSA9PiB7XHJcbiAgICBjb25zdCBbZmllbGQsIHNldEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPCdNYXhpbXVtJyB8ICdNaW5pbXVtJyB8ICdBdmVyYWdlJz4ocHJvcHMuRmllbGQpO1xyXG4gICAgY29uc3QgW2NvbmRpdGlvbiwgc2V0Q29uZGl0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPCc8JyB8ICc8PScgfCAnPT0nIHwgJz49JyB8ICc+Jz4ocHJvcHMuQ29uZGl0aW9uKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihwcm9wcy5WYWx1ZSk7XHJcbiAgICBjb25zdCBbYW5kT3IsIHNldEFuZE9yXSA9IFJlYWN0LnVzZVN0YXRlPCdBbmQnIHwgJ09yJyB8ICdOb25lJz4ocHJvcHMuQW5kT3IpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuVXBkYXRlKHsgRmllbGQ6IGZpZWxkLCBDb25kaXRpb246IGNvbmRpdGlvbiwgVmFsdWU6IHZhbHVlLCBBbmRPcjogYW5kT3IgfSk7XHJcbiAgICB9LCBbZmllbGQsIGNvbmRpdGlvbiwgdmFsdWUsIGFuZE9yXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRBbmRPcihwcm9wcy5BbmRPcik7XHJcbiAgICB9LCBbcHJvcHMuQW5kT3JdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEZpZWxkKHByb3BzLkZpZWxkKTtcclxuICAgIH0sIFtwcm9wcy5GaWVsZF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29uZGl0aW9uKHByb3BzLkNvbmRpdGlvbik7XHJcbiAgICB9LCBbcHJvcHMuQ29uZGl0aW9uXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShwcm9wcy5WYWx1ZSk7XHJcbiAgICB9LCBbcHJvcHMuVmFsdWVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17ZmllbGR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRGaWVsZChldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTWF4aW11bSc+TWF4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0F2ZXJhZ2UnPkF2Zzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdNaW5pbXVtJz5NaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2NvbmRpdGlvbn0gb25DaGFuZ2U9eyhldnQpID0+IHNldENvbmRpdGlvbihldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17JzwnfT57JzwnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPD0nfT57Jzw9J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Jz09J30+eyc9PSd9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyc+PSd9PnsnPj0nfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPid9PnsnPid9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPjxpbnB1dCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT0nbnVtYmVyJyB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRWYWx1ZShwYXJzZUZsb2F0KGV2dC50YXJnZXQudmFsdWUpKX0gLz48L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPntcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5BbmRPciA9PSAnTm9uZScgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyBvbkNsaWNrPXsoKSA9PiBwcm9wcy5BZGQoKSB9PntQbHVzfTwvYnV0dG9uPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2FuZE9yfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0QW5kT3IoZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBbmQnPkFuZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nT3InPk9yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
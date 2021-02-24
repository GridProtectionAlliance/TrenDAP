(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ViewDataSet"],{

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

/***/ "./TypeScript/Features/DataSets/ViewDataSet/Chart.tsx":
/*!************************************************************!*\
  !*** ./TypeScript/Features/DataSets/ViewDataSet/Chart.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chart; });
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
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Pan'), 2), chartAction = _a[0], setChartAction = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () { return Initialize(props.Data); }, [props.Data]);
    function HandleReset() {
        //setRecord(record.CalculateAxisRange('x'));
    }
    function Initialize(data) {
        var margin = { bottom: 50, left: 75, top: 65, right: 40 };
        var svgHeight = (window.innerHeight - 270) / 2;
        var svgWidth = (window.innerWidth - 200) / 2;
        d3__WEBPACK_IMPORTED_MODULE_1__["select"](ref.current).selectAll('svg').remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleUtc"]()
            .domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](props.Data, function (d) { return moment__WEBPACK_IMPORTED_MODULE_2___default.a.utc(d.Timestamp); }))
            .range([margin.left, svgWidth - margin.right]);
        svg.selectAll('g.xaxis').remove();
        var xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (svgHeight - margin.bottom) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x));
        svg.append("g").classed('xaxis', true).append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (svgWidth / 2) + "," + (svgHeight - margin.bottom / 3) + ")")
            .text("Time");
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .range([svgHeight - margin.bottom, margin.top])
            .domain([d3__WEBPACK_IMPORTED_MODULE_1__["min"](props.Data, function (d) { return d.Minimum; }), d3__WEBPACK_IMPORTED_MODULE_1__["max"](props.Data, function (d) { return d.Maximum; })]);
        svg.selectAll('g.yaxis').remove();
        var yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", "translate(" + (margin.left) + ",0)")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat(function (value) { return d3__WEBPACK_IMPORTED_MODULE_1__["format"]("~s")(value); }));
        var text = svg.append("g")
            .classed('yaxis', true)
            .append("text")
            .text("Channel Output");
        text.attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + ((margin.left) / 3) + ")").style("text-anchor", "middle");
        svg.selectAll('g.max').data([props.Data]).enter().append('g').attr('class', 'max').append('path').attr('stroke', 'red').attr('fill', 'none').attr('d', d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (d) { return x(moment__WEBPACK_IMPORTED_MODULE_2___default.a.utc(d.Timestamp).toDate().getTime()); }).y(function (d) { return y(d.Maximum); }));
        svg.selectAll('g.min').data([props.Data]).enter().append('g').attr('class', 'min').append('path').attr('stroke', 'red').attr('fill', 'none').attr('d', d3__WEBPACK_IMPORTED_MODULE_1__["line"]().x(function (d) { return x(moment__WEBPACK_IMPORTED_MODULE_2___default.a.utc(d.Timestamp).toDate().getTime()); }).y(function (d) { return y(d.Minimum); }));
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: ref, style: { userSelect: 'none' } }));
}


/***/ }),

/***/ "./TypeScript/Features/DataSets/ViewDataSet/Histogram.tsx":
/*!****************************************************************!*\
  !*** ./TypeScript/Features/DataSets/ViewDataSet/Histogram.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Histogram; });
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
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Average'), 2), type = _a[0], setType = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () { return Initialize(props.Data); }, [props.Data, type]);
    function Initialize(data) {
        var margin = { bottom: 50, left: 75, top: 65, right: 40 };
        var svgHeight = (window.innerHeight - 270) / 2;
        var svgWidth = (window.innerWidth - 200) / 2;
        d3__WEBPACK_IMPORTED_MODULE_1__["select"](ref.current).selectAll('svg').remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);
        var histogram = d3__WEBPACK_IMPORTED_MODULE_1__["histogram"]()
            .value(function (d) { return d; }) // I need to give the vector of value
            .domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](props.Data, function (d) { return d[type]; })) // then the domain of the graphic
            .thresholds(40); // then the numbers of bins
        var bins = histogram(props.Data.map(function (d) { return d[type]; }));
        var yMax = Math.max.apply(Math, __spread(bins.map(function (b) { return b.length; })));
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([Math.min.apply(Math, __spread(bins.map(function (a) { return a.x0; }))), Math.max.apply(Math, __spread(bins.map(function (a) { return a.x1; })))]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([margin.left, svgWidth - margin.right]);
        var xAxis = svg.append("g")
            .attr("transform", "translate(0," + (svgHeight - margin.bottom) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x));
        svg.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (svgWidth / 2) + "," + (svgHeight - margin.bottom / 3) + ")")
            .text("Channel Output");
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .range([svgHeight - margin.bottom, margin.top])
            .domain([0, yMax]); // d3.hist has to be called before the Y axis obviously
        var yAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + ",0)")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y));
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
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: ref },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-check form-check-inline" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-check-input", type: "radio", value: type, checked: type == 'Minimum', onChange: function (evt) { return setType('Minimum'); } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-check-label" }, "Min")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-check form-check-inline" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-check-input", type: "radio", checked: type == 'Average', onChange: function (evt) { return setType('Average'); } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-check-label" }, "Avg")),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-check form-check-inline" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-check-input", type: "radio", checked: type == 'Maximum', onChange: function (evt) { return setType('Maximum'); } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-check-label" }, "Max"))));
}


/***/ }),

/***/ "./TypeScript/Features/DataSets/ViewDataSet/PagedTable.tsx":
/*!*****************************************************************!*\
  !*** ./TypeScript/Features/DataSets/ViewDataSet/PagedTable.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PagedTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/gpa-symbols */ "../node_modules/@gpa-gemstone/gpa-symbols/lib/index.js");
/* harmony import */ var _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_2__);
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
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]('Timestamp'), 2), sortField = _f[0], setSortField = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](true), 2), ascending = _g[0], setAscending = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), 2), page = _h[0], setPage = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), tableData = _j[0], setTableData = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](50), 2), maxPages = _k[0], setMaxPages = _k[1];
    var _l = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), toggle = _l[0], setToggle = _l[1];
    var _m = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](null), 2), record = _m[0], setRecord = _m[1];
    var tableHeight = window.innerHeight - 270; // 50 + 100 + 70 + 50
    var maxRowCount = Math.floor(tableHeight / 65);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setTableData(props.Data.slice(page * maxRowCount, (page + 1) * maxRowCount));
    }, [page]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var index = props.Data.findIndex(function (d) { var _a; return d.Timestamp === ((_a = props.Selected) === null || _a === void 0 ? void 0 : _a.Timestamp); });
        if (index >= 0) {
            var newPage = Math.floor(index / maxRowCount);
            setPage(newPage);
        }
    }, [props.Selected]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_1___default.a, { tableClass: 'table', cols: [
                { key: 'Timestamp', label: 'Timestamp' },
                { key: 'Minimum', label: 'Min', content: function (item, key, style) { return item.Minimum.toFixed(2); } },
                { key: 'Average', label: 'Avg', content: function (item, key, style) { return item.Average.toFixed(2); } },
                { key: 'Maximum', label: 'Max', content: function (item, key, style) { return item.Maximum.toFixed(2); } },
                { key: 'QualityFlags', label: 'Flagged', content: function (item, key, style) { return item.QualityFlags > 0 ? _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_2__["Flag"] : ''; } },
                {
                    key: null, label: '', content: function (item) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () { setRecord(item); setToggle(true); } }, _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_2__["Pencil"]); }
                }
            ], selected: function (record) { var _a; return record.Timestamp === ((_a = props.Selected) === null || _a === void 0 ? void 0 : _a.Timestamp); }, data: tableData, sortField: sortField, onClick: function (data) { }, ascending: ascending, onSort: function (data) {
                if (data.col === sortField)
                    setAscending(!ascending);
                else {
                    setSortField(data.col);
                    setAscending(true);
                }
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'pull-right' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', title: 'Move back 10 pages', onClick: function () { return setPage((page >= 10 ? page - 10 : 0)); }, disabled: page <= 0 }, '<<'),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', title: 'Move back 1 page', onClick: function () { return setPage((page >= 1 ? page - 1 : 0)); }, disabled: page <= 0 }, '<'),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "Page\u00A0"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { value: page + 1, type: 'number', onChange: function (evt) { return setPage(parseInt(evt.target.value) - 1); }, style: { width: 40 } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null,
                "of\u00A0",
                maxPages + 1),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', title: 'Move forward 1 page', onClick: function () { return setPage((page <= maxPages ? page + 1 : maxPages)); }, disabled: page >= maxPages }, '>'),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', title: 'Move forward 10 pages', onClick: function () { return setPage((page <= maxPages - 10 ? page + 10 : maxPages)); }, disabled: page >= maxPages }, '>>')),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal", role: "dialog", style: { display: toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog", role: "document" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content mx-auto" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", { className: "modal-title" }, "Mark As Flagged"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "close", onClick: function () { return setToggle(false); } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { "aria-hidden": "true" }, "\u00D7"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "row" },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { style: { listStyle: 'none' } },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    "Time: ", (_a = record) === null || _a === void 0 ? void 0 :
                                    _a.Timestamp),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    "Max: ", (_b = record) === null || _b === void 0 ? void 0 :
                                    _b.Maximum),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    "Avg: ", (_c = record) === null || _c === void 0 ? void 0 :
                                    _c.Average),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    "Min: ", (_d = record) === null || _d === void 0 ? void 0 :
                                    _d.Minimum),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
                                    "Flag: ",
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: (((_e = record) === null || _e === void 0 ? void 0 : _e.QualityFlags) / Math.pow(2, 4) & 1) !== 0, onChange: function (evt) { return setRecord(__assign(__assign({}, record), { QualityFlags: evt.target.checked ? record.QualityFlags + Math.pow(2, 4) : record.QualityFlags - Math.pow(2, 4) })); } }))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                props.SetFlag(record);
                                setToggle(false);
                            } }, "Save"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-secondary", onClick: function () { return setToggle(false); } }, "Close")))))));
}


/***/ }),

/***/ "./TypeScript/Features/DataSets/ViewDataSet/ViewDataSet.tsx":
/*!******************************************************************!*\
  !*** ./TypeScript/Features/DataSets/ViewDataSet/ViewDataSet.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewDataSet; });
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
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
    var id = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])().id;
    var dataSet = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["SelectRecord"]);
    var wsStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["SelectDataSetsStatus"]);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), data = _a[0], setData = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), 2), dataSourceID = _b[0], setDataSourceID = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), 2), channelID = _c[0], setChannelID = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]), 2), selectedData = _d[0], setSelectedData = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](function (s, _) { return s + 1; }, 0), 2), flag = _e[0], setFlag = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), toggle = _f[0], setToggle = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]([{ Field: 'Average', Condition: '>', Value: 0, AndOr: 'None' }]), 2), criteria = _g[0], setCriteria = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), showFlagged = _h[0], setShowFlagged = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](null), 2), selectedPoint = _j[0], setSelectedPoint = _j[1];
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({}), 2), selectedChannels = _k[0], setSelectedChannels = _k[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setCriteria([{ Field: 'Average', Condition: '>', Value: 0, AndOr: 'None' }]);
    }, [toggle]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        if (wsStatus === 'unitiated' || wsStatus === 'changed') {
            dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["FetchDataSets"])());
        }
        dispatch(Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["SetRecordByID"])(parseInt(id)));
    }, [dispatch, wsStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (dataSourceID === 0)
            setDataSourceID((_b = (_a = data[0]) === null || _a === void 0 ? void 0 : _a.DataSource.ID, (_b !== null && _b !== void 0 ? _b : 0)));
        if (channelID === 0)
            setChannelID((_d = (_c = data[0]) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : [{ ID: 0 }]))[0].ID);
        var d = (_h = (_g = (_f = (_e = data.find(function (ds) { return ds.DataSource.ID === dataSourceID; })) === null || _e === void 0 ? void 0 : _e.Data, (_f !== null && _f !== void 0 ? _f : [])).find(function (dd) { return dd.ID === channelID; })) === null || _g === void 0 ? void 0 : _g.Data, (_h !== null && _h !== void 0 ? _h : []));
        setSelectedData(d);
    }, [data]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["GetDataSetDataFromIDB"])(id).then(function (d) {
            setData(d);
        });
    }, [flag]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var _a, _b, _c, _d;
        var d = (_d = (_c = (_b = (_a = data.find(function (ds) { return ds.DataSource.ID === dataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (dd) { return dd.ID === channelID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : []));
        setSelectedData(d);
    }, [channelID]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
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
        setChannelID(dataSource.Data[0].ID);
        setSelectedChannels(dataSource);
    }, [dataSourceID]);
    function FlagData(record) {
        Object(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__["UpdateDataSetData"])(dataSet, dataSourceID, channelID, record).then(function () { return setFlag(1); });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { padding: 10 } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, dataSet.Name),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'row' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Data Source"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: 'form-control', value: dataSourceID, onChange: function (evt) { return setDataSourceID(parseInt(evt.target.value)); } }, data.map(function (d) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: d.DataSource.ID, value: d.DataSource.ID }, d.DataSource.Name); }))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Channel"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: 'form-control', value: channelID, onChange: function (evt) { return setChannelID(parseInt(evt.target.value)); } }, Options(selectedChannels))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col-2' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-primary', style: { position: 'relative', top: 30, marginRight: 5 }, onClick: function () { } }, "Add Virtual"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-primary', style: { position: 'relative', top: 30 }, onClick: function () { /*setRecord(item); ;*/ setToggle(true); } }, "Flag Data"))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'row' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "form-check", style: { position: 'relative', top: 5, left: 5 } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", className: "form-check-input", value: showFlagged.toString(), checked: showFlagged, onChange: function (evt) { return setShowFlagged(evt.target.checked); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-check-label" }, "Show Flagged")),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Chart__WEBPACK_IMPORTED_MODULE_5__["default"], { Data: (showFlagged ? selectedData : selectedData.filter(function (sd) { return sd.QualityFlags == 0; })), SetSelected: setSelectedPoint }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Histogram__WEBPACK_IMPORTED_MODULE_6__["default"], { Data: (showFlagged ? selectedData : selectedData.filter(function (sd) { return sd.QualityFlags == 0; })) })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PagedTable__WEBPACK_IMPORTED_MODULE_4__["default"], { Data: selectedData, SetFlag: FlagData, Selected: selectedPoint }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal", role: "dialog", style: { display: toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-dialog", role: "document" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-content mx-auto" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", { className: "modal-title" }, "Mark As Flagged"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "close", onClick: function () { return setToggle(false); } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { "aria-hidden": "true" }, "\u00D7"))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, "Criteria"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { style: { listStyle: 'none' } }, criteria.map(function (c, Index) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FlagCriteria, __assign({ key: Index }, c, { Update: function (record) {
                                var newCrits = __spread(criteria);
                                newCrits[Index] = record;
                                setCriteria(newCrits);
                            }, Add: function () {
                                var newCrits = __spread(criteria);
                                newCrits[Index].AndOr = 'And';
                                newCrits.push({ Field: 'Average', Condition: '>', Value: 0, AndOr: 'None' });
                                setCriteria(newCrits);
                            } })); }))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary pull-left", onClick: function () {
                                var points = selectedData.filter(function (f) { return (f.QualityFlags / Math.pow(2, 4) & 1) !== 0; });
                                points.forEach(function (p) { return p.QualityFlags = p.QualityFlags - Math.pow(2, 4); });
                                FlagData(points);
                                setToggle(false);
                            } }, "Unflag All"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-primary", onClick: function () {
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
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "btn btn-secondary", onClick: function () { return setToggle(false); } }, "Close")))))));
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
        return dataSource.Data.map(function (channel) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TrenDAPDBChannel, { key: channel.ID, channel: channel }); });
    }
    else
        return dataSource.Data.map(function (channel) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OtherChannel, { key: channel.ID, channel: channel }); });
};
var TrenDAPDBChannel = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: props.channel.ID }, props.channel.Meter + ' - ' + props.channel.Name);
};
var OtherChannel = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: props.channel.ID }, props.channel.Name);
};
var FlagCriteria = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Field), 2), field = _a[0], setField = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Condition), 2), condition = _b[0], setCondition = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.Value), 2), value = _c[0], setValue = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.AndOr), 2), andOr = _d[0], setAndOr = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        props.Update({ Field: field, Condition: condition, Value: value, AndOr: andOr });
    }, [field, condition, value, andOr]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setAndOr(props.AndOr);
    }, [props.AndOr]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setField(props.Field);
    }, [props.Field]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setCondition(props.Condition);
    }, [props.Condition]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setValue(props.Value);
    }, [props.Value]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'row' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: 'form-control', value: field, onChange: function (evt) { return setField(evt.target.value); } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: 'Maximum' }, "Max"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: 'Average' }, "Avg"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: 'Minimum' }, "Min"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: 'form-control', value: condition, onChange: function (evt) { return setCondition(evt.target.value); } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '<' }, '<'),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '<=' }, '<='),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '==' }, '=='),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '>=' }, '>='),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: '>' }, '>'))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: 'form-control', type: 'number', value: value, onChange: function (evt) { return setValue(parseFloat(evt.target.value)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col' }, props.AndOr == 'None' ?
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: 'btn btn-link', onClick: function () { return props.Add(); } }, _Constants__WEBPACK_IMPORTED_MODULE_7__["Plus"]) :
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: 'form-control', value: andOr, onChange: function (evt) { return setAndOr(evt.target.value); } },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: 'And' }, "And"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: 'Or' }, "Or"))))));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L0NoYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L0hpc3RvZ3JhbS50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9EYXRhU2V0cy9WaWV3RGF0YVNldC9QYWdlZFRhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L1ZpZXdEYXRhU2V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRXhHLFNBQVM7QUFDVCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN2QixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDdEIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFNLE9BQU8s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QUFVO29CQUNsQyxnRUFBUSxLQUFLLEVBQUUsSUFBSSxJQUFHLElBQUksQ0FBVTtvQkFDcEMsZ0VBQVEsS0FBSyxFQUFFLElBQUksSUFBRyxJQUFJLENBQVU7b0JBQ3BDLGdFQUFRLEtBQUssRUFBRSxJQUFJLElBQUcsSUFBSSxDQUFVO29CQUNwQyxnRUFBUSxLQUFLLEVBQUUsR0FBRyxJQUFHLEdBQUcsQ0FBVSxDQUM3QixDQUNQO1lBQ04sNkRBQUssU0FBUyxFQUFDLEtBQUs7Z0JBQUMsK0RBQU8sU0FBUyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQUMsR0FBRyxJQUFLLGVBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF0QyxDQUFzQyxHQUFJLENBQU07WUFDcEosNkRBQUssU0FBUyxFQUFDLEtBQUssSUFDaEIsS0FBSyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQztnQkFDbkIsZ0VBQVEsU0FBUyxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUUsY0FBTSxZQUFLLENBQUMsR0FBRyxFQUFFLEVBQVgsQ0FBVyxJQUFJLCtDQUFJLENBQVUsRUFBQztnQkFDOUUsZ0VBQVEsU0FBUyxFQUFDLGNBQWMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFDLEdBQUcsSUFBSyxlQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFZLENBQUMsRUFBakMsQ0FBaUM7b0JBQy9GLGdFQUFRLEtBQUssRUFBQyxLQUFLLFVBQWE7b0JBQ2hDLGdFQUFRLEtBQUssRUFBQyxJQUFJLFNBQVksQ0FDekIsQ0FDVixDQUNMLENBQ0wsQ0FDUjtBQUNMLENBQUMiLCJmaWxlIjoiVmlld0RhdGFTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uc3RhbnRzLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzMwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyBlbW9qaXNcclxuY29uc3QgSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcclxuY29uc3QgUGVuY2lsID0gJ+Kcj++4jyc7XHJcbmNvbnN0IFRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xyXG5jb25zdCBDcm9zc01hcmsgPSAn4p2MJztcclxuY29uc3QgUGx1cyA9ICfinpUnO1xyXG5jb25zdCBXYXJuaW5nID0gJ+KaoO+4jyc7XHJcbmNvbnN0IFNwaW5uZXIgPSAn8J+UhCc7XHJcbmNvbnN0IFdyZW5jaCA9ICfwn5SnJztcclxuXHJcbmV4cG9ydCB7IEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFRyYXNoQ2FuLCBDcm9zc01hcmssIFBsdXMsIFdhcm5pbmcsIFNwaW5uZXIsIFdyZW5jaCB9OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnQocHJvcHM6IHsgRGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSwgU2V0U2VsZWN0ZWQ6IChyZWNvcmQ6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50KSA9PiB2b2lkIH0pIHtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtjaGFydEFjdGlvbiwgc2V0Q2hhcnRBY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5DaGFydEFjdGlvbj4oJ1BhbicpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBJbml0aWFsaXplKHByb3BzLkRhdGEpLCBbcHJvcHMuRGF0YV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZVJlc2V0KCkge1xyXG4gICAgICAgIC8vc2V0UmVjb3JkKHJlY29yZC5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3gnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZShkYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdKSB7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luID0geyBib3R0b206IDUwLCBsZWZ0OiA3NSwgdG9wOiA2NSwgcmlnaHQ6IDQwIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNzApLzI7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSAod2luZG93LmlubmVyV2lkdGggLSAyMDApIC8gMjtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHN2Z0hlaWdodCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBkMy5zY2FsZVV0YygpXHJcbiAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KHByb3BzLkRhdGEsIGQ9PiBtb21lbnQudXRjKGQuVGltZXN0YW1wKSkpXHJcbiAgICAgICAgICAgIC5yYW5nZShbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0XSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cueGF4aXMnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ3hheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxyXG5cclxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd4YXhpcycsIHRydWUpLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc3ZnV2lkdGggLyAyKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcclxuXHJcbiAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLnJhbmdlKFtzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tLCBtYXJnaW4udG9wXSlcclxuICAgICAgICAgICAgLmRvbWFpbihbZDMubWluKHByb3BzLkRhdGEsIGQgPT4gZC5NaW5pbXVtKSwgZDMubWF4KHByb3BzLkRhdGEsIGQgPT4gZC5NYXhpbXVtKV0pO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLnlheGlzJykucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd5YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKG1hcmdpbi5sZWZ0KSArIFwiLDApXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpLnRpY2tzKE1hdGguZmxvb3Ioc3ZnSGVpZ2h0IC8gNTApICsgMSkudGlja0Zvcm1hdCgodmFsdWU6IG51bWJlcikgPT4gZDMuZm9ybWF0KFwifnNcIikodmFsdWUpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZCgneWF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNoYW5uZWwgT3V0cHV0XCIpO1xyXG4gICAgICAgIHRleHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBzdmdIZWlnaHQgLyAyICsgXCIsXCIgKyAoKG1hcmdpbi5sZWZ0KSAvIDMpICsgXCIpXCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cubWF4JykuZGF0YShbcHJvcHMuRGF0YV0pLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbWF4JykuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ3JlZCcpLmF0dHIoJ2ZpbGwnLCAnbm9uZScpLmF0dHIoJ2QnLCBkMy5saW5lPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PigpLngoZCA9PiB4KG1vbWVudC51dGMoZC5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSkpLnkoZCA9PiB5KGQuTWF4aW11bSkpKVxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cubWluJykuZGF0YShbcHJvcHMuRGF0YV0pLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbWluJykuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ3JlZCcpLmF0dHIoJ2ZpbGwnLCAnbm9uZScpLmF0dHIoJ2QnLCBkMy5saW5lPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PigpLngoZCA9PiB4KG1vbWVudC51dGMoZC5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSkpLnkoZCA9PiB5KGQuTWluaW11bSkpKVxyXG5cclxuICAgICAgICBjb25zdCBwb2ludHMgPSBzdmcuc2VsZWN0QWxsKFwiZy5wb2ludHNcIilcclxuICAgICAgICAgICAgLmRhdGEoW3Byb3BzLkRhdGFdKVxyXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludHMnKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzLnNlbGVjdEFsbCgncG9pbnQnKS5kYXRhKGQgPT4gZCkuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludCcpO1xyXG4gICAgICAgIC8vcG9pbnQuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ2xpZ2h0Z3JheScpLmF0dHIoJ2QnLCBkID0+IGBNICR7eChtb21lbnQudXRjKGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpfSwgJHt5KGQuQXZlcmFnZSl9IFYgJHt5KGQuTWF4aW11bSl9WmApO1xyXG4gICAgICAgIC8vcG9pbnQuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ2xpZ2h0Z3JheScpLmF0dHIoJ2QnLCBkID0+IGBNICR7eChtb21lbnQudXRjKGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpfSwgJHt5KGQuQXZlcmFnZSl9IFYgJHt5KGQuTWluaW11bSl9WmApXHJcbiAgICAgICAgcG9pbnQuYXBwZW5kKFwiY2lyY2xlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCAzLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgobW9tZW50KGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpOyB9KVxyXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQuQXZlcmFnZSk7IH0pXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoZSxkOiBhbnkpID0+IHsgcHJvcHMuU2V0U2VsZWN0ZWQoZCkgfSlcclxuICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXt7IHVzZXJTZWxlY3Q6ICdub25lJyB9fT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgSGlzdG9ncmFtLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8xOC8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpc3RvZ3JhbShwcm9wczogeyBEYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdIH0pIHtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlPCdNaW5pbXVtJyB8ICdBdmVyYWdlJyB8ICdNYXhpbXVtJz4oJ0F2ZXJhZ2UnKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBJbml0aWFsaXplKHByb3BzLkRhdGEpLCBbcHJvcHMuRGF0YSwgdHlwZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemUoZGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSkge1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHsgYm90dG9tOiA1MCwgbGVmdDogNzUsIHRvcDogNjUsIHJpZ2h0OiA0MCB9O1xyXG5cclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gMjcwKSAvIDI7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSAod2luZG93LmlubmVyV2lkdGggLSAyMDApIC8gMjtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHN2Z0hlaWdodCk7XHJcblxyXG4gICAgICAgIGxldCBoaXN0b2dyYW0gPSBkMy5oaXN0b2dyYW08bnVtYmVyLCBudW1iZXI+KClcclxuICAgICAgICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkOyB9KSAgIC8vIEkgbmVlZCB0byBnaXZlIHRoZSB2ZWN0b3Igb2YgdmFsdWVcclxuICAgICAgICAgICAgLmRvbWFpbihkMy5leHRlbnQocHJvcHMuRGF0YSwgZCA9PiBkW3R5cGVdKSBhcyBbbnVtYmVyLCBudW1iZXJdKSAgLy8gdGhlbiB0aGUgZG9tYWluIG9mIHRoZSBncmFwaGljXHJcbiAgICAgICAgICAgIC50aHJlc2hvbGRzKDQwKTsgLy8gdGhlbiB0aGUgbnVtYmVycyBvZiBiaW5zXHJcblxyXG4gICAgICAgIGNvbnN0IGJpbnMgPSBoaXN0b2dyYW0ocHJvcHMuRGF0YS5tYXAoZCA9PiBkW3R5cGVdKSk7XHJcblxyXG4gICAgICAgIGxldCB5TWF4ID0gTWF0aC5tYXgoLi4uYmlucy5tYXAoYiA9PiBiLmxlbmd0aCkpO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAuZG9tYWluKFtNYXRoLm1pbiguLi5iaW5zLm1hcChhID0+IGEueDApKSwgTWF0aC5tYXgoLi4uYmlucy5tYXAoYSA9PiBhLngxKSldKSAgICAgLy8gY2FuIHVzZSB0aGlzIGluc3RlYWQgb2YgMTAwMCB0byBoYXZlIHRoZSBtYXggb2YgZGF0YTogZDMubWF4KGRhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuICtkLnByaWNlIH0pXHJcbiAgICAgICAgICAgIC5yYW5nZShbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0XSk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgKyBcIilcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc3ZnV2lkdGggLyAyKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNoYW5uZWwgT3V0cHV0XCIpXHJcblxyXG4gICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5yYW5nZShbc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pXHJcbiAgICAgICAgICAgIC5kb21haW4oWzAsIHlNYXhdKTsgICAvLyBkMy5oaXN0IGhhcyB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBZIGF4aXMgb2J2aW91c2x5XHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLDApXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcclxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBzdmdIZWlnaHQgLyAyICsgXCIsXCIgKyBtYXJnaW4ubGVmdCAvIDMgKyBcIilcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLnRleHQoXCJDb3VudHNcIilcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcclxuICAgICAgICAgICAgLmRhdGEoYmlucylcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDEpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkKSA9PiBgdHJhbnNsYXRlKCR7eChkLngwKX0sJHt5KGQubGVuZ3RoKX0pYClcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4gKHgoZC54MSkgLSB4KGQueDApID4gMiA/IHgoZC54MSkgLSB4KGQueDApIDogMikgLSAxKVxyXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20pIC0geShkLmxlbmd0aCkpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCkgPT4gJ2RhcmtibHVlJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e3R5cGV9IGNoZWNrZWQ9e3R5cGUgPT0gJ01pbmltdW0nfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZSgnTWluaW11bScpIH0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5NaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXt0eXBlID09ICdBdmVyYWdlJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldFR5cGUoJ0F2ZXJhZ2UnKX0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5Bdmc8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3R5cGUgPT0gJ01heGltdW0nfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZSgnTWF4aW11bScpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5NYXg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgUGFnZWRUYWJsZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IHsgUGVuY2lsLCBGbGFnIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9ncGEtc3ltYm9scyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZWRUYWJsZShwcm9wczogeyBEYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdLCBTZWxlY3RlZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQsU2V0RmxhZzogKHJlY29yZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQgKSA9PiB2b2lkfSkge1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PignVGltZXN0YW1wJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW3RhYmxlRGF0YSwgc2V0VGFibGVEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFttYXhQYWdlcywgc2V0TWF4UGFnZXNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPig1MCk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCB0YWJsZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDI3MDsgLy8gNTAgKyAxMDAgKyA3MCArIDUwXHJcbiAgICBjb25zdCBtYXhSb3dDb3VudCA9IE1hdGguZmxvb3IodGFibGVIZWlnaHQgLyA2NSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByb3BzLkRhdGFdO1xyXG4gICAgICAgIGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYVtzb3J0RmllbGRdID4gYltzb3J0RmllbGRdKSByZXR1cm4gKGFzY2VuZGluZyA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFbc29ydEZpZWxkXSA9PT0gYltzb3J0RmllbGRdKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gKGFzY2VuZGluZyA/IC0xIDogMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGFibGVEYXRhKGRhdGEuc2xpY2UocGFnZSAqIG1heFJvd0NvdW50LCAocGFnZSArIDEpICogbWF4Um93Q291bnQpKTtcclxuICAgICAgICBzZXRNYXhQYWdlcyhNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBtYXhSb3dDb3VudCkgLSAxKTtcclxuICAgIH0sIFtwcm9wcy5EYXRhLCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRhYmxlRGF0YShwcm9wcy5EYXRhLnNsaWNlKHBhZ2UgKiBtYXhSb3dDb3VudCwgKHBhZ2UgKyAxKSAqIG1heFJvd0NvdW50KSk7XHJcbiAgICB9LCBbcGFnZV0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9wcy5EYXRhLmZpbmRJbmRleChkID0+IGQuVGltZXN0YW1wID09PSBwcm9wcy5TZWxlY3RlZD8uVGltZXN0YW1wKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3UGFnZSA9IE1hdGguZmxvb3IoaW5kZXggLyBtYXhSb3dDb3VudCk7XHJcbiAgICAgICAgICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLlNlbGVjdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGFibGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+IHRhYmxlQ2xhc3M9J3RhYmxlJ1xyXG4gICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVGltZXN0YW1wJywgbGFiZWw6ICdUaW1lc3RhbXAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNaW5pbXVtJywgbGFiZWw6ICdNaW4nLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbS5NaW5pbXVtLnRvRml4ZWQoMikgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0F2ZXJhZ2UnLCBsYWJlbDogJ0F2ZycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBpdGVtLkF2ZXJhZ2UudG9GaXhlZCgyKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWF4aW11bScsIGxhYmVsOiAnTWF4JywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW0uTWF4aW11bS50b0ZpeGVkKDIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdRdWFsaXR5RmxhZ3MnLCBsYWJlbDogJ0ZsYWdnZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbS5RdWFsaXR5RmxhZ3MgPiAwID8gRmxhZyA6ICcnfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbnVsbCwgbGFiZWw6ICcnLCBjb250ZW50OiAoaXRlbSkgPT4gPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgb25DbGljaz17KCkgPT4geyBzZXRSZWNvcmQoaXRlbSk7IHNldFRvZ2dsZSh0cnVlKTsgfSB9PntQZW5jaWx9PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtyZWNvcmQgPT4gcmVjb3JkLlRpbWVzdGFtcCA9PT0gcHJvcHMuU2VsZWN0ZWQ/LlRpbWVzdGFtcCB9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXt0YWJsZURhdGF9XHJcbiAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkYXRhKSA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgIG9uU29ydD17KGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2wgPT09IHNvcnRGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRGaWVsZChkYXRhLmNvbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B1bGwtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgdGl0bGU9J01vdmUgYmFjayAxMCBwYWdlcycgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocGFnZSA+PSAxMCA/IHBhZ2UgLSAxMCA6IDApKX0gZGlzYWJsZWQ9e3BhZ2UgPD0gMH0+eyc8PCd9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyB0aXRsZT0nTW92ZSBiYWNrIDEgcGFnZScgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocGFnZSA+PSAxID8gcGFnZSAtIDEgOiAwKSl9IGRpc2FibGVkPXtwYWdlIDw9IDB9PnsnPCd9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5QYWdlJm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwYWdlICsgMX0gdHlwZT0nbnVtYmVyJyBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UGFnZShwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSAtIDEpfSBzdHlsZT17e3dpZHRoOiA0MH19IC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5vZiZuYnNwO3sgbWF4UGFnZXMgKyAxfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIHRpdGxlPSdNb3ZlIGZvcndhcmQgMSBwYWdlJyBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwYWdlIDw9IG1heFBhZ2VzID8gcGFnZSArIDEgOiBtYXhQYWdlcykpfSBkaXNhYmxlZD17cGFnZSA+PSBtYXhQYWdlc30+eyc+J308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIHRpdGxlPSdNb3ZlIGZvcndhcmQgMTAgcGFnZXMnIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKHBhZ2UgPD0gbWF4UGFnZXMgLSAxMCA/IHBhZ2UgKyAxMCA6IG1heFBhZ2VzKSl9IGRpc2FibGVkPXtwYWdlID49IG1heFBhZ2VzfT57Jz4+J308L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiIHN0eWxlPXt7IGRpc3BsYXk6IHRvZ2dsZSA/ICdibG9jaycgOiAnbm9uZScsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40KScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5NYXJrIEFzIEZsYWdnZWQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtcImNsb3NlXCJ9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGU6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGltZToge3JlY29yZD8uVGltZXN0YW1wfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NYXg6IHtyZWNvcmQ/Lk1heGltdW19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkF2Zzoge3JlY29yZD8uQXZlcmFnZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWluOiB7cmVjb3JkPy5NaW5pbXVtfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GbGFnOiA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9eyhyZWNvcmQ/LlF1YWxpdHlGbGFncyAvIE1hdGgucG93KDIsIDQpICYgMSkgIT09IDB9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQoeyAuLi5yZWNvcmQsIFF1YWxpdHlGbGFnczogZXZ0LnRhcmdldC5jaGVja2VkID8gcmVjb3JkLlF1YWxpdHlGbGFncyArIE1hdGgucG93KDIsIDQpIDogcmVjb3JkLlF1YWxpdHlGbGFncyAtIE1hdGgucG93KDIsIDQpfSkgfS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldEZsYWcocmVjb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFZpZXdEYXRhU2V0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8xNy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVcGRhdGVEYXRhU2V0RGF0YSwgU2VsZWN0RGF0YVNldHNTdGF0dXMsIEZldGNoRGF0YVNldHMsIFNlbGVjdFJlY29yZCwgU2V0UmVjb3JkQnlJRCwgR2V0RGF0YVNldERhdGFGcm9tSURCLCBVcGRhdGVEYXRhU2V0RGF0YUZsYWcgfSBmcm9tICcuLi9EYXRhU2V0c1NsaWNlJ1xyXG5pbXBvcnQgeyAgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUGFnZWRUYWJsZSBmcm9tICcuL1BhZ2VkVGFibGUnO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9DaGFydCc7XHJcbmltcG9ydCBIaXN0b2dyYW0gZnJvbSAnLi9IaXN0b2dyYW0nO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlcnMgfSBmcm9tICdAZ3BhLWdlbXN0b25lL2dwYS1zeW1ib2xzJztcclxuaW1wb3J0IHsgUGx1cyB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3RGF0YVNldCgpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtczx7aWR9PigpO1xyXG4gICAgY29uc3QgZGF0YVNldCA9IHVzZVNlbGVjdG9yKFNlbGVjdFJlY29yZClcclxuICAgIGNvbnN0IHdzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHNTdGF0dXMpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pRGF0YVNldFJldHVybltdPihbXSk7XHJcbiAgICBjb25zdCBbZGF0YVNvdXJjZUlELCBzZXREYXRhU291cmNlSURdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtjaGFubmVsSUQsIHNldENoYW5uZWxJRF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkRGF0YSwgc2V0U2VsZWN0ZWREYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IFJlYWN0LnVzZVJlZHVjZXIoKHMsXykgPT4gcyArIDEsIDApO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtjcml0ZXJpYSwgc2V0Q3JpdGVyaWFdID0gUmVhY3QudXNlU3RhdGU8eyBGaWVsZDogYW55LCBDb25kaXRpb246IGFueSwgVmFsdWU6IG51bWJlciwgQW5kT3IgfVtdPihbeyBGaWVsZDogJ0F2ZXJhZ2UnLCBDb25kaXRpb246ICc+JywgVmFsdWU6IDAsIEFuZE9yOiAnTm9uZScgfV0pO1xyXG4gICAgY29uc3QgW3Nob3dGbGFnZ2VkLCBzZXRTaG93RmxhZ2dlZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQb2ludCwgc2V0U2VsZWN0ZWRQb2ludF0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4obnVsbCk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRDaGFubmVscywgc2V0U2VsZWN0ZWRDaGFubmVsc10gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlEYXRhU2V0UmV0dXJuPih7fSBhcyBUcmVuREFQLmlEYXRhU2V0UmV0dXJuICk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRDcml0ZXJpYShbeyBGaWVsZDogJ0F2ZXJhZ2UnLCBDb25kaXRpb246ICc+JywgVmFsdWU6IDAsIEFuZE9yOiAnTm9uZScgfV0pO1xyXG4gICAgfSwgW3RvZ2dsZV0pO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3c1N0YXR1cyA9PT0gJ3VuaXRpYXRlZCcgfHwgd3NTdGF0dXMgPT09ICdjaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTZXRzKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goU2V0UmVjb3JkQnlJRChwYXJzZUludChpZCkpKTtcclxuICAgIH0sIFtkaXNwYXRjaCwgd3NTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGRhdGFTb3VyY2VJRCA9PT0gMClcclxuICAgICAgICAgICAgc2V0RGF0YVNvdXJjZUlEKGRhdGFbMF0/LkRhdGFTb3VyY2UuSUQgPz8gMCk7XHJcbiAgICAgICAgaWYoY2hhbm5lbElEID09PSAwKVxyXG4gICAgICAgICAgICBzZXRDaGFubmVsSUQoKGRhdGFbMF0/LkRhdGEgPz8gW3sgSUQ6IDAgfV0pWzBdLklEKTtcclxuXHJcbiAgICAgICAgY29uc3QgZCA9IChkYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gZGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXSkuZmluZChkZCA9PiBkZC5JRCA9PT0gY2hhbm5lbElEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBzZXRTZWxlY3RlZERhdGEoZCk7XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEdldERhdGFTZXREYXRhRnJvbUlEQihpZCkudGhlbihkID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YShkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtmbGFnXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkID0gKGRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSBkYXRhU291cmNlSUQpPy5EYXRhID8/IFtdKS5maW5kKGRkID0+IGRkLklEID09PSBjaGFubmVsSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIHNldFNlbGVjdGVkRGF0YShkKTtcclxuICAgICAgICBcclxuICAgIH0sIFtjaGFubmVsSURdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IGRhdGFTb3VyY2VJRCk7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2UgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YVNvdXJjZS5EYXRhID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChkYXRhU291cmNlLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1RyZW5EQVBEQicpIHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZS5EYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLk1ldGVyICsgJyAtICcgKyBhLk5hbWUgPiBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID09IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hhbm5lbElEKGRhdGFTb3VyY2UuRGF0YVswXS5JRCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDaGFubmVscyhkYXRhU291cmNlKTtcclxuXHJcbiAgICB9LCBbZGF0YVNvdXJjZUlEXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gRmxhZ0RhdGEocmVjb3JkOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludCB8IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10pIHtcclxuICAgICAgICBVcGRhdGVEYXRhU2V0RGF0YShkYXRhU2V0LCBkYXRhU291cmNlSUQsIGNoYW5uZWxJRCwgcmVjb3JkKS50aGVuKCgpID0+IHNldEZsYWcoMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cclxuICAgICAgICAgICAgPGgzPntkYXRhU2V0Lk5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRhdGEgU291cmNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17ZGF0YVNvdXJjZUlEfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0RGF0YVNvdXJjZUlEKHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpKSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoZCA9PiA8b3B0aW9uIGtleT17ZC5EYXRhU291cmNlLklEfSB2YWx1ZT17ZC5EYXRhU291cmNlLklEfT57ZC5EYXRhU291cmNlLk5hbWV9PC9vcHRpb24+KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaGFubmVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17Y2hhbm5lbElEfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q2hhbm5lbElEKHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtPcHRpb25zKHNlbGVjdGVkQ2hhbm5lbHMpIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogMzAsIG1hcmdpblJpZ2h0OiA1IH19IG9uQ2xpY2s9eygpID0+IHsgfX0+QWRkIFZpcnR1YWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5JyBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAzMCB9fSBvbkNsaWNrPXsoKSA9PiB7IC8qc2V0UmVjb3JkKGl0ZW0pOyA7Ki8gc2V0VG9nZ2xlKHRydWUpfX0+RmxhZyBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogNSwgbGVmdDogNX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHZhbHVlPXtzaG93RmxhZ2dlZC50b1N0cmluZygpfSBjaGVja2VkPXtzaG93RmxhZ2dlZH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFNob3dGbGFnZ2VkKGV2dC50YXJnZXQuY2hlY2tlZCkgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+U2hvdyBGbGFnZ2VkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhcnQgRGF0YT17KHNob3dGbGFnZ2VkID8gc2VsZWN0ZWREYXRhIDogc2VsZWN0ZWREYXRhLmZpbHRlcihzZCA9PiBzZC5RdWFsaXR5RmxhZ3MgPT0gMCkpfSBTZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWRQb2ludH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8SGlzdG9ncmFtIERhdGE9eyhzaG93RmxhZ2dlZCA/IHNlbGVjdGVkRGF0YSA6IHNlbGVjdGVkRGF0YS5maWx0ZXIoc2QgPT4gc2QuUXVhbGl0eUZsYWdzID09IDApKX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlZFRhYmxlIERhdGE9e3NlbGVjdGVkRGF0YX0gU2V0RmxhZz17RmxhZ0RhdGF9IFNlbGVjdGVkPXtzZWxlY3RlZFBvaW50IH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiByb2xlPVwiZGlhbG9nXCIgc3R5bGU9e3sgZGlzcGxheTogdG9nZ2xlID8gJ2Jsb2NrJyA6ICdub25lJywgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjQpJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPk1hcmsgQXMgRmxhZ2dlZDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e1wiY2xvc2VcIn0gb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q3JpdGVyaWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NyaXRlcmlhLm1hcCgoYywgSW5kZXgpID0+IDxGbGFnQ3JpdGVyaWEga2V5PXtJbmRleH0gey4uLmN9IFVwZGF0ZT17KHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q3JpdHMgPSBbLi4uY3JpdGVyaWFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDcml0c1tJbmRleF0gPSByZWNvcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENyaXRlcmlhKG5ld0NyaXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBBZGQ9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0NyaXRzID0gWyAuLi5jcml0ZXJpYV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NyaXRzW0luZGV4XS5BbmRPciA9ICdBbmQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDcml0cy5wdXNoKHsgRmllbGQ6ICdBdmVyYWdlJywgQ29uZGl0aW9uOiAnPicsIFZhbHVlOiAwLCBBbmRPcjogJ05vbmUnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDcml0ZXJpYShuZXdDcml0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgcHVsbC1sZWZ0XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2ludHMgPSBzZWxlY3RlZERhdGEuZmlsdGVyKGYgPT4gKGYuUXVhbGl0eUZsYWdzL01hdGgucG93KDIsNCkgJiAxKSAhPT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzLmZvckVhY2gocCA9PiBwLlF1YWxpdHlGbGFncyA9IHAuUXVhbGl0eUZsYWdzLSBNYXRoLnBvdygyLCA0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxhZ0RhdGEocG9pbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+VW5mbGFnIEFsbDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnRzID0gc2VsZWN0ZWREYXRhLmZpbHRlcihmID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmUgPSBjcml0ZXJpYS5tYXAoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYy5Db25kaXRpb24gPT0gJzwnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFZhbHVlOiBmW2MuRmllbGRdIDwgYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMuQ29uZGl0aW9uID09ICc8PScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPD0gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMuQ29uZGl0aW9uID09ICc+PScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPj0gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMuQ29uZGl0aW9uID09ICc+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA+IGMuVmFsdWUsIEFuZE9yOiBjLkFuZE9yIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPT0gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJlLnJlZHVjZSgoYSwgYiwgaSwgc291cmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSByZXR1cm4gYi5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNvdXJjZVtpLTFdLkFuZE9yID09ICdPcicpIHJldHVybiBhIHx8IGIuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBhICYmIGIuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMuZm9yRWFjaChwID0+IHAuUXVhbGl0eUZsYWdzID0gcC5RdWFsaXR5RmxhZ3MgKyBNYXRoLnBvdygyLCA0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxhZ0RhdGEocG9pbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+UHJvY2VzczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgT3B0aW9ucyA9IChkYXRhU291cmNlOiBUcmVuREFQLmlEYXRhU2V0UmV0dXJuKSA9PiB7XHJcbiAgICBpZiAoZGF0YVNvdXJjZSA9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAoZGF0YVNvdXJjZS5EYXRhID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoZGF0YVNvdXJjZS5EYXRhU291cmNlLlR5cGUgPT09ICdUcmVuREFQREInKSB7XHJcbiAgICAgICAgZGF0YVNvdXJjZS5EYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA+IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEuTWV0ZXIgKyAnIC0gJyArIGEuTmFtZSA9PSBiLk1ldGVyICsgJyAtICcgKyBiLk5hbWUpIHJldHVybiAwO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAtMTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBkYXRhU291cmNlLkRhdGEubWFwKGNoYW5uZWwgPT4gPFRyZW5EQVBEQkNoYW5uZWwga2V5PXtjaGFubmVsLklEfSBjaGFubmVsPXtjaGFubmVsfSAvPik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuRGF0YS5tYXAoY2hhbm5lbCA9PiA8T3RoZXJDaGFubmVsIGtleT17Y2hhbm5lbC5JRH0gY2hhbm5lbD17Y2hhbm5lbH0gLz4pO1xyXG59XHJcblxyXG5jb25zdCBUcmVuREFQREJDaGFubmVsID0gKHByb3BzOiB7IGNoYW5uZWw6IFRyZW5EQVAuaVhEQVJldHVybkRhdGEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWwuSUR9Pntwcm9wcy5jaGFubmVsLk1ldGVyICsgJyAtICcgKyBwcm9wcy5jaGFubmVsLk5hbWV9PC9vcHRpb24+XHJcbn1cclxuXHJcbmNvbnN0IE90aGVyQ2hhbm5lbCA9IChwcm9wczogeyBjaGFubmVsOiBUcmVuREFQLmlYREFSZXR1cm5EYXRhIH0pID0+IHtcclxuICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtwcm9wcy5jaGFubmVsLklEfT57cHJvcHMuY2hhbm5lbC5OYW1lfTwvb3B0aW9uPlxyXG59XHJcblxyXG5jb25zdCBGbGFnQ3JpdGVyaWEgPSAocHJvcHM6IHtGaWVsZCwgQ29uZGl0aW9uLCBWYWx1ZSwgQW5kT3IsIFVwZGF0ZTogKHJlY29yZCkgPT4gdm9pZCwgQWRkOiAoKSA9PiB2b2lkfSkgPT4ge1xyXG4gICAgY29uc3QgW2ZpZWxkLCBzZXRGaWVsZF0gPSBSZWFjdC51c2VTdGF0ZTwnTWF4aW11bScgfCAnTWluaW11bScgfCAnQXZlcmFnZSc+KHByb3BzLkZpZWxkKTtcclxuICAgIGNvbnN0IFtjb25kaXRpb24sIHNldENvbmRpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTwnPCcgfCAnPD0nIHwgJz09JyB8ICc+PScgfCAnPic+KHByb3BzLkNvbmRpdGlvbik7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4ocHJvcHMuVmFsdWUpO1xyXG4gICAgY29uc3QgW2FuZE9yLCBzZXRBbmRPcl0gPSBSZWFjdC51c2VTdGF0ZTwnQW5kJyB8ICdPcicgfCAnTm9uZSc+KHByb3BzLkFuZE9yKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLlVwZGF0ZSh7IEZpZWxkOiBmaWVsZCwgQ29uZGl0aW9uOiBjb25kaXRpb24sIFZhbHVlOiB2YWx1ZSwgQW5kT3I6IGFuZE9yIH0pO1xyXG4gICAgfSwgW2ZpZWxkLCBjb25kaXRpb24sIHZhbHVlLCBhbmRPcl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0QW5kT3IocHJvcHMuQW5kT3IpO1xyXG4gICAgfSwgW3Byb3BzLkFuZE9yXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRGaWVsZChwcm9wcy5GaWVsZCk7XHJcbiAgICB9LCBbcHJvcHMuRmllbGRdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldENvbmRpdGlvbihwcm9wcy5Db25kaXRpb24pO1xyXG4gICAgfSwgW3Byb3BzLkNvbmRpdGlvbl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUocHJvcHMuVmFsdWUpO1xyXG4gICAgfSwgW3Byb3BzLlZhbHVlXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2ZpZWxkfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0RmllbGQoZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J01heGltdW0nPk1heDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBdmVyYWdlJz5Bdmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTWluaW11bSc+TWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtjb25kaXRpb259IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDb25kaXRpb24oZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyc8J30+eyc8J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Jzw9J30+eyc8PSd9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyc9PSd9PnsnPT0nfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPj0nfT57Jz49J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Jz4nfT57Jz4nfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz48aW5wdXQgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHR5cGU9J251bWJlcicgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VmFsdWUocGFyc2VGbG9hdChldnQudGFyZ2V0LnZhbHVlKSl9IC8+PC9kaXY+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz57XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuQW5kT3IgPT0gJ05vbmUnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgb25DbGljaz17KCkgPT4gcHJvcHMuQWRkKCkgfT57UGx1c308L2J1dHRvbj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXthbmRPcn0gb25DaGFuZ2U9eyhldnQpID0+IHNldEFuZE9yKGV2dC50YXJnZXQudmFsdWUgYXMgYW55KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nQW5kJz5BbmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J09yJz5Pcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
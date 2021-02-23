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
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleTime"]()
            .domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](props.Data, function (d) { return moment__WEBPACK_IMPORTED_MODULE_2___default()(d.Timestamp); }))
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
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: 'checkbox', checked: ((_e = record) === null || _e === void 0 ? void 0 : _e.QualityFlags) > 0, onChange: function (evt) { return setRecord(__assign(__assign({}, record), { QualityFlags: evt.target.checked ? 1 : 0 })); } }))))),
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
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: 'form-control', value: channelID, onChange: function (evt) { return setChannelID(parseInt(evt.target.value)); } }, Options(data.find(function (d) { return d.DataSource.ID === dataSourceID; })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'col-1', style: { width: 75 } },
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
                                points.forEach(function (p) { return p.QualityFlags = 1; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L0NoYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L0hpc3RvZ3JhbS50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9EYXRhU2V0cy9WaWV3RGF0YVNldC9QYWdlZFRhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL1ZpZXdEYXRhU2V0L1ZpZXdEYXRhU2V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLHVCQUF1QjtBQUN2QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRXhHLFNBQVM7QUFDVCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN2QixJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDdEIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFNLE9BQU8s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QUFDLEdBQUcsSUFBSyxlQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFZLENBQUMsRUFBakMsQ0FBaUM7b0JBQy9GLGdFQUFRLEtBQUssRUFBQyxLQUFLLFVBQWE7b0JBQ2hDLGdFQUFRLEtBQUssRUFBQyxJQUFJLFNBQVksQ0FDekIsQ0FDVixDQUNMLENBQ0wsQ0FDUjtBQUNMLENBQUMiLCJmaWxlIjoiVmlld0RhdGFTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgQ29uc3RhbnRzLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA5LzMwLzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyBlbW9qaXNcclxuY29uc3QgSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcclxuY29uc3QgUGVuY2lsID0gJ+Kcj++4jyc7XHJcbmNvbnN0IFRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xyXG5jb25zdCBDcm9zc01hcmsgPSAn4p2MJztcclxuY29uc3QgUGx1cyA9ICfinpUnO1xyXG5jb25zdCBXYXJuaW5nID0gJ+KaoO+4jyc7XHJcbmNvbnN0IFNwaW5uZXIgPSAn8J+UhCc7XHJcbmNvbnN0IFdyZW5jaCA9ICfwn5SnJztcclxuXHJcbmV4cG9ydCB7IEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFRyYXNoQ2FuLCBDcm9zc01hcmssIFBsdXMsIFdhcm5pbmcsIFNwaW5uZXIsIFdyZW5jaCB9OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDaGFydC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcnQocHJvcHM6IHsgRGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSwgU2V0U2VsZWN0ZWQ6IChyZWNvcmQ6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50KSA9PiB2b2lkIH0pIHtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtjaGFydEFjdGlvbiwgc2V0Q2hhcnRBY3Rpb25dID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5DaGFydEFjdGlvbj4oJ1BhbicpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBJbml0aWFsaXplKHByb3BzLkRhdGEpLCBbcHJvcHMuRGF0YV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZVJlc2V0KCkge1xyXG4gICAgICAgIC8vc2V0UmVjb3JkKHJlY29yZC5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3gnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZShkYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdKSB7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luID0geyBib3R0b206IDUwLCBsZWZ0OiA3NSwgdG9wOiA2NSwgcmlnaHQ6IDQwIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNzApLzI7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSAod2luZG93LmlubmVyV2lkdGggLSAyMDApIC8gMjtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHN2Z0hlaWdodCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBkMy5zY2FsZVRpbWUoKVxyXG4gICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudChwcm9wcy5EYXRhLCBkPT4gbW9tZW50KGQuVGltZXN0YW1wKSkpXHJcbiAgICAgICAgICAgIC5yYW5nZShbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0XSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cueGF4aXMnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ3hheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxyXG5cclxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd4YXhpcycsIHRydWUpLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc3ZnV2lkdGggLyAyKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcclxuXHJcbiAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLnJhbmdlKFtzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tLCBtYXJnaW4udG9wXSlcclxuICAgICAgICAgICAgLmRvbWFpbihbZDMubWluKHByb3BzLkRhdGEsIGQgPT4gZC5NaW5pbXVtKSwgZDMubWF4KHByb3BzLkRhdGEsIGQgPT4gZC5NYXhpbXVtKV0pO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLnlheGlzJykucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd5YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKG1hcmdpbi5sZWZ0KSArIFwiLDApXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpLnRpY2tzKE1hdGguZmxvb3Ioc3ZnSGVpZ2h0IC8gNTApICsgMSkudGlja0Zvcm1hdCgodmFsdWU6IG51bWJlcikgPT4gZDMuZm9ybWF0KFwifnNcIikodmFsdWUpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZCgneWF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNoYW5uZWwgT3V0cHV0XCIpO1xyXG4gICAgICAgIHRleHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBzdmdIZWlnaHQgLyAyICsgXCIsXCIgKyAoKG1hcmdpbi5sZWZ0KSAvIDMpICsgXCIpXCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cubWF4JykuZGF0YShbcHJvcHMuRGF0YV0pLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbWF4JykuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ3JlZCcpLmF0dHIoJ2ZpbGwnLCAnbm9uZScpLmF0dHIoJ2QnLCBkMy5saW5lPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PigpLngoZCA9PiB4KG1vbWVudC51dGMoZC5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSkpLnkoZCA9PiB5KGQuTWF4aW11bSkpKVxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cubWluJykuZGF0YShbcHJvcHMuRGF0YV0pLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbWluJykuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ3JlZCcpLmF0dHIoJ2ZpbGwnLCAnbm9uZScpLmF0dHIoJ2QnLCBkMy5saW5lPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PigpLngoZCA9PiB4KG1vbWVudC51dGMoZC5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSkpLnkoZCA9PiB5KGQuTWluaW11bSkpKVxyXG5cclxuICAgICAgICBjb25zdCBwb2ludHMgPSBzdmcuc2VsZWN0QWxsKFwiZy5wb2ludHNcIilcclxuICAgICAgICAgICAgLmRhdGEoW3Byb3BzLkRhdGFdKVxyXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludHMnKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzLnNlbGVjdEFsbCgncG9pbnQnKS5kYXRhKGQgPT4gZCkuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdwb2ludCcpO1xyXG4gICAgICAgIC8vcG9pbnQuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ2xpZ2h0Z3JheScpLmF0dHIoJ2QnLCBkID0+IGBNICR7eChtb21lbnQudXRjKGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpfSwgJHt5KGQuQXZlcmFnZSl9IFYgJHt5KGQuTWF4aW11bSl9WmApO1xyXG4gICAgICAgIC8vcG9pbnQuYXBwZW5kKCdwYXRoJykuYXR0cignc3Ryb2tlJywgJ2xpZ2h0Z3JheScpLmF0dHIoJ2QnLCBkID0+IGBNICR7eChtb21lbnQudXRjKGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpfSwgJHt5KGQuQXZlcmFnZSl9IFYgJHt5KGQuTWluaW11bSl9WmApXHJcbiAgICAgICAgcG9pbnQuYXBwZW5kKFwiY2lyY2xlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiclwiLCAzLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHgobW9tZW50KGQuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkpOyB9KVxyXG4gICAgICAgICAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5KGQuQXZlcmFnZSk7IH0pXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoZSxkOiBhbnkpID0+IHsgcHJvcHMuU2V0U2VsZWN0ZWQoZCkgfSlcclxuICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXt7IHVzZXJTZWxlY3Q6ICdub25lJyB9fT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgSGlzdG9ncmFtLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8xOC8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpc3RvZ3JhbShwcm9wczogeyBEYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdIH0pIHtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlPCdNaW5pbXVtJyB8ICdBdmVyYWdlJyB8ICdNYXhpbXVtJz4oJ0F2ZXJhZ2UnKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBJbml0aWFsaXplKHByb3BzLkRhdGEpLCBbcHJvcHMuRGF0YSwgdHlwZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemUoZGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSkge1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IHsgYm90dG9tOiA1MCwgbGVmdDogNzUsIHRvcDogNjUsIHJpZ2h0OiA0MCB9O1xyXG5cclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gMjcwKSAvIDI7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSAod2luZG93LmlubmVyV2lkdGggLSAyMDApIC8gMjtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHN2Z0hlaWdodCk7XHJcblxyXG4gICAgICAgIGxldCBoaXN0b2dyYW0gPSBkMy5oaXN0b2dyYW08bnVtYmVyLCBudW1iZXI+KClcclxuICAgICAgICAgICAgLnZhbHVlKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkOyB9KSAgIC8vIEkgbmVlZCB0byBnaXZlIHRoZSB2ZWN0b3Igb2YgdmFsdWVcclxuICAgICAgICAgICAgLmRvbWFpbihkMy5leHRlbnQocHJvcHMuRGF0YSwgZCA9PiBkW3R5cGVdKSBhcyBbbnVtYmVyLCBudW1iZXJdKSAgLy8gdGhlbiB0aGUgZG9tYWluIG9mIHRoZSBncmFwaGljXHJcbiAgICAgICAgICAgIC50aHJlc2hvbGRzKDQwKTsgLy8gdGhlbiB0aGUgbnVtYmVycyBvZiBiaW5zXHJcblxyXG4gICAgICAgIGNvbnN0IGJpbnMgPSBoaXN0b2dyYW0ocHJvcHMuRGF0YS5tYXAoZCA9PiBkW3R5cGVdKSk7XHJcblxyXG4gICAgICAgIGxldCB5TWF4ID0gTWF0aC5tYXgoLi4uYmlucy5tYXAoYiA9PiBiLmxlbmd0aCkpO1xyXG5cclxuICAgICAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAuZG9tYWluKFtNYXRoLm1pbiguLi5iaW5zLm1hcChhID0+IGEueDApKSwgTWF0aC5tYXgoLi4uYmlucy5tYXAoYSA9PiBhLngxKSldKSAgICAgLy8gY2FuIHVzZSB0aGlzIGluc3RlYWQgb2YgMTAwMCB0byBoYXZlIHRoZSBtYXggb2YgZGF0YTogZDMubWF4KGRhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuICtkLnByaWNlIH0pXHJcbiAgICAgICAgICAgIC5yYW5nZShbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0XSk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgKyBcIilcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAoc3ZnV2lkdGggLyAyKSArIFwiLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNoYW5uZWwgT3V0cHV0XCIpXHJcblxyXG4gICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5yYW5nZShbc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pXHJcbiAgICAgICAgICAgIC5kb21haW4oWzAsIHlNYXhdKTsgICAvLyBkMy5oaXN0IGhhcyB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBZIGF4aXMgb2J2aW91c2x5XHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLDApXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcclxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBzdmdIZWlnaHQgLyAyICsgXCIsXCIgKyBtYXJnaW4ubGVmdCAvIDMgKyBcIilcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAgICAgLnRleHQoXCJDb3VudHNcIilcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcclxuICAgICAgICAgICAgLmRhdGEoYmlucylcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDEpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkKSA9PiBgdHJhbnNsYXRlKCR7eChkLngwKX0sJHt5KGQubGVuZ3RoKX0pYClcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4gKHgoZC54MSkgLSB4KGQueDApID4gMiA/IHgoZC54MSkgLSB4KGQueDApIDogMikgLSAxKVxyXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20pIC0geShkLmxlbmd0aCkpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCkgPT4gJ2RhcmtibHVlJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e3R5cGV9IGNoZWNrZWQ9e3R5cGUgPT0gJ01pbmltdW0nfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZSgnTWluaW11bScpIH0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5NaW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXt0eXBlID09ICdBdmVyYWdlJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldFR5cGUoJ0F2ZXJhZ2UnKX0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5Bdmc8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3R5cGUgPT0gJ01heGltdW0nfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZSgnTWF4aW11bScpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5NYXg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgUGFnZWRUYWJsZS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTgvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlJztcclxuaW1wb3J0IHsgUGVuY2lsLCBGbGFnIH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9ncGEtc3ltYm9scyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZWRUYWJsZShwcm9wczogeyBEYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdLCBTZWxlY3RlZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQsU2V0RmxhZzogKHJlY29yZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQgKSA9PiB2b2lkfSkge1xyXG4gICAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPGtleW9mIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PignVGltZXN0YW1wJyk7XHJcbiAgICBjb25zdCBbYXNjZW5kaW5nLCBzZXRBc2NlbmRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW3RhYmxlRGF0YSwgc2V0VGFibGVEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFttYXhQYWdlcywgc2V0TWF4UGFnZXNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPig1MCk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCB0YWJsZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDI3MDsgLy8gNTAgKyAxMDAgKyA3MCArIDUwXHJcbiAgICBjb25zdCBtYXhSb3dDb3VudCA9IE1hdGguZmxvb3IodGFibGVIZWlnaHQgLyA2NSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gWy4uLnByb3BzLkRhdGFdO1xyXG4gICAgICAgIGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYVtzb3J0RmllbGRdID4gYltzb3J0RmllbGRdKSByZXR1cm4gKGFzY2VuZGluZyA/IDEgOiAtMSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFbc29ydEZpZWxkXSA9PT0gYltzb3J0RmllbGRdKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gKGFzY2VuZGluZyA/IC0xIDogMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGFibGVEYXRhKGRhdGEuc2xpY2UocGFnZSAqIG1heFJvd0NvdW50LCAocGFnZSArIDEpICogbWF4Um93Q291bnQpKTtcclxuICAgICAgICBzZXRNYXhQYWdlcyhNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBtYXhSb3dDb3VudCkgLSAxKTtcclxuICAgIH0sIFtwcm9wcy5EYXRhLCBhc2NlbmRpbmcsIHNvcnRGaWVsZF0pO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRhYmxlRGF0YShwcm9wcy5EYXRhLnNsaWNlKHBhZ2UgKiBtYXhSb3dDb3VudCwgKHBhZ2UgKyAxKSAqIG1heFJvd0NvdW50KSk7XHJcbiAgICB9LCBbcGFnZV0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9wcy5EYXRhLmZpbmRJbmRleChkID0+IGQuVGltZXN0YW1wID09PSBwcm9wcy5TZWxlY3RlZD8uVGltZXN0YW1wKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3UGFnZSA9IE1hdGguZmxvb3IoaW5kZXggLyBtYXhSb3dDb3VudCk7XHJcbiAgICAgICAgICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLlNlbGVjdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGFibGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+IHRhYmxlQ2xhc3M9J3RhYmxlJ1xyXG4gICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVGltZXN0YW1wJywgbGFiZWw6ICdUaW1lc3RhbXAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdNaW5pbXVtJywgbGFiZWw6ICdNaW4nLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbS5NaW5pbXVtLnRvRml4ZWQoMikgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ0F2ZXJhZ2UnLCBsYWJlbDogJ0F2ZycsIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PiBpdGVtLkF2ZXJhZ2UudG9GaXhlZCgyKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWF4aW11bScsIGxhYmVsOiAnTWF4JywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW0uTWF4aW11bS50b0ZpeGVkKDIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdRdWFsaXR5RmxhZ3MnLCBsYWJlbDogJ0ZsYWdnZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gaXRlbS5RdWFsaXR5RmxhZ3MgPiAwID8gRmxhZyA6ICcnfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbnVsbCwgbGFiZWw6ICcnLCBjb250ZW50OiAoaXRlbSkgPT4gPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgb25DbGljaz17KCkgPT4geyBzZXRSZWNvcmQoaXRlbSk7IHNldFRvZ2dsZSh0cnVlKTsgfSB9PntQZW5jaWx9PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtyZWNvcmQgPT4gcmVjb3JkLlRpbWVzdGFtcCA9PT0gcHJvcHMuU2VsZWN0ZWQ/LlRpbWVzdGFtcCB9XHJcbiAgICAgICAgICAgICAgICBkYXRhPXt0YWJsZURhdGF9XHJcbiAgICAgICAgICAgICAgICBzb3J0RmllbGQ9e3NvcnRGaWVsZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhkYXRhKSA9PiB7IH19XHJcbiAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgIG9uU29ydD17KGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2wgPT09IHNvcnRGaWVsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKCFhc2NlbmRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNvcnRGaWVsZChkYXRhLmNvbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXNjZW5kaW5nKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B1bGwtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tbGluaycgdGl0bGU9J01vdmUgYmFjayAxMCBwYWdlcycgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocGFnZSA+PSAxMCA/IHBhZ2UgLSAxMCA6IDApKX0gZGlzYWJsZWQ9e3BhZ2UgPD0gMH0+eyc8PCd9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyB0aXRsZT0nTW92ZSBiYWNrIDEgcGFnZScgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocGFnZSA+PSAxID8gcGFnZSAtIDEgOiAwKSl9IGRpc2FibGVkPXtwYWdlIDw9IDB9PnsnPCd9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5QYWdlJm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwYWdlICsgMX0gdHlwZT0nbnVtYmVyJyBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UGFnZShwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSAtIDEpfSBzdHlsZT17e3dpZHRoOiA0MH19IC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5vZiZuYnNwO3sgbWF4UGFnZXMgKyAxfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIHRpdGxlPSdNb3ZlIGZvcndhcmQgMSBwYWdlJyBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwYWdlIDw9IG1heFBhZ2VzID8gcGFnZSArIDEgOiBtYXhQYWdlcykpfSBkaXNhYmxlZD17cGFnZSA+PSBtYXhQYWdlc30+eyc+J308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIHRpdGxlPSdNb3ZlIGZvcndhcmQgMTAgcGFnZXMnIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKHBhZ2UgPD0gbWF4UGFnZXMgLSAxMCA/IHBhZ2UgKyAxMCA6IG1heFBhZ2VzKSl9IGRpc2FibGVkPXtwYWdlID49IG1heFBhZ2VzfT57Jz4+J308L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiIHN0eWxlPXt7IGRpc3BsYXk6IHRvZ2dsZSA/ICdibG9jaycgOiAnbm9uZScsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40KScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5NYXJrIEFzIEZsYWdnZWQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtcImNsb3NlXCJ9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tsaXN0U3R5bGU6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGltZToge3JlY29yZD8uVGltZXN0YW1wfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NYXg6IHtyZWNvcmQ/Lk1heGltdW19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkF2Zzoge3JlY29yZD8uQXZlcmFnZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TWluOiB7cmVjb3JkPy5NaW5pbXVtfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5GbGFnOiA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3JlY29yZD8uUXVhbGl0eUZsYWdzID4gMH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlY29yZCh7Li4ucmVjb3JkLCBRdWFsaXR5RmxhZ3M6IGV2dC50YXJnZXQuY2hlY2tlZCA/IDEgOiAwfSkgfS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldEZsYWcocmVjb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoZmFsc2UpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFZpZXdEYXRhU2V0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8xNy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVcGRhdGVEYXRhU2V0RGF0YSwgU2VsZWN0RGF0YVNldHNTdGF0dXMsIEZldGNoRGF0YVNldHMsIFNlbGVjdFJlY29yZCwgU2V0UmVjb3JkQnlJRCwgR2V0RGF0YVNldERhdGFGcm9tSURCLCBVcGRhdGVEYXRhU2V0RGF0YUZsYWcgfSBmcm9tICcuLi9EYXRhU2V0c1NsaWNlJ1xyXG5pbXBvcnQgeyAgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUGFnZWRUYWJsZSBmcm9tICcuL1BhZ2VkVGFibGUnO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9DaGFydCc7XHJcbmltcG9ydCBIaXN0b2dyYW0gZnJvbSAnLi9IaXN0b2dyYW0nO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlcnMgfSBmcm9tICdAZ3BhLWdlbXN0b25lL2dwYS1zeW1ib2xzJztcclxuaW1wb3J0IHsgUGx1cyB9IGZyb20gJy4uLy4uLy4uL0NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3RGF0YVNldCgpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtczx7aWR9PigpO1xyXG4gICAgY29uc3QgZGF0YVNldCA9IHVzZVNlbGVjdG9yKFNlbGVjdFJlY29yZClcclxuICAgIGNvbnN0IHdzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHNTdGF0dXMpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pRGF0YVNldFJldHVybltdPihbXSk7XHJcbiAgICBjb25zdCBbZGF0YVNvdXJjZUlELCBzZXREYXRhU291cmNlSURdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtjaGFubmVsSUQsIHNldENoYW5uZWxJRF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkRGF0YSwgc2V0U2VsZWN0ZWREYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IFJlYWN0LnVzZVJlZHVjZXIoKHMsXykgPT4gcyArIDEsIDApO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtjcml0ZXJpYSwgc2V0Q3JpdGVyaWFdID0gUmVhY3QudXNlU3RhdGU8eyBGaWVsZDogYW55LCBDb25kaXRpb246IGFueSwgVmFsdWU6IG51bWJlciwgQW5kT3IgfVtdPihbeyBGaWVsZDogJ0F2ZXJhZ2UnLCBDb25kaXRpb246ICc+JywgVmFsdWU6IDAsIEFuZE9yOiAnTm9uZScgfV0pO1xyXG4gICAgY29uc3QgW3Nob3dGbGFnZ2VkLCBzZXRTaG93RmxhZ2dlZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQb2ludCwgc2V0U2VsZWN0ZWRQb2ludF0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludD4obnVsbCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRDcml0ZXJpYShbeyBGaWVsZDogJ0F2ZXJhZ2UnLCBDb25kaXRpb246ICc+JywgVmFsdWU6IDAsIEFuZE9yOiAnTm9uZScgfV0pO1xyXG4gICAgfSwgW3RvZ2dsZV0pO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh3c1N0YXR1cyA9PT0gJ3VuaXRpYXRlZCcgfHwgd3NTdGF0dXMgPT09ICdjaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTZXRzKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goU2V0UmVjb3JkQnlJRChwYXJzZUludChpZCkpKTtcclxuICAgIH0sIFtkaXNwYXRjaCwgd3NTdGF0dXNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGRhdGFTb3VyY2VJRCA9PT0gMClcclxuICAgICAgICAgICAgc2V0RGF0YVNvdXJjZUlEKGRhdGFbMF0/LkRhdGFTb3VyY2UuSUQgPz8gMCk7XHJcbiAgICAgICAgaWYoY2hhbm5lbElEID09PSAwKVxyXG4gICAgICAgICAgICBzZXRDaGFubmVsSUQoKGRhdGFbMF0/LkRhdGEgPz8gW3sgSUQ6IDAgfV0pWzBdLklEKTtcclxuXHJcbiAgICAgICAgY29uc3QgZCA9IChkYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gZGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXSkuZmluZChkZCA9PiBkZC5JRCA9PT0gY2hhbm5lbElEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBzZXRTZWxlY3RlZERhdGEoZCk7XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEdldERhdGFTZXREYXRhRnJvbUlEQihpZCkudGhlbihkID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YShkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtmbGFnXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkID0gKGRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSBkYXRhU291cmNlSUQpPy5EYXRhID8/IFtdKS5maW5kKGRkID0+IGRkLklEID09PSBjaGFubmVsSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIHNldFNlbGVjdGVkRGF0YShkKTtcclxuICAgIH0sIFtjaGFubmVsSURdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBGbGFnRGF0YShyZWNvcmQ6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50IHwgVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSkge1xyXG4gICAgICAgIFVwZGF0ZURhdGFTZXREYXRhKGRhdGFTZXQsIGRhdGFTb3VyY2VJRCwgY2hhbm5lbElELCByZWNvcmQpLnRoZW4oKCkgPT4gc2V0RmxhZygxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxyXG4gICAgICAgICAgICA8aDM+e2RhdGFTZXQuTmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGF0YSBTb3VyY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtkYXRhU291cmNlSUR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXREYXRhU291cmNlSUQocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcChkID0+IDxvcHRpb24ga2V5PXtkLkRhdGFTb3VyY2UuSUR9IHZhbHVlPXtkLkRhdGFTb3VyY2UuSUR9PntkLkRhdGFTb3VyY2UuTmFtZX08L29wdGlvbj4pIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNoYW5uZWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtjaGFubmVsSUR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDaGFubmVsSUQocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge09wdGlvbnMoZGF0YS5maW5kKGQgPT4gZC5EYXRhU291cmNlLklEID09PSBkYXRhU291cmNlSUQpKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEnIHN0eWxlPXt7d2lkdGg6IDc1fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogMzAgfX0gb25DbGljaz17KCkgPT4geyAvKnNldFJlY29yZChpdGVtKTsgOyovIHNldFRvZ2dsZSh0cnVlKX19PkZsYWcgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6IDUsIGxlZnQ6IDV9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiB2YWx1ZT17c2hvd0ZsYWdnZWQudG9TdHJpbmcoKX0gY2hlY2tlZD17c2hvd0ZsYWdnZWR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRTaG93RmxhZ2dlZChldnQudGFyZ2V0LmNoZWNrZWQpIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlNob3cgRmxhZ2dlZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXJ0IERhdGE9eyhzaG93RmxhZ2dlZCA/IHNlbGVjdGVkRGF0YSA6IHNlbGVjdGVkRGF0YS5maWx0ZXIoc2QgPT4gc2QuUXVhbGl0eUZsYWdzID09IDApKX0gU2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkUG9pbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpc3RvZ3JhbSBEYXRhPXsoc2hvd0ZsYWdnZWQgPyBzZWxlY3RlZERhdGEgOiBzZWxlY3RlZERhdGEuZmlsdGVyKHNkID0+IHNkLlF1YWxpdHlGbGFncyA9PSAwKSl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZWRUYWJsZSBEYXRhPXtzZWxlY3RlZERhdGF9IFNldEZsYWc9e0ZsYWdEYXRhfSBTZWxlY3RlZD17c2VsZWN0ZWRQb2ludCB9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiIHN0eWxlPXt7IGRpc3BsYXk6IHRvZ2dsZSA/ICdibG9jaycgOiAnbm9uZScsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC40KScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5NYXJrIEFzIEZsYWdnZWQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtcImNsb3NlXCJ9IG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNyaXRlcmlhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjcml0ZXJpYS5tYXAoKGMsIEluZGV4KSA9PiA8RmxhZ0NyaXRlcmlhIGtleT17SW5kZXh9IHsuLi5jfSBVcGRhdGU9eyhyZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0NyaXRzID0gWy4uLmNyaXRlcmlhXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q3JpdHNbSW5kZXhdID0gcmVjb3JkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDcml0ZXJpYShuZXdDcml0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gQWRkPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdDcml0cyA9IFsgLi4uY3JpdGVyaWFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDcml0c1tJbmRleF0uQW5kT3IgPSAnQW5kJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q3JpdHMucHVzaCh7IEZpZWxkOiAnQXZlcmFnZScsIENvbmRpdGlvbjogJz4nLCBWYWx1ZTogMCwgQW5kT3I6ICdOb25lJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3JpdGVyaWEobmV3Q3JpdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2ludHMgPSBzZWxlY3RlZERhdGEuZmlsdGVyKGYgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZSA9IGNyaXRlcmlhLm1hcChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjLkNvbmRpdGlvbiA9PSAnPCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgVmFsdWU6IGZbYy5GaWVsZF0gPCBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYy5Db25kaXRpb24gPT0gJzw9JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA8PSBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYy5Db25kaXRpb24gPT0gJz49JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA+PSBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYy5Db25kaXRpb24gPT0gJz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IFZhbHVlOiBmW2MuRmllbGRdID4gYy5WYWx1ZSwgQW5kT3I6IGMuQW5kT3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBWYWx1ZTogZltjLkZpZWxkXSA9PSBjLlZhbHVlLCBBbmRPcjogYy5BbmRPciB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmUucmVkdWNlKChhLCBiLCBpLCBzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHJldHVybiBiLlZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc291cmNlW2ktMV0uQW5kT3IgPT0gJ09yJykgcmV0dXJuIGEgfHwgYi5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIGEgJiYgYi5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHAgPT4gcC5RdWFsaXR5RmxhZ3MgPSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGbGFnRGF0YShwb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Qcm9jZXNzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBPcHRpb25zID0gKGRhdGFTb3VyY2U6IFRyZW5EQVAuaURhdGFTZXRSZXR1cm4pID0+IHtcclxuICAgIGlmIChkYXRhU291cmNlID09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBlbHNlIGlmIChkYXRhU291cmNlLkRhdGEgPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmIChkYXRhU291cmNlLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1RyZW5EQVBEQicpIHtcclxuICAgICAgICBkYXRhU291cmNlLkRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID4gYi5NZXRlciArICcgLSAnICsgYi5OYW1lKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS5NZXRlciArICcgLSAnICsgYS5OYW1lID09IGIuTWV0ZXIgKyAnIC0gJyArIGIuTmFtZSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuRGF0YS5tYXAoY2hhbm5lbCA9PiA8VHJlbkRBUERCQ2hhbm5lbCBrZXk9e2NoYW5uZWwuSUR9IGNoYW5uZWw9e2NoYW5uZWx9IC8+KTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gZGF0YVNvdXJjZS5EYXRhLm1hcChjaGFubmVsID0+IDxPdGhlckNoYW5uZWwga2V5PXtjaGFubmVsLklEfSBjaGFubmVsPXtjaGFubmVsfSAvPik7XHJcbn1cclxuXHJcbmNvbnN0IFRyZW5EQVBEQkNoYW5uZWwgPSAocHJvcHM6IHsgY2hhbm5lbDogVHJlbkRBUC5pWERBUmV0dXJuRGF0YSB9KSA9PiB7XHJcbiAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17cHJvcHMuY2hhbm5lbC5JRH0+e3Byb3BzLmNoYW5uZWwuTWV0ZXIgKyAnIC0gJyArIHByb3BzLmNoYW5uZWwuTmFtZX08L29wdGlvbj5cclxufVxyXG5cclxuY29uc3QgT3RoZXJDaGFubmVsID0gKHByb3BzOiB7IGNoYW5uZWw6IFRyZW5EQVAuaVhEQVJldHVybkRhdGEgfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e3Byb3BzLmNoYW5uZWwuSUR9Pntwcm9wcy5jaGFubmVsLk5hbWV9PC9vcHRpb24+XHJcbn1cclxuXHJcbmNvbnN0IEZsYWdDcml0ZXJpYSA9IChwcm9wczoge0ZpZWxkLCBDb25kaXRpb24sIFZhbHVlLCBBbmRPciwgVXBkYXRlOiAocmVjb3JkKSA9PiB2b2lkLCBBZGQ6ICgpID0+IHZvaWR9KSA9PiB7XHJcbiAgICBjb25zdCBbZmllbGQsIHNldEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlPCdNYXhpbXVtJyB8ICdNaW5pbXVtJyB8ICdBdmVyYWdlJz4ocHJvcHMuRmllbGQpO1xyXG4gICAgY29uc3QgW2NvbmRpdGlvbiwgc2V0Q29uZGl0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPCc8JyB8ICc8PScgfCAnPT0nIHwgJz49JyB8ICc+Jz4ocHJvcHMuQ29uZGl0aW9uKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihwcm9wcy5WYWx1ZSk7XHJcbiAgICBjb25zdCBbYW5kT3IsIHNldEFuZE9yXSA9IFJlYWN0LnVzZVN0YXRlPCdBbmQnIHwgJ09yJyB8ICdOb25lJz4ocHJvcHMuQW5kT3IpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuVXBkYXRlKHsgRmllbGQ6IGZpZWxkLCBDb25kaXRpb246IGNvbmRpdGlvbiwgVmFsdWU6IHZhbHVlLCBBbmRPcjogYW5kT3IgfSk7XHJcbiAgICB9LCBbZmllbGQsIGNvbmRpdGlvbiwgdmFsdWUsIGFuZE9yXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRBbmRPcihwcm9wcy5BbmRPcik7XHJcbiAgICB9LCBbcHJvcHMuQW5kT3JdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEZpZWxkKHByb3BzLkZpZWxkKTtcclxuICAgIH0sIFtwcm9wcy5GaWVsZF0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q29uZGl0aW9uKHByb3BzLkNvbmRpdGlvbik7XHJcbiAgICB9LCBbcHJvcHMuQ29uZGl0aW9uXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShwcm9wcy5WYWx1ZSk7XHJcbiAgICB9LCBbcHJvcHMuVmFsdWVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyB2YWx1ZT17ZmllbGR9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRGaWVsZChldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTWF4aW11bSc+TWF4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0F2ZXJhZ2UnPkF2Zzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdNaW5pbXVtJz5NaW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2NvbmRpdGlvbn0gb25DaGFuZ2U9eyhldnQpID0+IHNldENvbmRpdGlvbihldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17JzwnfT57JzwnfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPD0nfT57Jzw9J308L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Jz09J30+eyc9PSd9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9eyc+PSd9PnsnPj0nfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsnPid9PnsnPid9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPjxpbnB1dCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdHlwZT0nbnVtYmVyJyB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRWYWx1ZShwYXJzZUZsb2F0KGV2dC50YXJnZXQudmFsdWUpKX0gLz48L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPntcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5BbmRPciA9PSAnTm9uZScgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saW5rJyBvbkNsaWNrPXsoKSA9PiBwcm9wcy5BZGQoKSB9PntQbHVzfTwvYnV0dG9uPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e2FuZE9yfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0QW5kT3IoZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBbmQnPkFuZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nT3InPk9yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
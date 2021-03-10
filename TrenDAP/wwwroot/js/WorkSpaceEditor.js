(self["webpackChunk"] = self["webpackChunk"] || []).push([["WorkSpaceEditor"],{

/***/ "./TypeScript/Features/Widgets/Histogram.tsx":
/*!***************************************************!*\
  !*** ./TypeScript/Features/Widgets/Histogram.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HistogramJSX)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _Widget_Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Widget/Widget */ "./TypeScript/Features/Widgets/Widget/Widget.tsx");
/* harmony import */ var _Widget_XDA_AdditionalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Widget/XDA/AdditionalInfo */ "./TypeScript/Features/Widgets/Widget/XDA/AdditionalInfo.tsx");
/* harmony import */ var _Widget_OpenHistorian_AdditionalInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Widget/OpenHistorian/AdditionalInfo */ "./TypeScript/Features/Widgets/Widget/OpenHistorian/AdditionalInfo.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Constants */ "./TypeScript/Constants.ts");
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
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
    var ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState(false), 2), toggle = _c[0], setToggle = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState(new _Implementations__WEBPACK_IMPORTED_MODULE_8__.Histogram(props)), 2), record = _d[0], setRecord = _d[1];
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    }, [toggle, props.JSON]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
        Initialize(record);
    }, [record]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_8__.Histogram(__assign(__assign({}, record), { Data: props.Data })));
    }, [props.Data]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_8__.Histogram(__assign(__assign({}, record), { Height: props.Height })));
    }, [props.Height]);
    function Initialize(settings) {
        var _a, _b;
        var profile = settings.JSON.Series.map(function (series) { return series.Profile; }).reduce(function (prev, curr) { return prev || curr; }, false);
        var margin = { bottom: 50, left: 50, top: 40, right: (profile ? 70 : 20) };
        var svgHeight = record.Height - margin.top - margin.bottom;
        var extent = d3__WEBPACK_IMPORTED_MODULE_0__.extent([].concat.apply([], __spread(settings.JSON.Series.map(function (series) { var _a, _b, _c, _d; return (_d = (_c = (_b = (_a = settings.Data.find(function (d) { return d.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (d) { return d.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : [])).map(function (d) { return d[series.Field]; }); }))));
        //// set the parameters for the histogram
        var histograms = (_b = (_a = settings.JSON) === null || _a === void 0 ? void 0 : _a.Series, (_b !== null && _b !== void 0 ? _b : [])).map(function (series) {
            var _a, _b, _c, _d;
            var dataSource = (_b = (_a = settings.Data.find(function (d) { return d.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
            var datum = (_d = (_c = dataSource.find(function (d) { return d.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Data.map(function (d) { return d[series.Field]; }), (_d !== null && _d !== void 0 ? _d : []));
            var histogram = d3__WEBPACK_IMPORTED_MODULE_0__.histogram()
                .value(function (d) { return d; }) // I need to give the vector of value
                .domain(extent) // then the domain of the graphic
                .thresholds(settings.JSON.BinCount); // then the numbers of bins
            // And apply this function to data to get the bins
            return histogram(datum);
        });
        var yMax = Math.max.apply(Math, __spread([].concat.apply([], __spread(histograms)).map(function (b) { return b.length; })));
        d3__WEBPACK_IMPORTED_MODULE_0__.select(ref.current).selectAll('svg').remove();
        var svg = d3__WEBPACK_IMPORTED_MODULE_0__.select(ref.current)
            .append('svg')
            .attr('width', settings.Width)
            .attr('height', settings.Height);
        var x = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
            .domain([settings.JSON.Min, settings.JSON.Max]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([0, settings.Width - margin.left - margin.right]);
        var xAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + (settings.Height - margin.bottom) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__.axisBottom(x));
        svg.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (settings.Width / 2) + "," + (settings.Height - margin.bottom / 3) + ")")
            .text(record.JSON.Units);
        var y = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
            .range([settings.Height - margin.top - margin.bottom, 0])
            .domain([0, yMax]); // d3.hist has to be called before the Y axis obviously
        var yAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__.axisLeft(y));
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
                var histogram = d3__WEBPACK_IMPORTED_MODULE_0__.histogram()
                    .value(function (d) { return d; }) // I need to give the vector of value
                    .domain(d3__WEBPACK_IMPORTED_MODULE_0__.extent(datum)) // then the domain of the graphic
                    .thresholds(settings.JSON.BinCount)(datum); // then the numbers of bins
                return { Color: series.ProfileColor, Profile: histogram.map((function (sum) { return function (value) { return sum += value.length; }; })(0)).map(function (prof, i) { return ({ Bin: histogram[i].x0, Value: prof }); }) };
            });
            //const profiles = histograms.map(hist => hist.map((sum => value => sum += value.length)(0)).map((prof, i) => ({ Bin: hist[i].x0, Value: prof })));
            var pyMax = Math.max.apply(Math, __spread(profiles.map(function (pr) { return pr.Profile; }).reduce(function (prev, curr) { return prev.concat(curr); }, []).map(function (p) { return p.Value; })));
            var py_1 = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
                .range([settings.Height - margin.top - margin.bottom, 0])
                .domain([0, pyMax]); // d3.hist has to be called before the Y axis obviously
            var pyAxis = svg.append("g")
                .attr("transform", "translate(" + (settings.Width - margin.right) + "," + margin.top + ")")
                .call(d3__WEBPACK_IMPORTED_MODULE_0__.axisRight(py_1));
            svg.append("text")
                .attr("transform", "rotate(-90) translate(-" + settings.Height / 2 + "," + (settings.Width - margin.right / 3) + ")")
                .style("text-anchor", "middle")
                .text("Profile");
            //const filteredData = profile.find(ds => ds.ID === series.ID)?.Data ?? []).filter(ds => moment(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[field] >= axis.Min && ds[field] <= axis.Max)
            var lineFunc_1 = d3__WEBPACK_IMPORTED_MODULE_0__.line().x(function (dd) { return x(dd.Bin); }).y(function (dd) { return py_1(dd.Value); });
            svg.append("path")
                .data(profiles)
                .attr("fill", "none")
                .attr("stroke-width", 1.5)
                .attr("stroke", function (d) { return d.Color; })
                .attr("d", function (d) { return lineFunc_1(d.Profile); })
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card", style: { width: props.Width, height: props.Height } },
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__.default["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__.default["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { ref: ref })),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_4__.default, __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-4" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_8__.Histogram(r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "number", className: "form-control", value: (_b = (_a = record) === null || _a === void 0 ? void 0 : _a.Width, (_b !== null && _b !== void 0 ? _b : 0)), onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_8__.Histogram(__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_8__.Histogram(__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width"))),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: 'row' },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: 'col' },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Field: 'Units', Record: record.JSON, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_8__.Histogram(__assign(__assign({}, record), { JSON: r }))); }, Valid: function (field) { return true; } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: 'col' },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Field: 'BinCount', Label: 'Bins', Record: record.JSON, Type: 'number', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_8__.Histogram(__assign(__assign({}, record), { JSON: r }))); }, Valid: function (field) { return true; } }))),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Field: 'Min', Label: 'Min', Record: record.JSON, Type: 'number', Setter: function (r) { return setRecord(__assign(__assign({}, record), { JSON: r })); }, Valid: function (field) { return true; } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Field: 'Max', Record: record.JSON, Type: 'number', Setter: function (r) { return setRecord(__assign(__assign({}, record), { JSON: r })); }, Valid: function (field) { return true; } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-2", style: { position: 'relative' } },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () { return setRecord(record.CalculateAxisRange()); } }, "Use Data")))),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("h6", null, "Series"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { id: "accordion", style: { overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 } }, record.Data.map(function (d, i) {
                    var _a, _b, _c, _d;
                    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { key: i },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card-body" },
                                react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_4__.SeriesSelect, { Widget: record, DataSourceID: d.DataSource.ID, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_8__.Histogram(record)); } }),
                                react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", { className: "list-group" },
                                    (d.DataSource.Type === 'TrenDAPDB' ? (_b = (_a = record.JSON) === null || _a === void 0 ? void 0 : _a.Series, (_b !== null && _b !== void 0 ? _b : [])).map(function (series, ind) {
                                        var datum = d.Data.find(function (dd) { return dd.ID.toString() === series.ID; });
                                        if (datum === undefined)
                                            return null;
                                        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", { key: series.ID, className: "list-group-item" },
                                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "row" },
                                                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                                                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, datum.Name),
                                                    react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Widget_XDA_AdditionalInfo__WEBPACK_IMPORTED_MODULE_5__.default, { Data: datum, Index: i })),
                                                react__WEBPACK_IMPORTED_MODULE_1__.createElement(SeriesPicker, { Index: ind, Series: series, Widget: record, Callback: function (widget) { return setRecord(widget); } }))));
                                    }) : null),
                                    (d.DataSource.Type === 'OpenHistorian' ? (_d = (_c = record.JSON) === null || _c === void 0 ? void 0 : _c.Series, (_d !== null && _d !== void 0 ? _d : [])).map(function (series, ind) {
                                        var datum = d.Data.find(function (dd) { return dd.ID.toString() === series.ID; });
                                        if (datum === undefined)
                                            return null;
                                        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", { key: series.ID, className: "list-group-item" },
                                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "row" },
                                                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                                                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, datum.Device + ' - ' + datum.Description),
                                                    react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Widget_OpenHistorian_AdditionalInfo__WEBPACK_IMPORTED_MODULE_6__.default, { Data: datum })),
                                                react__WEBPACK_IMPORTED_MODULE_1__.createElement(SeriesPicker, { Index: ind, Series: series, Widget: record, Callback: function (widget) { return setRecord(widget); } }))));
                                    }) : null)))));
                }))))));
}
var SeriesPicker = function (props) {
    var _a;
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState(props.Series.Color), 2), color = _b[0], setColor = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState(props.Series.Field), 2), type = _c[0], setType = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState(props.Series.Profile), 2), profile = _d[0], setProfile = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState(props.Series.ProfileColor), 2), pColor = _e[0], setPColor = _e[1];
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "Color", color)); }, [color]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "Field", type)); }, [type]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "Profile", profile)); }, [profile]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () { return props.Callback(props.Widget.UpdateSeries(props.Index, "ProfileColor", pColor)); }, [pColor]);
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Field"),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", { className: "form-control", value: type, onChange: function (evt) { return setType(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", { value: "Average" }, "Avg"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", { value: "Minimum" }, "Min"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", { value: "Maximum" }, "Max"))),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Color"),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "color", className: "form-control", value: color, onChange: function (evt) { return setColor(evt.target.value); } })),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-1" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Profile"),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "checkbox", className: "form-control", style: { width: 20 }, value: (_a = profile) === null || _a === void 0 ? void 0 : _a.toString(), checked: profile, onChange: function (evt) { return setProfile(evt.target.checked); } })),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Profile Color"),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "color", className: "form-control", value: pColor, onChange: function (evt) { return setPColor(evt.target.value); } })),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-1" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn btn-link", onClick: function () { return props.Callback(props.Widget.RemoveSeries(props.Index)); } }, _Constants__WEBPACK_IMPORTED_MODULE_7__.CrossMark))));
};


/***/ }),

/***/ "./TypeScript/Features/Widgets/Profile.tsx":
/*!*************************************************!*\
  !*** ./TypeScript/Features/Widgets/Profile.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
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
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Profile");
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Stats.tsx":
/*!***********************************************!*\
  !*** ./TypeScript/Features/Widgets/Stats.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StatsJSX)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
/* harmony import */ var _Widget_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Widget/Widget */ "./TypeScript/Features/Widgets/Widget/Widget.tsx");
/* harmony import */ var _Widget_XDA_AdditionalInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Widget/XDA/AdditionalInfo */ "./TypeScript/Features/Widgets/Widget/XDA/AdditionalInfo.tsx");
/* harmony import */ var _Widget_OpenHistorian_AdditionalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Widget/OpenHistorian/AdditionalInfo */ "./TypeScript/Features/Widgets/Widget/OpenHistorian/AdditionalInfo.tsx");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
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
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), toggle = _d[0], setToggle = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(new _Implementations__WEBPACK_IMPORTED_MODULE_2__.Stats(props)), 2), record = _e[0], setRecord = _e[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__.Stats(__assign(__assign({}, record), { Data: props.Data })));
    }, [props.Data]);
    var stats = record.Stats();
    var dataSource = (_b = (_a = record.Data.find(function (dd) { var _a, _b; return _b = dd.DataSource.ID === ((_a = record.JSON.Series) === null || _a === void 0 ? void 0 : _a.DataSourceID), (_b !== null && _b !== void 0 ? _b : 0); })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
    var datum = dataSource.find(function (dd) { var _a, _b; return _b = dd.ID === ((_a = record.JSON.Series) === null || _a === void 0 ? void 0 : _a.ID), (_b !== null && _b !== void 0 ? _b : 0); });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card", style: { width: props.Width, height: props.Height, maxHeight: props.Height, overflowY: 'auto' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__.default["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__.default["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: 'table' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Category"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Statistic"))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, Object.keys(stats).map(function (key) {
                    if (key !== 'Percentile')
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: key },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, key),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, stats[key]));
                    else
                        return Object.keys(stats.Percentile).map(function (pkey) {
                            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: key + pkey },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                                    pkey,
                                    "th Percentile"),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, stats.Percentile[pkey]));
                        });
                })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_3__.default, __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_6__.Input, { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__.Stats(r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "number", className: "form-control", value: (_c = record) === null || _c === void 0 ? void 0 : _c.Width, onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__.Stats(__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__.Stats(__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width")))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Series"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "accordion", style: { overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 } }, record.Data.map(function (d, i) {
                    var _a, _b;
                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: i },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_3__.SeriesSelect, { Widget: record, DataSourceID: d.DataSource.ID, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__.Stats(record)); } }),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "list-group" },
                                    d.DataSource.Type === 'TrenDAPDB' && record.JSON.Series != undefined ?
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: record.JSON.Series.ID, className: "list-group-item" },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-3" },
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, (_a = datum) === null || _a === void 0 ? void 0 : _a.Name),
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widget_XDA_AdditionalInfo__WEBPACK_IMPORTED_MODULE_4__.default, { Index: i, Data: datum })),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-label" }, "Field"),
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: "form-control", value: record.JSON.Series.Field, onChange: function (evt) { return setRecord(record.SetSeriesField(evt.target.value)); } },
                                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "Average" }, "Avg"),
                                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "Minimum" }, "Min"),
                                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "Maximum" }, "Max"))),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-label" }, "Precision"),
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "form-control", type: "number", value: record.JSON.Precision, onChange: function (evt) { return setRecord(record.SetPrecsision(parseInt(evt.target.value))); } }))))
                                        : null,
                                    d.DataSource.Type === 'OpenHistorian' && record.JSON.Series != undefined ?
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: record.JSON.Series.ID, className: "list-group-item" },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-3" },
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, (_b = datum) === null || _b === void 0 ? void 0 : _b.Description),
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widget_OpenHistorian_AdditionalInfo__WEBPACK_IMPORTED_MODULE_5__.default, { Data: datum })),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-label" }, "Field"),
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: "form-control", value: record.JSON.Series.Field, onChange: function (evt) { return setRecord(record.SetSeriesField(evt.target.value)); } },
                                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "Average" }, "Avg"),
                                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "Minimum" }, "Min"),
                                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "Maximum" }, "Max"))),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-label" }, "Precision"),
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "form-control", type: "number", value: record.JSON.Precision, onChange: function (evt) { return setRecord(record.SetPrecsision(parseInt(evt.target.value))); } }))))
                                        : null))));
                }))))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Table.tsx":
/*!***********************************************!*\
  !*** ./TypeScript/Features/Widgets/Table.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableJSX)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table */ "../node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
/* harmony import */ var _Widget_Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Widget/Widget */ "./TypeScript/Features/Widgets/Widget/Widget.tsx");
/* harmony import */ var _Widget_XDA_AdditionalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Widget/XDA/AdditionalInfo */ "./TypeScript/Features/Widgets/Widget/XDA/AdditionalInfo.tsx");
/* harmony import */ var _Widget_OpenHistorian_AdditionalInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Widget/OpenHistorian/AdditionalInfo */ "./TypeScript/Features/Widgets/Widget/OpenHistorian/AdditionalInfo.tsx");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
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
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), toggle = _b[0], setToggle = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(new _Implementations__WEBPACK_IMPORTED_MODULE_3__.Table(props)), 2), record = _c[0], setRecord = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Timestamp'), 2), sortField = _d[0], setSortField = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(true), 2), ascending = _e[0], setAscending = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), data = _f[0], setData = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({}), 2), info = _g[0], setInfo = _g[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_3__.Table(__assign(__assign({}, record), { Data: props.Data })));
    }, [props.Data]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var _a, _b;
        var dataSource = (_b = (_a = record.Data.find(function (dd) { var _a, _b; return _b = dd.DataSource.ID === ((_a = record.JSON.Series) === null || _a === void 0 ? void 0 : _a.DataSourceID), (_b !== null && _b !== void 0 ? _b : 0); })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
        var datum = dataSource.find(function (dd) { var _a, _b; return _b = dd.ID === ((_a = record.JSON.Series) === null || _a === void 0 ? void 0 : _a.ID), (_b !== null && _b !== void 0 ? _b : 0); });
        if (datum == undefined)
            setInfo({});
        else
            setInfo(datum);
    }, [record]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var _a, _b;
        var ordered = lodash__WEBPACK_IMPORTED_MODULE_8___default().orderBy((_b = (_a = info) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])), [sortField], [ascending ? 'asc' : 'desc']);
        setData(ordered);
    }, [ascending, sortField, info]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card", style: { width: props.Width, height: props.Height, maxHeight: props.Height, overflowY: 'auto' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__.default["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__.default["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement((_gpa_gemstone_react_table__WEBPACK_IMPORTED_MODULE_2___default()), { tableClass: 'table', cols: [
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
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_4__.default, __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_7__.Input, { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_3__.Table(r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "number", className: "form-control", value: (_a = record) === null || _a === void 0 ? void 0 : _a.Width, onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_3__.Table(__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_3__.Table(__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width")))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Series"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "accordion", style: { overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 } }, record.Data.map(function (d, i) {
                    var _a, _b, _c, _d;
                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: i },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_4__.SeriesSelect, { Widget: record, DataSourceID: d.DataSource.ID, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_3__.Table(record)); } }),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "list-group" },
                                    d.DataSource.Type === 'TrenDAPDB' && record.JSON.Series != undefined ?
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: record.JSON.Series.ID, className: "list-group-item" },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-3" },
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, (_b = (_a = info) === null || _a === void 0 ? void 0 : _a.Name, (_b !== null && _b !== void 0 ? _b : ''))),
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widget_XDA_AdditionalInfo__WEBPACK_IMPORTED_MODULE_5__.default, { Index: i, Data: info })),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-label" }, "Precision"),
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "form-control", type: "number", value: record.JSON.Precision, onChange: function (evt) { return setRecord(record.SetPrecsision(parseInt(evt.target.value))); } }))))
                                        : null,
                                    d.DataSource.Type === 'OpenHistorian' && record.JSON.Series != undefined ?
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: record.JSON.Series.ID, className: "list-group-item" },
                                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-3" },
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, (_d = (_c = info) === null || _c === void 0 ? void 0 : _c.Description, (_d !== null && _d !== void 0 ? _d : ''))),
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widget_OpenHistorian_AdditionalInfo__WEBPACK_IMPORTED_MODULE_6__.default, { Data: info })),
                                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-label" }, "Precision"),
                                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: "form-control", type: "number", value: record.JSON.Precision, onChange: function (evt) { return setRecord(record.SetPrecsision(parseInt(evt.target.value))); } }))))
                                        : null))));
                }))))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Text.tsx":
/*!**********************************************!*\
  !*** ./TypeScript/Features/Widgets/Text.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextJSX)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
/* harmony import */ var _Widget_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Widget/Widget */ "./TypeScript/Features/Widgets/Widget/Widget.tsx");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
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
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), toggle = _b[0], setToggle = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(new _Implementations__WEBPACK_IMPORTED_MODULE_2__.Text(props)), 2), record = _c[0], setRecord = _c[1];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card", style: { width: props.Width, height: props.Height } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__.default["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_1__.default["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { style: { position: 'relative', top: 30 } }, props.JSON.Text)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_3__.default, __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__.Input, { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__.Text(r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "number", className: "form-control", value: (_a = record) === null || _a === void 0 ? void 0 : _a.Width, onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__.Text(__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__.Text(__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width")))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_4__.TextArea, { Record: record.JSON, Field: "Text", Rows: 10, Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_2__.Text(__assign(__assign({}, record), { JSON: __assign({}, r) }))); }, Valid: function (field) { return true; } })))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Trend/Axis.tsx":
/*!****************************************************!*\
  !*** ./TypeScript/Features/Widgets/Trend/Axis.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Axis)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
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
    var firstRender = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        firstRender.current = false;
    }, []);
    //const [bins, setBins] = React.useState<number>(props.Series?.BinCount ?? 10);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Axis.Units), 2), units = _a[0], setUnits = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Axis.Position), 2), position = _b[0], setPosition = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Axis.Min), 2), min = _c[0], setMin = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Axis.Max), 2), max = _d[0], setMax = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Units", units);
            props.Callback();
        }
    }, [units]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Position", position);
            props.Callback();
        }
    }, [position]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Max", max);
            props.Callback();
        }
    }, [max]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (!firstRender.current) {
            props.Widget.UpdateAxis(props.Index, "Min", min);
            props.Callback();
        }
    }, [min]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'row' },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Position"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: "form-control", value: position, onChange: function (evt) { return setPosition(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "left" }, "Left"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "right" }, "Right"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Field: 'Units', Record: props.Axis, Type: 'text', Setter: function (r) { return setUnits(r.Units); }, Valid: function (field) { return true; } })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Field: 'Min', Label: 'Min', Record: props.Axis, Type: 'number', Setter: function (r) { return setMin(r.Min); }, Valid: function (field) { return true; } })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-2" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.Input, { Field: 'Max', Record: props.Axis, Type: 'number', Setter: function (r) { return setMax(r.Max); }, Valid: function (field) { return true; } })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-2", style: { position: 'relative' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () {
                    props.Widget.CalculateAxisRange('y', props.Index);
                    props.Callback();
                } }, "Use Data")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-1" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-link", style: { top: 30 }, onClick: function () {
                    props.Widget.RemoveAxis(props.Index);
                    props.Callback();
                } }, _Constants__WEBPACK_IMPORTED_MODULE_2__.CrossMark))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Trend/SeriesPicker.tsx":
/*!************************************************************!*\
  !*** ./TypeScript/Features/Widgets/Trend/SeriesPicker.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SeriesPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _Widget_XDA_AdditionalInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Widget/XDA/AdditionalInfo */ "./TypeScript/Features/Widgets/Widget/XDA/AdditionalInfo.tsx");
/* harmony import */ var _Widget_OpenHistorian_AdditionalInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Widget/OpenHistorian/AdditionalInfo */ "./TypeScript/Features/Widgets/Widget/OpenHistorian/AdditionalInfo.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Constants */ "./TypeScript/Constants.ts");
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datetime/css/react-datetime.css */ "../node_modules/react-datetime/css/react-datetime.css");
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
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Series.Axis), 2), axis = _a[0], setAxis = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Series.Color), 2), color = _b[0], setColor = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Series.Field), 2), type = _c[0], setType = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Series.ShowEvents), 2), showEvents = _d[0], setShowEvents = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        props.Widget.UpdateSeries(props.Index, "Color", color);
        props.Callback();
    }, [color]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        props.Widget.UpdateSeries(props.Index, "Field", type);
        props.Callback();
    }, [type]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        props.Widget.UpdateSeries(props.Index, "ShowEvents", showEvents);
        props.Callback();
    }, [showEvents]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        props.Widget.UpdateSeries(props.Index, "Axis", axis);
        props.Widget.CalculateAxisRange('y');
        props.Widget.CalculateAxisRange('x');
        props.Callback();
    }, [axis]);
    function ShowAdditionInfo() {
        if (props.Type === 'TrenDAPDB')
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widget_XDA_AdditionalInfo__WEBPACK_IMPORTED_MODULE_2__.default, { Index: props.Index, Data: props.Data });
        else if (props.Type === 'OpenHistorian')
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widget_OpenHistorian_AdditionalInfo__WEBPACK_IMPORTED_MODULE_3__.default, { Data: props.Data });
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'row' },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-3" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, props.Series.Label),
                ShowAdditionInfo()),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-label" }, "Field"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: "form-control", value: type, onChange: function (evt) { return setType(evt.target.value); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "Average" }, "Avg"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "Minimum" }, "Min"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "Maximum" }, "Max"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-label" }, "YAxis"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: "form-control", value: axis, onChange: function (evt) { return setAxis(parseInt(evt.target.value)); } }, props.Widget.JSON.YAxis.map(function (axis, index) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: index, key: index }, axis.Units); }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "form-label" }, "Color"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "color", className: "form-control", value: color, onChange: function (evt) { return setColor(evt.target.value); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-1" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-link", onClick: function () {
                        props.Widget.RemoveSeries(props.Index);
                        props.Callback();
                    } }, _Constants__WEBPACK_IMPORTED_MODULE_4__.CrossMark))),
        (props.Type === 'TrenDAPDB' && props.Data.Events.length > 0 ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'row' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col' },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_1__.CheckBox, { Record: props.Series, Field: 'ShowEvents', Label: 'Show Events', Setter: function (r) { return setShowEvents(!showEvents); } })))
            : null)));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Trend/Trend.tsx":
/*!*****************************************************!*\
  !*** ./TypeScript/Features/Widgets/Trend/Trend.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrendJSX)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _Widget_Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Widget/Widget */ "./TypeScript/Features/Widgets/Widget/Widget.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Constants */ "./TypeScript/Constants.ts");
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Implementations */ "./TypeScript/Implementations.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datetime */ "../node_modules/react-datetime/dist/react-datetime.cjs.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-datetime/css/react-datetime.css */ "../node_modules/react-datetime/css/react-datetime.css");
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
    var ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState(false), 2), toggle = _h[0], setToggle = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(props)), 2), record = _j[0], setRecord = _j[1];
    var hover = react__WEBPACK_IMPORTED_MODULE_1__.useRef(-10);
    var svgs = react__WEBPACK_IMPORTED_MODULE_1__.useRef([]);
    var margin = react__WEBPACK_IMPORTED_MODULE_1__.useRef({ bottom: 50, left: 50, top: 40, right: 50 });
    var _k = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState('Pan'), 2), chartAction = _k[0], setChartAction = _k[1];
    var chartActionRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef('Pan');
    var setHover = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (value) {
        HandleHoverUpdate(value);
    }, []);
    try {
        react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
            setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(props));
        }, [props]);
        react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
            chartActionRef.current = chartAction;
        }, [chartAction]);
        react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
            Initialize(record);
        }, [record]);
        react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
            setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(__assign(__assign({}, record), { Height: props.Height })));
        }, [props.Height]);
        react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
            setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(__assign(__assign({}, record), { Data: props.Data })));
        }, [props.Data]);
        react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
            return function () { d3__WEBPACK_IMPORTED_MODULE_0__.select(ref.current).selectAll('svg').remove(); };
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
            d3__WEBPACK_IMPORTED_MODULE_0__.select(ref.current).selectAll('svg').remove();
            for (var i = 0; i < svgCount; i++) {
                var svg = d3__WEBPACK_IMPORTED_MODULE_0__.select(ref.current)
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
        svg.selectAll('g.yaxis').remove();
        AddYAxisLeft(axis, svg, y);
        var filteredData = (_d = (_c = (_b = (_a = record.Data.find(function (ds) { return ds.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (ds) { return ds.ID === series.ID; })) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : [])).filter(function (ds) { return moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() >= settings.JSON.Min && moment__WEBPACK_IMPORTED_MODULE_7___default()(ds.Timestamp).toDate().getTime() <= settings.JSON.Max && ds[field] >= axis.Min && ds[field] <= axis.Max; });
        var lineFunc = d3__WEBPACK_IMPORTED_MODULE_0__.line().x(function (dd) { return x(moment__WEBPACK_IMPORTED_MODULE_7___default()(dd.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ')); }).y(function (dd) { return y(dd[series.Field]); });
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
        svg.selectAll('g.yaxis').remove();
        AddYAxisLeft(axis, svg, y);
        var lineFunc = d3__WEBPACK_IMPORTED_MODULE_0__.line().x(function (dd) { return x(moment__WEBPACK_IMPORTED_MODULE_7___default()(dd[0], 'YYYY-MM-DDTHH:mm:ss.fffZ')); }).y(function (dd) { return y(dd[1]); });
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
            var lineFunc = d3__WEBPACK_IMPORTED_MODULE_0__.line().x(function (dd) { return x(moment__WEBPACK_IMPORTED_MODULE_7___default()(dd.Timestamp, 'YYYY-MM-DDTHH:mm:ss.fffZ')); }).y(function (dd) { return yScale(dd[d.Field]); });
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
        var data = (_d = (_c = (_b = (_a = record.Data.find(function (ds) { return ds.DataSource.ID === series.DataSourceID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).find(function (ds) { return ds.ID.toString() === series.ID; })) === null || _c === void 0 ? void 0 : _c.Events, (_d !== null && _d !== void 0 ? _d : []));
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
            .call(d3__WEBPACK_IMPORTED_MODULE_0__.axisBottom(x));
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
        var yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", "translate(" + (margin.current.left - index * 50) + ",0)")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__.axisLeft(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat(function (value) { return d3__WEBPACK_IMPORTED_MODULE_0__.format("~s")(value); }));
        var text = svg.append("g")
            .classed('yaxis', true)
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
        var yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", "translate(" + (svgWidth - margin.current.right + index * 50) + ",0)")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__.axisRight(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat(function (value) { return d3__WEBPACK_IMPORTED_MODULE_0__.format("~s")(value); }));
        var text = svg.append("g")
            .classed('yaxis', true)
            .append("text")
            .text(axis.Units);
        text.attr("transform", "translate(" + (svgWidth - margin.current.right + index * 50) + "," + (svgHeight - margin.current.bottom / 2) + ")").style("text-anchor", "start");
    }
    function GetXScale(settings) {
        return d3__WEBPACK_IMPORTED_MODULE_0__.scaleUtc()
            .domain([settings.JSON.Min, settings.JSON.Max]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([margin.current.left, settings.Width - margin.current.right]);
    }
    function GetYScale(svgHeight, axis) {
        return d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
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
            var datum = d3__WEBPACK_IMPORTED_MODULE_0__.format('.2f')(dist[0].Value);
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
            setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(record.UpdateJSON('Max', scale.invert(scale.range()[1] + start - e.clientX).getTime())));
        });
        svg.on('mouseup.pan', function () { return svg.on('mousemove.pan', null); });
    }
    function OnXZoom(evt, svg, scale) {
        var start = evt.offsetX;
        var brush = d3__WEBPACK_IMPORTED_MODULE_0__.brushX()
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
            setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(record.UpdateJSON('Max', scale.invert(max).getTime())));
            br.remove();
            svg.on('mousemove.brush', null);
            svg.on('mouseup.brush', null);
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card", style: { width: props.Width, height: props.Height } },
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__.default["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__.default["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { ref: ref, style: { userSelect: 'none' } },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { style: { position: 'absolute', left: 10, zIndex: 1010 } },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: 'btn btn-light', onClick: HandleReset }, "Reset"),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "form-check-inline" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", { className: "form-check-label" },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "radio", className: "form-check-input", checked: chartAction == 'Pan', onChange: function (evt) { return setChartAction('Pan'); } }),
                            "Pan")),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "form-check-inline" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", { className: "form-check-label" },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "radio", className: "form-check-input", checked: chartAction == 'ZoomX', onChange: function (evt) { return setChartAction('ZoomX'); } }),
                            "Zoom")),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "form-check-inline" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", { className: "form-check-label" },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "radio", className: "form-check-input", checked: chartAction == 'Click', onChange: function (evt) { return setChartAction('Click'); } }),
                            "Click"))))),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_4__.default, __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "number", className: "form-control", value: (_a = record) === null || _a === void 0 ? void 0 : _a.Width, onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width"))),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: 'row' },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: 'col-1' },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Split"),
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement((bootstrap_switch_button_react__WEBPACK_IMPORTED_MODULE_10___default()), { checked: (_d = (_c = (_b = record) === null || _b === void 0 ? void 0 : _b.JSON) === null || _c === void 0 ? void 0 : _c.Split, (_d !== null && _d !== void 0 ? _d : false)), onChange: function (checked) { return setRecord(record.UpdateJSON('Split', checked)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: 'col-2' },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Select, { Label: 'Split On', Field: 'SplitType', Record: (_e = record) === null || _e === void 0 ? void 0 : _e.JSON, Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(__assign(__assign({}, record), { JSON: r }))); }, Options: [{ Value: 'Axis', Label: 'Axis' }, { Value: 'Series', Label: 'Series' }] })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: 'col-2' },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Legend"),
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null),
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement((bootstrap_switch_button_react__WEBPACK_IMPORTED_MODULE_10___default()), { checked: (_g = (_f = record.JSON) === null || _f === void 0 ? void 0 : _f.Legend, (_g !== null && _g !== void 0 ? _g : false)), onChange: function (checked) { return setRecord(record.UpdateJSON('Legend', checked)); } }))),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("h6", null, "X Axis"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Min"),
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_datetime__WEBPACK_IMPORTED_MODULE_8___default()), { value: moment__WEBPACK_IMPORTED_MODULE_7___default()(record.JSON.Min), onChange: function (value) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(__assign(__assign({}, record), { JSON: __assign(__assign({}, record.JSON), { Min: moment__WEBPACK_IMPORTED_MODULE_7___default()(value).toDate().getTime() }) }))); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Min"),
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_datetime__WEBPACK_IMPORTED_MODULE_8___default()), { value: moment__WEBPACK_IMPORTED_MODULE_7___default()(record.JSON.Max), onChange: function (value) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(__assign(__assign({}, record), { JSON: __assign(__assign({}, record.JSON), { Max: moment__WEBPACK_IMPORTED_MODULE_7___default()(value).toDate().getTime() }) }))); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-2", style: { position: 'relative' } },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () {
                                record.CalculateAxisRange('x', 0);
                                setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(record));
                            } }, "Use Data"))),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("h6", null, "Y Axis"),
                " ",
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { style: { position: 'relative', float: 'right', top: -30 }, className: 'btn btn-link', onClick: function () {
                        record.AddAxis();
                        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(record));
                    } }, _Constants__WEBPACK_IMPORTED_MODULE_5__.Plus),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", { className: "list-group list-group-flush", style: { maxHeight: window.innerHeight - 625, overflowY: 'auto', overflowX: 'hidden', width: '100%' } }, record.JSON.YAxis.map(function (axis, index) { return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", { key: index, className: 'list-group-item' },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Axis__WEBPACK_IMPORTED_MODULE_11__.default, { Axis: axis, Index: index, Widget: record, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(record)); } }))); }))),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("h6", null, "Series"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { id: "accordion", style: { overflowY: 'auto', maxHeight: window.innerHeight - 250 } }, record.Data.map(function (d, i) {
                    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { key: i },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card-body" },
                                (d.DataSource.Type === 'TrenDAPDB' ?
                                    react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: 'btn btn-primary', onClick: function () { return setRecord(record.QuickAddVoltageRMS(d.DataSource.ID)); } }, "Quick Add VRMS"),
                                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: 'btn btn-primary', onClick: function () { return setRecord(record.QuickAddCurrentRMS(d.DataSource.ID)); } }, "Quick Add IRMS"),
                                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: 'btn btn-primary', onClick: function () { return setRecord(record.RemoveAll(d.DataSource.ID)); } }, "Remove All")) : null),
                                react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_4__.SeriesSelect, { Widget: record, DataSourceID: d.DataSource.ID, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(record)); } }),
                                react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", { className: "list-group" }, record.JSON.Series.map(function (series, ind) {
                                    var datum = d.Data.find(function (dd) { return dd.ID === series.ID; });
                                    if (datum === undefined)
                                        return null;
                                    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", { key: series.ID, className: "list-group-item" },
                                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SeriesPicker__WEBPACK_IMPORTED_MODULE_12__.default, { Type: d.DataSource.Type, Index: ind, Series: series, Data: datum, Widget: record, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_6__.Trend(record)); } })));
                                })))));
                }))))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Widget/OpenHistorian/AdditionalInfo.tsx":
/*!*****************************************************************************!*\
  !*** ./TypeScript/Features/Widgets/Widget/OpenHistorian/AdditionalInfo.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdditionalInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  AdditionalInfo.tsx - Gbtc
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
//  03/10/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************


function AdditionalInfo(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var id = lodash__WEBPACK_IMPORTED_MODULE_1___default().uniqueId('dropdown-');
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "form-control dropdown-toggle", type: "button", id: id, "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Info"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-menu", "aria-labelledby": id },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Device: ", (_a = props.Data) === null || _a === void 0 ? void 0 :
                _a.Device),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Signal Reference: ", (_b = props.Data) === null || _b === void 0 ? void 0 :
                _b.SignalReference),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Signal Type: ", (_c = props.Data) === null || _c === void 0 ? void 0 :
                _c.SignalType),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Engineering Units: ", (_d = props.Data) === null || _d === void 0 ? void 0 :
                _d.EngineeringUnits),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Phase: ", (_e = props.Data) === null || _e === void 0 ? void 0 :
                _e.Phase),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Phasor Type: ", (_f = props.Data) === null || _f === void 0 ? void 0 :
                _f.PhasorType),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Description: ", (_g = props.Data) === null || _g === void 0 ? void 0 :
                _g.Description))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Widget/OpenHistorian/SeriesSelect.tsx":
/*!***************************************************************************!*\
  !*** ./TypeScript/Features/Widgets/Widget/OpenHistorian/SeriesSelect.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SeriesSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdditionalInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdditionalInfo */ "./TypeScript/Features/Widgets/Widget/OpenHistorian/AdditionalInfo.tsx");
//******************************************************************************************************
//  SeriesSelect.tsx - Gbtc
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
//  03/10/2021 - Billy Ernest
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


function SeriesSelect(props) {
    var _a, _b, _c, _d, _e, _f;
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined), 2), dataSource = _g[0], setDataSource = _g[1];
    var _h = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({ ID: '0' }), 2), selected = _h[0], setSelected = _h[1];
    var _j = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(''), 2), delimeter = _j[0], setDelimeter = _j[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var dataSource = props.Widget.Data.find(function (d) { return d.DataSource.ID === props.DataSourceID; });
        if (dataSource != undefined) {
            setDataSource(dataSource);
        }
    }, [props.Widget.Data]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: "form-control", value: delimeter, onChange: function (evt) { return setDelimeter(evt.target.value); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: '' }),
            (_b = (_a = dataSource) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).map(function (d) { return d.Device; }).filter(function (x, i, a) { return a.indexOf(x) === i; }).map(function (d, i) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: i, value: d }, d); })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: "form-control", value: (_d = (_c = selected) === null || _c === void 0 ? void 0 : _c.ID, (_d !== null && _d !== void 0 ? _d : '0')), onChange: function (evt) { return setSelected(dataSource.Data.find(function (datum) { return datum.ID === evt.target.value; })); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: '0' }),
            (_f = (_e = dataSource) === null || _e === void 0 ? void 0 : _e.Data, (_f !== null && _f !== void 0 ? _f : [])).filter(function (d) { return d.Device.indexOf(delimeter) >= 0; }).map(function (datum, index) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: index, value: datum.ID }, datum.Description); })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group-append" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AdditionalInfo__WEBPACK_IMPORTED_MODULE_1__.default, { Data: selected }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-outline-secondary", type: "button", onClick: function () {
                    var label = selected.Description;
                    if (props.Widget.Type === 'Histogram')
                        props.Widget.AddSeries((selected).ID, props.DataSourceID, label);
                    else if (props.Widget.Type === 'Trend')
                        props.Widget.AddSeries((selected).ID, props.DataSourceID, label);
                    else if (props.Widget.Type === 'Stats')
                        props.Widget.SetSeries((selected).ID, props.DataSourceID);
                    else if (props.Widget.Type === 'Table')
                        props.Widget.SetSeries((selected).ID, props.DataSourceID);
                    else if (props.Widget.Type === 'XvsY')
                        props.Widget.SetSeries(props.Axis, (selected).ID, props.DataSourceID);
                    props.Callback();
                } }, "Select"))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Widget/Widget.tsx":
/*!*******************************************************!*\
  !*** ./TypeScript/Features/Widgets/Widget/Widget.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widgit),
/* harmony export */   "SeriesSelect": () => (/* binding */ SeriesSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _XDA_SeriesSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./XDA/SeriesSelect */ "./TypeScript/Features/Widgets/Widget/XDA/SeriesSelect.tsx");
/* harmony import */ var _OpenHistorian_SeriesSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OpenHistorian/SeriesSelect */ "./TypeScript/Features/Widgets/Widget/OpenHistorian/SeriesSelect.tsx");
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




function Widgit(props) {
    return react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal", role: "dialog", style: { display: props.Toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-dialog mw-100 w-75", role: "document" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-content mx-auto" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-header" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", { className: "modal-title" },
                        props.Label,
                        " Settings"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "close", onClick: function () { return props.SetToggle(false); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "aria-hidden": "true" }, "\u00D7"))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" }, props.children)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-footer" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () {
                            props.Update(props.Record);
                            props.SetToggle(false);
                        } }, "Save changes"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-danger", onClick: function () {
                            props.Remove();
                            props.SetToggle(false);
                        } }, "Delete Widgit"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-secondary", onClick: function () { return props.SetToggle(false); } }, "Close"))))), document.getElementById("window"));
}
function SeriesSelect(props) {
    var _a, _b;
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined), 2), dataSource = _c[0], setDataSource = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var dataSource = props.Widget.Data.find(function (d) { return d.DataSource.ID === props.DataSourceID; });
        if (dataSource != undefined) {
            setDataSource(dataSource);
            //setSelected((dataSource?.Data ?? [undefined])[0]);
        }
    }, [props.Widget.Data]);
    if (((_a = dataSource) === null || _a === void 0 ? void 0 : _a.DataSource.Type) === 'TrenDAPDB')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_XDA_SeriesSelect__WEBPACK_IMPORTED_MODULE_2__.default, __assign({}, props));
    else if (((_b = dataSource) === null || _b === void 0 ? void 0 : _b.DataSource.Type) === 'OpenHistorian')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OpenHistorian_SeriesSelect__WEBPACK_IMPORTED_MODULE_3__.default, __assign({}, props));
    else
        return null;
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Widget/XDA/AdditionalInfo.tsx":
/*!*******************************************************************!*\
  !*** ./TypeScript/Features/Widgets/Widget/XDA/AdditionalInfo.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdditionalInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
//******************************************************************************************************
//  AdditionalInfo.tsx - Gbtc
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
//  03/10/2021 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

function AdditionalInfo(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "form-control dropdown-toggle", type: "button", id: "dropdownMenuButton" + props.Index, "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Addition Info"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-menu", "aria-labelledby": "dropdownMenuButton" + props.Index },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Meter: ", (_a = props.Data) === null || _a === void 0 ? void 0 :
                _a.Meter),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Asset: ", (_b = props.Data) === null || _b === void 0 ? void 0 :
                _b.Asset),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Characteristic: ", (_c = props.Data) === null || _c === void 0 ? void 0 :
                _c.Characteristic),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Type: ", (_d = props.Data) === null || _d === void 0 ? void 0 :
                _d.Type),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Station: ", (_e = props.Data) === null || _e === void 0 ? void 0 :
                _e.Station),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Phase: ", (_f = props.Data) === null || _f === void 0 ? void 0 :
                _f.Phase),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                "Harmonic: ", (_g = props.Data) === null || _g === void 0 ? void 0 :
                _g.Harmonic))));
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/Widget/XDA/SeriesSelect.tsx":
/*!*****************************************************************!*\
  !*** ./TypeScript/Features/Widgets/Widget/XDA/SeriesSelect.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SeriesSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
//******************************************************************************************************
//  SeriesSelect.tsx - Gbtc
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
//  03/10/2021 - Billy Ernest
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

function SeriesSelect(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var _p = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined), 2), dataSource = _p[0], setDataSource = _p[1];
    var _q = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({ ID: 0 }), 2), selected = _q[0], setSelected = _q[1];
    var _r = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('Meter'), 2), type = _r[0], setType = _r[1];
    var _s = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(''), 2), delimeter = _s[0], setDelimeter = _s[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var dataSource = props.Widget.Data.find(function (d) { return d.DataSource.ID === props.DataSourceID; });
        if (dataSource != undefined) {
            setDataSource(dataSource);
        }
    }, [props.Widget.Data]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: "form-control", value: type, onChange: function (evt) { return setType(evt.target.value); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Meter' }, "Meter"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'Asset' }, "Asset")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: "form-control", value: delimeter, onChange: function (evt) { return setDelimeter(evt.target.value); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: '' }),
            (_b = (_a = dataSource) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).map(function (d) { return d[type]; }).filter(function (x, i, a) { return a.indexOf(x) === i; }).map(function (d, i) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: i, value: d }, d); })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: "form-control", value: (_d = (_c = selected) === null || _c === void 0 ? void 0 : _c.ID, (_d !== null && _d !== void 0 ? _d : '0')), onChange: function (evt) { return setSelected(dataSource.Data.find(function (datum) { return datum.ID === parseInt(evt.target.value); })); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: '0' }),
            (_f = (_e = dataSource) === null || _e === void 0 ? void 0 : _e.Data, (_f !== null && _f !== void 0 ? _f : [])).filter(function (datum) { return datum[type].indexOf(delimeter) >= 0; }).map(function (datum, index) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: index, value: datum.ID }, datum.Name); })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group-append" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-outline-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Info"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-menu dropdown-menu-right", "aria-labelledby": "dropdownMenuButton" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                    "Meter: ", (_g = selected) === null || _g === void 0 ? void 0 :
                    _g.Meter),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                    "Asset: ", (_h = selected) === null || _h === void 0 ? void 0 :
                    _h.Asset),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                    "Characteristic: ", (_j = selected) === null || _j === void 0 ? void 0 :
                    _j.Characteristic),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                    "Type: ", (_k = selected) === null || _k === void 0 ? void 0 :
                    _k.Type),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                    "Station: ", (_l = selected) === null || _l === void 0 ? void 0 :
                    _l.Station),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                    "Phase: ", (_m = selected) === null || _m === void 0 ? void 0 :
                    _m.Phase),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-item" },
                    "Harmonic: ", (_o = selected) === null || _o === void 0 ? void 0 :
                    _o.Harmonic)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-outline-secondary", type: "button", onClick: function () {
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
}


/***/ }),

/***/ "./TypeScript/Features/Widgets/XvsY.tsx":
/*!**********************************************!*\
  !*** ./TypeScript/Features/Widgets/XvsY.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ XvsYJSX)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gpa-gemstone/react-forms */ "../node_modules/@gpa-gemstone/react-forms/lib/index.js");
/* harmony import */ var _Widget_Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Widget/Widget */ "./TypeScript/Features/Widgets/Widget/Widget.tsx");
/* harmony import */ var _Widget_XDA_AdditionalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Widget/XDA/AdditionalInfo */ "./TypeScript/Features/Widgets/Widget/XDA/AdditionalInfo.tsx");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Constants */ "./TypeScript/Constants.ts");
/* harmony import */ var _Implementations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Implementations */ "./TypeScript/Implementations.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-datetime */ "../node_modules/react-datetime/dist/react-datetime.cjs.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_datetime_css_react_datetime_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-datetime/css/react-datetime.css */ "../node_modules/react-datetime/css/react-datetime.css");
/* harmony import */ var simple_statistics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! simple-statistics */ "../node_modules/simple-statistics/dist/simple-statistics.mjs");
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
    var ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState(false), 2), toggle = _b[0], setToggle = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(props)), 2), record = _c[0], setRecord = _c[1];
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
        //record.current = new Trend(props);
    }, [toggle, props.JSON]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
        Initialize(record);
    }, [record]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(__assign(__assign({}, record), { Height: props.Height })));
    }, [props.Height]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
        setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(__assign(__assign({}, record), { Data: props.Data })));
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
        d3__WEBPACK_IMPORTED_MODULE_0__.select(ref.current).selectAll('svg').remove();
        var x = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
            .domain([settings.JSON.X.Min, settings.JSON.X.Max]) // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([0, settings.Width - margin.left - margin.right]);
        var y = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
            .range([svgHeight - margin.top - margin.bottom, 0])
            .domain([settings.JSON.Y.Min, settings.JSON.Y.Max]); // d3.hist has to be called before the Y axis obviously
        var svg = d3__WEBPACK_IMPORTED_MODULE_0__.select(ref.current)
            .append('svg')
            .attr('width', settings.Width)
            .attr('height', svgHeight);
        var xAxis = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + (svgHeight - margin.bottom) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__.axisBottom(x));
        svg.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + (settings.Width / 2) + "," + (svgHeight - margin.bottom / 3) + ")")
            .text(settings.JSON.X.Units);
        var yAxis = svg.append("g")
            .attr("transform", "translate(" + (margin.left) + "," + margin.top + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__.axisLeft(y));
        svg.append("text")
            .attr("transform", "rotate(-90) translate(-" + svgHeight / 2 + "," + (margin.left / 3) + ")")
            .style("text-anchor", "middle")
            .text(settings.JSON.Y.Units);
        var xData = (_b = (_a = GetDatum('x')) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : []));
        var yData = (_d = (_c = GetDatum('y')) === null || _c === void 0 ? void 0 : _c.Data, (_d !== null && _d !== void 0 ? _d : []));
        var combinedData = Zip(xData, record.JSON.X.Series.Field, yData, record.JSON.Y.Series.Field, 'Timestamp');
        //const combinedData = xData.map((xd, i) => ({ Timestamp: xd.Timestamp, X: xd[record.JSON.XSeries.Field], Y: yData[i][record.JSON.YSeries.Field] }))
        var filteredData = combinedData.filter(function (d) { return moment__WEBPACK_IMPORTED_MODULE_8___default()(d.ZipField).toDate().getTime() >= record.JSON.TimeMin && moment__WEBPACK_IMPORTED_MODULE_8___default()(d.ZipField).toDate().getTime() <= record.JSON.TimeMax; });
        svg.selectAll("dot")
            .data(filteredData)
            .enter().append("circle")
            .attr("r", 3.5)
            .attr("cx", function (d) { return x(d.Array1); })
            .attr("cy", function (d) { return y(d.Array2); })
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        if (record.JSON.RegressionLine) {
            var data = filteredData.map(function (d) { return [d.Array1, d.Array2]; });
            var model = (0,simple_statistics__WEBPACK_IMPORTED_MODULE_11__.linearRegression)(data);
            var lrLine_1 = (0,simple_statistics__WEBPACK_IMPORTED_MODULE_11__.linearRegressionLine)(model);
            var r2 = (0,simple_statistics__WEBPACK_IMPORTED_MODULE_11__.rSquared)(data, lrLine_1);
            var lineFunc_1 = d3__WEBPACK_IMPORTED_MODULE_0__.line().x(function (d) { return x(d[0]); }).y(function (d) { return y(lrLine_1(d[0])); });
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
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card", style: { width: props.Width, height: props.Height } },
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card-body", style: { padding: 0 } },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__.default["widgit-label"] },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null,
                    props.Label,
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_2__.default["widgit-controls"], title: 'Widget Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { ref: ref })),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_4__.default, __assign({}, props, { Record: record, Toggle: toggle, SetToggle: function (bool) { return setToggle(bool); } }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Field: 'Label', Record: record, Type: 'text', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(r)); }, Valid: function (field) { return true; } }),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Width"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "input-group" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "number", className: "form-control", value: (_a = record) === null || _a === void 0 ? void 0 : _a.Width, onChange: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(__assign(__assign({}, record), { Width: parseInt(evt.target.value) }))); } }),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "input-group-prepend" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(__assign(__assign({}, record), { Width: window.innerWidth - 200 }))); } }, "Full Width"))),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Min"),
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_datetime__WEBPACK_IMPORTED_MODULE_9___default()), { value: moment__WEBPACK_IMPORTED_MODULE_8___default()(record.JSON.TimeMin), onChange: function (value) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(record.UpdateJSON('TimeMin', moment__WEBPACK_IMPORTED_MODULE_8___default()(value).toDate().getTime()))); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Min"),
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_datetime__WEBPACK_IMPORTED_MODULE_9___default()), { value: moment__WEBPACK_IMPORTED_MODULE_8___default()(record.JSON.TimeMax), onChange: function (value) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(record.UpdateJSON('TimeMax', moment__WEBPACK_IMPORTED_MODULE_8___default()(value).toDate().getTime()))); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-2", style: { position: 'relative' } },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () { return setRecord(record.CalculateRange('time')); } }, "Use Data"))),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.CheckBox, { Record: record.JSON, Field: 'RegressionLine', Label: 'Add Regression', Setter: function (r) { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(record.UpdateJSON('RegressionLine', r.RegressionLine))); } }))),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("h6", null, "X Axis"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Record: record.JSON.X, Field: 'Units', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('x', 'Units', r.Units)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Record: record.JSON.X, Field: 'Min', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('x', 'Min', r.Min)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Record: record.JSON.X, Field: 'Max', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('x', 'Max', r.Max)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-2", style: { position: 'relative' } },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () { return setRecord(record.CalculateRange('x')); } }, "Use Data"))),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("h6", null, "Y Axis"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Record: record.JSON.Y, Field: 'Units', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('y', 'Units', r.Units)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Record: record.JSON.Y, Field: 'Min', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('y', 'Min', r.Min)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(_gpa_gemstone_react_forms__WEBPACK_IMPORTED_MODULE_3__.Input, { Record: record.JSON.Y, Field: 'Max', Valid: function () { return true; }, Setter: function (r) { return setRecord(record.SetAxis('y', 'Max', r.Max)); } })),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-2", style: { position: 'relative' } },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn btn-outline-secondary", style: { position: 'absolute', bottom: 16 }, type: "button", onClick: function () { return setRecord(record.CalculateRange('y')); } }, "Use Data")))),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("h6", null, "Series"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("hr", null),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { id: "accordion", style: { overflowY: 'auto', maxHeight: window.innerHeight - 300, height: window.innerHeight / 2 } }, record.Data.map(function (d, i) {
                    var _a, _b, _c, _d;
                    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { key: i },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card-header" },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", { className: "card-link", "data-toggle": "collapse", href: "#collapse" + i }, d.DataSource.Name)),
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { id: "collapse" + i, className: "collapse show", "data-parent": "#accordion" },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "card-body" },
                                react__WEBPACK_IMPORTED_MODULE_1__.createElement("h6", null, "X Series"),
                                react__WEBPACK_IMPORTED_MODULE_1__.createElement("hr", null),
                                react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_4__.SeriesSelect, { Widget: record, DataSourceID: d.DataSource.ID, Axis: 'x', Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(record)); } }),
                                (record.JSON.X.Series != undefined ?
                                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "row" },
                                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-3" },
                                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, (_b = (_a = GetDatum('x')) === null || _a === void 0 ? void 0 : _a.Name, (_b !== null && _b !== void 0 ? _b : ''))),
                                            react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Widget_XDA_AdditionalInfo__WEBPACK_IMPORTED_MODULE_5__.default, { Index: i, Data: GetDatum('x') })),
                                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(SeriesPicker, { Axis: 'x', Series: record.JSON.X.Series, Widget: record, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(record)); } })) : null),
                                react__WEBPACK_IMPORTED_MODULE_1__.createElement("h6", null, "Y Series"),
                                react__WEBPACK_IMPORTED_MODULE_1__.createElement("hr", null),
                                react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Widget_Widget__WEBPACK_IMPORTED_MODULE_4__.SeriesSelect, { Widget: record, DataSourceID: d.DataSource.ID, Axis: 'y', Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(record)); } }),
                                (record.JSON.Y.Series != undefined ?
                                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "row" },
                                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-3" },
                                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, (_d = (_c = GetDatum('y')) === null || _c === void 0 ? void 0 : _c.Name, (_d !== null && _d !== void 0 ? _d : ''))),
                                            react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Widget_XDA_AdditionalInfo__WEBPACK_IMPORTED_MODULE_5__.default, { Index: i, Data: GetDatum('y') })),
                                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(SeriesPicker, { Axis: 'y', Series: record.JSON.Y.Series, Widget: record, Callback: function () { return setRecord(new _Implementations__WEBPACK_IMPORTED_MODULE_7__.XvsY(record)); } })) : null))));
                }))))));
}
var SeriesPicker = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1__.useState(props.Series.Field), 2), type = _a[0], setType = _a[1];
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
        props.Widget.UpdateSeries(props.Axis, "Field", type);
        props.Callback();
    }, [type]);
    return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", { className: "form-label" }, "Field"),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", { className: "form-control", value: type, onChange: function (evt) { return setType(evt.target.value); } },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", { value: "Average" }, "Avg"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", { value: "Minimum" }, "Min"),
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", { value: "Maximum" }, "Max"))),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "col-1" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", { className: "btn btn-link", onClick: function () {
                    props.Widget.RemoveSeries(props.Axis);
                    props.Callback();
                } }, _Constants__WEBPACK_IMPORTED_MODULE_6__.CrossMark))));
};


/***/ }),

/***/ "./TypeScript/Features/WorkSpaces/WorkSpaceEditor.tsx":
/*!************************************************************!*\
  !*** ./TypeScript/Features/WorkSpaces/WorkSpaceEditor.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gpa-gemstone/gpa-symbols */ "../node_modules/@gpa-gemstone/gpa-symbols/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
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
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), data = _c[0], setData = _c[1];
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)().id;
    var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(id), 2), tab = _d[0], setTab = _d[1];
    var usersWorkSpaces = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) { return (0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__.SelectWorkSpacesForUser)(state, userName); });
    var publicWorkSpaces = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) { return (0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__.SelectWorkSpacesAllPublicNotUser)(state, userName); });
    var dataSets = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_13__.SelectDataSets);
    var wsStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__.SelectWorkSpacesStatus);
    var dsStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_13__.SelectDataSetsStatus);
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({ Rows: [] }), 2), workSpaceJSON = _e[0], setWorkSpaceJSON = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(__spread(usersWorkSpaces, publicWorkSpaces).find(function (ws) { return ws.ID == tab; })), 2), workSpace = _f[0], setWorkSpace = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({}), 2), dataSet = _g[0], setDataSet = _g[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (id != tab) {
            history.push("/WorkSpaceEditor/" + tab);
            var ws = __spread(usersWorkSpaces, publicWorkSpaces).find(function (ws) { return ws.ID == tab; });
            setWorkSpace(ws);
            var ds = dataSets.find(function (ds) { return ds.ID === workSpace.DataSetID; });
            if (ds != undefined)
                setDataSet(ds);
        }
    }, [tab]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var _a;
        if (workSpace === undefined)
            return;
        //setDataSet(dataSets.find(ds => ds.ID === workSpace.DataSetID));
        if (!((_a = workSpace) === null || _a === void 0 ? void 0 : _a.Open))
            dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__.OpenCloseWorkSpace)({ workSpace: workSpace, open: true }));
        var json = JSON.parse(workSpace.JSONString);
        setWorkSpaceJSON(json);
        (0,_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_13__.GetDataSetDataFromIDB)(workSpace.DataSetID).then(function (d) {
            setData(d);
        });
    }, [workSpace, dataSets]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (wsStatus === 'idle') {
            var ws = __spread(usersWorkSpaces, publicWorkSpaces).find(function (ws) { return ws.ID == tab; });
            setWorkSpace(ws);
            var ds = dataSets.find(function (ds) { return ds.ID === workSpace.DataSetID; });
            if (ds != undefined)
                setDataSet(ds);
        }
        else if (wsStatus == 'unitiated' || wsStatus == 'changed')
            dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__.FetchWorkSpaces)());
        return function () {
        };
    }, [dispatch, wsStatus]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (dsStatus === 'idle') {
            if (workSpace != undefined) {
                var ds = dataSets.find(function (ds) { return ds.ID === workSpace.DataSetID; });
                if (ds != undefined)
                    setDataSet(ds);
            }
        }
        else if (dsStatus == 'unitiated' || dsStatus === 'changed')
            dispatch((0,_DataSets_DataSetsSlice__WEBPACK_IMPORTED_MODULE_13__.FetchDataSets)());
        return function () {
        };
    }, [dispatch, dsStatus]);
    function HandleAddObject(type) {
        if (type === 'Row')
            setWorkSpaceJSON(__assign(__assign({}, workSpaceJSON), { Rows: __spread(workSpaceJSON.Rows, [{ Height: 500, Widgets: [] }]) }));
        else
            setWorkSpaceJSON(__assign(__assign({}, workSpaceJSON), { Rows: __spread(workSpaceJSON.Rows, [{
                        Height: window.innerHeight - NavMargin,
                        Widgets: [(0,_Implementations__WEBPACK_IMPORTED_MODULE_15__.CreateWidget)(type, window.innerHeight - NavMargin, window.innerWidth - NavWidth)]
                    }]) }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4__.default.navbarbuttons },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { padding: '6px 12px', position: 'relative' } },
                "Data Set: ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: homePath + "EditDataSet/" + ((_a = dataSet) === null || _a === void 0 ? void 0 : _a.ID) }, (_b = dataSet) === null || _b === void 0 ? void 0 : _b.Name),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataSets_DataSetData__WEBPACK_IMPORTED_MODULE_14__.default, __assign({}, dataSet))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "btn-group" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", title: 'Add Object', "data-toggle": 'dropdown', "aria-haspopup": 'true', "aria-expanded": 'false' },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-plus" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-menu" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function (e) { return HandleAddObject('Row'); } }, "Row"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-divider" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Histogram'); } }, "Histogram"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Stats'); } }, "Stats"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Table'); } }, "Table"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Text'); } }, "Text"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Trend'); } }, "Trend"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('XvsY'); } }, "X vs Y"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "btn-group" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", title: 'Export Current Data Set', "data-toggle": 'dropdown', "aria-haspopup": 'true', "aria-expanded": 'false' },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-download" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-menu" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "dropdown-item", href: "#" }, "PDF"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "dropdown-item", href: "#" }, "CSV"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", title: 'Save current workspace...', onClick: function (e) {
                    e.preventDefault();
                    dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__.UpdateWorkSpace)(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(workSpaceJSON) })));
                } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-save" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", title: 'Workspace Settings' },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-cog" }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: "nav nav-tabs" }, __spread(usersWorkSpaces, publicWorkSpaces).filter(function (ws) { return ws.Open; }).map(function (ws) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: ws.ID, className: "nav-item " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4__.default.workspacetab },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "nav-link" + (tab == ws.ID ? ' active' : ''), href: '#', onClick: function (evt) { return setTab(ws.ID); } }, ws.Name),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { onClick: function () { return dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__.OpenCloseWorkSpace)({ workSpace: ws, open: false })); } }, "X"));
        })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4__.default["tab-content"] }, workSpaceJSON.Rows.map(function (row, index) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row, { key: index, WorkSpace: workSpace, Data: data, Widgets: row.Widgets, Height: row.Height, Update: function (record) {
                    var json = __assign({}, workSpaceJSON);
                    json.Rows[index].Height = record.Height;
                    json.Rows[index].Widgets = record.Widgets;
                    json.Rows[index].WorkSpace = undefined;
                    json.Rows[index].Data = undefined;
                    dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__.UpdateWorkSpace)(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(json) })));
                }, RemoveRow: function () {
                    var json = __assign({}, workSpaceJSON);
                    json.Rows.splice(index, 1);
                    dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__.UpdateWorkSpace)(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(json) })));
                }, MoveUp: function () {
                    if (index <= 0)
                        return;
                    var newIndex = index - 1;
                    var json = __assign({}, workSpaceJSON);
                    var a = json.Rows[newIndex];
                    var b = json.Rows[index];
                    json.Rows[newIndex] = b;
                    json.Rows[index] = a;
                    dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__.UpdateWorkSpace)(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(json) })));
                }, MoveDown: function () {
                    var json = __assign({}, workSpaceJSON);
                    if (index >= json.Rows.length)
                        return;
                    var newIndex = index + 1;
                    var a = json.Rows[newIndex];
                    var b = json.Rows[index];
                    json.Rows[newIndex] = b;
                    json.Rows[index] = a;
                    dispatch((0,_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_5__.UpdateWorkSpace)(__assign(__assign({}, workSpace), { JSONString: JSON.stringify(json) })));
                } });
        }))));
};
var Row = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), toggle = _a[0], setToggle = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(props.Height), 2), height = _b[0], setHeight = _b[1];
    function HandleAddObject(type) {
        var row = __assign(__assign({}, props), { Update: undefined, WorkSpace: undefined, RemoveRow: undefined });
        row.Widgets.push((0,_Implementations__WEBPACK_IMPORTED_MODULE_15__.CreateWidget)(type, 100, (window.innerWidth - NavWidth) / 2));
        props.Update(row);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card", style: { height: props.Height, display: 'grid' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body", style: { padding: 0, zIndex: 0 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "" + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4__.default.triangle },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "" + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_4__.default["row-controls"] },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "btn-group" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", title: 'Add Object', "data-toggle": 'dropdown', "aria-haspopup": 'true', "aria-expanded": 'false' },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-plus" })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "dropdown-menu" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Histogram'); } }, "Histogram"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Stats'); } }, "Stats"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Table'); } }, "Table"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Text'); } }, "Text"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('Trend'); } }, "Trend"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "dropdown-item", onClick: function () { return HandleAddObject('XvsY'); } }, "X vs Y"))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", title: 'Remove Row', onClick: function () { return props.RemoveRow(); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-minus" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn", title: 'Row Settings', onClick: function () { return setToggle(true); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", { className: "fa fa-cog" })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'grid-container', style: { display: 'inline-flex' } }, props.Widgets.map(function (widget, index) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Widget, __assign({}, __assign(__assign({}, widget), { Height: props.Height, WorkSpace: props.WorkSpace, Data: props.Data, Update: function (newRecord) {
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
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal", role: "dialog", style: { display: toggle ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.4)' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-dialog", role: "document", style: { maxWidth: 525 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-content" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", { className: "modal-title" }, "Row Settings"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "close", onClick: function () { return setToggle(false); } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "aria-hidden": "true" }, "\u00D7"))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-body" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Height"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "number", className: "form-control", value: height != null ? height : 0, onChange: function (evt) { return setHeight(parseInt(evt.target.value)); } }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group-prepend" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "btn btn-outline-secondary", type: "button", onClick: function (evt) { return setHeight(window.innerHeight - NavMargin); } }, "Full Height"))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null,
                            "Widgets (Max Width : ",
                            window.innerWidth - 200,
                            " px, Width Used: ",
                            (props.Widgets.length == 0 ? 0 : props.Widgets.map(function (w) { return w.Width; }).reduce(function (a, b) { return a + b; })),
                            "px)"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: 'list-group' }, props.Widgets.map(function (widget, i) {
                            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: 'list-group-item', key: i },
                                widget.Label,
                                " -",
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'pull-right' },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Width:"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { value: widget.Width, type: 'number', onChange: function (evt) {
                                            var row = __assign({}, props);
                                            row.Widgets[i].Width = parseInt(evt.target.value);
                                            props.Update(row);
                                        } }),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', disabled: i <= 0, onClick: function () {
                                            var row = __assign({}, props);
                                            if (i <= 0)
                                                return;
                                            var newIndex = i - 1;
                                            var a = row.Widgets[newIndex];
                                            var b = row.Widgets[i];
                                            row.Widgets[newIndex] = b;
                                            row.Widgets[i] = a;
                                            props.Update(row);
                                        } }, _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_1__.UpArrow),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', disabled: i >= props.Widgets.length - 1, onClick: function () {
                                            var row = __assign({}, props);
                                            if (i >= row.Widgets.length - 1)
                                                return;
                                            var newIndex = i + 1;
                                            var a = row.Widgets[newIndex];
                                            var b = row.Widgets[i];
                                            row.Widgets[newIndex] = b;
                                            row.Widgets[i] = a;
                                            props.Update(row);
                                        } }, _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_1__.DownArrow),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: 'btn btn-link', onClick: function () {
                                            var row = __assign({}, props);
                                            row.Widgets.splice(i, 1);
                                            props.Update(row);
                                        } }, _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_1__.CrossMark)));
                        }))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "modal-footer" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                props.MoveUp();
                                setToggle(false);
                            } }, "Move Row Up"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                props.MoveDown();
                                setToggle(false);
                            } }, "Move Row Down"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-primary", onClick: function () {
                                props.Update(__assign(__assign({}, props), { Height: height }));
                                setToggle(false);
                            } }, "Save changes"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: "btn btn-secondary", onClick: function () { return setToggle(false); } }, "Close")))))));
};
var Widget = function (props) {
    if (props.Type == 'Histogram')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widgets_Histogram__WEBPACK_IMPORTED_MODULE_6__.default, __assign({}, props));
    else if (props.Type == 'Profile')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widgets_Profile__WEBPACK_IMPORTED_MODULE_7__.default, __assign({}, props));
    else if (props.Type == 'Stats')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widgets_Stats__WEBPACK_IMPORTED_MODULE_8__.default, __assign({}, props));
    else if (props.Type == 'Table')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widgets_Table__WEBPACK_IMPORTED_MODULE_9__.default, __assign({}, props));
    else if (props.Type == 'Text')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widgets_Text__WEBPACK_IMPORTED_MODULE_10__.default, __assign({}, props));
    else if (props.Type == 'Trend')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widgets_Trend_Trend__WEBPACK_IMPORTED_MODULE_11__.default, __assign({}, props));
    else if (props.Type == 'XvsY')
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Widgets_XvsY__WEBPACK_IMPORTED_MODULE_12__.default, __assign({}, props));
    else
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Not a widget.");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkSpaceEditor);


/***/ }),

/***/ "./TypeScript/Implementations.ts":
/*!***************************************!*\
  !*** ./TypeScript/Implementations.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Widget": () => (/* binding */ Widget),
/* harmony export */   "Histogram": () => (/* binding */ Histogram),
/* harmony export */   "Trend": () => (/* binding */ Trend),
/* harmony export */   "Stats": () => (/* binding */ Stats),
/* harmony export */   "Table": () => (/* binding */ Table),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "XvsY": () => (/* binding */ XvsY),
/* harmony export */   "CreateWidget": () => (/* binding */ CreateWidget)
/* harmony export */ });
/* harmony import */ var _gpa_gemstone_helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gpa-gemstone/helper-functions */ "../node_modules/@gpa-gemstone/helper-functions/lib/index.js");
/* harmony import */ var stats_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stats-lite */ "../node_modules/stats-lite/stats.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
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
            _this.JSON.Series.push({ ID: id.toString(), DataSourceID: dataSourceID, Field: "Average", Color: GetColor(), Profile: false, ProfileColor: GetColor(label) });
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
            var ss = _this.JSON.Series.map(function (series) { var _a, _b; return (_b = (_a = dd.find(function (d) { return d.ID.toString() === series.ID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).map(function (d) { return d[series.Field]; }); });
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
                var ss = _this.JSON.Series.map(function (series) { var _a, _b; return (_b = (_a = dd.find(function (d) { return d.ID.toString() == series.ID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).map(function (d) { return moment__WEBPACK_IMPORTED_MODULE_2___default()(d.Timestamp).toDate().getTime(); }); });
                var mm = ss.map(function (s) { return [Math.min.apply(Math, __spread(s)), Math.max.apply(Math, __spread(s))]; });
                _this.JSON.Max = Math.max.apply(Math, __spread([].concat.apply([], __spread(mm))));
                _this.JSON.Min = Math.min.apply(Math, __spread([].concat.apply([], __spread(mm))));
            }
            else {
                if (index == undefined) {
                    var _loop_1 = function (index_1) {
                        var ss = _this.JSON.Series.filter(function (series) { return series.Axis === index_1; }).map(function (series) { var _a, _b; return (_b = (_a = dd.find(function (d) { return d.ID.toString() == series.ID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).map(function (d) { return d[series.Field]; }); });
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
                    var ss = _this.JSON.Series.filter(function (series) { return series.Axis === index; }).map(function (series) { var _a, _b; return (_b = (_a = dd.find(function (d) { return d.ID.toString() == series.ID; })) === null || _a === void 0 ? void 0 : _a.Data, (_b !== null && _b !== void 0 ? _b : [])).map(function (d) { return d[series.Field]; }); });
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
            if (_this.JSON.Series.find(function (series) { return series.ID === id.toString() && series.DataSourceID === dataSourceID; }) !== undefined)
                return;
            _this.JSON.Series.push({ ID: id.toString(), DataSourceID: dataSourceID, Axis: 0, Field: "Average", Color: GetColor(label), Label: label, ShowEvents: false });
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
            (_a = _this.JSON.Series).push.apply(_a, __spread(_this.Data.find(function (datum) { return datum.DataSource.ID === dataSourceID; }).Data.filter(function (datum) { return datum.Type === 'Voltage' && datum.Characteristic === 'RMS'; }).map(function (datum) { return ({ ID: datum.ID.toString(), DataSourceID: dataSourceID, Axis: axis, Field: 'Average', Color: GetColor("V" + datum.Phase + " - " + datum.Meter), Label: datum.Name, ShowEvents: false }); })));
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
            (_a = _this.JSON.Series).push.apply(_a, __spread(_this.Data.find(function (datum) { return datum.DataSource.ID === dataSourceID; }).Data.filter(function (datum) { return datum.Type === 'Current' && datum.Characteristic === 'RMS'; }).map(function (datum) { return ({ ID: datum.ID.toString(), DataSourceID: dataSourceID, Axis: axis, Field: 'Average', Color: GetColor("I" + datum.Phase + " - " + datum.Meter), Label: datum.Name, ShowEvents: false }); })));
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
        _this.SetSeries = function (id, dsID) { return _this.JSON.Series = { ID: id.toString(), DataSourceID: dsID, Field: 'Average' }; };
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
                Mean: stats_lite__WEBPACK_IMPORTED_MODULE_1__.mean(data).toFixed(_this.JSON.Precision),
                Median: stats_lite__WEBPACK_IMPORTED_MODULE_1__.median(data).toFixed(_this.JSON.Precision),
                //Mode: stats.mode(data)/*.toPrecision(this.JSON.Precision)*/,
                Variance: stats_lite__WEBPACK_IMPORTED_MODULE_1__.variance(data).toFixed(_this.JSON.Precision),
                StdDev: stats_lite__WEBPACK_IMPORTED_MODULE_1__.stdev(data).toFixed(_this.JSON.Precision),
                Percentile: {
                    10: stats_lite__WEBPACK_IMPORTED_MODULE_1__.percentile(data, 0.10).toFixed(_this.JSON.Precision),
                    25: stats_lite__WEBPACK_IMPORTED_MODULE_1__.percentile(data, 0.25).toFixed(_this.JSON.Precision),
                    50: stats_lite__WEBPACK_IMPORTED_MODULE_1__.percentile(data, 0.50).toFixed(_this.JSON.Precision),
                    75: stats_lite__WEBPACK_IMPORTED_MODULE_1__.percentile(data, 0.75).toFixed(_this.JSON.Precision),
                    90: stats_lite__WEBPACK_IMPORTED_MODULE_1__.percentile(data, 0.90).toFixed(_this.JSON.Precision),
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
        _this.SetSeries = function (id, dsID) { return _this.JSON.Series = { ID: id.toString(), DataSourceID: dsID, Field: 'Average' }; };
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
                _this.JSON.X.Series = { ID: id.toString(), DataSourceID: dsID, Field: 'Average' };
            else
                _this.JSON.Y.Series = { ID: id.toString(), DataSourceID: dsID, Field: 'Average' };
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
        return (0,_gpa_gemstone_helper_functions__WEBPACK_IMPORTED_MODULE_0__.RandomColor)();
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
        return (0,_gpa_gemstone_helper_functions__WEBPACK_IMPORTED_MODULE_0__.RandomColor)();
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvSGlzdG9ncmFtLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9XaWRnZXRzL1N0YXRzLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvVGFibGUudHN4Iiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvRmVhdHVyZXMvV2lkZ2V0cy9UZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvVHJlbmQvQXhpcy50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9XaWRnZXRzL1RyZW5kL1Nlcmllc1BpY2tlci50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9XaWRnZXRzL1RyZW5kL1RyZW5kLnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvV2lkZ2V0L09wZW5IaXN0b3JpYW4vQWRkaXRpb25hbEluZm8udHN4Iiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvRmVhdHVyZXMvV2lkZ2V0cy9XaWRnZXQvT3Blbkhpc3Rvcmlhbi9TZXJpZXNTZWxlY3QudHN4Iiwid2VicGFjazovLy8uL1R5cGVTY3JpcHQvRmVhdHVyZXMvV2lkZ2V0cy9XaWRnZXQvV2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvV2lkZ2V0L1hEQS9BZGRpdGlvbmFsSW5mby50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9XaWRnZXRzL1dpZGdldC9YREEvU2VyaWVzU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dpZGdldHMvWHZzWS50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9GZWF0dXJlcy9Xb3JrU3BhY2VzL1dvcmtTcGFjZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vVHlwZVNjcmlwdC9JbXBsZW1lbnRhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3R0FBd0c7QUFDeEcsd0JBQXdCO0FBQ3hCLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRy9FO0FBQ007QUFFZTtBQUNJO0FBQ0s7QUFDSztBQUNvQjtBQUVwQztBQUNNO0FBR2xELElBQU0sUUFBUSxHQUF3QjtJQUNsQyxJQUFJLEVBQUUsTUFBTTtJQUNaLGNBQWMsRUFBRSxZQUFZO0lBQzVCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLGtCQUFrQixFQUFFLE1BQU07SUFDMUIsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QixlQUFlLEVBQUUsTUFBTTtJQUN2QixhQUFhLEVBQUUsTUFBTTtJQUNyQixZQUFZLEVBQUUsTUFBTTtDQUN2QixDQUFDO0FBRWEsU0FBUyxZQUFZLENBQUMsS0FBMEM7O0lBQzNFLElBQU0sR0FBRyxHQUFHLHlDQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsc0VBQW9ELEVBQW5ELGNBQU0sRUFBRSxpQkFBMkMsQ0FBQztJQUNyRCxtSUFBcUUsRUFBcEUsY0FBTSxFQUFFLGlCQUE0RCxDQUFDO0lBRTVFLDRDQUFlLENBQUM7SUFDaEIsQ0FBQyxFQUFFLENBQUMs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U0FBUyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFDOztZQUFJLDhCQUNsRSxDQUFDLEtBQ0osSUFBSSxFQUFFLFlBQUMsWUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFFLElBQUksU0FBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBbkMsQ0FBbUMsQ0FBQywwQ0FBRSxJQUFJLHVDQUFJLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxZQUFFLElBQUksU0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFkLENBQWMsQ0FBQywwQ0FBRSxJQUFJLHVDQUFJLEVBQUUsRUFBQyxDQUFDLE1BQU0sQ0FBQyxZQUFFLElBQUksb0RBQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksNkNBQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBbEwsQ0FBa0wsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFLLElBQUks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SSxNQUFNLENBQUMsR0FBRyxNQUFHLENBQUM7U0FHcEU7SUFFTCxDQUFDO0lBRUQsU0FBUyxRQUFRLENBQUMsSUFBZTs7UUFDN0IsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ2QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUztnQkFBRSxPQUFPLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBUSxDQUFDO1lBQ2hFLElBQU0sVUFBVSxlQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFyRCxDQUFxRCxDQUFDLDBDQUFFLElBQUksdUNBQUksRUFBRSxHQUFDO1lBQzVHLElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBRSxJQUFJLFNBQUUsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBakMsQ0FBaUMsQ0FBQztZQUN0RSxPQUFPLEtBQUssQ0FBQztTQUNoQjthQUNJO1lBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUztnQkFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBUyxDQUFDO1lBQ2xFLElBQU0sVUFBVSxlQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFyRCxDQUFxRCxDQUFDLDBDQUFFLElBQUksdUNBQUksRUFBRSxHQUFDO1lBQzVHLElBQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBRSxJQUFJLFNBQUUsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLElB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ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBIaXN0b2dyYW0udHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzE2LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCBXaWRnZXQsIHsgU2VyaWVzU2VsZWN0IH0gZnJvbSAnLi9XaWRnZXQvV2lkZ2V0JztcclxuaW1wb3J0IEFkZGl0aW9uYWxJbmZvWERBIGZyb20gJy4vV2lkZ2V0L1hEQS9BZGRpdGlvbmFsSW5mbyc7XHJcbmltcG9ydCBBZGRpdGlvbmFsSW5mb09wZW5IaXN0b3JpYW4gZnJvbSAnLi9XaWRnZXQvT3Blbkhpc3Rvcmlhbi9BZGRpdGlvbmFsSW5mbyc7XHJcblxyXG5pbXBvcnQgeyBDcm9zc01hcmsgfSBmcm9tICcuLi8uLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBIaXN0b2dyYW0gfSBmcm9tICcuLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5cclxuXHJcbmNvbnN0IFN2Z1N0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgZmlsbDogJ25vbmUnLFxyXG4gICAgc2hhcGVSZW5kZXJpbmc6ICdjcmlzcEVkZ2VzJyxcclxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcclxuICAgIFdlYmtpdFRvdWNoQ2FsbG91dDogJ25vbmUnLFxyXG4gICAgV2Via2l0VXNlclNlbGVjdDogJ25vbmUnLFxyXG4gICAgS2h0bWxVc2VyU2VsZWN0OiAnbm9uZScsXHJcbiAgICBNb3pVc2VyU2VsZWN0OiAnbm9uZScsXHJcbiAgICBtc1VzZXJTZWxlY3Q6ICdub25lJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlzdG9ncmFtSlNYKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pSGlzdG9ncmFtPikge1xyXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZWNvcmQsIHNldFJlY29yZF0gPSBSZWFjdC51c2VTdGF0ZTxIaXN0b2dyYW0+KG5ldyBIaXN0b2dyYW0ocHJvcHMpKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgfSwgW3RvZ2dsZSwgcHJvcHMuSlNPTl0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgSW5pdGlhbGl6ZShyZWNvcmQpO1xyXG4gICAgfSwgW3JlY29yZF0pXHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRSZWNvcmQobmV3IEhpc3RvZ3JhbSh7IC4uLnJlY29yZCwgRGF0YTogcHJvcHMuRGF0YSB9KSk7XHJcbiAgICB9LCBbcHJvcHMuRGF0YV0pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVjb3JkKG5ldyBIaXN0b2dyYW0oeyAuLi5yZWNvcmQsIEhlaWdodDogcHJvcHMuSGVpZ2h0IH0pKVxyXG4gICAgfSwgW3Byb3BzLkhlaWdodF0pXHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZShzZXR0aW5nczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaUhpc3RvZ3JhbT4pIHtcclxuICAgICAgICBjb25zdCBwcm9maWxlID0gc2V0dGluZ3MuSlNPTi5TZXJpZXMubWFwKHNlcmllcyA9PiBzZXJpZXMuUHJvZmlsZSkucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2IHx8IGN1cnIsIGZhbHNlKTtcclxuICAgICAgICBjb25zdCBtYXJnaW4gPSB7IGJvdHRvbTogNTAsIGxlZnQ6IDUwLCB0b3A6IDQwLCByaWdodDogKHByb2ZpbGUgPyA3MCA6IDIwKSB9O1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IHJlY29yZC5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuXHJcbiAgICAgICAgY29uc3QgZXh0ZW50ID0gZDMuZXh0ZW50KFtdLmNvbmNhdCguLi5zZXR0aW5ncy5KU09OLlNlcmllcy5tYXAoc2VyaWVzID0+ICgoc2V0dGluZ3MuRGF0YS5maW5kKGQgPT4gZC5EYXRhU291cmNlLklEID09PSBzZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSA/P1tdKS5maW5kKGQ9PiBkLklEID09PSBzZXJpZXMuSUQpPy5EYXRhPz8gW10pLm1hcChkID0+IGRbc2VyaWVzLkZpZWxkXSBhcyBudW1iZXIpKSkpO1xyXG4gICAgICAgIC8vLy8gc2V0IHRoZSBwYXJhbWV0ZXJzIGZvciB0aGUgaGlzdG9ncmFtXHJcbiAgICAgICAgbGV0IGhpc3RvZ3JhbXMgPSAoc2V0dGluZ3MuSlNPTj8uU2VyaWVzID8/IFtdKS5tYXAoc2VyaWVzID0+IHtcclxuICAgICAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBzZXR0aW5ncy5EYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IHNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgICAgICBsZXQgZGF0dW0gPSBkYXRhU291cmNlLmZpbmQoZCA9PiBkLklEID09PSBzZXJpZXMuSUQpPy5EYXRhLm1hcChkID0+IGRbc2VyaWVzLkZpZWxkXSkgPz8gW107XHJcbiAgICAgICAgICAgIGxldCBoaXN0b2dyYW0gPSBkMy5oaXN0b2dyYW08bnVtYmVyLCBudW1iZXI+KClcclxuICAgICAgICAgICAgICAgIC52YWx1ZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfSkgICAvLyBJIG5lZWQgdG8gZ2l2ZSB0aGUgdmVjdG9yIG9mIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAuZG9tYWluKGV4dGVudCkgIC8vIHRoZW4gdGhlIGRvbWFpbiBvZiB0aGUgZ3JhcGhpY1xyXG4gICAgICAgICAgICAgICAgLnRocmVzaG9sZHMoc2V0dGluZ3MuSlNPTi5CaW5Db3VudCk7IC8vIHRoZW4gdGhlIG51bWJlcnMgb2YgYmluc1xyXG5cclxuICAgICAgICAgICAgLy8gQW5kIGFwcGx5IHRoaXMgZnVuY3Rpb24gdG8gZGF0YSB0byBnZXQgdGhlIGJpbnNcclxuICAgICAgICAgICAgcmV0dXJuIGhpc3RvZ3JhbShkYXR1bSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgeU1heCA9IE1hdGgubWF4KC4uLltdLmNvbmNhdCguLi5oaXN0b2dyYW1zKS5tYXAoYiA9PiBiLmxlbmd0aCkpO1xyXG4gICAgICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QocmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXHJcbiAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc2V0dGluZ3MuV2lkdGgpXHJcbiAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHNldHRpbmdzLkhlaWdodClcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgLmRvbWFpbihbc2V0dGluZ3MuSlNPTi5NaW4sIHNldHRpbmdzLkpTT04uTWF4XSkgICAgIC8vIGNhbiB1c2UgdGhpcyBpbnN0ZWFkIG9mIDEwMDAgdG8gaGF2ZSB0aGUgbWF4IG9mIGRhdGE6IGQzLm1heChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiArZC5wcmljZSB9KVxyXG4gICAgICAgICAgICAucmFuZ2UoWzAsIHNldHRpbmdzLldpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHRdKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgKHNldHRpbmdzLkhlaWdodCAtIG1hcmdpbi5ib3R0b20pICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXHJcblxyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHNldHRpbmdzLldpZHRoIC8gMikgKyBcIixcIiArIChzZXR0aW5ncy5IZWlnaHQgLSBtYXJnaW4uYm90dG9tLzMpICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC50ZXh0KHJlY29yZC5KU09OLlVuaXRzKVxyXG5cclxuICAgICAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAucmFuZ2UoW3NldHRpbmdzLkhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tLCAwXSlcclxuICAgICAgICAgICAgLmRvbWFpbihbMCwgeU1heF0pOyAgIC8vIGQzLmhpc3QgaGFzIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIFkgYXhpcyBvYnZpb3VzbHlcclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcclxuICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBzZXR0aW5ncy5IZWlnaHQvMiArIFwiLFwiICsgbWFyZ2luLmxlZnQvMyArIFwiKVwiKVxyXG4gICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIkNvdW50c1wiKVxyXG5cclxuICAgICAgICBjb25zdCBiaW5XaWR0aCA9IE1hdGgubWF4KC4uLmhpc3RvZ3JhbXMubWFwKGhpc3RvZ3JhbSA9PiBNYXRoLm1heCguLi5oaXN0b2dyYW0ubWFwKGEgPT4geChhLngxKSAtIHgoYS54MCkpKSkpO1xyXG4gICAgICAgIC8vc3ZnLnNlbGVjdEFsbChcImcuYmluc1wiKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcuYmluc1wiKVxyXG4gICAgICAgICAgICAuZGF0YShzZXR0aW5ncy5KU09OLlNlcmllcylcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdiaW5zJykuYXR0cihcImZpbGxcIiwgKHNlcmllcykgPT4gc2VyaWVzLkNvbG9yKVxyXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGluZGV4KSA9PiBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnQgKyBpbmRleCAqIGJpbldpZHRoIC8gc2V0dGluZ3MuSlNPTi5TZXJpZXMubGVuZ3RofSwke21hcmdpbi50b3B9KWApXHJcbiAgICAgICAgICAgICAgICAvLy5hdHRyKFwib3BhY2l0eVwiLCAwLjMpXHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKCdyZWN0JylcclxuICAgICAgICAgICAgICAgIC5kYXRhKChzZXJpZXMsIGluZGV4KSA9PiBoaXN0b2dyYW1zW2luZGV4XSlcclxuICAgICAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgMSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCxpLGcpID0+IGB0cmFuc2xhdGUoJHt4KGQueDApfSwke3koZC5sZW5ndGgpfSlgKVxyXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiAoeChkLngxKSAtIHgoZC54MCkgPiAyID8gKHgoZC54MSkgLSB4KGQueDApKSAvIHNldHRpbmdzLkpTT04uU2VyaWVzLmxlbmd0aCA6IDIpIC0gMSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gc3ZnSGVpZ2h0IC0geShkLmxlbmd0aCkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmIChwcm9maWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVzID0gcmVjb3JkLkpTT04uU2VyaWVzLmZpbHRlcihzZXJpZXMgPT4gc2VyaWVzLlByb2ZpbGUpLm1hcCgoc2VyaWVzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFTb3VyY2UgPSBzZXR0aW5ncy5EYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IHNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdHVtID0gZGF0YVNvdXJjZS5maW5kKGQgPT4gZC5JRCA9PT0gc2VyaWVzLklEKT8uRGF0YS5tYXAoZCA9PiBkW3Nlcmllcy5GaWVsZF0pID8/IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhpc3RvZ3JhbSA9IGQzLmhpc3RvZ3JhbTxudW1iZXIsIG51bWJlcj4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZDsgfSkgICAvLyBJIG5lZWQgdG8gZ2l2ZSB0aGUgdmVjdG9yIG9mIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihkMy5leHRlbnQoZGF0dW0pIGFzIFtudW1iZXIsIG51bWJlcl0pICAvLyB0aGVuIHRoZSBkb21haW4gb2YgdGhlIGdyYXBoaWNcclxuICAgICAgICAgICAgICAgICAgICAudGhyZXNob2xkcyhzZXR0aW5ncy5KU09OLkJpbkNvdW50KShkYXR1bSk7IC8vIHRoZW4gdGhlIG51bWJlcnMgb2YgYmluc1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IENvbG9yOiBzZXJpZXMuUHJvZmlsZUNvbG9yLCBQcm9maWxlOiBoaXN0b2dyYW0ubWFwKChzdW0gPT4gdmFsdWUgPT4gc3VtICs9IHZhbHVlLmxlbmd0aCkoMCkpLm1hcCgocHJvZiwgaSkgPT4gKHsgQmluOiBoaXN0b2dyYW1baV0ueDAsIFZhbHVlOiBwcm9mIH0pKX07XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9jb25zdCBwcm9maWxlcyA9IGhpc3RvZ3JhbXMubWFwKGhpc3QgPT4gaGlzdC5tYXAoKHN1bSA9PiB2YWx1ZSA9PiBzdW0gKz0gdmFsdWUubGVuZ3RoKSgwKSkubWFwKChwcm9mLCBpKSA9PiAoeyBCaW46IGhpc3RbaV0ueDAsIFZhbHVlOiBwcm9mIH0pKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHB5TWF4ID0gTWF0aC5tYXgoLi4ucHJvZmlsZXMubWFwKHByID0+IHByLlByb2ZpbGUpLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5jb25jYXQoY3VyciksIFtdKS5tYXAocCA9PiBwLlZhbHVlKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHB5ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAgICAgLnJhbmdlKFtzZXR0aW5ncy5IZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbSwgMF0pXHJcbiAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBweU1heF0pOyAgIC8vIGQzLmhpc3QgaGFzIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIFkgYXhpcyBvYnZpb3VzbHlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHB5QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChzZXR0aW5ncy5XaWR0aCAtIG1hcmdpbi5yaWdodCkgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcclxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNSaWdodChweSkpO1xyXG4gICAgICAgICAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKSB0cmFuc2xhdGUoLVwiICsgc2V0dGluZ3MuSGVpZ2h0IC8gMiArIFwiLFwiICsgKHNldHRpbmdzLldpZHRoIC0gbWFyZ2luLnJpZ2h0LzMpICsgXCIpXCIpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoXCJQcm9maWxlXCIpXHJcblxyXG4gICAgICAgICAgICAvL2NvbnN0IGZpbHRlcmVkRGF0YSA9IHByb2ZpbGUuZmluZChkcyA9PiBkcy5JRCA9PT0gc2VyaWVzLklEKT8uRGF0YSA/PyBbXSkuZmlsdGVyKGRzID0+IG1vbWVudChkcy5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSA+PSBzZXR0aW5ncy5KU09OLk1pbiAmJiBtb21lbnQoZHMuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkgPD0gc2V0dGluZ3MuSlNPTi5NYXggJiYgZHNbZmllbGRdID49IGF4aXMuTWluICYmIGRzW2ZpZWxkXSA8PSBheGlzLk1heClcclxuICAgICAgICAgICAgY29uc3QgbGluZUZ1bmMgPSBkMy5saW5lPHtCaW46IG51bWJlciwgVmFsdWU6IG51bWJlcn0+KCkueChkZCA9PiB4KGRkLkJpbikpLnkoZGQgPT4gcHkoZGQuVmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgICAgICAgICAuZGF0YShwcm9maWxlcylcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGQgPT4gZC5Db2xvcilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZCkgPT4gbGluZUZ1bmMoZC5Qcm9maWxlKSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6IHByb3BzLldpZHRoLCBoZWlnaHQ6IHByb3BzLkhlaWdodCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIndpZGdpdC1sYWJlbFwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLkxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gXCIgKyBzdHlsZXNbXCJ3aWRnaXQtY29udHJvbHNcIl19IHRpdGxlPSdXaWRnZXQgU2V0dGluZ3MnIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSh0cnVlKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFdpZGdldCB7Li4ucHJvcHN9IFJlY29yZD17cmVjb3JkfSBUb2dnbGU9e3RvZ2dsZX0gU2V0VG9nZ2xlPXsoYm9vbCkgPT4gc2V0VG9nZ2xlKGJvb2wpIH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaVdpZGdldD4gRmllbGQ9J0xhYmVsJyBSZWNvcmQ9e3JlY29yZH0gVHlwZT0ndGV4dCcgU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKG5ldyBIaXN0b2dyYW0ocikpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V2lkdGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmVjb3JkPy5XaWR0aCA/PyAwfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKG5ldyBIaXN0b2dyYW0oeyAuLi5yZWNvcmQsIFdpZHRoOiBwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSB9KSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldnQpID0+IHNldFJlY29yZChuZXcgSGlzdG9ncmFtKHsgLi4ucmVjb3JkLCBXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSAyMDAgfSkpfT5GdWxsIFdpZHRoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlIaXN0b2dyYW0+IEZpZWxkPSdVbml0cycgUmVjb3JkPXtyZWNvcmQuSlNPTn0gVHlwZT0ndGV4dCcgU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKG5ldyBIaXN0b2dyYW0oeyAuLi5yZWNvcmQsIEpTT046IHIgfSkpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pSGlzdG9ncmFtPiBGaWVsZD0nQmluQ291bnQnIExhYmVsPSdCaW5zJyBSZWNvcmQ9e3JlY29yZC5KU09OfSBUeXBlPSdudW1iZXInIFNldHRlcj17KHIpID0+IHNldFJlY29yZChuZXcgSGlzdG9ncmFtKHsgLi4ucmVjb3JkLCBKU09OOiByIH0pKX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pSGlzdG9ncmFtPiBGaWVsZD0nTWluJyBMYWJlbD0nTWluJyBSZWNvcmQ9e3JlY29yZC5KU09OIGFzIFRyZW5EQVAuaUhpc3RvZ3JhbX0gVHlwZT0nbnVtYmVyJyBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQoeyAuLi5yZWNvcmQsIEpTT046IHIgfSl9IFZhbGlkPXsoZmllbGQpID0+IHRydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaUhpc3RvZ3JhbT4gRmllbGQ9J01heCcgUmVjb3JkPXtyZWNvcmQuSlNPTiBhcyBUcmVuREFQLmlIaXN0b2dyYW19IFR5cGU9J251bWJlcicgU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKHsgLi4ucmVjb3JkLCBKU09OOiByIH0pfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDE2IH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRSZWNvcmQocmVjb3JkLkNhbGN1bGF0ZUF4aXNSYW5nZSgpKX0+VXNlIERhdGE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+U2VyaWVzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3JkaW9uXCIgc3R5bGU9e3tvdmVyZmxvd1k6ICdhdXRvJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LzJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5EYXRhLm1hcCgoZCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e1wiI2NvbGxhcHNlXCIgKyBpfT57ZC5EYXRhU291cmNlLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcImNvbGxhcHNlXCIgKyBpfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBzaG93XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzU2VsZWN0IFdpZGdldD17cmVjb3JkfSBEYXRhU291cmNlSUQ9e2QuRGF0YVNvdXJjZS5JRH0gQ2FsbGJhY2s9eygpID0+IHNldFJlY29yZChuZXcgSGlzdG9ncmFtKHJlY29yZCkpfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1RyZW5EQVBEQicgPyAocmVjb3JkLkpTT04/LlNlcmllcyA/PyBbXSkubWFwKChzZXJpZXMsaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXR1bSA9IChkLkRhdGEgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YVtdKS5maW5kKGRkID0+IGRkLklELnRvU3RyaW5nKCkgPT09IHNlcmllcy5JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXR1bSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Nlcmllcy5JRH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57ZGF0dW0uTmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZGl0aW9uYWxJbmZvWERBIERhdGE9e2RhdHVtfSBJbmRleD17aX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJpZXNQaWNrZXIgSW5kZXg9e2luZH0gU2VyaWVzPXtzZXJpZXN9IFdpZGdldD17cmVjb3JkfSBDYWxsYmFjaz17KHdpZGdldCkgPT4gc2V0UmVjb3JkKHdpZGdldCl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhkLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ09wZW5IaXN0b3JpYW4nID8gKHJlY29yZC5KU09OPy5TZXJpZXMgPz8gW10pLm1hcCgoc2VyaWVzLCBpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdHVtID0gKGQuRGF0YSBhcyBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJuW10pLmZpbmQoZGQgPT4gZGQuSUQudG9TdHJpbmcoKSA9PT0gc2VyaWVzLklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdHVtID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2VyaWVzLklEfSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntkYXR1bS5EZXZpY2UgKyAnIC0gJyArIGRhdHVtLkRlc2NyaXB0aW9uIH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZGl0aW9uYWxJbmZvT3Blbkhpc3RvcmlhbiBEYXRhPXtkYXR1bX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJpZXNQaWNrZXIgSW5kZXg9e2luZH0gU2VyaWVzPXtzZXJpZXN9IFdpZGdldD17cmVjb3JkfSBDYWxsYmFjaz17KHdpZGdldCkgPT4gc2V0UmVjb3JkKHdpZGdldCl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogbnVsbCl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5jb25zdCBTZXJpZXNQaWNrZXIgPSAocHJvcHM6IHsgSW5kZXg6IG51bWJlciwgU2VyaWVzOiBUcmVuREFQLmlIaXN0b2dyYW1TZXJpZXMsIFdpZGdldDogSGlzdG9ncmFtLCBDYWxsYmFjazogKHdpZGdldDogSGlzdG9ncmFtKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihwcm9wcy5TZXJpZXMuQ29sb3IpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRGaWVsZD4ocHJvcHMuU2VyaWVzLkZpZWxkKTtcclxuICAgIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHByb3BzLlNlcmllcy5Qcm9maWxlKTtcclxuICAgIGNvbnN0IFtwQ29sb3IsIHNldFBDb2xvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KHByb3BzLlNlcmllcy5Qcm9maWxlQ29sb3IpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHByb3BzLkNhbGxiYWNrKHByb3BzLldpZGdldC5VcGRhdGVTZXJpZXMocHJvcHMuSW5kZXgsIFwiQ29sb3JcIiwgY29sb3IpKSwgW2NvbG9yXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gcHJvcHMuQ2FsbGJhY2socHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5JbmRleCwgXCJGaWVsZFwiLCB0eXBlKSksIFt0eXBlXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gcHJvcHMuQ2FsbGJhY2socHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5JbmRleCwgXCJQcm9maWxlXCIsIHByb2ZpbGUpKSwgW3Byb2ZpbGVdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBwcm9wcy5DYWxsYmFjayhwcm9wcy5XaWRnZXQuVXBkYXRlU2VyaWVzKHByb3BzLkluZGV4LCBcIlByb2ZpbGVDb2xvclwiLCBwQ29sb3IpKSwgW3BDb2xvcl0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5GaWVsZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZShldnQudGFyZ2V0LnZhbHVlIGFzIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXZlcmFnZVwiPkF2Zzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaW5pbXVtXCI+TWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1heGltdW1cIj5NYXg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2NvbG9yfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q29sb3IoZXZ0LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZmlsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9e3t3aWR0aDogMjB9fSAgdmFsdWU9e3Byb2ZpbGU/LnRvU3RyaW5nKCl9IGNoZWNrZWQ9e3Byb2ZpbGV9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRQcm9maWxlKGV2dC50YXJnZXQuY2hlY2tlZCl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlByb2ZpbGUgQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtwQ29sb3J9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRQQ29sb3IoZXZ0LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5DYWxsYmFjayhwcm9wcy5XaWRnZXQuUmVtb3ZlU2VyaWVzKHByb3BzLkluZGV4KSkgfT57Q3Jvc3NNYXJrfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuXHJcbik7XHJcbn0iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgV2lkZ2l0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xNi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vU3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUocHJvcHM6IFRyZW5EQVAuaVdpZGdldCkge1xyXG4gICAgcmV0dXJuIDxkaXY+UHJvZmlsZTwvZGl2PjtcclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgU3RhdHMudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzE2LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IFN0YXRzIH0gZnJvbSAnLi4vLi4vSW1wbGVtZW50YXRpb25zJztcclxuaW1wb3J0IFdpZGdldCwgeyBTZXJpZXNTZWxlY3QgfSBmcm9tICcuL1dpZGdldC9XaWRnZXQnO1xyXG5pbXBvcnQgQWRkaXRpb25hbEluZm9YREEgZnJvbSAnLi9XaWRnZXQvWERBL0FkZGl0aW9uYWxJbmZvJztcclxuaW1wb3J0IEFkZGl0aW9uYWxJbmZvT3Blbkhpc3RvcmlhbiBmcm9tICcuL1dpZGdldC9PcGVuSGlzdG9yaWFuL0FkZGl0aW9uYWxJbmZvJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXRzSlNYKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pU3RhdHM+KSB7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IFJlYWN0LnVzZVN0YXRlPFN0YXRzPihuZXcgU3RhdHMocHJvcHMpKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFJlY29yZChuZXcgU3RhdHMoeyAuLi5yZWNvcmQsIERhdGE6IHByb3BzLkRhdGEgfSkpO1xyXG4gICAgfSwgW3Byb3BzLkRhdGFdKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3RhdHMgPSByZWNvcmQuU3RhdHMoKTtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSByZWNvcmQuRGF0YS5maW5kKGRkID0+IGRkLkRhdGFTb3VyY2UuSUQgPT09IHJlY29yZC5KU09OLlNlcmllcz8uRGF0YVNvdXJjZUlEID8/IDApPy5EYXRhID8/IFtdO1xyXG4gICAgY29uc3QgZGF0dW0gPSBkYXRhU291cmNlLmZpbmQoZGQgPT4gZGQuSUQgPT09IHJlY29yZC5KU09OLlNlcmllcz8uSUQgPz8gMCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBwcm9wcy5XaWR0aCwgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIG1heEhlaWdodDogcHJvcHMuSGVpZ2h0LCBvdmVyZmxvd1k6ICdhdXRvJyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIndpZGdpdC1sYWJlbFwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLkxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG4gXCIgKyBzdHlsZXNbXCJ3aWRnaXQtY29udHJvbHNcIl19IHRpdGxlPSdXaWRnZXQgU2V0dGluZ3MnIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSh0cnVlKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0aD5DYXRlZ29yeTwvdGg+PHRoPlN0YXRpc3RpYzwvdGg+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHN0YXRzKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ1BlcmNlbnRpbGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dHIga2V5PXtrZXl9Pjx0ZD57a2V5fTwvdGQ+PHRkPntzdGF0c1trZXldfTwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc3RhdHMuUGVyY2VudGlsZSkubWFwKHBrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRyIGtleT17a2V5K3BrZXl9Pjx0ZD57cGtleX10aCBQZXJjZW50aWxlPC90ZD48dGQ+e3N0YXRzLlBlcmNlbnRpbGVbcGtleV19PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8V2lkZ2V0IHsuLi5wcm9wc30gUmVjb3JkPXtyZWNvcmR9IFRvZ2dsZT17dG9nZ2xlfSBTZXRUb2dnbGU9eyhib29sKSA9PiBzZXRUb2dnbGUoYm9vbCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVN0YXRzPj4gRmllbGQ9J0xhYmVsJyBSZWNvcmQ9e3JlY29yZH0gVHlwZT0ndGV4dCcgU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKG5ldyBTdGF0cyhyKSl9IFZhbGlkPXsoZmllbGQpID0+IHRydWV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5XaWR0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtyZWNvcmQ/LldpZHRofSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKG5ldyBTdGF0cyh7IC4uLnJlY29yZCwgV2lkdGg6IHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpIH0pKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGV2dCkgPT4gc2V0UmVjb3JkKG5ldyBTdGF0cyh7IC4uLnJlY29yZCwgV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC0gMjAwIH0pKX0+RnVsbCBXaWR0aDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PlNlcmllczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFjY29yZGlvblwiIHN0eWxlPXt7IG92ZXJmbG93WTogJ2F1dG8nLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDMwMCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkLkRhdGEubWFwKChkLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkLWxpbmtcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj17XCIjY29sbGFwc2VcIiArIGl9PntkLkRhdGFTb3VyY2UuTmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17XCJjb2xsYXBzZVwiICsgaX0gY2xhc3NOYW1lPVwiY29sbGFwc2Ugc2hvd1wiIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlcmllc1NlbGVjdCBXaWRnZXQ9e3JlY29yZH0gRGF0YVNvdXJjZUlEPXtkLkRhdGFTb3VyY2UuSUR9IENhbGxiYWNrPXsoKSA9PiBzZXRSZWNvcmQobmV3IFN0YXRzKHJlY29yZCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZC5EYXRhU291cmNlLlR5cGUgPT09ICdUcmVuREFQREInICYmIHJlY29yZC5KU09OLlNlcmllcyAhPSB1bmRlZmluZWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3JlY29yZC5KU09OLlNlcmllcy5JRH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnsoZGF0dW0gYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSk/Lk5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZGl0aW9uYWxJbmZvWERBIEluZGV4PXtpfSBEYXRhPXtkYXR1bSBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RmllbGQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmVjb3JkLkpTT04uU2VyaWVzLkZpZWxkfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKHJlY29yZC5TZXRTZXJpZXNGaWVsZChldnQudGFyZ2V0LnZhbHVlIGFzIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkF2ZXJhZ2VcIj5Bdmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWluaW11bVwiPk1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYXhpbXVtXCI+TWF4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByZWNpc2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtyZWNvcmQuSlNPTi5QcmVjaXNpb259IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRSZWNvcmQocmVjb3JkLlNldFByZWNzaXNpb24ocGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ09wZW5IaXN0b3JpYW4nICYmIHJlY29yZC5KU09OLlNlcmllcyAhPSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtyZWNvcmQuSlNPTi5TZXJpZXMuSUR9IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57KGRhdHVtIGFzIFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm4pPy5EZXNjcmlwdGlvbn08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm9PcGVuSGlzdG9yaWFuIERhdGE9e2RhdHVtIGFzIFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5GaWVsZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3JlY29yZC5KU09OLlNlcmllcy5GaWVsZH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlY29yZChyZWNvcmQuU2V0U2VyaWVzRmllbGQoZXZ0LnRhcmdldC52YWx1ZSBhcyBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludEZpZWxkKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkF2ZXJhZ2VcIj5Bdmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaW5pbXVtXCI+TWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWF4aW11bVwiPk1heDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByZWNpc2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3JlY29yZC5KU09OLlByZWNpc2lvbn0gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlY29yZChyZWNvcmQuU2V0UHJlY3Npc2lvbihwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRhYmxlLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xNi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgVGFibGVGb3JtIGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtdGFibGUnO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJy4uLy4uL0ltcGxlbWVudGF0aW9ucyc7XHJcbmltcG9ydCBXaWRnZXQsIHsgU2VyaWVzU2VsZWN0IH0gZnJvbSAnLi9XaWRnZXQvV2lkZ2V0JztcclxuaW1wb3J0IEFkZGl0aW9uYWxJbmZvWERBIGZyb20gJy4vV2lkZ2V0L1hEQS9BZGRpdGlvbmFsSW5mbyc7XHJcbmltcG9ydCBBZGRpdGlvbmFsSW5mb09wZW5IaXN0b3JpYW4gZnJvbSAnLi9XaWRnZXQvT3Blbkhpc3Rvcmlhbi9BZGRpdGlvbmFsSW5mbyc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFNvcnQgfSBmcm9tICcuLi9Xb3JrU3BhY2VzL1dvcmtTcGFjZXNTbGljZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZUpTWChwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVRhYmxlPikge1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZWNvcmQsIHNldFJlY29yZF0gPSBSZWFjdC51c2VTdGF0ZTxUYWJsZT4obmV3IFRhYmxlKHByb3BzKSk7XHJcbiAgICBjb25zdCBbc29ydEZpZWxkLCBzZXRTb3J0RmllbGRdID0gUmVhY3QudXNlU3RhdGU8a2V5b2YgVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+KCdUaW1lc3RhbXAnKTtcclxuICAgIGNvbnN0IFthc2NlbmRpbmcsIHNldEFzY2VuZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50W10+KFtdKTtcclxuICAgIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaURhdGFTZXRSZXR1cm5UeXBlPih7fSBhcyBUcmVuREFQLmlEYXRhU2V0UmV0dXJuVHlwZSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRSZWNvcmQobmV3IFRhYmxlKHsgLi4ucmVjb3JkLCBEYXRhOiBwcm9wcy5EYXRhIH0pKTtcclxuICAgIH0sIFtwcm9wcy5EYXRhXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gcmVjb3JkLkRhdGEuZmluZChkZCA9PiBkZC5EYXRhU291cmNlLklEID09PSByZWNvcmQuSlNPTi5TZXJpZXM/LkRhdGFTb3VyY2VJRCA/PyAwKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBjb25zdCBkYXR1bSA9IGRhdGFTb3VyY2UuZmluZChkZCA9PiBkZC5JRCA9PT0gcmVjb3JkLkpTT04uU2VyaWVzPy5JRCA/PyAwKTtcclxuICAgICAgICBpZiAoZGF0dW0gPT0gdW5kZWZpbmVkKSBzZXRJbmZvKHt9IGFzIFRyZW5EQVAuaURhdGFTZXRSZXR1cm5UeXBlICk7XHJcbiAgICAgICAgZWxzZSBzZXRJbmZvKGRhdHVtIGFzIFRyZW5EQVAuaURhdGFTZXRSZXR1cm5UeXBlKTtcclxuICAgIH0sIFtyZWNvcmRdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBvcmRlcmVkID0gXy5vcmRlckJ5KGluZm8/LkRhdGEgPz8gW10sIFtzb3J0RmllbGRdLCBbYXNjZW5kaW5nID8gJ2FzYycgOiAnZGVzYyddKVxyXG4gICAgICAgIHNldERhdGEob3JkZXJlZCk7XHJcbiAgICB9LCBbYXNjZW5kaW5nLHNvcnRGaWVsZCxpbmZvXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyB3aWR0aDogcHJvcHMuV2lkdGgsIGhlaWdodDogcHJvcHMuSGVpZ2h0LCBtYXhIZWlnaHQ6IHByb3BzLkhlaWdodCwgb3ZlcmZsb3dZOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ3aWRnaXQtbGFiZWxcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5MYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIFwiICsgc3R5bGVzW1wid2lkZ2l0LWNvbnRyb2xzXCJdfSB0aXRsZT0nV2lkZ2V0IFNldHRpbmdzJyBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUZvcm08VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+IHRhYmxlQ2xhc3M9J3RhYmxlJyBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdUaW1lc3RhbXAnLCBsYWJlbDogJ1RpbWVzdGFtcCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGtleTogJ01pbmltdW0nLCBsYWJlbDogJ01pbicsIGNvbnRlbnQ6IChpdGVtLGtleSwgc3R5bGUpID0+IGl0ZW0uTWluaW11bS50b0ZpeGVkKHJlY29yZC5KU09OLlByZWNpc2lvbil9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnQXZlcmFnZScsIGxhYmVsOiAnQXZnJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW0uQXZlcmFnZS50b0ZpeGVkKHJlY29yZC5KU09OLlByZWNpc2lvbil9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTWF4aW11bScsIGxhYmVsOiAnTWF4JywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IGl0ZW0uTWF4aW11bS50b0ZpeGVkKHJlY29yZC5KU09OLlByZWNpc2lvbil9LFxyXG4gICAgICAgICAgICAgICAgXX0gZGF0YT17ZGF0YX0gc29ydEZpZWxkPXtzb3J0RmllbGR9IG9uQ2xpY2s9eyhkYXRhKSA9PiB7IH19IGFzY2VuZGluZz17YXNjZW5kaW5nfSBvblNvcnQ9eyhkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29sID09PSBzb3J0RmllbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTb3J0RmllbGQoZGF0YS5jb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFdpZGdldCB7Li4ucHJvcHN9IFJlY29yZD17cmVjb3JkfSBUb2dnbGU9e3RvZ2dsZX0gU2V0VG9nZ2xlPXsoYm9vbCkgPT4gc2V0VG9nZ2xlKGJvb2wpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlTdGF0cz4+IEZpZWxkPSdMYWJlbCcgUmVjb3JkPXtyZWNvcmR9IFR5cGU9J3RleHQnIFNldHRlcj17KHIpID0+IHNldFJlY29yZChuZXcgVGFibGUocikpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V2lkdGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmVjb3JkPy5XaWR0aH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlY29yZChuZXcgVGFibGUoeyAuLi5yZWNvcmQsIFdpZHRoOiBwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSB9KSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldnQpID0+IHNldFJlY29yZChuZXcgVGFibGUoeyAuLi5yZWNvcmQsIFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAtIDIwMCB9KSl9PkZ1bGwgV2lkdGg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5TZXJpZXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhY2NvcmRpb25cIiBzdHlsZT17eyBvdmVyZmxvd1k6ICdhdXRvJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAzMDAsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC8gMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5EYXRhLm1hcCgoZCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGhyZWY9e1wiI2NvbGxhcHNlXCIgKyBpfT57ZC5EYXRhU291cmNlLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e1wiY29sbGFwc2VcIiArIGl9IGNsYXNzTmFtZT1cImNvbGxhcHNlIHNob3dcIiBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJpZXNTZWxlY3QgV2lkZ2V0PXtyZWNvcmR9IERhdGFTb3VyY2VJRD17ZC5EYXRhU291cmNlLklEfSBDYWxsYmFjaz17KCkgPT4gc2V0UmVjb3JkKG5ldyBUYWJsZShyZWNvcmQpKX0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkLkRhdGFTb3VyY2UuVHlwZSA9PT0gJ1RyZW5EQVBEQicgJiYgcmVjb3JkLkpTT04uU2VyaWVzICE9IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3JlY29yZC5KU09OLlNlcmllcy5JRH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnsoaW5mbyBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhKT8uTmFtZSA/PyAnJ308L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm9YREEgSW5kZXg9e2l9IERhdGE9eyhpbmZvIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UHJlY2lzaW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17cmVjb3JkLkpTT04uUHJlY2lzaW9ufSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKHJlY29yZC5TZXRQcmVjc2lzaW9uKHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2QuRGF0YVNvdXJjZS5UeXBlID09PSAnT3Blbkhpc3RvcmlhbicgJiYgcmVjb3JkLkpTT04uU2VyaWVzICE9IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3JlY29yZC5KU09OLlNlcmllcy5JRH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnsoaW5mbyBhcyBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJuKT8uRGVzY3JpcHRpb24gPz8gJyd9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZGl0aW9uYWxJbmZvT3Blbkhpc3RvcmlhbiBEYXRhPXsoaW5mbyBhcyBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJuKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByZWNpc2lvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3JlY29yZC5KU09OLlByZWNpc2lvbn0gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlY29yZChyZWNvcmQuU2V0UHJlY3Npc2lvbihwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRleHQudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDExLzE2LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4vV2lkZ2V0L1dpZGdldCc7XHJcbmltcG9ydCB7IElucHV0LCBUZXh0QXJlYSB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEpTWChwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVRleHQ+KSB7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IFJlYWN0LnVzZVN0YXRlPFRleHQ+KG5ldyBUZXh0KHByb3BzKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyB3aWR0aDogcHJvcHMuV2lkdGgsIGhlaWdodDogcHJvcHMuSGVpZ2h0IH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wid2lkZ2l0LWxhYmVsXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBcIiArIHN0eWxlc1tcIndpZGdpdC1jb250cm9sc1wiXX0gdGl0bGU9J1dpZGdldCBTZXR0aW5ncycgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKHRydWUpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6IDMwfX0+e3Byb3BzLkpTT04uVGV4dCB9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxXaWRnZXQgey4uLnByb3BzfSBSZWNvcmQ9e3JlY29yZH0gVG9nZ2xlPXt0b2dnbGV9IFNldFRvZ2dsZT17KGJvb2wpID0+IHNldFRvZ2dsZShib29sKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pVGV4dD4+IEZpZWxkPSdMYWJlbCcgUmVjb3JkPXtyZWNvcmR9IFR5cGU9J3RleHQnIFNldHRlcj17KHIpID0+IHNldFJlY29yZChuZXcgVGV4dChyKSl9IFZhbGlkPXsoZmllbGQpID0+IHRydWV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5XaWR0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtyZWNvcmQ/LldpZHRofSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UmVjb3JkKG5ldyBUZXh0KHsgLi4ucmVjb3JkLCBXaWR0aDogcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkgfSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFRleHQoeyAuLi5yZWNvcmQsIFdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAtIDIwMCB9KSl9PkZ1bGwgV2lkdGg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYTxUcmVuREFQLmlUZXh0PiBSZWNvcmQ9e3JlY29yZC5KU09OfSBGaWVsZD1cIlRleHRcIiBSb3dzPXsxMH0gU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKG5ldyBUZXh0KHsgLi4ucmVjb3JkLCBKU09OOiB7IC4uLnIgfSB9KSl9IFZhbGlkPXsoZmllbGQpID0+IHRydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufSIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBBeGlzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMi8xNy8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IFRyZW5kIH0gZnJvbSAnLi4vLi4vLi4vSW1wbGVtZW50YXRpb25zJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IHsgQ3Jvc3NNYXJrIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF4aXMgKHByb3BzOiB7IEluZGV4OiBudW1iZXIsIEF4aXM6IFRyZW5EQVAuaVlBeGlzLCBXaWRnZXQ6IFRyZW5kLCBDYWxsYmFjazogKCkgPT4gdm9pZCB9KXtcclxuICAgIGNvbnN0IGZpcnN0UmVuZGVyID0gUmVhY3QudXNlUmVmKHRydWUpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmlyc3RSZW5kZXIuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vY29uc3QgW2JpbnMsIHNldEJpbnNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihwcm9wcy5TZXJpZXM/LkJpbkNvdW50ID8/IDEwKTtcclxuICAgIGNvbnN0IFt1bml0cywgc2V0VW5pdHNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihwcm9wcy5BeGlzLlVuaXRzKTtcclxuICAgIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGU8J2xlZnQnIHwgJ3JpZ2h0Jz4ocHJvcHMuQXhpcy5Qb3NpdGlvbik7XHJcbiAgICBjb25zdCBbbWluLCBzZXRNaW5dID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihwcm9wcy5BeGlzLk1pbik7XHJcbiAgICBjb25zdCBbbWF4LCBzZXRNYXhdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihwcm9wcy5BeGlzLk1heCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWZpcnN0UmVuZGVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcHJvcHMuV2lkZ2V0LlVwZGF0ZUF4aXMocHJvcHMuSW5kZXgsIFwiVW5pdHNcIiwgdW5pdHMpO1xyXG4gICAgICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1bml0c10pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWZpcnN0UmVuZGVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcHJvcHMuV2lkZ2V0LlVwZGF0ZUF4aXMocHJvcHMuSW5kZXgsIFwiUG9zaXRpb25cIiwgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtwb3NpdGlvbl0pO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWZpcnN0UmVuZGVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcHJvcHMuV2lkZ2V0LlVwZGF0ZUF4aXMocHJvcHMuSW5kZXgsIFwiTWF4XCIsIG1heCk7XHJcbiAgICAgICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFttYXhdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJzdFJlbmRlci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHByb3BzLldpZGdldC5VcGRhdGVBeGlzKHByb3BzLkluZGV4LCBcIk1pblwiLCBtaW4pO1xyXG4gICAgICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttaW5dKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UG9zaXRpb248L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3Bvc2l0aW9ufSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0UG9zaXRpb24oZXZ0LnRhcmdldC52YWx1ZSBhcyAoJ2xlZnQnIHwgJ3JpZ2h0JykpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGVmdFwiPkxlZnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmlnaHRcIj5SaWdodDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaVlBeGlzPiBGaWVsZD0nVW5pdHMnIFJlY29yZD17cHJvcHMuQXhpc30gVHlwZT0ndGV4dCcgU2V0dGVyPXsocikgPT4gc2V0VW5pdHMoci5Vbml0cyl9IFZhbGlkPXsoZmllbGQpID0+IHRydWV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pWUF4aXM+IEZpZWxkPSdNaW4nIExhYmVsPSdNaW4nIFJlY29yZD17cHJvcHMuQXhpc30gVHlwZT0nbnVtYmVyJyBTZXR0ZXI9eyhyKSA9PiBzZXRNaW4oci5NaW4pfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaVlBeGlzPiBGaWVsZD0nTWF4JyBSZWNvcmQ9e3Byb3BzLkF4aXN9IFR5cGU9J251bWJlcicgU2V0dGVyPXsocikgPT4gc2V0TWF4KHIuTWF4KX0gVmFsaWQ9eyhmaWVsZCkgPT4gdHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDE2IH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuV2lkZ2V0LkNhbGN1bGF0ZUF4aXNSYW5nZSgneScsIHByb3BzLkluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9fT5Vc2UgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTFcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCIgc3R5bGU9e3sgdG9wOiAzMCB9fSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuV2lkZ2V0LlJlbW92ZUF4aXMocHJvcHMuSW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH19PntDcm9zc01hcmt9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFNlcmllc1BpY2tlci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDIvMTcvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IENoZWNrQm94IH0gZnJvbSAnQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcyc7XHJcblxyXG5pbXBvcnQgQWRkaXRpb25hbEluZm9YREEgZnJvbSAnLi4vV2lkZ2V0L1hEQS9BZGRpdGlvbmFsSW5mbyc7XHJcbmltcG9ydCBBZGRpdGlvbmFsSW5mb09wZW5IaXN0b3JpYW4gZnJvbSAnLi4vV2lkZ2V0L09wZW5IaXN0b3JpYW4vQWRkaXRpb25hbEluZm8nO1xyXG5cclxuaW1wb3J0IHsgQ3Jvc3NNYXJrIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgVHJlbmQgfSBmcm9tICcuLi8uLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRldGltZS9jc3MvcmVhY3QtZGF0ZXRpbWUuY3NzXCI7XHJcbmltcG9ydCBBZGRpdGlvbmFsSW5mbyBmcm9tICcuLi9XaWRnZXQvT3Blbkhpc3Rvcmlhbi9BZGRpdGlvbmFsSW5mbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJpZXNQaWNrZXIocHJvcHM6IHsgSW5kZXg6IG51bWJlciwgVHlwZTogVHJlbkRBUC5EYXRhU291cmNlVHlwZSwgU2VyaWVzOiBUcmVuREFQLmlUcmVuZFNlcmllcywgRGF0YTogVHJlbkRBUC5pRGF0YVNldFJldHVyblR5cGUsIFdpZGdldDogVHJlbmQsIENhbGxiYWNrOiAoKSA9PiB2b2lkIH0pe1xyXG4gICAgY29uc3QgW2F4aXMsIHNldEF4aXNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihwcm9wcy5TZXJpZXMuQXhpcyk7XHJcbiAgICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4ocHJvcHMuU2VyaWVzLkNvbG9yKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQ+KHByb3BzLlNlcmllcy5GaWVsZCk7XHJcbiAgICBjb25zdCBbc2hvd0V2ZW50cywgc2V0U2hvd0V2ZW50c10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihwcm9wcy5TZXJpZXMuU2hvd0V2ZW50cyk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLldpZGdldC5VcGRhdGVTZXJpZXMocHJvcHMuSW5kZXgsIFwiQ29sb3JcIiwgY29sb3IpO1xyXG4gICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICB9LCBbY29sb3JdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5JbmRleCwgXCJGaWVsZFwiLCB0eXBlKTtcclxuICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgfSwgW3R5cGVdKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5JbmRleCwgXCJTaG93RXZlbnRzXCIsIHNob3dFdmVudHMpO1xyXG4gICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICB9LCBbc2hvd0V2ZW50c10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5JbmRleCwgXCJBeGlzXCIsIGF4aXMpO1xyXG4gICAgICAgIHByb3BzLldpZGdldC5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3knKTtcclxuICAgICAgICBwcm9wcy5XaWRnZXQuQ2FsY3VsYXRlQXhpc1JhbmdlKCd4Jyk7XHJcbiAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuICAgIH0sIFtheGlzXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIFNob3dBZGRpdGlvbkluZm8oKSB7XHJcbiAgICAgICAgaWYgKHByb3BzLlR5cGUgPT09ICdUcmVuREFQREInKVxyXG4gICAgICAgICAgICByZXR1cm4gPEFkZGl0aW9uYWxJbmZvWERBIEluZGV4PXtwcm9wcy5JbmRleH0gRGF0YT17cHJvcHMuRGF0YSBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhIH0gLz47XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuVHlwZSA9PT0gJ09wZW5IaXN0b3JpYW4nKVxyXG4gICAgICAgICAgICByZXR1cm4gPEFkZGl0aW9uYWxJbmZvT3Blbkhpc3RvcmlhbiBEYXRhPXtwcm9wcy5EYXRhIGFzIFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm59IC8+O1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3Byb3BzLlNlcmllcy5MYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtTaG93QWRkaXRpb25JbmZvKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RmllbGQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3R5cGV9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRUeXBlKGV2dC50YXJnZXQudmFsdWUgYXMgVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRGaWVsZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXZlcmFnZVwiPkF2Zzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWluaW11bVwiPk1pbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWF4aW11bVwiPk1heDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+WUF4aXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2F4aXN9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRBeGlzKHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5XaWRnZXQuSlNPTi5ZQXhpcy5tYXAoKGF4aXMsIGluZGV4KSA9PiA8b3B0aW9uIHZhbHVlPXtpbmRleH0ga2V5PXtpbmRleH0+e2F4aXMuVW5pdHN9PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkNvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2NvbG9yfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q29sb3IoZXZ0LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuV2lkZ2V0LlJlbW92ZVNlcmllcyhwcm9wcy5JbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e0Nyb3NzTWFya308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyhwcm9wcy5UeXBlID09PSAnVHJlbkRBUERCJyAmJiAocHJvcHMuRGF0YSBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhKS5FdmVudHMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94PFRyZW5EQVAuaVRyZW5kU2VyaWVzPiBSZWNvcmQ9e3Byb3BzLlNlcmllc30gRmllbGQ9J1Nob3dFdmVudHMnIExhYmVsPSdTaG93IEV2ZW50cycgU2V0dGVyPXsocikgPT4gc2V0U2hvd0V2ZW50cyghc2hvd0V2ZW50cyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDogbnVsbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFRyZW5kLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xMy8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQ2hlY2tCb3gsIFNlbGVjdCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5cclxuaW1wb3J0IFdpZGdldCwgeyBTZXJpZXNTZWxlY3QgfSBmcm9tICcuLi9XaWRnZXQvV2lkZ2V0JztcclxuaW1wb3J0IEFkZGl0aW9uYWxJbmZvWERBIGZyb20gJy4uL1dpZGdldC9YREEvQWRkaXRpb25hbEluZm8nO1xyXG5pbXBvcnQgQWRkaXRpb25hbEluZm9PcGVuSGlzdG9yaWFuIGZyb20gJy4uL1dpZGdldC9PcGVuSGlzdG9yaWFuL0FkZGl0aW9uYWxJbmZvJztcclxuaW1wb3J0IHsgQ3Jvc3NNYXJrLCBQbHVzIH0gZnJvbSAnLi4vLi4vLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgVHJlbmQgfSBmcm9tICcuLi8uLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBEYXRldGltZSBmcm9tICdyZWFjdC1kYXRldGltZSc7XHJcbmltcG9ydCBcInJlYWN0LWRhdGV0aW1lL2Nzcy9yZWFjdC1kYXRldGltZS5jc3NcIjtcclxuaW1wb3J0IFN3aXRjaEJ1dHRvbiBmcm9tICdib290c3RyYXAtc3dpdGNoLWJ1dHRvbi1yZWFjdCc7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBBeGlzIGZyb20gJy4vQXhpcyc7XHJcbmltcG9ydCBTZXJpZXNQaWNrZXIgZnJvbSAnLi9TZXJpZXNQaWNrZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJlbmRKU1gocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlUcmVuZD4pIHtcclxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gUmVhY3QudXNlU3RhdGU8VHJlbmQ+KG5ldyBUcmVuZChwcm9wcykpO1xyXG4gICAgY29uc3QgaG92ZXIgPSBSZWFjdC51c2VSZWY8bnVtYmVyPigtMTApO1xyXG4gICAgY29uc3Qgc3ZncyA9IFJlYWN0LnVzZVJlZjxkMy5TZWxlY3Rpb248U1ZHU1ZHRWxlbWVudCwgdW5rbm93biwgbnVsbCwgdW5kZWZpbmVkPltdPihbXSk7XHJcbiAgICBjb25zdCBtYXJnaW4gPSBSZWFjdC51c2VSZWY8eyBib3R0b206IG51bWJlciwgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmlnaHQ6IG51bWJlciB9Pih7IGJvdHRvbTogNTAsIGxlZnQ6IDUwLCB0b3A6IDQwLCByaWdodDogNTAgfSk7XHJcbiAgICBjb25zdCBbY2hhcnRBY3Rpb24sIHNldENoYXJ0QWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuQ2hhcnRBY3Rpb24+KCdQYW4nKTtcclxuICAgIGNvbnN0IGNoYXJ0QWN0aW9uUmVmID0gUmVhY3QudXNlUmVmPFRyZW5EQVAuQ2hhcnRBY3Rpb24+KCdQYW4nKTtcclxuICAgIGNvbnN0IHNldEhvdmVyID0gUmVhY3QudXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgSGFuZGxlSG92ZXJVcGRhdGUodmFsdWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0UmVjb3JkKG5ldyBUcmVuZChwcm9wcykpO1xyXG4gICAgICAgIH0sIFtwcm9wc10pO1xyXG5cclxuICAgICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFydEFjdGlvblJlZi5jdXJyZW50ID0gY2hhcnRBY3Rpb247XHJcbiAgICAgICAgfSwgW2NoYXJ0QWN0aW9uXSk7XHJcblxyXG4gICAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemUocmVjb3JkKVxyXG4gICAgICAgIH0sIFtyZWNvcmRdKVxyXG5cclxuICAgICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRSZWNvcmQobmV3IFRyZW5kKHsgLi4ucmVjb3JkLCBIZWlnaHQ6IHByb3BzLkhlaWdodCB9KSlcclxuICAgICAgICB9LCBbcHJvcHMuSGVpZ2h0XSlcclxuXHJcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0UmVjb3JkKG5ldyBUcmVuZCh7IC4uLnJlY29yZCwgRGF0YTogcHJvcHMuRGF0YSB9KSk7XHJcbiAgICAgICAgfSwgW3Byb3BzLkRhdGFdKTtcclxuXHJcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHsgZDMuc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpOyB9XHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSW5pdGlhbGl6ZShzZXR0aW5nczogVHJlbmQpIHtcclxuICAgICAgICBsZXQgc3ZnQ291bnQgPSAxO1xyXG4gICAgICAgIGlmIChzZXR0aW5ncy5KU09OLlNwbGl0ICYmIHNldHRpbmdzLkpTT04uU3BsaXRUeXBlID09PSAnQXhpcycpIHtcclxuICAgICAgICAgICAgbWFyZ2luLmN1cnJlbnQgPSB7IGJvdHRvbTogNTAsIGxlZnQ6IDUwLCB0b3A6IDQwLCByaWdodDogNTAgfTtcclxuICAgICAgICAgICAgc3ZnQ291bnQgPSBzZXR0aW5ncy5KU09OLllBeGlzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2V0dGluZ3MuSlNPTi5TcGxpdCAmJiBzZXR0aW5ncy5KU09OLlNwbGl0VHlwZSA9PT0gJ1NlcmllcycpIHtcclxuICAgICAgICAgICAgbWFyZ2luLmN1cnJlbnQgPSB7IGJvdHRvbTogNTAsIGxlZnQ6IDUwLCB0b3A6IDQwLCByaWdodDogNTAgfVxyXG4gICAgICAgICAgICBzdmdDb3VudCA9IHNldHRpbmdzLkpTT04uU2VyaWVzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBtYXJnaW4uY3VycmVudCA9IHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNTAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAoc2V0dGluZ3MuSlNPTi5ZQXhpcy5maWx0ZXIoYXhpcyA9PiBheGlzLlBvc2l0aW9uID09PSAnbGVmdCcpLmxlbmd0aCA9PSAwID8gNTAgOiBzZXR0aW5ncy5KU09OLllBeGlzLmZpbHRlcihheGlzID0+IGF4aXMuUG9zaXRpb24gPT09ICdsZWZ0JykubGVuZ3RoICogNTApLFxyXG4gICAgICAgICAgICAgICAgdG9wOiA0MCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAoc2V0dGluZ3MuSlNPTi5ZQXhpcy5maWx0ZXIoYXhpcyA9PiBheGlzLlBvc2l0aW9uID09PSAncmlnaHQnKS5sZW5ndGggPT0gMCA/IDUwIDogc2V0dGluZ3MuSlNPTi5ZQXhpcy5maWx0ZXIoYXhpcyA9PiBheGlzLlBvc2l0aW9uID09PSAncmlnaHQnKS5sZW5ndGggKiA1MClcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHNldHRpbmdzLkpTT04uTGVnZW5kKSBtYXJnaW4uY3VycmVudC5yaWdodCA9IG1hcmdpbi5jdXJyZW50LnJpZ2h0ICsgMjAwO1xyXG5cclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBwcm9wcy5IZWlnaHQgLyBzdmdDb3VudDtcclxuXHJcbiAgICAgICAgaWYgKHN2Z3MuY3VycmVudC5sZW5ndGggIT09IHN2Z0NvdW50KSB7XHJcbiAgICAgICAgICAgIHN2Z3MuY3VycmVudCA9IFtdO1xyXG4gICAgICAgICAgICBkMy5zZWxlY3QocmVmLmN1cnJlbnQpLnNlbGVjdEFsbCgnc3ZnJykucmVtb3ZlKClcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdmdDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QocmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzZXR0aW5ncy5XaWR0aClcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0Jywgc3ZnSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgc3Zncy5jdXJyZW50LnB1c2goc3ZnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgeCA9IEdldFhTY2FsZShzZXR0aW5ncyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHN2Z3MuY3VycmVudC5mb3JFYWNoKChzdmcsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLkpTT04uU3BsaXQgJiYgc2V0dGluZ3MuSlNPTi5TcGxpdFR5cGUgPT09ICdBeGlzJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBJbml0aWFsaXplU3BsaXRPbkF4aXMoc2V0dGluZ3MsIHN2ZywgeCwgaSk7XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5KU09OLlNwbGl0ICYmIHNldHRpbmdzLkpTT04uU3BsaXRUeXBlID09PSAnU2VyaWVzJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBJbml0aWFsaXplU3BsaXRPblNlcmllcyhzZXR0aW5ncywgc3ZnLCB4LCBpKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEluaXRpYWxpemVOb3RTcGxpdChzZXR0aW5ncywgc3ZnLCB4KTtcclxuICAgICAgICB9KTsgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemVTcGxpdE9uU2VyaWVzKHNldHRpbmdzOiBUcmVuZCwgc3ZnLCB4OiBkMy5TY2FsZVRpbWU8bnVtYmVyLCBudW1iZXI+LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBzdmdIZWlnaHQgPSBwYXJzZUludChzdmcuYXR0cignaGVpZ2h0JykpO1xyXG5cclxuICAgICAgICBjb25zdCBzZXJpZXMgPSBzZXR0aW5ncy5KU09OLlNlcmllc1tpXTtcclxuICAgICAgICBjb25zdCBheGlzID0gc2V0dGluZ3MuSlNPTi5ZQXhpc1tzZXJpZXMuQXhpc107XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBzZXJpZXMuRmllbGQ7XHJcblxyXG4gICAgICAgIEFkZFhBeGlzKHN2ZywgeCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHkgPSBHZXRZU2NhbGUoc3ZnSGVpZ2h0LCBheGlzKTtcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKCdnLnlheGlzJykucmVtb3ZlKCk7XHJcbiAgICAgICAgQWRkWUF4aXNMZWZ0KGF4aXMsIHN2ZywgeSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9ICgocmVjb3JkLkRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSBzZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXSkuZmluZChkcyA9PiBkcy5JRCA9PT0gc2VyaWVzLklEKT8uRGF0YSA/PyBbXSkuZmlsdGVyKGRzID0+IG1vbWVudChkcy5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSA+PSBzZXR0aW5ncy5KU09OLk1pbiAmJiBtb21lbnQoZHMuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkgPD0gc2V0dGluZ3MuSlNPTi5NYXggJiYgZHNbZmllbGRdID49IGF4aXMuTWluICYmIGRzW2ZpZWxkXSA8PSBheGlzLk1heClcclxuICAgICAgICBjb25zdCBsaW5lRnVuYyA9IGQzLmxpbmU8VHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnQ+KCkueChkZCA9PiB4KG1vbWVudChkZC5UaW1lc3RhbXAsICdZWVlZLU1NLUREVEhIOm1tOnNzLmZmZlonKSkpLnkoZGQgPT4geShkZFtzZXJpZXMuRmllbGRdKSk7XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmxpbmVcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy5saW5lJylcclxuICAgICAgICAgICAgLmRhdGEoW2ZpbHRlcmVkRGF0YV0gYXMgVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXVtdKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgLmNsYXNzZWQoJ2xpbmUnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgc2VyaWVzLkNvbG9yKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lRnVuYyhkKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoc2VyaWVzLlNob3dFdmVudHMpIHtcclxuICAgICAgICAgICAgQWRkRXZlbnRMaW5lKHNlcmllcywgc3ZnLCB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmxlZ2VuZFwiKS5yZW1vdmUoKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3MuSlNPTi5MZWdlbmQpIHtcclxuICAgICAgICAgICAgQWRkTGVnZW5kKHN2ZywgW3Nlcmllc10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3ZnLm9uKCdtb3VzZW1vdmUnLCAoZDogTW91c2VFdmVudCkgPT4gc2V0SG92ZXIoZC5vZmZzZXRYKSk7XHJcbiAgICAgICAgc3ZnLm9uKCdtb3VzZWRvd24nLCAoZDogTW91c2VFdmVudCkgPT4gSGFuZGxlQ2hhcnRBY3Rpb24oZCwgc3ZnLCB4KSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemVTcGxpdE9uQXhpcyhzZXR0aW5nczogVHJlbmQsIHN2ZywgeDogZDMuU2NhbGVUaW1lPG51bWJlciwgbnVtYmVyPiwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IHBhcnNlSW50KHN2Zy5hdHRyKCdoZWlnaHQnKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBzZXR0aW5ncy5KU09OLllBeGlzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBzZXJpZXMgPSBzZXR0aW5ncy5KU09OLlNlcmllcy5maWx0ZXIoKHMpID0+IHMuQXhpcyA9PT0gaSkubWFwKHMgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLnMsXHJcbiAgICAgICAgICAgICAgICBEYXRhOiAoKHJlY29yZC5EYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdKS5maW5kKGRzID0+IGRzLklEID09PSBzLklEKT8uRGF0YSA/PyBbXSkuZmlsdGVyKGRzID0+IG1vbWVudChkcy5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSA+PSBzZXR0aW5ncy5KU09OLk1pbiAmJiBtb21lbnQoZHMuVGltZXN0YW1wKS50b0RhdGUoKS5nZXRUaW1lKCkgPD0gc2V0dGluZ3MuSlNPTi5NYXggJiYgZHNbcy5GaWVsZF0gPj0gYXhpcy5NaW4gJiYgZHNbcy5GaWVsZF0gPD0gYXhpcy5NYXgpLm1hcChwb2ludCA9PiBbcG9pbnQuVGltZXN0YW1wLCBwb2ludFtzLkZpZWxkXV0pXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIEFkZFhBeGlzKHN2ZywgeCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB5ID0gR2V0WVNjYWxlKHN2Z0hlaWdodCwgYXhpcyk7XHJcbiAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cueWF4aXMnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgQWRkWUF4aXNMZWZ0KGF4aXMsIHN2ZywgeSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaW5lRnVuYyA9IGQzLmxpbmU8W3N0cmluZywgbnVtYmVyXT4oKS54KGRkID0+IHgobW9tZW50KGRkWzBdLCAnWVlZWS1NTS1ERFRISDptbTpzcy5mZmZaJykpKS55KGRkID0+IHkoZGRbMV0pKTtcclxuXHJcbiAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmxpbmVcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmxpbmVcIilcclxuICAgICAgICAgICAgICAgIC5kYXRhKHNlcmllcylcclxuICAgICAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdsaW5lJywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCAocykgPT4gcy5Db2xvcilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAocykgPT4gbGluZUZ1bmMocy5EYXRhIGFzIFtzdHJpbmcsIG51bWJlcl1bXSkpXHJcblxyXG4gICAgICAgICAgICBzZXJpZXMuZm9yRWFjaChzID0+IEFkZEV2ZW50TGluZShzLHN2ZywgeCkpXHJcblxyXG4gICAgICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5sZWdlbmRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5KU09OLkxlZ2VuZCkge1xyXG4gICAgICAgICAgICAgICAgQWRkTGVnZW5kKHN2Zywgc2VyaWVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHN2Zy5vbignbW91c2Vtb3ZlJywgKGQ6IE1vdXNlRXZlbnQpID0+IHNldEhvdmVyKGQub2Zmc2V0WCkpO1xyXG4gICAgICAgICAgICBzdmcub24oJ21vdXNlZG93bicsIChkOiBNb3VzZUV2ZW50KSA9PiBIYW5kbGVDaGFydEFjdGlvbihkLCBzdmcsIHgpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBJbml0aWFsaXplTm90U3BsaXQoc2V0dGluZ3M6IFRyZW5kLCBzdmcsIHg6IGQzLlNjYWxlVGltZTxudW1iZXIsIG51bWJlcj4pIHtcclxuICAgICAgICBBZGRYQXhpcyhzdmcsIHgpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBzZXR0aW5ncy5KU09OLllBeGlzLm1hcChheGlzID0+IEdldFlTY2FsZShzZXR0aW5ncy5IZWlnaHQsIGF4aXMpKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy55YXhpcycpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc2V0dGluZ3MuSlNPTi5ZQXhpcy5tYXAoKGF4aXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhO1xyXG4gICAgICAgICAgICBpZiAoYXhpcy5Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kID0gc2V0dGluZ3MuSlNPTi5ZQXhpcy5maWx0ZXIoYXhpcyA9PiBheGlzLlBvc2l0aW9uID09PSAnbGVmdCcpLmZpbmRJbmRleChheGlzID0+IGF4aXMgPT09IHNldHRpbmdzLkpTT04uWUF4aXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIEFkZFlBeGlzTGVmdChheGlzLCBzdmcsIHlbaW5kZXhdLCBmYWxzZSwgaW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmQgPSBzZXR0aW5ncy5KU09OLllBeGlzLmZpbHRlcihheGlzID0+IGF4aXMuUG9zaXRpb24gPT09ICdyaWdodCcpLmZpbmRJbmRleChheGlzID0+IGF4aXMgPT09IHNldHRpbmdzLkpTT04uWUF4aXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIEFkZFlBeGlzUmlnaHQoYXhpcywgc3ZnLCB5W2luZGV4XSwgaW5kKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5sZWdlbmRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLkpTT04uTGVnZW5kKSB7XHJcbiAgICAgICAgICAgIEFkZExlZ2VuZChzdmcsIHNldHRpbmdzLkpTT04uU2VyaWVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmxpbmVcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubGluZVwiKVxyXG4gICAgICAgICAgICAuZGF0YShzZXR0aW5ncy5KU09OLlNlcmllcylcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoXCJsaW5lXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCAoZDogVHJlbkRBUC5pVHJlbmRTZXJpZXMpID0+IGQuQ29sb3IpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZDogVHJlbkRBUC5pVHJlbmRTZXJpZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB5U2NhbGUgPSB5W2QuQXhpc107XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZUZ1bmMgPSBkMy5saW5lPFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50PigpLngoZGQgPT4geChtb21lbnQoZGQuVGltZXN0YW1wLCAnWVlZWS1NTS1ERFRISDptbTpzcy5mZmZaJykpKS55KGRkID0+IHlTY2FsZShkZFtkLkZpZWxkXSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkRGF0YSA9ICgocmVjb3JkLkRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSBkLkRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW10pLmZpbmQoZHMgPT4gZHMuSUQgPT09IGQuSUQpPy5EYXRhID8/IFtdKS5maWx0ZXIoZHMgPT4gbW9tZW50KGRzLlRpbWVzdGFtcCkudG9EYXRlKCkuZ2V0VGltZSgpID49IHNldHRpbmdzLkpTT04uTWluICYmIG1vbWVudChkcy5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSA8PSBzZXR0aW5ncy5KU09OLk1heCAmJiBkc1tkLkZpZWxkXSA+PSBzZXR0aW5ncy5KU09OLllBeGlzW2QuQXhpc10/Lk1pbiAmJiBkc1tkLkZpZWxkXSA8PSBzZXR0aW5ncy5KU09OLllBeGlzW2QuQXhpc10/Lk1heClcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lRnVuYyhmaWx0ZXJlZERhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIHN2Zy5vbignbW91c2Vtb3ZlJywgKGQ6IE1vdXNlRXZlbnQpID0+IHNldEhvdmVyKGQub2Zmc2V0WCkpXHJcbiAgICAgICAgc3ZnLm9uKCdtb3VzZWRvd24nLCAoZDogTW91c2VFdmVudCkgPT4gSGFuZGxlQ2hhcnRBY3Rpb24oZCwgc3ZnLCB4KSlcclxuXHJcbiAgICAgICAgc2V0dGluZ3MuSlNPTi5TZXJpZXMuZmlsdGVyKHNlcmllcyA9PiBzZXJpZXMuU2hvd0V2ZW50cykuZm9yRWFjaChzZXJpZXMgPT4gQWRkRXZlbnRMaW5lKHNlcmllcywgc3ZnLCB4KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQWRkTGVnZW5kKHN2Zywgc2VyaWVzOiBUcmVuREFQLmlUcmVuZFNlcmllc1tdKSB7XHJcbiAgICAgICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcGFyc2VJbnQoc3ZnLmF0dHIoJ2hlaWdodCcpKTtcclxuICAgICAgICBjb25zdCBzdmdXaWR0aCA9IHBhcnNlSW50KHN2Zy5hdHRyKCd3aWR0aCcpKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGVnZW5kID0gc3ZnLnNlbGVjdEFsbCgnZy5sZWdlbmQnKVxyXG4gICAgICAgICAgICAuZGF0YShbc2VyaWVzXSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxyXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3N2Z1dpZHRoIC0gMjAwfSwke21hcmdpbi5jdXJyZW50LnRvcH0pYCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlZ2VuZFJvd3MgPSBsZWdlbmQuc2VsZWN0QWxsKCdnLmxlZ2VuZFJvdycpXHJcbiAgICAgICAgICAgIC5kYXRhKGQgPT4gZClcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmRyb3cnKVxyXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMTAsJHtpICogMzB9KWApO1xyXG5cclxuICAgICAgICBsZWdlbmRSb3dzLmFwcGVuZCgncmVjdCcpLmF0dHIoJ2hlaWdodCcsIDIwKS5hdHRyKCd3aWR0aCcsIDIwKS5hdHRyKCdmaWxsJywgZCA9PiBkLkNvbG9yKVxyXG4gICAgICAgIGxlZ2VuZFJvd3MuYXBwZW5kKCd0ZXh0JykuYXR0cigneCcsIDMwKS5hdHRyKCd5JywgMTUpXHJcbiAgICAgICAgICAudGV4dChmdW5jdGlvbihkKXtcclxuICAgICAgICAgICAgICBpZiAoZC5MYWJlbC5sZW5ndGggPiAxNSlcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGQuTGFiZWwuc2xpY2UoMCwgMTUpICsgJy4uLic7XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZC5MYWJlbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGxlZ2VuZFJvd3MuYXBwZW5kKCd0aXRsZScpLnRleHQoZCA9PiBkLkxhYmVsKVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgZnVuY3Rpb24gQWRkRXZlbnRMaW5lKHNlcmllczogVHJlbkRBUC5pVHJlbmRTZXJpZXMsIHN2ZywgeCkge1xyXG4gICAgICAgIGNvbnN0IHN2Z0hlaWdodCA9IHBhcnNlSW50KHN2Zy5hdHRyKCdoZWlnaHQnKSlcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9ICgocmVjb3JkLkRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSBzZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhW10gPz8gW10pLmZpbmQoZHMgPT4gZHMuSUQudG9TdHJpbmcoKSA9PT0gc2VyaWVzLklEKT8uRXZlbnRzID8/IFtdKVxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cuZXZlbnQtbGluZScpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGcgPSBzdmcuc2VsZWN0QWxsKCdnLmV2ZW50LWxpbmUnKVxyXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgLmNsYXNzZWQoJ2V2ZW50LWxpbmUnLCB0cnVlKVxyXG4gICAgICAgIGcuYXBwZW5kKCdwYXRoJylcclxuICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsICcycHgnKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiBgTTAsJHtzdmdIZWlnaHQgLSBtYXJnaW4uY3VycmVudC5ib3R0b20gLSBtYXJnaW4uY3VycmVudC50b3B9TC0xMCwke3N2Z0hlaWdodCAtIG1hcmdpbi5jdXJyZW50LmJvdHRvbSAtIG1hcmdpbi5jdXJyZW50LnRvcCArIDEwfSxMMTAsJHtzdmdIZWlnaHQgLSBtYXJnaW4uY3VycmVudC5ib3R0b20gLSBtYXJnaW4uY3VycmVudC50b3AgKyAxMH1MMCwke3N2Z0hlaWdodCAtIG1hcmdpbi5jdXJyZW50LmJvdHRvbSAtIG1hcmdpbi5jdXJyZW50LnRvcH1aYClcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiBgdHJhbnNsYXRlKCR7eChtb21lbnQoZC5TdGFydFRpbWUsICdZWVlZLU1NLUREVEhIOm1tOnNzLmZmZicpKX0sJHttYXJnaW4uY3VycmVudC50b3B9KWApXHJcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmVkJylcclxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAncmVkJylcclxuICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoZSwgZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4ocmVjb3JkLkRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSBzZXJpZXMuRGF0YVNvdXJjZUlEKS5EYXRhU291cmNlLk9wZW5TRUUgKyAnP2V2ZW50SUQ9JyArIGQuSUQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQWRkWEF4aXMoc3ZnLCB4KSB7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSBwYXJzZUludChzdmcuYXR0cignd2lkdGgnKSk7XHJcbiAgICAgICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcGFyc2VJbnQoc3ZnLmF0dHIoJ2hlaWdodCcpKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy54YXhpcycpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneGF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5jdXJyZW50LmJvdHRvbSkgKyBcIilcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcclxuXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneGF4aXMnLCB0cnVlKS5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHN2Z1dpZHRoIC8gMikgKyBcIixcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uY3VycmVudC5ib3R0b20gLyAzKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAudGV4dChcIlRpbWVcIilcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQWRkWUF4aXNMZWZ0KGF4aXM6IFRyZW5EQVAuaVlBeGlzLCBzdmcsIHksIHJvdGF0ZTogYm9vbGVhbiA9IHRydWUsIGluZGV4OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSBwYXJzZUludChzdmcuYXR0cignd2lkdGgnKSk7XHJcbiAgICAgICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcGFyc2VJbnQoc3ZnLmF0dHIoJ2hlaWdodCcpKTtcclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd5YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKG1hcmdpbi5jdXJyZW50LmxlZnQgLSBpbmRleCAqIDUwKSArIFwiLDApXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpLnRpY2tzKE1hdGguZmxvb3Ioc3ZnSGVpZ2h0IC8gNTApICsgMSkudGlja0Zvcm1hdCgodmFsdWU6IG51bWJlcikgPT4gZDMuZm9ybWF0KFwifnNcIikodmFsdWUpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZCgneWF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC50ZXh0KGF4aXMuVW5pdHMpO1xyXG4gICAgICAgIGlmIChyb3RhdGUpXHJcbiAgICAgICAgICAgIHRleHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApIHRyYW5zbGF0ZSgtXCIgKyBzdmdIZWlnaHQgLyAyICsgXCIsXCIgKyAoKG1hcmdpbi5jdXJyZW50LmxlZnQgLSBpbmRleCAqIDUwKSAvIDMpICsgXCIpXCIpLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0ZXh0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyAobWFyZ2luLmN1cnJlbnQubGVmdCAtIGluZGV4ICogNTApICsgXCIsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmN1cnJlbnQuYm90dG9tIC8gMikgKyBcIilcIikuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBBZGRZQXhpc1JpZ2h0KGF4aXM6IFRyZW5EQVAuaVlBeGlzLCBzdmcsIHksIGluZGV4OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgY29uc3Qgc3ZnV2lkdGggPSBwYXJzZUludChzdmcuYXR0cignd2lkdGgnKSk7XHJcbiAgICAgICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcGFyc2VJbnQoc3ZnLmF0dHIoJ2hlaWdodCcpKTtcclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd5YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHN2Z1dpZHRoIC0gbWFyZ2luLmN1cnJlbnQucmlnaHQgKyBpbmRleCAqIDUwKSArIFwiLDApXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNSaWdodCh5KS50aWNrcyhNYXRoLmZsb29yKHN2Z0hlaWdodCAvIDUwKSArIDEpLnRpY2tGb3JtYXQoKHZhbHVlOiBudW1iZXIpID0+IGQzLmZvcm1hdChcIn5zXCIpKHZhbHVlKSkpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoJ3lheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAgICAgLnRleHQoYXhpcy5Vbml0cyk7XHJcbiAgICAgICAgICAgIHRleHQuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIChzdmdXaWR0aCAtIG1hcmdpbi5jdXJyZW50LnJpZ2h0ICsgaW5kZXggKiA1MCkgKyBcIixcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uY3VycmVudC5ib3R0b20gLyAyKSArIFwiKVwiKS5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0WFNjYWxlKHNldHRpbmdzOiBUcmVuZCkge1xyXG4gICAgICAgIHJldHVybiBkMy5zY2FsZVV0YygpXHJcbiAgICAgICAgICAgIC5kb21haW4oW3NldHRpbmdzLkpTT04uTWluLCBzZXR0aW5ncy5KU09OLk1heF0pICAgICAvLyBjYW4gdXNlIHRoaXMgaW5zdGVhZCBvZiAxMDAwIHRvIGhhdmUgdGhlIG1heCBvZiBkYXRhOiBkMy5tYXgoZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gK2QucHJpY2UgfSlcclxuICAgICAgICAgICAgLnJhbmdlKFttYXJnaW4uY3VycmVudC5sZWZ0LCBzZXR0aW5ncy5XaWR0aCAtIG1hcmdpbi5jdXJyZW50LnJpZ2h0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gR2V0WVNjYWxlKHN2Z0hlaWdodDogbnVtYmVyLCBheGlzOiBUcmVuREFQLmlZQXhpcykge1xyXG4gICAgICAgIHJldHVybiBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5yYW5nZShbc3ZnSGVpZ2h0IC0gbWFyZ2luLmN1cnJlbnQuYm90dG9tLCBtYXJnaW4uY3VycmVudC50b3BdKVxyXG4gICAgICAgICAgICAuZG9tYWluKFtheGlzLk1pbiwgYXhpcy5NYXhdKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZUhvdmVyVXBkYXRlKGhvdmVyOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoY2hhcnRBY3Rpb25SZWYuY3VycmVudCAhPT0gJ0NsaWNrJykgcmV0dXJuO1xyXG4gICAgICAgIHN2Z3MuY3VycmVudC5mb3JFYWNoKChzdmcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHBhcnNlSW50KHN2Zy5hdHRyKCdoZWlnaHQnKSkgLSBtYXJnaW4uY3VycmVudC50b3AgLSBtYXJnaW4uY3VycmVudC5ib3R0b207XHJcblxyXG4gICAgICAgICAgICBpZiAoaG92ZXIgPj0gbWFyZ2luLmN1cnJlbnQubGVmdCAmJiBob3ZlciA8PSAocHJvcHMuV2lkdGggLSBtYXJnaW4uY3VycmVudC5yaWdodCkpIHtcclxuICAgICAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cubW91c2Utb3ZlcicpLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbW91c2Utb3ZlcicsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGQgPT4gYE0gMCAwIFYgJHtoZWlnaHR9YClcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7aG92ZXJ9LCR7bWFyZ2luLmN1cnJlbnQudG9wfSlgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnZ3JheScpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZVJlc2V0KCkge1xyXG4gICAgICAgIHNldFJlY29yZChyZWNvcmQuQ2FsY3VsYXRlQXhpc1JhbmdlKCd4JykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZUNoYXJ0QWN0aW9uKGV2dDogTW91c2VFdmVudCwgc3ZnOiBkMy5TZWxlY3Rpb248U1ZHU1ZHRWxlbWVudCwgdW5rbm93biwgbnVsbCwgdW5kZWZpbmVkPiwgc2NhbGU6IGQzLlNjYWxlVGltZTxudW1iZXIsIG51bWJlcj4pIHtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUludChzdmcuYXR0cignaGVpZ2h0JykpO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gcGFyc2VJbnQoc3ZnLmF0dHIoJ3dpZHRoJykpO1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChldnQub2Zmc2V0WCA8IG1hcmdpbi5jdXJyZW50LmxlZnQgfHwgZXZ0Lm9mZnNldFggPiB3aWR0aCAtIG1hcmdpbi5jdXJyZW50LnJpZ2h0KSByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAoZXZ0Lm9mZnNldFkgPCBtYXJnaW4uY3VycmVudC50b3AgfHwgZXZ0Lm9mZnNldFkgPmhlaWdodCAtIG1hcmdpbi5jdXJyZW50LmJvdHRvbSkgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgaWYgKGNoYXJ0QWN0aW9uUmVmLmN1cnJlbnQgPT0gJ0NsaWNrJylcclxuICAgICAgICAgICAgT25DbGljayhldnQsIHN2Zywgc2NhbGUpO1xyXG4gICAgICAgIGVsc2UgaWYgKGNoYXJ0QWN0aW9uUmVmLmN1cnJlbnQgPT0gJ1BhbicpXHJcbiAgICAgICAgICAgIE9uUGFuKGV2dCwgc3ZnLCBzY2FsZSlcclxuICAgICAgICBlbHNlIGlmIChjaGFydEFjdGlvblJlZi5jdXJyZW50ID09ICdab29tWCcpXHJcbiAgICAgICAgICAgIE9uWFpvb20oZXZ0LCBzdmcsIHNjYWxlKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gT25DbGljayhldnQ6IE1vdXNlRXZlbnQsIHN2ZzogZDMuU2VsZWN0aW9uPFNWR1NWR0VsZW1lbnQsIHVua25vd24sIG51bGwsIHVuZGVmaW5lZD4sIHNjYWxlOiBkMy5TY2FsZVRpbWU8bnVtYmVyLCBudW1iZXI+KSB7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VJbnQoc3ZnLmF0dHIoJ2hlaWdodCcpKTtcclxuICAgICAgICBjb25zdCB0b29sdGlwSGVpZ2h0ID0gcmVjb3JkLkpTT04uU2VyaWVzLmxlbmd0aCAqIDE1O1xyXG4gICAgICAgIGlmIChldnQub2Zmc2V0WCA8IG1hcmdpbi5jdXJyZW50LmxlZnQgJiYgZXZ0Lm9mZnNldFggPiAocHJvcHMuV2lkdGggLSBtYXJnaW4uY3VycmVudC5yaWdodCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy5tb3VzZS1vdmVyMicpLnJlbW92ZSgpXHJcbiAgICAgICAgc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtb3VzZS1vdmVyMicsIHRydWUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgZCA9PiBgTSAwIDAgViAke2hlaWdodCAtIG1hcmdpbi5jdXJyZW50LmJvdHRvbSAtIG1hcmdpbi5jdXJyZW50LnRvcH1gKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7ZXZ0Lm9mZnNldFh9LCR7bWFyZ2luLmN1cnJlbnQudG9wfSlgKVxyXG4gICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ2dyZXknKVxyXG5cclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy5jaGFydHRvb2x0aXAnKS5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCB0b29sdGlwID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdjaGFydHRvb2x0aXAnKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7ZXZ0Lm9mZnNldFggKyAxNX0sJHtldnQub2Zmc2V0WSAtIHRvb2x0aXBIZWlnaHQvMn0pYCk7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRvb2x0aXAuYXBwZW5kKCdyZWN0JylcclxuICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnZ2FpbnNib3JvJylcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHJlY29yZC5KU09OLlNlcmllcy5sZW5ndGggKyAnZW0nKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCAyMDApXHJcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcclxuICAgICAgICAgICAgLmF0dHIoJ3knLDApXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IHRvb2x0aXAuYXBwZW5kKCd0ZXh0JylcclxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAwKVxyXG4gICAgICAgICAgICAuYXR0cigneScsIDApXHJcblxyXG4gICAgICAgIGxldCB3aWR0aCA9IDIwMDtcclxuICAgICAgICByZWNvcmQuSlNPTi5TZXJpZXMuZm9yRWFjaCgoc2VyaWVzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0b29sdGlwLmFwcGVuZCgncmVjdCcpLmF0dHIoJ3gnLCA1KS5hdHRyKCd5JywgYCR7aW5kZXh9ZW1gKS5hdHRyKCdoZWlnaHQnLCAnMWVtJykuYXR0cignd2lkdGgnLCAnMWVtJykuYXR0cignZmlsbCcsIHNlcmllcy5Db2xvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSByZWNvcmQuRGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT0gc2VyaWVzLkRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkYXRhU291cmNlLmZpbmQoZHMgPT4gZHMuSUQgPT0gc2VyaWVzLklEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGRhdGEubGVuZ3RoICogZXZ0Lm9mZnNldFggLyBwcm9wcy5XaWR0aCAqIC45NSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlaWwgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggKiBldnQub2Zmc2V0WCAvIHByb3BzLldpZHRoICogMS4wNSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3J0ZW5lZERhdGEgPSBkYXRhLnNsaWNlKGZsb29yLCBjZWlsKTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IHNob3J0ZW5lZERhdGEubWFwKGRhdHVtID0+ICh7IFZhbHVlOiBkYXR1bVtzZXJpZXMuRmllbGRdLCBEaXN0YW5jZTogTWF0aC5hYnMoZXZ0Lm9mZnNldFggLSBzY2FsZShtb21lbnQoZGF0dW0uVGltZXN0YW1wLCAnWVlZWS1NTS1ERFRISDptbTpzcy5mZmZaJykudG9EYXRlKCkuZ2V0VGltZSgpKSkgfSkpO1xyXG4gICAgICAgICAgICBkaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhLkRpc3RhbmNlID4gYi5EaXN0YW5jZSkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhLkRpc3RhbmNlID09IGIuRGlzdGFuY2UpIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdHVtID0gZDMuZm9ybWF0KCcuMmYnKShkaXN0WzBdLlZhbHVlKTtcclxuICAgICAgICAgICAgdGV4dC5hcHBlbmQoJ3RzcGFuJykudGV4dChzZXJpZXMuTGFiZWwgKyAnIC0gJyArIGRhdHVtKS5hdHRyKCd4JywgJzEuNWVtJykuYXR0cigneScsIGAke2luZGV4KzF9ZW1gKTtcclxuICAgICAgICAgICAgd2lkdGggPSB0ZXh0Lm5vZGUoKS5nZXRCQm94KCkud2lkdGggKyAyNSA+IHdpZHRoID8gdGV4dC5ub2RlKCkuZ2V0QkJveCgpLndpZHRoICsgMjUgIDogd2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVjdC5hdHRyKCd3aWR0aCcsIHdpZHRoKTtcclxuICAgICAgICBpZiAod2lkdGggPiBwcm9wcy5XaWR0aCAtIG1hcmdpbi5jdXJyZW50LnJpZ2h0IC0gZXZ0Lm9mZnNldFgpXHJcbiAgICAgICAgICAgIHRvb2x0aXAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7ZXZ0Lm9mZnNldFggLSAxNSAtIHdpZHRofSwke2V2dC5vZmZzZXRZIC0gdG9vbHRpcEhlaWdodCAvIDJ9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE9uUGFuKGV2dDogTW91c2VFdmVudCwgc3ZnOiBkMy5TZWxlY3Rpb248U1ZHU1ZHRWxlbWVudCwgdW5rbm93biwgbnVsbCwgdW5kZWZpbmVkPiwgc2NhbGU6IGQzLlNjYWxlVGltZTxudW1iZXIsIG51bWJlcj4pIHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IGV2dC5jbGllbnRYO1xyXG4gICAgICAgIHN2Zy5vbignbW91c2Vtb3ZlLnBhbicsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHJlY29yZC5VcGRhdGVKU09OKCdNaW4nLCBzY2FsZS5pbnZlcnQoc2NhbGUucmFuZ2UoKVswXSArIHN0YXJ0IC0gZS5jbGllbnRYKS5nZXRUaW1lKCkpXHJcbiAgICAgICAgICAgIHNldFJlY29yZChuZXcgVHJlbmQocmVjb3JkLlVwZGF0ZUpTT04oJ01heCcsIHNjYWxlLmludmVydChzY2FsZS5yYW5nZSgpWzFdICsgc3RhcnQgLSBlLmNsaWVudFgpLmdldFRpbWUoKSkpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN2Zy5vbignbW91c2V1cC5wYW4nLCAoKSA9PiBzdmcub24oJ21vdXNlbW92ZS5wYW4nLCBudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gT25YWm9vbShldnQ6IE1vdXNlRXZlbnQsIHN2ZzogZDMuU2VsZWN0aW9uPFNWR1NWR0VsZW1lbnQsIHVua25vd24sIG51bGwsIHVuZGVmaW5lZD4sIHNjYWxlOiBkMy5TY2FsZVRpbWU8bnVtYmVyLCBudW1iZXI+KSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBldnQub2Zmc2V0WDtcclxuICAgICAgICBjb25zdCBicnVzaCA9IGQzLmJydXNoWCgpXHJcbiAgICAgICAgICAgIC5leHRlbnQoW1ttYXJnaW4uY3VycmVudC5sZWZ0LCBtYXJnaW4uY3VycmVudC50b3AgKyAwLjVdLCBbcHJvcHMuV2lkdGggLSBtYXJnaW4uY3VycmVudC5yaWdodCwgcGFyc2VJbnQoc3ZnLmF0dHIoJ2hlaWdodCcpKSAtIG1hcmdpbi5jdXJyZW50LmJvdHRvbSArIDAuNV1dKVxyXG4gICAgICAgIGNvbnN0IGJyID0gc3ZnLmFwcGVuZCgnZycpLmNhbGwoYnJ1c2gpXHJcbiAgICAgICAgYnIuY2FsbChicnVzaC5tb3ZlLCBbc3RhcnQsIHN0YXJ0ICsgMV0pO1xyXG4gICAgICAgIHN2Zy5vbignbW91c2Vtb3ZlLmJydXNoJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgYnIuY2FsbChicnVzaC5tb3ZlLCBbc3RhcnQsIGUub2Zmc2V0WF0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc3ZnLm9uKCdtb3VzZXVwLmJydXNoJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oc3RhcnQsIGUub2Zmc2V0WCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHN0YXJ0LCBlLm9mZnNldFgpO1xyXG4gICAgICAgICAgICByZWNvcmQuVXBkYXRlSlNPTignTWluJywgc2NhbGUuaW52ZXJ0KG1pbikuZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICBzZXRSZWNvcmQobmV3IFRyZW5kKHJlY29yZC5VcGRhdGVKU09OKCdNYXgnLCBzY2FsZS5pbnZlcnQobWF4KS5nZXRUaW1lKCkpKSlcclxuXHJcbiAgICAgICAgICAgIGJyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdmcub24oJ21vdXNlbW92ZS5icnVzaCcsIG51bGwpO1xyXG4gICAgICAgICAgICBzdmcub24oJ21vdXNldXAuYnJ1c2gnLCBudWxsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBwcm9wcy5XaWR0aCwgaGVpZ2h0OiBwcm9wcy5IZWlnaHQgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ3aWRnaXQtbGFiZWxcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5MYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuIFwiICsgc3R5bGVzW1wid2lkZ2l0LWNvbnRyb2xzXCJdfSB0aXRsZT0nV2lkZ2V0IFNldHRpbmdzJyBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXt7IHVzZXJTZWxlY3Q6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAxMCwgekluZGV4OiAxMDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1saWdodCcgb25DbGljaz17SGFuZGxlUmVzZXR9PlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBjaGVja2VkPXtjaGFydEFjdGlvbiA9PSAnUGFuJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldENoYXJ0QWN0aW9uKCdQYW4nKX0gLz5QYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIGNoZWNrZWQ9e2NoYXJ0QWN0aW9uID09ICdab29tWCd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRDaGFydEFjdGlvbignWm9vbVgnKX0gLz5ab29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBjaGVja2VkPXtjaGFydEFjdGlvbiA9PSAnQ2xpY2snfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0Q2hhcnRBY3Rpb24oJ0NsaWNrJyl9IC8+Q2xpY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgY2hlY2tlZD17Y2hhcnRBY3Rpb24gPT0gJ1pvb21ZJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldENoYXJ0QWN0aW9uKCdab29tWScpfSAvPlpvb20gWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBjaGVja2VkPXtjaGFydEFjdGlvbiA9PSAnWm9vbVhZJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldENoYXJ0QWN0aW9uKCdab29tWFknKX0gLz5ab29tIFggJiBZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxXaWRnZXQgey4uLnByb3BzfSBSZWNvcmQ9e3JlY29yZH0gVG9nZ2xlPXt0b2dnbGV9IFNldFRvZ2dsZT17KGJvb2wpID0+IHNldFRvZ2dsZShib29sKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlXaWRnZXQ+IEZpZWxkPSdMYWJlbCcgUmVjb3JkPXtyZWNvcmR9IFR5cGU9J3RleHQnIFNldHRlcj17KHIpID0+IHNldFJlY29yZChuZXcgVHJlbmQocikpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V2lkdGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmVjb3JkPy5XaWR0aH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlY29yZChuZXcgVHJlbmQoeyAuLi5yZWNvcmQsV2lkdGg6IHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpfSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZXZ0KSA9PiBzZXRSZWNvcmQobmV3IFRyZW5kKHsgLi4ucmVjb3JkLCBXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSAyMDB9KSkgfT5GdWxsIFdpZHRoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNwbGl0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoQnV0dG9uIGNoZWNrZWQ9e3JlY29yZD8uSlNPTj8uU3BsaXQgPz8gZmFsc2V9IG9uQ2hhbmdlPXsoY2hlY2tlZDogYm9vbGVhbikgPT4gc2V0UmVjb3JkKHJlY29yZC5VcGRhdGVKU09OKCdTcGxpdCcsIGNoZWNrZWQpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0PFRyZW5EQVAuaVRyZW5kPiBMYWJlbD0nU3BsaXQgT24nIEZpZWxkPSdTcGxpdFR5cGUnIFJlY29yZD17cmVjb3JkPy5KU09OfSBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQobmV3IFRyZW5kKHsgLi4ucmVjb3JkLCBKU09OOiByIH0pKX0gT3B0aW9ucz17W3sgVmFsdWU6ICdBeGlzJywgTGFiZWw6ICdBeGlzJyB9LCB7IFZhbHVlOiAnU2VyaWVzJywgTGFiZWw6ICdTZXJpZXMnIH1dfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MZWdlbmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoQnV0dG9uIGNoZWNrZWQ9e3JlY29yZC5KU09OPy5MZWdlbmQgPz8gZmFsc2V9IG9uQ2hhbmdlPXsoY2hlY2tlZDogYm9vbGVhbikgPT4gc2V0UmVjb3JkKHJlY29yZC5VcGRhdGVKU09OKCdMZWdlbmQnLCBjaGVja2VkKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+WCBBeGlzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRldGltZSB2YWx1ZT17bW9tZW50KHJlY29yZC5KU09OLk1pbil9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFJlY29yZChuZXcgVHJlbmQoeyAuLi5yZWNvcmQsIEpTT046IHsgLi4ucmVjb3JkLkpTT04sTWluOiBtb21lbnQodmFsdWUpLnRvRGF0ZSgpLmdldFRpbWUoKX19KSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRldGltZSB2YWx1ZT17bW9tZW50KHJlY29yZC5KU09OLk1heCl9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFJlY29yZChuZXcgVHJlbmQoeyAuLi5yZWNvcmQsIEpTT046IHsgLi4ucmVjb3JkLkpTT04sIE1heDogbW9tZW50KHZhbHVlKS50b0RhdGUoKS5nZXRUaW1lKCkgfX0pKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogMTYgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuQ2FsY3VsYXRlQXhpc1JhbmdlKCd4JywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVjb3JkKG5ldyBUcmVuZChyZWNvcmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlVzZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+WSBBeGlzPC9oNj4gPGJ1dHRvbiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgdG9wOiAtMzB9fSBjbGFzc05hbWU9J2J0biBidG4tbGluaycgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuQWRkQXhpcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlY29yZChuZXcgVHJlbmQocmVjb3JkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+e1BsdXN9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiIHN0eWxlPXt7bWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSA2MjUsIG92ZXJmbG93WTogJ2F1dG8nLCBvdmVyZmxvd1g6ICdoaWRkZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlY29yZC5KU09OLllBeGlzLm1hcCgoYXhpcywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSc+PEF4aXMgQXhpcz17YXhpc30gSW5kZXg9e2luZGV4fSBXaWRnZXQ9e3JlY29yZH0gQ2FsbGJhY2s9eygpID0+IHNldFJlY29yZChuZXcgVHJlbmQocmVjb3JkKSkgfS8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+U2VyaWVzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3JkaW9uXCIgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnYXV0bycsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjUwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuRGF0YS5tYXAoKGQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtcIiNjb2xsYXBzZVwiICsgaX0+e2QuRGF0YVNvdXJjZS5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcImNvbGxhcHNlXCIgKyBpfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBzaG93XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGQuRGF0YVNvdXJjZS5UeXBlID09PSAnVHJlbkRBUERCJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIG9uQ2xpY2s9eygpID0+IHNldFJlY29yZChyZWNvcmQuUXVpY2tBZGRWb2x0YWdlUk1TKGQuRGF0YVNvdXJjZS5JRCkpfT5RdWljayBBZGQgVlJNUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIG9uQ2xpY2s9eygpID0+IHNldFJlY29yZChyZWNvcmQuUXVpY2tBZGRDdXJyZW50Uk1TKGQuRGF0YVNvdXJjZS5JRCkpfT5RdWljayBBZGQgSVJNUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknIG9uQ2xpY2s9eygpID0+IHNldFJlY29yZChyZWNvcmQuUmVtb3ZlQWxsKGQuRGF0YVNvdXJjZS5JRCkpfT5SZW1vdmUgQWxsPC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+OiBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzU2VsZWN0IFdpZGdldD17cmVjb3JkfSBEYXRhU291cmNlSUQ9e2QuRGF0YVNvdXJjZS5JRH0gQ2FsbGJhY2s9eygpID0+IHNldFJlY29yZChuZXcgVHJlbmQocmVjb3JkKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuSlNPTi5TZXJpZXMubWFwKChzZXJpZXMsIGluZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0dW0gPSBkLkRhdGEuZmluZChkZCA9PiBkZC5JRCA9PT0gc2VyaWVzLklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdHVtID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2VyaWVzLklEfSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzUGlja2VyIFR5cGU9e2QuRGF0YVNvdXJjZS5UeXBlfSBJbmRleD17aW5kfSBTZXJpZXM9e3Nlcmllc30gRGF0YT17ZGF0dW0gYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YX0gV2lkZ2V0PXtyZWNvcmR9IENhbGxiYWNrPXsoKSA9PiBzZXRSZWNvcmQobmV3IFRyZW5kKHJlY29yZCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvV2lkZ2V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcblxyXG59IiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEFkZGl0aW9uYWxJbmZvLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMy8xMC8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gXCIuLi8uLi8uLi8uLi9nbG9iYWxcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRpdGlvbmFsSW5mbyhwcm9wczogeyBEYXRhOiBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJuIH0pIHtcclxuICAgIGNvbnN0IGlkID0gXy51bmlxdWVJZCgnZHJvcGRvd24tJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIGlkPXtpZH0gZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+SW5mbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPkRldmljZToge3Byb3BzLkRhdGE/LkRldmljZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlNpZ25hbCBSZWZlcmVuY2U6IHtwcm9wcy5EYXRhPy5TaWduYWxSZWZlcmVuY2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5TaWduYWwgVHlwZToge3Byb3BzLkRhdGE/LlNpZ25hbFR5cGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5FbmdpbmVlcmluZyBVbml0czoge3Byb3BzLkRhdGE/LkVuZ2luZWVyaW5nVW5pdHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5QaGFzZToge3Byb3BzLkRhdGE/LlBoYXNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+UGhhc29yIFR5cGU6IHtwcm9wcy5EYXRhPy5QaGFzb3JUeXBlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+RGVzY3JpcHRpb246IHtwcm9wcy5EYXRhPy5EZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG4iLCIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgU2VyaWVzU2VsZWN0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwMy8xMC8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgSGlzdG9ncmFtLCBTdGF0cywgVGFibGUsIFRyZW5kLCBXaWRnZXQsIFh2c1kgfSBmcm9tICcuLi8uLi8uLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5pbXBvcnQgQWRkaXRpb25hbEluZm8gZnJvbSAnLi9BZGRpdGlvbmFsSW5mbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJpZXNTZWxlY3QocHJvcHM6IHsgV2lkZ2V0OiBXaWRnZXQ8VHJlbkRBUC5XaWRnZXRDbGFzcz4sIERhdGFTb3VyY2VJRDogbnVtYmVyLCBDYWxsYmFjazogKCkgPT4gdm9pZCwgQXhpcz86ICd4JyB8ICd5JyB9KSB7XHJcbiAgICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlEYXRhU2V0UmV0dXJuPih1bmRlZmluZWQpXHJcbiAgICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm4+KHsgSUQ6ICcwJyB9IGFzIFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm4pO1xyXG4gICAgY29uc3QgW2RlbGltZXRlciwgc2V0RGVsaW1ldGVyXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IHByb3BzLldpZGdldC5EYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IHByb3BzLkRhdGFTb3VyY2VJRCk7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldERhdGFTb3VyY2UoZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLldpZGdldC5EYXRhXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXtkZWxpbWV0ZXJ9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXREZWxpbWV0ZXIoZXZ0LnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJz48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHsoZGF0YVNvdXJjZT8uRGF0YSA/PyBbXSkubWFwKChkOiBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJuKSA9PiBkLkRldmljZSkuZmlsdGVyKCh4LCBpLCBhKSA9PiBhLmluZGV4T2YoeCkgPT09IGkpLm1hcCgoZCwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtkfT57ZH08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3NlbGVjdGVkPy5JRCA/PyAnMCd9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRTZWxlY3RlZChkYXRhU291cmNlLkRhdGEuZmluZCgoZGF0dW06IFRyZW5EQVAuaU9wZW5IaXN0b3JpYW5SZXR1cm4pID0+IGRhdHVtLklEID09PSBldnQudGFyZ2V0LnZhbHVlKSBhcyBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJuKX0+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScwJz48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHsoZGF0YVNvdXJjZT8uRGF0YSA/PyBbXSkuZmlsdGVyKChkOiBUcmVuREFQLmlPcGVuSGlzdG9yaWFuUmV0dXJuKSA9PiBkLkRldmljZS5pbmRleE9mKGRlbGltZXRlcikgPj0gMCkubWFwKChkYXR1bTogVHJlbkRBUC5pT3Blbkhpc3RvcmlhblJldHVybiwgaW5kZXgpID0+IDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2RhdHVtLklEfT57ZGF0dW0uRGVzY3JpcHRpb259PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm8gRGF0YT17c2VsZWN0ZWR9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBzZWxlY3RlZC5EZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLldpZGdldC5UeXBlID09PSAnSGlzdG9ncmFtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLldpZGdldCBhcyBIaXN0b2dyYW0pLkFkZFNlcmllcygoc2VsZWN0ZWQpLklELCBwcm9wcy5EYXRhU291cmNlSUQsIGxhYmVsKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BzLldpZGdldC5UeXBlID09PSAnVHJlbmQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocHJvcHMuV2lkZ2V0IGFzIFRyZW5kKS5BZGRTZXJpZXMoKHNlbGVjdGVkKS5JRCwgcHJvcHMuRGF0YVNvdXJjZUlELCBsYWJlbClcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wcy5XaWRnZXQuVHlwZSA9PT0gJ1N0YXRzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLldpZGdldCBhcyBTdGF0cykuU2V0U2VyaWVzKChzZWxlY3RlZCkuSUQsIHByb3BzLkRhdGFTb3VyY2VJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcHMuV2lkZ2V0LlR5cGUgPT09ICdUYWJsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5XaWRnZXQgYXMgVGFibGUpLlNldFNlcmllcygoc2VsZWN0ZWQpLklELCBwcm9wcy5EYXRhU291cmNlSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BzLldpZGdldC5UeXBlID09PSAnWHZzWScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5XaWRnZXQgYXMgWHZzWSkuU2V0U2VyaWVzKHByb3BzLkF4aXMsIChzZWxlY3RlZCkuSUQsIHByb3BzLkRhdGFTb3VyY2VJRClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH19PlNlbGVjdDwvYnV0dG9uID5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFdpZGdldC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMTEvMTYvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBXaWRnZXQsIEhpc3RvZ3JhbSwgVHJlbmQsIFN0YXRzLCBUYWJsZSwgWHZzWSB9IGZyb20gJy4uLy4uLy4uL0ltcGxlbWVudGF0aW9ucyc7XHJcbmltcG9ydCBTZXJpZXNTZWxlY3RYREEgZnJvbSAnLi9YREEvU2VyaWVzU2VsZWN0JztcclxuaW1wb3J0IFNlcmllc1NlbGVjdE9wZW5IaXN0b3JpYW4gZnJvbSAnLi9PcGVuSGlzdG9yaWFuL1Nlcmllc1NlbGVjdCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVHJlbkRBUC5pV2lkZ2V0IHtcclxuICAgIGNoaWxkcmVuOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10sXHJcbiAgICBSZWNvcmQ6IFRyZW5EQVAuaVdpZGdldCxcclxuICAgIFRvZ2dsZTogYm9vbGVhbixcclxuICAgIFNldFRvZ2dsZTogKGJvb2xlYW4pID0+IHZvaWRcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWRnaXQocHJvcHM6IFByb3BzKSB7XHJcblxyXG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHJvbGU9XCJkaWFsb2dcIiBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5Ub2dnbGUgPyAnYmxvY2snIDogJ25vbmUnLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNCknIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbXctMTAwIHctNzVcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtb2RhbC1oZWFkZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57cHJvcHMuTGFiZWx9IFNldHRpbmdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17XCJjbG9zZVwifSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5TZXRUb2dnbGUoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlVwZGF0ZShwcm9wcy5SZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5TYXZlIGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlNldFRvZ2dsZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkRlbGV0ZSBXaWRnaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gcHJvcHMuU2V0VG9nZ2xlKGZhbHNlKX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZG93XCIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlcmllc1NlbGVjdChwcm9wczogeyBXaWRnZXQ6IFdpZGdldDxUcmVuREFQLldpZGdldENsYXNzPiwgRGF0YVNvdXJjZUlEOiBudW1iZXIsIENhbGxiYWNrOiAoKSA9PiB2b2lkLCBBeGlzPzogJ3gnIHwgJ3knIH0pIHtcclxuICAgIGNvbnN0IFtkYXRhU291cmNlLCBzZXREYXRhU291cmNlXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaURhdGFTZXRSZXR1cm4+KHVuZGVmaW5lZClcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBwcm9wcy5XaWRnZXQuRGF0YS5maW5kKGQgPT4gZC5EYXRhU291cmNlLklEID09PSBwcm9wcy5EYXRhU291cmNlSUQpO1xyXG4gICAgICAgIGlmIChkYXRhU291cmNlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXREYXRhU291cmNlKGRhdGFTb3VyY2UpO1xyXG4gICAgICAgICAgICAvL3NldFNlbGVjdGVkKChkYXRhU291cmNlPy5EYXRhID8/IFt1bmRlZmluZWRdKVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLldpZGdldC5EYXRhXSk7XHJcblxyXG5cclxuICAgIGlmIChkYXRhU291cmNlPy5EYXRhU291cmNlLlR5cGUgPT09ICdUcmVuREFQREInKVxyXG4gICAgICAgIHJldHVybiA8U2VyaWVzU2VsZWN0WERBIHsuLi5wcm9wc30gLz47XHJcblxyXG4gICAgZWxzZSBpZiAoZGF0YVNvdXJjZT8uRGF0YVNvdXJjZS5UeXBlID09PSAnT3Blbkhpc3RvcmlhbicpXHJcbiAgICAgICAgcmV0dXJuIDxTZXJpZXNTZWxlY3RPcGVuSGlzdG9yaWFuIHsuLi5wcm9wc30gLz47XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBBZGRpdGlvbmFsSW5mby50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDMvMTAvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZGl0aW9uYWxJbmZvKHByb3BzOiB7IEluZGV4OiBudW1iZXIsIERhdGE6IFRyZW5EQVAuaVhEQVJldHVybkRhdGEgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGRyb3Bkb3duLXRvZ2dsZVwiIHR5cGU9XCJidXR0b25cIiBpZD17XCJkcm9wZG93bk1lbnVCdXR0b25cIiArIHByb3BzLkluZGV4fSBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgIEFkZGl0aW9uIEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT17XCJkcm9wZG93bk1lbnVCdXR0b25cIiArIHByb3BzLkluZGV4fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPk1ldGVyOiB7cHJvcHMuRGF0YT8uTWV0ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5Bc3NldDoge3Byb3BzLkRhdGE/LkFzc2V0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+Q2hhcmFjdGVyaXN0aWM6IHtwcm9wcy5EYXRhPy5DaGFyYWN0ZXJpc3RpY308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlR5cGU6IHtwcm9wcy5EYXRhPy5UeXBlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+U3RhdGlvbjoge3Byb3BzLkRhdGE/LlN0YXRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5QaGFzZToge3Byb3BzLkRhdGE/LlBoYXNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+SGFybW9uaWM6IHtwcm9wcy5EYXRhPy5IYXJtb25pY308L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFNlcmllc1NlbGVjdC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDMvMTAvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uLy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IEhpc3RvZ3JhbSwgU3RhdHMsIFRhYmxlLCBUcmVuZCwgV2lkZ2V0LCBYdnNZIH0gZnJvbSAnLi4vLi4vLi4vLi4vSW1wbGVtZW50YXRpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcmllc1NlbGVjdChwcm9wczogeyBXaWRnZXQ6IFdpZGdldDxUcmVuREFQLldpZGdldENsYXNzPiwgRGF0YVNvdXJjZUlEOiBudW1iZXIsIENhbGxiYWNrOiAoKSA9PiB2b2lkLCBBeGlzPzogJ3gnIHwgJ3knIH0pIHtcclxuICAgIGNvbnN0IFtkYXRhU291cmNlLCBzZXREYXRhU291cmNlXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaURhdGFTZXRSZXR1cm4+KHVuZGVmaW5lZClcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5pWERBUmV0dXJuRGF0YT4oeyBJRDogMCB9IGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGU8J01ldGVyJyB8ICdBc3NldCc+KCdNZXRlcicpO1xyXG4gICAgY29uc3QgW2RlbGltZXRlciwgc2V0RGVsaW1ldGVyXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IHByb3BzLldpZGdldC5EYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IHByb3BzLkRhdGFTb3VyY2VJRCk7XHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldERhdGFTb3VyY2UoZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLldpZGdldC5EYXRhXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZShldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nTWV0ZXInPk1ldGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdBc3NldCc+QXNzZXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e2RlbGltZXRlcn0gb25DaGFuZ2U9eyhldnQpID0+IHNldERlbGltZXRlcihldnQudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgeyhkYXRhU291cmNlPy5EYXRhID8/IFtdKS5tYXAoZCA9PiBkW3R5cGVdKS5maWx0ZXIoKHgsIGksIGEpID0+IGEuaW5kZXhPZih4KSA9PT0gaSkubWFwKChkLCBpKSA9PiA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2R9PntkfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17c2VsZWN0ZWQ/LklEID8/ICcwJ30gb25DaGFuZ2U9eyhldnQpID0+IHNldFNlbGVjdGVkKGRhdGFTb3VyY2UuRGF0YS5maW5kKGRhdHVtID0+IGRhdHVtLklEID09PSBwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSkgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSl9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMCc+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7KGRhdGFTb3VyY2U/LkRhdGEgPz8gW10pLmZpbHRlcihkYXR1bSA9PiBkYXR1bVt0eXBlXS5pbmRleE9mKGRlbGltZXRlcikgPj0gMCkubWFwKChkYXR1bTogVHJlbkRBUC5pWERBUmV0dXJuRGF0YSwgaW5kZXgpID0+IDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2RhdHVtLklEfT57ZGF0dW0uTmFtZX08L29wdGlvbj4pfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9e1wiZHJvcGRvd25NZW51QnV0dG9uXCJ9IGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPkluZm88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCIgYXJpYS1sYWJlbGxlZGJ5PXtcImRyb3Bkb3duTWVudUJ1dHRvblwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5NZXRlcjogeyhzZWxlY3RlZCBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhKT8uTWV0ZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+QXNzZXQ6IHsoc2VsZWN0ZWQgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSk/LkFzc2V0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPkNoYXJhY3RlcmlzdGljOiB7KHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpPy5DaGFyYWN0ZXJpc3RpY308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5UeXBlOiB7KHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpPy5UeXBlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlN0YXRpb246IHsoc2VsZWN0ZWQgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSk/LlN0YXRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+UGhhc2U6IHsoc2VsZWN0ZWQgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSk/LlBoYXNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPkhhcm1vbmljOiB7KHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpPy5IYXJtb25pY308L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLldpZGdldC5UeXBlID09PSAnSGlzdG9ncmFtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLldpZGdldCBhcyBIaXN0b2dyYW0pLkFkZFNlcmllcygoc2VsZWN0ZWQgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSkuSUQsIHByb3BzLkRhdGFTb3VyY2VJRCwgKHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpLlR5cGUgKyAnICcgKyBzZWxlY3RlZC5QaGFzZSlcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wcy5XaWRnZXQuVHlwZSA9PT0gJ1RyZW5kJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzZWxlY3RlZCBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhKS5DaGFyYWN0ZXJpc3RpYyA9PT0gJ0ZyZXF1ZW5jeScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9ICdGcmVxIC0gJyArIChzZWxlY3RlZCBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhKS5NZXRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpLlR5cGUgPT09ICdWb2x0YWdlJyAmJiAoc2VsZWN0ZWQgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSkuQ2hhcmFjdGVyaXN0aWMgPT09ICdSTVMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBgViR7KHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpLlBoYXNlfSAtICR7KHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpLk1ldGVyfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChzZWxlY3RlZCBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhKS5UeXBlID09PSAnVm9sdGFnZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IGBWJHsoc2VsZWN0ZWQgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSkuUGhhc2V9ICR7KHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpLkNoYXJhY3RlcmlzdGljfSAtICR7KHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpLk1ldGVyfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChzZWxlY3RlZCBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhKS5UeXBlID09PSAnQ3VycmVudCcgJiYgKHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpLkNoYXJhY3RlcmlzdGljID09PSAnUk1TJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gYEkke3NlbGVjdGVkLlBoYXNlfSAtICR7KHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpLk1ldGVyfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChzZWxlY3RlZCBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhKS5UeXBlID09PSAnQ3VycmVudCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IGBJJHsoc2VsZWN0ZWQgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSkuUGhhc2V9ICR7KHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpLkNoYXJhY3RlcmlzdGljfSAtICR7KHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpLk1ldGVyfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgbGFiZWwgPSAoc2VsZWN0ZWQgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSkuTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLldpZGdldCBhcyBUcmVuZCkuQWRkU2VyaWVzKChzZWxlY3RlZCBhcyBUcmVuREFQLmlYREFSZXR1cm5EYXRhKS5JRCwgcHJvcHMuRGF0YVNvdXJjZUlELCBsYWJlbClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcHMuV2lkZ2V0LlR5cGUgPT09ICdTdGF0cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5XaWRnZXQgYXMgU3RhdHMpLlNldFNlcmllcygoc2VsZWN0ZWQgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSkuSUQsIHByb3BzLkRhdGFTb3VyY2VJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcHMuV2lkZ2V0LlR5cGUgPT09ICdUYWJsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5XaWRnZXQgYXMgVGFibGUpLlNldFNlcmllcygoc2VsZWN0ZWQgYXMgVHJlbkRBUC5pWERBUmV0dXJuRGF0YSkuSUQsIHByb3BzLkRhdGFTb3VyY2VJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcHMuV2lkZ2V0LlR5cGUgPT09ICdYdnNZJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLldpZGdldCBhcyBYdnNZKS5TZXRTZXJpZXMocHJvcHMuQXhpcywgKHNlbGVjdGVkIGFzIFRyZW5EQVAuaVhEQVJldHVybkRhdGEpLklELCBwcm9wcy5EYXRhU291cmNlSUQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9fT5TZWxlY3Q8L2J1dHRvbiA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbiIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBYdnNZLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xNi8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAsIFJlZHV4IH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQ2hlY2tCb3ggfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuXHJcbmltcG9ydCBXaWRnZXQsIHsgU2VyaWVzU2VsZWN0IH0gZnJvbSAnLi9XaWRnZXQvV2lkZ2V0JztcclxuaW1wb3J0IEFkZGl0aW9uYWxJbmZvWERBIGZyb20gJy4vV2lkZ2V0L1hEQS9BZGRpdGlvbmFsSW5mbyc7XHJcbmltcG9ydCBBZGRpdGlvbmFsSW5mb09wZW5IaXN0b3JpYW4gZnJvbSAnLi9XaWRnZXQvT3Blbkhpc3Rvcmlhbi9BZGRpdGlvbmFsSW5mbyc7XHJcbmltcG9ydCB7IENyb3NzTWFyaywgUGx1cyB9IGZyb20gJy4uLy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFh2c1kgfSBmcm9tICcuLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBEYXRldGltZSBmcm9tICdyZWFjdC1kYXRldGltZSc7XHJcbmltcG9ydCBcInJlYWN0LWRhdGV0aW1lL2Nzcy9yZWFjdC1kYXRldGltZS5jc3NcIjtcclxuaW1wb3J0IHsgbGluZWFyUmVncmVzc2lvbiwgbGluZWFyUmVncmVzc2lvbkxpbmUsIHJTcXVhcmVkIH0gZnJvbSAnc2ltcGxlLXN0YXRpc3RpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWHZzWUpTWChwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVh2c1k+KSB7XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IFJlYWN0LnVzZVN0YXRlPFh2c1k+KG5ldyBYdnNZKHByb3BzKSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL3JlY29yZC5jdXJyZW50ID0gbmV3IFRyZW5kKHByb3BzKTtcclxuICAgIH0sIFt0b2dnbGUsIHByb3BzLkpTT05dKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplKHJlY29yZClcclxuICAgIH0sIFtyZWNvcmRdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVjb3JkKG5ldyBYdnNZKHsgLi4ucmVjb3JkLCBIZWlnaHQ6IHByb3BzLkhlaWdodCB9KSlcclxuICAgIH0sIFtwcm9wcy5IZWlnaHRdKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVjb3JkKG5ldyBYdnNZKHsgLi4ucmVjb3JkLCBEYXRhOiBwcm9wcy5EYXRhIH0pKTtcclxuICAgIH0sIFtwcm9wcy5EYXRhXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gWmlwPFQ+KGFycmF5MTogVFtdLCBmaWVsZDE6IGtleW9mIFQsIGFycmF5MjogVFtdLCBmaWVsZDI6IGtleW9mIFQsIHppcEZpZWxkOiBrZXlvZiBUKSB7XHJcbiAgICAgICAgbGV0IHJldHVybkFycmF5OiB7IFppcEZpZWxkOiBUW2tleW9mIFRdLCBBcnJheTE6IFRba2V5b2YgVF0sIEFycmF5MjogIFRba2V5b2YgVF19W109IFtdO1xyXG4gICAgICAgIGlmIChhcnJheTEubGVuZ3RoID4gYXJyYXkyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBhcnJheTEuZm9yRWFjaCgoeGQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5MlBvaW50ID0gYXJyYXkyLmZpbmQocG9pbnQgPT4gcG9pbnRbemlwRmllbGRdID09PSB4ZFt6aXBGaWVsZF0pXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkyUG9pbnQgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBaaXBGaWVsZDogeGRbemlwRmllbGRdLCBBcnJheTE6IHhkW2ZpZWxkMV0sIEFycmF5MjogYXJyYXkyUG9pbnRbZmllbGQyXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYXJyYXkyLmZvckVhY2goKHhkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJheTFQb2ludCA9IGFycmF5MS5maW5kKHBvaW50ID0+IHBvaW50W3ppcEZpZWxkXSA9PT0geGRbemlwRmllbGRdKVxyXG4gICAgICAgICAgICAgICAgaWYgKGFycmF5MVBvaW50ID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgWmlwRmllbGQ6IHhkW3ppcEZpZWxkXSwgQXJyYXkyOiB4ZFtmaWVsZDFdLCBBcnJheTE6IGFycmF5MVBvaW50W2ZpZWxkMl1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEluaXRpYWxpemUoc2V0dGluZ3M6IFh2c1kpIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MuSlNPTi5YLlNlcmllcyA9PSB1bmRlZmluZWQgfHwgc2V0dGluZ3MuSlNPTi5ZLlNlcmllcyA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgbWFyZ2luID0geyBib3R0b206IDUwLCBsZWZ0OiA1MCwgdG9wOiA0MCwgcmlnaHQ6IDUwIH07XHJcbiAgICAgICAgY29uc3Qgc3ZnSGVpZ2h0ID0gcHJvcHMuSGVpZ2h0O1xyXG4gICAgICAgIGQzLnNlbGVjdChyZWYuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKVxyXG4gICAgICAgIGNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5kb21haW4oW3NldHRpbmdzLkpTT04uWC5NaW4sIHNldHRpbmdzLkpTT04uWC5NYXhdKSAgICAgLy8gY2FuIHVzZSB0aGlzIGluc3RlYWQgb2YgMTAwMCB0byBoYXZlIHRoZSBtYXggb2YgZGF0YTogZDMubWF4KGRhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuICtkLnByaWNlIH0pXHJcbiAgICAgICAgICAgIC5yYW5nZShbMCwgc2V0dGluZ3MuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodF0pO1xyXG4gICAgICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgIC5yYW5nZShbc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b20sIDBdKVxyXG4gICAgICAgICAgICAuZG9tYWluKFtzZXR0aW5ncy5KU09OLlkuTWluLCBzZXR0aW5ncy5KU09OLlkuTWF4XSk7ICAgLy8gZDMuaGlzdCBoYXMgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgWSBheGlzIG9idmlvdXNseVxyXG5cclxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QocmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXHJcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHNldHRpbmdzLldpZHRoKVxyXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0Jywgc3ZnSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgY29uc3QgeEF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyAoc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSkgKyBcIilcIilcclxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXHJcblxyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKHNldHRpbmdzLldpZHRoIC8gMikgKyBcIixcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tIC8gMykgKyBcIilcIilcclxuICAgICAgICAgICAgLnRleHQoc2V0dGluZ3MuSlNPTi5YLlVuaXRzKVxyXG5cclxuICAgICAgICBjb25zdCB5QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgKG1hcmdpbi5sZWZ0KSArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSk7XHJcblxyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MCkgdHJhbnNsYXRlKC1cIiArIHN2Z0hlaWdodCAvIDIgKyBcIixcIiArIChtYXJnaW4ubGVmdCAvIDMpICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgICAgIC50ZXh0KHNldHRpbmdzLkpTT04uWS5Vbml0cyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHhEYXRhOiBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludFtdID0gR2V0RGF0dW0oJ3gnKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBjb25zdCB5RGF0YTogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRbXSA9IEdldERhdHVtKCd5Jyk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgY29uc3QgY29tYmluZWREYXRhID0gWmlwKHhEYXRhLCByZWNvcmQuSlNPTi5YLlNlcmllcy5GaWVsZCwgeURhdGEsIHJlY29yZC5KU09OLlkuU2VyaWVzLkZpZWxkLCAnVGltZXN0YW1wJyk7IFxyXG4gICAgICAgIC8vY29uc3QgY29tYmluZWREYXRhID0geERhdGEubWFwKCh4ZCwgaSkgPT4gKHsgVGltZXN0YW1wOiB4ZC5UaW1lc3RhbXAsIFg6IHhkW3JlY29yZC5KU09OLlhTZXJpZXMuRmllbGRdLCBZOiB5RGF0YVtpXVtyZWNvcmQuSlNPTi5ZU2VyaWVzLkZpZWxkXSB9KSlcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBjb21iaW5lZERhdGEuZmlsdGVyKGQgPT4gbW9tZW50KGQuWmlwRmllbGQpLnRvRGF0ZSgpLmdldFRpbWUoKSA+PSByZWNvcmQuSlNPTi5UaW1lTWluICYmIG1vbWVudChkLlppcEZpZWxkKS50b0RhdGUoKS5nZXRUaW1lKCkgPD0gcmVjb3JkLkpTT04uVGltZU1heCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImRvdFwiKVxyXG4gICAgICAgICAgICAuZGF0YShmaWx0ZXJlZERhdGEpXHJcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcImNpcmNsZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInJcIiwgMy41KVxyXG4gICAgICAgICAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4KGQuQXJyYXkxIGFzIG51bWJlcik7IH0pXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHkoZC5BcnJheTIgYXMgbnVtYmVyKTsgfSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHJlY29yZC5KU09OLlJlZ3Jlc3Npb25MaW5lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBmaWx0ZXJlZERhdGEubWFwKGQgPT4gW2QuQXJyYXkxIGFzIG51bWJlciwgZC5BcnJheTIgYXMgbnVtYmVyXSlcclxuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBsaW5lYXJSZWdyZXNzaW9uKGRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBsckxpbmUgPSBsaW5lYXJSZWdyZXNzaW9uTGluZShtb2RlbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHIyID0gclNxdWFyZWQoZGF0YSwgbHJMaW5lKTtcclxuICAgICAgICAgICAgY29uc3QgbGluZUZ1bmMgPSBkMy5saW5lPG51bWJlcltdPigpLngoZCA9PiB4KGRbMF0pKS55KGQgPT4geShsckxpbmUoZFswXSkpKTtcclxuICAgICAgICAgICAgc3ZnLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJ3JlZCcpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7cHJvcHMuV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodH0sJHttYXJnaW4udG9wfSlgKVxyXG4gICAgICAgICAgICAgICAgLnRleHQoYFIyIC0gJHtyMi50b0ZpeGVkKDMpfWApO1xyXG5cclxuICAgICAgICAgICAgc3ZnLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgICAgIC5kYXRhKFtkYXRhXSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsICdyZWQnKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiBsaW5lRnVuYyhkKSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sJHttYXJnaW4udG9wfSlgKVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHZXREYXR1bShheGlzOiAneCcgfCAneScpIHtcclxuICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XHJcbiAgICAgICAgICAgIGlmIChyZWNvcmQuSlNPTi5YLlNlcmllcyA9PSB1bmRlZmluZWQpIHJldHVybiB7TmFtZTogJyd9IGFzIGFueTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IHJlY29yZC5EYXRhLmZpbmQoZCA9PiBkLkRhdGFTb3VyY2UuSUQgPT09IHJlY29yZC5KU09OLlguU2VyaWVzLkRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdHVtID0gZGF0YVNvdXJjZS5maW5kKGRzID0+IGRzLklEID09PSByZWNvcmQuSlNPTi5YLlNlcmllcy5JRClcclxuICAgICAgICAgICAgcmV0dXJuIGRhdHVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHJlY29yZC5KU09OLlkuU2VyaWVzID09IHVuZGVmaW5lZCkgcmV0dXJuIHsgTmFtZTogJycgfSBhcyBhbnk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSByZWNvcmQuRGF0YS5maW5kKGQgPT4gZC5EYXRhU291cmNlLklEID09PSByZWNvcmQuSlNPTi5ZLlNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBkYXR1bSA9IGRhdGFTb3VyY2UuZmluZChkcyA9PiBkcy5JRCA9PT0gcmVjb3JkLkpTT04uWS5TZXJpZXMuSUQpXHJcbiAgICAgICAgICAgIHJldHVybiBkYXR1bTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyB3aWR0aDogcHJvcHMuV2lkdGgsIGhlaWdodDogcHJvcHMuSGVpZ2h0IH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wid2lkZ2l0LWxhYmVsXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0biBcIiArIHN0eWxlc1tcIndpZGdpdC1jb250cm9sc1wiXX0gdGl0bGU9J1dpZGdldCBTZXR0aW5ncycgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKHRydWUpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8V2lkZ2V0IHsuLi5wcm9wc30gUmVjb3JkPXtyZWNvcmR9IFRvZ2dsZT17dG9nZ2xlfSBTZXRUb2dnbGU9eyhib29sKSA9PiBzZXRUb2dnbGUoYm9vbCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pV2lkZ2V0PiBGaWVsZD0nTGFiZWwnIFJlY29yZD17cmVjb3JkfSBUeXBlPSd0ZXh0JyBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQobmV3IFh2c1kocikpfSBWYWxpZD17KGZpZWxkKSA9PiB0cnVlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V2lkdGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17cmVjb3JkPy5XaWR0aH0gb25DaGFuZ2U9eyhldnQpID0+IHNldFJlY29yZChuZXcgWHZzWSh7IC4uLnJlY29yZCwgV2lkdGg6IHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpIH0pKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGV2dCkgPT4gc2V0UmVjb3JkKG5ldyBYdnNZKHsgLi4ucmVjb3JkLCBXaWR0aDogd2luZG93LmlubmVyV2lkdGggLSAyMDAgfSkpfT5GdWxsIFdpZHRoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRldGltZSB2YWx1ZT17bW9tZW50KHJlY29yZC5KU09OLlRpbWVNaW4pfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRSZWNvcmQobmV3IFh2c1kocmVjb3JkLlVwZGF0ZUpTT04oJ1RpbWVNaW4nLCBtb21lbnQodmFsdWUpLnRvRGF0ZSgpLmdldFRpbWUoKSkpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWluPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRldGltZSB2YWx1ZT17bW9tZW50KHJlY29yZC5KU09OLlRpbWVNYXgpfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRSZWNvcmQobmV3IFh2c1kocmVjb3JkLlVwZGF0ZUpTT04oJ1RpbWVNYXgnLCBtb21lbnQodmFsdWUpLnRvRGF0ZSgpLmdldFRpbWUoKSkpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDE2IH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRSZWNvcmQocmVjb3JkLkNhbGN1bGF0ZVJhbmdlKCd0aW1lJykpfT5Vc2UgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0JveDxUcmVuREFQLmlYdnNZPiBSZWNvcmQ9e3JlY29yZC5KU09OfSBGaWVsZD0nUmVncmVzc2lvbkxpbmUnIExhYmVsPSdBZGQgUmVncmVzc2lvbicgU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKG5ldyBYdnNZKHJlY29yZC5VcGRhdGVKU09OKCdSZWdyZXNzaW9uTGluZScsIHIuUmVncmVzc2lvbkxpbmUpKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5YIEF4aXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pQXhpcz4gUmVjb3JkPXtyZWNvcmQuSlNPTi5YfSBGaWVsZD0nVW5pdHMnIFZhbGlkPXsoKSA9PiB0cnVlfSBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQocmVjb3JkLlNldEF4aXMoJ3gnLCAnVW5pdHMnLCByLlVuaXRzKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaUF4aXM+IFJlY29yZD17cmVjb3JkLkpTT04uWH0gRmllbGQ9J01pbicgVmFsaWQ9eygpID0+IHRydWV9IFNldHRlcj17KHIpID0+IHNldFJlY29yZChyZWNvcmQuU2V0QXhpcygneCcsICdNaW4nLCByLk1pbikpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlBeGlzPiBSZWNvcmQ9e3JlY29yZC5KU09OLlh9IEZpZWxkPSdNYXgnIFZhbGlkPXsoKSA9PiB0cnVlfSBTZXR0ZXI9eyhyKSA9PiBzZXRSZWNvcmQocmVjb3JkLlNldEF4aXMoJ3gnLCAnTWF4Jywgci5NYXgpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206IDE2IH19IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRSZWNvcmQocmVjb3JkLkNhbGN1bGF0ZVJhbmdlKCd4JykpfT5Vc2UgRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PlkgQXhpczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dDxUcmVuREFQLmlBeGlzPiBSZWNvcmQ9e3JlY29yZC5KU09OLll9IEZpZWxkPSdVbml0cycgVmFsaWQ9eygpID0+IHRydWV9IFNldHRlcj17KHIpID0+IHNldFJlY29yZChyZWNvcmQuU2V0QXhpcygneScsICdVbml0cycsIHIuVW5pdHMpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQ8VHJlbkRBUC5pQXhpcz4gUmVjb3JkPXtyZWNvcmQuSlNPTi5ZfSBGaWVsZD0nTWluJyBWYWxpZD17KCkgPT4gdHJ1ZX0gU2V0dGVyPXsocikgPT4gc2V0UmVjb3JkKHJlY29yZC5TZXRBeGlzKCd5JywgJ01pbicsIHIuTWluKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0PFRyZW5EQVAuaUF4aXM+IFJlY29yZD17cmVjb3JkLkpTT04uWX0gRmllbGQ9J01heCcgVmFsaWQ9eygpID0+IHRydWV9IFNldHRlcj17KHIpID0+IHNldFJlY29yZChyZWNvcmQuU2V0QXhpcygneScsICdNYXgnLCByLk1heCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogMTYgfX0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFJlY29yZChyZWNvcmQuQ2FsY3VsYXRlUmFuZ2UoJ3knKSl9PlVzZSBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+U2VyaWVzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWNjb3JkaW9uXCIgc3R5bGU9e3sgb3ZlcmZsb3dZOiAnYXV0bycsIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMzAwLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmQuRGF0YS5tYXAoKGQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPXtcIiNjb2xsYXBzZVwiICsgaX0+e2QuRGF0YVNvdXJjZS5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtcImNvbGxhcHNlXCIgKyBpfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBzaG93XCIgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+WCBTZXJpZXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJpZXNTZWxlY3QgV2lkZ2V0PXtyZWNvcmR9IERhdGFTb3VyY2VJRD17ZC5EYXRhU291cmNlLklEfSBBeGlzPSd4JyBDYWxsYmFjaz17KCkgPT4gc2V0UmVjb3JkKG5ldyBYdnNZKHJlY29yZCkpfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocmVjb3JkLkpTT04uWC5TZXJpZXMgIT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e0dldERhdHVtKCd4Jyk/Lk5hbWUgPz8gJyd9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRpdGlvbmFsSW5mb1hEQSBJbmRleD17aX0gRGF0YT17R2V0RGF0dW0oJ3gnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJpZXNQaWNrZXIgQXhpcz0neCcgU2VyaWVzPXtyZWNvcmQuSlNPTi5YLlNlcmllc30gV2lkZ2V0PXtyZWNvcmR9IENhbGxiYWNrPXsoKSA9PiBzZXRSZWNvcmQobmV3IFh2c1kocmVjb3JkKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+WSBTZXJpZXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzU2VsZWN0IFdpZGdldD17cmVjb3JkfSBEYXRhU291cmNlSUQ9e2QuRGF0YVNvdXJjZS5JRH0gQXhpcz0neScgQ2FsbGJhY2s9eygpID0+IHNldFJlY29yZChuZXcgWHZzWShyZWNvcmQpKX0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHJlY29yZC5KU09OLlkuU2VyaWVzICE9IHVuZGVmaW5lZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntHZXREYXR1bSgneScpPy5OYW1lID8/ICcnfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkaXRpb25hbEluZm9YREEgSW5kZXg9e2l9IERhdGE9e0dldERhdHVtKCd5Jyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VyaWVzUGlja2VyIEF4aXM9J3knIFNlcmllcz17cmVjb3JkLkpTT04uWS5TZXJpZXN9IFdpZGdldD17cmVjb3JkfSBDYWxsYmFjaz17KCkgPT4gc2V0UmVjb3JkKG5ldyBYdnNZKHJlY29yZCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9XaWRnZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IFNlcmllc1BpY2tlciA9IChwcm9wczogeyBBeGlzOiAneCd8J3knLCBTZXJpZXM6IFRyZW5EQVAuaVNlcmllcywgV2lkZ2V0OiBYdnNZLCBDYWxsYmFjazogKCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludEZpZWxkPihwcm9wcy5TZXJpZXMuRmllbGQpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuV2lkZ2V0LlVwZGF0ZVNlcmllcyhwcm9wcy5BeGlzLCBcIkZpZWxkXCIsIHR5cGUpO1xyXG4gICAgICAgIHByb3BzLkNhbGxiYWNrKCk7XHJcbiAgICB9LCBbdHlwZV0pO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5GaWVsZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VHlwZShldnQudGFyZ2V0LnZhbHVlIGFzIFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXZlcmFnZVwiPkF2Zzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNaW5pbXVtXCI+TWluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1heGltdW1cIj5NYXg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuV2lkZ2V0LlJlbW92ZVNlcmllcyhwcm9wcy5BeGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5DYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfX0+e0Nyb3NzTWFya308L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFdvcmtTcGFjZUVkaXRvci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMTEvMTAvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IElucHV0LCBDaGVja0JveCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgeyBDcm9zc01hcmssIFVwQXJyb3csIERvd25BcnJvdyB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvZ3BhLXN5bWJvbHMnO1xyXG5cclxuaW1wb3J0IHsgdXNlUGFyYW1zLCBMaW5rLCB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgeyBTZWxlY3RXb3JrU3BhY2VzRm9yVXNlciwgU2VsZWN0V29ya1NwYWNlc0FsbFB1YmxpY05vdFVzZXIsIE9wZW5DbG9zZVdvcmtTcGFjZSwgVXBkYXRlV29ya1NwYWNlLCBTZWxlY3RXb3JrU3BhY2VzU3RhdHVzLCBGZXRjaFdvcmtTcGFjZXMgfSBmcm9tICcuL1dvcmtTcGFjZXNTbGljZSc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0IEhpc3RvZ3JhbSBmcm9tICcuLi9XaWRnZXRzL0hpc3RvZ3JhbSc7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL1dpZGdldHMvUHJvZmlsZSc7XHJcbmltcG9ydCBTdGF0cyBmcm9tICcuLi9XaWRnZXRzL1N0YXRzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4uL1dpZGdldHMvVGFibGUnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9XaWRnZXRzL1RleHQnO1xyXG5pbXBvcnQgVHJlbmQgZnJvbSAnLi4vV2lkZ2V0cy9UcmVuZC9UcmVuZCc7XHJcbmltcG9ydCBYdnNZIGZyb20gJy4uL1dpZGdldHMvWHZzWSc7XHJcbmltcG9ydCB7IFVwZGF0ZSwgU2VsZWN0RGF0YVNldEJ5SUQsIFNlbGVjdERhdGFTZXRzLCBGZXRjaERhdGFTZXRzLCBTZWxlY3REYXRhU2V0c1N0YXR1cywgU2VsZWN0RGF0YVNldERhdGEsIEdldERhdGFTZXREYXRhRnJvbUlEQiB9IGZyb20gJy4uL0RhdGFTZXRzL0RhdGFTZXRzU2xpY2UnO1xyXG5pbXBvcnQgRGF0YVNldERhdGEgZnJvbSAnLi4vRGF0YVNldHMvRGF0YVNldERhdGEnO1xyXG5pbXBvcnQgeyBDcmVhdGVXaWRnZXQgfSBmcm9tICcuLi8uLi9JbXBsZW1lbnRhdGlvbnMnO1xyXG5cclxuY29uc3QgTmF2TWFyZ2luID0gODU7XHJcbmNvbnN0IE5hdldpZHRoID0gMjAwO1xyXG5cclxuY29uc3QgV29ya1NwYWNlRWRpdG9yOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7fT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaURhdGFTZXRSZXR1cm5bXT4oW10pO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zPHsgaWQgfT4oKTtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihpZCk7XHJcbiAgICBjb25zdCB1c2Vyc1dvcmtTcGFjZXM6IFRyZW5EQVAuaVdvcmtTcGFjZVtdID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RXb3JrU3BhY2VzRm9yVXNlcihzdGF0ZSwgdXNlck5hbWUpKTtcclxuICAgIGNvbnN0IHB1YmxpY1dvcmtTcGFjZXM6IFRyZW5EQVAuaVdvcmtTcGFjZVtdID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eC5TdG9yZVN0YXRlKSA9PiBTZWxlY3RXb3JrU3BhY2VzQWxsUHVibGljTm90VXNlcihzdGF0ZSwgdXNlck5hbWUpKTtcclxuICAgIGNvbnN0IGRhdGFTZXRzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHMpO1xyXG4gICAgY29uc3Qgd3NTdGF0dXMgPSB1c2VTZWxlY3RvcihTZWxlY3RXb3JrU3BhY2VzU3RhdHVzKTtcclxuICAgIGNvbnN0IGRzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHNTdGF0dXMpO1xyXG4gICAgY29uc3QgW3dvcmtTcGFjZUpTT04sIHNldFdvcmtTcGFjZUpTT05dID0gUmVhY3QudXNlU3RhdGU8VHJlbkRBUC5Xb3JrU3BhY2VKU09OPih7IFJvd3M6IFtdIH0pO1xyXG4gICAgY29uc3QgW3dvcmtTcGFjZSwgc2V0V29ya1NwYWNlXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVdvcmtTcGFjZT4oWy4uLnVzZXJzV29ya1NwYWNlcywgLi4ucHVibGljV29ya1NwYWNlc10uZmluZCh3cyA9PiB3cy5JRCA9PSB0YWIpKTtcclxuICAgIGNvbnN0IFtkYXRhU2V0LCBzZXREYXRhU2V0XSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaURhdGFTZXQ+KHt9IGFzIGFueSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaWQgIT0gdGFiKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChgL1dvcmtTcGFjZUVkaXRvci8ke3RhYn1gKTsgXHJcbiAgICAgICAgICAgIGNvbnN0IHdzID0gWy4uLnVzZXJzV29ya1NwYWNlcywgLi4ucHVibGljV29ya1NwYWNlc10uZmluZCh3cyA9PiB3cy5JRCA9PSB0YWIpXHJcbiAgICAgICAgICAgIHNldFdvcmtTcGFjZSh3cyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRzID0gZGF0YVNldHMuZmluZChkcyA9PiBkcy5JRCA9PT0gd29ya1NwYWNlLkRhdGFTZXRJRCk7XHJcbiAgICAgICAgICAgIGlmIChkcyAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhU2V0KGRzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdGFiXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod29ya1NwYWNlID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICAvL3NldERhdGFTZXQoZGF0YVNldHMuZmluZChkcyA9PiBkcy5JRCA9PT0gd29ya1NwYWNlLkRhdGFTZXRJRCkpO1xyXG4gICAgICAgIGlmICghd29ya1NwYWNlPy5PcGVuKVxyXG4gICAgICAgICAgICBkaXNwYXRjaChPcGVuQ2xvc2VXb3JrU3BhY2UoeyB3b3JrU3BhY2U6IHdvcmtTcGFjZSwgb3BlbjogdHJ1ZSB9KSk7XHJcblxyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZSh3b3JrU3BhY2UuSlNPTlN0cmluZykgYXMgVHJlbkRBUC5Xb3JrU3BhY2VKU09OO1xyXG4gICAgICAgIHNldFdvcmtTcGFjZUpTT04oanNvbik7XHJcblxyXG4gICAgICAgIEdldERhdGFTZXREYXRhRnJvbUlEQih3b3JrU3BhY2UuRGF0YVNldElEKS50aGVuKGQgPT4ge1xyXG4gICAgICAgICAgICBzZXREYXRhKGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sIFt3b3JrU3BhY2UsIGRhdGFTZXRzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAod3NTdGF0dXMgPT09ICdpZGxlJykge1xyXG4gICAgICAgICAgICBjb25zdCB3cyA9IFsuLi51c2Vyc1dvcmtTcGFjZXMsIC4uLnB1YmxpY1dvcmtTcGFjZXNdLmZpbmQod3MgPT4gd3MuSUQgPT0gdGFiKVxyXG4gICAgICAgICAgICBzZXRXb3JrU3BhY2Uod3MpO1xyXG4gICAgICAgICAgICBjb25zdCBkcyA9IGRhdGFTZXRzLmZpbmQoZHMgPT4gZHMuSUQgPT09IHdvcmtTcGFjZS5EYXRhU2V0SUQpO1xyXG4gICAgICAgICAgICBpZiAoZHMgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgc2V0RGF0YVNldChkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdzU3RhdHVzID09ICd1bml0aWF0ZWQnIHx8IHdzU3RhdHVzID09ICdjaGFuZ2VkJylcclxuICAgICAgICAgICAgZGlzcGF0Y2goRmV0Y2hXb3JrU3BhY2VzKCkpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIHdzU3RhdHVzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHNTdGF0dXMgPT09ICdpZGxlJykge1xyXG4gICAgICAgICAgICBpZiAod29ya1NwYWNlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHMgPSBkYXRhU2V0cy5maW5kKGRzID0+IGRzLklEID09PSB3b3JrU3BhY2UuRGF0YVNldElEKTtcclxuICAgICAgICAgICAgICAgIGlmIChkcyAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YVNldChkcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRzU3RhdHVzID09ICd1bml0aWF0ZWQnICB8fCBkc1N0YXR1cyA9PT0gJ2NoYW5nZWQnKVxyXG4gICAgICAgICAgICBkaXNwYXRjaChGZXRjaERhdGFTZXRzKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtkaXNwYXRjaCwgZHNTdGF0dXNdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBIYW5kbGVBZGRPYmplY3QodHlwZTogVHJlbkRBUC5XaWRnZXRUeXBlIHwgJ1JvdycpIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ1JvdycpXHJcbiAgICAgICAgICAgIHNldFdvcmtTcGFjZUpTT04oeyAuLi53b3JrU3BhY2VKU09OLCBSb3dzOiBbLi4ud29ya1NwYWNlSlNPTi5Sb3dzLCB7IEhlaWdodDogNTAwLCBXaWRnZXRzOiBbXSB9XSB9KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldFdvcmtTcGFjZUpTT04oe1xyXG4gICAgICAgICAgICAgICAgLi4ud29ya1NwYWNlSlNPTiwgUm93czogWy4uLndvcmtTcGFjZUpTT04uUm93cywge1xyXG4gICAgICAgICAgICAgICAgICAgIEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gTmF2TWFyZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgIFdpZGdldHM6IFtDcmVhdGVXaWRnZXQodHlwZSwgd2luZG93LmlubmVySGVpZ2h0IC0gTmF2TWFyZ2luLCB3aW5kb3cuaW5uZXJXaWR0aCAtIE5hdldpZHRoKV1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBwYWRkaW5nOiAnNnB4IDEycHgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5EYXRhIFNldDogPExpbmsgdG89e2Ake2hvbWVQYXRofUVkaXREYXRhU2V0LyR7ZGF0YVNldD8uSUR9YH0+e2RhdGFTZXQ/Lk5hbWV9PC9MaW5rPjxEYXRhU2V0RGF0YSB7Li4uZGF0YVNldH0gLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J0FkZCBPYmplY3QnIGRhdGEtdG9nZ2xlPSdkcm9wZG93bicgYXJpYS1oYXNwb3B1cD0ndHJ1ZScgYXJpYS1leHBhbmRlZD0nZmFsc2UnPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXNcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KGUpID0+IEhhbmRsZUFkZE9iamVjdCgnUm93Jyl9PlJvdzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdIaXN0b2dyYW0nKX0+SGlzdG9ncmFtPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnUHJvZmlsZScpfT5Qcm9maWxlPC9idXR0b24+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnU3RhdHMnKX0+U3RhdHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdUYWJsZScpfT5UYWJsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ1RleHQnKX0+VGV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ1RyZW5kJyl9PlRyZW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnWHZzWScpfT5YIHZzIFk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiB0aXRsZT0nRXhwb3J0IEN1cnJlbnQgRGF0YSBTZXQnIGRhdGEtdG9nZ2xlPSdkcm9wZG93bicgYXJpYS1oYXNwb3B1cD0ndHJ1ZScgYXJpYS1leHBhbmRlZD0nZmFsc2UnPjxpIGNsYXNzTmFtZT1cImZhIGZhLWRvd25sb2FkXCIgPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlBERjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+Q1NWPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHRpdGxlPSdTYXZlIGN1cnJlbnQgd29ya3NwYWNlLi4uJyBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChVcGRhdGVXb3JrU3BhY2UoeyAuLi53b3JrU3BhY2UsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KHdvcmtTcGFjZUpTT04pIH0pKTtcclxuICAgICAgICAgICAgICAgIH19PjxpIGNsYXNzTmFtZT1cImZhIGZhLXNhdmVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHRpdGxlPSdXb3Jrc3BhY2UgU2V0dGluZ3MnPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICB7Wy4uLnVzZXJzV29ya1NwYWNlcywgLi4ucHVibGljV29ya1NwYWNlc10uZmlsdGVyKHdzID0+IHdzLk9wZW4pLm1hcCh3cyA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3dzLklEfSBjbGFzc05hbWU9e1wibmF2LWl0ZW0gXCIgKyBzdHlsZXMud29ya3NwYWNldGFifSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17XCJuYXYtbGlua1wiICsgKHRhYiA9PSB3cy5JRCA/ICcgYWN0aXZlJyA6ICcnKX0gaHJlZj0nIycgb25DbGljaz17KGV2dCkgPT4gc2V0VGFiKHdzLklEKX0gPnt3cy5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goT3BlbkNsb3NlV29ya1NwYWNlKHsgd29ya1NwYWNlOiB3cywgb3BlbjogZmFsc2UgfSkpfT5YPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInRhYi1jb250ZW50XCJdfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrU3BhY2VKU09OLlJvd3MubWFwKChyb3csIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGtleT17aW5kZXh9IFdvcmtTcGFjZT17d29ya1NwYWNlfSBEYXRhPXtkYXRhfSBXaWRnZXRzPXtyb3cuV2lkZ2V0c30gSGVpZ2h0PXtyb3cuSGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlPXsocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSB7IC4uLndvcmtTcGFjZUpTT04gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLlJvd3NbaW5kZXhdLkhlaWdodCA9IHJlY29yZC5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbi5Sb3dzW2luZGV4XS5XaWRnZXRzID0gcmVjb3JkLldpZGdldHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbi5Sb3dzW2luZGV4XS5Xb3JrU3BhY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbi5Sb3dzW2luZGV4XS5EYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZVdvcmtTcGFjZSh7IC4uLndvcmtTcGFjZSwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVJvdz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqc29uID0geyAuLi53b3JrU3BhY2VKU09OIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbi5Sb3dzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChVcGRhdGVXb3JrU3BhY2UoeyAuLi53b3JrU3BhY2UsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KGpzb24pIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3ZlVXA9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSB7IC4uLndvcmtTcGFjZUpTT04gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0ganNvbi5Sb3dzW25ld0luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiID0ganNvbi5Sb3dzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLlJvd3NbbmV3SW5kZXhdID0gYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uLlJvd3NbaW5kZXhdID0gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChVcGRhdGVXb3JrU3BhY2UoeyAuLi53b3JrU3BhY2UsIEpTT05TdHJpbmc6IEpTT04uc3RyaW5naWZ5KGpzb24pIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3ZlRG93bj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqc29uID0geyAuLi53b3JrU3BhY2VKU09OIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGpzb24uUm93cy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBqc29uLlJvd3NbbmV3SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBqc29uLlJvd3NbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24uUm93c1tuZXdJbmRleF0gPSBiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24uUm93c1tpbmRleF0gPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZVdvcmtTcGFjZSh7IC4uLndvcmtTcGFjZSwgSlNPTlN0cmluZzogSlNPTi5zdHJpbmdpZnkoanNvbikgfSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBSb3c6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFRyZW5EQVAuaVJvdz4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPihwcm9wcy5IZWlnaHQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZUFkZE9iamVjdCh0eXBlOiBUcmVuREFQLldpZGdldFR5cGUpIHtcclxuICAgICAgICBsZXQgcm93ID0geyAuLi5wcm9wcywgVXBkYXRlOiB1bmRlZmluZWQsIFdvcmtTcGFjZTogdW5kZWZpbmVkLCBSZW1vdmVSb3c6IHVuZGVmaW5lZCB9IGFzIFRyZW5EQVAuaVJvdzsgXHJcbiAgICAgICAgcm93LldpZGdldHMucHVzaCggQ3JlYXRlV2lkZ2V0KCB0eXBlLCAxMDAsICh3aW5kb3cuaW5uZXJXaWR0aCAtIE5hdldpZHRoKS8yKSlcclxuICAgICAgICBwcm9wcy5VcGRhdGUocm93KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgaGVpZ2h0OiBwcm9wcy5IZWlnaHQsIGRpc3BsYXk6ICdncmlkJyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBwYWRkaW5nOiAwLCB6SW5kZXg6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnRyaWFuZ2xlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJyb3ctY29udHJvbHNcIl19YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHRpdGxlPSdBZGQgT2JqZWN0JyBkYXRhLXRvZ2dsZT0nZHJvcGRvd24nIGFyaWEtaGFzcG9wdXA9J3RydWUnIGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJz48aSBjbGFzc05hbWU9XCJmYSBmYS1wbHVzXCIgPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ0hpc3RvZ3JhbScpfT5IaXN0b2dyYW08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ1Byb2ZpbGUnKX0+UHJvZmlsZTwvYnV0dG9uPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IEhhbmRsZUFkZE9iamVjdCgnU3RhdHMnKX0+U3RhdHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ1RhYmxlJyl9PlRhYmxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdUZXh0Jyl9PlRleHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiBIYW5kbGVBZGRPYmplY3QoJ1RyZW5kJyl9PlRyZW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17KCkgPT4gSGFuZGxlQWRkT2JqZWN0KCdYdnNZJyl9PlggdnMgWTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHRpdGxlPSdSZW1vdmUgUm93JyBvbkNsaWNrPXsoKSA9PiBwcm9wcy5SZW1vdmVSb3coKX0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbWludXNcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J1JvdyBTZXR0aW5ncycgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKHRydWUpIH0+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZC1jb250YWluZXInIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuV2lkZ2V0cy5tYXAoKHdpZGdldCwgaW5kZXgpID0+IDxXaWRnZXQgey4uLntcclxuICAgICAgICAgICAgICAgICAgICAuLi53aWRnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgSGVpZ2h0OiBwcm9wcy5IZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgV29ya1NwYWNlOiBwcm9wcy5Xb3JrU3BhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YTogcHJvcHMuRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBVcGRhdGU6IChuZXdSZWNvcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IHsgLi4ucHJvcHMgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdpZGdldCA9IHsgLi4ubmV3UmVjb3JkIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5Xb3JrU3BhY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5EYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuV2lkZ2V0c1tpbmRleF0gPSB3aWRnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlVwZGF0ZShyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3cgPSB7IC4uLnByb3BzIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5XaWRnZXRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLlVwZGF0ZShyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19IGtleT17aW5kZXh9IC8+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIHJvbGU9XCJkaWFsb2dcIiBzdHlsZT17eyBkaXNwbGF5OiB0b2dnbGUgPyAnYmxvY2snIDogJ25vbmUnLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNCknIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIiBzdHlsZT17e21heFdpZHRoOiA1MjV9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPlJvdyBTZXR0aW5nczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkhlaWdodDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17aGVpZ2h0ICE9IG51bGwgPyBoZWlnaHQgOiAwfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0SGVpZ2h0KHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldnQpID0+IHNldEhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQgLSBOYXZNYXJnaW4pIH0+RnVsbCBIZWlnaHQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+V2lkZ2V0cyAoTWF4IFdpZHRoIDoge3dpbmRvdy5pbm5lcldpZHRoIC0gMjAwfSBweCwgV2lkdGggVXNlZDogeyAocHJvcHMuV2lkZ2V0cy5sZW5ndGggPT0gMCA/IDAgOiBwcm9wcy5XaWRnZXRzLm1hcCh3ID0+IHcuV2lkdGgpLnJlZHVjZSgoYSxiKT0+IGErYiApKX1weCk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLldpZGdldHMubWFwKCh3aWRnZXQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbScga2V5PXtpfT57d2lkZ2V0LkxhYmVsfSAtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B1bGwtcmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5XaWR0aDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17d2lkZ2V0LldpZHRofSB0eXBlPSdudW1iZXInIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3cgPSB7Li4ucHJvcHN9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuV2lkZ2V0c1tpXS5XaWR0aCA9IHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5VcGRhdGUocm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIGRpc2FibGVkPXtpIDw9IDB9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IHsgLi4ucHJvcHMgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IGkgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0gcm93LldpZGdldHNbbmV3SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiID0gcm93LldpZGdldHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5XaWRnZXRzW25ld0luZGV4XSA9IGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5XaWRnZXRzW2ldID0gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuVXBkYXRlKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9PntVcEFycm93fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIGRpc2FibGVkPXtpID49IHByb3BzLldpZGdldHMubGVuZ3RoIC0gMX0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0geyAuLi5wcm9wcyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSByb3cuV2lkZ2V0cy5sZW5ndGggLSAxKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSByb3cuV2lkZ2V0c1tuZXdJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSByb3cuV2lkZ2V0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LldpZGdldHNbbmV3SW5kZXhdID0gYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LldpZGdldHNbaV0gPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5VcGRhdGUocm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57RG93bkFycm93fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWxpbmsnIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IHsgLi4ucHJvcHMgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LldpZGdldHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5VcGRhdGUocm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT57Q3Jvc3NNYXJrfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLk1vdmVVcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Nb3ZlIFJvdyBVcDwvYnV0dG9uPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5Nb3ZlRG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Nb3ZlIFJvdyBEb3duPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuVXBkYXRlKHsuLi5wcm9wcywgSGVpZ2h0OiBoZWlnaHR9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShmYWxzZSl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgV2lkZ2V0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxUcmVuREFQLmlXaWRnZXQ+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuVHlwZSA9PSAnSGlzdG9ncmFtJylcclxuICAgICAgICByZXR1cm4gPEhpc3RvZ3JhbSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgZWxzZSBpZiAocHJvcHMuVHlwZSA9PSAnUHJvZmlsZScpXHJcbiAgICAgICAgcmV0dXJuIDxQcm9maWxlIHsuLi5wcm9wc30gLz47XHJcbiAgICBlbHNlIGlmIChwcm9wcy5UeXBlID09ICdTdGF0cycpXHJcbiAgICAgICAgcmV0dXJuIDxTdGF0cyB7Li4ucHJvcHN9IC8+O1xyXG4gICAgZWxzZSBpZiAocHJvcHMuVHlwZSA9PSAnVGFibGUnKVxyXG4gICAgICAgIHJldHVybiA8VGFibGUgey4uLnByb3BzfSAvPjtcclxuICAgIGVsc2UgaWYgKHByb3BzLlR5cGUgPT0gJ1RleHQnKVxyXG4gICAgICAgIHJldHVybiA8VGV4dCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgZWxzZSBpZiAocHJvcHMuVHlwZSA9PSAnVHJlbmQnKVxyXG4gICAgICAgIHJldHVybiA8VHJlbmQgey4uLnByb3BzfSAvPjtcclxuICAgIGVsc2UgaWYgKHByb3BzLlR5cGUgPT0gJ1h2c1knKVxyXG4gICAgICAgIHJldHVybiA8WHZzWSB7Li4ucHJvcHN9IC8+O1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiA8c3Bhbj5Ob3QgYSB3aWRnZXQuPC9zcGFuPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya1NwYWNlRWRpdG9yOyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBJbXBsZW1lbnRhdGlvbnMudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDEvMjcvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyBDcmVhdGVHdWlkLCBSYW5kb21Db2xvciB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvaGVscGVyLWZ1bmN0aW9ucyc7XHJcbmltcG9ydCBzdGF0cyBmcm9tICdzdGF0cy1saXRlJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgVHJlbkRBUERCIGZyb20gJy4vRmVhdHVyZXMvRGF0YVNldHMvVHJlbkRBUERCJztcclxuXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXQ8VCBleHRlbmRzIFRyZW5EQVAuV2lkZ2V0Q2xhc3M+IGltcGxlbWVudHMgVHJlbkRBUC5pV2lkZ2V0PFQ+e1xyXG4gICAgSlNPTjogVDtcclxuICAgIEhlaWdodDogbnVtYmVyO1xyXG4gICAgV2lkdGg6IG51bWJlcjtcclxuICAgIFR5cGU6IFRyZW5EQVAuV2lkZ2V0VHlwZTtcclxuICAgIExhYmVsOiBzdHJpbmc7XHJcbiAgICBEYXRhOiBUcmVuREFQLmlEYXRhU2V0UmV0dXJuW107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFQ+KSB7XHJcbiAgICAgICAgdGhpcy5IZWlnaHQgPSBwcm9wcy5IZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5XaWR0aCA9IHByb3BzLldpZHRoO1xyXG4gICAgICAgIHRoaXMuVHlwZSA9IHByb3BzLlR5cGU7XHJcbiAgICAgICAgdGhpcy5MYWJlbCA9IHByb3BzLkxhYmVsO1xyXG4gICAgICAgIHRoaXMuSlNPTiA9IHByb3BzLkpTT047XHJcbiAgICAgICAgaWYgKHByb3BzLkRhdGEgPT0gdW5kZWZpbmVkKSB0aGlzLkRhdGEgPSBbXTtcclxuICAgICAgICBlbHNlIHRoaXMuRGF0YSA9IHByb3BzLkRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldExhYmVsID0gKGxhYmVsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLkxhYmVsID0gbGFiZWw7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIFNldEhlaWdodCA9IChoZWlnaHQ6IG51bWJlcikgPT4gdGhpcy5IZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICBwdWJsaWMgU2V0V2lkdGggPSAod2lkdGg6IG51bWJlcikgPT4gdGhpcy5XaWR0aCA9IHdpZHRoO1xyXG4gICAgcHVibGljIFNldEpTT04gPSAoanNvbjogVCkgPT4gdGhpcy5KU09OID0ganNvbjtcclxuICAgIHB1YmxpYyBBdmFpbGFibGVTZXJpZXMgPSAoKSA9PiB0aGlzLkRhdGEubWFwKGRkID0+ICh7IC4uLmRkLCBEYXRhU291cmNlSUQ6IGRkLkRhdGFTb3VyY2UuSUQsIERhdGFTb3VyY2U6IGRkLkRhdGFTb3VyY2UgfSkuRGF0YS5tYXAoZGRkID0+ICh7IC4uLmRkZCwgRGF0YTogW10sIERhdGFTb3VyY2U6IGRkLkRhdGFTb3VyY2UuTmFtZSwgRGF0YVNvdXJjZUlEOiBkZC5EYXRhU291cmNlLklEIH0gYXMgVHJlbkRBUC5pWERBUmV0dXJuV2l0aERhdGFTb3VyY2UpKSkucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZUpTT04gPSA8SyBleHRlbmRzIGtleW9mIFQ+KGZpZWxkOiBLLCB2YWx1ZTogVFtLXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTltmaWVsZF0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSGlzdG9ncmFtIGV4dGVuZHMgV2lkZ2V0PFRyZW5EQVAuaUhpc3RvZ3JhbT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlIaXN0b2dyYW0+ICkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLlR5cGUgPSBcIkhpc3RvZ3JhbVwiO1xyXG4gICAgICAgIGlmICh0aGlzLkpTT04gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5KU09OID0geyBNaW46IDAsIE1heDogMTAsIFVuaXRzOiAnJywgU2VyaWVzOiBbXSwgQmluQ291bnQ6IDEwIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZFNlcmllcyA9IChpZDogbnVtYmVyIHwgc3RyaW5nLCBkYXRhU291cmNlSUQ6IG51bWJlciwgbGFiZWw/OiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLkpTT04uU2VyaWVzLnB1c2goeyBJRDogaWQudG9TdHJpbmcoKSwgRGF0YVNvdXJjZUlEOiBkYXRhU291cmNlSUQsIEZpZWxkOiBcIkF2ZXJhZ2VcIiwgQ29sb3I6IEdldENvbG9yKCksIFByb2ZpbGU6IGZhbHNlLCBQcm9maWxlQ29sb3I6IEdldENvbG9yKGxhYmVsKSB9KTtcclxuICAgICAgICByZXR1cm4gbmV3IEhpc3RvZ3JhbSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVtb3ZlU2VyaWVzID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLkpTT04uU2VyaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIaXN0b2dyYW0odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZVNlcmllcyA9IChpbmRleDoga2V5b2YgVHJlbkRBUC5pSGlzdG9ncmFtU2VyaWVzW10sIGZpZWxkOiBrZXlvZiBUcmVuREFQLmlIaXN0b2dyYW1TZXJpZXMsIHZhbHVlOiBUcmVuREFQLmlIaXN0b2dyYW1TZXJpZXNba2V5b2YgVHJlbkRBUC5pSGlzdG9ncmFtU2VyaWVzXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXNbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgSGlzdG9ncmFtKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2FsY3VsYXRlQXhpc1JhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBkZDogVHJlbkRBUC5pWERBUmV0dXJuRGF0YVtdID0gW10uY29uY2F0KC4uLnRoaXMuRGF0YS5tYXAoZCA9PiBkLkRhdGEpKTtcclxuICAgICAgICBsZXQgc3MgPSB0aGlzLkpTT04uU2VyaWVzLm1hcChzZXJpZXMgPT4gKGRkLmZpbmQoZCA9PiBkLklELnRvU3RyaW5nKCkgPT09IHNlcmllcy5JRCk/LkRhdGEgPz8gW10pLm1hcChkID0+IGRbc2VyaWVzLkZpZWxkXSkpO1xyXG4gICAgICAgIGxldCBtbSA9IHNzLm1hcChzID0+IFtNYXRoLm1pbiguLi5zKSwgTWF0aC5tYXgoLi4ucyldKTtcclxuICAgICAgICB0aGlzLkpTT04uTWF4ID0gTWF0aC5tYXgoLi4uW10uY29uY2F0KC4uLm1tKSk7XHJcbiAgICAgICAgdGhpcy5KU09OLk1pbiA9IE1hdGgubWluKC4uLltdLmNvbmNhdCguLi5tbSkpO1xyXG4gICAgICAgIGxldCBidWZmZXIgPSAodGhpcy5KU09OLk1heCAtIHRoaXMuSlNPTi5NaW4pICogLjEwO1xyXG4gICAgICAgIHRoaXMuSlNPTi5NYXggPSB0aGlzLkpTT04uTWF4ICsgYnVmZmVyO1xyXG4gICAgICAgIHRoaXMuSlNPTi5NaW4gPSB0aGlzLkpTT04uTWluIC0gYnVmZmVyO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEhpc3RvZ3JhbSh0aGlzKTtcclxuICAgIH07XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZW5kIGV4dGVuZHMgV2lkZ2V0PFRyZW5EQVAuaVRyZW5kPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVRyZW5kPikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLlR5cGUgPSBcIlRyZW5kXCI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkpTT04gPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5KU09OID0geyBNaW46IDAsIE1heDogMTAsIExlZ2VuZDogZmFsc2UsIFNwbGl0OiBmYWxzZSwgU3BsaXRUeXBlOiAnQXhpcycsIFlBeGlzOiBbeyBNYXg6IDEwLCBNaW46IDAsIFBvc2l0aW9uOiAnbGVmdCcsIFVuaXRzOiAnJyB9XSwgU2VyaWVzOiBbXSAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkQXhpcyA9ICgpID0+IHRoaXMuSlNPTi5ZQXhpcy5wdXNoKHsgTWF4OiAxMCwgTWluOiAwLCBQb3NpdGlvbjogJ2xlZnQnLCBVbml0czogJycgfSk7XHJcbiAgICBwdWJsaWMgUmVtb3ZlQXhpcyA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTi5ZQXhpcy5sZW5ndGggPT0gMSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLkpTT04uWUF4aXMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXMuZm9yRWFjaChzZXJpZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VyaWVzLkF4aXMgPj0gaW5kZXgpXHJcbiAgICAgICAgICAgICAgICBzZXJpZXMuQXhpcyA9IChpbmRleCA+IDAgPyBzZXJpZXMuQXhpcyAtIDEgOiAwKTsgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcHVibGljIFVwZGF0ZUF4aXMgPSAoaW5kZXg6IGtleW9mIFRyZW5EQVAuaVlBeGlzW10sIGZpZWxkOiBrZXlvZiBUcmVuREFQLmlZQXhpcywgdmFsdWU6IFRyZW5EQVAuaVlBeGlzW2tleW9mIFRyZW5EQVAuaVlBeGlzXSkgPT4geyB0aGlzLkpTT04uWUF4aXNbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlOyB9O1xyXG5cclxuICAgIHB1YmxpYyBDYWxjdWxhdGVBeGlzUmFuZ2UgPSAodHlwZTogJ3gnIHwgJ3knLCBpbmRleD86IGtleW9mIFRyZW5EQVAuaVlBeGlzW10pID0+IHtcclxuICAgICAgICBsZXQgZGQ6IFRyZW5EQVAuaVhEQVJldHVybkRhdGFbXSA9IFtdLmNvbmNhdCguLi50aGlzLkRhdGEubWFwKGQgPT4gZC5EYXRhKSk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICd4JylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzcyA9IHRoaXMuSlNPTi5TZXJpZXMubWFwKHNlcmllcyA9PiAoZGQuZmluZChkID0+IGQuSUQudG9TdHJpbmcoKSA9PSBzZXJpZXMuSUQpPy5EYXRhID8/IFtdKS5tYXAoZCA9PiBtb21lbnQoZC5UaW1lc3RhbXApLnRvRGF0ZSgpLmdldFRpbWUoKSkpO1xyXG4gICAgICAgICAgICBsZXQgbW0gPSBzcy5tYXAocyA9PiBbTWF0aC5taW4oLi4ucyksIE1hdGgubWF4KC4uLnMpXSk7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5NYXggPSBNYXRoLm1heCguLi5bXS5jb25jYXQoLi4ubW0pKTtcclxuICAgICAgICAgICAgdGhpcy5KU09OLk1pbiA9IE1hdGgubWluKC4uLltdLmNvbmNhdCguLi5tbSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuSlNPTi5ZQXhpcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3MgPSB0aGlzLkpTT04uU2VyaWVzLmZpbHRlcihzZXJpZXMgPT4gc2VyaWVzLkF4aXMgPT09IGluZGV4KS5tYXAoc2VyaWVzID0+IChkZC5maW5kKGQgPT4gZC5JRC50b1N0cmluZygpID09IHNlcmllcy5JRCk/LkRhdGEgPz8gW10pLm1hcChkID0+IGRbc2VyaWVzLkZpZWxkXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtbSA9IHNzLm1hcChzID0+IFtNYXRoLm1pbiguLi5zKSwgTWF0aC5tYXgoLi4ucyldKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNYXgnXSA9IE1hdGgubWF4KC4uLltdLmNvbmNhdCguLi5tbSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01pbiddID0gTWF0aC5taW4oLi4uW10uY29uY2F0KC4uLm1tKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9ICh0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNYXgnXSAtIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01pbiddKSAqIC4xMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNYXgnXSA9IHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01heCddICsgYnVmZmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01pbiddID0gdGhpcy5KU09OLllBeGlzW2luZGV4XVsnTWluJ10gLSBidWZmZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNzID0gdGhpcy5KU09OLlNlcmllcy5maWx0ZXIoc2VyaWVzID0+IHNlcmllcy5BeGlzID09PSBpbmRleCkubWFwKHNlcmllcyA9PiAoZGQuZmluZChkID0+IGQuSUQudG9TdHJpbmcoKSA9PSBzZXJpZXMuSUQpPy5EYXRhID8/IFtdKS5tYXAoZCA9PiBkW3Nlcmllcy5GaWVsZF0pKTtcclxuICAgICAgICAgICAgICAgIGxldCBtbSA9IHNzLm1hcChzID0+IFtNYXRoLm1pbiguLi5zKSwgTWF0aC5tYXgoLi4ucyldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01heCddID0gTWF0aC5tYXgoLi4uW10uY29uY2F0KC4uLm1tKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNaW4nXSA9IE1hdGgubWluKC4uLltdLmNvbmNhdCguLi5tbSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9ICh0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNYXgnXSAtIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01pbiddKSAqIC4xMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01heCddID0gdGhpcy5KU09OLllBeGlzW2luZGV4XVsnTWF4J10gKyBidWZmZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpTT04uWUF4aXNbaW5kZXhdWydNaW4nXSA9IHRoaXMuSlNPTi5ZQXhpc1tpbmRleF1bJ01pbiddIC0gYnVmZmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRyZW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgQWRkU2VyaWVzID0gKGlkOiBudW1iZXIgfCBzdHJpbmcsIGRhdGFTb3VyY2VJRDogbnVtYmVyLCBsYWJlbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTi5TZXJpZXMuZmluZChzZXJpZXMgPT4gc2VyaWVzLklEID09PSBpZC50b1N0cmluZygpICYmIHNlcmllcy5EYXRhU291cmNlSUQgPT09IGRhdGFTb3VyY2VJRCkgIT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXMucHVzaCh7IElEOiBpZC50b1N0cmluZygpLCBEYXRhU291cmNlSUQ6IGRhdGFTb3VyY2VJRCwgQXhpczogMCwgRmllbGQ6IFwiQXZlcmFnZVwiLCBDb2xvcjogR2V0Q29sb3IobGFiZWwpLCBMYWJlbDogbGFiZWwsIFNob3dFdmVudHM6IGZhbHNlIH0pO1xyXG4gICAgICAgIHRoaXMuQ2FsY3VsYXRlQXhpc1JhbmdlKCd4Jyk7XHJcbiAgICAgICAgdGhpcy5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3knKTtcclxuICAgICAgICByZXR1cm4gbmV3IFRyZW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBRdWlja0FkZFZvbHRhZ2VSTVMgPSAoZGF0YVNvdXJjZUlEOiBudW1iZXIpID0+IHtcclxuICAgICAgICBsZXQgYXhpcyA9IHRoaXMuSlNPTi5ZQXhpcy5maW5kSW5kZXgoYXhpcyA9PiBheGlzLlVuaXRzID09PSAnVm9sdHMnKVxyXG4gICAgICAgIGlmIChheGlzIDwgMCkge1xyXG4gICAgICAgICAgICBheGlzID0gdGhpcy5KU09OLllBeGlzLnB1c2goe1VuaXRzOiAnVm9sdHMnLCBQb3NpdGlvbjogJ2xlZnQnLCBNaW46IDAsIE1heDogMTAwfSkgLSAxXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkpTT04uU2VyaWVzLnB1c2goLi4udGhpcy5EYXRhLmZpbmQoZGF0dW0gPT4gZGF0dW0uRGF0YVNvdXJjZS5JRCA9PT0gZGF0YVNvdXJjZUlEKS5EYXRhLmZpbHRlcigoZGF0dW06IFRyZW5EQVAuaVhEQVJldHVybkRhdGEpID0+IGRhdHVtLlR5cGUgPT09ICdWb2x0YWdlJyAmJiBkYXR1bS5DaGFyYWN0ZXJpc3RpYyA9PT0gJ1JNUycpLm1hcCgoZGF0dW06IFRyZW5EQVAuaVhEQVJldHVybkRhdGEpID0+ICh7IElEOiBkYXR1bS5JRC50b1N0cmluZygpLCBEYXRhU291cmNlSUQ6IGRhdGFTb3VyY2VJRCwgQXhpczogYXhpcywgRmllbGQ6ICdBdmVyYWdlJyBhcyBUcmVuREFQLmlYREFUcmVuZERhdGFQb2ludEZpZWxkLCBDb2xvcjogR2V0Q29sb3IoYFYke2RhdHVtLlBoYXNlfSAtICR7ZGF0dW0uTWV0ZXJ9YCksIExhYmVsOiBkYXR1bS5OYW1lLCBTaG93RXZlbnRzOiBmYWxzZX0pKSlcclxuICAgICAgICB0aGlzLkNhbGN1bGF0ZUF4aXNSYW5nZSgneCcpO1xyXG4gICAgICAgIHRoaXMuQ2FsY3VsYXRlQXhpc1JhbmdlKCd5Jyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmVuZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUXVpY2tBZGRDdXJyZW50Uk1TID0gKGRhdGFTb3VyY2VJRDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IGF4aXMgPSB0aGlzLkpTT04uWUF4aXMuZmluZEluZGV4KGF4aXMgPT4gYXhpcy5Vbml0cyA9PT0gJ0FtcHMnKVxyXG4gICAgICAgIGlmIChheGlzIDwgMCkge1xyXG4gICAgICAgICAgICBheGlzID0gdGhpcy5KU09OLllBeGlzLnB1c2goeyBVbml0czogJ0FtcHMnLCBQb3NpdGlvbjogJ2xlZnQnLCBNaW46IDAsIE1heDogMTAwIH0pIC0gMVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5KU09OLlNlcmllcy5wdXNoKC4uLnRoaXMuRGF0YS5maW5kKGRhdHVtID0+IGRhdHVtLkRhdGFTb3VyY2UuSUQgPT09IGRhdGFTb3VyY2VJRCkuRGF0YS5maWx0ZXIoKGRhdHVtOiBUcmVuREFQLmlYREFSZXR1cm5EYXRhKSA9PiBkYXR1bS5UeXBlID09PSAnQ3VycmVudCcgJiYgZGF0dW0uQ2hhcmFjdGVyaXN0aWMgPT09ICdSTVMnKS5tYXAoKGRhdHVtOiBUcmVuREFQLmlYREFSZXR1cm5EYXRhKSA9PiAoeyBJRDogZGF0dW0uSUQudG9TdHJpbmcoKSwgRGF0YVNvdXJjZUlEOiBkYXRhU291cmNlSUQsIEF4aXM6IGF4aXMsIEZpZWxkOiAnQXZlcmFnZScgYXMgVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRGaWVsZCwgQ29sb3I6IEdldENvbG9yKGBJJHtkYXR1bS5QaGFzZX0gLSAke2RhdHVtLk1ldGVyfWApLCBMYWJlbDogZGF0dW0uTmFtZSwgU2hvd0V2ZW50czogZmFsc2UgfSkpKVxyXG4gICAgICAgIHRoaXMuQ2FsY3VsYXRlQXhpc1JhbmdlKCd4Jyk7XHJcbiAgICAgICAgdGhpcy5DYWxjdWxhdGVBeGlzUmFuZ2UoJ3knKTtcclxuICAgICAgICByZXR1cm4gbmV3IFRyZW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW1vdmVTZXJpZXMgPSAoaW5kZXg6IG51bWJlcikgPT4gdGhpcy5KU09OLlNlcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgcHVibGljIFJlbW92ZUFsbCA9IChkYXRhU291cmNlSUQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXMgPSB0aGlzLkpTT04uU2VyaWVzLmZpbHRlcihzZXJpZXMgPT4gc2VyaWVzLkRhdGFTb3VyY2VJRCAhPSBkYXRhU291cmNlSUQpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVHJlbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZVNlcmllcyA9IChpbmRleDoga2V5b2YgVHJlbkRBUC5pVHJlbmRTZXJpZXNbXSwgZmllbGQ6IGtleW9mIFRyZW5EQVAuaVRyZW5kU2VyaWVzLCB2YWx1ZTogVHJlbkRBUC5pVHJlbmRTZXJpZXNba2V5b2YgVHJlbkRBUC5pVHJlbmRTZXJpZXNdKSA9PiB7IHRoaXMuSlNPTi5TZXJpZXNbaW5kZXhdW2ZpZWxkXSA9IHZhbHVlOyB9O1xyXG5cclxuICAgIHB1YmxpYyBQYW4gPSAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTi5NYXggPSB0aGlzLkpTT04uTWF4ICsgdmFsdWU7XHJcbiAgICAgICAgdGhpcy5KU09OLk1pbiA9IHRoaXMuSlNPTi5NaW4gKyB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gbmV3IFRyZW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcbi8vZXhwb3J0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBXaWRnZXQ8VHJlbkRBUC5pUHJvZmlsZT4ge1xyXG4vLyAgICBjb25zdHJ1Y3RvcihoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwganNvbj86IFRyZW5EQVAuaVRyZW5kKSB7XHJcbi8vICAgICAgICBzdXBlcihcIlByb2ZpbGVcIiwgaGVpZ2h0LCB3aWR0aCwganNvbik7XHJcbi8vICAgICAgICBpZiAoanNvbiA9PT0gdW5kZWZpbmVkKVxyXG4vLyAgICAgICAgICAgIHRoaXMuSlNPTiA9IHsgIH07XHJcbi8vICAgIH1cclxuXHJcbi8vfVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRzIGV4dGVuZHMgV2lkZ2V0PFRyZW5EQVAuaVN0YXRzPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVN0YXRzPikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLlR5cGUgPSBcIlN0YXRzXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLkpTT04gPSB7U2VyaWVzOiBudWxsLCBQcmVjaXNpb246IDN9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIFNldFNlcmllcyA9IChpZDogbnVtYmVyIHwgc3RyaW5nLCBkc0lEOiBudW1iZXIpID0+IHRoaXMuSlNPTi5TZXJpZXMgPSB7IElEOiBpZC50b1N0cmluZygpLCBEYXRhU291cmNlSUQ6IGRzSUQsIEZpZWxkOiAnQXZlcmFnZScgfTtcclxuICAgIHB1YmxpYyBTZXRTZXJpZXNGaWVsZCA9IChmaWVsZDogVHJlbkRBUC5pWERBVHJlbmREYXRhUG9pbnRGaWVsZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuSlNPTi5TZXJpZXMuRmllbGQgPSBmaWVsZDtcclxuICAgICAgICByZXR1cm4gbmV3IFN0YXRzKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBTZXRQcmVjc2lzaW9uID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLkpTT04uUHJlY2lzaW9uID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0cyh0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIFN0YXRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlcmllcyA9IHRoaXMuSlNPTi5TZXJpZXM7XHJcblxyXG4gICAgICAgIGlmIChzZXJpZXMgPT0gbnVsbCkgcmV0dXJuIHtcclxuICAgICAgICAgICAgTWVhbjogJycsXHJcbiAgICAgICAgICAgIE1lZGlhbjonJyxcclxuICAgICAgICAgICAgLy9Nb2RlOiAnJyxcclxuICAgICAgICAgICAgVmFyaWFuY2U6ICcnLFxyXG4gICAgICAgICAgICBTdGREZXY6JycsXHJcbiAgICAgICAgICAgIFBlcmNlbnRpbGU6IHtcclxuICAgICAgICAgICAgICAgIDEwOiAnJyxcclxuICAgICAgICAgICAgICAgIDI1OicnLFxyXG4gICAgICAgICAgICAgICAgNTA6ICcnLFxyXG4gICAgICAgICAgICAgICAgNzU6ICcnLFxyXG4gICAgICAgICAgICAgICAgOTA6JycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBkYXRhU291cmNlRGF0YSA9IHRoaXMuRGF0YS5maW5kKGRzID0+IGRzLkRhdGFTb3VyY2UuSUQgPT09IHNlcmllcy5EYXRhU291cmNlSUQpPy5EYXRhID8/IFtdO1xyXG4gICAgICAgIGNvbnN0IGRhdGFTZXJpZXMgPSBkYXRhU291cmNlRGF0YS5maW5kKGQgPT4gZC5JRCA9PT0gc2VyaWVzLklEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICBjb25zdCBkYXRhID0gZGF0YVNlcmllcy5tYXAoZCA9PmRbc2VyaWVzLkZpZWxkXSk7XHJcblxyXG5cclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuIHtcclxuICAgICAgICAgICAgTWVhbjogJycsXHJcbiAgICAgICAgICAgIE1lZGlhbjogJycsXHJcbiAgICAgICAgICAgIC8vTW9kZTogJycsXHJcbiAgICAgICAgICAgIFZhcmlhbmNlOiAnJyxcclxuICAgICAgICAgICAgU3RkRGV2OiAnJyxcclxuICAgICAgICAgICAgUGVyY2VudGlsZToge1xyXG4gICAgICAgICAgICAgICAgMTA6ICcnLFxyXG4gICAgICAgICAgICAgICAgMjU6ICcnLFxyXG4gICAgICAgICAgICAgICAgNTA6ICcnLFxyXG4gICAgICAgICAgICAgICAgNzU6ICcnLFxyXG4gICAgICAgICAgICAgICAgOTA6ICcnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBNZWFuOiBzdGF0cy5tZWFuKGRhdGEpLnRvRml4ZWQodGhpcy5KU09OLlByZWNpc2lvbiksXHJcbiAgICAgICAgICAgIE1lZGlhbjogc3RhdHMubWVkaWFuKGRhdGEpLnRvRml4ZWQodGhpcy5KU09OLlByZWNpc2lvbiksXHJcbiAgICAgICAgICAgIC8vTW9kZTogc3RhdHMubW9kZShkYXRhKS8qLnRvUHJlY2lzaW9uKHRoaXMuSlNPTi5QcmVjaXNpb24pKi8sXHJcbiAgICAgICAgICAgIFZhcmlhbmNlOiBzdGF0cy52YXJpYW5jZShkYXRhKS50b0ZpeGVkKHRoaXMuSlNPTi5QcmVjaXNpb24pLFxyXG4gICAgICAgICAgICBTdGREZXY6IHN0YXRzLnN0ZGV2KGRhdGEpLnRvRml4ZWQodGhpcy5KU09OLlByZWNpc2lvbiksXHJcbiAgICAgICAgICAgIFBlcmNlbnRpbGU6IHtcclxuICAgICAgICAgICAgICAgIDEwOiBzdGF0cy5wZXJjZW50aWxlKGRhdGEsIDAuMTApLnRvRml4ZWQodGhpcy5KU09OLlByZWNpc2lvbiksXHJcbiAgICAgICAgICAgICAgICAyNTogc3RhdHMucGVyY2VudGlsZShkYXRhLCAwLjI1KS50b0ZpeGVkKHRoaXMuSlNPTi5QcmVjaXNpb24pLFxyXG4gICAgICAgICAgICAgICAgNTA6IHN0YXRzLnBlcmNlbnRpbGUoZGF0YSwgMC41MCkudG9GaXhlZCh0aGlzLkpTT04uUHJlY2lzaW9uKSxcclxuICAgICAgICAgICAgICAgIDc1OiBzdGF0cy5wZXJjZW50aWxlKGRhdGEsIDAuNzUpLnRvRml4ZWQodGhpcy5KU09OLlByZWNpc2lvbiksXHJcbiAgICAgICAgICAgICAgICA5MDogc3RhdHMucGVyY2VudGlsZShkYXRhLCAwLjkwKS50b0ZpeGVkKHRoaXMuSlNPTi5QcmVjaXNpb24pLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlIGV4dGVuZHMgV2lkZ2V0PFRyZW5EQVAuaVRhYmxlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJlbkRBUC5pV2lkZ2V0PFRyZW5EQVAuaVN0YXRzPikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBpZiAodGhpcy5KU09OID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTiA9IHsgU2VyaWVzOiBudWxsLCBQcmVjaXNpb246IDMgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRTZXJpZXMgPSAoaWQ6IG51bWJlciB8IHN0cmluZywgZHNJRDogbnVtYmVyKSA9PiB0aGlzLkpTT04uU2VyaWVzID0geyBJRDogaWQudG9TdHJpbmcoKSwgRGF0YVNvdXJjZUlEOiBkc0lELCBGaWVsZDogJ0F2ZXJhZ2UnIH07XHJcbiAgICBwdWJsaWMgU2V0U2VyaWVzRmllbGQgPSAoZmllbGQ6IFRyZW5EQVAuaVhEQVRyZW5kRGF0YVBvaW50RmllbGQpID0+IHtcclxuICAgICAgICB0aGlzLkpTT04uU2VyaWVzLkZpZWxkID0gZmllbGQ7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0cyh0aGlzKTtcclxuICAgIH07XHJcbiAgICBwdWJsaWMgU2V0UHJlY3Npc2lvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5KU09OLlByZWNpc2lvbiA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RhdHModGhpcyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0IGV4dGVuZHMgV2lkZ2V0PFRyZW5EQVAuaVRleHQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBUcmVuREFQLmlXaWRnZXQ8VHJlbkRBUC5pVGV4dD4pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLkpTT04gPSB7VGV4dDogJyd9O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFh2c1kgZXh0ZW5kcyBXaWRnZXQ8VHJlbkRBUC5pWHZzWT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFRyZW5EQVAuaVdpZGdldDxUcmVuREFQLmlYdnNZPikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBpZiAodGhpcy5KU09OID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTiA9IHtcclxuICAgICAgICAgICAgICAgIFk6IHsgTWluOiAwLCBNYXg6IDEwMCwgVW5pdHM6ICcnLCBTZXJpZXM6IG51bGwgfSxcclxuICAgICAgICAgICAgICAgIFg6IHsgTWluOiAwLCBNYXg6IDEwMCwgVW5pdHM6ICcnLCBTZXJpZXM6IG51bGwgfSxcclxuICAgICAgICAgICAgICAgIFRpbWVNaW46IG51bGwsIFRpbWVNYXg6IG51bGwsIFJlZ3Jlc3Npb25MaW5lOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5KU09OLlggPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLkpTT04uWCA9IHsgTWluOiAwLCBNYXg6IDEwMCwgVW5pdHM6ICcnLCBTZXJpZXM6IG51bGwgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuSlNPTi5ZID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5KU09OLlkgPSB7IE1pbjogMCwgTWF4OiAxMDAsIFVuaXRzOiAnJywgU2VyaWVzOiBudWxsIH07XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgQ2FsY3VsYXRlUmFuZ2UgPSAodHlwZTogJ3gnIHwgJ3knIHwgJ3RpbWUnKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICd4Jykge1xyXG4gICAgICAgICAgICBsZXQgZGQgPSB0aGlzLkRhdGEuZmluZChkcyA9PiBkcy5EYXRhU291cmNlLklEID09PSB0aGlzLkpTT04uWC5TZXJpZXMuRGF0YVNvdXJjZUlEKT8uRGF0YSA/PyBbXTtcclxuICAgICAgICAgICAgbGV0IHNzID0gZGQuZmluZChkID0+IGQuSUQgPT09IHRoaXMuSlNPTi5YLlNlcmllcy5JRCkuRGF0YS5tYXAoZCA9PiBkW3RoaXMuSlNPTi5YLlNlcmllcy5GaWVsZF0pO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uWC5NYXggPSBNYXRoLm1heCguLi5zcyk7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5YLk1pbiA9IE1hdGgubWluKC4uLnNzKTtcclxuICAgICAgICAgICAgbGV0IGJ1ZmZlciA9ICh0aGlzLkpTT04uWC5NYXggLSB0aGlzLkpTT04uWC5NaW4pICogLjEwO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uWC5NYXggPSB0aGlzLkpTT04uWC5NYXggKyBidWZmZXI7XHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5YLk1pbiA9IHRoaXMuSlNPTi5YLk1pbiAtIGJ1ZmZlcjtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAneScpIHtcclxuICAgICAgICAgICAgbGV0IGRkID0gdGhpcy5EYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gdGhpcy5KU09OLlkuU2VyaWVzLkRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW107XHJcbiAgICAgICAgICAgIGxldCBzcyA9IGRkLmZpbmQoZCA9PiBkLklEID09PSB0aGlzLkpTT04uWS5TZXJpZXMuSUQpLkRhdGEubWFwKGQgPT4gZFt0aGlzLkpTT04uWS5TZXJpZXMuRmllbGRdKTtcclxuICAgICAgICAgICAgdGhpcy5KU09OLlkuTWF4ID0gTWF0aC5tYXgoLi4uc3MpO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uWS5NaW4gPSBNYXRoLm1pbiguLi5zcyk7XHJcbiAgICAgICAgICAgIGxldCBidWZmZXIgPSAodGhpcy5KU09OLlkuTWF4IC0gdGhpcy5KU09OLlkuTWluKSAqIC4xMDtcclxuICAgICAgICAgICAgdGhpcy5KU09OLlkuTWF4ID0gdGhpcy5KU09OLlkuTWF4ICsgYnVmZmVyO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uWS5NaW4gPSB0aGlzLkpTT04uWS5NaW4gLSBidWZmZXI7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGRkID0gdGhpcy5EYXRhLmZpbmQoZHMgPT4gZHMuRGF0YVNvdXJjZS5JRCA9PT0gdGhpcy5KU09OLlguU2VyaWVzLkRhdGFTb3VyY2VJRCk/LkRhdGEgPz8gW107XHJcblxyXG4gICAgICAgICAgICBsZXQgc3MgPSBkZC5maW5kKGQgPT4gZC5JRCA9PT0gdGhpcy5KU09OLlguU2VyaWVzLklEKS5EYXRhLm1hcChkID0+IG5ldyBEYXRlKGQuVGltZXN0YW1wKS5nZXRUaW1lKCkpO1xyXG4gICAgICAgICAgICB0aGlzLkpTT04uVGltZU1heCA9IE1hdGgubWF4KC4uLnNzKTtcclxuICAgICAgICAgICAgdGhpcy5KU09OLlRpbWVNaW4gPSBNYXRoLm1pbiguLi5zcyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBYdnNZKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcHVibGljIFNldEF4aXMgPSAoYXhpczogJ3gnIHwgJ3knLCBmaWVsZDoga2V5b2YgVHJlbkRBUC5pQXhpcywgdmFsdWU6IFRyZW5EQVAuaUF4aXNba2V5b2YgVHJlbkRBUC5pQXhpc10pID0+IHtcclxuICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKVxyXG4gICAgICAgICAgICAodGhpcy5KU09OLlhbZmllbGRdIGFzIGFueSkgPSB2YWx1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICh0aGlzLkpTT04uWVtmaWVsZF0gYXMgYW55KSA9IHZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFh2c1kodGhpcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBTZXRTZXJpZXMgPSAoYXhpczogJ3gnIHwgJ3knLCBpZDogbnVtYmVyIHwgc3RyaW5nLCBkc0lEOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZihheGlzID09PSAneCcpXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5YLlNlcmllcyA9IHsgSUQ6IGlkLnRvU3RyaW5nKCksIERhdGFTb3VyY2VJRDogZHNJRCwgRmllbGQ6ICdBdmVyYWdlJyB9O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5KU09OLlkuU2VyaWVzID0geyBJRDogaWQudG9TdHJpbmcoKSwgRGF0YVNvdXJjZUlEOiBkc0lELCBGaWVsZDogJ0F2ZXJhZ2UnIH07XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgWHZzWSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlU2VyaWVzID0gKGF4aXM6ICd4JyB8ICd5JywgZmllbGQ6IGtleW9mIFRyZW5EQVAuaVNlcmllcywgdmFsdWU6IFRyZW5EQVAuaVNlcmllc1trZXlvZiBUcmVuREFQLmlTZXJpZXNdKSA9PiB7XHJcbiAgICAgICAgaWYgKGF4aXMgPT09ICd4JylcclxuICAgICAgICAgICAgKHRoaXMuSlNPTi5YLlNlcmllc1tmaWVsZF0gYXMgYW55KSA9IHZhbHVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgKHRoaXMuSlNPTi5ZLlNlcmllc1tmaWVsZF0gYXMgYW55KSA9IHZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFh2c1kodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW1vdmVTZXJpZXMgPSAoYXhpczogJ3gnIHwgJ3knKSA9PiB7XHJcbiAgICAgICAgaWYgKGF4aXMgPT09ICd4JylcclxuICAgICAgICAgICAgdGhpcy5KU09OLlguU2VyaWVzID0gbnVsbDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuSlNPTi5ZLlNlcmllcyA9IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgWHZzWSh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVdpZGdldCh0eXBlOiBUcmVuREFQLldpZGdldFR5cGUsIGhlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZSA9PSAnSGlzdG9ncmFtJylcclxuICAgICAgICByZXR1cm4gbmV3IEhpc3RvZ3JhbSh7SGVpZ2h0OiBoZWlnaHQsIFdpZHRoOiB3aWR0aCwgTGFiZWw6IHR5cGUsIFR5cGU6IHR5cGUsIEpTT046IHVuZGVmaW5lZCB9KTtcclxuICAgIC8vZWxzZSBpZiAodHlwZSA9PSAnUHJvZmlsZScpXHJcbiAgICAvLyAgICByZXR1cm4gbmV3IFByb2ZpbGUoaGVpZ2h0LCB3aWR0aCk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09ICdTdGF0cycpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0cyh7IEhlaWdodDogaGVpZ2h0LCBXaWR0aDogd2lkdGgsIExhYmVsOiB0eXBlLCBUeXBlOiB0eXBlLCBKU09OOiB1bmRlZmluZWQgfSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09ICdUYWJsZScpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZSh7IEhlaWdodDogaGVpZ2h0LCBXaWR0aDogd2lkdGgsIExhYmVsOiB0eXBlLCBUeXBlOiB0eXBlLCBKU09OOiB1bmRlZmluZWQgfSk7XHJcbiAgICBlbHNlIGlmICh0eXBlID09ICdUZXh0JylcclxuICAgICAgICByZXR1cm4gbmV3IFRleHQoeyBIZWlnaHQ6IGhlaWdodCwgV2lkdGg6IHdpZHRoLCBMYWJlbDogdHlwZSwgVHlwZTogdHlwZSwgSlNPTjogdW5kZWZpbmVkIH0pO1xyXG4gICAgZWxzZSBpZiAodHlwZSA9PSAnVHJlbmQnKVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJlbmQoeyBIZWlnaHQ6IGhlaWdodCwgV2lkdGg6IHdpZHRoLCBMYWJlbDogdHlwZSwgVHlwZTogdHlwZSwgSlNPTjogdW5kZWZpbmVkIH0pO1xyXG4gICAgaWYgKHR5cGUgPT0gJ1h2c1knKVxyXG4gICAgICAgIHJldHVybiBuZXcgWHZzWSh7IEhlaWdodDogaGVpZ2h0LCBXaWR0aDogd2lkdGgsIExhYmVsOiB0eXBlLCBUeXBlOiB0eXBlLCBKU09OOiB1bmRlZmluZWQgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdldENvbG9yKGxhYmVsPzogc3RyaW5nKSB7XHJcbiAgICBpZiAobGFiZWwgPT0gdW5kZWZpbmVkKSByZXR1cm4gUmFuZG9tQ29sb3IoKTtcclxuICAgIGVsc2UgaWYgKGxhYmVsLmluZGV4T2YoJ1ZvbHRhZ2UgQScpID49IDApIHJldHVybiAnI0EzMDAwMCc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdWb2x0YWdlIEInKSA+PSAwKSByZXR1cm4gJyMwMDI5QTMnO1xyXG4gICAgZWxzZSBpZiAobGFiZWwuaW5kZXhPZignVm9sdGFnZSBDJykgPj0gMCkgcmV0dXJuICcjMDA3QTI5JztcclxuICAgIGVsc2UgaWYgKGxhYmVsLmluZGV4T2YoJ1ZvbHRhZ2UgTicpID49IDApIHJldHVybiAnI2MzYzNjMyc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdDdXJyZW50IEEnKSA+PSAwKSByZXR1cm4gJyNGRjAwMDAnO1xyXG4gICAgZWxzZSBpZiAobGFiZWwuaW5kZXhPZignQ3VycmVudCBCJykgPj0gMCkgcmV0dXJuICcjMDA2NkNDJztcclxuICAgIGVsc2UgaWYgKGxhYmVsLmluZGV4T2YoJ0N1cnJlbnQgQycpID49IDApIHJldHVybiAnIzMzQ0MzMyc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdBTicpID49IDApIHJldHVybiAnI0ZGMDAwMCc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdCTicpID49IDApIHJldHVybiAnIzAwNjZDQyc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdDTicpID49IDApIHJldHVybiAnIzMzQ0MzMyc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdORycpID49IDApIHJldHVybiAnI2MzYzNjMyc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdSRVMnKSA+PSAwKSByZXR1cm4gJyNmZmMxMDcnO1xyXG4gICAgZWxzZSBpZiAobGFiZWwuaW5kZXhPZignQXZlcmFnZScpID49IDApIHJldHVybiAnIzlBNTJBNCc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdUb3RhbCcpID49IDApIHJldHVybiAnIzlBNTJBNCc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdTMCcpID49IDApIHJldHVybiAnI0EzMDAwMCc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdTMicpID49IDApIHJldHVybiAnIzAwN0EyOSc7XHJcbiAgICBlbHNlIGlmIChsYWJlbC5pbmRleE9mKCdTMScpID49IDApIHJldHVybiAnIzAwMjlBMyc7XHJcbiAgICBlbHNlIHJldHVybiBSYW5kb21Db2xvcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
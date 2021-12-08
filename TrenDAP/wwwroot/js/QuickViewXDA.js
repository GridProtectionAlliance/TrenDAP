(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["QuickViewXDA"],{

/***/ "./wwwroot/TypeScript/Features/OpenXDA/QuickViewOpenXDA.tsx":
/*!******************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/OpenXDA/QuickViewOpenXDA.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Forms_MultiCheckBoxSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Forms/MultiCheckBoxSelect */ "./wwwroot/TypeScript/Forms/MultiCheckBoxSelect.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var stats_lite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stats-lite */ "./node_modules/stats-lite/stats.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
//******************************************************************************************************
//  QuickViewOpenXDA.tsx - Gbtc
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
//  08/16/2021 - Billy Ernest
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
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};




//import { ExportToCsv } from '../ExportCSV';





var MomentDateTimeFormat = 'YYYY-MM-DDTHH:mm:ssZ';
var MomentDateFormat = 'YYYY-MM-DD';
var MomentTimeZone = 'America/Chicago';
var QuickViewOpenXDA = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), meters = _a[0], setMeters = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined), 2), meter = _b[0], setMeter = _b[1];
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), channels = _c[0], setChannels = _c[1];
    var _d = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState('stats'), 2), showStats = _d[0], setShowStats = _d[1];
    var _e = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(0), 2), hover = _e[0], setHover = _e[1];
    var _f = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState([]), 2), data = _f[0], setData = _f[1];
    var _g = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(true), 2), loading = _g[0], setLoading = _g[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var json = JSON.parse(localStorage.getItem('QuickViewOpenXDA'));
        jquery__WEBPACK_IMPORTED_MODULE_1___default().ajax({
            type: "POST",
            url: homePath + "api/DataSet/QuickView/" + json.DataSourceID,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(json.PostData),
            cache: false,
            async: true
        }).done(function (d) {
            d = lodash__WEBPACK_IMPORTED_MODULE_2___default().orderBy(d, ['Meter']);
            setData(d);
            var ms = __spreadArray([], __read((new Set(d.map(function (d) { return d.Meter; })))));
            setMeters(ms);
            var m = ms[0];
            setMeter(m);
            var cs = d.filter(function (ch) { return ch.Meter == m; }).map(function (ch) { return ({ Channel: ch, Selected: true }); });
            setChannels(cs);
            setLoading(false);
        });
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    }, [meters]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (data.length == 0 || channels.length == 0)
            return;
        var cs = data.filter(function (ch) { return ch.Meter == meter; }).map(function (ch) { var _a, _b; return ({ Channel: ch, Selected: (_b = (_a = channels.filter(function (c) { return c.Channel.Name == ch.Name; })[0]) === null || _a === void 0 ? void 0 : _a.Selected) !== null && _b !== void 0 ? _b : false }); });
        setChannels(cs);
    }, [meter]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { height: "100%", width: '100%' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { height: 130, margin: 5 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { padding: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body", style: { height: 130 } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Meter"),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: 'form-control', value: meter, onChange: function (evt) { return setMeter(meters.find(function (m) { return m === evt.target.value; })); } }, meters.map(function (m, i) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: i, value: m }, m); }))),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Channels"),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Forms_MultiCheckBoxSelect__WEBPACK_IMPORTED_MODULE_3__.default, { Options: channels.map(function (t) { return ({ Text: t.Channel.Name, Value: t.Channel.Name, Selected: t.Selected }); }), OnChange: function (evt, options) {
                                        var newChannels = lodash__WEBPACK_IMPORTED_MODULE_2___default().cloneDeep(channels);
                                        jquery__WEBPACK_IMPORTED_MODULE_1___default().each(options, function (index, option) {
                                            newChannels.find(function (type) { return type.Channel.Name == option.Value; }).Selected = !option.Selected;
                                        });
                                        setChannels(newChannels);
                                    } })),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'col-1' },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Summary"),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { className: 'form-control', value: showStats, onChange: function (evt) { return setShowStats(evt.target.value); } },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'stats' }, "Stats"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: 'cp' }, "CP")))))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { maxHeight: "calc(100% - 135px)", overflowY: 'auto', margin: '5px 5px 5px 5px ' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col", style: { padding: '0px 2px 0px 0px' } }, loading ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Loading ...") :
                __spreadArray([], __read(new Set(channels.filter(function (c) { return c.Selected; }).map(function (c) { return c.Channel.Type + ' ' + c.Channel.Characteristic + ' (' + c.Channel.Unit + ')'; })))).map(function (k) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Chart, { key: k, ShowStats: showStats, Name: k, Channels: channels.filter(function (c) { return c.Selected && (c.Channel.Type + ' ' + c.Channel.Characteristic + ' (' + c.Channel.Unit + ')') == k; }).map(function (ch) { return ch.Channel; }), Hover: hover, SetHover: function (hov) {
                        if (Math.abs(hov - hover) > 5)
                            setHover(hov);
                    }, SetZoom: function (s, e) {
                    } }); })))));
};
var Chart = function (props) {
    var svgHeight = 300;
    var svgWidth = window.innerWidth - 850;
    var margin = { top: 40, right: 0, bottom: 40, left: 50 };
    var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({}), 2), hoverData = _a[0], setHoverData = _a[1];
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState({}), 2), data = _b[0], setData = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var e_1, _a;
        if (props.Channels.length > 0 && Object.keys(data).length == 0) {
            var dict_1 = {};
            var i = 0;
            try {
                for (var _b = __values(props.Channels), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var channel = _c.value;
                    dict_1[channel.Name + '-Avg'] = {
                        Channel: channel,
                        Field: 'avg',
                        Data: channel.Data.map(function (d) { return ({ TimeStamp: moment__WEBPACK_IMPORTED_MODULE_4___default().utc(d.Timestamp, MomentDateTimeFormat), Value: d.Average }); }),
                        Selected: true,
                        Max: 0,
                        Min: 0,
                        Avg: 0,
                        StDev: 0, CP99: 0, CP95: 0, CP50: 0, CP05: 0, CP01: 0, DataPoints: channel.Data.length, Outliers: 0
                    };
                    dict_1[channel.Name + '-Min'] = {
                        Channel: channel,
                        Field: 'min',
                        Data: channel.Data.map(function (d) { return ({ TimeStamp: moment__WEBPACK_IMPORTED_MODULE_4___default().utc(d.Timestamp, MomentDateTimeFormat), Value: d.Minimum }); }),
                        Selected: true,
                        Max: 0,
                        Min: 0,
                        Avg: 0,
                        StDev: 0, CP99: 0, CP95: 0, CP50: 0, CP05: 0, CP01: 0, DataPoints: channel.Data.length, Outliers: 0
                    };
                    dict_1[channel.Name + '-Max'] = {
                        Channel: channel,
                        Field: 'max',
                        Data: channel.Data.map(function (d) { return ({ TimeStamp: moment__WEBPACK_IMPORTED_MODULE_4___default().utc(d.Timestamp, MomentDateTimeFormat), Value: d.Maximum }); }),
                        Selected: true,
                        Max: 0,
                        Min: 0,
                        Avg: 0,
                        StDev: 0, CP99: 0, CP95: 0, CP50: 0, CP05: 0, CP01: 0, DataPoints: channel.Data.length, Outliers: 0
                    };
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var hovDict_1 = {};
            jquery__WEBPACK_IMPORTED_MODULE_1___default().each(Object.keys(dict_1), function (i, key) {
                dict_1[key].Min = Math.min.apply(Math, __spreadArray([], __read(dict_1[key].Data.map(function (d) { return d.Value; }))));
                dict_1[key].Max = Math.max.apply(Math, __spreadArray([], __read(dict_1[key].Data.map(function (d) { return d.Value; }))));
                dict_1[key].Avg = stats_lite__WEBPACK_IMPORTED_MODULE_7__.mean(dict_1[key].Data.map(function (d) { return d.Value; }));
                dict_1[key].StDev = stats_lite__WEBPACK_IMPORTED_MODULE_7__.stdev(dict_1[key].Data.map(function (d) { return d.Value; }));
                dict_1[key].CP99 = stats_lite__WEBPACK_IMPORTED_MODULE_7__.percentile(dict_1[key].Data.map(function (d) { return d.Value; }), 0.99);
                dict_1[key].CP95 = stats_lite__WEBPACK_IMPORTED_MODULE_7__.percentile(dict_1[key].Data.map(function (d) { return d.Value; }), 0.95);
                dict_1[key].CP50 = stats_lite__WEBPACK_IMPORTED_MODULE_7__.percentile(dict_1[key].Data.map(function (d) { return d.Value; }), 0.5);
                dict_1[key].CP05 = stats_lite__WEBPACK_IMPORTED_MODULE_7__.percentile(dict_1[key].Data.map(function (d) { return d.Value; }), 0.05);
                dict_1[key].CP01 = stats_lite__WEBPACK_IMPORTED_MODULE_7__.percentile(dict_1[key].Data.map(function (d) { return d.Value; }), 0.01);
                var lowerBound = dict_1[key].Avg - 3 * dict_1[key].StDev;
                var upperBound = dict_1[key].Avg + 3 * dict_1[key].StDev;
                dict_1[key].Outliers = dict_1[key].Data.filter(function (d) { return d.Value < lowerBound || d.Value > upperBound; }).length;
                dict_1[key].DataPoints = dict_1[key].Data.length;
                hovDict_1[key] = dict_1[key].Data[0].Value;
            });
            setData(dict_1);
            setHoverData(hovDict_1);
        }
    }, [props.Channels]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () { return DrawChart(); }, [data]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (props.Hover < margin.left)
            return;
        else if (props.Hover > svgWidth - margin.right)
            return;
        var svg = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__.default)(ref.current).select('svg');
        svg.selectAll("g.hover-line").remove();
        svg.append("g")
            .classed("hover-line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", 'red')
            .attr("d", "M " + props.Hover + " " + (svgHeight - margin.bottom) + " V " + margin.top);
        //let x = scaleUtc().rangeRound([margin.left, svgWidth - margin.right]);
        //x.domain([moment.utc(props.StartDate, MomentDateTimeFormat), moment.utc(props.EndDate, MomentDateTimeFormat)]);
        //let ts = moment.utc(x.invert(props.Hover)).format(MomentDateTimeFormat);
        var hovDict = {};
        var mult = (props.Hover - margin.left - margin.right) / (svgWidth - margin.left - margin.right);
        jquery__WEBPACK_IMPORTED_MODULE_1___default().each(Object.keys(data), function (i, key) {
            var length = data[key].Data.length;
            var index = Math.floor(mult * length);
            //console.log(ts, data[key].Data[index].TimeStamp);
            hovDict[key] = data[key].Data[index].Value;
        });
        setHoverData(hovDict);
    }, [props.Hover]);
    function DrawChart() {
        var x = (0,d3__WEBPACK_IMPORTED_MODULE_6__.scaleUtc)().rangeRound([margin.left, svgWidth - margin.right]);
        var y = (0,d3__WEBPACK_IMPORTED_MODULE_6__.scaleLinear)().rangeRound([svgHeight - margin.top, margin.bottom]);
        (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__.default)(ref.current).selectAll('svg').remove();
        var svg = (0,d3_selection__WEBPACK_IMPORTED_MODULE_8__.default)(ref.current)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)
            .style('user-select', 'none')
            .on('mousemove', function (d) {
            console.log('mousemove');
            props.SetHover(d.offsetX);
        });
        //.on('mousedown', (d: MouseEvent) => OnXZoom(d, svg, x));
        var yextent = (0,d3__WEBPACK_IMPORTED_MODULE_6__.extent)([].concat.apply([], __spreadArray([], __read(Object.keys(data).filter(function (key) { return data[key].Selected; }).map(function (key) { return data[key].Data.map(function (d) { return d.Value; }); })))));
        y.domain(yextent);
        var xextent = (0,d3__WEBPACK_IMPORTED_MODULE_6__.extent)([].concat.apply([], __spreadArray([], __read(Object.keys(data).filter(function (key) { return data[key].Selected; }).map(function (key) { return data[key].Data.map(function (d) { return d.TimeStamp; }); })))));
        x.domain(xextent);
        var xAxis = svg.append("g").classed('xaxis', true)
            .attr("transform", "translate(0," + (svgHeight - margin.bottom) + ")")
            .call((0,d3__WEBPACK_IMPORTED_MODULE_6__.axisBottom)(x));
        var yAxis = svg.append("g").classed('yaxis', true)
            .attr("transform", "translate(" + margin.left + ",0)")
            .call((0,d3__WEBPACK_IMPORTED_MODULE_6__.axisLeft)(y).ticks(Math.floor(svgHeight / 50) + 1).tickFormat(function (value) { return (0,d3__WEBPACK_IMPORTED_MODULE_6__.format)("~s")(value); }));
        var linefunc = (0,d3__WEBPACK_IMPORTED_MODULE_6__.line)().x(function (d) { return x(moment__WEBPACK_IMPORTED_MODULE_4___default().utc(d.TimeStamp)); }).y(function (d) { return y(d.Value); });
        svg.selectAll("g.min-line").remove();
        svg.selectAll("g.min-line")
            .data(Object.keys(data).filter(function (key) { return data[key].Field == 'min' && data[key].Selected; }))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", 4)
            .attr("stroke", function (d) { return getColor(data[d].Channel.Phase); })
            .attr("d", function (d) {
            return linefunc(data[d].Data);
        });
        svg.selectAll("g.avg-line").remove();
        svg.selectAll("g.avg-line")
            .data(Object.keys(data).filter(function (key) { return data[key].Field == 'avg' && data[key].Selected; }))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke", function (d) { return getColor(data[d].Channel.Phase); })
            .attr("d", function (d) {
            return linefunc(data[d].Data);
        });
        svg.selectAll("g.max-line").remove();
        svg.selectAll("g.max-line")
            .data(Object.keys(data).filter(function (key) { return data[key].Field == 'max' && data[key].Selected; }))
            .enter()
            .append("g")
            .classed("line", true)
            .append("path")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .attr("stroke-dasharray", function (d) { return 2; })
            .attr("stroke", function (d) { return getColor(data[d].Channel.Phase); })
            .attr("d", function (d) {
            return linefunc(data[d].Data);
        });
    }
    function getColor(label) {
        if (label.toUpperCase().indexOf('AN') >= 0)
            return '#A30000'; // darker red
        else if (label.toUpperCase().indexOf('BN') >= 0)
            return '#0029A3';
        else if (label.toUpperCase().indexOf('CN') >= 0)
            return '#007A29';
        else if (label.toUpperCase().indexOf('NG') >= 0)
            return '#c3c3c3'; // grey
        else if (label.toUpperCase().indexOf('AB') >= 0)
            return '#FF0000'; // brighter red
        else if (label.toUpperCase().indexOf('BC') >= 0)
            return '#0066CC';
        else if (label.toUpperCase().indexOf('CA') >= 0)
            return '#33CC33'; // grey
        else if (label.toUpperCase().indexOf('RES') >= 0)
            return '#c3c3c3'; // grey
        else if (label.toUpperCase().indexOf('ALL') >= 0)
            return '#c3c3c3'; // grey
        else {
            var ranNumOne = Math.floor(Math.random() * 256).toString(16);
            var ranNumTwo = Math.floor(Math.random() * 256).toString(16);
            var ranNumThree = Math.floor(Math.random() * 256).toString(16);
            return "#" + (ranNumOne.length > 1 ? ranNumOne : "0" + ranNumOne) + (ranNumTwo.length > 1 ? ranNumTwo : "0" + ranNumTwo) + (ranNumThree.length > 1 ? ranNumThree : "0" + ranNumThree);
        }
    }
    function getlabel(label) {
        if (label.toUpperCase().indexOf('MAX') >= 0)
            return 'Max';
        else if (label.toUpperCase().indexOf('MIN') >= 0)
            return 'Min';
        else
            return 'Avg';
    }
    function getDashArray(label) {
        if (label.toUpperCase().indexOf('MAX') >= 0)
            return 2;
        else if (label.toUpperCase().indexOf('MIN') >= 0)
            return 4;
        else
            return null;
    }
    function getLine(tag, measurement) {
        var path = "M 0 17  C 10 0, 20 0, 25 10 S 32 25, 45 17";
        if (measurement.Selected)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { height: 25, width: 50, onClick: function () {
                    var newData = __assign({}, data);
                    newData[tag].Selected = false;
                    setData(newData);
                } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: path, stroke: getColor(measurement.Channel.Phase), strokeDasharray: getDashArray(measurement.Field), strokeWidth: 1.5, fill: "transparent" }));
        else
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { height: 25, width: 50, onClick: function () {
                    var newData = __assign({}, data);
                    newData[tag].Selected = true;
                    setData(newData);
                } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: path, stroke: getColor(measurement.Channel.Phase), strokeDasharray: getDashArray(measurement.Field), strokeWidth: 1.5, fill: "transparent", opacity: 0.2 }));
    }
    function formatText(num) {
        if (num >= 10)
            return num.toFixed(0);
        else if (num >= 0)
            return num.toFixed(2);
        else if (num >= 0.0001)
            return num.toFixed(4);
        else if (num >= 0.000001)
            return num.toFixed(6);
        else
            return num;
    }
    //function OnXZoom(evt: MouseEvent, svg: d3.Selection<SVGSVGElement, unknown, null, undefined>, scale: d3.ScaleTime<number, number>) {
    //    const start = evt.offsetX;
    //    const brush = brushX()
    //        .extent([[margin.left, margin.top + 0.5], [svgWidth - margin.right, svgHeight - margin.bottom + 0.5]])
    //    const br = svg.append('g').call(brush)
    //    br.call(brush.move, [start, start + 1]);
    //    svg.on('mousemove.brush', (e: MouseEvent) => {
    //        br.call(brush.move, [start, e.offsetX]);
    //    })
    //    svg.on('mouseup.brush', (e: MouseEvent) => {
    //        const min = Math.min(start, e.offsetX);
    //        const max = Math.max(start, e.offsetX);
    //        props.SetZoom(moment(scale.invert(min)).format(MomentDateTimeFormat), moment(scale.invert(max)).format(MomentDateTimeFormat));
    //        br.remove();
    //        svg.on('mousemove.brush', null);
    //        svg.on('mouseup.brush', null);
    //    });
    //}
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" }, props.Name),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body", style: { padding: 0, position: 'relative' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: ref, className: 'pull-left', style: { height: 300, width: 'calc(100% - 400px)', position: 'absolute', top: 0, left: 0 } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: 'pull-right', style: { height: 300, maxHeight: 300, overflowY: 'auto', width: window.innerWidth / 3 - 75, position: 'relative', right: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: 'table' },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Phase"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Hover"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "Min"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "Avg"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "Max"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "StDev"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, "CP99"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, "CP95"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, "CP50"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, "CP05"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, "CP01"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "Counts"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, "Outliers"))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, Object.keys(data).map(function (key) {
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: key },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                                data[key].Channel.Phase,
                                "-",
                                getlabel(key)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, getLine(key, data[key])),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, formatText(hoverData[key])),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].Min)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].Avg)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].Max)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].StDev)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].CP99)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].CP95)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].CP50)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].CP05)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { display: props.ShowStats == 'cp' ? 'table-cell' : 'none', padding: 5 } }, formatText(data[key].CP01)),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, data[key].DataPoints),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: { display: props.ShowStats == 'stats' ? 'table-cell' : 'none', padding: 5 } }, data[key].Outliers));
                    })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickViewOpenXDA);


/***/ }),

/***/ "./wwwroot/TypeScript/Forms/MultiCheckBoxSelect.tsx":
/*!**********************************************************!*\
  !*** ./wwwroot/TypeScript/Forms/MultiCheckBoxSelect.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// ******************************************************************************************************
//  MultiCheckBoxSelect.tsx - Gbtc
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
//  07/17/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
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

var MultiSelect = function (props) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__.useState(false), 2), show = _a[0], setShow = _a[1];
    var multiSelect = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    function HandleShow(evt) {
        if (multiSelect.current === null)
            setShow(!show);
        else if (!multiSelect.current.contains(evt.target))
            setShow(false);
        else
            setShow(true);
    }
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        document.addEventListener('mousedown', HandleShow, false);
        return function () {
            document.removeEventListener('mousedown', HandleShow, false);
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: multiSelect, style: { position: 'relative', display: 'inline-block', width: 'inherit' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: { border: '1px solid #ced4da', padding: '.375rem .75rem', fontSize: '1rem', borderRadius: '.25rem' }, className: "btn form-control dropdown-toggle", onClick: HandleShow },
            props.Options.filter(function (x) { return x.Selected; }).length !== props.Options.length
                ? props.Options.filter(function (x) { return x.Selected; }).length
                : 'All ',
            ' ',
            "Selected"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                maxHeight: window.innerHeight * 0.75,
                overflowY: 'auto',
                padding: '10 5',
                display: show ? 'block' : 'none',
                position: 'absolute',
                backgroundColor: '#fff',
                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                zIndex: 401,
                minWidth: '100%',
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: "table", style: { margin: 0 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { onClick: function (evt) {
                            evt.preventDefault();
                            props.OnChange(evt, props.Options.filter(function (x) { return x.Selected === (props.Options.filter(function (o) { return o.Selected; }).length === props.Options.length); }));
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "checkbox", checked: props.Options.filter(function (x) { return x.Selected; }).length === props.Options.length, onChange: function () { return null; } })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "All")),
                    props.Options.map(function (f, i) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: i, onClick: function (evt) { return props.OnChange(evt, [f]); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "checkbox", checked: f.Selected, onChange: function () { return null; } })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, f.Text))); }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiSelect);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL09wZW5YREEvUXVpY2tWaWV3T3BlblhEQS50c3giLCJ3ZWJwYWNrOi8vdHJlbmRhcC8uL3d3d3Jvb3QvVHlwZVNjcmlwdC9Gb3Jtcy9NdWx0aUNoZWNrQm94U2VsZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3R0FBd0c7QUFDeEcsK0JBQStCO0FBQy9CLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFO0FBQ0g7QUFDQTtBQUM2QztBQUdwRSw2Q0FBNkM7QUFDTDtBQUNmO0FBQzZGO0FBQ2hGO0FBQ1A7QUFJL0IsSUFBTSxvQkFBb0IsR0FBRyxzQkFBc0I7QUFDbkQsSUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7QUFDdEMsSUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUM7QUFFekMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQVM7SUFDekIsZ0JBQXNCLDJDQUFjLENBQVcsRUFBRSxDQUFDLE1BQWpELE1BQU0sVUFBRSxTQUFTLFFBQWdDLENBQUM7SUFDbkQsZ0JBQW9CLDJDQUFjLENBQVMsU0FBUyxDQUFDLE1BQXBELEtBQUssVUFBRSxRQUFRLFFBQXFDLENBQUM7SUFDdEQsZ0JBQTBCLDJDQUFjLENBQTJELEVBQUUsQ0FBQyxNQUFyRyxR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QUssRUFBUCxDQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDMUUsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxrREFBZ0IsQ0FBQyxNQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEtBQUssRUFBUCxDQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFMUUsSUFBSSxVQUFVLEdBQUcsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDckQsSUFBSSxVQUFVLEdBQUcsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFFckQsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxNQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLEtBQUssR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQTVDLENBQTRDLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JHLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEdBQUcsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzdDLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztZQUdILE9BQU8sQ0FBQyxNQUFJLENBQUMsQ0FBQztZQUNkLFlBQVksQ0FBQyxTQUFPLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFD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QUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQU07NEJBQ3hILHlEQUFJLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQU07NEJBQzFILHlEQUFJLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU07NEJBQ3RILHlEQUFJLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU07NEJBQ3RILHlEQUFJLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU07NEJBQ3RILHlEQUFJLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxD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VUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLFFBQVEsRUFBVixDQUFVLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBeEYsQ0FBd0YsQ0FDbEcsQ0FDSixDQUFDO3dCQUNOLENBQUM7d0JBRUQ7NEJBQ0ksNERBQ0ksSUFBSSxFQUFDLFVBQVUsRUFDZixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLFFBQVEsRUFBVixDQUFVLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ2hGLFFBQVEsRUFBRSxjQUFNLFdBQUksRUFBSixDQUFJLEdBQ3RCLENBQ0Q7d0JBQ0wsbUVBQVksQ0FDWDtvQkFDSixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFDekIseURBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBQyxHQUFHLElBQUssWUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF4QixDQUF3Qjt3QkFDbEQ7NEJBQ0ksNERBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsY0FBTSxXQUFJLEVBQUosQ0FBSSxHQUFJLENBQ25FO3dCQUNMLDZEQUFLLENBQUMsQ0FBQyxJQUFJLENBQU0sQ0FDaEIsQ0FDUixFQVA0QixDQU81QixDQUFDLENBQ0UsQ0FDSixDQUNOLENBQ0osQ0FDVCxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBQ0YsaUVBQWUsV0FBVyxFQUFDIiwiZmlsZSI6IlF1aWNrVmlld1hEQS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBRdWlja1ZpZXdPcGVuWERBLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIxLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOC8xNi8yMDIxIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IE11bHRpQ2hlY2tCb3hTZWxlY3QgZnJvbSAnLi8uLi8uLi9Gb3Jtcy9NdWx0aUNoZWNrQm94U2VsZWN0JztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCJcclxuLy9pbXBvcnQgeyBFeHBvcnRUb0NzdiB9IGZyb20gJy4uL0V4cG9ydENTVic7XHJcbmltcG9ydCBtb21lbnQsIHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQtdGltZXpvbmUnO1xyXG5pbXBvcnQgeyBzY2FsZUxpbmVhciwgbGluZSwgZXh0ZW50LCBheGlzQm90dG9tLCBheGlzTGVmdCwgZm9ybWF0IGFzIGQzRm9ybWF0LCBzY2FsZVV0Yywgc2NhbGVUaW1lLCBicnVzaFggfSBmcm9tICdkMyc7XHJcbmltcG9ydCB7IHNlbGVjdCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XHJcbmltcG9ydCBzdGF0cyBmcm9tICdzdGF0cy1saXRlJztcclxuLy9pbXBvcnQgRXhwb3J0Q1NWIGZyb20gJy4vRXhwb3J0Q1NWJztcclxuaW1wb3J0IHsgVHJlbkRBUCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcblxyXG5jb25zdCBNb21lbnREYXRlVGltZUZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzWidcclxuY29uc3QgTW9tZW50RGF0ZUZvcm1hdCA9ICdZWVlZLU1NLUREJztcclxuY29uc3QgTW9tZW50VGltZVpvbmUgPSAnQW1lcmljYS9DaGljYWdvJztcclxuXHJcbmNvbnN0IFF1aWNrVmlld09wZW5YREEgPSAocHJvcHM6IHt9KSA9PiB7XHJcbiAgICBjb25zdCBbbWV0ZXJzLCBzZXRNZXRlcnNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICAgIGNvbnN0IFttZXRlciwgc2V0TWV0ZXJdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPih1bmRlZmluZWQpO1xyXG4gICAgY29uc3QgW2NoYW5uZWxzLCBzZXRDaGFubmVsc10gPSBSZWFjdC51c2VTdGF0ZTx7IENoYW5uZWw6IFRyZW5EQVAuaVhEQVJldHVybkRhdGEsIFNlbGVjdGVkOiBib29sZWFuIH1bXT4oW10pO1xyXG4gICAgY29uc3QgW3Nob3dTdGF0cywgc2V0U2hvd1N0YXRzXSA9IFJlYWN0LnVzZVN0YXRlPCdzdGF0cycgfCAnY3AnPignc3RhdHMnKTtcclxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlPFRyZW5EQVAuaVhEQVJldHVybkRhdGFbXT4oW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUXVpY2tWaWV3T3BlblhEQScpKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogYCR7aG9tZVBhdGh9YXBpL0RhdGFTZXQvUXVpY2tWaWV3LyR7anNvbi5EYXRhU291cmNlSUR9YCxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShqc29uLlBvc3REYXRhKSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgICAgIH0pLmRvbmUoKGQ6IFRyZW5EQVAuaVhEQVJldHVybkRhdGFbXSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZCA9IF8ub3JkZXJCeShkLCBbJ01ldGVyJ10pO1xyXG4gICAgICAgICAgICBzZXREYXRhKGQpO1xyXG4gICAgICAgICAgICBsZXQgbXMgPSBbLi4uKG5ldyBTZXQoZC5tYXAoZCA9PiBkLk1ldGVyKSkpXTtcclxuICAgICAgICAgICAgc2V0TWV0ZXJzKG1zKTtcclxuICAgICAgICAgICAgbGV0IG0gPSBtc1swXTtcclxuICAgICAgICAgICAgc2V0TWV0ZXIobSk7XHJcbiAgICAgICAgICAgIGxldCBjcyA9IGQuZmlsdGVyKGNoID0+IGNoLk1ldGVyID09IG0pLm1hcChjaCA9PiAoeyBDaGFubmVsOiBjaCwgU2VsZWN0ZWQ6IHRydWUgfSkpO1xyXG4gICAgICAgICAgICBzZXRDaGFubmVscyhjcyk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIH0sIFttZXRlcnNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PSAwIHx8IGNoYW5uZWxzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNzID0gZGF0YS5maWx0ZXIoY2ggPT4gY2guTWV0ZXIgPT0gbWV0ZXIpLm1hcChjaCA9PiAoeyBDaGFubmVsOiBjaCwgU2VsZWN0ZWQ6IGNoYW5uZWxzLmZpbHRlcihjID0+IGMuQ2hhbm5lbC5OYW1lID09IGNoLk5hbWUpWzBdPy5TZWxlY3RlZCA/PyBmYWxzZSB9KSk7XHJcbiAgICAgICAgc2V0Q2hhbm5lbHMoY3MpO1xyXG4gICAgfSwgW21ldGVyXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgaGVpZ2h0OiAxMzAsIG1hcmdpbjogNSB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IDEzMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1ldGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e21ldGVyfSBvbkNoYW5nZT17KGV2dCkgPT4gc2V0TWV0ZXIobWV0ZXJzLmZpbmQobSA9PiBtID09PSBldnQudGFyZ2V0LnZhbHVlKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGVycy5tYXAoKG0sIGkpID0+IDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17bX0+e219PC9vcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNoYW5uZWxzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpQ2hlY2tCb3hTZWxlY3QgT3B0aW9ucz17Y2hhbm5lbHMubWFwKHQgPT4gKHsgVGV4dDogdC5DaGFubmVsLk5hbWUsIFZhbHVlOiB0LkNoYW5uZWwuTmFtZSwgU2VsZWN0ZWQ6IHQuU2VsZWN0ZWQgfSkpfSBPbkNoYW5nZT17KGV2dCwgb3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0NoYW5uZWxzID0gXy5jbG9uZURlZXAoY2hhbm5lbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMsIChpbmRleCwgb3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hhbm5lbHMuZmluZCh0eXBlID0+IHR5cGUuQ2hhbm5lbC5OYW1lID09IG9wdGlvbi5WYWx1ZSkuU2VsZWN0ZWQgPSAhb3B0aW9uLlNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYW5uZWxzKG5ld0NoYW5uZWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdW1tYXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgdmFsdWU9e3Nob3dTdGF0c30gb25DaGFuZ2U9eyhldnQpID0+IHNldFNob3dTdGF0cyhldnQudGFyZ2V0LnZhbHVlIGFzIGFueSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc3RhdHMnPlN0YXRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdjcCc+Q1A8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xJyBzdHlsZT17eyBwYWRkaW5nVG9wOiAzMCB9fT48RXhwb3J0Q1NWIE1ldGVyPXttZXRlcn0gQ2hhbm5lbHM9e2NoYW5uZWxzLmZpbHRlcihjID0+IGMuU2VsZWN0ZWQpLm1hcChjID0+IGMuQ2hhbm5lbCl9IFN0YXJ0RGF0ZT17ZGF0ZXNbMF19IEVuZERhdGU9e2RhdGVzWzFdfSAvPjwvZGl2PiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1heEhlaWdodDogXCJjYWxjKDEwMCUgLSAxMzVweClcIiwgb3ZlcmZsb3dZOiAnYXV0bycsIG1hcmdpbjogJzVweCA1cHggNXB4IDVweCAnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBwYWRkaW5nOiAnMHB4IDJweCAwcHggMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/IDxzcGFuPkxvYWRpbmcgLi4uPC9zcGFuPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbLi4ubmV3IFNldChjaGFubmVscy5maWx0ZXIoYyA9PiBjLlNlbGVjdGVkKS5tYXAoYyA9PiBjLkNoYW5uZWwuVHlwZSArICcgJyArIGMuQ2hhbm5lbC5DaGFyYWN0ZXJpc3RpYyArICcgKCcgKyBjLkNoYW5uZWwuVW5pdCArICcpJykpXS5tYXAoayA9PiA8Q2hhcnQga2V5PXtrfSBTaG93U3RhdHM9e3Nob3dTdGF0c30gTmFtZT17a30gQ2hhbm5lbHM9e2NoYW5uZWxzLmZpbHRlcihjID0+IGMuU2VsZWN0ZWQgJiYgKGMuQ2hhbm5lbC5UeXBlICsgJyAnICsgYy5DaGFubmVsLkNoYXJhY3RlcmlzdGljICsgJyAoJyArIGMuQ2hhbm5lbC5Vbml0ICsgJyknKSA9PSBrKS5tYXAoY2ggPT4gY2guQ2hhbm5lbCl9IEhvdmVyPXtob3Zlcn0gU2V0SG92ZXI9eyhob3YpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoaG92IC0gaG92ZXIpID4gNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG92ZXIoaG92KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IFNldFpvb209eyhzLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnRTZXJpZXMge1xyXG4gICAgQ2hhbm5lbDogVHJlbkRBUC5pWERBUmV0dXJuRGF0YSwgRmllbGQ6ICdtaW4nIHwgJ21heCcgfCAnYXZnJywgU2VsZWN0ZWQ6IGJvb2xlYW4sIERhdGE6IHsgVGltZVN0YW1wOiBNb21lbnQsIFZhbHVlOiBudW1iZXIgfVtdLCBNaW46IG51bWJlciwgTWF4OiBudW1iZXIsIEF2ZzogbnVtYmVyLCBTdERldjogbnVtYmVyLCBDUDk5OiBudW1iZXIsIENQOTU6IG51bWJlciwgQ1A1MDogbnVtYmVyLCBDUDA1OiBudW1iZXIsIENQMDE6IG51bWJlciwgT3V0bGllcnM6IG51bWJlciwgRGF0YVBvaW50czogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IENoYXJ0ID0gKHByb3BzOiB7IE5hbWU6IHN0cmluZywgQ2hhbm5lbHM6IFRyZW5EQVAuaVhEQVJldHVybkRhdGFbXSwgU2hvd1N0YXRzOiAnc3RhdHMnIHwgJ2NwJywgSG92ZXI6IG51bWJlciwgU2V0SG92ZXI6IChob3Y6IG51bWJlcikgPT4gdm9pZCwgU2V0Wm9vbTogKHN0YXJ0RGF0ZTogc3RyaW5nLCBlbmREYXRlOiBzdHJpbmcpID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgY29uc3Qgc3ZnSGVpZ2h0ID0gMzAwO1xyXG4gICAgY29uc3Qgc3ZnV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDg1MDtcclxuICAgIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiA0MCwgcmlnaHQ6IDAsIGJvdHRvbTogNDAsIGxlZnQ6IDUwIH07XHJcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaG92ZXJEYXRhLCBzZXRIb3ZlckRhdGFdID0gUmVhY3QudXNlU3RhdGU8b2JqZWN0Pih7fSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxvYmplY3Q+KHt9KTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5DaGFubmVscy5sZW5ndGggPiAwICAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgZGljdCA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoYW5uZWwgb2YgcHJvcHMuQ2hhbm5lbHMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaWN0W2NoYW5uZWwuTmFtZSArICctQXZnJ10gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhbm5lbDogY2hhbm5lbCxcclxuICAgICAgICAgICAgICAgICAgICBGaWVsZDogJ2F2ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YTogY2hhbm5lbC5EYXRhLm1hcChkID0+ICh7IFRpbWVTdGFtcDogbW9tZW50LnV0YyhkLlRpbWVzdGFtcCwgTW9tZW50RGF0ZVRpbWVGb3JtYXQpLCBWYWx1ZTogZC5BdmVyYWdlIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICBTZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBNYXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgTWluOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIEF2ZzogMCxcclxuICAgICAgICAgICAgICAgICAgICBTdERldjogMCwgQ1A5OTogMCwgQ1A5NTogMCwgQ1A1MDogMCwgQ1AwNTogMCwgQ1AwMTogMCwgRGF0YVBvaW50czogY2hhbm5lbC5EYXRhLmxlbmd0aCwgT3V0bGllcnM6IDBcclxuICAgICAgICAgICAgICAgIH0gYXMgQ2hhcnRTZXJpZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgZGljdFtjaGFubmVsLk5hbWUgKyAnLU1pbiddID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIENoYW5uZWw6IGNoYW5uZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGQ6ICdtaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIERhdGE6IGNoYW5uZWwuRGF0YS5tYXAoZCA9PiAoeyBUaW1lU3RhbXA6IG1vbWVudC51dGMoZC5UaW1lc3RhbXAsIE1vbWVudERhdGVUaW1lRm9ybWF0KSwgVmFsdWU6IGQuTWluaW11bSB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgTWF4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIE1pbjogMCxcclxuICAgICAgICAgICAgICAgICAgICBBdmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgU3REZXY6IDAsIENQOTk6IDAsIENQOTU6IDAsIENQNTA6IDAsIENQMDU6IDAsIENQMDE6IDAsIERhdGFQb2ludHM6IGNoYW5uZWwuRGF0YS5sZW5ndGgsIE91dGxpZXJzOiAwXHJcbiAgICAgICAgICAgICAgICB9IGFzIENoYXJ0U2VyaWVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpY3RbY2hhbm5lbC5OYW1lICsgJy1NYXgnXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBDaGFubmVsOiBjaGFubmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkOiAnbWF4JyxcclxuICAgICAgICAgICAgICAgICAgICBEYXRhOiBjaGFubmVsLkRhdGEubWFwKGQgPT4gKHsgVGltZVN0YW1wOiBtb21lbnQudXRjKGQuVGltZXN0YW1wLCBNb21lbnREYXRlVGltZUZvcm1hdCksIFZhbHVlOiBkLk1heGltdW0gfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIE1heDogMCxcclxuICAgICAgICAgICAgICAgICAgICBNaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgQXZnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFN0RGV2OiAwLCBDUDk5OiAwLCBDUDk1OiAwLCBDUDUwOiAwLCBDUDA1OiAwLCBDUDAxOiAwLCBEYXRhUG9pbnRzOiBjaGFubmVsLkRhdGEubGVuZ3RoLCBPdXRsaWVyczogMFxyXG4gICAgICAgICAgICAgICAgfSBhcyBDaGFydFNlcmllcztcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGhvdkRpY3QgPSB7fTtcclxuICAgICAgICAgICAgJC5lYWNoKE9iamVjdC5rZXlzKGRpY3QpLCAoaSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uTWluID0gTWF0aC5taW4oLi4uZGljdFtrZXldLkRhdGEubWFwKGQgPT4gZC5WYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLk1heCA9IE1hdGgubWF4KC4uLmRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5BdmcgPSBzdGF0cy5tZWFuKGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5TdERldiA9IHN0YXRzLnN0ZGV2KGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5DUDk5ID0gc3RhdHMucGVyY2VudGlsZShkaWN0W2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSwgMC45OSk7XHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uQ1A5NSA9IHN0YXRzLnBlcmNlbnRpbGUoZGljdFtrZXldLkRhdGEubWFwKGQgPT4gZC5WYWx1ZSksIDAuOTUpO1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLkNQNTAgPSBzdGF0cy5wZXJjZW50aWxlKGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLkNQMDUgPSBzdGF0cy5wZXJjZW50aWxlKGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpLCAwLjA1KTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5DUDAxID0gc3RhdHMucGVyY2VudGlsZShkaWN0W2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSwgMC4wMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VyQm91bmQgPSBkaWN0W2tleV0uQXZnIC0gMyAqIGRpY3Rba2V5XS5TdERldjtcclxuICAgICAgICAgICAgICAgIGxldCB1cHBlckJvdW5kID0gZGljdFtrZXldLkF2ZyArIDMgKiBkaWN0W2tleV0uU3REZXY7XHJcblxyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLk91dGxpZXJzID0gZGljdFtrZXldLkRhdGEuZmlsdGVyKGQgPT4gZC5WYWx1ZSA8IGxvd2VyQm91bmQgfHwgZC5WYWx1ZSA+IHVwcGVyQm91bmQpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5EYXRhUG9pbnRzID0gZGljdFtrZXldLkRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaG92RGljdFtrZXldID0gZGljdFtrZXldLkRhdGFbMF0uVmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNldERhdGEoZGljdCk7XHJcbiAgICAgICAgICAgIHNldEhvdmVyRGF0YShob3ZEaWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuQ2hhbm5lbHNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gRHJhd0NoYXJ0KCksIFtkYXRhXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5Ib3ZlciA8IG1hcmdpbi5sZWZ0KSByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuSG92ZXIgPiBzdmdXaWR0aCAtIG1hcmdpbi5yaWdodCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBzdmcgPSBzZWxlY3QocmVmLmN1cnJlbnQpLnNlbGVjdCgnc3ZnJyk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcuaG92ZXItbGluZVwiKS5yZW1vdmUoKTtcclxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZChcImhvdmVyLWxpbmVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsICdyZWQnKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgYE0gJHtwcm9wcy5Ib3Zlcn0gJHtzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tfSBWICR7bWFyZ2luLnRvcH1gKVxyXG5cclxuICAgICAgICAvL2xldCB4ID0gc2NhbGVVdGMoKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggLSBtYXJnaW4ucmlnaHRdKTtcclxuICAgICAgICAvL3guZG9tYWluKFttb21lbnQudXRjKHByb3BzLlN0YXJ0RGF0ZSwgTW9tZW50RGF0ZVRpbWVGb3JtYXQpLCBtb21lbnQudXRjKHByb3BzLkVuZERhdGUsIE1vbWVudERhdGVUaW1lRm9ybWF0KV0pO1xyXG4gICAgICAgIC8vbGV0IHRzID0gbW9tZW50LnV0Yyh4LmludmVydChwcm9wcy5Ib3ZlcikpLmZvcm1hdChNb21lbnREYXRlVGltZUZvcm1hdCk7XHJcblxyXG4gICAgICAgIGxldCBob3ZEaWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG11bHQgPSAocHJvcHMuSG92ZXIgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCkgLyAoc3ZnV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCk7XHJcblxyXG4gICAgICAgICQuZWFjaChPYmplY3Qua2V5cyhkYXRhKSwgKGksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gZGF0YVtrZXldLkRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKG11bHQgKiBsZW5ndGgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRzLCBkYXRhW2tleV0uRGF0YVtpbmRleF0uVGltZVN0YW1wKTtcclxuXHJcbiAgICAgICAgICAgIGhvdkRpY3Rba2V5XSA9IGRhdGFba2V5XS5EYXRhW2luZGV4XS5WYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRIb3ZlckRhdGEoaG92RGljdCk7XHJcblxyXG4gICAgfSwgW3Byb3BzLkhvdmVyXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gRHJhd0NoYXJ0KCkge1xyXG4gICAgICAgIGxldCB4ID0gc2NhbGVVdGMoKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggLSBtYXJnaW4ucmlnaHRdKTtcclxuICAgICAgICBsZXQgeSA9IHNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcCwgbWFyZ2luLmJvdHRvbV0pO1xyXG5cclxuXHJcbiAgICAgICAgc2VsZWN0KHJlZi5jdXJyZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXHJcbiAgICAgICAgY29uc3Qgc3ZnID0gc2VsZWN0KHJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBzdmdXaWR0aClcclxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHN2Z0hlaWdodClcclxuICAgICAgICAgICAgLnN0eWxlKCd1c2VyLXNlbGVjdCcsICdub25lJylcclxuICAgICAgICAgICAgLm9uKCdtb3VzZW1vdmUnLCAoZDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdXNlbW92ZScpXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5TZXRIb3ZlcihkLm9mZnNldFgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vLm9uKCdtb3VzZWRvd24nLCAoZDogTW91c2VFdmVudCkgPT4gT25YWm9vbShkLCBzdmcsIHgpKTtcclxuXHJcbiAgICAgICAgbGV0IHlleHRlbnQgPSBleHRlbnQoW10uY29uY2F0KC4uLk9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihrZXkgPT4gZGF0YVtrZXldLlNlbGVjdGVkKS5tYXAoa2V5ID0+IGRhdGFba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKSkpO1xyXG4gICAgICAgIHkuZG9tYWluKHlleHRlbnQpO1xyXG4gICAgICAgIGxldCB4ZXh0ZW50ID0gZXh0ZW50KFtdLmNvbmNhdCguLi5PYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoa2V5ID0+IGRhdGFba2V5XS5TZWxlY3RlZCkubWFwKGtleSA9PiBkYXRhW2tleV0uRGF0YS5tYXAoZCA9PiBkLlRpbWVTdGFtcCkpKSk7XHJcbiAgICAgICAgeC5kb21haW4oeGV4dGVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHhBeGlzID0gc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneGF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgKHN2Z0hlaWdodCAtIG1hcmdpbi5ib3R0b20pICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGF4aXNCb3R0b20oeCkpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgeUF4aXMgPSBzdmcuYXBwZW5kKFwiZ1wiKS5jbGFzc2VkKCd5YXhpcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sMClgKVxyXG4gICAgICAgICAgICAuY2FsbChheGlzTGVmdCh5KS50aWNrcyhNYXRoLmZsb29yKHN2Z0hlaWdodCAvIDUwKSArIDEpLnRpY2tGb3JtYXQoKHZhbHVlOiBudW1iZXIpID0+IGQzRm9ybWF0KFwifnNcIikodmFsdWUpKSk7XHJcblxyXG4gICAgICAgIGxldCBsaW5lZnVuYyA9IGxpbmU8eyBUaW1lU3RhbXA6IHN0cmluZywgVmFsdWU6IG51bWJlciwgRmllbGQ6IHN0cmluZyB9PigpLngoZCA9PiB4KG1vbWVudC51dGMoZC5UaW1lU3RhbXApKSkueShkID0+IHkoZC5WYWx1ZSkpO1xyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5taW4tbGluZVwiKS5yZW1vdmUoKTtcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5taW4tbGluZVwiKVxyXG4gICAgICAgICAgICAuZGF0YShPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoa2V5ID0+IGRhdGFba2V5XS5GaWVsZCA9PSAnbWluJyAmJiBkYXRhW2tleV0uU2VsZWN0ZWQpKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZChcImxpbmVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLWRhc2hhcnJheVwiLCA0KVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCAoZDogc3RyaW5nKSA9PiBnZXRDb2xvcihkYXRhW2RdLkNoYW5uZWwuUGhhc2UpKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVmdW5jKGRhdGFbZF0uRGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmF2Zy1saW5lXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLmF2Zy1saW5lXCIpXHJcbiAgICAgICAgICAgIC5kYXRhKE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihrZXkgPT4gZGF0YVtrZXldLkZpZWxkID09ICdhdmcnICYmIGRhdGFba2V5XS5TZWxlY3RlZCkpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwibGluZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgKGQ6IHN0cmluZykgPT4gZ2V0Q29sb3IoZGF0YVtkXS5DaGFubmVsLlBoYXNlKSlcclxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIChkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lZnVuYyhkYXRhW2RdLkRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubWF4LWxpbmVcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubWF4LWxpbmVcIilcclxuICAgICAgICAgICAgLmRhdGEoT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGtleSA9PiBkYXRhW2tleV0uRmllbGQgPT0gJ21heCcgJiYgZGF0YVtrZXldLlNlbGVjdGVkKSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoXCJsaW5lXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgKGQpID0+IDIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIChkOiBzdHJpbmcpID0+IGdldENvbG9yKGRhdGFbZF0uQ2hhbm5lbC5QaGFzZSkpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZWZ1bmMoZGF0YVtkXS5EYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbG9yKGxhYmVsKSB7XHJcbiAgICAgICAgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignQU4nKSA+PSAwKSByZXR1cm4gJyNBMzAwMDAnOyAgIC8vIGRhcmtlciByZWRcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ0JOJykgPj0gMCkgcmV0dXJuICcjMDAyOUEzJztcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ0NOJykgPj0gMCkgcmV0dXJuICcjMDA3QTI5JztcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ05HJykgPj0gMCkgcmV0dXJuICcjYzNjM2MzJzsgICAvLyBncmV5XHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdBQicpID49IDApIHJldHVybiAnI0ZGMDAwMCc7ICAgLy8gYnJpZ2h0ZXIgcmVkXHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdCQycpID49IDApIHJldHVybiAnIzAwNjZDQyc7XHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdDQScpID49IDApIHJldHVybiAnIzMzQ0MzMyc7ICAgLy8gZ3JleVxyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignUkVTJykgPj0gMCkgcmV0dXJuICcjYzNjM2MzJzsgIC8vIGdyZXlcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ0FMTCcpID49IDApIHJldHVybiAnI2MzYzNjMyc7ICAvLyBncmV5XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByYW5OdW1PbmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgdmFyIHJhbk51bVR3byA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICB2YXIgcmFuTnVtVGhyZWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgIyR7KHJhbk51bU9uZS5sZW5ndGggPiAxID8gcmFuTnVtT25lIDogXCIwXCIgKyByYW5OdW1PbmUpfSR7KHJhbk51bVR3by5sZW5ndGggPiAxID8gcmFuTnVtVHdvIDogXCIwXCIgKyByYW5OdW1Ud28pfSR7KHJhbk51bVRocmVlLmxlbmd0aCA+IDEgPyByYW5OdW1UaHJlZSA6IFwiMFwiICsgcmFuTnVtVGhyZWUpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldGxhYmVsKGxhYmVsKSB7XHJcbiAgICAgICAgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUFYJykgPj0gMCkgcmV0dXJuICdNYXgnO1xyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUlOJykgPj0gMCkgcmV0dXJuICdNaW4nO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuICdBdmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldERhc2hBcnJheShsYWJlbCkge1xyXG4gICAgICAgIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01BWCcpID49IDApIHJldHVybiAyO1xyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUlOJykgPj0gMCkgcmV0dXJuIDQ7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMaW5lKHRhZywgbWVhc3VyZW1lbnQpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IFwiTSAwIDE3ICBDIDEwIDAsIDIwIDAsIDI1IDEwIFMgMzIgMjUsIDQ1IDE3XCI7XHJcbiAgICAgICAgaWYgKG1lYXN1cmVtZW50LlNlbGVjdGVkKVxyXG4gICAgICAgICAgICByZXR1cm4gPHN2ZyBoZWlnaHQ9ezI1fSB3aWR0aD17NTB9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0geyAuLi5kYXRhIH07XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhW3RhZ10uU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEobmV3RGF0YSk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD17cGF0aH0gc3Ryb2tlPXtnZXRDb2xvcihtZWFzdXJlbWVudC5DaGFubmVsLlBoYXNlKX0gc3Ryb2tlRGFzaGFycmF5PXtnZXREYXNoQXJyYXkobWVhc3VyZW1lbnQuRmllbGQpfSBzdHJva2VXaWR0aD17MS41fSBmaWxsPVwidHJhbnNwYXJlbnRcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz47XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gPHN2ZyBoZWlnaHQ9ezI1fSB3aWR0aD17NTB9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0geyAuLi5kYXRhIH07XHJcbiAgICAgICAgICAgICAgICBuZXdEYXRhW3RhZ10uU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShuZXdEYXRhKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPXtwYXRofSBzdHJva2U9e2dldENvbG9yKG1lYXN1cmVtZW50LkNoYW5uZWwuUGhhc2UpfSBzdHJva2VEYXNoYXJyYXk9e2dldERhc2hBcnJheShtZWFzdXJlbWVudC5GaWVsZCl9IHN0cm9rZVdpZHRoPXsxLjV9IGZpbGw9XCJ0cmFuc3BhcmVudFwiIG9wYWNpdHk9ezAuMn0gLz5cclxuICAgICAgICAgICAgPC9zdmc+O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtYXRUZXh0KG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKG51bSA+PSAxMCkgcmV0dXJuIG51bS50b0ZpeGVkKDApO1xyXG4gICAgICAgIGVsc2UgaWYgKG51bSA+PSAwKSByZXR1cm4gbnVtLnRvRml4ZWQoMik7XHJcbiAgICAgICAgZWxzZSBpZiAobnVtID49IDAuMDAwMSkgcmV0dXJuIG51bS50b0ZpeGVkKDQpO1xyXG4gICAgICAgIGVsc2UgaWYgKG51bSA+PSAwLjAwMDAwMSkgcmV0dXJuIG51bS50b0ZpeGVkKDYpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG51bTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9mdW5jdGlvbiBPblhab29tKGV2dDogTW91c2VFdmVudCwgc3ZnOiBkMy5TZWxlY3Rpb248U1ZHU1ZHRWxlbWVudCwgdW5rbm93biwgbnVsbCwgdW5kZWZpbmVkPiwgc2NhbGU6IGQzLlNjYWxlVGltZTxudW1iZXIsIG51bWJlcj4pIHtcclxuICAgIC8vICAgIGNvbnN0IHN0YXJ0ID0gZXZ0Lm9mZnNldFg7XHJcbiAgICAvLyAgICBjb25zdCBicnVzaCA9IGJydXNoWCgpXHJcbiAgICAvLyAgICAgICAgLmV4dGVudChbW21hcmdpbi5sZWZ0LCBtYXJnaW4udG9wICsgMC41XSwgW3N2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0LCBzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tICsgMC41XV0pXHJcblxyXG4gICAgLy8gICAgY29uc3QgYnIgPSBzdmcuYXBwZW5kKCdnJykuY2FsbChicnVzaClcclxuICAgIC8vICAgIGJyLmNhbGwoYnJ1c2gubW92ZSwgW3N0YXJ0LCBzdGFydCArIDFdKTtcclxuICAgIC8vICAgIHN2Zy5vbignbW91c2Vtb3ZlLmJydXNoJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIC8vICAgICAgICBici5jYWxsKGJydXNoLm1vdmUsIFtzdGFydCwgZS5vZmZzZXRYXSk7XHJcbiAgICAvLyAgICB9KVxyXG4gICAgLy8gICAgc3ZnLm9uKCdtb3VzZXVwLmJydXNoJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIC8vICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbihzdGFydCwgZS5vZmZzZXRYKTtcclxuICAgIC8vICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1heChzdGFydCwgZS5vZmZzZXRYKTtcclxuICAgIC8vICAgICAgICBwcm9wcy5TZXRab29tKG1vbWVudChzY2FsZS5pbnZlcnQobWluKSkuZm9ybWF0KE1vbWVudERhdGVUaW1lRm9ybWF0KSwgbW9tZW50KHNjYWxlLmludmVydChtYXgpKS5mb3JtYXQoTW9tZW50RGF0ZVRpbWVGb3JtYXQpKTtcclxuICAgIC8vICAgICAgICBici5yZW1vdmUoKTtcclxuICAgIC8vICAgICAgICBzdmcub24oJ21vdXNlbW92ZS5icnVzaCcsIG51bGwpO1xyXG4gICAgLy8gICAgICAgIHN2Zy5vbignbW91c2V1cC5icnVzaCcsIG51bGwpO1xyXG4gICAgLy8gICAgfSk7XHJcbiAgICAvL31cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e3Byb3BzLk5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgcGFkZGluZzogMCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9J3B1bGwtbGVmdCcgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIHdpZHRoOiAnY2FsYygxMDAlIC0gNDAwcHgpJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdWxsLXJpZ2h0JyBzdHlsZT17eyBoZWlnaHQ6IDMwMCwgbWF4SGVpZ2h0OiAzMDAsIG92ZXJmbG93WTogJ2F1dG8nLCB3aWR0aDogd2luZG93LmlubmVyV2lkdGggLyAzIC0gNzUsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCByaWdodDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGhhc2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ib3ZlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pk1pbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PkF2ZzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pk1heDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PlN0RGV2PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+Q1A5OTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PkNQOTU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5DUDUwPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+Q1AwNTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PkNQMDE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5Db3VudHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5PdXRsaWVyczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YVtrZXldLkNoYW5uZWwuUGhhc2V9LXtnZXRsYWJlbChrZXkpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0TGluZShrZXksIGRhdGFba2V5XSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntmb3JtYXRUZXh0KGhvdmVyRGF0YVtrZXldKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLk1pbil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5BdmcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57Zm9ybWF0VGV4dChkYXRhW2tleV0uTWF4KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLlN0RGV2KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLkNQOTkpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57Zm9ybWF0VGV4dChkYXRhW2tleV0uQ1A5NSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5DUDUwKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLkNQMDUpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57Zm9ybWF0VGV4dChkYXRhW2tleV0uQ1AwMSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PntkYXRhW2tleV0uRGF0YVBvaW50c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2RhdGFba2V5XS5PdXRsaWVyc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWlja1ZpZXdPcGVuWERBOyIsIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgTXVsdGlDaGVja0JveFNlbGVjdC50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDcvMTcvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBNdWx0aVNlbGVjdCA9IChwcm9wczoge1xyXG4gICAgT3B0aW9uczogeyBWYWx1ZTogc3RyaW5nOyBUZXh0OiBzdHJpbmc7IFNlbGVjdGVkOiBib29sZWFuIH1bXSxcclxuICAgIE9uQ2hhbmdlOiAoZXZ0OiBhbnksIE9wdGlvbnM6IHsgVmFsdWU6IHN0cmluZzsgVGV4dDogc3RyaW5nOyBTZWxlY3RlZDogYm9vbGVhbiB9W10pID0+IHZvaWRcclxufSkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgbXVsdGlTZWxlY3QgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIEhhbmRsZVNob3coZXZ0OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PiB8IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAobXVsdGlTZWxlY3QuY3VycmVudCA9PT0gbnVsbCkgc2V0U2hvdyghc2hvdyk7XHJcbiAgICAgICAgZWxzZSBpZiAoIShtdWx0aVNlbGVjdC5jdXJyZW50IGFzIEhUTUxEaXZFbGVtZW50KS5jb250YWlucyhldnQudGFyZ2V0IGFzIE5vZGUpKSBzZXRTaG93KGZhbHNlKTtcclxuICAgICAgICBlbHNlIHNldFNob3codHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBIYW5kbGVTaG93LCBmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgSGFuZGxlU2hvdywgZmFsc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17bXVsdGlTZWxlY3R9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6ICdpbmhlcml0JyB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNjZWQ0ZGEnLCBwYWRkaW5nOiAnLjM3NXJlbSAuNzVyZW0nLCBmb250U2l6ZTogJzFyZW0nLCBib3JkZXJSYWRpdXM6ICcuMjVyZW0nIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZm9ybS1jb250cm9sIGRyb3Bkb3duLXRvZ2dsZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtIYW5kbGVTaG93fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuT3B0aW9ucy5maWx0ZXIoKHgpID0+IHguU2VsZWN0ZWQpLmxlbmd0aCAhPT0gcHJvcHMuT3B0aW9ucy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICA/IHByb3BzLk9wdGlvbnMuZmlsdGVyKCh4KSA9PiB4LlNlbGVjdGVkKS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICA6ICdBbGwgJ317JyAnfVxyXG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjc1LFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMCA1JyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBzaG93ID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiA0MDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLk9uQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLk9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHgpID0+IHguU2VsZWN0ZWQgPT09IChwcm9wcy5PcHRpb25zLmZpbHRlcigobykgPT4gby5TZWxlY3RlZCkubGVuZ3RoID09PSBwcm9wcy5PcHRpb25zLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJvcHMuT3B0aW9ucy5maWx0ZXIoKHgpID0+IHguU2VsZWN0ZWQpLmxlbmd0aCA9PT0gcHJvcHMuT3B0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFsbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5PcHRpb25zLm1hcCgoZiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gb25DbGljaz17KGV2dCkgPT4gcHJvcHMuT25DaGFuZ2UoZXZ0LCBbZl0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtmLlNlbGVjdGVkfSBvbkNoYW5nZT17KCkgPT4gbnVsbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Zi5UZXh0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNdWx0aVNlbGVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
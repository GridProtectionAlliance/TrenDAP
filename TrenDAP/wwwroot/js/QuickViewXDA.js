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
                if (dict_1[key].Data.length == 0)
                    return;
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
            if (data[key].Data.length == 0)
                return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL09wZW5YREEvUXVpY2tWaWV3T3BlblhEQS50c3giLCJ3ZWJwYWNrOi8vdHJlbmRhcC8uL3d3d3Jvb3QvVHlwZVNjcmlwdC9Gb3Jtcy9NdWx0aUNoZWNrQm94U2VsZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3R0FBd0c7QUFDeEcsK0JBQStCO0FBQy9CLEVBQUU7QUFDRixxRUFBcUU7QUFDckUsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHdGQUF3RjtBQUN4RixFQUFFO0FBQ0YsMENBQTBDO0FBQzFDLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLDRFQUE0RTtBQUM1RSxFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHdHQUF3RztBQUN4Ryw2QkFBNkI7QUFDN0IsbURBQW1EO0FBQ25ELEVBQUU7QUFDRix3R0FBd0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFO0FBQ0g7QUFDQTtBQUM2QztBQUdwRSw2Q0FBNkM7QUFDTDtBQUNmO0FBQzZGO0FBQ2hGO0FBQ1A7QUFJL0IsSUFBTSxvQkFBb0IsR0FBRyxzQkFBc0I7QUFDbkQsSUFBTSxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7QUFDdEMsSUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUM7QUFFekMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQVM7SUFDekIsZ0JBQXNCLDJDQUFjLENBQVcsRUFBRSxDQUFDLE1BQWpELE1BQU0sVUFBRSxTQUFTLFFBQWdDLENBQUM7SUFDbkQsZ0JBQW9CLDJDQUFjLENBQVMsU0FBUyxDQUFDLE1BQXBELEtBQUssVUFBRSxRQUFRLFFBQXFDLENBQUM7SUFDdEQsZ0JBQTBCLDJDQUFjLENBQTJELEVBQUUsQ0FBQyxNQUFyRyxR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LENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFFLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsa0RBQWdCLENBQUMsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTFFLElBQUksVUFBVSxHQUFHLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JELElBQUksVUFBVSxHQUFHLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBRXJELE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxFQUE1QyxDQUE0QyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNyRyxNQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxHQUFHLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM3QyxTQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7WUFHSCxPQUFPLENBQUMsTUFBSSxDQUFDLENBQUM7WUFDZCxZQUFZLENB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LEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFNOzRCQUN4SCx5REFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFNOzRCQUN4SCx5REFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFNOzRCQUMxSCx5REFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFNOzRCQUN0SCx5REFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFNOzRCQUN0SCx5REFBSSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFF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LGlFQUFlLFdBQVcsRUFBQyIsImZpbGUiOiJRdWlja1ZpZXdYREEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgUXVpY2tWaWV3T3BlblhEQS50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDgvMTYvMjAyMSAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBNdWx0aUNoZWNrQm94U2VsZWN0IGZyb20gJy4vLi4vLi4vRm9ybXMvTXVsdGlDaGVja0JveFNlbGVjdCc7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiXHJcbi8vaW1wb3J0IHsgRXhwb3J0VG9Dc3YgfSBmcm9tICcuLi9FeHBvcnRDU1YnO1xyXG5pbXBvcnQgbW9tZW50LCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50LXRpbWV6b25lJztcclxuaW1wb3J0IHsgc2NhbGVMaW5lYXIsIGxpbmUsIGV4dGVudCwgYXhpc0JvdHRvbSwgYXhpc0xlZnQsIGZvcm1hdCBhcyBkM0Zvcm1hdCwgc2NhbGVVdGMsIHNjYWxlVGltZSwgYnJ1c2hYIH0gZnJvbSAnZDMnO1xyXG5pbXBvcnQgeyBzZWxlY3QgfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xyXG5pbXBvcnQgc3RhdHMgZnJvbSAnc3RhdHMtbGl0ZSc7XHJcbi8vaW1wb3J0IEV4cG9ydENTViBmcm9tICcuL0V4cG9ydENTVic7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5cclxuY29uc3QgTW9tZW50RGF0ZVRpbWVGb3JtYXQgPSAnWVlZWS1NTS1ERFRISDptbTpzc1onXHJcbmNvbnN0IE1vbWVudERhdGVGb3JtYXQgPSAnWVlZWS1NTS1ERCc7XHJcbmNvbnN0IE1vbWVudFRpbWVab25lID0gJ0FtZXJpY2EvQ2hpY2Fnbyc7XHJcblxyXG5jb25zdCBRdWlja1ZpZXdPcGVuWERBID0gKHByb3BzOiB7fSkgPT4ge1xyXG4gICAgY29uc3QgW21ldGVycywgc2V0TWV0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgICBjb25zdCBbbWV0ZXIsIHNldE1ldGVyXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4odW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IFtjaGFubmVscywgc2V0Q2hhbm5lbHNdID0gUmVhY3QudXNlU3RhdGU8eyBDaGFubmVsOiBUcmVuREFQLmlYREFSZXR1cm5EYXRhLCBTZWxlY3RlZDogYm9vbGVhbiB9W10+KFtdKTtcclxuICAgIGNvbnN0IFtzaG93U3RhdHMsIHNldFNob3dTdGF0c10gPSBSZWFjdC51c2VTdGF0ZTwnc3RhdHMnIHwgJ2NwJz4oJ3N0YXRzJyk7XHJcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVuREFQLmlYREFSZXR1cm5EYXRhW10+KFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1F1aWNrVmlld09wZW5YREEnKSk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9EYXRhU2V0L1F1aWNrVmlldy8ke2pzb24uRGF0YVNvdXJjZUlEfWAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoanNvbi5Qb3N0RGF0YSksXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KS5kb25lKChkOiBUcmVuREFQLmlYREFSZXR1cm5EYXRhW10pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGQgPSBfLm9yZGVyQnkoZCwgWydNZXRlciddKTtcclxuICAgICAgICAgICAgc2V0RGF0YShkKTtcclxuICAgICAgICAgICAgbGV0IG1zID0gWy4uLihuZXcgU2V0KGQubWFwKGQgPT4gZC5NZXRlcikpKV07XHJcbiAgICAgICAgICAgIHNldE1ldGVycyhtcyk7XHJcbiAgICAgICAgICAgIGxldCBtID0gbXNbMF07XHJcbiAgICAgICAgICAgIHNldE1ldGVyKG0pO1xyXG4gICAgICAgICAgICBsZXQgY3MgPSBkLmZpbHRlcihjaCA9PiBjaC5NZXRlciA9PSBtKS5tYXAoY2ggPT4gKHsgQ2hhbm5lbDogY2gsIFNlbGVjdGVkOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgc2V0Q2hhbm5lbHMoY3MpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB9LCBbbWV0ZXJzXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMCB8fCBjaGFubmVscy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjcyA9IGRhdGEuZmlsdGVyKGNoID0+IGNoLk1ldGVyID09IG1ldGVyKS5tYXAoY2ggPT4gKHsgQ2hhbm5lbDogY2gsIFNlbGVjdGVkOiBjaGFubmVscy5maWx0ZXIoYyA9PiBjLkNoYW5uZWwuTmFtZSA9PSBjaC5OYW1lKVswXT8uU2VsZWN0ZWQgPz8gZmFsc2UgfSkpO1xyXG4gICAgICAgIHNldENoYW5uZWxzKGNzKTtcclxuICAgIH0sIFttZXRlcl0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGhlaWdodDogMTMwLCBtYXJnaW46IDUgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAxMzAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NZXRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXttZXRlcn0gb25DaGFuZ2U9eyhldnQpID0+IHNldE1ldGVyKG1ldGVycy5maW5kKG0gPT4gbSA9PT0gZXZ0LnRhcmdldC52YWx1ZSkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRlcnMubWFwKChtLCBpKSA9PiA8b3B0aW9uIGtleT17aX0gdmFsdWU9e219PnttfTwvb3B0aW9uPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaGFubmVsczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aUNoZWNrQm94U2VsZWN0IE9wdGlvbnM9e2NoYW5uZWxzLm1hcCh0ID0+ICh7IFRleHQ6IHQuQ2hhbm5lbC5OYW1lLCBWYWx1ZTogdC5DaGFubmVsLk5hbWUsIFNlbGVjdGVkOiB0LlNlbGVjdGVkIH0pKX0gT25DaGFuZ2U9eyhldnQsIG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdDaGFubmVscyA9IF8uY2xvbmVEZWVwKGNoYW5uZWxzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChvcHRpb25zLCAoaW5kZXgsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoYW5uZWxzLmZpbmQodHlwZSA9PiB0eXBlLkNoYW5uZWwuTmFtZSA9PSBvcHRpb24uVmFsdWUpLlNlbGVjdGVkID0gIW9wdGlvbi5TZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGFubmVscyhuZXdDaGFubmVscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3VtbWFyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHZhbHVlPXtzaG93U3RhdHN9IG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRTaG93U3RhdHMoZXZ0LnRhcmdldC52YWx1ZSBhcyBhbnkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3N0YXRzJz5TdGF0czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nY3AnPkNQPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtMScgc3R5bGU9e3sgcGFkZGluZ1RvcDogMzAgfX0+PEV4cG9ydENTViBNZXRlcj17bWV0ZXJ9IENoYW5uZWxzPXtjaGFubmVscy5maWx0ZXIoYyA9PiBjLlNlbGVjdGVkKS5tYXAoYyA9PiBjLkNoYW5uZWwpfSBTdGFydERhdGU9e2RhdGVzWzBdfSBFbmREYXRlPXtkYXRlc1sxXX0gLz48L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBtYXhIZWlnaHQ6IFwiY2FsYygxMDAlIC0gMTM1cHgpXCIsIG92ZXJmbG93WTogJ2F1dG8nLCBtYXJnaW46ICc1cHggNXB4IDVweCA1cHggJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgcGFkZGluZzogJzBweCAycHggMHB4IDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPyA8c3Bhbj5Mb2FkaW5nIC4uLjwvc3Bhbj4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWy4uLm5ldyBTZXQoY2hhbm5lbHMuZmlsdGVyKGMgPT4gYy5TZWxlY3RlZCkubWFwKGMgPT4gYy5DaGFubmVsLlR5cGUgKyAnICcgKyBjLkNoYW5uZWwuQ2hhcmFjdGVyaXN0aWMgKyAnICgnICsgYy5DaGFubmVsLlVuaXQgKyAnKScpKV0ubWFwKGsgPT4gPENoYXJ0IGtleT17a30gU2hvd1N0YXRzPXtzaG93U3RhdHN9IE5hbWU9e2t9IENoYW5uZWxzPXtjaGFubmVscy5maWx0ZXIoYyA9PiBjLlNlbGVjdGVkICYmIChjLkNoYW5uZWwuVHlwZSArICcgJyArIGMuQ2hhbm5lbC5DaGFyYWN0ZXJpc3RpYyArICcgKCcgKyBjLkNoYW5uZWwuVW5pdCArICcpJykgPT0gaykubWFwKGNoID0+IGNoLkNoYW5uZWwpfSBIb3Zlcj17aG92ZXJ9IFNldEhvdmVyPXsoaG92KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGhvdiAtIGhvdmVyKSA+IDUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdmVyKGhvdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBTZXRab29tPXsocywgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIH19IC8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYXJ0U2VyaWVzIHtcclxuICAgIENoYW5uZWw6IFRyZW5EQVAuaVhEQVJldHVybkRhdGEsIEZpZWxkOiAnbWluJyB8ICdtYXgnIHwgJ2F2ZycsIFNlbGVjdGVkOiBib29sZWFuLCBEYXRhOiB7IFRpbWVTdGFtcDogTW9tZW50LCBWYWx1ZTogbnVtYmVyIH1bXSwgTWluOiBudW1iZXIsIE1heDogbnVtYmVyLCBBdmc6IG51bWJlciwgU3REZXY6IG51bWJlciwgQ1A5OTogbnVtYmVyLCBDUDk1OiBudW1iZXIsIENQNTA6IG51bWJlciwgQ1AwNTogbnVtYmVyLCBDUDAxOiBudW1iZXIsIE91dGxpZXJzOiBudW1iZXIsIERhdGFQb2ludHM6IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBDaGFydCA9IChwcm9wczogeyBOYW1lOiBzdHJpbmcsIENoYW5uZWxzOiBUcmVuREFQLmlYREFSZXR1cm5EYXRhW10sIFNob3dTdGF0czogJ3N0YXRzJyB8ICdjcCcsIEhvdmVyOiBudW1iZXIsIFNldEhvdmVyOiAoaG92OiBudW1iZXIpID0+IHZvaWQsIFNldFpvb206IChzdGFydERhdGU6IHN0cmluZywgZW5kRGF0ZTogc3RyaW5nKSA9PiB2b2lkIH0pID0+IHtcclxuICAgIGNvbnN0IHN2Z0hlaWdodCA9IDMwMDtcclxuICAgIGNvbnN0IHN2Z1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSA4NTA7XHJcbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogNDAsIHJpZ2h0OiAwLCBib3R0b206IDQwLCBsZWZ0OiA1MCB9O1xyXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2hvdmVyRGF0YSwgc2V0SG92ZXJEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPG9iamVjdD4oe30pO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8b2JqZWN0Pih7fSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuQ2hhbm5lbHMubGVuZ3RoID4gMCAgJiYgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgbGV0IGRpY3QgPSB7fTtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGFubmVsIG9mIHByb3BzLkNoYW5uZWxzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGljdFtjaGFubmVsLk5hbWUgKyAnLUF2ZyddID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIENoYW5uZWw6IGNoYW5uZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGQ6ICdhdmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIERhdGE6IGNoYW5uZWwuRGF0YS5tYXAoZCA9PiAoeyBUaW1lU3RhbXA6IG1vbWVudC51dGMoZC5UaW1lc3RhbXAsIE1vbWVudERhdGVUaW1lRm9ybWF0KSwgVmFsdWU6IGQuQXZlcmFnZSB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgTWF4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIE1pbjogMCxcclxuICAgICAgICAgICAgICAgICAgICBBdmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgU3REZXY6IDAsIENQOTk6IDAsIENQOTU6IDAsIENQNTA6IDAsIENQMDU6IDAsIENQMDE6IDAsIERhdGFQb2ludHM6IGNoYW5uZWwuRGF0YS5sZW5ndGgsIE91dGxpZXJzOiAwXHJcbiAgICAgICAgICAgICAgICB9IGFzIENoYXJ0U2VyaWVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpY3RbY2hhbm5lbC5OYW1lICsgJy1NaW4nXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBDaGFubmVsOiBjaGFubmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIEZpZWxkOiAnbWluJyxcclxuICAgICAgICAgICAgICAgICAgICBEYXRhOiBjaGFubmVsLkRhdGEubWFwKGQgPT4gKHsgVGltZVN0YW1wOiBtb21lbnQudXRjKGQuVGltZXN0YW1wLCBNb21lbnREYXRlVGltZUZvcm1hdCksIFZhbHVlOiBkLk1pbmltdW0gfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIE1heDogMCxcclxuICAgICAgICAgICAgICAgICAgICBNaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgQXZnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFN0RGV2OiAwLCBDUDk5OiAwLCBDUDk1OiAwLCBDUDUwOiAwLCBDUDA1OiAwLCBDUDAxOiAwLCBEYXRhUG9pbnRzOiBjaGFubmVsLkRhdGEubGVuZ3RoLCBPdXRsaWVyczogMFxyXG4gICAgICAgICAgICAgICAgfSBhcyBDaGFydFNlcmllcztcclxuXHJcbiAgICAgICAgICAgICAgICBkaWN0W2NoYW5uZWwuTmFtZSArICctTWF4J10gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhbm5lbDogY2hhbm5lbCxcclxuICAgICAgICAgICAgICAgICAgICBGaWVsZDogJ21heCcsXHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YTogY2hhbm5lbC5EYXRhLm1hcChkID0+ICh7IFRpbWVTdGFtcDogbW9tZW50LnV0YyhkLlRpbWVzdGFtcCwgTW9tZW50RGF0ZVRpbWVGb3JtYXQpLCBWYWx1ZTogZC5NYXhpbXVtIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICBTZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBNYXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgTWluOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIEF2ZzogMCxcclxuICAgICAgICAgICAgICAgICAgICBTdERldjogMCwgQ1A5OTogMCwgQ1A5NTogMCwgQ1A1MDogMCwgQ1AwNTogMCwgQ1AwMTogMCwgRGF0YVBvaW50czogY2hhbm5lbC5EYXRhLmxlbmd0aCwgT3V0bGllcnM6IDBcclxuICAgICAgICAgICAgICAgIH0gYXMgQ2hhcnRTZXJpZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBob3ZEaWN0ID0ge307XHJcbiAgICAgICAgICAgICQuZWFjaChPYmplY3Qua2V5cyhkaWN0KSwgKGksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpY3Rba2V5XS5EYXRhLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uTWluID0gTWF0aC5taW4oLi4uZGljdFtrZXldLkRhdGEubWFwKGQgPT4gZC5WYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLk1heCA9IE1hdGgubWF4KC4uLmRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5BdmcgPSBzdGF0cy5tZWFuKGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5TdERldiA9IHN0YXRzLnN0ZGV2KGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5DUDk5ID0gc3RhdHMucGVyY2VudGlsZShkaWN0W2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSwgMC45OSk7XHJcbiAgICAgICAgICAgICAgICBkaWN0W2tleV0uQ1A5NSA9IHN0YXRzLnBlcmNlbnRpbGUoZGljdFtrZXldLkRhdGEubWFwKGQgPT4gZC5WYWx1ZSksIDAuOTUpO1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLkNQNTAgPSBzdGF0cy5wZXJjZW50aWxlKGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLkNQMDUgPSBzdGF0cy5wZXJjZW50aWxlKGRpY3Rba2V5XS5EYXRhLm1hcChkID0+IGQuVmFsdWUpLCAwLjA1KTtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5DUDAxID0gc3RhdHMucGVyY2VudGlsZShkaWN0W2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSwgMC4wMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxvd2VyQm91bmQgPSBkaWN0W2tleV0uQXZnIC0gMyAqIGRpY3Rba2V5XS5TdERldjtcclxuICAgICAgICAgICAgICAgIGxldCB1cHBlckJvdW5kID0gZGljdFtrZXldLkF2ZyArIDMgKiBkaWN0W2tleV0uU3REZXY7XHJcblxyXG4gICAgICAgICAgICAgICAgZGljdFtrZXldLk91dGxpZXJzID0gZGljdFtrZXldLkRhdGEuZmlsdGVyKGQgPT4gZC5WYWx1ZSA8IGxvd2VyQm91bmQgfHwgZC5WYWx1ZSA+IHVwcGVyQm91bmQpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGRpY3Rba2V5XS5EYXRhUG9pbnRzID0gZGljdFtrZXldLkRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaG92RGljdFtrZXldID0gZGljdFtrZXldLkRhdGFbMF0uVmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNldERhdGEoZGljdCk7XHJcbiAgICAgICAgICAgIHNldEhvdmVyRGF0YShob3ZEaWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuQ2hhbm5lbHNdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gRHJhd0NoYXJ0KCksIFtkYXRhXSk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5Ib3ZlciA8IG1hcmdpbi5sZWZ0KSByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuSG92ZXIgPiBzdmdXaWR0aCAtIG1hcmdpbi5yaWdodCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBzdmcgPSBzZWxlY3QocmVmLmN1cnJlbnQpLnNlbGVjdCgnc3ZnJyk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcuaG92ZXItbGluZVwiKS5yZW1vdmUoKTtcclxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZChcImhvdmVyLWxpbmVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsICdyZWQnKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgYE0gJHtwcm9wcy5Ib3Zlcn0gJHtzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tfSBWICR7bWFyZ2luLnRvcH1gKVxyXG5cclxuICAgICAgICAvL2xldCB4ID0gc2NhbGVVdGMoKS5yYW5nZVJvdW5kKFttYXJnaW4ubGVmdCwgc3ZnV2lkdGggLSBtYXJnaW4ucmlnaHRdKTtcclxuICAgICAgICAvL3guZG9tYWluKFttb21lbnQudXRjKHByb3BzLlN0YXJ0RGF0ZSwgTW9tZW50RGF0ZVRpbWVGb3JtYXQpLCBtb21lbnQudXRjKHByb3BzLkVuZERhdGUsIE1vbWVudERhdGVUaW1lRm9ybWF0KV0pO1xyXG4gICAgICAgIC8vbGV0IHRzID0gbW9tZW50LnV0Yyh4LmludmVydChwcm9wcy5Ib3ZlcikpLmZvcm1hdChNb21lbnREYXRlVGltZUZvcm1hdCk7XHJcblxyXG4gICAgICAgIGxldCBob3ZEaWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG11bHQgPSAocHJvcHMuSG92ZXIgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCkgLyAoc3ZnV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCk7XHJcblxyXG4gICAgICAgICQuZWFjaChPYmplY3Qua2V5cyhkYXRhKSwgKGksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtrZXldLkRhdGEubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGRhdGFba2V5XS5EYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihtdWx0ICogbGVuZ3RoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0cywgZGF0YVtrZXldLkRhdGFbaW5kZXhdLlRpbWVTdGFtcCk7XHJcblxyXG4gICAgICAgICAgICBob3ZEaWN0W2tleV0gPSBkYXRhW2tleV0uRGF0YVtpbmRleF0uVmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SG92ZXJEYXRhKGhvdkRpY3QpO1xyXG5cclxuICAgIH0sIFtwcm9wcy5Ib3Zlcl0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIERyYXdDaGFydCgpIHtcclxuICAgICAgICBsZXQgeCA9IHNjYWxlVXRjKCkucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHN2Z1dpZHRoIC0gbWFyZ2luLnJpZ2h0XSk7XHJcbiAgICAgICAgbGV0IHkgPSBzY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW3N2Z0hlaWdodCAtIG1hcmdpbi50b3AsIG1hcmdpbi5ib3R0b21dKTtcclxuXHJcblxyXG4gICAgICAgIHNlbGVjdChyZWYuY3VycmVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKVxyXG4gICAgICAgIGNvbnN0IHN2ZyA9IHNlbGVjdChyZWYuY3VycmVudClcclxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcclxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgc3ZnV2lkdGgpXHJcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBzdmdIZWlnaHQpXHJcbiAgICAgICAgICAgIC5zdHlsZSgndXNlci1zZWxlY3QnLCAnbm9uZScpXHJcbiAgICAgICAgICAgIC5vbignbW91c2Vtb3ZlJywgKGQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3VzZW1vdmUnKVxyXG4gICAgICAgICAgICAgICAgcHJvcHMuU2V0SG92ZXIoZC5vZmZzZXRYKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLy5vbignbW91c2Vkb3duJywgKGQ6IE1vdXNlRXZlbnQpID0+IE9uWFpvb20oZCwgc3ZnLCB4KSk7XHJcblxyXG4gICAgICAgIGxldCB5ZXh0ZW50ID0gZXh0ZW50KFtdLmNvbmNhdCguLi5PYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoa2V5ID0+IGRhdGFba2V5XS5TZWxlY3RlZCkubWFwKGtleSA9PiBkYXRhW2tleV0uRGF0YS5tYXAoZCA9PiBkLlZhbHVlKSkpKTtcclxuICAgICAgICB5LmRvbWFpbih5ZXh0ZW50KTtcclxuICAgICAgICBsZXQgeGV4dGVudCA9IGV4dGVudChbXS5jb25jYXQoLi4uT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGtleSA9PiBkYXRhW2tleV0uU2VsZWN0ZWQpLm1hcChrZXkgPT4gZGF0YVtrZXldLkRhdGEubWFwKGQgPT4gZC5UaW1lU3RhbXApKSkpO1xyXG4gICAgICAgIHguZG9tYWluKHhleHRlbnQpO1xyXG5cclxuICAgICAgICBjb25zdCB4QXhpcyA9IHN2Zy5hcHBlbmQoXCJnXCIpLmNsYXNzZWQoJ3hheGlzJywgdHJ1ZSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIChzdmdIZWlnaHQgLSBtYXJnaW4uYm90dG9tKSArIFwiKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChheGlzQm90dG9tKHgpKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHlBeGlzID0gc3ZnLmFwcGVuZChcImdcIikuY2xhc3NlZCgneWF4aXMnLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LDApYClcclxuICAgICAgICAgICAgLmNhbGwoYXhpc0xlZnQoeSkudGlja3MoTWF0aC5mbG9vcihzdmdIZWlnaHQgLyA1MCkgKyAxKS50aWNrRm9ybWF0KCh2YWx1ZTogbnVtYmVyKSA9PiBkM0Zvcm1hdChcIn5zXCIpKHZhbHVlKSkpO1xyXG5cclxuICAgICAgICBsZXQgbGluZWZ1bmMgPSBsaW5lPHsgVGltZVN0YW1wOiBzdHJpbmcsIFZhbHVlOiBudW1iZXIsIEZpZWxkOiBzdHJpbmcgfT4oKS54KGQgPT4geChtb21lbnQudXRjKGQuVGltZVN0YW1wKSkpLnkoZCA9PiB5KGQuVmFsdWUpKTtcclxuXHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubWluLWxpbmVcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcImcubWluLWxpbmVcIilcclxuICAgICAgICAgICAgLmRhdGEoT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGtleSA9PiBkYXRhW2tleV0uRmllbGQgPT0gJ21pbicgJiYgZGF0YVtrZXldLlNlbGVjdGVkKSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNsYXNzZWQoXCJsaW5lXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgNClcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgKGQ6IHN0cmluZykgPT4gZ2V0Q29sb3IoZGF0YVtkXS5DaGFubmVsLlBoYXNlKSlcclxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIChkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lZnVuYyhkYXRhW2RdLkRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5hdmctbGluZVwiKS5yZW1vdmUoKTtcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiZy5hdmctbGluZVwiKVxyXG4gICAgICAgICAgICAuZGF0YShPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoa2V5ID0+IGRhdGFba2V5XS5GaWVsZCA9PSAnYXZnJyAmJiBkYXRhW2tleV0uU2VsZWN0ZWQpKVxyXG4gICAgICAgICAgICAuZW50ZXIoKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2xhc3NlZChcImxpbmVcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIChkOiBzdHJpbmcpID0+IGdldENvbG9yKGRhdGFbZF0uQ2hhbm5lbC5QaGFzZSkpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCAoZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZWZ1bmMoZGF0YVtkXS5EYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLm1heC1saW5lXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCJnLm1heC1saW5lXCIpXHJcbiAgICAgICAgICAgIC5kYXRhKE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihrZXkgPT4gZGF0YVtrZXldLkZpZWxkID09ICdtYXgnICYmIGRhdGFba2V5XS5TZWxlY3RlZCkpXHJcbiAgICAgICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jbGFzc2VkKFwibGluZVwiLCB0cnVlKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcclxuICAgICAgICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIChkKSA9PiAyKVxyXG4gICAgICAgICAgICAuYXR0cihcInN0cm9rZVwiLCAoZDogc3RyaW5nKSA9PiBnZXRDb2xvcihkYXRhW2RdLkNoYW5uZWwuUGhhc2UpKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgKGQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVmdW5jKGRhdGFbZF0uRGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb2xvcihsYWJlbCkge1xyXG4gICAgICAgIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ0FOJykgPj0gMCkgcmV0dXJuICcjQTMwMDAwJzsgICAvLyBkYXJrZXIgcmVkXHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdCTicpID49IDApIHJldHVybiAnIzAwMjlBMyc7XHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdDTicpID49IDApIHJldHVybiAnIzAwN0EyOSc7XHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdORycpID49IDApIHJldHVybiAnI2MzYzNjMyc7ICAgLy8gZ3JleVxyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignQUInKSA+PSAwKSByZXR1cm4gJyNGRjAwMDAnOyAgIC8vIGJyaWdodGVyIHJlZFxyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignQkMnKSA+PSAwKSByZXR1cm4gJyMwMDY2Q0MnO1xyXG4gICAgICAgIGVsc2UgaWYgKGxhYmVsLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignQ0EnKSA+PSAwKSByZXR1cm4gJyMzM0NDMzMnOyAgIC8vIGdyZXlcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ1JFUycpID49IDApIHJldHVybiAnI2MzYzNjMyc7ICAvLyBncmV5XHJcbiAgICAgICAgZWxzZSBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdBTEwnKSA+PSAwKSByZXR1cm4gJyNjM2MzYzMnOyAgLy8gZ3JleVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmFuTnVtT25lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIHZhciByYW5OdW1Ud28gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgdmFyIHJhbk51bVRocmVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYCMkeyhyYW5OdW1PbmUubGVuZ3RoID4gMSA/IHJhbk51bU9uZSA6IFwiMFwiICsgcmFuTnVtT25lKX0keyhyYW5OdW1Ud28ubGVuZ3RoID4gMSA/IHJhbk51bVR3byA6IFwiMFwiICsgcmFuTnVtVHdvKX0keyhyYW5OdW1UaHJlZS5sZW5ndGggPiAxID8gcmFuTnVtVGhyZWUgOiBcIjBcIiArIHJhbk51bVRocmVlKX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRsYWJlbChsYWJlbCkge1xyXG4gICAgICAgIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01BWCcpID49IDApIHJldHVybiAnTWF4JztcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01JTicpID49IDApIHJldHVybiAnTWluJztcclxuICAgICAgICBlbHNlIHJldHVybiAnQXZnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREYXNoQXJyYXkobGFiZWwpIHtcclxuICAgICAgICBpZiAobGFiZWwudG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQVgnKSA+PSAwKSByZXR1cm4gMjtcclxuICAgICAgICBlbHNlIGlmIChsYWJlbC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01JTicpID49IDApIHJldHVybiA0O1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGluZSh0YWcsIG1lYXN1cmVtZW50KSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBcIk0gMCAxNyAgQyAxMCAwLCAyMCAwLCAyNSAxMCBTIDMyIDI1LCA0NSAxN1wiO1xyXG4gICAgICAgIGlmIChtZWFzdXJlbWVudC5TZWxlY3RlZClcclxuICAgICAgICAgICAgcmV0dXJuIDxzdmcgaGVpZ2h0PXsyNX0gd2lkdGg9ezUwfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVt0YWddLlNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9e3BhdGh9IHN0cm9rZT17Z2V0Q29sb3IobWVhc3VyZW1lbnQuQ2hhbm5lbC5QaGFzZSl9IHN0cm9rZURhc2hhcnJheT17Z2V0RGFzaEFycmF5KG1lYXN1cmVtZW50LkZpZWxkKX0gc3Ryb2tlV2lkdGg9ezEuNX0gZmlsbD1cInRyYW5zcGFyZW50XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIDxzdmcgaGVpZ2h0PXsyNX0gd2lkdGg9ezUwfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHsgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVt0YWddLlNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEobmV3RGF0YSk7XHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD17cGF0aH0gc3Ryb2tlPXtnZXRDb2xvcihtZWFzdXJlbWVudC5DaGFubmVsLlBoYXNlKX0gc3Ryb2tlRGFzaGFycmF5PXtnZXREYXNoQXJyYXkobWVhc3VyZW1lbnQuRmllbGQpfSBzdHJva2VXaWR0aD17MS41fSBmaWxsPVwidHJhbnNwYXJlbnRcIiBvcGFjaXR5PXswLjJ9IC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0VGV4dChudW06IG51bWJlcikge1xyXG4gICAgICAgIGlmIChudW0gPj0gMTApIHJldHVybiBudW0udG9GaXhlZCgwKTtcclxuICAgICAgICBlbHNlIGlmIChudW0gPj0gMCkgcmV0dXJuIG51bS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGVsc2UgaWYgKG51bSA+PSAwLjAwMDEpIHJldHVybiBudW0udG9GaXhlZCg0KTtcclxuICAgICAgICBlbHNlIGlmIChudW0gPj0gMC4wMDAwMDEpIHJldHVybiBudW0udG9GaXhlZCg2KTtcclxuICAgICAgICBlbHNlIHJldHVybiBudW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vZnVuY3Rpb24gT25YWm9vbShldnQ6IE1vdXNlRXZlbnQsIHN2ZzogZDMuU2VsZWN0aW9uPFNWR1NWR0VsZW1lbnQsIHVua25vd24sIG51bGwsIHVuZGVmaW5lZD4sIHNjYWxlOiBkMy5TY2FsZVRpbWU8bnVtYmVyLCBudW1iZXI+KSB7XHJcbiAgICAvLyAgICBjb25zdCBzdGFydCA9IGV2dC5vZmZzZXRYO1xyXG4gICAgLy8gICAgY29uc3QgYnJ1c2ggPSBicnVzaFgoKVxyXG4gICAgLy8gICAgICAgIC5leHRlbnQoW1ttYXJnaW4ubGVmdCwgbWFyZ2luLnRvcCArIDAuNV0sIFtzdmdXaWR0aCAtIG1hcmdpbi5yaWdodCwgc3ZnSGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSArIDAuNV1dKVxyXG5cclxuICAgIC8vICAgIGNvbnN0IGJyID0gc3ZnLmFwcGVuZCgnZycpLmNhbGwoYnJ1c2gpXHJcbiAgICAvLyAgICBici5jYWxsKGJydXNoLm1vdmUsIFtzdGFydCwgc3RhcnQgKyAxXSk7XHJcbiAgICAvLyAgICBzdmcub24oJ21vdXNlbW92ZS5icnVzaCcsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAvLyAgICAgICAgYnIuY2FsbChicnVzaC5tb3ZlLCBbc3RhcnQsIGUub2Zmc2V0WF0pO1xyXG4gICAgLy8gICAgfSlcclxuICAgIC8vICAgIHN2Zy5vbignbW91c2V1cC5icnVzaCcsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAvLyAgICAgICAgY29uc3QgbWluID0gTWF0aC5taW4oc3RhcnQsIGUub2Zmc2V0WCk7XHJcbiAgICAvLyAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoc3RhcnQsIGUub2Zmc2V0WCk7XHJcbiAgICAvLyAgICAgICAgcHJvcHMuU2V0Wm9vbShtb21lbnQoc2NhbGUuaW52ZXJ0KG1pbikpLmZvcm1hdChNb21lbnREYXRlVGltZUZvcm1hdCksIG1vbWVudChzY2FsZS5pbnZlcnQobWF4KSkuZm9ybWF0KE1vbWVudERhdGVUaW1lRm9ybWF0KSk7XHJcbiAgICAvLyAgICAgICAgYnIucmVtb3ZlKCk7XHJcbiAgICAvLyAgICAgICAgc3ZnLm9uKCdtb3VzZW1vdmUuYnJ1c2gnLCBudWxsKTtcclxuICAgIC8vICAgICAgICBzdmcub24oJ21vdXNldXAuYnJ1c2gnLCBudWxsKTtcclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy99XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPntwcm9wcy5OYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPSdwdWxsLWxlZnQnIHN0eWxlPXt7IGhlaWdodDogMzAwLCB3aWR0aDogJ2NhbGMoMTAwJSAtIDQwMHB4KScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDAsIGxlZnQ6IDAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHVsbC1yaWdodCcgc3R5bGU9e3sgaGVpZ2h0OiAzMDAsIG1heEhlaWdodDogMzAwLCBvdmVyZmxvd1k6ICdhdXRvJywgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIC8gMyAtIDc1LCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgcmlnaHQ6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBoYXNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SG92ZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5NaW48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5Bdmc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5NYXg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5TdERldjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PkNQOTk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5DUDk1PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+Q1A1MDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PkNQMDU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT5DUDAxPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+Q291bnRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+T3V0bGllcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGRhdGEpLm1hcChrZXkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGFba2V5XS5DaGFubmVsLlBoYXNlfS17Z2V0bGFiZWwoa2V5KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2dldExpbmUoa2V5LCBkYXRhW2tleV0pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57Zm9ybWF0VGV4dChob3ZlckRhdGFba2V5XSl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5NaW4pfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57Zm9ybWF0VGV4dChkYXRhW2tleV0uQXZnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdzdGF0cycgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLk1heCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5TdERldil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5DUDk5KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLkNQOTUpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ2NwJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57Zm9ybWF0VGV4dChkYXRhW2tleV0uQ1A1MCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnY3AnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19Pntmb3JtYXRUZXh0KGRhdGFba2V5XS5DUDA1KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZGlzcGxheTogcHJvcHMuU2hvd1N0YXRzID09ICdjcCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsIHBhZGRpbmc6IDUgfX0+e2Zvcm1hdFRleHQoZGF0YVtrZXldLkNQMDEpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBkaXNwbGF5OiBwcm9wcy5TaG93U3RhdHMgPT0gJ3N0YXRzJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJywgcGFkZGluZzogNSB9fT57ZGF0YVtrZXldLkRhdGFQb2ludHN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGRpc3BsYXk6IHByb3BzLlNob3dTdGF0cyA9PSAnc3RhdHMnID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLCBwYWRkaW5nOiA1IH19PntkYXRhW2tleV0uT3V0bGllcnN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPil9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpY2tWaWV3T3BlblhEQTsiLCIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIE11bHRpQ2hlY2tCb3hTZWxlY3QudHN4IC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDA3LzE3LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTXVsdGlTZWxlY3QgPSAocHJvcHM6IHtcclxuICAgIE9wdGlvbnM6IHsgVmFsdWU6IHN0cmluZzsgVGV4dDogc3RyaW5nOyBTZWxlY3RlZDogYm9vbGVhbiB9W10sXHJcbiAgICBPbkNoYW5nZTogKGV2dDogYW55LCBPcHRpb25zOiB7IFZhbHVlOiBzdHJpbmc7IFRleHQ6IHN0cmluZzsgU2VsZWN0ZWQ6IGJvb2xlYW4gfVtdKSA9PiB2b2lkXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IG11bHRpU2VsZWN0ID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBmdW5jdGlvbiBIYW5kbGVTaG93KGV2dDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4gfCBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKG11bHRpU2VsZWN0LmN1cnJlbnQgPT09IG51bGwpIHNldFNob3coIXNob3cpO1xyXG4gICAgICAgIGVsc2UgaWYgKCEobXVsdGlTZWxlY3QuY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudCkuY29udGFpbnMoZXZ0LnRhcmdldCBhcyBOb2RlKSkgc2V0U2hvdyhmYWxzZSk7XHJcbiAgICAgICAgZWxzZSBzZXRTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgSGFuZGxlU2hvdywgZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIEhhbmRsZVNob3csIGZhbHNlKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e211bHRpU2VsZWN0fSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdpZHRoOiAnaW5oZXJpdCcgfX0+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjY2VkNGRhJywgcGFkZGluZzogJy4zNzVyZW0gLjc1cmVtJywgZm9udFNpemU6ICcxcmVtJywgYm9yZGVyUmFkaXVzOiAnLjI1cmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGZvcm0tY29udHJvbCBkcm9wZG93bi10b2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17SGFuZGxlU2hvd31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLk9wdGlvbnMuZmlsdGVyKCh4KSA9PiB4LlNlbGVjdGVkKS5sZW5ndGggIT09IHByb3BzLk9wdGlvbnMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwcm9wcy5PcHRpb25zLmZpbHRlcigoeCkgPT4geC5TZWxlY3RlZCkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnQWxsICd9eycgJ31cclxuICAgICAgICAgICAgICAgIFNlbGVjdGVkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0ICogMC43NSxcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTAgNScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogc2hvdyA/ICdibG9jaycgOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogNDAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIiBzdHlsZT17eyBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5PbkNoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5PcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh4KSA9PiB4LlNlbGVjdGVkID09PSAocHJvcHMuT3B0aW9ucy5maWx0ZXIoKG8pID0+IG8uU2VsZWN0ZWQpLmxlbmd0aCA9PT0gcHJvcHMuT3B0aW9ucy5sZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Byb3BzLk9wdGlvbnMuZmlsdGVyKCh4KSA9PiB4LlNlbGVjdGVkKS5sZW5ndGggPT09IHByb3BzLk9wdGlvbnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5BbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuT3B0aW9ucy5tYXAoKGYsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9IG9uQ2xpY2s9eyhldnQpID0+IHByb3BzLk9uQ2hhbmdlKGV2dCwgW2ZdKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17Zi5TZWxlY3RlZH0gb25DaGFuZ2U9eygpID0+IG51bGx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2YuVGV4dH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTZWxlY3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
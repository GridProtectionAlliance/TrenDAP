(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~AddNewDataSet~DataSources~EditDataSet~WorkSpaces"],{

/***/ "../node_modules/@gpa-gemstone/react-forms/lib/ArrayCheckBoxes.js":
/*!************************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-forms/lib/ArrayCheckBoxes.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  ArrayCheckBoxes.tsx - Gbtc
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
//  01/22/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __assign = (this && this.__assign) || function () {
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
function ArrayCheckBoxes(props) {
    var Remove = function (cb) {
        var a = __spreadArrays(props.Record[props.Field]);
        var i = a.indexOf(cb.ID);
        a.splice(i, 1);
        return a;
    };
    var Add = function (cb) {
        var a = __spreadArrays(props.Record[props.Field]);
        var i = a.indexOf(cb.ID);
        if (i < 0)
            a.push(cb.ID);
        a.sort();
        return a;
    };
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", null, props.Label == null ? props.Field : props.Label),
        React.createElement("br", null),
        props.Checkboxes.map(function (cb, i) { return (React.createElement("div", { key: i, className: "form-check form-check-inline" },
            React.createElement("input", { className: "form-check-input", type: "checkbox", checked: props.Record[props.Field].find(function (x) { return cb.ID === x; }) !== undefined, onChange: function (evt) {
                    var _a;
                    return props.Setter(__assign(__assign({}, props.Record), (_a = {}, _a[props.Field] = evt.target.checked ? Add(cb) : Remove(cb), _a)));
                } }),
            React.createElement("label", { className: "form-check-label" }, cb.Label))); })));
}
exports.default = ArrayCheckBoxes;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-forms/lib/ArrayMultiSelect.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-forms/lib/ArrayMultiSelect.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  ArrayMultiSelect.tsx - Gbtc
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
//  01/22/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
function ArrayMultiSelect(props) {
    var _a;
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", null, props.Label == null ? props.Field : props.Label),
        React.createElement("select", { multiple: true, className: "form-control", onChange: function (evt) {
                var _a;
                var record = __assign(__assign({}, props.Record), (_a = {}, _a[props.Field] = Array.from(evt.target.selectedOptions).map(function (a) { return parseInt(a.value, 10); }), _a));
                props.Setter(record);
            }, value: (_a = props.Record[props.Field]) !== null && _a !== void 0 ? _a : [], disabled: props.Disabled == null ? false : props.Disabled, style: props.Style }, props.Options.map(function (a, i) { return (React.createElement("option", { key: i, value: a.Value }, a.Label)); }))));
}
exports.default = ArrayMultiSelect;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-forms/lib/CheckBox.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-forms/lib/CheckBox.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  CheckBox.tsx - Gbtc
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
//  01/22/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __extends = (this && this.__extends) || (function () {
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
var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckBox.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "form-check" },
            React.createElement("input", { type: "checkbox", className: "form-check-input", style: { zIndex: 1 }, onChange: function (evt) {
                    var record = __assign({}, _this.props.Record);
                    record[_this.props.Field] = evt.target.checked;
                    _this.props.Setter(record);
                }, value: this.props.Record[this.props.Field] ? 'on' : 'off', checked: this.props.Record[this.props.Field] ? true : false, disabled: this.props.Disabled == null ? false : this.props.Disabled }),
            React.createElement("label", { className: "form-check-label" }, this.props.Label == null ? this.props.Field : this.props.Label)));
    };
    return CheckBox;
}(React.Component));
exports.default = CheckBox;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-forms/lib/DatePicker.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-forms/lib/DatePicker.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  DatePicker.tsx - Gbtc
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
//  02/05/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __extends = (this && this.__extends) || (function () {
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
var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePicker.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "form-group" },
            React.createElement("label", null, this.props.Label == null ? this.props.Field : this.props.Label),
            React.createElement("input", { className: "form-control", type: "date", onChange: function (evt) {
                    var record = __assign({}, _this.props.Record);
                    if (evt.target.value !== '')
                        record[_this.props.Field] = evt.target.value;
                    else
                        record[_this.props.Field] = null;
                    _this.props.Setter(record);
                }, value: this.props.Record[this.props.Field] == null ? '' : this.props.Record[this.props.Field].toString(), disabled: this.props.Disabled == null ? false : this.props.Disabled })));
    };
    return DatePicker;
}(React.Component));
exports.default = DatePicker;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-forms/lib/DateRangePicker.js":
/*!************************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-forms/lib/DateRangePicker.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  DateRangePicker.tsx - Gbtc
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
//  02/05/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
function DateRangePicker(props) {
    var _a = React.useState('Custom'), range = _a[0], setRange = _a[1];
    function UpdateRange(evt) {
        var _a;
        setRange(evt.target.value);
        var days = 0;
        if (evt.target.value === 'Custom')
            return;
        else if (evt.target.value === '1 Day')
            days = 1;
        else if (evt.target.value === '7 Days')
            days = 7;
        else if (evt.target.value === '30 Days')
            days = 30;
        else if (evt.target.value === '90 Days')
            days = 90;
        else if (evt.target.value === '180 Days')
            days = 180;
        else if (evt.target.value === '365 Days')
            days = 365;
        var f = new Date();
        f.setDate(f.getDate() - days);
        props.Setter(__assign(__assign({}, props.Record), (_a = {}, _a[props.FromField] = f.getFullYear() + "-" + (f.getMonth() + 1)
            .toString()
            .padStart(2, '0') + "-" + f.getDate().toString().padStart(2, '0'), _a[props.ToField] = new Date().getFullYear() + "-" + (new Date().getMonth() + 1)
            .toString()
            .padStart(2, '0') + "-" + new Date().getDate().toString().padStart(2, '0'), _a)));
    }
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", null, props.Label),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col" },
                React.createElement("select", { className: "form-control", value: range, onChange: UpdateRange },
                    React.createElement("option", { value: "Custom" }, "Custom"),
                    React.createElement("option", { value: "1 Day" }, "1 Day"),
                    React.createElement("option", { value: "7 Days" }, "7 Days"),
                    React.createElement("option", { value: "30 Days" }, "30 Days"),
                    React.createElement("option", { value: "90 Days" }, "90 Days"),
                    React.createElement("option", { value: "180 Days" }, "180 Days"),
                    React.createElement("option", { value: "365 Days" }, "365 Days"))),
            React.createElement("div", { className: "col" },
                React.createElement("input", { className: "form-control", type: "date", onChange: function (evt) {
                        var _a;
                        var record = __assign(__assign({}, props.Record), (_a = {}, _a[props.FromField] = evt.target.value !== '' ? evt.target.value : null, _a));
                        props.Setter(record);
                    }, value: props.Record[props.FromField] == null ? '' : props.Record[props.FromField].toString(), disabled: props.Disabled == null ? false : props.Disabled })),
            React.createElement("div", { className: "col" },
                React.createElement("input", { className: "form-control", type: "date", onChange: function (evt) {
                        var _a;
                        var record = __assign(__assign({}, props.Record), (_a = {}, _a[props.ToField] = evt.target.value !== '' ? evt.target.value : null, _a));
                        props.Setter(record);
                    }, value: props.Record[props.ToField] == null ? '' : props.Record[props.ToField].toString(), disabled: props.Disabled == null ? false : props.Disabled })))));
}
exports.default = DateRangePicker;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-forms/lib/EnumCheckBoxes.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-forms/lib/EnumCheckBoxes.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  EnumCheckBoxes.tsx - Gbtc
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
//  01/22/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
function EnumCheckBoxes(props) {
    /* tslint:disable-next-line:no-bitwise */
    var EquateFlag = function (index) { return ((props.Record[props.Field] / Math.pow(2, index)) & 1) !== 0; };
    var DecrementFlag = function (index) { return props.Record[props.Field] - Math.pow(2, index); };
    var IncrementFlag = function (index) { return props.Record[props.Field] + Math.pow(2, index); };
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", null, props.Label == null ? props.Field : props.Label),
        React.createElement("br", null),
        props.Enum.map(function (flag, i) { return (React.createElement("div", { key: i, className: "form-check form-check-inline" },
            React.createElement("input", { className: "form-check-input", type: "checkbox", checked: EquateFlag(i), onChange: function (evt) {
                    var _a;
                    return props.Setter(__assign(__assign({}, props.Record), (_a = {}, _a[props.Field] = evt.target.checked ? IncrementFlag(i) : DecrementFlag(i), _a)));
                } }),
            React.createElement("label", { className: "form-check-label" }, flag))); })));
}
exports.default = EnumCheckBoxes;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-forms/lib/Input.js":
/*!**************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-forms/lib/Input.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  Input.tsx - Gbtc
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
//  01/22/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
function Input(props) {
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", null, props.Label == null ? props.Field : props.Label),
        React.createElement("input", { type: props.Type === undefined ? 'text' : props.Type, className: props.Valid(props.Field) ? 'form-control' : 'form-control is-invalid', onChange: function (evt) {
                var _a;
                return props.Setter(__assign(__assign({}, props.Record), (_a = {}, _a[props.Field] = evt.target.value !== '' ? evt.target.value : null, _a)));
            }, value: props.Record[props.Field] == null ? '' : props.Record[props.Field].toString(), disabled: props.Disabled == null ? false : props.Disabled }),
        React.createElement("div", { className: "invalid-feedback" }, props.Feedback == null ? props.Field + ' is a required field.' : props.Feedback)));
}
exports.default = Input;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-forms/lib/MutliCheckBoxSelect.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-forms/lib/MutliCheckBoxSelect.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var MultiSelect = function (props) {
    var _a = React.useState(false), show = _a[0], setShow = _a[1];
    var multiSelect = React.useRef(null);
    function HandleShow(evt) {
        if (multiSelect.current === null)
            setShow(!show);
        else if (!multiSelect.current.contains(evt.target))
            setShow(false);
        else
            setShow(true);
    }
    React.useEffect(function () {
        document.addEventListener('mousedown', HandleShow, false);
        return function () {
            document.removeEventListener('mousedown', HandleShow, false);
        };
    }, []);
    return (React.createElement("div", { ref: multiSelect, style: { position: 'relative', display: 'inline-block', width: 'inherit' } },
        React.createElement("button", { style: { border: '1px solid #ced4da', padding: '.375rem .75rem', fontSize: '1rem', borderRadius: '.25rem' }, className: "btn form-control dropdown-toggle", onClick: HandleShow },
            props.Options.filter(function (x) { return x.Selected; }).length !== props.Options.length
                ? props.Options.filter(function (x) { return x.Selected; }).length
                : 'All ',
            ' ',
            "Selected"),
        React.createElement("div", { style: {
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
            React.createElement("table", { className: "table", style: { margin: 0 } },
                React.createElement("tbody", null,
                    React.createElement("tr", { onClick: function (evt) {
                            evt.preventDefault();
                            props.OnChange(evt, props.Options.filter(function (x) { return x.Selected === (props.Options.filter(function (o) { return o.Selected; }).length === props.Options.length); }));
                        } },
                        React.createElement("td", null,
                            React.createElement("input", { type: "checkbox", checked: props.Options.filter(function (x) { return x.Selected; }).length === props.Options.length, onChange: function () { return null; } })),
                        React.createElement("td", null, "All")),
                    props.Options.map(function (f, i) { return (React.createElement("tr", { key: i, onClick: function (evt) { return props.OnChange(evt, [f]); } },
                        React.createElement("td", null,
                            React.createElement("input", { type: "checkbox", checked: f.Selected, onChange: function () { return null; } })),
                        React.createElement("td", null, f.Text))); }))))));
};
exports.default = MultiSelect;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-forms/lib/Select.js":
/*!***************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-forms/lib/Select.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  Select.tsx - Gbtc
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
//  01/28/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
function Select(props) {
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", null, props.Label == null ? props.Field : props.Label),
        React.createElement("select", { className: "form-control", onChange: function (evt) {
                var record = __assign({}, props.Record);
                if (evt.target.value !== '')
                    record[props.Field] = evt.target.value;
                else
                    record[props.Field] = null;
                props.Setter(record);
            }, value: props.Record[props.Field] == null ? '' : props.Record[props.Field].toString(), disabled: props.Disabled == null ? false : props.Disabled },
            props.EmptyOption ? React.createElement("option", { value: "" }) : null,
            props.Options.map(function (a, i) { return (React.createElement("option", { key: i, value: a.Value }, a.Label)); }))));
}
exports.default = Select;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-forms/lib/TextArea.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-forms/lib/TextArea.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
// ******************************************************************************************************
//  TextArea.tsx - Gbtc
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
//  01/22/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
var React = __webpack_require__(/*! react */ "react");
function TextArea(props) {
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", null, props.Label == null ? props.Field : props.Label),
        React.createElement("textarea", { rows: props.Rows, className: props.Valid(props.Field) ? 'form-control' : 'form-control is-invalid', onChange: function (evt) {
                var record = __assign({}, props.Record);
                if (evt.target.value !== '')
                    record[props.Field] = evt.target.value;
                else
                    record[props.Field] = null;
                props.Setter(record);
            }, value: props.Record[props.Field] == null ? '' : props.Record[props.Field].toString(), disabled: props.Disabled == null ? false : props.Disabled }),
        React.createElement("div", { className: "invalid-feedback" }, props.Feedback == null ? props.Field + ' is a required field.' : props.Feedback)));
}
exports.default = TextArea;


/***/ }),

/***/ "../node_modules/@gpa-gemstone/react-forms/lib/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/@gpa-gemstone/react-forms/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ******************************************************************************************************
//  index.tsx - Gbtc
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
//  09/25/2020 - Billy Ernest
//       Generated original version of source code.
//
// ******************************************************************************************************
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiCheckBoxSelect = exports.ArrayCheckBoxes = exports.ArrayMultiSelect = exports.EnumCheckBoxes = exports.DateRangePicker = exports.TextArea = exports.Select = exports.DatePicker = exports.Input = exports.CheckBox = void 0;
var CheckBox_1 = __webpack_require__(/*! ./CheckBox */ "../node_modules/@gpa-gemstone/react-forms/lib/CheckBox.js");
exports.CheckBox = CheckBox_1.default;
var Input_1 = __webpack_require__(/*! ./Input */ "../node_modules/@gpa-gemstone/react-forms/lib/Input.js");
exports.Input = Input_1.default;
var DatePicker_1 = __webpack_require__(/*! ./DatePicker */ "../node_modules/@gpa-gemstone/react-forms/lib/DatePicker.js");
exports.DatePicker = DatePicker_1.default;
var Select_1 = __webpack_require__(/*! ./Select */ "../node_modules/@gpa-gemstone/react-forms/lib/Select.js");
exports.Select = Select_1.default;
var TextArea_1 = __webpack_require__(/*! ./TextArea */ "../node_modules/@gpa-gemstone/react-forms/lib/TextArea.js");
exports.TextArea = TextArea_1.default;
var DateRangePicker_1 = __webpack_require__(/*! ./DateRangePicker */ "../node_modules/@gpa-gemstone/react-forms/lib/DateRangePicker.js");
exports.DateRangePicker = DateRangePicker_1.default;
var EnumCheckBoxes_1 = __webpack_require__(/*! ./EnumCheckBoxes */ "../node_modules/@gpa-gemstone/react-forms/lib/EnumCheckBoxes.js");
exports.EnumCheckBoxes = EnumCheckBoxes_1.default;
var ArrayMultiSelect_1 = __webpack_require__(/*! ./ArrayMultiSelect */ "../node_modules/@gpa-gemstone/react-forms/lib/ArrayMultiSelect.js");
exports.ArrayMultiSelect = ArrayMultiSelect_1.default;
var ArrayCheckBoxes_1 = __webpack_require__(/*! ./ArrayCheckBoxes */ "../node_modules/@gpa-gemstone/react-forms/lib/ArrayCheckBoxes.js");
exports.ArrayCheckBoxes = ArrayCheckBoxes_1.default;
var MutliCheckBoxSelect_1 = __webpack_require__(/*! ./MutliCheckBoxSelect */ "../node_modules/@gpa-gemstone/react-forms/lib/MutliCheckBoxSelect.js");
exports.MultiCheckBoxSelect = MutliCheckBoxSelect_1.default;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMvbGliL0FycmF5Q2hlY2tCb3hlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMvbGliL0FycmF5TXVsdGlTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zL2xpYi9DaGVja0JveC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMvbGliL0RhdGVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zL2xpYi9EYXRlUmFuZ2VQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zL2xpYi9FbnVtQ2hlY2tCb3hlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMvbGliL0lucHV0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcy9saWIvTXV0bGlDaGVja0JveFNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMvbGliL1NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMvbGliL1RleHRBcmVhLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQGdwYS1nZW1zdG9uZS9yZWFjdC1mb3Jtcy9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFPLENBQUMsNkVBQVk7QUFDckM7QUFDQSxjQUFjLG1CQUFPLENBQUMsdUVBQVM7QUFDL0I7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxpRkFBYztBQUN6QztBQUNBLGVBQWUsbUJBQU8sQ0FBQyx5RUFBVTtBQUNqQztBQUNBLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFZO0FBQ3JDO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsMkZBQW1CO0FBQ25EO0FBQ0EsdUJBQXVCLG1CQUFPLENBQUMseUZBQWtCO0FBQ2pEO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsNkZBQW9CO0FBQ3JEO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsMkZBQW1CO0FBQ25EO0FBQ0EsNEJBQTRCLG1CQUFPLENBQUMsbUdBQXVCO0FBQzNEIiwiZmlsZSI6InZlbmRvcnN+QWRkTmV3RGF0YVNldH5EYXRhU291cmNlc35FZGl0RGF0YVNldH5Xb3JrU3BhY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBBcnJheUNoZWNrQm94ZXMudHN4IC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMDEvMjIvMjAyMCAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5mdW5jdGlvbiBBcnJheUNoZWNrQm94ZXMocHJvcHMpIHtcbiAgICB2YXIgUmVtb3ZlID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBhID0gX19zcHJlYWRBcnJheXMocHJvcHMuUmVjb3JkW3Byb3BzLkZpZWxkXSk7XG4gICAgICAgIHZhciBpID0gYS5pbmRleE9mKGNiLklEKTtcbiAgICAgICAgYS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH07XG4gICAgdmFyIEFkZCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgYSA9IF9fc3ByZWFkQXJyYXlzKHByb3BzLlJlY29yZFtwcm9wcy5GaWVsZF0pO1xuICAgICAgICB2YXIgaSA9IGEuaW5kZXhPZihjYi5JRCk7XG4gICAgICAgIGlmIChpIDwgMClcbiAgICAgICAgICAgIGEucHVzaChjYi5JRCk7XG4gICAgICAgIGEuc29ydCgpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsIHByb3BzLkxhYmVsID09IG51bGwgPyBwcm9wcy5GaWVsZCA6IHByb3BzLkxhYmVsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuICAgICAgICBwcm9wcy5DaGVja2JveGVzLm1hcChmdW5jdGlvbiAoY2IsIGkpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBpLCBjbGFzc05hbWU6IFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1jaGVjay1pbnB1dFwiLCB0eXBlOiBcImNoZWNrYm94XCIsIGNoZWNrZWQ6IHByb3BzLlJlY29yZFtwcm9wcy5GaWVsZF0uZmluZChmdW5jdGlvbiAoeCkgeyByZXR1cm4gY2IuSUQgPT09IHg7IH0pICE9PSB1bmRlZmluZWQsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLlNldHRlcihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMuUmVjb3JkKSwgKF9hID0ge30sIF9hW3Byb3BzLkZpZWxkXSA9IGV2dC50YXJnZXQuY2hlY2tlZCA/IEFkZChjYikgOiBSZW1vdmUoY2IpLCBfYSkpKTtcbiAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY2hlY2stbGFiZWxcIiB9LCBjYi5MYWJlbCkpKTsgfSkpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEFycmF5Q2hlY2tCb3hlcztcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgQXJyYXlNdWx0aVNlbGVjdC50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwMS8yMi8yMDIwIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5mdW5jdGlvbiBBcnJheU11bHRpU2VsZWN0KHByb3BzKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsIHByb3BzLkxhYmVsID09IG51bGwgPyBwcm9wcy5GaWVsZCA6IHByb3BzLkxhYmVsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IG11bHRpcGxlOiB0cnVlLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIHZhciByZWNvcmQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMuUmVjb3JkKSwgKF9hID0ge30sIF9hW3Byb3BzLkZpZWxkXSA9IEFycmF5LmZyb20oZXZ0LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcChmdW5jdGlvbiAoYSkgeyByZXR1cm4gcGFyc2VJbnQoYS52YWx1ZSwgMTApOyB9KSwgX2EpKTtcbiAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjb3JkKTtcbiAgICAgICAgICAgIH0sIHZhbHVlOiAoX2EgPSBwcm9wcy5SZWNvcmRbcHJvcHMuRmllbGRdKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSwgZGlzYWJsZWQ6IHByb3BzLkRpc2FibGVkID09IG51bGwgPyBmYWxzZSA6IHByb3BzLkRpc2FibGVkLCBzdHlsZTogcHJvcHMuU3R5bGUgfSwgcHJvcHMuT3B0aW9ucy5tYXAoZnVuY3Rpb24gKGEsIGkpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsga2V5OiBpLCB2YWx1ZTogYS5WYWx1ZSB9LCBhLkxhYmVsKSk7IH0pKSkpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQXJyYXlNdWx0aVNlbGVjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgQ2hlY2tCb3gudHN4IC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMDEvMjIvMjAyMCAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgQ2hlY2tCb3ggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENoZWNrQm94LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoZWNrQm94KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENoZWNrQm94LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWNoZWNrXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiY2hlY2tib3hcIiwgY2xhc3NOYW1lOiBcImZvcm0tY2hlY2staW5wdXRcIiwgc3R5bGU6IHsgekluZGV4OiAxIH0sIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWNvcmQgPSBfX2Fzc2lnbih7fSwgX3RoaXMucHJvcHMuUmVjb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkW190aGlzLnByb3BzLkZpZWxkXSA9IGV2dC50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJvcHMuU2V0dGVyKHJlY29yZCk7XG4gICAgICAgICAgICAgICAgfSwgdmFsdWU6IHRoaXMucHJvcHMuUmVjb3JkW3RoaXMucHJvcHMuRmllbGRdID8gJ29uJyA6ICdvZmYnLCBjaGVja2VkOiB0aGlzLnByb3BzLlJlY29yZFt0aGlzLnByb3BzLkZpZWxkXSA/IHRydWUgOiBmYWxzZSwgZGlzYWJsZWQ6IHRoaXMucHJvcHMuRGlzYWJsZWQgPT0gbnVsbCA/IGZhbHNlIDogdGhpcy5wcm9wcy5EaXNhYmxlZCB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWNoZWNrLWxhYmVsXCIgfSwgdGhpcy5wcm9wcy5MYWJlbCA9PSBudWxsID8gdGhpcy5wcm9wcy5GaWVsZCA6IHRoaXMucHJvcHMuTGFiZWwpKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hlY2tCb3g7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ2hlY2tCb3g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIERhdGVQaWNrZXIudHN4IC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMDIvMDUvMjAyMCAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgRGF0ZVBpY2tlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGF0ZVBpY2tlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEYXRlUGlja2VyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIERhdGVQaWNrZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsIHRoaXMucHJvcHMuTGFiZWwgPT0gbnVsbCA/IHRoaXMucHJvcHMuRmllbGQgOiB0aGlzLnByb3BzLkxhYmVsKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgdHlwZTogXCJkYXRlXCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWNvcmQgPSBfX2Fzc2lnbih7fSwgX3RoaXMucHJvcHMuUmVjb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQudmFsdWUgIT09ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkW190aGlzLnByb3BzLkZpZWxkXSA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZFtfdGhpcy5wcm9wcy5GaWVsZF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5TZXR0ZXIocmVjb3JkKTtcbiAgICAgICAgICAgICAgICB9LCB2YWx1ZTogdGhpcy5wcm9wcy5SZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0gPT0gbnVsbCA/ICcnIDogdGhpcy5wcm9wcy5SZWNvcmRbdGhpcy5wcm9wcy5GaWVsZF0udG9TdHJpbmcoKSwgZGlzYWJsZWQ6IHRoaXMucHJvcHMuRGlzYWJsZWQgPT0gbnVsbCA/IGZhbHNlIDogdGhpcy5wcm9wcy5EaXNhYmxlZCB9KSkpO1xuICAgIH07XG4gICAgcmV0dXJuIERhdGVQaWNrZXI7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRGF0ZVBpY2tlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgRGF0ZVJhbmdlUGlja2VyLnRzeCAtIEdidGNcbi8vXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vL1xuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxuLy9cbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLy9cbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXG4vL1xuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIDAyLzA1LzIwMjAgLSBCaWxseSBFcm5lc3Rcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxuLy9cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmZ1bmN0aW9uIERhdGVSYW5nZVBpY2tlcihwcm9wcykge1xuICAgIHZhciBfYSA9IFJlYWN0LnVzZVN0YXRlKCdDdXN0b20nKSwgcmFuZ2UgPSBfYVswXSwgc2V0UmFuZ2UgPSBfYVsxXTtcbiAgICBmdW5jdGlvbiBVcGRhdGVSYW5nZShldnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzZXRSYW5nZShldnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgdmFyIGRheXMgPSAwO1xuICAgICAgICBpZiAoZXZ0LnRhcmdldC52YWx1ZSA9PT0gJ0N1c3RvbScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsc2UgaWYgKGV2dC50YXJnZXQudmFsdWUgPT09ICcxIERheScpXG4gICAgICAgICAgICBkYXlzID0gMTtcbiAgICAgICAgZWxzZSBpZiAoZXZ0LnRhcmdldC52YWx1ZSA9PT0gJzcgRGF5cycpXG4gICAgICAgICAgICBkYXlzID0gNztcbiAgICAgICAgZWxzZSBpZiAoZXZ0LnRhcmdldC52YWx1ZSA9PT0gJzMwIERheXMnKVxuICAgICAgICAgICAgZGF5cyA9IDMwO1xuICAgICAgICBlbHNlIGlmIChldnQudGFyZ2V0LnZhbHVlID09PSAnOTAgRGF5cycpXG4gICAgICAgICAgICBkYXlzID0gOTA7XG4gICAgICAgIGVsc2UgaWYgKGV2dC50YXJnZXQudmFsdWUgPT09ICcxODAgRGF5cycpXG4gICAgICAgICAgICBkYXlzID0gMTgwO1xuICAgICAgICBlbHNlIGlmIChldnQudGFyZ2V0LnZhbHVlID09PSAnMzY1IERheXMnKVxuICAgICAgICAgICAgZGF5cyA9IDM2NTtcbiAgICAgICAgdmFyIGYgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBmLnNldERhdGUoZi5nZXREYXRlKCkgLSBkYXlzKTtcbiAgICAgICAgcHJvcHMuU2V0dGVyKF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm9wcy5SZWNvcmQpLCAoX2EgPSB7fSwgX2FbcHJvcHMuRnJvbUZpZWxkXSA9IGYuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKGYuZ2V0TW9udGgoKSArIDEpXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnBhZFN0YXJ0KDIsICcwJykgKyBcIi1cIiArIGYuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSwgX2FbcHJvcHMuVG9GaWVsZF0gPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIChuZXcgRGF0ZSgpLmdldE1vbnRoKCkgKyAxKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC5wYWRTdGFydCgyLCAnMCcpICsgXCItXCIgKyBuZXcgRGF0ZSgpLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyksIF9hKSkpO1xuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBudWxsLCBwcm9wcy5MYWJlbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicm93XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCB2YWx1ZTogcmFuZ2UsIG9uQ2hhbmdlOiBVcGRhdGVSYW5nZSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwiQ3VzdG9tXCIgfSwgXCJDdXN0b21cIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCIxIERheVwiIH0sIFwiMSBEYXlcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCI3IERheXNcIiB9LCBcIjcgRGF5c1wiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiBcIjMwIERheXNcIiB9LCBcIjMwIERheXNcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCI5MCBEYXlzXCIgfSwgXCI5MCBEYXlzXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwiMTgwIERheXNcIiB9LCBcIjE4MCBEYXlzXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwiMzY1IERheXNcIiB9LCBcIjM2NSBEYXlzXCIpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCB0eXBlOiBcImRhdGVcIiwgb25DaGFuZ2U6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWNvcmQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMuUmVjb3JkKSwgKF9hID0ge30sIF9hW3Byb3BzLkZyb21GaWVsZF0gPSBldnQudGFyZ2V0LnZhbHVlICE9PSAnJyA/IGV2dC50YXJnZXQudmFsdWUgOiBudWxsLCBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuU2V0dGVyKHJlY29yZCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHZhbHVlOiBwcm9wcy5SZWNvcmRbcHJvcHMuRnJvbUZpZWxkXSA9PSBudWxsID8gJycgOiBwcm9wcy5SZWNvcmRbcHJvcHMuRnJvbUZpZWxkXS50b1N0cmluZygpLCBkaXNhYmxlZDogcHJvcHMuRGlzYWJsZWQgPT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuRGlzYWJsZWQgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgdHlwZTogXCJkYXRlXCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzLlJlY29yZCksIChfYSA9IHt9LCBfYVtwcm9wcy5Ub0ZpZWxkXSA9IGV2dC50YXJnZXQudmFsdWUgIT09ICcnID8gZXZ0LnRhcmdldC52YWx1ZSA6IG51bGwsIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWU6IHByb3BzLlJlY29yZFtwcm9wcy5Ub0ZpZWxkXSA9PSBudWxsID8gJycgOiBwcm9wcy5SZWNvcmRbcHJvcHMuVG9GaWVsZF0udG9TdHJpbmcoKSwgZGlzYWJsZWQ6IHByb3BzLkRpc2FibGVkID09IG51bGwgPyBmYWxzZSA6IHByb3BzLkRpc2FibGVkIH0pKSkpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IERhdGVSYW5nZVBpY2tlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgRW51bUNoZWNrQm94ZXMudHN4IC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMDEvMjIvMjAyMCAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuZnVuY3Rpb24gRW51bUNoZWNrQm94ZXMocHJvcHMpIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZSAqL1xuICAgIHZhciBFcXVhdGVGbGFnID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiAoKHByb3BzLlJlY29yZFtwcm9wcy5GaWVsZF0gLyBNYXRoLnBvdygyLCBpbmRleCkpICYgMSkgIT09IDA7IH07XG4gICAgdmFyIERlY3JlbWVudEZsYWcgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHByb3BzLlJlY29yZFtwcm9wcy5GaWVsZF0gLSBNYXRoLnBvdygyLCBpbmRleCk7IH07XG4gICAgdmFyIEluY3JlbWVudEZsYWcgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHByb3BzLlJlY29yZFtwcm9wcy5GaWVsZF0gKyBNYXRoLnBvdygyLCBpbmRleCk7IH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgcHJvcHMuTGFiZWwgPT0gbnVsbCA/IHByb3BzLkZpZWxkIDogcHJvcHMuTGFiZWwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG4gICAgICAgIHByb3BzLkVudW0ubWFwKGZ1bmN0aW9uIChmbGFnLCBpKSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGtleTogaSwgY2xhc3NOYW1lOiBcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY2hlY2staW5wdXRcIiwgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiBFcXVhdGVGbGFnKGkpLCBvbkNoYW5nZTogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5TZXR0ZXIoX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzLlJlY29yZCksIChfYSA9IHt9LCBfYVtwcm9wcy5GaWVsZF0gPSBldnQudGFyZ2V0LmNoZWNrZWQgPyBJbmNyZW1lbnRGbGFnKGkpIDogRGVjcmVtZW50RmxhZyhpKSwgX2EpKSk7XG4gICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWNoZWNrLWxhYmVsXCIgfSwgZmxhZykpKTsgfSkpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVudW1DaGVja0JveGVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBJbnB1dC50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwMS8yMi8yMDIwIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5mdW5jdGlvbiBJbnB1dChwcm9wcykge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsIHByb3BzLkxhYmVsID09IG51bGwgPyBwcm9wcy5GaWVsZCA6IHByb3BzLkxhYmVsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogcHJvcHMuVHlwZSA9PT0gdW5kZWZpbmVkID8gJ3RleHQnIDogcHJvcHMuVHlwZSwgY2xhc3NOYW1lOiBwcm9wcy5WYWxpZChwcm9wcy5GaWVsZCkgPyAnZm9ybS1jb250cm9sJyA6ICdmb3JtLWNvbnRyb2wgaXMtaW52YWxpZCcsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5TZXR0ZXIoX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzLlJlY29yZCksIChfYSA9IHt9LCBfYVtwcm9wcy5GaWVsZF0gPSBldnQudGFyZ2V0LnZhbHVlICE9PSAnJyA/IGV2dC50YXJnZXQudmFsdWUgOiBudWxsLCBfYSkpKTtcbiAgICAgICAgICAgIH0sIHZhbHVlOiBwcm9wcy5SZWNvcmRbcHJvcHMuRmllbGRdID09IG51bGwgPyAnJyA6IHByb3BzLlJlY29yZFtwcm9wcy5GaWVsZF0udG9TdHJpbmcoKSwgZGlzYWJsZWQ6IHByb3BzLkRpc2FibGVkID09IG51bGwgPyBmYWxzZSA6IHByb3BzLkRpc2FibGVkIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImludmFsaWQtZmVlZGJhY2tcIiB9LCBwcm9wcy5GZWVkYmFjayA9PSBudWxsID8gcHJvcHMuRmllbGQgKyAnIGlzIGEgcmVxdWlyZWQgZmllbGQuJyA6IHByb3BzLkZlZWRiYWNrKSkpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIE11bHRpQ2hlY2tCb3hTZWxlY3QudHN4IC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMDcvMTcvMjAyMCAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgTXVsdGlTZWxlY3QgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX2EgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksIHNob3cgPSBfYVswXSwgc2V0U2hvdyA9IF9hWzFdO1xuICAgIHZhciBtdWx0aVNlbGVjdCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBmdW5jdGlvbiBIYW5kbGVTaG93KGV2dCkge1xuICAgICAgICBpZiAobXVsdGlTZWxlY3QuY3VycmVudCA9PT0gbnVsbClcbiAgICAgICAgICAgIHNldFNob3coIXNob3cpO1xuICAgICAgICBlbHNlIGlmICghbXVsdGlTZWxlY3QuY3VycmVudC5jb250YWlucyhldnQudGFyZ2V0KSlcbiAgICAgICAgICAgIHNldFNob3coZmFsc2UpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRTaG93KHRydWUpO1xuICAgIH1cbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBIYW5kbGVTaG93LCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBIYW5kbGVTaG93LCBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHJlZjogbXVsdGlTZWxlY3QsIHN0eWxlOiB7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6ICdpbmhlcml0JyB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBzdHlsZTogeyBib3JkZXI6ICcxcHggc29saWQgI2NlZDRkYScsIHBhZGRpbmc6ICcuMzc1cmVtIC43NXJlbScsIGZvbnRTaXplOiAnMXJlbScsIGJvcmRlclJhZGl1czogJy4yNXJlbScgfSwgY2xhc3NOYW1lOiBcImJ0biBmb3JtLWNvbnRyb2wgZHJvcGRvd24tdG9nZ2xlXCIsIG9uQ2xpY2s6IEhhbmRsZVNob3cgfSxcbiAgICAgICAgICAgIHByb3BzLk9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LlNlbGVjdGVkOyB9KS5sZW5ndGggIT09IHByb3BzLk9wdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBwcm9wcy5PcHRpb25zLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5TZWxlY3RlZDsgfSkubGVuZ3RoXG4gICAgICAgICAgICAgICAgOiAnQWxsICcsXG4gICAgICAgICAgICAnICcsXG4gICAgICAgICAgICBcIlNlbGVjdGVkXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNzUsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEwIDUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNob3cgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpJyxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDQwMSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgY2xhc3NOYW1lOiBcInRhYmxlXCIsIHN0eWxlOiB7IG1hcmdpbjogMCB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5PbkNoYW5nZShldnQsIHByb3BzLk9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LlNlbGVjdGVkID09PSAocHJvcHMuT3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8uU2VsZWN0ZWQ7IH0pLmxlbmd0aCA9PT0gcHJvcHMuT3B0aW9ucy5sZW5ndGgpOyB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNoZWNrZWQ6IHByb3BzLk9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LlNlbGVjdGVkOyB9KS5sZW5ndGggPT09IHByb3BzLk9wdGlvbnMubGVuZ3RoLCBvbkNoYW5nZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgXCJBbGxcIikpLFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5PcHRpb25zLm1hcChmdW5jdGlvbiAoZiwgaSkgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IGtleTogaSwgb25DbGljazogZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gcHJvcHMuT25DaGFuZ2UoZXZ0LCBbZl0pOyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNoZWNrZWQ6IGYuU2VsZWN0ZWQsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9IH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBmLlRleHQpKSk7IH0pKSkpKSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTXVsdGlTZWxlY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIFNlbGVjdC50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwMS8yOC8yMDIwIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5mdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBudWxsLCBwcm9wcy5MYWJlbCA9PSBudWxsID8gcHJvcHMuRmllbGQgOiBwcm9wcy5MYWJlbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IF9fYXNzaWduKHt9LCBwcm9wcy5SZWNvcmQpO1xuICAgICAgICAgICAgICAgIGlmIChldnQudGFyZ2V0LnZhbHVlICE9PSAnJylcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkW3Byb3BzLkZpZWxkXSA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZWNvcmRbcHJvcHMuRmllbGRdID0gbnVsbDtcbiAgICAgICAgICAgICAgICBwcm9wcy5TZXR0ZXIocmVjb3JkKTtcbiAgICAgICAgICAgIH0sIHZhbHVlOiBwcm9wcy5SZWNvcmRbcHJvcHMuRmllbGRdID09IG51bGwgPyAnJyA6IHByb3BzLlJlY29yZFtwcm9wcy5GaWVsZF0udG9TdHJpbmcoKSwgZGlzYWJsZWQ6IHByb3BzLkRpc2FibGVkID09IG51bGwgPyBmYWxzZSA6IHByb3BzLkRpc2FibGVkIH0sXG4gICAgICAgICAgICBwcm9wcy5FbXB0eU9wdGlvbiA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogXCJcIiB9KSA6IG51bGwsXG4gICAgICAgICAgICBwcm9wcy5PcHRpb25zLm1hcChmdW5jdGlvbiAoYSwgaSkgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyBrZXk6IGksIHZhbHVlOiBhLlZhbHVlIH0sIGEuTGFiZWwpKTsgfSkpKSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTZWxlY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vICBUZXh0QXJlYS50c3ggLSBHYnRjXG4vL1xuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy9cbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcbi8vXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8vXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxuLy9cbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICAwMS8yMi8yMDIwIC0gQmlsbHkgRXJuZXN0XG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cbi8vXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmZ1bmN0aW9uIFRleHRBcmVhKHByb3BzKSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgcHJvcHMuTGFiZWwgPT0gbnVsbCA/IHByb3BzLkZpZWxkIDogcHJvcHMuTGFiZWwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgeyByb3dzOiBwcm9wcy5Sb3dzLCBjbGFzc05hbWU6IHByb3BzLlZhbGlkKHByb3BzLkZpZWxkKSA/ICdmb3JtLWNvbnRyb2wnIDogJ2Zvcm0tY29udHJvbCBpcy1pbnZhbGlkJywgb25DaGFuZ2U6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gX19hc3NpZ24oe30sIHByb3BzLlJlY29yZCk7XG4gICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQudmFsdWUgIT09ICcnKVxuICAgICAgICAgICAgICAgICAgICByZWNvcmRbcHJvcHMuRmllbGRdID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZFtwcm9wcy5GaWVsZF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHByb3BzLlNldHRlcihyZWNvcmQpO1xuICAgICAgICAgICAgfSwgdmFsdWU6IHByb3BzLlJlY29yZFtwcm9wcy5GaWVsZF0gPT0gbnVsbCA/ICcnIDogcHJvcHMuUmVjb3JkW3Byb3BzLkZpZWxkXS50b1N0cmluZygpLCBkaXNhYmxlZDogcHJvcHMuRGlzYWJsZWQgPT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuRGlzYWJsZWQgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW52YWxpZC1mZWVkYmFja1wiIH0sIHByb3BzLkZlZWRiYWNrID09IG51bGwgPyBwcm9wcy5GaWVsZCArICcgaXMgYSByZXF1aXJlZCBmaWVsZC4nIDogcHJvcHMuRmVlZGJhY2spKSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0QXJlYTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgaW5kZXgudHN4IC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMDkvMjUvMjAyMCAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk11bHRpQ2hlY2tCb3hTZWxlY3QgPSBleHBvcnRzLkFycmF5Q2hlY2tCb3hlcyA9IGV4cG9ydHMuQXJyYXlNdWx0aVNlbGVjdCA9IGV4cG9ydHMuRW51bUNoZWNrQm94ZXMgPSBleHBvcnRzLkRhdGVSYW5nZVBpY2tlciA9IGV4cG9ydHMuVGV4dEFyZWEgPSBleHBvcnRzLlNlbGVjdCA9IGV4cG9ydHMuRGF0ZVBpY2tlciA9IGV4cG9ydHMuSW5wdXQgPSBleHBvcnRzLkNoZWNrQm94ID0gdm9pZCAwO1xudmFyIENoZWNrQm94XzEgPSByZXF1aXJlKFwiLi9DaGVja0JveFwiKTtcbmV4cG9ydHMuQ2hlY2tCb3ggPSBDaGVja0JveF8xLmRlZmF1bHQ7XG52YXIgSW5wdXRfMSA9IHJlcXVpcmUoXCIuL0lucHV0XCIpO1xuZXhwb3J0cy5JbnB1dCA9IElucHV0XzEuZGVmYXVsdDtcbnZhciBEYXRlUGlja2VyXzEgPSByZXF1aXJlKFwiLi9EYXRlUGlja2VyXCIpO1xuZXhwb3J0cy5EYXRlUGlja2VyID0gRGF0ZVBpY2tlcl8xLmRlZmF1bHQ7XG52YXIgU2VsZWN0XzEgPSByZXF1aXJlKFwiLi9TZWxlY3RcIik7XG5leHBvcnRzLlNlbGVjdCA9IFNlbGVjdF8xLmRlZmF1bHQ7XG52YXIgVGV4dEFyZWFfMSA9IHJlcXVpcmUoXCIuL1RleHRBcmVhXCIpO1xuZXhwb3J0cy5UZXh0QXJlYSA9IFRleHRBcmVhXzEuZGVmYXVsdDtcbnZhciBEYXRlUmFuZ2VQaWNrZXJfMSA9IHJlcXVpcmUoXCIuL0RhdGVSYW5nZVBpY2tlclwiKTtcbmV4cG9ydHMuRGF0ZVJhbmdlUGlja2VyID0gRGF0ZVJhbmdlUGlja2VyXzEuZGVmYXVsdDtcbnZhciBFbnVtQ2hlY2tCb3hlc18xID0gcmVxdWlyZShcIi4vRW51bUNoZWNrQm94ZXNcIik7XG5leHBvcnRzLkVudW1DaGVja0JveGVzID0gRW51bUNoZWNrQm94ZXNfMS5kZWZhdWx0O1xudmFyIEFycmF5TXVsdGlTZWxlY3RfMSA9IHJlcXVpcmUoXCIuL0FycmF5TXVsdGlTZWxlY3RcIik7XG5leHBvcnRzLkFycmF5TXVsdGlTZWxlY3QgPSBBcnJheU11bHRpU2VsZWN0XzEuZGVmYXVsdDtcbnZhciBBcnJheUNoZWNrQm94ZXNfMSA9IHJlcXVpcmUoXCIuL0FycmF5Q2hlY2tCb3hlc1wiKTtcbmV4cG9ydHMuQXJyYXlDaGVja0JveGVzID0gQXJyYXlDaGVja0JveGVzXzEuZGVmYXVsdDtcbnZhciBNdXRsaUNoZWNrQm94U2VsZWN0XzEgPSByZXF1aXJlKFwiLi9NdXRsaUNoZWNrQm94U2VsZWN0XCIpO1xuZXhwb3J0cy5NdWx0aUNoZWNrQm94U2VsZWN0ID0gTXV0bGlDaGVja0JveFNlbGVjdF8xLmRlZmF1bHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9
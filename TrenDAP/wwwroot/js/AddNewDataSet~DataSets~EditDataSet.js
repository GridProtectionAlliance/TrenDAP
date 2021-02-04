(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddNewDataSet~DataSets~EditDataSet"],{

/***/ "./TypeScript/Constants.ts":
/*!*********************************!*\
  !*** ./TypeScript/Constants.ts ***!
  \*********************************/
/*! exports provided: HeavyCheckMark, Pencil, TrashCan, CrossMark, Plus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeavyCheckMark", function() { return HeavyCheckMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pencil", function() { return Pencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashCan", function() { return TrashCan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossMark", function() { return CrossMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return Plus; });
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



/***/ }),

/***/ "./TypeScript/Features/DataSets/DataSetsSlice.ts":
/*!*******************************************************!*\
  !*** ./TypeScript/Features/DataSets/DataSetsSlice.ts ***!
  \*******************************************************/
/*! exports provided: FetchDataSets, AddDataSet, RemoveDataSet, UpdateDataSet, DataSetsSlice, Sort, New, Update, SetRecordByID, default, SelectDataSets, SelectDataSetByID, SelectRecord, SelectNewDataSet, SelectNewXDADataSet, SelectDataSetsStatus, SelectDataSetsForUser, SelectDataSetsAllPublicNotUser, SelectDataSetsSortField, SelectDataSetsAscending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataSets", function() { return FetchDataSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDataSet", function() { return AddDataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDataSet", function() { return RemoveDataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDataSet", function() { return UpdateDataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSetsSlice", function() { return DataSetsSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "New", function() { return New; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRecordByID", function() { return SetRecordByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDataSets", function() { return SelectDataSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDataSetByID", function() { return SelectDataSetByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRecord", function() { return SelectRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectNewDataSet", function() { return SelectNewDataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectNewXDADataSet", function() { return SelectNewXDADataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDataSetsStatus", function() { return SelectDataSetsStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDataSetsForUser", function() { return SelectDataSetsForUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDataSetsAllPublicNotUser", function() { return SelectDataSetsAllPublicNotUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDataSetsSortField", function() { return SelectDataSetsSortField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDataSetsAscending", function() { return SelectDataSetsAscending; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "../node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
//******************************************************************************************************
//  DataSetsSlice.ts - Gbtc
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
//  10/05/2020 - Billy Ernest
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;


// #region [ Thunks ]
var FetchDataSets = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('DataSets/FetchDataSets', function (_, _a) {
    var dispatch = _a.dispatch;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, GetDataSets()];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
});
var AddDataSet = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('DataSets/AddDataSet', function (DataSet, _a) {
    var dispatch = _a.dispatch;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, PostDataSet(DataSet)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
});
var RemoveDataSet = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('DataSets/RemoveDataSet', function (DataSet, _a) {
    var dispatch = _a.dispatch;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, DeleteDataSet(DataSet)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
});
var UpdateDataSet = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('DataSets/UpdateDataSet', function (DataSet, _a) {
    var dispatch = _a.dispatch;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, PatchDataSet(DataSet)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
});
// #endregion
// #region [ Slice ]
var DataSetsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
    name: 'DataSets',
    initialState: {
        Status: 'unitiated',
        DataSets: [],
        Error: null,
        SortField: 'UpdatedOn',
        Ascending: false,
        Record: { ID: 0, Name: '', User: '', JSON: '', JSONString: '[]', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 52) - 1, Months: Math.pow(2, 12) - 1 }
    },
    reducers: {
        Sort: function (state, action) {
            if (state.SortField === action.payload.SortField)
                state.Ascending = !action.payload.Ascending;
            else
                state.SortField = action.payload.SortField;
            var sorted = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.orderBy(state.DataSets, [state.SortField], [state.Ascending ? "asc" : "desc"]);
            state.DataSets = sorted;
        },
        New: function (state, action) {
            state.Record = { ID: 0, Name: '', User: '', JSON: '', JSONString: '[]', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 52) - 1, Months: Math.pow(2, 12) - 1 };
        },
        SetRecordByID: function (state, action) {
            var record = state.DataSets.find(function (ds) { return ds.ID === action.payload; });
            if (record !== undefined)
                state.Record = record;
        },
        Update: function (state, action) {
            state.Record = action.payload;
        }
    },
    extraReducers: function (builder) {
        builder.addCase(FetchDataSets.fulfilled, function (state, action) {
            state.Status = 'idle';
            state.Error = null;
            var results = action.payload.map(function (r) { return (__assign(__assign({}, r), { From: moment(r.From).format('YYYY-MM-DD'), To: moment(r.To).format('YYYY-MM-DD') })); });
            var sorted = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.orderBy(results, [state.SortField], [state.Ascending ? "asc" : "desc"]);
            state.DataSets = sorted;
        });
        builder.addCase(FetchDataSets.pending, function (state, action) {
            state.Status = 'loading';
        });
        builder.addCase(FetchDataSets.rejected, function (state, action) {
            state.Status = 'error';
            state.Error = action.error.message;
        });
        builder.addCase(AddDataSet.pending, function (state, action) {
            state.Status = 'loading';
        });
        builder.addCase(AddDataSet.rejected, function (state, action) {
            state.Status = 'error';
            state.Error = action.error.message;
        });
        builder.addCase(AddDataSet.fulfilled, function (state, action) {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(RemoveDataSet.pending, function (state, action) {
            state.Status = 'loading';
        });
        builder.addCase(RemoveDataSet.rejected, function (state, action) {
            state.Status = 'error';
            state.Error = action.error.message;
        });
        builder.addCase(RemoveDataSet.fulfilled, function (state, action) {
            state.Status = 'changed';
            state.Error = null;
        });
        builder.addCase(UpdateDataSet.pending, function (state, action) {
            state.Status = 'loading';
        });
        builder.addCase(UpdateDataSet.rejected, function (state, action) {
            state.Status = 'error';
            state.Error = action.error.message;
        });
        builder.addCase(UpdateDataSet.fulfilled, function (state, action) {
            state.Status = 'changed';
            state.Error = null;
        });
    }
});
// #endregion
// #region [ Selectors ]
var Sort = (_a = DataSetsSlice.actions, _a.Sort), New = _a.New, Update = _a.Update, SetRecordByID = _a.SetRecordByID;
/* harmony default export */ __webpack_exports__["default"] = (DataSetsSlice.reducer);
var SelectDataSets = function (state) { return state.DataSets.DataSets; };
var SelectDataSetByID = function (state, id) { return state.DataSets.DataSets.find(function (ds) { return ds.ID === id; }); };
var SelectRecord = function (state) { return state.DataSets.Record; };
var SelectNewDataSet = function (state) { return ({ ID: 0, Name: '', User: '', JSON: '', JSONString: '[]', From: moment().subtract(30, 'days').format('YYYY-MM-DD'), To: moment().format('YYYY-MM-DD'), Hours: Math.pow(2, 24) - 1, Days: Math.pow(2, 7) - 1, Weeks: Math.pow(2, 52) - 1, Months: Math.pow(2, 12) - 1 }); };
var SelectNewXDADataSet = function () { return ({ By: 'Meter', IDs: [], Phases: [], Groups: [], Types: [] }); };
var SelectDataSetsStatus = function (state) { return state.DataSets.Status; };
var SelectDataSetsForUser = function (state, user) { return state.DataSets.DataSets.filter(function (ws) { return ws.User === user; }); };
var SelectDataSetsAllPublicNotUser = function (state, user) { return state.DataSets.DataSets.filter(function (ws) { return ws.Public && ws.User !== user; }); };
var SelectDataSetsSortField = function (state) { return state.DataSets.SortField; };
var SelectDataSetsAscending = function (state) { return state.DataSets.Ascending; };
// #endregion
// #region [ Async Functions ]
function GetDataSets() {
    return ajax({
        type: "GET",
        url: homePath + "api/DataSet",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        cache: true,
        async: true
    });
}
function PostDataSet(DataSet) {
    return ajax({
        type: "POST",
        url: homePath + "api/DataSet",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(__assign(__assign({}, DataSet), { UpdatedOn: moment.utc().format('MM/DD/YYYY HH:mm:ss') })),
        cache: false,
        async: true
    });
}
function DeleteDataSet(DataSet) {
    return ajax({
        type: "DELETE",
        url: homePath + "api/DataSet",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(DataSet),
        cache: false,
        async: true
    });
}
function PatchDataSet(DataSet) {
    return ajax({
        type: "PATCH",
        url: homePath + "api/DataSet",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(__assign(__assign({}, DataSet), { UpdatedOn: moment.utc().format('MM/DD/YYYY HH:mm:ss') })),
        cache: false,
        async: true
    });
}
// #endregion


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL0RhdGFTZXRzU2xpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4Ryx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUV4RyxTQUFTO0FBQ1QsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUNwQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdkIsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUMyQzs7Ozs7Ozs7Ozs7OztBQzdCNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUF3RztBQUN4RywyQkFBMkI7QUFDM0IsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtB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VyxFQUFFLGlDQUFpQztRQUM5QyxRQUFRLEVBQUUsTUFBTTtRQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsdUJBQU0sT0FBTyxLQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUc7UUFDM0YsS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxPQUF5QjtJQUM1QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDVixJQUFJLEVBQUUsUUFBUTtRQUNkLEdBQUcsRUFBSyxRQUFRLGdCQUFhO1FBQzdCLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsUUFBUSxFQUFFLE1BQU07UUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQzdCLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLElBQUk7S0FDZCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsT0FBeUI7SUFDM0MsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ1YsSUFBSSxFQUFFLE9BQU87UUFDYixHQUFHLEVBQUssUUFBUSxnQkFBYTtRQUM3QixXQUFXLEVBQUUsaUNBQWlDO1FBQzlDLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyx1QkFBTSxPQUFPLEtBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBRztRQUMzRixLQUFLLEVBQUUsS0FBSztRQUNaLEtBQUssRUFBRSxJQUFJO0tBQ2QsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNELGFBQWEiLCJmaWxlIjoiQWRkTmV3RGF0YVNldH5EYXRhU2V0c35FZGl0RGF0YVNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBDb25zdGFudHMudHMgLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMDkvMzAvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbi8vIGVtb2ppc1xyXG5jb25zdCBIZWF2eUNoZWNrTWFyayA9ICfinJTvuI8nO1xyXG5jb25zdCBQZW5jaWwgPSAn4pyP77iPJztcclxuY29uc3QgVHJhc2hDYW4gPSAn8J+Xke+4jyc7XHJcbmNvbnN0IENyb3NzTWFyayA9ICfinYwnO1xyXG5jb25zdCBQbHVzID0gJ+KelSc7XHJcbmV4cG9ydCB7IEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFRyYXNoQ2FuLCBDcm9zc01hcmssUGx1cyB9OyIsIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICBEYXRhU2V0c1NsaWNlLnRzIC0gR2J0Y1xyXG4vL1xyXG4vLyAgQ29weXJpZ2h0IMKpIDIwMjAsIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZS4gIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbi8vXHJcbi8vICBMaWNlbnNlZCB0byB0aGUgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlIChHUEEpIHVuZGVyIG9uZSBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gU2VlXHJcbi8vICB0aGUgTk9USUNFIGZpbGUgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuXHJcbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXHJcbi8vICBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdDpcclxuLy9cclxuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcbi8vXHJcbi8vICBVbmxlc3MgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHRoZSBzdWJqZWN0IHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXHJcbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcclxuLy8gIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zLlxyXG4vL1xyXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIDEwLzA1LzIwMjAgLSBCaWxseSBFcm5lc3RcclxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXHJcbi8vXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IF8sIHsgcmVzdWx0IH0gZnJvbSAnbG9kYXNoJztcclxuXHJcbi8vICNyZWdpb24gWyBUaHVua3MgXVxyXG5leHBvcnQgY29uc3QgRmV0Y2hEYXRhU2V0cyA9IGNyZWF0ZUFzeW5jVGh1bmsoJ0RhdGFTZXRzL0ZldGNoRGF0YVNldHMnLCBhc3luYyAoXywgeyBkaXNwYXRjaCB9KSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgR2V0RGF0YVNldHMoKTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRGF0YVNldCA9IGNyZWF0ZUFzeW5jVGh1bmsoJ0RhdGFTZXRzL0FkZERhdGFTZXQnLCBhc3luYyAoRGF0YVNldDogVHJlbkRBUC5pRGF0YVNldCwgeyBkaXNwYXRjaCB9KSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgUG9zdERhdGFTZXQoRGF0YVNldCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlbW92ZURhdGFTZXQgPSBjcmVhdGVBc3luY1RodW5rKCdEYXRhU2V0cy9SZW1vdmVEYXRhU2V0JywgYXN5bmMgKERhdGFTZXQ6IFRyZW5EQVAuaURhdGFTZXQsIHsgZGlzcGF0Y2ggfSkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IERlbGV0ZURhdGFTZXQoRGF0YVNldCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGFTZXQgPSBjcmVhdGVBc3luY1RodW5rKCdEYXRhU2V0cy9VcGRhdGVEYXRhU2V0JywgYXN5bmMgKERhdGFTZXQ6IFRyZW5EQVAuaURhdGFTZXQsIHsgZGlzcGF0Y2ggfSkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IFBhdGNoRGF0YVNldChEYXRhU2V0KTtcclxufSk7XHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gWyBTbGljZSBdXHJcbmV4cG9ydCBjb25zdCBEYXRhU2V0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ0RhdGFTZXRzJyxcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIFN0YXR1czogJ3VuaXRpYXRlZCcgYXMgVHJlbkRBUC5TdGF0dXMsXHJcbiAgICAgICAgRGF0YVNldHM6IFtdIGFzIFRyZW5EQVAuaURhdGFTZXRbXSxcclxuICAgICAgICBFcnJvcjogbnVsbCxcclxuICAgICAgICBTb3J0RmllbGQ6ICdVcGRhdGVkT24nLFxyXG4gICAgICAgIEFzY2VuZGluZzogZmFsc2UsXHJcbiAgICAgICAgUmVjb3JkOiB7IElEOiAwLCBOYW1lOiAnJywgVXNlcjogJycsIEpTT046ICcnLCBKU09OU3RyaW5nOiAnW10nLCBGcm9tOiBtb21lbnQoKS5zdWJ0cmFjdCgzMCwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSwgVG86IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLCBIb3VyczogTWF0aC5wb3coMiwgMjQpIC0gMSwgRGF5czogTWF0aC5wb3coMiwgNykgLSAxLCBXZWVrczogTWF0aC5wb3coMiwgNTIpIC0gMSwgTW9udGhzOiBNYXRoLnBvdygyLCAxMikgLSAxIH0gYXMgVHJlbkRBUC5pRGF0YVNldFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgU29ydDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLlNvcnRGaWVsZCA9PT0gYWN0aW9uLnBheWxvYWQuU29ydEZpZWxkKVxyXG4gICAgICAgICAgICAgICAgc3RhdGUuQXNjZW5kaW5nID0gIWFjdGlvbi5wYXlsb2FkLkFzY2VuZGluZztcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc3RhdGUuU29ydEZpZWxkID0gYWN0aW9uLnBheWxvYWQuU29ydEZpZWxkO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc29ydGVkID0gXy5vcmRlckJ5KHN0YXRlLkRhdGFTZXRzLCBbc3RhdGUuU29ydEZpZWxkXSwgW3N0YXRlLkFzY2VuZGluZyA/IFwiYXNjXCIgOiBcImRlc2NcIl0pXHJcbiAgICAgICAgICAgIHN0YXRlLkRhdGFTZXRzID0gc29ydGVkIGFzIFRyZW5EQVAuaURhdGFTZXRbXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIE5ldzogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuUmVjb3JkID0geyBJRDogMCwgTmFtZTogJycsIFVzZXI6ICcnLCBKU09OOiAnJywgSlNPTlN0cmluZzogJ1tdJywgRnJvbTogbW9tZW50KCkuc3VidHJhY3QoMzAsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJyksIFRvOiBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSwgSG91cnM6IE1hdGgucG93KDIsIDI0KSAtIDEsIERheXM6IE1hdGgucG93KDIsIDcpIC0gMSwgV2Vla3M6IE1hdGgucG93KDIsIDUyKSAtIDEsIE1vbnRoczogTWF0aC5wb3coMiwgMTIpIC0gMSB9IGFzIFRyZW5EQVAuaURhdGFTZXRcclxuICAgICAgICB9LFxyXG4gICAgICAgIFNldFJlY29yZEJ5SUQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHN0YXRlLkRhdGFTZXRzLmZpbmQoZHMgPT4gZHMuSUQgPT09IGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgaWYocmVjb3JkICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5SZWNvcmQgPSByZWNvcmQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBVcGRhdGU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLlJlY29yZCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG5cclxuICAgICAgICBidWlsZGVyLmFkZENhc2UoRmV0Y2hEYXRhU2V0cy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLlN0YXR1cyA9ICdpZGxlJztcclxuICAgICAgICAgICAgc3RhdGUuRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYWN0aW9uLnBheWxvYWQubWFwKHIgPT4gKHsgLi4uciwgRnJvbTogbW9tZW50KHIuRnJvbSkuZm9ybWF0KCdZWVlZLU1NLUREJyksIFRvOiBtb21lbnQoci5UbykuZm9ybWF0KCdZWVlZLU1NLUREJykgfSkpO1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBfLm9yZGVyQnkocmVzdWx0cywgW3N0YXRlLlNvcnRGaWVsZF0sIFtzdGF0ZS5Bc2NlbmRpbmcgPyBcImFzY1wiIDogXCJkZXNjXCJdKVxyXG4gICAgICAgICAgICBzdGF0ZS5EYXRhU2V0cyA9IHNvcnRlZCBhcyBUcmVuREFQLmlEYXRhU2V0W107XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1aWxkZXIuYWRkQ2FzZShGZXRjaERhdGFTZXRzLnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLlN0YXR1cyA9ICdsb2FkaW5nJztcclxuICAgICAgICB9KTtcclxuICAgICAgICBidWlsZGVyLmFkZENhc2UoRmV0Y2hEYXRhU2V0cy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuU3RhdHVzID0gJ2Vycm9yJztcclxuICAgICAgICAgICAgc3RhdGUuRXJyb3IgPSBhY3Rpb24uZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnVpbGRlci5hZGRDYXNlKEFkZERhdGFTZXQucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuU3RhdHVzID0gJ2xvYWRpbmcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1aWxkZXIuYWRkQ2FzZShBZGREYXRhU2V0LnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5TdGF0dXMgPSAnZXJyb3InO1xyXG4gICAgICAgICAgICBzdGF0ZS5FcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBidWlsZGVyLmFkZENhc2UoQWRkRGF0YVNldC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLlN0YXR1cyA9ICdjaGFuZ2VkJztcclxuICAgICAgICAgICAgc3RhdGUuRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1aWxkZXIuYWRkQ2FzZShSZW1vdmVEYXRhU2V0LnBlbmRpbmcsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLlN0YXR1cyA9ICdsb2FkaW5nJztcclxuICAgICAgICB9KTtcclxuICAgICAgICBidWlsZGVyLmFkZENhc2UoUmVtb3ZlRGF0YVNldC5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuU3RhdHVzID0gJ2Vycm9yJztcclxuICAgICAgICAgICAgc3RhdGUuRXJyb3IgPSBhY3Rpb24uZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnVpbGRlci5hZGRDYXNlKFJlbW92ZURhdGFTZXQuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5TdGF0dXMgPSAnY2hhbmdlZCc7XHJcbiAgICAgICAgICAgIHN0YXRlLkVycm9yID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBidWlsZGVyLmFkZENhc2UoVXBkYXRlRGF0YVNldC5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5TdGF0dXMgPSAnbG9hZGluZyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnVpbGRlci5hZGRDYXNlKFVwZGF0ZURhdGFTZXQucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLlN0YXR1cyA9ICdlcnJvcic7XHJcbiAgICAgICAgICAgIHN0YXRlLkVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1aWxkZXIuYWRkQ2FzZShVcGRhdGVEYXRhU2V0LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuU3RhdHVzID0gJ2NoYW5nZWQnO1xyXG4gICAgICAgICAgICBzdGF0ZS5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSk7XHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gWyBTZWxlY3RvcnMgXVxyXG5leHBvcnQgY29uc3QgeyBTb3J0LCBOZXcsIFVwZGF0ZSwgU2V0UmVjb3JkQnlJRCB9ID0gRGF0YVNldHNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0c1NsaWNlLnJlZHVjZXI7IFxyXG5leHBvcnQgY29uc3QgU2VsZWN0RGF0YVNldHMgPSBzdGF0ZSA9PiBzdGF0ZS5EYXRhU2V0cy5EYXRhU2V0cyBhcyBUcmVuREFQLmlEYXRhU2V0W107XHJcbmV4cG9ydCBjb25zdCBTZWxlY3REYXRhU2V0QnlJRCA9IChzdGF0ZSwgaWQpID0+IHN0YXRlLkRhdGFTZXRzLkRhdGFTZXRzLmZpbmQoZHMgPT4gZHMuSUQgPT09IGlkKSBhcyBUcmVuREFQLmlEYXRhU2V0O1xyXG5leHBvcnQgY29uc3QgU2VsZWN0UmVjb3JkID0gKHN0YXRlKSA9PiBzdGF0ZS5EYXRhU2V0cy5SZWNvcmQ7XHJcbmV4cG9ydCBjb25zdCBTZWxlY3ROZXdEYXRhU2V0ID0gKHN0YXRlKSA9PiAoeyBJRDogMCwgTmFtZTogJycsIFVzZXI6ICcnLCBKU09OOiAnJywgSlNPTlN0cmluZzogJ1tdJywgRnJvbTogbW9tZW50KCkuc3VidHJhY3QoMzAsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJyksIFRvOiBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSwgSG91cnM6IE1hdGgucG93KDIsIDI0KSAtIDEsIERheXM6IE1hdGgucG93KDIsIDcpIC0gMSwgV2Vla3M6IE1hdGgucG93KDIsIDUyKSAtIDEsIE1vbnRoczogTWF0aC5wb3coMiwgMTIpIC0gMSB9KSBhcyBUcmVuREFQLmlEYXRhU2V0O1xyXG5leHBvcnQgY29uc3QgU2VsZWN0TmV3WERBRGF0YVNldCA9ICgpID0+ICh7IEJ5OiAnTWV0ZXInLCBJRHM6IFtdLCBQaGFzZXM6IFtdLCBHcm91cHM6IFtdLCBUeXBlczogW10gfSkgYXMgVHJlbkRBUC5pWERBRGF0YVNldDtcclxuZXhwb3J0IGNvbnN0IFNlbGVjdERhdGFTZXRzU3RhdHVzID0gc3RhdGUgPT4gc3RhdGUuRGF0YVNldHMuU3RhdHVzIGFzIFRyZW5EQVAuU3RhdHVzO1xyXG5leHBvcnQgY29uc3QgU2VsZWN0RGF0YVNldHNGb3JVc2VyID0gKHN0YXRlLCB1c2VyKSA9PiBzdGF0ZS5EYXRhU2V0cy5EYXRhU2V0cy5maWx0ZXIod3MgPT4gd3MuVXNlciA9PT0gdXNlcikgYXMgVHJlbkRBUC5pRGF0YVNldDtcclxuZXhwb3J0IGNvbnN0IFNlbGVjdERhdGFTZXRzQWxsUHVibGljTm90VXNlciA9IChzdGF0ZSwgdXNlcikgPT4gc3RhdGUuRGF0YVNldHMuRGF0YVNldHMuZmlsdGVyKHdzID0+IHdzLlB1YmxpYyAmJiB3cy5Vc2VyICE9PSB1c2VyKSBhcyBUcmVuREFQLmlEYXRhU2V0O1xyXG5leHBvcnQgY29uc3QgU2VsZWN0RGF0YVNldHNTb3J0RmllbGQgPSBzdGF0ZSA9PiBzdGF0ZS5EYXRhU2V0cy5Tb3J0RmllbGQgYXMga2V5b2YgVHJlbkRBUC5pRGF0YVNldDtcclxuZXhwb3J0IGNvbnN0IFNlbGVjdERhdGFTZXRzQXNjZW5kaW5nID0gc3RhdGUgPT4gc3RhdGUuRGF0YVNldHMuQXNjZW5kaW5nIGFzIGJvb2xlYW47XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIFsgQXN5bmMgRnVuY3Rpb25zIF1cclxuZnVuY3Rpb24gR2V0RGF0YVNldHMoKTogSlF1ZXJ5LmpxWEhSPFRyZW5EQVAuaURhdGFTZXRbXT4ge1xyXG4gICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9EYXRhU2V0YCxcclxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgICBhc3luYzogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBvc3REYXRhU2V0KERhdGFTZXQ6IFRyZW5EQVAuaURhdGFTZXQpOiBKUXVlcnkuanFYSFI8VHJlbkRBUC5pRGF0YVNldD4ge1xyXG4gICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvRGF0YVNldGAsXHJcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyAuLi5EYXRhU2V0LCBVcGRhdGVkT246IG1vbWVudC51dGMoKS5mb3JtYXQoJ01NL0REL1lZWVkgSEg6bW06c3MnKSB9KSxcclxuICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgYXN5bmM6IHRydWVcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEZWxldGVEYXRhU2V0KERhdGFTZXQ6IFRyZW5EQVAuaURhdGFTZXQpOiBKUXVlcnkuanFYSFI8VHJlbkRBUC5pRGF0YVNldD4ge1xyXG4gICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICB1cmw6IGAke2hvbWVQYXRofWFwaS9EYXRhU2V0YCxcclxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShEYXRhU2V0KSxcclxuICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgYXN5bmM6IHRydWVcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYXRjaERhdGFTZXQoRGF0YVNldDogVHJlbkRBUC5pRGF0YVNldCk6IEpRdWVyeS5qcVhIUjxUcmVuREFQLmlEYXRhU2V0PiB7XHJcbiAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBBVENIXCIsXHJcbiAgICAgICAgdXJsOiBgJHtob21lUGF0aH1hcGkvRGF0YVNldGAsXHJcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoeyAuLi5EYXRhU2V0LCBVcGRhdGVkT246IG1vbWVudC51dGMoKS5mb3JtYXQoJ01NL0REL1lZWVkgSEg6bW06c3MnKSB9KSxcclxuICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgYXN5bmM6IHRydWVcclxuICAgIH0pO1xyXG59XHJcbi8vICNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
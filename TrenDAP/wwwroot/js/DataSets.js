(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["DataSets"],{

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

/***/ "./wwwroot/TypeScript/Features/DataSets/DataSets.tsx":
/*!***********************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/DataSets.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gpa-gemstone/react-table/lib/index */ "./node_modules/@gpa-gemstone/react-table/lib/index.js");
/* harmony import */ var _DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataSetsSlice */ "./wwwroot/TypeScript/Features/DataSets/DataSetsSlice.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Constants */ "./wwwroot/TypeScript/Constants.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DataSetData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataSetData */ "./wwwroot/TypeScript/Features/DataSets/DataSetData.tsx");
/* harmony import */ var _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gpa-gemstone/gpa-symbols */ "./node_modules/@gpa-gemstone/gpa-symbols/lib/index.js");
//******************************************************************************************************
//  DataSets.tsx - Gbtc
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









var DataSets = function (props) {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var DataSets = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return (0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__.SelectDataSetsForUser)(state, userName); });
    var publicDataSets = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) { return (0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__.SelectDataSetsAllPublicNotUser)(state, userName); });
    var dsStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__.SelectDataSetsStatus);
    var sortField = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__.SelectDataSetsSortField);
    var ascending = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__.SelectDataSetsAscending);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (dsStatus != 'unitiated' && dsStatus != 'changed')
            return;
        dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__.FetchDataSets)());
        return function () {
        };
    }, [dispatch, dsStatus]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 10 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-8", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" }, "My DataSets"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2__.default, { cols: [
                            { key: 'Name', field: 'Name', label: 'Name' },
                            { key: 'Public', field: 'Public', label: 'Global', headerStyle: { width: 75 }, rowStyle: { width: 75 }, content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item[key] ? _Constants__WEBPACK_IMPORTED_MODULE_4__.HeavyCheckMark : null); } },
                            { key: 'UpdatedOn', field: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_5___default()(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                            {
                                key: null,
                                label: '',
                                headerStyle: { width: 300 },
                                rowStyle: { width: 300 },
                                content: function (item, key, style) {
                                    var _a;
                                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataSetData__WEBPACK_IMPORTED_MODULE_6__.default, __assign({}, item)),
                                        ((_a = item.Data) === null || _a === void 0 ? void 0 : _a.Status) === 'idle' ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: homePath + "ViewDataSet/" + item.ID, title: 'View/Edit DataSet Data.', className: 'btn' }, _Constants__WEBPACK_IMPORTED_MODULE_4__.Wrench) : null,
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: homePath + "EditDataSet/" + item.ID, title: 'Edit DataSet Parameters.', className: 'btn' }, _Constants__WEBPACK_IMPORTED_MODULE_4__.Pencil),
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { title: 'Clone DataSet.', className: "btn", onClick: function () { return dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__.CloneDataSet)(item)); } }, _gpa_gemstone_gpa_symbols__WEBPACK_IMPORTED_MODULE_7__.DNA),
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { title: 'Delete DataSet.', className: "btn", onClick: function () { return dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__.RemoveDataSet)(item)); } }, _Constants__WEBPACK_IMPORTED_MODULE_4__.TrashCan));
                                }
                            }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortKey: sortField, onClick: function (data) { }, onSort: function (data) { return dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__.Sort)({ SortField: data.colField, Ascending: data.ascending })); }, data: DataSets, ascending: ascending })))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "col-4", style: { padding: '0 0 0 0' } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" }, "Global DataSets"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gpa_gemstone_react_table_lib_index__WEBPACK_IMPORTED_MODULE_2__.default, { cols: [
                            { key: 'Name', field: 'Name', label: 'Name' },
                            { key: 'UpdatedOn', field: 'UpdatedOn', label: 'Updated', content: function (item, key, style) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, moment__WEBPACK_IMPORTED_MODULE_5___default()(item.UpdatedOn).subtract(new Date().getTimezoneOffset(), 'minutes').format('MM/DD/YY HH:mm')); } },
                            //{ key: null, label: '', content: (item, key, style) => <span><EditDataSet DataSet={item} /><button className="btn" onClick={() => dispatch(RemoveDataSet(item))}>{TrashCan}</button></span> }
                        ], tableClass: "table table-hover", theadStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%', height: 50 }, tbodyStyle: { display: 'block', overflowY: 'scroll', maxHeight: window.innerHeight - 215, height: window.innerHeight - 215, width: '100%' }, rowStyle: { fontSize: 'smaller', display: 'table', tableLayout: 'fixed', width: '100%' }, sortKey: sortField, onClick: function () { }, onSort: function (data) { return dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_3__.Sort)({ SortField: data.colField, Ascending: data.ascending })); }, data: publicDataSets, ascending: ascending }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSets);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vbm9kZV9tb2R1bGVzL0BncGEtZ2Vtc3RvbmUvZ3BhLXN5bWJvbHMvbGliL2luZGV4LmpzIiwid2VicGFjazovL3RyZW5kYXAvLi93d3dyb290L1R5cGVTY3JpcHQvRmVhdHVyZXMvRGF0YVNldHMvRGF0YVNldHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxvQkFBb0IsR0FBRyxvQkFBb0IsR0FBRyx5QkFBeUIsR0FBRyxtQkFBbUIsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxjQUFjLEdBQUcsYUFBYSxHQUFHLHVCQUF1QixHQUFHLG9CQUFvQixHQUFHLG9CQUFvQixHQUFHLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxlQUFlLEdBQUcsWUFBWSxHQUFHLGNBQWMsR0FBRyxlQUFlLEdBQUcsZUFBZSxHQUFHLFlBQVksR0FBRyxpQkFBaUIsR0FBRyxnQkFBZ0IsR0FBRyxjQUFjLEdBQUcsc0JBQXNCO0FBQ2pmLHNCQUFzQjtBQUN0QixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osZUFBZTtBQUNmLGVBQWU7QUFDZixjQUFjO0FBQ2QsWUFBWTtBQUNaLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1gsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQix1QkFBdUI7QUFDdkIsYUFBYTtBQUNiLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQix5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRHBCLHdHQUF3RztBQUN4Ryx1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3Rzs7Ozs7Ozs7Ozs7O0FBR3pFO0FBRXdCO0FBQ0E7QUFDNks7QUFFcEk7QUFFeEQ7QUFDWjtBQUNZO0FBQ1E7QUFFaEQsSUFBTSxRQUFRLEdBQTRCLFVBQUMsS0FBUztJQUVoRCxJQUFNLFFBQVEsR0FBRyx3REFBVyxFQUFFLENBQUM7SUFDL0IsSUFBTSxRQUFRLEdBQUcsd0RBQVcsQ0FBQyxVQUFDLEtBQXVCLElBQUssNEVBQXFCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7SUFDbEcsSUFBTSxjQUFjLEdBQUcsd0RBQVcsQ0FBQyxVQUFDLEtBQXVCLElBQUsscUZBQThCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQUM7SUFFakgsSUFBTSxRQUFRLEdBQUcsd0RBQVcsQ0FBQyxnRUFBb0IsQ0FBQyxDQUFDO0lBRW5ELElBQU0sU0FBUyxHQUFHLHdEQUFXLENBQUMsbUVBQXVCLENBQUMsQ0FBQztJQUN2RCxJQUFNLFNBQVMsR0FBRyx3REFBVyxDQUFDLG1FQUF1QixDQUFDLENBQUM7SUFFdkQsNENBQWUsQ0FBQztRQUNaLElBQUksUUFBUSxJQUFJLFdBQVcsSUFBSSxRQUFRLElBQUksU0FBUztZQUFFLE9BQU87UUFDN0QsUUFBUSxDQUFDLDZEQUFhLEVBQUUsQ0FBQyxDQUFDO1FBRTFCLE9BQU87UUFDUCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFekIsT0FBTyxDQUNILDBEQUFLLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtRQUN0QywwREFBSyxTQUFTLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7WUFDaEQsMERBQUssU0FBUyxFQUFDLE1BQU07Z0JBQ2pCLDBEQUFLLFNBQVMsRUFBQyxhQUFhLGtCQUFrQjtnQkFDOUMsMERBQUssU0FBUyxFQUFDLFdBQVc7b0JBQ3RCLGlEQUFDLHdFQUFLLElBQ04sSUFBSSxFQUFFOzRCQUNFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7NEJBQzdDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBQyxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSyxzRUFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNEQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBUSxFQUFoRCxDQUFnRCxFQUFFOzRCQUN4TCxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxJQUFLLHNFQUFPLDZDQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQVEsRUFBbEgsQ0FBa0gsRUFBRTs0QkFDN007Z0NBQ0ksR0FBRyxFQUFFLElBQUk7Z0NBQ1QsS0FBSyxFQUFFLEVBQUU7Z0NBQ1QsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQ0FDM0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQ0FDeEIsT0FBTyxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLOztvQ0FDMUI7d0NBQ1EsaURBQUMsaURBQVcsZUFBSyxJQUFJLEVBQUk7d0NBQ3hCLFdBQUksQ0FBQyxJQUFJLDBDQUFFLE1BQU0sTUFBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlEQUFDLGtEQUFJLElBQUMsRUFBRSxFQUFLLFFBQVEsb0JBQWUsSUFBSSxDQUFDLEVBQUksRUFBRSxLQUFLLEVBQUMseUJBQXlCLEVBQUMsU0FBUyxFQUFDLEtBQUssSUFBRSw4Q0FBTSxDQUFRLENBQUMsQ0FBQyxDQUFDLElBQUk7d0NBQ3JKLGlEQUFDLGtEQUFJLElBQUMsRUFBRSxFQUFLLFFBQVEsb0JBQWUsSUFBSSxDQUFDLEVBQUksRUFBRSxLQUFLLEVBQUMsMEJBQTBCLEVBQUMsU0FBUyxFQUFDLEtBQUssSUFBRSw4Q0FBTSxDQUFRO3dDQUMvRyx3REFBRyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUUsY0FBTSxlQUFRLENBQUMsNERBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUE1QixDQUE0QixJQUFHLDBEQUFHLENBQUs7d0NBQ2hHLHdEQUFHLEtBQUssRUFBQyxpQkFBaUIsRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBRSxjQUFNLGVBQVEsQ0FBQyw2REFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQTdCLENBQTZCLElBQUcsZ0RBQVEsQ0FBSyxDQUN4RztpQ0FBQTs2QkFDVjt5QkFFUixFQUNELFVBQVUsRUFBQyxtQkFBbUIsRUFDOUIsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQ3RHLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDM0ksUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUN4RixPQUFPLEVBQUUsU0FBUyxFQUNsQixPQUFPLEVBQUUsVUFBQyxJQUFJLElBQU8sQ0FBQyxFQUN0QixNQUFNLEVBQUUsY0FBSSxJQUFJLGVBQVEsQ0FBQyxvREFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQXZFLENBQXVFLEVBQ3ZGLElBQUksRUFBRSxRQUFRLEVBQ2QsU0FBUyxFQUFFLFNBQVMsR0FDZCxDQUNKLENBQ0osQ0FDSjtRQUNOLDBEQUFLLFNBQVMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtZQUNoRCwwREFBSyxTQUFTLEVBQUMsTUFBTTtnQkFDakIsMERBQUssU0FBUyxFQUFDLGFBQWEsc0JBQXNCO2dCQUNsRCwwREFBSyxTQUFTLEVBQUMsV0FBVztvQkFDdEIsaURBQUMsd0VBQUssSUFDRixJQUFJLEVBQUU7NEJBQ0YsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTs0QkFDN0MsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssSUFBSyxzRUFBTyw2Q0FBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFRLEVBQWxILENBQWtILEVBQUU7NEJBRTdNLCtMQUErTDt5QkFFbE0sRUFDRCxVQUFVLEVBQUMsbUJBQW1CLEVBQzlCLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUN0RyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQzNJLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDeEYsT0FBTyxFQUFFLFNBQVMsRUFDbEIsT0FBTyxFQUFFLGNBQVEsQ0FBQyxFQUNsQixNQUFNLEVBQUUsY0FBSSxJQUFJLGVBQVEsQ0FBQyxvREFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQXZFLENBQXVFLEVBQ3ZGLElBQUksRUFBRSxjQUFjLEVBQ3BCLFNBQVMsRUFBRSxTQUFTLEdBQ3RCLENBRUEsQ0FDSixDQUNKLENBRUosQ0FFVCxDQUFDO0FBQ04sQ0FBQztBQUdELGlFQUFlLFFBQVEsRUFBQyIsImZpbGUiOiJEYXRhU2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgaW5kZXgudHN4IC0gR2J0Y1xuLy9cbi8vICBDb3B5cmlnaHQgwqkgMjAyMSwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cbi8vICBUaGUgR1BBIGxpY2Vuc2VzIHRoaXMgZmlsZSB0byB5b3UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCB0aGUgXCJMaWNlbnNlXCI7IHlvdSBtYXkgbm90IHVzZSB0aGlzXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XG4vL1xuLy8gICAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vL1xuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbi8vICBcIkFTLUlTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBSZWZlciB0byB0aGVcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cbi8vXG4vLyAgQ29kZSBNb2RpZmljYXRpb24gSGlzdG9yeTpcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgMDkvMzAvMjAyMCAtIEJpbGx5IEVybmVzdFxuLy8gICAgICAgR2VuZXJhdGVkIG9yaWdpbmFsIHZlcnNpb24gb2Ygc291cmNlIGNvZGUuXG4vL1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlF1ZXN0aW9ubWFyayA9IGV4cG9ydHMuUmV3aW5kQnV0dG9uID0gZXhwb3J0cy5GYXN0Rm9yd2FyZEJ1dHRvbiA9IGV4cG9ydHMuUGF1c2VCdXR0b24gPSBleHBvcnRzLlN0b3BCdXR0b24gPSBleHBvcnRzLlBsYXlCdXR0b24gPSBleHBvcnRzLlNjcm9sbCA9IGV4cG9ydHMuSG91c2UgPSBleHBvcnRzLk1hZ25pZnlpbmdHbGFzcyA9IGV4cG9ydHMuRm91cldheUFycm93ID0gZXhwb3J0cy5JbnB1dE51bWJlcnMgPSBleHBvcnRzLkROQSA9IGV4cG9ydHMuRG93bkFycm93ID0gZXhwb3J0cy5SaWdodEFycm93ID0gZXhwb3J0cy5MZWZ0QXJyb3cgPSBleHBvcnRzLlVwQXJyb3cgPSBleHBvcnRzLkZsYWcgPSBleHBvcnRzLldyZW5jaCA9IGV4cG9ydHMuU3Bpbm5lciA9IGV4cG9ydHMuV2FybmluZyA9IGV4cG9ydHMuUGx1cyA9IGV4cG9ydHMuQ3Jvc3NNYXJrID0gZXhwb3J0cy5UcmFzaENhbiA9IGV4cG9ydHMuUGVuY2lsID0gZXhwb3J0cy5IZWF2eUNoZWNrTWFyayA9IHZvaWQgMDtcbmV4cG9ydHMuSGVhdnlDaGVja01hcmsgPSAn4pyU77iPJztcbmV4cG9ydHMuUGVuY2lsID0gJ+Kcj++4jyc7XG5leHBvcnRzLlRyYXNoQ2FuID0gJ/Cfl5HvuI8nO1xuZXhwb3J0cy5Dcm9zc01hcmsgPSAn4p2MJztcbmV4cG9ydHMuUGx1cyA9ICfinpUnO1xuZXhwb3J0cy5XYXJuaW5nID0gJ+KaoO+4jyc7XG5leHBvcnRzLlNwaW5uZXIgPSAn8J+UhCc7XG5leHBvcnRzLldyZW5jaCA9ICfwn5SnJztcbmV4cG9ydHMuRmxhZyA9ICfwn5qpJztcbmV4cG9ydHMuVXBBcnJvdyA9ICfirIbvuI8nO1xuZXhwb3J0cy5MZWZ0QXJyb3cgPSAn4qyFJztcbmV4cG9ydHMuUmlnaHRBcnJvdyA9ICfinqEnO1xuZXhwb3J0cy5Eb3duQXJyb3cgPSAn4qyH77iPJztcbmV4cG9ydHMuRE5BID0gJ/Cfp6wnO1xuZXhwb3J0cy5JbnB1dE51bWJlcnMgPSAn8J+Uoic7XG5leHBvcnRzLkZvdXJXYXlBcnJvdyA9ICfimKknO1xuZXhwb3J0cy5NYWduaWZ5aW5nR2xhc3MgPSAn8J+UjSc7XG5leHBvcnRzLkhvdXNlID0gJ/Cfj6AnO1xuZXhwb3J0cy5TY3JvbGwgPSAn8J+TnCc7XG5leHBvcnRzLlBsYXlCdXR0b24gPSAn4pa277iPJztcbmV4cG9ydHMuU3RvcEJ1dHRvbiA9ICfij7nvuI8nO1xuZXhwb3J0cy5QYXVzZUJ1dHRvbiA9ICfij7jvuI8nO1xuZXhwb3J0cy5GYXN0Rm9yd2FyZEJ1dHRvbiA9ICfij6knO1xuZXhwb3J0cy5SZXdpbmRCdXR0b24gPSAn4o+qJztcbmV4cG9ydHMuUXVlc3Rpb25tYXJrID0gJz8nO1xuIiwiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIERhdGFTZXRzLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8yNS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbkRBUCwgUmVkdXggfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LXRhYmxlL2xpYi9pbmRleCdcclxuaW1wb3J0IHsgU29ydCwgRmV0Y2hEYXRhU2V0cywgU2VsZWN0RGF0YVNldHNTdGF0dXMsIFJlbW92ZURhdGFTZXQsIFNlbGVjdERhdGFTZXRzRm9yVXNlciwgU2VsZWN0RGF0YVNldHNBbGxQdWJsaWNOb3RVc2VyLCBTZWxlY3REYXRhU2V0c1NvcnRGaWVsZCwgU2VsZWN0RGF0YVNldHNBc2NlbmRpbmcsIEZldGNoRGF0YVNldERhdGEsIENsb25lRGF0YVNldCB9IGZyb20gJy4vRGF0YVNldHNTbGljZSc7XHJcbmltcG9ydCBFZGl0RGF0YVNldCBmcm9tICcuL0VkaXREYXRhU2V0JztcclxuaW1wb3J0IHsgVHJhc2hDYW4sIEhlYXZ5Q2hlY2tNYXJrLCBQZW5jaWwsIFdyZW5jaCwgQ3Jvc3NNYXJrLCBTcGlubmVyIH0gZnJvbSAnLi8uLi8uLi9Db25zdGFudHMnXHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IERhdGFTZXREYXRhIGZyb20gJy4vRGF0YVNldERhdGEnO1xyXG5pbXBvcnQgeyBETkEgfSBmcm9tICdAZ3BhLWdlbXN0b25lL2dwYS1zeW1ib2xzJztcclxuXHJcbmNvbnN0IERhdGFTZXRzOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wczoge30pID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBEYXRhU2V0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0RGF0YVNldHNGb3JVc2VyKHN0YXRlLCB1c2VyTmFtZSkpO1xyXG4gICAgY29uc3QgcHVibGljRGF0YVNldHMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4LlN0b3JlU3RhdGUpID0+IFNlbGVjdERhdGFTZXRzQWxsUHVibGljTm90VXNlcihzdGF0ZSwgdXNlck5hbWUpKTtcclxuXHJcbiAgICBjb25zdCBkc1N0YXR1cyA9IHVzZVNlbGVjdG9yKFNlbGVjdERhdGFTZXRzU3RhdHVzKTtcclxuXHJcbiAgICBjb25zdCBzb3J0RmllbGQgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0c1NvcnRGaWVsZCk7XHJcbiAgICBjb25zdCBhc2NlbmRpbmcgPSB1c2VTZWxlY3RvcihTZWxlY3REYXRhU2V0c0FzY2VuZGluZyk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZHNTdGF0dXMgIT0gJ3VuaXRpYXRlZCcgJiYgZHNTdGF0dXMgIT0gJ2NoYW5nZWQnKSByZXR1cm47XHJcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hEYXRhU2V0cygpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGlzcGF0Y2gsIGRzU3RhdHVzXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAwIDAgMCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+TXkgRGF0YVNldHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU8VHJlbkRBUC5pRGF0YVNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnTmFtZScsIGZpZWxkOiAnTmFtZScsIGxhYmVsOiAnTmFtZScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ1B1YmxpYycsIGZpZWxkOiAnUHVibGljJywgbGFiZWw6ICdHbG9iYWwnLCBoZWFkZXJTdHlsZTogeyB3aWR0aDogNzUgfSwgcm93U3R5bGU6IHsgd2lkdGg6IDc1IH0sY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxzcGFuPntpdGVtW2tleV0gPyBIZWF2eUNoZWNrTWFyayA6IG51bGx9PC9zcGFuPiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVXBkYXRlZE9uJywgZmllbGQ6ICdVcGRhdGVkT24nLCBsYWJlbDogJ1VwZGF0ZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e21vbWVudChpdGVtLlVwZGF0ZWRPbikuc3VidHJhY3QobmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpLmZvcm1hdCgnTU0vREQvWVkgSEg6bW0nKX08L3NwYW4+IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyU3R5bGU6IHsgd2lkdGg6IDMwMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZTogeyB3aWR0aDogMzAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IChpdGVtLCBrZXksIHN0eWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVNldERhdGEgey4uLml0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uRGF0YT8uU3RhdHVzID09PSAnaWRsZScgPyA8TGluayB0bz17YCR7aG9tZVBhdGh9Vmlld0RhdGFTZXQvJHtpdGVtLklEfWB9IHRpdGxlPSdWaWV3L0VkaXQgRGF0YVNldCBEYXRhLicgY2xhc3NOYW1lPSdidG4nPntXcmVuY2h9PC9MaW5rPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2Ake2hvbWVQYXRofUVkaXREYXRhU2V0LyR7aXRlbS5JRH1gfSB0aXRsZT0nRWRpdCBEYXRhU2V0IFBhcmFtZXRlcnMuJyBjbGFzc05hbWU9J2J0bic+e1BlbmNpbH08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9J0Nsb25lIERhdGFTZXQuJyBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChDbG9uZURhdGFTZXQoaXRlbSkpfT57RE5BfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT0nRGVsZXRlIERhdGFTZXQuJyBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChSZW1vdmVEYXRhU2V0KGl0ZW0pKX0+e1RyYXNoQ2FufTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNTAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGJvZHlTdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDIxNSwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMTUsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93U3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEtleT17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZGF0YSkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNvcnQ9e2RhdGEgPT4gZGlzcGF0Y2goU29ydCh7IFNvcnRGaWVsZDogZGF0YS5jb2xGaWVsZCwgQXNjZW5kaW5nOiBkYXRhLmFzY2VuZGluZyB9KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e0RhdGFTZXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIiBzdHlsZT17eyBwYWRkaW5nOiAnMCAwIDAgMCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+R2xvYmFsIERhdGFTZXRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlPFRyZW5EQVAuaURhdGFTZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdOYW1lJywgZmllbGQ6ICdOYW1lJywgbGFiZWw6ICdOYW1lJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnVXBkYXRlZE9uJywgZmllbGQ6ICdVcGRhdGVkT24nLCBsYWJlbDogJ1VwZGF0ZWQnLCBjb250ZW50OiAoaXRlbSwga2V5LCBzdHlsZSkgPT4gPHNwYW4+e21vbWVudChpdGVtLlVwZGF0ZWRPbikuc3VidHJhY3QobmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpLmZvcm1hdCgnTU0vREQvWVkgSEg6bW0nKX08L3NwYW4+IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8veyBrZXk6IG51bGwsIGxhYmVsOiAnJywgY29udGVudDogKGl0ZW0sIGtleSwgc3R5bGUpID0+IDxzcGFuPjxFZGl0RGF0YVNldCBEYXRhU2V0PXtpdGVtfSAvPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goUmVtb3ZlRGF0YVNldChpdGVtKSl9PntUcmFzaENhbn08L2J1dHRvbj48L3NwYW4+IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZWFkU3R5bGU9e3sgZm9udFNpemU6ICdzbWFsbGVyJywgZGlzcGxheTogJ3RhYmxlJywgdGFibGVMYXlvdXQ6ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogNTAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRib2R5U3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMTUsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMjE1LCB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTdHlsZT17eyBmb250U2l6ZTogJ3NtYWxsZXInLCBkaXNwbGF5OiAndGFibGUnLCB0YWJsZUxheW91dDogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEtleT17c29ydEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0PXtkYXRhID0+IGRpc3BhdGNoKFNvcnQoeyBTb3J0RmllbGQ6IGRhdGEuY29sRmllbGQsIEFzY2VuZGluZzogZGF0YS5hc2NlbmRpbmcgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17cHVibGljRGF0YVNldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc9e2FzY2VuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhU2V0czsiXSwic291cmNlUm9vdCI6IiJ9
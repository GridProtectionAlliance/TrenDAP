(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["EditDataSet"],{

/***/ "./wwwroot/TypeScript/Features/DataSets/EditDataSet.tsx":
/*!**************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/EditDataSet.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSetsSlice */ "./wwwroot/TypeScript/Features/DataSets/DataSetsSlice.ts");
/* harmony import */ var _DataSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataSet */ "./wwwroot/TypeScript/Features/DataSets/DataSet.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
//******************************************************************************************************
//  EditDataSet.tsx - Gbtc
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





var EditDataSet = function (props) {
    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    var id = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)().id;
    var dataSet = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.SelectRecord);
    var wsStatus = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.SelectDataSetsStatus);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (wsStatus === 'unitiated' || wsStatus === 'changed') {
            dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.FetchDataSets)());
            return function () {
            };
        }
        dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.SetRecordByID)(parseInt(id)));
    }, [dispatch, wsStatus]);
    if (dataSet === undefined)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "row", style: { margin: 10 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-header" }, "Edit Data Set"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-body", style: { overflowY: 'auto' } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataSet__WEBPACK_IMPORTED_MODULE_3__.default, { Record: dataSet, SetDataSet: function (record) { return dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.Update)(record)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-footer" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, { to: homePath + "DataSets", type: "button", className: "btn btn-primary", onClick: function () {
                        dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.UpdateDataSet)(dataSet));
                    } }, "Save")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditDataSet);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGFwLy4vd3d3cm9vdC9UeXBlU2NyaXB0L0ZlYXR1cmVzL0RhdGFTZXRzL0VkaXREYXRhU2V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0dBQXdHO0FBQ3hHLDBCQUEwQjtBQUMxQixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHO0FBRXpFO0FBRXdCO0FBQ2dHO0FBQ3ZIO0FBRW1CO0FBRW5ELElBQU0sV0FBVyxHQUFnQyxVQUFDLEtBQUs7SUFDbkQsSUFBTSxRQUFRLEdBQUcsd0RBQVcsRUFBRSxDQUFDO0lBQ3ZCLE1BQUUsR0FBSywyREFBUyxFQUFVLEdBQXhCLENBQXlCO0lBQ25DLElBQU0sT0FBTyxHQUFHLHdEQUFXLENBQUMsd0RBQVksQ0FBQztJQUN6QyxJQUFNLFFBQVEsR0FBRyx3REFBVyxDQUFDLGdFQUFvQixDQUFDLENBQUM7SUFFbkQsNENBQWUsQ0FBQztRQUNaLElBQUksUUFBUSxLQUFLLFdBQVcsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3BELFFBQVEsQ0FBQyw2REFBYSxFQUFFLENBQUMsQ0FBQztZQUMxQixPQUFPO1lBQ1AsQ0FBQztTQUNKO1FBRUQsUUFBUSxDQUFDLDZEQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUd6QixJQUFJLE9BQU8sS0FBSyxTQUFTO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDdkMsT0FBTyxDQUNILDBEQUFLLFNBQVMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtRQUN0QywwREFBSyxTQUFTLEVBQUMsTUFBTTtZQUNqQiwwREFBSyxTQUFTLEVBQUMsYUFBYSxvQkFFdEI7WUFDTiwwREFBSyxTQUFTLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBRSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUM7Z0JBQ2hELGlEQUFDLDZDQUFPLElBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBQyxNQUFNLElBQUssZUFBUSxDQUFDLHNEQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBeEIsQ0FBd0IsR0FBSSxDQUM1RTtZQUNOLDBEQUFLLFNBQVMsRUFBQyxhQUFhO2dCQUN4QixpREFBQyxrREFBSSxJQUFDLEVBQUUsRUFBSyxRQUFRLGFBQVUsRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUU7d0JBQ2hGLFFBQVEsQ0FBQyw2REFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLENBQUMsV0FBYSxDQUVaLENBQ0osQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBRUQsaUVBQWUsV0FBVyxFQUFDIiwiZmlsZSI6IkVkaXREYXRhU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEVkaXREYXRhU2V0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8yNS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVcGRhdGVEYXRhU2V0LCBBZGREYXRhU2V0LFNlbGVjdERhdGFTZXRCeUlELCBTZWxlY3REYXRhU2V0c1N0YXR1cywgRmV0Y2hEYXRhU2V0cywgU2VsZWN0UmVjb3JkLCBTZXRSZWNvcmRCeUlELCBVcGRhdGUgfSBmcm9tICcuL0RhdGFTZXRzU2xpY2UnXHJcbmltcG9ydCBEYXRhU2V0IGZyb20gJy4vRGF0YVNldCc7XHJcbmltcG9ydCB7IFBlbmNpbCB9IGZyb20gJy4uLy4uL0NvbnN0YW50cydcclxuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBFZGl0RGF0YVNldDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e30+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXM8eyBpZCB9PigpO1xyXG4gICAgY29uc3QgZGF0YVNldCA9IHVzZVNlbGVjdG9yKFNlbGVjdFJlY29yZClcclxuICAgIGNvbnN0IHdzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHNTdGF0dXMpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdzU3RhdHVzID09PSAndW5pdGlhdGVkJyB8fCB3c1N0YXR1cyA9PT0gJ2NoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNldHMoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goU2V0UmVjb3JkQnlJRChwYXJzZUludChpZCkpKTtcclxuXHJcbiAgICB9LCBbZGlzcGF0Y2gsIHdzU3RhdHVzXSk7XHJcblxyXG5cclxuICAgIGlmIChkYXRhU2V0ID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVkaXQgRGF0YSBTZXRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e292ZXJmbG93WTonYXV0byd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVNldCBSZWNvcmQ9e2RhdGFTZXR9IFNldERhdGFTZXQ9eyhyZWNvcmQpID0+IGRpc3BhdGNoKFVwZGF0ZShyZWNvcmQpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgJHtob21lUGF0aH1EYXRhU2V0c2B9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZURhdGFTZXQoZGF0YVNldCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlNhdmU8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdERhdGFTZXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==
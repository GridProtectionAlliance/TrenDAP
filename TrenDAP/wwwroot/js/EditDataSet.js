"use strict";
(self["webpackChunktrendap"] = self["webpackChunktrendap"] || []).push([["EditDataSet"],{

/***/ "./wwwroot/TypeScript/Features/DataSets/EditDataSet.tsx":
/*!**************************************************************!*\
  !*** ./wwwroot/TypeScript/Features/DataSets/EditDataSet.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSetsSlice */ "./wwwroot/TypeScript/Features/DataSets/DataSetsSlice.ts");
/* harmony import */ var _DataSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataSet */ "./wwwroot/TypeScript/Features/DataSets/DataSet.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
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
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataSet__WEBPACK_IMPORTED_MODULE_3__["default"], { Record: dataSet, SetDataSet: function (record) { return dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.Update)(record)); } })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-footer" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, { to: "".concat(homePath, "DataSets"), type: "button", className: "btn btn-primary", onClick: function () {
                        dispatch((0,_DataSetsSlice__WEBPACK_IMPORTED_MODULE_2__.UpdateDataSet)(dataSet));
                    } }, "Save")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditDataSet);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdERhdGFTZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdHQUF3RztBQUN4RywwQkFBMEI7QUFDMUIsRUFBRTtBQUNGLHFFQUFxRTtBQUNyRSxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcsd0ZBQXdGO0FBQ3hGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsRUFBRTtBQUNGLHdHQUF3RztBQUN4Ryx3R0FBd0c7QUFDeEcsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsd0dBQXdHO0FBQ3hHLDZCQUE2QjtBQUM3QixtREFBbUQ7QUFDbkQsRUFBRTtBQUNGLHdHQUF3RztBQUV6RTtBQUV3QjtBQUNnRztBQUN2SDtBQUVtQjtBQUVuRCxJQUFNLFdBQVcsR0FBZ0MsVUFBQyxLQUFLO0lBQ25ELElBQU0sUUFBUSxHQUFHLHdEQUFXLEVBQUUsQ0FBQztJQUN2QixNQUFFLEdBQUssMkRBQVMsRUFBVSxHQUF4QixDQUF5QjtJQUNuQyxJQUFNLE9BQU8sR0FBRyx3REFBVyxDQUFDLHdEQUFZLENBQUM7SUFDekMsSUFBTSxRQUFRLEdBQUcsd0RBQVcsQ0FBQyxnRUFBb0IsQ0FBQyxDQUFDO0lBRW5ELDRDQUFlLENBQUM7UUFDWixJQUFJLFFBQVEsS0FBSyxXQUFXLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUNwRCxRQUFRLENBQUMsNkRBQWEsRUFBRSxDQUFDLENBQUM7WUFDMUIsT0FBTztZQUNQLENBQUM7U0FDSjtRQUVELFFBQVEsQ0FBQyw2REFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFHekIsSUFBSSxPQUFPLEtBQUssU0FBUztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3ZDLE9BQU8sQ0FDSCwwREFBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7UUFDdEMsMERBQUssU0FBUyxFQUFDLE1BQU07WUFDakIsMERBQUssU0FBUyxFQUFDLGFBQWEsb0JBRXRCO1lBQ04sMERBQUssU0FBUyxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDO2dCQUNoRCxpREFBQyxnREFBTyxJQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQUMsTUFBTSxJQUFLLGVBQVEsQ0FBQyxzREFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQXhCLENBQXdCLEdBQUksQ0FDNUU7WUFDTiwwREFBSyxTQUFTLEVBQUMsYUFBYTtnQkFDeEIsaURBQUMsa0RBQUksSUFBQyxFQUFFLEVBQUUsVUFBRyxRQUFRLGFBQVUsRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUU7d0JBQ2hGLFFBQVEsQ0FBQyw2REFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLENBQUMsV0FBYSxDQUVaLENBQ0osQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBRUQsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJlbmRhcC8uL3d3d3Jvb3QvVHlwZVNjcmlwdC9GZWF0dXJlcy9EYXRhU2V0cy9FZGl0RGF0YVNldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIEVkaXREYXRhU2V0LnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAwOS8yNS8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQIH0gZnJvbSAnLi4vLi4vZ2xvYmFsJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVcGRhdGVEYXRhU2V0LCBBZGREYXRhU2V0LFNlbGVjdERhdGFTZXRCeUlELCBTZWxlY3REYXRhU2V0c1N0YXR1cywgRmV0Y2hEYXRhU2V0cywgU2VsZWN0UmVjb3JkLCBTZXRSZWNvcmRCeUlELCBVcGRhdGUgfSBmcm9tICcuL0RhdGFTZXRzU2xpY2UnXHJcbmltcG9ydCBEYXRhU2V0IGZyb20gJy4vRGF0YVNldCc7XHJcbmltcG9ydCB7IFBlbmNpbCB9IGZyb20gJy4uLy4uL0NvbnN0YW50cydcclxuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBFZGl0RGF0YVNldDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e30+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXM8eyBpZCB9PigpO1xyXG4gICAgY29uc3QgZGF0YVNldCA9IHVzZVNlbGVjdG9yKFNlbGVjdFJlY29yZClcclxuICAgIGNvbnN0IHdzU3RhdHVzID0gdXNlU2VsZWN0b3IoU2VsZWN0RGF0YVNldHNTdGF0dXMpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdzU3RhdHVzID09PSAndW5pdGlhdGVkJyB8fCB3c1N0YXR1cyA9PT0gJ2NoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKEZldGNoRGF0YVNldHMoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGF0Y2goU2V0UmVjb3JkQnlJRChwYXJzZUludChpZCkpKTtcclxuXHJcbiAgICB9LCBbZGlzcGF0Y2gsIHdzU3RhdHVzXSk7XHJcblxyXG5cclxuICAgIGlmIChkYXRhU2V0ID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVkaXQgRGF0YSBTZXRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e292ZXJmbG93WTonYXV0byd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVNldCBSZWNvcmQ9e2RhdGFTZXR9IFNldERhdGFTZXQ9eyhyZWNvcmQpID0+IGRpc3BhdGNoKFVwZGF0ZShyZWNvcmQpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgJHtob21lUGF0aH1EYXRhU2V0c2B9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFVwZGF0ZURhdGFTZXQoZGF0YVNldCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlNhdmU8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdERhdGFTZXQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
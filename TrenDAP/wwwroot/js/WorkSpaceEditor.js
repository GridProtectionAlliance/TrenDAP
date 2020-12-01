(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["WorkSpaceEditor"],{

/***/ "./TypeScript/Features/WorkSpaces/WorkSpaceEditor.tsx":
/*!************************************************************!*\
  !*** ./TypeScript/Features/WorkSpaces/WorkSpaceEditor.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Styles/app.scss */ "./Styles/app.scss");
/* harmony import */ var _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Styles_app_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkSpacesSlice */ "./TypeScript/Features/WorkSpaces/WorkSpacesSlice.ts");
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





var WorkSpaceEditor = function (props) {
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
    var id = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])().id;
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](id), 2), tab = _a[0], setTab = _a[1];
    var usersWorkSpaces = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) { return Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["SelectWorkSpacesForUser"])(state, userName); });
    var publicWorkSpaces = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) { return Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["SelectWorkSpacesAllPublicNotUser"])(state, userName); });
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"]({ Rows: [] }), 2), workSpaceJSON = _b[0], setWorkSpaceJSON = _b[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var ws = __spread(usersWorkSpaces, publicWorkSpaces).find(function (ws) { return ws.ID == tab; });
        if (!ws.Open)
            dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["OpenWorkSpace"])(tab));
        setWorkSpaceJSON(JSON.parse(ws.JSONString));
    }, [tab]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "nav nav-tabs" }, __spread(usersWorkSpaces, publicWorkSpaces).filter(function (ws) { return ws.Open; }).map(function (ws) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: ws.ID, className: "nav-item " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default.a.relative },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link" + (tab == ws.ID ? ' active' : ''), href: '#', onClick: function (evt) { return setTab(ws.ID); }, style: { paddingRight: 30 } }, ws.Name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default.a.close, onClick: function () { return dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["CloseWorkSpace"])(ws.ID)); } }, "X"));
        })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "tab-content", style: { position: 'relative', top: 50, width: '100%', height: 'calc(100% - 50px)' } }, workSpaceJSON.Rows.map(function (row, index) { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card", key: index, style: { height: row.Height } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" })); }))));
};
/* harmony default export */ __webpack_exports__["default"] = (WorkSpaceEditor);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dvcmtTcGFjZXMvV29ya1NwYWNlRWRpdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLDhCQUE4QjtBQUM5QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekU7QUFHYztBQUNVO0FBQ1Q7QUFDK0U7QUFNN0gsSUFBTSxlQUFlLEdBQWdDLFVBQUMsS0FBSztJQUN2RCxJQUFNLFFBQVEsR0FBRywrREFBVyxFQUFFLENBQUM7SUFDdkIsZ0ZBQUUsQ0FBaUI7SUFDckIsc0VBQTBDLEVBQXpDLFdBQUcsRUFBRSxjQUFvQyxDQUFDO0lBQ2pELElBQU0sZUFBZSxHQUF5QiwrREFBVyxDQUFDLFVBQUMsS0FBZSxJQUFLLHVGQUF1QixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO0lBQ3pILElBQU0sZ0JBQWdCLEdBQXlCLCtEQUFXLENBQUMsVUFBQyxLQUFlLElBQUssZ0dBQWdDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFqRCxDQUFpRCxDQUFDLENBQUM7SUFDN0gsZ0ZBQTZFLEVBQTVFLHFCQUFhLEVBQUUsd0JBQTZELENBQUM7SUFDcEYsK0NBQWUsQ0FBQztRQUNaLElBQU0sRUFBRSxHQUFHLFNBQUksZUFBZSxFQUFLLGdCQUFnQixFQUFFLElBQUksQ0FBQyxZQUFFLElBQUksU0FBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQVosQ0FBWSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJO1lBQ1IsUUFBUSxDQUFDLHNFQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQWtCLENBQUMsQ0FBQztJQUNqRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRVYsT0FBTyxDQUNIO1FBQ0ksNERBQUksU0FBUyxFQUFDLGNBQWMsSUFDdkIsU0FBSSxlQUFlLEVBQUssZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFlBQUUsSUFBSSxTQUFFLENBQUMsSUFBSSxFQUFQLENBQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFFO1lBQ25FLG1FQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLEdBQUcsdURBQU0sQ0FBQyxRQUFRO2dCQUNwRCwyREFBRyxTQUFTLEVBQUUsVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUUsVUFBQyxHQUFHLElBQUssYUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUMsWUFBWSxFQUFDLEVBQUUsRUFBQyxJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUs7Z0JBQzdJLDhEQUFNLFNBQVMsRUFBRSx1REFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsY0FBTSxlQUFRLENBQUMsdUVBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsUUFBVSxDQUN0RjtRQUhMLENBR0ssQ0FBQyxDQUNUO1FBQ0wsNkRBQUssU0FBUyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsSUFFekcsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSyxJQUFLLG9FQUFLLFNBQVMsRUFBQyxNQUFNLEtBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDakcsNkRBQUssU0FBUyxFQUFDLFdBQVcsR0FBTyxDQUMvQixFQUZpQyxDQUVqQyxDQUFDLENBRVQsQ0FDUCxDQUNOLENBQUM7QUFDTixDQUFDO0FBRWMsOEVBQWUsRUFBQyIsImZpbGUiOiJXb3JrU3BhY2VFZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAgV29ya1NwYWNlRWRpdG9yLnRzeCAtIEdidGNcclxuLy9cclxuLy8gIENvcHlyaWdodCDCqSAyMDIwLCBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UuICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4vL1xyXG4vLyAgTGljZW5zZWQgdG8gdGhlIEdyaWQgUHJvdGVjdGlvbiBBbGxpYW5jZSAoR1BBKSB1bmRlciBvbmUgb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuIFNlZVxyXG4vLyAgdGhlIE5PVElDRSBmaWxlIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLlxyXG4vLyAgVGhlIEdQQSBsaWNlbnNlcyB0aGlzIGZpbGUgdG8geW91IHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgdGhlIFwiTGljZW5zZVwiOyB5b3UgbWF5IG5vdCB1c2UgdGhpc1xyXG4vLyAgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQ6XHJcbi8vXHJcbi8vICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG4vL1xyXG4vLyAgVW5sZXNzIGFncmVlZCB0byBpbiB3cml0aW5nLCB0aGUgc3ViamVjdCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxyXG4vLyAgXCJBUy1JU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gUmVmZXIgdG8gdGhlXHJcbi8vICBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucy5cclxuLy9cclxuLy8gIENvZGUgTW9kaWZpY2F0aW9uIEhpc3Rvcnk6XHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICAxMS8xMC8yMDIwIC0gQmlsbHkgRXJuZXN0XHJcbi8vICAgICAgIEdlbmVyYXRlZCBvcmlnaW5hbCB2ZXJzaW9uIG9mIHNvdXJjZSBjb2RlLlxyXG4vL1xyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5EQVAgfSBmcm9tICcuLi8uLi9nbG9iYWwnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQ2hlY2tCb3ggfSBmcm9tICdAZ3BhLWdlbXN0b25lL3JlYWN0LWZvcm1zJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9TdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgeyBTZWxlY3RXb3JrU3BhY2VzRm9yVXNlciwgU2VsZWN0V29ya1NwYWNlc0FsbFB1YmxpY05vdFVzZXIsIE9wZW5Xb3JrU3BhY2UsIENsb3NlV29ya1NwYWNlIH0gZnJvbSAnLi9Xb3JrU3BhY2VzU2xpY2UnO1xyXG5pbXBvcnQgeyBBcHBTdG9yZSB9IGZyb20gJy4uLy4uL1N0b3JlL1N0b3JlJztcclxuXHJcbmludGVyZmFjZSBXaWRnZXQgeyBXaWR0aDogbnVtYmVyLCBUeXBlOiBhbnksIEpTT046IGFueSB9XHJcbmludGVyZmFjZSBSb3cgeyBIZWlnaHQ6IG51bWJlciwgV2lnZXRzOiBXaWRnZXRbXSB9XHJcbmludGVyZmFjZSBXb3JrU3BhY2VKU09OIHsgUm93czogUm93W119XHJcbmNvbnN0IFdvcmtTcGFjZUVkaXRvcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e30+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KGlkKTtcclxuICAgIGNvbnN0IHVzZXJzV29ya1NwYWNlczogVHJlbkRBUC5pV29ya1NwYWNlW10gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEFwcFN0b3JlKSA9PiBTZWxlY3RXb3JrU3BhY2VzRm9yVXNlcihzdGF0ZSwgdXNlck5hbWUpKTtcclxuICAgIGNvbnN0IHB1YmxpY1dvcmtTcGFjZXM6IFRyZW5EQVAuaVdvcmtTcGFjZVtdID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdG9yZSkgPT4gU2VsZWN0V29ya1NwYWNlc0FsbFB1YmxpY05vdFVzZXIoc3RhdGUsIHVzZXJOYW1lKSk7XHJcbiAgICBjb25zdCBbd29ya1NwYWNlSlNPTiwgc2V0V29ya1NwYWNlSlNPTl0gPSBSZWFjdC51c2VTdGF0ZTxXb3JrU3BhY2VKU09OPih7Um93czogW119KTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3MgPSBbLi4udXNlcnNXb3JrU3BhY2VzLCAuLi5wdWJsaWNXb3JrU3BhY2VzXS5maW5kKHdzID0+IHdzLklEID09IHRhYik7XHJcbiAgICAgICAgaWYgKCF3cy5PcGVuKVxyXG4gICAgICAgICAgICBkaXNwYXRjaChPcGVuV29ya1NwYWNlKHRhYikpO1xyXG4gICAgICAgIHNldFdvcmtTcGFjZUpTT04oSlNPTi5wYXJzZSh3cy5KU09OU3RyaW5nKSBhcyBXb3JrU3BhY2VKU09OKTtcclxuICAgIH0sIFt0YWJdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgICAgICAgICAgICAgIHtbLi4udXNlcnNXb3JrU3BhY2VzLCAuLi5wdWJsaWNXb3JrU3BhY2VzXS5maWx0ZXIod3MgPT4gd3MuT3BlbikubWFwKHdzID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17d3MuSUR9IGNsYXNzTmFtZT17XCJuYXYtaXRlbSBcIiArIHN0eWxlcy5yZWxhdGl2ZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmtcIiArICh0YWIgPT0gd3MuSUQgPyAnIGFjdGl2ZScgOiAnJyl9IGhyZWY9JyMnIG9uQ2xpY2s9eyhldnQpID0+IHNldFRhYih3cy5JRCl9IHN0eWxlPXt7cGFkZGluZ1JpZ2h0OjMwfX0+e3dzLk5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX0gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goQ2xvc2VXb3JrU3BhY2Uod3MuSUQpKX0+WDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPil9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiA1MCwgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnY2FsYygxMDAlIC0gNTBweCknIH19PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtTcGFjZUpTT04uUm93cy5tYXAoKHJvdywgaW5kZXgpID0+IDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwia2V5PXtpbmRleH0gc3R5bGU9e3sgaGVpZ2h0OiByb3cuSGVpZ2h0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrU3BhY2VFZGl0b3I7Il0sInNvdXJjZVJvb3QiOiIifQ==
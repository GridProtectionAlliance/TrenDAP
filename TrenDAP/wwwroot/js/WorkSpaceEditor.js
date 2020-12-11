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
    var _c = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), 2), toggle = _c[0], setToggle = _c[1];
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var ws = __spread(usersWorkSpaces, publicWorkSpaces).find(function (ws) { return ws.ID == tab; });
        if (!ws.Open)
            dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["OpenWorkSpace"])(tab));
        setWorkSpaceJSON(JSON.parse(ws.JSONString));
    }, [tab]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navbarbuttons },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Export current data...', "data-toggle": 'dropdown', "aria-haspopup": 'true', "aria-expanded": 'false' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-plus" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-menu" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "Row"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-divider" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "Histogram"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "Profile"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "Stats"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "Table"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "Text"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "Trend"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "X vs Y"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn-group" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Export current data...', "data-toggle": 'dropdown', "aria-haspopup": 'true', "aria-expanded": 'false' },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-download" })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dropdown-menu" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "PDF"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "dropdown-item", href: "#" }, "CSV"))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Save current workspace...' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-save" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn", title: 'Settings' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: "fa fa-cog" }))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", { className: "nav nav-tabs" }, __spread(usersWorkSpaces, publicWorkSpaces).filter(function (ws) { return ws.Open; }).map(function (ws) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", { key: ws.ID, className: "nav-item " + _Styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default.a.workspacetab },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { className: "nav-link" + (tab == ws.ID ? ' active' : ''), href: '#', onClick: function (evt) { return setTab(ws.ID); } }, ws.Name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { onClick: function () { return dispatch(Object(_WorkSpacesSlice__WEBPACK_IMPORTED_MODULE_4__["CloseWorkSpace"])(ws.ID)); } }, "X"));
        })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "tab-content", style: { position: 'relative', width: '100%', height: 'calc(100% - 50px)' } }, workSpaceJSON.Rows.map(function (row, index) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card", key: index, style: { height: row.Height } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "card-body" }));
        }))));
};
/* harmony default export */ __webpack_exports__["default"] = (WorkSpaceEditor);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9UeXBlU2NyaXB0L0ZlYXR1cmVzL1dvcmtTcGFjZXMvV29ya1NwYWNlRWRpdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBQXdHO0FBQ3hHLDhCQUE4QjtBQUM5QixFQUFFO0FBQ0YscUVBQXFFO0FBQ3JFLEVBQUU7QUFDRix3R0FBd0c7QUFDeEcsd0dBQXdHO0FBQ3hHLHNHQUFzRztBQUN0Ryx3RkFBd0Y7QUFDeEYsRUFBRTtBQUNGLDBDQUEwQztBQUMxQyxFQUFFO0FBQ0Ysd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4Ryw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLDhCQUE4QjtBQUM5Qix3R0FBd0c7QUFDeEcsNkJBQTZCO0FBQzdCLG1EQUFtRDtBQUNuRCxFQUFFO0FBQ0Ysd0dBQXdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekU7QUFHYztBQUNVO0FBQ1Q7QUFDK0U7QUFNN0gsSUFBTSxlQUFlLEdBQWdDLFVBQUMsS0FBSztJQUN2RCxJQUFNLFFBQVEsR0FBRywrREFBVyxFQUFFLENBQUM7SUFDdkIsZ0ZBQUUsQ0FBaUI7SUFDckIsc0VBQTBDLEVBQXpDLFdBQUcsRUFBRSxjQUFvQyxDQUFDO0lBQ2pELElBQU0sZUFBZSxHQUF5QiwrREFBVyxDQUFDLFVBQUMsS0FBdUIsSUFBSyx1RkFBdUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztJQUNqSSxJQUFNLGdCQUFnQixHQUF5QiwrREFBVyxDQUFDLFVBQUMsS0FBdUIsSUFBSyxnR0FBZ0MsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQWpELENBQWlELENBQUMsQ0FBQztJQUNySSxnRkFBK0UsRUFBOUUscUJBQWEsRUFBRSx3QkFBK0QsQ0FBQztJQUNoRix5RUFBb0QsRUFBbkQsY0FBTSxFQUFFLGlCQUEyQyxDQUFD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QUUsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUUsVUFBQyxHQUFHLElBQUssYUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLElBQUksRUFBRSxDQUFDLElBQUksQ0FBSztnQkFDcEgsOERBQU8sT0FBTyxFQUFFLGNBQU0sZUFBUSxDQUFDLHVFQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQS9CLENBQStCLFFBQVUsQ0FDOUQ7UUFITCxDQUdLLENBQUMsQ0FDVDtRQUNMLDZEQUFLLFNBQVMsRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxJQUVoRyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLO1lBQzlCLG9FQUFLLFNBQVMsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDM0QsNkRBQUssU0FBUyxFQUFDLFdBQVcsR0FBTyxDQUMvQjtRQUZOLENBRU0sQ0FDVCxDQUVILENBQ1AsQ0FDTixDQUFDO0FBQ04sQ0FBQztBQUVjLDhFQUFlLEVBQUMiLCJmaWxlIjoiV29ya1NwYWNlRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gIFdvcmtTcGFjZUVkaXRvci50c3ggLSBHYnRjXHJcbi8vXHJcbi8vICBDb3B5cmlnaHQgwqkgMjAyMCwgR3JpZCBQcm90ZWN0aW9uIEFsbGlhbmNlLiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuLy9cclxuLy8gIExpY2Vuc2VkIHRvIHRoZSBHcmlkIFByb3RlY3Rpb24gQWxsaWFuY2UgKEdQQSkgdW5kZXIgb25lIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiBTZWVcclxuLy8gIHRoZSBOT1RJQ0UgZmlsZSBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC5cclxuLy8gIFRoZSBHUEEgbGljZW5zZXMgdGhpcyBmaWxlIHRvIHlvdSB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHRoZSBcIkxpY2Vuc2VcIjsgeW91IG1heSBub3QgdXNlIHRoaXNcclxuLy8gIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0OlxyXG4vL1xyXG4vLyAgICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuLy9cclxuLy8gIFVubGVzcyBhZ3JlZWQgdG8gaW4gd3JpdGluZywgdGhlIHN1YmplY3Qgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cclxuLy8gIFwiQVMtSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFJlZmVyIHRvIHRoZVxyXG4vLyAgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMuXHJcbi8vXHJcbi8vICBDb2RlIE1vZGlmaWNhdGlvbiBIaXN0b3J5OlxyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgMTEvMTAvMjAyMCAtIEJpbGx5IEVybmVzdFxyXG4vLyAgICAgICBHZW5lcmF0ZWQgb3JpZ2luYWwgdmVyc2lvbiBvZiBzb3VyY2UgY29kZS5cclxuLy9cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuREFQLCBSZWR1eCB9IGZyb20gJy4uLy4uL2dsb2JhbCc7XHJcbmltcG9ydCB7IElucHV0LCBDaGVja0JveCB9IGZyb20gJ0BncGEtZ2Vtc3RvbmUvcmVhY3QtZm9ybXMnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL1N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7IFNlbGVjdFdvcmtTcGFjZXNGb3JVc2VyLCBTZWxlY3RXb3JrU3BhY2VzQWxsUHVibGljTm90VXNlciwgT3BlbldvcmtTcGFjZSwgQ2xvc2VXb3JrU3BhY2UgfSBmcm9tICcuL1dvcmtTcGFjZXNTbGljZSc7XHJcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnZDMnO1xyXG5cclxuaW50ZXJmYWNlIFdpZGdldCB7IFdpZHRoOiBudW1iZXIsIFR5cGU6IGFueSwgSlNPTjogYW55IH1cclxuaW50ZXJmYWNlIFJvdyB7IEhlaWdodDogbnVtYmVyLCBXaWdldHM6IFdpZGdldFtdIH1cclxuaW50ZXJmYWNlIFdvcmtTcGFjZUpTT04geyBSb3dzOiBSb3dbXX1cclxuY29uc3QgV29ya1NwYWNlRWRpdG9yOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7fT4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oaWQpO1xyXG4gICAgY29uc3QgdXNlcnNXb3JrU3BhY2VzOiBUcmVuREFQLmlXb3JrU3BhY2VbXSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0V29ya1NwYWNlc0ZvclVzZXIoc3RhdGUsIHVzZXJOYW1lKSk7XHJcbiAgICBjb25zdCBwdWJsaWNXb3JrU3BhY2VzOiBUcmVuREFQLmlXb3JrU3BhY2VbXSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXguU3RvcmVTdGF0ZSkgPT4gU2VsZWN0V29ya1NwYWNlc0FsbFB1YmxpY05vdFVzZXIoc3RhdGUsIHVzZXJOYW1lKSk7XHJcbiAgICBjb25zdCBbd29ya1NwYWNlSlNPTiwgc2V0V29ya1NwYWNlSlNPTl0gPSBSZWFjdC51c2VTdGF0ZTxXb3JrU3BhY2VKU09OPih7IFJvd3M6IFtdIH0pO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3MgPSBbLi4udXNlcnNXb3JrU3BhY2VzLCAuLi5wdWJsaWNXb3JrU3BhY2VzXS5maW5kKHdzID0+IHdzLklEID09IHRhYik7XHJcbiAgICAgICAgaWYgKCF3cy5PcGVuKVxyXG4gICAgICAgICAgICBkaXNwYXRjaChPcGVuV29ya1NwYWNlKHRhYikpO1xyXG4gICAgICAgIHNldFdvcmtTcGFjZUpTT04oSlNPTi5wYXJzZSh3cy5KU09OU3RyaW5nKSBhcyBXb3JrU3BhY2VKU09OKTtcclxuICAgIH0sIFt0YWJdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J0V4cG9ydCBjdXJyZW50IGRhdGEuLi4nIGRhdGEtdG9nZ2xlPSdkcm9wZG93bicgYXJpYS1oYXNwb3B1cD0ndHJ1ZScgYXJpYS1leHBhbmRlZD0nZmFsc2UnPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXNcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+Um93PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+SGlzdG9ncmFtPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TdGF0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+VGFibGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlRleHQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlRyZW5kPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5YIHZzIFk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgdGl0bGU9J0V4cG9ydCBjdXJyZW50IGRhdGEuLi4nIGRhdGEtdG9nZ2xlPSdkcm9wZG93bicgYXJpYS1oYXNwb3B1cD0ndHJ1ZScgYXJpYS1leHBhbmRlZD0nZmFsc2UnPjxpIGNsYXNzTmFtZT1cImZhIGZhLWRvd25sb2FkXCIgPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlBERjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+Q1NWPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHRpdGxlPSdTYXZlIGN1cnJlbnQgd29ya3NwYWNlLi4uJz48aSBjbGFzc05hbWU9XCJmYSBmYS1zYXZlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiB0aXRsZT0nU2V0dGluZ3MnPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICB7Wy4uLnVzZXJzV29ya1NwYWNlcywgLi4ucHVibGljV29ya1NwYWNlc10uZmlsdGVyKHdzID0+IHdzLk9wZW4pLm1hcCh3cyA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3dzLklEfSBjbGFzc05hbWU9e1wibmF2LWl0ZW0gXCIgKyBzdHlsZXMud29ya3NwYWNldGFifSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17XCJuYXYtbGlua1wiICsgKHRhYiA9PSB3cy5JRCA/ICcgYWN0aXZlJyA6ICcnKX0gaHJlZj0nIycgb25DbGljaz17KGV2dCkgPT4gc2V0VGFiKHdzLklEKX0gPnt3cy5OYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKENsb3NlV29ya1NwYWNlKHdzLklEKSl9Plg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT4pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2NhbGMoMTAwJSAtIDUwcHgpJyB9fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrU3BhY2VKU09OLlJvd3MubWFwKChyb3csIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2luZGV4fSBzdHlsZT17eyBoZWlnaHQ6IHJvdy5IZWlnaHQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya1NwYWNlRWRpdG9yOyJdLCJzb3VyY2VSb290IjoiIn0=
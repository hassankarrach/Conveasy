"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Room_Container_index_tsx",{

/***/ "./components/Room/Container/VideoCallContainer/VideoCall/Video.Styled.ts":
/*!********************************************************************************!*\
  !*** ./components/Room/Container/VideoCallContainer/VideoCall/Video.Styled.ts ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Video\": function() { return /* binding */ Video; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Video = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"VideoStyled__Video\",\n  componentId: \"sc-j0e2i9-0\"\n})([\"width:100%;height:75%;background-color:white;border-radius:10px;padding:5px;display:flex;flex-direction:row-reverse;gap:10px;border:1px solid rgba(221,221,221,0.8);@media (max-width:768px){flex-direction:column;height:auto;margin-bottom:30%;}.MainVideo{height:100%;width:70%;background-position:center;background-size:cover;border-radius:10px;float:right;position:relative;background-color:black;@media (max-width:768px){width:100%;height:300px;}.PainedIcon{position:absolute;color:white;width:40px;height:40px;right:10px;top:10px;border-radius:6px;display:flex;justify-content:center;align-items:center;cursor:pointer;background:rgba(255,255,255,0.1);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);}.UserName{position:absolute;bottom:10px;left:10px;background:rgba(40,40,40,0.2);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:white;width:80px;border-radius:5px;display:flex;align-items:center;justify-content:space-evenly;padding:5px;font-family:var(--font-primary);}}.UserVideos{width:30%;height:100%;background-color:#f5f7fb;border:1px solid rgba(221,221,221,0.5);border-radius:10px;display:flex;flex-direction:column;gap:5px;padding:5px;overflow-y:scroll;::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:rgba(221,221,221,0.8);border-radius:5px;}::-webkit-scrollbar-thumb:hover{background:rgba(221,221,221,1);}@media (max-width:768px){flex-direction:row;width:100%;height:170px;overflow-y:hidden;overflow-x:scroll;::-webkit-scrollbar{height:2px;}}.UserVideo{width:100%;min-height:200px;background-color:white;border-radius:10px;border:1px solid rgba(221,221,221,0.7);display:flex;justify-content:center;align-items:center;background-position:center;background-size:cover;position:relative;overflow:hidden;cursor:pointer;@media (max-width:768px){min-height:150px;min-width:250px;}.Bg{position:absolute;width:120%;height:120%;background-position:center;filter:blur(14px);-webkit-filter:blur(14px);&:after{content:\\\"\\\";position:absolute;width:100%;height:100%;background-color:rgba(147,135,199,0.7);}}.Avatar{width:90px;height:90px;background-color:grey;border-radius:50%;border:1px solid white;background-position:center;background-size:cover;z-index:5;animation:animate 1.5s linear infinite;@keyframes animate{0%{box-shadow:0 0 0 0 var(--MainColor);}40%{box-shadow:0 0 0 50px rgba(255,26,67,0);}80%{box-shadow:0 0 0 50px rgba(255,206,67,0);}100%{box-shadow:0 0 0 rgba(255,206,67,0);}}}.Name{position:absolute;left:10px;bottom:10px;color:white;z-index:4;font-family:var(--font-primary);font-weight:400;}}}\"]);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL1ZpZGVvQ2FsbENvbnRhaW5lci9WaWRlb0NhbGwvVmlkZW8uU3R5bGVkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFTyxJQUFNQyxLQUFLLEdBQUdELHdFQUFIO0VBQUE7RUFBQTtBQUFBLHlqRkFBWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL1ZpZGVvQ2FsbENvbnRhaW5lci9WaWRlb0NhbGwvVmlkZW8uU3R5bGVkLnRzP2QxNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBWaWRlbyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIxLCAyMjEsIDIyMSwgMC44KTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzAlO1xyXG4gIH1cclxuICAuTWFpblZpZGVvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvQXNzZXRzL1Rlc3RVaS9GYWtlTWVldGluZ1Bob3RvLmpwZ1wiKTsgKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5QYWluZWRJY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZjBlZGZmOyAqL1xyXG4gICAgICAvKkVuZCovXHJcbiAgICB9XHJcbiAgICAuVXNlck5hbWUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgICAgLyogRnJvbSBodHRwczovL2Nzcy5nbGFzcyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCA0MCwgNDAsIDAuMik7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAgIC8qRW5kKi9cclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgLlVzZXJWaWRlb3Mge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICB3aWR0aDogNXB4O1xyXG4gICAgfVxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC44KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuVXNlclZpZGVvIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjcpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLkJnIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEyMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMTRweCk7XHJcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTRweCk7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NywgMTM1LCAxOTksIDAuNyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5BdmF0YXIge1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCB2YXIoLS1NYWluQ29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNDAlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNTBweCByZ2JhKDI1NSwgMjYsIDY3LCAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDgwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDUwcHggcmdiYSgyNTUsIDIwNiwgNjcsIDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMjU1LCAyMDYsIDY3LCAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLk5hbWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiVmlkZW8iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Room/Container/VideoCallContainer/VideoCall/Video.Styled.ts\n"));

/***/ })

});
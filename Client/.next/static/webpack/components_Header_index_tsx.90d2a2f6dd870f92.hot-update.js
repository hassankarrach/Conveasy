"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Header_index_tsx",{

/***/ "./components/Global/StyledInput/index.tsx":
/*!*************************************************!*\
  !*** ./components/Global/StyledInput/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledInput\": function() { return /* binding */ StyledInput; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _input_Styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.Styled */ \"./components/Global/StyledInput/input.Styled.ts\");\n/* harmony import */ var contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/Socket.Context */ \"./contexts/Socket.Context.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\Setup Game\\\\Desktop\\\\VideoChat\\\\Client\\\\components\\\\Global\\\\StyledInput\\\\index.tsx\",\n    _this = undefined;\n\n\n //SocketContext\n\n\n\nvar StyledInput = function StyledInput(_ref) {\n  var PlaceHolder = _ref.PlaceHolder,\n      ButtonText = _ref.ButtonText,\n      Width = _ref.Width,\n      NoButton = _ref.NoButton,\n      HandleJoinRoom = _ref.HandleJoinRoom;\n\n  //SocetContext\n  var _UseSockets = (0,contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_2__.UseSockets)(),\n      setRoom = _UseSockets.setRoom;\n\n  var HanddlRoomIdInput = function HanddlRoomIdInput(event) {\n    setRoom(event.target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_input_Styled__WEBPACK_IMPORTED_MODULE_1__.StylesInput, {\n    width_: Width,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n      className: \"Input\",\n      placeholder: \"\".concat(PlaceHolder)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), !NoButton ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        HandleJoinRoom();\n      },\n      className: \"Join\",\n      children: ButtonText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }, _this) : \"\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n_c = StyledInput;\n\nvar _c;\n\n$RefreshReg$(_c, \"StyledInput\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dsb2JhbC9TdHlsZWRJbnB1dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7O0FBVU8sSUFBTUcsV0FBNEIsR0FBRyxTQUEvQkEsV0FBK0IsT0FNL0I7RUFBQSxJQUxYQyxXQUtXLFFBTFhBLFdBS1c7RUFBQSxJQUpYQyxVQUlXLFFBSlhBLFVBSVc7RUFBQSxJQUhYQyxLQUdXLFFBSFhBLEtBR1c7RUFBQSxJQUZYQyxRQUVXLFFBRlhBLFFBRVc7RUFBQSxJQURYQyxjQUNXLFFBRFhBLGNBQ1c7O0VBQ1g7RUFDQSxrQkFBb0JOLG1FQUFVLEVBQTlCO0VBQUEsSUFBUU8sT0FBUixlQUFRQSxPQUFSOztFQUVBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFnQjtJQUN4Q0YsT0FBTyxDQUFDRSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFQO0VBQ0QsQ0FGRDs7RUFJQSxvQkFDRSw4REFBQyxzREFBRDtJQUFhLE1BQU0sRUFBRVAsS0FBckI7SUFBQSx3QkFDRTtNQUFPLFNBQVMsRUFBQyxPQUFqQjtNQUF5QixXQUFXLFlBQUtGLFdBQUw7SUFBcEM7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLEVBRUcsQ0FBQ0csUUFBRCxnQkFDQztNQUNFLE9BQU8sRUFBRSxtQkFBTTtRQUNiQyxjQUFjO01BQ2YsQ0FISDtNQUlFLFNBQVMsRUFBQyxNQUpaO01BQUEsVUFNR0g7SUFOSDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREQsR0FVQyxFQVpKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBaUJELENBL0JNO0tBQU1GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2xvYmFsL1N0eWxlZElucHV0L2luZGV4LnRzeD85OTAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3R5bGVzSW5wdXQgfSBmcm9tIFwiLi9pbnB1dC5TdHlsZWRcIjtcclxuLy9Tb2NrZXRDb250ZXh0XHJcbmltcG9ydCB7IFVzZVNvY2tldHMgfSBmcm9tIFwiY29udGV4dHMvU29ja2V0LkNvbnRleHRcIjtcclxuXHJcbmludGVyZmFjZSBJbnB1dCB7XHJcbiAgUGxhY2VIb2xkZXI6IHN0cmluZztcclxuICBCdXR0b25UZXh0OiBzdHJpbmc7XHJcbiAgV2lkdGg6IHN0cmluZztcclxuICBOb0J1dHRvbj86IGJvb2xlYW47XHJcbiAgSGFuZGxlSm9pblJvb206IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXQ6IFJlYWN0LkZDPElucHV0PiA9ICh7XHJcbiAgUGxhY2VIb2xkZXIsXHJcbiAgQnV0dG9uVGV4dCxcclxuICBXaWR0aCxcclxuICBOb0J1dHRvbixcclxuICBIYW5kbGVKb2luUm9vbSxcclxufTogSW5wdXQpID0+IHtcclxuICAvL1NvY2V0Q29udGV4dFxyXG4gIGNvbnN0IHsgc2V0Um9vbSB9ID0gVXNlU29ja2V0cygpO1xyXG5cclxuICBjb25zdCBIYW5kZGxSb29tSWRJbnB1dCA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBzZXRSb29tKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZXNJbnB1dCB3aWR0aF89e1dpZHRofT5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIklucHV0XCIgcGxhY2Vob2xkZXI9e2Ake1BsYWNlSG9sZGVyfWB9IC8+XHJcbiAgICAgIHshTm9CdXR0b24gPyAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBIYW5kbGVKb2luUm9vbSgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIkpvaW5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtCdXR0b25UZXh0fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuICAgIDwvU3R5bGVzSW5wdXQ+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3R5bGVzSW5wdXQiLCJVc2VTb2NrZXRzIiwiU3R5bGVkSW5wdXQiLCJQbGFjZUhvbGRlciIsIkJ1dHRvblRleHQiLCJXaWR0aCIsIk5vQnV0dG9uIiwiSGFuZGxlSm9pblJvb20iLCJzZXRSb29tIiwiSGFuZGRsUm9vbUlkSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Global/StyledInput/index.tsx\n"));

/***/ })

});
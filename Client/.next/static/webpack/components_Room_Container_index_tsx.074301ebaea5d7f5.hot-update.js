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

/***/ "./components/Room/Container/chatContainer/Message/index.tsx":
/*!*******************************************************************!*\
  !*** ./components/Room/Container/chatContainer/Message/index.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _message_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.styled */ \"./components/Room/Container/chatContainer/Message/message.styled.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\Setup Game\\\\Desktop\\\\VideoChat\\\\Client\\\\components\\\\Room\\\\Container\\\\chatContainer\\\\Message\\\\index.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar index = function index(_ref) {\n  var from = _ref.from,\n      pic = _ref.pic,\n      time = _ref.time,\n      isCurrentUserTheSender = _ref.isCurrentUserTheSender,\n      content = _ref.content,\n      isAdmin = _ref.isAdmin;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_message_styled__WEBPACK_IMPORTED_MODULE_1__.StyledMessage, {\n    IsUserSender: isCurrentUserTheSender,\n    children: [!isAdmin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"ProfilePicture\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"ProfileHolder\",\n        style: {\n          backgroundImage: \"url(/Assets/Faces/\".concat(pic != undefined ? pic : \"Missed\", \".png)\")\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, _this), isAdmin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      className: \"RobotMsg\",\n      children: content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"MessageData\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"MessageSender\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          className: \"Sender\",\n          children: isCurrentUserTheSender ? \"you\" : from\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"Dot\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          className: \"Time\",\n          children: time\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"Message\",\n        children: content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL2NoYXRDb250YWluZXIvTWVzc2FnZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBV0EsSUFBTUUsS0FBaUMsR0FBRyxTQUFwQ0EsS0FBb0MsT0FPcEM7RUFBQSxJQU5KQyxJQU1JLFFBTkpBLElBTUk7RUFBQSxJQUxKQyxHQUtJLFFBTEpBLEdBS0k7RUFBQSxJQUpKQyxJQUlJLFFBSkpBLElBSUk7RUFBQSxJQUhKQyxzQkFHSSxRQUhKQSxzQkFHSTtFQUFBLElBRkpDLE9BRUksUUFGSkEsT0FFSTtFQUFBLElBREpDLE9BQ0ksUUFESkEsT0FDSTtFQUNKLG9CQUNFLDhEQUFDLDBEQUFEO0lBQWUsWUFBWSxFQUFFRixzQkFBN0I7SUFBQSxXQUNHLENBQUNFLE9BQUQsaUJBQ0M7TUFBSyxTQUFTLEVBQUMsZ0JBQWY7TUFBQSx1QkFDRTtRQUNFLFNBQVMsRUFBQyxlQURaO1FBRUUsS0FBSyxFQUFFO1VBQ0xDLGVBQWUsOEJBQ2JMLEdBQUcsSUFBSU0sU0FBUCxHQUFtQk4sR0FBbkIsR0FBeUIsUUFEWjtRQURWO01BRlQ7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FGSixFQWNHSSxPQUFPLGdCQUNOO01BQU0sU0FBUyxFQUFDLFVBQWhCO01BQUEsVUFBNEJEO0lBQTVCO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FETSxnQkFHTjtNQUFLLFNBQVMsRUFBQyxhQUFmO01BQUEsd0JBQ0U7UUFBSyxTQUFTLEVBQUMsZUFBZjtRQUFBLHdCQUNFO1VBQU0sU0FBUyxFQUFDLFFBQWhCO1VBQUEsVUFDR0Qsc0JBQXNCLEdBQUcsS0FBSCxHQUFXSDtRQURwQztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsZUFJRTtVQUFLLFNBQVMsRUFBQztRQUFmO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FKRixlQUtFO1VBQU0sU0FBUyxFQUFDLE1BQWhCO1VBQUEsVUFBd0JFO1FBQXhCO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FMRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FERixlQVNFO1FBQUssU0FBUyxFQUFDLFNBQWY7UUFBQSxVQUEwQkU7TUFBMUI7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQVRGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQWpCSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQWdDRCxDQXhDRDs7QUEwQ0EsK0RBQWVMLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tL0NvbnRhaW5lci9jaGF0Q29udGFpbmVyL01lc3NhZ2UvaW5kZXgudHN4PzM3YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdHlsZWRNZXNzYWdlIH0gZnJvbSBcIi4vbWVzc2FnZS5zdHlsZWRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XHJcbiAgZnJvbTogc3RyaW5nO1xyXG4gIHBpYzogc3RyaW5nO1xyXG4gIHRpbWU6IHN0cmluZztcclxuICBpc0N1cnJlbnRVc2VyVGhlU2VuZGVyPzogQm9vbGVhbjtcclxuICBpc0FkbWluOiBib29sZWFuO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgaW5kZXg6IEZ1bmN0aW9uQ29tcG9uZW50PE1lc3NhZ2U+ID0gKHtcclxuICBmcm9tLFxyXG4gIHBpYyxcclxuICB0aW1lLFxyXG4gIGlzQ3VycmVudFVzZXJUaGVTZW5kZXIsXHJcbiAgY29udGVudCxcclxuICBpc0FkbWluLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRNZXNzYWdlIElzVXNlclNlbmRlcj17aXNDdXJyZW50VXNlclRoZVNlbmRlcn0+XHJcbiAgICAgIHshaXNBZG1pbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlUGljdHVyZVwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9maWxlSG9sZGVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL0Fzc2V0cy9GYWNlcy8ke1xyXG4gICAgICAgICAgICAgICAgcGljICE9IHVuZGVmaW5lZCA/IHBpYyA6IFwiTWlzc2VkXCJcclxuICAgICAgICAgICAgICB9LnBuZylgLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2lzQWRtaW4gPyAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUm9ib3RNc2dcIj57Y29udGVudH08L3NwYW4+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNZXNzYWdlRGF0YVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNZXNzYWdlU2VuZGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlNlbmRlclwiPlxyXG4gICAgICAgICAgICAgIHtpc0N1cnJlbnRVc2VyVGhlU2VuZGVyID8gXCJ5b3VcIiA6IGZyb219XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVGltZVwiPnt0aW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWVzc2FnZVwiPntjb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9TdHlsZWRNZXNzYWdlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3R5bGVkTWVzc2FnZSIsImluZGV4IiwiZnJvbSIsInBpYyIsInRpbWUiLCJpc0N1cnJlbnRVc2VyVGhlU2VuZGVyIiwiY29udGVudCIsImlzQWRtaW4iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Room/Container/chatContainer/Message/index.tsx\n"));

/***/ })

});
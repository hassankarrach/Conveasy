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

/***/ "./components/Room/Container/index.tsx":
/*!*********************************************!*\
  !*** ./components/Room/Container/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/Socket.Context */ \"./contexts/Socket.Context.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Room/Container/chatContainer/Container.styled */ \"./components/Room/Container/chatContainer/Container.styled.ts\");\n/* harmony import */ var _chatContainer_ChatContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatContainer/ChatContainer */ \"./components/Room/Container/chatContainer/ChatContainer.tsx\");\n/* harmony import */ var _VideoCallContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VideoCallContainer */ \"./components/Room/Container/VideoCallContainer/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"C:\\\\Users\\\\Setup Game\\\\Desktop\\\\VideoChat\\\\Client\\\\components\\\\Room\\\\Container\\\\index.tsx\",\n    _s = $RefreshSig$();\n\n //SocketContext\n\n\n\n\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  //SocetContext\n  var _UseSockets = (0,contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_1__.UseSockets)(),\n      socket = _UseSockets.socket,\n      room = _UseSockets.room,\n      setRoom = _UseSockets.setRoom,\n      name = _UseSockets.name,\n      setName = _UseSockets.setName;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var UserDetail = JSON.parse(localStorage.getItem(\"UserDetail\"));\n\n    if (UserDetail === null) {\n      router.push(\"/\");\n    } else {\n      setLoading(false);\n      console.log(UserDetail); // socket.emit(\n      //   \"join\",\n      //   { name, room  },\n      //   (error: any) => {\n      //     if (error) {\n      //       alert(error);\n      //     } else {\n      //       let UserDetail = { name: name, room: room };\n      //       localStorage.setItem(\"UserDetail\", JSON.stringify(UserDetail));\n      //     }\n      //   }\n      // );\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_3__.StyledContainer, {\n    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_VideoCallContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chatContainer_ChatContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Index, \"2RAYJaWg9X31kr5hXvcE+jFgF28=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxTQUFTUSxLQUFULEdBQWlCO0VBQUE7O0VBQ2Y7RUFDQSxrQkFBaURMLG1FQUFVLEVBQTNEO0VBQUEsSUFBUU0sTUFBUixlQUFRQSxNQUFSO0VBQUEsSUFBZ0JDLElBQWhCLGVBQWdCQSxJQUFoQjtFQUFBLElBQXNCQyxPQUF0QixlQUFzQkEsT0FBdEI7RUFBQSxJQUErQkMsSUFBL0IsZUFBK0JBLElBQS9CO0VBQUEsSUFBcUNDLE9BQXJDLGVBQXFDQSxPQUFyQzs7RUFDQSxnQkFBOEJaLCtDQUFRLENBQUMsSUFBRCxDQUF0QztFQUFBLElBQU9hLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBQ0EsSUFBTUMsTUFBTSxHQUFHWixzREFBUyxFQUF4QjtFQUNBRixnREFBUyxDQUFDLFlBQU07SUFDZCxJQUFJZSxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsQ0FBWCxDQUFqQjs7SUFFQSxJQUFJSixVQUFVLEtBQUssSUFBbkIsRUFBeUI7TUFDdkJELE1BQU0sQ0FBQ00sSUFBUCxDQUFZLEdBQVo7SUFDRCxDQUZELE1BRU87TUFDTFAsVUFBVSxDQUFDLEtBQUQsQ0FBVjtNQUNBUSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsVUFBWixFQUZLLENBSUw7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO0lBQ0Q7RUFDRixDQXZCUSxFQXVCTixFQXZCTSxDQUFUO0VBd0JBLG9CQUNFLDhEQUFDLHNHQUFEO0lBQUEsVUFDR0gsT0FBTyxnQkFDTjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURNLGdCQUdOO01BQUEsd0JBQ0UsOERBQUMsMkRBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBRUUsOERBQUMsb0VBQUQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZGO0lBQUE7RUFKSjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFZRDs7R0F6Q1FOO1VBSVFKOzs7S0FKUkk7QUEyQ1QsK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tL0NvbnRhaW5lci9pbmRleC50c3g/YzFmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL1NvY2tldENvbnRleHRcclxuaW1wb3J0IHsgVXNlU29ja2V0cyB9IGZyb20gXCJjb250ZXh0cy9Tb2NrZXQuQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3R5bGVkQ29udGFpbmVyIH0gZnJvbSBcIkBjb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL2NoYXRDb250YWluZXIvQ29udGFpbmVyLnN0eWxlZFwiO1xyXG5pbXBvcnQgQ2hhdENvbnRhaW5lciBmcm9tIFwiLi9jaGF0Q29udGFpbmVyL0NoYXRDb250YWluZXJcIjtcclxuaW1wb3J0IFZpZGVvQ2FsbENvbnRhaW5lciBmcm9tIFwiLi9WaWRlb0NhbGxDb250YWluZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIC8vU29jZXRDb250ZXh0XHJcbiAgY29uc3QgeyBzb2NrZXQsIHJvb20sIHNldFJvb20sIG5hbWUsIHNldE5hbWUgfSA9IFVzZVNvY2tldHMoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IFVzZXJEZXRhaWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVXNlckRldGFpbFwiKSEpO1xyXG5cclxuICAgIGlmIChVc2VyRGV0YWlsID09PSBudWxsKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhVc2VyRGV0YWlsKTtcclxuXHJcbiAgICAgIC8vIHNvY2tldC5lbWl0KFxyXG4gICAgICAvLyAgIFwiam9pblwiLFxyXG4gICAgICAvLyAgIHsgbmFtZSwgcm9vbSAgfSxcclxuICAgICAgLy8gICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIC8vICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgICAgIGxldCBVc2VyRGV0YWlsID0geyBuYW1lOiBuYW1lLCByb29tOiByb29tIH07XHJcbiAgICAgIC8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVXNlckRldGFpbFwiLCBKU09OLnN0cmluZ2lmeShVc2VyRGV0YWlsKSk7XHJcblxyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDb250YWluZXI+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxWaWRlb0NhbGxDb250YWluZXIgLz5cclxuICAgICAgICAgIDxDaGF0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VTb2NrZXRzIiwidXNlUm91dGVyIiwiU3R5bGVkQ29udGFpbmVyIiwiQ2hhdENvbnRhaW5lciIsIlZpZGVvQ2FsbENvbnRhaW5lciIsIkluZGV4Iiwic29ja2V0Iiwicm9vbSIsInNldFJvb20iLCJuYW1lIiwic2V0TmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiVXNlckRldGFpbCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Room/Container/index.tsx\n"));

/***/ })

});
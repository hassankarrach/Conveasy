"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_Navbar_index_tsx";
exports.ids = ["components_Navbar_index_tsx"];
exports.modules = {

/***/ "./components/Navbar/Navbar.styled.ts":
/*!********************************************!*\
  !*** ./components/Navbar/Navbar.styled.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledNavbar\": () => (/* binding */ StyledNavbar)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StyledNavbar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav.withConfig({\n  displayName: \"Navbarstyled__StyledNavbar\",\n  componentId: \"sc-ewgnkl-0\"\n})([\"width:100%;padding:0px 10%;margin:0px;height:70px;display:flex;align-items:center;justify-content:flex-start;position:fixed;@media (max-width:768px){padding:0px;justify-content:center;}.logo{height:60px;cursor:pointer;}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc3R5bGVkLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUMsWUFBWSxHQUFHRCx1RUFBSDtFQUFBO0VBQUE7QUFBQSxtT0FBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc3R5bGVkLnRzP2JlM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWROYXZiYXIgPSBzdHlsZWQubmF2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDBweCAxMCU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZE5hdmJhciIsIm5hdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar/Navbar.styled.ts\n");

/***/ }),

/***/ "./components/Navbar/index.tsx":
/*!*************************************!*\
  !*** ./components/Navbar/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.styled */ \"./components/Navbar/Navbar.styled.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\Setup Game\\\\Desktop\\\\VideoChat\\\\Client\\\\components\\\\Navbar\\\\index.tsx\";\n\n\n\n\nfunction index() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Navbar_styled__WEBPACK_IMPORTED_MODULE_1__.StyledNavbar, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n      className: \"logo\",\n      src: \"Assets/Logo/color.png\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLFNBQVNFLEtBQVQsR0FBaUI7RUFDZixvQkFDRSw4REFBQyx3REFBRDtJQUFBLHVCQUNFO01BQUssU0FBUyxFQUFDLE1BQWY7TUFBc0IsR0FBRyxFQUFFO0lBQTNCO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFLRDs7QUFFRCxpRUFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LnRzeD9hNTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3R5bGVkTmF2YmFyIH0gZnJvbSBcIi4vTmF2YmFyLnN0eWxlZFwiO1xyXG5cclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWROYXZiYXI+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz17XCJBc3NldHMvTG9nby9jb2xvci5wbmdcIn0gLz5cclxuICAgIDwvU3R5bGVkTmF2YmFyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHlsZWROYXZiYXIiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar/index.tsx\n");

/***/ })

};
;
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

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.styled */ \"./components/Header/Header.styled.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_icons_material_AddToQueue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/AddToQueue */ \"./node_modules/@mui/icons-material/AddToQueue.js\");\n/* harmony import */ var _components_Global_StyledInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Global/StyledInput */ \"./components/Global/StyledInput/index.tsx\");\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Modal */ \"./node_modules/@mui/material/esm/Modal/index.js\");\n/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Radio */ \"./node_modules/@mui/material/esm/Radio/index.js\");\n/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/RadioGroup */ \"./node_modules/@mui/material/esm/RadioGroup/index.js\");\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/FormControlLabel */ \"./node_modules/@mui/material/esm/FormControlLabel/index.js\");\n/* harmony import */ var _mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/FormLabel */ \"./node_modules/@mui/material/esm/FormLabel/index.js\");\n/* harmony import */ var contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/Socket.Context */ \"./contexts/Socket.Context.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\Setup Game\\\\Desktop\\\\VideoChat\\\\Client\\\\components\\\\Header\\\\index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n //Icons\n\n //GlobalComponents\n\n\n//MaterialUI\n\n\n\n\n //SocketContext\n\n\n\n\nfunction Index() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1]; //ErrorState\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      Error = _useState2[0],\n      setError = _useState2[1]; //radioButton\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      checkedRadio = _useState3[0],\n      setcheckedRadio = _useState3[1]; //SocetContext\n\n\n  var _UseSockets = (0,contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_4__.UseSockets)(),\n      socket = _UseSockets.socket,\n      room = _UseSockets.room,\n      setRoom = _UseSockets.setRoom,\n      name = _UseSockets.name,\n      setName = _UseSockets.setName;\n\n  var HanddlUserNameInput = function HanddlUserNameInput(event) {\n    setName(event.target.value);\n  };\n\n  var HanddlRoomIdInput = function HanddlRoomIdInput(event) {\n    setRoom(event.target.value);\n  }; //ModalStates\n\n\n  var handleOpen = function handleOpen() {\n    if (room) {}\n\n    setOpen(true);\n  };\n\n  var handleClose = function handleClose() {\n    return setOpen(false);\n  }; //RadioGRP event\n\n\n  var HandleRadioChecked = function HandleRadioChecked(event) {\n    setcheckedRadio(event.target.value);\n  };\n\n  var HandleJoinRoom = function HandleJoinRoom(e) {\n    if (name !== \"\" && room !== \"\" && checkedRadio !== \"\") {\n      try {\n        socket.emit(\"join\", {\n          name: name,\n          room: room,\n          gender: checkedRadio\n        }, function (error) {\n          if (error) {\n            alert(error);\n          } else {\n            e.preventDefault();\n            router.push(\"/room\");\n          }\n        });\n      } catch (error) {\n        console.log(error);\n      }\n    } else {\n      setError(\"please fill all required fields.\");\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_1__.StyledHeader, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"Elipse24\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"Elipse25\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"Left\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"HeroData\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n          children: \"free video meetings.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n          children: \"Conveasy secure, reliable video platform powers all of your communication needs, including meetings, chat, phone, and collaborative white-board.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"Buttons\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_1__.StyledCreateRoom, {\n            onClick: handleOpen,\n            children: [\"Create Room \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_icons_material_AddToQueue__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              className: \"Icon\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 89,\n              columnNumber: 27\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Global_StyledInput__WEBPACK_IMPORTED_MODULE_3__.StyledInput, {\n            PlaceHolder: \"Enter Room Code\",\n            ButtonText: \"Enter\",\n            Width: \"70%\",\n            HandleJoinRoom: handleOpen\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          open: open,\n          onClose: handleClose,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_styled__WEBPACK_IMPORTED_MODULE_1__.StyledModal, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n              className: \"Label\",\n              children: \"Room ID :\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n              className: \"Input\",\n              placeholder: \"\".concat(room ? room : \"ENTER ROOM ID!\"),\n              onChange: HanddlRoomIdInput\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n              className: \"Label\",\n              children: \"User Name :\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n              className: \"Input\",\n              placeholder: \"ENTER USERNAME!\",\n              onChange: HanddlUserNameInput\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_FormLabel__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n              className: \"Label\",\n              children: \"Gender :\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n              row: true,\n              \"aria-labelledby\": \"demo-row-radio-buttons-group-label\",\n              name: \"row-radio-buttons-group\",\n              onChange: HandleRadioChecked,\n              className: \"RdioGrp\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                value: \"female\",\n                control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                  size: \"small\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 124,\n                  columnNumber: 28\n                }, this),\n                label: \"Female\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 122,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                value: \"male\",\n                control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                  size: \"small\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 129,\n                  columnNumber: 28\n                }, this),\n                label: \"Male\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 127,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n              onClick: HandleJoinRoom,\n              children: \"Join\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 15\n            }, this), Error !== \"\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              children: Error\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 136,\n              columnNumber: 32\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"Right\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n        className: \"MainHero\",\n        src: \"/Assets/Hero/main.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"Mark\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          className: \"MadeInMorocco \".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_12___default().rotating)),\n          src: \"/Assets/Hero/MadeInMorocco.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          className: \"Star\",\n          src: \"/Assets/Hero/MoroccanStar.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Index, \"oyQWbgPrONdlyXsXEfUcjXJICbo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxPQUFmO01BQUEsd0JBQ0U7UUFBSyxTQUFTLEVBQUMsVUFBZjtRQUEwQixHQUFHLEVBQUU7TUFBL0I7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBR0U7UUFBSyxTQUFTLEVBQUMsTUFBZjtRQUFBLHdCQUNFO1VBQ0UsU0FBUywwQkFBbUJiLDBFQUFuQixDQURYO1VBRUUsR0FBRyxFQUFFO1FBRlA7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURGLGVBTUU7VUFBSyxTQUFTLEVBQUMsTUFBZjtVQUFzQixHQUFHLEVBQUU7UUFBM0I7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQU5GO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUhGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWxFRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQWlGRDs7R0F2SVFTO1VBQ1FWOzs7S0FEUlU7QUF5SVQsK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4P2YyYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdHlsZWRIZWFkZXIsIFN0eWxlZENyZWF0ZVJvb20sIFN0eWxlZE1vZGFsIH0gZnJvbSBcIi4vSGVhZGVyLnN0eWxlZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQHN0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuLy9JY29uc1xyXG5pbXBvcnQgQWRkVG9RdWV1ZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkVG9RdWV1ZVwiO1xyXG4vL0dsb2JhbENvbXBvbmVudHNcclxuaW1wb3J0IHsgU3R5bGVkSW5wdXQgfSBmcm9tIFwiQGNvbXBvbmVudHMvR2xvYmFsL1N0eWxlZElucHV0XCI7XHJcbmltcG9ydCB7IEJ1dHRvblN0eWxlZCB9IGZyb20gXCJAY29tcG9uZW50cy9HbG9iYWwvQnV0dG9uXCI7XHJcbi8vTWF0ZXJpYWxVSVxyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTW9kYWxcIjtcclxuaW1wb3J0IFJhZGlvIGZyb20gXCJAbXVpL21hdGVyaWFsL1JhZGlvXCI7XHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gXCJAbXVpL21hdGVyaWFsL1JhZGlvR3JvdXBcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xMYWJlbFwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEZvcm1MYWJlbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Gb3JtTGFiZWxcIjtcclxuLy9Tb2NrZXRDb250ZXh0XHJcbmltcG9ydCB7IFVzZVNvY2tldHMgfSBmcm9tIFwiY29udGV4dHMvU29ja2V0LkNvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvL0Vycm9yU3RhdGVcclxuICBjb25zdCBbRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vcmFkaW9CdXR0b25cclxuICBjb25zdCBbY2hlY2tlZFJhZGlvLCBzZXRjaGVja2VkUmFkaW9dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vU29jZXRDb250ZXh0XHJcbiAgY29uc3QgeyBzb2NrZXQsIHJvb20sIHNldFJvb20sIG5hbWUsIHNldE5hbWUgfSA9IFVzZVNvY2tldHMoKTtcclxuXHJcbiAgY29uc3QgSGFuZGRsVXNlck5hbWVJbnB1dCA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBIYW5kZGxSb29tSWRJbnB1dCA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBzZXRSb29tKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy9Nb2RhbFN0YXRlc1xyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBpZiAocm9vbSkge1xyXG4gICAgfVxyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0T3BlbihmYWxzZSk7XHJcblxyXG4gIC8vUmFkaW9HUlAgZXZlbnRcclxuICBjb25zdCBIYW5kbGVSYWRpb0NoZWNrZWQgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgc2V0Y2hlY2tlZFJhZGlvKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgSGFuZGxlSm9pblJvb20gPSAoZTogYW55KSA9PiB7XHJcbiAgICBpZiAobmFtZSAhPT0gXCJcIiAmJiByb29tICE9PSBcIlwiICYmIGNoZWNrZWRSYWRpbyAhPT0gXCJcIikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNvY2tldC5lbWl0KFxyXG4gICAgICAgICAgXCJqb2luXCIsXHJcbiAgICAgICAgICB7IG5hbWUsIHJvb20sIGdlbmRlcjogY2hlY2tlZFJhZGlvIH0sXHJcbiAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3Jvb21cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoXCJwbGVhc2UgZmlsbCBhbGwgcmVxdWlyZWQgZmllbGRzLlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEhlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJFbGlwc2UyNFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVsaXBzZTI1XCI+PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxlZnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlcm9EYXRhXCI+XHJcbiAgICAgICAgICA8aDE+ZnJlZSB2aWRlbyBtZWV0aW5ncy48L2gxPlxyXG4gICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICBDb252ZWFzeSBzZWN1cmUsIHJlbGlhYmxlIHZpZGVvIHBsYXRmb3JtIHBvd2VycyBhbGwgb2YgeW91clxyXG4gICAgICAgICAgICBjb21tdW5pY2F0aW9uIG5lZWRzLCBpbmNsdWRpbmcgbWVldGluZ3MsIGNoYXQsIHBob25lLCBhbmRcclxuICAgICAgICAgICAgY29sbGFib3JhdGl2ZSB3aGl0ZS1ib2FyZC5cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgPFN0eWxlZENyZWF0ZVJvb20gb25DbGljaz17aGFuZGxlT3Blbn0+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlIFJvb20gPEFkZFRvUXVldWVJY29uIGNsYXNzTmFtZT1cIkljb25cIiAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZENyZWF0ZVJvb20+XHJcblxyXG4gICAgICAgICAgICA8U3R5bGVkSW5wdXRcclxuICAgICAgICAgICAgICBQbGFjZUhvbGRlcj1cIkVudGVyIFJvb20gQ29kZVwiXHJcbiAgICAgICAgICAgICAgQnV0dG9uVGV4dD1cIkVudGVyXCJcclxuICAgICAgICAgICAgICBXaWR0aD1cIjcwJVwiXHJcbiAgICAgICAgICAgICAgSGFuZGxlSm9pblJvb209e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICA8U3R5bGVkTW9kYWw+XHJcbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjbGFzc05hbWU9XCJMYWJlbFwiPlJvb20gSUQgOjwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake3Jvb20gPyByb29tIDogXCJFTlRFUiBST09NIElEIVwifWB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGRsUm9vbUlkSW5wdXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNsYXNzTmFtZT1cIkxhYmVsXCI+VXNlciBOYW1lIDo8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIklucHV0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRU5URVIgVVNFUk5BTUUhXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtIYW5kZGxVc2VyTmFtZUlucHV0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjbGFzc05hbWU9XCJMYWJlbFwiPkdlbmRlciA6PC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgIHJvd1xyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZGVtby1yb3ctcmFkaW8tYnV0dG9ucy1ncm91cC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicm93LXJhZGlvLWJ1dHRvbnMtZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e0hhbmRsZVJhZGlvQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlJkaW9HcnBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmVtYWxlXCJcclxuICAgICAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIHNpemU9XCJzbWFsbFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkZlbWFsZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJtYWxlXCJcclxuICAgICAgICAgICAgICAgICAgY29udHJvbD17PFJhZGlvIHNpemU9XCJzbWFsbFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk1hbGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17SGFuZGxlSm9pblJvb219PkpvaW48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAge0Vycm9yICE9PSBcIlwiICYmIDxwPntFcnJvcn08L3A+fVxyXG4gICAgICAgICAgICA8L1N0eWxlZE1vZGFsPlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmlnaHRcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIk1haW5IZXJvXCIgc3JjPXtcIi9Bc3NldHMvSGVyby9tYWluLnBuZ1wifSAvPlxyXG4gICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cIlJlZEhhdFwiIHNyYz17XCIvQXNzZXRzL0hlcm8vUmVkSGF0LnBuZ1wifSAvPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1hcmtcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgTWFkZUluTW9yb2NjbyAke3N0eWxlcy5yb3RhdGluZ31gfVxyXG4gICAgICAgICAgICBzcmM9e1wiL0Fzc2V0cy9IZXJvL01hZGVJbk1vcm9jY28ucG5nXCJ9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiU3RhclwiIHNyYz17XCIvQXNzZXRzL0hlcm8vTW9yb2NjYW5TdGFyLnBuZ1wifSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkSGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlZEhlYWRlciIsIlN0eWxlZENyZWF0ZVJvb20iLCJTdHlsZWRNb2RhbCIsInVzZVJvdXRlciIsInN0eWxlcyIsIkFkZFRvUXVldWVJY29uIiwiU3R5bGVkSW5wdXQiLCJNb2RhbCIsIlJhZGlvIiwiUmFkaW9Hcm91cCIsIkZvcm1Db250cm9sTGFiZWwiLCJGb3JtTGFiZWwiLCJVc2VTb2NrZXRzIiwiSW5kZXgiLCJyb3V0ZXIiLCJvcGVuIiwic2V0T3BlbiIsIkVycm9yIiwic2V0RXJyb3IiLCJjaGVja2VkUmFkaW8iLCJzZXRjaGVja2VkUmFkaW8iLCJzb2NrZXQiLCJyb29tIiwic2V0Um9vbSIsIm5hbWUiLCJzZXROYW1lIiwiSGFuZGRsVXNlck5hbWVJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJIYW5kZGxSb29tSWRJbnB1dCIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsIkhhbmRsZVJhZGlvQ2hlY2tlZCIsIkhhbmRsZUpvaW5Sb29tIiwiZSIsImVtaXQiLCJnZW5kZXIiLCJlcnJvciIsImFsZXJ0IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJvdGF0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ })

});
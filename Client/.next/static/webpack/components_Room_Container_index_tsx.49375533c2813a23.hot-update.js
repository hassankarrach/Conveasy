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

/***/ "./components/Room/Container/chatContainer/ChatContainer.tsx":
/*!*******************************************************************!*\
  !*** ./components/Room/Container/chatContainer/ChatContainer.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Setup_Game_Desktop_VideoChat_Client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/Socket.Context */ \"./contexts/Socket.Context.tsx\");\n/* harmony import */ var _components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Room/Container/chatContainer/Container.styled */ \"./components/Room/Container/chatContainer/Container.styled.ts\");\n/* harmony import */ var _components_Room_Container_chatContainer_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Room/Container/chatContainer/Message */ \"./components/Room/Container/chatContainer/Message/index.tsx\");\n/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Send */ \"./node_modules/@mui/icons-material/Send.js\");\n/* harmony import */ var _mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Chat */ \"./node_modules/@mui/icons-material/Chat.js\");\n/* harmony import */ var _mui_icons_material_People__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/People */ \"./node_modules/@mui/icons-material/People.js\");\n/* harmony import */ var _mui_icons_material_KeyboardVoice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/KeyboardVoice */ \"./node_modules/@mui/icons-material/KeyboardVoice.js\");\n/* harmony import */ var _mui_icons_material_VideocamOff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/VideocamOff */ \"./node_modules/@mui/icons-material/VideocamOff.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Setup Game\\\\Desktop\\\\VideoChat\\\\Client\\\\components\\\\Room\\\\Container\\\\chatContainer\\\\ChatContainer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ChatContainer = function ChatContainer() {\n  _s();\n\n  //SocetContext\n  var _UseSockets = (0,contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_2__.UseSockets)(),\n      socket = _UseSockets.socket,\n      message = _UseSockets.message,\n      messages = _UseSockets.messages,\n      name = _UseSockets.name,\n      users = _UseSockets.users,\n      setMessage = _UseSockets.setMessage,\n      ChatContainerShow = _UseSockets.ChatContainerShow,\n      setMessages = _UseSockets.setMessages;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      ParticipantsShow = _useState[0],\n      setParticipantsShow = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      ChatBoxShow = _useState2[0],\n      setChatBoxShow = _useState2[1]; //TypingStats\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      focused = _useState3[0],\n      setFocused = _useState3[1];\n\n  var onFocus = function onFocus() {\n    setFocused(true);\n    socket.emit(\"typing\", {\n      user: name,\n      status: \"typing\"\n    });\n  };\n\n  var onBlur = function onBlur() {\n    setFocused(false);\n    socket.emit(\"typing\", {\n      user: name,\n      status: \"Not typing\"\n    });\n  };\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isTyping = _useState4[0],\n      setisTyping = _useState4[1]; //InputRef\n\n\n  var newMessageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var messageEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); //Empty Div in The End Of the Messages Container for auto scroll to last Message.\n  //Filling The Message State\n\n  var HandleMsgInput = function HandleMsgInput(event) {\n    setMessage(event.target.value);\n  }; //Function for Sending Message\n\n\n  var sendMessage = function sendMessage(e) {\n    e.preventDefault();\n    var MsgObj = {\n      msg: message,\n      time: new Date(Date.now()).getHours() + \":\" + new Date(Date.now()).getMinutes()\n    };\n\n    if (message !== \"\") {\n      socket.emit(\"sendMessage\", MsgObj, function () {\n        setMessage(\"\");\n        newMessageRef.current.value = \"\";\n      });\n    }\n  }; //HandleIsTyping\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    socket.on(\"UserIsTyping\", function (data) {\n      var status = data.status;\n\n      if (status === \"typing\") {\n        setisTyping(true);\n        setMessages([].concat((0,C_Users_Setup_Game_Desktop_VideoChat_Client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(messages), [{}]));\n      } else if (status === \"Not typing\") {\n        setisTyping(false);\n      }\n    });\n    return function () {\n      socket.removeListener(\"UserIsTyping\");\n    };\n  }, []); //StayInView\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var _messageEndRef$curren;\n\n    (_messageEndRef$curren = messageEndRef.current) === null || _messageEndRef$curren === void 0 ? void 0 : _messageEndRef$curren.scrollIntoView({\n      behavior: \"smooth\"\n    });\n  }, [messages]);\n\n  var GetUserByName = function GetUserByName(name) {\n    var user = users.find(function (user) {\n      return user.name === name;\n    });\n\n    if (user) {\n      return user;\n    } else {\n      return \"\";\n    }\n  }; //RightContainerHandles\n\n\n  var HandleChatClick = function HandleChatClick() {\n    setChatBoxShow(true);\n    setParticipantsShow(false);\n  };\n\n  var HandleParticipantsClick = function HandleParticipantsClick() {\n    setChatBoxShow(false);\n    setParticipantsShow(true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_3__.RightChat, {\n    children: ChatContainerShow && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_3__.Chat_Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"Switch\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"item Chat \".concat(ChatBoxShow && \"Actif\"),\n          onClick: HandleChatClick,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            className: \"Icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n            className: \"Title\",\n            children: \"Chat\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"item Participants \".concat(ParticipantsShow && \"Actif\"),\n          onClick: HandleParticipantsClick,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_icons_material_People__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            className: \"Icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n            className: \"Title\",\n            children: [\"Participants (\", users.length, \")\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 11\n      }, _this), ParticipantsShow && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_3__.Participants, {\n        children: users.map(function (user, key) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"Participant\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"Avatar\",\n              style: {\n                backgroundImage: \"url(./Assets/Faces/\".concat(user.avatar, \".png)\")\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 145,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n              children: user.name === name ? \"you\" : user.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 151,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"UserSets\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                className: \"Icon\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_icons_material_KeyboardVoice__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 155,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 154,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                className: \"Icon\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_icons_material_VideocamOff__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 158,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 157,\n                columnNumber: 23\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 153,\n              columnNumber: 21\n            }, _this)]\n          }, key, true, {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 19\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 13\n      }, _this), ChatBoxShow && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_3__.MessagesContainer, {\n          children: [messages.map(function (msg, key) {\n            var userName = msg.user;\n            var MsgSender = GetUserByName(userName);\n            var avatar = MsgSender.avatar;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Room_Container_chatContainer_Message__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              content: msg.text,\n              time: msg.time || \"\",\n              from: msg.user || name,\n              isCurrentUserTheSender: msg.user === name ? true : false,\n              isAdmin: msg.user === \"admin\" ? true : false,\n              pic: avatar,\n              isTyping: isTyping\n            }, key, false, {\n              fileName: _jsxFileName,\n              lineNumber: 177,\n              columnNumber: 21\n            }, _this);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            ref: messageEndRef\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 189,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 169,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_3__.ChatBox, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n            className: \"Input\",\n            placeholder: \"Type Message Here...\",\n            onChange: HandleMsgInput,\n            ref: newMessageRef,\n            onKeyPress: function onKeyPress(event) {\n              return event.key === \"Enter\" ? sendMessage(event) : null;\n            },\n            onFocus: onFocus,\n            onBlur: onBlur\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 193,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"Icon\",\n            onClick: sendMessage,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 205,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 204,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 192,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 119,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ChatContainer, \"nshz0DspJ6TkOaWCsfVak9X/F9g=\");\n\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChatContainer\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL2NoYXRDb250YWluZXIvQ2hhdENvbnRhaW5lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFFQSxJQUFNZ0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0VBQUE7O0VBQzFCO0VBQ0Esa0JBU0laLG1FQUFVLEVBVGQ7RUFBQSxJQUNFYSxNQURGLGVBQ0VBLE1BREY7RUFBQSxJQUVFQyxPQUZGLGVBRUVBLE9BRkY7RUFBQSxJQUdFQyxRQUhGLGVBR0VBLFFBSEY7RUFBQSxJQUlFQyxJQUpGLGVBSUVBLElBSkY7RUFBQSxJQUtFQyxLQUxGLGVBS0VBLEtBTEY7RUFBQSxJQU1FQyxVQU5GLGVBTUVBLFVBTkY7RUFBQSxJQU9FQyxpQkFQRixlQU9FQSxpQkFQRjtFQUFBLElBUUVDLFdBUkYsZUFRRUEsV0FSRjs7RUFXQSxnQkFBZ0R2QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEQ7RUFBQSxJQUFPd0IsZ0JBQVA7RUFBQSxJQUF5QkMsbUJBQXpCOztFQUNBLGlCQUFzQ3pCLCtDQUFRLENBQUMsSUFBRCxDQUE5QztFQUFBLElBQU8wQixXQUFQO0VBQUEsSUFBb0JDLGNBQXBCLGlCQWQwQixDQWUxQjs7O0VBQ0EsaUJBQThCM0IsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0VBQUEsSUFBTzRCLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtJQUNwQkQsVUFBVSxDQUFDLElBQUQsQ0FBVjtJQUNBYixNQUFNLENBQUNlLElBQVAsQ0FBWSxRQUFaLEVBQXNCO01BQUVDLElBQUksRUFBRWIsSUFBUjtNQUFjYyxNQUFNLEVBQUU7SUFBdEIsQ0FBdEI7RUFDRCxDQUhEOztFQUlBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07SUFDbkJMLFVBQVUsQ0FBQyxLQUFELENBQVY7SUFDQWIsTUFBTSxDQUFDZSxJQUFQLENBQVksUUFBWixFQUFzQjtNQUFFQyxJQUFJLEVBQUViLElBQVI7TUFBY2MsTUFBTSxFQUFFO0lBQXRCLENBQXRCO0VBQ0QsQ0FIRDs7RUFJQSxpQkFBZ0NqQywrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7RUFBQSxJQUFPbUMsUUFBUDtFQUFBLElBQWlCQyxXQUFqQixpQkF6QjBCLENBMkIxQjs7O0VBQ0EsSUFBTUMsYUFBYSxHQUFHbkMsNkNBQU0sQ0FBTSxJQUFOLENBQTVCO0VBQ0EsSUFBTW9DLGFBQWEsR0FBR3BDLDZDQUFNLENBQXdCLElBQXhCLENBQTVCLENBN0IwQixDQTZCaUM7RUFFM0Q7O0VBQ0EsSUFBTXFDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFnQjtJQUNyQ25CLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVY7RUFDRCxDQUZELENBaEMwQixDQW9DMUI7OztFQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBWTtJQUM5QkEsQ0FBQyxDQUFDQyxjQUFGO0lBRUEsSUFBTUMsTUFBTSxHQUFHO01BQ2JDLEdBQUcsRUFBRTlCLE9BRFE7TUFFYitCLElBQUksRUFDRixJQUFJQyxJQUFKLENBQVNBLElBQUksQ0FBQ0MsR0FBTCxFQUFULEVBQXFCQyxRQUFyQixLQUNBLEdBREEsR0FFQSxJQUFJRixJQUFKLENBQVNBLElBQUksQ0FBQ0MsR0FBTCxFQUFULEVBQXFCRSxVQUFyQjtJQUxXLENBQWY7O0lBUUEsSUFBSW5DLE9BQU8sS0FBSyxFQUFoQixFQUFvQjtNQUNsQkQsTUFBTSxDQUFDZSxJQUFQLENBQVksYUFBWixFQUEyQmUsTUFBM0IsRUFBbUMsWUFBTTtRQUN2Q3pCLFVBQVUsQ0FBQyxFQUFELENBQVY7UUFDQWdCLGFBQWEsQ0FBQ2dCLE9BQWQsQ0FBc0JYLEtBQXRCLEdBQThCLEVBQTlCO01BQ0QsQ0FIRDtJQUlEO0VBQ0YsQ0FqQkQsQ0FyQzBCLENBd0QxQjs7O0VBQ0F6QyxnREFBUyxDQUFDLFlBQU07SUFDZGUsTUFBTSxDQUFDc0MsRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBQ0MsSUFBRCxFQUFVO01BQ2xDLElBQVF0QixNQUFSLEdBQW1Cc0IsSUFBbkIsQ0FBUXRCLE1BQVI7O01BQ0EsSUFBSUEsTUFBTSxLQUFLLFFBQWYsRUFBeUI7UUFDdkJHLFdBQVcsQ0FBQyxJQUFELENBQVg7UUFDQWIsV0FBVyxrTEFBS0wsUUFBTCxJQUFlLEVBQWYsR0FBWDtNQUNELENBSEQsTUFHTyxJQUFJZSxNQUFNLEtBQUssWUFBZixFQUE2QjtRQUNsQ0csV0FBVyxDQUFDLEtBQUQsQ0FBWDtNQUNEO0lBQ0YsQ0FSRDtJQVVBLE9BQU8sWUFBTTtNQUNYcEIsTUFBTSxDQUFDd0MsY0FBUCxDQUFzQixjQUF0QjtJQUNELENBRkQ7RUFHRCxDQWRRLEVBY04sRUFkTSxDQUFULENBekQwQixDQXlFMUI7O0VBQ0F2RCxnREFBUyxDQUFDLFlBQU07SUFBQTs7SUFDZCx5QkFBQXFDLGFBQWEsQ0FBQ2UsT0FBZCxnRkFBdUJJLGNBQXZCLENBQXNDO01BQUVDLFFBQVEsRUFBRTtJQUFaLENBQXRDO0VBQ0QsQ0FGUSxFQUVOLENBQUN4QyxRQUFELENBRk0sQ0FBVDs7RUFJQSxJQUFNeUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDeEMsSUFBRCxFQUFrQjtJQUN0QyxJQUFNYSxJQUFJLEdBQUdaLEtBQUssQ0FBQ3dDLElBQU4sQ0FBVyxVQUFDNUIsSUFBRCxFQUFVO01BQ2hDLE9BQU9BLElBQUksQ0FBQ2IsSUFBTCxLQUFjQSxJQUFyQjtJQUNELENBRlksQ0FBYjs7SUFHQSxJQUFJYSxJQUFKLEVBQVU7TUFDUixPQUFPQSxJQUFQO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsT0FBTyxFQUFQO0lBQ0Q7RUFDRixDQVRELENBOUUwQixDQXlGMUI7OztFQUNBLElBQU02QixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07SUFDNUJsQyxjQUFjLENBQUMsSUFBRCxDQUFkO0lBQ0FGLG1CQUFtQixDQUFDLEtBQUQsQ0FBbkI7RUFDRCxDQUhEOztFQUlBLElBQU1xQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07SUFDcENuQyxjQUFjLENBQUMsS0FBRCxDQUFkO0lBQ0FGLG1CQUFtQixDQUFDLElBQUQsQ0FBbkI7RUFDRCxDQUhEOztFQUtBLG9CQUNFLDhEQUFDLGdHQUFEO0lBQUEsVUFDR0gsaUJBQWlCLGlCQUNoQiw4REFBQyxxR0FBRDtNQUFBLHdCQUNFO1FBQUssU0FBUyxFQUFDLFFBQWY7UUFBQSx3QkFDRTtVQUNFLFNBQVMsc0JBQWVJLFdBQVcsSUFBSSxPQUE5QixDQURYO1VBRUUsT0FBTyxFQUFFbUMsZUFGWDtVQUFBLHdCQUlFLDhEQUFDLGdFQUFEO1lBQVUsU0FBUyxFQUFDO1VBQXBCO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FKRixlQUtFO1lBQU0sU0FBUyxFQUFDLE9BQWhCO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBTEY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsZUFTRTtVQUNFLFNBQVMsOEJBQXVCckMsZ0JBQWdCLElBQUksT0FBM0MsQ0FEWDtVQUVFLE9BQU8sRUFBRXNDLHVCQUZYO1VBQUEsd0JBSUUsOERBQUMsa0VBQUQ7WUFBWSxTQUFTLEVBQUM7VUFBdEI7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQUpGLGVBS0U7WUFBTSxTQUFTLEVBQUMsT0FBaEI7WUFBQSw2QkFBdUMxQyxLQUFLLENBQUMyQyxNQUE3QztVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FMRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FURjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FERixFQW1CR3ZDLGdCQUFnQixpQkFDZiw4REFBQyxtR0FBRDtRQUFBLFVBQ0dKLEtBQUssQ0FBQzRDLEdBQU4sQ0FBVSxVQUFDaEMsSUFBRCxFQUFPaUMsR0FBUCxFQUFlO1VBQ3hCLG9CQUNFO1lBQUssU0FBUyxFQUFDLGFBQWY7WUFBQSx3QkFDRTtjQUNFLFNBQVMsRUFBQyxRQURaO2NBRUUsS0FBSyxFQUFFO2dCQUNMQyxlQUFlLCtCQUF3QmxDLElBQUksQ0FBQ21DLE1BQTdCO2NBRFY7WUFGVDtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBREYsZUFPRTtjQUFBLFVBQU9uQyxJQUFJLENBQUNiLElBQUwsS0FBY0EsSUFBZCxHQUFxQixLQUFyQixHQUE2QmEsSUFBSSxDQUFDYjtZQUF6QztjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBUEYsZUFTRTtjQUFLLFNBQVMsRUFBQyxVQUFmO2NBQUEsd0JBQ0U7Z0JBQUssU0FBUyxFQUFDLE1BQWY7Z0JBQUEsdUJBQ0UsOERBQUMseUVBQUQ7a0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7Y0FERjtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBLFNBREYsZUFJRTtnQkFBSyxTQUFTLEVBQUMsTUFBZjtnQkFBQSx1QkFDRSw4REFBQyx1RUFBRDtrQkFBQTtrQkFBQTtrQkFBQTtnQkFBQTtjQURGO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsU0FKRjtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FURjtVQUFBLEdBQWtDOEMsR0FBbEM7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQURGO1FBb0JELENBckJBO01BREg7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQXBCSixFQThDR3ZDLFdBQVcsaUJBQ1Y7UUFBQSx3QkFDRSw4REFBQyx3R0FBRDtVQUFBLFdBQ0dSLFFBQVEsQ0FBQzhDLEdBQVQsQ0FBYSxVQUFDakIsR0FBRCxFQUFNa0IsR0FBTixFQUFjO1lBQzFCLElBQU1HLFFBQVEsR0FBR3JCLEdBQUcsQ0FBQ2YsSUFBckI7WUFFQSxJQUFNcUMsU0FBYyxHQUFHVixhQUFhLENBQUNTLFFBQUQsQ0FBcEM7WUFDQSxJQUFNRCxNQUFXLEdBQUdFLFNBQVMsQ0FBQ0YsTUFBOUI7WUFFQSxvQkFDRSw4REFBQyx3RkFBRDtjQUVFLE9BQU8sRUFBRXBCLEdBQUcsQ0FBQ3VCLElBRmY7Y0FHRSxJQUFJLEVBQUV2QixHQUFHLENBQUNDLElBQUosSUFBWSxFQUhwQjtjQUlFLElBQUksRUFBRUQsR0FBRyxDQUFDZixJQUFKLElBQVliLElBSnBCO2NBS0Usc0JBQXNCLEVBQUU0QixHQUFHLENBQUNmLElBQUosS0FBYWIsSUFBYixHQUFvQixJQUFwQixHQUEyQixLQUxyRDtjQU1FLE9BQU8sRUFBRTRCLEdBQUcsQ0FBQ2YsSUFBSixLQUFhLE9BQWIsR0FBdUIsSUFBdkIsR0FBOEIsS0FOekM7Y0FPRSxHQUFHLEVBQUVtQyxNQVBQO2NBUUUsUUFBUSxFQUFFaEM7WUFSWixHQUNPOEIsR0FEUDtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBREY7VUFZRCxDQWxCQSxDQURILGVBb0JFO1lBQUssR0FBRyxFQUFFM0I7VUFBVjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBcEJGO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURGLGVBd0JFLDhEQUFDLDhGQUFEO1VBQUEsd0JBQ0U7WUFDRSxTQUFTLEVBQUMsT0FEWjtZQUVFLFdBQVcsRUFBQyxzQkFGZDtZQUdFLFFBQVEsRUFBRUMsY0FIWjtZQUlFLEdBQUcsRUFBRUYsYUFKUDtZQUtFLFVBQVUsRUFBRSxvQkFBQ0csS0FBRDtjQUFBLE9BQ1ZBLEtBQUssQ0FBQ3lCLEdBQU4sS0FBYyxPQUFkLEdBQXdCdEIsV0FBVyxDQUFDSCxLQUFELENBQW5DLEdBQTZDLElBRG5DO1lBQUEsQ0FMZDtZQVFFLE9BQU8sRUFBRVYsT0FSWDtZQVNFLE1BQU0sRUFBRUk7VUFUVjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBREYsZUFZRTtZQUFLLFNBQVMsRUFBQyxNQUFmO1lBQXNCLE9BQU8sRUFBRVMsV0FBL0I7WUFBQSx1QkFDRSw4REFBQyxpRUFBRDtjQUFBO2NBQUE7Y0FBQTtZQUFBO1VBREY7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQVpGO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQXhCRjtNQUFBLGdCQS9DSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFGSjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFnR0QsQ0FuTUQ7O0dBQU01Qjs7S0FBQUE7QUFxTU4sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tL0NvbnRhaW5lci9jaGF0Q29udGFpbmVyL0NoYXRDb250YWluZXIudHN4PzY2NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VTb2NrZXRzIH0gZnJvbSBcImNvbnRleHRzL1NvY2tldC5Db250ZXh0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2hhdF9Db250YWluZXIsXHJcbiAgQ2hhdEJveCxcclxuICBNZXNzYWdlc0NvbnRhaW5lcixcclxuICBSaWdodENoYXQsXHJcbiAgUGFydGljaXBhbnRzLFxyXG59IGZyb20gXCJAY29tcG9uZW50cy9Sb29tL0NvbnRhaW5lci9jaGF0Q29udGFpbmVyL0NvbnRhaW5lci5zdHlsZWRcIjtcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIkBjb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL2NoYXRDb250YWluZXIvTWVzc2FnZVwiO1xyXG5pbXBvcnQgU2VuZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvU2VuZFwiO1xyXG5pbXBvcnQgQ2hhdEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hhdFwiO1xyXG5pbXBvcnQgUGVvcGxlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QZW9wbGVcIjtcclxuaW1wb3J0IE1pY09mZkljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWljT2ZmXCI7XHJcbmltcG9ydCBLZXlib2FyZFZvaWNlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZFZvaWNlXCI7XHJcbmltcG9ydCBWaWRlb2NhbUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvVmlkZW9jYW1cIjtcclxuaW1wb3J0IFZpZGVvY2FtT2ZmSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9WaWRlb2NhbU9mZlwiO1xyXG5cclxuY29uc3QgQ2hhdENvbnRhaW5lciA9ICgpID0+IHtcclxuICAvL1NvY2V0Q29udGV4dFxyXG4gIGNvbnN0IHtcclxuICAgIHNvY2tldCxcclxuICAgIG1lc3NhZ2UsXHJcbiAgICBtZXNzYWdlcyxcclxuICAgIG5hbWUsXHJcbiAgICB1c2VycyxcclxuICAgIHNldE1lc3NhZ2UsXHJcbiAgICBDaGF0Q29udGFpbmVyU2hvdyxcclxuICAgIHNldE1lc3NhZ2VzLFxyXG4gIH0gPSBVc2VTb2NrZXRzKCk7XHJcblxyXG4gIGNvbnN0IFtQYXJ0aWNpcGFudHNTaG93LCBzZXRQYXJ0aWNpcGFudHNTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbQ2hhdEJveFNob3csIHNldENoYXRCb3hTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIC8vVHlwaW5nU3RhdHNcclxuICBjb25zdCBbZm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25Gb2N1cyA9ICgpID0+IHtcclxuICAgIHNldEZvY3VzZWQodHJ1ZSk7XHJcbiAgICBzb2NrZXQuZW1pdChcInR5cGluZ1wiLCB7IHVzZXI6IG5hbWUsIHN0YXR1czogXCJ0eXBpbmdcIiB9KTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcclxuICAgIHNldEZvY3VzZWQoZmFsc2UpO1xyXG4gICAgc29ja2V0LmVtaXQoXCJ0eXBpbmdcIiwgeyB1c2VyOiBuYW1lLCBzdGF0dXM6IFwiTm90IHR5cGluZ1wiIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgW2lzVHlwaW5nLCBzZXRpc1R5cGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vSW5wdXRSZWZcclxuICBjb25zdCBuZXdNZXNzYWdlUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XHJcbiAgY29uc3QgbWVzc2FnZUVuZFJlZiA9IHVzZVJlZjxudWxsIHwgSFRNTERpdkVsZW1lbnQ+KG51bGwpOyAvL0VtcHR5IERpdiBpbiBUaGUgRW5kIE9mIHRoZSBNZXNzYWdlcyBDb250YWluZXIgZm9yIGF1dG8gc2Nyb2xsIHRvIGxhc3QgTWVzc2FnZS5cclxuXHJcbiAgLy9GaWxsaW5nIFRoZSBNZXNzYWdlIFN0YXRlXHJcbiAgY29uc3QgSGFuZGxlTXNnSW5wdXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vRnVuY3Rpb24gZm9yIFNlbmRpbmcgTWVzc2FnZVxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IE1zZ09iaiA9IHtcclxuICAgICAgbXNnOiBtZXNzYWdlLFxyXG4gICAgICB0aW1lOlxyXG4gICAgICAgIG5ldyBEYXRlKERhdGUubm93KCkpLmdldEhvdXJzKCkgK1xyXG4gICAgICAgIFwiOlwiICtcclxuICAgICAgICBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRNaW51dGVzKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChtZXNzYWdlICE9PSBcIlwiKSB7XHJcbiAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VcIiwgTXNnT2JqLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgICAgICBuZXdNZXNzYWdlUmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0hhbmRsZUlzVHlwaW5nXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNvY2tldC5vbihcIlVzZXJJc1R5cGluZ1wiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gZGF0YTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gXCJ0eXBpbmdcIikge1xyXG4gICAgICAgIHNldGlzVHlwaW5nKHRydWUpO1xyXG4gICAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywge31dKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IFwiTm90IHR5cGluZ1wiKSB7XHJcbiAgICAgICAgc2V0aXNUeXBpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoXCJVc2VySXNUeXBpbmdcIik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9TdGF5SW5WaWV3XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG1lc3NhZ2VFbmRSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgY29uc3QgR2V0VXNlckJ5TmFtZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKCh1c2VyKSA9PiB7XHJcbiAgICAgIHJldHVybiB1c2VyLm5hbWUgPT09IG5hbWU7XHJcbiAgICB9KTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy9SaWdodENvbnRhaW5lckhhbmRsZXNcclxuICBjb25zdCBIYW5kbGVDaGF0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRDaGF0Qm94U2hvdyh0cnVlKTtcclxuICAgIHNldFBhcnRpY2lwYW50c1Nob3coZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgSGFuZGxlUGFydGljaXBhbnRzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRDaGF0Qm94U2hvdyhmYWxzZSk7XHJcbiAgICBzZXRQYXJ0aWNpcGFudHNTaG93KHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmlnaHRDaGF0PlxyXG4gICAgICB7Q2hhdENvbnRhaW5lclNob3cgJiYgKFxyXG4gICAgICAgIDxDaGF0X0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3dpdGNoXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtIENoYXQgJHtDaGF0Qm94U2hvdyAmJiBcIkFjdGlmXCJ9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtIYW5kbGVDaGF0Q2xpY2t9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2hhdEljb24gY2xhc3NOYW1lPVwiSWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVGl0bGVcIj5DaGF0PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtIFBhcnRpY2lwYW50cyAke1BhcnRpY2lwYW50c1Nob3cgJiYgXCJBY3RpZlwifWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17SGFuZGxlUGFydGljaXBhbnRzQ2xpY2t9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UGVvcGxlSWNvbiBjbGFzc05hbWU9XCJJY29uXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUaXRsZVwiPlBhcnRpY2lwYW50cyAoe3VzZXJzLmxlbmd0aH0pPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtQYXJ0aWNpcGFudHNTaG93ICYmIChcclxuICAgICAgICAgICAgPFBhcnRpY2lwYW50cz5cclxuICAgICAgICAgICAgICB7dXNlcnMubWFwKCh1c2VyLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUGFydGljaXBhbnRcIiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCguL0Fzc2V0cy9GYWNlcy8ke3VzZXIuYXZhdGFyfS5wbmcpYCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLm5hbWUgPT09IG5hbWUgPyBcInlvdVwiIDogdXNlci5uYW1lfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJVc2VyU2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxLZXlib2FyZFZvaWNlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZGVvY2FtT2ZmSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9QYXJ0aWNpcGFudHM+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtDaGF0Qm94U2hvdyAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPE1lc3NhZ2VzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlck5hbWUgPSBtc2cudXNlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IE1zZ1NlbmRlcjogYW55ID0gR2V0VXNlckJ5TmFtZSh1c2VyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGF2YXRhcjogYW55ID0gTXNnU2VuZGVyLmF2YXRhcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bXNnLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lPXttc2cudGltZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17bXNnLnVzZXIgfHwgbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudFVzZXJUaGVTZW5kZXI9e21zZy51c2VyID09PSBuYW1lID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNBZG1pbj17bXNnLnVzZXIgPT09IFwiYWRtaW5cIiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHBpYz17YXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNUeXBpbmc9e2lzVHlwaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXttZXNzYWdlRW5kUmVmfSAvPlxyXG4gICAgICAgICAgICAgIDwvTWVzc2FnZXNDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxDaGF0Qm94PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIklucHV0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIE1lc3NhZ2UgSGVyZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtIYW5kbGVNc2dJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgcmVmPXtuZXdNZXNzYWdlUmVmfVxyXG4gICAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQua2V5ID09PSBcIkVudGVyXCIgPyBzZW5kTWVzc2FnZShldmVudCkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17b25Gb2N1c31cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtvbkJsdXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJY29uXCIgb25DbGljaz17c2VuZE1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICA8U2VuZEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2hhdEJveD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2hhdF9Db250YWluZXI+XHJcbiAgICAgICl9XHJcbiAgICA8L1JpZ2h0Q2hhdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdENvbnRhaW5lcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJVc2VTb2NrZXRzIiwiQ2hhdF9Db250YWluZXIiLCJDaGF0Qm94IiwiTWVzc2FnZXNDb250YWluZXIiLCJSaWdodENoYXQiLCJQYXJ0aWNpcGFudHMiLCJNZXNzYWdlIiwiU2VuZEljb24iLCJDaGF0SWNvbiIsIlBlb3BsZUljb24iLCJLZXlib2FyZFZvaWNlSWNvbiIsIlZpZGVvY2FtT2ZmSWNvbiIsIkNoYXRDb250YWluZXIiLCJzb2NrZXQiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJuYW1lIiwidXNlcnMiLCJzZXRNZXNzYWdlIiwiQ2hhdENvbnRhaW5lclNob3ciLCJzZXRNZXNzYWdlcyIsIlBhcnRpY2lwYW50c1Nob3ciLCJzZXRQYXJ0aWNpcGFudHNTaG93IiwiQ2hhdEJveFNob3ciLCJzZXRDaGF0Qm94U2hvdyIsImZvY3VzZWQiLCJzZXRGb2N1c2VkIiwib25Gb2N1cyIsImVtaXQiLCJ1c2VyIiwic3RhdHVzIiwib25CbHVyIiwiaXNUeXBpbmciLCJzZXRpc1R5cGluZyIsIm5ld01lc3NhZ2VSZWYiLCJtZXNzYWdlRW5kUmVmIiwiSGFuZGxlTXNnSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJNc2dPYmoiLCJtc2ciLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImN1cnJlbnQiLCJvbiIsImRhdGEiLCJyZW1vdmVMaXN0ZW5lciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJHZXRVc2VyQnlOYW1lIiwiZmluZCIsIkhhbmRsZUNoYXRDbGljayIsIkhhbmRsZVBhcnRpY2lwYW50c0NsaWNrIiwibGVuZ3RoIiwibWFwIiwia2V5IiwiYmFja2dyb3VuZEltYWdlIiwiYXZhdGFyIiwidXNlck5hbWUiLCJNc2dTZW5kZXIiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Room/Container/chatContainer/ChatContainer.tsx\n"));

/***/ })

});
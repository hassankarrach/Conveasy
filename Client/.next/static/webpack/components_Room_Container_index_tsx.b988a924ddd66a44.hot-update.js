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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/Socket.Context */ \"./contexts/Socket.Context.tsx\");\n/* harmony import */ var _components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Room/Container/chatContainer/Container.styled */ \"./components/Room/Container/chatContainer/Container.styled.ts\");\n/* harmony import */ var _components_Room_Container_chatContainer_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Room/Container/chatContainer/Message */ \"./components/Room/Container/chatContainer/Message/index.tsx\");\n/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Send */ \"./node_modules/@mui/icons-material/Send.js\");\n/* harmony import */ var _mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Chat */ \"./node_modules/@mui/icons-material/Chat.js\");\n/* harmony import */ var _mui_icons_material_People__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/People */ \"./node_modules/@mui/icons-material/People.js\");\n/* harmony import */ var _mui_icons_material_KeyboardVoice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/KeyboardVoice */ \"./node_modules/@mui/icons-material/KeyboardVoice.js\");\n/* harmony import */ var _mui_icons_material_VideocamOff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/VideocamOff */ \"./node_modules/@mui/icons-material/VideocamOff.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\Setup Game\\\\Desktop\\\\VideoChat\\\\Client\\\\components\\\\Room\\\\Container\\\\chatContainer\\\\ChatContainer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ChatContainer = function ChatContainer() {\n  _s();\n\n  //SocetContext\n  var _UseSockets = (0,contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_1__.UseSockets)(),\n      socket = _UseSockets.socket,\n      message = _UseSockets.message,\n      messages = _UseSockets.messages,\n      name = _UseSockets.name,\n      users = _UseSockets.users,\n      setMessage = _UseSockets.setMessage,\n      ChatContainerShow = _UseSockets.ChatContainerShow,\n      setMessages = _UseSockets.setMessages;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      ParticipantsShow = _useState[0],\n      setParticipantsShow = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      ChatBoxShow = _useState2[0],\n      setChatBoxShow = _useState2[1]; //TypingStats\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      focused = _useState3[0],\n      setFocused = _useState3[1];\n\n  var onFocus = function onFocus() {\n    setFocused(true);\n    socket.emit(\"typing\", {\n      user: name,\n      status: \"typing\"\n    });\n  };\n\n  var onBlur = function onBlur() {\n    setFocused(false);\n    socket.emit(\"typing\", {\n      user: name,\n      status: \"Not typing\"\n    });\n  };\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isTyping = _useState4[0],\n      setisTyping = _useState4[1]; //InputRef\n\n\n  var newMessageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var messageEndRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); //Empty Div in The End Of the Messages Container for auto scroll to last Message.\n  //Filling The Message State\n\n  var HandleMsgInput = function HandleMsgInput(event) {\n    setMessage(event.target.value);\n  }; //Function for Sending Message\n\n\n  var sendMessage = function sendMessage(e) {\n    e.preventDefault();\n    var MsgObj = {\n      msg: message,\n      time: new Date(Date.now()).getHours() + \":\" + new Date(Date.now()).getMinutes()\n    };\n\n    if (message !== \"\") {\n      socket.emit(\"sendMessage\", MsgObj, function () {\n        setMessage(\"\");\n        newMessageRef.current.value = \"\";\n      });\n    }\n  }; //HandleIsTyping\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    socket.on(\"UserIsTyping\", function (data) {\n      var status = data.status;\n\n      if (status === \"typing\") {\n        setisTyping(true);\n      } else if (status === \"Not typing\") {\n        setisTyping(false);\n      }\n    });\n    return function () {\n      socket.removeListener(\"UserIsTyping\");\n    };\n  }, []); //StayInView\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var _messageEndRef$curren;\n\n    (_messageEndRef$curren = messageEndRef.current) === null || _messageEndRef$curren === void 0 ? void 0 : _messageEndRef$curren.scrollIntoView({\n      behavior: \"smooth\"\n    });\n  }, [messages]);\n\n  var GetUserByName = function GetUserByName(name) {\n    var user = users.find(function (user) {\n      return user.name === name;\n    });\n\n    if (user) {\n      return user;\n    } else {\n      return \"\";\n    }\n  }; //RightContainerHandles\n\n\n  var HandleChatClick = function HandleChatClick() {\n    setChatBoxShow(true);\n    setParticipantsShow(false);\n  };\n\n  var HandleParticipantsClick = function HandleParticipantsClick() {\n    setChatBoxShow(false);\n    setParticipantsShow(true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__.RightChat, {\n    children: ChatContainerShow && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__.Chat_Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"Switch\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"item Chat \".concat(ChatBoxShow && \"Actif\"),\n          onClick: HandleChatClick,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"Icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n            className: \"Title\",\n            children: \"Chat\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"item Participants \".concat(ParticipantsShow && \"Actif\"),\n          onClick: HandleParticipantsClick,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_People__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            className: \"Icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n            className: \"Title\",\n            children: [\"Participants (\", users.length, \")\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 11\n      }, _this), ParticipantsShow && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__.Participants, {\n        children: users.map(function (user, key) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"Participant\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              className: \"Avatar\",\n              style: {\n                backgroundImage: \"url(./Assets/Faces/\".concat(user.avatar, \".png)\")\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 144,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n              children: user.name === name ? \"you\" : user.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 150,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              className: \"UserSets\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n                className: \"Icon\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_KeyboardVoice__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 154,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 153,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n                className: \"Icon\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_VideocamOff__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 157,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 156,\n                columnNumber: 23\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 152,\n              columnNumber: 21\n            }, _this)]\n          }, key, true, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 19\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 13\n      }, _this), ChatBoxShow && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__.MessagesContainer, {\n          children: [messages.map(function (msg, key) {\n            var userName = msg.user;\n            var MsgSender = GetUserByName(userName);\n            var avatar = MsgSender.avatar;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              content: msg.text,\n              time: msg.time || \"\",\n              from: msg.user || name,\n              isCurrentUserTheSender: msg.user === name ? true : false,\n              isAdmin: msg.user === \"admin\" ? true : false,\n              pic: avatar\n            }, key, false, {\n              fileName: _jsxFileName,\n              lineNumber: 176,\n              columnNumber: 21\n            }, _this);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            ref: messageEndRef\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 187,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 168,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__.ChatBox, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            className: \"Input\",\n            placeholder: \"Type Message Here...\",\n            onChange: HandleMsgInput,\n            ref: newMessageRef,\n            onKeyPress: function onKeyPress(event) {\n              return event.key === \"Enter\" ? sendMessage(event) : null;\n            },\n            onFocus: onFocus,\n            onBlur: onBlur\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 191,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"Icon\",\n            onClick: sendMessage,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 203,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 202,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 190,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 118,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ChatContainer, \"nshz0DspJ6TkOaWCsfVak9X/F9g=\");\n\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChatContainer\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL2NoYXRDb250YWluZXIvQ2hhdENvbnRhaW5lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFFQSxJQUFNZ0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0VBQUE7O0VBQzFCO0VBQ0Esa0JBU0laLG1FQUFVLEVBVGQ7RUFBQSxJQUNFYSxNQURGLGVBQ0VBLE1BREY7RUFBQSxJQUVFQyxPQUZGLGVBRUVBLE9BRkY7RUFBQSxJQUdFQyxRQUhGLGVBR0VBLFFBSEY7RUFBQSxJQUlFQyxJQUpGLGVBSUVBLElBSkY7RUFBQSxJQUtFQyxLQUxGLGVBS0VBLEtBTEY7RUFBQSxJQU1FQyxVQU5GLGVBTUVBLFVBTkY7RUFBQSxJQU9FQyxpQkFQRixlQU9FQSxpQkFQRjtFQUFBLElBUUVDLFdBUkYsZUFRRUEsV0FSRjs7RUFXQSxnQkFBZ0R2QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEQ7RUFBQSxJQUFPd0IsZ0JBQVA7RUFBQSxJQUF5QkMsbUJBQXpCOztFQUNBLGlCQUFzQ3pCLCtDQUFRLENBQUMsSUFBRCxDQUE5QztFQUFBLElBQU8wQixXQUFQO0VBQUEsSUFBb0JDLGNBQXBCLGlCQWQwQixDQWUxQjs7O0VBQ0EsaUJBQThCM0IsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0VBQUEsSUFBTzRCLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtJQUNwQkQsVUFBVSxDQUFDLElBQUQsQ0FBVjtJQUNBYixNQUFNLENBQUNlLElBQVAsQ0FBWSxRQUFaLEVBQXNCO01BQUVDLElBQUksRUFBRWIsSUFBUjtNQUFjYyxNQUFNLEVBQUU7SUFBdEIsQ0FBdEI7RUFDRCxDQUhEOztFQUlBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07SUFDbkJMLFVBQVUs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b25lbnRzL1Jvb20vQ29udGFpbmVyL2NoYXRDb250YWluZXIvQ2hhdENvbnRhaW5lci50c3g/NjY2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZVNvY2tldHMgfSBmcm9tIFwiY29udGV4dHMvU29ja2V0LkNvbnRleHRcIjtcclxuaW1wb3J0IHtcclxuICBDaGF0X0NvbnRhaW5lcixcclxuICBDaGF0Qm94LFxyXG4gIE1lc3NhZ2VzQ29udGFpbmVyLFxyXG4gIFJpZ2h0Q2hhdCxcclxuICBQYXJ0aWNpcGFudHMsXHJcbn0gZnJvbSBcIkBjb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL2NoYXRDb250YWluZXIvQ29udGFpbmVyLnN0eWxlZFwiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiQGNvbXBvbmVudHMvUm9vbS9Db250YWluZXIvY2hhdENvbnRhaW5lci9NZXNzYWdlXCI7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZW5kXCI7XHJcbmltcG9ydCBDaGF0SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DaGF0XCI7XHJcbmltcG9ydCBQZW9wbGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1Blb3BsZVwiO1xyXG5pbXBvcnQgTWljT2ZmSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9NaWNPZmZcIjtcclxuaW1wb3J0IEtleWJvYXJkVm9pY2VJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkVm9pY2VcIjtcclxuaW1wb3J0IFZpZGVvY2FtSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9WaWRlb2NhbVwiO1xyXG5pbXBvcnQgVmlkZW9jYW1PZmZJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1ZpZGVvY2FtT2ZmXCI7XHJcblxyXG5jb25zdCBDaGF0Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIC8vU29jZXRDb250ZXh0XHJcbiAgY29uc3Qge1xyXG4gICAgc29ja2V0LFxyXG4gICAgbWVzc2FnZSxcclxuICAgIG1lc3NhZ2VzLFxyXG4gICAgbmFtZSxcclxuICAgIHVzZXJzLFxyXG4gICAgc2V0TWVzc2FnZSxcclxuICAgIENoYXRDb250YWluZXJTaG93LFxyXG4gICAgc2V0TWVzc2FnZXMsXHJcbiAgfSA9IFVzZVNvY2tldHMoKTtcclxuXHJcbiAgY29uc3QgW1BhcnRpY2lwYW50c1Nob3csIHNldFBhcnRpY2lwYW50c1Nob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtDaGF0Qm94U2hvdywgc2V0Q2hhdEJveFNob3ddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgLy9UeXBpbmdTdGF0c1xyXG4gIGNvbnN0IFtmb2N1c2VkLCBzZXRGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkZvY3VzID0gKCkgPT4ge1xyXG4gICAgc2V0Rm9jdXNlZCh0cnVlKTtcclxuICAgIHNvY2tldC5lbWl0KFwidHlwaW5nXCIsIHsgdXNlcjogbmFtZSwgc3RhdHVzOiBcInR5cGluZ1wiIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xyXG4gICAgc2V0Rm9jdXNlZChmYWxzZSk7XHJcbiAgICBzb2NrZXQuZW1pdChcInR5cGluZ1wiLCB7IHVzZXI6IG5hbWUsIHN0YXR1czogXCJOb3QgdHlwaW5nXCIgfSk7XHJcbiAgfTtcclxuICBjb25zdCBbaXNUeXBpbmcsIHNldGlzVHlwaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy9JbnB1dFJlZlxyXG4gIGNvbnN0IG5ld01lc3NhZ2VSZWYgPSB1c2VSZWY8YW55PihudWxsKTtcclxuICBjb25zdCBtZXNzYWdlRW5kUmVmID0gdXNlUmVmPG51bGwgfCBIVE1MRGl2RWxlbWVudD4obnVsbCk7IC8vRW1wdHkgRGl2IGluIFRoZSBFbmQgT2YgdGhlIE1lc3NhZ2VzIENvbnRhaW5lciBmb3IgYXV0byBzY3JvbGwgdG8gbGFzdCBNZXNzYWdlLlxyXG5cclxuICAvL0ZpbGxpbmcgVGhlIE1lc3NhZ2UgU3RhdGVcclxuICBjb25zdCBIYW5kbGVNc2dJbnB1dCA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgLy9GdW5jdGlvbiBmb3IgU2VuZGluZyBNZXNzYWdlXHJcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgTXNnT2JqID0ge1xyXG4gICAgICBtc2c6IG1lc3NhZ2UsXHJcbiAgICAgIHRpbWU6XHJcbiAgICAgICAgbmV3IERhdGUoRGF0ZS5ub3coKSkuZ2V0SG91cnMoKSArXHJcbiAgICAgICAgXCI6XCIgK1xyXG4gICAgICAgIG5ldyBEYXRlKERhdGUubm93KCkpLmdldE1pbnV0ZXMoKSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKG1lc3NhZ2UgIT09IFwiXCIpIHtcclxuICAgICAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZVwiLCBNc2dPYmosICgpID0+IHtcclxuICAgICAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgICAgIG5ld01lc3NhZ2VSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vSGFuZGxlSXNUeXBpbmdcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uKFwiVXNlcklzVHlwaW5nXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBkYXRhO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSBcInR5cGluZ1wiKSB7XHJcbiAgICAgICAgc2V0aXNUeXBpbmcodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBcIk5vdCB0eXBpbmdcIikge1xyXG4gICAgICAgIHNldGlzVHlwaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc29ja2V0LnJlbW92ZUxpc3RlbmVyKFwiVXNlcklzVHlwaW5nXCIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vU3RheUluVmlld1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBtZXNzYWdlRW5kUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfSwgW21lc3NhZ2VzXSk7XHJcblxyXG4gIGNvbnN0IEdldFVzZXJCeU5hbWUgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCgodXNlcikgPT4ge1xyXG4gICAgICByZXR1cm4gdXNlci5uYW1lID09PSBuYW1lO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICByZXR1cm4gdXNlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vUmlnaHRDb250YWluZXJIYW5kbGVzXHJcbiAgY29uc3QgSGFuZGxlQ2hhdENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0Q2hhdEJveFNob3codHJ1ZSk7XHJcbiAgICBzZXRQYXJ0aWNpcGFudHNTaG93KGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IEhhbmRsZVBhcnRpY2lwYW50c0NsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0Q2hhdEJveFNob3coZmFsc2UpO1xyXG4gICAgc2V0UGFydGljaXBhbnRzU2hvdyh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJpZ2h0Q2hhdD5cclxuICAgICAge0NoYXRDb250YWluZXJTaG93ICYmIChcclxuICAgICAgICA8Q2hhdF9Db250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN3aXRjaFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbSBDaGF0ICR7Q2hhdEJveFNob3cgJiYgXCJBY3RpZlwifWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17SGFuZGxlQ2hhdENsaWNrfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENoYXRJY29uIGNsYXNzTmFtZT1cIkljb25cIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRpdGxlXCI+Q2hhdDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbSBQYXJ0aWNpcGFudHMgJHtQYXJ0aWNpcGFudHNTaG93ICYmIFwiQWN0aWZcIn1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e0hhbmRsZVBhcnRpY2lwYW50c0NsaWNrfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFBlb3BsZUljb24gY2xhc3NOYW1lPVwiSWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVGl0bGVcIj5QYXJ0aWNpcGFudHMgKHt1c2Vycy5sZW5ndGh9KTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7UGFydGljaXBhbnRzU2hvdyAmJiAoXHJcbiAgICAgICAgICAgIDxQYXJ0aWNpcGFudHM+XHJcbiAgICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlciwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlBhcnRpY2lwYW50XCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoLi9Bc3NldHMvRmFjZXMvJHt1c2VyLmF2YXRhcn0ucG5nKWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dXNlci5uYW1lID09PSBuYW1lID8gXCJ5b3VcIiA6IHVzZXIubmFtZX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVXNlclNldHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8S2V5Ym9hcmRWb2ljZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWRlb2NhbU9mZkljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvUGFydGljaXBhbnRzPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7Q2hhdEJveFNob3cgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxNZXNzYWdlc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZywga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lID0gbXNnLnVzZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBNc2dTZW5kZXI6IGFueSA9IEdldFVzZXJCeU5hbWUodXNlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBhdmF0YXI6IGFueSA9IE1zZ1NlbmRlci5hdmF0YXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e21zZy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGltZT17bXNnLnRpbWUgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e21zZy51c2VyIHx8IG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnRVc2VyVGhlU2VuZGVyPXttc2cudXNlciA9PT0gbmFtZSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzQWRtaW49e21zZy51c2VyID09PSBcImFkbWluXCIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwaWM9e2F2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17bWVzc2FnZUVuZFJlZn0gLz5cclxuICAgICAgICAgICAgICA8L01lc3NhZ2VzQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8Q2hhdEJveD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBNZXNzYWdlIEhlcmUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17SGFuZGxlTXNnSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17bmV3TWVzc2FnZVJlZn1cclxuICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmtleSA9PT0gXCJFbnRlclwiID8gc2VuZE1lc3NhZ2UoZXZlbnQpIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSWNvblwiIG9uQ2xpY2s9e3NlbmRNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgPFNlbmRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NoYXRCb3g+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NoYXRfQ29udGFpbmVyPlxyXG4gICAgICApfVxyXG4gICAgPC9SaWdodENoYXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRDb250YWluZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiVXNlU29ja2V0cyIsIkNoYXRfQ29udGFpbmVyIiwiQ2hhdEJveCIsIk1lc3NhZ2VzQ29udGFpbmVyIiwiUmlnaHRDaGF0IiwiUGFydGljaXBhbnRzIiwiTWVzc2FnZSIsIlNlbmRJY29uIiwiQ2hhdEljb24iLCJQZW9wbGVJY29uIiwiS2V5Ym9hcmRWb2ljZUljb24iLCJWaWRlb2NhbU9mZkljb24iLCJDaGF0Q29udGFpbmVyIiwic29ja2V0IiwibWVzc2FnZSIsIm1lc3NhZ2VzIiwibmFtZSIsInVzZXJzIiwic2V0TWVzc2FnZSIsIkNoYXRDb250YWluZXJTaG93Iiwic2V0TWVzc2FnZXMiLCJQYXJ0aWNpcGFudHNTaG93Iiwic2V0UGFydGljaXBhbnRzU2hvdyIsIkNoYXRCb3hTaG93Iiwic2V0Q2hhdEJveFNob3ciLCJmb2N1c2VkIiwic2V0Rm9jdXNlZCIsIm9uRm9jdXMiLCJlbWl0IiwidXNlciIsInN0YXR1cyIsIm9uQmx1ciIsImlzVHlwaW5nIiwic2V0aXNUeXBpbmciLCJuZXdNZXNzYWdlUmVmIiwibWVzc2FnZUVuZFJlZiIsIkhhbmRsZU1zZ0lucHV0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiTXNnT2JqIiwibXNnIiwidGltZSIsIkRhdGUiLCJub3ciLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJjdXJyZW50Iiwib24iLCJkYXRhIiwicmVtb3ZlTGlzdGVuZXIiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiR2V0VXNlckJ5TmFtZSIsImZpbmQiLCJIYW5kbGVDaGF0Q2xpY2siLCJIYW5kbGVQYXJ0aWNpcGFudHNDbGljayIsImxlbmd0aCIsIm1hcCIsImtleSIsImJhY2tncm91bmRJbWFnZSIsImF2YXRhciIsInVzZXJOYW1lIiwiTXNnU2VuZGVyIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Room/Container/chatContainer/ChatContainer.tsx\n"));

/***/ })

});
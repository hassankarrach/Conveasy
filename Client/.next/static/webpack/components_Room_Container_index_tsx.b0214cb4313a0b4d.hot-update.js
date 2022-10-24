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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/Socket.Context */ \"./contexts/Socket.Context.tsx\");\n/* harmony import */ var _components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Room/Container/chatContainer/Container.styled */ \"./components/Room/Container/chatContainer/Container.styled.ts\");\n/* harmony import */ var _components_Room_Container_chatContainer_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Room/Container/chatContainer/Message */ \"./components/Room/Container/chatContainer/Message/index.tsx\");\n/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Send */ \"./node_modules/@mui/icons-material/Send.js\");\n/* harmony import */ var _mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Chat */ \"./node_modules/@mui/icons-material/Chat.js\");\n/* harmony import */ var _mui_icons_material_People__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/People */ \"./node_modules/@mui/icons-material/People.js\");\n/* harmony import */ var _mui_icons_material_KeyboardVoice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/KeyboardVoice */ \"./node_modules/@mui/icons-material/KeyboardVoice.js\");\n/* harmony import */ var _mui_icons_material_VideocamOff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/VideocamOff */ \"./node_modules/@mui/icons-material/VideocamOff.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\Setup Game\\\\Desktop\\\\VideoChat\\\\Client\\\\components\\\\Room\\\\Container\\\\chatContainer\\\\ChatContainer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ChatContainer = function ChatContainer() {\n  _s();\n\n  //SocetContext\n  var _UseSockets = (0,contexts_Socket_Context__WEBPACK_IMPORTED_MODULE_1__.UseSockets)(),\n      socket = _UseSockets.socket,\n      message = _UseSockets.message,\n      messages = _UseSockets.messages,\n      name = _UseSockets.name,\n      users = _UseSockets.users,\n      setMessage = _UseSockets.setMessage,\n      ChatContainerShow = _UseSockets.ChatContainerShow;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      ParticipantsShow = _useState[0],\n      setParticipantsShow = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      ChatBoxShow = _useState2[0],\n      setChatBoxShow = _useState2[1]; //TypingStats\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      focused = _useState3[0],\n      setFocused = _useState3[1];\n\n  var onFocus = function onFocus() {\n    setFocused(true);\n    socket.emit(\"typing\", {\n      user: name,\n      status: \"typing\"\n    });\n  };\n\n  var onBlur = function onBlur() {\n    setFocused(false);\n    socket.emit(\"typing\", {\n      user: name,\n      status: \"Not typing\"\n    });\n  }; // const [isTyping, setisTyping] = useState(false);\n  //InputRef\n\n\n  var newMessageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var messageEndRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); //Empty Div in The End Of the Messages Container for auto scroll to last Message.\n  //Filling The Message State\n\n  var HandleMsgInput = function HandleMsgInput(event) {\n    setMessage(event.target.value);\n  }; //Function for Sending Message\n\n\n  var sendMessage = function sendMessage(e) {\n    e.preventDefault();\n    var MsgObj = {\n      msg: message,\n      time: new Date(Date.now()).getHours() + \":\" + new Date(Date.now()).getMinutes()\n    };\n\n    if (message !== \"\") {\n      socket.emit(\"sendMessage\", MsgObj, function () {\n        setMessage(\"\");\n        newMessageRef.current.value = \"\";\n      });\n    }\n  }; //HandleIsTyping\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    socket.on(\"UserIsTyping\", function (data) {\n      console.log(data);\n    });\n    return function () {\n      socket.removeListener(\"UserIsTyping\");\n    };\n  }, []); //StayInView\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var _messageEndRef$curren;\n\n    (_messageEndRef$curren = messageEndRef.current) === null || _messageEndRef$curren === void 0 ? void 0 : _messageEndRef$curren.scrollIntoView({\n      behavior: \"smooth\"\n    });\n  }, [messages]);\n\n  var GetUserByName = function GetUserByName(name) {\n    var user = users.find(function (user) {\n      return user.name === name;\n    });\n\n    if (user) {\n      return user;\n    } else {\n      return \"\";\n    }\n  }; //RightContainerHandles\n\n\n  var HandleChatClick = function HandleChatClick() {\n    setChatBoxShow(true);\n    setParticipantsShow(false);\n  };\n\n  var HandleParticipantsClick = function HandleParticipantsClick() {\n    setChatBoxShow(false);\n    setParticipantsShow(true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__.RightChat, {\n    children: ChatContainerShow && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__.Chat_Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"Switch\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"item Chat \".concat(ChatBoxShow && \"Actif\"),\n          onClick: HandleChatClick,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"Icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n            className: \"Title\",\n            children: \"Chat\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"item Participants \".concat(ParticipantsShow && \"Actif\"),\n          onClick: HandleParticipantsClick,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_People__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            className: \"Icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n            className: \"Title\",\n            children: [\"Participants (\", users.length, \")\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 11\n      }, _this), ParticipantsShow && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__.Participants, {\n        children: users.map(function (user, key) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"Participant\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              className: \"Avatar\",\n              style: {\n                backgroundImage: \"url(./Assets/Faces/\".concat(user.avatar, \".png)\")\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n              children: user.name === name ? \"you\" : user.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 144,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n              className: \"UserSets\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n                className: \"Icon\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_KeyboardVoice__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 148,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 147,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n                className: \"Icon\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_VideocamOff__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 151,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 150,\n                columnNumber: 23\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 146,\n              columnNumber: 21\n            }, _this)]\n          }, key, true, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 19\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 13\n      }, _this), ChatBoxShow && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__.MessagesContainer, {\n          children: [messages.map(function (msg, key) {\n            var userName = msg.user;\n            var MsgSender = GetUserByName(userName);\n            var avatar = MsgSender.avatar;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              content: msg.text,\n              time: msg.time || \"\",\n              from: msg.user || name,\n              isCurrentUserTheSender: msg.user === name ? true : false,\n              isAdmin: msg.user === \"admin\" ? true : false,\n              pic: avatar\n            }, key, false, {\n              fileName: _jsxFileName,\n              lineNumber: 170,\n              columnNumber: 21\n            }, _this);\n          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            ref: messageEndRef\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 181,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 162,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Room_Container_chatContainer_Container_styled__WEBPACK_IMPORTED_MODULE_2__.ChatBox, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            className: \"Input\",\n            placeholder: \"Type Message Here...\",\n            onChange: HandleMsgInput,\n            ref: newMessageRef,\n            onKeyPress: function onKeyPress(event) {\n              return event.key === \"Enter\" ? sendMessage(event) : null;\n            },\n            onFocus: onFocus,\n            onBlur: onBlur\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 185,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"Icon\",\n            onClick: sendMessage,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 197,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 196,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 184,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 112,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ChatContainer, \"HT/lqwCe0mwynVZKd8//aj4adfQ=\");\n\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChatContainer\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL2NoYXRDb250YWluZXIvQ2hhdENvbnRhaW5lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFFQSxJQUFNZ0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0VBQUE7O0VBQzFCO0VBQ0Esa0JBUUlaLG1FQUFVLEVBUmQ7RUFBQSxJQUNFYSxNQURGLGVBQ0VBLE1BREY7RUFBQSxJQUVFQyxPQUZGLGVBRUVBLE9BRkY7RUFBQSxJQUdFQyxRQUhGLGVBR0VBLFFBSEY7RUFBQSxJQUlFQyxJQUpGLGVBSUVBLElBSkY7RUFBQSxJQUtFQyxLQUxGLGVBS0VBLEtBTEY7RUFBQSxJQU1FQyxVQU5GLGVBTUVBLFVBTkY7RUFBQSxJQU9FQyxpQkFQRixlQU9FQSxpQkFQRjs7RUFVQSxnQkFBZ0R0QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEQ7RUFBQSxJQUFPdUIsZ0JBQVA7RUFBQSxJQUF5QkMsbUJBQXpCOztFQUNBLGlCQUFzQ3hCLCtDQUFRLENBQUMsSUFBRCxDQUE5QztFQUFBLElBQU95QixXQUFQO0VBQUEsSUFBb0JDLGNBQXBCLGlCQWIwQixDQWMxQjs7O0VBQ0EsaUJBQThCMUIsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0VBQUEsSUFBTzJCLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtJQUNwQkQsVUFBVSxDQUFDLElBQUQsQ0FBVjtJQUNBWixNQUFNLENBQUNjLElBQVAsQ0FBWSxRQUFaLEVBQXNCO01BQUVDLElBQUksRUFBRVosSUFBUjtNQUFjYSxNQUFNLEVBQUU7SUFBdEIsQ0FBdEI7RUFDRCxDQUhEOztFQUlBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07SUFDbkJMLFVBQVUsQ0FBQyxLQUFELENBQVY7SUFDQVosTUFBTSxD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QUU3QjtVQUFWO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FuQkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsZUF1QkUsOERBQUMsOEZBQUQ7VUFBQSx3QkFDRTtZQUNFLFNBQVMsRUFBQyxPQURaO1lBRUUsV0FBVyxFQUFDLHNCQUZkO1lBR0UsUUFBUSxFQUFFQyxjQUhaO1lBSUUsR0FBRyxFQUFFRixhQUpQO1lBS0UsVUFBVSxFQUFFLG9CQUFDRyxLQUFEO2NBQUEsT0FDVkEsS0FBSyxDQUFDMkIsR0FBTixLQUFjLE9BQWQsR0FBd0J4QixXQUFXLENBQUNILEtBQUQsQ0FBbkMsR0FBNkMsSUFEbkM7WUFBQSxDQUxkO1lBUUUsT0FBTyxFQUFFUixPQVJYO1lBU0UsTUFBTSxFQUFFSTtVQVRWO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FERixlQVlFO1lBQUssU0FBUyxFQUFDLE1BQWY7WUFBc0IsT0FBTyxFQUFFTyxXQUEvQjtZQUFBLHVCQUNFLDhEQUFDLGdFQUFEO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFERjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBWkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBdkJGO01BQUEsZ0JBL0NKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUZKO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQStGRCxDQTNMRDs7R0FBTXpCOztLQUFBQTtBQTZMTiwrREFBZUEsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL2NoYXRDb250YWluZXIvQ2hhdENvbnRhaW5lci50c3g/NjY2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZVNvY2tldHMgfSBmcm9tIFwiY29udGV4dHMvU29ja2V0LkNvbnRleHRcIjtcclxuaW1wb3J0IHtcclxuICBDaGF0X0NvbnRhaW5lcixcclxuICBDaGF0Qm94LFxyXG4gIE1lc3NhZ2VzQ29udGFpbmVyLFxyXG4gIFJpZ2h0Q2hhdCxcclxuICBQYXJ0aWNpcGFudHMsXHJcbn0gZnJvbSBcIkBjb21wb25lbnRzL1Jvb20vQ29udGFpbmVyL2NoYXRDb250YWluZXIvQ29udGFpbmVyLnN0eWxlZFwiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiQGNvbXBvbmVudHMvUm9vbS9Db250YWluZXIvY2hhdENvbnRhaW5lci9NZXNzYWdlXCI7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZW5kXCI7XHJcbmltcG9ydCBDaGF0SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DaGF0XCI7XHJcbmltcG9ydCBQZW9wbGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1Blb3BsZVwiO1xyXG5pbXBvcnQgTWljT2ZmSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9NaWNPZmZcIjtcclxuaW1wb3J0IEtleWJvYXJkVm9pY2VJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkVm9pY2VcIjtcclxuaW1wb3J0IFZpZGVvY2FtSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9WaWRlb2NhbVwiO1xyXG5pbXBvcnQgVmlkZW9jYW1PZmZJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1ZpZGVvY2FtT2ZmXCI7XHJcblxyXG5jb25zdCBDaGF0Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIC8vU29jZXRDb250ZXh0XHJcbiAgY29uc3Qge1xyXG4gICAgc29ja2V0LFxyXG4gICAgbWVzc2FnZSxcclxuICAgIG1lc3NhZ2VzLFxyXG4gICAgbmFtZSxcclxuICAgIHVzZXJzLFxyXG4gICAgc2V0TWVzc2FnZSxcclxuICAgIENoYXRDb250YWluZXJTaG93LFxyXG4gIH0gPSBVc2VTb2NrZXRzKCk7XHJcblxyXG4gIGNvbnN0IFtQYXJ0aWNpcGFudHNTaG93LCBzZXRQYXJ0aWNpcGFudHNTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbQ2hhdEJveFNob3csIHNldENoYXRCb3hTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIC8vVHlwaW5nU3RhdHNcclxuICBjb25zdCBbZm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25Gb2N1cyA9ICgpID0+IHtcclxuICAgIHNldEZvY3VzZWQodHJ1ZSk7XHJcbiAgICBzb2NrZXQuZW1pdChcInR5cGluZ1wiLCB7IHVzZXI6IG5hbWUsIHN0YXR1czogXCJ0eXBpbmdcIiB9KTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcclxuICAgIHNldEZvY3VzZWQoZmFsc2UpO1xyXG4gICAgc29ja2V0LmVtaXQoXCJ0eXBpbmdcIiwgeyB1c2VyOiBuYW1lLCBzdGF0dXM6IFwiTm90IHR5cGluZ1wiIH0pO1xyXG4gIH07XHJcbiAgLy8gY29uc3QgW2lzVHlwaW5nLCBzZXRpc1R5cGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vSW5wdXRSZWZcclxuICBjb25zdCBuZXdNZXNzYWdlUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XHJcbiAgY29uc3QgbWVzc2FnZUVuZFJlZiA9IHVzZVJlZjxudWxsIHwgSFRNTERpdkVsZW1lbnQ+KG51bGwpOyAvL0VtcHR5IERpdiBpbiBUaGUgRW5kIE9mIHRoZSBNZXNzYWdlcyBDb250YWluZXIgZm9yIGF1dG8gc2Nyb2xsIHRvIGxhc3QgTWVzc2FnZS5cclxuXHJcbiAgLy9GaWxsaW5nIFRoZSBNZXNzYWdlIFN0YXRlXHJcbiAgY29uc3QgSGFuZGxlTXNnSW5wdXQgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vRnVuY3Rpb24gZm9yIFNlbmRpbmcgTWVzc2FnZVxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IE1zZ09iaiA9IHtcclxuICAgICAgbXNnOiBtZXNzYWdlLFxyXG4gICAgICB0aW1lOlxyXG4gICAgICAgIG5ldyBEYXRlKERhdGUubm93KCkpLmdldEhvdXJzKCkgK1xyXG4gICAgICAgIFwiOlwiICtcclxuICAgICAgICBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRNaW51dGVzKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChtZXNzYWdlICE9PSBcIlwiKSB7XHJcbiAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VcIiwgTXNnT2JqLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShcIlwiKTtcclxuICAgICAgICBuZXdNZXNzYWdlUmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0hhbmRsZUlzVHlwaW5nXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNvY2tldC5vbihcIlVzZXJJc1R5cGluZ1wiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcihcIlVzZXJJc1R5cGluZ1wiKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICAvL1N0YXlJblZpZXdcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbWVzc2FnZUVuZFJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gIH0sIFttZXNzYWdlc10pO1xyXG5cclxuICBjb25zdCBHZXRVc2VyQnlOYW1lID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoKHVzZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHVzZXIubmFtZSA9PT0gbmFtZTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL1JpZ2h0Q29udGFpbmVySGFuZGxlc1xyXG4gIGNvbnN0IEhhbmRsZUNoYXRDbGljayA9ICgpID0+IHtcclxuICAgIHNldENoYXRCb3hTaG93KHRydWUpO1xyXG4gICAgc2V0UGFydGljaXBhbnRzU2hvdyhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBIYW5kbGVQYXJ0aWNpcGFudHNDbGljayA9ICgpID0+IHtcclxuICAgIHNldENoYXRCb3hTaG93KGZhbHNlKTtcclxuICAgIHNldFBhcnRpY2lwYW50c1Nob3codHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSaWdodENoYXQ+XHJcbiAgICAgIHtDaGF0Q29udGFpbmVyU2hvdyAmJiAoXHJcbiAgICAgICAgPENoYXRfQ29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTd2l0Y2hcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gQ2hhdCAke0NoYXRCb3hTaG93ICYmIFwiQWN0aWZcIn1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e0hhbmRsZUNoYXRDbGlja31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDaGF0SWNvbiBjbGFzc05hbWU9XCJJY29uXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUaXRsZVwiPkNoYXQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW0gUGFydGljaXBhbnRzICR7UGFydGljaXBhbnRzU2hvdyAmJiBcIkFjdGlmXCJ9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtIYW5kbGVQYXJ0aWNpcGFudHNDbGlja31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQZW9wbGVJY29uIGNsYXNzTmFtZT1cIkljb25cIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRpdGxlXCI+UGFydGljaXBhbnRzICh7dXNlcnMubGVuZ3RofSk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge1BhcnRpY2lwYW50c1Nob3cgJiYgKFxyXG4gICAgICAgICAgICA8UGFydGljaXBhbnRzPlxyXG4gICAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQYXJ0aWNpcGFudFwiIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC4vQXNzZXRzL0ZhY2VzLyR7dXNlci5hdmF0YXJ9LnBuZylgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIubmFtZSA9PT0gbmFtZSA/IFwieW91XCIgOiB1c2VyLm5hbWV9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlVzZXJTZXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEtleWJvYXJkVm9pY2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmlkZW9jYW1PZmZJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1BhcnRpY2lwYW50cz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge0NoYXRCb3hTaG93ICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8TWVzc2FnZXNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtc2csIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IG1zZy51c2VyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc3QgTXNnU2VuZGVyOiBhbnkgPSBHZXRVc2VyQnlOYW1lKHVzZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgYXZhdGFyOiBhbnkgPSBNc2dTZW5kZXIuYXZhdGFyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXttc2cudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e21zZy50aW1lIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXttc2cudXNlciB8fCBuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNDdXJyZW50VXNlclRoZVNlbmRlcj17bXNnLnVzZXIgPT09IG5hbWUgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluPXttc2cudXNlciA9PT0gXCJhZG1pblwiID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGljPXthdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e21lc3NhZ2VFbmRSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgPC9NZXNzYWdlc0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgPENoYXRCb3g+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgTWVzc2FnZSBIZXJlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0hhbmRsZU1zZ0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICByZWY9e25ld01lc3NhZ2VSZWZ9XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBldmVudC5rZXkgPT09IFwiRW50ZXJcIiA/IHNlbmRNZXNzYWdlKGV2ZW50KSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkljb25cIiBvbkNsaWNrPXtzZW5kTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxTZW5kSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DaGF0Qm94PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9DaGF0X0NvbnRhaW5lcj5cclxuICAgICAgKX1cclxuICAgIDwvUmlnaHRDaGF0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29udGFpbmVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlVzZVNvY2tldHMiLCJDaGF0X0NvbnRhaW5lciIsIkNoYXRCb3giLCJNZXNzYWdlc0NvbnRhaW5lciIsIlJpZ2h0Q2hhdCIsIlBhcnRpY2lwYW50cyIsIk1lc3NhZ2UiLCJTZW5kSWNvbiIsIkNoYXRJY29uIiwiUGVvcGxlSWNvbiIsIktleWJvYXJkVm9pY2VJY29uIiwiVmlkZW9jYW1PZmZJY29uIiwiQ2hhdENvbnRhaW5lciIsInNvY2tldCIsIm1lc3NhZ2UiLCJtZXNzYWdlcyIsIm5hbWUiLCJ1c2VycyIsInNldE1lc3NhZ2UiLCJDaGF0Q29udGFpbmVyU2hvdyIsIlBhcnRpY2lwYW50c1Nob3ciLCJzZXRQYXJ0aWNpcGFudHNTaG93IiwiQ2hhdEJveFNob3ciLCJzZXRDaGF0Qm94U2hvdyIsImZvY3VzZWQiLCJzZXRGb2N1c2VkIiwib25Gb2N1cyIsImVtaXQiLCJ1c2VyIiwic3RhdHVzIiwib25CbHVyIiwibmV3TWVzc2FnZVJlZiIsIm1lc3NhZ2VFbmRSZWYiLCJIYW5kbGVNc2dJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIk1zZ09iaiIsIm1zZyIsInRpbWUiLCJEYXRlIiwibm93IiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiY3VycmVudCIsIm9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVMaXN0ZW5lciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJHZXRVc2VyQnlOYW1lIiwiZmluZCIsIkhhbmRsZUNoYXRDbGljayIsIkhhbmRsZVBhcnRpY2lwYW50c0NsaWNrIiwibGVuZ3RoIiwibWFwIiwia2V5IiwiYmFja2dyb3VuZEltYWdlIiwiYXZhdGFyIiwidXNlck5hbWUiLCJNc2dTZW5kZXIiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Room/Container/chatContainer/ChatContainer.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/Loader/index.js":
/*!****************************************!*\
  !*** ./app/components/Loader/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-client)/./app/components/Loader/data.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.module.scss */ \"(app-client)/./app/components/Loader/Loader.module.scss\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Loader = ()=>{\n    _s();\n    const loaderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressNumberRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wordProgressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(wordProgressRef.current, {\n            yPercent: -80,\n            duration: 5,\n            ease: \"power2.inOut\"\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.from(progressRef.current, {\n            scaleX: 1\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: loaderRef,\n        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: progressRef,\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progress)\n                    }, void 0, false, {\n                        fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        ref: progressNumberRef,\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressNumber),\n                        children: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__words),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__overlay)\n                        }, void 0, false, {\n                            fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: wordProgressRef,\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wordsGroup),\n                            children: _data__WEBPACK_IMPORTED_MODULE_2__.words.map((word, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__word),\n                                    children: word\n                                }, index, false, {\n                                    fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"eX+Wk1WYQeHBbD4iRdtpqtpwdGs=\");\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDbEI7QUFDSDtBQUVjO0FBRTFDLE1BQU1NLFNBQVM7O0lBQ2IsTUFBTUMsWUFBWUwsNkNBQU1BLENBQUM7SUFDekIsTUFBTU0sY0FBY04sNkNBQU1BLENBQUM7SUFDM0IsTUFBTU8sb0JBQW9CUCw2Q0FBTUEsQ0FBQztJQUNqQyxNQUFNUSxrQkFBa0JSLDZDQUFNQSxDQUFDO0lBRS9CRCxnREFBU0EsQ0FBQztRQUNSRyxzQ0FBSUEsQ0FBQ08sR0FBR0QsZ0JBQWdCRSxTQUFTO1lBQy9CQyxVQUFVLENBQUM7WUFDWEMsVUFBVTtZQUNWQyxNQUFNO1FBQ1I7UUFFQVgsc0NBQUlBLENBQUNZLEtBQUtSLFlBQVlJLFNBQVM7WUFDN0JLLFFBQVE7UUFDVjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJQyxLQUFLWjtRQUFXYSxXQUFXZiw0RUFBc0JnQjs7MEJBQ3BELDhEQUFDSDtnQkFBSUUsV0FBV2Ysb0ZBQThCaUI7O2tDQUM1Qyw4REFBQ0o7d0JBQUlDLEtBQUtYO3dCQUFhWSxXQUFXZiw2RUFBdUJrQjs7Ozs7O2tDQUN6RCw4REFBQ0M7d0JBQUtMLEtBQUtWO3dCQUFtQlcsV0FBV2YsbUZBQTZCb0I7a0NBQUU7Ozs7Ozs7Ozs7OzswQkFJMUUsOERBQUNQO2dCQUFJRSxXQUFXZixtRUFBYXFCOzBCQUMzQiw0RUFBQ1I7b0JBQUlFLFdBQVdmLDBFQUFvQnNCOztzQ0FDbEMsOERBQUNUOzRCQUFJRSxXQUFXZiw0RUFBc0J1Qjs7Ozs7O3NDQUN0Qyw4REFBQ1Y7NEJBQUlDLEtBQUtUOzRCQUFpQlUsV0FBV2YsK0VBQXlCd0I7c0NBQzVEMUIsd0NBQUtBLENBQUMyQixJQUFJLENBQUNDLE1BQU1DO2dDQUNoQixxQkFDRSw4REFBQ1I7b0NBQWlCSixXQUFXZix5RUFBbUI0Qjs4Q0FDN0NGO21DQURRQzs7Ozs7NEJBSWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0ExQ00xQjtLQUFBQTtBQTRDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Mb2FkZXIvaW5kZXguanM/MWZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdvcmRzIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTG9hZGVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IExvYWRlciA9ICgpID0+IHtcbiAgY29uc3QgbG9hZGVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwcm9ncmVzc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcHJvZ3Jlc3NOdW1iZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHdvcmRQcm9ncmVzc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdzYXAudG8od29yZFByb2dyZXNzUmVmLmN1cnJlbnQsIHtcbiAgICAgIHlQZXJjZW50OiAtODAsXG4gICAgICBkdXJhdGlvbjogNSxcbiAgICAgIGVhc2U6IFwicG93ZXIyLmluT3V0XCIsXG4gICAgfSk7XG5cbiAgICBnc2FwLmZyb20ocHJvZ3Jlc3NSZWYuY3VycmVudCwge1xuICAgICAgc2NhbGVYOiAxLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17bG9hZGVyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3dyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3Byb2dyZXNzV3JhcHBlcn0+XG4gICAgICAgIDxkaXYgcmVmPXtwcm9ncmVzc1JlZn0gY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19wcm9ncmVzc30+PC9kaXY+XG4gICAgICAgIDxzcGFuIHJlZj17cHJvZ3Jlc3NOdW1iZXJSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fcHJvZ3Jlc3NOdW1iZXJ9PlxuICAgICAgICAgIDBcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193b3Jkc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX292ZXJsYXl9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgcmVmPXt3b3JkUHJvZ3Jlc3NSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHNHcm91cH0+XG4gICAgICAgICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZH0+XG4gICAgICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIndvcmRzIiwiZ3NhcCIsInN0eWxlcyIsIkxvYWRlciIsImxvYWRlclJlZiIsInByb2dyZXNzUmVmIiwicHJvZ3Jlc3NOdW1iZXJSZWYiLCJ3b3JkUHJvZ3Jlc3NSZWYiLCJ0byIsImN1cnJlbnQiLCJ5UGVyY2VudCIsImR1cmF0aW9uIiwiZWFzZSIsImZyb20iLCJzY2FsZVgiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJsb2FkZXJfX3dyYXBwZXIiLCJsb2FkZXJfX3Byb2dyZXNzV3JhcHBlciIsImxvYWRlcl9fcHJvZ3Jlc3MiLCJzcGFuIiwibG9hZGVyX19wcm9ncmVzc051bWJlciIsImxvYWRlciIsImxvYWRlcl9fd29yZHMiLCJsb2FkZXJfX292ZXJsYXkiLCJsb2FkZXJfX3dvcmRzR3JvdXAiLCJtYXAiLCJ3b3JkIiwiaW5kZXgiLCJsb2FkZXJfX3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/index.js\n"));

/***/ })

});
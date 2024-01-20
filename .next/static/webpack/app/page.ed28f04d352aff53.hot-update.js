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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-client)/./app/components/Loader/data.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ \"(app-client)/./app/components/Loader/animation.js\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loader.module.scss */ \"(app-client)/./app/components/Loader/Loader.module.scss\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Loader = ()=>{\n    _s();\n    const loaderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressNumberRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wordProgressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const tl = gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].timeline();\n        tl.add((0,_animation__WEBPACK_IMPORTED_MODULE_3__.animateTextLoading)()).add((0,_animation__WEBPACK_IMPORTED_MODULE_3__.progressAnimation)(), \"-=2\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: loaderRef,\n        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().loader__wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().loader__progressWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: progressRef,\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().loader__progress)\n                    }, void 0, false, {\n                        fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        ref: progressNumberRef,\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().loader__progressNumber),\n                        children: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().loader),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().loader__words),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().loader__overlay)\n                        }, void 0, false, {\n                            fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: wordProgressRef,\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().loader__wordsGroup),\n                            children: _data__WEBPACK_IMPORTED_MODULE_2__.words.map((word, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_5___default().loader__word),\n                                    children: word\n                                }, index, false, {\n                                    fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"eX+Wk1WYQeHBbD4iRdtpqtpwdGs=\");\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2xCO0FBQ3FDO0FBRTFCO0FBQ2xCO0FBRXhCLE1BQU1RLFNBQVM7O0lBQ2IsTUFBTUMsWUFBWVAsNkNBQU1BLENBQUM7SUFDekIsTUFBTVEsY0FBY1IsNkNBQU1BLENBQUM7SUFDM0IsTUFBTVMsb0JBQW9CVCw2Q0FBTUEsQ0FBQztJQUNqQyxNQUFNVSxrQkFBa0JWLDZDQUFNQSxDQUFDO0lBRS9CRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLEtBQUtOLDRDQUFJQSxDQUFDTztRQUVoQkQsR0FBR0UsSUFBSVgsOERBQWtCQSxJQUFJVyxJQUFJViw2REFBaUJBLElBQUk7SUFDeEQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNXO1FBQUlDLEtBQUtSO1FBQVdTLFdBQVdaLDRFQUFzQmE7OzBCQUNwRCw4REFBQ0g7Z0JBQUlFLFdBQVdaLG9GQUE4QmM7O2tDQUM1Qyw4REFBQ0o7d0JBQUlDLEtBQUtQO3dCQUFhUSxXQUFXWiw2RUFBdUJlOzs7Ozs7a0NBQ3pELDhEQUFDQzt3QkFBS0wsS0FBS047d0JBQW1CTyxXQUFXWixtRkFBNkJpQjtrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUkxRSw4REFBQ1A7Z0JBQUlFLFdBQVdaLG1FQUFha0I7MEJBQzNCLDRFQUFDUjtvQkFBSUUsV0FBV1osMEVBQW9CbUI7O3NDQUNsQyw4REFBQ1Q7NEJBQUlFLFdBQVdaLDRFQUFzQm9COzs7Ozs7c0NBQ3RDLDhEQUFDVjs0QkFBSUMsS0FBS0w7NEJBQWlCTSxXQUFXWiwrRUFBeUJxQjtzQ0FDNUR4Qix3Q0FBS0EsQ0FBQ3lCLElBQUksQ0FBQ0MsTUFBTUM7Z0NBQ2hCLHFCQUNFLDhEQUFDUjtvQ0FBaUJKLFdBQVdaLHlFQUFtQnlCOzhDQUM3Q0Y7bUNBRFFDOzs7Ozs0QkFJZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQXBDTXRCO0tBQUFBO0FBc0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0xvYWRlci9pbmRleC5qcz8xZmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd29yZHMgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBhbmltYXRlVGV4dExvYWRpbmcsIHByb2dyZXNzQW5pbWF0aW9uIH0gZnJvbSBcIi4vYW5pbWF0aW9uXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTG9hZGVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGxvYWRlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcHJvZ3Jlc3NSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHByb2dyZXNzTnVtYmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB3b3JkUHJvZ3Jlc3NSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICAgIHRsLmFkZChhbmltYXRlVGV4dExvYWRpbmcoKSkuYWRkKHByb2dyZXNzQW5pbWF0aW9uKCksIFwiLT0yXCIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17bG9hZGVyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3dyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3Byb2dyZXNzV3JhcHBlcn0+XG4gICAgICAgIDxkaXYgcmVmPXtwcm9ncmVzc1JlZn0gY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19wcm9ncmVzc30+PC9kaXY+XG4gICAgICAgIDxzcGFuIHJlZj17cHJvZ3Jlc3NOdW1iZXJSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fcHJvZ3Jlc3NOdW1iZXJ9PlxuICAgICAgICAgIDBcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193b3Jkc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX292ZXJsYXl9PjwvZGl2PlxuICAgICAgICAgIDxkaXYgcmVmPXt3b3JkUHJvZ3Jlc3NSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHNHcm91cH0+XG4gICAgICAgICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZH0+XG4gICAgICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIndvcmRzIiwiYW5pbWF0ZVRleHRMb2FkaW5nIiwicHJvZ3Jlc3NBbmltYXRpb24iLCJzdHlsZXMiLCJnc2FwIiwiTG9hZGVyIiwibG9hZGVyUmVmIiwicHJvZ3Jlc3NSZWYiLCJwcm9ncmVzc051bWJlclJlZiIsIndvcmRQcm9ncmVzc1JlZiIsInRsIiwidGltZWxpbmUiLCJhZGQiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJsb2FkZXJfX3dyYXBwZXIiLCJsb2FkZXJfX3Byb2dyZXNzV3JhcHBlciIsImxvYWRlcl9fcHJvZ3Jlc3MiLCJzcGFuIiwibG9hZGVyX19wcm9ncmVzc051bWJlciIsImxvYWRlciIsImxvYWRlcl9fd29yZHMiLCJsb2FkZXJfX292ZXJsYXkiLCJsb2FkZXJfX3dvcmRzR3JvdXAiLCJtYXAiLCJ3b3JkIiwiaW5kZXgiLCJsb2FkZXJfX3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/index.js\n"));

/***/ })

});
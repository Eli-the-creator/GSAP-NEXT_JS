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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-client)/./app/components/Loader/data.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader.module.scss */ \"(app-client)/./app/components/Loader/Loader.module.scss\");\n/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Loader = ()=>{\n    _s();\n    const loaderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressNumberRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const wordProgressRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(wordProgressRef.current, {\n            yPercent: -80,\n            duration: 5,\n            ease: \"power2.inOut\"\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.from(progressRef.current, {\n            duration: 5,\n            ease: \"power2.inOut\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: loaderRef,\n        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressWrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: progressRef,\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progress)\n                    }, void 0, false, {\n                        fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        ref: progressNumberRef,\n                        className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__progressNumber),\n                        children: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__words),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__overlay)\n                        }, void 0, false, {\n                            fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: wordProgressRef,\n                            className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__wordsGroup),\n                            children: _data__WEBPACK_IMPORTED_MODULE_2__.words.map((word, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_Loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default().loader__word),\n                                    children: word\n                                }, index, false, {\n                                    fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/components/Loader/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Loader, \"eX+Wk1WYQeHBbD4iRdtpqtpwdGs=\");\n_c = Loader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);\nvar _c;\n$RefreshReg$(_c, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDbEI7QUFDSDtBQUVjO0FBRTFDLE1BQU1NLFNBQVM7O0lBQ2IsTUFBTUMsWUFBWUwsNkNBQU1BLENBQUM7SUFDekIsTUFBTU0sY0FBY04sNkNBQU1BLENBQUM7SUFDM0IsTUFBTU8sb0JBQW9CUCw2Q0FBTUEsQ0FBQztJQUNqQyxNQUFNUSxrQkFBa0JSLDZDQUFNQSxDQUFDO0lBRS9CRCxnREFBU0EsQ0FBQztRQUNSRyxzQ0FBSUEsQ0FBQ08sR0FBR0QsZ0JBQWdCRSxTQUFTO1lBQy9CQyxVQUFVLENBQUM7WUFDWEMsVUFBVTtZQUNWQyxNQUFNO1FBQ1I7UUFFQVgsc0NBQUlBLENBQUNZLEtBQUtSLFlBQVlJLFNBQVM7WUFDN0JFLFVBQVU7WUFDVkMsTUFBTTtRQUNSO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFO1FBQUlDLEtBQUtYO1FBQVdZLFdBQVdkLDRFQUFzQmU7OzBCQUNwRCw4REFBQ0g7Z0JBQUlFLFdBQVdkLG9GQUE4QmdCOztrQ0FDNUMsOERBQUNKO3dCQUFJQyxLQUFLVjt3QkFBYVcsV0FBV2QsNkVBQXVCaUI7Ozs7OztrQ0FDekQsOERBQUNDO3dCQUFLTCxLQUFLVDt3QkFBbUJVLFdBQVdkLG1GQUE2Qm1CO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBSTFFLDhEQUFDUDtnQkFBSUUsV0FBV2QsbUVBQWFvQjswQkFDM0IsNEVBQUNSO29CQUFJRSxXQUFXZCwwRUFBb0JxQjs7c0NBQ2xDLDhEQUFDVDs0QkFBSUUsV0FBV2QsNEVBQXNCc0I7Ozs7OztzQ0FDdEMsOERBQUNWOzRCQUFJQyxLQUFLUjs0QkFBaUJTLFdBQVdkLCtFQUF5QnVCO3NDQUM1RHpCLHdDQUFLQSxDQUFDMEIsSUFBSSxDQUFDQyxNQUFNQztnQ0FDaEIscUJBQ0UsOERBQUNSO29DQUFpQkosV0FBV2QseUVBQW1CMkI7OENBQzdDRjttQ0FEUUM7Ozs7OzRCQUlmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBM0NNekI7S0FBQUE7QUE2Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzPzFmYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3b3JkcyB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xvYWRlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGxvYWRlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcHJvZ3Jlc3NSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHByb2dyZXNzTnVtYmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB3b3JkUHJvZ3Jlc3NSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnc2FwLnRvKHdvcmRQcm9ncmVzc1JlZi5jdXJyZW50LCB7XG4gICAgICB5UGVyY2VudDogLTgwLFxuICAgICAgZHVyYXRpb246IDUsXG4gICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiLFxuICAgIH0pO1xuXG4gICAgZ3NhcC5mcm9tKHByb2dyZXNzUmVmLmN1cnJlbnQsIHtcbiAgICAgIGR1cmF0aW9uOiA1LFxuICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIixcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e2xvYWRlclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX193cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19wcm9ncmVzc1dyYXBwZXJ9PlxuICAgICAgICA8ZGl2IHJlZj17cHJvZ3Jlc3NSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fcHJvZ3Jlc3N9PjwvZGl2PlxuICAgICAgICA8c3BhbiByZWY9e3Byb2dyZXNzTnVtYmVyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3Byb2dyZXNzTnVtYmVyfT5cbiAgICAgICAgICAwXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcl9fd29yZHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyX19vdmVybGF5fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IHJlZj17d29yZFByb2dyZXNzUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3dvcmRzR3JvdXB9PlxuICAgICAgICAgICAge3dvcmRzLm1hcCgod29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJfX3dvcmR9PlxuICAgICAgICAgICAgICAgICAge3dvcmR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ3b3JkcyIsImdzYXAiLCJzdHlsZXMiLCJMb2FkZXIiLCJsb2FkZXJSZWYiLCJwcm9ncmVzc1JlZiIsInByb2dyZXNzTnVtYmVyUmVmIiwid29yZFByb2dyZXNzUmVmIiwidG8iLCJjdXJyZW50IiwieVBlcmNlbnQiLCJkdXJhdGlvbiIsImVhc2UiLCJmcm9tIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwibG9hZGVyX193cmFwcGVyIiwibG9hZGVyX19wcm9ncmVzc1dyYXBwZXIiLCJsb2FkZXJfX3Byb2dyZXNzIiwic3BhbiIsImxvYWRlcl9fcHJvZ3Jlc3NOdW1iZXIiLCJsb2FkZXIiLCJsb2FkZXJfX3dvcmRzIiwibG9hZGVyX19vdmVybGF5IiwibG9hZGVyX193b3Jkc0dyb3VwIiwibWFwIiwid29yZCIsImluZGV4IiwibG9hZGVyX193b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/index.js\n"));

/***/ })

});
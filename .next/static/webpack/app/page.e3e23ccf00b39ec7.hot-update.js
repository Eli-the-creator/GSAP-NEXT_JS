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

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Loader */ \"(app-client)/./app/components/Loader/index.js\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Hero */ \"(app-client)/./app/components/Hero/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [loaderFinish, setLoaderFinish] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [timeLine, setTimeLine] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{\n        const context = gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].context(()=>{\n            const tl = gsap__WEBPACK_IMPORTED_MODULE_4__[\"default\"].timeline({\n                onComplete: ()=>setLoaderFinish(true)\n            });\n            setTimeLine(tl);\n        });\n        return ()=>context.revert();\n    }, []);\n    return(// <main>\n    //   <Loader timeline={timeLine}></Loader>\n    // </main>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: !loaderFinish ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/page.js\",\n            lineNumber: 29,\n            columnNumber: 28\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            timeline: timeLine\n        }, void 0, false, {\n            fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/page.js\",\n            lineNumber: 29,\n            columnNumber: 39\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/iliyazakrevskyi/Desktop/ultra-starter/app/page.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined));\n};\n_s(Home, \"Wftdli1wXbcPBMiCJPEnWApjSt0=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXlDO0FBQ0o7QUFFYTtBQUMxQjtBQUV4QixNQUFNSyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBRWpELE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6Q0Qsc0RBQWVBLENBQUM7UUFDZCxNQUFNUSxVQUFVTiw0Q0FBSUEsQ0FBQ00sUUFBUTtZQUMzQixNQUFNQyxLQUFLUCw0Q0FBSUEsQ0FBQ1EsU0FBUztnQkFDdkJDLFlBQVksSUFBTU4sZ0JBQWdCO1lBQ3BDO1lBQ0FFLFlBQVlFO1FBQ2Q7UUFFQSxPQUFPLElBQU1ELFFBQVFJO0lBQ3ZCLEdBQUcsRUFBRTtJQUVMLE9BQ0UsU0FBUztJQUNULDBDQUEwQztJQUMxQyxVQUFVO2tCQUNWLDhEQUFDQztrQkFBTSxDQUFDVCw2QkFBZSw4REFBQ0wsd0RBQUlBOzs7O3NDQUFNLDhEQUFDRCwwREFBTUE7WUFBQ1ksVUFBVUo7Ozs7Ozs7Ozs7O0FBRXhEO0dBdEJNSDtLQUFBQTtBQXdCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiQC9jb21wb25lbnRzL0hlcm9cIjtcblxuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2xvYWRlckZpbmlzaCwgc2V0TG9hZGVyRmluaXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbdGltZUxpbmUsIHNldFRpbWVMaW5lXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IGdzYXAuY29udGV4dCgoKSA9PiB7XG4gICAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiBzZXRMb2FkZXJGaW5pc2godHJ1ZSksXG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVMaW5lKHRsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiBjb250ZXh0LnJldmVydCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8bWFpbj5cbiAgICAvLyAgIDxMb2FkZXIgdGltZWxpbmU9e3RpbWVMaW5lfT48L0xvYWRlcj5cbiAgICAvLyA8L21haW4+XG4gICAgPG1haW4+eyFsb2FkZXJGaW5pc2ggPyA8SGVybyAvPiA6IDxMb2FkZXIgdGltZWxpbmU9e3RpbWVMaW5lfSAvPn08L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkxvYWRlciIsIkhlcm8iLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VTdGF0ZSIsImdzYXAiLCJIb21lIiwibG9hZGVyRmluaXNoIiwic2V0TG9hZGVyRmluaXNoIiwidGltZUxpbmUiLCJzZXRUaW1lTGluZSIsImNvbnRleHQiLCJ0bCIsInRpbWVsaW5lIiwib25Db21wbGV0ZSIsInJldmVydCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});
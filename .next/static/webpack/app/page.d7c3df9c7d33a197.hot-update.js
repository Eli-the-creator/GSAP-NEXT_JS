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

/***/ "(app-client)/./app/components/Loader/animation.js":
/*!********************************************!*\
  !*** ./app/components/Loader/animation.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animateTextLoading: function() { return /* binding */ animateTextLoading; },\n/* harmony export */   colapseWords: function() { return /* binding */ colapseWords; },\n/* harmony export */   progressAnimation: function() { return /* binding */ progressAnimation; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n\nfunction animateTextLoading(wordProgressRef) {\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    tl.to(wordProgressRef.current, {\n        yPercent: -80,\n        duration: 5,\n        ease: \"power2.inOut\"\n    });\n    return tl;\n}\nconst progressAnimation = (progressRef, progressNumberRef)=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    tl.from(progressRef.current, {\n        scaleX: 0,\n        duration: 5,\n        ease: \"power2.inOut\"\n    }).to(progressNumberRef.current, {});\n    return tl;\n};\nconst colapseWords = (loaderRef)=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    tl.to(loaderRef.current, {\n        \"clip-path\": \"polygon(0%  50% , 100%  50%, 100%  50%, 0% 50% )\",\n        duration: 5,\n        ease: \"expo.inOut\"\n    });\n    return tl;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2FuaW1hdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdCO0FBRWpCLFNBQVNDLG1CQUFtQkMsZUFBZTtJQUNoRCxNQUFNQyxLQUFLSCw0Q0FBSUEsQ0FBQ0k7SUFFaEJELEdBQUdFLEdBQUdILGdCQUFnQkksU0FBUztRQUM3QkMsVUFBVSxDQUFDO1FBQ1hDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0lBQ0EsT0FBT047QUFDVDtBQUVPLE1BQU1PLG9CQUFvQixDQUFDQyxhQUFhQztJQUM3QyxNQUFNVCxLQUFLSCw0Q0FBSUEsQ0FBQ0k7SUFFaEJELEdBQUdVLEtBQUtGLFlBQVlMLFNBQVM7UUFDM0JRLFFBQVE7UUFDUk4sVUFBVTtRQUNWQyxNQUFNO0lBQ1IsR0FBR0osR0FBR08sa0JBQWtCTixTQUFTLENBQUM7SUFDbEMsT0FBT0g7QUFDVCxFQUFFO0FBRUssTUFBTVksZUFBZSxDQUFDQztJQUMzQixNQUFNYixLQUFLSCw0Q0FBSUEsQ0FBQ0k7SUFFaEJELEdBQUdFLEdBQUdXLFVBQVVWLFNBQVM7UUFDdkIsYUFBYTtRQUNiRSxVQUFVO1FBQ1ZDLE1BQU07SUFDUjtJQUVBLE9BQU9OO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Mb2FkZXIvYW5pbWF0aW9uLmpzP2FiNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVUZXh0TG9hZGluZyh3b3JkUHJvZ3Jlc3NSZWYpIHtcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgdGwudG8od29yZFByb2dyZXNzUmVmLmN1cnJlbnQsIHtcbiAgICB5UGVyY2VudDogLTgwLFxuICAgIGR1cmF0aW9uOiA1LFxuICAgIGVhc2U6IFwicG93ZXIyLmluT3V0XCIsXG4gIH0pO1xuICByZXR1cm4gdGw7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9ncmVzc0FuaW1hdGlvbiA9IChwcm9ncmVzc1JlZiwgcHJvZ3Jlc3NOdW1iZXJSZWYpID0+IHtcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgdGwuZnJvbShwcm9ncmVzc1JlZi5jdXJyZW50LCB7XG4gICAgc2NhbGVYOiAwLFxuICAgIGR1cmF0aW9uOiA1LFxuICAgIGVhc2U6IFwicG93ZXIyLmluT3V0XCIsXG4gIH0pLnRvKHByb2dyZXNzTnVtYmVyUmVmLmN1cnJlbnQsIHt9KTtcbiAgcmV0dXJuIHRsO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbGFwc2VXb3JkcyA9IChsb2FkZXJSZWYpID0+IHtcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgdGwudG8obG9hZGVyUmVmLmN1cnJlbnQsIHtcbiAgICBcImNsaXAtcGF0aFwiOiBcInBvbHlnb24oMCUgIDUwJSAsIDEwMCUgIDUwJSwgMTAwJSAgNTAlLCAwJSA1MCUgKVwiLFxuICAgIGR1cmF0aW9uOiA1LFxuICAgIGVhc2U6IFwiZXhwby5pbk91dFwiLFxuICB9KTtcblxuICByZXR1cm4gdGw7XG59O1xuIl0sIm5hbWVzIjpbImdzYXAiLCJhbmltYXRlVGV4dExvYWRpbmciLCJ3b3JkUHJvZ3Jlc3NSZWYiLCJ0bCIsInRpbWVsaW5lIiwidG8iLCJjdXJyZW50IiwieVBlcmNlbnQiLCJkdXJhdGlvbiIsImVhc2UiLCJwcm9ncmVzc0FuaW1hdGlvbiIsInByb2dyZXNzUmVmIiwicHJvZ3Jlc3NOdW1iZXJSZWYiLCJmcm9tIiwic2NhbGVYIiwiY29sYXBzZVdvcmRzIiwibG9hZGVyUmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/animation.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animateTextLoading: function() { return /* binding */ animateTextLoading; },\n/* harmony export */   colapseWords: function() { return /* binding */ colapseWords; },\n/* harmony export */   progressAnimation: function() { return /* binding */ progressAnimation; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n\nfunction animateTextLoading(wordProgressRef) {\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    tl.to(wordProgressRef.current, {\n        yPercent: -80,\n        duration: 5,\n        ease: \"power2.inOut\"\n    });\n    return tl;\n}\nconst progressAnimation = (progressRef, progressNumberRef)=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    tl.from(progressRef.current, {\n        scaleX: 0,\n        duration: 5,\n        ease: \"power2.inOut\"\n    }).to(progressNumberRef.current);\n    return tl;\n};\nconst colapseWords = (loaderRef)=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    tl.to(loaderRef.current, {\n        \"clip-path\": \"polygon(0%  50% , 100%  50%, 100%  50%, 0% 50% )\",\n        duration: 5,\n        ease: \"expo.inOut\"\n    });\n    return tl;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2FuaW1hdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdCO0FBRWpCLFNBQVNDLG1CQUFtQkMsZUFBZTtJQUNoRCxNQUFNQyxLQUFLSCw0Q0FBSUEsQ0FBQ0k7SUFFaEJELEdBQUdFLEdBQUdILGdCQUFnQkksU0FBUztRQUM3QkMsVUFBVSxDQUFDO1FBQ1hDLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0lBQ0EsT0FBT047QUFDVDtBQUVPLE1BQU1PLG9CQUFvQixDQUFDQyxhQUFhQztJQUM3QyxNQUFNVCxLQUFLSCw0Q0FBSUEsQ0FBQ0k7SUFFaEJELEdBQUdVLEtBQUtGLFlBQVlMLFNBQVM7UUFDM0JRLFFBQVE7UUFDUk4sVUFBVTtRQUNWQyxNQUFNO0lBQ1IsR0FBR0osR0FBR08sa0JBQWtCTjtJQUN4QixPQUFPSDtBQUNULEVBQUU7QUFFSyxNQUFNWSxlQUFlLENBQUNDO0lBQzNCLE1BQU1iLEtBQUtILDRDQUFJQSxDQUFDSTtJQUVoQkQsR0FBR0UsR0FBR1csVUFBVVYsU0FBUztRQUN2QixhQUFhO1FBQ2JFLFVBQVU7UUFDVkMsTUFBTTtJQUNSO0lBRUEsT0FBT047QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0xvYWRlci9hbmltYXRpb24uanM/YWI2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZVRleHRMb2FkaW5nKHdvcmRQcm9ncmVzc1JlZikge1xuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICB0bC50byh3b3JkUHJvZ3Jlc3NSZWYuY3VycmVudCwge1xuICAgIHlQZXJjZW50OiAtODAsXG4gICAgZHVyYXRpb246IDUsXG4gICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIixcbiAgfSk7XG4gIHJldHVybiB0bDtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzQW5pbWF0aW9uID0gKHByb2dyZXNzUmVmLCBwcm9ncmVzc051bWJlclJlZikgPT4ge1xuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICB0bC5mcm9tKHByb2dyZXNzUmVmLmN1cnJlbnQsIHtcbiAgICBzY2FsZVg6IDAsXG4gICAgZHVyYXRpb246IDUsXG4gICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIixcbiAgfSkudG8ocHJvZ3Jlc3NOdW1iZXJSZWYuY3VycmVudCk7XG4gIHJldHVybiB0bDtcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xhcHNlV29yZHMgPSAobG9hZGVyUmVmKSA9PiB7XG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xuXG4gIHRsLnRvKGxvYWRlclJlZi5jdXJyZW50LCB7XG4gICAgXCJjbGlwLXBhdGhcIjogXCJwb2x5Z29uKDAlICA1MCUgLCAxMDAlICA1MCUsIDEwMCUgIDUwJSwgMCUgNTAlIClcIixcbiAgICBkdXJhdGlvbjogNSxcbiAgICBlYXNlOiBcImV4cG8uaW5PdXRcIixcbiAgfSk7XG5cbiAgcmV0dXJuIHRsO1xufTtcbiJdLCJuYW1lcyI6WyJnc2FwIiwiYW5pbWF0ZVRleHRMb2FkaW5nIiwid29yZFByb2dyZXNzUmVmIiwidGwiLCJ0aW1lbGluZSIsInRvIiwiY3VycmVudCIsInlQZXJjZW50IiwiZHVyYXRpb24iLCJlYXNlIiwicHJvZ3Jlc3NBbmltYXRpb24iLCJwcm9ncmVzc1JlZiIsInByb2dyZXNzTnVtYmVyUmVmIiwiZnJvbSIsInNjYWxlWCIsImNvbGFwc2VXb3JkcyIsImxvYWRlclJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/animation.js\n"));

/***/ })

});
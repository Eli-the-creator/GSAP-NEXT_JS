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

/***/ "(app-client)/./app/components/Hero/animation.js":
/*!******************************************!*\
  !*** ./app/components/Hero/animation.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animateImage: function() { return /* binding */ animateImage; },\n/* harmony export */   animateTitle: function() { return /* binding */ animateTitle; },\n/* harmony export */   revealMenu: function() { return /* binding */ revealMenu; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n\nconst animateTitle = ()=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n        defaults: {\n            ease: \"expo.inOut\",\n            duration: 2\n        }\n    });\n    tl.to(\"[data-hero-line]\", {\n        scaleX: 1\n    }).fromTo(\"[data-title-first]\", {\n        x: 100,\n        autoAlpha: 0\n    }, {\n        x: 0,\n        autoAlpha: 1\n    }, \"<10%\").fromTo(\"[data-title-last]\", {\n        x: -100,\n        autoAlpha: 0\n    }, {\n        x: 0,\n        autoAlpha: 1\n    }, \"<\");\n    return tl;\n};\nconst animateImage = ()=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n        defaults: {\n            ease: \"power.isOut\",\n            duration: 1.5\n        }\n    });\n    tl.to(\"[data-image-overlay]\", {\n        scaleY: 1\n    }).from(\"[data-image]\", {\n        yPercent: 100\n    }, \"<\").to(\"[data-image-overlay]\", {\n        scaleY: 0,\n        transformOrigin: \"top center\"\n    }).to(\"[data-image]\", {\n        duration: 2,\n        scale: 1.3\n    }, \"<\");\n    return tl;\n};\nconst revealMenu = ()=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n    tl.fromTo(\"[data-menu-item]\", {\n        autoAlpha: 0,\n        y: 32\n    }, {});\n    return tl;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvSGVyby9hbmltYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QjtBQUVqQixNQUFNQyxlQUFlO0lBQzFCLE1BQU1DLEtBQUtGLDRDQUFJQSxDQUFDRyxTQUFTO1FBQ3ZCQyxVQUFVO1lBQ1JDLE1BQU07WUFDTkMsVUFBVTtRQUNaO0lBQ0Y7SUFFQUosR0FBR0ssR0FBRyxvQkFBb0I7UUFDeEJDLFFBQVE7SUFDVixHQUNHQyxPQUNDLHNCQUNBO1FBQ0VDLEdBQUc7UUFDSEMsV0FBVztJQUNiLEdBQ0E7UUFDRUQsR0FBRztRQUNIQyxXQUFXO0lBQ2IsR0FDQSxRQUVERixPQUNDLHFCQUNBO1FBQ0VDLEdBQUcsQ0FBQztRQUNKQyxXQUFXO0lBQ2IsR0FDQTtRQUNFRCxHQUFHO1FBQ0hDLFdBQVc7SUFDYixHQUNBO0lBR0osT0FBT1Q7QUFDVCxFQUFFO0FBRUssTUFBTVUsZUFBZTtJQUMxQixNQUFNVixLQUFLRiw0Q0FBSUEsQ0FBQ0csU0FBUztRQUN2QkMsVUFBVTtZQUNSQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtJQUNGO0lBRUFKLEdBQUdLLEdBQUcsd0JBQXdCO1FBQzVCTSxRQUFRO0lBQ1YsR0FDR0MsS0FDQyxnQkFDQTtRQUNFQyxVQUFVO0lBQ1osR0FDQSxLQUVEUixHQUFHLHdCQUF3QjtRQUMxQk0sUUFBUTtRQUNSRyxpQkFBaUI7SUFDbkIsR0FDQ1QsR0FDQyxnQkFDQTtRQUNFRCxVQUFVO1FBQ1ZXLE9BQU87SUFDVCxHQUNBO0lBR0osT0FBT2Y7QUFDVCxFQUFFO0FBRUssTUFBTWdCLGFBQWE7SUFDeEIsTUFBTWhCLEtBQUtGLDRDQUFJQSxDQUFDRztJQUVoQkQsR0FBR08sT0FDRCxvQkFDQTtRQUNFRSxXQUFXO1FBQ1hRLEdBQUc7SUFDTCxHQUNBLENBQUM7SUFHSCxPQUFPakI7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0hlcm8vYW5pbWF0aW9uLmpzP2FmNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGVUaXRsZSA9ICgpID0+IHtcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgZWFzZTogXCJleHBvLmluT3V0XCIsXG4gICAgICBkdXJhdGlvbjogMixcbiAgICB9LFxuICB9KTtcblxuICB0bC50byhcIltkYXRhLWhlcm8tbGluZV1cIiwge1xuICAgIHNjYWxlWDogMSxcbiAgfSlcbiAgICAuZnJvbVRvKFxuICAgICAgXCJbZGF0YS10aXRsZS1maXJzdF1cIixcbiAgICAgIHtcbiAgICAgICAgeDogMTAwLFxuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB4OiAwLFxuICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICB9LFxuICAgICAgXCI8MTAlXCJcbiAgICApXG4gICAgLmZyb21UbyhcbiAgICAgIFwiW2RhdGEtdGl0bGUtbGFzdF1cIixcbiAgICAgIHtcbiAgICAgICAgeDogLTEwMCxcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgfSxcbiAgICAgIFwiPFwiXG4gICAgKTtcblxuICByZXR1cm4gdGw7XG59O1xuXG5leHBvcnQgY29uc3QgYW5pbWF0ZUltYWdlID0gKCkgPT4ge1xuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICBlYXNlOiBcInBvd2VyLmlzT3V0XCIsXG4gICAgICBkdXJhdGlvbjogMS41LFxuICAgIH0sXG4gIH0pO1xuXG4gIHRsLnRvKFwiW2RhdGEtaW1hZ2Utb3ZlcmxheV1cIiwge1xuICAgIHNjYWxlWTogMSxcbiAgfSlcbiAgICAuZnJvbShcbiAgICAgIFwiW2RhdGEtaW1hZ2VdXCIsXG4gICAgICB7XG4gICAgICAgIHlQZXJjZW50OiAxMDAsXG4gICAgICB9LFxuICAgICAgXCI8XCJcbiAgICApXG4gICAgLnRvKFwiW2RhdGEtaW1hZ2Utb3ZlcmxheV1cIiwge1xuICAgICAgc2NhbGVZOiAwLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcInRvcCBjZW50ZXJcIixcbiAgICB9KVxuICAgIC50byhcbiAgICAgIFwiW2RhdGEtaW1hZ2VdXCIsXG4gICAgICB7XG4gICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICBzY2FsZTogMS4zLFxuICAgICAgfSxcbiAgICAgIFwiPFwiXG4gICAgKTtcblxuICByZXR1cm4gdGw7XG59O1xuXG5leHBvcnQgY29uc3QgcmV2ZWFsTWVudSA9ICgpID0+IHtcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgdGwuZnJvbVRvKFxuICAgIFwiW2RhdGEtbWVudS1pdGVtXVwiLFxuICAgIHtcbiAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIHk6IDMyLFxuICAgIH0sXG4gICAge31cbiAgKTtcblxuICByZXR1cm4gdGw7XG59O1xuIl0sIm5hbWVzIjpbImdzYXAiLCJhbmltYXRlVGl0bGUiLCJ0bCIsInRpbWVsaW5lIiwiZGVmYXVsdHMiLCJlYXNlIiwiZHVyYXRpb24iLCJ0byIsInNjYWxlWCIsImZyb21UbyIsIngiLCJhdXRvQWxwaGEiLCJhbmltYXRlSW1hZ2UiLCJzY2FsZVkiLCJmcm9tIiwieVBlcmNlbnQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJzY2FsZSIsInJldmVhbE1lbnUiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Hero/animation.js\n"));

/***/ })

});
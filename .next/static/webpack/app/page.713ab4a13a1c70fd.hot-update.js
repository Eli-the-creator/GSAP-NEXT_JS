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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animateImage: function() { return /* binding */ animateImage; },\n/* harmony export */   animateTitle: function() { return /* binding */ animateTitle; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n\nconst animateTitle = ()=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n        defaults: {\n            ease: \"expo.inOut\",\n            duration: 2\n        }\n    });\n    tl.to(\"[data-hero-line]\", {\n        scaleX: 1\n    }).fromTo(\"[data-title-first]\", {\n        x: 100,\n        autoAlpha: 0\n    }, {\n        x: 0,\n        autoAlpha: 1\n    }, \"<10%\").fromTo(\"[data-title-last]\", {\n        x: -100,\n        autoAlpha: 0\n    }, {\n        x: 0,\n        autoAlpha: 1\n    }, \"<\");\n    return tl;\n};\nconst animateImage = ()=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n        defaults: {\n            ease: \"expo.isOut\",\n            duration: 1.5\n        }\n    });\n    tl.to(\"[data-image-overlay]\", {\n        scaleY: 1\n    }).from(\"[data-image]\", {\n        yPercent: 100\n    }, \"<\").to(\"[data-image-overlay]\", {\n        scaleY: 1,\n        transformOrigin: \"top center\"\n    }).to(\"[data-image]\", {\n        duration: 2,\n        scale: 1.3\n    }, \"<\");\n    return tl;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvSGVyby9hbmltYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdCO0FBRWpCLE1BQU1DLGVBQWU7SUFDMUIsTUFBTUMsS0FBS0YsNENBQUlBLENBQUNHLFNBQVM7UUFDdkJDLFVBQVU7WUFDUkMsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7SUFDRjtJQUVBSixHQUFHSyxHQUFHLG9CQUFvQjtRQUN4QkMsUUFBUTtJQUNWLEdBQ0dDLE9BQ0Msc0JBQ0E7UUFDRUMsR0FBRztRQUNIQyxXQUFXO0lBQ2IsR0FDQTtRQUNFRCxHQUFHO1FBQ0hDLFdBQVc7SUFDYixHQUNBLFFBRURGLE9BQ0MscUJBQ0E7UUFDRUMsR0FBRyxDQUFDO1FBQ0pDLFdBQVc7SUFDYixHQUNBO1FBQ0VELEdBQUc7UUFDSEMsV0FBVztJQUNiLEdBQ0E7SUFHSixPQUFPVDtBQUNULEVBQUU7QUFFSyxNQUFNVSxlQUFlO0lBQzFCLE1BQU1WLEtBQUtGLDRDQUFJQSxDQUFDRyxTQUFTO1FBQ3ZCQyxVQUFVO1lBQ1JDLE1BQU07WUFDTkMsVUFBVTtRQUNaO0lBQ0Y7SUFFQUosR0FBR0ssR0FBRyx3QkFBd0I7UUFDNUJNLFFBQVE7SUFDVixHQUNHQyxLQUNDLGdCQUNBO1FBQ0VDLFVBQVU7SUFDWixHQUNBLEtBRURSLEdBQUcsd0JBQXdCO1FBQzFCTSxRQUFRO1FBQ1JHLGlCQUFpQjtJQUNuQixHQUNDVCxHQUNDLGdCQUNBO1FBQ0VELFVBQVU7UUFDVlcsT0FBTztJQUNULEdBQ0E7SUFHSixPQUFPZjtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyby9hbmltYXRpb24uanM/YWY2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0ZVRpdGxlID0gKCkgPT4ge1xuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICBlYXNlOiBcImV4cG8uaW5PdXRcIixcbiAgICAgIGR1cmF0aW9uOiAyLFxuICAgIH0sXG4gIH0pO1xuXG4gIHRsLnRvKFwiW2RhdGEtaGVyby1saW5lXVwiLCB7XG4gICAgc2NhbGVYOiAxLFxuICB9KVxuICAgIC5mcm9tVG8oXG4gICAgICBcIltkYXRhLXRpdGxlLWZpcnN0XVwiLFxuICAgICAge1xuICAgICAgICB4OiAxMDAsXG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgIH0sXG4gICAgICBcIjwxMCVcIlxuICAgIClcbiAgICAuZnJvbVRvKFxuICAgICAgXCJbZGF0YS10aXRsZS1sYXN0XVwiLFxuICAgICAge1xuICAgICAgICB4OiAtMTAwLFxuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB4OiAwLFxuICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICB9LFxuICAgICAgXCI8XCJcbiAgICApO1xuXG4gIHJldHVybiB0bDtcbn07XG5cbmV4cG9ydCBjb25zdCBhbmltYXRlSW1hZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgZGVmYXVsdHM6IHtcbiAgICAgIGVhc2U6IFwiZXhwby5pc091dFwiLFxuICAgICAgZHVyYXRpb246IDEuNSxcbiAgICB9LFxuICB9KTtcblxuICB0bC50byhcIltkYXRhLWltYWdlLW92ZXJsYXldXCIsIHtcbiAgICBzY2FsZVk6IDEsXG4gIH0pXG4gICAgLmZyb20oXG4gICAgICBcIltkYXRhLWltYWdlXVwiLFxuICAgICAge1xuICAgICAgICB5UGVyY2VudDogMTAwLFxuICAgICAgfSxcbiAgICAgIFwiPFwiXG4gICAgKVxuICAgIC50byhcIltkYXRhLWltYWdlLW92ZXJsYXldXCIsIHtcbiAgICAgIHNjYWxlWTogMSxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCJ0b3AgY2VudGVyXCIsXG4gICAgfSlcbiAgICAudG8oXG4gICAgICBcIltkYXRhLWltYWdlXVwiLFxuICAgICAge1xuICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgc2NhbGU6IDEuMyxcbiAgICAgIH0sXG4gICAgICBcIjxcIlxuICAgICk7XG5cbiAgcmV0dXJuIHRsO1xufTtcbiJdLCJuYW1lcyI6WyJnc2FwIiwiYW5pbWF0ZVRpdGxlIiwidGwiLCJ0aW1lbGluZSIsImRlZmF1bHRzIiwiZWFzZSIsImR1cmF0aW9uIiwidG8iLCJzY2FsZVgiLCJmcm9tVG8iLCJ4IiwiYXV0b0FscGhhIiwiYW5pbWF0ZUltYWdlIiwic2NhbGVZIiwiZnJvbSIsInlQZXJjZW50IiwidHJhbnNmb3JtT3JpZ2luIiwic2NhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Hero/animation.js\n"));

/***/ })

});
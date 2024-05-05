"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-preset-snow";
exports.ids = ["vendor-chunks/tsparticles-preset-snow"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-preset-snow/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsparticles-preset-snow/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSnowPreset: () => (/* binding */ loadSnowPreset)\n/* harmony export */ });\n/* harmony import */ var tsparticles_basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsparticles-basic */ \"(ssr)/./node_modules/tsparticles-basic/esm/index.js\");\n/* harmony import */ var tsparticles_updater_wobble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tsparticles-updater-wobble */ \"(ssr)/./node_modules/tsparticles-updater-wobble/esm/index.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ \"(ssr)/./node_modules/tsparticles-preset-snow/esm/options.js\");\n\n\n\nasync function loadSnowPreset(engine, refresh = true) {\n    await (0,tsparticles_basic__WEBPACK_IMPORTED_MODULE_1__.loadBasic)(engine, false);\n    await (0,tsparticles_updater_wobble__WEBPACK_IMPORTED_MODULE_2__.loadWobbleUpdater)(engine, false);\n    await engine.addPreset(\"snow\", _options__WEBPACK_IMPORTED_MODULE_0__.options, refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtcHJlc2V0LXNub3cvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFDaUI7QUFDM0I7QUFDN0I7QUFDUCxVQUFVLDREQUFTO0FBQ25CLFVBQVUsNkVBQWlCO0FBQzNCLG1DQUFtQyw2Q0FBTztBQUMxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmt0cmVlLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXByZXNldC1zbm93L2VzbS9pbmRleC5qcz8xOTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRCYXNpYyB9IGZyb20gXCJ0c3BhcnRpY2xlcy1iYXNpY1wiO1xuaW1wb3J0IHsgbG9hZFdvYmJsZVVwZGF0ZXIgfSBmcm9tIFwidHNwYXJ0aWNsZXMtdXBkYXRlci13b2JibGVcIjtcbmltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFNub3dQcmVzZXQoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGxvYWRCYXNpYyhlbmdpbmUsIGZhbHNlKTtcbiAgICBhd2FpdCBsb2FkV29iYmxlVXBkYXRlcihlbmdpbmUsIGZhbHNlKTtcbiAgICBhd2FpdCBlbmdpbmUuYWRkUHJlc2V0KFwic25vd1wiLCBvcHRpb25zLCByZWZyZXNoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-preset-snow/esm/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-preset-snow/esm/options.js":
/*!*************************************************************!*\
  !*** ./node_modules/tsparticles-preset-snow/esm/options.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   options: () => (/* binding */ options)\n/* harmony export */ });\nconst options = {\n    background: {\n        color: \"#333\",\n    },\n    particles: {\n        number: {\n            value: 100,\n        },\n        move: {\n            direction: \"bottom\",\n            enable: true,\n            random: false,\n            straight: false,\n        },\n        opacity: {\n            value: { min: 0.1, max: 0.5 },\n        },\n        size: {\n            value: { min: 1, max: 10 },\n        },\n        wobble: {\n            distance: 20,\n            enable: true,\n            speed: {\n                min: -5,\n                max: 5,\n            },\n        },\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtcHJlc2V0LXNub3cvZXNtL29wdGlvbnMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekMsU0FBUztBQUNUO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rdHJlZS8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1wcmVzZXQtc25vdy9lc20vb3B0aW9ucy5qcz82NTMwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgIH0sXG4gICAgcGFydGljbGVzOiB7XG4gICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgICAgfSxcbiAgICAgICAgbW92ZToge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgdmFsdWU6IHsgbWluOiAwLjEsIG1heDogMC41IH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7IG1pbjogMSwgbWF4OiAxMCB9LFxuICAgICAgICB9LFxuICAgICAgICB3b2JibGU6IHtcbiAgICAgICAgICAgIGRpc3RhbmNlOiAyMCxcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgbWluOiAtNSxcbiAgICAgICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-preset-snow/esm/options.js\n");

/***/ })

};
;
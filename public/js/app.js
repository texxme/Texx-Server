/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Syntax Error \\n\\n(7:1) Unknown word\\n\\n \\u001b[90m 5 | \\u001b[39m\\u001b[90m */\\u001b[39m\\n \\u001b[90m 6 | \\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 7 | \\u001b[39mwindow.openpgp = \\u001b[36mrequire\\u001b[39m\\u001b[36m(\\u001b[39m\\u001b[32m'openpgp'\\u001b[39m\\u001b[36m)\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m   | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 8 | \\u001b[39mwindow.Vue = \\u001b[36mrequire\\u001b[39m\\u001b[36m(\\u001b[39m\\u001b[32m'vue'\\u001b[39m\\u001b[36m)\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m 9 | \\u001b[39m\\u001b[36mrequire\\u001b[39m\\u001b[36m(\\u001b[39m\\u001b[32m'./bootstrap'\\u001b[39m\\u001b[36m)\\u001b[39m\\u001b[33m;\\u001b[39m\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: BrowserslistError: Unknown browser query `dead`\\n    at /home/marvinborner/Coding/BEAM-Messenger/node_modules/laravel-mix/node_modules/autoprefixer/node_modules/browserslist/index.js:164:11\\n    at Array.reduce (<anonymous>)\\n    at resolve (/home/marvinborner/Coding/BEAM-Messenger/node_modules/laravel-mix/node_modules/autoprefixer/node_modules/browserslist/index.js:132:18)\\n    at browserslist (/home/marvinborner/Coding/BEAM-Messenger/node_modules/laravel-mix/node_modules/autoprefixer/node_modules/browserslist/index.js:224:16)\\n    at Browsers.parse (/home/marvinborner/Coding/BEAM-Messenger/node_modules/laravel-mix/node_modules/autoprefixer/lib/browsers.js:61:16)\\n    at new Browsers (/home/marvinborner/Coding/BEAM-Messenger/node_modules/laravel-mix/node_modules/autoprefixer/lib/browsers.js:52:30)\\n    at loadPrefixes (/home/marvinborner/Coding/BEAM-Messenger/node_modules/laravel-mix/node_modules/autoprefixer/lib/autoprefixer.js:70:24)\\n    at plugin (/home/marvinborner/Coding/BEAM-Messenger/node_modules/laravel-mix/node_modules/autoprefixer/lib/autoprefixer.js:81:24)\\n    at LazyResult.run (/home/marvinborner/Coding/BEAM-Messenger/node_modules/postcss/lib/lazy-result.js:277:20)\\n    at LazyResult.asyncTick (/home/marvinborner/Coding/BEAM-Messenger/node_modules/postcss/lib/lazy-result.js:192:32)\\n    at processing.Promise.then._this2.processed (/home/marvinborner/Coding/BEAM-Messenger/node_modules/postcss/lib/lazy-result.js:231:20)\\n    at new Promise (<anonymous>)\\n    at LazyResult.async (/home/marvinborner/Coding/BEAM-Messenger/node_modules/postcss/lib/lazy-result.js:228:27)\\n    at LazyResult.then (/home/marvinborner/Coding/BEAM-Messenger/node_modules/postcss/lib/lazy-result.js:134:21)\\n    at Promise.resolve.then.then (/home/marvinborner/Coding/BEAM-Messenger/node_modules/postcss-loader/lib/index.js:145:8)\\n    at <anonymous>\\n    at process._tickCallback (internal/process/next_tick.js:188:7)\\n    at runLoaders (/home/marvinborner/Coding/BEAM-Messenger/node_modules/webpack/lib/NormalModule.js:195:19)\\n    at /home/marvinborner/Coding/BEAM-Messenger/node_modules/loader-runner/lib/LoaderRunner.js:364:11\\n    at /home/marvinborner/Coding/BEAM-Messenger/node_modules/loader-runner/lib/LoaderRunner.js:230:18\\n    at context.callback (/home/marvinborner/Coding/BEAM-Messenger/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Promise.resolve.then.then.catch (/home/marvinborner/Coding/BEAM-Messenger/node_modules/postcss-loader/lib/index.js:194:71)\\n    at <anonymous>\\n    at process._tickCallback (internal/process/next_tick.js:188:7)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: Syntax Error \\n\\n(1:1) Unknown word\\n\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 1 | \\u001b[39m// Fonts\\n \\u001b[90m   | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 2 | \\u001b[39m\\u001b[36m@import\\u001b[39m \\u001b[36murl\\u001b[39m\\u001b[36m(\\u001b[39m\\u001b[32m\\\"https://fonts.googleapis.com/css?family=Raleway:300,400,600\\\"\\u001b[39m\\u001b[36m)\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m 3 | \\u001b[39m\\n\\n    at runLoaders (/home/marvinborner/Coding/BEAM-Messenger/node_modules/webpack/lib/NormalModule.js:195:19)\\n    at /home/marvinborner/Coding/BEAM-Messenger/node_modules/loader-runner/lib/LoaderRunner.js:364:11\\n    at /home/marvinborner/Coding/BEAM-Messenger/node_modules/loader-runner/lib/LoaderRunner.js:230:18\\n    at context.callback (/home/marvinborner/Coding/BEAM-Messenger/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Promise.resolve.then.then.catch (/home/marvinborner/Coding/BEAM-Messenger/node_modules/postcss-loader/lib/index.js:194:44)\\n    at <anonymous>\\n    at runMicrotasksCallback (internal/process/next_tick.js:121:5)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);
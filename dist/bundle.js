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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\n// import Game from './game'\nclass Background {\n                 constructor() {\n                   this.ctx = canvas.getContext(\"2d\");\n                   this.width = 960;\n                   this.height = 640;\n                   this.backgroundImage = new Image();\n                   this.backgroundImage.src = \"./src/background.png\";\n                //    this.backgroundImage.onload = this.some;\n                   this.backgroundWidth = 0;\n                   this.backgroundHeight = 0;\n                   this.initHeight = 0;\n                   this.scrollSpeed = 3;\n                 }\n\n                 some(ctx) {\n                    //   let width = this.width;\n                    //   let height = this.height;\n                    //       let scrollSpeed = 4;\n\n                    //     this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n                    //   this.ctx.drawImage(this.backgroundImage, 0, this.initHeight, width, height);\n                    //   this.ctx.drawImage(\n                    //     this.backgroundImage,\n                    //     0,\n                    //     this.initHeight - width,\n                    //     width,\n                    //     height\n                    //   );\n                        // ctx.fillStyle = \"skyblue\";\n                        // ctx.fillRect(\n                        //   0,\n                        //   0,\n                        //   960,\n                        //   640\n                        // );\n\n\n\n\n                    //   this.initHeight += scrollSpeed;\n\n                    //   if (this.initHeight == width) {this.initHeight = 0 };\n                    //   requestAnimationFrame(this.some.bind(this));\n\n                //    let backgroundWidth = this.width;\n                //    let backgroundHeight = this.height;\n                //    let width = backgroundWidth;\n                //    let height = backgroundHeight;\n                // //    this.draw;\n                // console.log(this.draw())\n                //  }\n                //  draw() {\n                //    this.ctx.clearRect(0, 0, 960, 640);\n                //    if (this.initHeight >= 960) this.initHeight = 0;\n                //    this.initHeight += this.scrollSpeed;\n                //    this.ctx.drawImage(\n                //      this.backgroundImage,\n                //      (960 - this.initHeight),\n                //      0,\n                //      this.initHeight,\n                //      this.backgroundHeight,\n                //      0,\n                //      0,\n                //      this.initHeight,\n                //      this.backgroundHeight\n                //    );\n                //    this.ctx.drawImage(\n                //      this.backgroundImage,\n                //      this.initHeight,\n                //      0,\n                //      this.backgroundWidth,\n                //      this.backgroundHeight\n                //    );\n                //        setTimeout(function() {\n                //          this.draw.bind(this);\n                //        }, 10);\n\n                 }\n\n\n                 //    requestAnimationFrame(this.draw.bind(this));\n\n                 animate() {\n                   this.some();\n                //    console.log(this)\n\n                 }\n               }\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvasEl = document.getElementById(\"canvas\")\n    new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasEl)\n    // const ctx = canvasEl.getContext(\"2d\")\n    // let sprite = new Image()\n    // sprite.onload = function() {\n    //     ctx.drawImage(sprite, 40, 445)\n    // }\n    // sprite.src = \"./plank.png\"\n\n    \n    \n})\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RunningPlank; });\n/* harmony import */ var _plank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plank */ \"./src/plank.js\");\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n\n\n\nclass RunningPlank {\n    constructor(canvas) {\n        this.ctx = canvas.getContext(\"2d\");\n        this.dimensions = { width: canvas.width, height: canvas.height };\n        this.test()\n        \n    }\n  \n    \n\n    test() {\n        this.background = new _background__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n        this.plank = new _plank__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.animate()\n    }\n\n    jumpEvent() {\n        window.addEventListener(\"keydown\",   (e) => {\n            if (e.keyCode === 32 && this.plank.jumping === false) {\n                this.plank.jump()\n            }\n        } )\n     }\n\n\n    \n\n\n\n\n    animate() {\n        this.plank.animate(this.ctx);\n        this.background.animate(this.ctx)\n        this.jumpEvent();\n        this.plank.gravity();\n        if (this.plank.y > 500 - 35 - 70) {\n            this.plank.jumping = false\n            this.plank.y = 500 - 35 - 70\n            this.plank.dy = 0;\n           \n        }\n        \n        requestAnimationFrame(this.animate.bind(this))\n    }\n\n  \n\n    \n\n}\n\n// window.addEventListener(\"keydown\", (e) => {\n//     console.log(e.key)\n// } )\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/plank.js":
/*!**********************!*\
  !*** ./src/plank.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Plank; });\nclass Plank {\n    constructor() {\n        this.x = 50;\n        this.y = 500;\n        this.width = 40; \n        this.height = 70;\n        this.dx = 0;\n        this.dy = 0;\n        this.jumping = false;\n    }\n\n    \n    jump() {\n        this.dy = -30;\n        this.jumping = true\n    }\n\n    jumpend() {\n        let variable = this.dy\n        this.dy += variable\n        this.jumping = false\n    }\n\n \n\n    gravity() {\n        this.dy += 1.5\n        this.x += this.dx\n        this.y += this.dy\n    }\n\n\n    draw(ctx) {\n        let image = new Image();\n        image.src = \"./src/plank.png\";\n        let x = this.x;\n        let y = this.y;\n        let width = this.width;\n        let height = this.height;\n        image.onload = function () {\n            ctx.clearRect(0, 0, canvas.width, canvas.height)\n            ctx.drawImage(image, x, y, width, height )\n        }\n    }\n\n    animate(ctx) {\n        this.draw(ctx)\n    }\n\n\n\n\n \n   \n}\n\n\n\n//# sourceURL=webpack:///./src/plank.js?");

/***/ })

/******/ });
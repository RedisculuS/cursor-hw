/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hw-1.js":
/*!*********************!*\
  !*** ./src/hw-1.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomSale\": () => /* binding */ randomSale\n/* harmony export */ });\nvar randomSale = function randomSale() {\n  return Math.floor(Math.random() * 100) + 1;\n};\n\n//# sourceURL=webpack://hw-14-webpack/./src/hw-1.js?");

/***/ }),

/***/ "./src/hw-2.js":
/*!*********************!*\
  !*** ./src/hw-2.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sumWithOddNum\": () => /* binding */ sumWithOddNum\n/* harmony export */ });\nfunction sumWithOddNum(minNum, maxNum, needOddNum) {\n  var sum = 0;\n  var max = maxNum;\n  var min = minNum;\n  var oddNum = needOddNum;\n\n  for (var i = min; i <= max; i++) {\n    if (oddNum && i % 2 === 0) {\n      continue;\n    }\n\n    sum += i;\n  }\n\n  return sum;\n}\n\n//# sourceURL=webpack://hw-14-webpack/./src/hw-2.js?");

/***/ }),

/***/ "./src/hw-3.js":
/*!*********************!*\
  !*** ./src/hw-3.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPow\": () => /* binding */ getPow\n/* harmony export */ });\nfunction getPow(number, power) {\n  var numFunc = number;\n  var powerFunc = power;\n\n  for (var i = 1; i < Math.abs(powerFunc); i++) {\n    numFunc *= numFunc;\n  }\n\n  if (powerFunc < 0) {\n    numFunc = 1 / numFunc;\n  } else if (powerFunc === 0) {\n    numFunc = 1;\n  }\n\n  return numFunc;\n}\n\n//# sourceURL=webpack://hw-14-webpack/./src/hw-3.js?");

/***/ }),

/***/ "./src/hw-4.js":
/*!*********************!*\
  !*** ./src/hw-4.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"studentsPairs\": () => /* binding */ studentsPairs\n/* harmony export */ });\nfunction studentsPairs(studentsArr) {\n  var pairResult = [];\n  return pairResult = [[studentsArr[0], studentsArr[3]], [studentsArr[1], studentsArr[5]], [studentsArr[2], studentsArr[4]]];\n}\n\n//# sourceURL=webpack://hw-14-webpack/./src/hw-4.js?");

/***/ }),

/***/ "./src/hw-5.js":
/*!*********************!*\
  !*** ./src/hw-5.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMedian\": () => /* binding */ getMedian\n/* harmony export */ });\nvar getMedian = function getMedian() {\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n\n  var medianArr = [].concat(numbers).filter(function (number) {\n    return Math.trunc(number) === number;\n  }).sort(function (a, b) {\n    return a - b;\n  });\n  return medianArr.length % 2 === 1 ? medianArr[Math.floor(medianArr.length / 2)] : (medianArr[medianArr.length / 2] + medianArr[medianArr.length / 2 - 1]) / 2;\n};\n\n//# sourceURL=webpack://hw-14-webpack/./src/hw-5.js?");

/***/ }),

/***/ "./src/hw-6.js":
/*!*********************!*\
  !*** ./src/hw-6.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAverageMark\": () => /* binding */ getAverageMark\n/* harmony export */ });\nvar getAverageMark = function getAverageMark(student) {\n  var averageArr = Object.values(student === null || student === void 0 ? void 0 : student.subjects).flat(Infinity); // console.log(averageArr);\n\n  return parseFloat((averageArr.reduce(function (total, mark) {\n    return total + mark;\n  }, 0) / averageArr.length).toFixed(2));\n};\n\n//# sourceURL=webpack://hw-14-webpack/./src/hw-6.js?");

/***/ }),

/***/ "./src/hw-7.js":
/*!*********************!*\
  !*** ./src/hw-7.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMiddleTaxes\": () => /* binding */ getMiddleTaxes\n/* harmony export */ });\nfunction getMiddleTaxes() {\n  return +((this === null || this === void 0 ? void 0 : this.middleSalary) * (this === null || this === void 0 ? void 0 : this.tax)).toFixed(2);\n}\n\n//# sourceURL=webpack://hw-14-webpack/./src/hw-7.js?");

/***/ }),

/***/ "./src/hw-8.js":
/*!*********************!*\
  !*** ./src/hw-8.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Student\": () => /* binding */ Student\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Student = /*#__PURE__*/function () {\n  function Student(university, course, fullName) {\n    _classCallCheck(this, Student);\n\n    this.university = university;\n    this.course = course;\n    this.fullName = fullName;\n    this.marks = [5, 4, 4, 5];\n  }\n\n  _createClass(Student, [{\n    key: \"getInfo\",\n    value: function getInfo() {\n      return \"\\u0421\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442 \".concat(this.course, \"\\u0433\\u043E \\u043A\\u0443\\u0440\\u0441\\u0443 \").concat(this.university, \", \").concat(this.fullName);\n    }\n  }, {\n    key: \"dismiss\",\n    value: function dismiss() {\n      this.marks = null;\n    }\n  }, {\n    key: \"recover\",\n    value: function recover() {\n      this.marks = [];\n    }\n  }, {\n    key: \"getMarks\",\n    get: function get() {\n      if (this.marks === null) {\n        console.log('На жаль Ви відраховані');\n      } else {\n        return this.marks;\n      }\n    }\n  }, {\n    key: \"setMark\",\n    set: function set(markStud) {\n      if (this.marks === null) {\n        console.log('На жаль Ви відраховані');\n      } else {\n        return this.marks.push(markStud);\n      }\n    }\n  }, {\n    key: \"getAverageMark\",\n    get: function get() {\n      if (this.marks === null) {\n        console.log('На жаль Ви відраховані');\n      } else {\n        return this.marks.reduce(function (total, number) {\n          return total + number;\n        }, 0) / this.marks.length;\n      }\n    }\n  }]);\n\n  return Student;\n}();\n\n//# sourceURL=webpack://hw-14-webpack/./src/hw-8.js?");

/***/ }),

/***/ "./src/hw-9.js":
/*!*********************!*\
  !*** ./src/hw-9.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateBlocks\": () => /* binding */ generateBlocks\n/* harmony export */ });\nvar cubsArea = document.querySelector('.cubArea');\nfunction generateBlocks(blockCount) {\n  for (var i = 0; i < blockCount; i++) {\n    var block = document.createElement('div');\n    block.classList.add('block');\n    block.style.backgroundColor = getRandomColor();\n    cubsArea.append(block);\n  }\n}\n\nvar getRandomNumber = function getRandomNumber() {\n  var minNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var maxNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;\n  return Math.random() * (maxNum - minNum).toFixed(2);\n};\n\nvar getRandomColor = function getRandomColor() {\n  return \"rgba(\".concat(getRandomNumber(), \" , \").concat(getRandomNumber(), \" , \").concat(getRandomNumber(), \")\");\n};\n\ngenerateBlocks(25);\nvar blocks = document.querySelectorAll('.block');\nvar delay = 1000;\nvar intID = setInterval(function () {\n  return blocks.forEach(function (block) {\n    return block.style.backgroundColor = getRandomColor();\n  });\n}, 1000);\n\n//# sourceURL=webpack://hw-14-webpack/./src/hw-9.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hw_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hw-1 */ \"./src/hw-1.js\");\n/* harmony import */ var _hw_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hw-2 */ \"./src/hw-2.js\");\n/* harmony import */ var _hw_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hw-3 */ \"./src/hw-3.js\");\n/* harmony import */ var _hw_4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hw-4 */ \"./src/hw-4.js\");\n/* harmony import */ var _hw_5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hw-5 */ \"./src/hw-5.js\");\n/* harmony import */ var _hw_6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hw-6 */ \"./src/hw-6.js\");\n/* harmony import */ var _hw_7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hw-7 */ \"./src/hw-7.js\");\n/* harmony import */ var _hw_8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hw-8 */ \"./src/hw-8.js\");\n/* harmony import */ var _hw_9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hw-9 */ \"./src/hw-9.js\");\n/* harmony import */ var _hw_9_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hw-9.css */ \"./src/hw-9.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _image_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image.jpg */ \"./src/image.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n // const sumPrices = 10000;\n// const randSale = 20;\n\nconsole.log((0,_hw_1__WEBPACK_IMPORTED_MODULE_0__.randomSale)());\nconsole.log((0,_hw_2__WEBPACK_IMPORTED_MODULE_1__.sumWithOddNum)(1, 10, true));\nconsole.log((0,_hw_3__WEBPACK_IMPORTED_MODULE_2__.getPow)(2, 4));\nconsole.log((0,_hw_4__WEBPACK_IMPORTED_MODULE_3__.studentsPairs)([\"Олександр\", \"Ігор\", \"Олена\", \"Іра\", \"Олексій\", \"Світлана\"]));\nconsole.log((0,_hw_5__WEBPACK_IMPORTED_MODULE_4__.getMedian)(1, 3, 2, 4, 5));\nvar students = [{\n  name: \"Tanya\",\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}, {\n  name: \"Victor\",\n  course: 4,\n  subjects: {\n    physics: [5, 5, 5, 3],\n    economics: [2, 3, 3, 3, 3, 5],\n    geometry: [5, 5, 2, 3, 5]\n  }\n}, {\n  name: \"Anton\",\n  course: 2,\n  subjects: {\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n    english: [5, 3],\n    cosmology: [5, 5, 5, 5]\n  }\n}];\nconsole.log((0,_hw_6__WEBPACK_IMPORTED_MODULE_5__.getAverageMark)(students[2]));\nvar ukraine = {\n  tax: 0.195,\n  middleSalary: 1789,\n  vacancies: 11476\n};\nconsole.log(_hw_7__WEBPACK_IMPORTED_MODULE_6__.getMiddleTaxes.call(ukraine));\nvar valia = new _hw_8__WEBPACK_IMPORTED_MODULE_7__.Student('КНТЕУ', 3, 'Самойлова Валентина Михайлівна');\nconsole.log(valia.getInfo());\nvar intID = setInterval(function () {\n  return blocks.forEach(function (block) {\n    return block.style.backgroundColor = getRandomColor();\n  });\n}, 1000);\n\n//# sourceURL=webpack://hw-14-webpack/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/hw-9.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/hw-9.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\r\\nbody {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n    width: 100%;\\r\\n    min-height: 100vh;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background-color: black;\\r\\n}\\r\\n.cubArea {\\r\\n    width: 250px;\\r\\n    margin: 0 auto;\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.block {\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    border: .5px solid lightgoldenrodyellow;\\r\\n    box-sizing: border-box;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hw-14-webpack/./src/hw-9.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    background-color: cornflowerblue;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hw-14-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://hw-14-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/image.jpg":
/*!***********************!*\
  !*** ./src/image.jpg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d7841fc802201f5500fd62a2975abf3d.jpg\");\n\n//# sourceURL=webpack://hw-14-webpack/./src/image.jpg?");

/***/ }),

/***/ "./src/hw-9.css":
/*!**********************!*\
  !*** ./src/hw-9.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hw_9_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./hw-9.css */ \"./node_modules/css-loader/dist/cjs.js!./src/hw-9.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hw_9_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hw_9_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://hw-14-webpack/./src/hw-9.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://hw-14-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hw-14-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
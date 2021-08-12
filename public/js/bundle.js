/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StorageManager\": () => (/* binding */ StorageManager)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar StorageManager = /*#__PURE__*/function () {\n  function StorageManager() {\n    _classCallCheck(this, StorageManager);\n  }\n\n  _createClass(StorageManager, [{\n    key: \"addItem\",\n    value: function addItem(item) {\n      var toDoItem = JSON.stringify(item);\n      var randomNumber = Math.floor(Math.random() * 100);\n      localStorage.setItem(randomNumber, toDoItem);\n    }\n  }, {\n    key: \"deleteItemByText\",\n    value: function deleteItemByText(text) {\n      for (var key in localStorage) {\n        var item = JSON.parse(localStorage.getItem(key));\n\n        if (item) {\n          if (item.input == text) {\n            localStorage.removeItem(key);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"toggleImportantByText\",\n    value: function toggleImportantByText(text) {\n      for (var key in localStorage) {\n        var item = JSON.parse(localStorage.getItem(key));\n\n        if (item) {\n          if (item.input == text && item.important == 0) {\n            item.important = 1;\n            localStorage.setItem(key, JSON.stringify(item));\n          } else if (item.input == text && item.important == 1) {\n            item.important = 0;\n            localStorage.setItem(key, JSON.stringify(item));\n          }\n        }\n      }\n    }\n  }, {\n    key: \"toggleDoneByText\",\n    value: function toggleDoneByText(text) {\n      for (var key in localStorage) {\n        var item = JSON.parse(localStorage.getItem(key));\n\n        if (item) {\n          if (item.input == text && item.done == 0) {\n            item.done = 1;\n            localStorage.setItem(key, JSON.stringify(item));\n          } else if (item.input == text && item.done == 1) {\n            item.done = 0;\n            localStorage.setItem(key, JSON.stringify(item));\n          }\n        }\n      }\n    }\n  }, {\n    key: \"getAllItems\",\n    value: function getAllItems() {\n      var array = [];\n\n      for (var key in localStorage) {\n        var item = JSON.parse(localStorage.getItem(key));\n\n        if (item) {\n          array.push(item);\n        }\n      }\n\n      return array;\n    }\n  }]);\n\n  return StorageManager;\n}();\n\n\n\n//# sourceURL=webpack://js/./src/localStorage.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoItem */ \"./src/toDoItem.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n/* harmony import */ var _uiToDoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiToDoItem */ \"./src/uiToDoItem.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _img_cancel_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/cancel.png */ \"./src/img/cancel.png\");\n/* harmony import */ var _img_note_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/note.png */ \"./src/img/note.png\");\n/* harmony import */ var _img_notebook_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/notebook.svg */ \"./src/img/notebook.svg\");\n/* harmony import */ var _img_notebook_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/notebook.jpeg */ \"./src/img/notebook.jpeg\");\n/* harmony import */ var _img_shooting_stars_mirror_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/shooting-stars-mirror.svg */ \"./src/img/shooting-stars-mirror.svg\");\n/* harmony import */ var _img_shooting_stars_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/shooting-stars.svg */ \"./src/img/shooting-stars.svg\");\n\n\n\n\n\n\n\n\n\n\nvar storageManager = new _localStorage__WEBPACK_IMPORTED_MODULE_1__.StorageManager();\nvar add = document.querySelector('#add');\nvar text = document.querySelector('#text');\nvar list = document.querySelector('#list');\nvar arrayStars = [];\nvar stars = document.querySelectorAll('.star');\nstars.forEach(function (item) {\n  return arrayStars.push(item.id);\n});\n\nadd.onclick = function () {\n  newToDoItemFromUserInput();\n  refreshToDoList();\n};\n\nlist.addEventListener('dblclick', function (e) {\n  if (e.target.tagName == 'LI') {\n    var _text = e.target.textContent;\n    storageManager.toggleImportantByText(_text);\n    refreshToDoList();\n  }\n});\ntext.addEventListener('keypress', function (event) {\n  if (event.keyCode === 13) {\n    event.preventDefault();\n    add.click();\n  }\n});\n\nlist.onclick = function (e) {\n  if (e.target.className == 'list-item__closeIMG') {\n    var uiToDoItem = _uiToDoItem__WEBPACK_IMPORTED_MODULE_2__.UiToDoItem.fromCloseElement(e.target);\n    var _text2 = uiToDoItem.text;\n    uiToDoItem.li.remove();\n    storageManager.deleteItemByText(_text2);\n  } else if (e.target.type == 'checkbox') {\n    var listItem = e.target.parentElement;\n    var _text3 = e.target.parentElement.textContent;\n\n    if (listItem.classList != 'note-list__item list-item note-list__item_important note-list__item_checked' && listItem.classList != 'note-list__item list-item note-list__item_checked') {\n      starsGlow();\n    }\n\n    storageManager.toggleDoneByText(_text3);\n    refreshToDoList();\n  }\n};\n\nfunction starsGlow() {\n  var glows = document.querySelectorAll('.star__glow');\n  var starID = arrayStars[Math.floor(Math.random() * arrayStars.length)];\n  removeArrayItem(arrayStars, starID);\n  stars.forEach(function (item) {\n    if (item.id == starID) {\n      item.classList.add('star_active');\n    }\n  });\n  glows.forEach(function (item) {\n    if (item.parentElement.parentElement.id == starID) {\n      item.classList.add('star__glow_active');\n    }\n  });\n}\n\nfunction refreshToDoList() {\n  var toDoItems = document.querySelectorAll(\"li\");\n  toDoItems.forEach(function (e) {\n    return e.parentNode.removeChild(e);\n  });\n  var sortedItems = sortToDoItems();\n  sortedItems.forEach(function (elem) {\n    return newUIElementFromLocalStorage(elem);\n  });\n}\n\nfunction sortToDoItems() {\n  var array = storageManager.getAllItems();\n  array.sort(function (a, b) {\n    var aSortWeight = a.important * 10 + a.done * -100;\n    var bSortWeight = b.important * 10 + b.done * -100;\n    if (aSortWeight == bSortWeight) return 0;\n    if (aSortWeight > bSortWeight) return -1;\n    if (aSortWeight < bSortWeight) return 1;\n  });\n  return array;\n}\n\nfunction newUIElementFromLocalStorage(toDoItem) {\n  if (toDoItem) {\n    var uiToDoItem = _uiToDoItem__WEBPACK_IMPORTED_MODULE_2__.UiToDoItem.fromToDoItem(toDoItem);\n    list.appendChild(uiToDoItem.li);\n  }\n}\n\nfunction newToDoItemFromUserInput() {\n  var input = text.value;\n\n  if (input == '') {\n    alert('Wright something');\n  } else {\n    var toDoItem = new _toDoItem__WEBPACK_IMPORTED_MODULE_0__.ToDoItem(input.trim(), 0, 0);\n    storageManager.addItem(toDoItem);\n    text.value = '';\n  }\n}\n\nfunction removeArrayItem(arr, value) {\n  var i = 0;\n\n  while (i < arr.length) {\n    if (arr[i] === value) {\n      arr.splice(i, 1);\n    } else {\n      ++i;\n    }\n  }\n\n  return arr;\n} // initial content loading\n\n\n(function () {\n  refreshToDoList();\n})();\n\n//# sourceURL=webpack://js/./src/main.js?");

/***/ }),

/***/ "./src/toDoItem.js":
/*!*************************!*\
  !*** ./src/toDoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDoItem\": () => (/* binding */ ToDoItem)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ToDoItem = function ToDoItem(input, important, done) {\n  _classCallCheck(this, ToDoItem);\n\n  this.input = input;\n  this.important = important;\n  this.done = done;\n};\n\n\n\n//# sourceURL=webpack://js/./src/toDoItem.js?");

/***/ }),

/***/ "./src/uiToDoItem.js":
/*!***************************!*\
  !*** ./src/uiToDoItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UiToDoItem\": () => (/* binding */ UiToDoItem)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\n\nvar _checkbox = /*#__PURE__*/new WeakMap();\n\nvar _closeIcon = /*#__PURE__*/new WeakMap();\n\nvar _textNode = /*#__PURE__*/new WeakMap();\n\nvar _createEmptyListItem = /*#__PURE__*/new WeakSet();\n\nvar _createCheckbox = /*#__PURE__*/new WeakSet();\n\nvar _createCloseIcon = /*#__PURE__*/new WeakSet();\n\nvar _createTextNode = /*#__PURE__*/new WeakSet();\n\nvar UiToDoItem = /*#__PURE__*/function () {\n  function UiToDoItem() {\n    _classCallCheck(this, UiToDoItem);\n\n    _createTextNode.add(this);\n\n    _createCloseIcon.add(this);\n\n    _createCheckbox.add(this);\n\n    _createEmptyListItem.add(this);\n\n    _checkbox.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _closeIcon.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _textNode.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    this.li = _classPrivateMethodGet(this, _createEmptyListItem, _createEmptyListItem2).call(this);\n\n    _classPrivateFieldSet(this, _checkbox, _classPrivateMethodGet(this, _createCheckbox, _createCheckbox2).call(this));\n\n    _classPrivateFieldSet(this, _closeIcon, _classPrivateMethodGet(this, _createCloseIcon, _createCloseIcon2).call(this));\n\n    _classPrivateFieldSet(this, _textNode, _classPrivateMethodGet(this, _createTextNode, _createTextNode2).call(this));\n\n    this.li.appendChild(_classPrivateFieldGet(this, _checkbox));\n    this.li.appendChild(_classPrivateFieldGet(this, _textNode));\n    this.li.appendChild(_classPrivateFieldGet(this, _closeIcon));\n  }\n\n  _createClass(UiToDoItem, null, [{\n    key: \"fromToDoItem\",\n    value: function fromToDoItem(toDoItem) {\n      var uiItem = new this();\n      _classPrivateFieldGet(uiItem, _textNode).nodeValue = toDoItem.input;\n\n      if (toDoItem.important == 1) {\n        uiItem.li.classList.add('note-list__item_important');\n      }\n\n      if (toDoItem.done == 1) {\n        uiItem.li.classList.add('note-list__item_checked');\n        _classPrivateFieldGet(uiItem, _checkbox).checked = true;\n      }\n\n      return uiItem;\n    }\n  }, {\n    key: \"fromCloseElement\",\n    value: function fromCloseElement(closeElement) {\n      debugger;\n      var uiItem = new this();\n\n      _classPrivateFieldSet(uiItem, _closeIcon, closeElement);\n\n      uiItem.li = closeElement.parentElement.parentElement;\n      uiItem.text = closeElement.parentElement.parentElement.textContent;\n      return uiItem;\n    }\n  }]);\n\n  return UiToDoItem;\n}();\n\nfunction _createEmptyListItem2() {\n  var li = document.createElement('li');\n  li.className = 'note-list__item';\n  li.classList.add('list-item');\n  return li;\n}\n\nfunction _createCheckbox2() {\n  var checkbox = document.createElement('input');\n  checkbox.type = 'checkbox';\n  return checkbox;\n}\n\nfunction _createCloseIcon2() {\n  var span = document.createElement('span');\n  var spanImg = document.createElement('img');\n  spanImg.src = './public/img/cancel.png';\n  spanImg.className = 'list-item__closeIMG';\n  span.appendChild(spanImg);\n  span.className = \"list-item__span\";\n  return span;\n}\n\nfunction _createTextNode2() {\n  return document.createTextNode(\"\");\n}\n\n\n\n//# sourceURL=webpack://js/./src/uiToDoItem.js?");

/***/ }),

/***/ "./src/img/cancel.png":
/*!****************************!*\
  !*** ./src/img/cancel.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/img/cancel.png\");\n\n//# sourceURL=webpack://js/./src/img/cancel.png?");

/***/ }),

/***/ "./src/img/note.png":
/*!**************************!*\
  !*** ./src/img/note.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/img/note.png\");\n\n//# sourceURL=webpack://js/./src/img/note.png?");

/***/ }),

/***/ "./src/img/notebook.jpeg":
/*!*******************************!*\
  !*** ./src/img/notebook.jpeg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/img/notebook.jpeg\");\n\n//# sourceURL=webpack://js/./src/img/notebook.jpeg?");

/***/ }),

/***/ "./src/img/notebook.svg":
/*!******************************!*\
  !*** ./src/img/notebook.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/img/notebook.svg\");\n\n//# sourceURL=webpack://js/./src/img/notebook.svg?");

/***/ }),

/***/ "./src/img/shooting-stars-mirror.svg":
/*!*******************************************!*\
  !*** ./src/img/shooting-stars-mirror.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/img/shooting-stars-mirror.svg\");\n\n//# sourceURL=webpack://js/./src/img/shooting-stars-mirror.svg?");

/***/ }),

/***/ "./src/img/shooting-stars.svg":
/*!************************************!*\
  !*** ./src/img/shooting-stars.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"/img/shooting-stars.svg\");\n\n//# sourceURL=webpack://js/./src/img/shooting-stars.svg?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://js/./src/css/main.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
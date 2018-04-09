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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/input-tags.component.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.module.js":
/*!***************************!*\
  !*** ./src/app.module.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _angular = _interopRequireDefault(__webpack_require__(/*! angular */ \"angular\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = _angular.default.module('angularjs-input-tags', []);\n\n//# sourceURL=webpack:///./src/app.module.js?");

/***/ }),

/***/ "./src/input-tags.component.js":
/*!*************************************!*\
  !*** ./src/input-tags.component.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _app = _interopRequireDefault(__webpack_require__(/*! ./app.module */ \"./src/app.module.js\"));\n\nvar _inputTags = __webpack_require__(/*! ./input-tags.constants */ \"./src/input-tags.constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @ngdoc component\n * @name inputTags\n * @module angularjs-input-tags\n *\n * @description\n * Renders an input box with tag editing support.\n */\nvar InputTags =\n/*#__PURE__*/\nfunction () {\n  InputTags.$inject = [\"$element\"];\n\n  function InputTags($element) {\n    _classCallCheck(this, InputTags);\n\n    this.$element = $element;\n  }\n\n  _createClass(InputTags, [{\n    key: \"$onInit\",\n    value: function $onInit() {\n      this.autocompleteVisible = false;\n      this.element = this.$element[0];\n      this.tags = this.tags || [];\n      this.suggestions = this.suggestions || {};\n      this.displayProperty = this.displayProperty || 'text';\n      this.keyProperty = this.keyProperty || '';\n      this.placeholder = this.placeholder || 'Add a tag';\n      this.spellcheck = this.spellcheck || true;\n      this.maxLength = this.maxLength || _inputTags.MAX_SAFE_INTEGER;\n      this.inputDebounce = this.inputDebounce || 125;\n      this.reset();\n    }\n  }, {\n    key: \"track\",\n    value: function track(tag) {\n      return tag[this.keyProperty || this.displayProperty];\n    }\n  }, {\n    key: \"getTagText\",\n    value: function getTagText(tag) {\n      return tag[this.displayProperty];\n    }\n  }, {\n    key: \"isTagValid\",\n    value: function isTagValid(tag) {\n      var tagText = this.getTagText(tag);\n      var key = this.keyProperty || this.displayProperty;\n      return tagText && this.tags.length <= this.maxLength && !this.tags.some(function (element) {\n        return element[key] === tag[key];\n      });\n    }\n  }, {\n    key: \"addTag\",\n    value: function addTag(tag) {\n      var valid = this.isTagValid(tag);\n      this.emit('onTagAdding', {\n        tag: tag\n      });\n\n      if (valid) {\n        this.tags.push(tag);\n        this.emit('onTagAdded', {\n          tag: tag\n        });\n      } else {\n        this.emit('onTagAddFailed', {\n          tag: tag\n        });\n      }\n\n      return tag;\n    }\n  }, {\n    key: \"removeTag\",\n    value: function removeTag(tag) {\n      this.emit('onTagRemoving', {\n        tag: tag\n      });\n\n      for (var i = this.tags.length - 1; i >= 0; i--) {\n        if (this.tags[i].code === tag.code) {\n          this.tags.splice(i, 1);\n        }\n      }\n\n      this.emit('onTagRemoved', {\n        tag: tag\n      });\n      return tag;\n    }\n  }, {\n    key: \"inputChange\",\n    value: function inputChange() {\n      this.emit('inputChanged', {\n        inputValue: this.inputSearch\n      });\n    }\n  }, {\n    key: \"triggerFocus\",\n    value: function triggerFocus() {\n      this.autocompleteVisible = true;\n    }\n  }, {\n    key: \"triggerBlur\",\n    value: function triggerBlur(e) {\n      if (e && this.element.contains(e.explicitOriginalTarget.parentNode)) {\n        this.$element.find('input')[0].focus();\n      } else {\n        this.autocompleteVisible = false;\n        this.reset();\n      }\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.currentItem = this.suggestions;\n      this.path = [];\n    }\n  }, {\n    key: \"next\",\n    value: function next(item) {\n      this.currentItem = item;\n      this.path.push(item);\n    }\n  }, {\n    key: \"previous\",\n    value: function previous() {\n      this.path.pop();\n      this.currentItem = this.path.length > 0 ? this.path[this.path.length - 1] : this.suggestions;\n    }\n  }, {\n    key: \"emit\",\n    value: function emit(action) {\n      if (this[action] && typeof this[action] === 'function') {\n        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n          params[_key - 1] = arguments[_key];\n        }\n\n        this[action].apply(this, params);\n      }\n    }\n  }]);\n\n  return InputTags;\n}();\n\nvar InputTagsComponent = {\n  template: __webpack_require__(/*! ./input-tags.template.html */ \"./src/input-tags.template.html\"),\n  controller: InputTags,\n  bindings: {\n    displayProperty: '@',\n    keyProperty: '@',\n    placeholder: '@',\n    tabindex: '@',\n    spellcheck: '@',\n    maxLength: '@',\n    inputDebounce: '@',\n    tags: '<',\n    suggestions: '<',\n    disabled: '<',\n    inputChanged: '&',\n    onTagAdding: '&',\n    onTagAdded: '&',\n    onTagAddFailed: '&',\n    onTagRemoving: '&',\n    onTagRemoved: '&',\n    onTagClicked: '&'\n  }\n};\n\n_app.default.component('inputTags', InputTagsComponent);\n\n//# sourceURL=webpack:///./src/input-tags.component.js?");

/***/ }),

/***/ "./src/input-tags.constants.js":
/*!*************************************!*\
  !*** ./src/input-tags.constants.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  MAX_SAFE_INTEGER: 9007199254740991\n};\n\n//# sourceURL=webpack:///./src/input-tags.constants.js?");

/***/ }),

/***/ "./src/input-tags.template.html":
/*!**************************************!*\
  !*** ./src/input-tags.template.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<label class=\\\"ait-label\\\">\\n  <ul class=\\\"ait-dropdown\\\"\\n      ng-if=\\\"$ctrl.maxLength > $ctrl.tags.length\\\"\\n      ng-show=\\\"$ctrl.autocompleteVisible\\\">\\n    <li class=\\\"ait-dropdown-item ait-dropdown-title\\\"\\n        ng-if=\\\"$ctrl.path.length > 0\\\"\\n        ng-click=\\\"$ctrl.previous()\\\">\\n      <span class=\\\"ait-dropdown-itemBack\\\"></span>\\n      <span class=\\\"ait-dropdown-itemContent\\\"\\n            ng-bind=\\\"$ctrl.currentItem[$ctrl.displayProperty]\\\"></span>\\n    </li>\\n    <li class=\\\"ait-dropdown-item\\\"\\n        ng-class=\\\"{\\n          'ait-dropdown-item--checked': item.checked,\\n          'ait-dropdown-item--last': !item.data || item.data.length === 0\\n        }\\\"\\n        ng-repeat=\\\"item in $ctrl.currentItem.data track by item.code\\\"\\n        ng-click=\\\"item.data && item.data.length > 0 ? $ctrl.next(item) : $ctrl.addTag(item)\\\">\\n      <span class=\\\"ait-dropdown-itemContent\\\"\\n            ng-bind=\\\"item[$ctrl.displayProperty]\\\"></span>\\n      <span class=\\\"ait-dropdown-itemNext\\\"\\n            ng-if=\\\"item.data && item.data.length > 0\\\"></span>\\n      <span class=\\\"ait-dropdown-itemCheck\\\"></span>\\n    </li>\\n  </ul>\\n\\n  <div class=\\\"ait-tag\\\"\\n       ng-repeat=\\\"tag in $ctrl.tags track by $ctrl.track(tag)\\\">\\n    <span class=\\\"ait-tag-text\\\"\\n          ng-bind=\\\"::$ctrl.getTagText(tag)\\\"></span>\\n    <span class=\\\"ait-tag-close\\\"\\n          style=\\\"cursor: pointer\\\"\\n          ng-click=\\\"$ctrl.removeTag(tag)\\\">\\n    </span>\\n  </div>\\n\\n  <input class=\\\"ait-input\\\"\\n         type=\\\"text\\\"\\n         autocomplete=\\\"off\\\"\\n         ng-trim=\\\"false\\\"\\n         tabindex=\\\"{{$ctrl.tabindex}}\\\"\\n         placeholder=\\\"{{$ctrl.placeholder}}\\\"\\n         spellcheck=\\\"{{$ctrl.spellcheck}}\\\"\\n         tabindex=\\\"-1\\\"\\n         ng-focus=\\\"$ctrl.triggerFocus($event)\\\"\\n         ng-blur=\\\"$ctrl.triggerBlur($event)\\\"\\n         ng-if=\\\"$ctrl.maxLength > $ctrl.tags.length\\\"\\n         ng-model=\\\"$ctrl.inputSearch\\\"\\n         ng-model-options=\\\"{ debounce: $ctrl.inputDebounce }\\\"\\n         ng-change=\\\"$ctrl.inputChange()\\\"\\n         ng-disabled=\\\"$ctrl.disabled\\\" />\\n</label>\\n\";\n\n//# sourceURL=webpack:///./src/input-tags.template.html?");

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = angular;\n\n//# sourceURL=webpack:///external_%22angular%22?");

/***/ })

/******/ });
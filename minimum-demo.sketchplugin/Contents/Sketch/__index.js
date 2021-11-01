var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/commands/arrange-selected.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/commands/arrange-selected.js":
/*!******************************************!*\
  !*** ./src/commands/arrange-selected.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_get_artboards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/get-artboards */ "./src/main/get-artboards.js");
/* harmony import */ var _main_arrange_into_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/arrange-into-grid */ "./src/main/arrange-into-grid.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
    console.log(123)
  var document = Object(sketch_dom__WEBPACK_IMPORTED_MODULE_0__["getSelectedDocument"])();
  var selection = document.selectedLayers;

  if (selection.isEmpty) {
    Object(sketch_ui__WEBPACK_IMPORTED_MODULE_1__["message"])('Nothing is selected');
    return;
  }

  var artboards = Object(_main_get_artboards__WEBPACK_IMPORTED_MODULE_2__["getAllArtboardsInSelection"])(selection.layers);

  if (artboards.length === 0) {
    Object(sketch_ui__WEBPACK_IMPORTED_MODULE_1__["message"])('You haven’t selected any artboards');
    return;
  }

  Object(sketch_ui__WEBPACK_IMPORTED_MODULE_1__["getInputFromUser"])('Set number of columns', {
    description: 'Artboards will be arranged into grid based on that number',
    initialValue: 8,
    type: sketch_ui__WEBPACK_IMPORTED_MODULE_1__["INPUT_TYPE"].string
  }, function (err, cols) {
    if (err) {
      // most likely the user canceled the input
      return;
    }

    Object(_main_arrange_into_grid__WEBPACK_IMPORTED_MODULE_3__["arrangeIntoGrid"])(artboards, +cols, null, 40);
  });
});

/***/ }),

/***/ "./src/main/apply-layout.js":
/*!**********************************!*\
  !*** ./src/main/apply-layout.js ***!
  \**********************************/
/*! exports provided: applyLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyLayout", function() { return applyLayout; });
/** Updates spatial coordinates for each element
 *  using grid parameters calculated in previous steps.
 *  Conditionally updates parent page
 */
var applyLayout = function applyLayout(elements, gridParams, normalizedCols) {
  var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var gutter = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 40;
  var parent = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
  return elements.reduce(function (updateData, element) {
    var frame = element.frame;
    var nextX = updateData.nextX,
        nextY = updateData.nextY,
        currentCol = updateData.currentCol,
        currentRow = updateData.currentRow;
    frame.x = nextX;
    frame.y = nextY;

    if (parent) {
      element.parent = parent;
    }

    if (currentCol < normalizedCols) {
      nextX += frame.width + gutter;
      console.log(nextX);
      currentCol += 1;
    } else {
      nextX = x;
      nextY += gridParams[currentRow].height + gutter;
      currentRow += 1;
      currentCol = 0;
    }

    return {
      nextX: nextX,
      nextY: nextY,
      currentCol: currentCol,
      currentRow: currentRow
    };
  }, {
    nextX: x,
    nextY: y,
    currentCol: 0,
    currentRow: 0
  });
};

/***/ }),

/***/ "./src/main/arrange-into-grid.js":
/*!***************************************!*\
  !*** ./src/main/arrange-into-grid.js ***!
  \***************************************/
/*! exports provided: arrangeIntoGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrangeIntoGrid", function() { return arrangeIntoGrid; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apply_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-layout */ "./src/main/apply-layout.js");
/* harmony import */ var _calculations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculations */ "./src/main/calculations.js");



/** Takes an array of elements and rearranges them into grid
 *  @param elements {object[]}
 *  @param cols {number} – number of columns in grid.
 *  @param rows {number} – number of rows in grid. Ignored when `cols` is specified
 *  @param gutter {number} – distance between elements
 *  @param toNewPage {boolean} – if true changes elements’ parent to `newPageName`
 *  @param newPageName {string} – custom name for new page
 */

var arrangeIntoGrid = function arrangeIntoGrid(elements) {
  var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var rows = arguments.length > 2 ? arguments[2] : undefined;
  var gutter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 40;
  var parent = arguments.length > 4 ? arguments[4] : undefined;

  // 1. Validate and normalize input data
  var _normalizeInput = Object(_calculations__WEBPACK_IMPORTED_MODULE_2__["normalizeInput"])(elements, cols, rows, gutter),
      total = _normalizeInput.total,
      normalizedRows = _normalizeInput.normalizedRows,
      normalizedCols = _normalizeInput.normalizedCols; // 2. Calculate each row’s total width and height


  var gridParams = Object(_calculations__WEBPACK_IMPORTED_MODULE_2__["calculateGridParams"])(elements, normalizedCols, normalizedRows); // 3. Get the greatest total width and height to center content in the document

  var _calculateTotalWidthA = Object(_calculations__WEBPACK_IMPORTED_MODULE_2__["calculateTotalWidthAndHeight"])(gridParams, normalizedRows, gutter),
      _calculateTotalWidthA2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_calculateTotalWidthA, 2),
      totalWidth = _calculateTotalWidthA2[0],
      totalHeight = _calculateTotalWidthA2[1]; // 4. Calculate grid anchor position


  var initialX = totalWidth / -2;
  var initialY = totalHeight / -2; // 5. Update each artboard’s `x`, `y` and parent based on previous calculations
  // (Side effects)

  Object(_apply_layout__WEBPACK_IMPORTED_MODULE_1__["applyLayout"])(elements, gridParams, normalizedCols, initialX, initialY, gutter, parent);
};

/***/ }),

/***/ "./src/main/calculations.js":
/*!**********************************!*\
  !*** ./src/main/calculations.js ***!
  \**********************************/
/*! exports provided: normalizeInput, calculateGridParams, calculateTotalWidthAndHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeInput", function() { return normalizeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateGridParams", function() { return calculateGridParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTotalWidthAndHeight", function() { return calculateTotalWidthAndHeight; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);




/** Checks input type and calculates actual number of columns and rows
 *  based on amount of elements
 */
var normalizeInput = function normalizeInput(elements, cols, rows, gutter) {
  // Check data types
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(elements) !== 'object' || !Array.isArray(elements) || typeof +cols !== 'number' && typeof +rows !== 'number' || typeof +gutter !== 'number') {
    console.log('Couldn’t calculate grid layout. Check input and try again');
    console.log(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(elements));
    console.log(Array.isArray(elements));
    console.log(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(+cols));
    console.log(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(+rows));
    console.log(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(+gutter));
    throw new TypeError('Couldn’t calculate grid layout. Check input and try again');
  } // Ensures that there is at least 1 column,
  // but no more columns than actual elements


  var total = elements.length;
  var normalizedCols = total < cols ? total : Math.ceil(cols) || 1; // const lastRow = total % cols;
  // Calculates how many rows will elements take given the exact amount of columns
  // rows = (total - lastRow) / cols;
  // rows += lastRow ? 1 : 0;
  // Returns at least one row

  var normalizedRows = isFinite(cols) ? Math.ceil(total / cols) : 1;
  return {
    total: total,
    normalizedRows: normalizedRows,
    normalizedCols: normalizedCols
  };
};
/** Calculates each row’s minimal width and height based on elements params.
 *  Returns an array of objects corresponding to each row.
 *  Grid row parameters: height, width and gutter count
 */

var calculateGridParams = function calculateGridParams(elements, cols, rows) {
  return elements.reduce(function (gridParams, element, i) {
    var colIndex = i % cols;
    var rowIndex = (i - colIndex) / cols;
    var frame = element.frame;
    var rowParams = gridParams[rowIndex] || {
      width: 0,
      height: 0,
      gutterCount: 0
    }; // Keeps previously processed rows

    var staticGridParams = gridParams[rowIndex] ? gridParams.slice(0, -1) : gridParams;
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(staticGridParams), [// Updates width, height and gutter count for current row
    {
      width: rowParams.width + frame.width,
      height: frame.height > rowParams.height ? frame.height : rowParams.height,
      gutterCount: ++rowParams.gutterCount
    }]);
  }, []);
};
/** Uses grid parameters to calculate total width and height for that grid */

var calculateTotalWidthAndHeight = function calculateTotalWidthAndHeight(gridParams, rows, gutter) {
  var vertGutter = gutter * (rows - 1);
  return gridParams.reduce(function (tuple, rowParams) {
    var _tuple = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(tuple, 2),
        totalWidth = _tuple[0],
        totalHeight = _tuple[1];

    var width = rowParams.width,
        height = rowParams.height,
        gutterCount = rowParams.gutterCount;
    var rowWidth = gutterCount * gutter + width;
    return [totalWidth > rowWidth ? totalWidth : rowWidth, totalHeight + height];
  }, [0, vertGutter]);
};

/***/ }),

/***/ "./src/main/get-artboards.js":
/*!***********************************!*\
  !*** ./src/main/get-artboards.js ***!
  \***********************************/
/*! exports provided: getAllArtboardsOnPage, getAllArtboardsInTheDocument, getAllArtboardsInSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllArtboardsOnPage", function() { return getAllArtboardsOnPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllArtboardsInTheDocument", function() { return getAllArtboardsInTheDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllArtboardsInSelection", function() { return getAllArtboardsInSelection; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

var getAllArtboardsOnPage = function getAllArtboardsOnPage(page) {
  var layers = page.layers;
  return layers.filter(function (layer) {
    return layer.type === 'Artboard';
  });
};
var getAllArtboardsInTheDocument = function getAllArtboardsInTheDocument(document) {
  return document.pages.reduce(function (acc, page) {
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(getAllArtboardsOnPage(page)));
  }, []);
};
var getAllArtboardsInSelection = function getAllArtboardsInSelection(selection) {
  return Array.from(selection.filter(function (layer) {
    return layer.type === 'Artboard';
  }));
};

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    console.log(1)

    } else if (typeof exports[key] !== 'function') {
    console.log(2)

      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    console.log(3)

    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__commands_arrange-selected.js.map
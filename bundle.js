/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/search_bar/search_bar.scss":
/*!***************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/search_bar/search_bar.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#search-bar {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  transition: opacity 0.5s ease-out;\n}\n#search-bar input,\n#search-bar button {\n  background: transparent;\n  border-style: solid;\n  border-color: #ffffff;\n  border-radius: 0.3rem;\n}\n#search-bar input:focus,\n#search-bar input:hover,\n#search-bar button:focus,\n#search-bar button:hover {\n  outline-style: none;\n  box-shadow: 0 0 1rem 0.05rem #ffffff;\n}\n#search-bar input {\n  padding: 1rem;\n  transition: 0.1s;\n  margin-right: 1rem;\n  color: #ffffff;\n  width: 100%;\n}\n#search-bar button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 5%;\n  cursor: pointer;\n}\n#search-bar button svg {\n  height: 3rem;\n  width: 3rem;\n}\n#search-bar button svg g {\n  fill: #ffffff;\n}\n#search-bar .button-clicked {\n  background: #ffffff;\n}\n#search-bar .button-clicked svg g {\n  fill: black;\n}\n\n@media (max-width: 576px) {\n  #search-bar input {\n    font-size: 1.5rem;\n    padding: 0.5rem;\n  }\n  #search-bar button {\n    padding: 1% 3%;\n  }\n  #search-bar button svg {\n    height: 2rem;\n    width: 2rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/search_bar/search_bar.scss"],"names":[],"mappings":"AAIA;EACE,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,iCAAA;AAHF;AAKE;;EAEE,uBAAA;EACA,mBAAA;EACA,qBAbI;EAcJ,qBAAA;AAHJ;AAME;;;;EAIE,mBAAA;EACA,oCAAA;AAJJ;AAOE;EACE,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,cA7BI;EA8BJ,WAAA;AALJ;AAQE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;AANJ;AAQI;EACE,YA3CY;EA4CZ,WA5CY;AAsClB;AAQM;EACE,aA9CA;AAwCR;AAWE;EACE,mBApDI;AA2CR;AAUI;EACE,WAAA;AARN;;AAaA;EAEI;IACE,iBAAA;IACA,eAAA;EAXJ;EAcE;IACE,cAAA;EAZJ;EAcI;IACE,YAAA;IACA,WAAA;EAZN;AACF","sourcesContent":["$search-bar-font: 3rem;\n$white: #ffffff;\n$mobile-screen: 576px;\n\n#search-bar {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  transition: opacity 0.5s ease-out;\n\n  input,\n  button {\n    background: transparent;\n    border-style: solid;\n    border-color: $white;\n    border-radius: 0.3rem;\n  }\n\n  input:focus,\n  input:hover,\n  button:focus,\n  button:hover {\n    outline-style: none;\n    box-shadow: 0 0 1rem 0.05rem $white;\n  }\n\n  input {\n    padding: 1rem;\n    transition: 0.1s;\n    margin-right: 1rem;\n    color: $white;\n    width: 100%;\n  }\n\n  button {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 5%;\n    cursor: pointer;\n\n    svg {\n      height: $search-bar-font;\n      width: $search-bar-font;\n\n      g {\n        fill: $white;\n      }\n    }\n  }\n\n  .button-clicked {\n    background: $white;\n    svg g {\n      fill: black;\n    }\n  }\n}\n\n@media (max-width: $mobile-screen) {\n  #search-bar {\n    input {\n      font-size: 1.5rem;\n      padding: 0.5rem;\n    }\n\n    button {\n      padding: 1% 3%;\n\n      svg {\n        height: 2rem;\n        width: 2rem;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/weather_table/weather_table.scss":
/*!*********************************************************************************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/weather_table/weather_table.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#data-container {\n  margin-top: 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 0.5s ease-out;\n}\n#data-container #weather-data > div,\n#data-container #weather-data > img {\n  display: inline-block;\n}\n#data-container #weather-data > img {\n  margin-left: 1.5rem;\n}\n#data-container #weather-data a[href] {\n  color: blue;\n}\n\n@media (max-width: 576px) {\n  #weather-data {\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  #weather-data h3 {\n    margin-bottom: 0;\n  }\n  #weather-data > img {\n    margin: 0 !important;\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/weather_table/weather_table.scss"],"names":[],"mappings":"AAIA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iCAAA;AAHF;AAMI;;EAEE,qBAAA;AAJN;AAOI;EACE,mBAAA;AALN;AAQI;EACE,WAAA;AANN;;AAWA;EACE;IACE,gBAAA;IACA,aAAA;IACA,sBAAA;IACA,2BAAA;EARF;EAUE;IACE,gBAAA;EARJ;EAUE;IACE,oBAAA;IACA,WAAA;EARJ;AACF","sourcesContent":["$search-bar-font: 3rem;\n$white: #ffffff;\n$mobile-screen: 576px;\n\n#data-container {\n  margin-top: 3rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 0.5s ease-out;\n\n  #weather-data {\n    > div,\n    > img {\n      display: inline-block;\n    }\n\n    > img {\n      margin-left: 1.5rem;\n    }\n\n    a[href] {\n      color: blue;\n    }\n  }\n}\n\n@media (max-width: $mobile-screen) {\n  #weather-data {\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n\n    h3 {\n      margin-bottom: 0;\n    }\n    > img {\n      margin: 0 !important;\n      width: 100%;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/index.scss":
/*!************************************************************************************************************************************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/index.scss ***!
  \************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".freezing-background {\n  background-color: #264653;\n}\n\n.cold-background {\n  background-color: #2a9d8f;\n}\n\n.neutral-background {\n  background-color: #e9c46a;\n}\n\n.warm-background {\n  background-color: #f4a261;\n}\n\n.hot-background {\n  background-color: #e76f51;\n}\n\n.hidden {\n  opacity: 0;\n}\n\n.visible {\n  opacity: 1;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: Arial;\n}\n\nbody {\n  overflow-x: hidden;\n  margin: 0;\n  transition: background-color 1s;\n  color: #ffffff;\n}\n\nmain {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10vh 10vw;\n}\nmain input,\nmain h1 {\n  font-size: 3rem;\n  margin-bottom: 0rem;\n}\nmain h3 {\n  font-size: 1.5rem;\n  margin-top: 0.5rem;\n}\n\n@media (max-width: 576px) {\n  main {\n    padding: 10vh 5vw;\n    display: flex;\n  }\n  main h1 {\n    font-size: 2rem;\n  }\n  main h3 {\n    font-size: 1.2rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAIA;EACE,yBAAA;AAHF;;AAKA;EACE,yBAAA;AAFF;;AAIA;EACE,yBAAA;AADF;;AAGA;EACE,yBAAA;AAAF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,sBAAA;EACA,kBAAA;AACF;;AAEA;EACE,kBAAA;EACA,SAAA;EACA,+BAAA;EACA,cApCM;AAqCR;;AAEA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AACF;AACE;;EAEE,eAjDc;EAkDd,mBAAA;AACJ;AACE;EACE,iBAAA;EACA,kBAAA;AACJ;;AAGA;EACE;IACE,iBAAA;IACA,aAAA;EAAF;EAEE;IACE,eAAA;EAAJ;EAEE;IACE,iBAAA;EAAJ;AACF","sourcesContent":["$search-bar-font: 3rem;\n$white: #ffffff;\n$mobile-screen: 576px;\n\n.freezing-background {\n  background-color: #264653;\n}\n.cold-background {\n  background-color: #2a9d8f;\n}\n.neutral-background {\n  background-color: #e9c46a;\n}\n.warm-background {\n  background-color: #f4a261;\n}\n.hot-background {\n  background-color: #e76f51;\n}\n\n.hidden {\n  opacity: 0;\n}\n\n.visible {\n  opacity: 1;\n}\n\n* {\n  box-sizing: border-box;\n  font-family: Arial;\n}\n\nbody {\n  overflow-x: hidden;\n  margin: 0;\n  transition: background-color 1s;\n  color: $white;\n}\n\nmain {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10vh 10vw;\n\n  input,\n  h1 {\n    font-size: $search-bar-font;\n    margin-bottom: 0rem;\n  }\n  h3 {\n    font-size: 1.5rem;\n    margin-top: 0.5rem;\n  }\n}\n\n@media (max-width: $mobile-screen) {\n  main {\n    padding: 10vh 5vw;\n    display: flex;\n\n    h1 {\n      font-size: 2rem;\n    }\n    h3 {\n      font-size: 1.2rem;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/components/search_bar/search_bar.html":
/*!***************************************************!*
  !*** ./src/components/search_bar/search_bar.html ***!
  \***************************************************/
/***/ ((module) => {

// Module
var code = "<form id=\"search-bar\" class=\"hidden\" action=\"\">\n  <input type=\"text\" />\n  <button type=\"submit\">\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"500\"\n      height=\"500\"\n      viewBox=\"0 0 500.00001 500.00001\"\n    >\n      <g fill=\"#2b0000\" transform=\"translate(-4.3609793 -560.0326385)\">\n        <path\n          d=\"M232.83952 614.96702a154.04816 154.04794 0 00-154.04799 154.0468 154.04816 154.04794 0 00154.04799 154.04802 154.04816 154.04794 0 00154.04799-154.04802 154.04816 154.04794 0 00-154.04799-154.0468zm0 26.77613a129.95832 127.2707 0 01129.9588 127.27067 129.95832 127.2707 0 01-129.9588 127.27067 129.95832 127.2707 0 01-129.95758-127.27067 129.95832 127.2707 0 01129.95758-127.27067z\"\n        />\n        <rect\n          width=\"173.02675\"\n          height=\"36.16684\"\n          x=\"794.8775\"\n          y=\"319.55432\"\n          rx=\"33.249443\"\n          ry=\"18.08342\"\n          transform=\"matrix(.65317 .75721 -.6069 .79479 0 0)\"\n        />\n      </g>\n    </svg>\n  </button>\n</form>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/weather_table/weather_table.html":
/*!*********************************************************!*
  !*** ./src/components/weather_table/weather_table.html ***!
  \*********************************************************/
/***/ ((module) => {

// Module
var code = "<div id=\"data-container\" class=\"hidden\">\n  <h1 id=\"city-name\"></h1>\n  <h3 id=\"date-time\"></h3>\n  <div id=\"weather-data\">\n    <div>\n      <h1>\n        <span id=\"temperature\"></span>\n        <a>C</a>\n        <span> | </span>\n        <a href=\"#\">F</a>\n      </h1>\n      <h3 id=\"description\"></h3>\n    </div>\n    <img id=\"weather-icon\" src=\"#\" alt=\"\" />\n  </div>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/search_bar/search_bar.scss":
/*!***************************************************!*
  !*** ./src/components/search_bar/search_bar.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_search_bar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./search_bar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/search_bar/search_bar.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_search_bar_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_search_bar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/weather_table/weather_table.scss":
/*!*********************************************************!*
  !*** ./src/components/weather_table/weather_table.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_weather_table_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./weather_table.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/weather_table/weather_table.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_weather_table_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_weather_table_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/index.scss":
/*!************************!*
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/common/common.js":
/*!******************************!*
  !*** ./src/common/common.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => /* binding */ getWeather,
/* harmony export */   "updateBackground": () => /* binding */ updateBackground,
/* harmony export */   "delay": () => /* binding */ delay
/* harmony export */ });
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const getWeather = async (location) => {
  try {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7986a26ff47f7262c74542709f87e5e7&units=metric`;

    let response = await fetch(url);
    let responseData = await response.json();

    let browserDate = new Date();

    let dateLocal = new Date(
      (responseData.dt +
        responseData.timezone +
        browserDate.getTimezoneOffset() * 60) *
        1000
    );

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let dateString =
      days[dateLocal.getDay()] + ", " + dateLocal.toTimeString().slice(0, 5);

    return {
      city: responseData.name,
      country: responseData.sys.country,
      temperature: responseData.main.temp,
      description: responseData.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${responseData.weather[0].icon}@2x.png`,
      dateTime: dateString,
    };
  } catch (error) {
    return false;
  }
};

const updateBackground = async (temperature) => {
  const BACKGROUNDS = [
    {
      min_temp: -99,
      max_temp: -5,
      background_class: "freezing-background",
    },
    {
      min_temp: -5,
      max_temp: 5,
      background_class: "cold-background",
    },
    {
      min_temp: 5,
      max_temp: 16,
      background_class: "neutral-background",
    },
    {
      min_temp: 16,
      max_temp: 23,
      background_class: "warm-background",
    },
    {
      min_temp: 23,
      max_temp: 99,
      background_class: "hot-background",
    },
  ];

  let newColors = BACKGROUNDS.filter(
    (elem) => elem.max_temp > temperature && elem.min_temp <= temperature
  )[0];

  document.body.className = newColors.background_class;

  await delay(1100);
};




/***/ }),

/***/ "./src/components/search_bar/search_bar.js":
/*!*************************************************!*
  !*** ./src/components/search_bar/search_bar.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadSearchBar": () => /* binding */ loadSearchBar
/* harmony export */ });
/* harmony import */ var _search_bar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search_bar.scss */ "./src/components/search_bar/search_bar.scss");
/* harmony import */ var _search_bar_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search_bar.html */ "./src/components/search_bar/search_bar.html");
/* harmony import */ var _search_bar_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_search_bar_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/common.js */ "./src/common/common.js");
/* harmony import */ var _weather_table_weather_table_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather_table/weather_table.js */ "./src/components/weather_table/weather_table.js");






const loadSearchBar = async () => {
  document.querySelector("main").insertAdjacentHTML("afterbegin", (_search_bar_html__WEBPACK_IMPORTED_MODULE_1___default()));

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    let weatherData = await (0,_common_common_js__WEBPACK_IMPORTED_MODULE_2__.getWeather)(document.querySelector("input").value);

    if (weatherData === false) {
      alert("Please input a valid city");
    } else {
      (0,_weather_table_weather_table_js__WEBPACK_IMPORTED_MODULE_3__.loadWeatherTable)(weatherData);
      (0,_common_common_js__WEBPACK_IMPORTED_MODULE_2__.updateBackground)(weatherData.temperature);
      (0,_weather_table_weather_table_js__WEBPACK_IMPORTED_MODULE_3__.removeWeatherTable)();
    }
  });
  //setTimeout needs to be made so that the query is put in the queue, thus waiting for the other async things to finish first (e.g. getWeatherData & updateBackground)
  setTimeout(() => {
    document.getElementById("search-bar").className = "visible";
  }, 0);

  await (0,_common_common_js__WEBPACK_IMPORTED_MODULE_2__.delay)(550);
};




/***/ }),

/***/ "./src/components/weather_table/weather_table.js":
/*!*******************************************************!*
  !*** ./src/components/weather_table/weather_table.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadWeatherTable": () => /* binding */ loadWeatherTable,
/* harmony export */   "removeWeatherTable": () => /* binding */ removeWeatherTable
/* harmony export */ });
/* harmony import */ var _weather_table_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather_table.scss */ "./src/components/weather_table/weather_table.scss");
/* harmony import */ var _weather_table_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather_table.html */ "./src/components/weather_table/weather_table.html");
/* harmony import */ var _weather_table_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_weather_table_html__WEBPACK_IMPORTED_MODULE_1__);



const convertTemp = (clickedElem) => {
  let tempElem = document.getElementById("temperature");
  let originalTemp = parseFloat(tempElem.getAttribute("tempValue"));

  let newTemp = 0;

  if (clickedElem.innerText == "F") {
    newTemp = (originalTemp * 9) / 5 + 32;
  } else {
    newTemp = ((originalTemp - 32) * 5) / 9;
  }

  tempElem.setAttribute("tempValue", newTemp);
  tempElem.innerText = Math.round(newTemp) + "°";

  let newConvertButton = document.querySelector("a:not([href])");
  newConvertButton.setAttribute("href", "#");
  newConvertButton.addEventListener("click", (event) => {
    convertTemp(event.target);
  });

  let clickedElemReplacement = document.createElement("a");
  clickedElemReplacement.innerText = clickedElem.innerText;
  clickedElem.replaceWith(clickedElemReplacement);
};

const loadWeatherTable = (weatherData) => {
  let tableHtml = new DOMParser().parseFromString((_weather_table_html__WEBPACK_IMPORTED_MODULE_1___default()), "text/html");

  tableHtml.getElementById("city-name").innerText =
    weatherData.city + ", " + weatherData.country;
  tableHtml.getElementById("date-time").innerText = weatherData.dateTime;
  tableHtml.getElementById("description").innerText =
    weatherData.description.charAt(0).toUpperCase() +
    weatherData.description.slice(1);
  tableHtml.getElementById("weather-icon").src = weatherData.iconUrl;

  let tempElem = tableHtml.getElementById("temperature");
  let tempValue = weatherData.temperature;

  tempElem.innerText = Math.round(tempValue) + "°";
  tempElem.setAttribute("tempValue", tempValue);

  tableHtml.querySelector("a[href]").addEventListener("click", (event) => {
    convertTemp(event.target);
  });

  document
    .querySelector("main")
    .appendChild(tableHtml.getElementById("data-container"));

  //setTimeout needs to be made so that the query is put in the queue, thus waiting for the other async things to finish first (e.g. getWeatherData & updateBackground)
  setTimeout(() => {
    document.getElementById("data-container").className = "visible";
  }, 100);
};

const removeWeatherTable = () => {
  document.getElementById("data-container").remove();
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/common.js */ "./src/common/common.js");
/* harmony import */ var _components_search_bar_search_bar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search_bar/search_bar.js */ "./src/components/search_bar/search_bar.js");
/* harmony import */ var _components_weather_table_weather_table_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/weather_table/weather_table.js */ "./src/components/weather_table/weather_table.js");





const pageLoad = async (location) => {
  const weatherData = await (0,_common_common_js__WEBPACK_IMPORTED_MODULE_1__.getWeather)(location);

  await (0,_common_common_js__WEBPACK_IMPORTED_MODULE_1__.updateBackground)(weatherData.temperature);
  await (0,_components_search_bar_search_bar_js__WEBPACK_IMPORTED_MODULE_2__.loadSearchBar)();
  (0,_components_weather_table_weather_table_js__WEBPACK_IMPORTED_MODULE_3__.loadWeatherTable)(weatherData);
};

pageLoad("London");


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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaF9iYXIvc2VhcmNoX2Jhci5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlcl90YWJsZS93ZWF0aGVyX3RhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaF9iYXIvc2VhcmNoX2Jhci5odG1sIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlcl90YWJsZS93ZWF0aGVyX3RhYmxlLmh0bWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9zZWFyY2hfYmFyL3NlYXJjaF9iYXIuc2Nzcz9jNjM0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlcl90YWJsZS93ZWF0aGVyX3RhYmxlLnNjc3M/ZmI0MSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5zY3NzPzhhZDIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaF9iYXIvc2VhcmNoX2Jhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXJfdGFibGUvd2VhdGhlcl90YWJsZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsdURBQXVELGtCQUFrQix3QkFBd0IseUJBQXlCLHNDQUFzQyxHQUFHLDBDQUEwQyw0QkFBNEIsd0JBQXdCLDBCQUEwQiwwQkFBMEIsR0FBRywyR0FBMkcsd0JBQXdCLHlDQUF5QyxHQUFHLHFCQUFxQixrQkFBa0IscUJBQXFCLHVCQUF1QixtQkFBbUIsZ0JBQWdCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixrQkFBa0Isb0JBQW9CLEdBQUcsMEJBQTBCLGlCQUFpQixnQkFBZ0IsR0FBRyw0QkFBNEIsa0JBQWtCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHFDQUFxQyxnQkFBZ0IsR0FBRywrQkFBK0IsdUJBQXVCLHdCQUF3QixzQkFBc0IsS0FBSyx3QkFBd0IscUJBQXFC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Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNzZWFyY2gtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XFxufVxcbiNzZWFyY2gtYmFyIGlucHV0LFxcbiNzZWFyY2gtYmFyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcbiNzZWFyY2gtYmFyIGlucHV0OmZvY3VzLFxcbiNzZWFyY2gtYmFyIGlucHV0OmhvdmVyLFxcbiNzZWFyY2gtYmFyIGJ1dHRvbjpmb2N1cyxcXG4jc2VhcmNoLWJhciBidXR0b246aG92ZXIge1xcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAuMDVyZW0gI2ZmZmZmZjtcXG59XFxuI3NlYXJjaC1iYXIgaW5wdXQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jc2VhcmNoLWJhciBidXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDUlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jc2VhcmNoLWJhciBidXR0b24gc3ZnIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG4jc2VhcmNoLWJhciBidXR0b24gc3ZnIGcge1xcbiAgZmlsbDogI2ZmZmZmZjtcXG59XFxuI3NlYXJjaC1iYXIgLmJ1dHRvbi1jbGlja2VkIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxufVxcbiNzZWFyY2gtYmFyIC5idXR0b24tY2xpY2tlZCBzdmcgZyB7XFxuICBmaWxsOiBibGFjaztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAjc2VhcmNoLWJhciBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICB9XFxuICAjc2VhcmNoLWJhciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxJSAzJTtcXG4gIH1cXG4gICNzZWFyY2gtYmFyIGJ1dHRvbiBzdmcge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2hfYmFyL3NlYXJjaF9iYXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7QUFIRjtBQUtFOztFQUVFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFiSTtFQWNKLHFCQUFBO0FBSEo7QUFNRTs7OztFQUlFLG1CQUFBO0VBQ0Esb0NBQUE7QUFKSjtBQU9FO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTdCSTtFQThCSixXQUFBO0FBTEo7QUFRRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQU5KO0FBUUk7RUFDRSxZQTNDWTtFQTRDWixXQTVDWTtBQXNDbEI7QUFRTTtFQUNFLGFBOUNBO0FBd0NSO0FBV0U7RUFDRSxtQkFwREk7QUEyQ1I7QUFVSTtFQUNFLFdBQUE7QUFSTjs7QUFhQTtFQUVJO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VBWEo7RUFjRTtJQUNFLGNBQUE7RUFaSjtFQWNJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFaTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRzZWFyY2gtYmFyLWZvbnQ6IDNyZW07XFxuJHdoaXRlOiAjZmZmZmZmO1xcbiRtb2JpbGUtc2NyZWVuOiA1NzZweDtcXG5cXG4jc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xcblxcbiAgaW5wdXQsXFxuICBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIH1cXG5cXG4gIGlucHV0OmZvY3VzLFxcbiAgaW5wdXQ6aG92ZXIsXFxuICBidXR0b246Zm9jdXMsXFxuICBidXR0b246aG92ZXIge1xcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSAwLjA1cmVtICR3aGl0ZTtcXG4gIH1cXG5cXG4gIGlucHV0IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBjb2xvcjogJHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDUlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIHN2ZyB7XFxuICAgICAgaGVpZ2h0OiAkc2VhcmNoLWJhci1mb250O1xcbiAgICAgIHdpZHRoOiAkc2VhcmNoLWJhci1mb250O1xcblxcbiAgICAgIGcge1xcbiAgICAgICAgZmlsbDogJHdoaXRlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmJ1dHRvbi1jbGlja2VkIHtcXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xcbiAgICBzdmcgZyB7XFxuICAgICAgZmlsbDogYmxhY2s7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtc2NyZWVuKSB7XFxuICAjc2VhcmNoLWJhciB7XFxuICAgIGlucHV0IHtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBwYWRkaW5nOiAxJSAzJTtcXG5cXG4gICAgICBzdmcge1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNkYXRhLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XFxufVxcbiNkYXRhLWNvbnRhaW5lciAjd2VhdGhlci1kYXRhID4gZGl2LFxcbiNkYXRhLWNvbnRhaW5lciAjd2VhdGhlci1kYXRhID4gaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuI2RhdGEtY29udGFpbmVyICN3ZWF0aGVyLWRhdGEgPiBpbWcge1xcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XFxuI2RhdGEtY29udGFpbmVyICN3ZWF0aGVyLWRhdGEgYVtocmVmXSB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAjd2VhdGhlci1kYXRhIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgfVxcbiAgI3dlYXRoZXItZGF0YSBoMyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxuICAjd2VhdGhlci1kYXRhID4gaW1nIHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyX3RhYmxlL3dlYXRoZXJfdGFibGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FBSEY7QUFNSTs7RUFFRSxxQkFBQTtBQUpOO0FBT0k7RUFDRSxtQkFBQTtBQUxOO0FBUUk7RUFDRSxXQUFBO0FBTk47O0FBV0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsMkJBQUE7RUFSRjtFQVVFO0lBQ0UsZ0JBQUE7RUFSSjtFQVVFO0lBQ0Usb0JBQUE7SUFDQSxXQUFBO0VBUko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkc2VhcmNoLWJhci1mb250OiAzcmVtO1xcbiR3aGl0ZTogI2ZmZmZmZjtcXG4kbW9iaWxlLXNjcmVlbjogNTc2cHg7XFxuXFxuI2RhdGEtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dDtcXG5cXG4gICN3ZWF0aGVyLWRhdGEge1xcbiAgICA+IGRpdixcXG4gICAgPiBpbWcge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgfVxcblxcbiAgICA+IGltZyB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICBhW2hyZWZdIHtcXG4gICAgICBjb2xvcjogYmx1ZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1zY3JlZW4pIHtcXG4gICN3ZWF0aGVyLWRhdGEge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFxuICAgIGgzIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuICAgID4gaW1nIHtcXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZnJlZXppbmctYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0NjUzO1xcbn1cXG5cXG4uY29sZC1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxufVxcblxcbi5uZXV0cmFsLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzQ2YTtcXG59XFxuXFxuLndhcm0tYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRhMjYxO1xcbn1cXG5cXG4uaG90LWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NmY1MTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQXJpYWw7XFxufVxcblxcbmJvZHkge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHZoIDEwdnc7XFxufVxcbm1haW4gaW5wdXQsXFxubWFpbiBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xcbn1cXG5tYWluIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiAxMHZoIDV2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIG1haW4gaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuICBtYWluIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0UseUJBQUE7QUFIRjs7QUFLQTtFQUNFLHlCQUFBO0FBRkY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUdBO0VBQ0UseUJBQUE7QUFBRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGNBcENNO0FBcUNSOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFOztFQUVFLGVBakRjO0VBa0RkLG1CQUFBO0FBQ0o7QUFDRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0VBQUY7RUFFRTtJQUNFLGVBQUE7RUFBSjtFQUVFO0lBQ0UsaUJBQUE7RUFBSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRzZWFyY2gtYmFyLWZvbnQ6IDNyZW07XFxuJHdoaXRlOiAjZmZmZmZmO1xcbiRtb2JpbGUtc2NyZWVuOiA1NzZweDtcXG5cXG4uZnJlZXppbmctYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0NjUzO1xcbn1cXG4uY29sZC1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxufVxcbi5uZXV0cmFsLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5YzQ2YTtcXG59XFxuLndhcm0tYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRhMjYxO1xcbn1cXG4uaG90LWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NmY1MTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQXJpYWw7XFxufVxcblxcbmJvZHkge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgbWFyZ2luOiAwO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcXG4gIGNvbG9yOiAkd2hpdGU7XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwdmggMTB2dztcXG5cXG4gIGlucHV0LFxcbiAgaDEge1xcbiAgICBmb250LXNpemU6ICRzZWFyY2gtYmFyLWZvbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XFxuICB9XFxuICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXNjcmVlbikge1xcbiAgbWFpbiB7XFxuICAgIHBhZGRpbmc6IDEwdmggNXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBoMSB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICAgIGgzIHtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxmb3JtIGlkPVxcXCJzZWFyY2gtYmFyXFxcIiBjbGFzcz1cXFwiaGlkZGVuXFxcIiBhY3Rpb249XFxcIlxcXCI+XFxuICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgLz5cXG4gIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIj5cXG4gICAgPHN2Z1xcbiAgICAgIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCJcXG4gICAgICB3aWR0aD1cXFwiNTAwXFxcIlxcbiAgICAgIGhlaWdodD1cXFwiNTAwXFxcIlxcbiAgICAgIHZpZXdCb3g9XFxcIjAgMCA1MDAuMDAwMDEgNTAwLjAwMDAxXFxcIlxcbiAgICA+XFxuICAgICAgPGcgZmlsbD1cXFwiIzJiMDAwMFxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTQuMzYwOTc5MyAtNTYwLjAzMjYzODUpXFxcIj5cXG4gICAgICAgIDxwYXRoXFxuICAgICAgICAgIGQ9XFxcIk0yMzIuODM5NTIgNjE0Ljk2NzAyYTE1NC4wNDgxNiAxNTQuMDQ3OTQgMCAwMC0xNTQuMDQ3OTkgMTU0LjA0NjggMTU0LjA0ODE2IDE1NC4wNDc5NCAwIDAwMTU0LjA0Nzk5IDE1NC4wNDgwMiAxNTQuMDQ4MTYgMTU0LjA0Nzk0IDAgMDAxNTQuMDQ3OTktMTU0LjA0ODAyIDE1NC4wNDgxNiAxNTQuMDQ3OTQgMCAwMC0xNTQuMDQ3OTktMTU0LjA0Njh6bTAgMjYuNzc2MTNhMTI5Ljk1ODMyIDEyNy4yNzA3IDAgMDExMjkuOTU4OCAxMjcuMjcwNjcgMTI5Ljk1ODMyIDEyNy4yNzA3IDAgMDEtMTI5Ljk1ODggMTI3LjI3MDY3IDEyOS45NTgzMiAxMjcuMjcwNyAwIDAxLTEyOS45NTc1OC0xMjcuMjcwNjcgMTI5Ljk1ODMyIDEyNy4yNzA3IDAgMDExMjkuOTU3NTgtMTI3LjI3MDY3elxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgICA8cmVjdFxcbiAgICAgICAgICB3aWR0aD1cXFwiMTczLjAyNjc1XFxcIlxcbiAgICAgICAgICBoZWlnaHQ9XFxcIjM2LjE2Njg0XFxcIlxcbiAgICAgICAgICB4PVxcXCI3OTQuODc3NVxcXCJcXG4gICAgICAgICAgeT1cXFwiMzE5LjU1NDMyXFxcIlxcbiAgICAgICAgICByeD1cXFwiMzMuMjQ5NDQzXFxcIlxcbiAgICAgICAgICByeT1cXFwiMTguMDgzNDJcXFwiXFxuICAgICAgICAgIHRyYW5zZm9ybT1cXFwibWF0cml4KC42NTMxNyAuNzU3MjEgLS42MDY5IC43OTQ3OSAwIDApXFxcIlxcbiAgICAgICAgLz5cXG4gICAgICA8L2c+XFxuICAgIDwvc3ZnPlxcbiAgPC9idXR0b24+XFxuPC9mb3JtPlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgaWQ9XFxcImRhdGEtY29udGFpbmVyXFxcIiBjbGFzcz1cXFwiaGlkZGVuXFxcIj5cXG4gIDxoMSBpZD1cXFwiY2l0eS1uYW1lXFxcIj48L2gxPlxcbiAgPGgzIGlkPVxcXCJkYXRlLXRpbWVcXFwiPjwvaDM+XFxuICA8ZGl2IGlkPVxcXCJ3ZWF0aGVyLWRhdGFcXFwiPlxcbiAgICA8ZGl2PlxcbiAgICAgIDxoMT5cXG4gICAgICAgIDxzcGFuIGlkPVxcXCJ0ZW1wZXJhdHVyZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPGE+QzwvYT5cXG4gICAgICAgIDxzcGFuPiB8IDwvc3Bhbj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiPkY8L2E+XFxuICAgICAgPC9oMT5cXG4gICAgICA8aDMgaWQ9XFxcImRlc2NyaXB0aW9uXFxcIj48L2gzPlxcbiAgICA8L2Rpdj5cXG4gICAgPGltZyBpZD1cXFwid2VhdGhlci1pY29uXFxcIiBzcmM9XFxcIiNcXFwiIGFsdD1cXFwiXFxcIiAvPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbM10hLi9zZWFyY2hfYmFyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVszXSEuL3dlYXRoZXJfdGFibGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXMpID0+IHNldFRpbWVvdXQocmVzLCBtcykpO1xuXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mYXBwaWQ9Nzk4NmEyNmZmNDdmNzI2MmM3NDU0MjcwOWY4N2U1ZTcmdW5pdHM9bWV0cmljYDtcblxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgbGV0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGxldCBicm93c2VyRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBsZXQgZGF0ZUxvY2FsID0gbmV3IERhdGUoXG4gICAgICAocmVzcG9uc2VEYXRhLmR0ICtcbiAgICAgICAgcmVzcG9uc2VEYXRhLnRpbWV6b25lICtcbiAgICAgICAgYnJvd3NlckRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwKSAqXG4gICAgICAgIDEwMDBcbiAgICApO1xuXG4gICAgbGV0IGRheXMgPSBbXG4gICAgICBcIlN1bmRheVwiLFxuICAgICAgXCJNb25kYXlcIixcbiAgICAgIFwiVHVlc2RheVwiLFxuICAgICAgXCJXZWRuZXNkYXlcIixcbiAgICAgIFwiVGh1cnNkYXlcIixcbiAgICAgIFwiRnJpZGF5XCIsXG4gICAgICBcIlNhdHVyZGF5XCIsXG4gICAgXTtcblxuICAgIGxldCBkYXRlU3RyaW5nID1cbiAgICAgIGRheXNbZGF0ZUxvY2FsLmdldERheSgpXSArIFwiLCBcIiArIGRhdGVMb2NhbC50b1RpbWVTdHJpbmcoKS5zbGljZSgwLCA1KTtcblxuICAgIHJldHVybiB7XG4gICAgICBjaXR5OiByZXNwb25zZURhdGEubmFtZSxcbiAgICAgIGNvdW50cnk6IHJlc3BvbnNlRGF0YS5zeXMuY291bnRyeSxcbiAgICAgIHRlbXBlcmF0dXJlOiByZXNwb25zZURhdGEubWFpbi50ZW1wLFxuICAgICAgZGVzY3JpcHRpb246IHJlc3BvbnNlRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgaWNvblVybDogYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3Jlc3BvbnNlRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2AsXG4gICAgICBkYXRlVGltZTogZGF0ZVN0cmluZyxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlQmFja2dyb3VuZCA9IGFzeW5jICh0ZW1wZXJhdHVyZSkgPT4ge1xuICBjb25zdCBCQUNLR1JPVU5EUyA9IFtcbiAgICB7XG4gICAgICBtaW5fdGVtcDogLTk5LFxuICAgICAgbWF4X3RlbXA6IC01LFxuICAgICAgYmFja2dyb3VuZF9jbGFzczogXCJmcmVlemluZy1iYWNrZ3JvdW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBtaW5fdGVtcDogLTUsXG4gICAgICBtYXhfdGVtcDogNSxcbiAgICAgIGJhY2tncm91bmRfY2xhc3M6IFwiY29sZC1iYWNrZ3JvdW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBtaW5fdGVtcDogNSxcbiAgICAgIG1heF90ZW1wOiAxNixcbiAgICAgIGJhY2tncm91bmRfY2xhc3M6IFwibmV1dHJhbC1iYWNrZ3JvdW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBtaW5fdGVtcDogMTYsXG4gICAgICBtYXhfdGVtcDogMjMsXG4gICAgICBiYWNrZ3JvdW5kX2NsYXNzOiBcIndhcm0tYmFja2dyb3VuZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbWluX3RlbXA6IDIzLFxuICAgICAgbWF4X3RlbXA6IDk5LFxuICAgICAgYmFja2dyb3VuZF9jbGFzczogXCJob3QtYmFja2dyb3VuZFwiLFxuICAgIH0sXG4gIF07XG5cbiAgbGV0IG5ld0NvbG9ycyA9IEJBQ0tHUk9VTkRTLmZpbHRlcihcbiAgICAoZWxlbSkgPT4gZWxlbS5tYXhfdGVtcCA+IHRlbXBlcmF0dXJlICYmIGVsZW0ubWluX3RlbXAgPD0gdGVtcGVyYXR1cmVcbiAgKVswXTtcblxuICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IG5ld0NvbG9ycy5iYWNrZ3JvdW5kX2NsYXNzO1xuXG4gIGF3YWl0IGRlbGF5KDExMDApO1xufTtcblxuZXhwb3J0IHsgZ2V0V2VhdGhlciwgdXBkYXRlQmFja2dyb3VuZCwgZGVsYXkgfTtcbiIsImltcG9ydCBcIi4vc2VhcmNoX2Jhci5zY3NzXCI7XG5pbXBvcnQgaHRtbCBmcm9tIFwiLi9zZWFyY2hfYmFyLmh0bWxcIjtcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7XG4gIGxvYWRXZWF0aGVyVGFibGUsXG4gIHJlbW92ZVdlYXRoZXJUYWJsZSxcbn0gZnJvbSBcIi4uL3dlYXRoZXJfdGFibGUvd2VhdGhlcl90YWJsZS5qc1wiO1xuaW1wb3J0IHsgdXBkYXRlQmFja2dyb3VuZCwgZ2V0V2VhdGhlciB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tbW9uLmpzXCI7XG5cbmNvbnN0IGxvYWRTZWFyY2hCYXIgPSBhc3luYyAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWUpO1xuXG4gICAgaWYgKHdlYXRoZXJEYXRhID09PSBmYWxzZSkge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgaW5wdXQgYSB2YWxpZCBjaXR5XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkV2VhdGhlclRhYmxlKHdlYXRoZXJEYXRhKTtcbiAgICAgIHVwZGF0ZUJhY2tncm91bmQod2VhdGhlckRhdGEudGVtcGVyYXR1cmUpO1xuICAgICAgcmVtb3ZlV2VhdGhlclRhYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgLy9zZXRUaW1lb3V0IG5lZWRzIHRvIGJlIG1hZGUgc28gdGhhdCB0aGUgcXVlcnkgaXMgcHV0IGluIHRoZSBxdWV1ZSwgdGh1cyB3YWl0aW5nIGZvciB0aGUgb3RoZXIgYXN5bmMgdGhpbmdzIHRvIGZpbmlzaCBmaXJzdCAoZS5nLiBnZXRXZWF0aGVyRGF0YSAmIHVwZGF0ZUJhY2tncm91bmQpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJhclwiKS5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgfSwgMCk7XG5cbiAgYXdhaXQgZGVsYXkoNTUwKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRTZWFyY2hCYXIgfTtcbiIsImltcG9ydCBcIi4vd2VhdGhlcl90YWJsZS5zY3NzXCI7XG5pbXBvcnQgaHRtbCBmcm9tIFwiLi93ZWF0aGVyX3RhYmxlLmh0bWxcIjtcblxuY29uc3QgY29udmVydFRlbXAgPSAoY2xpY2tlZEVsZW0pID0+IHtcbiAgbGV0IHRlbXBFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wZXJhdHVyZVwiKTtcbiAgbGV0IG9yaWdpbmFsVGVtcCA9IHBhcnNlRmxvYXQodGVtcEVsZW0uZ2V0QXR0cmlidXRlKFwidGVtcFZhbHVlXCIpKTtcblxuICBsZXQgbmV3VGVtcCA9IDA7XG5cbiAgaWYgKGNsaWNrZWRFbGVtLmlubmVyVGV4dCA9PSBcIkZcIikge1xuICAgIG5ld1RlbXAgPSAob3JpZ2luYWxUZW1wICogOSkgLyA1ICsgMzI7XG4gIH0gZWxzZSB7XG4gICAgbmV3VGVtcCA9ICgob3JpZ2luYWxUZW1wIC0gMzIpICogNSkgLyA5O1xuICB9XG5cbiAgdGVtcEVsZW0uc2V0QXR0cmlidXRlKFwidGVtcFZhbHVlXCIsIG5ld1RlbXApO1xuICB0ZW1wRWxlbS5pbm5lclRleHQgPSBNYXRoLnJvdW5kKG5ld1RlbXApICsgXCLCsFwiO1xuXG4gIGxldCBuZXdDb252ZXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImE6bm90KFtocmVmXSlcIik7XG4gIG5ld0NvbnZlcnRCdXR0b24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG4gIG5ld0NvbnZlcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnZlcnRUZW1wKGV2ZW50LnRhcmdldCk7XG4gIH0pO1xuXG4gIGxldCBjbGlja2VkRWxlbVJlcGxhY2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNsaWNrZWRFbGVtUmVwbGFjZW1lbnQuaW5uZXJUZXh0ID0gY2xpY2tlZEVsZW0uaW5uZXJUZXh0O1xuICBjbGlja2VkRWxlbS5yZXBsYWNlV2l0aChjbGlja2VkRWxlbVJlcGxhY2VtZW50KTtcbn07XG5cbmNvbnN0IGxvYWRXZWF0aGVyVGFibGUgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgbGV0IHRhYmxlSHRtbCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgdGFibGVIdG1sLmdldEVsZW1lbnRCeUlkKFwiY2l0eS1uYW1lXCIpLmlubmVyVGV4dCA9XG4gICAgd2VhdGhlckRhdGEuY2l0eSArIFwiLCBcIiArIHdlYXRoZXJEYXRhLmNvdW50cnk7XG4gIHRhYmxlSHRtbC5nZXRFbGVtZW50QnlJZChcImRhdGUtdGltZVwiKS5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YS5kYXRlVGltZTtcbiAgdGFibGVIdG1sLmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikuaW5uZXJUZXh0ID1cbiAgICB3ZWF0aGVyRGF0YS5kZXNjcmlwdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgd2VhdGhlckRhdGEuZGVzY3JpcHRpb24uc2xpY2UoMSk7XG4gIHRhYmxlSHRtbC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItaWNvblwiKS5zcmMgPSB3ZWF0aGVyRGF0YS5pY29uVXJsO1xuXG4gIGxldCB0ZW1wRWxlbSA9IHRhYmxlSHRtbC5nZXRFbGVtZW50QnlJZChcInRlbXBlcmF0dXJlXCIpO1xuICBsZXQgdGVtcFZhbHVlID0gd2VhdGhlckRhdGEudGVtcGVyYXR1cmU7XG5cbiAgdGVtcEVsZW0uaW5uZXJUZXh0ID0gTWF0aC5yb3VuZCh0ZW1wVmFsdWUpICsgXCLCsFwiO1xuICB0ZW1wRWxlbS5zZXRBdHRyaWJ1dGUoXCJ0ZW1wVmFsdWVcIiwgdGVtcFZhbHVlKTtcblxuICB0YWJsZUh0bWwucXVlcnlTZWxlY3RvcihcImFbaHJlZl1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnZlcnRUZW1wKGV2ZW50LnRhcmdldCk7XG4gIH0pO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpXG4gICAgLmFwcGVuZENoaWxkKHRhYmxlSHRtbC5nZXRFbGVtZW50QnlJZChcImRhdGEtY29udGFpbmVyXCIpKTtcblxuICAvL3NldFRpbWVvdXQgbmVlZHMgdG8gYmUgbWFkZSBzbyB0aGF0IHRoZSBxdWVyeSBpcyBwdXQgaW4gdGhlIHF1ZXVlLCB0aHVzIHdhaXRpbmcgZm9yIHRoZSBvdGhlciBhc3luYyB0aGluZ3MgdG8gZmluaXNoIGZpcnN0IChlLmcuIGdldFdlYXRoZXJEYXRhICYgdXBkYXRlQmFja2dyb3VuZClcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhLWNvbnRhaW5lclwiKS5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgfSwgMTAwKTtcbn07XG5cbmNvbnN0IHJlbW92ZVdlYXRoZXJUYWJsZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRXZWF0aGVyVGFibGUsIHJlbW92ZVdlYXRoZXJUYWJsZSB9O1xuIiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyBnZXRXZWF0aGVyLCB1cGRhdGVCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgbG9hZFNlYXJjaEJhciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoX2Jhci9zZWFyY2hfYmFyLmpzXCI7XG5pbXBvcnQgeyBsb2FkV2VhdGhlclRhYmxlIH0gZnJvbSBcIi4vY29tcG9uZW50cy93ZWF0aGVyX3RhYmxlL3dlYXRoZXJfdGFibGUuanNcIjtcblxuY29uc3QgcGFnZUxvYWQgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGxvY2F0aW9uKTtcblxuICBhd2FpdCB1cGRhdGVCYWNrZ3JvdW5kKHdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlKTtcbiAgYXdhaXQgbG9hZFNlYXJjaEJhcigpO1xuICBsb2FkV2VhdGhlclRhYmxlKHdlYXRoZXJEYXRhKTtcbn07XG5cbnBhZ2VMb2FkKFwiTG9uZG9uXCIpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
___CSS_LOADER_EXPORT___.push([module.id, "#search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  transition: opacity 0.5s ease-out;\n  width: 100%;\n}\n#search-bar input,\n#search-bar button {\n  background: transparent;\n  border-style: solid;\n  border-color: #ffffff;\n  border-radius: 0.3rem;\n}\n#search-bar input:focus,\n#search-bar input:hover,\n#search-bar button:focus,\n#search-bar button:hover {\n  outline-style: none;\n  box-shadow: 0 0 1rem 0.05rem #ffffff;\n}\n#search-bar input {\n  padding: 1rem;\n  transition: 0.1s;\n  margin-right: 1rem;\n  color: #ffffff;\n  min-width: 0;\n}\n#search-bar button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 2rem;\n  cursor: pointer;\n}\n#search-bar button svg {\n  height: 3rem;\n  width: 3rem;\n}\n#search-bar button svg g {\n  fill: #ffffff;\n}\n#search-bar .button-clicked {\n  background: #ffffff;\n}\n#search-bar .button-clicked svg g {\n  fill: black;\n}\n\n@media (max-width: 576px) {\n  #search-bar input {\n    font-size: 1.5rem;\n    padding: 0.5rem;\n  }\n  #search-bar button {\n    padding: 1% 3%;\n  }\n  #search-bar button svg {\n    height: 2rem;\n    width: 2rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/search_bar/search_bar.scss"],"names":[],"mappings":"AAIA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iCAAA;EACA,WAAA;AAHF;AAKE;;EAEE,uBAAA;EACA,mBAAA;EACA,qBAdI;EAeJ,qBAAA;AAHJ;AAME;;;;EAIE,mBAAA;EACA,oCAAA;AAJJ;AAOE;EACE,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,cA9BI;EAiCJ,YAAA;AAPJ;AAUE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;AARJ;AAUI;EACE,YA9CY;EA+CZ,WA/CY;AAuClB;AAUM;EACE,aAjDA;AAyCR;AAaE;EACE,mBAvDI;AA4CR;AAYI;EACE,WAAA;AAVN;;AAeA;EAEI;IACE,iBAAA;IACA,eAAA;EAbJ;EAgBE;IACE,cAAA;EAdJ;EAgBI;IACE,YAAA;IACA,WAAA;EAdN;AACF","sourcesContent":["$search-bar-font: 3rem;\n$white: #ffffff;\n$mobile-screen: 576px;\n\n#search-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  transition: opacity 0.5s ease-out;\n  width: 100%;\n\n  input,\n  button {\n    background: transparent;\n    border-style: solid;\n    border-color: $white;\n    border-radius: 0.3rem;\n  }\n\n  input:focus,\n  input:hover,\n  button:focus,\n  button:hover {\n    outline-style: none;\n    box-shadow: 0 0 1rem 0.05rem $white;\n  }\n\n  input {\n    padding: 1rem;\n    transition: 0.1s;\n    margin-right: 1rem;\n    color: $white;\n\n    //needs to be applied in order for input to work: https://stackoverflow.com/questions/43314921/strange-input-widths-in-firefox-vs-chrome\n    min-width: 0;\n  }\n\n  button {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 2rem;\n    cursor: pointer;\n\n    svg {\n      height: $search-bar-font;\n      width: $search-bar-font;\n\n      g {\n        fill: $white;\n      }\n    }\n  }\n\n  .button-clicked {\n    background: $white;\n    svg g {\n      fill: black;\n    }\n  }\n}\n\n@media (max-width: $mobile-screen) {\n  #search-bar {\n    input {\n      font-size: 1.5rem;\n      padding: 0.5rem;\n    }\n\n    button {\n      padding: 1% 3%;\n\n      svg {\n        height: 2rem;\n        width: 2rem;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7986a26ff47f7262c74542709f87e5e7&units=metric`;

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
  }, 100);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaF9iYXIvc2VhcmNoX2Jhci5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlcl90YWJsZS93ZWF0aGVyX3RhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaF9iYXIvc2VhcmNoX2Jhci5odG1sIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlcl90YWJsZS93ZWF0aGVyX3RhYmxlLmh0bWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9zZWFyY2hfYmFyL3NlYXJjaF9iYXIuc2Nzcz9jNjM0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlcl90YWJsZS93ZWF0aGVyX3RhYmxlLnNjc3M/ZmI0MSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5zY3NzPzhhZDIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaF9iYXIvc2VhcmNoX2Jhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXJfdGFibGUvd2VhdGhlcl90YWJsZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsdURBQXVELGtCQUFrQix3QkFBd0IsNEJBQTRCLHNDQUFzQyxnQkFBZ0IsR0FBRywwQ0FBMEMsNEJBQTRCLHdCQUF3QiwwQkFBMEIsMEJBQTBCLEdBQUcsMkdBQTJHLHdCQUF3Qix5Q0FBeUMsR0FBRyxxQkFBcUIsa0JBQWtCLHFCQUFxQix1QkFBdUIsbUJBQW1CLGlCQUFpQixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLG9CQUFvQixHQUFHLDBCQUEwQixpQkFBaUIsZ0JBQWdCLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLCtCQUErQix3QkFBd0IsR0FBRyxxQ0FBcUMsZ0JBQWdCLEdBQUcsK0JBQStCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLEtBQUssd0JBQXdC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NEZBQWdCO0FBQ2xCOztBQUVBOzs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNzZWFyY2gtYmFyIGlucHV0LFxcbiNzZWFyY2gtYmFyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcbiNzZWFyY2gtYmFyIGlucHV0OmZvY3VzLFxcbiNzZWFyY2gtYmFyIGlucHV0OmhvdmVyLFxcbiNzZWFyY2gtYmFyIGJ1dHRvbjpmb2N1cyxcXG4jc2VhcmNoLWJhciBidXR0b246aG92ZXIge1xcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAuMDVyZW0gI2ZmZmZmZjtcXG59XFxuI3NlYXJjaC1iYXIgaW5wdXQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuI3NlYXJjaC1iYXIgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jc2VhcmNoLWJhciBidXR0b24gc3ZnIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG4jc2VhcmNoLWJhciBidXR0b24gc3ZnIGcge1xcbiAgZmlsbDogI2ZmZmZmZjtcXG59XFxuI3NlYXJjaC1iYXIgLmJ1dHRvbi1jbGlja2VkIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxufVxcbiNzZWFyY2gtYmFyIC5idXR0b24tY2xpY2tlZCBzdmcgZyB7XFxuICBmaWxsOiBibGFjaztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAjc2VhcmNoLWJhciBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICB9XFxuICAjc2VhcmNoLWJhciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxJSAzJTtcXG4gIH1cXG4gICNzZWFyY2gtYmFyIGJ1dHRvbiBzdmcge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2hfYmFyL3NlYXJjaF9iYXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FBSEY7QUFLRTs7RUFFRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBZEk7RUFlSixxQkFBQTtBQUhKO0FBTUU7Ozs7RUFJRSxtQkFBQTtFQUNBLG9DQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0E5Qkk7RUFpQ0osWUFBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFSSjtBQVVJO0VBQ0UsWUE5Q1k7RUErQ1osV0EvQ1k7QUF1Q2xCO0FBVU07RUFDRSxhQWpEQTtBQXlDUjtBQWFFO0VBQ0UsbUJBdkRJO0FBNENSO0FBWUk7RUFDRSxXQUFBO0FBVk47O0FBZUE7RUFFSTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQWJKO0VBZ0JFO0lBQ0UsY0FBQTtFQWRKO0VBZ0JJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFkTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRzZWFyY2gtYmFyLWZvbnQ6IDNyZW07XFxuJHdoaXRlOiAjZmZmZmZmO1xcbiRtb2JpbGUtc2NyZWVuOiA1NzZweDtcXG5cXG4jc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBpbnB1dCxcXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgfVxcblxcbiAgaW5wdXQ6Zm9jdXMsXFxuICBpbnB1dDpob3ZlcixcXG4gIGJ1dHRvbjpmb2N1cyxcXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAuMDVyZW0gJHdoaXRlO1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGNvbG9yOiAkd2hpdGU7XFxuXFxuICAgIC8vbmVlZHMgdG8gYmUgYXBwbGllZCBpbiBvcmRlciBmb3IgaW5wdXQgdG8gd29yazogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDMzMTQ5MjEvc3RyYW5nZS1pbnB1dC13aWR0aHMtaW4tZmlyZWZveC12cy1jaHJvbWVcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBzdmcge1xcbiAgICAgIGhlaWdodDogJHNlYXJjaC1iYXItZm9udDtcXG4gICAgICB3aWR0aDogJHNlYXJjaC1iYXItZm9udDtcXG5cXG4gICAgICBnIHtcXG4gICAgICAgIGZpbGw6ICR3aGl0ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5idXR0b24tY2xpY2tlZCB7XFxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcXG4gICAgc3ZnIGcge1xcbiAgICAgIGZpbGw6IGJsYWNrO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXNjcmVlbikge1xcbiAgI3NlYXJjaC1iYXIge1xcbiAgICBpbnB1dCB7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgcGFkZGluZzogMSUgMyU7XFxuXFxuICAgICAgc3ZnIHtcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjZGF0YS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xcbn1cXG4jZGF0YS1jb250YWluZXIgI3dlYXRoZXItZGF0YSA+IGRpdixcXG4jZGF0YS1jb250YWluZXIgI3dlYXRoZXItZGF0YSA+IGltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbiNkYXRhLWNvbnRhaW5lciAjd2VhdGhlci1kYXRhID4gaW1nIHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcbiNkYXRhLWNvbnRhaW5lciAjd2VhdGhlci1kYXRhIGFbaHJlZl0ge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgI3dlYXRoZXItZGF0YSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIH1cXG4gICN3ZWF0aGVyLWRhdGEgaDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbiAgI3dlYXRoZXItZGF0YSA+IGltZyB7XFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlcl90YWJsZS93ZWF0aGVyX3RhYmxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQUhGO0FBTUk7O0VBRUUscUJBQUE7QUFKTjtBQU9JO0VBQ0UsbUJBQUE7QUFMTjtBQVFJO0VBQ0UsV0FBQTtBQU5OOztBQVdBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDJCQUFBO0VBUkY7RUFVRTtJQUNFLGdCQUFBO0VBUko7RUFVRTtJQUNFLG9CQUFBO0lBQ0EsV0FBQTtFQVJKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHNlYXJjaC1iYXItZm9udDogM3JlbTtcXG4kd2hpdGU6ICNmZmZmZmY7XFxuJG1vYmlsZS1zY3JlZW46IDU3NnB4O1xcblxcbiNkYXRhLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XFxuXFxuICAjd2VhdGhlci1kYXRhIHtcXG4gICAgPiBkaXYsXFxuICAgID4gaW1nIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgPiBpbWcge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgYVtocmVmXSB7XFxuICAgICAgY29sb3I6IGJsdWU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtc2NyZWVuKSB7XFxuICAjd2VhdGhlci1kYXRhIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcbiAgICBoMyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbiAgICA+IGltZyB7XFxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZyZWV6aW5nLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDY1MztcXG59XFxuXFxuLmNvbGQtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xcbn1cXG5cXG4ubmV1dHJhbC1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWM0NmE7XFxufVxcblxcbi53YXJtLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YTI2MTtcXG59XFxuXFxuLmhvdC1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzZmNTE7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTB2aCAxMHZ3O1xcbn1cXG5tYWluIGlucHV0LFxcbm1haW4gaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcXG59XFxubWFpbiBoMyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICBtYWluIHtcXG4gICAgcGFkZGluZzogMTB2aCA1dnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuICBtYWluIGgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgbWFpbiBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLHlCQUFBO0FBSEY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQXBDTTtBQXFDUjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTs7RUFFRSxlQWpEYztFQWtEZCxtQkFBQTtBQUNKO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsYUFBQTtFQUFGO0VBRUU7SUFDRSxlQUFBO0VBQUo7RUFFRTtJQUNFLGlCQUFBO0VBQUo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkc2VhcmNoLWJhci1mb250OiAzcmVtO1xcbiR3aGl0ZTogI2ZmZmZmZjtcXG4kbW9iaWxlLXNjcmVlbjogNTc2cHg7XFxuXFxuLmZyZWV6aW5nLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDY1MztcXG59XFxuLmNvbGQtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5ZDhmO1xcbn1cXG4ubmV1dHJhbC1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWM0NmE7XFxufVxcbi53YXJtLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YTI2MTtcXG59XFxuLmhvdC1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzZmNTE7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnZpc2libGUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XFxuICBjb2xvcjogJHdoaXRlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHZoIDEwdnc7XFxuXFxuICBpbnB1dCxcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAkc2VhcmNoLWJhci1mb250O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xcbiAgfVxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1zY3JlZW4pIHtcXG4gIG1haW4ge1xcbiAgICBwYWRkaW5nOiAxMHZoIDV2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgICBoMyB7XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8Zm9ybSBpZD1cXFwic2VhcmNoLWJhclxcXCIgY2xhc3M9XFxcImhpZGRlblxcXCIgYWN0aW9uPVxcXCJcXFwiPlxcbiAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIC8+XFxuICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+XFxuICAgIDxzdmdcXG4gICAgICB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiXFxuICAgICAgd2lkdGg9XFxcIjUwMFxcXCJcXG4gICAgICBoZWlnaHQ9XFxcIjUwMFxcXCJcXG4gICAgICB2aWV3Qm94PVxcXCIwIDAgNTAwLjAwMDAxIDUwMC4wMDAwMVxcXCJcXG4gICAgPlxcbiAgICAgIDxnIGZpbGw9XFxcIiMyYjAwMDBcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC00LjM2MDk3OTMgLTU2MC4wMzI2Mzg1KVxcXCI+XFxuICAgICAgICA8cGF0aFxcbiAgICAgICAgICBkPVxcXCJNMjMyLjgzOTUyIDYxNC45NjcwMmExNTQuMDQ4MTYgMTU0LjA0Nzk0IDAgMDAtMTU0LjA0Nzk5IDE1NC4wNDY4IDE1NC4wNDgxNiAxNTQuMDQ3OTQgMCAwMDE1NC4wNDc5OSAxNTQuMDQ4MDIgMTU0LjA0ODE2IDE1NC4wNDc5NCAwIDAwMTU0LjA0Nzk5LTE1NC4wNDgwMiAxNTQuMDQ4MTYgMTU0LjA0Nzk0IDAgMDAtMTU0LjA0Nzk5LTE1NC4wNDY4em0wIDI2Ljc3NjEzYTEyOS45NTgzMiAxMjcuMjcwNyAwIDAxMTI5Ljk1ODggMTI3LjI3MDY3IDEyOS45NTgzMiAxMjcuMjcwNyAwIDAxLTEyOS45NTg4IDEyNy4yNzA2NyAxMjkuOTU4MzIgMTI3LjI3MDcgMCAwMS0xMjkuOTU3NTgtMTI3LjI3MDY3IDEyOS45NTgzMiAxMjcuMjcwNyAwIDAxMTI5Ljk1NzU4LTEyNy4yNzA2N3pcXFwiXFxuICAgICAgICAvPlxcbiAgICAgICAgPHJlY3RcXG4gICAgICAgICAgd2lkdGg9XFxcIjE3My4wMjY3NVxcXCJcXG4gICAgICAgICAgaGVpZ2h0PVxcXCIzNi4xNjY4NFxcXCJcXG4gICAgICAgICAgeD1cXFwiNzk0Ljg3NzVcXFwiXFxuICAgICAgICAgIHk9XFxcIjMxOS41NTQzMlxcXCJcXG4gICAgICAgICAgcng9XFxcIjMzLjI0OTQ0M1xcXCJcXG4gICAgICAgICAgcnk9XFxcIjE4LjA4MzQyXFxcIlxcbiAgICAgICAgICB0cmFuc2Zvcm09XFxcIm1hdHJpeCguNjUzMTcgLjc1NzIxIC0uNjA2OSAuNzk0NzkgMCAwKVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC9nPlxcbiAgICA8L3N2Zz5cXG4gIDwvYnV0dG9uPlxcbjwvZm9ybT5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGlkPVxcXCJkYXRhLWNvbnRhaW5lclxcXCIgY2xhc3M9XFxcImhpZGRlblxcXCI+XFxuICA8aDEgaWQ9XFxcImNpdHktbmFtZVxcXCI+PC9oMT5cXG4gIDxoMyBpZD1cXFwiZGF0ZS10aW1lXFxcIj48L2gzPlxcbiAgPGRpdiBpZD1cXFwid2VhdGhlci1kYXRhXFxcIj5cXG4gICAgPGRpdj5cXG4gICAgICA8aDE+XFxuICAgICAgICA8c3BhbiBpZD1cXFwidGVtcGVyYXR1cmVcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxhPkM8L2E+XFxuICAgICAgICA8c3Bhbj4gfCA8L3NwYW4+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIj5GPC9hPlxcbiAgICAgIDwvaDE+XFxuICAgICAgPGgzIGlkPVxcXCJkZXNjcmlwdGlvblxcXCI+PC9oMz5cXG4gICAgPC9kaXY+XFxuICAgIDxpbWcgaWQ9XFxcIndlYXRoZXItaWNvblxcXCIgc3JjPVxcXCIjXFxcIiBhbHQ9XFxcIlxcXCIgLz5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzNdIS4vc2VhcmNoX2Jhci5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbM10hLi93ZWF0aGVyX3RhYmxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KHJlcywgbXMpKTtcblxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICB0cnkge1xuICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD03OTg2YTI2ZmY0N2Y3MjYyYzc0NTQyNzA5Zjg3ZTVlNyZ1bml0cz1tZXRyaWNgO1xuXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBsZXQgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgbGV0IGJyb3dzZXJEYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGxldCBkYXRlTG9jYWwgPSBuZXcgRGF0ZShcbiAgICAgIChyZXNwb25zZURhdGEuZHQgK1xuICAgICAgICByZXNwb25zZURhdGEudGltZXpvbmUgK1xuICAgICAgICBicm93c2VyRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjApICpcbiAgICAgICAgMTAwMFxuICAgICk7XG5cbiAgICBsZXQgZGF5cyA9IFtcbiAgICAgIFwiU3VuZGF5XCIsXG4gICAgICBcIk1vbmRheVwiLFxuICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgXCJGcmlkYXlcIixcbiAgICAgIFwiU2F0dXJkYXlcIixcbiAgICBdO1xuXG4gICAgbGV0IGRhdGVTdHJpbmcgPVxuICAgICAgZGF5c1tkYXRlTG9jYWwuZ2V0RGF5KCldICsgXCIsIFwiICsgZGF0ZUxvY2FsLnRvVGltZVN0cmluZygpLnNsaWNlKDAsIDUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNpdHk6IHJlc3BvbnNlRGF0YS5uYW1lLFxuICAgICAgY291bnRyeTogcmVzcG9uc2VEYXRhLnN5cy5jb3VudHJ5LFxuICAgICAgdGVtcGVyYXR1cmU6IHJlc3BvbnNlRGF0YS5tYWluLnRlbXAsXG4gICAgICBkZXNjcmlwdGlvbjogcmVzcG9uc2VEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICBpY29uVXJsOiBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7cmVzcG9uc2VEYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYCxcbiAgICAgIGRhdGVUaW1lOiBkYXRlU3RyaW5nLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVCYWNrZ3JvdW5kID0gYXN5bmMgKHRlbXBlcmF0dXJlKSA9PiB7XG4gIGNvbnN0IEJBQ0tHUk9VTkRTID0gW1xuICAgIHtcbiAgICAgIG1pbl90ZW1wOiAtOTksXG4gICAgICBtYXhfdGVtcDogLTUsXG4gICAgICBiYWNrZ3JvdW5kX2NsYXNzOiBcImZyZWV6aW5nLWJhY2tncm91bmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG1pbl90ZW1wOiAtNSxcbiAgICAgIG1heF90ZW1wOiA1LFxuICAgICAgYmFja2dyb3VuZF9jbGFzczogXCJjb2xkLWJhY2tncm91bmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG1pbl90ZW1wOiA1LFxuICAgICAgbWF4X3RlbXA6IDE2LFxuICAgICAgYmFja2dyb3VuZF9jbGFzczogXCJuZXV0cmFsLWJhY2tncm91bmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG1pbl90ZW1wOiAxNixcbiAgICAgIG1heF90ZW1wOiAyMyxcbiAgICAgIGJhY2tncm91bmRfY2xhc3M6IFwid2FybS1iYWNrZ3JvdW5kXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBtaW5fdGVtcDogMjMsXG4gICAgICBtYXhfdGVtcDogOTksXG4gICAgICBiYWNrZ3JvdW5kX2NsYXNzOiBcImhvdC1iYWNrZ3JvdW5kXCIsXG4gICAgfSxcbiAgXTtcblxuICBsZXQgbmV3Q29sb3JzID0gQkFDS0dST1VORFMuZmlsdGVyKFxuICAgIChlbGVtKSA9PiBlbGVtLm1heF90ZW1wID4gdGVtcGVyYXR1cmUgJiYgZWxlbS5taW5fdGVtcCA8PSB0ZW1wZXJhdHVyZVxuICApWzBdO1xuXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gbmV3Q29sb3JzLmJhY2tncm91bmRfY2xhc3M7XG5cbiAgYXdhaXQgZGVsYXkoMTEwMCk7XG59O1xuXG5leHBvcnQgeyBnZXRXZWF0aGVyLCB1cGRhdGVCYWNrZ3JvdW5kLCBkZWxheSB9O1xuIiwiaW1wb3J0IFwiLi9zZWFyY2hfYmFyLnNjc3NcIjtcbmltcG9ydCBodG1sIGZyb20gXCIuL3NlYXJjaF9iYXIuaHRtbFwiO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHtcbiAgbG9hZFdlYXRoZXJUYWJsZSxcbiAgcmVtb3ZlV2VhdGhlclRhYmxlLFxufSBmcm9tIFwiLi4vd2VhdGhlcl90YWJsZS93ZWF0aGVyX3RhYmxlLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVCYWNrZ3JvdW5kLCBnZXRXZWF0aGVyIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21tb24uanNcIjtcblxuY29uc3QgbG9hZFNlYXJjaEJhciA9IGFzeW5jICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZSk7XG5cbiAgICBpZiAod2VhdGhlckRhdGEgPT09IGZhbHNlKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBpbnB1dCBhIHZhbGlkIGNpdHlcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWRXZWF0aGVyVGFibGUod2VhdGhlckRhdGEpO1xuICAgICAgdXBkYXRlQmFja2dyb3VuZCh3ZWF0aGVyRGF0YS50ZW1wZXJhdHVyZSk7XG4gICAgICByZW1vdmVXZWF0aGVyVGFibGUoKTtcbiAgICB9XG4gIH0pO1xuICAvL3NldFRpbWVvdXQgbmVlZHMgdG8gYmUgbWFkZSBzbyB0aGF0IHRoZSBxdWVyeSBpcyBwdXQgaW4gdGhlIHF1ZXVlLCB0aHVzIHdhaXRpbmcgZm9yIHRoZSBvdGhlciBhc3luYyB0aGluZ3MgdG8gZmluaXNoIGZpcnN0IChlLmcuIGdldFdlYXRoZXJEYXRhICYgdXBkYXRlQmFja2dyb3VuZClcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYmFyXCIpLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICB9LCAxMDApO1xuXG4gIGF3YWl0IGRlbGF5KDU1MCk7XG59O1xuXG5leHBvcnQgeyBsb2FkU2VhcmNoQmFyIH07XG4iLCJpbXBvcnQgXCIuL3dlYXRoZXJfdGFibGUuc2Nzc1wiO1xuaW1wb3J0IGh0bWwgZnJvbSBcIi4vd2VhdGhlcl90YWJsZS5odG1sXCI7XG5cbmNvbnN0IGNvbnZlcnRUZW1wID0gKGNsaWNrZWRFbGVtKSA9PiB7XG4gIGxldCB0ZW1wRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGVyYXR1cmVcIik7XG4gIGxldCBvcmlnaW5hbFRlbXAgPSBwYXJzZUZsb2F0KHRlbXBFbGVtLmdldEF0dHJpYnV0ZShcInRlbXBWYWx1ZVwiKSk7XG5cbiAgbGV0IG5ld1RlbXAgPSAwO1xuXG4gIGlmIChjbGlja2VkRWxlbS5pbm5lclRleHQgPT0gXCJGXCIpIHtcbiAgICBuZXdUZW1wID0gKG9yaWdpbmFsVGVtcCAqIDkpIC8gNSArIDMyO1xuICB9IGVsc2Uge1xuICAgIG5ld1RlbXAgPSAoKG9yaWdpbmFsVGVtcCAtIDMyKSAqIDUpIC8gOTtcbiAgfVxuXG4gIHRlbXBFbGVtLnNldEF0dHJpYnV0ZShcInRlbXBWYWx1ZVwiLCBuZXdUZW1wKTtcbiAgdGVtcEVsZW0uaW5uZXJUZXh0ID0gTWF0aC5yb3VuZChuZXdUZW1wKSArIFwiwrBcIjtcblxuICBsZXQgbmV3Q29udmVydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhOm5vdChbaHJlZl0pXCIpO1xuICBuZXdDb252ZXJ0QnV0dG9uLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xuICBuZXdDb252ZXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBjb252ZXJ0VGVtcChldmVudC50YXJnZXQpO1xuICB9KTtcblxuICBsZXQgY2xpY2tlZEVsZW1SZXBsYWNlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjbGlja2VkRWxlbVJlcGxhY2VtZW50LmlubmVyVGV4dCA9IGNsaWNrZWRFbGVtLmlubmVyVGV4dDtcbiAgY2xpY2tlZEVsZW0ucmVwbGFjZVdpdGgoY2xpY2tlZEVsZW1SZXBsYWNlbWVudCk7XG59O1xuXG5jb25zdCBsb2FkV2VhdGhlclRhYmxlID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGxldCB0YWJsZUh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuXG4gIHRhYmxlSHRtbC5nZXRFbGVtZW50QnlJZChcImNpdHktbmFtZVwiKS5pbm5lclRleHQgPVxuICAgIHdlYXRoZXJEYXRhLmNpdHkgKyBcIiwgXCIgKyB3ZWF0aGVyRGF0YS5jb3VudHJ5O1xuICB0YWJsZUh0bWwuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLXRpbWVcIikuaW5uZXJUZXh0ID0gd2VhdGhlckRhdGEuZGF0ZVRpbWU7XG4gIHRhYmxlSHRtbC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLmlubmVyVGV4dCA9XG4gICAgd2VhdGhlckRhdGEuZGVzY3JpcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgIHdlYXRoZXJEYXRhLmRlc2NyaXB0aW9uLnNsaWNlKDEpO1xuICB0YWJsZUh0bWwuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWljb25cIikuc3JjID0gd2VhdGhlckRhdGEuaWNvblVybDtcblxuICBsZXQgdGVtcEVsZW0gPSB0YWJsZUh0bWwuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wZXJhdHVyZVwiKTtcbiAgbGV0IHRlbXBWYWx1ZSA9IHdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlO1xuXG4gIHRlbXBFbGVtLmlubmVyVGV4dCA9IE1hdGgucm91bmQodGVtcFZhbHVlKSArIFwiwrBcIjtcbiAgdGVtcEVsZW0uc2V0QXR0cmlidXRlKFwidGVtcFZhbHVlXCIsIHRlbXBWYWx1ZSk7XG5cbiAgdGFibGVIdG1sLnF1ZXJ5U2VsZWN0b3IoXCJhW2hyZWZdXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBjb252ZXJ0VGVtcChldmVudC50YXJnZXQpO1xuICB9KTtcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKVxuICAgIC5hcHBlbmRDaGlsZCh0YWJsZUh0bWwuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhLWNvbnRhaW5lclwiKSk7XG5cbiAgLy9zZXRUaW1lb3V0IG5lZWRzIHRvIGJlIG1hZGUgc28gdGhhdCB0aGUgcXVlcnkgaXMgcHV0IGluIHRoZSBxdWV1ZSwgdGh1cyB3YWl0aW5nIGZvciB0aGUgb3RoZXIgYXN5bmMgdGhpbmdzIHRvIGZpbmlzaCBmaXJzdCAoZS5nLiBnZXRXZWF0aGVyRGF0YSAmIHVwZGF0ZUJhY2tncm91bmQpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0YS1jb250YWluZXJcIikuY2xhc3NOYW1lID0gXCJ2aXNpYmxlXCI7XG4gIH0sIDEwMCk7XG59O1xuXG5jb25zdCByZW1vdmVXZWF0aGVyVGFibGUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0YS1jb250YWluZXJcIikucmVtb3ZlKCk7XG59O1xuXG5leHBvcnQgeyBsb2FkV2VhdGhlclRhYmxlLCByZW1vdmVXZWF0aGVyVGFibGUgfTtcbiIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciwgdXBkYXRlQmFja2dyb3VuZCB9IGZyb20gXCIuL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IGxvYWRTZWFyY2hCYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaF9iYXIvc2VhcmNoX2Jhci5qc1wiO1xuaW1wb3J0IHsgbG9hZFdlYXRoZXJUYWJsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvd2VhdGhlcl90YWJsZS93ZWF0aGVyX3RhYmxlLmpzXCI7XG5cbmNvbnN0IHBhZ2VMb2FkID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihsb2NhdGlvbik7XG5cbiAgYXdhaXQgdXBkYXRlQmFja2dyb3VuZCh3ZWF0aGVyRGF0YS50ZW1wZXJhdHVyZSk7XG4gIGF3YWl0IGxvYWRTZWFyY2hCYXIoKTtcbiAgbG9hZFdlYXRoZXJUYWJsZSh3ZWF0aGVyRGF0YSk7XG59O1xuXG5wYWdlTG9hZChcIkxvbmRvblwiKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
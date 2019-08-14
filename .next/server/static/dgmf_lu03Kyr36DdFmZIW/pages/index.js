module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style/css");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31);
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_15__);














function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_12___default.a.TabPane;
var ITEMS = [{
  title: "可口可乐",
  price: 4,
  location: "园区商店",
  image: "/static/images/cola.png"
}, {
  title: "乐事薯片",
  price: 12,
  location: "园区商店",
  image: "/static/images/leshi.png"
}, {
  title: "利群烟",
  price: 19,
  location: "园区商店",
  image: "/static/images/liqun.png"
}, {
  title: "农夫山泉",
  price: 3,
  location: "园区商店",
  image: "/static/images/water.png"
}];

var Market =
/*#__PURE__*/
function (_Component) {
  _inherits(Market, _Component);

  function Market() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Market);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Market)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      visible: false,
      currentImage: ""
    };

    _this.buy =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee(buyer, item) {
        var data, res, back;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = Object.assign({}, item, {
                  buyer: buyer
                });
                _context.prev = 1;
                _context.next = 4;
                return fetch("/api/buy", {
                  method: "POST",
                  credentials: "include",
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                });

              case 4:
                res = _context.sent;

                if (!res) {
                  _context.next = 12;
                  break;
                }

                _context.next = 8;
                return res.json();

              case 8:
                back = _context.sent;

                _this.setState({
                  visible: true,
                  currentImage: item.image
                });

                _context.next = 13;
                break;

              case 12:
                console.error("服务器无响应");

              case 13:
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0.toString());

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 15]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.callback = function (key) {
      console.log(key);
    };

    _this.handleOk = function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    };

    _this.handleCancel = function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    };

    return _this;
  }

  _createClass(Market, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "bg"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "description",
        content: "\u4E91\u5E27\u6570\u6D6A - \u4E91\u5E02\u573A"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "baidu-site-verification",
        content: "jdx62mQhIl"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("title", null, "\u865A\u62DF\u5DE5\u4E1A\u56ED\u533A")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "head"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        lg: 4
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("a", {
        href: "/blockchain",
        target: "_blank"
      }, "\u533A\u5757\u94FE\u540E\u53F0")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        lg: 16
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("center", null, "\u865A\u62DF\u5DE5\u4E1A\u56ED\u533A")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        lg: 4
      }, "\u8D26\u6237\u603B\u91D1\u989D\uFF1A821,233\u5143"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_12___default.a, {
        onChange: this.callback,
        type: "card"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(TabPane, {
        tab: "\u56ED\u533A\u5546\u5E97",
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, ITEMS.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_9___default.a, {
          span: 6,
          key: item.title,
          style: {
            padding: 20
          }
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: "card-style"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
          src: item.image,
          alt: "logo",
          style: {
            height: "140px",
            marginBottom: "20px"
          }
        })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h3", null, item.title), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h4", null, item.price, "\u5143"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "primary",
          onClick: function onClick() {
            return _this2.buy("self", item);
          }
        }, "\u8D2D\u4E70")));
      }))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(TabPane, {
        tab: "\u56ED\u533A\u52A0\u6CB9\u7AD9",
        key: "2"
      }, "Content of Tab Pane 2"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(TabPane, {
        tab: "\u56ED\u533A\u505C\u8F66\u573A",
        key: "3"
      }, "Content of Tab Pane 3")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        title: "\u5B8C\u6210\u51FA\u8D27",
        visible: this.state.visible,
        footer: null,
        onOk: this.handleOk,
        onCancel: this.handleCancel
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
        src: this.state.currentImage,
        style: {
          height: "140px",
          marginBottom: "20px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h3", null, "\u8D2D\u4E70\u6210\u529F"))));
    }
  }]);

  return Market;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Market);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style/css");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card/style/css");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style/css");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs/style/css");

/***/ }),
/* 32 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
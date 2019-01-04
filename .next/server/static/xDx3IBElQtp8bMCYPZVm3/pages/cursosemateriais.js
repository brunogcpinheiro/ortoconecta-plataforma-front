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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./src/components/header.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var primaryColor = "#ffd32a";
var Navigation = external_styled_components_default.a.div.withConfig({
  displayName: "header__Navigation",
  componentId: "sc-1srxfqa-0"
})(["height:80px;display:flex;align-items:center;justify-content:space-around;list-style:none;background:#fff;width:100%;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);@media(max-width:1128px){ul{display:none;}", " .icon{display:block;float:right;}}"], MenuIcon);
var MenuIcon = external_styled_components_default.a.div.withConfig({
  displayName: "header__MenuIcon",
  componentId: "sc-1srxfqa-1"
})(["display:flex;flex-direction:column;cursor:pointer;div{width:35px;height:5px;background-color:#999;margin:2px 0;display:none;}"]);
var Logo = external_styled_components_default.a.div.withConfig({
  displayName: "header__Logo",
  componentId: "sc-1srxfqa-2"
})(["background:transparent;a{display:flex;text-decoration:none;color:inherit;justify-content:center;align-items:center;background:transparent;img{width:70px;height:70px;background:transparent;}h2{font-size:2rem;margin-left:16px;color:", ";background:transparent;}}"], primaryColor);
var Menu = external_styled_components_default.a.ul.withConfig({
  displayName: "header__Menu",
  componentId: "sc-1srxfqa-3"
})(["display:flex;background:transparent;list-style:none;color:#303030;li{padding:10px;font-weight:bold;background:transparent;a{text-decoration:none;color:#7f8c8d;text-transform:uppercase;transition:color 0.4s;background:transparent;font-size:0.9rem;&:after{display:block;content:'';border-bottom:solid 3px ", ";transform:scaleX(0);transition:transform 250ms ease-in-out;}&:hover{color:", ";transition:color 0.4s;}&:hover:after{transform:scaleX(1);}}"], primaryColor, primaryColor);
var Dropdown = external_styled_components_default.a.div.withConfig({
  displayName: "header__Dropdown",
  componentId: "sc-1srxfqa-4"
})(["position:absolute;display:block;width:100%;margin-top:35px;"]);
var DropdownContent = external_styled_components_default.a.div.withConfig({
  displayName: "header__DropdownContent",
  componentId: "sc-1srxfqa-5"
})(["display:block;position:absolute;width:100vw;background-color:#f9f9f9;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);padding:12px 16px;z-index:1;li{padding:16px;border-bottom:1px solid #ccc;a{text-decoration:none;font-size:1.2rem;&:visited,&:active,&:link{color:inherit;}&:hover{color:", "}}}"], primaryColor);

var header_Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showMenu: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMenuOpen", function (e) {
      e.preventDefault();

      _this.setState(function (state) {
        return {
          showMenu: !state.showMenu
        };
      });
    });

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(Navigation, null, external_react_default.a.createElement(Logo, null, external_react_default.a.createElement(link_default.a, {
        href: "/",
        prefetch: true
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
        src: "/static/logo.jpeg"
      }), external_react_default.a.createElement("h2", null, "OrtoConecta")))), external_react_default.a.createElement(MenuIcon, {
        onClick: function onClick(e) {
          return _this2.handleMenuOpen(e);
        }
      }, external_react_default.a.createElement("div", {
        className: "icon"
      }), external_react_default.a.createElement("div", {
        className: "icon"
      }), external_react_default.a.createElement("div", {
        className: "icon"
      })), this.state.showMenu === true && external_react_default.a.createElement(Dropdown, null, external_react_default.a.createElement(DropdownContent, null, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, "In\xEDcio"))), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/painel"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, "Painel OrtoConecta"))), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/cursos_e_materiais"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, "Cursos e Materiais"))), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/experiencias"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, "Compartilhando Experi\xEAncias"))), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/dicas"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, "Dicas"))), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/especialidades"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, "Especialidades"))), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/casos_clinicos"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, "Casos Cl\xEDnicos"))), external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/aplicativos"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", null, "Aplicativos"))))), external_react_default.a.createElement(Menu, null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/"
      }, external_react_default.a.createElement("a", null, "In\xEDcio"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/painel"
      }, external_react_default.a.createElement("a", null, "Painel OrtoConecta"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/cursos_e_materiais"
      }, external_react_default.a.createElement("a", null, "Cursos e Materiais"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/experiencias"
      }, external_react_default.a.createElement("a", null, "Compartilhando Experi\xEAncias"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/dicas"
      }, external_react_default.a.createElement("a", null, "Dicas"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/especialidades"
      }, external_react_default.a.createElement("a", null, "Especialidades"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/casos_clinicos"
      }, external_react_default.a.createElement("a", null, "Casos Cl\xEDnicos"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: "/aplicativos"
      }, external_react_default.a.createElement("a", {
        style: {
          color: 'red'
        }
      }, "Aplicativos"))))));
    }
  }]);

  return Header;
}(external_react_["Component"]);

/* harmony default export */ var header = (header_Header);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/footer.js



var footer_primaryColor = "#ffd32a";
var FooterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "footer__FooterWrapper",
  componentId: "hdo0sp-0"
})(["width:100%;height:150px;background:#181818;display:flex;flex-direction:column;justify-content:center;align-items:center;p{color:#fff;text-align:center;a{color:", ";text-decoration:none;&:hover{text-decoration:underline;}}}div{display:flex;align-items:center;justify-content:center;a{color:", ";font-size:2rem;padding:16px;&:hover{color:#fff;}}}"], footer_primaryColor, footer_primaryColor);

var footer_Footer = function Footer(props) {
  return external_react_default.a.createElement(FooterWrapper, null, external_react_default.a.createElement("p", null, "Entre em contato conosco pelas redes sociais!"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
    href: "https://instagram.com/ortoconecta",
    target: "blank"
  }, external_react_default.a.createElement(fa_["FaInstagram"], {
    style: {
      fontSize: '2rem'
    }
  })), external_react_default.a.createElement("a", {
    href: "https://facebook.com/OrtoConecta-321693788686012",
    target: "blank"
  }, external_react_default.a.createElement(fa_["FaFacebookSquare"], {
    style: {
      fontSize: '2rem'
    }
  })), external_react_default.a.createElement("a", {
    href: "https://wa.me/5511938002884",
    target: "blank"
  }, external_react_default.a.createElement(fa_["FaWhatsapp"], {
    style: {
      fontSize: '2rem'
    }
  }))), external_react_default.a.createElement("p", null, "Ou por email no endere\xE7o: ortoconecta@ortoconecta.com.br"), external_react_default.a.createElement("p", null, "Desenvolvido por ", external_react_default.a.createElement("a", {
    href: "https://facebook.com/bruno.carpinelli",
    target: "blank"
  }, external_react_default.a.createElement("span", null, "Bruno Carpinelli"))), external_react_default.a.createElement("p", null, "Direitos Reservados \xAE"));
};

/* harmony default export */ var footer = (footer_Footer);
// CONCATENATED MODULE: ./src/styles/global.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    font-family: 'Poppins', sans-serif;\n    padding: 0;\n    margin: 0;\n    \n    font-size: 13px;\n  }\n\n  body, html {\n    height: 100%;\n    background: #f5f5f5;\n    scroll-behavior: smooth;\n  }\n\n  a, button {\n    cursor: pointer;\n  }\n  \n  a {\n    color: #ffd32a;\n  }\n  \n  .iframe {\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject());
/* harmony default export */ var global = (GlobalStyle);
// CONCATENATED MODULE: ./layouts/main.js






var Container = external_styled_components_default.a.div.withConfig({
  displayName: "main__Container",
  componentId: "sc-196d63t-0"
})(["height:100%;"]);
/* harmony default export */ var main = __webpack_exports__["a"] = (function (props) {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins",
    rel: "stylesheet"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/aos@next/dist/aos.css"
  }))), external_react_default.a.createElement(Container, null, external_react_default.a.createElement(global, null), external_react_default.a.createElement(header, null), props.children, external_react_default.a.createElement(footer, null)));
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-iframe");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/pt-br");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_9__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var primaryColor = "#ffd32a";
var CoursesAndMaterialsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "cursosemateriais__CoursesAndMaterialsWrapper",
  componentId: "sc-1d8ifnv-0"
})(["padding:16px;background:transparent;margin:0 auto;max-width:1366px;div{margin:20px 0 50px 0;text-align:center;}h2{font-size:3rem;span{color:", ";font-size:3rem;font-weight:bold;}}h2,p{text-align:center;}"], primaryColor);
var CourseAndMaterialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "cursosemateriais__CourseAndMaterialWrapper",
  componentId: "sc-1d8ifnv-1"
})(["display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap;margin:0 auto;@media(max-width:980px){display:flex;justify-content:space-around;align-items:center;}"]);
var Course = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "cursosemateriais__Course",
  componentId: "sc-1d8ifnv-2"
})(["width:50%;height:100%;min-height:300px;display:flex;justify-content:space-around;align-items:center;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);flex-wrap:wrap;margin:0 auto;div{display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;margin:30px auto;}h1{margin-top:10px;font-size:1.5rem;}h2{font-size:1.3rem;color:#ee5253;margin-top:10px;}h3{font-size:1.2rem;background:#fff;span{font-weight:normal;background:#fff;}}@media(max-width:980px){display:flex;justify-content:space-around;align-items:center;width:85%;padding:5px;}"]);
var Material = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "cursosemateriais__Material",
  componentId: "sc-1d8ifnv-3"
})(["width:350px;height:100%;min-height:300px;display:flex;justify-content:space-around;align-items:center;margin-top:50px;padding:16px;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);flex-wrap:wrap;div{display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;width:100%;height:100%;}h3{color:#7f8c8d;font-style:italic;background:#fff;width:100%;height:100%;}h4{font-size:1.3rem;background:#fff;width:100%;height:100%;}h5{background:#fff;width:100%;height:100%;}p{flex:1;text-align:justify;margin-top:16px;font-size:1.1rem;background:#fff;width:100%;height:100%;}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "cursosemateriais__Title",
  componentId: "sc-1d8ifnv-4"
})(["color:inherit;font-size:2.2rem;font-weight:bold;transition:color 0.2s;background:#fff;text-align:center;margin-top:-20px;&:hover{color:#000;transition:color 0.2s;}"]);
var CourseImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "cursosemateriais__CourseImg",
  componentId: "sc-1d8ifnv-5"
})(["width:100%;height:100%;margin:0;padding:0;border-top-left-radius:10px;border-top-right-radius:10px;"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "cursosemateriais__Img",
  componentId: "sc-1d8ifnv-6"
})(["width:150px;height:150px;object-fit:cover;object-position:top;border-radius:50%;border:2px solid ", ";"], primaryColor);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "cursosemateriais__Button",
  componentId: "sc-1d8ifnv-7"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";&:visited,&:active,&:link{color:inherit;}"], primaryColor, primaryColor);

var CoursesAndMaterials = function CoursesAndMaterials(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "OrtoConecta | Cursos e Materiais")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CoursesAndMaterialsWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Cursos e Eventos OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CourseAndMaterialWrapper, null, props.courses.map(function (course) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Course, {
      key: course.id,
      className: "animated zoomIn delay-1s"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CourseImg, {
      src: "https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(course.course_image.url),
      alt: course.title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, course.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Local.: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, course.local)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Quando.: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, course.date_event)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, course.price), course.sold_out === true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Inscri\xE7\xF5es esgotadas!") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaCreditCard"], {
      style: {
        background: 'transparent',
        fontSize: '1.2rem',
        marginRight: '10px'
      }
    }), " Comprar")));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Material ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Exclusivo"), " OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Estudo sobre Alicates Ortod\xF4nticos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_iframe__WEBPACK_IMPORTED_MODULE_3___default.a, {
    url: "https://www.slideshare.net/slideshow/embed_code/key/wuMVMJvfdz3k5J",
    width: "90%",
    height: "550px",
    className: "iframe",
    display: "initial",
    position: "relative",
    styles: {
      marginTop: "50px"
    },
    allowFullScreen: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Materiais ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Dispon\xEDveis"), " OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "OBS.:"), " Baixe o material para ler o artigo completo!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CourseAndMaterialWrapper, null, props.materials.map(function (material) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Material, {
      key: material.id,
      "data-aos": "fade-up",
      "data-aos-duration": "1000"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {
      src: "https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(material.material_image.url),
      alt: material.title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, material.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Publicado em ", (dayjs__WEBPACK_IMPORTED_MODULE_6___default.a.locale('pt-br'), dayjs__WEBPACK_IMPORTED_MODULE_6___default()(material.publishedAt).format('DD_MMMM_YYYY').split('_').join(' de '))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Por ", material.author), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "P\xE1ginas: ", material.pages), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
      href: "https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(material.material.url),
      target: "blank"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaSistrix"], {
      style: {
        background: 'transparent',
        fontSize: '1.2rem',
        marginRight: '10px'
      }
    }), " Visualizar Material"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, material.description)));
  }))))));
};

CoursesAndMaterials.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, materialResponse, coursesResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://api.ortoconecta.com.br/materials");

          case 3:
            materialResponse = _context.sent;
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://api.ortoconecta.com.br/courses");

          case 6:
            coursesResponse = _context.sent;
            return _context.abrupt("return", {
              materials: materialResponse.data,
              courses: coursesResponse.data
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (CoursesAndMaterials);

/***/ })
/******/ ]);
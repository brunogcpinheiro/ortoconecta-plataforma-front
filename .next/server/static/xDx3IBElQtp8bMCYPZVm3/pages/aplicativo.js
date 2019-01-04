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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
/* 5 */,
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);





var AppWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "aplicativo__AppWrapper",
  componentId: "zyw8ot-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:50px auto;padding:16px;max-width:1366px;height:calc(100vh - 362px);h2{font-size:3rem;text-align:center;animation-name:flash;animation-duration:0.7s;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;animation-play-state:running;}@keyframes h2{from{color:yellow;}to{color:black;}}"]);

var Aplicativo = function Aplicativo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "OrtoConecta | Aplicativos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Aguardem...")));
};

/* harmony default export */ __webpack_exports__["default"] = (Aplicativo);

/***/ })
/******/ ]);
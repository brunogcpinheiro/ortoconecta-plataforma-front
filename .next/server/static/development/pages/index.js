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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./layouts/main.js":
/*!*************************!*\
  !*** ./layouts/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/header */ "./src/components/header.js");
/* harmony import */ var _src_components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/footer */ "./src/components/footer.js");
/* harmony import */ var _src_styles_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/styles/global */ "./src/styles/global.js");






var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "main__Container",
  componentId: "sc-196d63t-0"
})(["height:100%;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/aos@next/dist/aos.css"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_styles_global__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var primaryColor = "#FFD32A";
var Hero = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1hta4ma-0"
})(["height:100vh;background:#fafafa;background-image:linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('/static/background.jpg');background-size:cover;background-repeat:no-repeat;background-position:center center;background-attachment:fixed;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;> div{margin:-10px 0 50px 0;}"]);
var HeroInner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__HeroInner",
  componentId: "sc-1hta4ma-1"
})(["background:transparent;color:#d6d6d6;margin-top:-50px;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;h1{font-size:3.5em;margin-top:0;margin-bottom:0.5em;background:transparent;}h2{background:transparent;font-size:1.7em;}a{display:block;width:150px;padding:1em;margin-top:10px;margin-bottom:100px;margin-left:auto;margin-right:auto;color:#000;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";transition:background 0.3s ease-in-out;-webkit-box-shadow:0px 3px 5px 0px rgba(94,94,94,1);-moz-box-shadow:0px 3px 5px 0px rgba(94,94,94,1);box-shadow:0px 3px 5px 0px rgba(94,94,94,1);&:hover{background:transparent;color:#fff;transition:background 0.3s ease-in-out;}}"], primaryColor, primaryColor);
var About = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({
  displayName: "pages__About",
  componentId: "sc-1hta4ma-2"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;background:#fff;width:80%;max-width:800px;margin:-50px auto;margin-bottom:50px;border:1px solid #ccc;padding:26px;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);h1{font-size:3rem;color:#f1c40f;font-weight:bold;}img{width:300px;height:300px;margin-top:16px;border-radius:15px;border:2px solid ", ";}p{margin-top:16px;text-align:justify;font-size:1.2rem;color:#2d3436;width:100%;strong{font-size:1.2rem;color:#181818;}span{margin-left:24px;font-size:1.2rem;}}h3{font-size:2rem;margin-top:24px;color:#2d3436;text-align:center;span{margin-top:16px;font-size:2rem;color:#f1c40f;font-weight:bold;}}"], primaryColor);
var ProfilesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__ProfilesWrapper",
  componentId: "sc-1hta4ma-3"
})(["width:100%;height:100%;background:", ";display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;margin-top:100px;h1{margin:20px 0;font-size:3rem;}"], primaryColor);
var Profiles = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Profiles",
  componentId: "sc-1hta4ma-4"
})(["width:100%;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;margin-bottom:20px;"]);
var Profile = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Profile",
  componentId: "sc-1hta4ma-5"
})(["display:flex;flex-direction:column;justify-content:space-around;align-items:center;width:280px;height:600px;background:#f5f5f5;text-align:justify;padding:16px;margin:15px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);@media(max-width:965px){width:30%;margin:16px;}@media(max-width:885px){width:70%;}p{width:100%;}img{width:150px;height:150px;border-radius:50%;}"]);
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__ContentWrapper",
  componentId: "sc-1hta4ma-6"
})(["width:70%;height:100%;background:#f5f5f5;display:flex;flex-direction:column;justify-content:center;align-items:center;flex-wrap:wrap;padding:20px;margin:50px auto;h1{font-size:3rem;margin-bottom:20px;text-align:center;}"]);
var Contents = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Contents",
  componentId: "sc-1hta4ma-7"
})(["width:100%;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;margin-bottom:20px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Content",
  componentId: "sc-1hta4ma-8"
})(["width:200px;height:300px;background:#fff;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 10px 0 -5px #eee,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px -9px rgba(0,0,0,0.15);padding:30px;margin:15px;display:flex;flex-direction:column;justify-content:space-between;h4{color:#EAB543;}p{color:#30336b}"]);
var Acessar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "pages__Acessar",
  componentId: "sc-1hta4ma-9"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";&:visited,&:active,&:link{color:inherit;}"], primaryColor, primaryColor);
var NewsletterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__NewsletterWrapper",
  componentId: "sc-1hta4ma-10"
})(["width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:", ";padding:5rem 0;h1{font-size:2.5rem;text-align:center;}p{font-size:1.1rem;margin:20px 0;}"], primaryColor);
var Newsletter = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "pages__Newsletter",
  componentId: "sc-1hta4ma-11"
})(["input{border:none;border:1px solid #fff;padding:1.2rem;width:300px;}button{border:none;background:#181818;color:", ";padding:1.2rem;}"], primaryColor); // const Maintance = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   img {
//     width: 300px;
//     height: 300px;
//   }
//   h3 {
//     font-family: Arial, sans-serif;
//     font-size: 2rem;
//     margin-top: 10px;
//   }
//   p {
//     font-family: Arial, sans-serif;
//     font-size: 1.1rem;
//   }
// `

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      email: '',
      maintance: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var newSubscriber;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                newSubscriber = {
                  email: _this.state.email
                };

                if (!_this.state.email) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://api.ortoconecta.com.br/subscribers", newSubscriber).then(_this.setState({
                  email: ''
                })).then(sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                  type: 'success',
                  title: 'Cadastro realizado com sucesso!'
                })).catch(function () {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                    type: 'error',
                    title: 'Algo errado com a requisição. Tente novamente!'
                  });
                });

              case 5:
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.replace("http://www.ortoconecta.com.br");
                _context.next = 9;
                break;

              case 8:
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                  type: 'error',
                  title: 'Preencha o campo!'
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return (// Tela de Manutenção
        // <Maintance>
        //   <img src="/static/logo.jpeg" alt="Logo" />
        //   <h3>Desculpe, estamos em atualização...</h3>
        //   <p>Obrigado!</p>
        // </Maintance>
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "OrtoConecta")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Hero, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_11__["Carousel"], {
          showThumbs: false,
          infiniteLoop: true,
          autoPlay: true,
          showStatus: false,
          width: "450px",
          dynamicHeight: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "../static/0-fotocapa.jpg"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "../static/4-fotocapa.jpg"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "../static/5-fotocapa.jpg"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "../static/3-fotocapa.jpg"
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeroInner, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Voc\xEA conectado ao mundo da Ortodontia!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "#about"
        }, "Saiba mais")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(About, {
          id: "about",
          "data-aos": "fade-right"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Quem Somos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "/static/logo-nova.jpeg",
          alt: "OrtoConecta"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "A"), " internet tornou-se um meio em que se trocam informa\xE7\xF5es de forma r\xE1pida e eficaz com a inten\xE7\xE3o de enriquecer e propagar conhecimento para que esse seja aplicado em favor da qualidade de vida. N\xE3o sendo diferente e partilhando da mesma voca\xE7\xE3o de disseminar informa\xE7\xF5es, ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Dr. Gustavo Furlan"), ", ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Dr. Luiz Felipe Maff\xEDa"), " e ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Dr. Alexandre Mendon\xE7a"), " re\xFAnem profissionalismo, experi\xEAncia e dedica\xE7\xE3o para impulsionarem a OrtoConecta. Uma plataforma digital completa de ortodontia que hospeda em um mesmo espa\xE7o informa\xE7\xF5es, compartilhamento de experi\xEAncias, dicas cl\xEDnicas, aulas, cursos e todo tipo de ferramenta para voc\xEA poder atingir a excel\xEAncia profissional. Espero que curtam o espa\xE7o e que nos ajudem a fazer da OrtoConecta um site sem filtros ou photoshops. Um lugar da odontologia real."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Bem-vindos \xE0 plataforma ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "OrtoConecta!"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfilesWrapper, {
          "data-aos": "fade-left"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Perfis Profissionais"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Profiles, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Profile, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "/static/Luiz.jpeg",
          alt: "Dr. Luiz Felipe Maffia"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Dr. Luiz Felipe Maffia"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\xC9 graduado em Odontologia em 1998 pela Universidade Metodista de S\xE3o Paulo ; logo ingressou na \xE1rea da Ortodontia terminando seu Aperfei\xE7oamento na t\xE9cnica Edgewise e Straight wire em 2000 ( IPEO /SP) , em seguida ingressou no curso de aperfei\xE7oamento em Ortopedia Funcional dos Maxilares com t\xE9rmino em 2004 ( GEOFOM ) ; Iniciando posteriormente sua especializa\xE7\xE3o em Ortodontia, esta terminada em 2008 e desde ent\xE3o integra o quadro de professores e mais recentemente a de coordenador do curso de p\xF3s gradua\xE7\xE3o em Ortodontia da Aneo/SP . Sua atua\xE7\xE3o cl\xEDnica \xE9 relevante em diversas cl\xEDnicas particulares ( Osasco e S\xE3o Paulo ) tendo seu consult\xF3rio situado na cidade de S\xE3o Bernardo do Campo desde 1999.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Profile, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "/static/alexandre.png",
          alt: "Dr. Alexandre Mendon\xE7a"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Dr. Alexandre Mendon\xE7a"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\xC9 formado pela Universidade de Uberaba desde 1997. Especializou-se em Ortodontia pela ANEO-SP sendo tamb\xE9m p\xF3s graduado latu sensu em implantodontia e cirurgia oral menor. Atuante na \xE1rea desde 1997, Dr. Alexandre Mendon\xE7a \xE9 propriet\xE1rio da marca     OAM \u2013 Odontologia com grande \xEAnfase na \xE1rea de Planos Assistenciais Odontol\xF3gicos voltados \xE0s empresas.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Profile, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "/static/gustavo.png",
          alt: "Dr. Gustavo Furlan"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Dr. Gustavo Furlan"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\xC9 formado pela Universidade de S\xE3o Paulo desde 2002. Especializou-se em ortodontia para posteriormente tornar-se mestre e atuar como professor dos cursos de atualiza\xE7\xE3o e especializa\xE7\xE3o nos estados de Minas Gerais, Rio Grande do Sul e S\xE3o Paulo. Ortodontista cl\xEDnico desde 2005, Dr. Gustavo Furlan \xE9 propriet\xE1rio da marca \u201CGF Ortodontia\u201D.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentWrapper, {
          "data-aos": "fade-right",
          "data-aos-duration": "1000"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Conte\xFAdo do Site"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Contents, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaChalkboard"], {
          style: {
            fontSize: '3rem',
            color: '#ffc32a'
          }
        }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Painel OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Um quadro sequenciado da ortodontia para voc\xEA estar sempre ligado nas etapas do tratamento."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          prefetch: true,
          href: "/painel"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Acessar, null, "Acessar"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaBook"], {
          style: {
            fontSize: '3rem',
            color: '#ffc32a'
          }
        }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Cursos e Materiais"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Produ\xE7\xE3o de cursos e materiais did\xE1ticos para que voc\xEA aprimore suas compet\xEAncias e habilidades."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          prefetch: true,
          href: "/cursos_e_materiais"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Acessar, null, "Acessar"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaBriefcase"], {
          style: {
            fontSize: '3rem',
            color: '#ffc32a'
          }
        }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Compartilhando Experi\xEAncias"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "O compartilhamento de experi\xEAncias como ferramenta para ampliar o seu leque de conhecimento."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          prefetch: true,
          href: "/experiencias"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Acessar, null, "Acessar"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaLightbulb"], {
          style: {
            fontSize: '3rem',
            color: '#ffc32a'
          }
        }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Dicas OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Um espa\xE7o para voc\xEA obter dicas cl\xEDnicas que poder\xE3o facilitar o dia a dia do seu consult\xF3rio."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          prefetch: true,
          href: "/dicas"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Acessar, null, "Acessar"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaHeartbeat"], {
          style: {
            fontSize: '3rem',
            color: '#ffc32a'
          }
        }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "OrtoConecta Especialidades"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Uma \xE1rea destinada \xE0 multidisciplinaridade mostrando a import\xE2ncia da integra\xE7\xE3o de especialidades na busca do melhor para o paciente."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          prefetch: true,
          href: "/especialidades"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Acessar, null, "Acessar"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsletterWrapper, {
          "data-aos": "fade-left",
          "data-aos-duration": "1000"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Registre-se em nossa Newsletter!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Receba nosso cont\xE9udo por email! N\xE3o \xE9 spam!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Newsletter, {
          onSubmit: function onSubmit(e) {
            return _this2.handleSubmit(e);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "email",
          placeholder: "Digite seu melhor email...",
          onChange: function onChange(e) {
            return _this2.setState({
              email: e.target.value
            });
          },
          value: this.state.email
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, "Inscrever")))))
      );
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);



var primaryColor = "#ffd32a";
var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "footer__FooterWrapper",
  componentId: "hdo0sp-0"
})(["width:100%;height:150px;background:#181818;display:flex;flex-direction:column;justify-content:center;align-items:center;p{color:#fff;text-align:center;a{color:", ";text-decoration:none;&:hover{text-decoration:underline;}}}div{display:flex;align-items:center;justify-content:center;a{color:", ";font-size:2rem;padding:16px;&:hover{color:#fff;}}}"], primaryColor, primaryColor);

var Footer = function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Entre em contato conosco pelas redes sociais!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://instagram.com/ortoconecta",
    target: "blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaInstagram"], {
    style: {
      fontSize: "2rem"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://facebook.com/OrtoConecta-321693788686012",
    target: "blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebookSquare"], {
    style: {
      fontSize: "2rem"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://wa.me/5511948195388",
    target: "blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaWhatsapp"], {
    style: {
      fontSize: "2rem"
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ou por email no endere\xE7o: ortoconecta@gmail.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Desenvolvido por", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://facebook.com/bruno.carpinelli",
    target: "blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Bruno Carpinelli"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Direitos Reservados \xAE"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
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
var Navigation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "header__Navigation",
  componentId: "sc-1srxfqa-0"
})(["height:80px;display:flex;align-items:center;justify-content:space-around;list-style:none;background:#fff;width:100%;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);@media (max-width:1128px){ul{display:none;}", " .icon{display:block;float:right;}}"], MenuIcon);
var MenuIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "header__MenuIcon",
  componentId: "sc-1srxfqa-1"
})(["display:flex;flex-direction:column;cursor:pointer;div{width:35px;height:5px;background-color:#999;margin:2px 0;display:none;}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "header__Logo",
  componentId: "sc-1srxfqa-2"
})(["background:transparent;a{display:flex;text-decoration:none;color:inherit;justify-content:center;align-items:center;background:transparent;img{width:70px;height:70px;background:transparent;}h2{font-size:2rem;margin-left:16px;color:", ";background:transparent;}}"], primaryColor);
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "header__Menu",
  componentId: "sc-1srxfqa-3"
})(["display:flex;background:transparent;list-style:none;color:#303030;li{padding:10px;font-weight:bold;background:transparent;a{text-decoration:none;color:#7f8c8d;text-transform:uppercase;transition:color 0.4s;background:transparent;font-size:0.9rem;&:after{display:block;content:'';border-bottom:solid 3px ", ";transform:scaleX(0);transition:transform 250ms ease-in-out;}&:hover{color:", ";transition:color 0.4s;}&:hover:after{transform:scaleX(1);}}"], primaryColor, primaryColor);
var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "header__Dropdown",
  componentId: "sc-1srxfqa-4"
})(["position:absolute;display:block;width:100%;margin-top:35px;"]);
var DropdownContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "header__DropdownContent",
  componentId: "sc-1srxfqa-5"
})(["display:block;position:absolute;width:100vw;background-color:#f9f9f9;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);padding:12px 16px;z-index:1;li{padding:16px;border-bottom:1px solid #ccc;a{text-decoration:none;font-size:1.2rem;&:visited,&:active,&:link{color:inherit;}&:hover{color:", ";}}}"], primaryColor);

var Header =
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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navigation, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/logo.jpeg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "OrtoConecta")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuIcon, {
        onClick: function onClick(e) {
          return _this2.handleMenuOpen(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon"
      })), this.state.showMenu === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, {
        "data-aos": "fade-down",
        "data-aos-duration": "1000"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownContent, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "In\xEDcio"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/painel"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Painel OrtoConecta"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/cursos_e_materiais"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Cursos e Materiais"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/experiencias"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Compartilhando Experi\xEAncias"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/dicas"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Dicas"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/especialidades"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Especialidades"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/aplicativos"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Aplicativos"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "In\xEDcio"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/painel"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Painel OrtoConecta"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/cursos_e_materiais"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Cursos e Materiais"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/experiencias"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Compartilhando Experi\xEAncias"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/dicas"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Dicas"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/especialidades"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Especialidades"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        prefetch: true,
        href: "/aplicativos"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: "red"
        }
      }, "Aplicativos"))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/styles/global.js":
/*!******************************!*\
  !*** ./src/styles/global.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    font-family: 'Poppins', sans-serif;\n    padding: 0;\n    margin: 0;\n\n    font-size: 13px;\n  }\n\n  body, html {\n    height: 100%;\n    background: #f5f5f5;\n    scroll-behavior: smooth;\n  }\n\n  a, button {\n    cursor: pointer;\n  }\n\n  a {\n    color: #ffd32a;\n  }\n\n  .iframe {\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n  }\n\n  .carousel.carousel-slider {\n      margin: 100px auto 120px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
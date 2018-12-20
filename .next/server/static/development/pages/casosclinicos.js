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
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_styles_global__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
});

/***/ }),

/***/ "./pages/casosclinicos.js":
/*!********************************!*\
  !*** ./pages/casosclinicos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_6__);
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
var CasesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "casosclinicos__CasesWrapper",
  componentId: "lbaym8-0"
})(["width:100%;height:100%;display:flex;flex-direction:column;align-items:center;"]);
var Options = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "casosclinicos__Options",
  componentId: "lbaym8-1"
})(["display:flex;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "casosclinicos__Button",
  componentId: "lbaym8-2"
})(["border:none;border:2px solid ", ";padding:16px 26px;background:", ";color:#000;font-weight:bold;text-transform:uppercase;text-decoration:none;margin:24px 0;transition:background 0.3s;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);&:hover{background:#fff;transition:background 0.3s;}"], primaryColor, function (props) {
  return props.active ? '#fff' : primaryColor;
});
var ContentsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "casosclinicos__ContentsWrapper",
  componentId: "lbaym8-3"
})(["display:flex;align-items:center;justify-content:center;padding:20px;margin:20px;flex-wrap:wrap;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "casosclinicos__Content",
  componentId: "lbaym8-4"
})(["width:80%;height:100%;background:#fff;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 10px 0 -5px #eee,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px -9px rgba(0,0,0,0.15);padding:30px;margin:15px;display:flex;flex-direction:column;line-height:2rem;h2{font-size:2rem;}div{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;img{width:200px;height:200px;margin:20px;}}"]);

var CasosClinicos =
/*#__PURE__*/
function (_Component) {
  _inherits(CasosClinicos, _Component);

  function CasosClinicos() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CasosClinicos);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CasosClinicos)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      switchCases: true,
      activeStateDefaultCases: true,
      activeStateTodayCases: false
    });

    return _this;
  }

  _createClass(CasosClinicos, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "OrtoConecta | Casos Cl\xEDnicos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CasesWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Options, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        active: this.state.activeStateDefaultCases,
        onClick: function onClick() {
          return _this2.setState(function (state) {
            return {
              switchCases: true,
              activeStateDefaultCases: true,
              activeStateTodayCases: false
            };
          });
        }
      }, "Casos Clinicos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        active: this.state.activeStateTodayCases,
        onClick: function onClick() {
          return _this2.setState({
            switchCases: false,
            activeStateDefaultCases: false,
            activeStateTodayCases: true
          });
        }
      }, "E se fosse hoje? (Casos cl\xEDnicos atuais)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentsWrapper, null, this.state.switchCases === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "CASO CL\xCDNICO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Paciente: "), "V.O."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Idade: "), "33a 02m"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Sexo: "), "Feminino"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Melanoderma"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Queixa Principal: "), "espa\xE7o entre os dentes (mordida aberta)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Diagn\xF3stico:"), " paciente em fase adulta e denti\xE7\xE3o permanente, apresentou maloclus\xE3o Classe II de Angle, Classe II de Andrews, mordida aberta anterior causada por h\xE1bito de suc\xE7\xE3o digital (-4mm), interposi\xE7\xE3o de l\xEDngua, respira\xE7\xE3o bucal viciosa, suave discrep\xE2ncias de modelos superior (-1mm) e inferior (-2mm), linha m\xE9dia dent\xE1ria superior com desvio para lado esquerdo (1mm) em rela\xE7\xE3o ao plano sagital mediano, linha m\xE9dia dent\xE1ria inferior coincidente em rela\xE7\xE3o ao plano sagital mediano, curva de Spee suave, padr\xE3o face longa, convexidade facial devido \xE0 rota\xE7\xE3o mandibular no sentido hor\xE1rio, assimetria facial discreta em norma frontal, exposi\xE7\xE3o excessiva dos dentes superiores em repouso, hipotonicidade labial, degluti\xE7\xE3o at\xEDpica com participa\xE7\xE3o irregular principalmente dos m\xFAsculos mentuais e l\xEDngua, tend\xEAncia de crescimento no sentido vertical, diverg\xEAncias dos planos horizontais em dados cefalom\xE9tricos, vestibulariza\xE7\xE3o excessiva dos incisivos superiores e inferiores."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progn\xF3stico: "), "favor\xE1vel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Plano de tratamento:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "1a op\xE7\xE3o:"), " Ortodontia corretiva + Cirurgia Ortogn\xE1tica Apesar da op\xE7\xE3o de tratamento onde a combina\xE7\xE3o entre Ortodontia e Cirurgia Ortogn\xE1tica ser a mais adequada devido \xE0 maloclus\xE3o ocorrer pela desarmonia esquel\xE9tica, a paciente se negou ao tratamento proposto."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "2a op\xE7\xE3o:"), " Ortodontia corretiva compensat\xF3ria - Aparelho ortod\xF4ntico fixo met\xE1lico prescri\xE7\xE3o Roth superior e inferior, slot 0.022\u201D, modelo Kirium da marca Abzil. - ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        route: "/cursos_e_materiais"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        "data-tip": "Material: Ancoragem",
        style: {
          fontWeight: 'bold',
          textDecoration: 'underline'
        }
      }, "Ancoragem")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, null), ": . Superior: barra transpalatina (BTP) . Inferior: \xD8 - Exodontias: \xD8 - Encaminhamento para avalia\xE7\xE3o e fisioterapia fonoarticulat\xF3ria - Biomec\xE2nica: 1) Separa\xE7\xE3o (16), (26), (36), (46) 2) Moldagem de transfer\xEAncia para confec\xE7\xE3o de BTP fixa soldada Banda e cimenta\xE7\xE3o (36) e (46) com tubo simples com gancho 3) Cimenta\xE7\xE3o BTP com tubos triplos com ganchos(16) e (26) 4) Colagem direta superior + Alinhamento/Nivelamento (arco tamanho M NiTi.012\u201D) 5) Colagem direta inferior + Alinhamento/Nivelamento (arco tamanho P NiTi.012\u201D) OrtoConecta Tratamento V07 Desgaste interproximal (32 \u2013 M e D), (42 \u2013 M e D) com tiras de lixa de a\xE7o 6) Alinhamento e Nivelamento pleno: Superior arcos tamanho M: NiTi .014\u201D ; NiTi .016 \u0308; NiTi .018 \u0308; NiTi .020 \u0308; SS .018 \u0308; SS .020 \u0308, NiTi .017 x .025 \u0308; NiTi .017 x .025 \u0308 em 3 segmentos. Inferior arcos tamanho P: NiTi .014\u201D ; NiTi .016 \u0308; NiTi .018 \u0308; NiTi .020 \u0308; SS .018 \u0308; SS .020 \u0308, NiTi .017 x .025 \u0308; NiTi .019 x .025 \u0308. 7) Superior: NiTi .017 x .025 \u0308 em 3 segmentos + Arco acess\xF3rio de extrus\xE3o de Burstone (120g de for\xE7a extrusiva) Inferior: NiTi .019 x .025 \u0308 8) Superior: NiTi .017 x .025 \u0308 Inferior: NiTi .019 x .025 \u0308 El\xE1sticos de intercuspida\xE7\xE3o: 02 anteriores em forma retangular (5/16 leve) e 02 posteriores em forma triangular (5/16 leve) 9) Superior: NiTi .019 x .025 \u0308 Inferior: NiTi .019 x .025 \u0308 10) SS .019 x .025 \u0308superior e inferior 11) Moldagem para conten\xE7\xE3o superior 12) Remo\xE7\xE3o do aparelho fixo superior e inferior 13) Conten\xE7\xE3o: Superior: Placa Hawley Inferior: arco lingual 3x3."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        style: {
          width: '30%',
          alignSelf: 'center'
        }
      }, "BAIXAR CASO CL\xCDNICO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "CASO CL\xCDNICO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Paciente: "), "F. S. M."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Idade: "), "13a 10m"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Sexo: "), "Masculino"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Leucoderma"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Queixa Principal: "), "espa\xE7o entre os dentes (dentes abertos)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Diagn\xF3stico:"), " paciente com denti\xE7\xE3o permanente, apresentou maloclus\xE3o Classe II divis\xE3o 2 subdivis\xE3o direita de Angle, Classe II subdivis\xE3o direita de Andrews, mordida profunda (+8mm), discrep\xE2ncias de modelos superior positiva (+3mm) e inferior negativa (-1mm), linha m\xE9dia dent\xE1ria inferior com desvio para lado direito (2mm) em rela\xE7\xE3o ao plano sagital mediano, linha m\xE9dia dent\xE1ria superior coincidente em rela\xE7\xE3o ao plano sagital mediano, curva de Spee acentuada (4mm), padr\xE3o 2 facial com retrognatismo mandibular, \xE2ngulo mento-labial agudo, \xE2ngulo nasolabial adequado, l\xE1bio superior suavemente anteriorizado em rela\xE7\xE3o ao l\xE1bio inferior, ter\xE7os faciais proporcionais, proje\xE7\xE3o do zigom\xE1tico adequada, convexidade facial devido \xE0 retrognatismo mandibular, aus\xEAncia de assimetria facial em norma frontal, exposi\xE7\xE3o excessiva dos dentes anteriores superiores no sorriso, tend\xEAncia de crescimento equilibrado com padr\xE3o facial mesocef\xE1lico."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progn\xF3stico: "), "favor\xE1vel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Plano de tratamento:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "1a op\xE7\xE3o:"), " Ortodontia corretiva compensat\xF3ria - Aparelho ortod\xF4ntico fixo met\xE1lico prescri\xE7\xE3o Roth superior e inferior, slot 0.022\u201D, marca Abzil. - ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        route: "/cursos_e_materiais"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        "data-tip": "Material: Ancoragem",
        style: {
          fontWeight: 'bold',
          textDecoration: 'underline'
        }
      }, "Ancoragem")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, null), ": . Superior: barra transpalatina (BTP) . Inferior: \xD8 - Exodontias: \xD8 - Biomec\xE2nica: 1) Separa\xE7\xE3o (16), (26), (36), (46) 2) Moldagem de transfer\xEAncia para confec\xE7\xE3o de BTP fixa soldada Banda e cimenta\xE7\xE3o (36) e (46) com tubo simples com gancho 3) Cimenta\xE7\xE3o BTP com tubos simples com ganchos(16) e (26) 4) Colagem direta superior + Alinhamento/Nivelamento com fio Twist Flex 0.015 \u0308contornado no diagrama ortod\xF4ntico de Interlandi raio 24mm 5) Alinhamento e Nivelamento pleno: OrtoConecta Tratamento V07 Superior arcos diagramados no raio 24mm de Interlandi: Twist Flex .0.017 \u0308, SS.016 \u0308; SS.018 \u0308; todos com degrau de intrus\xE3o nos dentes (12/11/21/22) 6) Ap\xF3s 7 meses do in\xEDcio do tratamento, foi realizada a colagem direta dos br\xE1quetes inferiores; Colagem direta inferior + Alinhamento/Nivelamento com fio Twist Flex 0.015 \u0308contornado no diagrama ortod\xF4ntico de Interlandi raio 23mm Superior: arco SS.018\u201D com degrau de intrus\xE3o anterior 7) Superior: arcos diagramados no raio 24mm de Interlandi: SS .020 \u0308 com degrau de intrus\xE3o Inferior arcos diagramados no raio 23mm de Interlandi: Twist Flex .0.017 \u0308, SS.016\u201D 8) Superior: arcos diagramados no raio 24mm de Interlandi: SS .019 x .025 \u0308 com degrau de intrus\xE3o + el\xE1sticos em cadeia tamanho longo 6 elos (13 a 23) Inferior arcos diagramados no raio 23mm de Interlandi: SS.018 \u0308; SS .020 \u0308 El\xE1sticos de classe II de for\xE7a exc\xEAntrica: 5/16 M lado esquerdo, 3/16 M lado direito 9) Superior: arco diagramados no raio 24mm de Interlandi: SS.021 x .025 \u0308 passivo; manteve-se o degrau de intrus\xE3o anterior Inferior arcos diagramados no raio 23mm de Interlandi: SS .019 x .025 \u0308; SS.021 x .025\u201D passivo 10) Moldagem para conten\xE7\xE3o superior 11) Remo\xE7\xE3o do aparelho fixo superior, BTP e inferior 12) Conten\xE7\xE3o: Superior: Placa Hawley Inferior: arco lingual 3x3."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/heroimage.jpg",
        alt: "caso 2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        style: {
          width: '30%',
          alignSelf: 'center'
        }
      }, "BAIXAR CASO CL\xCDNICO"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Outros casos"))));
    }
  }]);

  return CasosClinicos;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CasosClinicos);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add('/', 'index').add('/especialidades', 'especialidades').add('/especialidades/:id', 'especialidade').add('/cursos_e_materiais', 'cursosemateriais').add('/painel', 'painel').add('/experiencias', 'experiencias').add('/experiencias/:id', 'experiencia').add('/casos_clinicos', 'casosclinicos');

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
      fontSize: '2rem'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://facebook.com/ortoconecta",
    target: "blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebookSquare"], {
    style: {
      fontSize: '2rem'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://facebook.com/ortoconecta",
    target: "blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaWhatsapp"], {
    style: {
      fontSize: '2rem'
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ou por email no endere\xE7o: ortoconecta@ortoconecta.com.br"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Desenvolvido por ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
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
})(["height:80px;display:flex;align-items:center;justify-content:space-around;list-style:none;background:#fff;width:100%;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);@media(max-width:1128px){ul{display:none;}", " .icon{display:block;float:right;}}"], MenuIcon);
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
})(["display:flex;background:transparent;list-style:none;color:#303030;li{padding:16px;font-weight:bold;font-size:1.3rem;background:transparent;a{text-decoration:none;color:#7f8c8d;text-transform:uppercase;transition:color 0.4s;background:transparent;&:after{display:block;content:'';border-bottom:solid 3px ", ";transform:scaleX(0);transition:transform 250ms ease-in-out;}&:hover{color:", ";transition:color 0.4s;}&:hover:after{transform:scaleX(1);}}"], primaryColor, primaryColor);
var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "header__Dropdown",
  componentId: "sc-1srxfqa-4"
})(["position:absolute;display:block;width:100%;margin-top:35px;"]);
var DropdownContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "header__DropdownContent",
  componentId: "sc-1srxfqa-5"
})(["display:block;position:absolute;width:100vw;background-color:#f9f9f9;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);padding:12px 16px;z-index:1;li{padding:16px;border-bottom:1px solid #ccc;a{text-decoration:none;font-size:1.2rem;&:visited,&:active,&:link{color:inherit;}&:hover{color:", "}}}"], primaryColor);

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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navigation, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
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
      })), this.state.showMenu === true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownContent, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "In\xEDcio"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/painel"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Painel OrtoConecta"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/cursos_e_materiais"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Cursos e Materiais"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/experiencias"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Experi\xEAncias"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/dicas"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Dicas"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/especialidades"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Especialidades"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/casos_clinicos"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Casos Cl\xEDnicos"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "In\xEDcio"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/painel"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Painel OrtoConecta"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/cursos_e_materiais"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Cursos e Materiais"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/experiencias"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Experi\xEAncias"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/dicas"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Dicas"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/especialidades"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Especialidades"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "/casos_clinicos"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Casos Cl\xEDnicos"))))));
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
  var data = _taggedTemplateLiteral(["\n  * {\n    font-family: 'Poppins', sans-serif;\n    padding: 0;\n    margin: 0;\n    \n    font-size: 13px;\n  }\n\n  body, html {\n    height: 100%;\n    background: #f5f5f5;\n    scroll-behavior: smooth;\n  }\n\n  a, button {\n    cursor: pointer;\n  }\n  \n  .iframe {\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n  }\n"]);

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
/*!**************************************!*\
  !*** multi ./pages/casosclinicos.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/casosclinicos.js */"./pages/casosclinicos.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=casosclinicos.js.map
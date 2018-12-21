webpackHotUpdate("static/development/pages/casosclinicos.js",{

/***/ "./pages/casosclinicos.js":
/*!********************************!*\
  !*** ./pages/casosclinicos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
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
var CasesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "casosclinicos__CasesWrapper",
  componentId: "lbaym8-0"
})(["width:100%;height:100%;display:flex;flex-direction:column;align-items:center;"]);
var OptionsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "casosclinicos__OptionsWrapper",
  componentId: "lbaym8-1"
})(["display:flex;justify-content:space-evenly;align-items:center;width:80%;height:100%;margin:20px;"]);
var Options = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "casosclinicos__Options",
  componentId: "lbaym8-2"
})(["display:flex;flex-direction:column;align-items:center;padding:20px;margin:20px;background:#fff;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);h3{font-size:1.7rem;margin-bottom:20px;}"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "casosclinicos__Button",
  componentId: "lbaym8-3"
})(["display:flex;justify-content:center;align-items:center;border:none;border:2px solid ", ";padding:16px 26px;background:", ";color:#000;font-weight:bold;text-transform:uppercase;text-decoration:none;margin:24px 0;transition:background 0.3s;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);&:hover{background:#fff;transition:background 0.3s;}"], primaryColor, function (props) {
  return props.active ? '#fff' : primaryColor;
});
var ContentsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "casosclinicos__ContentsWrapper",
  componentId: "lbaym8-4"
})(["display:flex;align-items:center;justify-content:center;padding:20px;margin:20px;flex-wrap:wrap;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "casosclinicos__Content",
  componentId: "lbaym8-5"
})(["width:80%;height:100%;background:#fff;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 10px 0 -5px #eee,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px -9px rgba(0,0,0,0.15);padding:30px;margin:15px;display:flex;flex-direction:column;line-height:2rem;h2{font-size:2rem;margin-bottom:25px;}div{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;img{width:200px;height:170px;margin:20px;}}"]);

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
      switchCases: false,
      activeStateDefaultCases: false,
      activeStateTodayCases: false
    });

    return _this;
  }

  _createClass(CasosClinicos, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "OrtoConecta | Casos Cl\xEDnicos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CasesWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OptionsWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Options, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Solu\xE7\xF5es OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Casos cl\xEDnicos tratados com base em evid\xEAncias cient\xEDficas respeitando os conceitos mais modernos."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
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
      }, "Mostrar casos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Options, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "E se fosse hoje..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Casos cl\xEDnicos tratados h\xE1 mais de 13 anos com as tend\xEAncias da \xE9poca. Com os recursos e conceitos atuais, o que poder\xEDamos modificar??"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        active: this.state.activeStateTodayCases,
        onClick: function onClick() {
          return _this2.setState({
            switchCases: true,
            activeStateDefaultCases: false,
            activeStateTodayCases: true
          });
        }
      }, "Mostrar casos"))), this.state.switchCases === false ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 'calc(100vh - 547px)'
        }
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentsWrapper, null, this.state.activeStateDefaultCases === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "CASO CL\xCDNICO V - 07"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Paciente: "), "V.O."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Idade: "), "33a 02m"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Sexo: "), "Feminino"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Melanoderma"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Queixa Principal: "), "espa\xE7o entre os dentes (mordida aberta)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-v/v1.png",
        alt: "v1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-v/v2.png",
        alt: "v2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Diagn\xF3stico:"), " paciente em fase adulta e denti\xE7\xE3o permanente, apresentou maloclus\xE3o Classe II de Angle, Classe II de Andrews, mordida aberta anterior causada por h\xE1bito de suc\xE7\xE3o digital (-4mm), interposi\xE7\xE3o de l\xEDngua, respira\xE7\xE3o bucal viciosa, suave discrep\xE2ncias de modelos superior (-1mm) e inferior (-2mm), linha m\xE9dia dent\xE1ria superior com desvio para lado esquerdo (1mm) em rela\xE7\xE3o ao plano sagital mediano, linha m\xE9dia dent\xE1ria inferior coincidente em rela\xE7\xE3o ao plano sagital mediano, curva de Spee suave, padr\xE3o face longa, convexidade facial devido \xE0 rota\xE7\xE3o mandibular no sentido hor\xE1rio, assimetria facial discreta em norma frontal, exposi\xE7\xE3o excessiva dos dentes superiores em repouso, hipotonicidade labial, degluti\xE7\xE3o at\xEDpica com participa\xE7\xE3o irregular principalmente dos m\xFAsculos mentuais e l\xEDngua, tend\xEAncia de crescimento no sentido vertical, diverg\xEAncias dos planos horizontais em dados cefalom\xE9tricos, vestibulariza\xE7\xE3o excessiva dos incisivos superiores e inferiores."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-v/v3.png",
        alt: "v3"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-v/v4.png",
        alt: "v4"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-v/v5.png",
        alt: "v5"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-v/v6.png",
        alt: "v6"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-v/v7.png",
        alt: "v7"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progn\xF3stico: "), "favor\xE1vel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Plano de tratamento:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "1a op\xE7\xE3o:"), " Ortodontia corretiva + Cirurgia Ortogn\xE1tica Apesar da op\xE7\xE3o de tratamento onde a combina\xE7\xE3o entre Ortodontia e Cirurgia Ortogn\xE1tica ser a mais adequada devido \xE0 maloclus\xE3o ocorrer pela desarmonia esquel\xE9tica, a paciente se negou ao tratamento proposto."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "2a op\xE7\xE3o:"), " Ortodontia corretiva compensat\xF3ria.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Aparelho ortod\xF4ntico fixo met\xE1lico prescri\xE7\xE3o Roth superior e inferior, slot 0.022\u201D, modelo Kirium da marca Abzil.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/cursos_e_materiais"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        "data-tip": "Material: Ancoragem",
        style: {
          fontWeight: 'bold',
          textDecoration: 'underline'
        }
      }, "Ancoragem")), ":", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), ". Superior: barra transpalatina (BTP)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), ". Inferior: \xD8", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Exodontias: \xD8", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Encaminhamento para avalia\xE7\xE3o e fisioterapia fonoarticulat\xF3ria", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Biomec\xE2nica:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "1) Separa\xE7\xE3o (16), (26), (36), (46)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "2) Moldagem de transfer\xEAncia para confec\xE7\xE3o de BTP fixa soldada", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Banda e cimenta\xE7\xE3o (36) e (46) com tubo simples com gancho", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "3) Cimenta\xE7\xE3o BTP com tubos triplos com ganchos(16) e (26)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "4) Colagem direta superior + Alinhamento/Nivelamento (arco tamanho M NiTi.012\u201D)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "5) Colagem direta inferior + Alinhamento/Nivelamento (arco tamanho P NiTi.012\u201D)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "OrtoConecta Tratamento V07", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Desgaste interproximal (32 \u2013 M e D), (42 \u2013 M e D) com tiras de lixa de a\xE7o", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "6) Alinhamento e Nivelamento pleno:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Superior arcos tamanho M: NiTi .014\u201D ; NiTi .016 \u0308; NiTi .018 \u0308; NiTi .020 \u0308; SS .018 \u0308; SS .0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "20 \u0308, NiTi .017 x .025 \u0308; NiTi .017 x .025 \u0308 em 3 seo", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "s. Inferior arcos tamanho P: NiTi .014\u201D ; NiTi .016 \u0308; NiTi .018 \u0308; NiTi .020 \u0308; SS .018 \u0308; SS .020 \u0308,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "NiTi .017 x .025 \u0308; NiTi .019 x .025", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u0308. 7) Superior: NiTi .017 x .025 \u0308 em 3 segmentos + Arco acess\xF3rio de extrus\xE3o de Burstone (120g de for\xE7a extrusiva)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Inferior: NiTi .019 x .025 \u0308", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "8) Superior: NiTi .017 x .025 \u0308", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Inferior: NiTi .019 x .025 \u0308", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "El\xE1sticos de intercuspida\xE7\xE3o: 02 anteriores em forma retangular (5/16 leve) e 02 posteriores", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "em forma triangular (5/16 leve)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "9) Superior: NiTi .019 x .025 \u0308", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Inferior: NiTi .019 x .025 \u0308", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "10) SS .019 x .025 \u0308superior e inferio", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "r 11) Moldagem para conten\xE7\xE3o superior", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "12) Remo\xE7\xE3o do aparelho fixo superior e inferior", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "13) Conten\xE7\xE3o:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Superior: Placa Hawley", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Inferior: arco lingual 3x3."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-v/v8.png",
        alt: "v8"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-v/v9.png",
        alt: "v9"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-v/v10.png",
        alt: "v10"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-v/v11.png",
        alt: "v11"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        href: "/static/casos-v/v07.pdf",
        target: "blank",
        style: {
          width: '50%',
          alignSelf: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaDownload"], {
        style: {
          fontSize: '1.2rem',
          marginRight: '10px'
        }
      }), "BAIXAR CASO CL\xCDNICO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "CASO CL\xCDNICO F - 04"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Paciente: "), "F. S. M."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Idade: "), "13a 10m"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Sexo: "), "Masculino"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Leucoderma"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Queixa Principal: "), "espa\xE7o entre os dentes (dentes abertos)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f1.png",
        alt: "f1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f2.png",
        alt: "f2"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Diagn\xF3stico:"), " paciente com denti\xE7\xE3o permanente, apresentou maloclus\xE3o Classe II divis\xE3o 2 subdivis\xE3o direita de Angle, Classe II subdivis\xE3o direita de Andrews, mordida profunda (+8mm), discrep\xE2ncias de modelos superior positiva (+3mm) e inferior negativa (-1mm), linha m\xE9dia dent\xE1ria inferior com desvio para lado direito (2mm) em rela\xE7\xE3o ao plano sagital mediano, linha m\xE9dia dent\xE1ria superior coincidente em rela\xE7\xE3o ao plano sagital mediano, curva de Spee acentuada (4mm), padr\xE3o 2 facial com retrognatismo mandibular, \xE2ngulo mento-labial agudo, \xE2ngulo nasolabial adequado, l\xE1bio superior suavemente anteriorizado em rela\xE7\xE3o ao l\xE1bio inferior, ter\xE7os faciais proporcionais, proje\xE7\xE3o do zigom\xE1tico adequada, convexidade facial devido \xE0 retrognatismo mandibular, aus\xEAncia de assimetria facial em norma frontal, exposi\xE7\xE3o excessiva dos dentes anteriores superiores no sorriso, tend\xEAncia de crescimento equilibrado com padr\xE3o facial mesocef\xE1lico."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f3.png",
        alt: "f3"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f4.png",
        alt: "f4"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f5.png",
        alt: "f5"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f6.png",
        alt: "f6"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f7.png",
        alt: "f7"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progn\xF3stico: "), "favor\xE1vel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Plano de tratamento:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "1a op\xE7\xE3o:"), " Ortodontia corretiva compensat\xF3ria - Aparelho ortod\xF4ntico fixo met\xE1lico prescri\xE7\xE3o Roth superior e inferior, slot 0.022\u201D, marca Abzil. - ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/cursos_e_materiais"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        "data-tip": "Material: Ancoragem",
        style: {
          fontWeight: 'bold',
          textDecoration: 'underline'
        }
      }, "Ancoragem")), ": . Superior: barra transpalatina (BTP) . Inferior: \xD8 - Exodontias: \xD8 - Biomec\xE2nica: 1) Separa\xE7\xE3o (16), (26), (36), (46) 2) Moldagem de transfer\xEAncia para confec\xE7\xE3o de BTP fixa soldada Banda e cimenta\xE7\xE3o (36) e (46) com tubo simples com gancho 3) Cimenta\xE7\xE3o BTP com tubos simples com ganchos(16) e (26) 4) Colagem direta superior + Alinhamento/Nivelamento com fio Twist Flex 0.015 \u0308contornado no diagrama ortod\xF4ntico de Interlandi raio 24mm 5) Alinhamento e Nivelamento pleno: OrtoConecta Tratamento V07 Superior arcos diagramados no raio 24mm de Interlandi: Twist Flex .0.017 \u0308, SS.016 \u0308; SS.018 \u0308; todos com degrau de intrus\xE3o nos dentes (12/11/21/22) 6) Ap\xF3s 7 meses do in\xEDcio do tratamento, foi realizada a colagem direta dos br\xE1quetes inferiores; Colagem direta inferior + Alinhamento/Nivelamento com fio Twist Flex 0.015 \u0308contornado no diagrama ortod\xF4ntico de Interlandi raio 23mm Superior: arco SS.018\u201D com degrau de intrus\xE3o anterior 7) Superior: arcos diagramados no raio 24mm de Interlandi: SS .020 \u0308 com degrau de intrus\xE3o Inferior arcos diagramados no raio 23mm de Interlandi: Twist Flex .0.017 \u0308, SS.016\u201D 8) Superior: arcos diagramados no raio 24mm de Interlandi: SS .019 x .025 \u0308 com degrau de intrus\xE3o + el\xE1sticos em cadeia tamanho longo 6 elos (13 a 23) Inferior arcos diagramados no raio 23mm de Interlandi: SS.018 \u0308; SS .020 \u0308 El\xE1sticos de classe II de for\xE7a exc\xEAntrica: 5/16 M lado esquerdo, 3/16 M lado direito 9) Superior: arco diagramados no raio 24mm de Interlandi: SS.021 x .025 \u0308 passivo; manteve-se o degrau de intrus\xE3o anterior Inferior arcos diagramados no raio 23mm de Interlandi: SS .019 x .025 \u0308; SS.021 x .025\u201D passivo 10) Moldagem para conten\xE7\xE3o superior 11) Remo\xE7\xE3o do aparelho fixo superior, BTP e inferior 12) Conten\xE7\xE3o: Superior: Placa Hawley Inferior: arco lingual 3x3."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f8.png",
        alt: "f8"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f9.png",
        alt: "f9"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f10.png",
        alt: "f10"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f11.png",
        alt: "f11"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        href: "/static/casos-f/f04.pdf",
        target: "blank",
        style: {
          width: '50%',
          alignSelf: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaDownload"], {
        style: {
          fontSize: '1.2rem',
          marginRight: '10px'
        }
      }), "BAIXAR CASO CL\xCDNICO"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        }
      }, "A"), " a\xE7\xE3o cl\xEDnica de Ortodontia e Ortopedia Facial do grupo OrtoConecta\xAE atua h\xE1 mais de duas d\xE9cadas, respeitando a filosofia de tratamentos baseado em evid\xEAncias cient\xEDficas."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        }
      }, "D"), "esde a introdu\xE7\xE3o da Ortodontia corretiva por Edward Angle na d\xE9cada de 1920 at\xE9 os dias atuais, a tecnologia voltada para essa especialidade apresenta evolu\xE7\xF5es constantes, assim como todas as \xE1reas afins. Entretanto, o postulado de Angle sempre se manifesta em todas as evolu\xE7\xF5es tecnol\xF3gicas e princ\xEDpios biomec\xE2nicos."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        }
      }, "D"), "esta forma, a OrtoConecta\xAE resolveu abrir um canal de discuss\xE3o e compartilhar com todos os participantes, os casos cl\xEDnicos tratados por exemplo, h\xE1 15, 20 anos atr\xE1s, mostrando os recursos poss\xEDveis da \xE9poca e os planos de tratamento limitados \xE0 experi\xEAncia cl\xEDnica e profissional naquele momento. Assim, o nosso prop\xF3sito \xE9 reavaliar hoje e compartilhar esses casos tratados, simulando planos de tratamento atuais de acordo com a experi\xEAncia adquirida durante todos esses anos, analisando os pontos positivos e negativos alcan\xE7ados, sugerindo dicas atrav\xE9s de uma \xF3tica cr\xEDtica e s\xF3bria das condi\xE7\xF5es atingidas."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "CASO CL\xCDNICO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Paciente: "), "F. V."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Idade: "), "19a 10m"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Sexo: "), "Masculino"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Leucoderma"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Queixa Principal: "), "dentes inferiores muito tortos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Ano: "), "2000 a 2002"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-como-f/f1.png",
        alt: "f1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-como-f/f2.png",
        alt: "f2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-como-f/f3.png",
        alt: "f3"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-como-f/f4.png",
        alt: "f4"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-como-f/f5.png",
        alt: "f5"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Plano de tratamento:"), " Ortodontia corretiva prescri\xE7\xE3o Edgewise slot .022 x .030\u201D superior e inferior, marca Abzil/Lancer.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Ancoragem:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Superior: \xD8", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Inferior: arco lingual"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f3.png",
        alt: "f3"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f4.png",
        alt: "f4"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f5.png",
        alt: "f5"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f6.png",
        alt: "f6"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f7.png",
        alt: "f7"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Progn\xF3stico: "), "favor\xE1vel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Plano de tratamento:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "1a op\xE7\xE3o:"), " Ortodontia corretiva compensat\xF3ria - Aparelho ortod\xF4ntico fixo met\xE1lico prescri\xE7\xE3o Roth superior e inferior, slot 0.022\u201D, marca Abzil. - ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/cursos_e_materiais"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        "data-tip": "Material: Ancoragem",
        style: {
          fontWeight: 'bold',
          textDecoration: 'underline'
        }
      }, "Ancoragem")), ": . Superior: barra transpalatina (BTP) . Inferior: \xD8 - Exodontias: \xD8 - Biomec\xE2nica: 1) Separa\xE7\xE3o (16), (26), (36), (46) 2) Moldagem de transfer\xEAncia para confec\xE7\xE3o de BTP fixa soldada Banda e cimenta\xE7\xE3o (36) e (46) com tubo simples com gancho 3) Cimenta\xE7\xE3o BTP com tubos simples com ganchos(16) e (26) 4) Colagem direta superior + Alinhamento/Nivelamento com fio Twist Flex 0.015 \u0308contornado no diagrama ortod\xF4ntico de Interlandi raio 24mm 5) Alinhamento e Nivelamento pleno: OrtoConecta Tratamento V07 Superior arcos diagramados no raio 24mm de Interlandi: Twist Flex .0.017 \u0308, SS.016 \u0308; SS.018 \u0308; todos com degrau de intrus\xE3o nos dentes (12/11/21/22) 6) Ap\xF3s 7 meses do in\xEDcio do tratamento, foi realizada a colagem direta dos br\xE1quetes inferiores; Colagem direta inferior + Alinhamento/Nivelamento com fio Twist Flex 0.015 \u0308contornado no diagrama ortod\xF4ntico de Interlandi raio 23mm Superior: arco SS.018\u201D com degrau de intrus\xE3o anterior 7) Superior: arcos diagramados no raio 24mm de Interlandi: SS .020 \u0308 com degrau de intrus\xE3o Inferior arcos diagramados no raio 23mm de Interlandi: Twist Flex .0.017 \u0308, SS.016\u201D 8) Superior: arcos diagramados no raio 24mm de Interlandi: SS .019 x .025 \u0308 com degrau de intrus\xE3o + el\xE1sticos em cadeia tamanho longo 6 elos (13 a 23) Inferior arcos diagramados no raio 23mm de Interlandi: SS.018 \u0308; SS .020 \u0308 El\xE1sticos de classe II de for\xE7a exc\xEAntrica: 5/16 M lado esquerdo, 3/16 M lado direito 9) Superior: arco diagramados no raio 24mm de Interlandi: SS.021 x .025 \u0308 passivo; manteve-se o degrau de intrus\xE3o anterior Inferior arcos diagramados no raio 23mm de Interlandi: SS .019 x .025 \u0308; SS.021 x .025\u201D passivo 10) Moldagem para conten\xE7\xE3o superior 11) Remo\xE7\xE3o do aparelho fixo superior, BTP e inferior 12) Conten\xE7\xE3o: Superior: Placa Hawley Inferior: arco lingual 3x3."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f8.png",
        alt: "f8"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f9.png",
        alt: "f9"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f10.png",
        alt: "f10"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/casos-f/f11.png",
        alt: "f11"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        href: "/static/casos-f/f04.pdf",
        target: "blank",
        style: {
          width: '50%',
          alignSelf: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaDownload"], {
        style: {
          fontSize: '1.2rem',
          marginRight: '10px'
        }
      }), "BAIXAR CASO CL\xCDNICO"))))));
    }
  }]);

  return CasosClinicos;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CasosClinicos);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/casosclinicos")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=casosclinicos.js.e8b1df371e09c8c30c6d.hot-update.js.map
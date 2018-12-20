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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");






var primaryColor = "#ffd32a";
var CasesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "casosclinicos__CasesWrapper",
  componentId: "lbaym8-0"
})(["width:100%;height:100%;display:flex;flex-direction:column;align-items:center;"]);
var Options = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "casosclinicos__Options",
  componentId: "lbaym8-1"
})(["display:flex;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "casosclinicos__Button",
  componentId: "lbaym8-2"
})(["border:none;border:2px solid ", ";padding:16px 26px;background:", ";color:#000;font-weight:bold;text-transform:uppercase;text-decoration:none;margin:24px 0;transition:background 0.3s;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);&:hover{background:#fff;transition:background 0.3s;}"], primaryColor, primaryColor);
var ContentsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "casosclinicos__ContentsWrapper",
  componentId: "lbaym8-3"
})(["display:flex;align-items:center;justify-content:center;padding:20px;margin:20px;flex-wrap:wrap;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "casosclinicos__Content",
  componentId: "lbaym8-4"
})(["width:80%;height:100%;background:#fff;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 10px 0 -5px #eee,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px -9px rgba(0,0,0,0.15);padding:30px;margin:15px;display:flex;flex-direction:column;div{display:flex;justify-content:center;align-items:center;img{width:200px;height:200px;margin:20px;}}"]);

var CasosClinicos = function CasosClinicos(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "OrtoConecta | Casos Cl\xEDnicos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CasesWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Options, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, null, "Casos Clinicos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, null, "E se fosse hoje? (Casos cl\xEDnicos atuais)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentsWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "CASO CL\xCDNICO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Paciente: "), "V.O."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Idade: "), "33a 02m"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Sexo: "), "Feminino"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Melanoderma"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Queixa Principal: "), "espa\xE7o entre os dentes (mordida aberta)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/heroimage.jpg",
    alt: "caso 1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/heroimage.jpg",
    alt: "caso 2"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Diagn\xF3stico: paciente em fase adulta e denti\xE7\xE3o permanente, apresentou maloclus\xE3o Classe II de Angle, Classe II de Andrews, mordida aberta anterior causada por h\xE1bito de suc\xE7\xE3o digital (-4mm), interposi\xE7\xE3o de l\xEDngua, respira\xE7\xE3o bucal viciosa, suave discrep\xE2ncias de modelos superior (-1mm) e inferior (-2mm), linha m\xE9dia dent\xE1ria superior com desvio para lado esquerdo (1mm) em rela\xE7\xE3o ao plano sagital mediano, linha m\xE9dia dent\xE1ria inferior coincidente em rela\xE7\xE3o ao plano sagital mediano, curva de Spee suave, padr\xE3o face longa, convexidade facial devido \xE0 rota\xE7\xE3o mandibular no sentido hor\xE1rio, assimetria facial discreta em norma frontal, exposi\xE7\xE3o excessiva dos dentes superiores em repouso, hipotonicidade labial, degluti\xE7\xE3o at\xEDpica com participa\xE7\xE3o irregular principalmente dos m\xFAsculos mentuais e l\xEDngua, tend\xEAncia de crescimento no sentido vertical, diverg\xEAncias dos planos horizontais em dados cefalom\xE9tricos, vestibulariza\xE7\xE3o excessiva dos incisivos superiores e inferiores.")))));
};

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
//# sourceMappingURL=casosclinicos.js.1eb9ddc514dbd22240e9.hot-update.js.map
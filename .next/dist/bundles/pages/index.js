module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./layouts/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_header__ = __webpack_require__("./src/components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_styles_global__ = __webpack_require__("./src/styles/global.js");
var _jsxFileName = "/home/ubuntu/workspace/layouts/main.js";




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_styles_global__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), props.children));
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_main__ = __webpack_require__("./layouts/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = "/home/ubuntu/workspace/pages/index.js";




var primaryColor = "#ffd32a";
var Hero = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1hta4ma-0"
})(["width:100%;height:100vh;background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/static/dentist.jpg');background-size:cover;background-repeat:no-repeat;background-position:center center;background-attachment:fixed;display:flex;align-items:center;justify-content:center;text-align:center;"]);
var HeroInner = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "pages__HeroInner",
  componentId: "sc-1hta4ma-1"
})(["background:transparent;color:#d6d6d6;margin-top:-50px;h1{font-size:3.5em;margin-top:0;margin-bottom:0.5em;background:transparent;}h2{background:transparent;font-size:1.7em;}a{display:block;width:150px;padding:1em;margin-top:50px;margin-left:auto;margin-right:auto;color:#000;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";transition:background 0.3s ease-in-out;-webkit-box-shadow:0px 3px 5px 0px rgba(94,94,94,1);-moz-box-shadow:0px 3px 5px 0px rgba(94,94,94,1);box-shadow:0px 3px 5px 0px rgba(94,94,94,1);&:hover{background:transparent;color:#fff;transition:background 0.3s ease-in-out;}}"], primaryColor, primaryColor);
var About = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.section.withConfig({
  displayName: "pages__About",
  componentId: "sc-1hta4ma-2"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;max-width:860px;margin:26px auto;h1{font-size:5rem;color:", ";font-weight:bold;}p{margin-top:16px;text-align:justify;font-size:1.5rem;color:#636e72;strong{font-size:1.5rem;color:#181818;}span{margin-left:24px;font-size:1.5rem;}}h3{font-size:2rem;margin-top:24px;color:#636e72;span{margin-top:16px;font-size:2rem;color:#181818;font-weight:bold;}}"], primaryColor);

var Home = function Home(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, "Ortoconecta")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Hero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeroInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, "Conectando a Ortodontia \xE0 toda \xE1rea da sa\xFAde"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, "Navegue pelo nosso site e descubra como!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, "Saiba mais"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(About, {
    id: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, "Quem Somos"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    }
  }, "Em"), " reuni\xF5es espor\xE1dicas sobre temas que frequentemente convergiam para o tempo em que o praticante da ortodontia conseguiria desenvolver sua autonomia, nasce a Orto Conecta. Idealizada por tr\xEAs colegas de profiss\xE3o, ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, "Dr. Renato Tanabe"), ", ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, "Dr. Gustavo Furlan"), " e ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    }
  }, "Dr. Alexandre Mendon\xE7a"), ", esta ferramenta tem como objetivo trazer informa\xE7\xF5es sobre a ortodontia executada de forma eficiente, pr\xE1tica e segura, al\xE9m de integrar \xE1reas intimamente ligadas a esta especialidade. Know-how, sensibilidade e entusiasmo d\xE3o direcionamento para a constru\xE7\xE3o desta plataforma digital cuidadosamente planejada para produzir e compartilhar conhecimentos.  Um novo canal que ir\xE1 fazer parte da lista de manuais de consulta sobre os assuntos mais atuais das \xE1reas de sa\xFAde que se conectam diretamente \xE0 ortodontia. Esperamos que aproveitem este espa\xE7o e sua diversidade de materiais dispon\xEDveis no site, nos cursos online e presenciais que contribuir\xE3o para o aprimoramento de compet\xEAncias e habilidades fundamentais para o profissional que busca a excel\xEAncia."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, "Bem-vindos \xE0 plataforma ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, "Orto Conecta!")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/ubuntu/workspace/src/components/header.js";



var primaryColor = "#ffd32a";
var Navbar = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "header__Navbar",
  componentId: "sc-1srxfqa-0"
})(["height:80px;display:flex;align-items:center;justify-content:space-around;list-style:none;background:transparent;width:100%;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);"]);
var Logo = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "header__Logo",
  componentId: "sc-1srxfqa-1"
})(["background:transparent;a{display:flex;text-decoration:none;color:inherit;justify-content:center;align-items:center;background:transparent;img{width:50px;height:50px;background:transparent;}h2{font-size:2rem;margin-left:16px;color:", ";background:transparent;}}"], primaryColor);
var Menu = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.ul.withConfig({
  displayName: "header__Menu",
  componentId: "sc-1srxfqa-2"
})(["display:flex;background:transparent;list-style:none;color:#303030;li{padding:16px;font-weight:bold;font-size:1.3rem;background:transparent;a{text-decoration:none;color:#7f8c8d;text-transform:uppercase;transition:color 0.4s;background:transparent;&:after{display:block;content:'';border-bottom:solid 3px ", ";transform:scaleX(0);transition:transform 250ms ease-in-out;}&:hover{color:", ";transition:color 0.4s;}&:hover:after{transform:scaleX(1);}}"], primaryColor, primaryColor);

var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/dental.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, "Orto Conecta")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, "In\xEDcio"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, "Quem Somos")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, "Material gratuito")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/especialidades",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, "Especialidades"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, "Contato")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./src/styles/global.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  * {\n    font-family: 'Poppins', sans-serif;\n    padding: 0;\n    margin: 0;\n    \n    font-size: 13px;\n    background: #f5f5f5;\n  }\n\n  body, html {\n    height: 100%;\n  }\n\n  a, button {\n    cursor: pointer;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GlobalStyle = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["createGlobalStyle"])(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyle);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
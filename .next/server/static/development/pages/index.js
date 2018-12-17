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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);






var primaryColor = "#FFD32A";
var Hero = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1hta4ma-0"
})(["width:100%;height:100vh;background-image:linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('/static/background.jpg');background-size:cover;background-repeat:no-repeat;background-position:center center;background-attachment:fixed;display:flex;align-items:center;justify-content:center;text-align:center;"]);
var HeroInner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__HeroInner",
  componentId: "sc-1hta4ma-1"
})(["background:transparent;color:#d6d6d6;margin-top:-50px;h1{font-size:3.5em;margin-top:0;margin-bottom:0.5em;background:transparent;}h2{background:transparent;font-size:1.7em;}a{display:block;width:150px;padding:1em;margin-top:50px;margin-left:auto;margin-right:auto;color:#000;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";transition:background 0.3s ease-in-out;-webkit-box-shadow:0px 3px 5px 0px rgba(94,94,94,1);-moz-box-shadow:0px 3px 5px 0px rgba(94,94,94,1);box-shadow:0px 3px 5px 0px rgba(94,94,94,1);&:hover{background:transparent;color:#fff;transition:background 0.3s ease-in-out;}}"], primaryColor, primaryColor);
var About = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "pages__About",
  componentId: "sc-1hta4ma-2"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;background:#fff;width:80%;max-width:800px;margin:-50px auto;margin-bottom:50px;border:1px solid #ccc;padding:26px;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);h1{font-size:3rem;color:#f1c40f;font-weight:bold;}img{width:80%;height:100%;margin-top:16px;border-radius:15px;border:2px solid ", "}p{margin-top:16px;text-align:justify;font-size:1.2rem;color:#2d3436;width:100%;strong{font-size:1.2rem;color:#181818;}span{margin-left:24px;font-size:1.2rem;}}h3{font-size:2rem;margin-top:24px;color:#2d3436;text-align:center;span{margin-top:16px;font-size:2rem;color:#f1c40f;font-weight:bold;}}"], primaryColor);
var ProfilesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__ProfilesWrapper",
  componentId: "sc-1hta4ma-3"
})(["width:100%;height:100%;background:", ";display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;margin-top:100px;h1{margin:20px 0;font-size:3rem;}"], primaryColor);
var Profiles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Profiles",
  componentId: "sc-1hta4ma-4"
})(["width:100%;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;margin-bottom:20px;"]);
var Profile = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Profile",
  componentId: "sc-1hta4ma-5"
})(["display:flex;flex-direction:column;justify-content:space-around;align-items:center;width:280px;height:500px;background:#f5f5f5;text-align:justify;padding:16px;margin:15px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);@media(max-width:965px){width:30%;margin:16px;}@media(max-width:885px){width:70%;}p{width:100%;}img{width:150px;height:150px;border-radius:50%;}"]);
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__ContentWrapper",
  componentId: "sc-1hta4ma-6"
})(["width:70%;height:100%;background:#f5f5f5;display:flex;flex-direction:column;justify-content:center;align-items:center;flex-wrap:wrap;padding:20px;margin:50px auto;h1{font-size:3rem;margin-bottom:20px;text-align:center;}"]);
var Contents = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Contents",
  componentId: "sc-1hta4ma-7"
})(["width:100%;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;margin-bottom:20px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Content",
  componentId: "sc-1hta4ma-8"
})(["width:200px;height:300px;background:#fff;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 10px 0 -5px #eee,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px -9px rgba(0,0,0,0.15);padding:30px;margin:15px;display:flex;flex-direction:column;"]);
var Acessar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "pages__Acessar",
  componentId: "sc-1hta4ma-9"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";&:visited,&:active,&:link{color:inherit;}"], primaryColor, primaryColor);
var NewsletterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__NewsletterWrapper",
  componentId: "sc-1hta4ma-10"
})(["width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:", ";padding:5rem 0;h1{font-size:2.5rem;text-align:center;}p{font-size:1.1rem;margin:20px 0;}"], primaryColor);
var Newsletter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "pages__Newsletter",
  componentId: "sc-1hta4ma-11"
})(["input{border:none;border:1px solid #fff;padding:1.2rem;width:300px;}button{border:none;background:#181818;color:", ";padding:1.2rem;}"], primaryColor);

var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "OrtoConecta")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hero, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroInner, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Conectando a Ortodontia \xE0 toda \xE1rea da sa\xFAde"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Navegue pelo nosso site e descubra como!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#about"
  }, "Saiba mais"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About, {
    id: "about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Quem Somos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ale-gustavo-renato.jpg",
    alt: "OrtoConecta"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Em"), " reuni\xF5es espor\xE1dicas sobre temas que frequentemente convergiam para o tempo em que o praticante da ortodontia conseguiria desenvolver sua autonomia, nasce a Orto Conecta. Idealizada por tr\xEAs colegas de profiss\xE3o, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Dr. Renato Tanabe"), ", ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Dr. Alexandre Mendon\xE7a"), " e ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Dr. Gustavo Furlan"), ", esta ferramenta tem como objetivo trazer informa\xE7\xF5es sobre a ortodontia executada de forma eficiente, pr\xE1tica e segura, al\xE9m de integrar \xE1reas intimamente ligadas a esta especialidade. Know-how, sensibilidade e entusiasmo d\xE3o direcionamento para a constru\xE7\xE3o desta plataforma digital cuidadosamente planejada para produzir e compartilhar conhecimentos.  Um novo canal que ir\xE1 fazer parte da lista de manuais de consulta sobre os assuntos mais atuais das \xE1reas de sa\xFAde que se conectam diretamente \xE0 ortodontia. Esperamos que aproveitem este espa\xE7o e sua diversidade de materiais dispon\xEDveis no site, nos cursos online e presenciais que contribuir\xE3o para o aprimoramento de compet\xEAncias e habilidades fundamentais para o profissional que busca a excel\xEAncia."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Bem-vindos \xE0 plataforma ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "OrtoConecta!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfilesWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Perfis Profissionais"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Profiles, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Profile, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/renato.png",
    alt: "Dr. Renato Tanabe"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Dr. Renato Tanabe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xC9 formado pela UNISA-SP desde 1995. Especializou-se em ortodontia, estomatologia e ortopedia facial. Posteriormente tornou-se mestre em ortodontia e cl\xEDnica infantil. Coordenador das Atividades Cient\xEDficas em 7 edi\xE7\xF5es do Congresso Brasileiro de Ortodontia trabalhou sempre pelo crescimento da \xE1rea. Possui credenciamento nos sistemas Invisalign\xAE e Damon Smile\xAE. Atua como professor dos cursos de atualiza\xE7\xE3o e especializa\xE7\xE3o em ortodontia e ortopedia facial. Ortodontista cl\xEDnico desde 2001 e propriet\xE1rio da marca \u201CSorriso Ativo Odontologia\u201D, Dr. Renato Tanabe \xE9 refer\xEAncia de conhecimento da \xE1rea em S\xE3o Paulo.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Profile, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/alexandre.png",
    alt: "Dr. Alexandre Mendon\xE7a"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Dr. Alexandre Mendon\xE7a"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xC9 formado pela Universidade de Uberaba desde 1997. Especializou-se em Ortodontia pela ANEO-SP sendo tamb\xE9m p\xF3s graduado latu sensu em implantodontia e cirurgia oral menor. Atuante na \xE1rea desde 1997, Dr. Alexandre Mendon\xE7a \xE9 propriet\xE1rio da marca     OAM \u2013 Odontologia com grande \xEAnfase na \xE1rea de Planos Assistenciais Odontol\xF3gicos voltados \xE0s empresas.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Profile, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/gustavo.png",
    alt: "Dr. Gustavo Furlan"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Dr. Gustavo Furlan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xC9 formado pela Universidade de S\xE3o Paulo desde 2002. Especializou-se em ortodontia para posteriormente tornar-se mestre e atuar como professor dos cursos de atualiza\xE7\xE3o e especializa\xE7\xE3o nos estados de Minas Gerais, Rio Grande do Sul e S\xE3o Paulo. Ortodontista cl\xEDnico desde 2005, Dr. Gustavo Furlan \xE9 propriet\xE1rio da marca \u201CGF Ortodontia\u201D.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Conte\xFAdo do Site"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Contents, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaChalkboard"], {
    style: {
      fontSize: '3rem',
      color: '#ffc32a'
    }
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Painel OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "O contr\xE1rio da cren\xE7a popular, o Lorem Ipsum n\xE3o \xE9 simplesmente texto aleat\xF3rio. Tem ra\xEDzes numa pe\xE7a de literatura cl\xE1ssica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "/painel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Acessar, null, "Acessar"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaBook"], {
    style: {
      fontSize: '3rem',
      color: '#ffc32a'
    }
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Cursos e Materiais"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "O contr\xE1rio da cren\xE7a popular, o Lorem Ipsum n\xE3o \xE9 simplesmente texto aleat\xF3rio. Tem ra\xEDzes numa pe\xE7a de literatura cl\xE1ssica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "/cursos_e_materiais"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Acessar, null, "Acessar"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaBriefcase"], {
    style: {
      fontSize: '3rem',
      color: '#ffc32a'
    }
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Experi\xEAncias"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "O contr\xE1rio da cren\xE7a popular, o Lorem Ipsum n\xE3o \xE9 simplesmente texto aleat\xF3rio. Tem ra\xEDzes numa pe\xE7a de literatura cl\xE1ssica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "/experiencias"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Acessar, null, "Acessar"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaLightbulb"], {
    style: {
      fontSize: '3rem',
      color: '#ffc32a'
    }
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Dicas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "O contr\xE1rio da cren\xE7a popular, o Lorem Ipsum n\xE3o \xE9 simplesmente texto aleat\xF3rio. Tem ra\xEDzes numa pe\xE7a de literatura cl\xE1ssica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "/dicas"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Acessar, null, "Acessar"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaHeartbeat"], {
    style: {
      fontSize: '3rem',
      color: '#ffc32a'
    }
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Especialidades"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "O contr\xE1rio da cren\xE7a popular, o Lorem Ipsum n\xE3o \xE9 simplesmente texto aleat\xF3rio. Tem ra\xEDzes numa pe\xE7a de literatura cl\xE1ssica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "/especialidades"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Acessar, null, "Acessar"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegNewspaper"], {
    style: {
      fontSize: '3rem',
      color: '#ffc32a'
    }
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Casos Cl\xEDnicos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "O contr\xE1rio da cren\xE7a popular, o Lorem Ipsum n\xE3o \xE9 simplesmente texto aleat\xF3rio. Tem ra\xEDzes numa pe\xE7a de literatura cl\xE1ssica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    route: "/casos_clinicos"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Acessar, null, "Acessar"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsletterWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Registre-se em nossa Newsletter!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Receba nosso cont\xE9udo por email! N\xE3o \xE9 spam!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Newsletter, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Digite seu melhor email..."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Inscrever")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add('/', 'index').add('/especialidades', 'especialidades').add('/especialidades/:id', 'especialidade').add('/cursos_e_materiais', 'cursosemateriais').add('/painel', 'painel').add('/experiencias', 'experiencias').add('/experiencias/:id', 'experiencia');

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

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
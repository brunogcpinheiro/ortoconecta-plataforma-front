webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");






var primaryColor = "#FFD32A";
var Hero = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1hta4ma-0"
})(["width:100%;height:100vh;background-image:linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('/static/background.jpg');background-size:cover;background-repeat:no-repeat;background-position:center center;background-attachment:fixed;display:flex;align-items:center;justify-content:center;text-align:center;"]);
var HeroInner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__HeroInner",
  componentId: "sc-1hta4ma-1"
})(["background:transparent;color:#d6d6d6;margin-top:-50px;h1{font-size:3.5em;margin-top:0;margin-bottom:0.5em;background:transparent;}h2{background:transparent;font-size:1.7em;}a{display:block;width:150px;padding:1em;margin-top:50px;margin-left:auto;margin-right:auto;color:#000;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";transition:background 0.3s ease-in-out;-webkit-box-shadow:0px 3px 5px 0px rgba(94,94,94,1);-moz-box-shadow:0px 3px 5px 0px rgba(94,94,94,1);box-shadow:0px 3px 5px 0px rgba(94,94,94,1);&:hover{background:transparent;color:#fff;transition:background 0.3s ease-in-out;}}"], primaryColor, primaryColor);
var About = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "pages__About",
  componentId: "sc-1hta4ma-2"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;background:#fff;width:80%;max-width:800px;margin:-50px auto;margin-bottom:50px;border:1px solid #ccc;padding:26px;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);h1{font-size:3rem;color:#f1c40f;font-weight:bold;}img{width:80%;height:100%;margin-top:16px;border-radius:15px;border:2px solid ", "}p{margin-top:16px;text-align:justify;font-size:1.2rem;color:#2d3436;strong{font-size:1.2rem;color:#181818;}span{margin-left:24px;font-size:1.2rem;}}h3{font-size:2rem;margin-top:24px;color:#2d3436;text-align:center;span{margin-top:16px;font-size:2rem;color:#f1c40f;font-weight:bold;}}"], primaryColor);
var ProfilesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ProfilesWrapper",
  componentId: "sc-1hta4ma-3"
})(["width:100%;height:100%;background:", ";display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;margin-top:100px;h1{margin:20px 0;font-size:3rem;}"], primaryColor);
var Profiles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Profiles",
  componentId: "sc-1hta4ma-4"
})(["width:100%;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;margin-bottom:20px;"]);
var Profile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Profile",
  componentId: "sc-1hta4ma-5"
})(["display:flex;flex-direction:column;justify-content:space-around;align-items:center;width:280px;height:500px;background:#f5f5f5;text-align:justify;padding:16px;margin:15px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);@media(max-width:965px){width:30%;margin:16px;}@media(max-width:885px){width:70%;}img{width:150px;height:150px;border-radius:50%;}"]);
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__ContentWrapper",
  componentId: "sc-1hta4ma-6"
})(["width:70%;height:100%;background:#f5f5f5;display:flex;flex-direction:column;justify-content:center;align-items:center;flex-wrap:wrap;padding:20px;margin:50px auto;h1{font-size:3rem;margin-bottom:20px;text-align:center;}"]);
var Contents = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Contents",
  componentId: "sc-1hta4ma-7"
})(["width:100%;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;margin-bottom:20px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Content",
  componentId: "sc-1hta4ma-8"
})(["width:200px;height:300px;background:#fff;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 10px 0 -5px #eee,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px -9px rgba(0,0,0,0.15);padding:30px;margin:15px;display:flex;flex-direction:column;"]);
var Acessar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "pages__Acessar",
  componentId: "sc-1hta4ma-9"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";&:visited,&:active,&:link{color:inherit;}"], primaryColor, primaryColor);
var NewsletterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__NewsletterWrapper",
  componentId: "sc-1hta4ma-10"
})(["width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:", ";padding:5rem 0;h1{font-size:2.5rem;}p{font-size:1.1rem;margin:20px 0;}"], primaryColor);
var Newsletter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "pages__Newsletter",
  componentId: "sc-1hta4ma-11"
})(["width:70%;input{border:none;border:1px solid #fff;padding:1.2rem;}button{border:none;background:#181818;color:", ";padding:1.2rem;}"], primaryColor);

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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.663ea290244ef6d80557.hot-update.js.map
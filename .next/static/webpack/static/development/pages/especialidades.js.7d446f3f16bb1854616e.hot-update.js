webpackHotUpdate("static\\development\\pages\\especialidades.js",{

/***/ "./pages/especialidades.js":
/*!*********************************!*\
  !*** ./pages/especialidades.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-iframe */ "./node_modules/react-iframe/index.min.js");
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs/locale/pt-br */ "./node_modules/dayjs/locale/pt-br.js");
/* harmony import */ var dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_10__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var primaryColor = "#ffd32a";
var SpecialitiesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "especialidades__SpecialitiesWrapper",
  componentId: "cj4jpc-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;background-image:url('/static/network.jpg');background-attachment:fixed;background-position:top center;background-size:cover;margin:5px auto;padding:16px;max-width:1366px;width:100vw;h2{font-size:3rem;text-align:center;}"]);
var Speciality = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "especialidades__Speciality",
  componentId: "cj4jpc-1"
})(["max-width:650px;list-style:none;display:flex;flex-direction:column;justify-content:center;border:1px solid #ccc;border-radius:10px;padding:36px;margin-top:36px;background:#fff;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);li{background:#fff;}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "especialidades__Title",
  componentId: "cj4jpc-2"
})(["color:inherit;font-size:2.2rem;text-decoration:underline;font-weight:bold;transition:color 0.2s;background:#fff;&:hover{color:", ";transition:color 0.2s;}"], primaryColor);
var Date = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "especialidades__Date",
  componentId: "cj4jpc-3"
})(["color:#7f8c8d;font-style:italic;background:#fff;"]);
var Article = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "especialidades__Article",
  componentId: "cj4jpc-4"
})(["padding:16px 0 26px 0;background:#fff;"]);
var ReadMore = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "especialidades__ReadMore",
  componentId: "cj4jpc-5"
})(["border:none;border:2px solid ", ";padding:16px 26px;background:", ";color:#000;font-weight:bold;text-transform:uppercase;text-decoration:none;margin-top:24px;transition:background 0.3s;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);&:hover{background:#fff;transition:background 0.3s;}"], primaryColor, primaryColor);
var IframeContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "especialidades__IframeContainer",
  componentId: "cj4jpc-6"
})(["width:60%;display:flex;flex-direction:column;align-items:center;justify-content:center;@media (max-width:980px){width:100%;}"]);
var BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "especialidades__BtnWrapper",
  componentId: "cj4jpc-7"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;"]);
var PortfolioBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "especialidades__PortfolioBtn",
  componentId: "cj4jpc-8"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";transition:background 0.5s ease;&:visited,&:active,&:link{color:inherit;}&:hover{background:transparent;transition:background 0.5s ease;}"], primaryColor, primaryColor);
var EntrevistasBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "especialidades__EntrevistasBtn",
  componentId: "cj4jpc-9"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:#e74c3c;border:2px dashed #e74c3c;transition:background 0.5s ease;&:visited,&:active,&:link{color:inherit;}&:hover{background:transparent;transition:background 0.5s ease;}"]);

var Especialidades = function Especialidades(props) {
  var sorted = props.specialities.sort(function (a, b) {
    return a.publishedAt > b.publishedAt ? 1 : b.publishedAt > a.publishedAt ? -1 : 0;
  }).reverse();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "OrtoConecta | Especialidades")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SpecialitiesWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "OrtoConecta Especialidades"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IframeContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/saiba-mais.png"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_iframe__WEBPACK_IMPORTED_MODULE_8___default.a, {
    url: "https://www.youtube.com/embed/7lZ1QHBcWiY",
    width: "100%",
    height: "380px",
    display: "initial",
    position: "relative",
    className: "iframe",
    styles: {
      marginTop: "15px"
    },
    allowFullScreen: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BtnWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    prefetch: true,
    href: "/especialidades/portfolio"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PortfolioBtn, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaUserGraduate"], {
    style: {
      fontSize: "1.5rem",
      marginLeft: "10px",
      padding: "10px"
    }
  }), " ", "Portf\xF3lio dos profissionais")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    prefetch: true,
    href: "/especialidades/entrevistas"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EntrevistasBtn, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaMicrophoneAlt"], {
    style: {
      fontSize: "1.5rem",
      marginLeft: "10px",
      padding: "10px"
    }
  }), " ", "Palavra do Especialista"))), sorted.map(function (speciality) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Speciality, {
      key: speciality.id,
      "data-aos": "fade-right",
      "data-aos-duration": "1000"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      prefetch: true,
      href: "/especialidades/".concat(speciality.id)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, speciality.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, speciality.author, " (", speciality.speciality, ")"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Date, null, "Publicado em.:", " ", (dayjs__WEBPACK_IMPORTED_MODULE_7___default.a.locale("pt-br"), dayjs__WEBPACK_IMPORTED_MODULE_7___default()(speciality.publishedAt).format("DD_MMMM_YYYY").split("_").join(" de "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Article, null, "".concat(speciality.article.substr(0, 500), "...")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      prefetch: true,
      href: "/especialidades/".concat(speciality.id)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ReadMore, null, "Leia mais"))));
  }))));
};

Especialidades.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://api.ortoconecta.com.br/specialities");

        case 2:
          response = _context.sent;
          return _context.abrupt("return", {
            specialities: response.data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Especialidades);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/especialidades")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=especialidades.js.7d446f3f16bb1854616e.hot-update.js.map
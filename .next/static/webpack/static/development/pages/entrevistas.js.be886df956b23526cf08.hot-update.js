webpackHotUpdate("static/development/pages/entrevistas.js",{

/***/ "./pages/entrevistas.js":
/*!******************************!*\
  !*** ./pages/entrevistas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var EntrevistaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "entrevistas__EntrevistaWrapper",
  componentId: "tn1uxs-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:50px auto;padding:16px;max-width:1366px;h2{font-size:3rem;text-align:center;}"]);
var EntrevistasWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "entrevistas__EntrevistasWrapper",
  componentId: "tn1uxs-1"
})(["width:80%;height:100%;display:flex;flex-wrap:wrap;justify-content:space-evenly;align-items:center;"]);
var Entrevista = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "entrevistas__Entrevista",
  componentId: "tn1uxs-2"
})(["width:250px;height:450px;background:#fff;margin:20px;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 10px 0 -5px #eee,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px -9px rgba(0,0,0,0.15);padding:30px;img{width:100%;}"]);

var Entrevistas = function Entrevistas(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "OrtoConecta | Entrevistas com especialistas")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EntrevistaWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Entrevistas com especialistas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EntrevistasWrapper, null, props.professionals.map(function (professional) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Entrevista, {
      key: professional.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "http://api.ortoconecta.com.br".concat(professional.image.url)
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontSize: '1.5rem',
        textAlign: 'center'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, professional.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Especialidade.:"), " ", professional.speciality), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Email.:"), " ", professional.email), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Contato.:"), " ", professional.telephone), professional.clinical && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Endere\xE7o.:"), " ", professional.clinical));
  }))));
};

Entrevistas.getInitialProps =
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
          return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://api.ortoconecta.com.br/interviews');

        case 2:
          response = _context.sent;
          return _context.abrupt("return", {
            professionals: response.data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Entrevistas);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/entrevistas")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=entrevistas.js.be886df956b23526cf08.hot-update.js.map
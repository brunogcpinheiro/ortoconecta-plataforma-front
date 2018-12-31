webpackHotUpdate("static/development/pages/casosclinicos.js",{

/***/ "./pages/casosclinicos.js":
/*!********************************!*\
  !*** ./pages/casosclinicos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");


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








var primaryColor = "#ffd32a";
var CasesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "casosclinicos__CasesWrapper",
  componentId: "lbaym8-0"
})(["width:100%;height:100%;display:flex;flex-direction:column;align-items:center;max-width:1366px;background-image:url('/static/clinical.jpg');background-attachment:fixed;background-position:top center;background-size:cover;margin:0 auto;flex-wrap:wrap;"]);
var OptionsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "casosclinicos__OptionsWrapper",
  componentId: "lbaym8-1"
})(["display:flex;justify-content:space-evenly;align-items:center;width:80%;height:100%;margin:20px;@media(max-width:1128px){flex-wrap:wrap;}"]);
var Options = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "casosclinicos__Options",
  componentId: "lbaym8-2"
})(["height:100%;display:flex;flex-direction:column;align-items:center;padding:20px;margin:20px;background:#fff;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);h3{font-size:1.7rem;margin-bottom:20px;}"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "casosclinicos__Button",
  componentId: "lbaym8-3"
})(["display:flex;justify-content:center;align-items:center;border:none;border:2px solid ", ";padding:16px 26px;background:", ";color:#000;font-weight:bold;text-transform:uppercase;text-decoration:none;text-align:center;margin:24px 0;transition:background 0.3s;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);&:hover{background:#fff;transition:background 0.3s;}"], primaryColor, function (props) {
  return props.active ? '#fff' : primaryColor;
});
var ContentsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "casosclinicos__ContentsWrapper",
  componentId: "lbaym8-4"
})(["display:flex;align-items:center;justify-content:center;padding:20px;margin:20px;flex-wrap:wrap;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "casosclinicos__Content",
  componentId: "lbaym8-5"
})(["height:100%;background:#fff;box-shadow:0 1px 1px rgba(0,0,0,0.15),0 10px 0 -5px #eee,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px -9px rgba(0,0,0,0.15);padding:30px;display:flex;flex-direction:column;line-height:2rem;flex-wrap:wrap;margin:15px;h3{margin-bottom:30px;strong{font-size:2rem;}}p,strong{font-size:1.2rem;}"]);

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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "OrtoConecta | Casos Cl\xEDnicos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CasesWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OptionsWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Options, {
        className: "animated flipX"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Solu\xE7\xF5es OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Casos cl\xEDnicos tratados com base em evid\xEAncias cient\xEDficas respeitando os conceitos mais modernos."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
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
      }, "Mostrar casos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Options, {
        className: "animated flipY"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "E se fosse hoje..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Casos cl\xEDnicos tratados h\xE1 mais de 13 anos com as tend\xEAncias da \xE9poca. Com os recursos e conceitos atuais, o que poder\xEDamos modificar??"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
        active: this.state.activeStateTodayCases,
        onClick: function onClick() {
          return _this2.setState({
            switchCases: true,
            activeStateDefaultCases: false,
            activeStateTodayCases: true
          });
        }
      }, "Mostrar casos"))), this.state.switchCases === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          height: 'calc(100vh - 547px)',
          fontSize: '1.5rem',
          textAling: 'center'
        }
      }, "Escolha uma das op\xE7\xF5es acima para visualizar os casos cl\xEDnicos.") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentsWrapper, null, this.state.activeStateDefaultCases === true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, this.props.solutions.map(function (solution) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
          key: solution.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, solution.case_title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Paciente:"), " ", solution.patient_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Idade:"), " ", solution.patient_age), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Sexo:"), " ", solution.patient_genre), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, solution.skin_type), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Queixa principal:"), " ", solution.main_complaint), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Assuntos relacionados:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
          source: solution.keywords
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
          href: "https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(solution.material.url),
          target: "blank"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaFolderOpen"], {
          style: {
            background: 'transparent',
            fontSize: '1.5rem',
            marginRight: '10px'
          }
        }), " Visualizar Caso Cl\xEDnico"));
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, this.props.actuals.map(function (actual) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
          key: actual.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, actual.case_title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Paciente:"), " ", actual.patient_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Idade:"), " ", actual.patient_age), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Sexo:"), " ", actual.patient_genre), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, actual.skin_type), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Queixa principal:"), " ", actual.main_complaint), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Assuntos relacionados:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_6___default.a, {
          source: actual.keywords
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
          href: "https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(actual.material.url),
          target: "blank"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaFolderOpen"], {
          style: {
            background: 'transparent',
            fontSize: '1.5rem',
            marginRight: '10px'
          }
        }), " Visualizar Caso Cl\xEDnico"));
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var responseSolutions, responseActuals;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/solutions");

              case 2:
                responseSolutions = _context.sent;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/actuals");

              case 5:
                responseActuals = _context.sent;
                return _context.abrupt("return", {
                  solutions: responseSolutions.data,
                  actuals: responseActuals.data
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CasosClinicos;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

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
//# sourceMappingURL=casosclinicos.js.f2f92d97d1e1c3de32df.hot-update.js.map
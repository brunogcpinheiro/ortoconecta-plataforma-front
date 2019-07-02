webpackHotUpdate("static\\development\\pages\\entrevistas.js",{

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
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-iframe */ "./node_modules/react-iframe/index.min.js");
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var EntrevistaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "entrevistas__EntrevistaWrapper",
  componentId: "tn1uxs-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:50px auto;padding:16px;max-width:1366px;h2{font-size:3rem;text-align:center;}"]);
var EntrevistasWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "entrevistas__EntrevistasWrapper",
  componentId: "tn1uxs-1"
})(["width:32%;height:400px;margin:20px;display:flex;flex-direction:column;align-itens:center;justify-content:space-around;background:#f5f5f5;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);transform:scale(1);transition:transform 0.5s;&:hover{transform:scale(1.1);transition:transform 0.5s;}h2{text-align:center;font-size:1.5rem;}"]);
var VideoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "entrevistas__VideoWrapper",
  componentId: "tn1uxs-2"
})(["width:100%;height:300px;"]);
var Message = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "entrevistas__Message",
  componentId: "tn1uxs-3"
})(["height:calc(100vh - 362px);p{margin-top:30px;font-size:1.5rem;color:#999;}"]);

var Entrevistas = function Entrevistas(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "OrtoConecta | Palavra do Especialista")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EntrevistaWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Palavra do Especialista"), props.interviews.length === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Message, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Sem entrevistas no momento")) : props.interviews.map(function (interview) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EntrevistasWrapper, {
      key: interview.id,
      className: "animated bounceIn delay-1s"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_iframe__WEBPACK_IMPORTED_MODULE_5___default.a, {
      url: "https://www.youtube.com/embed/".concat(interview.video_url),
      position: "relative",
      width: "100%",
      height: "100%",
      display: "initial",
      className: "iframe",
      allowFullScreen: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, interview.title));
  })));
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
          return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://api.ortoconecta.com.br/interviews");

        case 2:
          response = _context.sent;
          return _context.abrupt("return", {
            interviews: response.data
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
//# sourceMappingURL=entrevistas.js.7ae7e6f12f37d2781e7e.hot-update.js.map
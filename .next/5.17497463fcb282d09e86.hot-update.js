webpackHotUpdate(5,{

/***/ "./pages/experiencia.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_iframe__ = __webpack_require__("./node_modules/react-iframe/index.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_iframe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_iframe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_main__ = __webpack_require__("./layouts/main.js");

var _jsxFileName = "/home/ubuntu/workspace/pages/experiencia.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








var primaryColor = "#ffd32a";
var ExperienceWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "experiencia__ExperienceWrapper",
  componentId: "ot2w5g-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:50px auto;padding:16px;h2{font-size:2.5rem;}"]);
var Experience = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "experiencia__Experience",
  componentId: "ot2w5g-1"
})(["margin:35px auto;width:70%;display:flex;justify-content:center;border:1px solid #ccc;border-radius:10px;padding:20px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);transition:0.5s background;div:first-child{flex:2;height:100%;}div:last-child{flex:1;margin-left:15px;h1{margin-bottom:16px;text-align:center;font-size:1.5rem;}p{text-align:justify;}}@media (max-width:780px){display:flex;flex-direction:column;align-items:center;}"]);
var CommentsWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "experiencia__CommentsWrapper",
  componentId: "ot2w5g-2"
})(["width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:25px;"]);
var Comment = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "experiencia__Comment",
  componentId: "ot2w5g-3"
})(["display:flex;flex-direction:column;justify-content:space-evenly;border:1px solid #ccc;border-radius:10px;padding:20px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);transition:0.5s background;width:100%;height:100%;div{h3{font-size:1.3rem;color:", ";}h4{color:#999;font-size:0.9rem;}small{font-style:italic;font-size:0.8rem;}}"], primaryColor);

var Experiencia = function Experiencia(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, "OrtoConecta | ", props.experience.title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ExperienceWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Experience, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_iframe___default.a, {
    url: "http://www.youtube.com/embed/".concat(props.experience.video_url),
    position: "relative",
    width: "100%",
    height: "500px",
    display: "initial",
    className: "iframe",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, props.experience.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, props.experience.description)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, "Coment\xE1rios"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CommentsWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Comment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, props.experience.comments.map(function (comment) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: comment.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      }
    }, comment.author), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      }
    }, comment.author_email), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      }
    }, (__WEBPACK_IMPORTED_MODULE_4_moment___default.a.locale('pt-br'), __WEBPACK_IMPORTED_MODULE_4_moment___default()(comment.date).format("LLL"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      }
    }, comment.body));
  })))));
};

Experiencia.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var query, experienceResponse;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/experiences/".concat(query.id));

          case 3:
            experienceResponse = _context.sent;
            return _context.abrupt("return", {
              experience: experienceResponse.data
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = Experiencia;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(primaryColor, "primaryColor", "/home/ubuntu/workspace/pages/experiencia.js");
  reactHotLoader.register(ExperienceWrapper, "ExperienceWrapper", "/home/ubuntu/workspace/pages/experiencia.js");
  reactHotLoader.register(Experience, "Experience", "/home/ubuntu/workspace/pages/experiencia.js");
  reactHotLoader.register(CommentsWrapper, "CommentsWrapper", "/home/ubuntu/workspace/pages/experiencia.js");
  reactHotLoader.register(Comment, "Comment", "/home/ubuntu/workspace/pages/experiencia.js");
  reactHotLoader.register(Experiencia, "Experiencia", "/home/ubuntu/workspace/pages/experiencia.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/pages/experiencia.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/experiencia")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.17497463fcb282d09e86.hot-update.js.map
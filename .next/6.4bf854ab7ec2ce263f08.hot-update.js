webpackHotUpdate(6,{

/***/ "./pages/experiencias.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_main__ = __webpack_require__("./layouts/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_fa__ = __webpack_require__("./node_modules/react-icons/fa/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_fa__);

var _jsxFileName = "/home/ubuntu/workspace/pages/experiencias.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








var primaryColor = "#ffd32a";
var ExperiencesWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "experiencias__ExperiencesWrapper",
  componentId: "bx0hxx-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:50px auto;padding:16px;h2{font-size:3rem;text-align:center;}"]);
var Experience = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "experiencias__Experience",
  componentId: "bx0hxx-1"
})(["margin:35px auto;width:70%;display:flex;justify-content:center;border:1px solid #ccc;border-radius:10px;padding:20px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);transition:0.5s background;img{width:35%;height:35%;}div{margin-left:16px;height:100%;h1{font-size:1.3rem;}p{margin-top:10px;}span{font-weight:bold;}}@media (max-width:980px){width:90%;display:flex;flex-direction:column;justify-content:center;align-items:center;}&:hover{-webkit-box-shadow:1px 3px 5px 0px #f6e58d;-moz-box-shadow:1px 3px 5px 0px #f6e58d;box-shadow:1px 3px 5px 0px #f6e58d;border:1px solid ", ";cursor:pointer;background:", ";transition:0.5s background;}"], primaryColor, primaryColor);
var Reactions = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "experiencias__Reactions",
  componentId: "bx0hxx-2"
})(["display:flex;justify-content:flex-end;align-items:center;padding:10px;"]);

var Experiencias = function Experiencias(props) {
  var sorted = props.experiences.sort(function (a, b) {
    return a.publishedAt > b.publishedAt ? 1 : b.publishedAt > a.publishedAt ? -1 : 0;
  }).reverse();
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, "OrtoConecta | Experi\xEAncias")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ExperiencesWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, "Compartilhando Experi\xEAncias OrtoConecta"), sorted.map(function (experience) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
      href: "http://ortoconecta-plataforma-front-brunogcpinheiro.c9users.io:8080/experiencias/".concat(experience.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Experience, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      key: experience.id,
      src: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(experience.thumbnail.url),
      alt: "Miniatura Experi\xEAncia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      }
    }, experience.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      }
    }, experience.description, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      }
    }, "Leia mais...")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Reactions, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_fa__["FaRegThumbsUp"], {
      style: {
        fontSize: '1.5rem',
        marginTop: '-4px',
        padding: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      }
    }), " (4)", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_fa__["FaRegCommentAlt"], {
      style: {
        fontSize: '1.5rem',
        marginLeft: '10px',
        padding: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      }
    }), " (", props.comments.length, ")")))));
  })));
};

Experiencias.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var experiencesResponse, commentsResponse;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/experiences");

        case 2:
          experiencesResponse = _context.sent;
          _context.next = 5;
          return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/comments");

        case 5:
          commentsResponse = _context.sent;
          return _context.abrupt("return", {
            experiences: experiencesResponse.data,
            comments: commentsResponse.data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
var _default = Experiencias;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(primaryColor, "primaryColor", "/home/ubuntu/workspace/pages/experiencias.js");
  reactHotLoader.register(ExperiencesWrapper, "ExperiencesWrapper", "/home/ubuntu/workspace/pages/experiencias.js");
  reactHotLoader.register(Experience, "Experience", "/home/ubuntu/workspace/pages/experiencias.js");
  reactHotLoader.register(Reactions, "Reactions", "/home/ubuntu/workspace/pages/experiencias.js");
  reactHotLoader.register(Experiencias, "Experiencias", "/home/ubuntu/workspace/pages/experiencias.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/pages/experiencias.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/experiencias")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.4bf854ab7ec2ce263f08.hot-update.js.map
webpackHotUpdate(6,{

/***/ "./pages/especialidades.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_main__ = __webpack_require__("./layouts/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);

var _jsxFileName = "/home/ubuntu/workspace/pages/especialidades.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }







var primaryColor = "#ffd32a";
var SpecialitiesWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "especialidades__SpecialitiesWrapper",
  componentId: "cj4jpc-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:980px;margin:0 auto;h2{text-transform:uppercase;font-size:2rem;color:#636e72;}"]);
var Speciality = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "especialidades__Speciality",
  componentId: "cj4jpc-1"
})(["list-style:none;display:flex;flex-direction:column;justify-content:center;border:1px solid #ccc;border-radius:10px;padding:36px;margin-top:36px;h4{font-size:1.3rem;padding:16px 0;color:#636e72;text-weight:bold;}"]);
var Title = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].a.withConfig({
  displayName: "especialidades__Title",
  componentId: "cj4jpc-2"
})(["color:inherit;font-size:2.2rem;text-decoration:underline;"]);
var Date = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].p.withConfig({
  displayName: "especialidades__Date",
  componentId: "cj4jpc-3"
})(["color:#7f8c8d;font-style:italic;"]);
var Article = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].p.withConfig({
  displayName: "especialidades__Article",
  componentId: "cj4jpc-4"
})(["padding:16px 0 26px 0;"]);
var ReadMore = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].a.withConfig({
  displayName: "especialidades__ReadMore",
  componentId: "cj4jpc-5"
})(["border:none;padding:16px 26px;background:", ";color:#fff;text-transform:uppercase;text-decoration:none;margin-top:24px;"], primaryColor);

var Especialidades = function Especialidades(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, "Especialidades | OrtoConecta")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SpecialitiesWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, "Especialidades"), props.specialities.map(function (speciality) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Speciality, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: speciality.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
      href: "/especialidades/".concat(speciality.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      }
    }, speciality.title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      }
    }, speciality.author, " (", speciality.speciality, ")"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Date, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      }
    }, "Publicado em.: ", speciality.publishedAt), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Article, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      }
    }, speciality.article), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
      href: "/especialidades/".concat(speciality.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ReadMore, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      }
    }, "Leia mais"))));
  }))));
};

Especialidades.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var response;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/specialities");

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
var _default = Especialidades;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(primaryColor, "primaryColor", "/home/ubuntu/workspace/pages/especialidades.js");
  reactHotLoader.register(SpecialitiesWrapper, "SpecialitiesWrapper", "/home/ubuntu/workspace/pages/especialidades.js");
  reactHotLoader.register(Speciality, "Speciality", "/home/ubuntu/workspace/pages/especialidades.js");
  reactHotLoader.register(Title, "Title", "/home/ubuntu/workspace/pages/especialidades.js");
  reactHotLoader.register(Date, "Date", "/home/ubuntu/workspace/pages/especialidades.js");
  reactHotLoader.register(Article, "Article", "/home/ubuntu/workspace/pages/especialidades.js");
  reactHotLoader.register(ReadMore, "ReadMore", "/home/ubuntu/workspace/pages/especialidades.js");
  reactHotLoader.register(Especialidades, "Especialidades", "/home/ubuntu/workspace/pages/especialidades.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/pages/especialidades.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/especialidades")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.becf15b658679201c1ac.hot-update.js.map
webpackHotUpdate(7,{

/***/ "./pages/especialidade.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_main__ = __webpack_require__("./layouts/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_fa__ = __webpack_require__("./node_modules/react-icons/fa/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_textarea_autosize__ = __webpack_require__("./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");

var _jsxFileName = "/home/ubuntu/workspace/pages/especialidade.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }










var primaryColor = "#ffd32a";
var SpecialityWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "especialidade__SpecialityWrapper",
  componentId: "sc-1oavti5-0"
})(["max-width:80%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;margin:50px auto;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);h2,h3{background:#fff;}h2{font-size:1.3rem;padding:16px 0;color:#636e72;text-weight:bold;}h3{color:#7f8c8d;font-style:italic;}"]);
var Title = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].h1.withConfig({
  displayName: "especialidade__Title",
  componentId: "sc-1oavti5-1"
})(["color:inherit;font-size:2.2rem;font-weight:bold;transition:color 0.2s;background:#fff;text-align:center;margin-top:16px;padding:16px;&:hover{color:#000;transition:color 0.2s;}"]);
var Img = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].img.withConfig({
  displayName: "especialidade__Img",
  componentId: "sc-1oavti5-2"
})(["width:150px;height:150px;object-fit:cover;object-position:top;border-radius:50%;border:2px solid ", ";margin-top:16px;"], primaryColor);
var Download = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].a.withConfig({
  displayName: "especialidade__Download",
  componentId: "sc-1oavti5-3"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";&:visited,&:active,&:link{color:inherit;}"], primaryColor, primaryColor);
var articleStyles = {
  margin: '26px',
  background: 'transparent',
  textAlign: 'justify',
  fontSize: '1.3rem',
  border: 'none',
  width: '90%',
  height: '99%',
  overflow: 'hidden',
  resize: 'none'
};

var Especialidade = function Especialidade(props) {
  var _props$speciality = props.speciality,
      title = _props$speciality.title,
      author = _props$speciality.author,
      speciality = _props$speciality.speciality,
      publishedAt = _props$speciality.publishedAt,
      author_avatar = _props$speciality.author_avatar,
      material = _props$speciality.material,
      article = _props$speciality.article;
  var formattedArticle = article.replace(/'\n'/g, "' + <br /> + '");
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, "Orto Conecta | ", props.speciality.title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SpecialityWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Img, {
    src: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(author_avatar.url),
    alt: author,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, author, " (", speciality, ")"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, "Publicado em ", (__WEBPACK_IMPORTED_MODULE_5_moment___default.a.locale('pt-br'), __WEBPACK_IMPORTED_MODULE_5_moment___default()(publishedAt).format("LL"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Download, {
    href: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(material.url),
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_fa__["FaDownload"], {
    style: {
      background: 'transparent',
      fontSize: '1.2rem',
      marginRight: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }), " Baixar Material"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_textarea_autosize__["a" /* default */], {
    disabled: true,
    style: articleStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, formattedArticle))));
};

Especialidade.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var query, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/specialities/".concat(query.id));

          case 3:
            response = _context.sent;
            return _context.abrupt("return", {
              speciality: response.data
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

var _default = Especialidade;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(primaryColor, "primaryColor", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(SpecialityWrapper, "SpecialityWrapper", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(Title, "Title", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(Img, "Img", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(Download, "Download", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(articleStyles, "articleStyles", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(Especialidade, "Especialidade", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/pages/especialidade.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/especialidade")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.da5f5d2d335240978e45.hot-update.js.map
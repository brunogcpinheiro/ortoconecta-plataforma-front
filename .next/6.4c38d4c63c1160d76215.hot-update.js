webpackHotUpdate(6,{

/***/ "./pages/cursosemateriais.js":
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

var _jsxFileName = "/home/ubuntu/workspace/pages/cursosemateriais.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








var primaryColor = "#ffd32a";
var TipsWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "cursosemateriais__TipsWrapper",
  componentId: "sc-1d8ifnv-0"
})(["margin-top:50px;padding:16px;background:transparent;h2{font-size:3rem;span{color:", ";font-size:3rem;font-weight:bold;}}h2,p{text-align:center;}"], primaryColor);
var TipWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "cursosemateriais__TipWrapper",
  componentId: "sc-1d8ifnv-1"
})(["display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;@media(max-width:980px){display:flex;justify-content:space-around;align-items:center;}"]);
var Tip = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "cursosemateriais__Tip",
  componentId: "sc-1d8ifnv-2"
})(["width:350px;height:100%;min-height:300px;display:flex;justify-content:space-around;align-items:center;margin-top:50px;padding:16px;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);flex-wrap:wrap;div{display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;}h3{color:#7f8c8d;font-style:italic;background:#fff;}h4{font-size:1.3rem;background:#fff;}h5{background:#fff;}p{flex:1;text-align:justify;margin-top:16px;font-size:1.1rem;background:#fff;}"]);
var Title = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].h1.withConfig({
  displayName: "cursosemateriais__Title",
  componentId: "sc-1d8ifnv-3"
})(["color:inherit;font-size:2.2rem;font-weight:bold;transition:color 0.2s;background:#fff;text-align:center;&:hover{color:#000;transition:color 0.2s;}"]);
var Img = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].img.withConfig({
  displayName: "cursosemateriais__Img",
  componentId: "sc-1d8ifnv-4"
})(["width:150px;height:150px;object-fit:cover;object-position:top;border-radius:50%;border:2px solid ", ";"], primaryColor);
var Download = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].a.withConfig({
  displayName: "cursosemateriais__Download",
  componentId: "sc-1d8ifnv-5"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";&:visited,&:active,&:link{color:inherit;}"], primaryColor, primaryColor);

var Tips = function Tips(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    }
  }, "Orto Conecta | Dicas")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TipsWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, "Material ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, "exclusivo"), " Orto Conecta"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    }
  }, "OBS.:"), " Baixe o material para ler o artigo completo!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TipWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    }
  }, props.tips.map(function (tip) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Tip, {
      key: tip.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Img, {
      src: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(tip.tips_image.url),
      alt: tip.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      }
    }, tip.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      }
    }, "Publicado em ", (__WEBPACK_IMPORTED_MODULE_5_moment___default.a.locale('pt-br'), __WEBPACK_IMPORTED_MODULE_5_moment___default()(tip.publishedAt).format("LL"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      }
    }, "Por ", tip.author), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      }
    }, "P\xE1ginas: ", tip.pages), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Download, {
      href: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(tip.material.url),
      target: "blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_fa__["FaDownload"], {
      style: {
        background: 'transparent',
        fontSize: '1.2rem',
        marginRight: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      }
    }), " Baixar Material"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      }
    }, tip.description)));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    }
  }, "Materiais ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    }
  }, "gratuitos"), " Orto Conecta"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    }
  }, "OBS.:"), " Baixe o material para ler o artigo completo!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TipWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    }
  }, props.tips.map(function (tip) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Tip, {
      key: tip.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Img, {
      src: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(tip.tips_image.url),
      alt: tip.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      }
    }, tip.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      }
    }, "Publicado em ", (__WEBPACK_IMPORTED_MODULE_5_moment___default.a.locale('pt-br'), __WEBPACK_IMPORTED_MODULE_5_moment___default()(tip.publishedAt).format("LL"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      }
    }, "Por ", tip.author), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      }
    }, "P\xE1ginas: ", tip.pages), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Download, {
      href: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(tip.material.url),
      target: "blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_fa__["FaDownload"], {
      style: {
        background: 'transparent',
        fontSize: '1.2rem',
        marginRight: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      }
    }), " Baixar Material"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      }
    }, tip.description)));
  }))))));
};

Tips.getInitialProps =
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
            return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/tips");

          case 3:
            response = _context.sent;
            return _context.abrupt("return", {
              tips: response.data
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

var _default = Tips;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(primaryColor, "primaryColor", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(TipsWrapper, "TipsWrapper", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(TipWrapper, "TipWrapper", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(Tip, "Tip", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(Title, "Title", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(Img, "Img", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(Download, "Download", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(Tips, "Tips", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/pages/cursosemateriais.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/cursosemateriais")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.4c38d4c63c1160d76215.hot-update.js.map
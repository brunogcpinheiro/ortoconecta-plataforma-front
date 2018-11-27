webpackHotUpdate(6,{

/***/ "./pages/painel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_iframe__ = __webpack_require__("./node_modules/react-iframe/index.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_iframe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_iframe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_main__ = __webpack_require__("./layouts/main.js");
var _jsxFileName = "/home/ubuntu/workspace/pages/painel.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var PainelWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].div.withConfig({
  displayName: "painel__PainelWrapper",
  componentId: "sc-1e30nmp-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:80%;margin:50px auto;padding:16px;h2{font-size:3rem;text-align:center;}"]);
var PainelContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].div.withConfig({
  displayName: "painel__PainelContainer",
  componentId: "sc-1e30nmp-1"
})(["margin-top:30px;"]);

var Painel = function Painel(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "OrtoConecta | Painel")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PainelWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Painel OrtoConecta"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_iframe___default.a, {
    url: "https://www.youtube.com/embed/pSFqDSUX4kE",
    width: "70%",
    height: "380px",
    className: "iframe",
    display: "initial",
    position: "relative",
    styles: {
      marginTop: '15px'
    },
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PainelContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/slide.jpg",
    alt: "Painel OrtoConecta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }))));
};

var _default = Painel;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PainelWrapper, "PainelWrapper", "/home/ubuntu/workspace/pages/painel.js");
  reactHotLoader.register(PainelContainer, "PainelContainer", "/home/ubuntu/workspace/pages/painel.js");
  reactHotLoader.register(Painel, "Painel", "/home/ubuntu/workspace/pages/painel.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/pages/painel.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/painel")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.560be326215073fa693c.hot-update.js.map
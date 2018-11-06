webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_main__ = __webpack_require__("./layouts/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = "/home/ubuntu/workspace/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var primaryColor = "#ffd32a";
var Hero = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].div.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1hta4ma-0"
})(["width:100%;height:100vh;background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/static/dentist.jpg');background-size:cover;background-repeat:no-repeat;background-position:center center;background-attachment:fixed;display:flex;align-items:center;justify-content:center;text-align:center;"]);
var HeroInner = __WEBPACK_IMPORTED_MODULE_1_styled_components__["c" /* default */].div.withConfig({
  displayName: "pages__HeroInner",
  componentId: "sc-1hta4ma-1"
})(["background:transparent;color:#d6d6d6;margin-top:-50px;h1{font-size:3.5em;margin-top:0;margin-bottom:0.5em;background:transparent;}h2{background:transparent;font-size:1.7em;}a{display:block;width:150px;padding:1em;margin-top:50px;margin-left:auto;margin-right:auto;color:#000;font-weight:bold;text-decoration:none;font-size:1.1em;background:", ";border:2px solid ", ";transition:background 0.3s ease-in-out;-webkit-box-shadow:0px 3px 5px 0px rgba(94,94,94,1);-moz-box-shadow:0px 3px 5px 0px rgba(94,94,94,1);box-shadow:0px 3px 5px 0px rgba(94,94,94,1);&:hover{background:transparent;color:#fff;transition:background 0.3s ease-in-out;}}"], primaryColor, primaryColor);

var Home = function Home(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, "Ortoconecta")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Hero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeroInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, "Conectando a Ortodontia \xE0 toda \xE1rea da sa\xFAde"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, "Navegue pelo nosso site e descubra como!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, "Saiba mais")))));
};

var _default = Home;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(primaryColor, "primaryColor", "/home/ubuntu/workspace/pages/index.js");
  reactHotLoader.register(Hero, "Hero", "/home/ubuntu/workspace/pages/index.js");
  reactHotLoader.register(HeroInner, "HeroInner", "/home/ubuntu/workspace/pages/index.js");
  reactHotLoader.register(Home, "Home", "/home/ubuntu/workspace/pages/index.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/pages/index.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.5e72a331e8b6bd84b386.hot-update.js.map
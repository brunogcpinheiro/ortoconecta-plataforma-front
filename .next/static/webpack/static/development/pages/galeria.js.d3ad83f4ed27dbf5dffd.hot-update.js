webpackHotUpdate("static/development/pages/galeria.js",{

/***/ "./pages/galeria.js":
/*!**************************!*\
  !*** ./pages/galeria.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-iframe */ "./node_modules/react-iframe/index.min.js");
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");








var primaryColor = "#ffd32a";
var ExperiencesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "galeria__ExperiencesWrapper",
  componentId: "u2y43w-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:50px auto;padding:16px;max-width:1366px;h2{font-size:3rem;text-align:center;}"]);
var IframeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "galeria__IframeContainer",
  componentId: "u2y43w-1"
})(["width:60%;display:flex;flex-direction:column;align-items:center;justify-content:center;@media (max-width:980px){width:100%;}"]);
var Experience = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "galeria__Experience",
  componentId: "u2y43w-2"
})(["margin:35px auto;width:95%;display:flex;justify-content:center;border:1px solid #ccc;border-radius:10px;padding:20px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);transition:0.5s background;img{width:40%;height:35%;@media (max-width:980px){width:60%;height:60%;}}div{margin-left:16px;height:100%;margin-top:10px;h1{font-size:1.3rem;text-align:center;}p{margin-top:10px;text-align:justify;span{margin-left:20px;}}span{font-weight:bold;}}@media (max-width:980px){width:90%;display:flex;flex-direction:column;justify-content:center;align-items:center;}&:hover{-webkit-box-shadow:1px 3px 5px 0px #f6e58d;-moz-box-shadow:1px 3px 5px 0px #f6e58d;box-shadow:1px 3px 5px 0px #f6e58d;border:1px solid ", ";cursor:pointer;background:", ";transition:0.5s background;}"], primaryColor, primaryColor);
var Reactions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "galeria__Reactions",
  componentId: "u2y43w-3"
})(["display:flex;justify-content:flex-end;align-items:center;padding:10px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "galeria__Title",
  componentId: "u2y43w-4"
})(["width:50%;background:transparent;display:flex;flex-direction:column;align-items:center;p{border:3px solid ", ";text-align:center;padding:16px;font-size:1.5rem;color:royalblue;background:#f5f5f5;margin:30px 0;}"], primaryColor);

var Galery = function Galery(props) {
  // const sorted = props.experiences
  // 	.sort(
  // 		(a, b) =>
  // 			a.publishedAt > b.publishedAt
  // 				? 1
  // 				: b.publishedAt > a.publishedAt ? -1 : 0,
  // 	)
  // 	.reverse();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "OrtoConecta | Galeria")));
}; // Galery.getInitialProps = async () => {
// };


/* harmony default export */ __webpack_exports__["default"] = (Galery);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/galeria")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=galeria.js.d3ad83f4ed27dbf5dffd.hot-update.js.map
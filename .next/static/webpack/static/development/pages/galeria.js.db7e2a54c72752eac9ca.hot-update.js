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
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-grid-gallery */ "./node_modules/react-grid-gallery/lib/Gallery.js");
/* harmony import */ var react_grid_gallery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_grid_gallery__WEBPACK_IMPORTED_MODULE_6__);







var primaryColor = "#ffd32a";
var GalleryAndTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "galeria__GalleryAndTitleWrapper",
  componentId: "u2y43w-0"
})(["padding:16px;background:transparent;margin:0 auto;max-width:1366px;div{margin:20px 0 10px 0;text-align:center;}h2{font-size:3rem;span{color:", ";font-size:3rem;font-weight:bold;}}h2,p{text-align:center;}"], primaryColor);
var GalerryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "galeria__GalerryWrapper",
  componentId: "u2y43w-1"
})(["padding:20px;"]);
var IMAGES1 = [{
  src: "/static/0-fotocapa.jpg",
  thumbnail: "/static/0-fotocapa.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
}, {
  src: "/static/0-fotocapa.jpg",
  thumbnail: "/static/0-fotocapa.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
}, {
  src: "/static/0-fotocapa.jpg",
  thumbnail: "/static/0-fotocapa.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
}];

var GalleryComponent = function GalleryComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "OrtoConecta | Galeria")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GalleryAndTitleWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Galeria de Fotos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GalerryWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_gallery__WEBPACK_IMPORTED_MODULE_6___default.a, {
    images: IMAGES1,
    rowHeight: 300,
    margin: 5,
    enableImageSelection: false
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (GalleryComponent);
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
//# sourceMappingURL=galeria.js.db7e2a54c72752eac9ca.hot-update.js.map
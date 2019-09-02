webpackHotUpdate("static/development/pages/materiais.js",{

/***/ "./pages/materiais.js":
/*!****************************!*\
  !*** ./pages/materiais.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-iframe */ "./node_modules/react-iframe/index.min.js");
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs/locale/pt-br */ "./node_modules/dayjs/locale/pt-br.js");
/* harmony import */ var dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_9__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var primaryColor = "#ffd32a";
var CoursesAndMaterialsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "materiais__CoursesAndMaterialsWrapper",
  componentId: "br3vw4-0"
})(["padding:16px;background:transparent;margin:0 auto;max-width:1366px;div{margin:20px 0 50px 0;text-align:center;}h2{font-size:3rem;span{color:", ";font-size:3rem;font-weight:bold;}}h2,p{text-align:center;}"], primaryColor);
var CourseAndMaterialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "materiais__CourseAndMaterialWrapper",
  componentId: "br3vw4-1"
})(["display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap;margin:0 auto;width:100%;@media (max-width:980px){display:flex;justify-content:space-around;align-items:center;}"]);
var Material = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "materiais__Material",
  componentId: "br3vw4-2"
})(["width:350px;height:100%;min-height:300px;display:flex;justify-content:space-around;align-items:center;margin-top:50px;padding:16px;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);flex-wrap:wrap;div{display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;width:100%;height:100%;}h3{color:#7f8c8d;font-style:italic;background:#fff;width:100%;height:100%;}h4{font-size:1.3rem;background:#fff;width:100%;height:100%;}h5{background:#fff;width:100%;height:100%;}p{flex:1;text-align:justify;margin-top:16px;font-size:1.1rem;background:#fff;width:100%;height:100%;}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "materiais__Title",
  componentId: "br3vw4-3"
})(["color:inherit;font-size:2.2rem;font-weight:bold;transition:color 0.2s;background:#fff;text-align:center;margin-top:-20px;&:hover{color:#000;transition:color 0.2s;}"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "materiais__Img",
  componentId: "br3vw4-4"
})(["width:150px;height:150px;object-fit:cover;object-position:top;border-radius:50%;border:2px solid ", ";"], primaryColor);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "materiais__Button",
  componentId: "br3vw4-5"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";color:#181818;&:visited,&:active,&:link{color:#181818;}"], primaryColor, primaryColor);

var CoursesAndMaterials = function CoursesAndMaterials(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "OrtoConecta | Cursos e Materiais")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CoursesAndMaterialsWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Materiais ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Dispon\xEDveis"), " OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "OBS.:"), " Clique em visualizar material para ler artigo completo!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CourseAndMaterialWrapper, null, props.materials.map(function (material) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Material, {
      key: material.id,
      "data-aos": "fade-up",
      "data-aos-duration": "1000"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {
      src: "http://api.ortoconecta.com.br".concat(material.material_image.url),
      alt: material.title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, material.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Publicado em", " ", (dayjs__WEBPACK_IMPORTED_MODULE_6___default.a.locale("pt-br"), dayjs__WEBPACK_IMPORTED_MODULE_6___default()(material.publishedAt).format("DD_MMMM_YYYY").split("_").join(" de "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Por ", material.author), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "P\xE1ginas: ", material.pages), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
      href: "http://api.ortoconecta.com.br".concat(material.material.url),
      target: "blank"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaSistrix"], {
      style: {
        background: "transparent",
        fontSize: "1.2rem",
        marginRight: "10px"
      }
    }), " ", "Visualizar Material"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, material.description)));
  }))))));
};

CoursesAndMaterials.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, materialResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://api.ortoconecta.com.br/materials");

          case 3:
            materialResponse = _context.sent;
            return _context.abrupt("return", {
              materials: materialResponse.data
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

/* harmony default export */ __webpack_exports__["default"] = (CoursesAndMaterials);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/materiais")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=materiais.js.3b623d3cf8c4da4a3708.hot-update.js.map
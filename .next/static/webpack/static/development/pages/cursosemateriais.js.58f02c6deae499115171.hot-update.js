webpackHotUpdate("static/development/pages/cursosemateriais.js",{

/***/ "./pages/cursosemateriais.js":
/*!***********************************!*\
  !*** ./pages/cursosemateriais.js ***!
  \***********************************/
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
  displayName: "cursosemateriais__CoursesAndMaterialsWrapper",
  componentId: "sc-1d8ifnv-0"
})(["padding:16px;background:transparent;div{margin:20px 0 50px 0;text-align:center;}h2{font-size:3rem;span{color:", ";font-size:3rem;font-weight:bold;}}h2,p{text-align:center;}"], primaryColor);
var CourseAndMaterialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "cursosemateriais__CourseAndMaterialWrapper",
  componentId: "sc-1d8ifnv-1"
})(["display:flex;justify-content:space-evenly;align-items:flex-start;flex-wrap:wrap;@media(max-width:980px){display:flex;justify-content:space-around;align-items:center;}"]);
var Course = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "cursosemateriais__Course",
  componentId: "sc-1d8ifnv-2"
})(["width:50%;height:100%;min-height:300px;display:flex;justify-content:space-around;align-items:center;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);flex-wrap:wrap;div{display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;margin-top:30px;}h1{margin-top:10px;font-size:1.5rem;}h2{font-size:1.3rem;color:#ee5253;margin-top:10px;}h3{font-size:1.2rem;background:#fff;span{font-weight:normal;background:#fff;}}@media(max-width:980px){display:flex;justify-content:space-around;align-items:center;width:85%;padding:5px;}"]);
var Material = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "cursosemateriais__Material",
  componentId: "sc-1d8ifnv-3"
})(["width:350px;height:100%;min-height:300px;display:flex;justify-content:space-around;align-items:center;margin-top:50px;padding:16px;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);flex-wrap:wrap;div{display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;}h3{color:#7f8c8d;font-style:italic;background:#fff;}h4{font-size:1.3rem;background:#fff;}h5{background:#fff;}p{flex:1;text-align:justify;margin-top:16px;font-size:1.1rem;background:#fff;}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "cursosemateriais__Title",
  componentId: "sc-1d8ifnv-4"
})(["color:inherit;font-size:2.2rem;font-weight:bold;transition:color 0.2s;background:#fff;text-align:center;margin-top:-20px;&:hover{color:#000;transition:color 0.2s;}"]);
var CourseImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "cursosemateriais__CourseImg",
  componentId: "sc-1d8ifnv-5"
})(["width:100%;height:100%;margin:0;padding:0;border-top-left-radius:10px;border-top-right-radius:10px;"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "cursosemateriais__Img",
  componentId: "sc-1d8ifnv-6"
})(["width:150px;height:150px;object-fit:cover;object-position:top;border-radius:50%;border:2px solid ", ";"], primaryColor);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "cursosemateriais__Button",
  componentId: "sc-1d8ifnv-7"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";&:visited,&:active,&:link{color:inherit;}"], primaryColor, primaryColor);

var CoursesAndMaterials = function CoursesAndMaterials(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "OrtoConecta | Cursos e Materiais")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CoursesAndMaterialsWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Cursos e eventos OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CourseAndMaterialWrapper, null, props.courses.map(function (course) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Course, {
      key: course.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CourseImg, {
      src: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(course.course_image.url),
      alt: course.title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, course.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Local.: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, course.local)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Quando.: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, course.date_event)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, course.price), course.sold_out === true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Ingressos esgotados!") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaCreditCard"], {
      style: {
        background: 'transparent',
        fontSize: '1.2rem',
        marginRight: '10px'
      }
    }), " Comprar")));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Material ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "exclusivo"), " OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Estudo sobre Alicates Ortod\xF4nticos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_iframe__WEBPACK_IMPORTED_MODULE_3___default.a, {
    url: "https://www.slideshare.net/slideshow/embed_code/key/wuMVMJvfdz3k5J",
    width: "90%",
    height: "550px",
    className: "iframe",
    display: "initial",
    position: "relative",
    styles: {
      marginTop: "50px"
    },
    allowFullScreen: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Materiais ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "gratuitos"), " OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "OBS.:"), " Baixe o material para ler o artigo completo!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CourseAndMaterialWrapper, null, props.materials.map(function (material) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Material, {
      key: material.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {
      src: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(material.material_image.url),
      alt: material.title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, material.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Publicado em ", (dayjs__WEBPACK_IMPORTED_MODULE_6___default.a.locale('pt-br'), dayjs__WEBPACK_IMPORTED_MODULE_6___default()(material.publishedAt).format('DD_MMMM_YYYY').split('_').join(' de '))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Por ", material.author), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "P\xE1ginas: ", material.pages), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
      href: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(material.material.url),
      target: "blank"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaDownload"], {
      style: {
        background: 'transparent',
        fontSize: '1.2rem',
        marginRight: '10px'
      }
    }), " Baixar Material"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, material.description)));
  }))))));
};

CoursesAndMaterials.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, materialResponse, coursesResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/materials");

          case 3:
            materialResponse = _context.sent;
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/courses");

          case 6:
            coursesResponse = _context.sent;
            return _context.abrupt("return", {
              materials: materialResponse.data,
              courses: coursesResponse.data
            });

          case 8:
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/cursosemateriais")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cursosemateriais.js.58f02c6deae499115171.hot-update.js.map
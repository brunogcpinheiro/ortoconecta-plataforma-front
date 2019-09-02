webpackHotUpdate("static/development/pages/especializacaoecursos.js",{

/***/ "./pages/especializacaoecursos.js":
/*!****************************************!*\
  !*** ./pages/especializacaoecursos.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var primaryColor = "#ffd32a";
var CoursesAndMaterialsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "especializacaoecursos__CoursesAndMaterialsWrapper",
  componentId: "sc-2reotb-0"
})(["padding:16px;background:transparent;margin:0 auto;max-width:1366px;div{margin:20px 0 50px 0;text-align:center;}h2{font-size:3rem;span{color:", ";font-size:3rem;font-weight:bold;}}h2,p{text-align:center;}"], primaryColor);
var CourseAndMaterialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "especializacaoecursos__CourseAndMaterialWrapper",
  componentId: "sc-2reotb-1"
})(["display:flex;justify-content:space-evenly;align-items:center;flex-wrap:wrap;margin:0 auto;width:100%;@media (max-width:980px){display:flex;justify-content:space-around;align-items:center;}"]);
var Course = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "especializacaoecursos__Course",
  componentId: "sc-2reotb-2"
})(["width:100%;height:100%;min-height:300px;display:flex;justify-content:space-around;align-items:center;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);flex-wrap:wrap;margin:0 auto;h1{margin-bottom:30px;font-size:3rem;}h2{font-size:1.3rem;color:#ee5253;margin-top:10px;}h3{font-size:1.2rem;background:#fff;span{font-weight:normal;background:#fff;}}@media (max-width:980px){display:flex;justify-content:space-around;align-items:center;width:85%;padding:5px;}"]);
var CourseData = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "especializacaoecursos__CourseData",
  componentId: "sc-2reotb-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;flex-wrap:wrap;padding:0;background:#fff;margin-bottom:20px;p{margin-top:20px;color:", ";font-size:1.2rem;}"], primaryColor);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "especializacaoecursos__Title",
  componentId: "sc-2reotb-4"
})(["color:inherit;font-size:2.2rem;font-weight:bold;transition:color 0.2s;background:#fff;text-align:center;margin-top:-20px;&:hover{color:#000;transition:color 0.2s;}"]);
var CourseImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "especializacaoecursos__CourseImg",
  componentId: "sc-2reotb-5"
})(["width:100%;height:100%;margin:0;padding:0;border-top-left-radius:10px;border-top-right-radius:10px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;img{width:30%;height:30%;padding:20px;@media (max-width:980px){width:80%;height:80%;padding:5px;}}"]);
var Purchase = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "especializacaoecursos__Purchase",
  componentId: "sc-2reotb-6"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin:-70px 0 50px 0;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";color:#fff;&:visited,&:active,&:link{color:#fff;}"], primaryColor, primaryColor);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "especializacaoecursos__Image",
  componentId: "sc-2reotb-7"
})(["width:50%;margin:-50px 0 50px 0;"]);
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "especializacaoecursos__ImageWrapper",
  componentId: "sc-2reotb-8"
})(["-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);"]);

var SpecializationAndCourses = function SpecializationAndCourses(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "OrtoConecta | Especializa\xE7\xE3o e Cursos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CoursesAndMaterialsWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Especializa\xE7\xE3o"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/0-fotocapa.jpg",
    alt: "Especializa\xE7\xE3o"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Cursos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CourseAndMaterialWrapper, null, props.courses.sort(function (a, b) {
    return a.createdAt < b.createdAt;
  }).map(function (course) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Course, {
      key: course.id,
      className: "animated zoomIn delay-1s"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CourseImg, null, course.course_image.map(function (c) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        key: c._id,
        src: "http://api.ortoconecta.com.br".concat(c.url),
        alt: c.name
      });
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CourseData, null, course.sold_out === true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, {
      src: "/static/esgotado.png",
      alt: "Esgotado"
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Purchase, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaCreditCard"], {
      style: {
        background: "transparent",
        fontSize: "1.2rem",
        marginRight: "10px"
      }
    }), " ", "Comprar"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, course.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Local.: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, course.local)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Quando.: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, course.date_event)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Valor.: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, course.price)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "No momento estamos fazendo inscri\xE7\xF5es somente por WhatsApp. Entre em contato.")));
  }))))));
};

SpecializationAndCourses.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, coursesResponse;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://api.ortoconecta.com.br/courses");

          case 3:
            coursesResponse = _context.sent;
            return _context.abrupt("return", {
              courses: coursesResponse.data
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

/* harmony default export */ __webpack_exports__["default"] = (SpecializationAndCourses);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/especializacaoecursos")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=especializacaoecursos.js.e8575149b9d6347949de.hot-update.js.map
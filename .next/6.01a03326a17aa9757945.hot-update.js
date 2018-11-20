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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_iframe__ = __webpack_require__("./node_modules/react-iframe/index.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_iframe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_iframe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_main__ = __webpack_require__("./layouts/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_fa__ = __webpack_require__("./node_modules/react-icons/fa/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_icons_fa__);

var _jsxFileName = "/home/ubuntu/workspace/pages/cursosemateriais.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }









var primaryColor = "#ffd32a";
var CoursesAndMaterialsWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "cursosemateriais__CoursesAndMaterialsWrapper",
  componentId: "sc-1d8ifnv-0"
})(["padding:16px;background:transparent;div{margin-top:50px;text-align:center;}h2{font-size:3rem;span{color:", ";font-size:3rem;font-weight:bold;}}h2,p{text-align:center;}"], primaryColor);
var CourseAndMaterialWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "cursosemateriais__CourseAndMaterialWrapper",
  componentId: "sc-1d8ifnv-1"
})(["display:flex;justify-content:space-evenly;align-items:flex-start;flex-wrap:wrap;@media(max-width:980px){display:flex;justify-content:space-around;align-items:center;}"]);
var Material = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "cursosemateriais__Material",
  componentId: "sc-1d8ifnv-2"
})(["width:350px;height:100%;min-height:300px;display:flex;justify-content:space-around;align-items:center;margin-top:50px;padding:16px;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);flex-wrap:wrap;div{display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;}h3{color:#7f8c8d;font-style:italic;background:#fff;}h4{font-size:1.3rem;background:#fff;}h5{background:#fff;}p{flex:1;text-align:justify;margin-top:16px;font-size:1.1rem;background:#fff;}"]);
var Title = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].h1.withConfig({
  displayName: "cursosemateriais__Title",
  componentId: "sc-1d8ifnv-3"
})(["color:inherit;font-size:2.2rem;font-weight:bold;transition:color 0.2s;background:#fff;text-align:center;margin-top:-20px;&:hover{color:#000;transition:color 0.2s;}"]);
var CourseImg = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].img.withConfig({
  displayName: "cursosemateriais__CourseImg",
  componentId: "sc-1d8ifnv-4"
})(["width:100%;height:100%;margin:0;padding:0;"]);
var Img = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].img.withConfig({
  displayName: "cursosemateriais__Img",
  componentId: "sc-1d8ifnv-5"
})(["width:150px;height:150px;object-fit:cover;object-position:top;border-radius:50%;border:2px solid ", ";"], primaryColor);
var Download = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].a.withConfig({
  displayName: "cursosemateriais__Download",
  componentId: "sc-1d8ifnv-6"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";&:visited,&:active,&:link{color:inherit;}"], primaryColor, primaryColor);

var CoursesAndMaterials = function CoursesAndMaterials(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    }
  }, "Orto Conecta | Cursos e Materiais")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CoursesAndMaterialsWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    }
  }, "Cursos e eventos OrtoConecta"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CourseAndMaterialWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  }, props.courses.map(function (course) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Material, {
      key: course.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CourseImg, {
      src: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(course.course_image.url),
      alt: course.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      }
    }, course.title)));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    }
  }, "Material ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    }
  }, "exclusivo"), " OrtoConecta"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    }
  }, "Estudo sobre Alicates Ortod\xF4nticos"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_iframe___default.a, {
    url: "https://www.slideshare.net/slideshow/embed_code/key/wuMVMJvfdz3k5J",
    width: "90%",
    height: "550px",
    className: "iframe",
    display: "initial",
    position: "relative",
    styles: {
      marginTop: "50px"
    },
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    }
  }, "Materiais ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    }
  }, "gratuitos"), " OrtoConecta"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    }
  }, "OBS.:"), " Baixe o material para ler o artigo completo!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CourseAndMaterialWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    }
  }, props.materials.map(function (material) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CourseAndMaterial, {
      key: material.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Img, {
      src: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(material.material_image.url),
      alt: material.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      }
    }, material.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      }
    }, "Publicado em ", (__WEBPACK_IMPORTED_MODULE_6_moment___default.a.locale('pt-br'), __WEBPACK_IMPORTED_MODULE_6_moment___default()(material.publishedAt).format("LL"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      }
    }, "Por ", material.author), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      }
    }, "P\xE1ginas: ", material.pages), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Download, {
      href: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(material.material.url),
      target: "blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_icons_fa__["FaDownload"], {
      style: {
        background: 'transparent',
        fontSize: '1.2rem',
        marginRight: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      }
    }), " Baixar Material"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      }
    }, material.description)));
  }))))));
};

CoursesAndMaterials.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var query, materialResponse, coursesResponse;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/materials");

          case 3:
            materialResponse = _context.sent;
            _context.next = 6;
            return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/courses");

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

var _default = CoursesAndMaterials;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(primaryColor, "primaryColor", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(CoursesAndMaterialsWrapper, "CoursesAndMaterialsWrapper", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(CourseAndMaterialWrapper, "CourseAndMaterialWrapper", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(Material, "Material", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(Title, "Title", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(CourseImg, "CourseImg", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(Img, "Img", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(Download, "Download", "/home/ubuntu/workspace/pages/cursosemateriais.js");
  reactHotLoader.register(CoursesAndMaterials, "CoursesAndMaterials", "/home/ubuntu/workspace/pages/cursosemateriais.js");
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
//# sourceMappingURL=6.01a03326a17aa9757945.hot-update.js.map
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./layouts/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_header__ = __webpack_require__("./src/components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_footer__ = __webpack_require__("./src/components/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_styles_global__ = __webpack_require__("./src/styles/global.js");
var _jsxFileName = "/home/ubuntu/workspace/layouts/main.js";






var Container = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
  displayName: "main__Container",
  componentId: "sc-196d63t-0"
})(["height:100%;"]);
/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_styles_global__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })));
});

/***/ }),

/***/ "./pages/cursosemateriais.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_iframe__ = __webpack_require__("react-iframe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_iframe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_iframe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts_main__ = __webpack_require__("./layouts/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_fa__ = __webpack_require__("react-icons/fa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_icons_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_icons_fa__);

var _jsxFileName = "/home/ubuntu/workspace/pages/cursosemateriais.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }









var primaryColor = "#ffd32a";
var CoursesAndMaterialsWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
  displayName: "cursosemateriais__CoursesAndMaterialsWrapper",
  componentId: "sc-1d8ifnv-0"
})(["padding:16px;background:transparent;div{margin:20px 0 50px 0;text-align:center;}h2{font-size:3rem;span{color:", ";font-size:3rem;font-weight:bold;}}h2,p{text-align:center;}"], primaryColor);
var CourseAndMaterialWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
  displayName: "cursosemateriais__CourseAndMaterialWrapper",
  componentId: "sc-1d8ifnv-1"
})(["display:flex;justify-content:space-evenly;align-items:flex-start;flex-wrap:wrap;@media(max-width:980px){display:flex;justify-content:space-around;align-items:center;}"]);
var Course = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
  displayName: "cursosemateriais__Course",
  componentId: "sc-1d8ifnv-2"
})(["width:50%;height:100%;min-height:300px;display:flex;justify-content:space-around;align-items:center;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);flex-wrap:wrap;div{display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;margin-top:30px;}h1{margin-top:10px;font-size:1.5rem;}h2{font-size:1.3rem;color:#ee5253;margin-top:10px;}h3{font-size:1.2rem;background:#fff;span{font-weight:normal;background:#fff;}}@media(max-width:980px){display:flex;justify-content:space-around;align-items:center;width:85%;padding:5px;}"]);
var Material = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
  displayName: "cursosemateriais__Material",
  componentId: "sc-1d8ifnv-3"
})(["width:350px;height:100%;min-height:300px;display:flex;justify-content:space-around;align-items:center;margin-top:50px;padding:16px;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);flex-wrap:wrap;div{display:flex;flex-direction:column;justify-content:center;align-items:center;background:#fff;}h3{color:#7f8c8d;font-style:italic;background:#fff;}h4{font-size:1.3rem;background:#fff;}h5{background:#fff;}p{flex:1;text-align:justify;margin-top:16px;font-size:1.1rem;background:#fff;}"]);
var Title = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.h1.withConfig({
  displayName: "cursosemateriais__Title",
  componentId: "sc-1d8ifnv-4"
})(["color:inherit;font-size:2.2rem;font-weight:bold;transition:color 0.2s;background:#fff;text-align:center;margin-top:-20px;&:hover{color:#000;transition:color 0.2s;}"]);
var CourseImg = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.img.withConfig({
  displayName: "cursosemateriais__CourseImg",
  componentId: "sc-1d8ifnv-5"
})(["width:100%;height:100%;margin:0;padding:0;border-top-left-radius:10px;border-top-right-radius:10px;"]);
var Img = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.img.withConfig({
  displayName: "cursosemateriais__Img",
  componentId: "sc-1d8ifnv-6"
})(["width:150px;height:150px;object-fit:cover;object-position:top;border-radius:50%;border:2px solid ", ";"], primaryColor);
var Button = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.a.withConfig({
  displayName: "cursosemateriais__Button",
  componentId: "sc-1d8ifnv-7"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";&:visited,&:active,&:link{color:inherit;}"], primaryColor, primaryColor);

var CoursesAndMaterials = function CoursesAndMaterials(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    }
  }, "OrtoConecta | Cursos e Materiais")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CoursesAndMaterialsWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    }
  }, "Cursos e eventos OrtoConecta"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CourseAndMaterialWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    }
  }, props.courses.map(function (course) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Course, {
      key: course.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CourseImg, {
      src: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(course.course_image.url),
      alt: course.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      }
    }, course.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      }
    }, "Local.: ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      }
    }, course.local)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      }
    }, "Quando.: ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      }
    }, course.date_event)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      }
    }, course.price), course.sold_out === true ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      }
    }, "Ingressos esgotados!") : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Button, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_icons_fa__["FaCreditCard"], {
      style: {
        background: 'transparent',
        fontSize: '1.2rem',
        marginRight: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      }
    }), " Comprar")));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    }
  }, "Material ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    }
  }, "exclusivo"), " OrtoConecta"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
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
      lineNumber: 236
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    }
  }, "Materiais ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    }
  }, "gratuitos"), " OrtoConecta"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    }
  }, "OBS.:"), " Baixe o material para ler o artigo completo!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CourseAndMaterialWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    }
  }, props.materials.map(function (material) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Material, {
      key: material.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Img, {
      src: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(material.material_image.url),
      alt: material.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      }
    }, material.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      }
    }, "Publicado em ", (__WEBPACK_IMPORTED_MODULE_6_moment___default.a.locale('pt-br'), __WEBPACK_IMPORTED_MODULE_6_moment___default()(material.publishedAt).format("LL"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      }
    }, "Por ", material.author), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      }
    }, "P\xE1ginas: ", material.pages), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Button, {
      href: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(material.material.url),
      target: "blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_icons_fa__["FaDownload"], {
      style: {
        background: 'transparent',
        fontSize: '1.2rem',
        marginRight: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      }
    }), " Baixar Material"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
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

/* harmony default export */ __webpack_exports__["default"] = (CoursesAndMaterials);

/***/ }),

/***/ "./src/components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_fa__ = __webpack_require__("react-icons/fa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_icons_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa__);
var _jsxFileName = "/home/ubuntu/workspace/src/components/footer.js";



var primaryColor = "#ffd32a";
var FooterWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "footer__FooterWrapper",
  componentId: "hdo0sp-0"
})(["width:100%;height:150px;background:#181818;display:flex;flex-direction:column;justify-content:center;align-items:center;p{color:#fff;text-align:center;a{color:", ";text-decoration:none;&:hover{text-decoration:underline;}}}div{display:flex;align-items:center;justify-content:center;a{color:", ";font-size:2rem;padding:16px;&:hover{color:#fff;}}}"], primaryColor, primaryColor);

var Footer = function Footer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FooterWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Entre em contato conosco pelas redes sociais!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://instagram.com/ortoconecta",
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa__["FaInstagram"], {
    style: {
      fontSize: '2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://facebook.com/ortoconecta",
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa__["FaFacebookSquare"], {
    style: {
      fontSize: '2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://facebook.com/ortoconecta",
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_icons_fa__["FaWhatsapp"], {
    style: {
      fontSize: '2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, "Desenvolvido por ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://facebook.com/bruno_pinheiro373",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, "Bruno Carpinelli"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, "Direitos Reservados \xAE"));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/ubuntu/workspace/src/components/header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var primaryColor = "#ffd32a";
var Navigation = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "header__Navigation",
  componentId: "sc-1srxfqa-0"
})(["height:80px;display:flex;align-items:center;justify-content:space-around;list-style:none;background:#fff;width:100%;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);@media(max-width:980px){ul{display:none;}", " .icon{display:block;float:right;}}"], MenuIcon);
var MenuIcon = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "header__MenuIcon",
  componentId: "sc-1srxfqa-1"
})(["display:flex;flex-direction:column;cursor:pointer;div{width:35px;height:5px;background-color:#999;margin:2px 0;display:none;}"]);
var Logo = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "header__Logo",
  componentId: "sc-1srxfqa-2"
})(["background:transparent;a{display:flex;text-decoration:none;color:inherit;justify-content:center;align-items:center;background:transparent;img{width:70px;height:70px;background:transparent;}h2{font-size:2rem;margin-left:16px;color:", ";background:transparent;}}"], primaryColor);
var Menu = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.ul.withConfig({
  displayName: "header__Menu",
  componentId: "sc-1srxfqa-3"
})(["display:flex;background:transparent;list-style:none;color:#303030;li{padding:16px;font-weight:bold;font-size:1.3rem;background:transparent;a{text-decoration:none;color:#7f8c8d;text-transform:uppercase;transition:color 0.4s;background:transparent;&:after{display:block;content:'';border-bottom:solid 3px ", ";transform:scaleX(0);transition:transform 250ms ease-in-out;}&:hover{color:", ";transition:color 0.4s;}&:hover:after{transform:scaleX(1);}}"], primaryColor, primaryColor);
var Dropdown = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "header__Dropdown",
  componentId: "sc-1srxfqa-4"
})(["position:relative;display:block;"]);
var DropdownContent = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "header__DropdownContent",
  componentId: "sc-1srxfqa-5"
})(["display:block;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);padding:12px 16px;z-index:1;"]);

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        showMenu: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleMenuOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.setState(function (state) {
          return {
            showMenu: !state.showMenu
          };
        });

        console.log(_this.state.showMenu);
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Navigation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/logo.jpeg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, "OrtoConecta")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuIcon, {
        onClick: function onClick(e) {
          return _this2.handleMenuOpen(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      })), this.state.showMenu === true && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dropdown, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DropdownContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, "In\xEDcio"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/painel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "Painel OrtoConecta"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/cursos_e_materiais",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, "Cursos e Materiais"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/dicas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, "Dicas"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/especialidades",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, "Especialidades"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, "Contato")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, "In\xEDcio"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/painel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, "Painel OrtoConecta"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/cursos_e_materiais",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, "Cursos e Materiais"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/dicas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, "Dicas"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/especialidades",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, "Especialidades"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, "Contato")))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./src/styles/global.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  * {\n    font-family: 'Poppins', sans-serif;\n    padding: 0;\n    margin: 0;\n    \n    font-size: 13px;\n  }\n\n  body, html {\n    height: 100%;\n    background: #f5f5f5;\n  }\n\n  a, button {\n    cursor: pointer;\n  }\n  \n  .iframe {\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n    -moz-box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n    box-shadow: 0px 3px 5px 0px rgba(184,184,184,1);\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GlobalStyle = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["createGlobalStyle"])(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyle);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/cursosemateriais.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-iframe":
/***/ (function(module, exports) {

module.exports = require("react-iframe");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=cursosemateriais.js.map
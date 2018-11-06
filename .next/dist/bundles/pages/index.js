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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_header__ = __webpack_require__("./src/components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_styles_global__ = __webpack_require__("./src/styles/global.js");
var _jsxFileName = "/home/ubuntu/workspace/layouts/main.js";




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_styles_global__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), props.children));
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_main__ = __webpack_require__("./layouts/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = "/home/ubuntu/workspace/pages/index.js";




var primaryColor = "#ffd32a";
var Hero = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1hta4ma-0"
})(["width:100vw;height:100vh;margin-top:-80px;background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/static/dentist.jpg');background-size:cover;background-repeat:no-repeat;background-position:center center;background-attachment:fixed;display:flex;align-items:center;justify-content:center;text-align:center;"]);
var HeroInner = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "pages__HeroInner",
  componentId: "sc-1hta4ma-1"
})(["background:transparent;color:#d6d6d6;h1{font-size:4em;margin-top:0;margin-bottom:0.5em;background:transparent;}h2{background:transparent;font-size:2em;}a{display:block;width:150px;border:3px solid ", ";padding:1em;margin-top:50px;margin-left:auto;margin-right:auto;color:#fff;text-decoration:none;font-size:1.5em;background:transparent;transition:background 0.3s ease-in-out;&:hover{background:", ";color:#363636;transition:background 0.3s ease-in-out;}}"], primaryColor, primaryColor);

var Home = function Home(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "Ortoconecta")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Hero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(HeroInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, "Conectando a Ortodontia \xE0 toda \xE1rea da sa\xFAde"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, "Navegue pelo nosso site e descubra como!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, "Saiba mais"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, "Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, "Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, "Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker. Lorem Ipsum \xE9 simplesmente uma simula\xE7\xE3o de texto da ind\xFAstria tipogr\xE1fica e de impressos, e vem sendo utilizado desde o s\xE9culo XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu n\xE3o s\xF3 a cinco s\xE9culos, como tamb\xE9m ao salto para a editora\xE7\xE3o eletr\xF4nica, permanecendo essencialmente inalterado. Se popularizou na d\xE9cada de 60, quando a Letraset lan\xE7ou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editora\xE7\xE3o eletr\xF4nica como Aldus PageMaker.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

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



var primaryColor = "#ffd32a";
var Navbar = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "header__Navbar",
  componentId: "sc-1srxfqa-0"
})(["height:80px;display:flex;align-items:center;justify-content:space-around;list-style:none;background:transparent;width:100%;"]);
var Logo = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: "header__Logo",
  componentId: "sc-1srxfqa-1"
})(["background:transparent;a{display:flex;text-decoration:none;color:inherit;justify-content:center;align-items:center;background:transparent;img{width:50px;height:50px;background:transparent;}h2{font-size:2rem;margin-left:16px;color:", ";background:transparent;}}"], primaryColor);
var Menu = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.ul.withConfig({
  displayName: "header__Menu",
  componentId: "sc-1srxfqa-2"
})(["display:flex;background:transparent;list-style:none;color:#303030;li{padding:16px;font-weight:bold;font-size:1.3rem;background:transparent;a{text-decoration:none;color:inherit;text-transform:uppercase;transition:color 0.4s;background:transparent;&:after{display:block;content:'';border-bottom:solid 3px ", ";transform:scaleX(0);transition:transform 250ms ease-in-out;}&:hover{color:", ";transition:color 0.4s;}&:hover:after{transform:scaleX(1);}}"], primaryColor, primaryColor);

var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/dental.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, "OrtoConecta")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, "Home"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, "Quem Somos")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, "Material gratuito")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/especialidades",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, "Especialidades"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, "Contato")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./src/styles/global.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  * {\n    font-family: 'Poppins', sans-serif;\n    padding: 0;\n    margin: 0;\n    \n    font-size: 13px;\n    background: #f5f5f5;\n  }\n\n  body, html {\n    height: 100%;\n  }\n\n  a, button {\n    cursor: pointer;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GlobalStyle = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["createGlobalStyle"])(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyle);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
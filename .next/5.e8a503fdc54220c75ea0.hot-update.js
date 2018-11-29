webpackHotUpdate(5,{

/***/ "./node_modules/react-iframe/index.min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var React=__webpack_require__("./node_modules/react/cjs/react.development.js");var PureComponent=React.PureComponent;var PropTypes=__webpack_require__("./node_modules/prop-types/index.js");var objectAssign=__webpack_require__("./node_modules/object-assign/index.js");function noop(){}var Iframe=function(_PureComponent){_inherits(Iframe,_PureComponent);function Iframe(){_classCallCheck(this,Iframe);return _possibleConstructorReturn(this,(Iframe.__proto__||Object.getPrototypeOf(Iframe)).apply(this,arguments))}_createClass(Iframe,[{key:"render",value:function render(){var props={ref:"iframe",frameBorder:"0",src:this.props.url,target:"_parent",allowFullScreen:this.props.allowFullScreen||false,style:objectAssign({},{position:this.props.position||"absolute",display:this.props.display||"block",height:this.props.height||"100%",width:this.props.width||"100%"},this.props.styles||{}),height:this.props.height||"100%",name:this.props.name||"",width:this.props.width||"100%",onLoad:this.props.onLoad||noop,onMouseOver:this.props.onMouseOver||noop,onMouseOut:this.props.onMouseOut||noop};return React.createElement("iframe",objectAssign(props,this.props.id?{id:this.props.id}:{},this.props.sandbox?{sandbox:this.props.sandbox}:{},this.props.allow?{allow:this.props.allow}:{},this.props.className?{className:this.props.className}:{}))}}]);return Iframe}(PureComponent);Iframe.propTypes={url:PropTypes.string.isRequired,id:PropTypes.string,className:PropTypes.string,width:PropTypes.string,position:PropTypes.string,display:PropTypes.string,name:PropTypes.string,height:PropTypes.string,onLoad:PropTypes.func,sandbox:PropTypes.string,allow:PropTypes.string,onMouseOver:PropTypes.func,onMouseOut:PropTypes.func,styles:PropTypes.object,allowFullScreen:PropTypes.bool};exports.default=Iframe;


/***/ }),

/***/ "./pages/experiencia.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_iframe__ = __webpack_require__("./node_modules/react-iframe/index.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_iframe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_iframe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_main__ = __webpack_require__("./layouts/main.js");

var _jsxFileName = "/home/ubuntu/workspace/pages/experiencia.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }







var ExperienceWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "experiencia__ExperienceWrapper",
  componentId: "ot2w5g-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:50px auto;padding:16px;"]);
var Experience = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "experiencia__Experience",
  componentId: "ot2w5g-1"
})(["margin:35px auto;width:70%;display:flex;justify-content:center;border:1px solid #ccc;border-radius:10px;padding:20px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);transition:0.5s background;"]);

var Experiencia = function Experiencia(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "OrtoConecta | ", props.experience.title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ExperienceWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Experience, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_iframe___default.a, {
    url: "http://www.youtube.com/embed/".concat(props.experience.video_url),
    position: "absolute",
    width: "100%",
    id: "myId",
    className: "myClassname",
    height: "100%",
    styles: {
      height: "25px"
    },
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, experience.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, experience.description, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Leia mais...")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Reactions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(FaRegThumbsUp, {
    style: {
      fontSize: '1.5rem',
      marginTop: '-4px',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), " (4)", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(FaRegCommentAlt, {
    style: {
      fontSize: '1.5rem',
      marginLeft: '10px',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), " (", props.comments.length, ")"))))));
};

Experiencia.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var query, experienceResponse;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/experiences/".concat(query.id));

          case 3:
            experienceResponse = _context.sent;
            return _context.abrupt("return", {
              experience: experienceResponse.data //comment: commentResponse.data

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

var _default = Experiencia;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ExperienceWrapper, "ExperienceWrapper", "/home/ubuntu/workspace/pages/experiencia.js");
  reactHotLoader.register(Experience, "Experience", "/home/ubuntu/workspace/pages/experiencia.js");
  reactHotLoader.register(Experiencia, "Experiencia", "/home/ubuntu/workspace/pages/experiencia.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/pages/experiencia.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/experiencia")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.e8a503fdc54220c75ea0.hot-update.js.map
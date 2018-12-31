webpackHotUpdate("static/development/pages/experiencias.js",{

/***/ "./node_modules/react-iframe/index.min.js":
/*!************************************************!*\
  !*** ./node_modules/react-iframe/index.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var React=__webpack_require__(/*! react */ "./node_modules/react/index.js");var PureComponent=React.PureComponent;var PropTypes=__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");var objectAssign=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");function noop(){}var Iframe=function(_PureComponent){_inherits(Iframe,_PureComponent);function Iframe(){_classCallCheck(this,Iframe);return _possibleConstructorReturn(this,(Iframe.__proto__||Object.getPrototypeOf(Iframe)).apply(this,arguments))}_createClass(Iframe,[{key:"render",value:function render(){var props={ref:"iframe",frameBorder:"0",src:this.props.url,target:"_parent",allowFullScreen:this.props.allowFullScreen||false,style:objectAssign({},{position:this.props.position||"absolute",display:this.props.display||"block",height:this.props.height||"100%",width:this.props.width||"100%"},this.props.styles||{}),height:this.props.height||"100%",name:this.props.name||"",width:this.props.width||"100%",onLoad:this.props.onLoad||noop,onMouseOver:this.props.onMouseOver||noop,onMouseOut:this.props.onMouseOut||noop};return React.createElement("iframe",objectAssign(props,this.props.id?{id:this.props.id}:{},this.props.sandbox?{sandbox:this.props.sandbox}:{},this.props.allow?{allow:this.props.allow}:{},this.props.className?{className:this.props.className}:{}))}}]);return Iframe}(PureComponent);Iframe.propTypes={url:PropTypes.string.isRequired,id:PropTypes.string,className:PropTypes.string,width:PropTypes.string,position:PropTypes.string,display:PropTypes.string,name:PropTypes.string,height:PropTypes.string,onLoad:PropTypes.func,sandbox:PropTypes.string,allow:PropTypes.string,onMouseOver:PropTypes.func,onMouseOut:PropTypes.func,styles:PropTypes.object,allowFullScreen:PropTypes.bool};exports.default=Iframe;


/***/ }),

/***/ "./pages/experiencias.js":
/*!*******************************!*\
  !*** ./pages/experiencias.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-iframe */ "./node_modules/react-iframe/index.min.js");
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var primaryColor = "#ffd32a";
var ExperiencesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "experiencias__ExperiencesWrapper",
  componentId: "bx0hxx-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:50px auto;padding:16px;max-width:1366px;h2{font-size:3rem;text-align:center;}"]);
var IframeContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "experiencias__IframeContainer",
  componentId: "bx0hxx-1"
})(["width:60%;display:flex;flex-direction:column;align-items:center;justify-content:center;@media(max-width:980px){width:100%;}"]);
var Experience = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "experiencias__Experience",
  componentId: "bx0hxx-2"
})(["margin:35px auto;width:95%;display:flex;justify-content:center;border:1px solid #ccc;border-radius:10px;padding:20px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);transition:0.5s background;img{width:40%;height:35%;@media (max-width:980px){width:60%;height:60%;}}div{margin-left:16px;height:100%;margin-top:10px;h1{font-size:1.3rem;text-align:center;}p{margin-top:10px;text-align:justify;span{margin-left:20px;}}span{font-weight:bold;}}@media (max-width:980px){width:90%;display:flex;flex-direction:column;justify-content:center;align-items:center;}&:hover{-webkit-box-shadow:1px 3px 5px 0px #f6e58d;-moz-box-shadow:1px 3px 5px 0px #f6e58d;box-shadow:1px 3px 5px 0px #f6e58d;border:1px solid ", ";cursor:pointer;background:", ";transition:0.5s background;}"], primaryColor, primaryColor);
var Reactions = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "experiencias__Reactions",
  componentId: "bx0hxx-3"
})(["display:flex;justify-content:flex-end;align-items:center;padding:10px;"]);

var Experiencias = function Experiencias(props) {
  var sorted = props.experiences.sort(function (a, b) {
    return a.publishedAt > b.publishedAt ? 1 : b.publishedAt > a.publishedAt ? -1 : 0;
  }).reverse();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "OrtoConecta | Experi\xEAncias")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExperiencesWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Compartilhando Experi\xEAncias OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IframeContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/saiba-mais.png"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_iframe__WEBPACK_IMPORTED_MODULE_6___default.a, {
    url: "https://www.youtube.com/embed/wSRpbzust_w",
    width: "100%",
    height: "380px",
    display: "initial",
    position: "relative",
    className: "iframe",
    styles: {
      marginTop: '15px'
    },
    allowFullScreen: true
  })), sorted.map(function (experience) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: experience.id,
      href: "/experiencias/".concat(experience.id),
      prefetch: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Experience, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(experience.thumbnail.url),
      alt: experience.title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, experience.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, experience.description, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Leia mais...")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Reactions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaRegCommentAlt"], {
      style: {
        fontSize: '1.5rem',
        marginLeft: '10px',
        padding: '10px'
      }
    }), " (", experience.comments.length, ")")))));
  })));
};

Experiencias.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var experiencesResponse;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/experiences");

        case 2:
          experiencesResponse = _context.sent;
          return _context.abrupt("return", {
            experiences: experiencesResponse.data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Experiencias);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/experiencias")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=experiencias.js.c804d31a2e565f24a361.hot-update.js.map
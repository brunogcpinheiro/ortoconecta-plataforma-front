webpackHotUpdate("static/development/pages/dicas.js",{

/***/ "./pages/dicas.js":
/*!************************!*\
  !*** ./pages/dicas.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-iframe */ "./node_modules/react-iframe/index.min.js");
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_iframe__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dayjs/locale/pt-br */ "./node_modules/dayjs/locale/pt-br.js");
/* harmony import */ var dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_pt_br__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












dayjs__WEBPACK_IMPORTED_MODULE_9___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_10___default.a);

var primaryColor = "#FFD32A";
var TipsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "dicas__TipsWrapper",
  componentId: "sc-1tsbltd-0"
})(["width:100%;height:100%;background-image:url('/static/Imagem3.png');background-attachment:fixed;background-position:top center;background-size:100px;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-wrap:wrap;margin-top:7px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "dicas__Title",
  componentId: "sc-1tsbltd-1"
})(["width:50%;background:transparent;display:flex;flex-direction:column;align-items:center;h1{width:fit-content;text-align:center;font-size:3rem;background:#fff;}p{border:3px solid ", ";text-align:center;padding:16px;font-size:1.5rem;color:royalblue;background:#f5f5f5;}"], primaryColor);
var TipContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "dicas__TipContainer",
  componentId: "sc-1tsbltd-2"
})(["width:90%;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;@media(max-width:960px){width:100%;}"]);
var TipWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "dicas__TipWrapper",
  componentId: "sc-1tsbltd-3"
})(["width:30%;height:400px;margin:20px;display:flex;flex-direction:column;align-itens:center;justify-content:space-around;background:#f5f5f5;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);h2{text-align:center;font-size:1.5rem;}"]);
var VideoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "dicas__VideoWrapper",
  componentId: "sc-1tsbltd-4"
})(["width:100%;height:300px;"]);
var CommentsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "dicas__CommentsWrapper",
  componentId: "sc-1tsbltd-5"
})(["width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;background:#f5f5f5;"]);
var Comment = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "dicas__Comment",
  componentId: "sc-1tsbltd-6"
})(["display:flex;flex-direction:column;justify-content:space-evenly;border:1px solid #ccc;border-radius:10px;padding:20px;margin:15px;background:#f5f5f5;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);transition:0.5s background;width:120%;height:100%;margin-top:20px;div{padding:10px;h3{font-size:1.3rem;color:", ";margin-bottom:5px;}h4{color:#999;font-size:0.9rem;margin-bottom:5px;}small{font-style:italic;font-size:0.8rem;margin-bottom:5px;}p{margin-top:20px;font-size:1.1rem;}}"], primaryColor);
var NewComment = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "dicas__NewComment",
  componentId: "sc-1tsbltd-7"
})(["width:100%;display:flex;flex-direction:column;border:1px solid #ccc;border-radius:10px;padding:20px;margin-bottom:20px;background:#f5f5f5;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);form{display:flex;flex-direction:column;padding:16px 0;input{margin:10px;padding:10px;}textarea{margin-top:10px;padding:10px;}}"]);
var CommentBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "dicas__CommentBtn",
  componentId: "sc-1tsbltd-8"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";&:visited,&:active,&:link{color:inherit;}"], primaryColor, primaryColor);

var Dicas =
/*#__PURE__*/
function (_Component) {
  _inherits(Dicas, _Component);

  function Dicas() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dicas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dicas)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      author: '',
      author_email: '',
      body: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var newComment;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                newComment = {
                  author: _this.state.author,
                  author_email: _this.state.author_email,
                  date: dayjs__WEBPACK_IMPORTED_MODULE_9___default()().format(),
                  body: _this.state.body
                };

                if (!(_this.state.author && _this.state.author_email && _this.state.body)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/tipsComments", newComment).then(_this.setState({
                  author: '',
                  author_email: '',
                  body: ''
                })).then(sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                  type: 'success',
                  title: 'Comentário adicionado com sucesso!'
                })).catch(function () {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                    type: 'error',
                    title: 'Algo errado com a requisição. Tente novamente!'
                  });
                });

              case 5:
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.replace("http://ortoconecta-plataforma-front-brunogcpinheiro.c9users.io:8080/dicas");
                _context.next = 9;
                break;

              case 8:
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
                  type: 'error',
                  title: 'Preencha todos os dados!'
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(Dicas, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var sorted = this.props.comments.sort(function (a, b) {
        return a.date > b.date ? 1 : b.date > a.date ? -1 : 0;
      }).reverse();
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "OrtoConecta | Dicas cl\xEDnicas")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TipsWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Dicas OrtoConecta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Uma \xE1rea destinada \xE0 pr\xE1tica e conceitos modernos para voc\xEA utilizar no dia a dia do seu consult\xF3rio. Todo conhecimento agregado gera valor e faz com que voc\xEA transmita a seguran\xE7a necess\xE1ria para cativar o seu paciente. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "Navegue neste espa\xE7o e deixe seu coment\xE1rio.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TipContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animated_css__WEBPACK_IMPORTED_MODULE_3__["Animated"], null, this.props.tips.map(function (tip) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TipWrapper, {
          key: tip.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_iframe__WEBPACK_IMPORTED_MODULE_7___default.a, {
          url: "https://www.youtube.com/embed/".concat(tip.video_url),
          position: "relative",
          width: "100%",
          height: "100%",
          display: "initial",
          className: "iframe",
          allowFullScreen: true
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, tip.title));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CommentsWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewComment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Novo Coment\xE1rio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        placeholder: "Nome...",
        onChange: function onChange(e) {
          return _this2.setState({
            author: e.target.value
          });
        },
        value: this.state.author
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "email",
        placeholder: "Email...",
        onChange: function onChange(e) {
          return _this2.setState({
            author_email: e.target.value
          });
        },
        value: this.state.author_email
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        rows: "5",
        placeholder: "Coment\xE1rio...",
        onChange: function onChange(e) {
          return _this2.setState({
            body: e.target.value
          });
        },
        value: this.state.body
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CommentBtn, {
        type: "submit"
      }, "Comentar"))), sorted.map(function (comment) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comment, {
          key: comment.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, comment.author), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, comment.author_email), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, (dayjs__WEBPACK_IMPORTED_MODULE_9___default.a.locale('pt-br'), dayjs__WEBPACK_IMPORTED_MODULE_9___default()(comment.date).fromNow())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, comment.body)));
      })))));
    }
  }]);

  return Dicas;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Dicas.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var tipsResponse, commentsResponse;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://ortoconecta-plataforma-brunogcpinheiro.c9users.io/tips");

        case 2:
          tipsResponse = _context2.sent;
          _context2.next = 5;
          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://ortoconecta-plataforma-brunogcpinheiro.c9users.io/tipsComments");

        case 5:
          commentsResponse = _context2.sent;
          return _context2.abrupt("return", {
            tips: tipsResponse.data,
            comments: commentsResponse.data
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Dicas);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dicas")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=dicas.js.1313bb82586ec0212cc4.hot-update.js.map
webpackHotUpdate(7,{

/***/ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__("./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);







var isIE = !!document.documentElement.currentStyle;
var HIDDEN_TEXTAREA_STYLE = {
  'min-height': '0',
  'max-height': 'none',
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0'
};
var SIZING_STYLE = ['letter-spacing', 'line-height', 'font-family', 'font-weight', 'font-size', 'font-style', 'tab-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'box-sizing'];
var computedStyleCache = {};
var hiddenTextarea = document.createElement('textarea');

var forceHiddenStyles = function forceHiddenStyles(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
  });
};

{
  forceHiddenStyles(hiddenTextarea);
}

function calculateNodeHeight(uiTextNode, uid, useCache, minRows, maxRows) {
  if (useCache === void 0) {
    useCache = false;
  }

  if (minRows === void 0) {
    minRows = null;
  }

  if (maxRows === void 0) {
    maxRows = null;
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  } // Copy all CSS properties that have an impact on the height of the content in
  // the textbox


  var nodeStyling = calculateNodeStyling(uiTextNode, uid, useCache);

  if (nodeStyling === null) {
    return null;
  }

  var paddingSize = nodeStyling.paddingSize,
      borderSize = nodeStyling.borderSize,
      boxSizing = nodeStyling.boxSizing,
      sizingStyle = nodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content

  Object.keys(sizingStyle).forEach(function (key) {
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles(hiddenTextarea);
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || 'x';
  var minHeight = -Infinity;
  var maxHeight = Infinity;
  var height = hiddenTextarea.scrollHeight;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height = height - paddingSize;
  } // measure height of a textarea with a single row


  hiddenTextarea.value = 'x';
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize; // Stores the value's rows count rendered in `hiddenTextarea`,
  // regardless if `maxRows` or `minRows` props are passed

  var valueRowCount = Math.floor(height / singleRowHeight);

  if (minRows !== null) {
    minHeight = singleRowHeight * minRows;

    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }

    height = Math.max(minHeight, height);
  }

  if (maxRows !== null) {
    maxHeight = singleRowHeight * maxRows;

    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }

    height = Math.min(maxHeight, height);
  }

  var rowCount = Math.floor(height / singleRowHeight);
  return {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    rowCount: rowCount,
    valueRowCount: valueRowCount
  };
}

function calculateNodeStyling(node, uid, useCache) {
  if (useCache === void 0) {
    useCache = false;
  }

  if (useCache && computedStyleCache[uid]) {
    return computedStyleCache[uid];
  }

  var style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  var sizingStyle = SIZING_STYLE.reduce(function (obj, name) {
    obj[name] = style.getPropertyValue(name);
    return obj;
  }, {});
  var boxSizing = sizingStyle['box-sizing']; // probably node is detached from DOM, can't read computed dimensions

  if (boxSizing === '') {
    return null;
  } // IE (Edge has already correct behaviour) returns content width as computed width
  // so we need to add manually padding and border widths


  if (isIE && boxSizing === 'border-box') {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(style['border-right-width']) + parseFloat(style['border-left-width']) + parseFloat(style['padding-right']) + parseFloat(style['padding-left']) + 'px';
  }

  var paddingSize = parseFloat(sizingStyle['padding-bottom']) + parseFloat(sizingStyle['padding-top']);
  var borderSize = parseFloat(sizingStyle['border-bottom-width']) + parseFloat(sizingStyle['border-top-width']);
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };

  if (useCache) {
    computedStyleCache[uid] = nodeInfo;
  }

  return nodeInfo;
}

var purgeCache = function purgeCache(uid) {
  delete computedStyleCache[uid];
};

var noop = function noop() {};

var uid = 0;

var TextareaAutosize =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(TextareaAutosize, _React$Component);

  function TextareaAutosize(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this._onRef = function (node) {
      _this._ref = node;

      _this.props.inputRef(node);
    };

    _this._onChange = function (event) {
      if (!_this._controlled) {
        _this._resizeComponent();
      }

      _this.props.onChange(event, Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    };

    _this._resizeComponent = function (callback) {
      if (callback === void 0) {
        callback = noop;
      }

      var nodeHeight = calculateNodeHeight(_this._ref, _this._uid, _this.props.useCacheForDOMMeasurements, _this.props.minRows, _this.props.maxRows);

      if (nodeHeight === null) {
        callback();
        return;
      }

      var height = nodeHeight.height,
          minHeight = nodeHeight.minHeight,
          maxHeight = nodeHeight.maxHeight,
          rowCount = nodeHeight.rowCount,
          valueRowCount = nodeHeight.valueRowCount;
      _this.rowCount = rowCount;
      _this.valueRowCount = valueRowCount;

      if (_this.state.height !== height || _this.state.minHeight !== minHeight || _this.state.maxHeight !== maxHeight) {
        _this.setState({
          height: height,
          minHeight: minHeight,
          maxHeight: maxHeight
        }, callback);

        return;
      }

      callback();
    };

    _this.state = {
      height: props.style && props.style.height || 0,
      minHeight: -Infinity,
      maxHeight: Infinity
    };
    _this._uid = uid++;
    _this._controlled = props.value !== undefined;
    _this._resizeLock = false;
    return _this;
  }

  var _proto = TextareaAutosize.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _inputRef = _this$props.inputRef,
        _maxRows = _this$props.maxRows,
        _minRows = _this$props.minRows,
        _onHeightChange = _this$props.onHeightChange,
        _useCacheForDOMMeasurements = _this$props.useCacheForDOMMeasurements,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["inputRef", "maxRows", "minRows", "onHeightChange", "useCacheForDOMMeasurements"]);

    props.style = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props.style, {
      height: this.state.height
    });
    var maxHeight = Math.max(props.style.maxHeight || Infinity, this.state.maxHeight);

    if (maxHeight < this.state.height) {
      props.style.overflow = 'hidden';
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("textarea", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
      onChange: this._onChange,
      ref: this._onRef
    }));
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._resizeComponent(); // Working around Firefox bug which runs resize listeners even when other JS is running at the same moment
    // causing competing rerenders (due to setState in the listener) in React.
    // More can be found here - facebook/react#6324


    this._resizeListener = function () {
      if (_this2._resizeLock) {
        return;
      }

      _this2._resizeLock = true;

      _this2._resizeComponent(function () {
        _this2._resizeLock = false;
      });
    };

    window.addEventListener('resize', this._resizeListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this._resizeComponent();
    }

    if (this.state.height !== prevState.height) {
      this.props.onHeightChange(this.state.height, this);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this._resizeListener);
    purgeCache(this._uid);
  };

  return TextareaAutosize;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

TextareaAutosize.defaultProps = {
  inputRef: noop,
  onChange: noop,
  onHeightChange: noop,
  useCacheForDOMMeasurements: false
};
 true ? TextareaAutosize.propTypes = {
  inputRef: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  maxRows: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  minRows: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
  onChange: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onHeightChange: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  style: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  useCacheForDOMMeasurements: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  value: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
} : void 0;

/* harmony default export */ __webpack_exports__["a"] = (TextareaAutosize);


/***/ }),

/***/ "./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/extends.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inheritsLoose;
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/react-textarea-autosize/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./pages/especialidade.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_main__ = __webpack_require__("./layouts/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_fa__ = __webpack_require__("./node_modules/react-icons/fa/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_icons_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_icons_fa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_textarea_autosize__ = __webpack_require__("./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");

var _jsxFileName = "/home/ubuntu/workspace/pages/especialidade.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }










var primaryColor = "#ffd32a";
var SpecialityWrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].div.withConfig({
  displayName: "especialidade__SpecialityWrapper",
  componentId: "sc-1oavti5-0"
})(["max-width:80%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;margin:50px auto;background:#fff;border:1px solid #ccc;border-radius:10px;-webkit-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);-moz-box-shadow:0px 3px 5px 0px rgba(184,184,184,1);box-shadow:0px 3px 5px 0px rgba(184,184,184,1);h2,h3{background:#fff;}h2{font-size:1.3rem;padding:16px 0;color:#636e72;text-weight:bold;}h3{color:#7f8c8d;font-style:italic;}"]);
var Title = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].h1.withConfig({
  displayName: "especialidade__Title",
  componentId: "sc-1oavti5-1"
})(["color:inherit;font-size:2.2rem;font-weight:bold;transition:color 0.2s;background:#fff;text-align:center;margin-top:16px;padding:16px;&:hover{color:#000;transition:color 0.2s;}"]);
var Img = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].img.withConfig({
  displayName: "especialidade__Img",
  componentId: "sc-1oavti5-2"
})(["width:150px;height:150px;object-fit:cover;object-position:top;border-radius:50%;border:2px solid ", ";margin-top:16px;"], primaryColor);
var Article = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].textarea.withConfig({
  displayName: "especialidade__Article",
  componentId: "sc-1oavti5-3"
})(["margin:26px;background:transparent;text-align:justify;font-size:1.3rem;border:none;width:90%;height:99%;overflow:hidden;resize:none;"]);
var Download = __WEBPACK_IMPORTED_MODULE_2_styled_components__["c" /* default */].a.withConfig({
  displayName: "especialidade__Download",
  componentId: "sc-1oavti5-4"
})(["display:flex;justify-content:center;align-items:center;padding:1em;margin-top:16px;font-weight:bold;text-decoration:none;font-size:1.1em;text-transform:uppercase;background:", ";border:2px solid ", ";&:visited,&:active,&:link{color:inherit;}"], primaryColor, primaryColor);

var Especialidade = function Especialidade(props) {
  var _props$speciality = props.speciality,
      title = _props$speciality.title,
      author = _props$speciality.author,
      speciality = _props$speciality.speciality,
      publishedAt = _props$speciality.publishedAt,
      author_avatar = _props$speciality.author_avatar,
      material = _props$speciality.material,
      article = _props$speciality.article;
  var formattedArticle = article.replace(/'\n'/g, "' + <br /> + '");
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, "Orto Conecta | ", props.speciality.title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts_main__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SpecialityWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Img, {
    src: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(author_avatar.url),
    alt: author,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, author, " (", speciality, ")"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, "Publicado em ", (__WEBPACK_IMPORTED_MODULE_5_moment___default.a.locale('pt-br'), __WEBPACK_IMPORTED_MODULE_5_moment___default()(publishedAt).format("LL"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Download, {
    href: "http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080".concat(material.url),
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_icons_fa__["FaDownload"], {
    style: {
      background: 'transparent',
      fontSize: '1.2rem',
      marginRight: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }), " Baixar Material"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_textarea_autosize__["a" /* default */], {
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, formattedArticle))));
};

Especialidade.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var query, response;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("http://ortoconecta-plataforma-brunogcpinheiro.c9users.io:8080/specialities/".concat(query.id));

          case 3:
            response = _context.sent;
            return _context.abrupt("return", {
              speciality: response.data
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

var _default = Especialidade;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(primaryColor, "primaryColor", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(SpecialityWrapper, "SpecialityWrapper", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(Title, "Title", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(Img, "Img", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(Article, "Article", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(Download, "Download", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(Especialidade, "Especialidade", "/home/ubuntu/workspace/pages/especialidade.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/pages/especialidade.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/especialidade")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.d01d4e1f6ea4b5bd6dcf.hot-update.js.map
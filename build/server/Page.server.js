(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./web/components/layout/App.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/dist??ref--1-0!./web/components/layout/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 在这里可以进行一些全局组件的注册逻辑
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./web/pages/index/render.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/dist??ref--1-0!./web/pages/index/render.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vant_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vant/lib/button/style */ "./node_modules/vant/lib/button/style/index.js");
/* harmony import */ var vant_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vant_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vant_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vant/lib/button */ "vant/lib/button");
/* harmony import */ var vant_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vant_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);


 // import { mapState } from 'vuex'

/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_2__["defineComponent"])({
  components: {
    Button: vant_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  created: function created() {}
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./web/components/layout/App.vue?vue&type=template&id=185cf71c":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--1-0!./web/components/layout/App.vue?vue&type=template&id=185cf71c ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: ssrRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrRender", function() { return ssrRender; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/server-renderer */ "@vue/server-renderer");
/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__);


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _component_router_view = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("router-view");

  _push(Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__["ssrRenderComponent"])(_component_router_view, _attrs, null, _parent));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./web/components/layout/index.vue?vue&type=template&id=9a12cea6":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--1-0!./web/components/layout/index.vue?vue&type=template&id=9a12cea6 ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: ssrRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrRender", function() { return ssrRender; });
/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/server-renderer */ "@vue/server-renderer");
/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__);

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push("<!--[--><!-- \u6CE8\uFF1ALayout \u53EA\u4F1A\u5728\u670D\u52A1\u7AEF\u88AB\u6E32\u67D3\uFF0C\u4E0D\u8981\u5728\u6B64\u8FD0\u884C\u5BA2\u6237\u7AEF\u6709\u5173\u903B\u8F91 --><!-- \u9875\u9762\u521D\u59CB\u5316\u6570\u636E\u6CE8\u5165\u5185\u5BB9\u5DF2\u7ECF\u8FC7 serialize-javascript \u8F6C\u4E49 \u9632\u6B62 xss --><html".concat(Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__["ssrRenderAttrs"])(_attrs), "><head><meta charSet=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=\"theme-color\" content=\"#000000\"><title>95598</title>"));

  Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__["ssrRenderSlot"])(_ctx.$slots, "viteClient", {}, null, _push, _parent);

  _push("<!-- \u7528\u4E8E\u901A\u8FC7\u914D\u7F6E\u63D2\u5165\u81EA\u5B9A\u4E49\u7684 script \u4E3A\u4E86\u907F\u514D\u5F71\u54CD\u671F\u671B\u529F\u80FD\u8FD9\u5757\u5185\u5BB9\u4E0D\u505A escape\uFF0C\u4E3A\u4E86\u907F\u514D xss \u9700\u8981\u4FDD\u8BC1\u63D2\u5165\u811A\u672C\u4EE3\u7801\u7684\u5B89\u5168\u6027  -->");

  Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__["ssrRenderSlot"])(_ctx.$slots, "customeHeadScript", {}, null, _push, _parent);

  Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__["ssrRenderSlot"])(_ctx.$slots, "cssInject", {}, null, _push, _parent);

  _push("</head><body><div id=\"app\">");

  Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__["ssrRenderSlot"])(_ctx.$slots, "children", {}, null, _push, _parent);

  _push("</div>");

  Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__["ssrRenderSlot"])(_ctx.$slots, "initialData", {}, null, _push, _parent);

  Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__["ssrRenderSlot"])(_ctx.$slots, "jsInject", {}, null, _push, _parent);

  _push("</body></html><!--]-->");
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./web/pages/index/render.vue?vue&type=template&id=6781c9f2":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--1-0!./web/pages/index/render.vue?vue&type=template&id=6781c9f2 ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: ssrRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrRender", function() { return ssrRender; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/server-renderer */ "@vue/server-renderer");
/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__);


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _component_Button = Object(vue__WEBPACK_IMPORTED_MODULE_0__["resolveComponent"])("Button");

  _push("<div".concat(Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__["ssrRenderAttrs"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__["mergeProps"])({
    "class": "container"
  }, _attrs)), ">"));

  _push(Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__["ssrRenderComponent"])(_component_Button, {
    type: "primary",
    block: ""
  }, {
    "default": Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function (_, _push, _parent, _scopeId) {
      if (_push) {
        _push(" button ");
      } else {
        return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])(" button ")];
      }
    }),
    _: 1
    /* STABLE */

  }, _parent));

  _push("</div>");
}

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./web/components/layout/index.vue?vue&type=style&index=0&id=9a12cea6&lang=less":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader??ref--5-2!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/dist??ref--1-0!./web/components/layout/index.vue?vue&type=style&index=0&id=9a12cea6&lang=less ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-hot-loader!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader??ref--5-2!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src??postcss!./node_modules/less-loader/dist/cjs.js??ref--5-4!./node_modules/vue-loader/dist??ref--1-0!./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/ssr-plugin-vue3/cjs/entry/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/ssr-plugin-vue3/cjs/entry/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = exports.createRouter = void 0;

var vue_router_1 = __webpack_require__(/*! vue-router */ "vue-router");

var vuex_1 = __webpack_require__(/*! vuex */ "vuex"); // @ts-expect-error


var Routes = __webpack_require__(/*! ssr-temporary-routes */ "./node_modules/ssr-temporary-routes/route.js");

var store = Routes.store,
    FeRoutes = Routes.FeRoutes;

function createRouter() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _a;

  var base = (_a = options.base) !== null && _a !== void 0 ? _a : '/';
  return vue_router_1.createRouter({
    history:  false ? undefined : vue_router_1.createMemoryHistory(),
    // @ts-expect-error
    routes: FeRoutes
  });
}

exports.createRouter = createRouter;

function createStore() {
  return vuex_1.createStore(store !== null && store !== void 0 ? store : {});
}

exports.createStore = createStore;

/***/ }),

/***/ "./node_modules/ssr-plugin-vue3/cjs/entry/server-entry.js":
/*!****************************************************************!*\
  !*** ./node_modules/ssr-plugin-vue3/cjs/entry/server-entry.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var vue_1 = __webpack_require__(/*! vue */ "vue");

var ssr_server_utils_1 = __webpack_require__(/*! ssr-server-utils */ "ssr-server-utils");

var serialize = __webpack_require__(/*! serialize-javascript */ "serialize-javascript"); // @ts-expect-error


var Routes = __webpack_require__(/*! ssr-temporary-routes */ "./node_modules/ssr-temporary-routes/route.js");

var create_1 = __webpack_require__(/*! ./create */ "./node_modules/ssr-plugin-vue3/cjs/entry/create.js");

var FeRoutes = Routes.FeRoutes,
    App = Routes.App,
    layoutFetch = Routes.layoutFetch,
    Layout = Routes.Layout,
    BASE_NAME = Routes.BASE_NAME;

var serverRender = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ctx, config) {
    var _a, _b, _c, _d, router, path, store, cssOrder, jsOrder, dynamic, mode, _customeHeadScript, chunkName, routeItem, ViteMode, dynamicCssOrder, manifest, isCsr, fetch, layoutFetchData, fetchData, combineAysncData, asyncData, injectCss, injectScript, state, app;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            global.window = (_a = global.window) !== null && _a !== void 0 ? _a : {}; // 防止覆盖上层应用自己定义的 window 对象

            global.__VUE_PROD_DEVTOOLS__ = (_b = global.__VUE_PROD_DEVTOOLS__) !== null && _b !== void 0 ? _b : false;
            router = create_1.createRouter();
            path = ctx.request.path; // 这里取 pathname 不能够包含 queyString

            if (BASE_NAME) {
              path = ssr_server_utils_1.normalizePath(path);
            }

            store = create_1.createStore();
            cssOrder = config.cssOrder, jsOrder = config.jsOrder, dynamic = config.dynamic, mode = config.mode, _customeHeadScript = config.customeHeadScript, chunkName = config.chunkName;
            routeItem = ssr_server_utils_1.findRoute(FeRoutes, path);
            ViteMode = process.env.BUILD_TOOL === 'vite';

            if (routeItem) {
              _context.next = 11;
              break;
            }

            throw new Error("\n    \u67E5\u627E\u7EC4\u4EF6\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4\u5F53\u524D path: ".concat(path, " \u5BF9\u5E94\u524D\u7AEF\u7EC4\u4EF6\u662F\u5426\u5B58\u5728\n    \u82E5\u521B\u5EFA\u4E86\u65B0\u7684\u9875\u9762\u6587\u4EF6\u5939\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C npm start \u91CD\u542F\u670D\u52A1\n    "));

          case 11:
            dynamicCssOrder = cssOrder;

            if (!(dynamic && !ViteMode)) {
              _context.next = 17;
              break;
            }

            dynamicCssOrder = cssOrder.concat(["".concat(routeItem.webpackChunkName, ".css")]);
            _context.next = 16;
            return ssr_server_utils_1.addAsyncChunk(dynamicCssOrder, routeItem.webpackChunkName);

          case 16:
            dynamicCssOrder = _context.sent;

          case 17:
            if (!ViteMode) {
              _context.next = 21;
              break;
            }

            _context.t0 = {};
            _context.next = 24;
            break;

          case 21:
            _context.next = 23;
            return ssr_server_utils_1.getManifest();

          case 23:
            _context.t0 = _context.sent;

          case 24:
            manifest = _context.t0;
            isCsr = !!(mode === 'csr' || ((_c = ctx.request.query) === null || _c === void 0 ? void 0 : _c.csr));

            if (isCsr) {
              ssr_server_utils_1.logGreen("Current path ".concat(path, " use csr render mode"));
            }

            fetch = routeItem.fetch;
            router.push(path);
            _context.next = 31;
            return router.isReady();

          case 31:
            layoutFetchData = {};
            fetchData = {};

            if (isCsr) {
              _context.next = 42;
              break;
            }

            if (!layoutFetch) {
              _context.next = 38;
              break;
            }

            _context.next = 37;
            return layoutFetch({
              store: store,
              router: router.currentRoute.value
            }, ctx);

          case 37:
            layoutFetchData = _context.sent;

          case 38:
            if (!fetch) {
              _context.next = 42;
              break;
            }

            _context.next = 41;
            return fetch({
              store: store,
              router: router.currentRoute.value
            }, ctx);

          case 41:
            fetchData = _context.sent;

          case 42:
            combineAysncData = Object.assign({}, layoutFetchData !== null && layoutFetchData !== void 0 ? layoutFetchData : {}, fetchData !== null && fetchData !== void 0 ? fetchData : {});
            asyncData = {
              value: combineAysncData
            };
            injectCss = [];

            if (ViteMode) {
              injectCss.push(vue_1.h('link', {
                rel: 'stylesheet',
                href: "/server/static/css/".concat(chunkName, ".css")
              }));
            } else {
              dynamicCssOrder.forEach(function (css) {
                if (manifest[css]) {
                  injectCss.push(vue_1.h('link', {
                    rel: 'stylesheet',
                    href: manifest[css]
                  }));
                }
              });
            }

            injectScript = ViteMode ? vue_1.h('script', {
              type: 'module',
              src: '/node_modules/ssr-plugin-vue3/esm/entry/client-entry.js'
            }) : jsOrder.map(function (js) {
              return vue_1.h('script', {
                src: manifest[js]
              });
            });
            state = Object.assign({}, (_d = store.state) !== null && _d !== void 0 ? _d : {}, asyncData.value);
            app = vue_1.createSSRApp({
              render: function render() {
                return vue_1.h(Layout, {
                  ctx: ctx,
                  config: config,
                  asyncData: asyncData,
                  fetchData: layoutFetchData
                }, {
                  remInitial: function remInitial() {
                    return vue_1.h('script', {
                      innerHTML: "var w = document.documentElement.clientWidth / 3.75;document.getElementsByTagName('html')[0].style['font-size'] = w + 'px'"
                    });
                  },
                  viteClient: ViteMode ? function () {
                    return vue_1.h('script', {
                      type: 'module',
                      src: '/@vite/client'
                    });
                  } : null,
                  customeHeadScript: function customeHeadScript() {
                    return _customeHeadScript === null || _customeHeadScript === void 0 ? void 0 : _customeHeadScript.map(function (item) {
                      return vue_1.h('script', Object.assign({}, item.describe, {
                        innerHTML: item.content
                      }));
                    });
                  },
                  children: isCsr ? function () {
                    return vue_1.h('div', {
                      id: 'app'
                    });
                  } : function () {
                    return vue_1.h(App, {
                      asyncData: asyncData,
                      fetchData: combineAysncData
                    });
                  },
                  initialData: !isCsr ? function () {
                    return vue_1.h('script', {
                      innerHTML: "window.__USE_SSR__=true; window.__INITIAL_DATA__ =".concat(serialize(state), ";window.__USE_VITE__=").concat(ViteMode)
                    });
                  } : function () {
                    return vue_1.h('script', {
                      innerHTML: "window.__USE_VITE__=".concat(ViteMode)
                    });
                  },
                  cssInject: function cssInject() {
                    return injectCss;
                  },
                  jsInject: function jsInject() {
                    return injectScript;
                  }
                });
              }
            });
            app.use(router);
            app.use(store);
            _context.next = 53;
            return router.isReady();

          case 53:
            window.__VUE_APP__ = app;
            return _context.abrupt("return", app);

          case 55:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function serverRender(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = serverRender;

/***/ }),

/***/ "./node_modules/ssr-temporary-routes/route.js":
/*!****************************************************!*\
  !*** ./node_modules/ssr-temporary-routes/route.js ***!
  \****************************************************/
/*! exports provided: FeRoutes, Layout, App, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeRoutes", function() { return FeRoutes; });
/* harmony import */ var _store_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/index.ts */ "./web/store/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store_index_ts__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _components_layout_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/index.vue */ "./web/components/layout/index.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _components_layout_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_layout_App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/App.vue */ "./web/components/layout/App.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _components_layout_App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; });


var FeRoutes = [{
  "fetch":  false ? undefined : __webpack_require__(/*! @/pages/index/fetch.ts */ "./web/pages/index/fetch.ts")["default"],
  "path": "/",
  "component":  false ? undefined : __webpack_require__(/*! @/pages/index/render.vue */ "./web/pages/index/render.vue")["default"],
  "webpackChunkName": "index"
}];




/***/ }),

/***/ "./node_modules/vant/lib/badge/index.css":
/*!***********************************************!*\
  !*** ./node_modules/vant/lib/badge/index.css ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/vant/lib/button/index.css":
/*!************************************************!*\
  !*** ./node_modules/vant/lib/button/index.css ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/vant/lib/button/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/lib/button/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/base.css */ "./node_modules/vant/lib/style/base.css");

__webpack_require__(/*! ../../badge/index.css */ "./node_modules/vant/lib/badge/index.css");

__webpack_require__(/*! ../../icon/index.css */ "./node_modules/vant/lib/icon/index.css");

__webpack_require__(/*! ../../loading/index.css */ "./node_modules/vant/lib/loading/index.css");

__webpack_require__(/*! ../index.css */ "./node_modules/vant/lib/button/index.css");

/***/ }),

/***/ "./node_modules/vant/lib/icon/index.css":
/*!**********************************************!*\
  !*** ./node_modules/vant/lib/icon/index.css ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/vant/lib/loading/index.css":
/*!*************************************************!*\
  !*** ./node_modules/vant/lib/loading/index.css ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./node_modules/vant/lib/style/base.css":
/*!**********************************************!*\
  !*** ./node_modules/vant/lib/style/base.css ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(false) { var cssReload; }
  

/***/ }),

/***/ "./web/components/layout/App.vue":
/*!***************************************!*\
  !*** ./web/components/layout/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_185cf71c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=185cf71c */ "./web/components/layout/App.vue?vue&type=template&id=185cf71c");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./web/components/layout/App.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */


_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].ssrRender = _App_vue_vue_type_template_id_185cf71c__WEBPACK_IMPORTED_MODULE_0__["ssrRender"]
_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "web/components/layout/App.vue"

/* harmony default export */ __webpack_exports__["default"] = (_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./web/components/layout/App.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./web/components/layout/App.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_dist_index_js_ref_1_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/babel-loader/lib??ref--3-0!../../../node_modules/vue-loader/dist??ref--1-0!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./web/components/layout/App.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_dist_index_js_ref_1_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./web/components/layout/App.vue?vue&type=template&id=185cf71c":
/*!*********************************************************************!*\
  !*** ./web/components/layout/App.vue?vue&type=template&id=185cf71c ***!
  \*********************************************************************/
/*! exports provided: ssrRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_1_0_App_vue_vue_type_template_id_185cf71c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--1-0!./App.vue?vue&type=template&id=185cf71c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./web/components/layout/App.vue?vue&type=template&id=185cf71c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrRender", function() { return _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_1_0_App_vue_vue_type_template_id_185cf71c__WEBPACK_IMPORTED_MODULE_0__["ssrRender"]; });



/***/ }),

/***/ "./web/components/layout/index.vue":
/*!*****************************************!*\
  !*** ./web/components/layout/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9a12cea6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9a12cea6 */ "./web/components/layout/index.vue?vue&type=template&id=9a12cea6");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_9a12cea6_lang_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=9a12cea6&lang=less */ "./web/components/layout/index.vue?vue&type=style&index=0&id=9a12cea6&lang=less");

const script = {}


script.ssrRender = _index_vue_vue_type_template_id_9a12cea6__WEBPACK_IMPORTED_MODULE_0__["ssrRender"]
script.__file = "web/components/layout/index.vue"

/* harmony default export */ __webpack_exports__["default"] = (script);

/***/ }),

/***/ "./web/components/layout/index.vue?vue&type=style&index=0&id=9a12cea6&lang=less":
/*!**************************************************************************************!*\
  !*** ./web/components/layout/index.vue?vue&type=style&index=0&id=9a12cea6&lang=less ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_index_js_ref_5_2_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_dist_index_js_ref_1_0_index_vue_vue_type_style_index_0_id_9a12cea6_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader??ref--5-2!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/dist??ref--1-0!./index.vue?vue&type=style&index=0&id=9a12cea6&lang=less */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./web/components/layout/index.vue?vue&type=style&index=0&id=9a12cea6&lang=less");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/components/layout/index.vue?vue&type=template&id=9a12cea6":
/*!***********************************************************************!*\
  !*** ./web/components/layout/index.vue?vue&type=template&id=9a12cea6 ***!
  \***********************************************************************/
/*! exports provided: ssrRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_1_0_index_vue_vue_type_template_id_9a12cea6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--1-0!./index.vue?vue&type=template&id=9a12cea6 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./web/components/layout/index.vue?vue&type=template&id=9a12cea6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrRender", function() { return _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_1_0_index_vue_vue_type_template_id_9a12cea6__WEBPACK_IMPORTED_MODULE_0__["ssrRender"]; });



/***/ }),

/***/ "./web/pages/index/fetch.ts":
/*!**********************************!*\
  !*** ./web/pages/index/fetch.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref, ctx) {
    var _ctx$apiService;

    var store, router, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, router = _ref.router;

            if (true) {
              _context.next = 9;
              break;
            }

            _context.next = 4;
            return window.fetch('/api/index');

          case 4:
            _context.next = 6;
            return _context.sent.json();

          case 6:
            _context.t0 = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return ctx === null || ctx === void 0 ? void 0 : (_ctx$apiService = ctx.apiService) === null || _ctx$apiService === void 0 ? void 0 : _ctx$apiService.index();

          case 11:
            _context.t0 = _context.sent;

          case 12:
            data = _context.t0;
            _context.next = 15;
            return store.dispatch('indexStore/initialData', {
              payload: data
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./web/pages/index/render.vue":
/*!************************************!*\
  !*** ./web/pages/index/render.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_vue_vue_type_template_id_6781c9f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.vue?vue&type=template&id=6781c9f2 */ "./web/pages/index/render.vue?vue&type=template&id=6781c9f2");
/* harmony import */ var _render_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.vue?vue&type=script&lang=ts */ "./web/pages/index/render.vue?vue&type=script&lang=ts");
/* empty/unused harmony star reexport *//* harmony import */ var _render_vue_vue_type_style_index_0_id_6781c9f2_lang_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.vue?vue&type=style&index=0&id=6781c9f2&lang=less */ "./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less");





_render_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].ssrRender = _render_vue_vue_type_template_id_6781c9f2__WEBPACK_IMPORTED_MODULE_0__["ssrRender"]
_render_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "web/pages/index/render.vue"

/* harmony default export */ __webpack_exports__["default"] = (_render_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./web/pages/index/render.vue?vue&type=script&lang=ts":
/*!************************************************************!*\
  !*** ./web/pages/index/render.vue?vue&type=script&lang=ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_dist_index_js_ref_1_0_render_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/babel-loader/lib??ref--3-0!../../../node_modules/vue-loader/dist??ref--1-0!./render.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./web/pages/index/render.vue?vue&type=script&lang=ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_dist_index_js_ref_1_0_render_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less":
/*!*********************************************************************************!*\
  !*** ./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_hot_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_1_node_modules_css_loader_index_js_ref_5_2_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_node_modules_less_loader_dist_cjs_js_ref_5_4_node_modules_vue_loader_dist_index_js_ref_1_0_render_vue_vue_type_style_index_0_id_6781c9f2_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-hot-loader!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../../node_modules/css-loader??ref--5-2!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/less-loader/dist/cjs.js??ref--5-4!../../../node_modules/vue-loader/dist??ref--1-0!./render.vue?vue&type=style&index=0&id=6781c9f2&lang=less */ "./node_modules/css-hot-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./web/pages/index/render.vue?vue&type=style&index=0&id=6781c9f2&lang=less");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./web/pages/index/render.vue?vue&type=template&id=6781c9f2":
/*!******************************************************************!*\
  !*** ./web/pages/index/render.vue?vue&type=template&id=6781c9f2 ***!
  \******************************************************************/
/*! exports provided: ssrRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_1_0_render_vue_vue_type_template_id_6781c9f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--2-0!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--1-0!./render.vue?vue&type=template&id=6781c9f2 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./web/pages/index/render.vue?vue&type=template&id=6781c9f2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ssrRender", function() { return _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_1_0_render_vue_vue_type_template_id_6781c9f2__WEBPACK_IMPORTED_MODULE_0__["ssrRender"]; });



/***/ }),

/***/ "./web/store/index.ts":
/*!****************************!*\
  !*** ./web/store/index.ts ***!
  \****************************/
/*! exports provided: modules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modules", function() { return modules; });
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/index */ "./web/store/modules/index.ts");
/* harmony import */ var _modules_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/detail */ "./web/store/modules/detail.ts");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./web/store/modules/search.ts");



var modules = {
  indexStore: _modules_index__WEBPACK_IMPORTED_MODULE_0__["indexStore"],
  detailStore: _modules_detail__WEBPACK_IMPORTED_MODULE_1__["detailStore"],
  searchStore: _modules_search__WEBPACK_IMPORTED_MODULE_2__["searchStore"]
};


/***/ }),

/***/ "./web/store/modules/detail.ts":
/*!*************************************!*\
  !*** ./web/store/modules/detail.ts ***!
  \*************************************/
/*! exports provided: detailStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailStore", function() { return detailStore; });
var detailStore = {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    setData: function setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    initialData: function initialData(_ref, _ref2) {
      var commit = _ref.commit;
      var payload = _ref2.payload;
      commit('setData', payload);
    }
  }
};


/***/ }),

/***/ "./web/store/modules/index.ts":
/*!************************************!*\
  !*** ./web/store/modules/index.ts ***!
  \************************************/
/*! exports provided: indexStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexStore", function() { return indexStore; });
var indexStore = {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    setData: function setData(state, payload) {
      state.data = payload.data;
    }
  },
  actions: {
    initialData: function initialData(_ref, _ref2) {
      var commit = _ref.commit;
      var payload = _ref2.payload;
      commit('setData', payload);
    }
  }
};


/***/ }),

/***/ "./web/store/modules/search.ts":
/*!*************************************!*\
  !*** ./web/store/modules/search.ts ***!
  \*************************************/
/*! exports provided: searchStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchStore", function() { return searchStore; });
var searchStore = {
  namespaced: true,
  state: {
    searchText: ''
  },
  mutations: {
    setText: function setText(state, payload) {
      state.searchText = payload.text;
    }
  },
  actions: {
    setText: function setText(_ref, _ref2) {
      var commit = _ref.commit;
      var payload = _ref2.payload;
      commit('setText', payload);
    }
  }
};


/***/ }),

/***/ 0:
/*!**********************************************************************!*\
  !*** multi ./node_modules/ssr-plugin-vue3/cjs/entry/server-entry.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tapas/myworkspace/95598-mobile/node_modules/ssr-plugin-vue3/cjs/entry/server-entry.js */"./node_modules/ssr-plugin-vue3/cjs/entry/server-entry.js");


/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@vue/server-renderer":
/*!***************************************!*\
  !*** external "@vue/server-renderer" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@vue/server-renderer");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "ssr-server-utils":
/*!***********************************!*\
  !*** external "ssr-server-utils" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ssr-server-utils");

/***/ }),

/***/ "vant/lib/button":
/*!**********************************!*\
  !*** external "vant/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vant/lib/button");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "vue-router":
/*!*****************************!*\
  !*** external "vue-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),

/***/ "vuex":
/*!***********************!*\
  !*** external "vuex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnZ1ZT9kYzI2Iiwid2VicGFjazovLy8uL3dlYi9wYWdlcy9pbmRleC9yZW5kZXIudnVlP2Q2NzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nzci1wbHVnaW4tdnVlMy9janMvZW50cnkvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zc3ItcGx1Z2luLXZ1ZTMvY2pzL2VudHJ5L3NlcnZlci1lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3NyLXRlbXBvcmFyeS1yb3V0ZXMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbnQvbGliL2JhZGdlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFudC9saWIvYnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFudC9saWIvYnV0dG9uL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YW50L2xpYi9pY29uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFudC9saWIvbG9hZGluZy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbnQvbGliL3N0eWxlL2Jhc2UuY3NzIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9BcHAudnVlP2UxMmYiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L0FwcC52dWU/MmQ5YiIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvQXBwLnZ1ZT9hYmMyIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnZ1ZT9kMGM1Iiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9pbmRleC52dWU/NDhjYiIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvaW5kZXgvZmV0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci52dWU/NzdmMSIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvaW5kZXgvcmVuZGVyLnZ1ZT83YmI5Iiwid2VicGFjazovLy8uL3dlYi9wYWdlcy9pbmRleC9yZW5kZXIudnVlPzljZDQiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci52dWU/YmQ5YyIsIndlYnBhY2s6Ly8vLi93ZWIvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3N0b3JlL21vZHVsZXMvZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3dlYi9zdG9yZS9tb2R1bGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3dlYi9zdG9yZS9tb2R1bGVzL3NlYXJjaC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB2dWUvc2VydmVyLXJlbmRlcmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzc3Itc2VydmVyLXV0aWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmFudC9saWIvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZXhcIiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNyZWF0ZVN0b3JlIiwiY3JlYXRlUm91dGVyIiwidnVlX3JvdXRlcl8xIiwicmVxdWlyZSIsInZ1ZXhfMSIsIlJvdXRlcyIsInN0b3JlIiwiRmVSb3V0ZXMiLCJvcHRpb25zIiwiX2EiLCJiYXNlIiwiaGlzdG9yeSIsIl9faXNCcm93c2VyX18iLCJjcmVhdGVNZW1vcnlIaXN0b3J5Iiwicm91dGVzIiwidnVlXzEiLCJzc3Jfc2VydmVyX3V0aWxzXzEiLCJzZXJpYWxpemUiLCJjcmVhdGVfMSIsIkFwcCIsImxheW91dEZldGNoIiwiTGF5b3V0IiwiQkFTRV9OQU1FIiwic2VydmVyUmVuZGVyIiwiY3R4IiwiY29uZmlnIiwiZ2xvYmFsIiwid2luZG93IiwiX19WVUVfUFJPRF9ERVZUT09MU19fIiwiX2IiLCJyb3V0ZXIiLCJwYXRoIiwicmVxdWVzdCIsIm5vcm1hbGl6ZVBhdGgiLCJjc3NPcmRlciIsImpzT3JkZXIiLCJkeW5hbWljIiwibW9kZSIsImN1c3RvbWVIZWFkU2NyaXB0IiwiY2h1bmtOYW1lIiwicm91dGVJdGVtIiwiZmluZFJvdXRlIiwiVml0ZU1vZGUiLCJwcm9jZXNzIiwiZW52IiwiQlVJTERfVE9PTCIsIkVycm9yIiwiZHluYW1pY0Nzc09yZGVyIiwiY29uY2F0Iiwid2VicGFja0NodW5rTmFtZSIsImFkZEFzeW5jQ2h1bmsiLCJnZXRNYW5pZmVzdCIsIm1hbmlmZXN0IiwiaXNDc3IiLCJfYyIsInF1ZXJ5IiwiY3NyIiwibG9nR3JlZW4iLCJmZXRjaCIsInB1c2giLCJpc1JlYWR5IiwibGF5b3V0RmV0Y2hEYXRhIiwiZmV0Y2hEYXRhIiwiY3VycmVudFJvdXRlIiwiY29tYmluZUF5c25jRGF0YSIsImFzc2lnbiIsImFzeW5jRGF0YSIsImluamVjdENzcyIsImgiLCJyZWwiLCJocmVmIiwiZm9yRWFjaCIsImNzcyIsImluamVjdFNjcmlwdCIsInR5cGUiLCJzcmMiLCJtYXAiLCJqcyIsInN0YXRlIiwiX2QiLCJhcHAiLCJjcmVhdGVTU1JBcHAiLCJyZW5kZXIiLCJyZW1Jbml0aWFsIiwiaW5uZXJIVE1MIiwidml0ZUNsaWVudCIsIml0ZW0iLCJkZXNjcmliZSIsImNvbnRlbnQiLCJjaGlsZHJlbiIsImlkIiwiaW5pdGlhbERhdGEiLCJjc3NJbmplY3QiLCJqc0luamVjdCIsInVzZSIsIl9fVlVFX0FQUF9fIiwianNvbiIsImFwaVNlcnZpY2UiLCJpbmRleCIsImRhdGEiLCJkaXNwYXRjaCIsInBheWxvYWQiLCJtb2R1bGVzIiwiaW5kZXhTdG9yZSIsImRldGFpbFN0b3JlIiwic2VhcmNoU3RvcmUiLCJuYW1lc3BhY2VkIiwibXV0YXRpb25zIiwic2V0RGF0YSIsImFjdGlvbnMiLCJjb21taXQiLCJzZWFyY2hUZXh0Iiwic2V0VGV4dCIsInRleHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdB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O0FBQUEsSUFBTUksV0FBVyxHQUFHO0FBQ2xCQyxZQUFVLEVBQUUsSUFETTtBQUVsQjVCLE9BQUssRUFBRTtBQUNMaUMsY0FBVSxFQUFFO0FBRFAsR0FGVztBQUtsQkosV0FBUyxFQUFFO0FBQ1RLLFdBRFMsbUJBQ0FsQyxLQURBLEVBQ091QixPQURQLEVBQ2dCO0FBQ3ZCdkIsV0FBSyxDQUFDaUMsVUFBTixHQUFtQlYsT0FBTyxDQUFDWSxJQUEzQjtBQUNEO0FBSFEsR0FMTztBQVVsQkosU0FBTyxFQUFFO0FBQ1BHLFdBRE8sZ0NBQzJCO0FBQUEsVUFBdkJGLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLFVBQVhULE9BQVcsU0FBWEEsT0FBVztBQUNoQ1MsWUFBTSxDQUFDLFNBQUQsRUFBWVQsT0FBWixDQUFOO0FBQ0Q7QUFITTtBQVZTLENBQXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJQYWdlLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPHJvdXRlci12aWV3IC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy8g5Zyo6L+Z6YeM5Y+v5Lul6L+b6KGM5LiA5Lqb5YWo5bGA57uE5Lu255qE5rOo5YaM6YC76L6RXG5leHBvcnQgZGVmYXVsdCB7XG5cbn1cbjwvc2NyaXB0PlxuIiwiXG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgYmxvY2s+XG4gICAgICBidXR0b25cbiAgICA8L0J1dHRvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuLy8gaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndmFudCdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBCdXR0b25cbiAgfSxcbiAgY3JlYXRlZCAoKSB7XG4gIH1cbn0pXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XG4uY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuPC9zdHlsZT5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MjY5NDA4NjMwNzlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYyNjk0MTE3NjE4NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlU3RvcmUgPSBleHBvcnRzLmNyZWF0ZVJvdXRlciA9IHZvaWQgMDtcbmNvbnN0IHZ1ZV9yb3V0ZXJfMSA9IHJlcXVpcmUoXCJ2dWUtcm91dGVyXCIpO1xuY29uc3QgdnVleF8xID0gcmVxdWlyZShcInZ1ZXhcIik7XG4vLyBAdHMtZXhwZWN0LWVycm9yXG5jb25zdCBSb3V0ZXMgPSByZXF1aXJlKFwic3NyLXRlbXBvcmFyeS1yb3V0ZXNcIik7XG5jb25zdCB7IHN0b3JlLCBGZVJvdXRlcyB9ID0gUm91dGVzO1xuZnVuY3Rpb24gY3JlYXRlUm91dGVyKG9wdGlvbnMgPSB7fSkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBiYXNlID0gKF9hID0gb3B0aW9ucy5iYXNlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnLyc7XG4gICAgcmV0dXJuIHZ1ZV9yb3V0ZXJfMS5jcmVhdGVSb3V0ZXIoe1xuICAgICAgICBoaXN0b3J5OiBfX2lzQnJvd3Nlcl9fID8gdnVlX3JvdXRlcl8xLmNyZWF0ZVdlYkhpc3RvcnkoYmFzZSkgOiB2dWVfcm91dGVyXzEuY3JlYXRlTWVtb3J5SGlzdG9yeSgpLFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIHJvdXRlczogRmVSb3V0ZXNcbiAgICB9KTtcbn1cbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZnVuY3Rpb24gY3JlYXRlU3RvcmUoKSB7XG4gICAgcmV0dXJuIHZ1ZXhfMS5jcmVhdGVTdG9yZShzdG9yZSAhPT0gbnVsbCAmJiBzdG9yZSAhPT0gdm9pZCAwID8gc3RvcmUgOiB7fSk7XG59XG5leHBvcnRzLmNyZWF0ZVN0b3JlID0gY3JlYXRlU3RvcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gcmVxdWlyZShcInZ1ZVwiKTtcbmNvbnN0IHNzcl9zZXJ2ZXJfdXRpbHNfMSA9IHJlcXVpcmUoXCJzc3Itc2VydmVyLXV0aWxzXCIpO1xuY29uc3Qgc2VyaWFsaXplID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpO1xuLy8gQHRzLWV4cGVjdC1lcnJvclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcInNzci10ZW1wb3Jhcnktcm91dGVzXCIpO1xuY29uc3QgY3JlYXRlXzEgPSByZXF1aXJlKFwiLi9jcmVhdGVcIik7XG5jb25zdCB7IEZlUm91dGVzLCBBcHAsIGxheW91dEZldGNoLCBMYXlvdXQsIEJBU0VfTkFNRSB9ID0gUm91dGVzO1xuY29uc3Qgc2VydmVyUmVuZGVyID0gYXN5bmMgKGN0eCwgY29uZmlnKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIGdsb2JhbC53aW5kb3cgPSAoX2EgPSBnbG9iYWwud2luZG93KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7fTsgLy8g6Ziy5q2i6KaG55uW5LiK5bGC5bqU55So6Ieq5bex5a6a5LmJ55qEIHdpbmRvdyDlr7nosaFcbiAgICBnbG9iYWwuX19WVUVfUFJPRF9ERVZUT09MU19fID0gKF9iID0gZ2xvYmFsLl9fVlVFX1BST0RfREVWVE9PTFNfXykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gY3JlYXRlXzEuY3JlYXRlUm91dGVyKCk7XG4gICAgbGV0IHBhdGggPSBjdHgucmVxdWVzdC5wYXRoOyAvLyDov5nph4zlj5YgcGF0aG5hbWUg5LiN6IO95aSf5YyF5ZCrIHF1ZXlTdHJpbmdcbiAgICBpZiAoQkFTRV9OQU1FKSB7XG4gICAgICAgIHBhdGggPSBzc3Jfc2VydmVyX3V0aWxzXzEubm9ybWFsaXplUGF0aChwYXRoKTtcbiAgICB9XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVfMS5jcmVhdGVTdG9yZSgpO1xuICAgIGNvbnN0IHsgY3NzT3JkZXIsIGpzT3JkZXIsIGR5bmFtaWMsIG1vZGUsIGN1c3RvbWVIZWFkU2NyaXB0LCBjaHVua05hbWUgfSA9IGNvbmZpZztcbiAgICBjb25zdCByb3V0ZUl0ZW0gPSBzc3Jfc2VydmVyX3V0aWxzXzEuZmluZFJvdXRlKEZlUm91dGVzLCBwYXRoKTtcbiAgICBjb25zdCBWaXRlTW9kZSA9IHByb2Nlc3MuZW52LkJVSUxEX1RPT0wgPT09ICd2aXRlJztcbiAgICBpZiAoIXJvdXRlSXRlbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgIOafpeaJvue7hOS7tuWksei0pe+8jOivt+ehruiupOW9k+WJjSBwYXRoOiAke3BhdGh9IOWvueW6lOWJjeerr+e7hOS7tuaYr+WQpuWtmOWcqFxuICAgIOiLpeWIm+W7uuS6huaWsOeahOmhtemdouaWh+S7tuWkue+8jOivt+mHjeaWsOaJp+ihjCBucG0gc3RhcnQg6YeN5ZCv5pyN5YqhXG4gICAgYCk7XG4gICAgfVxuICAgIGxldCBkeW5hbWljQ3NzT3JkZXIgPSBjc3NPcmRlcjtcbiAgICBpZiAoZHluYW1pYyAmJiAhVml0ZU1vZGUpIHtcbiAgICAgICAgZHluYW1pY0Nzc09yZGVyID0gY3NzT3JkZXIuY29uY2F0KFtgJHtyb3V0ZUl0ZW0ud2VicGFja0NodW5rTmFtZX0uY3NzYF0pO1xuICAgICAgICBkeW5hbWljQ3NzT3JkZXIgPSBhd2FpdCBzc3Jfc2VydmVyX3V0aWxzXzEuYWRkQXN5bmNDaHVuayhkeW5hbWljQ3NzT3JkZXIsIHJvdXRlSXRlbS53ZWJwYWNrQ2h1bmtOYW1lKTtcbiAgICB9XG4gICAgY29uc3QgbWFuaWZlc3QgPSBWaXRlTW9kZSA/IHt9IDogYXdhaXQgc3NyX3NlcnZlcl91dGlsc18xLmdldE1hbmlmZXN0KCk7XG4gICAgY29uc3QgaXNDc3IgPSAhIShtb2RlID09PSAnY3NyJyB8fCAoKF9jID0gY3R4LnJlcXVlc3QucXVlcnkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jc3IpKTtcbiAgICBpZiAoaXNDc3IpIHtcbiAgICAgICAgc3NyX3NlcnZlcl91dGlsc18xLmxvZ0dyZWVuKGBDdXJyZW50IHBhdGggJHtwYXRofSB1c2UgY3NyIHJlbmRlciBtb2RlYCk7XG4gICAgfVxuICAgIGNvbnN0IHsgZmV0Y2ggfSA9IHJvdXRlSXRlbTtcbiAgICByb3V0ZXIucHVzaChwYXRoKTtcbiAgICBhd2FpdCByb3V0ZXIuaXNSZWFkeSgpO1xuICAgIGxldCBsYXlvdXRGZXRjaERhdGEgPSB7fTtcbiAgICBsZXQgZmV0Y2hEYXRhID0ge307XG4gICAgaWYgKCFpc0Nzcikge1xuICAgICAgICAvLyBjc3Ig5LiL5LiN6ZyA6KaB5pyN5Yqh56uv6I635Y+W5pWw5o2uXG4gICAgICAgIGlmIChsYXlvdXRGZXRjaCkge1xuICAgICAgICAgICAgbGF5b3V0RmV0Y2hEYXRhID0gYXdhaXQgbGF5b3V0RmV0Y2goeyBzdG9yZSwgcm91dGVyOiByb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlIH0sIGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZldGNoKSB7XG4gICAgICAgICAgICBmZXRjaERhdGEgPSBhd2FpdCBmZXRjaCh7IHN0b3JlLCByb3V0ZXI6IHJvdXRlci5jdXJyZW50Um91dGUudmFsdWUgfSwgY3R4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjb21iaW5lQXlzbmNEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgbGF5b3V0RmV0Y2hEYXRhICE9PSBudWxsICYmIGxheW91dEZldGNoRGF0YSAhPT0gdm9pZCAwID8gbGF5b3V0RmV0Y2hEYXRhIDoge30sIGZldGNoRGF0YSAhPT0gbnVsbCAmJiBmZXRjaERhdGEgIT09IHZvaWQgMCA/IGZldGNoRGF0YSA6IHt9KTtcbiAgICBjb25zdCBhc3luY0RhdGEgPSB7XG4gICAgICAgIHZhbHVlOiBjb21iaW5lQXlzbmNEYXRhXG4gICAgfTtcbiAgICBjb25zdCBpbmplY3RDc3MgPSBbXTtcbiAgICBpZiAoVml0ZU1vZGUpIHtcbiAgICAgICAgaW5qZWN0Q3NzLnB1c2godnVlXzEuaCgnbGluaycsIHtcbiAgICAgICAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgICAgICAgaHJlZjogYC9zZXJ2ZXIvc3RhdGljL2Nzcy8ke2NodW5rTmFtZX0uY3NzYFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkeW5hbWljQ3NzT3JkZXIuZm9yRWFjaChjc3MgPT4ge1xuICAgICAgICAgICAgaWYgKG1hbmlmZXN0W2Nzc10pIHtcbiAgICAgICAgICAgICAgICBpbmplY3RDc3MucHVzaCh2dWVfMS5oKCdsaW5rJywge1xuICAgICAgICAgICAgICAgICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogbWFuaWZlc3RbY3NzXVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGluamVjdFNjcmlwdCA9IFZpdGVNb2RlID8gdnVlXzEuaCgnc2NyaXB0Jywge1xuICAgICAgICB0eXBlOiAnbW9kdWxlJyxcbiAgICAgICAgc3JjOiAnL25vZGVfbW9kdWxlcy9zc3ItcGx1Z2luLXZ1ZTMvZXNtL2VudHJ5L2NsaWVudC1lbnRyeS5qcydcbiAgICB9KSA6IGpzT3JkZXIubWFwKGpzID0+IHZ1ZV8xLmgoJ3NjcmlwdCcsIHtcbiAgICAgICAgc3JjOiBtYW5pZmVzdFtqc11cbiAgICB9KSk7XG4gICAgY29uc3Qgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCAoX2QgPSBzdG9yZS5zdGF0ZSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDoge30sIGFzeW5jRGF0YS52YWx1ZSk7XG4gICAgY29uc3QgYXBwID0gdnVlXzEuY3JlYXRlU1NSQXBwKHtcbiAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdnVlXzEuaChMYXlvdXQsIHsgY3R4LCBjb25maWcsIGFzeW5jRGF0YSwgZmV0Y2hEYXRhOiBsYXlvdXRGZXRjaERhdGEgfSwge1xuICAgICAgICAgICAgICAgIHJlbUluaXRpYWw6ICgpID0+IHZ1ZV8xLmgoJ3NjcmlwdCcsIHsgaW5uZXJIVE1MOiBcInZhciB3ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC8gMy43NTtkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLnN0eWxlWydmb250LXNpemUnXSA9IHcgKyAncHgnXCIgfSksXG4gICAgICAgICAgICAgICAgdml0ZUNsaWVudDogVml0ZU1vZGUgPyAoKSA9PiB2dWVfMS5oKCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtb2R1bGUnLFxuICAgICAgICAgICAgICAgICAgICBzcmM6ICcvQHZpdGUvY2xpZW50J1xuICAgICAgICAgICAgICAgIH0pIDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXN0b21lSGVhZFNjcmlwdDogKCkgPT4gY3VzdG9tZUhlYWRTY3JpcHQgPT09IG51bGwgfHwgY3VzdG9tZUhlYWRTY3JpcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1c3RvbWVIZWFkU2NyaXB0Lm1hcCgoaXRlbSkgPT4gdnVlXzEuaCgnc2NyaXB0JywgT2JqZWN0LmFzc2lnbih7fSwgaXRlbS5kZXNjcmliZSwge1xuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IGl0ZW0uY29udGVudFxuICAgICAgICAgICAgICAgIH0pKSksXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IGlzQ3NyID8gKCkgPT4gdnVlXzEuaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ2FwcCdcbiAgICAgICAgICAgICAgICB9KSA6ICgpID0+IHZ1ZV8xLmgoQXBwLCB7IGFzeW5jRGF0YSwgZmV0Y2hEYXRhOiBjb21iaW5lQXlzbmNEYXRhIH0pLFxuICAgICAgICAgICAgICAgIGluaXRpYWxEYXRhOiAhaXNDc3IgPyAoKSA9PiB2dWVfMS5oKCdzY3JpcHQnLCB7IGlubmVySFRNTDogYHdpbmRvdy5fX1VTRV9TU1JfXz10cnVlOyB3aW5kb3cuX19JTklUSUFMX0RBVEFfXyA9JHtzZXJpYWxpemUoc3RhdGUpfTt3aW5kb3cuX19VU0VfVklURV9fPSR7Vml0ZU1vZGV9YCB9KVxuICAgICAgICAgICAgICAgICAgICA6ICgpID0+IHZ1ZV8xLmgoJ3NjcmlwdCcsIHsgaW5uZXJIVE1MOiBgd2luZG93Ll9fVVNFX1ZJVEVfXz0ke1ZpdGVNb2RlfWAgfSksXG4gICAgICAgICAgICAgICAgY3NzSW5qZWN0OiAoKSA9PiBpbmplY3RDc3MsXG4gICAgICAgICAgICAgICAganNJbmplY3Q6ICgpID0+IGluamVjdFNjcmlwdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBhcHAudXNlKHJvdXRlcik7XG4gICAgYXBwLnVzZShzdG9yZSk7XG4gICAgYXdhaXQgcm91dGVyLmlzUmVhZHkoKTtcbiAgICB3aW5kb3cuX19WVUVfQVBQX18gPSBhcHA7XG4gICAgcmV0dXJuIGFwcDtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBzZXJ2ZXJSZW5kZXI7XG4iLCJcbiAgICAgICAgaW1wb3J0ICogYXMgc3RvcmUgZnJvbSBcIkAvc3RvcmUvaW5kZXgudHNcIlxuICAgICAgICBleHBvcnQgY29uc3QgRmVSb3V0ZXMgPSBbe1wiZmV0Y2hcIjogX19pc0Jyb3dzZXJfXyA/ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImluZGV4LWZldGNoXCIgKi8gJ0AvcGFnZXMvaW5kZXgvZmV0Y2gudHMnKSA6IHJlcXVpcmUoJ0AvcGFnZXMvaW5kZXgvZmV0Y2gudHMnKS5kZWZhdWx0LFwicGF0aFwiOlwiL1wiLFwiY29tcG9uZW50XCI6ICBfX2lzQnJvd3Nlcl9fID8gKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaW5kZXhcIiAqLyAnQC9wYWdlcy9pbmRleC9yZW5kZXIudnVlJykgOiByZXF1aXJlKCdAL3BhZ2VzL2luZGV4L3JlbmRlci52dWUnKS5kZWZhdWx0LFwid2VicGFja0NodW5rTmFtZVwiOlwiaW5kZXhcIn1dIFxuICAgICAgICBleHBvcnQgeyBkZWZhdWx0IGFzIExheW91dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnZ1ZVwiXG4gICAgICAgIGV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwIH0gZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvQXBwLnZ1ZVwiXG4gICAgICAgIFxuICAgICAgICBleHBvcnQgeyBzdG9yZSB9XG4gICAgICAgIFxuICAgICAgICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjI2OTQwODYzNDU4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYyNjk0MDg2MzI4NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKCcuLi8uLi9zdHlsZS9iYXNlLmNzcycpO1xuXG5yZXF1aXJlKCcuLi8uLi9iYWRnZS9pbmRleC5jc3MnKTtcblxucmVxdWlyZSgnLi4vLi4vaWNvbi9pbmRleC5jc3MnKTtcblxucmVxdWlyZSgnLi4vLi4vbG9hZGluZy9pbmRleC5jc3MnKTtcblxucmVxdWlyZSgnLi4vaW5kZXguY3NzJyk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYyNjk0MDg2MzUwNlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MjY5NDA4NjM1MjlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjI2OTQwODYzNDQzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiaW1wb3J0IHsgc3NyUmVuZGVyIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODVjZjcxY1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQuc3NyUmVuZGVyID0gc3NyUmVuZGVyXG5zY3JpcHQuX19maWxlID0gXCJ3ZWIvY29tcG9uZW50cy9sYXlvdXQvQXBwLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMS0wIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMS0wIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEtMCEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg1Y2Y3MWNcIiIsImltcG9ydCB7IHNzclJlbmRlciB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YTEyY2VhNlwiXG5jb25zdCBzY3JpcHQgPSB7fVxuXG5pbXBvcnQgXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlhMTJjZWE2Jmxhbmc9bGVzc1wiXG5zY3JpcHQuc3NyUmVuZGVyID0gc3NyUmVuZGVyXG5zY3JpcHQuX19maWxlID0gXCJ3ZWIvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1ob3QtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS01LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtNCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEtMCEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTlhMTJjZWE2Jmxhbmc9bGVzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEtMCEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YTEyY2VhNlwiIiwiaW1wb3J0IHsgSVNTUkNvbnRleHQgfSBmcm9tICdzc3ItdHlwZXMnXG5pbXBvcnQgeyBJbmRleERhdGEgfSBmcm9tICdAL2ludGVyZmFjZSdcbmludGVyZmFjZSBJQXBpU2VydmljZSB7XG4gIGluZGV4OiAoKSA9PiBQcm9taXNlPEluZGV4RGF0YT5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgc3RvcmUsIHJvdXRlciB9LCBjdHg/OiBJU1NSQ29udGV4dDx7XG4gIGFwaVNlcnZpY2U/OiBJQXBpU2VydmljZVxufT4pID0+IHtcbiAgLy8g6ZiF6K+75paH5qGj6I635b6X5pu05aSa5L+h5oGvIGh0dHA6Ly9kb2Muc3NyLWZjLmNvbS9kb2NzL2ZlYXR1cmVzJGZldGNoIyVFNSU4OCVBNCVFNiU5NiVBRCVFNSVCRCU5MyVFNSU4OSU4RCVFNyU4RSVBRiVFNSVBMiU4M1xuICBjb25zdCBkYXRhID0gX19pc0Jyb3dzZXJfXyA/IGF3YWl0IChhd2FpdCB3aW5kb3cuZmV0Y2goJy9hcGkvaW5kZXgnKSkuanNvbigpIDogYXdhaXQgY3R4Py5hcGlTZXJ2aWNlPy5pbmRleCgpXG4gIGF3YWl0IHN0b3JlLmRpc3BhdGNoKCdpbmRleFN0b3JlL2luaXRpYWxEYXRhJywgeyBwYXlsb2FkOiBkYXRhIH0pXG59XG4iLCJpbXBvcnQgeyBzc3JSZW5kZXIgfSBmcm9tIFwiLi9yZW5kZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3ODFjOWYyXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yZW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9yZW5kZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njc4MWM5ZjImbGFuZz1sZXNzXCJcbnNjcmlwdC5zc3JSZW5kZXIgPSBzc3JSZW5kZXJcbnNjcmlwdC5fX2ZpbGUgPSBcIndlYi9wYWdlcy9pbmRleC9yZW5kZXIudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xLTAhLi9yZW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xLTAhLi9yZW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWhvdC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTUtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMS0wIS4vcmVuZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3ODFjOWYyJmxhbmc9bGVzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEtMCEuL3JlbmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc4MWM5ZjJcIiIsImltcG9ydCB7IGluZGV4U3RvcmUgfSBmcm9tICcuL21vZHVsZXMvaW5kZXgnXG5pbXBvcnQgeyBkZXRhaWxTdG9yZSB9IGZyb20gJy4vbW9kdWxlcy9kZXRhaWwnXG5pbXBvcnQgeyBzZWFyY2hTdG9yZSB9IGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnXG5cbmNvbnN0IG1vZHVsZXMgPSB7XG4gIGluZGV4U3RvcmUsXG4gIGRldGFpbFN0b3JlLFxuICBzZWFyY2hTdG9yZVxufVxuZXhwb3J0IHtcbiAgbW9kdWxlc1xufVxuIiwiY29uc3QgZGV0YWlsU3RvcmUgPSB7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlOiB7XG4gICAgZGF0YToge31cbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgc2V0RGF0YSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLmRhdGEgPSBwYXlsb2FkXG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgaW5pdGlhbERhdGEgKHsgY29tbWl0IH0sIHsgcGF5bG9hZCB9KSB7XG4gICAgICBjb21taXQoJ3NldERhdGEnLCBwYXlsb2FkKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBkZXRhaWxTdG9yZVxufVxuIiwiY29uc3QgaW5kZXhTdG9yZSA9IHtcbiAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgc3RhdGU6IHtcbiAgICBkYXRhOiB7fVxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBzZXREYXRhIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgc3RhdGUuZGF0YSA9IHBheWxvYWQuZGF0YVxuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGluaXRpYWxEYXRhICh7IGNvbW1pdCB9LCB7IHBheWxvYWQgfSkge1xuICAgICAgY29tbWl0KCdzZXREYXRhJywgcGF5bG9hZClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgaW5kZXhTdG9yZVxufVxuIiwiY29uc3Qgc2VhcmNoU3RvcmUgPSB7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlOiB7XG4gICAgc2VhcmNoVGV4dDogJydcbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgc2V0VGV4dCAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBwYXlsb2FkLnRleHRcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBzZXRUZXh0ICh7IGNvbW1pdCB9LCB7IHBheWxvYWQgfSkge1xuICAgICAgY29tbWl0KCdzZXRUZXh0JywgcGF5bG9hZClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgc2VhcmNoU3RvcmVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdnVlL3NlcnZlci1yZW5kZXJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzc3Itc2VydmVyLXV0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbnQvbGliL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
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
  _push("<!--[--><!-- \u6CE8\uFF1ALayout \u53EA\u4F1A\u5728\u670D\u52A1\u7AEF\u88AB\u6E32\u67D3\uFF0C\u4E0D\u8981\u5728\u6B64\u8FD0\u884C\u5BA2\u6237\u7AEF\u6709\u5173\u903B\u8F91 --><!-- \u9875\u9762\u521D\u59CB\u5316\u6570\u636E\u6CE8\u5165\u5185\u5BB9\u5DF2\u7ECF\u8FC7 serialize-javascript \u8F6C\u4E49 \u9632\u6B62 xss --><html".concat(Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__["ssrRenderAttrs"])(_attrs), "><head><meta charSet=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=\"theme-color\" content=\"#000000\"><title>Serverless Side Render for Vue3</title>"));

  Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__["ssrRenderSlot"])(_ctx.$slots, "viteClient", {}, null, _push, _parent);

  _push("<!-- \u521D\u59CB\u5316\u79FB\u52A8\u7AEF rem \u8BBE\u7F6E\uFF0C\u5982\u4E0D\u9700\u8981\u53EF\u81EA\u884C\u5220\u9664 -->");

  Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__["ssrRenderSlot"])(_ctx.$slots, "remInitial", {}, null, _push, _parent);

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

  _push("<div".concat(Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__["ssrRenderAttrs"])(_attrs), ">"));

  _push(Object(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__["ssrRenderComponent"])(_component_Button, null, {
    "default": Object(vue__WEBPACK_IMPORTED_MODULE_0__["withCtx"])(function (_, _push, _parent, _scopeId) {
      if (_push) {
        _push("button");
      } else {
        return [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("button")];
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
/* empty/unused harmony star reexport */


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnZ1ZT9kYzI2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zc3ItcGx1Z2luLXZ1ZTMvY2pzL2VudHJ5L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3NyLXBsdWdpbi12dWUzL2Nqcy9lbnRyeS9zZXJ2ZXItZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nzci10ZW1wb3Jhcnktcm91dGVzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YW50L2xpYi9iYWRnZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbnQvbGliL2J1dHRvbi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbnQvbGliL2J1dHRvbi9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFudC9saWIvaWNvbi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZhbnQvbGliL2xvYWRpbmcvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YW50L2xpYi9zdHlsZS9iYXNlLmNzcyIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvQXBwLnZ1ZT9lMTJmIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9BcHAudnVlPzJkOWIiLCJ3ZWJwYWNrOi8vLy4vd2ViL2NvbXBvbmVudHMvbGF5b3V0L0FwcC52dWU/YWJjMiIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3dlYi9jb21wb25lbnRzL2xheW91dC9pbmRleC52dWU/ZDBjNSIsIndlYnBhY2s6Ly8vLi93ZWIvY29tcG9uZW50cy9sYXlvdXQvaW5kZXgudnVlPzQ4Y2IiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L2ZldGNoLnRzIiwid2VicGFjazovLy8uL3dlYi9wYWdlcy9pbmRleC9yZW5kZXIudnVlPzc3ZjEiLCJ3ZWJwYWNrOi8vLy4vd2ViL3BhZ2VzL2luZGV4L3JlbmRlci52dWU/N2JiOSIsIndlYnBhY2s6Ly8vLi93ZWIvcGFnZXMvaW5kZXgvcmVuZGVyLnZ1ZT9iZDljIiwid2VicGFjazovLy8uL3dlYi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi93ZWIvc3RvcmUvbW9kdWxlcy9kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3N0b3JlL21vZHVsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vd2ViL3N0b3JlL21vZHVsZXMvc2VhcmNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHZ1ZS9zZXJ2ZXItcmVuZGVyZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNzci1zZXJ2ZXItdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YW50L2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWUtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVleFwiIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY3JlYXRlU3RvcmUiLCJjcmVhdGVSb3V0ZXIiLCJ2dWVfcm91dGVyXzEiLCJyZXF1aXJlIiwidnVleF8xIiwiUm91dGVzIiwic3RvcmUiLCJGZVJvdXRlcyIsIm9wdGlvbnMiLCJfYSIsImJhc2UiLCJoaXN0b3J5IiwiX19pc0Jyb3dzZXJfXyIsImNyZWF0ZU1lbW9yeUhpc3RvcnkiLCJyb3V0ZXMiLCJ2dWVfMSIsInNzcl9zZXJ2ZXJfdXRpbHNfMSIsInNlcmlhbGl6ZSIsImNyZWF0ZV8xIiwiQXBwIiwibGF5b3V0RmV0Y2giLCJMYXlvdXQiLCJCQVNFX05BTUUiLCJzZXJ2ZXJSZW5kZXIiLCJjdHgiLCJjb25maWciLCJnbG9iYWwiLCJ3aW5kb3ciLCJfX1ZVRV9QUk9EX0RFVlRPT0xTX18iLCJfYiIsInJvdXRlciIsInBhdGgiLCJyZXF1ZXN0Iiwibm9ybWFsaXplUGF0aCIsImNzc09yZGVyIiwianNPcmRlciIsImR5bmFtaWMiLCJtb2RlIiwiY3VzdG9tZUhlYWRTY3JpcHQiLCJjaHVua05hbWUiLCJyb3V0ZUl0ZW0iLCJmaW5kUm91dGUiLCJWaXRlTW9kZSIsInByb2Nlc3MiLCJlbnYiLCJCVUlMRF9UT09MIiwiRXJyb3IiLCJkeW5hbWljQ3NzT3JkZXIiLCJjb25jYXQiLCJ3ZWJwYWNrQ2h1bmtOYW1lIiwiYWRkQXN5bmNDaHVuayIsImdldE1hbmlmZXN0IiwibWFuaWZlc3QiLCJpc0NzciIsIl9jIiwicXVlcnkiLCJjc3IiLCJsb2dHcmVlbiIsImZldGNoIiwicHVzaCIsImlzUmVhZHkiLCJsYXlvdXRGZXRjaERhdGEiLCJmZXRjaERhdGEiLCJjdXJyZW50Um91dGUiLCJjb21iaW5lQXlzbmNEYXRhIiwiYXNzaWduIiwiYXN5bmNEYXRhIiwiaW5qZWN0Q3NzIiwiaCIsInJlbCIsImhyZWYiLCJmb3JFYWNoIiwiY3NzIiwiaW5qZWN0U2NyaXB0IiwidHlwZSIsInNyYyIsIm1hcCIsImpzIiwic3RhdGUiLCJfZCIsImFwcCIsImNyZWF0ZVNTUkFwcCIsInJlbmRlciIsInJlbUluaXRpYWwiLCJpbm5lckhUTUwiLCJ2aXRlQ2xpZW50IiwiaXRlbSIsImRlc2NyaWJlIiwiY29udGVudCIsImNoaWxkcmVuIiwiaWQiLCJpbml0aWFsRGF0YSIsImNzc0luamVjdCIsImpzSW5qZWN0IiwidXNlIiwiX19WVUVfQVBQX18iLCJqc29uIiwiYXBpU2VydmljZSIsImluZGV4IiwiZGF0YSIsImRpc3BhdGNoIiwicGF5bG9hZCIsIm1vZHVsZXMiLCJpbmRleFN0b3JlIiwiZGV0YWlsU3RvcmUiLCJzZWFyY2hTdG9yZSIsIm5hbWVzcGFjZWQiLCJtdXRhdGlvbnMiLCJzZXREYXRhIiwiYWN0aW9ucyIsImNvbW1pdCIsInNlYXJjaFRleHQiLCJzZXRUZXh0IiwidGV4dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQ0EsbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ0dBOztBQUVlLDBIQUFlLENBQUM7QUFDN0IsWUFBVSxFQUFF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QUEsVUFBdkJGLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLFVBQVhULE9BQVcsU0FBWEEsT0FBVztBQUNoQ1MsWUFBTSxDQUFDLFNBQUQsRUFBWVQsT0FBWixDQUFOO0FBQ0Q7QUFITTtBQVZTLENBQXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJQYWdlLnNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPHJvdXRlci12aWV3IC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy8g5Zyo6L+Z6YeM5Y+v5Lul6L+b6KGM5LiA5Lqb5YWo5bGA57uE5Lu255qE5rOo5YaM6YC76L6RXG5leHBvcnQgZGVmYXVsdCB7XG5cbn1cbjwvc2NyaXB0PlxuIiwiXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPEJ1dHRvbj5idXR0b248L0J1dHRvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuLy8gaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndmFudCdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBCdXR0b25cbiAgfSxcbiAgY3JlYXRlZCAoKSB7XG4gIH1cbn0pXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MjY5Mzc0OTQ1MjBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZVN0b3JlID0gZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSB2b2lkIDA7XG5jb25zdCB2dWVfcm91dGVyXzEgPSByZXF1aXJlKFwidnVlLXJvdXRlclwiKTtcbmNvbnN0IHZ1ZXhfMSA9IHJlcXVpcmUoXCJ2dWV4XCIpO1xuLy8gQHRzLWV4cGVjdC1lcnJvclxuY29uc3QgUm91dGVzID0gcmVxdWlyZShcInNzci10ZW1wb3Jhcnktcm91dGVzXCIpO1xuY29uc3QgeyBzdG9yZSwgRmVSb3V0ZXMgfSA9IFJvdXRlcztcbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihvcHRpb25zID0ge30pIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgYmFzZSA9IChfYSA9IG9wdGlvbnMuYmFzZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJy8nO1xuICAgIHJldHVybiB2dWVfcm91dGVyXzEuY3JlYXRlUm91dGVyKHtcbiAgICAgICAgaGlzdG9yeTogX19pc0Jyb3dzZXJfXyA/IHZ1ZV9yb3V0ZXJfMS5jcmVhdGVXZWJIaXN0b3J5KGJhc2UpIDogdnVlX3JvdXRlcl8xLmNyZWF0ZU1lbW9yeUhpc3RvcnkoKSxcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICByb3V0ZXM6IEZlUm91dGVzXG4gICAgfSk7XG59XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKCkge1xuICAgIHJldHVybiB2dWV4XzEuY3JlYXRlU3RvcmUoc3RvcmUgIT09IG51bGwgJiYgc3RvcmUgIT09IHZvaWQgMCA/IHN0b3JlIDoge30pO1xufVxuZXhwb3J0cy5jcmVhdGVTdG9yZSA9IGNyZWF0ZVN0b3JlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IHJlcXVpcmUoXCJ2dWVcIik7XG5jb25zdCBzc3Jfc2VydmVyX3V0aWxzXzEgPSByZXF1aXJlKFwic3NyLXNlcnZlci11dGlsc1wiKTtcbmNvbnN0IHNlcmlhbGl6ZSA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTtcbi8vIEB0cy1leHBlY3QtZXJyb3JcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoXCJzc3ItdGVtcG9yYXJ5LXJvdXRlc1wiKTtcbmNvbnN0IGNyZWF0ZV8xID0gcmVxdWlyZShcIi4vY3JlYXRlXCIpO1xuY29uc3QgeyBGZVJvdXRlcywgQXBwLCBsYXlvdXRGZXRjaCwgTGF5b3V0LCBCQVNFX05BTUUgfSA9IFJvdXRlcztcbmNvbnN0IHNlcnZlclJlbmRlciA9IGFzeW5jIChjdHgsIGNvbmZpZykgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBnbG9iYWwud2luZG93ID0gKF9hID0gZ2xvYmFsLndpbmRvdykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge307IC8vIOmYsuatouimhuebluS4iuWxguW6lOeUqOiHquW3seWumuS5ieeahCB3aW5kb3cg5a+56LGhXG4gICAgZ2xvYmFsLl9fVlVFX1BST0RfREVWVE9PTFNfXyA9IChfYiA9IGdsb2JhbC5fX1ZVRV9QUk9EX0RFVlRPT0xTX18pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9IGNyZWF0ZV8xLmNyZWF0ZVJvdXRlcigpO1xuICAgIGxldCBwYXRoID0gY3R4LnJlcXVlc3QucGF0aDsgLy8g6L+Z6YeM5Y+WIHBhdGhuYW1lIOS4jeiDveWkn+WMheWQqyBxdWV5U3RyaW5nXG4gICAgaWYgKEJBU0VfTkFNRSkge1xuICAgICAgICBwYXRoID0gc3NyX3NlcnZlcl91dGlsc18xLm5vcm1hbGl6ZVBhdGgocGF0aCk7XG4gICAgfVxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlXzEuY3JlYXRlU3RvcmUoKTtcbiAgICBjb25zdCB7IGNzc09yZGVyLCBqc09yZGVyLCBkeW5hbWljLCBtb2RlLCBjdXN0b21lSGVhZFNjcmlwdCwgY2h1bmtOYW1lIH0gPSBjb25maWc7XG4gICAgY29uc3Qgcm91dGVJdGVtID0gc3NyX3NlcnZlcl91dGlsc18xLmZpbmRSb3V0ZShGZVJvdXRlcywgcGF0aCk7XG4gICAgY29uc3QgVml0ZU1vZGUgPSBwcm9jZXNzLmVudi5CVUlMRF9UT09MID09PSAndml0ZSc7XG4gICAgaWYgKCFyb3V0ZUl0ZW0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcbiAgICDmn6Xmib7nu4Tku7blpLHotKXvvIzor7fnoa7orqTlvZPliY0gcGF0aDogJHtwYXRofSDlr7nlupTliY3nq6/nu4Tku7bmmK/lkKblrZjlnKhcbiAgICDoi6XliJvlu7rkuobmlrDnmoTpobXpnaLmlofku7blpLnvvIzor7fph43mlrDmiafooYwgbnBtIHN0YXJ0IOmHjeWQr+acjeWKoVxuICAgIGApO1xuICAgIH1cbiAgICBsZXQgZHluYW1pY0Nzc09yZGVyID0gY3NzT3JkZXI7XG4gICAgaWYgKGR5bmFtaWMgJiYgIVZpdGVNb2RlKSB7XG4gICAgICAgIGR5bmFtaWNDc3NPcmRlciA9IGNzc09yZGVyLmNvbmNhdChbYCR7cm91dGVJdGVtLndlYnBhY2tDaHVua05hbWV9LmNzc2BdKTtcbiAgICAgICAgZHluYW1pY0Nzc09yZGVyID0gYXdhaXQgc3NyX3NlcnZlcl91dGlsc18xLmFkZEFzeW5jQ2h1bmsoZHluYW1pY0Nzc09yZGVyLCByb3V0ZUl0ZW0ud2VicGFja0NodW5rTmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IG1hbmlmZXN0ID0gVml0ZU1vZGUgPyB7fSA6IGF3YWl0IHNzcl9zZXJ2ZXJfdXRpbHNfMS5nZXRNYW5pZmVzdCgpO1xuICAgIGNvbnN0IGlzQ3NyID0gISEobW9kZSA9PT0gJ2NzcicgfHwgKChfYyA9IGN0eC5yZXF1ZXN0LnF1ZXJ5KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY3NyKSk7XG4gICAgaWYgKGlzQ3NyKSB7XG4gICAgICAgIHNzcl9zZXJ2ZXJfdXRpbHNfMS5sb2dHcmVlbihgQ3VycmVudCBwYXRoICR7cGF0aH0gdXNlIGNzciByZW5kZXIgbW9kZWApO1xuICAgIH1cbiAgICBjb25zdCB7IGZldGNoIH0gPSByb3V0ZUl0ZW07XG4gICAgcm91dGVyLnB1c2gocGF0aCk7XG4gICAgYXdhaXQgcm91dGVyLmlzUmVhZHkoKTtcbiAgICBsZXQgbGF5b3V0RmV0Y2hEYXRhID0ge307XG4gICAgbGV0IGZldGNoRGF0YSA9IHt9O1xuICAgIGlmICghaXNDc3IpIHtcbiAgICAgICAgLy8gY3NyIOS4i+S4jemcgOimgeacjeWKoeerr+iOt+WPluaVsOaNrlxuICAgICAgICBpZiAobGF5b3V0RmV0Y2gpIHtcbiAgICAgICAgICAgIGxheW91dEZldGNoRGF0YSA9IGF3YWl0IGxheW91dEZldGNoKHsgc3RvcmUsIHJvdXRlcjogcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZSB9LCBjdHgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZXRjaCkge1xuICAgICAgICAgICAgZmV0Y2hEYXRhID0gYXdhaXQgZmV0Y2goeyBzdG9yZSwgcm91dGVyOiByb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlIH0sIGN0eCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY29tYmluZUF5c25jRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGxheW91dEZldGNoRGF0YSAhPT0gbnVsbCAmJiBsYXlvdXRGZXRjaERhdGEgIT09IHZvaWQgMCA/IGxheW91dEZldGNoRGF0YSA6IHt9LCBmZXRjaERhdGEgIT09IG51bGwgJiYgZmV0Y2hEYXRhICE9PSB2b2lkIDAgPyBmZXRjaERhdGEgOiB7fSk7XG4gICAgY29uc3QgYXN5bmNEYXRhID0ge1xuICAgICAgICB2YWx1ZTogY29tYmluZUF5c25jRGF0YVxuICAgIH07XG4gICAgY29uc3QgaW5qZWN0Q3NzID0gW107XG4gICAgaWYgKFZpdGVNb2RlKSB7XG4gICAgICAgIGluamVjdENzcy5wdXNoKHZ1ZV8xLmgoJ2xpbmsnLCB7XG4gICAgICAgICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgICAgICAgIGhyZWY6IGAvc2VydmVyL3N0YXRpYy9jc3MvJHtjaHVua05hbWV9LmNzc2BcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZHluYW1pY0Nzc09yZGVyLmZvckVhY2goY3NzID0+IHtcbiAgICAgICAgICAgIGlmIChtYW5pZmVzdFtjc3NdKSB7XG4gICAgICAgICAgICAgICAgaW5qZWN0Q3NzLnB1c2godnVlXzEuaCgnbGluaycsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IG1hbmlmZXN0W2Nzc11cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBpbmplY3RTY3JpcHQgPSBWaXRlTW9kZSA/IHZ1ZV8xLmgoJ3NjcmlwdCcsIHtcbiAgICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgICAgIHNyYzogJy9ub2RlX21vZHVsZXMvc3NyLXBsdWdpbi12dWUzL2VzbS9lbnRyeS9jbGllbnQtZW50cnkuanMnXG4gICAgfSkgOiBqc09yZGVyLm1hcChqcyA9PiB2dWVfMS5oKCdzY3JpcHQnLCB7XG4gICAgICAgIHNyYzogbWFuaWZlc3RbanNdXG4gICAgfSkpO1xuICAgIGNvbnN0IHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgKF9kID0gc3RvcmUuc3RhdGUpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IHt9LCBhc3luY0RhdGEudmFsdWUpO1xuICAgIGNvbnN0IGFwcCA9IHZ1ZV8xLmNyZWF0ZVNTUkFwcCh7XG4gICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZ1ZV8xLmgoTGF5b3V0LCB7IGN0eCwgY29uZmlnLCBhc3luY0RhdGEsIGZldGNoRGF0YTogbGF5b3V0RmV0Y2hEYXRhIH0sIHtcbiAgICAgICAgICAgICAgICByZW1Jbml0aWFsOiAoKSA9PiB2dWVfMS5oKCdzY3JpcHQnLCB7IGlubmVySFRNTDogXCJ2YXIgdyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAvIDMuNzU7ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5zdHlsZVsnZm9udC1zaXplJ10gPSB3ICsgJ3B4J1wiIH0pLFxuICAgICAgICAgICAgICAgIHZpdGVDbGllbnQ6IFZpdGVNb2RlID8gKCkgPT4gdnVlXzEuaCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW9kdWxlJyxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnL0B2aXRlL2NsaWVudCdcbiAgICAgICAgICAgICAgICB9KSA6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VzdG9tZUhlYWRTY3JpcHQ6ICgpID0+IGN1c3RvbWVIZWFkU2NyaXB0ID09PSBudWxsIHx8IGN1c3RvbWVIZWFkU2NyaXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXN0b21lSGVhZFNjcmlwdC5tYXAoKGl0ZW0pID0+IHZ1ZV8xLmgoJ3NjcmlwdCcsIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0uZGVzY3JpYmUsIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBpdGVtLmNvbnRlbnRcbiAgICAgICAgICAgICAgICB9KSkpLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBpc0NzciA/ICgpID0+IHZ1ZV8xLmgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdhcHAnXG4gICAgICAgICAgICAgICAgfSkgOiAoKSA9PiB2dWVfMS5oKEFwcCwgeyBhc3luY0RhdGEsIGZldGNoRGF0YTogY29tYmluZUF5c25jRGF0YSB9KSxcbiAgICAgICAgICAgICAgICBpbml0aWFsRGF0YTogIWlzQ3NyID8gKCkgPT4gdnVlXzEuaCgnc2NyaXB0JywgeyBpbm5lckhUTUw6IGB3aW5kb3cuX19VU0VfU1NSX189dHJ1ZTsgd2luZG93Ll9fSU5JVElBTF9EQVRBX18gPSR7c2VyaWFsaXplKHN0YXRlKX07d2luZG93Ll9fVVNFX1ZJVEVfXz0ke1ZpdGVNb2RlfWAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiAoKSA9PiB2dWVfMS5oKCdzY3JpcHQnLCB7IGlubmVySFRNTDogYHdpbmRvdy5fX1VTRV9WSVRFX189JHtWaXRlTW9kZX1gIH0pLFxuICAgICAgICAgICAgICAgIGNzc0luamVjdDogKCkgPT4gaW5qZWN0Q3NzLFxuICAgICAgICAgICAgICAgIGpzSW5qZWN0OiAoKSA9PiBpbmplY3RTY3JpcHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYXBwLnVzZShyb3V0ZXIpO1xuICAgIGFwcC51c2Uoc3RvcmUpO1xuICAgIGF3YWl0IHJvdXRlci5pc1JlYWR5KCk7XG4gICAgd2luZG93Ll9fVlVFX0FQUF9fID0gYXBwO1xuICAgIHJldHVybiBhcHA7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gc2VydmVyUmVuZGVyO1xuIiwiXG4gICAgICAgIGltcG9ydCAqIGFzIHN0b3JlIGZyb20gXCJAL3N0b3JlL2luZGV4LnRzXCJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEZlUm91dGVzID0gW3tcImZldGNoXCI6IF9faXNCcm93c2VyX18gPyAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJpbmRleC1mZXRjaFwiICovICdAL3BhZ2VzL2luZGV4L2ZldGNoLnRzJykgOiByZXF1aXJlKCdAL3BhZ2VzL2luZGV4L2ZldGNoLnRzJykuZGVmYXVsdCxcInBhdGhcIjpcIi9cIixcImNvbXBvbmVudFwiOiAgX19pc0Jyb3dzZXJfXyA/ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImluZGV4XCIgKi8gJ0AvcGFnZXMvaW5kZXgvcmVuZGVyLnZ1ZScpIDogcmVxdWlyZSgnQC9wYWdlcy9pbmRleC9yZW5kZXIudnVlJykuZGVmYXVsdCxcIndlYnBhY2tDaHVua05hbWVcIjpcImluZGV4XCJ9XSBcbiAgICAgICAgZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXlvdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9pbmRleC52dWVcIlxuICAgICAgICBleHBvcnQgeyBkZWZhdWx0IGFzIEFwcCB9IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L0FwcC52dWVcIlxuICAgICAgICBcbiAgICAgICAgZXhwb3J0IHsgc3RvcmUgfVxuICAgICAgICBcbiAgICAgICAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYyNjkzNzQ5NDc2N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MjY5Mzc0OTQ2NThcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZSgnLi4vLi4vc3R5bGUvYmFzZS5jc3MnKTtcblxucmVxdWlyZSgnLi4vLi4vYmFkZ2UvaW5kZXguY3NzJyk7XG5cbnJlcXVpcmUoJy4uLy4uL2ljb24vaW5kZXguY3NzJyk7XG5cbnJlcXVpcmUoJy4uLy4uL2xvYWRpbmcvaW5kZXguY3NzJyk7XG5cbnJlcXVpcmUoJy4uL2luZGV4LmNzcycpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MjY5Mzc0OTQ5MDdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL2Nzcy1ob3QtbG9hZGVyL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiZmlsZU1hcFwiOlwie2ZpbGVOYW1lfVwifSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTs7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjI2OTM3NDk0Nzg2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9jc3MtaG90LWxvYWRlci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImZpbGVNYXBcIjpcIntmaWxlTmFtZX1cIn0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7O1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYyNjkzNzQ5NDc1MlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vY3NzLWhvdC1sb2FkZXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJmaWxlTWFwXCI6XCJ7ZmlsZU5hbWV9XCJ9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpOztcbiAgICB9XG4gICIsImltcG9ydCB7IHNzclJlbmRlciB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg1Y2Y3MWNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuc2NyaXB0LnNzclJlbmRlciA9IHNzclJlbmRlclxuc2NyaXB0Ll9fZmlsZSA9IFwid2ViL2NvbXBvbmVudHMvbGF5b3V0L0FwcC52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEtMCEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEtMCEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xLTAhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4NWNmNzFjXCIiLCJpbXBvcnQgeyBzc3JSZW5kZXIgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWExMmNlYTZcIlxuY29uc3Qgc2NyaXB0ID0ge31cblxuaW1wb3J0IFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05YTEyY2VhNiZsYW5nPWxlc3NcIlxuc2NyaXB0LnNzclJlbmRlciA9IHNzclJlbmRlclxuc2NyaXB0Ll9fZmlsZSA9IFwid2ViL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtaG90LWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTQhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xLTAhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05YTEyY2VhNiZsYW5nPWxlc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0xLTAhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWExMmNlYTZcIiIsImltcG9ydCB7IElTU1JDb250ZXh0IH0gZnJvbSAnc3NyLXR5cGVzJ1xuaW1wb3J0IHsgSW5kZXhEYXRhIH0gZnJvbSAnQC9pbnRlcmZhY2UnXG5pbnRlcmZhY2UgSUFwaVNlcnZpY2Uge1xuICBpbmRleDogKCkgPT4gUHJvbWlzZTxJbmRleERhdGE+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IHN0b3JlLCByb3V0ZXIgfSwgY3R4PzogSVNTUkNvbnRleHQ8e1xuICBhcGlTZXJ2aWNlPzogSUFwaVNlcnZpY2Vcbn0+KSA9PiB7XG4gIC8vIOmYheivu+aWh+aho+iOt+W+l+abtOWkmuS/oeaBryBodHRwOi8vZG9jLnNzci1mYy5jb20vZG9jcy9mZWF0dXJlcyRmZXRjaCMlRTUlODglQTQlRTYlOTYlQUQlRTUlQkQlOTMlRTUlODklOEQlRTclOEUlQUYlRTUlQTIlODNcbiAgY29uc3QgZGF0YSA9IF9faXNCcm93c2VyX18gPyBhd2FpdCAoYXdhaXQgd2luZG93LmZldGNoKCcvYXBpL2luZGV4JykpLmpzb24oKSA6IGF3YWl0IGN0eD8uYXBpU2VydmljZT8uaW5kZXgoKVxuICBhd2FpdCBzdG9yZS5kaXNwYXRjaCgnaW5kZXhTdG9yZS9pbml0aWFsRGF0YScsIHsgcGF5bG9hZDogZGF0YSB9KVxufVxuIiwiaW1wb3J0IHsgc3NyUmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzgxYzlmMlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JlbmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5zY3JpcHQuc3NyUmVuZGVyID0gc3NyUmVuZGVyXG5zY3JpcHQuX19maWxlID0gXCJ3ZWIvcGFnZXMvaW5kZXgvcmVuZGVyLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMS0wIS4vcmVuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMS0wIS4vcmVuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTEtMCEuL3JlbmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc4MWM5ZjJcIiIsImltcG9ydCB7IGluZGV4U3RvcmUgfSBmcm9tICcuL21vZHVsZXMvaW5kZXgnXG5pbXBvcnQgeyBkZXRhaWxTdG9yZSB9IGZyb20gJy4vbW9kdWxlcy9kZXRhaWwnXG5pbXBvcnQgeyBzZWFyY2hTdG9yZSB9IGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnXG5cbmNvbnN0IG1vZHVsZXMgPSB7XG4gIGluZGV4U3RvcmUsXG4gIGRldGFpbFN0b3JlLFxuICBzZWFyY2hTdG9yZVxufVxuZXhwb3J0IHtcbiAgbW9kdWxlc1xufVxuIiwiY29uc3QgZGV0YWlsU3RvcmUgPSB7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlOiB7XG4gICAgZGF0YToge31cbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgc2V0RGF0YSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLmRhdGEgPSBwYXlsb2FkXG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgaW5pdGlhbERhdGEgKHsgY29tbWl0IH0sIHsgcGF5bG9hZCB9KSB7XG4gICAgICBjb21taXQoJ3NldERhdGEnLCBwYXlsb2FkKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBkZXRhaWxTdG9yZVxufVxuIiwiY29uc3QgaW5kZXhTdG9yZSA9IHtcbiAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgc3RhdGU6IHtcbiAgICBkYXRhOiB7fVxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBzZXREYXRhIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgc3RhdGUuZGF0YSA9IHBheWxvYWQuZGF0YVxuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGluaXRpYWxEYXRhICh7IGNvbW1pdCB9LCB7IHBheWxvYWQgfSkge1xuICAgICAgY29tbWl0KCdzZXREYXRhJywgcGF5bG9hZClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgaW5kZXhTdG9yZVxufVxuIiwiY29uc3Qgc2VhcmNoU3RvcmUgPSB7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlOiB7XG4gICAgc2VhcmNoVGV4dDogJydcbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgc2V0VGV4dCAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLnNlYXJjaFRleHQgPSBwYXlsb2FkLnRleHRcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBzZXRUZXh0ICh7IGNvbW1pdCB9LCB7IHBheWxvYWQgfSkge1xuICAgICAgY29tbWl0KCdzZXRUZXh0JywgcGF5bG9hZClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgc2VhcmNoU3RvcmVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdnVlL3NlcnZlci1yZW5kZXJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzc3Itc2VydmVyLXV0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbnQvbGliL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=